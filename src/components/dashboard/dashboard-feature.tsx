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
    "5oNBkmqoqSqMBYSdYBzD5mTjspkdBvQ6kZW9TRUBrx1hgaz6qTxyCRqFRdPKs9RdRdJfGGDRNqXza3V1vKYcQUJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kvrjsPK5nFT5bWC3fymnspLjhHNiMViQrd8dXGrW7Tp83f3Xn8mx3HtUK9TDp5PF7Ejr8CyRYU7gWC2WGSL6kgJ",
  "key1": "3ri3PQY7FrLatk6ALsKoRhXkiVgPZMxx8KsC5YkjWYhhKhXtgLQiNqDN9dXADtiVw4V3aQJnBmk54DE1fPAkFRt",
  "key2": "5xTcKWBbr6UddC6yKbJzboWpSa1sjqCpBQgGr7YFF6oFRYY53r3qsed1wt1oqFUzuaUGP2ocHZhso8Xv4JoumRHg",
  "key3": "5ex461i2QZZzr6oJuxAtqpb2e1EZbmZKxWFrDmFhvayha7aC9RD2fJoqPdgiQejbpUSbDRFydgmekbausopAi6mc",
  "key4": "5JFNMYfqf7CA9XKVLiAvLdgjKxtdFgPf3mD34DDo4wxHPwcW2XYbFaSqTUR7YSXUgcQzDvF4z92jyj5xHiec3izF",
  "key5": "4e5p1AozSMVSpqgoPnYCHpzGXD8Q8F9kgfqWTNfSpfYhjtssQBHa6zDm2cC8S7s4dGYZoC6QSox3WnboLpRvF6BV",
  "key6": "5gJzLRUroTBBpiWrGGdafJUYbvHGYB9wbZ3a3r78nHkqE6kgrXbtQawday3qHETR2kvQFS4vNmw8gRWGXXFpcYhn",
  "key7": "5aZiFBU2QDAEpk3Y6XxtDqmS1n788CMzrb9DQrLFyaf3ZyyKxrB3tK4o4BtWSuHnYdgoygNdCTx3uxYXfWwxZZ6n",
  "key8": "3HypKcPfwvGnwnsHMHFmTmsTSdGYpGzwwhTevvRoADn16uztP9er5ok6zAcN5ayGzrYmcqom4CdhUVPLqwStT6Z4",
  "key9": "42mmNP9AzSvtKo2X8mU4uig5Ky7qYsoyJ7CNHMZv4qAnCeY8mz9o61aZSucHcKTEW56kjGJXaEyWnLnoh22tMRrY",
  "key10": "48hC7zCTSFGTkMpRgssSAchLJS9G2GtBMM2PUx4einTZz93oJrGpDcpPoCpEVWF4dxeF4sxhB2AhvZRq6F9h2Vg7",
  "key11": "3anPSYU7dgTVZ6WfhaXHh5uFCAAkc6HQT5zbDbdef381rz8ypdgjQGmNaNx7AZspNFMRGET1eXsKGCvaWMjvSkFr",
  "key12": "4xbKjKbk3kirXQoUEKTRd4UetdVoPdoPBAr8RJ9A1ZXFwaj14KYHwtKkz4u8jih94npg2Q6uGw7QusWBmp7CK8JR",
  "key13": "3uWVNHcytFzuU4GzrXhxr3c6Gxd7KChVrhXBJmvRCb8mF3rSZW2EKHTpeFdjhfuLnWetYXmLgRdNMBv68xkASxBX",
  "key14": "dRbNRy2Tt2AqzKiTGS3fuRrbfkRwDJdC5h2iYSv9cp4AntFAvjK3TMCxyJWK11h6DRQwGGNdxqSX8EfNbduc7mf",
  "key15": "5GDF3jeSzqUsu8tyujZCMpXVApmGhmHWkiDjoWtJF1UP9jqrEUc1r7XL7HsQBSXt9CEzjPaVPdAp9p6Fkejw16HT",
  "key16": "64V35wiEKcz5c3hUrht3Sjyo2q1tWdFH9z3mpUB4w5aRBADbvde4rWFcRB5LuA5KFPiHWKoJnmUPhBDvKw4sSxrZ",
  "key17": "5KSAZDsQvm2pZTAkbA72QESujKDJZ9hrsBdbM2tnwg6VX1to4sKDhe8g7ybEQMuvvuGoqT7AqU7cLxg12V7XjQV6",
  "key18": "65vU3qaGM1mobsxDCLAXRG27M2i6QJMvET29taRWtybvWcmCaxjyyg4243pZJ8a4MM81LMrokgEtQVdDYSQRSfUJ",
  "key19": "2khxABKobVBn97osjJCpjPcFNSWgv6kdEzLXsve8T5E16h6n9B84AKZSsLTdgB8Cf5xJ96N69Wk1YLj21aVNmve2",
  "key20": "3UNNYxmmwYYGjDDCxT862VfEgazLj1C5ZniZRy1hsZ61gkHJfwZh5BvhYcoWLiEBRpGgjX9kcQZ5MqebT64yrpYS",
  "key21": "2MAT4ZJxsPAbmhsHvLtYvX7RbftAc1zW6RahVx6NWz9nhFB21U1Nu6dXbgRDcg1cUnrhD2wwMosNLQyw3ZBcwNvS",
  "key22": "2wM3V5Cz9yrDBQn3Jp4JAPmA9fx6F9LRQkzB3pRTaBHxfjnv1fDiGqoAmGEFxCKoQxAzVtyGhJEkY62Wf1fUjPCq",
  "key23": "4mRxQfWzznK6pcun3EtVw4Ndikd8XyUq7gwF1LcpqVpBX5V79xofWmW5TVrxm3oRiVt6PoffqEoAPBtAvsmJM8Rd",
  "key24": "7Va1MsLQEAKYQtUAg5sk19NnmvuGTLmPwuBC8m5VqxUC64sLTvt6VVs8f7tECLfJvp6ZEUYgoZLvB6Ukpa4eBp8",
  "key25": "3qsu67Xjtguqrxtk1tuPA78yM48qxtLevB87ihkazYYXuxF5QuG2h9FH4pkWtKMxMApN2DCx3ZrqhXsprkG7iQt1",
  "key26": "Dq1gGuQpaN3CAujdNTkKKvE6yYUBbN38ZE27JyUciPx3sF4hAuVnkSss1H5brXVep3m3BKtinoXEcy92KK4Jakw",
  "key27": "KVLW8FGz47DA2AksWksPMQtCLtJqqie6XM3DAL5tMYRjdE6JQ3e9JTN9M2WbQrxue9oMeqLd4cuTjBmGXnAigBg",
  "key28": "2YEcinye5Re7SUETidX57KRq3GcqANVvJfAKfDjPppgVWenu9qc2M9n4bKWbvsdWRZyzFKz1ovUNwkRnh6UVH77q",
  "key29": "5Hq7JbKE6xAuVzeiXDR3y6KFCRTYMNDZyCQqARKw5EBxzCU6EKMKCrPcVtTSfMMpj33xXqbLNBsNqCmZbjgTMTsq",
  "key30": "4L2k4BFmxynM16iHDsP6kdj6ZpTPC1GScJSe3vVG2YW6MnwMz2FQB2hr8nGFCeeYwhRUm85xZGFG6NPPgf4YF3yw",
  "key31": "39fSFvSckbtZ6J41UhAjxKGgnTv2xrkZqaRKqCB2kxjvZvPi9cJuaAL4YsM3ibb2KBbKRA2XYXFvyUkkyPEf9a31",
  "key32": "4n5xEBhir1d3pA3eZUeRbhunUGqv7vx4C1Sp5UcvyRGhhJaY3ReL9hb1un9cusASVxqPENRVv5sronxb8amZS53",
  "key33": "5MEVESbDQUy5hQZcnfuHrDZ8AwQJjiUdspnVeeWHcaUXpQruuzfB9LzDE6eDs1EpdMeATAGrM6Jj9DUSjB3Bckse",
  "key34": "QAq2e7m7cy2BxpEq2eNucD9pawdN592PZoXZ1bdWcGgUA2ACQSbJkx2XLenPKZcg2gpLJoZe2cLTbhTSReLibGJ",
  "key35": "5HRcTyWQW2ybKSXNGHwuvwoLRoUTHp4GgjULEhteb66FqxcNkpSJrcPmhCcwc97gcqKsxo3874FyMN7PQFFRZMZT"
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
