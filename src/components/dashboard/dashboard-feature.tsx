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
    "3F3fBtiswnG2iykxD8xs6UZs23Rpe6tp1WKZuqf42trWX41K6CyQmK6xGYapXxjzaNUDQSyZQofFKsnesQkvMkRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "533ybX3hP1jr6t468ejWbJDwPiGvDw6WB1Qjr6t1ZnuwaCcWdZJg4HUVYsx7QjcDhtnSPrZ63KCNmwCSrPrxCyPQ",
  "key1": "57ZgvGbusNc599NQYmDyiyfRavYXbhhqxB2cbb7gAnKjsLRWzQ68CeoZgh6EL9Xj9S9vAcW53UMBeveKU85EvZxS",
  "key2": "56pjqSQkF5wqCyZkNR6oGcxUH37Wa2JTh5R9gzJJQDnmnUEA1ELw3uGcNR6Cfr4W7oNTcM4sTNytaVSLo5V3mZ1y",
  "key3": "4BdaxrNoZebDGeErLLJ9J9Vtj8eJ57yNZHGd8qaSE1ymMf5zsaNcC5vuTARb9idd74m9NLHEpsPFsyKJzCSz17z3",
  "key4": "2agZJWJWCUFsuvafc6yCPRv7MBYwxFMDpzdugoUzGsdvGSrdbWjgechwBgD366FPRvewHzmRkHHFmrpkgmoHbWg2",
  "key5": "43RkjzLdk4ZGNKf5YHAjK34wGHJLXsnx2tTeQLmhqKULUALMnSL29HKZtVxr2QoKpCpaqsiWyPCMyvFx4DnbV2ed",
  "key6": "5gDj7QibsGXCqC9wtPAsWBx5ienNn3mbnr3fKNm59D2h5sQNbTxMk7ryvAgaoVgdk3MQXyCGt7cSTtozy2UMvaAV",
  "key7": "3d3E2tkNXQYvpmv7r9SHG7oopHs4cvsw9e9ZtJz2YveeNNM6FF6NRLMXixeknRkwLx4bzjwRdh8oRczwGGenA5XG",
  "key8": "22vW2dmWbtYEH41VdM5ybRWMdzSYoi4RUbUQyetMmb4YdwXhdGnXozTk7oXc7KpbyjCR6TMsU5XBkbJsWJ1hcruF",
  "key9": "kDcyF6ofULhch5tH1kN94NWnkCCpwM5kYhRxLvRoCLt755YGq8iLWYXQUBDHiJD26cgPNURNtGk2FY48JR2nP1v",
  "key10": "2DA8tPXgVBjSBNVZSiotPHb5EJ5thjW4xdDyGGsuRvNDkY3tTpxfFoPHSYVtfHu1cj88DHs3Z64XtoMT3RJ8sVyh",
  "key11": "2sj3tqWWwFzcUtPDe2HpiDQEP9cTsdy582UnXsDQqyqKFN6zsVJUGAnipHy3PvnXUZeyc6Nv36RpX1bzPVW7PUTP",
  "key12": "2Jbm7dQTedqoBooMoYX75xuDWxTXEgmcRsdcc8nv6YcMxh1xFRs26zHsgZrQfjSBYDxUVc7GnC4v9Cny278M5ziG",
  "key13": "kbpbS5mNbxhw5YivjMae48uZRs3z7gfSK7zabxz9igHiNCGxWPFL1gQcmsZgVSDTydcATk7XXcbUQKVdLp1EwBm",
  "key14": "2JfAYPECvwDXjZZWUH1BQegMaHE3y1uFMnkL75s9GHDAJnt5B71PFZ7UDwN3HHj8raRhkSqqEMmZpFnXLGhxQ3VT",
  "key15": "4hDFWJTMtHYggfHKc4E8JW9p3VLSnqtLTUCXrVJzV6KewNrW5KztgPUDt7qitF3uHsjC6KVxV3TSPPy9kjKXFbQ5",
  "key16": "3V42RHJdXQcjK9c2YA6G9xknPnZoB298bHmb86UnFRsJAW1T5f2HW54knHXToR4vQex1gsgcZXASLhpLV5KBS6Dv",
  "key17": "3DUuLGHWKYVQMCQJc3r2K8sDsxTEBea5iyfhqFve5MEwwkvHvXpaGNQcEYaBniBR9CmjvbKZafNRwG5ebteVc8ps",
  "key18": "Vp3xUXWSvBdhai75YqUFivigugWeih1DQTqcaLwJq9KVmXypUEhiP5ZDvJ6LyRi5g7rR1FKkuuf7PqSWd3XVHx8",
  "key19": "2JQoXn6enPRfMygEnRjvcfsFYQiM7murKqqTXChc4nCosK7235evnk5xRGS5ZDZNfXrFZqWUrXDsZqHBkEb4GrUz",
  "key20": "3UhfXQVf923mhec9Y7kiAK96w8tSdkugqnhr1kb9SsbaprA4ee9w2cDPd8cqRCxdU67JhWZfW1PPZ2DB9tKFjMCx",
  "key21": "2jfJTrGM5gdwAnYFS99m4P1dFEYmHWqvVARytEiwyNXj74z4Ghz6jk37diJy12EWS5hbzZ3pFbq3EzTq19xMdsaW",
  "key22": "4gB8spDUXHfzmWswpGjoJ99h4RuXp4kJqfv9L5qx8EbD6Ve8EapTjAKcnyi9SYa7AitpTRA7fYXtcrj87Bxcnu2A",
  "key23": "2CmGvms93aq4CHmvqnwC7P58qKGVC8EsdQz4Dn1pxZvvT9z62HXPshraakMcYuupPGGyoJVN4sdMvPQwBvU5NdB3",
  "key24": "nePKDJNr3B9Kzx6LmZHzc2U6skAC7WRWZ2p5He3XRXmSEhpgY2D9RJUP2yeHjqoVrtj2ny7pwybSVpUXfhAUxbz",
  "key25": "2Bp7i4P2upktXVCXkKDHSoZer1mBEq4DDHcCNr2fnqAnfYtyzDeGzyLRPcPAdaNysT8twQE5jMzX4pwRsLhvg2D5",
  "key26": "3iPgqdGejmPtNncC83p98BWU9v2JXnAPDih5CfR73QxMjayXV6FqNdwi4d2uQ7HzH4UbxK9YKKggTzhy2vVtEjGk",
  "key27": "C3aKfrHFg1bzv3Vy4j5KWD5xxNvgShSiDFt5r9YLTHBnGB6cAzkG58W2NqG5671f6DjCE5srKMG9YRRpvT5XXnQ",
  "key28": "5TGycyBwQvDWd1UDJHZuDtHFY8jkiwvXnBMs85ZNiAfxuhoNwgAov7fU64QvWDVZgzLzjsiZHLQXwEjySBL8uDYu",
  "key29": "44cUfapVtEqPiqM3smEtVUCtLucmcrvve1m3FZ15GJ9NR7egnMf7LtFKRWr93AqRAJNkCD5zs5F38T2Fs89FUmtr",
  "key30": "4FjBrC8RFKdXc5aSwYWrcRusDjNqRyUwFtY8RxDn2XgF7drAaYA4iEsYZtX52FuZyumFqrGickxmc1trbCyur1bn",
  "key31": "3dU4NNdQyzNeMga2vqkuB7H4qCKBsnv6fMmX5wRFanKmYBTkTuYkkrZpZDteo2RxGMynWnKGjAzPY2aqDHtxGA96",
  "key32": "5ccpWo5EcCWHXt9cyPvWgPvjP3hJWGytshjaQdYD8Y9pMUyLeQdsDToQvKDXQEiou5rpUkGESG82NwH5KV1yQu4D",
  "key33": "4VTuVgE6eFQLbFSx1WMmQpSgxcQ6hE8kRL4b1Fnqsd2Tudkm65hhxmiSw4ADPvCJMG9PZoqdR9WqJU586ZnDCyTW",
  "key34": "2DBgajBpwD57UzhLWbNbea9cPYttCg4DdK6dLgd96T6gLUAzR5yJSd9xv6NHMEVTVp3W5RX7nN96sJEUzNd4bGaw",
  "key35": "5bux2R8ws5z1K93uC97uXJAqZY3VRsS4BCpLNHSJ4TZq2wNgNoB4fLjsUepGtzsZQn4T2ifLPHmXXZqfC8nn3jNk",
  "key36": "2qmWiRFeXfdoh5t7r9KQMJ7vtqLUCB9hUxByADv93itEBmPe7VBFpbEoiNHiLWmUxuNgFkKQNjzaKZFxJpcTCQTR",
  "key37": "2nfjFv1X1vJFcFTfK7J2AqgUF4vJejAq3AheTP9RQL2yZEyhEuz7CTfDEoskpY19a7QhDhfH2CrgYMK9DnmUa7hB",
  "key38": "3xKdQRu4DddSGaJEBjzcguAzQwjc46cURtyiRHsv7VjhzswsA58hV6v4uejXdZ8iyVH1MxrTAF69TR9XPyfwRbre",
  "key39": "dMZzj8TwppXUaAKwFxEpzYAaFWQLcqv7goQXiKPPaQrArRnJoNoyN4yMUQiNvF7Q6RSr3tjj5k2gVvG5qur54ZX"
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
