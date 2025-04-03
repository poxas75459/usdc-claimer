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
    "2DweqFZ6hUoAhCauewz6s5McTLNLi4JC94zCKXCYQFLPGJe8c6PEdgMM6inpNneBEKxNFxsSh7ThbBVNsCwCBpzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53W9xKqJdPU1L4tJfUnZv76zeQshXubz5QUzyJZb76RYb6BczzK6syysTVD7U7vGD64zefN6kE1SGZRtnCtv9iJH",
  "key1": "k9ntwoKzsreroHKFr7MzA51Ao59Rv3XtAGnxzdTHdtTVPwRKB3zNJstNYQ6PMaTwLFB9DKFxvUHu7yxUzWtKS5Q",
  "key2": "4FnehS26Xf9eC2CNT1svcnuNEv5Af2yCdRbMgxfSiATFACjPRG1ymhcHUindaVabbXP9ksjuzW1vaAzLqq8rM5o6",
  "key3": "4yRjQfu3cPNFrAEfi2vEQr2LYnTQttzYt91WixqBwFoHntTavxLsNicmc4f2CPiZGkYU44pmLNk8qHN47xdkHvMn",
  "key4": "2gVVUMSi2ganeAvZpvrd8Es1zt4Zb9LDL4xH26i1QxeUSfqSXJMLN85dWTqeoSrLvgVdy3xYdqwBhcLB8ZqbM4aK",
  "key5": "4CW5YCjj1AxqeiFEyd8oMFBkQdc3dbtj9DPSd3QRRCStnZ4yyPLDgVkkxXFzYy74b7ZcLmXnsk1Leur5mtf2w4Vm",
  "key6": "Kj45YfQhEXpStATptLP5CcN6h3Qa5H6jKNBQv9MueqRvrUY9djrAjTmFNKuKgoyhSs6WrYNhSFxt46vZJiv1VHV",
  "key7": "5H3JzMPuyAzre8kctTAEDrgf6QDLvN6PGT5DvhNE9tFCkroNu3aYypN2MCnn7XY49cFBLgJ3CY4QTptqjxKcJy96",
  "key8": "2XHxRMSBjQMAdh1HYdqhj9pqpYJUXLcXaZr1LkykfxcQoKfdAQXji9sHLViFcWnGMLpg1BGbAHcCcFmMeRcAQ2TR",
  "key9": "5QZzJJrw7a27tcMsaWr87b6o8WDj1wAStjpJNa7nsyyKsP5TzgwnDSemhqbpNhBf8qUDX3KAnnJ2TNC4fJPSmHXA",
  "key10": "GiaQXha5PAepyiiz2QH5uD9DufrYeNnjHbDPi5dr3LLRBKTZTDyf33BURuuFSP6H5n2rJtGpeZD4xqpb9zcMKHC",
  "key11": "3R8DMsBMX4GnEVRfcmwTNSRUjZ34beikK2esF849TJBWSnMYkWokFuLDSvp7Rj6WQooJcCoNcYA2VWpe4tNLEZv1",
  "key12": "4ZqSmS1UUemTL2dEaeo9FEzAaDvgY8xEv4AmH6e923MqVvCL3ajqoLomZKRZmjxkHKLuNN2UYNmFJZkbExmqBs4H",
  "key13": "65g3xq295ogEKc7HAgW5FLaCjpZrS4rzHqp2p8GbPbNa9wgQuYjh8KY6Up6KUcRtwyuJCdEgU1GFVSSWUq1Qk26N",
  "key14": "4SGTQ6ZVzhAehh8Usq5FonCV1tHNQHc8ZEyNnDGveYh22fdgrNCAKBN8iizpbskwZPoNiA3S526vwPc7mGogqKZ9",
  "key15": "3bUDDTnUYKLno66wvhtPtW7g7d8SmDcQeLeZyLhnVdzdtrsLkrA4GQQuCzNc4vkxnVTaBugCyQpTBnwZuUxZK3oD",
  "key16": "48npZzNA2cS2kr3t3zmc6kA2gAcrd9JAtKfwWbSurUG5Ve4rv9NNFGWUuXQ9GnEWR5VNgjbNAcS3Bjd5h8CSqDfb",
  "key17": "4DDvUFirBkAM9j5ZsrPiBkudZVR5vhFGRt88kE1Jz5PgnjjLhuifFzv3UG5ksLRDzbjB1BsjMqvJ3GSf91DCypdC",
  "key18": "3uVsSLxWroVcNubAwdzA2KTYDASvMiEXTA9FJPxfNtb3PQwaJnsgxtnaX8KMpASFuWw416tkDPCkKvJQF7BnufCP",
  "key19": "5bU4QWAfw4ZdC4XtnutX8SyF5GXcVhrDyMyqiwJepVWwtH9JgJ87gAZvbp1TrKQUFfYFJUckMhqDLDCeMu8t3iXf",
  "key20": "3Wr7mSdHoi1uYFexU54z2MFZcTD7zmo1xvqZpu3o1PbwALazwN1bRjtTufB3nD6SAhG9hTHawkadfxLCCNebXVJN",
  "key21": "45W86x1erGXpnb8uE3EMoDSjB2q4j2MiCgyUrSBhhrgGRaByQk2eRka8ThtBBmt4Lv3dvF3of5AQu6baFnnzzBbk",
  "key22": "2GNqk7vf8Ey29qeGSnoapos7UNDzD3uNbP3thJm8Kxa47LSTqn5d3F9EFgQNpDexvrEFkAQKnC9LZ1pjgr1jadTa",
  "key23": "5RYy5Z13zCfNr1PGJcqNzgk4g3EtwsJZqsVBM3CmNWjexLF8SHRFeKFKELTXioFFvsJqdtQJY4euZjVxRqAJKuSi",
  "key24": "4QNvtzcuyKnDH5c5vfHaegDNntP3agKwgYwreDdRfzSZQPiC8PL4yq9Mj6MTuTEnef1ZtfNqaT2SxQVakRS6Cxgc",
  "key25": "d8QPcpvxwgMY1N6fMycvsRxUcKFE5vWMTkXHrh7w31Dxr1pH6PMnVxE9FEqXmynq32q9B3s7EKNzkio5NjDdckb",
  "key26": "3RXCMpiNy8bDK6z4aBB2fa3PKgFVW3E5mVUeay5KKgtjL4roooQVvqojLZ9r7Ja8btfeS7fGabRguDxPPUsDRdw3",
  "key27": "2hQu2pmQtPh2gdX25xXaLMPSYJQqpCDbByfbThQjeUcWWuUqPuHLUb8BDyhtsazkik5nBPaM6oiWoRYx2fRwjYsp",
  "key28": "46Jbnv9RdF4iCzZ53Z6n15yiV3Pnzs1b1H7FeBtNZUm48v5wRXdnt32PgeDhuW7bjR4DLtSCztV7Dcyb6JLat2FS",
  "key29": "58zFUePKtpXekDhHtgSEgoCodFEeerDDvmW5W6MGxKFnV3CQSg8VfMuP9YU48gTiGsf6x73E22MHzrJwvyCLsGej",
  "key30": "2tdpKkJs6kQ6ExjaPpk1vS55nK2KdySePXaXijPPo7rbjaTTt5sCLtUzv8hcGsVY7ARrwwT1VSwVVoknYwBcBFDc",
  "key31": "3GnzKBSCWWRqFGctZfWHUMDTaAq93tqhNp7oc6SJMwNhipjKHz6kWFRQqTCavW35cJrq3etXvy8XVCDgu9BY2zrf",
  "key32": "X363fXyqg2LzFKc7swvcHbiUFDojUp84ywm1PE658jHq8bcoHJMPLYuFHUqnJjnZyHN691MQanfCtUGcLRMNx8o",
  "key33": "3hCZ2rQ36b3qvPhwSdsRxH5yB9WLks75pJbiHP4XSamki3LDT8cDuQJsvLKsPhcXNCTQ5V6ijbEC9dje9ztC3878",
  "key34": "4aZoKsUtwpDLXzS1wqNBqRe6iTr1NDMvLkooKLDipiXvCTAWXJotCAqKw5dSc7bqzFCA7EYV8ZsY3j3SG941qewb",
  "key35": "578vuMq6uRYPZCcdjVVgoeh6WgekSUqBemtAduxHjbdxJjbvpHZSJHTEzX4LmvFhmRZSRJfAo7BcYNfAmMVvb3UG",
  "key36": "5TKKLyvdA1y8gT8H7chVadQ8nj9FN4CGzXf1CayEwUyj78hJMp8Hrm4tpt3heTvhSXyQWg1PYjkvMG6LKnNMNCAx",
  "key37": "osWSEry9vNdxNhQVxwautkm6E8q3Q1rMfJqmHD7fMDbp4NBdSPiap5dabopwJB6Y2jhK6FfA8KMdKuo5gm9GhLi",
  "key38": "51kgGCFVGiGy4GQA8rDeNqTw5VMf8cnkcL1E7ZkV9r4KdiHtSLSKcHwNtRmHunxq1JMzGTkhKTqCYwSpYdwKfiuD",
  "key39": "5Q6HTbXVfrNjmkmaALQ2boQPpadCxMaMyWhcyh63S6nPXW427B4mKPccksR8zFGgvvczFhfFQ8tQNBPjJsEtmKDF",
  "key40": "25VgwJ8cnt7rueT454jdhkVLVXBFcTgpT5ZnXHyigSWJnpeshqcQDtTeG3jpEtpBkfLE4G9TwsutMBHnHGtNo7Di",
  "key41": "5D7Ywe3Ub2atnNti4of5DgdXePhcZLdpCrvoAy7p5Z6tBFhLUdvZNxL4VDK5KBwxw9A46d2sqSdiSCos9258HomJ",
  "key42": "4sVRdAFHsRQ1UpuS1nL7nCvnLPSNoa7rY3CUwebnkmCwvPKVRChijiXiYvctE5dzZA9mtvPeMKV915i95mue1NrH",
  "key43": "2rBr6PApTomyhr5VdVuoKfoShVfbHHaf8vmLJKz36SaFEEYoTAzgLaxExTYz3Zs1BBSRrA4S68PyGrj7nV59AhDi",
  "key44": "4K4PREvDXwqyVak5yUcuBZ1AwsWm37LgMzDcSumZDdcigpXib9ADf6wsLz4KHkK5gRjw85ZvrGxuehLLPviEzPhj",
  "key45": "3j8wvHSEq2HHiAFkXCWvcpEzD9CxHjdLrwXKeBg4AifCVjRNBPmPFQCVf2KXYzLXjhLWnRNJzWEYFeu2VzirpYxQ"
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
