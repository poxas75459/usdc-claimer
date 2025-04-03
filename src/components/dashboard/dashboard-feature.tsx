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
    "4yr5MedtF7Jx134h4yCzWqc1eAQwdnKCa8q67YntfV8spACUedEpjXE7QrUmZyBBuAtt1Twn58n1SUkPWzXs2BSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6NGJNVrGzP3tXsmpbFnLR685gHoQUcYHxHA2sgB4ijN4bTE4e12zUKKHPjuf97KuepRM9HmvooqPaAV1rnUdf7z",
  "key1": "42xwXKnLCNAVf1n4u3k3wgZAyuzLFVQCQKm1QmkX7kcsJUefL3U7YzurvyqfMRAgzoyxbjnnPcDp99Y3cgpz5JCE",
  "key2": "5eVAizhVicpfwmkUuBWyJEZQXcqGdeBZrxtTgnHZ2xmDxDEW9bPZknAKmb5ff9TZUmZRv77rudh6rY8Sog5ndzws",
  "key3": "42ANHx94wDWNwGbYmXgektHepMK6aZj2TCAFWyj3MRk7Hj7NwBzjyBK1UWv2hRNWwMXne6bi3abagxVwQNCUXtvv",
  "key4": "3ayovxG761mDquQUZiaGT2aMXuyd6ZJHdmtVAq2Bhpc1KQmHGaToGDyD3sE7pzdUhgQn27mY8KfFyRypJ5QJ8QVv",
  "key5": "2CaXKksMSaw62TgD6SuodcPKYbSX9hd61J8t3zfo8ATJjGWkmRYRHhkUvVkgRxAyiNkxUaaZQoGcZpLq4j6Mn1er",
  "key6": "3UTZWk3GNiZJUkDrH11REA8kw4xB7oz8fpJjhvs56r53XNPPS3yBVSdEgpgiH1Yuto9zaUkU88V6rE2WigyssfkG",
  "key7": "2oy7GdvSE71UwZ3bXmWf4kc6BnVUHYYPQFakdR21vbBSNWAsMyRDgxnsew6vbZ3t83TJEiEB7irtgAgqXGSWxbmP",
  "key8": "bLZWTayd3QCYhVrUVv27jPhqGmhhb1vGnEfReCUEHJHTe2VxnxeibHckPGp1r76M1J2Be8rqW8xqDKJ8YQd4Ren",
  "key9": "34HJLCSeJ67ZMzXodH563haJecujz3D1cA8aUhenzhv4pJccgFq64GVYxY2myeaadNHfUJpHnNVs5WrF5V4rFoJ9",
  "key10": "5mPjiMcawV679Bm8PUtLg1DsqjbZtC6u3q7SUR2oML2Rix4zau18SpVrd16USJWkB9Cduj8qfouyrFWJojKHtgGT",
  "key11": "4HvrojkEb5n3B4Tabt29z4fLREikkV141B1wN1efnmNz9WUG3N7vgJ1Et8YPKyxJPBjESnw6GhvvB3gMy4Z36Auw",
  "key12": "2FZD8XpuWPZYeCaKt79WPrd7L4KxuVT3h87z7mPbZhTjv42T9rJaqYSW4gs3XRvsKsivMcdHyjY5wiqa8zbLrQCH",
  "key13": "3fQbCayHuaJ1EuBCRvk6uXgXbLXWTUzWavMrDEfoF7hXciq6DsCPReE7wNZRBnvRasoyAm442dLSXbMiZbkz1n1K",
  "key14": "33wVdNrK7faWygegKvuNQtGtkRgujZgY1BLAqNieCbSUh2i4rvHmvmkP9B7UWj9nE3gD1SgGXniVBS3skcuXp9m6",
  "key15": "4qx77vL8yEEE7Rq3veBCc1biggj2SuVdAzZ3sWwrST9mbMdEPEgu9htN7Xy6ps8S9JtZu8xhMDj8WbEPoPckpbEG",
  "key16": "NmGiVwwv11f6mMQK2mn9vtkWKBLHs6uudK8rfrwxwZHZXFKkr5LyUEBJW582u9Ao8Fz63MkJURENy9s89LHHmpd",
  "key17": "2mf9rn2CX3NH9piPsBEr96ivUKVpZqPNYpTVwF5gwFacsCaNBTkPMt5bd4ThPrWio4vDAcpwz89SauTfeBmZ6ZDg",
  "key18": "5RBy7JeNzjcrMLjeaRLM6dnCzLU1rEFr8WFpihkDjDevAXwJ58xKe8jBkAuzq7JqkGu7xbHgWofu72oAmZPQ6ohZ",
  "key19": "3An5idRJ9KYSYZdya2R8VAHvx4bbwrNLsbpEU6Q4a437rJxuaWeJQgx9DeKD1PFDk5Nqb82kMq4ZWp2NgAUtMQFB",
  "key20": "22B4kDnQdXHHuEnZMNboHX6tFBSe9aJbw93fpkeumfJLJ8DfLo7dNfJFXR2JAgVGgkZsXXEnU56eDnq1qZQPDrBX",
  "key21": "2dxiQ4GeSjyASdhVpt8bK4kT7if1KFvwzzPvZmFv38by4M1jxcvYXKVsP7mFyXogSAtd8X6aaPLfXBFkKpKbqpvE",
  "key22": "4f4XzJHKRNRUFjdKv7BeL3HC7Cr2SpcMEESKWwMJnAwgjDpmaTHduKKZmdhfDiAvSe6tt4zhaRU82Y7KUU4XHNme",
  "key23": "5XbzTnWoakRbDHoKSaPpbMrCED5Tb8ZHH8WYhs1F2ShAwAmGXimz8tTLQi5HF9Bwak3X6kCqqwph9AYeVqFUihPM",
  "key24": "454udkZHFFQB1EYCvQXWpT3Jd8t3vqmHXHkNm78MexgQqfX43fLWwSHQpf6LL1iaGBvyXCewMJ6YiyshGMztotiW",
  "key25": "4jtDuGqrqh6RqpHxjGTqD5e6Q4NED3E1MYqepos1pvMNs4sGVP6kYTwrLE11anQaLwDVmJmiWdMYHBfHRZFyqZuk",
  "key26": "pfwoiVD5p5sEZNSce2j3uDYeKG266ZLjTpb7PEin9dTKPF4XBVL1XitARJJi63VkVRuorxZ2hFBtBeLscgmgNsT",
  "key27": "2r8rggveeFo5meEtghFtN7mo5yVfAEiSGUgt4fmNfXg7i3Ya12Zg4pNNdfULPeXWVuffmk9fUw1rtosqP5TgXWKr",
  "key28": "HdnJnZcUDSgs5bnDhom7e1dLaC5FUMi5oKeEoaB2LoahWoEYjXd9a3FRRCiz7ZHKBrkKrHHD4fDnuyEQe3iVGxm",
  "key29": "2Qj8ybBUwBWrGjsHTuDNMvti8HPECypEBGRedMpfnsSjupbM1QfyS9YYuuPpubaLuGgvBPLM9wDK4USwPonwJB7u",
  "key30": "cwQHfnr2An8KRgnyzeFqnKsb4mMgeBf9o9c1UdxhSbJQHYYP3Q6RKT7cGp3SXMWqEC25Vkut8Dd6BxaNWGJoMuZ",
  "key31": "2TqpjfHByevkYCB7NuWUVn4Cx3WbNo5p86R1RmsHRnPWE4MEB8uR7WQDAnhd3coM9A2MVVzzGXkaqUE5fTGHsM9h",
  "key32": "4se2tTBhcLi3Re831nsqGLJsaygNeccH39wKGg659WsnsvjxYznW1uFiRjXBQBnugYoeCZhuXDk5pWPhdaQbqTMo",
  "key33": "37NsmC3f6vHvsiUodyp1X9c1ZFEb79XqUcu2ooJ9mLbGcBXctcmHkxvkvHDR46L7GF7crcvymiB9gkrP3cQ8rVjH",
  "key34": "2osnQsYXHv6mZ5ivA6i1rMKFn1Poso5Gr12Eci8jPcbNLQhnyoBNnSeSqe15tQLKjjQYr8WKSZMtw6AAjdTvQWR4",
  "key35": "5Bfuri6f7GrgJx2t8hQ9c2giCva9zMTyP1mEhv6waoVGpttgxeMHpW6wj3JeBcvxQjb79bbTYbjgcRurro3YUhNe",
  "key36": "5REfnUk3JBznFd76EBEahhks69DCMgNZypCWj28tNirnCeJfnda46k8Sd2P6aZ3ycJ4j65aCnjyCTasVvRzwWmwP",
  "key37": "3f7Pz1aZKPQessAoecVqzTn4FjntVwNeoth4DKWRpmoSn56zo9zgdNfALESprAankkx4Yr8kvJ5jGwLt1pSLjEgb",
  "key38": "3LBozihoFZk3RoigtzoGBRdNZft4U515qWFnEqefjid3HywHATSvmwVLYhfbX3QDx9rd2KFZAb5YVaBM6hEfvZwY",
  "key39": "FQNA1o6WgZn1LYLnFvKBN8hiHheNXMKxC1oZHk64yRNanxrTC7L5kpLDVM5ZYmL2vZhbhxszuopvQFHLKi8fbwv"
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
