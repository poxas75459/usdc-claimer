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
    "2r2xdEq594T5jBiKjgFWaGPdaQSXXXPRB5DPibyYiz7ooCQtuzrq4MxKSj89HRQ28hJt2KMAwowCR8FGTHjmG4aM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48W23ifQ3JQkm1T53q9C9rtDaTJaFXJBwvSZCZQvxHBr4xNUhyKhoBpm1pmLXJZsufgLnuNwKqXM2GLpQP7ccXZ3",
  "key1": "5pidHShH5VrgkcsM7hQa8sJHkDTb5kUf3tH1PtfCr1ir3obDT76oRunZLzxxyjRnjzi7JgeTrZf3mjv9BNVRVuud",
  "key2": "5e96kAiVeLkZ4rKCFfNXZGc5XonRxtZuU6tBd3JzBQQ8neNbThNWrTgfkV4h5WSpxd1kGwVaRVN7nXrXq8k3GGdu",
  "key3": "3mMJ4CKLe4Am7FNuUNC4a3L3hWt7drgud9d2zWYgaai1NQbPguJQFkbKrC3EPXYboDuQUGW7qURUsR9R8nFS9CZL",
  "key4": "5SeZuQ4Py4Afi5SwuX9wqr9xD4h4QZizYkQnp5ogxLuDyL6p5siSwzVTcWF2YAGzALoe9q37v6n6MUep5uLkEuhu",
  "key5": "4VN1fVDtKyDtTxoZSbmYaiUqy57pZhQyWGd2CUJ2ZvSgLRZCL45Y1eYGsaaazxKpgDYZMe5XBKApaqVKvZft5Mms",
  "key6": "5wYKYxMdhykj3J7iump8XrJBoGBsho3dEyezeQUGYY4PWXC51pYitdbScAcDPjysk4iKSdtgzAysDB3mXQZohbpv",
  "key7": "4MARU1MJoirHp3VcrXdNfSvJdULn5eXvDhAuf8G2AYFHLEXdqwYS7DVTjchJTZhhGm9Sxn4CQ5WkT8zQVoAoH5BY",
  "key8": "4bLEw544CtdtRubepuRwhJjwuF7FVVw22coRegcVFGJTvt63ratkMH9KCmVkZKkdDCAqbiatuzKBntw9Hoyq4cJX",
  "key9": "5sSDyRNovuH7HdmVkRS6szLFHVwXgnxq8FcuhqYWf8m2aLRgbUjYzxvmCmDdP3ZJ4BU2VX9qtfm6DrHNr59KCaQL",
  "key10": "RzQ8KjEgoSdJ6tMZTLYFY2bBSY9o3cKi3cNKffZwEn8WvNzJZTtn2kE8wmnxo3N3LrUmy7XV1o4DYsMCj7TmPUQ",
  "key11": "L7CsC5nZec2z3K6dAvQUe2pk91xi87gBaR4gEDBc55sgEtGx5auHJyHRkxz7tLznUpfMHPx9T71CtFzc6hT31nh",
  "key12": "21YdjynnLcuZhNYux99hs2tR26nYgwdBccmW2RQW2MbedY7Cu9gNh7toF8tksfgKX7juG3Rg5RKHNsgw8ZDSBqF7",
  "key13": "5CP3xiEz2zcgdTSkNhK69k4FLAdJZD555hrJVBAayaGFm7ZUpK3RzVYiewyMKo73KLcKKnDu3pSnUQ8BKpVt6F19",
  "key14": "55sc8QMQDxCKrsgVvRyBAqFn2pMBUDiTbLRfxQAq87skQ3WJwT3quheZrP3RkoWmc4j6duqWbZzf3R7M2KD2F3iN",
  "key15": "5dqHYbuKyxrt2dobVEsGmyfMdsUChjjqqeam169YECNCiqPyJMJY1wVx73FyPFc92XcQFPnz2uK6tDYyU88VwNyL",
  "key16": "2iYQuiPaUJsbJkrqKUHu1tkavq4moEM5h2scQnPvL1dvUFNHG6Rxgh8hwDaujexQeGZDEQXPqAGWo3Eu19qp3LPH",
  "key17": "3r5QPF36BQrQCiMMnrDzRgUVVjiZ7rayUp9qvzE6EAQCeeGGbD1kWGWMPXkhRbQEwsVF4gZ8zZjsSjdp1xEsFSWA",
  "key18": "284DUgeUojVX19T8vhxHvzWt8gYHHhETt1pPCpSkqTZxWPkagfZgVNNfCXsDPgMLew9q3dLFnSjqhvmju9wKpziw",
  "key19": "FNCqRYMVi55iuL54ub8jFRZZM5bhdZXdBkcVvNmvXRTfh2iyWez64C7zTzki5JcXBLvyNRcMiAbyXhSXP5iibYb",
  "key20": "3ZCLrbDx7kyd8yP5T34CNG3NPDvdELEDdd428WpM4TRKAeqfgHJvL9prU4q7TYTMpMsJbwpXEzhGPUG2AwHK1poS",
  "key21": "2SJE3RaaoMBkN3CFgVHguJRiE7GLcaicNUqJcvV5pojUnwFi6sJybVSCGKtnKm66GJqqr7LQazBxqkwxnyKu2kkD",
  "key22": "33mSRHv4QZFajPY5r9E7ZtzfVdxqXS3HYDR9yx6nC6h9eUdWjMUNeZaFPk9Y9dBBdT8Vzboe8g8FUDUUbiaqAudv",
  "key23": "4hjXFYTzrJYTS1mvu5sX9p1TgfcJK7gFXro7RZj3vu9GvzcYB3Utd5FWFShrtfmVz2tNpfzyRc5kLDCqQCsgZN8t",
  "key24": "4FA6yU8D7oy9VBUfXgDq1GUp7rtQiyj62biLbw8EKhdfEXmEBtwygRmvsmUYCviQWkyNgviDAG7BQ8xT6MedH9zc",
  "key25": "3M11okxk4uNPSaW6W1g7s947nhDvi175mPG74Cb5EkDhmV3fNdikxa1j2ZLmfMKkAn3G9hXr8cUGEkUgRkDkvHFy",
  "key26": "49LL5w6UoUQLqKbK1oLs8LW97beiwukYtsSS2QBgbxF8VZ8rWqdTNZYfK4xkgdJnNqKrKXqtN6GoGGShDxPirJs7",
  "key27": "v8sAYvPrn35iLYY4Qm6EivcBj5NyT2KBdRtTi1y4k4k7ci9nta5sTGZqiuPSVhfY7m2yCthWfQZopqnGVZBmwmy",
  "key28": "2w7ReKRQDyGb4BR1sNYn2DSqB9yvG6ShHETkK7WwAEJogZr4S5SyRoeN4azSkSVHWBJJLPzLqPECDJ7MAQEbdLL7",
  "key29": "4Kew6EW1sUX5XCzp6L84xEMCYcTxStejDgaNBYSHsdLBxELYd5K7H3ANXTCQrGZJn15Jr8PDt1zgNzqZ6K7LcFTP",
  "key30": "3eMS5ywAyNR9CVYqf4UtjoGGvQfEsTZ2wkHiomqKbvopTwF31aC6keDJMkDx84FZx4t6XeWSq2Nxf36WGSLRNimn",
  "key31": "3nhQUHxJAU6BqdY6TH2ZAjqEpsf3496JKMyJKpcdwzSZvzP2aDnj7kqn8zBJozmC7nkwfQcaGhgPAKvG1Uq25KmN",
  "key32": "sXZVP9tyQ3uJaTiDf2wfddMmARKqqFrzLLjwzq3Ye6baz9Wz77CKZUUGbvCR1rpbRLzZJPDhroQi83YHETYTku4",
  "key33": "H4V4eYniMaVrCvZtcmMTUN4ozT49RYnXtsPW9bt9vnDpyQwN3m9uEW2mP7GPWZYhgPDGdRtN9MxGAnq6edXVfPP",
  "key34": "5VKqmceh6rZzdRfN4KfwqWCnMv5NVcAkSzbe7gEgWYTV6u4aarpGeUzaDAxqbWV5A1Z2sVn7ghwZvdmMvnHfC76Y",
  "key35": "52Wxvx9XVXa1bqhNdmzHDYYKhX6vpFaBZEn4iKa9cH318JfYRcX7oUPMjBZZVFooNdiEh4jZiSVpDEwTXdWdkWM9",
  "key36": "F8ptT97sj4h29YMpq1Yyvxfkaz38ETLHB18UpE8aEaygohLYcxEzFqzhncQMhHoKe33AQXJ7AY5jWtH4xHLvFGn",
  "key37": "5nqpoGASBvhW7q9PstSgyGx1zGN7MJg1hAU6RmDbWZFFQpyd5zMokgKd8cY7Ce4F7eE9bxaHh19sMvrfUmTtg55F",
  "key38": "3UX7AznW5hHqG47pon13w5F1esHFAZCPi5eopKou6UdG2NJ4dPps9efgiw5QamtyWhMaHcVXrMT5eL3prUAXdqCi",
  "key39": "3WfdpiDNvyh95EAM4SHVn18FVBVzTuQbWKAJL2QouhFMbXuesK95JSSUGUvzxc1DaAn2GZNxom7TJjHE5dYHDCjS",
  "key40": "3YKT4Nq2PPe7ogy1xmfHa4zEe9YdD3fSL6G2nBTkAbQiQTxVtJwD3QGiC6E6TPXdPzLeA7GxbUWSuGiduyh9tn6f",
  "key41": "5jcznmpZhLqveGhiJV3R54d8GpEvg37qf1M3U3N2xE45iYRMeACKeRpCh21fEszUnzXz1jty1SxmD18QHairHpuX",
  "key42": "3qiDtieFYwCiR4XTiXvXxfdsKRd11WzfiDodkYyKYMZBAutkR13674pnxZwXCX6DBX9mqQgWJCpssjnzihfdEKhA",
  "key43": "457Yb1hA1YJE6tQaGrvF2zrgHG5hCvBB4Rqp1p73uWrSbNQrsK6QC1y1kRwcUvPMgxuW6QX5JQabdATXCtTZ8Azm",
  "key44": "2Pr4U4wtV7VuAKxTJomBeexCsAki8JRzfN9takSLP1zXukjRt1XW8Ro5EFVX91KhWJzThNocjHGYb3K4vN94Cxun",
  "key45": "2k8F2pi2EWzBDF7JfMsfAvtKAG68a9BmnBVPyBKk5X7uptmm42kbwLGzU4TB6CNAKefdhADbxAnMmAtH2nhKHdtv",
  "key46": "5g5ro54iyLmfoxLxuCwQVYjc8HEb4EH1xM7wNJrb9pRjoTw1tEDmZ7bQenPRUtcGcemYCHgucrXyhqzSM3MYomkf",
  "key47": "3tsYuP2KL8HuBLHxyYwido2QrdFm6rHFFJutUNtAgkWYHsCbwfwzssS7w4BcCgwiqJQULzgMcAWpitdyoCvXYUyJ",
  "key48": "3227fFxksbaUSgZoXYDNLvyCotLGbmvmw8fMnqqKuz4bVVQLLzwKoXLiSojpNq6qMTJpq2wjiKNwCN4x64mmjLtq"
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
