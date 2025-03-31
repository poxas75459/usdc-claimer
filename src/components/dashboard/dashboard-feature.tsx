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
    "4a1yeUiGejTGuUUxMqHmGjxZqA1xt2ZvwhGYtdAikd6M7JUniiHTDEgfoangxipegE28hVewNeGP8QycUJ2iGApN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gqFmDWHWCAJJvnkccH4kCDauP4Poyuv8AsEvmYfeEE9ho1Mq5hb5EnpySktcFLKUsvWB8SYAjwHYSCKLEriQGYi",
  "key1": "37safv6opMdcNJ2dMePNjKTERK8GSP8T4WnUFb97ZXNAFsfxWwmLhzvXL6d3AYhvrvQDtnjgDazpxd2MGQFaqQmr",
  "key2": "3T9v2G2QQcCqKapkSLkNwB5ezGxZ4CxgZNBVkBcHi72BHuKTXZ3sYeCW8w9ME1eep5YFadnX6w7zHaqZZW6Yph94",
  "key3": "BjNXfSeHJEigLfGM8UvbqSk2qtUMaVJZngrA2AwBhDYKDWtydi1Pq1QY38SBfN14uTtEEPckMgZjyQqZr38yF21",
  "key4": "qRmUYKFZRrqyH4NGZcsnugyZyFhseUGRgHeaPXyY2TQs2F6NCKMjweQMVbwrpjuXNNVkgbQAAgV9MUnEFUpxcTQ",
  "key5": "6623SFrioRrs4cJUR3Ba7sJMdpmu5jfuFUBJFGnuSDdbYU5RSUPpXuFkWBTT1RcWYe5NE3VioGMpY9i9zZaqmkQj",
  "key6": "5k4sw5b8Hj2RM1SMpcfFE4X2N1RRLwpPAowijo9aSNhH92zP5U5wCqLx8ENZdzGcsztGaxvQNmNELg4QvjcpssqK",
  "key7": "23XVhFawrLCLyE5h4KVq6ArBrYxpPwJQuvkWzGhGUo1qKQFWjz8T13VXcxA8c8s5EaUgNAw8ie2j9PyNxCiNN8SB",
  "key8": "5X3PAM1YPeSHVSMnXSSEzWsop5bpZVyPfMaZNGnHqpg9KGSqisS2kNunCAEEmXWvmYWSCoBvKJvBuZabc74JkvDr",
  "key9": "57JNLGCAWrncZqbhfvDaof7W17hZA59zEsZoKUgjZMLyszZoRU1smmqiGLcFHquHVUSjuY68jJEdcAQEK1zhyenF",
  "key10": "RoYSWiadLiggPdbmQen5CxMWqaNgmn5H1b6rFnxyjk6HBBveDhEpeYGCspt3y4gNFxuYG1JhERGSzWeioy6JRgW",
  "key11": "5dqd3S7td2bmfL6RwE2MojvxNHayL1TeT54NCYoBLpyurp7P6uDZSQTsJ6TQzG2im76YXo2BoXUgvot9ARQrB8m",
  "key12": "iZn67ZrBmvA3AuxmvuVvWxk1epUVsL77atY9baQwWZ2g67fZny5i8JnJ8L1uTs3EJa4Nj9XEeC2v63sPnrn7o3C",
  "key13": "42smZN3rVn1tEZgHCnrVdER62BYcMGVL9nxACVaNBgajo3mQwP7ev2dK1zEsPbiEs2HUf9dxzJK9XAuETG2qwHgm",
  "key14": "3xKZhMBfCPUH6Eh3at5PfcKT9gXwpc1PF8HZqWnX3f58JNaHXM7Zp946Caj26s2aYwzyfeKWWsVkvPYUXtCYGBpG",
  "key15": "4imRv3Dx8suRDfoo2szB1Hr24kt9puZPqPiFqGd3AcQjmATGW4pus3F1cS9jqG5xMnqVqcTxNqh16S53YGMM58d2",
  "key16": "58mcYrjcTX4rcdf67hBLYo8Z56s8LD78o6P3BnhFuqN6YEibba3CWkYXMgKfLRMUFVrCb1NmYA1c7RP2JswY6DbB",
  "key17": "2rheuERDK6W8XG6pqdB8rhKVFFU4GxMu8iKckFVwke6EQqfiqzyJduEeiodKmYguZVgC6kBgCWfne6fQ9vWEpdQB",
  "key18": "3dT9m2odXjHjaJaZe3DmTp82QkvRE66NDtYjfPDf1bvW8GfMAmrABQNaRRBAgRdPbm1aFnHD8QrBEDUbFmX6Ybog",
  "key19": "5nRpW2v332iLmcHPoRpRo9AczDFTgC2M9EsT3rjyTK5NRN455LqCMXS4CfZaLBytncLJ36JMTvrFGrc4s55VnVTj",
  "key20": "2pWgZpuvwaKnGgbzg2hhqvZRtmdHcf8fdG1ouw8eyJRZndYP6wxtnfdUZajXLvsfendu8CbKgARSPEkwPmus8NNV",
  "key21": "37ysvV417sEpA2juDLRnRNK6M9aeJVWLtecjgns8ejz966ot3FC5WYhczwDuJwrecNopGpEwrZGztpwyPcixyXUx",
  "key22": "4nPuM3FPRBSiRRuiCmKerhRDW5dqujqqos9PFVsDfTHDxGG6ZLurxHF7rVg16TphZ7yLiPr2Zq8EMDryXW9ivs8u",
  "key23": "39m7EgJzhcbEHW9H1n6tEVBN9GpLC4WYWUQmsH9xAQSTyipWeFrdqo2pr7P1VsgSH7GyfBDSYGPDuUoaZteaApnb",
  "key24": "JyXQUNiSntJ456UBUSkrYHUyEdSdchEzHuyuycUfkEPAdHqRrQXNn7rK2kiCMz9i4Evn8wsCsbqpqZZaHhSFP7e",
  "key25": "3HjGnxoMo38nANyB9Wzhp8ePYUKv5nmSwR3isUF7hVndwqThE2dPk2DBNqPZaeKJXNGiDj7dsHuEzRGiCbLJhr1r",
  "key26": "385ckrveFfeqk3t52mRNuP4hE7Z3VX8RiQ1cHVNtE2v2FVyFdTBQYHExacfW3uoCwbAJGj4DphPFrSeTzGQcfc3M",
  "key27": "2HPK3tM3cr6nCxfm54JJaY6PGmc5J8A4C9QvwE6c1V5CoeEVum7xEY6JrUwsa6hCpZ2YTBa8bAp8zUPDV9XXmtiz",
  "key28": "44TRTZvEWktEiPowgRzTrixHrEJvnRYQLBqbF4CS1y6obRD9G9DoguSBqFDoXucp3w1X6MEXz8kfnEnXaFzLJbV9",
  "key29": "2B4DnpcggeAggUNqKiMjxzGA7ViWzAchQErJeHLhoyUx6CcsJJ8WgKsxttxLayuY7PyaupPUo6hpSm6g5mCaGDCE",
  "key30": "5zCTth1eudjVxtDjogQJCpgsQe4R3W12rCfHtuAnXBP6pLHpCmEYkyUB1ra7yNjBspTxjaBMRCj1VY2aZjhvCo7B",
  "key31": "38SSgRkX6EyzYjNSq5op5Wh1GTvwbYAj8fBPUYWaJdz8Zg6PG3YyQ5uPaotmL4GfTKWZn8X8sMfYdmo8fKKWfj5P",
  "key32": "34qQFT4BFwHm8DwFhAevzZXN8bn2p9VW5Qr1jPSMAbArkNfsbJ5ysWLj34dWMXWMm19bJKHrRr2snbfk4TEnX8Xn"
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
