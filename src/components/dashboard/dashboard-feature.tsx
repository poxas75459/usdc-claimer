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
    "3HEFgG4HPpMDyHRefZwYJZMEizV7jsvEn44SRmK3UvxpyqGWrTyufeJqwaXKLRLVqbRYsYhFE3jnQJeo8RScJtWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kfNZgUjDTJ92z2t6Esdg11J5GRfqnaToPcU8kVyEa9qgiBY9hR9XjzcBM4m99XumtKtgjAdkyJzRdD6GcDipAF8",
  "key1": "2zy5VcuiQwkn1gkj25eTGxqmh9MNesVuVjYPx8UVfLgHBaNzQRYSVMJpVUAeEFnitJPfxNb2sT5Qsw3o1gkGMeVH",
  "key2": "AZyVMKMzVVBPeDeLq3H6ZLAWkbYqJwrKUXZrYMeMfAMSbyCzxD2hAyndwvggvc5YankheDdMdZeRoDjxQvvF8un",
  "key3": "65JbRxWQRRjxPifm6cYBnNEuS2jSLQFJgvaMgpZ867vPfxr8iHJPqh3YApYM7at7aSyRsBzMLtUU4spyuezveLVf",
  "key4": "45saXWuDBebykk9isUA6fZV4uS6KhS4U5hZoTr6yawphoDmFh8Gz27AwW1ieNGkPyUCEHiCZk5LhCLbnk7Ba2kdN",
  "key5": "wfU65DB56Sj7yZ2xjKpJT2oM6Lg42tMnLQjWUJvmE9N2iajSVD5pUsn1n64qUHL8V3N4cHikBbuiQhLbYuRQu6C",
  "key6": "4ojjihyxzdqAJC82dyrxLjHjtKTKq6q96LqWZrwV4uHx37WU5VJmEQE8nHx6EtHZAbvLZ4N7r75vRvuu79yw5ZXx",
  "key7": "3NVF4DLkrHCkmTrbd5oYW7Rumjty5PxhjhtzXKF46nvepmXgw9ZyUMQUQjTAczDeUL8qBZw7diyD2rcfociukwKn",
  "key8": "5ztxjU4UuGjj8cyaKPMWsUoexJvSW9JRTEWhYTgznurC5mNSkFZx3SEMBTpRhoeP8DRBuVNgdNdrdANgRWtiHMZr",
  "key9": "2j82x6H8U5m9UjCAcM7aMxrHCsER1fneqBh1abc5qXWTKsA2e2PL2ow2dRzUceKFdZbmz3jvbw2AUZJ9CmgrLCX8",
  "key10": "3Cy8uCSe4Y9fGE8aLc5e2mKQUUHn4MrhuiDDGEhxyrrK9oLBRRVU1ztpREQkNgZEVp4ecS4woc5wB5bL6xNBytnC",
  "key11": "3g9euaBA2EZhMTuLQjkAHkcUF2ZjxfN65Ve3EyVQ12qcFUMABsRMUmxTGe3Zn5cHWdA4Sx1mbgF7R3BfsL52jcdn",
  "key12": "2QKc6mDwfg1HxQ6a6CCuyJzvDPttdkbZfcwDTE4BZFntKJ1W27nBXrEoAwRciepLKcUWR4Qkass1LF1yvf2FJ4ub",
  "key13": "4HXvGTkmh61wzcevBvKz7TEZRVdA5nDovHjhrQCEqXLukhfyWr4sLPb5R3UN2KGqRv4jRVcmtNZkdvDCN7EMSQT9",
  "key14": "3emHe2NNBA7YyrkksGLvkWQTMmYT8ufmp5yFrmN2MCFmjy931ZC6G3t2t6tCMesrUotGdAxLNtdyFp9F6xvTCdoF",
  "key15": "4RJNCnCQLCFDDEkifdD4sAuJrn6Hney7Uxb7NNCs1LfMouFxcuLaiubtnuGCfVL2mi61A7usZJQaUNnByMhBfE2h",
  "key16": "26KQGBfuWCiCwNAJ1tCpPsbjcw3m66KULSgMe7Y8L57U1cG1afiruqCYxTkG4JV1TVfEs1Cr5KgQL3d3C23YVXgn",
  "key17": "2U3ZC1UtGgZ7T9GiV3vUFefsoxJxPeYjFBU8EviXWrYpEFjgFvfrNaH4tvsytdgUUAeCL7sE9Nuz4tocrjQ7CGsW",
  "key18": "3SKDjf8YW85BE2kJn55h5FYsdkFwv2ivdkpFU3qkuMzYmtQfk9woYi9idS4mLeRkmaYhRFCcwwTBZ6e6oJKA8F56",
  "key19": "596FpoQV5rPM7YMnbVUDwDhuN4ph42nzgywtb3n79soRgpbsbavjehBroyMmdUgPieFSLfLJqLAUfM1gZ7a6EUv3",
  "key20": "3tSWRonBLd5eYefTu7rfk7QeXj9RKKnSFTykse9XxpEt9Lxg5NnmEda3BM3vytPUctPPDtrSGgV354vDjQzWzcgi",
  "key21": "5RwKseZyGBETLxTRmDg4z39xHyKAFGsVxeRtnLKJsofRmNTajxfCDmtuqHxKDhkDnqqMcoHH8DMg3ZffRxSgR1EH",
  "key22": "3djLxJEtqM8dsLP5C7WdznHANUrqKu5yVMaTGr5d12YqbeMBbG55rna3zHKjQdFPxFsgsJQqv6qvjQq3wCLSt57V",
  "key23": "3XzaFE5gFs4a7cLNefCaS28P1cukg1Fkw5zQe7ioJijxrBhec6R3gai2S3QUqh4FyYjRssfsABNhfdwJsP4CQgjf",
  "key24": "5yakdMDjmR2hHgCU1xAnFuFBWk2swG3qPQkv3fkjMjzPdoTk3hE433i9nuR69uqFToPU5DBzPEB5vokHeq3ttgcx",
  "key25": "61ExKjGFNbmwLPigtmNSiG7THdUcj7C7fQHoKMVR5cVSGi147SMq42BC3xPwyE9DQgCCxHBZPEejLgxNRuqkBJfM",
  "key26": "2P1RKiwKmCHu8DvKZ9s2pwcJnrvE8n5p7LphibD6N6wfyYKzVAcHoQ5HdP6M6f4MwopNxMjCEnPrNEmjN61KEQb8",
  "key27": "3yXeAzZo84be1ZA9dQJf6ni8zz3iGmmTPU7gruveeYco4b8NfBvhL3tbXi7eQe1kdhQ15hhKMgkgPaVtacu1EddD",
  "key28": "eb2hy3EbgrEzD1dNQ8MuZ5uRK2ZBABQicsZozVoE3aU5CpKTUg1yh2D8kFCPmPhptWgTfsAZppRS4Nytk9fcbGa",
  "key29": "5FpFktFEtR4DUvGfXYsY6W8tX3aco6aCy8YBEtvLTmo6cRPCsZR6n55B5gj7tsHQuNX1Qhb5HqoNp5mMccyJvjrK",
  "key30": "5QSDm4GMkPka48q9z8AV3kNaHsBNttbAPC9ZrckMpPHmvpVk7XUQsSjRBwfRaon78nwyJLxh8vqxngjUmAySfNbN",
  "key31": "SDSRX6eJsY1a8uED6pPzQ9Z91B3MHkr5pJBFwcGvmArofXNed5NpsnWp2re8B6rrj6n6gTBx8M1TM7WGZPjn1AH",
  "key32": "3pmUEzHBeM6nxuELDJW8y86hhZ5g6K9tHr9QYzRGB4bMgB5EH99x6JwWeAPfFRLgiHBDD6HCo1sprTteBBCWrTFn",
  "key33": "3LgpSdts6WdxXYYPEgUGc7Nf9eNn1DMZdCG4QLyUioR9j1UTse5RzUQ7gN3Ka1GrP152bxSmdEJbrXQTxb7Emyt4",
  "key34": "3dKDZmubmejTZX29SemaD5jTLQP4UmePJMDoBg8Uv9FWK9tCBekxS8t3HnY89vsa9gEyh7JN41fx3aECpxTmvUPD",
  "key35": "2QQEMCraxkEADQN2Pgt9cQ1BtmxFkgU5cm4MoiyaPHM3AkJSdZ6wjrVaGLgdBbpbuSgNc8XqVrn9ocPWEAimp4Zr",
  "key36": "5RwWQAjiSiDK1ptzeqojRBSVTyHQK3g3EwT1Baah8newbnzTxKEbU4GvSQCJLSb7VAfW7DGNtr4cjmAZrZ5ju4Vu",
  "key37": "3SQZ4bftV192jYCLBD1duTRR7vxMEiyYUTqLeHnazLWStahWQDYwmXv6RGc9MBWpFj19GM5T1Wp3savrJsS65NM7",
  "key38": "4i5ZGKggABaCg9vuFm1Ei8yhTPs3ijFL7Tus2nWNMRiCdMNc2BtAmRBLASNqeEQFhtw3KCVaLSZbYdkCenniBjDU",
  "key39": "uYgBgmR875fkEPE7pk6QLVy2eJKsg4vK9aonufUQzpM6RzrBAyF9ijTK2yBvYztuLKhJgE26GXP4CmSJ3vVJRYE",
  "key40": "27aSnqQ8UgA9NH7viU2VJxBATwBc7WC7jazCF6uHbGkRBqDJhy9EZ6Kazek3NPAZR2JFvuVkLFgDTvfNUqYZgacJ",
  "key41": "3azBvJyGMMBjcxdaGKXHNFEjTr7exZabiLmyA8vodjQUbt5RtEEb4SR8cwwcoHxqu3ftZ7U9Le7yVyDAiasdiFTj",
  "key42": "3CzEDJXFK2gCu5nuEFDQ6cRysPQi7jfmgczVnc4r1X67mBUrRcr7YvsxwD2rwr6CvBEdj82x5dEkMRbCTWj9323c",
  "key43": "61DSmcaKWa8mZusJ6uabu8yEHTcYuF5JCZfFDrUB86NW159ZUzdz3zRXDoyqkZtgjCJcyCnMmhqDG1DCwyoE6zqh",
  "key44": "zEMZg7zjQNtQcWZzKVMMXY4PuJ3sTbuCBzMxtX7cmYPRPqkFoQ59WfzXnKB1AgmvdzMXVHPMiiDXfMxr2nTbRkZ",
  "key45": "3tY8UeQjhFoSScQ1ZfcRcGzkDx4e5mJbxTSHsvhFYR8BqPGdJUnDrGUmEkjBKiRNaGSp2KRxwm7L7k9DUMuAYh7D",
  "key46": "3racWrUCG9goVy4t3mvnmhXqvyCmccpuKSM8e1zkVL7wChcmjfmyyUxHt5TvKQKmXEptw7TiJnXGjGZFcaghkJXh",
  "key47": "5nviZig8UTMUXxnr2ezo8orFRYZtajoceoKgRD2u4YD8irEgADz1XBjceji1bMZ5Cz2JDdiNaVeStG9vNeE5ChvC",
  "key48": "4uR5VaTUsSWHEfBGmcmTav45esXkZoLYGwitx638KYwqnceaUgruUkZm6ewJbSaSTLr2dBEUfHjULBRJ4VnrUqwz",
  "key49": "359jfBB5rnd3yxzLFM9UBz1PsJNHztShcKkpSdH4V7h5BJtxjXZZ41CqX2jN4bf8dmCPx1fFUyocMz5x7jnnStFh"
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
