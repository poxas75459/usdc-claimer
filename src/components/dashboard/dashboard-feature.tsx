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
    "FM7rzD6CSP63FwyWtiNLrCj3DVMaZKrGjHr37XW9LEmB8swfBxs2ZVMK9rzJBb4PZU6Wv84yyRXyHSHFW4VFr4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P2NLs8UQFPwb8rGHqRuJLDVNE74aDgX1UBCANwK9TrjfNgQs36b1qKVUnxoHQb8HScx1pCf6rDzVuUhNGRn3LMD",
  "key1": "3KkMZfZEECQNNKZwMDjrM8JR4T4XqqR9EaWj79obTHAqAQpXmFrV3bxxkr6XLJgWnjvWuuyu9fzWJ7V3M6bgPuZR",
  "key2": "2ZQVq35k1aEgeFmqfoECbVksc9G4um1CQejet1AZ8Texz9GCaz8ZS25TScYRq894nnxwPvcBVfj58pPkbj1pvvMp",
  "key3": "47cZmfhZydPLWqt17zbtUgRLkJZvHMNU7Luis2dTAFAHDZSGosXfu4xRTDu4LtQQ2o12xT7jbBUERFmcTzM74th6",
  "key4": "21X8GDgzudoe4hb2viWrxgSj19TRD21BueYeHUWdkvajKfe1eJAzbZzh4hAthqxBdEffAgan9nJWRwgNZvpNP8qw",
  "key5": "5s7tDsS4rgMMsWW8k9adY8nPXm8tqMDfydTtbNpqSRCk8YBH3HhxiNunwC2cQcYBjRXE5utizwRPhGVyiH4RPRwK",
  "key6": "5tmqawC7Bi3nyP58ds6bc6QD6XHDYHqRHcfkJbvoTmH8KPYWj7suJA1TzYGP1jyNjrfgmRs3z3eL3cmqX8c68vjE",
  "key7": "3zD3ZPYZJYskcYF7Hmh4Ycu6Y4eHbxqx5bXiQybz4m2UBH8eeEJtFW2xLYuPV5DdsUoXhJd6Yy2XVzQ8cn6rMaGA",
  "key8": "4XzV1eMnBL52Xs3iULUxTPjc41p7wR2kLtwBwcKn6Uw5wu4GXThdu6vNvWNuoSfGsMBsLZrr1SK6FMwRTWM6Kqm6",
  "key9": "5QRQDvgNiVJAi4c6mpswk3umNSqNYtaPhezkXGWojQvqobH3TUGb8duw35ZVTccxE2W3BcPS2v8GnvADxHpqPeWS",
  "key10": "5BaWuUev3BTvtujDRXfZPLUjYdQL6AmGw2G7BV5ycg6J28iQyumNBmbdFBgzghNAXUKQ2PneazyYeB3R3UkkCUiS",
  "key11": "2cVqRxg8HFPEtTuKNdQhakbZTe3QVwp93DQaBtSTLNdTW161DHfKtp8EnrXkK3nq5KwN7aRoCDsgTaK4EpDeZzf",
  "key12": "2z433NBRWrJEJcMZiZWC4w3pfrFCKCvqqBuY9fypZ41BSxFvhAcjaFKjfSotR9LQwZtV1161NcU3SLWAZknhWhui",
  "key13": "4HwRURYzmA3RQGmRSo1JystdbpZcWZmHSLg58nWvKvDF4hWkU1S4oh7fiAMuKEYpsndL7jbnALZDLfUq5kD9RqgW",
  "key14": "66orrp6QbWRPboB7e6Nuw82KbjZzX25rLu5qk6aAxyqJ1kr18roozdKUa9hxqJbxp4XbuckEiunAVgfYn2zHvdfA",
  "key15": "2g4PpnkQmx1yW1J7PiV9yW1LZDbpqiWJMWU13U4gocL8FXEifqECoVzAEdL7Vqiy6CGTVZv52qnmaY6aMeZ1nNau",
  "key16": "2CVyPkf354f9PNJDg2XDxRy8VX4PxPS6bMuvwJAikb1fkwB4v7xYJiqdFFSnBEH3amiQTnWgnix1PzZtzKQoPhNJ",
  "key17": "2prpNhTnNKgk5h7DLmqqhbBqwsButh6EAR1ghi6YGCeQeaaakCusKvCT9seXWcSf2vhwWARqi32foRxW5nEnnzQA",
  "key18": "2LhGTX99z2FWVd51gPBzpyyxW5izj32xiazuyPu5Gww96jfHiDPNVJQ3iHz63fW7oZCjNcBPMLZr9oCYvWDH2eUx",
  "key19": "ZjTTq4dfAiTyGa2ku4an3DAdFgQcLDs1mxg8grzqXcGJ1V4qjDnFNezyscYbU2aAMJbcSwWvbyeDQA9hNW9AoZR",
  "key20": "U8P5puLitfZ8Ajsd5ukyUDTUNSnb82JHx6UdRDWpywUf96bm3L1EuABM5rT8Q3skpDJ8tMaqQSrEduWrbcdBeYm",
  "key21": "4t2crDNFq2aqEURcf3PcBxHPGUy5W1mEUuJQG34Qrxmy3rvU4MBFdVvGfPQahNGi18nL9f9iWLeE5Tg13hkivLiG",
  "key22": "3kA38zNq77VAmunpBamTm1hs4BWvpJ8d7WCsePYUkrUfXm5rz3VEouduvx2h1KS2ARJqkMHLiLRt19ivCVSx9eNH",
  "key23": "4VjWswjLtSmQE4DRfsrYtHzehrdQozbJU58uuEnzTe1aRwj4bxtpmL6rbwQextfmWGDJWMjfaMT3i6ojMaN6J4ph",
  "key24": "2KtRVuwFXdQqpZPJR44s9Q6EP32VErEp32rvFqzMsnYEZKm9BrUfQ2Jd1fhegPqNQDNZr2gYU5jGALJ5CQA1nGwz",
  "key25": "4wf8pBLmr89hTkHxeDgtpXzy5Yvz17tr9dNE8wK2p8Uh6fVxKDZU6rNV7qgw7KtcK21KwgBdy8a1neR3KMkPfQKp",
  "key26": "5M57xieezDTin3p7zBVdhuCM4K3nvsrhFsn5f4fjUHAp9G2DXjk3f2Ebs1rznwPxuyeGCLf94Ben6Zk2kM2vgXZh",
  "key27": "SnK7xdV6JHqZp4d7eariEqQk5BP2Ycj797ebEXWUST5cw8YLirD5uTk2JCewbt3T1LPAvsP4wisk4m83ijsxCLN",
  "key28": "Q5qJbKp8b4kCQzVRjhv7HfrxR4kj98586JQC75mR5zoQhHqD46DJjTqjewdJ6nuFqJ1xZATBqwVFn5zBqGBBnPZ",
  "key29": "Q9EQvdBDRfKmJX9XvPJj4bnMH93tcKE2rY2tnF2Pn8EpV85J3dd8xgCcW3FdfWcTiiQCspQMTwrMV2hGbathm5P",
  "key30": "28VS7Wj3HVBVh7XCxQNt5ujA7GZRNWXSRM11w8SazNK8bky52uZWwVeQeaV7Ro5HavwDZ6NxBmWDix9GeQJkkAJC",
  "key31": "3dg7utvowXtdmGJ5y8GevVgzvQCx52fdzBB1sJ4w5LnKd8Xo4zhgQ3HUsgx7SzerNjQ1Nye8HMvT2Yq5uy2i2Qxu",
  "key32": "2r1mEUw2ZoMdT6JYBLqcamoip5MXVRLSutaQQv3qALhgoMkKNVr2JZGYk3bUcJeYGkE3CJEdqL77qptFgvYqEbQo",
  "key33": "5TkaAJXEWibPjRcQZnog3NkZPyVeZPVy3BNCv5EoKmX7oE8d6X3xS8nvzEHZVbHT1K9MYpbs8kdVCPJSwD2D9cbB",
  "key34": "3hRQUTj18AeWdSXbLfGBSCSUBbbHdWtETefYaVMMH2RqPCyu76fcToa4c7WML7gnxqiLngez1BYfU3AGVv8AKoLu"
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
