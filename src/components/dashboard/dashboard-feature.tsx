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
    "4qU6b6FLFyugBCrssNgUA796CvHfhed8VpmZ7qB8dMujg2LdeKLaBb2AHGd2GEkLh9k1YLyRbkhD6geXF7gqvZ5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nMbPKU4u9SX9mT5tyKqHw9k3ftWaosEpQYvJadH3Ak7GskRWazRQ7CRWKyFCHdJoFffuTmKj9HmpNvagc1L33we",
  "key1": "2dhAPPULfmwy5k3hLCEJVBdrdvZwVJwtsNi1dHuwFSDQ3x81ozFGSwgaJjSyJSAr3qQk5kanFfUt4Y2RymJP9mF3",
  "key2": "4EyRkxLZxbmf41RtgqogS3ecQrK9xdzcUVejPr6CNkt7XVR7S7td7CYKjcCwQCiqvkqUbi5bdea8AxF8fmJyAvnF",
  "key3": "5VyUbFXi4XAvChWx7wCMnYJrABQ1FcVWXFiHJDSegwyahQ9MddKuqgcqaC2hv7gk5TXg9g84KJa15WW2CUC83o6P",
  "key4": "2V2UgFGQnTMy381EetwXwtLwV1q5MdLWSytzMF47s9Zt3ZhpiFfvsXxvpNGecjeaVXaQiMpea8igG4QWwQERDe9m",
  "key5": "4BnVPMC6E7UeKnKPnZtNAbumYJYQMrhPamLYJZABxxtw1Lxdyfs1uUY92MN6cDpNxud254UPbsd6uz7wQnvhhSRP",
  "key6": "xBYMT1TTq4UUb8vMVuGbtahbMJUHF9Fz6d7EQciEAvkRk9emfjWUrYg6jMxC4PwVjjhzX2kegNRqNxq2sC42UVk",
  "key7": "63bM7PZTqgkxSWsmCuvkKuyyMdSJLQ4wVLx1yzTpmH4VERwjbFdcrKSt4DDbR5f6pU3WButWzoSF49HnwfCVLSB1",
  "key8": "7v9QYE5EyeoFCtWFpoWYSbaoiqmCzMs9pJ6uJgw7d42zxNeXnZmVZBsaVpGWBegPK7HCaCRvavH1iaKLV3Pm6Rw",
  "key9": "4aPC2YWN2WT54CmmiSgU7p4At2VzjJw8V6gjpmYseJqFCmDipxqHXyiJH45LHRtCg4bFShXNCiUZLThprgzVzzb6",
  "key10": "4isY55KT3yYA1nZDfQkuQZEumYEmmvbPwKpW23Mpr2hkU7XpEYabv9LDam43qF8qHZBuJC5ZzgjkbvLgd5WVsisW",
  "key11": "271ihTkqYS36VUCjqnoxaPt3DKXp99Dr2mev5ziUfTD5JyXoJtcZksYKDUHST1edXyfExhN1KMAr8WQH8Z9bX3aL",
  "key12": "2xY5zERCnwJ2oqUfxi6R5FaYKJfsN3nTmfA65tKzbTpRrfPoCVPUGYrid4CXjQTGEbNCwGf5mwUCZzmZBPFC4V29",
  "key13": "4HKjGgnwfrRsofRFzEd9o5pFXuLWmp17pVo4cu5tuM6ApxXt4VaurJw3abrK8jZFG4d425yWERQgqgSAMBpTWkfv",
  "key14": "2D87oJT8JT9RHEnsd5VDKgGCjxF6Ww5SfS1tLpj29YsepTFpaX2bZfJuL47f99dn4cstzQNaAXodKB8qcRQPgTUW",
  "key15": "3H9abS2pGZukMYhkjjZG9XkyVvyNMvwfJxf9LE3j2u4D45n9tWn5YT3t5cGJiKUgz2r7UsCDcs5KFGKdEUnmbD7g",
  "key16": "2VMQED36FP7pBmzdRjcbwE4zug3SgvJL5HW66F8LgCHsQ3iREdgk6cQYqFKj5n9agpPwNLqZpWNB1eHLmWC6kNHp",
  "key17": "vnGT4adrHt5owQnau1Lo9DeSrK4UnLVhaqsZgdk6SnppsFv6tNJKPE6uxcvU745EQdrhMP4LFjjEBdVTpwUVzzV",
  "key18": "5AqDHHGymEaRMz7Pw8VVC5e15sPjZDTCgvkDqEkYMGuXoRbeXFwG9msPSqPWG6VWjKpLzMnd3suqgq5JKq5tFhKB",
  "key19": "5XDHx1Ge1mYgozq78qxUAccmu3ST4KfSBwbtCRcbP3jh32dA2Sq6YTRdDAm61RgsTyGGprbS56gAquAahx2efidS",
  "key20": "2jYWh9nkMEMwKnC7WNuSYja4Xh991t37wgUh3LeEsX8DUyTUGimseQfeXyzNFZ8ACreaKoCFpW5yEnmTXz4mJVcx",
  "key21": "43AZButo2SAv473Z5QFDenwCJiAEn9zeGMxrVgwDCq7zvwXa8DQ6Z5v8HuJ7kdQPMaxwEnJedgqLbWaTSj1CGR5k",
  "key22": "5tvksKfo7SPBhCQTT3hBPf4UHdaHZrYhF2cKFRkqhcf3h1guzzGC15EWV9eVYwR9QDHw2XYcH5wbiPxGTv7t244e",
  "key23": "5Fft2uJ4EbUxDEHim7XvusJ9V3bzKJY1o4vq3qeosejoF25GU5r8NuAKfZJsgPX9scLVKJUNoVfheJejmRokcKKz",
  "key24": "66puU7ktJCRHHGHsx4pq6scPpJSqgaUBqXHcxtkyfC5UHpu9PaBToB5A9jSbmWEKJ2s71xdHxayLTdMWJdofoPgb",
  "key25": "9Akow2ffhfY19r9aAXxBDK5eDnjRMzWA9WoeGD9V11Wc9GgZPvDYHLv2harWmNkQzxHjNHBcbvfJ35v1jQ11RpP",
  "key26": "3i8vBZ64jqAyrUsMnRBaGfRWfy7dY7Z2KkureNMA72KjE3yC9hMGkLwxGm5dovsf3L8NVfvZBZuhNi7WgT3Xb1Xb",
  "key27": "5NHjR3c3UKrnsFZsemwM3t8BuQuaQj14H8E4TYSYAt82MWTYfco5PK3QoCtvv7ffNcMkD6Z12xvFwJcghGE2g7Hy",
  "key28": "2YuyvBpQ3QMJ7hAnxpaAGK5UHg1jCbvEEKNENaLVqV6AvdwpehjHRnEBPDDtaDyf3aLddakSmWy2iWgxrjjbHciL",
  "key29": "4ByBXR63q7DLN3D4u4wdyv1ZLPfyLgrUw4omV773dvTprcNV2QiDHHR3X7Q1zWqj8zVMbiaKF7KZ6wQqXA33Md9C",
  "key30": "2BdM4e1Z6HbwFTPqe4DJreoVNnp5okE1qPx42qV3TQXN2BfzYwryMRpWyYz16CfWU5kHkBwzqTQpwnVSeieDV68v",
  "key31": "39HFKfEM8JS7CTNedTihRoecpyeXxMQhX31W1iQRkDDu29phx6LXZLD3PzAAUKrfDrgwu77zg4GXuWPoBnXEmYpE"
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
