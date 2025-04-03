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
    "PVju9fkAwF6jajBAuH11yiPo6Ec326RY26ZAVxbm2fnZXYvEuuUpDNwcbxWKpDMUCAMUQYoSpVQTfx5WjwzrKrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42aSnRqgArsVwgKSHakTrzYBbdFZEugGaSxgWLPJzZSj9orjHJVoqK2VTQf7vXystQtVjd61PdJYou9gNrYpXvtT",
  "key1": "2EAmVawCpbU4N8Wt12yJ5EYRBFA1p5UfCBRCZvUaU3LfoeLXDNR624rqXdFMvBqkbu8eUEhG2K3H7wUiD8Uohw3N",
  "key2": "3yLDn2S7D7NNU3HfNQvAwqJAoa6pJ2GMvJzvTT2UQngp31FyNi1nriLjSnkNUwHFRRARnQA9wVW2ppjrgAe2UKoV",
  "key3": "5wg6WR5rjSWrHkjH1BV9wusK1Cz6JC9Z4aPpSiGC8LQoJZaSsJmmE356MCRe4qmSqJEfGs9caqeSgjmFTkez21Di",
  "key4": "4GNEyaN5iayhUwbeDfxEdosXbhL1kYS1TuhnnAKdD8R5QW9dDyuzhvWLUSGUhKG1VPxB8CFgHydK465y6j94i66B",
  "key5": "3RncdpiypgkdAzPV5XE44h73a8gu6faarRpwQuCLuZrodXuHjxEhqUjoXxi44XYZ4CdwCEXtrK2kvCMhaJsfzCB5",
  "key6": "4Dv2UMawyCMaeY1PEJ7ZwCpAiHNApzzgwbXK7YKjdRHoPS8MAsJrPVvP2Xba5y9vvjxoNP89Y7Wbzd5DdvCuscoq",
  "key7": "4BX2Jt9Hs27HqbMLR84ZJBsqQ1GKX8Dn1tPidkDm37gioCsNZuZJWoAukiiKKxoo1U3CiyYmQ43FjjneZsmaUBGn",
  "key8": "2LQd89prbURFPvWzqBtA2bXvUfsmadbTbqyg2Mm83VVvbyG7xdjZ3LUuFXAUCBHL2dd4hsr7QDNfcTi2r2EMncHy",
  "key9": "35Sv4DqForiYsWKS8iQxroCk8ezCSD8goW8GgZ9LL2bdKLTHesdzQm1Fh3k5xMjCrTnuW4JJYZp22mavAFFwpoFA",
  "key10": "2iwt24ZUhpNj7BBfVN8m2mhJK1Wf3UP9pgHUKX72k9GyLJMXWeDy9ShyR4UNoCM7jPUaLqfqTHtT5b9mWCmQr4Pt",
  "key11": "2sA7cEJ6bNKRyfDUShVZ1AEEPSAKoWptiGNGKX2En2ZufY3tWeoesffbE6ND9FAxQxf7eGUyx8Tb9j113K8UtayR",
  "key12": "ErdJszGGZj9ByZMSsZdh6K7sjrJRUZRaQxdBe9iGbykqkyPZng89jBULxTMfDGmvf5tTrdJZu6ZxV5u7F6jowji",
  "key13": "cAHMpazxCGvtYwTR5bQ2HzjgbpwBDKmCqmCTX6gwmLHBSgBC1RfyfCDfkDNB73KzxiqWB5PLsFBSUDFL9p1RJV7",
  "key14": "3KJ6rr4vcv4dMd9sSybMfDBAK8xi49bgMAxZ96AhpMMDsMuXcckACfHtMx2vYPoTEVgJDuSUqh67oxM3tPPHc4yY",
  "key15": "4EDfeKzY8jrqATbCchjGt3cGk9U86gzWSHU4zdbRCHP97YuoLoe3s8iv3onGtsFAdfn7Gr1jhHYAXuzaqzkejqpd",
  "key16": "3fvyhy9zLUXg4EFmsiqARw8ipKPvG7o3zBdpMHPj87mDAXRB53gvSJuVp4WMi1swbWDWkwxqhLjmwA4QQnmCnN9Z",
  "key17": "3C3q2mqVDueVuQkCDPxpKhaRrUS4WXU6KkzC2orWXVXyzsJAbqejjQYBD9vJfGRw8EsCG572Sdpghj5hRvqB2ygG",
  "key18": "fg7NHypYdB4RacHy9d4bjBSPsC89vXq1w9vjp2oaijJmekkZf9pddtN2CgMPzEYUXWdq69PxX5v2PKpjYW7cqa1",
  "key19": "54v64TdybJTsVTC4wUxgnQFZ9VAhhmaXVZtUhLUMeNSMbHW44ajQhpyUSn9hHNfq9x7fKa6YPE3pg6Kksnh5hJ5x",
  "key20": "zRFUavuZhuyAiLeoojXab2dFxGKDivTyDeQvRgXY9w1GmZ894gERWq89r1QHCuXxFWG3h4QB3zEjLJZxmzHLxHi",
  "key21": "52bEaKDQHvRf2zzh98u7D7CEX2avFfjU13tn8X3YA5FZLBsbmzX9PzUGWg58KsvYyGFWyaHH3d8sTGeiXfJYgwkX",
  "key22": "GcqSmpVHXvtLZ9A1UHPHaBwrH8ynLgi7AZ36DN8M3LneLpL1WUN5fM5nMZvTD6R2ptXrzpHsVthJ23wgNebjCxq",
  "key23": "62jPbDsjbWoyJrTkuizXWY7eXDLR7aWgSWkgMUDXdgb54tUMGjWtbubLSWrJbtVvfg6VLenwVtbq3YhUNixNki7x",
  "key24": "TQtaPbQpj31vCDbqonNz9KmwCp6VHttHvV4n7LJ6b7qPUCszZZuwugMcpws33VQSaKgjg21qsMXHsQn6F1Dv27z",
  "key25": "3t2ECt9h4GvTvD6xcZyQv5s9TXL8mUuXAUDUhUTe1o1qVfV7TKRjPM78TqsuUCMsWt6iVa1gt5ff132Rx54raRvF",
  "key26": "5NnVGRyvghxSZKAEbd6PDsEKWK9b1ZKgvtxpSmwHDB1UDSPE6oLib2pMDqfJhXwEuA93iXqzkPcuN4hCBjGhQjoq",
  "key27": "2CozmFe9JKM4KR445Gmz27fgyhkaYegxsTeW2PUTwonfWkzhG1KunXso7ncgvuupcUn9uoKozj6FeHRGnmFLUsSR",
  "key28": "2s165eo8CQRhnZZx71W4UrkJX6cJPXEfuWbZYwsXUgrCxtSJ2Jzd62cHnxZy75seEvVr6R6bpoDKEDRSiLVibVWj",
  "key29": "3CMBnobtXWXRveFRZ779HKXbATzPz7eSbkwPvXofisWKzU6ngqHe6NQNvaj1HXnroyyN71nq9MVeAftjn6MXXo1Z",
  "key30": "5kGrDzcfdeaVRWxAsRAAejhDyfW2TVoHDeqwa4VcLsnD192hiy8kFQ4RhrPcoH9ef3UiCsAg1W9gvHzUZdMG4cJ5",
  "key31": "2QcFcJ2nWBcGZx41Z6RV94K55s2SRZxpKtrhw3iesoF49SaUKEBmiikAHQY5d2o2hXbZbm5kFfNpa7aPDXJv2B4x",
  "key32": "5BPUdNFo83JMENt5F8fNUdzcBT5KZteZKV1b3v4FyYfPbwzYjVbKo1zTWaA9eprJHFyhKQrMhKT349gNvDmoEqLZ",
  "key33": "5tCvWF8C8viaW2M9qMHXGYnhgcoWgY3UeB21Ur8vFFPyyWYRVi8Ec5WZw7kF2uRfG3uJBLwH1oMnqCEznj293xq6",
  "key34": "4kWeSQw55WiDhFnD1VoiYn679M4dwTLT7HqbTvZWbkWmuRSEnGEpiiq4nbrTXf3wPuThCPwEgrQE2RjQY3Cs3f2A",
  "key35": "4kxwNieQnenqmwBXu33XcWAaBfyQYf4vswETLCYom3gLaLEUJy8bwGPZPaUD5Ki2KWt5iMU47GUrUpwfuLUrZo4y",
  "key36": "37FnU3xCRdeEcqC51oX75h62m15auQPBSXC8jfUEBuwArYiWocQcJe36AqgzQGzsQCRf2bkwnwnKbnrbiuCs2Gvb",
  "key37": "DyA1rkoFUfXVmXnozQfhYdWmjji3io9ond6hv8CuRYN6MKrCz6SifTw5GsfN9TTybrMWioFKS9oU7cmF1r8xTUK",
  "key38": "4a7zx2bErXQ1WD6xTYyUewe2kcMswEgaVAqtVCeEG1X9e9PRZ3fCbvr3NCf21XkQYtc5PzgQXuQZg3CVpTm6nu4L",
  "key39": "2gBJrL3Cn78L3vmrBCECKFXJXoxvgMRYpQic3nw1DR2nxkfFZbza6mbuGsAXexbPFEyiMKkYupzVVVtpFz5dTsFE",
  "key40": "2h96tUvG1dFZvStG3KeTUAfWopLuRDynBGicXZGBbNXW2NennLB4f3MHCdjY484FyQZ6NWB9gjF7xvBmFLHs4N4R"
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
