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
    "LHmFcg2WXVeHWtZ3Cj2QYma5jYmDhf32D2px22cBVbKUd42pUSwCxXYGmbZdsGKNcZkh3KmQopzmVXXR8y9cTkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LWATJ4pCRdJcD3zoi3pEnMkcUnYtUu8gYxTmruUsm9w4XUBzh98W9HL1iNVHHjfXbYPvzQgpdrRt63q2FmbGwVd",
  "key1": "2oTfe2fDmYo3MVQop2bpKAWyQ9JCY7V5Yot5Xf4sG7JQ2R5wcERsw9udDJFNuqKPMD4EEFU6NWYjFaCcAY2c9wnZ",
  "key2": "jJRUqwdUuheowtLaYPfrU8xtXCfhxHA7373DTxYPha5wEtmj7MoC6TVY8eJRWoKN33E7TMe4F8vR81Zq9oVHnW8",
  "key3": "27WazopaNsYeayYYai6HGvGqR7LcC35ivyQCtg5tjZkrTM6WChQ1GATBBFYp1k4sZk8LNZk1v8EYra7m2Ze5q7qo",
  "key4": "3kothV4k6an89UFCqFDac7qE67Vsfw9mpZkF438GTVzQZQEQhr1bQwLcyB5M3TymvtwkyRbQSgW7HjVHzu2yUp9F",
  "key5": "DKtLdNWW5oqsFqzbXr5oUDGL3vJr3waaA7NvBWW3DHrh5tooCXQnGcyz2oRZP11s6DUxiVFk6e7B2vFVtaGjLEu",
  "key6": "5SxjYmWzN74P93YVS5veLXzd8n2EKTENNrUpGA6PVWqbeLuJb2NoNELHsRf8WwvBeAz7pY5e9LfvT6rSp12mTdLF",
  "key7": "43pH3Z7WxEyFuvQsfFWhmpA2VKXWaEqWLPoPGmtPzHCjcAgVgYFar9Qu1ZwA2dxTeqW6CDyMT1W6335bWwfbfjWr",
  "key8": "2VG8kPF4DZ5ffQGEs8fRS69vWNCUiDbN7wrQDGxGReA488aLaYx1vYrMapH2MZsoP7rSbCUXXtNucX5yQgoQMbP5",
  "key9": "23oxHPXeUqPJYmqawS9Roi3SD3Js6JtA9qcKSHmELB1jDjiLJVPC2fxuka4AGVcfj3XcdMYyVbz9aKu7AxzZCnYb",
  "key10": "4YLbRFbWoYrbonP7Vv5sgYn3z6ecLBdP2xbepbH9Q5TUBcv7vjWA9Wqdp1iRynXaE5kS3Q7UQceHz4fhZGdA4pyY",
  "key11": "AnXTjQp6VUTnfuYafk8u5M9m5TiRMLBzHm9Z4h7J2zfv4tEJ5YVPXKSdLHz3vwAUPptoU9ckPqaYVnfA78vzxQj",
  "key12": "5gawwNJ7yjU2CW6CAXvgvkExz9RVMR1cvERoDdfeEzLBDuYcAxZNuLVvoeKBzazGSgkEFRXj2FffbuGN3UwXda7s",
  "key13": "5yho1nb5sHd7jZjJyizvDwEWbW8mzzAKxon86kMNpWR9atoLhsmmDmU844zvDsGmB9nUgBWGXXCZMwJWxoCJuWpv",
  "key14": "6JVsXR66mR7ncQGEez7AXXZjpGTDh2PrwFofWzbgCZ37kPjc9jSJEZ75B7T8Rm3sZhwFUwTQ6jBFZfDL2kdUSpw",
  "key15": "3yNcqJkTjY6vstbPCAYUJbdB3iwyS2yi3UGJTTsCaa3Ur9gWGX43ripwr4HVJ4KKLXqv4k16knFtAy9X4Gzn5wtc",
  "key16": "2o2WzN4faHotG7YW5yG6vzSN6pYLkBQYUTKeC4Z9xhiqyqqPey85uGrDfFsmXYmdtACc9LrEB8gXu8giaKPrbaUY",
  "key17": "549gAxvqB4KB2piuscaaXLfeMd5W4wTNjG7ZD4CMgTuYzU2eUdWQiHkaSTtmu9jVCDefF93XHywPrmuvn5kPDgZn",
  "key18": "gxv9M6tfQkUryPxdCCgMUgDFnKKxm4E7MPRBVUFSj4VLuPe2jV4F7EDFG4qhzTEK66xgdSdrt1TzFH92JWy5XKc",
  "key19": "5HUxYhCk3aj8EDkeEkWY9iUxK1gm7LzFP8ubm5BwP6q8v8AbeFobP5o6VChAKH338838ZGJDxkyLKtjYn1ViZSb2",
  "key20": "62Las64pXYojCPPi1QtagK1yYTfaRuQALAcEycsTP1YRDEuxYbNqw9dY64iUjHbQDTns8MJ7uYLtYxfzc8hwgDQe",
  "key21": "4uTuyhcVVhkQAu1Tq1BtGh1uER9gPMn3eR7eYRJZfXY9TbxcmnvpQqoHEVaMzqkmwsLU32j4ycZM8g7UgAFPWopT",
  "key22": "5i8kiyAYDhXtrvGT49HhFuzBmRP8So7a1jxtfoMmSrzMTUhsEVRVUUoiYztESonJ9dHfziQpHs1d6DFAThFqiGfS",
  "key23": "3sLxXjEk5PdBJoZuqv2vcFdEivaaraGeLiiyzP3miycGeLSkAfqMBdkbsxWBH4tYwsyjGxismELX6oKrihfDWFSR",
  "key24": "58Zj6iANRQgKcCKwYEG2zUvDeRtweFjge5CGrAbB87g9EC3tKkdKYEjrnqyK2C35epPt2USZiSM8tzchACycNDK2",
  "key25": "5BE1K77HXbnHpQSULFzgAG8Hi4gRb7Q1tW6xcG6XhB8a7fRQBJ6B747gj1pEWZcVBGLc18wvq87UesQLepYfTvQZ",
  "key26": "5vhAXKqvJ5eqsjCUFFM72Q2hCXgEhvKLwiHqeKNjNseUDQoDqzVTgiWetX7AxYZFAQ7KWLHaQX5QHRfXYiLa7RVk",
  "key27": "2LNcxYBu9mufhNsxxBkFD2xYfPjxyHY38KJkWLR5X5PXn3qZKuAqHe7ndbrnwfUgD46HmvBtEknxsUnsA5LwarTV",
  "key28": "36ocYGysPXg9vdQDcixgmvAGw1yzt1TNa58k54nUdTU3AmDZC6ixKqM7QbsGmpsMUbgaRqSrMnmUtBdWKhhMDvgS",
  "key29": "58fmWmehqaKRKGXVM4PuXrjdAFBp9mngi3T7a5QvXEkCCE3kNLdUeWWufVqJ9MpHWNMJzS1fz3zijzneboEadyPC",
  "key30": "2yjBn7tRgAba3daU2yrY2wrNDWaMfsQLiv9yrxmc6pprUQWgVrMn4xzp8mabGjQU9rxHrmBgjQouizSvPD5cgENr",
  "key31": "51cNXkhCJxLQSo43mrRmJztMmmvMcXNhHvcDTeqMndHzMiXjdHrCe8PWW26qqDrgGCALxsCk3kD3qSSVae3aJYjc",
  "key32": "QFUhiTDJ9HyPhYuXJUJgRYVGSMy7fng9r9QJYaiSvFASN2L7hugnLuRef8d3fuozLq4a2bgnN411XxVTfNw4vg4",
  "key33": "2vPfiH3qUQPQjH3S7f484dmSFTC8rsvX8uxSrFGwpc42YUb1ethcQ5cvkTG2rDQPcDSMBnQArdQis2WMiUETZ4gL",
  "key34": "4tw8kVC6mNqVMs3DQR5Q7SKshc7zDP93KpZDrYGVtYs4GLjZXvDzW29tssY961arurycGAT3ACawLVrytB4chP4j",
  "key35": "2yUTRi7VzeEyEUxw5QAnzZVP6jztCLKWYLX9qzbSxokZt5ZoECZktTwtsJNgjLCuQ9qk8zAKKWiejqhAVQhQXJf",
  "key36": "4nY2ugSTF8nXEiAwGipJttsjTEF44f9q6BSUqb7exHtDDQUi5mNUwkjNqRiPShnGKry8as4SvVscRjem8D3Aqqk1",
  "key37": "29PnfSpJFBQJkbdKXQ1UMgT4XvSXR9HVi35zYJSkQNEXEpCs2KCrUy99PvFRQrzaCRixcTn56wprm6pw5WchNu3V",
  "key38": "4EH3e7jvvTJNserorZ1dJZ98U3vsJS8eQ6WfAy1rTeCC5pLr3V3m3ZoFETbJsUpS4fFHm8qAL8g61RFJ7LgYjLoc",
  "key39": "KXfdATTgd6fVUD1pn4uzgbKGXqM5cXTVHb8g6kUepUcMBBWY3hGzjA6PjzHMKjgHxYuegEUKaTMWnUg6F7j3gtu",
  "key40": "4BCpMEky6rVk1GRfMCQb2tSJmytveRRtTRhBfTpcTyBBZoD6X5UeEAJrm7eXX32QB6vjTjeuroQvYjjECfv6NC53",
  "key41": "5eJ3KK4nT9hQX6RaL6C8dNG97C8jAh7GADnqFpnmP37peLkiN8te1vo8Hj6UYexAbaLqM5FWw8veuiGewbuwxH2y",
  "key42": "4doStpKbnjrVPncEpLaCZarTsQEy94RUWvHbQaCex93PAT311FEH4H6mZRQHx2joN9K22EwXvxQnL3FzLPRdGxsR",
  "key43": "3AVNzMXDoSmuW3BBWYVjoLwogResaKUWLtejmv3nkPbgext6Ub6vAzbfswbw1ztbDbsThM4jqeko6A5yCs6iMPAB",
  "key44": "49DYexBGd4Kw1VDk9wmyXWCzA4LJpUJMihXa7sveMhGtEjJmYUVBvb2UXdox6S5BUFRrUeKYCMEFZRhwtAH8QGi4",
  "key45": "5NRQudhz3ZpJug7Q7YSXXfoMscR8Gn8NRi7VCEStYs5744rC4gdp71hSGDvgRHzZwbjvSiXJw7y3PYcgkbgkv5dU",
  "key46": "4WJodoG5UQxxEQAKecmw9JmP6Zr32XdSyeVDJ5RZw3bSFzd4S9uKL52H3a2gMU1JNyEdZxd2eyjYAR9Bw62qBga9",
  "key47": "3KaH5Jt6NS35RKsrZY3WNueKs9BALMWduCEr87VgS9sJekVurvu4S2FxkAxgeAMiuKaQB93gM1CzkZo1ki3yjGky",
  "key48": "3N6dd2HKaoTKyttwJNjMfTWmLW7e9yNdqDezYbFwXChtSaEf75LXf9KJ7wAnLUT564JjMKPc1byewRpYdDHWvgMX"
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
