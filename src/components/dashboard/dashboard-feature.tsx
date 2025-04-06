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
    "5LeS9r6zMC2CeeinV9FZZpg1xr6xvofQ8hCyftvat1rYcUApjQzXwRWXnt7J3cn7fjeVz6s2picmSLsyts9etjt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "652B6xUzVbeVqfkLJoKGZUxv4m5hSX7STjYGbFPXBdGFkH9ZVQ1Ng3F5kMrYsDPDQLsT5qha9c59HnkLvYsLA3SL",
  "key1": "3xuLPVUGKy9vnPqjLDeji7aGRPxEMj5WX2Zmce5kw3ky4JiYyFPbFVn8NFU7mtQDCtWrW4TB9jPnwffapdpfvwN2",
  "key2": "593s9MWDaAqP1euUkdHYNXWaE89R38CzddotL4qc3oYwCCF75JZxMmKZPkrwzzbG8ZeB72MWcKWCs3QnMwbvbcKQ",
  "key3": "52ymoEZPuAVVmSCyKhtTsF9mLJvnvDojRmvGf1X9r3d8uSXjWPq4ESwYkT1fHsag86smTk9txiFf33b1aZ9TsVR4",
  "key4": "jwgUf6ogU9LR1fnSmBziDfYEoKr8gg1aiwXiGmhE6ABZxh5uz7ehwNSV6jTBgfsF4MPLGgTtk91qk8iZWxZnAU2",
  "key5": "5jZPeo3G7DwZWVxsit3vmA2NGiLtjACFmngNpyPjhN2v6k56g9jAHkHgM57vszw8mCY34VGEtENkjB7ke7Qb38AF",
  "key6": "4SU2wtru34dCohKwqA9YpHq7SY1A5fHZdP4QygRMRHXfFLqueji8gmZSo3aY8sE5S7UfTyDTGqkZ34jdHjvyF8ST",
  "key7": "PXa73wMUL7jU8qVsoACi6g5jWGkpntf4vs5DVjpCAMWzto6YC9YKTQt8uVedMau1MeEBshHKDgGaWQkbM9Q66c7",
  "key8": "4Rcu4CsyroHiDwXtCQjUNw4QTAivrs4nSCo9ksspQEpXtrzLXdAvBpYoFapZ1o6DUN39Xgo7MVVkHjgHbnsju9Ed",
  "key9": "4KRqidG2eA8kN1gUUSWK7WgJvbzpJsDLhwGuZT3VknJav2GrKhFdHFegFwjRHivHYkqmFEEmD9GaLJYqnvEApEH7",
  "key10": "4tL3izaNoKQTynhoHQ1MXZ2AUvSsapxFXi8iCTsN5CCXxwxQsgsYyrZT4yJaQAbScjFYqtA8xTRzWoFPodaif1ZA",
  "key11": "teboL6yNLSNjAzJxrXqWyxaC2TGLn71XHBHeBCv4hVKfmAyTiiiHg44CZhhjDFAnhnczvqsAsr1yS88YgiY2GFX",
  "key12": "4gBAGrPgnx7nSkgMPp3GPwHjAYjpc6m6heH4YRCv82GAxwW9Fr21jWvETT3Jm1kQKGMVsBt464gAEd7NfZyM3hDZ",
  "key13": "2e4FtpJxMp83PDpeRTsq4FRzXNzmUbZcVmByxQjNaawR1JY1CZWgTVgkZBEvx3ZAXk118ux6L5fq6oRD7Xaa5MB6",
  "key14": "2qZng31JkgawfFcLE1zwpKETmkGxS7Ewhn5f9aNSndTLDnSvAFddKBvkLQ9QDF8pqKK3YZSGfsjReevmRu5xEfTy",
  "key15": "5YPmYNqAzEeFDBGDKPrkRberr8DE4AXM2bqM78CZi7xKrsBkRXSAMMPqAFbsYKnW5fZNU15KzKJNDnE4W2BTmjQs",
  "key16": "329un4sSdKoqxdJwQaDGdgeBn8wxC9vr3ppykqLUGPmK7uQNLTr7eXfvgKfFrmrK1SGewgujp52zEPD5eW6W4b41",
  "key17": "2488JHNFBTG2DbYXiz6dwBCBc49J387S3cQGvGm7YQZbPqBYY8omWQG7GwdcWK5K2t5nqVRPDxhzUR2Nd5zYz7gB",
  "key18": "3KbawnZFMaCXo4BCX9vxzq2euK21rwe6ZFUcdr3tnbVmSQC7GhW8yLjSLfvp68ERVa9amMzvtEJ9YDoQ8KkrVq3X",
  "key19": "3W3oTGNKtBLyoazqs1KJh6dszEpkaKPchfwUb6StHatvVYed6aEFcii2XSmm5KF7nPeccuYnCLeDJCPn72PDVKt8",
  "key20": "4wTRvjgaqtr3tPd3QwSiFkHnXutrjMXwTGzjznhYFm18uqxriUbd5mdexZLxgRDtXTxPotJuGLQ2PQJdR5d5jWA",
  "key21": "5G5QoG6WKE1YEagY59fs4y1YL2d8LNKAeNje7eYFGFSQDhQpuJPYbtjN9GFSBtFF64kucWzJosDqK2TjmuGkShDK",
  "key22": "25mKDAD2QkPmaqVTEWE9z67vuhnVCkSutJDzSBzLtS6M8mja2TbUH91pU4kCKX36Sd5nKxbUqZ1JLAP4Ft5bUhtS",
  "key23": "5DDD1Sq5vkTTHUT9DWuRwu5eLwhuxWgUpgnTe8BwyQtSjNCV2qr8BeEPFYqMDB4uHKc2AX7sJoiMepGomKzSUPSs",
  "key24": "3TmuD4wjugPTp1G1vYAXoven7TpUahBc9izFFhx3C3abZmGF1oPPYCFZksnrEqZv6iKZv8iMa4xyRGAbFSXr6Q9a",
  "key25": "2F1KrV1PMdfyjyWWr3miR7Ezdyv1xgi2qG1vVpDvzPSNiLTfwAnSL7SYzLxDFM4wTC9iZwTmCz5PvbE4MqCnbad9",
  "key26": "2QqFbeefch6f2SVCKxGrVouH9BJXJvhLbgSbMm5CjtfHjRwui9DfZsg96dzaKn1pXtQgV1bdefjGCsZHjjvhS3N1",
  "key27": "vm9KsPfMneeYiUkHQezmer4cUA665TDVvEGXW8fW6rEdjgQUVADiC2sLGf2oe1yA2BeWqReDmtRiKFxJDSFzgzJ",
  "key28": "5E2qdNw5GYgmTkFfRRBi348bbNjwB1s4pxGktZFmsgnGJQXpkg8CgPEwQ3a8Cu1H71Ddf5KBjE8VeR4a2Y3egG8E",
  "key29": "3r6te2NWq7bSN7JVzNj96DN5YumFioDycsQoFLejWewZY81uAtgDHTbaNgiu2BerUtobyzz27yeirXt36iyj68c9",
  "key30": "4b6JuxeQwv9ww3trtBgzvzwxYF7YSa7C4675zCDaV9aZq8aBwCscHVhnTmPjHsAy3JLhd72oetKLtyZT36D16sGw",
  "key31": "4hegCuqJQtMZS5wbtG8N7TNYSNyTGMwBq6gsyyJ4d3EBv38nC7hEnB6gQr7TGqwYEoLUgDUhhwAR3CbaK1cuUGv1"
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
