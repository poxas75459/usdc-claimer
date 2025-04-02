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
    "5Ph6xNefyHSzAykvBdG9V6qigSKJ7pfpogU1BGraymjUFXUo539JT3KhFQDxHdEzSEZa1fV1H362Dy7NCDXRQK8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3coGQ5x4p9LR9Y5Ek8CetxhWRWpVVVsLzVDE79vg2GQsFZHa5KZdbryk7mZ8qJnNp6Lj6wQd8VQbB5eQeJY7bsos",
  "key1": "3jEJ8hNbemKv2bL8FPXDq1GTMWbgoGhzkon65M1e72qV1rRkJHLe6AwpkY4phyL61cFiCPzD7FXBprV6qoEtYUtb",
  "key2": "51DRJjJDCumorT9tweKdxn7dEME8b7fWAZUyCoY5hwdbtUPHPYpp1zEwk8fbxRoY4ektYzNhKPRGwdQFLUGtBBgV",
  "key3": "2CkrTdDfFy2FJKjVexKz28Ku3DPdkGKy9NV2u553pFsRvqDuRmQP9Qn8UM7mRUJRXBNdVEzvLn1ZquLKwiFQ3iFj",
  "key4": "2KcjtiQw6sEZLuDwcoKefUqDb6j4ynLTGKRhxBRw93tGXiaRMvzXiWvRsvBLMJHXFWtYCjoaBWtUUppWme5tyW7J",
  "key5": "4R7JL1UtQJhJKNsDUhQuSb1f1FmeHh6a4KogxRJoyrD8WDeHyxZEiVKUb2PHWAC519mu4oKzd2mswYw7jHm6itA7",
  "key6": "3EwKTg3iMkfNg7kaAigea61QaDmpZiQAR5TyFH7QNnVg5Pufdupfhve3MNyWrr8uE1Zc7ufsSC2tVaWNPDAHpW5u",
  "key7": "46i1brDMP67n4p9xHU67UY3QXYrXMMuco1LwZXb1p53h22bv1i2hbxMVi2bEShC1W3UPenva4UAoTd56Prfr5DTD",
  "key8": "3RRvg5BRdhHWcbcgHef2dzKBvzxwfSbRaNfKd33M9M5nuUp3vFfBLr4zghLfAKeXsQ5BAVW32URqCQWZS28g9hQf",
  "key9": "2KNhtSPZKp9s7AXCobADMK8Xjs38sUrkEBbmJwC54mAwobmCQXyWLMeEdPkjkeSXwLVzHeJRK3vXUuV6h7bPMQ5w",
  "key10": "4czvpvxJotCcCJy3K9RUx9CgQxc9mM3rZtpd6PVzNy1xgE7j25wubMsfn9M9vd2PVszkT7j4jddFywqcPrke2jTF",
  "key11": "3VFWpUYEzAuSW5vQoYRN2UicLF6iPzieyQNS3t73rN4vZU5fhRKYmT7kQSs5xvwyhsrQeVoBbpumZUTxLyEpDbjs",
  "key12": "5v1GsMepk2LsUxSbVugwUqcL1MjW82VGJecac9twwhYXuKFG6znBq8gcj7CGN6atC6vMnNwvNLTwn1uczc1Zz58d",
  "key13": "5wPJahS6B1YgoxdzobkZDSNyAJhWiT4SagfDmodzexGk1Eu4aJtyfDtyypYWvfaPGC2pGzkDh9yQXoMtfk6LYWND",
  "key14": "57ZjM1sWqp9LMfdfTrBuGmc9zj5qn8ToSQt7vQJ6WERKpg8r5SgNpuZ71t7uf6PhrSpAi2taMVJhauU8zcM9PcVv",
  "key15": "3A2MZJXaLXzZ2xoQTBmGtPqJMnUh4Z3dAjGhaCXTuyfUEk1NmbFhfrpiMpK8dGyeS58ZvnbNJgJ3ZW3trRvAFttf",
  "key16": "42N7TrL9hDDUFpRTLGF27UWfFfA1J3EfAtdKbWtzL2q8aCsYXbvw8PUK55YwCsRnw5svZYjX99BHY9PC14JQj9qH",
  "key17": "53N7qivFTkzWw3g9qY7H87M4cMBkmn9LF1WmKazGRJTB9oApY7Vmk7oxpdaSDaubiFdwvTDwhf1gnYnehsiHHk43",
  "key18": "2SgQvbud1TFJPWZ7pBjynx27iTHd1uMThcYhAEDJC1NKTZEbtfGmUmoqMQo5XbS2CyQm6kcLPnzDs3goxC5oGUpf",
  "key19": "54R7sMcFd4Uo58iZzh4ZkU9aeXghigzPGu7Fr7gnpaJsD12QehjrHHKVU1xfmaNmKEf4N62GubGnRWrgrEuXxCCM",
  "key20": "2NSYB8Zyy8JqavzaYaY14afZMCvd7VJzxdFC86fnWGLyTPsMLUeePt8LXJM4yx4Rmx1BjuBzngciCuY5FTmMhCbm",
  "key21": "2uG22KZmbGJ84RAGc1Jz9hfbYnSgSd5nWDk4pSBToJwKm898rGvxaoud6WfoKiNdp9P9kWxHm9TxJshTgRTZ9eKH",
  "key22": "2DhgD7ZXD5uBMQqGL4ZqFYoCRHYkQcizwrshxHoyFadFnCnFdKckE9TzYNQz947nxLVAzAVF5dk2mEkVXLDYovD6",
  "key23": "2186mB11xMU7JbV4UnsqtR1cBiqBLb9ZiMFwWnHHQCFohFQwmDCG73NjmxaZF37NSzKd27SCRWpams2Yhjre6bZm",
  "key24": "3yxE2B1JYArB8kd59gk5qRbMbEfExFBwg3EU29XwcpDCrkHKRjeKrXFpV2m3uMJTh36F5kayNnVCFFr6ioPbichV",
  "key25": "4Fsn3nohbf4EGBwAeZVJBQw9QqfeFDEfsd1ond4QK814CUuswyreK4fjG4udckzDzraiPxPQmtXZxQPbkXkDgvTm",
  "key26": "2mFuBYqwuNH9wukxWrbPbMnVE9t9mW3Xew8UD37EM2f48dt37RKQ7h2GUmBoNkVNzVoPmiGz43t1UYugk6G3VoZo",
  "key27": "5HacSQz8Hdfx1jB6XJoEFq3PH51LemuhWEgpJC62LvjoTAoQoBgAoURHPD7ydp8HNqCgS6VgEMR3jSGv318WjLLd",
  "key28": "2dSRSuZRb2PLtB5ogbtqbK15NBGWnq3TzqpTAVxNbvmzQTT9wmBGQxoaRZCyZMuAnBmHEu5g6qnhRMrGceWit4QS",
  "key29": "654RL4uJa9bd2HPy6GudQTXuJsjnYkC575VFefiukJ98f4uT76MS94oAGWSEi2B2KRNRwFXgQHsRXFnDzmq7wPir",
  "key30": "2enHmzBtJD1F9dbeY7aSbTkGR2KnJPccwT3hMzNqwCgL3hsJqRPethPj3HRZErwVEc3gKqeLK6nPZfWEQDEaSuQ7",
  "key31": "5e15BEcSD6XjCoYU3JvyH5PGTytPeu6xNt5Q36ZwUYi3PVcfS1yGdTkFNCoDme5UHsfuiyxraTju7Arn18684Zr"
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
