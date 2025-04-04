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
    "2wsWWvimmYd57NyNQgrTo5Gf2iKnWXQ5QiU5L546uCjqfK5kJP8FLMco56ZMozDmEnBZ5uELLLBqzxmtN9baDgeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v66p7exoZ1A8hLUfE75QZUgEUcUmHGrJrR2zSf7oR6XqfiVNmFB9ebWhXLB4jyVwuBvET8SxAV1CGYyQkmviy7t",
  "key1": "w5dLuGoM43QK3DMnDLXynwb1jJw5s9hycw88iWcw5k3httQiwd4153A412GyW3UQBosVNTvcpHKKkwgAqz2LZjL",
  "key2": "3AhbSa3hKzWk1XqBHqQabTX5kX6n2buZfnLtqmigksAAncjrwghBB9ruH7BcPoa6Dmrpchojn2pqTCBJHbqhobdc",
  "key3": "3egGshh5BJwkWQh2rid5LAEqi9dkGtfA5egcWBaAhYqfjFbp5TuZserfv48wxDR2Du8ybCKckAkgGuJvi7byk9Wj",
  "key4": "VBAH8SkX1ioLHQjkC9XCtT12UKwpy2a6oXZeXAgj6ofMp3uQsSYqKxv7nKZyXD34HKbzcYXJL18h6WzMDX5TeQS",
  "key5": "2iYvvpmonGpjHEg3eDHkaRSZH49M6EF5aw3AxXsvWx3rt5pRD6s7yoktTD9gPbZKZtjrnBYfatbNc7upcUtL6nfP",
  "key6": "67VtqX2V24KBTw2TYWkUXneNwpJ6Bsu7CsNHZLGxvss1jrEHSLDYoXVCVQrhgtSJDEhFccdPVnCHBBqTigLheF7m",
  "key7": "4Fo5q3efaCPfWS7EAyGoXa4mEfGch227WWXDQaemppmvBCabqfrNTz6kUkSgg658cP17HxJxTZVSMwK5wEekQ3A3",
  "key8": "23eyspu7pHeTNkZS9znCSjiHTaosqDHzVBU2HbYHoQ4pABBMpkDBcv9TMNRAjp3Fmi2VSBNw6eaZuhSnsVa1DY2T",
  "key9": "121gVx6UmB7P5jBdyes59RiLbpdjvDahYnc3c67gjGJhkxL68yjt1GiedX5dovX4M2MnU7sdVXU8hc6RKbCSecCL",
  "key10": "3CXNq8VjDvBxSymLDFwZZUnruzQAnoUDfUY8uYPFtcSU8q8VpHkzHKTkXvEgteVCuhkEqWNDtrnkxjvN9FnxDG2W",
  "key11": "8MFPw5UkEPkCKLxKiif58s1swyoV5C7ew9hqoLvw9huuZ4uFGBYSeop4udsYND52a1uQHNBYzsjAeQ7a33f4W8r",
  "key12": "59UgSshQSkZm7ZVSR2SjfP3zKfC9SYLSatMD7t3qgiUH8AwvSbE91VjKVER7R4vXXZoHjmgJj3vzeUyNyEEMtqh6",
  "key13": "4uHujLqjGngxnyiCpFspv5kiSCVB3KybULNK3iraqE7siAmcXeBkPrcLT6ADYd5nPyi7oMLjNwCbnbKbMB7wBjs6",
  "key14": "3ZHLueq8aXSzAGNNGmqp5TAk2y8UieTfJYj3xMqso48DUd9UqfFBqepN7cwJh4LzXPHMnNsJVjVGJBbvTvjQEUX2",
  "key15": "1K5iCYwcSysAngZbgzC2cfmTQfPNDASCTumLHfHUzFcvd7Uanw8ueZzA4FLSbNqNsPffoLHJGX1jxoKMXT5CrHF",
  "key16": "42DpSw2GAYgn7ereFeAtnS4ejzFjS8K6Xqwrim6eKcoHDHuUemm39fthK4Ve2cw7m18qi4z5EmEDn3Ty41K17hbz",
  "key17": "2j45dVrsanqxTJZawsETsuGujkCzjXYahsHZ1GoDaxkARhB32TLYTEs2XPsa2VBF3Z1cUaDgvekfdb3zjoQLST1X",
  "key18": "4eyXAs4xZXkY5PsP3ZTAJX5gkrNCMVwkbdVGf2GNBgpCeoHuyhw4vc2ZPy783wFvf8M6PDhkr6zmp4t4NhfRQXKR",
  "key19": "atBDXgwa7KtbFVc55VEufyTaRezLDvEfeLWGqdN3rrugib8RiihA4HMdDpoHVTC1Eiy6ghQtkar5o3eASorDKvf",
  "key20": "5rmCQPDiHcsZh76NbMc1xTGfjzUGHcqouygVNTamqLt7TPBiRk5DNWZaLGR7kBJ8FvAXsrr2xMqPePtakMh5Qu3c",
  "key21": "59ru3oxg7dRSMSVVbHqUmBRD7y5oQt83XbNSTj4PvkFbyV5EuXGuWjSMBoyUsVgK136DoM1qvCgEW9HxTLufVsa4",
  "key22": "5whuhCNuLiQaWziY6nGR35EpXN5FdkToRCh9uE9ATRc7zsXjszTFXmjUxQnGYGCdm6HjWXbCHqQxbCXabg7yPuCW",
  "key23": "R5mBFo3FvfdRqFkgZabfhZidtxv4M7wBCdnuSQNxVKe85Ex3AqjMyWmwHn4Rs81tdcVw8ZFkGQNseUpTSPvrN1s",
  "key24": "4MtxiXvVDBCVLP3KptJ7W5Z76X9VmnChx6EZRM2brhS25vv2mYN6vUpaSbsosmBomrMWctnwfcuHNaJfxVkhmRoV",
  "key25": "5Po21HrKNF7mL4smqrKvjCUHU3WamAS4aPGmEk9e9jCWKhjzJV5Cn9v52PWc4rcqjenYscQxcqmKjTXzujbUnWTX",
  "key26": "62sfJZcRhPBiKv54gAsKnZxA1wr3LCR9WuRiw185VYoPqnWUYMXhh3r4G2w4Cs5zcQYs64Syx3Zi5QUmdW43DZ8m",
  "key27": "4t9SwbKo7m4P1bvzuZWwbCma1JyCQZi3W8DbQqv13PLZ99utmsEkti6J8QY3w7V6Nsqxv2deQKjggDKmzmdhNQ1K",
  "key28": "5S3JKxVRxvvDgUuCTQfSKQnFRFgRxmLRvBv24k1AYs3ZFGusRv5Yp2ra9La4zFnySjJV2jXStHu6P7MYBT2t6qT2",
  "key29": "2cCUeXinwphVuMispXRnM5sWrhpEsvJZ3x4tUtfS714Rb3AqM6QbCkGhHHYn8ZS3niWvRr6BGkwGWCatQHz25Zct",
  "key30": "4uMmrTvtjtof7rPLqUmQKh9a9nVqchDvBsGaGZx4yJgjebxtZZcFb9LkzC65NiaTnMBsM9Fc72vwBS2WPFfufhay",
  "key31": "22GRSZgH5J6hHMawftgkpKknhn8QVgYVZshPWkPNVZdXcz8m2r8KJChWFWga8Goqx9GevRu1zZpkq6ro8Wh7tbFN",
  "key32": "3eNkemeFJH3dzHTHXyA9A6mVTuy4rq7uSZoaLEMFzhyxMh3Gw57z33qB4edWb6Uf4Pw4tJhuJQCYFdCiWEiKqDYH",
  "key33": "63SNqLF1USTiY5aUCbCzVwgH1qqKpdZmU6jUGsFzXDGpAT1zSWo55y1terekCsATcBt6aE2nx3NCNDxcEN7KHM7v",
  "key34": "XoVx4vqJSQ7F7cuFci5Ksx4qEHRPnn2UYiiJbjUxSLYrhdxmwVbRbMhr2mk5YzJ85KtdkpWRGwzymuV2R6Ecd6j",
  "key35": "3T6p68ptnKWBGr9kSvMABKy32Reoysod7yCfTSuGKUu8i3HWVrqsyBwfnpfMiM9JQCMgzPE4mBufKvZouo9Y2uD1",
  "key36": "3fpGyeQnbnQ6adhe8phEfzB5iR1gALgAK2NwneW1uikXzQzByCnvhkcQCBLupTzMCtHuGNmoHPLt32FJ872yP54u",
  "key37": "4DgmwQqSBMUJEbyns6BKdTf2vRf7XztPQXc5Dfb9JDhK9cL1u2XPD8oDWJvPdH3UuDV7apPoKvyYhFQCaszUre5R"
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
