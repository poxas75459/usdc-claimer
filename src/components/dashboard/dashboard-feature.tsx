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
    "4CFAvTbL9VM4vuBLEVoQaawidpgYkxDHFsJgwCYDoTRUwcSxvQY8HtKPqQH8eBQus7sPugd6sryPchWaHuSs6Dgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdqS2wxTznoPam2GvGTXP1B1iPU1BzYWLFLtJrZYMnZyR6ELELGbQDfJYEXPt4orvULRt9RKriAbbbs6h3Zgx2u",
  "key1": "4pH84617rhDendbJXCQezSP4jNCwGuS8K1LN6kgeusuTCPsg4QQuVZUfaovj9ahX1PhXw8z9gaVhNUoE6Hb3R4fY",
  "key2": "3826rfbmJc5qwuKX8efJptNuYnWA8kc3MCXiY2wHq5fveicZvZNK89tn5mjyJjaKoQxyDYEDdFiPNXWEdUZEa6vv",
  "key3": "63cGyvfsBXXbh9ZMeqBhuX9LnazTQ5qkZwSVPuhGPqn4EDkZXSPGksho5w81G3P1Np2s1XTUgjxFsJ5C65G5ck8f",
  "key4": "3YsAPzm43qU35LBDcYSGq8YG2bcFtbLEKQenqaafsBfKmPSdXdDzQJKgr7wd1RFYcXFZ2qzqZURNwE5njrx1KdAv",
  "key5": "2Nya7Xs6w4ukbfTz2F5X95Pw4KonScem9u6XEgcqbm5qyikWrA93XWrwB28Re1kW6oCzng2LF8MVbjjdzVrwF2ov",
  "key6": "5UDG5TaVRSQ5dDzuvEhRtM6E96UwJPUPMwmKZq1rNU4HzjoPU2CxBbZgAcaoVHo2JZ4K6gF4DNvodsxWeoHV4TGx",
  "key7": "2dEVdhzo2nV8cisQVcLwivizWYafXtPhEumASGWCevybasVzc91aNsgW4oiaJjj559qZ9RSpwcWaPM5YxMWe3JNG",
  "key8": "4UqisJt7JDvrwQDtjRRk2z88fgqDYCrPCHJHXCivYfKYJd5y5FgzCrcyFpywePRcnQmQrjCjAkAkQs29akzGRS6u",
  "key9": "NKPVChXruhCppxtv2HXr4h8bJ41LXD7n9x1UmexxFuLVx5uNiPxdNbKUqQVCgE698Dz4NzECvVw217J3hNL3Qfe",
  "key10": "3mfeYefmeddNftySNrbHP8LZCJ8VzqgBrAwYjjqNa4qjwzuvBf2TEdYRTkLMib81sVT1qW9qqvo15mUvCKgS6ALq",
  "key11": "1tFwdifdHRhZLtzYoEsfkUYq8m4whUSyhbQbPkR985vNRAMUkkTA5X3TwnkHZ2ADEt5uyERAisTmZXe15j1e16t",
  "key12": "4RNzHqeu3YJZNpusaMpByRNMHfx126bjWokud9xUTBExdbgf5SxLTt1oUQnMNWvdgwBoD1gapJwdcrTnWjGp5BZH",
  "key13": "2799MJBmuxWq2QfQwhSH2HyUBjq9ktXSEfCviHX6FcpHA14piWdsbYJQnpSLd1NhGf1csYRGiLo5wMe53JeEdwnM",
  "key14": "3TztN2omXUQ5W7qUuufvD9KVoYp6QRGzvZuZWqFNdZZCwofVVEnp5YhnfjX49cTKK4SK574E44oyMzuAJn99Wyz1",
  "key15": "qpwD7Zg9QV1K73mqj4aKnbTt9zvKp97fXkYEzo2zQjdCPYZv4SijtDf8weQviFXBA2dmNBE8of4H5fR1JL6oJeW",
  "key16": "4hsWs72ka1SYJD3sTAvhJhQXMmnGCXsywG1pgs8j3XrYoxWHr4H7FvFF4rFZov2b59a7rKBiB9hgdWzjrTgCNGwm",
  "key17": "2HHXcVQF5kvsdC257Eps8CGSgZ3cQ1GKM2VxSRNy2vJRA8RNF9hSUFujdMyRQaw9DCRaBhGkpiZfSTEUVy8z2jkc",
  "key18": "4xaAzZ6P6s17qEhYwEG6Lu9f7Mm4X4KzDbZmj2e2ZjL4onTMNQCuNKMHw7Xz7M4cQoM4Lko9YhmHo6srrLDzyknT",
  "key19": "61t94jNZZWeWMwye7K72xNnZoCxJZojXpT6HFj5H3MzhsFAoKAf3t2fofXwNgAznqKmMv2XNiHqMbPLJk7i8fcDc",
  "key20": "2scukY314h3LqfHp3zKriqdyMyMv78w2rCsoWDJRkZx2HVAB1a2GdBKV8yJ53MKzvqnUBiwhfb2Ph9Ci2k7QuwT2",
  "key21": "5mKKerPgFPcvGkhXE3HsqFk7q36zAvruWHEMFVmoc2sUde8vMyk7XvtHgnNW8GQxL77gksYwPYpD97fn1i75R1F6",
  "key22": "2qA6J8FWHVttj836n6VreNbxbc5qZFJZdqX97EtST5uEoioa8zh1KJkTtVrCor2vwE9Lyauusu7UxuLC82MH33P8",
  "key23": "sP7jJqhE5h3qcVgdk16MRaU2v4q7UP1MBrAsY623xKoquoidWeZP4nVDzF25rwYsf4dwm87o4s5XHPwPRrh1qqd",
  "key24": "66iKjtpckyTCfTqMDiZnjvMZBKxmkmMDDFHVMYZnJyiPVPuBfsbk5dsuiGHnjDyWxMW1TUHxq13vAo5ysRYbPeLb",
  "key25": "3fdyFdwwf2f9QiRbkgPiyAAmSHQmcmg5jK3FHNLYgQaH7iUneLgcY4cHFq7fdzadYoNHMwSkX7q8D72g1NHXHnhY",
  "key26": "44RV4hVxqHE39AmK6NKfyQD1hgQ5PJYXxtRk1b57b1fEo8Y3aRhk7wpkN4rttQwRHsEGS5gFCfJUYfmqaQiuTgY9",
  "key27": "4gtDK1KhAq3tpMhRF1KmJgyW6ijuT9an4djWAZTMBnAmiPLwvT4kziuUQKzdKgrd4xbQjQTbwQ3oSMzRHYZGNhhx",
  "key28": "zXsjQnLQozoVsYaFayEjYtZ74PNjX55rroiXRAnyVNABovQwTvEcJkka5UbQjfwnhNKF8b2eHjjHdk1Vnb11Gns",
  "key29": "5kyfvLgn89mr9vqi8Y2YHdvSzKsmPA5K48gBssPXKGhntSh7MAkt9C5jiQMogooKGnAs8J9CtdJnmu86UqEngjWy",
  "key30": "5Qq2AzMapSf9S9fnbGcuxe85jZPLRfvvdtJVBeYbHAae7gdbw1VXxdLaGyLE1eu4WfbxXSu8RDEDSPHC3uQWyT9V",
  "key31": "3aaL3WRTik7rtoXiVyKnFdLmVxgGSXeia1j2GXCikjEzciF9mQTGk1DTfZ3H6y6sQfHcjJwn1CoB9y8e23QADSFc",
  "key32": "23M4wSEx4EcoV6TUGxpnebbh6nxQ6EMHeh6LM17uZZ5BwRqNd4PACBE5nKxNZwsdQEWxGLQpko84XwGBWmCpba2q",
  "key33": "46zuWvhmenHFGTeXx5a5khmpM3w1kaFhxUMew5osBYLurG2EShBkxykDW3N6fHgzqK54Vy3B9XZfvscfGLABDGGT",
  "key34": "2nDrZXAL1fS59Rv43zyyyVuT3XQ4wg9uxCGZ1qX2bu3kqRRhJZvTZqwuBhHXsUAhwF7HTgeLAtfFqNdQxrsgLT9u",
  "key35": "49oHGqzdJsmbH4x7jGzLnjwrRpGS2ypPeNMkry2jjJDEsRUwyso8aXwFmPcJjExqZggDcQTJ2rXjwQ9vG3MrUawC",
  "key36": "64BaY93y2GauezrjnV2Xu4NF4WrHgZ9zEZJQxYUKj7gZqRQgND42r3apVH5Vhw3wWpbxZEHrtKavnDENeJrCGzF",
  "key37": "2drjTuJpMeCVBG7bR2ChNd8KZTeKy9f1zuJgQq8CAAf2JSkg9XrYz8CxcbSzRbuW8uQvh93si5cALUrcRqWm5Dks",
  "key38": "2zgTGGn2h8f33JPMXRPn4jUTfkBrsBiVySMdtiYNmFMcVtipangdoxQKTw1C9q6QFHH5RzA3tyVdghN71Pq1KQf5",
  "key39": "4hKFtTfm7JxHFCiDoJ94zfTYhCdM9yA13saP6Bb6wG2HBD2jAmGbYf61XQDH6nqmkQR5bB7K5hF8wiZSeTqLLpeq",
  "key40": "roQ4MeqTL5tSpYcfAsigtaAGoLG1u3QPj3ysZHoKhiCtUxVdP6oTpCc6cvJMPzJHuhEQL2iiVKqa2Lvdohda5Ms",
  "key41": "5mg4BBhZMn5ZNu4MKDJYSvGRciuo6tP8X1tWPu5duzq7YyWMd8CRa42oE2mu6pmuNnWgHTEP6GzJcVYvx4xgwRyo",
  "key42": "2QErC1rwMTxmiAwjRjCSQ45tGf6MVwjLB3a5ExrHDSzhk838cDNQNdHhZeMsRct5Aai67Rc8ZwsKNcFqvabj7YDn",
  "key43": "3Xfbit7pRKe89XJEKw3S1MTmXgvRmmkrggHSd3312zM2fD6GKigVxLWhvqMmjAY6AJS4x7B8zKXN7oN7r1FAVaHv",
  "key44": "4BgkveLL1BDZE7qYeqL6GGvUQqb7uwDEFeMikPwXKfWPaKMmm9J8PTDp6Do7Nbx5RSBbf6Xuoidpy9B9AibjzhXF",
  "key45": "34khSD8Z9bTaP7jNgRrSCV1zr9FxNpyY8X3pAy1i8F4vF67HmBevgqpkQ3meRa8MAuYobLiMVB6uwtcdxivBsSij",
  "key46": "3C1zRbTrtWAJa2BTHBn9mQb4YzPSZQL8LaQkhsCb3tBgUkptqbkiZJeX2A4KRF3Ar4hMa5fHAVExPcmExPJYVzQe",
  "key47": "4qwgAtbf1UJHRvv5ebA2cQ4CBho1fMJMRhtkTWXNVqrecWgXaHKup6sHyGucRgq8Xyy5ddkXxAYzpjRzWDcVhf3W",
  "key48": "3gmkWaNuEedZJPUKQrMdUM65RwX6kbrvcYAbLapiErB38rJipdfF7KYHN5DPdRFqf7S7yerQKJZFE9R4vKEe4UeP"
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
