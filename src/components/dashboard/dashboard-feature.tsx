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
    "4aTLa2vFmGyKEaASEQ2ZSiKrm8TnthN1HBF6cNzRuQqUC7bR9xBab4dRdd3vwu2uk4hbiy5uNvfDuuRdcrXAbuZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dLQX32UPYs9rsRYsF4USUHuhNCrrH4HKWWputzPzjgbbsQJ9feA1GiQrDAuPMYoUmntfkMvTdTMNyqppAJdzDjX",
  "key1": "66ZPnusTB99U8GiJiDUs3Tk7FzMzaQcfK7dV3ugQsjRKcr8uHviUzKRjxJJc5Gdy2C9BDkprE3CFwGia7NLsfb4Z",
  "key2": "5x26gUAtxMTg1V3RFr4hGskKxUDjDebeVoqgyDXWXZZ6ddfXs9sUUfUKosJHk7gf1Ji5Z2tK2VGZn1bfKda6GGxp",
  "key3": "3PqzZDgTD6ZzqykZWRdWwAUtiusrT6agzNz9HuBNDSJAuzyXp6ARWhY8WLTSDs2GUya7JQumhYSKoSLycjSLQ4TC",
  "key4": "4Gd499hb7pdksMqsiKNhTvrJNGFpXhWTQ4t7BaE4mjdtAsWgAxvbAmePoFVnecjGA7ZA3M4LbBkeVExCKTVaPe9h",
  "key5": "4RYuCABScgdzZ1CobrHNaXoRc6DnSKR6bJ2cYf9RXbEQuadvCWYGExg7tKfUH5iCL7RdnJg25RTkHKDf5DQKS1xB",
  "key6": "5ybrnZrAFWGzmtaERH9gDCccKZGgMcSbSGwgee8FvamkT9BZBnQkQm54TAUwng7R3QRubqvaodfhVx68iG9TyoYo",
  "key7": "657wPRDmArz4aEjgByyQ9S2HC31voTRjZjK9BZnkUnyixzJqbuA6yQSTit2fhzojTiJmccooTNG2CfAgaTef9f9y",
  "key8": "2RwT9znKPJ4FmbaoefynMYP6ke8S5XX2jhNWZjNxgbeVGn6qbvCwdVGU5CLukJiBxfjzB8Q3AQqdD81uWCaCMK9q",
  "key9": "WS4U5LehRxXLWfiHb3u8Vfx92Hv2XYeektBmQkPuFLTXQK6AW8F9xTHHzXsSq1NppAKJNngUkkzQptyaWPiAGgc",
  "key10": "2bpfbeDtS9Pj2fZozE7zGL2F33GKKM5BEVGjYDrpAo6CRLzy7YbNMLnmgpfRFQPNHK94BuRiaPsof1uLkBtBuGFQ",
  "key11": "7AX2e5qvLTQVb8JKyNPUbphc988E1nYru7ijtgh4qZmDh2UPfb1ZACfQeUweCnq1dQZo7eCW6eieCCZ2bqhGwUq",
  "key12": "3Qi8GBnCkXue3RjuD3oWo5eEUBQfu6paBgMGht5qLWoK7ba1SRL7GVqSuWh7CmH6UPPTaVHfCj2tsG1Cr7j6w3tm",
  "key13": "3Mg46c4NUQDSZeFk7Rukzm6QDh5BcbJev3KDED7FgDytLXb8tU5NrPbuETFX2QeGgDkcv8nm44SjzYhSTRuxcnyE",
  "key14": "2ADuugD5PENomfsBto9cLGcocGUN2LiQXa3GkZKHxGBgsVDw9ZanJ3ip75rePECbWbqXVeHNmqQ13J6pGezVBVxQ",
  "key15": "2haJ6vTomgTMoPriR2t1tMf7Wf2UJZmFyAnXSfgvBJLnM8St9j5wzAepiNoDxV6XwN7CemV7xXXKbyXWhbXx95m",
  "key16": "5eVApYGTcviL6VCb9ULHhboKf6hr7V6WD3d8P69EQvTmeAsxXi5XLzBLHNmoiZ5VsFq38jTucuZjtC1YagGuvPFh",
  "key17": "5j7PXHNxRPm5MxKxwtc1aELNVWCTFaToEjHpuqye5pHKeNKbjNF3dkavuck9fVvcNpbnZGhQGLD5gZJQrZmnbVTR",
  "key18": "5c1z5P8NVfAsyWGfQKxTccsmKe2qzXZtkT3d7o6rxc7Uo4iaz6wKbgMx6Q48tMnysorSrYhEkGs1wH56tXwdpCQE",
  "key19": "3RVy8777GYcVUq6k4Mbf9NhZJi66c41Coa8LnUZfQtF61YGzdSfUTDeBALTa8ChpjKxsmCKfKjU29aZm3Q2aruef",
  "key20": "3urQ715jAeonCyjug9Tt96Vy5zi8PkETsL29V7rQqvyfvj6hB7zzQfsY7fB1cFHujcsQKR67WrgJtXjWsTVBtU2D",
  "key21": "5kB3iM1YBYuTj4Tn9fhS8SmcPQgvL1hrVMNuEGkHqsNTBDmjX2dZmXPGTsrbrHJLytsix2CZwhQ4Db3YUBpowiKd",
  "key22": "42dy52XWPPuQpHCuQyWv22PeZ1Qg7SVmYLPZtQbt7nsDZxuqinwRGRuekVVtk9MymUjNih61GLisWSU7yfneemh3",
  "key23": "5iCEPcL9A1fxKYdp2piuNUiQxFdJLkDP3t62WUjBggwzDA86NWBLudhBFDCTfEJ24FfvQusq3Hi4MkBCo6y5i3Wq",
  "key24": "5iLESRiSPTjDDpmuMYqjWMrFsWSeZtQXL5Mvv1cEXzgX1eNGcBeSHhHRmGhDBjnqCk76a1ZQYQrYF6UJmfQAPCAZ",
  "key25": "5B1sQC5xcpy4qpG6aQgNdD6JUXPT2itpmFsGUCwc9aPASuVoCmDF2TA2f23kMiRb5sQ39tNyw5NsBFhSVXpbdNar",
  "key26": "39QYoFuTMtpZ6zrMgwExDgGzsGvpsG3mTq9UDqg93uAXXULBxXRHHR9UtjDJ2RgYC8fEymd7bh8b7BHhoxLJsqGE",
  "key27": "3Qeko4S12iLLtiMzdJugEmyUcxzAN5nyXg6uwqYBYY9QR9eZ2KxPjJyG6h2vKMt4BcfcNHSZBApW13aC3y1BugTm",
  "key28": "4WvYmXBLVQt49vxWHaRrxQk1cFevJ8WCKCVev7g8n4H9e5Efqr2Rco6ih1Lx8fGCqDjwq6QrwDcfFRWp1TaeBDqm",
  "key29": "4LvehkKqWECwztMVrw9cPoPns4fN6AigWxc7EmdkALBg7aeV8R1DBmttst9TqEsw6TUtnjvJdUDNcMyRKXs3SRTj",
  "key30": "4WAuayRC6paEt6rfhdY9g3tWxFJpg5LZ6bSj51BRtYGfpqVEsFMJsqfABGcU7SsWKMrsLwJuK2NDfG35oMAxywPh",
  "key31": "5maLcThyD3gQamusfjFYASywLmfFvLZ6oRkHXRxHwCLovQkehkQCwsLSJip6uUV1G9ucyCVPYQPERDcfGuWAT9iN",
  "key32": "3MQrjjtr4Eqfbpw9XYqYmfpuYvb5WEFCuPd3tJceen1nBbzkeSto5WXH8eNKCWmCYo6fPajP22VsKawkspJNfkZW",
  "key33": "54CtucrK4JPHXQxwLLKWv9iYx7u262qmzijdfeeoTy415UdesHLoUYkMEpyKYiVGJ8iMDXFDoPTcfoMgCDxeGhhr",
  "key34": "4cMxwZXRTL75J6dWuiVe86qe4zjEvPa9qFTXzPzTJ39LysHE7ddkLEKMTzFAugy4Xvczispz7mgoSaUTe9b5PBmX",
  "key35": "5KvNpjxadVgK2ipY5nQt3d6TGfaW5ZHGbJiScVnjJuAaH3ytdBZxnPXCLwq8Rp6FPgQHpRi4pW5S4szEL5LN7Rqx",
  "key36": "64Wfm5GrMuKAgPUwdfFJAS1g7BcD2bxAA7nRGNHUDr5vaR8Y59KCR2jmTG8owUGRhy1dpcBBKhPX1gbUcnSdXBvy",
  "key37": "4NGUxYTVd6B4nbPxk6p2VRZwpLa6dJPaSvonhDpUfvQGowff1LWoDZNeywh3moxbUYvGRi5pU7CEHut69B7QnT9N",
  "key38": "5S8cUyUR2zGR3YgBFv6E7D5mDy2PnNjyNS9r8JMwKBaYdTXMpmoXExmLXP1qiZXBEsmmuEe7KLT6NyeU6v8QsuVo",
  "key39": "4TmdJBgu9XfYNvN7Dt2QZRB4BwqGznqJAHUwgmFDHUicZ2dpUmfs4YEb6vRyMAy9gWRkRYa969WuvPkJY5KajCYH",
  "key40": "E2VjWGh85hHR72DAxCpiwqiuMWwkiVoca3Ve2gY283TPitqGbfUTB6F3jCmCLX6AAssqVQo7a3Esnpe2c3V8dNm",
  "key41": "3LNZYc2rvLoQJvUwakBB796Z2jbjJxd94WvZ4FQ1kcUF43RRRcVk9LA1Hn8pVBNwucXsgEu1pdE6c4Tf7MCmwioW",
  "key42": "4LC2AjCebNrJrRm6CKFoNPfAuZ2sRjLa7y265SynWSxZcwH1p9Ff4g8Y8HzvznpE7tSGeThL4wVmhxuNbjdfecYW"
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
