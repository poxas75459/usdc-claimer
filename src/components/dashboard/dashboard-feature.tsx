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
    "4EGWSyCRzSPWn9AJxvRLZ4u8H2hqyG6DSi4oaFpFHUFoaFuMJSt5pb1dqXr9LDCEPPcMuCuuWZNg8fDLeguBojsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gy78wKmbXkWPSt4XqgrRCpAKanQDFr3QrYC4qRFkNNt8of2et9PLGsdQc7A9SqDjNxfKMiTAUCSQX1vsPHmk2sD",
  "key1": "vCKwYxwEjUEWgAEfvTTGLNGSMNVLbqnyD9fNkNVwXpGbgn4FW5xPBZkLBwdR7idqoseaerAgpaNPLaLRMMfR6oC",
  "key2": "2PMrz2sb7Y4eHrUbEKdfxREyujiiK8DKT54Cete7Ru5wMvYk4Vn64adtz2WyraJmCH35pqYM9YFTkGaTY7sgseZZ",
  "key3": "VcdTGECTVC5CTLbS4jpqvxBnCpQQGKjVhEHrVMLTikujBEa3HHTJEC9tqLssQDGKRUHfksWwZssyFCiDychHppW",
  "key4": "4eE3CAZCVc3Q7iTj7EABkTb2akGhjm98VWDecEzJiJiD7E5J7D1hfxmC4BUhaWWEJ92ybjtJenb1hih3bKqWojtZ",
  "key5": "xVTWAJ3BqvjgfvW5KJZFYBw1ZpLPgkcP68CjfSJH1Dzi2crvmMN8n5gmCEyMtLkmZ5JadgztKLcG5WK3Mmqecxv",
  "key6": "27sUC9GkCRLv1zXuZYQAbahpGQyoG1AK1xWXbZdgWrJwQdhWiumCapaqkfNgEuWs1WH6cCNjp9TaedXWT8eWsGPp",
  "key7": "XS5XTuH1DMXtzvSyyP9DuyyrSqdUKLJc2jLbN4on9i6pEepExvaHmw8oNoy8rexjLYXqV3uS6yBCgdDfaVf4Mo9",
  "key8": "2rSviPVqgDhhuveQ1vdD5PerqqLdSM8uJdfEfSf2pGo5guTrfZ1D5BmPToTF2cYUoz8fKq4nEwgsXE6gAGVqjhPA",
  "key9": "4KKpyqPLVVjuCjM9seEjBSU8vRq2Bz2ykbT8HfEZAobTx1ST4KVLqYL1qWte22huDFSen3RyMz9NSjrK3joDULxf",
  "key10": "3pJKnCWr36WbDZqv24xsvyUTjZAGJNmmLZGtDzmZAhDwv7KUTNGdngVmD8KQ1ZwiKrxqvyEDLmpHT2Hcr9QLyQPp",
  "key11": "HJwKe1TH5izHrYMUxdW7rnZ3PkDPxVpMEGKvYiFh5rMjA8wPaRLSrCjfP83fJUGh2DPNXyGNQZn4utj6yob5Cew",
  "key12": "3Dz6g8dCePhbuxTxvHhLBUVCRX6xtbvxwL11MWFyEme2S96Pvt6sL3q2D8ZKMyneRnBGe4YAp2DdixbDtVfZydZZ",
  "key13": "4cGuFiuHFH4HRAqZnZfG3w97eZWZy1udC31vmGsRzRzupkWUQm41x1ZwZw53Npbmb7PwmRiLHGoB7vhfrfFEcZzU",
  "key14": "5nAF9fdatU2RB8ZVqCosdzV34YfXNb7JndFNUjGvFs9dfqGQvLArJEtrUvLShqoQzUHbZKu2SvV1YG65BtbW7pCv",
  "key15": "59cZcZhNvePU4yv9o961NcJs9uGsygrv34j4N8D66iApe8Uuybc3E2uviMnrVaBa2Cs8dT95rCK66BaeHLjvMMNY",
  "key16": "5JxR1C1TsfMq2SnLX1WTkBhFQnAL6e7z9A1jAguhQFAKNPa33n39fHqgB8swmUmBH8hpno8dTmLjD6BLMLWdiADV",
  "key17": "2Ax1JpUH5RAku72Gt7VnvUFwMdwmNp9VAvp4kr6t2FerBJs112B99u2bRnsSN7Q7zoCVEfLU3mxxiJB1P2stXz91",
  "key18": "3keq3jN5Gmq6CUTafzq7rTjdCRzMiGJYd12QY4CZ7AsSvu3g8Q3c6xqeGTm6oH1hQh5E8iV4ckTZRU9PzhGDKAhr",
  "key19": "ncwWjkqT7XLkSVqvbd8ybrhNKPPyBziq6BsAhpFtdcFUUHaNaDcZQx1CVGpPBb4H8psCniGQTkseQRzt3sA5Ndc",
  "key20": "2SyVCfMhhAQHDfUwkMymV24ETdS2D4L6ii7jXKTLdDVr5H4HK5JjPVfk5xZDzDZGPGwNirN4nt3gaLjGQVUoUrX",
  "key21": "2An1urMFkbYua1P2VNNxs4REWSUjuwsccfNPaKBcp2A6mbPZ41KUWaqjGpQcm6gHqh9RN4E8EpxrJBCeQ1kqGbHw",
  "key22": "5dzfM537AqbkJw4VtjWHTVPqTVEGJ4EU7kXHyHvbUveoguRpjPNfp4QKtvt2vzEPFv3Yzb5c9jFwxtvLvgXq9AGd",
  "key23": "pvxEofVAn277zVGahwr8V1mJTFh7GjLSVdqPrAysb3GYEAmTEgrePzoyzf97SQPeYjGmjUFqLiwvm5BssL3eBRJ",
  "key24": "4WLwBRPCJhbueQsnowrReNZaqQU2z75yBMMBHvRmJveX2a1LyvKhgE82tW92w7SyogSczyWRu56FTFkcsgdNLkCV",
  "key25": "tmZPnyzskJX6VPFFhsFMiJKxCdCV8c6qooQLVGw9uZvnB6LsRUz1zXR2y1TecAbcsUo73VZBCf29qWKsdDCCzXV",
  "key26": "5RjbWQPSTVMCTYr6XfQEH6dYxApdRQxzh23sVY2cTVTYAMh5tYGmAo5mLtRs2MPjtWuFyb7qidR7PBm32va75XVE",
  "key27": "5DpccctUdEk5rZoLeGMRLnsnpoLdB7gHwoBDuCSDcetXkMteUt4PCnndQYQw85bZbthFXDubZyGQqgdbwk4cFasq",
  "key28": "5KgPVavjQokxEpcgr65phWMahKuLBZMYZDv55KwqHoJs7nPqxcbJhxTZovzA7PN7sXRkCekaUfugEXUTtmzjuSg6",
  "key29": "54PtmhfHMEN5yaqUC3ddvLphakLmZuNiKYwQFLKxDCXRs7Q1VxNvTVypm8qfhCE3ARDGtcoYgf5af4aRn21yezLn",
  "key30": "3KHXxUzGftUR96ee9Vs6MGh2QrTE8KvwXmGxWHxDJnt2kg6npHCGsNjdqgZQmnuH7ND2YKzsrjT8Z4AMLbuGqZgJ",
  "key31": "PHP2Pb1Vk6SieiZMP88bFp1Lgzqi9g7yZ6WDz7nNedmAaDi5JssAFAenGr6nxkvs8cTXaDiPZwvmJB8xQrG5eeF",
  "key32": "4SgiKVe8qeRaHVC41Ga61VPXEkWnPfa5it4ckbPLQS6zKAdQiJiWZrwXw7g8Vxdm3f35ZHkRELuLaQcyJCtgyQqR",
  "key33": "Gv3N89ANpqvnuJaqAPcfz6GyfrniU4A8FwimAmQardkYe7qYnNGh216Ei5qLar7Mjoe17bGgukHcumti31s6DVa",
  "key34": "3GK2cgfVAnPi5cwT1DoCPaRMm3MzkakfNzQktKNRvpXVCZz4mimoDYP2SXxPBhgD4dYdgJZkzXdC658jqtBkdzaE",
  "key35": "NLa2pk1YDwY3LdpxZ4saNKuyAXUvKTgfBq4zURAVscDxdJ3ZpxNwTb8b6THanVDdkpcn4FsyL58KPotB74RM5cn",
  "key36": "4ioMcCTG28MZZ5prCK6RKY1cyWvSnjdAgJUJdSr6AspTodYXhutBkY3D6b4z8Pd8ByjnjYXqX1Y5dACMm3Yk4HZ6",
  "key37": "3rqwWJuo3S3FkhgQ2unFev9sHwJrmTjt2bKtTvFwPQHUjUU2RW7iQJyaDZ45wzh3g9BcXJmNL1vVJ2XRR8rKGHKh",
  "key38": "5B79MYnKxkQt9QcXCgxwWUmRf1e7Jof8zZtTXue88QAY1Z6CFceZzxNCjQVCZPoyAtLD3d3nSnbWd4jhcVf54BEE",
  "key39": "42YrqJo8QgTu9yJdyhX9i93JEVhMxwjoazKSJ9NUvxmgoXEY3oQAMtCWStuS1zWzTTUbG1FuCVCUnT7oHVXEmFZ3",
  "key40": "3E51XjuxmTtZJXTeAeGSw4LMkP2S3Wmr11igA6QxyuQTeMdjELkMDqKqPS4dT3T76DnMeAHxJwCZ6YuUh7yRCoK8",
  "key41": "53v8ZqCYCM7u8Cwtsn49bTGFpmAcerYmdrQNELwNb7b2jKGUteQjeRGVw3JWL4v2YPLAzNwvGw1sV4mBDk1BUA4B",
  "key42": "yNsRqH9ELf2upkYhR58Nfc9MNdA3HLoZbsrYhxFSo4SrFK9p9zzkfpYZ2TftXYF1CVwLzc73YmmhbUJ6RZRmV79"
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
