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
    "29887f4ehQaom1j6vjKpTxUKs3jUmeUgd96kGNnwD6RqDej8c2jtWTHJET7VhmTgSM8cB5UrHMvsFwHQ33Khrfr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uugaY9diZF87d1xHAzb8nCe886b7vEhdeaedgDmBdpExBFiccnifWC4chhB41ahbY2yeUKkz2WUVTGFbApug9Ut",
  "key1": "3Lb4ePCJLPHsMqsDrsfLgNnJpCNJHecRYSNhWiBkoZwYfR3iYGNPFLWv6m1keBodvYkXdhLfAeMaZr7Ce37spVRT",
  "key2": "35SbtSbmy8zaU9cvV4bp4PxR4f1eMiv2HFJnVnNHGE5VeUJJKrbSFkVdTis3TTPYYNHpzt96xrdS8zNeJWVzVvjG",
  "key3": "bYqGRVn5HCDVUeE2zSBUcB4oHQ4KjVtqXC4RCdNHyKRjckBhqrAcmKHYKYkazgbJqULuVZR6WtTD9xK9aW3rbDt",
  "key4": "QBNP17Mu6Zhh4ueuPK3MnyVWreWyziL6qp54NRvo9XtAtjTh8fw8ai5khWydnXTtH4xqBUXjGLtPcedUyDFZpyu",
  "key5": "5Np66q2puidtcPbVqy87z1nszFXANqWVzrR3tDXmYSQJfd8FF9VKMpK9XPVpebojETHJ3SjsQ5g6baHscDmFFRxL",
  "key6": "3ZVuUF3zGE2iy7K38bCV2f6c6b23gvrdsEyvsTTsXRenon6Q6rsy1aWyadGVyKobadwFyJcUxbvNrFUFbhhYpVxh",
  "key7": "eCXR62TAmx9WPWLuVSeYhFg75HNJoXcKVdYWQy6mW9HPQyykfEneZzZkUUN9u8GHVnzfnmMB4eA8TTYSPUokq5u",
  "key8": "2HRq8oXQh2esRZAf65opgZQsJCmZQYypFxkc2opGKUJLvL48bbRoF4s4cxqvnJp15FjjCRLvppqLy99eTGBYweT2",
  "key9": "22gQd8cWVHBZpSHQWdGXhDZrnFZrduVwEiF5MdfeHmD2QiZfrh2LR9n841iejMhbexbbufWAnQP3HJdEPejsu7TB",
  "key10": "2JLsvXHRCUJBPxQr7YfcA6P1YczyCjTv7ape3ybT1fuwU5Y8shsxxfmQzQeYHTW7ig2b62pMg1feyUvTanDkrQDe",
  "key11": "5RPkL4MxmcFuXFxrz9yXmvqsoAXKajfNhLkowi37XvNbEQJE6kdEtYd9DaMzofq7krKuDSbGGahsH6NWh4eXkhvS",
  "key12": "SiGDJqkZYT88zE2Aq5HTJYmFL9adTafNoT2kemNmBxzBcwC14Xd1Fmh8WH6KHJ6y2dyy2tn3rqq7NbABneQBvNt",
  "key13": "4UNFxWSiCQzAspFUD3iNZHvXJUUagXLUXamWkZFdSQkrtUcpCTF95V8FJJi4HnF4pgsfGqWbA2AwfVnC15eNm9tK",
  "key14": "2XiDSeUJDdw1gHiUe2hZf2dzWt5onqrcRvMZzsoGnrVHoWxHWmc8jK2AEWmTFcufxTa9nzyzBNutDMZFngErReaE",
  "key15": "2MGU5ZnYAoZkUJp53bTvz5kpUSjvhUbfC8tKWecpavw1PsxVR1yGbp5W4PPqfU6ndBWdmNBDc2Nw2t6FpT5J3MR5",
  "key16": "4ZMMXEC82t5nMR4cr42xgAJHxBCQRJiJsbd31nh5fKoabLQaicsa8vthaGB5iKG6RTNRptCvRzF2bGQkF24hSN1m",
  "key17": "3BpHgTxRrytSDom1FvPHWhoHmGyhLaTsuGGdELLror6heitQ1Bc7ghyVQpUDbyVSGUWgGHwVu9MuiHXRA8htyt5h",
  "key18": "5nGKSQSxmgdo3Zf3ZM3TTfyYUkpRTdnq2Mzxj4GjgLXwvFwRb9bjc7TWQgwHHr31tyLtyKagV1Q49nBS6Gt3qDfp",
  "key19": "2pL3bon7G2YcDhmymXTeLvL7SkukQXRZLDDMTgM5u4S6mSqrSBoH7oWuMQQanG7cmStAhESd9PKR4xjBHvJnNxxW",
  "key20": "5p2s6sUDLYiCXgVTvuvY4oKtfaAvUwPTYPdv4iN6oyZcK99GBCbPBdyPRwSw87TVDZk3xMZ7Tp2ShDkQPiinUSwu",
  "key21": "xfhsp3fReckvh17dbZe45ASaLoMwejCr4wgfKrxQPnZ7JXkjZZfshNbVTBsbKATLCqakVSqE62tcEyZCEQnS1oK",
  "key22": "DGw4uU1FzUhcHBZLNb38eyPRWTcqJA3jXSYkGbbZ12hLQgvr9aw2uUEZjnSrkczJ8u4CbeHQFf5NaDSbLhSEcC1",
  "key23": "3azrRHRt2fYjYSchjNYDcBCrkbsjdnwyP8BMvxWTzBRDZWcjcaws3RndaaAut7ZK2nPRAmmoqZ8Z9EM58WKduhAe",
  "key24": "5JHJuMDfJb6bANmwH4ZKKXLjRcHrAqa2isLdNiyCyR9AQ2zc9iSwD2qAfTjeFjzsy5GEKPNqSfW5FKb3jpArEAzC",
  "key25": "2MEpdbHXnX1iUzM3zfzagKBKPpYH5daxJaHnwksC8hpCkm6vffH6pvNxArt6cN7yqd59UnyCAQQkQW69dztyuCfr",
  "key26": "5f43Huyy1RhkMqJbxmcSgYxFfRp18ixYCcnZV3jkXeErXpb5NL7DW2PPNErZZ852Gt9XcPhp23wpoNkLDnfE2Bbv",
  "key27": "47K9YDqtRKXRi9N41HjGoaV5HpLoK68sQ2vDVvM3ZkpypjxyEB3Upu41QmB4Q7pF6ChXdaBvh2HTFfXtJ1beBGRb",
  "key28": "9NDViuSmgqz739LBUHf8RNLmZSPRNXskpFYrRJVvXddx4XkuEiSuaYTdqg6ciQtXjQEchrkT4FrwpnrjyZbGEk7",
  "key29": "44aj5zxm3Fv9HU4imFhW9tub6eQ3z8XLVBjn12AeskWmgHf9sKsBWwh1rxVGcxZZaJrSHyPKYQ1evb11V4c9j2zm",
  "key30": "3zMGfKcz4rATqHHgBSE2gUbcr7bL3azaYeEG4EPBhTW1exCSyX13CcMuPGaF6MjYLXxu7hsKHwfcZ23V5L9f759G",
  "key31": "2TBBgC7LYuS68k2WVztZMkrKYizgEkUDR6CVZrdcir8VP9sVgVXHmvuG1N6t5tZPJ6rQwowKDFXCFRrdEcfnbfe9",
  "key32": "2sA2vatQe7zsWx3kjs6J2FRUFuLRoVAzHm4N5S2pQGqWgAzbYTWbYmDjYUHGKR9TVh8ouCTi3HMNKhRVx1Yq4cvF",
  "key33": "4G5PVog8RQh1VaHYaaNk2knwgKJWmV7nKdpGetVAiAFnMaicfex5ciZCRttApVndUXHbzRiaBduRpoeLXtJ9QGa5",
  "key34": "cuY7G192FuwGzXf2USSDZp6Yy8t9jB5TShN1gcmuRmsNSgx6s5FfSFMA9Az9NqXZ6fLcRLAZH6cbDinpnA6sPJD",
  "key35": "48yGb8S9h7gPMCMcuuWfk8MSg79QCSfp2TPfmyAQfzTkmjer1net6yprx4Z8jFWQx8tspXTJ7H2aZ3jnjJXWfhMi",
  "key36": "3Djg7zavE9nkBMg2rpujaPiZrFFYHsam7MH6PtTo5dKSYCGpGkEtt5veoMrqrba6YAeqDPHr7d45Qrp9VpHbEe5P"
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
