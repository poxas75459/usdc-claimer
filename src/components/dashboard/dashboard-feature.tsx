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
    "5MNvDxJBKfsvD9CMXgkiKFJfXCMy65zUppM91cLxnxan5guqx52CmaFYC6D5FsckEkaM3oneXp5V37Qt25rJREaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21zusjy8xYFhAqMTA1WxaBP6TSFKQmjbMhgJgtLA3ZyHMhsibqYmRwB3VTfuxCtsbNjTGLYUz2eXBN1Fx5LmJwSf",
  "key1": "2qvBctZ7zQgDRUk2so2hWdYaiKM7PRswt279verCPLsm9h26irkkh7Gy7Wi1xJH8xAqH18Ednn1cnspqB6YURfc3",
  "key2": "A18WbWkPQa13QRSeoM5gLB1aYv58X1Dz2HduEb3wWFQ6Baq32CaFjZ71fwS2Y4yhn1iaszYFw2JXJAihGJEbGh6",
  "key3": "4tY6q6X4zeHyoVgdSchDn4s4dcNxRgrg1mXWy2hbfdPesg7cM9YZSvmB2ihzxCpXSVuoHMZgYVWXMbGut1gJ3YRv",
  "key4": "3DZibiLszuXYw6UaqjtUyXuSvDGXo3Qa3rJKA5z4CiqFUeDAv3cjUBvA5ya3HLv9MWq1PHmz2qCcsBY48egxUc1z",
  "key5": "2riKkFPz47SnYRw2MTLQsRzXEBD2UiBcHbSEKzbzzqzMPUfQoL4yU4NSsAjjSwKFKmfMhAsxFeC29ZZeHjzZN2MC",
  "key6": "57QWandFiGwg7uXpSTV54nnCESeTCka8ENky2kAiWEHxTsRz5aDiWpg4tFgGPcKXcCtbfaaJfeeYNLMvDrmV8nCr",
  "key7": "MQp82mbPxFiY889FAPFn6iVWveafbMywzUNKjetmZDSg9FZEMa613wtwY1mAKGUeyQmjgmubCgHpFTDVVTAuHBC",
  "key8": "3y7zMQ1dJyKi47TLAjUQMUVJPYTTZZyDwnVT1qjRxpaj8NmP7KgXkP3MQEa4mhaKyj8de2gN88RoJyVV7DNqL5L9",
  "key9": "4deocy5MtD4QCRVqrDSJgBDm1NFAMVDsrriHNy6qbK75nMv75r9p6JdukSuHkD99ZzxzdA65dnQqJaBqZkXNbNyA",
  "key10": "34bfSVyH9JLKg3Y7fp5VKytxDZat35YYiqy4ceydnuWBY8Pk8SQCPizZpVCnNQCFiGQfPxLP5BoE8fJS4Kj71Y5h",
  "key11": "3VrmSet6iYwSq8p5nNkjHKnYEKQVnZccKD84tmd8ybXv8JwQ9JATmyAnxX4pA7p8SRnCoa1fN4kY7kUJCaqVkkoR",
  "key12": "4M5592gfNautH1yPAM3EE3A2rTuQnfQDwT37E1N5b1TW87J65Ju7XUMYy6JiLxpuE7ACBW5XrnPhWLEUmAQ5eCD9",
  "key13": "4JxxMPHi6Ko8E2zqvA8npUGyESJg42rthKU39WhehaACQUYNPAdedap59mJasaERePacyvvXtVQ73nJvi51XAKfQ",
  "key14": "2YZc9bzWjY2Br94aYJk2ZrA3kEvx8TvLCn2SgX9gpeVr85WLj2PMqj77zxdwJG42EcDGBi1k6Ry7qtZQzzzhNLaQ",
  "key15": "QCMZBeigWy6YovL6CwoVdGZmvXB5CD5K2uKJpkinAN3ft7q6g4gu4SawD16mcYZBCAqXL3YVFZcRvML6TeAdkNA",
  "key16": "2QkQ7AHm1TqQthXwWU4VnuV7BGQ8RBBjdZt636r1fDeH6PMCXTpMQD59gcxYYPXjCgf9EqGaJHXEKjxwoZ8otLHx",
  "key17": "4YqtoHwPh4r5ovyBESqxQ5H6Vz7GAMtWyfeRgh2rPALn7wdbSXqek3LnsK91vtTAWG2X9EQEsdWoS1miZDc4FT9u",
  "key18": "N6g5kmKTnVSmzQHCKAnXiTDYoZLjYFi3cA2gJuuM78Rdgd4Qs4iABQjv4yAfJ6EnFxSmdDtU3d6w6qTu3SNVG2c",
  "key19": "64JfdT8UqMpeemV8AtPCuiJFdoNasFHRyAdQXxgtT36hqEnqvN1LRG8FSjV1jruh9UXaf3RErHAqEbq4XgAkN49Q",
  "key20": "28cbEL3tdx1s7j5nWKA9uew1bE9MxFW2AHBajtErguD5Be6FY6ohZJurTpYxPJpTx3Kt8ivoRuX4o9ffUSgiGt8B",
  "key21": "65GzY1dPhtGukmQv9siX6GTbV2PKh7zeun91gWcVkmFECthiFsbcapovhDQ6FYPfedHnsTi6xb3E5D68r4T22muz",
  "key22": "5dLFw4bEmtSQE4pqdqpxv1fXxo9MLzVzjuYFDCa54Z2KwpX5W5Yk1Wsp3eHbvkw7RwhCFWV71tpXHYxwAdLQ12xz",
  "key23": "5QvhVzVGBtAzAK2H8YKe4RqpP111BJkPpwayeFYgTCJjhVgyT8EmyNLPjgd3mvzgt2CzCAvbmxbM7n3Gub2z67Pt",
  "key24": "2QnQNLf3fdMwDNCvzWBNZyUraUxDq377726iCpvTxLEMqTUuE9aRh1HT3DTxGgi47Bz9f8a3PhfHDTuF5ivXqKte",
  "key25": "67M4N8geXyNqaBxH1oiAwmyKLqmt1XG8X394pKNQQnx8NttuTMswhyrVWMhyNGcVCyK19Aeq9LrfKU4BesG5LJ1E",
  "key26": "3SkChRsHKTJ69YLMVyeCoBeKDbihg2DUD23xVubcVoW5RFpmniaE5ixnMtrvMF94YjDJ4WyZxSQAte635gb8w2hd",
  "key27": "29KTipF66rq9NwKD5tHyruykvMab1sn1wujcnZ2eKBTkMzdxC3uZ4v1qzFc3yYgX56SgXNruwfikm2aX6ko7WDs2",
  "key28": "4rRXfZPyLFGKfr5LXiwjqSkhwJbVTYqjZk1UBvYXnB3trPndRJyw2dh2Ju2QLu7uV8kPojZMyjFnFwKcW36y7Ne9",
  "key29": "3tgucsbpFKRCFhVhx9HjxoiGCbcLsQfvzMmDKJQMnxpsvMZWTHpK2BaPfPQkeSv5EcZdGi2zyuXeSKmewRjbHHwS",
  "key30": "4cj4NUpNYW7c6ppdBqaJYoEjKhojN74aaTx87ckgD2AgLeibNaVER6A9CvnDMLSGcUQSYvtCPcZDySGubYdTLJe9",
  "key31": "2VWvkQAwko3Z578LVcJXATAZcT84kZjUf3Q1cbJVTJF9UKDy6pJLFpCHe56qQatJdqD1mqeL6iZnMhJBfqJs5ZrG",
  "key32": "4HRBfQ8zUjRERwWCeLx9KMCZC3fPemnPpzu2KFr138Gq12KwJBqRddoUuQCi6ZjAPHUL5mz3vPEnjtAE7mMCYDBK",
  "key33": "2maTvWU9ffpfGkuE14eZNhVnHcjQSpMR96bSb3Asz3WdkvgL49QordeD5B5Fq8NE3hYUCP53RtFR4tasGhJAu5me",
  "key34": "2J3YefSijwJvx5gUtNL9jbsi37CjGCCPwtkPGVfhJGKBkp4GK78VveF48ZjHMnAvBtY4QwqopLCKftrKmssbZLTE",
  "key35": "51kSLfxvs3ZGqBcispNg8Qrkou4AugPDaTgRSvEz43gt7GyS6HL8DKwUT3ovDAfK5JeCmdreWmnKh5jCkdo4dnVH",
  "key36": "2Vo9gSo7aDgis2vUgomiAPDuZ99C24HNyoMjs8K1uEhGkq83FQQ7zToiCeN6a7dR9hbG5EuXDoZbDjdZRPQTUqmB",
  "key37": "5HBXG9C7G5A7FgjoXn1X5npByjWJyCazut35DUfQVhAacKm14P1foaN7PGWSa2h8axBmKTuofYY5SK6DESnhoFsx",
  "key38": "2Wjtwj491LexXsQVkLu2eEXjSQk24qqcicMRY1nTryLzpVa4fS4p7MhXXRVdUWEQoK8hosvhAk13Sn8cLrzske1a",
  "key39": "44kywhu5gxXfJ3jTv1qFmPLi9u8NpXeVAzxNjtQ1uUYS7ZgdqL3w9X5mH3RUm132uaqUQivdAQLuwV4cDXzVXLRU",
  "key40": "2k35w8LQW5NRCemYEK8d29Phj9m3kToBhLUUsqEUUzrujJugBwW4T83Sy26C151fcnkeszV2zJKmkT4zkFHNjUAd",
  "key41": "24LiMWx3DPEuSAb1irhQRBygshoWkHtirSBke8xEEEtCSKFrkB1MDbFhqFH1VTuijBvqkRPfFVA2skCjAugv3ggc",
  "key42": "3AfyN3TDn6WmGf3wSzBCLqGtcb8pAivbFxeycmnzQcVuL8fC8s5UJSfxBfZatkEFMMkBmcbdZvpiWQySFvCv9GJ2",
  "key43": "5H5GqkC8AxTSxLbgX6PUQM9Bsw1ZFsY4jF5Zy2zE3GhzVb5Y4ePgVKMfevDo6RqsdJWhZ9GGRUMVR3xfFwUM4FyF",
  "key44": "X8ZjAep8ecRWEsToqo9QMoqjp8dbLFbKQUGDGKgE4Vt74cSSFBvHVfjXtWyGns7QJmDapQueaoHPGNZ8pfzhjDy",
  "key45": "5SNPgdSiqH2nR5LaEvswNtzQ7Tbhc7gh89r46d5y74K9ELxVfQ8bEWrd9WVy3KG8xy6MMocMWzMP5KxNqvrtaGbr",
  "key46": "67TeZKbR2MogJ8aot1bXfg9WKdz6QiGVwnW8cE14nWq2bQwEMD9PcnrggoMBZqwUXGwKqhe1x2A9e3pbPpTseUjK",
  "key47": "55Uqu9Vx6kNgy877fiVuiWrrnqELEaF8RvNiTg5vu2WZovFE41KL7bfAe9PhkmYQQnzCqwwYZf6n6CBNRBYw8L52",
  "key48": "4xDPwAQvkHHp4mJUQprjPoqHTyeBXRZMjCvZsp37P1NrRgX8LUBpwpGNBhFnn6AyJ862Q2MGedSvairad5fsgMqG",
  "key49": "5ekgfYC2ULVPTS8yytMHT6aCGmy7pxEiLoebrYCeCTkj7dfrHsGwDfX8HYd4y1X8pVm93dSfWDwsEiiS1rzsepjM"
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
