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
    "AcZrRrRvGGGH2GQQaYP8oUMi9qvMfEsjnAoAy9U5ErHyj5CsYmyrfJBAutdX5hKEkcWePPj16WeqftVigwoD3Vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KuEPYiTVeEidvuCxDdMQcL2kM6Yks6BEggTBN1RFXr28UJb4uBsoPGLQFatf7YyzBLdbZeBj4Ujx3gQvyQLrWZx",
  "key1": "3MKKPWyR28S9yRNMDHJbvB2Jh3qQdi9WjSCrDHDc9b8XEkra2V69LcaJuS9Pw55Xn4T4uPS79YtzrQdKKPZkPSuc",
  "key2": "25TA1jHUYnDt45q5rrHpNrZuY8zP4H6mZhzxXs6Wwa3ftd1bdY8cKkKbX3zfXwf41mu6n4FxBst35sbhzJk3XdjS",
  "key3": "4YH1vsKnCfqoqhKco91K9MbVWtc8mLpoFfN2WpVx53gDdwzeuH1JcgvbLqj1JH7SBPAT7V6eSDcvNvdSPyrCYiNF",
  "key4": "myqRQK9RDvpMraqfkA8jB1K8eWVEBaPZ45bMaE6DfJkpHKVA3v7rbFLrzBEYxgw9XiFKtLoSdPinLoFwACftCbN",
  "key5": "4Rq4ppr7SQVwNqurPhqTCJrMJqF7g2NSh3q42Dt5K2UMz1dPnQdFVYUBrpJXwy48JbPxzg6z2RJoCVdbcVraM2kz",
  "key6": "66rYu1JEDyMDybYoLawX2CT9PDfdcUMW37A2jTUUhHCf9H1w6F4q4EaEk8oNJiCmjGWDFDdLWhjgeaNw3aJcg5Ns",
  "key7": "hVByJiZAQAa1vFguTc6v8T52CtewXVknMXeCqjdtJk9ErsQ4ixBMWTrompnyw2JysEFbqBn1osqfT22zGG9SALu",
  "key8": "3dmafUXV8ymv3MdXuxUSBTpR53rQGfqeV2VMcrsnWDw7SUVmTq1MLVzWY5nwU7VV9ZATtWVxC3tsmQHpcnag4FFE",
  "key9": "mqciXFcw3M6HKMBhMWF9auUaF5hqVqvjmy75ChMdsVCMkuqrbAvba6HhBpQcdjsvnu17aEezsQ3GFr9j29BEDDa",
  "key10": "5kFzr1ZMffJ5cYkNcBkiFUfNDzQKhcsVfY9w3XZSUMKvprmGdW4KV5wFYZRfrpfuwyr12MXkU24otu7JNZf5pmVU",
  "key11": "5Sb6BogwDCGuuHi4HJKiRine2KYFC4yS8VtX9QcjkPH2PXM648Y1BqPCequdhHq7uWW1iEoUNiEFXpLLwRek9Yon",
  "key12": "2tsDU71irPCYH2JJGBBa7ZuhfRNUgK1PrEjQtYKzR34vhb1NkJUWsLwWYV7R8Xivce5JjAECXRbcKf2CbEPg9ui6",
  "key13": "VyL6cHcj71CbzDs3kP84QneuoPUPytNCxfKL2WoH1avAZaENPrsDdPe4tGb33R17qLMLedyc2JMdkC3F36GxCvE",
  "key14": "2RWrbG82moXjfQPuvLDGTJhxtmTW3kVcZjBJirGE1pckxYzP2oWcQ7XHK6WVjQ2VAzmKLaC62QiA12xiudpMKhut",
  "key15": "E2E8Wzau1mSi3PrYNebQY4D8McXmdJoxjqNGqT4oHh9K66Uky61KnRpv8AJywJywBYqEGcrwH7h5iya5CRuCuwb",
  "key16": "7EAruvxKREvUX9Jqke6akf5pfo7dhNWxuYFQgmRFUzqCLWnUDYQXAPDJzscbm4VerrdqkzBYur3sJK6SVUWSVhu",
  "key17": "46UsqR6SvaVGYYXp2LxKrzCiwd1eoB92QzWBFCPntCdWWbFBXy4L33v42CzeMXxUGThz7jEaiXYh5vzHFvHPGSMr",
  "key18": "5cZYzuHwq18vP6k9dtDm4K5TjVWLyCfW4SkFhDmyc389eEktr67C4PuDEEvFnBjoh9nwJpnwMZzamwahF7gLu5Ta",
  "key19": "25wusdzbLiC1YSS9NiVZUn4j4AZ4DSuV8CBDRPnCPMmxgMBAXbfXEiXtd9HntZMnX5brwLFF3vZjVrML6XdzS6s8",
  "key20": "ST1FjasRQvEQS1XuUiQnwhvF2YsqLaxiB7fnEfbg3HeZwHLfCrmsR6unmPcaEbsmX6j1vQwnaNtpaSQcPRiZhiH",
  "key21": "3ipxauj77DBeGcwKWrzKE4k2pRK3X8ghCbxuCraJW6gq8MwY81Ra21cs4vVYZKT5zSsJPNJ3mF95n9P3vcvTJB3E",
  "key22": "5nMD4MyEdRTC4M7vVxciqMuqd3Wfdk4a82GBAZVw6Xefp3rr4c9PnGWofUAjZcaNqHrNpAxLgWmgbvMPP4QCVH3R",
  "key23": "5KMx8gVf4J1882v7RPxbWGqYd75EjPco6tAHZzstynVMBgSen29JP9oKb7ZrP61Nb48fKfXNRWKhdfDqMdS5RJoL",
  "key24": "2id3B3vjZSLzgSmYXs7s85TMzSkyfNY3sauE3uYtSopcA2hmwMYJkvVnysYXNN8Lo3o88rCAMezhQb3vqRKpkCMA",
  "key25": "4ipmo1qvoj2rZxTkJJo9JbEcDSzYmFwxhrAQ59nvpLNefcw69GHY68y5fNnKrwGJoXhGSM3EVt6bJFWLWRcNC8rH",
  "key26": "3qcJv7kH83mkguMdrj5Qq12Xb8EKcjVJvRb6AJUVyfYA3atbaCBpADb68fNvxdiRFvizDKWBUpeKYfvVMa97chb9",
  "key27": "5rce1QfvhLAA2yPGBEJDnt9KBDETQbzkxEiirM7k9JrbzDqZkw6tbYXDnFjUuqf3uc8Fez7yN6aCc4PFnob47yHN",
  "key28": "24c3LXr6xaA6CWsdioFQMC3h2HdaShRQbRiyadiqqSRb7cihxb4H6HFYPf3GAbDfZdVAYBdKXUYM5hGYarBnzvkF",
  "key29": "34KevtRo5zHotQm4SojVWFe9EUZm3KQDgAqhEC4uD8wkMZcEJBcotqRMn8cPamZPdc23D543eWmjf5cE23V3sB2o",
  "key30": "57sFLnEERSpUETzjw9yWASavCvp6WfDNZiFDV8ssmJcgLbp5qvTfLJFbYufuWFZyGppQD5wxrh87Wi7uLmLwJ9yq",
  "key31": "2T9sxuEXe1DL21s1itV6snuqC2X8vkfSCoqnNuzMTtBTuvg1uGNVdgE4MUhijGs5jrUnT4EjxPFH1bKJcaCE3Zzt",
  "key32": "3YpBF9yKEvZ3qN9iSPCTNDtvopN4Mz7tz8ap1bdVpu3s5jRzJa1RSNwHXQG7WUfAU7YuLZmmym6VAodzkVW286KJ",
  "key33": "2TsLy8KLGxiiYN3DbDmF2FYmoDfJ79hHV3fgNXCfz3HctqWJyxLQ9q11bCd3zonyn91TAb5ttR8MrWG299ie16L",
  "key34": "44j9Czo3Mkmph7XP3tgnG96Mqrgb8WVnYWUeVxFHGfSojvs9arYVjzYheDMy9ysXQZcFSMcMn1xv8C99ZmmfWGkb",
  "key35": "5Nx4uug28aGNd2or9tmuXU1ArTLfrD9S1YrLJYYgSycW2oa1kWkGoU3YpUFXsAfQkmtdjtQHVfaQJ3nAHWK7jdtK",
  "key36": "NfTdeME9bF5Syo842BE9QnRfsbvKGZP4rsq2gUntWA6hd8tjN7Lnbowr45LEe6ESeK8yNB4Ek6FERKfiNS6K1WD",
  "key37": "3pQXay7iPVc8AEMxk5Htksh1wjdp9XE8BHhAVN1fcHNP48qF4YKoWYF41766x6QsvTpezevNq8KkLneDZEccC7TQ",
  "key38": "5dYBhjm7xBxmJfDpq4M4JhdsFNZQrzqvN4G8cam8ij6UBkhSRXtECA13kjj7Fmc6HazDgoEynqyheGsWqVXnPzEK",
  "key39": "5r7d5rD3MMeDATH4597NFnab4kv5MhYnQ9RMRBuKekqCvmz9V3oSZ46Mhw3UZvnAycjUqgDGmg4nzb1rJNcLJogr"
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
