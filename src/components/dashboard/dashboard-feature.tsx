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
    "2bWGvMwg5o7g99Sf2Eato58Bg6jBxmgQQxEgbq9aV3AGZLSNtFFNmDQMWmmhwCYSQPZTNLk4JRxKXDx1MaWmgP9b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eGn2HYo5AQqEFi7rCZkUmcPoMV7ZBkjpBRS4s9drzLaeRuwBAkjxQZ46tAwC93cCqFDGz8kR5AMUTt47wjQExJU",
  "key1": "658cwxUZmPzWbzvoUALd3ERY6AWgBjVg5y1C2guBWeNZWiuzwypyzg1bzYtkgHqeRqF5xaU15z38gYmLejjwstFP",
  "key2": "3eLJH4XJoZkVSJvakHNzq1EGRpK6X3mDJBphfZ1PjUtpy7tbUoYeZRzc3SJQndTLBVEig2RTAA2BL1G5HuCc1b8W",
  "key3": "3vyktVrwvzc7VU5PZ2DF3xEvDYdCUxGhtRpfdx1K8M6GWgqnqeN2KoMc57g78fHMbpwLdiZKeHW8DrPuLdojfrvo",
  "key4": "2iAYh4KAXLFM7D4cdzvNErK1YtBheDUkvds6jsFR8B5FUakcmva2AEU1oC8LersmsYmZkYCL4krapFSei5FWPgQq",
  "key5": "RrJoWj6murwAPVJ6ZJXGfnNVBq9mujjUeGT1vPUb5SzUrErrTFs8ZNHxP2aLCZBBnVme1AegXp8qwkUzbEDXRnN",
  "key6": "51oyLajzH8JcuXTJRWXLE9cC7Fs13pBezXabkVQsGP2DPpTwd3BvzATtYQi3KMnNbWuwUmT3fmkP95nPWMKnRTFV",
  "key7": "47AKPr3VzmtGcR4829DbhpgbsH3AzvPEwmQPvpYg8o1DHmhadzZGRwFs5KXwM88xHRJuVkL6eNAtm33rXWv4N359",
  "key8": "XFZio58fp2wwnTwxS6hdA5uA4DQvwYq6V3XHh8JTw5nwR8TttCLbxEzB4z5vMsrAY5pwqeFP5ctHoxuLhskkBVV",
  "key9": "2csbAAnfBzFz4ZunYd6to7U9Rw8iWGvPVsbqC3tWfaW7MA3zFwFK1vaNCms8awWpHYrLG3mybBanmYzRbGAjFUem",
  "key10": "51MDAh3eUYS7zBLaYUbAcSs3y6UdYPvk9X6iatGHEMZMBHL6gFewAkbV2WQWvPR5kyw5MhaMD58mJJnPPCMhibqd",
  "key11": "48UnNpvv6n3kHdfiGwjoord6CdpG52iuSN6CgzqKBFN1NJ6CmkZfGn2vDsdtcy568Ei8SWdjYq1PH7tSMhb2SYJL",
  "key12": "5w7Q7b5aPU5sfEdG5ffz7KpkAk28YDY6xbiyar1vpEkuQYzFDgwu5oRDBkedmhA7BmjcHiPk3wkf2mgAUwwKGgrn",
  "key13": "22nMcaG3vhZ8Ttgx7FsVA9TkWj1L85PfUeiwp4moiXYtucXefy9yBrfAsLuJ1mvK6F8GLuC8gRYio2uuVDddxUnJ",
  "key14": "2gZ9NQG4Cc6QbCe1k3P4DyWaL39wLewWWyBnRhJtfFXzgeqJC91a2WuskhFrsBAkEC8cebd1g1KipqfhQwqcSyso",
  "key15": "35borscfom1ErkUdCJydAAMjp9dJYpMaDgPVTLexQGmgYvJvdFVJMn5ejyes2G8CWbJQcEhcgdTFkpYcXH6UyA9E",
  "key16": "2kNi6Y1d4vjFPP7MGJz51b2HjfVxQctxTyiUdpjLu1DBmpDgDu3a9ZzkFVprPeUtTULrmb1XwNVTRti4nKQWM7mN",
  "key17": "3Y5NpsY6FzTHjh62bunyMJsVZvHAxx7YdueTKxT7vSkrheWjfYjKPY7hUk5wegmPp8D3pfb3dFxsKP7yBYRnM2Gq",
  "key18": "3dSVanZkbqLtzHSbdmUmKR8WD5jowuPPd4ygPvEPiatZHD1q2GZC2ivy38ChVgcqSGuXREy7roG5QVApRXdAXcuj",
  "key19": "4kSXFWakT4YG3hqh2awYQ3ciFRmv4SE2PtkFA3dyrmEWcbgdFLTyKY6k3HUZ56UYhsKoo5UrEAgmZk8uJb7m3tbi",
  "key20": "PADEda9sRoW3je2AkNZF8Qgtg8WE7k1dSWYT6HBZPefds78F6gjvhsWyjH3Z4TknjuxrbHVteDErZYW5Z1MQtv3",
  "key21": "7EkvacVNiwiXDpPZJg6tTVDSxX9mDQWik3PUiuHWS9Coh5UbVw4R2sEqxKPjXo9uBxWHrZLYNAeNKnSzP8iYCM6",
  "key22": "3NCg55q4rRQop5eopDWF147hFuPLZ5vt4LHdWcjmQH6tdnA3CTqg3GnTQNeuymM9ZEqWeNythXX5xKRaCKWa4gKJ",
  "key23": "36meeihqbxd8gHZDZteWjseLuqdafk21ceJHvFxwWT1d8y8JqvjKP6j8AcXQeTa3eAsV3QnHf4T1P6SUXs5gtAJW",
  "key24": "2fKEtLRZ5K7GuGesuvyCLKnPUeTcgEpAvZYMMbHkwNoJeaH6M6dNZfwNBDUrwMkbYxLbknRtnRipBUAbkhzf6RXJ",
  "key25": "b6espDHe77ZGdbQhYM35i7rKYsoqmGyasHZJ5pjEHBXCwhDpyeMzQXoiSFx7r7VBduHirBoMpeyyfD7iZUCkjB7",
  "key26": "5zDRNhxRErL1dgHPDwnBKJ7HAjyZAcg4Fpf1jpEoAgPajGRcj3qsmwsYXwiGhntAjGTyg8NHmFMukCRMrjvP66AM",
  "key27": "5g8Aq9SBSiSqpS9fq1yh6jGW1CKanhZYjXRB1Yn3DBXWnk2aG9SsFZeiCAhDKZ369xHvrNk9tkckpSjsPeEaL7nM",
  "key28": "4X2ThrqdvNNiJT4nNF29g8j2bjUpeqnG8pjH4b1rcpLyECUuYFFta4vDdWY5HQWYGf27H1n5g7TjmQd7JJbZeyX1",
  "key29": "iMTuU41wzQXwdT5pbVYDF64y3m473kJtQMF477n1BtAs9jjRaWLZojdUVtwunizNxphVMwkw8jKPqmzemQt9QdL",
  "key30": "oxvGA8vUobNsxKdfTxZPbvXM8vGgTxDi6FTS3rSAHctwCbT6KALWWRNSRoXpgfgxMRTEm2v7pMYZutHxd6oZyBe",
  "key31": "4iPxChkT3wHfMywMWodVBmgF85xyAR3iR7NMsZSAsYF4kArrFhfHfKcbDDphv3deUjAiRHhQPaBFBr6qkSLnbgXf",
  "key32": "5jtmV6CqZXonA9Fs5sS3BvoYCDFrZiz5LQhK242o45eSxciJZJW74Umszgq1QApCDwKfkEqTejUugDYHDtdD4ZoF",
  "key33": "EcP2g29CywLXCSGRk23P9LUpZquQ8uEoGWu8fWn661UgbjSNMHuroNkUrxLQPE65dnebuXSiCiU3Qz7AhcZbkkf",
  "key34": "24dQeq6YpELHJAoxhmKwGksqHyj4iz3g1vYFuW12BMnYMD1CvkxhQsuJLbTgKU8HzLtBfSRRrXEUS7Q5y2JkbKxv",
  "key35": "46KkcARPqGfomskJrjSatTXfsLSNugGSrqwyF2GdSijoNJyxk3xQNmcqCvo5MPVhLZQ9eQJivtYJyxu5NP6RXCGt",
  "key36": "3vCAzMq6VmupJUwPjiSZCdwUj2JMeYFGc7zJnNXxoJVVuS8YwF444sELKRazeLh8nbetUNgd4pK7aioWnLgMvx8V"
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
