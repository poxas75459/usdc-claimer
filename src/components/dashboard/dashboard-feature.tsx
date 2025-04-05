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
    "4FqxGBUe1o1RCpXi3hQuikJNtuVq9wWmLtECz4XJbwX2qUbPWj7kCVDo2q7DHSNy3mCfBo8snyFuJtEqT6GWGGGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EAsYWxHfrpvuEzcxQcp7JJQ1KkYQf47pjweMwM25C76ERBcy7k75QtHAY3ufGb6ERYjmdrt49gLUXuTswpFvMUS",
  "key1": "3iePdRsxcwt55EokpnxfAA9o7X3Yo7HiXfi5vARmTLvq9WS3NBv6ohbkbYBcMAHW2FBNVXUMkngwxwG8A4VaRBK8",
  "key2": "vK74Rp2qdVaXUF7dhurMK4pAqNGtBK9TNKCf7GiCc8jQnRPdiLjSTinusXH982ciWWZeJE914KVEPvyx4xWP9gy",
  "key3": "3bAW9BYr91Joh2dA6jHBVc4PZD1X5BGv8skzhS7sTb4wrn5tLHDaZzst9pG8EZsa88iDHHDu4kcTrgg7p6iuvt7b",
  "key4": "DjzpYAZohWEdXK4hxkunyDZ8X4Pyo3aCWZTz9NAaVYJHW7mKP4MNRH1u2kd93Tz5Jy17n13MGg18tCEUzae9za8",
  "key5": "2QKWz24yh6L3WGhGEohHunDtZcdsf5mvbWmSyo9A9VdwakKg2uodgauPoeVR3DSwmx2WJZQTVi7gmdz46SXPvC6h",
  "key6": "2DgudL721GXTsPyMAdh5VUN76fLJqDkHGhbGDggHph6EukncFcQcnN5vdQVJM9sQ9yUf8TrMdiQMyfwNoJg2hW9i",
  "key7": "TDa7mhmwbVKixXiuKunbC1VudSuxnvhFjYtTLW9k5hxopG9Agnadsm1zhydXCSXguW1ZfJg64jhokEU2tQB1DUy",
  "key8": "4J3pqbocAeQeW9W7Ki6jr1U3sQCHaazNfwdEpLiK4E5HDrFVuJmCjBPkYp1DiqCnma8dEZXHnmbD8ZLGchM8oxFu",
  "key9": "67WahKFYqSHqeKsWQJAEQVDhJNRD8RgpoezQVEhaXFmCSpRKqr2sfNXuBsMeKwPAC9PU3HgmPfAMSdBpSdtEsSWM",
  "key10": "3rEsJxU8Nj7hKEisa4gDCqUfTHXULJcdQmtNdgpr1mPHykHdmxJchA4tiQe8LN6bx79wKvYgEKUojsVWnHe7R6hs",
  "key11": "5bLMh63RmKB9pfGVi2L7fA7yWN1VscSJDNUJ5jjgs37szstCGNMz5uEKUBERPm562sdWUFxTobxYE7xN4Tz1bQKT",
  "key12": "v1WGYS3vhd4ctCtig2MmmCL2ZABLLTAxajMt1krsRZVaHaXFpGXsEGSVkQ6zAUvra1nJomXAxMqKsr7ikRRuGx2",
  "key13": "Q5hQK8JawaQnczmyhpXUVhZ6F2PxDmLfcJqAme3cxcvP4e21y7RWVYpmoeGZX4fncx8v7FXWqvjZmLKKSTP77q8",
  "key14": "5C37KZcNYBNKBLzw8M7NKj6dXvN22Rhx9692MyTe49MKyBo1Uy66WMsyZ74smKieWjrB8hbTsod7X6jxsmjUhfRn",
  "key15": "5QZ1xTVqWAMe6QHzx2RX7L8GykrvcdBpvSVVbogebJm92o9gfuuJ8H73fzVJcWPwecD2SUEAmBzS9Yc6YvtEDA1R",
  "key16": "4wrG2y2z92t28sTgFprE9p9uwBsKTGDEouDbsVPJrwZq1q1Nn7qtwZWbg6b1qCEvYmSsuEsrVhaqvpQNJDb7uW2S",
  "key17": "3A2koj5iy3cDMbrmx8YeZMzqi8zEwY5aQK5UBwZr1RVHcLktdsGfJb59HSLnK3K9CWce7FNVxT9Lrq3cXQUNj9hY",
  "key18": "4Vc6STWPMuTDzRarQGTb5NVZ3Stp7PKDDUe3LuhBgdrLdC6FMcxXbc68KA2jhzSq9ig1PEHZg8kam3SF6QXf7kxT",
  "key19": "4SBRbN8Ux31TZiEp9XxjqjD8sHyGQWDmZn8irf5DD6yuktS84yUqoxx8zNEjEYunziGs1SQ1nKtsDtS1313jcnje",
  "key20": "3UGbuz8bm3RLkYGABRWhjcNYHinAcWcKyLAK1uDAKMJ8jW9WacLCLgtkQarHuFuuYBqiSN99W5iBXXGda6d3HKqJ",
  "key21": "4211He9m3AmrNJgxnL3PaQmLwbXGebxHdWzzhzvf4hmZPHirX8MJGneYLcQLfGmvfYbM1Tjb9ezwjFpA9YWaavU",
  "key22": "3maXxAf5ey9bCwXJLiCttwDj75pyzH1LZgd4cdSxTSRxZAhcrfPJQaiyaPnMofHB9KPvDGSQ7LW5Vis2DZpzyc1T",
  "key23": "2Hg5Xr7TnmyFb2hYVimM4ocft4ueQJCxJwMV3XPLAPBJPNqeY1MyUn6oydg8Pp9sjvnkzfkbF4ujbVx4Yr5mSeFV",
  "key24": "3Q17YQGcW4tT5ihLFxktBQjrkhQ4buLrtggDhk7AhwZF7wUpUKTAurWsZh18MXex5z3rCU48R3YTAfZXqfZm14Rx"
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
