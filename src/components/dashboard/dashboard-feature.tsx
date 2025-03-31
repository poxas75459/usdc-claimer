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
    "2jwNJGwccwnKg9RjeesLTRbdcM4Y6pr3cR1Y6Byp6Hv3xgZWD2Nk9xEKaCyn4kgnsjqaXSAyhXpKJiYQPbv2MwRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oo144QTvCGHSoXRf6uyhFveuxqYVeA43wRVLXXgBFs7SV711bNM5E8CSaJ2z7KgZeS2FoRLddozjp3b4puditVf",
  "key1": "b1fCjchsGfrxApho5j3LhTFFHiLZWx28EEqkCxPxju1y5rsaFyRKrBPGavhj3cUN3KTjefCuySig2NTCYNK3X4R",
  "key2": "2TskCdaZbUJzq1R39i38Z9nx1LcjRuKDPHba5fCJj4u2xNyDdmuNDQr46VxDjS4yTAJ1KJH3KmLYMRU2qAadj1mk",
  "key3": "3buLjLjEujmwZ73HXXvxBQ6NWjiYsw1yVLyfubpjeqoHpHkrdtSmJjgYjJJuef2GWSnhMCeioqGLyQ6hV8AUbNKp",
  "key4": "43kXkt5dDnDhc2WbZnd7FN7uJ6dna4oR7LzY8BspMeGYoc9oRjjtUA3BoLLRV1JWhDSV3EZpVdw9Y3rovqnjMBew",
  "key5": "KMvnVRaG3zTFcMwkELi1hhH2EAtcS36K3PETMN9Q27uqurFMkUpf2iJVFcqArqBQGPNL18hWSM8wiv5ZnB3Kk3b",
  "key6": "LnyuBKL8p5HTNGc61ELoKZRvH5BXZTa55vNiLCxBhrg68miqiKcwKAND3u57LDpcDtecrFcNqWG6qp7vSfgq9nw",
  "key7": "2acuaR9MPvCtHQzAQZAPXhokmt2GBH5igAMzMfNorHt1RFgSqYqnZrYN9JJ3FfxXBLo4E8CFJQ4CBzVxi1kyJoHX",
  "key8": "3JAnHEk7axaPCuR2c1qyD2yoMjwnKmzfVgRFNRzgRAHzT1FagCfpPcgm4ExTp9ByUXZMbApaZd6m6asJZAkC6dta",
  "key9": "4VmB5cNGDPEiiqBEoKBfJ9tUB83dVvPUSX9JnKZBmL2QbVWk4u6uH9jvUWsRsxpHcnLua1MsSKQBTt3L4kexZJjX",
  "key10": "5EeSncCHvoMEd1spPcMpSmEnJLLhZYy67M5tzUGeGUEGazqdyPMQLEnhYroz7oKLMi1KprmVsFWLef1Q2QdK1Hut",
  "key11": "5UVxsWTJdMzEdmzvQwUZYJnmUJSfWCGNQ2cjqsgmyEmy7thLUKqdTQQDqBoio5tybV4aY4guz6wcj4Yf1t6DPa2t",
  "key12": "3TmH5uGuoDaTwmJu19yFqV2GAMz2hTwHQmev7qVwy4jDkRvzoDFRr22HSboKfwrUXBQpJxAqwiKuBaviihqJva54",
  "key13": "2bnphRzTMTnu87vT5XZ17uvzqH2XDra4BUn5X2sPkjNikzCBeMExu4dMtgK4poWVgFkMFRpGS6a6saGDydDDtXry",
  "key14": "5BrG5wAwXMte8ZCMYA2ADSD8Cm55akd3hJNx6rtkWRXfgNPSmZuvTiEuPqpWNT1ooxpW6ojDncRPBpGrvrg4E5iB",
  "key15": "x9TprUzmEQNtxWZL9FHz1N8DmFqF6zGcfFur9rZsYyCUXUGQzivhycyAthy737xaXmkxrU8r4XyXz9qTJ9xyfLs",
  "key16": "3YRvnbiB2V3w9oPBKnnvVhA9dSfva55udaSWmMCP8Y4Kq5TnnnYLovDxNqHPjpZFEmUu6DbGGkH4NyhdAeeNWhso",
  "key17": "2PiZg5FVR3Wktt6aYD9JwHZpovaeVTMA1MPP7scBJ1SxVCRtxpRwSCLoxTHGWQ6UpNMayneasgMxBXwq7CBjNEBU",
  "key18": "5jMu129MUt13MxQmSXeXoFbDJmZwYjHg8bN2SJfNgSGHmnjd9t8yhjYKvTcjBQnYXw4dGUta7QyTa1VbyUFaecir",
  "key19": "25C6BuU5HR23Vp6GuxedXsTbaPWstbGx4E3XBAgp32xNcBW9AJ44eMruD1qDqX5X4GD8sxB1oPXjzhurkMu4Br1S",
  "key20": "38XBP5nS3JWhBwLjtTS7QY2NZU2HpBXCWfGS5E14LJQjWQ3yuQsGp4KtHb8ZUtmS6fkLTEJ1pjAKn4EnjgcXw5A3",
  "key21": "3KYfiKsbKYTddNit4b3imLjXTT6n2jrrS1295ZrN8wBve2kyYEYbZwy2a5hBFDwad4Mzak3CeEfXjTvpELLSPWR1",
  "key22": "gyvui13MAqC3YYGWddUFxVw6u57Wj9PoDcH4vkXJEJP4ztAXQXxWeJ7LxhsiicVN1sSmUQm5pejZny8ZomenNzg",
  "key23": "4fHmh6nkipGVGeNPVsVgWQwN3YtvGWvcak9hnyHU6MHUtjfZyRmiaJWct9BBgYe79aZ1W22ZXQkhK2qbpPR2MnUz",
  "key24": "5ohgU3tC2jqPUfShCE88pkfqVmm3G68x1EkQVgeoZcYdCRyQSRaGvir4ezhGqNRicDV3uxu2QcYMUCQPsws5qfDr"
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
