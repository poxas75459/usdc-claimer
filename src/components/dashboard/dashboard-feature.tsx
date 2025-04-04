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
    "2sQ8TbU18xEp2qeaozUkn2qknkYKVYC8r83nXk6WzetjD1mKbWRxv9QAdzxjHFj1zhvD9bAjzsUwZe43txJWpw1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4iUsKcoFr6DEUJpfpYZf3BGcmBChpocuLeT5xd34y7BeG5XR7vGeiHMxNXSWn8uDVbpANoS8M9frPcR8TgSRK7",
  "key1": "2RVGLRyA9XzRGFQ2XcJu3RtrkgvYuymfBCiezw38gq7JnHBr4H78HNdiFdfzC3haiYU5H4frKLRLMi5sn1iGBBEi",
  "key2": "3R1t16ftXTtK9Z1qtY8KY7WTzTHjBS8X7WbY7NNpW8PZPFLb4vMmtB5kGHBmdpbd4L1F9Bu2zcDRo6LjRFen8iaT",
  "key3": "4iTaZWs9e7DMcyLBpRhBq4m2m3pJjsuQeTZd22rWvdqSPaoBpa4HreKuVHJaxEaTFZvTEGfQrTPSXTk1LrdTLDKJ",
  "key4": "ht73xX6eTSj5r7MduhYSjQQKeX2bBtei4knMprQTdki8Ert2J6sY4CoYV99jVSCcuCiZf9YoperN9PZj45XpB3X",
  "key5": "5FoquxFtNJGMmSHFoKK4DBeKP99wwo74ZEXtQ4qUv8r5CkrmKRuzxxCGBUExvjE4uEo79xKMH6Vq7A8MefFco5sT",
  "key6": "4oBqdTTwZg48sKeGzv3HDVkLupzHsYvgrXFsEhMFqs7WZVxE8AS4gJE7Y8neVt6CXuxDcsp8c5EeSHiegUCYUamB",
  "key7": "Yk45JyQZsXoAmKj1F3xRyYT9jxbKHHUKd8we2tP8m87Jz6edbpVt4Vwj5UBfMaK2dmPq4UzEFhPv7y2HaF4LA5n",
  "key8": "4KQ4YevkNkR8Cv56q95u6cpYaBohgNV2sRhDMbDuDCiFHy96L2M7GbZu67wqiAL4Fc9DgBen5nb27XdkaALQtbEx",
  "key9": "4ffVS855c7ZzigmYH8PAcqGM1L3SYPzj8AjdFd37SDo26avSwzFxzKNH7dBTL9n161BDBxC3cNAWqH8aZhiyQLMW",
  "key10": "nFiBnEeWYuUS1GZR4zY5tyhQ1pPoKxkjEXHU4AYsHr1gzhRJvtjdowpzP3RtcpZuDimVjnzzbjVsUR5cLS4s3SK",
  "key11": "5okzaqxwunErWFQ42fqsfZo6pwGjnuJJFKoiarvV4sFzCSSi3w5RKE7uiHcbCrJVAPcRt33aqfn8fHYVrtiVwozp",
  "key12": "2CGS3zszqgvftoW5xWP4jbHkTAMvYsN2j86aA7PXMQ4pScWaT9P9HupW72qJgytiRDnWcuzVichduepT71GUWi19",
  "key13": "46r5cEqcWbY9UtWBrpwR6tJdLtseYdqFPVSRQCh5enRmSNKs9vhRfZB6KFR6pBpm9vf5gXrTwu81DbiYkPG5Dr4",
  "key14": "h54z2xS1ZSH32fvmCcApo6hBmSWLY9uZb9YRv5v8pPDPzKUecZgdDTJyaSPiDfsR1noSH6Trb1MQcvosjqTsJPH",
  "key15": "3ngASnnzuDimBDvVjY8QoDq7RKhiCp5bVo6ZfWx2mjLdybH8yZmTi7u4eppyE7z1uE5owh8qiFRnhZSyxkjKzWy6",
  "key16": "4RjP4xSQCmHuKaGRTxCHRn7udv4Kr3MoTD9dTcyfF6eHHfWHUiFTnj2J7s9oDDGtDBguH7zNarNHMuerbfUX362q",
  "key17": "5obWREA9SptR9z8CNHf9kaFDh6sVD7gc7ERzweTcd5cS5LM6YuicHZ7iWSj2tMQBapNz7RQg27UwwQcVryxbx1RY",
  "key18": "5Cc7Y9gLR7ZkmqyjUkkwp5rBtDJvrZcSTwEibUkfUVcdfHTXajRkYsTLUm6d3eGqxZ4pQ1YBQzbL7egb55nRmxMU",
  "key19": "4ontCJkG9ywAs1MEQEP6vCXuUUdsiQygfndr51ZxfLGsppo2U7iNsTC7bCkX6wrgpgZGYneEWPSJb2oKZXCbafxt",
  "key20": "3MDi8KXZGBtwjNaJYgybrrYusRhsv3Cat9NjCxjBruCfi3gyJVgSdTrTKDrY73xjnHSyAVLWqdH6fXEzonUvbCXt",
  "key21": "54iVsgns6M3uXvzf48viLjbxarnyQ41PhFxD3Ap9Gu5avLrMayc9JBJJ2AFWyiZrSKWJbh1wKc4ChBM2TSCUcWJg",
  "key22": "3SM828ZR3Jh1iaCz1t5VYkU6DxngsuMzeXST2P8t4qL6Zr5GuYhYkmbcWkQ7dBaQk7RfhwdyYiqYkEzWdyCH7qLq",
  "key23": "dwpninmr5MeheZ1Vh3sRGdXWGNSJhHtcnBYXUbF4EURbGYGRv1hziGBT83Q4s5ewbUm1iqZo2GrmoaGXZ2gzRRs",
  "key24": "hd4sBh89PeDoEfNSseYj9KcWggcc6EG4xxEfRMMRLfL9GwnyGu8yRw7jbzDMtP24YDpPuZ48Ymptn4mkQ2XdAsp",
  "key25": "3W1Vmd7rbLeSLbvxoDcBs1d2gNZ6cT7vC41wVh7kbxbQnt3CquBNAFAgCp2nMyXNNCijuopUisHofwHsW9Q2RXoa",
  "key26": "5Uaevuxis4YL46i6n2H64HGJ8FQ1gy2bhuRwRi2yyWWXnsAmpTrATjgiRyUzMVKiELfeDHfZreXwk2hn8c2V3UNq",
  "key27": "KfEzeUVRB9cRWYSY3PTtXayf7TjaQJr3Sj4bvmCrrPbSsZsfyNaDpZ6kXUckYrZRpJoT3rBUEHiiFvJZYNgSPkY",
  "key28": "261AVdZtPFFQeoiXgMgoY8q4jv45rSooiBbqEEHoQMySxhf3QSNF6n3xR2ehWuBtrfVFNvoYKiRXrZB2wpGvaei2",
  "key29": "4PFLSw7Mph2ZtZ4bpxWbMDt2CSWwFC8eLujJBYdZramxoC8RQgVT6c8WtAFdjcoT8oBqoaF1PJk4t6Qb4TNf4yBt",
  "key30": "462P8cesWmboCKhUr67dLW2vK4jaD5Xga7kqLzfZTV5jrF9Y4aHYxrf2swWnJ8HUCfjNXM12AWoUck6em4Xqdwz9",
  "key31": "2nFNrv4JShw61pf8grV77us6WXaeAgApa9SDUjwQnPBvJ5WUiGbM38LvGH9kT6wqUQw1QCckBVRc8ZKnmhjeAPBW"
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
