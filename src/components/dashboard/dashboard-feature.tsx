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
    "26UoGcYbjcDa8rF1kEby9jAEaHN7EA5ATpoYJriQXiTiW351xh8Bru4jRLWxoYVWZ6gWEvDC5ctBLFy5iynz4CpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3Pw5aTy2uz3J2LVo7x5zog3oK2xaR6BkyzDBkwKQXM2YR2o5QvzJW7gMAnZkB4EXhmTCAruQnMHQtDKKfbBWZS",
  "key1": "MzdLef5fqqRvaADWCiVbdtHhj9PwEJ3PGz1iFSQcW6kep6sAHztzcKzdTqQwujRHruu7JBMLm6SSJhvcY8H4r68",
  "key2": "mCSEriDBE7mMArbMkKF9cExuB2VAKryiFR5akztC4MQiQkKkPh3ass4mYUqzU4U18JcczPEyyh1QPrxAh4rP42S",
  "key3": "5AwCcJfaFfYQN1oefhMXx5s9WLVuwRVXJx1gXp6kpawY19otz21Ymo8q6JjoiLPoQ5ym8faU6Qo9qsiUuPVx7A1h",
  "key4": "48TVTpmKgHg5e84BNZf2sKmJNAite2UUaAygjvirFEeDdV2frJuAwbMnrTMqPRrJTqM2pk2MAy8jqiYJZ9D8J4o1",
  "key5": "Ph3At8R9g2SZ7tDKwENZhSZCfE5V3Ade3DxcLbTCfhtMViVLv5tQDg344KPCikwi2JjMLHXStoN6FhLGtRCdxBm",
  "key6": "3FijMNtEUst9wfEtNmmyG5J5PEeHesLKp9dzryhQeb67YZk5gUxu9GdYmRLSMggMRPMVVxyX7Ke9KH13fF1Q9gCS",
  "key7": "3sKogn7UTSH2sQQY4wMtJtfFAeV8HaABJjW1cb2WuKN7Zu5xj4ZY9qTLLs87uw7ZhZU5ugmYkDnvtYDtMv73bve",
  "key8": "39ZBM8A8dgExbpUC3iCfLvAbHjzfkQaHTB14C66WwQR6HTpCkPAmsoFpbkVkPhhVcm545uDoqSTKQFDvHxXPnVvq",
  "key9": "5TDXofgzrqdxvRXxwu1CAmKBAE1wbCsKFXdUrvLCQwgcywXEf44YaB154JjfF4kfRH9PtTZY2Lz8fDxLoR7ho1Vz",
  "key10": "3zKDGRZEEyaq6BHN8kJju3Ss6PcY2LC8E9aNQzYoNYz6ci8athA9Qf5sJDhsKNkiWoGo4HCXpTjot7GTqC1GAbk6",
  "key11": "hf1EqoB7zb179Gb1atVA4DFrP8Y2MsRgENxHaVsjBn6M1ZtTHM1M2GYAVumrBoBQ9RuhYnY4BAyiVSdff1efyAL",
  "key12": "2nAuybLRmNB9tYFFBmuEhv7DNQKCqdwpoXu3SaLPfdNXCwgDxnuAK6JSWVrE1sfqsZEACemCfvjEaTSF9C5paMKR",
  "key13": "2h5U4JL3PKL5szmKJmGSXJ2AgxnDEXsYrqEnMdm2vYM4maPRY8ztXfa5EvCZMUeQsdwYAJGnbgrBcjEwePwhCYvt",
  "key14": "41Zt828SwpSsM63rDTLB4iEecQCenDoiVs7kipJVt76Zg3Fnuycrxm8eAzYh7uKbuaBqzGQFLyaQ1oyqSLATB7nw",
  "key15": "2yN3CEghF8CgSuchEHMpGdxa3rez2ukqrfwkFWdLkhqSB8Ym66ypvkVbtoh1V6uGo1VjamnyTeu8Fj5QEPGoeedt",
  "key16": "wWLdaHFVg1htJqgq639MYRAwtmmXu4LTtgRTJzLK3MAkmrdVZbynLWLKk5XXordkm5ag2NpYdcJjzvAR2qHogt1",
  "key17": "59jvWw1uxh3nQecv3WRprfvGN58vuoVThGGw925bpLnGncQ3ZKYai1gQ2p6kwytxFJp7a9uBgKcrsboDn7eShZNL",
  "key18": "51JDF9AG6MCohKwdz79txhWS9rhVJGDKvQvnHdw1EXj23vrGytR8wZqhsEBD2AeZds5LdsUhpUvx2KGJM7MYjarU",
  "key19": "2qcPCEzDJHGo78RwujfavdFv74FpnrJB469yGdbjuBKBGKsXysJf4gE6RPgvyfinAc6vHjSdLGVbLuV5y7nGEo95",
  "key20": "24BiDHRXHDdMmV5Ns7a8eEoFgkeJ7gBRxjeJNHNU8aNpi3TMNQijXyNsB9FuiqsSwkawU3xdbrF3afLoGDenX3Tk",
  "key21": "3Z7p6rRtFF4eoUJaR1Ze9sc6WFnCTEHQH74mL9pwphqmxAFBBqukoqf6oRxPT9XCrHrYvovf3N5DbSLPxqdu9Npq",
  "key22": "rxDCSp4M6hSZntMYoMEwUGV3qBaZsPjgNchdfcTMi8F66cDx3uRu4jfq8gphoXGQ5UKjp7JPrNx9QZAKzZNTkQW",
  "key23": "42jBkWMM6ir19kQPmkgK7tYpdVzjC3B4MNwnZtmiQPFjTqeC2Mkt8a83ChdPrCwdKKsgbMsCuzkRAhpSB9AN2MaU",
  "key24": "28PdLoLex5bHU1by41VYT42uPXgiRAjqPNGZzCipTjfrfqFKk5FUUStGRxge7ezu8qjQUbhJUq14fkgqoC2joKG9",
  "key25": "2vB5DFigYvbEN42TdSYxKAT6Jdrf9mBjnQDJ4ujqnFaLEvyEvWWfd3rmQQrwjSPEbg59bwUdbFMZPmVc7kzXxj8W",
  "key26": "2mCpsZD6DnZAfTK4Yt1ELcx9zDscgAqNPS9nRbhPm5ZzAYjjB3ACAYNKZiY59YAWsSwmJqfYM9UdXNjhWfbgCszy",
  "key27": "5WLk277MRgmRD4Qc7kGxiDhNThE9bjSXEwPhA79cq4tV8MJsd3AxdJmbdMcdHAoBQo5R8Bksh3VTGuPaqPsA5FT",
  "key28": "sdsAWdxvZYCTeQfixDKdWDv1x3uuGpwrXmPJy6NdviXPLcntj5V1yUY8Uv5cNJX2ZbRUnWLwPoMrWv32AKUuuDT",
  "key29": "4tgK23tZ68KKfZgj4QHvKP9fsDD2i7SAYycWjz5iXK91U9iZHxwyxxKSxuF5VFXb45vEVhmbFk9azcctfFqWwF5h",
  "key30": "4SQhQNsob4FUEXH6JNT6dyjwBHGqjp17uWsfgZLDCSfhGR34YR3pZ8EtwYh6PZqb71kqEHh8nRr8J3eupUw2ekZK",
  "key31": "4uYHWcqwy6XnKUKpWvrBo2VUfkxmNmyNyyVMxKxFRabrJuyajqJnkxnHyHvn3D3NdShmj1CaZNHr3QTbyYgHXQAW",
  "key32": "5LrX57QhM2PGH1rrc9W9VTnEs12WQ1aDqvpRiTtcVzUL6TRmZySmEcMVcVAZmvi9FNLPB7dKVfubYoM1K1fqBn2E",
  "key33": "2aCm6NSreJpDBYbGR3GS3FiGG2Ty3mmmvJ8d4u5qusag8weCZK9eVjEQ2GfYUgavRAEgRjQS4zVNcHJe7thG2f5P",
  "key34": "59wnJmBUy735cWyNp8r6RQQ6W7fNGZYhLfbGue2ugJ1M72XExmt7zUjwnPsGFWdXV4trzfxy7mzX2ooy75rFGGFN",
  "key35": "3nuznu9vDBzDQPHYHiYw5WtcfwFPA1w97ZL5tcyzUrR1EUdjuEoAgdQxx3kmM7SnbAnAAQPvK92NGGAonwGhnk8V"
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
