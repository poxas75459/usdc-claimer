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
    "TQGV8LMe3SpkhnHpVMUqnMBdPzykckR79Bqsh1hRvgcZRBgCm1y3xL56o4ewCiauBBLbomuEdyRcyEzzP3xFVGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NMBwTEn7CDMQqFS6FNEh79PomSxenyWHobkpt44L7CiTMkqSGNuL9LoWGbsRiyEyafNJ46VrNMA2CYeWY1rn5jY",
  "key1": "3cA1UnTWYvJa6RwppaWV9CvhUcxqmpTWjjSjwBXffavEEZErtfqUvsfYcUN4B3D3FieS8TbUtefXdVvGkVNkSzkD",
  "key2": "33mb7wwkbCtRQPXfaEteCrF1tXxrppV1VBG8B9g9ufJaoAdk1JqmYfgffweTV9CqNbF6cw8aHzVZTYfDHzt8Naxc",
  "key3": "5JVtEPkPVHUpzbdLTFZvAEjyQofjnwc38yiCh37BqrfUXxaXVMcjZT3d3wCP9gFuoPgff75GivKMyraXo2kqQ111",
  "key4": "5c4RyvMSwhSBxbQe8mEGPw7m9mU9Zev6P2b91RoSErUSwg6fGrTav4uWmK8mECWYq2ZAmQaCcnAH84mFKGfF37wV",
  "key5": "4aXkGHyeTbC7pXio4aemy1esy5pQgdnq4mYTTCnhJN5gFV3NzLVm7gnTBkYu3aR48sNs8YmxPKtEJqeFo6zmWmrn",
  "key6": "uJ6YnYdkyxxES5opBuhtMiRA8yeuBDakZ5ssYbzJm3d7BT8u75WqUd6dhSanAAaZ7UpMvhLvSGDv31iKR6Evgkc",
  "key7": "4tGruwbpxRmMapEJ13XxbU344oJzoPbqx4Vjo2kcZnFzb63zRtQaCbh2uZRreNqbhLhTwWpYb4NYD5c7u9reSxeD",
  "key8": "geDURDNdkUd8cFQh6o4J9TFRp5qoxYYPHUgcchYUNZvLHLLpZRJXk2AzR3h934rCUzRkf1KwWNW2xXwELqiChhL",
  "key9": "nR6kear79jntTFHE28Uv15XjZQnXDnMtCwRdQ4zhdZ6oi75e7UHkbcFckvjHrnyeEEjK8tFPioCi7fis5sjDfPV",
  "key10": "5VRNFr2WSEpeYvHYyz9QFURHvNf55XGqKaQa2kNN5ZBibapLMS8nC5VrTFYTe92kjDJonjV45feNGTKgBKrvYFW5",
  "key11": "5cttVNvQPewnEYaF5JZShYaBfXgrjoHjjpy59g8X3buA72BamPbEHvnk9RHu56phs2NDLgHd5dQWkpNjoQ57TgRy",
  "key12": "53z9VgrZAX9tMH5iKpra6XVc1rcWZNnZRZJuh7gYDbTS36wYd4nP75Q5yxey3kTX99jySNPnLUx2weaLefWhbVNQ",
  "key13": "A5tqr7YVKnHKDc45pkkzGWsYrwxxasXFyknqBRnXzB9szgUy3afSxqzhrwn5anX83p3EY1fSQChXRP3oky8nbXz",
  "key14": "WKHRgCSRUq7kaCeMzZeeHuVk6vvMv6K4USyaqKP1QqRkMUEfx71eWE55vTSDvjN3JWXRCAcm2rkat3w1Uzg8C8w",
  "key15": "3xuEm3pmoJWtHESUwESkpNSzz12b1g369HE8meMKVmk3ooFQyA9PQjW3gR8NUo3HcLAyd1WYpbxDNg5DaJ6cTBGD",
  "key16": "3neQsmyinRWC8AhqCv2FUNQG5qVopBk32cpZcv3X6digneKhkFQ1rzLfQFkyW8eU1o7FVxtv6rs3Qq75o44ZghD3",
  "key17": "2WGa6JRM2ZhrG4Ak89Dkjivhhyh58X9rSUeez7TmEf1SN7RsuNehPSDUSyqXeTxyC6sfvpHmRfH28UKgZP2LsARs",
  "key18": "3cZYn4mdhBMBn4m3W8WJcjJLd5Jumf4Ws2XLM4HW5wFgdxdn8DvdG5CEBMmiGBvcttrRRv5qMQPmQePZmbv7u26f",
  "key19": "7NW6qEm1e2Z2kDR7U8g7qh8BsFD4Z3WC6ex5ammPmVNePcEggH9p3f2x1pt3HWNiDE2ozHxqQVJsq5pbUHLSwAj",
  "key20": "4yyAUvRh6tzYV9pcGXXYJ4zriLup5GswBykLAAeo9dDLbcbXtPEZfJqQPcocJfBtzCSR4NAUMqEMRyou2a5AW6Gg",
  "key21": "3p7kJ4Qi2cBivduTDf3NzBBSqz2Cio5b8tjUBP8QRWedEHd5ib7hxmR2ebW6X5VL5kV1xnNvzE6sGHyrbY98d4sq",
  "key22": "2Snsmeo9Ps9RZTmHzdkZ6u9sFVnM153gGPAVFc3bDr3j3tw1iZ7rcdB8PLDSnk5Ty6D1cJk4ZnCWCEcVYeXWoEw2",
  "key23": "dSy6fYy9UzYjZCxfifzp4KZeW971fLeEmU6uFtWUiU4GY2qNVpfvCP8DKKfmyB3LWF1E6JdrFpAFSNNmJhHXh9Z",
  "key24": "3Vmk2kzLvu3JcVCdyH8fcAKaYYJhDsh94ND9jxRip6p1HeRQzrfMitozLSHRrJKZ1umS6X8mWAxSQUiwNoW3Ddmb",
  "key25": "4ggrbYZtH5xe2q8mGw6qjkDpxLR7MFZevHjTv5TCsoShbAbjvAjyRtpGXZrFsqJyomBM2neNqT7r1W6QcArxkE2f",
  "key26": "2i4hXQAdqBGjFU6g6YpQygLb64oqqLFZ1WLXY48BnVukGU6jNBhxNBBW1TpcpV3koKh3xQTQAvyUpHfUGZP4d816",
  "key27": "3MRn4iopA5Bw1XLEg98S4nzxUZGE4bqLHEpaVeACUmLokvGMMdu3WRoyuoTwZbCNbPG2k9zxsKqG21j2apTqArJ6",
  "key28": "4WB4ZtPXhH1bSCJqiM5LwvYMRWREKqk6CL9uxVRnvQmo5gXWogTSy2xY82DWH3Yq53R9vDBLHr53d51P5mtT3gP4",
  "key29": "3qs1MUASu25e8oTh9oTtEvimEHXDwpfreTX14LrxfNCHhmboBwaucApUti6oXEZyVt2EU4fb3WS5okk5eZEjFUC1",
  "key30": "2DkJP3akdJB9XStS9PUCqNtQha69nWBFa3RVwuTELmaaU8sY6kpPMkQxBgyQz3gKu3h63MgzcauzawLWn41WsN8w",
  "key31": "2t7A7wrFpSCvhoVnZ7y5a4g6HJ4XKP52uk2Q57sy4JSBxnK7cSBGjxZYGS74Sozgijzw54qnFoN1rYuJn7KuDKvw",
  "key32": "R5s8TdtapCBHAF6sMWmmXW5twW59SqeNA7FiE5UifBtSV71U7J2Vk86Nw8g67UJK3Eh7vpuk4wZgVb6AUTbT3zx",
  "key33": "3TAA1ATyE7C6B6dBjxwcoPMjKB9Du5oCYgQQqZcutkwDsVemGFmtGfZsjz9F1xoGms4pdDFRq8JCFJM4L7QzV8SW",
  "key34": "m5eCWdUNBC6XxZGeLrxmUWevuZTYtVAespvZSRWgAsHyREcNiTPCe1BVYpVPtLmxkP1fFMTRBXbGpRXBge1yjiU",
  "key35": "2WjyVf6DRTj7hK3bA6GxYwExtV9RhR7CvKkeMbKRPKH4NgaDaUmWD7oKGsCQRvGJ3GVx9RvfpTYqyMqVKAdw9QTk",
  "key36": "RB6TuPjELP2s255n59MeSisWkryNGydJTyKLKzuwkCWAYt349dhL55xBTMdBPRsZiBTTohLgPTpD2rkJ9oRCnxS",
  "key37": "5aBdeHbbgi8V4AUCr858fH1UjiPMzx1T79KacjS4AG1CJJVDfbzWH8ESgjoLzs4ynCFKDQbcp7Gw9o3t1uWCzHkM",
  "key38": "5MTqdu9GdZb2X9KQ5rPNp1Z5FZSs8qhx7sedZq3cpWwrB3A94DepiPanx8o1uCUt9UKUfoT5ZaVW6fKuADtL39r8",
  "key39": "2HpKgwzYGfRVXoL2bRCeSvhrpBmc7SegVHHsxBZ9eHWiUPSRbnR9XjRDzfjqaaUnFWUeNeTfcqP4umgGoHY6FAMb",
  "key40": "5W2EVzaFkdBENnV7uKoNukHJcx5jGbLAACc1Cty26rcdcQFkss1JWWHsBn3g8TdytXZVFeEJ5bWkePa9cv8AMsJ5",
  "key41": "5wwqjyYJsULX95uoSsfoCbwKnegaAbZFoFvQdNkLpqzk2o6GFKZMu6Y7cC4Y1CbrTuctTqs1wqWNHu4QYPANWSvw"
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
