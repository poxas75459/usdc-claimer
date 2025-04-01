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
    "aiYq3acdJHf1eS9Lh1yQsSC2edtw7E9Rq8MgtMHCJWAqVxbFcazFbP4CKwnqUNwYWEfgxt6Sj973mEJ4NxWhxqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZHRT222fzbmwnsrABNeQC1hm5oUbsGZngUmi8hGXhq9zuQDBZABtyY6Uph7vViegL9kvQknKS41bnm7rjFdmUe1",
  "key1": "21CfVtg8w183v95NofCkA1NrkvAkaS26w1tfAR29uozzoqV1gFAoAB4vzQ7Rxb7BSa8b8u7KGj1cDC4XcJFsGoZ5",
  "key2": "4cKCcgbpnFwpS8DZt5cjvKGGw9KYrZCdQjh6gHgvDdnyq14LeEu3UQzF3iVcHDR9PDfev9wvNJfDm5eNtTELUPiZ",
  "key3": "s6T1aPV957ShCQMzMpGS9TJM5NJime5SbsqrmiX3gFQwGgmX9qthR3SSdNRnMAhgG2Y4xGkA3mm6eUBavPPWycF",
  "key4": "8uU8JNvThcd3XWKzCVT4NCmp6YuhkFKnsFsBJyGMtM9SsmN1TttVFCNbCr1ojCwuT6KjzumWAKiFNoU4WXEuHRF",
  "key5": "fXL6pGwkDkwxp9ogXjVVinPMQyinphjVBScogdqqutwSsRmXESsPQVkKfLLRA56hyRndyNndRvLVhKhfo9QKDoD",
  "key6": "5q7vSG8Ncoen9BXwLy4ybjsNLfdR2X79wciwSkHTn88mBGZHgso9Cu22sVrSV7mVHifZXtvUk4waZk6yF167UTt1",
  "key7": "65BTJNBjQmzmVt34YvinzDUABWtuBQvEMmpYNFpftVF6Zi3KwxSM7gGKPG8BCzWkLoCPAxFAcBc3MkWc1Yxg4LyF",
  "key8": "2BozgbfB4KFggHZRsX7GRc2df6KxTzFNGuy3wxA2A3jBFeDXUvo6R7UwpVPv9UTybxWD7uT9hmtW3abQrTLJjC3X",
  "key9": "iVoSVTbGQxmt7AfYoSeg7gvhnU8qx3U2UdTmkyMXF5TsDJknxwpr3gejkKrQj6LGTEedy78euT8sSSahAUv7SDF",
  "key10": "3HghvKw5GnptMtK6QuGLrdJX9ADD8QdVftxNbGt2j4xU1PKYXMzbrunmE1BaDvAHkrfi3JR2H1nM3ZuGNjsrYrT6",
  "key11": "3x3F8VM2yrYhAnjE1QgtDgMUKQE23foDkQ5qUE84ngkakcSBziaCeXnzncTPL6fvgmjvNxAhH6Degy7u3Ajd9U16",
  "key12": "xC7CRCT51burTFmuEGu7F3N2GYW4UgbHGcHyqDLFsDB652txewfgUNkQ716oodcEz7RLZfaNLG5pKJkhv8UuXem",
  "key13": "2pr3MfVwdz19soFncyvKgQbFd8GsVgy8kaPpFAsnA8ij9g96UdpiuJUs7i7wEpX3fAAHV7C3MMDCy1f9Z7HSp6tq",
  "key14": "4WugmWJZSEa5Fsu9oaHzHN9zC382Yjpwt2jxFP4CHUpvATgbRSE394ehL7qBZKihWV3H8EWMmFjmuQBZtLmjRhG8",
  "key15": "22zQXasXES59f7E4LHaGcaxGD6FhviL2vmBSWAa5Q1Lajp5k17BbvbwKn2QgtwkrZit4K4tLGcsuFJaj7LuLF8zF",
  "key16": "acy3hoCoyvpVrmc3DjTRcggEM2TjZk9yep4bHGPNDjkBTx8fr4Uqe8A8AY9f1mKtKATkGDvjmkesFYkaMjuU6Pu",
  "key17": "299BYDZ6WKydFnM1PNw9kJzPYYkMiSLDaYdYL7ByYPbTQ3SRTATcWBco6hAkPx3gtRg9ddNvC7LmrZxD7mXF2uEJ",
  "key18": "2Wxe5qYhjDwZ1dd6hp8gMG1zRMeQceE375kHokczEeEWp75cj1FV4z2U3qeaf2bDmNri3K3DdQpQmGc7fRGQAVP2",
  "key19": "2kvSLZSuYPhFAChPQgv2bes7876PB3DhikMQqnk9NYHGTUJXyxFzuqGXm8DHNNkEFpMmSumcrYdtVWohwRKL1u8s",
  "key20": "48vMwgi5saNAhUvzFph2rghEfzuMogaNoDNh8XWN4txuiAdSZErzD7wzJSqDo4jZngPZD2sBRuNSYNF2GXtxZrQ",
  "key21": "yRAKS7DJkn84pXmU8uwGGVE89gAiKPZbeeQaPsbco55Z2Rx5BVoQDiBxxyuwUayVgf4bzepdC1iqV4Coyo6QR8h",
  "key22": "4KPKAdXSBNM61LZSkukNGsBFRgimgDBzSTuGG7a47RQXu96jwhaxLkCgboHc2JExrbWzpb37xigLViwEXPGruM3s",
  "key23": "2XW97fPTReNF1RibAvBRB3oBD6MNjK5cgosrFFSBqpRKRaZhfLxvgWoFsxtR6VGw9UfVLX2c7JYF4pKyAuicMcuF",
  "key24": "3Gjc5T3bWCCr5oWeiBzbJTPRSqTx8ggFj7oKzSk6XsMc48w2DSJMNmxdviX1TKSeTd7wj5rP7HsFrZD7X4j1GsFc",
  "key25": "26Zbj4Puhs7BCHkf4PHFGFBu9dGSVr6gGVb1JW4a97tawGgkvoLgUxfLfxs36rHCbPo2ibJxarDnXUFWHVJ22mdD",
  "key26": "4VJEThkWA41WGFzCXeHJ5ZMbmNgJ7rdAjZupR2RTm4ydHtMg7YeJBg8fkbZSf32fUgvABFyyssmMvNef3mPbN2NA",
  "key27": "3jUKnqSeg5MQz2sZ5U3wT5pkq4ipKGcpT71TaMYU7zAPFyvfAjWXqPBzLbsu9sZbwCy7gSNjEY8o2BGHgp3Gbtte",
  "key28": "3oJ5XnL9SNHy4DFzhU3wUtBPhrfCcR6U49TiqhVV2QZi9GNc5DZSgPMK5GaXFn9mWvXofHm1LjaBLu82rvE6UCQr",
  "key29": "uTMhGV798hQ9sNEp6Zzgvb5yGJF8udMjkX5rbdcTr1fvQkapXDqz35GUpADBRitmmGM7jdrCNA42Wcn4EYtHM3g",
  "key30": "4PDB9DD2t389Wkf5jCRARRthJJe8kCAGQYWxr5UMZGAqWUXyFszTKakUo1KiK1hTyWkxMoxA9Z9LHSHW7FhvH1iN",
  "key31": "dH4qxCxKZxqN9tG3hLmYgwZKpvWewhE8Kt5Dr2DERr2XbWKsHBgmjF2YkgpYJZY7FFg5GGAzr6pUyUUksGg8ajP",
  "key32": "2dibxicShBvHXLzvsLaR4fKMhUFX5jfBLBJsyKkaLPE9c4pYZsk6os56DexjSarK2XFQsQqXx9W4bUd4rMrz42F2",
  "key33": "5F1uS6rpXNoWELB1wqfBwqpKmvQdenFryxDQantku5ZHsXawnabuf3BPbwtUCCnnnDAbhLXKRLd9kk9G9HQgmmaF",
  "key34": "5NHPcTFsSz9WZbf3JU3D49BK4pDt4qDiMGSnewoW6z1gVJCxxrKFLbnCcP27S1G9fzpem9KNsbcYpLgC61yJiYDL",
  "key35": "DohFT8UPx9EhnGnkMAdadEPTHqvCEhjBqisXuGzTAxRfhZcJozH3LjQZTrxXiYXmq7rpXC9J7wRb3UpzNtXAjDF",
  "key36": "2mP1gW8vovsFw7V7GayEF4hngxPbcg2rESegy1ZyW9nB2QhXmpAB9A2WGN1oC6Q69zEvrUU6fNehXqnmCdj5w1hn",
  "key37": "GqwMfPfZhbkfrBEjGLYjJUnWHzKujeShLbvX49hGq1kiRNSWhuPJY7uYMozEduNkKJHF1vE286UcUxhuMKhVV99",
  "key38": "5rY64dNAYKAAQZHTRoCuCBGh7FovedUBco3PvobiRhprA8Pd9Jbq6PhzNHzzzuX6wbLCzJE1KZXSRdBmTdigGFJb"
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
