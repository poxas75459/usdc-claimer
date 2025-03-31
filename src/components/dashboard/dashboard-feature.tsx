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
    "2pF2663cLrDbCVP7cMYqKhWACCU1to3HzqsKBuR5htaLMFS85hs1Kg4x3RxgCoaG2AXQQDN7vcvUzyS3KrUqD6VE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PHTThp6ZaQJMjFUJWby1e3T22BzaEHGQ9aH3yZNAumCrPKmpKnd5kjLN42x5W6MEwNYEwx5iiXv7R6Y5uWp9CvZ",
  "key1": "2SKy1kHmHUYPBUtPGMZex2yNLZLBaM39jE4tyh8GWx1mWjKJiCZHQnvsBiGWF2VWdgTgPsciZtUVfCqAPC3MBXZm",
  "key2": "dvJoMVooZbKx7n1bMkjgU7oyQBoFwKEP6mQD1HCiAjiT2YAv8MMMZ1PYzCpwcMBR9WdKfhfWYNM4akqoBZwPQBX",
  "key3": "5JHw5dGsqAeyKdFNMHhDRUPiD9m36G5bzsWJRM48DXFXRrXNLakUjkFipvZLXsFzk3v33nuD1Ytr9YS4BmqRWzRN",
  "key4": "4CVa1EZKT6D8HZpGuD8E3Y3PYuB9rHH8GBuAfRYvv9r7oTTrghmD9RuCgDQbDs1qgk9Ri1cSGD8CWoGxHF5bWw4f",
  "key5": "5TBoHqfiA4boCKqpXQUBn9Y1A8VjJWZ8dbXX3aCJqHxT9SxWXVvdjXsLGEMiGby999X6tUDpt7D8ionMeMFntPW8",
  "key6": "2GeKZPrmC7J7iFMS1EfsAvFe9Es9p2q6oeuNpoFBUbo4mAYNxLxUoJa7H93dF6poVnvLLNUDEGWSLj1aBvnh9aoq",
  "key7": "635bfKxtesNewK7WjhGUqT2gD5ZjNQ6DYgPujj3b5u7CMRFs1hAkuf4zWPPrnKUm2PQcu5KM8fLXz5vnS1MPmsMb",
  "key8": "5unZmdKzkN3g3PqvDbVEoqN1mHWwoJPo3ZmQ9RTX9FiYXRqAQ2dCZuGxDQkZnrcY142qoRgBeYaVyTuZsVcVmY4j",
  "key9": "4hz5Z1HiesYtaS2uitBMGvy3oR9hSAxGsVHTX9Qrb66ZdNkRwN33AJ645kxnLdsEnXQNnfdJyzb9tDNASTNZD39q",
  "key10": "2v9aAm8HwK3SRzcVBwDzhpbu62AiVmZ6tHdKpeMES3B2xSBV7Zm5CXv9EG1ReK6boSfDq1qid8BUsBR6ZYuBb21K",
  "key11": "4Kh3tpkrH7Hv2DtRjRQEiTuxJ14fQPKeHefnBn9CQeXnba1rzv7X1H6PPwWpdZ4135wpS9ttjxw8sGYavat8FJs7",
  "key12": "24HfF7xVRw6CPWaYyHHm8DSvrJjhUuerYUDB9eSUcPMpJkptEuY7XkZYSr8tidkPAg9CTqRcFcSCtDbiV2V4ei2q",
  "key13": "Vvh4gYajy7gVSu8vjZYeofyEw4kphxCRzuwNm3jjvmBpZojFt2uqrNGnGsaL7vkPRLxP6jWd1qXbDfR7ZuR7mPg",
  "key14": "2oTDvPFFVQgpfT5a8L7zCHx5AJSvdAVnMA31zAtVx9EKJgmGvzwzfaH15duGepKBhceCLgWesbFsAvBWFrvUfam8",
  "key15": "2NNYL5oXYaPHZGVaQuSAAz8R5hCSRfyeRXiwuwxqorELCvQL4FJYfKBVPF4XbEaXd4Le2RrfaRJ1JWdCUW1FbE7z",
  "key16": "64zgDXRytfHueW5EH6xLcmaFawLjksLCu795rFUhc8mPQwJ4quSf1Br77amSgdZHn3UTvJ8zmQfSWxQ8yHCN4f8h",
  "key17": "4snWnfN2JJEKcW33hkxQDaZSYM51bAWCh6S81Az6PGrdPHfNxjifY5815pxpGk1anNYeatMFGNmsYrS3e8mM1zMY",
  "key18": "2ejHG12okprAAyfPxbUBsor1Nw1Y52LjMCbVatvZQAjLGzMve5AQSHcYcRybJzZPqHFeakncSP5H7Mm4PG1SoJiD",
  "key19": "38BqjM3caig8559Mix9aK3JnWhWu3ND3oHBn5Rqk7eqcpmf7ojpzt49yRfzvcUjwWYVBqiQdto6bwZWRHa3Wy8Ei",
  "key20": "5ZBJvQtwoKPre1nyKGSrK4HSHiP9VgEPA2W9xDBP5A2PoWNXP5cqAb7JYmFyyCd2ZbYjH2BTTTMX44aNhL1RFPGo",
  "key21": "3MueGaHtb2zqSbrkByvinXH3DTd7U3f2T5X8tankCjYEy7rC8gM1rb2T1Kp6Fipd1m6dyAuGJGq7qaZ1i7xJxMgj",
  "key22": "5hmgGo9FLtM5BqqAFdSJ9ce25GqQVaqem8pHEimmsVnxYHSFB53zFLE8sVR29F8j1Ju5QKSoiY5whD5yFjmszYam",
  "key23": "vD6pqtzaPwSwf33HDzRSw3tNq47ZYTgZMfAycEtdk4mosTfnHDPMJBhzTdqNm2yiQt6ZBod8d2paBPfeDMPN4YZ",
  "key24": "3Tb7XxEFndnnUd78g9S2GDjgPJbE6T6Qo7nzVNWwZZCZYZ34U6PXeoHYArYgrVzFWMXruf1GP43TrSHZhvzEZGka",
  "key25": "2eJyAg1t5ZLxyFDtNvHPsWQ6WqRgimboCXDZoeebf28wNjXVGTj6aMiR311aARe8wAxw8Fp9MTdzUVYYaVUNWu3N",
  "key26": "3p2xPLPnrvDoMR6Bq3NV5kZrvkjJwPVJNJgrVZ8SNBDaka7LuLbwHSKCfJE1gQRRCDBrZBZkJLvZpyA2uPiGS4C1",
  "key27": "5e3x3m6X8bB5i4DLKGkNcqDaog3o62nrGWAEigELofK3moHe4saxNunf6xGdgTn5wPNPBsHCvvznVXVyfSEWWhrS",
  "key28": "5TNYGQyBoZ95daoTQBNytrHd7z7sgYjim43RZj4GyzgYFHMQyq55LgBEzuKTVmYu7okkP8aW2EA3u6b28hBmDCou",
  "key29": "2eEG6uvDuEhNsxNYegsMypUZe7HkuLwbMmEd9SkMLQ1bnGTrQTS21sBzBP75ZBd57Bf46sGCet8Bx2WXTAhiU1W2",
  "key30": "3F65i7pc3ByUdLMmm5UiACAX9UC85LN7CQetPh8VXkARmqxaDbhVLKCnNPjoELAhZ2ZdrVSjsEi5rXYUKUB5rdFY",
  "key31": "2dQQWmaB9uTF9t4yW95g9w8bjvA5uFiJ75sy2MngXkXZjdmeie1bkX2VMnNCZoxSTFp3jbX6fcBQZZo57JwknL3R",
  "key32": "2bgahSnuxVbdyhhwWbbQGzkBbQ7rbjPG1XXAUYQA8nLwgjB5QY7hzedgTXovQgtU5pHj8E5tv5ECDCA3n6vuKAPd",
  "key33": "3DHyNro3EK1KZ5qJA18fHzZF26Lh8nax4gmZYAMpUbUxDK8snRmWYxwNJj7RFPzKiz9hwQCW2N1qrTKKMX24o6aw",
  "key34": "4MfQ4UN7XEF5cHJSRfkn9zYBmqbFbA9Z8bHYSNmzwhc5QincRpzsc5uGUAzkDwPwMvCcPYhcQbsdTALLgSZE5bq8",
  "key35": "41gfSrjgnGEjgkXEGacs4xQawV9Xu7mKfbMQ5C8yb36C6HQ58sdBBtrnSg7mps6EH4ssQnqhS25r9YkvibBxVwFa",
  "key36": "HhkUyKS1gWRHQbwFxcRS8QKcD2GN4MNvTumxTfngsM67hFzwzfH6cRZWPL8Ljer3doThsyspzUCeG9mPH7dpdZ1",
  "key37": "5BY521WqGrzCnHEc19ivSPeYCaXX63RwivheqzaxsZJswXYCAzjweSEJjTU8Hp5sFstVeccpLPKAkLfF4SziGWro",
  "key38": "5UNWENuLbs6DAeZ4XydxDYypVSdGuhnyWu4DejDaGAgMgzN5yf7Yy64t52BWyXvC6Wiw5zsp5GFrPS39dhT1S7qv",
  "key39": "WzwTRBNXmTGJNs6wTANBfX2xaLuzCsG3tUUqq87z64VAgJQXKbR8jmFVoMtCDqAkNfGKVVPYvGRVhu4uSA3Z9X4",
  "key40": "4XjXzM1bgYJWdTnxau8dU885mSDkNQu49cz4GYJ119hH5Uknk1c4f5bLuHVAk9reXEhRbdqu9WpKURxVDfqYxrsA",
  "key41": "5464meYy2bZ6CuFLLK6ntd2PiFGyTXG34KLp22uC94yVJPrbZ2vzqrzgCBWVZmB3CCwS5RAcwZ3LYWPEirAiRc3p",
  "key42": "5ib3k25Ph8jem9T6x6J9r2jfig185KocMG4XPpvHzcqCY51irYvgiJa8SCr9qZU8GqBpyQWfE2VCEkfvAFi46YgR",
  "key43": "JXR4iaJgyKx3Gz6Nyiruh7QXpMvdkFhFhp396BMP6FTb2rPwEUGZH7hZ17oaBHcuoVdxLM6TvybwbHg4zzRYwgi",
  "key44": "2w6kyrUWPZj7oNeacpdki3M3XTpPwwVyLVT8rFyh5Wa9jjAvUB9XwL3wjyygwKoGRiMriZD2W8e7iFCokWbB2YEK",
  "key45": "3R4FToMJK83N43Nk3USyFG9EPMGAHHGUXFA17PWziefjoegBpnQiuBhthpnbQ5MsyDLyp1XAdDrnRSgjMBvruQBQ",
  "key46": "5UWmfyV8vTFwBBdt58BWfx5zKPCunmbnN1rdhUphSQoq16dCxiCoGYfBTvyEBjAjKMZrd4owmLeQ2feb9C5yuYsx",
  "key47": "ktXoK9cdZoa94u9fswYPypEBCNcaajLSbD2Dii1DGFPumaabFKY1vEoUZfsiHmfBVfk3NEZxUcgax3FcuvTxztJ",
  "key48": "3Ryfdp35Qf4bwi3tHeTZHsaysqwJromTzaaWDLUhW7TtZmPZTEsMdATY2wVevw4TNNAhPJbSYRPWTXtH8QLSSav2",
  "key49": "89NdLp1bXqexsvzRxFp7nrXxqDFVuXfn4JBNVhJrKFEegxQkrWnzCxXnBvXAJiuZWByEN8Yy8XkeN8NiW5QqzfT"
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
