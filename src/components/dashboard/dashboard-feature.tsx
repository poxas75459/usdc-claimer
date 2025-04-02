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
    "4YQEz6XqSmAiF9AZQVEWxDvpUpfmwTKL8ga97dP5Lr4VJkTmtV2tPMoFgc9gGNkQcgDyNemZen45NjSnhZugN8nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fn5zwvqHfNWj7LDNH6fMoXt9yELKT7xpmyyZCBykmy1ozKAQAFXGFXqjQfQkf8SJxwt7tBXZ2pMT8xyQxtnA7jw",
  "key1": "3qHbnrUhVRztWYBS7JK6fguy52t1J37rLwrH9vfyX4uouuRGFytBWzCED8WyD4KRxXY4zWDaiKrEbVjB7ouBXx2V",
  "key2": "2PtUveNcWUYmpZZTxnpxoUC7LXfNhR9vt42zpQg5vFmBZ9ehYNFyyGe3h9tSAnu7mr1m61HaWKhkxT3nwvraNptk",
  "key3": "DXHY56PzUPJx7yKcZukagq6dD2cvvBDgqdqQTn6LwNEjMZM1xV9hkDb1Z6jBM6HTZxJsVmYUWBvPcrvmBGuCRdX",
  "key4": "35wizBHdvyHxGktipyCobh5ctpqhigTtbAg6HhtsSZFpqJ3Ty7TQNvvr7fv7R3uFciAnHKxewXkbHAxkDyQ3dA5Y",
  "key5": "4Ze2sPcfzAnnicp6ZhQdx4zmDyvvfhxmNXsm7YRrWWSgvBqZTFWYf2YEwKowPAT6vuq1bLKhzc4o96qYq4CnkjvN",
  "key6": "3sUJcz17pG7RWkut6erffvhYU6xkds6zAYB5twPHXR8fFPXB9eJ94fmLxCBa318JpEUK8uNQTKTYw8AEjpcyb9fH",
  "key7": "5fyaYFJZPS3TDSALnoeRNDDgdKgZM4BNuHw3LY9szA2dBDuSiy2MqKPGeuWfHxynmS56sPxWWgf4TwXrAi6Gkvc7",
  "key8": "2msz8BrH6AJj1WetmUUbBmRy7Uca8iZmNVHa44J7jJLvKYAyR4SXXa56NyNJ7wV8J1zbU1vdGv37LfVkz3dVEPa9",
  "key9": "3g35MqVuo1eCUVFtyDMkiFKTXasAiLu9YwLaHjFt7piLu1sYCWywGV75VrgtDSEMZ93AKsysDkP46XDkHLfju7ML",
  "key10": "4pn39TzJATa6zL3UL9kyTPcncvGWbauJxAdD22ihuApgjNxbNAt7KfeVgki2gYGDbUkx4gP8BiHi8Vi5C5AHC13V",
  "key11": "2QTqje6Pbh5yv9BKjavurBrsCWuV4eKBz6GyWiuZB9RvRSsGkRXv216UtcoZvRYtwwhHBcrZAgX5Aa43mPCLxJod",
  "key12": "drLNPcZwZwyoFNGvZFGDGH5F25SmgzCZzMYcR5B2Z5KQtpTPu2YhnyXgHKkjAu7ro68eUktt9wJKFKt3R1j8V55",
  "key13": "3SKTAjArQwYBCtxNb3skENNDcEE4HWroujqLENDJDCJXWpxBxXVyBtidYJUkzqpDBs4ip9ALeZ5pjQkPM5VqxvTT",
  "key14": "iDCwFuqMCXBdkdyAhLDc7h2Hx3R9eVjM9ncSEsw7Gw3iBw3Y1S9Umfk9cVBe8CgKQZYnYPUzrT13M1FWq5zbor9",
  "key15": "573ieNnF6YhQfphYfdGmAJdTV2e5HL7PAF7rANa4pZEpkHMogMU32YPXKiUgzi5RMwR3PR34hHvGK91QspDZJDtH",
  "key16": "5YyuyL5h2SQ4zWB4QbGRVEhpuo6ppr9HtVPerN9i9LZhZz7uCDViHDJSK9xZpkkmsM6aLdEgM88k45RvBniMAaBX",
  "key17": "5D6ZKHA7g5pzgoZsWYhZRKTEqErfzDUMhYKEAAMedzDbkzJ8GYo7mWYUYveeRQHos3gmaA8jwBSFD8GPKtZJsUeh",
  "key18": "4kgWVJS2itDf8yd976zFxfqn3TtF94BzmyNUAFwJzAWw5JE73EDJQNvvsePRTygXwq9ZAk7xBK31eArhTG9WJrLJ",
  "key19": "3EyivjaPun2Vimkh7Xg7QHBs8BC17FGemYLbUwCG3GGtFYM2oDL8hRfDEbkrPPxwzoNhVtbzPCYucBPL6HecRVNk",
  "key20": "48Rv66p4vth97xzVEm7s3rCu1mdoR4ZH53kifH2aorDdc8ziNxtv9sffqLJMCJ1bstMiJqJhxTzK54YxidjAZzV2",
  "key21": "4cZfM8HvwMT9jaEMqjNd9gpNQeFgWwKfbi9aFwcdLwtUVKG3fFBbw4PBH98t5oYkDckXckgVR4pUYT679dyBEVDS",
  "key22": "4sYGCfNXVqCdR3ZFxrsPxPyxvw4rUtqTQhGrqQyy9hXLuq68zFFmtih3FVWrrkaUXs9Z1sKzvHvcM15rvF12HZx4",
  "key23": "4wPFEUckBT4tBcpGbAUY5V3Vbty2DvgB7M44TqBB48m44ZZYhGzTCjkSU3mStGVLrJhE2zAjJBEqGVSjnXYxBbgm",
  "key24": "LMuxAcQjhPx2yY4dwsa6pbvBn6bU869bn4DQqVSiskfehZuVhq2AxJ3oaWMPhKRtvaEqenRjJaN335e66AzrbmX",
  "key25": "MH6wT2gNVymsJFcwMBK9XtMb1gJFkEP9xPUQ6RXsmWzd7PPCsauh3HWtjgC5jBiPiCauYw3CprXiW4KdWtdjSR8",
  "key26": "3MGLrb8LEhPKvncHv9tujFui2sGcfQcFomKkN7JZjmHFqNN4sAD3hrvreYR1vNxitkRUZJyBy2tAtZ83gwNM2cDr",
  "key27": "3WA2g56L6AFmLdREDGRjHLnURKndpzSEVjZiZzUCp9ZVhS1UY2rhS973fZcfhWehLgox2qSTnaKXG8V7mEtzR33k",
  "key28": "5nfdmCGQHKdNcrCT4wzpEddX7NiSDBK8WeHGKSeLkSxWk7BBcPfzfoQWcf9pXyEBnD56Afe6h2xKtzXSLG6gpEKA",
  "key29": "23ti6JEt7ViSMUBGQ2aaoEbVt9bh1DJBQ6RB2PJfrzMJdUnSJH3G25DH3r4geLMCNJjgeYwymvZyhqvdR8ByLeQu"
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
