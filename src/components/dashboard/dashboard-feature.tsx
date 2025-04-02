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
    "61ok69zoAXknFCp48HMzxTbQ8BhHYBHbzJMUAoFewN9VPrnUNCzAaSGkeKL8s55sKLmQvfdMxu26YH3fzTVJ34Su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3koHA2Eb873ejVCZFX4HKRS2R5WUtjUMBpwETmnvY1ADJpVdNtmDSZ2VE69Umzm8V5iAZWqe8KPbh4eEBPcMXu3Z",
  "key1": "49Wu8PEWAgRNc72DCJC2JJKAGqzJowH9LDp9FaPqrzq9NwYd8738bRKkuM3WGDB8JpB4ghTEDPKYyPp9e3DRb14r",
  "key2": "4uJQyhxrck9jFUYR6jYH9MFd8bPdXvNtaZSwy29QitTuVT4hiLA3UP6fE6adq8FpmBsSmjMh28aN5Whnx3sGHnS3",
  "key3": "5SSqogM2iabrucL1jDHEf33v4vX7hqDVk5ixySD2bH6zX8wjM1TrkVwXGddcxj3NLsDDZok7quqwWSXgdL2nxEQ9",
  "key4": "2vVXAryr9YuBpst37KvwczjsARq6rLtM1q5nryH88DjeWwzXpXwXZZ4SVxL8VhuTNV5AE2QKn5JQboisEB435k9X",
  "key5": "5FtSzM9umV3YtsAW8vFbrCZj2Ftfi4eqNsb6jrmhcZRjtcoinWggf4113Ltoe1FM77SxDBusv9iV6WZ7RDpu71h8",
  "key6": "4pwWP47wMCUDyMPLPK1toh9yiSX2DSdGWUugZ9FPin11qzYz6DSi1ttDa551iQA56Dao2mTiz8L9VZgdEb7CeaR6",
  "key7": "2Tg6bTw9x4MJuWZx1W9MztxQg6KJKYFmENMmhiRJf5efWDqEyNpnDYNdNewmQCPhmcgLTmrRa95hfiZ29V9mX4Mw",
  "key8": "3JLx8PRDBzUdj4o36rbwFcKEqz5KBa5w44TNN4H51xhjAW4A4AN6pFr4TgTRiVt2zuyuiFTBnCjDVHjgG6KoYCxi",
  "key9": "3pmrvb6AE3UrJskef886UJ8YWU6nsQNWE7QqWynitJEoFRYE8bz71o74fj1qUVfUrzFutfjFUPePPN8UqhsYgS5M",
  "key10": "2fE83oEw7EheixyoqUiaDUbE31htdB7roN9d4DdM7BVyyQkgDXge8Bpbe4M2fE3wSPczwoGTYYBANDobfNCz4a1L",
  "key11": "ox8NKSG9bijiNi8KtMpJ5Nwxjyp8Ajk3KAkQz8sPiyb83AxZYH8qcabJ5X9ZQjTNhGQCghYYZ3BWj29TBK2LJts",
  "key12": "pwMeYVoPojDnWeG1iJE1ytZ9XEbemd8EAvUt3GK3mezh2JNEaDsUN1VaDvBRtFwJse7JFhLH4XoxqBoWWCJjg5s",
  "key13": "5GCus6DYkd9Kfwbo2CbwixfpZ4JoQ7XKtSQoPnsVK583H5ZaJQQ8Tz742RG7eqQNY37qvGuu8f7BFofEirbCksmm",
  "key14": "5pKrZYA38GdSBztYG11o4mf1m2u7mG22vMDXRA5HZ31tDzoxvU9mWSQ5fyULuwJhHn1GKnpYTJUCxRaJKUQmqP3a",
  "key15": "iMWmAxCGAPF1CvgpZjcxhginyXCiET1t2JqAwYdizmCzMMSvGJqP2Dd2vyfVTTkQtXiU88s2y1aFeN386Wy5itV",
  "key16": "4b55YayuWJtAhyuiUbYRiQpSDCV385kwEwzYsp3Dvyt6nLAmz14ALEidpHHcLGcZRyfp7j4TEPXntmMMbfJwhaCe",
  "key17": "39f1o2JpKd1t6eCJM1NcBhDebE4CrHwSxfErBLCRMqSgdDeEYfNfCbrrxpsxZs6XdaHnFhqMZoGQHxYECVJd1yvt",
  "key18": "obnCK7S2iwahX8m7C2nor1pHovuuvMYvrL64wkmp924VKqfHbF3Q8JhNcAHPKeeZ9tYGw6M5A4Q5RJSqM4VrU19",
  "key19": "3xsZFtR3asfSAVNEkC948SVBMHdyq7rejuGb8uze2toCA3gQzXG4mVseCK51y6zATR19JsXEDoKqqL4eiznyymSB",
  "key20": "2VAYawQPMmtxucyKh7YSzMoU58rSSPQADrN9i2bi3GKponnsZZ6uz19QXJDVyWpz7DpkqH6hxmBdtf7x64sVB9Er",
  "key21": "2EsoAqUANKMmeqP6R6RuDTsMZtnpwJdcSHepUMpssmL5e96zBRkGyLmVXUzhUriLr8dCaqsxpyXSgFJGnD9SsFbY",
  "key22": "NTgrt8HmdUsM7e11nobiKw5r1i4pjgzfWJL9syjHQisKUuLbXZbGzUkkkonKeL8wWNXTavPUAYbxBQEjGpr7hwH",
  "key23": "3PcTn9Nmvguk5ZNSECMN7F1oN3RMbacQHQCxBBrwwVQLGhxyoGd43ewGL7VaRjSWFeozdzVYPkDEGw8RhmV2RvTm",
  "key24": "2c3MG6H7DqhSXk3ttrFSm1Ph8MUQe3vAGXBqBVQnR1rSthGZbTrFFAYiYodbccwz18XQekV7RvNLeJGKEyqkf8pC",
  "key25": "4zh71zeY31mMEzEAsQcUy5yvSoXGDzLsFwM3pPaEaCRFmei8u6kRRy2jJ3nkF9iBJqR9HrGBhc9fE4a5STzXNXi2",
  "key26": "588YwYyvFVRAmTusYz9CBWg1VcZnHwkBCAGhqz9gBPAC9Q845pytgDbTSruEsNXyUzw4bAfsyX3ximPb5ukgdVL5",
  "key27": "2bczVt64sAreUTdFsxpr6ohJptx5zmAnQmB8U4KL8SiYXhRtnSVnu3JqqtNDqQZG9sp3aomimzdnLq1TaS1mNKAx",
  "key28": "44fsYqqBzAk7TSzn3hMhQqUWKLJnABmStjB7EubdGmSuh6KnVvLWRGKpAJLdpcNmFm3UndwrXdKxSkoK8FqG1SQ8",
  "key29": "5isKhfK6JtAsfM5j5bsHQMeZSLh4evAcRkjA54ES5uxy1HLCDa4zm6Pcc6owK5FtEfgLZBg3c4vmPXjcURX42cx7",
  "key30": "5NF34QLCnmdDxL4cZ5PwWiTbCvud4oxJ7MDCjBvotPSJLRyihe5VwHzqHKscG8AWJ7TR9ymHQgVQrAfhEow8k57N",
  "key31": "4SAbA5WgycCYBCkvVLLwb6oB4DzVQAJKuBU8Jhy6REhyLpfJ1NpYc6Z4pXt9Pm7uSLXt3juaNo7cP355vdrWpVPg",
  "key32": "Y2AegYPThULbrZpVTbm2mdnQc4SukLKsQ1h97ThTF67BPm9bG51AEsunq9Bew2YHpD6GFKeUM3agaoTiFQeMBaK",
  "key33": "3855eEhVbiwH5Wz9buSSZC9zV1zPZ5kPiDHye2mxJJz74gFURTZuiAGh1DyG9gnVymN1RdeXbyqJ1GohcbkVNUbM",
  "key34": "5FX7Kwpcz2qfzG9yq3zNNFP7BzSvvP7i33ewLacDSorfGZgH5861RcHoxufaQmymg9pCB31WNPwsme6Yca7SDoSq",
  "key35": "3RdL1C91R4xAnXgJ9PMckFzrYq7GHKVrX34UrtVz2ccUTqaMeRWCEKFpWecqLwhnJLTaa8F7Y4s5hrbjCpEYytpy",
  "key36": "2LDkK5jeZ931A24r17WQvs6GdPSai77RbjdNYfjc9kDh7aWDmQ8CqjkwERnpQ9yCKc9mugWCJrdrpUr7BTHZbfp9",
  "key37": "57yMUeh7ybnZ5FARGQGWd5K7qKfthyoVe112NnB992YkMibqny7aPDomMLD9dSifqerXqpVzCxrKMuUBhTBNjT1B"
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
