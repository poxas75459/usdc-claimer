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
    "3tDLxbM9g71YrnQmRXtA1fPqVD9muBm2Zrt1CNkkYSsXLst6guaZHJkspqpncUpUbjDwVaR6NzTnAY1DywurPGxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25PjBeeq6R4pTFyUf7xMCjsTUvBkceYHnfnA4T89kLwc71de1s4GREz8VpQhes8oQjAuXLbzfKh7XYWayTmgCSG7",
  "key1": "5qcBDkUXq3z3AtkPWvtgHBXzpsdkC9aHZPVEByntskns5xRqPBRCCcrimqkesUPHZrgNhPyfSVph2UE1Dcd2vRyC",
  "key2": "53i67aTwArKvKD6Zivibwe5JvqsaQcCcsfrJwdw9uvHaXoy16RjVzLNtn7R7V2UY7ApsNtbfst1d4DFPsNVireHR",
  "key3": "3rJ361wtSdmWwq97G3hnLGKMjFoPNwf4MtBhYFCfgXGQj1YKGKaV288uqq7mtktya2ohUM5dRNypTVBCtpZNDT3j",
  "key4": "4UXS93DZcDrfRuf8Mo9MekYNWELaDYanYVtHxEnYynvWUhGQPT8Mk1Pohqxvx9tWDg9nstwSctZAAxfEw7PRHehS",
  "key5": "3MYNyUMSUNNMzae5aWidU3f5svj3ssBnuXm1uzARVsb6hJaEYuy6CfVMQJ9a1wGY8Qy2hVjq1xecfpS1UdrPqgx8",
  "key6": "5sQv1sXRGtURYjrGVM98ELGKsM2NmcpjEdXGjotifJqd5Wov9bdn5wt6B4xQvZXUaeL6YBtaXCAfoBhnxphRxxSR",
  "key7": "2MWxJMBq6GLdt7qbS1rexwPM3aC8Z8A2zXruWVDo1auNBV7soweagLPDhZ8BBPLZ1xPukK5KdpRX1YEGFiJgBWu4",
  "key8": "itEyF8oEU1ecPpsEomYdvh6sqPYbQBQjwQsYbzf4HvX5dGXoXweJzEubGKK7zW2pN3buZNMhrsQug3LaDGo49JX",
  "key9": "KuWPE5buBTvXft4b7MSAP49AnxPDcQjZsWTvyfSEG5tE3eCJHuaV6puiafEeTtJRWxniFGVta3WSMRQFrEEUWcH",
  "key10": "j5Tacjjow6cH5jsk6g7frABS1e4dqYgR8QCn15gYAos78q9Tj11kCt8T74AjtbayAe9c65oT2hFFcgCLTN7oZ58",
  "key11": "4tD8XuAC2uX1rvVyGFFa1ajfpvonYSEAuqv6R9ySsFqUuL31Fm9ZK6JEgAoDSZVCyFAV5oKg17Gw4U6ANFrUxDzQ",
  "key12": "3HJwvo9Z8PXXtF2M3SBGeXaN73vGDJM3V5QhjJgPbgsQxCPRySnTje4dbrAmfhxK6Sf9fxsmMXMyVT31AG35f2eo",
  "key13": "2H6c7A448frXwL2bUYEjE9FmSuc5r4iR5owfxQe7oGuHiH8cxgqkUv29zCnRWyZwr8iFtWdAxV3hDXRuqHoZyYfe",
  "key14": "3mva7wmc4W4zoAsENSRxweSNV8roNXwav3cRbk9AnJRf9tjb7Ktur6PDc4WDFyqioCi6xoBJA7cNfzvXDSUFmmBk",
  "key15": "4eCdGiVbtWkpTeRH5WfaPKzi8y9z6zYksiKcpSgTP5CPmPCUTZYLJ85kqRs6kGg6sBmJBvwgGdTYC6yMB4kgFjFs",
  "key16": "3wMuBMiHUwi5Hccxw6TP4vaP9BwUtHaUfuJndBWdSYpLN3avWkMjTab1YsTg8vSLkyKKdtFBbGVXiVBwSqzM2frj",
  "key17": "2Roa5zfgZJyNtkaQbRrBvwWKCYcs6Fsg6QyBKZwjga4N8oMwwkuVkqsE5Ms6sEUkEfkLGD8gUFMjahFWWiV9rdkV",
  "key18": "3CEgKAk8HfhtLoVverGwp999GwBvWSqFoksYv8YVL9SrcixXTjfzMd1HCD5PhRBCxgePUUZnxMdHqm4BYjKuTj5A",
  "key19": "3Gpch8JaxAZFGzJETZyAzCANshvFS8N8pf8Z9hPnSSpvsusPKyAKuX6bHJ1a8c8NwgWxtmUjWvgX2iwbUWwbKPVL",
  "key20": "2VuXU59EU8BRBGdeDo5YVhVKCzAHrZ362Ep6B5oToBfdpUdZHjDR1UEbeG9tonoQfG3AbjnvLDk3qqF4xVdHuZPT",
  "key21": "5D7sSPAarL5gEdj1yK44WxsTBgyBfpnWVbJMPrJiCY6hQGCyKFVVF3AzVa3TVZjTfTjYXhzAy4Xk5suVusoa4kwG",
  "key22": "3JSAEXsn2w3zumkGhQnujGvoxUwnqJLxqwA4z4oFFw95qf3eAy5qzRX4n4fs3PQj9PwF9MFNZcT4LAWevusTXFfG",
  "key23": "41da1Cuu9ueQhRxoouYicTeqWPuk5ZTReVzWzNdL41mn98RQaexsdWVgfkWsZjVLaSUfQKRB21N3me7W8oTi8qng",
  "key24": "2thJhapcuiexx61chfapnA2RcuQSDaCsjFMbhJwtx2JG3uNyW1EhtcVtVgv51v9Qy8os8QCzMk7RaaA4s3GmQJWD",
  "key25": "3td8W971DLkxvYbLBDHAt87ko1n9tuy3WXkDGt8H5vkMeCk9Lrkw7F41b3qKv9NANdhRzkMVSrmUfhQqgK23CMzg",
  "key26": "2bfhaqprgUQCJxQ2tq2nGPAWQKLBTntiXDaTryoyUfJXcfEjt99kYeeSQf3hhwdKX7METNBzDZ7qijK8VXY5jNKe",
  "key27": "3c412j23Kr8s4MDgEEJ9mnYSd6MyYfKf6ujUMZRH2V2zy1muacoXdX42Qx6s7zozksb63puwbtdieizPDpBz97Vg",
  "key28": "2HwN3tDeyZqUbYPqoeiRq34cfn36cQUAUvmzrQJNoTxHwhqxtseRVHvuBaLig5t4oXqJKGsXukJN2zgDGa2pamCL",
  "key29": "5JAtMc48DTR4LXoUKT45YkNKuz1aLT8sixEfnTUngTsWDWuMUbAJ6kdBK8ZQh4se8qq49SXfuktSpHrNmwBNcdTc",
  "key30": "4sznhd3ZY3UdvjJfKFuLwxZ3rHu6HubK5UZPTkyDPxgiPzE6Kqq7ZdZ9JSi4RAp2ZZfJChpEoRmarYtpv4x56gBa",
  "key31": "3HmTDWtSkZq8xszgsU8SzMFKEek2VarBGYYxqkGq3Dmg3Z1fi4NowJkDhAYy5onPDheZttXnx431R9wzCrGdLMqg",
  "key32": "3MwW67jhuSjFtThDyApKyk7vhndEkoZHmXCnkgdmAT6chdYbV51T8Uc6AMpZ3QwEmpWzEGmrf8ZyNkZMP784Ljaf",
  "key33": "2shosGzX9JqoFQiRhPgjE8NQnU7zxLwFS3MyQsLzUk2kiWGnmiGaTv7Fkyr2r55ZxmG4QNkUZZy5URjwfGrmZ3G6",
  "key34": "3JbRmXmWRYPMJn9R6be8qW59shuFCXhJQfiLrpgnvUVcLXsp6YKC8FYhVn4A8mmYwgnZ1okSZm4euB7hvLFX3Wm5",
  "key35": "4w64fMQEieqngfWptNTY565UnU9bTZQUdyq6F1rSDM3wX5xkyhAfyj5PwpF2rZzarh7WzjMMaChRUdpeMBHjumAm",
  "key36": "5YjgRiiKkp6GtWUuBZrSm8aBQzq2RrdeFBbjSUh65TQf2AV93LbgiKQoNQd2rb7ypc1HVsNGRaHv6PEBD32xAc6",
  "key37": "2LMep14L9o65rbzgP3v5ed4AAtEW3PUtfRhbPhUMgUCZ5aD6vMVqnn2k91MduexMkmhaSFe67p6qbhAiR8gquDxk",
  "key38": "3gfdXCS7KgQiGmXmox7hjaUwQQdJK4Cd6V5AVwkmR9WZ9Lb8YL1ja7XJ4xtKCkBouM4AdKsYF7qUiUBSH1BdCMMc",
  "key39": "3vhZKi3GkUDpk1F5Z1PxQTxBKJZyk39VK6MoPpu8DpbPMksBQ5xJSVN4DuFvTqHQNAytpsGDnSzeeX8ErST5mc8k",
  "key40": "5dM9EvAn7RK86WSSRfDfpUKBShSWKtrFL4VuM8jDPqLRjreTuCnY3wMZnVjrekGHfWMm5aEYVx5LMbGBP2B6LgS4",
  "key41": "2f5E2ie56d8s6nvvkEqnuBQyZYCRRtrV9xmJZgsqqX9L5dgn2iBAD64A7cJU7j1fuRhM8yyWVmEPP592XUAF8WeT",
  "key42": "3Dmi4puHYKrtG7CxueRcD8CUofgi8ZeNcV7GzHjetcesCDsvk95V9SGgq3pVjwHSAXeV3w2VSjSBLz8kxCjMpBbM",
  "key43": "22kNtfZMHpFmwWSdeWVX8bKavzPc1vBWgxT2oCQTre3aQQkzM3cScbjWgXiyUiaQbgEh9TuYcecSVTLqu9ut1KLG",
  "key44": "52xuXhkhs9yLut9Uv8Yb6NJUcTVfvKDozaFoauFDYe8Bc2hskSThUpUuLGo6PK8DvnBkyUeza11zsahsgNR4BmmJ",
  "key45": "4Cf67MasPb1psSeGAKbvF8ycvqLU2TfoWBqqyxecKDMokf7F3HqK8qDxeio89b4hn31MQuwYHVPTzLUfrbFJ8rp8",
  "key46": "3ack9DYZ5UwDznwF1TAQE66KN1zdor7ncitCuMfNAM2Cs87RrsPFQYxvLZd8vU6or4R3j4Z66u3nRuH8KDJijXT7",
  "key47": "3LpFtqmxvr1HgggxrQjRBZCnmyhNKk6MsA8YWbDGiQHFRiqEjqUniAhRcKwngnCj6euHwXRt6xsEJdndTsv4zsU7",
  "key48": "4juMy7ohb5HRdNtdNR5B9yDsRaYsccZXEq1LbaHQ5iGuekcW6DpXCgQysGkjQzA89N2ZyfNGY8Gcr7qanRKzS5JM",
  "key49": "64qN2DCpm11iJBG8Fg6fnFyJgdEaCD6dAhg6ZaNbuXrRLCn3xkTNZjadHnreXSo6YvYpqSXKDLdyw1iZuwU8cU1t"
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
