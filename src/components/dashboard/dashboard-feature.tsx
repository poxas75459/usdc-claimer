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
    "4axATdceweLCqeijU4ntC2Hzwrj3U3ijjRCpfxMqXFXequyJfLCzZL5uTXnkEVCG1V6q3mNQsgWYS9boWYMy7YHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GTYxmPzjnqUdMiqPsDLzywP8wRP8Y2J2JcbGPUtpKP4Wk6GppfET8wd1HH5xTykXJcfLSo7D8MwsTL3PFAqc8Kj",
  "key1": "4idNxBeydVuA8rqeCHyXpb7UbdSemuz2F6BuU8HamyS5KxfhSFF2RbJQtw8w5CFbHiEhc7pBv6Do3vpkJWGLs7jL",
  "key2": "2869aMthEfLRVN25vuwdYNCoDesnjYcs4X2RNmzUtCwXuaGRUtPXLks46YQF3aF5daHCE923edJSHyECsYSka8fH",
  "key3": "4vjdJDJvzwC14KH7hx15kEapX3HN1AJrJgnyVw3iufECP55sm6rPosk3S5gUD4NACxqEQFSwExA3QimRTLZRMkWb",
  "key4": "4et7BtyxFGM5DhKgiCkbzKNDJfkUaiPeJgRmGmqfArpxPqLTWUobbWPCEwjrWGuVCCHjFvFZrLujbswcDrnjFd8i",
  "key5": "4kq6rmJWveo89ABVcQsLGzdVXhmx13WENKvuvTyTR5JEcMiSDvqZHuyKqcyCEZxSsyYdQ7JeNT6P7yBGjm8X7uh4",
  "key6": "45eeZNba8VVsfVu1xcwAoPWqU8rxbbyminszswx9cs6p1DUNUNzDpcR2ZEmpkRKUcM9bhqzwJv4NoMnc6EpyfVYm",
  "key7": "2MstyXwQ7muzgs6DRsm5hTmW22ySzwgsGC26tdd6hwZd7Ao7WcThkdceyARfsGTSKQ3Bu1f3v2ZnyJhQ3AuF6qet",
  "key8": "4FsUfYzH7TNzrYNKfmTBRKBNBJHrFbo5JVHkisZsLBLtst7ZfU9WJRFbLGYH3riHaJCVYCPFUicaRQCJTP3vEUjb",
  "key9": "3StDioHz6zvz4YCuoqHtQ9hdkqyRhDVpZQ6NbjcuDCf7GPAP5wVsNS9LQKAyJREUttxDLJRQxN7ZsH9YExTqAmqY",
  "key10": "4aN49w8RhVs9QwCEAyCAdjor9qXVpSZdroP6BFnGQLbCWKxScWzdibMWUYs5fJAYuZ3UVGkhiMhvNFezo1qZKhef",
  "key11": "3iGSMbGmr9GCauYMRWxun7T9yZAaxuxWVoHMiWG31PbLi7VzqTsnaPMXmDoezLN911YD72mFbG91JWSuz5V4bEoE",
  "key12": "5USaKr94Mq1ABK2RVEBasLY4tcuvZ3vpBrVL7HMCa2g86ZwnYs2TfLh1QEG78wZ5JzxT7915eka3REQfkcJc4Xd6",
  "key13": "4wAut9PEWMd9euYiGtb2FZ6FrdKsfhhYyfixsN5zNtugh1PTf2YzAeBczTNwiNShKF5gD6Ajz3tJxMzbhFbJg3Cw",
  "key14": "4EjLBVZ4UFkdW2egDk7v6euNWCjmRztSRJzyHWPTepRqTLjiVZUYxxSKdtQU3hwDPKbYo9uAxSV6U8DfXoX8wuJa",
  "key15": "5uL1EDB4ZwSQJFwzPAxwKxUEfpcPUiVp6DCgMuWFwtnpgjNoqenR7bA89Zviuyi2M57gkQcgdwbhcehrMPkeYHdY",
  "key16": "EauUgrjMr4KcC4CG46vwg6RFQiH4szSnVSD71mhx2Bwa4Zr3NFUzzPjWsEBK3FgfSufRHXmsvk41aWFLVwSXeLG",
  "key17": "59LfDX1pHxJPNZzD3KbkrfnBuKx5J49C4pLxN2o4BQhSq1xZP8ueZqMdmhCAHsW9cU4ZgwzYGy9EzRjvtJULAGq1",
  "key18": "2CLjzGdMgsDo4aXKBr7D5ufwiLpdnLv7whkTP1tauvkNJqxoFGvL4KRoFsHUa9jineYdUP4nTqYZgapiJM6XqZnm",
  "key19": "4BefUpSTdJhg3KFCMfDBMHpbFh7uZ4j3Uyu6XtR6eMEb8xK2JkGVoD7dosAC2tZ6knRRKNa3qFLSYj3GCnrM1QjQ",
  "key20": "rXUqFkpqw2y22KiH6rsVqbnR5sEV8paZor1zf6um5yGiwarNWTsFnkJ2RcGTFXFZgMviqA2aQG6wXtGj5Dtn8cs",
  "key21": "4B6iMDNS8qdGtwJamCnppmr2h4DCL5G6H1WECbWGZB5CV15DA2D5qpd4F4wrYggS3QsATZAGDQ7HMh4MXSC5CRar",
  "key22": "4xURCgAkG9qrqmP9VvQg7UPHP42kYvdqSHadSq8o74r76rtsg7KvyuyXjk19kgbmvM9bz6wMtPS1f2HesA7UABbo",
  "key23": "4uTF4a4uG69kXHvxiTaSAVCucPUTwWExbP7D952vZ5CobU5dEZ4BRnRAX4AFs8Q33jmoyDPU7S9QfMV61HNRbKuJ",
  "key24": "5gdrC31tSuz6cyvA14hHwLTx2Y1cW4Jdtxm7ptCetQxgKGnNyvDAncs54u18ZGq1EN4An5x9sqMNmPvwP19LkMtH",
  "key25": "4QxsXCuQWLf1GyC1UA6tFweNeBzheJscWXEvMQ3ptCempjPDfF77orPorm2FBjenuNKtwSq3p5MK2KKEgJtRhGM3",
  "key26": "5W2S31GeTJvcVT7Dn2wGeHNXMoDMYezYyULedijuTyBtGEGh3q8FhzDpP5Qhu1sWrynAEWkxU4iePw1UiNeyZiMD",
  "key27": "55XvLvw4XA7GTRnEG1XEFH2M7SN3riRmUEbdr6PDEcs5wUpkNKyr2xcL9cZfwRyRn1Tno6tLXfakdrB4mQf1R8Ng",
  "key28": "22pVuxFpXuLoXFqLDitgBJNgUShdQ8mFeXLLa6TRBN5M3ppQybz4pNp2AYFSLQ9dwUvkAMay8w5A7hALLU5472oY",
  "key29": "3tRviwDtpAHomvuf6dvNLEc4fGGWLxxJ9mBaekjFPZe656mJjmLzMHagKDJL6258SawwXkDnYYHbVWP9MddsSpzX",
  "key30": "5PfWRzgCPWMUZgQMo27J6BKNvWVrRbXUgKcvfn46witjDwDEFcheFJ6ny3sj6Y4KSAwmQJ3ohmDATmnQdomuAnG4",
  "key31": "27KXMtwsN87enccoc9iBAcBraYUFk2pyNr59yaSJDMe9QQHbVEUW4SGFMCpchVoHRq5cBARnkYajfMWsRL2ouNVV",
  "key32": "4uTNTvroMQKZamkxrXR9qihcmVrc8KKzzJBrgmypycqN7wQ4y5sjP5gCMrvyTQ6BCj9GyptbiT5WgFJARg56e4xb",
  "key33": "5NeaAA9yLwLEqW2A2VS8PUvdiMxPBphZzpVkxWMGnCSghnqhTd9WBKXjh5j5svbVr2PiTirb1QaexRn5cPJJt4hn",
  "key34": "34JQ5LLN22uXkLQtYTp3dEi7h9FXVD6xrkK1jfBZCNF8MJ8z68g6sw39BCvpTMQBWqsuhJz6Fm82AGMRe3crzFq7",
  "key35": "2eecRNJHRrq3v5Efz8gE9QQwsAMsZ1i29oxqgCgGEr6qswnA1x8TVRNWL6z1FymdyM9AXho1advwKz4xk9rttdRv",
  "key36": "5vpJJVEzgB1gwGgV2V1bmNZxPqEKqcBveVZWQNhBTgLnoPAUNYVi1t6w1n7L3wQcq7qujwEyxsuZgkHcrS5RiyGW",
  "key37": "5L6RwVd9JufsoBAN6RLaxtB5XMqYDtf38T5onCGQ2YtmAopUYvLUXtp8FMtsDt9NeFvs1gLRK3vZMDHGhxchw4Aj",
  "key38": "4qpcnZMri84mMjkiuBq9kqbcXfC82LoeBsQ86j1y6kHVAAVjX6pfYY396AMW7yR49uMEwCbrXsPKeH7EsnRFZMy7",
  "key39": "98ebcnqHhjEa7nzzpqV53F5vz4DQ7uyT6446XKTwJNS8kyVz6o8bP4G6qfftADgYjkuLqpy3owqqLZnf4LPRHBf",
  "key40": "4odJR7deQfWd5BQwnSUvZexvLRQ5K1PvjrqKTShwbbhWajiHmhAh6xTwUn1Yz7Q6c5oTnZjnQ14zn1mJddXVh87Q",
  "key41": "2Fzbb6Jn8Sgd12MY5ett8keVZWLh2nbpcCKy3M7nmTMotSVMerFimseENohqa2xXNt1QyTWKxDNw9joe7X6exmjc",
  "key42": "27WCf6GL2bdBh9hkctRcVnnp9WGqPNGiB8ap7piJknM3tw6mTdWDvYwW3As2KdvYqQt5r7M34aCaCuDhWYDgYV8Y",
  "key43": "4J9G2Zhf65YXHzLMMZ8zK4oSRCg6JJB8m5A5YFRVhWPtWr1MFZP9eA7x7Mb7kfnrKQF7rZQTubA7dsbCmRzsFYzX",
  "key44": "rAWsC25L8ZAyXwcaQZXEVDapAPFuFF4HhdKvyZZMCb1dXBz61vc18iTqLVUTo6hK5c4zJJgiZfAtDDFpbDEtSTo",
  "key45": "J36qY4k2tjrVac9gYeC7oGdJyP8KU6aLiQRp7QdNa1Ltvj3ogWR6gAZS5ibctF78nsm4szCZzLjdfEVzcY6w5Wh",
  "key46": "2PsfCCwbfutVf5hkYJChVNNvK5L25Vum9Kt3umboR13UP1uztp5ZY92Ftf2FTPRF1UsDL7QYK9AP62asxiTcmKAS",
  "key47": "2W9GkkVAJUTTswAqFYtCkBz5eLLCMjzoeMYRN7ah21Hf1K9dxEZ8QEr1HGksZYoDrg1DX3SQTyEB48aZoSkMJ6LZ",
  "key48": "HDg1boiWWf1Uh5a9zQmPB4p6QXptDP3ziXxDFGmAmLckJvpUuymcY6YSPmqteMFyrfNBWPJ6qcWJGeuxkhAHoM8",
  "key49": "4kPdmUzimMHLmRJinyrwKhanjXuDnpjdnTm5EbYxhSZM6xsR1nEa66252ome5ssFMg54HivCuy4BFhRjWodGsbMN"
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
