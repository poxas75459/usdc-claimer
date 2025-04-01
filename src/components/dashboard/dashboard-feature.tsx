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
    "2CMNt4Aj75S7JLHEAg2qWEbn2qttLHmGipBifMUBEGCBaZQ6EJihFMi3gVrQ7MCKFYXDNLiCgF4NHyyP49NEE3mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zi6SZxCsdpoZfYiJhPx7ACuP7cBPWzFDgCX1Gix6M2Vg5TEbCt4RK5Z4tAZLRLQZa5FYnJZtcjYPmzsuF1s1zTj",
  "key1": "gzcpV6igJdEp7uZ5uvz9Zw9Grn4S8ySuXTZkxea3HsefQoTaqkms7N37fmVSKfTJ2WWGxgW1a5SLSNfsgtDzDVi",
  "key2": "3cDY1T4pytqsLNJ3X9X6aAtEFQ6E3nhcgmwtPstqf9jhENFE8J4VXVFifCiSporLeVypZQSuZWeU4xRAm2y9vNgM",
  "key3": "4EMrCEXWMPNwxDC26GFebkdXiuphnqGdcZE21AphFx96Dvfm8maJVDWbuFQw9eo8fu8vyNuSW9xdsSnPJy9i8hRH",
  "key4": "2jyGbEVSH9xKUiXPwyBXDWZg8a9gU21xuUFNJg7WMHMQoFfFDBaK3NsvViAAiAyktQY3LrXrifxom4joZzYnry5R",
  "key5": "6rMYGr6unm37FbcWFuYbR4pG54J66aTZoLSC7Gb8zsWpf8x6iMvRi5ffL5KKSc97HQakwUWySe8xiuiM9WuQgk8",
  "key6": "5PcBsM2v4BCNtXKbXgqSUfYH5pEZA1Eex1Kke93Pn8AWHFZe2CPagG9kegiBWCupqVtJAMg7xboAdDLRCf612ngW",
  "key7": "M5YS2MQtq2hNvuh1g6GfXFNrPdMC8m5xjdw3evCCBE4uW5nTZFXgcG4PpFkNwEXK9XbTvvbkT6wJ7VVj5PN1nuR",
  "key8": "3D4vNNEGc4ayCJV7xVDNUVzFuSXYP151xkpGjaFp1xgmkNKi5JfAnfffTXWujeNMdXdXfJ3wX1NQ8HH8nQtYttZ2",
  "key9": "gMPoXU7eoMyLodZR6DDx9GGFJ2QASDaSr5WTxwfRfagFEinKBvmEsY9JcuYgQcYXWhj2DoPsgsJejRaWQj6pVXv",
  "key10": "z9qZfyXZiWuj9MYECeNMx67NGaJQaq7hqiAzpuYcKM6TQP9RuBx9c8qWCxbaUjJMMnYp8m6auLUNf6nMapxhRnP",
  "key11": "4a9PXRdr9HV2JzXaJwrWmKpyazhDWgwQBQcwA52MDb2D4HyCwcJdKuH1H4NoxCKBzLkRADH8Be2anxWvk8rZfYZq",
  "key12": "2fCURYJLDNkcnPVhjh7H8HTMegHZ9ZTYfiD4e4qyHdBzFXZbHsuSSE2FCau93VuEWsTUeTFem3dPiGPSk9ghFRz",
  "key13": "5R4pkhVZp3Mf6NSgCaHUCyra41khtaXBhYMvBqDFZsnPp14QyxyN2HQurDTNX6T1jm3BxPZGKgzmsTx69iVnjtX",
  "key14": "4mo6jrSiTfjFyQeaJEvD8kpjjSQDxsNhoXyaZ7XyLTCDzNTdqRcMh97Pmz7TfjsAZQCrJz9D6zWQ5AQrCSEdcveQ",
  "key15": "3bUV4Nk1ddDRH58qWXYRTgJuct3RkfgDk8zouS6P74sbhxgWbcLvnyE93EXhmk7rhfLYb5dX4TGrmSX6JjC613uE",
  "key16": "4rc6s8yjqJeLsxshbJrjV2u4bjM7o4v186Di1GksMbT6E4Q4c14B5oRuFuooMqrb8nHTr6BRnMtdGvbfesL5EGAm",
  "key17": "TxchvvnimiMQYdL9SQ93iFGr4HogHXQKEA8jDy3CLepqFxA25GCqSLi2AHczP7ZKmeNwq7fA1hPS7LtdRR9gBcQ",
  "key18": "61iMyYLguDJH9KqCqNXK3qNT3KAwf2J34YHsBg7QD44N8ccaMVa934CYn3DVXa4jJnHPqmoLffEN1iAN9EsWEcyr",
  "key19": "58xuWPwmGCsrt8HFEScP6sXbbBo8U18MeHMTVtGZdN3qBxeUDYE3t4g3pZVsbuD3jwPFhN8Mj1CDNSGp1UBm6but",
  "key20": "2ogZBESAKDDnwfwrJuHMKBK3Bo7bfQqo1p329ae16aeLRvEzqaqcfbgMeM4Dv9WYHCaLM8A5z3r1WKPkNNZhhCtm",
  "key21": "4MN2a2fjC18kuBtsqdpbyh8RypT618ovL7QxXkj7HAreWYuhgeSsN2Ai3Aw9vF966HirMufjvtLdWqmGega2LrBk",
  "key22": "4PPaJvGCCauHTaCYuFuEW9M14abLkCfFUYQ1zGC6ZudykUna8mEUFxScq322EmUxM5FeU8ubDoM6c5JiLEiacTpv",
  "key23": "Ju3cS2qqfNC9GYUyiTQT2V2R4uYb6MfEuy7trTuHhPtv8zrSxnR5M14rLTvAqUb2kAHVpyy89rSte6uoYT43QCU",
  "key24": "39zKt2bXUtrWcX533WsNRBQRdYYRfRH3vFX8VthreXD27euNicz23eLh1r136mqhYj1jzhocShxpyhgYuMieK26Z",
  "key25": "38qx6A3yrPko8p8smfRBM8U9HMjH1PBFeUDGRcyWw7y9VfT1L3qgnFhuvLZQq5srDDRw65PMAGp5mfbzssFPDQJT",
  "key26": "5wwrXyYERcLgish2zK2Eiy3HcGFKSqTqgKkXt9FRs6Q7w6kNVA3PtYHhaWHmFd9kfSQVaJZJnWuthqzZQp9z6u1J",
  "key27": "4v8vGusrp5EhQWUWZPiwtkauumLuDZCFChppFWsUdarbyvgqKk1JxSGNDQA4RApophYqCRdDEEh58PQ9ok1JefdW",
  "key28": "5EUDUhuneWrP89eqJephJYwRGgFzQKXsj6Kk8rL4e4nuSQ9s6Ck5mKEu4C3csP9TQ2oJeADVi4R7oN4zi724Brgd"
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
