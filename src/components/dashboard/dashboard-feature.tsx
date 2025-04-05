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
    "2JD1bssbr4B5UrmB2NvroijdpUHgS1v4AmhyFbwan8tmELApgAr9ReWy3ZEJEkFvE6nnaZYhYqmNhpVNT4frDdxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uoYhKfEVyZLCWfkaxdbHz3UrJNsx4LnHD67T3P1n99CvD5mDjyyJuHbNe6pXtiDw1uLaae24gvnK5Qu5Kn1K8w1",
  "key1": "3EjPXkZnD9K44nXeQf3ZKPmf2GTAchTiTf1zfHWYQty3qqSPzfbt1LRksmFaJzD72xHvyMY2PBZSMpYpnkzgrrre",
  "key2": "3hCBkd3WQcRECjbiwDpWgHVhqPBWWDdaRnTqGWdu7NzGRihYhjk2wAo369aVm7giEL4fSV3BwPUiZcS2hEKzx4S3",
  "key3": "SxQXmwgp8HzNhh74XTmaS93DG7VZcLyswTe8FkZzzEZimXskjMuf3SqySwrT8neo8kKQM6kmWqNoewC2HBMoUGC",
  "key4": "4Eimo5H9Q8S6Ss2hQUk5eFMFXdP8zG9fBA4tqbof8dTC13j3E4sQir7bHXinZasaycSFa9CqvBhYkaZnVpvJGcF2",
  "key5": "5JAtK6RV8429x6SfEgB5ArhWLhTC2NtwzqtH7mavPGpfjVxU7yYaKFHNA3NJo26gAznfYaAjRMFtj3td5mGEFEEG",
  "key6": "2g93rscLZkvZVu4Ug2xgTkbsijspUAyoTtr2JPRHFtccbiCTDk8zesTzYCzP7gRKj8y6895dUWVfSL8ZtrmKxDHj",
  "key7": "3c63oXd3YFq7wzA49HPgd13uxcpJfuFASz8o1yeiTvKm1ts3RfDgvkm6CV2o9L77Rf2oFsmuWeKd6vZXCN9SwfBm",
  "key8": "2MGikSjY1XTjs4q3mAYmdJL9NDKm8djZ6B4ZsQFrC2Dbr2ysPePKq3vCKSqaSNc5d5bkBFHgsmvp5qtH4bdkWkJ3",
  "key9": "St6enTwk6Gg6VbioxfpZ6Bm5YNgZkAT9kwB17TsR4MQHKZZpuRm5DdJQxxxXpJUpZqGo56sBMGDik9t4wHABMQj",
  "key10": "zBp9GWCiq2Cjyjh8ehWExJ2h3TNPkGrkfik7c6vLF9xcCawK1sb52KRQ6MqY9NPuJAHzUVTUeGCwqTfffsM8BWY",
  "key11": "3UK5PyCm36ufTYPDa4Jn3n2g7ycfCo7qeiTEphLKDVHymNqZmhGW8BjXGWNKk8mCLZBodoLcSLFYtmk1bb6Xec53",
  "key12": "3t2ETFrxAYFFCVesacCrYugTvQtsBUCNJjEeAjwEYYHSiRKEokX2EdzZSZEJyteuTykB4kNffgjE3YWUZd36wbMQ",
  "key13": "28LfaVhUTjZ7BPekqoYka49NyqirCa3JK4BY54MiwSYSkxZQcfP3xuC5yt5PhaqzzcNecvyr9zxaRHbvppiY5Wcq",
  "key14": "bbuuGjFWV59reTKRJdAtvpWvRKtCzPQvrpE22A2A88D5DYVM39rXhxuck3MPGtnqRzSsCsLU9A6NCmW47af5k2h",
  "key15": "4GLwbf9jNU8sbX54cXQeHVaSLXAyNv8g66xQ8zyxpEwB9mFTz6HZdWNNTmypkMhwjrvLCgdttX5LpRwD9R6MJnnP",
  "key16": "4x8QEvBnv79cw4RjqNEaeRpGhHs19NocYvMaPxdi23coX7JGghVRbJWKGD5KSeHNYQjbn6ydYo4bDRFcJLUqsQRj",
  "key17": "kMAwKfcP5TCqQ9zmwSU1aFFc7Ky6cK5mTomZpyRzwfmdMD2vqMjJjRtmbd85sZRZnypLkeZWdedUCpNfuWFyDcX",
  "key18": "5gvYAafxvCBXEbKUX7zfiDzMBy332dpddcNttt77pg2c25CQQ9jr5rzriT6ra8cPnJTKVYNq2Dt7iGAUK3AYQPy8",
  "key19": "3rBAx5n2ddMe7mkJfdqEdby5fKHZMUMiXnuo3ZdXevom2TYWD4dt68q4BB6A1abuZaxdsDC1KL8o8iAV7gqPGSjT",
  "key20": "4F11HGo6K68fiQV6weaics6fBTBKm21vm9SXndbnGaseRgLD2ceh21x8e1o2Xfcf9hfcxHhRzRC1Cnf4BmMCjXDF",
  "key21": "4HsWhtMybok6PVrTs7gpyV99gtCKfnJGcWPzADSppeiuUnjDhwqgSNht4Ev1AvQeAVWnusogxwMSv7chgTZcBJh1",
  "key22": "ZUuwhEYRoT4S4J9nv1qLp4X4qxSoVYphUKB5HkmCatZFbchSJYpTHPDh2RZov5tPTN9BevztmKDR6r1sTVNu8gE",
  "key23": "31y15LjtkZiEQCgbkY3Zp9AejLCnqokGrcWfWuWzKaaqea6ez4DJoSjwerMucRL1qBwEZK1bAVTo4sdhvytNSnW1",
  "key24": "3SAmZqtLCNXnecU4riMoM6bkdadHnJNsmpgRMJxrbHJgVcWbpp9PAFVua8NcGVoS6UuQUmzXM83dzQABQHUqrHGR",
  "key25": "64u6pP2CZeiMu4GyEzHh85GiP2ATrqD8Gs3Dpj5SWwepUAc9yETbWd6A7NXXEaaDGvYCjL7KGHpoYWxACQ5mkMkY",
  "key26": "48A3f7nYRbGFDDkCd6rDJEcib8EhR5x6xCc5QER1Lb4ssm2rddaHsQyUCkUWEWQiTyquCd5mSVaagh76tPEYb4fX",
  "key27": "cPubAAVVkXqFPAm6NDFAi6eASqmLq6S5N4uebpsDnRoPz7aqLBAoiojnv2GxEvmjDgjhc4ikbE3WvmLrcLseWqr",
  "key28": "5ZAdcdMMKByjuAEBnAkzyxZ1ug4oERCeBkjCrJtU8mMiRycS8qpeMDGEZUWYyZr5HwGkuVbbS26NiRcLKT8a4uAe",
  "key29": "2kYbkNVzaLzcuTcLKJeKRze6hDwPvhkEbkKvUHN68DbH17SpF6u2F7GAWSmBpC9YCWXGGV5B2i1wxbtyiP6dJRot",
  "key30": "rBqFzf24pKwHGDxdwArvzrtSdPnE9M3b6ZwK2Kx775eVGXqHXcQcNVsvMd1ssEEVkKLgFarivDzLBV5nwB1r75Q",
  "key31": "37358NVXz1gaDLHZik1oucsBFf2a8wQGKg6xMoe27M3zyBK7LVwVx2C3e5UN2JNH3vPoukDH2J5FvpYuN2K3x5bQ",
  "key32": "4Qnv9NzoNPLyX7ivN6FM5FDR1RzGbA2H221c8oBPV93RnYVd3s5Jvky1RQq8Ctztt8F4ymsHTcdJYbcAkQQrKCW3",
  "key33": "4scrNPgejgxom7z1oPDjkKpqtZGGSvuFtG8i5UzDe5x1VsmU15PtmayxmkpZQJAz1WazU877RVB12nZZzT9J2pWw",
  "key34": "2eD1MUBGxtggwgNYm1gqg4UivNfB7SjoMLBVNaiz87eSnuR8j5drLeK2p5r4HSKdPTrC6HoAd4YW6ZLh4yXfPdxX",
  "key35": "RkJSqeg7TNsaaJPPekrcTtbC65EFHzaKPtXLVq5wasNgpk5njFJs3DhizrtXoaN1SEVNxRPx71rzwdd66wfxwXJ",
  "key36": "26mftqE22E2To9xktgGUdycrveTeGE1skbke6BiJKjmF9TsefcoLvRo5c7g6SxV6GX1xD5broTHqnmvHCX9fU1ht",
  "key37": "58RQyUrogKkJgk6BPcsCJKgP6Spxgck4zszZ6KXbMioGy8r4GAMbRvNHmfEptkqoZ6Fqc1MRZBujAcnsPyivj3Ng",
  "key38": "4mSiahE8y5nsefrCnNxEgXjnwTpdJ2cyZh86XJGNynM2X7fPUMdoXCU6fNZcpb9gUKo6EqntHXazYVCzo1oNebkn",
  "key39": "5btaCMc1yrE426BuBTh8KQ4yQJpRv94qi95BYP5oQEszob1ryDL1cNCUTGRBF9MfGSh7qxr3fM1oo5uP2iRmdXnU",
  "key40": "4Ww7Qr3HnEArtxq7DAAHYxELpbVhnXrkefyNNoYVp2XsBaZSQqaBEETqMnwmqeYeocPY9PQgUz3qwVZwdzndwACp",
  "key41": "JAD2ujQkv96KfmQHFjXWJ9n8MWCu5hgSm8ZoZbnZCJvUCdE216uSx18mK8t6KHPsxiqeBYKYFz2Xucj8UTL1XJJ",
  "key42": "65qHfQ4MEw435zPRvVxDJ8j1hVXjZSLkLAetcNyhsGSacQdgWGxNesZhPqqtxi6ntXAqiVCwr9Xfr274oTopZ4Xi"
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
