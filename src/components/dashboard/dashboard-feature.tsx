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
    "2bxfvna3KtkhvMneUjQSjYrndEiLn7U2K5ZCiL53vJw9WUNX4BoVv1jD7A3RXmriTBsKAhombqUtnEE7dD6F9cZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xLhe6rNB6nV6sw2x5NoVHGresq27FJvDjZ2XAmngGZscWd22pYvziib6ELgztmENKpUo9X3WyrffZzSh54igxWL",
  "key1": "56iLZ1XMkBJ95bLWr87FsqvDmpkbbjqtMoryvhw6N2jaAAJBMG55HMPGeDJhaZhf9PCg7j2ciReSA2H6Vha2SCkr",
  "key2": "Sj74rWtZmHzVimFTiN5iavD6A2H5PntHMZquuKJchTPoeQw4NpinXRZi9LKrd6KT8tuuEgQPWHp4AHGRVkVhifE",
  "key3": "2VcAH1xrh9PP8f7jmiNo21TtmwziCveVPdVGxy3LP9zpL3pzficMDspckwoiK87W7uPLhgpKgUmCGDdkjUYwbMSN",
  "key4": "5gbYLTdjHwkh5dqT9UwcyvVufRsgTnmiTA8NoNvn8GY88ZkUSavj96u5Gvj8GR2jEhRo2JKQJCXJ1nWTzdAnxR4Q",
  "key5": "4RRSGh9YPdos484WiC9utJCaLvCtKNTh9HNA8HhTdzqig7PUTa77HH57EKpsycLgKjb5Y1LqouQzPRfMXuYWinpV",
  "key6": "2g7KBR6Uz55A64gE51zAmxbpVH6FXdwsdCHccgQPFd6NHGgs4wgjJoe2HdgX7bLQpuyMX4LsmHnujCCtF2ixb2Sh",
  "key7": "2h5FXn3LTViLAGhsGpj6iQUdPf8XL5LuohLNEo25c249m2wEzPicbPWQUZ9GWUZbssm9Vn8hmAXmwuJjFEZo18z2",
  "key8": "4nAFGrFwvC5C3mgofvDAe1CLuVG5NJkcCwg7gzvboh6ThtEELTNffoXJpo7uEyKMYZzXyJAHZejcHsRwjutMa2en",
  "key9": "HtE5yakRJgUsmfR24YTsy6QH32sq5KmUxmRiuHcARfodwaEcFUMiciuFiD24HJW1hJVmaLE1GhoX9uJRYtdQTaT",
  "key10": "66yr8UGQ9qi7JtQtJ4FCDDtXqZka6qCGX6MHcUKPtieX9gCuJETTWSncZgiAKv2eswUJhCzADrJuaWHjLGjoCkfJ",
  "key11": "4tvZ1buPix7XAv66H6gi7DNEmT97fa1y6tT6d1AnUYN2junbsH8HBUTcVGWTg6Qf7sLW43P55Z1tuKJttnXe9bmR",
  "key12": "4BCxaSrA5RY2jfaGufXtUbtvGTP6qWCERubSqEuDK68Qa7R3bwTrvRMx7xA8Wn5dD1LCwTC6BtUFHUdCwGuEkbae",
  "key13": "2ZRcL1crqy1Fsozdsokx4F58NNUavtm4oRmDwuqkyU8EKkBgyzqZF43C2avq8qk5eReuCejfmNWjCrPrMiCF7PD7",
  "key14": "3QSg4DHsKkp4WDEUh5kbtQkrH2rQrrvRp8tyZHxNbbAxjTtoYQD1siErCvw4YMgtGz1Zza92d2cYL3WsWRvwFpCk",
  "key15": "3YMEfkY2qUKyCoFMhk4fALzgVuz4QGp8XNGHcwAZ4SmPLSaZCdyWx1FcvqViPaGLB2up5Y4xsYJLoaAczBc46fGQ",
  "key16": "3Dmum7rSqWgthRH9k8bj8E1FGBdgWg4WCVRjGHzw2ztsMYNBV7wbsExvVRqaYqPinyQbMrwK34E2BdFuD66rknPa",
  "key17": "3LStddQR4A56JAU9uVf2BYxtaFAvuuoKuwDp9jeuUXasHv8cJeyFM9Vw4dT4t52dT1X8jYKaex9skbdWe4kXsqmQ",
  "key18": "3Ko9Bg7xZF2ftfq83NT8dt9BJXzgCms511LJ4Grf1Tiyfv8JEztgrfw3XbU75dkrLQVhiCGrwTsV9fpdfW7Ae55p",
  "key19": "KPqBJ2TSL2tij7ffdEhpFv5jJzaqNqBYgPi1TR11cpmTgCShbbTfyVBE8DLHoHaeQhgEUFJdsft1ML3mFhouQ2g",
  "key20": "9XXWFWyb5xSPCtmjC5mwG4uC135MeWj83tCLdUgeztoJk5BHm3eYKp6FtDK4bnWWienx2qJHQYcPBSWStcjWnPq",
  "key21": "Yb4Y6kYMzyTC8QR1Mi5jidhL6tB8o4GLMgncmYuZ2r9odfFc13FYSCbepFmBp1uM7WoxFMm63WNdYPN4csQLGPT",
  "key22": "2ASsNDQELS4zeFjmR7PAcGBB3J2dQvot8aJMFU1JEyfEWjUJXWNn4Rt8oFdW73tGLQwso5sksbNeTB7WT3kQB2KA",
  "key23": "3tUJ9vcsinBT33W5hr248RDueuVgzXWB1PzCugM2pqwWtUsYzY38qhy828uczt4kQuTvFWvgD4SDTbgz7b6sUa5o",
  "key24": "3vW23tQUtV8Rjf2kxczJjroKtg8umN65XfehFhbtzyxos8EmbPExXrr3FLvAMk9YutjPZg1apkBGLLRAQmH9bZJd",
  "key25": "5rJwmDRVsK2XTC4jME11nunNkGXNRXoCzxVNM5F7wj3yB5Q7C9YNy1fvXxpAN3GjyPrnQP2eAgoimVutGD4S6iq1",
  "key26": "3Egzr7CskUSxBebnPmrLZvwwL521kyYeiDvt1E9FzK2NBvV3XKpLSasxXz4WRj5kD71p7c5Fa2bdvKgomxkzrAGs",
  "key27": "43u2UgnZFCjs2C3aRb3s7foDxQZb7Fyyb3DxdyEaAv2T4xSxxve4aqX1mH7AtsTaUth51qFvaML11dDMsvoubqaH",
  "key28": "3gCGrsHrjdKLQ5g3KJGWQsiWmtegtBMY4zKKsmANihB79uuRc9yySKrooZ4yRBnSnQRGwgtSbtjcLJtVkq7acEoM",
  "key29": "3GZWmnGpaMARyZMoWFLfYKc4mcAWX37Jh4yuCrW6VbqiRywRrQCNKeshVqhCeq4X6ozZPnhqNFjhCGyqMYZrNaCA",
  "key30": "4JsBsYSrpvfxsKC4EDMUQyUwcVdQ42ziJi57XZwUjKWQab9TwyHdpkWkd1VGKZjVza7dgM5jayDHMiYaHoQ8K9jV",
  "key31": "fGYtU7Efz377FEMvEsPhLjRaphXyggQ97HiziGQJHzCeVQvC4hCYsDNuEn9yGFonfDzEVKzckXNYtEbSMCWPSjL"
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
