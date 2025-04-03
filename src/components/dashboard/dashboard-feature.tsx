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
    "3tXyPvPetRMxVryxebsB5hcAosKvRhvDkQdDKvBPGJKY67AQbDgDqcyCokHc9cC53WAeZ9LNcsJYdsD4KYRAiQ7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MxL68Xj64bGkE1isgHGxVAAMRcaWJGU3mEN57FoyFicAr8PmwT5hBPua4Byi1T4fQv74gpKQJsdobHF8p3wQjPW",
  "key1": "2ciWkZfHroA1Yx9Gone5HDaySuNEDG6RhjW5FcV1RUwS2Z8JbG8Xf7FALhXf7DRXVaZdahtAXpf2aLMPuBGJmjrj",
  "key2": "3iTQM7koQLU22ZidD3T6hprBVXvN3WnX1sYPtQ5Y7237bftWduZLq3LdVUWuf4Z8e4fVujPkDCTR4GMsQrJ863tN",
  "key3": "3K8qzQe1h7mwKdXGfwFtM16pmeG8WicABj3ds6sapj1KLAqBCvUjrqUZDP2Z5rejDBai13CpeH7NN97rAB5a4yUy",
  "key4": "5zj6SZpqBDTTLVpaaq4PWVdKK4cGhrnHsc4rFTHe9GWs6V5gCyKoDgPME1xLr3DZbn6sq6bWTy7grEShSntK3vkt",
  "key5": "5gvRQRqxyaJMMtQxcXM8vs4FGoJKmUasDrprDzjVwu7bhojJvLFtq356iA7hYm3L2YX9kdxJCdFcLFtLc3A7TxWU",
  "key6": "2eZL6kNXP6MAHtCDfM7P5W1arWzrcv9NNCrUg1f9LmtmK3TPH71GKu9cFUeA8th6aTFdMej4T5BiivCTL1uLAc8o",
  "key7": "2ymoEzi5WAdWe2wxBNTgWLAf2So1GBLMWx6rpPrRvHYE2H4N8ZaYegG5LeWiuTio1DnX9YcsFb1WcLEVcsmG5Lkj",
  "key8": "n5pdMaqotAtjvDfqNESEt5hQNt4YGuySThvc9JKpetq7ZPk8dykf6TnjLUPFioGyPb7DdKPYWtXYPMKCCFwBLkR",
  "key9": "3YFNATeGzFgyxs5cqZhrHu9m6jbYGsdKAWmmkS4AkEv6w2B4RNgjHJowHXkCauUgpwCY9k4kUYQUAzXq5KwGqfeu",
  "key10": "3n6T1nXiWLw8V5RX5n9eysBGF7YJNseuL6Sp17yKc5daJZ7Cv2m1XYiAFDRZGmbJRzKRRqB5wbFTZirANFFXLEs2",
  "key11": "TXarqh9r4q4Ekqq1G5Xo63QhUacFBhYwyTdSFh7CdoGfk41U6qdHdYDyonNehL5jcpfEtaec1GeTXcJjLP9fqvf",
  "key12": "mpQVGwP61BLKdE2ZNAFgMDYTBqzuoHszJ2Lm6m9vJdVYMDRyx9nokpyVwj2Nu6CuhWh26pysLzJRFrsudqjh8Ex",
  "key13": "2xmF32EmXF1pYLFVSyD5ggp6V8nz2uQbDggRrGC9N52wKAoNC6zCPCryWbXZQX92JAT1VdxLtSNypGL4qHiVbPu2",
  "key14": "5UDUF2JXTBMqNW7eFZmeRJ55snDksGGdQxvfD2G7jE4dbrVv5AtHsW914CywfemaRYnEFTUSziiH6uHGASJfVELN",
  "key15": "58DCEPVbKMMiX8zh4HYnYHEBzWEribCZL1WJgXHTqjpRJZ3UhkRVBF9dSrJUqR91YFsRaNALinMtzA6nCWHp7cu8",
  "key16": "x7V3mqyWXSJRRVNtLGVzDvbJ8iCoZFrmjM1W5hottYyXRyCzKho6vbx4tvr182GPRuWgeP9MDwMvZxgzs4z9cSA",
  "key17": "2wXU12xLe1LLrrCzaBLApRXAzQbzewPCb7hx81Vnebbqour2iDxDzHj6h5hjEkNrTXpAB8cyPgZCUGrXKpX1YTtk",
  "key18": "5X9Qgr8rN4NYzwxxf2GsqEEBEk7crQt7nhQ13JgBCbiqhsEstX8jmyvAemy5ArDaMwaK8qmZSgeGCCYqN25tfHnA",
  "key19": "YnpU2GtjSmC5JMGVEAkH7tZqU9yH75FM4vYeK3UdxhQcgxNUpuTgwrNxgmZXNfEquzRqrZ6kYMs4xpPzH9m2uka",
  "key20": "DyvvUvajfNeCwYFfJw9DqiSMbtxNfsSxVBUNLEDqGCnmXWzm8q59LagvepwTARLXfXUwaBs7wxkYyWNLqZP1J9K",
  "key21": "281ZwFx7ByKzWNiXvmqRtdpPhPQdtMtmAVdxM57i4gnSgN76qDoBA6tVZuwAAujYfy7sN2xnzhaKkq5PnyTpHDSc",
  "key22": "313JC1aZxQhwFGqQVGeQeVbd9NC1edePBL8NjavBQHH7gUhspHoF6Teg1Gan9FxwzQeLUYg2wfTe3mekwtSvGGTA",
  "key23": "43nKyxD33nhc7dFoCMimwkfqSbm1spcPCcZ23s48ULgFkmZDBMUcm1Xkrar93jKU3FwNsYL7Kq49iDkqKCaiwoGX",
  "key24": "2c3dxrABdXAd4yx6CxPveR14aRtuB4wvUXyYdk89MtohZ4EWudq3PKcKgs4Ho19VfVJ1uMSNYokbLijZL8juDxMK",
  "key25": "65GP8sB42czQ3gf3tpjZSWhoF53b1RUVDcVrgvNDuoWVtycZjfdV2dNdUFSYsKvAUqpoJGqKYk2Gc26QdMTMRypD",
  "key26": "5Sxx2LTXj72h6R2x5BJaq8CUMVUATxQfjAxWpmJ4vypfATkT8ND559NeEpAD9nFGMY9zYfPyzsvXgPFCG1soQBCc",
  "key27": "5T9eueoUK4tTvHM7tN5ky482JJGdorQKq7egohGrJZhdjHDWXEhjRRmgqzTUwdeoKmBCRaFFeU39mtUpa8xPxN77",
  "key28": "65PkpMAcWP7cAj7UEHdVDFGj29EfqksieNwLdSmL48kfAGqZCrsqjwsvmDXV8YrH8L3fWm91p4dWQqB3vwuNu89J",
  "key29": "1529Q6KvZVicgLjxnYpRRkj6FgAWmbkymfUvTeuywdYYkmPVKQwwGXiFx6sKtmotXQrP8EcjmWF7NcFKwwZqJ9J",
  "key30": "4JZQH84QzPfPzpYbEDuLR6W9Yn9T2src3B8QQzR2Z3s9vxczJJKn7HpQ31jRFnvk9sNb1pBGKkukQZpT5jSXi2kW",
  "key31": "46mGqYHTrVdn4eYi4TiS9kAmMECKZnnAAxXtUsge2895F8f3nYh2DDSVy3vPzha1aX6FZx9L5KmZj83okUXvzdTz",
  "key32": "571DRKj65VuLPFVRCTUGV7iGxY6Kp3HUjQuhtshmdvRYGzkpwAbQCeXL3WMyM9fKUEqNVgAvuGiUFoPyro8LMBHt",
  "key33": "d8egnw3nwNhxARtuoZtThS2a5hUswn1SQJzKc5cL1mTKuJ7kvtmG3jbFsmvJ3DR5C1EGhcWQnq562xrCqgJxy7d",
  "key34": "Sq6FdyzKiUderDJ8b77pdwGtuT8eJhXkWLKZwFSskHKQpE14w4tT2e5uaLwWr1hKSB9rbktvttrz1uBPXzczoyQ",
  "key35": "2CxbDZRoMg5Fpxk156EfWwuLW3mfKVA3WYw7NPrdRQQbu5spnEB7b4ofwpAmUBKeANjB7nDfGTbvHzZAjsrPekka",
  "key36": "3LnhthtSB7k2XsXYkwA9T9cgRqQ7JQca7zSqnxf3ApYhCTkE8ohEQPshh5ouh1PGZvvZXzSjF5ZW75prM2PeZMyR",
  "key37": "2WXgx7mmGRcb42bDELvux8PQrqGAVPZayUPrmmRZx6tAEsjWDo9rpVQEPsLA27zFC6CafPawhWsPsFf5Pfa7eL5N",
  "key38": "4uXw6YHg4g2H273rEHtDqesvB4MeHTehyzJ1ekuHYG7ZD72jgoJZSNAMdur6NqtMFvx2Xf5dVJfQ7nexLLibkkrk",
  "key39": "5DGRLUsZ76WGw7nmHrZgLUaV9ppgqRb456yxu21XGYUELKQKzD3zBdRq775sQc8jLHm5uK4XYHvHhP7EuwP1ECm"
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
