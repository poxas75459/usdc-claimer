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
    "GxKYTjs5ydRYZjj6mq7LCaStDMapcuKrWCPvp8TKhLpJnLP6HaPGkpAHrEUivF8EhxpA9Hwg2DAKZdpyYsqqGRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BZjz3nr24xRViAWpxH3HwWapFTCkr2FZLgC5XeJSf3DBMB97e584kdnXe7zAD6X9oREtvuwMqhr8NmeZF33bJSS",
  "key1": "3Fae7r2JedurRVDkTwFfZZoo5hXLfFHCCR4GBBi4xfdNkJ2ji8gkrUifN1jcjrHHL3235LhzSBkarMuJAyKYsML9",
  "key2": "VQJ1SMSrMQZYwhxNDzS648xjH4zRKmrs4p4GL1MXQWKijuq7yKuddzpVM5Po6W1WxnbwKrBP8nSDkTu9DvE264s",
  "key3": "YwcCRtjAgeiE28pR2f2ZNhinm8aomnYtkKiYAqo5NjvtQmLu1WHFfqUzcA7QYf3GR36CiCuZJQgJqsSwUddDDuq",
  "key4": "5yqVJqUxEiCghSgTATjHuXH2wB5CRkJC5uFHForx476fozhR4J1T1ggFsRvUqwoUBeuiAsjsYgUEK7VPmS12qHpo",
  "key5": "2RekZVajpHDYEEVJZGrMcGhwevTb1KRWG2orB93nhG9Z7v6hnGbNQENe5cAzKCe9RwpmnJi1cjZtRteDwpH1fyT2",
  "key6": "3Z2HWGbWVquhkrEquGRaYcREzsZkr7cq7AqgvDHtnPYaPVvZDcaYUT8g8fSNA65m3bKokB9SJpAFJcDv3AZL4AdY",
  "key7": "2Bvpe4fGVEJgqcqcwUVGeLre6xWGpyyT1bpGvnj5uMntobXVa7E66JcZPSjGWwEL1MoMHvWVfTAtqk8PXxLzCzA6",
  "key8": "3VaAUjftmLvdWiseo4uyLo7QRaEhFo7LxPSRrfR9dUK1pwfirv3TKXjFWxuo87NajAmDo7N9kXPzPt2jTEdeNYUT",
  "key9": "5Rgn5vvbzF7XVKF2nkQgfBbN7Wyzmw37uttVpGxdrs18Fc7FY5V8CFbeR5aikR74gji78xtz1XNGYZsn9Re1yup5",
  "key10": "Gfqs3ch467dQJzGABEAiGYA7MPiajyarFmhNAsrHv3SGQFYw9CSppM5dsjh5xSDFgf2Q9MqEGEdQVqFD9orV4ei",
  "key11": "5WtNekPU8hdM2awSRbqxSiJViZMHDZgXFeVbrtVXYs2M4RANfAGeUHJzzKfRSXH2RBhoiJ4VyNCTfgpf3oYLNRK1",
  "key12": "3LxkCVcmy13fosWnhG4jaQy6N5Y7G36FBRFxYDrW7FjXyUijfuGPSPTnxPUchnyp5nNN3z5rwnfXnn3SgHFTTAFK",
  "key13": "4ThiGPkU3CHwGkBcQt4BmsiDjn5f8C9EJhuVcwBNLx2rKtUojsjPCfgZPQXt8d55HVgefLQoJPBsZVAjZcpj8q8M",
  "key14": "35xXWFaEdJV9bqCArLBDLALNQCyP7UhcMvZYUA6vnnZ38FyCfnXLSqeNH7vw8NkcwNAxRWSpapeTQAhZsjfzAf2N",
  "key15": "Lw7Ly7b9xvwjDsYBBSsWzqiSz6BRc3fpSuvYNyV1fSGPErAGQybDuDEdyf1fPg5YTjWeBmvZ12JN2VkJgED6YhV",
  "key16": "3DjCu4ccMbinFJdsZSZA8TehorX5XL5VCkyeMj7RihWDpdYtfiQYmp2xp2FJL5hKZ9VUrkXFpPTmS7zRrc4Kyx1",
  "key17": "4tpeSxckbp4Ubbt2nsBbYVqQn2295XMa3w18BvkDCn6t2RWRdvapaLsBGG5euoHrWcqf2Xf3CbttnRVT7SZaN389",
  "key18": "2yqMuzKt89a7Td6J6XA1XHeB89KfzwFzh2benVUZGmhpiXdX7sSa8tEhqRpN24FR2Q31qmB5A1P1DGcYXK7oJBpR",
  "key19": "4rMyFpwRVp2vuWiVM7wvZe9fFJnP7xNbqFoQEHSTSwfXbGCrmDdYPKS2xJ39Zu2z94veZw7S4reRa6ELYkovDxVs",
  "key20": "4b54qtp5CykhYsproBLr4SPVHka1JJLFhxmKjTb5vB7WC89inBLAvaRaQbMiMFzkRKi1E9okk9sJYbSc7kyNNijK",
  "key21": "73nEwuJmHCN5tqjv432a6b5XsSawd6yiXnGN5GffkbZhRPQ5FR8ncYV7CbGKgxt6wBCsJcb1F4VTX3UJE5NuGH7",
  "key22": "3PWzwjfTE37VyA8qBd1M82xV1936chT7SNzATN8seAj9ej3FSB1mTCFrAKR8FLuhsfhqzns1pUPwN93G7wnqHREz",
  "key23": "2yvKAAWwa3JkMvLnfKtXfnJJdJzQd1UN6KMpvPDC7VxyFE4vaipYYf62JC277Ae56TidUCvK1LpjqTUnkjUXs6cA",
  "key24": "2desWW1CuMVRm8WZxWcFZvnbpmj9h6DeTWpw3j7mi73gz6JKuvnz9r7viF5FSb93easgHVnzs7jLkiNB1nvvBKWF",
  "key25": "9MEu2heDkWXP99hbaKP5vqn9DKSqfTzs2SSscPcC5QzTeiZKSQHdfzK9njCmphsLXc7kGEX6S8vbYzVvRu5YS4D",
  "key26": "5Suh1HzQhD8Dax2aSVMa9Ln7bcWm2ZeJhLPuoNvwvKfSScZ4Pk6eqBJ7s1nw1wrtjQ8dLK5sGvNzLh3rRkUc2wEG",
  "key27": "fDe6cZuKyZSe7H77KpnfszwAhHRnVDEvFSFiDFq6h235ux7CwZxELPPZPDsdWFVmELjCipoPQLQsKfnmWn29Q7u",
  "key28": "ZmbU5CVwCSYcDntJre69TAgybncZFrVhAu3oYDRi2BWBpEjgD2eKgCjZiRrMgFPnkKcYWBhpNSgHSRtRzzj1A1r",
  "key29": "2zVNbRDnVBNmnKuVh8BkcWoFGNz9Qe1Y4bcWnaXppeSpB3vi7Vjys9YUJQBt9Fr1L2dz5GQY57QR1ewy1tAb1QTs",
  "key30": "3qBPnXe1bhjYWuPHLC1afkkc7K9dbzw44yARBrmPhHLMD34ZpDgZqrUHdRKm9CUefxAKgnGDFkshx99G3bQXkiso",
  "key31": "5NsoL7ozxEG4HGRnW1ttxQRNeHUu7N4SUUqL5H4HtbQbp8BDAc1H7Jk2SbpthEoQ7s2RhT1cEWzygC1DcASuQ8h9",
  "key32": "32KsMiHWY4FTRyasjDeHSJ62vWThwZmfy6YNub4JdvhLseY6M8o2Fb9whe3uDm2ihHUpPrLfAobbLwfL3DX1DkJj",
  "key33": "2je2BtfUXZ4gatZAymMChrmwFWeyM7KQrDJy3PhL9VEc5ZWmuhY7P2B47Gs2USLt2mmi6JSRCEGk49EbDVjEWrVB",
  "key34": "2gDMachjQsdUGtiPambYcx1YrreBy7rZDABNTTmbZfHuxXiVhKGFF4WxA1eJgm2RguUJzu7MLsUGR7qEXeSeaXZG",
  "key35": "61UVMnhqcRAwf95SWn83niMpRF9KLGVkRZxNz7SC4PptA8giBi6MBh88cqvjj4GrQGxUPcEQLdFV4vhH6p6ruXNH"
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
