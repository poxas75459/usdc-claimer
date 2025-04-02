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
    "25Fzp7tdyg2tDd6iWxANdFmSs4V7QTUNW6BcZT6oad5KSZgzPitibdEtFEi4MU7prPC8GneYyw7Yw5mF23iS4XmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dG7NsZUm7v2RdBxjBPsJNivxN7HuC3g9MvVN3fz4dSdXT1q7jaSVV5QzBSeRT2kDsGihCdavLAbM1Q5vf4DpcCw",
  "key1": "58UwsJdLcBtmRn59u8uHKcuLkKdMzYFxre6eF8zth98KS5iqEnC2JdvtqkpWExBLdDLyiiSjhxBHd2A23EYmSRf5",
  "key2": "3b9K42m4gjbE8QLbcfiob1rxwsrXyvDTFWUUgr5WkBbQ1auDB2kVsDjDbF35Qa3aD1mpgQwH8NZbdM4HotLqQ45c",
  "key3": "4ea16d2xZ6tDqrUKb8C2HFGK5JBBFCvXwrTnnzMidEdKwfTREyq8vHguywcVqQDZoK2ZA6hKwC1uDyqLFPVsSgLZ",
  "key4": "RYEwxvmJPB5nZHCG3h15pebM3bMmXTLNPkE2Kb9gUaLQ6rwG9EpQHybRPyDPAtqqAsFVqLFG9yFxdtqE58nuAyc",
  "key5": "4CgeT6yLb4mzzhNu8oFhzaePrRRxDAi75cqLc5kffyDcr8EXD9HpmxPeJshX6A6nrMP6kHjNurFzZGqmhJnCDVLs",
  "key6": "d4yXA8stAaJzrh1Ky8dd646BQAYg2GVRKvMsY5zJsEokEEA4uoMZ6hA24SR6b9NcnHGRNknnp1NFxthdpUN1Pjx",
  "key7": "4BRkNpAq5P5EUasC1UXxUxYjkQcqWwnSC7fJizZMsViHz51wiBUpJbJhynxUn8g3B2HHXTDJktx2iubUmXVvYbQf",
  "key8": "29nf71jw7epjKkpx48q63SL4gKrrZXvyyT7yjZZiPc1hgbb6PnkHHdpu2H7Zuc48iG6wD6GNs5Kh5JxFLhZYZtUT",
  "key9": "66RVjJrxyeCXSEUSpZNg5S8WKFpU8JU666cBuYuLrdV37vUSHdidZgSEc7RHxqqeneTpzAmXSPG5NBXSbTMxJBzD",
  "key10": "52yrJqXiQ5ZmzA2q6iJusjRgbbwfpeZnzEmYKKBw5nGStd2TJKJoCy9L5EftGX7v6kpu45pMxqbAyAe2BHPwoERb",
  "key11": "24Jxt6nKbBt53rt1AxNBjqxS3AzMJoiRbi5iFaGYN2XTMQsMoMTXfh7QjLJgMMuyKhFThia8ZwZy9RKcsKShrEts",
  "key12": "nk4cSWzQA8bu2vze8kwzqk36A8mwKFMVuBTjKzw6FpiyADNshVTvDYiCo1KjcPEAuxmo9E2SwAHU36Ui4a4HQcC",
  "key13": "4n9EWhwuFSCDmqEvvFeQKZrRZ6Ru17dCrbAKqRRDCxQg8RS1B6XBAVrMjwFaSPn9PEgyksK2UHKHkvwQFgixzHHZ",
  "key14": "qQkKHGgFZWL1XJMj9NX6gnj4stQeEdRakKBMef1TGQ4pgqkUVyZrVgjeuto378KXMt5w27f2rjTsAviymH1t12K",
  "key15": "4GiNkuZFqASA6KM1asdH3cpUw8ZKFC9GFwgKhKMYMkVyJvNedQnS3mVeH9SBz12bb9uknTPGKtkjvFjeA9aaNrsx",
  "key16": "5HYJwZykCujyynsFCqjeMLYKgxmxoDW6sZg4oYd6NXe1RfEGtGVjQpzGzUu4JEqpaN6C7hQSCkWbxz4QZncq9CRj",
  "key17": "4AuRREGXZbLBbfCNTzYL68hx48vGXADsX3c9djFqk4CXRgUsM9kDfac9k4xLNF2yXJaTVeyyAddW9LHtiZTJQa6w",
  "key18": "KXP5prydMg3MX88p5QMEtrsu3yUJkGCnfUUxinLpcWcns2GshW9bZj97Y1sfgjAgNLJgRLKrfdUJhocNyB7Po9V",
  "key19": "PSXxCKxsAASHmjtH6oRWH9p8FGWqiSeHv8soMAF4aWRzPscCBZR22qKn41BVHWEHns1UWcr4vQpeJrAgRBGfLDV",
  "key20": "5qnk69C3sW7RpmC4673nE2em2Aq5qqRFs7W3Qe6KCNKMtChER4ihMapSukDwDU4fYEN7eY1xyRpouYQmG7jm3hRH",
  "key21": "5AcGj73njc5rPYvD7zVACv9ReCjMCwfS5zbXkTU29AD5UTCp6oAyRx4sDUj229LojC8qanFKEXxJsT1jt3ppjs4N",
  "key22": "4dWrD7CSm5nF9W6uQJyJkE9AN3YKgweESoGGyXcRABHkWqCMB61HrNPRZh6gJmJQdVNcYgPdumwN4Jj5gEkQx6t9",
  "key23": "3u37o3koqNj8drj4NTJL86twFdUYHqLSEWa2LyKhfkcPsoqv8mVSZnoD3yHPkzCCmPy7iBkfxT4ooHeZLb6Wy6iC",
  "key24": "2q6yDKsfaH3FJ49j6J6ArcxzSLo78HfhnJBQakr85VyFo1LdRQdnEm2n5drbt1tfrZwmraVYyE9hG9mL3NMF9w5u",
  "key25": "2ULBkg93A5ffJ3ZnL6jyc285pmfiHqri6fnx1YyktapWK6Zs24QuTZVk6UEtDs1ndLUcAStrxqeQzHmNCAooansJ",
  "key26": "ZT6h6MCdPBaCBqr8STGGd1FNp7ipjYdeXvQrUn9QDC9JfGi1Gb9pa1AP9JDtePajKy9j8CkjTBzWU5qFb2RWv2z",
  "key27": "3u48xsAA1ptYvxFt4quwZfPn21zH5VZ21abXyMtEgKTApv7yUMkZjf36fioBbYV9JGpWEowuqQG38qaYNkfwT897",
  "key28": "jxqYygvk82HQb5ZBBqqzZzwU6CnsZodGPhdM5tkYHkYiQBNqXVETLh4bQxwdupypf2nAigD6Yu2TyVBXVjzCGx6",
  "key29": "59JhYac64WxFRaFZb4L2cX4FvXpH4G1jFtD2QcKrG75kJhFeLpRoGbEXizo4TT2JU6mEropNpdQEqdLV8TTMGWc9",
  "key30": "3JFJEcDwFU6Ae1fGM9wHEKaNQQZF57zTS2PuL2CybDiY5NgU6sMnAf3rjoq2iadLp1K2QjpQViCijktFVDFLYKMx",
  "key31": "3KDiYtvgR866EJb6n4L6wZA1j3frmFpVVA62b3TXP3uJMfkgDFYSgEmhFmHqyefoYTJXNdNNbv5vVbwyQpq2RArS",
  "key32": "4tiXMRgJFXY4vTfXbDnXacUo1xnLc1SkwvC4hbgkn77tLQuW2ME6GCBPpZwJHcVyt6MdXkauNLMyrPD12XdmQg86",
  "key33": "3enpMbMm25gM2gs8hGcVGjURWFGedZtoQhPeDJyqFemoR3MkhedrcJ82cfpV5WoiuwZhowXN9CAFuRBviKwAQTuj",
  "key34": "4jxsGheE6iYXH5r743iWg6xixLBSGv6Pnqewz8BcXypxD9AG4AcGz5L2FZzdQvGedhiBxnCJkcepuzz543QXKTGy",
  "key35": "4KwTEAxMhmiUDSusJHbQKhWZXxFxYQmhEmSGkdDdJ5Rr7Hz27cesMEzNAHtVyMUBvYpyJ9CokqgfhoEDy3bt2Yyz",
  "key36": "3Mug4WtDQ2rYmSaEhsjF7dNTs14Kxtc92uffYsfh4GpTr2DCu59cdwkGHLJYqvWKPbkqufuKbCobkqmJNpc8WApJ",
  "key37": "2qx4MyaG7ajwyawpCcktrbMVTwP4m52x6Jj3BXibeT8SgfYEyGz8y1PzEXjVhXtEKJUMn5TJHnZ7dXDwRjaCYmvq",
  "key38": "3MQY81pSg5T2WPQAV2Wy87BS7QyzAhWYUGqL9vMkvYW2cW5M7TQd4RhhCKP8H4mWius5MaBUkRvhcEQ1gkGt5PS1",
  "key39": "3R3qSSwEWM8gLRHcMwQePePAg7tHuWp5VC9mZJ6i97E6pQ8xGMzuP8hMCNjYsezY54knLVHctRptHB79X46C6ASi"
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
