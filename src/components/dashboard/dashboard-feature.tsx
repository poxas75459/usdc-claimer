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
    "2ue9uCa46KEpRxikqkp7xkGtcsmdVsDYRDwb7hTsWzoniYSs2tryERbYGHSpmm29f9ttrWKJ5D6SDUsHSEQnkC2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vEQYo4EyNW19xRDivsqvgYAd4bSbo8aRyRyhUuAFPquWTbe7h3aMcLdkd9Eq4f2m3j4GDCmXHrFFz62yMKnXTHE",
  "key1": "4318CKAGvBCuKCyt9vVW8TGA5PNdh2VQCtuGMXmqF517PeTRoayQScEJ2VAsmCLT5AdY3TrRx3YGmVdqMv9Fn8M8",
  "key2": "3ym45bwfQkPiJStHVTRPuaej8k6Ps1M5TQnp4WtgVE7xaNYbkRyHd9P4vd5PT8VSjP2EU6UuZ71H4LsY4BBh8zt3",
  "key3": "313XZRqyzL8UcNfVLKsF7UUBKakP6fz2r6G9gPAtHUeNvJpDWeDzuS8u4UGTRBT1Noz3dGkD7bf9aL7hjfw2SynY",
  "key4": "2VqQiahnyryZtseg5a32U9wyp1WorkAYJKVmj2pf3qCAQGBnHiNhSrrKCnbcTnEViHJApqUxaresSng9kxW64t6a",
  "key5": "4yKknmWwY7bUJV5adsi8JHoaLiGfRX33m2dCGBoFQSf7kbSyxfUNBoYvUsFv4HV7VokxUd4GBCAFY8rhULiBkg8z",
  "key6": "4N6NArdk5HYWeNSomN7DBAcstu2Ayp7zMxXhT6geJV9nwDMyR4SS5KfvbihK3DiKtsN8wFfUimb4iqV9ufw1NQZn",
  "key7": "45r9crQUbMJuxvnh11NmvpiTtQQqHiAazThBTtiJ77H7aP89kaFE5x8j3pZgQDRrSZEA2pG5cV8TPK1cKHZh54Lo",
  "key8": "Mv2wae8G23z8ma2yuwCvRhqZsRKFwFAqA7enqCGMLQPawx8RfdrcnM2fgEbCxc3g7rXJTfeTj2DwpW91atjDFe8",
  "key9": "4vp8od9EVWhCGCekg67vLWvF9mHzqvWLFvxaMe2S9wLFdvoMv1bV8dx2rFJT7bfXyWxmaf57NdaCrdadnrV32UPH",
  "key10": "5L7hKuY6gAEtRyg3xCJEEUcQjKphFb37LcagsWvBiDgU56uiHppFaf676ArZahvL92FADHeihghFJzij71XzBtyj",
  "key11": "WxR3rMmCmNeakMbWt36EMLLmNaEHykkoEpREuh3JtzFFVDFMwtfuzpnAkwt4nhLxUZnVyvf945fYGvLJ16BesLU",
  "key12": "5zrJTu9enKg5AJLZDUBcvf7kaioaKMaeFA5cD2FSw38oGmHWLQqTrEAZSddU4TpHKzYbPdNqikzsBp48GaVwdayU",
  "key13": "R8t7eXp5Qk9aCDtXZT1pZrNNkoL7uiMYwmrQeoem1WL7mPFBU21ntCbxns9JfXTbSgZVuz9GNRQvGyySCAeMnEY",
  "key14": "2juVd2xdFm6D81CAPN6qCPiuyp6y8Nw1eJWcXijYokh6f8D8uqXUsnJo6ucyFmB75dAoTwTH1phB8s8bx2aKtE87",
  "key15": "3R5wTWCemNnJS8vG85VqHpFFFyQCBQdZvY8Pnw44AxXUDdk677LwGgg3u8DLdKzsxgQMjuAw8turvVyDUiYvF3H5",
  "key16": "497Qc3x2JdyNTH8ERUkFTrr49AQa8caYoi8BSZ9mQBiK2MDDTqPyeahWkFnsHFxRFurwupiNkoRkpTtUsL7Tpw4U",
  "key17": "5S4fsZSDyF1fXKUaVfRPmq5YEV13dRw6gG1evqjNrXvBaY13DSGycC8zRNtM9AnUShFTYKvgd4sbkuqsvzKZmPCb",
  "key18": "2NA7xE762i8y7e4G9CFNr1aakZBBbtRb4LrNsKv6FKdM4Eczsr4muRP8aGkx3QiT8J9p1SAsJE1bM4zFdDD1eJ9q",
  "key19": "6jgMaUEPUsBCApE5ttvCUUdQAYh34Dem5NAT9b5BKkVij2W9wMiQueV8prPWkUeCixDyJQdqU2ntf8TpWjh8WCo",
  "key20": "5Vj9sHdTNcS3PLbqffrmhr91CNHNoDCLYbPKhivshkNhQfHo3rQPeLxdVGNaJquJwhwyVXGhQCUUoYmKka89H2GT",
  "key21": "4QMH5FWvcRhEqbBGvAqmourhwY8fxA5tEEnUSRGVpXZkJnPeJVH2hJCWBWb7mZGenLAUM9GPw2sJudhgcjsceErx",
  "key22": "2fTy1z1ZuZEUaqPh1smEa8BC1DZqExGxo2BGcz3uVQtXCyXpoH75VfUEobN1A1vohvNLrcT5uCUdkcqBTMUC2e4G",
  "key23": "252ZmGgRrHQmkycTLFx1kDQiR8xgPs3UDs44QoD2Dj4jGDHwEuKvin34TWzbbLLc3CAct8pC7AK1Rq9AmgrkYoYB",
  "key24": "wzgH8SiEn3q4RsewmXz34R7cwZKTHPAsR424V4nKnyQn5x9DoUsx8xZYCek7kHhqJZfTc6YgGHRAsbyXNJYxkbd",
  "key25": "65KczUpo7Eaxs9FxCATTUFmmUYdGymH4MUiBbpT761bVSxtLPbRLKXf4K2cYnXoLnAVUGK2jvLu7FRm15wMhAmgU",
  "key26": "5iEGCzgW4Q8Jz6zYbTwEEuCRj9zModww1FPM659V27rSocGGSBdf6CkGpGcDsgNcjZPeGtgvHjMQRUwGrS6AjiQh",
  "key27": "2WysjaCoddUoGNFkLMkUUVKx9JdHw3R5BEzuZKZeQ9C8zzV6spPj9mVpvvStWhc9i5hQETck8fpAVF8e1Mkp7AxF",
  "key28": "WfkZyGtRRGVKWjLtJxMwaFbbZAKE8UdnWq576kUp7apRaS5vtXuhWgNhmXGc8XeyPFsk6F8nRstLGqf1J1hckFd",
  "key29": "2uuywccBYBzUDqcngknREG5bthTWGxDGrNbRS4gSsqBbF3KmfNpjN3foZkDJHGi6uFCkgMpeyQyrE5oDkF8T9tnp",
  "key30": "5yCMDAavnJkKR9BpY19BAx4U2AaQcuD2G8j8i7Qcrbs4yvvY1FG8MqVxYJEFckww57VGdx8WCoM64m2BEFExrL5x",
  "key31": "4sUA5Nc4fzYWeRVS2RaenhE4etWFisr48VHbCfUkUjct6ujESj5mBBDRtMj5KQX8sZBMD6JcQX8AYhr96GKwh7kU",
  "key32": "2vZNVXiyzscReA3fApqrACNeTtcjjmg4kzGUAvxEg554Am7Z2paTBj6eyeWWfpFUpC5qL7mrBTKxULcUurxVYgBG",
  "key33": "5EqfMhkdgZa5mQujBVEG345Dco4yF2kmJGocVB3mKPK27jQXTBJHrhi13UCzxHh95JrXpjW5NN1WvAFJFUJjLQUp",
  "key34": "5iWSNht4xB9RrNFHhkkpRxxdYWkMUsdfTT9K6gCcohKBDqdqVYBGqDQrSj2yLiuWm5Vt14yjjSVy97gbtiVbBxKm",
  "key35": "31AqfRM6oUy79egJjKeURn4i2DMgw7s7329jdL1Siod3tNZ8VQi4cT4GBNoMKjyoB2zT2vKfWd3cicgQZYVdBJbS",
  "key36": "343BTDDHCUqdMJPgE6AF35WPY5txbkKiTFKC4oRSQ7ZcEmG3YxWn53mGiPvyiacQEP6qVy6J8Bxi8xxE5g3rMGrQ"
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
