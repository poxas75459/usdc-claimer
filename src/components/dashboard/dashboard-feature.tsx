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
    "vyPWmeyCDF7NfCDaqyiMpszbXW4aHMNpkgcSNciS8v3q1tAX2tDvzuEjyj6TJkd2nAEbTVEJtQxBXRMGeEejVjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c932KTCPiMdq8Ca4cA5mDGWnpeR53geLXu1wxMGVxgc5b6UXH55vPDLA4zL439jQ53DrrR6UPFNS24iuekPCDMD",
  "key1": "PMZaTts2tdC9wVo9Pgk47coohYSonfAeaRinNA8hHD8gKn9igxWgGH65sSVUWMheVtDyUUt4s3RhNtQM5PiKMyE",
  "key2": "4n6J8yGAftUWysGW8CDf4rj2gqpguPmy2uMM8TpdHm9ub2TnB7MPX6vw8Zr5R4eqvtL1hbDqRh9vNMgVdmQBemNn",
  "key3": "47NGKHGgeEVKuGgX1KBj2cnheo81x4e5KKfU3DvfvMWx5eREtuEBA1Qh1BWLq336SnPLCLndS2hL4J1HGTmrACYN",
  "key4": "4FFwK6AU92zuvQWaedJeogHLwzZcVZ8tiB4m2BcNzmd73BNGA9LL8xVVJJLMnvJc1rEwZ4QZxuLmC9Tjk6FTmW1x",
  "key5": "BWmxJ5XeDCgtzi2KreUo299RTZGYvnvFWUx5U4o4e7jDHq7GbM2hHPUbNvCnTrXVNcZVEiaJn54ja8DkibNWNEk",
  "key6": "AyKbbEDTSSyNTEawVLbp83W3UsRpJnQYKmytotrE6F45Q3aGSVnec4S7GhVk3CtRZP8C8bBAvC1GeYcP8quMLpe",
  "key7": "63fX2KAvereGFBUVpwQM1crAjp94mnpJasTu35kwtx3QHweLPq9XHWk9mQjt2eW2fRTRZqYjCkB3b9BLix9txJPz",
  "key8": "3BhkHReSBqmpMbTbNgy7MyxmUJnnkekQhkG1kseKqwRKEAeHAnG6TsZ1GFsQRVwoq1vt6CKQeGXRyTcCvrr55Sgs",
  "key9": "3qHvrtARxnDuFA3WB4RRh7kCyN7gZwTPxL71vjFPfUtr4uoGQ5irrQcXthGxahFPpTdN3dsnKNAWF4VQS6MEEZu7",
  "key10": "4g8iLfwGxgK6KgeZtLYgaazFoDWHV5K1jBFCHYDLwrWEdpGq11W2dkVpWfWYTUHSQerDtANjKods42SGoGN55rQ1",
  "key11": "4q29Xo5aDXtW5f7jUhVLCZAPZSfYfzRmRXRLPxxNjgfM4SQ2amJVG6UuuM8mKKJfzsZv7qHFv9k184EKoXyHAksM",
  "key12": "5Ab6S3VBQE2VYkNUbfNZeVPNEg6DiXrEUwcef4NevEBBWgX1Bxg2PQGYePn7ym9M9aRNzKmuo9LS8siHNuHbMc2z",
  "key13": "4F4MACpmxyprNLJ9jyCdvXEFmew5M4UV6CRsh5naafAQdZLsME8gxEWK6cBkBgPbRQj8msFMkPxJJzxof4Ygaqyb",
  "key14": "4XczK8fuW4maEEqekVWDXatfXKVE9cD8q7ys1hpC2NuUd9EUY1wRBBhAndsPZs526TPmaJuU5BRYgS9mqLJha8q3",
  "key15": "3HhT3daWubGQWbruw7ZtXvsKRFUVhW44q73rcMtjNxNkuVPddZEJqiu9bYhvJESxC9rkkbutoRsyr256RBjyBfRq",
  "key16": "3pBGxq9fzrULbqhrqEnuGHGpLpZ5MLYRxGdFY6T5CejXuMLdgMGxwQ6ce2GnDGrNCk9Trr87VzwR8ASWSFZG4upu",
  "key17": "SMGvXogn7HYbVgTaVtiHY8wS6ynh7UqjEBkCHwyb9Zv6LfTEzgyeoSngEHBWoks7Ht9T2AyprxnzAJrkeC4qhsc",
  "key18": "3qXCp4cUmyjyMRcxNvtHRsP7vF4nUn9dEKHuEqApZBvaoZgLDWk6JhbbiPhLtrN3RcKAX4moMkvURt1c2V7spQMz",
  "key19": "7QAm2qND7FAfg3gv5EsYEeB6d84V916ADhuACjHhAXhfMB9mpFTMhxVGdfAPe8Zw6Fzacv93XiApQzJVoDsKwFw",
  "key20": "5uQASGoBx9QPY9owqJFeWxEeZ78McwaswY6sKhzrEeaaj49aBr2kGWf1n2HhLW9yfNeLwFZXmWUwGLNmnb8aTr6y",
  "key21": "2LbJAYQRYD6ggGzKSSZimctuBYpE4cFD77RixqA2LDrFFNPYkJvGV9wTiswasyjfov4ACNSY8mGZgLrZjqUEGpey",
  "key22": "2pLqw2r4DWkSRUbzWuZhm5tpuy3rqSjjGxaBpnYSCjYMNodiF3wPD1d9bLXy9eU1oVrpKkSUUZAFZuhWSsao8y2o",
  "key23": "4vfNQxXoFCDsf7Gyfgt2z8P5TYrbF8aJSizK2SDZ8vhFjWZ4wYNSEYE6GvYoCSQzmzFwTY855vHnfYXJnTqKhw42",
  "key24": "yZvSBtb8AY18C6HCj5aNpLqbo28hP9vV4p331xR3YYrZ3gbMZbkrgWfBd3pJeEPMQwVcZ5ym7iskg7hZ6WXnjoS",
  "key25": "4DPUt3EJuH44nJNhTmaHdgoHpqruCUHVgxQSD8SqrQvP54717VXY7cJefhfeHSnzGZa1BMdXwhtV2QsYSWP8nZXd",
  "key26": "433kzQ9kGEBeQ7skumuFnPN1aXx1iPKL6NtZuSZU1EQFthQy1pNbnuzusTutS2qAtxWPvLxjEhk3qjc8SiMR1q4",
  "key27": "5Wsix87N8TP3YRzLMn19QLqfJqZzYDyoorP5anE1fbQnsF6i8DWBceuk5avY4gNkUTpNZ38hsGtdnTmBWVwJ9qeS",
  "key28": "2eKEbfpypbJy5NCUWtehx47QrM1pNfZipV32y6rheQTX8EGehvQ6UP59NtzHSBYJQgk6fGoL6aW5F22ra2FZwak6",
  "key29": "3gdYumPiXJ3bGGHuaFdt6GKkTWMetosdDPFQNNgWjX3sucHMunWamQZCAPZ7p9jGAeFFHzXiio21oRMebm4MSCv2",
  "key30": "2yrB7CPP9JVCyvbYLLnn7MFcAsJQELX4TxaGk3FTJ2wxe85251ULn26sEREmeJEKQ83uWJtMPCDyQwQ7WmwsvsGF",
  "key31": "52nQ6QJu8CcqnFz9b59T5AdjEWHCif4ZvJ5NnEqBaVKmo3rPTzCoXWJRHAakLNwR4j6htc5nNUVmpgmaXdR9sbn8",
  "key32": "34a59QKgbcRvcs9Ena2g47JTAVhbYPjbyBECmCNc1U7tJo77A5CKgML8nxfFYXngmWBNxNHb1toHT92TgwupABTp",
  "key33": "5r4WAiTBZqgewhrydGCNFRMpmyXfbfmMYwAw5VqUJmcFfeoMnUmzBfPCBPid3FZWRrz3QFS9yfDKu4C3YWDz3fWx",
  "key34": "3aoDNP7cMZm6GGFDoRavRAVgcx7XJeUS3y5KenwiMFTdz8GH69qUg6rsu63XXUc5rjsrXJuxNTEFxRSKveTrZVnd",
  "key35": "H1VFAyjSuksz6sbEE3WBKkgq6vZzWdaKPHR33kRrrLzvHHBF7UL3mNPAi3BaekhMCokVRSTFXn7L43tK3kaFxz8",
  "key36": "2BNp1rmcxrYnXiEimocssYkfAseH4KNuL9KTqipE2ZRTVQRQ2uV9n5HKHciR27Ffen2fk4vQkfPMHBAWdapiUuMa",
  "key37": "2YiXTphaJ7vjs6dymXUFhc7BoDSyiGxY7Y6D9uRc7kLzV656duakHbTFDqwg2S5SvsiutQjqNT9C8wrcemaLj6mY",
  "key38": "F7ykJbEJ5Eg1F8ztBE3mwsuqUMpVQM9kt4CZ2k1dkwPARJAHresHnCq9Aow1RycVDV7TJwUgitYWqbiHs4putQQ",
  "key39": "5mRpKXP9W3axucipsPsfcEwPz9wDWJvuxuF9xX3Sd4ScsXqQdTrfyme2wwHsPEjHLAemEVD3wRNTFqEUvPTspWmb"
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
