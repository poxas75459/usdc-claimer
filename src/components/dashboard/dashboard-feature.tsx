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
    "5bEpndwFAwyGUobUmGMFybNqWWXPbrzrhZugR7adaJXLmBWyWgy6Hd4tXsHaPFXuVJ4VSfLcF28gCyKG5mtZUfQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACCLMwBgF3Q2iKqVxpqcAUetJbH1YozQLLe9f84BY3p12iQ8psm9sPBpQ8Q54t3wKVsPXv16XYr9ehJ1NJQSaAa",
  "key1": "54LnCxPknnZrCGhyg1GjzNxhnBad5iqetSVqJS7re2UmcjsAsPa4aiKXSzb3C5sgTzTZCeVQ44Q6CyFEmqdGxuVc",
  "key2": "4qMA4zLMubUxZUVqHqjAKAT3Qy6YL6zhH1D5583mNbRRUucfzvG1pmVZZiuPc3p5xyaoHUBNCPXfcXNm7AxZ6ezh",
  "key3": "5br8FcoMLsp9BewYRnYPX1hzDD94P7tc9Dche18MGTsacr7x4BkX57RjmWCH1FxeKWedbjonvg9PM9wX4VBnZdHB",
  "key4": "3ev2JSpu82NuyQBv3ujQH4fmj7iADrR9bqURYcSEBtUmsA79MEfwkbSDBGb63WWsFKgXcPmPnMKVAf6UaH8htKCM",
  "key5": "LL186CqojS7u6wuEqPpj48h7MupSejLEEgmpLBuCk8gkKqnoUy2NKTjGpQDUBPgAdbftsszdWe7UdkWckbWmrn8",
  "key6": "5nYv5wv4UmANGV55JvS134wHUQrZj47cVdci649ZxkiWGvGe1KcEdePZAjLfuNzumUSEsUSMJYNyskXJdCrfHf2t",
  "key7": "3bUKsqtwvSuDqDNDuEgEptjSMZq9KJgsMNW7Z1Amzytaq33J4BDMk4qLaaQtn9X2sKXqtBGhFko3rgovaAtTtbNr",
  "key8": "2SGJP7FUKz76LWQYcujVp1W1Chh2cbZu3dTTt4AzTBF9oTTTfcQUKhimUC79yAzd4bP9PreKcrRzexbqVaTV8pJj",
  "key9": "sAo6uT8CffJNMjRSRBGfvt5L7Z4ouHVdsEXzL8GjTbC3PGktJ5tXAApnYSerUK2hetxzXxZWzBg5BFXvXTDmT3J",
  "key10": "2U25NziXzQfc4PMUqYPp5D5o2NZV6bcZAwD5METGA3cqqRBFeHkj16emPLqGooFa3vij37YwY1RjiwYGCXfjKcmn",
  "key11": "64ft17SpnJYhNiWiuqLHGVzNpr1UAhuzManAGuU9cGg4gnrPbV5ngpsduyhogLy5Nwh6TYodt9zgvJuhysfJ73YH",
  "key12": "5bHVmZHV4Uk54kW79hnt5KQ6fr89LkVd43hzedYA6i53Q8QnPtRLHMrYvfhcLUW2aHEZcsgw9TAfjgHfewg3gXSc",
  "key13": "2LPjYsVgoQjerxTGL9aT2dRJmhsuNU2T364Hj7qqBnPY8cDo4YSBxGWh4aB9YwEQChA26dLX7p74yjGyFqueqETV",
  "key14": "49pD4nKVSXW8r4t68XhGuk5HzykWy94REdB47pMJA8NvMQKUNGk6SmC7VpDru222nQZ1qz253mUp8FRcAqmB95Sv",
  "key15": "2dxG8kD6xyjVkvYmm7oDoNLSSwqKmPXqHfWZ9RwXpd1NrAJqkbZYwL3oYkhswzUiw1hvm3cA4n187x56AX7NFkyj",
  "key16": "5oRX5WUdcVQLfyruzekiMkTcqp2e4WHWSxQrARf1Bk1PbwsxgtWg1g1GBwMhpZLhtCgSaUvNDoR2cEmQMn6GxU4L",
  "key17": "4QRa4JFHHiEUmaego5YiAMt7cH15paRdPTu54EtPaPkw8ZzF2ChkMNy5gidJrf2EePm6AW6iCyH2TJZYxBXpbSuY",
  "key18": "2MiPXUK6kLL6PBsfJjKAPwFNxfoVx4Bv4tMLSgiiDyh5UctUMqXo16z7DmPVNMyuY5wFAzES3kVG5s5nDWLNaRsn",
  "key19": "36vCYYJLW2Pr1jk7cHf3YHmYQGBmn3jA6LRHBSVT9xaDDxbuV2Cbc47pxs9vpUJkPGALR8VwydANttxnUsdwdkDv",
  "key20": "4JDMcLNNyRC4Xbo9LxbaKhqPAt8Gi19jD5HiFrTergTuu1DShjERa6xVnvUmdwQWEmM8saqVhYjsap82AwmYnPSB",
  "key21": "4V1d9cxnEfZv3yBek4v1667iMTG1a7SNzrAVpBAuHwUrzygH9o16D2cbsmDvvtd4XdsXcVHL8Nqdebf5Q9UVyDst",
  "key22": "5tyMWQkjUFRmFwxFkqioEs4t3yWS9T5Ce9Ngd9ZnqWCAoakQN7N52bz1847tNNY1bMj3dfHTRapftEsZriT8BS8L",
  "key23": "5YZEnnzpADVUfCFtX8tsCw4fWZ9GkVCgwrTtSr1skMZuEAEkqMVgkRRsr17T3RpbuQjSJVSjYe4kLzS5qjUSD6Qj",
  "key24": "3Ub7nGFzE2HwZFtE4tFTWvxemAz5uabuJTMvYFimxnDrZbmRaXMs1S163Ak47bP2Rm86qeKmAcw8ucwysJY1gDbj",
  "key25": "422eT4dEMv975qq4xtEpeKFEeMQ72Afmy4N7ff4qgFCZtqfU3xs2rzVzsjPhoZTsnMevhR7f5a97wvL7RJQXqwGL",
  "key26": "4gtXTUbxDVUt85VeDDyhHTSTQYDSMa8fKm7Yp17WZfUKPSNy6vzYikdcKKy8i8yBPDCAmAkQRAu8d52kpzdbMqvm",
  "key27": "4RnAvh47u9eLA1qKbnb6LBnhWukBURTqY8kmu4JSkckooduc4E842LajGQrUpPANtaaPV2LeEWaiHoG9sxD1hM1v",
  "key28": "4Nm3ziAYJUerx1s1Ur7FkQtoPhXi8pqyr95PbPbMLo1X8R71wtqBoKQcAGuQ65VNbV5r9gww7MjHV8phfcCiisKF",
  "key29": "661jgGjuwCD6GkmvEfmBDs3uJPGJLrHKczSmNVvN88dmg7koqHorBf7VJvfHRdLb9fgK31zHxqDEXzPM7w6PVy2H",
  "key30": "5RXn5T4DRunYvFKUxQPE7sHw3z6NNy2cPxQBB5rtQay5x6Ho5ozeHzhoUjbP7XfiJSww5VJiqKXMEkxzFJhtGSv9",
  "key31": "38apkrpDMBN1mxPmbjAgDpkrVH2xShdK7zGbjS2mrfQmUfPJxYWWzwpyzZ8Aa65bUf1mgv1PxDRZxdLFjivN9sCC",
  "key32": "4EfVk8rrUWuwCT31Ffc7xHhDn2yFYgbiTj61SuyuUQ22YbVe82Y5u5LDDXkKQT6t9F9JAgAn5ijyb2bLDCGnCRN7",
  "key33": "4vb73nXsDeQ7A3HQuxHbbAtt9Ts98eTqeufZgoBQZucj5XCKiJf9GhALC8HLbLdcZMKctLsRo38Jz5qcjkctXGnL",
  "key34": "2MGbuzVTnbhbriaTJMPSCqQg5tr57q7EpW5pCGxFs1mQWpZgjfEpZ8v3y35GNV37nkh4dnNKW54PQD8jXg8UydrJ",
  "key35": "4M7YiCx3r2YXrTpbmByzAhJYu5fe3TjMTk36kzP7DQcLpP7iMqSqqwRxLtjDVpXVFaCchSHFEdNpx4VKnY4Pkzrt",
  "key36": "21YoBspDXAkhbwD6RiF2VWZe7LyjeoHq1JknenEqhoNBiVaNZze455GbdfsMMsd529TVi1ehEMxQytmJ3SRra3yu",
  "key37": "5P3XjpyTpAGgt83TeEzahBiZrUjw63zCuHYXwNn7QHu9kHsnxZapi7ZxHumCM2ivr85vuh3saxccU7J5HGEguvrC",
  "key38": "45meWajEdeay8zMeVKxsnYiJskbtkFMLEjCZyeD7CtAmPtYU1DBai1GTXhWDNxwePGzk8ZfH8hJicwtvKyUxnZPR"
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
