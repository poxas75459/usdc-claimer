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
    "2Kk8B1F8iuAU6TZeARmoCpgQZqA1NokcupMun1bYGKCdKG4gkPCGczYFLrDAW277pijhPgHyDLUw8Rh6v3dspn8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y6hhmfhwoc8VJrXwwPsh3FDPZbrTGLRULc8gWhEZ5VGGC4MGojbA3Erc2wUzrcwvE4T8C71qbRfYtP2NgyQjS15",
  "key1": "Y14y3J2PhuZ6JsRMTLC9pzNYJKQpGuwVQxMmcwuSSYVoWBirrpcdtvot2xJctjtobAXFNfgVkj38LHJrQsCPQYV",
  "key2": "Y5QsMZu7MxDrPfGysFYSXgmgrCYnNBXxAaPmEFN2pJQ4vyhRDy5kzwo6LijizavFRVBJ2TRLGe1gMC8zpgjTcjJ",
  "key3": "3tb1Y5xB9174e1sXNoLpMaHBkNQLYC2zmFUuWSNapzwz4AfQ5jvdSnrRhXghGLZt1U9Lu36vwf6PANieiZZRRdB2",
  "key4": "3vw7ePFBXZFBu3eDASzY4d9FA92xKQULJGSui1xYMWKcmzQ1BerJSL6KTFXzbM7Y44fNz1rTyJPTjo8xvMsNREnC",
  "key5": "avWQdDz6oGi2L1w1HvmLJbGATV5U97vjzRv5K7b8LdDF3ME6soJoQJ2dYSz4182p8qYCK6MTwsAphCaNxuMS21S",
  "key6": "2y1TpMN9R7WCHCiBt1VxxTCJTU2GiS6hGQDD8RdqmbYqd5MKc3CBDWtPMpmHkbSQEx6S8R9SbSaJpCcWQnZ8puF1",
  "key7": "2N5sonwL2Xxp6hQu1Adq7dybbFPfJpUaprfX5CkD1CzrnrkwXjdUza4EMRJ1UQJvTueRbh6J3ejdNXqatGsrvqB9",
  "key8": "5hVYpteCJP8t85twnMA7AkYmJMuyvXyzZ8CWfgvMiTdUmUTXZw37htu9MHJdNd7i84panDdEDiRLFuFdVGR3kUVc",
  "key9": "4jfmBcFu1gG8zc811drccgWfVngjYaXaDykronFZ6a3Xcj1HsZW4WSe4dSGgLz3PCTvbDtLtLKQtKHeTNHEjZRoQ",
  "key10": "2EiLw4njQz5RTUSL9how1P8UXKbKnZS7EgYSMvR6TYJnDEEN8x3y5p9KFJTPEt74EgFinxW8fzQR2Bio4oZEnXY8",
  "key11": "2x9KwpwfcPWVVizsCWSthBjn42ozN35WrvGFUNRxGUwSifJ6SZKiEuFZYhAYyMQnWmSY8oM7JtfEeqADWhy6bJRK",
  "key12": "5kTDbGisLvdkMGPbjpZgWjadBZGP2LKjijbRcXWg1jzH966twFUYaZrUT6SPsdY5BwxkoqV1HCye6eqxnh6JS2xs",
  "key13": "kUfBREmNpdDEZnbCcUYwTVAEgzzJbyEzhb4BWvsfeWtCjaQxq6yVKh7q85wEoSMW7FzANAZ5aLkmidRRK2zNhmw",
  "key14": "44esfRPMsTg56f4L5C3u5MagTvraa2cGoCyR7NCzVi8VSxiiyKpKUd9SvLqVngjYqj6uU5C2GS19QJNQ9HBGgZDH",
  "key15": "46rV9VLCgFPeRRLEqDQ8XUE1rP1DwAvUoi2Bebueq8HAF1q6ucgBVB3jZmUqdiQWnCXNLzekxoD24bNAdYTbQ6Pu",
  "key16": "4B6S633uDeH78ouFYXWLUkd7397xZjkCeQNXKKZztx9Se2PKQsFcLEZ9dBGXQaRmXsQ64MghpevahBtd9MaKzkZA",
  "key17": "2a71de9U4vu5hHsb3xre9fBNjQSZnBjXzzmRE6d5zRfcpZqX2Qj3h62KQMagwef2Vk37iCZT7H9LZBT8WARoVW2P",
  "key18": "4cZskf2yAhPExnqRLgW8eVirK7pBxC9bh5Hg5ZS7npQxvvgq5rg2LyfChAcrdvWeuWZZxQyKs4hAJpoSd6Zz3HAs",
  "key19": "ZTAgaxafPnJBq5gRLgVvcgQdq2bBGz6DSEXy56389i6ffZmUb6sJZ1XdjX2wsWTLXrLCVLE3yaf3tb4Cdrz43Ph",
  "key20": "4H27s9XGDr917GY4M2wL7QN2gMBqZNZGYK2VVqyssm9r3L6CixDMc7EFZFV9qK3XfZ85FEvfSzw4vUUDZUsatAwQ",
  "key21": "43CsGFfDPiqk4eLQ2xE8jZvC1N4MDzPXxqGBzAjhNVicok4LbaKUh9m47giJjfeqPXdWZUMap4MNRjXgRxrHGVpD",
  "key22": "g67n6qX3uY4ngLyA7b3Z6pkYRH87EDQ4ufPdGKYnAmGBL6XXgp1jPzp6kbNPVBvtBLkCAhYZN7Dd1xVFubL3zrD",
  "key23": "2vTr64PKB98B87Ap5c6UcKUZ7RSbg4136wSuUPrdfhnCWDjN4HZkFASwCfVM9ueFKgpRDzfZJUCTJyp4HMpR4wJX",
  "key24": "5pZASg5wKTZqpsMQXF5qjTEt8iJaCkcjCaweJsz4WNb6ELZi7KYBqJxHncnQ9go27q9v6Se42BaanqLiRxdCbwcB",
  "key25": "5y96YdNtf4akPo9oDMFLWKav4fpsfWAMEfY2Mwzw9v1nJVTyf4bEK7jBzuGCmeEdyAsjucqLV5WpHL9qVWgecGiH",
  "key26": "45fHecJDLeFAJJfqLJaBaAuSdW1MxC1uwcD6CV8uvyrJqEaf7x69vjy6b5mkRuaFExGEtMxLt2YxxytaB1Ta9o5n",
  "key27": "27JHiuLS8dhEdpH84LchTABgiFkpGmgnBcpmiM9myMjRVFT2Q7u2NMeK8yHFMnuWYySdiGWgFzvPDmC5jDfqR8k6",
  "key28": "4AD4JMYA5qSNYXbpyU8qstaTG6zwqmvLJ5R6JToMUMbsrAvijcHT8CwgxCaFVukxMyD6L1SXPbpTV88jsveCYgk1",
  "key29": "smoZm8gB6RQaRN51QXk2qWbzMy6QMnzQqqW9J8raGhiPqB5gsZNR19bAzpDtJbZaPAdGJK3q2mHfjMY6UFeubrv",
  "key30": "5aRHdUGt3AeSBdxcncFHsAEkHs9EjdmEdcmtTyi76xZMhABFtxFRkh8pL4NDNKsEgQLN24nsxp4m66w7LbiyrxLj",
  "key31": "3bKEP8174xa7fQBwCtRTChtBuDdgLsYmTjrSWx679zB5g7CRvJBxHFcnHpX1y6ZDjM57UmEYbVchGV7k4RkrcVkB",
  "key32": "2XAokeQpfeZAZ8wMCaWSd14a6mYkhuZN55w5U9HAE6Xnp2K6S7nyjywwBP2SqmGCPAcSGJSwsF8C98bBVKW5gYzN",
  "key33": "5P4MzQdWVKiRn6WcAS8skBkvSJCfxnkvVy3EvxHmGQvNwveiLXBkvH5UDurZPF45Q7rGZ7TYu7vGmttmJJk8rqjf",
  "key34": "3qkhLt8s9uaiZdXPqonkZSCDRoT6QMYsx1fv9G1XiXxYweCyf43TnSY8Ro8k1XFHRXytQPzoFF5yEhQDg96ws5xz",
  "key35": "5qn1X4u6AensoSeHNmRLcw6EFgKgUkqLLQFQP28LQTwUcfpdy6y3MUSW6YerQPYpMCdXMH6sGzFJzSbLTPtjAkZV",
  "key36": "63Vkw5uVJnfW9vVN9cadC7rjSCsH8uv3EN2ErDkTAqa4NFycFKf149DK6UFUMwKEK95oLe5utcMzxWYoh6c25nEC",
  "key37": "5XtDrKLQdHZhUSAmUkVEr5BHxYZSCWoyCydyrJ4jYLQtpiQkfXthCUvw929Y84DvvKfU5tJ3krS1c6HfU6TQjVoM"
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
