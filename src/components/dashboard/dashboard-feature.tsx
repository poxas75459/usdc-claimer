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
    "61mADaDvu3NpK4Y7epgjjDCNvKSHccYrfqc19ujPfFy9uUyJBSZwVwcdwoPuVt2Z9SdEzNnK9bfjDjkcPo82yQdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJuc8ASXFgjV6nyx37nC7aVbjMEK2XNq6PFimzd2n9YdiLFV8EA1Kbsz9MD4nUGTBgnUkmEsxfsK786J4on8maE",
  "key1": "4m781EsMZJk6DGEsd9rktQPciLekdVL4yNMu3CQQiweAUi6z91FG2nR4zSyBBUfTFerjs2jt19atYRL5LhTXdgNb",
  "key2": "G2qMt4LheTkf47xecRN7ni73gUXXnzRr93DGpmjRp1MwUqjTnbr28DoJgrLSf4tufFPK3QBBJcoa2aaaAC7p3Ry",
  "key3": "5eZmNUPKnz9C4Ra1Y5qNApy2bUv92ZziQUkPJy5EuMkY3z5bfYbNbxUoZLRjAoFjsYMMGKR3CGi7mGoAU7HLJ8wv",
  "key4": "474obTLJGt3wy1LJUs8y3Kj2RitvYrdMFk1CBAYeszs8CgGMbV6REziaXvYmn3tNBqfZZjxNSZnJgRd8AV3XA8GZ",
  "key5": "4GEEymzFVXRBYfBpbLUVkbxT2QKiq1XWwn4TrYpGw9BNDDg9XwenefTFFE2wGGf4G5CoPzP7xRRGomM3f46uLNaK",
  "key6": "5t9QkYRwQRd7Qdk2EnaodbSyYsXiXnwCfLJ6Eu7nua2HvYYzbA8T3FJ3CM58z7HuxfKiqJe4mjjNEdt5hMgGbgRZ",
  "key7": "3vLjUMYkZzLFJ9FUh9o7CqxG7D7mdCVJxdFFCJtQNgbhAugCHobNfhwbT6y9RsbMpEAfk4JDhj7PL1VyikGojzKC",
  "key8": "4PAKJopnYWFmCEooRtzpKRFHHaenVGe8AGANkEw4Z4Wpfjo6UBStWfaF3djzgwqrtbbNVGfYNup2oyCBVdSYxgCw",
  "key9": "5VKyoVSxgDEeAhmtzzQVinDd6eRY57WH7Wv4wGW8PJL79BMULxaKzyWyWRceCiAH6DRhSsVnKY4BDzmRdUeZYmAq",
  "key10": "2ZDQBTiaEUYSZEidXb2tPTCsfRr5TBPHidXJ8JRDhWoEkTcorEQsKADxroD5n9jeecABEYpN2hPRpWKxzruSeneX",
  "key11": "3eJzEEUE95rtphCzksTyjMoQV2pyHm6mQzpZ3nopPMbTVcNUAx9HgEkuxsy3fbQQp2Y5fm7DxaFZzUWJ3zjdBJvQ",
  "key12": "4oV1WWtCfuw5mAHCz6atw274duEKhPpv3jEmwAcAhvGD6hcNZk8nrpupgdnQkXXHxCiJMVy2JyhGeejG7sFCDkxS",
  "key13": "3EHjJcuxBQHvGp9Q4caQ9FWK5vPRJZKVq3ZpjBkxzLp1SsbaBo9BH48xTzRr2SfjziMPGFUW8mDqE3Us8kTnJg6",
  "key14": "4a2LzD1vQMFV3cH3LkkfoRksiM63zdxDEws6WMt7vTLZSbCqXBbXFFHpWb9F5c4LB2poV9FTqtq6HGgE21f5hn5U",
  "key15": "4goKHaimur2naEqJvH3772MvuYcWe9cyr9fkvEt24mTHTBRbaHSNTNArnxSTjfevwNXA9xLn2sbj9zQEGMfuJFQH",
  "key16": "4Ng8DkEZ4o4Aixsubt3qToFboh8Aw797aZAmWBjJHXw7Y3Y7gUEDNVS4Zs3emnwSTiuP9PCNMmADn6mqSCgEW2xo",
  "key17": "irAau7ujYK3s6bhvVsmTwiJdQbG4zWNkXccXoi4YggWcs6FfQCC3P8AcGTghnDCwG2zSD8qaNBQPmTXzPMTsK9U",
  "key18": "2ygzVJm92tRmqYyt5juoeDqfvtUL3BcVufwQ14sQuE7ajvCnxvYUzkTfcrYZ5d1vE39M9dA2Vy7EMhrQQVJ9BRAQ",
  "key19": "2m98Xo3axmANwqpbqJxo5LV9WeZz7ZaL63eKscGajxJTcLrTgv9qXhVjwx47yrvAFEWYfTukJW1B9hqydbjTQbP5",
  "key20": "37t8EehAMCNz7ohYqGd2yk4tEksSjL4xdomTuM5HxmJGXJxBQVfZLvApjdYrfYkdWSoSnkzaMvEMVvzBdkSLWkxw",
  "key21": "kjwmmK8MKWrNkPVMabqnK5xf7d9CnAMLG1Gsr11sGcJHrm3A2FiUJyyyW3315KLHP9VA3VUEinMTDHAJLoHyFXk",
  "key22": "BKuzjGQykgvgTDE6TWptety98u27odC46TFoqdpzqMDGMwdmDCL9xn5dJN512Na2YRRJB9KEKWP3W7dVULzNetF",
  "key23": "5D5Sdkkfj5JWjCtnsMZhvUhFskJixmwhC5MoZWdpqrMw38TdWf9yCBGjEtn2RBYFMwfRMEE6jgftz65nrk6jUDZp",
  "key24": "MWEZDeNchwxWAQLV43kev5AEFs24RzstQhqa33j2DJmJZPuNQU7d5NdZdjEnw1uUcGTcNAkNmqrpUjKScVLg9B6",
  "key25": "53xkgRG6ne1z6WMMMRq24wFNxTV5hm44VQ1ztevVQM3mtWzG5v7kYGBW9S3kUo1CmRAxJbJHzx9SmbTcD4q1wRgG",
  "key26": "3mD6gKXcV3jCetGzWU8t5Rghe8Z2oM9xgJVTHnWTE6gxbZRK53r5wkvE5R5TtWaL7vtUvDQRSPcpuiy9nS8F7aEC",
  "key27": "3kfFxYDNcB3Yt3cnzryU7nFbFgQ6ivXddHyaaQAS8MypAN5o29gxD9CP1Xn8DVxDH8QLLiDNT9hDo1uhUnTWYtpm",
  "key28": "3cxZBkL63FZqZndABNZnkvpyGbh1Vm88HpRs1Vcj9tkKNU777Z4fUD58EZvcbci3sF2Yehw3epJGzjuQWaBKZFSS",
  "key29": "NyCCL2MseEAhLuF76jnFbfRTKsPycFwey3YaNmu2KBQMMaSpWAmL6aNbMLBvcuKaxKTPRuvhqxhT7n8s6HY51uQ",
  "key30": "2yfrGXfuMaA3991bQzqmeLFL8Yaui3CxLD8vp62fra9foZyo1Piur7sx7byNjczwJreVcKktZr8qT6bVGR9ecSAw",
  "key31": "3MWauLRqa1Fv5gnt2meWAC2FXUo5JfvhpnkeS5jzkAgWqxrzpZTcLn6kA1YenHGjNTnm6QhgVZf6f3uck8Qyxyfg",
  "key32": "5W735D29YcvarV4Yf9LsPANeXjxFNv6sVB1tPD5oEAxYeNW7KEJvWEtkdU5LfmXPphaUJNtWYhaXPnnsb9FfdeGj",
  "key33": "2dfnJTsJrw8V58KMbRGykC9E7oH4WZfK4SQKVeLcPu977sgoEuYzQLTT7XCttDoGjBNy5pwy3qsXkTF54cKkQgHL",
  "key34": "4YRUW4nrJwZWUx914NDyD3jVDgyYHTp7rQUL3CuJAXMqewfJuKGdrnz7gdzNKtXrwLFy7jUdq4JLbtvKvSgXkpsF",
  "key35": "47yQQmNRvQoyoazn7gLypM45B2FhBKF6CiHvuRimZt9uw5ivUdeWAicENrZHDtmDaZt7WfjQn5VZKvV6j3WkB8W",
  "key36": "23rYuJi3yVA4Gkqqbcz9dacCdAf17FLC6vNaNJvL9B5MhbRyp34XuDGcJf3LNVZrmbquY52w9bkDV3gVXcYkc6FL",
  "key37": "XSo5SH5p3cJgdTcTgm9yASVa5WSbfcm1zq2NuEo8KCquE6XiqjhhAH2vNxjKMx7gcPdDJNgnnH2NNT84dX1VaAD"
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
