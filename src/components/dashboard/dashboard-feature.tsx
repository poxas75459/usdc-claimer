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
    "5PxQnY4epxYawxjb1QvbK7aizPG4McUApXGpkPk7RW43mHBENAdsnWNxbRka81R5srhc8djzwRPEgAyfr8bsANRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Vv52VvvX67X9C3mzUBa1upwEJpvZNoQEuiE85Yo5NFkjtGEsh8cKoaNzgw78xD2hsB99tBZVoYHmVm64L2Bga9",
  "key1": "2iuNyj8NeknXRsU1tCugHRDdGA853W9VeGpeMyiN8uKZaNRxaQqXJGQeFBsSNGbXBeUU1cjQXijinsW4BMuKzmpJ",
  "key2": "4VzXwZwJ6iRFUd811WbHMiqbR5dxUma6RiFE4oTXv4SgFxusgYLCABtCk1vwu99KmvGywEHWwCmVuMR6tJMJYayY",
  "key3": "3CjJe6KfbYc1mLRfYBi87MyTy62AUJRqhdQXf22AjjjQMaN9JfMdcXvbPkvpxAaFo9VNDwE8a92k2goYQzUF4dB2",
  "key4": "5zPU7wgC56nph9P1Uq7Za57FkTBbNd5L6WFhW1yUsAKvJ9PhS34DamhXVcWoev4xFcQ1a5YWX4E7WwbkUeHoA8iK",
  "key5": "2LAQXWqXygbpjSh9tsFhgHkyvc81MfVNbUNXBMuKvfhiPcxxCgt1s87hXevjB4J456eFu4APmtriYvA1XsQrEEX4",
  "key6": "2NA4htNace5kaEvSfHmgqhUft2iWMZdXgfg5sZ74VR68bjY7aHbCG5Hsq65fcTB5qzxb8UbAe9mpbedGhQyX8NM",
  "key7": "5Zu5KpjJVMinyvHxmBwRoousWsbd9emYf544xPMhFwXbWanojwu3rjrcR6jRZQEQ5Av5vEqqKG44r5RfmsmXaiUW",
  "key8": "58XrvWYsXohoxExRD9TV3LgXsdmWXrxKPMpoaeBe2HTuQPKV8HfN148YthP72fkrF5PjCM6eNr2w2iC14SBVNNKm",
  "key9": "2kgLMmTdv2SjmhhVUFaJGVcRg7QdGkGnSj58KyFKAN56hikfrgXmxMnAfQfkAqHotMSuqfZAP3ZK4QScoFPdQGJw",
  "key10": "55JhKVsQesnRCFhQzEMXAQZYfaL6QbiP6yrptXKjZ6a1qFf6yCx4xLc6zZaNQMgrZGzUfjCjPetpcokR4UxiDj4R",
  "key11": "53Sbbu3rFmqZcPaBnfMCGLM12Vh8oMxeEPkjqQTZSu5U5yi3GJjo8snmWNJdYVQEw3z6hvWutbbbwhyPJxpcvX1m",
  "key12": "4wZS2RLRa4vp9motVKaYsv9dU9ryF1njoJzpe1auRxARh1ATyaxW96vgwkEVMibdS6otQRcRUhxbbMvVHRM59WKJ",
  "key13": "q25Y4wNgdohJ48f4G2phgncVd21BnTN3CbNTFazmf3zkKXynAhtoXvsCa3W5ZQs9pLtKNq3h4zxKbVDMSamFf8m",
  "key14": "XaBnAkFe6EMEoYntFG4r7TaMHU6AsSTZQKTU1fBBmaZf3qiwNdYzAUx6gMzJbz5JZ7ff92MxYHJrKvTFYKop9Fe",
  "key15": "2V6obc17j6euwj6qU3NwgxSQ9CCGza9JUMVjmS21x5nTsYUkGrgC36hjhYA1kcJj54c3fNEyL6eufyru8o3MpYS9",
  "key16": "WRv4ATgszufJm9eCmmYaJwUc9WmDYN2WeVLrTs8mPfhkDWYsX3apiZKqfsCxDkRJeePzcp2p7WB3tYtNYgLEueh",
  "key17": "4U9HSK3MPetmrsoGFoeTYoDAC2tmPJZXWkS5KgzjZrY3Kztt39R4fPsoffYWBnnyAxFZktUNeCWNzqhvi8cB9wNj",
  "key18": "2URGdwYWFb5U34hPFgW5s2x7nvBNyud1ZZNLCn2PMTqpAA3pZYCrBTHyWWseLcXytSbRg1tTBxCsgrmohaz3iqCE",
  "key19": "5SWbQJAb33AvoPiwKzkyV1dmckbjTELgBSwS8b6fQ7VT2NJs1cLjk6mVKdo6HgubrQjDD6TPQwg2V92fx4awxBzd",
  "key20": "2hzLphEX1XiT1RzP3CShMN3jcJ8PHgdFXGwocvxwzgnza7QvEEZgCV55Z7WH9NzAGPZZB85aCybQ2HndizEx4StZ",
  "key21": "2ajdwUJ8Jiu4G7zQMzQ2KVU8Nd6UmDHKRuqPhdeaMkcjjwtNbZAhwKeueQuZCvCnzchb7ShoLCzrydwvngvmydrP",
  "key22": "67TSpKdhYfE7vQtgJuoQA4iQcvsuzAjKDnFSyVubLKfQJHTeeok3WvGpoFSjBKfr2qr7jCGgDA7zqKcqj3bJuehb",
  "key23": "4Vh4GVdq6JJjYoUYdMHQtMR75rs69Cd917LZ7mxwJEg3mmQefyCz8ntD5QoAtNgWRHD2kgWum4zNvziYXe9APccm",
  "key24": "3tcP6gS1DGA5Ju4faSjN9oGdvLsMYguLHXPM1pbF1ykfx5ETdDhbb7Ssvk781uRrCQzSbqdYoQ5JFTHQoAa1BpDf",
  "key25": "3Zc3AGvYu9LXTCyS3fyaCdY8q91e21n1Uf1N3akRZhucEcAGVPpUvAFwfL2BfrTR9yNBrXWRHLUQfgtBUq9vfr8d",
  "key26": "yfTkoqjQFUkYiMzPiXhdWjDXp92HVbAPf7Sd2jxyNRB2wHfv6KjuhvjJDVt9RFBv85F51Cbh7ZrM6AbzCkjQQWP",
  "key27": "axGkGKwWMZpSUf3GXWg3JJvLmMawapEHQj7YZKnS6Yf2khKVevbb2vKvVYiW4bpLPGsSjJEkKgaRN4e3AoMEqMh",
  "key28": "56pWF951BgyJisnGCqhLXTW7eZaKu38EEMNk5YcA7G2CwyTM8qmWjJpGFjgehFsGVaNhrxw6fpBZWQqp7HeQS5JD",
  "key29": "fKyQ94Pqni3PdZ8WbaxQ8Bp8PUjbWMXJpYaTaLBCJA3eTNZ843jTTTLWciGQPhb8d8bVjuF4FA9PDSNvFfPE5YH",
  "key30": "4gsgGN3JKZS7n6RpEWqWhWdfXF8kNLk4izUVT6twV8HnocfgqnDLNQgoti3fdEGJXycXzuGECkXxaYnRNoX2gBWb",
  "key31": "5kAJPuhiLPMf1g4o7yY3LJnhyGhzRVq7pd6YpxPPfFJZFhwuckLGVq7ULdYMbVhkzbJMi5rM4DhNUR1jeLsuZoez",
  "key32": "cmK8U5q9Q6i2TT5sJK5WDNUAnSMA9eh78BiTML4T6689NRJR8QrRTzy86yS5twY2Pz5abVMNvdeRtsJqU7wa4t6",
  "key33": "4yuT1CwhLcXBzvW6qNA853FvioHAkJMPVEVSfUAXW1d7gRppBfaSU4tBBdVKFWnum3jZ8LF64xXQznb5XzwFX8ca",
  "key34": "23UeuUefYjXP8yYAFHqULvAWoT1FrAb2esusJeFGm6mT5mkQT7TVVRj3v9f7Pz98ELZjHSch6RU9J49trK85ns9w",
  "key35": "4cf7JK1Mj7h8apf13nxUBxmNZPgB3i92sZrU6iiH5PHEq9qnBX6x7Qh75iEkp9tZydzYe6tzsDafsLM2Zx7C3b1a",
  "key36": "26f3n25iMDCgycUZF62iETZJsaMGtgTZkUErufzs5wDkNS6HKx5tUYgXPv9nLWawiJ9kBabG7ExS8Ss9xZ2x4fKu",
  "key37": "Vj7Nzt2NdUbWGvVhyq7DGivph5SLdfUmmqEKH2qC4FebGwkgW9eLFz292HbDhXqzMuVsnUswHnTTGjsNwWBYSHv",
  "key38": "3Q8AV3g7EixBhSmsS6pxSMMVBLgK2Z44wZWuaAYDhmuBYnphM9qCmradgLD4379wvHHYDZiGLaSTSsNhqWSJ334z",
  "key39": "5auytetn13BogXqZWaMjv1QZM1Rw9SNUJGR5xUu8LbMhyTMHv7kRTosgZNvBiAsy1XuYosSZH38q3jjG2xXJeKeT",
  "key40": "53XQiS9AHwWn9eG8xH6e2v3WrCXUJDjUk3nh7opdFiUstnqJebaWhhq95rDBp9RX6eHnBCgcegMHNvpdRWgj5SCS",
  "key41": "2STc3QHFqKhmi8xWB88Z8HzqRBwLVSTbd79jFz5zDZo8Rz6Ks5n948yRoDUd3t93tmUY73VhEdqfhMxsJTVZjPEM",
  "key42": "3rMD8ZfXU24heWu8GVcYVpXk8S67L9tL8vDLhah1iKhEokkwnxnGm9botcimtnoWhm61cJ7wxVLt9DXzLNvSUyA6"
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
