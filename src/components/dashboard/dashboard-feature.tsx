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
    "aMRpqo2atzNosqrJ1pq7YNnrZcyHc7mXzRoqcFLwrryx6yYro2HJAknvDNVSRMN3X24or7xF5pwKk38gbCEcRoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dZGQP9NZzWYKcPP6TRoH6aemw63a8dX6P9qnBHFS3cpFYNHZummVWEG1Z9aaBxNMzeUVQyNGgGQkvKeaDicfWvz",
  "key1": "2Nh2LZa1z6AYBraq4zUa2u5v91ZbWYaJiigR9QRfWvWgmpx2NdukRF6nnHRSzXByCd8MVpcaeSKKMFCdYqz8hVWs",
  "key2": "5WypxUAWb2oANrsuWvUzXEzdQQ81ZXJ1Ex3k2Q91Xw79gZMHM27g4LNRnyXm9p9H3vUXimFG5HmcHcuwpJZSMdLp",
  "key3": "58yKXJr6kn9rc9GBhTSfn56WSDMxoJYyRQ3W2hzk7iGJfYh2657zqSgeVuUUUCsfLaMCUXa18M2qLxePcn2agKFx",
  "key4": "3wugbKKFCN569znWkDutyNUyzKiPZF5SPiPVT5HHdFTo5yy9dZSE5p5e4s8yEsrYWhBULoSe4oHMZKEzaKTnJJGY",
  "key5": "3edJHBVjA2gSTTFxMtriTxUxe3iAQALcpa1BS131YiQpaGU8STsveXd41xPe9T5t4SD56fMsVHGwRMPayAUXfxRC",
  "key6": "NaiiXU6gqWA3Vq6pDMgnVRuPFv2V5s7zyF1bZwk5aYQtUXbRH87gveeNZShnDaSKCSPxSyNWJQiTPjKsxFqeKVC",
  "key7": "4P9mbvmFpKEGnGuCeDmXhEjiNA3gw8MYLVkvRcBp4UTEA3K4tv6akeCu59Uh5SxLyVcoYMjNNQt5uMfXUDrBe4Ty",
  "key8": "3zgr2Yz63cYRCvkUTuajTJpsgZNsKwHYGdMUmLQ9aXyJyQBgPTm1d5trSaYFqmqvajRS12zc6CmJo6vnSkcVD2B",
  "key9": "5LLcmD6F2Ksu55QQGpLjayBWWiig2HYDCJTDp5UZkMxJ1dsj2xPNtbzDtazky4UsWo2tkmJsxdE4WeSS9EoarBu4",
  "key10": "ztoCFykdhF2J8GDwuSc7gjLhXqwpS9ckzqESFcJvhKZSf2r6oSYJfF6J511rk7FVaRMduETLcZqQ65c1L1LQbNc",
  "key11": "5DFgLYYMbiyMVdAtKMzUK9CBuVxn8yE4YsuKY7DewroT9zYADoKYTQkSwYtgxkSsZZe3MHPMhPEocxbuMd4Xqcxg",
  "key12": "2X3LTXCdBFqgBynwN9HuRFjpd1KDpabLQAWrgrS2FtqAhRznYv8Eeh94AiRnVNZq2GRrM3PSAwi2HaPhNCfiNyuY",
  "key13": "2pGJ5MFmvGMyy9hQ93Z3cuWZxYksPeBrHFKA2FqQEt3GkvqyaJ85kkEMbVReHzsYWeVv3GtWKHFbBxCwJjUSF9CY",
  "key14": "TmVuUzC1zrfXpc7mMqZHW9L7wXoc96QjYFS67RXGmkDKUbLgpRZJk2o6S32oa3aiD5dnZrdaYqJgehkazTgwS72",
  "key15": "goeWuQidyBM8c1mjzH7rBmDdjNoyYtPPT1Yr1nVSzpvhvzEr6KGnEoAH3z16T9mUo6UxpiHxfTJusCMbu75hiLg",
  "key16": "5AcjE6RT9yVFveSarm9RWx3cv9XKGeV4MmGUTyXf62FWD48PM8CVD4e2xM4ASU5vSNC3TYnjtrxEi199ceMJFM9o",
  "key17": "3eTMAMBKmVq9YhSXY2Rx7px1v5kGMj8XgZLWMUj3LSGTPMQhswUYgxJN7Kktmx88CC81fLDrsQJUuiMoQTRmeV8N",
  "key18": "5zCYaq4yxtkvxt3CGuKjQCQQ46Ai3dQNZ5C9CkQ9hnNJvuxyRPULW4Jsszs1TsNfeNt4W25nCK7Wcqrtt667XGHT",
  "key19": "3WketmdnSJmBj3g6hYpfLMgG7AtX7SQAsiLTub4yBseHeGW4TUKs79GjJWNqQX9PHARs4wsdU3KPL8kUzXcGR9vh",
  "key20": "3Ldi8skTM145h4dMUoPQB3JQ5LrSJepxXhC8uTBMf3kLKdLmkT7VsFHGr9cc55p7r9Aomco6B63UjV3q9uBiJaaP",
  "key21": "5v6T69dL1Jg8egcpNgGfsBEbnuBKjZQ76vg5ugS4d8AJ9hKbP1KXKoihttqyztyHkfEYA2MaurZXP8VGVm9VVpEy",
  "key22": "2jJxqB4ggn6x7wUsKTcxwe35sVry1EFanEuR5T3wNLvRx1HAK5H4WnJorfCr7jReNGv6hrhdRxz1wRzPp4Rhr8zj",
  "key23": "363x4w44TczLv7JJGwipaWT2DvGukyDAt2C9pM8EKdQJCcBzAHhcvxG2VEhprqHne8hkY6ydNk61Ak69AHPqsB22",
  "key24": "4Y7FYva4HEKwEQQddEadGnZTmmxKVp7jjR2xY7FT9QzxzU7CtC6adqgzPmqQmujWE7ZaKbTPjrRTxFKFVeAJgLxk",
  "key25": "4CjApfpop1ZdYXb94bJknmbaA197BPaa2WDkZHz2Btat4QdeWmvfdGBNjA2ynZKu9w9pRdDea24nexCy8LDr8sQJ",
  "key26": "5A1d8ZnGyUwoyHKc2u3wnBtYs7v6FBQB21UNM6FHyB4tue5uVzegznfoVUomZhfjGVFvUULqaBrwhmaMbpDNugbz",
  "key27": "31v3r9yXEzwr8pxVjcNZ3KtLdteX2Hrdz3YSzPTT5zikFJtkAyggsejzmbrLXYXuGhrgobjUWF81pKRaAXAi3SAM",
  "key28": "2775CjFsUBxkMUc3VYyJGYFMU6qmTNAEwr4djVUYDKTVm1hEwRvJpcor22HvW3B7xr6sX97Eijy5GaZPdapQ4ZQj",
  "key29": "41A6fPnTzeYPXRC2froxcgE3SMS1tLahJiT7gnuGU1PNTaC5ooZoqYtiTJxLpkyVoN4zXgDrcv7e38YYd17MQL2M",
  "key30": "5pS5qrCb1DE4ERML99AdUWSEGPP3dw1ozFrdEdvYVCPvPcfPGkLXFKBvFycTiYJZtVbTiJ9hhi6aiKyju84B8x2t",
  "key31": "bV7WMvLimswYbPed2ESn7LX9WyWR1716RQXYp9YWMumF4USXzxQ5TMp4Q2baabKEjcyTAKvig8Hns79SKR4xGY1",
  "key32": "3prxqcu6SZZKYEWWyXtWyVXDd1Rv7eUqmQvLFZABwGK6bxLfbeDePMfS2kiqz7awQ7Fawgm9XUzHVute32tyy6FX",
  "key33": "2CEq7ejndBfHCb8nVciEU8XtKv4eKY7SEdVChTBZheH91kUJfQ3Pbm7RVwHNKuiHTUfkUVuhcauX9ecsBX4Jy63a",
  "key34": "4No2ZXtPT9TnDEKZZv5FimTsLsjWDkyBe1PeEB4TYczurP3LUFAzack6iHWGnppcYuZpsdmLWh26HFtQ8SJdxAxw",
  "key35": "436GizozEnx4zMP8U42r7u8GU1geZvZVnTRwWaFxmVaCtHEab1XUMnWbGimbHD4HFZULCeWSe4Z4nPvGGgEcW3JD",
  "key36": "5QcBrbRHjiCdWSZvF2d7ayTkfcBXZ41VKuQCSDT5H8KExe1hoZopxZSeqHpRgTud4onTkxb3vgD5LwJGcSWWpynb",
  "key37": "3U7iajebEBycrC9AtkPg4a5n7PmPQ4v4sBF9YkB4YmFdPFoZVgpX69Rz8TnXRoVizhTmRqkEvjqrG5nJDzpjoWZF",
  "key38": "2MaZjAeJ2cZ2yVxStZWdLXTFHwfPHBufU7kqGzXw7Et398jP2ZAGxwzkJEQsUeg7ZdKCP7MwLLpfSrXgEtrgTjbr",
  "key39": "4CXhEA4GYLDtBs2XF2Rze3VHiA9TtwTZnchBXx7tQhwzqWU9gxSqHNg9tjYrfnM2oxV7n46MzXacg7D5z6SpMJkJ",
  "key40": "2ZNR347Lrsc6GLftV7jzmrQPg81r6TsXVPUaqVmgoaobheXXwqBL8MCiKsknz5mua2e3REdgekn1aoyR72pAvj8F",
  "key41": "3uDPJaq9UX4AT2macMyYPHcwvpece3KZQrpENuNi59sUwDTJYM2HWnXxWtGnFiyAmz1PgG43J8oVXt9hyN2hM3CP",
  "key42": "UdGChYm5n9LHyG3CxC6FHxaDJrEiq1PDNQTfftiV88p3PMX3jrxmDcmjxoyv3KhN1awgHXiroqHHfTcETkzCHBT",
  "key43": "45SsG5nuP8X8LDTZ1tJm25vkD8DhvbAdWUha1z5Kua1zixvbJeSrfmNvX5AUX55Mj2K5pzLmWA2wQ6aWH64LcZph",
  "key44": "4kuWwNRJFDSGXzLwubn845ZUk7JxHW5ej52EUu7Siixym33BqTj3S46R6K5jwxjKbaNrZsXqWMEy2CPEVXVdNXGz",
  "key45": "2KYZ7EUR9U5MEg9evTzvh7qaRVQR6iiPkTiKYuy1dmuZF8y8MFti5C544Mr1iFp4jdMxfgs2KUFwJ2n8akaLEczs",
  "key46": "3uCn6Lkav2pvQTnP4b8Q5sXmJ5w85Fn9EmjGmsvXmfWBPqmVaELLbq1c5t7G5qV8SAoRoAzEkmn7URb71qgDCXf2",
  "key47": "vPpjNJdqrghTyoQbsywwaM5c1JsouR9vgcteLcVyVDEFmbuYM9hcyMZhDfsKE5uV1sVrx8WkFaikAJuoSQMhmN8",
  "key48": "3JeH9qM8JzV8ejDeauAU1Cp4qpoPbqGmmbfJ17MV2mkZRd8oAv3XHey7Dx9zSPbvPLFkpaTdvQKNv6F6gDbd2XAM"
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
