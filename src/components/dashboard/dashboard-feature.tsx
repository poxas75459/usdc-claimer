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
    "23aDY9R2akqKKGhgvfkJKscjVA1rNgL2gZ5aSDVPkFut2h6vj6fE4iHqGfbwd16YErwrePCent9hxA6nVUoiENhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YicipzN31UVaagHnwtbyCn5Rahd1KzGW2BQJ4AEX3FJ3dbV4py3uQNTEr4LHxnunp79ZuqpkG2oekmnuUvfYQxb",
  "key1": "2Hq7UYr3rGyPzz3ZdKePReKtgXPQfpFZ3PSmqpWshpsanu4LB7Wj7KYqaFcmG48qPNxGUU7BHPTRmqeV23jDLW38",
  "key2": "5qrvpgnrZqJJJHSNRndrpgugKzTDMuPbQUdFTJb3fxTsg5BeGJn25GuTFEfZ4wXuReKPuupZTHC9EQBdK6RSmpa9",
  "key3": "B79eqmadSd7aSY3yzSJisYRWxyEAHenoMVjXrwhNtQffDGCMGuzrcJF1MgMqEdTYbnynHwN1sMsf7bxSrTz9iQv",
  "key4": "2vn3wfthsBagaT21ZSAuir7ruF3h49jJvAzgLci6z7tmDGjRp3a6kJawnnMuoKFhCUmDsAkQzEJWWJ7e4pE1mSHP",
  "key5": "2pRgrVFNpZW9yvc3dmTN4Z5YPzF6jZkQms1EQtGf3rVABC4oENrQocWJ7qJYoi8RphQ2FLiz9Tkhn8nRGnrVZBra",
  "key6": "RxMYjfrf4bFoKC4Ri2WTMzBB7aUCjsMTfr2CKLJLqeqkwM8qsW711YyddhhXmc8Gg9RfvWWg1xrNMyXN5nbTJ8Z",
  "key7": "2WuJ5FRJd3jyK63aesetrqgn6QPbekcva5nsEYREaxoL16iqsXKuvUKZf5iD8WSAd3jg8AHZEDwVuh4zRunLgPU5",
  "key8": "3mZKyeHXThigMUQvT2kd8RrG3YHkaByZhqH9qGAugV1pUuDYkFGTDTHytxgymN9c2pzTf3AfZL6Heq3FFBgCfyRP",
  "key9": "2fTmiwMHUW5LYRfFzcXnvTSTnazLUfVDbdRAX449wDMuX3w44dpixkMrVQ14CEahcbJk5RRQX4XGMqqVSDgUwdrE",
  "key10": "3Jsj5jPT1qHnA21rQo5awxbryXYnQ2ZUMGiEGrrxfMzWb8qAo2fU6Hrd3vex3nkebtq74Vxwf3Jtjj7VgwhjXyxE",
  "key11": "3S5k4ukuJiewQVkudATfsbW3zFA69MwYbeNyehE5FDjQWRmrRLBYjHWmJHpMfjsr913UNM9cj9YP7zFSxJii5TSi",
  "key12": "41PvNvxMZNQ4ogMxhnhUanQmZgiiGemGSHcEDMG5mVyfE2ZKHSSzx3434KkNfMrXVUdSttYpnjEJma6eL5ZtajTE",
  "key13": "3jfoZurRJA3VzVeQWttF2k9CHiJpKKXicqzVtHdKHQJ61zFw3hg2SgVRLisSynRfAVMVyJS4xCcoc2VdD9mgaB7M",
  "key14": "3ZHzzeiKmNnmvMd9xUNKDHT39rZB5Hxnc2aLyoajRT39iXoceAgBQZne1g5PHhobavYPbhtVEFM3zZ3Bu3CX1yvA",
  "key15": "VYvvayanQbw61mk1LUt8bc8g6RGUQ25LCx2S9HrUCxFQuyz4iwi85bCbaY1DJuJ6WUg1Tunb4zF3dxc6mtQCwy6",
  "key16": "4La7mZ1H8bmFa86ZhMbdd7Q5ANAZJsSiRo2tS5uWnj85waxDoT3aXBiE4kYo1vTa3emY8zXfLzrgM8PV4a675WvV",
  "key17": "44DY1KokwV3KqacrvWCaK6DLyCP4jePbbujEEintHL1GtJakSvCq3nrN7qQCeH6bBMA2GEzn9xW6BD7EJEz6FvCJ",
  "key18": "5mS1aEFGWmhDohkEQL7982wdSxkdNrEC1Ar5qmrJrb5k34Sr6eFTqVxLDoQqTnmSjDUJx43QBMXWcH3DhGN9eeiq",
  "key19": "561jfxZVDHscL9RUdcpurPzKExdRbRa9ZKEFA9UVnF8fjhHRQHLoSbpfQqz8ecfq7KCSHaaRvxT2Zu8Kw8E2hsBF",
  "key20": "b8hjqXKigqYW7eZ8EJ6TtroKt6De6sGPJo1GShBq7wZgjmiY8o5C7UFxfrCdE7J2pgNvi9VZ6UNgieXFCvuQGcP",
  "key21": "66FQYirkRKMiq44ftkGyCJtDbJ5JB3PfSBG6ndgecjyS1QdTiYni18mVPLeiPDQrm4swYXeqgsYLUNsS1joNTeDX",
  "key22": "2jyJWkHEfpYA3utJcGX1FshN7J8jzLZGyKPyxLhZiYLtcGWMYbhZGQaY3kN5EHBG31U2uR5ekMk2QgMYNqvJGUui",
  "key23": "4ApJHikFsphpz7beEtkbVkKVszjJSe45ozcPHatda9HDKv2sp9h3GqM7qEcgb3VdjJDHYvsK3yrLzSwzpHePbvZt",
  "key24": "35sP9zhkVRxd35xKgga16sGZk12g5TPKF6y1JvjdCt7jbQZaovNxUcSeEtZkeqrw8xjbhNgmULDWU5bQ3VUNQSvE",
  "key25": "5WUDvbUEMX9HWctmzRjz6oMrieqyKP6qqnj1e6pSrMSz1MMfysrGgvTdqrjcyK6Yf8xKBCqMpEBqFwH6G5jaKZcM",
  "key26": "35kGLYJXxHymc3thNLnX5H1ULshgo5NFNsUWbBKaS1pPZiUPSjeGjwEk6KQxMK95ULeJAVDnZJoAoaL87Sx2aVGS",
  "key27": "5DCNJugp2CVQqi527WAvGWD9vVkhzp151G3jMwKH7bji3qmUdmXhPu45yVPsUjyJu5P3HqiKDpzffG4troudT166",
  "key28": "3UtMvsZD2TqPg9XiL93GUSgRxdbz168GRnGA18daSeCmvrGi5viryFpvCVVdGxad3qQi7kVWCJ9Ktj8qtiRAV6z4",
  "key29": "4AiPM9rsdHrdajSzsg49e8d79rPTAvBT5bNVSZ4KQiiLw3LfJD1E1AQk58Rt9VcfzyctkCx84AxkT4TcygNmUDHw",
  "key30": "2AXJChQ8SAfN4C7QqpRzzmEgoktoAF3m6fBofa3yJMbMXvTvrYSrsLG1LoMtYjbNH66kGLNJoPM8ovjCmJBgMa82",
  "key31": "RiL3vfXhdpsDRFZaAC5GzHdR2qpfRpjF8siDUz2bmt4gVaEd1oYC6co9GcbpaS6yimGoo9dAXK2FLBsioDc1UjQ",
  "key32": "45pFda6Ey198TYJEJCS69gc5GxXutfWaHj2th2ecDZS7tuyScdEk7JnuWVX92CMEzYUt2wfT7dyA8UBKmnwYfbJH",
  "key33": "3bJ848KHACCWowsz7sNw82RqMQSrp9TiwjSbL7gAEgDB1oawNCq6LrnXPWYu2yyu5ArMK33Dx4tt6WQZR3y7sLjJ",
  "key34": "4ahiHUuRFcqMTzKqXpucjKKjtwPkVzF75KJFx3wZvz9Z478KpwtVQNsAHPDkR3ddiRHuWKNJMacJD8YazbjtcyPp",
  "key35": "WEUDXorCt4H3uV94FjL5JTqukhkQ887UAYfNkP9yk3bSeqH1mgG5hGojhP2yKTyer7qcp43NBmeHz1gPY6DWfJ8",
  "key36": "2H64zAqGqkGbufexVkewJGRQng3bKyVTnPB7rXe9CEpcWcLN5YyUGBhAZHXNzoX17GcrZVa9gWTD3yBsxpj5yKus",
  "key37": "38RYWDVvHiQ9FXojjGHLJNbtvQhiMDS2cQQB18uUjLRhLdWd5cDMZ2hjSxKr9YRbXkSf4qb8ZxnNxeJCeypsfn6Z",
  "key38": "63ukCbWo7sZinDJvzjrr2kXSoiGmgkw8qBTjcJ5WQSDHDqHUhKNrhLhZU42eabA2946yyVwHfyZCnukQM6tNUuZe",
  "key39": "5GEsKpVmhoEdFv6PGZN7G9Lz8YZCqtfDE7K2zoW2WmyVZ1kmg4G22u7t6tRQck6WvV2PbpJUMfXJYKzRSgmRYBgC",
  "key40": "2DAoQGHYmbcuzNPU5Khgqy9t6QuYm46DdLvwQi6QwHd4dtRYKkrijJ81dz2M9KF8JqJznvcyudSAuiQ9cVkSMjGo",
  "key41": "5sMLQDdkhbDuiwDkgtLNHy1oSruVdCzEAR3RgTcnLoJ6pP9R7W9NKfnbRUZzYyp6dTqaDxxSDcG9HgyB1sbn93St",
  "key42": "5JYZaDUbFtsM9eQhfAtJMvLWGb5sK9BnFnfarihUVNQeCwqRGoFh8R9kzc7BMqSnvGXkrg3zXsqNJZHEmMrBgW84",
  "key43": "29pArrMa72iHoYuyjQpNjBzNWJi1Lb9AeUhHAHxVmupbWCrQSTevLnXCTyug3RoiuDQXHsrUcGCLqrwGYxMoMyh4",
  "key44": "D8fWft8GBeNVV2Eou5sQoFHaMwuMQnZGcYRtx7GqJ9DmUcjGnC3Q9LSPZqiEXdgrowJNTEj1tjZpQ2TdFKGeHnP",
  "key45": "3Y1ZMRPagyBUTmzFYfS7PQyV6mNzT8tdvpXJdB9qXP6x88eW9HpBGtkyf3dvRyoyp9xkqrsru9maekLzuGcAu1QA",
  "key46": "5UsayJbD1ZpXDRpAgz49PvWX5D5esvn7D4naLrcrcCz3BcCovhY6tjdbCQ6G2kLTWPSuuc94aDDhUo8RzZB6qjSc",
  "key47": "51CX2ZfMDTuD4HvHegG4kD9EyKfybuNyUt17xUAqxrTnHc8iusMssoC744Tn2XYyyRD5aqm3SGoWDosdUuG4JST5"
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
