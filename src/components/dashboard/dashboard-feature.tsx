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
    "5dXcTeHzKchMY6MvB5mELPSTKnjaLMAQGEdEBjfEjgd4B89nHewkgyHPZXumAFBD6gN3yHyMTsEX7qrubEWpXTVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbz3PTKDtzSiujMujMbtPZAq8y93foZKJK43e8s21e8zfqswgo3kKg3Bb54qw2ivKAmtgB7M28r76ytvU8gPJCJ",
  "key1": "2vK2vZ1jF25xxng8hcXGZUGqKuhHdQbZR2FzbaFY39xYaCXXBEoLB4FsCZVuNvQnrbmdiBh8zYTTbC3K8zRVpHU4",
  "key2": "3dEjs5tAHebB3dWudUaagaEzCqzZhTmJTPHmZZjG7iqoK3eUNY24BUYUGTi2o1GgcaQoBQN5MeS6ygxbTkQ2yG9P",
  "key3": "455TK8bZcwPa4sjRnLG9tfcfHoMfAwP42Ykn4DrgxjEoB7j2R8YFFiZ56GXsEWGfU4y33x8DuVP5mGsMofg6Eo8C",
  "key4": "22Mp3caqPbsjgWHLKcafHVsYyk9uvPb9jLQGmKNKTY6cJCZTxosz4NDGiiEP4xN8wuXpdPjjndL94xP2DHS3Uko8",
  "key5": "2ZouXyHqD7KG2kw2cfCpsQ34zNDWCfQbWURZWEXWTxymn8opvoziBnFYK3xiGzfMpXTztiCMrPz35n1EAp6SaxjQ",
  "key6": "29V453WCcbT4e7otTvpKZawYJ2kB3yvGeVLkrz4JxuGthEScf4yRmLePFaBTsXnaFM6h8P3KgDxUQVMwETNgqq9K",
  "key7": "F2WVWrBrbMuTYPuwT1L4GxpGY6nQf7eUULbs8F2ZSdzesLCTpKhkkdN4z5ahz6oNH1SeWob9RkPjkhkbBfamJiw",
  "key8": "43s49Ef2B96cge57frUHrebx2EvZcik69yXpsJPowoHkEkv1LQZTFHHNiAPjr7R7TKEr9yH6RSP1jqWCEPJBfBGm",
  "key9": "5GF6B1rRLjruEVcKnXT67ZYEQJH9zyhAS7JX595Qkx2Wt4HCVUizbF29mva8seCVxhvpfBHjQ8tyCvynELjL8PKf",
  "key10": "4xxG398f1MvMNcDxhgj76orZfU77o1hLvKumgE8j7HDU84JuSNnmfjJg1KgMTfjD8htwuoSgYRckyb22TefAwqC3",
  "key11": "5KXhPdVzaVrVXsfarkoezAunwzpCo9ZaKpfdod34CERzNWCJruPc1xjBUpoXpwYDCP1sZu2AXTH9mjMhXMbJ81tf",
  "key12": "5tTzs5T6tYV87tx8VyWdVGDocsPTNnYUniFSgnTs5H7ScVMeSnFUs1M6MXe7zezdCbd2UweJ4FFMFdQiWnmJnsnS",
  "key13": "4yyQQdaRSu34tK3Vfh1GEnKSKA65jw8wfSZqmb8w1bfx6Dpy5rPydfhoK1jozppVnqzMt6DrpnhAeBZkXV9hqsCS",
  "key14": "5FVKLsFu8qGqjoX5Quj8zbP5T5VboCJ7X6NqVmeM5D2SxPiF5fd32bUMNg7UBJYiwLfM8L9aHZen2mDU6gt4gDJg",
  "key15": "4td9MhKptiFXheKEzRdvgpBErXZ2gWvr15h7C5AVuW6fe4KGh3fmkCvHs9AA2NbWq2Vm6Mrpkxzh3nbfbrWACHH2",
  "key16": "5UmncXachD5z86Ao6EyfYACxV8KAEmt4Qt5n9KD41x68ddiyKgQNVs466TJ2ebvXeAPkqsHMKsdVJ1NxLsLF3FDc",
  "key17": "63pcH1hNSrpBXv7VicUa6v5J5fsT9UV4eYuNGvMQVSvy4UmwARJQGYDuiLP1uAD9TXZ1vVEtzp666mbixwucb6sf",
  "key18": "VeKqgZdpX9HswdPuUJL3baKqzQ55S437vKe5tpCcav3ciC3gYXBQXsSK8uhnHgGAFywu3meFYqwUiP6Hhv53WTv",
  "key19": "2662rJM54RbkjXzHbfRihwv9LPxSS2eyGHMKeKU34g1SNPg33bk55Rqukn828jHrfJznmpRzmUjTCcbLFX8NRyqd",
  "key20": "53WspLnSUk4jjSFNsGxaDLnH6Tf57nzbttwq8sEB4aMvBitC8vBtDFuZLtc9GsL1qJcdmycfWhDSinEkrNYbMRWq",
  "key21": "2S6DPa2BViZcsft4HgdwhctymsQ3tCFm46RHXukF64Pbhv2fnFSGyoT76Cd5r9SyL6YCt38MCK2Vu2Dq15egNytT",
  "key22": "QiLA32tq5VU5nBYfvWESkmYinFQN9Xq9jjk7AggZWTs7C1nKrs4wwXX8ViMN2ryJ1U7VFMqrSuSLn9N44qkwaqy",
  "key23": "3GFqRYsh2K6Fam4pHehfemgYmjLBhcF6Lk2tEr7XBRtBmztVY9TAPXX8HRKLDTwVVJFpfDTnS8cfHu3sCmJhNfew",
  "key24": "54XWfjHpkrKCpi353DF4aAFzsaf1mzMTLdBdqjNk3EZpMeJbNQLjwPKoVFm8ioBHrS571k7S8fASiSursvStm1mb",
  "key25": "5pwpFieX4Gj2ViLZkVQL983nTNW9LNYxmtSCeZYsvXAz82aJ2nDBwgHyhZ9deUpc36ZBPG4QBqdejbuj5nLZFNuY",
  "key26": "24HahwMLTw1uEKLwpVe13peQmrUUPxJou549Pj8NtXbTJveoDhxnsxuGaq1RKdzgFhpWDGR2ytQoUuzFuEkVqVfj",
  "key27": "4cnWxwZVMeKkMLcG9jE9P9S8vt2Fejb3rgwhLY1H1aYZA9ye7BY4Y9f79PZjSWExQGWL9u5oCdaoMwFY9WzfpBmY",
  "key28": "NLVJN7qNzDUCpp7oYxCq5WJXjwSj3hZr78mamYTkr3iGBaKE68Ztc7TrtfF2riMimzdLAiVYyYNVQMtHDSGwHdH",
  "key29": "31XnBzwJLLsFe2fEF2xu3fYhcHBaaD5vE5daQ1TsbqnoGwQpJYjda2XXhNpHnPMUnR2PEsBvqned1pzzeh6o8YSf",
  "key30": "h3TZTvJfGXhRyjeUQixDFYTWkqcCVST8CBapx89NRx5QQF7CSboGGb48ep78TFRXCH6Rp9zt53wetYwZYVqdK8i",
  "key31": "62V2uRUymPukiFHyhiXwjrPY4moCmkcCHZYps8Kvo8vdUbdceg3EzfBwXQ7StQX2wD1Uq33YVbyNNVcg8R1eWZWt",
  "key32": "52dHTwnGVeiBi7CD6NWZRF1b5dzcUAe2fZeENPVUSxG1nt3oLBvEpHNfK8T3rHTqq7dMwLe4dXUMbZ3XcpysvPLf",
  "key33": "4puB546cSyDAmf7Ft8Porbojs4BdK46U32jT2D2gm33fG2he1UEyAwfhivfNuKTCNCnk1EAbBu6tCqh63fcBCR24",
  "key34": "o1M2XVTAknM1ej7yT7oZHi4JC74ZzcFG7JBZjVa3a5ZXKo1FyaFSBfnXPwvm5pgiEdjSF7D7paFRddnhrq1kMMf",
  "key35": "5FoAWAbGzn95o5UpYSbki9SgQiX4EuCMgYdxXik8VKquFarQVsVtuxjUzDNKKkXscatTwqvEWNgQkowqpgPW9GTj"
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
