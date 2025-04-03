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
    "3WHH9UnXwPxotZbAoFwXhCugqi2NLQ8YinDKhiFuDSv1vCQ1UduBx8om5RRP1nMm9D9sig6rrcZrnSmvkRhFHGab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TADRn1KC2bpfaA1TmcUfo2RtUxjdTDSJSZn8Lm3QYAZukBEzom9aTEsfTKjFDTbfpKFo8vixo1RDQVwvAiWnrof",
  "key1": "5cu2WdNGCkuUZzVbVWoXuLmz3qnwBkj4ZEL2pEB8nEV1XC983my1wu6FUgoEKcQtAwb9qwj7sSUhhu9t4kB6h3xa",
  "key2": "4nNGDZ1kWfwSRqWoWPcUkQFK7B4pdMmbFfGLZL7x1YHLM472r1jtm5ZzxGAovjyEYHFxr7LoUR6uPQoyA7W3By3t",
  "key3": "62vaEKeESN6Xe7a7Xg2oMRuty8ectVRsA6v9pTp1pDLy4yXn5oZRpBVa5H4MJcNAu5PwtbpiZcjMV1GKqPRazGsm",
  "key4": "2HzXHHqjPFAqtH9NNLGhbK33XTy6xu5WbDpKr3oWceBGZvSPAq1h9mEWn3uhS4GoA5nzvH9F3Z7gEvHX32riKUj7",
  "key5": "3YSwDyyC2KckbXHQbPxcW1kHSv9AMcQLoPeSShTTzFRkZtW5iGK4Xmq8pLhS3xkqsSArLXAQuAhkqU5WjfAse9jt",
  "key6": "3SqM1FKT7K4BbiYxWp9B55i4Wrgyt5PNxENuUKnP5Sk3nwr1EUpz1R6KPohbomCqBo5GyZqB2a6ErX6EbNqtFJcJ",
  "key7": "2HBnfd61U89Gw5zmhRRNmQK68ekpG6i7nAPDDAzAQKh5NgaNCzZtczKrTdyuCQ41HqY8VCbXR133uv9onMhUBJp2",
  "key8": "5qBRjTqp8EkXtPHGFTmVmyDNUUhWMMCSnTk86mDDtXX7KaBQugP4WwnGus4JSXxmjFgW1YNqn3U5MkW1BLya4cMX",
  "key9": "5DnDzRe5qZ3nPLcx5X3c485P6bzMsSF5ji6ZpAZ2ENeeQeC7kKY9qCpV7MKU8etG59xhgPNmMpMevBetcTLRRLRy",
  "key10": "BJVCC7Tz7J8mX9RTtFWyKY5NRBH9s9iV2SKpSUebt38MbaEqvq7WrFxxQKptPCJfkfT5VPQJ551BUBvPRzdovem",
  "key11": "Ahdw5zaeY5N8VxdggMrk8RKry4mUWXQdAFVcZgntRUMiix1BW3c2TLgGQctT1ZZ3jTrxmxTP2vmZqz8aNMPhZtH",
  "key12": "3Q7SHx3BZAgn9Bw4rqNxEuK9enw31UVDi4MWuudk4t7vnmTGorTguZ48asdkj4V2mno4xJK1rzraULixfZU11Wmh",
  "key13": "5dq6rQxUGcQPghUXTFrZ8NcymSA975s6WoRaazL9eHtRg6BbwcHhQ5W9RhA4FH116UWwxTi4JkgK9HNad7hQSCu9",
  "key14": "DMsvGEEpGeD2FNmoHVJRa4n6LX9vF3wAuYAjdiK2qK2kYCgtTW3zReyWUwiqrnMhtzw5hzj4z7dRPCkZaws9Vvk",
  "key15": "2wum9kzc8Ad6vFegFmXQSmeZiojCi8CtgEH6bAWCEdntJrYLEmtqUJc3QXmdGXGhYccaFbizbpK6xsYzMqfB3XU2",
  "key16": "3KuYQNMuMHYTyojFzr8rTjReAqUJUfZ2xyhWJBoztqCFYm6kgDnwCShjykzJTmHMByKPCZtcbZSAu7qYNVhqFYB",
  "key17": "47JgGPm8LvgCASboKSMJHEekMQWt3gZL2ybWFfk616R5mjoCBWwsLaBtqFptNSdExNskmeWTgPcLfgnGT3ieNSLR",
  "key18": "5SiJjXDhmp5faTEqLTgUWkAKpuNZBTYp6kfdpJuVim8Xsn4qLmQct5VXQuqLnLbydwD3bzQNq6nLPMAuhw1913Q9",
  "key19": "5p137VPu2fybdPByjwWKTB827qVPPWwQM4YhspjKzG1EzqJbwmyErT1ZTAxZXWYHNXQdTXwy2ET7XMsbGz5BK6vi",
  "key20": "48SfTqVt34qjKLYtZnrGyXZBsLz6z1dzLxYBhgCQL6kTV4m3x9ZJyfAcptwmYRmLGKii31FxGtfwRiTKD2kpMHeu",
  "key21": "ShVTg91q6MBAW8WUjBvtAjBb23hWUbwbJbemqaVDRA2KU1jqke8QCTWnpY35Nmz1rSAk9cG52BFZPCVq1ezZ58e",
  "key22": "58UyNNLXrZ25GfKtZAb2YKkZKF3RVY8acLPwNYiQSoGfLWquzYsePbQcV8mF4x9ZUCZL7s8dZTcN781CNxD5YCJW",
  "key23": "PsgUh1WbkVAE5jg95u5hinH9LNHCTzaRyaYrsM8WAqT9CJEhiLwZJ6rFyNBe6Xh4gymomuXyd8zYe87T5rRUKSh",
  "key24": "4eDATSuXnrDET8g9QPc76EQ3e9FaiHxbUn6cfR8v88TU6xJ2j34xuHPAmjM4XCbToBKNHCGjDxQnQ4FG5qDaQuLh",
  "key25": "2ABiAWRqovHTS7GzdFKDXcqQYhND4yzBmGKKM7Hjzr8rnNn4dfhAR1iG77bNJtkdDaieWV13HWzbYgk5pLupyKFg",
  "key26": "3PSuWDGFiVRGSQwNiKfqEyrR2wJMyLmH2xLX7v2PNgQ7rN4f2zqkrcEuBwaedPBA56dFi6AYjd5RqSi7FRL16JS7",
  "key27": "xznQg68JjeDsEBLQzDFX3P5yTqbPKfjXG35VJTFbbxZgPcBNWv52uqFPVv3uqMvkAwnRgNKYucz9M2d9xwsqLtS",
  "key28": "3dj4sETcSUP8DXJC8UiSGVVSxCxAXQHTC3XM8FHNwcxV3UmiaPhmAcuz1TbhSPfSabQxcQXeRZR75uF3dtAzQCcH",
  "key29": "5XH52sscenQJv8bAXcdPWiX2yL38YWBHsLgwimXbyMeEFsfjj7HinMR7jiA2nU7xsPor3kzSuC2Fmai1rRTC87BN",
  "key30": "5QsbpJdTej1DLPAjfiXgv8LWsg9GWnGJXWJ9dEa4B3iKKCaDG5jMoRrXQugbBcGhBqvL9qbR37gcPeEr7GNLidjS",
  "key31": "xCdxFNRwDGzkd6myjLxkG2uzLeCoi3pzESp5LHxZJK4gBTuMm13kVP8LYLHAoPfXXHpbyiW2LLeNXZkKxcJq6v6",
  "key32": "49cKRMHBDLzHjbG2iXDNyU6AsqbbpUWeaofvtbCPct6P3975cMkf6BJjZW1ZqaJ3hn82skL37rReGitrDALH6DZw",
  "key33": "4zeGbR6yKARLeFdbEKrc5RX7hPRBZgRA46BxguBxo6RoQy7gmniXnYUjZuc7PKBrsWFw9Wh3u6dNvA6rNDEGdGzw",
  "key34": "2E5o4FVz7JgAqAeq52r9yostj3C5eyXUKbFoQCndb5VEjpMLyDiJemJESYRM8ATau83s78uEGEa4Twy4wJr41SwJ",
  "key35": "4QPxZML1rzvEn2sejHLtn2MYU8povH5f6BMQi2aMEZ2zxQtRTrto7iqgrqjuAyNnYikyxhwT3EJ4bEe2XTVMuAdP",
  "key36": "5u8gHwR3bGonCirV8SUWQEkDHMLerJW6kR5cBBYhiFJdmTBM65kdNxqiTJ4jzgyU7Th8YjNxHeTZqJCga8SoW4dX",
  "key37": "4nmwQfmDs4RSBBNe5DCkFuXzDq1trvoU38sKNegZMYUQZEaKws4f5F39yKhWciTZ97XFupyuBH1MUcU1rVFrDSHp",
  "key38": "4hcrBBkruEAfzBTgH6YeMbbk3DRemWpFkVkuA88pwqycES3t38tvKE6Q8rUs1mNYKTxooju5S327GBquVdMJJTGD",
  "key39": "3DSnwNTZjcga4aDmXufDZBGJd7zKozLL5X3jPUPKpcRkVsnUqz4Wnd7o4cVLh4x4fy4nYSrh5JdAhfT8fXSVSsNH",
  "key40": "nFvSUU6UnvTKJJJDbefwu5E4rrs1KGr8HxsguK6UEQCYYD1hWLzFuY93TGQYQTVgsiUuxdYBCCzFyMyP6BsukW1",
  "key41": "cm4ZYg3SVLryc5KHkchJzv5RX6s9zbeH38TpvGXNe3miFjL8CsyXAm5Dk3ykFJczn9jg3wYzfNHi4gLeDLebenb",
  "key42": "3m5YRzgCk75WQ8heNe6bwjCGRKgoQJqvvBvaSGHLPKosxRDZNEB9EbTHYCBXCbAobRrpi6GFHWRnogHqcdQaLwYh"
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
