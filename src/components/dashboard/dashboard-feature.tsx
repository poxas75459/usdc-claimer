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
    "2PqEHC3dY6V7SwvStK8Kt89jPzbGYvwzMYG7LikxAVBc6ppXW9y4VTd6A1FXoL45TWFx4GA6fqsBCn4jfMzJxp4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RUpYz2AN26EpuNhvLrwP3aHzn5Ct9uQhgcAMwojLjWhiE4NvXpAAxYjWYEtb2Tj7zhoD6VpsrdUsUNii6NDA5Ny",
  "key1": "4s29E6S3no48YBu6tesuWEk74fMaxYGXxVDRjrNwi4zEdTx5hoSUhox2bgT4o7xjJbsCWEijwhgZbwDwXrFE4a6F",
  "key2": "4g5uanBopNdtLT1oryriqHYjaE3TRnhigFCeVRqiDywQtFpKMNCJ698gPTKqvqF7s3EsmMD1QNm1jAksMQ2LgQdt",
  "key3": "2ZGw6ygbR6G9sZzyY2GiXpfMzHFeFnoWuYB8ALExeKVAGKSqA3W7ZkfvAZCnLh7BHhkXsYZ4bZX1TWxmgUGcqbmX",
  "key4": "6jGwDP5xbpYG4aSifwqzb5YrkDeoS6Q9Ls6hSfjy5GgkCdufFRgMZjqRveakf3U2pKsat795dMZLLpyPw9v7Pqd",
  "key5": "2PmUJCwqg6yAwP2ziJoCXb4MjbGpwDvopRt6Htdj7fmc6tsVcyFQ2Y8ewxfs4KL7U4uhXx4pDWhmRUpKh5SgQjQR",
  "key6": "44JKUTHSwu1L4Y45duK2MieDYWftVzydU5WEMazivD789xn7MzGN7XPbGSKVgEDrSwn3RJosWFskkkfyWEujSotk",
  "key7": "66ADsDPrFcbWAWSM5JkRrJxPsmmqmpniJBZ4SVGPDTGDzCDgkayAYuQ7Kk4i3Qur9A18UP466U6Q5181mpUGYzvf",
  "key8": "3sheLPx2hcABfMXjGsDCD5WFwquUkHWNjQp8zfYLCMs1QXy93hDyfnY2ZFjDPb2mtVUZMcDxzMUMQQGeQqZt3P4",
  "key9": "34FHxqBj1fEySx5rMpeDgSajEBFBDCFVpekXAiVZK56h51Tv8tNDVF2HgT9e9kLaYpXZYwRJe6iXaXfaL3hMGsUD",
  "key10": "21Q5vEUS7R5HAEnkFKbJoVkiqMzihAUkB9Bk7UaHdTKQux9A1fZUAxbQ7wGCACUqyN4LBEc1Cb84NMYPgdUH49Uy",
  "key11": "59SEC78dbf7hnk6xwUmK1Bv4d9DV4PkN7mELR2bz49AKH4WxbeLRf5X67PqngTdLvi9BBBBxM5WhtmJmMK9NgM3T",
  "key12": "298Pm4D8tgr9D78ybK5pPEJwFXKq3YsVUkcRKzPy5KGFyhm9NVTvnmwKi8hxhHH1BzdML3fD7Doz1gJi44hS6eoN",
  "key13": "2FNtwAFjHJoou59f992cz1AWjsNpxBWeSqL4ni7Brn8c9MsUKxhYVqhraQKo4aFfXS7RLa8NJyhCQrmBCTVnf61H",
  "key14": "5M9aCsreyjKJEDRAi5ruHyjxQHAXjUVu23CCLhkzfAG7HXSPF2Nrw9X3sDb5T86LBt4Nq6pPTsg4tS2TSp7acaC3",
  "key15": "5fq3UHwLatq7VJDs79tUKuZTZ9Fq5snvpJuECEcnJYWoMWCLkQzJZUpYSmjG5GxP9C8vCjAy8emYkPTsGtn2rFPs",
  "key16": "E3M7PSoHRtrHNmZE6wG2FWWu3UapwcTY7UBsgguzJbte3WBPXmpujPgXWR6S8r8m3VurJtNwqyz9Zp6LsRGZAaj",
  "key17": "4tDrNuYaKqvJhKgkghKstFUEefghQXWAevXk4M1wpXag6B6bdXTmJeGaRpevYQJFcAqfwzjTVgDdNkiMyyXSbyJS",
  "key18": "8nhZXVCNqgjvt9TzYEJy3JvzTENev37h3VB7Cah1VqkXFcvTDHpzT7M4oj7VoL6gn2FShtkTfoonB5pjPmPNnBM",
  "key19": "2v5Ub4JCzeJqb1ATvpxF1ktcKEVkfdZZFMaKLSmevSGZ13JPmsuH5CVjE6TpSs4qVzY84jjtV4Ec5xkMPmvQMQpe",
  "key20": "2sZ5ML8oj8Dho8jtZLxuvUa33CQb1RWau6XkHNWvW8hLeuTrvLtjXFQ6ZMoCY2KMrQi87KsNpgbBY6iDWgKmMGNk",
  "key21": "3bzEnhEu5qTvJVQCJKY5JMSmx97LC9JvRGv85LP7k4xHQtJ6h957dKvhYYm4MNCrvUnRh3mNmQPXP5EJ6hAJ3Q8P",
  "key22": "4oiWnRcPVGyYZiCwL8qxPLefMbypS19UMXQK6VPBaxnCcEoA6FEfDquDcDkvtA6Ua5z38c3bN8UYxypjCKGXSS7y",
  "key23": "3icx3hjX7RpARLVdeXbmv4hFDE7C3gsQTo6f6sfAEqHVv9u7ZJRDC9uudpDfB6srjHvHEcg5bkqztDf17ApZTTkQ",
  "key24": "4b7RcFg1Zd1MqFxRZfbY8wbG7KUDwVG36kKpqhgxoxpgyyHsRxsdRoMUzzrwFQqBoH8mVjcrpopif919xNbUaV7s",
  "key25": "3u4cmFFXetbLCcSj4Da6WZUYATG6DinmjWBKxfkf7sk9LbBwG2HuZpqPZc1XbeVn5J8X6X1kCfqkbjjBeouMRhwQ",
  "key26": "5Hi1wmWpZ7qPF5LvUjDu6JNpiBJVLXLQLtDfYfnUFyR3QLHuUuegvCVH8HLJxtbcZsobSChRpY7uEpxocH4wFi6m",
  "key27": "4baiNJnrMfPbjT3VFKHzBjKX9So1LFoj9LRYE6UiGt3mc3rhSoWsNLTNBCLgdfSGmX1RcqcbsHYZwZrdJ2t6wjFp",
  "key28": "5Nwge45QbxATP5fmJm61tpsZipgGUMT6TXaeNUXiPazc6CJzsbd1rkBk5TWeQC59yKYjPuF3ihecSMfwjpbsqihB",
  "key29": "3uJr8HEqSZoetQ2JVueMXPjaxp7GQQ64JY3Rkzu98EMYNWR5P39r8hQW25WkbbNEdaf9vXxZUtVgHDXunRSho5PY",
  "key30": "53oPQVpm9xMNivF8Qygqm2WmjgMVWUZsZThQmgik3SdTNm5NjLTjbFLAKjoHF494EVenTTxzkoxS85tm4oVuGWLS",
  "key31": "2VsGAUMnBkgCyrpGDggCEPpN14My1c2nRWLn4oCW9fC9uCB1ZDNnXgJctrG1jXLXGYMdaiS9xuknQZ25aVLK2NHA",
  "key32": "4K453ADSZ5ZDv9BRiXGBDXoRaWXFL8k2za4DvkstQntwb5aQPA3JnFHa6EtUBdccoLapepz5n4UcGAtNx3HjZQ4S",
  "key33": "2UJRWgrAfUkZUrDFvodyQpK1cKxFyBxbAL3U93BDdFbuwihfPgEzzmrqHwDCigxtqgHrupkxGEsTDssbewUjTfbu",
  "key34": "UCRfeDMC9zn4bTC1oVgi8nLy7GocFUAEWu7hvESnUwMRCCwb2fCG7V54yHaBa7rp9HqXVhsZDTAmJ1T9vEhPqTw",
  "key35": "22PWUi8FHuAvUxkECMMMh6KxFDuiEQ4SQF3ReGD45d5PUBspGF8xsh5ZCP6tjShLhAzBJLh9surKSAyu48SBdyYc",
  "key36": "4K8Zs2QLCMTSCFnY5DauLxzxaHWzV7E62PdfNLkJUvHyQfwtzuEMrERPNgjJCHxgG4F73u4jhYqZxncaFB4sBFW1",
  "key37": "2NqLWXukBdYdKk3CsWGAxJUm6oHxYbcQkr5pZbhNMZQbbAhhNbXVwmN6xA39CvFqsPapaFNuZQ81hJM49uxgF4Fq",
  "key38": "3m9HEKe9t2VgCCA7Vqf4gsTN1vXoLvQ8fDCmyz1Q1aJwxVpWEJCAgyYQabTkb4d1VmtsMNhrt4YA2erVQLLsReTe",
  "key39": "2DUQLR1ZdsCPstPnUibquYHAWcp2QtzmhZRvUgJ4wbruXpxYnbFnVTW9kE7d37iEduC22Dg1NssEbfvog5L6fU9C",
  "key40": "MGi2beh98U34VnePBDnmnk5zkBQu9SQNNYioZQKVaZU69ptehnpADNxbNpLvCGmJnzLYbfYaFQ95jg3tdXx3Bg8",
  "key41": "54p912W7UiYFp2tnSExkxX1DnK9XoYs2cjRc9joYMMAaQ5nGZcHKwEbpkMZ2Fgeva8yHCPaxv36rno4D8k61b1er",
  "key42": "4QXrmc2eTzZHVXAppN9Z7gBNeuBR6nFnob4bJrBdkJsZVwWUsgd78nBwJBojsyVoLZwB95FyznWhvUb8mk9nF3oY"
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
