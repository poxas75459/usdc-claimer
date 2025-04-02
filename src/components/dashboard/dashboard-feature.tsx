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
    "q9o7RF9SNscZSiLyHLevjGoWUmmm7oZtSMXjp3ExqgNqGjtbqbQRccjsQYunZskdqEq3hjuDTzuJS6eAJJb1QSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hGzCu9yf6gPtpE7qMmXrBAox5ZJhpvhiWJN3JKqiVzEoQfkiJs9UDUp7FM5SoEYenZL75A8z7bZ7biXWL9cy16m",
  "key1": "wKj6hjNkMtw9z73rRkLyhdcz2nigG2LmUDJR6KF53ttPZfXTxtEHMmocK9ixbu18njz7pipxPbSQEGjm5RrikZy",
  "key2": "5qyY46sHwH356axiZoEzL6qW3LRF33RKzVAXzLMUPwb7YWRDUqU8jpRRVom3FLZbFXsShiKCDfoHtHaErA5ULMzU",
  "key3": "4RbU3Zkb7BRdGibzLY7xNLpJfaNLVFFHTEXhgB6itkNx8fPtc1cWFVdxXdHcffej3VD1ykVYuYwqskkitichWmCj",
  "key4": "nvuUCbwR5REc6Sk2JqEwjKa6wXLDZSahBrfNGkuBKawGjpZVgjbXc3fUq9X1LcCVsj2GaTCJYJy9MDaE3bXqttU",
  "key5": "ePvqgyK7ZfwzgSqbB7MSHmB5QvKT9wrcdzV2FtPYbCnR8Cc4MpVCG4XsSXDjgcNdrULfNkEa3UvwdPujEEm3gxJ",
  "key6": "5PeAHSdtxVyqeSbEQPsKQagxYPYEVN1qEF1w1UkBBCduru5wJWGMafSL4QiTAhZhK4a7gNkfCBP3DQjRFGFZBGWW",
  "key7": "4xrdGbfZ1vLkgM8PKhBbbunuPxWhuWEWxptUVmj3TvHbvGjyXkjdFm95h1JjHBUeMuzhwAPLWobtk5nv6mLXVRyR",
  "key8": "4C1XHDenHwXCEGf5hLoFtNWMcdnCbckfYFVqqGGQyvuPNKsHUgbhbYRZhdEqAJwhooDZwHWmMFyh3FKFXkjaPgxZ",
  "key9": "26CHmbJ2wUxfFdH2NYwAdzH6GRCanvFqNcbzc9ys75ZXh88SocLGfr2SjLy7umnjYGMHx1eJ2kZnjHRyrWvo8thR",
  "key10": "54nGZD4AoeAAjqcLf8oCvN9a1NKezAGjcQkpg1zzxC1gSNTGDQefo6xVYQjg7PvdSu19isgZir419u17HQ2Q9sM1",
  "key11": "5HDnbYgddw1yAqjn1QYaLjK2UWmvR8JVvEhujwhMfpx7fA9VGzrRrgdyq7JY7oNdPe5MhjMq2gctSkqpLiZJZ246",
  "key12": "4W6aicpQM2iyGDqTZgecbFk67KHWeYPmScSZGxALhrtyw5njAbhBmprSL3ieHLjT6Qn4UzcfJoQGNnRR5foWKkTK",
  "key13": "kANyhaMHrtq3LAmrESkwkTdFsiLM57CBDDseb5oanUbadTf5sV5FmRXcmk1M5kpeTRZh8AT77gZnD3nsrduy9df",
  "key14": "3CXVqUFx4uyu3MUJXq3LBqsu9iUDVzigUM9VRGLXTi72vuZTtPJ3rcqzEY2FTy6GW4V4Gxd4bvovMVCbkB84rjNK",
  "key15": "5BAp8dSxGJvriQdcd717QQ1MviEyL7EKH2Znio61E2G1rJXLpSrnduYXTzU8E4nJuXL3RtqnQdgJJ5zVHCLiKNbe",
  "key16": "5ycG3KotJyUPDjGeH9sUTr3HZAUmkWeD3sNXbgUCKn2U67fS7Vvr5FtvD95G6T4yVFU7dm3qzfzkaPmni6BEaEQq",
  "key17": "2vXfRkvQxHC9xoFY4eLzCr6PRCakYSUXEWuTwUktMi6Uzp3g3X4q9rdox9ZxZvUirUYno8EV8rrshVo4eGbDuZst",
  "key18": "29LnhF1bkR6nF7NxHGHQ5xbSrNnKdMXu7TzTTVFXuR1KmddzFN853uSVxPcRF3BvrBDLCc2xp76JQqryp18pgxH7",
  "key19": "3eYcydYaY69oceewRBrQGLo8F4G1HyctofqgxKxK27XGWTMT8xCf46gTDH9aYrHVgPKPTTJovojxqXdtKdz7TCJA",
  "key20": "eNDhrFmkoyrVcTJe6RJdUUYUpN1LZ85gEsHGDf5zeCCRFK3ooSaZ5dQKWy9c43GQWaEduYwNh4a8EnnCPbFEsAY",
  "key21": "4ANTL8TtbWbMkGRCbHJvoWT5sEau95J8j3or7aBYKZo2i1Rx33jehtNZsqnZk4zz3VL4C2aHM3npof6FNJrC3rmY",
  "key22": "4Fr39nKMYfe56uAiWCtNfhJokM3ut9e7gg7TQ2UoqZ2fnbVkXNeQQaKjAvdgdETHHDUDtX3G8k9zEhY9dXHYqxPv",
  "key23": "2UVrqYuCs5qB6sRjQGV9yRpXtNPz4GCgRVqvj58fxnaKPPEEL3JjA9wxYmVa2DnN7HuBTSRRPMfWM2K56BQUgfvM",
  "key24": "41q2545nCzsNdq3QyUaQpCeYUeBRyXUYT1wbBd17WzD1xfL9U6KFwySd9rMzCNb12fbgErGvb3F9n4J8PyUysCvJ",
  "key25": "3stoZgZy9bz7g7JVUygcmcxakcVywe33a9gSxs9x25kvVvGyVQQumvyNiqDapZjZKpmyG2t6EGN8AcKhpZ9Gi1t9",
  "key26": "2vUiEVTxhx8ytrS1X9vurCPv86XWrvzhKpJrLefHYRPfuoZkFF5jCntHCFifcENZn4STcKrT2anqV3dqx69b7e22",
  "key27": "2fQbnESxCT2TQMP943stwSKHReDGSeGzNZbR2jmoCX94PJ5oJtAN9pszbmVi7vk5NzFsJDjRcEbzat8vDhDyGix6",
  "key28": "4BB85ivr433srRFjgVFa6XTduXYB5DM7cn2Y6G9w6JvNiKBEnW5tSGvMHEn9nhmqohXTSVgkPabv6wxgVnWyboW1",
  "key29": "2aS57AWxKojGgXbX4UhTbvrLs2ReGm98ngghABBnAVSgdt9NeK9n2VDvNtFznitka2CQG4XfctDHWTZQkNqGyHgF",
  "key30": "48dxF3gj4JCKfsnGgcZtJyic26M1nN3fmn8w6xzDZcL8Wfu65khEJUrjfXSc2HvGAyB4DmA2jrqZSWeQ4zEEntzC"
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
