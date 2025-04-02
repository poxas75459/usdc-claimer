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
    "2nS72KmCkMqJ8ZG9cjViHkAtbq5w6c9vcZeSH1XcE3JrkbA6dU6U8zZaNYjgmua7hfztfpKa5R1P1F8NbP1zvSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QzKfR9T1RuBQ5pAM5Q3ZCtN9QMomJkGHdaWrRz96Qq1eGPRo5NKmd3Hc6zfmxnFs84cGm68V4rpi5GnmMW8neTZ",
  "key1": "2nMKLds8uPuy5ixm9gB3GA75J8WXaZdNZTAbJzwK1immhaS75JTXoNDR78s3birry8ndfPkGCPQcjTTjMQA8EyqC",
  "key2": "5XHpDH2UJs6v9S2mdJyYKJYUgpWz6JbR25rZynrZbDWxPVnz2r11p7ysaycLcK3jcRm2DiCQcPSxhkvNxgBAbyAc",
  "key3": "2ayS4yAkKWztTHVVDdXVzKLmNHEMRd7vVeh7MxMV6n9mSWDBADzzdxywC1atQTRLYURA5bk4fyY2VAr4DAZB2dX5",
  "key4": "22qoLefhds5PcXWzKLjwxq2kuT9Hw5kH7ixnE3z94rPYyrvDPMP3fwYKxFEivcKB8td47j5WyUSQf9CGqYaAtFEY",
  "key5": "5jK8r12g3C1RUDn79LAaRVwdY1B78w1T8iBv8iwe8ZgivdPaJXTSQhv7p7Qg1LpD7qTT1EvMG65v9jkXaTzVKiQ4",
  "key6": "2vVWMrP7RJ6UGuTDzuVsXDEFPKuaTk82zEUiJDbKjjKcHbGmg6HN2xVTzCjXpTJLzsStxpN4yetPvbTdTk3cf7sj",
  "key7": "4qZURixGsYS3PgSqfENrA2JobVCzSmkk8rR8ne7pwAmvYBHRrV612c1Sj6DBHyR4teru2cCu76MmhELp1fKfWQFT",
  "key8": "3anz9ANdQkzHS5PhtVKEPf2SxutBuZSSWcqPkHPDBV27rfq36gvuM2rGGqbZ5npzVJmeCn251QzLgzLQ7Cfwv2uB",
  "key9": "4o7phijyKybN9F59NG7NzqX4nEgg2YcHkcV1K31mKKqrEt3y8L4YUWoaEzdjJAkLsPA3YrNmWSxjwTiy6f3t1NBE",
  "key10": "2fgJHj63H2YoRZxVUBZJSWs8syhWqSFB8dkXJhtbYWFiu3o82apnRDwyDBLemQPx6f8TNkumXwrjfo3sGuHhtNyU",
  "key11": "4qgSjnTkDfH4LFM8GPZerHUJ4m2nKSBWqSoChUvmN4krGzkzWoUsX5dBXLXywbqHXjXWWNQhvCb74TpZ3ZGN5jG8",
  "key12": "CWR27K1ar8yzLeyw6LAXW6JWmxv8CiRPuRSyaYztrceZGkWrqG9x1cjGqo1Jbz7UhDSPKWPyX7soFwByQb78W1U",
  "key13": "5PijFtYmsVHdwVaWpEgqqwU3SsenSXMDBNHUpsarYqzwmi3s1QNQkXErmDANkyRjz4rkAbwZfGTEXjabbWaAbooy",
  "key14": "37aLGESVkgDSrYggksbxYaxrngjjoHh2GhhMJYVy9QdeNbuenm2d8sv8ioq8Mng5mM7zhHWdLPQKWX8gpsHjbuUV",
  "key15": "2qGxXfjzopLhosjDrMSfDjVFsCfMDeQaxH2zNy3jYnV1iebsMPpG8q6oiqNrk3jt5N9w3ZjLD5HbtqRPymQfTppx",
  "key16": "4hHbVkCy7ZVRVP4WLj5Kw6dyxnCVqKUsUVw8Vnk6YCi22fFjL5xn1GM4ZGS8edTpDmv9NBW8N7bf6N4GckVyKJSL",
  "key17": "yQEtHdaUR4TWpvhvjLRxv1ZQhNPDUCjXjxcPQ6mLs4Dg16xP9aCe1gYqJCpCutZ32tzC2RBP9GvNoqbmRfQJqw5",
  "key18": "4UYsUBH5QnFQ7XCoYpUrbMhytb9RxtmYnZpZG5nB4zjH9yVafbgK8JnqbqGq7dKSsyN3pp9friJohUthoQMCBwcR",
  "key19": "2kJzmGMox8qWyZGW5SY4NUkwD1z8o2pt3zRbQayEcFiuM9g4DQ96zxHoh1PszSgfxo3ej4WoFN4TjhTiyo9jwKwR",
  "key20": "2bJeUvmQKB69tqSpKwjXMt8gdWcBLwjjpKvfTpDL5meSDg6vYmV65tsU7ApsrqTJVNqFASafeCYiTdYrV1pVZTYz",
  "key21": "5A4fJNDkAAM19QdHcV6HkkzVSCSQqCZDR9rQvvGRXWvyJcn6bz6D1ozEchZudH5R1yKANCNrmQQ7DvAtk8SihLK5",
  "key22": "4c2NeSkzQPowBGpXz1qLnV9pUtXxW7nVMxzDDhpH4maWwwZJfjBQgbU5TGqpvD5vT6otnoz77SgV1NSzg1tGuJhz",
  "key23": "yrZqNuNJq9gGPkJwsTVA2bPrGurwqEUSiQHWnoK4YqBnpryEFLLmcL9Xo1S21TPij8YSCJLA6WXkakMGdHNcTHj",
  "key24": "pPxioxk2vaAFnmzS26LJanofhvgXY5HDPh9BUhS88crpr9UfvWpi3kbXSERrZwNQsiXJ7MZ4rbg7MiBzAJ813oy",
  "key25": "3ufRxVEDbzijUDdxHB9q7A3GnSDkEXMi1nvCtrLm472XZ1EbhCDEFMbBhUEUhmHBhD5J4DfKeWj58ZY7UGnbKVQS",
  "key26": "34i66bAA9hpwp2k1BYiN8QzWWYqmknVw3AWhzPck9pDE1J7QF8LK6LPk5q59LSAWgtHqdEVXLz9967y7HUCNUTcZ",
  "key27": "2XSUPU8HQYW3xQpbrNxw4bZqdMBBi1a8xcw5ZBJt7M6CFJQYwMP4pLH62s97mLzUTqvmsn5zS3CjdordErVHbPcp",
  "key28": "3aFSNbwnmn6R2LrmRmFhS8cJfYVeK9W8ForuD2nUyM8wsT5uHFhFJ3qiBZ1MsXoovGB74UeGvjhtCT9t6RAwAhZG",
  "key29": "2gruR4wXAAmsiADTvqz1YQZcjrb5LLCUXMw129Qzhn7MTA8NSHYYuVwp1Wk8nxHD5YCJjeM6fAyBXMNwi7xEf9tp",
  "key30": "4hcdf2wCae53LhM3kB32SgQivQGRUk7oDdjXUrwvNgTxMYjeMgMy4NZKP1YqQ5HHgcYcJDksFU5T5jfjqobknmA4",
  "key31": "CvxeeZC3Xg6W5QouxGV2TnYRK1PHS9Ts52ZLg9viWuvbwb21BKed5HaSH5Y1jjYTBwCNHVgNTvvTP26MThFTpS7",
  "key32": "62M52HsG7K7iFUj1oiFcsWM8Re5ScNDgwSf3d9YCxX34bCFxXXKBRxBzHF2Xw8HfWMhP15yBete7nGQ8R51SVDYM",
  "key33": "52U1cCPwXrFQDaNcPNhziYzwGShDgxTFCDmw6njMdErFxdc7xUCeTpYSSHdorN6pyLhe3AJJjdGWhphj4KDyLUCW",
  "key34": "7t824xRYYSB5bwnsEiqz4Catb2SbgvBxv7uPeiy5XHaK1j3bFuN3oK1jpULnjoW5ZkH2V94hXtFx153KuViB7FU",
  "key35": "3SXRDVkwiBU6w1qSanUCsZ1gEJvHqGKD3JJ2rKe3Rzmhk4cFsZncjox5xDqFeongSD2FKEUtgZ2ERzmRe89MZyFM",
  "key36": "rpMbYpwWX7TVQDN6X9KJeCxVy33xLjBu44cmdNf6mKwtUWAYG8EPXx43BKLyDzhnsf9TNDjgtkAaZjFZXumdc78",
  "key37": "4BrC7hEFxZvN5ta1TFPMa32pUQTC7fq4Eusw7cJ7wVzD33TWfJNYZ4DQNbZt5cAHVerYV8Gsy3YRJG8bef3cu6V7",
  "key38": "4k95ciY56iNsU6CCijBycScu51DPuoMhx1jgDXPZrD8KeZcpoaZKERKafYBnY3hnWhZcZ6CPESP3GWrU59cuW37H",
  "key39": "3kpG4K9ht89VzahZHDxXJ656j32toLqWH3pfF8rFpQf949D34G2BYxLNKy6psyQiEe6NPBZ36ceGjmB2CZNLHkP4",
  "key40": "4tUjPUnLMNZAo3MEwpPaFey1grnjBXwgpm5HtzphDDXkxPA2tEQvuTw9Dze9drohi7b4518QQMR7zMzgBp8Rfpi5",
  "key41": "uuBaeaF2K1xEYke3hj3stAEKLS39UWRi3GZkQj9tD1FKo5haRsngeLQbVXNmVc43aKyiDiseN13PNtN2dVv9BEq",
  "key42": "EZJLj8Q7M73sSufEDAZe6GLAgLwWkz98W1K79sieL5n5oPgGBgo1SyH789EjsUo1B9SdN4qixXFB7hmJbrcdquY",
  "key43": "49TcwTvfKHJEhdUPVeiWkhsZpakNtXrpgeWfHZZY1BbSzMPuB7uP62JSuCaxWURQoRcGTtcxtZWX8mjuroUZRfnQ",
  "key44": "4iFgbMZCtVE5CYYLWjahoAMrq9b9VshphQ5GxMZ1t2dTRWf1gS5AkCWXLUtTG9n3nCkQnc5GbH43UMKSmNvMqHGX",
  "key45": "5PdTK1xAPt9BRQNjCTATjCmT282JVD5H28W4Ta5hsz37WurGjHE7Ec9822Md6LfhMPHEDPEyitAynGJpJWKuDpsy"
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
