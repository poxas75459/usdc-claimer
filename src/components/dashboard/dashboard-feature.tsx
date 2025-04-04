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
    "3TrawbZssmeRFUw3xZggqSUUyvfi3o4wSihppWmDVGmRstLP5yyTUWuC1LkBbyTJ3b75R7Ngdk3eSNQHGfRUqnLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qiLS2DAAwAAiacMFdn7ZPGrybWZahpTtwXuHLAc2hRVb4Q4pATMfCnHuxyGTSQSQmPN96SEEEFG5s3wecJpCZSB",
  "key1": "5Xe9cReobPcCBvBt5u24CZ8PrZbtQSKcGTConafowDkqMM3ufhXdRsR4hYTihLqD1QVAC6eYbQazdYAHenGcRwUX",
  "key2": "xdSDLkeXWpjE7Gn2tcBJKsi1YMi5qvjpj6WxoFE2fccJ5TvwVRqLXgsn8nKxwYmKQYtHDbdLij8WNrd6Yx7hq5N",
  "key3": "4TUVDdCAj95R2FuNaVuEnLqbhf6Mbi2fd396xGgh6shAjMDaUNnZp5yaM1kxzRUYvKwcPHoFTq4WEqBdQShWMSpt",
  "key4": "3a4Wh7cj1yFFb7zZ2V1PDjjKfmQGFrbeDhFiaKUEiE3uqz8MLs79Z7Bphkq9gok16LoVzhDS4esGBBCLw77CHe4G",
  "key5": "2M2D6ehJNSJ4PAjUs171eXcEgEn5J8T2hGGiP12g4GsdsY8Rw2hUahzxHgnbMCniV29A7CAGCSYp6v9k9RjjtpvU",
  "key6": "5ES85fxa5pExhbaJ9ZkXDrSFngDppLzuer5p7JohxEW3kKBqJAy7QxbK9G6UNSFsYBqutkm2kdKdGdurcJo9PGe5",
  "key7": "4d1wpQw6o62p2ichDw8p2GAKY8YzC1jqE4mfUJohKwjhRP58ZLgkPJwfQNsPN6WaCbveiD4sFeMV1VRaQ9WN4oAX",
  "key8": "2GumUPNaiJfgDNUHnmtXmu4BUpDv483645GhyyAzrVAHYLCghRuDdvxyEgwswcz6YsM6SE4ciPnHLxM2ByYgxVCD",
  "key9": "5eA2QT6z5SUZjBrdVhJsCqHMJYaR3Fp2dj6YnJGoQfbj3c6pu7zHmHBhY45dRceQsq4fTQbZiskGf7cJvp3Q5gSQ",
  "key10": "J6MWiwLHJWtCdmgqXzzdQENFizYz88zLBRAYGd77X56k6UnfMBpqi7omqhWQYmpgDNnwy7WSEHyC1HN8g7TFCFM",
  "key11": "FU7iyAmFVRv61d8XtJiB1vKvPdDLzujTufRGufETToF2wybSPYH8XyMCkUdi1LPoGRMeft2Ye2fHh4DoqAzNSde",
  "key12": "5Quz1DYaDhmaX3w73VJqpVU7kNvtekWJGbumrbLuuJhYX5zGKhqBxmTaBV6vNky3uJoWbKqYmC573oytrfqdKgNc",
  "key13": "5zyaQNzYcwPi3ELNaDJDWcaB7ymvGxHvhnDXfmakcN6gEs8WNr9Wip6EpecVRL8dW9mMqET8bmM6tSj98kQK93fJ",
  "key14": "4xQLw1zbrY7qArfuS4GiMu9PHSwt2Q1HhgYeroKh7idZzbysfu7DSVir5TAhHbhMjiNBVPt7HsqmpwY4mtGYj98w",
  "key15": "2T4DtZhDqJJXXC5UA67JKkVUpTaKomM8kYsYBGwLtnwcFXxYHhrVa45EGxysTjfkcuCZV5Lkji7WcxkzmvbCBYMg",
  "key16": "34h3gvUb5FsrJVyRw1GVdR584EF4SZX9ipiKkoQFCusQK2rcqrMvjM7GhxHmHxzZAHwNn3Rnny9DAdiNZpwKPZXf",
  "key17": "3goUHVweWUCpMQypSXKqusGw84ckJoUwUhwwELraaRPmKGVUyp31M7xY4c3ncE8xxq8WTzu88K1aQGtHwJD8NvN5",
  "key18": "3wg3edWD4xGdvtyJEEomVYhPrA7wcgudzRfAW5d6auGrBmDs5yjtoShsgRUtXGrfPDgxZxzWK34Q8YfWFp3LDNXa",
  "key19": "5er76JFwVzyHoZfgHqSyUYkBBt8eYBpAXvy7PYnztDPcjq2so7c8eumRST3DWzoBCXraromagZE6PFtL2nFiRPKZ",
  "key20": "3D5T86Ttru1mQCFcwAgoXJZFDWWuWc52EfgkxXsq6XbpYfqqojHc2kvrqXGrfWm7RCREXZcih7j5HNvjPXiBTYCK",
  "key21": "5G44ejwBc2ZbAjJvBqhWhLYrB2b7fwxGt2QdWXPgZqDZXaaL4nk5ZGhnjEGJAh7bMxUCDmpSa8ZtFNHL9j2eC66Z",
  "key22": "3G4YnCy59JQK6EQDxrHWSoXBbawCMqYvKDtboSgrQ5KDh5JG9SuZFN3qVuE6fcwGdhuwbbvTyECXrXuMicGpLPxu",
  "key23": "3gFaLAnmJrcoWdLRGC5gUG8ECN8BM17dkYgxCXLsUzSi2NEss6HjsKjTobzWU63VtvaErXvzT9MDwwvmDiu52tta",
  "key24": "3GWWiHkuH6P4tjpFm4HbLit1sgVtyi9GhupPhx8dLERe9M9jFjt8tMy2W15xnUJKKJZ9Gma2Bc6ruyvGbe4gmBvS",
  "key25": "vtRQEmtimvyGgFd96jKHnRSZUi3GAYWUhWXvQpzJhWoFPHCkBDpaYeSuYuaVvkSu1c9KfD7f6XRyfYjFHV85Dn9",
  "key26": "5TSGd5NcitbxVv4WoVbYoKmxCcH3aFwEZRDAb3mge6Rz7Sm4QxfWfvVJJtA7C95jbjWtShWEmpGaXNCp2SXR4PEP",
  "key27": "4MLSCsMWSZEnPkYKGpDSxq88pFvfizaaAkErJ5WZzax2QVERx5qVNwD6o4iMwu7CqnNoswDxmWRkSt4Kr24fguWS",
  "key28": "3pSDoUNdk8StznAQv531na7cAUCu666Ty5B9sfT3MdrumZZ9BhssJM13CTcvPt5F5FiovvsT1utoxhS1hSFFUs49",
  "key29": "5Ei1MwSb9gU6FSugyEMyjEpLeDvd96sS7WjA8HY6N4oejTyA1ksGA1rJUKJSTvqGEgDHSfgtH1gWAGRTSucBo3PK",
  "key30": "2Sc2D4bjAFXgnim7w4Uww1C6Fg4HWPzttRwZ61PLFgMQes61AE1UQcKkbvrr1eh474Yf5WryMNBz9V4Jzc2Q6MtA",
  "key31": "3G4LBUvH5C96igCQJ48LTx8ojf7VC96hda7qHnrwP7zmi7oRSqw9VY17ZKpQP5nLvh9vQLRFJigVZLqo3uL8uFkN",
  "key32": "2UCxDBoJkv46svjkCSDvk6vWiYKNU6AK4vGnkh17ADgd7nYc2RFH8vh3anqxDyEH4UTXcRwNdrkPsnDKP1tTBMPi",
  "key33": "npMYDYmrF1hZgoJN5GpLh67KHTDZJfqSzg9RueHNga6ya7SUpRdMznHC6t5WZcPoT4ZELgDVhKRwsTur6SB7X24",
  "key34": "3jD6gcbwX4mkoMQm1JaeirMx4N1bmu7c8D7xYbBxmXH4rYC5zhyBcgFRtbRjhohWPeWqcYRUC8EpHNgEQ4H2eAnN"
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
