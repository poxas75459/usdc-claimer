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
    "4immnoo27AUxuLM3VgzMhoxDP2jwxUU9ueVagJGUoz4v3xYjDKPbonzn7hoxGz6NUi2bFCr3jdmEYkCKDA7ifLNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65kaCtSqaU4F3jj1e5EkcumVg1ozTMoh2FJh9ui4hVyJ1FWqsVLyMboDpWySY9Pt1ngYaRHhQ2G4xXAEvhbcz6Hq",
  "key1": "5irJSLgwn1Ztixf6UEvebzmnFS5NTtip8Ra2SvAdy8qsP4H9eJuMkv2doKpfsWCMoVgEqHJRJPnbCQJFM9cpx2dH",
  "key2": "5tKwAAbP8q2CLXAPaGyJmqqm8MGGtXuYWyHwRA5hfGCqPEKkpf2pspnBtCCjBYPJ1qzKrbgzKSqYd3Zz5wcitorC",
  "key3": "3RwHrLwrgGQX5zpNHYQMgAxD5xr8dxTNtgVP4S4Nk1aj2qFVMuLVWBXRVGPAgEpqtjFe7EWj5wC6FnrVUyTJE3Eh",
  "key4": "24EguEmZ6sRhLTWFsk4UDuycuaA1QSru3SvyRXBzrDAuYPvjjdF8rbAthMSoJBkwCLK6ECYgsruYBa8rpgP6Kt71",
  "key5": "38CVkqsaLJ9U7Te3HdKhAQi3tHDJ6VnFnBZFMtguYiAtUVXqhQ5eHGZiLmPvdCFJTTNGbGkTnUF5w4fjHp31TSCC",
  "key6": "5ZqCSCBTZ9Qouj6vqsowACXAavDCT1sWHcfp5C6DvNnuEXQDymR2UJViYfzKPxnQSZY1XVaEN8RZRe5yYASgZqe8",
  "key7": "3zMeUWxUi1gBvM1ExTdkRYFgxCbNQKydUFMkY6zNNviS5TRoStRxsZ8q59vzWZWmYgyf839UWUHaMpKy7VczqoEz",
  "key8": "3siBC3MMtkhE58qNkfx1ifMjzHezjY9pZh9DP4nRxGw6BtXXmfMMRit2j6AUKs7o8EEv54yvWFUv7jEad3Yahh7C",
  "key9": "2K74Z35qfBZD1PW976A2j8kZ3yqiHtxKVPQZmFsY319WCrTJKo5FUYwrmhVUDM3kvs7VYUuDyRiubQtQSvJ6xYzV",
  "key10": "3EoN8sXoCyUNyc6DucYvqQp7gpZS53U5GgBTv9kAwqq4A3xNRsbmNpHEk4vzWU4knwdyyBe5tMiNE9gnS7c4EKMP",
  "key11": "5deXeKCh396d6X9EEGsYRgbQchPP4FjuVFW93KpSL9VpFuE8s4C4HBVDCwfywXKxL342vmCGAvPb5UHfKBoih73i",
  "key12": "5p2jGaQke7RBFLk4nvJWUH9vLihXHBvPpabTqFFsxQySqK4YsZFE86RtQedpeBjhPzEEY6XghScVTUT4Y1VAvuBw",
  "key13": "4PeZU5ugCxGMPdYtt23pW9YtwyXxvYEz936jrZo5nRyHHWhGQd8swgTqU55PMvYxMrJf2HRmM28R51CM1SWYyy5h",
  "key14": "5VJ9XNNLjsESPUxewdXxNfsrppSST3JufeZNkcVjpqjQmRBxMxh64Q3tmGeGXTrTHYE3czYsqLDqY3hzca75BK4s",
  "key15": "3QWpamTk1B6GPetbfmDvPacUWCDuVPb4wBkTF3Q5tjP1Tb8896FY1GQoz4cKeQPGLetoE6SSNrPdQzCdj2f1QRX9",
  "key16": "4rpU2x9V99ZFozgGMW87ejjEeVLN1z8rR6BoHmzfbtUibWe7wVmvvZMsapLbXkBT5o57zh478jo9qxnvZ6o9KX7E",
  "key17": "rwdrpYuNtxbS82kuDQDJtXGu5aRHj4Q4XTmjBzPM14wo2wrnMLvhtJCBUfRuBvqzbeuS5noPv4feKJcdtiCi331",
  "key18": "3DaSWnZDoyBera5YqQFRrYe4cBFTkQcuvCe5Tw1SidYkxU7tHys6HSQJ2KYmf6PTkqFesHJM25x5FTC5hHYBjrPP",
  "key19": "36qfcXPCKyixVjtu12udSogXGbT3H9GmBXtKbAyZwPcPok1BfAEXPNjNZTzNV28vhfaBdf91cHf7q5R68fGMMywb",
  "key20": "5s51FLbgYWApmCeceXEWiUQdVZj3mzqWyZM5JahCF92JAVjMc14eqxU6CWD4QfCwWDe6G25MjkZD1GChMFSwrhqE",
  "key21": "67fvwdDMUYhrLmz3gZUX8WS7FGDy4PAeNbS3aXAxUvJBTwSud3f618zXu5Bn2q7Ay77cLAahjq8cLa14yeqsKwjA",
  "key22": "3s71tsmkoogk982zmQbNHKBi3xrMpLocHMZFtkpXkPVmwbz4K7xWZPR8WbnkLtwb7rF47WjN7aDSTPbMF5owWSx9",
  "key23": "52Td9CsErqUxFeQ768CtDm5zApAppwHHeJccPswZGuXujX3oU16UUpHiho5eeQtAtDhv6MbAuJn24rcwaBJes3NR",
  "key24": "5C227TuxShLmbyJ1hY79MPtYwE8mcEgReerHQUAVCjPHLNpkffBxRBDmkHD6WaMwLa47GJrgftDq2RNaHVEfEQAf",
  "key25": "YCfx1Z1u8LJjKA3iQ748ofHMySwehURNtrDD2efVEPAcbNGFziLVZjXQ77D8PYfJmpsMY3rvM8WS5xR4SxdMjzH",
  "key26": "3Zv2nvLGK64iSfuGEqAe8Bi686GSwY6TusL5RPJBU6iVevGrBBSnYQxYnLM4P9bm2cEDGMKLdAeDV741ERTN3PSd",
  "key27": "2zQdequG8Fs34JYW5qpaWBJSK2yZ8CbTiRjVPCPnFzE5K4PfA6eUXh792aaxmhkoTfbFdUFa4tDCKf2k7KGGKR4M",
  "key28": "526g7zYDTcFAmK5M9tSkCYsYmp3QpS3TwCL2dwAWMxPQe6DNT6KyfEMx5EhCS5nY43UQvgaDEY4bjHzFvRgrp4of",
  "key29": "5LUagzSLeKCEPVMcNzZfp3jwYXgd5NQjgzCrwRrT2xLwSu9zCXRYeUDHVtMYC4fqEJFxhvqy6YUNR4Bc5QzHjPbm",
  "key30": "4MF2RbkQcxu8zoVo4j8NkcErfpBAv4Kjt9iLhphSmKRwiYHMNsdbo228H67BQpHwV3ZD7n5c1bwvpu4y1DozchC5",
  "key31": "3XNzApxA4KGTHKzmrZhpDLAfDzEJDArUeyxcqocu1XYC7ujzxn35pZMAnm4ZtccxzuE73cziCa4aD6TVfGKVNQAU",
  "key32": "3Tot4XuCH6hmyYCrz2gKfE2ahEm76TqMGJuJGgCprkkkM8ymTJUXQWLNFpQDEzVTKUzHaQo3KBaqT6BsjGeuJSnz",
  "key33": "69iY3cmMHhMesvv7u7fB7GFzangQy6US3sACHqbEUWjHaBsNoWJTZbr92Rx5sNFWCgSDyygLbMWAQDa5XzTY6N5",
  "key34": "2gSH9pnNE9pyqnkGE29mWPDZMRHeMXE7mEJUfmWgFm3tVfJeiSdFWzM9NrVfgrmQ1YSZzF8iS2CCAQxU7cfU4qSD",
  "key35": "2TL9buuvBGY2Rff3aSvr6uqQGEEM5KFTeHWRzj2iXFXmfxXUcymAh4kR95dJq1waB3wKxBeRu3MyETwgGNyvuEjd",
  "key36": "3As6CTwpoXTRLf9f3VeiX6pS8eQjYuHeKcHtDarkPZwvkU4gYiYHhxhP3a9FjHsLMYzDkTYBqHffTJkk4a6a2moe",
  "key37": "4DpvXAxgyA7nBcM18VwHJpQ8PEHSfgfY6VySzB6b9LJdTBMus9QHDbTkV9P4Cu5rvPVewjo6qE8gad7Cb3TEYMe",
  "key38": "3j6QVBFXLL9FxRqZxYwbcbbXzY6Y883rZUApQ933nxKm7eTuaRYnGBC1Er1P5EkayT9RgahjqMRHCsMYGuiz9Nzd",
  "key39": "3kYYNyWbsnuEZ258U27v6gW4GBqoRnW3t5NHndwcCsJPXG5vNbDH5NMoQ7KsWUpPS48NkcrzBChwKT1k1tMUhovC",
  "key40": "4qpPckTo344R1QgtHsw65e7jt683ooAadHNYtrYGjrxiUrs1SjHYgf3psq2DWUfoEWXNLX3i9o9DzXu7YVA1n6Wq"
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
