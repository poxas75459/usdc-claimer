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
    "3r6YtsdUc96xqrobja2yXdQL58sUak9bN68YzxLi4DvaGQhCPxVMZWopFKyipqmQKyVBLwoenp1GPPvnmogsKPUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zkZF3G3FGzGEWBwRQYnDVGUxXJFmteLK1AcvqviL3UJ3S8s8qe8UY2qvdN39tYnwmQVox3hwKP4c3fDM2bB8sWo",
  "key1": "cSrEqPQTAm8EbmDGqWMXSchJBn5VRkLu44mSKnMQgp9eXBCzZyRLAmcKKai9Yaw6DuQ7ZW96pQbPNMERuEWF1sz",
  "key2": "2CLk8SD45f2WEBaF93m8KNiNurAt8xNDMkEePy1LUNMCnuAWTojMTVdsk5j2ZUKbR4XDtmcvnSxEuDdBXUfMVgxZ",
  "key3": "QuFapsrFbsTK6uL8D7nc74pWPhqTNsBCnG4rGqBA2HeCHUSA4zHQkkHAExRsTjtxbySLdiq7WPKHho57hoYpxLx",
  "key4": "FeeTqnW8i2vnwpEbsGBhFhdoqPb96ajtJREX9CXMDtzPLKogf9GakQqQzgNh6ezxDoJQk8BD4DpZPTjS8bBBRwd",
  "key5": "4JMYHLG7H2w3m3oNz3Pqr1gE7f2txPPNGsm1WuJhaopF1UovuKHsXGshQVqJSgPeqE6MnW7FNnWyqgpLab1ioNrk",
  "key6": "2qcXgikdwHsqQWtNipnBaVNk15Cc56ow92XbVrYEyNaFXsciHTMPKK1mQsim24ewRxt73pSNWwR6ExJYaTcH1zN4",
  "key7": "53u59dEGXHoC79g1QSrkA5xTwK1mxUp6YgtRTp8JkuKacJ1PXuSxGRoG11toJK9bDGgX4jZKLyHVmK679Qc3CMfa",
  "key8": "2ZqmXJfWEc85ELhMrM43Pd48CgDdkmYLP6qhN1hNouVRm6vbWRZZZN1PTUHFuwKCy9yuFdCnmyXHGi7hjJN8PNJK",
  "key9": "5XfkUsrhyHYanP8MXD9yYziSZYesj95Z2x3u2arXL7cT1whVq22fNvwvTGW9aPMwgrBhtortZ6THrRanXdVU93ke",
  "key10": "5rz73zD7XvFEVSobC9WUA4T5NAKbBWpywF574k9FacBjbjRx3VrBK1t1565Pa8myCTTLgbTNcyRey81BkF7PQzj1",
  "key11": "2vbGuWL5z38rQPq3cAmANwvmwyTVS1eYCAqhPbA4EEuLSryM23WxJ4aaZZnN37ocbXUZWgBhgLneqrDUX3CJxKov",
  "key12": "uQJuz7pxasBU5FmHXEU36tKgQvgPuWubZ74kvscvD6r924797hhNaKQcGFrWEdhGV4GgKnf2MNnXyz3K48Qkxs1",
  "key13": "4NUCvMzgGTfCNhS1c1WZhUse7EJc3DyhBqMb7RM8ASgyouJ6GeoQ1J9C23m4kn4t79gM7pyBCAPy4wxcv1Z1aSVa",
  "key14": "3Anwfo8tX7hP5y6aZmyKmSTtsAxgHCz1bQGZqWGsusMJCnQCeKCKY9rGUjkMC13JF8u8UUb14Qixnz8beN57QZcx",
  "key15": "2vWKv5x3HEfBFDYQHZB9ryhyguahvD45ZVeRS6QaTgcjUmxeYTyxPfus5cjboPkYHT6v36WjLu6Lst2zXUgq2Caa",
  "key16": "3uPGEQngYV791Ny1i6vESGgQr5DhMmS7YgJS3ZU5x9AVz3B3VmZHSSJk7q3jQkXJGHDCXRoMQzLBGW3NBtATDtXV",
  "key17": "5YqKjRFzPiRym1Q7ZnggFoJv5rvJUmsjHwjXG34szZPkXUv8BvZmoxmzPAtqyUrPWABSNJeUcAEQLHLYSYNehR9M",
  "key18": "3QWS3LHiLEETWhX4apKZhuanTVvSizRUkNjRScgwELGNhd5NtkfGzqKfEYZD1bbLWVMVgc7HYM5kcTveQRCPyEsh",
  "key19": "4CcMNif7CfiRy7xu9QYK3A67uPeqVktJMSxzP1Trgrp3LphSdYt82xJ5Nn9tfFKHmmoxEJubwfPAS1dNv3gJAZa4",
  "key20": "7bTmAyU4F4uS1n5QoXiuqTrgMsFkHZ4x82dYw1BpXi5rqjW2SVe4xdtoXYKUoFRFkpERcLm2Z2J4ScVy7kxxocq",
  "key21": "2kf4HKmqspxs42fvESznnNA5PSxY8WViC1vAu5LTCyG6LpD7D7nzaw9RHFaHft3nXyiBGc9wbY9iTzprGZqo6n2n",
  "key22": "26rC9cRJNa2TbVrAYvQfwchZUQGiMjPb3Fd9rgj2g5Cb2mCuaSiBdEwctCn8jTJT4kehafwXAoGWQY2qgarm2Gep",
  "key23": "35tPoYEQXnfpvHXKSKwna1G5eNfdeDhtHFPVje7or9ZvK2C5FXFGoqCRmrvjzUDUtQUVMEmRxaU1ogsSx2bbVcBq",
  "key24": "67cXugyhNZLJkwWF9DTyYAevBQaTcacVaUn86EogVsikCQmLPX2dMo1cVVv7vvt2HSaGgVLTsdxvc6iccPyv6SUb",
  "key25": "2fn9prsu5JBtxz5MJ1xiAadCRiuusxpctJP3GzoUSjihuC7uavwaPdTasv1xfbz1bTjCZQKqEwcE6z5qcNvt5tcH"
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
