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
    "5sAiRBwntEoRgr5MxMcFR45mQ9tzP71YuAEAEeoyGfZYjVetfhMFR4KN5q387ezv5KJeVLsSmTyqXwrBRLhCJ4hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZqAi5BgVGSKz1R2JWkTxrgsfJ6d2PvhFU4ibhMH3kEZCHVvfH5r21Hk6FKwqeYbT3VGLpBpc37fC5jWC4JhTRm8",
  "key1": "3nPihT4BL3xsPdg68tw2mphw3CY2N595wApVbRtonsBeUktzLXGpo3U8TyFreQX6P5Vqvz4QgAC1DmndWJr17iMY",
  "key2": "3DiN6LePGMpVaVFMxZyPNQGw5F7UcEnZncDjmp162NiWRo6nf44vZ8rE4kvAw6HArsjEsazKLEYwYReXss1i9TkK",
  "key3": "3ExG339yH92GhA6jFLs1TgMMgTBhUqSbqBeWiAnoFxzWQAuc2Bn5iHymSxNRgSywxx9BPVcUxL8y27mgztPiz1Qj",
  "key4": "33dZkRHUhkbcm7urYEwwqLE7Ksrbe1nx8qkeX7m8YgeikEutRFF9VrsqeC9wiyq2vvBASsk8xYUDzhCJxiqHeEYW",
  "key5": "4iTqkBBhZhxpLSSGWhpT6BXuYVi9sXEJf5KkME6Qgvt4T9yYabUSJesACYFMzVv5opiSf1vQzXr1yjpSbXVzcZaT",
  "key6": "3vQwpcvqUrSwSQi2c46fk8WRGF1doxUT2kwmwvUANaKAGa4LuTRTXtao73M2tBBc8WXWz57K21sfUZBQ78Zui8an",
  "key7": "3txFVWjVrk3NDp3TQRcxd5C7bDiptC4XuH9t16fhJeZKfocfVAVZ9MbaytnafGrugyxkifMhkDrWttuqCfWUh5RE",
  "key8": "3xPiH9dHCdTwu72uTrxvcAUkPaJ37yqicGPwyxcVLARjtTXfakr4ZqvE1fcwqWqpcyRmXNDDPrCyBF57pT3MfWpV",
  "key9": "49E14SZjTwymMc5b3h8PupNoMeMNhFj3B1uf9d1Tsb9ZjC5Z9Wp6tvfhSMxKM7qohkKQS1xKcPgCt7uo8R1gqo8L",
  "key10": "5dh9M4s3Ngyum6tzCDqhwjPWJ9zmy9gTyfkCiWHF5yQVYhwWQ2QLXLx5qntMnDqYN3Fd9MKoo4JYHw6XSCCX6exn",
  "key11": "4w2EGHCACmk1CVrTXYXwpmtgJGVBiQXJsXXFH6KzRtDhZEDZU25HUNxpetYUBqVW4de5WRjN4D59adRKcXKLCw7",
  "key12": "2ehynYZezavnHpsW3uifoysrsSNnMhdoYLDor5pZTfDFLc3Qh6L556uaQ6B7opDik1jt8xL9tUoVAnT7RrNsPL7r",
  "key13": "BNLdkyvVtcWkKANrCDZsTTUhYGVTqSzRAv8XdKJpgbgiN3cpifSXSYMjQC9EgvLZN9JASF3REcoZVBjJ4v9VUtK",
  "key14": "2Y2PY694eszDawbdBN18xyA4bzD5jbUSjXP4BiAcvec7Fzpxb7ChS6Mjh8gqHbtDotrtUCFLC2qJ7LfGNEvvm6qe",
  "key15": "2hTovTxWcwsSDm7ZAXuo3h5dX8fxcDYCRbRxaH1Cb8wsdGk5FTDZnQ9rEqkosXBVzoydg61sAZRVR7vMKvvydBqA",
  "key16": "4HH6H2BnQVPQi2FBJJCcnySUzKJS8SpY5kyvEJk51RpiEbReFUam14Fm7dwrMJP2EnqUdjtkSedBj14Wudvnxv5Z",
  "key17": "2y7KpWc5ESGCxF9HqSoghXmLof7xSTUJd1jndY43ZvX94zUwVQW3FEjUZRexyHpTvSKW1NKiaGixEafJ2BZrh7aU",
  "key18": "2RnTPuLepwdguGSRiHZh62aoMNf7dcG9BHTye9EWyKLDNboLfFbyvBv1okMPEXoj4jnVPb2wiWsaNP1g5sgCpci1",
  "key19": "5TreYYjBVuo8xzBAwri1QTyLWNdTDnFBkyrCvZoSrVsr47uPBkYCeJa2iTtjiBRkSqzgi3Xk36h3sS9ebXEYfiBp",
  "key20": "Kdsp9nwqaV9EPK6TUXSo5fQ3UoG67u8awj6v14oRiP3pcoUY4RRKruwtgqVhXndwfD5aD7jSNg9rXvBfn3qAn4s",
  "key21": "m1gvt2Z6rLmvVjgZwEZUcWX3M1Dgo8PGfCEEd7PLvr1pRo3b9AakCaa3GRwuHBtqvounyNLTGw2RriSShekEkNP",
  "key22": "CcCJdcx4ST7gv4dopiwHmjw1FEZVCDVe7qLZ9M9dAYCdKkmmXSLgD3hnyrhJx7GFL2YFBY9YgeAAED187a55N85",
  "key23": "4zZd91qvwpGxcDEXNPWxXQVZQm4FKgQGthGBAnUMyiyHLnQHfLg1MjsaAyjqGCG3dx3BBSZUCV9GNcFszAQff6TX",
  "key24": "3yHobWX2oSdSqBrN8z9rRZSjoNzHjeuUVUDnXLDoJsTXbJjdTQsmBm6G2vg8DJQycXYMnNwwLUyLYedC4YeqAJ1S",
  "key25": "3EAndfcrmXgLjR89SKKW8S9GWCZYg13e42o5LNz3umbg4dx6yyt6MZo3AKbQDXpLxPNx6BUUwJyPFWtmt4S4kkVT",
  "key26": "33s2sdXGEZXgnrik4GAPFRJQrU2DvAHUp1naQb66cNwVrNYv9cSQCLycHGXQWVomsA5YguDSTHb3vWAJ73VJoTBJ",
  "key27": "UFcGYZ1MEWo9XcTM4HmkTGFrYwwUEWkZkoXZDWrNqn5Dp2TCfApuYL1AR8px2igAHFNug7KBuZZQ5bbmFt4p1T9",
  "key28": "4JjV7xD65P5KQsbdtAe1yeCWsKfrqbrCgHt6kLdNNak4fYcee7tFbRopajeCkoecyDtd1xGYgPWYy4cP5PtZJhx5",
  "key29": "guXHNC485Etc77XX3ifkASe4nik9MuSZTLNaL8z5KRbfiSHq5vhoM9RKdq3vfhKfv5PrWMWaxQCsfVLN7mmtwMQ"
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
