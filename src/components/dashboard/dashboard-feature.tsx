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
    "4vaaaUjV32tB7cZSX8kkvXn7G5KnsKHvP2uCkuLWnYqNQwEXNZsBYtQu5tRvMkbfowtwnFTTMF7zvAWYTLhvrNLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GvGp9JDotXN1qKBE1syv3Sq8WLXmXY1ZcK7Nhir3ADxAmoTVp9ri9j4L8ufoxtbXzps5zkhFMepbFs3Xsrj5FBf",
  "key1": "44gfHA1WTj7zdVKtrhWUdpjkiLmEmVHk4brWTxMYD7tMTsccLtfQ2eHVLfTia7Mw1kx9U2UmXxZXgoWUALMAo1P2",
  "key2": "67WVhEY6Uk8RNxHYZqjofUtG5fPyBUFzvowFMBp71yczG99Y9ypt3EDd4th87NEzg3Ssw2rL7LD9ue6dY8XfhD13",
  "key3": "rDq2DzzCUYiZA5jRqoAghRktige2A2Ci2rgLtoPvBePvKe71WTSSPhEV3tASPkFMdz5ToMw7YXkvUuBiDpb55tx",
  "key4": "iYpKr1uXJXgDi78xwusACbf4BbDs7NiXytRniipnC5Bi6KgPGHaBELv1imQQrywLtfgPNczqjNFonqKkgVgtaVZ",
  "key5": "5uDxZR7NTxXQcnwM5HqbvqcfWf3GSL5ry8HzwJH4mNromvTyBjAiLTfNdkazuYHaXAG8wZCQycRqMofZHcmQxGnZ",
  "key6": "59cV8HGFqMopjYNSwVYDKZbGC28HTTWsLQJc1Yjt2FzgBinbPE8DRQ5VzTb4Bp99CZ6hBRcZC1Q5vXzgK4mkwT7A",
  "key7": "4EvKbsufWUVTfuUbuzUfLcjN3UnNvCzoLwKJZi17fwRiogMtAZJam2rxA2AvutNiqHZCDEKXTodf3N6JWTmYSPki",
  "key8": "5P9qVHUfdxSsSc5NcXfYsW5f3MV1yXSvV3RTzXFV43X9YAvdbTWQUDLmYwoZbHjRaUb7rorsM7RGnYbxHabi4yq1",
  "key9": "rzYxUnpT91nVEaVTVmbfMZYwsKFtY1ArEy683VSdfarN7AmGZq5AXvrtcEN6iiGJAQRh1LiRMnnjNCb7K3VgKEG",
  "key10": "234a2d4s74aZRm7oiPvhsvTWjHLCydtsiEhgLt8DDniZbXrg8P8cNg3vMEHvViStjNL5dqZ6gfKHiVCDXujVniuX",
  "key11": "2bpnbME4UWMroZwwPdu4vHBisyoP1gTeJj4ZzXb5z25K4YW4XV3T3chDXg1ZEKBmLPv1JZFXgoX7nxtXYzxpYKrP",
  "key12": "3Ficvn7uTaoB93tEHPdg1ytBTbXteLUNWCY4KnveiM7z2jsKspTX2Dk2aS9Amrvnz9rtxBPcp2kxJAMmgBUynDyo",
  "key13": "4sCEj2JVDj8w3BFPTHDwh8xDzWsJ4ZPQDUnpraG8zJvudP9d6etzQx5pL9vkz8RgegAgcwwQEZHYRoLnd33ibGtg",
  "key14": "bSdZqGkPuWXR4rkCW2cjFA6DefgBEzm1pnAz8cViWdXsQALKC7V3gXbp9jUHgPVWdWVv1GLHGHdGDiVGLq33gzt",
  "key15": "5ZBmCctRBeRu8T3VNwGmK6Xuv3UCXwRKa9zeWds39Pf4ykGieNohYJkVcuWdiuoezgr8tra1Vv3dNh9pPhzz6U4j",
  "key16": "5qx6FExkG6czhbCg4T47nfKgPDWghMSmmGcEX61TFLbnLiNvTSWKzpR78yKwWJzkhhSfSkk7W5m7wpqQvP6JqUgL",
  "key17": "4MkYY4UJW49sxXgFzrWVt68FrP5PappvPJQyA6wruewHp3xXVwgDAUAkoPXx74kS4kHwv3pAfKN9dpE8wP6nGdAa",
  "key18": "579ALWvVJ5P5SQ2sBhSt9V8je7R8P1FVrHrigJa9P2F7BiCMorcSQFCJQ7EVHKH6nbj967kb3DgaPTbgSqL4Voom",
  "key19": "xwbLJxYEf1krRHszUMZ6sut1uuJcCQfaXCwrtxoTHZNc3jS4tBgbh44rhN6zzfjqvzN9Hs6j7bHowyKUXvpKV9S",
  "key20": "Wm6FA36okr72GcfSQvj1AoRtHdmudwggNG3XonRaZy1wacgCNvea2wfWTHDwvf1VMVpRoKpir7a38aKeQnLvhXS",
  "key21": "3PRCr9gbPx6k79HHrwVc9AP8NVNBosY2n2bJmM3TBiW9UQBUCEu4EEbxi1ZjqmxogW3xUhA6wNpQNNPRuoUunVc1",
  "key22": "2AziZ7QkBqWiCTtkWqpwvntpV55BMVqXfKHqGtYrwNC7n25tcWyfX5oFZvNezvYNuDeLJ3ZUUxXWW6rzwEYbrgV2",
  "key23": "ExXmbLTNNAnpEifYeYxNwjiQum4cXbZRu77X6E2v5iqLkx96BoBDTfEyQoX8nTLurvAbDit1aVyiQ6wB3nbzhk5",
  "key24": "CzGjWUnpqxqJKCJMYNGdBFWtsdSFTJDzRmGZZ7GdxRps81NpBj6azVAVSxVBWKFCR7wzV78tgWQmysAhUx6ete8",
  "key25": "uM3EGmqirWucRiNxLyk83o6m89F1Vo8xnvKBoTF5kVkWprwEjvTsyLFALRzAaiA225UNAhLT9JjQ5nmG8wqmkDW",
  "key26": "t4sUvNXgcRWRdk2kyA6PEuuzHXYZ1FZ8njSKTQrNrmauWf515oP9n6wc2HrASEYwRNgAQvm2HU17Zbe4s2greNm",
  "key27": "2eYGkvEvWCRkD3WMToP8isbfXj4j9iqJSb8f8fvGgqBwUdiNFr6G6BfrJheMwXmqzEda7bZ6kFL4AbGFrpw3vPem",
  "key28": "2FngG4V1SATXAUDBaJMNzoThBKHzBTAdrimVeAYWVJPoUEAfhe6EsZJDRXVYjNvYi7j5a27jPWWUQL5yDLJYtBbf",
  "key29": "2qcPFQH5TM9cyNetvJ5qjLve1cnAF18pdnWZ75HWn9UdvSR1TZQ7kfRfSXr5YquqGgrnEbZr2VMiaT1ouxy3PYi8",
  "key30": "2nf81sjbwDd7MiKQTicpvV2K2VZC5ibPn2ZYsqhCmDrFX4GesjKq3M7CiGsF4SRTuvNsS9Dk5ziD3Lw4DzTFrHZ1",
  "key31": "4wCAuoruv6epK4Aw2TESG8S1KEzoj25PUgrjjQsmxn16kwNwJbjT3sbU8JcxkNmRhyemxU9vqzaip34o1Ug5AonQ",
  "key32": "MtNKKVrwHdMBTCL7eSvKSPX5wP7xqMoLrQhKepwvhuztT8UraEd5B8oNJzdGEUSN3mQXLSEXJsx43cUfDpqu3Fj",
  "key33": "5sQFbwkXo5dvzhskTxJPiM3h8Uzn17KzmYCSifkCoqUbqDxfx1xdkBBXTDhaf5744FzEB6Y6pYSRdEadEwDwAPH7",
  "key34": "58EkaN9LgRrAGMc8jn8Ku5skkLfUMHUNWGneeaedBjggzYCpH5nM3QnWYRxPcZ5rCag5eZjn8ZJbt1m43zDtLpjo",
  "key35": "2RZf6pR38cNKXeaW1Fh6ZSwXo7wPvKQHyWpy3VkxK61cBmcXsX985b93ZWV6cgFHQGpRSpeSXh4c8FfsnBHFxarL",
  "key36": "2KvEUg5wN2CkCdU3LqyVqhHTCwnMFrbVTaP688JV8jmope5vXwd4MsQDVyxhSzLsqHU9JWN6X8mzXFbWj7SAfcYN",
  "key37": "3H1C9JVfbeWBCRbegkAZrj4yMDSJvMGUUKCpDhwFrBTm8QnfaCHkkNrHRNSrBvb6j6iHnxkULc2eFb3mcVKusJpB",
  "key38": "pN7PnQjpPXLEdApep9Q9fAHBAV25AWTFtiFg1ffCwyELtsMupGvC7vsggsPyqTB36oHGnaL8qPtrmHsEK3dKvRG",
  "key39": "2pwjpndNyVUooZFeFSkJvdwKmpR6XD69U9jgt5KtmEsqiMPewK5Ld14m5LBuJszDk8vSs5A8kDT7i4z5Gp7zM84r"
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
