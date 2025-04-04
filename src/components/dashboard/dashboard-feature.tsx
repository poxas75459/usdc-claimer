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
    "34CFZnKFapSaXsthnvyreU8vTgHcecaCcRvQx34JTaxfecjpAe58gJYMNTCFTKo5RcHSn6zeRME4wo3RXcSWH8Xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AwFEmXZJ3FN2UxcnnsdNHEva5UfmpnidpAaUmRcbyU1VTKAxDdU7Pj4qZWnsiwJrce9u2WsRu2yRPL22wo7qyjz",
  "key1": "4Ru62EzBqzb9SBb6cxTvwdKjH1reMZr6Dnmz9fFWuiGmX7cjepThvgXUUngA4Q4JbNozC456cP1WqnCiX97NXK5z",
  "key2": "nLRsPfQBN1qqqco48du95E9HvRkSRbKkuvKitFoUD2wqXUkNihe1XwrK3YpqozfbuKtU6qy7M76125ZXTnR9aVi",
  "key3": "2i59KaoHsL79QRniughv1yPMhC6uFTpqbaSKGdXjuJV6J2Bmd7jGKCEULonAF78oULpuP3MuSJYreCmQUSVvcxzm",
  "key4": "5LhNSHDZAesCeHJdzAM4Xkqe8EvRwgz582XKAPu5eL5L7DEemRbPzWpbCm6BuHDXzH43VQx4VtHU55PUNGMoofn5",
  "key5": "3yfrE6sQfqDfQ9FMzoJUvDZJ3FwsPD8TiARW7vFRbSq1dEmFNqmUELFUnbFPzRqqW5z71u2KHxdxn2fRq3mMxFzh",
  "key6": "3ozERpwq7UpYxPQPtygKt6mVTkhzWu8ZAfYLQTkC3h5x6ALMeD3vDuQ869gF8dtDCg4FSqf2zXqUXWDeuGR6cBoE",
  "key7": "3v2nJ3T1azpmkrSLn2xYD7UJ8TMUonfgh125Na4VCm48Cz28A3zEc2Dzacx9dAupgnsVBD7LYhqiLbFJqv1NzkEo",
  "key8": "2dfUR1FbmiWxsrR1aDUERcFnpkcU5tDYQGeQXQZR7rcWZdA11hBDPkKwcB5ANJLzF94HPQKb57ZFM1Nu36JY9Myz",
  "key9": "2EWcTqLey3wDhzxkfCbj7Ep6xPjiqPJqgsnMG9WvZ3BLr49Zj5Tg1WKj2H549acMpacWSPAjAL8h55rbM2Zo6NZk",
  "key10": "3qroxNskrR85sidcVxe82BE9QBK6DfgJLiCrLXYNRUov2qV8ZXdhkMDgmygdVcpSDsdXJNKShEKn9qu53i1tFuB7",
  "key11": "3Pnyyh681kyASGHAarMtvJsFPcbVq3Lgvw9yeUtnpntBC4jeN117piP7owBiXSjq5ZEeH5suftfjKxT5kqmpHtwU",
  "key12": "3YsMHW46UanHGbQsEG34xyUkcptLFZKp6LC7DvtS9sio5UqX1bRJubfnqanc2iwns8uhAYx2EQakBNxwdf54W8cf",
  "key13": "3K8T9AKvfCeSfp6eJRspSsKE6ATAswL5f4bxsMNUcMCdU7TMyRskte37DvaCEjv8bHdgaPBCJXRCMvajJx9LbXuQ",
  "key14": "2FtwQ1PTtDAnr8ZJaX9aRbHg3yPvoAa4S5m1VbnnWRytVSzByg5oFhHC8HyWTzd5Hbe8YdDQWSGSAyy2MzFtWYFd",
  "key15": "5q4VRow5EpiN5Y9TNhVQuzp1Q86N5vbtYiAFj9qfeirpmfdvBa4ic9Vg4usujcKW3yYX91EyxJ15WiKedraX717G",
  "key16": "5CFmcJHp3D8nVALFNaqt7UprVdoG7uPQzjUqQBao5jrDULp6zkGPvBbQ2JFsGbRUpV8mkwWEai68BmgHQV4cCXTv",
  "key17": "rQuZMpg5e3AbaAHyjw5RHYzpA5hi9FseGXz8oUdw3DckbgMH6EPCNEkfmyNa3TE6C6YkLFscbbSRVnSPqAo47tZ",
  "key18": "LPdbnCaCDmg2rnLWqVhVmgD4BnSZxJcAjDPzWD9wWbMSWanC5j7VLj3B1GBnzwMxSeJVfbW6p8ZD7esCK4X8T9c",
  "key19": "57s2J34YbQULatLNz18RbEPDcCArXTMYSGg9dFeEa9bByQjCpXScaqNwqr5SAUmaei9sqaqbSeextbHdKNdjQaND",
  "key20": "2X8zNKcmGNzJnPaCrF4dWiGT85CZjjusSxc7hrwdHhCBM5ez1fYuGfdsUbzRA97dvKwYBJ2LVEg7N85iGH1YobZ",
  "key21": "g9JgUVkJPaQhgeoMg9MD6SD7ms5GEvyw58dWCEgdEaUhUiQXPNzsgUM8qbNQbtkMcC7cjA1n8t62ewnDZBLzX5u",
  "key22": "4hQxPKdVgMVUtrTaKsWu5q7FwjGE5sA5ZdTL6hWQs1udnALjv7gBx4ziniiAHJoEVoKdCBA1qMAdqpSafHLFkust",
  "key23": "2HU5B7uPyuyTQd2xwZ4rGiszj7ySsYuruTyF8zGbbUCD7xADkJ5hLmraHr3sQeQ2x6MXAzyqS8mJWpQRApHDwLz2",
  "key24": "3MrcLE4jQUmYzgU3i6Eg1ysh97oYJbyzLyAXuGAcnkGYF7Nq7fhZRg8sLnpSFaYYupfMtx8gkkyxU2iv9ZBzrEY7",
  "key25": "sjfMERSEPwERtJQjtLrJMGvtRPcEyoXGvp2uJXhw5dcA2kAuA6agPdaWWTZc9QfNRDqhsP1uibCyiBjX1iaorCG",
  "key26": "5infUuXJMAPyrkEgFnoPb8GmvYHAG3hmX94UD94wPTqf2diTgFd7MNyYjNV9qfHvHA3JXgrgmQ9KD1aJ7cEUCuLp",
  "key27": "5W6cd4V7MTsZUbbEob4DyMLLejqZVpVvSDjmiVHQxkyGpTHPKyJXeX4PVDFX9wBbWc93Vu8oLB5cbH3xSpRKKaNH",
  "key28": "41ono9UYsZnomyrWGrcScoQB5gmbCefmyvUF5TR6jjCueXLc5qnoPboo7kJdytS6SCqL7PPs5PjSgnnjFLYjSoQp",
  "key29": "9KmgojDrrR1JLxPVm5eJPBUdxzJbnHafrLJXnBExEM2thz6St1YgSYAz8eawWMUyPdUwEoe7UZzsUXKNXNfD5Ve",
  "key30": "XXTvkfNBWjbKSo9KHUFzpqvMPTTFEDL2mxH3P8xbwuYajGwu5nRNZHVntF8tWfzE2qiBXjwPmS6kwW3NVaYKmVL"
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
