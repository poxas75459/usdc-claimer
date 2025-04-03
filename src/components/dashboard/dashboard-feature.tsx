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
    "tzqDh1vuMrTSNQVr5WR2UUo48H6d11PT7u8suyZiVLg5q1jNbUiVhbQ9FZG47F5gp22MJyqDdDJkqvoWqyR4Xvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ro3tpiKGtu4WUneXypE4gToL3V3cpFAr73LrZHFRx6tTMaFyMtimjYfAnzbwXr1kGodphXNx2d4UC1tKyTotVr",
  "key1": "3L9maZ2vhfoH24M6VXeUkpgVbAyAXAopcSo4mpB1dWfEX12DkAmdZy6uu77VmbwUgVdYHRCZfEshv7ZKq2ZojY4j",
  "key2": "roNK373sTsQ9VqKEcS7KGbRQKGheaHP3RPz86Yj8t7t2gbHevjQmrWuyhD22D9yGe9EZyWX4Lp41eb5arumiajq",
  "key3": "53n77KgPAvWQ3RBv4dGqKncfFBxQDjo6F1pHsoqSCEftj8Ke5Y5cqS3k3pX4hekNCAhxwiJCo9npNojZgXYXqvY2",
  "key4": "3omvj7Dk5UcgUksTuWuynwZVzpG184WguJxJam9hTjXCWn3ZBrmZqTTFivsT7tZGPLjdPATn2pnHQnGv4DJkB4Re",
  "key5": "4ur8bNuM39FQ4HydjLcgk8PSjfGT9kHrnC3q811WdYd8YN8iVFaMdda6YmX3ssRrq9mp4xF269TXdKGng6iGPZ2W",
  "key6": "2hxWpNDVuTscj97g2jrWW9Fp1hxGVCsgcuzWtS61AyjH92ePneRFqxGsmLXrwcea5xWQYbGH6atbNEBhuw7ng6UT",
  "key7": "5SnjvTTRveDXY1N7uhYo1qvKABsragNRZrVUNbiXNgmhF8hnyn6WQiLQtcZ2P4zMXFAdofHGvWku5A7uvU8JKoAL",
  "key8": "HztxD7WtGz1w3LQK2Semven6kmwGwoaD8duwkZcSeHap8UJQbxpRWGgL4TrESYJh8YPBLJbdVxRPQJr1HcSQQ4k",
  "key9": "65dj5WUpzq2iTV2fz77GeWfSbjbc2zLfQwkhVEPiBhiL4WZdhNWFPXUDu8u3XGY45LMyKNd7KKqEbwVA27CRVqLD",
  "key10": "3A8qnKGFN8oSkpCbxfopYnYiqJ1HVvbzwiKMWfskvhuVKnwb7FU35wiD5QamCpAoR3FQgu6c9MqaEMFdW6q6aPg9",
  "key11": "3v5Uwa785JT65k2WTHi2D8hpYCz8qBCnFc5WmvDpi4tk5CJYQthBPZhXUqcfdaMF41aCvwss8i1SSsNSmDiG8WPc",
  "key12": "3wXFf39YUseKg88TLyYHhbsjTjUs7aWrWDLwDVrwMtf8BLpg2rnzsYSC3xezqnwmnh1bKsb6Wa8GTEJXV7hN4SvG",
  "key13": "5wJtHcDwHKtued1RbcH3DcEPH9RzYfCpSjCvVuGSCuqPrhmLxwB65uL9g95ZadSnUEy3AYBdJodkUa4qQuAvmDtg",
  "key14": "44KeCY2w53pshVcUkC6xf1sTpSKVGxydXCs5HJk3KaQZhfNb4bp8BEeMSQc8gvP2B4mF3tSSbHJX8AMb1AzLNuH2",
  "key15": "2xqg2waRhdjKR6U9SguKstKRBjfspRNgKRBgHmjQb82hTzyLupSPMDaV5RY8RJwqii8Jc7sgzApzV4wmmAJuPCvn",
  "key16": "2qAvQidkkTtTAh2UbdS1gn2uZeXKHM2AR5dB3EjfQSRntuZsGSsfyz8ZQgjzCQWAcqjat6cUAkKtsxmMPyN1DCBb",
  "key17": "4XccfoMABGxWCucT7cd7ACXAQ7TD2ZzV5PS1JvCTPbSEtq7hzmAXmyBi7nhe2v7kb1ofr9dEfimS2pLZud9KQPRS",
  "key18": "3AUiqSqJEucR5Fzn6upCRCSv4ppatGxFTjxsMktkwFdnFrcWWGmVUfWngN7RSDJPuCKYuSfSX4BjJPt4f9ZkzWjE",
  "key19": "5xFxa2ZjTSKMSqLDSZDTMPsJqNevFFf9n3NUqWp8PZK5beNjoKKnJwivSZ7VfVn5ZWVkYzGbQVq9YiDLKqNBNQsU",
  "key20": "5SPxruzpcMdhjmBpiVnWZRxLnFY1uSAYJsH9PUyyNgUn9K9xnkj2BNV3TAv8bRjBYcWUS8JmqLQAuUUPZ7XphH93",
  "key21": "3jpXUj2Vs3dLUDrp6vh6sa8KNEdqxvq6purZjdVui82CzML2sDjBgV7dvNow7M3hS2X6T1Lf65mHGRBfZ1nVXa88",
  "key22": "2NStqWyaS1EQpiShA93QHgCTbJtDm2HsSsQxehMw8XCEUo2Zxzq2d7gziiMRpNhktKphAXxJZ11zezj632eJWP6f",
  "key23": "4UJkh5HzAiyHmm4YZgJ3QdFCGEiS15h99suwgQXLRUbiyTDCdQy1wH9nBHk2mZvqwoS3zyD8LsAVv61XWqAAom9t",
  "key24": "Jq4nLL6n65KFt1kBAxCQiRm6qRXzrpzcGvCDZGCVJp9AcA8qk8nBHJZwMUubAcFKdSqifS5TUeS2sDQBNeVoY32",
  "key25": "49tTEowixnG9yzindqhh8S3Pp8rKYU32rkH6fxaSim7tLfYe33ub3rwkFExX5WonbNyUUbHRa12GCtbxymMre44o",
  "key26": "3vcG2UAw5q7oGT3xGPZunduqPEZT12M9iKXcCAMuU62VFGuxGvh5zqNnEdfBs1HPRhVxjAF3rXiJwFrB7TyRy7i2",
  "key27": "LH3nokevaFsEoCQ8HB8srfF2XvyQf7RdT83Jth9JgTksSPeYZMY4N5g7J1t52vy5PPDfF1nRSm7kwB9RxTXVWvY"
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
