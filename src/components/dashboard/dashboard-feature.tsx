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
    "25LE6mQ3WsMk3FPwdE7eTA1DaxMXV6Uyq6u63R3J18Dx2zFBk3pVpPekLcBMQQqMvd2KusnzLbFMmM1CPhiDWf8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26cDB3EMBxaXL2kvKehxD3rpCNZrDn7JU1rKnjGrPRYNh95LxdN9aMU7e9M15bJxLavsM37krUqwiK7tp8ELjc68",
  "key1": "2ptRy1UfyQaknxcGg15vHj3oDKrz8BTPBTycriYgmAH3tajKj3Aza3Mc2HhbWNWuPFYka5YKEieHZjb5EfM25kv2",
  "key2": "3HpaLqWR1KaGgdXQ2fjgUrg2XUD5JesB9qdZizghrdcXPzzVXhv1e2xVwMA3okuwfov59MB68qbrSyQ5ELSWnBCk",
  "key3": "1ypBtfjCvfBAJbPjVTSqTX5N43jjZeBcFPSTp77ekQKuSTFbKTREEyHYTsxMpUSt5N8x3wG6VB31sPydgCbkMp7",
  "key4": "4rCi5mSJ7r225wRceLnmdzoxhQXhUSkMuBYhRirtcQ5eoDLxM17bJiAcCbyZajbpgm4cnrmmq24TPAJp1zbVADF1",
  "key5": "4C9Uu5vySm28Q91wKBveczPxhpsAZn6G4Tgk9LKH3xGfFsdFaQG3qzGGS7G8gJNGjUNGcomZL72CuaFGKuKSTq6c",
  "key6": "3iz4fwS8tmUcoXWjZxk4qxvKrQkCCEVfkow8mBLAkJPuiUXEPoD4HS4WXUmnCJPoTrpJ5aNT24K95NKMuq1dEV3H",
  "key7": "3Rv72zYv2My2AnrPGgX1zPid9NooNDHnTdHcTMRumdJtKoswBj3h7zFiXgcv12N2f93PjXiuZxjjbNZUEpp63fr8",
  "key8": "5r4iTPvr2wRKdrk5XAuCraZmzAQy9YNaVBXW2DHmb23FoH8PFZ7ysCiH5DMdyCqkpuyXKsHLQZddgD1CsxAthprJ",
  "key9": "3RpDzBJVY9ruMsbyNweTadHEuq6y6ru8atws9kEBK2WRHVErWw4BtSxBTTRuKJqjoVyNQrAbhAzDvwrEMFTYJxwZ",
  "key10": "4GUhRTcBhRkL3KorDK6Pvs6NY82eemrvut7zDniwySBzoosGfsHkH12XmbXWsvZhRz9EezPfDTQR6Gy2CfdFFPUr",
  "key11": "2eGgiNrjeC54iePw6KA5N7Ycyi7mB6XfigYfiD5MTB1eTtxE5p2oSTKH6uGUoN4A9ywjNtPPPa8Q7DecEKC4kGWf",
  "key12": "3s1rmBQeD5uJVZETMT8nThsTcjghviTfirGGtpmr7ViSo6S9DdWrhWSctpE8jxdNd8SVaZnGkR3iamZPHTJ83fy3",
  "key13": "2Z7a6FCehUcpZnHBuuFnW9YnXznuXZ6rmRHnwvcaaSGm5GvPPswcxY1kde9V4LrNxNzNNGD6AfJS8FPo6q7JbcWH",
  "key14": "47EK9nuegnJbXNJmth4NnnhHSUKfsbWovLrvaBdG5yb9g14FoULeaRMvTMsMDiJYMqm6ijCPQUepQgqTqD8visZz",
  "key15": "5b2vi19PEGYNsohCekAkVP3FhDS5oHgpW3Ne8vTg3YdbkYzn4ZnDzra6QbB1FfeCS3CzXvcL3hiS9TLdyAVWMyXv",
  "key16": "5pg82jHUSYDfXSGcGAmNnjP2knYxCZEwPWwe3hWtWF75shZ9z6iSQi6iZMcU6pzrb4mhqrVJ6wFCWmN1zXyijS5z",
  "key17": "5F8UF79XEsS8ct3oqv28EVWmBbgthGFVVsEde4sZ2Fe45JH9NJKA2jRsr1LFCPkWwTVVNKVEDSgcuJezS4kkB3RH",
  "key18": "ii7aTe3Nn8Tn2tD72cpUmJRUMap9wf3J1RmDvntahgmTTWBdR9JFKpG8AzNSaAKKbKfdAvK7uvDB1a7UgMBQ59e",
  "key19": "3DJNSbJ1ToTjzJ7go4o8HtQQPb2YBNAB2QcvXtuhs1ZNBADZUykL5tvLNcc9C2QtuQ56LSeyW6ffGRxSFv814xGT",
  "key20": "56sXWdc4h7mj33nHjAJkmZuZFjBkavUaFrRMhDeUnxXmeFtgd4aeZgs2g8M16F7E8hg2neKBd9kPD8xKy85S93SG",
  "key21": "n9YZD24TgFH4chHgZit5Tzj11sUZz324AMx45yv9BwANyYpi3Mo75AR6tJXGJk1SxLyp5YDFzRc6D1DyJYxEdEy",
  "key22": "2b9LeP9GFMQyoFtKP1oRcpF9TTwH6RETFGsDQuvxNe9vDx7Z9cx3j6NDcWPJXK9dqU5CEmA8qvxboHeEbCGAEn57",
  "key23": "2BscVMTcB3XULyd4CauXA2fjngjReQmzQYrqDSTXt5L29iGRXh63XLTUkCm5gyS6996Nt7tEChLfhLCuT2NpCm75",
  "key24": "5A5jca8bsArr7UeTaf7sd1jMdXy9ER8hQPfgoscdQHZVkdAsufmu1mBZfSzoWULkBSyu3UakK2t6sQ5dJgEx9edu",
  "key25": "3i56gMo8owhCm4LghbvXrDXksCgn7FKsXa6vkeb2hnxQPDMDrqwaA2iVPKgnTSE2nExgoebF6NNy7xeWB2zFuRBM",
  "key26": "4MmDDZBT3e1Rvzfp4nGqLxJ6c8kHRRvDGTUnFAW7TCzdD4Ged5Wf3WoEbbpWZMggFvnmoq8KsYQCuRbmrjjryPw8",
  "key27": "L7nbQTiVGTgaV8qBbozurxEE1h7KzYoHM2pQiosG1E3dHG5frX9sUm1cnQrScYfBSsXZaeKxLxS1fxKruYNGaDf",
  "key28": "26rdw6Zw6EiFc9mJA2NQgEJ5ytfyqq3D76cbV6nbCV2WDE7qFabk5mxj6F9wEuvG99VE6SNhTFE8u73ayzJgpN3H",
  "key29": "26fbv6YmsR9jm11CVP6igrf5K643Z4MN8kuHTzBH2LRaYtL39SZuaoS1PxGQumQA2Hv5XujAAadgLp4Z3SxWhQMM",
  "key30": "62fM7uvjcLycvkGABU7Lai9SJDWV6eaWN4yT7VsFjsiqbaWfze5UZ8m7R7PLEwmUgdqtJErLqmWL9wyHJhzg1Dom",
  "key31": "22yS2HD9JkKbHSm8QkH9TjpvsCQb2dTtYKetj8z7HVPwwEg7yMLgtYwe8ccFtwny8p5zuGjtmDZr188jyZJxpmc1"
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
