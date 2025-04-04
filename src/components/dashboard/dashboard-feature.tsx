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
    "3L9V2bMzFngq9JMFCDLWXDp3ZRp7RMVSUhniLtCbcTqyd6EpBoniiWNXvwcYq9t8brs9RHpfQ3mAF1JJUDGy6GU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WwC4442cRmJ6xcJJMAaTNEzRtRKKh8S5qsTbqdgT46jYyzYeAwh1xRaxbkZ7mNaXnab1tVVMJsfCsTNdVuHo5a9",
  "key1": "3X5jTqkbia3ZPTnTG2xkayGjzu4WRKDn5mQYvj826iLiEGZsrCzn6tyvMvgpWMcvUGRZYeuN8eThrfsxCYdmpiD7",
  "key2": "2QVkSyhpuWqkPnNsxLztBMowckwVCxBweX1mV8uK3XY1ALx3JpZaFWFP7Zad3WdieKKuxeCyNbXYEyHqSNVHWYvR",
  "key3": "3cV6hkLsiSQ2mUt7vpBXcRGkGrkyRLMndwSNfXrHuYxBv7JCJ6pqjL1dcYhbtTdmnJrpf1q2XBnhgKffKjWjRvYD",
  "key4": "v9zAkLQhBpnE7KpQpyua69Ac9Hg4Gt6Xx8Yfofxyt1SkiZBKTBF7Uzt4yYpiprpjwdep35DpBxrxZCkBKuzhxwM",
  "key5": "4EpSsSTYzdye4XRXWCQKcU6UU65r8zDLGFMUJ6WUVrzAb2xvjpAbS7NtRmshHRMM3rSRJQKiHwSCLiBQLpcF7F7H",
  "key6": "1bnJoj1KHtTcpiQqVPQ7rzms7hwhUnAKgdpG7a3AoWVowqCFctw5eX4LfXUsrwsfhE6mAUL7x7m6Vm3VwK9aUpA",
  "key7": "2pjxi1MXEVzooDgnQRX7zBhqHPMqFuQUT4PSJSXMgqNiUAnhx1QZMNjb2dVsXCEJGLPVcAc95WnhhhjPh1yESrDH",
  "key8": "4PeZZ7ZicmLxUp72PYH6e9uHV8DY5RUUegn62f7K75RzZqoVZD8L9jmoJfY42VMUyRfRpLiLTK93NyLqQYzpNB6t",
  "key9": "2B8cTYDBmrw91bbiG6yFrZBh8xhG96hNLoWMybczg8moYeUQiqfx1WujCCALrMDrajpyusR5eCmMfMqiYgLKADTh",
  "key10": "5wnoC5r6QgQZjcUtEPH2D9SVEqRcSKfE9KXRUJcMgkKgEffmL3nhU5KkkMdfec9L7hnNDxwmqAxbGTzaDaHcy7zg",
  "key11": "4V8urkmgXMNMNnYAiXThn9sx2Ya3NLLs7AnqbZRNpJJhzs41mt9CJjMjAiJukh1R4cr3UngPi6pioW3egEAgUqSx",
  "key12": "4XrBQLo8oc4p9ADAazmDZeFThzR2UAu4ySdzKhej8TswbzsQcjqSdmebFQbHHPa7j4TUGCzqfx4z95HhLobVBuwX",
  "key13": "4xyADFDziWduFLsrzncGrm1fSeRcCdjSNGy82P8dQUGw1eXoT5AxesZR9fa5ZynmLSAFLbxuhS8M1d25UjzdubCf",
  "key14": "5hgczw6vP5QpNhdHBo2hve8tZbTZ8xyJmtjtxm4S82Xs9ATVLepUnZ3n8QMuZrcPaV27R7hZmSzMXx1A6ospPokv",
  "key15": "3sygjhHWfdZamSASxD2zWoSdJ4LCy8ob7rH525nzfDAqaLkJrcR9LMWxG254ufXbbHKY3xftxf48FWh4yKgeEs38",
  "key16": "5o1UTEq2aEmDc3P3WaKAfifZqWagjBMQfeLX8z7Mw7i14FmqpSE2md8SS32ydXZuhvTfmYLKTb8wFbcpu1QXRxdU",
  "key17": "5oN6uu9TYDCiBDwdzVaE3cdFHrMvxaVWmVqpJ7UPkeaG4TYXo7Nj5NffjqVqN7Y217Z8ArAPqgFppYR3Tqn17y1f",
  "key18": "5qSB3jbyUxVF6YbYhof3mRMtjQX4x8ABPoDa2tRQ39qJwYBufH7NAEzPJfjXH5r4xvreikN5dZVm5GbVK1xR4r27",
  "key19": "agLKNvjbTR8eqSVuHEddZGxxwyb46nAPgYEGLyMZrVYSVkf57rD7MAjxsp9ucWUkGN7nApvPfjJQGaUeeVU5W6d",
  "key20": "3D5KfGTHPV8G3e3Lgge14sbUSZhVFjQhWZGX14DQnzVjK3P5XGgEpUJ4z9rUBtLH2RGoUS13Z7KE8LwGn7hJG9v9",
  "key21": "5qTDhFcKYe4RGvf3N8z7a6HXahyp2k3qr3cUu2nUNimfbcJpQQ7jSm84WmfzBibUzK26coXRGFniXDwTARLoAH8p",
  "key22": "5YeCuUVDuy2aLk1eiz2MKj7hDyQHtNXkeZ6Gsow8i5Yf5mRuPbUNj1Jd1TzABEDfqkbqsU7PiPkHNMD1CiZ7Ec9Q",
  "key23": "4PLAVx5KkxfAUDqJHzdP98Zrf1wQWtTjm3QJxmV1TteAMFrGcrMfFML9624SAK1EkBK68CtKdtsJzKvW8pV4DeVh",
  "key24": "3sgsfXcvxovyecZY4du9tx533rD8721gffctVRThmNdDLMQk51mRcU9iXsmTZcKjUXJT4DEGEGejNsnE1UhSYwFu"
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
