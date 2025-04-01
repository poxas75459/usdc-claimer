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
    "5ocSwoURTArpuuUe6dnbW9DBK1FtNDS2rpaitZjbUHPg7up4yXQ6RRjWdVGDt73UJqQHU1gHxXzaPKALX6M1Wb6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KXKngzx59s5Ddg65GWBuPQooyf93DH3Z5RNM22qBd9wngjdFnfqrRHCysQJhqJ7iRx133iosJsS4VStveCX66ap",
  "key1": "5fakxdMoDhz82ejEE8TXSksLX58evMA2NKLaxntkAKRyu95Nzf8fyoABz72XvLQXQ5yGFFmttbEwZJUrs1HVFhB7",
  "key2": "5cPnz3RoVsz4mJ2AqdTwYrG48f2gJ85Y2o21SrDZQU14dec3A4Gi7HynVS3bRgBkxt2fBKnmMWuCYkejNaqCZpdH",
  "key3": "jUDAa77Sp1xyGXAnC76tkdtD5hMBbFZiZcrgv4FgnmwyFDYDGG3Z3Gz7Xm81FGfNV5F7fBzr2gWNtL1FEVoCH7M",
  "key4": "41Mhe4Aqo2peFFRhx4Y2q6vh4tf75PfaUxiaQ32fZ3nVwMJwMQcKoZ8yS8JD7L3REPPaFvo4y78s85BnxGHGVnVd",
  "key5": "21j3NMPs7G7mz9re4GBrTxJRziiJiLNTnGrH9ohB6SErZW4pr8vxZRFiCaLXPU6mKkvr8zM7ERzgfUHqQ5infTfw",
  "key6": "4h15Z4CwCju6XC5E86V45jYtGE6aUsz7e2g4BBStfBgFDDC8xbnQHRZvCu9QDA2wwjWwRZrNimtu1CTyABvcJBCW",
  "key7": "36tqPh6kdXg2oRnaSYhLTKj9TsCSfPVLskfELZZZ2okYvdwjjU3GP5dxzRsFrMHnEVL4QA9gyhSzhauafogAYmZC",
  "key8": "3UAfX1gChkcG6SUR7Jkv91uwZ9nPDh4W4ZdmBNGtS2eUthGK452L6g6rkqFBpDSa2F3CAnfyuiXdStBYzcvSXfjH",
  "key9": "2Noyjcj2dv6WJ4ToDUYk56rLo7XR7U7YKxYttks1VeUymC7EARf1YZjo7jNGKHVjgiX9yaN2teFmVMxgo7Ltz8Ma",
  "key10": "2upoHVLWsz5wgaqGcvxp44VoKqVy8CLYeKfzyXjqtQfyzsZbJRJzA8FioP95Ff9bkwK3z7R9zGk8jJtgK1xcx72K",
  "key11": "25ukhJ2GYZ2wvAgARNDmfd9n7QMRgWBtujqMhv46i5sgxeiWfAtYFgBsbckH7iAUFXBQhcHAUYFWrbZZBoACeuL1",
  "key12": "2vqWHziqR1WMBQChdMFG4PtYXtzPVz2jruzrRRNeG7CRt4TSe5px3piWEv6CbVsMyoAxohvzdiE9MbDdw369Uiyf",
  "key13": "4baPqswtC2a8qtJnC14KY1W5hzeGvns2p5KLbtr8i2jbvw44UMtodN1Z9aqG4cZL4uST4ocgMM8cJcABhWicMNcy",
  "key14": "crLpXZksAQUdnJsP16gJq9ny7mcyx7sCqowvfaiYRoNcxV23bBqZ5opr5L4Sep2EWg9qbsbzxe8UpSsYEPHSxcc",
  "key15": "5PurZasZsSpWv7GXej9J9SfDa7CDNmi5NtasX4ESbyPoFFPJFmfykYDzkf9f3TG8wMXV75ccYsn8nehpUmFh4L3P",
  "key16": "2qQicaHisunegPDQKpKWmeXd7nzcXhAyLxm2zj86yVb4ntShACSiQTSdFoW47pCjxsEdYTQPPqmK8pFrHtHhLyCA",
  "key17": "2pm4Qdh3H64UKQHbVb9nAjKs3xVnnTq5xUNamFe8LosqrMuiK37ubJpWneR61Fze3yXbyzvysW7QynkfAqUfQy9z",
  "key18": "3B6SEP1zazy1rGzEDcWnZs9UKkR9YWKewhkeEQUuAzXYfSKuNvxg4s1VvGiDUxpiUFXgPQg4zYqT3wHspppATZQZ",
  "key19": "KjWtbsKQ6TKHTtmKHWRU1Bbry1krLicnfrpMFBdFibuvKYFcvtnWhG12oNMkXFW8tnjW1Q4ekD3esa589rtGtJg",
  "key20": "8wXEvKEr31znFgPbSs1NSDjAV6EFX7x1Zu7KSCVzXjxN8v1uVTkuc7KtqC1dThCJRKypMgqQJMA5m1wWvRaWbrP",
  "key21": "2ppVtexRBuvwfdEb8D5gjrUbpHzTdKQwYFjX9JNcBaydTArtpf28ygzc9B6r8SGidBgLvrGuK2vtcf6vuNhg5DcT",
  "key22": "5UUwdhXicbgc2ERziGdCJZZ1aHnhmXA82NuieNQCktbfDcTJHSC5Ftg9qrtemdkwLFuGPBkTHKhc6xe1FKDLNArb",
  "key23": "5LMTAJvssqnwHSRnTzgdE4b1WNMWdLWc7KpFoWUTDTBFk884iXTXymF2pKEMjJZT1HJ17ftBTkqSg4smV8Di7W5t",
  "key24": "5J1b2U5dMR91p1rCYQczV8Sj4mVxHzXFmPxT4ic1BGreszmLEnScVc4YXN8u9EYPqCLEmiTfXqBTPr7DvcBdvDeM",
  "key25": "2V7vJrARnoNZo2cfkVQQKXw1teSvSCFFUVEZ2Nwdi8P2L2VLJB4QjdvXskbQFknFTDjEPvDBYaHSbog9xPZNMoLV",
  "key26": "5eoE2Ho4gbmsno5kuYZHqJaorpzGMhJeiXG23ZcDjCJ6qFdREnAfV6T3sBEvUExg5jNcNCFYggmEpxwdpGJia6Ls"
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
