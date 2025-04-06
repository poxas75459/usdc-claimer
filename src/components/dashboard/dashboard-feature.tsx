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
    "2Pocv83kXhoq4bTY3oLGzya5oqSJiH8yDjZZRsA6o587Y1LdF18DyzoFuWzDJ8q7g8mLthsGYy3dCw8qRqfcykdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y5W9LJifjnDK6Zb8b1sEhwMtdDpcP8qWhW5mQ8g3kSyqPJShwLnDSg3cj1hG6ayra7pUEeQW32UJk131dcGNAK9",
  "key1": "YDpFoyKABgsXwKtSMDfYJTCyzYdsSRGNqRnnfKjuSE1sfWrcecp95qe5tRqWx6xJf8jEVZWuviXuyniUZKtNMK3",
  "key2": "4dbF49zUnCMx4x1vEyebsTUoWQ3QdCYR9WFiEQD6CZ9LZqq6USANmG94sNuHg7sE9WviZUP2oDhqTCiauhRDZzJY",
  "key3": "5Zgm1ZKhgya5PBj5Tvr64MySKQ9vviJ46KP8pZkVQa1PriLThCAqLCpsDkNzkUqfC6qBjAYhALHGdfW7tvahLG46",
  "key4": "3Ez6rUipb8V2F3aRhH8Vw79zDK8rVwQMtk9cBJSrLnyc43wiM4zfjqjDEcjF48Kgfpdx215hDVUZ1tkgFZMqag3d",
  "key5": "5egnV7cwkR1CUh541xSSDd2CYbEn8aZ91MsWGKwTNptn87RzycWs9w4fjHUAbWLCFhXMjxaCPfAW8L6Ly5EHo1Mm",
  "key6": "3Rqi4nKewL4F7N7kEFJ9UdLsn3tvxX33cg5KEmxM3e9mjgzxEHiPWgbpYErqcUKxFaNz9x3NrA6kT1BPpYShTfFf",
  "key7": "2BfJ6e42SE2pb6RQyKB1E6JSvEa3gc9NwnLz8XsuBgefSzJ69xJgjgMLtEwbRVPew4QoxAusEwX14NeEWyW71bq5",
  "key8": "47N9R1THYo7hoGvyrQcjZsnuoKescHpryQEHHomF4dLvuL8TQzXko4i7Z94JTCXrBRgEyhVscfxr6mcyowzgTrMQ",
  "key9": "2ZwjBwaezMsdDtpTPFf4jUpCGVjonrpGSuCU1dkipJGNYYgr3tXrZUu528NjoP35CuYA7C39PwWVhdsgDS9pkUGf",
  "key10": "5vdW94VB2BmLg6Wbac6NCjMfLYvCk3eWBTURPw8PhKzmw9zgHSkpjMSMBPjTLzwXxHNL1XQLNSTjx7MvKm1M27Tj",
  "key11": "3hzoCx1ARVJ7dEZtLe5gshQ4a3ncoiLHk39n1PoFwjLQEidRMEDkqZrZ8qaqKCCLkhzAs6fZDG8gEASL3AMUd1JQ",
  "key12": "2fygu2quPaJD79aZApndPAbw7rNEWWhvLykZ7MicK56poN6FcyjdRvDUDmJ8v7rQaNaPxUvmgYBkvj4tiQNvmkyF",
  "key13": "2KrYTXZEcapR5qCnvCDzYta9Lau7prBdsT88XE5PBjNYWPVE3SJ6Trs5yKUM4RAJxE8DcKR3pnuq7zwns41BuiY7",
  "key14": "5wePozPFiyVgz3HsyoBZfDC1inhVSykZfyfdcF387GVDDcuqHPKxnZJmBXLDKJTbDUpD3eAYhrRFjU7NvspQc9oo",
  "key15": "5xYtWxbxm8xPJpiCbYESwkgcjT9rM8vtwF28vjJZn1TGe9r2CvBscT243Vkv5VqKA37DrNhAe6hZav9HMJP4uAJH",
  "key16": "2qdKvEqWJX7kGKFJneHtR35j6zhPyFFZ3wUPADz6gqLRKrZHKxXkw4p9YPJRrDXpvYVUBFMaZYoJkMd2aq9B17fv",
  "key17": "4wfFvxzbrq9bzzm7i4Mm8aFM5NJSgaBE78vqdTEKnMw31WbsLBBXvradDWuSgWRYqnnNyuvR8Vd7tMaGA9JRYFeT",
  "key18": "3sxPTnvLatLoQphPup9bFqJxK3JGk4L7wzRNtAQHz9c91ZZnPjVmJv5gHPPyd2pz5W7dCARdRoY2SCacJDxhEgi9",
  "key19": "URNHDvQ6BSKXrvZ12awRijTp1ubjvZ4zq61YbViwN35pKzBuwmGfWpAznVLL8GYADh9Rm2DpVY1zarQzTA7LNV5",
  "key20": "3t3WmzsY4v4AnyPkdNQTRGmureCkwfhTNL9CwZJYAEEWvzQKFMKs3vaziPW2Lh5dbWXKQDXun3cMTXDh5qudn9PH",
  "key21": "1ycBXTbgkYQ2iRynaSU3YvXu1kEUahi1fJuDq3xahYMZQtuQpDDw6Z4Z63XDkxzhw2eguCtYccCJVgb9taaxcyy",
  "key22": "64MjTR8jLdhgi1AZdZ3Q7kZDXY5ZN41oQ5qg9iyhr6RmpNj1H688gLPeJviKn7LQVN6QKnZYfuySE4sCedkXWAvZ",
  "key23": "YiAyQ4RvddW9dnm2ZQ8HYCprENWY4Zrn616uy4bjZPU9fsRkQ1iPW9Psh8gduwtCGtbBkzeB8knmRtc6UEh9yQw",
  "key24": "4dZJgQFNF5P4g8EDhNAQ7cJroKx13PEzhobvunjT819dJEMnk9qLm2RVsoLJqQ4KTeSUyn9UrvubBEX3YWUdrWew",
  "key25": "5Nmy2kYDUzxLsV1MUiu3f9D1cA32aU86S4af9peuocsw7WKRbCTLG4h8tth6z5UnhCJLf8x9ZfvktewSgCJwTSKT",
  "key26": "5DUsfsEhPx5ELuCFsMFDVchc1iCL8Jg2W3zkGXTE1BFTuHVdsDU9mhh2746UPtXHZE6CsrLfm4riwPc7BcYckKaJ",
  "key27": "5SZdmPZvGgSoVG1STKUy7frrTDQ2viAEXLt39qS2PdNyG5NW7pSootu5Rfbta3t4dzuBcNUF8AY2vEWREURVEo8g",
  "key28": "5Q5FihFv3YjrB2Fbfnpgxpz7UkY4FRddPz6VduDKWHuBTtsm1i2MudiTvbudM6VUHh4KzuG755Afx5BpiNsy1SVB",
  "key29": "mq6WvMvMBXnSwpjJBYhsUVkXChqyWZShbcac7rqtfpLep2q3a53erFaWm71M7RUtswQrGd8eKP394x9uAMKgzdJ",
  "key30": "oQ17BwNdGeqvbo6o64guoaf3LK7W8ikvKSud4jTpi3CBnhUhpBANR5w8paWJTkUsKiWxoAdLeHLBosXSp12jVNm",
  "key31": "21qrT3Yj8auDmHPGsRbxRtcaerrx7Vf8uKKZuEkW17FdAd3bET62By8qyPxkryqWBAfk6iyvcpY9mw8B763MVn8e"
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
