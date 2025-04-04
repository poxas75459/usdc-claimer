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
    "3devLt44Coq3Cbod9gCCvwbNQ6LNf8fBDsdfwxLNbaXc2PvxqamzTjjyfWe5NEdyNhbECsXVqzBrGv4cc9xtMiCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xtKWYNnGhmzryx6HnNWNbpxh2WMGEsTdX85wzBXcnJLRpUKNKRASt5hi8TBn5pbsfz9DyznAviQHnraLSboQ5vL",
  "key1": "9Lwzg39SKDqWQG8mMenpwFh8mgUc4rscoJxMRS6QRzZWTHCqcxfX4DeGKLq7ac4nS53YFXDsv2qXdZ8aHB9DjM5",
  "key2": "4MW6xNtHYnFTYThozfhZiLxozHUtxX8aKb6t3ABoBzdEZ5XHGGQhHPdzMQLHfebZrdpYDS71BhHkbLXFaj5aoPoQ",
  "key3": "47FWatsMDEA4U48ThFJK15bqAToMzJo1kqHhrHBENX3XgYeEk84fjSkNwW4XsBB4S79tD7KNTE6GX4qmCrqSG9gC",
  "key4": "3AscvzS92WB2BrujmQYoH8VPzfZcRD3hVFcRY4gkV6cYPkbaSUSAPeY8xGdAUgXUfajjXRDJeAGMKSL3gbAqV5Fp",
  "key5": "5voR4dyZEjuuUzqRs9PkEngi3w7MfbYdbiDss6uY3tfPZvJTHT84yHzgQBjYgGgRzDgUxVBz7Kds1hsDRaoidbpC",
  "key6": "2u4hq4tuE2FdHT9mG5iwNspGiqpdcZUQoVHZLNeUDS9XhAJWmUnNB4XwgKsTaoNG5jkeS14RqLAXMtyhiZXymkFv",
  "key7": "435YTrqbXxMkFfG5JcwyqkWvKomPHJsd19acWajnhrH7c56s1aqhbJU5w13XGJtW5WDQZq4nkSby5Qd5XRg71H3e",
  "key8": "36iMQu67s5MSYwU2vxg4vcXqr6sWonHpRcZ7jSmzzakpGp5XVNLikVrzhqBYzH5vxcAhpjfKm5M8GBJsza2GLU5w",
  "key9": "23XnBvJhfGWrChcREFMcZja9xftuRRZvoopWZ3zz8vXs8iGEAo8ShZBp85v61kMwxHSDGSuEZ22e1kjYmPmy6VMo",
  "key10": "LFdSBAT77xiPPUVofjwppV4x3HC8DmNzCrtsD4GpRtU1b53NexoAfiBfgdvk8HKir9rjxZZq5Bj6AShkHJWGf7A",
  "key11": "HxWoe5KnXhQmezxMtMCkYw9cigYxBfYciKKxVSjQsTxfuVwLbSA12FCBRvxFNz2XagsNAFxFJRegUGjpER4mvXF",
  "key12": "3H1DUz4wYCX3TqcmH49ozXvQw7y6Pd5La1sfvRV6F9JoYsf9SQKtnQjLGsJYtG7z2CiQqL9xgn8hHFdrbQYDXWnb",
  "key13": "47LxHxmqjh5T16mCG95ukP396zxh6hKit16ixtUgqRXEiuD3jsYKjb2n9yU7JcTmyKZ5p6S6JNmLEEZVM2AAHbxw",
  "key14": "5aR5K9RcJaf6QMWmqSSUh5MK7RCbSQ4YM7VhLco3MtgKS8h9FkjeFyaYj3GcghCFg1tVYCJ2d7rQ4patwYTgR7E1",
  "key15": "44io9VUY7jX3d9GNZN8snpWc6hap1qQbwWEnGYBiTtkuQmH1CzJpG7hJUnEuwTfFhq1c5fMYkjVE7ZPWjUCVsr7y",
  "key16": "4e7uRfcVy4hwcuWZj2HGtWqWzWQc51cZJefLzJiQK6ZubcbnbfPeJWDcQ29pzKXNL2didYVdxDoCGnd8RkNbjtLn",
  "key17": "5g8C9UqNbjNwb92EnFbwagi35UtDY2kLi8zHp9TFFQThzktGpLt8zZ4NC5HmhAeFMAfKPjemvKdWqhfBX6DM1iBC",
  "key18": "z6etA4eSSTrgPrw4JMj5U4Vobo5YUoWecKHC6PnHRMBhtszqW4pN7wiGiT3TqsyPRwbtYJ5apXnFJeAQk8f3c5d",
  "key19": "324FKMzetsu624Jc59ML7RULZWidDHy1CNhuQivfJWj1LxvbaA4HeHrFf148zK9gbz8NEviLYGVJn22uAAhB6WVc",
  "key20": "2c7vvD4ukBFnWAKy87USrRb5jW8p5mGWtcnp7sAABdhPX4fr5tpPPK3yCoL3HMwoFfdXJEGQEX7FQ8HXMrVtM5gv",
  "key21": "5wLxV9q11m62NyYWLtmo79P4BU81xjZagfUqHLEYDYTrnydSiQpNwNbToosaSaw3uQoM8fYWyJ6pP8dq4dHwPgLc",
  "key22": "2re6jadGuo9RvUS86q3ch2f9sVDHm2rzgYiT2PW2oUP9kfgoHKmfia1pQMZ97Sz6boxbDACQNCr6Cju45Lg53NtT",
  "key23": "28vtZefJWgFyBaLCzW5RuxP5FGKvSSBpBnM52VgEuK2S9VYoKgFpDNKxBukdqv7mWUNyva5fEbEGjgTZ517RCNFY",
  "key24": "4H6UhSp3XzJQkM25hUhpVh3hHVpGDBjEjkaHtYhz4ud8N7TJpdmzCF1Zp7KE9s2YiruzLutfZpweK1qS9XSifP6Q",
  "key25": "36ukXGngAADcHFM1pUTb6ouciunW5ECSRjX9RZ6zgz8Eo4piDYfFnDtmviUrZZRZeqWMqr73oSnqAGC8XKPaao5W",
  "key26": "37n3D9yncxHVk2bt2wfk2Vb7nFqG52eYeHSsS4LiCYRooNsNmpfRoCtCiHhBtg9FjPVpteH8wJsZF4NqHr3A258d",
  "key27": "4W7XCE1ZvhWFgSGYog6HE7VkAi7mp6sEiUCdSsAYRQujmfJ3QMite3PDiiS6MVmkBf2od7EVnbntSwMwKt7eiBLw",
  "key28": "5GTUwEZdbKEzUQt4fLKtYaSd7CZwCX9SZfZFynehYwnS8tvQfE6YangYXTXDVGp6P1DhwXKRFSTsZVhMxjdByVPd",
  "key29": "37UnAewys7AcdxQd2e9GfYD5ZsXGXmD3fEVpoyzE7pqo5Bz11jdQo6M9gNzLbXoAM3Ek7pyddCG4tktorLpCDdGH",
  "key30": "3AnsGytdAPNY2bDDmHu7YGUTF4Pebex2AzNv7MuKkvikrXhnwxC4CqWC2rBgzEj8pYMxpZEvJV9XSboj8FLH3VH",
  "key31": "4CERT3VgfQcEihVAoJpMDGEZHJVSSPmuCya6RLw6coG6EeA6RufkziytDn73VZNTaej3CewbvpQQLYHmdPNB78e4",
  "key32": "srbpJdhuqQv385t7CwYGWHLQAxtLzwKKeBBAwHhBeTJrSx3wreXnes8Yov4kBbLKgH3cwuQSHaUNTaL93otvygK",
  "key33": "nwxMwmcWCB8e6CftdfjMRsjaZHNzc1tbS1cQ3pGQ53VbkoQTyz9FtkyVD6VrYALD5ViTCfKzEZT1TGaD2jSzKqy",
  "key34": "2hDKdsjz9eG2iNNBHjLjT1qoRCe12pFV7o3KfuKqgHo43LTG1SzWZ28Vzj3dcc5LKrFu8p7Sf4GDLjhDTVU9Vsut",
  "key35": "9sgHMmPjShMt7HjLbZTQmGJwSEiARwMP2hkMxcakew7aNBcBJEkyqr3VD68QGfnnYDU8vJ1qp9oyg2xpVGLd1c6",
  "key36": "3F3v181BvTrrwQyakef8hJTYL75rV6ZmDnEF5rmvVd186Dew8xuHp2eAGf28eRey1iWDZ5r6mycq7aRRDC8Kimv4",
  "key37": "31pr1W98c5j6JdtWekpTzFLQu2bPFSwMT1iUTdeTVtwkCWq4cAenNxmgnxWzLdzPrAwvQfDEFsuKQURUBeJmGuKD",
  "key38": "3R5z6WRPz6XPCyL9M9Uhv8FGpEtsB3jRH5pG7u7d1EXjh6tSCmMz82X3vRTvhN4epiGZMpgwuNBj54joCGJa6pnB",
  "key39": "3FpGRL6deMXLLodzqDWhCPswfHR7g3Gi3XzgKfEoat2a7CdtXZmEGA7Zz9piLzFAVgQF5zUizJCFBWnHVQx1oMeW",
  "key40": "3vCCqDusUabNacE2s9mvFSr8Z15c46ELaTyxwzrdV1FGRZ3uNCCCuk4bVK7yo4FBjx5scXNFU1ZYazz3GkBT1ZyZ",
  "key41": "ErCwS6AhtUsnhRVGazBEq8KgQvZ1jqsPSSRbBAocyoeyGApaAtSnpKfiAemPQVRsDCgKNoX9CYYHBa5eFvaNXeo",
  "key42": "4wnNUHge1hC5UAQSZSUEcVEGFrjLtDV3Q4aTCNL3rQSUZUkcdmXtWs6gUGLuQxdguKaGUnJWVRXS7gW6YZDWA5gX",
  "key43": "55Va2GG8bqVDwEtZhoNWNCyxUUjUUsHFXN1RH7Fyh6zZNuPG1PUQxQyvd6iiJNiEfZX2pdbYgEkAvRt5jxDBeG7T",
  "key44": "4YQX4xqZQBoeK3HKrggnKcwiJgDFhb7XF1HBiutekiTgcjffzy7eozbGRhMFiireNjTG1AR9doR38BLABgjkofgr",
  "key45": "5pS48Jn9wA5zdQjHoA6G2Fy1fE8vGrWRsoy38qMVVZHCv1sUXNEvz3LzwD6fzdrCKEpn8Y2rnezLnBWeKXa9Zafx"
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
