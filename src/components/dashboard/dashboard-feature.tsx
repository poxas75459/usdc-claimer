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
    "qD61P2DQhojtFmL63Emb9WraWytLzNGQa159yQdUJ6t1m1qf5TQCGVp7WbDm7roDrFnLxDLtevwfv8yKAqtay1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YHJ1M4ijTBDPXqqkvEyK79wH3FEtPAqbmDTSPE7BFHoesQPakVS9Vwnb2bSin44Eo4zyiPQ1qfP2ymDjGBaaHTj",
  "key1": "3h93dsuAosZjMVWVXJt4y4KLrTquv8F4GdaKBSRbTqri6bmA6XUrmTmSjGRVtGcm8XsX8mHjWLEqDew4dMzqLrbL",
  "key2": "2Ned6xCbUpJnAPpmMVXAT6FXMCfjgomEP7DXGsJVDHDKFJaQZU5xNBS7uSoeNmTJR4SEdSBTP2DQneceGgi3WT3j",
  "key3": "4EaRKrXxjYJ5c1XJMrUokAcfTXk45TD1XSzLNjhp1doQBZzjHA3s5tdD8N9v6Wk7bUJkYKTWxdjFVSFqA448o93f",
  "key4": "2wvaLLJKFz8zArpkbJnFN9amqiU8eyBtk5PfLa6Rb66c3cYxwKGwKB8oHU7gpoj4eECAoVWYM4tUVPqKpbZXfmVv",
  "key5": "4dN38PxEYU2mAENmJxpndyTiEZ29s3nVVhErE75UtvHqVsK4xHiVJhenTGzEsX4TTKX8cf7k6sSod3VKn9GwMbfx",
  "key6": "44jX3uowKX7YjhXLm4hCqi5uq8LAxDkvxu9P9WYEyHeNVasn4EnhgXMvcb87qjpeb76yswiZscuwDohtTkwKvY6o",
  "key7": "4BuRETxDtU1jRV2376RS34irWiyZGDfDehtMZrnFrrufNJqJB17ttWAAVaJrX1sTe8w7pyaMd7TAsFSSxuyM2Ckx",
  "key8": "2UfLEuEq4NnK8m6TSqyRuMs68k57HAD4zts2jFkgyHAmQR2XNhZFDWDK9yc8V2VvTRZQKs9Rb1CV2GdRLZmKRNto",
  "key9": "57qiZQiP48JFS7WJqbDGKutxc9Vfcqk6CNgtrgLYeaMW9HLREVtWmrXejw9kRJTT412jJH3kc4VS6jYCudE4yAk8",
  "key10": "4iJkorNrALgWB4HXVG3muWzJRob6Z5tQJ9UGQzrLykwnhyWXZdDV3Qo48dReZHnagaH3b9DKh8CmsXgj1YWPDszh",
  "key11": "TxjcShQqsZiSacuTxdeCFqFqmw8y7h3rLrgm3ApWgiYpGVFQ5NDXuSfzvEmNf6bW6iq8aoNu66nF1BdeXJFBgLd",
  "key12": "jwqbaTwKEkcXcPq877UthdssRyhh2TAGDGxjJTZ5SPmsfRGjpknJQQ2jkLUh3ZReqN5qKXMnAbbCMYbcceWvhxf",
  "key13": "3gPVdREssmH4rNhCRKUbzUBWG3zFYqmtmxtaq89zNm9heZnosUUwwejNWnZS1d8baoyfiyAgqqZMwYG4TSq7s1bG",
  "key14": "32d9Ao4TxWK1g3iRygTgLu5QhJzVCa3wJ4NSGW5pPZz5JsifQbvZVYjd7a4T9vLmjypHSMPjivAN15vvtrVMD2yY",
  "key15": "4qxRwn1oQcREeHMXWA8Z4xoNn5gN8iNoEG5FowDrEaKZRgJqrVSAHt2NwmrCVtBaujCEdY5EAbuUUKB1YhAgaXHg",
  "key16": "4B5YFRqN7MtvD5KRypAo9akCbRE9UBaeNNnSpgWsDE7d4hHg7UaSghGwj2DWmYSYuGSHuRFBFtFt9JTQtDoB9cDk",
  "key17": "3iEHsUfSAEh5e5knJdjvkKHjJarcfR64P1ojDPu5VKD8xTYMaFwzBQx8YDex3YBdHs2xY34dztQDUipwxQxF8oo4",
  "key18": "3BEKTedmX1MFzbzERdY22oimwqEsstavpdcTtRi3wDRkjjp8odC7XKtU1oa41x5vKekkmXDFuN64u2qmiqR4Roup",
  "key19": "4AqdL1MueYupqmfLq8cYTkZjkzs41hSwBSGc78gggEZUZTG13jJrsU2MVeYQMt84LJ8AChAkbLzHVa5akDUWFH8i",
  "key20": "37nsvab8kRcQCnJVW4x1JqcdyeuzFJ74dkcJupvrxfxxP9iwBdzdU3MXgXe8wvDq8azUG1LHpkHf5jTNf4f3NTYd",
  "key21": "2xEJkQ91d4yeLB9fkN5xn99UaxYNbJEjMky7T14KMdYTwZ4NG6hQEiPSLYds879JsMYMCnWpw8oB7L4yMSKWu15k",
  "key22": "2piTYDKEs3x7U8YfeG3iw1Uf3MpduGx88iykPCsCQj3vXMFGcDDsVYHGvMvtnTyiNQ2RAt7QVY1MVzUe557f9SrV",
  "key23": "3AEtTefUZUQVHn8RduWsDeqMaaMtHmxqcxkKcXmxBb6pHKNdbo7nyyuGjmFP5VHrtz23Timt2mBAUuQ93GaVckWL",
  "key24": "3Bvn8K1B987LJVNdPMhMLp1siKgwy9mfMkpnTQK6m2uckAcoe2JSTiKSXSCpCcivHygjiyFiVMm9a6nzcXMm2nTT",
  "key25": "2y5dBqVV1nPsEtmzT33Gu5S95uBmUL1132jkERmRA9VBANZEquPJ2N7HAQensWnUnnEguEMXV9E15MmzNVm4tMRE",
  "key26": "7jC4BBLdva78yGJeBdgDjFFocxRrmjSBnFFDisESPBUKneaqYSGmtT7PVsRUQca9dCueCwhPcNNuJSSDyWL7eem"
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
