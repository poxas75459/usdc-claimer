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
    "4KYuNx4NFi3krd2r58qGh9Tq8LHo34WTceTADBmChxYpB1ZS5q8vPQydJoGedUhsfgfXymxcVuggVbHdAAVHNLmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Ar87AKE8q1EbiPYhfWRjVoRjjcc2bRuFeJ5qo43F97A3L2kWN2HL8Lp7HFDPS34LPEBWjLpJLeK9iJC5Ud9WTL",
  "key1": "yiVdHe367CWsj2KF3itSqa5WvgomueM8b3ShSYp8PuaEcj7eJ4u4SUzGFm5aqNyRudXVJm4LDoDtuAcXdGNmtqg",
  "key2": "QXUzaEBYxQgcrL3YSuHwxNC1LiXwdvWmehUV2fgpw8tPQtyHJjVBJZYTSfGqPgbkGpPKFpaH7RnMVzikNAUcEBF",
  "key3": "Snim9cjfyof3gT1QdpBrTazLw7qQszzAPjKsxdsG5WewwSCjccrBi3brmLSQsj5CnZBzmd8URC5RZuHHL3pWMn5",
  "key4": "DF8FGWH6cDmD8PpzwwcgJ4e5G7nxGiK4CCLsthY221wsDKspZgp13XEQf14rsZfMixNxvyMkWyAiWdN4Khscy9W",
  "key5": "48AByBbCYhHXvWKYiUpUjnsUc68dFBxFe4tNqXinb3H4dcFHoxV3rJJiQXCkL7tR4Utk5FL5AFpsHHSneBRpGJPC",
  "key6": "5vagF7g52QsVqFGeCEcUssow4aEJhcGKgW8e7pu6MnDYuwwLTxhDMtrQLQVf6mzfxK36Cj3Lpyt5HWzbot4umGQr",
  "key7": "3hrcwJUb5SvS5Kof9xddnaPi2tnVX1B2h7SSH9wueJeYHYVmDtemA1A3NqFXc1Vq67pLcg7GX385huJJW6Xipank",
  "key8": "mxT5mSRtSRVbwueYbf2YFBDe1Gbn3hNfd3M7XYvDCL16wpvfvhmev4hrqfuSW7zjQB5hkDYKF54VuEs2ARmTUUQ",
  "key9": "55ZaytpV7ReK1mtqmbqttdxpFoD2G7LRRr9Z9QwSErNyiPJHPQg5BnxZGauiKh4xXy9eJhQJs6ZmozkFcCQZvZee",
  "key10": "PZmGBYKu5V76W5TaS1NsBdFttCZDUStFyo2foX5SjzEAHtimqXcFon5jYycf489fKdDaUw1tf9Wetjhn4Xkj3s9",
  "key11": "3b1RY7Winm6u4i6C9JQnB8Pnfi5VWuhzHzNBAQFS6XJW5VtDJXoBUNqtPRSu9SL7mUKNy1f792GwJCpNN88t6har",
  "key12": "2JPopcFKT499QBtbzFqnZ93Y1KFSNDUveTw8CHk3KxAq3K1atX2oWDiZMgMsuNdGPrbyUavXmYasvfWZiZag832g",
  "key13": "4BagNU7N6vhybhcjRkX8A4rrZ1sParh7Z88UnGcJZwiBPBnHkWcczu5ovUSevMVA8jbsMQQpamgNFSNBgaFK7a39",
  "key14": "2AZf1rheyb7DzRnrh369pnzDHEbsiq9WZDwRXxjea28UTJkQiW1SvT5G4qc8fQFWNqqjHBBnhzx5mHen5d5fwscx",
  "key15": "G2gQQxK22skzNdBsJnJUWoAdxVPsrYvpV2Le4FC4kaqxFxi5isT9wSqC5FLxXAzQ8qUhuwB9ZP8ZMHz4eDyNL7U",
  "key16": "57J2A8EBqyaUowyX6WMQFNLgevjntYxPnuv2pEnoca2yYNqiBw1vVCobcdjEU1KCZ7o4diTxLpBvG3PvBiSZ1wLR",
  "key17": "P4gCiLQzo3REqgG3s5EJaehNdyJiiYBp9e9hgMz8iqqCgHFkDsQMuePFvHTPPQfDVZeriPgM3jEVuGb74SPMHHC",
  "key18": "2uKAAt9LHrHhh7AJY6sQz3ANSaxg9YGqeYBQw8pPdnyNW1BZjsqHTwjybK5vePakCGNpRx3giGKq2dwMBbsoC9wK",
  "key19": "3fz1tvgSU3Ax5f1MqUu5gpu39EtHXPKUyAQRrbY51uwg2y9j3ZEt5MsDjydiTBHKtuwv3NqwxLg5BAWh1DPmaGrs",
  "key20": "3cxEdUxCWnAe81BVSaFdetXEpmUuM9d8M4ipy26AvnXoSYuyp4M35HRpswGC5ot6tcfm79esoe6o9aQQ7jYXH4Aq",
  "key21": "3J5pSSTBvXJAHud96iyP9gNkRVPUX5a5tvAnUiRMFq8a1okZqJPPXeYUsf3Whezj8t7Wedc5Vkvuhnt9puQxSmea",
  "key22": "4x9DH3CsnsCjXM6ghG2L5ZvKgRSejkJX8W7i7vTsyn4xBE8evBv8ppSdh85sccNEAW2Da4YmMnRWkaAJYH2Fxbfr",
  "key23": "2LaHsFRiTkZ68ACKvfzkxjzoPTVKzgEtX8ntzwLkFNiAHvS3msHM63XdRoAQu35ZaEJnuFLiVxb4iZo1LVAB4swQ",
  "key24": "fHsNof5oQR4FtZhRFtH2uVjFZYDqZJGeRiYaYsN7pzX2Ffg793BnJetQBKj4FtDPqgQR1BJesS4SHEeopNC7mfB",
  "key25": "YMHB8kNVnpx2UUApfPpD6ygyHeW9UXeQtuji5qzy7x68x2F7S5VATY5kyUAcQ19YJQowqe7PW9nJVHyxWJsK6D1",
  "key26": "4zu8NUrstHueCVVpxxFSwDhwPUWKJ4uMwW4kQMada3NjtKxRy89NxY9YphrvErXwnuC24UXVJWuz39o5WapHe7Zw",
  "key27": "2myDnSTPQggY2xyGDCCjYXrRwjYxcJgmsSB92SSEU12jds1KE1WHm8HK5Nu4PkhNU3NNRMsvEfADH6HC5cRiKaoL",
  "key28": "5kXo7uRk6xFSNehcKzBvnvnfYM3HzYmsyfDfHyBrLdc9ooCsSQbXH4u3c9rzL5Fj1cRmK3znJ3zW9h2tptgmsmBD",
  "key29": "2S5XSMWww6y48BCLqZuBTnBPfaesqewEqfGVA3z6QDiYPqMFUaD8L9itmxtRuD8y3w2R3cKWnHyVXgRRtoLbzuF3",
  "key30": "W2HS75W3eabdqpjQzfAV85GZYUDZ74nxwrx1a6FamjmVXuqose2MYsVv71rCtC3qhW5HcUQZBxeSiR33bvR3mc7",
  "key31": "uB6LB67RwJienjCs6qgePcXJS3LzVkaUNTKLQ62VviqRGCqxpqgH6KE3qYkQ66bndGGRCAyz8VPvfn8Tqw99wCP",
  "key32": "2QZZQSoEfxHcDxwdRnhAQ3csNcnnLZtakRpnfkuS6R8Rmgixuf6hSucM7hw2qhWTt5iAZqUPng2iUMzykWndxqRo",
  "key33": "4xLvVZpnA5CZcdXa6AQakavtJZJ9X3jgNBUmFTnT4yD6RDRTuJUx6hC32ZSLNcrdRYYQqtGercJZGdJYbCnpDEfU",
  "key34": "36AefBZXLqj2zay6KMopMXqNivNhyrLv35RMZqhhjZMkaxYfV4ByzumR3vvz98yk1C3fwfKhFpQhYFMaUB3yndN7",
  "key35": "PLtjBwpnnVhNqRauop6GfLLi3J8BN17daxTnHSWrX9xLt2CGiS8V9rtFx9SbycdQxTBBpN71u5VavYh3dkW1tWE",
  "key36": "41G6E5EWhY1s4BDFQ8wbxcUvZFQFnmmkCGVYR6HPSLYTWJrjAMxKnwTB2ELHPaVNStSjKfmeTNmDhWpVttjYmqMi",
  "key37": "5LUL3zp5NcPKddA6jMxRwTTkcaEq1szHVySMW97uB6PnLepBDJXz2aLUqLdzT3a93CsvhUV8LskVybXGNiu5NwpL",
  "key38": "5EXhp9jHGq59F3Kfvb9GTViir8mAUUgodoDuPmLdJEE67pv7RKMW2J6kzbnY2xc8yzwvRMRwFnrSZgwtjmYNFKdQ",
  "key39": "2YSHMGodcLkjRbi4nMQsAtvBSewEnfjfNoQs7565KqXMAe8T6ZuQGCADojhbWY8LQoZCmLU4rGR2uBEfTCLu31h2",
  "key40": "zFNki8EBmWNTvPW5W8d5b4satMAPy4WrWVi2Hos6VwbE7ARyKm7M9RFbT7AnKkC6KygUgukSg8r49ibFiQndvHo"
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
