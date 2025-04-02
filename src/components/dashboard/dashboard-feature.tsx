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
    "2U8GHomJu9SXzKKGXZkfi6EYSuKxyhvGZgTEXJHTwzaigms2mRV3pVnASwoF7CzdDZzU4RVCh3AWMx2NRUR2QYBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n4h4dy9KfSvVoac9TDsLLhCEsy7eyvXHoRb5AHDYn9QYCqWo1L8bqix95PRpzbkfHgREMaJRSSXoGDyZobZnovZ",
  "key1": "3SNMN287DFrXs17KCguuEFKxWKg3JDjgNNZnqL5SrsFkznQ3APXEKzhbtfRRwz7R1d47hdA2pN1MBn4tgnUrHCY5",
  "key2": "PJAx5ZyTsLKE2sXkZLzKGqigUpd2SfiW23iLerKNufrKwFeoS9F8JyR4FLs3mkwXzGxd2SfDvAmmyuApBzR3aau",
  "key3": "2DvXv3bREBREBKQZWZYuc7zQkCqTC7ewn25JaauxXtHJ4XytRvT8ihftiXg2FTxKEs6jXd6TSRJCwGXNZJFmXqrj",
  "key4": "2t3eecv6PBn6LvfxR5J4psFpp26Xh6HscTxUsZGKDTADCeVDgVw9eZxwyu1Wu4wpnoqptwGMXzdx9GoUPx9dNPoB",
  "key5": "5Y5taEnyjvZ1cJfde5YEweGtEEn3t3kQ8d8orJeEDswnqVMf23REJ4hYwiWfVWLZZMb3ME5cFF1ZtKciFWWymujY",
  "key6": "4K8nyoXS1LZssJhtv3Tyggb4A9VWAHV7Qid3NS1hEYBUDtj15KhzeBNtfr3gwRJzVt1RnBip2Z8T1muM8aibsJLo",
  "key7": "5ique3C1U51M3GtjRBdDj2y3C2eMeKUkxgjJMNJc7ztU9LJHB7hCXYwvzizKze2iNjosGqRRLfVjTSbkZy18yM3G",
  "key8": "wwaxEpEBqiZDaEJ9c5rXTSYFZaiNfPSvKMaRVYhHJJUm2f5mx3YK8nG19t47aX33hgdqhiZxRjoWGdZHKKKBavd",
  "key9": "2n77ancoQrPXithLXAcmfZVCEDeidbMKyd88vW4si1qhvFLmgbVjvyWsjXHcNEicipXxFbqi2UQcnjd8poKQViY2",
  "key10": "4HfS8RGx8db444vE9aERymjUSQiUVJnfHa144xp2nHNrB1qgF1ofYLBWoyo4o3Ef48MAG5f9naaBQmSmBUVM13a9",
  "key11": "xebuXkNDbWMukhEyyWPSuccR96vwjx8kmk5YY4dt781rtDfrsTMsgqQFSbb8uytSeJjUb5skGdqSrrEZApbJYfw",
  "key12": "2A8VTHkUkumMjMZMxcJbePUTXS6H5CLeWq1wZ2hcCDrvs6JyzUnUu7fR7cMoCQByxYY53SCEFQRUBiov8LYxpJo7",
  "key13": "1KQpDu7Ut5NpAxAojFbv5L6rq7e1TLYvrXWeKHWfkDsRSWbffpg2Sborarh8TnpCqHEJG73xbWPKwdyGXTVnZUx",
  "key14": "4vxALZNo9mmn2pkVYc6r5zBfjJdQ4VAnqti9CubVA1h7hB5uW7RPTNTd1a2b2EuZ4AaSjkCWfEMRd496ee4ayFWe",
  "key15": "Q1tKwNvCKasTri9HHTaFAURobpYWRTcAVo1qHCvjYnqaoAzczroagEgG5VKb66A9yFDjXdvoV77S9zxEteLAdxt",
  "key16": "5488pPEjNGusu6VfyrJMiDZcQnPPMziBiKvYhXJNYfegybdnMUZK8ighEooQyvhCJyAgJcnW7B7i8P6HTPyNMcaX",
  "key17": "L5KFQ85z6hytFVNJyoUE8gpJG2sFB76eFShvdU4VNX9bWhVFGZHhNCBVSiB8ASKdasA65eaxc76m6snUYdskKar",
  "key18": "5gJLeoA3ATNJq75BPouPLyiMQFJzz2gbAnZzfuUDQpHeyaChdQGQ5q8yD4APmLji2pkecgewgvc3vfSUgFStgSbb",
  "key19": "mteFkUWgFqRsgppTBmM3yHJ5GgpQCBgT8QmQkroWTxU4KiYUUcortqknztxt35NeoHyg4bWrSUMfMkP5LQFcuPi",
  "key20": "5pbxF2WetjzyGuxn3a33MAj2f1mQiozDHrUuqCiXJZ82U3xHmP6R1ZVKULzFNB7owwx55n1FmhLU9w4TR7nGNRX6",
  "key21": "3SMuctzL9UMoNxF8s3deyBMY3EiU1mC7uTQ28Ec2gLVkfofvgyiDBx4aHqEvd2HEpvAxsD5EKftoMbewvZ5y8nrB",
  "key22": "DkkRMGDxd4vqRUN5kZr9rrtph3kamPgmZnmG7BJz6GysfdZBhLFEsfBs2cwrx5GSQoeGswiPw932QeAizP48vJt",
  "key23": "45Pce6w4NCfE6Sc3U7LgqshEafQaAL7uoykGnrH3LqwQQ5q3fBTqZ8ueRvEdrrzPpGwW6EMZKsMTfubc6Hm5gYyb",
  "key24": "5KM2bG1CkpNMB9vY4DJkppecjHCCBAvk1Pm4HWkZ3uiKYvBPtHXaDBBKMndJWaDkvDNy61oRz9GdVWLoa1RX1Lx1",
  "key25": "4swNdMPE4ZPbxKvyU7gyv7AXreoMaKU8fsNPKfWL19omLSVU8osoLCzeeeYqReeFmy4eUwc3g1X4MTU7f7F1yzJo",
  "key26": "23GaboESMBu8tZnFGysbhc7bpVYDEncNqmH4bhZHoUJcbTSVGjNvbjqTh7dQdwyJYMMQD7PXqmhWPfoNPK727v7A",
  "key27": "52o36AzKEyfWC23cW7wj4sc8ajNef47XpNtE6V14Q4FbwH4CaZiaXzRpWcjL53JDNSxpU3kg12PZQJW7BHMkBeZZ",
  "key28": "eAuG3j1gqaNtCfhfq5Q6m2XvZcxGfR13DyX8jd3ikAexKkk4Z1UsYV2JsTp1ChJvx8GnyVkA7dQ9GJrYw1ddUbk",
  "key29": "WooPntPCK1ZDCv1W4SB8J5SjA8jLJtViXtADRWnBHKGuEbkKafKdsfYQVaRPFBSco8K1kZaJi9doLAyHnuLWguf",
  "key30": "3jH3cyzBTeE5bhwQdhuCUFQs7UxmPYqdfSMW9WWynu6pJAmUwsEhYiTrinF5UsvgBTgg3Xj71PbuWomVQCDKWPya",
  "key31": "5fBuZHZDjtbUjxDRzUN1gEwiVwC7da4UjMDNr4ypWzcjvuQ8cACggDro9coUvtkzb5S7Vb2jagAXpuK6EdPUovjw",
  "key32": "4K6ZY6e1QvFihMJc5VaYURj4syVT5rxdJYFwZ1N6acLpb3MWsQNjc7qWm2cRy7q9Y83rkNfmFtKq53iwZNJAgEyr",
  "key33": "2uRFLoGRiqhaX39UESkyrPNyr5sGaen9zKJgD8zSmHPggSiB9w7bgMoHFEokMnhdB6HnAviG86zqt2SWg8rbrBsq",
  "key34": "2JhDKceaxyhjZEhTrW18N1a65Doh9sHoJmUoMA5vHEA9YNeedn6Yjc9UgE3TRUAdMGDU8wFfLj3r81XqhG4QohC2",
  "key35": "49rnsKpwKL55tB17pHP7t3A1yDA8hrjEwqDMsk2E6HBnAwsooGzHizcjpEWGKtXK2EN7ZDU9VhX8Eurf67n49sa4",
  "key36": "3kirnPhnC6VuBLCSkL3qrt9Yt8NbB8qs71Ma5XJGxGkXDGM9fm12Uu8cGb8QFpE6hZAqDazmfUBD5kmwVvh2C5Xj",
  "key37": "31NgzBUgyPyKmmLzk6pfwGoWCcngppqxV8P4bRZgpKXjzbg58eSNc9peQat77ntczfMdyjwEbm39iqqVcbHAUAqU",
  "key38": "5DeLAq2ErHDsRodoqp3jxiNvV85U6EmzXoEH7DUfySwKtqtAe84ahgmH5AbSWBANVncUKUsqryt4Gy1JP7g9nLtG",
  "key39": "9Qb8mthHZBbHmvAxdZJS5PkSR1pvZPKfFaubSyS8DX5PhT8DqXC48MsFw6B3C14CN1x8E2WMKjxSaLjN58Jt9BU",
  "key40": "62dzPbtCZEYrVBdFPsLt9ub11q9quTsaTK7pPFsYPc8gakcVyW1GZ3rRab7FDmh3XPyKvTxyVhVjmQNvKomNaZRg",
  "key41": "4DoN2YfcBchzRoeT7RygcxmD9khh34hmsck6rGtQzmxP6dDSef6qLWnxeL6nhquU2GP9jDS6fb5q7h55kfLasYou",
  "key42": "2U1eYe8v5969oJN2SNM1oMiaQuzJZp5ifnKgZvGS7ZuBiNVU2mWNVDkKJNCdXTXQGgFKUxhRTUyT1beY2jzrM7eD",
  "key43": "2CNkyCzWDNPUfqtZXZwVS8KnCBg4nV72b1rME5Wkc3sELQeKA6UYfDtPhz31MZQtbnixrggBsfBNQjxJqfW1j2Sa",
  "key44": "5t6ZBfY7hKH2DLY3szKkpb7sixnhS6G1idCA4CCarRDjiEM4Ym5RHE1ruqvkKPDBLGzwQMr11Q1U7x8Tifh42JDp",
  "key45": "5mvveLhJDr6DDcpvsB266ZhfJhD1EkTFU1Hze5ULftVpoWkmhp7VXYj1DaXDaqs4qKX3tvregqSCbdNHuribBb4H",
  "key46": "N8CW1P4dXVi4qEiXDRnZngu7zQRsdbBCf7MeGzCmyZvcXws857Q6yHUdJiPt4qKULXct2QuQVDYqpR3EHq5Dp1f",
  "key47": "5K2P8vkwZ1WVwDryu2X2re7xo5pZ51RNenSEDoUwj9yZBVeCSo3mpgEFGBZnhppwuWTFiz4kPz2ZbEX3F4L4T13k",
  "key48": "K6ARxzfE9MRBUuGrfifudu8h7HQJ8f1V8hsW3CvFkeC9TXnjRvwpks3bJzQSpzmb4Vh3ocYUXhpfRGPJFtN49Pi",
  "key49": "jv97xyP2dLgkzd6Um848NkBdh9YpDjHwDDsjGEZiJZCPCY42kcs4nVMrWsEUbmrVZARz8AknE9AZRwmERmg5NaE"
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
