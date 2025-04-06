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
    "3Q25vGXd8mMvm2LhDW1zRNHk9Djp54Wz5U9Ru2E1GKkm3LiuzDieBuLARpeqSRZmvTG9xKQCTLjgsfHk7YZEvws2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bDLwdApdHGDmNfBDFk6Eir9ZaMNzXw4wjfuUjQzzoqWV6ocLXfDwVSV3o2twc8ALkkoQwsgKgMw2EsuJrEFV6dm",
  "key1": "5UcqixejVniV1iUXBgbre6DjGPgGrqqS3L7GwKcLax6TXzN8iJwYDEyehnxXuSc1bi1E2mfY1gtHqi8f55yqjuiB",
  "key2": "5Wfs1q7JsidX2exPa4YazdW8UgcGPabbhyyffdQgh4U3AJ4Xhkk76jQnndTcpS13JeJ2f8wwo5hfcVpoSHm35hiX",
  "key3": "3bYrYQuduRZPtwdbzxKNa2nn6yq2ztmuB2EDBYFByYz4Rp3Q4QzvfzmuW6r82wjMbLyUJGNtTMGPVYCH1hcLc7Je",
  "key4": "5nQ9c6HZ4Hsi5bwAkJmAqSLBdXnbSR2krKSJHJTV4N5pTozxrJT2GC9bBPjgztdr4FiMS3CC1wDojYeykSQjvsHK",
  "key5": "ZEnX7ZmxbNg9miobRoBvhoAiG4vrHbhEMMSUsufjHm4cDh6JjQjhXs7ifWFg9zKdXrYTiAd44qGtsr4gjavMDZn",
  "key6": "gnrSc4gSBcPQenTgimKnLrUBozmCEyUgo898S6Rsj6fd3XqfoDkrFGX7YsqzE4RJeAaoHZ64ZGyLaK46UWopZVM",
  "key7": "5i2Eyr5YTEgVCkbnobHLv2MNTH5z2GYH3dhbcTYzezg9aAuUwvbm7dAujWwNr3ySTuSeXv7L35wwEg6JtDzHJeyf",
  "key8": "5SerpH9iW7NikJceRXEwr9HUVmhHbKZ5WYBeiBAb9kWtizoAAvHyDExxs4c1UppcL6fyXSVNzXd2qXAQFHmeNA1D",
  "key9": "2ptwfYrLZNDjnfwAK9wi6EJcyhbcLcoGQc1FNTpqKoHKnSzbjX62aPg7Vn53xfd1rY9Cwj7xTzCvnyBQQtrxEHdN",
  "key10": "ZnhU1dCawDYzWcUHJG941EtQUJDVPmMJHBXoTD6qQULJpgKK6P4Z4z6dXpTkR3jqiEw6b2Mtc4Z6bwZT5iPZ6QQ",
  "key11": "5uZqRZoL1HqVQmBAj7NAqzpHQYoVSsXEmLejhHxaXVEeTJwBfun4vfyNZrk3ADb4GaBtPPmDiSKv1Rd3qfnWTWS6",
  "key12": "4q36UwGG926U9V1yYgEUiTRJMbsAD9eDg4fbq6CH5tWCv3RSEBvjmX7xn1N5xyyncUswjnkfN1cEDtwgp2WBpMwU",
  "key13": "5ArDzEtZ6HatMVCRuGt9FRTmmCau2NjcHovDYDQR7ycqWLmsHvin3ZcRzJDZLrMJd89twmrDL7WDiqjNKPmHYWwX",
  "key14": "2f5VEhjLmdm5PrrxKjuZXKRHz7A9XiimFju61JcTquCsef8FkhQkRxiwQ6E3kmr1njbYUYJ5UioCJCk4oGQrgUHG",
  "key15": "X2g8GkXD8mrd6HyGKabaAZjAG3RQuriNMgUT6TT2RJKVxRMxg2yJNqCmZDhGaqBukKa7Rv6ZT8nZHp3BiNAWo7E",
  "key16": "5auiWNt1YYpraNpYnMmRt7KxecpJiaYhX4YuUkeq7w8TyzKPE8NzWcAmzKWgFyH3ZBNMcuPA6QKSUKJFoEtt3avG",
  "key17": "2ij4WxUAoek2gKtRw3HFXbBpdQKEbrs2jRFu3tHU7iid1jZgGKcwTX76edchRLxY1suNCY43Qrq8tYe2BZSep86Q",
  "key18": "5YdjEAEFi7bPZUjWAj3u5FXD4qrB62tVDocBmosXAh9uU9eeihZ3ufRjjv2ZcHcFd8n7j7Vf5W224JLHysAqdp86",
  "key19": "3K6JtT4mhaZqPaZucNbiFPmpoeRFRqP33X9B4Nc8azqtq47A4PRbRnZWCwsqZBJpBwLLYk4N9MmAZDQKs8XGNSxQ",
  "key20": "4oU22qtUaXaiUQNF1GZRFSYVcEyL3F3kv3DqaNjfRQYsSVWnrU9PZQAD3KMFxrox6wBFfTdhM7HSXcKyzAfLSWmo",
  "key21": "3LFAusUMHPA5QjEVhWsKHsmjtuUHjdGR2sAo7P6QPiyt4nmjQKMG6jHHmzeqdKeyUesJhsimTdUkTrEUoD77gNfz",
  "key22": "4EWPNqxBbMbx7Bz9AhuJ9Lgj3wCiadamD3jc5MgP692GDG81WytnHovpusXVJdkTmRZbpKF4prZD7bGKhXDAxnjz",
  "key23": "22MjqFGwxUsxnMxkfyHieW1Cgt53KN7QUpcq3jPY6GdjoEaWNAgbNueYf8ppBepMZ3sFgcvfrMBRUe8sGKZVPS2N",
  "key24": "5kphiT4AfL6BmeYhv5W84YgnJvRm7a9cz4fwWkW538EtMheNeht1nu9DuyD6G6B7RfdGGWUsG5zESKhtnUNWeMBw",
  "key25": "5MMda9z52GX7i2NXc8uN4rxXFEw5WHpXtGbhnaqTpNgDnmNxXnEhbsMsBYiWn5tTeKNqAwKTrDHUHDcBANkXGcK2",
  "key26": "XjgbukFTB72CfE8gv2NN714tL2wAJuEGoMgAr6gCdFeS56weqDFTUEtcxZUQxAGz4Rc7n3C1ePC4GB4X8pyf9UV",
  "key27": "61ZbekMmDSZicMY16GsbgvjtnayRHwMPjsevhKEHMUekXQy4C8uoMVM6ko1gucEN5T8idjWerUthmRHbJcyBBD2w",
  "key28": "4H6XELgKoa1h39JGjEGp6qP3PcNDL3Lw7GvSCv65gjhZnEjTRqQbvKvVac3pW9fvrXiCd9FC6ouLkTLHUyVy9inh",
  "key29": "2cCb3oP5FEJcFkQCFeRDTuRAmA3dnTGtysyRiit4dQzYMHSyhAjaubdEnDBSMYo8igUdC7x9TXYL2FzHrnhR59Sr",
  "key30": "46Hcy5CFowJsLqb8kgeb54w5B1zJ7jXE7wR1gxgUGAmTV7KuNnex2oaUnZNt3pnZ7RALjWaYD5doMZdYqY9YXB5a",
  "key31": "5GJCXMumr96UPjxBdLafoZaoCzFDSFCszQ95aJDohCdsQNRh2jZqyzFPDpEmA8aZSaThn4MhncVpbM1obaEW73TL",
  "key32": "52jKZu1Sdm8MThmaZXsYg8CAtdF8MTSrskp2KxA6r2N6kt6HY7bxwyb7mwVy6SkucFiyuLgvM2B5xzkn95QmYAxP",
  "key33": "4e82zYrf66aWqEusKUtNH21fRSXWj6RGMaQcEwLgeUSVBVYLXv25LQd9qP7P6hjDBfdWWRjDytnp2s3P9gsFdXej"
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
