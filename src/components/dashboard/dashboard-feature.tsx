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
    "F7FgwhpuzdGbxmpjDWajNiLJZ9tcVJnWryeCFMMd1db79ZWTNEknSmh7XCq7TteNECigzS17Q7JUaBNn52ECyo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WmRozHaX7vmTSEB5rSLd8ZjBL9DovQNJYhGCxPoDVorn8Mq1nq4xLyJUw3twhiWSZSKhzgP9ePKmBfXtZ7uM8Hx",
  "key1": "4pbUstXmTi24c6UgUbaaEui87aGxgjvY5pHtoSSCBzSiW44rnCjN8fzPN5wJzwGTtQo4qC26bXpWAQLSSzBaJmDR",
  "key2": "2wR3SiZLN7C8GN86wSFLYwaUQMf1YMLruFqKcpKd27bsvGCzoun8mtXLWgMwAcZzmeqdq7sHFxRegDb5CUjisks5",
  "key3": "QsZmGsSHMU5rgeHRN9ajfyYnLqWTA5zS6LSCC4VMiAA6brP26spDzHRnqKqE7YLrapxS1VDrLAkFw2XzwoAN4ie",
  "key4": "3LoZ1oJrMyUEN5QJwL1TRX1m5CrHmkEm46HBExd9Sxn1d9MTdiiRqT2XJ6dBv3xgix6U1PynetRa8YgP94c8vAdF",
  "key5": "2TGnUuR5JQXUYDZSAMHBB2MzjgKPQwmPiZNeut4cJqXRf6KQYBZPhpmFiv6pHAoc67UCh3jdSC5bRmPXgyGYQdGN",
  "key6": "273desrrWah3s4jYy1Wy1NoDhZE6o5jp1GPR3Y6KpafGSvrykEzvkuoyPMTgdZ833j8j6PWGzwzAT8YgpxEhKmP6",
  "key7": "2p6ojQfXBAFhuGJuZX5g561hEoR73JvNCtLeM33gBqRne97GusgXZ3ojKq38YVYRwgnLDTSntvUfDpBKpahz4wVv",
  "key8": "ShNYMweabp6idcKYboE6G2sBE5sMpZyrwfdmZWZi5pX6L8Bj5gf8gqNgAMEjmbqhRR7ya8BULLzr7ctsCKpmo5Q",
  "key9": "5ZmM9LxUMmWg5VNAbzn5zeBdtTCSEakYgyMpUHdGAC18wy5s8UvTqABka23VJguUvhjxjmF7PiKofLrLDwiJJfKQ",
  "key10": "5qvPp6vNAibywswAjJZo6Rn13JYEFJsLW6HWcYn8JXTsEL733ERCzsipB1PLfhKWV1kTjYMDFWNYdXgVZ7bfyB2L",
  "key11": "2yhKUfi9Rq7GfibnP1mSqTb2hs3QfhLoxHcuwqp3bFxSDmMDY4YMtVUctcqiif2uVYzjRBiQeaoLRXVrpAT9QzgQ",
  "key12": "m7uRFEHKnY4T9HPbdgdZJZJwhpyHgwdvpm12Stn7KzUQi2YtchBnCNrVDg3dymJhZLdHVZY3aXN3XNtUewn1roU",
  "key13": "2mx38bUC6wRqC8KPSbeR1uguGefNGgWLxeDUq8Twn8qFFchHtSNtRZJHhGZJiTKLuiszaGcWd9cm5W3gYBxoytoB",
  "key14": "3pzQfycRK62GoFbYNQFSsE8p6UyDZ6VjBDPd7ULhCvie8G8t3ncnqFQBwAewtGfS2Ycc34gUKvamyG5uY8xkHR3T",
  "key15": "3ZfmvTjRPHb3T4iQFHnwRjMnXEhu28T3SAqNsCq9hgFJozcFUT8J87kHvhuNw1bfJAnrX4E5ZRBLPJTAXCS5cpQ9",
  "key16": "3AvGRAjFsdyAw6Qsei8DNgpT2hWtQVmkSMYfRziunNAHbUQvp2aQB7dvbYhLu8mgSAEvrAuiYSpWHG8QK3Yj6y6N",
  "key17": "5NsZMj2VQPqCzXeepXFxHFTiJKY11Zkw3MguS9DbdJNoHVX13cbVg4PmP7i7WJe1UPctM4Mqc5FRrzAxLScw9BFG",
  "key18": "5mx7cgZpQhgcnQ93Lw4knfmibm8nFxg97NGaMqG6wqLQmG6U4E9gFPQKX9Mw4yRnwm34xDAjWmBN4Bw6Su7v74CJ",
  "key19": "4K2mwE4iAbEZf55bVdGWsEEg4YEqpza1ZEhyLDgr9rfRf9bsBarK9Q4RPZBMFuFttgekoidWKcf62FagQ5V4zMUT",
  "key20": "3D84U82rR2CFSDDJQPyPuEQLwQdVF1ZdkDFtAvtdp26KDNHhA9Mq4UH8z25gEpnNvebUiagBA51VeGTGf3YyW1qG",
  "key21": "5CNn2X9DCb4ByryqxLrWBPV5md7NmLp6z1QVmPVEmAipuUheDfjQUPS2MZbrTocLcLdJHhpTqdhi2MYSCNBva5Fj",
  "key22": "549o1nGEDzHz3a2m6ireCL3PYtnQ5g19wL6E6HBU35M5xXuSGBM6PUqZVoqvkTQgUiee7v5YJqrq2W5o8mdQnk1Y",
  "key23": "5d7JkrNCcL5MXSU73S4Yw11auzu5yLLKTx42RqPr5cxyAFDS3fePVZm7XMJVRGKm67ckxeMqDvMWVGF9BspaYwuV",
  "key24": "2Ce6S7KiE6KymsXUDRYjgMM42uXvqLFH7VybvN9NBYfcMSQSRdyP7JszHN7brhwa8N8BTUMYzQdrBPm7u4wUPrvK",
  "key25": "5JyG1qVV5p7RSyhg8sX19vKK1tFVqZDDYqAXWJSshqhraLU9KzcgsEUdhe9Rn8kZeqRBnDN15QUBx4gvkpi752q7",
  "key26": "5JVTzFfmCbucb38m5CC16sz4oPbhisHQroQ5S2bd9xpiGrYLbTUdnkZDSNESVz1ZUCuS7YuJ5GwRfewvrGKPMMfy",
  "key27": "3htupF8efBZnCinLFDVSFFLg848Wwf8Q92VPhPJjk5793hP3tvkKiN7HVPKDW5wN5vBLeVwHuWgJepJwT3F8SHYY",
  "key28": "3e3CndazqxSipEWSEBBsVXZRuMDb8zist51H3gBHNaoqtk5dpZKEz1TkUTRDH7ZsyuvKcB5yqQhGUXEW2iUJCS4i",
  "key29": "2jCtqmWtidPXQvHAa6Ly7AANvtVj7GRCsY9r3TtQoBtF7PP3HXUL2rhEyU43JY1JXs6j2vg2Q4US6GruYxvZGrXv",
  "key30": "47vBrUvj4sYtWHSf6aoMTpifxrx7p4MhzXfGnxQVpipmBKzyJKJLCELMdCPwvXY9dHYgK23XE79Lpmf6m9GHDNcx",
  "key31": "Wi3WSj6xZNQBbSMRfmuiP4wTzUABn7Akkh4rRjvG2PrYy47mTrzfpE5paZNPTxomZ9fynMroaUgvxfiuj32ZzYz",
  "key32": "9pwe4eYbXA8ogAhzGk6UAhz24r4zpHEfsVAVJk4vnu14KMnDody53SjFEEwYa3qSCC3yz3wGhmXQ1s3uDjaidgB",
  "key33": "2TEGwNFNkVCZBYKqjtvYk5G6vdvhrVA3X28dhzpmicu9BnUNAKoBFg7SEBG7mH2Wp7p36nwW4i3DGJkof5zktzkA",
  "key34": "5PNKyCcQcYAg3q6KUqoUC5fmroLVbgL39w52qVnPW7HFnaWcWQRXw8c3cJEJRmiUShpS1MftY7E1cXQnQMttTiEQ",
  "key35": "5BTqcP5QHtetg7Bcg8GSt6h6mKsS1jMG8LjyMskKkwqnexbmGGnUTJjPSZcxseVdzxhw1u6r8Dmqm81yefYVD1na",
  "key36": "4SHVpBNfVRSWYE5Rrhf45mrNHT9Thr5o9JW1h2HAtZjdLQirNxcjn1z4oW8RkBa33hbLBafvYoreeP92P3az39cR",
  "key37": "5qJsEAXz6E4oEkzks2hw4iHbKkLUYEdZYZ6T73WkK9unNUR1iY5UdVXStTCEGDDa7xjRHcW8Ln5wQVoLtkkAw487",
  "key38": "3zP2u5sitcTep5vqXrXh9KaiJAZKUF3iC5jAG2eY9RAC7wN7iYkRrU8iSEcyEptRjTxTsLKHHbeE3cmu48VRzWVi",
  "key39": "4ENp1Ryz8u5bsZZYoz4BL8EFsomJ8awNJCiMiU8bb6a8RjojbcAfpUGgS7oSya7P81vt1Dvp5rLf3x5Syo2uzj7M",
  "key40": "2dG9mgUD61T6mr8j2Nw9KgQcMUkqPPgdNKq5MJTNuGp8ABje3ExUjSt7wS3SD5hN2v3nJQjAH8Z6UkHWsCVznEiB",
  "key41": "2RERKtf5hAs3CWFxpu9zXR7mJUKwYasbkEegSLguMAAYDhct538p44pJ31n9JQ3bHWiPQWwk466ZmA8Qowc19M95",
  "key42": "2u8M2SFSCPZyyRN58Z5SgBF1cZxzngzbBhx4gB7RHfqoF2ga23x4Bnym6NG8o1r6aMySZDg7Fj1YkCWiHBZbkbeF",
  "key43": "5QQeHPJMoot2ZAWL4yMk2btiP9jKR8Zp141DBmWFTDWqkt7DNqyEo2hjmQFTSJLyFatYcKRx47SgM83N7vXGWg1T",
  "key44": "UqVRZWb1i4Y6B6NquqekHGgQ4kr5EZ6henP6goh4LJ16Ez4xmFEDqvq6uK7Yw2uV98bNzeqmfGbVeoMrwsitZ74",
  "key45": "5dRi83rgmttSskKeh87TbgUWrZP9G6BFtTLWzjvfzDqXHb6FzezKcYa6mgw65n2dXCjKvRUYDwwSeA7Vaj7g2C8R"
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
