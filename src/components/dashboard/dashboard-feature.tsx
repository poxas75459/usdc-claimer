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
    "2bHBsvqS3h4KA4wESRKK1YUkERE2EzgEniGeEkSi7zem3TK5jmR1cHwYju5EJ36VXDerj7ywqYFo7M3T4eNXjUi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25vYxf7t7R1TDAD558kHeimGJt7LXxy3yWWbHQqTCWQwqaGVMzDztrNPqbwavB97gj3ME5VRhzi9YmAH3XHWHJxP",
  "key1": "4GwrkAtzSAqAoaBzTetsjKvpu8MamZXtWGYHGqQDHzcXnsV3N1cPNBpJ173nzD6N9nKBkgYQywM6st8ZGM2sVmaD",
  "key2": "bN7WL3iGDuTZufqo9YHxGAcqBz6UWpRrv5eSkhne2NY69j3ydR2FcqaGshHgGTsqP2KNouB4Thv2Lr1kCZHSrJB",
  "key3": "3LLqBBVQHY4hG1d7H7SAN3ZJmZgMDpAYpQWNjgxb2om5tyd2V82RU3KBUsG2TFu8gk9JzbhzpbucQKwHVxTQQ89c",
  "key4": "4GHi5GZUNAdkEMcUin3VokThcmrFb67M2EL7Cz79TUHL679ednd3V38jVKwxoXJUFKr78e8kZkKdpANeNiUWWY3a",
  "key5": "4GamSP8pD7iDLvQxq3XEg4ht5nCrdsKr5GyEbZQf2pcLVQCYu1AMW9brurapFbuD6uH8bo3Q3FPTSWcFAxHoFtB3",
  "key6": "3mJeyxum3mSQQEkjwvVAv8zfHYGmzQnwXDTfWEGL5Gcm3agFAhhcwKErCpbFTxEzQp5pELv46hVJK6XDvs82ftyj",
  "key7": "4rDqtargr2Kb9TaQqqZU8qCMMKxWZvatxzmRPBJFEqm6RbEX9N6CTXRNAhAtZoE8ykyWLx5ZgB55C4Yhfg37Azqi",
  "key8": "3yHfEUxjM5mzCZJoRgZvQCuJtPd1DML5yS7LtRa5Q8rtY7cjVVMgN2b997BRoStjhPtMYE7qyhECUWgBnKSkhcqH",
  "key9": "25rs2MsZiS3UnTPhUUoH7VXdp3MMg8WYydDwtoWyrqzDLU3R1k8bWE6unWeMA3nBNwBBVKAQ8HtJZiFfgiChpzmE",
  "key10": "ERUXmAmrsKbLpY5oE28fNDCUvM3fvS3WaSz4dBzvaLhnoDvYoV3SYdnVRP2dKgcN2QYYzu25sEPAR4wXXrXP5v5",
  "key11": "3csw1di5Qzd43j2PQK6GjYhJqW3MhcDRtq9XmhCwHNLPvCT3jxnHfNQwKdg8zjGbXRjJLHWhuFs3vfu6H11mXFPr",
  "key12": "381nJY6hUwKsti1ucZiQVi56LNdZWi9xiDaavHe6zA1Nf8SoALwcG7CaaH5JnQikpANmFkp26bGAaqAzgvVpK3BL",
  "key13": "2LPqT9cbeGbJvKmLJnssktFgoU2Q32UD3UgUABgxrVTVZaEYE2Ckyt4cGzW9fz39UNyCbmxEWNs9XsJ5YG6mtuBs",
  "key14": "4abcxDXTLj9bdx51SzkbKmXdP9qV3L9b2Unza8ZtjBekur9woFWvhRisFNr24a6d5wpQ9neHWSN1CcQfdkpHTsbT",
  "key15": "2ExiNySmmkQ72vZbZczxsKf3ANZijkQWeUUBmcGekAayeFbSccBg9fhD4ixkHBu4HWWB9kL7cdgR91Wmhu9K7UHh",
  "key16": "3xSwLsF9EFQxuYx9rL4J2Wh45HDdevUjHvS88w5bc9eWS6sHqqdyHjLWaYLtvpY7swe8o3XwQEwZoAZdJgevFCw1",
  "key17": "5U6qEe623EZYB4iRB9wjDJQqLZHLFWWD38SZpqCGDyELuPdbL42dkSZL2kYzL5undhRtL91uhXr6475o1YULLHcx",
  "key18": "38qHnr9B89GSTpJbpEyeaP1rhnA6WbHcdmGPkyx19JQmRKwdk2DMpvH7JFWzMP3NcQjgUQyRfR6wBsyaBa746wPM",
  "key19": "3kuBDvasdqY1jEQYnwPmmjoN1tEWdFPd42ATUEa1mvD494LhowRZxWCPwMMv6xpPaV8CAjsVcDR166JPhqmBZYTk",
  "key20": "4fPfULEWmSXT1BiBXC1nZGsG81ZqaVgGVvhNUceUb9QiE56TccLLYhJNHbjZ6FAeoghtuLCuoA491p5S14hxoPzu",
  "key21": "2DtULC9yJ28Pzj92MrvTLGut3knPtfNHpCCe3JVYPDp6zmfLATXGYkfyCGNDw4i9CmjFY2u97PjoJVupicuRQ1FA",
  "key22": "2EKMDUbc842VEDbrg2FzxWYyeswk3Koh4nU4Fr6yafBFexB1cACNpvSR5rNv9rZiDdi17iArhgo9QgirywL97ciZ",
  "key23": "Xt4bbKUF3PojZvXBG9VipxR9NGhzwLTZYFgtVusfaVevoo8yhQKmLak36AhxPd67hiXW8PqJxUWEtsEkVcRRfqZ",
  "key24": "3v89wBTF5o4LKjhZ2jKV317Hq5rEJjQqX7WYanV8rpwhNDskfaMB6tskhdH3bbJW2UXKwsKUyKvZQidq2FdCWXiK",
  "key25": "5UwBq1CwMRmdigHwSX3CHJKpeeYz1bUUHbsskt1xryB12v1mtB1jegyvB9HKoBvXSAMN5Jo1dycHijazNgn3EmsE",
  "key26": "3iPFEsJydHm4mqWiDntEADBfUtTd3gA1D8Q1ZVYmvB21LDvACnGb4k2WGrnHV7obHMAp9rm9kH4BGjxdGULkYyHi",
  "key27": "4k7rCHqEUme7pvp6rYhEZUTETJHf4atfufPtaF599pjvKVyce34d1V6SvwpqZHr7gdMTdCAkE2tuU7gT8KXurSzA",
  "key28": "4aFJMocUYnmLxYzoXedp9aQWcpNhnCDSuwzaKUq7E28chafziCi9hCMgZNJD44qP3HXJMdHrtRiD9jmb2cYPgbgN",
  "key29": "5cgzWJXaemUQoVFwcW6uFkJJhWHxjK6wzZ1qx68Qxew6XpiJ3zykhcsKxhJzAhavYpAy7tA1TPSRySYUBywQdELc",
  "key30": "MCKWpYKLQEbEWJd2kH1bNa8yk4YsUdokL5G533Y1Y7xrnri6AgBBp9FiTRcve17QZhBfzwq2GhPWfSU2HsYZjga",
  "key31": "ycyXascFG4L1t2wmyjsQEKSsEcZvopKfrspj7sM4W5nV4eG2JKS8rDgt1AocnZCYfxSsyoNxV8Bm2hxA6Uwjy7r",
  "key32": "2KYQguvAtEauc36xscFaariYJH9B26xrMooy9aYUvAfP2XJQ312g2zeyyF3pcX6UAEPxNPAtadfvamWc5xZPe9Ge",
  "key33": "59SW2udDLwMNQwHyfL9dVMTKq4QWhFBFbEWyBee4ooCoQSnmkhARqsGurqXjb3RjbwneQr6LuiYUacX7mjK7AyGC",
  "key34": "TsFmfV3uAW9Y4N6DVJCxFuMS3SMejzzNAf9WqgN7ZrGdCJt3cbD5fuNG5eisn4JUH6Rq8xfzFLPpL42e8XE68Ts",
  "key35": "64mnQTVVHp2Xepcs9zdx5RpajMkD6ujtrgn8D34LZsDTzyuHV86u1NHw2wkRgj5sGizmA9K5bbQewkWb3PiVfnP2",
  "key36": "3S6J6Vavtme8tT9eTg7XDrWuHCgfe6dSFANWS1J8ZYHYUTr3fmxp6D5ERKWSvphFrCVkWK8cacCTCzSB8Ch4ZDq2",
  "key37": "3GiyXGokGg8jgV4iSNFGd5Hxm4JeVG1cSz2it86EtfYMkapad7NEciFfqzDtVMWk7Spg63mWgWHAYmdny8kikPe9",
  "key38": "4wvZaF5SQd29VYAxdaAY52iARVuDsrJ7dunvUV1MCfPuWa8ekrU2EpqwVoCdMaure3huYKvgdY2giRWWb8byLJ3F",
  "key39": "3RTLpsyy8PavTWKQh2PJ4hguLp8FCDG1wZEtmjTbqGTEkTCiLcpGbEwPbiVaHFkc5bAb8fXG7m7aYTy6Pgu2fLt2",
  "key40": "4mr5hnfug1J2agosBVRmR7Z12ohNy7tkfoKYg39KzQaQZpXYamc3DTi7mjYg1YbUU8BNtAysr7SsXpe6dkDpgdYw",
  "key41": "5Sbyder1jvky55fmHQovshWZdoeAyLJ4heiUzcbPyTEQ9F3SBuWyiFDonZoK5NKVyUAhVJnN8uFzwvktatPhabWp"
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
