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
    "u3rzn27Uuf3Yf5r61sXUpK6NVbXeDAMEKZRNHsGetpvDXcG33EwJXM9V1cXb2v8UzdBZK2ke5ph48xPUNhaYbZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wWtQfKcwgaEiK95SdnoG88CKJ9zjNiVUY1Sk4KhymTC9H9UxqEqkHVu3Q6mHjHCr3bL9wibQQyHGLvPUgESiKoZ",
  "key1": "4xBRT2Qihx7Ny21PAPquaUS2fAR66Vx6sroFJkyGw6iGjn1ZfX9qokDLVEcCebLHJyRFSi5AD42q7SnwkhkjSYZk",
  "key2": "2agpyL95rcQrRYzKcf4MP8N6cyHykdroYAYo7bnxnN6x4UskBu1BXDNYcTLtnyeS1sRcpEzpivbhvFVHUJVW8Msk",
  "key3": "2zpe1yQkAJGReftyVJKKyLGzToUzgf64UY36g7eRNuoVwH3xj4BmFjiuJ4CsP8XAyGTzCck9Bcq4NFmxGxCVCZsn",
  "key4": "c7FJsyYk14sgRE8LxYmET83GyTT3znVRvZC1Xvy5uxV6WiZ5Qu5YUGjvVkPhG6F4tVPzBYTA6brTC8FVDh2YHkP",
  "key5": "nPAc9NsUq7Ao1jm86BjdVhLz2Nr8zVfs1xo7eKunQf5bsmGBbGVyCeFTkgJvMkpmQGkG2Gpg1QbVgCQjE2zByKd",
  "key6": "jwykXbAAn1gVcDykDXd87ybv8eao9vm5fg7KLtYAvoEn9wP5a52BpcrmEp4mkq5BLS3xkKtf9fDkFp2tfgPJ5oA",
  "key7": "4egztteFThohVsGmGNGCySBPzBgSyuVzYEPmCUGJqZLgqGgNkBfcHSurE4V1syor7arHwv7Tf6a6KRMbWTi8eGod",
  "key8": "3GMndWLfZJcQ6iJJdEZAgeyUopE3WZKZkUaY9Kza6zjPJFbgxmtUvsMzG11tvPRzRmVUc6Rwx44kDatMyVW5745Q",
  "key9": "4UsV5qvXjWP9JzoP9p7y5Ss4BsLpYRhrPamjqjfUKMnDqytrNmQXiPXMsro7Q3mnRrttHQQ7Cguk2wkzxPsuTJMQ",
  "key10": "5h3fy6sZhar2L2SL6HeiPVD7XJxdGiSa4wisNvfuAjQwYnb7zBe9qVuN5UrrHEyACNJuwhpNqHZuyX2mWtWSsw9v",
  "key11": "15JNtUPVsfSgcPXJsDNk78PFWCsYdCBtd7J8d97xexfryRFNFx8G2rQNqTkKJEKSgCrVbEb6dHbm9JQUq5wAp5s",
  "key12": "3HuXRbMnoreQyLC7nzCeHLXfQgDQ6c2PW8yjv56ZfWWcAaeeU7fodHJiHAXPCCiFy2fTNB8R5a7gbGy1dMvfCnw7",
  "key13": "3JBbNiTgHm3MQzcGAMXBC38K8hMtsV677kXER6ukVv58zoVfMq7kjNdJWa7mLibC85nfpcNeQUzrZKKb9cRRq7iN",
  "key14": "4YCLnAU4mhuAfSibzrVReVq2D6ye74PSEZLqjkdNvJpGTbzea6RT4V8gvRmAzEwDiD47NpP9RLPGF284TW7T3jHo",
  "key15": "4XN6Nz9AtCBvNkKXPpHgksG9FQKcQKTJoRGWTaU3Ggua5zegcrDR4KXrZUJwxeh517uo6DRgP7y9LKQWKUnTb147",
  "key16": "5pNuJ9pYeYpv4AAyjH8pkhVhCWh8zLSJCsBZgH5r1rk8nckK58UdhvSu6pJzNWcCW3Eumk1mnQQrTiUDWL2k4WjX",
  "key17": "42k6cUEg35uouz9gKTVbYXWSBHZYKfEvnLKHwfzR3r5b6BrqPMhQ2CsnEnk9GfiM6pMX2P22HL6VN7DQNw1ixXDv",
  "key18": "NB2ity6kr36kS2bUmHhsKxg5yy8j3xmnVZj3UGT9o5A4b9qswc1QK8jDQ3a6gcpxBh9oKoXUCnsaxWYZMB9uxws",
  "key19": "puoYXSWbpidmcSuSNL4MjTzXkWTn5t54zACM43bidybnks6urN5q3ksKDKo9frczXWiM4w8bsJTeupnBn3F57d2",
  "key20": "5AAKv7Vfpdny8ZW63XJ33pte5rauCiuNV3L93ufRia5UzGex49zvwtgwwwAV31MowrAoTiMbY4WQ63U55yh594kf",
  "key21": "4VFgPTxhgn2PoK81mMzK4Csx2WTvY4h5NJpUV3FSN3obxaPkqiR5qdCz4tH6AKU4FfTZcf2Q4R1pRrLDg3AFVXou",
  "key22": "5KdRJ4ZLASpYcsHKCbjNvZUnJqAjyRuY9etxxq4P5k3CxrpxVSM1TMY9vA9bS5gzsMhJBEQHAE2vVUvZf4BKSAZJ",
  "key23": "4e8ggeyzYvwK7LhFSH7B4U8EdyT8aGtEi9ZFZMnxLBTR1ua2L5mo6ZdFqHpozBa5vNvCZWGFkokYnsHtwXkFhdHW",
  "key24": "5GyUQ3DxDpemXDyHidLSyjtypjuT7ptdnzQzzEeec7eEFEaZeCP2cSUBgxe8KDpTmKHWsbWyqSUbHD7uahzyLBFE",
  "key25": "43dzvq8h6dcur5bVsbAvX7kgdP46Ls8XLZZ4HhBmdePNNh8oZ5dJ8MGkXLoopXLT3PL522zMrEJoF7cqVf8rVnLq",
  "key26": "29AB9LF8trbrD4dYBAyhi2rsyKtCMPt4ftVKjD5GLEEEdWGxdgFpLYZubNESEiSxkFJf2sRCjggfxHEiDFthKtQL",
  "key27": "41tz1NCb5RiC5EwRDSj5cb4j4Sn7hL4d1epQNVvLKF6byqX5DBu4wtFNK3t8Pj7mUBfS7oghNhnsYxJdrUgayPEx",
  "key28": "56tL6LhTyr3QSNGTCmsLqU4UaFGAZ69cDw8pqaGyZeAf7zcpxj8cfhEificZ52cvoti239fo2jshDLUSQEAEC4qR",
  "key29": "4XNZ11gYfMHPsGUXQq1jvYyWF1B8enprnbqoMeGoRc9ue22NzqB9yVbfDyfTP13o8LX1GkuYnJMxy7QNFi15Uq9G",
  "key30": "3TSGDAHWHAKxk8zMSx2Sr9S1VprGiCVFRqJR5Xj5Ec3vi2p4sFjxbzGv4k8VNx9ZAQYpuhb91LLyxdmz1WBdrJq",
  "key31": "2RKd3tJqsVgCVfk5QdYuEnR8sguQfHGC2LsqTVbYeTRDVsQVCHVPhAps3HZUTbQVtKaAo6vrCSr63caL2S4dWXhb",
  "key32": "2C8pP6uKEJxaYeqBRpneJPMgbunbNR4xs6YuHNfXLEAfevV2b9BkyeSED4CSV3B33QfmP7JyfpjxMWxMT9iov762",
  "key33": "2eTExg1SNKqsPdxu5PWPKXiAobBaKHcy19bAMEqChvZJ9yRdGHEosBooxdF352VRGQGgYqzFZGgBeQGaUurP37oa",
  "key34": "5sYykPpCvfFE9TRTP2oZQteTXBd9r5zugGT1zZFuXJjqZ4KbkLtz63VNxMM5HFmaxkNru4L8s8araEAoBCt7NbCb",
  "key35": "4GNwW1UwR5XSh9DLyL8us4JLBTUgav1r83Dc7VnUkSVeSpunvgmWdWxDZmZVkqpBWAKc5teta4RiVDXasRubG1wd",
  "key36": "4RdMroHKUkNsa49XY6yV6qeLmTV4NZxsT7fsyufvSVYmwCUo9MHsaSAVkA3NdEPvRYRZEPRJaWnHeYL6AzQiLdxT",
  "key37": "48hMGQ6Ede4BpLyfyBNGCh1ARUTadZyb3LJzGpDMyMdfLoH9x5puA6MHLToQA4pVe6mdiFwUk9uPkmvYgv2QzN16",
  "key38": "3JtwkF4bDW99gNLGUqp9qRpTpZ614qqPcxwGfBU6YyhkBDt5S4i6bJ7jtUb8i53vQAYwZSS2GnP2kWtWU8RcDqmj"
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
