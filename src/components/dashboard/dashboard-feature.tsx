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
    "4NzjYB6UFejL5awmQGvJE7bMJtgZB2kcr3VF3cD8ppKXXS5Gid3nMgZoXvYLmtTRD9o4NWaPTXfwTHmHqJRvDt5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PAAuqhCcVQz75A2zRuLLz1tr6uga2ipQkQ1WNvXmqiLKsYuMzo7diFqf8ZtEPg3SxpAEzV1Sv34SxwV5hkdQjAU",
  "key1": "3ePocd7XCfbgT2wnsJN8PpGZj4nbajsLK4vRyZjDB4q3HR19iHL9SUgd8ZP5wjbdxFQoBGNXMMV64LCUJ6bqz37r",
  "key2": "4rGM4aL3cGbs3uNMsDow23nvbd4MRraxNxuKFiU9kRKovCCFwYjKqmWy9otnUvRzkRv51ontMQxUxoXf5xMrHdHk",
  "key3": "5B7DYKCaq95rNaLBTAPwgrsuyzr4DGB2DYKuA7wvsYFnuR8BTtfpu4t9pVtUeFdWxFxcNWSfCjyxybTq3FtLN3Tb",
  "key4": "4LSWkLFpSa6eEkMs5fWsr8PRruuyDSuV39GgHLKX5zdgvSVfBvPGAMWMZrNuY2YorLKwqZuPe7Lg7mzfXCgX3Edh",
  "key5": "65s8uekJZcwuF8rbTTJ9ruuHsnmEmiENrEASrPaSGYYuk4ccb3yZtJyxVdzy4senNQc7KPuqvuKpudTM8WDuA295",
  "key6": "2nsHJcJ8Zam72ckqdiCFNghncyWszTsRciHDnNxXPA4vTUbhxxSqUaBrSEmkz2ZEiCRUn78ocvWbUTVTXFt5esDH",
  "key7": "5W29wYDtjfNugXhSxSDoSWuS2fWASXLiDVrp9XaWdDAwifu43caAPNXDikZkboCjZdNAE5RVW9b45HQk2nzUAEhR",
  "key8": "2XP2oGYefKf5myrPGGu338DXy7yKk9BZ4D76yTkDnNVX4iRMmdKNpZWLpAHwUchKgzJ2YvySVzDgEjXHwsPgEZvZ",
  "key9": "2zQvfGb3sKaXYcZPryz8FCKx9PWZgEp5PCRhwftwzNjR2gkmKMD7men5f4bNBFE9oLAE9PQ9CQSS1H6EsVEz8Kv2",
  "key10": "5tGBxaUP7LS44HRza2unQyDvMuE4t1GTCkHiKQSWAvyWuzjHg7kNBVWveXKZP2DQxDh4SC4H9epRMRj4wYuXrRbW",
  "key11": "49h9fAWS8bAmajZpG4GT4xvQn6G6WAyguQdF5euUmoRTavY89rd5h39Rj6KpFtsaBJysT6KtiLnvP4ZqKEcsdPUV",
  "key12": "97Y5HYbAfrqeyBJyYXWqkpEkgPxxqwAJMpNuMvunbpnrqdjndUD6iikFSqA8nTuKV7bn1CQv7qTs9prdcMXPZVG",
  "key13": "4wJQMbFnzQ8s57EjgwsWDrspTVn45YDz96zbK4mXLGfLwS8WGuWYWDVbSjD8BG295ukvi3ZWCUFfniMqu5owMm2q",
  "key14": "2MescH4XWeANEAp1eDwNGBJ2RUK54G1gapGsTGHHmouSTkpn8kaaagdKW8rB3Nwt81ppwnJej24VFo5fusX8PBDc",
  "key15": "3rUYvuRm1j62pzSmpDc7LdxueYTPe2zbneKNMyqgL5Qq7gnRzYYyk4YEd3J7D1Tj44ha6zG2SJEGUd2fxnguAm9T",
  "key16": "4xgRyCmFT28Rp8CYgtpKijo8y3CdHxEo5B6rf5nKxwqtGVPdbN6uNjQwB1tEb1NABdEVPCK4e98YX4M9EbXr35JH",
  "key17": "2w4gmdBHtcyRHnvxrVKD4wazhn61xZHvx2SzshJFoTYTpsrA2qiMsvqTe5UPCJAwUMvUrj1sio1pciCywhAx3KVh",
  "key18": "5hMRN2WNX3JUAC75hnfY39KWLqZwLaLG39hTQrKSDBjWbSc1HLvQoPt3B4cLAEpNq9a3qDU6ELdjP9EyVbrujwQr",
  "key19": "3XisuMAQNXscaxQw5SdGqxPFVVUYvVUgGV9qaBGFJSkismrPUnbXmPHfxW3PTvRYRFgJCA6mPaYKznSHJUGMsr6Y",
  "key20": "GaxCfohyafAgJf5QraUzB2emuB6N3GnRmrqvCpNTubHhvYpzUHUtB3tSBFzemncsaB5dC9kTWzmjj5RTs4Wy2w3",
  "key21": "3ZBmeCsh52Hs3FygMgTFCwiHF2e5oGE8yW7GFrrtXhE5j8seVryPJQqgYhsf3mBak2nHkfCXTNJbV8MJkmH3WeF5",
  "key22": "3m7sJCKLtoKVd9R8tHFukKwB4Autb3NdjmdQMNRqC99ndqXWpdCqiBMFSRC9JsYKVWYWcJY87JpZuahp52BFE327",
  "key23": "4xyeCztuZMewL2fgRksZJnGvHvrMUSjg5XoQwFr2Gp4YPTujdFNfocX14t8WCZodPKhBf63tVSs1qFZ6BEhFufYx",
  "key24": "5ew7XSsG2EUWq6KgoxorRHTwSeFgTT17WwSfzBnpfEU5ZEjUhFULBVJFF5LjnqqaRJoTJ1FhEtX6ST7i7Y6ctubM",
  "key25": "XgZ5CQy6iVApYRb6moiZQryTs1Mbr4ReBN7PvhTtNL2NsbUzUi5hWd9TxiPG7jXwCaX43oDyr6VCPTCGupsnjg9",
  "key26": "2aZAA48D2Ukvf6J7UL9z8MTqzuH3CcwzURfoFxu2QWatYnTm6zxrrNGoWs2VTnYoteSHDpykFyhNtGn21wRfMt55",
  "key27": "3drkppRrtJiu7gLb4N7jP9h7SfPnVWWAuSRVA3USbyiejAERZ6zh9PKQiB2um68914syGQ3XErah1Rp6axQxbGdY",
  "key28": "4MxkuggNzdUhsTBiAQtA8hJRg6cCoSuaHGLQRFUtKVx6YWH6DK9abW345tcbSS6kw1iTyKburxwxTPVwQSTUJ5tC",
  "key29": "2LiG6G8parPPKkQ57vGP1tYfJRCXX6JV2XbBTqNTtPmzyhY2PLVs6voqyoyQJFgjikdFHF5KgtZkyCPqWT1UzsvK",
  "key30": "8wJo9karGfP2aZH3yVX9wrxNG9kvad6gVi33QQxNY3iDr53mnk2YD9FHSfQxmVFqBb9g9rr3jx1226j8jhEadW6",
  "key31": "5GnGdnTpWBdCWSn3WoXPsYr6Qu3YstDaMZDjgKy8LLctomcp3JNNBzjYtceLZVqVywh8tNPwuvxpoa1ZYyT9p2mb",
  "key32": "36wSvuPruGWGvgyTqToUnLXVfqRjQEW3RR2AnBpvMTHQQnfbWwdLYmooD8eNhhxXb398yEBcWkvnX9rvBj4C8Wdz",
  "key33": "3rPYyFujMdGwBngR5q9ctP4RnVXbDdu86FNA32F3mgMQjSHhSPMsRrdvtPdeDs57MA6SbgwqYUcPoUkehVcXNX4y",
  "key34": "5BQUopp8LXBfvYQiQPY18QS3UxcijzKD2un79uv3yZrHzFRRVgxgmDB8wKM7keSpJ5HCawtkGqtMBA6hB6ffSWQL",
  "key35": "5dqdeE24TCZ9e2ePTDqJ8mopkMX6NY9fP8RQecSZ1FCpgyu2RRgUyPeVd7XtnSyTmN81X6wAJVwpSrULhv2f23Qx",
  "key36": "2gpBxtfbxbhBaWjNGf6PRMGm9cfkzABiiMqXFdn9jXeo4WU9NHMYYD1uwiV5qgE3tGBwqLQTQ51XhT4qaYhYtQK5",
  "key37": "2tDfTFP6z3LEadD43eKWV2tQPMxD53Lk78XNLPwRBoJB3edqkX4U3UhoXpew5aqe7A2zbeenUmAYtVokjo1N7j6W",
  "key38": "4p5gdXMkoNumoijiKhgMF4qWjTcZ4ViopRSUg8QJo9wN1EVjyDmX8mykbRxc9SVXN1gqfmboy7JX8fzsCxDzde8p",
  "key39": "4yRPkPACWmevgT57hr1msNZpTk7T5w6hCZveELJ7yPB49xyMNeKdYa1pwV88G5EjZVSdCxgyDeni1RCN9SFMqGvB",
  "key40": "4Aa3msnDeeAFDEiS2y7KdwSDi7kU65rbvSbjZvBD9FNrRJBxbHsZTNnAoEMzB7U9M28F1mwM4WvygY4fMxJEh2cr",
  "key41": "4L4RR4zdA5Y5mD1KxXc94FmHJH7AyQayKr916M2thPRf9K7pHncbNqSnUhREuMHXvnkk31eD4c3hfiwYMFaeoR6Q"
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
