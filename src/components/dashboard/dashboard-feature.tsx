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
    "Fu3Bf8hSx5jmytxhquXr62WZAR3XD2wH3A9Un46Pd56kpUbXrrcMUjxxMaYRxTQ5G6MiApzsRbeD9PiEgyBtMXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EL3y3b5sw3PSVB9abLBtbyyU1UrQSdroNXqR45cehX9nzLuYkFWQvJXcWiKqEoG5wQ3TSb8Z3CNmjRtPSg6HRqd",
  "key1": "HPiCbDBqFUtPMiRiqCB61CkgPTDhidPjRXJ4z11gsD2u59oZ5QSNMFXssQhB9TGi7b7rC5ouvc16fGo7Xz1eRfZ",
  "key2": "2uabjUT7Sn81d5J1mZ6LCFgSzgk7Bp3e745AYuDy1uBDxHU2k9mg26GjGsELUbbHYWyjXNSLqT3KZE7pqk5KA6gk",
  "key3": "2TnBZybiY6bkwsoxprnBQ4BybsgKskYcGpaCXaZWN4ELcJZaifcrnqFaUZsey5T5iMPcZQwWeDzSWyqTGBX8Uww4",
  "key4": "5To9cwZCDQRNckkNbLHq7NDLAawQxapx56npqfKWpH1AxaJvSX7RokvxqEtkP7kaBXBVTUxz1ppBvH84fzAxRHLw",
  "key5": "246UZokSFTjqruoxXTtDTMU96oasGvfm8gNowPoBa9J1eHascxrDc4sbeewYqddBq9hti2hBPFs7eKcTTV2TfYJn",
  "key6": "3CCFhcGHQyvARVTwYyCAm6naGhv1QedwtVrTQed75ogB4xie6Lbi31T3ur7JMc3G2y1TPQaZ8Ct9EMmHyUJNoehG",
  "key7": "5CUnjVRj3rBHDQawRZeZUQ5srXQ85RQWrx6L4aEgRgguhM9SRD4kjQyx6GFwrVMb5EUmtAu2nbvN4w5cLXPFesbv",
  "key8": "2xaMVtywkUanyMixn8TeUUCiDeVM1obT1AMbE8p63jsDSozPPt74sWkg4Pqqx4eG7Ye97d7aD51bi7btQ9Cio3Wg",
  "key9": "5kfrvz7EC3B7ac5bFaGW4VAUHx8MwgNqbvKBy4nQM8H61ANtuiUMYwzKvJunm7G7dK4DA1dHypFMXNgQRGbd6QGB",
  "key10": "5P1teDzMvRwJPdsvCfdyThGUn8VgwD8HcCZ2SKa9rVRBY1iEtYb16yoTjEFfU2DhpveBHadZPhAjpfPitLdvcq2Y",
  "key11": "4ukLm2y4HjY7CekAsYZLWf6NCmJ6WJphfr7hqSM2riKTg3DrZth1dCMHYZVoBDkDJKWcfJc4vKJjtmnZQ2KtzKrv",
  "key12": "3VCMBtr8gRWXBm3FKuPkJhEKEDvJ54MsH2SiZMxeN5vhDHFQkZBr2LiCBZuXuApJQetSD17Ur1Mv6kpCU6gzJxpu",
  "key13": "2r5N6jTmVjSo8tzVepAWQADtTB7sRr82svXEkDsRq3qFZYHmmwLMsQpugQYteJ1rNNotfGuPPzPqcukw7bNMjEkP",
  "key14": "BwYzgdaqq7H5NEWMzGndGiAaM1pAMZ35whP9Lp8VYrjRnyikTpP2BYdVvAAdjs5deZSjQ5uu6NWYJj9tmD45uGH",
  "key15": "27zwabouPvf7DzSfjUFz3mMoza2Et5AaRK8QgoMpcSKJoSxzCV1dPMjEhyyfMrzdFqSocq4kbrsYWj5BsYuMTH9h",
  "key16": "4CfmrWCsWJMJCFHNCCr61hEAn8uKXQznvTWvMybW6H2FT7bWT3eQAb4QikzYpTmuYqDmPZRkkmWc4qRHPLZbnkje",
  "key17": "4a6m8iNwV1jvEHPrWZQBwMQC7qD9zH9tmNFyaKjgoH5ovEkFGRkEBGJSkpSeqDZ6XjmkZVc9VXsKA76DZ9s45g6N",
  "key18": "2FQdxfUw28gmjD2CzAjw4wdTjuRfabmuqcLXHJV4SR9eBgPBaRAQ8fFoDwjpAzCg37JoZu2SPFNUxarjD2L6zC6L",
  "key19": "ca8LYbzmAmS8xcnZrQWXH5kHGxc3HCop4rbqVKzS6814Ki94Us1FqsU7NpPTBEimv1WRzQg91iFcn2DkvwvHhdz",
  "key20": "45g1EwHGzbXaQTyea8RTEH5Me4MpqEzc1Z2jBqzfxgsP1fNKTATrC8njFVnJuq12YTsP6nUycKaVrX3y89afehso",
  "key21": "5YmYAc21ebiaY3XytjFi9E8fRCjGA4y2SgdvVG9YRaz8bZ18kqE847GXteFvZajEaEZSZLGH8N2sRyj1dRJoRzDb",
  "key22": "4ZG29UGXcxKzZ7mLkB6nKvXtMJV1zT5Rni38tTAiLNVVmHGC9XKQGJ7PvyXyhUfLwADk3KM6ZzWUMzwLtTzMe5MJ",
  "key23": "4KSdVxe8PpbtXXVtw9hNjiodyFxKZ9Py44LVb7qGqgWBHMh7SdJnQUEf5e3QtPRQPy6scX5GsETMTY9DqevSt3X9",
  "key24": "5AKzT4aRMh2UyfnbqTqr9YqDCSogA1RkQo9TVpPeMXQhQ3vSXA1MUZM7rxfWXzDUrPV5fgjJUtjWH9jiq4SzdD6b",
  "key25": "yNqwxNH2qgXtdRE9P2M862WpumCV5dn7qrjN7nGCWk2CsYe4EmSnqkBvgKs5SKfb17toFV8BK9tdFZhmpW2ihrW",
  "key26": "CbefmVhb2TwotLU3pdsKJcJvATQsBtBuQCRq9wRtrgaFh8qXZddJPVUVgkpY11rwmpgqLghwW4q1HJZCSEJS3t6",
  "key27": "3YBALE9pUw32W1B5Cc9eDBDbpGCivukmfPp6dHZKdGtmEjRmRVoDJ7E1suKTKGxKEk1CMy8ct8c1AwpUSUurMxir",
  "key28": "3fUninoHHmTYzqp7LisQ5F13poAL2aK1U7qYzbLUUAiY5yPLiUKtmBX1z8VUZ1tUWMe7NXCwLUBNLz5FcfoJ9hvS",
  "key29": "4iPmumw9mgsdgQp7d2Kua3NWByY9RFP1CfstoNfJYEJXiCHApXZXBjtic1T6WjTQU1C7RVpZxLY9PQF98sxNh9KH",
  "key30": "4G3QzdbjdRQ2Yrd9WYpkxzKgRiWA6xRg1HEiVi3Vg2GGmJyViwDULWen34fjYbVNpvidnVKZofBdBsExyn2zPfHj",
  "key31": "5dTgjeoKasebXh9bqv1A9q1R4bGHyVGDHPHMS8Mo89XPnEkQaXDYEQ3H9LtoeXjadxrKxtvCtLWGP8RA1rRQWvHk",
  "key32": "586uDFxgvQhHjfG5XuVKSnVbQi1MMfa6DGEbDHjjvgo5DTVBKoWcgyhcB6BfYMBHKQyQfaKnf8y7FmLsVCWBYXNp",
  "key33": "22Pvu7gYcTbpXbu2sm88MNEg4KkDnMpdciTZNEFGSjbszqYkij6NE1wipXiBQVy6uEoAw5BLndpkkUxtKoGo5Dru",
  "key34": "3dAHnRU5RDf4PUxsDarvJ8eEfK45NRBBcxtbvBkQp3N6L2D3UGk6hzVcpSAefXYefu5QxDLjMXJKH5Wie5cyMrF5",
  "key35": "3uxZQvUfxLDCxuwoqa7EAoNFgZ18sgx7FUPXJXVdsiPPpcY6sE7NZW8HvFys8Zr4kGTuweSLPzhFxCgKL7xEsyPN",
  "key36": "3vr3DJyoWPHds9unn8YYETNuGvgx2XA6VJvP6dUsoJ1gNPH5CzGpYebbui7wz8heZ7UmGssBcHKMmHH1A6wL9LNS",
  "key37": "3d7JsyGdLjX2uUcXaBEYrHLUzptRtknkzW3GcqRKnGSYMk6hZG1D8aoZGMhLUnnJx5yhpSQLa9xhhcfKuv9WEvou",
  "key38": "jDfYRA98ocjd3WHeGCR2Ccq4xqmppVjQiXV3sHxtDcG8pkUHzCmXKXNyZcczT3uSANmRWpTgqVTs8Y9AjLMXZmc"
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
