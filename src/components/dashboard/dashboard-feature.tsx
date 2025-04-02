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
    "461yaEjpgdp5KVKhWXcV9hp4wLGbhSNdN9EXUth52Kwpg11oWmEojoCAAGskTj1SQuqTi7kZDn5PRUuVN4cMnF1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zbpuEH3cQE6yd6VgdFGz5EhgVNQ1DK57bmVLnmQwTEPfFUMc11uJtNCL992zDBQVbymYy52iuqWoEjQxGuAjn8K",
  "key1": "2uFzZ6meYYMsS5qjPp2p63PLVLHH25vQmQfoatZPDPc2ETRKtJFGkMLV6DFRRpwz7fbVQJ9LQf2TJ66s2NsK3hVD",
  "key2": "5qfj2xYFTPtgAuP6wCsmuEYhEkLPz3fDEbzniM95PJUWtMNFKGhpQD1VA6gFyzPBMRyiW3NZwf98WnFz6RUvSiy5",
  "key3": "5yPmtvKqSzEU3HSAWUrKgFcXG4sQ8dnMiTTbSJ9Xa1RkvzdV7ZyLSwt25RLnzd9cLoWw3CcgD69Jtb8Dqh9LmNYC",
  "key4": "4s46xF7ZinJocJF1vznnUVD7tZc1V8KoeSpqgbWx2yYzFt2SeB4hwqwMmnGjPGWLbFb1kkfjkkuzQB3Hn8te8s1c",
  "key5": "Uj8seHdCKFNLjtPwBeN9uBTgBgNh7p9tzwiyp9u5qVdfhYjg5PZ4C1LQP3Jjbi9gwBFXuxRPEKRoFm4AnKh9v8L",
  "key6": "Q75JsEieHec5u4RUDR6M7XgcvxhSUtkAtXAmPZdC5sWk39KRcLMwysYUBRBRbcr2WQd4t86uojUYdGM2J9iBCv5",
  "key7": "4xxhVDX7jcrSUeL54SKWBNcQCWrotuF5SsdGDB4QPxtnwaGr8hSEcE7U1YJiweB8Dw9q1xBug74HZjR5jN87ENep",
  "key8": "36cJoRFE1NGaic9eF6WiXR4f2Zx9K2vk26oJY9uUodawFGsBgPvTBh9aAAKzun7G3b2yteSo66Lkh1kaieC5mTJg",
  "key9": "2Mh7QF1pfZLzKNRCANYoxYzDJfjmsmyjLr9AuJZjN4PtVRXC2XdAxouJgp6XCxJGsNo6CqiSgHu7P9wjNj9ZMcx9",
  "key10": "3bte1hgwV4Nyui6EvRdJfAGGe9NKG7zaRAuTpHCo7mThwnXEZdQthPW9AjzawpwdhD5XY53RZbmkLnqnGZNycxw8",
  "key11": "R9a2e8ozdzVtvQ6TBVVhPevkmaPudfPymeYQDA3etQL6gJC9sH3vU5ZV7c6MUnnthRE28z5LXxcu7sNQVqCazYo",
  "key12": "4F7pY6yDrHPypzzkeNnswRNbJuvVbyyhG2pHQ37hi6aHW7Eu1BARMFSvV9sHrR3DZenuuhw38Wh9M1rfuToSuwTK",
  "key13": "2RyZP3Xck39CDsBXtTgUi1X7EM4D8vByRNCWgTUVxawsHEzcxMKCrRFpTAYgEW4iwroeHYKBWVWKsmQhCd2aJTLq",
  "key14": "5V8oWRJUDgdoj5Qnvo1zjo1HDNtAkmRswDtf33sYgf7bcs6ABCaGxvET1o6d536f1Ja9G5S93GZdNN8FZBKfHS5U",
  "key15": "4gfkBd1SWxRbzY2xvFaicrHLaRMNfjSjap4kWwAwLFDPGQ1jyev6q2CbDyQyXCMpK8iKShJjvuZTYHPEmJS8CVkk",
  "key16": "5BDz6uiVcgpSjWqiBUrNzEnQy9tLevxQCPo1aaTbPmU3JTurJWPGqevrnf1z5T7PJr7LhJCVE9qbL8n6rmSEA17g",
  "key17": "3MUmC4URS5MHsLkAj29j7aXrp8xYqHJZurAf2tuqDkbsxnhPcpTzQwtK3KjZd3B21fRHUB3Fn4mFKgL86waBcvxY",
  "key18": "2N9f8cxZGW8wZum5YN4UR8Dj45CrscwoK6Q8t1nDJhoXaszFYRDjrXkDUC28z8A7MhJVGVRwQtqSWx2Hczyde2nR",
  "key19": "4iV1JDTjvMXj3sXt3beJeVKd5zoLW1doKAgXi84GhnhcsgNagtJhWKT84gh8uKd9u2i2RjtgaVXDZuiw3yiUWfQY",
  "key20": "3gjSjngHSNrqp8KjiuRMk19Cjz4LAXKyTmcC6XzacYxtGCKA1Q8BPMxoUwiMiRZq8pE9epNq5LPDtcXb81bVqPyN",
  "key21": "5esYh1B2tuGmpboLrtHkzeZHiaDZDyL6b8CvMsyFx6sxva8ut3BrNCuCByhqRp7SvzKz4xDnb9CjYsEHhdUkMhKQ",
  "key22": "5L1pjs2A569AVJBZ3GvKo59eX4xwwaAXdURz9hn7BYTxXNQGETKV4fYzaLnaahUw43eocTJjPh5F5iNgsTLXuoKN",
  "key23": "3SY2Qm7mZ2GKnAWxvVYcn99QbdUbNWmZTU9baX3zXNC2ujqceZFsZcphWYraWPRpWStizkJargXqEBKtcvNzrXww",
  "key24": "5qA45YPv7RJTTKLppK1Ag69gH6Qo7gJiYNAAapaAm364o6UbczYuGjLhbxuh1CiGtbnsrp6XPYN62TFgRzMTV15i",
  "key25": "5WnDC2DR1MEPhPkseoxtF93vTVUdVVERKdrt8H9ouZC2gCNdJ6XQANfB4RzZKBkQKCS7C6hgAytaE2ZJUmy51r81",
  "key26": "5n1rUpbLt5hUTgSbU1XA8mZFyhxzHz8k5dYQsWUs53MzwGRqPUK5YzWKRwTqGTQb6diappjFTjRvacqx2YZNi8h3",
  "key27": "4XSs6P2Ma9so5iJdE1rPzWwVVPSt3wvq38pLkVdxRd6VFPm6tPPa2myWnAnvNpGVmNxGmExEG53MZJBjVYLTyjWn",
  "key28": "31dQWUF2k76cKxkLh4R6n2AMkHMMNDm4hUmVbAo8U4eyV5xJqj1C5tc8pRnw7597cZjC6Preb877eLtjBUD5orwW",
  "key29": "Gw9dkBXxVi8mxoHXdVzLXi1MFyYjgS5gzEodi7jDsn1hkVRCQVmVocTyit8FixrTVn7HdYQFwk81hw9abKcSAyn",
  "key30": "4XKJwNfzYc91oWQnjZ1qZqr2EF4vqpk38gWep6DCyLzASbXtqyo89Pa5smDtVxHEHQUBjc2TqQdUXYGkjJjajTXv",
  "key31": "MNHL4s2Y3rpoT1xrqhxCacH45VJzrcxG53LRyD3z64aymxMVmFuJk2ezXK4Zb84T3Fthev7AnFSACxNy38qCH2Q",
  "key32": "Tijbc1MYHP8z4qNuSmVhF6cXh9KDJZ4PVNksxLBKkDDitznPTjxYgKZu8sNAN96sbKQVuwzcXsMGr9qNHt8QYD6",
  "key33": "4r6mRqgqqwaDYAs8vTudxnzCRj5J7cE4vmEyVSvcukW5UqqGtyhMsdhc56Yow8AKZYhFPhJ7g9UbaUCA1F7jMy3J",
  "key34": "T9L3tuKhveTYGYa8XggV9cAkXbRN2ovccK6gm7b5dzQv3GjbofvpvzNwRJBowTWaaE2Dtk4tkegPHapXepyRg7X",
  "key35": "5Cc4aaQX3xicGVUWQzZkxkJCcZodKPBGqutQ2MnQXqrS98N7fbMU6KZNeq5DCjBAADDkzTKwTBr8vquUguTT9ogH",
  "key36": "LnxjpbYBuHsZNUzFY8VDMXgUipFTNuZG7jKEMSm7AhxcXVzqFMziFNChNAd5DtL9zcoRLAknrYhyt2orMuK3CLF",
  "key37": "2HMfjQo413QBNH9UGXxpqk1PokMpWsRaC4zZxw9PffTMyuKvhfe2eoPJQHHbyFQETiUAZXyefWjkAJRvLiPvHGiA"
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
