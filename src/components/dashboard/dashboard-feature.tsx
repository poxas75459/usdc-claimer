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
    "64pbiFefqhihg6K9qMVz1BvdF47qfN7W9PtZqGMaP2QhnJVe3u9RcyXyy6ppNxECPScwQ8TWwByoLDC8RXXEuyoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qQyUCBmhKu2avMt8dawR4VyxLDaN9UAN7LKy8M3Rk1eMFU3QzMr8v81fbiMHAY5UYNY6kP7nRyoXJW3UTdCMg3e",
  "key1": "4TonyioBL7TeZRovtKhgCYEoa9Undwyeu2RrBJsFdMJcuncKvJ9nwzLsAdhr69u4roFxngnPSEdxn2Yx8Q381Gq8",
  "key2": "5Q5chpUByQQq6kvCJKPJGvYjNHqEmsKHyjoNbsZfMhTUzTvb8yxMLYdDZyia18Vq36Vk3Mg53ojagmGxZpJBMjkc",
  "key3": "2PxFk1fgVvYrMaBVc56ahv9vaHUZx6TcxkHm96gRJqkHvZtQtaJcvWfhLphFDVswvxEx8VNPMASPZNrCB2ntxd9C",
  "key4": "5G3eW6NBfVyyMsBeedDxNWzwBai96vfeNAW8F9qeLRd4TKJBEHDD2JdvvEJtWwZJT8BJohoKKqGQiYTEovmGP1kk",
  "key5": "2o9TAeYdEERJCnb3MK3XKJosTUZ9o6CN14c2whChwGSMMqY4bqYj5gd4AQBBcLheAHXDw1Sg2o7zU1z8LQJpxLuB",
  "key6": "sihzWkD6BAWtDJUotaRoW3BVhmEwfHSg3zSdLiXER6KsVeHKH9LEVaU1L96Q7bC6g8n53Yev5FddtGyvTXWoHf2",
  "key7": "m3qxTPQ3CWn7t2jodciqDM1rV3mdNY3iz8VjfcgbFPGdP4jZJ37m792nmsU4aAQAGmk8cqoUkGQqXzguughcBxU",
  "key8": "55cypQrbbbN3Ye4Vp38Fj22vniWsa7yf6iqwuzGio7iDCLsNvUJxiRgTwHq2jHn68hjrUuhWdbC4Kgaxmd4DxRCh",
  "key9": "21BaPonVi1JGgFJmZvgM66PJBMuVgPttL4C5AmLESs8ca8CkTG9CjWNsMKz2XLLVfV6WoxQwPXP1u3A517RFrWjL",
  "key10": "yw9KuRNtwSSSFxJMB8exqGpTFw5SqfAvZkKxVZ2FjzMmi16MdDw7w2C6p5FzNgKUCQk7t9FtVbg5VAgCr2FpNW1",
  "key11": "3PxBPPzSUwdXEd5Ya8Zm1jf4ZBZfQaawmggyXiD1JmpNxqNidVgtXXUkZCd4Vpo9MrUBXdSJdyXfdZJUCttoqXRN",
  "key12": "WpnkPPQ6AMqdFT7jCCFhFxiUEbEJ9nj638ENdYCZi8kvNPjjwhF7HhDVFDyN8szdMdfeM6vN5vtbpYp7zdL3oHQ",
  "key13": "Wgq8dDxSfdb6DuiFzdUX3UjRwm8tPAYm6tWUcFAiWpWcSExKdzmDWGJn9rrZ3CsdU6FPKocgtBfiFia82VQQ9ox",
  "key14": "2rRQFDHKYbzadfveyrkh7xvq9iNgJcny7VCsc6E9LTFZSdjQqQGJXcY8iNZ64293B7dv3nVkHUAGW5LgMYpHNaiS",
  "key15": "2LrMNNbcYmpWbEXaRnsToDDuF2LjGmm7DP8c9qEGbPV25qMRwHu6nkw9NfcNwoqKeFNDgCZKR8Rr3UC4YWn1AbwJ",
  "key16": "4cKRnzTGMpDDAx26MqMnBs9Z5GbD34rapKy6gmiKpAaHnfbDsNVQDktfnXnZnRnJQws4uK75Z7mt2d3GVJNX1ZVv",
  "key17": "4bSNYsJ9mx6vEpT34Gngs4WS3XxsXVzwykkCwUyXUH5Pf5bdJRfm5bsJyEdTrYB6tvTZFNmkgrHLbG8hg9Vobh2c",
  "key18": "5EVgkqSaWaR2MvxqNrZ2Lu1s9eJsA7JunYWFg5HnR6E1YW7GwMdSessxbu3hyv77vj8zvRUjopJMzwHByas1PMNF",
  "key19": "3UUVW4HQ5G5QBcKV5DrVfeAda4qVdQdDZmoW9m14v3ZSRR14zvPoiJKjccdVQe2m2EgmEaGenKXrhrt5TXVzkuR4",
  "key20": "bjwoCm6NLwNs8NVgKJ9q2SPb5S3BwmRhVyXC3NaVtuuz8ugxhCqZ1jcW7rVFQTXmh8rNjXz2a2mkP2eGFdUcWMg",
  "key21": "25B2X8E9JrzWt7gVvLsZKUnxqRTVGfep5EaYqNNopLYhTDMqAPkdF825yb7Bm3FbbR5Qrb7yVu1VpzVHNvfDs5HM",
  "key22": "5jbpB9sfjJivquK4NkPkzEcXFn1nUmt66VQR8YNbCsmZVqpPRqLDuGyKB3XtBteSS7YAfqfeNEMHSzDc4zrm48En",
  "key23": "4fNWDUDUakS78oHkQ3PgSiWHYeYbpqVdgiJnqYkLAUjNuwZGYbUiDRH3YNoNnsCUZP8cK8eZP75HieodtiNo71xS",
  "key24": "4DhwiB5KTsfTUPsnFykNHnvjZDYQsLiR8C4PSQgrhb4EeMgddUkmGKAFs5yGXSEoey65eiPdCfAM1ZiTWqK2HMJA",
  "key25": "35juYgReEZiAZB12nom2A78ZRBia3NdRmkkQkJeCwAipZ6UG3sxD7wXCcE14NUYin7qc2NazXC7nSMhZ9gFQfMQa",
  "key26": "tytLLPgdpYjNmdjPAWbHNW9HaKSkgV9yqNvpooADxhASZL7eWnW8fiF1fyKagNQpmUxUsbcZWCihnWazT2LCkfC",
  "key27": "55vF1LUwPqxuptr53ekZeeoqPC7frTZWuhY5Hf7HqgZEATeSv1DP9sUng62KPVUChKv3SFeWTmZaF1BYyNVtUuXo",
  "key28": "5cj4363mJfLNRYvz3cnaZdGnAXC6CkGJi6qegy6K5C3MJpNUFWyEk8Rio6Vt6VCiWYuCdD1Vu1bXSzXzKuT8MBcV",
  "key29": "2rXu2AJXv5npPWsoQyWa97jvatbMzprH66gXgcd6GPnzNgye6vMxDpy3aysMYAx9TEkAxYSKXwqB9c46BUX2jK8o",
  "key30": "3Ubj1ZTGgSwinDSmS6zeUERULUmVorZkXU2qX66qK5ZEw4LtHmbaECnKcZStSUfqFUXSmcbvsTVWZxcELrSyrC29",
  "key31": "VaEr8p891m6Z7bYEYju8ZkiYQQmxfdWhpMnjqmbpxPeKERnqPYnF8U7tMfiF7qdeum94QZfmVnFf8Ai2Ks6C2Y9",
  "key32": "56gZAiQFfXHWAgbvxhHQCJEmgTJ1nqktgCQbQKCkxRKKReiS2YHMbSBZBcYka3tcRuyiXdWUC9t25DN8jsRoQfTU",
  "key33": "2kirYDDhjnf5RrZVMRqrGeXpLRutLdWQEGMg9uEqfyLFvhbES7PtiuQKaMCXpbQ2dMabjTFzdV5bYjPberQ8VZ5N",
  "key34": "22ft1Kektny5VkszbriECuDiRBievPcuiKM6ymc7pmXquUWYvY32m6Gz9TXV511EaNGK64etGVMM7ySUA4dJDTBr",
  "key35": "62NdVBa3RwUadPWhmRrcyxTyPeohPq7T5kdUrZgwg6ub56rLFB9JfW6SnbrJE7rPYLFy6qMizgV4v5KbfAzJdBpZ",
  "key36": "2odaLUAk38ai4YuRVm8PuZbACaFGEeWzaxrMfBsoQNGfEFsEZikwvJZwTjS4BfNduuyCH7s7EsZWesdtqdbTsQZs",
  "key37": "3gFk5piArNSNfWwXTq6BPBSPAhA4GbK2ECPomj1M3NNKK5vM6qLfh7wmj7CXehYk6mQwXoNzkETJ9zDfnpQRqMvz"
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
