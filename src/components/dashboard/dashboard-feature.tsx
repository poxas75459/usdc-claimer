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
    "4Z94Fs2RLm5NmbYH9JpAeaWNFBf7cB2DX1ruRYa7RHJQYfv7f7a7CDZmDTrusodFTdGNq4gsU5SwPApT5yUaodkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzvitgytU4je2Sj737Lq6UpPuY1BjKHqHKY2bKH5SYFpH4sDJTCU9GrsnQEejKEvSauPVFzn9HmCrCzZ6rBjqDi",
  "key1": "3GtrvgsSimFvySAp2t1fVGDh2ap8Xcf3Eo7vovw8us4mYnDB2BMQxqnVwR6EdvBu4pBtE1vFg1pXb7ajVG9bvY3G",
  "key2": "2Bo6QP9kMx3e8tL5JwrMgx1J1eg2dCqVkHm9o3NFSKtjV3NxctF64cccBk5zBoLDw62YighVXbobpmDKDrej6SJJ",
  "key3": "gAmEnZ5QzgcQfJjXCQqhv5VB25gvrxEzxG1NNdwZ75RMmrK7Q5KaHAcvEjFJtfMX9GahU63Kk8188AYW7hNLKr5",
  "key4": "4JXwdoMtc78coRyG3CdhDvRG3v7bBpEfYu62X8jbnNLrDT9wPKKtYPeP6RvgekqcFXX9sweD4cBwdU2bzEqaCZrg",
  "key5": "4sQ5qJxZnv1ydZxr9B16kEFakmvUYpKWY1EQgwdw4Th85vESr87m3pbsZEyYMS9zLiMNBLZ5grTSJoFpqWsoMdXz",
  "key6": "39PDoRJhsnWRpyC3jAogqVryEAhPCzmAtJibMm3Ppx7dwwQSoznTRB7pKXE7fkfwB7i9y3PenmKbQAGcjUEzctBi",
  "key7": "3NfypM8M8k21zN9HnsYQTFDsS6ssDHJYTrZNHtFyp3hVCiYB8gCbXovPicm5H7f5RLboLX2mzE4qFHqdB3PzxdRW",
  "key8": "1qrbZH7CiCH4iVDvFSMGz1iEwwfRt7FSbS9Ma7wVHy3i2vFKYVNGirRED3zvFWE8DMRd4WS3CygRyko4NqEsDH6",
  "key9": "5JHUuvyrrQ2zbFhFn1iDs1FYCsWj6nV4Td6CjN7X5E1MYfKtVu7jmfZRiUCqNMvR6fJE1vs2vHJ94PM7LbdCdYNT",
  "key10": "2XrxPAdp9ZwjJQ8kX9wZAUN6wHdD252WWmGtzeBQkBH3ajgnkN6UWZFLhY6hn7dQA3GN4aLLbuE2y9VwvrAvJnSo",
  "key11": "3wqQegLpULE5RrcRybhrbHUCyk3eMJR7dKVgoohr9QRRgH1G5cJvqgP2NAxougGQYLDzFqN1k3Q68nPwaLswEG8K",
  "key12": "5bCGCMLPQmHo1ki3qDbhsUae8gov7K5JTCibnG3FHJ4W1iiVY9CxtLDcKY2kh4Du7Xw9kiG8Pfby1Txw6a4AEHY8",
  "key13": "26YMV9yXRnE6TCqWMVAxvzKkHQWxMm62rMhGCk65xVAkXJsyHuLK1ehijg3ssh6orbjS7rj1WhFx5z9k2xtR4Ntk",
  "key14": "DRtAkzUpJt7MUkaa5CWWSBJKhvVZnU8BiDwx1ryDexkSXFaXVXJCuSByGEUJsb3sQ3uXH5RTjAkqNNBYf1wePAo",
  "key15": "1bEu82pH27VDj1BjubmFHnqWJ6TYwJUj7qdt1PaehhS7CbQtcErJ3PyxBCZ9v6yXfweHRPeJaiBtRDnPFSg1nhe",
  "key16": "M25pE1o3owQRUQ9TDwjdFz4WVjRhuRJY2stf4xez5BvYzJjLnGFQwDoxvtGk95TXxUtyx3pTbdKmhsRbGWzrTX8",
  "key17": "3djujHFPk6Dmy2NNGtHANonGZNEb5Es7Fz1viz1NHgateu24tSuaEPVQac3y9kUeHyLTfDgcPwSoV2vGhYkkKoQq",
  "key18": "4kSRBenLRTPbKAHE4Vt3Bv1aeBziidKKtGbtXyK9x6hfEA41EHheUnjU3YH7BGuXAWypPYkoumVDfyovQngo4owN",
  "key19": "4bHf3GPWtQRgLsxoiPB5uVZpV5UgXxwbQ3DYZoJEc4JC5GbFPLxVNGuuVxM7kSKxiu5DaQT9JKZcsdGMHbjuazqj",
  "key20": "3iMhGR5wMjJPKBuSjkJtqTKdQZwxY7M53dJP8S57UirrA4jz17ozzJmQRHS2siwpngVfycLXSmA9VYMC4cX3rD26",
  "key21": "UT1PaXSSL9t4mcu14QLRb5qBXD7zvnBztTJQWJ7BoaDMx72XhEmik93wgR9VvD8HWsVDe26TASYsQenBvBaooQN",
  "key22": "477obSvMC5kgMVbG4Ytyj1pVq7JAVaZjHUgc7gh9iU9z15DKA1HQPMKkdoxkmkqkpfNGGfSULLRa8gHMHq1RhpLX",
  "key23": "rKuVAgwKVj1HDA42refmmgtsfUa1HoQjQ97u9rvq17DiFyz7tJPfWihrtL7hzGgy2YrPzS9d5vqTWR1eHr8LDCT",
  "key24": "56bfv2Ws7AeGaopWK9fLG1CBohLt6MZgarrFZWLmqr69J26A4isKHvLAysNSBtyHJjHR32nY1MCv4SHsxSXjyAvz",
  "key25": "5NwjBUpb2hjR1tC1cRf6M1zynMmHDpjgjiisAsUtHxRqd5jMeKpnHs5RTt3B33czNcFNQkqU25wpw2uidnLqMbNq",
  "key26": "5LT8iDwwwsAd17uVNZRnLxd1M32xPMWZ3ULnY1YTMe9Q1PXpQz9AwyrjxGWpZ27KdKL5ozqetpDDV8kAp3tv1Xfy",
  "key27": "2EtmkyfWJFsQqNb634rKDdqp8m3awYSeEkzXUgfyUrs3rrjn97DHgxNygXLn3mgebNpvY9WPrmwYhSTDUYi7j6X6",
  "key28": "2odQ7fX8Rsymp3isu8uePSEeGCTSgd1Vo7WdFUMbu35zLUqfkfnP6iEv3FQn1KbCL9qprPasZuX5Qq1LxxSmit3Y",
  "key29": "2KYxDcZ49KTSGhNKmKVqh9ovLS3TNauJqefjTJa6d3kKeeqXXwiNGxGJtU22SsyxgJjLsj34Z4Z9Z79mTm7SwFiA",
  "key30": "5SMf6fijMbcT1q1QhTZ2BN5YH6cKy4YbbxVgCRS5j9JWFTx2YffgQkRY3q9KTc7h6SB62qjHNa7CYCECPm9Lj2Hp",
  "key31": "45UY1s4ZWPS38R7YKucXaBZ1iZmVFnYaj55KinZaeFAELZyV5mxuuN4T2QfVV7fPZRuHQ2mSvn17NMfeqSYorFV7",
  "key32": "2Lz4dW22aNXCcVKZKkVUwcAt7mS94iTWEG4hDVzd8S2m47Mt9kF3ypFzdNKvQVbVPEnFiy1bxHJRavgB1RzXemPd",
  "key33": "4V1huE47tkzFoHjri1o4WEcNtkGFWdvG3spGxrKVoruq2m6WRpeNkvFqhgDXAiGetHkwn3XJXz4v3fwt8VXGNegr",
  "key34": "2DLENW6KVQCFgZajdALGQy8DSNmn6E62NqjP4pjGzwtypU6qfAuxQ1wZAGZ9Rpb6wMzmJvuNc8fN5DuSbf1psyfs",
  "key35": "moWdWPFXRVGEmk7ENg9TbvHiawdXvNPixM4ZEqPT1pmCGuvQotccoHAcSDtiCCDf2gtvTb9hCHsMaCKisWRorV9",
  "key36": "5Ny76arWBvFrsFNNeg23VF7fhTriuPq4qVYh5dtquAHXeLwJE6DrEoroyoZzJWwEzNfWLxp6EZLK9iKzbNDVcyjU",
  "key37": "2xZm16pP1EYcw1kEMASoKpCC8iQGBaNxyWciH6H9v9DGszAN5wPhjUw1QyUv8MHcnxkSRNnfEaGb71yggsRbrshV",
  "key38": "RdbaHfHUycLEKZjuH7bNPTpk7MhghYXrMVAgUkL7AgJMyQucrncxsBFdY1VvxSGcLuUj3HrGbZBgeyps7vEM2ic",
  "key39": "4YeJz39dDhfMHxmLHJYrkSk7rzf6LmsLJasSzw3wViiQvenjYLTyDwmXQeLGqqDriGSrEECB74aX3eQMprQb24X3",
  "key40": "GTeWwtiiXMxa222u86QTJbv8bvAVLwEC5kUyP9b8ms5A1XmQiyVK8JezsKUuXN7GAeijq9qFeGAYF1WFAtVg7gQ",
  "key41": "8NvFDGjmrBWPziA2HhG34GLkCgwZuqybcFLerUJhSRVtLrbbzxRf1PnNhYuWcRbCYquuWX95yae4X3Tw8oirCzy",
  "key42": "4ajkTZmkZ547RqYCPFrKzTKET1C6CNTrzLwZ1FFs9irQf9Wq69weNg3DV9DaRfDwijnjCii8Mvi1ju2tHBLXcxhE"
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
