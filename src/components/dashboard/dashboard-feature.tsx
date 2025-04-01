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
    "64pigRuYALzyxsdapbGvVR2Ln8Tgm7tgy8uGN7GPat99YR24o2o1QyuLvvGaoWXQAF3VZfC2Xy41QyAPvyNuCb5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EmmeNW4s52gL1NqBPuqWYUAPwSPVd19TphVThvhFwSB4oX78XKKBjMUMmLP1i617wT41wFEhiyPEfH71RDTdzgh",
  "key1": "5XiZ3J16SGqsdz19C1QfkFTBSYXeKptGrFJtaTKjoViWuhgL38piiLjN8CJ4BBNMyW5tfg6cruTscx1aFXiXMa49",
  "key2": "2WxqhDLCvtWwSHaptTYAao2dDmUkNfReG2hm4Xmnfbv7NJaiQQ12HkBhosXHW6jLBq4nq2qBimpYiYTZwCm319XW",
  "key3": "3dnpMzZbMbdgVTKeRZHokaCSsndExdpCMS7HRmVkgNeFvXeMPZkK9c37tcy4zp8dFnTtyx7x6Yn1brxWzUdW73mA",
  "key4": "59ZpKGPrN11NeKyZfWcUaDy2czTaUiG93faQzUKT9tBHTh8nqwzcdB7AjN7ZnpLx18VJXLfjzCFMLKy629mntGKh",
  "key5": "65o3Cpaxb7XxR8bUwHD7JoFioGynpWW7tkBMpmnZjrzsiGh6AruXt8kxgw7RJKUoX1euWWfhb2RQRPbZh8RPgDJg",
  "key6": "4D5CjPV9C8q5vsGVhp9qRtiPjHSKobG9h9QzzmGEc7fVFWBiY8urmz8q8bBdYWRhuZjc9duEG9rDtH7APJD78XKL",
  "key7": "3d58gjM1kJPmNnmH2rM36ABnxQytfzVRPpxwJKxZCAd87pDrJe4D4cSJaBM98AerhxHKzGht9S3h9FpPHvcfXAeq",
  "key8": "5FYffN9d4gz2zudM1hLzMuR2JLu3tnYQpBPh89BPZXhjaxTw87e1vduHeXH7pQ2yvJmUYnsuqsPMUFbMq9WwrZuD",
  "key9": "61xqDJyNN8t4u7XXeP3UHGmxH9wGUspaRuRwfToMa8uGUgRpsUKk5CP8A894UAB2N4ftQtrcu5GdCj3ULSb8Aitm",
  "key10": "2SBmTwcKa5WCjdTUJngN1zM2rMtoUqSE7atoGrhTj1KxgJHm744P9CnzmYmWCSobSuezrz2UYaLXtVhXmiajiGCy",
  "key11": "4B1LgbYtUQv6svr732iEfe543MxNrEHQFhKhhyeMfpgRLMjyUCmq4BTFErncE3XZ25HyyrQhE6EctCiVMsXrgfa2",
  "key12": "5JMmeYVDj6fS8SubnBSMyE63r1M825pnXaVhekD8nTeeWvXeGg9cpb5FGLgXVAGHvvgNq9yPaQt4YSEp7aZwW37D",
  "key13": "3W28s7EEegCpQvXRUm9Uw1dt3AxM5nXWEB9kMvvhkUax8TrGegJzQ7e1vS1faLMJEr5ccSUZ1Jd64dSGRJ7jRgBZ",
  "key14": "4oNmsBnpcTxJBeeS5NvmzPfomDWfAwiTyjrLFtf4gsAY2DuwVHBHUgf1Ht7wd8XJQ5nue7GHiM2T3npfeVawNjGC",
  "key15": "4bvjEgwe5T7Kishn14unLeL3gn37mTCk4s2tpNhaWkZzGwvePeYqYpGk2Sn2xP3KcTtMf2m7VqnxqhNuvgF4Zsbi",
  "key16": "SjDt2SNaWwvkuQagrke5phwYtA1JK8BzgztbWPqZGrxysXQfrw7U5LqaoG2ZTwZLa9tAoH826Fcv6QMdNYW86XE",
  "key17": "4jUBpVrRRVFFcFhDdRWeZExcxrUm2zduwFGo1S47X4nNd1uHe3agDkQULtScQYHXojy3DTUC7JjofjBG48fsJJo3",
  "key18": "3jWDzG7ndzidpmZcf9ooZy3ALPMdu1VsduUiyiM8cuvuD9crNGou4pHuFgXjhu2NNbjfKppmyT4zWYJhcp4bG69N",
  "key19": "eCWgpsRnyBjvDCbxP94xgZjGCvZBzx3dXd9GbTVSygz4M4tqMcGbbgtyG6SbGZcLfgsfgzfqkjLcsBs9hpKHHfT",
  "key20": "3Lp17GGJAsEs9mCWEFV68P6ATdHkpXCNyMQWc6jtVGBKrh78nqQny4BogHTCW76V6CByApQu8P3cNiDUDYPk46Ln",
  "key21": "3t779RktUrsgS1FJiyU6WEVSvwCHmq8F476hoaxJVAdQ3dGXijJotEMqo2EUpYw2cmNrmPdEnYbfbqRaTRjvXQ6S",
  "key22": "27fJ2pVHZrqSuwwfkvbxcujk4wWhtJna7yHNFWb2diFZxu7xWaWGtGrsGfssDDHvn6bQfi4CnsNhMeNtRtHL6ekG",
  "key23": "4HtP2Fp95XbeZy2XnN8K7gXaR1VV6TpyR5YKAEfsH5872wG2oZuNu72LjGH4CmTW8fYhLSXsreLZPGMEzFJKLJuK",
  "key24": "4pVQ6pjPug6wnumme7KQkeTGZQYGrUqcnbnWs8ymrnT5QxkLEggVDYrVeJ1gdjJD9k16BKTPnUCt8MXKes4VS2bQ",
  "key25": "4yDMjpsmhzHeKnUsfL6AKp9dLLvzfjKN2mTqK3kMwLFZjfAnTNPzMYJRhkREpMLuP9KEFFjXK5FUgA5JoxVJmyyD",
  "key26": "5KzRnKRZA2kyJrqmbEZVzMcaU8QueTatrTmqvHv69DiFuenjfTmSDyVivfW2UMYEFsM8sYRPUWhRZk2L9A998Beo",
  "key27": "4S2zxypFyQrRWtTSJJNmnSG6YAH5nJXzmpJCLXyWXGEWND72ev2GRqnGuyJZqKW7PXsg2GzFCxBRG7utfDweqrwD",
  "key28": "HrGxCiVAnk8g8k29twBYeN3gPQDfDgXZyimuLRyaEbQJ2wYiEJHWMCfLSkAWEV6FQnR2putJwbrcbGkCmrPMtfL",
  "key29": "iTjqmnrEwxtpM9WeHhqxpFtzGHwcRkm5xQxdhq5xm9eeuhim9xR66bE9Ae5YVVK2W8nnnogPiQArMp3ykgGHXnH",
  "key30": "53GiWfNJtpj9whSaeCuYrakWUdpbKQSGxNkKVQ5sV8K7JaRzKGayJGSiKv7ZmCaXVcD7K3svy1GvPfRPmdAXopJR",
  "key31": "2CKn9SBeafMdFuXfwKSNVmB5Y69foU4kKbkQfaZfyi3y4kMCsPK1xnsxMKmuNy8xmLwtht2Q8V2u4cZYJWG5cVbD",
  "key32": "4zLEELJq6WasdH6PkEkHRBzhy3WcE7T9oe8At1KGAhVQDQT5EubbM9ZBc7AutMErUKhSexAowmYAGmUM2cGS7tF",
  "key33": "5CxX9bb8ZSZxDbZS27B8HHAPjiFi333teepVgBy74NewYQk2QwNc2oM5zpqHmpKVbGB4iwrEQDTFiNuMQubQ8Dp9",
  "key34": "2PHM35pBwEhUiiQDeQYWMUrGv2oiyYTHuxxUFs4HMWWxmkZB5knEo9oW4RwyjqrJvEeSNWJdFGioFvVnHqd6uY6U",
  "key35": "3tTeWUr6cmi9inMCrMpwCt6Lmy5Av3yBB9EtNT7Y4uyJbcJU9fnbiFY5h4HtpwMFtXsCwZ4qqHmFkWqB6gtXvuS1",
  "key36": "2csTk8Sufz3CzZgwsq2x27HtdsLicgnSjkgGvVz4v1nrzF5UUUYnjMtrMbcwpmg58qTAbVd7Go5AEioD8qqHWQ4j",
  "key37": "5xwNxBCJWLe5mPFGk99yC1b7T8wnXn84iFoffNRUzupbCNhUE2RhjAw5EDHHacV9UA9CGyV1ES5HfCuEmYpcD5zY",
  "key38": "5GFehVLh87DSnX5YCTmBc4JUC5U9tTNSgaUoPmFU59KJpQdR9EuCdgMURE5iFvhHNxfqBnowzN8WuyrZ2z6yaH86",
  "key39": "2B7gUmvH6uBaksoUXCfWreHSRCLYaypqjRB7j1pBJKeRLkeACGRJCoH4YSVWoymyYQjTtyr35rG4pmio2auaaa9G",
  "key40": "33hDz9dnvMCuVbJz3TuS2tPLGrb4ca59M4j3xJaP2VVi3UTAWgBwbDsA5UuUrYXDhTXmQvE7osweh91bVfdB16RX",
  "key41": "3vkJ79EAaiLB47J1Hv8fJHRcrmYKpi433Ttnz5kFiQ9uU2fKSS3hTc1APJHjbaKySBpJDUmugBGYJY8fr5erV8EB",
  "key42": "2BQGB92j8uw7yTXiSTZitX34262yL9Qoz4rwCcexkwutdAM2FbFkZa4J5EfPp96teMUJYTKe89F8kSPH5kAamBHn",
  "key43": "5arHFLfyjKKbfapuQopcRnWMyzv3HE38ebHnN2H61jd1VV7DpLaoiWgTWyC7UWSE9meMC7jUb9gmcQabvfSeiyyS",
  "key44": "3efmVvArMDrzHi2NxeBX7tqLYTbpBPrt3NutL4y1QLR8fBXKLbRYSyDJoJ8AWX2ErjhFpdGgmidf154FHgftXb5C",
  "key45": "4mXSyNZnp75JUUgb4aVPuwb4TXh2Fo6q8B4Uny5wyAi1JdEkxSKVuUoeoFB4Q5fnU1uv6YqVZVNP5i4VnUP5jErm",
  "key46": "2znmmuN5Gyad7VYbRpDBZeVWGercxRQchga6KX7FN6KSFAPkBLaVmDd7kAzBQKVhW2Wzh64YTWwGLeEFZD7aNXUZ",
  "key47": "3TheXg1mh52agmSppVBxDXgksQw2an4YPogarVBACdmCjW5GxJG4uve6zMMGChEXuRpgQUU4DEz6HwFEketRPTLv"
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
