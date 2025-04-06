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
    "2GCz9H9Zby31u3brvkZYo85FTHBydRaSsnPdqW4y3h1jk4nm6fCRBoQYh6sQfaVUZSYWZFwGZJRv52ZPdmfueAxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B11tdn3UqYGjoZ2JGAW5BFRXdoJttDfwwV6uT7E4NRntgyc9fB5LQVvnb28VjqcgNVPxRjsq5D1Du3cmQSDURs4",
  "key1": "5wV2v8UpFdEyQQ6pFPXkSWi8rt7AZe6H5dSyiRYAD5EEqqLKHHgDNZ6Hr1fJ6i1xNdd2PRQwcESLuiPwHnYEut87",
  "key2": "27R6s9NSuqjKh2tcZSCXk16qYsGRMPdT1Uz2pmBCeLWvUUDtQF28YxftPf4UDBvhtjZ8JnQzSiyMJCex3zuZHLQG",
  "key3": "2XNo3xjRpzi8zng9tC2xsY5eUYAjUVUXEMRVwYNAyDFhdYbx2PT7UjuWzZqsP1FUrNDfsrhTn7Do6akjKNB591YN",
  "key4": "441h4kRFcaTNaiX6dN8BGszgPYPnRziBkn24kDUZZU3p7zJvsA7MEMDf8T8GScNcEMLNhzPpsmBVgPRR5UMYffAe",
  "key5": "2RkkvuBe3DBENer7rQqKCXYgjQaMausFqQdfirSnhHxeSNCAnvKLcrzySfpELV4k8bkaJCmSVQzFGSW1ELEGmToj",
  "key6": "2bPHdM2LK3JhremmkPEGajB3mcZYpXUr4YnMpem4UJpTZZ3JiLKEEvERH2tkVvaCtMy84Hh1XJFZZuGFhgqJpEne",
  "key7": "2SQR5KdqnQzimC9iSGG9o5Ta4V2Ue8pHqjpaaS2ERfvJfPiPEd699i3WWVefWjVmeBUwUHVMRVrWCYFCSMkKMxSE",
  "key8": "45gvfm7BEymRF9WirkzhSKFie2qjhkHMaEarn4jrfMqej3dTqyonoiGPox7gadPbR2w9PoiD7eujEswVPxxoGLVL",
  "key9": "5CfZEsDc8r86J6nctnfZneCjqYy4j1X3txXoLV5bu918YXhXBv5kZhESNxPQLtjeMFq7FiwNSmPaTrsQSj89f2gT",
  "key10": "4Vgy85tXHiKW5yVASpsf6HdkNAA7sSUV8PkycbUrNmivwwkVFsE1C5x7n8MouPV79NLyiAymVV34AQYoMEQ8EHRL",
  "key11": "2LCwqzXwQnFogb7Xkhu6rkc1qg7rUsQNH57v3gmceTydX7Z4fqDMvimAo9reHTnpuUjcJKhzFao4dxPAAR8MCqG9",
  "key12": "2hPSDDwpqrBm8KfnHM3qTNkQ3PTq6Wzs5LRt9aeqnm4auDC8ZN4DBjTF586yjYWEXQxbZMUUFqY1F8DXm9zHKRkt",
  "key13": "51BfLErLH4ULD9DFJVQkvcGHfZPbrPsFUtwKrBaNsh96VG2pSfTjazM3WH6WLcNvTwecmyNGjee6jdxif5tRpYTR",
  "key14": "4oshYQCxygjUf7GLemNXtwnpUAyF2q4yGw7AAaeDt95dBBDZ4497sUyLDKv6d6eH8GPuseGJ8ha7wxBQ8mxkrv5t",
  "key15": "3U8HLLceU1Mq7s1pVdSFKZRyZsKGK1wZ2ZAyBqMWYmkQFspR2s5DMyAWhR7mefviPNUht7JxZMUdpHqB9C7okDMw",
  "key16": "5kDofpEXMv6Uc1zLjsy8npQijrAaeK4hv71pejurfzN6CVog5toDQntf9at4awetjM34oocnpHnLdACFvtPKrRZR",
  "key17": "3teTQKXRLrU84XDm8AAuTn5GiBZtRRoz3RoMzdtm62ZmnwudmWt1rP77MJLERj9bjcKsgHrarMisfkRBnmfFYrHQ",
  "key18": "5qR7bmqEC1hXuu2fmcFUU9Cyqrdq4DiAHEyHRPvWg6vBZM3veKRPqwZ7uzgKmRkMLDbhdyt8NHgHpbbXTMvsVcHm",
  "key19": "B7a2cQnwtV9ed682ygY2yyJEPa7M8irKeuHfc12afcGShmt5bm4DXiPr98xmyeaXNxhKg5rg5nG6w9jrWJ2qbDv",
  "key20": "bu2YWqt7FM3iLFj6xKnYN62gcxj2kEp35PVsSNgmNQXmwAgMMhqC44WF2q5nbiuCaubNK9adfB22vXZB6kbongi",
  "key21": "v4PLAk7D6ReFEeDCD5ouikaGzepwVoGMZhKFQbDxgv3smb6G5AtaoEgcg2EnWRMZ8UFUBQpJpn33k6SFTfBBv2Q",
  "key22": "5uszEgG3pu382cV6WKLyYVt7N6UtHhjWXbojLd49P6NpF8ejsqrjShb5PKFDqxCFkw1MVF8PP5NNvhNSBGnQpCva",
  "key23": "5beAxe15MSuZi6PTqdbVJENBdeTx8HLUQeDL21isbummT9S4nxMkGp6X6xBgGhC981HnhvUigVEkKWnQzGEzWU4Z",
  "key24": "62Lk3CA2khJ91sqXYGG1Ax71bhs2eHtj9VZhRsPhRarsDT6xQUGzKGxi1mSJanybbxJaR8816f2pQz5xiRwxCij5",
  "key25": "5RvkbcJw2N3LWvQ8vAuXPPMRvG1z5a5QCjhAubv5iUtcusHNiyxcCc8kYHV3QW5bnVYHWeGAR8UgZXn2ykjJoa3",
  "key26": "2cv2wVGSsS2oGoyEKm7fBUmvZjSBUEmEPUVnnymRuGF5v7NPUGeYqJHQuPnoCDPnUYryS9HMpqgkuvTpqvn7aJmh",
  "key27": "5TqEQv2whFCESTSDe7KKKWqx28hmX519U4hbmdbb1VQF1e1m6LYfZVreUVeib5dL7msthCWXrAdguSoDJL9KG5St",
  "key28": "2LwSFGAjiszWbCe9PzcrHaCaDMV64LXvAiW9Npp3VHo4KZbt64WJmBqdFPdgR28XtPRzg6hkcuD6hrnpWh7ab1ps",
  "key29": "3EeS5nNBhTyAWL5g5N6vnWN2BHDnCwLtwEHfzvmpKZhDFhRcQccm8LwdohhdWga4mtZDMZBNXi5ASoFrMGHaNcrd",
  "key30": "36RLUreGm7wgrUbHXgsBmUE91rkcg2m5gDNuQqC8dUQaDjqb4A7Hra6xBr39tzRUmffuie7xu4fKxLSWm3gXzdST",
  "key31": "1moN3WyuppLQD9mZ4ERBVNhMqcF8Kgdb662PzeSvaF4dU8Kv14rueFmYQx79PQzcDGFEbE9JfN2eineBkJrDsF2",
  "key32": "3BsTbMnYp7kqXHRixxeFTRdKuezVf5mc4Vk1U39zVyjbNvncCgLZ8QFd2FaDHoQzbzG18LiLqLVufrZBc2aihaL1",
  "key33": "26hZJLKBhG9of6Mr9CX6eNiEadjutv7qvEP4tM4WS186FBMDJGjdLK2fp4pt1ioKxLTAjc7b4fYmEcFtkEaZ1vgG",
  "key34": "4YjKMb5UWD9nvvTdxqmu6ghjV9FYxMYfJvSBQkLM9kH3FPmndHRcYxNdzRH7dp3yizyDXmJTpsfYNfN1DsDkZZPM",
  "key35": "3iC8MqvB1h33mbBAGyHLqQH8nUn8ivKK8ZKqDX9NK3x6UECo9EbScH3pG21xafi86GKKxfaHFTgEnh6dTKHCWsCt",
  "key36": "4Nb14qNF1wYybSv1BN6EcnSNprH9m4rEsjVk3n2iJyVVPhHZtqiW6mMvJaCUehfApLRek7TbNSDWU6ceBcbQRFmH",
  "key37": "5K4pkWgY633bEy2DDQPQiiUCzwZmo8KDQBab619HQyb4aAcRiNUbysARkjV6y5owL9736C8bTZFCBTXKVzGtsRjv",
  "key38": "2HR16huwW1zsfeeNC2pHfhHRgrr832woF27mwRDVMDMg1PKrKpDY78QpqKeRr2cuhgS7kXAndWQ7wfV9uP5y8z9J",
  "key39": "3xVjbvC9DriXwG3W2R3NKyiGbXhtpDiNEbWwEAubWtPoavx9VceQ5riXGPALPb6HUW6S8dHkCPN41nrtxUMuNxrw",
  "key40": "4vvsNsYNCN7wvu3A6C6JKoK1QaykwArUb4WE9kaBcDWakdxtZaBR42h6MoYhWWtVTCTMzBs1jwF9xfQ4XMLub5U2",
  "key41": "3Vd5wqE7AVU92V6YYr1ZFyzqJMsxq7pesEMUUGstEHhWtEPE1sNHXa7JfkEbt7XeVBkaE2NNXW7z3MbdN1eckGQE",
  "key42": "5rsaXELbhaEUThnSf2r7mLeUd8ykswDxN2nLkDkQjWR9oWZPcThqwHZjtBF43kxbcDURU3VBMVZE6UrRnQbzv44L"
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
