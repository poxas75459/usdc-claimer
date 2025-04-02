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
    "4Wgq6FiuLY93mbn6Z3yaX9CE9rfqwxvDXn7QN5jP9Fwid6au3rpFGr6y2XnBvYYoHhE29KcPnKgJnJc3UGWTJg1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wk3236iyqLdaaJs47drgTmFGs6WKmT2Fnzj1HQVobZdMQf4BQXjnynKJSqxoawhymRFAFDCuUkCNA8koSw9Ehq2",
  "key1": "7zF2imYrMxiVxcs1MqAjceXCGJnZgtArvqCyjpJcPHAc18Bt6HLR8YKamv3t3wNGUVUHuFJftpN3JE27LGkfkSC",
  "key2": "5WyTErffYcCUA2wQHUrqUxVMwvMPaWfuv2xeNQd4NWgJf6w66q9SMCzcybbV2QFhPg1v5SdNjyrJGKWogAb98zeK",
  "key3": "jr5yRmi2VxWzcvn36Djk1TCfSHAW2JaDSqxApSMCxcHkUpRj4X7n3qST9zmECeKY2mGUVf4mQPkDyJqYMbX1BNW",
  "key4": "5znpmFi2narUSbQaD8sQPjUjg2guiMCQn9osR746Q7ttxx4rWnrMo1xrEGfXmqHkX6jmtNHnoXQHyDMDYEqXcV2e",
  "key5": "2tubGWHgKt66zMyu4o6d53ph3CDnNyJGjGJGuVgUY1ghBHz7ukvfBg9A3kQnbn2758sMySYa9KBKaT79WzvJ7wD8",
  "key6": "2p6xBuofdNJxHgb1R4D4DPqx4nYS6iyepKZ5eP1WqmXatB7P9mTG8VhkxVxkzjk1dYDNRMoTfb5i9jF4yMuo2uaj",
  "key7": "HtywabuVThoHYjrL6XkYiop8cMVwPg741o5TpCExx9LPUKnSuHvmHR63My7UH8bZZY6fg7eZQzVSZPWWCqBUdh1",
  "key8": "2BK9V1QSkxfxPfJyxoi3W4fiwVgeJCLHPYcowm9JqMvPy4qyTZvW9t28RW22zSMJ8xoaAPCL6iPLWHxVKY3osCy3",
  "key9": "Hn8YdFfcVqa3AgX3i5u98kCCFvxM69dK26YeoMvu7khk6JhFE4Q5ePwma81d8E8UZJea2epkXnT1HDuhpxovXPw",
  "key10": "2oK4XJ9n7p83tTzHXMs52skD4g7V4X1rULxdQpZxkR471akSvQQwhnRXC9xHdfCsveEhSy395GvnaZcSGQAbJoec",
  "key11": "3FTAR1Q3rqo3eegAApfov4fS5cxur8QoCP6ggHv2W2HW8XbRG3yfF4AEXVqsPX9stj6N2xW8TLmVxVPyntrfaQXZ",
  "key12": "4arqF21KuKaaUhpGReYeqWUPHaEKWwjdNFhm9XgRFk2TaAfXQb7nLhDXzKD3Xwbkjb8JG3eCbJfA6PphSTheJaRg",
  "key13": "Rjo3LYCGxDKoueWatWzmTXzXYfniodZ4VKk7dCx6kUst7EfmLhwR2DwnSYmZ3D2CSiZWQ2bVVchniFMXgNffX2J",
  "key14": "5AErQ9dMPNLxoF9XcVZobkMoB7E2UY2jvN3nSe2xr3mLVT4MdQVTmstXPVfETLDgUA6DaMMT15JgWyZeiRC4bk86",
  "key15": "33APYhKHphvCWhyVrfs1YzJb32eBTCcenXg73qqtApmeGfndyq3mcVZXDwEqQ5i68N4YHYSYJkiKCUaYWc6916dU",
  "key16": "4ADAEfZbEPRSHHSVSESd5ARdbAU12uLJ9RHR4qjo5SJCLoCtVLLZxCher6rEqr1DSCTshFeTharm5ZaXh5CkU1we",
  "key17": "5ZA9denmxgiuDd99oNGSMCXp4RgXbH8jBCciVFnaH6eQ6GjAWnkwXvXQ75qFu4Wi52CmnTvuRcVw41xyJTGiihN1",
  "key18": "4ZRqrw229DmGDsuhaArfQM7sQbx55gGt2Jyd6MeNihvbfchs1RoDaPv7iNdPPXtMpFE9iTyhX46T9N1qwenrvuNv",
  "key19": "2DqigRHuGRhZLQ16JQ3HAZ3KWoJ95YV7tZcXU8deMLCjrqvfhzfnHampA2YZjJBV1KdL8aY5dmo63iftoRBfFPLY",
  "key20": "5hiCm8QmpcWTuRqLVThrka4d9qmyzZ8EV6BqU2J5nZsz9yAiWcDnMfWsTE8TWn62ukSZ2aJYcGQBnjbZ1sneW6df",
  "key21": "2CZzh4cjQ3vk5aff3jGF3YAfMixhgnHAQpQ892996YHNNodeNQTZbRknyMQjLGGZDyB8LiCNpRGFXVm9RZ9PwBWX",
  "key22": "2Z8AdukBVmkbwtrdob3Pr5UFoqzwpEiamxJvMx9nEcinQVRCtYLn3KhcJvGKuAmkQT1ucXW5GHnzK6Lhg7KqDJm3",
  "key23": "5aKLuEmj4X4tNSMhJ8t3zBaxsBZaWF9SBiJJZegjG2E5hG3LFEBJ7LvUTWDxc7nKHNrX535F6JtK55XiYbR547jF",
  "key24": "4KA34gxPWmcth6TT212pVuNjrVDqWpkMxsiBNVZVTyTQHYcwmcZi2E2XKxfH8nrSge9p951tyPwHtydKY1GnegXP",
  "key25": "cWwgB9j3QrxUonoC5REwxmkHxfDXn5WCB9k36gEVQYL3C6LDSUy6pfZkX4aKLfKqC8mAuBFsMjVCmBxyXs5F4vV",
  "key26": "5FqxpxRzdDWqTDkJ1eexE5q5ZueeAprGejX2Rt5UUf2KwouuBuRExfmNWDKAGGaYqBQ2ymCv4R8WRzyb96PKpha9",
  "key27": "5k58LxYwtRXZXWnh8gjYsTRD8RP8AjhRFGQGGkcxcHS8EtAnFXYQrnDjXY3X6dU4Zg9pq2Sz9h9KAHaF5amz4j7f",
  "key28": "3t5WVt9tsrUKL9zD1TP5XyGEKMHoq3WqD4FvqmToRrFjrhXyjUufhJeR8CwBuTyAJQgUct5Jo1HyVCP5Jk1cjukv",
  "key29": "4ZiYkrFXzXeqEi3GTjBoScFRJ58YCtdS1QPn8sVwUorLvSgRohZrVC8zRpoRKyLqkA8HTxHUhdEAT4zp79DyaW9F",
  "key30": "4TEmAYknGgGu1zo2o2WMbQLMJfnWftrbekTxDXfmHghiaS8WLNCygno78vRYJmuqMrvXN8Ya2HDGNzYstXuFwUnq",
  "key31": "3wtK4iHRMy9Ec2R2d89AbQWFfAugttNLfihCuu45JrdkfxCCaWfCJmthh8JCoTdjYTZ9Ld4Jeo9m4E5Qmh28tptc",
  "key32": "3YLb89NA9ujmfv3NWZN9X9R8detiirLQ8azepLAmPqidQQ9uZUzW3wnFSmG9GjCw61qL59568rWxwbwSDx8fHm9n",
  "key33": "2oM2pPYVPMgu3VCjFZG2o8eaogtP8LQMp7N58CEDL9VBTifKEXhsqcCFsjy4aCrkHt32cn7Cc78KK1zyQdxRQaBf",
  "key34": "65CJraQDLSSgb8gtXxD3Wx9oBw83bU1i57wKTpfuuGLtvAXjA1DwMETQNisE5oyezLYV5wD89fgTFvwoQrHXRBAR",
  "key35": "2AHZ7o5mcYQmBmizqkV6GCsUBWPn5nFKgtSnpuimfg7m4J3484F9iZD45EuU7LThY1T12Udxu9CqY6H2jVkbexZt",
  "key36": "53kkA7v3yafUXgGYMYrF8PLw2dsK9PVCS6269KSBgvYfs9vSEQMg4LFboyLo4qGvHwDJJWzXwpcgi6hCcdLUw19X",
  "key37": "FNk9f74a6QuRVUfYnFUktFrxEzRoaFVHDcuVngrYC4vA48WQNeszft1VPrFKQvHfCQfhXuCqQQgej3gfJZQ2Ryr",
  "key38": "JGgyx1wpnFvNnzCZ7ntFs7UB92x9QJ1p7L4Cb3iCsi9VMMoqsATXCN3HKyhbUKTZE9TPBkvKwQzeNNSYxoZZdXJ"
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
