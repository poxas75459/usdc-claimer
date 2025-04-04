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
    "4jHXRRF9q96xqmccscom9JZ8x4ZtJbKTuxvUps6LVMtnst9AUkDoZqt3dbWCoTLy5XiPjdAveqAWpnC3JzNMUU8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcmveXoYkmrzUHki3HReYhXRetNwogG7qA8cyVesEB7p1H3VJLwoQEsDVURF7tfZ1BVQZZpJ8MVgD2A2HGBw2MS",
  "key1": "2nwLs2SXLapznRd98ic17JHgeWTZ7g9T6gSK5qnp5Jk2gdx8ZESPixN1x2k38hq5dH83U1sBfGBfisCadhFBYsMt",
  "key2": "J6BJja4dXVVPfBwSYHA5symbbMrfuTcP4fj3HUmh4PAa7mhQYgQBTNiQhQ5zM8frLuYyMC4L5JrYDDmAoGPPWXK",
  "key3": "3fjgo92SRgdAuuoEXV7Jns6o9Cw6gj1YqoB2Cao8pJ4VDBqrzqiFmN9Hmi7FamuEbw7saxmRnWQAvqA6xfBvDYWN",
  "key4": "4KtUKcWMjzpnSUehQCPkgevgQDAwDrRaz6o9BxwuxqbQMBtpXhL59UV3HjVt84k7ZQwUi2qjrdZgSc75M1CoL9ZQ",
  "key5": "53zwXSu9vz2dAz3v1KPjqYWYNXB1Ha2jgkSaxZiB3pF4prhxtjNkVrwKMqoP621679xPtRx8yPLrmBATPLgpGuQp",
  "key6": "4P98iMXdQMqyePqwmJ6v3AMc1YU5CS26DLBH2NTfcQViSEyeRCcnqDxTKPth3pfVNSHAC3NJYCyqSBKKpgW16HoF",
  "key7": "43Sa6iZ83xSXZeKfNcksjHibgiDpngPgbfCJQSkfK8ZnMxkjRLgPbxrGZKr2wQzixYMa1S1SkaJAUx5dFi4yHu6t",
  "key8": "34qF5z5HLG2TveYmkB8HztAEWDLrzRsqUhpLbYa9VSxrqqE7N3J3QKWfnqxjX6CgdUVmh4WbWB7BovsKzpmkmzvh",
  "key9": "4HcGeB9YG9yuoSxDz2ZMWU6ioYKJztLZC35AubM4moNcTau7TRd8LxsEFHddFYkRgkBipcQVoYWRS7eC2hAyza72",
  "key10": "HE6ShJzPp4hsF75YhYSF1K8d6H8Q9HVkfHvaQEdQkLeacZjaCrBfkT1CpPf7YxvEnu216RR61zKmP5MHN2C23Ky",
  "key11": "2UnaTM2GWfSFXdfRJEhifNvb9fPLCsY4s8X7KJNU2Es6HJydmqdLB2e2hrcGwHjHBPi1RFgRxcEpWqVh5cun4NsM",
  "key12": "5PkF1hNmSSPtr24SqX5z4kZBNnmzFp1SRwGQdwqYRSSossgird94k4PXuiRWd9a1dc9ud91HKjG9mSFcYtFqSfqS",
  "key13": "CPThZny2nSGEcyKaUuK3SBjnSryiYXTcS4e5dJPQodsTP9q3ycaVopPaZMYBR7biBdKmrzBE5y4Mn2ZqRYCztYy",
  "key14": "UDDnj9KNWdZvDvTK1CR6B1EwE8332Un2qvSXgsimEUu52Nt3SfjVfSb1nDvLkrvJ6udiHgLw1LobnmEpK3GJnaA",
  "key15": "SBDeMUgnh5kwnKm8N8WdSrELdXdYFydsQUJDCQ5N4MtNnymEaHnBzs2NPQ69pYFEjPDxp1HjhT1oqty2rpwQwAx",
  "key16": "5SkoJQf3CZ67okk8tvHvQHZJRLobYHAAeaHXT855xnm9UznRRAgYteHRByk4miQ2o45QYaiXEy1YhdHpJvkwEQwK",
  "key17": "53Uyx2jv7wvfQ4W5vfSguvPXcQzbNAufpAjxrw9FQ8JK5VH5cnZLvX7KvGZmZoExBYKqBBm8g8npDTqC45MzHni9",
  "key18": "3akrbcSoRkLTWGXPn9ffVZ6aGHJ93uXbiNpNVjtKFPE6ZCXC8DHT1z5X4AtQpYXVsNGnXHSYn4T8UQ9LkQvQMQTt",
  "key19": "4DrTw45EdYwAJ9Ae8WtV3561a5a6z4AwyheoZYUMhgbCiXPzJt9pzLt74tfyHPhn4mHN1UmWsjiSAadz9YSKPLWf",
  "key20": "3X42fXTpByooaKCwmw4cmnk9Qd94JhLNaUfWtRT1T6FmjVex7p3BL5nb3AyyknX9noAJmqKfAGG3gFUWRjvyVgR4",
  "key21": "4jFtMDYejFS3bdVGCeN25RYDoDn8UCrDtUobSo3BKNq3sZTbGism1jpeiAA1zEzxVsB92JDQroe86P26uAoLZzEv",
  "key22": "4wysRmcKCTD9tX5msixMurpLxWyB2skwUtjSWNXX4ECMsSoTVkddGMCT5dYYRwXaUAU4jAc5e4X1D4G2kNsSSAdZ",
  "key23": "4x8audgDKtwwwhzN6Fm3CUVXadigZxNayKQnMNEjoznVUkSVzsbvX3AiaTt9ZL7MkvKeCNgcG7XiuC4THfZehBtX",
  "key24": "5psL88G4Pho46uVUAxnVguwnfN4L5sAo3cy97ZDNboGT6mnk4KD1gdcjLvY1xrq3HZavPR2QjT9n9N2Rg5CP1Fdu",
  "key25": "5Q5SzPKCd8yT9aD4h5WDx2RHxCzPQ2M6NQiexxmR5WiSqRw6WZowgv8HB8AoFKYvbFzSwtbAqVjvU6bRMooYovuS",
  "key26": "4B6cfXcsTzagH8WbfbonNGRnWAvVUGmUunYtk4uAQr1urJxHZNFEXnU2QzSPQG6qVn4PkDbC2T6cQy6zbYVourE7",
  "key27": "LMYPbm5kGBtgtFG5pTa1T39PHx5nLHe6CyTtAZeV6fuegdL1w5bfqnTDvbYxHh7emTbmVX68gL9JfLQdBzfenhd",
  "key28": "3sNqX3LE2L13ddd5R4cgh3zKSJ9AzDaiJrEtTPD6eqNBT7s9FYp8exRBz7nUUDM3rGGdKUXhDmwvGUYH3ndeJqRc",
  "key29": "5bM3u3H9tRXhzHb7cf2WNiGJgk7VrS6ejzJoLUPMFUEdXorkvpjCsgLLnGcYdBjNUJXjswY54pZEPdKRvk4L6mS5",
  "key30": "4pSDbjt1AW2KrRfBaGuK2Mdg8qJYLCLbcsDJ8Uany48AXjE5YALctBxaXbge9autL1zcUKhP1oN655yxXgAUCUKs",
  "key31": "43YnCuL2Cvnwv9d6isFhLmwNVuNs9arvoYpVLcHBUzyhnAFo2dLUDWtdREWsTKr7vkwgzQoSD5gfJMymqmRStxWC",
  "key32": "49uCcpkGw6X1xN6BaZ5owWWZQPaGgxLtT8yrF81169RQftvppGK6WtSuZzcfVihSh1aRX5yZkzxCevpAGvE5sCHZ",
  "key33": "5ScsPgbWW9WWnbz1bEBSKDVeVk2miwFNC3q9Mt47YKp4TEr9WkTGPqvxHdynuArq9ztKfPfxHuZQbtVAYxXXMHw9",
  "key34": "3oNjTLd6dBbtooEzLGr8VxYSbH8WV2RjNCegxUNJSWVZ8e3fQWsrKa2xfN36F34Ey2uWvnbq7eDo7RcAqkMh3SJJ"
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
