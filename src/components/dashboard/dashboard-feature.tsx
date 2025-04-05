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
    "4SZjNrZw6yENKoz6YUJHgb9NYnLMfaLYTeBMqC36z5eDkew8CPro9SoeHs7gkBbL5pCAdGEabAhhcjf2iCKEPMhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29SZJAdGoxTRKYyJSh6AaejkwReVt69LfBg2PsgifqkvjjY6TwYkSitrs14y5vk6wxMVxrovxKYMkD4uhVhhZ6fs",
  "key1": "3MeEjc1RRJd8gXDiRFbf5MtayFbuXfv4Ycuz9JD32tyUF2d6bYLHcypJnV9eGzrZzKY4DNwsoxAfW5Lwk4uVcSdZ",
  "key2": "35qxmXstfPPk9cd1fXEYfndueJvwoEiGrkaXzFRyWCGGq62X6qHTUoCg6SDcTzipfJMvV8zc621LuX6mihTxfTmW",
  "key3": "5WSEN5hrFHvNrMAhAzYq8vKqgFQoYxdVEoH7jLFPSkwobWHUmvhFDEjwg1AqyjWaMJT7qVjLJ9fEYRpMXZ2Tg3aP",
  "key4": "2kJM8ByQ95EjboQKXSjfk7uToKCQMZLuGBqwcMnwCkVUoCocL9vo6FDCu7xnrPA5jm4akxGZv4X2nBM6vEG4oBWp",
  "key5": "5T9epecUvwRV6fpzzqM4DV4CeWyZR81XyTjQ1RZFUGAimyKn3gS4EJuj7YoWLu6cCnHDxgTu8o51U4KRb5P6ZSmV",
  "key6": "4yhe3hgehi8mdb7K3PwS3635QBjekhTJj6kqJCj5ieAYyuyUQjQjWqKk3z1dcjJG99UoSsjY8qhFSd4LW4mKBf8j",
  "key7": "5AaGyCeRTZuL7bzAo7osPSxgEcDEU32MkvCrGdRRXgPMoPRHeFNqECiK2EFW92dgHB34pLNWuEpBrohKC7gHhNaU",
  "key8": "3YvVP6hTQEcjtRei6eddynzKg8q1pu667Yd77yDrspv3Vr4SX9ZXZecDACzGwd6U3C3Wgo9cGjZuND16WjvSqSzw",
  "key9": "3CeagpXDDmDqXyQJZ9QL5PUvosMDfBN7LPJHgM8EEhu4HzqNYzBf5iZLB4kCFKQkJ1FJkwtsBfWD6QDFyxkbgCnC",
  "key10": "5s2NSXecZd7EJgS3s9JuweHWiemranK15LVi2zxCZ6topxoLFzkDLtqaer7KnheaBmdJGewRiCpn9dx3Ee4uQX49",
  "key11": "5JD9XW4JwbfaVTmF7QQfceFQcUm9GMXhqRAYKvMJN83NQdy2LDbjivEjQgsiE5vBD8LsXHtZscVYrUbrU9aYBTDf",
  "key12": "5hsqiWnmnBQe5fCJE99tncChbvpob54fzjNAvR6LUFnoRyx3BULVTHShS3sXdeg2ahKRb7f8sKomDZWV6KvoxrpL",
  "key13": "8KQYPiRoVgznPS7apGMfk4ZtW1RYPdJHszfW6zL1RdSE3Z9ARPN3YYf851Zw4mSV25ccbCJFH3Dz6h3DMdiZRS7",
  "key14": "2QcP4uxNT3D56NpR6wJhPa1hXcXtznaVUSCedzajQY3ay434xrmCecoYyAvLCpqf9ctiKj1F6U5VEg3pRvBCiyV9",
  "key15": "2ooG7XuatWvpj7p4DyPwQy5iWSpFhkgyy5TH27kcAjSQ7hzWrLNVp25SDLFu8EbUgBEw2XgsRQCCYzNr7JGKcgxv",
  "key16": "3vWgJmdBMAxtzyLeJka1QXZUU9HbHTanYwzhYYxcswJgHCr5bStN9AisEnWvk5dy7KJ3yEioQWaibRuqS86CDU4v",
  "key17": "2p1CL6ouRT6yCNAn96NMdc2azyp7a8xXuXK2kHBGiRThY6oewvvixH5xbP7A3fPw9aN76AfgJEJS8QiwCkbd1fmJ",
  "key18": "3Fhp8aDM5GYHq26LUPE7uEg1C7GsntJ8TxTYwG6tNnCs91TEfiJ4R59Ej4uafJcL7LQDbhW8Lgvom7MFoW7h3QKv",
  "key19": "3yxmpnziAzkscEK9wy1ou9FB6sgaVUJoUg33skBp4FNUWyh7Snmx2EVw5wiJEW1uRanEAep53YFACqDDchLQRWx4",
  "key20": "57J2THthFr5YgiPo1T6wJ7Ank3JJ7AGEzMr5afmqip4AniybcHCSx1xHFjpTccaQ9qxzcTvN3PZRBN8jS2cfknrT",
  "key21": "3qsJEZ2fEQFyfkSPNu3DbhD5vEzPodpjNX5ZhXDxLEFe7Dykoh8KungDbiT7wGAJFqkGphNr7uQ3qUBrkTph5vzd",
  "key22": "2Me6M2MXMqFYSnJLP7qvjJCmR26hi86dCc3qCspWb2K7iggfKsEk7Ce4oQ4GfccDNiPugwQwy7njPRnLGDYUA6o3",
  "key23": "5oAjJMQcK6yHswG7fnxsFGzgr4iVmFxzxQ9khDcpE29mUyuJ7LPXjyYZhresJNV95ZHbxVReGjVMSKoTkpnGJS6Q",
  "key24": "3eF43zYHp1x3wf86te49LA1WdRvgN6bSWQtBSzojoCw4QbaoE2Qv5rCeSauT9Az7mRNYYcQHAkRukf3GVbFur8H9",
  "key25": "2r356fSzJnFzV5z8oFqoTCLZFhEtUYS5GqXnnC1pxoDyuRugrM5iFMMmL93JFyJnsPvjTYreHKNHURh3QfaRNUC3",
  "key26": "3UMnaZCUefMxcp61FXsn7rZzrtCG4vQ8ibhT9ezucqA4hX5jEPmhK9PcZvMy86AKhzAUderhDnpKnHiCMNk8eopQ",
  "key27": "4Df5j9mGKQDbTYdLvJzfg5pXJwU45N1hN8QUq1sV6X4efVJGe34XDdJbrxvZdxKvV7mKLNgR3nDnxo5JNBo4PqDc",
  "key28": "3Lq3q6FHJSe3rLmhnbgGiqbz4exvqpxKoPPXpFo5cN4KGdALCwfSSYJasDKVzJdjdq2QU6aKkzvvu36WohCrijge",
  "key29": "66RvCPuNGW2Vt5RMpaZDnRqZpQhoHSBJx1nX6FQfM1zsSQn8y2D4CzPg6tWZueyev81Mdyg6oSDQuKxSqVSLVDZK",
  "key30": "6NhXur6A75TFF7TZiEboid3JwULYgofBiUxBz6Yz8pmRSVEtc33mgfP1wEFCJtqDo1WzMXBM6R1tvhyx7tdDSZU",
  "key31": "mYjfVR9kb5ox1h8Mqf48CGoaepA8V5qhDF3bgyAPH8RryE9yA81iVZzwRQkV6ViH4H2ov864PVW16hqkdfLkAnz",
  "key32": "2NJ397Vn2TnSQhEpQGThYdyhfGkQ9YX3RVJY5hM93rCmk7fUBPytG9jvvG3TZM9byqDEUTqsxsPPs9BKjpAaq2Wo",
  "key33": "28ujKH13Nja6dVQAeBrT9GKxozEcFcZMXvrCSCV7Znoi4eWMKSnXFJQ4fUez7F7upof85GYA8XgU9ztoYfnbNvDH",
  "key34": "3czeSELNVBdgofjerJ1LiGNmE7QbiXLuPoUtx9wkwqH5jeehWVL7sAVMkSjSjq6pwnrcVGPxexEiTgn5VbfoFfWm",
  "key35": "2wfpWyL4yNg9Troc3GWjv2WjW3yLg2DnhpMn3muSXSm5v7K5P9fGKa5HFC7JR8M4UdZXtbTzN82fEyVhLU5L5UAQ"
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
