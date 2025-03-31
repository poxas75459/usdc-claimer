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
    "XRbP6LVje4VsrZY7iQgrQyoB52e6JyMZxwx39PUVGL6SYLK8KmVqZsw4w9Lig9oJGbh7VH7dbDBjk2jvofJXsVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQXQE6T8nd1ocP4f1yNH4541cEGioUMPpuQU6hMHUmiftnDjxAMHur5ocDvbyjU1e6kRaWPjE91dM3dy2x7xk6p",
  "key1": "mg66FbedbvQG8MG9RF4LxsQjLYzbnkBz69hEWWQZT5xRXtWRqDVBmTeivPTHHRhMmHyCNue7vXViKNABxNYcsUZ",
  "key2": "5SdW6ntgrd7PxkGWJJauXoiQVu9HB2qEhXvcH8YnJnHr9xnybWnmhVsHEVV3dxhp7dLE4X1NCTfXzLshXASCGzFZ",
  "key3": "7FAbZyWhiMmvyLptXpT8kCy8LeAuc9ejTMG5pMtKctvw4epVDBGhwYUp42EUXCQ4LLAhWoUZRwijVaSevED2Bcb",
  "key4": "5fTyiFykGYfcLkCwHjqnNrGQAeQCf9BX1VozbnnRfMaMha5U5iZ1v4CATeFmDwEMREmjTE4hKpe3YgZXSx4yD9D6",
  "key5": "4mM7zBH7s5wRnKsqTCsiPMXTfpyTQbaHRuSUFaSChJL6bzgegoyKAHSxqQJWnBLW8ZNqu3Hzq5GguzKZG2vDBq9u",
  "key6": "5LgwgUsUjBtKZvELcmv9WtwqNkc36Ga2oehbZAaZbhKSoBD1ibgjJiqnr2NnWw1TKLtspBhe5iqT3nrfW1veANqt",
  "key7": "AeaunRZTBWqPYN7TKnWouLx9BkUyowfyujHTX5m3JcwY7fNadQrV9L2dfw6iZoZHGqzmCpK9c1HTzH81WH9QNnb",
  "key8": "9nMk9Sd1ygkkdXZYPs7sPTzz8V3DLs2hmdLEBk8EVcwgf79YrBTE1CVLdxjNwMQdV2FxWLmpDSuLurxGK8VfKwu",
  "key9": "AAAfSHtETavzi7yLzstmmQVLkSoqNcStrEU12XGohucrwvjH2VML8cWK9c8VB9QYhLGHL4FkA2o55VYs79fjWUW",
  "key10": "5aDnoAcRoSbkEjNXg3qdXsBLgeAK6gzNknduVL161XuYRYtfX15fA1EyPdr64GZGD3oL9VmyWJEufwNdEVU7nrhZ",
  "key11": "ed9GG7mtBNQXYbN46tRGLnF5u8xpFVGsU7GsVWX7b8QVGJDULL59JaoSZR7DsQWqekvyf1yqhPpqydhtktaxGaT",
  "key12": "57Dscwi2xXycQGchYZ95Ys7izWGeFNdDX5MFJs8afGniUtYWuGduHNSJRyLpv6MSWtDionWBg2dmFDCrJ1NUzLNo",
  "key13": "3cKCNsAxe1B6NEV5ayE7b26pMShoUWEPras96zWcoKa29TY3hhtqzXGJGVADdorW6sxmJ7jYKo6NCemDTAhwxqSQ",
  "key14": "5awJFQQRR99TQWNe9d1imPnPKLCDQYwn6kWMGzU3Tj4JYYSsP1jYEjo1dV2SFcZCvicC56KhdXnRCM4xG1Ks7Un2",
  "key15": "5zMva8LaE7Fc4imMPKnLMMeJZi13xLvmjgZbhKQ6UHHi3W6Bzpz8Mv6c2zY18FprW1XRzVGLw62XtyexCUp8nKMy",
  "key16": "38NTCREDm9HNBDndMehhKdstozR1QC3qT9Wb1kfCZWWE3wCZPW6eVW1DousbC47C7XCA7bC4jUzp8bUZD1DcjDwB",
  "key17": "26qef84Zzw3Th2tYyKShFLWKGNTfjtD9r7kRzStXyt8oxC8TGUWtEeg8e14hs6qAAKiFCnguLfzThx6Xtv9v2Grd",
  "key18": "5zVrzUZvK74KEWEU4GQxQiPi9LAnMTnox8mi8v1SxiREVrWFqqZzWajimwzJp8gsmJbcEkUrKq6dQg3Fa23gq8ny",
  "key19": "242C6tgvAHvbskaCgWABSuDFT7Uy2kxaJcRLJxxEofaLcH3xJirfcVWFsVWzyt2jrRspPKeEPqoHL2sGJ54Yyu48",
  "key20": "5STatFoGeBixNyF5wxQoTPMv194FVwi4yuXR7RynoXVx2nGRK79eEyxjTCG6digR3H7jk7ZbpUbs5p4xCeLLJo9H",
  "key21": "2eLmGevcQQj76uUsQQwgHVJvp8T93DZ1uyCgxNDfcue5gGgSVCpxJbEZPcHFpDpL6Z9buLAGK895A6LK29qr9sow",
  "key22": "3BYDfEBWFeScq33EngU9pjYvVmgca9vKHaY6MYG3KtofAVQnHUf7ETVefDDZgq1e6o2wfFGEDYGT9jhsfUkP24Jv",
  "key23": "2TaWT3xxTj5Vith8xN3PTN6idc3BzerWp2LMgjUH93km8UdRGi7bAPiqNJvJoX2BhR3XuUUxsFrKwTnayrFP8Mar",
  "key24": "53e6fvnmwph6URaiszyj9MLJHUtRtYtRbBEaPkgCqYJgPGbEe34xoVeAaJdeHn9UP7UN4qMor9bVdHVwnoPXCaQ1",
  "key25": "2Pb76FtDkQ26FY4RUHdAZSZ27KF8ZkmN8gH6bYEbygKSHeuQNB4TfBLmLdmKurRRUPFwwqTVgTTWPmoF7mQgpWUj",
  "key26": "59QYyoXTR781orwjr41u8ik7X38e9r2G6haRvF9sP3wMx7bxhi7azAXWdHr2XsRUnBKsdJdJ1TQuXpb7rWUagGqq"
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
