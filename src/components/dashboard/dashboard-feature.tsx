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
    "3ajqTrCktktieEHdZd7Z15WtNBQ9fsd7GstWQr6DYhRbNELVyZ1z2imoUpmg6LLgGWnKPUphTexMv8iBFnZkb1jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44tHow26mzpxK8WUutZEQbTpjsGVRoHKxqJ6sgn32HmjH9iUyfmqgdyi4dGm2cnEUGTeDk8oqjigFL6UKACj4usj",
  "key1": "2R41a9F4MbccB9EBhKvw3XeZvdMAzyKjazVefWdVYKcJpEKERju6pCzYDHFtPyuTueVamJkt4D8my81TuK8LK8HV",
  "key2": "sq3LkHuvZSiMn8JevpA3bHS4rxdWcaQRRwMyVJfyEbnwLNG3N6Mw5qEJBsDLc4yKmm7c2LM1KStx4hVrhN51wwK",
  "key3": "tBb3eh8nome8neAiMDGaYUU5Pmy1DDpvkGbHKqvNUHwwkbRWhMSArM1LYLKLesaKjJWTqhEJj6gmYTFu2i8cYrU",
  "key4": "2QtQpSew8mz6JhVwZoY7CZsWk9r7Ytge7GtGpA16N8NutQP5fDTKEVuXsh76nFT1gRtfeLKScntoXFBrBMfAJYxo",
  "key5": "4XYnJ2zmwJ7vToTMJM6epYgjuVSreq3AWuV3g6ToXF6WMaGJCBnzPQwGxq4oJbCUjHSoiFDJAd6x2coCNQXm6jzH",
  "key6": "3cQPLp6nGhb6TH5sd3CGvKwiSSAGPPWSdXCXGLG5atifhy4PwC6rTYtwDKh7QuaRBzJZ8beCr2e2AiFQdHBn4A6b",
  "key7": "482nkadW27vX17R5pYvKHU6r25typ3WnmzJaMDYUcGcA9C8JxrPMFmfpf6rmiBc2BNqRNnrTnQ4Z4UvqSCNqGntD",
  "key8": "2qp4P3YcEBqX5sdnWHiDm25ZERsjYyNk7JjjgzWreQr4NhxBWW2pGRctezroRuPB3YCeof8Buu5zhsHznQXK7xTX",
  "key9": "bL6dEzBigjd7Un5UdACEyoWFmgYkKzUHk7u9RtZK59rdadr6TZmmPShD2HiZDvUkqhtcsKEErJzhodYbdKnNrkX",
  "key10": "4aVs3gBVruvgLfBraZL7UVFUwgNTKcBo3TMjM3iUGzQhK14kAMbcZdpt8KxydPdzUpGjeD73wkMxXJT8sGUiM28Q",
  "key11": "53pk5h5qnkuwcxE5zpUG6BnCjQ1u8h5XFoKvDR2suXg1ETXhzPHvDmW16MVKoPjCGkBHwBrSBrTYZYVnMva3JF9s",
  "key12": "sjnVKVcAD3M3nhCpPkWoQtQLjkemhV1gCGE6AqKMAAb2tN9qq2b3BDvTsFxGjmj56sfo4Yw4BHdYu2xwjsAHqXG",
  "key13": "48Qfs5gxniLtAA1HyxgxCvtkJM51uizo3qgvPCdYJ8eqLVSLzVBvwQ1TUyBE7u6zFTNh5ua8ehpB1Ltc8qcpJHW9",
  "key14": "4v7H7SdCTwjLrDY394Wfg7q6AQrmXTXZBfLpdZEwetLse4pFiyubZCJwpyPxuctivE3qaCA8rDgxWT7Y4USktS5n",
  "key15": "2Tvu1AVX7CyKa9YQL5D3bRMrRqHdJYJFptjF1tZ7voPNM5J8BZXW2ETxzhZv1fnomSQussTeq6AHkkatieRio4Ac",
  "key16": "45qCSw4woeGprapruo5e6kcXqBCxYUHL9YoGRjeFhF4Hd1dckneZZmuATqGXiYeKt4S14ENBWxyrV4diLutrajmU",
  "key17": "3pmhGhsvjexfdASXU3sJCaJmnQJn3Eg5aSzBAUsS3DwcP185SZM3EAVYUkqxHvEfzaPsvG8vVp8MfbZvxzcCeFEb",
  "key18": "uqo1xnbVv91tSt9cvCMm7CrHoye4BHMNGGnfcrTCS1gs7dvx4bQ5sJcbQ4QQP1n8zZ3mQfKB64gcQRHRHbn8Cyj",
  "key19": "2rcKRA1mef9vDoyY6YPJhJt6WhrF6MAscYkxT42WuTfd6JD2c9MCV3m5D4nbGcf981nfqckJ87A5Mop34yawSuPF",
  "key20": "2xzQzbbRCttNye2q6J2A4JgZhuJhfVWJGKuHF9dZfS8hTepwZB4GWaBiqZukYikW2SQMf6Yv4ya9Hh4aVTGnnEVB",
  "key21": "3tJY3NwKq7CatZ6SeAuHbiRkhEPG1JiNfSLXjN3YFKg9vLFbk6qYmPR15eyneQ99kW3CkPJaUZ7PETxjsS6V37A2",
  "key22": "3N74cU4h9et1uAhV4v689166QT4wvGdJRYv4W1fe9PQJBru1z2TTUeVyhti8bQfikhZWVuhmqCdBySxVa7jPojZt",
  "key23": "Fu9H6YUq3VdvLVyLkkvb8ddRmSL3L56EqVTbXMNAs7NGDHBsNqPHRPhqEumcuWVouwSfXX6sCJyxs8on8yWyGLz",
  "key24": "4qCUkvpjFKapNnHR9o88zwz7Jyg1mkr2pNtCfTzyScchUBBMp1kQz9eBhP3HWeJPbGwYh2pRVkG3B9TgT5bfNDiS",
  "key25": "4SGjKkkk4hF5HUrWhjxQ7Y1MqQkd13XRAq2csGgfjDT84TNAfMgX6PerH1cdC6pkpXEuwW2eKLrFfeUUTuRoaS11",
  "key26": "2nVnGejk4LY2PkytaFpucQyDJwdKuFeN9JboHybA4sGhGpL5nnSYbaMMqvXFRmXe61mJbnT1mqe5brcK7awVvYiA",
  "key27": "4bbmfrxR5XyQgnvzkJAcPG2FKC5BNVYU4uo4yTma4GRrApkexYBWAUZM5CJVUTmybu93XZV3NedDt5HcBXC6Yg5U",
  "key28": "22EwqM8QQL12Qhwdq2rdjexN7nswyoD1eh284njSdeRwEP63dg1UnP67hZLVyY2htEeFvxQfYCN8bdXoFzb31H7g",
  "key29": "CnW8Kx91tk1RyoqotcDrCmfXa7yLnqURg3BQfvNwwVNYLNbf75hMSwdtqKUURoNeNUXhV34hHoPYEdAZzdHsQsZ",
  "key30": "35WBCbi9XARhNAyKFyLuGKghxKQWDEn1tPAbEQcW4o3CbQvNDyuvY7kNL3FN6DgKa44UAtMwbFrKKeUjZB5TWJjY",
  "key31": "5HUfN5ppoV4avpMKjMxEbSpGvWhyb7DMBKtx1X7W4foPfFQsyFVkamhMoticbihDEV6nZbZEqiAHBaR6avNnccrh",
  "key32": "5WUHd5GebhUN5cP9Lac2vj3969Pz6ga2rRJ1hrkqjRQPBMCggnUhyjuUUDPfjUCSjNXXDJtqiWcm1T1iHjDcsqmJ",
  "key33": "4QQk3VvKXntjxLMrhsu9WuVMe4VZuTd8F1tjz2XYtDn7zH53nVD3DzNtHjpTeZUiUanjuTGJTCGtyt1B8CuSMJLZ"
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
