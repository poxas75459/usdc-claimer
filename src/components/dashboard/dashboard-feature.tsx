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
    "3TM2cRWJ27eTX13rmH1jMxKQeQwtEF6QDibKxBgisGN7QbJQt9eYd33iGpsZX4sNMQTUornYs7yihQEwVesSZujt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TTscKS1TYXLPR851SmNcF3Mw2V7nEY9DtntPwUFp2TxU3hfEGRhYwDnkJfpuYDqL3BmSd7c5EdcWWpPTAw9cmae",
  "key1": "67FThuemk15q5sz2dtp25Fo1ia6XrYCCRobEMYKZkGZj6aSQWvNVHdYhSjLGifJ1jCiNi8riUjNF75p3VyukdQVg",
  "key2": "2AdQGY8kmD7h3y1S68MwsrBvgCLSswgokr93cSutjM76Wi8sQka4AHZ7LhJnkReUJZMwhLiRpJGsG9Deb6DLcaWZ",
  "key3": "5SWE1rV38B6g1TaGpbYed7U6hZwJoVbPwdpJ3H3rKGNGQzdWPjiQNWotGwkg5zq8UD7JGjDvA4TNV9XvUfsCN6v",
  "key4": "3VGqPisd3aMxyJ2BsW1ta8KTkS1avAaYzPGu7Zo2HPGSKRZBYWzGy8ZLogyWzzdNa8Q8m9ZNpUYmbz7uQLSYecq2",
  "key5": "5d7YhCFCWhYyq4725F6aFMUEhUDQGV6oqAPBy3HoPMzJnYgYZCr4EMaBRCChAW1va6ncy7DEcpdCuBn82RL8h7W3",
  "key6": "5XNi6c2vzwmuxKbw3tANfrBH417yND5kuZKydrBdkLX6RHuQe3jTcxArxVctfdnA8Vcg5Ub283x7TFyRx1AgGSHG",
  "key7": "HyCGVaCcxbs8EFZJip2nwBJvYNkBpEv12raeKFMpLNrAzEM9oED3cbFYUZqLFjwRWQxFWPaRKPZM4ugNyoA71gU",
  "key8": "5mrxP31Ud5NVwfKXovnZ63ikEHDEB1MzpiDe7EK9eN69rV4YLyRhAQCBeaypAfKyHCjUJqvcnG7E61tEG1iDPhV6",
  "key9": "2NQEnT4Yu62wkznmjchxVugZh1QdXaFrmfTZTt41z72La5hoDB7j59Q6bBonthMfC9MtQVrRG2GcBbhJTvcc2Zfh",
  "key10": "3JSHTKRsqC5WT9rWLvd7F6jjwgVcduvphRFXnUHKVpsezwjnexgqFkBwifL9L6x7wW292Pgz9faHYZ3mQVH5UYXM",
  "key11": "3wTm3Fy4u6qV8LLm4Z4mRA1kUWXrZwXX6b7ZPDoJ58WDnf1eM1oCC6socnYCFtPrpBZBPFsHzYxEYN7K2Yu9e5Lg",
  "key12": "MZDUmEqbnKyEZNpyWdckgt4tb8WDs53ToGk1hXNvSQUX1Jms6wX9ECVBWPuC5Fz5XurQy7jWUiFzdEe7EEXud41",
  "key13": "36MU3XsVRwH7WZ6A2CJtEXTZm7qJKYwcffKG9fGJbZAkfStwNqnwqQxExgyXkQ1nyoK5ATApS6to7UsPzSLQtStA",
  "key14": "FP2dHgUyy1pPunxD16e8gfJ46QP5b7dAgpGN3nppAd41iveev69U1EzqfqAqwNaxbgj2s2UaSgdqHJ2Sjwhm1ko",
  "key15": "NjHqqPxSt6ijs9eMQM1qCiCKjbUqjEJ3eTHNyVxjr1LWcxT85Gx2bvvjZJNGz9AeVNX1mwffYFLU1z8hmeWfaqM",
  "key16": "1yQ2qHs2P3UUwBuuekaUdPzy3nVBFPKvjbcSccRAh6bn2Kw7FXGcLn3Ui9e5tZcYitmK73PVPew4L6YcoskrPAi",
  "key17": "4mcLpSvFXjnwRhGdLEU5Jczxxn99uesHfR8iXjDtGedcgBzNTRKbcbDAzhkgQ1mo5kDRo93ubWrL2ohtXPHyYqsH",
  "key18": "31MmU1HdJ7BnCqXnnQ7NRVKkxU9sgPK7ur4QvTTBdY3hH2HCjS9tijBGtVVFT6eE1mP1YZXFhagHkTX6GsckWNkF",
  "key19": "2yFqJDbcaPD3rS3tm5J9nvATNuUCdA9jFtW9FGjsxSWbqQYCncJFYpTVedHJ2WuiFHWPfXaU1JvUQynGcjp5dHMT",
  "key20": "4M88Z3o3BBpGM1BZUkAHTmyzbSbkC4HzMqrUG44H3JmbBzLMrfH3cSnRMgvHWf27uwSR3sGzKvjpu3uxK1hjH7Ai",
  "key21": "BcsdFwdEG3NdVsRDDryDsgGaZTmJgBcSdvTatJTMFoFK6KycyoxxUHsVSnSqNoJ6aCK7LSQqBjXGniaFU8pGmrX",
  "key22": "2n7zbkZidk17cd2VNRQP8M2yXXvr7b7kmEUnXoh1rjVktda1CRkyhiXDRdsvdHoG7nHVhCetARnfBR7DcBntJPzA",
  "key23": "5MKrLEKdz7C99w6sEuds4iPw97Qo3CxZzEe8FGHrLEA9PqF5bgpV6YdmA9zddrt8FD9TBnarEY7MTsZQY75w6ubP",
  "key24": "2qidczVEfFLF232WZS2ZYB3PWM11VMvuJxQYzEPZ29Tm6N5nGrmtmELSDi3bd322J6nrDQd6iS9pGg4LN7YwStVj",
  "key25": "2UrHwf2nWsRYVdsqFzBXQvccjYQoMFwr3N66aHUFUMrQsPZRQmSdvVF2eEHERZcpSimYFuqHW2uMVx9a3prt7UGi",
  "key26": "5CEHZQB4PQCc6eaj5CbjbP2dE5wM93hK6yj8kNQ4UC8HF7RBpnpXoBLjMDxd8ZsXaedF8DwszZdQPWeVQnZzQA2e",
  "key27": "CmeRLr3HMagVPfaMkkkYdCrae6VAF7C3kSRAxfVdHusnSfeR8dtSQADDZqvxshUHSY5XzMNEVyDtLFuLc6JWnLa",
  "key28": "2A1sBrK1LBLYZJJ2mv9ib3ow4CsUvLpUdreiDv5jJXcPLTfAXQrwQxerdzM1jyEp8PBapyy9yzNiq3WXLxjrq8i1",
  "key29": "wSWJLzg9buucr73kA7ZkEEzd2oxVDQcYqiGGbSVTo18uGmYh3c4zcKeTpnGPTe9n9TmKhuVeWbWAU5yHR8iW5SL"
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
