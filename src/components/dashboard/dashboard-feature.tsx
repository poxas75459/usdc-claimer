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
    "NBu7szy33iAXf7WBsTwJE9yypDhSrQziw4UMSXWrProfCJy7kZVMowZiL392FFWawazGfnmBV4gbNSbjvN8zjGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GWFuc6aP9CQAKN7SXvgg2Txh3EgKVDeDV9BaqoovXA7PJFz7AvGJyJfUJNgBS7mjyHyXeTu74MNbyUJBaJdNiH6",
  "key1": "4JUydhx6tvzhPvQUd53sgU2J8JGHHQ35XV5KchEonceN1GMWXm1C2e4tidSCqLBH5cwixgwjtQdsQsFzZzdJiGbP",
  "key2": "2oEzfNkKXqhz96HuznFT1rPjatyHBbziTLU7yT7pLGZcb248ZXB8qLHpyQbkwmHPPcaAVcLctk8vPE5QDQNhFxmz",
  "key3": "5caMVWaVk98LsgjAdrcZrC8oLKUtMTgV9yu28rpyN1iKZaCWP39kPwGtfUQZuC52t9YkT9q5WeGXCWPsLMjfz2W9",
  "key4": "5LgUNvg3esCGWmG1iQFFrMRVg5YG2LFm3oRrjESYQR3nGZxQSg8Rm9Mo8R89WjuzC85rXraT7QMj661GzNBCyR1G",
  "key5": "64i6qtoiXQGwPNGhwZoFV5Kr4dWCz5nrKgb3HMBtHjt2qFBN4r2Nrn2qjUa5oSb6BytjweEFPhNzg1whijPfU7Nv",
  "key6": "9TyXCz8bBusVWjFh27SRdFXk4esPzfPfso3DZC7s59HC5ZNawdgzax17wJFFMwqFtQ2zfTvjzehwTyBjKjiVTNM",
  "key7": "3hymii3pPwJewU1NGopUbX6u33PaVcuAjzo44mUn6NQi4joDfm6KcQYs4Nf1aGeLc1Mzpekbm9TL7FviQokcnt2D",
  "key8": "3QWPXFF2Y9YwB42gRPG5bK8PXTKGQ58ZN71gdQXWVUZwvMnyf3axwRrxCQH9uouueUD4g4c646UANSoyCukt94qT",
  "key9": "3E4NCqrrPPDxdnggZjC31g5in2oVo3j4FT3RKCrPDMidPpnm64xkfEfMdUTosmLSqJd3UJ398dp1CKbMGxo5toWR",
  "key10": "5uQnjdMzG92Yfk9YfUXgLgxXZVBfH5MMTkSwLM5SZp3hc2wxXxMr4FJPrmav7jaTPS8HvjoYsDZarS8NmwfYWeKd",
  "key11": "thPMbWtquPWAhPeX9kzyL4o6h46LEfjjfX3VTCyVxhmK8xLqU8kTYBAx4UgfMQTcJzPNrsWappKQupNn9Uay8j4",
  "key12": "8aKk8LN5Lnn4BNjrcbLnN3ozki6btK8RQApiJu3QsFDbMCSfikVTc4GsY6SQEnxKSATaqiBKgfLxyysgvhZ5N25",
  "key13": "67d5WU6L83NyH3DbaU2DvozbFobU47P1Ry5RXE26Eq8yop1vrUbCHLMuj82L16oAMNQaVqBeapN41u7Kcdp4Ujzc",
  "key14": "3g8XYQWq4NLNakStEkjs3MYgSehD9qD5w9gsiYV6HZpwde8CM2b2dWLAVy4uMKNBoeUzzsDSBaetcLdCMegrU5mU",
  "key15": "2uQxXo5JRGj1Dkyao2BpPFLd7pkKWn8sSDNFBzyYeZ7uGjTwpg5S6HNMEutJorXL7BTn9yuhqrRGjQ5vrkHKq1b7",
  "key16": "3UV6NAAbBk8XekHUYfjSQYEgkmkjAWus1LoS58xWJ8P6XnD8EVm2XyyWWFers8Cv4t9a9ELVtWa3Y4RbZeRUqzcD",
  "key17": "36hnr36opFZzSnSbtaNLGCX8KTTdhMv7LDZRhXTmhJEkcn59jtc2pVqJcdDT3onUV1WssrFbHgvM6zzwmDxbmSon",
  "key18": "25VHX56f3noqKUvk1NwxZrf3DzxFHDVbTAmN1X5rmg9QmzNYQRPy4KT8dJR3DJjTvRcsRb6YAFaUvv3DzKUnkY5C",
  "key19": "2CZXhYy8VrgTtRDvPk5znH5aD1XbXwWx7PbNH6vWSy8Bmd5CkMSrhGRxcJ5VvaNEM3smF3RviancdAUE2TKPFmpt",
  "key20": "3mpECYkhEb9nZAgKT9ambAHH3HeENDgnxBTLgXD84RgS4Bkqae2zikKv6bLcG4GgBhcLP2XupzK8ysYaq1MwA9Jx",
  "key21": "2ckEVaiohLsi6PRrrd8rN536fac3TcVn2uYZWNNSNv6o3ZRQju5gQzZJvXyVnJ3XxCyYbKuQGxdkzMfDwSpxn9Rx",
  "key22": "9sqvVjcLbLDgNgBwAMCcKtTqX89FzsttaUb6KGDu5CsXude42CPV5AqCWJeC6NBp6f9yJ7bGxWR5MMACCZyQ4gq",
  "key23": "3BA9bgAqYme77z1PCCUTVdXRMeRoXBwHHVrkyiYfrkzhfyy3FYZ82wd9bcYUkoNro7T7Bg93ZUR5SMjaqvwATvWj",
  "key24": "3tKPXQX8iB1pehDvLjzoayF8HZVUk6tYdGFsXwgF9AiJe7LqHfDmbP9sPt3P7AAUfAGyqT7Y95wHf9nA95PZGwZi",
  "key25": "4Gfx7GxgQPSwyg3b4FnMQgtbiDeJ1BnZogFKTca7Rc5kMoW2xR5EXVpsgAm8rXoJVqijxgeJquFZhCEUdRkWzdv8",
  "key26": "2KH8hzg1BxcRfmK2ijTpsyUd1RSz49NzybgnEpDQfNMBNwdRAQsSBUGpou7CmSqSJrdkExy1EsdraWA9mUsUXBJa",
  "key27": "2XS3hdbVS9snnQNhc57URFMBdZe9YXzPHMjpyJjxSwSak86asz7uzyXNqNyoM6VeSHUuBiMmpE76yyqJtpVMrRCK",
  "key28": "3Yf5gkR4vjDPMkYW2BhLQXYwdyCQDRmQAMrcnddGueBKn4qdMa68P6L4Uw29U4ALoP82P8xoB5bombjj286i1LBQ",
  "key29": "39DYPwmEV71yHZtV6ov6iRSgEfb7owM8dP9PJnoNpszMBPQdRZvEpRQHnVFHKSJk1WuqZwM6BRTmUMEGz23styHP",
  "key30": "2mm6225uWkohD1stsB5mcAu3tJzvVwkPzpXGpUsnbZqNk4ew2vLKNEbQMHgNMJ7MUf72bSAKbFsmoRuncBYvG8BL",
  "key31": "4K2im6WHqBSq8U1YM96hVsyHeeJSUasabb8pxEffp9jCMBEbB79PsDzCK9g1FWQmMuRgUpkqtZzg1Na8jozUqHZm",
  "key32": "m9gRk6WJBLyKjpQBnLvDb9HU1fYNvmQx7TEEq6taTfSwDxZvLoXqPL5V6yFLGcQnEM8SEWAP2dyKXAKFe1TxSeZ",
  "key33": "rwrTUXGaM7Xe6q8MkJoDGkgE1FWw5McHvanShGZLRZ4DqKrkmbdbrJHCJFkCQ327aBWBYE4vYrm3yhp5CEU4Dvc",
  "key34": "4gDy7bqgowVpSXN3U9mWouWTf5NZwW9pTzadRJKj8WvinSitDadZVE9Za2jDvL4SRoGwGNWYyqebkDyrRTR9Y2ZM",
  "key35": "2wokr3YBsdF5958bpYwo8hnefRUPD98Xgaq5SAzJAuURdF4Md3QKzZa9oyuLyHjY6ixQrReWLn9DotfXSPxv2BED",
  "key36": "5wiUwj73EXemHTZwdV6LxbiawuWZMRpuj5iR2V44ty6DJuTFguBmfLPm876wy2Tt1knKFkGXik8whDjUGEGP79Ky"
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
