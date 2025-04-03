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
    "3z4Mr976nKyLtTmXuviyb69TTHeoLHUTSxHrrJqLuovt9DWSH1z5qKFv2XsPnJ5yraF3idrQ3qqVgSJMV5Q5vUJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJSJ1FgyQ5Wa4Qm1NzGsRM5QWCQMBETS7fxcytW9XVMnjzZWoqUi17p6qTeX7BMJXVWwJgGFjxteDWdw47E4B8N",
  "key1": "3mgQcK6QwHk2iHcG7P4tDh54KvBHZDKqGS8ZB2FoiidHwK4znCPLKSgBrvx9fkq3pZhkEsjMAU2R2kGFGmHkboC1",
  "key2": "2xUZ5erC2U1LwL1pSYcWeJYgxXaoen6WYzz7P8Rrj3cCCassqQEh3M87iNwxFLZg5YKeTPH6wsjRx3pgTyG4GFtX",
  "key3": "2aFDJmcrbTYJfXJhANjpGkCr3TK1tYBTJ667d9RFFPo9YPtCXTBa1Hnp4fVfhqYzFDkaSDjK3btcnW1WxW7USMWi",
  "key4": "bUeXuX4DHtRqAgb9uC6FcZtr8zUvPUQo7BsrK4sdHcFTHPfCbFNd6MGziRNVs7EZg7vrRMnfCC7Yw9kcVJzHMKd",
  "key5": "53nkErSUsfMXPM6AcFTsX8vQVRFD9HWnqraQzHv7PAZhnDoNq1mA99FS31Q6a6xcmfGoL25bGZjrEvAHmLLSAVGi",
  "key6": "2NCaqHja3egoKgUZEeLqNJHS3XU5LFTF97YzrBtDuhj1JEkVX7AkvHcHxUbDHByRRhiKDUeGsavfXvtiHREnJB7w",
  "key7": "G2wq8LmSafabZjaAAmRTVTJ7gR1LsGEQK8R51cwRTXyJF6epjp7D75iwrReXYhno7u5zqWZP1WSPdAbVW6Vq65J",
  "key8": "4o88WPJbnLKtG4569NuUp3YJmfiU9U5C8WDebjCGbgDvXnmLPizK2ZwM72gpNHszjPmsKqJbeVk3McFpioc22WKq",
  "key9": "dMQjpFak7CLA8afH2uyYWUzMFTJPdiqjLNLPmirkgF2edhwgRAi24WRjBWrGK7w4GhRmmPtXmy4TtRPwwBKjTQd",
  "key10": "4PWxu3GmbohoaaohHsszZxWkLT7wjHu1MJURMff6b8bYe3yCLXvDeh6ULNKNR4RoD4K6asdabFTiKHitPCckGUbA",
  "key11": "2t4mx2UEEApgquGaEpzKsDUo57NoYRnx5cWeK86mzaK5PDdi1XN3N94uiUStKrmSSGjF64yWjDMYaaTLB4HKJPzi",
  "key12": "eBBwBN88MkNgqpH5M4X8UjqLp3WUYn2GadXuveyq37mcWs4hFEUimFYvPEsfPmfKEf7zqfVnS8RUYG2vyiKxQu1",
  "key13": "36SXyRVrpQYz52FCcVfSHc2SZ78CXaxuSvecgkuQKSS5znQiTWTraiRiR6aYyuQuA2Z5b5BhC8vPAeZub9rCdf83",
  "key14": "4AzDfpvTYuzsdoBfjJTvsEmHZPuTx8xnDMGZCRskF9Mo5vwpygAD5UfQ34MRNNw14jcV32yH8Y3TCxjroULbnWTt",
  "key15": "5CVpTYWgYqJcsoRfUCUsAfCFnsurjLsPcR6zZrfee71mLUtQaL8z8Q1cZK1SuVwSviZrmgj2BT99SPbDrodRjRZL",
  "key16": "5x4TUzmY2A629ZVk38dpDMDZ6QD7ETKrkGbcgT7ZeB8tx3c8rAafjmKnf1HRkyW3ZJNGq9fr59cMDkYAUwFvfBu6",
  "key17": "36nYm6xPipxxztcdANBbJkGoEhC22SJY5XwTsHeHeE3Csu44itkgVL18f81AuWcee19A4Je324jay8NiMwAJyJEZ",
  "key18": "kA6iMtJqLp4C8Twkmk4oJ8GjZDDy5b39ZyqXxRR3NvjGwrrWJotxcQnf2QbobDi7bozfQmEwZP4tudhxeDdYuTd",
  "key19": "2kQQBtqjte8oRh8aGNbrpNq6SYbnNNETs9R1hcJuM7fsNsoFKQwEEj8HpFxKtE2wKz6M6XJtfjq1uMj4j4wVbHDF",
  "key20": "59TLBcFtfDXeGv2AGnbHiXadMBjCtkSDxk2FsZE4VEUu2dgpkhTarSEBzzDQoWqLQmTioXdTPRcajHc8dDeVXZpr",
  "key21": "3chY2jhriBz8ki5PnKeM2MPR1DB6LswXGe7TDpdt6Zg84gbWXJCqWdaGe57s2fzEDJpaC8VN4jXuHCJL4r5cVJTK",
  "key22": "2gXz3T7imZat6C5wqpU1QiVfCnjD9VULFMzCyCyeSyp6GhRRwreZcu3WAHon9pVstJ9nq69FXMkX45zNdfJzmZta",
  "key23": "3tKo7xBFXafy3jtHSzumk4YqPGRMy23W3TB5DkwBQqNdVYkdtRNdhBCm7Nh5dEwpMDYi7pcHo4r7zTThCHNkn7Zf",
  "key24": "3GoqDXh1bgApKeq6cDNjaMkvPqPaBV7iqXQNx9pCRBM4m1FB4fHdhGBuERZ2nkZxAoHkfYUWR5vpM5scouUQYFsj",
  "key25": "62dUrkFWDrDUf1F1YdFVgSj4axGfyX3hXut9LRi6hJhKZxFHJXtBVm1nczBbfVxj3QPqNTRq3oTn3cgPdgpNowfj",
  "key26": "5wRamsYZsgBZKNvDowfLkVmDdBHMkbmjsSTjmgWeSbfEw2afhZEqRR7CbjNZRkHfrA9cT9Y1ioeThyknQ9VFC4MB",
  "key27": "5dDq3QCLVa4D4gTXBZsixhQTmPGJpBRrhui2DKDGUToNA98e7TCEYW6ofXCYuR8UV6daMWMkRgxdHtpvigyeDpRv",
  "key28": "2m3dEzyYi4qL88B4fuS8tKKmXsJgwr9bvrM5asmoKrmBCAiit3vLfo7qVmMf415vCavQUnSMdxSPgRp5i2eKdTUE",
  "key29": "4MyaYeuxUrkrVqLvWQcPV6bk1zBxhjziPLizg64A42ycfGtupWVZzeJVpLbV1avMhNY4MgU3CCTSFgDvLe8FUmWn",
  "key30": "2TYmP9jvfH89jx9JHFUMy2X1SfmUw5P8XwND4R8aEzH1mioFLAxcP4Gb7s6DTdsMrQj2nUAzLoW3yGBM2CnpsxV4",
  "key31": "5ZFTPfFpHnM1aWrztnHZQBBGVxJpSzwHgMb6AMMFpqsjBXpNPrn3iJoEhEuWoqHPm8Qxf8KncU5EU7599YgV48ZS",
  "key32": "4CveuUimL2abaA32XhSz1nJBjLxEvaPcnzkCRD3yThSHC6zXKqj8SevAziTVPAouUHb1PM1iiPAhmNM1XJjWYhN6",
  "key33": "43S8hFq8nPhkDJw9Pp7MfSKx1cYDPLDXgQJNp4Gs5ZCuz8n4RQ1zkPmxT8gjSAxBSjQPhDmQ5eRjVou7pRmxtTMD",
  "key34": "4ajaZxzaJWMA89m3kmnuUQFjo1LYkVJLfnixW3MXiXjWmEYtpLRfcpwTSzo8LozNjfieY2wKh5CM9DaSKiN1GnDv",
  "key35": "zfuVu43BWCBAkcTUuM8cEppErtpYVFBz6ecFbtWUu83f7HUsKN6J75wwWUrQUbBqcW15mp6TXc1nAkTyGVsiTuA",
  "key36": "2HRUuayQespq6jHTsqd8bEAkpa4BbWyoACm4ybUnxXMQjcg93mPpWXFpwWZ5hSS1byEWBgSu7jaLr2v47SrAFKiE",
  "key37": "2YNuBP1WGxotmE7jM529hXNscPMKbLu2HoCyhVVuYKKZuJBeBQHsZBmCxYAYsW6N2Ph5UZ7A6uKoUyVhS1M47dmu",
  "key38": "2UTzqCQ1dZ1cswuVevRA8EHiG38CPqc1wr1uAkqioT7K1MJZVC1QQtFFmj4TMbWbQE6PR3mNHDbDQyTQyz1EkTLM",
  "key39": "5tr97LK1cHrwcaCAFvRXTHrQ1CXXDLLCbQCEWpn3nxVRSKB7HiBQkurSVUc9rnirWFNFRnsj3NhD9ZDP6fUvNLx4",
  "key40": "3hzKHfb1Ys3nCH73aKrnhsX4S5FxLbCqj76RxVgF4ijh2rhZck242J5FhC1j7j4GyrqrY8cnwk65RvQjfJZBbrVd",
  "key41": "5xTBeGkxPyEvPKe9zuoHmCHDN96EsHTvFTCM6Jf6viYG1dpJnsN2CMPoFoZt26bAfyhTefjyKW6aaq24JY5jkW1S",
  "key42": "4znGpeY49UXyUeAg4zHQL9ZJSQnZLA5eh2M5hDHqUnzsJgBUxCssHm2RvZaZH6FNfkv2Pjnw2gLcAbwhi9dViLiK",
  "key43": "4EWXhpqn9QB2qQhHuxpfknXfqheEZWg2SGyH3C2Spgqcq5oF8HyPcT9jeve4U6yFveZRCFM7ULhL5KLEeUq8NFWx",
  "key44": "4Se8rKsxgCWJfnJbLb8xG31R1q9EGA9Zd7c6QEe6WVQB5BPrH4JZ3sDdNcQQtJfbwPftyw5gtfYUT7vQitGqkwiS",
  "key45": "3q9kGZVVJHGQUou2DKm5tXxGqxYXsTZz84PV747kTXatGkBRtZjbj8zHLKAentJeHhTdEvEwQUZfHN5A47y6irJ9"
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
