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
    "2hAKFUf1JuQC7xHfPEf8xtD5P6JmHCBkDcxbf4c4q345TChAbRuGi1v45W7Ptbiak3quQa3E8RGoZU1pyo5C83Df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qbc733YqLxg5QvVfk771bC6vJZWXHhEFFtQ1RTR7L5RaooewBwFMpqM2MfBxng9J7yprQr4CjQoKAN61q1iEFNs",
  "key1": "52W72aQZMeTW3j8VDG8dHViTJMsHE2F2Yz3QUdum9yQtapFR5cR4GcKEgkzJQ62uD5xaMoAJRx5FM7omcVLGkxSw",
  "key2": "4SuUbGRjLDfXToycyrmuH8SsLz8fMWKzD1S2eFD1Shh5qwGEwBuEoiLYUYnb4ARnEn9jBhWGAaoezxyVTYTQxWdG",
  "key3": "TtpmVwea8ntXR87f4poANijQaksYRNQ2nbm7XmXXoknpbKnhumjZs9AfsxbbXCWmaC3UHGTQ4DUc4CG5xzViN42",
  "key4": "4HXEFpr9VQptAiwH2oEQZeGzoggXR3pXkFftSLPtn2RD6FEz5FpscraUfZgg4r3Do5BXvQm85Gjbw9yN3DbrWQSR",
  "key5": "cxAaYT51DVErAeNztXoqVKL4ShjfEMySUj5YdEa8Yzf4Fcrzxb3XagVGeCZjTCUcKMnoEsEHxgzvuZe2nQzCP3g",
  "key6": "5tkw9ZrtQtG1Tn7hgvTJqxw4gCmK6MyGZTAHquesaDjJVrb2Q74hBLgw3BVHhMHEs2iwt9gJX7PYM8orhinBH9Nq",
  "key7": "3ab8UJdXwhPeq1mVA6SXRnakGySYCkFwpiDGMKWhZp7c2s4uuzpzAwyXeb1c7bWcpcDw6QNPuCpTDNyhhKofqhuV",
  "key8": "5nLPef8Fn5WdThmNHco2wp1Qtc5jfCdpbp1hT1r9kvXbFQRvQ16XtUyNdgiXTDW3aKxZWnMqP6ES1RjWrKEALWX7",
  "key9": "2T8bNA1oizjTscJwBb24jUA792vrZPiYFg6J3VJYyXQzjkFrwimwHwaG6fgpn93TcBVMc7g9nGsJJbapQV3wRhP9",
  "key10": "xUZhdYfKaL66QaBPKHhVh1XdFctLrk3yvQsgJDfhqHea4TaFwGZzaeqSQyKy8FZdoXLTHSd2Q1VyHr2vRBk7tj9",
  "key11": "2maBUPR26PGikEf7SUmGHeJAqgpQEwYtCJQiRwasg2KkG9AsMZ7yKFhSNwL2VjdKx42xp2Fxv5KunEnAduhuZ248",
  "key12": "2gB7JzMmzUMWn4ZTSoJhQc4hyD7ubjA72Ne968rh1i73EvPk8cJhXBQASteR2iw6CWR1H6vrknyUysfBsy2GpSVX",
  "key13": "SeZyzkZsTAREBqSYWNVN5h1pXZP6KPdGBxHXU6RTHMjnLPB8czogXFBeWunAZBRMVN6gu95iT9ZF3Q3qmmBDNXd",
  "key14": "5ugCFxAWZMzzaw8Z3xHdYwgQoQ2p7sVAHfeHWLJoDnYnKq6BzthGo2drWaThNWyvLT4ZsiPRpphPiq5D2CRhky3o",
  "key15": "4nyLmu48th2Js15LgWFALY3HXAMSVziD266AgRG6HbAi4GEpRi1VSxEN3Q6TntCmMVszFC3nVb3BiJS3qMwYcUG3",
  "key16": "67pPjnvomQvAYzodds2eqP6Qry79iVJr5UgwU8GUYoothB6Jm3uEkbsyXJo9KNg2gasRhnV2eVeC4jHSjk5QXrAt",
  "key17": "2dL5s5BcsH7PRCjpPC7U3rHLtofoXdasvRopZhHz6Xg47cUexjh74oGM3DcitUuVd5UbHEDZJWiX4QLy9E3qEzS6",
  "key18": "3HvYgC6tkth3wpwrog1dKTqg8WJsnrMs5gCXkCZKzUtr6KGwnQ9Tu3jy7Lp7KNsJQvLuoihrmrTAELyzC5iHLzwE",
  "key19": "BHAAVhmAxPgWtRPXLDr7UVmUvn8mEXrEKZGHsVLxniwyJdgoY4haDZprqk46WnMuRJmPDsNdSj2kdZFdi7k1q7X",
  "key20": "TR1e1e4cvVPwayj9vR8U1mcNvjQvDdY4fix48i6Hw7Tk2grtVY7TotSZgWbrxNs6tnivR8rb3Y9Q37b6bsNruhE",
  "key21": "4bwHHCB6Xx8B4Qr3kTubYgWWaKQFVvAS2gWZNYQ9g3i8a6A4MSGRAsjd8Sh4eGpN1faSbUoUVrf35t7yTjKTXrvt",
  "key22": "99cngJ3czRx1mfrpkMvuiEnFJ1NpCKbsU1SfqtxRTcZNQ2HGcbc5tQz5XiE25MSEHCoregRWvLPKWG2gzGqFJRi",
  "key23": "Fp8qdz9CP5oRgLNaVd7dmUVBt49U2y7pMfM9UdS8vpEvJ3zMkJnia6eZwMQtyaU8qCxHMJhgG1mLcobQbwYx7B2",
  "key24": "5fb8TKE8Smz8riu5f6ifrx7y5LBrc4UEn9a8Ctfn4XwuHLP4nY3HFdSgNfd4L2tVxhnSexfWTUULbfzMrExG188q",
  "key25": "5RM6Zb8YupxXNGcGCtMe9ULzqBqjuUipCXzANapEZj6iEkxMpSFZguhh3dTNMGyKcFJzg27ABr2CfSQujdVedcTQ",
  "key26": "2ZGFTYYxF2EzBsN7iawY3ikK4nDnniDMFykAuaeED95azgV1MFuJ8S42Brmvou4pJtKvNFa582bhrDSgp1qkt69v",
  "key27": "4L9mDMgVd9KWWizqYzoRNJRdaeKTSBqScWhPjNYVEjQwZdNcWUiUwoS2mFpZBLiPXk9XFTvdf59B3gNrGstrK8Ex",
  "key28": "3aPwiXWxnFERAirhSQCNsgBtrGQG7tTNtVe2JBKHoszvBXWm47BUH5aspMYY6DSoZ9Xouuv7gcFHFwmNFw7whJLk",
  "key29": "AzKpUrPdAozaE2pHuZXi9uMwHfjNBx2izxBf2jFEarthwAWmVViU73J42jPVRqYJ27V25G6xPD1A9RJhhUWkdsg",
  "key30": "63VUtuqJ3STkaxxU7brjW5RyKwK25TNUgWikajAXdorsAq3CAHaPoadmtTuVAueqz4AhizHAVhRkdZaAYsfeALKv",
  "key31": "4QTqvWTFTgFS3KNbXSgXgeY344CsxMuMkPhziKCQ4v2Y83vtcf9kPfcfGyuUdZnNostcno22KzF4BQLDVejpUnHz",
  "key32": "2g9o9p9LRQzp4Gw8m2X2HiSRTxsCM8fdwkXwSDdqcDiPAejNANzVbGmREcip59z2g16BwCE7P9f2gwUeXFCvnrnL"
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
