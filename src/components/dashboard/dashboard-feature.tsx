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
    "61dXmp8PFDdoYA7UpB7kpd7tJ6o4qHS2pmAzLNVYVdABT7BTavLE75ZS1RjFneQr6aRdJczWRxBNgoQWVdq5YKE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AucyJ1PMo16TELCywiXSuCYMRN1LQJQ4gNZ64HR8Q4dAbCPi8W72bctuuUSSpEEwDPp1x4jBEQkyRgnKotLhjWM",
  "key1": "4FHVZdRhwqSrFYmqWBDJ5cMXTPyPHzbXtpGwKcgHDHBusrApFYqGghSeEMkKPN2PgXN6faUr7zpXYyCvLqG7ou4F",
  "key2": "2JmXPXWU315bYxcwWHJNR7RUdj2R6FjikXPFRa6pvrzdCnHhZYBCYV6i1wFV19KGUvYkSNNoMqQVDVUPXCF3UcGe",
  "key3": "2hji6V8JivcKwRWnd4F6aqjYJrjo6i3W2Wk5L2EevvoUGes1MMYDUdNhwMZVz8mcKLh6RtNoLAFFRQc41bzTCUPa",
  "key4": "8VhmPQiGS4JfpoQuQU3tirLULAYP4fvc1CKW39Rk1Spv1JgaLJmYRiDj2tjK5usr9jkevXSUM3Vtmt2UhVPSk1Y",
  "key5": "2ixNCJ95PExhrjeQeBrVdUUDRNXEa7SP8gdyWR6KfiEQ4mf3s6cC4v22AzNzihQdJ4hp658jgnLUv5eREe915z33",
  "key6": "3NVNpi6oBc9y71HLxgmKJWXAQ8jFNTmoU7Goh19orudsZLe3rJGwQHPvpV8jmHfo2T1m1xWBTysTeCGEPEXZs6FS",
  "key7": "3kkdZuqg2dXXfFtGMQyWnTWWT4bCQSPGRrfZkk8WsPo4NJUGhvjyTNAHzRu1hPUr7yGxGrEhBkjSzyTA767kvb2a",
  "key8": "3Ft9CSnePdsbYWBwN6rufcmhzEzcnA5NPq76QZtmh3AAnMqvNtUUgptjkUaWTE9JJJSSKhzFWhbHpN67KFgUT9F1",
  "key9": "468VPwePPTN1K8YCaNGuoG1Kj2dg6K7wpatzPPGxTAkHNKpYKEEzMNLCk4uGHiLKhZi1ijFspRcUWsN5GRL3pNgr",
  "key10": "3KjpGZgArVaCvahoj9rUAoPTBMg8zVVzkQfWHn3Wxgxp8wn95z1XQKjAg94dhZdkd11q3uc2wrLstvsKNi2KP3M8",
  "key11": "36KaWf7NE7CG3s2EC2nAbNM8SimxESzrJeUi3gPTrfQo1BktrPsJodLrTrxV588ryG9yyur1pByoRrQ2bJTexhgG",
  "key12": "4QTUZKgWdwfLe5SVVGgxmEduKCj9kBxxYzV5ewucREWvStZzRE5dgmz5ciejcu571GmiBvhqUzMa9BSAV2BcsFQC",
  "key13": "2CUyxUA3Aans3uX8NPq2jxfiW8z6iXzGSNNbg9k13J3ZvJGr2QAPbS4ve52bt2yzu9u5DkNrwsze2NPaN2X7Pu7e",
  "key14": "3yoeNwnGZNUNhyAp5LZ1yyQera3CS6XabDSfV7phXrVNuhhmNQRWCy2fr8vncGz1sNEfjjnjZuS4YMXrP1bcyLR4",
  "key15": "561MzP7mg6Fiu7DVSQixp1hpouM3gg1RuXGUhpXcdpc8mpk8eBaZVx4vznak8vYNjQyrFL2ENDdit9JLJsELpmQ5",
  "key16": "39osTfWiBvJg2PKKbXaJzJvLZphqv8aEHjUW1u1CyZeAv4mhvKPFWyjsF2ZPv5nMfHAtUxZBzwAor8rUjj8LWnRS",
  "key17": "3oemiThcCmbDjqELU2UHamjjfmSdEAfdHVoXNMmtZxAgFMSXXvLLsbpD4aqvAZ1E8S6RRodiL6RuQaS7QVYqNf4e",
  "key18": "4pkPRm7CrGNE9zF2j3oyJT151sqKVP7jnGj5tcqHtcpPxJeYBXx9xNAnk8zTZeSJg7Rz2H5jfZtMnWh3yz1rxnHg",
  "key19": "1213HgF8J219Aq1hJj4kwY2jsWp85TYR54WNuGNYVLtioVyFEHWkv9benYqoHdT7dZ7trtVMt1YihL9U5FWj4Fbs",
  "key20": "2S5e7WLaCPRrg5UvViGkCGg2va3Rquc4HYN4pHdTmMi5jET5KdQ9p7FgdEeocYbR9zhuRpaqpaKaWjkvJ8WUGwpd",
  "key21": "4DrhTF9C2Bz2kWWL3B3KwFvRcRtkUdchZbm62b4KJM7C2niZC5CBD9DvnsaTQo9Resb29s7xyivY4w5mnAtQD96Z",
  "key22": "3rqLA39Uzb8Am1h6v7DDufPJoEWPeJVC76XybvVyHt7h2oYbxp7bmcwmKkY6D2PVQKJxD31gcdWdGaqnBYXzschQ",
  "key23": "5JvQGPNDHfCVdFuMqSq2gsbxXiAButEGrk8LzHAqfKEVueShtYCN1CNor44Tr7xSKvMKTKvNmAyjWmQ8owsnFbw6",
  "key24": "4aija8crX4Mj2CeHwhzY1euJntFtM9uzEue6UY4SUfPXLQuuwM7WWpNTTXE72G7gZ1xrKm3j3C4YVH5KnjJStgMB",
  "key25": "mVKTNVzWq6QuuNcrWd6zxNs19LrtrhryXLWyQFRsNRzhkudMCT8FmYVwgogN6Jr9xSmK3Ks8horvQA84n8o7RjY",
  "key26": "5cY2w7dCovV2ueb3ooQH7CQL6nTsZ43fo6Zxx3umFk8SQKmPBj86qFHHvY3t6ppndcMMVvXz9YyLH9eLVJpM74yq",
  "key27": "31qW1pcc7S22i4DBZLXMB2exj24HKCq179ubvDmRtSCr2Y4matCt98hskwHmf6ZuYXH8XNUBdmzQFUBa2he942LA",
  "key28": "3FjNE1tFrug1eSrNeQyuyrcZ6j4hvKoCTqXjUydJ8MeFPnHNKwApQze1C1GkiLLhWP3157gMiifSTGSz7Sc2W62K",
  "key29": "3Hf9firK6ES6UoS1wj6JuttdcYW945XL72sMaKmmh8jT9g8XErBmoPksh1seUJbm3NEbH3W9oU2qdJJAu9N6ihBC",
  "key30": "4KsPoC2ofNg1zieHLRoMkiAY2N9a3cvTmgeHwHP7pMixuAU8xo6bKU3Xj8Nz1rACRjnzQBHkiqhzXjivrnyeo57q",
  "key31": "64vbeX2yJeu5TDXqxhBbMThmMxY3jrPcE3d4taG47FkqUZiug6u77GmBtAMy5FdJhzF6LJU8xoshkYkdLedDxY89",
  "key32": "4TfJF6G1okHjeaLC65jR4stZhoQP4emWhGvnnFgFFyhELcvia2rK4ESfVq1wBasiArNegYBqvyyPKWvFeCR36sNW"
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
