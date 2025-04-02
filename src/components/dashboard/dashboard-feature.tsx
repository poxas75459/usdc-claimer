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
    "5j6niH9wvBsXFJ3111zQbX13khnpZmzZUrtt7a5hzgzzKCM5yUGQ65MCdRQSfWrbajafa2HSp3zFenciWUvwgxDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56aXEjctoVM7mzNQkX3dM3pD8F23EG8bHMv4ErVfWhNR4Qjq28ULZvVpmqFMijhN1id6CawBCjRjACUt9bgmTrCB",
  "key1": "3sJn3jWSUefoALEf1zeEznJC1NncumpiE3Tpb1UDskL1q8w1bj7yQmxiS674UWxeuZeRHyhfhVdAxJcM6URVyjrS",
  "key2": "5uDHNM6YcFq9cR4PnRRPFBSsbDr2DiP5u8Bjoq5KL4sysC3WdGM5bQ2zRGftR8kmKrS6NpribrErJxzgdPP6iGt6",
  "key3": "2bFAMwwZytu7vnUhnZrhiwh4doCtbSf9K92toKYe8uuAfy7D1EjDL7BuyKKKjQrf67vzpkY1ytuMhGGcc8KV1hma",
  "key4": "RRUfNPreWUD5nqDRc8gcduueaFDnvVYceqFYYJ8drYsz5GMa4jtm3ru5q1ojbcDWEM18uysS72H8ep8nHeKZC9y",
  "key5": "4Q4igie1A2R3ep9HrLsH9pwUd2DokeRsAXowgwN2W5rRDJchAGeNQNQzzu48E7e81iQjs8e4BZTSFYr7NMSQkw2v",
  "key6": "4quPWq3UAwWzLnjTQrgiusXwN2wVckvgWPLzbZEuPerxdtNrvLr1tFgmi1pAewHnwFvzDcC7Q79L8xykobiV8ECm",
  "key7": "3MzspbuTmX64GyC7W9nQ1YUEhxE1X3CB76GjEishkAgeixyNPihG7QXkBZBLnrUTZZcF3JYR6Bg5Hzhp61RJxj4C",
  "key8": "2zE3jr2CYg376xXnTwyTJzhrCC66Wc3NZ8GeXAMKKYpZ5ZWiLwwfURvxhiQ6dE6apzDiDbUEJtWo4U42ejn8LDEX",
  "key9": "yBAQ8R4tEMuXm8tXtm7TSYxM9PKXa5QqjLEUg8xmQc1wDFeE52Tc4o2vi7p9V6Qqoai4DSFBGS6VpgxmQAEH45M",
  "key10": "4wtTYyA7AfakZWX1vjcYEhX2iyjWzDBQhZkaqr9DThwFbJ1nSVZA459TVD95NEkb8eVAtbTGU9xvjRJgfd9j6hia",
  "key11": "39gjFzMRtg8jLj9G2EjoHQwn9eDBN6RR5GknxFG53jbyjvTfRVEZo9zibfnPVUu58J8UmwAFXZ2z2swBVKFPE6vi",
  "key12": "2jsJSCuuny9xLMCzSg7qznt373XvYtKYcr2Vpsk5ZUPB32rPsGBYArAYMd7Br7paLRXhm3zRQUwHYHBZdva3pbbJ",
  "key13": "2DuRAhsiy9cJ69hpgdRtc7s1w73yViyBpFS118ftvEoScUtAdtCZLVf2PR4tb5y7N4FReVxMhwpzYLsEHrLHBfN8",
  "key14": "53KgyaBRQULaPmvVtqTDAfohDaLvEyVegSAdT456zpN2S6gD1E8YV5YPQrDTnT2bsoj43kqeXE4n2WThouJDD9r1",
  "key15": "55o42U4Xw6BFTHZW4zPhfWpD8Vqerzz2V65viPnXp9hadj2gHiTu3icGFt3xDUNrVi3hRCK64Yb58JubFvJmitmo",
  "key16": "3ztX8D9kvGYyTHFqg3UqVDdRTzvA6kjAosxTRN4pUUYzUGX1DbDQwpYdU2tYZBnuKdG3rqJEpgq23w71TFVb4RbN",
  "key17": "3u5GW86vrCFtU7by9TENRxWYQx73qQsZ7sBx5ePftXVMmCF8LtTHSj5gjScU4vV4gYLiUMVpgyaXG5hzwWo5Fvrm",
  "key18": "4yAxC7gBKDqf4UyD7sXMqVHK7MEyx4jkAMAbSFsinxknCU2K91Qv7pnLn1YGXued8PGteWzRZRGsNkgGW3H8YBus",
  "key19": "5LpiqaviHrGECcANR3yBihkzkpkabSDMTFn7Q79hQDiFVrFHUb9F9ThF55ZZHXvpFgGttcRLWJnpVbk6WKAP5EbJ",
  "key20": "2Nh23eGg2dBsYCvj8tv95hUYbRbcZZJ5Dft9ZTRbBzdYWvwre27cmyXWcTwJYxdaUv3sfhJaUQTerA9n1qR17hmA",
  "key21": "3Wcigc8gBxRcBQ3zD7vs3oK2JeB4Ny8Eh5EbVeBfLA4xL7zkcTtmSwAHvRVL2J81MsLALdHGGUbp7dN3EVSjozgT",
  "key22": "3fsVK9ar1MXwx8u6ea1fcaf8kA3V1MChCDRD5TyBG81RCff9uZ6tpK7aqDXF2zLJxFBSoKsLyHXVxD1Am8Z1N6Cv",
  "key23": "5DsFKFwGPkLbeHV4qEzkDsdTeYzHWuLkkkG7dyxsnJYa5njNMG5LtVwhUTBgkt8CFbjtE8Xt3CHWZyjZHZ3JrfHR",
  "key24": "5oFEd5SDBRu2L4aAHT4soCHeXRfjAypJyTQZfAbjNGsNgj8iQLsQVojDYUz5unShyyuUt9v2A5nQh3xwaf4XkVAw"
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
