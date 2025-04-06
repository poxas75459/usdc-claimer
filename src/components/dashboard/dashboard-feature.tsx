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
    "5Dg74xu74MbTk7i9xFQwuDZKVax95zkJ9EvD3re9viUkf2ZEPLrnr3wM5CfPCRkPrjrPVKPTXrroBytcGBy8GjFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SBne8GQ6XFWu2pmGGTcGXsTSr17hDkQrA5CVGTqMDzSjs9bUybfBZkmN98uDZtgoyecsuSGpF5gWvBnc3eahYV1",
  "key1": "5MKB1k3Kx7kbpFsQ197NdVYLoLuUgigZSXkhLbYjv6NE4PfFLdAY9Q2oNDpSENda2oEQ1kLRUJWMsDMGF69qvPcR",
  "key2": "3HCLpGcS6hzeyn7ezNzvgnVkPELAmxQkYFCjGo4zuf4xS5K2TEJ2DgK7i4DPn9U7uZDwZ7drXYNzeAaNtejUBqrH",
  "key3": "ieWLYcx4NfnDhFJ66HRyV3uCQxhJp1BF3PL6LAHmg2jfmBn1xhqGXUrCDXWEJDsAWDpzYPdK6j8rLD3q9XhqBJm",
  "key4": "3cG1Auz7W3tzVGjF1dXPWEoA2TbrSFoTA9G435aPxMrF2iyb1izbbxHD8PnrvsbcYVdLxvExm55uWxxYeyFkwHMN",
  "key5": "45QqJQoURXgqHmEDxRnBUbhQjCFYPWQUpFFyNZ1htsz8FjrToXsm11SGJYAnjLs7PJnbJcpReM8CtQTF9SFUhLmF",
  "key6": "5NWgSy4cB5do9C8sDrBwfePpMwTAZqSjG6TsFGK9conWbN5a5VuBgKCgGdqyFvAEwqyDAM7KDC213jdBn4Zu6TCp",
  "key7": "21LfPrnM5zcfLhUnYmpL72ZaXaEXyR1ohHmc1sNt4yYc4yPwZuJBm2DNYYaE6C1C9Tj29cmiBE5kG4drp59aaCc9",
  "key8": "3JZEwJBeb3LPuuRiwASe49F9mxCs8yJnT8hAAJu4MjnY6YeRBX1eQ45QSozn7sXHaUyu5CC6WLyUGNGZL67GJoKW",
  "key9": "3oM69sLuMnPD1kRZT6DLmC2HC24tbrHivZBoBhyJnhwFqhzmeBkSzJkhNRTzyLyx9GmF1vN5UWSGee2FpLfuCk6t",
  "key10": "5xunwmMrrc1gjqi6yvHcBep1DCdQridmdULKB2u1r9FhRDkXLDTVFWxmN3aodeqAtBKNoUu8A2NRFTA2R6eiFcZ2",
  "key11": "4sjM3BTJ2wXYqpXJM9xM3onS2QbtkRTBUvL4j8Gn3Uj92sJgdoi68KnjTbgWGioKeUdcU7ojkC9BhdVm6NPjMgz",
  "key12": "5aQcYeYYKabs8PYb7AxJjfXPDFQFs5ZiiaNZpcYMAPLZLSm68FyKMFJPd1hmno6PwzAzRjvHWbaNk8JEzuBCAcWV",
  "key13": "2s2UqEn1JnqHNZA3GYk61YtD6qJ9Kzk1oBADshtPkBd3kSJNCtMsgdifpzynqdcxUWfJjgDTFsXdZ2Uk1T3qkRXR",
  "key14": "5VZJikxMErWQHUzmvnFxwynGUjHdoGN4YCGHPLtvjGjEBvo4Q9jiKJQsBwNonQDBxtAUKKkag52YGWUNdeXSXKgJ",
  "key15": "4mFRnoZbn11FeWykoHR3NGm7z46PXt6GwSphm5tV8JkgJ6my3K9H7QhLTwNEZ3tU7JZgXJVfMaEPwUtH6zoArLTK",
  "key16": "5UCkfMPe5JFR6upPAgP2Fj4XjQ4iYeVaoXsVuU1pNEYg8K8Kf8UZxjgxYCaAz2mQaBEm7DTrm9PDYrXjhn52Gfkk",
  "key17": "39p6rEzmVpGg7iqTePbapgwAVrHp9D9xwzr6qApmhu1w7EtX2DwmW5W1HwG3BTPeZzMUz5v5z9cqC324Fmqpbdcs",
  "key18": "5nZA7XktAoxwjQEUrDT2DGzNLp8cwamSHzwPQLnoG3D3whg9Jz3VuYejSLMPhcJpSVBBoU8ep21dvygKD1hnF7jb",
  "key19": "2xVpaipXqqRC2Kim8HD74kMsxe2Geirjzit4Kg2SSSXakjMgSqKMkhoc7cPuShw4M6WRHVxAHrBXtyoeoyrVeA5t",
  "key20": "4U12MHEY51SA4BaFLRftk1oBY2vg1BNdHGVfX8SrQLcHpsYhjTCWWTenAzZUB72PEtQ4S2zMDDb2mU53g5QK4pwH",
  "key21": "3Yh4cJvLgc7G6WSeY5wwZaSf6pciCL6abzVS5T4JGQsTqh8bfod2y73wy5J2kGc5HUjcyR5pPNmQpMXspk1LrqiH",
  "key22": "3GLH79uohuqUZKBMccBWTviKAgpPZGrrgtdST1rT7hSszFrgRSKzR5JQBMZJB6WhQuLTQ19NyANbP8zaNLrk78cP",
  "key23": "63FPZWGxzQiBrFbV9psriBp2qMQX5C56QE43XLBcsv9nAAGpvmuABpsJoMQM4x3wtnVFihU5VFirKcvK71dbsYai",
  "key24": "45LZgK6tLmv4sQnSkcMhjEjYtHw583QEqiFRaSVaBtoND5dbxL8Eg2Xow64mkevGu599EFGvbne8Y1F7YuVQWNbo",
  "key25": "32k6SNTpeCXSngNm6YvfixALv5esbqzgFzYy6GUin75pgoZ8wHbpj9SPso7pZJSqcdsGxPUQbiLTg5ms5P5uavYW",
  "key26": "qU7dbS6g49rg6HeJW3fMdzqvf3qTud8B9xnjLtqe1GuspSBtn3EBAnue1q4LyLfGa9draG7wfFwH1ezwtyacFrM",
  "key27": "3NU21v87hQmDccMcR9EuPc4jXLCpt4SBzcEC17rxcuLKq9dDcr7TDr2ieVquJCikmb4p9xdsDpbhRfRLJ6SK2heG",
  "key28": "3T5hLLrMQmqgFjWQZ2LSXnieyQf2NisyJXeczizNfekrz7i5GN3KAKNQpcnGwsawzrYRAxbgP2ScfnVbSqqDDLXj",
  "key29": "25Xeaus12WhdQgREkjdZDYnQmSkcevXeFazCw2Dvuo45STmABvgshk2Y3MyDgcnrkATyVTbe8QwjFw2AbLKVj1CY",
  "key30": "3esdKdErLePeQmE9XQ7YRTzcuHmmvR2mYshB5qF8cayby1g5B9tpv7jKZc9hsokE6ZsJFoQasTz8J1MQco1bvckn",
  "key31": "3XXYx1c87tK36NeBp4PACZgWKSgbjTrBx3hjJq39VJSjb7LW9fvf5MKhcYUnGyup8nW9hPefQ1A7M1deV5fd2F4C",
  "key32": "4dRURpbVtAUZCCywQn6JUWabCzPh3CHe4waNXhSJXzqgNasqzFQbUCbYMvYQ9dkV6dp8UM6jS6veaKTqtPqRCXbZ",
  "key33": "2NL5TrSJSxqmaduWtjAh9AQFm1q6nzVDLV166NCjBhrjz45oTVjQ7tVWnAKUmuXsh5x7KYkMTghRNLyE73RphWCF",
  "key34": "gYDywC5ZyhzD2gp1mwt31pGpGqzYbJwADRZ7E9P1BxpeaSXFCcA1C9Rojdcm3tLVjBz2NfSCwtAhcNzDTQ8cqHF",
  "key35": "vb3sJGG5jU4Ghfjc8pa77vFHmwNGNF7jxU64sKEe8AL3bonnkxzu1zsgUN1kgM511yCWikVHiy5LpKedCMwLfNf",
  "key36": "3G1rzCjv3PZCsAN2Mp8rvR3dRVX7QG2gZotyZ1KEyUVScU5Mr7bnBQ3myWXiLq1H8MdWU14vL822c3SnpShnGVhz",
  "key37": "3uWGB6i5cVu65v1EABhrW3MVwLwQMUyCsVLHdwvtEbFNm5wdG7qtNg8h5F616gpEWyDbXZ8mNd7RxiutHjuoQRtr",
  "key38": "2DymSQ3kTck8CwwS6pJQm4PvYcoNEoG6Fj4Gx8TrgfCeJ2hZjBaaiKXTGRAfxqU5b6gNgDWXjtywVRMo1oxw5v5S",
  "key39": "4EMHGeFjVL2h9vQMfzJnqK9a14p25wr6ovd7fvqMXydsRU9UDFwtFxZSWJxx5Qjj2gZKEfgisejVa3GxkgLHH7ux",
  "key40": "47zu82AGU2y9b4xDDmv9Txa7w3ZxD3iUxNz9EZb68AYQe2LRzmVzeFLWWVK9mWDUFBB3ZKJymPdNmN7RwF88d3iz",
  "key41": "39LntmvKdbR5jdFvG5F1MtvGAUJJ1LhrtKHu3HdujAZ9ddXLdk1YBeYLa8KjFFKWmaPTtPMbMuNpdchauDDaeGrq",
  "key42": "MYmXLWbwZZ11TmjrbS7bCyjY2CRHQSCkjEVicHGZW7qiYtW6DAr2EiGJ65t9NpEPN6QzHJSjbUnrZ1CLpoaHfXE",
  "key43": "mgEwb5gffQP5mGEpWBzHqfAriBNFuRCz6DDtyzGE8aLy662tByM3NLPAeph1peAMCyJHcXDitxcCtkK8tZmQ5Cu",
  "key44": "53yq22oxu5EVRfRYSWfySeChnBDEfmN4fLHqirQLXuZ5kDb1MFW9WKm85MwSDn7D2qU8hDUXPdZb2r5WnCzV5doJ",
  "key45": "2WhZB8s3cVB9SxwFhz9HMAEN8vvXhAuiHtrQATnFLbcUZmrDt1bSSv3xtrNoB6zBArQZ7AYCGYC1sbUZpdQ6pdGq",
  "key46": "4iJDSC6gax6pBaNDuavP7QJTGfsaUKxVSik7VDcc4gbHbvkvGpsxfhXRhKeTrLa7dRhC71uDqk8bNWo2Z1XzHmpe"
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
