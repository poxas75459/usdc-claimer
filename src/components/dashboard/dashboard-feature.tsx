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
    "333uXSzg5Bd5SkoYWV4u2PLva3Us4CTpf284ad9umoPgs5PaWadNCy3sXjHKmCCovajCn4vWHobs7gJpfcSdnATi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Kp9hHNLmzKkWpFQvDZ82RjVQsTMJTw6FGm1BWbzdLS6dqDrC9RPvv844jACanN2XwLLCLPq5fQvcDdtf4KTzvb",
  "key1": "gpbiF9uxFLaqsXs7CF3QS65FtweBEuFJUgn3KxqhSVuPeKGSZK12iBb7awnpMqJhhWNmRUqDpRq6xMTNATrTuWV",
  "key2": "3zwRaAC8yT3b1CjPNhSHGmDM7L1h9EzDcGY7zmDp3h1Fr61QWfBX1WJ1RjwxbLviCvNDVmHH6PFSjxu5XiMkZ2oP",
  "key3": "3nbkMdCuBaM1QQQzizzY7L83LWEf5S1tYsSYPrGqWU2kgDeTzfMujzFBXbz2HzrCZWj4h7ypUu8aogxh8EmVB7c3",
  "key4": "3hkJAercKbAKqrZbkJk77t2uNEpCPZhVxhwW988eBKb5jPrw7nHoFf7fguVbgpybnikqWQ4fvS5qBavsW8qSvQfj",
  "key5": "4B2Y2Y6SCRhJ8aZmJQkKmGtLwNSTWiWJ3qpnxwdWcnCff8X2jnXaALAE9nRoyr2GRRuqJ6TTa2TYhAF4kHV25H1h",
  "key6": "3zD9kdMpehnrSDYd5N6cdBwxj4McshxXtzm38sjFSyh1n1kJ4K3LjcQ2Q6TtKF65zUn5BYuVmhmzbN6JvHWCT3HG",
  "key7": "2Ynhbios6gcBjGWPNbsrNnjL29XVCXaBQobpHrvFUz5bMVuzdW955aCRqfwrsemUonYHuPjKdf3G6FbSAA7D65cx",
  "key8": "3DBmRbpFuDRY5nkehbw6xGkBuuNSwQnzMnXRBW8yhAXnW7AqhvckDneKw7G9p9brX3jVc8r3W9nAUNvmuZK6vBze",
  "key9": "5MLKHzjgrL758V5eFsiVAd1yMPWvnS3Zeof4Y6UVgEhkYk6qzVH2zP4NZBN3fr1j2ANBnxUygrrHMb5J3UD2iAhB",
  "key10": "4dB7mQjAJ1F73f2mBVdzivitbVcYFzBgwd8VaKkhG6A6N1ZAf1hGtpyJHpoR35MjAgR7WXEVZNRZcaVxZF2wzeHp",
  "key11": "5dFjBVYdge4JjE6aqmCHXEXtxH4b2xJKuq1MKbvpc7yecLofrFjkYb6vp6uVFLhwDomxr5hWTZBF9SE5StWqcMd7",
  "key12": "4EcVZnabM4TGDBzA5aKrYsHshT5brtB3Q9ApzxcLgJzE1Yur7iDjFsAhJarJrXRUnRFqAbGe5k1AFnMdSehW9r7i",
  "key13": "3wrztLRiR8UE5gkqYnhtTWuf7P5HDadodVBdkf5eafPJkjmyudn1ertzibftb5JW5koPuBKB6eCVMRibhGrrAhR5",
  "key14": "jZXvDtfrDHj1fHdxDHghZ64SEbfW6WYp5yKFvGNJpYsZu7FUXRCCi7JrGvba3aS9QPxQpjhn71P3egk2gk7Np6n",
  "key15": "5T4MD4EMReSnXZVTmUboeVCGFuZezgN877Z5J15YEeTuhuUuahs97MWxEETEjm783sRgkCismG6iSUW9MbvcyuUT",
  "key16": "tBaCFNXQbeVcu2H1F2PoGcKz48s7frMzfbiz9Sr6Re1qCw58VgbynRGAC5g2MCTzhkFBiUEvCM9kXxyHwnXKTkB",
  "key17": "5XxAuXo3WA3j4mbFkusyGRVSRdxTpNnEHZU1JMXoyWkFiee8wpXfEk4jH5bLDR7R9gVUcrk5T82HsRiHQ7XcFwxN",
  "key18": "5hoimNHEWaQ7avsT7jChAGQZAk2LEWQAdhQ4JussvF5rxbj4FHmBzEDmttHh9fkxE1boe1WH5oAUmgyAhr4z6ywT",
  "key19": "5XXAaFhT7GpLtnyz51XnyvBxWUdeteTuDeTyvigrGmdEm8zv6ziAf5EUiWwLHdL3jiMwgXFLJpYgxVpiTUm1rExe",
  "key20": "2FA2wX16Q8bPGufm1StrAxh4zZVSs91hfT2qwzzLvjdQE6XLi8FdVcqRbMJkXUXojxoAGjYfHdB9j8Kg1kyPstV",
  "key21": "aTcvMD4S8rGGeULCegXYesCf48okKVUAX4yXDLJF6G4tAq972cAw4tMgAUS4WR6KMnoqg7EW98TwuQV56rjUoHQ",
  "key22": "2cn2UN6TGHqE3F9h3aaTMcASzwNxJSgkmT4VDq8xD1MDSUyAF1waZSZDZTUhE9JEa6pbNCD3mkrw9N1o4uFPVknW",
  "key23": "3KG4v4senQF2GRT2J73JtuSMdYBw4G3r3wjAshnThgeP4Di4yiW2e3UoGmC36pxTnnfqnAa36XGSeLBsiBzukiGr",
  "key24": "2Kno8sGaKoeWeZsbFaefpDymLS1P2h4Stcaw95VEHLzzmYYXhhNmhkLP9tmdW78RPoWac66NCaMgLfAf3bumGQNW",
  "key25": "5YhtJ7duQD4Qs7QddiVo8tp6meujHHzKeEH19CpjCC5hX4cmTt1H2wCy1heiFycKJPti4z9iJeTgpjRWhfKB8kTg",
  "key26": "3AuJY2bTbj9LJAwHysf2V7G8idZiK4byqDC2pxTJwipYS6VvqE46P12DasVZuiiRe4iZQ7YCVzWR1HvJVx2qw5hr",
  "key27": "yJJ1QimHN1G3SM9tdyUbveiDXsLhAFFUk1dqYCUMZG4AbJhYA89bGVvSKeEhwG1tbNFePi5iB2chBsLF9msZmPk",
  "key28": "3gRuG7NYRjdLoNfbUnB6sUkD7QBEBR3QiGviL85TVJzAEZX4n6PJWp72JzzfEdV3a3zu2S4y4UR7wSPuNkZz43N2",
  "key29": "7E3PcjU3LpnRQ9AQUPSDYKYqJtc8Z4F7G5tbZDLYkNNYr7DHNNsWj1gHWbxY9KxqS528HpkF6n7KspVoqxmBDWb",
  "key30": "3STYE1cRaden82f8Xs8u5DpvAy2HBjrY84dKKhsQtPhgyaUvNbfN25DfBfuUAB7cxc8ASR7K4t2YzEH5iYjF7Eae",
  "key31": "7YAPiZsAXJNAaRLh5xNEKon1CNsxwVza93KFKnxxW9Vzis7JHuKD6Mz25fB3FdaHcyZZrr7Mzmmg2wXhMZzH7UG",
  "key32": "5fd6fXE3Br6C3w4RS1VGvV9Zcrg9YLqmdkU1VhkEe1eKkny39yuSKDtsVt7WVPrcAoky5pZP2HTTkjYpwBz6vVp2",
  "key33": "4JKWhvZmqZzKtoewV7jvJKuan1w4XLBUPxxagQ1EC229fKRrPqpcCitWAW3L5EgF7981LXtM4dTFVVex9QpsQqg5"
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
