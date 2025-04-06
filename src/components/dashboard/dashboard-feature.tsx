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
    "2PHztJFhZLXaKjptkegBM97qX9nqSjNbSkdkb98apYFMdnBU8onXJJid1WPea7Bqpyeo2b3CsRtpV2qwUz4J4nry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FX5xgKs3gKRBsrihpiCe24mncmjhaUXtSFFXiKqzRyWaRRB73AiF1D4b4RM1atK1EFGzJ13pzJsyNmyxnc1fZ4Z",
  "key1": "2ew592fsotpETCwhvMMJjkymYyogt5V7gR2SH4eg3Hk6aNJ3A2h7xkoHQFBjyPGAqpt4DvkehK5SjutDXJtYqqa8",
  "key2": "3TtuaCv3QDBZPgmmJHFV3mxXBZv3dE36BQgGXSbcFpmc2Vxm2PhW2XsKZUx5m1KMZQYFHE9QM1e2EKdm2difZzFS",
  "key3": "5BvN6rz4rxtS5WZeshzscH9JVFWZXgG9P58m9L1thvb7dwLntjnjaq56anz6v5Kza9M8vQn2Kx3UbJ5yJLTav2f",
  "key4": "3U4Su46yCTjDbSdCZbHwsKRcuBeGwi8QFHW6GRZ51yDZKrX3rWBrGMWCwv3XGHZuNjMeUuU9X1kzGge4DUvFS4wy",
  "key5": "4sX1nZySj9Q1K43hFFfCCBhjFnozTRhksxvjWfFJgGndFgdDba7i6Dk56hLfK3bLjgHmuJR5y5VUKb9d1Y8xuQ8T",
  "key6": "pPLuucGmLQ9KAyTRJ18p62KqVcu81BaFCus5gcsbbxXfv7dVMRAcWX41MM1CWEjikLWVXPfLDmxZyiksE9AnwhM",
  "key7": "5irrhjDNHyZnobKVdYft47DrSbgCQqH9RzzpFqrJLdyYo8aCqD8hmpZAfuugQdL3eVdyQqDm4F1WUyaBV4zEjSZb",
  "key8": "2aMNRruHXG6ydVHS2tW4fWZU2MLVqvChGB8PpNF9mSJH4p3t4U8qNN56tZCsm2VU6AGQVugxVAo2KykWfKRJzJkQ",
  "key9": "4seKPNebsLnd3roAKF9bua656skGmwqED2VQQxbpoRndwaSvq9VpuzGuWiGd7RogiTN2fbGPgwsZG6KZ3BDpj7mt",
  "key10": "3fyExJi3p7rmM8N7zWH696B2KJmRVCJo9YbzZpA2jiyxGBuUwGvbB5cLAGE3Jfc9uw8cHLhVgZ2Up7LYAkGvBJRz",
  "key11": "AQYckWShZrDJbzr3n31hLSsxcRDozF1mnaxa7HkNxgrHG3ii8fvUAafDqwE6rNEGcNNPVsMGsRdr5y3wn3rgVEy",
  "key12": "4m6XbQ4prsfwAthjwenTtLMG5w74DgxgkyVn7hPjK9Mm9ASfd18z1b4ytLoVQ24TVZBFWYcffs1bJQUoUtmN7Mcx",
  "key13": "3DDciU5nLA6RKwLQwJAaa2kkcMbFTAQc8GiFmqfEX6xqEqcKhECWCb82Yq3ygmC16xdikPxuwfhbGTM4eqhHoB7x",
  "key14": "4bQADCmfCTXmjKe1QZ7mxy1xMKBU7UcGfHrWGjWX4Yh7cFwF9vd9vogLkhy1nYkjdcsRBaHNYj7BysCNmjh8gNNk",
  "key15": "2bqKrBTcUY6DmogZsCTetc2Y6UpKCi9xP9WrgSuEPUctBQn7rDJaXNSYJooBry9KfSCvkMPjEDqm7FwDkv61BbUp",
  "key16": "4XEfhmAganqLjUiCzmEvvnwJUoLEAJRf3BrP8w7hR8bkZaYRdGfWhaiA1NjGUSjVmjjRXHSuaEv73o5LPhAfiGSk",
  "key17": "392E8MSe8T6Ju5xeMbWdHfuo3k69Jw8gqnw6JSv8r2mrz6c8cPah7WPvy2n2neGZVGgaspfCbsiUqtHW4LujWzu2",
  "key18": "2zGGqSeuXhCRcSaiXaqoWWWW8q9FYM3jNruTKxHsg9TaoErTxTSUQMDWCi2UH3CqaQ2fapaURVgvUXdDnPxnoa7J",
  "key19": "4KgC7jDcm8dM7YPH8JwkeZkoUuvLSUnt9dkAt6juWrapK5eg2ayaVz9WuHm9p3nZwaRsdW6yAiooS12GX6ZLpreZ",
  "key20": "3D5yNu3sdvFHQvpstqYLqzinDZrZsardDzduQLFXvMFe7A9dohbpJCoNdwkw82M7KmDfVCBqgzJ4SsPJm2cAscuh",
  "key21": "3qnSrqancxYRnVUMvPUKcpxdhiyA3FUEjwMnjSAoGwGs8u6iYzE4pjJKmmMZDZKLQSm12mNUDet4rkgFvjPiGwQ",
  "key22": "j2tM2VUUWD9CN2gxJuSH1CeykaeYjspiy1brrukHJ9VTWhrLGXi75E7T6EYebd3gH68bA5WHpsdraZMmjNR6HH1",
  "key23": "3jVabvtgVG3y3VPy7zfJAZCWywZzymhY79hNKNGB8D6wa25ieb2YUzqa6Rf9gPntEuicpuLW6escPzXMyeUqUcSU",
  "key24": "47Qt1t6uVSWeo7WAX7gEJ9yNM6e9uoxR6x6fvn73LujawY32rXiMqCtNMNjfqM4zBGEhJzxznW8SZsJF11YmQFsr",
  "key25": "54rHbzfFfsHUH7rxXK7f9PUhSy6pNjvQA8vLQcDy9wLNAcXtsbJHCXsFWsdhAwPkG3GRnVJUJDY4Va1aPG28jLgc",
  "key26": "5jsuEgr8T5mNKMojgHAJg9Z7pd6vvVAxsXmpej82mzG7H3DUNev4AyohkvuRsN82JLwFLUAPGA8bwXuQxFgmPuyW",
  "key27": "3oo1vSLw7N5Zpy7XYFg2AKKQeNLfjd5oYZGHDFTP6f3666qemtXT98dUuBnKBF5u9QyRbe3LLin7qacC8Wxy5RBg"
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
