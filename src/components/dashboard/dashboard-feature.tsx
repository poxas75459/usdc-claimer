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
    "5hQUUxnnjjoHzXPjRjAnygjocAnGoaMkWHJhqf5bfiDy1PjiuXU9mLgh4B3YYaqSLDYSLtaMjWGLjC4KnyhGc1dK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wQ6WU2HD7wpiLEYbSYMkETdbLpg7XhGzdhdoFigpn1XFHVNPijxsSx5bpzN3nZHRjpYhoCb9diRPKMyovk3s38U",
  "key1": "411YRjhem2zZ1tnr2uFMznvu4o45tvY2KtZobqsNpK5VRqkSXdjhb9HoraYzH83BpGDPJBJJzHokRHHW7X8UzgFf",
  "key2": "4FGfgwzzzDaTCg19FzQxNZh3k5EBGDzkY1Vx3A4NjRqv3iHUVf9z3KFw8FsmXbZXxmk1Cx1nU7RWSfmgPndTtbYJ",
  "key3": "646BczV1DWnxaJ14F9x7NA6G8WBHQhmtxawYz6dngxWnnmmSPdgcxQX9eQv95RLijCKGKtVCLSF29tZn4iNkZ82M",
  "key4": "3S4Y7yG47Y25gspSkiBm7sEVGSGRpbV579nrhYHbpzMpDckiLgmYhX4mBfnwqyuPm5AXjmgyWRXGe17n5bsS75Cy",
  "key5": "5srSr9C13pVzkvNhnzm8cpDtLPaVrobvNi1JVpgEsrh7G2ZcyM72c14GGGHAE6ggTuo7cNGSXxJJzqXx1VKyR2MN",
  "key6": "4am1mDV2uVy5hRtzCquW9dVkCdcxt1Giep8tyGQzhngDJBxb5WKYwC95eb4viVmdZaaxhmUQthG5qJ3xG9mjrMkn",
  "key7": "3teVtp586Z1fCjSiqz3WVvf1Nc3c4VEHLgty1SQPYHN2cqKn1HkwbYgU2ytWtSQD2EynBYZwPr6h4Z4ry4sny4fU",
  "key8": "4AiqgjFGHuv1HQyPJMSo5icpUmq3XAkdLZMjkwqV4VxCVTKUSa7q51EcRr6iLmSLngGq4wkUMhsJwbtddGh9eBAP",
  "key9": "21EkNKvQdMU3af3DsmE4Chj1nCi8sLMaYrxzGdbzJmSJPmxUzPjyn3L2YVzDbLEE1N1TZB6Jjfi7ESuGvNqtHTxZ",
  "key10": "39mjK3msBpvzPq3HqY9y698Mrxp61YoR861ryCwgBxeLSfoWDJ7TcUCP7QNHdSTCfAEDcoDK1Gnv7mcMthK5eW7b",
  "key11": "3gVjwmxBzrSedD5NVuNEo4jDEsf67yS6pN9K94wkP2B5LChRZef4cJ7sDY4hR6mbbgnC5X68er5tzVcvYSmhGncZ",
  "key12": "4hGbtbMyfHxRs6tvNHjmUCx4BjRU9mo1r6Vw6uXgZqGboEbbbirHD5wcHvwECgM9CjG4U4JugYr9aumAoQDDbgzF",
  "key13": "59e378vyYGXjHjT3DB856jUfoWyo4gTQGZBW8aR5utKsiH85o9NmdvLejX3pPSTzukerzEaWWrHp87VkquPTH9La",
  "key14": "3FGdmykV96NyAbHsxJ6Y34ZHQ2Za5AseDHxmTY937vhY8vhekeSujMhW5HYXwKUHT2qPdCcvsGRAX5iNwTDqNzhi",
  "key15": "2Dz7jxeJk6okxojrSmrJn3g7M83znsQMXXiNSWnWxbVyy9iB2dHNtmb86SoKp1qZFNuM6RM3au9QnniqUA4WavzW",
  "key16": "3moXFm2zqbgSWCjKZtxHmFc5A2QRt1mEteyCfJHYRtfojwS3phZpLEWrmtG8Ex3yaF99krHDhKXAhnY2ZfFiHwvL",
  "key17": "4TBkbbGPhyLYfjeWksqqVCM5z84VRVYo6s2WUTAgjGddGcXBMy4N1pZzdPuEBp3iwqs8iBjxBLHxqWrULFpW7uU3",
  "key18": "29TEpSAJo9ZABbXXsx85H45PSWB2SHL12UkiHyLkQxf1omJXSiDni9Nn9D9MjEJbT3D5vs63EW1xa4kHbc8XxEUS",
  "key19": "3zzQsu9txzeN1xVLrwdU48C4D6A3PPRtdkatUp2Jb9ih2hDHWUDCuR6bRQft3CdXPDtGDeqtkfL44fKmj4q47JwL",
  "key20": "SELyVtoMEseZVZrFmg1Y8ZJzkhSLJ6Dy1MnjxzhdGuY1bBRRhPxN6YPcMy99KeNcm1RVNZVgMpnydXLVbt511ZL",
  "key21": "3j7vB76MVe6euzHTZgQ1qXPA9oNaSZd6znreJWBgU1VSRh6nKfao2XH2pkRNkxk16YuspqpsEXp9tvWehGKuE1EJ",
  "key22": "2uGhyjFJHYyWzQCdp6JqiCGcaQu9BGNc4HhHeiEYsS5SbsUiFwTjuLDFTqdexexGe4A742xDwDJpFrz2xTYbi7iU",
  "key23": "41QSnEkzLYneRAfaGkrUaQVvSucWJBmSM1TKj3os8DdpNwUHcgHsxGa5zH8GDVKphvDUNheDL84L15QUKXvKiot9",
  "key24": "2y4qLji4oxCzR7fP3kgK33mjhoTpjEHAsnhorekbMPtRwecsb1Yrk7wpAigsk2eU5axo9xUzr6fbTzTUkhptU5g5",
  "key25": "4r7g1GKkwkKvFy3QfssC7FHDZfiWba78rS137qzj6DUC24XLzU2vkxC1b39QqYfHNVSHvbaXUnKLruA5mgCJfGFN",
  "key26": "4kZsVHPJbaiBJ2jwuCPaQ4jCGhyaRmzyzkzbrQEhsE89ebe68N18Vwe8RYrff6P3G94T7awH1Y181EnhribnRJWN"
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
