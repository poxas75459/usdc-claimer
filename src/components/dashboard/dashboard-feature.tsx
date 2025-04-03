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
    "5LoFvpeo1gkpCNDfkvUKwv13CCNBbn1DLgLxDA3kkswWE21BmARBxMxEnkCMUiMxoCFKt13irGqfkwSf6GVmyMb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31sQNNaQiew2HuJkLVbmVZWmZ3X7NcReeFhCicDQ9zPZpx2P3qkqyx3YjHCKcFbhwAGMS2XdS75EC1ECtBa2DGVC",
  "key1": "M1m4EqoKq36xsQkJ14TicAgBWNnvcJdjZeqXnT7mgAVZ3Mjenbd8mhqXsxDtYLmTKi3JjwMQzyPyqmKD7dGSzH6",
  "key2": "4WoNGT31bvCA5vMD5dTZ9mqH1TSD8Svq4HSyz9TeRk45xRwuvRKrW5ssvT5nxpKE7Kbyw4AQaKNm17ZcMtTyJM75",
  "key3": "4UJ52dALP8XuVnpVvD6cSJ8fnajTT9NpHJM2KHrV2NqnU5u5o8WtCjrzuUCZgVctwKoWdoxTk4G1L3Zrd4ugZgEH",
  "key4": "2DKzShQBp2wBwrodKDuB85VfdQ1FwYcgBUpvAzkx3TfTMu814YChSR3YK1JDVXHsPM4mx4qE78bnykqs82oD5P7C",
  "key5": "J7VpHDT2Fpq5iBy68nh7QJusjwYFG1gbHV7kNfjDpEQcPoYzAL5CJVqxVStah4AEDkqSKMZiXFH4kDGrmnCR7sd",
  "key6": "3zXHnBArJ2TE5x34aSNed3oSLevEN4e67x3vjw1x6FCv9hiD32MTZ2P9vH7crXMdmyXH37bbFeZFMRrVdL5wDML7",
  "key7": "4oL5S7NDobcRQwNn5YG2HStFkPi4WBWkTnMG7GmSVk59pAgDmUzD8WPFdU7UNq8zwcEzfLmNdEUfiJAKXyiJRC7W",
  "key8": "3VSkBRVwtUu7Sph3c8To3TuUbBWh1vA6Nq4n1RR7S7YrXmBfzLhagFCT226UJceuqCsKwXvdzz58Ez6tQRCkXtw6",
  "key9": "4hT88g1VhZvhruWN3X6NWgBocmJvydxf5kNy6NFh7fjhNLXXBbLZD8rPJdfmPByVV27SnN2mJuWM6SbxBF4LQhwz",
  "key10": "2na5tKoEzpmchdhafrAFqXLhc3NAwm5HPhhcbJCqah1E9ZqhFpu3hqJFrK32bR2CFieqMiHRe84UZvVijvowqMRg",
  "key11": "4Sd8KxYtC2morSQsAXARvSQBqdytfvoZvrAHHLqkbatmxMZQBSfYngaANE2RfmCmmBfSCk3ybGwojNz1DwqA1tsh",
  "key12": "8LpXPxDcasm6CM4fjFiKtKibb5szf1duSmj5awUGFiVu2g6vESL35jprYX2dhoUuJfDRetSwxbiBZrQ9ngVirC3",
  "key13": "4D8HR5KHVZ3TcC7BecAVcFByMuBJqH5xehwGMfrqvSSfUMPZHrmgemy4QcFbUzJ6S6EqXpUFbcLSXbCCGzCncXBV",
  "key14": "3vdMiKrnwh4zZwduGz6FCXZR1yNN1Am1y6Ku55tsbpG21SD3MJrQWGQGXhsG4W3MEiCZUNJdnWdzvyJZhbtBFhNz",
  "key15": "2MwrEZVuLzx3R8qV8BWXzD7WMTNMD6QDYipLsZYpirzpR37Pi21q8wmfQ65bjG5DSSMqunzcF3HvfFogYPJuT9dh",
  "key16": "5qHZACuEoPrfdkXbePi7am8T6jJbv5xJrNcu7MwG4tviTX9R9BwCFQe3H9JfvpGwn8VuquLge83rN5eGmh7cXSDp",
  "key17": "4WZStTRMBWxKgvioUnCYHe2VQTWfgCKXzfFjUaE2q19KywUzy46781KV2QHBE1ztCYiDkFT8fDMDCUACSSML36Ci",
  "key18": "52ufxWdLsKwbMQLChKdbnhmYEHuX29CxvQZm6ZLMJ1iirdK5dGADbpSdQdgytC4w5dgsgr5mLtQn8gojM7xostzs",
  "key19": "2NaifX1w9Q1jNaVrhv7cZP77urkKDPNwUkrshggo2t2g4S7CYTWDusZHBBade5dWpagcYwY6T3rPJr96fUYZvNDh",
  "key20": "4MN4nWY4qBMG5CEfUHTKRTkC75TaV8ATrRdsFRVvUpsiypHjpi5LfnNmG6a9NkHzxu1nfYr4eXsQbstrhYegjafQ",
  "key21": "4ZFXBQRcMxxkP8HFdKAp7g4LCnEYUGc68pfTMdW5Eu92DCE6he9DwiKS9G8bD1KUPgAcnDGZKCo12CsoNNTh4xfT",
  "key22": "5fBisWRfDX2RcnYexK6jNQ4pGkhFEFu2JbKWuBXCDckhwr9aDjZvvUiYEWzaaipmh55WokoS59GYGe2jWZsggrSf",
  "key23": "524H2Nv4Lmvsi9ywo4Q7FQ3A9MtNqfPSYKbvLZda7qL28MBg6RZXpm5aF8nsBqAMFwM3DbpJwHQWxrF1LMhiYT4q",
  "key24": "4ujNN8D3z35U98MSH7jCSpDj8Xy1fnarT9Vv9mSvvspWAYRRKLPv5g15QSRZAT8XcP8W19M7xmswmbXc8rBdkWuf",
  "key25": "2tDWXb8fzo2N5fLjoriqne91P18irNbwQTpWtn2uKUi9BKaLX7ri8U8LbagNvWTZmcw1veWhZzjcdQWryGufimCM",
  "key26": "2r8ow6bigx1jL3TQQfnCraP3qWdoLLSTepj5p8JspDTaV9x5tq5yRh4UDDHoTFrgPWnrryMPNtKZqaozSopZuxD8",
  "key27": "k6KR3y34Fjz1ES6PfgToWABj1JxsTe8exWU4vR4YX1SmqK6uLisAzwstx7ZE4FfMmGnWCdzaLvW8ywi14E2qkiC",
  "key28": "3Ek3WAyUz6JB8rEwedPkKW7sz5zWRNmamjnacGDWp8UQvw9vkuX7ScCksjPacj8hC1MToUsB2YNDjcvCvcwioHmD",
  "key29": "5NP8yrKAErQnY9KSbuSFpzzdcJ2NvDvTkiAWmgPnPEJxxQmEwpdhGTdw68BCepqpUCdwLagCDbNinxumVKGGtsbm",
  "key30": "zLxQPQj2GDMMWBftK29v3hE8TKjvCNgEvdS6JWy6tuTWBt4kEUX99VbYYwor468pfETC9Bf8fMXJsBwnZteYP1v",
  "key31": "32AK3VtMaK8NjWcNsco3iXRtn3SG4FnHuUYW8iMhtoLQX9WZHe1kHZdzMifATEjDKkodRQx57md78b6KQzDRVNWf",
  "key32": "5vxUJyViL8LVrzwhktRngyPcF8GVqakUwP4DcrTwcH3s9Y7N6vQafW7x4KLK9esBQ19RrjXA5GoZf78DtQcjhkFR",
  "key33": "53wVbHSs4xp7QM3WPEAjKfQRvAxkdHoLM7UN4PSXFvfgASoc7eqc8fXHwJJErUwaAM4DWvCizagPqZT8dezAi1eT",
  "key34": "nK8owMd1arKHGZ6Zrmx1eSoPd5JeBB8Wvk7r9hF6SNKmTYJCerv7s2swA9DF5ZfCSq8gFyu8QDCuBrkktdHBP3U",
  "key35": "62S1vGuiXbVyxH1FPui3qMyozZdVa3TEV1ofp7WtCyy6qkPxUHcaWcw5HXLZAMkjfZQfUgyQ8YxY5BHV8aqRjbjt"
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
