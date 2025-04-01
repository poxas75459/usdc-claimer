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
    "4RqmskeeVUWB1Sf737TkHVwFLEUiU4ejNXvdfKztW2LKJsDpmK5g2Eng5HjMwnCbXm53JFjvnmJhzRkndev1udLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rvSz2BWbW1uyR51BdZ528ofKL2M5tXzHZQiNuM84mFgfSA2X7aSvq1wkomG62RTZdtY4CZ48xrTYFJWic3denWL",
  "key1": "4LqVkPnUMJayFNMWJWUvarz1qHG3qFcZzkpnwyANartoPcTMGvqMVnMhaLFBEbaVyvocMCuP1ejd77bFWTbNvEYY",
  "key2": "2wRBRNEh1QRivaF4DVhxhxTVmyQPCiCYPGMCeT7qxMUMWRQAstb2APE2odWuZaD1scKQXzrUKVQxp2YzjTXxSTV2",
  "key3": "bDXxZBDzqd1EkZgDztuv1xTN6JKQMj3d8DGRhkLmqW8fhWxckhJMmbWa9BTvmvU8jXLRi2Kri2rWvFbKG1FReVT",
  "key4": "32aG3Sh9VZwdMYZeDE5Gbx4PA7U6f9p5mo5CQaG6JSz6AZSX1oFHPYecqrpHap1LKLm6cG34hGH6268D2Fvy8bro",
  "key5": "2Uquamekut4LtACL6bYUPuCdbxakbX1FYkFzRHEmsqbNT5g6JcLerucA8yq9HxXKwafHH9bS4BDu1shRR1Js6URY",
  "key6": "5k21wpEAgZcW9wz6bCMtiCVcj2C8CcZgoxnK38f3fKsRQxoqmoQnw2oYmDrjxuzoaWH3S44rGpiH8GQomtLP6wLM",
  "key7": "5BPgYTKPVD9MHiGLCVgDG7c9ujKYgtdTuRupsCCbTuthmjxMLDsXPeqxsFLpB83Q1qYbo9Xm7PHkyD8NzBbk8dMj",
  "key8": "588ut3rzBmmZKAbGLwWoNoo5rJKGeA5R7BeiNjU3ZvwuSrHAVVFCyQjTDgyF38276FBgGM8mNZq6xfkXJ3DQfrEz",
  "key9": "2WPXnZUS3LkHMUJH1TgG1NftNnYLupfukrc91sjCR5rgAMZadchTK3ZcqmXvJmvEedPcucgn6qdTjoxn4kV1y1wU",
  "key10": "63tMPZpGfq5UJgimhGTQSnRKzSNxQjcukRqSpFoMFUnmb2KPxrS37AChcTFqR8YG1LkourbXBei7mFzmkuqzg6A2",
  "key11": "46Dd2gbrrH3d6QZxJbVy8Vn4ZP1cnEndXaRq8qSARDhDb7GAvxs88Rab2SXKYK39LmdqdQZ1BEzHaD25gL1NaJ1Q",
  "key12": "mdGtddFL4PdJyiCEeou5S1KacdgJZ3tYC7PUUtTVyyh8cU5292YDj3e5Sy2wv5aPx4mS4ytoYZUtK6tNjrcJQu6",
  "key13": "2uth2fpoy8aPwRscP894xY4bVfuozqw5QR89rQEyyk1wzYcdEsJFyzgMnyGE2xaYXbHg5z3vsd8VMbUm4HQvg9wo",
  "key14": "jSr42L7icyKt3RLZ2iq9oYK124RH8QG8BEw1RVAxD5L3p7YJxZuUTaS5HvCkHE3ET6gLNSMo9TvjQYFzku43Zwm",
  "key15": "41G9cZQyUqNQU1kUKjCKpFWKZ2cPZp5iCEu45kFupVL78rBBrjCQP94kwXzZsJMfrXvGa3ED1YyG1hhJM28A3R2y",
  "key16": "26zq3D26CfyCQxShK3cc4WdHS95jZ56CSYFaxNtfizb2SeZvaWrRWHmfL8LMm5y4qBKqpoq4f5ZWbyA94CMCkXDB",
  "key17": "27vZYx3HGWy1GsG8sTtWUAs89iKZHp154KvnQUeWg2rSeXWhLCacG3Xzuwn53B8mgD3NvBHq3Xk4oBsWpLbP3his",
  "key18": "4SEoCG3A5nLe9MnGRA9kURkdGMEAudg7xEfFKXWhKAGWN3KKyunCKiDwHDv15c7Lo2YNpgiYCkXShZ9uxSrTqG1x",
  "key19": "2rKx2cJYe3fKDij5hnUa7Pm98N6JNXe5HwRUFsD2JH8J83gqudyGtiuU2vD3AqQQ82jLKgMeXS7ocSPDid7pwjZW",
  "key20": "3WGfaTJ6xew6cqTBYa6q69aYjNi68v7nxdPZXRKvaHHGGwNoYimPNTdhw2rXSwymjZn9aFe5pNgfYgL8BqGuuVBR",
  "key21": "2HhAHPY67Diiw9LrabKG3ScrU5GaU7juiBP9GCUiNmcDP4KDFzU8TTpYdNPneajR2pML31UpokavDsWSoUP8qPGZ",
  "key22": "3cuLC6Lpsi4K1B91Fg3zGvrf96StCRFW7fAYFvkVUG9YGnQjdPZbKKTWjTedLh4vPhg1V7RH77svoA2q56wmA3Kb",
  "key23": "5gTK7m4Tn4x1zNQQCDJnUYK6ohWELS9PYUqX7KuskKEDUPtasP3t5FDy1AzaLoK9h92zRG2sc1poomCYcvUfXa8s",
  "key24": "4ZuqHAz7TtSziD4GVw9GScSob7pCEBeJKcrwwN4akAeKzqcJude5aMqNJp2egBuFgNSLsAJsyvqzVNv1RdzMSFGQ",
  "key25": "twCER5SxBqs6xbf86uaUpUxuKY4tMwWTMxYySDvzb2kJZ5vM6Uxeg7TbnKn3SpgURdTyhLwjZa3wxPe9LcpPnxx",
  "key26": "4RuRRSMNax7YXyCDD5P8FfSPmmRfLWj1E87kTzKbu2jZhhFAwbZqZBEbNyE5Va9JhgSSKexWWtTbVPbU4VfpWb63",
  "key27": "2TPuvLC9puuNVx9Kz9bFvWQJCyHfvdm24GhfRE85eC4soneEk5yjBiXgB4ZHFKeexMVchaZrzfK5pfC28oA2F9f2",
  "key28": "5Z1kEt4u5mZzA95WqMfK12L1oqpoHsY7aEWwk7xtCo97maTwFGFFsNQCs3h7diZnE9XRirtPyJUmrbjRogJ4zv9t",
  "key29": "3HxwH9T7ke3MtWJ9CAnnaeXbX7TzXPAgqyUJ2NCHiJSJrU3W9VMdU4VeDbW21sX3WphbPSKGPyF57LBV2VNgHeTx",
  "key30": "3Yh3xSPUExwJK2sNwKq84Lj5SCjeuMvgvi9dPaUoiMuXCVurXpEoQ6gXaNCX3RhmQq581r1c382AAgs9JT9wMLcR",
  "key31": "44PtmTCp3irvJ5Cv1FaCZ1gSDodrwXuDApdqQ7azuSQfkxpZ6ykqhADzyUCT9bRniDSkUbruiGCqFFmRRYg5VpdT",
  "key32": "47jWxohcKURkSifqEALwwPzF3Yu53cKj3NrdZAgjSYiwPrVEP3bNTr8FnaFCUfcGhPrVPnCr4iELBxnwAtXGcv9M",
  "key33": "2Sn2GFzgqfDRJRh92XPd2qQZXFwvUV2d3F2GxmniKhw3kCtdyJSWa1LnSG2Hxy5kbnyPnBM1g5MG8gq6gfVBoY7A",
  "key34": "2iF8EY5o3d9JEJK9obHzUUuSuh6K7nPRo82qvLcvtE28jQJmh2S4qRJJ6t3rM3pCQeQLFLHi9Yy9jZbZToes9gWX",
  "key35": "5VsE91nxmdCwcUpVKZXWqNwz7ZA8LHZzt1UifsjVRQ4CjbnK9iSfPWThzNEAjMtHmf4TMBbwFekvQrgj5YMpSfep",
  "key36": "27k5rnsT1WNz8Qwu9Qypww4w27cwE7KMSqhHrkRdZzsn9iPa6BhxCvJLpVHuuT8nymp1etGiYKcVEzU448oZ763N",
  "key37": "3XANL7zQF81z5mAc7YiMTBR23qDerpSJaZFNb4zTBGgikHmJXSfkSU83yxiNH2cS18g5V5A2nqTH8zD3r9GWRrCC",
  "key38": "5Kuq1Ag7WqmTQNzSK6XGeEzcC9fAYt8harLRwLHmJ7gKZXtwtXwALfzai5PwbxGpczdQVSPj4dJ6wf8cLH7Lxmyx",
  "key39": "RAiA9CvresXZX6jbCapgBYBzerecxJGsS9CYqtxtzG6h9boKhZPfGGp1qprMzf3TP1yjcue8An82oUXdAQVtZAs",
  "key40": "3u7JateUzneZVz6Z5YVuggstsFn8gsU8Jpptcv2NCE8UX9AZzbk7Li4Scg8mf2vfMgt4Jw723CTPwZALDLBJkZC8",
  "key41": "4K4LuqTo2PEdWeNL4PbceDKqTa1o8ipd4bRVWmrpqwpu9k3fP9w65Ejy4t7UZKosgZCWn8zveVDRscxGLSYycXCK",
  "key42": "kQKJV2mz17AvrCa4kxRRn6zGfGuYfvxBJAmjjx8aVa9wuozTGypJhA1REji1K5NFzYpRdUaDhbwVXSWhBjQXaXB",
  "key43": "2aumVEj3qbCwEcq81BDHpUvLta159W9bberbCsttToaRdQfUN3qpPqG6DAmG4hPZwXLvVghEngDSD6AYjZ1Pcny1",
  "key44": "3yrkTYsdRJUSRzw5mRgSrbdpddrx1pafnCDVwk5KizrokiMCvHYvQke6bqTr8tpVqHj1SGdDLse9cv4rsQLPSx57",
  "key45": "4Ug3uj9ZAszwrsyWJ7NuXg73pDBv2doLLBykFAwbRUjdYVp71Cyfye7X176GCW6Kr8GZqXKqdktD6Gx5Xi2UGVE6"
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
