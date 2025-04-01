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
    "2Ha3Jb5bpU328SbQ6qxf2wHaBMUGmVBZYuDdboUQ6Zte8GJRLBrGC7NPC5wiLz7NNrJ3DKPfxDjt9wksdSD2YpgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63mDGCZc8nHLVLL9j4X9iq7Q8qTxVsmqnfTa14YEeUy5eCv9BMBCKx2tXqeufRANVhgdK28ev9MBfrKf32zMC9eV",
  "key1": "5Kjs5GpC9sqrjx5r9Am6CHHeGvejtwAbQkqXgNHKFkWz7VpT4qGGAjYxkvwyTdztpa5frXFEDoDAajtyhXkDc33f",
  "key2": "5MmGmdB4gtf4ahVKAkZiF6GhwNL7x6CJ9P6oUNQbyAFdcbE11DQ3BuLG4d6P8254tPjC2paZ3WW9E95Yyk5MgPN8",
  "key3": "4HhcXhKi346yst3K6JSRJNtQMVq9Gc6ryrKyMWnoqNwPHbdPV3wM1GpriaTekhpVRofRSSXRM2wJhTRxudPCQZcF",
  "key4": "2B9hSrGXskDW8mwpcykvPer7Ku6SpqKvrRnc1rZdCg8FfHtvqoh8UWDY3hpV1HLFN1gpegFSFU7wWGuGb45qp6Zu",
  "key5": "5VGE71yd9qkP7uydpMK5fpN9VFbDDzoaP7GtDjBJdVk9iVg1dwhgkx5qhvwebRy4pksg7s19V3URK4SLhopFc5yT",
  "key6": "5nLyEMCKPwt2MTBxsi2HXZtsWVrvR3n8wiSoRc5iPKbEqTyqrGVPTcppo7y7PQgvRBjowgD6Was2CUCNffjzurom",
  "key7": "5kBcG74vNe18u2wmpw6am6Uq1eGbzp6yurYsAhhcSEyEcYef6qrdFVBsT5PtyoQ1t3S3Yn6pEfvfNaGFtxseeF84",
  "key8": "2xytoAVgZB4G71Q19GC7Yk5tY73RZSkUqFd4jaLmJEJgrPzMqKZYgxpLYsLfaiafGDRZzQ3ywHTJmjvYqPiGqEBx",
  "key9": "3y3DGDMMy87VjodL5hTnp2KfXAt2LeUF9rTc5oUKPtjdHpQQAjE7dSf9HDJDUy4ffQoUCqx1kn8efSZBdmYrCw1c",
  "key10": "uVwhWpKLHdAx6mqkYnkCDMzVWE4Xe9swiH9vLqqXqDd56u1TMktQvZkjJchEUjVXGRACjvFW6fftJ3TFWkDzVLv",
  "key11": "4HMY8j1fBQhfqv6F4KKkuExQszLsiogi7xxwc6duA7LiHi3wpDKbTFVWAuncoGToFoeyqYWDCT5P7QVSkyGSj2R5",
  "key12": "2Nwgr49KHHjk1Q1mpDX6DBwZ2VQCvLYaBq8nBMqyciqgKYqDv7qcDRnunjBhRpHoZYTev5A92psyjPK5LjAL3uoz",
  "key13": "bEWR2HK83Ni96N3WHiXL7N5PwSY1r5x1b2oT4UH7CL1wfpVUsvVZHMDikNwPXCYGiYP2iZMznTr7wi4VvwpsNZK",
  "key14": "5YttnmV9byCm1X7epMMJsgpfT9rpmDZrV9HbvQ42DBWMXBc47ZGfgrwZx3zSNFXpFrgB7TxhGhRWf2dnWHRyHH3Y",
  "key15": "66KmzK7zSTZTLt4hfp6SZk8EPkuCohbmR9pqPAWWZbffanmCCRPLP6qtjsjkkNSHKcqqHuB7jQwku9Ug7FukfSZ4",
  "key16": "3CqATkZsw27tRwERdBfCYSoZq3bmwC5rA3rCTqhkGf1nGhQ3DkbJAggoZHzrBN9k2NEaaCjphQKuAZ8tkUbj3JVm",
  "key17": "25STibj8eaE7UQMNVAgy4tcudDkrXLamL1xjGkVtk6V3LELKAbxDdesTfRoVbzkKDdxQHyrpPRHQN35RpTFJ5Anb",
  "key18": "5dszd4KWMskZra1qs27ox5WP53MfsPL2CwvYkhMGJwnVAgQddenDJVcEKzmbvELuQgPofNxSsgAsxn4Nx1ruwcWD",
  "key19": "p9rBVJUnJYEyyAZTZRLezL2i8tWKgeB8nc6AUG448sGcnesbt7ttxgeNTsUN7oBoUEPXvp93c4eCUTm3cZ59KQ5",
  "key20": "3yXzpBo7ogLTSU5W8i3i4jdbXgSjwtWsbSEkAX4JKi5TogJgomduR71Q9N6HVXTBQT53eyPrKzAdPdmcoKTjaKRe",
  "key21": "2NU1yXbN7A7FUP9gKuyBB3Gnu2BvZ8wgk4ZrxeU3JSaJuKvgBaoLTwvqik7ntFrZdtuTAwF4EYEmrahgkRjhoCHY",
  "key22": "2hDN1J6peHshXVBDso19t8iTdj6W1rBXmGvqxrH9YqEQorAUXeTPWwJi1fL49CnZRBPSNXQAoVfosemnwvHQBGjd",
  "key23": "2ehVHa1S7UzXeepTk4hZ6D1SjMaFYE9g8249UmhfYK3tuqQR5JuTdP9K85Ubne7zBHUfTwyBSes8S3dvcJQVy5sN",
  "key24": "dUyfQULqxvrWFv99x1fMVhpv4zEy5aKKdZUBJKWuiDP9onhoG82oY6W1bZMzhENa3jn7XZzSxgE9h81tP1bGHcg",
  "key25": "4HxspDquVYRSqGd6Xgyuc3HAHLcGiKtdttjXbZWSSd3SpvArPiZzeyH4JzRZNre74ybjMUyX65nAuueuK8jcvBRQ",
  "key26": "2X4XKvuePQwJtVGnLozCoT1nHDubMdYSemsEXTGMfPdntQSxkhCAqTkSpWjBjjEZojqdRYtteq6uaZpbGGad6ojr",
  "key27": "h8xRrnva9ncFP4S3sRudpx6FSG3vmJqbzSqdYf5UHBUC2emYA2MT85RzRu3ARjNpzZjXBNDLRRnekSNJJzoE5Z7",
  "key28": "3HRbzy9DiUqJ5n8Y5iKzDdaoWs3sCHDp1c8BKiR1TGxAmARnMfJ4buoAa6F6CYpLoTQnnaX7zUdYHqjXYoGw2cZ1",
  "key29": "4aADsRiDnw9o51qpZkDuPSfVN1dRuJYEr8bW1wktfPueMNqkbALQ7mFo6RkZRi6qqRFPxhoysPvP7GtsVp2xzS1",
  "key30": "5DHhBqBkQmv9Fv2zGbsxhN7mGd9wzgm2NVjNMi8H7JyVEFPFCpZ66F2zwHnHT24RWYZxUCeVEdLPnYvumLw5gGuh"
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
