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
    "5ae6mLfEoq64cnUX2JYkqJxWay5fzFSnrU4ycejjzn5XUg8wmvNRKuHKpXQuD4nXy4p2ptxmTw4KDazT5BL9KfNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZnwfyPEduwgvEKi3Ks9q4UL8VLNxSkJS4z4WvmQpuJFvtwtcP5UofpxiMBf6vTNz4XmGeMbCsrHM2WrioFh4ePf",
  "key1": "2RpNrPTUx7EGfdeE2zCLPDdmJnqfknWh9NqStMsN9PgXWHPx3ZQ1APs2mccbi5UhtW3HDJMr8juxVojiuUamPjmk",
  "key2": "5k9Zf1srQy3aUbo2KqyEg5sEBbzXMKagxEvpJ9jDEABM73HrRNcGJmvoT7icrUHL8W9exPnCzjdWNLjaSXhwoaVY",
  "key3": "25zSe8LV1mwHjPg1UXKvD76wDxuvEDNK7wbZiErG7u39J7xWNihTWfdoKpWhe77M4cWxNGWB47deKceCVDZbMib8",
  "key4": "4WLYxKGQhxdbEbK7ubukfWijAqx88aQ3fx315GTHnAoCmDTY9UiSfcGK5TA2iMLHainBZJGbdMqxHy1CLc8tmLrb",
  "key5": "6227V4G6mMJtB9d3BzQfh3hrUiuNssic9uE2P6bdEhcT5vdAX16GBa4ChWhm3598EAEL838KAxaSVZyKntJiaCqZ",
  "key6": "Zc1JwV9rGhu6jPmjZD7Sg7VzNZhAXWDSynLqxmX8XTRKSNtij6X9fFaYGEvugReWtCnxkCb9ByVLMmvERBeGTqm",
  "key7": "5h5TfRtwGbpzNRbGmJx1QeJSsVaL7Md6FTG3bMwUuc9g5m7AvnDcTYnDNmi9pg65XAKnfxRftsYQt8PYoC5LKzqY",
  "key8": "5NKrUC9SbGLyVJpP29hYS2nEtoTW2R2GTnGP3GGudsujgJej4KFZS4BQDZcfdR16uk8K58gG1huTnAWwHUMmVQEU",
  "key9": "4k26JjcR3Lp7eGzoorm1n8zXVyq6EZoSD14e2c7T4yLYGLPRo6vGP5aZuQfTM34j9BRvzk5hyhDJDE1c9H7uTXDf",
  "key10": "5WSSiSLDsEPnuo2YyBouQav7CmceLrQh8DY8i59p4GSycvRz2dyEWW2CSBeMwNJV9eGRKhjby1mgcy2ktDabHWpu",
  "key11": "4rr7e5KvciD6rCG77RfqfcE2jHBF4kpKsmNHbt6uBAhaf5EsgWTj2F3XvbSfgsJdGieqYbcUwZvHdGX6wnz2gjNh",
  "key12": "2UzYAExhHyNZ1yoJweJbyf49EcC8UEvnsfFpWR8x82p2EcbUWhzCb33hdkXo7DJDRtJN6ttGG4G8tZ6uqvj39Rsn",
  "key13": "4phY4XCUJxkQhtxGjSsHSUmFJ8BpARM2uTUdfgYiN1zXJUpdbKy2gXukd2jTcdah33kPEMjgaedxTkfFbGghrM53",
  "key14": "5GJ3LGrZ8tpGmpr7XaJ2qnoyWnRNEXyc696AHKgXbzaYFJhwJSmLf2mrPdeFw4LrBn7bEz4kbsADTxwA64ahBisZ",
  "key15": "Fe94GrRdQ35e4GBwkYVDfKT4L3j3PEhaqEbbM2QKwh72pFDC68wri9WkTwpMopfrVZTh23f3bC5qDFh1zG8Q9zK",
  "key16": "5DyuGUtG6S2jYDC3NA3TANjfGrfwtSfbA6Mvt7Ank4eEL7toSZyKVJyozmuRBKFCn93Y3uLW3pW6i5vT1bBjsQB9",
  "key17": "3t5cayXdrCVq8GbEJSXZnC2XuftLSYviLa9WdpPMi7FAoHQYghhvFbG6xkBFN6Z5yTdw1DVMFzbRjh89U65cWnBQ",
  "key18": "2Cb4dPGVJ6dsbwXYa6LmJ4RYbW86VvPJpSAd7K68LnjpfQh6bCWji2ZuACp7MnBuWHvqk61pZadm7exUYgxFyNDr",
  "key19": "KrLUo77pgE9kep3BVrag7ToqUdpDcig8Rs5o5fVUNnr9K9QyVaQGN3CNhpiGrafNNBtZ1G5guEWWrpEQqNDP95T",
  "key20": "3MRoHLzpb91HWozsb5cuEpBRXJ5eGZASBsHMvqkCEKjsRN8ZiTB9hViiD4jPQcvAtJw21kvQHYFWegpiHBh2DqXx",
  "key21": "ztnawVjfxqET8MNfdWYoqFiqCcYF78drnML7EQ31nFJQZDHDN5F1w4aGNZ1CyXYKF7bGX58q4czgrENpmQNBpmZ",
  "key22": "4UL5Wh3JMZqfAPKAX3tjkU67QKKRhsh7XtZSh8iaHR5Vd7m3FULRJGZbaBsY2CjyTjzBYaNc66LqUEKZ6tqhZwcK",
  "key23": "4wP3CzvfyHPKngtCpEr5VBgNcM6yZiWSSdSL3RYRB3UQjeCZzfh7QmPmCNKmcieyfTNcbFLSdDqnre6vRbHCKj6T",
  "key24": "4UWrXwy5d6J6E9scKJTS8SULbSqGmepDqUx4pwThC9b8q7djNBBkA3TG4fVby6uSHWZyRhgYV3Lkt6tKgXVZhVK9",
  "key25": "7dPrE8wc6EEDPM5dGYq99FkcL3sYzatjNaojZSrju82mSMXoDqCSyuBDPthGjMmDwqugTzwcYR6W82KGMjcKi9y",
  "key26": "3Pdq5zP84fB6WtkyZrvjXMnTQdiQCSozjefxfXM9euTfsie2Chds6xzg59BP6fDC9Xp6VFsgsfcaV18d4f3SmbNa",
  "key27": "57UpwWF9ShKnZuAxuoCeyaXcqmebHU9xGw6UTLe4mJ21RSHeqFfVJrQhUJLUMqSm77meDtqraNCuwiXqZMTQAtjJ",
  "key28": "53jXfT4YvUTdXmDhhfZRvUm4yYHfeNjh7bSLnYZYbzb4CgVipLNojbFZLB7tevJgkxuwsznH9TEG7m4QVLukzHCA",
  "key29": "mqM4rKHueVNp2sjgvL6toTY6kqFnHcD72Gor4ZdzwvXmdUSt4ftVgp9bsKqB1fUqtnWmCfKrRKWGQFCooziegzc",
  "key30": "3c6PRH3aA5gswgw515Yw8utVc123dsNe3opn7izmszBDcyMzbUedE3G2pFJ1qc5HX9mWmmUJ6bKfuy2kT8FzcdZW",
  "key31": "2suZRpEMAPjGsi7FfzYYZKqX9aBmnUP4EMjqDZiZVxRTywwk36t4oAo1cT1Kmr9oUvnpbCWJDhou9ZYpsy6CXtGP",
  "key32": "5ufGCR5ybujh9FcJLahPmKAgEFhZrFPBRPKy1Fvg4DR8AGPX1m6cBRLM7AH13KDm2SBe7hBkNLnYvnpXzBRYy79D",
  "key33": "AihiB7pPVvxPkaQRgrtuH4VyBpc8TKNLcixponhHTcdzGCnuzpN6X4HjYZZUHMTybcVoH9Etr1sgYqdfmnmnqVK",
  "key34": "5CKra8d2iuC1shwM1sDAm7ZTu87cFkF6pqWA43iqYVgtKy148uEADVmP9unXzCukvXCn8xu6dqcM9GSdshMkaKw4"
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
