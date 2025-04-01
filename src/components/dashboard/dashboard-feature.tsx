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
    "8BbxyHMffnKZtrbAk61gJTgeNHdNt9QukZarrVXpotnyMyBgf2aPAqXnmbbs4HE6iuoexUymB4tmgbfPmviShYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzxu1aWnuNJPUB2ZWowaM2wSKuehdWXLtdk3TqTRUNfPMa6TX4kqC26r9xynS2kVz14ZW5GoVLmGAABZtGDwmop",
  "key1": "3TaLRk1KiQownsTZcLkxSYx4938HSRDpb8WDajLjb2h3ZTT6RLsx6vVd1uPLEpmhT4YEm2n737JXqnnkeqBZ5ryV",
  "key2": "eEmYPGQKtKSYb7d1qV3JJwDK86jNYjSb17Ska2GhEERD5bLus3YfpTNZVKKUQKcQPzFyVWaE7HAGQzH7wnniZ3i",
  "key3": "pKub3cRBfK1GWkAcj1XPrLsBS5wk1U6HbN7uwKfmwSJQZUMWqRUijq9AgvMTtWNxVxqbJB8w1rujHDuuEmiqRo7",
  "key4": "24GK17AYVusjFaungLKwm6sW3x8f5Sn8z3Mw9JFSpP92RTcGD7VYURsxq1WLiiRpKMZXVsGNNLop4yC9Rz129qYt",
  "key5": "5sVvD1KC8zsAogcUwjTagPDgquaHjQQViH4qgDrjjuAiLipbccf1TztNwG3LBGZLkAXrYenNAauQm31YMf42PuYW",
  "key6": "3pAJHBwa2rigt37b8DNUWtpH2WtwLN1XiKDYVpKnJkHQzdozqQdndUVcHjwfMs1z5KNQDiGuwBpq88tfKxUndHhL",
  "key7": "2RNQh921xisksMzF1HRbrTRNqFvy8vDBBdzwTb5jeDs1RfnRsUYvfcHFFz2qwoJ4euecrGPc9h38JVCM5K156Er9",
  "key8": "5YpQvYmbtE6WQjGAJcYkkwxv7ESZLDFe5JMfQqYtcKxKDx31zMkFKncMh3sxrtYTLdxdZMr79vBb8rtWxAKLNK9V",
  "key9": "2gqhhXKcYYEmwrfHwDs6YZA2HTV4Hszt3SyNFjtdPMk5GkRgYVuwKuEoCG927kbXCiyByvqb8YfHrMxGgk4A2Tgi",
  "key10": "4gD1GFNPzcuivbTaAmtBoWAhPLrDxGfwW49XJEpXnWdsc87n4Sg49zrMKCmcWunapz1TRumuBWF5jvvmBZG4r3Sz",
  "key11": "2BShb4hRvgvr59mexmc361cMfmvcPQ3CFUrncwpvgAYhyDiJ36ehoCGCJduPkRJL9Psek445BGzbNufDqqq3r3jL",
  "key12": "71U8u5BAvxbqhZDC4UJVev23SRkee2QrgJmtDysxNXqvMbD6MHxRPh1BeZG9ndNy7GR5NztSiWPcsZY16tsmFd9",
  "key13": "EcM7A9rktfnXFq47BrcujSzbRfKKrPDfnuKzqMTVvG1h9BpeyjcntxXaziVrq2sDoyAmA9qvwNAj1oacPoZbJv5",
  "key14": "4R784MFpLWPTjJskD18j3o4FrYx3sK6hbBvdv9mfupmRcHx1v91dU5zssb9ULyZwBnxGUSzD98FLX4g66cyL45ki",
  "key15": "WfYCmiPdRDKcjeUcwfkwaEneo883gNHrYQsAcbQn22qmYBS45LethSoNMAsuV8x3C4zLFWsadwzHA49qDMe6Hsu",
  "key16": "E2wzY2sodyJDgqmJJHyFcgZgDuKjhY7c5M7S6jzJzD7KeRekFdS21LkLFstVJeZJG5gqXU4BztgikZCeJ1mtpps",
  "key17": "5DUAQTp9dnHC7KWgcXr1ZcKtNvkkczjP5fbSaf2MTEyevRG4DLZmb7XRbueKLMKDK9gpaULAKuvJNfFvc1H1Rqd",
  "key18": "gHxEaLeubPSFhuG8V91s8pWpEW6nusJ1kV2YSX8XMqUY8Cf4NoQWMy19m2kgPxaiRTTZhgFtN2K2Jxjfm1vjSvN",
  "key19": "vxRCb3YPm2a1xdw8aSahL7DuLK8rF1GhZpxFzh9XVB2eeB1YeLJATXdyqXVjjczfFrM7rowgN2gyXFfjvbkDapN",
  "key20": "Z6E13xvCP32EHWhe4TB98P5cuhsGGhCGjdr7r6uZSqWnfoaxJLbuGnaPcBBUMsiewtkt5y1fkfnuTecuHFrogsX",
  "key21": "5di8mSeimpKAQCbscnpoetg79Q98Z6hx9fMnJ8pc6AXDWaXDSsssFmiNMibsBagLwH9Ab4FfBWxVYqDzqRuAaxuE",
  "key22": "27fWvfbMBuvWSoEzA3JrB4LBnx2RcbtDDc1FRqV2XiuFhXW4Ezkmyi1VBPuksUQKNrtCGqxjYkivN4g4y99HXgoo",
  "key23": "3e6WUAarPr3VpstP9JSjWcMTU6ksyfNAy2EKoyMCcv2RFkhN1Rt4zo3TfEEMfoCByJzkmLwVa8TgqrtXcqprPv5V",
  "key24": "5SyT4NMhbhyaPgim4mTkSNh8qeys3prG3BzisN2LGYK6Lj4vjXYLzfC3jcSCfmhJkFxU92XuNVBSTAabRr13Wexm",
  "key25": "5TFuCvEVJzm5YS1dg3iRRUJWCM7t3DkdZz3D1qTgvyKYbtZELeXzhVLUnmSbjWYMkQHR89ZNgHcmwfGa8bT1JmpJ",
  "key26": "5KF6p7ZBTTwcj2SXbWVS1Stu8K9JXuY78BojSNsSf9o8arrnAyNZkCUSaKK2H7aZyL28RYD1xkT8FYq1XcpT38o9",
  "key27": "2JabifpJMsnnjbKBoQ4dfcNh582pvY6FRSyPy2EjaVxE7cZZaX5bAiM4d7hfQFHZzRA6qWcQD5y68zLpWCWnxsDz",
  "key28": "3PzVfRAPRfrY6Wo9DYY4FUpVfSSWXPFiaf6zzcBi8aJHhd8tHutNU9K6nKaPWiZoZLrP6oZgcds8JvZdk2yq5X5s",
  "key29": "66tte8rdXBuJqUaqwvA8814kEwg6zampvHgE52bUAjG5tLkDn3Lt9tnAqNwg2zVUX3cQA2GgCA4HBgEKjthbd92b"
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
