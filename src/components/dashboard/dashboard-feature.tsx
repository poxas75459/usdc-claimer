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
    "2hBKuTG9g1kEj2tzoUH1SA979aqrxM5CWzrW3jUKkbfS8znJarkbw9uejYwsJFw1Sa2Mba6ohrzkk94bXrXxet5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1z2frPJx1rh3VFpmeJqa2MdzLRe7jkfH3K14oeJW68gF5vz6VGntCWWdFNZtpB4wjvNmC73FuYcEcDrtKS7uGF7",
  "key1": "4raBJgRCJ1Nd39iPBqxVpicWqfKh7g89JWfAmZNLyRH3tAX9duAHGhYFnZd1GFGUJsyc6f47mv27wLChg5KZsMca",
  "key2": "4Xyxwx3bne5rvkRtdU7EQQuHd74hYovZhwpXs8zDMKa2ymjBwBERujbYUnnBnNS2qGuBTTufRYkZ4Ncd9WVGjxHS",
  "key3": "43YuZh2kLaDAeWrbBibWG92y6J8aWZp976LePAFW4vPeieuPUJhirXgJKQJumnErQcBUTM6NH9HY7uAAtFoqTiyE",
  "key4": "4DZ4BNaoJ8t6Lpc8QEkYKBr4k9VuKD62BryXtpNVKxBdZvMmZhbv7qJs9WhDV6oLx8AFvCaGfEmriQwjbfozamf",
  "key5": "5jn9YTZafHknLkFmHpidhzPxuPA2usbeU9uZtD2ecfGsMjq6NhghXsZvbmqLLgj6z1GNYjySZGqytLBS5Ukm66Dd",
  "key6": "2C5nxk9iQSwNdnfEpDKHtUJAaEGz66z3gdh6y6Eqmj1RGTdx45VxreoSkyc6gMmycnju4EGn8fXAPyfQjbFm4zd5",
  "key7": "29WShUnMkAkS24xFqSGPdFMsRs9RqvkLhUXfPjqPUMVq5ZUw3eEiG3ZS6Bkpk2s6FfPECbxUFWseG8xeL8WbBYkF",
  "key8": "66jXCSr27RAsrxmqRD1ac7VYhW9nFttYZDSxG58Xkpa5ASYtYDeuJbB27R8P435Kkv9jjGFCPoTeD75P11iT2tUh",
  "key9": "4NRQNBFWvS7eUTpwqgAxnddmTWHcDBTpPcgZk2pR29aYaHndykHNc3W8bRff2Tkguca3Dj8PZQwYL6tmrcbTQVxT",
  "key10": "4T2YznTP1QM6byxjJ77vDEKGxhd9xDHQhWzkn4fxaN4ekZ7ZeRecGzGrGkixQuwaxN1ZPQFt6iXRHHARDXbsd2wk",
  "key11": "4FDJ1EQV2kRtsaSJQbdVvyTQT85sGziuWHEWz67ovybGWX58JTwbjrAw2kNhHsuNyR9D9LDAmShUGxN1mBxfbrRx",
  "key12": "4wPcedGcQ3ZrWkxZwEdjhaxVvr6o6hCPkwfnBoTZe6EMoKEPk6YBmLs1PhJLvyuuTo1evyX7deXemDSbKp4xyzZR",
  "key13": "23YP1R9WmsRdUb4AtvXjinbbJBDYKtoeRSaZJzc1A8RQcj6918jNgp456n95XVAeafK8i1h2ekSAswk4ziW9M5F6",
  "key14": "24FLnmpA1VpCWUVMNYeAfUCWRRTFPgEzYVpfzvDe3cNVosxgkDnUhfwMFWWL9dV5aL8FtPpdSZjnkoLHD8RbNooL",
  "key15": "2bpmcgdtCc4DMyxXvXkzJAQSUvSgwKNZjht7BpmRbcPYPYF3PGp6WX1VtZGZKByfhFSXRRe61RvhrbHTbxh7PPYt",
  "key16": "5sT4fH51YPiaQFqDAsN5tbAgBqHyqgnhvhDrVpsW8EV2fnTaJgYGwkYCQteqyhA6LQAQj4skcdcxXFxZisgwzsLE",
  "key17": "5AyXk44dkwoEmpndVBN5bAzqGwDMgR4qrDw1C8TRrdLCBXjXFFyJfe9ReotXTbLab2K4qWSFs6DXfQQX89YYVzZr",
  "key18": "5m8BYn72C251XQF3jn3cZeeLN78g44G78zue84bcdC2xCu4xT56xS9YofeVCXP9vRrn14UHHgFiUjXLwfgJgaV9w",
  "key19": "3uraNLfy4g43e4DNKD7GWer8anpiVTUo5WoSQfNjdAtivXGcd75atz27nA59PhCY4KU3NWcVX8CsbC3mUZL4WsN",
  "key20": "24sTgdj9kh5yKdSEED9ajNLyDpjstxVHPWuiTqqJx7KUKDWGoCJrTJDQ6s4oFMkQwwuJXPut3xgBDUng9YeTJzSY",
  "key21": "4XENGh5Yd2Ap7hnEgpzSDcBbH74yaQi1XsjqRGkhmpq2ZRvD5jTYhsCFMZQmR3hX3GCDrX7KuFy9quAdwXoNTi9g",
  "key22": "3bSgUqdYTZdNSTaZ9wos9cg7xK4Mta99dDX4G938p69yJ3b966b6s8R7WvsDGvZvwQHvTCQAbsTFB1ob9sy5nzGm",
  "key23": "5Bg5cxMpmeip73YVDAApTGLvrCkMyiSpa93azgKyapntSN6YZPKJHQJEFZFyPSVDS8XW3WSbi3gR8KXSz8Mme78W",
  "key24": "5GVvEJv2RuXBLJWLketjmvFyVNqmmsVbJ534N383aotio1MfTppHw6RP5pscfoEW7GCtDQSoxvZyJgRAL1KRxH2k",
  "key25": "5xhdKN7LBhsgPJH3RxqPvsHczXkSjCKi8bxonEhxjBC2TxsHqxQPY4ckb8jMUXd1k8c1eNHJ24dp4HYooPsKyRu3",
  "key26": "5kxy1DmYR1hfwFrHzZsU7oTSLdQPehw16ib8KCqhhyJu9FwzZNCCMgdvpsMRmz8qKBb6qAxFynJ1WQXiQj2vRZnt",
  "key27": "3XE385hXGtGonkymQoCo5gYGcSU1uhsogMTfFVNJfBmdF6WrV3btcSgpDS1i5sjsSU1nYPwccy4fPxWZmzHhDdFK",
  "key28": "4iZF7DcLQdJbmojhLcB2n1cvSm6RRmVw1a1Sv2ygdHdhFXNjJ4WDFdF1FrbwhfZctAQrfHyE89Ysra3V3sDTa45t",
  "key29": "3q4w5evrGHHkbZgnXeGNfV3K9dbJ9ahr2qjJjRHtTbsMuHT1ZedEw8KHKAYmYCWC7TXp375deA7LfT3GaCjqinjL",
  "key30": "45HTUGRXFZkLfe54QiYm1eV8YiPSS29TyGRjrS4Zbpq4JugcDumswfH6xNzHbbAeAY4eg4pnjHtn7btngyZ6bDhN",
  "key31": "5VyTZ2Tjn2Tq1FJ6EVa2uVShNnpVvGF2t2x4xfJa9gFH6njtmf6zNWAamd7DM2L9conCAXzNtuw9NPUjhA5NoDaZ",
  "key32": "2dmAqeHoxaAYnVvntWMvyepyRgru55rUTzr8xVy7HjrZDijMxAnyK1CZTdwjAuK8D5cVZHkZ1PdiaKSjYfRt3hZ8",
  "key33": "4RenkNuty7sTcyAHuZaXwYpJUrCZhzSJFbCF4gsZCWhx2mznuLi16VZRNCNLd6qSGMHvfMFeBLaiFf2LQJXA8ueo",
  "key34": "4yEogGdp5KD8QoMeHZCMkNHTcSQouzY2iS5ZAwDTJqs6nFa9ssjGcoDxEFyyXiEHCg5X71JErX4HswkLauCR6eui",
  "key35": "hs84JvQry9jNmbv9sGZtydikmiNbJgMraWTkeAKaQ4zrspiRP1YnaFVgHm2nY5h2hspurSqQiZcLCH9jyzEHq93",
  "key36": "px2mnSzpDeKVRTVMofu42gTcX2WPJLnum9s3nhJrLiJ5UafQCprydYiFutShneupzM5yYdMDDSjz7SoxtunQoyb",
  "key37": "3ZiMw8KpSmmkz1BcPZkYZnYNpW3pgdH6PsNDB8cL79sE4QAB67FCzS3qKx1B5CYwFWzjdHGdqjq6U8yYKc6iKwyL",
  "key38": "4HoFunLhfDXN7i53LHQPSjdrAWYv8nqhVirqQ1fHxraFFfbbsjHLuEvdehkzvCND5z3Q4N1L26qcu67ixHpkBbov",
  "key39": "3M3NPvw427hBvfbLHVuw1bgwncnazRWKdeeuDxwPeiCRYFcqMC1wRyLjCxDakPRLFsscyCsSMYuNPXoPQJ8PkAk",
  "key40": "56Yp38JRd4yzn7DkVVZ14YfVM2xT64Y36jzctEZFsdtPSzevMoDSkX2WwLkF1MMRcoYjDDvrt4QnrMMR94c1qVhv",
  "key41": "2DwaJDiURgEmWRqauitows5RoLxf7XNh6Fj7dpYgSrEHuhc5sz3qXZoZ8Qaa2tUQJUETQfXcfdDfNLZ5DhhaSmKr"
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
