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
    "3Q6ntfxaqwPnfv6fMLbVABpiQiBxr5WRSzHsaXwHK3E9rddUk3LpqpKqXCJG5TVyDBLu5jFhg68Vh5UHFsh2Q3FG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCi58HBtzr9wTzsDo7x5WNb8NShR1qZzgBhcGLnPdPvP3MaqHcUE6YRPmPph1arW99GoNBEHYoaS5uRbhZmH81E",
  "key1": "5tqaVrAjhCrbgq5iGcYFEHxGyhWGVF6ZU9sLvwEVhZk5uFdvTbGrwdHKgvXkRTrtC2LctdMAExzAUaivpviA6iSe",
  "key2": "2AMzGmU9EhSc5A9FjBNapqicWvyE47uvTNwuFiHL3La2T5G58kxTj9Lfmzan7EZew46V4Waa8oLsKDosmkFqJjV3",
  "key3": "NsUyXEirTPymGMW1hh8yzEceVutoJvTgQAcwGcmfmMMcgdmvWTatMN7Ta6FfWu9caiAWjvGVoHcH4QWmn3PGjSC",
  "key4": "5nkD8KVrrZpF39qzTBEBfp8n7J3JXXf9SYV6HMo2aDCebtoeT7YAFC6q4SBZB5qa9ucsmK2ymt4h74XU5ksdHM8T",
  "key5": "27vkvheQSMt7X1m5GTDdMPcy3Ss1a2XkAENUKs63QumjgE1kFsiiQciLsSyW44BC3fwbvUQ4pKM6drUmkFCU6eR7",
  "key6": "2JC1xFs12FA7EaeQfnMvFW5b4sEwPDYDC9sLuH614jVJub7nKL6oKCbNFpYRdxXMfEN1DZ5iEHWHNgCPUDfe4v1S",
  "key7": "3A2AjbySKZmtLcLgy9oNDHTDTSK5NkRPBAJ6ArrVuq9dynvqwxqMeWFJnPWzCPxBZDTQ5psX6cQ68HtxZ6DNxzrP",
  "key8": "4MSZUrMH8pNcHVU99AC4bJ29UYBmoex9QJK3Z4U2qF9Wri9KLaWjA3gq6XwvqGYCkaRkkYFsAuYSecjyT7HcwKjy",
  "key9": "4Q1sWSYdX8UXQuBBBYP82DfpHVkmekXLAMpnARkwBk8oUQeN4u6PmYXgx5MC9Eo4hDKx7i4G9snQUniFAsyzov9v",
  "key10": "4JMTCU4GsVL8U7Qn5cJdciMFrQn2rehB4Agmr7bGCgBkZ2i2hfAUMgbu4BWXZnQzzZyh93Ke2m3No8JNXNUMzqeu",
  "key11": "cK4oXrehKtuQgoUtAcnGkR15ETCccNE38kw93DWyrgYhfjXTGZ6opLtXB8vkgDwKeaxe2QQMqohC8pgPQ5JFPNG",
  "key12": "f9AHqquEubgqYt8avq3bzLzEDjS7tzuGtnzorW7heGcuqEVTydnyV3DpFgJQArn99osNoMWXj3WRzWEENSVqU5r",
  "key13": "2oAx7uSiEt8WrH8wkBbdxYVzL789aebUqykpCWpDu7NzrLoWVNo4tYE2Edy61ZQK59DRXh7PpKhSwgCJr8fafNYz",
  "key14": "2j6gBiNYdjSgeYJS9iV3TWXKW8Mc1iUHgSdrkbHoJvRNE6c5PvQJkBkBSuAAf48zB5YgYfT3LbqmpFxSgBBt6qX5",
  "key15": "5T67RmVJ2z47822cKmtRSQ1BnjCwQfGMSMvGCGsEVNpMn4oLacuz644Y8d5F6SJAVawFsfZrDmjhpG49UfV3xCcg",
  "key16": "4yQFjtKRKZTv2k9c5k6wiehnLYvyqZPAnqRkRrU7Les4YYYzKDuZek6voKYAsw13oSVyQVo33bUtWRNV71GDpHss",
  "key17": "344WRoLmnMLpNVAZnitdPNh5F3aSB95HY6NkaGfsNHS2HrNsjV6mnbtfZCwRRyBhuT3iAKkVERshKQbxVDCAjr1q",
  "key18": "2XigEK7bCVuk5YgJwMLkBeRYp9JFCHvYC7KHCWkBxRLkUrNgSHDg6ABvEptmH8RjHLbiv58JszQCed1ZUKEbtUMi",
  "key19": "5xzQJKzosMSocHLG4PktHAQssbavRYdvmivSZPP2DrKDtuqNQzSASmJSXbGzAEtDymb1T2ogGToFbaSbBz92tDP6",
  "key20": "43NXRiAATaitV1qqfi29nPyUPGs8tJdfrKFCG7NJTnNbBQ1H3ezueoN8M5MtmgAJSqesdYds4a1nkzTLskXo1Ho4",
  "key21": "2q2CuFVfiY4FdttQBbHxeyimn8y2BSujMh52r8yvTvEN5GoaKqXa8eQjEfW3WYcuxrfXXW2bLqDm7ktjUGjmh9rC",
  "key22": "5712SSsd1Eq6aRmj4BM2KrgSkujhn3pZXU6Nu9XsksbFhLWKZVGAuQrDxCdG6EZpGqDQL14ivYBDTR2r7PvDnrBx",
  "key23": "3Q72QvvEtfk7CAtxiz9rib3hFaQkzniL9CynXk5evqxMCBniZXVUFR9QFwswN4icJxJb8ui1B5HRh5snd6jHNyNN",
  "key24": "2PJiSE9joM4V4gSwPHWNd6W7LDQLNLYgDgNTyGPS9B75BMKdzwsNv54tUhcCSkQuEt6pxq7pspPg4bbXF2evptT2",
  "key25": "5i9DLnvkyhD5L9jbw8DrEzhSj4QMK8k4viaxzT92N764GzYM8yycwgUaH5vbMVVDUTqRTfNgrVjQAtXkaD2vfXRQ",
  "key26": "Rn7iC8oqFy6Kpt1fTih7Y27ebyiaYNyzigiPjgTdVhtXC12nK8X8BzCY2mdDh73P2cwK6K1S5ks8DeCcphUQT6U",
  "key27": "K18oPSkpUubCcWVznedQKZX2Ma7soFHHDwdEwEL2FZjhpao63aHFhz1KZhLcRSVKz4ybsYGYoqn3UxLmipupoR7",
  "key28": "ZAhFDWWobijvUaRXHP8NxHrkcwU5LufEna6iyBQAk6wi4jjDcXaKbJC6Ytwz3C4gChWTYKFJDi58XvMqDkSgaTT",
  "key29": "5Avnwy2Xddbtfoo4B5EjkHuds9PidzMYHRqnFn7LXwVC69xTAx3K47iLobwY2bn3p2EFoPPYFpTb2uT4xAEiiWak",
  "key30": "52BcEzawpeveXX37EX5pN9eeQyBeWVaUmecbjQRMqat6hk6KPfgMEwpzL3EFtL7kfVP2Kfiutx8hufQbjiFu7ioH",
  "key31": "2FyWCpmVf541ypmcHRUw9LRz53SkneHFHrd4M7XGXSA9bu4wsgYVv82GPgp4PdCknhdQ7kBhRwSBNje3PTmUDbPr",
  "key32": "2sdzW5RWBe2kAziAV2J9L2ZtwHL2AornCrS6Uj8ptvqkDYi1yLchhrtioV8pEu516oudjYNSVvFEJ8xMBjamYNYG",
  "key33": "5uq8pnz5hAjRpiagN7eNUDA4SqTQTkNChFi4WL9ddEMVNc9HTsG76NihGVCVWxTxnw3kUr6D7XZCAxwPwVnRW8eg",
  "key34": "4f9sX3wnUd5i5XLHgaqLdJ9WTNGUMYmfBLDCf4HEFPswV7rBzaKyx3uE6Tft7cphNQZAWimD6RyeoV1kqhxpARLd",
  "key35": "5GK3VM7zU13cEorntRvfmAbtSi4rz8Vdq131Xz3hNt97H7kHyPcbwxh73dE7XaVxkXLsJ1J8iju31ciY24ghpDgZ",
  "key36": "2pdYgUN9S2BMCNRXvrerToA7v9b7idNLJ13fDvA677nVMfv1TxKJJHct5qFubLtjRaGmuTRc9nL5va649vzCDfWE",
  "key37": "65qsUv4Sk2je8yexPp5r61gthQP5q7SQRDX1SNFvwY7DJPMZHLitR4hd6xidQ8rHGRSdxebWAsdL3FRrC9HSKqXU",
  "key38": "4Hs8dpxTM7eqMb3KK2txqw75wDvX51U5MQt5NErnSj8WYEVuipnrULJFMFnmbw2KSpDYEHytvSCeuk23N4N48wRD",
  "key39": "39eeshCh3TjBQnNCvnWHrna9tW6ZPGC73p7FsWhSGKFUc99S1ZdQrd4moNpcaoaadnYZTiZXszWJNRnxMV9Fda96",
  "key40": "4x6Mum8Wx5x7dE5RjZLRsQSFuvtyMbEATDDm9bWHwYR1eaczDjWuycnZMuDph7PWDJnX9gUw5szWSdjJLzfVaK95",
  "key41": "2YNjm4xZmQSo9i4WcvcaR3dVeCoLePiHGatYgURuf8wRpVmmyFxdq9ghCmA8XuBgAHg8e6oSKSvRnngDhcEoy85w",
  "key42": "ELfGjuasBqdaXezEgcjEJRArT6Aktf8ymSqdrBisQGhXoMbgffPmmfAJpNgFHkC74XTbDwj94h73hW4WADA2zGp",
  "key43": "4YFbXam2cpZ12f7CZFTcrrnqJmwPUd9WQseBzebmnYvnk3Jaab3UCGX5oGc78FpyGw5WRoKqfTdAkNZXek1k31AB",
  "key44": "ttofCDV1wK9dLDTgzNUp2vdBdK5aV8cfBtuwd5ccNJHa19ViDgAz2L6kdK9zYkEVBzQbTPfzUFnrA7RaJSXFEky",
  "key45": "2de3z6Rc52P9B7t3Rk2MJo3CUtNejdETbpwkSVYqicYzMfuGevV7R6JmmCnoGSqii64QfzX3hXhGd5JPDe7WbsDk",
  "key46": "5ZK95PA5NjWrnEqydA9gxpdnDWYJGi9Dj5ssF1sj8d6v4EjZm1M2adEY3EvUfLCkwWa3tRtzT581z3Gr5Ye9TVAR",
  "key47": "2kLhDUGkrz2sNCaMxhgfAzuPjj8makbaoDWmj1ihSfDPrg1eWbJ53bzuBi2mF8DX3FZYGHc2j9BbQ9mKPGjasqvb",
  "key48": "3HUL8y86CuvNJ6sGU3pjAsQKKBx32N3omS3yLQn8Sz678aap7AqdKPmLKNX9ufYwZmHRPSu6CSpz3g7SFGkXEfEF",
  "key49": "igWo6xXvmuyhqdLxYyVR1voXsidT5XSiVco3ypd2LGgh3AVMNVNgCYmcG53D2DXTmPKdFGNg3Y1tQrKvhrKHiJk"
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
