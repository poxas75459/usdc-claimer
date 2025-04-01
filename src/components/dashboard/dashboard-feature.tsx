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
    "3ZF92Djfh2ofgqieZSBAUWFKi44PQoxd2d2EM2Nhj3hW3A5hV5ugYdYf68Mi4RMGFGbhXvbSAVKKkcCbebe7zNcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ZURcYXDXoL5vvZbGGWZ24yDA4fTSagEYkRaPcixEHrooNavwPJCKq5kFzmQYvFZ1QHYxqturbDf4dEG3dLA7Pq",
  "key1": "5B8mNwf7mg9nPHkp7BNFB2yn3MQf5PFcnLduvh1BB7TAfCQas4DehywsjoDEJ2AHcsjJvg3tmwtwUk6Uw9LY7USR",
  "key2": "2f8YbkK3X3Lky67xVVvCYh58Q4No6mKFFM3aKuv8V6RZEXWT34jRQ4AFgSZoRgQu7Tr4uP2h726vureQokBzkDvQ",
  "key3": "5k2uc7xnsbG3hz8kFhascK7Ca4nr6jkXcj9nTNUdJVn5zv98RsCneGgDxZiw4MxePu158qU9gYY6u8o4ZoTNygeK",
  "key4": "3uvcHgLvCF9Y7UGH4d7iGQmatbtSts6JB4iLBWvsekD2yjB4gQquB3eZYWRoUbDbviKzw9cgia2t98LCdm2K4NgY",
  "key5": "22fURo8N5pFsZrmK7quhnVBGZ4QNUSrnyKux174hcrdqyjyR8mQwzJY5mzc64Be9LjCgkxKvefsvpMvEqPAsXJ5C",
  "key6": "GLZGYmEDsDPR3yThfGR7ZJpwLz86hkSeVDqySMTM4xwE5iS6NFt1kKNTsG5F24p6phKnUe14oRQKfqQxhQSjzJ1",
  "key7": "2ECPopJap3z9yLYSZUcjneZWNeHv1qFXbLJQcQ7HFcjpxQLWfZL8ANGDtfGg3GPNXVxkQMZ4ji186utAEy2HsDLq",
  "key8": "4kGvPYEfuedCdSMYhDYuo76TrkWbuXV2KfiDcK8dTTq2exr6YAuZgRvfbdkLLcg1wS3mFaZ5W5MpB8koiqTZBLhR",
  "key9": "3DDFhqFnh9SBeRAyx2Jdi1Qs3v28mDDYi8NYpMavqoFQc3iCvEXdtYNNyYJD6pTYtcLnwSv9y9YP7rkErS7YJ5AW",
  "key10": "HUS9XMWUCAemVpM55FJH2R4jFEx595yksCQgYFZFLNJ6ERSFPXwDxGMAgNWEFrGVkbPErpKfTQJ4kzx3EK42ND1",
  "key11": "3vc14cN3PAQSWjnENh9ffxBruKfzT2Y9CAz81XtP27JQtKciod6Y35FYLgyQpfrT5UFQaKL76d32ksmSXn9Df7cw",
  "key12": "671H9EPiMs5aso4oDo8Z6SgB63pwsKxMCEaj1u4xUEvAWhxcFEfvStEKbCNqGK8XKBv737mnPm4FVFS4UTAs3Pfd",
  "key13": "2meCwQLyfBMUzujLSukzoLEnWCjFc5pfFdZWhGKpXZatSfQdfe4MPCKRtZ3DHBEmgutMQ2vKMRHoxRsHAkQvkLbq",
  "key14": "33ojtBjyArmqDUotaiE5oKvotiKUuEo8Yf1YeotXk8Mthp72kohGkZHrZEKckKPeqYftJwEKfCFhA6MLdJ7ZjjQ6",
  "key15": "5tpxYkmkio1coFpngc81Rc47LrWbGqnnsnrfTTK6arPkcCN7YC2judUyVYXY6fJRzhzuBmhuCJfCRUyvDiWK7BwK",
  "key16": "4yxhFf5c5ViLwNBYL9npeazvNcvmPLjzj1X3vPna3XnJraNMWPLn9LMPbi1A1XuzeHwiYotgEFxJAJzzLp4bL2cu",
  "key17": "gwiCQZS82avTAUiGcEEiVi6CbHuscMoVWgkrLq5Xther233FJL6XEJL2eCRUAVqHmSKhDUdg1E9d1rZNiLrVbmp",
  "key18": "5VoiGUwoG5aWMdJdMTRbLXFLCY1Y92WCe8Vf97WenRVhtJa6ZTauWWoSSyvLGYtTQU2gn8HRgXtvdD8CMLqrpHxQ",
  "key19": "2dTnV2oz16q684i5kDqbcMMpbtYSHieQ66M3e5D26q1nMRQCX43Cy6gWTJwbqPmUw98EZKzKj2dR6x1rPEZrbqxE",
  "key20": "5nmBeZReMFMu1oZEfDdtXHccNnTPxP6CzS18dYTGNmnCvUdmnb4hesSL88z2Cs2ZRAcSemtQDisx87t2eEQZq5Ev",
  "key21": "53iE4fg7f5rcVzNvPL5ZSjHAaHn1nLXh3oEpcHLve8fxHMP6tUfaJJK9mfbXAe9YLbr2yXZp3tA5Vu53jZoYgq7k",
  "key22": "2TZLV9Svz7qoFUtdTwS4ZCyo8Gy4ECxqzcQXGLkL98LEB7zrvCtu3cPsQ3je9oSr84hPSypm5sufbzmv5KEWt5df",
  "key23": "2N3HAVLBZh6GoFrZBvjsJQyPwJJS3SFRtiWtoCa9SyGpAU8xAR5zfeJEJiu74aRmtonVLZugpyuMVk8c9e2oCiiK",
  "key24": "57fvN6DVdWxGzuzWQQ5PQDgimo8Yzj8Sjz8qpcpvegLg4RuP6nLJE4fZJAXiYjwyGAiKkYQNYdyPqovkset6FUpY"
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
