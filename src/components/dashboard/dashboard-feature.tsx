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
    "8N5efT2CD7HfTfYdJ8Tsf2MadMCBVpan7oYkWcpWWrtpgD18W91zZ6Xy1brL1Qe1H1b2RphWGa3yG3Wim8sh4VQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d7zt9fZbRKwgnigDhwbfAsNyHBNWWaXVEPAN8kgqvU9FpWp45X9Q59AyUtNng8Qq3B59qyKGTN8U47r5mXsdsa7",
  "key1": "4iHVjXXfooXqodaEP53b7hE6VCLcvbPG3fqrwfK8SJxZC6XnyBSfLJBgzaY9yvo4BJzwk8CPpfKp3Vw9iy3vpDj5",
  "key2": "2JzNha9URFwURTk4Udc6Sx4MaGQZFkL99cV6mXDJ3UvwQwgSCELxoF3FXDAsd3GFxczD1UnpJSka3wzuHvfsjuxN",
  "key3": "4Czx6AFFQPfg4tw3DbunsN8VganH2eNBPrxwvkToDDiqfsSAsr4LLZWtWrQ5rKg6h7xLdUtPDvQcCx1FQb5kTKXM",
  "key4": "5Ayh6mWWwshUrbBx9ZC2Euq5ERQ47MTKBcCRrPzMUGPiFKhuruNTTRgCX7ooLHKiN3VwX15gdZrfeZLBUkKnDGbZ",
  "key5": "5C5Dz4ujx8PKJLHSKmQB6tDvQnQERkTqMF55PvFaYWFZmtntmJHzk1qcpt2YV2xi7TibC3G9RF46mbBcsYaYBUSw",
  "key6": "BpxjFhTwtCUoiUpJcWpfhfnNcd4XFRjacZx522mui95Bjvniz49TUiGtdQSEe8JsGGNFcNLr8u1FSeZ1NTADUGG",
  "key7": "4xFdTm946pg248mWWa4vRK7TPhZThEpEmJRBjQdfjizYBfeUmG1PiYdaWjszh1YVn3DK4GFTXKDgaWj39BC4WN8V",
  "key8": "4dWhVrexjY4rrfK8mNFmRUfCwcojCT69Zgg5GXjmZ6LeaaHRHqBPDECzwBki4xXPewAmtWNgDCCWaGZeyudsmaTx",
  "key9": "5Nj6hhkmH4D8YDyjDqju4APJx6VJdcF3UbehtHvwN78pqZmAVfTtXxGTKR7JJxkuaY9wQjdHqFyPa3gZs6BJohHz",
  "key10": "9G4WM6PzAdH79V1L8sybuCUMx26hDuLmmRJpuwCcY4pNbAt3iGXpKXBWWtsouJBDHVwaQRYu5gi7PaVP4BQvRXL",
  "key11": "21n7XtFU2RixaLBmt7txSVPRi6grDNcvG5ntDUcHCkUFKryVND1iVnATccmATAS263g8yQoP4GGhJiUWtvmz9sQf",
  "key12": "3TBLCdywq3CMBbBWN64TEduqFJorHJdKVSRm2Fj2uteRSsCMD9ve8Jmawvz1jFFwqBGEKrVXd6nK4orkN5sDnkAj",
  "key13": "371PPjzk4sjXfbwuJY5Qs6JKGBLBo19KijnEBgKbLz7keD25dMiLXre2nZLRgMBeAMbvbdWehqMLpukobNoF5ZKJ",
  "key14": "3XPQWoKbihqT7RnxLa8QJeZs9ETfXYENmqF8fmfqE3Xoqa4d8PYVDTxruuxgDd44PjnxnXt5ZCddLP3aJfSpQF5t",
  "key15": "M5DpBw7zquigBPA34s3tR8pqfbPzmqSZchSzcgNGqYHteb5om7uix1F6mtxuYXxwbz4QcSxH8ZeakBHQR7SRpFv",
  "key16": "4VepCNnUeD6d3ZhBfXCk7m45dcJKL2qdWcLS9GxuReQvUdhPQvTPMNho7q48NJh6vpnx6mKy7ppexmETgEHw2Hd",
  "key17": "4PShuMKaiLRVu2NvmfXNWPEowTwJLyJGQJ49vfbj2MpHqDeAqgGPv7s2zSR1Td7ZM7EyfS8GYwWvDqdagSL9Mnfi",
  "key18": "2WWCYGXYL8p5CyvfPyE77G8un9cLTLGZwytCTdVwgRXVvB5eGfGvnsAfzhUhsVm4BiJux5idWx5Ucxmy3NrMvWrB",
  "key19": "36c9npmo9Ticje9RdKw2w8BWfN6b2veHkqfjCYKUgShufHpzY8uS9mZKPamYu9eVaw9UDcpAZvwtoqbZk146YjKU",
  "key20": "bkiDrtta2BvpkDUg8cndtbBVARWLCkXk5gwjmgZPqLnLF8bS58KKZ27EoNQG8FHvERagDN9NN1QTnV4zLm3EGhi",
  "key21": "2QtAUCpXuks11bP78k1JgcDb2YkxuQGGJRjR5yBxmupErUf3fevVxUzCuM5vwq4yVpuwBfZWt8y5CLEvkZ6dvQZt",
  "key22": "4sjSxh6xQu28SJ2drhXVAVf28L38hNZPV7Y8nQAVA5yNpoeFzGdBFvvJ5w4Bdqwfsd73QGTrKPjZ7SioGA1eUbNp",
  "key23": "4bSGB4MuGFRMHuC119NFTzzDSFZobZWfkmUzQ6gCVPz5XyguBZPd9tZrYAGyStGE4E3QNkQ8RTQ9Tq4p75cSAKMa",
  "key24": "5DnhxDhrdq47BzrrzxdBUWFJcjYFoPCX3tNtscBR9c5bVugqLQiemhwnKoFo3vh5ZxxMmQLNX8bHqjVc8ovWoc29",
  "key25": "Aid2GJJQkHYBkc83sYcKsN27ZRWSkLPdbNQULZpBz4URET96ogsKrbfEnNkebMUS4SVrdSC8sevTrAu49N8xrbd",
  "key26": "2rtYXgKPzPkKBpP63LAqUZRyrzv5fz3XvRBYc62RuaoBCsLkccYQDsfEzzv3YtEoBuAevo3CKskxdfRW9UnF1QYd",
  "key27": "3rK9T2qyf8rGEo7pAbESrHxHDsgHGD3gaE7zwcsqey9mM8J7vdCWnK2pqSYZNi6bmrd3qqLLS2ETHarZbjNJ6CKE",
  "key28": "3ToXkC6o7SNKBEsoJDysgAgHKvMJh8T8qT2ZNF2PnMDZdzEvUNaa2XN1rypt7EnghwxrfGkCSz7eXbLU2mDr3yJr",
  "key29": "55pjmwo3XqZoi1Afy3sdxsPwq7Rp61acPesgPkuLj35M9w6fNb9u2Zd8jVsjWPgr4BeSNjHUqwaDZyFRRW8aRbgp",
  "key30": "4REwu4fZBKEmk3QctvZhG6hDj84GhhzYsVXYk5dUss8gFWuKDagesWLigumKAgwPhxE5RDfrE2P5pcmn9LSxyFnJ"
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
