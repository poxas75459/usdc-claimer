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
    "2eGLaRocXQtUa6zc8zgXmmWdiDnLbxeHot6jdQVXJphwHSeC6BPtVJPVALA3hJ5DBoT5ih7MLuKrZGHe61Qf86QE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oq56nx5kLPNa81tjFJ7bCuE3TH6kF2enTbZiaeZLabeWDZJbG1ByFpjdyGBf65gUA5hM9th3vJEpeS8wujBjaqs",
  "key1": "4x4dbQVnkarbSq6V1jcJa4JqYDP8hb4eEGBYDso38ECKQ5vDBQbjjxqAo9oCHFh5xbicyi5CJMUWBYX87jMektcT",
  "key2": "2YqmoRuAmae3GkVnmM9Z9PoqXjpPHuXHxM4aPPiyCXyDzkznhkJDdzWhBU7gbDmp7FXfdQ64piSx3oQLZ8GS3dm4",
  "key3": "WJGjjm43acSL6GvD4w1JXvAwBitiSKrvXb3VeQbeRxcYDMxgiXXDBsPBGFFiptRjt17cMuoZbPtnzXBTNf8oK3v",
  "key4": "44WE2bQtY7xNSE7sgNyfv7Ukr19HnSRQhSMs589DgvESkV2Uf37wnWxvbsZTrM5QeAKKSTgSwXUxeDYsFqRHCqqT",
  "key5": "5kFsTkK6oSEFXCrq8rUk9Accmt8LFZtzu8JgWTGYE1zvRiKzLgVVjNA17jLTYmXd515o1yHBNyzgeruMN6CDqspQ",
  "key6": "61myB9pLcNa75rYFzAzJPvnCwcKESLdAnL8qonYmEx193oGapsdKLnifDxf8EP2WsUZUUGPBd6fJYWa9pmEXgsmX",
  "key7": "533DthMJF7JXpE6WKXXcVHG8wbXSnB7GtvDBASzyzKvRc48tdo2CGq1XY3YLn3LgYwzYrxHsNxV6UdJTQxq5cg7G",
  "key8": "63Q6kYQy3AwRx7eJMf5rwU9TqpJnAP5dxmAqBPJesyCj8arghA1fgzmMU6WEXNEiEAREYsqvwGsUAuj1LyPzfosz",
  "key9": "3u1skSftz2QzjsKfxLo6KXiErX7RfFntWVz7Po71g7TAp2ThZi9ju21tv7qsDAWHhHfgMYfWBnByBjwB1WLcRZbC",
  "key10": "4uHPRduDyAZCN4eYsJB7MNiEFXLLpPjZfnzYY81xpNCZkKmEhXf4X4N2J8YLM5FhRNkvw3hwMZ5GPSDfPGjRECCF",
  "key11": "HUbMn7VrKXJQJNZGropXjYtyTbFbCsuhaKvRp9rJKRvujYbsU8And4CXJGrgRnWw2u4gEKCZDQBrMvGRx5BBYtx",
  "key12": "3vFhu6FWtDf49Lp5qrUGaHGSnYNsVYUbs7CED1ygtX33kUMiUYD949DiZTwf22uVLVhLnS6rHYaidjYFwbwevP1t",
  "key13": "5dWFJ4WEvwjtZtfrsZ2TBqeqLw3iqxFW9E2zGnZtAd8WcNgJ1MkHcCU6rvzWcG5szWAQSEbp2xBmWuNmofcXi8yx",
  "key14": "5qo3wFTkXqPT3YuKi2CPktZM6Z9Dvdorjtr7gvFbhtTZVYEXXT5VVhHc8dGgCYAXpdLBns8WwKXEPD1LJcqCXk7T",
  "key15": "PH5G2zN1mxdABJY4YJ5UsHhMTNunTrCFii5Hwr2ixYmw8KyT4bXcuhMHbsrH4mhiuUugBzAYyhDq2CPuni3R2ZU",
  "key16": "5mw9RKd6npziUeLPQgGNjfRq4QfJTTf1KC3399NTgBsS7gaRQu7dWW1RqeieW49ibmL5C5BUXhbGSQ4GovSkk69S",
  "key17": "4AcPRHifQfpxVG4VCfvuDTqX48BbE4ENTt4QZFUawMYZjnvwJRostBsa1MnYghe4muNPiqsD5ztKM2tUoMwim3nD",
  "key18": "5jrDHR7h1YJkZ99hhtsKBi17brsWVFPD4A1R4SJDfSh5FTSDu5AN37QEgoDjcusbQRxHyJ9rCgEdrSGwCA93yz3X",
  "key19": "3vAktPWMbNr2Tsy57vySsnNDmQpKLe6nTpz3vJQptA7SupDjS1TvYGKeUKYpieximx3cVvobwccNZGYrry7VMnpg",
  "key20": "ato265JQ1pejaguPJsW5PiTH2QW4U66Zi7HKZpaG3SYHxmnaHUyonWNmPXsjHrUrYeBpADjJy2NbVFqeD2FtFFL",
  "key21": "2ATqELxqsdr3sn1dguJRkxgASTEteBwwQnnT3ufGbiq4VURJfiJE95tQ5MK3JwsELmnsyuEYqTwyLXJ3iWKWQCwu",
  "key22": "4g6sHfVaFaaJhZfakYzxe9mvLkjsQuoPtiP9ZUFNgow82hgAS5xRb854JMtnud1RjMAGkM9K9ieoedHLxdHhfri",
  "key23": "52yYNfW75cL8FpMyjhNvnTx7iPrSx5tmZYV2FqXpq3ZyTi1SVj2Qzy8egmrQpJnrV6xjmfbsw35LjfFtG6oHXf4V",
  "key24": "DnLSi9GD7Z31YBcZY25gQqbFjd1BEy5YbhyL6ZbrL8UcJSLCg86ANLUpFaQaxsdLQqjwz9q5MbKDjGp6nhSNThy",
  "key25": "5be9mSZngzBV3UV5EzMpF3MF4mqFGL9BbTnphNUBcW5PUe9gz5YyZDxVy18M9RA1T7qtKeg8tYufdTy9DtCZndFi",
  "key26": "3DLZ3kvTtW5w8zQjd8xDq5tmvW6o8nM47xQF629fL7qWUGsf8CyTi2sWHMbpCgGkdS83smSsyj2DfTcakPwWa7z4",
  "key27": "3wwpVH9VSm1jXn2vDAvpxZTvy4iNX2G9KTai5RK1h8hBWWGgiGYJjSHG9TnDAVtph9DqbTQSHmSa42wqRM97muc2",
  "key28": "2g96Nbm8NoxYWitUiXm6xewLikhFmzZwHq5wSdcYSqE9RQdsj5XYCBNkModHKYURp4VMDoeUwJYrmebRyRro12bt",
  "key29": "4ZoJ7eFTNsGw4TWVZMWXgVddKKwviuJkLMP3FX9wa3icQMPyBTXLwtqxXJmi4mtXru6nirk2nhURA9aDLLVgas6i",
  "key30": "3BmFatSwA3XrkiSJ7nc12XAEgF8hpdJTXt92J7qgCBKGDSfgXnTr5TCsNJ76ukdpcUChpqiVEE2vzEgemeA18DYM",
  "key31": "Zn4ryt9QSzAVFGPrFdfeXTWWRy9HsVMERjMFSQURG48WqHGWakHoBsdCXwhXYFRWKw1jqFFiKJi2uM25sypq8ey",
  "key32": "5sC9kk7J8MRPebYWpFQJANq9UcZYFLzf43PuCvcDJPKhVJCg2tRegbusykvZQhrxQXjk9fNjhgDsUX2EmujherF5",
  "key33": "pm5psYQQuTJqqajoJm4gHCC7q2Gi31unXYV2nPTUU8jmomKjKZyWvYiKsjuVj1gg4JQf6xXVPk66zL3uC6xjgAt",
  "key34": "4vrnciLiSD6fMKNtdQhsaWZz9QgCK1UjY4uZ8D7YTmDBW1SP2BTxncEM4785YqKu48c1R596M4VWn5zQuCoaSGgd",
  "key35": "34xrXQUURbCya3T3JA4DYK922NJ5aKSUrjxygEUDQqcEfWYRpNUm9L2SbZoouvbwnDcjCxbE4LBDrpmvcKnLNBtr",
  "key36": "3F1biMpytegpA9skWpNpwpmnyDuPjxStAhWWV9tsPnWwjXLcKfpsYt4bFqxJtUmf3HiTMDXtfT2BmDeXynbqgKeh",
  "key37": "3tAJZPBADTFmErK2H3Z7nTZn6EVXPckKkLKUsyTZUf9ooZ5dFMD835nWaJr8hdMytGzhJgfaCjsJXjQWi6SXRn5D",
  "key38": "2pvWT3F3GTLzPHR4DPJdUVSkqVaVQfsc8hvzjTjFUSYiUvEtKMpzMrkLYfgA7kZVeGkpecRDVmFAatNy88yhKaMc",
  "key39": "4kbXedWyjeuWn3u4AdsL4ZUnWRBiGoFBdq39v39wwiCjEvZscymceVYRfn5fWQi4AXxDaF1mZqjzNfWQfUcJs8iM",
  "key40": "348itD21CQHpkZuD6VjbLft4xjdKdudy1TGvfPg1oc5SHg4yUncZJHg1f4fumQzxPJKxuUTQzXnRT2HMb2ZBvbMb",
  "key41": "44Rb8Ru5GAjUfATH13FrSJDet7oarQ9Pt9Tke7Ggi2DVMbmUPyfNtRx1jtNWodg8LHtycHxhXtQ6oXKJKyqLHxvs",
  "key42": "5FMeYKdcwBUqS4n5GQAja8A86hChcogQCEb6sBt4xEC4EUWAJHsGchn3TkfdBMfDkYGkWjvmwLYeJ8HkoNjXj32D",
  "key43": "2CiCVoaDZqGMSXLzcLKTjv6HeB2K3GibEDaiv1YJARr8wmddfLY5uQxKJwrhkrFZMxzjJSUFMRxvhkn9HDbnBFkh",
  "key44": "3hLnXd7kGUastsNKgMWiofELgtZix3P64YGgTSruzBbToexXEgDdsQ9PSNuVuTKwhLAdrkPGckGRW8G689mPzkNH",
  "key45": "3F1oZhWKCSyLLeFdDZX5WbGgGbaPn8NtkRM6uP3VWsSvpPkvMuL67WePXvtymMdFgzVmg3SxrnQrizWpWP5xB6r5",
  "key46": "3WTeZATktDmV6eiVMmsQaAzU23TxnXse3swgeV9gfnfe4bwmFPD8u5sdjY2pKQwyQ4Gt9YwTEyD6qtLJ339Q381p",
  "key47": "4YUgcT2qnppHSpFqk2QNY8i9o1UDMTgLeLwZhhj4uMZY1FwVZG4g6hwLwcfjuyCHLkXtvJ1an4TVxAzdg9ZfCeYf",
  "key48": "31um4yZtx9oejYdt6s5pUZs4ancUZmCPrFGLEQTqJwAZVAcYrK6ePArMB7hdhEip8dTXLgY6Y6zszSPMWxNk6V1w"
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
