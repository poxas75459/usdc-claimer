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
    "24pHgR6W7vwBBzobgxuF4MzjE9Qn8aPK1wCKUF6E5nwMkuwCbt8VNcMqE7U6YsXjvXFtCFPs3AobbSnZKqNHi5KU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FtNoXzpKqLV8A3yGjMSnz911WhuERVPpMQQhgAfBPj7e6ePZnkHCqA2TzdZaN8zuf7HsiRHg4MPfJmk7e93z6EX",
  "key1": "3W2oho45hF9pEwCyY1EqpZAT9gPQxabDsCH6xMV2cUMZwwCQrjNtV3wu56XKqMmYj9gMRzDdQ3UFBVuqVtwqLGaE",
  "key2": "2AheAxh4CmKLzUW8JedmYf6guNyTncZcMPjVnLs2xTDHiHxiLPg81pxf1ywc5N1PDYHFCfsgWx9Vp1aHh5J4M7oX",
  "key3": "3mMEfRMoUmS6CuTTHNunHesgGNJqk9Fz3RZoo7gXhscDTDKySPkm5u9g7RMVWayuQ4NmVfzjgUXcTPa9GgmpHjEL",
  "key4": "h4L21PJfw7tzCd6XLnKcMLF398Ach2zwWzeeMs8q7Cv2dtYNFxzi5ASZ7Rg3LRsh9pnuhj6n2fL8ZGdMBnWzygh",
  "key5": "4iH8jf9Zjxw2K9WqAk7rkSZLpoieyK6PAAsdjeZZhj3BKC7F1aNChYttu6GDpy4qoq9oVQc9qjMZUbX9idK5WJiE",
  "key6": "3C8qPWFM5ubnLiG5HVtDK1iW1two69zsFXXdwiE6cTHdTpr5dGyWqekmuHUSnAmv9QHnT2Wvwx6KQk1nxBMiHYaD",
  "key7": "296pKdYHpLtDVLQBAtA4vcNQjp9TcLQHbA6zd3e3rRV5mGGS6Y2Kh2Q63x2pLxnLMU2DoS6Fq4csy3kpKZYhr2uT",
  "key8": "4LXT4oTykcLDbG16bDTbdCT3hshEgT9FrTxh7FTng55PAjG4hmpFnQCUmdxXbGjhzo5bvJmZjXihcCbdhoygeE55",
  "key9": "5JNbeP7pAJ9uSXqVJdwa4N9ZHre977Ph48g2KqUjo1X9xYbXmRdpz4u1gVqsxtE5F1Gbe1fQaEGncJn7W5UU4vp1",
  "key10": "xscjzmNcvrRHGEV5h1T3Bf2hiphFzHXEhjnRiPH9uxWNUwFzaJCZ7mp3SYKqyTYcdygX5E4N9wfzTozNHGUAtTQ",
  "key11": "5Ya7LkJFDBJSYXmtmapM8b4ur6EqjBp62n7Exd9FiCT2KNLJuAyMgXNyfmakLH9LjQUxJwXiuNLQhskBbrUm7Aci",
  "key12": "5Q9wmZGf6HkqkRFV1vPpjGhTC5JNVhE5Pmv2tHm5KeFmNxJNSyGcaaUQBeNVFS2eQQR9LGHFLh8g7rxLhmFHLAW5",
  "key13": "4wxCegsYCBfq6QsJK37ABtudH9Hn8WNAipMxt24wS8fqcvDsKJWUDkMca1HxjpiUcT3FX5bMvi4FitpaGowFpgH",
  "key14": "4dxh46F3DYa1Wo22wvXEfhDwMrESEEx8374iR1LbrTzMyaS76aKuNW8Dkc6CwTkjS9LFYi4A1h3vkg1g94796TKM",
  "key15": "nJ4x3bmgcTmsw3RDe77qKGWvq6J8wHE38ZxEAS4G45Lb9Q3eXDSBWbJrfgBTDvQQk4kgqwfuww9GEucVt92PN1Z",
  "key16": "17Zx7XgccQZAywmKFKN8Y6adGadzFxX3JdNy5GivZn2iX91JYAXTXaushqLbVsgZH3KEHn3EF1qbQRCStgcLhWu",
  "key17": "2EtMUoWB1XnGzQU6TPGeX1huxLy6S7VA1G6rupgsN7oQnSZG1CeaCagzx3GSUtGN6EgjbYV3hqoudSNMw4F7y9zZ",
  "key18": "5GrwxBPhMMbMaL4myN6aiWi8Xx8Vx7a8poibyAYGMpVtLJWvN7CXXqMQhBnWWYWw5dKZoB5WGZff3fiocNCARtfZ",
  "key19": "B7ssbkx8nqDrvWR7GD8dkTMvvWDdaUwQMPm3Qa48Lcz74b8H7KwzoTczKuEJL2MUv6WCbAW1FSENfJyf5CiwWjB",
  "key20": "fioAyGzonJjZJ4gdezJC8dSTzgswSTcDHwTwNiUpD4bT1JorfenscFBsscVHtPv9VAWhcFtaXeoRwiKKH3Gx5v6",
  "key21": "4DUNLhfQ1m5YxF6BnBtuRxxUxu5H9S4c9RuCAmc9X4seD7maB93BuabdBQGGxTnd3si4FyKs5u6eqAP3SUWjXWvR",
  "key22": "5TAhERf4mYxZd1BPmuyeaGKS9Pu6TFJXsrtZAffNAkYCjcPn8vj4aYAxfk82hRJHeLvbuZTCHz1h9WGT8AxWZsuR",
  "key23": "5ABT4pQR9cKMAQsHCWyMw6WrXMHQ5dkPkmiNaB75GQPdYegbXbY4EWzzNiLbKR8Eo8SW2wHh6Y6qBqeMQqVqkwPB",
  "key24": "4x2469GiEVP2wYRj1UfxfUcBc9QWiB371oDnmxxzSV31bTuk4mesG97PzRdDcG63sJ9tiWWLXmfSjYMea2Y8VQRc",
  "key25": "3s5nXSvy9G6dav9jjLGCtgcYVUXsPjRSydEBrFVJ2WRuSiBJvEPPQsyHNLmzkU8xEjiGjgWbZX3n9XcVs4Ec8wQA",
  "key26": "2VTge3AmtZUXsPi1b1T2R1zkzT7pAgSQodo1PuqT9Wg1AWrt7yHbH1Nd1jmLr3rqG4WNvo7mDMwyZaVp6sdJsU9Y",
  "key27": "2pT5wBJCsQCZ5pe2SYGnWrV6LNfukagm4Wx1AtGJHicHGbBqUAQCb7Hb7hC9NA9645NtYgdkuLszwrKmmzi3JDDn",
  "key28": "4FjShYqkhHV7QNFaeik2jrHVFjVsR3LoYQ8PrQL1SdcPD9NbvCtCuArzYRMZsScciTmX4ZEDpJhP3h5QFWxNveby",
  "key29": "5hZxYULrrchZMULELmaYi6PjJd8ifTc5T3XY1uwaZXxsrbWJv573p1GbD6wwHkKLV8AV9eM9KDRHKG4tkhgfJvCf",
  "key30": "3dB6A8rwQWFG415sLdKUnry3Q94AiJAC5FFVHL5uKRt2dddyx4d1UgvPdvAB98bsYF15t8smazqby22zoE7cu62Q",
  "key31": "gcAtGXy87HWGBdN7fPR4bz7i6bYsYi3YMZr5V57MnMZ9vanMSw4NiBptso6EH5tvYx5vEhupTASqdjfZVEy8z7q",
  "key32": "5yUnHPTu8Es5VRnM9Zx8FFco41wHfDKjtWEVrR7gD22ACZJaDdzNtaAHXrymYK5gdd74eBE7ZkjzJ18JcVaWRqHo",
  "key33": "39cLGMtd4fsZNSCTHyXzFrp8Y8r9gdpZZtuHQWsjTx4ACipCcnWBwtJhq7sX8hSxLnV9vRXysQFjitE5kEDTxEfF",
  "key34": "4VUxtPm7X3Jsnj7Dpm2J4AvrSTuqdY2fjmd5TjoY7847QDdREQxmhdR5G4HwDvqizSVaNMg8AQ6DjME6bcr5M76D",
  "key35": "35tT5usc2iYTy46n4FpuvPsjbBWTGocpntwQ2TTdnJDZEHByp4VCw7YRrHYNx7pcmUZk2LG3baLXWa5RZQc7zaYQ",
  "key36": "64sbhyQ7L6QM5yzmS9KUVHLi5UwzLz7jpYs5R7A4cmcVH32bprjDcrYnTARzMatFDL1YuVt68SX2PFyr1p8JKc2F",
  "key37": "2ZBF6E8u9n9GRgrc12biAyPMDnjwnEMokwQaztGWwSNx6qxfcYuES1U9ZrEXzH1hu6ipqWQt2F66urBzGSwDZbk4",
  "key38": "35ZWse2DPM7NM6ZZZ2hi2VvJufZeVjQjVdP8tkrn4FgtnvUzThtk1Zzk6DepYUsetPf8Ni2t6EXGWiAtRBH7Knvp",
  "key39": "au6e1JQyiTfe1JKLZzWCJV56eqco97eFqfGvKd42Mq6HzG8iogqYr2qeu58rSUJivUxhz2FT5WUBL1YcBiUema9"
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
