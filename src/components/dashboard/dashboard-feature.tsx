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
    "zaRnbV69drjoXMjvpnebdwQr3q4cPbRfS99UY8Zq2sQ98sUk2WcEwAaNnDkcS4ax8hTFDHTFfeJzWFKkdxJRcyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YydZXkibk4Gb174ogNJb2G3gVPEcTT9f25mBtMhrJrTJLSHj8x5o12GVo7EZZqWkD9hN6kBxN6cw13xbp8mJaAE",
  "key1": "pk91ZEhgSVhMJwHQEGEbjB3Rri3PWrdkYs5XYutmQKJetJzmpwHMQrw3SAVYxD58f8ncWVNEBZ1ZQ28rCYN4Dgk",
  "key2": "5hBhzdohAiY1T2KJhwCuhs2Px3R8MagRFh62DQRfZy1McGfhEmNPDSkqVj3a5DTjdDvJbCSLsfJVuXVtKFiUMEhS",
  "key3": "4dQHerkPVbJNX2QMTUusRPYc5Ryh6Wnbtvzfingk8ErX2Zxz3aJukycAzSX2qv2W4z54gmSS7mDZZ8gY9Yq42zhG",
  "key4": "2BdgVxMqe3hPviAWqoJ6ZsQjSMLdCTS9GbXNQWQgut61fAj6faCVFu4WAmaA8BDMqTXA8e6vJEsBwrfnSJMZ4j6j",
  "key5": "UyxgDduekd2QficNsW1Vk3oshNaMrEGgAtHLqk52C6HmCRcKqXXLi1RynSf96SB2VX8ozk5pi3DFrUQPvDS4FCS",
  "key6": "41UEoWR2fjj5XDMJQUq45BmjXN4FB2r3qSdi1ZZxd1XSPLrrFayjgHEpzjNVLTVvm4BAv25inedCxmisbduBJzW",
  "key7": "MC6Qt6XaYANX9bHGVJvHbpnCCedj3QyU82aECjohxB84Qu5HkwVKuPV3cHEzPo3RQLzu7NUk1hg9Xog6XetvwUd",
  "key8": "3y2s75NijsrDRjnDvWE5k7n8ZB9NVmiZahmryrdoNuhUEa3u61Q5Mi6xPArXrJf94zPk6mqQGs6P3wYoHTYGfN3A",
  "key9": "45T83kzR7gD3yUGq8V2WUXcReLoU9wTCnEtgiA5LBQ52N581LhxfZFACCkJdq5KLRWN5BnMWJ51ofPcm8y8oWvbN",
  "key10": "2PVWCocFNRJddra9XVjYtDJ997cYY6RXGK3X1PYCWxqq2hAzC9QexUUoeVW55y9du66n29RAoRP4KNTKa7f386PK",
  "key11": "3dJYzU1Chmt73JkrkqWByMVPi2LrXtLBX2aubx7KCdhYgoJCNzV4nx6jpWZj8pgTUwTUMYbpfcsLLgURRyVruXF7",
  "key12": "2eDd4W3n2KQ5rRWgSdq5fH36jT5e7YiiVCmV1Q6Tt6ohcyUpAoNiBg2WTm2igkYyjYEQCsrKSZaHpB9ZSv6mUeWL",
  "key13": "5R2eDLseGQEWG3Kr1xHD49tPjRNbpwz8VH8QcYLm1t4php398dzFgSgyXbWa23FvSfY1x7jh1QDcfeH9r9ymXx3F",
  "key14": "55KHkmswesWR8aDEdp8CicwJLsnUqWfEQY6v1MGV4opDErFMnnzR3mnfogDpJWtPgz96higvDyiVgMcjwVgkhKW6",
  "key15": "3SY5XseGU9dWJHS9kUVvp15Rb3jNvzQNhAYTHGdrSvwmGV8xiW3ZyfETaExS8kpBFkBGpcdLSap4nY7kH3hMNLma",
  "key16": "5duP43soN7UjZf8q22DMp6VCNHd4yeKMruUXDgunMi86XLACAbx9wX9SXrNLVfUAZHmXLGz42Kmp5a5ykK1C9hx7",
  "key17": "65U2bRBF2JiHFLvZZUCNJy4bxGguaV3DXr5ghhaoDzBf7oCVaX5To6fvwjyZJtSGYuxJuMEPogfN3ed8dEKGqhwa",
  "key18": "2iXUQTHe2JaeSLPidHTKCfNdKuTKpFmBcjpSE8u3np1WDfN8JaCUmLevcPeTX1SVQkxanBoAg1uPdEKpdzX7PzVL",
  "key19": "3djarutJrxqaPkGLzQ4d8YxeNnw24bnt52332WeWUbGUHr1nU7NdNQs47X2ifnWq1YoNUzD9e5greySvnTWTT5ty",
  "key20": "4M1cj3CgaK9nsNmRKZRyzhQvsERB1YY5Yssj2tSB1ses4ebVbo1xwUDrgr2hV5xWoRz4yvqCzmhue79U5pErnYmX",
  "key21": "3W2HLMk2dS4EwFDB4UFn8B8PZ3kCok5ToMjGPPzpQrBNquos4BAWv4hx4Hu83sTGsAddLQwAkvUvDFNBxSFzwjA2",
  "key22": "4LCCGdsdFfJctcdWLce4HskaYKx68BWBjoZP9ARwj6c4q7SV4Uju9svoc3L1K8bwS6yVzexWhPmQh5cL3kA3kXCV",
  "key23": "2tnFefSrCTNGAun27ws3AzRZoyy7Q819wGQaFDHzvdqpkDqTEkneaRjzJ7WLiL2Xg7YiTxMKfTsZ8oeu9ctZ2cTT",
  "key24": "3ryf1EbQeDMEMrih42tm3827pYVkuWMtxveHm227GXgYiz7TAU1WB1BzGJ6k5ZDpRRJDHTs696DAY54KAzMkXwAF",
  "key25": "oe3ahT75VqwTpJPTVtoUNxf5SQHMJJyHgkhqjv5neMoAQcvr2SQF6WAhjV4bT6cMEogJaPZZxhfqRRgsgTi1E2Y",
  "key26": "64oryRwgYshtjPHR7LSKCmt5iQrd7KqKwZeF7xVi7rLa9XtHrn1tVPMEos35mTmb4Cgt3epAsAfbio9m5Y8mU5ZF",
  "key27": "sf1feGUFFHDSphPWEpkdzysYVc6TyWivQHYNgStA5T5aXZdKVPrbu9jtir7scZ3DkFuZcL9ghGpJ83GN5po7rUw",
  "key28": "r9fnbWmVo3DKaJwiTJKxqiCMQ1d4UQb5a16CBXePE1NF8j6wdeBjyXUCDuwLEsBAmcamumz4NXz1HZfVrPetswD",
  "key29": "2jKppadEe5GXD9vvb8Wpr1HFJPA8aBfyBuKkJsUSXPvMyHaRxqkiycfRhzMnJb8iCyDNfXfjCtWVr6bRiv7UNd8S",
  "key30": "2qahd9tFx18zLWgarB8Ts7VpCS6ZhfJaJLhy11PQ9knXSSNaJUQrXsN5SjpcTmYEwik8pKJr7B6XkWGFh5PyB14S",
  "key31": "3Cpdd8dmCUkoin7vK9H1rM5MRnVaqvxHEsfUqgxNUXBY9Rvrg7WxeBwBQ2wKLUNKyNLuAUj8siwrZX4TUjFSAEFC",
  "key32": "NvPU9hY4R45fpri4FTMZqNUS2NZS6n93QYvHoYUmJV5v6hKgk6AUzsbLWhKNuqAxnmQZjDirfQaBZpSmmbQWwZm"
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
