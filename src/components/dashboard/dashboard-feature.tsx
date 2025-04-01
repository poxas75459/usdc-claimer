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
    "nNCzc7vopCNubyMqUAk4MrAxyJYnghyrUkv2H1kkiE4bNwrto88Sca4MMyX3HKvNzZwLuNFGwuZk7dqZaiuM2rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATnd4fqC5EEV3KzPCUtwhNm4RGHHuAAL7FNPwutqmmFq3u1zFWEN4cDM6iLqR9XupUKB4CtRAgwpRpnGid4f1pt",
  "key1": "r7djX7ajVa2JyRL5LeBJ9nmYx8WfWrupgirtcYc8v1hTqoDTWXDdouyYkTcargbDo3CJ9Wfux1xvCMxL3zNoX5r",
  "key2": "2Mu6xPwhzwQWrTf3hbqXNpsm8acx6wrq3i2LR6GZhnmVYHcqtVGwanLVr3gnvMfvKwrfrkUpvwt1XvwHMCVprRDu",
  "key3": "3cztiHk7tDFzmVjenHTxC12cbjSm52VYLNSBxQrLpsoQmDoaJSkvJxD3XWTdApfFwuCU4oVfaKfsKwiX9icdq55t",
  "key4": "5hJS84HX3KsJ4r2YdVwPJXukvn9y7daBwR2oDi5nh2FEFEZGkaPnyA9EdGJ7gDVz898yN4vjbmrU1E3b9qJ6tWc2",
  "key5": "2sNNYMjepYNugjLZ4U6u6mbQF83J5wsRRk34fkz8mzVd15QmkH7oTnv5MsWkbqGEM49Y6tqd42tuKqSbMoo12zRa",
  "key6": "2puzZWMpEdAcG4jkkGxqs6yi4W6z1YAM4EFtdKZs5h4diSjy1Y1ZG7WqYK1MzfP3m8V8N2RwhggxZxrgx2GZ4a42",
  "key7": "5691HpARJZYCCn6PHJnvZJ48hvjEwLBoJbbBkaTfK9FZkBJMQHj9oJw4SPRWHnJwS3vSE3uQDxBtsRovQWG7hcf4",
  "key8": "3jhjVLjwLe16LTQVrbzPJt98KqCLF3dzFgvh2wCBGBZvHmghNUN1p3MwbcMx6pFtk6rk3BXeQdk3Jd3BPL2MUj1C",
  "key9": "4QxVsT46SS7xeyGuVN2RswKJChrmpv1zGD6CBfFCHgTEBUH7KNoWf9KMajPjiPEUsUjWin3jrq9hmspBxcb7auc9",
  "key10": "3TDhS11BsBF5ToygwK7mD8njwGeTx5oPAfdMxkZWao6mZrvWD7gfnF16E4qPKvYC7h73HmxkyTbtGsEEhcM4fLYy",
  "key11": "3GbyoPENcuBfwohCr8QASr8jjCnKrz7Gmdz1xqhVicr7VmBZSQHE21Bh6xjjC3U3mQV17wk6RHH8DJHMYqnch9JN",
  "key12": "4u5qH2YswxxTYwBsjPbWRZDRW26MouF4tPCXbAWu7QSDn15iki7xo18PgirT1BL9iGvjkVKfWcjpe9Kan12Rg3vn",
  "key13": "3mGMFBVpeiZ2Ub94d8KMQA1D9CmY7CmJoX6opUGstPKHX2LGWtjAS2pRJydkJY3uE77wxzkCjoX46c8bWSk1pzB4",
  "key14": "5VXNZa3yteEYDRq4zxxGQfCDCfHcWeLY8UMTrHgZqPQHJPF17KHtYnVE9zjUQfoeSQygTaxmCZZWSjY7PaBEgyuZ",
  "key15": "5fVZBq5RuxT2epLAqjE9E9NU9GeMbec8ViSbQm9VkBwsKEBf8i69pDr2NboPQtujByMrmMoAHu1PoE3gQxaVVgAr",
  "key16": "2mfk4hLaPZwXtxrwetddViipJFaxPKcb9NGqSLbupsysjhasEntVDivhMUK7L5EJj8FpZ543ZGTMawbu7TsrtM5v",
  "key17": "38rT8wfwrZRGvL4Eew4EtopeQsn6WqGS3mFeSbaU1RfiCXhrWn2q1UFY1G7gNVjnGoEDxb3ykP9J2nYm3JynYS4Z",
  "key18": "35nkJzFirjKaoyK5yBgbMpEmxHyEVBJ1vt7QLF1CRfkjM3qd8gNBf8id3rwG1dgeXxuDHJZE3nnbEvETrPUacgPu",
  "key19": "WnFDJ5A1owXmpBPqm6iKnkv4Px6uuiDJPtqFPeLfj2wdS6SVjN2WYAodvYAhbUzvANKTxEdM67kWYRMFv1k4MZY",
  "key20": "4ErgmxRHxFPNEXPDG6mzRKGFHCzBiunZmNbiQjhMKZmv7NcZARYy8NL5NzoVg8r6nKRg2quRc1M9UXd6uz1Q4YkL",
  "key21": "Hwm8QAGKVuQ1hFHgdvLobWZY3nh5sMabZeAdiu7GkGJSCEjM6GdoBucrTgoEV8qNiuTcRoNTMx25dC3vwDWBp2n",
  "key22": "56FgacCaxqxvUi9zA2GtKPjquXWVQqQNEoTYuyCDrbisp9vUzRxcQP1jLaRKzNykJEFj7XCA4S4v1MwJRwyTKK8p",
  "key23": "4Pv5CG8ZmXWA2k1YkHDBdZ6Yedbi5k71pDA2L1y2i3EX59ss9tRjtxEvNcfTppnA34M3VF4ap9dJAWDgqhMCnJT5",
  "key24": "2N18TXHwTDCfWSWv8shJAUzbjYGCuLXQH84LAokPhcQNSZqp1giJqREEU9EJwd8hXsQVMXcv4Rm95TYtikYAfhhC",
  "key25": "5eACGKPsa3HnuP6J8hH5NLkTtqXSVsv5325rUrf6uEyuUhrbVCNLHt3Be1GCo9CFp6R5aXHSb2ZTuE8sktdMjMHJ",
  "key26": "3vib4SfgYoSqfqTt2mUJdYyVXjTstoK4CJXeGPcHPcVfGvScG6xNkfju9BbUXqrqueFnUJZsa9qVf43HUnLrkLhe",
  "key27": "AHGxqTzSBtAmC8AFq93t2BAvqZzEKJ7Qzgq5cfv47eVMASsGwicxdqk6CVstghbrMgmsmoqoDrchopxnFw3WzEW",
  "key28": "6pjRkAYycRtrNZYXHhPGXJQtzTmB7JrQypKYiGL6PBjFjazdM2tciGTE34837D1ZS5JMLz79equ1ABAyW5xaNu1",
  "key29": "3prc1PSEoCkeaCNFfoTZnki6kMv4MwMCJQgCYmtvyrVu7DpkQfR58wyBd9Tnp2CBkPdyAPrmRcjqLJugczw8f5Q7",
  "key30": "5cSLz8P3vRLtYxBzbnbpDqqnzunkbL4YhY1D4oVw5gMRn9pdEBwKoiAwpuk9AFQeoBu8uB3LNng3X2Fn7Qy9dXud",
  "key31": "XAoWnL36m7nDrM59hepoo6XP7bDsU8NRCcwFUMMxmWfWF2dFWB4Sf5ANrH7MuiqQsfMYF2aQGqyWHL2BBm7wfzW",
  "key32": "4YTPuvfDMpxXMyAJPCoEp8VckzML5rsQ1wcptEqrgqov4hfnyrr8S8ojjZZYoPr5A8d7oNHRDXBKApoNqcCW2bmY",
  "key33": "dUo7cpywdytc8GofUtP5W8XaoXMsnC3fpf4kVacPr8osBAaw1sYdg2zosppZLEFjafKguF8WoT8ryxtAjn9mcov",
  "key34": "27eR6rNHge4MunFwQ1Zesd8x4gnPBZNRPsFJMbsSYxQYuaPJyfqyJESMbj1A3Mfrje97EQkjru7Jrbpkd8ZvK5iZ",
  "key35": "dMwGNQEYWMuyg8fvF35gagQsYkZSmEBDbfZhW3BPgzPx5Ei9rbQcJ1k3bXX9yPvYxcGfeVWhgM72WJ2kWJUrryo",
  "key36": "5yLqtZzR7yF6WbfsZYDJGh7bue3GC9q7ma5wyquGbpnsimrmpvVto3iaqK9ooW9EZBaqT8cZfgnVeJGyGt5Bi4Z6",
  "key37": "2cSWmVzeLcRwLMkYzY4AU5Mkjv268N5YwpjdbPPoSuZD3ZVUA28w8dMxrj4QnS5T76VrscQWAEg8dxJai3vCk4K2",
  "key38": "42TMaVbSrmCRPkq2Nbjki9ta9wV9bqYyNNq8nb4ZcSKixkwFLmgD61Lyyyzi9nSGZqvmrBTRcgwUmkYJoE5vRz7T",
  "key39": "PEUoK6bSfHnTYjVLswFQTKvqWCxyVyCoooxvDWqUG6w3SzyjJQjRBrD66AQmqRkNnJ8LTYavbBzf2bi6QtDvBsh",
  "key40": "2ugivg1V8F8wuM1AYy4ifodz6E4XEBnex39gkfCjGKuEHN8RdD6E5GBcYEAz5QJHeUPQZUAL5ixShRD7JzPQTJCV",
  "key41": "52hApBtZV5gSEnb165jEMeA7nDdjUt8hSaxmDSdNx1J7LZEMGXrEV316ZFhqbVr6bCZCMRjPiwYJhHu1bXKW9bSV",
  "key42": "5n4uitk7sTofnt6f3Zff97j7rP56CskvZ3QHMm46nZcfRwGtxVwnJeRE3cQa6YKYx8pmuwBB7YHHzcz8Jwa1adqi",
  "key43": "5JDY8oCD56PUbWsBfgC4a5UfP3EXArgQFNe51vA1mo5iudy19fgXzE5Cok5pWqLN94YRRQm5NGpp7YBf9uCanFZz",
  "key44": "5q2a7p6TyxFVZS567vHtCVRpsqA2CYnQiHnsQzQzF6iFv1kSsc7SqefoDBuzoFyqonGgwdbNZ5coyKMPPRUdEogh",
  "key45": "4GMUrHnbj1gnsz6Einujyd53PGxcCktmpvxzxVqAyDRRqt8VVJ69hsEvobRRZgAhMyWoNrJexm19bMDXtv1rUohE",
  "key46": "5LDUPFCeHPxASeTSL8dh9WrLZFig4iwn654Az2f6R6KfUQpJ6ffjPezwmWbECLLBkr5mJ7yrgBuMv8SJaYJauptu",
  "key47": "2RWUqvzkubKWSQ9Zkp69HwaShG7vdNsg4xQZP6dJ6oZMtnyUMo4jfmJ3ePUBasPkLDKT5RicpqbSoCAoYqC5NXEv"
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
