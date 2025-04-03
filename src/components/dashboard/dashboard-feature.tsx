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
    "295Y5QkpFbhpiMByc3qkJfKXggz5e84Lja37HjsaA1iD2vqUseSPeh8DoaCpf21b5XobkqxnSjeZYpJtF2SeteTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iuyaHv6EnxY5qYu9jv3fhrs4ycCeecURjct87VhZcxVM2eBfp4T1TbVdYTgZNxPR8Db1KATxFKd7mmBB9g2cYXG",
  "key1": "nyLSAQ3q629cHr7wp5fVf2eHcT5o6pKu3P2jkkBSnjgNTSarDUwiG933hBn9L1TGhGNFAvfEYUb3aMRkk6wexBW",
  "key2": "5upicuY34K9o9fveGBzBv3aGi7ggfrRByohwMnf19oaCYQZ4Y8HiDW9iXf2RJ5PPrdR9Pp4fYpCZKpKBvK5JrD1H",
  "key3": "3Btzpjzb2U1cm1WeP3dqmmuzdbmc6p1eXZRwjNCBERUYwu93hv24eQePR5i9aSbKs71puPQk244R5tRzY5w6uN9o",
  "key4": "dvLwifFb8is4q3J85s2ACsKsdbhbbb7kVhhxBQiubTB7MmkMVfpGDoXy2L1EQ3nm34vkrUB2EF35PuUaP36DikS",
  "key5": "2CLWZxQJeMZDzNYsHNqdux6ZCg6pzftUZoSDshnrqe3X4v2vHZm4DXuj2E31JTfG7oUPfyE2RbVh4wS9QSjMLV2M",
  "key6": "4W1GFhjsyBxg5YJTFZhipDzKab9JF4fz932rAHL2V3EejxNTv6euvTnM7T3vC3q96XLcAtayhi59U7PRpgvX2h6t",
  "key7": "3nSTYxjUriSV78hcii5ZPraDhZXDxxsc18a2DVnUmhYcpaUjUvhBRVhzgNghd76fBqcpwNQtT3pVEC6sRd6JMgHq",
  "key8": "3PWVcqk2CP6Sg7tCRnfsqUHdfJEaA1bBXqtYdxeDNFa41ncivHmcNhG1KiFMkBYryGQCqL1YuxvnZsyPFThMtKdK",
  "key9": "4nPGzduPq6CbhMzsjXP5RQQLgRNZqjBKKHQ4WgAHmFstfzr26Lt2ye8mJ8vEq64dq6GASdfPRvp6MBYdMZTRvoZx",
  "key10": "3P5ccURUEcmxj4GrRz6StfoBuVX6NYsK78JzUQjQXnJMnq5a5B3Yr5nSRGP2u99D9sFSQ9LzxaabWDRCnbyUg5FD",
  "key11": "58wgx3Mfz3uBZ9fvNiEriLBwK7qtx6yCvALi9qbDBUri7G3Z1RQfs4eGz3VsecLM5MzQ8CRjDdjrt82qmorz35Aj",
  "key12": "3NoV6wWHMggxBDqnK2ztsEXa1HriWcKiNhd41YZhbtBpLaaZe7RkQ6UiqHGCq6aCqeLEPQJqeE1KUy3CfaVhVgdj",
  "key13": "HnyWin6xFULCfgVHJRAKdpNV9LbxmHA5qJ2UhSRuvR3eknRjPyQe15cGc9RX5TzS1mok7whb8NYDcMdgEUxEykE",
  "key14": "4n5ZvwtkEnpBWdKrsvw3xQrCnZxdzTpqnxAc2nMyVXrpxgcCoyBa29avSHG7FsWV1CcN2auqD4PS59r1Pi5rfvnC",
  "key15": "JnSKkLHEbZuAWBMSxDaZqs2MfMjtQZeCjjLvfS8ET3PVSqSQv6A11cN6Y7u8rjRB7KZJdDRcDFkBG8SwKGmPj48",
  "key16": "1EdKZ3eFcdVuLnv6Z7J1SzvRjFX6pjJSX6xQkTX2PrfsQvDD1qtzjftc4bVbYfs2ARsshWrfaYYV9prqsjNxDee",
  "key17": "4MQ922rhC6fDyrLcbBnGQS4ubVisaDAi3HMst47XnnZDZSArJZXhT2gpw3WdGj3CNPHz2unWDkqs1dQNCPqPozcf",
  "key18": "VzG4Z6jCLJKib8Q9wkQjTf8WbgamhMPBXY4TrrmWNwk4JYctTEBuAm7iUjFdcSLR5wVa2Lf8LU9PB7es3QQzyPd",
  "key19": "5AxzMWtdcLTG7JYXwpvJHcRKmPVbipCnAEvnbfHCRjvAjGijBm2rRUUh2pE5K76W623d4XUyqAUetUgFKcKcUnQt",
  "key20": "5Sk27eodrVj3hBweQuUqhqYLfabFoA6EgjMDwQa8ehzPc9UzGwHFPr1V1wYdajy9JUg8VNAEs17NMFLjiv2ByUQY",
  "key21": "5Gnfq6XmjUQhZ45eMAK6AjJ8px9medG2fCZ7j53rSjDM1TadNuG6JmW4sD36xJVFyf8BSUgbQur9wJByRMu9bP9K",
  "key22": "31q7pyY795GdR4jF9gJpEg4ghXqAFBirczHvrsK1QcizhL8koztiHGfsrakeoCwXbM6PFoEUkxnZsC7gnM1Bgwy9",
  "key23": "KUCzc9NJPJCs9NHn9yUmZNxaRxqRs6HJLBSD2UNnRiBpGuE1YoASuEpKVFkVfm68NCX6gU8wonNmSx48ojFG3us",
  "key24": "5Zb1E8PR8DDsgkyJKkNV7q5zWLMcGXnAVLMCFtL3yhzp2jTBoQnLNYP3RTpfijButnVcbRtyjcj86HvkraHPKrsx",
  "key25": "4hYj3moLC4vEZmXjhUKFgXQSuf3NcMaJnq7MiupnJqwxfcjzeNM6Mv4uYC5d7f5BejhbwhJMtfpVCw6QuYYQJjJV",
  "key26": "64d5taUWeWF69FpS1TLnQvVNE84DL75yTQfDQoY1GJG5gy55d1VzTj5Bqw3tKYcbP4jjT4MvqVi5DFYczJjMCQmX",
  "key27": "22DcrWThx7SSgUtJRWhrQyL1uCznnc9emcFsnEh55cLY6H2GTzJYtYifkHv4FoAQvdLjQLMxukKNYEkn1eEE1Dfy",
  "key28": "4unifZkeqgkGu28PV2KK6Ef2sbWBwfmXJhzBh3wsTLQe7KHZYqJj1Rybo8DC93VSkEu2vKGkDCgXSpbXFyM8Ntzf",
  "key29": "dEadPrZkCcSRJn2WVvD7qXvGN21UshU5AQqjiCFk6zJJKMFq2s44E9RDKsie7nibQVSU7kY1gDLH2HcSWeW1cY5",
  "key30": "it9sXUkV6gbdkbrnbCyhkV58jnyDt7vKYHXbvAVNJ1DLyYAFJBRLGMbpHNapQWVoEiwMGskeH2BWRzwDLMGjsW2",
  "key31": "dqcqVHKv8whCdgrQeKwj8h6EHZykXBGfB2Z8X45adqAJyYyoPP979AN7RG1YJ8iraH8rntWdtY99uboa6SVTDR9",
  "key32": "WznfZ5syDAGjv25vgSbJEmTbtnXTp2KyF2EcT3swsEhuZSsnzu2CUZsV9DU5w6cwxx5Jea9WCXatUCqv7Mroxe2",
  "key33": "4Q5cuWHAATs1KBPgiAktBFbaLQ4Es5TvoG5tJzkZVYq9tJg9zv8K89WHDonJ96crhC77R93LARxYWxSDxu1cDpM1",
  "key34": "5oNxHxgQQPBRAXb1v9XFokYvxzbWsC7qgzT4cSUw3TrhmsL71WYNHdNnQQ36iD58u4jeoaKwUdwv1QKqVnRhpAMJ",
  "key35": "3GumXfKLYSX2A7SbqWqxtyWM4LZnZgiFutW9s33ZXmHgRfQfAZbs6Du3gPfYSfusbrpaexsfNujukojmWbzSyv4M",
  "key36": "2B6zL6RnpJUM4yt6gmyHZWu5UGBbUC8Y6qvkNPeFyEgvaH4NUqPXkRff9HjAaJjGsehG5wTWV7BUoAXbH6YrqWVd",
  "key37": "4YPTzXZuC4JcAUvrt7E9uYwjEBDbqemZHCNHbS1yZaxn7aHEU7xJUEfs9Vf7f7ta7yrHegraCqbytjtjYh7NWSui",
  "key38": "2K7L9fRWVexN8UeotRmjFLXQxU1empmAErGCvjiSSpeQZm9DaWeRT7xFwRDvFxFXgxmBfxN3VqZi1V7DZTM6Nrwq",
  "key39": "64RaVzaARz8gjqk6gubsbNTU8WFCRsrH2q191zreUxggxdnHsH9ePCJ4YGypPLJhkBvoeAQVpDFSj1fg5eQw9tjV"
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
