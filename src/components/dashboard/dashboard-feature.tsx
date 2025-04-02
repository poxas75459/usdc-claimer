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
    "GyFtYN8WaS1SbtKTrxgdTA74BdSv4wnUmAwsCboTPyiTWmobGT6rnyXqMtGEPoz1N1ei5xVn7p7oTMXUsFHYeAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sCyfqAtsJwu6hYG96F4n3mD2B7h5M4RgxEMaPzPFvCzcokKjjeK4qbLc1iwSPZrsTZzC8jht1AXEYqfZAy9aQb3",
  "key1": "4H5hhcMgkAMaFhD7ybwfJ8EzX8jyrzDCi5ApTm7ha45JRk1TK3ALvySewdLMCCE4PAxHP4zMHsxYMhZLQERae9vF",
  "key2": "52JJYfzpHNAC8rg6hHdWdpykL7AzzDEscSF4UVvXgxXf6a7Mxfd6AZok6yACxcHLuAH1NQxV2rHRRNUhjVqUEWJe",
  "key3": "4GM4xRKmUCYTSCXjHDnTurdfMobTp8jyvBCGgP9CrrGGHao8XyGYSPf7TTEop8HGKYBFbpn17eNzH8g12ETokGK4",
  "key4": "561egE7mTb2N7FtNQ65DKqWqfitg7x3cQXokNRTqrEWkUbJRorCUsQmvwWMwEMPNKWFPTKT7S9f2QjwyFMbYgjeB",
  "key5": "34d71KDdWgHShBpP2ivpERWbE4rBrPmY2beYGkqyFHDBJP588uEJdZ4crLuNq7eu7kaJKjZdB6rZPpss79sRMFQd",
  "key6": "TVRyNJGLq9u9RWSud6wyAt4MPJ2iXdA2wPgsKiVHKW81tcUB81XkctkxKZ2bHQpRP6iAYnkZfbhp4SrdtKYW5rq",
  "key7": "2ECkevVQiMqBDTM5t8AAartUKoRVfP9UzzTgrgMZWkc3ftnmVXugc3iN5ZMk2pP2azvW3BrzhCgCmK4Q6TZgDeJN",
  "key8": "3nK6zVMgH6wA2R2Qx1w5XekR7uveHVajsnCJ49Vg8XKpVJHvjeh5BBzU1Pd8zSbTrp1mLJK3SLTq8VMwkFS1XdwF",
  "key9": "2GMjhfi7JhoohDxDQ433ZSoTtcAMq4SMdGezMkTMcpgDQL4y6NGetB5rJiuFPtW7G7bVkjFChQxc6F4h4bvKZW2q",
  "key10": "4gSpUWBdexBdrj3wzCUbuCZWCk35shuo38LTxdWCA1xJFGHxaWC1RmPWPX1PL4AvGVqLjEpY4QJaQgJHN4qnwrQP",
  "key11": "2sZnTouL38pmgCFjBKf3Pfrcwix7gwBzaSv7XicXaDc9TC2QSiedczDLGoX9zEREF3mr68iVnk69TJ8f6da6mRtK",
  "key12": "1Rd7SWApxDLHLXj1EXfGjpDi8hPJ211ryxZXWQSx3MfALXrvKnd7nH3xcA2AUzjDTVEEkA7tTM33gvCLUXnK6ts",
  "key13": "3AMsKvw5mmX5PYA6JHRBNHSnXMXzS5BpFCxzaELdCyT7fHZqDbTw4UTohBNoQWhm2cL3QcBMB9MiqDucd5cLrXM8",
  "key14": "3FigSjD8xC6Zvq7oMSFcXmHGV6xoywZZFSvEhYhcR6zKkGBFFKmWWV9ggZ8TDbToQ8bgJXoQ8QxUyhdJtHxVXGUj",
  "key15": "3tiuPhh6g9Xzf2aN9aE72H99Q8JLFGpu32XLhdpyo5BnkW3EKNyj7vPppFABS187e9axB51Hrgd4NAyb1qW65vh1",
  "key16": "3A6X1utW4sRtptY4DYC9dZwmbjNMpj8xbmMxJxD539zU17CUpcxkcjcjGDGCLapDWuweRsP951mNVraD4q7sY6oj",
  "key17": "2y1A3tvyDuLndX39PhT3N3SiB2qbhKKnpiZAkijsMZFu6WqPMcnXg7vNzV1E8WWTksvmYCZNL11LpE7GgGELxfpL",
  "key18": "CvN3SRAx3zYvuvFBy4iUZP5ZdZEmNtgrQNmQUDDHEfwGFk88347DssyWCDMXEDLbFNFrpBKBoKfqwjufowQ1aMJ",
  "key19": "zoU9c7CNcLymtoHq894DhennUzuPT6vfdWLdHxAsQyngjY4Tge6NwbKNSUgJThREVErikCj97BzGxa2eSTaaJ3J",
  "key20": "25P4RRrjY3dDt5Xcy4J8B2M9guTAoCQCup1pEfTHHTfEzeKrjyPujkJEvFBqtDdwRZM4CoE4MCxAJj3iKExuCnPL",
  "key21": "5Yb9djmXSVnCsLnYWDgeB6z7RQZjJS5gXTXpgz4dVr2jFpb8LpU7jxQTwcYqRsKAHxr1ti3Nj1C8wzVnN5T75QP8",
  "key22": "3Z4opEwneVMdqVRYjmH7bKtG5Qf84YieftfgNnco9iXnkWR2FexsnETBH8EAr4ygqGEArp78LVEx3kvuY2JftSNJ",
  "key23": "5icCJcGmC2BPT36b8KR1MK5oZXcHo8QfR7CPutmkTf9Mu7fwAN843YuDMLSsbBsqm3n2pLYzDhQ7VaMYtxSCZFeb",
  "key24": "i561Ub8LTH4ZQGMEHJpAJu1axqceeMfTE6W5SYnY2uzu9ACdxFbHYVvoRjMkjNH3ahLfubvsV17qGNohng7iDvM",
  "key25": "2rmKMZ1Uq5zupNz98vuiv6XkK4NJvVsRqokrduvMWXeNV13NBsQ8RNpif8VdZ4pikVnwKhBqMcY2kMPyGNUtUntK",
  "key26": "4xT8LkzzpfWxPF4ZTizbVQNv1244AanDdR84vcMPgWqd3xDeXNwboTgxnWj4nhorqXQZoshRScxbQLovZg2Gnjaf",
  "key27": "4diAnpp2p6vq3x6oJSo4m8skmYnJVpY4WjVFK9X7EMBZ9KLAa5qmYfj7P2bUyg1HBL7fqAaQbAY7LdkmYZEmjUSe",
  "key28": "2rCMA2FiP3gjDvQrTnD2MLsAVp2mdd4crcKfBqtynYdHopwzpy1KfwPkYSvhs6btmXKjBcvxJEvdtYYgSdEz3RfJ",
  "key29": "54X1Uyfm6TNRJVrMo2RNjkGDPe8ir4n2KwnSzHrLVhg6zdyKFkYCv79jxw3sxH4UsVpVwkrHvnhZ23R7jqMjuBzT",
  "key30": "4AwEAzXdYZfCzBrnCHZBZaEyoWJvNQ2dqw8F4HtzpWvVExKh3BngsUV1CfJGV4p73NxCgHpJ4HP1Rwkfmf9UQMP9",
  "key31": "59CWhiGyUmQUSbamJZZJeh4tBxg1oWNSbqZs6vFBx1mWX5qB6K5HT8fGtMuWc7JQxZPTyPoYD6JxMUXnrC3FPmrz",
  "key32": "5YgSEG1GRj4GsfyncazcMDZMMYxwnnn7zBj7nvYLKnqQdSYt6wSQ36dubbyMXMHac8KPtyHKoQEeWbQimf6qB2DS",
  "key33": "fLPJAXkS9wYNsgGBk6vMsZuM4vWbnTJKQguYTxz36VsmSDrLQBdpyC4Vo51bmZsUVYL6xv7H166cZYPYqjxf5BD",
  "key34": "4eQCJgnrsKrmF5ATYNP1DDSyGAVeaEUMntgQNTFD2f5pRWusEfWBL1G98ED5RVw7ef4GcFjBhncxSc9Cj92z9YnM",
  "key35": "5gskYnzgp7JpQLNpACArbyqLWV9KweXd7NkbmYNXA3Gjggu7JXGuFBHm6Acci3HvwyJZwzNNRehwdzGMmg1Bu1Hr"
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
