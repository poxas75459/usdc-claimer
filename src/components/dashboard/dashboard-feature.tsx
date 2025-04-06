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
    "3qWFT3dr4vN2hkMEBwCki4Y8mZfkXsBwz4Z7wmuGQrKw3gpvq4KFGf9jRFcCZH9vqyPcUTgBFh9rnWMb9DFaNaFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z69piRNon4uP1pavzQe2guXHTokctbD7HpCU36p7MjHiLK7zEaQWKMiGURwKobKe1jMYQRA4QFZzktrTeXE5yQz",
  "key1": "5jPu6s3TiEpxtC9wDhwXSHyrixXDz28wr5VQXccBUaM9UMjzLwi7MLspo7JdR2UoAcSzMinRMyEASbKjMz3eVXVs",
  "key2": "3ke5BqDGfshvabgxjNV9mJPdGSvdrYSkJ987ZGpYXPrDDVUaP4T95HYjbe3cQ6DHvzG4Pb4S8EhC8NEiLgvM4GnZ",
  "key3": "4yCTThahoFCdaeymDRHcDPxK789U7zHKqnPe7tKGRZC3867jnhm4vjVEU9p4HfXQkQ82rBpbp4mYV26V3N9JfDTX",
  "key4": "2uPeM8EQbjBziHNrKhiP1thR8Nd142CnfjpFgURuju5RmLYeDtN7LsnbftdXuk6Do6RJP4xgfsGg5m1q3267KUGg",
  "key5": "bQ1WKY2FmovbiJf83b1KoPofijKGHB4UevfApiX7ERTZm5sj1AbUPr7cqBD5XgFzt6uVkpq23LqPBt1v1K8YZ2t",
  "key6": "23AsMWQQRaBy5Hf4hvLxcaB6V76sHZcDPBEvUCwNM3YXyinoGgftaRLbNmqjarTV2dS72riZnjBj5h13fER4iy1N",
  "key7": "4xvhTpaVyvfWPxJYQZTNQYHVVzuSahQbT6scDAyJFQxjHtT3nyAp4jY8QRffXJ23hcSyPPFvkKsMDToWMJakAdaQ",
  "key8": "2JMmQLj6i7eogznz1iq1u8nut6t9UYd64xMXJsGdL8zd2rjxX4hqJ7PuyRUKgFX9qTFGYAERy3vXjGDFApHMFfrN",
  "key9": "4DBetXDafQmfgvYWBM5L1kQ2FRfQuqNqiZdoprzkQy84ub9pV2F144Rezs11DLizXRsWV4pbruybhMKKCmtPCZLG",
  "key10": "4aN3BDcsNCt12KJKKQsvinEyKnyzX55a25ynA5YD8Zc7KL9gHjUhdbTK3gytWYrkJ7MrU9XG6SroygbayxZSWJFu",
  "key11": "4ohVwsPbQvyzAsZmnWusTvVT4iiikTaZ82MW9i3Zvfq6NqCveWKdxHXMGZdCWoGMR83BNEm8JubSKhUbfQxuYzfX",
  "key12": "3TG7dpMzi6ni7AJ8CihTi7fwVqsKN1EjzZZSw29ZCWJsCfaCv4ajGN5sPzV7FPrgA8jFM3qnt3GKrL41br3fB8qn",
  "key13": "5MVP3ZFXyDxG6QH6aGnzx34qVP6HpqPHnUv1DE6vU36877itWGTQLrx1uqVVRJVYRwaN9vwGXSgGA3t16jrh9KHg",
  "key14": "3LzBatHsebeW7uUfK1dQyDfTPLRQoP11hGipMEAdFSB14XD88wnsrthKniUmj1VzWg9kC6JwtzRmDh7hGuz3Cv7Y",
  "key15": "4xPQjJELYb9HWiMNyw12FuYbnqeX8dcRWMe7oPhWwf9gHK8efQ9qpNJ6mvCoWgjRtacbvkdzcfV9eng3GbzsLtc4",
  "key16": "5JzGPU6191Za5x9PtKzz4fzaH1QTXBEzCMiRY677ySHxmebrbub7KZc34vfc4R6tjXqDqdNavmYYZDzpA6cK8t9h",
  "key17": "5oDAGaBQh2SsazfGHq5NRWduiPih5n6HN1dvALMLs2Bcpz7FTXC2Q6HnogE5beudCeSoqjoVdZTXLRzbW52zj4oR",
  "key18": "3f1LeC7TeP6gBHuZf3SZfToXoMD8PUcrGDdDt4BXrvsfxH8fUBV7uooqw86TRMjPGiFVHx3waMuCgCzGyyoy7A4k",
  "key19": "2TWQVs3m6Qg6PrKFVBkAjGuBEMoFwmgedSy2UECsBkFLUefzxmpB9Zf6kCeZdagdjtshom1jVxnPs7bMQASKhTRk",
  "key20": "2psiDiCuJxPzz9Lkvd1iSj53wLrkzQSxzizF7VVesvbSdzCZxqz6TXW41tftTCxtoWCLSa2kGes8EW95KNxeyEm4",
  "key21": "5BEGaptoCG6nKQZGGmm4ZzwLsyydEfTSQYiALjo5Y3PrwwtjMQC6ZuFzRKL3uXLoHtPJVm2zcoEipcnU46hB4oDR",
  "key22": "59okXRdZfqfiUPqkyYeZaKgWxr1MDqgdEuQnHvwqGpxBgahdzVWnbj7Qkr9EDiA44caSDuVk1fPV9mCeQ4SvNiy7",
  "key23": "3uL3XghaZsBe7muYLeDfSGFrPv5gdggAkzDgSDJkcDVYZz9uThNbqNNkhzSKaZVA8NdzJwXMtNwPbufHE9HryV2W",
  "key24": "4kNjwQWzQAeCDo6eegoknZVeHCMR9jp8Qf6LsmS1g39naAyGY7AXW7yBUahpW9KWvMYm9Y3oNcjEWagHTxWZwsrR",
  "key25": "2gcZ76m73kuj1pRodDDwbPhSi6DZutoTX74WNPogSm5guNQg7PBCYX48ncei1WPjsYEiTPvh694NcZteNzQbSBXM",
  "key26": "2vBXcssSWv4JuomX6PNBqsFGQD54wQrKU8xSmKDRZwDBYDiLZHLV4ViVyXdLcx6Qwvt3mNgTiP8En4hoYY4ru2cy",
  "key27": "4r4DF4oADkgAGfkFSQMHV5CRyaWm5oYkBiYCgmvPrpibGHVMUWB7aT5APFkV3GHwN3D7VQoMm5LLvck6jC74CDXX",
  "key28": "3jSjQTZfMWuZ6e2JTpMHCiJYH76hbGaDx6t3VzYRB5hBMB24AEDk3LV3JupjLEJePezY32uxdsoSJTponhSTKxxb",
  "key29": "2fxQiTNMCPJZtekEacyY7TzJb9KbPGELZcpYjbG5cHAJtJL8xrLztfKLbgCNhXkoaqQvK7zBm69YM6XHyEj6wTqc",
  "key30": "2gg7C26vmMrQhA3x5o5HtKGJVoAH8EL7SFibb8QkTN8vqV7PqLnGbcXXu3HZMN4ggmcy6i5oqbvjRHgoKcCdMRk7",
  "key31": "JqP7Ah5A4qG4HVGkCdCWmrCdUu8An3AjjTvGiX7E6kok2HFsvksuwo2rzaU5L1cZDns5hvfdPqQ9TePQ4Dm8Rz3",
  "key32": "3heBwNnvHRF4RyeZJy68hM92B26CveprEkvqSYJNo9NLMHajijnMkhkWCSmKMoV1FRhwcoZqNKoWb3xkLJ3i4HY2",
  "key33": "411eH51XweV6y12uHjD5SSLJu4B7WtREmRdKRveSNd3E6mrBzWkryy9BJQANC5BAZde7p8ioCdLB1HfBoGMxzbzi",
  "key34": "2hiAcjjJgoeLEHAxxSmYFSDdkTn4HvENBJVhEMAY8gn3ikyrpEVd3Bi3qm5XYbB3UM8gpAw2EFe8RgiLk5Ch6nP7",
  "key35": "4sTBW2LNRDLsCRZsR2jY72XJzm7xY98wXeSpZ5xbwXJ3oUQVuJAHxs8xtGgMv1gWM9UTnBbNyVn3N3ma1BaRxbdT",
  "key36": "4kC6svCrS1Ak7iV8HYExMecPfHNGftADnt8ZRErtEcjZXbr8B2A2X2x8qf3m6oeMYjBPMVoBCQJm5v5grWec6rEz",
  "key37": "2Pb2FZWzPj3oaouWegr1VhQiTQF4UD2XZgz3rA6aJ9zL8RrxC5Kc7PT1XRooTyE8XQTqn2AeEyXovCMfVV9o9ShB"
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
