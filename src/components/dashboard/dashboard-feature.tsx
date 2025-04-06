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
    "3go4DHxRtB1LXdx3kSZAwb5we2JdfJSgvnZXFvTbQGr9Dso8t4u5NCze5WSJNQ4MED8jgyVaAWbjtyJigRPFnHGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yz8iXUbT9QufWpiK5E3LNe8EAYK9dXUuqqX7LQd7iNja7J8eXdjMVkYiq7MBnYkBKDM6QkbueQM1MYTkaoLMKao",
  "key1": "4T9WHp1eKAj8GHeVcft5gKfWrNGJgfmVMjnW9t73RcDeQWbZx1PzUWtc4fhHtCLDgv2zgX5eiYhpCAf7vbrqzP2f",
  "key2": "5spENgnSrpEe9uQQiHHvznE1zc2RAu4rfvam3WNG4EVg12rgnCH5Rfdf6xEnxNn7MzZsGQPouKKmFXFQ6dweE6Sv",
  "key3": "4kKRvrpCKMUEzy2vJ1LJtbR1XhmdYm3nZDqtUKos4q3i8F4fu3S5Xy38TSZhp83mnbacb3fcXzAGQH7SmRVMrQhp",
  "key4": "42bdCFW3nMqHptCLoasAuH5VeNLPAKzKevEYfio9LxXgZ9FK85f2qVdt6TGrjTQVsB156CEvJ4vK6WubFT12nidz",
  "key5": "5v6EcahegTx8UikHwLYdk9HVbo94ubDsfBgyJ57V7TtjEQJS7qHkyLp6sEEFXf1AMTxoXL2sW4sbay2VG2yGvQA3",
  "key6": "CZ5faV5CzkYcxarLNVseKLGL3MnvMswDdCeDAchKDLUYYq3hsipieMZfYoqmTuAZw5FQKATeX2Q6yh1JvmFXmEC",
  "key7": "3tAtf1fnyGysLMw663qqKCnmBRiW9njzZGr9h2mZhmH1WGUPhiNdRZVxYZqHiXiWWRMTockjgPU59KHskqRJ9hWz",
  "key8": "27URNQkCEmjkfGxvR5c9tvuLXGAvsh6GWTDzUMWABNURmysvCX7UocJFnbA7eerSJKAVU2FVHxWYktJLD6Y3C3rL",
  "key9": "561hXFXSbd1CciedBBvFYQ3w9AZ5A3eN3qP2CZCL4guhnxoDcDJ1vQjTZcHCRmPfSBQChsna7nxtiu6YkBEFsPkh",
  "key10": "2S4XJxyHxMAA5dU7AJ2MiYKmsBuumt9CRcBcMM8mqzKt5fQ814kRdanKywPYixxpgiip4wb4zjFnzoc3pEHVdFco",
  "key11": "41yfdYhuJkiZRMD5Jc2YY3Hefm6aDJ8YEtQWfy66W1HJ9GfzrBjzGiwABDX6L4GuARGxvZutyYikTyV4JfP6Mwy",
  "key12": "3JyoFzcjaxU81DX7JhPhR4xVBiKBLsFkNLv8Hn8poLeTnWehCJBse5higWu71DGrdZiz4fgKnbiumLZKUnNYbDEF",
  "key13": "2HLwcebtaKUayCcBs7mGncxu817LgMKH2dbTXxRbBzDEsnTkb5pFwiYoMfUdgnapndi4RirvdNFhi5hA41kgekvg",
  "key14": "2j6C41ERPVNa2CMeiBx8LvQNUMnNvrjMWRsew3G8C24BcpUVWr3K6zpB2kaUFwiNcYFGeQzBYHWsQhuF2XGFevcN",
  "key15": "NUHyzob7v5z9GL7vz2vy8HExKcEN68DDA4RCbRiDnzBqsHYnndEBp2aW9bojEYu7DwoJBpm4RAUAW6ehM97QNST",
  "key16": "uMwX2tJzhaJETbEQ9RFxnaVvkRYgTMjFLhiGE3v69YtLkDwuLCfsHyXe3U2vkzPunLacVLiAUfq93AJ8hGRYKuL",
  "key17": "2WTbWMoznrrPUq3krU1KzvyRTj1inKDCgcUS4ix1tpd1PucNhUuD1mEF5Cfwf3XuuTUuwjVCZC3mZXttb11oXVEL",
  "key18": "k6mkuihbbpgZY1m5VdUQtR5g5GR1uUSKmmfUUiagG3Nz4hgToaTitVXwBGz25yd89BmNcPyNBv68oF4rVMzn85m",
  "key19": "47mAuMieTNDev8F5xR63jHTJgPkmxy8vqxPvZ6H4iyBbjLqqHmU9A7sfCRFyEWSG43GWb5Jjy2UT8pa2QECiMUSK",
  "key20": "5uPJuRxKXUGap4NudHBM7pSmRkNNUzsAka1t72Y9FTz7HtzWyMyLAeAw6CWThm2cGZpM3zq7tPPdEJN7oVs4BvpB",
  "key21": "2LRWeGGR92V3SCVYCaimvKhWc1EjTnfuq7YMvqV1XBY2X6aKuisqRFtgyCQ7bFyxqc37HzWdLUv7aq7sXugdvCij",
  "key22": "2EuYNVTARg35mYpPU1r9o9EjgEockhbFzFUeXXy9aMub3chMu2FRdyByB4hNyw89TGm6G972Q3u2fpMH9qQqjsbh",
  "key23": "3ZS9cLMLJhEwysZmQBv25oWmntfMmNjkVyynPAEcP6rkqe9qEo1pyQT5WTVZF351hg41BUkAngxci8qn1nJpHHDT",
  "key24": "5FLHQaGfm2V1HysirWYZcKfLihzrSEwqkcMZZuwJz4CtzFHb1rUVCWcWt466J69GKrjhbN8X6Jo338JFkfvgT2Ki",
  "key25": "513Y5CSUQKpDRydqnreQ13yVebs8uwDJ6jaw5dgoRFrVrPusk4RUDdLBfW4RRtUBUo53jgmtQmxTAtm8Hi2YwM9b",
  "key26": "PQfxMYRhMM3EGYWU9JeAcdnjGFLWNPbKwB9ezfWWKQv7GBvxQnao3MmmvtHCeWoVVQ47sbNQE1BitZ4VERNULui",
  "key27": "5VDejL6NncZUcoBim6ZyKxTz85VLWiUc58XMD9CquRKaRaLSZer3FD1j2TExNSgMqJ4JtXeQHBMNMnFxi16MQ9Y3",
  "key28": "4bqzz6ssmQavacodNJw5tbGfB14UkLe8Vr8V3pF1XApNR92q1jSikxkDq2okf1CnmbHX4oPZ9qUcknAim7JABCiX",
  "key29": "5vDQsXhMPCnbGqLPnsfdbkB3bYZcZssxMxibFSPbAEWbwY6se9xDnUtaUbZFPT4nJq3yaPx58q9AMxYtDoMuSbqm",
  "key30": "F1S2mGB7KZ3LrfBiDabUk8XFFvz8v5XMJhZptoZfGx4xwufrZYdjQyPbh5CAvCDKmXAkXLckaBYonUxKtwTMM6Z",
  "key31": "4L8eFQum6PVmpfebqUKwzN8u2uMYUZFNJekXkA5pQmqPmu9iwLeN35HKbasVcw4iyZkNRVTmDZsTBNRK7qZVMTHR",
  "key32": "VNYDPup9HVogW8KpLyrpCmzsheWj1VjdHA4jD1mvZ4zkm4SKbxeAUZQZvPk5ZD5H7J1MDxDUDvJiLPhtc7KjoiU",
  "key33": "63TShgo3A2JWNpncRXwksCarT8u3KPqTcv4WFuMm8XMqWRD1rA4VQc2gActiHMgpFQ7g1C9Er9xTLf2EduQVSwr5",
  "key34": "57HpSM7unkKdHkusi7Qj2LGf6Ybm7NsYt8auGRyu28cs9rXRv3Nghj4UvE7sb1rwQn239MSbs5Qe4256SqGdKGTX",
  "key35": "5Tvdq8VsfWxCqpm8eCXDaJcqjbHtzrdkTr4FWmUEEughn6gWYzxY8KzT78R9YeyBz8XeBPWDDpQHp4YZArfBFTH6",
  "key36": "AsGf5sTtmMMH2frgMswGhbhoYJBxjzRftgaYQeF9yrpacgquZJeGJq75Zo83A3DGjMk78v5fdQo9fALVNMMMhy1",
  "key37": "2HwURBXzrbeF2tkYHeLsQvpPFa6Yqp8kDmag6eit7GoiTMEjVM9CNUWe2uKAZ6phhHw9X3SWJatmKoZAqTwG8xaV",
  "key38": "3w36CQTWTJqzD1CxETPAyGVoi3faun31okpdakHj9WkodRjwf3LxMQR8wCfJgTW8qrGkDdbbjr7BupvyCgtf5aXf",
  "key39": "3gK6ZgCby7vQ63ZHie4qevDEevigFrCio3RZikbCFYH8KMuGRHEVyZWy7J4D4UkUzcWq9ZZvf2SBcv2AHra5Mjxr",
  "key40": "336WTix66DoASD4Hj8p3gntb1re2RVKAFe5s4KhwtCzA2y7GKoLXsSuS7k5r2ca6rLLzWXa8d7gAE3G9XQ8RPHcf"
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
