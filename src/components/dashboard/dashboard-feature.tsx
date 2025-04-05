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
    "3UD5Bce9GiAVmqTKQ99BVjSCyYiW4ReEr3TiBQGqCMTbNjC5VHo62VkYPNKduvRi79F5bBsWxRq5qnM5XGMS2XQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WESsMriKRGgsHyn1NhvnCmeZqThc6XaZVrK9YkBfHKwRRdd9DSC9EvrMcXt7Jqd79399M4DsAb3zH27m5gPzJ5F",
  "key1": "2wf5Nr2VDNvz9yCNCW9GgBQG8s7JhVEuA1hFL2aanoVoqYTZJQBcwb3jQPtb319qimLwToUBkt6G6H4vtBHqsn4H",
  "key2": "3WS6p1p9idgfjDqQEAz6LVWC1hFZdTyhYkyehxRUsJhyVH18e331xXr6vG12JvGEve3o69u7kmF4yxUG3UisRHYZ",
  "key3": "3PTj6atRiYvrJt1pR7x1s5dht9YP3LDh7Zm8teMHzznDN3FVT2avka125qt8zo3B1PWgRScntDj69sjKheWYGoPd",
  "key4": "RicAKXCMxn3DM85JE1tyxRmxAthRMyMiG82hywCauKFeer3ZBfN39XT4XHpecvSkAk5NYVs8jkFK9yFPbMNMekB",
  "key5": "4zVJhLhMH9go1nJTd1oq9farrZyH7PEwadsM8QLv5JZZdo6P3XW8P1dTKFEnya1qpNzGdBNMdJRbQoWQD1nGedwp",
  "key6": "5miT1nUattpnSoubG3QMPfNrr2Bk1LmnWanPKXmEJhSZHvY1wyK4uj5DZE2zDJ6MBQ95hMKvYo5c5Fx8LenUn9Do",
  "key7": "2rN6npWUjonENhrhRej5BsVaJyHQeEMUQdyQKnrBD6MmGFVeKgwuF5mPQXXasv9pHTCEuVtpfnM4eEM75ag3gc4i",
  "key8": "9i1ZxUKApD9RTbdPtGgj9wUnvs5oG836ziq3mq8jSTUAvbjYWV2RY4cocKVps6QWdDpCQRs8pTHnWCYDQTNffEZ",
  "key9": "52c94E2jpB7ebN5tWJh2QcVhrkYXzuC32xFW6rSUKk9gEGJetMnRnxzZ9mAFbnKq6Edfdxbg1XEDfsTBR8KZj1x4",
  "key10": "2Pzcfe16zHooyHDqCfAtt28983jUS28UmXTB7Y1FswjYUN4abUi1Wn8KHTEup56quKujVwGGcUtcYLqifmdgvJRB",
  "key11": "4tyr6Sy2rFFzHGhkJBFT8xUUhNyfvzmJkH18c4PAnTMvrrE7Yk63qnNd2YHTR4cbVg3zxKuixMY7s4M5NdYvH3aS",
  "key12": "31ycDjJ4tKP3GTEz4aQapPUeDqDSjwoHyo5RrszfHjLMSgayioLXL2Xx9NDyP3Qp8oHmpa3B4YQ9fGTZxgmPJ8Lv",
  "key13": "3oEeQkZbA2rXgMD3FKVAo3zRYG4r4ZMWpDStKJu3ecdkFQ2voVo6a45B3S6VQPWc1gT2uzp7w8S5gsZnk7FCJ2XN",
  "key14": "3suRNWyEYh7BbaGUGanSpLJ1TF76QKVRStedyUSztFXqfbBAhZKMZ6GwNuYjvB7z5GgY9Yu37rweHKmhQ7Yzg48n",
  "key15": "3WPhYGeUzY3KrwqPPBgbjZ97AnHqcQ7F3DKDhycjuFxfUp2S9HCyCiA7srZKWjFDgteTVDCGbN8wd3B4qFBRPX9W",
  "key16": "2YKxMP5XCwpqJZQVDEcA1S2LZp8VMusd23xfLiUveFe45EeexKYmHyEeaz5KZLLSW64T8bC4ATJkSa7DKifowg3Z",
  "key17": "LWtV6MpuSddHnXhX5SJnG37LW2wXCH4tqgf8sGyCsiKTDdxen3C6oaAefta1shkiZ7R6TLbtgXoRwDSmMdFMaQu",
  "key18": "4ZDDs86gYQXF94314qtnaa3bx4chFDz3Jb8qqG5Ek35et45uCPWGNuzACwPcHhSzNQuASpqdv4txYdLjk5yv6fR5",
  "key19": "2DrSZxso7g5mWsVxeYs1NXn55b7RFPfWjJULPbAGo7rtH8ttMQtwKKbo7AkatsQ7mFgRCyCvQnwYKaH8xqNLdcz8",
  "key20": "32WDqYFYKRmNdasXfQgq7xutNvAqWtUPCQbm9EDGNUySPhdRpgCioatfztm6SNV13PfBdqViHTsFSiDQJAreBYBK",
  "key21": "58HQw99CCD5B5VAkrfhTPTH82v7dHrH5mcht6YYEi1f9HASxdXcr1CEjRPAMiHnjPNTu1mHjp4DjJpBPmwsH6mD3",
  "key22": "5yxnWTEHV5Aq3MYgYweWRreqdUKXiBv5F8g9gzbdGu4D7hzQkjVQ1S1iHeHHEhntecPt9HRLV6RH3AGrEqMEbYKK",
  "key23": "4NTHFYup9PG4xP3pu8a5MgRtiXUyth5a6MGArFc3LGeJni8rXV6vRMTL7cDwmi7Tu6zfceT9a1XAFaQqvmiMtL7f",
  "key24": "2PAyYXmmQKmzoaLma43dwLYg4NwUsT1hej4jfPfALQcdytkenDrqWuEHqkWDd2CzCkBZCRqhvRwvXYtT3p7HEmb4",
  "key25": "nbH3oKXo7BGZ2GPRXs8wCbbkp1kwgdY8PGBFvM84EeoLSCGo2DuzKBpFTRYwLj9YhTgvXx5L3KVFUZ5zVffG6ig",
  "key26": "3KQiWAK7LAsDTWw5Z2XYdWU36oYAViMLPft7WvacnwsLNx6kTJAB1HBfo4e6Rjb59JyrEkTaP4nfTvqd743gsMj5",
  "key27": "2ubFKecZa6sDj7Z79CctrGpcqGFpkYVpiGiWGCDiAkbSYrSQMwNJATFr35T45w96xinamLWAEbd5JvveDLo5F42s",
  "key28": "6d9DhYCS5mGN3c1QfHLTtjBAtGuXCNbmeaZjCYPbwkXU4Lq8YNVNtqrJK3vW7EXC1XfQDBUndbEKKbutibW3Fwi",
  "key29": "3XV3HgXQxdWiGZEQZB9R7tpsSok6eZEtrbtqdHqsjTHG4AJweektweDoApmGCfnpSjzKu61mTH7aM37GGnAvWAhv",
  "key30": "3rcko7oXkCBdpPYscEmJNg4QcM9LkznbJiNzNnyngKr2tSfCwUUncsJ6WW965e3QN4ThC6Z2WJQaReNerHFV9zpq"
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
