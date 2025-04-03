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
    "VWa5GjW6iCUaN9FrvQt6EkgEjgF8m6yXV2S1avhT19ra213xJXCzrmGUz9ZxNGYcp3otH4y5EwpjWrQfGYmKUFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FQrHBfCH33RN7aVpqnuDRkxBgC7dH5LJ2hrhqfwzS3aQCyB4tdsddnHWaRA1YECuRJrTa2VFnAPxf9iLoZpFMVb",
  "key1": "3zhBfPVwhd3WwxyiXQ14rXPsqSwc6Wu6oT9rQ23ZyDEFHTyFBXwLS3WXR9dKhJwzz5u5B3ABp7cwti8vkGjnsHDK",
  "key2": "2shWAFpY3DJxZF8cYHuAhfykRTGQXXHHbygCsak88oSZF5Qm933ZTCaBpRxtevPqwNjUgo3GYbtR9argxch9RTxR",
  "key3": "12483AfGg8DLpEF1J24Nj9t7DDS3NYRq6f8p76axQFwqnurSReAhwsqUeHuxzaLDmCyQp8QuQWd42Pt29WrH8h2n",
  "key4": "sZ1aYxS9inmGD7cqQvHrUiBWQccATco3ax2Ey4kfh7EFd8WsyjJzSTKftf3thZ9K2B7oj7qm4rYiUVJBpshCDmK",
  "key5": "2MAzcfwySMptuU8T1i7YVEeChVZLWiySto83pU43Uxbpt4mYEi5ojC7uRY3T6F5h1eKz5LUQ9YXHHqbFPgzQuujp",
  "key6": "4E16qhNZiHG7cLU44k2JD4GkVjxD7SsJCXGPxkM3gkGnEjJHj2bFLRYk9AdFdCb7ksU6KEq2RewxfczVetadmXgS",
  "key7": "3rWur9p7hdLuv7ZYKNZyg9aGAKjbKft1F6sAoLDHgBYZwuzJ16CWNCkhP5Q8gR4qpDp3hhUhtfG6aLZWVkQTsXYg",
  "key8": "2Luhvj3vyj6xPMqPuYPeWTqYbF89bM4m2uTkezrBKBrRiGbJVkpFNrx9LfY8TBjjcjp8HjYbaKp2rdtj9hW8RvPA",
  "key9": "2cLTvKYLp7289PawGtAEvBFd1BnGMC3CZHLLw52YFAMMrTrPPUU4k2X7haxegeLyGe1qJdqEiFST7uLGk2t3WMqF",
  "key10": "2rreNL6sP3zuq2bTT8hd9Jd3SPWj5fivuU9edoMLQtaXqwiT9Yyxwe6qtCgFtTiknjcvPhTAFk1y3A8JuGz4eG4p",
  "key11": "Qo5LWSHkYTTVeMa3dWn2uHqs1GVb1hxdphU8vkhmqDdQ7zyc6e88pYkuYbV1pfnRbhqzqYZRSRNtoRQRgdJKiVH",
  "key12": "5s5xMzatrofT2c2ybuwWTGVfFyo97gyFkYVyMbQ6wQ1eCdssaVgUbL7Le5Qk8MXMQKKxFxCmXwzzbZQGi2iEYb62",
  "key13": "67jjixxcDi7tvbDiDn1wfZfhkbqTxGAii24brFWz53mtw1y3eQpr3rQCdxEVLDSHy7mRRXttyUnVkv2cPUnqCPvT",
  "key14": "23AD4XMwhp9hX4Wb1JgNYJsEt23iQHSjPPERmxxeM4tNtpnJH6wZhiohRNGSNLvaj8DoLpe7R281PMx6VLpyuVDr",
  "key15": "5h1CnxtuwCg4nRckU1odXzK9GZ74hi2bbc6Q8CTYYcS38vV177zHsjJcx37Bx8YA6mWnUpGBPkVCn6WMpQEERfLJ",
  "key16": "mH1UAV3Aq69uafYj2QwrBifsQV4xDgq96EnxNBFtC9PJ3SRaZQCwemKZfQQAz3QXfhfgRMNabwGXCK8zCayY3eb",
  "key17": "5Hn37iosgrZPsnZpo5chDq3mTwuWpGtuThRbTwCWza9Xur83BjdVkG851wZmZmKZPrPM829WkSdz9hRKiXE7teXq",
  "key18": "3up41aT66gUQRwiBcjqhCTtk8MjeHcsZaKL9x1YMZPNRLt1eBgDjUzBBydGG2dNiaGJ2VqbS8DrQxbjRqi5uNx3t",
  "key19": "5GrUcnGwsHr3JqGi4pqidrXyEFS5VPUVsvke8GDgdp36vUGtZFQbSNPinTSDz8jS85NRWtqjcJb8eq9v6WXTQjJn",
  "key20": "5GgvNeZRqbuMqgUiDExZg5RL5e4LkcsedReDfLZbwdNhn4E8TWdTuXP4m2EBrK8vbcsUjoB54JRAK4FjzQKUtrjF",
  "key21": "5yCYL4kaDWv8cyyN4VA8q3yLZ5jsmsWxx2GsAdY6dnyiKeTuCfQ5M4LAP1AFKJaQNeQEY8trK2Hd4g8Q2cVA5sfG",
  "key22": "26HPU35aS7gVkeqshQQRYRQPDt13vVLqbqv4Q87E9vvqBXCAt3d8r3tJqAiHno4mVQJDe1wnQ8Q3PHqLZA7PuH7T",
  "key23": "3UF2t2BT9wpLFzCxTD7vHb4qYayhUTDJp9oSJtWTP8gsMqSJcjfpbEA5jPk1rGrnrwjGLXZ425jJcvASizaqGAcy",
  "key24": "4FsTr5td7MxTvxHi5J6Q6tEEAHm93hUcWSpJdoGUpMqMsVaZAEhjGv9biCs4rt8kDYbdLqDrUEcGQvmbzQjXG45U",
  "key25": "2iP5jbj8RDr8VF9hyUuQGyaVgqtKVKTiRZkViWsLsEcew4bUPc7mHqpxVb28mMEAY1xWrm3LJQto8WDnRLbvsovN",
  "key26": "22DjCwzUkTpZ3ZWpNrKjTYFw78mKNgZohey8pydhVjzmgsBZDbUhEHfGEQAQATyMis8xJ3w6R5qhRQGcmdPcApPX",
  "key27": "c2ouKF3SxjphwHL8U9EVB49drVQHah4jPvLPs7bjfygsPdeiEo2CWSBrHuRLXpwEdEckKsEsNpo99PpqL6HoNQe",
  "key28": "2KHf8tuZ81bhcQK2Xv1bSCnGLp2MT6sA3mzUG6LwqcjEpPbm2cr9p7utsDkmsbY4wXXmDP7Q9gL7gnx9vjr4YqVa",
  "key29": "5r8t7vxzvqM9mN7ziC4zSA5VUwBF4jU5BLwJEy6bYjLGhVwULEkwxtvfAMDzDKr5gmZAn2v5Ywzp9JPNeYomWoYq",
  "key30": "5kRjQEmcX5PDxFEuenM5T9fWQfX9MwvFt6PBzMZccxvDPHDujmFSNuhHrkCDTraj7d1fPv7oA7eEbgN1B2vKnBjJ",
  "key31": "e58BGE5VUTAtuZjrGTQCZBe7f5hxUYtBVfP5Yh72Fob4gZf4mLA1aXQxSaQdHgTqrwQZGk5GVXQbuWtYgz1RVaX",
  "key32": "39L3ij2K9Zqp5Lh7oLkZzWHwr1EuNXp21yf5g4c9ULwdiDiirDSSKqMMupwrqw9ypbocj3bqrsnuyzhhtZFK9b5D",
  "key33": "51hNvpgDb8D36zewdCtvhUUeXo6HHjGTCKMeQCEjLSKbyAQ1ecUKCMTR3cZDeqhLiQBBZskZtgkd349YFHWWNDRQ",
  "key34": "3gTxkRw4BxuNDnmLxQV3ApHKqmUbiWLyRKCisHGqLFZVvZSkREoTGHrfNsfzX6vPnwziVFWFTB5T45K4dURPThPG",
  "key35": "47khbHzJHegpXJqAyZn5x4FgYzi6E57AapZdVWwn2KTtRZumvzhQLnrbwid7fdnYEcdUpQBwMxFm3fbMPwLHPTJQ",
  "key36": "LBWeK4aj9qAB3R4KUs2aJCzdfJskPS8yQs8W9nD2NebJa2dc8FJ42NBHD4AaDDLYUPomCKBQZJ6Yrp8DLbia3iT",
  "key37": "39C8JQEwxN3PzinGWmpRdjWA1vVA8sM3Z9YVdud152nV4UAJ4nTKoVkCWKP71DquZrcdeSuToKufuZRtkDittqTh",
  "key38": "3D5tVbNk2UcAABkA9gnYZNUkYST9EsStmRsfJP2vSvoEKvP9fD3XihpNcqbeoGzdjNANmE189F9PBduXZhdqEcwo",
  "key39": "3Sxed4jH5ZMnNDMEc5wv4jABrfgeUeEbRFdYmHpsxyGWNACKTKNrHENQQS5GxGt5i9ovtcfEnHApmJmeaccDHfp9"
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
