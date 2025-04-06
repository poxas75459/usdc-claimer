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
    "5Ycj1TKNN62VsYdgTPihbTXeCizA6BgHcBdBAGdncjgQv871nCuTxwBCyQ5TBa9oLjiHsVUhS6bkQiegb6KJj6Bz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jN7ZbRGDkSpLMTzyETkjdJWoWoSVyreHUbYUWH9KjLd6uogP6KDNUzL1GTVLA1hnwA1jeG2kCXEzvZ758r2xTXz",
  "key1": "23sDFpitojTH327UFZwUvYjhreGtVDRzpwS4TGXxqmXSqhYexx4ikwTtaAXHNTWMF9oRA3Bbh5LiaSSdqAALHPXB",
  "key2": "3epR7ByBaPwY9WpzchJSwDKZyiTq42E5GDP6so3DH6pozk4ZTP2oSDQKfHQB6mwLj9rjW73THnW7JVJjuHYcPdM8",
  "key3": "2dxGUvY9T3RYVzEyLEgxHkNLAZbdB7s77wMZ6K4C6eTREs5foSgcPjYXb24yrWRTZmv3jrbVb3Nw3oibRaJWRdgM",
  "key4": "3NGnNGwfpCYhyzjwXGu6fQtop6weivzLKfaDtiByx9ZmSmUo51GTW7DRV4fsmUNNxusLKBeRzbk296Jt73waYLLk",
  "key5": "5c17ttkrJw5aDd1FrfkEyp1vbwZDVA1Z5CXbQ2kTfzCQJRsoquB7D98G1uLVBYGSpjpFZKRxFhTNNg1ZWazEG41E",
  "key6": "2FcC45hFfNeR5wmxdtWPzqgqTAM9EyLH1Ko9BLfcZzWF2FeAxixD4q4fn5KRKEJjtmXjZDaw8wvpsoRdd19wuNKy",
  "key7": "2TSXecWh89cQ1RGiJDMzSh5mLEu5QGXvCujwZ9FbWSovChFwVYsRp5aeiFZV5SmJiNboWoKRtbGAErM9KXkoUa4Z",
  "key8": "3kss9sytWPLsABBzGQqtRXUQu48rRNsYwHv1ACCyRgAQ7QAfRmU1XbRNThtaHxJQvj8GCtdfpv2NerdtNjYHzt2T",
  "key9": "5gAiNNdgeFjj9ACpNj7eDscecrXbDkP3nX5CgHaju7zWPBMaMdoKSfk4iCshTzca3VEwkmAHK4EimXq5RX54UBFs",
  "key10": "54iAo6jXJ9YWtXZUNKNRNKiyuVX45kSwMxZPS5syj2a5R8tNkGZ54DtzhFRb1hqhfkViFkxsrxEiYAT9EdALTmds",
  "key11": "4Qhr8xPeoLjQqVN8zwYE1toXTUPW6TJ1fnrLCscSD5RvDabj8UqCXanVTRdtVDNU3onkJYYfCtbvrQUUNs3KMQ2i",
  "key12": "58uoRALsto9a6geNoiakhscoWo6yz56FRdWZujeuniipHgmCwG15zFtcH9F36sVksUM8mt5Z7Lds36BBLjXjkWaG",
  "key13": "3B2QV9cwsRJrTn4iF4enmKqMxXjqzoGzPh4UZjhP8A1FR5PbowJfHZ1TrmjRDNUf4Sqbfft456gsymg8fLhjgFiV",
  "key14": "4Tajv8VbR9WjmH3k4mqC6jumte1kFtc9Jkn7Gh9TA9DGy4SUNLamLnZGVRzJ5uv5mxfUYR41B9YqfQ2uB5NEJz8S",
  "key15": "CARMR2bLqq1SR1AbSxwWNoAhZGQKcudStpNZettpC86e5j2GWvmKkuSjyxWeCL4PuPQeJV6oxuLmMGRn2wy3jpB",
  "key16": "4fdDosoR4rpAKScDZLSVcNLuQ88cfuzKUAd2pj99MfJSKowDqh7jCVt86aZoAXUq2xr3ugrBe16gVo7pdBFPnBJK",
  "key17": "yNkj32CDeoCq4zgM1TBwhVFhufvnWYzRzk4PHLYStcq1kJFbTwAjqNzcxpBAVpEfKbXTVYEdkB14z4YLuAf3XmL",
  "key18": "5WbCR262RnP69DjHxYuYEAcGS4D4KTeMf7xhxnbbNe8sZoVF9m7EtYY4wGLeswapB4fXsCPiq832rm4fu1tY85bg",
  "key19": "49QwfdS42chfZXyLf3ZxaHydSVq2EStXYNr4WqYnKWC3YVGQXyUZq5zj2yiLmAMHKMh7N9Gpzfch1FTF3neFeASJ",
  "key20": "4oip2Hp2vGm7Stc1YHXbfU9WEjMxNMcoXZaHPz8uQGFhfZramzdJq6B8V3NHJSZidv6X1FLZneeuk6xRTjvJeALG",
  "key21": "2tywG6LVeY5fCAJXgcohztFphdvuY5To8VJGTGhkLSF1Z2ozq9hhfTqicKLg9tTwG4RU6jyno3RMDMTQeEC8oxu",
  "key22": "HWG1MZb9697yxbuuLyNC4yv46rguUw877ZpAZqyRGZWx6yhPRK6ombBz3T6TzKyh6SfEr39u3KjYANhXdv1aYTK",
  "key23": "5DCZBs6rg7SJkEmtbmD25Q9tgiwhLJ1K8H3AnFLGA6Uj6xyTFXs1StgcAGFrfH2zQMj3F7tmLpr4esSXT7rAd7Af",
  "key24": "5osqfFAkpZDn6qQnyd9C3fUvd9SbUQwtCbLSSMFtbCWJcCzeSm6cZ1Zr3D5UV93YBWzMrhoZP6yuUgr8nNU3eT4Y",
  "key25": "iV4VKiaZhgkvb6Mym63wqgmneYdPJvrgzKgoHufo5gkmuapYTAoyjoCMg4XMoeJimJTvBi6vuC3EBJCjLzdQVFx",
  "key26": "48Z1dFUbQnopF94dc7wXZkfKXuYt98KGwzMc72ZReiWo79Y5foDWsLLz38Rau193htHSboCggXDJ1LehLR3Soq3J",
  "key27": "FDwPvGc8tidfVWGYyrtqwBn2zuZNZ3N5QhV3jB2ir7zWhYK3aeYRJkTNRjkdFh5C1H3p8xPUo42fVxR2YmWAcYX",
  "key28": "25pfgcn1Tm916RAmNEhzKohfkyw45LkmFSb1V69efUmwaKr8j7DvFD3i3zpnvCfHV6kbD97VTeEzKUZQP8xo29if",
  "key29": "2mds2f8tycYWVSi2thTMKLjKA4pnVRMbqpwbibw9s8XHijAqZxR1qUUQuqfjw26UHStbA5FGUsxbRCR5nRpRw6Ji",
  "key30": "3vvSxyoxNGJtcv5gqMjDk1A9xfeHZKgZ6R9kzxi5D3BcM9bEki9rrEPKM76pZ4zz97u39Pju3MXWQmbTRSTWPSqY",
  "key31": "5xWpRx2pyw2GSoypwEC5zw5idzpkMEbksX5eNZhZQMauhAvzpZ1dr9P9CzFegLqqmajsKLsyXtXBpWw3QtBzHKd8",
  "key32": "4QvcSJT71otMvFUp4yq5w6vCjWZgBtK8nrB1a46N9eFi9MHdB7eBWFu9c3N6LRxm5zZCnTbthH8MM1QcJPAedmm5",
  "key33": "5cFzX2b23YTqiVhYKxjiazjs2LeMeLSZYg34PxMaZFtwVSUNVVhctX2pAm3ey7TMorUg6J5keAM2HoTheAQCywVk",
  "key34": "f1XZ7TnFnQN9oLjde9H62rzzRV7zAHTJiSE9QPH68tLxgSHmQ1NHSVi7G1SPcVLkGwe5wYifFgLq5LTSpzAy99Y",
  "key35": "5HCjXLKviMo9t8xwCNsZ9ZbhesTRbZxseA9aNBNMMSuweaiC5yqoBRWFhEm2WGvu6GcvFsN7ZfcwqurpQKqouQqU",
  "key36": "4qHKYFP8S3NUeCZinVSHLa3kS2zVySgVuVBtgVEwoTes3r5sdxti7QdeGN97MZJpevxAYBXedfQ1eo97nkfXHXRo",
  "key37": "2UhQGxUNoSgYREmCb9JtSmee63vabRqfXvfHoYnMzZnpt4rvWwaWrUhaFuVg59qJMUQoC1UDi7h5TbxmsaNJCqRh",
  "key38": "5YfSbwc2YQuDjvYVvM4GY8iqyrQr81kfLrCXQmdTBWWWgAUrDi8nGYjciwaFpCq4v1TpqFjHsBXeBVQoihGHqFqi",
  "key39": "5uvbr3zMN1wWnWLqoCBgcaPdSe2CVUtdmCrnwstLPbbcqpLowrEhPKfWuq9bJScedndTqnbyX6xL7DGMiyoq9EED",
  "key40": "Wnvf3Z8wDJiFvgve1BD62SQjixRaG9captsi4NLBZWZQKFcXMZGmKmqhewNr2jA4ox9HNj6sy4VfpM7CWksoZFP",
  "key41": "2a9Caz9MB4CqoM8HEcdx6yjQAymUUNMZeB6GeKwDX53JEjPC6PuBskh8Xh3yyPhz545noBXxgKSFRYi1hGR9tGdf",
  "key42": "5LMU4GZRba5sgEgR3Au3bM9cFm7QUMmXAPUJoZgAzwQTrwRYEbcRivjWgpm5XjszLxBv5rbdA7a1svU51eT5wo78",
  "key43": "2kvDv8f7cVU3wiJHLVQABzkeVGrifkEGpMABf1eLupk1Wfspc2JHW8njYFEFfnmZZpZDVUe1EyE9eyii4Gfh2fbL",
  "key44": "2V3nhHiHbW2GKo8X2hNCzr8om1xgKjMERbQa5ybJBV5QioYbg3juALuLyVHWdy2XQnhLUrJxVSBTyJe6Fmfvzsce",
  "key45": "7YDyfdmY7KRrF9ct5qLThK3UuGXQ8rGQBV9wfCCqbJRqtQX3pDM5afcJgbt8VnMhgpSRzRpbWDJ4EngP8iJkZXj",
  "key46": "yic8Ak9PJQnun4xKYopZ1W4HxXfHjKss32gCzuoaUKSfQnbeueJkDf2HnzLT7xtLpCt5L7C2peAqhx9HnQnjKku",
  "key47": "4oCSuwkYGuk62S8s4YFTNwfVYMb23HRd7XAuSSTegU2w9QeqzVEPiTREdtPXJ5Q2ak7gHtrgk7ALWpesNL9yGZyj"
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
