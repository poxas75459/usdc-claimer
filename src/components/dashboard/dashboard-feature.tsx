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
    "3yrpEZFhfWSZJhLfa68hMZbnqRLydY6tu4tHgFrvNZwVYUQ7vXKzKuRXUD76ozj8oTRgPwUzMrdy8RoENFCGPnci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61icU8KyNi6ARMk3NMws7yvAVPaJc7n7bCTkZaHkFFUA3upTSkxpecR9T6CvisXT5dkiVwRUshGtyeLWEf8YfSnv",
  "key1": "2KM55Lz3bZ8TV51hNnxDMmTgyosYvCSzZDtEPqd1NrTLLSihwvghn4Zj4G6T7jbMVueyZeKKrhFhxwUEzW6KMwnU",
  "key2": "4anKLaSpcQ7RgGPugHsSzJz67Q4k9if5NYh7G4hAci6nHGjH3tNDfwFifmqvtWvehJTf5McdXv3Q4x71A7bZ2pHK",
  "key3": "4TDxeSJtEZZ6icdEFUw8FPeDAJXRcjuy1DyTra8BSJsU4RNwHhUFbiq54mJ2rSN4pWqeoZfm8v54WnnpijfwurGe",
  "key4": "cASLCpw3gV761xep83AJsx2Bm4Kpe2MJNe8FYP26yRWVwjsrTc1i3tfyuH3Pi7cyTCr1QNxjfqKDaLNSN9A5i5r",
  "key5": "396HHiEYxpmb9fZxZqhLHoWrVmdDm7i9xx8sRcw5mfaTSWRchhKLhTHGdeFeFSCXvkjVwe2KMZHRuBS8Rk9aXKpF",
  "key6": "3q7aXUJoW6Fm3JvUF2NHie9k1Rt8pcPAnxxaUWXi9TZSYdZ3ZhieWfhgRgY5xCFcS7HbDqXiV5p2b4tHykwXtWzg",
  "key7": "2cWs9UMYMKj6hsNMwbDq4mXfPZXzMB9DZM4TKCG92wueZfSzS5CokKB7yyUmFHC55PL8EeggcypJnm9SwxB7ZDpw",
  "key8": "JH1Bhvp6RHYFQTkKCYR6XBugw9s9wiPbYpzhAnfxoCuy8yv3L6HzqANcXhTs3RBkZDkq4wD2AdXKg1sxSL8ioBu",
  "key9": "4LvMBrKKpZzCJn5Nw5Vmv4zrh6HMiPdoXX7Q4GFaYHo8CPYeHmoxD8hr9jPURUbm1r3d6YjWy57NywyMGKVqnWy5",
  "key10": "4QvP3txUF7e7GnXGj19cTZZ8UPhq6qEvdBCEkQdhvqnMpu53WmgNMnir8KbpeY3RkmYuuo5KNqBJtN3V6sWbPkFq",
  "key11": "32CUHZ8jVMofEppxejVXo1sck3abY827LCD4W5P3CMYVZF4bvEo5oMiTrad9aZdDekmLuD86B8EV2yQDnB3HgHZg",
  "key12": "4WJR4XL2GRixL1aWCo5bgXXQKcPN5b7v6uxDh3eXDJGkzQYALYs3YE5GDJUWLir6hH3GtsG8MNEnqNPcoqg4d7p",
  "key13": "2tUN4Ctg4yysUkSBSFNDPMx1sNq6HHqCzNMdnX6dGbrgFbuArhmFHSdxGM7s2fE5fc3VpTFZZ4tdrncH2nisjL4R",
  "key14": "56heRBzq2WNJ45R1TFnfCKKeBHsAC5RsBHexYoyBhES2cr7Y2Mb6V1fwamXsUuDzoRDYhxW6onuCgLjqtxv8tTjW",
  "key15": "237TSZGKoMAe7K8Bu6vu6cqhfW28miSWTNDuCpxRGdGsDTbKjKNg6aqRJM86kTDsnAreQpHV9Ym1Jc9MMXACTVq3",
  "key16": "4x5R7WatptFMd1SKCU1BvQZQvtHvQKDEKe84AVfLpftsZDUVmueEcNt6mcPTg7dWioGsaV2G9sHDpcro6PSSMLxq",
  "key17": "5EPtzTSiXmPK9znwkBs8LnZcpu62dos5CFwGXNN2hRCsULeD8MYow4A8Ycg3VKS8u9CKA1FgjGPeFtcC6GXrcaRQ",
  "key18": "3LZ3UCxtYVvZqjXmAwHXzCExShX9u4k3GAazEtWfFhSXxLc6wuFB5B4ut1tY9CKX4wdVz5ba7rxaaJM5Ys78aLqH",
  "key19": "3eFKhx6sktzvPP5jPCDQXBvquic8XKBCXJFNJL23NHwyYEDg8kHd1myADKZTysfyooJ5P9U9vo4AYshF7Vd7Gids",
  "key20": "4utYsE3KH66Uq2XTgoFGxY4kFKmifWvhDMs1iACVxEeWB1BTL8w73KynSqofzB9jQAoxkNs9b1X5U6yVv27cWWvE",
  "key21": "2aaWPHKTbMMH3u349oNupifsoX4zcyB4JKbVzcB6i5y6eMvDALtQaAhsnGn1dKQ5k53BuSkAUyKTRPY3pZpCWdnN",
  "key22": "29pePAr2EEXxiZix7LnWTJNC8iiXMoCntTrCc5h3ZcwakPFfvubfgAmEe6uMCCSgrsWvLCod7EvPeowzx39tmx2Q",
  "key23": "3YT7XPGsvmYyiHJT9ZJmpkayWpRPPZFpfqCEcyY4mhcdkJntGzCkhCJ6hn9RVKv9t5iqARteWCxEzHKVYmFSuJpS",
  "key24": "2axFPtvGqF8LqY7nW5U1VQWSLbck3BKpjRuM7bcS5uUbK2Ay56ua3UHe8hia9xiXQDUjzYJjxBb69T3jj8zjSkAr",
  "key25": "5dbwAaaL4swNeJg1gHxzYQziexVhPMANC1qjGgtSc7C7nSStKo6iHwhCa9qeV9SkJDfhnbznUaYVaWeq9vuZPRku",
  "key26": "29JCcSxQ9ZCHugZjvbj3SKor7VQ7xKjhZu4Sa7aYqLDXbaXmECkMsqbvXFCtmiMsn3PCv9ZFHeskBoPYWvzZiR9K",
  "key27": "FtThWjW8TeCBLfwjqK49QifQUATdzx1frAJm1QuCHkBTo81ZbxdYUhPgXg5PgRoA7NdjjjSb65sK61TBnRf4yJP",
  "key28": "4GjFerAYSyHezBA2kKrQQSAVAUQHaeuqojDHRLwfyuT4ZG8P93EUT2okKGD8HTnPxjuXjAfpGjNYMz6mvfRb7fMM",
  "key29": "55SrmgrhGSgihR5nyNhVeneqhuSfHnHKytvHcSxPP9wZcyXQ2pZHee5Qa1XjPYR8GQmJtz93XbdgiP8TcvBJ7z29",
  "key30": "53a3guyYwGq4J5QDngMEZ5M9V9MzDHzGvVr4zbLSHHNXXTzAmd4mUNmtNVKt71nRnTZ85SpvorpYh6mqsAbVC8Fz",
  "key31": "3GbFSS3C8j8FvtHv2iZhY9pnMRawSsnq2TDA1EsTMwe6DfTsq6GAzTa6oyBLjUPJAtr35HHaFzB1YHjKPAYpGksJ",
  "key32": "45zew9tCWWpV2ecNmoMikNdsbWvuZ5W4zEmbxEWTXi77s4vJokUBe7cBk1UDeRvWTKPJeAYmBpGW1w1hx2LybG9t",
  "key33": "2xmQFomaLhJB41L7uYyGFQwCjUUB4oAMqsuQhsWLKVrWUVkr5jx23xbH3h4WaUGywY1qoXz64AePMG6gyKoUTYjU",
  "key34": "xqj5DG9eFgd73e5rF2cbX6m1yQ6kg8u6ox4BG7HFWQdeY5A2RNGLmCT9MiNfxkpef4ZMwm4NE6UbgqwBsGzdwFH",
  "key35": "3oqfNxW19mMEdLr2fh1TTqAUHw7p8BQyuemoC9CNV1N8BjSTeAkdMuZksh85ohykXYBJ6AZ9a9GcmBZHYzCKe1cx",
  "key36": "3xQZJfQVRc8obRTVMyYQzDu5ijsHPau7f8B8qjvoageYv9gNiXrizWvzA5g4qqPERVQq6vpbjxZ3qvyavh6Pn2vR",
  "key37": "4CAy6LQGjPwPPdVk1aCt9S98NB2tZXrQg7BYw3Lg9XjDLYWdfxGxj3ZkXcF78HtCbXvZ7aXvuHs93nncvsUAFGdp"
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
