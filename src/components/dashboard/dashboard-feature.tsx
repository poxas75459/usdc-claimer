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
    "2xsnEVf5qHefPd4ssJiFMj2WPGTE9tbQFaH6WKXY2vZJA8jVUKwJa8ask7LpgCyvZtD8FiCYAQfJZMTvBxULbbze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JSiBpNrDQQEX1qVgmKy4VWrYugTTF5rFytDYiQzYDtW3YDwqjUzEUyLiQCa6fSyVT4GAhe2EanLga9SQdiKYDGT",
  "key1": "FVQE2QwEFy4wpvJR8b4yXamqpb8ANjgDUQMj6WpFzAaj1WdCADDsQjCK3ctWHmF5mZvXAXWCaFWbRCBnFWhy8Vr",
  "key2": "4MVE1TkJuyBcs6NPAHLN45L6MYGrgngmh2t4VNtYHSpQb6XAaGHJHsMr6wRK9eFphpktxirACfvSd1yt41SeRSH9",
  "key3": "3nuhx9mqEbTrenMpPkBrMstkbWc791TApHgvpccjUcv7M7n2sgD2jKF5rL49pFS32Y829fKQqTCiYoHBx9hWr3nU",
  "key4": "2iz6nCaFi7KSmAV4Vnuhze6bRDyfg8ct8d9Csi9aGgeYhxQTsQiKK6KYDHwJWWM71kBEJEL8V5z1JKf2TmbZP2WY",
  "key5": "4kMYV2j5qENYAdnWYzrnRpgyRK297ZM8hcWkXCByDh9eW4SaVS2CQcGvApNs2WBDyC1SbMJvSjMJ4QLK1YNg1zND",
  "key6": "5xAzdA9zKb8Ruir7QsAu3y56iM9GAsvqWMbgQY9f62szexvHChqktwJfR19W6bgdFfeNd8TeDkj8gJD6rQzwtJnK",
  "key7": "4hgn6qyjSQcd8NywpfuRU1NzAc9wbMCVY6aQbqvNNqo82PBuTVvwKKaEJ7ELxurSBu4nMSBshn233osfmUX1HTib",
  "key8": "2dDg3joEkcoqnscLdR36pm6CiMSVSF86TUYPzauY6Y3dZX82ZosbbGyCQMJkJiXmGEiZVf1QPUHFMMUSGYBzek5y",
  "key9": "5zbXX2B1xVjFwmDwyaJD6qFwv4pgzUWFwhXRCNY3ViJTrassQYoBVdfKqTW7bUG377FCZzv8u1Lig4sGvswqj8pq",
  "key10": "5semykBqsMvk2PXgsJSHML5iSutV9BNpRw713MtUr8XMqELtpi16BrYHEm8zStFQPgBYz91wTGX8LzsYzqnv6ZPi",
  "key11": "4dvUUbauiy5XYMq3kV2H6yL3bVjohZyBJ88NtGU5Gh3n1RiWV6Q6QUgUCYuuNs2Z6361YCoJR972tPz5tP26etnb",
  "key12": "4keXqkczrEmZqhGMs36MEsTYko2pqDoT5stTxvdnCg4V8XxwiTaz5r8KSH5MrWx6cXHfJV7s99mA2Y8KjLd1Mc5Q",
  "key13": "3gk16gPbSBkPoKd8s2zLvvzPAw2t5B5YJP1fobECs1UvTGMQMigN17dwMARF4phuZX37PC3MEYzxJXHkx84kTiTC",
  "key14": "3ka2fKsgNW2YmRx4axihKhyHqTDpQo8RvnNVnE7ciCdC6DsidYHphA67wg4ce5dWnStchMFwRPRHBV8rssEEpAzt",
  "key15": "FB3aWJB7FazJyB4P6eQATXzViqeyaQQTZHDzxPvBTBtZSFZViheQnJrvnGDTKWiSriBU4bHTdnJEKgsFjfkLkHg",
  "key16": "66LxQm8ferLHKs2PKcjNHoBrR1yzTTpEd5Ar9FHQDg9nzkGLhuKYUexxsUbsJpNaUhYGJSj9GSXs2sCu1Rx4dkuD",
  "key17": "4xQfF71o2fXioHXgeDKSPHC9gfKuJTjBGwzvdDbu7HWPnj8tm5B6QYb6rbyvtfz3E9XtsbtnL5PQ3ezzhBo7ZFdU",
  "key18": "4DmnGnRByLx4C7BrNAg28TBxTutuTdjG9GTrwnjcpurGGnmK1V9uypFDzSKTGUSYQo5fDmS2SvNjVsXXQDP5SpjZ",
  "key19": "5qrd5PXzUAdLvN6xTv9VNu6svsvFwcvMCJqg98WuKeHiQSzuJMuCYxUQ8rtTivin9psZKgHTQpyNGMoRGzByrdvT",
  "key20": "5NP52FthshRXFahn24HmkCacPBuxHohkBthFSRVR1M4Ze7gnGLWadREovxCAi35e2H7ARB5KJA3bRJWvLEvN3uRA",
  "key21": "3EYSJuWVMyXtsoowDJcDXGPW8um6Jz5aT95Hp7F7ZVKp7xZmR2Hkb7WDfc4jaSJVh7H3ZKWcF1TXjdPbSj7WmyK8",
  "key22": "4L1rHXHdcQuhbckVQF3rzxe2ndUdC6uMmDAtTZeg4uRs9BYutFRbAVfyfuks8YJrftCduTdTU1fsJpvezYjXJdG9",
  "key23": "5w2BhG9qCRbpW4hNi4PLThQf4ynPsQNoztNZgAthdSdzhmpWWVdYKqeRnMA8Y5Dfu5tPdWoPZwy88oWnQfj54o7L",
  "key24": "42PNpawFz8KWBhMz9LqwKrLpjPFwtUHwM9x8EG4ZQP4kMVWU9JBnjqzj8gv9NNLh1HPexXGs2TDAbPNxnioP1WHd",
  "key25": "3WoFpRNcpzZFNtUegHGKEa4RhAquaCGzHwbaQYK4N4JQb3S28AnKHjKynd2VUDREfnVcqG1Y5hNj9FmtDku3HKxU",
  "key26": "3jQjFrjvGr3Xgeb21ochnDJBQxtTHtyEWuhz5K8MfTcdykkfbE9a1D6GiCtkAYwf94QMkMFCshzKDpXgTpNnas37",
  "key27": "7mS7iuQEwkoYMV7sp8sPYuv1iLmaJswNvUia3AgbR7kJ457T3xKvuEKxBA5nuozRezKQHGEECJeJNvcyEkA6jYm",
  "key28": "55Vk76LyypsEJjED8GfUEmjQ7F5NPCUFdGvzV5nur6aemgvu8dZN18H9Rrnk9XrnCgEXY7zZwkM5hX5kivkZk8H1",
  "key29": "ny7v6vF4vTVqygGWHnUeQncxh1nHvfQMrgTcsJFoCxMfJ3MNqzMLSDywGbkcvpU4bFHvDuaPUGvbjcb6tNzUi5U",
  "key30": "4D2B4WKwiJ4S7inpFAy6GodGZdo8g74NgiVDPKbBmAGUYFNegDVCGVgoKRM34Xjjr3YZs676RGJK9a2HNAkZmehn",
  "key31": "NTajoMsZCXxCqA2jMgBZUVa44xyFZ8rD1j3ura8hJdbo2EngS7h3jrUJYiJ9EiVPx4aDrMvPMWfHaiQRdnd7t2d",
  "key32": "4HY4c8mzG89Pkr93PUZBGhfR4PThQ7PxRPEebcZ46RKMPBFSpscG3uRtNKkpJBF4r5a2mCRq6qBJhAcwypqK4wLS",
  "key33": "4nUK5ErztgvW9kkuxLN9emC33W3NkgXHEdJdVYNXXUvqGdGb6MRFKRoUeuT6FhVX9iS8WmtJWYKCwGnZtwzUz8xR",
  "key34": "5hcsWXDZafQtw9op1v5hPpicynTm4Xy6jVLi3TDErskD7fh23RwCkCTFAtKHpu7NGHPqgWbx5LvV6nYN6T8vPBw9",
  "key35": "3Jw4CREYd8mKg1XMVEtUnEMNgSxSfxXPw2zqgxCWHymb4nCYTAoF9yaVZYpy2MKkNoB11MYAJysfc2FfuEmMbrfB",
  "key36": "3LfbvoPUfevFy6VGiZarYCApbUTPV3gvogMtJ7hkLC9d2to8J9Nu2xp3kgzgBSisjEuKse7C1B3qMhsZ2SK4s9LT",
  "key37": "3pLwzNB6w9w2KkrN1mZNmFYQMzWf1CGhqdKEmQ5AfKshph9N8QPjb1tfsHi9LiUPdWFgbXqJr8oghm4hhaTo3Caq",
  "key38": "2AsXm8YFLEgipdNydyzhoka3TRd458ew9SvtY6R2uKWMDty8PPAKYx8oagS7pQChgEhjois9Ps8CJwp5ApHpFdew",
  "key39": "2MqWiRVd46ej7gTzEf1XYU2eeJNpCz7RsMa7QyVKeciLRBX68iENEt8iivQygBxnu46yBrhKsXDzhKMnfBUJ36Ph",
  "key40": "4u8a8j8tf6BiHbzBoKnfPd7U7dpfRgT2e5U1LPR5cEMyvDE4C2i7HADwJtGFatMeV9ZT28G3EQtuEoG8E3umW7p6",
  "key41": "4xbJaSK2DBN9n7unYzuGeZdDNhyCPmpLt2kCwxPn5km7Mq3E49gTZH3385roY5KMyQiviR4fphJK2PL9di6pWCBV",
  "key42": "5GHb3tNFfikEjg4aYCLzcjopwh9MqyhyudUjCxkXUcfS8i3zhWCSCYxYQeUgh8ZorKAdBcXMK3LJhyjnDGzTfPKa",
  "key43": "62V1PeCExhcvJB73UrBdQ4pttRGBqfgfaD597UyzqHGm9RwJVSTvxN3UzQzionfzARykUWr2mn5HBsh9Aq9FRAFf"
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
