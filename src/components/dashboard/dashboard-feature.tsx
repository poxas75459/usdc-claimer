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
    "3eV1eNtZuEgSpgNpMt2z5gU73wfP7YnYscxXbVzQdDAdRjppy3nAo5RcauBxaTrZ2h1eSiJi31sRCtuGbjkE1zWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JWHkSdH9SRRq1B2x87GaLF1v5Zxve79jDJABdMDvxMeKZZ1wGtdQeHTVVHZhFad9hVe9nZGiZ9zjxxLfnaQo1Lc",
  "key1": "5WkLd93SpgigGNCGN8BabhagjZFZBGbmUxqvqABZTw1k5LQQm7Fpry2jmdSB6T6UgU3sFSttZQ7xePVZWDCVkfwi",
  "key2": "57YhSRWAjJ5rYFZMitw8nc2mVCWTkMNKCKX7JH3H78najdSueWNMLwPBRRWnsqvaGYRXQ9CJjnfwFxCK3DEvhsPm",
  "key3": "2iNDH7yuhBXbskzJiiqn7xrYdoZq7MQa3qw2U1cjAC4V4oRZpV5WHxaR2RXcs32MTaEdpuhTWjNeu5DNLp1iFNgx",
  "key4": "58xNPtnTsSdvAywmkJ9B9w4ixmh1UYo9P8iWFG5e9i9DTTVCzG9ya6dQCP5bbsNZDGUgPNQKeC8H7sBzmdGJpGKV",
  "key5": "55Xcxqz58p4jPJzkbS3YfARMkerYrVqLY4Qyh9Rcz4VFbuuwLjuo1a4d8tP4QHFQ7cXXSTSaQKLq8B3AapPa59Ei",
  "key6": "5XmeixdHByDfEscQdJaMsUN3Q3c9H99iSAG7YNy36D78KDkfzkzmkWBgpvQNzZSuS9gtTaHScbdBHQLTFGXhsmxm",
  "key7": "3CppWyV9XhkNGZayGcJWYD3zpyXXeNyzA3jzneEyZ7SiUo2XzbTBq4b5D1wjmNjDoK1W5ddnFY3BsggPWuNqJVsM",
  "key8": "5H4qAyu4eAtoT1iuWsLJENeMEWpQvgB6jWgXbjt35QrVkGng3H1gNwSyXDBkMSMbBhtTPwtUcPvs63uZAzx3Tnd5",
  "key9": "3G3aeWYS7yTLoT7KkAGT6pX46GCbAXtCvcPdYCBz2RqzfhhydA2yQRAEGHEQkmpNDBXygswovTAkfTzN7NF2zY8",
  "key10": "3qzotGgftdn8LWRnGhmiBouaVpPBr3eHfRSoZGeSowe3ugMngZt8zoDr2Nmg4x2TqguVX7VLKWhG68PYS6pbLB3q",
  "key11": "4qtqYTm1231Rt4og8DkrFdZ9NwJrRZxGp11EcSkxQ6oqLBwHS6pfcZpQtLHEYe1g4e2AaajnaTTM8TtMJN6TQHnU",
  "key12": "3fxVRSqa3aX5RipsFnVZKYKaQ87oo9tGT8bLYjJ9uQybYPDmd24JMBBbvBpGJDtfn7m61Nay4vjGz5immryb8VLs",
  "key13": "5QN8yAZdtCEa1dMhWX2ZGv2Y84d9jTqNvfnpuBP7PyaAWDGme2ctLiS5ZF3ynbGodRZwHY8fiCFbTt96ZJC1PZWJ",
  "key14": "5gfe4Comi3NZGPr4JhcnZ1vQjemzpwpu7tDNZ14aZWredZKYMd7Fz3Uc7D37n451pQT3FYFZugL3SR5PgPKXUvCB",
  "key15": "5r2YaXNCA4HyUfGiC9NcvGG7R99MT1Hs4udAdF4buu9ru8JMwZ2QnWd54usrJVsvLkdNM5m4f5qZ6GPUSiwhAL1h",
  "key16": "3aMQvkp2nAVn9N6cgka9Mb56UZwt6rPDg2MWq8WAmSZUJXRd3FZ1PfEJdb795EmpvHN1RwSddzBNUVd5b3DhakL",
  "key17": "4yHoceZJyvwwJZAsFWNZb6wDpFCwMsqipiGB6VStxGWRMe8q8mbo3AaGkAkowzHCsccsi9BbiTS1kj4sptnff2iG",
  "key18": "5KpZ2VYB1SwdYReHsABrcBLQj2EgroNsMtwG7UuvtASNfjQ9V5DCnUmDusHQj4VQdpDiCh5FpvRtehoQQK9uZNrS",
  "key19": "tAsQAtVRTGvaHxunY5PAD9n4bk2Na4AQHLFeVNZdfUdTMqw2ubR5oDxVSKaqgNvV4dz63vsVnVEGy9F31yQwKu4",
  "key20": "63rtmhgjj9csbCnnzFaJqScYyroHQqYtFkpkQ9BG9YegtzNsBQa8umfmbzjj88S36KqrtxNpwrfXfbmhwSQppW7a",
  "key21": "sssfKfaoaaMrp6jMSdvb8QEA8H24LnDqCU919WBauBovEwWV7UNmQdXtJjFGqFQXm8k5ueEeAGnvNgF3pos2GNo",
  "key22": "4UMWMhXR36ZSGDFxgmwD4GMb5B8SAsuqTRPVuhUbMYRvzT3E4dWzWJxnsjjTvkk4ahFWhPEyx4C5B7159pYwieby",
  "key23": "3SSjtM182ZhKew7bkUBjMb7niQTUBeGwihB3ihYuLz6PmBxd2dq5MpHFtBWGhR1tbp88Tmp4uWdCqGcUMYqYQ3bU",
  "key24": "5ui3tJ4P5RVxrvggdurM3vcEAEJCyz5Bb4xBTs9Y8ZFRs97WZeohwC398kq3F1KCvovDHdeGhqXAZF5n863wy1wg",
  "key25": "48pSSaFEtazMzqaWCyx49rSduopaRjzpS144g4V6VDRaX7QyWZV72SHq5eQyYKyfbEwnJ4qHdXoukrwxwzzYYC3S",
  "key26": "5r7Tie4tMd9XVdDeWfdySVsCJt8opgNKz4Fy1XhhhRFHutgoL3SMXUY5zkGuF7wyiMPUbhdL5AGLQQRwCVabKfa8",
  "key27": "4YotwwjAwzoiAD7iCieqSNpVmiDrWsxqrbPjFtrWb4vEdGgk6fe7dPNn2KquuLNE5ueqPDtE9TrXVa7tKMo8VcTx",
  "key28": "3ur5BWvo5n9iEK2Xv11Fss62VLJP13n6nanA2zcng2oxbgVqKmwMU7fhyPy1f35uVcH3MbCuueMN3scy1AHaZedm",
  "key29": "dGsa9RaGKhHTw2HsWPzvJw9557T64pVmgtfA24EvLKqe8opW4SNBvby6hBfTUaKbwq2rchfd267XJ1NMwZBokQw",
  "key30": "5RE9qvAYULXVSUdcCmSaw6kUHx9vQyvorCtXioNLUMLb4JwjomaqQy9Wi7qWYs5xeekLSG2bSU5r16fYHkYVE3wV",
  "key31": "2SJJg1mGm3tZ8XYfWLGMvh1i48qPN2B8qEDQXVRP6zimkzSv64Q13Ttm8uSBWSLfQPebHStGWNfJvQYPRKMJAKPR",
  "key32": "3SuUHUtH4heYkUxX1njTJe7hYDQNr1RdkwRz4xYggqV5JeB3Dj1c3Fkbm9zSCuKTagMGRXgqerkAgwpM3Mk7iBYo",
  "key33": "5cM2p566qmgpTScUKyrduC7Mtnnpchv3MNHJQfsvaNSGZSXHU9PhMDE1QCV6uwazFuSuEkTmZa6cA1QQVJajyvoS",
  "key34": "3BeTkvQt3pAg542Z9q5YezrARdTRZr3CAdpnZtJuK4XLowA2jWpDcfHsHpPVPsKFD61hPojbf3A5cmSAaFt72zkP",
  "key35": "51MR1WKPxRpp2AFTmRxM3EcPBworMNTVk8Fq5JMoUK6zyZmUfC9r2vbGsGoWdew6vhaj51w85UDx4SnJXqzVaVaf",
  "key36": "5trH22SEkjfwRGqraTiAf4Hd3dfcdDd4rFJU2Ng3xBv5g3wzHVu3DH77aFiX67nQEevpiMquRg89SvvxJRk7YEPH",
  "key37": "5NErYq5WYHg2KbSCBk14KKTfWx4hy6DNQDz76hu15NGJPGQuYoLjoiRkc98ty19Y2LYdANcXrnqa1Gs1wt4c3twT",
  "key38": "5FAv7cgmGbyTB59fPYEumzwj29sQhx376gzH2bpLqV7YRiMPEgbAfaBDPaMU2u8F9TmFFQjHS7xgJRV3d4aTjtez",
  "key39": "5mGE2Ss9cuo7N2oeFU5c9BgDLysDR3QLcCdB9TALyTW7BGaajFv4iygd4SeCtNzyKoLxJQvKbibS1SQJued1EQN",
  "key40": "4pTaWSP4H5gn3Mmo5riuBUhcS46KA5Zkko9x9dBHC4wh6KxpgE62odk1GB3RECfEpsk9V48tK8YuKX1mDggr5r4i",
  "key41": "HRCdwzWnNfnaFWBJne8GFy3kJsmhA5QgLComi8ifABwhEb9fSQcUk6AUhv2B4zdqtD45NgQeE9U4Q9cMDJaRtUG",
  "key42": "4MP75MZ9HWuqhP1XH7MRoG18k2Caf1iEkR5eDxZXZTbCzUKWas3Q9ZHk5pALqbMbXKRNLT1k5fw5NoiDppA7wTtV",
  "key43": "5kqsYcAhzzU14GikGALoNKAwSXuigfU7mtqTFSiECLRsUB3zGEZ9XDM1utUPpT5vgZo5mtrsZcm4UabLsH56rjjF",
  "key44": "2fJAehApAozQAZpTWnicsMpD3U5TBSyKcMTjo8YjqNUmRADvgWjyuGsMKqmKsVH61hnDKiMGoAwi1sDwbw1pQftD",
  "key45": "5tT7UFmxds7McYX8uuCVw5pKmHMSbs2JJKg3Gq9UyMrU9ugXGsPMxJK13DeSQUv8qUFYvFmLBxZcMH1xPuakBEKz",
  "key46": "CJcRuLniEEBHTrUeGu8Wmuetdm8xDUeJCEM1Kt6aFCDoamwL1HjuvjmgNZBwfewvpHVoJXbBbKvuPgFaBVtrLkk",
  "key47": "3YzfSL96ZoXw1b2t8uDdDG73qxYVGZvGZZ8Rvf4riipFmN2oK9xA7sDpDTEkUCKgMKaEiyqWrpoA5PYUvzubYfNq"
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
