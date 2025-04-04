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
    "B1GpnVYwXJtjQjMfz4863ZdKG3ELR8swY6vF6Pa8X4r5192w7B3uJZ7CiHK4eh5i4jstnSZXxJ5Z62bThpBjQnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9UJmDUk6L7JTek5szsW5Qs7Ge2ajKks2B53FXLzUJLLShXQgWmQSqkC9BDuMQCwa8FvXfV8QAFPjc6YFThttcVk",
  "key1": "4QcrZeqGYS8WZWZUcu763eCiLJwP1ASwsYVNzmLomkfFofv846ztabEs4j9vxhUwYrnQGL3h2uG9ReJipnerwC3A",
  "key2": "4PdEXrwtngyoYqYa6s8hrAax75wi1LMbW2wzN3tGX2GDia4hiAToREyXwyriVGzsjpZxuz3AvhUKY4n31XAqSQwJ",
  "key3": "9zd7FmYQcU3HgJH4XjK7Qg5rLBZXoxJxEXS3WZZmd2ihGTD3MXNKCFbma4zXHxN2pQegzf9mhUZkYHKzgPzubnj",
  "key4": "5aycNH4YubQkU9CYzLHREEaHwcW3xErDBqKsTwzgiqzknV1BmoCjp3dicDpXsa7UxbKC4rZbomyqxeGMA42GpKQs",
  "key5": "4VJF3HMo2vieUCxJ4fPZcuenyhoqikr3BVww7aaQnh6q2ziXCgUFMSfw7eQSpE2EKWEFVZTGCTwLnNbcuCoAvthh",
  "key6": "5hseQPWpLAMCAJ9dFZU8TjrwPjhLXQDgrJEMnCbcFTYeP8VXJ2bWpZz9DXEP4VPCusiwFVS7fDXqri2fQ5PJiwtj",
  "key7": "37Hx56FQBaHF1XtB9CsEdS6Y3G2BLciHypWs9kXmRo6JMC4aNBamGprg7i5eyr1tyAWH5shg3qSVq3TxLK6radbW",
  "key8": "2HQM8nf3Y93yAztoVjqgbPMWj7kk5WtS9Y7MHCbsRVaXBRB7QJih15r9KRzvkSGi2TEwE2H7x1SuAopRemiigEhf",
  "key9": "2czx477KhHYbYsaqHtmFgaTKtZsECAtnhehpFmiem6CaXpPGiXs98v6YGLCnncvS7tDrDQqPkjQhYcU71PKTdMHk",
  "key10": "2MJcM81u1nsfgR4PUbSjBDZcRRFk9yv777MxWvXT8FTTDEkN5879YBRrm5wGHt39dtGdff5rocjT7cYkE4z2bfMV",
  "key11": "67kUVdanqUmNNXbDjwrRppT4cproxWWutgT913RjKxVcTqD3NgeNhZUYGXsbbkbiFehvG364UKpE69t6ePsW6mAp",
  "key12": "32E7uyWQByYhJ6dYZT9EfjknXSNcMSUFCrkcJqfErcSupENM4dduZZVkkjwKuM8sDpzY4uLeJJD896Ud9ohpcPvY",
  "key13": "AZaJGRM8mNQ2ZPM5inG5MKXcJVGDwWsENzFJaTH5uoipLZPjB3Z6BqigRD8dNyDuAMCL5gB637B9exomN9ZeNht",
  "key14": "57PUbbyE69rLzZkoWVEBsCLTBPuvAZTeEmKViu6HonAgA4rij5UiGZNYJ8ZtmhWHWW8yco2wx7cHKupLMjfCqVPV",
  "key15": "3nbXgngLAqBYa4QfWLXPzbfhJ9zjJ9nowWGedRafGw88mRH67Eep6gcGb9kmTCyN12sGginG6GA8EXR6cRUbXtub",
  "key16": "4X7RJ3He4Zn2yAsXCb4PkSCNutruahs6aAh3wS3PS2UXsQD2twfamMnxpRhcjkDXBeB5Xk3KCg642GcqeGmG6rUE",
  "key17": "tT37DuscLrf9qA1UY24bFq2agT8GbpKpWzE3QFsQ1m1PtG2AZ7ebgbhSkHvnQ2ZvUmvmeZTsMng5zNVC91J5K7M",
  "key18": "2J3kZMBsyWbVkS7dbT9PWi2GQxgBiRMXS7rfXn28QBerHq6BvHfsN1qNv52VMBwHJnPYWLrYHhTJkK85aFW93phG",
  "key19": "5sxHB3syQHiDxFQ3XngUZcHX87izFQRLsgiuNFJi6RrC3UXyuDkCFTFQMjoMKYzAuipD6xm2SERKvoXr66LYu1y3",
  "key20": "44WipMVDGGodTvuAQ5FuGVRoR9BTZtyYqNhNXsroHypV3Q3eVPTxL7uTVpoQ2GNYNzPf4p4aeh5Uw2cNMhahLNVm",
  "key21": "57NRWU7doZogMrRmD3XpLhrRTtJCqFDshkjGv3QDQD41hBF1vBJAEoMA8bh8R88E4ca4nVSh9njVsuhbJQUwpBK8",
  "key22": "5WGuHZ9ywasQZsPMFju3MNdKDuqJdpFmGmnXY1qaq19AZj4fc9apfVfZgrRaVCgmrPkg16QX9AMm8jMMYR6Nci7j",
  "key23": "XyhcD6H5sFaEmiZ4WrnXBxG6se3TvnVuq3kefq6tzb3HGDACHEKh7dRn6zYrwS6p5pFVRXZBraRJWxdKWQafqkM",
  "key24": "4BxhRurTZ5kfMp8dvaYHp8jELNrLk4yHjHA6KCGheZ89wDRtPXN3PmGT1kZHfafgKzBUsQ7uc6AN9RewcnwDgX58",
  "key25": "36RegkVoQpvZFdxVLAHAFSLKYLJeKCS3XhH1QHkL3XXTbNXcD5b5VMMcRmeLv6i3AMwDD4hUXxiv3NArxYNFbDmb",
  "key26": "5JjsDntorMmYduA6SQoqWzcrGQCRH3uVg2yjKLG8fWPVKyUPBdRfqSUxEAv37B3zJVCfHLW3ckKMrDuq2HoPVn2b",
  "key27": "2sCKU8d8872vqkwC776LhR2VsytSUD7rqy7csMpmFbFUUjup44Ec5GGhFUuNy5hzLSkgLQ5iM6GuJEWrMHQ4adYq",
  "key28": "3KC6mmk4hY84eRM28v7Pspgs5Pioc9NYkm4tmkM98d6AGtmuhXsCmg39vP6a6PEZfjq487mrmHX116hozhzNYqqM",
  "key29": "3hPtme5a1mhiCSjNn6PZcvikMMsyB96SqxkJTSrFCNNCiweXvHqAKkAhBFRyv8Wfzb1iuSEpawCR4oB6q6xQMT5k",
  "key30": "29xW8togJZqSbniVsBCC91fjQxGrE8SRudVdrGbBBS6R4W6Spmjdzt5GFQ2mYZTBpXbCsssRTFaTaVksouQFSZCa",
  "key31": "5xHVVQ54fxR6cqXbc5xXFueCFLYJwL9vCcYyyqTpzVN6R6gktjD9HuMPZe2qZTNnMgKTpuaRYtMSX88nm3d329ih",
  "key32": "7NQD64pJqJhmdim8LDL2ZSgspybm3cMRErwBFq16zj9DgupGfpUqq47JFNXeTQmZ2VBBGrGHFbiJVLo6a9j6Qcw",
  "key33": "mXL8yfhu4fcx1Af9xSJVxHKSQCzi2cZeWB1Kj7gCu925CazUg3Pg1bjTa4wuHTFDMtc241LS8Ek6hsCFkHvYeNp",
  "key34": "4xMwbwpL2LsHvanATmR8VqDub3fDC3gDWUup7J93SW14xsbFBYUeji8MEj7qq6quJAazBkF1W5qN5VzNDq2YqUwP",
  "key35": "5ddDAReLjBBePTTpUvpS8z1BbqQ3MjBESgWwZwC29nsfEPXym1ouZXfTw2ZHpCxHT7hGHtNd3iUPStbuJ2huDxe1"
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
