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
    "4sFQRrJbE2FzgthenQSV56BGf7n93MZRiqFE3xSYgEN5YNAEtwN8zfs9UJiUCfqUETe5PgFDrRBaVRPaURVzLdgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nX9gzEyCmxoKhstpgSd57LTVQSk1awRs2zN8aRDhSRTApQL9JSGAPZUaPXB9p9FN9sxfmY5nGDwcWeenjrH6GQx",
  "key1": "3sXQn98rBA3cF54i9K6GMHo3aNUvgKZWZCBnbqD1uqQrtypzHBXSzp78FtMuwugeSrS5M3LcneahW4YFhL3p8LvE",
  "key2": "4x2hXH4zGhxUxpusQBf9oTKxrxYEkvWTP1GV8gvqqcqbKyG35EBWNuLzqWdmCLTytZAU2d6faoCvHJn17ZPA3gkm",
  "key3": "23AqQvRXfKKAPJUim6CnTWCPBXsAzQRtRB6Z5nLNzXzf9SuSk9tCzmyqjc5Z2VEV2YWgY3NRTW6BhchvEhM5HRFy",
  "key4": "5cTVy6w8VFNp7miTV4qRbFctSUqfczZhFZ83gCScQctBzYCcnFjDcEz9xURi12TbtG6AY5HTmVeFqpYR3YyKwSp",
  "key5": "4KfcVGAzqzkE2Fsfm95o8bkEPGi7gpw2Y1MmumSgSKQfGdwrbSzWL4sfezS8uwhERsq4bhhBvCBLYE8QPsRXiSeT",
  "key6": "41GmRJuaS9odi7WMCkvWkm4VaMGnMyvAJfxYHov5XpWuz2TirhCqk4yY4YK4p9fJFdeaktuRDhKGEQdoqTTHMBcS",
  "key7": "5XZFcsEV2NX2p7mQczemjXN3nDzcZxkjt1HhUkDqqWyD4hVjy8R5UWdaHcfyDgvySR8wh7ibQBbzaesxRrAHibAe",
  "key8": "4tBHg5jKmS12oz4R6B5Q1UYWMaXZ22JjWfY1gRHtTHUiYisJdeKm63WNAxSj7m7QZ2d9vgNvXJxuGp9KtzomvDEq",
  "key9": "3NRjgxdy2fe2xGTZumeYWnu4DBzRmCAkSwjSaN69ugZQnzcx8iV4YWi8fq12YnrMyzuVi2gEptfCDXAQuVkDKaJH",
  "key10": "4x8H5WmGnkg4kXHZUdtYj7a7KyK1gAMS5T3LZv9phbpgQGwsPbLjaE7gyRaCZCfTsTDbqMLsRAFFEGMt3b1HXY84",
  "key11": "Y3AysGQvMMDsp1tBGrN89nwh3KKC3KYVG6HgPL5CAAq4pNzy9c6pvWs5E4gdn9NwKCkRQCiz8sGSAdufF36AjAg",
  "key12": "G1C1UaZEmNMpZb3d95uAr6VmUYs3vzHVck4ftx8oE5QpPfHrecdTpoytRVvtnvfs1BzR6vqZ2EehgPCUP16VCnY",
  "key13": "2pujHTv81QfVD9tASpLcFserCUy9PWvcTwBpJgQNUsPKupV94PoQ5mjQshyXy6n2qTABLrmMctdzWVrSAZxdsnLa",
  "key14": "3g4CvEWrCehPoffCCdePDgshLae4gfYU3dw7fJ1p58JsXid8WR7qh1tykGKem3QAGJvQVn6uUrtW5rc7CPL7Uq21",
  "key15": "5kCdFjYwhhaEYew29UEKAyBNr4nmfUGLAcrq46kEEkR6KUqqhpEdozdaMNtNcxaAQAt3fAKzXogeh7w4w1uGMLFj",
  "key16": "4jYtsYRtXHBYjbEkcoTKDVqSWgkq1U4taMrz5ZMT2sWdn3eB441RC4X52J3bo9iCrJBdq4JDgZzfYR2AncaG4ftW",
  "key17": "3SyqyK2VsN7Udq946Ro8bTdSJ264rwqd3HGWfhknXySBs6wvPg6v7xKJaSih9ehTHLtPd6Ldvgn7YnmKrKHsWLKw",
  "key18": "pH2PKr8qhVuWh8U1Qc6Ru6CV6sYT2muHYmbUyuG5uPE22rvnbxhSadukP1C2hS3XmvipfyqGHryfnrXqBZXEPwq",
  "key19": "2hiomVTr9nhwjgftdGVkqScYpevhxG4CcDXQkZj8GbWp8HkJMrjucXmHwZTK7T8hQRD3d1aK8s6L28wX6hog1mzR",
  "key20": "3wYcSgv5ynKcGWA6sWZDgWtpo4JE3sCVmy8ghExQnD6uYi365LxnY43drFZedFhwMckYj1Gi1rM9eLrcX3gbarya",
  "key21": "5dVAGhbwAx4tfvdGDjLGX35qJk164iHmMBjFuQDQYtpokonQQRiezdJ9Jn4XSB9MXhro8F8pb7ejzDFnDbTtFWsV",
  "key22": "ziEQovE5KQCkgcD8VpT7EwbjyU5L3UuD38xwCcnG5DqMHUeHbSrhWHyLenMuwvD6dAJ7B1wH83Bh3FoLRLnCMXp",
  "key23": "DpqxmhfrPqKd8wM9HDSQsnRwU1tTS9kudsRMiryxtgLYLFx8oM3644mneEpaahNy3Mt4m9dVtXNJxUqpS6DfhgM",
  "key24": "3mbj2GyxUe1QEvbF6QMCN2qJare9Q1kZpATd79yzZF6rfHYtCYJusvecuH6K5Us2nSC7zpKAyBp4NMVv7jCvpXJv",
  "key25": "54FgZFzCEPGToNkHuMzCUecysHLN18BRW4geNQN6jTm5wijmPFccBHdhidJBBYYejtiKnirRqRHHV2Rt9BMZ5Jku",
  "key26": "Rihwx5FDAgTPSii5jkXQ53tMYsj3TQSFpxqkxMHjFPzjTLefeVZSntGPWczVsyS1GeYZXCrjy1PJzEr9xubR9Xc",
  "key27": "3R7ZRZoFWFGJivkTMEKanBRNt7UYVGRVjDE4BKdg5bZzso1Qvasr8kT5pJ9P5UXKNVp19UqRZRVZHtUg3BmS28us",
  "key28": "3kBhkuddkqvRCA5JBLBnXP3fDyoQiduinb16QemT9CQKpbsMPM7Xpv3HHfioncszdRn2PSFfxeCBujyZy8d9g9XL",
  "key29": "5HgkdERxfi4j326znPYzdi4RKj4SuBicvGb3LY7Dgf58kUv6VFEvYfqHt1778jevgU6511YPeJzVwAmPUfi99oR1",
  "key30": "xn4YFXeXUUeXv3Y4bVoABXyuuDta6H4yHce7QJEkuoT4rH4SdqNwKhaqYT5BPwroGrHqFypgAMXteJFgETwgeLn",
  "key31": "4gagADdG883EfbQDoCEpaV16tMiD38Vhr9ftWdKk2p5L1sBj8uKziQ6RBiwobHbuYG1whtV69beERHgAJzu9tD4o",
  "key32": "4ExNmS83DNTWGKtqPwBEzFm2wjnMoaTbgeyQPh1ePFJB3QmBiu1RLKySnPvqovgJxQcoALrNENNNhdJSWX7o8Nx5"
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
