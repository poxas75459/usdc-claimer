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
    "63g1YWTvjf5dRteE8EXkpod5yBJHTBCKSV19PCHAHAzss5yeB7dWdZ5NFA6HWnYy8uTbmgC7jeTD4Q2mRveCfebG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3To7eA8j7QJiYkPfRXDf7s1ydFGHUFN4xyB4gLsjgvpdn4gqddrbcnHscqHDxaAPbpqCabR5j5QfiK8Zsyxjiu3w",
  "key1": "32nhkXn9SCN7e2bfK5HFyJuBeNRU3U1kRd2aAcwphF8oNkh9Sc9zXdbdFr4wXRWjg1uzXMhPWxe7u5YakSQKBLGr",
  "key2": "5FjrE3LQ3y4qwd93rPcvzSrgn6qnii66T7SmDYvPDXrvF2gskZrsnNjPyfz3i3oJL2ihEX2BFURQX5rucWPWnBRq",
  "key3": "34uYW3G1ArVM4dDyx7asyhnUj1a9a9f9qU8yGDX4UkifnyU7HptnZ3UvrqjUpL1S5zeB8Qt5XXskJBhsNnLLm8ux",
  "key4": "2TEWnMAfbhvdM679YanFim7UUqf4CSf9RM83nNRSDCr71qKVTvqUpDBF3UUk3shp8FitWxwzB8cJsDJHLTdiuhk1",
  "key5": "3JLtCWdEenEV7GPaFf3QqtmCX7PrTVJq3ogfmzStrSZ7RVx3NWVBjFD719TLkiJiwFwacwwfpmRF9MGaVHbriKQ2",
  "key6": "46qNcWXA96w2tk6qXggKkEZ4By8gXu7iX25YyApCkZumGeXwvAddHgsV5P9jY2MauGugnBrqT7qTWELV4rZyHjaM",
  "key7": "5rn8tAhXRiWGiwVvvsUyBHPPstCtYBPhAoFC8SAk1wscNm5CQeiy9Nda4ssvFW9wEVeYK4aA6jQsxwbnZ24Me6bE",
  "key8": "3YfD3sF6xQxD1VWnESNLARdCN7VWh1DwKGHY2wL1xYYst5YVty5BsjFfyqmjHpVBnap8M4oYqxrb4c9JdHEA45yK",
  "key9": "bg8i1eEYqPXSbkjBzsJeHHsCyYVJZcBaxQj8obRB93PEtm4xDFTxdXp7FoXNnSY3t5tcpAoBWrXKtAiYHSdBQd9",
  "key10": "4SM5Y9D6JVEVDkjjecRXqg8ANyfdnJhvHh3L9kMtaYiJtfJHQY11FkYwh8LoSdrTt1uG7df5dZK1rVGZnf9BBB4L",
  "key11": "4w26poCtvQhGG7kqG7j1HBbc91iumY9GGbdJvi8ZGjJ8NAeh56GEdUup8scCndFA5JGb6ZS5FvT4nBLQr9yThEXq",
  "key12": "655vYiYJJhfet2GqdQDofDe4u6jPg3bqEvmw8bowfnAeArHCJ5uRTZT8aKSsK5Rni5WhXSF4QcnLE2DRVMaTGbM1",
  "key13": "5sSXgqYRUvFb5emJAatE7KGhbfxNRXymuVHtLutY6g9SyozSgpHtA3ZkrgWGuWv8EX4PcN9LnMEnAFTnmiTwQCNe",
  "key14": "4J6Ue3GM6rGnDw2gPZqmXcvS4Ksj24G1WrkQST1mYhU8GDBBMxBByXCizj4nWXfoS3oLCvdqo7N6GYhjnB7b7u4q",
  "key15": "59oqpyvC54HuEFYkRuUAtTwpAgtTHGUjTDEtdzxoeUk3tG5Vku4yAx3cEMcRswKsktLE33Ms4NhdTQcNQWNfzA31",
  "key16": "3wJCKAt8tgva24kRLViYHvka3HopqdJNKB92t774CGvXBbr13gziicfUqg5Ft7q1xJRdRyjaBUFguDAF17Ac2vfU",
  "key17": "3JEjkwe7QtL31GCDWz2qJVcjgS3x4br5vJgsoWNPi9N53C7pj1SDSRUhLststaRDVynDwKbBgDA2PXPXKcsCyMNM",
  "key18": "2gjZrf8E1ecSpXUzpkaocCc3ArJaMavUXTgFqeNx3ZQUgoxgmncRek9jZ5rNa4dPGLQ13vZTwpbYxcKKr8yMudYM",
  "key19": "4qfUSj8nCrk8VkRPVU2dUPysQwnpdEFai9VGZmLAAB8Sc7hXi9dnebJmEuyz8PEYYKxiqyQiNds4n6GupBPAbfqo",
  "key20": "6jcWuqp5Zqced3JEKSHzECiyc6KpLKCvfdCfQKyGS8kk7VpqGu2RQdsqmdqUZ2BJCh58YYujmgwq9syw6i6fyLA",
  "key21": "2Gcu4rALgkmG5YY4Hqk4H5KdhatMyYCDHtfx1QPtHgBAm69x5BHq5cPMyjAdHeJnC8ZmnjzdwGY6M6JALFkq9g59",
  "key22": "64WsZL4RSSs54njsRRZxnuQcYj2QgPqUGZQPLJA21AN6pKVWA4549s51RZkzKUFhjGxNAm1XEC4UpGcX1KMUftfF",
  "key23": "dX6kDELN9urHfYQxR5yPpp1hgQ9q8M47yzTt69NqdSbaULWHAh17gNQK6aEEzL9YHPWyMmjXqWR47tvQJaK9ENP",
  "key24": "5nuQZEVyUvfFYsR5ecM1fwyetMTi6Q4eztAmH7ZcGskrnGEv3S6APTLpKhctb4o4ETAwfHtwUuSqkFN3Wsn953RZ",
  "key25": "5J2MGKdqrfgRfyp24hLCBqyjtiiD35uv5N9erw4KWHgg2F1pm1EPGL6W3axRZXbpSz8xsKr8nAxwDxQvvTkowYK4",
  "key26": "5rTe3i46kGk7PXKpejhVTVKNCRjH46WSapJZNn5smLGHr8pn58hxEfvNTNNPqNfjZ2Qncq5AC1tf5yxZdFg8LbHW",
  "key27": "5VcqbScpUTKsSkATJBHrNrZh9d7fbUNLRJt6emqszFXGRPHZ48Uvw4kCXMk9fMS6T7UCPkaP3WRhc4fSsnJpeHXQ",
  "key28": "56EveSZVga75t9jcR8Ym9mV9FagWvFqYgDLqzsTUGLU3UoGKyPdprQEhet5TPHpKPZCdSLbUah8DqJKgH22xw8KJ",
  "key29": "3ELtLqvVU58wzKjwV9mwGskcViqc4wAXmo35KoW4NYG9hYg7DKeEM3J5ny4dX3KAR9q2qrP2mW4SHquM4oSD17A",
  "key30": "28MDbokQgAqbi6D3R5N8r1AVWTkWPstaN2HkMa36VJXGhijTEqPxT7tegh2b7PhFxeM9EXhgd7sPVKVPYZrXZ8Jz",
  "key31": "29yPHKqENqcHdUPvwLSPTnht3mrYjsQrDSerAkLM9VP9yKuKZdtk27Q243LA2rNBJb6V57VnhgH6ZNHToaqEoFSc",
  "key32": "2VjH5tJ2SZriWrxmgpitHJr5i24owg1GAvzHdUjsv4XFPQU6gxEykBG4Kxv4iUi3szThQuzw55fzKP7qC8oPAZPr",
  "key33": "3y4L9p1hj7KW1PkPVaVfsqyN6Rdi6PTz27xYAT59mBjtoakqci7RDmfzN2YpnvwD7TV5SHuh5GAJDMibaXiimxSq",
  "key34": "5rN9x8EukNDBrvM9waUmPj93WqyiieF4w7CqDevkKETVhjF5DzZHdbZ5XkKuPphwRUyFkYFF5Hq2zyeyRfv3t8ZC",
  "key35": "5CwQJAFRmbcpPgUxP3kJSrGHiF5SojBUyBEtExkrJb8BAja2SNJezMtrB2PLYQ9ThyFZbwDi4yQ5KJJ8tG7zuf3R",
  "key36": "5aqBbNhgyjKvkk8o44aGpGnCkdLKFxh8g4AUsFjdzRmZFmkPq6vspagPhgcNYf8PRGz6VWvFE7J5dvdmBSMrirj8",
  "key37": "4JBTDn24zQ2BSLs6bzE76jeTgBw81nmU9ZSBkWfZaBj5FKyLjoY9sC1MkLa1qM11scdXMg9gPgLd4DAWAYTseQe2"
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
