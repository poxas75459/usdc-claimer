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
    "2ob3cr6DfVkz3XNANiswkjacrPszbJrwevPp7iAx12yY84nAoSKaLj5iDuTPPbmVHtbgi1Qa1qeY5GWb7NAVLPMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydW6WypvwfCu4gZGadPTYPeNsjGwPphXK4YkXtn88aUx6zHZNzjhgWCb6kbs9qVEig9iE4DWD5FJmffeBmkpi7F",
  "key1": "3WQ8Qpq1SDdxyZr4ZBrasMNJoxzvA1U4DsWjaUccJXgseCS1US56dDioguN3xoL7oTcSRHkWgwpwJiEq52xj31Jr",
  "key2": "5MS4FCdsby19mUWCMcTiGCdfiJTRwv24H1W7FAv7UxRkHLXzALezKYEh63t35GXrjD5A4kRVtEX3BdzBsFmTYWWH",
  "key3": "4MhEr9LAUABtR2MRKs3QLjGwsSz5QvnPvMTVBp6GoZQQsWPApzmJGUtQi3a28NZWYrZvQWPXGJdTtwqPmDJgo5ot",
  "key4": "47bhEpf74N5u4ibXKgHi7Htew2dzVBp4DJwcjkYWhTpZwqHWKQ3ykEScakrZQ9XezcQEM9FsYNFJDGfrxVgbtLxr",
  "key5": "2sH4BZsbeQ9uUFdS5GeyVBZC37i9WKvz7bnq1CFj5AVhPuXi4KXZxb867G48ivmHrfT438PA4UHpqgybDsq2XHj5",
  "key6": "28u6rLbEXZYWd7rwhTBqnPXcKaFSSQk258boF9JT7w7mZ8M43Liu7ousNJpM5qk2NdfGvfUgb6p2KAALtHNUdqSu",
  "key7": "29jzqGfFtjNCgbx7ZyZyfuVgMCH5gFEHCXwDkwANC71Y8dKk5wBR4DN5qhA2xMKVyGP4gUeWaX2fegT6zcSD8AV5",
  "key8": "2BnaJdbwS91ZNVvaAERyBhnoKP7PSbnVZtYujGUtHHC4P3C2VU61wyDk91aAMAVpHZvFtpB1mo5M4qdtjvyDe5zW",
  "key9": "5bL1mrVZQbyPEiz6FuWVqcxYk6q4qrJJk45uJjUcteK4cKuocKRdwDse33agK81jYSmmwXPFZD1P8ofjWeMQ21SH",
  "key10": "XaCfxBckucCGeHHwjNWNX8aAawso4GmwhbUENM7SzfzzY5XMUC1gjyHcVXhgkcqDtK9NBR9fc7LqBagn6UkGgn3",
  "key11": "2HPXc5GpW9WMBBCJsAm8sD3GaRbELNa7KNniYqwV9Kry82CYyzaeKmuWazmb27oSaa8gzHXaP5HEzug7nhyWHYhE",
  "key12": "4a9sBi1okZuLMnvAXk4iqQHymim24nCrFM7RXp9tY8VumtjK4hpNQsASxBYG1MHoL92GBcwCcMqfkbUn7JaUhQGS",
  "key13": "3EEdzaGGM8bTmFKdQx6yGZ6dXbWM12c7kqiWGMNTKaEefREsFso8kWnX4RDDRZPmb2KY8c3a5wmRZtWYATy9ep9L",
  "key14": "kEucY9dgi8hpGgzXzpxcauCySJKeoB68d1AGDrMZAydFAgif5Vttt623cJD3gwhjqMmjoHCkqExA3vni8SBSZSQ",
  "key15": "4u4L575kcQx5fBXgyw74J18bcFZRZeNdn8z5R1CzgB1xABZJWkAPpS6hdVwTQ4kxtdomR6iSpykyJotYY1irP1a6",
  "key16": "2uyFeCdETdkRCevyk7exZyXc4wytUpxxAdZFhMnEszJDwWFTAWek5528keSd8Lztx5vbFyEkhhRQPuViV6PZH3Zz",
  "key17": "4JBittdNjCDr92eRduCZgiPUkXbafNqvaZPMLzn6rGbCdF2fUp7doyrCmLkU14HpNRypEGWnYbgiKEDw9zXqCVzA",
  "key18": "uVcYvixB38i2kp9jxSMLiMjNRJbDNBp8jJpNBd6HyBDDsgYrQBm9o6Tn5vuN4fYq7a4uCBwquzFpEg6iFYosWjA",
  "key19": "3sZh1de4hnHcBHf1dq6ZFqnjA45gxKTJ1DLvRNreWP2jkZrKSzvP6YqW5qPFSAHzZgK9oinVaQy5o9499YYKqsoq",
  "key20": "3x24tWje1cwCP5TfmA9jZymgXiytYxxCh35ngmi1mQMoybzfdEdMY3xBRso1dhzBejSAUwjTJFJaSthVWkBrQTYC",
  "key21": "brwgQk6MhJc87pFPMWXy5mzVHGwh42qPL9WoqZqXDhYxu1UnS8ju6nVB7NbRR9U45cDyBjcZcefhF4FFQYtWjYA",
  "key22": "3sAm5c71gQiPFbxkarka9PyeLLJXVbAmevYGRhpTPLd5UD7JAmS7JMzwgJijrJHYAZPoxwNjKswDguz7otB2DxhB",
  "key23": "5PNoKfdmrjkVEEyckxs9QkNXdZCj44WYuPqaGeXyrDtHwcFeW8XQiNnN1kZU17StQDXp3SHoWDAjK664F4Dz2P2c",
  "key24": "hPofjdCsPmSNrwzK6nqXmbZrewnyk5sqM2gquJPkkT9atijxJSNsoGJR1Bd8u8d2fT6LqoZFeYZRBrBhu2JkKWW",
  "key25": "5SnPit5PBH6fDejP97cQM6MUF4FpXr327uXudCarihd3YP3RLFH3rQ9ppXMXDXq4W7JNj2dJup4ZXWoovGU1abHq",
  "key26": "5dhmNQRZZn8w5ZkEWBCJJTM3uTX4fK11Hs6DJfZ2bQWES4Y2n2pq85HXhKG4Sr5yZfSJpYRYxj1gcbLnxM3Cfj5G",
  "key27": "4exdb27w5SP1EpskY4kjvCU9QT6wjK3Qt516TWkPYXs1SgkoUsCDBrV4ju3Jb7XyaYQrzM2FsEamj946kPrtf853",
  "key28": "2z46ukjdABoLDAHTMgvJBp3AkKsdjn93966yZ9Cq5EvTxgUGTjkm7DfhYiHnTdTVK9Gby7jouJQjREJiup9Zk32R",
  "key29": "25rEQvE21Xj5mbaWZ7t1wRdW3xcLnDcdKbDEgBZ2CktNE71bo1iFbGCRiYLrSBWEHib3hnUwinqmzMAL7W4A8dSY",
  "key30": "24RnDLUy8bnA28WufTf6Ch2TcoxrArjE1Z9Q4uNhbM2sQaLSpKimHbpD7vE8b4MoM5UG8L3jp61daw7ykKdb2jmC",
  "key31": "4b7UVm6DhVCeYq5JuaP6P74LXoRrm6YdYUmzUWn6j5sHhKBk2CcyfcwzPd39HcBQcexPLGs4M5PKzhpKqqoA9BZV",
  "key32": "38dSosAnN1hGJeykvmDb2L3EGaLGszKVqGyJXtJjwkcBPac7FdGkPkL6agT9cRX8CgvQXMxscDpDvj3ARJ4E3Aeg",
  "key33": "3RHHRNCfx4KSDvphowgmv6LYojs4j333t28pt414jXHBzx1WgZYxGRxRA4R1JQzVYhCxAQj2yGAGmnjsyUXy6NoB",
  "key34": "5V9wXmiLfWConjR1Spd6G1CRzgsnCZfULaHtEMnYQZJEAwF7D1KDNU9A4odQgGYaxdkNrkfKJPULj5Q4HMsyqEQ2",
  "key35": "2rkTCLNFGdegBH3kaQNjn2KGz6Edhycgx6JnuFWS5Rv2jWtsWduMndYK2WGESzVWgswphVDX6LMtb3zqzovTo1A7",
  "key36": "sbzqcQFCXbSMS5FfigJtNx2CxTZRjDWicX5pdAbdyctJC1JqMtkTunujxGSwkJ5AnR496GakHzrwncESr5Fzi4Z",
  "key37": "5tfMwQHT29Yi27bfHGh5Tc1sq98FZfaeAWKdVLFfds4nnrkxJkQvTRipg9XKGho3FZiFVWCssbRgvscwyRjcXxaH",
  "key38": "34uZnG6ZVpRbahCE2XHTn6GqA8tBCcPMKKn6KiSLTS5ct7tV4QUDj7LkRjPsfi6ojidvUWyx65uc3kpvrqmWCCB3"
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
