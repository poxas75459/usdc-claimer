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
    "ehPRr1pe77BErqHENLG5ChhufDM4fwbhCPPb98GhAzaEVE8ovAnnaoV9cnTmZG1cEhNVXMHg1bnh9pDY4gSmCVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mf2Z5B6atpQ7xqRg6rVAtAHHdqAzm8mQ965S2hKFX1Cwyd9RTHZrPEU1T2iNPAZjuTcTs3WF4mfmUbTMkPqqib8",
  "key1": "4H271LjMgB9Ha1bckV12PKX2TnCWf7CdUJ5cGQTdSYjzbnn2aX83qRL1EjQWmCNNwaYncgnrcvwboePToChcQZRv",
  "key2": "25YNW6n6by9GWi3KJv948uhGNjji9RU4D6GRSUnbK446m6YT48vCCDaZDnqw6yLsNWDfNV7hUBkVh5ni8smQyDp7",
  "key3": "5qrzD4wYRE1LgLNGyTBpkNrhvJxk3Jk7291GMxUkXRfKuDxHum5kcj2kb7CJSgHu4DVXwMyudyJK8nQf2GSSPJXq",
  "key4": "2ffM9phUJdkvJtKkQZeFbvJpWtD1hSCUFvPHESS1kiAaXbpEMjVjtHqxEAqyqNgNMX2LBHAEH6DLQ3dVbSCNGUaL",
  "key5": "5QySdZEvGMGAvNpsyTEgmL7bFfLcdKx4wMuUAkfjGFoKNxLFfmZwEFVsd3aDMP7fqxyNTEPvkHMEauxBuHzdZreF",
  "key6": "4F53Gr9jTrUcjv7X6Ukp6yaFswk78Ltzqh4rqNsKMoMZgbhMd3ADSTgBH8HvNasdaRjVkV2eo94CMBkzxKGQdKRS",
  "key7": "58sCk5fN3gsymmQTFoBCXeKStZ8oDxQoDkf1pbcQu65U7Drh2rWHGGindg7PUsRvbLEM7bnh3ULkKwERrTYrdL2e",
  "key8": "3VLb77ABRjfaheUh3H2Wh1gZxFLhULPFBthdmJDegrQXBjMcfkAHPCiYeNiLnN4wwHGyVWNhVEcPafBhzMmyc581",
  "key9": "5H9xu89AT8nR44KBrUj1gUxbtcGYSXmrs1MZ9sWaF6r83efyBM4nn7wEfhxRMvTkd4DxqRL6VUo21D9KLEDPoDPS",
  "key10": "5eFQshoFtZ4qioZv92E3DMFzsdBraPeCY5mykVGhe8GkWFsiNZeiqPdzPFL4qYsVnrSH5PaVK5KXT8homc6XCWd7",
  "key11": "4W9ApcQfgnTnu8jEzfWs4j3xjE7jpkTcQ7oWSjiPgPetk9MTvkPVMwVEK34SwvBqZhnB4kuByM3rKyvuoMuh7PYo",
  "key12": "2PZ9atwbhgwBrsrtGStFzBZe9X1YChkovikPFJFVcATWT1nYp6VZiMoKxUMRJyETpykG8KvSSPfqo5ewL6YeVKHU",
  "key13": "STAH1wY66sdtJssGozrgowvAHikKoEE1BWBc5tADnESortSXJSc785C2rQYeNAa5kjgaqHXhYBnjja51nb5KGRQ",
  "key14": "wmipNqWif9HdYuGEmvvnsu1DM9za8QrRDD9SF15HbGoihFTiXg83uPyeo1Ubs1cwsyE6wRGcPFGFjgWWxp21G95",
  "key15": "3fWdgRMY813GHUdnZRuKyMkSihkiziEdtnHytDNuXHfCwSgApwqhxNYqPyLg16A99YL1WTFbUXeV69uZQxocvT9G",
  "key16": "2ykz7QKLS2ccPZorbnfBFq6GeKMF1Tc8mtWdNC1Hd3FFQkiTmxTB1GfCr9hBSyXn6FkmKuD6Z8teybsLFMTGvcSs",
  "key17": "2xAK5FTHgNa7joSqGmNASBdYooW9We7467vvKv3jamhjPQCfHD1hYN4KM6oE36LK5EMay2pP7X8h92QaHfUW6KBD",
  "key18": "2peyNZ37KCEDA8Zhs4NEjCbCLyA8wUYXU75SuyRfXGxqKX5L8qzZgXMCmxyLpf9ZPn4AGr1qtiXaBtoXJg8cSNqE",
  "key19": "5WRbEnHDyazZnTUbB2fZAZ3sD7wCgFK5W6Fb8pcShEm4EebUCaw1z4SPk6e1sjtoaggCNEBKya5pVt7eSUHbzQeZ",
  "key20": "nMkuKf2uysydWLDXV6RRdvJsMmgPBya1j7WvGT83fphPtEc5HEENoAYhJqd5PAhXTGJVjWSwWdmpmahQj7VY7WE",
  "key21": "2cJBsnjtZvk6ysF19CGgFg1ThRULqkCoPMApXaKUAJRdfWqauD2nNHvWq9N1xjoDqeF2bZxRa85WW7ymqRjM3oiQ",
  "key22": "3FGpJDhHLLsMe9Hgzv95iXEY92YQtyWoK1hXxhmRfQtVz25Y4ZDe5Ku3xYQEvybHiXVzvrrUTe8iZqxGXjEs1z1E",
  "key23": "3skp7Qeu5epoLGGbhiMxeeaHxJvXQe9jA7FT7BNLAGB2dMxGGHwEyDomMexdyUXgJcU1kgfzw95KPoTWXLwxhtFm",
  "key24": "4YPJKaDFwHrnoB1rXxyNx39SbCq4WXpAZL7JZyxKbqqiSyYRXHHk1DbgtYBeh4M7oEQK7LVkRJiAm4NWqYbnt8VS",
  "key25": "2wrdpcEtrL8MyYTfRsnmFzcsUd8N5Feq2fyG8kwxzSrBcgFb9sMarmXq1Zo5BzR6Dwh7h64cTiGmcA2SoKw8FkF",
  "key26": "U1WXjjHhZogRag213rX1j93EvEXYxDVowkPeynSWhDDun7VU8sy5TGMpkQP5Ts9tEMsJED5copPfV37t58D1RvB",
  "key27": "PEhg9VRby13n2AUGCwDzb9dNVeum1hWKJajJptFUXqEuZf99ZVRmqQ2VDgszqdGrCXVKkBmMbABo9VKngLa23ez",
  "key28": "2Xsu93PLs5EWMqY52SWmBTobHKngRPxnyt6ZD92p9jby8F9akGdR7FH7qt3YN2X43T9kyq6FRSzaMGG3cgFwV7ay",
  "key29": "3BG77x3KB5TG43Z9b4fVTm5vioZ9Ku2Q2sJkZFH45Py87nYkENXJk7sLLVqv4Te19v2TDhoqUDJiCc6AKk2fK8tT",
  "key30": "42zJ4J6rkkbydCTHapb2Qi1nKn7LY3WnaT5ZNeePSAtdsx3pBCbVDPihFxiap3P3EoQXkEhcVv65mMS8SZJSdeX4",
  "key31": "4Rr9H7zhB2S3nw7nnw8JCqk58naBWrVoC4KdWKzTfF9CWpozTHHSf6f8yzBYaXjLPw3obT5m5Ffuas1kgqUfSaXb"
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
