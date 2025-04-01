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
    "3eLSaRZfbSapn4cXU3PMAbihvf16CekQgbvgiQbANYvtrek3Sywh3zcFJhCdcq51SQqr8LwBFyHWbHfuBz57imGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cp1iVXdHuaLjmnfZNRr6mq5AU9uo9qKQMWJyBsvWZWbwGMkqeKcy7RCheQDLMC1cKwLTyEE4FYWLRAvedr8wJnN",
  "key1": "4AefLm4kA4whsgQXQm2M5kx6uPekcxzr3ynx8Y4FwRL1RcCcromuyDUESpfS9NDJ7qdqQg1TmDQmm4mZdvK68uYb",
  "key2": "fJ8QrgTtfiZDz72fmdYDx7qjym3md18Y5ucVWAzSr8NMCzcQQtJW94p1F3RYKvqnbj4bp72WRAo5uTQ2758d86i",
  "key3": "5LuZykaeWyybUfTpLxEco4gTa9vbygDUxSzwPg9uhepw3cQsYFAm98CyohxRSwXDQVjk8DN4VHFv9qMQgRbYrrYd",
  "key4": "4TmRnE9dSXBuoeo7XzSdTzckjVedXku8TDKzMBkAzEaaEVdGMAaBcPHU7LDH46V2HgJUCH49P3a9PN2udyMLg618",
  "key5": "4XyBPBVcXbQpj1mnU6NMxtmwrW6N85radGsMZzH2rRXjDK52TDpcMiffuZscvneJWooga1mHBP9hsiMN6E1714wb",
  "key6": "4qPxjTt6TVr7byqBkpixVHiuqQ48S49H42wuvL5wtW9Dt727Mk5Ap3Nc76EKjuj9SEqJHB5sHJWbJrwcE7wnJvJD",
  "key7": "411RHuEx8vio43aGTezpaeA1aoN57in2eCXSX6V3sCchfL4Bn2AFNSJ4NHscaaqq36Qh5ESUeG9tPr8FatwU8byp",
  "key8": "Yg2EZfrPe5CxvceVEkW3NZLq4bfGQ1LJbnzxFdBJjV5LyLrgjYE7RYKbeLQUMKwqhn1EACx9cx5prFG29H5xUu9",
  "key9": "5yyTxN5dRjo4HkWbwyQyepzDHwutExzsHswt3sdsFphTeE2ZRxCvNU1L5eE31hXqXtztWhTuEYpVtHwx8zExPkMw",
  "key10": "3bFwVpYKTi18FL7e9FECs5CyXZybt9XJcTBoda9PmSgDZdUAx862c7xEwXsNcQshoP8ZxCBoBeN1uqR5FrWayMy1",
  "key11": "3kkqdvynvjDvDWCtnULu6pt8axmJBKj4yUbSWupij7EeqFpGGgGmDq48o4F16yZhyRgFiCr7Reh3ZPRhYK2W5518",
  "key12": "4sHzacpf5LEYarYuWL3DrRuLv8ead5Qg3TArnkUSu6aWfpV3b5sGGRD4EqsrnunNYr3PYDPFYiCMC9TDo2NhvKY7",
  "key13": "FMFaLA2iNxMbGyuKjR1ZHyMQpBE9jvP5S8i3PafRxJU9PPsoWxFrJ2DRGPgaAWuv9i5KNog7gqhKNqbfbBYyhgN",
  "key14": "27z82AqrpkxHwmBKiJqrJMUCq2hzk4sfAndZSiNDAPhGjTb6UNEvzE8tLcxxQXdpoBCkTQHzHJw7YwUCU4nofCzh",
  "key15": "2Hei6toZvuBLpjZxG32qeC1kVmobhbV3zm8Sv4U8ioHuDiPRJMa5aDewC64XFGqyRNS7VSph8fo9biwPDdPpi49v",
  "key16": "5qusYHVvpXfqnyohbSKipCWax9YE76jN9YyeL2MhMr1PXFPHZJvz5Kawcg9n3RqbpYwaUnN3r7xSrArdU1q3dsf3",
  "key17": "3MWUHx8j89QA8b7tPJjYUhEqSza4EqBSPaxEYgTniTDHh8ZiXiCbbLbEKZPCzargxGrUuUgoUE8ueLWVP7q8M6iM",
  "key18": "5bS8h9J9vRX4eHFgCiu7AsxekgR3i2fUHp3eLFroUfUhKqovPQenbYffc7ZthrHyBkxU1pyNUs4yZgFr6cwwEBaT",
  "key19": "3cA2SHRH9ZN6qYuDzk8XozhdQvG84TStwkeqzFxthVpkn5sFnNxh3xydbWQfGvFW76q1tkFjYvmikbdrR3WbwxZ",
  "key20": "5kFRv3nfP42x3TqLinUzSyh1WniDJsmLNjaf3zVV3j421roJ5FqG6VNAi1wowz9eXaL1LfPoXa1k4p2aYgcXQew2",
  "key21": "3pwagjKSuRYHqShQgfcmwMadDNTqLRUVHeLAxKWQPV31jmKD36GBxiur8Ndw12Q44y9hzmmdN4BBgisM8arbRhgZ",
  "key22": "3pYnfknaMXTVpYs2STks8E6awAxvPE4TKocBM68rQ83fQAe2ZtANkjbibdWqhG3ZQKPtNvJySSqsrx2yn4Me15wF",
  "key23": "66Ftf9fwbu4LRW8CJHa3ss5wujHLQPMmVeJ2aRhcdH51PX3K11pevTrtxZcwgHqEEKbZ6uMLXh21gzW9FX4KjoK",
  "key24": "3s7yYtG5LMx3qF7RizL2MGQTQBEg1GxD6wHQb2PeqZBhwfFtA16QXVUbQRPyoqH3o4cX5Qdim9h8dMsapGnwh4J7",
  "key25": "4hExbAZdexNwFSRChSke6VnZtxPxJEnYRNWm9umFcVUfc6NnVbkXkNUD6UTTKX5zKJyJXT89p9Gwmz3Ky6QKWcQv",
  "key26": "24NmWiNsKmiYwXnE82pBdWptnfXqfCAYPYEDWvZDttSbwTfnXvpw3Na7tWvWgrrj7ADrB9LvHxGaAXA4RY9x4SX6",
  "key27": "2dMtpva8e5SoB28mVRxh8YK78f2xuwdtJ8fCyJCf5aPMuhp42T7LDbaHhGYooFxryuCgc3aJqDymcpoiYhj1z3Uy",
  "key28": "5QCg5s3emtW2E6AAjNjNY2eFTX5XcLSTSRu6HFH8fxJ22dT3yhJNVMU6Cj6m5TTGSoKkzarNTKwCpJHGhet5H4Gv",
  "key29": "4FbniSTRHBWQtEJZrbgGJAYQdoG5YYsyR69cMXwmqUhTkdxUsuN89NKxaUAEowdDmo9rK2PqJN4BZBmtvkvUmmK1",
  "key30": "3EWcgYEmyJCij1U8JcPwosNwGnHyLA7jQPoBrWQXTaD2bxoaqJ7qgwFwNqdN6BfVUfgusX1t3R626kqNcDbBsqQG",
  "key31": "2CZjbj55iZV2WGrgfAkyirRFrdVqvPBXgn4GiXcmNqb8LW22qar3XBizRHUQAr7Pv5u4PLPm5gEy1y8hVMqFo5Cu",
  "key32": "2wzPujveTLrMhmsLCBVdsJJD4KKzumxZcqsyNMeGruhFoU8FcbtXnpbTmxALUjCKS1swVoNLtoXGCvUJsJtHDfqk",
  "key33": "5X4tP5CtNsmNyR9FwRFue7F2TuGsoq9D7vYb16XWY5VgNG8HnhWihq886wJtepMaMkEsTrocwYyM5Rx9jZNjaub3",
  "key34": "7kUsaTbZX1G1ENWV99EvRoFrQKK6iaJcS2FD6ZkyfgyAajtuyC32Wi15oReNpYinQnNDU47QrJ3HW1KbNf6MTVk"
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
