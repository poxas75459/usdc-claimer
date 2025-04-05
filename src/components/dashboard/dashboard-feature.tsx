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
    "27i9GTwdG3M1PTs7kRKrb7gPRWmfWMVQBjbDxcci5ujbf72YrtcDnLnG88634anvVVgFiPeuFXG6tHCdLdELfhk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SAe2xaqzGZxZpGEWSe84PC7bgHBU5CtZYGz3PiXFipNSXBCw21wRRHcqvyAZZvf7oNC9mcZwCVeMp2CntdNyDVu",
  "key1": "5hU1obU7ZdDVJPnZQvQs7qLdEfQg6mPRb1NTSBAFUx9JSDoLmTHa9tLMiPrXyuyik51iyXwxAcndWKSyu8buNexF",
  "key2": "i3MyRjitNEKKLxMBuEr8x2PZM7pxeX7AaSZZ1KZYbd9f2UhN5x7ZgqpZs1oiZu114Fjk3UqdEgLBhJp2VcyCyav",
  "key3": "5jfad3qvdoXcubk5roe7vpXr5xMjdaKutiVeuTpCMiQ5LJCcxDMfN71xBXf9xJSqJ5fSCnB11SbnasxR8dksqym5",
  "key4": "2Zxo7S18j55vMmyXvyxZHfMf5hnk12AxqkyKcjC2NxrAcvWFAzDj7QGsD2mT5QFjV9JW3LVs3RKae9QaGettTcLM",
  "key5": "28j9Pv36pVmJo8VDWM6FXHEDssWD7cn49KzQt6ik6DvooJFVnn5kewikPyu9cskSNPScKJVnSRkftQXRhgEDirTT",
  "key6": "226RnagpJvvjuDkHb7xjD6AHm92f7GvCoba9VLsqRwxjMRAovxaqh7XsGosr2oRpbgvspBubabpEnLoGnbLKg86m",
  "key7": "2QfGaGUobR7RW1oHAgDWCiPtEBA2woXHZLBR4NhFHJ85cr2EsBSLbaYUygpm7iDW4tGq2z1x6DopMCRrWFqFgx4M",
  "key8": "5F3HwfQUAXQUYBwUGBjc8QxeKeSqPmwFMHtKxUYH1GVxJfS4DgM9rASHttiSWkuAa159bZaDp8SuDmoBU9Z7G3oH",
  "key9": "41xUhPGMUaTxVde43gx2eXCVGi2PQ3vtifL4xkhZqudktTSp7jQbP3jYgzxZtZEYRqsuuNACxF5dB2RJYdLfCNZR",
  "key10": "41GqrmbwBx9NDiPYjKsweznq9yzeu89NkfTMHyExYpT3JSro4bDx8Z7SkGAUKq8X79AUnXjA2pGsYpLXPnSTphAa",
  "key11": "65tvZVVTChphWPJoMWEowncgDSE6PL8K2FEzXX39WG5ucXzorDBXKaEhQFKK86cJ6MT8Z1uKgGzXsBS3m5y24M8Q",
  "key12": "4r4A7YyrcwDnTLhS4GD3TZRL3w4gSUJpkKnQE8Z511KQyz9pyMsG5ZNLaErFbHgppTuPiMMWjZYM74t4DGuCWXWt",
  "key13": "5EaPLvYq9p2tS6kRamP7gHckyCdYPSJ8xm7mw4GnCRMfjPgsPu5X6XohPQPjJANsaazjWkpVc9nByx5QBJXen19C",
  "key14": "3T4qyZX2v8KSo5FwrVVdCrKxWhuynpeqPd1A9B32bhc2m2L6fswGUhobCTK25tVe49k9hJCtmEsNEcjRrJNBCKa2",
  "key15": "3G1u3AZBqS4kcmzjQTwJ2P1ftMQ7D2zkWvQWgR7mDNq39DwWrvh8ZyG7zkMHfigZ1wCLcLyxWSuJFJSRFYWr8nA2",
  "key16": "4AewkJ6FwnBa5qLwDSwuHMKGeNhzrLdpgbXAt5b7zRWKu9iuhru4HeFHxYz9irbQLGUd4jcNfai9oRsgj1bJFYDx",
  "key17": "MQJpidbjzFsThAXgGwcf2asJPSMyRtthhzvuN8qmGj5cb7GQrWEqL6GH6KGoRKSAMnquryCsXMLxoWhAgf3Jnhi",
  "key18": "1sBQFzTx5TjCJ2mMmPwdb23hEXWvhc1gFMppBZyLsB27ioxsmQA4qz168F2LAW188N8hmFbxAuWb9iExHAmvohP",
  "key19": "57MrYZ7myMr5t6y4nXCq42jBu3osTsnzUiF21Ptzk5Z7VF9rhNTXaPkzNmUdNfg3Q6gDptfKv333EHGqQzkBAFVK",
  "key20": "5o9mYTSrgEmosUjZW4KaRyzAtby2S3HzpRMJNLbRgaSAvA46BnKemFsbxvMJyRuYBTV3SLXzYUEjt6ws1wTF3qFS",
  "key21": "3xXXyJfk2VPHq76vjfayehZFdhdxr1SY9LTxa5jRKmMvpYhZRh9GDu6M91QbQzfUWecZKBqaXxMGNK4LxS48CJhg",
  "key22": "5WRXZZTu1P1EVre8UPAo52aPAFPnKNCaYRXoNXtmhMsCAApdg2sjJ6iBB6PAgREu1vhNJwjFJUcRQytw1162mhyJ",
  "key23": "4593zAAWs9neo16MLZhdeoBphdf2SknVRp8XowPVVLgHqWxZ5TXVtnkhRt8pbWiFQMdcum6gMxZR2X1xQVsG1CeY",
  "key24": "4tKpXQVf3c56RwaGnHoJ6EmM45eB6hQhtsGF4uw5DEapqrvCEnWQzbBE9pu2hbL42ehF5iqvNeH4im32gY6jqyui",
  "key25": "4YuJdxhuohbokyZVXuApappRD1CBspwfip3MHPukbkNd7CCmgsXyQZwTBdKSivMg6Mi6Gzob3MQrqpTVDhH7MRkT",
  "key26": "2wh76e2jv9wC3xacJAeqWzmxEi6nb5wLwP3vHLUsrVJyeNs64Vu8g4f6nmSeENTDEiEnL4w5aQBmM7HrXYtC11gw",
  "key27": "2caqwKC7dAJHamrueQjrFDTsUdxiDWpYDDwJxnBKaRzFqft5VCCqQGiKq3XPmzcmM7LBFgKqXhX92xZmAN5fVKUG",
  "key28": "kAgL6BxUKcr9tusWg3MRGSkxCF9kSm7YjGCyo7xB5eDrWiFBDXr42t3PKPBeihijjRdfZFzyZX9sog6Ktuk6yGu",
  "key29": "5sLzoo4K6RRTawtGvrUYPzFCUCD3Bdee2KHPEJWyDLtyjvGYzNqaGPXmQe2H9eumiEuZoUUM1Ebi6hckRGtUZ5x8",
  "key30": "4XNVHLXA6Pr4rRRdxkYqbJEENj6BC6dLwJi51j2JxZb7muunSTLSywNrak6R34UH3UpxAYzFwF6pX1fGa9kXbKgB",
  "key31": "52Nvx33r2aHusGMEAAUwQgcA7R1yPXiEQhfqocBxGokDHR1WWyr74JR4qC65sCnDXLkcdsrHnYUHeZhUUa2xnM1h",
  "key32": "3G6V1SbMDhNaZ8D3zgMS6ymr3nbpZBWybyiu8mPKxUoPYjfXLNjkbmyrBuMcXhHtTDskQLupSY5xykqCB8f9gU6X",
  "key33": "3X7vcCy6iDdib2R7UbrdvGgb9U2rsVgCQXuYfCLehaV4pw67iwn27efTm9kiAiy8Y84C7oo9A5nzw7dfNdY4NM3t",
  "key34": "4Sibivf1PWk27A7ZbmB9adshfWexNapSY3VXFNVHjJPAwiXr1cHNPteMu6HMxrdxhj7deeCAoR9xSc7g5LgoEoJL",
  "key35": "2DDuM7qQmj8f3dLRuDdyeBPB7mGy7pUmebTTpHf9D65ySa9DsRktgfZw5zQbGtLpcMBYDkYfDmmPL9eUsBfxM1Y3",
  "key36": "5znWsvvWdArShtAEJf3CHNADYiFZR5AaZidndniCQq7aDsSRQg6UyMwMCNBLP9c8nW5G9MeWQnhhtGwT4xxSN659"
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
