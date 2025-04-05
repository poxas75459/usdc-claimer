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
    "4yD7iH565pBFYxmJyYVMM9SjX17h9UkfpEA3Y5VBtXbVSL7GVnJEQb2tPKh3AGkcedG64sUPfj6cAUJmUbmUxGSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64y6HhNgAoHA9E3My3UrL1zK65JT4i7PpAgwbDUhEZ2JBuAFH1CmFYkqBu4hsMrp5hkMHLJvB4UjRkFn2JDNo4Va",
  "key1": "43J3zR8ux7NCaW8QB4GEr3Prsc1T5RBwEPJzjqxbEZNNJezEaKbkaT6MAWa5e9sSjx7xKjtHiJLun96uCc24svbk",
  "key2": "312EiDnMsaTJW3hQXRFUyYHnB7RY6mdevE7hzYyVx4gaiYu6dSob6Xxf74MtmWU1nNzgKdKNLNnQofLYK4vZWLdG",
  "key3": "xQb7H15JqZRvgTfR7H6r8AB9HVzpUnbbUJ3rNxAV1Yy6bojY8g4UogtcEtH3phZSqUn2jxS1kv9bth7to89qAtt",
  "key4": "3jMhT5i2vXtCG1Gun9JsZjBm7F4LFwUPV9yKqaCHhUQpyBzyt7YK7Do3YyKCU76W2iupBzSpDGebF7yhAtDQHmZZ",
  "key5": "yxahNyj9bM7oFmzKfcpQFAqi3hFVbDW2nUL4BzBDFkQpMnkJ8VxdZvctAM5DrJRb3D2JBKEw8QeYBXYDHva3AFP",
  "key6": "1X6NJffP9Q4P8k77QPGgwc6PhXMfxrpEyDy4gaid19yQjefZhPhd4z43Xaj4WeH3bVsmBHuE8BVFfSvr46XgBGD",
  "key7": "46RiYPmubZWh5pBz1zsgG5RW7uQm1fDBy2McaPYr1wERk6RNegtJ8aS3x1KPsRzMrTi78D47JhWTn3LSFoQhWRER",
  "key8": "1497rm2d7queaxnf4BZVUpUsnQfgcWyaQm7157BNGBsioj4M7Whsy2tVCDpD4jgriyXt2EnGxS2fTJ5hh6i7tMR",
  "key9": "c9qMrxsT1uxiybqrcKRFNYHhYHmiQ4Ezz25wkuiU6nEfPW2FjEZ95zmZnjraqbHE7wK29VE7DuaW1mCeU7KQjSU",
  "key10": "1mHeyGG8jgCc72vXKaCLkUP5rqRu617e64LmSvUfd8D4GRn2PMtx99eJ4JvGowYpTiCpNkShjrXuwcBzMFHRVuo",
  "key11": "5AD3WCzs1aJQCQYRFXCF7drz3zmqWFVXDJZq7eKw4cZsK5yTUkvw35Uye2NET1GJ8eaR4xPbfLF7TJ1fvGvxhTW9",
  "key12": "cQJRFBmsY27ivX3Lbvchqi654z9zDw5tcPyZFaKrdMUjtbsxhZVyT6SVUPh7N8frppVRm29DoYUUrDGvzRzfgUT",
  "key13": "9XPKxEwgPoN1BhV9tyETd53XcV1U35hGtcmn9uDDZQaXHTR9h3hB9smnTuBMWqBPYL4wfgQmFp5LnhWufVq9FVy",
  "key14": "CjzhNGSkRmbsn6oaB9zcGAbFLwibsi1tmF4NVvBPhZoMsctkJyQ8kDR7VuGCe2REW9SJRcqUuFhMmczPuopqxgc",
  "key15": "3js3YzqRgQKEmgiPYTiRdBHTpAzFqAtXkN1u18m2AmNkq8FoMK26YhNGhhUiwRSFoWm2p54aPp6rk3cnKpDfUvVE",
  "key16": "59jwHyA8mByJzjpcKy6qzfq9aDtzj28C23noWuXG3wDr9cDUCoVN9FFQ9okLXrKBA8Ms1NLA7o5MYZENgHYuPANw",
  "key17": "4Y96LcQKyv39buEdgh4QXGhLtCJWCJN5N18fjtGtyMA58QivFpp4TyJKLT6An4K1dncE7pA9Nujq5ijyhjkVUvJ5",
  "key18": "5oUBEdVdurZz7L7pryZqXmJS6dThJ1puujmhyFYkFgcfCyCYVqfEKopB9aWDo2NCtB8LVGfAHpXDb6iav6K7usVW",
  "key19": "5UYvC5m6rA2UG2qu3rebGVxqc7Bytw6BQFSBaJ9AJa27jELWUjuBwCE6d3CawReTwAVTD32gFNwxMreiYkZVEB1p",
  "key20": "ADQhv77hvF3ndNiApqMGwb3co3Xv7Z11vqnYkAxpBeFuu3x7XuGC7VMn1aVUhqsndSfuUmuyrdaXtYp9JyZ33uH",
  "key21": "5oPdsi1gKGRMJZ45SpC4pnh4qnBL5eP8JjtKMx4Av6xdeKtigY1rEcenHVjRka3EGN6n4Aw2SDXAng559GAo9oYo",
  "key22": "4N9Kn4C6kFC8r6hwH7LCb7bjAr5bu8HL2nNsWsvEzqqxzYGzaFvnrVuoC4Y3QTnDJFNHiasZ8dPqhdSRsbBGKQcx",
  "key23": "41ioy6iS5BYMYFD7ZgypUuWEdqDxw5Uq2kg4mF2Uy3S2QzNgXbjeurtirDMpM6t9iyhZ3fNqw6T3WmoeGiEbcH3r",
  "key24": "3sQ2Uvtu1zM6rHUrWEf3F4Pa7iMLmmfZ2a7x3edFMXQFX892ZKEJGeQrtt7wuNPoy3emawDnbizasZVyfPzyVaii",
  "key25": "PxqPCXnUJkVKYXKVDEvFPRtPzhGEoMqxCxujKLD4yyZ8vzHSGtPkhWudhPazpaZ5quD1gCrWDnM8xemeDppyukd",
  "key26": "3jsUXxfDzN9QhV5WC8NbNQZ5jfjQche2p83pXxmnALH9giUtd58iWbDNKcXJ8hhxVVWQiNkfmLBLV3MnSVyVpU4F",
  "key27": "3ST3b2ZjkysNHupyg4vHBtQKVgjANAywJVks6Pca1nd9qPqg84UCXoPtvAW1YfvQQ1U4sSkmDF7SVpTy52aUS19p",
  "key28": "5jQc4aL6EkngjeaKReWdFX47eHyEJiPCcRMnp7osWTTFHsZcbCVhYcZFePYBeTTxCjAUu2trEjofV8SRkbeR6X2G",
  "key29": "2pBf4Svi6drsrtYq7W9a76E3iD1zBJHjscaquCQpwELCW2Dhs2ehy4PNySSe8GceGREALii7SLTGL2F5crXipZDy",
  "key30": "St3tU6Fyjy8U9q5Q8JkAMrhjXrBrZWqTVqaq1q5eah9RFfDBfM5W61LLufXmD2RwsDbXo8CaPfSVgx6bsB1RehV",
  "key31": "4NYNLicLhd1rxGik1VE45mqcBoXi3D74tqoWmbzbHgRPpuXXTA6eWxhELdWBtKFNsxtNk3tL1WUmyLBHh4pbEVS",
  "key32": "23LNWMuUjKZhutyKEPXBfc3dUM35ppXDWetZh7YcnGTeNkq8Gxxwi2AXoX8P26fmSt8QkGcc8148Erwu8PaCpNJ8",
  "key33": "4uoHx1NzxGrZQSkfqYktKspn4jT32KVQXdznXGUdAC7V7Tw1UwyzCbJ1ZbUX9fv3FRQFdTNYAhpdjnZzeMnp7KCi",
  "key34": "3nmwDkpsDSMnBYdmWJaseownLLpBpptZYVq7w49CTsnkcvvgqhVnc1iToCS9T5yn583n4Em2N4VgFMJrP18cGnpM",
  "key35": "3zpjiU3MKKqcmZKMNj6njfjWo1ozUr55h5NR5NMzyYHpDbwjLmBJMjqQZ8mjKJvHkKTpEUavxvbATn41PAMPrz5e",
  "key36": "4P6NEPUFfepmQyjd6U8MkufcqWzbuPkzao9pRZFn4jNcyv3Hav2D9XQx2oDrWS1ZtfgcuoMXMBdp1eTWWyG2vzpz",
  "key37": "39YwxStNcmEmZHpfWS7AZoKAoHHF8srQs924fnxcRJKmiUfCvqZPVaf3sGvA7wtjBxMcKGjY1YfoxciBKmYAaFRX",
  "key38": "4UFpstPpG3j9bUNUPqeBCqF4up5wcVzrgg9tDJ77AVtZgzBa61TKdJRucLQrThLnZUYSUjab8Lp3sa6QzUdjXNhJ",
  "key39": "3KVwM4ZtACkZgsEZsE4NbeJqATtso9qbymMvF9YCcKWvG2m2tACNNAjHESsRXFFRsY3xmUPTPuCcCWw3MiVHjD1A",
  "key40": "3TWXJHHA3U1FYa3Fn9edfkTSghPTfhMqMikt7YkRYT9Tty9zkaxZFckKJXnVGbe31sim8LN3mmzJiWqZbBsZ2y8x",
  "key41": "4hAJ2stwYHw5RackHtNAC8izs8AjTKEJr8dpCToJQWKt9MaKgKJWvPRHWAP49C8QPfGxLXoVtsTeCQDojGhfEcPY",
  "key42": "5Ar1B5XxZjnAk25oNLTpi856fxt9X2c4QYibraPKAhVgHb7254ADqVcNWV3X2zarQjdDrm4RsowmK8rajjoZ7AmJ",
  "key43": "3HtnUQHjpZXa8JuQGbcniLfVxHnB2nyoHzKdQk7yipYSTibFzueGZDZENTjV9kGqkGJUkpiBdAcwbFiQdxEwonj1",
  "key44": "2zrh4VFWaKPFVGXCpoTHTYRfWFWEsN8JkJo2p4xu1dB8uxH7GQ8oLEAajRHESDyAKJibRptCWFXD1TJdrVBpMRVf",
  "key45": "6R7BAEL1BhKagshpwRMe8BGsEn4w4ht2L4hjubz14vX2ini5HU4EuZAe67Aj2LeyqS7QJuv4yqvVLCPUJzybfZE",
  "key46": "7HQxS8vU41jPHSJGsK41zNjByK54DuYiqdvp6e72hRc43j1UD4hge3p5mULWS79NjLsGMemfYdpKFpaTzLkwoWE",
  "key47": "5ErXn1NzuEnoHa5LxTCByUDkvLaqUtc7yDo9Y2JoxNi4GyPggKpgXuRUSDgr2UUZwhJx6A6FrDZEMG1NaQckaExP",
  "key48": "3AfZjUvtgLVs8Y9VQJRC4jhn8smPFmJpCL33UZjViPb4HytamhoDDViRXAsba33G8Vz99iAfWKWNaPvfQMQXcyLA",
  "key49": "5qLC3Rvh7RnFBuhkjbaSnoS7STRCrN1E3XEawwrxvxmZTDZPRp5BQjgd9NhxJCnp3pW9S7MmdAQepPU2sfyNxW5Q"
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
