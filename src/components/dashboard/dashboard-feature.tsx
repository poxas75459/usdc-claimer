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
    "3W2aBqJHDCWABdyf2HgU6WRzcXNGjk49LMw2JtBoXeKCi3NBVePXP5khYYCxf79kbzy6AuvdGYG11g7xnmeCNQZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25YurVYWo1BkembDRg66hBKix46XXqAhEGHc6E8aVVNoXP6YnRg3cDTRLAhieo3mk1ACNBxgA626YS8vETprRKmC",
  "key1": "4HybearGNUz5hcaTJgx6HueVvfWUGgi2DwqbJXgAHLA1YddyQtJw73pDHhfYvZDcbzpX6D9WKsnexCK1QWkK3GGP",
  "key2": "4HnQ9z8W4TU7F1BL17V4adNgbut5r6ULYqeorBwS9e9quqn1N2Yao8fFevPmN3wVWAXQz6tPx6PcdNfULzFMAWsL",
  "key3": "288kQmNPQhpZpAd5igJozTCQoGAzW2ZP9QY9DjDLsvJpLPMn93yFGuKi7KJK8UKBobx9uc5YYAbkAt1D3LcJSnf3",
  "key4": "2hUKNtRUdoCFMZaF26rKHP61b17dMETMZZHbqqEhoyu6XUzsQcRnY1recCDrUB16hw2fg3t8oYxzdpSZ7dz4h84o",
  "key5": "2BfaaDLAstw3yCq8VHNLvoPNNkedS2Ep65c7HbfaZpZ5TyiF2oKq7vdgKeZ1uusz8acDn6Qu85McETWktFMZva8R",
  "key6": "2d1ZiarLZhhL1jm5Fvxo2P1zX4rKJn3CDpuycGtCfNmJipgUqzCgimp3QtQxAkU9MFEqPvEMx1xedBuN7LvyDehQ",
  "key7": "4UbuTiurA2sSqtQtZm6YQTxxh818KLxvWsTZkxBG9CLyj3m2GoMWfrQsfi7qi7F3Jt7QVzFkbeQoGnnsP2bdsagd",
  "key8": "23oGqicUAcfXmwzW8gHfWBzTqBJckXpJ1gicVmVuJXcEBLkJYdKrdEpgKe5RPLSsqMtA5h8cuifUbnxNGNUo5d59",
  "key9": "5SLgJAo6Y5JECeD3HUAg4m3Tdn9WCs8gsQjkruGQNyT38tegR7oBE8GZGP5P3cSJ3V97qce5xAgDFWHavstfBp6T",
  "key10": "1pMWD3McQ51bfsPUU19pzLUbeLmEzpd22i4VMTrYsj7ah2RBhZdXjReXwWNQEMZbiqKX4WZkLQYX31gm1Zka2aG",
  "key11": "35bcNCyP39FdyReRAZ75D2zMZNpbQ6U2pSXPzWNLMwycVH3UU9b6BTMUi6WSXfqUsLtp261tzvcyxvJx2GMPnuR3",
  "key12": "51pwx3fWmpRZwej7DCmdSNdgtMFq9x7B7tyfYbJjoe89tViHcHuJwLba1PhJPhN6G1S3rwaTSoaJTY5TnaBT4dF7",
  "key13": "2tUGm9iMwKsSByH5q2idtXf1ErAVH13GSMSK6k1wk5UMVntuhMiTwq9fuwaBZ6jmAyMrk4mBSm8Uxd7FY4fGRYvE",
  "key14": "5JnP9tiFmTTsX7N6dLLj3RSYDtQxH1fhXPhUmFB57TbQiuJ44QkSQuxk21VixhW5Tfx6LRgiXvG8WzHumF8MrEZv",
  "key15": "29riPGwhBzeT4N4MEfBHe6vn89YukrLUeXsXFV8RTovEdXZNt6D4NM9gfbmzQzgPSwwLJFu1UEjBVuZo6Ki4kXML",
  "key16": "5LTysEJku46EABGkSPWor2CyCooSMTWB5SmDjB5umTUn8HR52E13DU8NkFNpSH9zdAG4eRG9rGLnMCqDYcZWfXRg",
  "key17": "3CeHefyjYLNgDQyDYSikErZzVkZYnWtzMvAscvCGWMh3DYZoMHdP558feHU9ztkmDh6P6qybpETdRw6W26DipUMw",
  "key18": "4EzGuhDm21c8nz3kbL3eog19YrQ3nWqzcqzQGzkUABdcTHcFWsqgy1a991iThRLHCMEFR5taBRjweuUovt2qxnDf",
  "key19": "hZBx6BtRQhx1JrMfRbadS4mkAbxXK2G9AYPob87p5BPuT9USwjYJ2zB5BxzyMxw4fusmPheSTNQW1GZxwKxSH8a",
  "key20": "o9jLxH7E6oTS8iX3GGKdkxjzpd4PiSDXRwNJv5Z9BypS2si8Btf78i7vTPDSkwUiFrHbZCsuJCt34CHidNrheuD",
  "key21": "4cL5DFgKNeQV2o1LVzSEmjugitxq1osGK8p2sYhPpjPPrcpumH7gCqDV76MVsuJh86F9VmQHeDya5o1CDaztyAYf",
  "key22": "5Gt3Vdk76k695EQJVUsb7i1neKNfvJHCyRYoxR8Wy3jrGeVpfnveALHeHaoYxa7jNziP893nEsGmATdEf8a6Re2e",
  "key23": "5E1mBHXqNjyUmKuBy6jBYSqLbbA23t1FZdd5svgZVhgN5iSTrZd7g9x3B5akk5ZNPraQocnhC6mF7PfhZSBcP4Rn",
  "key24": "2UxHiSS9hdqSgAEnku2gJWrchi3F15nB2MpSDacM1BKQBsCoNEyyJpyhRibuWYkNnzWUoptUQcpSeeZwnKLJwpDH",
  "key25": "4UdjyEPA223BddqszujRezgMP7juT9xyKKvtet5C7CMGm8xRMersqd2qbXeRVREf4Sf7wUyUZEtzZxiDkMzaChvs",
  "key26": "2QAanTcpohq1TVbaBzRBuSo6JSXTPiPjDu4sVub6MBqkFqnpMR5byPG6gJyJZq6mkYiQj3GVPSjzGxy3wyYTWdVh",
  "key27": "3PG6qojgj1kC6pJ1YSo8Kya72ViYsCQWMdbAULq43TSEjSdWDMgiYm735XPJLrnfzdunwkUAwCBEyUjo4CDKwrVX",
  "key28": "3XoQgHifNBuGTbN6qKooVzxmXeQVEtrKSNnVhD5efharKpNhWVFu47w6DpR9rwv21rjuTa9E9Eb3Mx6x9tce8UzZ",
  "key29": "2wkBeo93ZUtmFCs7PedqQqnWAmdpGKopZtFmXwLv2PVVJhPCjoM8AZhBG1yAzENeSocfKQVK1p3o2WHLeWXKJkxe",
  "key30": "59Fwy8bCtsNDhMjVDTDeyFyPoEoiJGrZsk1zesjeMsxXwLsESBZ89CkD7DyNE4hYsp9cd5PjowjgcKh14Vmryrxi",
  "key31": "4VkQwPcjMyFZA1X43Gg9ad7jD9eV2c4s2VqaAxrqL62xzqa9vB3rESW25EmirgFt5MYjZmc4Rz17UrKcD33tFp7V",
  "key32": "5q1VLZ5sEwWLiv2GhjbvyNrqgL6vFgGJVwNEonK1ApTcjUFaq5NkWjhvCqrKZFa6aR3T2VSih8CAwAVkwKkEGPUc",
  "key33": "5cUR5Qc3ecvGRvX5VUTsrnRmBU4YpaEfbx1EKYeNBYXGGwy4nX7caT7RX9K6F76AVoDdYpjf3NEphpNBABfK1RVx",
  "key34": "5xyCRENXjJmZ2jShpDp98NxJDZQHxKXxrYYapzhNZYycF835dMb47N7RGCLL1gbZJ8XGyA7dhHEPEh8hyx7Ts5bU",
  "key35": "2zf2XXCvFsu5W1HcBUAwB19QnvzS8C8ifbYWUMvuE6hMUwv2beHiotZK3ZBt5CmGN1YGBAc178xh986qHVRJc1Hd",
  "key36": "5wdKDkYeqLAkV7b7HvSZRYr2zUfTXT6dMgksR3GssjEJG88oKEwwzGp7fp5EfS8aqw8kfCo8CDxHCEmZEbCPud3s",
  "key37": "4dVK9woPwbwH1UDwKgV6tmsrphv8m8DYC9FcP2Pgutaa8QJ9mbY1GeCt5BKf1bMYvBS5zHeqFkz5WcHL9chPHHfk",
  "key38": "GQo4hPddWbQJfcgk51tjf3o3q2NHpaj3p6YKBVdm6nnfi2kt322HtRW9dFLyonaP1aWRgcVqTDv33zt9d2Tbgro",
  "key39": "23BGEdU7nw2zdVsoYJP9kLv7WKiaJB9DD3aFCyk485qnZnoFCXaavDinWxLJsLVrb9Z7waQ3qGZfzAmArh9KvxHD",
  "key40": "2YsShpj66Zpf7asUQFVRcMWgGmpb8EpeDaokWbJMwnoJjUY9f4EHxqzwkaVWPQNScRGnZS59xiA1k3E7vFbu68CM",
  "key41": "4qikTzZdN3KLmVfWNjPuhnjwZCbV9wh2TSYhzasdj5cPWcC8QcC8hT8d1iwcSrWbtSr8teDWd4UKYRLyx2w2r4K3",
  "key42": "3JsgnKJgPar6BogFfBn8FPAbbXbEEGAacyWjqRJeoKZijdzSAXAZXmqAb5c8BSXFZc5ppRvVX3nWnCb18qoFZUT5",
  "key43": "37qjZQwQ2CqzCu6RjP8pMCqPZwFPvZguQ7X9WiTn14YWyjyXkQZNHz9rD92HMV6VREJqge2U1PHcBJc2bXuz9UUp",
  "key44": "VHJMgx3XMHsuizdz34nY8iHPPgoH5ez3ATsveztisaCyQJvGEv2wYFfTfZnemLaTmVFy1GTPBdoKP6DCquGHn1j"
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
