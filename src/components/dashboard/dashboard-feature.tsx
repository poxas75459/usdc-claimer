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
    "ccHWkCpSekA5PKDGNagcZPiUnBQMF9PTZoaT5ahovhCNcYurHvpnEa4VtBNgNyVz27PEqEgFESXtm6CvPY4nMjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BnP1C5k69SYDU6MnfwsHTgWJxGpDF35nUSYssDvD1VVNyFSYWyDFjoe9F1UAkcqgCLZa9tX2o8QFD3EEuUrza93",
  "key1": "25Uj9jRvFm8eTSEEQ46KHYMhCAiQJWt7PD4HayYPzvSTSPXMj9A748ekQ5McYsM4kE9FFLg3q2qu6TiDXun8wcgw",
  "key2": "mU7WRkunLhTYhE7ekb8MtMG7GamqAh5392TJYPSQjWiv5AVTEFLsXh13T7dkUYT79XYG2sCDxGkmWsoNE75uBdT",
  "key3": "3uqvdZP3HQjAEU7N9goFrDBw7ndgqcgXUUKMHBBTB8HjXsTEKi8NWRgz7x8nA6SFBHhPRMyPtqEGRaTxwBfrBrug",
  "key4": "HKfGb9LtaLMmQ73LM9C9qZfqVHVRcPsUodzaSYL2wbVUL64ZZESwXM1KrVxxRp7xYqnRENotwhxvfVfCwiryd94",
  "key5": "5Gtf4PDtZGha7ZiFFBZJD9YwBfztX34o6FNGq7TXbjRt8E3ubpUsyeVaAhEeWrMGgkNHDRjS4TQZreFrf3Wnn55N",
  "key6": "2xPC5X1RmHRBQZqis78qo4Fd89oN5WoiDLLoeTXwVKotZXg1sCWJcer5e4nk62wNiQeXcBCPWjAuHZNvwF7SpZjG",
  "key7": "5p3nNHSJaFAKr6n2X2rogF8RkvYFdZCgJZrns57s7hGrhMxcccZJPwr7Be8PYu5Mk34uhBGjZZ6tDbzkNM4T1fMJ",
  "key8": "2ekD5Cod3SHmWeJX2a5jkWUiKtJ4qMW8D9FwpCKeoupVRwKnRgiCfmwtWBsrux9nDpEnbgDvfAyWa3S38EXth47f",
  "key9": "56hjBBiatgB9DCZUFZ8Y5nEVbkzQv9HstP5aGJyCoa65JiXrJLzwn1kbZfUJZfLu8JB3bUSC4HhYXqLdrjDnVvhy",
  "key10": "BsLRnaNpmATB4xHYhYMhmpnzTfmhWTCeVw1j1DMxcVWsUrKRmEWqCajG8TrUKDpMrnEvRwuGn8FYBLQuiXWo5L9",
  "key11": "4Exa2rvGRqa7Ti3L33U33SswVVsdtFU6GSbbBUkKGr9FBNcg1M4UFkUykdg4CKiLcqDKc8QG6RhJY5jLBHV8SEPG",
  "key12": "2vwrWdNAmJBMZeKC2PHTR4g7NMS1Tb6VyovfqhpUMTBTPFCbaBAxD3rzYdA3dqJWMmbixgaPtFLfgiSzPZzD5TuS",
  "key13": "tEFDqenmQEubHsGSCRWT4DwDWRE8hziEJDaaBx5Hq5WcPz2SecRjixT3hpFrCJnEjJnNnbAyMsMj2dADn3KCYtv",
  "key14": "2D9LmZqzdR7GHpS17rcc5T8adXTfFPBD4JwdCjqYEKZYTnKiH2U15gPQnuBj97XwHs1988XnP528JQu7QTHvoJyx",
  "key15": "2Y6LyrMaYHf1W4kcamiukdkvV9YZVwUvSKenao6zNukwhHutqNi3EogLp8q26ZUCvUvuceqRzYR4ThitpvxJsJY4",
  "key16": "5f9jASsT56d6QwEf5kZdZhNnbSqEXxFjF7vPoaP66pMxf7y6Sg8vz9Q4PodiiDXfwmDLWspDVBVX22GFk8EsTM7Y",
  "key17": "2E2ZLdBoFUNBk8aRn47hxs9ZQ2dLiCmPW6rP7VHYKg8s72mTTJYhHcGuGZEFUoHYtiQzCgcb2xnngGz1Ck332ZTC",
  "key18": "2M1taawrYnPgFRHqpoCY3zPL3P1144QXkfa3BN2hJwRXsCSaPNegHDbrmXRVtTu2QK7ARwC2YYndeedf5G2HAbC2",
  "key19": "3PjMAnFdLcSimH39gbSsjLt6GMjSETznEeuLAbp616PvDQLeRhjn1YcD1E8bXd52RZBncffHxHv2YLCxEzLAkiKv",
  "key20": "5xsSxE3eQYcGuhSqn1sZhyJHDPze7VzgTx3CvYRaDCjfUJHa9ZY8rdRZXrrCSHpK1MAztcEaDjSy9hBnswRUaAZL",
  "key21": "36TsgdKEXwVaqdYB7PtArhyuz4BaUNcAm6DxweqKV836vMUwuBmgKzTvmGqX8QrWbpEAfe4ZQNnkmqcV5g2qTn63",
  "key22": "5qtNoHyDDDrxKYGX1V4DEwUoyGj8SSJ4ouCL9TtoURej6eJeVn61CjW5A7DK2cUUbXjwhemY2u3E49Mb1DJEpoRJ",
  "key23": "2P3jSQp1oUF8KS4J1NsdAtthqjwFiJeHR6wojMhr6ECsAwgt6X91RiHzwPVcszGpASAYBicP8tS7MPzc37vKozYH",
  "key24": "32UwQwQfF17Cjk9TXAS2gnrjsjh3nSzaVgpwh7GtRwveyE7JqWdfAoUbZx2QgX8XaC1bMa391TdHTKMAYCy9a5zq",
  "key25": "2FES7f6BkRLA4XNhMPPP3eF6fMabXfccg4AJXWX99nGrhR5XMP5QGkYnCZK13AuQpvVj3S9dz54VHpjv2MM4SfjJ",
  "key26": "3zK5dY7LFyfKEZsxrKjAWdh8bgAb3q9WL1oUT9wwguNLhXUD6p6wmc7d16b4RD7xJ3erofNtfNNQzXrfRfcdiu1T",
  "key27": "3uwqvEbcFb5rWg1fCPxLS3BwHE7tPQrSF97gd8cciAoyQfY7NdbsiLZwrmvpHywfEqjWiFZvQbC62s4EK1wPy7FE",
  "key28": "N7c3YAMr13RsUZEeT63h6dvcm8Je49oeP6GXEEDfJwrxDas16YPHq6iVfX9HbVy9cTrnpTjroPpGbCvvsuFBjSv",
  "key29": "4xLSLw9v8xbhjQhTZif3DCxsMbyCremtpLu8DUkBmXYR9bXnFKZdE7sdsg48w86cPbaX8vGPwnvvsyNNrxhB1h8A",
  "key30": "3wqbA5hgeAvrenJX53DjVuY1dyvNpuAFGgkLpXVQXKtv8otUZqW2q2qhK2DP3bM7wgixvbnPjBaEYr5814mdjiKR",
  "key31": "2Ex5iGW4JoKj661fGxV4EnW2MPp2Cmc1ZserotsQT6d2kkFBjAf4VL6rrrt794R422644yXeNAwVFWvk5SPsdXG4",
  "key32": "xDattS3QmTsXvZbw65nnLk9h2W7qS2qa7BUJT5YN5bnLKWmJmyPJ8cNktQqGxE8F3HFrDy26TpoSroKfQMXmAkf",
  "key33": "4VBDgnmZ4bRVSKjpgAs3tFWPP6ykomApAqfGKnF2zPQvYYDEU8QEQCQF69Zn7dGL6b1SuVV1QFyCSNTzncm7bYmv",
  "key34": "ditrMUY4epnyVWVXBhZbW3eJ1cUVsgqB2R4QvXrqGF7gUppEUUmT2G96zPRyES8Lfj4FzMXHAUpsDqcEgFYfGLV",
  "key35": "5yhGnEriY3ZyRUhBaj1aRoMvBf1SyHa1qKGNrGMSwNfZ51Lzvm12eWkLLvfRi1PR9Db5vD4gAMDMqqwe3rTgARXY",
  "key36": "xRigWopunsnGeLhiC9NUeu56Sirfzpx8wW2Vdsn4DqC3FqakpERRMyqG65yUYHhU4TGFxiKEE8gW2CpiseCHHRG",
  "key37": "NU4TT1j5yEXKt7fZGBBCqKnGuGCd2seLSmXbCVZP2uwEUaet7Z4ajohKWjawvN3gPrEdNWhYJeMphE9PHtjBb1h"
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
