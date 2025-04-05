/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4PvxXZkjtcN1zszUmf1WQo8CWEK5Zo2WfyA43ETtk6F7t8H8TfRLPnPEfbm9CssiipGsgqsL21rVvynaFBfXU39G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5unGvpJ9z4bXB5r9um5iKhZYcRftT9CLUwwVGtgMLdNd22wEmuhtpeLcZvPkgiKeRJjZfEU5NKbjoeaGhiQcBe8B",
  "key1": "3aSxQGVCkrZ2GTZkRZPHg6tUWfPjoBrZwxiasLJM3DJr84Wr7aAURTHKTk7TDRJQf9Du7LnMUtPXdrb5iNwZYmiw",
  "key2": "4jDUQrtiR7HeczYMqF323VMvEz8kNrJazUy4nAwPe4ohs5eKKP1Tm16iW87nDrU1KsaJX94DuUMfHRCdfV8Y7Qza",
  "key3": "23GnKQuXCtbuWJAPW4gWPbbfgNgxz11BfUvw1bkhfaMTHb1fqfLdEq29dnzkipVU3Mr3f6Fs8sdt6zNddUkDQEzX",
  "key4": "3EgQJYUaRpYkAVJ9w6PmHjWG6zWUDU4rBJi6uzU982SPtgk5RiR94MBz7qYFnt2HohiFKGfhs27xqJhmdRDJzyUK",
  "key5": "4xdUdyNtVpUVL2JteoxrSMduHkRaonYPZkx3gah7f6oYpDsvKRiJTHoM5KNDfbQ2eRreJHHVSpya9XNoJSLS4i7y",
  "key6": "3c3ve3Vik4CGicJV3xW81zaYjx2gHhM9Ms9WR7Pb8vQGFzMuMuX61r4eKf9hgd3nTtUoj1Q1pbt5itS8BVfVoLit",
  "key7": "4dvnBysRt132YHRQfsFywfprStgSGP5sHAvesK8R2uAQ9b3rCLaGmMR8MsRXgbgRG6aGNgNUBwL98TTQJdXLu6Mp",
  "key8": "29N5YLct1PtaWQvSt6BznVfPgfUmEWnF7bq8ng2AWMMTs1aWG7oiD5nUtHbxj5Y28oQ3jSzizWSCh3awaZuXv8jt",
  "key9": "E6Wrj9aXb7VS2CUAixabXb6oDU58BiZ2WiA9MG8ajUC9vqtMX9aQr96qrtEcfEhF4xShzvWyaniao7bHfu2as2A",
  "key10": "44FW4rGCpgyUFS1YsevrR8hwaVZ6nAWeXjNkvw4bsJ4kbsGa35T6NRSATKxUVYhmCAW8aqMaLi2fXEMW7RD8qoFV",
  "key11": "WfykP9WW6apuV6DjkvhagoTUDjBKo6B2sNt8pXXkBJ5CWeVvTKYbWXtsETLXsYikkfzbdS5PPxy1jn3Fo2j17m4",
  "key12": "fGUNJKFX6ABoRR8ctSHkcgyUBXCqFR9AtgFx2Rv6JFL3RaBeBR6eUFac6Jbr1PFr4L7HCZwBQzciWon8FLM1Lr5",
  "key13": "5S7kbJ8bs1P1Egt4avboZXSiULJc3VLQjpVXtmmyVjSS8gjAHbP3qcs9q9Ss7H4oWTHCGW9z1J2iofFzB8Ra3mdJ",
  "key14": "4HzBA5fZEwVkqWotYAo9nuP37yDMM9WcQvCgsn88rizcghEP8BaKVBuXPYf2LyYsPwgAHgr3FdSZxjbe3DKJsuCg",
  "key15": "2oC87xc98y6o3Q47o8W3uVm35NkHt9KQTKUisSGSWVcmSjDdyncv5aptG8CTV28Ab42G5CCehJfu4eamj7ajpBht",
  "key16": "LeroesuN8iaXeVDijanzZmVYkqWTkMvejFB2uNLLTYErsrx6PSiCGwLMais1iuEdPozftmdccSfvMdjBFWJFiif",
  "key17": "ikQnJxoSTLXxrz4m7nQ1vuJiuBNdQXBBDP3oPFP3ABD1QYXk3CTFv8dTXpYG2pivkNu9BXj3srJQ94ejGdFWhMi",
  "key18": "1omicsidnnVsNmN1Gfpd7WLg8H1erbeQo6cSYVS8qtApwoAdTVJqvhnGB4pnoY5fFnqpAFLLdoT397L6tTSYJsj",
  "key19": "3Yf6cRd55Z1dX9AoFaWXSHDmk9MXdPyMpNA65BrMszx6QRtUdvRZebXyFpMRwH8cZGvvT8jKBxL3dg7S43WnYa4C",
  "key20": "4hxccB45x5mBEDcz8frcMg7AyDXHMTWZragKqeZF7juP3XDakHXFeAwWxWwDeKwNexqrCKUiKzQR4WhSAFem5S2h",
  "key21": "M3XLcyxx3UqhP7ky7JdpQUpJhBnabFRGcoBLnjJni4K9zGopLSpQfRKjkHtXmm1JctMQJSqPoSPNkE9UPEBoVVF",
  "key22": "24JAHp2SXWUyWMksfV9CvauxYNg8J2uaBNv6ntpqVeqM9PpksrwBzFoA94XvsguLxpmHTJvSKQgZxXTZ9J4cJFJQ",
  "key23": "5t8MjWRwBV1mkWnaEgGpwmEVT3NXhMNw4Mfoi5oPVVXn4mHip5K1VUmZnjYUBynRnhq7tifUKRYVxkaDsZ2S2q2b",
  "key24": "2pHuDW7tWnsTP3QuQtRj2gZcefEsjzGZxAnh4kRsiQMAemB2ss2VCArNA7QpFrc5N3G2i7KDa3wgDhBhBbxDLh7G",
  "key25": "2qvLzbS3x8MjnP3fTuMnmwWtAsoMAm4u9oWemFhAG5ReNwNrjkuKWSniuz6imDSePoJm4fezevbPKiMUD2JqEZJT",
  "key26": "4pRsA75ywJ5Co9cU3WvvgfEfnJkzrLhyjYEVCY9jvdNVZQjeeEeBpZhyyjBsXhEsJtfsZP5f5tH3ZgJd1s4dop14",
  "key27": "27fAtmrWcF7g94uW1PkE7HbV4jgoEFGRCCfGP1buAQjbrMUyL3xtBuFyy9L9mAPKQUrgT1Fw8iL9ayRRKkw4npco",
  "key28": "3Fv1MBTaPXwc4q5uKow1KrqreMPTkP6J6M981GLKwLyE6KREvBN5XfKFhTBWgRbsQ16HUHcq9oLiHLiYPHhphpwt"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
