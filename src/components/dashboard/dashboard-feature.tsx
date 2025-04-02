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
    "59rMGZd5KGH8F1nnWuwrJuQXajk1JViTu4Wk8qkrvbPdoaXSA123GMgfarMTRrpkZ7rJ56Q6Cr7tqEVXvbqQD2Dr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UN2B8YvTszZGawJLe5HMXRwy76gdvqG7QdEt8AoJcGKQvhUyWgZujxwsF4gVbKPX6UqXxquCuDPnWoWou474M3T",
  "key1": "4VNi28m5V71Kz52Y1KzK92U5xchskMf4EDMGDLkvYiGPLNvswtPopKdgELRk3hLBe5LJsWeV6WbdPQhJTn2oD28p",
  "key2": "3MMmQPaaYCHUyBWZjEPLmmZSPr6LbLKTkbZ9v2eMimm2vueaSqqhds7Wi2otvVtb9GDKUeSgYw5T2h1YQqcL27YL",
  "key3": "2BkrcnMtze3C9eW3zBx7j1MSFqC1PU8jGSGM7KaLD1CmNWUGdB9MatGRTL2d4AUGexAWJsRNGV4qPpcyh4dYEsCw",
  "key4": "5LtjWxxSpkALRGBhCSkxesGPmchJTNQrK1jomNp3BJBNvgLtxF38CC7atF7m3GRUsxVbZRoDNrBbDXWy3amJyz8R",
  "key5": "y3PYtCD22q3zkz4TBGHGeX4LTRVNmKAuXjfr3Z1Qf5bo5iKqysebTtYqxAGLcQ9iDbUxZh6PWyMUMyPWWJgeZB1",
  "key6": "66cMRfYvKRuWWiVk8EskT971YKRCiQx4GmzsKGUNKDxbWkqh1GdpBbpxrkaxDi6Xt4Eqnpmypef6JFhCEJCGcskR",
  "key7": "hGDbKpTu8k4HriuHQYF87QWKLbGTE662iyDMcihpWDdsrfN2JDQCyHDyFEksN9tBSSKhhSXGqnJEEraBc7RQqD2",
  "key8": "45n15vHJ9abFn36HLzDXp9h1YE21ZZNZmX5eD53gPh8L1WfywpdftdoGgL8fmn61fDjMdGvafHhBNfFQRaVXNpAV",
  "key9": "4hSatVr8yNFwEpaVrVPYNtm6TG3pytZ8H5JybZ9PXtTktMNFYnZNX8VyZVCjT8bVSDU7bDMN2xDp4bUPRufoq4Ns",
  "key10": "2uymb7bs44Mq9oGr79SrFpJiC9HDb4bM6GHQp3cUfnxxEZD3BYi9KjeXJiu7ipjCQWvAh6PLT8nu5t5XkdubBe5S",
  "key11": "2X8tyygrEXPuv9Mhzaq1tCF4ezsd48bU4DRQBQxYA6YgEpsGqLWf2yn1yDu8SxuM7uSdNok4FD19znYKccopqL44",
  "key12": "G4bEcV7KW6y9PT7vv4374fdsrsxKT4zSUeuHrtNuXu482N3DNupE74rr1ktJmwrP4ySK3sTXEZNzhmyicfdcSng",
  "key13": "hBzQU4LTtrCaVHRK4WzR4EXoSke4aVQYz5nDMnTktruJp7rgfuDFQjbMLYCyMn9KjUVyTMFAaqgHyqYVMo352K7",
  "key14": "2XwogQ1A8YLNjQwYAw9o5g2ryyTPCV5p3tJFYLGiMoA5vhvbU6NkesPGwU3uhXNhCeR2oELhbke6PgbNpUzsZfdD",
  "key15": "28AtZFRutBZ6yxetzfYjj3XYqp7EKgyirGkgpbhW34N3Yeu1qgYtxmPTQYD6bpasLTuXqJp8ARcC5Y7r2xqieMyi",
  "key16": "21kcY1PSiq7DK3TVQ5J2R1uKbqctTDb9CYJh7NATfUbQ3mskXecVHSpKs8PfyYAz81n42QBLn5jpFeiSMuuDMzvM",
  "key17": "WSQweA1ahdo43t76bdY3ZVgprKHV8B3XHS4znr9ijuzui4RqehJszLG5wMcyQT9zjw4atEeGjaLwU1DpYPFMdV5",
  "key18": "3Vj8qJbNYC3SWP6pW5CkMdDiPq3foqQWguF8gSy93N2FU1BMvwJjns1uup7QcK4D7qg2ie6xfuod32DJXnu16Vf3",
  "key19": "5atdCMoDCUYrMd4pKqEqccRLLc55w6Gw8Kt7ykAJSUCG4NL3mqiKGXMEfevB43ZXmgY2b4YwuMz3fC9cDkum7VoY",
  "key20": "2oM9iDvX5WUebg6dJSLhkxrkBvBke6TC5FTedF5bfSfAuCtUjrMmrEwdfH3P15Fo3U2jke5nyYX6ip7Q2jm3AZVW",
  "key21": "5J6SKbXKGQfsNmbJSf5669QRZeXPAJFb7eWbMK5WJAJvNvDy7btQqPdLVZ2N2NdGbDBdoYH2gW7PCwCsQTMK3pKW",
  "key22": "jLz1KmsFRoLuRUchZc2nLmWCx4hcbWHxwG9P2thPLwLC8YYNMYB3sgRgn3y8sAMLLiJBVxumoX9wbcdcYzuFtuG",
  "key23": "28bZms3ybDPx1iHBwfvd3RUca3RMe7Pa5YENVdvMo83fqMRQ97zVuJxAtoP311N8U8ubgQ7tAD7dvWDVF2MhdYrT",
  "key24": "2Xvf1Xu1ASzm9j9SZDz92649ZPSjjza4jSBwECrS4ZuRzzZLrrDsExzZGzR44NmEfL1saKtqeLPytrkNV1eAdjJV",
  "key25": "4cVXxtp9CLWL62fKrV1jkQTyKA3qqHpryN4oQTCo2yD8qWhX1jgu5Hmjh3o5TgNvxkDU3wnZEyhiccFWwQx9CpuZ"
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
