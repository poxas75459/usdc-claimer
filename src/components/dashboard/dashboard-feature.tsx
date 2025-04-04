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
    "au8sbEGAifdCR6BS9BbAZx6D2C4bhe1ZR2HDhDatJffZHXrKFaFDEL9Ucat6UviAjwr3Ayx5KCmv4z6CUjzWPXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vp18DPYFQH8k6dD1Tf9tmjFxwbxJcQYYgfXoZtj4q1jq7zGkF4jrzthXEaesvbSn5XK2GB5nX8Dq7Pza1FCToCe",
  "key1": "3GKbLF5TiTkSjUgaWrRqcZgb5ckLXrnD2nJH9ZCdkno2Y3Y7yVuxstPpakXxT13wXJ77SSVetSLmNKmzDpjfQGAt",
  "key2": "39o7EpagZUVzfU3t22gcuWz4XbUU4T5MXAZhN8u7b7fQzd7W1aFYpjfZrdKLXUeFN7MyWeXmejLDH1Y5bWJKW7sn",
  "key3": "2Be1uMLckFkWp8LJi97LP9bBLjV6FSzV31PPYu9VA6ixJA4cin9efmXn8eeem2rCRW5RWvfeD4HKwbinnAiyMm8Z",
  "key4": "36ucqUHT17UqGJix6C6X2as1Vn1mbchuNJKwPiquEK1aN1aFNTNWtqJf3WpT2taNXBxn6HcBkcbfWnGD3e2drcAR",
  "key5": "3REbE5MnbcNJjuVJyxY8jZTdvsWHvh2gwDyXi5wMZmddwdbsLTveM474JsRo6HMzbFikjMzs72qY2H6y5vXR23Tm",
  "key6": "2wiVtQTcPeRSzm7UEwbJA28dKm4AdnSx1VLBsdUXcXtRXTa8zWt9YPuvru74UdfhZC1QYZwqrRUdrTzBa2Tp28UM",
  "key7": "3kTcRHYuSKeD4tf2VJyEcqMNY55Soo8wT1Biots4opMCfa1iXGegZEWNQcy3sGSrSGAMuq2ptoVnwU2nb8jcwZcL",
  "key8": "3wMwBdmY5tpcABnyWX1oeS1mCLDH6JrgWLcSpnsbVP67NKtQkb28FHtrYUPTgDpSCoWpYsFXvvGB7ycxzfwYUThX",
  "key9": "5cB2gLJgiHrij8pZWAuJ8NGNBNqXoy5zpewPHkUJ9MxWyH6X7SYrNvTrGQs5N1HxgffqLn2HYvVy3UGsX9JJoksu",
  "key10": "bRtcfsT3JRMVx6eife1xRuFAPcBnMp9neVsEwKziCvjWBeZGjtiqsUTj4YCGB7xtve5TxtVgcjT6FWJGb8VxuoW",
  "key11": "65pNX7xAhwVbC2zjjUtuBQv9b9tZHnkriJu1WbjNbVHBKs1kZjFTCdXchVmrhE8QC6qMYujmX6cZAAM6fKzFUFzA",
  "key12": "5EtxBBFCJFQAz6TQeJcCypKDrUgQC4pcc8YkqzL4HoaY9LXmK6LRs34GmSrLVJ9KQFTT9s9ZHZynJivQhdNEpQHY",
  "key13": "NiAUNFoNSLxAcKNjE4gYQk8UC1T3ZaKSRG7xYsu4f2YpFUuvyM87fFq9tA47zmrDj9FYNQoQHZ72zqnJyn4VQ7R",
  "key14": "3ytFT6VyTyQ5v9mfeNTxrBhtVCdPVCm3ic1YGJszaHY84GizCFZS3f783kEnVe1fLbHQRfoWnVxyPSUYFf4ig1yF",
  "key15": "2s8WiXxDUgPadaVtj37F6jhgW2pGDdRpzFtkC67VtKU4cWr8MnzHDQgmR2Au4T4XuPMWFaNxPSo7JiSJpfD7mRXH",
  "key16": "4VJzcSUajgFqTAqzN3hxyt1kYnveTFXemsDXGkUVq49Do3iwhQPvAdrF7RfzeJ9sUMhwX3u57MX5VPgEMpPKovVb",
  "key17": "3PD89U769jKKVQrDmBuNGYpurfEPRCtXPC3qzfeuFYtcHPRUh6mz4oHQxLaNDzcskuHVpW339PPeqowmo847MTR7",
  "key18": "v7meaFvrhLtAFuzGYWgmwGs8DX6Moq1VC1WCbpUAuuuTGkZJ3Hikcw86hjMQZq81pHNiyNtZwaSDKxfaPswndk6",
  "key19": "3MvffGVpad2AQcBZpNnJfyst75RvWaAao4DrYTsGN8RACBmSFXQwQYkkiZhTtXqs3WWFML1huVnZ19qwmRajQ5in",
  "key20": "5QUwJz5yWT35LibRDWGmyMJ1PCCe6cFJJgjbCfLJb6RUA1EwGs7WZzG4KS1xcvggmEXWtyCVQ8AHcGv6tDrEF92u",
  "key21": "24QZ42tLkwyBxRCrgLAT1VS3cgde54u7My4UYnyqXZkDR2oEswBorEfWzjKaXZFkwsZj4xuX43Ua7MBJMNhGBxoU",
  "key22": "xH7S5t4obKJ2R3E6QjmQV6TTix3vqkXEcmTWCUiHKtFPWvShbWcQnVBmvqQvE7fMzpsUNzotkuawoHY5GgCbFEG",
  "key23": "244RL5GwDEEVuC1JYjcicneYyJJEuys7bJBKKZhVZgQt3WiXQwfEPxzm5ifo5Hg8oiWXpYmQfeCwssaFXnwdy54B",
  "key24": "3NMqEtPYdwuDSfwLUxiM7hZ6sm39DzSdBwniNbzFEsRmLSyhzGyLMo2x3gU37rEiCdxkzfWwvXnACroGdtDBpT6U",
  "key25": "7mJDFi5rpYCfnNe7jtBbCfnBFUcG9S4aSDTKcpzRzahna2aABTv2Z16vYUTmvnwnaza2aDMgmpfzCPRpqxnM73d",
  "key26": "5KPDyxARyd23PbueqxxrUeZwVeRerZDCUgGPLUAjuUgX8c2VR1zYFqtamjL3fGdUycTJzkQWd5qDT4SErUnXoLMe",
  "key27": "3NEFdcjep9mWe8pjuGTWWvJveBfrUotWZMo1f8RWernhSfq7jLQDPBLSr2qVaipxcNj4vXzHBvtwN1JNvpGDNsFe",
  "key28": "4NjDdkkMZeuxpLCAiwDj43j95YkNoaRDx5GGC4PCnAsSuZCLRbYDCYR5Tn8xVEeSFg3nZqrKtBL5yhLubmENrCCi",
  "key29": "3dcjy2e4EGHUEBCdSDNQWs8bL92UDfGnTKwU919rgBM9u3RBh6oEEeLmxFSTxcBZ7dQi9nVS4RxhTrgnrxvACkBv",
  "key30": "3EiFDnuDgC6TiG2sFs2EvNFbmciwF2KLwibm1WN2VXuBGR4kVYqbjmc7wvJyo75DH328bYytrPSfDqhvxh2eFDPT",
  "key31": "2JAkCUe4BePJUToWHEu1ebZeTNBecMCkRqrjJdRNAQvmTpNKq3pXu9m7Lfh8D4WPX7nAD5itKY7XyTY2bNguAMk2",
  "key32": "52fkBxfZv855Un6Eiw9d6RNLqWHQfMu5uzQJHSHERuPvy3bNpNh3Sv3YQP8jpEkMF2bky274AcPKVogP46xf4CfN",
  "key33": "27auJ8xgAzdc4RfRBS3ZNzfZ2Y6uVDARvsnzEsVq8TxqRroqoasa8YUofh9gmV685kWaNk1ieJbwKt1DRPdLNkeP",
  "key34": "4uyAo3A79H96Y1Sm1wNnR9DUbYfWpdJ6LQ9BHnVed5yoi6qYNqBpA2ur4DHiasFfFgGdY6nA3ZMgQk6kSNHGgwnF",
  "key35": "Y9ktxXanWF2uKkSC6eQ4LBsdpYz14N8AV82qLgvHZ5rbdgRgjxGj3KFtVaDDwjZ7Pa6JC4b1SaLWp6JVuFDKKeK",
  "key36": "3rftEJJyvj8WuaXYtixsSPTUtWgLmfbZFZavjfsdP7HjKbhVS6CgzQjXe8o2EoLUQwVeMod5xts7Lf4uhiWbG77V"
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
