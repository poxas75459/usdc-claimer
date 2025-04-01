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
    "3uzt6LeYje3x92abjBrcb7KxAa954wTcNGVwDcm8MjAzHoT4PynkVx3HJvMeYXfBe3iBM5oH4D5MP6SFBqapk5Ey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M32gnEEX3diBCekzv5gwt5g7fn937FtZ3JaW16JFLCbfwxmA1iq5Nak27etXExmgY5FXNGJeyxTGJGLeJmvyuSB",
  "key1": "4YUUy6YeefVX5a3c2Z1cquEJR3AvAGdrssen97881okf345X5gBTCGpawYitTQ1u5MdCXpw4HpYNNPTARffXoNGL",
  "key2": "2TZEL96DF2p266Nysi9g6bNN4jRmQMU3AzGuYuhxswF4U6NTARQ1coS1LDjcf6V9Z55P1xSzZBhKp4mjsD3Qwapo",
  "key3": "2c2ZXBcgXvPhGq9Z8Xc9su5UnzYoxHGCYvedW8PS8aFiDynmeEjv8en82AGCywM2MuYiYExEuc2HbDpP9hhTW2RS",
  "key4": "UhbXgLVGuznFeTYEiyQVhdwFZcsa8n4bxukXfKz1UbVTN5GGhp81QD4zALGnLodRFBq9EWyUe5SywYmCe8HW81a",
  "key5": "2DPXtB6DdGZMYjLcGpRzNKJmVW2RjHU2fLwU8RFke8oxhSm2gYnXahrDeWLg7TJJT2a49tZUgecFusqPXJhHYeb6",
  "key6": "39Bs243VmjHhnR9LXYrtFhjqkUVM5zb9dPpAhckSti2BXE9au5NSpTh14Lak5Puo8SGLzcxgwzxa6ovdbG9L88YJ",
  "key7": "55TNT94AkUYyYZ4EG67dk6qqYzU13pviijvxbQYXNfNGiPFADg1r7oWdvPz2FDYSfAvHXoWkKVNsc1XUTgX3fR8o",
  "key8": "2U5AxL4E6MTUaNut1Arkwg5tHapN8TNaEDwT4A2JYxTtxpKg9qanaKdHnkJeQvK7Jwix5Xec4yJSU7ecRA57VFWu",
  "key9": "2RModCNuMWt5wRyWqz97KTTTLpTUqfj9KNJtrSyvitFntBqJS4TdQoe3xaguT4Azjnqde6zB5n7RDgZwZAL9UhTN",
  "key10": "3ybo14r6eiAZB8XHeE4Zd5VNRgPcVfFK2batTGhybSQL1TewNewWu7nviRkzLwxfpx8u5fdCvVvChFFNTQjP1fYr",
  "key11": "3saD67Xo7EyhyzQXkKEQUyB7wZFtNJD4WEZUaAJXCGH4qQQS5kTFC1uZ4WW5knpTc8vA3MGfEUXEZgGa53N9kFE2",
  "key12": "51Tdae5iFWtmL6EZdWuJ31UnbnxhR4tRBvYDxV9pJ95h1BMF7zfD3aj9HLJ7pE4TsexUTpPCSEjkEFXoxPDvhfUQ",
  "key13": "4E5frRJ8BhZAacMrZ9FMbXDwZqp3beufiobzceRHZ4Dt8LSiA8b8AyM3xUSctu8gP9ryjJVJDXxSiMQUDEbnB4ny",
  "key14": "4rivzjY21SbEGtMpfJqBi494LHuBWUjoxqCsERUcoSuh3z6hEPDm74Wp6WFwdfouwNxuF4spyd69BBN1Tt9UUNtC",
  "key15": "L19xRbU9vcJ4Y9GzXFGhq6yPZW2A8NYVSTotEwCYVvX3rzJQCS8BnHykfPFNasy3v1aToWoHCC6WnnJZg6ZDjda",
  "key16": "JfwyRJbKSVtkGpXLDjSyJQSmQkssQLfH6RKooekZm1V7sKp6WZ4gjwhXdpsdVsCd5TU34SMHjBPv6SZvJzM2GyG",
  "key17": "4bVNkn9iXwMHoFUmvEbuBTDdk9A7JZ9jYNykCFfJ3haxMCAJ1mm7owWri1WWavQMRniDHHZAdXNHmeP75htgfTx9",
  "key18": "c74MscXkLKxnBsTGbXZPfH3qfsLEK5gn9shcdT9u3WVxwj5oNBExUuRFJvK2dUHR3nX1aqpxJHfs2nEtjVUQYuy",
  "key19": "5XwaRk7mG2DPCvQgRSwbYpQnvWZvttV9FCqZ2b6BwsQsY5odG5DNh6fvnjjUCLgYpXvwajStprgMHXx9mB9RUzr8",
  "key20": "4YGD2UtCDcDPqFV5wcGEKA5RfK6bj9ugci1Wr6Ysajh3WXwJbSHM75APqq1NfJ9CEYCxLj3gXsRiSMrAizymnR1P",
  "key21": "dSj2MjG8mHeQhzPq4wq8JPjqgXw4r1nvCzgiiDkMbbUxHCTWgbcU1kCHRBaZfRArKfUcXo43VDGwoYCHKRuFmYj",
  "key22": "3HpKKdLQZKh8U5HtWMNSDRbmVebBc4gL4Kt7G7pds2TjjeesidfmAsp9A39K9mw9phy7WZaJXTLaCfVrZgLX94Xu",
  "key23": "2T62utcSTdiX6cHWgr6zNVJZNLe7VQ8qekQvtqrxBip1XNygzDsqpp6eg3GLDvGkXB3Kbsc7ZWf1uV8UeSobvuAu",
  "key24": "3nsz5mxUND24REFBpCwB5koHCSZADCigZ1DbZHKNvywx5jV7M9aKpJsZRBtbEVBpKVbirqVwsCAUx818hU17zcjk",
  "key25": "2MS41FfKACBssfuaWhHDfaNZKFFvtpB5fchWSN6BadhTbXHkera4H98b6zSwWAGebirVjP7ZLDQsXiJUmdanJRKV",
  "key26": "5uBTdHXnVbC6o3yMjjJ4r3RRzeJAS9zwXtRmgLe6tUXarhaBB6PGeKR6cGKoUgwP7prjVUQdXxvtoaHPTYHcDnW"
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
