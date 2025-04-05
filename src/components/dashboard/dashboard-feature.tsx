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
    "467CgEyrtP5vteaea8RfTMzEGYNdygagwVPEWFWYYJmYKQrQYT8toFNfJrvF4gutiurdn4miQcFLrNazatHyHpL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GG8jHowxghbpZ1qAXvRpoPd4iWKvgZNGHP1kJBng7vqxUCkB7n1X8mxJosYnLaTCMVB3BnmNo9kvYM8yw3v2jKP",
  "key1": "4HNt5E6ZBtxR4rfbsvNbgHijff3vwPHPrwYVzUeTbmoSUPDjvFXacvPJByQGGnvebzSPLxacNjLjG7DEKTABv9yD",
  "key2": "29hqEqt6uhFAzgR7CAwwazohyUKjpMEWF9e81yA5Cb2Vh2JHvV9EGGVb6oLeByXc1jfdcD27H4uWuM2J9V4nRdHf",
  "key3": "cJe9uGPWXZB88GEQA5v7dTcV9zCBi4FmnX2TjKVXQV3GAwMiYK4qjjNA5g1YaGMGVSMc8bPeVRacnK8ApLmb4Hp",
  "key4": "2uvSTnGP5dNvkWHMuAHiP69xFd93YS7HCxiHR2Xr5P54Y8cQ1gXRhAqHdxd3nvDKVDUxSp33uCfRXdvg3tnrbYMF",
  "key5": "3ib7mhEzW2Y2q1BG2bB3vGsa2y4WFuLQqzRBRRQYSY5LMDxFBqhBFde4nJ87V9vkKsTxPvHUuKifCmUpWpQ9xqop",
  "key6": "45brYvJ8YjsU99hbc2JjshcMqFbjuN8gLf6bSrtCcXeHgVCYK1kwVpqWfcR5h8JJKHqHqPWexhR65MkFq3Qipe9H",
  "key7": "38F18YqfaeYASebXx73jfT566Pi7bra8GoYh8mR4jCQmDoefgJ7xPvDKGkrRNzewUHMWYaTVBFU1yJQwpVnCHjFn",
  "key8": "henRFrMcqun9LqtzM6xhGheJM9V5DEm3XA3nxjoML6kqK33Dcm8oqBw8dy8RhgoVFMC1qfqrUxyfXAAV3jthUAu",
  "key9": "3tKqdVWr4WGbcCdyR2aJVB3CimdTwebeJ3i2JPX6eQ5EGY4ogknmQBB1YxYz4s6DyTqbrtekzHrZgGJxafQGZ4X8",
  "key10": "4FTtDxBCHHd6mboEqLSVcQSAhsEv8QkVNGdjyj6ThHSqf781jumV8iVS3cisGoDxzj4rKSMjjCQcUv4WF7e8Ae3n",
  "key11": "2hSqVyf5Xekqd9zMm7KD2uQ2HG3qyn65RGW7em5UAHnvkdJWqJXgotnEhhC8Zw2ELpVDnE1NGKR5FBCJdhJVhYi1",
  "key12": "2k8Bf8U9kCYgbWzePYcGBU34rgeGVRz6VyKYV9dN8ytcG4kEh5BoK8g53szYbQiPv147aSZX3zPWw7HkYnMEJQyx",
  "key13": "9VRskSr9RJLgyP7YTXt81KZ9iyqWkH1MCHkiNWqqtMnJdbhBRn3RCkKUzvSdsfAZrpxdGR3LkuGS8m9dXrAmSK3",
  "key14": "4UV1Rtza5y2d2P5bQmkUrgxQHPTuyrZgpwgpBXZ62aT8kaqhjwD4yoKUoRsq5tWc1qVhHyp1mrEMxW89AUdKQgiW",
  "key15": "5WtDMWvXkWhx5DEq9oZRm2MUCTtAF8UMUvL5k9UwD9Pj5BiK3Cu2LKJ7QD1t26hJdG7QpfX3kGEwjTWeN8ViPELs",
  "key16": "2u6E8oVaeHoZMy9wx88gSPH8PZpqXohTESbRp374BVxaym5kYiqvdoMLEQYVhE8w2Dr4RqYcJEq5NLfCwm6ykurn",
  "key17": "9S3SjuuETWJyNxj1yyzVDNFq6i4YJ8k1XzgXvGwU61ebowhhRenD7smF3qQ5w7DoWwLp5zS41Xg1eX5AMA4jTBU",
  "key18": "5vavjFN2k2B8SEGJEijPyW6QDhtN2WnoXnwYf8KPBwNrLNUqfMYPBE4fH3hoB2YFJndATFWQXEnBejnCNENjt8kj",
  "key19": "3RUuDqPDYHXZkWoUxRQCPBA3U32TUx5873xZUXEdDJibEFcKiWJ5HjVs1LwEU1MfKHYbF1c2xyMUqTkrS5eK3YN8",
  "key20": "3pLHshzU5QFfymjHsmCh4ZQ73YNiFV476hkQ79juTHZJ1rzkC87TbVbYHvYQAd27GiyG2QKZz8oYe5Ui4h6KzgV9",
  "key21": "4PZWbGeFU4SG3FE4uU2SnvgKRUAobkbuA2rdhumzKXgsRHUYvRKUcMNYnTtbS2EQHPrbMSf6A4y3gYGPnkFtWkLS",
  "key22": "26URfnNtv5aNWVJcneCchomcpqNsaGZjSRKa3K484ZfdGwhDEFGoCUWQSPEezFB2shfkhZVH98vFYydm4hjQyCyd",
  "key23": "MvXdCx2aUmtLzdoSemf28agZHZfbDahcmt5ZreyPAFziSa9GeypDoWr84UQuGDu1rA1YM9pWGNsU6FD2KpWKCdd",
  "key24": "62TAszBVD5wBATVjYSidnKiy5RgD9hWz3nKYGLHd6UTTSNJe5AKpZhfUqzbikGbEchkRvU4U5gtmHsd8G5jPUkRN",
  "key25": "39SJaCRcJZKwwNs151iPU1hf9sCX5uRcXK86Nn71z4F8uMzUJdRvDXczGCMvd8Gkr9WZF9qNx3nBf73KAkBqTmeF",
  "key26": "3kXpjb2oxVFqktCCuKWBvq8z1VodbPCwTVGNYMfzV2Cjors6f4J6smbCugj3zVwqBxkMgT151YDGvy3E2t611t3X",
  "key27": "4X9m63yTcsZfzz9XmeDL4jS4MQpS9JTqgqmwyTyNQHGyv7BW2y8HYzX7sz77KN4L2tJc5wvsQwdM1j6tJvaBE1Qp",
  "key28": "2W7Ys2vXNqjGB5uJTKGiZQgQrbkY59gt9EY3cZ1sUNQPAoAuJb2YTY3SqbZnLGa2BZ7iGdua9JTNqgbUhvLd14V3",
  "key29": "4g7URir7teEinHaUJEgcRQXG2JsXB7ASoTEE7dSyLvNJG1dN8S8voMdoeMr72ZPaG2p6KMAAWenfwy8q7xnm1gNS",
  "key30": "24JoCETRuu9R9HY4kMMDYrXjNGc1Eg26QCRJ6DETmqqJR15PuPpEj6yKk8AkWrmWrNN2kWNrxFDcqh4shUzb125R",
  "key31": "FkZy3xdZQxFScdVBx7yMjp6d3gb9evhDhMAyUhrRBL7bEX9RD5u7NdHaKzZsd2Yhf5hgsLmCJkyeJ6JfGUtsL5t",
  "key32": "2M4DcAqMTUmbzFYWHBhgjcww7EHnG8yB1Mujfyxr72FtMe7aTZRbW8URW9wpTEnZxqYLSiu5K8WDhtiJX1vh3XcA",
  "key33": "ynxNGXXnUuDH9tB6Mz9JDU7wfbNdXQj6vD2JUowytNsbw4GLdaXxi9VHkeRbSH8bZDNgWZ9oprikzLu5CqYLKvh",
  "key34": "35cCQBgwNLABdFqtwg4HNi82DjeFtuckBZvXv6XLe5U7jWZou1G9TnR3MA4DPLsXdkU6oZULFegfcKPk4RhcshDz",
  "key35": "2rv4BwyrrmEaPjjqLUo51FpvpxxSVpY9DPQAcHSLpxrtVf5v4qJ8BtShwRysrLqw9XaSWJZXVt5z4y7RuAMZ9ms4"
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
