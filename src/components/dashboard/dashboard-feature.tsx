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
    "2RwM4HBvqwbzvnrTY2rkqoEcDBuM6AatfxT1HykRTDbnHUP1oZUC8yt8dmpUS3HwKPryYRBpf6bnX56tqDLMXQrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BEEUgMuhka2mNvJVWD6hKhh9nPUxtmMnqN4EoWvTWnWFXp5AcPUqv2HcqTuxfhjkeXYvjy7XKZtGjHSH2trqMU4",
  "key1": "5ujj8YPcW3RSCBVXxeQ7MVEW6AZ8tUa4vtj2Xxp9AyHA5hKe5zLbR5TxuA9v6LAorXpxC2MUtzGYDKkmAWVsTcVK",
  "key2": "4YmbnQfMNksfTPrwkofJTr89qsxiqxdBDYAzgKq5KAF2RdreB7rDySbQrBxMarXK1DufngrR3JaenP1xsFodu7o1",
  "key3": "5vQgtGRDyWsEoUry1q3NWLu7F85u7G4KKxWrZJErs5AK1jTTQQbs4We4MGFn4p8LGJADbJ9hS5Fja1mrDzf8tZ4i",
  "key4": "27xcR966gbmmrruv3RAfyXx1oifAD7Z9rne9XYEQciYYonf4hGR4s8woa1SJ11kR92GgpAWT4XJY9yd3vsLsbnFg",
  "key5": "3uUWBV7AJANnHBRUnNqB11KreHvh1JttMtikAsXxtHQmU9GJJybtGUnPSQ6BnFcMR4MBHgZk8iKuSc8k85U4NsiY",
  "key6": "4ThBnjL1MJMkYhR7zqHJrMLN7Z8Vbxov7VVfe1gAGqzg5Ywe5XMYMbUuohgzVpd6sDFPfzb9G8AKiyMJaem6MsyN",
  "key7": "4YRzncU2EEyfktkHp7Geh6W33jNrKiKxY6TWE7hx5KzhWsp2zUmYhzEzLFth5WLRqjvANpXBxQXvT928A25fskCz",
  "key8": "2KNTtuH6BqBAJi3ucv1rHJJQHYViCTDn2cprpmicGCV9hfqh4rLScRxj3PJeboLpnHd7ChMdxCYFQ8vXNA6dWe4v",
  "key9": "3MokyQbEh9RNpbfcYp15g13vSQbCgp3nhQ63nrdCEUV3bC2UrnRi5UXuqqQfvWR6d28SmAvEGUcg4y9oZhh5FGED",
  "key10": "266JzkhifCgaEf27zEuGHor6S9rRLXkxs9UqzevLzBpspHnAfqcmpbApy6n4BRJTksVMraKGUbWX6RQjJi1kYWCp",
  "key11": "2rULnus261kf678yKyJQWP4GMA9UTCuJSrZyhS2kg3QuY4Jgema5B2vdnrnWWQ1jNCd7fAGk1dLg1sXVE2vTjsdN",
  "key12": "2ZKFHCAT4JNtaXcKVeV2h6nvncC6QVrJojA7ugtiB5JG2vbkB6dJUARKZ9uzJUPRycc618EBHs45nyiWXRMHm1dQ",
  "key13": "5wpCgRbkVi97ifLqpPbzLZ32nsp9HoYPpGQAwEj7Uqn8mc1ASzuCuBb6D5dFQWTrTLs2KJohLtxkhaM41iYd14f4",
  "key14": "59hMPXK8JnLY2i7ohs6GXA8JCWHPt4PF1aX88WcpRVrQ3puvGNAQLnyYAGcDWvNhzSmLxmbvQtTLfnXso4Sccbh3",
  "key15": "61LGXVQnkvRRc4fdJXjRQxx6Et4XRV1D2MSqaAKZSKcBC8h6W3XtEemKhPvCoG8a7BjVsA826DAM4S8Y6GqxzzsS",
  "key16": "5dYx4rUg6Z9CW3MvBEtoMeUVzdvPHtm247chW35fskiHNhx13YnnygKVJmCWtfR6Kmafoi2HPAdwAWMyJrXeQbCR",
  "key17": "3Pdo4SpqGdAgL6cS52fD78hADw28bp9nU6tQyuesrmjHdsoJmiYTaeKv5TTYaZUgxjkmqLfZrPVidEbapCgesNyX",
  "key18": "2LRuVpdrdG4mGJZXby1aCLmNZGwU831ZU3udvtBCCLbo2J8nMXMfCSvWVNFtcLzrKfnoPZttaDqeRhmWNNYyRYyK",
  "key19": "3TGKr8nDS5JgkJheEE3guysV8tLXjLkjMiPuf8XxFco2ZJf1d1JTdB1FTjx6XjQcANE1VKzr9N8J6UVRxT3w8bmR",
  "key20": "67Hnp6NUNJS1FLNPzQNbPG3TvnAToV8Th8uY4b9TJ3d37tVjujgFbp6pGWXsTYMHac7EH3pcHZM8pSHFSf9JB2RQ",
  "key21": "5G389TFruAC5rSip7a5hLpd6UiuM6x3V5weKmgRA8o8zkCPUw1uy8c71G8exJ3NsMfmJqmg8GrCKBUCaWHyrnGV2",
  "key22": "47uFNHWdVH9KkDiY3aYPGyWLoTSh43SHQd1hmauTXNyW7XPf1J59tspi9eEBKMkcPq19kK8AcjgxtkX1WJpDwA9X",
  "key23": "5RMvZeHU8fqS6grVDN3CifYiDU4WFwmzPr3NXGGZuoVoUJrP6oZ2Q5rCfCkFJaXhjqPgBonzkgft2VJ5vC2HTgU1",
  "key24": "23ntYzTASqh99sVteLSGPX2nS2aRW3BZxFCyYDNN9DvfzVde1kaENoVzbKWLGYypwpFP8kEzWKLcARtHvXGpgn3d",
  "key25": "5aTE3BDaBwFUM1orCkZUC9b3AxjHqep9pDoKfdaDYbM3qZckSijvumsxxf87hj2AmYoU5KMMN7oqJ5outWo4kfQf",
  "key26": "2D7fW2Bv9AHQNL1jErtLYZ7twrKSyNn4cYTrAdxkHNjFnLeJHRVZzyRXsQf4G8TBGZtmGWsCWQxedxVQFdJCpvgh",
  "key27": "5k8NRAUwpu49uHa9JgyxW7TvkwhnJDN5FhK9M5ByXdFBRvL3daFUh1V1ZeNsLeK9gapPf1vwNHnsyPtLkQrZ5Mid",
  "key28": "zvusY8AepDbzwKHS3apBdYmcbQnX89yhLRm6jF542ieHP8SiMfxS7E3Ku7Lv67ou3eq98Kpcz7ZXPBKeXzLvy7D",
  "key29": "5GvPffYtKhRTaJyJJo4AeQWzNyMjqANKkB4c9ZFjXieNMjakLpa6VFmYzUL8TDqnK2P9kxSgJsq617juqruMdqqj",
  "key30": "4tScMousupyKiXte8oHvjuY7h93nGJUEK6XEYPBrdBHkanLGXAFengeoijhBW3oWe9mDWHx1SairvspJarz81UEV",
  "key31": "4kurSPM1NHea43bPXZv2PcwCttBcqFiwfdpr71GNcy1b47FarXJgiMuKtma3t3oRUXo4GGXUZzXKYRR9N9EbFzAV",
  "key32": "4SQcYSaLb6aBarbEpGhuSLC8W4BWzHFwENzK1hxuASgXZHZ59SEPsAwt37ZPnBWf1K4NGzYkxDa1ejng1NdtpoVc",
  "key33": "25yssaE1ofwcYRNfPuvscce4U4kYhkbawXoUrwVwQyDYBa7vyau9ssKkrVqRTT4tP8rGT1M54XTakVbtr9GaAWQk",
  "key34": "56zSi69CyE2RGqqwzazdz8Sj2FPBAipwKnPyu13gpxYXTj1JU1cZu1FX52SFvHYuSt2AtJZp9d8RYq5RwfacSVoP",
  "key35": "4R9HUcMMaedSdkcr7AyZi5AFmESL42RQVeEqQURiLj25er7y6wYFDpdRiaBjBVWHYPyGMz2RBpuo65bksnUbDkth",
  "key36": "2nfbPtU9aU6gUM2hF4eLZCFRyHppeYckWhgm5KcgxzdsFRvNawV5vTKXkXn8mPLNsphAme4kM6moM4cmhQmQGnJY",
  "key37": "nwRAQUssQDhGaT1PhX7RCtVAxa5aH7bPMeanduLasAbe6PSXc57jTJPHATcuujYm3E92f1f6dY3ZNdwjw4QiYeu",
  "key38": "Z37kMYmKdJPii7cNpjvr971kMrWs7oQ9fSf1uR3wyhFkxQihAtrNNTBrMADgtu3UXoVrZj1NUo5H8Tvmgf3Qqrh",
  "key39": "3fvy6ddjqAEbyBd5ytP93YfAditq1MwZVLw9rNAR24BdvXAA5oFDByzqvQW3cED81UbQ4ydwYnh92MjZeRoeMVTa",
  "key40": "gFGZU62HLUbnMr6PxzEFM7uP1DT8G4h1tKjhZecPBZ9vnQM7dChkikgPgggYUdsiSixmCg3MxNE1eXnzXsdPFk8",
  "key41": "56hPEpHuoj1whsGxgqWyoZ2SMRqCdyFK6cFnrmdbjWmvHzTdzttiYZeWcdeaq2zUc8SEWVCyCjKfWB55q7CEk2EL",
  "key42": "aAqfBQia682HFzuY8gQes44BiTeG5oQ7Zsy4f4E1wNxzon7a6Xg3vJw2Pbj5CwpBcog61QUKYT1NRgCtss3YRo5",
  "key43": "5AfTdQk4Y5gd1UCq8kMypKmtWt4CpMj7ZBMYRfDVzxBas49XcLL4a56Ts7twA1pGg1KFHmwHG86AtJmHHG35RMJm",
  "key44": "3SVmZnrFGnQVr5XUB1PRtZCJ27c5D22gvgxLq6yQK7TYnCyPktEYaV6zd7RTdeBAg6RcB445rLNVANNGJ4RvXzmv",
  "key45": "2c8JuG6G68qT3eht1mh6F29UcW2SS9hLf79XiREiuyeHvY7R6QGWu4qQjPwMqZsWHRwSGa3xBMutgV7HGLH5nwSw"
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
