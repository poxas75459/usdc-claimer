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
    "3RqTy9YZGmQWm2y6cWExGHdWyozoWcdLki411s9oQeZJkt9uXeDrGMX6yWyYJo9tYob8q9sPwshZPU2pGAWaNN22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eMj89smurUejNAbpJbzKHh3rifC3rMsF4XFeEDnWqsgzGe4YyV2gwVytt7TQ9WsBh23114wnYXpJL9Tmhd2CYSt",
  "key1": "5pGuK92hnf6W3mPcEM9ThWKHbwS4JCwxdGXoV3fNSxGnUkyQzFgYCSqsycodbVDCbArJvyZ6kgHUKzAkWqehvfxR",
  "key2": "D4K2zhezYHrhtXhMfZk8VqgTaxykWd2UayWeC67oywMVWFunzhT6Mq94imfuAgeJhZV3kVpQirwXLk1zQCmCrJD",
  "key3": "5GQGS5HhTqVMi5Ly2JnTyhY8mb9DKCr6dxC1jNNpKTyBnkoiNKS3KkB3SwePViM7DeuwQjsh8c2a2tnBuaV1apj2",
  "key4": "55ufdSbpnKXy6vzUk2XgLdgWw4ee1MWtKKnFguz4ZFnLKCG8tUSLuS9Lswqi7YG3bc4ULYGfk4te4hpPp24GnvEp",
  "key5": "2a5BeHxU66fsvNmVAX1z9cm4kHUgahp75caWENJ7BoPd38XNZ1aD2ECbMsvFWhBhSWponebDrmu9ewAMhpUixwRr",
  "key6": "232pNn8nDgS4qLKtHgzRS1SfgR5Zs6qufUHAEFsAc5Jeb16uGuNp2K2EBkCKRb2PhfPWpX51Zs7HUnWD13LHCUxR",
  "key7": "2sYsRZ42n8V3Jc5Yur9JYnQ1huoGCCySrokdgJzn5fhWJiVHJjQTGXHBCyKWd645jkJ5twXsRmMznWaJFxMuBf6B",
  "key8": "ZTkPas4rR8VfaZSdceq3k6emiETBNdzH7Zp8xjcTpGeHW4BJsQjAzNhCEnEvQGbTemqkLuH83rJhpa71meB8Zag",
  "key9": "2quuv5aXtBtnmVC967HcRKksCgTrmVajmZontc3dw4BrJqcBc4i4mofGupnGdW312NoL8rb8kWs1kxAY3n3bLuze",
  "key10": "3wTSofZ597c41FywtLKnbfkNJy4q19oyMHKnXvkrXMgGnbZmTHkJeeZ4J8emaD7ZN8LLqsnt4h4PSdPqyuSKoQu9",
  "key11": "4HdUCH3trGdYCgDCJ7UgJ5qrnuonSZgffxyEDtGchxEgw7JEWnME5Me9D9P5pvCAQErRXoHFGMgLpmv5rA26qbNs",
  "key12": "4KK9o5CQ1Pc7gy2GpUdbSm3pJzGyLBSFQ4VJEzSSwZTtEBpJiTBu3FAHSvNvBBX7ijatEmDnGsvSJDQLYJEtY5rH",
  "key13": "434Rsou2wUJgTNRCK3KK7zPbShrvAkdS9R2rnm2dwQHmEEyxrJXu2wGDCjihExR3HpBNEikPqzygm7G6YCZUvty8",
  "key14": "48mTTJthm3RkHrcYSJq3TeeuEnmpW6U4dHvHYNDNLzQ8VmzFcQfZfhDGQco2H4shRrCFayQuWeW4ehCS7qNBBikN",
  "key15": "2ey56gbWQfqrboj4D7XwAw4dTaek5o6hVrh6R6eC5kr8JgJ8tLtHhmXoD1D2R6QTngrhPuNToVAFJzMnpFhRrLYR",
  "key16": "2TLhDbzb1sVW3DCGFU5H7wRm3u1QSz3tQcDPPL445uTJB1xexxALcYLjpNVkEdqCVBnZjrNqVesDXAxxSLWAh9GX",
  "key17": "56eULF1WCqi3jSzb7SP39ZksvoV7HbH3E1bNCQph8eREPfDVQm9iHmLLYvXKSU6tFsz5jBk9qm3T4Ag1sJtCMbTm",
  "key18": "5reSmaC4cyoji3zzPzn3W5hPcmnVMzhwNLFmioTodP7j8nsEZMKVLVsG5cDbkxGLByyqEZ3VVqaZub9vbNmjzdqA",
  "key19": "wTpJZz5WehH9i5zYrXZaQeC2isqKnTYsSDnVrfq1ncWG4LA9XZHtZvd7k84YUKrRK8p459XTUPWUB1sUKqvf5mc",
  "key20": "xdsNRxGXewftuSxANwywxJZv2PAvgvscYjz6drajbicVZQdzjngA8ZwEKWPKef9WVQXAze9svM8gxPkGi8y96WR",
  "key21": "4SAqBvuEPWXajjjHyNaPnPpxikMne6bxu59P1f6BDi7MFPy7mVHjmBghfyemcrq9obFA7nVvf7KKnzsEVLiM2Rct",
  "key22": "4p5Y1zYNR214UySRyxXvA9e9pDJCBN126iWHNE8gYsjmx4A2vhwbtktZtjihDetCr9KMAsfEoeScQwoPuJkGVBz1",
  "key23": "4pZYJhmQQUy5N5ZjzWnGz6VhLsCVK27ymawWgxt3CXnRd1FCzZqpJdJeQBykcGQdKFvUrtX6aEQuDiXSWYkxsW7p",
  "key24": "456qBxm2CmDBpexTwy89wvoQ4owWpA4Sr3jXD7XCsgKeHtui6MbhqzKPwZjJu63eD3puBVjRfCN1UX7Xro6hBNUN",
  "key25": "4MCRDsfSdvavq3eo9xP7boNEbA6kCEd3mVSBB5dMst51EMxtqHPWPqD3KubQaxdKog33vapsAPpAHoAJXKkWcrMM",
  "key26": "57t3YMrbrn7M9FZEYBViToifAo8iwe74cH8SQhjAXufsf5PCfHKPRE26xL4f7DkszyXoexDt6XWTpSBPpMBti3qq",
  "key27": "4opMRJtzGatX6g1fmwncpcRpEqkdppRkejYZP9v8Jru1YoxCbuipDzvgeVPGC6P8i3CdrGBejqTGLKWgn4tmiTCH",
  "key28": "3MKKMf1377W8C9G5pTNNt8fifuLYPpxmdyQoh6GpCwutbYA2dWRQr4UArCahUNqGJqga1G11v3pNDsddrYJXKSpf",
  "key29": "2d5ppfF5PjHB23PPvWYyBrxfLCnEVZKmK4FFG5D9ApE8M7BGCbahTzSgLf46mfhY395PkaFwJEoYhenCpVxshMde",
  "key30": "5Nxyy2nXUgejgDPnpf6gETFAFCcH3gUjFBEAV68VoD3VqPSn9KusDxSCZhrACbKz7xUZzouJyfcHDMW3J4hhzFR4",
  "key31": "2qB786NeukJMTqtNnoDga1C9q7KKCBaUtjX8EKgKsMudb7ZSNRxgozidenok9xUWDZgtuKY5r2DuAUG8kaLMoHtt",
  "key32": "3ZtbhrgsmarPK4tTGFk1h66L1eFht4XFZN91Btx1FPhjPGRHhtrWrjT5opJkuAcxsCadNRzbSVMZ8mFLMjS5KEP4",
  "key33": "gHjSf6kz5qBQvq1BJeGtFERFfkZ2Kcdy73SAPbKDnj8umxgcZReMfWwSvEWUhVPtFubB6pYCfxYYCvUw6R9u6Hj",
  "key34": "62fsCm4cBvK3G4AasYyVQhJNoDaenZ69vTies3et6ymbXgoXAn88Qyc97H8K2irHii7NjA7hAX65g12yFZoHYQ4g",
  "key35": "627szjqpYXUSwqGrLZjEZq1f6mkgvEY29Rao9APooBB6KGuFcKRqTf2871P3FzQbYTG7oFRU5e3ZkNQgYN2k3eWw",
  "key36": "2E5WRzHPCGbj2tz8893aAkXCfAGKs36m77M9VRiRKeq7dm22qCZnkLe9YCRykE5iHqyJWUHEozurKDpuKepYenb2",
  "key37": "4cJGgnVMtKSPVRdZqscE5Gga8pdBuXzFvjxfiouWZxDaE5AHXB5B6NAD3RvEBqAgDJWU6BSYieZfXWYagX5zVpfe",
  "key38": "4fdAu5urBy5X4QeGDZwMMrA2MaydUHUDYwKbfvfwUcm2LrqL3rXhkVry2theqiMujaMVZhbDqU7oyxAMrcxxwsBp",
  "key39": "3Q52BRG6bTADA7ScMs9chdDRMkfURitaPyGTPhsSUX1CqchcahGX3t5bTeJ1nPXdVKMfNjg2KmUVhnqsUfLyqxbp",
  "key40": "65iJzYaWMLCNg2w5Pj5VpiHcjTKjBJkKcbzvTghZcXw9MGwxc3WyvvufQKUAsF1zZed4YmnWyGRQv9qdstb3HA8A",
  "key41": "3kxs1uGDg4UaW9EAremTvMtK93s12Q6jrtt5KSQQmDxsqpnuS8HntdobVbjG82gms4bgwW1rwbB6WjPiMe5bJjAU",
  "key42": "gKLXTiwA2xASLq4dLPrUmo7HRa2Unh1huCzdMTNBn8BSxHhAkKJRLKTa3BfnevsMJwLDQUiV2psxxizLfDyyzDZ",
  "key43": "9yUc177WvPkWDJv7c7qytAbe1zK3ijR6SLxJBt1BSLxPikCbHPL52ZJYZKDfzSRHw2U53guyGAi1iz9EDs9zZ9F"
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
