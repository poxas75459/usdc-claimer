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
    "BXJKc85CHFVpjPfrErVTcmf9cd3rhyBtHQCp2xRAhAhNZdYVN9ztvK6yxCM3o9pGhv6J9PkS6K6Dy3s89xFVat6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qxNCGuh6xhHwzLM5nD7xfzeFGoxpmka1dpkYjVKget3NVrYMRqd7GQ6yzgLDytYY9vKihZ2bU5amQYuQhACFGKv",
  "key1": "2WacGKD87REv2wsA4TLEGHmcziAGMAw2UoPkHBmEpnbTHnKUyxANLrnGEJDuXUeVGdcH45DMwYPGNcajgG3H6arA",
  "key2": "4mgYXZ9FATtd6yPYByP6k3SKtVsVa1ParnPT8oieYr7faYhjNr26aJzmVgmVJUkLp88T1mL7vyJgTf9pwJb5Uk8E",
  "key3": "4sXzFmApM3GAAJAx1wHBj37qf7jqi4CJ7KXEsBNUuVKFP7kELFNGg2Qr9XStkLJnSqCkmmGmrGaVRwueqXkGUW7M",
  "key4": "mEeMqHb8eimZgWE95raZWZ4dm7k5dDymJEDFN2Q9o5eAj2rZP1Q1moZjnEkTRzcwfnQaxvFJrwBS7b441TNhRM6",
  "key5": "4mVJ8eCy5WuvqouKeP4ZBhdGH3MK55CB8NYYdi6AiK5UEXKCiqJU7ZH6pQGM21KpE7unBMNFQzrFQQkEnxQRxKhy",
  "key6": "mdy7wv4SnJMdvjfm8b7bYrv4V3JGpTqyu8GPEipTWF13BVmp6sDLFx6GyU7LSUJWtTyzbcqJ8V7YucwtWFJXG79",
  "key7": "5PctYwK53ixonffAY1jgP8ofvSsQ7FE7gFDj58ocFCQ2T98ZBtxGJrU6ysynyTjH1Z2KpNve3fQjTZxzPodmohXB",
  "key8": "CKy57vvQ6hf6cdf32Y9XQuXqNixVttdBPRNobAVRX1Z3H3QZFoXQSds6iyeKF7Pj2cqduSuE8tZnLUkk4qGXXvS",
  "key9": "4r1QW9VLz873BXesy4goE46wwD39fqTHsSiP9kjQSwe4UjYoqjtLdkfhnb8ZCCTjk4EqG2xYutd4uF2WSwkdFfQh",
  "key10": "4ErbAvMj5R7nSH9yPUTgeAjYYjRSS3cnWdkSdr596FTJr4fFL2uecLwZKDo4w8XhPta5qiWpGybetyiSEJcBLTGS",
  "key11": "3ByTGSWUQt3x4Ue2fCiCgEigG2UJPgQ1yDYeJfch4dGiJZvCxhKs3H793mp8JBfskJYhRyZrj7ZipEirxTaE9a5p",
  "key12": "39ToE2hthoPPvuRbnQSbioHf34VFFgs2d9PCsLBncMvotjeAoW33sfxoNiQAYgWTf5dqX2xN2cFyTDuWFdX7DZc1",
  "key13": "5revUFYbVLMwYc1PXt9GaPyduFzALByY1SuYGD1mmywpKepYs5KNfxhReubvHprvw4z15mViZwNsE5b7X9mL8Bbd",
  "key14": "2SQxHzzWXnaVT7dBphhwy51SKfAxBDL1MtAYhzayXLdhe7LVoEAS8RU4MwMvGLikZYBzmmys3JDwsxeuDaaYqSAh",
  "key15": "528rWUSzrVs8a4pkpfHHoWikhhQqGzfur5x7xmdHJ6n36maqEg4PYvYzV7KJEv9GZCGPRUCeBBg5bbemZdQz1kYf",
  "key16": "2gbU61rpiieDQygHTLba1awesDBwicapnJZPey1dS5H8feB1vGY7ZBuwqGuwCrQ2QefSZGa6ovXMdrmLvPK3qPtb",
  "key17": "2rVrpidTJcjryXZ8annv4uzdB5cbFZAFwVx5CDjxZ6dFp4FXkjWqddhsUP7zXQnY9zHczdS48zbJuV3FLidUAN7c",
  "key18": "2bwPXWD5GHm9ZgG69HbycuifGpPs7k3EgSo32SRfWaKg87NwAkHhLE2N1ZhFD8hMrLxqwwvxXJqdTck76kATTQ5B",
  "key19": "3uSzvb4n1amVx5xPx8Aqwuv5K5kf2WCK6XRbApezpb6Tv6tWmBWA16Wt6utasGu6G6WfdMyekK996suZPyTw3kut",
  "key20": "5zRYzWrW4p39NuWfAt4TGk6mc647fiY94v44HuZGAJwjntK8dY2GVt7gUcpUQv1rKS7pycDe8A5SiZF5oxtBm745",
  "key21": "2bszBgTXToERGWsD1EksV1TvTmvaVPGaM9tin799TxvRQbe9Z8D7921YH2tth5eBJayznbrcRZ379dR1pm4Ec3P7",
  "key22": "3TpCCUAzcfHWqfWtgTD4dWNRCoBam3KJeQsi3D5wxhuPyycoBm3YP8GEAFMA127qCzy6WqfDXR7KcN2n8hxbBxaG",
  "key23": "51ZZ32nZMR9qS9iQK21KByML39yuUMdaRWJPhYEwjpiTFakaQjifs5QvRP8iWTsFyEjbbMqg2LJgWjrAt8kaGwZm",
  "key24": "2cS9WGnJ1G3yGAD4ZqPWx4Sh8Bu4Zcb8A7bFX4FjUDU76sfaFEBhtsS67av6EZ7LsPLA1u6a3FYBVqasfFcMfL6k",
  "key25": "kh2mUmf7pLFqix9LBEFM8mDXTJfnjQ1CQ3FzV8pLEowkZpXHWeXCteMT6p2XdP5TNbk8FrtAW26TpfG19AHhKLJ",
  "key26": "2wU8RQASGoWXx6xcP8HksRKqVimw5btjDiC3LEsi3y4WzbJLVv16238ZqrkHFXDLMag8qT6Es9q1VCgeLqa6zGQZ",
  "key27": "n4uh7Enrehr7qgsPnRg5dweS7eEqLyejngnABjee3BfLwFtRM6DosynP7BBWtqJ1LL8mVtaiZCGNn4JmDCgwNW1",
  "key28": "5MiGMdAD9d53bu3TEQ52eGkPo36cN15hiMF1E6hWF2a9Jdc1dBqtBUou6qNQqU5VbsT6jtJ9xf6nt6TQJTzDA7Am",
  "key29": "2SdXwvBAxBW3RwsR2Xcu9Vk4Aw7XPa3YZNUxcKhdSAz76MSUXMXJ98MnrJnm17ATFDSGjRhhafwnyJtQQsXakG8R",
  "key30": "2jXLkNQ9fTp7rBthgM45U4YDn1rA5j3ywnWZd4tGa4xwmz73oXBPxEXJfpwkNrUx5Xq4erEgjmzCJi3Go7Rx4wAA",
  "key31": "56gWTHLJ9D5AmWD1wciggyJ35VEDWMLEvNXf6YXwMh54XPwNjLuBzb4NMRCjXetXW4WGLmb5gEiNXqZL3Nv6CqFD",
  "key32": "ZkkxLquduWPCLsBRLrDzySnLvt5hAWG9x8EMJgfesqeD7WooG1vhtJZHSh1GxEmS8dDLMLcE1cJ3hVp5dCQxcQj",
  "key33": "3f3vfmgaUyyWiKZwYZXUiiAUDFBrzhW6qWsy6vAV5cgG5EPAcRRkz9JWo5YtSzCe6Ackdqi5emWd8acxTPEqY4VE",
  "key34": "42XJNN7dZ75FPk4TmmYd8PGN1gWWgFSR2T99PtkJ3CYhK6hffuoriPXynkLKu94YdZS7uXzYXeuCmkUqb6DHM7eY",
  "key35": "3Yq6gnD2pH3F5VnY9FMFYVc41eGAYxytpVozMvZX6sYkJ1uqdJqfHWmvrj3T7XYtgUS9rCNYMYmx2QPN4XwA6bng",
  "key36": "5Bzjw5GSzVVW6fSdEnJu1Hvo22CRocTFoUry2Fxx8rJU4j1QNfzYhNezVjyCqebAdrqo7mZ7exvL9xFpxPW279hq",
  "key37": "3kXnuUYF5gWN5foMxpiH2YqBckkijWpjBVY7q4Esj2V5uAeKxWBpyureEaj8ReLE2saT2UpkKZAYj1D4TyxtMkvm",
  "key38": "5EvjLN4gTvC8GfVZBXSb9q1jT3gu83gecK9yzBV77f7DbCwdeLXAbBkyVg9AgpzFrKvuDfbsnm5qvnfhnRFmKyXc",
  "key39": "5SWgazAdJgRTGHwE6ZFURVwn5mQcuVYNexmHGS9JqC66JF2bCCcZ63KEcY3irTbbaFPGxNMuYEJ7JJeW6aejXtaJ",
  "key40": "WvkrqSaQEmhPfDgN6jQT4imRnbvDQXeKAVd2VsuJRdnZFaXJcwjiAno4YwLnakMrZv3hPLzaHL77opWgXfW5vKe",
  "key41": "JAutmdrWoCJgnejw1WBXsV9v46hsTb6RcvZpVNLsQu8cjsZdsL1XrqDXv8TSeJPuPy9kFdyAzpeqUSVy84S5TJ9",
  "key42": "5fr8Y5Nx35n8c4vx1MLbseeMLqWDQrKkJ8qoB9zPJuLBBhnnnQkjYuFfo7hAuU9YtpBrWq9QcYfY6Hb8a83VMSRs",
  "key43": "4wapLX8KDAfpg681QW9n7iPVm1gHs83jSruvNsTnATUSBbVb2BUsr7e1jwWhXQLJzp4GX8LK4icwyNmm5o135MEz",
  "key44": "4rCXHsrXeMDWH58u4A2bpAbPkbsAStNMj44Ek314dBrkEubLNsEk4uz8obNnGXXDmmieW59xud1mCrXiwx1WjtQi",
  "key45": "5wiVJdTgszaMpaumHxJ6Z6T3r1nZpMZ1EDmTfDmNu2sXpCNc4qCiV6XxPEmzrnYceKH4R1bH6aPybzJhr2DwmmvN",
  "key46": "3ygsG2PE9yZqk2ynmndN5hEZ5WZtvi8UKqnA6npPSqAzWykbRYqRujV65VGpuHdobZvq98u7icWwt68nGpJa82G3",
  "key47": "3W57kDGHPLx3LAtuAyoBnuzZhruWLYbttnAVxR8kQBxUFyHv7vjedKm5cTMDPcApTx4raeb8TepPffxd69rjyUa",
  "key48": "zzfBxedfHf4BAaTPvYgyHWhkG1qfMYFe3Jvms2yEtaJCKzmjJX1QSzP4H6XQxsMgef4juHZYeAzUMWEUGmwaEQH",
  "key49": "jYb2SExjvBU2jThGzQ5fE8RyfTyjy4DLEN4TH2uUxZpDzho2rZTQWm7WaMsBXD1R2KEaRToKjAxxPBgKJhVatPf"
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
