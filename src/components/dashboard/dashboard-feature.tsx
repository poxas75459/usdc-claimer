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
    "3faUX6rcq3NWyxoLL3ozUs8NMqh9JyrKvnToN4sFwbPFznBkfMMLa3n56eNJU8SpvXkzrS5vMhmM9nGpq9irmyPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X7NWdHyLcYcQvV831ZCBYpRQn2S6nYJncgjZSAkU3ri5PAtzdPkTDqyfyYW3kr8NxvciYPGaRnVm3F59wEFLttz",
  "key1": "4kVdtnaq5zVD5ZT7PJ3EtKarMvin1RtYFgnDxSn312CMsPmT4bM9tGwrWtmAbiE5SFYjpjwJtmQnUupT6jx1ut9E",
  "key2": "5p7PLVXtzCtWCJgQRAM74hf7yKc8zd5WbfFFdo2Z9ArPcJ92kEpwqUtwsXg9V79aeU53nxhMPHqj9QN9XjZxKz5a",
  "key3": "2sWLZwA6xFq3FrMBRuKgcUiA4J5cqpbo9LyEesyybgA1qyYhqLKcMJGnL6taVLtTDMgvCkR7XiM19ZNYTyNBvyH5",
  "key4": "aZsSGRV5cLtACfmbwi63i2oofo9TooftsnVPtfWvwxykxEEkwF94irqZZ6cL1DnYSTSgGx9w9XoSjhFqMoQk34h",
  "key5": "33maZVVwQ4JvBHCzUFqNimJ57UYD8MbMqv33ZpKCi5V9dcYBWFzkS9Yq6zCTWLECbLzzpRv2gupToCxCM1nXpqqW",
  "key6": "3A9mnYrj9gdK7tLDtUtcoDvuGnE5c4whQQAQbpC9GNc5BdLwrqBmyWyg2tHvqnE5hSnVTaD7xrRBCwy6dGbV66KY",
  "key7": "5S5LALymG5dBF7oDP7AUebCAsvbDy88B4tVcFNRiVETXszjeXv2wqjxbKtdUuuZjMqJ4rHy4dny8jLYYgRF2L7CP",
  "key8": "3qCqaaAAuQZx132Va5eRf3YzaYidgtGJxV1ZY6YxCV2dVwctr87ZyPxgBqfAEJVpPb82rKqRjvtwSSN1oZh18ivU",
  "key9": "4Sy9nVJmXDHbuJffgF8syN2FXFXnh541UNt8kvNZ2BURgGMmwBi4apCNLP9sfyjA34hrxtVURMxcdv8agHXw4BEY",
  "key10": "3QwkT4Yewfdw3q8RZYQr51rT4EkpGP2qeYo8uxbfQ54khrcBS5y3dzXRkMFHuoptNQkkhLpA7eh4UHmWPAjQZXhs",
  "key11": "3qM9stmMtXfxYhUB8JeGuJJ9DGMQ91BSEo8M1K9ubyxqfqUdoGJXHNxuYtgAdxL2Z84YzHMK4DjM1UVhhUuPJ7SS",
  "key12": "4B8iUiP7V17hzKLoEsgMEEMH75UPxzk6voFX8uAV2FYNj4QNftrA2kkghLAnLv1636KdRshuboKeEcX4AddfCZAc",
  "key13": "4xGVMZNi5LamGFghwmAhSAGAavd9xK5n1GMkcESy4LcUphxP7VME2BiaKf3AqFuSNUqig6oo3z5wtmDLa1dzPiU3",
  "key14": "5NsdtdXPs4ASeKRnoNPnaS65iK5u9EGk1bcEUREhZ66DVYYLi8fbUWdvPLncD1fU6om1NvAzM31zWJEheUyZhUrW",
  "key15": "AoW6Sbn6h6RGN6bT6k3mHi58XiAdz2s2THVqcRwvdjCZpsZCQFnBqDy3vK66Ezp7k3atHYFncuihNny6zj4GNfd",
  "key16": "5k6QnkAD2Tuf7xa3Cd93AbTvPeLhkH7pBzR2rcAEAmgia1vpZhRAfs4qfY9YBKzqScVpfqq7sqNo7SKP8QyYj2PK",
  "key17": "2fppGgGa84EnxtXsMzibsfoZ5NRXrhFuEEdBVAJh8m5Q1jkkNsPQfD2NYiWtGKxiMUocK94hQ5Aw8oqnrB3VYVnq",
  "key18": "6339XLxLgnm6M4z2ynEGidxKtHLKBALyZUyjeVHwVp5phKTqEKyTB4iiV2Wqpx8zayGamrPaMR1YHWShpZAjRSHd",
  "key19": "2noHXJpDsYJ7oB2x3AEYyo139qfuZHJpNmawaurG5RFsEhPrih7qeR8z68xa8kWv6py7XjJs3XxZywNzGAGAzTcS",
  "key20": "2finLoabnZb1RFXZjo71Lxq6f1c1UTPKN5tMbjXaAgF5zGsVgnmgZSyCoeEDYKBdE6skvtRu3wcoxt2qSiof4BGu",
  "key21": "636Grw2JbGDubFdy1egPDmwp2jVkmrxvULpEha5ze7jgqSSHAwxbtj9di4yzSdq8UVGTuCF7da5x6KaRjJ6WiVmg",
  "key22": "548msKj8tiV8amYnNurP2UKAAbZgewQ5t26JhHywvo9UMonT8qYiMBogAbFkwdoMb7hdtDC25KnrW5Dv1aX6sMdN",
  "key23": "2FDQHrRJPb367ord1myYH3xr2eZU7a7KcTTs9JaXK7HHexVqvTMnjfgwsSuRgP9ziu85Pn5jf8kWmD2Y7pCvQC1p",
  "key24": "27HFqbwM3sTUP7rVUYFFS354tDoKPkMQAZTsFPppb6RimN6r78gWxnQiWRa8r8dSwTEaYw28sZcuAViBXa6xR72o",
  "key25": "nSQMeMjCukrbWucG7qeMaRxy7fqhnK4iquH9h9tTY6mUBtcJcFr8WpCajTktSz5CfLJiPfjnJ5ArHa27xWhYDK5",
  "key26": "HJvMF88VcQLEooUvDEdKmtnbk4UTY7AyBwn6EfiAHyUJir6akqvbAjD9MEWU3QtDa3kvaMRJZTuxydQBfsAfvRW",
  "key27": "3qA3ucdSg7sLeL1GefGVEiez5wXJ4iib6TCFNkGDXW4xsiLY1rZvw2D47CD96VwCd6sqGKyENUjZcsfms4wnoerA",
  "key28": "3W4D5TQbbBg77NTCvUjijqcQThXLGhjtETFRAhkdMWkCDD3Sc3vTYHCfkYsPjfepvJ18SeuhXeUnVDiXPKP3KPb",
  "key29": "2T7cZdwdEEp6WNji4kdpfS8HNgmyQZAh9EoHZddrrk2JeUXA96T4tztiXmaQaKWmdHbmouuQQP3yq2RjKrnMEawh",
  "key30": "4enTz3XorCfY1bbKmvQVXEExK1beXtXZjKkjpaUB1y3kBL666mQaCrWC61dAv3HezFYf4evDbgeBxCP5DHHofXwA",
  "key31": "Wd3NS1KKFBPZzMpMNpwydJgqxBivaa3B4TigRt5PcUx2U4ZfipJAfGDGFuxupPTZpgYC9J3xF6ddNJfshzMiyw2",
  "key32": "9DUm7nQpxTCwSCzUECfjwwHLyfm7YAMqQziMTWzsCr5CYvFHg8CjxnMuBTTEvucQQx1D82YQHTM6WcDUDyTF6vC",
  "key33": "29gbRynJCvhYEK3R3cLacPYD4tsX6JR1G3unnUcXsThdcnDXX2nnmQZVTTvbQ9T6T2cK6kPezRyftYAYiRFjf2x2",
  "key34": "61WywuhNRqVCZWEbiUa6DkGyyugrfeqF4ervY1ic6WhEFDE23SuSZFVUZpmmv5z9bvun2CMeqnnSFEt4kaLAqudw",
  "key35": "58NWuQcbXTjoA73ZTgsuzdh42hTqyKGJJ8Cy2Gi3VJ77hW7MMfecrHAdbnWJM33fUnjpgtQf4DxSQ6Mb4Zc3TJAF",
  "key36": "4UwUJ2J3oJh7G5csdEqBGx2yWHPW3uHauBa9fzHPn2hEcMXezx76S8EgD1fELAr6E5XJuYAz4EX4xRiRq5Xk7Hry",
  "key37": "5btGa8yQ9An78tLW49tzGAnMc6eCmy3Jb3tRkxvBFMUU4QBLGyHcqURc9SSHRZTz6hi1szd4J2EjfLz3XThKVnXx",
  "key38": "2rUutwbak6fX1ECMYpFH2US3Ads7hS3xqNqCbWDovzdaCMmwK89P4wR7PKTTcboM2V7Z9LVsZVrecEGW5jYyN91k",
  "key39": "4smVGbiPhDt8QXVb4PzcRNuc5D2wHpM2wJh7jQmfbWwXGdPgWN7sA8QUMw2CsdJ1ypCCUL11k9zzs3CybSf9m3ig",
  "key40": "4tTeiCQFwh2BdwnbN8k6Uee1jVZmYQKT8qh3vK9m67fDNtCBCi4WdUHyUeoJbvHZ4iXmmurum6XXHsEzhUN29Q7V",
  "key41": "5cfJQyiMromCSL7Nf9tWHZGvMfQ1JPsXXYELgLSmcGD8LZGeg18RUmV6fSdRBBATbwphzeHJmDF8ZJPhV9ZbSje1",
  "key42": "39T55BCWY8SE5CzCFdNFxNg5CvS5d2fvTTZftQaug5vjSxXV2NaaizGGRQhaULBkwj2dpBvqsqE3qufEwdQkKQ99",
  "key43": "2RormG2eGUtX9wY5RB29kuVCuZ9BnC9DxhjRbX3rZt56TMt1iaMhLS7VBErrCLhTJ2iSyvncfHCkUdmizVeZcEKX",
  "key44": "2rrvCAsWjvenxZCoVFvcg2CkimtNDN83gexsyFth3dMGKt1Mb75FPCMCH2WHUQGEV3wa9FectqQUFN2t7FdM6bub",
  "key45": "4La9sFpokD8dZ3cZzbE1tWgx6YDgEThsCdqdGdoAfUwbrCUipfzYG94M7xgMKhCuydP9PD5YaL2BgdHfc7naVsyd"
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
