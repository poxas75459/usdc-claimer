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
    "29AZ1VR6Z1n4Wthmu87Ft4TKxsXptkxrbsQirQETw7rng1WALK3QmNhWidihxrXM6ji5GKLbkV5YjRKrhunra2sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mSDQBxuQjDBzPmL7RZ39PDV6PiohsAkecsm5TXfEfuGD9sotwogymhLSxC1ohZuPn6Ri98se9wxouzQZKcwFRNb",
  "key1": "5aaYCWW9H8B9KUXdZkpovWqpbVnaGQEsWAhiCzNbwMCW2sVeCbGFWuHvswNgvJXk69D86TDkkrpy5NaJf7EEShQK",
  "key2": "2JGVrLtaDPaPHu4Z6Co4Byi78HT2ff9UxNFiGohbzUf43b7fSgutCPd1LXDHpj3FJ6j7mt2mzdDSRLkzyj1Lu83x",
  "key3": "JeHgS2Ery4UxS9T3Wd1X51iR9RnuQ88E3zyECyv4UPZ2fsU8dzhGv3DX3Gb5AqmqoRKHz1MpLzzXfjJZA6TX8Tb",
  "key4": "sq17aQFfgXQqf5FaEZts4RGhGszKAZCADTpfSA8UBAbjZAxK4JH22iq6rnmw4khgNAPtjFDbqfXpYKEo7rcrCuA",
  "key5": "4DEXX6tXSK73ZbEJqN6GYgvDn8CYXCKMMoKU4sb72bjsSkzgbXkTFVP4vQFtunr4iHHe82u6kGo2TVHkkydVhrvR",
  "key6": "2ZkwYbb4f5ajKrsui5PNHctn6MJczHsnvavuZvCm12P1BEs7FunFZXXKmLQgLKkXgMec722Yv4nGajDR95dXS3ud",
  "key7": "5XTm36v82JxGurWZBJgUwJTCRPHfmjJ1jzskS4PyYzkYercrrnrTcVgQgpFsPqELEUDuZR3PgtYCDF5PqdpRbWcR",
  "key8": "53SyiTypxDKu2DfEmNXBAoM2db2TUbtJRMUHtgHXvh9a5eeRaSPLu8r5RUnuVaebdggHLTJFHXhe46KxJGWxiqDr",
  "key9": "wkoenEih3a4mD4ePoQaGaAhEHNCrodTCBEn5zbrHnQtZik8XkKz3MVVtKYJWaoF7pTF7Kh5FtzcJZw1k4rjA74B",
  "key10": "2KPjyUERubF9ZHYG5vRoQZQ5qFJ9EvVpboMM3jXsejH5qzb2h8q5FdGrndCoJ8R4VDGnySwkscjR2CrcDiqYgipW",
  "key11": "3U6PEg43n8NTAwaVgRHZ7VLemQLhxMbzhjUpwfeE5MkBY5RuUhEbLrdn2eJkBprYDQAciAXnmayFaem3SMRcUYpS",
  "key12": "2g3mYkDrQwWSqbmUX5y5AUR6PDJUxzdPS4ZyEZNR86MLik3eTm57mQt6zXhFfAYDEHJ8xWRH2u3cTCF61jdPH4wq",
  "key13": "3vKmc8HQT6QZjLyJTJoVMbYBQEgx9EFcGHDBSUVcGquEP34aH9LEswv1AkQeBnboWXJNAtjvYN6dkKeAgYCQVzAv",
  "key14": "5HBcehc1woasCqoDUqbPJq4v6QtoVazJxDGj4wk8rK6fX8Sx99GAehEFX4tNuGsVTKGxcMYD4N7KrmGQ2DYqiaqu",
  "key15": "4PHbtCDwD5xUm3Qozy9RdwK6NGXbNLXD1gJcWrVbWW2KdVEXp3f3PnGxeEzTBx2wFzJvGyc4MxKAQbwj5pxjgoYV",
  "key16": "4mHJgbcqx2t2MVVPB55PFiKZnCVFf3URTvuL9pLEDgQfGA2PZs52SCjhdvwL18NvsD5YwBJrZNLMLC17xXVfydkd",
  "key17": "KwnmzaKrszcdvuVvHYgAQZyvw9ySspJycwecGLbYuqKFTn4hDQnYpMo1imyohqaveCQKTv279pBv64NUamvhrxF",
  "key18": "3WuEyjL9b69QMmbHzeCjerp7K86YnpFsNGVf7QYd6jQPFMfnXXRwgwjLeuS9sXBWuc8EXuNKr4Fm2P8gdaE3zWr7",
  "key19": "UnYzWvUEmW6q4jrg2LgScLWXbTkXDZWXvWDfpcja1pjgttvLZHaP1mJqGVQwaBdRhR9ECAEUo3TzqBCvMLHf49x",
  "key20": "3Sy4PV1rbNZE8enE4fAyky5pJg9u5uA2wbQnfsxhB2JNGyuwtqShB2XV71jVAYYhLWFBsnGywFDTMXaFdZMFLR9v",
  "key21": "657pZz1ecr8YWt7LJUq7tjjBKhJ1z72pnujBriGa11mh4HVJ7wawTZFJsL4GPBb79v4ZtAeYLoSyyJUry1wU3t8J",
  "key22": "5auvJnFJ65SSJPM1ac1ynJ4kQ92BPGMmYC4cVXPARtyyfrzPyY99pC5MVQdHPjWg3hUACHbNDRULzp6fwC8AdnsN",
  "key23": "dW5g891u8x3Fv4TfXvJonkdvHa6a7c2YPmDMD8vnTVfejSkrN4TnSMZ3ddZJuVVKpjBznrU5TjXAo5XCK6UjeZT",
  "key24": "9pXR5LZaDJu2RWW7pv3Qf8BCkq7L6unCH75nEiV3q1rvxCnBpbFmrnkFgQAgBgGGgf6nk1yD1afU5ki9Xw7LtrE",
  "key25": "5uFZF8Gy9Sv2dCsyPxzjc18Y9PReZFbQKGtrmsF7ZJgyteVqzHSsZpvdjCuzkkp5R9t8Hfm9mY5nRDiyA3KvqLD5",
  "key26": "61ZCFWLU2Vj4QWgkrpWSGcn4cvq41BQtv5H4cB7oEhtmatz9FcPoEakL6yTNL54qV2KHNCt8GKurpvxzpzFd4i3q",
  "key27": "5jVSBCCAjQG56oqmYSFpqM1V6UmTytZsxrYChnPboCAkzfQCW26JqQCc5b8D69py81tnPt8B1yaJFnfFdhyZQw19",
  "key28": "4WtACQyVh8ZnVjZHZQh7R8dwwuT1MKEpXLCtZPxf4nei6nsbJ5wYy4bGUzuNivXzt4D3m47ZhStonQMYzXzSJx9R",
  "key29": "Ak5fZQmY9KBVxvNH4oJngDPyNqgBhZaGGBb1enaDXk3mdHqbvpWVUjYLPsHRRKKGE7rTyF4VrpHgBhXo8uvtNJ9",
  "key30": "4XRRDKB5WXgQ4SKN1eFnTCCYeCf9yUmazSZjSVLzQYhmy9tFjoQr5N8qRehLEqAJPnTyVRujLKcmUcFkeQTfLDC7",
  "key31": "5kNh2NuypHyb1NKC5N7igitbycB9SMHrd76GXPDwLY1FNsTvh9iAFxUMwmrTgCL5LkL9Tk47tkVUfXVrK2uQ2ESS",
  "key32": "YHi89xSo9wkNRpercFvRiMJRNjWLwMEt7y4VVJ8SPdhWPQRrTTZDuhs6FLTVUuWd1wjjt5QpTSGm6SwrRe2mG37",
  "key33": "3oVHaTv9vhXcdaxgW2cRXdisSSeT5Eu6prujzUKWxRAe7f6VYJHzpfGSMEznP6wKHXg3r4z1Sz1np9GgKnB5ArZ4",
  "key34": "5eyLWg4UmetMCJPXSpTdn5pzv3Z7oRUtS5X86dFdygvczYXEm5SfUgZK5k9xDZwdcsXH3a4CEH1DfAcsjnG65WrU",
  "key35": "MDpJU5BdL3DoNzq6RBsCetjGdN1r92rsYfYWtsj8JgksRuufcRErKaKFvBbKv9e7zTMbMeza6r86C561y7qeq6m",
  "key36": "5VgeSSugyt6WgSXQ1epj4bwHQ82afiPwsUFoscFY39f4FMNH3Db2mVsFT3Mc6Sxi3GyrWt6N9ACVnPsAwokzcDHj",
  "key37": "3aUSBb7YzEzf1dUVbwA7yS8JPkjftKHdACiwxsPMBcuS2hyCNjjhfgVNNgTKrFvVuFfjNMUEHLUTv55i8ewjU9v7",
  "key38": "3GKvKKnHmZxTbGKSS3xLjsn59mTjSXnzKePHDMB5PfQtejnrbQJKLnZUM8i4AnBj3Mb5pQUhH8qY65MrLQTWXYjb",
  "key39": "4KS9GrwZNy5e1VKQGgTpysibN36vcQndYeHCpPsKfKmhc9M8VaFSVKQkTHANaocCP7kR75BhQpuzPKTYhvDkxRHE",
  "key40": "2imHLGTLojcTTF6QZjnYtfKoKsFNbEHbdrok1q5AuNhQh9wZYaZV8NrRmtkCMCCSawiiSMA8NBSVuad14o1WTDaN",
  "key41": "4BsV7q6Yi2oE2cmv6mae17GFvaNxpGQKbBFWk9J4mdxtCXmggqH96uBTpmP3V6tYbdKmvTg34ybJHmL5efLFyYtr",
  "key42": "sqNQi4G5WMNYXRBbHdpLbpatPLUTP2Zyb2pN47dF7cDH8iDdus7XhrgiRbVNQBddEwrRuqaR4TMyfYBEHnzt3wu",
  "key43": "31knu2wY1H5Z3ocm7mPARdj7cifjo56mtY4xuzraBHnAELS8UZHV8PNAiEcoWyVezGqGmdNCJoRYUKq1zYvf1yxv",
  "key44": "3meGxANQd9hQ1qPMFtrmcdFUNYJ7uMHNXjBAi7oqUgmQ6sVmfCyZS3VZq3XthqJfEj5mUXWxEf75Qa2yn722JWa7",
  "key45": "5WAwnzFV1RskKLkorFYHfigWUYWWfFbkYnsHBMw5AX9f61TdGgihYApB4uooSefZ73Yf9cuivN7VyLqsnWCF2cU7",
  "key46": "2sPBbojofSCkb4EZqwBisUTiQb2gVLNjpqM2MCyp34zJ6vP4eohpUi62EMPPaLDEPtUmYzWFVAGnV15tEMtS5oEQ",
  "key47": "4w7mxwJ2N6VrGtR9E57Ro6DNJVHSrf67EBep9awuEAG6pqSiU9nsFCNBedgbWy3LvscgyBZe1Qo8v5LhU1S2frQw"
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
