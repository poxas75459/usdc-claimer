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
    "2AiVcVcqFoNd1dVK1nUatu5RXzVbSNPwR5Vuqv4GueigFBnpNHRhzGyKg64j5xd6bm9drTxyDkLm42apmAFsirAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owDxb3pj8dv95nwZAHs2TMREhzCc3Qfo5H97Lfq9QZqxQuARRhH4ZNbmiZ9b5Haq3MSAZAV4y4iVM1au14iCMi6",
  "key1": "5H9NE9j3ugid4PBbit9vXB9EsG9PaHuDCrxxZWPqATNso66kZ3icFAZY4eGHQRL4AJ9hBiCmwj3L1qjHmtd9G5t3",
  "key2": "3LDR8TRb2HCU4B1ZETwbJAv8757ktkX298d9jrRKh9ifgyNCM4fTYAVgFqxfWjdu2Yu7M5ayyWnRVLFvMbC6ShRd",
  "key3": "3wqSmoCdgpfssB1WHrYDH8mqo86SMY9G7f3yAkUXYYEsCop1HucP4jW1351tsWZDbBtF8NWjCZP4Bpdj4Bds5Zkk",
  "key4": "RHihXshD5JLCTVh8FDLze7dgSmrYV7hXKTm6jfJBiHnUdgKY2S73EUQfcwu3icLuka5FfP5b181rmVZZaw4voK6",
  "key5": "4ApG28fvTw9MKPRgGGvsFXaChduy3TGxS9PfhzJmTVZfJV1EDttCnFvWbWeeTX42ETeFvMWK2pJzsPz7MmiYEA5L",
  "key6": "zPMfAoxQgfgPb29xBmZpUKZcJUdraGBTpcJ77qwqmhjePpWRW55CQG8RvA2pU6ryYi33PfxJY7MpERuvYkYZnPF",
  "key7": "qfUDRUSDEhd5NpH2KfXDPUHTnKCto9QrriRbT1cvEYHksBQAq3pUWFmft6GuUisN2guwi64V2K2FuKnbiD4XqPs",
  "key8": "bMNn4Y9DeWn5iDevsDUi5h6DXEpjukcoPJekb9Fw94eEAZCxjmt3sbQ6rjWM5RNpdCnQobw37qLFTXdjwAx6PJU",
  "key9": "5rDqL251F7ASYA8LWnF3uidprvNnce2WvaYAEVVqeqjDphjCJ5vxcHCVySbAJNidcYawERvoVNKaUkqu4sjWikf8",
  "key10": "3Tmk4wg6RN4agM1vNjT6EHBwsK6eXNZoZR75ytstNWaHaq7T1GMa9rGHVnTSb3o8gSqWUPp9Q3CwAqoerhZ6DLnJ",
  "key11": "3t57qCK8HXtd9xskzJv7usUD8sFwBYGrJ67qZ9t3CweC7S6sQT3DTKrLoscR7S1WykzFTGgny2bMqRXzjFUpLuQc",
  "key12": "M783WMgswmdqMnHrfUbRKX8iZ1Gx3TQ8H8m754Q9LCRyU1UmkfpbVJNoobtPxhSRJQjdUJiXfPEsskMQ6Xvh6RV",
  "key13": "5shCSNR3fbpUZif5qcsA8ShDGuN24CxkoDuTbNUaKog7g1HQLhqmhpXjc6Jt7y8v5cDo8e8FE5TVec1UjPUTy2WS",
  "key14": "2C6sZAM1hxkvKTEAV2Z9bUnq4LyJPVmGUSxraDXMe1vkiZBjbmQy9ftSwXVtbU7VSvQMtpoWeSN59CKUbZ94fGEN",
  "key15": "3GFjL7zaWQU8twJcH9iSaLp4Xukfqi9SRejxVY9fhdD1evKQrYArx87HhvN9zre4uCrUmEF5XbxCdhRaS8s7Bv3v",
  "key16": "WbBAJtKANsuWk13eGAGCqF5jxdsTECaPqDLwLT5LAgPTWAaRf14pz7dtBM6XgNMa8mNKoGFNQXva3aFaD2D26hP",
  "key17": "2wVeuEPwyVZ6tXucoMh6yQkC7aFamebdqxS6ZPp3asqAHBU87VEo98a97n7R9GeCA1QpbSDRfxKokzB8VuDCfWMu",
  "key18": "MdozAqfTqz8k5SFdRySU3NwyikJs7nUxi9BroAtQUiMVNGJKaCXBWvkWrDNHW3A4V6CrsknyKZu2h4oJHgy8EGY",
  "key19": "4Tb3RW5pcfxjYDThFmJdu6B6MeqFEycH3pstASpDM4JZcbV1W4kR9s7MuYceT66GGd9zzVygTqSAQLYte6iP2Djs",
  "key20": "eXfED6N7SNxhj3vjD9zEDZjTPizZvT11kjMTA65UyJyPhKrVP3YtdY43e6LuYF71NJrMEt9kbYcNSNZuXtt7sUn",
  "key21": "3cMmYGyUJk839K4sJBBoXs2cdVydmjMaFmFyd8oT44b2hjJUzB31tewtpMR4vvqzPKo5aZQH4ybhkFYSJ96fQW9r",
  "key22": "PUtc3LsBJwCuRkShL1sVmmcusLa7JnTcAmJrtvSiVESj4F9RwZLWUVkbwye6X5puR8tPr8A8oFQfGyTA3gfKAxw",
  "key23": "4ykZYU6nY49cTZhg8EfaxEK7QxG6dikPAyxdRLQkvDDe3gpr98Z3iGp9yM2GM3nzpd9WksQmm4GyBLUP9G4GcyKF",
  "key24": "5HK1dbM8sRNsb7jmpKUp4zmz4ekPgtH87DXvG2y7dxVudY1U44gVfnF8UaR3VcEhwKn8kfGZLRDXzH6shmVd8hNL",
  "key25": "AejM2zoBUjpCkueejyqsqsGJWXHgAK1M47USFij5jD27YN77DXDm5YAJwDBdekSdr2m8Y41rNAuugJKqH1m6vUG",
  "key26": "2xJuYvin9aSRctx13arAH5kqcnf7qfmv1ofDQwgJyghFtbRzvDEBCqXdaqL8znrAKZ83gBmxCeGsvebfdHCKSeUD",
  "key27": "3kEvybsAn1kiCpGJ6NC1k8bScFXNfWES7K631wSe3rb5k7koLV8pWwdKpt4mkfBPW7cyVYJtRDWBZGbSGstpbSLS",
  "key28": "YHqVhTjMqTVwVvDVpJTMD8v8KJuzYYFwLFfae2S3MjkfQhzhjnBeB6gLhApmrVcyqku4vEtUg6BX9o5fR7us942",
  "key29": "5pYcSDw1hrFHwsbzQDGYwtKSydUzMx5kDzfXfoqnHsQN4yD7cwn1AypFoGsaRzDUJ5rKYGtbN71Yui7k8iN7knEE",
  "key30": "5BzVieoHXh1yQbrdZKFj72DyViwfoQK9a7ZZzdMCsRmxAM9dCYLHm847bZ4NP7qLDJTDQHthCY25SYMfHskLqSaV",
  "key31": "589eKYeJmpjD17C7cYWzNAqkL1xWZWCYUfc5KJeedZXNrGbewwd6P4SpRZAoi71xLBQ3phVaHXSKqK2P1EoZFQ73",
  "key32": "5Q6JJc22iVp3utfGJWvJU6tP9NKdE33hKfBe7NJBAAS55GiojXKVYimR6knhRdBN6SQbHXwsFjTHh7S1qaYNoY4y",
  "key33": "2FQTC6qfv9BH7YrnWQTfJYamXyw687EDynD5QoA7FnGy6KuKhKUafqYKddEybBEs75cVCThxn94fzmg5tdCuBj9U",
  "key34": "47ztDQd2Aa3b6CuT8HEAbmCPqvsN7E2TwfkqVM8GPzzVKpV7gwa4S35ejc8HuxVk7mmNmyveVuEsqoGkq9e2breE",
  "key35": "2njg3t96e34a1HrCgGSPRV13MCW1jiPZ1tttTDruK6xyYSUgSpspi7MQv2iuf2Syanj66mYpZu7LSneLWajGPFmS",
  "key36": "4Q7JKcnhLFs6P8C1RJfVvKbGP1rKp86kfSF1F7BSomtrpHxbcafrUrZwtm6usTLwSnRTtW1kJeFmjzgSYvwDAkzm"
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
