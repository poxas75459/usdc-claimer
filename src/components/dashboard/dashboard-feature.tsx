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
    "37CHDDXbCpsMW2bxgf8GcfpCVnbuMFhyme1f8xWD8xdWuPQ3SStoapUeNgJtFd9FPmWVHdJe9ZZTuLuhpAWKBfWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EXMQWLjrWVifvQNZnp5x94LogbX3DvoYPcduDUep8x5Df9ztDVRms59qJ4zojV44NqgaMGXyezU67W9Vxi6G7AD",
  "key1": "JpeZMmBA8fJ1eopaKQQEJCbRbXq8s1HMZj7fUoPiTVqdHjDwBFMurfsy1xkdQn1hbF49kuQhsHXT6XK3fqdGLTR",
  "key2": "5JAY8EZceznrKbkJY4mxYyBdQ1916YiE2zcTvfwrNojie2rvKSDyLmJeHjod5rkVisjg2i8M7iN88mNN5e2Np6Jb",
  "key3": "2aETTDgXEGD3RaqLvVc2jTXG4pFi6GHkPZnCtQkgf7tN1g1yJ4gPn34hX8ZsDHYk3aHT92BA9qn69GKsgUaSA9wb",
  "key4": "45rFtjvdtLhpWDGsW1S8xFjSGhQcnwSLdMScrTqGMjshSFJ4D1qv5bjaMTz4YexaLLQZ8EWvcTfsJCpq1kLvQ2To",
  "key5": "WdqDbs7SHpGkGTUdWqZHWToJYDqrukBCH1X13rHgfbWo96GoaE7zqU2p3maGSfuAaHRH81oXZxqzfSk9x7dXQge",
  "key6": "rbHnVC2cPp83CMGUSeDFcJnRKEpYDNYzHjzskr6Q5yb8oSWN7MsabrJRQdGAjNwr9vW4HAx3Kq7bfEM4LCG1Xnx",
  "key7": "4TBHvbVWzuAzGk9BF3eLnN97xQbSykBGyN2NCNnFqD6EJGvukSNEY7jeQTid2q3kiLEqgffpwYSeboKCbyLCU5R2",
  "key8": "4a8c7dWJQqSSTKE5quAU3XPxRRMoEQtDjRV9vKKWLM9RWHSChK2pbBL7YF1KomYEJXFR1X1wBEt2GeL6dS5xxyMY",
  "key9": "4dB1JRVJJsLa9XKYoJ4vmtwfiQrY952xHhqtw8mPowtUbcH8y8gWLRpaFu7nGxtih1rprdxv4CyAFrfYbcmFGUix",
  "key10": "3Fp2JqEQvhWR77hTxf8V1Cbo2knNYqVFGGoy583fvBtXrDYMQ4jmXNmrk8PkePugsZfFnvnjozdjrfVNBRYc4ebu",
  "key11": "2PCJGHnFToEKCWZJSqRgAriUtrSQKaF6cqvPfYLF8ZdpW7cpPHfzm76DwKzRLMeZnThF3jC12MA1f5iwPCBNiPc5",
  "key12": "2JLzDruKxs47ugKvVirWGRAsRVXyqps6hkLgw2NnuUEEQ7TvePZUN6e7NTfqkGqdFjzF9PiworPJYFHYTzWHynSd",
  "key13": "59oyjUYGJGq4gyXTioC4NvMJvuCjiBMxPL2pYgW7KoMZuWsYhZTunn4CrzYwXrXuTTn6oLqupiSMJwtTWyJmmn4g",
  "key14": "HyaxZp4TF6TJhqWE1p6dU2iHuCEUcq76qVqisXu4HUBnCwTc5Tz9RmgqaJg66DEVSuUKbLd3sLh1PvSpfVKCEQj",
  "key15": "4ZC6XUNT9o5mu2H72UN5SPoPxRyUksapQB7U6v8fCz3NAj2cDfiWr4frNjrg55cZomQHwoK1zuTJVQvAbNRSda3v",
  "key16": "2hrhX8Z2sMUbLmTugTNvdDQ8a31fJCmeBx2eH4hSHfvMxhaHA5fyQ16dxwuoVuZpTDX6eJVYHGBNcghBADFkzrfy",
  "key17": "3wemEPu2Ak1Xh3KeTLyFZMa1zJmd1yNwSeQCKA1hNCnfMc6T4vKCrN5NuidSKvduYiMcurbBqRJEHNFWTqZWqcoN",
  "key18": "3wL8XTLijquwU1W79aCXTdhBQK1ah77zLmN5g1AMRCs7zAsvPD8LdZJHdZcro6V1pgkrp2ERJTi7xniyCWkEtLwr",
  "key19": "5rbNDY3DKyY4fa7zEJdmc8K1zwRsbYYSUYJUaD35f6aKvpcVStDGXHsDf9DkvcoekofyxdpA8vB3P15ccoswnARw",
  "key20": "5PpYNvij93sBqEg9ksKZ66GJE2U8HwbcTWAot3NfFg3gk6BxuPjLEa9rb3qgC8ztAtVPM5a6eZNYbREjXPC8qA7T",
  "key21": "5K229xTfTfftw9r8aTVrN9dekWsZGiBtCHKm8NjPaUXRSCm2PpuE6EtzGpLkkoutJNtt4CT8kDKzWQ51ATMBqtKi",
  "key22": "5WynRHiXxyPjnT2DLHY3K2oqYo1jG7YbJgZvkoBfwAEb8kUUbn6HDAor6CjQH4Y5djbcEmfJjCkjUvwH22vuyjGT",
  "key23": "4bzAdmFLpd8xmCei789gMoqnJD7tJTt7m47KKCP6mThYw6LVmR8Ru42MRfXhi37JT5MSiMj7JszN3kBLeG6LJVSm",
  "key24": "22XMxL3S9i5XpQucdaqTKgXw9zFnbqN5ESQgG8D6osDomGiCode44WXoXV9QZYiKjZmsXPUQhghgH9nFycHgBXnJ",
  "key25": "5beyruvpqtD2wCsjVDwniz1cqn87ZaYGMyVneaUBVLw8zUGBUvwf92sd7GF13EaLEU6dBNXrBUXXhWRmcFJ47y7P",
  "key26": "4fqoj5dP69L441khr9QaEcsp8XT5RR48pWdjKVxGsQmFV6JBDKavTR7FUhVzt2xsApWESYSNy6YSjegxS8XAwcde",
  "key27": "4wUbJ93AuYKT8zRtejsLwgYrUY2aKSkGusX5keXpWGi7BPXqRrS7j9PkUBmxETSJFDPpCVagUyk5iQFdDA2xAjGw",
  "key28": "4eofvAjsdpdrFVvXffbYW84qGfqyXL2iUhAmZWyxVwCNrovPvVKtSeccjuW38hmSqPij81xkCQgXsrnnWStXob7C",
  "key29": "5yUo7EX6fnPwSre1qRXLDEpwJexxECY7t8AmDZCpyohxQ2hLNP7oJP83YsuedAUaFoDn6m7hRjVz4PJWVhS2odJx",
  "key30": "65aesEz9AvZEmTYP8F3FkqWjXxmp89DufNJRiZ24GFwM9VgQipwHYpZafLaq4DWHKpJ356ZD47SycJjDS9P8MbPB",
  "key31": "2vy8bdLPWAA2pC3veDgYjfJ4NVvbqT5ZK9vePwWj2Ejmn64zNSen5Y7YhZC2H5WLFjW9gGwQvVT98Z8rjytnZ6oK",
  "key32": "4c17w49HNtAcSjNQuFnd5UBkVwhRQr6zGTSAGQgKg3Gkd7Bhqzd5JW1xzL59WakmFFUPhg1pageji9n75va3iocP"
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
