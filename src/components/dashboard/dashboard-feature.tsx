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
    "3vcyC14ETLygaXZZAA6sAX474KTYFvYiKQrtvrX8n17rhJyVReHPQYkE17LCA9jDdgKtDmnDFZYcr2vnLPjD4gcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YNXpKcuSMfqFh1tuwnUs5Lr4YxEf5AD8mNTsoMTwqGz4yLpjV88FQiQjFVKxYcabLWKwY1a3CPKhQEYYFN34u8i",
  "key1": "36dfwPnjGcoWuXi7HUUeBWSiyQKzM9s7zW8vTZrVkXN1kihwwuFKs9vQ1R4xevfimpnRromwFejGWeEYz6MjWcy8",
  "key2": "3x7PYmquWQtRvBojsz3N6XUz4EGXJDEeMcoEVgWPJbbEam4SGRTZEraC1V9X133NeojxgVDRXZdggj2Gr4aUivmW",
  "key3": "2w5F6boxSmEoqBATRrwpHpVA7mMPmC56XbqtsxNm1DcSgDxuuQhpYPcQELw55dLR6KVYLWKgwi3esXkwiBfEVTKL",
  "key4": "2QeZVHu6tLdSMCtogg5kMDZufusz2tkXvvY4TJ35ZeBEHDRXEetPUsuugpE8ry4uWM3U1c8PKiy4bxxBz6LEdujJ",
  "key5": "58yJPV8CrYKc2eemzpiTJy413DHtiUEuFNzSgF9vScH6dDREJ1ziDDMoEBPpSZp3PzMxbbY61uhY4nftqQZA7ECt",
  "key6": "4P34Ghf2ddiWSByVXQ9NWCfN7DqL6kW5HmtZnVeGU2XLvs7WpPnhvyNy9akxnX8Wir7eU2UuZe9NimmBWauojPiR",
  "key7": "2ekLkjqA6SRqPEQmvcnrqWa4RB2YyYyHFBNQJEyF7eMaeSB7XCpnxQKHcZPp8xu8iMehcB2xt3j9TV4VQNtjJdV8",
  "key8": "4VzFTADGYAxzWHhCtfqTanM2y5H3kVaYXRgvmKtoxW5NcegivXoLTyzFY3WADYLZgeYfYyYiFWc4hpL2FhuT6Mi3",
  "key9": "3wJhWeWSGSc4zqSPS85KECQxvnX5jdZkGvwmTmjwmnc9AojGQozGxfg3Qw3KXHdMmF8FsaCk7HL6GfnGwoSdtW8S",
  "key10": "4y7t6f8RBS8KZ5aNLWQQHh1HFgh3RnEKaKM7sGa2P5bPgip1tH114gZR6avPsYv4vYcwy9ufciC2tm7YNTHknqpN",
  "key11": "2NdSjqg3GbXdZotfWwR3PyKu7cYPaYpaCL9f1Jv3ATurosmNZR5bwWUiKT5WnyiVgSkzma6DZdx7jLaxTJ2Cmk9K",
  "key12": "5aJpPAfvzDqg4zRfKNM3wZ97LMThTXS8bRFCpxk5wamnjW5QeDAHGJRNEoZp9E9XPE4syfosGSTWYwqHggpPcwHr",
  "key13": "3YhW5qWiV6mfqUtgLpd2ahS2d5kToASMpdcCyWTYgJMAJtDwy88ugndUxSRep7dmDvh77KqCFTNpFRkVTBycq6pK",
  "key14": "B75krxTzMYg9hPUKk8GGrPcjjjnDbxJSayC3zwHy7fkUdZdNfFeGSE9THF6mCTQEGq6ohdGNGZueuV469uYMR2o",
  "key15": "5MSFykGWRdKVvE3pAup6mJC4BCPQ4c16GxTEc3r7D8BAJ5Qi4ZtCXMtXhzPthyovPz8K6NEx8v1HfjXzC35LNTvH",
  "key16": "2Yuu3iB31XV7cq52nSYypC7HKRGcbm6pY1m21RvQsiDTtCe9MaNJMV4BxHSCUim4auDd2DefX7wVHtMRNjoQfPgC",
  "key17": "679x5uNbDNnT7ZCNqQsk58wBEVFWNh2ARzHbsL5q9pc2Mq5mbSyGK4sT8YQnUR8SZWkodJhmcsmKpdZmuULjmXYz",
  "key18": "5Fk2VRFDGYpbjCgFSupXYmZHMWyJnvkgyyCuBE8BfuK1FLSDscfCTHR8Vcosjn8sw5Xm7fSacbUcRkjcZoeZ8jfF",
  "key19": "6cKC2z7qDEqQfdExTUciswRbFhfPpB6QeLQjJeML6jj5U8QQ6Z7WjeKJSLK43e9W6JcvLDA3N3ssHuyrBRcizvg",
  "key20": "58xS2wj9HzwEKzmBBJkP8fZ8YbKzgpy8G8YPrETdXhgxmiZ3YiFY7J6bM2y6CpXDoSf3H6UhqsC5XNTCMyBfS5e8",
  "key21": "5w8WGE5Ye7HWTo5bmpiJ7o7W3yaUj2ma8VDbv5zeTEeuqTL92vME9MsfSYxMAaRUYG3ybdoDqruDXZs41oJQaCA7",
  "key22": "2xcmCUvqFpYzLhD6KMZujJiUt6D23feBiQKVhnKWHHakwgMMjGZSbpRr1HWUdHLyzbg8wU95LoNSxJckrh5r88K5",
  "key23": "3AHx2MBQ9vNXxDSjn7dgUrje5uMghFpdkHMT4VsKSTYjp6G4TXYwyUm3sqrnesoZX3DURmpFhJZQRBhomoVEpSxp",
  "key24": "2974748QC9hVqxoTtNAp5uuBKNCSD6WfntjdPyJwnfYXTc3YGgN7rFsPqt5i7izkQYb2i83sDsvrf2iNRfKkFJs5",
  "key25": "4zuPjPpf5MpXxvFRQ1PFRYRugkBC8Ptz7sjxqadDakqCLgBFYGWgAvfaCmmKNXjLjRVXvigFPsX6qWuWHZqqNqsb",
  "key26": "3hUzyodXoWkmF8HDcjSqdBfugPX8vFguy7aPbpxv5UEDGZqL8J6WqLPeMqBLqauZeM3Gt9iyDW4k3A9nk4esNunf",
  "key27": "3txKTzwURgMe2K3SVQDMw8Tg51DgcdjWsE5rUxp65bbjZBQB1yv9CYqgmnAtw5J23N2jm4rV37Jpvg7wxGAGS2D9",
  "key28": "3xZ7caEcVRAkufCEoC1UEynvCL6H5pAt23VLF2Nbv5TRkB1ZfGaet8AAmRV7cVUwtbMBqgrDgCxomsHDY4NkJBQc",
  "key29": "23422VkSCVVH9TSvMNZS1v7WR41nuzSTNaUoK9UiZAUn8KVFuL6ekxaJUtDPL4bRf3KYHY3vRfuDYZH2y1NQMFQ1",
  "key30": "5dktzxEuMGEvdv75QditZTDxhsjj94RtmMMaSM8oZQBbHGgLXNMCoWMnye2dGoa7gonH4eCekaWeQMbgGNeVvjeD"
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
