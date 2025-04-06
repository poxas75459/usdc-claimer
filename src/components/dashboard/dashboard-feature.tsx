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
    "Bjaubi83nahD5QDfXwExYAW7mdoej4cuWorLJe3zmQRgVmULmrU5fGkdCSXKoCzEFnu86znpxc9rBrU55HEohVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMtrY3bMgF9aXQUyTdKLTKUc51BTRvkx2R5NRSN8GbFNFToewjS8rwNrR3aMN7tazUhyAYUCbyp3hp1pmTidzq4",
  "key1": "4PCKdNseJxBtDpnxBEMPbAH9dH4rDn26MuUSojTp7p2W7KbQjJSabbYu4c7rxd2A3pZsxSgBRv8rc1KsZcJBSwBf",
  "key2": "4RpfMr23BA2fUX2guCk5wNRMimWuNwtrqQPXc5jhdejyStWyd53B2swieiy4s7VTmTjjKMSojHcSFUrrKSKWgzPY",
  "key3": "4AEKUkVJ99zWSuyZHJEPvgKirfanJwBv3Bn9iNbashbNgyuFBsMcQsUF8r7YBbrgECNjwCdxJsHeMf9sFYRR8Akm",
  "key4": "963yWbAtUZdvT76Hupdgmw5nzAPp2yQCQiiGHJhvd2H6uginsizyzgaWdvWzCm8BVDSJ1Smg3inQWBEBXNDLusb",
  "key5": "2QAdu6WaeetoyjKbfbnEnAZccL63vXmonJmMznCQBQiXCXxvLSYfbNCpp86tDfs2LGEpKs3Ezw3iUsC35iWCz3VR",
  "key6": "2yhaxnaJWBH4Mz1fBfMXpAa71g3jQF8uGomFPTMQEsy9EvXbLmayrVvj2rJT9eg2trkopcNw5YPVtuGhhLHAZUdf",
  "key7": "1RHvvfhYHy9jbsoqtVvRLS4ixorVEPuzRDiU1vBVgS2pVcY5pLrD2MM72AsMG1Vf6uZCJJKq7j3B7C2oqrXuB9a",
  "key8": "2CBRW6bGfPGQ9SygYYHxdWbEVnkUys7MHEzz7RLSxMPui35eeyH39PxQs41NWFbUsC9PKM1u64pe2giyveBKAwaa",
  "key9": "31rKSMAyYwBQLGTvWrkgGNCofqJQ95X3BtnJoCavfexZecc2n81wTD16Ds9goTWuUAjLgrrEKKtJ7MHmdwaF1uoA",
  "key10": "3TvpvKfVRrbDRCe4VKiMAGNWAYKJpMnjxsXyYDQcW4novg7S4NpnRpjQAztfYCGGAn9Lv1DJqW9LUwdXMeChgQy7",
  "key11": "p4VSA3AuY4j5xvFhvpYnxfxJAyqcnCd6m63Qi7N1bKekWM7ECjqXUcaiMyEanMyvX7vS2kmEktft9dv5YkrBJnt",
  "key12": "3zPrZDZrvsxP8LuVdSPva882JpWQyJGKg88vkgDEWD6BFbSfPgXia4XAit6kZaZSqfppv81kuuX72JEyqaaqe6Yr",
  "key13": "2qYrU1yPYbPEnqoDATmbbdhcuucmGa4RjcbzpYpbL9uXqkdrijEGK8CwJM8qJMoTzJG78MzFtcwA4TMDcRCL6UT1",
  "key14": "31QR4xY13QEruMg3EzqbF47NvXxQ3dnogbwiZt5npXFKb1hhAV8MVjxybq1uTuRSpJCdtHCyXvSVrLtmN7o8cFUE",
  "key15": "3xnYvDGqMiqT2Nwng47tLbLWJW3nxeFnVkVdvrsPLvmSwGavn6BAPbLmZ8xp1zZpJ4FNiArXt2WG94qQvaroaYXL",
  "key16": "5NHGD6LGaCtGBexr9w2xJTxBuVLM1xiiKhxniwEvC7ZZGqNvrzrrD8NJiSNwiKR2hmYx8kSicmxP28CtqmDww3dJ",
  "key17": "4w4s61cCs7mRxKqHJMv682Bi5smjueub3W4iu3n4WAfLX8nEPRVwismJtX9Hb4dTFbfA69vUm7suLa7nPWFrPjFQ",
  "key18": "azUVxXnT6WZbYKGjL8NsQHzsUxo2woxGEgQ8mrBEEjZ8pAbuzMfUkJvxDPqBYuuKtuEMCNqk5MU9bEg7ncbTi1s",
  "key19": "GK37ZuJ5ZJqJJ7wSuipQ9jw7Es94x5FHZVbmtaJDiDP8QkzkuPYPqCetSo8Ns8M8yMgB458hVrUhypY2tuaYd2X",
  "key20": "61mHLn3TtiKLc6PBDXaer3dELnzmSSeRYa2ySsAmZ6kw39dVVCXV8Kdy1KY9dTL8gGaVMSiP9YU8zekCAzmU2TZx",
  "key21": "3RbWHzircTjLDon1dT3g3Ar4zfm9SMW3HgrMjymiX2GHy3ySxwZt5uxR5xvndpo6qYmwpQLtcDVUeuZgQb1yNDUU",
  "key22": "5URy1ZhXr66njj6Zs2ap2wBde9ZuqRnAdb8o9wgMouxA1p8Ac3PTaXk9isJdWpJekRZnndpJa511z1YZkxkHBX5L",
  "key23": "5p8g8NLdYJMTnGjg5hd9iRh9V946hEWsLuRxsdDr8nWMAuqbPmujJz1MR2UKti6ek31XT1V2YpHEmuMNUMzMrFka",
  "key24": "3XRpoJDjpJGZhcgjyqcB8FHCnYQBKuyfZBFpids7Scg6AyqMszmjasuSDtQB1d5o76fiKyciEPYKeAtvu4JVtYEo",
  "key25": "ADDGtfwmiSjycmJyr8pBekMah131Hv6ed39qtkWd1Kw9vtRiA699RTtymkh9y4jbWgaaYPBKwBfGZEiC9C9u7ck",
  "key26": "48rhwjDRQkogT5RU5ixLM3iENeoniaULzhsLzpmh4pgDqrkomUc89zdxVXTpcRqB8Uc6QCxyVfYEFkspizg9FQig",
  "key27": "K4aB67kT3j33T6csgjRZsaz19e1MTxipEgm29vjAoiPy5147jwwGrWwWNsw3XGa5TqGGv3QB6Toz8qNn8aAGBKL",
  "key28": "3LLrfXVNRfGrx9D3wXHw8x4EYC1xds3p7LJj6metpHu9MoNmMUW8DZsWnvcskFdTFuawyqKJUUUzZGwXVW6AUTTL",
  "key29": "XLXQrQFPB7dMWYgh5yJkXh61H7v7dUFoXxTuDcgnsYqysS6WbkX3H7Hd4rkn3uAhsKcKV31TfaHyBdkTaBLunip",
  "key30": "4Nz6VhmpntJzDaYpqQTMTaQ58jr5XREdoKgUy4m9w2WzgzcJdEVzkEUs7dh4e3Uu4MrV4gUm19PEUPWhmF5LKxTh",
  "key31": "5DqouvUpPsYw92LZPtU6YWhG7mfKixkthqPCzg9PPdagYfyhD9mknzTSs64HhTBV236osSGtoFJTF5oqPdM1s2UC",
  "key32": "5b8T8ytE6rnGqw7XZmDfTzGuLAPRuugSUN59gZEW842ekSQBmZoA9D9SYZaWP4jJKFiM7m3qE977CoKP78zuqXqi",
  "key33": "5PYe3PU9rmSYhXxvVAzeGgrvGgNSs81LxjS7MUdWXP4W3dsogxY8fugBf9mbjurHTDpweJrPrksfZPBwSMHJmGwj",
  "key34": "5x1nrBdq4W2Mji5bhtpFmqvdTnM8Y6AybPPy4E9A2kQqpczx1nU3BK44AnwaLuf13cSY7KNeACyHbYAQa57AiFTf",
  "key35": "KBHGijB5UAVcMXh7ybajAYHG4kMCPNE9opp2bRb9B3s7cyCcv3hYH9ccQtfQViF6FkmchqEWdBoRcxutJqNDzF2",
  "key36": "2vwtaBxnuj2FwrNpDYqpHKkmWj98hJwioXc8HgqSDL4LQKe3oY4XDL17xQJMqhX3hrxEQaBiT3ANbTj8HDvubTCD",
  "key37": "5jNAsnyCfV6WewQFwnqddM9SxkB4YNU1t34REJ44fEXyXHk24fbfQafiEKhx5RZToAaP6cfN4VQQRn25gqp5Hgcu",
  "key38": "2R6w2g6r54BRtPEtkWfp3gRxComqHWe5jevbvUfPkcPhkHMEWWv9ArFVK4WKw32jr8qbARdZE974pxEF6w38gUTQ",
  "key39": "36riZgWutrMcWE3GUZp5E9GZtgzrQB6gouJYgnqLySNUTY24GQtRyWSYUrEMRpi9TvkzhUDii97dGzCXwa84CfrB",
  "key40": "2cEnWiVucVbYLwtiKDEj2rd4ZhngWG1JwKAuyoFoqGuqhV2AZCkCaX7dzbiQ6oaTPP9hFHD4aGYcFWmQbrLMRHoi",
  "key41": "3eYvsHuZ3v3zhKp1QZpFdmBdi9fkTYRQ34KBF5y1Y3VRnzGjd9qNLED9tgvfaBGyKpgYDvmBhKEhF1m4TAgJY8z"
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
