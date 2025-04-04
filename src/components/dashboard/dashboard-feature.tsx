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
    "4NidGATGvfE42MZrbXChRiQ1AcQXnK2wRzzzMaPBEiRLcR1cPxnVQAazVYDrHa514mDiD65gE88EF2byGcXCNZxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34BRCtJMLeF4AVr6CwkjS8aqNwLks5rfeyD4bvXrzuGGGVAwEsdduoraAundsmfiXpmVngXTSeguJZ9Lp9L1guXz",
  "key1": "5eUVa4oBvvApnx5EL65RhvnZZVdzpv5UXhPReRpx9JPekBQzmBdu7zqUtv1CpHAJtSYMkS5kagRAfU7e8j5a9BAX",
  "key2": "2tYByVRFgtPhPfbAAaMNTXV1RxR3XYzDE73FoPDf9qbwd6RCFys6UHaHK1vKiNWMS1KW4WopWXzk8HNfY3vJbGLK",
  "key3": "48tmJDsmHAhoMDnjmqYGR5jsFm9eretCfLEGH6MkzLs2mNWwiUKyokwpWfyb1s3CXiyrbZ7puzDTSeha4ioJu6tY",
  "key4": "3khkwoy5pw3wftster8SNJpG1AAUofhBK8ptVQTAtPsvFBthQrKNKM1wfNegHddK7sxbhYydUoDa5pn2ndQ7SzjG",
  "key5": "5hx4bN4Wd9T1uKGkNtRdnbfcryWifhhSXVH1u8vTbe9bU5jtDCJdbp9hFJ1ZQ9tiwPzo4fzCDDG2ewhWh9Gco69v",
  "key6": "5YpHLiXnXqPFMgkFTEFqcEVRf9UQ7e7jMgSqGKGVeXSYofmVs337SUSdpHNcMjM2nxG1KBHUVR6eG376nGxLs2b9",
  "key7": "511YtWx5gEGXgV1U5Ut61pC6Mt7KtH195JzoDVGmebm35ccQjnJscggGpDTLb8ietghJWQeZWJBmBSWNyA8qNnwE",
  "key8": "3PqxuwG17quCzNoMqLxbgZ9nzUqAfVYfSKptQX3UkdsMN86TxHsWvqMe45UiKjsR98HWGcjMDAxj9uSoZmxphBWC",
  "key9": "5ADL8kx4bAck4mwuD8DHzoeNheDRfUXtdbWhRNsvGfS2fF3CLoaKySQYwTQgfR2fMagsiZ77AP1vXC14VM8FrEy5",
  "key10": "vyJHY6e95ifY2irQV8szVrskahRovACyQe5xuDY36MUDe1LQGiCpMDtgLbLYiTdec66H5Cy3M2tAXGQAvZpAk3u",
  "key11": "2QjWtFqAUon8a4fTiQU1bkuZDEi676Fba2dsbCx4hhgENmpPxyZXjeWnb5QHS1sy7vkRgM2fmvYAmeCVzP1VPqtW",
  "key12": "3cankmrA7AULVSaKEyVpjfh9wejLN6XLWnY64gtktr5ogsVSL4yp432QDZgyA1QXHFQtFqWwyd6vXoGQWrtWAW1v",
  "key13": "4gp7ER17Fg3J36zCk86TUELWhMDfBmB34C9eaGBhzAW84iGt89GWyUG7u5AFSYC6xA7M8kheCWxCK5E6xWeiEZEJ",
  "key14": "2xpwUH5QKHe5cUP9YBSdmLuYaPZo2MirkBi2qD4NTfoM7Hgjz6853wDeXwkNigiJiLyuZqWpBEwU5XAL8atQBBdL",
  "key15": "2Hu9igmhvHD7TTQvF2qbQoKMsNV4dTZkeJkiQpdpN8AxJgbo978nbJBkiXajR1TctBa5JZjBMRXTg5gFBaEi74NR",
  "key16": "4DR4Qs2CrCjGJxQmZ88utQipVphxYTCbqdHVVK9dNJc6r8sPE17uTDx4FCSaLEhYcHLJPcMQ4VVmEchhmVKAj18f",
  "key17": "4daRazSAvN2J4EYCHjZ9tPzQ3fqDvtFPQqvexbpSjM1bz7o4ZSwU3d222BWr8A5rS3x6JK2wm4yEyEPCDoBywVZ4",
  "key18": "4sja2HbX2pvmGmCeNY9NXkuqhz6iJgDf1B4jbELgASnDkfuLFU2UNDusxNLaZrW6WBgwFA3ugf8kety3XtjVXwdg",
  "key19": "3EsFDBjx4neo3jjGXz5um8BaMkRubUWvKKLu7Ao5W7XeBCmZKMpGT63Dmkoaz1sTCAMg5AvAYAExsnzRh1bX8Zgg",
  "key20": "4g2EnSbxmm5zcX6ruGnJi1yBdZw8KZkTe6R76zDPuL3m8U9ry5AMnyoCPmJoiQBS31eCbFzjoiRvtyPqhFJ83CqK",
  "key21": "3igpRErQMW8uvcX8ka618qVjNNbiehQEown8efhJwZXyAEdfvvTY3A3GhAb1Be9mxt6Hup7xuAuvUvjZA2cEVf9K",
  "key22": "2x8iMoTJGephASAQKTZCNEgh56DnTcGRefHTFatWNRRd8NVHXvB3E2jLwpxTQgiETZ9TZ8fEwAwq4kK5PYjLWDG9",
  "key23": "2KgyU3bN2rTLoD11pKbVabTWHDbgVnZaeMzzZ4tpn1aUiXqYSJJh9M6nHTzrC7USpiavGnpghsCe54KnVXFHLBb8",
  "key24": "2qiyLFA7Vr9V1kivp1vfW2jDYDJKfzY9Z2tP2Ciqfd9ycWBvQCmUhTvm2r6fhivYv2DAsGuQgd4cGTphisHQGSZ2",
  "key25": "XzYB9SmJbhf77YyJccdUJZvQVDgm49zxBN5vZGNRJBKRS9Vc6twDtxU62vpCbqPB2i142oTtVnVoPYK6z4hpk52",
  "key26": "4vE2Dj7LyMgdchaGBB4VWePUkneMT876hwjNfqd1e13EZWwBXqyQySZHxPjD7YmejrhDV3Z6ZNu5ErieYKQK2xTz",
  "key27": "4SHyYoMTegpsBFgzf7eez9Cq1DoyLYhyyfaCWkiULfDkSvbJDdC4ewH1qARsMVMxACGgCfbTuACq8AnPBeMDo1QY",
  "key28": "3tARYormjApYBUdfG8gC8oxy5yDhd3647Ns3uMYmUsuqqK6wXqibrVMCctuiKHae4kRd1YrawN5gCM93VnMURvfr",
  "key29": "5JkgAMis1sxYaBtCk9dEnBoPmeedZtLS2UB7tDjnnGbFWA73vW3W3mX63LKHhk5cS7iAcM7NGYe6HnQGBpDJJBej",
  "key30": "3ZSGGp7V2d8Tj9tkjquLxby13dCtZSnNDNjq1dN7atv41HyQzLVvL93Kj9g3D96Nn7pjS4WweG7cvzg3XpgrDTZf",
  "key31": "282Co4wbZgq9FUQU2BkThrhG4E26YvswmfuzRdZZSQ9xVc6QxUP3KDdq8kYYFdWqYFNXB1vd629bjcS9mKBjqhRQ",
  "key32": "5QSwAZr98t7zofxhyNNR8FdyadApyCeqjv3dAmbeknbpZCm6ofJXMo7iM5R5LE7zAPoSzf49pqipMiL8fPovpNNv",
  "key33": "4Zq5tRyxJijSnboMqeVRNwqVH1KQoFfcjiiEc5ZXmq4KSZRTmBK2vC4FY372ZyweaUmrzbxRdEP61yz7imAhX4Ks",
  "key34": "4Y7xZZHW1KUp4MrT1pLxCGEucwW2ZqHrjVyNB3u7WnDa7W9QtVJWW4V1iDfLT6bqGYXLu35RotMTWLc3ZJVFNurG",
  "key35": "4q4UcCQ7ZKv8Urj7ghm8jD1aqakuUFyhkK9HpeWvbVXFbSYhstVhHvsBe675P6FRjGZchj4SDSLHke9XqX5QZ3c3",
  "key36": "3XT5zUTvVYcEPdpfAsGkAmJwutEnLHwpafPMpEQHggM6ecQHmkpWQjBpPWvdAJQbfHLe7iybySPzshx1P4iCqJ4e",
  "key37": "4mM3NbM4WLQxtoqFnfHEzEirAd8XVzQvbnpAJCo527smiA1KvZsqSZnq4B88u2Mu9rGN3kecDtybbuvoT8E7bpfr",
  "key38": "2SZU9FpfQnKSkwWMQU49Rc4tSErZ5P9SYjBPASzztLGtn8WcDfH8jy5KLyojhEU3njndSZG71CECKi9DJjMrSqy3",
  "key39": "34PXo7sbybMi2rDeLixaYWpzrf7xssJHk2MQpHUtHsCBKF8bfbEX2hDDjzPKWw6G6JhBpD91VMN3Jju3RGguXZjc",
  "key40": "4gBt42ZSiMJjZ5K7MfDW5nNxPgu2KkcVPV2j8bpWBXY5FwED2QEGowFeHY5VDJNARvK7hgAFriEh9N3XNkZ5vf7m",
  "key41": "34qtcynjuF9iR18zqJmBj8FQs7PTrs6W8k1U1vEsRgmynu1xeE5xvQASzQz2iu7ewkts3Z1fYTHX4SaWnjssNrTu",
  "key42": "4xaFXApSc4qYbJX4W2Kbc1wR1PQR2tcs2XcA6NFDwNLeJLBEjQvpr2EJ6EDsD7xz6XxD3eHkKD2mH32YYcuNjD8z",
  "key43": "64Y1RY2LEGmgGkrvHyVPqGYd47g4V4BiDx6ieYhrqPm5Th1HgKrrxCG7qmrwpKW4bfoRVvoaffq7YGGfzANyHuxf",
  "key44": "4h45ocni2PJWRoxQCjdTejrw3szfkN15ybL3KTSi53pNrFN73udXgeUAd1j7erfdn7cK2sCEebuDC7hcWLPCvBj6"
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
