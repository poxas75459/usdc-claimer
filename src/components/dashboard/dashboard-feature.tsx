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
    "23mAi5BJJ2XoRBEcvkCyP2ZJBduTHd7yEdmJvtBVZMCxrDKDcWDXtEixwLMJMj6keeK6yGpDvmwc3dauJ1NdCSTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDvD77raQPabfqkewNAbPp3sLXVQBonRMwKE8vFJZZ38uLja279SrcaEEJtCFTQfQ6CwmQCqix5V1tUdSg8nk3g",
  "key1": "3XBj2TMzNqLKAV9pULZv1DUnM2eJDWqK27RrouXdi5rAkwHMPPBT6Vw69jBRzX3kJ1wanUdE6xhHZMJ7dv9HtzLV",
  "key2": "3ASfKqxSo1JYPWDZJVdHYAoGuHdGcKBHbje6ap6zAk9feaS8EWwVzQFxx8kXaDss3tpfn5mwfTvNMekz6Js3z8RF",
  "key3": "2dpmknbCV7ke2c8AoQBzDZwSFEnu6Xx5AsVLjR9De8cGdpJvLmQPcYWreQvnri8jey6fTa6qQGerXCh2ahvWaJz1",
  "key4": "6ALtXT3Q6cYkyLYngtgU7tKGyhZNyvHt9jPjJEYw4QjBTqxsGMS1WRWsKLS3m6aPNjKTitHLT6bEe8CE245QP5N",
  "key5": "3ofJjRm7J74hM8G2beqBLCZjn2ts9vcvShMGUcxXtSgFHQhvUHKtF3jsNdV5oCfgaqyVeJzFoPPGg5fUJ7zs2M92",
  "key6": "ZJ48wzs9oUhjhgKCx28Qri9ZF4eKmDYo6kfqWS3ZWKBYWbFUYZrqsYCvB7fgNcEMviyhp9ar6rGVC16igYq8vSv",
  "key7": "5xuiWas87zuZAYwKR6SH4G4vLKxD1jq82Cas8fr8FxXT98x5c8GsADBTrefQVbMfSj9j6g724WJK8ZTAY5bxcomM",
  "key8": "5a5hXR4K8TNzEqL9QUQZNTKHUe9aNHhzwDPWeqYomyLM2g6WfDaUzXF9ne95xhaWtEMcN3sjrCReBLWKetd4UmSP",
  "key9": "3gJojrkaAfRi412HKQ9gk2S78WmVrDbuhD2hMXMv6s5fWmDr83PTAz1rofJpBkrW89YtbcL5ahYDw4xt6K7L5Eqf",
  "key10": "59N37vjqQVFQ3zTVsrHoXJpcXhafFTjQJC4Z78dRBRJaV7Hx5JLY1TNbvCV8eaVTj3id8bf4f4iKN2iXV6UoQQ83",
  "key11": "217jDK3GaXvFWZfKGdTcooHy8NhQDiBaJ1SicZmiJuUCvvE3upNctTQznG1NWePBz4Lpdits7aHa3Vwo4TYt1g7Q",
  "key12": "4mc6YBU1WyCpz2NaGfyvvnnXc5CeuMHPN83FtMPYQS225kgAaWcgdVskAHDHCCwzS356CqXfHm9FkXnyteR35YS3",
  "key13": "2RtUR1TyDHYTRbPgpowTmTCsbW35spC7rWRgNuaQcGWYH6UzPnTngXMXyrPux7TmrkURrpzitfz1xH4AHg2FtuKB",
  "key14": "5ioamqEbfFRUgSPPZ3v47akhTeyzTPiAS1wF613oeZdWG489Wr5SBoosu2CEHTbStWQ5tDfnj6kPoTnFVF1wJp7a",
  "key15": "5soxXHUjwMFrzmpen36yt7PS1oDakjCHCt82PPdqu9bsoWhSH2B8wVjXdtvdcAzVZXvdwZ5Fyk9hneTCf6KtjHsQ",
  "key16": "G5wFGxdsRLSiQztgGmAwedJ6qWut3JFU4CK8Kn1HXKmcUsqtNdyL5isv7nfMn76EokzgneyAHbvpRLmUfg2wfQE",
  "key17": "4jDX5aHv7uv82oaMNRoWXZKTcf416hP3A3LDYxZLH1fkAxxkk1dje2JAL3jQBtLNk55G6fg1Va1SfBZAytBo6gxp",
  "key18": "GSxsnxyJcKfMs9qXjq97Cfuo7PSDG9LhS3eSKiNwxhjccYZuBPDhw7ngGrLdvug9qPwb8Eqy2DanAohmAy2kULV",
  "key19": "c6SFufwb4YeZB8d5n8PiQr2wEyynihAm2ceGifXFvSW2Duh3MfLApnDe1vBgv1c8deBxCJdr6aWyJF1AkRJXhjF",
  "key20": "3QdCPqr8ddgeFUMW7wYBk2fcPQZSZq8x2xuLPjihrvXzKLKikU7y3FVZs3s1RBBuevAEqdwZTgN5bgET4hZZFbNm",
  "key21": "3NUx9ck54C8AdaLXyxUqnh8s16SnyyEt3pX1ER7FkxzhugA7pQCA5KFsM46GGn3w5b15S3bKDsM3gQ54qEUXPu6r",
  "key22": "cBPzfcgYfsnVT2CWV13BJKtba8K5r67E86BCo3dezXQxc2TNerst82NBstjHfkpmgc4gd9ageaXBbiagwaYSU96",
  "key23": "2BA3CcRGTwAMFXahJBh8bZJiDogspiydNSvWaz6xk5WksoChWentmuG4Q3YMPqC1rtCnG2bahmFv644JF41Yi2Us",
  "key24": "oAdfRQ2qPi2JShrhLfTXoHWNKEZV2gw2rDKzNoUvuvxyAYZgtiTbaKh1JVTccbeeUJiW1oBnjbMpimC5g8YqtYx"
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
