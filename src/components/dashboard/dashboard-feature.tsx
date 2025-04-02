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
    "2VwxjX5Yo5hjeb3oMty3Sov9uqK78tRsPby6jLV6Mw4ZKqT9x4cKqHCk3b7YsHJBJT7wntMSCaXiRrD6mhEv5vzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uf4dK7Y5nim8PPnioWFXsY37fE2GuspdfWWjW1yKASAHEHma8tHED1Qu5uthsnpCn8HA1EvHQfkjENZHLXJ9Z9A",
  "key1": "4WUb8PELY2NNafyBxr9eAVyJiyJyEeyhqATQEtj6GWwUccbkVXxpLZMTn2RwMXzZHvpJS2CHJ7ao1HVHudLHbF6P",
  "key2": "46dS9jeRxaU1d2CRGshEUnHrQ8XUHqjC9wTLe5eB28Js6dR1GNzBXaBp2aYZahZDC19F27Qr9cjCLbdaX1hsXJ9d",
  "key3": "4UfuPn3dUKg5v5qrGwhdrzsTHLuSYsQKmgJbKCmTCqzFutzm1fi1arnM4aXzWUzfbYd3WF1iPgW9mruSu8yRAitq",
  "key4": "2kUsToPUSJRyfM2izVidtkv9spCVeu6wvDNX8yVYybBG5YuBtkTTPRSWkLrWZ7PCkN3tjJ3ud2KQfD5VsJigkSec",
  "key5": "4H81shvQrPp15REsq1nmCWNSPdb982mUdLb3Uw2wCx3XFE3AsMqW2Hz6sTQcPWqcK5QAHT4GuxN4Q8LuGBP1yVo9",
  "key6": "5H71KkQu7oXbHFYFxAtVXXri8Uizfpp8HLgQXPL7wNgaufJm1gikhZbPHUurFbNm9KVxdMTGbYUqMYCwKkS4STC5",
  "key7": "3SDQMjDXzLerV2LBv3MT8ZvgumopsT3FCwQ3PdMkDwa7UrgBsx6royCCPsZuPfoZwGvKbSbgd2o8QTjcUEFogSgG",
  "key8": "2TmwR3JL5RzWo9J7aopJ9ccxc89LsgSFR78R2vJPkiCY2uD5sPAkddRvHwSiXDtDBMjZtbZcd4CtYzwE6uBY946w",
  "key9": "3PJVPrwXBjuwK6DGaWxoicFZtVg6Wou2dYfVEyKnpux6m64Aaqw8RPMy8us5vSSUARwo315djvHJNNshFdr63M49",
  "key10": "2QPZgChMvE9PZgY6zZic4D3rA8QnnoiHbEM9NSHTJrSQ92n4RuyHmHKLc2aaesAPh7TnxxFZXvUzChL33nYAbFq",
  "key11": "26XZLPg4bhjbVKqLkA2RTK2dHAnykvVYg9V3wfPp2JzD1PonnRFVcZCXLsBHtfN8b7nuJ87wFEw9kpK2GUpajEqk",
  "key12": "53Czid4RZE76AFzQWGRoQrKbKvMduUCRAqKco5TPSxAUqTuQ583poJfWwQQXq7HpwsEBRyBfYHmsWkpLcYDinEPf",
  "key13": "5oKDWK6EK7tm2o4LhLSinFKU4WHd8uen1iFBhrWiGDdzfHjFXoRsjyQ7dhk56p7YmEWx8g4yFZE66Ln6EPjPVN1g",
  "key14": "3jLxRmMBaMtRPBdhP16b8XXcSF3XamnJcwDKKGYLYRFARn6JvjCv44tY7xtJjFtR1YqTjdPNLSPLchjiiVt8Kqay",
  "key15": "2vCUYjZFTBmyGs2WuL3ibP793QY2Su6Hjhaopdm2vSoMsKugdg7QAhqEc38Gz1crz6VJxdtMKdw6HfV76uDPLku2",
  "key16": "2sroQhVV2CwLg5XWaThACpDghyR8TfJuHWNqFrRtN2XzcYq9nyJT45ZSrnJy74C5B96b9bRRRmQrBbQzRDsbyk3w",
  "key17": "2WHH6zMzn4SRMEqQdGM8QjCgyR7rxXHwXxfwk2j9fmQxbhDPuGzURokkBxUXkXtA6PqvCFgnUMBUqfXrFwWDUnGe",
  "key18": "5hrbUNNigMjJ9AYPxBcNfCevuiBT3Xq4sQ6AowxUYV6qTZMLQViygpw2ZTQLi6BLm2q3Vzk5WPQHrQUgTh3L1pGN",
  "key19": "5bdNJC4yqfmBGB4iArwe33VnJA778B6r5tiynoZUAouyc2oWRtRnQ3NzCAASWVCvX23uoCmrY1gUuFNti1Y9nsD5",
  "key20": "ndcvvQcMpKsPgvn2nESLb9AkdXz97LjAovw9XkkABNLTvMcacjH8Fu3h1vbJe9HxcHX27nMTzaR5mjc5E3AbfzU",
  "key21": "2m2VdNVajjZ6PmSvZJyNSVtzvChoEP9vig1qmfAacKjLBNBJLo8HHP43Z2vuCYrj35aH9dwbLEN1A18zPcnaMns8",
  "key22": "4hXithwNFgGD9DYRfUNnUCFypTbB3ST8RMV5pKV2sUKDibLxiABhwCs3poqjXvKv3hn6UsaZAiXxchGqHHkNczsC",
  "key23": "2r6pS4QErMC3Hfr627YUexaVipQ35Mtd5Ytht5GRpngnHLsJ9LmcCudXtRUAowryfxiKyTa6sUwnuMw5hNwoZp2W",
  "key24": "4PEarH8gcWBwdUzWN17meQn5oyUHC4KDd59iNxL7b6zyC9chDDwS8LaXSwax58MUeaw2Ms9x6a5a5vX81S87A3Dg",
  "key25": "4C1xQE7pVECWCCRCJ2HyKG8x8bJxknpP2s3b3XimkKxziDAdDQWwkampbZT2EYuqDxai3WcCJMe2X98DQ359FjHd",
  "key26": "hdJGx76G3B2RYB9qNk22QM5vKmEpCBYpbQRqDXbBC2qsi9wEyo91QS2UiFnahE5XQAkmUugpoF9aiMecmLEfQC6",
  "key27": "aGqm9Up8YZwQ7BWh5w8Mq2eS5NwhxBFiXCZzn4FkrFGu6KSpR8Fv7Peu7znSsdXfzwRxC9b5JLWkSuE2e2TMvTi",
  "key28": "1pBt3EeWiqvDaD3yfno5kch1xARKeqBhJQEij4rSjM8UgVczyTj9cxEiijrSNGkvh1zD84KKyK96wRQybeo8aW9",
  "key29": "2fkqnaKrJuAYySzqbKWmuBdvUDsT7k9gvhPnZHZCvYXYLJ859kKro9fBtqLspuknkrefyAbqER7rMSfA3FGG1Uk8",
  "key30": "2jySc632hqLMQsKdpvcPQWn8mWRfkHqe7xqUray1p3ptqie4VPr25Aou91UArNBMWB9LQRSPqBNTmtCzpWrBUhRY",
  "key31": "2YUrF7HCuGtcsdzgeZsQvXsjiN8YYP3CLuBWJfMDas2a6Uibb8StZzDCbeJ9VtztGwdQRFunxdSLpxEPBoLCwuEE",
  "key32": "5niiKqPLSjtPfEHmLaJctSNYMYh4FtKpetWYuuqNAydBRdHoxfyoD7sELK7HCXCEVxyTrYAemRKjvMJQxgXRZ4PA",
  "key33": "3Lu4t8YPdWafsL7SWqmHXgfgD2fa76MbAMQ34MYzFWiupy3EcfMSFDj5hc4Gheqp9eWLqfN6B9A9Wh4RjDs5jTNx",
  "key34": "44utgh9UtFZbEQAZWcHTjmy9FVrNqLbVvF8AYn7cjk4sRtbNHj1hDbyWCSxZzXx6917iHCrzEtV1ZSwWDBoLgFTe",
  "key35": "2ZiNJhJN95WWikQ2pRV9zX5vGBkJ987zM3A35U4KkXJXRhku3oMmUK53KZvRFTigudyshsGpq8bP7RHs3LautGbk",
  "key36": "2Est4ADNzGeJ84wrDnpirxzCBoBJbYAU5m6QCcun3PpaxZDTroNv1wyALP2Q1HHcEaCid2MW37BtNUptKvzp4xHb",
  "key37": "3Lc7SwCyCLVKApTnrzXezRwpxmedfaYwv3N9Ax5LmMFES7u77wafXYfo1GJNwNgSyKq3NFVrfUTmrxd6h2aAScgj",
  "key38": "571uMbZBJ3mt6xfzFvVwrhKRAc4dK5JP4KjP9gTJHU6SqNoFHa7wpJsRztvPRx39CTBY124D2PsSccKa24SGNPJq",
  "key39": "pH3wEYByfbdro3V8HV4fkTsyyJmiAu892MKjC1BGtzNpozd2N5bkuHbPniX79dciXStf6qAo8vZHSFE3SAWeWdd",
  "key40": "2MUJfgutQXaHmWFsNPTCayBBe7jLrfnr4Jzq4pitDLMXZuyizcYjarykzgJiPNhmoSZgZLZq7U9RxYUjm6pxDph5",
  "key41": "qQyXDwgFJ28mpBHnwQnPg5DrDw1gW4Ua2eKtRzZe2goNXbCR9e3HofxH7iViUXA3bZKcMMJLjSFaodQ3ANXorY4",
  "key42": "59QWiVrDdnphkm2MQmScekYCuEicjV5g2AfMGFDXam3Nm24XCTVEPR2xfgBLpUP1oBjL8Xe11L5G3daZ8QD1JmVe",
  "key43": "4iim3MBDHvAMjtzvQQj3tUwEx5Wk9oPtnQm7mkepdGQPfTmXu28Q3HdboDYCCJqoJ9xLVdCzJzSsvQtoNn3FazkR",
  "key44": "2TsQgsaUcavCuzYzRECNPtLZwA8XicEyf7GEa2GKG4XjTDy8RwViBP9P8GCdEyTjYVN56iwEy7KD7bmjRmdNHJ9T",
  "key45": "3J6G3wSwyP5bBEJe59rUxYUrvA5jXWncgCf3d54ygjVg1UyBVL9jiTMuShBWgSwadQG3nFYbtqKbfABTg3mgQg5T",
  "key46": "2N7xgx7GJ7YivAj1wk8R5ujkff4pqcXxxuELwiRpayvRzEKCVbs2H6FPDMbSdVZY5YC5iZhEf9QVVSE9b7Pq15qM"
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
