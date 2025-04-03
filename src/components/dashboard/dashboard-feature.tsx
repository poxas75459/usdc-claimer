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
    "3qvG9ziM6yGVLd95VHK7C98pd4n5k1taPaWMewunkeb9ekcqKjVvYvyp6S98qhnjrkddfXRT7Q7aCE25aSYfCEgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TC9Uv4444eG9VG2VMSDwxrusRAqFK9TVimfDW85ThY2tU5qnLzXyDDqHbEraRear2i547smAKz6mtXq95X6RNqU",
  "key1": "4NF939KChiP23JeaAL3UECu7NBbxitENhjRebCtXMSSncGRfkwb4wzCi6swdyPASHW6trhouXsurE5bCrihhmmY",
  "key2": "4Ato4gWDjzzZo5m4gXUZer975MQuMdTvXiPCHNnQvPVESWsVRFir5DSqhQ9AkKHLwLEWF6aPWRZTicLiiPxdEHpj",
  "key3": "5XLCRv32MTDDaPz2R1d6F7drNfwE7ndD448gVvh22idfB9fJMPAeYTPKw3LY9ejvoshvNAz8qwYeivVHqyjHnavL",
  "key4": "4MczBzJBjz2YpgoXrMCevMC6Mdf1cw4x7Lf5LCvwHyfeXFmg28tmH9f9c5Wgbrfggboym9ti5tfsm2H53droWVUq",
  "key5": "4uXHuAkdDE8AY27VajTXk3ExGnBa67YyjXXkuF4jdNurcDuPh1mSKnc8Da7tY7X9TNL7HxLczwabnXL3wfXZHdjZ",
  "key6": "34Btz2xDaYaxFAK69yFCxkNKiCVNLtrZmbAaWZBwe1LuDXUwejagLqZAbX8nEBy1qxtomYPNfDsBAXux2DAbmqfV",
  "key7": "PdSBFCpwHmn6whuskk2ACQCaA5cLvnjXidWhpLKLBSL9Bb3Zz8dn2PzqrDw4taVrzA76Dr9XcxLcQK6AVxQ2kvo",
  "key8": "22j1sebJoFSPs4tnyM4YrZqDT1aqrhTX4EpTwhLHrGSzizxSjSTTb9okZw4GsKBMruQxRYgkTFq5gUKXsk3Q4LGg",
  "key9": "4Znzy2B2c8wKypnohfBxahWT4vcz9zhatUGVUFM9abCZ6YQwCZPcoGbkSyoGwuoieWxPeajdvsG4A7qmDLwYEELv",
  "key10": "5oL1EW3etfXrThtSqkRq7KNfH56VHtZNMwy8FuY3AXDT1MX7QbCJznyJXYjff1oUALJrvncRe6VsqpTHBEYq9kB",
  "key11": "5hoHv5McxLac1Xi5eku75wqVAaxwtHDayGJ5wTMEJ7ihh9i1JJipLD3RJWHEYyZnj2gYKQynxxRjvM9FdLfBk48v",
  "key12": "2oNFREEQkbpj1Jm1FEoTHbHVtFCqjBbwbDLXpLtU9jb6fv8NURHtdnUZUE1N4dHCiwVhmddunse5wBJMHTjDD7YE",
  "key13": "3TQYKjNvBkKFmJGs9kuGwRpUsgTdAga4cpgHzF41PvzVHJnC9w2QzTAvFHYTQ1p63vYYc6qgVJymKC8uFURpnvu",
  "key14": "2Vz684v2Qxqdvn3c7PnDD98EAkjwDkYRVvWCHW2w3MaUycEGXnc1An3aYqUXAifV1W3EmU5VEfSR3fQusJsynxDu",
  "key15": "QWoPbVsHK5775PnFZNQaZowMDoHtDvb891gHDQgK5zvz7Xsc5n5h4XD3AyUhVHHBbWj84WoAtMEWSGuVyNpqCvc",
  "key16": "27W5PyoD1v15R4VQ2GkzDrzQEzs4jfTR3NgXBRFUacTrei7trJM7oZydhSUQZ6Xee9HBBvuGgE2CxWaawwe7T1pR",
  "key17": "5ef9UqewcAhfy6M6Tjf98WBZhKN4cvqT7nCPntVmrBkFzdHbQWaGv5mzu6yU79N19A2Xx13e4ob2u5buAzicqWUU",
  "key18": "2N9jXejGpy8bUKvYQKbnXA9Yz3M6XQZAxBK7cvcXbG159wMGD54fscNFc2Z5GzFWNhzp5gx3AX5fgC982AC35kBe",
  "key19": "FYfchefZY4NoiBJfA8p9vhLAou1GYJgdSz1WkMz3CaQ5GuFBeC3cLdCqs1zvVN9X186nmBid8zyKGFEvTcgmow2",
  "key20": "3v2JCUboJrCvcdpKyyjJDNU78SE1UsaFwwaraPCPpFkrH9tCDv5P7kiNLNHAodoFeAmPX7AmRvJWDkeHNGPgm6Gk",
  "key21": "43cxJ3dRvr8HaLHMTSgNP7tYBeRfBJKV85oNtetVgSrZwPp8VSjdtnRxcRWh6nhJHqcK347ztB87T12qmxaLfxRc",
  "key22": "5vRLCeWqjkARxZr6oyBQkNuwiu8gEhe139BEreMzBYZQXcs8PnXM1qSs3M7yHmg6u1LyQvCdEsH1pFnExoZD2cwK",
  "key23": "5Lfwzc9miCofyeL43Apyo5YiMZufUVVvpjnEV2CkvFDnLnFJ5UeDKG3YmBNW8SsdM1q3CRuYZpXUgBmAqigCChmG",
  "key24": "2Fh5dA7jup8xJ2sfR5Z8nieFapGhzUGt1SK1xJKJwGheMECuc91Z9dAWtdXuV7dECjfEWZ4r5LL9VKApe3R68TQQ",
  "key25": "2SzSM8nTHCWMwPoKu1Zepxv2gUPA32839kZGFMYekA5rzUH2xttcBB9iJrex6TCi7qZntJdcVLPz4K5fhE94Z6DA",
  "key26": "2zaXQ7yphNve81Q6nSYL7dYP116kw2ASP8XG7RqAg5E2CKMsndBdoV9d1KsSAV1PDixjiiFFpZraTaJqMnU65zrL",
  "key27": "5PZoNRHypb9sFdkm1hoxPJrCzjmnSLwcAraELvhksortpdSChUL36neFmBQ7NhBRBJbQwAukWUyBca9HZsQbfffn",
  "key28": "4MbxAPJ5FQoLb429tcjLPiy9fLgzV5u2diKZrZBnYwUv9724haVy7B6gW2jJUUnHbcLHTG5yUuH17efUdUwKtA3g",
  "key29": "5Ygk6a4oZV6qEve1BnCc5BuGAkZeJVxm4VMT2jRenvbSefxJiTWc4E6uKN6Jr14ERTDfWQndEw9wTGMUv2cPAwdb",
  "key30": "3Lyvf6JuWf6eSpefRXLyxBFhdkyAUAQfGUXsKX6LSkhXSEBJEmbu7JmKsAZCxv8onxBH5ZtYvf13Kn3EXiPkDekv",
  "key31": "5gLk6VaePHhZk6GeetH5QBhxCzasCAght4vh8bF32jArWjmEXZtHHm6LSHYZCVjgVaSdVGb3rb1FBDh6jy4B9Nym",
  "key32": "32KvXTLSQnmhaGRMeYGDpd5BzjuvTgtLykz5QmjKDunvpe22hAxM6YUuSEGk4CX1T3AaSyesTcR6iwBgcWwD1pBa",
  "key33": "44UEjZR6fbTNc1ZEXBwfRUoNjxYBK3m98eUcNuyxo5sMXbYiPPckvhYuCH32qMRBWAcDRDB291bqhioaLUA1rh6q"
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
