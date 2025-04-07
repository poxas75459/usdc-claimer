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
    "Q2ZNHfHAbqcMGsdcV1Ypb7e4fE3vCv79nUwSEYCerHoewf9eH8QeZqHZdVX8q2zp8cbHfymYASMeyknoSxw4pGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4efEGpU6uFFkzZdR8Pg5VtDcb2ScVMVmZb7q5QFFtebJar8XRhRxAyADfVvYAt3Av8f1NmZn71amhQw1A2ftpzNe",
  "key1": "4eirJKg18THvh2U4tCC7EENaBzFw6fi78AHCmbwzNC2fHyxpMZw9UKbCYzB2ffqdBfGGKZTqy5pmpBAhL2au7FGA",
  "key2": "FjE7jQmNgmuLT5SM7LRoHXsLSCTpaCHJLuhjJkerVkpQemrhJexrFKqV7PLKcmuk6Mw2ssnjkuZW9pHGn4mGRKa",
  "key3": "8JEDUyLBWa3FTbtQ2gE4ssYhs3iYDmNTegsN4jNBbCrXPvECT3DCrpqcRmwy9JzXjxhR12drvYdtQ8wTGaDTdBw",
  "key4": "cCTupyRarMTPSTYQz5PeKgVBQqdxZxG94KinAjBLdcdrUDdLtvmWt18uJppkYWuGqe3PsrHYiPgGmbHeFshDoUi",
  "key5": "4d3y1wdtEY3rHZm1XjpNbEUZxFnaNX2AmKJzYUs9Xo5zeii9RMW1ebBV7Vv9T3eqYFPdwC9YUqWuj5aiu8EEm4sC",
  "key6": "4UWNPpmrK6bcCYhrYLf52L7WSiBMUs5Nu5H9rSyRwNEwXyueb8BXgr4tN1gnNyK9HwWFiUk4tDptkwRvqHjhPKgU",
  "key7": "5kUt8S6UdMzffFFtQqM8tvUg3RvqRp6GJHFJpCuk2Yb6KWsUXYJ8fmhYCSbw2JZRVPZUGAQH6bjjcsyoB4YJ6eaT",
  "key8": "33FJNGMk1tkTRzDfHwsrsZ4YnQKR16q942EX4CNDMLJBDUB6r4uZvhRoRsPWUp1BKkEbjmbkfPPH7hdFucxwoBPn",
  "key9": "2Rh4hk3n2GYDKMQMmk48tsbGgF8ntza1EzoA3mCQ8zwLBXf9iXjaAxAYhJdnkfLEmasu3974Fc1mWXphuYpifUFG",
  "key10": "28s8AbCRVhiQhe5bEYekrYAJCgHx6GWsDoB91YSo6oj48bhzJNsSajrQFBsTzaRhxNAhx5zG5imMAHePy8nvKw49",
  "key11": "2cweeeh12mpf2vVheR25NpG1GuH6vW8e7xM3kxz5ZTpQ6dfKQJmnBbCeT6SdqjDs3VHubYTLYBLFAgugMUKb1wrD",
  "key12": "2S44NC2E3dXVaeurd4k9wSdm5oujsqrsFgWZnpk5wFNhPMsWF7Z5eCNKoFkuUFqD4QW6JbdEr3eeXMRfbswcXMkz",
  "key13": "mG6djfTLc5mVvFKLuQdRPmUrGMspgmgAy3zSYqtTs8nTYM3QxgRYcbEjMQGBZmFzzjiF1BvmgZkmfEXE7xsSZ2K",
  "key14": "4NeMLhg2ns9Fhe2ZBDwPUA6Cx2bMp5KayTdNKYMSNN4imjVohzK76H2enPpzDhkT7dHg6UibU9dtWdDbsKEreB2Q",
  "key15": "4TZReeY2NqyT7F2C2ekuQDCiZv6dtAERMLQQaZ6ABPm4nt7riicxZkjsj4JrRouNTMi3wJkwUtFa2qmPwoxoBMxK",
  "key16": "Sp7H1NYhtJ38B7MBayYPQ5iS1yTwupeuf9UiTCX2ucWgiwqDewyrWDZaF4EURCmAMsy6qsQ2vSNRsWvbNHwjVXd",
  "key17": "45e413wCV1Z72nLAiBdpwkjhjDJ2WyepdYbpPLWcVvyu7CynK8jMqRZBNqgmhzhbvAr4NSvDSbqPJTMJ2kudpSCQ",
  "key18": "4TWYkbhAueBLHk41jv2LHfGgFdfY9bSycHnZh83QQ9dHzdjyFo7f7a2j5kVj7ZvNok5GfWfLqe9DFyD6yvkRmWee",
  "key19": "5edXyaTdjhKMySgChQHBqda923xri8cGvvoivron7zJmCGYVfrALFCT47TbkbXPnJiNgkUrNfpyGKnJdgtcJ1jik",
  "key20": "4YpiWrmjGqyt7WraspQ2TYjhtDRLLToJJzhsFFyqqYyca4EK3Urc8ZePKtckRJqfjhdDKwq1uMHACn4M4bzPJepq",
  "key21": "2fktadu3zN655c6c35XmJnsg1oCyhvb3D8S4Zjuft1p97iG6MKjacqRYxNvB151nmAzzPdDDJRhyYVcsej63yVWS",
  "key22": "2tdtSYTsVrr3pm8PUjGtfybRHyuC2e1Gr3fv6Q3tFvEH4m6M7ac18Pc7itJw573hMxpEszSGS1QYeeWBd84Tp3m",
  "key23": "5WfJJGFoW1UdMBR21XgtX7aQibmXrsLeQMThqguhfNWtDpryMVsSx2shom7Fr9YsY2ZqqqJgV5HPhwjDF1DaL2zo",
  "key24": "YBTnxfGp38tsSsznhAXbGuWeQos8cNJykr7gP6GuPfATAG1uh7CYqYwvBFgnoVM88cuGjWaYPSjAQiT1Bip67Gb",
  "key25": "4CjPBusr8AzQkY7vFcc2gcs3AzD3CVY2kMN42TjSkVFt3eHgfaZRcCYjS8AgiAg3VDjcpMUu9uKkDcf3AEepBxM3",
  "key26": "3CZsMUjw9fph3fL4yyg5tj71NKaGZJnUi1hekjNMxJdKYV46kUGUnrHjCzx14h2FyxRotJpooCEnRDQ8yn66TwxF",
  "key27": "BG6QG2oS4wCTtXjbT5zXqPPhjaPgZaL6d4Vuy4Qf7wRsjb3BeCck3mKFXcRMT4kG9w4v8Se5gKJJtevhR3sqJp1",
  "key28": "3BafcHH9SkKJttAzYfHm6bz4NhnRobbjy3BGtVUPGkZqHZWXjrJYwzVbYN5q5HcvDBzg3rxPbSLE8E7ejLx8vK6D",
  "key29": "5Uc4hnWXpv9c2FEEB35GT2Bs7pZDu7tHqfm7R1pvwkerJxwfBedzxHNXHPwqCHzMDYGc3f8S1byoD5F9r1c6Smb6",
  "key30": "49uGbazpgoB1JfVs7fC9pEgHJRKU5DQu1NP7WL6JRpiTaVRCDQGzBeHTJ96LtuxckhrLqQw19dMWQkFtv9ccBs12"
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
