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
    "7MrHYbA4eu4FivfxYeo1aps3hDGoVhWfzLUesvut2pvgUDi3qLSqsf8pdttdMHrB1Z7GJwwqbBqmgUm8uviXBa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47dhmz7cPTCGtK2MeDg7jEgHiS2LZSPwNsHE8i9LtRRF3mHsLjHhoFNWLhj41EuMCTaK5RENQ26aumMLjuA741Ty",
  "key1": "3MTeBfi9KY7ZpUDur33VsKL9H8W98NSEvQ1KG9GL8GE2KRA7vKVsiGAvtLtWcdUgkdHXMTJWgs9YRTjigPKehwWo",
  "key2": "2W3F6J5wYApoTmZqrYhK2NAyrJnQtCLEjedEDQWuZeBTJfyZG5frMwbKKcfbZYGp4mFkWyF5DG6shfyXPgUxCXxR",
  "key3": "2g3tkggAfiPRMrfnckkbGqE4bGCEj6coReYyiNT3uWFDjE88fdzzvkKyQDFPTnVyzsf6RekWPd6okBU6sh2v9ATf",
  "key4": "4tnLfbhdhhQVGZeDzAF485BnwmLufbwF2YWQ8JgDnsomynaS6fxFWumYhrw6urBQy24mzz268dzRvSQgwAgPdbN7",
  "key5": "2zCwViaqRVw3B3YC1RJovq3qRbjDSjqh5tXMmMNgFmtQPpFnrEYTVVKpGVDyyt4LggTEcD9grzPNTfifTWYsF9j2",
  "key6": "dQXgCV8vfGdRnooFvMiYYMe7jp4HCMaytKeT9zbcqMN1puaa9Q1u6sYsguExEYwhVG4YQyEzo88nwH1sJLEfa1T",
  "key7": "46tY3CAz5Cxj2JiNEG6FTSabxUsTmgqoSCRUputBLkdW1hPuSsx68RVi5H9XkcuTLVYqcreB9sFyxiGgEHvbTDhE",
  "key8": "3Ur7b3fvdx4ugNERfqbJ2hZu8HqMbqWweE3ruNRyDVgcAwv19nzf9LJhHTyxrLCZZxb9bwNvwKD4QfXKLDsURB6E",
  "key9": "jN24WTq4Rke47mUMMwy2YdBzPLytgG2GxG3GAztCJLvsPmRSfpuXFe2tEB4ZLp99PHfTRucKRN8ibUVpTivCYEu",
  "key10": "Kt4r25ZzokQDvQFrZSn6sUuRfvLiVXLzuqi95RBGHawTVdJQ3uMoKXHiNvYgDyCdF63cqSa6iZVMMPpBKpxE9c3",
  "key11": "zomSXhfWnp2HwMA82n1Nc9PwuLfR4dFySG5KDADpcnWew8nBz3fNwCkvBT2Jb6wc4dCyG2tDpa33BN2PWDvKoNN",
  "key12": "5thzUFiuFxCrou9cJ9W82mJftwHij5s6MAooE4NTVTb36cY6mJnr77nF63CccEh77U8BeNQ5dQP3o2oemRg1CxJh",
  "key13": "51pAiAmxVpV11ni5FT6pBiqf7mLAucWC9oxNRfefdGHajEA5f1hZmukfJiCFP2twGb3ohkSNysKkNhT2NegXK3zp",
  "key14": "3bZcn73Wwt9pjZQ2RoCYkB3bD11uqiqagKK8DYVoUsWrNRb4sJGAEB1ULHKJiZumgRpj3FJZm3nGedP2cFHqrMJx",
  "key15": "8sB3fakYnk6ZXxTJVG69gRdogydDYjZeYjqz6ftLf9Eu86uggfvbx6UiDaFQpZQAjcanduTxkB3xGUUZfdC2YRS",
  "key16": "2kfdbiLTCGGeYhkdxTDnwza65T7jqspzx2B3q1pHyCCsEfWgBcnjeD4DbCTmsbZsB6mtNcyhhqUqaB7WuS7G8iB9",
  "key17": "5CoNQS4ELcfU8T65Gb4DEXzBdrFkNmC2FhKnwkAqn6MCux3QXHSf3XSQv1kKBL6YiZLXb59xxY3MqM5dPFN9HLPf",
  "key18": "mQb2yWjAfTH4JKPk6gqthNcGWcU6VtvzWsN2EwndwbKkuZ311mPTqRXZSk1K1uuDEWm4oEi5pm7DbknGnF8jWsz",
  "key19": "4K8WZEkzuJTixdsrxH2i3wEEPfinYrR1HNdoDuuguM18je5w3xMHvX9psKGZxNUPhNJgmDoq2gwTAbcxkAGA4sBS",
  "key20": "2frVjGoVC7VUqqy9uPjDvB7qMPn9Z6CookZCQpDHEJgYoRxxUvTnTRS3cfmxEPY6r23oLgxKwNuav66fWpmC67Dg",
  "key21": "5hQG1Z7N17PytkSZxy6T4CY9WQqHdfrqS5FeAfB9UsyeyZ6BqNir6vsQHRFQgowB54neK1wpqw4HLFwwiw26FBCi",
  "key22": "3PXLMSgNKp8VctTUaD2NCHyNpmCQNvs5J3cZLfrUxWWJdiGCeBU1ZgH15QosMVmQMy8qX5ZcQyeH8iRQtEUkCuv5",
  "key23": "5hHMrbCzujxkVVBdTTSNumCYqzuFBFjSPUnXAfhVgHRhoKCkmYLaVbvNYex4s1cuFNCouiNKWcZoeQPvfEFAXEza",
  "key24": "49Q6t1a3B7oNLrnG6rFkaHgXfEjq3csNw2sHVquPYBzHUATZmvEmgXi2FzrvNrTtbic8tjH3rhMczohdkisx1gox",
  "key25": "cXkf1DS9QoNZPdiJXjeXEp6N5UzQeiEQPCEKdw69oTPKUUvUvEmvLjCTs2ZVKzBXQnjFHtcjoVFbWbztUcUUi8K",
  "key26": "5bKfqC9BVjTvx437TSe4PyrxrYh9VtmiL8py5wcNrhAazs6unEREwrBDmyuAjjb8jdJuTV8mb6Ncap9EzSopeX5y",
  "key27": "38mn4Zo8SesuUsngiwTMe5shr3y4eeK8L7aUKaSMEcqvyCn1cXW4Br1T4mvz7m3MVCw2sf1xJfw2XkymFikifn36",
  "key28": "46G46XhqSPpjUwk2TtzN1fiZ3TWyGXJEeCUsZWTr8TDLjDj1UZWjEBzmpFde1mxYBnTHMyqeMEFts4jHPP1n1DKU",
  "key29": "4N6Jt1zFkPDLGxd4ieBnfkkzmqW3UeyHki6rzjG7RSS7KXrAkD3pmzi5zCTMYQJhoLBxqBghty5E2gjj51eJr9aH",
  "key30": "5QdmjUW11B8GdjLA2CbrirqFtDYEnRAhQQb7HU8yTasufM7u9Atd1LqsUAcf5a5bJsAvb3q2RjNe9gcJJAUG89k5",
  "key31": "2L8s2Q6S2vfJuDkyEdqtJEMn9erAVFWWRp2K44MQUYB8WNrMiWNFwi2pfVgtryexsdUXuUSoL4GfjG6JgWx5h3rB",
  "key32": "5dj6PFkuCR7x1QK7pHxf8EodMCXRr6yTynWv3J6U3P24Lm47hYguTWE7vUXtzcF4EpbNVwWuYBRrRxaRBwnN4iCD",
  "key33": "5UiEEyvazuZt6WC5aUeQEacVT3brZuvQCYM8o8hJuV1xwjKRYu61thanBYEd54x7JRaGWPXJ5JqgSSMJo1KSVEwV",
  "key34": "5PZraBFzu9sZHSQnFXZfbnpvdfKd8C6metVyfKE2phGUnzPP7cK8ZQDtAaEytW9U5d2zGrJ97ENiM2pjw55ymjH6",
  "key35": "js6R2vRWWYSFA6FKWmM4kVpoLSmANUW1GKa4LYESQna1KK3XRrmVwwAnRrGPghXk5spgQVopaGmUEGSq5e54Gyz",
  "key36": "r6VhYjCFkDtSYkyX8RwErhBTrxtyErKi8EW4D3RspTVuqkfZee2ySeRx593nc3csh6gDkDRfHmbQfUiByFgeNoP",
  "key37": "5ti4Cy4u9uHPMvfUX7sdNA95LFy9jVsarkkAepmmNsmz3Yk4uN5HBYC195kFN6G6mxFkdwWDUJKrzoXJTAD1GCBf",
  "key38": "4g5jiJm6gAMFSt7ECWdNxAXpBfe9A7zYLeqxGpChRMotTJr4jUyHv2LsL7sLdRPQu62Km1PdYLeZrYeoQc9gkinZ",
  "key39": "24haMawEEA6JaEMBzM6JocRHLLxAcQVBKbYah2w7zq1n71i65YiaT8ZuUnVntXstr96UQMezM2tHTgP6z4XDjYcN",
  "key40": "5w2s3328jBcQA1gm9X1LP5Wed8FWTt2q9KWHSDCGQjsPhhKeaHX1VtVH7JAmyJRAM6rW1gUzEjNRNBYSccNgQBRW",
  "key41": "45bprRiokVbzqz7jC1zF2J9bf3WL2GgeCWFdbmZ4eViUjb7jSRJGsTEvKsyKpg3XXSWrQPU5VSEDQ7a758Bjsmh4",
  "key42": "rbL4aJ6yxhsUuRn7qfFubiqaBsXECtDgo7DZYMTqabndg5SQKVxhEHWwFfnnyqgBQzRBt56nuWRpLSX2cKyALZP",
  "key43": "4r8EqzkxehbzPapYKyVLNJZogHzEcAUp3wtfoypR29V1bq5VAnCrUZunV9aBtmphEtnYB8X39bsGWakUh7uG8Bib",
  "key44": "29NbTsX29yrh72B2oxtx68iuGjCCfQZiw3qJDo9UkSgWnTDrsf1uv2rVpxATsdbQo3ZNm1JrhDMKFqy6TX58EEh6"
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
