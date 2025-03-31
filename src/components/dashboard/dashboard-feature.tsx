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
    "5jT8DjfcSoR3bNFwoUkVubsrnRLbZqJ8CD1g6DbeT9scMxBiWVyFBp4nk3EB6xhjacfFGje5u3ShPMzCrACtCgtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8zNUvdNB8TDtednvZxtqWswqiYMQDJJBKT4EAD7B7aXUS9stbRoKyVVbwNmUnSo7QiuwBhnnMVL6PZhXkUmPN1P",
  "key1": "5YQKZYV9nzn4CdFPEvb6ECNq34gFoeRYT2Snd1a7E6KVWRETc6royc6UA8vDHM4JaX1mxh51xvgaL6jBM6oiuFEA",
  "key2": "48u8ejn1eE47aYdjqCuojGd9qX94zkoGDvWmUoi3MUqUnEHJnMUugJgWWyS7MqfGSmGBMpXa7cbuEyRGPpAKF9mr",
  "key3": "2xMaGqwETzD6prtczCKCqNTEdzUs27KjgKGDb5zPmxMYios5xzGaE7QkwbPt5Lj9QXok1o4HbqJhXVKJed9F1ZUj",
  "key4": "2T537akAPfbpRcESqck4h6SHoqsTJnvqAhoShEgMetjdVVMYXGZauBDyDoN8Jc4sn6NUPXNcq742B52vMpFmBgCn",
  "key5": "2Qw3jnSM7uPBggJsCu1bJZoLL2Abs1j9zn5vB4ogbh4u6zXuUWBqoWHBf36W1WTqgh4NS9JkQTTUPUVQmJ5cGgU2",
  "key6": "nqw3MwqoKJpkZg2CMCpsbXAdcfWriyoAcRbGw8VMdBQ97SbYZSkAJ45zUCmqPoF12PCjK6fo3aCp1wjeud13jNP",
  "key7": "4J6HjcDDk5mvmasgR5JJK9DgrJEhFxSh2VnMffVomUEzmLkXcU2EcqqZfF36cFwXbpqwBaCJsrSpBJn7cRCndZZG",
  "key8": "4vcPJiohXaN4ZDFgRoB55ZHAvtG41HTY5PJLPLYJz64v4PXL3tHfTr8yGwMmcq87iLWNkkudSk329Ew3WtNfnvwK",
  "key9": "iLKLhukYuGhudkUedya4YJzdyRAs1iBiWUYkT1nXizm5FgH8BfSuxAiCHMwVg9WsmwJ4oLKsFBBZAMRW8MquCEm",
  "key10": "2eWg8W69MLcLSNUmBpgdfkAqdx4VUd5vUmxPAYxXAJRcZoRQGmtBVndyN2CZwY53soKo3AEXuv9kQLcU5XbsQT1",
  "key11": "3EUbLgWYFGFx5qUKaT762nMoff7GPrZXUaGroUn5tXiMevN4yiyu8mGZHSt3bH6sGAnxojoFRVM8ujbe4j73fSc7",
  "key12": "596Gu1cyPZ6avW6o4zcfG6ayhtaAbLpbSuc3FuJkNRxRXhCxndomM4FeQhwfpGx9XYERLDq7TWSe2VeyBHnSmyxG",
  "key13": "3HbrZVPHSo7NJpDQLDZJMKiwCG5jhr1nw4h61nuFpwXZBUtJfiarZqrYcxvQG2M3Q2CsKwFmGHen6B5PNTGTX49n",
  "key14": "2PqJRg8Hoeu5EhNfKaGaGSGbLcQ3BVBMTQ3cifhRBSoEE2T2aS3rLAzMwXA2wMnrYfnGU45T5X29hvoruex9HP6N",
  "key15": "1kMY9nvhmNNNMMY164qcwcPNxY51Rs9Db3aA5orn8uqAZheY6YjmUB5dPLRweMHQ22EZ54oS9XMLXM8ZtnmvRH8",
  "key16": "5woQsuxo8GzxjntnvSW8x38XfofxwLeWweGNf5yHtYGAY3qVAhFRhNvApGFRGQe42FmfJvfF3W7XjT8LHzeWnujh",
  "key17": "23kNp3nhUojVUYEV8suuvsZNVCSjFN7CfCkJwEHixjiP1c63rGASXn8Bhws5MbXag74nsQvPuWJjQ1uvHm3xfVbj",
  "key18": "3zwRDm8RUdq9D8AqvBraEeGTd3DgorhXdaWSBiaWLnDGsFnw5wXwA3WwRx5oJHwLFU6kMEde7dGv9m7wbUrnngLy",
  "key19": "38YkY1ucDppc1nAk3QQX6kk9FwR8j34zYJ4dpeeHGj9mbkyLPi999jFGJ4KGTqwCU8xtsx7ARzEbnMcrbf3hZYmJ",
  "key20": "2572igqLDb7f4eamyeFR2XtThyoChS6NUgRiH5fPRnCZXTApCq74ox99Qbw59SoDwjWLFgghZdELxshztX9qBnte",
  "key21": "5BaVT5gEsPCXzFBdWpm3wmC38h6i8Lpcd59X4ZpWFZRdMKp2SS5T8jsAVqjjpzuRRq3ZZgdKs5oB4yoaFDivovHh",
  "key22": "3sKxS7kT2zjZnNQhqmwBjSuYMhtvxGC2SFNqMqu1sRLZa2S2T74V8ud5uQCyHewfg6a8gmF8PNe4jbrT6vdzaCqR",
  "key23": "3fapxfbsENDJtvEHKmz6ZHdQeru4QAwiz7L4nCCyDUg3113JqB22qqfWGHnfLVyeb5vLk3rWeGLKqmC1BaAdYSxd",
  "key24": "4dc9nkXWjhETe7eKHSoRwqaYqa6vZvCniNyrM5nTKnfZMnvY4DKaZ6hGjt3aVSCpRqkoBZaYg4Yqb1yUyEYZ5eTz",
  "key25": "4kc4ZoNYxpeRo9tU6JVSNTDKphPsCjt2dqD9ZGgWyLp1dCJytvWEq8KBC1Bv6AwWLhcfCGiUUgbg7XBAtbtwrxJ8",
  "key26": "9yMdi63xPuXRSR3degpS4MWbp9SNaZh7AAGrPnff3hEqktqnkapwj3FvKJifYgoWiSbtGHJMtmXdd3E31yKaCEF",
  "key27": "57Zx4ueY8qi8zHKuE9w6HUrvUaG9pPXDNupkgWNREzJjcUAhHERm7jZMrPDXBtxSF7WzSjizmjkf6gtX75ecDuJi",
  "key28": "5uhsj7AhNHyFKKUAqkZSWqH2Z8d2jbohmdXQUxWdkK3sz9czTGy4WKsVdSxgSwz4YkB2cGYifnwPH45x7PtEP4c5",
  "key29": "4Xf4yxsq5HA5XzJPeyD6VqwXYzMAirey7KDQRGaWZNsBK4VRTSaj6NcC7GeAa2BvNeemY63PRARV79Fnsx2GWRU3",
  "key30": "5YsbG6orDkBSkKWQgpCno4rPYiYSTd56JppPA5aPsRunVpPmiJq26JYGhFxrrj3bGfQB5CRAUQQe7JMyaQE8V3BT",
  "key31": "5zynU3T8Qd7WxSmASsmAi1azynwCBgN8i8CDjTJQT8ZarH3mVe3MkaUtyboQGrxvCkxGn7AbxQoq6zxuAHd9fMmj",
  "key32": "54vnKSnmtQAJVumyoqHw7j1SdMkDcWapgGeSHqTt3xPfRigeeLmJxHmria1o8FzydcNMSoUr5cQqTP4eksALhjpa",
  "key33": "3R27UtTy6t2EXs24sKE18Q2G2rk2zMHRtf2hArd2wi1oTSFNibo7QD6UFgRdhnc4c8rJoUswvi2c5TBT4tLEHKdi",
  "key34": "48sZdYMHRZScypHdqmyKzCf2KXr5MA2iM1uSyLySjZMXEHQRv7Z9td85fw8WDoZbY7fKZ4QVAAGLmhGdTwR4ie69"
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
