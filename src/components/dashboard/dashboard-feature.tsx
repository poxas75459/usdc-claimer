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
    "45Bc4LbfFSooSFAYo1N2wjLLMebzp47wqWfCDgRGmy9vBqkxrFNMdqDyQzeuph7ap6SxnjC1esG8Cw8ojHYK3cae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jwNa4qEUoYixaXkaCx93s7f1mmTN9ASVUEdAfYiU2V3xk8mas67H4oWNPNrQvx5JpR7HQScmvtQdpxcjcMBupir",
  "key1": "HFSj9JKXejuFMo3MXJ48wYzKe2HhahJA5xXQAC9U1r3Cs3Bhq2FhcvrNWbaXGq277Kc1B4LmsYkmyNg7EoEvWHG",
  "key2": "4i8s5kFE8Rf7XSNXQj3y3bCVpYYQqX2BjNhWSyWzzoAriu1vbvqNPgwwUpnUcLHhRVVVUFdyfTGLJXv7uY7hQHpB",
  "key3": "36189Uy9PZDbj8nCKod7YdSZdwvTWEkGUSXmydnb3sad8kHbSs2Kf72J8m9DvDrsAxrArDvdDemR6hoxtTfpmiu4",
  "key4": "2sx3He7zZasF2iZ3yLEnB52YBP4hyLj447dJ6Pyxo25ThkhepUQz2uuQVsLnMjEpSMZCRfZRzw7xHiTCq4QhNaAT",
  "key5": "5Lr5UUVUW2pZcGNb7m7Ydc7iuez9TSeGmn62HgLaT6XAqJTCQvYAUAmg8d7FnjHUAqwLeqgNEbji5qxP4JMSRoFu",
  "key6": "Y5Kvokvcfpksyt7LyWwq3HHaSEXgc98hxhWgdAQXhzNJvoAGNmJJfbWCC9K4b5CQ8r3bvN6MZDpC1qQ2PJRCavi",
  "key7": "3FJBXgmDqUfz9NsnexDDXnVJpY58MzgZYbkWS9DYKceaaG4xQjgiWY2qMS4NYg2ePgvvpREFvvNXC8WEihjgPbAp",
  "key8": "4jhUTKdQrovmjHf6iWSQLS91MJtwWzdjVLVFfVSzyXaydAZAnzXhT34oFi4UefVZfRLT6NWjyL9SQvvgvDuD5NtN",
  "key9": "zcVP4Cvsci6jDRcCxTJfg8dySshP6L2K3f5gSqUWNYsoE6YkK3jrJPopSv6jVnugH4rskHe9Ev6Cph583tXPnzQ",
  "key10": "55oCLS4eNWxU9FpMv3byCAf52VyuwYKrvx2iBXfR8Ddd9cSfuhYuA8ihhb7bFqMwXJ8nDcgRT4MSKftzAdKPSvNE",
  "key11": "4QKz7GhbiLwmxDZ5NZdm7axeYguKF2122y9tAjqy1qBqQhpmdMeq5X4aj9J39ysLx5ANuEX1QgW2guQht8V9rrCD",
  "key12": "2JVpao2QWNpwFwTmLH8emY84jV12VWbDUedeuNTvw7Dv6kb76CSZMZoiq2KrFqJMwJ1yZF9umi8GGXtM1aHhCxid",
  "key13": "zEGr6FRzjrZFoLrHRZbERMfumC5M615yvWcU43tWssYwUt2G6BEeM3ELye37v5EiXg6hBMAZw2S463dH5uCjAVm",
  "key14": "7QdjhxMRKsy54t9HyUBiTxg1H3Co7DGJTmjeys8XZThG2krvQrW3WmKxcnC6eTRowoMdhrFJPqc8RaLHWXYTrGa",
  "key15": "5QZtS3uH2waSU8edhuJ4Cpj3DsJiRYJpjJDLqrT6UUCq32CbwFhcn8fLuVA2ZhfgpC8oso4of83VYDgrL5YB2Dpa",
  "key16": "5h4di6ALxMyq6ZJwNAnCGEAgHoWraQ6nSkTwFPJF12Hc3J9CcUsu95NbQLwyLdLW2tpVsjYVJaZzhKcwE7UvTk1w",
  "key17": "3K37BqFDJ4hipZRUGfjSBa5mmiiXkg6sGseCdMFoCEUVhFCQj3RU4GFzZCYe8HpQUQ14RcFWBEwGUke5xM7XFPns",
  "key18": "56rEhGjd5rrghhhkb4ThFnU7ta9QgmiPpFvafitDRzarUwERBEHEXsDjLeYv4yrpp7Qr3uZhNp527b6eHHxHj3Kh",
  "key19": "3uXmRHkWqKZKmgoBAK4qf4N1chcvo22gvLBT5xs5biqwaJiXqbDrkNwCmBmpSRTAK99QG6sLrkzzqiDYGtD3pPt7",
  "key20": "5WNGfzJioAv66Tu3KVd7wVQxjw2kmu5vv6UCZtuzrx1PhvzbkiUdjX9DzaXLkF16umHiNH7nFKwK9SiKWJhDcfBj",
  "key21": "2bMw5YbqPWKDi37JqoBYEuGzoSviZZ97ZcABJwXaQS7VDc8iMGpD1cfxtcoBRosXWetdjDuSg9LPuFQSKghTPjTM",
  "key22": "617BYoKGswJnEXZ95U6BGwk9ijNVtJz2BAAUB5LLRr7Qm5UUFAUStiJ2tcDmBmv8KNtyKHJG2ELkfL5x6rSDCezu",
  "key23": "35kYRdJxjSrBdZsSqSR5cwA2S7joPZ3B24jZy9iiJsU5AAPhFkaRpn7rAsaG9aHN9icMxQrnhUGCUWjhAeJmLAL5",
  "key24": "46jHAoHQ5enEsQ9JneABhRVxCsY7dWTKD5BzPvvAXFCTL6cUPDuszfbAcYY4kRM3Wq1C5jDVWV7nxJ2ZYTNc6vg",
  "key25": "sSV5GS2uuZadfYogCuKY3yRBvqiW3ARfrrQfcREfubKWyQAfCcGhhVCVApJHERdYEhCxtx341cswtcbe6GTVsjo",
  "key26": "rohNfDaz5eNMYY8QbFN9jdi6WowdbMXCrGapXFGWoqufdTFBBR8weDYDNPg8xuQnrHgJji4NSmrrCpAZwocVCWm",
  "key27": "EP9gnNTm4uZwLpGPULEdAzmB1hPjXaVKfoxxqTZehB5hYrdPpiuCrHNLuvabz4btywWz87BPD1XdHq79pFuU34n",
  "key28": "4wfHTez1p6CLVExfyWVZhv6VkAqayyybBqWA2qnTsKDFt7kXEU1tiphYgbQJE47Sr7jbPUG8AzqR2c9mN45vRwho",
  "key29": "37Pv8f1DBQLG5jZ9xemP2kS38eb2QjHjXJRY4Mnqo15h6q3NkxZN3XSArAgqt1hoFv7LeTgpK8r3BS8xosnBJwAA",
  "key30": "2iWUCZhP6JUzyG93wJ75Fyxg7mcJXhwpkuwbdSoMAyC5E7VohxtdYvCRJ5quDYPKTTLjGpoQqj9FFarEgED3zzZg",
  "key31": "5r6KpoGkKNxrJwh9PfFVLHYRCpE7KYpwiJpghr5L3tnExnTJX2epCrBgSBaPzqRumemwAhz5uzrNdFFyobLuBA9Q",
  "key32": "4U6EA1uD6qhk6ogauvEYtYpbgrdGFx7UFozavxjLfYu2VNVbHW9WAtxjpHGst48GZsfo9CAP9bhCgpJMonEPQR1n",
  "key33": "hhEk9tSVraEcB9YmD2NR2o7Ps7LL97Ca2xFsBqvsbFENz5KgH1ikggCsrroSCsyhxPdikbK4J8MCsD8b2YeeyTG",
  "key34": "2T1gb4CxFArG1pCXCnhfR2L3njHwxjKveTYcDvaz84axLAd1gVSsLYYRkdHEnLb92kSwM5nSXU8ShwuWHTFHNLyk",
  "key35": "3gP4jqDdwttBYzboNdcZV9PfgeWg6pDuCJJ2TAJPbpyhZnDGXnEdJRVtuw6X7v8dJDfdVQBx3bJfWVmhrP3SHYbx",
  "key36": "46yRiaPz1nqny5tuqLK3i6p2ZJ3RmWdQSMc8fGo3uKR4oj7xvZjfgQotLMDWjUgrP7DiNKsc28xmKquCgyaqRoK4",
  "key37": "222HhvYFnRbo4yYZnQ4GtGLJsb7ujWMQysfuNazsouG1GTm2HL5g9Tenv8zxfWxv6AV6AtycqtpcFK3AFZDJeB3L",
  "key38": "5Qk2xwd9V1HbPXGA3JMJXFNosfyuWr8x3mqD4JEX4SQ5ofXEPzjnFiquFxzZfzQnM6YtEjxM52jMn6Dn9n53pCvi",
  "key39": "2NfdfVHqLE13vWrHvzPUPPmZHS8gvCf6KvcfiYYDokxgprNyjzNxnmUMVhgERkWVm8PrTcrnCgivXFx1Ffdidsm4",
  "key40": "2AfiSEcT18k9dg4Hw5CcV4zDbZCQNPj7rMfRvRb3PU2qDK1HVFpEydw72NbbVEpSPprtj8pFzAUHU9cTrL8aAofJ",
  "key41": "4VAJ59Ka42mLWuTxnGb9Spjb4hYnzGRs55aguwAY11XczTBfa7YXGiiVZPJPjZ7tF1Wm8CJrUAdomyP4UKKd5PKm",
  "key42": "2vczuRcFKKUD2qPUiwL2emRd8pPBpBMH3WP3oef4dMc8LKrveryheivdFW1iUgkjTJQGdqajwDZRELMZWgApqGrK",
  "key43": "558KeZoCnmqqLPEtLupXQ6dYhhixinCHibZUciR5E2wiweNijRe9nSkzWZ4gvC2dv3j9i5k5zjz7pvCib2VTaE1K"
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
