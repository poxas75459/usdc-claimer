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
    "2UibjJEogjD9x9wZGbfL9X3HBLTkMm5jpF6UwLCLFsGtxDig834bM4niNkUx1jnGBEBNk63fG2k7Am6DrbHMHKUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ecNGZkWe4qKkdpBT8bAJxRx6TGz33eThzwjMdudqPFdzodoRfNGkotPS4eDJUbpiPqS9wiKMjgS3fzddiJq3bxh",
  "key1": "3ooj7GNVJ91TgubqiswqGRCowYj2PcfnmPq2tXa7Gq9BtUVUjWYxpKbna39gzLvuhrqLLenbssmr2w5aGeKha8YB",
  "key2": "4TGCMuZ3YjJ3uqEbuF6kM8tPQyR4UbLkBcKWy7Nrbqbnke5C2opuanugjGK5659gt9LcaQVT9VepPUiz6LYVycEF",
  "key3": "dvqGUYWzbgmWSU866yj3ZcQqghzGhV52LWBuJpJfBDFA3v4fkgk7exZswp6ir7TaR6pNyx8Vto1KTCTMCMr2cvh",
  "key4": "3594sWqDcqfDA9skiTWAiM7DirwaU9Vmt6AWpchuFiSUwTF38KKTN3ucZcJSrbt669PmLXrHxy2Kcp26mzZpEAW1",
  "key5": "sR23dc4GY8bPupqHt6q8u5MsaJcGJGFcKvqtHq63dPJCPioXAgttjFx25HhPmn3jwhNw2fR716d9Gs7ffxtZJ4h",
  "key6": "3mMLBBbea6qvWyUzUiNTKzjUK5PDuH1jPHAy7Cq4wifAnS2YvQNVnZbB55B3N5H1GDuBbmBFP2sDCuCPu6qBPeLu",
  "key7": "2q22u5iLVpJqAyTczxyFkE6EyDa8U8krJfDGFSt4JCKJiR1aKHQTjCBqsAZ4qWJZMvxjhBmb8Mw915pBmWnrBbHw",
  "key8": "3dn9Ds61i6kjAzna8n1XPpwxLi46tTdrvcprsDFG3qccc1bfkDG5cyqcy4nciyUwrvDLJJTqV2jHasFAtrtxH84t",
  "key9": "4neLhee9SwkyZtBAqDkxgF5yxfke6oBU5sLS9ZdCEKoNDjSub3Vt79tKbNHr1Byz6spPQ99mQvH1EMah6SHk96yu",
  "key10": "32Hzt8s1SUmGRAJ79qYrQT3Hq13dHAF3SKtZh4fvF25KxcL4ZGgB6HN89radkPeVQq7tAq3rgKM185k5fTRpeg2d",
  "key11": "65ErexHa1pyAnP3Tc683kGc1tK2avWNndxAU4FUdBgFtsxbVYDgyTemFEYLCHAYoEe4eGzovPGx72omDYzHQXnDG",
  "key12": "2D4qW9wRruQBuLDRk3iJU4XQxh5MzFGbHvcuJszvSarFzieoWEDHqUgmdBbJz6cvKd5Gyovt6ESZnEq3f5in45Zk",
  "key13": "2Co5yiYyxm6wt5TH51LxjcUurSwFWX7LQgjDg1YFpYPKnWReeGQ2zuvdHWo1L3p7CiAnXgihu9rUUmKDDqCfE3Zt",
  "key14": "3xcu2u3Bp4Lg4bYpunURAcob3YS43fr8rJrm1NXZmDXX65y4gWyaHGd5CUpM7Yz7x5YaBn1AnN53Di93REgvpE9f",
  "key15": "jn9HGsqjbrNrbJo481TWutUqZYnw5NDAwTwoLkvfcPbKgY8uGDSRgM1ZdfmraX8nWC7r8EveYPSSNCja6esgR1p",
  "key16": "5ceVZcpBYkeYegstN9SYVmdRznRT4djebZyXZhapydYLVxT3wh2jGMNJhGjVkEpiNTCZ6YXpB8nzz72wuM4dobSA",
  "key17": "2tjtk6tmQtiSGjc93FEbmXEVSqeD9WwfpNFo4k3HrGjTDDBW5CifiRq95z4bauCmCDTxXsLVwSXagnF5tuM4p6wA",
  "key18": "44ks4npw3YGxeCR2ETwCKoRearnVRdny9VXDbFZ3oT7M5EULZy8ZT6DGPZwpZT8kdjqyPF9ea6m8iAbEJzp8FPQK",
  "key19": "2fW6AADv43Cd88wtDjvqvFKd7Dwqo2HhiAVgG3Cyx9hH9M7CrDR6Sdcqbmhdo5gubSEougZrKqMByp9HRDhL67Qw",
  "key20": "25p9bVqjsrRLRrD9Rf89W2ZP7GozNiWm3fDkXyYAk5MJgQz4HBWjpMgNg5zddoQ6r3NqmEhtEGYJqzKyfxv166P3",
  "key21": "4bNfkgNxGjJQKMnTUhiuRP4YEkmHovDNHGSNbMj4yGq1EZSZjDYECKgVDzGi7ZwZniCBUyMMNBBtgzCPr3JairET",
  "key22": "2fCBXyePVMSMX16oQXt1t9YVWYjkPRdfhNzRxEu6bthyx2ArpZUUtkusYA3FUazMKrpkvUFQoz1hLFLWphMwnZtQ",
  "key23": "2T3vZy9ByhQiCvifFg7nvaNiU9ye8TJSnnHyWJ9puE2q2Za2viJYfDiqvqenvT5ADaJcpXxQcRvMJFQSAwNrMg33",
  "key24": "51vmsBA5XRNCjj7cmAAoBRDUrsyXWq3LiwD6ZWxjdFozWTrQbMRPE1vMYDinVC3cErRu6Qe9eEfekAFQuovsuNCe",
  "key25": "zuCRaJLkrfYz7jgn9K9HsM51rQgDdRKXiLRwyY8wvafTtMsh1JAqzgMogfTLCT4U8DnDVAPb7MwqB1TVUYTybS2",
  "key26": "2A5ef2c6AZgytRcvajd4tp4bYci1q5E5XWEXbpX2pQCV5PtnhtLGHfB1fyBMzB9FhT6T9FAyBA36CyVJz5yk8vmP",
  "key27": "5qeQiLwmT4XQ2xqynJxia3mWpn35TrtafqRBmywWevcXnhQRTy9RWScaq4kpMiHBGDasU3jk9tRFUwvGZL9pfHxs",
  "key28": "4piEDhxPWXnK7nmWA3EqNScWrAYrTJa85rzocBvdsBy6pKXp2aBdtQ3zCxrt5S18YAc6AZJqEFGb2N6nwJDsFtBv",
  "key29": "2jaqeGLyoseBPU2FkgSs7GdALzaX9ZayHuqPEPwVMmToP7JnYonSnQCYXPe5ovpaPew9vrU9ss9LxrvoC7QF1C8d",
  "key30": "3SCeHtnpgnDJaGHKwK1Ugh6d9pgXiJ5p7AwYxW9Buwor8ecJF6nGi6DAdvarueFtbCCoZeJvfDn3AtfqvAZ8dQdf",
  "key31": "275A5dbQDQst2UFWZsGer9xYVKWbxGgvdVgTQJhLMJ7f5oHf8CkxDFcmmbtTnDJdoEhnMmhJS7Ebkr9hHca2WC2P",
  "key32": "z9aqEmi6wgPjNZ3acfMhwzDtRbvyRaLyW2kFrGeB69akWq72Up4PFJsVGuaVGeMPbqiQUGhNfKyHjLhSW43pc95"
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
