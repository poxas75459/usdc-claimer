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
    "5wJ2KS1btaX2i6cFe9QEEdbHxkD1xr8psEaD3xtQkVekFBawGberTwNsqx4RkN2KgJvVuF9oafq3JK5PsLHz23M1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QVFihq4fgvZ8Ei6zjW2WjFoLoyps8ZxyEm9XjccmMNqjdNT8pRwyB3GxLFtonjx5JQu4MJQYAVTW9TB5FBonQBm",
  "key1": "4UxkLYzNf1Quq63wuaKomja8ix7EPaHkHB4oPCX6qFsW57bAUZ368jbjDwwGsk1Pabjec1NNr1kpFvJEbu3TY5yn",
  "key2": "4BXQvm7BfiL8hbzRkSmL4vKWkaTjYSQcqcyDQ3e4RuUFa6JHcMF3rphcj3Mw5UT8Bk7yYxAmG178Hq5HG8Bxnovq",
  "key3": "3ERL2wUiTaRFVbWvbH5MEgDx6McYcURQpMAKedWw2HkfKo1AL3uQkZZ86M9X64AkWfpixPn3NuXBKDigchJfLmkS",
  "key4": "3ZverWJYmVCbNLjKsDLBqPkJqb9C3S2o33i9miejEDzaCCpJPbgFroCEysipd6LFMjzpmiGh4q3trGPTYws9z5q7",
  "key5": "3uMVQYFZhYWKidQch21f4QrSK18XhiJ7MKtBDCZSA8T6YHcs98BvzukiLi6GgpWq6R5p29WKSuN3UjnzF47vWzyM",
  "key6": "2w3vgeeEQZNnuzQ7s6UECpeo72Ri2v4tMXjhzMpqGb9BcZYcJFykpP7NTzAMsUtGh2nWZz142X4fPKKkrsiCWk4v",
  "key7": "5DqmwfLGHUyV53ma2HauMsXaGL54DSDfgRUTuLacs8EchU3MUtq6Pwv8aqh23G2dTJr23XGnf83iu8a7awmL2qSM",
  "key8": "3RUELLSJhhz1rRs5mWJ8ETuJ73CueicWD7ghdeoiJMDRn1nQWpTJ8tLxhZfqyaPgjkTQJGxaS45svkCzCcu8JExM",
  "key9": "5zbrQcn98ZmmjVypvHADtp5tpzkhhvkAU6AF9NN6kWMjxYxXUDiQ9aSypYZ56rtjmQH27kfkBMAq97hhSC2gs6jm",
  "key10": "2BdZb9XKBMH442UPrUyqmfpoKJd3eo2NyX3saMmJF1PipiP7Jyuck5g9KbGc9CQJ5LEvaj192Qg4iGAzYvXfWBXf",
  "key11": "3M71TUKiPN6e3CERmEWDdjS5uD4e6E9ZP5oAEsC6xn5LjVmdhTS6XsHhDWH4ExmruYN9B18DDphNHVj96CLBiSnY",
  "key12": "5YmvERvHJkSTJzDdNdKcLMKfDxkhKAALBk1Ph6boHoeKsrjMZysqxUzxjHBNsXm99S2YCVfedVPwHHY56gdhR5sS",
  "key13": "4J7RjRsjZLgc8MtDWH8UXFkNavVtJNSA3B28Te2FLtCb9BJDgBzji11AMWvNUsBnLXSnF6HhfbAvNtSrKnUHyGJ9",
  "key14": "o2Jynbi19w6MdfzQvmEyJeB5NtHHiePGf3jFAYnt54Xp72LEgx5nWyGbdekkE8QZ4JKirbtptKwLhHwSJw6v9Yw",
  "key15": "5JMpq7WL5MXP7pBkazngxBjrsWprNFmGBDG64SWgveEU6gnY4bmAVTMBQ38sj45BCmXC8DjPgmVjH8DeAKJC5SDt",
  "key16": "mUrngJBUsRVbQAX1rYdazwAoEzpbdU1fsZzbQjm3dmaEHrUQm3wcmtUVkySKKZ1nmgVReQe8cETuDcAvTtv1fao",
  "key17": "4qiGYfCEBpm5poFcWGAa7hziBJPGE3C3nX14vePDh5BoXJ2c73XqeLHjvrH27CH58oTAsuM5y7NcoBDH1SRPZB3Z",
  "key18": "3FxNCHcihtCj1eWoEziWaReYfT6zcZTtVx2rnU6PbjWbEwTa5zetnSicg9m1NCLWC2nVQJbZhB5hXQ2mwubjmPNg",
  "key19": "RvSvo8ssMW83JFU5sxXUd3ViNMXVhSSF9bCQerkV8b1fFfeEAmmARPpnii2SiFemJ4TXuPEDh5ReZD5DP5H1c2b",
  "key20": "2kzDVaGDe25bF35kkRZvv8kyTYaFHNSRP7TiaRox59nsqX2r8YvS5zrH1Jy4RKPrs57h4P44zeG4S4z1kVNrSuBK",
  "key21": "2Yejcb4br7EuRZDiwZ56eWB8oEN8U8F3Ah3XB7XhaxVvFNWQPx4caBxGrS5Txsz3hE4DqEcCw7XEoCQ5vbankBkq",
  "key22": "2u3wtHgKL6qsSaLRGY8DM5tvvSgHQu5JBc3FM3id98hULkUN5TJnVZt4LnA9tqF6LJ4B6WVCeZ7ZqartyXurmQBA",
  "key23": "35t3PfEJieo9RG4RvSWJ2ttxwJ7ytZMBmMD6gkKvZF5aPDFi9bD1QaJsZcxeXkS7S5YvvhXYQXXE1dEXoFs6hF61",
  "key24": "2WY3Hr2HMDw9aMGkuqo9mhYQFQRRoPmJ8Nk8uavXWisWeEPWdExFDS9sZbKgVoT3ZKjwFo6Nqy4sqSEU7jUDE3pX"
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
