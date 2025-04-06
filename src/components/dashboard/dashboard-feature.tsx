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
    "5LyGwjZgDTZXp7pLniaUm5tAZwXW65vQbi1gFW8QDvTQSF9G3Dujf6xg7wTrNEwVcA3P8Ey8BbfEnZUw67LvkFEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66NNF3iDS4UNLjiJ9ndAbGFjp3mZrgNkUq7mWqEFWudftLpEQLjdE7NB98uTnr4pi9cwBthkNKrEdkJzEMNqcxre",
  "key1": "5ZSuc7g9gLwoRiLX13j3fDQgaVS3hdKjDZ9eKUFMkQrrnAqc1MTvxGETgLEySC6pbBhZsw7yXcx9qeGKzMqeVHCK",
  "key2": "55MshUHTHm1xvvgTitq9GELA4QMnXBnYgjv9QPh7WFtkETZPUgoELeEqPkzWd6qcKyXfXi22apyk1wrJU395D6Ku",
  "key3": "4CK5Bqd3VFDZTLRT8Lv5rZykx94Qva3nDtahCbze6uRnkCQmVH745ZdyM81AraAB8gCyg1KpmJuq468qd22HVnDz",
  "key4": "5Ty62dg2WttnZKAQX2PRfqWyNLnivxbvRurLvRpCYTM3YWzJGRykJgqWQeMZWx35Ph27HJw8prqL2ZreGy5Poozz",
  "key5": "RLRHhkie8yGokkR8E92hJ3MHS1zVumtg71mGbUgyb2amRWm6FfM4GdTS6yFqvbYXG4DPurihuNePeZkhkdgX79Y",
  "key6": "3zMZqCfGKCM2zaRpuRDjZ9Afroe2EWRMEorNGPLpYDTxWKE39JY9B9drbvSYn2CWXin367ZaPKdN4xVK8orFFAkG",
  "key7": "4zYbNRVy9nZe7gtYvKTRasV13qgwA9CWso2VFARN9S7DNYydDCnPaFN5TTYtd5BCaCqevDB7EqqrA9pxqKVsZTzA",
  "key8": "5iKCkLJUUXpGZ22eMgaYo3N7hJZboTGBaposxG7f3Z5CwuZB2ofaWQGtXaFBnkKarm3A73MQWwgy5M7PkenxPhis",
  "key9": "uF5UQZGueZgF9DXMEwpfc88rXwKp1MwT9nC67ypYpKxtccj2dFmjAfahg3wyvnT39FpDrYHieFjVqj6XYDY218b",
  "key10": "4VUVFjXGojyjZtFdATpiVk461xXEbu9HK9ybZTcCcXAK9E1ui1akJLJtRiaNF8BRJcFRvHT9JEZdC3QYew7T3kPS",
  "key11": "31VmQxJLz8e2KdJi759JxYk4DyBgpPm8GfVEEX58bCdzKPLnemib9wQ3kPQzj3hTA1LTWJXdrSMrFbDHmBUHdPkS",
  "key12": "3CK4pnQy55XkryjybUgWFVXzerTb9GcWm6jNoiTkoSr2NDR6fberwY3w3Gw54GBVB5azgK8cuxzDS3rbcEBbFDRM",
  "key13": "4v8rLFyQ1gByuCnwZCpFV8y6Eo6x11q5Rp8nJDGBuW1W51yrYq76hfXUKhuZAY6rBjPu9BSpzjPDin3gXxnCmbhe",
  "key14": "vViM62QjUevyrrWSwrgiMsAF9DttevGMRgxaMnLeg6vUqWsydxsA7t3LwRk1MoLTD5P31m4XgUgKoRp1emhdKkJ",
  "key15": "GGyLcnL1XkZ66LTnmXdq4SiG5SyKonDjTvuTqoLoBGVZCpTJaNZtmHyAz2Ms7UZFmXfAtqRFSuGAghH1pKFYHuC",
  "key16": "2GQkXAzqEMGoL2HZpdYNZLGLsWW7E8Mkw3iPvoodnt5uHGodsAtXL69QzFCq8JzbhmmQYsX1t4uUS4MbkR699Ja7",
  "key17": "3p5fiK4bPYz1PgVjraprayCC6EyRTGjoKUsAkdBiLPGnzxt22si7r3Dh1EEg7kXv7VU6pL4b53242AQFiScSzUAK",
  "key18": "XLEaBi1a9gvs35aQBcQQUa5SghxxZNeQCzFyFs7NBuCVemtKV1xoFHGsL4eoqjfu3bCseuwBVXbi35toCe5ZuJQ",
  "key19": "59wxfmy5U1C61PURRLoPQm3dWEBMXgSTG91PPk2KPuBFm32rm9UTL2EGPspkx9rvGsB28B4jnX9hgVVFnpsqN1Uf",
  "key20": "DLwYihZYmDWpZE4pkJoSPshqoXiK7nQ2iBXxQYU392vx2YYzdPAoUV38oTTZDS8Jv7PXtyC74iyN3932W1ygLrq",
  "key21": "3Xjxf5qgn3WRwpUJXnFJ8DPjxkEBL422tGkTTRBTRvwG3QwYvBicDcodkVmgHKLLMi5ae41drrdDp1rVEwRJLwDy",
  "key22": "2wqCfUhocqoMtdSxHVwqES6WkJyhwNNEzbWaM3FZSTjXnBNszPBNaiSnK9vREuQJD6UoaHnRn7YCfJ8eFGPRoimq",
  "key23": "2gZhDaQEywqdVje5bDqT4ie2YfU9kPYQEEfcn5t15W1kymLnrKCg1467tbbjhozpe5qv2HvugrCaJFRJmymgoWh4",
  "key24": "5m82Uvu8BYR1TDB9Xcx6PEkaC8pT9DtYUpdbzStCkVcGpD2C2tgqpCMoUKKc7QJFCtQ5fQHCHrTfDxH1C5SJxmWK",
  "key25": "2TE5XH16uTFSVqQLFYkArm9JxendwW4gEqJ6TS2jgW8noUwX62vXYLbcNcUmmVK696fctakEYZbBE4jcTv6bDvC1",
  "key26": "2y7CkZ7zUyRb1waEK9ZtVwgJTeFPWBB5Tnfn6fN3ubrtgNH79KgCsM7ptoy1DhRnQEPDGDAybnfeD7moXujDzvBp",
  "key27": "5WgxxPgzgUMk6kn1itdpPXyREmXWn4zdrX6jn3SVL9ZzJtm96ehdayzByomrChS2yGsmHJRY1C9U68iZMv4kCLWh",
  "key28": "2Qn2EddiWL7HCKz878ihY6fuojW2Tfh5isibCoFoYu9BnzTPXmvtc1LG7QPLfXZJRXn49waCfwdvMxajyhJTZcns",
  "key29": "5uPDSd8dQCmDULNE7jmWKYeJDgfxYkLwd5U7iYhHmDCGNZ8MK3pxonZhTLNnehqSuhFWcYTjqpoGM8Buep3iTVYM",
  "key30": "61tsq4DbPGGMsmu5Wyx2Pq3EfXwiy8XFa1hTZ6vnGGG2pQZd7cJ3gJU6tkqX13tqNNjPjdxbSsVs5retVyf1LYMc",
  "key31": "4yHPG17L9Kj3mxkePik1Ys3t5M9cbhYvjr4Yh5794q75GVkyyUbSidisrPQDstLu1ZdJuw7EDfR7PnGaG42gxKNj",
  "key32": "w4MniCFURotrnPZ7iSFYn6knpvAeCvSWfHBj9Nc8m5Qehtx46SGpEJ2dhZ32vhzQZ3oHKixUb4hCa1krfeznH85",
  "key33": "2j8N4K65MXuXgQWsNFwcXrjCtoqS6nfHS8aMhnxJ3pH6NotshFyt8rFDURGJstQexK6DanB2rpfhjGYsJsEsEV3z",
  "key34": "2XEqXMwYYzrYxTnSiPJdYenRC8nzoM9Xjtc4WEgVJwVjd8zxx5Q9LZtpNhdZhvmcYETvKoDunzUKUggycJzCvvKr",
  "key35": "5Pf2AjoF6zTL5iQuGxqWVcpXYbfNhf2b2srs4ypJ5xJKwthi2wGaABarBNGT8LC3EyKgRwxLA4EWe5hCdnvYV8DQ",
  "key36": "676o6zoTC51xa8MN1wo12fxVA885mV6RpYgLBzeSp1Ux6CuJj5xHpBnKsyYMDdAD5c6jSFWq7BNWuiVdvXiN825R",
  "key37": "5axPqHrjo13tuG6gwY6yy5M59f9KiPuyYaD3o44CsQYpWTutMvkasdGVS9kRWb1H9gi7FPfqLZ8S9D6tU5FrhzXC",
  "key38": "4s1atAdQAT2dWtMzWvBoKpurY4ui5u4exMnxUQrVZDQQnHUrzgtjRxct8XxTHTTLv2fMndZfxEVwzGV9Y2TFXArF",
  "key39": "4FuFdFKDBs2GArePdAKLnJ2fAHqoQLcRyyEyByTM1pxsk6fGQUouXYnYRZsVingxQTXtGDzQoEg2V57Zbd957jVJ",
  "key40": "4r9WyenufKNVXHXJNaq2jJ9HEoFsHkYSUtwY3aP1uBJ19UH2yqzNFrRgBUkS39S65ray4Qf3HVx8kyy5LLWbqSvc",
  "key41": "4NUt33ETJQeYNP3wLownJU2f53DNFvruoetSTJW69v5tQUF9S9R9YKtrPwgydbmVgtm1rdnML4NqPfFqEYz5RFkX"
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
