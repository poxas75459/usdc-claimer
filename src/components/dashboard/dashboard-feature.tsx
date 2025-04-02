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
    "Wqk1vcWr6tnbjjyp6MJgE92wd1LUbamZzMzc7xA4BCH5LiyD82nBVNBDZphUs5YRV4Z1PsVmpoc3uH78ewJL1w8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63zeLZrAsdw3vkEUVQTX7SUPRADHH6xfHxnoEmo9cq5CxJru8VAESk2Fq74u8XxjfsWiQGDznFHCh4rwwzdKqbnb",
  "key1": "3knFNias1zV5WbiU2P7nXeRBqyDnLV3hFBLskQHvrBbd8Zntjp7VstoiTAxWLtNjotsHyWTmQWDw4sAS9U6dZi5U",
  "key2": "6vgCub8NEfrm95rgY4aqvxfZMeCKefCH8ncFrKHKNPRZykFsPmEWYvDsPavZWki44RdjPMyXE1gPswGtbjKcd4y",
  "key3": "5tQhcFoux9NyXpvJjTyJob9kxgib4NBYX4VNYYBZawdAYtreC1kqmcDJ3tMpE6b5KsvC2BxTo14rP8txvAJdgsjs",
  "key4": "WUZV53w6NixjLKwq5HWuPYeiMt5ayZw6VggJ95MY3fJJLfS25L81dSUpGnT6a29cGgAunAAvPjcjidgmRBY2thJ",
  "key5": "46FzJjqNDCeeNABgSu75q6Ha5jWZXiWU8NufALiYeJEdpDUu8bsi6D9R6EEY6hkchCJ4pY7axska3RP4s675rjg8",
  "key6": "2WXGXaKwWQNcZQNsubnJEf1LQfTvuDkDVAQhWfHy1eVZ5FH7xKwowzjhZkmMm2G3R9qR7DcBWhKkyX8LmHoRKfHb",
  "key7": "43ZxMPxdajQrcXZHeARjbvgXWdc8ER9nTQZuU4C19HLJEhUy7cn3FoZBvo9xnsr93A4eGwHELvTyXxM6Buvyxa2j",
  "key8": "4hQqKudXahChjc6s19ByvyeZtMFz5rXfK7BvVA3cjWVd5ckxuB6F1FVJ87JZn7D3vrXJPRQkHSjTdTXDWXUJNfJR",
  "key9": "5eTK3EV5wMPKGMLCNTF1VFEX1GCrV2JKMAryhNHoHPYbw8tj7cLHcHi3XSByVdkUaHu6BJnAgyBz74H6J2iVUmbc",
  "key10": "26v3EJVRwZm9gzkakrUzhGEZMr2TSdLVWwd5MMXU4Unv3uxwPguBzDD3QCYCrW5DkketHhjHhyhZYW4Yea2vYPmb",
  "key11": "4sVxmtVhxWFdYQGQVnWU1SUYrahv4HeGBdhKYfDUkmHk9s27b3GDY9NjMS47JorUsDXD9bkZS5NyiawoFbGZeHSx",
  "key12": "3UiA19qSW2Ag6LZFQwf3QvrkbyqB4oWaHGhpiJtaJEHjHCjx3ajidswkTyEsidxdPeF4YmCEHVon1TaXUwPh8evU",
  "key13": "3zgnVEJY4pfbt5tEEJRqDkhXYWup8sCwvmhkXWrxZWBjFejr27HRx1iDxCjGZJAYiysXF1SQnywZm8QE3vQj1wpT",
  "key14": "7RyoKexeM3kRCrZqUiZQfffUpjJqkSMTHS8UApPTejEzZVJmJAaZJKoXF5th6UDk6xRTgpyWqKBAR17vrNmVBkX",
  "key15": "5PkSpNYvsNj1cunXsXFjbBjKUQemQ8rdwy6AaouhTMtZbiQ3GjWXVMDMriB76SCqed4soHiU65ExzduZZg2SnNdA",
  "key16": "2EiqHdi2txdf25qSjfiLa6b8SjyHVZrGe8mRQNjzQEXf5CDsFFYaGSAoEMnJ5n1aFTAYq6e63CMiVtnr7WKJuApv",
  "key17": "2JiNG8ZcBrxPRLsv2VzbzH5gB3iLWRMBEYuc1rgc1GNMQmR6eZbzoK9BoPoyAoV9JeqSBTpWSfYKfywnj9BdXG55",
  "key18": "iJqpehDet5oJrVaSjUyRWuFxBaTVFe6imByR2fEVrcqLz6SiL9mCrG8s3aMn8QSV6N3iNdQLEa2a3KUdYNj8vDS",
  "key19": "5gd4TGHrrPBBoE8zZRXNWxMb1yJeiG9vqbN6goZDWcXkb7hgx9DriYexqRiyZ2DqhscfxZHvxYKwZUwwWPRoqoAv",
  "key20": "5jKPh4qR6YKQbcXQ33DC8KRWMafjWEUfKp6pAuvfPZksA4LeeFfV33z3y4NZ6t9a5Qho3UtoZYiNdoG52j9uWGch",
  "key21": "61CLh97QGEaTmM9Q16SE9Jm43TztaZzpqKkZMTEPtGKvd1Xpo2Dnw786QMiHjAJGv77ejBtSR2vgQsWZDux2NtHq",
  "key22": "5ot9pco8C6iaQuUtuneqnCmJKHB29r1DeEoP91KkXUodNQAHsoUCXzhV7Giz5RqMJiCDyJ2MCLLbnXsfNwNWNwot",
  "key23": "4rem6FAA5cdf5xtjsxvmcpZkSezF41fpDPwmSpCfYjV2TauNn6GSU8VcbCvUzZ3ZSnLLevZGCJsc4XBs58YAA8Yb",
  "key24": "sMQmy5yWkwkMpBFQ4XMbmdjtTud4GLXFYMkzyjt4s1AnPEoJnaagnjaKKujD6ofzb599ZeTQBSQHk3gbGgBbb24"
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
