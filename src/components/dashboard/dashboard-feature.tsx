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
    "3PRF1b8jN56CTdAPZWkmJxQ2CMWa17f5kEq5gsdzJ62h721EWrqvP2NyDxkSZU2rxNUQaqkE8XUpifL4i6EFijes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hyjdkKAUkjcXBJsYPympLC3c1aw7qwZmTejnaZGj4vmDPdEupCkUXhFqruZgqejj3Sx3Jkf9vYsejWnjTo9ncg",
  "key1": "55J4QtefFSsfiPWk5HFhZX32NSUaYpJiC51mQXMAtHWNwvbA3rtWkbwmZbLN3krM7WRTbbNvhSNs9xKA659BUWKH",
  "key2": "5pARHroJzyBEYsuaahTueFgtgv3ohYhzQEgHwn4BSgKZaumsHpJKGDbPXrBbmG9VqiCWxZBHxiv1duCuDy66v7oE",
  "key3": "4EkoxDktWnwVw1o5NYZAf8d4jfYmcs3iAfBtTrzVYRfqXKh5V5GQtAe9vQtQFC8afoJmrWEUvN33fYdsMtXp4SJk",
  "key4": "4uGMhfNQtMHqZmC8gm4AVHkyYSiTEvvrZVZycwVEyrGNNNRGqnMAJk6PhQLVMN42rR6hL5zT1M24wD1LrTzC6rvd",
  "key5": "2YsqDByRti2yFKidn1RsgKLdc7aw5xG6Zh4VhHCMQQZmWexNr6T6wihumwdDc43ZUdQG3vvAFZdqKYjvV7QYCDai",
  "key6": "3DNRrxFEiV6X3jpJDsCMFpKFNxBTNTyTNYDMmkzhx4haQGoMABh6cmqFxvAZhVS3baF3Uvi55NRhqMLviY49YKJ3",
  "key7": "6563FL5Zn8ZpjkoQUE3tDeNoEHog1gMavntRZtmrLbk5hTdQPhimCKBQ8GjQxcqyxeC892Xpgqyrzi9AP6Dg889y",
  "key8": "2GCohZMoErkkBkj2mEjbcPc4sNFHxbrBWGQczHeHhCds4eCwRkCDBnpXHJgKXJ1h6gkQXw9PepwGzNZKj8637S57",
  "key9": "2qB46zfajqYFnU7zPE5bwkjC4Sjr18vgPhDtFLE6C4znzNC3gKjxN9meMERXGEHLAv4xFKrSvftYGm5ZPdRaQF48",
  "key10": "2HsMQQnm8YqVrXqzZ7P1m4Lrpi7BuPbTB3gm1yPucgS2ZpvKXBArQZsNcx8TabKZozYytkjaY1LANGtSyEvihm7f",
  "key11": "5scXXrQ5pLhYhULzJv3xAycn1DwefRLvBUyniQhY6s9SNEBcLEbboAPKjSccsHZZ4VvUkD6ebH7DVAkzxpCwma24",
  "key12": "2h5u3qJa3xyG5UGxQSWo1Ja2q1pjd8gJiHwBMAPgzncmr9ScKsSe3ZfE8u7Ve6Nb4RLaRxPVME5xfJngYL7T4Acv",
  "key13": "32S4qN8QHhmSsM7HaCgue8pX4Vj9bHGEE4oAjhR759CsA9PKZYSdmSriP6AaYdeRWWJQCWgNNi6ADsYgCStAh4Up",
  "key14": "9zTgkDPgMJWqXVGykrVvhcyrPPGoyy2y9XLhCB15Ffsd1QC5VzkysKTZnheZrtrBAQ2UxG8Vh4pxMgTcmWsVrXe",
  "key15": "iuTezyoPhTrv7j8CHBUabUhTNxwXtWFdnjvXR7mQmFX7cxf5AbL8ndGjRRKtjK4xcp2gno3bBZJSfvcJxXziRY1",
  "key16": "uu3kwB7ALxpboyA9bLspbqvJcVjo1H6PRUHpnKP5foBzeupv66FVYk5GZNbimq2o4nfYmoienaztGGjXNXCkrqP",
  "key17": "2PjK8wxfYYGYhKGmUNJmDzYdYUVy2FfBsgCgh57ymk2tHeSPQmrGnmxv4KeGRaUJBVjrNBuqUbn6Aoe3qjAuc3ZA",
  "key18": "5ozcRJTuNGKyrbqc2E9hX9erc7WFCmDEMwVpLGKksEP6knVW8jh5sL8wort6AnARYvH5vggduNa8t8NJgammn2iD",
  "key19": "dpejfH2hTNmaGdtxRDUJCHRRRxn3VXv8SPP5TYy1CfqGZZBDMgePjWSTJr3bUeqHeEA5baqiiGocupuzaSNnsgP",
  "key20": "5uUxtKwyJAAu8cgF1Qo6hr6iRdVsFH4zjvo5az5gRrVxaH6KHoNwdqMyvMJErYxwHiAHSocxUMxtzLm2x6u89fUw",
  "key21": "5n4kHLhM63PukDigZZeQTDLwX27MhyM74HRUHsxmsT5jQphUNwqvRU3RAkWkjzEh8qM5PwFHJ3Gh2AqN3u5HCMpx",
  "key22": "2wSH84kpBB6ctpRjwzXzk8Au3qZQ9YdwvSyVdMwL8fT8Lv1pZhKyDzQogmGvo37MjyebvYpNDRMAD6vCoYE2CisC",
  "key23": "FD8Kxeb5FWakZ9JxtBcDkHN9sW8PAJbzx1my3vkJoiYeW146ef4QweggMna2dAg53xbcDRFRoq97FrT5214M3ZG",
  "key24": "4WkaikMpxACVeTokgYcKieP9q4KyMGn9sGtvTHpKPsoMVgkGsVEsrBzVh7kByscy8mLacsm9Atrv4agQb1qcNjiP",
  "key25": "2dR7Xzbr9cNRs6ncrdAkXE98NMvSFmK9zHfr2wqZCMbAYSRpcDpLZQsiSs2m5G7dgMgQqd3TxPq9T2T2wtnCt2Hg",
  "key26": "gUsTL213W8PajXisGDLFY9zwe5mxdydHqGmBYyf25c4CkGPWqqtVykismZr7ChRtjt5d4wKNJgUuHYANsdvv2P2",
  "key27": "3HQ3SFX1xUxkRX4LtRWVxX8n4gngbvtGfvbnB6yVZXTDGBvudL8EwZNgoDxSSiVxYLLvEegbMPegUNmT1dy64nnW",
  "key28": "53uaWLbJfgecA99HsFDdF6DfLn1HiT88ak12mTtFjM5UyfGsD3jmYHu4cc6yzWxu4fczVXtZWVN6Epazze3coMkt",
  "key29": "5jcoWYaqT2wPqpHuNjytWz9sq35KcYmwNkKYDLsJMZBJmVUzAjGKmLnbK6tjZURw8KthU1miuu3eXf31cr7Z72bU",
  "key30": "5mkdmfmAkkmSntMfPXY2bp94xZRDh9ZH53qmWh8JW4aUb1WCkLtYhjaRM1ukQt98NmALNa9ro8PAxx9G7L62xD8v",
  "key31": "gFcCWQ2qEHHZr6sPaCtG8FFkZLDiQL6vTy4tJUJizdj2MAR518NYtZ5ULeiVk8PZmQLERRd2fdoz831LxC7J7zv",
  "key32": "3jQKeUN9aooqNRUK1msRGFA4LExjnyVvJPsu5pCV8oB2T49m1kKrfv94gwN1bCvJo3M96RzAd5rWRxuJQhN29Fgu",
  "key33": "5p8nZYDPSiNPeZNdUCDtAkGqRwHHpR1Dp1ErC4L8UcWqEN2e9D1MbzH8PrvTYKsb3UfkHneJB35iKvRzBaJ98am4",
  "key34": "4PnVSK7gn9NGgupzJtWE6619JLhaHRBr7bteEDnFfgAKmhewcnsZYTwY3TaZyYiEH46PNW6uQrzQjQwJimhiAmav",
  "key35": "3bU2M1KSiUREaQ34sDtpXcdAXr22EgGBiRVdMZEy6EkKXCRzp9yycuFd5BkRjN9ZbgqVwQqnBBuHcsSVNwStuz3w",
  "key36": "67H4QKrhkAkMHiL44c1r4PyMpoqWRgHi2SPj6GFTHEQ3MWeMtwtaBcVh5KGh3trdFpGABPgrvv4KWPE23nEwhPfX",
  "key37": "5vJSbpf3bb3NFyQPjRPqmW1PNWJ2EqHZxNpr231ZWvMeXNuiokD2ukSubfNXveet7UHCWAZTAQjHWfRyaG5LDTV2",
  "key38": "2xRc6S56YZ46Z2iUwuJCk5qKZkxVBLpYixXUgsi7bKzKhKp2mkqQWEcyzm4k4yrwxZqV9gc8rKVLDTY7w2WAE5XX",
  "key39": "2ZNtNisxhvpLHcX71UJByoppUn39NFssg6bkLyf9pMExwa4ss8FDYKXMg2M7eoWSMB4sjWyBqY7Uj6oMuX5wBTmj"
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
