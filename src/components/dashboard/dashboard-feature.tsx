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
    "ayNUYRVjmRhg36kt8RKHj2oD52jGVKLZcq8AN52SJVQRpHnCvJARzvpAEUdr27FHEALHfQSVciWhtHNcfzste32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDxyAYJdeTE7L36gXsRDX2Cb8w9oYF2cV3KJE8uEUaQzjGJqbAuMibrLroJF2uCqpVhbq52M8wcAQZ9czj6Jz82",
  "key1": "4oNxj18oZNbdgSi3KApHh92zNvJ7u2DaR4iQnyV1ncNP9HsHbm9MKfwBhDM24XJ4Ldca7dxQSmbmf6PxykkdyQuX",
  "key2": "57qc5B1r4ZEWgQp4n1aAqkj9LMYXb8simj3Jp7YXUsnDf5fPuJHyiPUgATbdB7Y8oof7WWre2Wj6MS44fVWbrE2s",
  "key3": "3ocWVfnEt41ZvmFAKDbicFqLvjkzPCGJokH5zHC1s59hENJ2ZHk4HN3TxZv7QAJBhXAsmuXnqbBThgtPg3QUMUr3",
  "key4": "4hxvMMFFaLQedU5GNxyJaRJoxwxYj6ZciGfoDwcFcRmCXgC5UbwoLGMi6wR8pyLPikXPBnFHfPyF48XM4eCQGJ6D",
  "key5": "2HH1LYLxhA7X7U7mt5xGEk69DZ46tfb2Ktg29ETZnctndmFd8FAvC3n96NR8HgVvUza1Q9dSc46jbeGR14LHAeDP",
  "key6": "wojj9cdvwDrpDqN7VKt5DZnQ4L6RTT9V38WpHccfMaPWhD7FYSXerF4kr32VPyiDWMeE2GfAEhhsCQidukEHc6z",
  "key7": "5zpAe6mDyteby3XTHwNkvrDDFVVyFTC2gLje18nqDDNPehuVYMR3qebJMks6UUzKm6KFm2c85HXiYmQ3mVQLJDqk",
  "key8": "2JHtq3Hhft8ikGaKTDks391CCgCRSMMeNK8zFFY8zsGBfcqmRjPsLzQwJ1R1dxZrfD6KHKMvoiNy4BGiyQrjzJzQ",
  "key9": "4SVQ5Yr2dq5u56TGxW1tXMfXDrkKvH5vPBVcVSREXgDECuPGZpyufyjqNwwFVDyNUSyA4ad7BSPjHgxLLoJeqoSt",
  "key10": "5MDCs1dQay1JYkoB9BrnK7WwxUDDyxHGBc3n7iBtoQhh2hzHKpRg7tDjTXkYepRYosMRPp6R8psUidS3GessvNZK",
  "key11": "27XgVAycLYxNwkE9fTjpJoSHyp8WP331CapnTbnW2qefKTZ1hBmGwGHtgEDJq59bT5a8ES5zPScM1dSLnYahz1yw",
  "key12": "JthkD8r8EFqbdKCBiJTnm6BB13uQ7et2CRBVV1c6M2uZ4AgeAwY1HFsqquLPpMvY3kevYVGFfVLuRnUUgvxkje4",
  "key13": "oHK4sMa2gPhqkz1ebdSPfX7U7xRkiD8HYQeyCp3B4XNDcxmHBapAWbsJ9bYAeP4eDEEaWtsQmTmYHrAm43cQYht",
  "key14": "77Rk8BMC5x9xDzk5ACr2H7ycGG5UgwmAUXBRGozszE8J72Dmzktd6P8hXeVEi2dYJ8eNMtbFjrov2y7rvG4LFXH",
  "key15": "3779icfuJzrhG4ErvF1CoyZ218jvzxoeFhUNeGfRAwXpXMHxDpUXYgrymK7D8UVXSvWQqmwxmi9wdsS6yDaT56pg",
  "key16": "2wrwbFaxYQALjqCBHxsugcurYDFqNoEYfLkbdBJveMEj6Kujx5HfePUdB9wPDAmCfHov25Z9VuhEpZc2MyjTmqb",
  "key17": "3pjy2t2JG2Yrjha1whB6DaCg7k3P3mHSR57vwUhJH6tkr7EwfowJgejEbWSRwUxokSswT9m9V5pMByEoQhsu5S6y",
  "key18": "66de6sXR2YgLayA9P2nV454nKT5yHxPoUeZaXmEwmaYocYvtffhL2CbE5EKu1BFCiPgAEvXYgvpGUX8kDBqbykQw",
  "key19": "51NTdj4EmLbKTSM1beJeSwHXDKDAmYpGCpRBHUuGMWdFFAPaGxkTbWFdGb3QkCKfCHPCpozApwxpf9DfpEpaE3kS",
  "key20": "2YZM1L6KsZftvh3gTVvSCtWFyQ776NPiBHRLtQfbYdiwCcHGUDbRSfKgN2kY1qLQ3aGKh2N6ppyGXQtxxrLAHamx",
  "key21": "4RkU1GYm1wexUeoNmjXtK6pTWe4KdoshrsL1WsEa1a9kSqZsGATUphK6zHYZayqUDNUa4GQxBkDDLa8Y3YhyZpQ9",
  "key22": "2iwGDsjBwcV5jwKNSqVYmMsLo3wX4fZN9F9KSxfwxbqyWumL9KKaPEKHJGTTJ9ckMeZur9WUekqaUQv5Ru8vaCEQ",
  "key23": "BUxX6tjgDFRuaGhdRpDqUaKMgFak35bfiibEyqXLLXuNGX8TMzQZcZqk1o2U5UQu7YZzudb3en7Ksa8tJe2CNyP",
  "key24": "2Fbm9hqr8HS969of1Qw7uZDHY2exvooxdVsEoMhzmWHKjAiavWw5WxL381wcMhXX8LeCK8gmowhPw42rjBvb16v1",
  "key25": "52pdwudgBnmW8tyZuGmwYpMEK25xnkW7K6g9k4oH3yZvHtDKQGcvfZ7aMLa85Ygeg4pKBTTJyKAKMSXWohx5MveJ",
  "key26": "2J5t94cmzYUt13mLkH7LpjRTaLEGXu9HR7SFj1EPdj9TC23EsRNCUoPRMmQY8NEw3RJStJkgYyPiFXrLk6tXL3zZ",
  "key27": "Rn8aWtHt1TmHm1r1K5PV57YDuoLZCg3JQ47RcLyeWMkdxkb8rihbt7M62nc6u6hG4Ha4LAQ6fYMdjqyMusi5c3Q",
  "key28": "47Cfbt4xpBVXxNXoxt1TUJyjXiRkjTBvPETb2PX3FXP6y8EJmhQJ6cCKV4PXow5NC576TdYiXQ5tTvA1u8tAijdm",
  "key29": "5BQgQr51evN5gNZcrcx4ePkEr3DNi2zStn6wujXVSnYgYYDh8KBZGNmyxYSJFh8dtc7qV1mUAFEVRYBYNcr2smxq",
  "key30": "3V4aMoB2JxZb72zHTJkgUBPEQr4kL9m37BDrnkvumDqxjhLivttUmMy7gToKMH9tB6jWhV6cbzMfrvQeKvfxuP3t",
  "key31": "5TGEB5ob4p2arEcCxQuGxZtSmLMJkTN3ubaFDhm2d84i33y7HHo6FhN62XBvtjDd7Ta1HpjCHNRXrF76vpjE6EAf",
  "key32": "2NFPZLwtEG55ybm8wSZW7aJ6oCkdmXNtyGxg1nEvKZp39u84PtzHoFFcvdega5Fxmt2nuhbHRUNmDZog25KsPoBc",
  "key33": "2rhu3R1cDGBKmkp9Fdg7QRhtqb8sirtmd3QGw7NaJK31PXEBV9FH7gwu1PbifT6pwvTx3m6qHyXJqXLKTDwbU9Mt",
  "key34": "4yxUGeNJ9uDWKPVQMHgKRHUkVMWRfbAZz48zbLfj2R5T5ZmYmUbqBHqY1rj934wiSwofrdKJctoJ5Ap2K4mwACdw",
  "key35": "211Lr64tak1VVCaKhdeijwVYVQxPxyjd6P89EB4hqmFyvCtUJEHf9VRyouzfGBujQuV62EeaBbvihtungKo5LfGE",
  "key36": "4Jr9XTSHKWZXksTmofCZVQT2R9mAWG8K2CtynVgBkat2UY5cd3KWZcTwugiSHVcNUVMYPAzSBbfFw5hEHF1sFTqd",
  "key37": "4zq11bik6zi91PDfHf7MqngRcWns2mXKwKZ2YQzHWdi6bL1bG7QGoM47Qs28U75doAvsXnBA1FmnG95cM5sg3Yf6",
  "key38": "4D72oai386tMJW67r3SrQ59uYzTnGUZ441RPNYuBdv3z5KMFXu8vMnNwXxxdtD1zbe54Kp4iA7y5429wKp85b941",
  "key39": "5VpZ9i9hdEA6LBdTe3faGu4fxyXJgtGvWtRCuPqC9AfUdqFFmUVQqJfcHnNfKGVnNwapSdBeA3pipCGCfJdN7Res",
  "key40": "6383WrxcTtuU36Pm5v2DA4WcqoXGjrxRaW8QaGxthf3aenyMh2HD2pNMxbeZyXGeu8iDtbbF3kEnHiaWvQLVc3A8",
  "key41": "5eubPjHgFHSQF9LYCp5YoaJ3TpgJLZ4iFGPvkGyAB3tdtHQQ69xfgCM1pvmfF3EUJXadJV6mr8Buk9zsf4AKKfgU",
  "key42": "97yMMESCjpXj4gECjbpq4j6whrcMAsG9z82NdwmjhYSNtxo36QWHRkd55Wf85Hij8BdU5vWv9anCNhn3HMUeHHt"
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
