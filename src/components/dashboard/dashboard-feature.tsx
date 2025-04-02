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
    "3qTB2EGCiKzaM8DzAGNGhDYtVdaWhtD8CjLfXPtRaBMH4FbE34tDMH75qAYSvczFTu6gTPvCXNiVR29paCExH33v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zsehuan12fF34Kw3Ujso3omWrMck7ri2EhtJYJDJF2Zt6mAUVkdCA4bxZkWxy8zS6MUh8RBxxX118mNthbFv5q4",
  "key1": "2kdvo9QEqDD7p1nJHnwi3MExRy3RTq91ZS2YJVLVXu3xToDtQpACeVVpfdULxWW3qQaEGQHa8bZz4Kwjmdwg8iiq",
  "key2": "5kZNVHCmap1FRdTkfqvZHf1DfSSaGWqJdHXZFFrQQvvwtsLWMehoXgMTSgi35sHzTX6jc7YMkAbrtiGePhpmQRxP",
  "key3": "4tkMdksxRpgDiGGjzowVf8GwPqUwQsWu1NGBEFTjuiBJt7oux7BwE6FMH2GajY7H78XkxSmChpHpWkxBojURmUKW",
  "key4": "29dXQf9KgsaByMqZPKDyej1LmNsnkrnQckqDjbtL23kjrqkLLobp3yiZvvx4vKFwQFtJiYDtSoAXjCfjYBjT4Kec",
  "key5": "44Jq2asfgmoZ5qgjsHc66hLMJNmemytixVm1vJV6LbJaPrfZMWRXtEYUzL8NXFpQepNbd4jsTbHq3wq3faHJU1Pq",
  "key6": "3TCxFyGskFsGaThzTM6GCUD2NXnBZ64yW9AMjyumbTzB7RGdALY3NUXsebm4wBdFnUJUsUYqMMZST7UCZ7JTNoQk",
  "key7": "4M5v3sWFKnha6VU58jiEuhWVeY9SJRjfv5n6eTSgQWV6KsPqgxaLvGnJi3oEH1t5uGAFeHDfQzUL2KmQzNCGwQEu",
  "key8": "5MfqVMEVMZqkvp1TMfLFX7EqeuFFcvrAXDgQdWWMav9JFbHd1SY1gJeFy258q8wbDeEFhjdYFD33DeRhg69KaYx8",
  "key9": "32NPUcJWdxrtfNhEjLk3GtwqCFZjdUpjPEfwRzWK2yrwrQt6GJt7im97QuSPYK5wmwZdjNuPn6DX4FYfgRhwyNQ7",
  "key10": "5Cmva9vFitPpmV4EKpa9ZazN1Y1uz7ALjNkhzTSoijC1GH9p9S8dYEpifv1i9UBz6V5rDVEu57QFF1L2fA1UdFL4",
  "key11": "4aa4A4HVtp771gmxuPx4AHyC77ntRP2XawvWeTvHHcgWpsK1Vq4iyaxvGCMYVHaKD2cHQJMzZ6tkjgLkZiE8jSx7",
  "key12": "5ac7CbezNMZz9mBmbLRKwqcQGnkYf4XvWdgZZq1xgC3FzF8HmpNcqnUac3qsoVfTqYbY5dxwxTQw5QtEoSQmnfR",
  "key13": "61kS5RmKzkz2HE4wTXazS74snJA9XrQ7Qrm9H2sBSGbCy86DzYHeBfxi4Jk3heKUTy6KjRpuzqqCx3Raby2jBTQv",
  "key14": "5txf91vme1NVXheiwV7mMetVfzRYiF9DFwUEoS7b31nunVFZtvj2ckKvJZu61XzAwjgygeNds6k714RvYEr2Q9J1",
  "key15": "5dozHCqErDKLNmLBX2zDjZgqfWyZ6Xjb98duq8htGX2UppofiMYgsGzupvxNVkH8i8yVCVf3BqTwwsxF8oYNYaRQ",
  "key16": "2j9dsUwDddNojFKib23DvH9jkrq4uRw6qD42vuHMFAp3ofPB8d4Z6UsrgBvrjs3hhPmQWZkyRRFdvxivWXU9pkv5",
  "key17": "2h9Vd7w1Lj7sSU8XrQwWExkvyPryD3C4uQsaEFM4vSHgaJxmNGrNreQyPiccyiZ7PJVBSU7QaXUhcmNgiJekrniE",
  "key18": "3CiwE7pNUZ2HggNAUANdnS1Hx4qVaXnSjERUcV3vejHPyhK9xVZWmHocCHiRgozV3xAMVVFWShtHX6fAUDWMX9gf",
  "key19": "44Z6Q9JNBN43Xj2dN2pm4SsNNfQnZrMrU8YN8ABpXtaimXEpf6fkLGoa55EwDETn4UGNskLZUq8KccDkybzF3spQ",
  "key20": "wyjzU9uTmLZ1VV6UDdWrEtqWZCTChad1LQtoDiabFhzrjwF53dAc5ju1q75DXjpHL5Rn2uwChYdK2LeyCUFsZ2R",
  "key21": "rfWWKC3ry1FbqCSZ6B65eDvDqdxSfAmqfpnL6ywKnz3rG3MubeGd7CnscKusy5qEExQqtbJ9CoPXE3n2pMEmFSY",
  "key22": "5SJdu2zExcvyL6JwSERZ2FzKR59FbFK24rNSZx2MKoCoGYFQ4YX3eLK4jU9V7BgbWUoZ8bEAEg5m7cxAmjYQiMXY",
  "key23": "2vQ6TnnFHAStvtN8KCcH1sQcA1qzqakHcsugMfHTCsCYzzu9vWJLFzBJii2UFw9fqVieywATsSGKtQpT1XTsZKMm",
  "key24": "2Ma1X6vEmRG1pZpWzAafneaUHu3fD4Yz1oQQJmbWsW6bdptvA1rwAR9sXFhCPEfA5qqKxCaYm9mL8vqNJz6NDLi1",
  "key25": "5zN95djWxbsroWMZg2cbWXQgsTEZ5eTmkSX231kqQpuXcAJTEQhN4SsAw2R9nTX4h8Q3xUWEXYLQi7DuiDf5KLhC",
  "key26": "3TcxXmmjuiMEVDdgTzN7gp6batzk9tfjEXaSafdGo2jk9s1Zhk3oBVRsr1Qn1UowVV27Ek6dqpQi6K76rqqsvyVq",
  "key27": "2ia15FqVM4VjPyT2zMVM3M2aT3ugNWVRVsdxSRYsNCWcXwdWftG4XfMrUJn7LcVv3BGhRFfudWWft5jQ5ahjhwrC",
  "key28": "52Bvq7UigEnHPzhNqnhwGXs9GJsXyzxGKLj3P1LRsCeFX1gLfJayKoh457XdjauMmxjbo3QwqGTxwR3i6NvBuWtt",
  "key29": "66jtwJA3aURg2G4WN5y7eDrKWzSskR5mVDxdGKfv1guRv5mqFr6C59wsM2KNXhVKc9iHs4zYaAH2KvYLk4zPcz9q",
  "key30": "3s5ay8r73bJB7eMeiV12eNz9jEqGCRUuQRkRg5BMCjNW5vvPeoqnUi97Wn4Z2f3fLiUpSSUMhqrmJ1YQUfWZFNhi",
  "key31": "JPcEMqzX5dp7n21qby6u7AFWjsPe8cucYsvZghu1iSYNj2uuBznYXJLyjdpQUVMJnxrJ9QikgC3MhbPQ95qMxr6",
  "key32": "33iBeNQ176ksJ1GZpUt5LBjwaJSuz8wPYDpnrEku6jbd8edCywhuXST7SkJgBWBthC5j3zd8zy5xDn2xPD5pcp4a",
  "key33": "eBMLzYjyLPtt3o6Cz8By7jaPW8gDYwYgvsJAjqowBczoJXbfUFEXz2bMqoUyTYy9pZvCK85xniMYJ4L7LWotAeP",
  "key34": "3uVyjGCu3w4F2p3fiNFSxH7Qmwdf1x5FrYR9fVunoSbUC92vrHmBvnGjVb2qPTHinfVkVN2xoGJDZouXowXo34AP",
  "key35": "421TWsCmAcxXvsCL4Rqe9mMP87e5NBGGbS5znLpcL6hXsh9TA6hQ3jHoQLod1XofGvcUXQ1P6bVnDHy1khMZfCm5",
  "key36": "5FsWeFnoB2SJe6QEeF6euYZ6Gw3szVxbmYdUqxLBfmRPpMZWzT3LXtE4xEoiCunCrJYZ4JJEgZpcN1QYwLDZdxYY",
  "key37": "42KVYRoZrxs1oazo4n8jxXYttqw8EYupg5vTHiatX1omEHhbiZkpjgdc7h252RdSgjNkrSbLgFAwfy8d5cXqHeD3"
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
