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
    "3jjYjnCKViBvbn5tKdshrdMuK5YbMR59JZ1pQYo5wPSo6SiBZv6WCUrFvWhNUeD1TZz6da7AtLB4e62ZMsMRBYeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UWhX1CoS4Ua2FT99DbCbo7rYuW8mpwqUWgQhqhBWxwDdnDsCcGXqEgsjU8PyVdnqdqGnHjsrbxk6qthRFPwjfkW",
  "key1": "5mLktyF4H7xhwJTYkkaP3245UGvqtZvK9gWbbGYLMXCpJ9sgnEGn3nttHSwqbq1sqTohpGFHyZrV4novu6fFdYHo",
  "key2": "33jbDegHKRE7n5S7YCCWxctdZ2XXptLBKxKSr9VRaG833VoFMk7i7KB4GD1Cqn1AoHerrjVZ3KH5bF5UxEzMakHw",
  "key3": "3FEZ6xyZkUZiXQSUPmtU47QMZZJ91ekdGA8DtNYpXeEeqSZUfJcuEu5aV6pCK4aS44gx1U83ViJuunMXH5wDG4np",
  "key4": "4iqu5S8RjYKqz1aAyMyyVTCfKayE7K2g8hLazWJt5Gs7F6MQo2onZB77zeFbLxxD63pezi9QtPyp3jowoeadtwY9",
  "key5": "2ojsMUuue9Pum5uY1NKF8VAvvaDTVT7aP9m3acaVqHwcE1zNAYANRPGcHMduscrSmN8hfgrvfEs9DwHkDGsXHeBL",
  "key6": "4N3okdA7ChhbGc4FEtoefwWjxjPKHkPX5GjPbLp4SBMwEsBc3CJgmKeNqtbNHPFi4Gd1LDNmsp3LPakpTqQchDin",
  "key7": "ivc7cyTUdaap57ggq6DyLFf1MyQU1JKvnUgR1fA3KAU2ene9aCNvt9a9bLE8cDvi5Nsxj8pRDVSXJJzK9R4QdNV",
  "key8": "37Lvo7WXGeDhWhYnbys7FBsgRcEnMYhqHQtALbhCqxACqdT2XF6wghdLzDDMx3cLBHhpysiZXbfURQStbEyXBrma",
  "key9": "4bYRsj8XSaAKiKUmP9CDrC4wWe52rSjkqrpFXLLKsdGHco7uExLZhZen3JtDa4r2ULNRRwfiimAUeTHgS5rARR1b",
  "key10": "JiYjRksSGQKVsv4a5auDXogPUYYFbDMgtf6iCcuNcsbHdh5VNsXCjGYAk55jeUSPbEQFRhq48P1WMRiQ5sDUsa2",
  "key11": "61ZjBadyQ78mG8n5R291cNjkNHeH1sHP3i5P1RutbsKiK6bKCHXBYpZqE2Sqa293rY7hFMq3HG5ner86s7hkmvy6",
  "key12": "5ZQxJQzB1UP2qUSVTGdEe1MJxPm6EyhAeMAuqdYNKUtUo5pgT7iwMb1pKTiyj4kDVijt56bRv2Dio2RvYDVndhsD",
  "key13": "4LsG6zzREFcYN9kLJnBRyUavMNyMnPNiz2hfRusz4gERGgeUrN7rXfq4WzRz9y77M9CDMRp6hHRkxrDHbfK4JP4i",
  "key14": "sknVBy6m9HnomVPbQBvwaStGnLm7DtSLMLMbbxPUB1r3WzwnPuLPP6uCoaDYsXrWnKKCLqvrY4wyHKYdq3kSUvm",
  "key15": "3vDWXmazYsCnui49iMdB2gUq9sqd9q1mfeb5fDdbKNr7VQJzz9R5DWJhS3qdTi72G7S1jU8MgLLFmrhi4u5zHfzd",
  "key16": "57HvpQuvdxy4jZEPTcRQqS9qFGk5adXsAeXkSYUUReECbS8phjjyoyeKJShsUHzG3jcFYq5VdGAfFayHNaMXp6Mf",
  "key17": "5FjUNHBHNzYRcyusC6Uef2H4kJpCQH9sULVgKVUdy2jVsTKxnA9TdEBr9mCigbPWWDYrWfS96A9buZGWrNfj5Y4c",
  "key18": "5yMe6UwpwNJbaoaAMxkKpMYnMJSocQC7tybhErF7Nxnh1nZJoUX9nzSARe2hQRfGb1YZXzBXdt4mwmJUZQ9EkxeK",
  "key19": "4kyUFhBgufUZn4eGn4xoHhwA7gKAgHKXmTnXEkxCoEaJBJdCDonTAuf73eSCkXEGedwwmN5VKyEgCUhkDHzfMjpF",
  "key20": "4f89JEPsJtnM3xFNkEmKUtrVx93XrsmHzQU6MeVUo37yQA4KUE4NKmzvLMRgnvZu3e6kPtgvsb8nquZjXZigsPcK",
  "key21": "2t4BscnkWdXywdzGckyKmDcenoVeTz2viB9ZzzKukq1YveULqGcU9qDp3BJ5RDpCe5e72jEBUpmsJhGkUtscUDnu",
  "key22": "2qt1CRuDQKtMcCJSd7oFecDdYEy3JKnuUPzFPZqQxoe4KTpm73EX88LrdtgsMK9hzAk35xKoCi79yWuyPp6qF2nA",
  "key23": "4umiUW283x7cKGHzGPjgVuCMUYA74AUMqismooqFNusozVrUvxDveDLQrE4BNroGWH8hxXhJH3iXaawnjkvpNfSW",
  "key24": "3xXGfETvfbaVZVxb4HbccUwS268sxfJr7TvwFs6k5Sp3eSCN1eA6gcApW6wJ8VktcZWbk1VFEcSNFU4RxkvpDJtT",
  "key25": "DnMiRMKLUxAXXYTSr2HG66iyLrLLy9k1fkToWek16PENxJq61T6JdwwqNEYnFezU4mKFwTkjDPo8iipXdgzYEjh",
  "key26": "3SzZCc1gQJckyRoTZtuQLaBpdmUhu9wX13m843kf6yhSGsuUerpkmQVuYTWvqjHFki1NTgL9yBxZNs41kTejam5G",
  "key27": "5kW1MTjsXXSpSUxxSTZ6ZCRYY6KHrheEuF3LgiW1swjfhzoJRjGAFqhdMa5pAcmTHBGc3gL6rDkXZwJfJkwPgF47",
  "key28": "4YAGETdPeYBoWGMGNrrRE1541BLwt8hiC5MUcfpPaySfaUDYLXdQtzS8ENzf8m2aTvr7DR2b8Vk6JZSy51JukSv5",
  "key29": "4khMr34qpGgpXwAxHetQZuJxvfKp95pnGpUiqTPe6Koh4ee8Kq8DzTnbeDHLEDFAR9stfdpPvowr5qRhtXBJ2XES",
  "key30": "3Uchp5puGDL9BDwr1cv1cKTqvhB1SzHwiV6z6j2TBGbAEVKeboiDw6q9G88qyrNsPZMcqhuH2aAWPE9KSqnoS8oW",
  "key31": "2BwgRR4ZUSM1v7Q6xqw9WbJkf8opEo5A9GzquiGRzc1fyqwam9KGAb9d1HDUZzT1uXkwkwAGYktATBXfts6ftaYf",
  "key32": "3ZnSGNiexK32ytQxkZCdEGbD1qMBtWSjNBkY5Z1s7h6F6wzatHSKzy4VZbEvCovtYvXCQVPMiDshz9NYPujRModf",
  "key33": "5htTZkfbEgC5mSuFNaE1r5Vep4rFSEqMkQriArLk1LqBQpSp2pn8iDCPPTX9y4WdRyeZdYeqvMa3w8YvwaVsKHB7",
  "key34": "3yBF722sPJ33xR52ayHwD6vFgZfpoQZVQxzuP3Y7MStNe7B7Lv44wDcM7ggd3tJrkBgmKaqmD11V5KGe4qyuX9uo",
  "key35": "tNppJQW88Rb8JoPS8NYF5WsSzL8SjXs2oSLxBFRX3zhZUgqWjDUAFAvYHrqBExLbmTirwjmUrVhBycSos4ePzzD",
  "key36": "5b2EkjsWR2fQvVuxxBpaqwPDj7CDNHBAep9xdy6Fi6Pq3mSZ9mdbDSxKsZSJ8z85jLCn2TbxtrBvj524TbrKxCdh",
  "key37": "2mfg1gFNvb52fTj4QxK8SiSdVq6CtnErdVtndhiJxGP2KoFArH1pQUqTAonQGBbV9DadUKGjC6QRsL92xve6s9kU",
  "key38": "4haRwY7fo8Xe6nNEn2JiD9QUiLMR3SNHyPBnxafyfm4vLcPTFqWRWkdYDf1ncvBxzAWsLodRUcXoSbiKKjSEsLZk",
  "key39": "3FSvk2e4PRKwmAMW4g4QT1adDyhpchFx3KXNKTkk8rpe8VSyFYFEqbsUU5wvuV81ucMkUuNg8WNJt1ryN84H4VR2",
  "key40": "4oT1meyKSyA2D5tHiSSF9DR1aNkE6FDhv6yg67kQDdqTJeWxQTqF8dEE3yRHybfZ9mscQrLn8STr1sZhD2bKrLVL",
  "key41": "64SeMxRLtrN8VZPjhnyqizGnJ3XeaWVzrirvv47Kf79X7wWt7hDgsSCdhYrf1UxtVu8DPX7hMLaEFeauHG8MAoqR",
  "key42": "4fy1ifAGhdzGBNVByggPCzbZzAU49Y7Kx5HDJne4hnqRxhiGZt3s8MdKk8sHwRH9rvjm2FERcARNnwGxJG6AH5ug",
  "key43": "3tNb7ZegCHkQLGsdzVF2KLEB6sBb7r4rgCV8TPtDfoCUW4rQNNZhSopjTQfz4qWCjqVnNSF61uqV93SeUxvWAfmn",
  "key44": "3nAUvmCdZHY8G8JaCZVdPuNRxKjMUqqoQ4MMhx9m6CYB4q6ac15R3H3mYEvYLfT5c542gZc7tfpczFdaAuR1Fxwq",
  "key45": "2MQB5zsgb9AvdTNW7srDZSCMHtSFiPqsD8FTEuP5invQ3CkMwjSqcXLrgiSDwubbE6aiW9ReHxhkCMrwvLTpuaVK",
  "key46": "5kwNU6J7oNDgfqjECX3ExYEqmWXPgSShSPDPjXmpe1KcikbkUn6zpUXC96UBZYPeZSTEuGvLwWWupaSo3sQhAjN9"
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
