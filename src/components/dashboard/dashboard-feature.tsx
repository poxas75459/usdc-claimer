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
    "4zEuo8TXv2X5znWxxKLoJrkPMyJHmjjmGHc6Li7jqd1FTqdQrj2SFjNDsFB57JMCz3kNHbVq5fJ5BuDyQwEWYuvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51sAXWC7E8BhkHCeHKho5RdxH47CPdVDMZdxz2w1U7LEJwfDYpTvPfeaKjW5784XP9Z3jfNctPdhZcG1V1abMZ2N",
  "key1": "2QGhkkFeVUH1kLhUvstY4Qkom7PcS6P8TzbcMaS2eS7iNDeHHxgSNM68mPqyvWdsggLwgZsbQhyfi9q7SEpjJUBe",
  "key2": "3tra8gJWRQUcMzMnBiQQ8KBsxsXnTTwQCwgrqTDRuS2FerYPmNr4PSscC8GjPKANPorXYeiHdwEqp4tYwEG9Qwka",
  "key3": "48WiGXE2ffSy7mCkN9UxEeMWVn89sGVoiB2WzvLo1Frxpp2JpoWLBVc15qjAN8VtTmQcUGqJYPBExtgkn7Z8urUT",
  "key4": "5CESHgaEv5cPua257XwqzxZYxXUT5hcKvhKAvDqFUvt65MbZX849e5fCyyAVDypKES1uwCdN7W1kUArEn1rdSZsj",
  "key5": "3CBqDMnbEWwPMwX5L2V13fxa3M2LppWx8xNX1gzTnPAtCDnjsZThS9W2CuGDE7LdkmcXKhfp2GfNTnZLwMTwLi6p",
  "key6": "2iyHkn75nXm5nMpZGbic1Rp5iW4XWGtyoQ433fJeSJve3xW1BxM5nZUtTxDFkCxY43DJwLsMHumJfTd3tAfZLzmJ",
  "key7": "5dv9AaTsTbN3pimUq3r1MxANYdDzbcdGsfDhKYeYFK2XzMhKfKCfPB4swiPw25u6eaUakCCymkZKF1Sxrut54wjm",
  "key8": "29K9udGTgnVQPswsu7uN3BiTdPocm1AA9SXbE77vpFwfwAQgSaWup8ZHHdDv6vSEyWYpfVzDz1XUgcc5UGsTGn2m",
  "key9": "5YkbvUoCKKXSYSFNNNkzmxPaUgjBhS27JrwVKGBRkLh5VngKxTPLL7r229M7acjK7SWTeGHC4x2V8LdHLuHsUviF",
  "key10": "52sqGW6WXPJ9brt8fMvMz6ZXpqdpcDSSwfDruKZrVgNS3GYgazQUp4r1RQCJnw5x4T4R7Dez1rqkkZv5nJ3VYbaQ",
  "key11": "59rSxFgYhKH2X1NktRfGYDzzjPoJzDpsUU9SSymhwyfC69abdXao5VYAzUsFkiUMfrt6E93jqwsFE1JHwpSFBRpU",
  "key12": "2RVE8CnPjjicihTcYPbWWFUstzUEFGRqsmdaUBiYwZsdLw4JqwqGNMYERwv76oxnp4ivETb9GzhtjKn4aGr47hxP",
  "key13": "127iVM8BW5KJvfVmbuoDdizxTCaMW7Lk3tmJomDN38xpGW4FSL8fA4aiT1EQyfm6woA9egpyAYvZyAM8wjZdvXDi",
  "key14": "5QPAX6oqtSetuxY4KzwFAbZCYUFkB5CBfMyrPFq6xxRMYXR38FteXezGS6JwuUb9PPzcLwsfMJwTR1iKcDeQLCVJ",
  "key15": "53qMiGdKJRJXS5LPWPjFpxrfgQsd825idWgubapmdbzmkoUkJoXQRpZzkgEtb2fQqxJ6WQGzZr8N4oxyo4gULMWZ",
  "key16": "2c367ZjYNKVwQjGUGbbhzUbJSgqmYJNK95SPjw4E8wAYKu6HXN2tG5E9trshXT2td8wNaS1XpWpGL5LSQNmFrq9P",
  "key17": "2NAMkkhJCqQj6ed1xvnsD5KLyShDc36RQVdjReW6Dzt4MX54CD6DzqRXGLC2ZJxYTrnMYHjPq3sSAjNjLtangzmP",
  "key18": "4PAMJddpY5ChjWBYEg7kg5DvJKeaAxLwhyAdmk78m5Yg4nBS4ig4nJFfwkgyq34BczRKfMdgwis62oem2x7fXuSf",
  "key19": "2c2i3extPfMEHMDZNdXuLUXxQCva5Sp8Yh93uyv5f2dgY3R626eNFrpfhLLqyKsd6pYaYyqY5Sp8Qugxc6yt3LVD",
  "key20": "44hKixwEM5tho9By7M1sPFLc82bhSBNuVmGiQjG9itWJs8DCnmnG5QnW2vYkfVvj6mQpGfVeLEZVK7TuhEo9wXQ7",
  "key21": "59unchoUKWNtUbzFKpXmUE5iDWKq2XVUHfZDwMvJULpKm6MqgqeTwtnpm2sAT9FCMRsG2vi64W9MGuD6DMJ4LW62",
  "key22": "4QXw3NRoF3eHWrhEAa3j4fZ8EYn9MuH6LoSJ5Z4GhtiafmSA8NamF9w6ffM8F4adXmqDyen3TDfaEKchYDHkq5ej",
  "key23": "2WHiSeePRpdZHPNg2zg1yutxg5XTcDVcEA7WSJipZdT5Rq8t5BYVDKLpspjdvJPy7pZMhTzCWeCf6vL5AG5eq9p9",
  "key24": "3QP5eVD5L6ZaeEdqEKWc6gqyGV4MhJMZx1dE9kmN8b3iP34voGVPjSubE5e1BFhkDaD18xYBwCERWpJdgipCfTr1",
  "key25": "5YYzo52mi1uHbKyvcxHmWruLS2pUJSYxKmRfk7A9yzCTyg3768XEGZKjCcsvqVuH6qHJMXZ9aZtfgXr92k3bzFCF",
  "key26": "WWk76sWbtFG2LPjeFqvEx2uNjaVixw6LvPAgrbbhjVtwa2R3L6DHHmx3RZ3vC2zRyTst3pYvb9QgCmdvQ6mXUdP",
  "key27": "46WD7gwzytTFGFGbFaATg6UrwD23rRUp2ZA5YxCWngHMyPYMdWeCVVHypaYsKxC5cRthxfFNyWqQDuHFGtWqBGsy",
  "key28": "5DMo2XULCxRTKAXhP6gctJL27pN1KboXFXrcjdU6xfPVAxcaiJTxrnc3EZc2G3xMENC9VzDTACvLG79o6eyX7H8T",
  "key29": "5RBP4CMuYRQUhnCnTjVs45eur1zw3WRcv7zazYX96TPEg7tpiAgcUXBrecgRC2jFYrhfWUuxSRfnBsa4c6xTCF5b",
  "key30": "4v392uMJJXe9q5BUtXWYMnfsTGXBGt7L5LWZF8bN2XRMBLmUmTzWfEKPRqYyp3XeoHJ8V6aR7tFyMutFcpKSScF1",
  "key31": "4XbovEDE88DgP8NMSTMJCVEQGaXzEyAsT6jaga5ZGaSSdeYNJdTLfTtM3nX6jtc6b5WVuwTewXoCwxTYk9oKU9ZW",
  "key32": "65Tm5ADCAs47y62pPcNkLqNqKs14cFS7eDQ31v7AaPrxMrH6T6Lj9MiTVX6ScG8nE99jjcagjm9gWnMkehQr2V2y",
  "key33": "3DMzo9iXmwzxmyoZDGPED6ZXZK16XCRW4CN7GPAVkVvnNsFgchNEf1J89RJFTeZkXcZAHcBunsrC1CUmVy8P6nhU",
  "key34": "57QRW8iJ8DSxG6rky714u4QQKmQwFU8xB974xaVd7UTW4nWTCTVRLu3KYL3nSw3nFPiLp7hbfotWzbbbfV8ydZ9b",
  "key35": "5Ji581AVeJMLrzgxwLozXZYoFbTvFjMtmbieex2PdJT6JR4s1z1yaD9QABdo3KMDJYjuSeKt4vW9KdHUm4boEMHN",
  "key36": "ybyTttLNAPf9qkdixwXe2yfLrHEVUhU57BN2ZP21y4FqtJgEtQVGhPyk2U8DQK7xtknY3xWcepo9x9QPKuVijg2",
  "key37": "3MvQ8V91SyyD6vTFjK4LNmtBPnJ73Gb84ex3hjH75oh7XagFAhGxcKE1yiH2rE9SnTcPzMfHRer32E7Q7va6LWK4",
  "key38": "5V7jqu4jMF7H4PFWU6yD7W4YRNez4z8MB3vC9QG9wzMJNkZS41rpuPPJmtvmS5gwgDobQNc3NcK1MiWRArMDA25G",
  "key39": "55jExizgMrzpc7JsxvkvheBLLSwPPnVaRr44j5AxtTKvxxain34sm4qAMLDvDpzjSTsVgFKu1wM6yNsnPXTARQCM"
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
