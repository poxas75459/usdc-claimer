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
    "57MVjxZ7You3ZkUbxG2yzp9RPC6iJ2GWsdktHgHYfMyXsgN6bU4SYLjWWs8tUJYAkkLcZAEzBXdugrcYAZoXftRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AfdvtunMUoXbnX3mjtuqp7a8DK9wg4DNtt1GQEA5Zz81PsQrJANsij9HMP6B49Gtnua4U3fymm8GBxx3uQ2GWCc",
  "key1": "3bzkgHzysV9AjRTxjG75Dv7wSDqH3ooUe6PzREoXnP17BR21FTNx9WFTn5H3vgVc6gowEkeeCNtAoUgU4KNX9z3N",
  "key2": "36UvfjpreP6rx28UmH4PoTnRyPdajTz3wNmCr1U7EhXSnN6sm2idQpXwNASrVk4pCMRkQPeZ4h1Q1ZtpDPMqnvDN",
  "key3": "5EYHyCBKVcXHziJxuvAf97xfBcevqPMZZDdqyq53qwXm3jrZBtphGusjEF5qUMHhi9mr5QewY5nXiUzfQvFzqhVp",
  "key4": "4UErEyrGXktXqCa21ReyFSgreuLPxjkQQzfPDQfz4vTEccGSYqBTwUet92H7e8scW6eFzLTHmU1Eham7ePCqZRLp",
  "key5": "5375RwHEWAAn8GPXVyYKQH4VeLVCTnZKCPSF8eG9yA4oSMd78Vr61jzAUnZL6vS5w1WukCvwHjHu3xUkcu8amf7r",
  "key6": "4SXpXqdPDtaxncGPUMWuLNFGMQuRSiKcZtCudoMRFZs4w67hvdoktwnqQJ5ptxeagwMZ3FXAWq2A7MFmV8yVnC6L",
  "key7": "5r3yfEehqSYb3ak1oizMBco1Pt3mKZPpgNd5dQAEifsugNNUipDuztY74fiReHYrJjGcHdNf5a86CfvPEcQMy2xv",
  "key8": "44ABuwCXege2McGVitMWqzw1dABhJqD9ApKMR9y14wgLBcmDDej1eQbk2137qth69NFuxxZCfZMjhX9j12i9rH9Q",
  "key9": "2gqFZi1DmQdAFHNYvwT5oLf6p7vcrxocQvnhftoWwb5Yacod55CGZF49zjssSeKLajtsZhMWmTqpb8MRogTbwkgv",
  "key10": "5JZotQzgyTPvRfnNQJ1EvLj6gFheX8SGMg2WUXykCYm5GJ63zZWnMEVH9yee1K8C696Xkv2ZZaFJLqRJUJGxwMTE",
  "key11": "23Dv1yccADZxeYR8h1jx1goJ9SsVF6R47AqsjssNLwdUzWp6Dh9RWZNamgyRrwSuQNEPsDpA4Zj1dWWWqQCa6i3B",
  "key12": "46Awhr4gvAmcy8Raw8FCBAN4h4WsJ313Y9GD3KzZnZdmJdAZVcvvyyiKsFogZapmkbXauGCJ7aDvXHdrPwfBASgh",
  "key13": "5Y3RY9TRAhcAJJdBzRHDhSzXDcoeQZB8KjNUnRAeZj9dxNace26MHbfUAQ5QUQBYzpHBwnwc9eRFfPJdKTyB3tZU",
  "key14": "3tycu6C9Bb4MiSnyH52YNG9Zu7aQsBaExqHzZPFJbhFeEQWr9iYki7gar2X6vApstjCeG7UqX8sTWyWxjDu9KxdR",
  "key15": "4QZr2isUBAfa4S9MrLXs1TFHk3XVVWLMTwcBiJ7kMWvnohXeBxfQsmnMeZMpEi6tDcNcjCUwq8ZoTrUTmxjYyEjg",
  "key16": "urb7djfPce2Umwx6TAzn8MK2Ka42T5XgdbyydKyNhPQZDuuqhwTXV8D7H2H98sMGF4kXARLZNA4jPJwZi6UTaMR",
  "key17": "3fiKXYn8v9UTF44NdcxWUwj7T1GpCGBMrXNv8DVb7EuCuBrXgXQoomxcwBjYFW8r8aDuJbFLyjVAnm8FT8u8uvFA",
  "key18": "3QreNa4dLR9o73pLo2tawYdg29QSqwFrt4AfDiAxKhQfyrkBZifHgM8o2P4SHtzHw4ew2s9JJWSywKXq7oh76MW",
  "key19": "47KKxg8KRGVroJxTPVNoYkbfrm6yofbsQ28hiPUtm1k7xe3HLZXfWxSVWcRe6KceTDZiuNLTG2Pmy9HDtN7MPvqv",
  "key20": "3e9jpxoWLwMk49oS4pBzhqwYRtxngS1HRgqxxTCyTZeBR8Qr5U7WAiWNNEgzRBruoYmBjH9Qp6gCD4FgfLH3H6Fx",
  "key21": "5wbKjxTqwyrNzbs2wQRX7gvHw1pyvVb9pzXGuh2ihTgkHfAaAEQEvJ3MjCzYqiTjLfufHisUz43Y7upXkMtNNhpY",
  "key22": "dgrjNLAH6siysC8oAECvCtBSGPSSajk2KSMTyfe7e3Z3LahjQpiK7LtdMyD6rnxeiya1ptwKjUvYKzyDUrnbHW8",
  "key23": "42Ad54Y1SM1wXcfJRSrpcxvCq12jzsbevStjpmgKGZ57FQ5XZa9Mws694gu7V91sFp4DYLVpCCM5QpXHMAN4k7Q9",
  "key24": "4fdPUPYmn9eU9k7QRUZmSZYqri1P1ez83Cw98xpdEtgNF4gQ95c1kb84rwCqke9NAokqUH5p3MN3A4hxzv57GcEx",
  "key25": "3CxiaLSDSfGykH2t4oy5rDKactpyoWU5w5Emsgk5KXsCio5fhKnkJtEtYkYRDjEwEVQVMPZZ7hMi5WG5wf9pXevm",
  "key26": "tyP3mx6DGLjHUzdSymxoCY9qgDVbxCVEkGj7aeRDE1EuovCrRFErjvPCcAkEnfCo6Yd3aTHnzPLBaDGVYoeH4iM",
  "key27": "5TSKsEBVN8EmafM41g9N9VtWF7EGismVCnGaFwTBrXEEUdKwEKY9t1rBuer4Srn1XTZ4gKsDC3ANSL7pDJK8yYaQ",
  "key28": "59xgjZButLqPb8EpxzBSeNYTvsXfoBF3iRzGdkMcWM6DT9A7LoCi6cvFXnDffPbF2aXAyPbWRSWNXHgxNuqaqubB",
  "key29": "2DKLRGMp29TKxjn1HGHkFjNLj8cWkxYETq4nVe4PYkWEGVYUF3eDvFXi7CW1tDGQ7yrStkfk1wA8EDEjX3X17PrD"
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
