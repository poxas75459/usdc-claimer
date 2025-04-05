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
    "3HkPnBYv6YwbfeZkLKx9kWGAX8auHhqyFp4vPhzdCn3AW5k7DMNwuZND9fRiDVFQaCpREZUB27dd6cf5jY6Zie5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EuJjxiYuKNjjdXsHAqQgfQzdTf5gFgrM5KccpfDqCKt7QoRR3xEAKa9D6RLcr4qPWos6UqwxjsmkhsoHYeoA4ph",
  "key1": "3bQ1xFqgPLMFhiRFDxHc6jUAfp1Moxa47H8wq23HnYWDERDZQijFfY7ZY8XtqM1Y39bJhrT89jUCG4tVoD8gogza",
  "key2": "58SdtapgcP1WuhouTZkeeYqypzGn48EeWCDtQkDRnNPfy4bFKWKdEgZxTRXfYh3u4hfukZg5L3EkvjC9rDQ3YTbB",
  "key3": "3SBqjcJv9CnFBsxP2vu78FxE8JJb5Fau6o4CTfaGAEg4EnfHE19pe3YK4agJQZZmuoQqbihEainm47SENui61h8V",
  "key4": "kYgsC1hrijnqHaYLPSSfN4pBhPJnyJGsD1pkzzcYYZRZy3jTmqEQ9Hh4McZZrhhvHkcrSdQ45nYZzyXokTX81JR",
  "key5": "5ZDeZr5DY1SJs4ddQuNmUy81Rk5ZAsATBXRhKz47iu6NGKJop28a2D8nhy4vBeTk1kQyNegm2dHqA3oJZFeZUcsi",
  "key6": "4GHM5rGd2Yg4LuuZkgzprfbwypisnaY9syMxSUSct1wXY2grNW84aofhBmwdJ7ybKt5DDTVug9hDDXAERFDZHawg",
  "key7": "594rpBs7CKmUe55gUAH8nHrVD5aKd4tWmgCynPhjKaNEXVkChe6esFHtyip3NybtAJjdREj9jrpDkKM88Ao1ZNSW",
  "key8": "2BYamdJHxdzei7nZsic7agfE4oFBNhKP2qYhoPbMGbTDghVV37tXRncDHDo5XA4N3zwMxThu1xADyxd5RNmkfnLm",
  "key9": "2UTnkm6B2GZsUGouvbdf83f1YUnwvM9kTCKLEQH78v7C7AQRG8orVdQz8mjante9W9JV4aLddJiVjiDgVjSKg5mJ",
  "key10": "hyeKTrS2L7Pd4ETzUaSjoz3GWuSCbdsrNNCuevXVGAdK4TvX8FaWvEbVBeEZfzhkV3skM1RMV9wvkhMfi5FAj8A",
  "key11": "2QXboKRQrvcefcknFK3MQzM9noFYVnZskCpybBTBTTTWu9WZTFxmgCN7xyn6ay8FEC5xFFj7R1qr5EuJQpHDKwb8",
  "key12": "2Y439V2CdrbMotRXrseHZ8YovguwunP7MX8bBrEWBFUWWsbPeJGvo4eSS2pgv6eeVKggiknQWeEUMoXwqjbtw2uD",
  "key13": "8wJ3Utma2Zaemp8MGLxqSAF25H3JgQUdM4C5EcH11vQZdgFtMJyJHcsvGr62gBTJYyUsbggcCb4Yrw7ahvWxSyD",
  "key14": "2xJvSBKMtNfdvQKJGhm2EpFN6BQwcWM2hWxdZXhoQ4agBTfPM2E71aT5XXsbwvbLRbmmqFybEA2a2ZQLiFhcZNK8",
  "key15": "vueMR5Q5oexiF5PnwY3Ump1kyNR8HRBcr2mEtJkYLM68rP49ANE2eVSf9S4LFB1RYwTDECXxt3KNfD3DfMn3sDp",
  "key16": "5kpYsqwkEiLbsMoMoUENXwMympdHtBW4wbcekeJVWvDK9aGY4LsN4rx3yGY4WsGJ4Yg1hsbqsTyx8xFUAFusHXy2",
  "key17": "h4bQatmizxCvYcqKQ8WTZCzCpLfCMdDuXkysfWD2bYAmUuyHhYu6BqoqRZ7cgvsWQnysGDnU29152QyYt9cbvVR",
  "key18": "331ud7KG9GPafz1nMpiGU41UuW17tgyrpPMwGQBZnharKb41xbuN2zkVguLzTkMuRfEJR7jCKgNBB5f4UhQ15aRz",
  "key19": "2euTxpEbuPPvihwjH12d3GbC4mQ3ZNvkFeTAs1keZV68H3hMZiMzDgWtWM8UByxtghAKpyCat55KGywCuYYaaDWj",
  "key20": "4rQwmauvDFpPR6Ln8UFfkxq23AG3rq7ASYgbgW3RAgwHEh9a4fquA8eronXzWgLbbk8UoJhnmhuWyxCDPgWGm7p8",
  "key21": "4GMd8dnWi8gD9GtnjaLZLz3kYYahFNzEwq2e9BbgAmCxnyBDNdN5SC7xtpLWmn2JbVvYuTtaVu5EepSfpf842kS3",
  "key22": "3tAMQLhHvmAbMKYTgYHcoiCL3kpLNUCrqQEwmg51p4o7R7heGb6piJAAjg3jHTx6ERKexFt1CCCHgzw3pMcCnXb6",
  "key23": "RUK6sV18unFLFNHsrXdP5Fkb34hKpP76t8hsMiE2etXDYCfqgp1bJay5w9yffC6WXGx11apZqULshMHAe8Bm6dR",
  "key24": "2yGj9EBK31KxiicCqFxjSXyRmkHviUsVxScaSUyLJDWnU5MEoRBq6DH6V3zAP3bMC6U29aKYJUGH92NXyN7HzGnV",
  "key25": "3SJ7kPw3xz1x9tRZjUMWvvcraP2XXpaie6L2KoHxPN9xmW5qfmAC8Yp1m8mJALwr2c6MTxZkCMuNPmzWsAjpxxiC",
  "key26": "5tGmfH3aBeUZYm64TEDKuzAZTTXNTXjSzhWxW5o2S6cEeoNHZtRKfCfwGdppHysP2BJQ95Dr7CXh8GDSY4bFabg7",
  "key27": "4oCrrNmTSzdh7xUb6UzMrhvk3bbAHShVNycrjZZhwFhVTozwc9H6mYzJkR8nue63gLX89BtiYfUZ5UJtzZTxwSUJ",
  "key28": "66j7XyMWJYHhWEJC68PETrRFtmf2g73Ubey2LYSTgYYVFdnPVfrxqegAXGyyuaAHKQzrRtfkAn66pVcVhFtiyRTJ",
  "key29": "9LwTwf11rtB774M2yLJuAFyFzUnPYoNFUJhcvUxupEMWqmABEKYdvjfFcDbEkn7bpbwmLTpv73tUv6vFcTdxkAQ"
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
