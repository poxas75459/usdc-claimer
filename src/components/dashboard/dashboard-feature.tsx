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
    "2pjjgiyLJNPXKNo5zarib647Hizf9Gg7QFdLqJaaAnAGeTpaCr7GWyc7RUTSAq2rqsSwv1ikzUC3VuMFBRTSfkAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RSHwPtZxShzvDDPRYFeTm4hkEB7zorosQRmF5FBduYdFaX9zXp3yHtvCTBsniwGvyTW62m3fbZa1mH5wX1C4eQF",
  "key1": "56ZioLTeDqqEKWFbUba63zEYXPpzhRYbTT7GrJ4r3t2wBuEACF5GiacthW8qLYxtiJWxYHaXYBDm22uUnFAHhzaZ",
  "key2": "299Fq7q3L788Sei99SYGRYqfhRrtfUM3HiLABQAAwtsMv4as5oj89kEDCU6pMQAKLZfuF8HbaF3ravgU2uRuuURd",
  "key3": "3ShLkH6sD3XcFLNADvg9YiXv5ZXL4QVAdjLunB3cpWHLzCh35Bf8KSiDnf63Q9eF94NajtPhAtfMKnWaZGZDSE6F",
  "key4": "4t57RQRCo54BvJmLJwatMTZkguKkdpfHmk9P7yCA2FNkLHRT1FooADd8iHVpyLGimVU7FtP297jaQ8zmaLALuoTa",
  "key5": "2zEWhVBCJNXCcYErKiKCgABRNfiEMwiCgfwVZri6yP3roJ7ArthHhaJhvEGwjbFrTUNBHyiD6ixievKcombYQ4kj",
  "key6": "4NXkNx6ZSrQnovbX5hw4S6nzxsSUvgZsk14ykAzHJmK4eESGcCSbHWVjbJZCiTdMuMFRJ7JdDcnYubKgAEhCSJ7R",
  "key7": "2PXTpe3ictK7Uaj4AHmhHUF7kfTACLVeFpFLy6MZEtXGzHQAiP2XVTC6qzTCEd2SvsRScj7gtCP9MNohtaoiPVfY",
  "key8": "2VRpcGqkLGa1vSzgLekf5NFXzvnoLcZFWyanqPfvvEMqASpRKKrVat5E65JW5hmZS9aGEH6GhrcsgpJ42oMLJ8wJ",
  "key9": "5Uxw3GmbzgW455pnJ9G7LMSF53kWE7tkNnptS4YYPGuCwrLeMakj84ktUcSBKmWYu6AqTc14BzNLhNyWcUJ6rScU",
  "key10": "2EKAAJpaEkhdygXUHHiAjtaDjP5ambuTc9DZ23jeoFEXgsa4DE7WosQAoWUEGxFrw6QYiwgvmUHSZCCZnefXTSeS",
  "key11": "3chYqbF7hWt8G4g3pGz9Ua5jQJXhvh79JrYhLD7GqwzH9DUWdGUKoBqoLrLeKrBUYytCaqDhFZgehLr8KGtQ6Dhk",
  "key12": "FApxpiqrVQWysAv16NCETp4FCHmzrATZPbntBaKQ8HcSP2u1eCYR4PWHG1pJG6toaa5XF7Drc6wgtBpucX2BJ1x",
  "key13": "5cCu5saHzWxL4Eo7Wd8thpREnDNZAyetJ83gLmVtR562s9pP9JmAEdhFKmtg2TiDSmrVyD522PPWiXcoKcA3VAu2",
  "key14": "22jo8HqyhnfJhCS5zWL4aBYBPMh9jfStwthHRt2KEBxTeVsQWyzyWThgGqsWQinfLzbHCkW9uNxR2si84ezcvHSY",
  "key15": "4HSKAmfLNV7H85JsFUrY5q6gZnbZj91qvdhVBY7y46Uv6f9Yp9hSGmEseL49RqpiJJYLxieYg6rKzErfCaTV6UGZ",
  "key16": "4ce5ru6gK93LESrbFS8mQKAngrcY7xcKnd8ZGGpkk8YrMyGTKZLfQp47PJVfioHMQo3VhTt5qen1HmSuUV7BSYpf",
  "key17": "QLyLdUkWWz4G2SjCFr5mieBx7Kv4L3ihuDcPBrcM9NSCWtmXLrH82CPhP7vVVgj5Qo9ga1uQYU1odjVtxqRNDov",
  "key18": "4fmtLfQ5CJKFmSkeHRqHpy1GePsJEYoh85XZZr3RqkCWUFb7jRyremsVGtnfEVDG4xvkvXPHgreQSzXncddKQXpJ",
  "key19": "2VZSvvJhL9tMEU8QRUnjtHrLwHfUfZNuheXbUh1KhAa6xSE9AYL46sCQc31cGU5PLEgvR2mioBjUrxCzoXXtkoLU",
  "key20": "3n9CKUYGEgVtMnEqmT6muHPBB8jqv2KEpqfG5LjXQmBL311ypmCmnrVYVwyzadE1egCouej161Tw2Up9T9jiNPzL",
  "key21": "4KB8V6HY52TFQ3BW9FiU95X2AzqCot21N2j4VBYtjHugWxgP4u39TVVrUwekaNgo7pj5YqMfW8Pgf2wHt31kRQrb",
  "key22": "3Poz7ax6bMi71afKszu9LLBZcsrapHSvvC38tVtjnWNzujsZ55CrpsSERvs7XYXW5FDVgaBcQYEsvhNDS2apeWL",
  "key23": "ym1ZFBXVvvjJvyGhY6yqnfEwQqnY7Hgw7824uPq776tKHYERcHMgYHR1nC8tg5XByXR4Ur31So1YCPQg646xL3x",
  "key24": "2y4PasNoAAPw6Fi8EdC68w1jotk7FGuxqyE9nHtXQ1pboPtGUJbHJJEvTrvdpSeM8dZDYhrsD3ArJ1NXh8NbgLAn",
  "key25": "4qXhztUARXnoqfHvYSKTyiv3Cbit1QU7WA2P5xx8sPjCkKBjACCVLUdYSzY2aD5ooL4akoKej66Fwu7n269XWAr2",
  "key26": "2RZBQmFELqrht3gmQvDGyNGRfK89saawsiaXPK8G61STva74PZxVAzRAUfVdzdsWRwbjxL52jD5YtKEj1abk7WfK",
  "key27": "oTMRPHnWy9pe9muehBmXaurnVTJfr2c1yJdNHyeydEbkViehq96ZpLEmJP5GfRiuQ8ZGzCMPfyCQBkhdk8RtUuE",
  "key28": "2UuGDZPxpfmviqUshQEkAYtrWNQCgLvArKfPDJwXt34xpdCnqGNS3c2BgC9VrXzMSKhnoGqXCAzTk5SCBRUZFThR",
  "key29": "nUebqg4og9oibbvgrvYcLrGGZJNDKLKwRc8e9SnkjvuxpgAqVJz8HGzQj62NckHMCZyvR2h9FvbJ3ajiV7Ubtr1",
  "key30": "5SkbW5WWEsHe6RBod4KNb2WJPMN91ZmYvNKDDjhLCpQ4KpWxhPnSmthTQm5Dt5KJdcLfyy5zHaDDtnGT98a5XPdr",
  "key31": "5VC2Cxir78tXAmfio2Rph6ww5QdNUSsG24iw7JJouDxqa2zGKGRP8aeKNd62qvwbJbDPxKJ1Zd9YgvZc7tmVgfmP",
  "key32": "4yo8L1gRiWeRJQbusYcPSEo34o2SKc7zEcmvUkZnsqacSJJgbZ6f2Bm3JEE5mvBjeQ56xBx4FkbWDYq25fHidi6Y",
  "key33": "5ZJg28bYfYrNsECS5UXCBLRmJ1CAXvWikeRmpyNJLsndzqpyJQdE52s3TpNuYTzZV32mnNhaZBDodeKRfcLE5YbA",
  "key34": "gsJuMvoDrB3nMm9kpTpiNj6363ak3LRXbCsSUBahAEc9yZP4q5CbbrNV6rqpWXZh9MRHuDaNsjgcHibJSAEBVAy",
  "key35": "5LceEwBWB9sGEVMJNCwRshhyBXrtnEieHgbPGpKpzPrjhrjYcM5QCW4B8XrCXLb6tdCrE9KLZ4AUnBxXmp18xEhH",
  "key36": "3ebMcFZdSuhBocHbMpDtfynFXTgSiq5UpkRfn9GHS2f7y4ANE38u53psCyrnwHkF6yRd7V8tyBb1M7VpeZRVx4MN"
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
