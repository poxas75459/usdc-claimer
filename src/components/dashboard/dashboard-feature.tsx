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
    "5ufYuJd3FJfrXGcCRdXdgprXq34y3rtw8TJnU3ACEbTSLmLm2yU8GBUaLV7tiNEFGqX4eZdMyEtaskS6E2ngPjeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hbymMmaXX4JQjDQdZh8XKVpYmQbFfxJ6t8LRbDX9VmoQUyuYDtyZVZd6UXfEAeG4fjQ5QgaoNuU5UzCd1yAY5pr",
  "key1": "4Gjkh2RD9atBoiNdgJ5ii5MC8MNv9P1NMEvXLXuDMgGqLSEkVq7TFfj3XZuYwZCugJ3qVjtS6gT6v1o68TzHScg4",
  "key2": "4SKbffSULz9XWFE9qF7FnhoxpjeLXiTEcQZqCSARzeKAbcAZmvLsy2u8eK8YqSoDxTdLsg6sPq18xDAPhJNoKq4E",
  "key3": "4J7pBr1juPaNBTTVnCZ6P4d15ghXgDVVsLu1ypk1Cx8PXX3mvJDSM6i71A8X7n4peNNcYw1KsmSCawUv3zECgsRD",
  "key4": "vQmXpS8UzcSYCHZ6n2gvgj2GRfm1GscEMAn49M1ba5nZxG86UJ4VwXZubhwU4PMdvaXgn6nyzf5itjVw1ernfiZ",
  "key5": "3ivjaGLR1bZKAt5UVdNHhA8NYzpt1h9AwBGm4cYs9PXYiU1a7YTbF6u3FKqwgnNvHqy9q84pRLs543uKTJb7L4k9",
  "key6": "5QCUfJ7XaHtHJzAFsDBtPwvryszGFwfKtay4Fm6gWMNELLWA1NSWg77DnetyKRgfug1KjwDKLyZUBdjXAUam51Uy",
  "key7": "4UiHHaUfrCMYkS7qfAJeAtPAH2bZfBuNpMctsUDjZKBPAyvKf6fj5W7bdG44AQ6PbDauFDHEpgryLngepR7aoMzu",
  "key8": "JLkDZMACvUh658FgwCQUi3YcxtTmMJmr8LkaP76EDJDTjhgZX5XPxRFfyaP49Z3yJjVSDGumxeAUPby4oM4ezpn",
  "key9": "342NR97MidFad6B3JYMZB8SjvgTrqpH4rALK5yxE8XBVpz45vqRmXFrBStcMhycbtwTEoAYFmNA5KDEohCEQy8mq",
  "key10": "5duPGWNSPSHXzhjAbpeFGTkyypzhtYyWEXxgHLpBQbCANV8PaBzuSJDVt32pgKWm4fwGKeHYxrSoPMvhAtgoTqWQ",
  "key11": "237UxTBrtqenDJjEGnvbEDEAyGiWiNZ2AkBeKm1UU7Tu9DwcL2hog1AsPKy83pu6s3pDjBEakD5KN7tUWLJ7yeFa",
  "key12": "tpQR12kMWqKPkmBR5tXA9AgiN1Cos3EAzSxaZmWC6XnBYCaFjxURUW7WN7cPGdLFPZdu2bHvdc11dYajapVjWkB",
  "key13": "2icQ2d1sGTY7fa24HHumsKYE5oSpPdicZeDuwfbxufpTFUgwdZnEtE9vSyawQwwkZABtHijHpkDeHw9HLzxcnavv",
  "key14": "4i6U1M4QPNfhxQENZfzFbPvVJWT1MAySeKvn7YmCdJh1AMzpFhEjJW8FQGEGV58LXghHN2TPZUHYfCEhYf4vprNX",
  "key15": "4Yy7waYLh2iN1er3e6oLgQfHJhhT51cMvj3X3aa57vzteHhvedNq8mGPR8GbrEs8MufadqWSAs6xjTS6PMdHe6hM",
  "key16": "4T8DA283VmCSNzqjFHxBu846qv8PQsLLqKDMS6kGFiHxXx4KPUE4HqkwkXNKSiYGTwFoXanDMCTSRQ8NhhHbbbJA",
  "key17": "4s9ts31b5zixBhjw5DnAD4WkWZGazccqnZavLamxF7xHqAifsTTb7iCuUmVdP2bHJorATnKFV8qU9zurRcaqe3Ds",
  "key18": "Ztunki4Rstw8yNhNQfVfqDPegsQV9jaZfvDsDFvg5FvHqK8HkN9hm2TRPGL62BFNPWeshseS1e2XiaQRnMjYyYN",
  "key19": "2c3CDLwpC5272uPV9eGwEa2R78p2DfQ1kJJZijP6zT1emvUwfc9uikra5Bkb8rQcbbTKw5QZizw8joNsFLGHsbef",
  "key20": "26BXiUQ5zbsxvLGrapmJSSPnZ19K2RuVg4pWY3wHHZ1nbkX4SRfSkVdY6cccfC8MWKSGFxPo6WGzCDKWMczyNWEw",
  "key21": "2AG92PSzCpamYSeM9jNevV6FM7EBBizuc5b58DPrc4yt7HjepTAwh4rqE9pNTZP8a4RSLoYzSRnKJabafhXwrE1i",
  "key22": "22AMaBQhQtrgoZLXcQ9RYFdXrabgqpJm6MZ6sVTJKPLYbQnGAoU3LJZhhf8BvUhiSigGkw17dRsBbmnaswJH5x3B",
  "key23": "2j6CQM4Kb8v1g9ZsttBuNuDxAdcuWNifxdQ6zS4tniwPEPvxZ5k9TFKQyxH56NWGgpJJxN4zRcCN8cPRkf5sXU3c",
  "key24": "2rQPDSnFjXDMsdAFHeXRE4KCwHZULzKNuMKP1FYa5MogfvwabShtqscta5EYKk9fVbB3skEUKpmEDc7bkZoKPEgC",
  "key25": "29Rngm9wABtS7YsoxzfC9TDDZyWTMzFCXdEGGbWBDeeHwxozR6SBUdsd1QvYjzgJ47YR6aJhcure3Sqg3yxE11nu",
  "key26": "35LbBq7LJwgtS6ftBNzryr4YD2j7kMRH4UqrauhX6BZfawWSnF1TuFHYx6AHpcg8CEkGWoT6P3PtSyTu8qcvsrfH",
  "key27": "5KCCRtmdUERWfCY9MfR4q8EUSsNovY6pAyekWJKmVve58vpivzcpPP7voywhmNEakWn7SgRQ6Gvp9ohNPiVN2Yqa",
  "key28": "5BzfYpCgduNJhXsVkZAy13o7zdBTgZn7dHFKiaAadduHp8YkCz1p6XY1uuWvTaUcpEUcSLPm8wAtsh8JGiwAhsqx",
  "key29": "4qeHVR1yFXU7aD6oyoa2fA35jVWms4418h6KaQZh5GmqUZ5JyAbWf9HefoZQDuP7tJRHXHwxTmQMGbJnCvLTLE34",
  "key30": "tRZ6UCwmF5rfuw2B2WM2mUQ2Eh1KyDQwZ6dhZWSp6EM61oWNxNaHVhUo1WyDaREjmdAeSthFDxQdDrtw1iLrQWY",
  "key31": "rCq3j5YkRF4mCc4tuQjq6997mA1SYXnF2ssRVBWxG7AXhji3nEqCMVoJe43vbDNSApnsmXdq47ayToUEKtQHcXo",
  "key32": "2749xrfwaEQGun6PLSavACfoj53nqF1Exo8h3P74zmkUdu82n4pB1zfo16udCXfEv74dSUhKioAh1BZFPDfQoezN",
  "key33": "2Rxpbeddd2GdsmJwqCj23vDrwUfhEiiMuCETBDaoqB9nvfZfSqAAnvBr5dd1GTUoFwGCtJfY6p3eL3HQhMp5gA6Q"
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
