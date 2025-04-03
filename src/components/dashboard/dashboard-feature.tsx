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
    "z5XMahmh3bo6nWX6tBrr3mv8ZmSNvqoiDWQeuMuohMbYxYL58V9UWn9G7LNXemSVs3c4HZi2eBX9zV1GhqeMbyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sRjsBwG8dwZHsNnoHsiDzqMYWEP14GxmXX5HyDKQcDMqB8mVVWdCGxXmgztnhJ5Cq8EgF6fmHvqE8CESXnLoHAE",
  "key1": "2cyfZNzZPcUuW6K2iQYiiBMxNaK5CvjkzGqSom2hLq1h5TK4bMtFiy3Xj58NT8Vj7MsWxNLmDyaCFZMVvRh23vcZ",
  "key2": "dF9EgtyUAbbAamokhEF4A328NYcdANGksqT7mSWmGZGE5ibt7YfTcGRUeQFC3yWod3Nm3LHAiHsykSneWp2Q5Wn",
  "key3": "23XdPFrmEy2GqPCRnBtHT3BXMomDN9oxJMYVzn1STNHg4fxsqyv1jqjvuXbQrPG1eaNGioWgKPgzfHgotTAQmL9C",
  "key4": "4QbKERj5ESG2CnLLnbsWyYG53i9DUcAVRXBSXvnVzmv1rVtnckfAkfJXi51N7YXGnvPZrombpdNgh7bRYasPQGpT",
  "key5": "2tSNMXjNDripD4jB38dpNBAUYtFgWR2beaMsBvZH3ZDot1eby7gAcJBNU3ZAeZuNUztPmSH8QpoueafWAAPHaHP5",
  "key6": "5ne6U8YADfaFLEPRbRrAU2J9WUm6pGi8u2sUEfWcFtwcbbUTrZNXDWjXfDeUn6xmVcStwiT5ApebahaewrsfCY7t",
  "key7": "4rMQ53Tcyg27sA9oB8nsCUXFKm7ZMFzhB8K6BUY4iGYZgaqiaBXDPk2MnfGEJnBmYffXbBGWU6NTZ438HduScvka",
  "key8": "2sQUQovX2bKYxTgH4wnihjbTcQF84tMoNsnuVooZjQ3FhKoUiDyXxj3butpbNYfrqS8XuKERessSh9aM5xYDkCd8",
  "key9": "4czcdtUiVUJAjNpnEtg8ftQgzbdYjHriqQNKTenG1gXDDA1JWvs8mcfsSq3EELeUuCADmudy2PneqkN599K1Zgts",
  "key10": "A8kDTGQpezqPxBmvf7S7hUnvbzv6Mh6MgV2pb7LsKbqK5tUMsBkzNseH3hBzG2XhnqrbTG5uLLHDEK9b44NBHZk",
  "key11": "2VLkx339g4NTxDqNhegZnfKYYpu3AwUZgDpvnsc7BSnzppB28m53FBXJjccdcjNqxfddMLzqQRc6j5oukF5PFpf3",
  "key12": "4RSs3oyPnpgREAuTutiwJ3MkChYNcraEdantXhRA2V5AWHCma6c292gqgx6xRYx9vAigBXmmU8sWpN3LGt5TSHvn",
  "key13": "2u88PBgoWj7Wrz3ZPFkkTPwWTjJczYL9ZbphwuvdGimJCh3T7fFmeZ7w1obcE7TNsFy9r2GEZBHZSHt4jixShyaf",
  "key14": "5DGyg9ZdiniM2WFYu5kVSVEAkUCWLQ76FhUA4nL7NvdDux1b7kpHN4ZfCpQrqM2DGSB3pjYJTGfUzQDXDA1gDj2f",
  "key15": "reTpTiZCo1mj3YHgFcB4RVAmrfwhMipboX4sMJJ7123R8mSYH9W1T8k1AVvMprE1T3zJp3nxrir3SsUcriJJJPo",
  "key16": "3nBBhHWZ5gFemghrdVU43sfTwfWapeGyLbxSmr6SD2T1mXwDaNTeHV2fWH5ihbQC4xY8a8hmnUyGMtkwdYW7nS6A",
  "key17": "626aoohMo5q8DBzbW1ax4jjjatueo2RJKRxTazjP3ZbpeqCanuXZVYpkAVN5SReTV3RvzMGdxGj8Ky48gPAJDSn",
  "key18": "2CmdQqzzEaUXd6JSYbFrSfuWNmhKaSdvP7CzQ6oHpYgLdEV6Mmzuw63BywrZHv6yagKNEUiMMe5B4DZ7PKY89cdS",
  "key19": "WWjSVmXRYgZmWpTgPfb1eVrKeGAyGcV1BNpUKKLJ11XEgWQaMZYqGuHs5x2pA7MinvzUTSNZvcnG2T7evkwwrFg",
  "key20": "5bgmCgPB6FemBJn4P8GdZpesXHaEi6c1KNLZMHSLUyfMxjzh1N3rFvYukzDRmT9j9yfSEwGgYmHYpPsDsYPprAfq",
  "key21": "5tCoVDPkAxzoqEwxmPGhGNTGbyfLw419z6cAZCCBNf7AiWkMA9N5xjgWEvmRcoS2TN5Ngq1cqxgNo9aXnmtVEN24",
  "key22": "6mYnpU6cmdTwLVmdXsrCxBrWj2X8wWK5MkWsD6m8wtJgMRnWX3GBSkJS7DAqMoQfmbxdXxbac1nLUfHRRyfQR42",
  "key23": "2DkJatLj2R4QcmSRQeWb5Ps1BVmomN8Aa148ZBdjAJksd45eAUjLk5HY6L9acRXg9yidERNXNNupK1mrYdosiBbv",
  "key24": "23VuUrVLjs9agruJkkzgM23H1mH1E9ZtQdAHdqXrghWcWYESjzZfN8k34QVUnRzJdBXeSY4Asbr81mWukb4o5oVL",
  "key25": "FtmyGkG9ktz6orofgmQwCpX4BhxPuirK5tetUhVyBKyhZ7ue7uT9xZrxJWhFiGDv3LrvtH4sd8STci2XryeKFWy",
  "key26": "3rigGMd8bfV9EqV6zBTMufVTVMYjcRG7dZxVMaZUwxzuEAvWZFA8Q9C4aAKd4v9MicXv7ARfD5jVFFdq1jBHpN3F",
  "key27": "4ibJDfox74z5NEZzA9tZAeTfpKYksLSNimZYRKEzgFy8GJTXCpeGhcKc5gh9STbZ1XppPVjfAPKKN4E4TFRBtzjx",
  "key28": "2fJ5FZrNy9e5u3M5VHbTChhKdbKHtCh2KxCuNTbKFzVBwkiySKZSSGeAoXsvBYmjeZFxavztUcaR5Dgs1AXJWBNp",
  "key29": "5mFQnaFQMXX3PR2naVDz7SzsaYCrxonbm5YAuo6xbA5ETQKq6vWGeUNTpf22SfTVg6BgEMHq7ocRx3RpXLD5UnXT",
  "key30": "4rw4UMS1yzNUTYQM6ZiwkWbSn1NkeLyeDFcrWfhMGDHyKdYaSXCWQJRtJVMMdAMEag5f9XjcYzLUtgVMZyp6QsgW",
  "key31": "3u8rJ6MwL2FcD7Yn6eia2Ad8mzZNbRb3uChsEtErAAfHFgc6DHzezJBpRFAswbBLo39SDWCWZrnnLwvnDC8FHWtG",
  "key32": "2Pu2GYcwu8SZXdDjcBAoxtMpeQPgDtXrZuDSmhkRE24x7KKCkExmSeypjZgZx18HNLJVKkVvnqRPJ2tAQoj1WXku",
  "key33": "RXnEd921tVDZThjXFM79Tfc7Amj1m9ATice92E2N347zWjMnYrXm7pL9RFr7Ty2Pzfv53ssDSHp8GktX3NpUbAo",
  "key34": "Vza3tRQkyZ5xfbKYYrPdyn36WkJgNty4ta9jfkoTgpEpHnnVmhobMDmhJSHkJsW2kG5sagznDs4jRECycB1hgXs",
  "key35": "36QygUQSJwiGC1LJyPohmDzx5QFrYUgoYRDq9vS7zRofqsb2TUFcjfxpNfQBe4X58VK77dB3hEZuhTQxo6YBF6JM",
  "key36": "uLwZyStakoji7JshtbGQqikyMmjUurgBNPKKoZF5t5yq9Z7CWGzWv6D4oGkALmLFNxCL12b79b6ZBQjqDcgqDFH",
  "key37": "3RCJ4YApBtcwEe4QBz2MTqUkik2drz4UKfzLkHgBupSEhcfyBd8jApTnWM69LQDv2HN7hgqMuoNm3xE8WNiPup7q",
  "key38": "mZyEmyn2LUqDAahp9DtAadRGuJwyC3PzUhKLSbZtGyQptKUREg3PDdorpkmStKvnsEmqyhM9t1XB3n7KPAcZd6d",
  "key39": "4ucwEzs4DJdHoU8HN8ko1rtSCxfQGcLhX6DpTq8FxXwmUPut4c3xS9SXz5uVyR2dzccBd6xWgNjdnGN4XEqPKTsZ",
  "key40": "PQFqw1Zkxvuy5cXW3uzk4K4w4UEc4896PxEZLr5QzPwSSc5LhS7dJnuqx6KUHsgM35HWUdH5hSb7yAdAhvFryVQ",
  "key41": "Jw92HiMCeEo5GiyeAyZd97R1X8neT5XgcGBtpvmReYetAz8tNRBcntUtEz855X7Syhq1Ep41xqaa24QrK3ZqKyT",
  "key42": "4jXoHHjTRXCkJd76HGz7Ls7nK4VTubvSDSWKxwtgkAC39PppAy1FZ12YYGGUYbKDcJJjUHM1kYwHUc3zaUDNMhmC",
  "key43": "2nEYKZT61uKYx4U73gvRjPkwSWyNkt5mHJ2aRHDVJWmSg2waQfPA1PKf9uEcqD9aMg3gJk2kZ9E8drwp6fc4vr2N",
  "key44": "2BTf8RDHm6KzjixLk4ZSoy7i9yQctiwDnL9ZWRHSXuMDFx68xenyEQniYVoYYoSAnJUXxzSaKvrwHSfDQ8YrMtDR",
  "key45": "2CCm7RngAHG3JniutXa7xaF8VDAS5KBL4uUnNpfe2qN9dZPs44gR97N3daPGp9cZS82VV1goquzEKLpdJCVMCGoQ"
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
