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
    "4vyVPPGW3J8qyzqrqVnTJbKinNoeZTR5XBNd1iufydWh1C6wjHcDWL2sSxVH719HGGBimJf5oVfEwarjv3qbSEjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w7mL8Eod1ZV6uAtXZwjFtFCnzggSL11VQRt5yQ3ERA3DuWAM76e7HwwUAEuqRfnzrrcRgM76gEhk1N9GFYPY5iZ",
  "key1": "2AvKSnZ5iHufZR9rh9FWiKtUEKvfYqRZC2n9WVKiPcVCCzDWVsgKpE29AYyuFHKjqjymHzx9pbCkPr13Zm7ExqYX",
  "key2": "3ShTf6y9UVuZhTWqpu2Kz28RkZJi3JZbHYbWWSALrkt9pnTC5CsmZUxcKi5VMqhcH8DALncFzY1FkiiGKd6FMXQA",
  "key3": "4fTtMaAHKPLSgGA8keFomebzrUtxi1LroWTu7avdPUqVGLq6TWenfbUyt5eG5KGGJgTtJoE4EniXH1RrLUgFR2SC",
  "key4": "2NmAKjqtpXU7bHAmrMKxcvNqGAh94PZdBGCgd5YoTAgn13hBVGsHgJE5xGf3XSoV9g5CYaF14PKx6BKZc89zHQ6g",
  "key5": "42a3ko1NVim3SScRar2nJpV5hN3KnM9riaq1WcciB4pCMz6t8ZeVQYx5xVesJ8zeczYtYts9pszYiqkzWBqoRKNW",
  "key6": "51p5ogQoz79YjAfMUHt83tMb8Xu78t2svL7NvUWnDWgQsbxbmH56wZaQ2SuNGe4c9MUugHxzDWwY65rbRYbxo17F",
  "key7": "41iYi7hiFMQ2sF5jCR64CfpuMxpi24P1xuqdqX6N78FBa4tznVbE7vHAv7kqVw9ZRR6YnRuSUupUvHqFMpDq5rm7",
  "key8": "SW9UvXhKbxauehPHw91PFguwP6MdKCx6tN66CTkBRShYfCWHWD2q8GLWp8x1AvUaRV5HdFda5d6VPCocpxnjMfT",
  "key9": "2GCcq3d73o1vEoopcL2FZEUENYGQbp6bfb4R4QitvF59dG6cpZpfaVyTvianByXmGYEhq2A37ztKdnhxrLZecqQS",
  "key10": "3pPfV3QNDhPBcCU8SyU4wBYyvJ8WZztAt69ixAUApVQfMj3WPBZv2R836LP5JpzoBhMkCSVviZaQ6ppgAdbysqxL",
  "key11": "65LEC9rXYiPKmHgA5HmFPgzAFQ2EDcxHsSDnBAR2NBFnxrT89b3fKUkNmiCuzWUmZ5oFCXsXvv9Y3hMsQvSbB7Yu",
  "key12": "drhhgBXnd2pffnpNVaAXPyoq7GEtHxDrWB6cxhmsU5zRbtZheSvT7Hozx6tF2i8MDs4AsrHcLyoFVSCYxzwyvQE",
  "key13": "2mHLLE2fF2fDy9SrRcR59sEWLWKeuRVunqswb5ovVkoomcqSBS5tF1TCY8uPmjM2qhap9VzrsXJEgshUJdhh6G58",
  "key14": "5Prs6f7Ys1XYGNh4Cw4LPm4TRh4gyKxaNJEAasDacBxB2nBStQ2HA97SLTbQezjjMyTxadK1EE7fee6mrVEVWNSW",
  "key15": "22pivitPDK6kwEDYXMJLyGtojGckEpmVravCW5hNDdej7CtYk167U7DKyi6nudfMgQQ8rST5VnVt9vgbpHiRc1MZ",
  "key16": "iNMa2UZdCxvNkowfkNRebXdTADY65xdSrMb5MhXCxUKpoxDL6dTRWe9EMkBUYMsvtXVJ6GyXEEdyoixySCAKTFs",
  "key17": "JpCtvXAmwceaH3MoKhYtEqiKffWRpwigkrpjaKwRo18K5a6JSx8hcxwY9dWMwjm2D1Bhr6UcRvPUEneyEch2Njq",
  "key18": "u5BAgphL4N9yr4cB8AHyJVHKY4vLQ5utUbzbCLpRV29AXBQretEAGd5LjTrJs1suNQGc3kam3g2HmQWJegMJUBj",
  "key19": "mfCmsT67SudWtyDgkq6LN6P1DRT9HTsTZBUXbcQHdMA76z6sZtH2q4r4rszmX8XGmFCHV9FHHG5tFknVmq5Sfx8",
  "key20": "4VSHpUgVCByZ9e4dN3YUDTVkGrPhLS4SBYTKBiVDZxHQ4nxzutwasxVYeZi9GsjucRTQJykpDuPS9vf5EGwkzWAg",
  "key21": "3gsWSiPL5yviHhLW1cmrosZCu52kkqxuVUmAh5WrgS1TuGvxsd43HGGNJsswBfioRvbRCF5eX3ZXPahMSfiw4wVK",
  "key22": "3zqVJP1cyxJ5HM7wL8umzyt3Gdh71WKBdsPdDYMs6MUm79m9ahhWqSvZ1Z3xckTCTu7Qu8K3DH2LNZHakx4Uk1Yk",
  "key23": "Dr48HZrvtj38shfsU9QrD3jgHH1RMFcbbVYWwMStvtvyn8CAWQ38CyCNQC52frbURzQf1pC7vthWJGWcN884pro",
  "key24": "3UfKbwEs8ETbD6CsebtVBdXGxMmScUPVvQ6oa6zx1AcFz2B5GiK99mhznQpnKTf4inv4t4WBeoX46fzxwfcq7Rnr",
  "key25": "4UM6CGr4WuDxweMSerQucL7qp2iDD1SRSRi3GoBpfhfyydXu8fskFr3EqSRsG1Frjb13UXVoE3Mt5WtkucaKAh5D",
  "key26": "52yKUD7QLQSMzhAFRLfEoMGtEQeeAay8rdzq7xdc5SFcqJx6vyVTCj98Bv7sAR3TvYbngfxfRGd86xsK93JKztR1",
  "key27": "2cypZ335ZNH6DN36Q7nafz2boPHSDh6tLcz4onhvdvT8VuaDnGHXCWeHqjjFog7oXdWC266d9Nkgv9bk7DUruSug",
  "key28": "ebCXvS4sqfQNjAAw8dBunkcchAFx3uiYqEwd7uL2v3c4azXstnEn7ntm3EteED3UvX4XzQCBTRes4DP3qjKaFiZ",
  "key29": "3Se1dyPuvi6U6pr9FAxytkMCQSUaerodF1cU5wva9Za9z2k73Qrp6KxP2grMqAH4AjxHh8hY5fXtL5n4b5uaboss"
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
