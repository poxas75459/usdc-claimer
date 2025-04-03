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
    "4Xf1jwncfPoHMuvgrpdi24ZUmHPPvtNFW7i8pjdNBcxMs7kG5KcU9cFGMzn8yWXiBiK5HaaKGKwjYpdAEhM3ztv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kRjpzHkExNqdXYs3X6QpvKiEmr5GorAzEbdzeGDCvNww9tMg7T4nwjaWcuCLhKDxLgcB8AR4rKUHdv6DNSd7HQE",
  "key1": "6zSLnQ2JG8fnQHAzeLtotQs73zV1z6fnoTWBpxdMwdFM2ffZBCKPdhTSd4ikR1GzuDcbaZbLnk1M6UqXGMyNxNP",
  "key2": "2FTT13fDptftbM4FYcxpfX1kpL4oJTw2qUgSF9T9xL9SUNNkdBQ6LAgcu7u7Dg6KCW1eWkAPsYSDWGfaExTbcfLv",
  "key3": "4WCebTyHjowzkc3m3eiQo82h2HMdEei7JJ9w5wudfVw5bry6Uzw35hwpL1EmQVVqZoNzp3jK7BDEQdX2PWPmSaLn",
  "key4": "5RZVvq5yJPxJgnYMuNJxTcPzDzG6oyRprRKL5bNxWKwt7K7CW3auibzLpdaJg7eacuVamS48pNU5xg4gB4i2PaCy",
  "key5": "VjtgLEi5s1tXAaCbYdtt6MFSxMN2S7VhAmimGwKXCHi57M2MrNjbthGLKcUESAuEt1tVPLyeJDTwSJMA6xZPWqS",
  "key6": "4M4BFpdw7mgQ1Vz5MksGgfBkCCe2V6ZeaqDj3AbMaMujrC76eNPsJk7ASgVTU9bNuwnVKzuHbVSbooCky5fhb7t2",
  "key7": "4NH7GLS9zUV9GJ1dYTcrhtSKsWP7oXy3ELqq3N8x8VhLDL75oF9aQvYAh3bViFRWK7HDcBNvD5gTTXGixZsV2nDj",
  "key8": "5wHR5aus1YWVQ2Ki8HDXVJH7X1kSuUTJUKenZgzAT6x2sPez4jTNLpjWPHiTRSbX1ohmeL7Ag6x675GyBVG7S3CD",
  "key9": "2aH6NcWHY5SmUMVxXg2XKuxQBBmVG6gaqCDDD8Ymhq1MHCkB2gjzmuWsBjAMq31igjU3HpucMQqQ7mzBMwmKvb4k",
  "key10": "v1x1mmMeKyvyMDyo7TzRXLM1Cod7zbKWUSXxFuZEi3ont3Jy5qDVYwE67SQfoKoB7zr3TA2qD11s9GxTjLLhumm",
  "key11": "5iirBZ1VDx1xkxPJKRFzAAZd6T9wci7N8b9SMt7JuhMzbBuzjv35MuTbJStmf7SyVNZCBpGQaUvRNeYJxXQKAezW",
  "key12": "5JKt9T1ckm1rfeTYvD2nGRDi4yj85km62FX1sbDffB1weeNgTQjQU8bwrUEqMp264RkajuBGaKyFZCDjK8Yt2KFt",
  "key13": "3JyufQ3HDtpTXkuKGugcLQ1FJErNcwBKoXPFEHe58XTg8P7aNYudkmLLSci1iuFpyErmTbus3z4iFu2ay88bbFBW",
  "key14": "29QzZBbGmfVTK7b5LF7wKmK5VcYqKV2pMjdMCPBaFtoEK2PAeciZvvJY7UNdSYDGdn8buSpfwbfiUD6zk4DSWfD4",
  "key15": "5XGM1yLykqBSsBxYgjsxbT9cfJ9hQuWMiqYw4jRZD22QfPLtETrSeU1qoDSVUAWNALzNPvQo6cKnouqTZ83m9HvY",
  "key16": "eRfK7KaXjga6SKzc63oXMV6731N5g4fjFBBtG9Wm2RTJcR2THQCccg7ebkWB7U6zeU1AcUN7hbEJGt2b2id6zVo",
  "key17": "2jM9cJKKdJXmxGHKTnYqgLmCUbGqQq54UhEeLxUEtCEqinKz5QRWqL94FVfQUHpNmGKinoQLsffQSoJ7PqRiVmKq",
  "key18": "4cH4pRGdUtMApeQLV1w1pMAGp1fh73go88eGWS7fYte48SpcFS9U1Lhnz6YF1Wob1ZZQmkg8Cxshg77c6eQAN8CG",
  "key19": "2NR8qzUgCnSk8H3beouAW8V3Xg41N62dKNQP9DUc3FbSziVtnRh383oexJvC9TCGqGrnYu4LHjCHMqTDGtJKS18d",
  "key20": "Bq1vNqy9McSdXGAcmJH3RCQyocCioTTxu1GboK1dUQpmbsuJM71MGHkvtYNzpXjf4SHaRQr2t9g9Z9HKmKotDxa",
  "key21": "4Fs3dWKbQB4NZrz9fp2LE3XeXtrX2qWj8xEHPqcGwj6fhuVcQRbbqF3xmw4JJscQhYrWpk5QBhZdYsDUDRt7CefU",
  "key22": "okx2pxzBX9VsA76oQ5QKH6viJzt4mavTJFX2Txu5XJqKqvzHiJduak3DCCsiMtWDddrPsTqpywUjjbQhbNX7xGM",
  "key23": "2DeEpKZEFpFGZKdFaNorYZFwwZ47zpRoyVcHz6pEPLWUq2W371xVQvmrGrM9o268Kij1TFqE8qMdqcDvuB1qjxNA",
  "key24": "3bVQQdJr3X1oYpbkykDCRSWJ5gbsWw1LisFxZ8eSNgZxLH6RaZPMZAYAc7XbsNKxhipYNSAa5o8XLZTdLQFtq5mC",
  "key25": "pZttj14YFtJa2bXAShX7M6y5yVFQNc5x2T2VPQvZquK8E3CxwNdiWY3uXhPVAmuhnwr7kHB7PADqMSDEFvo4mdy",
  "key26": "3zx3n6H3FPLTGzUkKnNHkDiBgZf9JowPMiE9jbKVKhhW8nWz8Y8vUt25pTxhHmwwY5rTvgoLaxbGzHQ72J9AZgPq",
  "key27": "2DWSyU7M3wPWSwKTPdoxT8CM2UZRLdnQFJXtu5p7fYLekCPuCkQZCcs65d2HBa7PLBFpN2GN3rK71xm9vy984uNR",
  "key28": "4reapkgVcn1fcrFCc1KSDQEstKqYCcc1vusZqAAdRs3ibeNLP75pKDhrJzvkEbapVeoPC1uVDvA7mEFBTcVRwBdu",
  "key29": "BYyRA6RerpLfL41Abzwt1bQjA7LkktScXSmCu2BDxZmnN2wV8QAFWxUG66WJECYCg5uoTrsy3rHH4XWKjPxcdSq",
  "key30": "PBE6ud1PuJvs9kLyVU2R1gbBMWaLZFNSwaN5HxoE11g4mgiNsXL27g1z2sNFiSzyU4pESMPpLttxb1188pxpBZG",
  "key31": "hTe6cRDqxgn4tw3NNfHGajkd6dRXLG1j1zuqh13jLefjqLudM8TFwPGo3eRh4bgr9LJLpXeZKQ1fPzYRkXN3Ku7",
  "key32": "X1jLpBdxJXPT3fNnPQZtju4SWjtY92FDQj4oA9E33KAhBpCKjEZngRPGMenzrJFGTu2iof4DLb5dK2QzRbDKbhs",
  "key33": "3GkJuL7QwhUZNKDypbqWphZwWEZ1ZKCSr1bbxtEfoFGUo77Q2f5d8JhTrivfQUu4ZEMepWFt7gkrjAu1baTP9eVP",
  "key34": "3jkLuHtpVTXyw8wf7axXPgsFj6np3ZGtNJFDssY1LWrkuigCRxa5mqZ1AjrLzeDx4jcUuVP4zWwdv8dqFK8aiEvs",
  "key35": "9BzAUxr9stiE9Pm6ArGJRYw7E2QZr9xXWVYESL14zNtYvttuGwSmi7HP5ircaZ5tdAxt8MvBVyhd4uJeBKWBKnX",
  "key36": "QE5yZM9fJxd6aaEvjgCfh3hjJZxY3GYWLEDDS2JpJmAq3mWcWbapAyKHRpAWJznZpjWfS3YJyuZ3U5v6BjoNwPR",
  "key37": "5xkh9Qtapoog2PLeEhiUcMBcrY3fpHdXMcfiRNdcLgxKCBb8rHkpvTf8AfPmCQ8GY7ZJULYyYq6Q5azXc7vkceJd",
  "key38": "ggvV9Z2NeCdFDtYTp2zyFH9RkuVjJ6SWAUf5ueKCsLznCF3eg46xPe55gtm1LnW15w6r1CXWCMb1u4REmSc6NVH",
  "key39": "5uqVBXpTEAVPxYwNPgUNpjB5tYTYuF848CXsDTPv4MiT5E1P26PecRRTxDqFZAgh81DgLWxNSn38MvpWsmjoS9oz",
  "key40": "4EM9WYtkjeVPpnGfDqnuNkK1BsAuzCHPYtcBVvecy3cxEu4DPiJiU7rdURAxYRyBiRjPUEbG88qx5XPTLzhXrMqW"
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
