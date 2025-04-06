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
    "wNHUnzdrEHqKFrkoipsv6HJzxqhkbg8V1ro1QDTRGqEo1QZQB4vMe2BPB8JqrxKkz3jiM3F8tsGeTTjABbw93sk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QkAdc9gbE4TpH24A6cEuxWqNBdp6z3fmGxyoJqkmjU1jD6Cq5EXwPPvkyUKoNKTnrp7TTMPsBuWQaKDgSQ2Q2n",
  "key1": "38kfKQJNjXuPjQc9yQEGQf3AF1boaYkhi1C4kgf4rxX9bfvAP1nwdo8EaaDCTJ2SgSazAv39f4Rvzta5oD32j2Gb",
  "key2": "5jPEMzBmW8Hp9rvkab3wodN9VgYJK67VMEChgfUJqbGFgdR9V7eV2ZwiyVwwZ4ZMmcuAarb7kBpEjfeaY6rfy8gV",
  "key3": "2bXyUoGnCNPZ4dUm4tvo5mAoMuqE8gAF25LJiuuxB68JA5tGvudKc2bBmk8dnEC4wob7ZK9wZuaHy8cHra3gBmSs",
  "key4": "3BdVsxJAH7rco2q1nVRUbiQrsNNErsi2gaJwehKwwJoKKhpj47N84QUTCHrswR1WzLXXXPGWavnaPa9AZJiC1Y7J",
  "key5": "127HQL8cTZzy7sNVH55H6i5fUJUW95G92rzGF3JUKRM9MfJFcfcnC6PtehZEmmHn8FMGbAt29R2hP5TBZz3hP4Es",
  "key6": "4yzFfFtarPsyiBn5DHsFtWPgysSrdjqgc1t3s3J8KWYtni8bjL45ZGFpvzxZT8juXzyjMq6hhz5eSb13CLgaeo4P",
  "key7": "3MQyVRTQwz4Fs4oiJb8qvFtZADEdYbUHE7XRcPwovk1i32j4Rodm6veAutgJyiwPC4b2xkbtHJ8StPTMWpMoZJpo",
  "key8": "5DCQoFLr7DUGF4qqrJbXEvtMWaD5YkY7DGPGE2gXpbqp5V7qADLM99y6xhuQaF4u35WgnGEeeJkPaEP5JX3gCdT9",
  "key9": "2ANHjwEBhkKXwKFqTAGbjwy4x6zxENi4FJYyixwW1YAuMvqTUBJ1i34A2ssLW5sjyFCxwwvYBQcaQpiMWpHdWcCV",
  "key10": "3Zx2T2Eo1vg4fykhcn2DvyZsiRWobNPGv3MwRfLtWJvrTUjXW2cQCjXdUnDxaVTw5FfKV2ChRfSaBu9Wt5D7QKUP",
  "key11": "2uRDuAxrmntx69JtNHNEqBpXUHjDdiqYxnKU4UaMU8gpT6EcrZPNoz1v4zSRABvwLD9emSgDBqh4HHPkCi9enFrj",
  "key12": "2qqm1rYtexiT4p7TsPvwSk6aSUjUk1nhj1WUGJW55Q2fxKHZ84hQsfZXvtKoY9Git5TbMsdkphThSPUyU9vfoN12",
  "key13": "4pkQtqP32BEawgtVdp9iZZoAkVbrDskZhK95CwqbM56kGM1EQ1aY5mQ3nJpoLqC39hDCUBjqE4i9papboEHonMuB",
  "key14": "4jN71vKSPxQh7RT8JcFJjMY4PpyFBXqjeqA1GDg9dMd9x5JNZfW5hHqn6Vx5y5MPJdgiNmvbX3hxNkC1zhucbUYq",
  "key15": "4an7yR1AqvbGFemp18CkqyyU1bB9K9cTUPZsbfSfkKGSbeCSNR5f7Zc24udVTbbBkmzeca6SJAFpHCzy6DHqNQ1F",
  "key16": "2WhsjL8mm4KSXNVxjULxvAZ5GrFfwCKvtFPU24Uw5PW1mFVdy9YfR6LD8mJgQ91eqA5d3J2z16GZKUrN6e3VoeNQ",
  "key17": "yfKiwVv2kn5poZpSV4jc6Fw31WjNwA36zSMwuA44CwZM5Ep8GrnxPADppDCbMycgUWdV8WKBKqVxJ4JXfCDcrKe",
  "key18": "uaGrC4jZYStZbgsDdWULkLqyZEapBfNL4uDEZEKpRNKxCSZxTNPBU7sSRHD8JpVx7diAyW2H1CzsYMJacTYrjP5",
  "key19": "4hMgBQVdokkDyewyBRYXmtvfuVmA2Wrrz3GtsUrcN39TYvtc43PwJMqSTPE5e3S8dY5RXnknV54DMx3DgNonjDo3",
  "key20": "5SEsZJF3MtFHhGkrVGqu1GG6UqLcSoH6Z8GJdkGPrqhQjVZKkKiNnrfUbZqdej82SdU64d1XZtARfapT2vXTQDWR",
  "key21": "33Bo93FfKjZCmw5bBc334vFeTit189EGef2QGhuDSp587YunAR3ZK2iki72tFQFRwyMsVFbddBJkNS6p7LvqxzjT",
  "key22": "2obfMU3sAw56YiHJGpUgbYfZedYVW6hwL63NMaLENzEvJ68nwLFUcj8GpUGKNSTU2Ef31ZLpCUFBu9fcTxYN24Mz",
  "key23": "vBUQGf9N5XXTQUfszgruPhHxjSU4XekKcWQcVWsRjnrvKxoWJr8grhzBnyvVTPNwPBLMSsPnJDcDUTxhucR4Us4",
  "key24": "58yckWKPhp7Qjck7o9xDNK1MNiYrtfusrh1G8uumKNd1T271AFo6wL42XPoyWeXaU4LimWhq9gy7bsWuzosvUDhL",
  "key25": "87KApnyUCxKh4LG6k6op42xMkcwQXBqdELpwarAsehzW5BR6s8YxaYDQ92eKkbC1TjofK9uDtVZYw8VWQQCNxBp",
  "key26": "2XofbG8v6aQoCVKdKnPBDLHXd6Gy4pmQK239H3PEKtx1mEmiakS8tFGw6cFr9Tvz9wFrVZv6Ga2CFpHHZdFG4zxc",
  "key27": "2Yxu4ryzNfxPw8oagoZuKxgWbHuNxRtT6aXF9r2EUaUxGNrXEpSubkQnBjnZEk6o4WR3ih6rPpEjdGE6QGpywq8b",
  "key28": "5gqvZjMrHyKaAonN9rCDx8VUKEfhhm2ukMU4FDuE16byf925A2xzas57SL9GfcizHLuB8G9xJrYEBjB56oQzFPjx"
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
