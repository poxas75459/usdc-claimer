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
    "5114cmP95e9popABv1JYiHd8hNUXaPySQ4ckpkURhoMydNSx3zZ43thScA9q6GSsLap11hSN9HkdnD2xFP1HmHrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNewSQ3FWGLkjRvi3Yx9QkVPDXm91MmRL4UYQvEADDfDQn4pzsSARUMzvXd4N9PxUJkMxhna4SaHL4Am4FCDfdH",
  "key1": "mKuFqTHgr91HUuW8rJiaX3XUWG6p5soLM8K7BffQ9YbHwvv97iqXceoh3xwhJr5jo3foSKmnRd7RMLwzWrbAsbL",
  "key2": "3qjgXESttmRspAgmRUZaUyRxrPG9y272KGWNg6phH2vFddTFdoDmA5Cmihh1Wbwozh5YB3tsprhYxdDNzYfh6ofh",
  "key3": "2cr5LBayUgRNrgwwhMsFa5FoMenvsy9NHC71RPNTkxGBiXnymwP7hvu4PxmoDprZfYxGEuw9FudnrvyWBhV6VjoN",
  "key4": "YWHxSHraHnCUSbRaWShgydKifBbceHvLSB2589gF9VxSZdy7zXEM3YRP5UPxgY95D63BpezHUPnTVZ8DWa5S2Nb",
  "key5": "pJ1FGugThS9z4vZ33dSEoWPVdYgKWM7bbMJ92UoPxe5TWyMrmzL6FuYbU2wVdoDM7C13XKRz8whTg4ovLi7oivM",
  "key6": "2G46YALg4GG52Yvf6FbZzWP1UE4hCwNWPXXiehAu2kHKzCLmgAKzgV8ByHuevdUdsKKtyYstEufxWVr8tK8PJL5h",
  "key7": "2Hc6uWXy4ou83my4o41mtmoNqZvTC3T6YFT8ihYcKPjoXzSizZDPWnmWRGTW85wWsoNoMfzk5QrP1k8GLZsEeDG2",
  "key8": "2LVPwX7jQrRCGsgzc2cJoSrB49V8LP1DC4Q9xES959CuQeNojc3PWbuXKqPBFEiG64y6c3ZoL66U8SjFs7KYyfwA",
  "key9": "g1YfKgu7dP84abNZbuc2EmcGkkKrc9SmVryVUd6KRTteWReGqqPLtaxPMjRsNK11tnnVrvS6h9HmknfRKrGgbs7",
  "key10": "32sNs9xQRvwZcYeGhS82FA6kkViCkEeTvQJTBg6euZayPmWr7A18mxgFFwLYeGZwVhhAVp4PDs1WwiRv3nNCoFvz",
  "key11": "2ePkfqUjTE5Wzum8iR9Fimum5iJZA7XEFmdRgPow7FQjggz62D8BwCuXTZWTeK3fAXf48e4Ym7N8nCaPBc83FPgZ",
  "key12": "3Z3VR2inzdMAEGaE6ZLj9VWdhAAsyRy9bepAxpsbcRwra2VG47ZphoTipxJFaGjzpukRKTqchYZf1McMoyP4idXE",
  "key13": "StrrycDmEzUnZ1LbG9zDrYdbfMnAgXyajkQV3Hi7PCzfBQERJw81ZvqMhBq4SNqk9U6K26JX3nnCJoKCr7JoVCn",
  "key14": "2octWQvGU9fZcbCpkzZsRvWJH2zPJi1SYTY3J9CMEgXgr6crtc7DvuczdUK9swu4LqDKzqCnsnSDojvTzd8TPXnu",
  "key15": "3e6mffo5xPQEerk4HqkXEu5aAWZP1w1R4QwbLPgs3tkjCuK2cRv7MQvj1e5sB8L7DEZwhv3uhGC5EtSPU2qjP9xJ",
  "key16": "4D9SSGgmd6KVK2o11FgTBa3YsFxifm4iSgcZRypSpDMR1APQciXBj5otz4dy5JDWq7rsQZ8BDnxcVTCPLanFv6z1",
  "key17": "2xUzMhcZ1ffgHtrUgwLSRKFACDdo8K3eihcLYGifPqbCRNjQUEau1TtbM5fNdqm9ywVHorsMGvcPp9t1PbXvXka9",
  "key18": "u4UHQhZ7cXbq4FQW5A9nDaM4mpwHjF9v9ACq334exsLbwitLGJ5ctBz4naTguaNNHkDuyoie9icuFDz4h2YPgdf",
  "key19": "4F7YfUQaRvpsYc1issjkUfNbzBusU8X7kt8VuF4uUGrddYpxwNxyfkpH3c2FC1Yjh2nE7qSr2vMUCQze42cfumQ3",
  "key20": "39menJDXmDLjYZFoHpAwsiw9x5ictvSpSTM4KraYXErPA7wBoj94MCiwvRKSoazL1dyEFo7RVqbdcyR95Unu93gW",
  "key21": "NT5goKN6vXj2DRkZDV7hKQSeG9nFmem1yE9DXHTuVo7okNX2Mwd68Gf5uRQwBLMCzJmsE1KTYWjK22XV6YuRf3W",
  "key22": "6poT3wLRjHfNtmXyP86mBhUUjxTNFQ2Gr4kJdq8kV225eBsNARGVGShxMmMDzncST6VP8wEyXHkszoGwhxrFa9C",
  "key23": "5HUojCmSujt7YE4niQPyAcRFJjfSMWNrmKkCijLTikpUbsUF66e7w4b2knDtUVEHvJq1iCyJN7XXszybb9GE9FY1",
  "key24": "22ZheoHuAo32DaAXYWs9hMrPGodxXpzp16maArNihYWXnafvszsv58PMpf5Gw99sed6DCuCEbN3tyzeUuWwnnCBU",
  "key25": "4LoDCPmMZieS2qT2hu7JkQJQbdLmsm93Mg4ngbwdeL5VatrSc9SG4uEA2EejEKm3J3n3ZfrNzvbq3DZnSEaMSbcA",
  "key26": "2YKuDSp3BZGoHvn9SmetuvysifjB2XKL26A3M3pXqprf4abTFvedFKL8LgvPWUU3rq6pYVgfQQjqn1gUiCjyuUqG",
  "key27": "4fPwpKoDkdz3w8tKNxL8m5wYaQ7jKUyM18BRG2vHDv47Kiipxc37j7S4dcd2K59Wfe7VgowSSZXhDa7eWaGGvBUD",
  "key28": "vNLR6Cchb62ho4CPHFZMvqD8PS2nRwu6VkxEcPtUPUW3p6yAF2Gc7U8zzyqnJR9peGExJ3fov2D7HBjZbSWWiDU",
  "key29": "4ZGT2NBoLCteSJgJBChMgFtLtZkTjRg3nAYU9CLH8maBcN1QcgQji2Vq4fj83pW96i4fyuQqpFaXKYkFXyt1P9C1",
  "key30": "3mLY2YCVmLhdZwLV79wnWjVFiYobam58gHDY7E9KY5ytGRj3a4EbsuuefqjwXAaDVtfzpMntPkv1ZcTpSTCqDvei",
  "key31": "Vdvi1qzM9btggb5Ga2vT7oFPrnSrwhYKXDMEb5111cAkWroxVRVsHt8Q2BFiYNrJLMfejTF2JDwRR2EZLuB4k5R",
  "key32": "4Jbutm3AxBcEThGJRmE67U9VAGbnrdkqtSWVMh8ozgZS72jWVhDA4iYxr8K7TTf2spwkd6hNEQn4LcrMNPCnSZci",
  "key33": "5MrCMwEGTRbZC9CKrZjTES58nMzxfWzy3RnqMTceZsRgtxgWNiEb1zAKG3sdy6FbXZUtRSGArA1gipvk4fPwe3kQ",
  "key34": "3RSwyYsnL3bceRqRBNbfXofg6HC4ERB25xFJC3Anf8KRSMVFHB1p2oYJCMwoqL1UXJahjXRA8MYJ5dK2bUVzQPAR",
  "key35": "4nLTgKWFk3VLL9dhBf3yZz3qsjpzYBCdics1gBAycQHJ18QLVmEabX1HPnukW4rp3G3anUDTuKMVA9AFPmxRz9Pw",
  "key36": "3mju6GqQJCMEpfULA6xmRiRvhbfDbYppWHi2DvzENNLbUY25ENz6e1yTXhgyWqvuETdjaYYLQHYinVr8t8YvNorJ",
  "key37": "8qqP44KNXP5WAedVGskT5WmpgDQJRhHHvTYNmvrBLbyoGDJcHbok116kMiLotySk6GKSjhwNVTj3YZxP1Byy9xN",
  "key38": "3Htf3J9cGezTpSqTEmU1GMUbXGHw6bmZLmH6GVnNiLpr3EU1gXcAujxSsVCYzGWr3bVfQBvEaRNSUnfqYtKXUbyN",
  "key39": "4kzjPDTH2hEF5QyfDd5EDkcYhhzjBQZea5eksjmNpuCdH3gvEYGSVqyWSEmyae4nqbFEiMSKGuCn21yXmxeaFmqJ"
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
