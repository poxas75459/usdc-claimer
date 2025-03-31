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
    "3BEWS3PLvqLD8HkAckR4M9JyRYi3zmNEgYpLKmPcTMHntG3EF8f3WhvpNiAPNPGhEbekZqvKGbQKHXN5AvG7QBhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oSsN2Q7TGwFvS2n4VSQKUSVegm3x4gwvqpYcuuzFU2tpPDsweGdi7yQjsBKdTiMr7vagiEt4P2N6hvecGSBPjtJ",
  "key1": "5iXn6gdNvg7xFDyNDTquHCb3zDXvD2ADBwPWb5A1TEyErGp6WbyU9Xq2oijqV2U6Zip9aQqHdjjG7YpuDB9zRHYh",
  "key2": "K4FRotZJ759rYgVLDyCoFsYQKcfWoF1fhTDiy6mQrfjtbETj7QQwVWE37g5CRQ2L78TVycQE7y9T6R5aL8fumjJ",
  "key3": "5AxP4AkqSaoxfip3dpZhUwSvmhTA3SU3vYoQZWXHq2977AsJAfMX5yc99YArvgbyCzFSHHPtsEC4UDua86A9i42c",
  "key4": "KDWerNgYxm1wZM5w9qsKERQstWtiPpRLWkjQoLojAhiP7Aevj4tw8iN7UhAfMpEkg4BkwBfnjxbw9Wn6jS5XP7E",
  "key5": "YMKkNomg6dygydhKtrFBiYbrzttTYNqNH87odtb5NMkEQ8cUqy1MPpvjgi7DX5Bg4XECyjLyyjFmoneKw528fsC",
  "key6": "3nDibmSgtYz3tdpuVRQqB7mKXibdekthc4An4ZmovSXC8EKonWAPzopkuyoc5C46dw3tP748xgRmfRBpiDaAd9dM",
  "key7": "5PHB8AFaUnSstB45cXKGL9mANB7FFk1NHqyNrRi5Mdc7vyqPhrD9HjvRs15RQjFdac2v7qGL7Vg3bjPqkGNzevTB",
  "key8": "5BUpCUMeiYTri3nRsfJpWST2trxtgiPhBdeQwtKKzM7GetwcYPMkKqr7nPhPGtdpMWpMxDbZDgmEXVyfRs96giEA",
  "key9": "4HyPSNzEV34wX2DxYBkh7bL89P45uKWsfkT2yDaFZnnQYQCG6pmmRDgqMGtEq16M8sb5xkjMudud8ntjR4kovPFF",
  "key10": "m3qParBkjKADkBhycoZxeWYfTSfy12LCoyY3L1KyTswm1HSqo8sLXFFi2GxWhFzKuEuTd2sM6ZvkSy2LcHgvu6A",
  "key11": "3LaHJx7Pz7voMWpSfUPKAFDAxBdmArzcfjar5qAKETYzZGx7bLu8qmdmWe5tGCwD3MKZWD6KsMok77FqHP2SnaaC",
  "key12": "5hAKSHy53qovtz67D2kx5sfKiyvdDAtxA1NoTPciABYSmuqF1rYK9uSPkJ373AeedCYrsKyC2QEht3y83azsY3dD",
  "key13": "62ozxXdt1DbhEq8wv3wZPWGr4kAJNtRC4FggwjjeDUGLVCndEHWU7ExGMUzbBZpHmxR6ACSHzPeXdaF7jjjAUirt",
  "key14": "3WUtw4s3gsKABmyuDqGSsTJvRSTerwHwUX1MfmgznjgiUCALfJNH4qRaTbJWkbeyG1jTRauyqoz7zpLSkXeF6Va5",
  "key15": "2LwhupnmnF2yL2MWQ59b78ye8ikDkp97HpGvJ2KjrR5qXZ2wGzGnUDr3XBNQiofyccpx2MrA9iSup6SHPvrm4KYF",
  "key16": "4BEM3cFtqwzfGM2H6dDcfenPWP5krQD6MjrtpnfTeUi4yLJ9rJXEKPSV8eEcApDLbDiyp6ok5A5jK21fsqk7joLV",
  "key17": "2fER35DbqqfVvf6WjsRzBUYJXGAJDVk3CvDhWQj9zLGhoEef4tADDvB6DGV7V98cADJdBymBhJHBCPQ3ubo4sSbi",
  "key18": "5574mnNRugr6PB9RnA9gfWhGakkR3GNuSaihDH397kdMbiyHmZk4UE7SpSL9z66LyQbyqHHB7QCRJUpRsubKFUaL",
  "key19": "mvqfyiHARxS19JucGYZEBoiH7r3e9HvXq8uKsYWEiDBaw9aSqVgmgqWbnSXw96yH1ycKcG9gECANgVXprF75Pdp",
  "key20": "2YPb7rLf7tS7DGtKtCr9ZzCX36J2rNwPRnR7zsCW7HpN7FYVX5RpkWLy8h3ofiwDdnAsST6i6vnpAMe5FGvAtLFb",
  "key21": "2yJf8Nj6UGfJ99o3wGwSUn6sYQi5WvpFiq9YPXo587MjfGGdpePERmbUDKdaYbLAuACP2ovMDYVJBtLhyd8mj2Eg",
  "key22": "4Rnxe5zAtUFXRuVjMX7tNz4M9WJxkpFzU9kcLVYGPDQNzYSmTxDUdhgwYuMvQo7krc12Mp2cd78MK9bsMie83KfL",
  "key23": "2WRhHoj2HiBC2GHjRcgwYaARppjVHVGCVMi5RSVN9YzjqU9mPnzyEo2BMZwAtNdwAYWsYMTvw9tC6kZjr2XVX9fi",
  "key24": "24xQqEi6kVK8ciNgzjgzqbJRLzWsP8uhqvE9TTXD6y3nEiv9yge9Vd7fb9pxrvA8ooxPpsVcWZEorWsYP5KEAa94",
  "key25": "zi5rrfnhbwLZABKhjPoevPNYZsaLB3RgoFxBQDSKH9FHBErqbSReUTzwkqsiKCmSRf9uxZqdrCLvFXYgSdA97Mk",
  "key26": "5dnFRw5YnN46Vwig7YeuxAW49BsEDcsD73vumyezmfTg8jaHscNDv78jSqkGFzfX1zVqv7UmYMTH3iXbtKtX7r8H",
  "key27": "4vVHgG3zwiZLyPeL5davXPxf3xYTcpvLnX5ugECuBHC1imMcE8mfuZbi6EBpNTNY4rZTiSkvcqi3Juta1dRfPqxM",
  "key28": "5ZYhk5DoEaLAvfHuqZD2gUZLwGkNHdLQN8ieVjBgMwWXWDYTne9LmjmTSWxDWvrb8VHjPtWfoe7NxMbUePFivZdv"
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
