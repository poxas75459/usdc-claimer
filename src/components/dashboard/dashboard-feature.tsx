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
    "WdduGT7c8C5JbEvQa87GfAEY5bE9m5MLgTVLodqmcTnkUvaXv8kQHF9Ki73vNALRRTkPKcScGsRQnGuAWwYKaX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jLZXmWVMX4QhuJaK2HEjC8GiEXpAhNJagy4haxCciG5SR4wwj8XifBGqW8AXRWmEhQLnNQtSntkkCAx6yH9sdPL",
  "key1": "5jWxsE2ASQDiNKFZAY44xG7eWWg2thwewbGJ3kNmcYHFSS6No9UuFYrTyVaDcoh4jbZo9wfCw2A7gW5o1oWFEP6b",
  "key2": "52xAAPjGSMYQdrKw1frVqmXbktbQFT6rs8Q8n9VYFcWywESPHbiEuN2NYnvBfBYYn7FpVM5EVmrd9Nb3syvbFqj4",
  "key3": "4cJS6hx9AcTVYLG6cjFhzQcp2C9QRyGXVzptgCRqZFouc7UyyM2eLU3T74KL5NzSUYeATGScReJTxx3dfdVroSdN",
  "key4": "2AeLsGMVnmyBAAF3yLFCtEQWrVvTDrsPiW39VjNruaHxauUvNy8abpU2VAWSGYNWMJ9WmJDqMC2mxEAF7hyvNu4m",
  "key5": "36goLuCypFbYsdqv7X3nriQtS8jA2cmGfU5g7StxaKxvBzbVhDivjdL573fhzvkVooU5XZQjXYbFyJaQmvLLoFAt",
  "key6": "222ZbbbWXAGUKyre9tjC1WnjQsS6N1mL5Vweop5cofJWHDLYXiyJ91icG6puZkBhmfxtyXDjnXVo9ahkLqqA6WYV",
  "key7": "5yc59ibAGUWREFmRfW4vaFz5PppwfwvNy2AWpdjxybPMJuXkFRyrRMCqTL57NHKfSVTcbb7H44MrLHRrnPGu4gia",
  "key8": "4LKQAsjCdBwDBuWBqSn9unToihLCuD3re9PEvqEWJP1hT7LhbyiG5Ax4ahVN7sqe8KTMc3oV4FVX8SMeJgMvaSKh",
  "key9": "2L9SsZRey2tiZQvijfegwDj48MptnvbbzE1uidjaG26WXuNQzKK1SS66Pqh9sFpQayS9FFEsu5qPu2BQvVqeu8JU",
  "key10": "5KbN3kpATynNDcEdmpYJSznm1N7H7xWgsCHWifGyQ7KR9Dyp7zzWorLPDNc3C6ZKa4eDrWrLNNBdPNHuoNH2QMDR",
  "key11": "57FJFgUMtChYmGf3fUe4ReWgLrm9WBjmuXjiGEb2uQ8C8iFuPpa2qcc9LgH6nYRyT3xkXaAeEq6DuGQPpShAtJbx",
  "key12": "2JaR7bCT6nUs48rFeGhacGBLWL7MkJgsrE2FpEy9gNHGFjmdxjdTYKpdzQ5UrJxbupaaoqk31axtvXEW4ECd8ZA3",
  "key13": "2KCCsmLHwrbirvdPgzL7arU7utbky2wFxvaSkghcjBPmGQdWjkkFPNFajVkReZ1aXNox9ASrdUR5vsZ2SZrXxGqN",
  "key14": "4rGKPKFh9WBWGhiDGSejpwNfhbU7Axu1h6BB1vsZjPyyC7XwPttUgtE9TJZmodS2r9pP6T5PhVF145jmRe49Zke",
  "key15": "4ZUE5dEcVthKAUCMB9GemqdHW1rcoQYFuuDZHKojGcmxvKVefszjeepjFQdvUmJKXARxbtp4aYeXBJUkfWRuz87t",
  "key16": "4CmJN8axqs3fZuozJ2La6Xvk1QTwqaHVu367LEEiWVKnnKJzyYcb8kEuPVMhbx3PMYkQbrFW8DCgX13ABEodYW67",
  "key17": "TBtuUHyeXGsZwiDywBweYED3kT3nus8jXK5q4PhJ5J9AHQf1CCbfrXkqnBKYGbGLk5yuj7F4QfjJKdBshYnLAZw",
  "key18": "3GMXpXBQRb84aueQ2jJ8gPkbYkTnRMMphAh4LFbogjUfFNNzaiaa7H1hsohWxYEpMWbL2LMz8JGsP3gjZvE891Vw",
  "key19": "4r2cWEURoe2zo3vmVXHxJsB2rds1FvXkCdK5eLbvjtps72nFLN8jkgUaDNDfUVq9d1SJXrfWg3FRBUjMLNk1KgJx",
  "key20": "34mhL9qUpPjCmr3JNSw6DtuJoQ8wtrn7EFSgs5U5udV2asw4tAjFfLgwKZ4RPTNmLMDaRaGmGrcEyEESkUh9V4ic",
  "key21": "tj3HJefSGwJJcx3izAniWD1hkqQSQHBrXjiQqk7qYEzb2HHTsUTfK6YiFSNoLWsyGnFFRTkoDLemMNVmPYcwPS7",
  "key22": "LyyGoDEvm3idbzaAZiHceobgyxvxgV5P2xoV76hLMEUxkvZK4a6mTLZTMfgc5vfS7CmQVzwWcAWXyhZRtWk24oK",
  "key23": "5gxz4Yb8Q59362GQcbzRGBDH7gxhjBN92En83nyoc9Ue6nYFVsGimCNWtgpyt8faMFnTYBNiNdby3GUMpjk8GD9V",
  "key24": "2h3VEd2gmGpwLJdwcMcNX8MUFK5VoeBeM86w76QGDzys4WeofRmTkfXfKnizz7Gjo4ivQKHZ7caxBeR6xqRmku2c",
  "key25": "447MTQrbZ9hpMiawkz5n6mY6BfN81Q2YDq3qwMkEaMYevqiTWT6Mcw8gSprYj4mZiqnFKVpNPYF2644cXcKcJtN6",
  "key26": "4U1MDeyw3wfPxcRsvvN9XiuHe5z9ZahYx7x6idFiJBa8Axew3UEbDhM2i6ZsqmWfgHiRFiden5ZjYh8rtLABVgkn",
  "key27": "4Z8aQe9B6ufrTC6JWZ9newLunNkup6riGSuKDqzX9L8SWFDdZCxMkpr9QbGym4GBWJEwLfp4sNwohdDQ8QKFdBbJ",
  "key28": "2FYW7nF7qG4bUjFiDiiL2h9z92iLrj4zd7qNf44Wf7cYNyQSpfZzrhHkR8JhwY4j2UqwpshxGF3hpxukfY8RsBvS",
  "key29": "5nHZsPvLH8ntofSKE5rH7RNtZJkCWBjiNgEAFcLQcQAV7vdHB4FmYDrPCQgbbkYnqAPHu7KKQUCuHPcWATHJREmd",
  "key30": "5rXsF2jPfFNe4h9FfJEg3cgZv9cJBD4QX66WUuK1JJbHC17RXbYn3YQ7jkvYhqaZ6dMNGiD9NpGTYL92iTdQrQPh",
  "key31": "iFKSnckUYH1FXwQMG22FkN3EjpvQMZ7JxfgKm2iMLQLW8sKTXmkfR1XxMsUCz5XHibDMBshxQY1DAdKN7qyiw2L",
  "key32": "2DCBUMCPLaxzigJZYgh7bYFLpM4dSHjt5Cr6Gq5TnqkJ5gq7WzciuL73qijHAki2Nv1wcyaFyseMJNc34HQ69p44",
  "key33": "2Z36XbhhTEPkNkCPiai9VwGN4KNH4TExtFvpZ7WJ6Mjyma7KdmJeLLnV8cdPzmUvQx8wBTNWyT8pypXQxMydxDgh",
  "key34": "kXz3akQfRJJd1svJYNWgrKWMd2kFkmBcDiVDgWBLvJDopzVMHpTrVr1TkUpuKMvCXMSkLQFn95w9wZ8BnhRqdDk",
  "key35": "5W5xYKV7rQiegMzacH182MLV5aNncbFwxwJLRuKT2BV7LJqfKUxNaLoSjwLECpzKyrPpkpaPX7ZtG8Fc5irfvhQr",
  "key36": "5YqhvupN7fcyRQxL8ock9PshTUmiqMmFLpqaEf7kWrfqcdJFb3MvaKL7T4nmkv5Z9rG2bkkArUDw6AJSxCoCz3Ck",
  "key37": "5YwXzd7DeoqyLT256LtXwFUZkBBXW57r1i1muvR1gZAmntkt28qYCJR8cGvLx319Bx4bWvS33Gcj3L6fwWseGAUC",
  "key38": "2ZVJXFzfAf6d1aq7AMq8Gy2KQsLAPyxHTTkFE1yNDU6ptLRZa2FFQwdMfHw6qRnqbnyvbkon58eBfjV1KpQounnG",
  "key39": "3WruvYiAfX1qGEvhSK22EG5UBFeu4JDkmVCigVv259rKLpK4rkntXx3YCFksqHDCivu15Kbug9UX61w4pJEvo3VV"
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
