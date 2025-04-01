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
    "5wvBMYrpyCf1FNQmRAUMCXwk1kHo2nTqCKJpdpoxQGWEYAVdhNvPzhKRmywWkVWV6DrSe9KVe1y6phgKNU2Gwde9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DTngEQgn9e8upeoNvN3JKej3rUxa9ANqmXWZV93EeUbiT2MAXcdC65yWrVbrLGzTybewKCgk5Y51w2RjUEvkjJn",
  "key1": "4vKp1P19cSJ9rHmhK3uwYD7DDkoC3Y88JQ1nKVVscSyFkf9vnU7sWVoLUeoSPNLkQckt6LwNvJt9hPaCobHcPhSX",
  "key2": "5gCLPkRvtKYEmuAj25hQYfQZx8ghKKsEFP8SgBGWt6oJwfx1MFKi37mxBN6gq3xZ8GZ37rjzzAyiL31dE3Qz1fb3",
  "key3": "jkxEBc85CExws5J2Dgq5ktFZnaYNyaVyCPjxmB7t1eEEn56QrPvAEyJFVCSV8PcLdqX7Gi6H6YZZrvPiLWejXwb",
  "key4": "4aFJRvJmuFpMEFWF6fgtuUPpNk1ysdVToos5E2UogW57uYFKrzXHu2bQQHbcbV9PnJ4kfJu97fF9dqzGcx632bnS",
  "key5": "QxE8MDwWX1XHrRuo7CTnz2WhJcoQeW5RyMkFVoRC9Db5gY5enmY8oZuUFS8xqhxTApBuabBcKV2powVfGH6hWDG",
  "key6": "3fz4oLNjBJdh9YVNnPWXCyNpypzPGte3h3NSWbX4UeG3XEqyBBFoXfy5k3ngs5pQtxEtwG8Sk6mzFLWDg9VNngGU",
  "key7": "AA9JwNDjQVe5ffUDZC4N8N1fkj5suHYRWLrqTYEvyoZGoKaGaYm36EpGUuPjioH29ZXYtV8dtfzs6YgR3HJTyry",
  "key8": "3z6vpeMq6MsV4GEu5eaxUPF77TjiaAwqXGEX3XhQvYzGgfSALVgyyaynx862rJoTCkAiwEEXNmxUqNDshdxBVhHV",
  "key9": "5MNMUhuRBNfmrCmCkg79Tj53y3gcCqgiHjnzdQCXXMxm2eWeqbY8vXEK3vcoeC4AshoAjSSSdsFD6QRQcAWtzLKf",
  "key10": "2AhXKbEHn8ik82DtsrMmtaSEVZjecq8rxe9GxLosNG1XhWvWUuBT6u3EhqbBFi2aMqTyFVrt85o43wJL8dAmrn3c",
  "key11": "4DRx2PZKBfWeFBYsPGVB2aBTD6GiwJnqgKs3rjCgMo9wKyk87ooc9RxdLQcviHz9U31PiKn3KYc7hJ1hAP81FuYG",
  "key12": "28k2pDDgbrFZ4utZrrcbttcZbk1uEZpvVT2BTBjfQs8YLVyeV79bsQw1gsC2AiGADJQaodkTyRCVb8axuzHsi5YQ",
  "key13": "fckJGDoA2umFtN8GLTGXJ7YDVZER5nHxeKwhRBBmHKhGVB3r4MH1Ujr69Hj3gVqHCuR9eFbGjJraAVmpixmCPRv",
  "key14": "4UgarT5wSUPcbCU3q2Cv8zK4ZTwpcXjfdahWCLAmwpdZYJUrTvL9aJVpMixg7FsKMYA2F7YkFPhm5L7eS9ebtyyS",
  "key15": "3eigK4EU9vLkzCfVeJtrQm5Qe4zpP9UCsiCocZE4TjPq95PcgtpnS434Emb5mZaRtQ6gruw8f5FhCX5jXFyHnFTp",
  "key16": "4nCuCaKwHuXeuz5KHhshsV3mWdpriUFd6vqcZ1VyYDyfkJmzULZHUyAgvAYnUWLbUSEAS5m4Zop2PYSKePjcP4j6",
  "key17": "5cSTim4CoMjFHerVAWkcFewLk7DUC19kDniVZRiSQaR38LBdfR6TVbWQ4PtvA8iDKLy9hLmWjTDVZcY12Pry1bHK",
  "key18": "4ti589pztHSYU2JcemyTodtmfQnD61ygTBr81HF7ozBfXNUHCUHUndrLdaHZyGt9C5MtRKSJZJcTBk1DFqEf7J23",
  "key19": "KH2SUafgBSpcaXVgdZ1ydnuFetfUkfKA1p5DvCT9Nv3hon8BG2Rg1UYfDaW3nDR93qfC9qeU7j9JS7w9uED9QsW",
  "key20": "56AZMDY5XL6FZ7TDngamh7Ezi2qeWXiDKnBcamFHfHFr1dLNXRdH5JX6LJat9zCFKNa7adoF8Phzfzb7v9a9oA6L",
  "key21": "2WNsxajTnMijkg2JH56t9Evrn8Vco4EyWf4cRMQp7JMUusu12qfFaGZqcHzpNMC5DK4Tpc2GwCh9GPRhg15DCeYw",
  "key22": "kE1c1j7BovQQ4yS79yfUoiGMbmXaYMci3EbrdBVFMyPANbFEAdixczvufDkBF4cR2jVKx5Dg4vnS4F7iPHDXh9m",
  "key23": "4PsWFjCfTL423Mzq11CAkSmUPwoWHg5aWWfCyWS9sbUNE7QQFxuTr55uQPbed9cww2TQVwUdiWfWaHcACAghFupt",
  "key24": "ex39LefgxJrQaoaT2T8pfjMBo8TTQ2QFbvpVThp6p7zRu12GEnuSXMhpp4Fz7Z5Z1NpW1BtdCt5FZAbCucLoqCM"
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
