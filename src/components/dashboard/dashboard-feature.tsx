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
    "5V7onCf5R68BFzvth9J36Y7SwseEwEUJJwa5iAjE1PSXLdNhVtR7MEAu4HCCvTr3wqnUwUMmSrmjTcv52qmQZU6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfPPmLdk2nhyzcQAUP1L2wmV3Botzb2vGFT7AxEcJkJbTvTFcNH18BmfTzsFjHMmieQkke2JDNmy2iL6c7Whafc",
  "key1": "2XHAC3nR3ZLECHmJjybxwrisiRUnhSTKfXSudok7tjPv37mUkFS9Q2mA8NSjiY79oskGiaQkNBnu6sF5ZHwRkU1P",
  "key2": "2MCHsCCvU4AnwJdgSLarYm2Wib4LEXHAEUbLQbjTTp1NJBV5VopnwQhScoxdSdpgwwV5i6Exqnhmds7pm8dwJFwb",
  "key3": "2EZsGcc5rjyY9Mz1XWaySxpuWgi2FegiYJVsPfeEfddZ6e7FJUiXK7DDDp5FieHiFMtxGeViMQngrWoHYJq2ZCyC",
  "key4": "2E7D9JbJPZieuDnsopRNvEBfByBWihEYksMQfN4VPPDEJSNeP4YUM4Ys3CZFcnAojtEBay4gs2wEPTmPe7rULVt2",
  "key5": "4mCY6H3ApNuznpaQ9sJXXaPfwxRRHqTG7DW59EVo27w4WiuZMebt5AucqwSYiC8QKik878TMaGvaWqB9hC2Wak8Z",
  "key6": "DQYx2LxX9oBxCHAGKEvG9ToZsTCpVKqEYpwSENsjvL71wgFCUdx6nGCqcd1jMkxPAstXEwsRREjc3z6bfUkseA5",
  "key7": "4vyAFmZoZtF89hP6HyjVqJt4bHQNB3ZW5DtHiWXY7HXKyDp9X1ipTv2Lpm1NvhsnvwpEPr9ZQNcWaZoGf31tEphM",
  "key8": "2koM1wZvNTFsrxEiNABvGtR7EDaZRJ793RXEQFNkA5ezSLzVDvn6ZKuE9VKJDd4yDZdMXHoACmSF9tiPjFgjn3Ca",
  "key9": "3tG4Q1w3MGyZExsR9Mpsu8f1m2R2HTawhK2gN3wu6FKo5UPWeBjBkkYEfVjNPJ1d1VUqRT8b2Hg29953KgTU62Be",
  "key10": "4gGgyvZ4rVYpy5qRE2EC37bwX8ZiCYdMjoyyd8syZZTzcNQe17GLAPXKzhqTsy1HbrVNoAH5JezQMd9GABcQ2s7V",
  "key11": "65rmYWzwaqn4J2JuEFAwHT54peuUkHBjyBqAxfoRMwQQuMZPQT27YWYdhyXsWognnG7yucpM9NaQdt19tjj2BbR7",
  "key12": "2FixWG3WfTcFnWP7hrjV5uJmpkSTHQ929ouaZotcBKzuZjoL7UgmDE46sAX5u5Gc4apzX6X5BXEu6BH3734NurBb",
  "key13": "6qXLZDw8xpEmEXmktkFe2dTQmmZywKs5xEf2ZSaxWyH2b3vvbP7RNsKMHCsYSSo26ZGoKZmDpCSVbMWrvWSxkBK",
  "key14": "4YzuE4PkDwKfUevBVg3acPSoCoquNcQ5J8k1hNem62cJShmyLN65PMAeqgssbygfGvei7chhYSXvCpYH7g3Pm42o",
  "key15": "62bgvtgC3b6rsFNLYTbSyeedMi9cnT28zAGnjJxPtc7CtngG7of6b1gKryrcYjYYbvrQTh729wAVzhnrXgFgEDj3",
  "key16": "63sZc91epEe9SjfGy7isZuE3iVvkqRLxH8fpVdHkW9G8dZR51qG9VCrABfjrfqQdbVkhdkuMeQoCX1r9dbobQrdB",
  "key17": "4w6gCQturkKd1jxatjxbf2cBPcpNhrdVnkoM9Q8Wpa1n1HhZFKC5Qo9bfDx4QNotHL7gd69xyX2oyKAyzgEU5mak",
  "key18": "2GmZ2skLDcfJNiY6XpTM85bf1xupwS2ZMMendxWKkKg779w3uA15fDqJC3AHgygAurjZovUkyi648KQFyS6TbR8Q",
  "key19": "3nH8tiUK9JQxLTCMHMBaei7yvcgw5oRGgXNG3TboftRiNH2exZYCw4fUs77S7gwdHHiCL1Ben9bJeZdtXRQ8smmj",
  "key20": "3NZR8eFevqU3pFxDGLJeCv1zcdEkcjFXWDyWpTWEApbsucA5QQmYaMDBJ9UzFV9DDPAXPH7jHqSuZsPTJmEUs9Bf",
  "key21": "5RPFLT2MVoDsYJRDK6W4hjCtD83bpzVbL5YkC926xKU5LBzbg9CHftt2KNuBK8A5HdWu2vQWsXyz7XbHZYFPJ2z6",
  "key22": "2rF18qE746vjLYfYguyCEeztH7AvKwfud8SGkscvWu2WauxzdGCHyAbweKnjt3xv37wsjzEWmhSFHXyQ7D1iDuZe",
  "key23": "3fzWdJcHb5BkFKDQjPrtGQMGkS3ZadxEf6JbWnTCnLaFJDWMYDcfsyS1CdeunnEoR3xLmS9ZiEvuG4puRJqQyi1i",
  "key24": "35yo2aHzL453hiWuMKUx5vFSwBvXDJbsoLXwt1T1wgyz2Noq97ntmLhUsz8ecNjt3KJdbF3s3aAtekpVGDfKVAjg",
  "key25": "37wc9LRzQYqzqRdKcNp5RYHB4JzfNWeDeom31ztJ7WE4XN7HRBPjhmpbTtuYdJL1Cctv56wzRKEJRKNsXgMKZJp4",
  "key26": "SqgSRqjJktvKBqGwhWwsmK7y6jTxHf7YSnJxupZQ7pa4SuZTC49uLHMtjzjm9hefdNFHMXoZxuYCohMfYrAHzFH",
  "key27": "492AN2xFDgCUawFL4zfff9NgX2PsSTwNdMMoX5xfY95ykQkaSvBTMSfukriFja9HSsZVS8AtRSKf22viDFyy2Ykd",
  "key28": "2ByXdb7x7HUzFQEGv69JDDahACdNUsxMvLVf5fvhqH5TUqoBBPRwHYT69nbKa8gXN9R4h8oft2QoGBEqY1oJj4BS",
  "key29": "q5BQ82W8oA3P3yZsnRW2gih7sV8eCYUZqcnZpxEkt2pcdWkxf28WohyWr9jUHpahmZgNDWy8tYvLhJeecGX4HYg",
  "key30": "2nityURQh5BoxqbBzBgq9uMNdDrgvVKr1JbUnK6Ua9bMJEcfqKGE1gH2ANpXFux5hqKopQRBBbczYrvvHE7sUZHo",
  "key31": "3CghCtSmsN7E23bygkLqiCvHAdrFEmUggQAJhsvJ6QfykVZrT4yeRoa7o8aXsmNQ2toEcPoYmyJZJctGgBaTUZNc",
  "key32": "3h3GshkdLnNYdvrdH8kUuyAWginMtT4PMUdaNj8haN4cL9suXZLdru9A6N7o3QJdQ4DbdfPEaoGx1UhxAq9AwUrX",
  "key33": "8HnVMzrYthio7FR9Rtwt6N91jQvrX6oJwfLEvazUcgogKXobgGUY6Zv8usTrjCNnX939Nekpm4dSGz875Qj16oS",
  "key34": "4V3FE6z5RDPLS9vpPv4YvrjJb2Z9SeB57PmU5VpVWzdTirToj1YfJBbYRq44Brt5mV7eNaFT288trtswnjZRKarc",
  "key35": "QZSJfeXxPW2skUpRzsqWkAgGrKvQ8xiTWmmQ9E8MLLeSSB92ABRzcTYVzSmWZfmC66UKMDSsY66TZhNdWe6T1mB",
  "key36": "2oqTwBd3R6KvJ2yqeLAVj5i81e43KuB7JgWFVHtcr7WpjpRPzfy4jn4hxsi7z41Xpa39w9xjZitFGSA3rRaShe8U",
  "key37": "2kfe4QM4Hf3eKjjWXdWm8hcpYWNYf5SQqekmy1aFeypHLPeNJmFqXLKkbzyhB5r7jm4v373G3bWTfhW2CAgZ1YBq",
  "key38": "4jpWfBHtQMr4nSHFjrgECBCxWhboutJ2JRY3kYQQvj6om6nNkh616vNd7chdPAait2atYbLMCmbM55vi2DYxhqEC",
  "key39": "f1Fvcg59W4zk1cU7keQj2veNjm87ta7JyD37ZrHgG6mKyeJszTbZtrfrs1vCpLAW57ZGfJkpifyDJX9ubkKkUPy",
  "key40": "rttVdjkWtz9FVKRX4jsKhcFNNNKxW9NnCePUjq75ho64kC9YrLhVz59PL1MYfwiTLMM9CMSrvdE79djX8AD7QeV",
  "key41": "5LCUYE2FfahfVW3pwgJcJ46DeHA21FGEzL7h3ykxoSqXzUEAT5GEoDRCUckDp8be4x2DWgh2TD5CRqE93YGD3Xa2"
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
