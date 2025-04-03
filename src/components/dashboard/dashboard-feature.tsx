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
    "4FQDkt4a24a9xcDXN6NZHz2YGRQvaArFh9qM9tm2YQkBMpFKaLLDCEdjCX2J8oQeuFBwetYMBbLzK37FGvr6atuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z5jupKDcFXwXHcQuf3ZSH8E9Pcj9wNRFiTqo5ofp4RrSp3FuKEsy9kUmFTnDgjjRSMeq5vCMHm3wtZJGx1MXKBW",
  "key1": "agdxieU1ixb4rMpCfUMHYgDGCGxMS6VZJfyeX9Y6mkyPghoaZTuDQ6TFALTdGe58z42dyp2nbHuiStaRPTFpEi9",
  "key2": "4tv8UXBw6RpfKyaK4aC6SFRS5FpTPTpSxDmm2Vvo6GtygwNPXJD7RHNMQAvZzWXkWaYLBEXaFWHmwrr764qVXfWq",
  "key3": "3pcQzYs9fNxUF7d4tEvk74c2fpLyRxJmCmg8qQdpYMWMstuDv5mGxnSFD2kogaDH5QfrZfJJREBgPzG4Zy4ADQ13",
  "key4": "3d9uWcJDeTUV3z83NFZsNiuc4Vx21FivCzruT95L1fYo32hFKw7f5nTkw3uqMyrphBVBUAWSsNiTpJuftcNvoDUb",
  "key5": "4v1tuLAz6XuGRk49vH3qsSHrxKZ8NCBH5pcWYS49jnrQqxwyAKBZuykm2X5Q2pBvvCpTDYtSEmi76QaatXLaFwwY",
  "key6": "3dHoVjEPNRrzxPALEkSbm4sZKWLyKvVof6YKXsnmZ5Y1fWcuzZR46WbJCSfJYG2CcpRfshSeifVrc2bmGbEgaRN3",
  "key7": "2ciCcw14PTW2k1xP4kudfxTtZkeAveeoAxrpg3hhg1HQ7AHQqpnDC2hQXHCy9wHSZDx6wEkC1epUj4zu6HPsYQRp",
  "key8": "54y7ymU1Jyr4kpnhhXRLj2ga3F2RvVL6CMxf3dQP1qysLX4YPGknQLQCL9LztfqheuAdHo5xjeF7vauRh4ymJu6P",
  "key9": "2GVpSr42UqJAJ7CeRzCYETjLJfKz66das9T8wgpcczRHvRiNbZpSmysDzdTo8qWykXqoYFbu1LiQiEh4YKdx2otK",
  "key10": "3WGAYeLj1MjsXMqqfb6YoQjccT4PbTJajsiAoUiAvhGLE1WEjP5pmNa1GZiTxA9kkFQ2DCyta8RY3Jrp1wytGFgP",
  "key11": "2cdyTQ2txsMQkXmaXcQSfnrGxMPVATvMn6AP2iAxdRHJKNVTYwkC2REwYSsiATLSMp8F6oXfzRynvfcJZpu3wutk",
  "key12": "5zWKKTDr5JE7mPDp6yrBuwu6F8hHRyYb1XrB1Bx4PVCP3F1udnbm1NYq1Mn5QJpWxCVJaMzhxQSLirVsbqTcfP4q",
  "key13": "wp2fPb4PVAqJx2ABuLqx3zWAMHh6fwyi6gZPWKBp354H2NeZYvLqPSfXAiYWipGdvT2YYVxPkucTmEKVHVFhKs3",
  "key14": "3CMqMUaCFw8XSeRWMqTHJWYJoKsmmccp5UYggaPuoBzpZAgWesYuWNhf8e6zccgxrP7q7RpYNmWsWSdpcWd74C7n",
  "key15": "28UteAbTTwzi2yJFuPfvMMH8crrEswTrkArGt64QXRnfLN49GDv4xp9RCJDC6E98T6YBHvr733ZLoQDus4WESy9L",
  "key16": "5r64kGRNkbXhVpfexEUZ7V8i8CjCv1Qu8HwyhuDLNEyGhjFxnmzRajxqLkYN15iYU6r6UWicP1QxG54xLSSE8eAx",
  "key17": "5GVAgfkooXrD5h5fBn2qceKzuf1JifRATn83BtFu5Zq4L92u9LFBRJggBCXvzp5M5hboctFRmQf1SkYhBJ77NeHj",
  "key18": "2aZCucSbhAi16eZchcqAbjBswV7LgdsYrCaJGUCVMp4iHBrLTV9xtwLwJhjEGnJqBgdviaBpomdkRbHf9r1pb4Dm",
  "key19": "57ruhJCXfKqsnuPzGKEDTUXgZkRBYuzB9jMNKFu7ocxdHWFFQBZcWXLeLxTTw2BsUogak1iC6fjgTPCBoxqaexqK",
  "key20": "W39iG5xckX2Qd8Xax6uYH1dWWT8VqeXEEH9UMbdrHiQUVDWTts6sBHH69akNq6xZ69EVg1uxD85b2TvTW6RzShc",
  "key21": "5JK1pHVmeucDBJ6391B5A8wr1V9mA3mzJ1PM2e6mzF84VAPwsHV9Ap36GD2PwN48eBv2eBB5gwxYZbrQ7Ho7L1xk",
  "key22": "5Tno825D1d2LYQMtpL9Yx4n6ygfbgdv2jNbANdNpUMXD5DEszxphMuK1kscJhPYSVnYQuEx9AnYWRdpxsNHZfMr8",
  "key23": "2WBGdYFUjGpemThQxQ6bbuFU9F8yv1q4VeEQqo8gmUnXdwibUWhy5XTQfSmnCzuiNvHwEMsQQEk9gfSmoeQoWNy2",
  "key24": "NoUa4gFwbeqYGNoTTe4HZi1ZtizYrzZtr9PmgbVuJiWL4PoSwzMr7LokqitSiWvzoQC1UvhFqE123Yi3USt9wuR",
  "key25": "Anb9UkZMDsbNrv4uUfzYtF7tqtC35BxveCngC4fn7CPzRRKeGdrfGZFKARw2uLYp7rNCVJX4CvB62W43HWBsokB",
  "key26": "4T47BhGPK7EAcHaESjQvV4JRHM69aQ5mNJP1d8K5ovqcQLbMdKz1wQFafcTNcHsMgoeCAZqZVyPeZcNBnrgPNyUW",
  "key27": "3xiyNHfqcKACLCkaiuUwfZKqifuS9KxdSeQjR54YuNsJnvJtPrkzMsL6Gb5panySdyRcmmUrjVNuLo1e9MhtNBMM",
  "key28": "KKEnM9tdgWT47nTdSj3MKVRgdhnPJ7F5T9ZKgPHHGp8Ai38P8H6agWstsDDZ8Fvxa2vSxvPK6YsxHzH7GUd3EJ5",
  "key29": "4sUgAjc58o6jtnd7bWeEok6Lqv93D5e5dcwSNvVQ21pqP9GAox12kF9mB2jTLMTow4qQDfFqtAVRBBiDoPNAUKpe",
  "key30": "2TopD4sZxeLyhtuj1uWMsPKzmuUHMtwrv5hJB5BztVckX62rK32xUbMkUDRYyQeCGj2PwWt6bQVxEaNN9ek9H2N2",
  "key31": "2ioETPBhZFM4x7yJfggGRLCj6uEFG9R7v84KcVbfz3MbLzi6R5WNYkgGwdTnF94Wi7cRio9Ck2wx7Vve93k88dJ6",
  "key32": "5HKwudSSRNWVk2feXZfKscRkGdq1o3RY4zJwUbWpLp9GtXxQQwundrSRQLYtxzKP4SeK2QaiFHRa3id6oTp8YNnA",
  "key33": "4oE84E7LqGcRjPuf9Dtqp4wvrTWLKjhmksxZ5Moss5Te1gcK9913mDCQMFwUghVoF3de4QLm6PmdyMxvVMxeQA3z",
  "key34": "536Y8YqcxdxkGbBRyDqiWFUWhfb6QNG7QsG1LihcVURzjpUBG277ZRUPMtbKfPU3hSNH3ddoF74d5gg4FJJcBCby",
  "key35": "5pSXi2B4GN6MVMWTW4xa17eqf6KucYWiKVFdzhxWhEeug4QBPFzGaYEJQMhLx6WWMfVb4icHy3cQ7XCe1vreiCAs",
  "key36": "4ojGvVDtwLHNrcPoprG4vECLT6ZLyzS3iRmajXK5GnyPmKLEqxoRWbQ2MNZ7LSpm6erbYUJ73zHkPQk2YErHTBDU",
  "key37": "3aKPorNxh6hJXya2U66fMfPkkMzZYtdwDo5qXMxQUfgogqE5t9v7Mrv5BNmKoPWPBxZp1YLyFdRCcZcKUmEp2VWm",
  "key38": "4kDAqgQFzPA7vWfEf2EK9ni6B9iYpNFQysjNFg4KHCM1Vad29XLgQgf5L2zYpziAwMS29mvg3otEC7oBDVjTi3uV",
  "key39": "2iyyWzcr5CLsohGVPCd8dioKkGUAHJuoZYmhCSnmgNkwUpEzp5S54kN2b4EPpcAbY9PQjXtjw8zGgCD3ggxo75pg",
  "key40": "3w3ZkLCk9bmKiSsHpwUpbXRpDhzprcWx66KbNv368p6WMRSgJJimj86ozwM4aGFG8x252EjafkNoTv2P8sRVhGY1",
  "key41": "4mjzNkHaQCcH8ZvHCPUjbrBKq2Lav2bAbN4jPCdjEweypwzoQxkQJXCD49ASnjGk15FUKPFbfhhx87sdBhSf6qnu",
  "key42": "3xp1RVA2Z1o4SoGS5XcVUHKUnBtAZeauBqShMEeLieaCx8H9P6W8qp2Akx1Yvhbb7iB729n9Ap3XNAwGF1w1bkkW"
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
