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
    "C45ZQJmrB7XC8gZPbZ4j3KEr1U7yHGvUT25kL9NrkPgRrRD4VF2iee2CcKgeFTKFHTWrDeBCPfgi9M3XtXZh7NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdcmJ7n29T25U4Y2MdiEB73Q2pLA4sdrVDpQXYGmRFi83mxDkC2o5LFQ5Kdmt1yYYKYmndqobLtNNWfDeq45C78",
  "key1": "21EBanopqRMCAidbmHd65gEKLTbFgnmLkLExEVMSr8j5v1ZegtjkZ3Gm8SwnZ8WAgTjBbw9VnHUfGqc26XvuRReJ",
  "key2": "5BtfBTxyWfkcgieEKHTAtsfw8ecuEkPzvFNc3ZX8fEwCJgAesFABft8v29evgJQp1KuzxRq28NkA2fXdp3CF323p",
  "key3": "5DcHdZwzqNrygqGKaJWrPJRdt8VDXaTkVM6MSmh81KW6UWmddh6wKPQ3riFi6VsUhLW2MrvqajdddmYS8gmLMJ6i",
  "key4": "3KYHfvwbb3Xqjmzi7kEQEWM4876p5TbypTCakBugUR8D1tcNvPKaNz9VmfQKn5eVyGKnYCbLEbxywUUYSC8MvLZS",
  "key5": "Yz52U5fsg3JDRnVFbAeJzUeNz3DDScfgajhXHEwLrTN6tLLHrr3969GRjJ8Em6HW4gYuDsuBccwUe3yDVa39zhA",
  "key6": "3RfKZMH8mzY1mYCc4XfyBgbazrQkTAi8XXwgq6GQYr3wrmZUs6muMUWtN21Rx2d3sCGVGr6DdJqUQSj2YRUPVHiU",
  "key7": "59AZqLBnVaLdg7LKKepRDeV1X6nQ4WioiUma4fFsDfecTiY2pFD7kT5roz6MCFtQABhtWoyMRG8tDZJssNGJ5YkB",
  "key8": "ErxhTZ5fLNB5tC7M2o2gSSc1JXVkSKkdzAshbM5bYnwCJnK9UJsbkz1Ea1pjKhQkXawedgPSF3T32X5Uup5J1VC",
  "key9": "kKMzsS1JrFQGBjwwAQmWvBat6oHfBAnKTjadPVHSRaAE9HYhMxzAkcbdAQPrWWYijv1kSX4tuHo8AC9eUMkXPFK",
  "key10": "4bDC75kkLb4A8EVKKYpv1XEQjVxTMRKF93oA1UT6sMB1sFmGvpydKTF3RnHrcA6tq8NnhcbVWmkKJCuUXh5xnxq3",
  "key11": "3ZMmtnibPgPgQHZFuZh136r9iD2SQLDxDGvtX2oZUX21xCU7Pwu2jGqriBB875jFoWi3MS3AhZydHKFzoBoi8PUt",
  "key12": "2W5pLpjJq7j4kywLKcbmS1mJ9vSMPk5JcQbronqe8rSKfPCQyMggKSc57EpGFAUESi2BuxpagyiDHWk6WyYmc8gr",
  "key13": "48ha1ktUvsP7sD8Wx6MMN6SXtTfLN5kZet7A7xKZ8bE1zgR4iJZQHzxyQbvYZQJPpvdpBmSbEZ5GQEd2Q2ejC9Fa",
  "key14": "67hiwVp69jQ3S9Dtu7PBQSzqP4pxVdF5WHzJjv4aCk1zaCGLUioLEJ3HW96QFzfnGcmuuKTKoNS1mkc5x2bb1MeE",
  "key15": "39XQyEDrFxfWzi7CLHimTb2bUw4FRwihXNffbSo2DQgJRDYdsaLKnw7hitu8rioRLAG7R672HXU2bzaT966o3JxZ",
  "key16": "FUhAQJjvLLWMTHmvExw5uD6WQDiniEfhrZ9hdU427d4Lh7x9g65xctASWjzWKMYBpGzcEaQxGikjSf4y4rwq5he",
  "key17": "2nQSsn3MsCSzNSCtVNUXNUrRU1cF2NF8sb1Bw9oLtfMoLHX1Vxe31oaHggUEQHAWDxiTgnQamhiAwy9wFT1Xuc8R",
  "key18": "3a7XHzE9GbthnhCVwbmp1zqRX1BzhxNYh7F6kRyq7WRauHTh5DDdGquyANbbEUbGeEu2gSgWHvemXi7Jh5yrxSNg",
  "key19": "5ZFNWn34a7KxwXsMRSZtPz5dSGSBseB17XfRw3yLvBZNzHUHFqWKCUzbG38YEP3ZVdcbhKUoSr4MJgMdG4EMcYYL",
  "key20": "4PXGoioa32hT2XBQiJrJaqg2gxKdCYLuWjrpXYz93okVc3KpAhdQ8TtUKup8bzyRHECgUDsPUxvbgFHJRSEtHm6u",
  "key21": "EXEgRyJSw5xUtyEW9RHUsS37wTjSdSiLgQJfyhNNbfDyCPqHZYkKv5SSfX5UsNhQDzD34eh9cU8nUJJR6vfCTvk",
  "key22": "6465RiEzHDEnWpbKkCBTPuFpNtTKdhmYcvGn5n7LjNnzMWSsDuRnFKLLZUzXKmSChrKcJM1ajyLBE5oVAigaikMT",
  "key23": "paTgwhqDZj5WMREun7xcVsmk1ao8tZFxAdAotCM1ckUmJiv1jjnYfHNySDbkHXumMgsD5S4mEiKDAc8neMHYCu3",
  "key24": "3rSRDqNB4DEzPnFgZu5SQCHZmvVNwmLv12qriiGW77MMWsLvvHmFLGWUYYjNUptN5rFGXxuiyndTcLvF6H37h1J3",
  "key25": "2bujxj6QfSXj85P249uqnqKj9B7neoAruQfYrq36LVEpwgdLR233gX6b2RTL7o6b4YNV3avXGwSug2CXrSAVZRjK",
  "key26": "3FpMDKdTzbKvgk63tjgmP1NkuGyMv4ehxyBHwab4D57tP71f4mvXz59NheRD9qkQgUuU9LxB8GjBxL5DcaEHhZKw",
  "key27": "HhaLwAvNXonbS8JxrZ3SU27kBSFq7DwF8tPtGNeiQUSEpTqv2CbxRHjpTL5jrTmbM3AqbeiAALPqk2YkGqk1Xpn",
  "key28": "jX6gV4JNkyV99k9ZBKzoLUm5E8d7gntSg8YHCddkhtTGhYB5ENX3kbFbQgYmDniNm8P7vmK3E65a5RV1eMYivrb",
  "key29": "2gwngN4CeH3KPhW8abAPsiX72Mbi7PjxTBkjRzzyK17q2NhsdLmVvBx8gWF1Ybj6Mr15i8o1huSTvKDu3AdEZvsA",
  "key30": "4dqLwU45zvmH4wcLdFyLzLUSeD85aTPZ8tFAb4WcRc8x32q1qSNAcCmL3AdNqaEmATAWg7vo57p27K4RDr65qnP9",
  "key31": "3SG3us5meXC3kKbGqh9V4KLx1Zjvs8pHbcsyS3yjaehQRd4AgnJurDZSBPSNSipL5aijp7HwKpBZq9mpB5SNfayp",
  "key32": "3mTXNpgU5CxmkaoizGr2z4TJNtN4sJdAgkAwBYr5ZSojXb7NVxq15KTBANn3gkazbTBBvNEe4KmwTiK1sSwSJE8w",
  "key33": "5szVEJcpcRyCvZq5kdCxamcJuyjC1VZWDXPZJKAhdRWMorc6NDHoSS5XeQiXyide5EaikzbRk33KntV1X9Y2wvSo",
  "key34": "2wFzu4oybeevmX92EoXA2Uq7VYpiRrudbManx4hHtyaYaikwBiQvDqiLwi2pGRXSfHxreT829AmTCuJUeztJb2ey",
  "key35": "2tXNL85ArKmmNTaAKx6FznXx96sZ1a4WmUmUTqJappyCN7GWPHcu7j1JhonacNALPUwGBmaTs7UUrhPn1P8XkM1N",
  "key36": "44eTEB8QWEQ6488LSDUsYzypEmDXvU2pKRcBsDrgfSTF8F2g5WDxt9h6yzpQsJLgwsSEmSq21HXUeJpMBei3tr36",
  "key37": "5YnP2hbZGnc6mfJHCRRmsgc84saWkrtZEkinfJP5qQ9BuDk9k1y2TyHqEM7PxwkH8QCYbEmpBDbf32MowjQRqW5e",
  "key38": "e2bZfPV9jyiQaDRzmENbABrajVm7PC71j8Uqr6UBfg5wcjowS8gwFtcjzwgoXSsWxLJw73yGqTWbqTa7mp5F4H1",
  "key39": "3YLkoN3oHd6bK79mFtim7khbGjhQwqVKw7r3u7JLrxJDKCgFwpArd8GRRazTbQ59ASxWXPTHYW82dMDr3QzevX4p",
  "key40": "54HJBCnU8p5SME3LWTxExNm8CHe9AiJVm3LuVb7Gc5j1fYRq2chTw6Hctx96BYafbx7Gqs1ZRHCoBTzDurD4iCjp",
  "key41": "3uQ5265UqMWQJtn37YwGpy9HwSmjPCfRPUaYj2YrHSj2mLGgCynQ7pyef7mEBAoWmSB4tz676DEHsTM8tYbndmut"
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
