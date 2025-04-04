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
    "4RTHZYG8UUfWtnVCvLyDWLfefPEHHh7fX9w2aEmN2tTXaAuMcTrQmX1g8t3Kw4fphmzyuDkxhAxbsR3npdLLaeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35q2iisrqQW2KHC73uxK5NQbabY3vChPcjHgnrx7KXRM2U6YRtxukLzUw9TwQKQLnoU79TvmJrGwNnRgYEVNyKRs",
  "key1": "5N7tfpHQQ1sq5X1kFwpiyyPTMHXxL7WpjyiRjZk1ypTvMmriwgEpAykpZ358GYaw4hmAJAmn2iWqzGRkGDUrkx54",
  "key2": "spFHEwk9xrKAfQvAM24CeXBLPuL41yJ6UwDks89sWsf7Kh1PFAEV2Shhxij2WX2f9NHg4e5N9CmkuEqGavDGerg",
  "key3": "3CPRVwmMwPiMMV7QCfWm1RMshCu9uojkdDc2ga1n3Ec9p4XZJo6sgq4E3CWQSxPjN1tYYhXEWdY9cH9kp4YSxrQ9",
  "key4": "fSDHvsnCCnaukAcYEvqDyMMqcJLJgpevKwAUNVqCihPWGjd6PtcvUM5YNuz3j8PcjAQLemPGs1AoTQ5zaxLZgV8",
  "key5": "2roKxG8DsthQCem7BuwpWgbKeGuZQVzoTy7nAWGiWvpZv8CFuFYnSn5tZKECkJoLv1L1TQ15xrVZM45zDD7aqFfT",
  "key6": "3hi631ULZvvMmf9UEFUhYCM1RLLtDcwUEQtNa9QcevsuHRtW1oQbzjTdMkrH3gzMqAs4YwFHndRgsSuthzhyZ9Vs",
  "key7": "4Z9FXcbbvm2sySWiHzn8ZkLbgDAWo1S9mF8TUAJzavzzdHTDmaRjqu7hz8xiavnYoZP547REUcHnawzXWtv2fGt7",
  "key8": "4tvHoHkknWUFsMdLR9tYQxLSEhNQ3cWR7Xn5cb2CPFzeLjpCBhVW2La3g2f1AW4Wnt6eFyToozxDt56SGhTSGftf",
  "key9": "3h19mKXcupWMuPVrkHRzwGo9o2EBAjvmKRwAN7DpRy1yBsigMAokypy8b74tYd5GEU99PoX4vvD8fxD3mJS41kmf",
  "key10": "5hvUHZ7FhUAjnMijUQSQXWfCcqqSAUpDN4irRwKYv1JxfpKM99cfwWhNWqQJXfzWFXrbShmcnCdNKoi9JhWWGuLm",
  "key11": "5crwQX6uGg6M4X5n5kjR9qxvaB7KiKf66P4z191fzJUGB93YPDoCzycfE69PhWZ7ApmnG8d1NrNGRSSHwCt6fhae",
  "key12": "XTUkdrRPcqBruraPpPtDuLnNFNr1BFsc7b51DdrjcfACewsgD8RpN7C6YcqhMxvc3apTTAx7jX45Cd71raK5qBu",
  "key13": "35z8mvLwbZ6qPvsFumPMpT4yVVQbGRK6gyAvZKGyTdBZDDJPRRYLur6xqQU3CJnFJ9GQiW3xDAgKKqo2F4KCb6vE",
  "key14": "3ZgTy3X16e3VKRiFPAt1jh84ma2MpWLyjvZosS1ECXtzWv3cuLqjGCq9GzP5r4tWHu7JJcKUGWYtgiBzWsgkkSMk",
  "key15": "55MdTxu2BzvHBkdty56NdKs9WZtNwLCuJYKrqr5crtdJpH4CTMbNEkYQEKoSBSW4igeeDTkqJLssaUTckzA9pBj3",
  "key16": "5RZw6ioKoSGSr9J5S2eu3179PTuN5mPp4Jiy9TytYHqit4Cq285GU3JA9H1RqmEg2Rz1aQ3GZXxKDhCigVc5rxc9",
  "key17": "3Z3uPgjFkiBFvJsb9ENYr5unWCaraEPAMxkVHbK6dG51xFFyG5MUGEx5Qvk4YdTS6qUbWv9kpFayAaSF98mJJ7uL",
  "key18": "4hhuEzzL8KjBuYUgw1pEGwd5dhUQYtxUUerGEeQWKRQ6DasXnCYyT3zjVwYD2f6XpJdBU9QFoKNMoYCCdt9BHcLV",
  "key19": "22YxUuyAXTR4N6tmVHfRNiaAwnKbNdS4PVCsYmyDVgiWgHBZfJxg6L67u2hKxRs3rNMiKxmQHaqniytFbvoqYgQF",
  "key20": "24VejDrU5EbZJLEbxWitsaLjcsczhR6rTcLAbRRYnWyKSLk8mVtJVMfXJ5R86vdoYtfWUw3SBqWX99bHoR7Zyhex",
  "key21": "31jDZHZkKwrbFQYX5saqT1byJPDerQT4pcQqNYVkHL5HHEfJctP5Q3RPpmioGnvDgnimJjMQzmJVGkm9YNWwePEY",
  "key22": "2jnRkSDz7k4zENf5gdwccNB4NMYoFhjYNBhuNE7rxbTbYEvfGpg4ikGzd1Xjr7W9r2MgENXVcVdXNPSwiU23YPkA",
  "key23": "F9EcfXYUBZpLpd5naiXijcCiBgUM6vC4yKpiTNhBT4YinAmKgzHVyc1bM3q1vjoJmm9Z4YqDJZeuDSZSuSRJzTY",
  "key24": "5Q5hFfjF8HGzDtc8MjP4WYQ3MRZteqrG33Tiv4uGSe32ejRxTHKxHJ9qWjbB1pJ9XGrP3Gf9j65nYb6oVb8sfRsc",
  "key25": "3iCAVefPGptCTmHMsQ7VAWeWyj6RSPwxECYscQQivWCnNdcjBFpVRB5srDHn2aUooqa2FnqjgTU3v4PhtJM46mNZ",
  "key26": "3QHbRFFHWvqBD94zj1G9iaqKjnzsU2Ko6SGF3M5E4Mv2aa694kCbbNyJijBWzQNJt7MNZi4HkaMShMsHZ6KnYWvm"
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
