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
    "5fqyQwNAmm6CmVJKfnF6LFdiWHKJy7oZDB1TJoESs96JuhwX3kLLf6AHNZfQVHALAg8mB7ujhDyRHCoXKKYLWRpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uivf8FE2wEoyFQD3RGdkyGDsad5S7bjSxWAEhCyW1AL821de1HPHc88v3mLBzRBhFkdtsnP41nPgpd9q1sW54Pk",
  "key1": "2o2gnddwM7fq8diUK2KWzpUMRgDAa1HgEPhQAYmaT9HwjMhkR4TJoDDn7kWAJyVBQbYvBmcVAXJo5QtYfXZxJxCm",
  "key2": "3SbkJzFLtBMpdmBkTocm799JE2L7VzfSMj9hdgBbjXBvoYZqv3K7sga184SmMum2XWbdJXSL8SvPAN5XB4ofqT8L",
  "key3": "2yPy86BiwWqSM2779o6Zzdv2DEnL126DTNcVCkDwb2wUqgeiN4JutgWNJndSCmzmsBEt5ZP1SwxxzNqWXfxmw8FU",
  "key4": "3cmKxZTMbZyLC94YY8MtUXjjAvVG45sQXoi4DWUyLVtfcaHebZGxCug8Hm4B6KakktLcnwBWyXszZDA2jgMMvSti",
  "key5": "31sdjNhMEEc3hZzAN9HhKToJXsqgYrTCpz6fgLfwMP5y1ZK6NB61q86XGAY3taJ9bGqrTNoPNnecZAgEPYmJPn6P",
  "key6": "2CGbQSDyLXzJHYedhyMk6u11KWVJ51hitS1Z8yd5BHMZstYcN539rzswoRcahFtW35kMPHQSQis1TBa5aWehaNHr",
  "key7": "2xc2N8FVj8q2xDwoaAKrF4yvKP8AuH5vxvcCR4PgeNJartZ9QZoHf82wq688v6gCQFRXA9KXto9xyThLzdb9Rcwu",
  "key8": "2kAoDnKK6UfeXnY2xzAamAsF7HQmd3oYP7QuyDmUGd5P9SG3Wzj3LaEf8CzWSroY7Ah5PrLoHoCVEABT7HC4qY6s",
  "key9": "GijLq9MmH8uXjwgN3aEwuoMNAEWNtv5xjDnxKwoRxrkUdoS3UBHGqVdoYEaj5woZhwnre7NvRwbBUmFGmBg2aWC",
  "key10": "3KL4TuHnmuVmCbfWFfAVUQPVKNomKtxGFv9KrdDJ4e23MpULToCuZ1SV7YsLNFSx3rgitGDXuQwCmN1bMrXC9y8d",
  "key11": "3mPWuKe9QPsLb8u1LWSMZPa7JYLw6aSJyLGJvdHJWd2UNtv6UCUGjNjvsmdDB5kYhC9NpQAm8HTUtCz3h2uWmhBE",
  "key12": "2VRFufa5mhvyfnr8GMa5YuesNJgkDNESftreD5U3jqfEY6iVqedH7J1ddUa6JnQwBW1tihev8p9fDxuHMi6MZaJM",
  "key13": "3hQmbS2D56fWdzyUFo4hEtRgwTUaf47tSdJcLwCBucYxhKBatbY3Z181WZfoNEk5wTe7TGdPxcxPvNuEpLEYvSa5",
  "key14": "5GGJuicSTDBrTAEJYRGUZN5Y1mDwkKC2VBiMoV72E6WyLFXorAEmM1jFo2TtVFigQCSQ6x9pny6qusSDVLdtbUd8",
  "key15": "22xTrXkXbqgNaNV9qNTRyxeMqmgFqgy3q7E3MF6yJyZWYfLEe8yZT5UccdAeXuffWXvd6ZF9kgZEGmsuB9zZsiYr",
  "key16": "5iLWu6BgR8Dz5fMdyNojjQRDySC6myng8zfF9xKkcUAhByMVm2eqnajLp625zFdUdcVgjj2pfLi6Qb2KydqRUNhc",
  "key17": "4wAWE53XGd4RwMwBJHsyTivt2azGMRPvH7g8L8fnU6rHrsZVYTRgf1kVj6UEZ89Gz3QAyy7dawdcBLyDc9BrBJ3Q",
  "key18": "29DvXb82jSJyofBdkEkgKGoc3bukFJ1s5Sj9ZA8LTGHcARQtgdpJpbEf7Xr5zg9mQPXo5fkqT7Q5ocRgNXGKSHv3",
  "key19": "2zstKhf9u7bXC32NkwZZpbsoT8qRmyKbSJbtGYTiSZDFsEaHZjiLtAMzfZCigN9dDyrki1udcA47iray1UY5x9Pd",
  "key20": "z7oSKeAWgGxULBtT5AKjzEuhvaGNrJrVGx2WsodextW943TjgmTpAHZRA9fJk5trNwxKMT2VgHFABjPCUpsLWfC",
  "key21": "Gww6Gyhea4vgHUU8wTZXuHWwUXSs9JqYTARBTwBgzRAkwyb54nPDCZrp1NLAh9PNeQtDUJvDEyoxvPS9mBSNwsz",
  "key22": "2vyRopqqupgWqBhDoRkVdrtyEveUHgMqQmcQtNq9VLXqZWg9BujTuaS4TpVLFQrEqbZrwfURv8HzzpwtR5ZNY9qB",
  "key23": "2VRzVmXQ3EaLaERkcFH33X2aj8aZ7MH8o6MKpqecZreCJaPWfrJ4Xfk4r4JMT8sLTctp2mLdW3TTZFYbJGQJtoWh",
  "key24": "31qHnkXNX44Xsi2SEdMni8EHB117ZBCJ8uFwk4MgmNY1iuV8hkGAuGsCR3SeZZAygaXtJwNzeK34JtfXaYj7dxE5",
  "key25": "jSV28x8ByMCLLZFwYDhC72VmRbzDy77g5NxFNFScf5uP7NcEQUqe2qbNUc1LD92VfuL2hndoRj1go2cgs7PSETf",
  "key26": "5pKRFThVV7f85pJbVvAxEAEupadAxGdjtk25Apz1b622jphDAabykwN7eSQXmHSnxbZokJRNfa1YX6cvXUa2uMns",
  "key27": "4J7C7RhUk175pX8tTsFVJzsTTbkdh8nbsJ7JF1F1gkRPmC93Yvv6sxiJmicipU5AyA8fFX2ht9aRFiS8FMp2S9Vb",
  "key28": "4GGvadACnmeP76iwZEpF9wnk2bCmPeiSaDR4hAo3d2kthznQiJ3E8Rxe67G7rWuBGf4sFPr1s5d4yP9jMkBftqCs",
  "key29": "C8X8mvN6PFRrMK9jXE2DeCFysCtNwLVhFVnp9vbNrXNQQEdf3QXYEgezKg64KBaho4MtYA988SimHwMcfpwabL3",
  "key30": "2bND2Nh6vSW3VMSP14aXrfMSVxdc6gpoU8T3oFp2uzv9oKAt2aCTo7viy25zFqxhdH47wk3dgmr4r2aKGm83x53D",
  "key31": "48zodQmhiseRrwLTivZxHqR9XM9z2zX9fvAv4DEsgBSq6FpKi5ifeTw2JFWsj4yLiPyzWAMHVEkFwBGsLhaMFsez",
  "key32": "2Pc3Y1DDtT5r3SPS4jpFdboKYP5TuPbFBxWAtWSdNYrmdCS5XLKqMhMTNabbujsVwVH4F63vGiYUzz9V5PgdEVF5",
  "key33": "4JJZFmPZjnkJwifRgoY2ed3QxTQMBLnJ1hNNJRtcm7omL4aRVoJ89FzP5exTJwQwh843XS65a5rUDPQerUoqUeAR",
  "key34": "iDaR5GuQGotdViMLwgsBzBwUXj1PY8eW1dsnXQz9vP918DhmQEpw5umRnY7tAi55Ge3PXTRw6sZpDwyuzhVvk5Q",
  "key35": "3FY45KYajWXxQsmQ9Yx3TfbBu7UQA7vuDYf28phMc33txZaEzc92sgqtB9DtvhHovVsscPjKsc1PSShnWb2KmmbT",
  "key36": "5QMvzeRXDNGEsQZHZRxbftDQwE3P2hCr7opgnUi4GzmmN8N3BVG3N84wY17JPqdmH4CWssjfbexeXbsdjL4YdiTa"
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
