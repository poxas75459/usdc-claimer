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
    "5v5Dt3ZizQZjejGr5rT3bbi4dx1Fc83kRf8GV52pZvysfZ22oQTo6XK6SGxpYmjwKFdieq7LfzwyAX5qC5yVubhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BoW4YXmouNasANmJEZqXqLX2GpHf6YbvGBBzFcig5HDNkksgfxruuzYCYr6ggNGThUf142L6WMx2RyYMoXwQJ93",
  "key1": "3eGfxyts7p33dnYat41Nk8BHHfmATWttJuiek1FBpmFawEesMhW5i2ZC9EMLk9cyxZ3NmYCe9LPUm1n5wJ4Fx5YU",
  "key2": "5ZkEAJuWoYvcQrVJCAa46G1p1LMpS47E3sTuewUf3us8zkTW3eXBT5oQKWJYdYiU4qPtpLDRe5bRTqEQ19jkipts",
  "key3": "3yMg3foaTM9snhdWaHTJtUegvirNyxLcebQLu3nPeqeKwb7NWeWfNURvpehNgwmEisYQPB3mCEhiEd3PZC7G3vN",
  "key4": "2xezEVd94oiQBDi6SrcE9HX952chqUdNJ52FLWXxWHADL5apBMgmpvEQxpRCW379zBNCXgxBx55qW6a4yawVKo7t",
  "key5": "4sQwdTA1C51a2WdnKQuPsUNX3EuRqJdk4dgJkJtSnnLfMoZm6R9zWSUGraCJDn4PiKKdn7J2mGG3zd1TCqkixVAu",
  "key6": "4fLQVsPtVkJyjpivzm7dxiF1qStwGswEHi6txMtdrQ9XLoqK7T2jcJqu16sQbhwoTjiikPJNka7RUusXVdGvaKsp",
  "key7": "5o2zgjjkhe3LNhp3vQzeEMBzaQXJVjXAvBpyjPcS8XCAV3hkauFPGmX1keB6fXgNwk5c2UfiiCesa2noynZzAFs6",
  "key8": "4W4FAq2MRvfVTVhRCrbTBt3mYnU2UhEsx7usxwdUVvnscSQo3oKnyTMXBG7YZR8QLDNxhDVLvNyxcmYdkBcTC4ne",
  "key9": "3Nh7vuFXiiFZRQmPQ8Jn7HEVAp3WNXPQG5TR5rsGjvLe8DA7NWsPj3MMnA6JPYUhzvQmSAr7KaiB3hTiGeKRXMhk",
  "key10": "4d1jChFDw8jGuuGKXb3u4cSvMUihCEcuQNF5j1uBonXx5CKrYYQKSHPGzjeZ9s6LbYbNkyMCbs3iKQCGFh8kojag",
  "key11": "3jz1ZJa3EusLq9H3gPHkfmqjHixtbEHjGMKkWeBq5sDiHhKzFwxWmKV8BybM9jk1USxARdZ7xMmijQ5AqbFkuDyh",
  "key12": "5BMVBDeC8gx1fr7mxVzuAPexGiwzdQa4xrDnrB6kZ1r4WiQSswDHUnh38287R53du3wRdYVvpAev9XPBH8dLuXwA",
  "key13": "52P8XskQf4of4JMJQSDcQRJCGmx1M2C3u4VHT4ossYqY4bmuwB8EaXZTCzrdTX5Fxk89UQiU7ARr88QJriYPxoWM",
  "key14": "2a9jd9raVQtng8HSscP9HqHC2VvH7mAM1jU2mKCLzivyoA4rk6cYEerx6u7og3VrNWqbwEb9wWhijKRxVW6CCSBw",
  "key15": "d6fWWrhhjs2pjwid9wmKpr6qSfvBeCLxkjqwp9BwK8BWotjyrrjXBFAyNTNKVN5GuQBttyXT6LotupmuPGvJ7LT",
  "key16": "EUyCyttZYa1e1YvQ1Bc2maiqmtEggwtrJX26Xi5MHvnANAog1aDSxFkTJ6pquCqFvYp6Bv1s2b6CKSGAgDikhi1",
  "key17": "2k5Rhx94Gfdno5thYvJNJ2Xi6hLQtSuD5Yc1uEe2hiy8MFE4XACfHGoJCvLMD4yobzH8i63vst1ETXmzRP57PSw6",
  "key18": "JyhSwGU2Hr6T25X4WTxzWGCHvLGFzhv85mmMke3npK5NYq8HXma4tHfxmp82J3b5s3Y9VCGZwiuv2daVZyiqB9Z",
  "key19": "3bgPjtoFr3Lxrz4mobB2NEECyyV8Boj97984hxN6S7xVb1wMzfzp76YWvvfgPjdqRUmENsebSxnSkBakE47fSDpn",
  "key20": "5rtoM9Uv9L7JUBQfcn24oSHi2ZgdWABhKhUvMcrAwhDdChJqQzfFZu8pwUuyr4jeXhbohwPAjiU4i2DudekjGha2",
  "key21": "42mL6q3c3UAYZuS8URE1fw7VNMB5o23MRbWPgBh28niq9uAPdqh4fPyB1ip2VDfJxDmXscMRSiJNTT1Zi5J4ceVE",
  "key22": "2oTUGBjaaJj3Dx8ySLPFiCSeRb6thWf39ZqgCnLoykfeorWaZaD2HVFLb98ahD842t6UuzVmimotyzcgmWTJM2jb",
  "key23": "24DpQv3Uvpdff7TCRAnF8m8CBWxj37jz5WYtxFwMV6btcXtNN75t82NUKmkSZnbpyRKRB6evfNoiFKQBHx88s4Aj",
  "key24": "4XQs5nHB5FXnitos4JfCMKY5skdnF9QDbXgfoVKAeJn7b6kZpyQG3oiuw2xSF7teNLwLPA1QQrDnHsfawtC1f8Nv",
  "key25": "cJMwei7og6WpiQLmA4Ct9NvZbnHictfKWuYEwWHh7US3CxGnQFiVc7VKNhHBNti1SyKu5wZS7wGzDtKnQSTpe5W",
  "key26": "2UanuQDAMpL4GxTxS6d1pVJsW1QtjjPe1BUs8jri8E1xZHTTsgP3hfkxdzw9kxrJL4JsJxg3vUdM2oQ3QGkcoDZT",
  "key27": "H7MvpW7zH8VtdoNZ5FA8UM4y93EKvoKptK5apDearvdYFNo74wV18WgdWwchXVtdM95N64ke6aueG36GuHCXp4M",
  "key28": "3MCA7yLRmiFhzkByfWMsqpYXdPkTzi3AgVkNAwjivXwZ4aE9eEKq6vujTuV2VYY58WJTFzbfauN5X2cnVhow9BJx",
  "key29": "66qcsHYR7Vp9rnxmyeojk745EW9RUGRTsCEpzG5tXfKibRxh7F1vpZdDvizWbYkyD6VBPiXiuP7T8ngjmK1n7MUX",
  "key30": "4FAAvJ26xSLRNELXkz8ZvQpyqZxFAZ3pMZLrd1MbmUzYZsNKW7Cwo1wRrwqXGbpsJAyPhTb5BkiiXBuEAPNJe6mu"
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
