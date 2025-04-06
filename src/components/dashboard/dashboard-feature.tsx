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
    "3AJsYLfiFDxtsfs1pC1zPiCYtB4USVNyyFR1zHPyRhjRLruFJnja2mH6cCLmY26g97HrXkuh2YQrKJmv17ru8J5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LbYsCtLQDVoC3fQ8LPgQ4SVt7sERc6iVCQZfhFfJ3A2wnjmYBK1iNQ43a5yygDwA4JNskJbY7BiRxX7rP7choq1",
  "key1": "2ZzFAL3Z5ChenweDtYyCJpYB5LXzZMk8BPkDzorKJSFNTWjJ7QR3E11yUohY7C5xtWfj9j2ADNvYP6EbHpapueQv",
  "key2": "4CQKJbeFh5kb8ULjUmXDEkqSLPyfsJ9WkkGN9qHNuSrPj61S67u5j56QgPdBAuA4gseM4jqcmraG69yWAzqYcZtT",
  "key3": "5DrKC2UhkK6HoFJ2ZbLwks8T7jh4uFs7vstcYB5AK4CULyKsX3wVpCTvuLWqsbQzVykT9MM5JKjprTtjoHRB5FTE",
  "key4": "22tpeJAkmJxHbrNC7AD5qhYwwoGCK1qJJCgM82SPFVwjR883Q8Z7eYKUCqv9Jm8BerhbNbk6HMnLGc8CYjngHTWQ",
  "key5": "FQeuM3JKSs4Nwsz81SZH39uEUB8Cv5oqWs8sQQT93C2136JBzUprpjtvbNumi5VrUecXk22dazHJrVpokyXxctB",
  "key6": "CQtgUmDBTyggFULWkWDL64u5k45S63cezysu8wrPni9yVVyU2Jbgv5Jo14aA1vGhen6gYvQWRZKBz42WT5kA6k3",
  "key7": "55h2UVmeAnqtQqrs5a54nJr1gKdjokZKhpg59Jtb8LS3SxSpgNaLDSea3QHNrdeWp8QUqUHyxqEdYR4nwjT8egSP",
  "key8": "3Q11MBfNK6sA63f5B1EwLBH3KCVduBHz6WkTb4BUtWnZQb33QdH5k7qyxrSbXe7iLZKV8Xtc8HaF2zTvzdn7ecVz",
  "key9": "5CAX6KVxCnZhtkHYp1uTHqmNgRWV7LYQUU4ieaWhpcGPKAjfdKEQukwxQvYYpqvLLSAkAe3YS6reQXHSzmTo2oBU",
  "key10": "5R2qekEKGMSAnVZrmqYfLx5NteWxyoRnRWQq8NQzzEzE358hU2No2UP2QuSwzjJSdcsVm5j6gWDsE1xbRAcLiGkW",
  "key11": "39DRVJr6dZ4LAx2uZ62doXcj4A14W2pyyeoMYQvRLBcJb6DWjnYG4t8Ztsy1SwdysB7QYh4njNLexMWWNe3hKm5w",
  "key12": "2uxmnGuwnDtxWKKunrdd3jdvZSTvG6r4jCoU7XCeecTnYKFPJdLLFVB6vRcM9Bgv1J3YqNgLoLp2xCm1rEHVouh",
  "key13": "2P9MFkzu4jceMymcK7MamBuS9dF5kLMendbcTeYX9VtQSRYiEmeRdfHfmRTfVC5H3woVok4oZmLS2WEfgcUKrAko",
  "key14": "54a5P8MMkEnffmbNMsrr7vmRsHMHydR5xaJ2c2QxQMes94AqYRxMe7WagEFugeLZTwMBmccMmoz37AeedQymChM",
  "key15": "5CRxW7mUPJvRu83M2MhZMShBVTjdZ5woE9hh8F2AYffbMabE5asZuNM43gsiHZGfgQj6hP5MCBYuHXqTtVUb9kCm",
  "key16": "5AhmZpYBcNoc6EF9KqoEnFkgg9uEFSNudweVgXRqgoweMCPCGjTkimcKzwb61vDzThAEvHMMCRfSd7VLoyVqQj9Y",
  "key17": "4bg2KJnproxMC8YtZbhSFT1EtKU2XoCPxDqycZqbd5xhYsdFUXYSf91N9JVfmcoz9sqECTF7vH7AUgxKHYPTkndx",
  "key18": "2C581DKFpQhJW5YzWLLAwco85MTxQ15CThErdjutDkZ7nQozNfhcXaWaK2NYuhW1vuibnuNAoZERrvQL9sKegXvu",
  "key19": "wNq9vgfzcffVbq4M2ZcdRuZMzv7TNGqubEbEgCiVNKbiGkyi2UziCLYht3yq7qttzJKnLuRHTmeXVe7XrVwwqyy",
  "key20": "5vQsuSx9j32yKQW1g7p2YbD4LE4fCyScLYS5t9roraCZ6wjrSP2v5394eutv8fH2jBJEc1bL5aiETYkmurUpYwDN",
  "key21": "kwSk57FJeD8TiQDuhYYdKENukn3FYvvHGC6hwg6drFAJ4vJYDkMi8UtnM6Z34J4ahz3tXqGUHvLHt6LUxEBvtw1",
  "key22": "35dHdud27vaAGWMqogcJaTzCXU5RVnpUBooWR1HvH2sKkto3sE7iDumsb7ms5GRaZkGSUgAUQGVRkRMGnZRsmLtt",
  "key23": "1MHFt398pE1H26wANCWtwiNoeNAgsMqzBwBBhZJb5Lk3tJPFpd9Ya93CxmrJJ2t8vFRwv3GGuR9kMRAwNc1HRku",
  "key24": "TAyjhxE7CoQm2SK5aA2efdqk4aMRcZfVYHarXarDDqgNCzgLk4zp1w1TLUcx698HQoS89GzrCTbWb82ke9fNjEA",
  "key25": "5cbZA1GSuoJ3qJkdW1GNHgKivW8PcZ5Avj2Mmyh7yB9TuWVqhqupf57zc1NmYiVNcUU6ii6Hd4zBECAdYRPj2KZS",
  "key26": "4WtBJqdPmNy3qGXFoNMDp51bLuzPqAJVL5nhkyFagh75A8mcuRfMP8bTGYAPuqdUa4MX9L1wPfMZwxi3ybwqVXYD",
  "key27": "2XMXpLBPJBw9FAhfEm18D42Zp81rTnM67B4FvoZXgrSC9JhpRKZr69isc2xZt2PrFyyLmntZb6ssf6MFDn91fv25",
  "key28": "4R5RTxs7rHcW3o688VYYZByh5jJjF7se8ZjanFiB2NRjYKVasi5zPB1VWcmeuwXtJgrBMWf4wxDmCHvW5R6CeznS",
  "key29": "5jyeuBt7YSowraBGZrBg9A2YSAsPCTUCdFXB4qcYNtyS2keimRHsnPyAWaTq16QY7HvVLbTrNSh1s5Fcrufy7XSo",
  "key30": "2gin1uXbWPthTaFhXLxeZochd54dERUdS4omnqyA4zfuyGQ8UUaPxfBcB3dZD6AVuFTSiFX8Kc28pyGz5CtyX2HU",
  "key31": "T3y6xJquE57GfYqeJkdKeMqfMQV7q1c1YRJj1MpcnXH5ev32zPdqoX7a2XNnErzpcBu44bXnNmAVUgWR4hfcAVT",
  "key32": "3JAzN9uqhQwCezqxLvvQoz4nPs6GvVqUWQKKRvUsXb9gQR23GUKpkxuikXs8qdcmywWif1CFZs3dNxP7MqaSMrJK",
  "key33": "4v3jaL6iCWeg7XXW6JGZR1iRrCtSuaAmHXowGv1SgDvnvgUXmsM86dWhStjkVNARBAjZSAaLeJ4nCBQbGxptcKr1",
  "key34": "y4WtBCjVyroHvnN5SH3td7qMVSrhugRVcApeSv7Kts3Tf4LGhM7pedePyikKnrB6b8PreTHfwaaWVEgHApBvwmS",
  "key35": "UWMYcVZkRmb8CtyxyPn6w1yaFqVmRZVZ9ggWymedtcZi2noGdfMwEYwry3oeYdoaC2snh53yBRSHzoMEDH4NX4c",
  "key36": "5NPPExUAABtBPWmMAMtNQKx22P9Hzu5t8TZhBHVNVFeBxQZrhkD3WPRWYfombVe9Cs4mYK9yr4hzKwFRbS9Gx6i2",
  "key37": "5JrEvVoGHAdgpKbMntP1WL9WZfXpW2qGtiQFhzmzauMs51Z9oXdFfj9vmbHmg38mMvsmbUEDrecDLSFMmRTKatzB",
  "key38": "4sMPwfqaHMjgiKUN5cgJFx99qBzjenSzeNtWf3eecfXagFaCa7awnRB4S4eRRuFfEWAJYztqkFe3hWcF9H8MxjX",
  "key39": "3cao7zsgvXehQHCfcoL8f3YhYJ8SVsyAPRFx6WZA5Jf4ibEv4isPCYA6juC8sS6Ex6bt9bXb6cZYxPR67PSLR98K",
  "key40": "39dYZK2jRsCprga6UiPPurfUKzsvu1TLjagYWQR65rWPTm8hes2Kjswi9rrTmspRJNiSfyvTvrwdpXFkNp9DFeU",
  "key41": "5NpRGYhL38qjiagk2NK5czF6kq5XEsSviHVuT4wbcCvvbvdKc1BsBz6nPqc8iPFdJK3hcVNpDvu4zv61fxwgbdrM",
  "key42": "BUAU2VTsvf61dVD7owg5cJwoKm5LqwQ9EcJrPozaacLxEqh6LudrD8ZDeR41GYJWRRvyjPTN9PRYzE5XYjETcho",
  "key43": "2ha2KgxmzTwQQ5wG4bpxMwtCaB9SLGpbktKLQyB9sgvtY7S4g8w49mWiLLY6tvNXsMd5bV7r4bvXctsajsk93oeb",
  "key44": "2uetWLgPourKBFDvN83cURzNMz2k18AjxrmMLm6Ln6NS39WkLJ74K5JRCGbCqFsExHiyVbBaqsLhUL3gRG6Sa4pA",
  "key45": "64n3iRgHyfXs6NdV3XqHkbdXV7SXZvzTNPgAhGPbEhbbzpLW5AEVUgjWWSjDgtxBY9cqUBdKvyMnF97NjgGyRhb2",
  "key46": "ePxvqMLyPgxuzMeeYDWAgQCb3p52uzEGkAXVqgJpjxvpUQLiuPZmrCsAQAKtchsJtuRkrTGgwMB1uCCR7oTthey"
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
