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
    "2NoLZ1AtFqyJ25Y5qSibnxQVAaYEk9CSj7raPowzWsovou3h6PWXbJZ8JFMuuQXd4vWG6MWxCN7eTSTYQcx15R1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HCKfKAhyyDX49isqAUFzx6zeQgsEc3cjAiLzhv1asK5NBn7toT9eMxZVoF5fjhLkyqaP8WiXBWa2xKYrP7rRRTJ",
  "key1": "3xwXnaR5em46qN6PEe7QmHZwx41RekKJ1xPV8hjpGWAHbAGyC1NSmjfQ8k8qcQCksG9Tx9qR1YUwy84uYjjf21UN",
  "key2": "3pTMyjbb88visynahAQWoTnEz9boozXz36fDCbpnVwN92zRJSGQx6vfkSGAtfrWW8YFBtvTvYckDCo3t7zGvt9vw",
  "key3": "5zGhq8KwrkMr1hm2jLczp3nf55xZT3CfuLTA2f1AVNUdf5vZqMWnoXU49a6ScDmoApwsnPZrhuK7ttdJHDgiEoMa",
  "key4": "37YghahsPi6EvcFskCx7n52MAsRSEYr7sb6Ba5RcUqf3X847qgPx6iXSBLx2RU2Myv6aMr56rFDgvtSNy4WNpa6r",
  "key5": "5WTKFBhKMcAkd7idKNcyx4sqkZLcKUZY5pTKmGS9DZUFEeurWE7tiXD1RDyyG8LX4GcBwmTUAhzirhXLQFnfK1v4",
  "key6": "4AHeFFtL7Nu7rc1NaheQGvrtanN9S7KjUqi8y6a3bdrzrKFvARsDmELiDifYxLcGxu6UVGrzk826sBFUJe9FrtbS",
  "key7": "3m8vUbX56xdPyeQj1UemyTedJ6k8mx1rRmKtGcpNMyKMsqV7tb99YkhqhwdmXUL2pfpfuTx6Wx3LrX1Hu2LRN4rd",
  "key8": "3zFd3QEuFsNzzQUFMzwi5dSVCu1BjdK4mu4LxSUuEEpTJZdbu1vtraKPmL62zhnVb6ihxnzFMtJ6WiR2oWwMTyzF",
  "key9": "pQafjvSrXcvmTSMQREvRy5MfBfKGrc2njtzFpX2SaTLYKPSmutLjG7u9shnN2JNi7CCPK5NhLS8zsdPKWttLpHC",
  "key10": "3LRwLvmaofFfe8Z7muhTdxHJQZtoXFVK6asgnscoWMseJoTUQUep4cXsCB3NM6w447LAMtpBrigexXhxf5RqHU2c",
  "key11": "5u8UV83XeNEdGsiBjeyqBsYMRbRyb2x9scZMQYuVrWkJCx1Nwa1mPZvmww2jzXy44EteYpZ9SophgkEqzkypWoXY",
  "key12": "5VW74maZVoNhddPrni8gzr5hMQZkLBsjkrUSMkkBqmToUQssEB8FdmBG4xonLRtXtfPDwhCdmdNNVduUpiCuxQST",
  "key13": "5qHSZM3bufJQrGLVEH2iabgr6gUL9fQ6Jn1jKixgL7uAhQRQx9qeRFKHnz1xGUg4rTyouotgw767nSUQAt22v721",
  "key14": "4taj2F7SVrqhPCu6vqUNDDbHSCvLz7XyJZeRpmcFJgzbNyFreDtPPNxv528sgULEHME97YQjXhZYBJXvQMvXnJjy",
  "key15": "XzpZAwjHBsYqXYQffqcCQTtPSEZGWbNXMrfeFZW4EWATFph27ivDMTkq9sMTxLw8dbCb9sn2cVscFQZ5o9qNLyH",
  "key16": "4qp6UPwaS5nALS5F3f7LdakC2VUFerYbMdSh4TgSaDYLwvT3cBTPuh2ARRHmCcA4yQH6AZwDaWCLxFLoE3sQnaGt",
  "key17": "5LbF57UqWTviXp8MfFWpXKPqcGGvDESpiGuzDRuPLgtVnJvUGfZ8MKH8MH8g7jn3FdFBr9qoQD18pzG9Dk24Xqay",
  "key18": "4D5R3vfmgNRMzG2EjVVvDy3DATRmRdMVWfevt8knUxSyYfSJAVmdKauHQAbkLqnT7xJmMv3ZVVS1xHoAoaMwPvZv",
  "key19": "5iT8An5an56cCejNiMYtEi226yNukLP7mQZCQGCYZvDgbsjkhu7uGBsGXQ2mL7VviDZfsDViZGUmKY5Gy7fZvWUV",
  "key20": "5xxe5E5Fzc64Kzu2NXdZHJnLFgcbyHbq3iUgVJiGBkeLNvaCGRahcoxBkGmueS9hPNTSngr76GVD6id59hVKvEcB",
  "key21": "2SGRNMm67DjHcLFY7Gy1qtaSUG82Y96nrUYtfyrbdXXKJrKXAg6bbSSWF5EYkJeMEkPXG7XbASaVZDq2cCpmSJkV",
  "key22": "4gpKZRhLmDi1iKzQtwYDLkQVLSDYAawYVrvGU5RDd5D2sVEaf7WgMsXn4fcLcG5DsTVDjwKqRKtzgLKt4i22rhFx",
  "key23": "4cFY2G4zg2v8SuEBanCUvAafwP5vTeiUKbc3V4rUR1x1r9ntKnCw2mF7YQxbypopx9RixcQ7rPzB58U232Moe3Sr",
  "key24": "5nAB3paeWWsKbzr3uTaMiCqooSyE2EEWbVgxFP3WLzMAtwYjkRnCAntKHT1Jipf59BeQWbgwy7za9uT5jAoesZo6",
  "key25": "2zFSqnKYQJ3LgsCHUbNp8eaiGhoMg4yWx8doYdxHK5221PHTSUG5HkHY6JVFDdnqCS1AVLsaNq951TjnJLBiA3nj",
  "key26": "LXcs9eJNt5dcfB8NvfWBzgvZfwyyQjgEhfRTst1e1URCgpDYbrq4tSHwGKzBjProPw79RgkgCbJjr5w17B97tkb",
  "key27": "5xyVRHX6azFAkKHPLr75TmSjLFPRxwEFjUQBMMk3x6ScRHRLycmcRwiqCMKkXsgyUss3iK7BBp9bTsmwkFd9aMLb",
  "key28": "ijySQahZYzow1sLezoHDrLL6WC3GEw5FvQG1265YncVHfnxonpR27xHKrnhMuEoj4UMWW1x6qUHBih5MCMtMsj5"
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
