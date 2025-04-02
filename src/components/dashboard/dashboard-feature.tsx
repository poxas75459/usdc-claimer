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
    "37C5MENc5i8ggamjr5i1kh1NLw23kvdkUqHEX7bm87TAJV4tXeNraD6nkMuFGg6Tn7hmueNGkiX6oyGdCWEDwnJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65weCKzRNKKfLKp5rsgXD8UPfsNYLsJaY7WvmSvXq1p82MXVVU1gtWduvYfu452raFUZ7CbzCAVgbsT4tAdU1qxs",
  "key1": "3SaQ6yaHSWk24GtR52mWEDxaEErS8ruhNhiRmkV2Y4pFjW4w1ZPveZbssixjTWLzqf2obMXuMBCqrfEyPMxcwkDc",
  "key2": "2zSC9DsjygjySHg54mRgi9pcvMJEYZKtevFYCn14sRxJfj3K9HWs4wnnoUw53jMPiJYLzDTfx12MCSpueaAppwrY",
  "key3": "49N4bNLt59LMwugY8KMvninbzijQqRh4vM48uYGwa5WdGo5qgyHkbXUz1ATC7Avybene9EkjkbVMHex2DSsnoEwe",
  "key4": "jxTQv4rshCy6fHznf132SEceLo3jNSyaNScKXvbihqpo87tn9LwuS9z245wFpQgHAv5Qdxsu8MgQXebPhfhh6qQ",
  "key5": "5LGVKg78L9ntzFHHYkLzFSzz1virdGiRxNGeU5XjEJ9DhYnNAG2WxnRY8LaasixT9hD5zUYdwq9eogJuHA6GuStQ",
  "key6": "5U6QDcbj1htm2i7NeC3AuC9mcRZhcDiZP6AzSaDVoK7ShLgRcHHtbVRhTGWeaLah8MPmyzvTkv361aKVeuZYkB7v",
  "key7": "389F3FNtCtNicsd7HauTVEJXi33kfeZTbGLheD8PvSwoXmSuJ7qY5nE6Nf1n5Q8qPtPDzZmdQfKphp77BZDfjgBk",
  "key8": "3ZXk8aYYkGDYTt9u2zVwpXvFkYRi9yb1oXeiaRS44WFbE7L6sr8KwkoMVVBHDKB5vfd6GNFjVM4oVAaSCKTSazx1",
  "key9": "2JBisegpet7omH2hij1o1vHsBvuqr1hk2HCnSrNWFfvKL1NWDAy7FCB3TdcWiuERxHG6sxWmQBQbSB6VkRFXAVsQ",
  "key10": "47UuxuLx54REhkteJXur6PJhoNfUzoWZPbA2CRiXAmHq6WopdJBs9cZH6gLEt3YnWCwXA7QhfNPncFKecGQKBT8L",
  "key11": "gLGzXMFgBagTyLgrnQTWuV5m3cT4QfMZ79iV4KVWWXHp6CYBQyPFoycf5HjmTe8dyHhMvtFFWFKED8PZLeQB1Wb",
  "key12": "4cYWwixhWnvpwjYUXAydVvY7RHScMH3gYTtayHwKxQgya4naJGuuC1Ji6DWrQM8tMDcZja1V7Swt1B59xrHLFh2S",
  "key13": "kCMcaoYbivKhegdYQ6iM2yMS7nHwHyAfQApZaQM3wPxczrUSeNWFqHqxuW4E4pp6netfKzyfNgznc3EPA5NRfBx",
  "key14": "4cqDFK9noYQn65YnLCZ6SpU1uKEG9NsbjaC5zuLRwz1Xv4UMwY8rajTKGE2PSGB2UthS8Ve9LcXDPKtKKHG7jH4T",
  "key15": "3MAycPoyovZQrbbZYuS6Gbsndy1oERVoahc5T3tMVVBn5yg47wscmRi1FPYbtGV1jNoxPquMs9ZDrY8bzeJtzzyS",
  "key16": "3hmkWbGn4nJErhh7SSKqTmYqFH2D8GhigferVJbrnQozxw45fWjvJ3fFPne95zFYPhnrUWYpFuLXjWsnpoVPY4ah",
  "key17": "5QVwm8VHpjp7jGEdBfsvra7wW4VWabz4npRsCRmXothSK1QdZY6DZyEng2nbToMR5QDKK9bwzcF1cNoS2m4Re7fj",
  "key18": "3J22Z56NL1oVL1KMVyRbrAjhxuB69mcaTDEdM8ZRgZ2tcjKbfNB8PCFGtH43y2PpRPHD2emNA414PcxZhum1DeHb",
  "key19": "2RP7JtQ1wNyqxgeiuXQWERQ6SXtwuVRsGejWtGNw3nXUv39STdm2FvH8ZHKH3QjUhq4eMR15bMpLarK9xD858xex",
  "key20": "3QPY1WoCKUTaRuY1XJ5QaKjySWQeyxoB1stDRXrJLYSiLwz9NNFWqmyWd1pRdMnQAfW93P2RdSYYVNMNrcfqjQBQ",
  "key21": "TjGpJb34u1zvVe3N6XwFQpC7e2TPtq9GABju92uriFkQL3Qm7FHfLL14nuBNjtC7F49sxSYbZtdtXPBWk3hLFp5",
  "key22": "v639jWDmx2fTFWX8vpnZFyET5MwSkGhDebRicHSmZwuy6Fe3S9hykb1c3XoimwuW9yrBobq6bPAaLpp36GL6Duj",
  "key23": "5VepPamiTfpThzVBK9LnNDqaHmkJbeXZ2LzwfG9XAR53ESxF1MxMyu2MXW38GAcxWFifqh75pvC4Sdg59XFQEVLr",
  "key24": "4A6d37qKezd3Jqba8A26MFXmJwgrrXwq2Rn6mkGJU3DA9LAbY4DzzXj2UcHYhrPrfikcYBwsajbsrJy3fj2z1Zjx",
  "key25": "4bAPQBdR5DZn6n1eVp1itj42QPnhh5UYPFXSvpKgW79XUovfXn6DXGqZ5ds4yY2AYQGhRa7xrBqYeEgRaJjGhnjW",
  "key26": "4ktNzRNtYA2zG96KQ15cBSR3KRStbeAUAXRMhSWKcc55GGqdpDbQNPZndZgfbSCVMNZhV3yzJKVFb7ee5ags27kk",
  "key27": "5s6ZxiX1A9SyYXEnwrpZXHjpoanjEFPwPKwPABMu3ehkEEWNYaj9AyEkM1EKvBfeMd6u4Ut2LxWpCfxzzRfXncGt",
  "key28": "55iowJJLRmtE4ZowfkzMvbeFegtpWuFXygTHK2P88LPaGkynHnfobVVquouF6ukBAL9bjtzVC8QdrYnDivpSv1UA",
  "key29": "3YEMsKakC9aoKYdqRwAkmbLTWxZN7qtzbpCZyiW6YARto3ALxGoiSW4bL8Jhh29yw8kBw5JHp1qW4u2brm6oz8cB",
  "key30": "2pmsxevruby97NydpmDPcFZ8Y58ypFQFe5y5cCfPKnHyeHphWb5Zkaou9euZmJKi8MC7Zont1Eks2ZMfCvKwXzqn",
  "key31": "3N9WyxnThNPqiKp5mKtmYYynappwmsF5jNWaf3ttEKHK3S9Yqw4a9gFtaoHzePpi7i5SRowmeEswyLfhKRAHqzuT",
  "key32": "4SVDyqiPLgLScHE1QdmMisEHPp1D35oYSHc5neZyeeGPDcx4YhoVMEeWPk5afV9c3wMDEZBWnqnNLm88SRqifjyK",
  "key33": "5yxJaud5x6i6J3JJnJiSyddJHF4SfR3ZcTu8yKfKUzmgwAv4DJx8UqKKySz4uXL9MaabdFsrSRWcLTBvkiRLfb92",
  "key34": "5EV73DpLTem9wvn1EU5BHCCwrfrc3HaNZsny6QgXtQbtXG8MEDcFLX9z28S5nAzKPkh8jdP1v5Qx8jRSLvf5tZHD",
  "key35": "6717CeKTeQnDo8RQ3Z5By8MbKiao69UdYF1B5duk37tZNm9rv5Mnmth3kc7QyvYnu9YFLxdV9tNWowRSc5H1J8Rr",
  "key36": "25GPZQWQP8K5EoLKUrWbcLqxFzGfGYnDtJEoebGAkxSgjX9U76eQA6ADc62KHD9FzwD5EThiZjxiNCj2c6yAnX4c",
  "key37": "ybAbmvgt7JvNk69Afi9yz5UpTrNXHmjGrSJ7uP2h3Vs6P7d51am848H7ywpjGPhKnaC6pMK7zfACwHzpRuidRMF",
  "key38": "2Lwuqys18i4d2fm76YzV9YPZ1XWsUnwBz2rmS4momprkyebTKojiEcwdYKAWxsFi27huErbVjPHmGcq4JsacGkoU",
  "key39": "2iRaA8QGqf7D3LSUafE6sdZM9nLdgK7h2Nw4mER286HfKfqMrS6sT1DdBe71QxqUS5T3FkUidXhKmciozTVWe8qq",
  "key40": "63RgQi4E1294EXxUTMH6YM8b755fmTvEGPVXX2ZtseB4CBUpDCLYcenE5KG2tYZSoGiNNzFpGeZZC14rAHJRB8nX"
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
