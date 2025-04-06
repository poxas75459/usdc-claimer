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
    "qNBLPqGeBGxJ3EuXdR99HZidc8WaTDUyJc4Z2cBtvKJrmS9k6UGdA4E6aEqz2dq8i8TDprR11Ck9ErUN3oEL2hV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49RWC2qhy4pSGcjS3MABwiUpFy7VdQj4vVAFkShgrP7YTpzPXrVAmMDnxSjoa1CUtLc4XfScdq74wr8oeApZrJhW",
  "key1": "BvdziSDYowGxdBTELE7DshcDgUQP91F93i23ix8Z8zsBxDYYhwTBjQDRqmjBohXNA6bgu8ojxC9UaUAG23VVfhV",
  "key2": "vfEuyVLHbg5xBQ1Tvs9Kw2pszPu3WTWxHvsCE9MocRw9XdN27QMcJ7STGrrZfXGZiEnMNpg2tTAMTrjV78XhMC7",
  "key3": "3ceUf3msr1E73pLePULx9jGZ9DaTyRpNGxGg8ZjG3xQyN3UGhR5jEP4AdQYKKeP4ZSZamUAPXt4HZ2NiRkbvc46z",
  "key4": "3Jdyd18YDS3F4ZkaRncKLgp7RTyXDvXm99ZusuiYdj73fSYaJF29B6Ue51NNRjZxEjSj7mEcM42aV5iuxJxzy68U",
  "key5": "2TMQt1nbrsET1nz9mf1N5sn97VhGyWEqLr9mhGVWwQjEXPuww6kuic1tgXd1QkviGrTjwSa2Ky22khBixNLKQgdi",
  "key6": "8BDabCXFEvVcRtvCDTSNJUn7LSCTERuG7bspbcN6jEmFtygBUMXiSicsLSJ2X7YNq7tJEZAit6gXCkPK65NibCz",
  "key7": "sqchGgRpU2MdRe5F7DWEg74jMgZc93iP94THo1yjEZAPAaSmfVfkMHFL6h3hpztWJL3xHWu6NFWsK8EhhvDjDY7",
  "key8": "3JChCbzbKAbpxWes1TVQCBw3QfYkjSAW6FHWkKBCK5hT76uuKLrEqBBhw5opcXQRjNvXwHbEugXySq3Q2yRpq834",
  "key9": "4gF4SHNHefw2Dhm4rjAom1oRobUdWRaYt5at6QCkPiuwa24X5MTrv4c4Q1eo5j2Y2tf7A1GSsiyF7MEEv3H1XJTF",
  "key10": "2xdPQRqrF1Dzz8bH4n5cGtKgiJDcGmHtsbjYwBhX28wYnBfyxJzk4yqvhgTJ5ifpq6BEP2ZFTYNgJJrceV4m7mfh",
  "key11": "4fYbw8Fc9QCJAzVD7dYwsvwabS1L9fre7Dfz9DRfFqbCQL67YjKTEprYxBdg2wPWNya2Utwd4YwxrsKRqQq95esA",
  "key12": "9Z8qB9PMg5NdAWUXoxxEJ6CdEGgRWqBQ13f3RdC2Tc3jKuXkomgnKF6p447SyaKCCLTrn8jjjyeDNtPaHmaEHd2",
  "key13": "3WGtn9N8eDRtcTBAkC8f6pfjerEX9dMq1DHBk9fwMVBsJXCAXTQyMKcgrbhCs96LLZ5AZzAQaEMBVRkbQuL96uNB",
  "key14": "5Fm1RpeQQbn1ud8Y66gTffe81FonhnWDhCXdFyadSg27kRQSC3BTeFzZ2NfGj9RJHqMfupPDZQcbNqJR6mQq8VRY",
  "key15": "LMmgKFLpveNDCzaC3sfE6Scuh9d1BgaZ7pNLmEjZDV9bcJ4hf38qZ3FS5AvnD7RsymfnSxXGKRx8DdDH1t9TWjn",
  "key16": "VsuBALcLdm1wHGEvr64PMw617GhWVibBC8gsWcxxgw9t2sXdp1XzGXXmSqkFf8ADuYie9Pet8ha6TgMw9FnmPk7",
  "key17": "2u32G3XtWPoDnmDasK5AUrgarmUNtEXMkzVZGkStYoskDdH35NBjc1XPb9N9K2hZBZuFsywbDDH8YyDEt6BjUNfR",
  "key18": "4Ve6wC5hC9X8z9xYBbmUyJm3KBzVvTJLVWXdKZiL55jPon5uD9jHw1SbDcHD7wCQ7znY1uXgFj3SDDEv6nsSqKWa",
  "key19": "5YkKiTRM3TencvcXmgoUGH1WjLjo2BDkJoGiJcMiX97vdpT6cJQBxU1M29nDWfjmWZqFi8U1WiLjpaiv9x9egc46",
  "key20": "5BArQUgGG2V6fBDVnjDy7K98Hj5pWN3k68UwPfAeWbXeustT9WxhhrEhfd86eJ8yrC48QRzzuTNAVi29ESNbc19v",
  "key21": "2yLkT4aYLeJiqauSCvBQ2cNoyKyKn6ZsUTbUc2d1rredNZ9jmaLt6XpDqEAnGfoVwGEyUUq612EHGwAk7X8PFzkH",
  "key22": "4nP2XBMMNiLydQxEhfRxQGKMER7zb42aNHcve6YR7EtgmgSySjiEpndPVTX83CjShH6DsdBLmauQ2E2dMt15AoAB",
  "key23": "2oiTKPjB4SM85gc16BJri9KKikdXw2bQBz2zDnr9NG8SGCKxr41hVokfLeSzwCovnAfHEj9MJeNZ4Vkh5EP6vn81",
  "key24": "4P28JhSmX3tdYifi4n3CjzZg86V8EkM6rDnj2eZ8kXUgPMY49W1LyQa7tVyLa6BwYYLJHyN2ExfjGXAJnoiYZq7w",
  "key25": "2b7Stssn6uJ8XKsgNL63ygfqBi9Jt3nRoaP7jaq6q4Pmn56Gv5BRedFq7Dn22DWvQG6xMqZoiwyCnGnfBHrgNyeK",
  "key26": "3irrjDkpNeSxaVJ9Nc45tWpnqri3Jj2BiVi3dW996ywsvpoAfAm3Ap9Ghy1mPQRJjUDvUYwLvHJWiG2zz9nnx5pj",
  "key27": "2uC4viDaResMNfTfQpGT593moQjXH1J3EVYvDXxBUmGirVNM1fZWHJnY3aXJkKcB4Vi518y9byu3NNsd8trzuTdX",
  "key28": "rSxk8QJoYDJXehHP78pGEiKiAkLDScHUChqytbZFsWp1xBT5MpQYy9VRhrphm1KPbvNHmrdEiUM8Y959rcW5jZp",
  "key29": "a4RqYdpde96iyw7pHgrehrMAp4XzQTz8MahFav34NmTgBxzejmKpntxWEaJomdRF9werNG5eVoWdDoL7bMxjimK",
  "key30": "3vtnbMdmACtuQpW99rmt5Rz4CqBTw5VMHFFMidiPhdmbAAHddadNX7v1ewxtFWcGdmcfzRQE6387t5ShR4Q5TW3R",
  "key31": "QHKXguPmXrxEpR2k8t6NP64qCe4q5DFCmATzbLHJ8LFLv8R7gfKji83NCGaMAUf6h6LTzRuq5BukTTz3MX9SbvR",
  "key32": "4Fq4UzSu2rTcmXzQ8ka3gZjY7wjbHFEA1kpWpBb7vV2ZjRoh79XJidmK4ABTjaUMUz2N4KMFTnyESGZn7mFD7f1m",
  "key33": "5dJeUK2tm1fGotHmYg2KK1Lcj2gQAtL9NCDa843xqUgkHLiW75ydpQQBwdPnKGQ7csuDZfikKmDwxHtXh8yVagYN",
  "key34": "5LRXjkXh8wgjY6Qr6LJa6HwhGLQtJHNUi3EzAQQwSJzvRejLoYFqAnb3kHTLikqh1TfgL5iRXU1DFfAcZZCL97i6",
  "key35": "2YPziFDTro7GQQzsx42gHYawsjU5HgUeV1qPdLy21G2mvBzDBQ1pdGg7E9AzJUtD5QmAJ8Hu5CLzLhvwgbJy6nm8",
  "key36": "3Ju5AzMSX2HcQNGmeXpAukLjafXVHqvxuUjSSrKtjdLhinc7KS68jrpxMmZo2U8EYWxAQd4fR9qFs741xRt1txnU",
  "key37": "XNN3hJrSa3bg4i95fitn6NC7Btks8tzRV3ufFB6JsxgshjdbTjd2xS6zV5QeYd7KEBuuydLMYKKSV6cmVZg5xnz",
  "key38": "5SjHghAKzuY9p3TRJNTmG7cMd7qbBy4Cb4f8Nm3fkN9JxWcDuKVZqDk3raZiLGQcwDWbJ4js4YMgvAvpQrTkqPsE",
  "key39": "2ec5qonDre7ypnYBcTR5mPeswo2Wxpk27rKuf8gmirLkgzv1GpLsqSYsgEcGX3DWQr7uyRTL9LF5jjtye7MQUWmr",
  "key40": "2TS2GfsHG52cUrR5E7qswCTe1H3XQacMG6hAFJcZTUkLGnG9ZdbaigPQVBimqLNtJDyPHaaAn5U4YeSbiDnqrx4x",
  "key41": "4eSvXxrnC3GATeBYSAGkG8Y1Dnkb6kxCU27VZbwzT2TiohWJiWR4Np69Wm45Df5Cy9rFWMrbV4UZ8ffznefJXCik",
  "key42": "5LLYXwzS6EDPeZoqN6gUzseuHUw6GYtDJ4h1JvFuMwdzxQqNjBy4Cz4cJpFbDPaUHGoPvjpbXnDFK6Nzob8z45y5"
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
