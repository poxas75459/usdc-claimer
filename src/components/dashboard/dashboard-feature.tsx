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
    "Cr8DiZRmSXDRcxnAzpr1oth717d4e1APtzfVi3t12fkKnC5zN1sR5uV2jTBCexQRPwzeQnoLvfmSzvYpYvMzUAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34zHnxdJpZMqnEpjsw3TpwP85vQe6rFrXQvcaE1mm5sWSxNvfa4H3AeByNA8H3yc4KzqfxiGT7duyQkpR6Y7fwB1",
  "key1": "5EHNXdSkzxN61iuh5hu3crfXV1wZhKondSKziskX4pxt16YB3diHYhsaFJjkAc7mz2jFkLYBZgeYLSuSey283HXt",
  "key2": "5f8eEHASebTbzp1BypZjchLE2W93V8L2kAK3WFXBfqKd19QSqr5eZBHSHJD8xQkKVNeS6ibcwW9d3eu6wzvNbkHy",
  "key3": "49oDz4iJtH7dnhZnfeoxvwhNo3j7FMGHMRnKD9qAXSEJYHgPrKy35CQdAizsEmtFMhJ5PPiiXT9bPzAJXGs32Kef",
  "key4": "5XKhwDztcbQGXtjUZ94CAXUsdXeRJKgFEgUR7of2x5jxhwQmX9vgndcwPE3HgAe4MHLPGN1jG4oraLDqHb1hCuuk",
  "key5": "2ptn9ZtBXgQ8z5gCmBg13Y4rYYxHbLBu2goZtXg3xCfXM3NvnwSaywiDHWVUEYwkntsrwKJYpx11xUbBGaCAqMP4",
  "key6": "4YJ9joYvmx8fPApTyjCxMFeZKsKXTcP8vB3vgxo1m1bpccvEn9bfxbmoqUSX5yTKxEXsYzJ6gqPdn429eVJ7K8Ew",
  "key7": "4GLJqCT22fHL64Z3ac244Ba1nVbRbiBtK5xDzt2ha94tuJVR3DbcvbQ5dnrpLKgA9XKdJwJL98LZ2R6eFSFxqJfg",
  "key8": "4NtUi9dcsVGFXac6hexJ11DcF2SD2jkLkhGQ3DBXZeK3m9WScZFnzjwQSKHNQEKgPRq5sZhZ4r54iC2FkxKY4LFw",
  "key9": "6G2BfzP7RpKmFceitDiPDFTBsjqDjZLgC2Yhi43prnhRdR2tTLH8Fiso1ADawSn3oPEJyEWY7Cap8t9bLDiyNxu",
  "key10": "4orpozGfGDBNjzpSJ1Jx4spwEmrxcdDUdu2Lwom1WiidwhPyfGKE8YjW9HWZ4MqoRagHD7idKeSgBhG6bciczv1s",
  "key11": "2o6vfAj2nL4HYaHPdb9gqHiUDBMLM7mpEJGJc5g2jqh8HVY84aoXDE53C7HwML6ZTL98iYZM7WC9VdCg2bRQ4ytD",
  "key12": "a4h7NKGodmrt561maN5BBYFfQgiLktFwWSeNnVbeLR4t3G1a1KWFXLKeBnQ9anJbM2pGGNZ3dJRKsc2BYjJrhu7",
  "key13": "2JhKuLpWyKVkKghipbhXJ7ZStYrFwsrsxvUpT4fgLRUdyrjWobAYZYuMd5MZZGxBYHEHLHr2pfHWUmniNfe3UcBU",
  "key14": "295PdMvCWz6mJqhf7gfkYe4PWCBc6XAygh6yyTjGteMqnVMtmS3nDWiVCv1f8uZzeiQThVKSj75GD6h1ue4jhuH4",
  "key15": "dnqjrGb5AFY3g3HMYXZ93zfqccT8ZuisxRyjTEsPh3kTBh8PxXfW5u9xuPTmLBrfv2VL2By5iBQcASC64E6yxNp",
  "key16": "QeeGgaAifHX2UnRCRNekQyeWjeJCovde4NxHThVbdzNj2wvgfEcDBzEKEpqHdkRFSkfuKF7Jnf2hgzmdv8i7TvV",
  "key17": "21bL39fNDEamzGHMg99Qnmei4mBD9SHCB41a8VyK5Dbv5LyCxEHN7ABRnsYxnRH2zq6JNeuhx5CE23cBxnrRAF2s",
  "key18": "4nTQoHed2jSWnLHckBXCQJsfdbDTDrsqkY3mFnguhcBakL78W51Gdj7N9UhMfxbYtGLV2LcpLjFE4HvbQpFnjVmh",
  "key19": "5e6u8n3LFA4wG4frwi1RgtqQNq6gPjggJfHXMDsXMxboAw21sJfjCYshJonrHAZSdPPsiUrNHACvzFLEXaSGuNEZ",
  "key20": "3QXtTmJ5hW3Z16oXWmgkXtbwzpVHnM9WaNfHciXrbCayKxcAmryPLnSMfG5D1gyiuFji6oavA79aHDsH9RviohEw",
  "key21": "2VfrHVJrepRcY4kLH2kZ1YMNkdtD6YwSp1rXDuYHhEcdcnkDnfb3ENjm1qhBjGBGaHD1r8TNVC9pUmmTKnMv8vYi",
  "key22": "LYCW3pgXoVmLrG32vgBs8MSkP2FTUdoMyYDe9tXVhnPmRFQGbVSybb2eDU39ncDxFNU5CVbbHUot2caf7HQbEic",
  "key23": "2mjS5yBP9HC8peFFZDbFPkfYy1J5MrkkTk2s5NeXyUemC1R1ErN9tTyVkDxekbfnXApUVbmiBh2eJ4CwUjsd4zuX",
  "key24": "5SM4L2z17pvuKiPTz1qUSy3xdXXFZUtwxbC4G75RtizYC2kUbv551ptJeEa5qyLzwrBC24gVJwnT9pfcTxKLLWqN",
  "key25": "4nL5tx97gLEnNLsBkEXkf5QzRLHmHwUFhNW6DaBLVvVAXkea51knSowvguJD4ttTeiXotzZWN4X4HFJtehVVXDYA",
  "key26": "hjVL6o1pXoV5idjsfRhkMtgfxaMwLG26GxheHmh9GPsGoq9Z6wHsS1RJWY4qBZh1sP6JRnZPpfZFznK8B4dfsSQ",
  "key27": "XiDqJx2969EZ2q2cnC5MBN6Aj4BPJuvjv7W4BKjPb1Hb5b989RvwaPbndVmbdhAEQrmZf4j3CF1B9pShgRgDDz3",
  "key28": "3DBxYc6wdEp4H57suDVyxhy8NVjtKUSWknSTduogw25Z3U3Fu8o6Vtk8x5BpGiqP74jsp2cGnCtrjxAKEgFGD8dC",
  "key29": "4NAMVBT2EgdTHLckrcPFepU8DhzLquaGSi3kRFq41aPyT29WxK54TAZQj2u2PzZqLsKokDo89Hrgj85yPycHQ7aA",
  "key30": "3LQuLHXFUFmyutxDzUmyC2aufXs1L4fnhM7dDTVae76jALyNjkLDh6LFWXZTaVGfmR6BmusArRfbiwf3F6cPyFX1",
  "key31": "3nHfeUeBfn9DreL2MohS5mDdJoAsXQrEc8xEdVV35Hpcdw1x5NQvjQNkXHJqpitfv4bLSvK1FaxQSop4QDm3DdJb",
  "key32": "5pkcMvF3BK8AipAp4zZiaEQHE4hn65SgxaTsSdqBBWoa6uqwyoTukiARSr8TkZfWYR58U7VZH7zSD1x3cSvUqGUA",
  "key33": "62h8iCyfu5RvHTPY1tB68GRuztjbgkSjEXgafHFp986oodBZqSE91r6Cz11VfRRY79mZf3zDUBnzNDAeu9KgQCn6",
  "key34": "5Y4WqNGDUZCKywjrhsu4sN2NSVD5eAygVTjNA5zqorTCLhZN9TPmgAK6g4k4PaWHvg1msZvVX84EFBuDimtqW3uW",
  "key35": "257f5wMohQGkLmn1kNRfeoohZWHNaRTe2JuNgKunW6td5imMX3KMxp3QBvmTRrCcqo6CSjUzbiz78DKiMiyGUuQr",
  "key36": "3NAm8bWFzy6kyp3juQk4jYYVtQbyPQsCqgVf8PAdAY62vfa7xreosmAiicqNxxdXom3hYoNvBHh8QLpR612HTekj",
  "key37": "5E9ps2FeWF4ejFcu34LCCATjRSGGzMfr41XMWUdrEVUS3CDdfGwy3B26ifoucZBHMrTUT4eR4NckzfgfDQJTRvLQ",
  "key38": "CiTqTaGTcEfLHjBcjHj7uqQnxF2EvUCLAiHk9w5gvh2GrG85EwtyPM2hxTuya9tFYp9tj5vbGYsZHjNBkeXAzRe"
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
