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
    "5BJqakbdafmjuu8hj2Vh4UjbH8s8MYNGfkoA5aR2rjSaQPTgi74JMDDcEWPc5ZrZpzAcbuXyvpxPuAJXFhjGG8Dv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cuk2b1FeZzHKyodFeHRBg1NJB2KiuQXjd2LFpBGxGiVfAxRBzimgE4CwaTD67DEph7LY6NHJuJKYx4ydmDfuXwU",
  "key1": "2GkEHqDzQzAahpxJCgEKxi3SNS4UujZvbzZLYK1Ne4PGrebNPLCDc8WyVPBKi5rk6ueAA64ZCXai18FyoTFdcPwR",
  "key2": "jvfiHTqdaEgzqidR6uo8srQF4AwqtHdM6RWdPfSGkn3ffEXnr7DbuyjpcoSU2AGBgk5dbvMuXJH6qhLtf3ty2cx",
  "key3": "3NTkdFF1Vs4AAgLUWSupCQN5cFLC2BLF4FZqaxqE8zqncqzukhkso3S1CYvKWdpZBApdEQbjBBUXdeiABimoycS5",
  "key4": "29ih4tb8mS3gZ4gZBsch7PDuj7vcMcpfFvjx4pwMMQocYfQ4LwA39xgaWA9jcpYEkugAyJSdV5XGJxsCiAwveuJ6",
  "key5": "3kQTGL7Bgk84WwomsdKQXtodjEyJADAtHuw2mXjhsfNBeVYpB4ryjDdGtQPtt7wrYiYCEn8mU4k1KK4nsW6HcwHC",
  "key6": "5bZE8A656cvmpDmSV6zXLgAXNxro198Tx7sziUon9fX1TfKpHTokeqS7dZXV3Ub3nqZdMtA3sZEPhwSjpABaH6dD",
  "key7": "4nKJkiWg5DNGMye4BmzKSAGe9Za47fcYKEiTNunFsHvZJ4z3heiTUpqhZV4vLrBAEn4EjCo3r4mwtSNbBrjaV31d",
  "key8": "3GVfFdq4G8vySeMrYsQRc7ag29QTa983KeTdSAAp1tieXpXeMYAikCbtJPfySW4dcyKwzx8gV2N4rxXs1wkzUwVG",
  "key9": "3e6pbnZYxccdfaKKebFtYSQyyAx3VhMYNZFmRtyJzMsgNh9XKuXuPR41phU1abNCgUFbagB8MYyiWMjvmBs4kekB",
  "key10": "46FjNS99JHbZ3mjNEmFsNgQuMZ2TLuWQeNrySk36Aw6x5LUSzcgyPtG51XyvK4HBnyAKpQy2x5RQQnwNJNLfSwNq",
  "key11": "2EuEzitNNESTVNNGRkoFkDerm2MoDxucZpJjVC4quPeankpmNxFrbeBxetp9uyJEdp7hrSZUySPLoZMgy9zV97pU",
  "key12": "5GgCfdbxz4NHMuiGYExr4gHRBetn7ZU9WGNqcfjbbTxAHoCi2gfBsBYgLMisWaKJ3zXCm3FuZZJnubPG6WL6xpx4",
  "key13": "45qMR5ofwxNCBe27PVgsGqp1bBJEJ13XkLebG3fQemdfzWAkE4AxpNomggJrssvcjnX2sWhKH5EAJbVUaWdqAQWm",
  "key14": "2f8mGDwxnwvbguntN6T2fUu87W1Bd7aRW9YRLv5mcdkDMHpp3D9BsGqawBMzqmDo9Q88yRjW54yx5WgRJ1yVNza4",
  "key15": "5cZ6vyNZt2D2chUVZZ77uk7SuNTK7UMs57Ax1nHwQCZjCXY2R7vboPTfvwfwnaQJgcz5SXoxEMahnfcXTdxjYsAe",
  "key16": "5UgB1THkTHg5mTQdfkrPTKTR6EUSK6feRKHmbqTsbYnWvmeMVg8NWgi7SA8tnTdurFYQ2b892MTuVvtBonRhcDak",
  "key17": "2Q99kjpPssfSaiVNyThyhMm6nYqx66db37uwCvqfQ5Hd4EPdP8DgKFi7LfKcoy7naNrwWG9KpY2oveD5dk6JpdNt",
  "key18": "QMaggbfhgNyEUPeYqZp8HyrzGnZ1jpbwcLSgmnduwMZu7FFuaFqZc44f5VGPiTvtRyguaBJfXYj1RnKpgPwZ5vi",
  "key19": "NrEgbqTJtpHta99Qu6pbTX2qpe1yPfx7JAKhCHJCyi4SGDGvEZ49wtZ5NwJ7CZ9HNzHuinXhnX6cgH2wLpSTc95",
  "key20": "5c4oQzwuJresPuVZgpw43n11qEt7SsWn99gMYB12JmskTWn3TEdeEjeQfPQTaokZRDkzNUSfzC5vs2TWYaerz8JW",
  "key21": "H5CRBKUgEgeVDWaJsnp7wSVdJNTx2gUV5PxMaEuu2hWsz3C28memQBLAVCaScEmwufWAUwe2gKXtmBnxajZozXi",
  "key22": "41behykh3caUJovKeWgqDrQqufBfS51qshPMMFLTWfF8Sq19HRepKaezWEb6bp81pziAt4UMKuHuU5iC95MJVLzf",
  "key23": "MdpQr3rcipKiNFbfdtH8jCbELjbWHXCnCfSaNbWNd63ZxJpngqjaw3GGjN2c8xaabZA7ccNu7PUKPjEo1KDd8kM",
  "key24": "2dYth1YAxNipJfb9tzaLBtiQYGHu8uskyvee2kacy3KxejkneMV2JHYtWxQwixgTTzpB14ncTHzVmY2mnSh7K7Gy",
  "key25": "246oUwEhHVTQzn5xCynzPB91KVk6Xhw8bxQvw9tBjcmHbwENsUzQYtYCyFVL43pq1vZfryPiGYwJaEkT6C22pK2h",
  "key26": "2i9B3vByuxdypVDHcDAQmRNBfeRnuGqFN56froMTLtat8PVEVPHNBo3AAiX35nEXjk1PkpUPjjM8TaCf3xixoxME"
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
