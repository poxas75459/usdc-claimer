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
    "53zR8QHqzEB5HkDobvXZAhPuZFtd4GJy6cfAZG72PktYHc65cWtuVUNCmtRgRnHvLb7DgjyKQMxSzDpJ4VFV54fE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5142JwLwBiLrokVZEHD1VwHFLLm2YtQjTv8k3f8jxqD3EwqJZLN9k3cEohCKLajLAETThZY1KKbcaj7bh4UFqAEa",
  "key1": "369yziMDvmsj19vP51HeGVWntNJxe9dqt1oMJmbeuBWzR68NuRv7tzXy9fyLLAqUNgjtjAwWCzaCrBEDhEnSxueS",
  "key2": "4vHd5CCUQxhbLh1bpeYiDNYGJpL4g4kVBSY1RkZvLx18rJAkRdi3YRJBKiWMFs1bkhNKu2eZT7XbBhqxAEJMmtf6",
  "key3": "2UJchtb3fZvPjRFhKNP2JspHMpRmzHq6NGttuEacncpWwMQrV7p2cqrQmHRdYhKB4kUTnDuaPW57QS6xjBLJHJ5h",
  "key4": "4FHA4VodtKH2nsUouNmwS9ukkaHVSU8hVYzf5QCpFn57m9pVSurZunx71fR5VfhRtqkqtdY7AzwEzPuPNAiAvbPD",
  "key5": "3Lotua4Yf9MwAjPH7qcpKUHD7CXmmhWD8ke29tw8RdTpTMiuhttTKHabgqhvpLAtGAZ5UP8mbJ197iD4JS5S26LQ",
  "key6": "HgsWD6ewFvkX6pFACSc8aN9sB6SQPBL1DnQG4VxkJmS5VYfBhdythrf3FHp62FYtEHxzpTucHMYAqMo45RYbS9n",
  "key7": "9hjKqJAh8AGa5Vfjy71SGa8u6WKG6LHzxyTccYY9fjnrtyK8mViae3Czns7EW5PhfQRq4MQNrNt3yrxvQVHXQs2",
  "key8": "i7s6RyKhdeBa8qpaeHzjASRRoULtJTfnpZNfbfttZfvTACzCFqqjyCouDvj41i65u8jxFtHucazNFNyCvQfsvSa",
  "key9": "2Kj41KyMzC6bF2Wmfgxa81CahVngbSnMnJ75BA3BCBvPiBgtrVUHVGAdmTqed1P84V5intZntTY7wAb76ULQAgfY",
  "key10": "514XJf4M3qBWWVxhN9B9791g81v9m7dEBMX3kPKB4jR2f3damJutY1SnqsZ4XsnHbcAFpicpQiFHRW1dGFygpMD9",
  "key11": "2LmgB7Y6y41F7yPDRXGNBvAcrFfP36oxmyT2rugP6jr53gqcv6gdHusHc5KNZ6RGsBBhybMJ7DCStSFLASEpZiva",
  "key12": "5wEDzMkRbCbc6s93EFrZiNkV2eeCFcjHXdqnYV84WMi2s5cP3if84N2X1VLrYJHSwbmb6s2MGnBMnN5jjnYijDFY",
  "key13": "45cSs6oJE27eopFKJr2U8E7CDLofqb9cyP9jQqvgM9tQXS9st42qyEuYGcaDN4qeoPf9fVyiZPEuHMW3cq34m5Zb",
  "key14": "45E8B3PNpQFrwbgE2FP1LAbc1SbiZfpNWQ3j68ri77b5YLchaiHqS4ZbeoL6E5EhMLixsw24ruGTNuvcbru1W9cz",
  "key15": "2Xrd67Nud3yemwfDMkm3rVRfnd5eGjLQTP3fuL6riggApJc6arUSpvrYTgmfgwBoFfkLCJ9ccfAgYbbH9ofLRcb1",
  "key16": "3Juh4jyTp5qT9yMhzk1f2s3jXaHPn99iQz3XvVLGn7TPMXdMqPNxnso3GfQPw8e3UhzyRGz8nzUyWFZtVQLzcZod",
  "key17": "4B1t9hhVRV4LxN5A85hhztr7pR4yKbDjkxCdzVE1riMiKTbeXdBUVP3X2Xyyn5wKHyNnPL5ENZr9N9u79DNRosJT",
  "key18": "3wcQF1gnddhiuBVXZddbRChQ1Rum9kL4mokFZYEh4UAXpMb8Dw9ob3i9WUqzMovDK2KZYxva5B1m22BDJT5Vr47u",
  "key19": "4v3yMYi4KaRnvxQgeNWUYJCkqP3DGU4NDURxGwQRgXp7L7SQ58VeTA2atHMXBz4qdZUMW5YQAAJqg6zBtDGjxCnd",
  "key20": "3Ri3uVaSiYrH6ZooPcgFi6vFvVwtYdNrc7dPvqcqsTBNv3dquZbaLw66hKJLjAYRwx3vBHKFGezwvSAW6CA8AK8y",
  "key21": "5KnUvk6SX5UzuzRL4pqLJEDcMa7V7gqJbTW91KfMyayYsvo7LXqJmv5oDdCbZiHxfBKchKQceEpPYbddEqtPj1Fo",
  "key22": "51o4iGA6B8bP1sWEkJW95UtH9tPMwE5CBEnp6MsDrEt8JcVGaCuH69AeRMSBMb5wq6jgNuUZwqH89XLcirGyijVh",
  "key23": "63RMTNbKZKGM9Jihurk4uefjPxb9gF79pWeViNCeUAcavrnXYcCbyRoxWZCQFcYS6TwE19WrjZFLqyZXCao1Q5wS",
  "key24": "5rys4Cbg1deg9ypmouSNjeuNZUG935PsWDy2RFcAPWErp27hhVSEF1k3Vgnfp8mBLeYhoUyhkeL6WQ6jZKJxgRjv",
  "key25": "TuzbAqLBZmT5CuT65YKHSAaqgUC85Kk6BDi3TqBpg78YLnHNB8sYzd1vuvusZWkJkHXkV6T7Dv6NgyYKFYgigS4",
  "key26": "3ieuohTcD8oLPUwMDz4ExyTBVLWWbnc95QwuCEXbYutMG1R7agYaKdAYGYx8DLwwskKj9oa3cABJwoiDgHYjhQ8y",
  "key27": "2zn2KuGbH9U5ThRt2Yfgcsf7PeVE6UtWutJZRBKkrovrBLh5UA8saN71vRTQ9cGdBcciNoEL7TmiXmjU2ZGUddHG",
  "key28": "2ZUd7YCiMJArwGGJZBNaTR8Bqgx2diCR8RdPM4XgCJE9xRPWqZmj24GoYvmWsuNN151UWGi3JgU4T7jNosbcTW5k",
  "key29": "4b1mQ7aEn6zKyZnY31xSwusbitsq9gBM3FyXyF7FpP9LqxQeVPnCFKJ8537UBfPK2z8Dqfa3b62UUdZaPQ7t4ZjA",
  "key30": "vTwkWfKwKQANGVBZRR8Eu3QX3n3U9vjV2HPaAsp4youzvMgfFNbP1gspMv8bdkJH3DGRJJ1mu542EGcgp2FKVNE",
  "key31": "35KCiBKzkmiJqugM8Po3vRRQHsNyYngze8msijZqjFmVUeSiZFY8Q2BCuBAb3ZaWoyGztXBEHFQjSaoEtp3bmvvw",
  "key32": "56JKNvu7GvBx5gcnNRBbd53w1Wx4SR19SGfe8YxQvWoKuBurwCuR9AcQ9oAq9dLg25hzVEvJ8XKHi4J5PwHeQHkN",
  "key33": "3oYh9HgAaDEz42PU9ahAA4t7Qov8NLTqvvsyktAQ2aWQvXHJFwjKvNitLXZw12947Q4dhCRgtPgvPxwkaYKTiifG",
  "key34": "5E6XhdvbJkpE3jYj5oGpY5nxz57DNFxBec45qgPNpaoXUd3fs8qN71TrHuMnbUFRq7x2cPHH1wiHaqHXrbczPfce",
  "key35": "2WjXyRALkzvzGpUJ5GjMpd5xomkUQGKMwxbrkRkiF6fsmdNA8Pgq7fgN3cg1TQU8bqeriCYrmf8ztAk69NWiN5CS",
  "key36": "EozDBrJ9qbb4o3tdTSWpykwdNfDdFn39F5F9tjzDEPGHUvMs7DW13aihGzcnVq7iqcAxm9T7J9tDCHFSGphQrQ7",
  "key37": "2pD7rjrLqDK2GPVHYXwrG5us6YLX161FvSynm8hqj3o2dRbnrBt8EGMSDCd1EJHUt5fyo5HhC5SR2aPuxXSShwiA"
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
