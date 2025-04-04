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
    "vFbESSGRyC2tHFFAq8FUUBzxJZwoV2pZAoSyYFi474wuHhHjBnKDu27hCY3Wn2itdhNA6GArtEchYaWdpN34cWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xgu9isPCn3KC1a2Us6M4StiNrU77QCND4vW8RBKuTv8UKQFEhExuNHqX5Fq1sUwEhzVm6gzzcddJxHZrYShoRYQ",
  "key1": "5oriwGyfUrxvHqa8uTcf8xCi4scbnQDza1mDY2uavzu6u8eqgobuNjpYyTEStdWASEKdPfRCeTu3ThvrWwwsF7n8",
  "key2": "3imtthN2BcPsA4ryqu8FvmezrXN8o37fTZgVzEHftArgddwdmapGBDuDYdjEjvohwYiX6qFYtsQQVYg7L7uGprtJ",
  "key3": "2LuRPwbqiqGcFfRX3ruBz3DFja9aCR2uKZNF5worCU1vHEsvfsTqiBRKwBWdcNhA8y2W16yf6usSKDR6LDRErQPZ",
  "key4": "4AWhSpiuGNktiZz25qejnNCFpvWgUYGaVToZMk3njuoWJ7o3DrtSnYqfDucRZkqgsGDcxDyJYdbF2pqChWPEC1Ph",
  "key5": "4EuM3GKjmPKB8d7sVx3DGqkr1WNhoY7x1ksJuopc29i1MpYbWq9mWbg62jXavDU9FmjWdLK7DeZyFWi2UsXJTFi",
  "key6": "5nWegQwiCzP36jQMxGHQHj3GiibnQ1wqdv4JDEXNhXo7amNZvviQFJjkg6a3Soxgs47smQZKaAno46wC2dd5ZPvu",
  "key7": "wegdNTtXtQwkMbQYyAaNwVZaJ9mqcNJVF1MyiboZ3aKzFWHw74oLpVAeZ86pt3xVDYyd74WKHhgNTEeDdvigV7f",
  "key8": "2w9u48xw2ujcKRXPYSM5i3xwAiJHvRs1UdmLn4FXLBqDBnAhFmaZoDS8ZLcrVNLbry4PaokTr4m6Cjz4VNCGzMXJ",
  "key9": "3EfVocE2xMoi4fNRZGjgeyhMQ2ti8h5zx9Y5kDZEMdBiC4sMMwCnd3dSGokwjgpx2xaifu8dRv27jbmRRaYqjKmU",
  "key10": "55KDNRQZN1ZtniBjFCkeKuyajg2VNbRjRweVzFqTS2jgtg7P1SyyWNqKUJdAVf7tgpbYzY63frqmaZyQFyg6jBYU",
  "key11": "5NtNzVAk48j2nMMt4XqQNq6HFMWHPXyHNnvgGSbG6QMtZ4ny6yjwnktEpQ1mb9Ug6wbbfc147a1gm3JTx8dGq6bc",
  "key12": "5pYYETTCcnVXoeMR3vqB9sMqC4mRS2G3o8pjm38jCT8Fmj7iQJwSPn1TFZw85FxmJUnbqdpmTwX2W8CWJtvvTBP2",
  "key13": "5uBcU6vQ8nTvpzMGVwnJeaonDrinqBZZpTk2mDbBzcmKAhxo6c79j4nUiiZXhqy6YrZssDWz71LQCiFLHz6LNN2V",
  "key14": "3pn9fwWUVV7ximAXdKMrgSJmgnwwfRqSm4gh2osBnFSr8ToyULgsPNnvWD8pPbrY4aGnDbPgJsmEorSBshKrMYSb",
  "key15": "fagyScxYA598XX2J581QjjBQ5ZGFZ22sCVSPtT6XJXtDFqNdJSQsgxx3ACqhaj384YvHVr7ZvD1NjemUVoAdojq",
  "key16": "3VMp1uYxZ76GVzRu99n3Y178hodFxd1uYZpAFd7Kqg36m5q2UtDeYZ8uW8oebMYuVWo4WNKNLCBjJFpFPZAhtZEM",
  "key17": "4vHwvjUh2mFrqhdzXc67u8PYk55GjnzgZzjefd6J58eeNT7k55UhAHS1ebb9GUQUb9VAF5eHc68rj8AjKV36kotg",
  "key18": "3zukYuPLtsTBUd91Me317eD9tgC5pDZDjTzdQgGpp5VDrN4dwLMgC6m9MzYDgW2pxJPgtJnyYR8WNhcsSGM3ALpC",
  "key19": "44po6jHXqi2zdKPrKDgdr53ZB14ysLYJWANARPY2RVVMoCiAYKY1yP6tvHLvDuqiTfQ2diyz3PMmpeYmhBMLmVxm",
  "key20": "38V4oABkMWDTZv6fZuxhCYeWos97xVzTx8WQ7RxXFgvkhKGdUHTzzte6WBJtSQRT2DLWrEMumofEkbsJuADzQGKT",
  "key21": "4XSXbc1Bfx34rrMUwEMhY7ExaGV11q3NtZb6sLVYNKeeXZNjWe9Azhvaa1chNPfHnCntDHbp1ycUoCesWMZNzVdy",
  "key22": "r8Qk2JKHtWrWPYDEzJEt9k9ZGbtZnryTZBzJW6ru6TsREsfeAzq2iGKJcYgXqoQfFNNiSkX3mjQG73LCZEH9Tvk",
  "key23": "4wjMiQvhJrNTvyUETGGMc73Pu2WBVmuWLkmevoKEZ7ZK7eYnpZDMjzdMCm9TxMNV5K695NQ7tEbta5T9jpkA468X",
  "key24": "2MdWFtDgQmVkRe89e419NSYkQzgWDLGhdxAvrVsADymW8oLr2XF7p5RY4mHvRmmpzzemnggD2bZuHUkYs6YSGqD3",
  "key25": "4FMRZSoeQXKdNFxWohBm4KVLNA819n9Mdo2UzkvETi7obmbknzJdazKvTWCvRJUDpGhV3UV5SHde9DGugeWrE3vK",
  "key26": "FupwfEsJkr2FMgissagJkSEsn4De9bpLKp3hkYJPhAXauNEaZ1aLASURHf1Ka1pdGg881FC5K36Nazj564wwigH",
  "key27": "5Tn2VrDeKPEj3WGjA9Rd97ft85NgnuB2X1URFL6EKEHbiwxzMyxC5x5x58bAQ3a3LhVG7uudSH57zFFvwKuGzDp",
  "key28": "27gLMQPJ2t6RWroFEQBRqJprH9EZwoGRfkSiPQg9kPQWoC2EaXgzqNUE6qqyxWYb1G6iybmh9wDeN1H4UbE1fLxF",
  "key29": "5JFMkdiCnmzA3fhWARM4nQt3T6C5r55EeupezsQQRPqRvkpaqzL9eMDFFTf1h9dqUDaXW2j8SKud7ptNXngbt85C",
  "key30": "2qRXvwCKKWvveRLWE3Heg1EcCu1QA7tutHycpiE6LtWsrbxmAbqskg9NT2UPGVWY94D3pkA6GU4Cp26bBZ7C7NYP",
  "key31": "4R3Ggf5kFDD9RkhkufNHT28ur66mdwmFFAmQBvMhF1gq26RwcDGYF1rNzYjCB7EL3k8QagNxDE3LSWoXqW4KPBkx",
  "key32": "2YHYMLHrxNctpq2h99raYEvoaatAiFVTJRnXUMoNAnktfEt9cXZfeiaA6b5JwXXhgSH2XQTNSrRsi3QXm3i3To24",
  "key33": "4UY1dSFiLjLWo1ATTWPUYHqzJR8foEhFUjpkzrH83iJEYd6KPDVnYZNjvcYyBSPdbjmWMMytATxPpq78HZJHBreY",
  "key34": "5MksXz7FNbX5e3ErY7uk2mz4syVJZEYgMaGuBP1rUeQcJYS5diJXVF2D6pxUu5BdokUU7BWxZg5Fc7CgsvEukzfj",
  "key35": "2X3uZB1w6GGzpTuhw6e3CLXrKFKRBFbyCMecuKHqZoUQ43FR6JQFPgPooTpUbUvrHrGbFx6dB6ncsuHBKtRhYb13"
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
