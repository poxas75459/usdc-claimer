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
    "5vWA5vJfQ5GeTMC7VPgJyDkqHxNtcidVYQR37Dv88Tg7sfVHzYDC5USfzHVCUThHR4xK2X3z2dzPULu9A6h1Bniy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WxCQMRYgrFUoM4JzAAKz27PHcgust5GJeLYZK9cqUcJLQ1WPudcps2cD5DUo6Dt4dRGhDfCYwG23BtjZzN8FMuz",
  "key1": "3yLjAZ2Ks5F1cTe4Y7xoFdGRkx38hEP4m52MdH9EzgXgxiPAyCeSdzv2uiBGK88DKBTLCjyQC4FCUgroqmAuXxaR",
  "key2": "RKjJ4fLeammUmJ7yFx2TKMEWgvsfaQqBEVdMBZkCKQBFeXGBmgrss8n6WJVzgVsxgpyLpW64i5LhBQqzjZpEkRe",
  "key3": "VjSBAv9734HGJYtQoyxGTLuZ6pdndvH3Z81Tz5iGdVdatHtNG7wxTMQAJbKnctq3fMEww3ZUtVTrNpKgBtWKQq4",
  "key4": "4CgHihEKhks8FDFkmUqDeBU1W9bUWGvM6zWyWHN4V1Cxj7zY131wqpeQyYymsx4N3VYHamSC5Y3BWmbm7iMVFYqQ",
  "key5": "4BoMM7dd7gzWpZtg88SCdWQ7bXfxEwpMPmZJJocacVCxHEDN9Db2xnWqphGtd5FoYV5Dfe7DEb3W53zWbA3WYX6x",
  "key6": "2WWbTXHpHfDWqFiojrQ38ZFNirN4WVUzcinMYpwPw3si8b1wrizHQoy48zKnEmxjqoYRtRJXnNze7eiSxg3BHrUn",
  "key7": "5Bi1Atw9GRthZXy1DStdnBryFHysiKajSaMhqdLpgDBYpQYsAW6GGvV4kgL8zCSByiXxWKVur8XaGiec2j9MyBY",
  "key8": "WUdHx8tC5b14meN3pRzA4YGaGqXM3zKkvEJCDHq2EBeYkXFsciRdonYhRFMb3YBzFi8rNg4umpzqTvkeFxfG4uS",
  "key9": "CzwDLiD7UZ6W1HHPuop92afbtC9n2ike6gSk9QeoaAXHdNiV2fZw71rxpxEkXM9Bz1mzSQwP9oBoHuZKjZ5fvgE",
  "key10": "4DB8DkqzdCz4sX2oWuq4DLpCcjpFmBxnACEFgi4Ls8Hht72NHKyWxMVa1jXmWbUxvibN9XdyUHg8zqS3yNBQBxUW",
  "key11": "4mwh1Nc7MqxXfcVL9HabnNe47MB1W6DFtYoNnSPt4TYWZcaVJL2ToL4eLKiYh89WP7op5ihL4b4TUffXJSsYjQtg",
  "key12": "bTjhGSs2xxghApbNRMGWDsMunXARbcdqazGPhevoriFbTSDhFvKxC65BtC1idoVitj8ExSxMmrfYPjv1Nc6D8YL",
  "key13": "67Fqjx26tRgiCnL8m6jB7BZN7i5r7XzeAPw8nx2QmB5cBnhux5tVq3LPmpgGVZTdkCSoVBh8Vu21rk8pH92cKsmZ",
  "key14": "3YtaPt8efnZ6xQ5oXVZfR64yssj5G1xe5AikEV96Hk2ktCYMjtCwrAEYfRuJb4aGeBAPs6nrALUiHS6c5KjwrueR",
  "key15": "5AXsqPnwgU6HuqtD3YEPurqFEEJzLs8T6f59oGTp97GRqn1eqtYMYbzgPFoJgkt5QzTNaJjnuedV8E9H7q9d5NH9",
  "key16": "g7gHHNWc8K1MTX2gvHpTgRNWivQX5MMUCndqKZsteKQ3M5nBnQZZRSc66mDsUKrvf4GNjWJjxLN3qngb2WT91Pp",
  "key17": "5rmKit8WpWTW6gJAJABBvU238LExUhTaAQmZxQvHy6qom23c8j6TQgc5EsXKnPNPVZFkyvAkLAzqH3iqx29hDbaS",
  "key18": "3jddTzkMvbFHPHJAz7Z6Jxj113su4yDxMB731ArY2CSFAWjHC3McMfQJqa4Mnw4kbgALWCU9cxrfdUqJedXQw42W",
  "key19": "4LydYTw4vaJYVaF7NMBE6B53NNaiLCdVatgZ3Xqs32mzBG4vyJHQQr1BfRAJhzb4cHEzF18ynLGwNind3wfGhY4D",
  "key20": "4c6hXUaUgQnUQGQyernZ9mYG3h5o7Kw1ayQoZZ34kP4iHXTP6E6v1KyJ3zXFJAkWddfwp2pB6D3BXZjAZySE7Hmo",
  "key21": "24dadNoh6YPkryCVsLX18wq26MHrhoCfRcEpzaPB8w6jteod66E6so6RdWiHbo7pUZWbwBMK5L6qNyySfdAWEvGi",
  "key22": "3Ge8k47mfRyTExErdimh2zYsHHCwfodTtADe48bUi7WoFog8YHzgEfw2j6sucTaqFTXNBehnKALTaTGT6YYpT2A",
  "key23": "2gSGk3QuPNazXVRxLcCW1MGRckbJubeW65UekqPrAeAQ8n5JTQF5JsgKun4Ey9RRwAujH2kzmj6YzpoEZxnZfkDH",
  "key24": "4jDNA1xbkfkuqVYYPTeNfbwhDNfQ7mX8c5z3ZYot3Fr5L3BMv8YkHwtywFoZjuMW9HDSxVpTSP1NgoBtwWRfG37v",
  "key25": "4diGC9YdE6YouPSYuhv1ZYfJKdGQGV4CLtTT4gohViUB6YDVMGUZAwYMyosPLzVfBEstEZvrxoKM89zvL6p49hEu",
  "key26": "556HpTawahrY8CLJms7rsyPbxmP15EchejiKpkUcM4qnn3QB9JihP3YreKkFT673BxE1aQ2TsegSC5QjDfnWoqEC",
  "key27": "3HpFETbvYhn4YvBnjHzmWZiqdtKDKPGVkCA3tU9MAVX4HcLTRenMzR7mLAnJiVYj23yPHv6FSnJYmp1YDp3PsZW1",
  "key28": "7sf46UCrsuGf4XeL4HsLSRu1eKEvCUh5gpEb1wDmQgA6J8Mp7JXQi4McLn1K5FQ8T7oiSCEjj1gxT3MAKx9Dt8i",
  "key29": "3s39wQbskbTWormMuCZ9xUV89fpBufoy1RZZCLJRpEA5kPumwJFzSAXaPPmyMNmCtmSu4ZJwBjvzpYSx6CzMEwmv",
  "key30": "4EobidND48RqThpWTDDVkhKsLWVvhiEATgCn8LgfgAjdSgApAwT3uLE5PpMj2MCqu82CtBan3U3JUSrk156pcvhr",
  "key31": "zgzXbXF6mEJntdLrYvZyfaESfq9ojT4deLa3VMbkSma3QmnTXgEbdVGFs1qR94xXFTVJ6jHeh3rrRqHAHjLn2Bx",
  "key32": "3bneVqpS7dskBCy9G8kTXsbjSE9QCfDjxgUPngRAojtYrD5sEvJSqLdnvvoiLZ7i5DhEUfmromJR8UPSaSKw7NPJ",
  "key33": "3KUShdFQEJ4mMAkoqXNyB3zad1Z5iMsFyZE8nqvbvrkbnM5Mb9u5hbPLJTxgYyLgxwt6QQ8BrtKCA1dWi1NsmPex",
  "key34": "gHvK5SQqXP5AwZZjeDDGnECW9WLH9VhA8LR8KSQPEw5hh2m3gVk2VCYE3QTcfMYWYdTxKVpZdz17LSmscz11dxU",
  "key35": "3KviTgSsiV116Kf5Ma3rnomUtZcgiUEPyUTpt2xqQ8jJ42DcPBJRPza4n5eZFJc7RBZjd3rYGR1iceXoVKV7vXYG",
  "key36": "PUjxd67rms3c1CAe5rkMNmBKZueWQ3VLHrL336kMiRPDo6Lvkq7HMy5cJNDvhbsG9tfGUWEbtHVFsHbcxx6gyK6",
  "key37": "2BvY1AcKNp6CxTb8GXXh9EgfgpUMoPJcB4KKmYhXg3AokuUhxGYhiDX8iUGe95t6HQQRYp4m7GJFjY51dfrmH53o",
  "key38": "3XB96Ty7YHvYzG2L3NbuMP2Hi5QHE2EKD6v83HTbDoyT3vCg2e1mUwBi21xew1DEM7AKfC59Gxoqm845DQNXFBR",
  "key39": "2k81rs8ja68z2rrcwi5U721RTEMEUBeV1WcqbXVcUzusmrr41Zy6x33ZVsRcVKCskNAWufpwgCAnCfjvM6eYrBo6",
  "key40": "nyWJAMBGB6LJiG3KTGQDjYAsyoRe4FAfcMt1QJgpYkZpRT3rHxw4cTTybPQJBpMipktMn1oaRx8XuNvwBZmX92Q",
  "key41": "66GmJnGjTaRcTSBdVXWCkAYQEmQYrt5tCLGFNmc6rz3c6QXHemciZeXj1aFbkZghfJZfzLC97chZfmCkNsqaaj42",
  "key42": "3xfkqXVNSArfk8BUDhe6qMYaEhKtLVmdkb5LrgKKwtvoRXDWW6z9saAJYu9fKSvZo4R6YjaQ5kdHBB3kEK8VAQRW",
  "key43": "3weMZ1dCLKHge79jrZWe92gdwCGpf61EVYY3agPTW3ZpTRZY3XkP8jMN5THEP13Z4ZuGNnHkTjmuGPGNhufWk96N",
  "key44": "pdU6zPyEUKJh2Eg8mr4cpZYpuPwFDeEpUEYDANTqVnCWkj6wPLsYSzUDqkbzyQwk5yrqdwULA9r6N143iJEYdvY",
  "key45": "57NF8sUDBYLZSxxrdUC61Y6rVdthEh4rcLdrLGwb79LsqjLt8mMNEza4ZusyHG9RFYjfMTqTr3RKz1b5qcn3TKBx",
  "key46": "5qY9UeYLnWyKrrs9wrXQTcGHCzEPCJX149kYErnfGgtrSqvtuxQDkfCVzXyEdrJnfuiaMaEJKuXfHjjb8thh8nHq",
  "key47": "5PDpbkdiCtHt7RXty7fi3fAxmgNV8irgQNz5Vw1kUKS33z8rs4PsG89recNaY6hp5LERomcLZZ5eiqRX3p78s3LP"
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
