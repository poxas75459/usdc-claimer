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
    "2KUitd23oBWifNchZbDqAyuqsRCnuNMLXHhE7RUWchVFdAQ3pkS1UabUtNBeZo1UVvk6e8WoWNyj1uBrht4oEbDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FmtBh4weiJQsP4inW1iz4vAFJUVdR9bSJc9wUGbaZhbEckYM1oYDsdYShMedDzAD8RmGpFLUPqwEKTHZorKMdK5",
  "key1": "4pEXVGitnzWQUQy5Sr4oiwK7TLgqdMbP3q23Mjrcpo2ZmmAkLqbSJUZ5EQJJvfwhcQxTXrzbT9aZSz74YTQGF9eH",
  "key2": "46evq2bkb9CdCFUULWgu1gMhkFuqUpm7E96za74eoYya6dKNDfeXPWq8op61z38JqfAVAmhdDEvQCTHNEUPV9w5Q",
  "key3": "5sfnQ5kqtYyPvD98TB1X69rnw4y96Qs984BdNVqXL8pqAhKHWZ7fr9gJPApv9FoaVrLvBjuUmGDKawUXwWXKjEtY",
  "key4": "MbkLZhPPA94LQQPNGnMGhWjZEWjKeYsFzwcPfm78Lai26duQcFkLECAtegWctVG9cH7DhMtBDPZ45gxnVZRukZf",
  "key5": "5rZFSBdUzVtrkHuZzE2knjVa8FrpaKfsPB1RtiPpB2Whfe91fDvvDMqRLVgNkEWb8413rMSrDwvgzs1W8QncAB6M",
  "key6": "5ThdvFM9UBQpMbmZobXZxcXWGSuVuVmuVnTwEqKmqarqSBPUH1vWhy8x26JnKa9chzLhsTeuxMWMFZh8dootCHKT",
  "key7": "25Ttaf52UybAdHbVutLYNqknKP5Xx1UWxMM9BZsQHTU2CRTkLZbj59tZu2abLSgyKWCe6bVj8muqqZDpt5YdYVxx",
  "key8": "49qeWkhizeTsXoiUPoMor7NTWcEbkkxc3ygoqKjc6F6pwR1c5t9hEB6sEFyZcq5MeuYmAcoybcizmSjs5tTgf4Pw",
  "key9": "3wJF71WEBeuhmed1bUbbCQVtbDRPYaCFve3auAwSyP4fTukWKS3yMMRmrBhzmFyfCPcLEVrbp2dmPXbTxaUyUVMj",
  "key10": "4WYZNAGRtn2YJHij5dajtzDU7U97Z9jbaGHUYGpNtTbg3JysWfn6G5QUF1r4snSs936szk2KeAtfbGSP2iAii26Y",
  "key11": "jRUBnZKJdv4rhKYXETWgcTB2qHdUVkN4ufrZjzLuqzCcJ8jsxKKgd56voNpKuULf27cCfMzSFtQ2PzSNeZxcY6m",
  "key12": "2c2JtueUE47CYqQKTfUpWmo5zCttXbZTaNQeCVbcDvfYSdiGiWon69h9k2sjXie8p6bWntMFCVY8Tg9ijEwuowWM",
  "key13": "5nB6mzQZ1jMCFQLjSsUUxnkSNvmggZAkTDozioRGLoxwxhXKpZw9WSmjqx88PNVGZCdsMc3zqmVPCTmSgNuSh6jS",
  "key14": "y9Cbytnb8KK96g4Agu93sxGEzgYNxW6Zo8EveGBniLSuHtgsT1pDLMPrjoPwCLgzUme5FDrR2KKjE6Wnun6A5Mc",
  "key15": "2ihNhr7Mzuaj1qf6kGJQvQ6WeqJT6GiBRh2yL82WQj8aZQHjYhFyaN96XKaSeaNsTtbBN9exNDWftZMAoG3q2PZK",
  "key16": "3CkWCT25qYW4DKLSiFgtWh2k67L4W63Xmt35BXsAjZ1y8B3gYHKmG9wzuEWMeofaE5bC8oGSakjmYem9XY5xFJwb",
  "key17": "YRLjbzLS1B9ZsnHKjydsMVDNXF6q6HNjfgKAZUoeEBByyDMybGDAo6hi7i6Evx9nQQ1AuALxFE1JDKm9xrR45ex",
  "key18": "TCM63CKqUTL2in3ifzzVWLxx7wsh4MxCPB3qjhDMYHk7WjfXNfwmxVmaHAF6DoS1dVCSH4BuqubXRvLDixWiAvU",
  "key19": "5YNM3tmYYihGe9KWwYDBqaHyydWVcrVD9pkyUdWCb8jt8Tcn5kFy3tpjEDv4GSCAPnzyVH55FnwwaxqWZeszeY38",
  "key20": "2pVHnLaDKNzEkqSU6ppXrE1qiwVdoucU2g2kDRywEivVe6qsT5NKgQjCPqjCy5zsNGKQrhUUDk1gDkfWBFgtdfPc",
  "key21": "125bxMnSE1VvSWj6vzTjLy7PeRhmZR1ZirRja5SDuLmLbuMULJzfyxsNA6JXJahbToRLwt1SxP6mtwaDUYQuhK1j",
  "key22": "3t4JX5RPDBVP2AuyRZWqVdcG5bCBTqjrrHMDTvXpazLsBKvw44VinebyZVAUsjoGPnVdJTziqU7QesPjm6vbpWTE",
  "key23": "4wDbyQfZdxevjuxNfYbP2LDcHgi8EWXZmmPtigEzGkBwjwk1dwg84duwWBZF9hLMnTox5nxi56XxvDEEUKWt15YG",
  "key24": "uu16kSTUmP7orH1MpiciwxhuJMBtxWUwVJHoKMuppjbyRhtimKZnhyiBrrWvr2yiMCJeoNHP3oSTwfCtumnvAMW",
  "key25": "kPyNsFEA9tRGaYgCRKWB7uk9iUKYKrUWFjLiDLxBZu9LVSaqe794n26otU3VaPrz439pqfGk1mhXJDgFLoYz5SJ",
  "key26": "4vWfT3wD6V2HwnqZkwVCKhFzLLJxbevjqBqzPaNknhTwpoYcoTxH4jmh8JinQ1wss1bjMV8nceFxViiG6s2pVX3a",
  "key27": "3U2peByzz17wNDV2EjrwbACTm7fadAJYPENKvUfMhN9uwdRQbw5WsrADZtTQpLpGy8YPkxxig15ffgGQxBRLmk26",
  "key28": "2EH9cTgqusQ1ccAQeDNQUi2KbuUvkZuinp4TfHWxCKtyuA5ZyXPd4woqxpCbR9A7ftSEdWs1D8633EgBUU8oF1eJ",
  "key29": "4MaqwDk6Z8zrY2yzHQq4pYHKeqyrvMuUQNAvvCPQcdcq96o9L3iTkzT5RK76j9fKiawuin8LAKkQkD3GFaa2n9qa",
  "key30": "3XXe39F1gSwBo2Eiw8k5PdAAr5Yb5QhfWVB2XSkaFeQFtUgTRXyC3s6px2s5RgN2QGVnQfiXZQ7DNyPg3FN65myf",
  "key31": "2xwzp5CBnriySZmntjxBV63V4kh8A7GteRpxeND3ksc7i44tFE3WVAM6hpiPTrNekp4pvnvKWVrgbQLCidYbmtMN",
  "key32": "3E4k4anMjPKpuzFK6WdDuhzgSo8FP5LXKBn5Knzdw81TjKXzYFxbXsa4zjkHwjR47QVzNKNC5zQjHRahLPKciZcd",
  "key33": "2VNHsYnCrSKgqwHsWFbSsp7EUEhQigfEM9qBEf6XJqUmJYhyGq9dqPz3fRYFNQsnzpyBdtAxa38Fy1FntsRx9LRR",
  "key34": "2qhXhN3nQPZAuQmPoNqdbMky6QLa6eUi8i6ntqsPYdgTPp7iAf6QzKGxHZqiNJBjqncYmPVsnFNUu9MjSdijtZgN",
  "key35": "3Y5v1YJ4cC1fbcKj268oQC1xsLFfVHrDoG78MY35A3yjEVFWweEVb4nihAnhRC983NFrB8DeySMYeuQZHzo1ZA31",
  "key36": "66We2PE15Vv98PL45mWmRz91EdqcfF1u8eWGrDSJ4x9Sv2JRrvgodNk5WdbwcdqFrGuGbHWBrCQzhRjmhDGHvziw",
  "key37": "4Nt43CYjmCAZk8Sn4Pv8mySG4ru6spQtUys1zmXA9cpVfEFAvkBceFn2WSn7Z4ce4texdaYtimrxjQf1FsxKho7C"
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
