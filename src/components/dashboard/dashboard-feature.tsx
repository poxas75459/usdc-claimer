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
    "4ywZwjz64E7iNuHzKTLnLmiXWoBEVTECURkGyG4u4FUGbACV3wKnRtDnDvBp4hmWmE2WzVsQ2jD1ngYcofjydKFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J9GEdwq5e6XvzvVhW56McL1w3UCYfxzZW42EoBUhVoq99ommqgK8WUyrKkRgFfHoDrAVHCKDRPuNLuqZUFG4VyY",
  "key1": "3AxHnwXhafTU6H8uhLMz84FoxcjE92CS1nzeDCvvYhPFbLdExeFuooTpvWfXZTNfPbbkRfmSfEJewK2ThGL1SrYX",
  "key2": "2haiu7ib6rwyEwKsuW4PxxS3Vrg6GAaYkpEFQNJkad1Xk2PSF8RhSRpKXtKsxs3Jq8JK1qXdtJ347S73AziHAz9P",
  "key3": "2jTHJuiJQRUzfRF3qY2CPZfpbma3A7bM7DBCcXsPGPqM3qd8vaFiQXMxqsZR8mKKukgPgWaL226SdT6UsBFr8kfM",
  "key4": "4mcngvNs9HkQJqG8WH4thKJCYigEhc7kwvQKcMet8we5Posf1No5mSUR91wgYHu8CtCsb6HR4Fg75km8oUA2D59o",
  "key5": "5RdgpUWPg8JWYoWZpKdd9wvVwNHemQvQgKiXxvqpYeJ5BgkctKTjGoZRYTb4qcDte6wvjJCXvYZ7PSyD1quRWHmR",
  "key6": "4o52y57btE2UEu6aNPah9XzdCPnXHJjY3TbUqAwcG7YrZJctMDgAfu8g8jyh9Fvz7QiLwiAnShzqWtyLKqEyP9sH",
  "key7": "jj5nk6vVBkEMtkNiCnSxMVvXqAxTogW6pgSE1ZjFgD6DgLKRABkxyAy8BESzKFJ9Lt2qBk3sJRxREYwfAUvJkUu",
  "key8": "7enRyZ2Ld3ZBPtJ6JVC6kodXRwvN36vtquKydmL7KwQ81ABT1WoyEauBjMB6fnqtUxPm7GEHzV6BhUknQ6XHQ6B",
  "key9": "48fYka8ou17r7Us4dy6GSYKtGqiZMKogRwsn53dS5zhivyCfk75aWkq8EdCDunkrpjL99RChsbWgJpRcXQRUPoME",
  "key10": "3MaSDxiEL5XXZyXrxKTsYr3ri9VzsebsocHQiv9i6KAxFVmpAiL7FaDcaU6iiqW1M4K36wPDQtQCsTPJuL55MLXE",
  "key11": "5hcpQQgAyHqeMk8qzyF4PeJpTkn3i5mcZwsVNL84bV2xRLW15Z6r935T7RwxQhQJAA3KNwUPT8a4rJtrSw9piDgb",
  "key12": "pEaVoUHRH6V3NkRZASxM1pmsz5yAQdyS3o6p7F19Sf6hBHxgmQKVVx3QH6Chf5nrw72DwxuEosrZWtkkrTyg2zH",
  "key13": "2P9ACwW4wvx7qKjNB6GQWhiR2hSNUAAnDV1zTarq7KoKkAh1UGHUDHSMJ6Yscvb4EYaYKkooZu7Z8JdW8HjPsiRe",
  "key14": "z6DjFG8AhWhWMjUQELnayrxoQuNxEGKf7HmuMkXREYDtLMdcPLGaYjTBZhrefLZatKpnrcZ4fP6UMiFYooRjbEy",
  "key15": "51owkDnHzXUc4KQeqjLmagvjFJ42LYVrUcCrZz4G1iPKi5NccuKAnLGndjXvkyQoVjZHC9vjzfiktZLN1rZTXk6B",
  "key16": "twVV31nhrcZ93U2h2jFxKcRLNaAuZRXZbR5tGsyLKF3dUJUEdsThqdcMiVYJBS3bpayNmpAsMB8uVSMv59E4ykV",
  "key17": "5ccw5jbgKHEmy3XZ3UgPLT3LDcUxxrxrcpJQnJntJB7W9Nisq8FKg2adMoy3iuwtmGPsWRuRxPBttjaNRj2jdAHV",
  "key18": "3NHG2gToseDpccRuMdjeUzhRNRjiUF7Wa721PFXF4efM3mH51JirRzR9ELnLZS66gWJGCVu62Bq31X6gNX7ZFLqK",
  "key19": "dBfXiqSTrjAaQC7bmGFqari9aS1AduRGngMh6tzXHiWDDLJirzsWBwFbf8zJ3eqDs9358nQkxNUDNgjKL7wrGHV",
  "key20": "3FjFZHTGerFiWufGaCq512cZD4W8aLGuWvYRUAN74pbs7Z9zVadHgPU8SBM5t2tPyqq28nefAyWz5cC7Qxz7BtLq",
  "key21": "5Beq9iqHbH5jDQRCnfS7wCUaxpaPQhgEqEGMEDi85yAgjUU9AV5bQFgf8JgSHx7U3ngbxpBKAjG7nHeWj3QECGKt",
  "key22": "qCXyUxky7LNHyczxn5ZpeDM3PyEW6KdV8aPNVVcFJBL9iH8vXi9bgVTmHPXWgkn92Hk32NCVXFvhfXtkvgL3pLC",
  "key23": "qZi958TpzHgeWReXJS25DL78ZP7Upt1AMHBF3Ajr6HUyq4fkYpXzdVgo77988Z4EB4uPUaWACtEPNjqSLXa1NzK",
  "key24": "zoQXQBfXmGLJT2WiSi9cDp2FDC559fiM5g5cup4tGyTEjddFQtfSUZEXhnjHC7ZHj3D29iFFePqoxxBa1f7RLNR",
  "key25": "4fiSMWrC7MNE3v26htV2y1JuLbgxe8TT1EvZ8jD66vFq5TCU5UtfjouRZfoNbUTUFiyNiic5w2avrTftQGXhfLW4"
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
