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
    "2PFBjL3V74f1LZFoQQXaG4G3ScFmKfWRkPHm2iPb4QdFNCMwFBDdCi3FMJY8tPmANY97byRkFwMiKY2bDTNuSYJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "636LmRRdm4bWHc5QRYTY8ueph3nE576E9YdL93TVinbJynYU6rjuDYMrxfSGW25ubTQ7wiiY9B1DFqoXmME2smem",
  "key1": "5T9z49pYaiL7Kq7craB68gYUXe3XT5toqEu4CRUrJdJecfWEZvUxdLB2xJAyQ9jMoTootnwwVxR61uAc1HRJy6Hi",
  "key2": "3UABqtdUcyxrp2TWY9rDmZEW7Xbx1HRpobMWDngpVXJuJodaXTExJwe7AqTNaybAVYcrWesUPWNXPnHUdPonnxWf",
  "key3": "23L4cCqfdX9mmnpT8JQJjck6Q9HpSygFeduEPJHTK1dxsGCtL6V2mm65r4xB2F1ey91TGydW4tyvTJj3rKV3Fw8d",
  "key4": "3ffaurDFBDecEK6iyBkeZvsLE5QcHUJrJS5hmfkJqfKfPxF7WpUAaPuQP5qcbznMDtjdMmkm5Wzf26k15K2S7DLD",
  "key5": "3gBaeP3XUCcxjsY6e2inQ4bavHMYsBE2ianXehTbkGtnuuzpaUtaCNrqhXh92LjJhNzakmR29SDs1PwBSp8utgfn",
  "key6": "39HVbkMJPf1MC4qgbVuFm2mYxfiDHorjpY45jLzQZFpTwrcRLKAgmGRoMu843VHh8YJzrv5oMpZ9DudNP5esQ2Dt",
  "key7": "2f6pTVqmftMbGHncQoaSi4TxbuKUoGKtA3G4k5THi8ahH9DdSU6QjHy8jE4BWpQNu3uXkkeprmj1KifRq8CTL9Qv",
  "key8": "39f5cS92xJALV3qyyeivkbQB4NYahUCRzM8zgjiHsiuUdEqU7rpz4skFE4dhAAEFxJu7tbftUSrm6p2A7zJHCNb1",
  "key9": "56wA4ynq83UUdKoTNR9tpGKj7zzgwXtDgqMiX2QmMURrsJmoHCyX8ETWmcqDrANbH7RHEBnpYkNpFrHvRjST8GmT",
  "key10": "3RGXisVuMJEuZKa3xYoghbk5HFSSxMH43kK5YWFPW5857hvWD5sYmdRK4zsEPjc9yR7AhkJ8eePbYr4UokCKuDnW",
  "key11": "vGLqGei16X7x1X24uH3qxxFpKRdXfQhShniSWcfaYJGU8pQU7MJJCmfyDM362EYwN94smTCPK9EkukwYC1zSExo",
  "key12": "4wHomdahiHLZRWDrLt5mp8wcVuWtpaWPALSzAaggYFNLy16XJr5AiSEHEZ7MrzsqUVCjp882A9eHzUZ5XRmc1Wq9",
  "key13": "a3i8WTZNoVqyEEN6zxCr4zDeGjCUMDsAx3zNugsr96RremjUv6qG5xVsVTihEUyVYQyhoiWzeqGxq6GXxBwjQUL",
  "key14": "5hf45hwf9RFsSkMVwMx97feVw6Aav8KgigLRxgzXJd46rAifWU6gHngDqi6oiYhwpo3Bty1auxXg6DivaJLS8dJ5",
  "key15": "3FixoZaAFbcqJ7mFicr8M2Y785uQNwywvK1UTGcvLEBwona8KxM24WT1GSixkzu4Yc4vfPnTfpNj3R1LYEpLcWoi",
  "key16": "4LWAPTtUnwer6NoFCyFLAS7n7837xfJdxsKDjJkfwpUeNzkcNRL1DJ8bewL2zRw4CiKbSnaeiCKJYTu2QiuYfrpt",
  "key17": "4BggBtsT3v9WLtdDdz27gFETXppYHmNjpSDBX2to33TFV3EhYPfcKgBy6CEH4kv4GDdRB2m4bbzS3wv8ZxZ5try5",
  "key18": "4SpUAsNR7ZH2bbFk39Q9nNtzu7GXVsfL5AcVtGR7QQoFR3J189a3GyG8QYk3nDu8zV775j8MPx92yrj4UaW7rnbQ",
  "key19": "3L8S7SUzcD6WeUPuvALDcSTMXbn1G8FHXfrmNUS7hYnbGdS9EJ62fMqFZbvAwn1HWQ1VxbrAwkv64arVXmHWWeNS",
  "key20": "5BQYLXtEkt64YEwecztHHfdGpQHvN1oatQDuAcDqcC7bZNjFWc5q7Mdny1rEdiNUjmkCKrEmuPiFeFZ9CQQvL9nG",
  "key21": "2RVue7g17xFrvmdA9swmbcJhKxCE1AnbomHbCbxb4QBKASBfJ2TPg13MC8nfpWte32zYeQMrxEDxEDYCwTpN9X8f",
  "key22": "5aAAeKuSaYtfMWaTuXbc7JV1SjR4FgEdGxFvrLvioFmhmqkArt9Fr6Fc2JYgjWy3SL2sSXDUnwaWwQhiRJE7DRvc",
  "key23": "3t1mBbrZxzLMb9SESNReWjZuyCwcRABFLamVqZue5eTJ6KZNgLum92dVyS6iDFdZ9VxT7q1M1Rj37fa86aP4WUQy",
  "key24": "2D2TT3iv6EJShMaNj1dttFwKTxTyTsCppPsxNKScU6gBvBGbbDr3vyxNGa3RNEUC9AwqS8NvzpworKyb7QJ38q6x",
  "key25": "5jZNS5ZSwMuu5owdZXwjmxRUNrj8ergkw1FirDrxTGVRXuwtD4LAbhM47gR9SWwWphsFL8fUZ9QUdEcvj1dHi73r",
  "key26": "5DhquPVuowJyHWXccj6G4jkdGVnDj2erHmY3LbyFYZJdQQpuCrkgkUgXUQ65yCDoJCSKbE98AWE3fv4bwzskX4k7",
  "key27": "5SZX2PN1hHCK9YtEEi7aApuWfZiZJ9qFqv6HadZ6G4Dif7Q66cmGbQRxKfVZeuJ8141yHxTqeeW37Mc5E1WYXRGy",
  "key28": "41EiNXDhQ5RkZFnFVDDJ6PeUE6ZkkxJuvnFcPTuLNUP15i6ypAf3RjWuMbZPDG1DvC4BDSVTQVbSNoZ4265FfuDz",
  "key29": "srHmh71YyYurJmss1khoDY54DZP9AEBAbhPnjdhc1wNVZe1hPRQAdXPaq8ebhSnQNCDsHRpYLENLnNjtVhSKp84",
  "key30": "4bw1kNzuJzCRystMoeCUcZrnoFCCCWWWqFbknD9QBKQfPHvgzszsb1MBR4xRQK4JHrFYq14EiCKkrfC1VNtE4CUj",
  "key31": "BQRfd4yo13fA85tpTZhy4d1CS4MwkGdenrZadpyaNfL3vr7SfQCWQwjJTW7cVkt98puGh4uf4GeqbGPJPUzbuVc",
  "key32": "4R7asaqmBDcBXrMTV8qPcFiRgxdBDqSbPjVmF1AjL2zcUdNNoeq9X3gcWQ3dQWbyYr93YzjJHKRpARF4RAf6ct8R",
  "key33": "yu5aWGpZo8PFE5uqR9T5senPe52nmwVW8xk93qfbSU7uSx428gTicwcsk7cETpFtFRUu5hwyPpM549PtFYUkiQA"
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
