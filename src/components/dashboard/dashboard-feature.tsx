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
    "3wrCCxkM2r6XvZoNut9j4wt77LXgPLNQLTRKsqyePbzhKMhtQvoTcBkX2TSh52B913Xsd5MLpLG7yiZeK8Pt3iYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mbuza8itqSXmPjtvu2oji6w2zrz8rQ86rVKh3LvjYCf46aqspTDihHvjZ5KXxVBg4Ww8u2ttzuc1ndt2RpzDtiF",
  "key1": "4bSVNrPjKoQuTbDtAZz6wQyB1LRcsQNhYd9QBHB2StCc7EPTun3kyKGb7P4FFcbs6vGwFVsKhPiQ2fFNWhdBTC6P",
  "key2": "4dJFFL3knUsnR3ak8tVHdpCVdJw5H5Vich1ZhHGafaofTu9Z85bFjiAw2gvM1Yt6YA28rk1AntbDeGZdMamKJ3zR",
  "key3": "42hfkKLkQzQoTNcCPxNSFzDzDjdgYky8NFxW4B28Ku8u8Ar8GpDXKGnPZjmYbPS55PGf3LBEs8kwtS5a87MwtVLh",
  "key4": "5igUsT7vmSgbPPQ4ATLT9c93BD1e7VryX3PcfXyCSvb4QZTMou5AwojqBoQjBzf1an2w3rw5LfV4C6Q6KTm82iwb",
  "key5": "3Uvaw9Z24YWCUUB4hTajipknXQN9t6vTjJBZskyjDwFEipe9Ak9z7o1wVhw7y7H6HHXrxbMFCbXQFQTN4wqHL6dG",
  "key6": "4f2KMZ2aGtYKUjX8mJTCTwsEh67Ds8ytV3Y7QjNfMdu3kUqYYZWmWwy3XxhbdHqu3iAAJFrgSWbhFgSBrAJVeMHR",
  "key7": "WvxjH26SHEnG44HMyHT3w3AAfgSC4Poban2h6uBwuApz8HzVpJViPSNJ44Aiqky6tDnDqtiR5nRQZYbyF5ELJJY",
  "key8": "5zVwamKqZNfWxq1k51Lz6mVZH3QMbAtMPb12EcFqEnLgQs6TGHtC1The18bxiCbuQEfcRSkdWa41PiZvCKiT1CPg",
  "key9": "5Ao4SDtUDv55PgzUo2iCgyTMeV8q4d4FmFtmmwbPhLyryzGBZn1Eibo9Tq9W9tATKEWGrgNaM2DSDbUumkw8YE6m",
  "key10": "SVRY1xRVypq6Ts93hVCK7DvzJeY7edta8zirTAwDhbCuMi8HaRQGDY72KsyuGBSedH1b3kZQxkYQTYSKq5HDJVw",
  "key11": "Qnm2heCtarcqahG1X24T1wXP5ytgitQQk3o2528efJZAZJ4nQSRcC1BBjN1k5ytDks3cGmVRJY2pdm7UU6ujBPd",
  "key12": "4cePgTCYhWFGzZbYbDEjWkhu24L6NRRqaTZJi48x7pGb1Ankv1YYnxL3zjpi3d68zrYV256YF2ikmj6JfwtYWpbg",
  "key13": "53eUxnb2XeLNJNySA6fyYL7QbvufB7YQeWfnVuqsrAVVqg9p5CcuhX3wG612dcTh3U7FvfnfrErHFQPSY9yVgR3w",
  "key14": "4keR1JAG9DmKJmsAdywDDg6EnFYJubtsiZ4bKH2ZmbBz7DuBcotX1Yxnb3mnCTZfoGgN2ZmKoWvQmCMDcqJmUEUK",
  "key15": "2Tc73DJXEeA5azqTJ1K6fRDfugJv6qcJT8UvTwBnFnCVgJU6tk5jWQ53Wsx8vSRXV2piHuDVYQXufUse3jUQCe1P",
  "key16": "5bTFyjmjs7Q2WXD9Bd5UT4GXZYSZ6Q1YkPvMFHNGkKTL8kFWC9MgrBa9cMXwv33U1q4kE1KnyStG4bvMYNv68kDg",
  "key17": "HALBtYJ4tJZggWavah9dbWB9VFCdfPXAjBeiDLi5wCwTDgyk76dkJW4HBK5abbNXvKW5JTtYtG4QxR8qRy1KNHB",
  "key18": "yjCvVAyrH5vwWGjEYk2ta1D1XinA8ddX8C3PJZpaw4atXRH5EmMo13wQZJTopYBD55p9S4TJtmaomFS56cw6xbL",
  "key19": "3TCYRQTr16E2PE8pv9oLDYtZXDbfwqLkJbQ246gp5L3NsA9vfzQap2678UU5VCfwaCnVtW69uc2s2cSYhLW2epLs",
  "key20": "477Fb4VFa7cP98tcR1pDAoW7bsVjZZLYZgVFZ9GsbUhPocGjrYsWYi8KmnsRcTEVW5asQpTCWC34qQyZ9FkBY1uF",
  "key21": "4vo4SBmYcJHWzRB3XiuQpPJJ875oKdGBYkbAqXBXjuL4qJBrTX5zQgZ3qjhMUaXF8j5nCXo5NH4qGgbioQorWnqV",
  "key22": "hbpxJoRebZnwQxfwcYi3btAPhJAJSf7suRVbsZHNfJYq5TdvvaDxiBvJ1q2zMKguKYRHcFMpaNjHGbGddhfNNkR",
  "key23": "2AzJSTbWmsSMWL7eLn3tCuUCvhZGsVEMpLKsh4FwY5DU4KDcEzZ3phckDmvzRLoeqNGXcTbT9jkFDsqFSwqwWMiz",
  "key24": "3pCVDn3pBjoWjHcr6HTG4iU3EXh6FqfmgBP6kJotAgDoS4w7HCFY4TZg8u4N5GB8saFq6q4wga9d8x9CDn1acyCq",
  "key25": "3GBpcjYYPqCTqAmdwMTxWQMM6YVKoj4hWo75JqQX5YUymmeFisX4DW4Z14wQZvRr3R5dxGEkEcGm357wfamyZ3zz",
  "key26": "66oEYibaaGRjcd8ExmWCQM93p4Hp8fHaXW7xNreGP1L9bueZv8UFhJETZw7sUGHWpJA16FRMfgxSMBmt3ER5Xuid",
  "key27": "5MUiGcDaJrZALJ6b5ZYKe9CCbPdJbTt1i2GkhHsJwfH4sTGhsk2GWQEUxreMd8v1Lp5b7suXaS7yXWS79h7DxhWH",
  "key28": "5zmEnfYCcjGRnKrm1CEMtPKW17MH4sk5NWjmrg8kEWCNQpM2cFJfC5VXJDhaaiSMKBiYvVosvhhLYXBvx9V5HNVD",
  "key29": "5QZEVDtsM92YbgN4kj2wRBrVEFKvHx5up8x5Ervgt5xN7eh5z4QLoDrvw4d9HKNnsbRV4Rzf6Z2TL4FfMu5qBF2V",
  "key30": "2YtbmZFjK4FLkJebP18ue79eEt5ULUkdTHeUMngM2FnAWT5jWXxwGDWpYVCyqUD8qtNzT3PCRWcHULHanBGVFog5",
  "key31": "2KX5FTGtDTbHvifaUkAj9pYFkcZV7EEkiNjp1mXwnW3NgX9QhGD61ddhMHqe78HhPoDqCbKN1LDQduVpifuj72sh",
  "key32": "2rgpa8aCTnJbEVuuPNRsbBLFaK6E2GerRLYDe3LhwTk9c437G2X973NPS9DqnWobdxDAisNt7vMBgBAtQutLvGZZ",
  "key33": "RE91EG2N4QLBZ6hE4Aizx1WXoVVV63WVcxmRbg59FjBYHPkfcU4qEdeWtYep7rmKzFB94GkKkZWJ6nZ3So1s1q7",
  "key34": "46uB8NJzJUEfUm8gPoDkq4gND5QGpiygCsJS3viWhpLtMa2AskJ1KhPoHxpfQB4CJMj2kEaP5aT6FPuBjsud13nx",
  "key35": "5C3WqJmvPT9E4DATXTZ4TmCMtds3rLo2xW69yaTvm1XbsaYsH4GtLCpbQKQdZoUbaH92e1EdcHdyhErZEAxijaNA"
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
