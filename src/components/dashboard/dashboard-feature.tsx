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
    "VxVr3ikAafNfKkpcGnef5rWT2CtDg9RU17QKU6rnD7gLVq4pLyfxij27TpwyfmXDHwWnNveiU4Bafmj7YD43ER5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XepKCNPcZg6zVm8u3NkxZ2PQm6dfsqW29JyRaMqCC3be6rK6BXejNbh7HLV7n1771ZnpzVJG8Yr6L9Bkv8xZjj4",
  "key1": "5eHhmU1D95z4LaKdxyX6SoHFTKPVY6oBr3keY1fVgK3zi9ygt2MZewq7B4dvGxKUTF4GZ87xgWVtxRdC1myAurm6",
  "key2": "3GdFQ3VDRqcNkHLjrCuGdUg1i2yDf1cuq5W9RXsfr4pUYNQzM79yap5hXuh64esHoigCRREmnrMKBV9Y2XaFMXk2",
  "key3": "3jwFRtVfJJXU2E2j38m6xinnoqk5umyvokjAGk6AchUkZHDWFUj9i5s9LZ3YTUGAFCYL5obA3xPdia8G2K4uE9x5",
  "key4": "L4RG2UEcR129yYjC6Jr1QV4ndXfq6vDhHbi4XPrdnZjNNExGqNKUpSWM24CfxzRF4gdick8V1Zb8MXvAuwGbYEA",
  "key5": "5bKGeYfW56gesDvWJRgmVBQtdKFGfUmwC8huYYSM6eFuFvq6niQ1rvB3Ade8qPbWL39az7ehzWexmZWoSwCXbTVs",
  "key6": "3U9ePBWFjHyoWiKWjLmXuQBYdYTevP4ZANBccx5a6dnxzEmRD7QfRViE1aM3mzer4c4ABVybDq3mVT3zegdxUL7v",
  "key7": "5aBNQW6don74QP72BGB7XarffVCTpPtUM8EMq5y7wreAXK9E7E645xS1gVT4osWmvqb9EoZ82engtkF4v8UpZ5Lm",
  "key8": "4LGx3KHLFKaXtcQdYuuviNfY35FTDeEnoyWf5xMfHmv9waRjcsUYmeaQ5PMBKyUp9WZxR2JEpGEeNXpCuGjFXuBs",
  "key9": "4ivsCwTZGditVgVwH5gbYsigKA6V3iCX62htywPUkiTzpczT598f99F85EZeV9FiHt8w9dNTpF8BSHDcJYuttT95",
  "key10": "4DZzmD7gYVdFgixh2RNvyySuKgF4kjE5AQSWkZgG6CbEZThLm4rWMNbPYHD1cBnAxCabfWVNtzcpUh4GWjf4SUy7",
  "key11": "5LceggBcX2razcqpNcpEL2S2XwtUzJu9GrxqUz2EaBiRnu1bhst8WDEdfhbZMpdM5fpLuLeDCmHrrqMKUBGCnvBY",
  "key12": "2XZJkGBVULSrMWcpzA7xW9apzpyc6WKfQZb3Xu9dYpJTLJr3Bzs1XVXPfiWuJfoKK2gLQix8GYbRPeMqDVjhUUV6",
  "key13": "43m468sSB4wKssZ4LhFybgeFjSD5NQkQt3Gr1nWQNwvguP3ExwrPTh2GkVM8xkokjqRnNS1Vic4kzkyfgtR4RZrp",
  "key14": "5xioCGFjRtFK1VCYmqfwXhwC4pXtmVkC6RtH9PKMJP3XoYuXXvZh3k169Ehb8B8kdLaytr2asrswCMasVSjz6jaQ",
  "key15": "2Lxs3Bwi4UK4NUZyGaejuRYGnr58nExz4gZZgqeEHRLofCbpats89Ee95tgTNWh9rManYEGWEiRoScVDYhUBL84B",
  "key16": "HZnybfzpppf427fKaJJubzuo2B8H7m1jdnqjYKcTHiYcNzBpzoqgfp2tSzV2CpkGQjSP4YNu1EDjgR9ZvoV8A5S",
  "key17": "5XYoCnGLLur1j4zK4j83fdURiPawp4hwcNeiVhMf7hfnbrWZbpaVKB1zfFh9n4txZCSBuwcY6852oi6zCpcGeTCw",
  "key18": "MtLnV1ZZDsqqNRhkBwZtrXd83fzvK9FRcdpzrovjy8oRxMJ93srK3q2vQoKzRvXFH8x3UhqwtpyR9TUAE3vSKyT",
  "key19": "3jkcwjPHmYqERzfKCYtrhyYhBheqkyee9tZ7XS2zA17kbQeAPA7NyhPTSmCuz3SBgZSjZbokksdVLpiWcJNaM6K6",
  "key20": "22DbYaAF1roLdmfCHucsB5GkvEo5SgZw4RChxXi6T9EVnrtLPEBFhAQP64o1pbB7x53WwFDdz5ehYUhG9GPWnkmL",
  "key21": "3BDfvdGJQjLB7MrC3wioLQf3LFJz4UUEvw6D5f5SQVbdRDHuFFQE56uvBnaCf7YeSnspgVvF4sXox31LCTBtjxCB",
  "key22": "2537rBN9p36e8imzDiw2dAnFu7P2nMUFT8KBhPYrzA4GEnEEcYHGNPUgNoaCsPe67tmjWphbJ5WxY5atWEdSQVvJ",
  "key23": "24Sz9gKpLXVXc5CAfFHBZWop8hcxwrXK5pW1r5YmVDSp5BuuogWdTYCDQRvmPNFUa7j9cR4Tr9FUeLJEtgWbBpUJ",
  "key24": "4wF7Ctqw9jw9gpJ4AUvQg6AoC9AZVWpBFoqLNWtkxD2MM6Vb7Z6GNDn9nQHiV6BofBft1A6Zrc43p9sn98SCjxfz",
  "key25": "59YqQkCCkMxC5spp4nto6rU3tYaErGGdYb2A1i5tJjPMLHLQs2zADJhSSrDi2raoePmW6xetdL8Ts6Bh346fs7ia",
  "key26": "5uQ3NpQmSRLHhFVa1LSdSGgNUnrCN5xdm2ZDwdtkE38kt1FS9f1LRLMTvjeqViZrwtFAykY74rAqLaGo7rsUytLG",
  "key27": "qoDCxfaQz3EyHTogBc3DNAtFjrbWCcd3qoZ26j5jaYJHJH8sYwUv4n4WQWhUMYoHDQCndqhf1pqKXC54YgzdCpL",
  "key28": "3YnUCeYQcaRpHGz7Cw3WnsZqATowDWPLwmwBRoVg62rTxHYnmbQrNoCvFCXNDwJhERRpX7exd77nsKybLYBenLB2"
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
