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
    "2hsTrfd7LGKhP4EzX1aCbiKfb85vUdzJHdptpdneqoKW5dn4J7NJ9cqdXoAv96P1rmCsT1s4E5A6idfDT14rWo7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hoXe3WVguU1wuHs3wyRFoZyw4SKuSemVCrejPpybxdJCFPXhpeKSrZizGcAEPbEQBgKkYinArgu4ZH5rxdWV8d",
  "key1": "4WxTW4dFJzTYV6qYPVdeqMX4999ahv6TBQqSgeeViHDCLfYyFWsKeYkWWtmNFdwUdaj5hPKduCCkwp1Y45LCYpBc",
  "key2": "2M1eNGhToUGY6uWpmNhAaY9qiYmHky8KC56zodqMiRSYn8zbJy4u5EnCmUuLXrHsqR2eDeu93bMYdtPRMw2dLtVW",
  "key3": "cUTneCb35nYCeoMzCkC9qqhrgc2HExYvotGDxgYSU73Y1qWaandDCt5mtwgXv3tYve6UxgcZywfzyQqdwVfDL6J",
  "key4": "Yexu8isryd9g7uyEFsfFPctBn5sgnkiH9BAXvzkUPcs9QF2f9ZrpovpS9teuKvy8uL15KtM8Xjb3y8hP1ZJFRrb",
  "key5": "5YF1Ax1bHZxsb9w9qBAKsNDBuQStQYf4Xwa2ox5z3N56xQk2dM4ywYUqfMtTuK7f8HygtHHmTkLpkYp1f1FYCv5g",
  "key6": "5F6AQSrvA2WRWPmJGU85twn59qEEGgokMiu75KjjxzNgNn9mSVHfUs2xc3oHicuS6Wu4qMdBbnzCDwaQuxU2WG7H",
  "key7": "48pTafrYi2W3Y66mKVakjumDUGU18q2iRUbP341NAsgvtya9EUoyeBWWBRaJEVJ9CL4GFrd3YcJG3N71776jR14P",
  "key8": "24VrunPdycH1zMyYwbVtEH3MnqksLGje9A9MGD1UT9JAGSbnMQULw6KcDFBKaVUPuSD3z23R1T1ztiHFjPazsUmj",
  "key9": "568gTgCHV6YSW1n9KY4NEExXNo8T64JvvXzRDPsmPNLhHWSqDj6d13ExTiNEu9Cpin72SGNARfarfDX3cntb3WZZ",
  "key10": "2De8Qiw559uWn9dxyLupVik1f6g21mjxoGHWhuCTFVV4LiLxwWzCcDGEE4hbdV9wwQABkZcngXzASjJ2DbeYQKe7",
  "key11": "3pYrMQ63Kkt53JMJJY7wiQvduRQjGFMiMezMKoLg77Tr8zLS1wq1CSYFvu9hkGkZ3W38bKFKVFGxU5LscUFSKgXH",
  "key12": "Vr1R5HUe7Hj34rBcUvyvkxeApH7gAKVsHo34G7D49XLiP2Px7T83gtFHqCubqrsRfcNETNsd8XqmJx2fYfeSgeZ",
  "key13": "65zpwXFhj8A7nAXDkitSizU34THqUmJkN53EZNZ5StEbMFvHEtqBbn8B5c5DFtr2GatoLQ6HCZzhbeC541zrNQ1X",
  "key14": "j5w789o7czgsr5nRNt5tqpS4yeam1Z6ay2VW3RHWY5KuVMZjPzmhHwPiQuCtTCniDXZstBhMMGVzBRwq8iUK32X",
  "key15": "2gLMZyNhCptm4YvjNFfPW4wZkdwtG7NbKVn6LH3KQi2igJDhN3rXrtVrNDbN4rSPnWgJSXEdRY3t63hT1Cy5PhG3",
  "key16": "rHjEzCPkNczB4CeNE2jDq4zb4N6vJYWzEgcyxN1SQpCzSp91SHaiDcVYgD6h4vA1je3tGNXyQmpFeUcWsYhTqqC",
  "key17": "4acMKmPVtrR1RyajU8MTJztnJ69cgxxGaqUGH3DaTeujSrrVZKEBFe38wb54LFvJ9bD4jWwQnCTsRn3Q46gpnkwy",
  "key18": "skaJukbLoSaVwzRgjhH69EE3BjsiAcApZA8LTa5NKDivPcr7ftb1PL9AEnfVSpPpKqqo4YQjZYyviuptn6B2U3v",
  "key19": "siB6QLM7oaQsFqJQ1qAG7CfwTQooVzNpQF1QqTpvZKABNLb3HZMXyKkeRSYy5B8CMwg6hKihQD16WngP8Awp2ft",
  "key20": "3bSnDFKpKwZ9mbfzZ8xKRtqbxnFYBSarM5jSsdQ8Dvr1pjEqj6WxYGXtzGKbCgXEwF1Qejmo35RVPB9mALmjFK1X",
  "key21": "3rTQp1zAcRmbb5BfT58CBC38eaVcZgRAoUo2i2JCcRwynSys6yAno67KQfAGpU6cUWcv7XMQv7QH6nvbsB3RkA9R",
  "key22": "XeE5wanmS9NXVWrH7PHLru3Fn1J4WYo8ZEqZpm3cwpYKo2Xqtm6f7Z1r5ACkCU5Em2hPmYxaQ2LhHixABBSEtVV",
  "key23": "35LSVGMNUJDrTjnZYiGESCYwDRDELBgqi6MutUjAGMFnfknQKcqXu1MHPJQqZs93Uuxm8QVhBPu7A6cuXuSJhkV8",
  "key24": "2busnn33q6sk6FgfM8ruQv1i6gRszbquX5kNzWV9Zu9ZTeHkDVgK1bs4dLUhdn4HViB13baZ8hX33E4xTcXV4bkH",
  "key25": "48vSD1z6MM5kZABR7ZVvDVqnhcbfQb5y2qfDiEX7nkg9f8iECadQ5a6jbyT99o5Gtgx53fT2y7T7sin8oeVuVkpM",
  "key26": "31vHaUxMfbYKqtzGnABsUzZcTkqssisoYkHXKb4uujwQCntxL15ed84TtXpm4kLdkTcAge8d8Zzv5VzNLyEZ75uN",
  "key27": "4NheM6zi1v7kaTp8zGC15T9bbyt7EvMdCH3CSPbt7sQwGgPn37RyDfedyTJ516CtNhYcMsME56f7eZsDsf7Md3FD",
  "key28": "o4Sm6GgYnqK5TnrtSm1c4hJS1quED3A6oiccrHTSsUjhdtbXehtXijFfGkjZi9BELpffUjy3GSi2zXMKaPpTNJr",
  "key29": "PoR11bfB6J9zvbUrv8zK5GuZgPzJfKVSXkhYLDy28xce9oHFXhkYnLdmvoECaXpifuZu3z9dbkFpzxkgJ695Rvw"
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
