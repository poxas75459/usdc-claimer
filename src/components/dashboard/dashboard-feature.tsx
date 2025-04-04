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
    "5WRmjdoVJ2io7Sc2URGc5XG62NrQZeiRHjJkMNDWQdm89GjAEfNBX3mbVBUzxeAtXJp6dBd5mfYUUoDtjYiUS855"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gvnxYUSgxDKW7eAgZpwxHonm9Fq2R7o8QppFVcC6cKwHbtgf6LooZDWELRdrQEdbbCFfAwBiP9TdW4B1wfVv5fa",
  "key1": "3hthvqtHeagowHBbrCwmr7Yey7jWb71BcydGhNg5oFi6njucbvK2pk82XQwdHb6TcHGvMW6f1bgAv9SyvqZzTjK",
  "key2": "52hZEjQe6HubKzmgXzBHgh45k9U41kvUXRiPsGFWPnxacqMyHvBVJbX31ipf19j9JLyMnrnNLMJXmcEeJSeuWEGg",
  "key3": "3WpuSnzR4h9E41chy8dEmQc7QAQTm7pSagcuM37UXtMQwodpQomtVqCEXNZwtwYVUNvwSgowr5braDz8Fjc6syYz",
  "key4": "4gxPWGrv1pKohK88oG6FHj7kf2ozScyAv9ccEo2mnwtxvG8wHuRF1w6g74hHE1LMnewSfDM7cgJZTsFXXWz6SuaJ",
  "key5": "31hQCnHtUdg5WVtxzQHpcZ3YREVEMjtx3fpFmgCxcJPdAmZjGT8vZpCCzWraTSe4i25P5AmKxNfs55CKUcFJrsP5",
  "key6": "4eLzRhYNrrnSySWTmtH2ieERU1szfZ4ws8RpuEL6PoSzHh2VMtJLGRnXrFoC9m5vmvz844QjmVaPSh1hwv4i9oRF",
  "key7": "5BFNQ7UGR8eyZWm4AUc3i5pTVFXCAGFqQpFPC2nykP6a4SxUuFAkv9hZtTPdJGU8dGgaPMuYZxivV4Lu8ejaiACM",
  "key8": "3Dc6nkQPUfEQ8wcvLwKePp49LsG7258KkMWNuTd1NmEXh6bFne9FfsyLvbpwPMjMa5nBeKBkBo5UsBLNVEeWdmyP",
  "key9": "4mhV647XsxUQD492smKV4vECSeQuSoFQRA16G9deABYLW8XZGMJCcPAm9n515QJTp8hUTsJZF5jD3vP49SUSthBx",
  "key10": "3wKZn8e9ZJnEt2B7Dnuam7MdecBTwo3UF3rJ2c2V5Vmri339m78FL9wTNH8VTNouzMVuqsLFWvFsocyrrMPDhwSx",
  "key11": "i6XAurEam46DKPwCxWQVkLwrHU5BnnNwMRFRfaSKcZJcPGRh3XZ5q1JGXvALFhX7Hsq92kEyVVQSKpdta6sxmQe",
  "key12": "5iDn2GvGBcWeSZv43m87hhagESguzjq9NfogkHgHBaBJGXR97TGDuVvrkoghnLp7JocLpbqBCkgHwavYcjEbGZtu",
  "key13": "E6sfPf6xfNV5ZVrZyPGyeutwfXtTsBPwfdxYKMHp3aKV1bMRzyxPRLNb5Ldp3soTR7c8Cb2cVtTGiuMbRsMsv56",
  "key14": "4Wh5X4PKmKGF6e56XuyxRaNJ3ag7CWX6a9g5xLZcDsRqoAMk7kgiXbp7xGPGqJFC8dE1D85muvAFaqyM3q56ybGY",
  "key15": "62xQugVRS3MsEf72Cc9otge1xH9gMRUiCBeXctw8z8a2xqbbzNXMJL8PwZj5kRZjur1auSey2fm9NUisXkAA5AFK",
  "key16": "3cXdx7iBwxYXv6CTEoDRfQynus6nSYWq8iRo2uNj8FFSG1dqC5zsVJ15NW2y2iebYxBtsUpwq6ZGkcw24WSFgB8F",
  "key17": "61ndYNirBWPNoF52SL9DCsoLPi5Lg8itrDgutirrg7yzG3CvT8GrfHY9JD4zdRYLuCvSKugFpk1RpdVWgroGzcaz",
  "key18": "4qV1eQcqkBco5xqYUjipB8X9UG89cMhXvJv5nZD4J6aWhA977XaESerx9BJNXQ6qeksaVex9CzWxm4E7jJcEaquQ",
  "key19": "3PiwzJ9hftWA8pxmxC2fAs89xiQgPD1PL86kYT9QvC69aaSyUNJQWawjSKAVQEnYr1KhJAb8vU3WCrosBVg1mDdq",
  "key20": "4P572wq7qY9DgcvNnr7TvmyUxrSp9dN1djP1bg6QCqkpbaz3bqvKE18RUWqBus4DN4c2HRMRXzAp8ZcGmFLEJpFn",
  "key21": "3bVbfc62xczuDU19c6aFKXA76H8Waudesgt9P2aBf1qS93e2oZscEHYi4TjwM85hhh9TaykqccjmUacVaka5N5bu",
  "key22": "4hgV9Bn7CEyC2tbMFfgZR4mh15a6fhfPSt3XmkApJ9nNsdSAe5TZrx4oudSsr1jy4GPPkD5gWLxA8qXpADFSJJZD",
  "key23": "5eF3HuLJddnQwUYaSBwn1qfQb62VodowAqfFD3PJu2zATtrGbdHgFjfWJ9itYhbDadGNhjqJfxBhiUh27cKtosWb",
  "key24": "5Sha3UUFtU8kVmX9qNjmpMwAVSw8AxFzmPA2EviZKSqfTPQxKBuexNKi8jPjobnPpDykr9UyfHfi133ZkGBnWFaY",
  "key25": "byS5Rm323upfucvtB22mTt7M1qYPC7uQu4sM8hkzViQGojJhxJRTkJkaF4ga2DSvu2TzLpfg14GdbGGTa65B8At",
  "key26": "4zyfUzCSUvZPYQiktn95p2XY6Kx3aYv6BinnwB1ZkddU9yMAy6BfhLNhdFJJJ9w2xbhDHBy9FgxRvxX2Wn1xUaY1",
  "key27": "2PGJH9JXHV423DFC3LmrTNWouScWkqwV5bj5xWhShZtPmPuboQfxjwSq5AqUCHM6jfN5rmgenMJA42eKS7mSH6s7",
  "key28": "54mWHJ2CeGjQoQxQrGWi7jo67s8S6jNFJwkM6e6v3nU2XrMQfNbYjD9o8xWMiun9b19XVFiE3nJT4zFW9ET4qi8X",
  "key29": "uWKty4oRwTyEbZGydxRzq9Gp5BPgA2vUUjYm7DG64i889EaXtHuVr3i9cXQ4CtTTy98ZN64Sy5jPw17YSyESqV8"
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
