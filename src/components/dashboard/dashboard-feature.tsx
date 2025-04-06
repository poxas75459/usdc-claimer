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
    "E2fg48nQ4Xi2UPt5F7j4U1cGDuHsBJ2FLMBxU5AKN5pphj8y4G6ji6GUEJvz5cFP4V6NZbSAgU2qqZr2mTXWmhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64GMVzd3rEuuXGtvtvempGYmA8i9sZRZ8kpa4Nd2qf41z6gHWydoP1JkDTvF9Uk4p7ujgC8z5xydJEhFEcUjwZ3u",
  "key1": "4wSGMboRCXocQR719JW1Z5Dz4qSbNKkbvT5AJuceevbZQ7i1HtAvAcrhfFSmiDGwprMQhDWfhJ1WMiVhr36ugCjQ",
  "key2": "57GvME3yEbnoqeHU5ffpTKEUBXUjpV9JGeB6k8UVyXMbbGpp4KZ4gKmzqqimbH3aX7y1ajSZMw7hvdDWPPVmFmXY",
  "key3": "2VLyj2qFUKiPdGHdyatc7jHdiabK7Nv2axPLAnzThDcGNyQ6sK4BgLrJWkExMjmvNKP5A6a7rgUoQQ3RCnNGt87A",
  "key4": "2eP5AVXxKUhYomCmFS7yhkUsj2yFLiSV4GwYF4PEqHELA3GrVLvXBxqDEyKxJS6cxpoAx2ewsWr6Ya27hoqbUyY9",
  "key5": "2A9ueh3iRAXTKSAtyNq9C86Qw4PB6V48EYK8njuRsZg4M8MTQeBCAUCTNXXYjutassAe6bNuZ76QejnwqSw4EH6B",
  "key6": "2druwGHjHwGdVXK4rADL8nzhC3kn2gjVyFhVFLPU2kmPkZmbpMRg46YJ2gL26dVUE5bGozdAfaz44WfP7bpxLBnL",
  "key7": "3mmF8gdHtNhDUnvaicnuZX69h6U5VVpBc7Zy4qXQZ6nN5xtnbBaLpUDqewQzrRPSMCPowTt6q65SbQsTjyfBFNhe",
  "key8": "2NFtaHq4LFN9FPTCxYe3PfJdqbR1p3pXnV6PEY4DfZJWoF8BmC4PjXBi1Ud69xojBUc952qt4jiLjrPottqoGFbW",
  "key9": "2nit9Zm3y4RtJRBGo1WhYzBgHLaKkeC93LaV2iwfECzuGu3TuzHXcnLrHYpoamxa6j1JYF8RA68XeFge92jQWmyY",
  "key10": "65qFCUQKSkKtNauFTDASHDqcs4nSJtQCiNci746uopPDfLyW4U13xmvguLa3oQHDypk7cmtBwvPRcXFu8vbpBnqN",
  "key11": "2m34BCvHBJGWdfzAqtnFRMhZm7iWZ7AxoLZjekYF9UxE4moVsHushQ27W6QFLgakXiUS4uFXMDQuRFcmkduWegnY",
  "key12": "4MrajC7XLhW3PybE3ESgKQCn3GzFAxX6vZYET2L5UMR1SUP3moa7i1JYDUynnzNXXCUAeB4EYePrJpV9p5qnckE5",
  "key13": "5z9QzLVbhtCBfDgU1yNrShznB7fNMCvBLaZxcSK1oNWHEzLQm1KWXYr647Fri4sacbcFfS54VH6oAkENAnKLrkAT",
  "key14": "2zZN8WD6Cvpm8wRXt6ZbbxB4rc4KfRz6hHqDQDjaYxQU3xMgZ6ubAgxJkRmdMoExaB8ioEZQvnJwCsdK7eb9bJCd",
  "key15": "51nSUMwCXymPZxjyXrS5ijsjc24YKXjvCtNftixocRTRBdfkxt6rMA1ffh8h8QFnemdeWxEEWUtcnSfJaoKEmypq",
  "key16": "3nKXvAvAGP2AoFhYDiQk4U3Y6AsEvdS8ATkpNcb2Wxb6wZJBTftVTMX6DihgiXHRV6dehZtCiXABa8n3zhYB2tNs",
  "key17": "3qBzKJS7LEGWW2GzPegL148QhLujik2Wxg9bfTkmq3oXrqmBx1yxb7qsW5FexREAaBumdAMeyPtwgxjCaq368H6L",
  "key18": "2xr9rtuAtT1DaEJgKtdafnbiQ3iTT3TTvHAqXm8iUFxAymjxBHRjNvAMgjjCYehXqR4haCviM9pcrtcVqEFfRYHk",
  "key19": "4MdsUT4sZytjbXWKcF3VaCsoqB2pz4cSTDZEigSLEnfFqWXNqbUdTCRauzvsUaS4bDUucdC2xHP6HP8ZpHAiumYw",
  "key20": "2U7pY2KFFU2DQt8qRMunmesLKAGdpVX3sbHivTqfmmy1paiBkeQCPaMpUtncKfKHfnpHwnAcbDAmNA6wiRR47oxo",
  "key21": "42bXcRzRgXSiSVUmiJoU8w2XUoNEtyaSRwHFPNMuert66YgFcTbRcqT93YzUSw92twYerBLG2ECToYETSP4fAgwV",
  "key22": "qnKBmnpqorDaLkncYQLmCj7fvntjCZqguVrub3M1zVBp4TaBTk8dDpCc76RjAjTrsLd1WWUq8aBFtqzQGvVco2m",
  "key23": "Z36q9EURx6iogEps9bZf4PdLYwNGXyNqWyD7RXxpspHe1WWtWzzmDSnjJHB9S3QtX3WN2bSDj7buDPv5iffHRnV",
  "key24": "4jLD7uA3ANT3jc6QCEG5LicXHoFSxygi2h32iUqCLRGMtvnA5pjUon8ojorupH1wyj4ohEGUy1yrp9hfjd23oVtJ",
  "key25": "2XZ5ajeetwiLQh73j8K8rSa1WWrLsRUMd6XECrFHqmcfDgd49zJVnQdxZSRYqXbdBKbweu6dARoksknN7Bw3Va3a",
  "key26": "2SDrib2x1jeUoENjLGC5p9BaxDvB6CxPFcEnRKgtSriqT1MR9u5wExXZvUwmTvfWgmxS4HpsJwUr44rcDidYicLv",
  "key27": "CU4MUTD2FmgBjus9UML2kiQrjZ2UvpwXDBPPn73MXgGh8vuvgJRWQjkSgUjh4nvDsx7oWf19uqL3XkoV2A7g1rd",
  "key28": "FVFBFB6FA9PtEHvgmHdRPVwYHUxM2crbSHt3X9CMND6Sv9Y4Yd281Gd3GJQv5frcxzYMYLXkqw7oKVvoiAJQhxX",
  "key29": "27PY8aVfPm8Lakp9MNokddacYdmj6oBBdvnnvKomjEDsTq67i1mhq827zykao2AovQjsqjp7e15aN4UBctBz33Vz",
  "key30": "3TjkaAAKJwYjVkRd8sji3CEGtkCzXK7YiZdB9tSjVrTjjMYpnrVtsxwXd9ozC8d7yFa12UEpeSAMXV9etzHzEtNK",
  "key31": "4C6r8Nh1J7foUno5TYdakwXXHaM1LykQdcFVBF4PbQryBxfeQHajXEBJmk9i5dQz54QnCydGvnjTK39tXQJHWGi7",
  "key32": "244L9ai7Fgs5ZcGXkD6LEJaEK8PRk9RYj4qvRQ4jWjyGRCyeJztqMpfjkTnq6hE2TMvVVZg4VuTio96uDZ19cKJJ",
  "key33": "2tCiLEZxkyeorhjDQoqBaPJ214f6uQvKojkbRGtVXW582NDnsSC2YGzFz46qKCMEa5rqegk7upGeaGGJUExg9bko"
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
