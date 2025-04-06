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
    "cRjS23KJ4KpKtMzMA2SBiEUkcgKzPFSJKr5vfvQX4LiLYUrdy6W9G2wF7bQHienxkwkZsuqbn3gwzrkJZiJSNem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BFs2Tpk8iZnjuvoeESdMzXMHJ5PZZakaUdNXEoKERsTeUwuFJ8uJ8uUp57vDESTeamrPJP4X33gqcNqmj8Nm4bW",
  "key1": "3MfV75xyrA9GdrLxiABEAzXxGosf1HJAQabGrstPEZCUKRHbDjQ1qhCZ1q5NaX1nA9Yi9fh5uFBEzjqMkyKnechG",
  "key2": "3mCTW35iA1oHTsBVdDX3TfA7dk2E5VXkafwdvRRas67KUZ2UqY1efeBHxg5sARBKnMpa35VV1so8KKGC8QCYVZhd",
  "key3": "YyK5MpHj2oiW1UVGe4BtttuMXuXT9nUSNTgRG9xs6XZRuvNmwvPctHxcxeUQhbrqrrjcYPWwgGzbBTEX4wdpvpw",
  "key4": "2eHZbFeW73xJn6wBXcCxeATPJa192e6UKSGoKMMvHUbYKDtda4wUaPKuQkvzmw8Hw1k2CX3RwEwcA4Vh2pCuFN8T",
  "key5": "hcHu47HUrZUwkVDrTfcxPUDo1vHxWBc8LBGCy2cP4dMvxcP1fWvvMJfgHX33pE4okmrom4jyJFbhmLtwx3hD6gB",
  "key6": "2NamHpdAwUmiL9ZqFEispiXwTNu47TVMsccKt2fqDG3wSxM1AtjHx2jd8XQroajMjRYyXueeZ7SZ3Sq6tJFAEPH4",
  "key7": "4RDHE6VmqxmA4zSJekY3CDE3Sza5hvgSYcL52YZikvraG7xfGuv98m5ycWLmMx7kq38xYK5dW4675Ur2TMqKSHrq",
  "key8": "5P6orKZEBkj65cXX6cF699NSnMTwJy8GXimfsE6RiCouTPEaeZYeae7ck2ocifgW2RjSk7izGoafM9XpBYc5s8J8",
  "key9": "2S82RrfTBfiieEtC4jfptbbMcdvzZRPTmymcyLYtSgh72iboJbzZFDs8MrrnLsBpvTTVSyB4C7FxA3p9h1pxpPpf",
  "key10": "vQY9Vv1Hz97kvncG8C87zyw5ZjcB9pjaRcY6W4zWu4oYi1AwFjRJsZVYVx5TpqDj8sZzhuV8ETKdqnmuxrADPkw",
  "key11": "3vVVfLz96jRWoB2goXdcr4FygvdyFY2eW7HAg98NBrW2PtEmh93cBtSjtVwM4fHwqxmYQf877KXB9Ah5MrziTyoh",
  "key12": "22wzJu1GYmG3ChzEHfQLnsvtmuzhh6HP7QPpySsJkUsUYNWUSTMKUdpD2rBgzaGT7ZK8zAVf76yEDSkmP9aoHgtg",
  "key13": "2FkjF9Mxs2CwF4vBahYeVNJ4eYwuZss6Zssdd79AeAiqE5yfZTKPgTwa8vrRD6aig4wKACXwsLb1nk7gM9DB1GWC",
  "key14": "2Lk13GBiTsLQCT3eh9kCGvKT1rm2CLcqPo3HHKDoBimZUPq627zHQWDnAtxKCGh34U96viGrVeiVn5nkDfXZaLvf",
  "key15": "32cHeFrhkHKyU8QYts58uSMRgkq8TA4CWQJjgLNUTMSooCZbP8ckT67BmRgFHEAovBjg6ivLgFyUKRA22N9wEmNu",
  "key16": "2TwQPSAgLzEihwiGrgNUCxGbfdy15VuVKW4nstb1VAH7iDuFp2eEoX8gvvFubYhvA8iSLnAE3sGFgPDU6pXN7TP8",
  "key17": "5NzhnEumwsQGmoaEfpWdmeyepjoYdGqtz365vSpSx2dxTcWLcudTJ5nBSN14qEgxKNkJj5KQrJr6ZVt3tEgcreX8",
  "key18": "3oTXMcJofnhDtw1vvjmbzdLhLiTs7HuLQTZB8KBvBeP8fwvA2ohBrFxPC8Y1zFvQFo2DznRLqexvqJwSF4ioqQaH",
  "key19": "5T8pfauCsN735ZWtPxGQhzXoCQpePDqdmDGZt4TiQxDKkuxif7FXi4HANPkX8dkxnYcfHm4jPQjqKvd1QLewqV4P",
  "key20": "euMzSmMJ6EcJnR9KX5zKdqqw8xo2ZpPdgBmPcRzfSY43sisVurUb93jTF7bomVe9x5LBhQa5Dae7SnsrwCzRmxc",
  "key21": "3JKnRQ7aCrxbycF2ATx2dDp6xb8DiVqM6yxnv6Bnj8H6dpHrY7pj81NAePqk7gK9xBkUwQghheYPV4qK4BdgHJdv",
  "key22": "21PbUwiraDejULR52cQ6hV34GTJcmcrL4PiMAUhH2WKGHamdqkfjgWTEWEipnHd5kvFFLEKoaF32PzyKNu3aF2vM",
  "key23": "aDEBp1ky3mxBV4btBL7g642EwYQi54Aai2e4tTbi7c5qXa8sCNrhPx3FrED8jWZfXa84cqkAvF4h9638enzPFeH",
  "key24": "3KaRXWqzZyq9Yd2Ab7AVmtxmvZ97WUEQggazTMHwgs8beMetcb3mCupRHq6pNBR5rzAf7dB1dbfJfhsJbLg398o5",
  "key25": "3EtG2BD4VJfGf8LsLAHPq2o8qdiCmx5XeDSjxhFJebc6wqa551xAjiQM46SQsPQF1x2wTbBNE5os9gdYuzSnFXkZ",
  "key26": "4krkxfoPGBPeSQGFnWs3zgvC5ctuK6ixhhEhSBe57mkd2crjWrUdi6vkiVFai7KcYpGLGdHDQFbxAYkWQF6gV1np",
  "key27": "34JXkn177W2aqmgAzJa8LhMp49JS6dnmuit7pehnKbbikebMMokZMiwGBo78pSDSh9r2hxuVKExyAnc1Ud8YtWf8",
  "key28": "4RXq5f1emSKKCtv19xynoPNYnfCXzKdaGaQxXh2rcVcLEFUGEUeGewhdV15m83SRdRdXZA5kFiRKVnjBTHDkwgSa",
  "key29": "LPq1wFwUb5VryWgehDJbkTK5oDofp8zcazK7xth9k8fu8p9S1Mvf7i4ChqyuwbYPyLhbcbDzALHJPRBi8R8nCSC",
  "key30": "Y1yPfS2cUs4b3nKbUMGUTKFB1pfjsSh1E6Wvp7xUJxnTQuuAzXgcpfFrdYd1dKFQMEjrM9GAD7b1jmTHXjCNcnA",
  "key31": "34kdtr1BkkKJdAA4JabrndyrZduA6ej9zGVnFiR9wAyzTVhnfzPKoY5U7mW9HGuMR9H1rGYhR15pt3iH1vU4KLzC",
  "key32": "5E2fS9b2QVFKtKkD1FRsERJY5M2AAjH4v3jyYShjL8c4xtM4FKn3CxPYxyrmaeqpTZEiFPTVGrrddjGy5A4CTc4x",
  "key33": "4gbRRKSv8rAe1kTNe2r9QhVx4TmDMV2Np11caf4dPBvgyQ9m81Cvxd6WMX5abpVPZMbZD6QzxSR3ynfBLGM5U84u",
  "key34": "2E13szXdVtVC8cjTATtHYJ7h4bKwrMXcgEXnFfSHBuuinGn8FtEFZ4AtME795Y3v9NMwdH7cefG7NwYMc8rqJFs6",
  "key35": "2TRARp75jDZ11PVzmXXb7TQckB7aZXEXs7U6uoH6HAuzyNxoStWGM2yZ4FtShFcDW3yowpu2fLXgN9tMfjtm6qoq",
  "key36": "2b1ri6fyYvAc4NukGBM7t2vttTR3QFDXQgvsDR2LmZPLy826oy27cjGrXRdnn3aojY9MWqofkjBy1Ndd1aEizj4Y",
  "key37": "4LZtuYQgN2phE6KQSmtvetSdBTx9PG6ESf3Q3MEc1pHnvRwB8DdDf2eDZtc9XRJwLtbzMzcLAw2kBMYdjrBacWeS",
  "key38": "4veKBhW1H68az5qEGVMef4xjeRxMbjWAEd2QQhmkqj4EMGDotZ4dumExTXGrn33eJunKDwMKJkshNPkhaaMmrdeu",
  "key39": "38UAZ5wuxAm5UJWjzSXUcogaZyinRo4tTr8gh8vDMvjWGTehdX2HZSu7PjHwCgNCSVxKcd5yhMBxfSe4AptMz9yo",
  "key40": "5RkiMoQFTjDNGeJUDnofzrRyNMBDoKfWEWMPf85E3XghpuupDf7prEDyoGvKekRt4vjhwuCqGApYxryUJi9TYTvW"
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
