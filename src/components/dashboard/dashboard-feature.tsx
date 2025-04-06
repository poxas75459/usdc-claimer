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
    "2QXsReG7nSSwoxqMir3UDCrEhsvGruaESSvxCNzUkKKeBEX8JivzT4XLjL4aPywCyQe5Vb4N5Y9mKPTTAQr31yYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o2BkhfLbhz5uZYZmu8Moe31CjdY2Q5NAjiHkTUarHWUpwLFmK7gPx59kvbiSVzDyB2KrQkV6LUbY1yT24YSLCnC",
  "key1": "HSMENppoc4dnuSnAc72djuMxDwgcPCQTiUUjPFsDjnd4RMHiZMdsdDezAFNrZ5hdL3Sjhzm3Me66Afr9hTiFzzX",
  "key2": "64qAUfESqGGmHF6Q7AyQiQu4YEoWUBeU7Ep6D2kWf19jNPve1S9PigzczupBWbH3LNfD3T9v5r26WcG5GSxxo33g",
  "key3": "5ipHKuZC4vLZyvkqpUhvASjjAWYkgeqiogXEiMuPApBJKn4LpdhDJeXEScVsDxwgQnZVAvyUq9kaQjB5MMP6b5gZ",
  "key4": "3WcNaZDkFFLku7Xk9eLzfNjGL4AzPrtDnR5T6iKtLpe1NJrwnFRQ4DCTtTd3eBxXy7o9ETpCsi3gPaubgC7zTeu2",
  "key5": "4BEznnGrCjoaQH8LZqxw4ATazWSppYT4QexubRcwfT2cML8uy4eoDnb55HDJHPY1LuwK8tM7e3fKE4aeBVEBBZZm",
  "key6": "5yeV3aEnWsaVyHzwt1cB6htaJyBfyb3VSHxVQ9SseJWYQQodY4wnya7vqJx13jm9U3fW3u99LFBnbG71BQS7BW2D",
  "key7": "5synRo3twHEkFZqfBVuQDVRuh6Lx1uCDERFo5jPdY9cWARefge26984k2FDgxCV3sSatCMPfvnD1eKSGW8d7g7vT",
  "key8": "5rjBNYmsPd7kbfpSrFngUR2tsrw9N4qwYTFDR5oQb3vhBW29dFR6SsaGxKxPA2g2nBDt7VDrMYqkopqW97sZvqVc",
  "key9": "5M4t8L86wCxaHB8Yn6fJvE55C65ZPQ6zLr8ZrsmfVFUjYmvYqneXB3P1A11DAYsaa6UDFgTLRcxore7JZiYsGDLv",
  "key10": "5FzbkDttVGWZ7GqesRc9K1qKuYsPYAeZxgWNvQ2fTtx9B7kTY2zPeCv2ZZmFQrDZCc91dwCfRM4AcfZQmVgTrjmi",
  "key11": "FoBnPBbt97npWgrwiAKmGGqFLvhp1yCHhbLSAGDhWsGrngzXYS1ghKwYDJi4GVW3B2NLWwN97veMEEXrk4hR8oH",
  "key12": "58tb1tgtcNgjExjmD4cwqwn9zGPBx4hcQGez4gfQa81pkZEfKDBGicpPWydKgjHkUUdwMzjyTg4CK7dJvv4eQo2c",
  "key13": "29jr8j8Xaz7kh3xuSPPdL1vnHduQCDkuGuQvikjQ8hz1eSkn5wVwG7qJV864APcG3RCiDzdXGPMDgNXNz65NPy4a",
  "key14": "7sjEsKC1toRMygEfzcRssyJDXMu67xWC2gCLEqZXtrfnxkx5ygUCGDYFeYFKNuSbY8sLnBsP2WHKfCNCUdgXisG",
  "key15": "48w4HvHLTE7LYmfcFvVsm6t8WX9zRgQztMTP5P7vitcxnE23TLUia6Jo7qk21mVxarJmXquberGVrxvxtD2fLi7V",
  "key16": "5w6HyN1Y3eT6FJSNjTH6JgEmKPyEWptrnq9ua2YMsniNL6mHFNVnpAj5WuNCaSpbTMK3RUshD4FNg57Lt4SnwcZB",
  "key17": "2Kr5jwGVKc6khpwYMEBsur3L7eUEiNYUecQkEvBrRzGjKZDonRGXj2ETAWU4iABHCmnBSDfGRJihFFChjfoGBVAm",
  "key18": "49gNbXQ7ubQV1QPv1XBbaGQSvXkfHSemM9Mz2i8QitnVekt6vpaGJi2s9nABrQsLeCohLwmxAvsfqPyjtpaZCaNe",
  "key19": "4QMhJYACVofhpRAo2zywULsXEZMFtQYCQoFPbZDWsnUyNdGADrgYXF7KkTXgDMrsihcT6dTpTn8hUeRvEsGHneRB",
  "key20": "5L7JWBajp9APJuWRw6tuoCCgZjMqRiivqK3QLHWGHS4vReQLMt72jdvA28EXCvvp6r4h6mC6kKNmEyboDshiujSN",
  "key21": "64yFtarv5PVM7KQcFeGCZYYZw9AZ27HdfU3TW3xZt2GWhMBsX1adxfhg7HpaRktPDQLdXbi8eGE8xoiGDmyvwpNy",
  "key22": "65H92VLfCL42WmGUSXDVdvYqYCdTMnJdr4FYSxNj5keagvvmAUw24bEVGzfossp9pikfjbWwSK9uhc9DkrUoMaLN",
  "key23": "3GTZF7nCFV8p4uca6smmqGYkAehQbtGpmmhK7DadaovBxVKFQM3hQR2Sd2dbmELe26GGBZNr4qeESdzGtvqqTabA",
  "key24": "3zxLd7iUDAQVX58mrz3Xv8He2xAuTjcm1ZteZPnNcpyscjxaqQ38SasTo7y4kcSGRjqE9unycpjCo3YxGsSAUnuJ",
  "key25": "Phy5KMqSjLhJmo1st49tBxkWzA2yCN5UySMtoe5F9iycp4kArXm8cFLMa8cih2nBxBK65tk1HSPWaohsciHq8Rn",
  "key26": "bEaMcmqAULMEjSjf25Sdnu9TjgVyBfD1vDZQ4Qg7cJEGFHGvRbJyXFNb4fGLNYTpEqoZHF1sX5TJr5zBSGetzzh",
  "key27": "4gYaJXiD79cnwEamWAGknFLoyBbiMfKkvvy7WLZH49BW74RoNG9rJyyvUbMEb1Kq3R9txsytjkJMQKa7RpFWhjnC",
  "key28": "5xZrKtrc23pcdCQSgyiFgLFhRK9BVHboCnHg64Pu1gUE5KvSPS5aSQVjsNVV8oc6GF2PX89bkC1CevATnHEuxpCA",
  "key29": "3Uwg5nJ3bMbtzzZL6FotmwHahQF8TWufeoVdeJup95XBRSsYnSGcncZNh9QMzxMxwvpNPpxruLmkHNfTmA4AzBTW",
  "key30": "4FU1oHEucXqweVfDuvzMcKdQqAiaJcB8cMCyFWuKWQwJQ5ya8gTvMwsqWKmoii8tRBHQwAbqZfnxUjGFUxLgZw6o",
  "key31": "4V8uEo3EdDe7ATdzE4qqUAPnGnMoNvZYr8Diebn1KbVUj3jFnjdZSxm2GUuLAb2SK5DkcFWBmfGr4u8HVn5Fp3uw"
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
