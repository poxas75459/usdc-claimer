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
    "khGMU4igVd7yXvo2e6xS8QC7waZpHNWsABZRkBUXMd36MoeSx6KqWJEzhnKjGZQzbNMF8wxswyyeowkfcesj42T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qoYJexQCJu6PwNjxhtFTxkLaEMhTWBao8pJ1e4swezxNNHp6hgittQ2XRNdp53KB7bRWFMFY8f71aVihrjHQXEs",
  "key1": "5uUPL4BjPuS3ip89wh6Pmh5e9DQqJ3STaDjsaf2bYMHrxmAq2rkoz3m1Wz7H5TTnfeVKMeihuJzUhLmdAqav75u1",
  "key2": "QST6tkqEW37wTsCquA1h87L3i9pbEbZjFCnM8mbPWFaoiF36mAqoi6W6AwvwjuJz8dnK8h48m9xBGx1v1U5ad4y",
  "key3": "41wN2cgghomA3FEx2WdJeFZmf2BcqpiheQYxhKZPC5rUM9LKZnbA8SmkeMfEurREfkyjNexfkdDN58F8y1kp897q",
  "key4": "3mvK5KucQCqFrwF54BApbfAXeFeKSKadciMV1yaVbtfcHYsoTS6ixVu1yeoo3VjrKKq3XmkDBfYHmJMyaEf5zCRB",
  "key5": "ZKxxPRCk5id7KAPQ6ZfyDk1UEUwNeyCWacuKnSJ43cUSAE6BzuQLM15nSjrh9R3TNFARGBgfhUoCB3uEShMhNa4",
  "key6": "4At8KMNgaeKXZNNhZuGM58Vm8YdCdQvT3xk359WDtQboRP7q12yGaa2gdihQHVh1TzpGYzDQJtkqF4fxM9Fo4azd",
  "key7": "5ALwnonyScyzPWCmHrP18uTaZ5293LJchXBe6vdNyTSbmANDJeNP7g5AjFTQ1CDTKDUvH4xBKJwn2mNYMshtN7Mv",
  "key8": "4LH9jErZwEDRXFgvEeVFstNiUR39HiQwndfr8t6BUFCyPheu7w5WCFVrAHu4gZtnac2y5wnDCZer1V8z6qDXFFZt",
  "key9": "3urJJgJUx6Fy9uBGLi73tGtwnFUbnuQTMVPPa13gEbEHdHWUfXXZaKWyEFDHHM3pwe5AozyVFTt2K8mv2LJHRmgy",
  "key10": "2uPjDsZ3fa8D8cq2p42MV1EP2aguuCsGujLJDF7ZtCZ2wGFHZZEJhJwVD57VSKrpDAyyd143oQLjyGUE1GULr8Ty",
  "key11": "2pGXrJ9CR2ThSfkbAn84msgnvWjofzt38VZohDgPt72iw2sumgNVhMgqwZt8b3nW2WENijqeGJViJXApqGDZjJdZ",
  "key12": "5ZmzzUDuiLkXH2X3rGAyjKVBD3vAQDJbEBGt2ntb3tdJCQrr2V9tmFVCorLAjfpF9VNkHnZp8mS371BQEbVAGTYv",
  "key13": "2roCVtnw1w5fVQedNJWjfKyHefoXcnshQL9DCBWmm6tgoFjYfL1tjF85Bh1WggEdGorL3KqpsCxHXktauJo592ju",
  "key14": "2cGC4MUzXW3Qy3D7oxCEtQHfd3g8KBqSsAxkFkx8mb9YAT159bZVw9q3jW1Q54WbzZexDrT2kfYLyd6uGaqAv51",
  "key15": "qEMMxZvjiXioKQa4qc1idvHBvykMm2HLG9jgzZQtuiHMFx21eJ2Qi5vEn1JaKwBW7G7scvjAHMyu6A34sSKTLZX",
  "key16": "4SRjhFdYJ58MSmaeo7ZxB7vbynLdE5ffYdfGzL8mATdqBkHpjLcPs47UHNdRnYT7BuxeL1momBbNfnBGJyHBUXJw",
  "key17": "62BMpSfp9hrreefTT8Ui1PeTPd2sFK99C7aKc7qhmyjb2Pun5TRxCx6WzNGxHvatBoF7SJWPWxDQUKzJrRbNpEHw",
  "key18": "MpyWvLDf9GHZRju2DQPmTGscBj8H6gJ9fwZ3q5cQ8825EyZYM6qcvfgWNuNncJcSqC5LyAE2Q7JhrhzjqWH1arg",
  "key19": "3usv6niHzWu2RfPYrwXGBPhoWbikf8s7B8nXQBPXHasM8zuZEy8q1f22enYUePBViim2GyBgkxcAnWtmZzzFF9oq",
  "key20": "21VB7X9GGuLh5j8DSw3R9R2QEV5Cby1k8hwNiWi24oWXvRL6jZdo1eWpf1L3KWfk6eQ6PPfyAb9F3FBJwAohTo9Y",
  "key21": "M4LG92nUuwVtzk5h4ot8CudS4TbzFFcdRujopZTPMkZ7x7KiSyvGrR1Wb4m2pySbj2Z6VqNAjTTMQzTkyprbbj6",
  "key22": "cBpNcrH2vq5DzjiKQJmygWFTE2RQxLES98v7aKfavNEVtCNZ3TRcoWRkATTdjvQWBsWpeEusru42aio55JUL8oU",
  "key23": "59DNghJVfLLmBWKT7TX5i4M1usG29MCbJXt8ofPRBxNfjaumcGupJUxVDrQRYVvw4HhZiPwqtDhr1xL5E47e6mqC",
  "key24": "2d3XAc3wPwFfMZUbMfng4o9YHvzsnFSxvLkdPhWPuJpwYCjWpMBNQP7j2RPEYb2WPJFU1i7ErMw6EvpPsuFWzPp",
  "key25": "2JCx6RKw2a62Qpa1STMsickEsC8n6ih2S89oREEUAds1vDyTcbKKmPfCAQGRDxaxc95zEV64YceXkmA4HZcER27i",
  "key26": "3LJtnrhRtKGQi1CXNeqhEcrBGcdk43varBUVvf9Ua3bK5JF1yLxYNmCWTPT5xsuHatjCx8oy7wv9BjfMy6QMUFB8",
  "key27": "3V5j4zJnLXyk891xf76MCnd2VdTadWtyRbPhL7YAybfAWDNeytHdCtMKw6MExLAmxaqe8Hmv8sj33615tgQFyURU",
  "key28": "4B1r5AxEZKyHWTedSYcSsrEUUzRRMgvJ6aHLscMJWbPhcY54S4XRY2Y9kR8YU1trx883FqZVioakKKUTP5QkTnz6",
  "key29": "2KSeRwsQ4Qywc7h518G5VBzxb9jU92D4tvEp8u86qfDN5Kk835orCvJ3o2qoDey5gJ9evEna3S11ypKaVhQ5yNrk"
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
