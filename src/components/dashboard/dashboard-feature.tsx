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
    "2h94pQwq1u41h4JGBJPKYXVtUhAJ4eTCHCZTqFQUSS8bX2GSaFXF5erDLq3PrWT4DsqJhdsLF3yKf5HmazRM9cdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "edqvj56iSzaUNRoTvf73Muk14LKEcNJxf7YisdV9fgYJXXTFxTT9cfAK6YV2j2uKTs5BamRbUyQ8Jtw4f43hF6h",
  "key1": "3aX7mBy8h5feQ722HsHcvhbjBz6bagYxMvDCgd6txyEEJTG2BykkQ3Jr5jt4VsJg4hS1jCnq2HeGGfUJ9xx7xxiQ",
  "key2": "5pewdLxVuU3ML1kjzfNTE96mUTqQn2eZTyKUL5Vy4myMpAHR7nzRowKmXLHXTAwAxUKPemCuHovXirq1b9yQMeAG",
  "key3": "BGF2FkPBsYtM1HrMwiVUchBam7KfWvDw96tNuTxFi7sdRddyFMipssc6BquMbMQqaF75R9bHQ9N3hyfKYfgsJvG",
  "key4": "63a4ZjDffqKPgnP9qacjBgxgLQMc8PPyxo5fw46WzKuXpwXPBzv4XHTiem6VeFsTScDtpmGFUyh3USBewLmReAp7",
  "key5": "4w5Wyj9R3smKxSKZ1Z35LnCDA1tfbtxjgS6KqdbW9t6gvDcvcrSTevArK12Fc3L5gDY3jhwdqExRWePi2GDNSYaA",
  "key6": "28kUGdWepQXWuMhbnviU2U6iYDkV6azS4FNHp5Y2pAL1V1Xygwy3qNz2b5KVqQVtYRhiqZ9VxjmeAQfHvLxmtXk4",
  "key7": "JiDsUaiNTbk7UF6UXMuzSrnRMXYKby5ntaw3RQZemrzojrZaAn4nXjA9LbY6XxuN32D9tx72BzkDASFCCFdG5Hp",
  "key8": "3YcVbmz9hnLGHBwdZxeQeDHiwBmH8BELwt7pVaVAqbAenMBh7TzSqtptQjyoHBSsLcsLvUdZ44ToGXZauctcCmee",
  "key9": "4sMveLQu3cKAdaJV5aFFBTbHNigkb7LxGbeGnjLaKF8PMqPCu91RkZcu2qAmuUtimMtUKHSyE649iazw4unKr4VH",
  "key10": "5o1ioyUXgTmTnFfZfz3pyUjV3uwHVcsYUF2EAWZb1XP5NJubpemTE2HT6ovPgnta8AxMJfLnMR9WcD3fjpVEzx8E",
  "key11": "2w74uDBAKn1WSvVQHsHTFawsEBaNaxW4AgEnr5vCWr7ofLzuqDggBBB4AVniYFoDKtFW8XKV1uZeJBqW4MN3ynFu",
  "key12": "46ur93yQPenPKfxm3gQmNaVRyLidhRZ4P9yKJ5WDpmAAcrSVZGhBqbzfjmEKqvdqwzDpayP2Mn6mRLF9Kjs4yJEp",
  "key13": "cs5gMkQqR9UeR1CkjKk3s5fEcCYPL6gakjgPXBTyYN8CKHwBT3jL9oodM2uhmLpscDu1Wqkp4oNND9ZCPpFFVG5",
  "key14": "1ri27DAZGwHyqPYtGTgM2DKBPumUG1TfAjTgBf6jkr4FVNrXhq673ZmssUafDrut7usXjRVwrM8GN2LxZQa2pgw",
  "key15": "3drxA1Eti48qovx9ZK5V5zk9jKZqHKQJRk4WAT41ibfjxjUdKd6RQ63c8SKpZrfLr6PB6fx7xSPtgzhkYksXnXUZ",
  "key16": "388reESSBesU4C7sQbT5Hoo3kqyMsQMyCAnCrTx6Qk4BejoDjrFRJe6yWsMdavww1LYiz4rRAeXJcaXgGPU35wk4",
  "key17": "5QVz12d8YsHtcnNhU2c12pG4Lx99vbm2rLtY168Gj7wmf4EApZPtY3QworiZHBB1ZnPukXGBYGEq8if4i9rA2BT3",
  "key18": "26ybbm6Jk9inUbzJspv1sfqYMuuTYA73MqUewjMXAvm2z71krCgUJgpJwKPKbMMAUQNygnN5YKZbhSMVyJq6aDEm",
  "key19": "aM6cucYax3vdiRRARc8isT6wbKbXiobB3zxgu9WTwWi33AuahdoyiZHaS7U93buNj6iPgti1e7GgHPhnHdPvYN4",
  "key20": "bipoz628W5FjiN8Dx1gS6yNdM1ZTntHmpAMJ5TQFyMsTvj4hHW3uNviSYGVJ9cY9uh8RJF6JReWhZpgUKyw3YNz",
  "key21": "4f7yvmwMQYhkW812khBTkjgm41MNz1pfNTLZwrjomvJMbVGWAd13yKcrjP9GsPk3zaJpRDezd1Kbd2w8SHqfJUAv",
  "key22": "2EUR3V9SD7LRk5rszBt7MoNRky5M794dHprB8squVo874DFyHxRyWWTkPzKfvPbDEgMvNNc8NobFmNPJSDCPPucs",
  "key23": "27xZ1Qc18bXuZAW2cVBxSMNHyiJVaFMxweYjgtj6bX3mBc6L72MMbvYEKkKFv6YLJt2idv34urdAg198U3iai2nN",
  "key24": "LYf9guaaHV5PuyNbpQoAPYmryCfqBo8RD6DjfAuAfLJq439RqyfcXW73TD5c5Tua5ACk1WKGJYyTWFAet9DUUyw",
  "key25": "5gunsBp3x6DeHV1U1TuQqoMYUZG6t4Dj2GxHiUuHCZp5JBKWx5MarcCwM6VCnujeCtd9mYCxsDJUMmgKRfAU2si8",
  "key26": "5knGvHxqcoSEw6E66E5wDgFjuGvH3tnRcw8Kppd7C4rhdvcoVLQhyf1yNY1X1bLmiAqnkE1K6FsKazYMvY8NRZZ5",
  "key27": "5T3VRnXsFEc5NEwcZL5QdcGLvSACLqqvPDcZQuVtSEDuPD71L8tL7xFEq8MLeKMytxMAKbxxb3sqP94RpxtLauSL",
  "key28": "2aLy5zdEeRGC6tswBno3DHEWoQQWg9RTUMKy75rqDs8HfXDYM2nJZHvXrePBPQMarpXppiqoHAfa32MWJHTBBuVg",
  "key29": "2KiHmtcYN2TWtVFyCoJcRM5ojCcwvDrnXQeYQ994YbfPkpCN2CkK5kS18CZ7K1CiCjnErHDqU6PrFPaV3U79sSPG",
  "key30": "5tqzpZx8PPrZuaD4xnJ9bE5VWMWeoCKwXH3Agjj8UQT4X3RxQJmX851whckRH2XU9Hn2LX5BNxvyDKD4Snoh6BRG",
  "key31": "5qvgLababJJnCT1zRPwtKaaYQJ8TVNvJRvz4oqYD97wNvzEzruXsbfDuFDZVU5RBsRuKxdVDL2cPMt7BdESUnVpM",
  "key32": "3aBkd6ARkdUp59pJ3nqXXgompBj2NZpMCByvNxD9LfxJN7BtxzAkngLqj2JGrPWTLty8dkqPQsQvNd476uU99hbF",
  "key33": "5kEiC13eDFxrDzGyAgskMfksmd1Rmsgc2coGfEto6E7H9MtyJpvrEHcR7Z4iCaS415A27NpwMtzAH6uaSHtTkL1c",
  "key34": "uvwajs3Af1nCXK2q2hc6BkSvzRpvziEHf2aCqeoQyMUXmJz3v9z81eqtYDqYvGu5ytarCkrGU3h3LLUP2K9KrAZ",
  "key35": "4Vy92TPMdzGxvcN8Mc4bcBzPZ1Be5EKAv439MZiYSFD3pRq86NQdn8eaJQQ7tuNcvCccdZUFuSom4ceAxxhLm7Ua",
  "key36": "5r3j1obGQYDnYj17SwjV8afvHL164gm8h7fDAd2H5TyCkAvBeJms3unCKY7JmeL39AFNNAHhzZer7tNLTMQyZR4T",
  "key37": "3Mtcb3FZB5gEsJ4ceepUAXDkHc2iJ4eGjkpHF332GpYvGy4hCokqYRYZFudPzhbRehuAvHvtYhdVBe9xxcbALqFt",
  "key38": "62VkJaGoXUjBaaKXvSnqawtZXHb7mTCgRQsJiEj4ptCbEDVqmhozHcbo6GZ3zqwJFkFKszMKDcASxxbviK1uAo33",
  "key39": "4gvy4cg7T62VxsFzkhLfoXMDNMbPZXq8tetWiyGdpxysP6WhnJdqREG6DKD4VrudB9okWfWs6qMV3iP9KsLVZah",
  "key40": "4m9UuJiKrMaqDktzU5aupJDojfoqb2N2BV7gvHURWur8JKvUCZXGZqfrgK4dZWzQED16a9ahzQGj6BcEkcHtdSnQ",
  "key41": "5p9kJAUSRFpGXRf3oCRkXygGTBAxT1qKq7j18otXt2yFFvLNMLaJjwtmzRQ8AY1cWweUHLMfQg9apXf6e1LoUGva",
  "key42": "3gUdDihHn3KqrvvnvPJ5sSX7GyqonTCyDGPyeZi3osMVAsTFFAagDisXpYEsp4223Yj35BTRnrKbsxf7JQUd3Qhv",
  "key43": "3HnNG32erYwEqpVzNR44tTZrmYnsociAv5bEoK9jC2CpjCAc5fqwVWm2gEuHqj9ZybXSRGzcf3ExyYcHXpuRqrfB"
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
