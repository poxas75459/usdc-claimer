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
    "2U6bFXLcNvEun1zRqA656WQz2VVbEMkiNqPQgSgTK48kkB9GDugrVWRtxhx8nka2PFx8g2HcC3Ca51evRSWWhgrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HFTiZYn9k5W67pmhQrQ7WuKWyYusTH6Df8wmXErt66TYRg4bTKxoYs41NNDFSd7MVz66rENmECMejBTAbvUGTnL",
  "key1": "4eZ6Kq9NnYTQKsqcAAx1a3nXt6rpuf9SKFmvmEezQgs86QDKo6FDDQUwsnDfaPRtxv9GpfrNNRLtuxdLaKd7kQnN",
  "key2": "2osx9oH87vpbPiGf5L59L1WzMC1sLpBZgWPhUx96PSpqZQSh4rySRjCrvaW5LC8givnNMb4BEmWvx77EutZrjVQs",
  "key3": "571LL6mGqAfy5XB2wR9v9LpVCDCigQ4QS9ujtnNnEYNQkYcDmW9ZqzwrVgjEsqvymu98iG8rxzJ9pZrv6uGNgqYx",
  "key4": "B9MbdhMgmK8NYq19omSKjjjT296oHcwNg4ydnwuoPpj8xG3tW8ge7DymCJKAHuBMQLBWNXnAejy5TqZ2Pb9bxgX",
  "key5": "2z1vT4S499KfzcBzZg7TB4P8X5mZbhRUTEeVpanvXXoaaUWMimPu93hfAXEx3m6MnZ143kdhbV4eVgMQoD48uhAf",
  "key6": "RyF9Vg3qp6SD61TcFG5deu51C46gVuxxFUcKYNU4EPXQYJGHpEGY3fgATvWU6frRJEHjYAoGjY186SGNf1Ns9z6",
  "key7": "24TvNKz1wbk8HeA5Q22nT4Y5HSxxXephwENXCzQEoyu6A9tktkAGJCC5c2ArFs1Ui4kKUaUxMFs9e6rHS1AYEV4B",
  "key8": "2rCwgNGm8edizv6j1TbfboNDz3AMJvHrAAa1tDjoCmxE1y33BDLC2wqW7xcC4fPo3WahBppf9zQciQBwfJqsFhVP",
  "key9": "31rYGWScDDrFcZ4XhKkkqAYxGNdiBs9crt3yycjvHPzWhc56sHFoMfgHz71DozPKhBhX5KKEWnf9bGHrYUiYh83i",
  "key10": "JFUUp6G8GT4GXr3iepcG3eGam7exWqPWzi6G2xyfh8M52Wc4nPgGJCTXdRfJSv6v2w2A88dAM7NGVPLbV3Kr44a",
  "key11": "2Wt8wtSFzZ94Wg2aGT1TXKJjSuD1en4wJF5pqhwF2ogMbBopD5KgMjA7Pjfo33dG1MKozNqztbqqSynJ68rgeG1W",
  "key12": "EcXX43CTHJRJXwoBiKZcua2qRx2EHTA3iE12Bd47ZvWn6ne8xBvrjoqkDXbQwU4RVxXwptZUubjVBKn4Hv3SRW4",
  "key13": "GKPYTf2tRPW1KHnG9YP1WQyfhfgYWptXtJ6n1t8CkP7kn3dZRzRLiPznDwhBaSgn1TA1wa76fCzTnb2fxMYUx3c",
  "key14": "2TGUKeftqHRSB25WUEwLQLmfPzhKD7C7nAxwTsj9xDAbCRx2yygC3ry2PLoRFTCjRiwrs7NGbDRbjJbaoNoPQhsk",
  "key15": "2HZ6KWoXxY812vyK7v4Y6HsWnWRNWXW1z5kxdJ1zDibB893NSAy5z1CpBH6ZdcMhLjFvEnntS2TJQzAeBZPvrqE7",
  "key16": "4vrkm61879amPbhiiPP1hR6okJim3Wrp8of7crVuZ85EUnM5MeqfXjPNeXTN347EtjMbSTgsEoiXXBX4iH9hCXRt",
  "key17": "5dPm8N6YpgThUCuy9KMdPSvx68Ur3Thc1e2G7M5iPJ1rnEdpogib1yRXX35GFMRT2uEKVyg4vnZvunkJqXAdLbjz",
  "key18": "5Ckfe6HAEmrwHvuH3HziEgW4mgCDYpEJQNmtVxaoeyWMYAVjw6jpTh6ttaMSoRzxeFwf6hEsG3tVzbdf1Atsa3s7",
  "key19": "2cnSWxFvK3fcn1Z4jXVJDv86GDkU3XbovaXWGGy7s6RYnBFQNaYTUzAZGkQkp861VzK7Eb4WopJxyBfSPxLTZg7S",
  "key20": "3iXrWizXQVj78bu82wXV7sLYxbP98JJ1FtToZV2G8RncYUh2DLtGtKa3pCyXxpPLTuoKH3jm8Wym4c5GiVvxQs18",
  "key21": "J3uzbjBCjNPmJx773Ubbg3PbsCErw7Xg5FgNNDEJwDwmy3wGgyz38bfHeXAJqZpLYYnc8H1syU86KkJswmtAst2",
  "key22": "4NuRtSpjynaYU9UDSYfdrCqrqwFtQES6c4nxkhM7bTe8b4wiMXdMzDhG4NR8kQEmhkFoe4a6hrdNi5uBDzA21EYw",
  "key23": "5H6BXgizBcYAWBXJnJVKHZngTpBPhZEyFCqGCbaJtbiT7yVu5CL6X2B1WzYpXmrmxzfsi5y6i2fWqRbGez5poSfp",
  "key24": "Zxbh4rQMZxiJVVhZQZRbSM2CayvaJ42gZTzj6RaubimD3rpf3yrcXaugWiLMwvfMjgZ7jdwmgi7QfhghtoVa7e3",
  "key25": "4jN4G3V5Hn6G7qRWSyXMahi3XyFiTLAKbDwShBxek1qjCNJtmna34CDcEpPp5QQe8zdRYqPnZYsDn5Mu7RfEzfeK",
  "key26": "3FbseET6QhPXCFLDLnxMM15mPgoN9rA19zu1kVSqTWsFBxfXfZNsxg69H9bXJVcNtipEm3EYTdu5MEJbsJSG9MQi",
  "key27": "4VKhwPgksbi7dJZuJcix6gc8Z4jmxbj79LRzrnYfpZpcj5jcLKxCuAsLv3niz7QhDJgJ9RxNTf1xFbg2mnRUW34W",
  "key28": "2kzi94J6bCYr7XDvXg476yvXenHJpGr3jCFRiYXywxaxTbN894ihKuMA58YUsq8B3Q7yBvJvDgxzt3XmSzuH2ScA",
  "key29": "vh2AfnbFQDCcyKJ5AS1KbWsHFP6TsHS4VQwHNioqPUZ1qwDVbdtyhtcFJvyKpCfizNQpKZmDgbM4vfsHNmxWnyU",
  "key30": "5rKYQfC5RSWZqu49CvucTTEE8s3CgApAcvVXZuoyauoWAqkzY3G1KZef1dtcxztimp3c8nF119CApquemDMRB8DG",
  "key31": "5AYVkte4LWafhyrEgCWFs2Kppyj7W5jGRv6dsFaGVrsZ5RUjbwaPX6AhDwveZXY9gaWggeHbWNqszob9zYTp5yUM",
  "key32": "4nTdk1DwAQMgZmTv3YhU9qJEHNf4mvCuRAdSU2RcQKn5vyVyymVWTtBryLt8uo7P6zYLT7Fua9k7DooK17iUQ7s5",
  "key33": "2YNnSyUcjnvss9pehGEUq4eRrn2HAsQhhjzeToAmfnouZxugDKS2nwNvTcWzrbYzNzyrfnwkSyiFhk8oHNfiBQbE",
  "key34": "3ssp6Ap6zkmXfQAR9b4xE783wTpCakUAbvgXTiaac1XpsgkLwcj3SiSCVGMa6s3HaiPm515FnRRN2pzUFpyFHsKh",
  "key35": "3oktTAbLmPGXMDTi2DXKJxcKVy3LbFJaXEjeVyJQaEBhEovJmtNFFwEBT5Vhjz1wB15vhzZ4V6hukBiVMSrUEx5u",
  "key36": "27uTvDW6S1G8doF9e2FQSqRAy4XrsGi7r8V9i8fmToRbR2dJ4Uj4yg5Vt8onfh3HLpt7MKXChx65T8xH45MdTaBa",
  "key37": "5QHdTN2k24LxiLFZymBk6ptnWvsqaRCL9ajd1g1Qn9YiLM95ycPrS5EVdchBvAME6DaoaPDyDdj5k26hAWderykC",
  "key38": "SM1u1mCrhjHkcVBAbCZEn6uZ8qMmUs4TPeR83dhhbpLuPCia1ARJQ8HzjA2ww8VnMoGKWzw961Z3F6GuGNXxyuC",
  "key39": "3jLCv9JD83Wr4gXNdWC4WZTmt25sfC19ErM8jMmg5gzn6zvJdwwJo5ukwXPLWz65HGywRqT8u1bAkR1N5x2XjPsv",
  "key40": "35xGbcQMAZKDJaUZKuVjd26MbJcKUj8ZyGGL2kRg6DuSU6zRXzafESXYgzvU6G79tQXf5SD1xaDycv1bPtu5N6wL",
  "key41": "35EEZkTLikJFz9acMBnFsBeZxNBbHpgB77BKUab6G8GDMYjXzjwF5Jzj4SzyXYKAbgfVuqbQ8y44vka77dKz9YAv"
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
