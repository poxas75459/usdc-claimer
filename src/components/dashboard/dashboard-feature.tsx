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
    "21mqt5yqcamaASAM3aU3tj1XtymvDomgryxntgUsXsDgZ5kv4K79igEeecmBvpAHeAsaezCKnuZ8BEBBbbzRPQSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UKZYZMruje9UZXwcqbBWPof36kHUrsdNtAjoytLV44nNCR5CyUmjQPDgxaeBEAiymPfM6qvahVgRGNVJ9EVA532",
  "key1": "v9vu9S4UfyQS91c799BUBDApJjvYejBrrebeWE1pm7Yatv4dZUc2RPcgPfBP9TV9G8q95iG7FixXguBLBT6CMJu",
  "key2": "5prgjEq23G4xiFetPEdmSqNFxwGraUgtCuMt21ErZ7Q3dP6EZQpgFJHTjcuqo3wtyCYPiifr4Fe3aJAU3hkZDpbZ",
  "key3": "oztGFeGTUrjehURv6XGfPG1tr2iUYTGMtFYmx4jBPJAjS8avZgyKVGSTU6rJmNPc3kLLeGosRqzkhQq8aYdbi6h",
  "key4": "3uCmYRWiUDstGD146btFBTyoTLR4nPegFQfBZth8gxPMnds8Ke1LT28xcc7LNnMJm7BbFos9JU5enmA8dh9x4oS4",
  "key5": "3syn5aPfeKRcjvEGfbMMQqVzBaYoGPJpqgPhzstSgsdJV34LSxQ9AA5mKmvvX9McobFknjXp9pudKo5vYHAPFb34",
  "key6": "5g8rWpyddf25mL1HFwvB1q5yYxGaYLJmWk17HuMzhhZBtKp7KaBwDxP3Vm56Ch8yJhhhw4U9zyXW1ZQ4FCTpUZrt",
  "key7": "S1DqKvcjMJZHf1HpCT3w3t9zvoRDFAdLPLN1FWtQ2YQ7FbaH5HycEAcNTjRZnJAkJoCADAjvDeY5trNvqTAuFNm",
  "key8": "65Fg6ASr7H54CFokRL2vFVipjEYLuw1aGjR8m961harm2zDraJ1CK4murWGvn4rnwYDBWjGoTgEVEcRR47xWdKau",
  "key9": "Wix2hefEMnvsodxNiq3ubeEjkHqZ2xr6wCn3MubtrnxZAHBBJvriFvHe9FHvwwCGDmJLYBrEtsUDt1xHxEL8gv7",
  "key10": "5grXt1y6YHg9H7xBXHGBHqbMSbFXhvax2Cd5QKaDRLiYk5ZJk3BcaZAPRimQCTo9YGS67sfyZmgnc7gL7mUyphLk",
  "key11": "yGQrKsmuXLRWuxBWU3CRxtAsUattER5WJEfGLgvtdMLzusrgztPskiaGaEDBYCWsMBHtwynNyGBwMau8vaeFBmR",
  "key12": "2cyxcQ6WqqqMgqZ9iJqqQc6EmXpBMp5iKsqtS8BFepAw2rFxejokSNxhrmq9zLzyYRyWH3YZR5fsnB2xu8oS4ZGn",
  "key13": "424V1HfZjpYd5MVb8tTmfSSjDKc5YSzQPEgheoaDwGNW5hRhgSqTH5y4q4CXX5Ad7j6Xt26FFhCvAZoeydKeqrb4",
  "key14": "4KP2kqtmFX1Qi2PPrpEeQuFBFFsbATjygp4LqJL3a49pbYzejfj5w6ZJsamBCMhipm4WXANUKiH6J1foL3PYGVTE",
  "key15": "3vzs3quTYaNiqk9fJxbzwirEneVprEXHRMc1k3HDBriLwSSQCpet85YcZ82tpGnJrxc3aMGZqYVB56kkfvqJhT53",
  "key16": "PPfzc5MRENM4awmTtftZDddtR6XFWZiWp6CZuaYBmVroDs3DCK6wrS3nMVKehfmBikT1S6dgq51XDkgpbmqUNx8",
  "key17": "2JUNyV4aii772uJWyszjZoNuhokpqTxhSw4kiDL367qfWQj7HZUpNsMR8sqaHb7KuD978pMpjvNwhikcJZiyScVw",
  "key18": "2TraxqWGyS9P64qbF5p75Lme4VFGNkxSDgEWxDG1jb1Lg8mcmwKkMmY9dERuUnzmyPu75BMoCmQ6htrYWrGTc7po",
  "key19": "3hjBKkZ29bjXjuG99ijA1cxPK95sDm86GdntPLCNmjYmiDYi1ZMCfdLGyPyDBEZchCZKvA5g6TuE1XWuk5ijecr2",
  "key20": "5sXVcgFHbpNMz8f48YWe3WBd25DJLHrTWPAfG534RpD77w5yCUcWJHNiHud4efGYRMJD5s6riopZMUSJLxVYyXDN",
  "key21": "khqPLTDikVhqo65cvxRDrPBezWY3vUDCdauRXSxBk1xhgR599wRxu6CHRckdreP1BfjKTTo9mpUyN8U3iNEuFwS",
  "key22": "2quUaC8ufxFeoJy2x5dPWh9ox44UFLn37h9meCwvgT4xav4iCNYcyzRGqBcc7eYT3hyW3p7Y7nA6Pq9ZbrSEQ46D",
  "key23": "4TDCZMJDisNE1chi1MFv39mnU5QrfHHnvkZmRv2dLdh2gmWmCsfa4nMDkD54T8U5qzqMvniZDQx68feTW4wdRTev",
  "key24": "vW4mPGeWmUvkZQBswqTut4bkVaCDRNBh6KZ36QnWzvTk54jKZsB5pqnXUraq7ajTg54T39MK1G1i1KgA8PaDR7H",
  "key25": "pfpSwkjQx9yhESav5TAVdAnQ8ZdzTpEtfrgXfinLMffQ9QRLrWiBZzx1tB9dudL6TNg1JAYZqczsHn2HjfXktok",
  "key26": "34jNzAbny23gVgzgkcXeibBQ6L6ttr38kFLbH8w23uadTC31xvzoFfkXKiU3nWkm8Tx3KMG5EpdDcTowXtu6uQ9Y",
  "key27": "6G9LtScNzBTFRAdpasLyo6hT3J15z7mRD5pQfjxHKux6eRK2s3YAsBAfW9bTWYnqsq2bsxtC6nDjSgvfWr7cwaZ",
  "key28": "2qf75hPEmAUuiKbvMs12Hv7Uh19X6prNMBSctPeqsVxw7LCmagEBqXJ8BY767VaAMJLopwxcYiSkH8hrmqm5jEwa",
  "key29": "327qSLtWsPJ6BRfLBSeU45mixSzrvHEvPVQ6kxZYMuBPVk2d4VG2jA66ZSNjyqFFANhQoLyNMrRLtKz8nZ5gfHcf"
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
