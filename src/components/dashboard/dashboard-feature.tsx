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
    "2ss2FTzChQxSLjacVWVWRC1PTB27Ce5Xe2c1Ncu1rmGoeTRbFFjarLbtVNhsCk6iRtebUBZMGum2hUFuMsZvr8ov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E1qpqEbTNvxGbusLD7tGHoBCLamH9c6J1CB3i2dVpHCevDWV1cbUUE6pGqneYhHPT93qzD5xUwsPzVP76GYSYPC",
  "key1": "63fqGinbr6z7rsTRMuo5FhnZ8NwBwfpLJQkrELX8KqPok7Y3cCVZYaT8shL4tYX3yxLYt8Pyohkwq5UgnwTwZ14B",
  "key2": "4msK81XHepPgxs9By3te8KrYEwCmT3mBoFRf7pvHQLyrnS4rjV3eTf118Zc3JqzE16YyBVoiQqhvLcPbseYcdWfp",
  "key3": "EvUfJcVnSQzwqrygL9Pvo2dKCMdCqtE8YDBz48AUzS9XJRkju33avhXFFbkVpwSZ1scCRKGws2cWifieQf1mhSA",
  "key4": "5VaY4EcEjnyEL35ZwHVNDzE4oDC5AfJERoPqnZXAStZcfM5kxSEMLDACy7QG7MXBiFdtE4Qh7xWPPuNUWAmfLdgE",
  "key5": "2gNPQhgwKUWidvfLGU5uafepHjfC61eDu2rybRc2zmHW5ppwvkXP2NZT4KfYd1PoWF7ztCjQsfKnsFkR7jxibG7w",
  "key6": "F396eKGnKzzyYbGJ8rXbmgBZQdXaMvCmBZN3Dq8sutPJJuZNvREKgqwWNV36o1D1WJmbiJqipcLmXNBBco3jPpo",
  "key7": "2d5YkhzGKopHDCdVyUN5ZuyGG1NWpgzW5k6CfZiC8Q1vQj1dBYUzWd7VTLbjegtbCSqFRaweXfopqFGa5TSrHUpW",
  "key8": "5EsQu2iSCAkVm2NSH9C2yJuiuEf6jFBBPgSR73U5Xmor7yievp2YZRS5Yq5ZvVg5LTYrcshY7C1kA25W8fD3crnd",
  "key9": "3X2M5Gts7nccJWkiEVm992kiyH78wdStVfBEevfe2zdZpyqyVJVkgHEqX4DEMULABzV5Tmtm7b4BDWDgbMFp5a75",
  "key10": "4nwkHrGnAofxAUvvEVWJR7g6Fpd1jNAJ2MMjWFDTgQpWJYowuntkHmnwXEgGqKWHiDXPkJfbXpxZMXBWwBcG4k2f",
  "key11": "2GNFNX7w5FU5cBCWkqeFojp99VAm4MRjBwG9VEyzHomxyeV1ny7NcAqwop8i2C3uZ515nc5jKnYv7HCVyLsjzc3Q",
  "key12": "2Wq7dEXzejmCmXVJTWRirRBzwk9oziQKrqZLDyJCEbXCMAXMk2mHDra17mAe9wN2rrh5nKkuQJmuM9qGYxVZonko",
  "key13": "25hwgNPJqoMMHMgiVonwQvW9XCPGSddyxhhnwRv3jAWDy4hRdbWiPsUrHVAo6uYzzuCyx2GAQTLvEXTJF7ZTf5Fq",
  "key14": "2MyXJj5ydGEYFVAhVi5EGk4tKMhfc3uNBwZUcHpzGHBKfXkfCLc5hrfK3P3V7YjuHfW35NbRoicrcx6QPw4xZ222",
  "key15": "RkWB3Ju1LGPQykvU5LchVWD2HoevxRa8D7zZxhLHpvH4Q6Fw8cAaE9hq4iTiFZ76sn4k7pXj7rzzZ9Jfh7KadsD",
  "key16": "3j88s4jCJBsoaSmFiZFwfd6Ssoi9Qa9EaaVUSLB2cVGVTih6a6ChXZQmNuwCDiXNpVTfJZNgefZps2tMK2Zk734o",
  "key17": "mXz6xEjhnZZcTZKiZgfyMxrR5cJhUL8XB2HTpTAhMryTATGvqRMCKzAYvyKLcmcAUr8JnBq53DauU3PiFM6Qyao",
  "key18": "4deFzzowFfNHPVwB8LQuJMUgt1KtDiKgyaCBspjfPfL4NUiAGRhzK1HXNxqvf69rLT3zBhkoaVhmnkdkRTooUMNo",
  "key19": "64Efr4b1W8JNvH2QZes14b9MkdBTqvFU7ekJ2Dk6f75u7HbFzbqNXUx4EUWdL39mtjsRuZdauvX7RN47ATGT3uwm",
  "key20": "2ihcHbPR5jTUdtQNzaB62ZfwxeS78p5pwNHh8Nvuqokytsj7r284h9SkGcn7ieFbxvC4sFw1NgapkqS1eX64WTsD",
  "key21": "FgyPWwJuuQsEdhUjuF7nmtMq9voybud8ZHjEBprztJkqTPVp2d4ngnvCqmktDvc16GTyu191CnsduNgnb2hfz2T",
  "key22": "618gE3kpGL5mrA7sv2mpTLfLidCd9Cf4fDR9HoB9THZrkSbqwCrAQXHoZ3xn8SnM2MDV6MLTVGKzPtaC39UPsDRy",
  "key23": "2mGerfPZwHS6xNBZmmN2d2XyeX9FQdC56TYUWVJq68iCiRbgYxbxmAGtZVLFwW4Zhg9N1vYjKiiyTtzVu1GTGMiD",
  "key24": "Bva8RQuDVghaDQcfQRHatPEeZQG8K9JTrE5gfDet28TbC3zQPP5f45xWHu5jHh53MhS1GmWsUt4t8mtsQmSSz5o",
  "key25": "4D4Nym82TyUxnP5ehoPdf37qMd35KRi8zzwhLoD5Fk4ahkZskE2mKRCdamqSUu7cCsLox16CBg3x2AFHKFfyx8dB",
  "key26": "39zy1BQZGCgB6iBz1Fmvxw9LD1P2kFDs3ZQXeSSRNcYhzHCBb6fxpAqpyu3sE6YDqviCbRUMbFP1bdBPvYeyEtQJ",
  "key27": "3NwvA13MF4TV7khCQuaPbeNtNPedXBxu8iyBXDHAjqpCsiYQVdGEvVQgapgMw18tjHTih9fKR3Eqkcpj9ifQeQF1",
  "key28": "55dJyH4PKTVpwrGWdPTFqHYubDaw7UokfaDoAjquWeMDJggXAofGj15yQ2iC5dtrggzCh8X6AswSNwb1J7DsaJuv",
  "key29": "5LWwatHmBTi9MqWHbrtJGj2QfJncNPZV67pGBqzBNz4ZNAM6mB8MGckSNB55tQVTnHydo8wtpQJPMxqQrdGhdHbW",
  "key30": "5KPjsqg6iNJCSZXk1TjBQZ8hpDUdi1JP5H1LkHLsU2fG3V6rymwMrdKeBo1pjt5mDpKv5oQJXNa3VSjJk6tgi1Y2",
  "key31": "fQ4nNH3HjZotWGktC7DSScuNJSGUrgFMNJpLztcTBHLczHz89SMp36n6AVuxpLr8Vf7FYXGxNYg7BMAWpHM9hqS",
  "key32": "3iuzVGZCjDuYJukYMgrZn1PZJpcgNDqiyPhK2V13GJaKcbqB4H7tpAmSCLKDWUXopNdunPU2DXkgQeZsCXUkoeZi",
  "key33": "4ncGmFZeytm5aMvgpTbGSxFW7icNNtQE3mRcPNfpoqHzFwQtfFcr7NnGVS8P6rbVttzKmN2reza54M1p5G9ocfoE",
  "key34": "4ZBrm8uL7WD5qXjBEzZYgMC7PQRgN3bJmXyduAGq7Jts9CneLkQSaUDpUYfvUEBtsVj8vYGpoB3QkmyyJUQQHo9M",
  "key35": "3j9E4WYbSazvJh92JjfQywiuLVXKAJasDiJb7Fonw9dA1VSzJeXYni6xtMqA6f9bhnR4dxaMpSSWXR7X73N1NcU8",
  "key36": "5RG3drvjA86cioJ5YehTk8nvQrPEfNKzgBh9aAMW5Q4tqt1rTyHkHUUBzuWEcW4jw5FS4JL2o6tgQgXst8M5bqV4",
  "key37": "5Xd4N7WgcSVUhVUZer4SAWZh9c5zCaDBNanoK5SYbc2qjjiNSZRXeprbWQPZjTCejS4rTrhpYD6VcuKbZnAZCLNF",
  "key38": "2mZGmbh5xAPpZ96NzJu8SLriFbJ8QwHjMwMXGvu6jArVbMJnRxwmnf2NV9ChH3fNQvu1mgrQRPgD1qRuBDSBdEpd",
  "key39": "4hYUadPQZE9fNotx6PEEktPUxs6yzfyKfrVT6fg7SZC9Xrep1PpYLrVQBp8nZETGNHMHsQtrSmJbf3BfHYq9Yb5z",
  "key40": "4hWadyZT6SuyWFQSuP2eRr9RJCwzS7ka8asQGgWnM63TX5n8vhKT6sXNePct2t1QPUS32XeEXKnFLxaBvxiaoqgC",
  "key41": "4fB46CfXGA8S112KAQtJ12cZiGHJbQmzs7MSVKp8xQud6w7H4hx7BQPujSvFhAMm2sipgniw3u5motGpcKPN8fbp",
  "key42": "65NJWNBm9tqdSwoQLrEqDuuBCycRyyrSJT7WcKQQEggmg9djqqGuw1UQyr7jMf4oRkfbgFgK7aaNdrTXBkcSq7U2",
  "key43": "5szTsfYmZYJXp2QJ8mn24oMy1syF1JfpZE2Hw94kDZ8WHrsKCTJXRPXgovHd6EGz1aRWoei64RHjxtaCz4MSiWYR",
  "key44": "6Bfie7DYVmyR8xjyzoANV9bmTjwXhjUUbvqTKgyANQ1k5tecCFYyy6d7NjTXCZiKjthh6g5cDGYGZRbT2GNFS3M",
  "key45": "5pPAWnemsrBSdvdUw9SFxwmrj6jAzXXQP2ouArjVcXd4fwfZ1642VUZRdETgEN74TKRtLJC4Nhvm3U6Wq6xMXJvr",
  "key46": "61ugQoFqvr9yMz8UfgsYE6pd99zuqgdqKGD2e9LYvkirgeXmk7TevpErmU6V3reKvh62mtiTm3WSvag4oRJbzxzJ",
  "key47": "5nQXVNz9hK6hCNzUr96Ud4y95P8nVKprYFnHA4m3UhfiEfXeVg19hJwtN4xox6CB77zqaXgzuk5yiPr5kWUMcPmE",
  "key48": "3EZ56bcAabM8sTRM2Y8ygQr1JKXt31zBbbkdHzEEDVJvM3S5qAktQpwnXSBicvkupy1P21q6egjAfMWzh3Ba7V7R"
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
