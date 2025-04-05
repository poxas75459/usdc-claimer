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
    "4Zo1WS2NWhca7UH9rgtbS5mQSyFc9AMXMZhogdfpYJy3EJHhVLwzcc3ci5AvQy4892tJjtKyJAMKSXdJDbvcuc2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ufsJMe7i5BDaG2M5aAKUkxgb78YG5EPaKXoL6UsCRBVvbQBdjqinxWCEZKuKEJwdr8Fz8BEYJfL7iTr4UJTXjpD",
  "key1": "nL5jKRV3jopwPX5hTzYMz5BgqxUhTbBDfi3jbMfygdr2u19ndtnWjm3DCDGoaCyPtokJ9Ed5pJcrZTrsdRpTCbQ",
  "key2": "2pVn8mD5uDmUXJNJymjfD6GyArsJ4SYfhPRR9bijqYHHMBn5azpcZMgZy8tdYLAy2iVN43gSrRfnQVY3sk3YZ27H",
  "key3": "5REBrE7bv7M3LeS2VTid85bNJ8gwmXFR5RmgvuVeQXxYQTYj6SYs4BzrKyve3knbz8A26ojvUvDZwyTftyZaeJ6E",
  "key4": "63oPVSJBAeBmLC5tyhYK6RUVXRpnFhW5YR7xhaPbY7jjrTKfo9ompac6asb7YVY5eGSKYPuhivx7WRxQHw9d6NuQ",
  "key5": "5jQtpdUY3BvyzHd7d4bdy2RXCdEWZwDxE62QWiJRWsyivErG2SRBM8QheMY4vBgKPWee5Ei4V9pJHTxBiRmueCgA",
  "key6": "5kcyomocoGFH977y5MeR1vGqoVasCikfQoJ8aSwVBTCE96zyUdKKJdX942TXaE7a1MMJdaAfacwPW9CAvYPvmgCy",
  "key7": "29x1z1Lk7w88Duu2685nxr485cjgKVv34J1aHmEYDcxBC9SxAUSB8iULw8amgLaRAf1Dxnh7fT1QGhgv7hEuA6k8",
  "key8": "y2Zj4o7wuF2FfXgWaV9mhewMxcQvc91i24iaV8AX3MyMNq7uLjWbHBiVxcit7Kuy9XLvRcfwhsARH6fbSea7LF7",
  "key9": "2vCahCji5HMXgYYpsuVfaGr7KAjfqCRijwtWDZTRgJUmw5uVyy4LMkpEzzXSXrrTyb4WagFeAommaMFa7uxUFh13",
  "key10": "59Ahw2YPBxp6vpucUMpVmaKfnDBbRPD2yxxkMGweFBHp5w6841BzaP6QGqLdURNT17XyataoiZeks1dMtyYDgTZF",
  "key11": "cXcAs6ZywbQzZirFf3reoT3eQrJbigWZQZzRcp5haKqgESgerHFSxPhLQ6NYXgFL47e1X7AX8dsKXVQ6DZb8oVj",
  "key12": "27KBtREcw51ZQ6EaJZRs82p52qgGppHoapDxDsmGGUqHCuuypePYBdRcSdBMDYjYHqijheh6XcrdKTyvJrcpvun9",
  "key13": "zuAfdqhiBAgYAoWPhrM36tWy2upF8zjHPVukxgEACKBohwKxbSfy3T6LSh2wkKVAG5gVaEHyCzxj5v6cdNEvtyn",
  "key14": "55gepfyhMcYnBMFsQjMY49oppQFbukax22LXmR8QbpnqaSvGDp5zbdad9vWqPV7NGeHHcgyTbtzN4PgnJy7ow5SA",
  "key15": "fHMvgeiCGRtrMXjeENWfQJgnNSzKdFcJW1fyxgi49gUQCZ63BhVV5TJattsvyW4YC6cRkBTdq5oway1rosGU3zy",
  "key16": "4p7UVeGpqpTL6ccFAhm8yE7bGsaVsh6FykJtU8LrGchGY3MPCnLmFMLpFADwKKBAiEo4eFjFa3TgZV9kpMdsnfB",
  "key17": "m1YCrvrNTrkSzuB6k1LD8rNq4Uuf6iG1vQxcTwXgCqGU71Vu3ah6FaKnHaezGbDXDG7f6fjXvkEMDAWvWsR9MJS",
  "key18": "2o8xpmQKMqDSHyHWtBjQerwpFMfQ87WTE3C8Vxyo53EsQ9j1sEQajkJDUPKmYtnkjSXbhpiomqWJP8Lm1BcjsYKN",
  "key19": "52PaFTBMmVHRgPLmEEVmjuqTreMKK2iSXWeGS1kvneR518D38dcXX7g4Pb6N7YYhzbHvMKb4YZ2RgcPZCCNMqxe2",
  "key20": "2QTwSVu3RpK92jqZaojGECL6FGYDJGVsg6hjT4gDHpnNtoSimeEjSGZJ3eLzuKCuU4b3rSeL22sYaGDbKcw3bfGh",
  "key21": "46jn5xnXdB9Tv1Npqt9cnPAYZXjsqRSTivWHqX9KWMYeifgRbLWCzn9whzLv8ucHNK1PSrzxdaWrKcaohXZeHJWJ",
  "key22": "3PDthdo5SgVgj4HuQzTBncRs7v2uu9gksrLEJVpby1eqPXEKUXpUPzsyonkiTmt1P2NCB68i93w4WbQfQd8GYdMK",
  "key23": "3wEdLmJ35MfFoRbFFXnkwKti8bSJgiAJAxErdKN6x1YERzihhyLWcjcYfSVo1FQAGigFMpDPkTZxAp7bz2EaUHKs",
  "key24": "5mENcPcxpPLZ9r4rkjY7PKqrNoNSJ6UMPftz5GrE4aoDxGDBTsvsouYU9V7bEqkriods7XwtZcxiPb6W5PC7PEYE",
  "key25": "5sikHHNdefR1hmVhyQ3mfEEgxtE6dxpsj2nDAxFLTo2CxkR2TBDYQchKTSwvSeV473AJYwstc6nkGcUCeGCUJU12",
  "key26": "3UAZtZoYVcUqczESAswyefBnNMTnWxDZEncd2BMEwTKgJaqaQe5TVxcPe3Mh882iP5GcnkxNdk5hBcSLjEh2Apj1",
  "key27": "53fY3HaLSWXtXGkeAdW5L7FwNgyZmYYN6Dz3buDyBq9smvpCpyZ9JgCkrU4a6Q8YE7AYx86JafSwnZGv7uS7LGFW",
  "key28": "3SiXE77hYAQ2FMrmFD8Mtjv6Eq1uTLG1rDCxrmzywaxxEK6rteeNuQuyb3YHDV5tbVbRTLKzBwAThuwqbGQpjsc3"
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
