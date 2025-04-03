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
    "3z9mXNVmnxnHzZNTNCRpvMgmLJhHrzHnkCSbRzT3Fs3XBB2V7uWJnJ4os72hLy5efReLbSwJ49DJ1179Gj87Vdxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53vWKRFqVJMrvXd5shsgA636uXsbkVKFxv2w8xvP3Vi9YBLWMtBT1MC6mTMRhwrxUAeP6DFZMgFcbkHZPUU8BvsJ",
  "key1": "477RQ5pg4YcTrupLiXxSgu6FuL6DqbYQwnZypzWqkkrCrEVqfXeczDJBepiFZ7rwujRpKan7vWLVTrcgY7FykXEx",
  "key2": "38hZpnoXbXnXYWyePNQ5UAzfrYXTRskoVJKJ4nfzh8VLbGh4uCPxuHutT8RLjxtySFmsD4e4uyw44dHPZx6HDJwt",
  "key3": "5JQVNMrBH1Ub9btoC8TwuZBcRri9eG6zdZqxbPhpv1ZGF2S1SjiV1ABBAMA9dTrPJ61MfRnnGEQgcg6TXdtRhfLq",
  "key4": "5a41XnHTrKWd4uCqsNJ15qWZLyjpUtFgoLqje5eUBUFCbdaV1ftt6N66NzQXrN6xcUewSFqjQde2fQrYsPG3D8He",
  "key5": "31F7TwA8R87crWa5tWPFrUzrxWHfsMVBwh2TofpFTziXmkNqjYMtajfbnv8Qd1hkKqUmNAh43RqmDssoCzpC1VfT",
  "key6": "4zwGKFUDAuMpDuQV52Yx15P3hZeBncgprXTP35Bd6qC1nteESGagL74RPbn4zJKBJxEM6AvMDJvNUmFn9HKKNGcV",
  "key7": "4aNaD39UuR7f3UC2H673RM48NB7pfTS2kQRKMYa2ZAXLboE7NRRWTHrTrAT67DuerZvZ9SQqsWNdB63PpmfJiZUV",
  "key8": "58yk3jcq2y1NAvNyBK7bGpDyvC78Kd27rBVFk9MDX18jLvdNc2KLxRb5domBPqo7hmwALpiwMnryVcDUa6qRwGVG",
  "key9": "462gGXAMbrPSE4Qsfom9KMCJaQaerKtAMrVhzKpke4Q1Ro2gYWeajwqakSQcP3v8eCDDYBaJARF9ZaHW2kfe4cjL",
  "key10": "4afa3YmfAhmPkkekWZuRZGHEq634dRod6pm4cZuUkk5NEKmbPEn5DT3KTazncjoeJuU3Sr3VwrFuNUoU4jkER7fu",
  "key11": "3PWT71vEcorJhgrpevuu3eqqyT9Njd5SwWNSvfCXayyecx6r7ATpkW6GpX5UBbSyet3r4rwCWt4hZJLbsRE7T1HS",
  "key12": "3QZJ6jaLYTVH3zr4VEoKGxuWtg1UJRXPWGHStZHfZoar9Ap7Sk4VsVDbMS4WDdNF6ABGE5m62Ca5eEMoZWgL8cTM",
  "key13": "4EEXRBLP2umMJ2dxh1MQ7Eu2vzPa141qinG86bxtiz9mq2W2PQhWWWfRar8HaqkNEV3ot4hyEPAee7FCy32pdZjz",
  "key14": "r4AUwter4KYE59evGqP8BzeVpBTXZS3jozH34SCoJAaztfnRp9bf7HFRhQAmjGpFHnFA3YhiqnSdSKRgZnSpCTC",
  "key15": "3YhjgCZh1KfxVfhwxJNS3b4YPxYjhYGthgujTuis4pmDt2UCQAEucq3yb7DL5x96abromw1whSQy9ViSgZyKnyni",
  "key16": "47tE6sQgHEpc23GpLrZkV67N9bhZT5eMEdwu7RhSpaJu4WNHrkjvWgwXqhWnyrj75VUYuYToibLN2TU446xHaFQD",
  "key17": "4H7QJszjYD3ePNYGXHSkg99LBMzf7kgR9mGfy1oFSA4gr3fVfZotmtEHbtdvQufDNX5yosp9tUTwghA7WJc9hQqM",
  "key18": "2Qxhq1J3UAiJ5CHbruk9HXFi6ZAWmkSAkXZ7dg59JJLEFkSzh3bp3beEQ5PwQb8yWkyoaXw2A56d8R2z2cspAZgu",
  "key19": "WxCVrJRuYSFpNLnzGtUr8bgxXckJFfmbwXgQqeMhSWTnTDLrDaPUvYc6tX8keoa7uh5tELUVe8zWWJDBVeGutaB",
  "key20": "7nUrLxJ5d8b4VXtGsb1HY3FemEMkTSpQCewvxPaxU4fTdgXerhsM6qkkLiDYWpn71DTFz8mgduGy47vb1ZucJgj",
  "key21": "3yM1kZFWi5R6R6KTNvCGBq7Ainuq8y3EqGq6gXPo46M5ftz6uiLWosv3KwDWFuthvjEMRepNKvpcTfhhdi9DeaWB",
  "key22": "26qMfNrmubog7vg6MVYVmECPhFmpbhvHATvWhhzVJFdxM4W26TQzyRsvCssXvqpnq3bfrmJEvUFXN8SEX4JWdV4D",
  "key23": "44Ph2JWUGDFfjMUmVtdYcaYzFTqcauvDWg96B4FJfyWuVvRotSPnACH1XEyeFA17Pece6H2t9HVohZXmZDyqdCW6",
  "key24": "2rm6K5QoXzZ24CnjkHueKYJAczFKeoi5JPpP88tyTCAPaFEUmRh4FmJ83uC1bNZP6WTTYpH4gywaxjrjnrN58nRL",
  "key25": "RW4cnTZvpSg2ShfcUyyA4S8CFNuRY6RmnPFb3WCiGiDFg58Dsgj5zZxjUmHwp26XpnJ3ekbZa1d2BZUyRjYR4Nu",
  "key26": "3vnptjcgTrnwkB7j34nNUMQKgm2zSCxFhZQxhFcFhqVTd9Gq3s6fk2MWLKFendtCDxR1ZUi4q1HEjUMux2pfh2V7",
  "key27": "26uzhcrokP2dH2F5Yrdzm8SiXi5vH4mp3R1GNJbiUXQaQQ4oY4G78UTSPrXH1qfdn9LUgEtkk1Z4UVXmDy8JYH1K",
  "key28": "4qYwkMTdNQuwFMKssxhRJpv9sSFLRvNY24jpvi6jLWcFgQVTzRyccmTc8RxNVV6HAnrH7PH1MTBbrasQLtXpvWvX"
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
