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
    "5Eep3yeZudP7uzeKyW5CYhh44Kpu4Ghkv1MDfWrBwVS1MCXrD4uQVw5nRzDKJFr1sipyx5AcyszmBpAMYP7FtQ2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63iGaPvvdv9jKfhwMsFrjEwoF8FeWCf6LYjHUwAD2c9Enyr5Eu2VHbBfiergG4EurJsQ2jVbUmfYJAS4pwKz2Y6T",
  "key1": "48N2no7GekGb9nUMX3o5JzQBKgonEstzxVeCLEeceitoKprZS1Ng64kXb8v2qB6d18HvPgBuYA8E5yFtGNEpEq1c",
  "key2": "5NDWrq4tSRuboavTmp1F1hnKvGWTvVrFgYmLuqwgFjsuXbXZcU6J2ucoe7H8jc6CtzxoTGe4bC8MKZ8o6MEhr7kb",
  "key3": "5ZCN2NRUYwB6cQRMacvSdLxQ84PSRcZAXQYBEqCD6WHi49wtb87JJGW81PdBo5fSJc8MsW99pB56aU4iXnYQzg3F",
  "key4": "38ds9fc5SkLD1J8wDRVyBiTQ8VpmmzrtrV6GE9rexoHUhGMmpjfXkC75qaM4ND4FFgpoTxrU4GkE6X9fxoeWE9oT",
  "key5": "4Yc9xJowZYD8KHarALSsPo1nsWzxoSDnEar6v3D3BQ6iYXMqtW7RQoEeBtwjWJJa578vYq5co4UoAVVp1Aaoaups",
  "key6": "5GCU8StgP4psWygtFnihAsUYt2qGM93pr9Pz51LNrDmqEufiXBpwcreqRqAe3T8Moa8rNsUVfcqFfFUs53HiTXcG",
  "key7": "aUjwDLY9BeWrh9nKTHKxXfmQJT9rMiAMMX9aMbBThXJvpybyD2DCpZg64BhefzkvkhhfPDs2eanDFSWgj5MJySP",
  "key8": "3ArwMvXMYRcbYQbCnj1WKzdzzxYUQ4FFYdjdhy38dBUjTHpYGP4CQGd4krJE2GawnMUCQcpTFBf2mxaxZYFAPiJi",
  "key9": "4vt6TK6hJ4gUX63VzwSudraxUKtKYiueAZDmpNHcS4EKDHavkjMX17Fh1ajc8n54q6jWrXWtDBBfrb23Q1TWWdax",
  "key10": "azK3Tso155NmzZBHpUNUtCcbBUVoLrAkqsrtwbLxKxhWu7x5WTHZZBXpepochpD8BKzbLNU7v6bKBgYVxFUf36E",
  "key11": "36BwUCmrJdP8eMVYCpmPAbGq4cCReyY7gWQyDZqUCfVnmAPNS3WjFYjftHKsQg4zDVZ4F536ZvV3LtFs5kf4XM8M",
  "key12": "4csosnCNTxZHsoToy2hoQbhYMUP7BL4VEoj8dcfJnjmdrxGeoc4XvN1EErqZeSmcJchp1729XQqcF7ZG2q4ZSxBu",
  "key13": "5hhsKfhgpa3b8tYUam1BPmn76q2Npy6ukQ6ZMYtHxt6cagXVRsFEmpWUokQVtYk21e5hPdtJFGf55n5iXZgbGRUS",
  "key14": "zZnfJcazvh2gEgKos6VN2p5L4sxSStMXkpyTUB88ocJzyLEkGVfM1s6dsEwWsrMsMGqsUQvaMQk4VZH8DT1GcVt",
  "key15": "4nTF2gC7XWimxJAop5oQmnVMLfdMFjABUp1Xfek6QA5iDzjziQm8PPkmRnK8AJ3u34CMP1QoXRvVNan9qrZQRzQc",
  "key16": "2kzkwEqZFE1u4W6vRfQKcWKLGRqWhuzn3yXVcmSKghSP9J9fu38M9vx6EJjZgfCW2zSQRUKwHNZTMMiSsgXkkHKZ",
  "key17": "5RejYJ67GFvkJNxyn137s86jEUHZktmPV4rKnW88gDxkKvnhyGfiVNt7GKWDzAHiM6YLuiqXBjtCNvN6BsPFkPgG",
  "key18": "3pobWVZ7HYThpS6ZRxPmAxnCZzk7uJqPjrDyrJ6TpTZLpKK4McPeL2wwAaELyTEymNBnHQDAjka8fBPxJcV7wwuX",
  "key19": "2K4mPrTycoBe71TvVLskzM3ZnHsHY5VpbyZrDzDJ5u8HmzQP1H2pgRrzubYuZCKwdhGBY6ow27p2HoYPcEwPpmXe",
  "key20": "Ei4EB3ZjjL2meJPtsh8tBceYfoe4FyEF1m6mKAVLJsBowkjKKTm5CtLsvY2g4jVoicJ9UikcFzZnyRNtsYUW2vW",
  "key21": "5CZc6k5rxTqyPmK2eVwPNJyKJmfK1dhPqYBbB6oTndCUEncWs9mbadsuQQpUtSGiXWowXoxrfuosvNzZmdjhkf6m",
  "key22": "3BisnCFEeFxMWS5iJPZHpahpKnGX5PUQgaGgJG5YS7uswfKKep2B2s3AjUmpa1Se9jdCTNGEwpjWC54ffFUxPF9o",
  "key23": "461aFfTGYSsxouGT8BSFsG8XZpn4bkWqTJhPFqbUwXMoF6hFJp8qbwDzjvcDv9rCSpbeDuNBASrhWQonqH1qZ5zW",
  "key24": "5RC7bb7zJcLq1ds25aSnSkgnz2ju3DLt3QHKmHbeTM8weMLUTyzfrAMdybBqaGZssKAZVgLz2KmuRyjeTQ8YM4C8",
  "key25": "VukK1TEVtzVeDCgTxkK12Mf56tAcLwf1mLJ8s2bFVjo9BRvuZjB89WRQ2J8GUH5v8QTmkK5AQZgVwfaemaQYAPM",
  "key26": "2TPwDDBoBXNYTgxXBx7iGNJbNVHzQsocLEuTVJtevVNixhFX6H92i2mTmCgWshzy57RPMDtK8Tkgb9XkXL8kQ7HE",
  "key27": "2coBX1qtzsoEtffjcnS5pFJ9k7hfQ7LDVmNQUgWnBvvP7H2qZ7cY9CHepk796Ks2PLQs7xwmuseLBuaPjCTLnq5U",
  "key28": "27h9H27ZL7SdjfZDPuDu4SyNovuipwRaqDwKUQFNXPLQxuDLNFQqaccSTPr81UJSNPu4uswRv7nxYdynkZo41xbR",
  "key29": "3wnq5Cud41Gc2ErBV57LNQQmzfqfq3D597D8Cxnb1mRZ2ytqS9iQP1k3jbXTeDwXiEyN8U1W37N8joaHdE4PzbaY",
  "key30": "5cbbYcPN25JTbxg9o495Ys1c2xsVTtPoYDJkVXA24B9H2MekRWHRswZP7NLrNuzWrDSP5RDn5RSM6ssrhaEYwrX8",
  "key31": "8yR7b8gthNKgyHVUzFRDMhckJMyHTD72sAj8rcpsRYJrAJ5d4bjJrKzcSfpgszQV3txiEYGFbYG6N7nWSt1zapB",
  "key32": "2mgo8FAXFUrZHNmyCyVEMCyKaGpf2Xx1q3Aa1HNXvkAr47g4SdTUSaLUpi4HfboAZakfaCRp8SCYqhJ76AEaGEtd",
  "key33": "3Ut8MTFbrruPrx7cVsXBGuUiK85ZrtEX4aWF4vThgU1Mg5gLmv5ABF6Pqp52BvTMDiLgrMBf8ZxcYyKSzxGXycD6",
  "key34": "hJKwogCkNoWYiME5JDYfDmed5fTytNG7phSzxcAMSbnxmjukrizfFTH2Hqd52V7nxSbfJ7xKZ2WWdrXDf4ZfLEk",
  "key35": "ZsfNUYgJLHJYVeWxXNaK5fWUr6NnkPunTpw5MhR4wV6JRBctWjFW3sJVShuSzMHezQdauSAUZcP7w1pudoepN48",
  "key36": "wRKTZSxjAGJ6wwhxHXVNYVy2pRBavVkXxpUeMyqwhkykb3vmfvTc9Pdz8LmXikh38suWwVxtmhGkvMJg9KhJWp5",
  "key37": "3VKdb5VpDknEiPBhWDrqkRonUeDZ68fpjshBGEAwj37AADKbZUsDg6nQkaDz8kpH5BSAkffvnxghKaAEDDFmizJD",
  "key38": "3fpo6HavJQ8jXa5LV7ZThm9qFzH13Y9QfL6cbZCxKLbv4anEo1H8wM2D9E81m12q8yuLUcjJoNMHGYNgENxLHXe2",
  "key39": "3eXRji6qAzjQU3UFMPfuR8YLWDJwW2GfNAaWEmNcY9DpzYQEi7PVb4UEdM2hsyu8H18Q2PBxqJCywWmmxaSx7hUT",
  "key40": "29YRpjYRwkzswZbYfn7ZM1pkKkWgmrcEA47yttqx3Y8Bfnp4XM4imzyc2MBZADnAsKnWArS5btLHKsF7n4y8i3Sc",
  "key41": "W7i1qeU8XpgYxRYJrcTSJYWVJm8xboaRxUNLthvtYiDGphvec46RX3ehsyPpr2sxiBed2bZtgpVSATuuFiRo5Hb",
  "key42": "3e1t9TfoMkUzdgvofWKGaLqPoa7aAz7j2e929e1NSQFPZYdXYHkfyBQ8ACwwiuML5agfEBbFszAgsopQ9X5h9P2c",
  "key43": "b7xY1oZCjqMr7Z5LqH3bVwgFv7E2P6q4HKxqFT3h9ipewkXyvE5cdE4LXWtCggjfUdfJo18BgFppUStnwakJwcD",
  "key44": "3csWqneU92MjXbp4yK37t84M3S4mp4TZkJ2fBE7nUS9CteqRcAQ9ZX82ZGPVVi8UzwPy2HBWFjh8u2nKDpsjYC5",
  "key45": "35BPatFcvRp4GZt35cBr6zdz7yurg8mbB5wmSEY9TYcARFF3sn7w8cCR9D7KC6oZ9paPxTBy4SU1jt3S5oGBxAWj",
  "key46": "1GH5Bx7YTGHGVRKQu3FyBdYuRH2TtjyLSFE2QfDMskvHSnaNYohVzSDPskPVWaauVL7gPqe26X4SWH7yEPR21Ds"
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
