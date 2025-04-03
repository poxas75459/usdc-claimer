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
    "4Y1FauRRnEkA9u9RcJw52PayEv3dnw3rEaEqZnCzzoveETsCPFDCCxdNP5horVJPpLMF9VPM13rqQKHWzxjyJZBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FYZcPgzJrEoxc5dD9s74SKr1JM72vG68RG3Y8ATA7Ld9U1B1fdTPHXhBDxy5gDtNdkPhyMtLdkTayVxiNgG9fKE",
  "key1": "2CXQnjPKMpGvortg41xtGPuRnSUoQGRstjPQhUJF1kQSuRfLo3aeotKcHLS3GYm7mDa2zxCehVHWEy5gvo3jiAX3",
  "key2": "exft8hJEi5F5k82VB3uD63F8rzp91vqYbkZxosG77k8J6vQWmcsWvvD6bM9fdyfznn1bLvV1NhhU17XxtmALvaw",
  "key3": "4bvZ3Fa8GgPhoGUtU3wTHEpQ56Ed5d4psgkvqaxhkgLKnH1jdZXNpss3Hz7nxfe6n4UjaTjfm5D6hoZxGbohDUjV",
  "key4": "2zd2LnPnsNXuM5gwFDtyC8oQfEyJd5DBfRZWivQkJzN2fJ8uDHtu7CkSATTmWdC7wBaFFSCs3qxfXaSwYu5chnsZ",
  "key5": "3QznweGbZKCXb9mgaSH4HGFPMz8gT6SUotjrc1AohQKCQ1rCTaYVYWBwSi32a3DHwgHfr3TUeDiQXYfSU1ntQgRQ",
  "key6": "42b4TbXmBsWo2QGCFb9zhKnpYfNFwkzf3jkxPJHExZybsTF94dzVd8eeL3vQ4xYaiyLbCNwad4GQYx7N7psmFtYb",
  "key7": "2p6Dhe5WUsAmUtn9kGaKbPjeH8MqK6yQMC9dGRnaFQdhmXcHTcMX94ToPubyoMwvkvtCzB4BgyB552e9ajB5qWS",
  "key8": "4vwnyCG8Yh6S12wvYhrZeuGrgivVnvgjDY7u7N2LqSipe3noP6C5aUVP8VCpVoGZQ12bWqgc7UqZ5QrgG75avZpR",
  "key9": "4bxpSi1TKcFkoUmPyDmp71StakYBV4EZWN2tFEaPek4K99oQ2tEAmT1RKNvxyFvqvNp7FGqBSKav7c5ugLJAdqwu",
  "key10": "35aHA6XTeiQevkS9g9mKH1KfxenwfnNj1RDPU2ZEyrxVHcpyiXxvvXYsEkjD1JUFi9zcXzkPMYyTukTd29vZPyKq",
  "key11": "38fi5e48Js7YdWZ4ouHSk9xvpzswsBGGmMuCGXJDUYB6VD2i9zAdFYGsNTDd4ws37HZKjrrw3EoA2TcxP8oechRJ",
  "key12": "3oAjVf1Bxguzri6gWqDrZatMW9ZQQjF5YEhRY1w9doGX6LypgwqT7o41mBan595CtUtEjXBdmFN2nb6TSsiBDLqs",
  "key13": "2kB584AAwoH5khCYCFHfrAKiX9ExUfEZMMtK3PhH5LeVKDoa6awJHkjRpoTbacAGnMJeR1ap2fmntjdNj7ebEEcQ",
  "key14": "53pFs6t2mTnPtpthDipwwC5FKZTV7hUHFi3ZXUYT4dCtJCtXd6KcfotBXrGpKDnsvG7kHPzkNKAD94jwq3AcEUCb",
  "key15": "4Er9HA4psACuoGhpDeLJL1pbQRLdsSQjLJh89oP46VTPgmQSdfVk5fSzHne888o51BqpvNz35zGK3Zbm7SqSVqyK",
  "key16": "6d8MgvGxyzGtbDdJjTgrequefDDbtq4NQhR7Uv4dz2zayJER8u3wKCCYsCED7W478gm2kRhYPRQt14SrLwBq6Eo",
  "key17": "3DgUKifERrA2jYfB5RvrACWGiyKn24Uoh6KhsFGkzAuL7UgQe97j28VJWWS3HGtQ9xRTsu591aaruq2ZQY8RWmz2",
  "key18": "2uJ3uxSyPF9mzbgeW7QuGZcqix3qt5hjDrYPX5XgjPqMSabc1WR3nL2zEHg6CafMrYMyx2yWPhC7TBXZLq9SakDQ",
  "key19": "5WrQxpcjFPonYQ3x6GyVZYt96bekNTvWDgZ5n4LhWJasdNQ68EHa14VU29eS3PtCyPL5334zZzrhHQofEe2vyFE1",
  "key20": "2qLmUo6jZhD4M4NuzyTZhmL4oHAzXHuJSSfiQTmbyQHMUaGyRFyPX4VDi5QsvmYtJcD7FD7DjxFwCF4wXHDMLVfG",
  "key21": "hX5EvA2VSb4nWEV5UVvpq7VwZe2QnSnAVNwkRMdiGbdkQ5eRAcZseH6M2BuG9Cdw1STmZb4MhqmpPNZAkEQU5xh",
  "key22": "5MVY5pBPtBd1zRd3rVrAj2u7vssS595Mafo7rdetTvmwJrNgsjY75FUBveD2bYVz1Ykb35XJg9WEY8kd3GJ84uH1",
  "key23": "CGi7ZAUQfxwXaKXkkcKsdRrsp7Uewa9wMaUEVyyGFnMt5r4WjJHps7VVeEHPWKAQoF15zyfvFMoo36m3bjSUMRQ",
  "key24": "2i6MmeKfFfhXhJUvin6NPtPZ2MFAMVXZRZA6sywqeeaJrJDr7horhAiG7K92TFCh8GPycguNZYRVQa76jFw215FY",
  "key25": "3hKJ2W4cJhUSXtbLe1NP9ma79Wx13kLD2PnGPzDrfFepE21PZSowKdvynRSMPzTNmCgJPA5JAkqtzPsu9FvCEGHP",
  "key26": "5c82F9cPfYrG6ZCWFk7BEnWAjYafUfWrzRekyNJWZYeEkEMqYCbm5NbHQAVxm1zX5aqhEn8YfpeCrP6xT7sjXkHU",
  "key27": "33dv8JGsVYhoJc7aCMi1xEYNXqjaZ1W2QZ6nwiQY9RHF1kXEkizrrGP4YMFjEFWNWjmQcNKCUbLGoz1tGfaUWkS5",
  "key28": "5r3JCDPMHA2P52GeT4diaF57SXsicRYr7xDvWVrxijjgNY7sEpYyYjti7BUberbNsizXhHLUWeNKswucpXpfZKEb",
  "key29": "3u4LgFh43ZXa32izw4dvbbWhLqFZSGMjT8Uy4M22zSiMKBNi5wgp4uouGntkBrTgNdVQHF75WhkeGeskPYn5v8mU",
  "key30": "5EUTb8qdrKkDRhzbQMwm2DBsq2iUfapXnGEgeqGGfMMGxDipLArnas1YCtse3KVoVQWv5n92Q4R8R7cBqzD7unVB",
  "key31": "iqiUWgqfinRxEr7jyUKRQdSP6QbqHSwFse9dwmZhMcS1iGwZZiNDgNvLmHQMm9ckWbFvVbvRGfPz2ChUbGSxVJr",
  "key32": "4EqQqkhwZHkea7q74JaybuRNrqJ4esdveUF82Wt74KUK5AWaoPvEZHAkGyqHQGSf3K6dkCg4Q5XiNDmFa8RdZvxZ",
  "key33": "4KrXkyG3JjrbbBJA8ydyXF9AdrSiepmvjCZjdZcU5vixYUjACAGHUmPqNetRWXqEwnT9ELtzNHLSSjtmqMwRW8kA",
  "key34": "4V3JUkbvG2SXcDqjNGB4MTrrYWQhC9rTMneRWHGqewbWKAi4ECHLcM8mr5wbT2Wxynqmj7E92ZU4iyaEkq1WKn3C",
  "key35": "3Y6RioAoaiEj4tASDFuxf6NPwHft7WppVknNkRoUwgnrL5NVyG4SWAdUf5p3nSqe5bcSsAHstVpXgdDx3bRUenuB",
  "key36": "2Y3V4a4yrNN5MeVGm5YWWEpFgWASjv4Eik9eGwKu6ZECC6XGcT9sY39RKSZLsEsmRPjjkXfmgq74BPAUvxzayZGt",
  "key37": "4tVFyJUueLYpNPKp54bX2QSo8TedKBzXwzW8EBBeteTs18HycEzon19d2FhQEZmpJCrpePQYRqzDGFky5w1xtyxp",
  "key38": "5WqpVFHufKFmCwYfvBMpaFzqR5mWaULiJawFg8SDXBpV9iS2zzvzEC4KFyzrkpLj8hvTrFXo4cx5tWaSRrPcAyjh",
  "key39": "5VZp89bMteSJvnHUz9ZnPYwnhMjM3XxvT469YbZtYpJ8yBCN8tupfFAfwCgEhNWVQGoErtfh5sURCZh8aKT7Hg9x",
  "key40": "5nVJPqd3UTeUk8ZAy6rZ5wakoM7NKLXYW1owWupBXMxXCxarzyNdrvbbZRzF9QcyHLcX1agFSv8ir7uhDFg1yxwB",
  "key41": "2yeQ4XyH4Kd7WSh1n9HAtFb4HwTyngVLf4p7dMCbBd4KuobnG54mzccpS4KgS1d4rgAKURPR8Uy7xDWdCNRUXUWv"
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
