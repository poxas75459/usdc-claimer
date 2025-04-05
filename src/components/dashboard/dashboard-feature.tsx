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
    "utTk5D9S5rcPKeCuuTLsbyUtT7AU6kb859FEQj9t8qAw6uNfSodr4c9syVpAXWQajrA5sNXeKPL8oVPCGAHZzZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zexpfJ2yGxi2mq2beZNxXzBrTU7NzABnHzREyrAXEwvST45Vpnvrm1hdSMBnmNrkWkLkiuS485qT63e8PEpsTX",
  "key1": "Wusg7RjcW3XK4aQzjY4zANwsRzbs4sezFtDaWSo7Q71j6SjShJw5jhzwXzdYuuFLK9RaNeDCZ3WhFRpiob5F4bL",
  "key2": "2bXiTUXsu3eWFh11rL1ZUfu61U4mMV6YPSQwTVKB8uSvoAvAyGwtZYpu41jbbvgt7NckG3na17qTqSjrDhC3PbMD",
  "key3": "5R3qXC9kz35L3bYgJLGFsjYC11sKMonryfW4Gqk9HaiE7eSLgcqN5agDb9SpNUHH3yG73WaLvCM5x5zdTG1Wwv92",
  "key4": "ZifbKJsF9rMTmnnGb6MTvFY6rECbwrRxqsNNg1bE4U4MidwkWwiLd7FhFdcjeDx8HogyRbxdy8W9n9G4L5tpNsn",
  "key5": "669qiVh1jNdwtod8NmKF3NwEUNnvSqxppgKUUtK5tQdveU9rfyfMHBbCuxRLwB6EQvVmdN744gtU42nsdxcm5P2Z",
  "key6": "Y1R1qNa1w5fYZb9tyXs2WfaehpBkn7qbEbsDk5WnYmGm2J6DMbMZENA2XDBZ39XcR1sfZjARLjSTqzLyzSJQ5To",
  "key7": "4zmXC8ydQNwadtks5NR8oT2HTRBR6Hff9HWNA29pxsyubEN65JQ3nkjGuJiZEP4cEvg5kR9mJ5bJaWfeUJZnRG8r",
  "key8": "55tD1oK1L74AUL351SoJVXL3eb52nxdpLUmmkVJYvAENfpU4x5MvghrHA9tPdk8UMaFycPJMjMr4Sup3FJAb8fsC",
  "key9": "2cyoV6vGJe2ocnntvX4uM5wfAvKd5aMfzinEX5WN4d4RsusfwRPXAGACbKFQuqtEXGvz3cGEzcS1nUX2kfJMvykT",
  "key10": "3gbfyTZB8hG4MTYorM76DxNGHRqZdAxYsJLxu7eXYF2CQkts1qESTdyR5t4kSY6ACD1uSWgZBzbx1ubC9pepvQFF",
  "key11": "4Vxw7sfAWPhqLLzzp51yu1we2yiezwNzJxRiYkCVywg2M5bUon6T6pMf58S6a5WuhYJ82CeUJRZ9UED4iAVcRxJo",
  "key12": "5V6WM9EuzSv8vNfBqaLhsouE6Uzz4sAQ1AL9Yu8DaeqA7SvU7tgKCrWXMrQBvQGNPt4jY15UPyFQRBuPYT3gdrRE",
  "key13": "3nnJQNnPxNBGjR96eQ2tCY1D7PPVjEqXmX6qW3A72Z8CjrmGF4egdP7Zs4iqsFDnvTzoL2wGk2HsxvojqscnZYiM",
  "key14": "WpLwwTHuuiJEjXt7wFrkRK15JTKXEXBqHA6Mh5QEQjmZDesEW8TirCjPg8yFAVH4q5pUtiPFNAy6Fz2ELhZJZJh",
  "key15": "cWtqsRNZS6NAxtPvkzCPPSzwYYsSobmAQVfZ4mEQe3FTgJUofSSt8P7S1Waq2zuNaZMRMd3mjDNmuq3fj41t6ou",
  "key16": "2Sg8qvQZFCvvdf65m3F3MxsWXCRqLzH7BfuL7Kd1X2APtH4aFLWMgMg1mE7CjCrb9uT3mTkHtY5Th9ToXS4w88WE",
  "key17": "3zJaAFptEkBzcqdCU8nb9BLcjPMXdFqQ8XtTP5ju7XtEtCLyNv6ULstdnzZXaDCt2Zz4TfLgkygs4WzfxLWXuMBY",
  "key18": "GuirXs5pXSnEW34Ms6SjC3Gg39hwEnywosX5AX3GWXno9zrucbvm1T4z6wiNhHnUhsaMcBVx2hUD8ug5VyYXijc",
  "key19": "3t2ScraKkNBWyFgXDzdBBKLsraSmJ7Lo62D1Q4MoGhgS1sjwXtBfPjWSPhQUwX3t7B6YPb49mBH2bnTkiaEjLxN2",
  "key20": "4v36cL6mCp4WGVs13h9yLBCo5w7myUTJq4bJfestP9BnAP416ur3V3LiK5EueseeH55dYK4yjikp5wVAvm4F815m",
  "key21": "UrwwnMgDXYFwuKCRBG3zg1RNZMrfQbt4svoephAmXzpKKVVkntJbbeursT5VfwouS7jRYprXAZsTBbsKQhcZLEb",
  "key22": "wVjGjUfpYwcQebxQ4iY9GNYTmWzXWBEVXWuWmA8hW86HwuwcN7B6FsFveASDUMwhW9A6ZEq6cN3uKPmyXK4Hh4w",
  "key23": "4RZdoECgFFAZvrWBS6zHUQq6Cdb334o3uMvEBY4QfEQZ6keJ4hq8dqAE8DMNcvDBU8qoTh8eBce2kbGoR4dDfNkd",
  "key24": "2bRDgpqxXZhPJVW9ACAt1UWe4QeH4b1EzhRniBm8ECVzr6jEXkXXt2t2TBd3KYUXoU9qbUmx32Wpc1A9P3YQ8sCX",
  "key25": "UPi9SZgAtRrgmuu9FDH3XJrukcaYUaDwbMyQTygzfCqphRskLmiNuDWmrVtQGhvphjsDGe6ar8ViFm2aEocTgBL",
  "key26": "2VrdJiSy4GWjN25Eib6zqmTRqwDdfgpH4QS7K8L3NpGDcWu1DpD7yA4kgZM9xUxCFvU4gMJhTiuUgjudEjp3YkGn",
  "key27": "5EPg4u2hgR4ZnTYyzzpukH8MNLwvUwv9futioRSSR3NcMd2PStzHgB3BHd4G1DX5viigGpoNyKgjzsXvj8X14vB8",
  "key28": "3S4JQyPQ2joqR6aE9Cd5dpKYKfNpht5SYX5TLz1CpyCLwbRdZH5XLcuHE6EpdHUbKuk6coYQEQBddtjAVtbAcYUw",
  "key29": "4xNczh8DjogUnDa3VDio1Gsr19yhFR6T9GYtCC1oPWqrxd8mvnuCi3wVZjT1TsEXDpq8L8nrRdniLjQXtjgxMNmg",
  "key30": "3kjsoGfVJXKMADhXSgWFUqufBj7WW2cNn9AbzD1Cx8a5RgkTiLmuAVWspmJsZKJDYV7bjNKarUFPEqf4bxoJmHKv",
  "key31": "5ZUSYk7mYgAnZr2bGn7fSapUSXoJ9Yi8rGbcYtPTfLGY3LXVkgpPLEghVaFyVw9UW5CYY6x5yuUmK3VFrgkD2RJ8",
  "key32": "4AKCGnhcBK1x8mrYgt1xh8ZnaLn88YBezv57xWQiZVAUwMiD8sbMybogteNT8G4Jhq7vzXJfu4J2Q3Uan1XXYuA1",
  "key33": "3wJULyS6W2CSKySJtvpboK47MTFZCQMzBehmogJb4MT13PpAjbUBy9kYQ9YBncRfoT75RhAyZzUT7rGBt9oFDAGC",
  "key34": "59ZnMChSBWrKXVJ76TMjXs543k6ZLvN23wb6Sn3C8TJ2UePoeDEzgHCMJbU2StCj8B9yFZLVNbupjnnH8uqsoLX5"
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
