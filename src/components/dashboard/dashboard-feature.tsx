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
    "KCuk7SkDTrU7PCsnpJdp1iiXRiHqQF9CbUZeW5AxijdD4pjMgjoSCKSmDFfh4UbhYN8phg9xnEB25wPG81FkPBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqPnGbwyr6pd9hjsKn9KLPRPLtGjLeNd7u5f6ZxZeY3gBxXutVGF1TzChZF5QYQh53ZaKwnLXumynZ2MVX2LZKv",
  "key1": "17LwkyLXAmzRUpdGzpdQqEWkExA6MZM841wbPHPUEU3wqZEPMPsXcEQNwB9J6AZUvQ9TVEeGxaVDyDJuVfd7dVj",
  "key2": "4gdbxkbREsAhJsyCHx8z2rQgG285kSGbpwyR6Erf1kUpgHDwCgGWo6F9Z9p1PYhrzM9enLmYwBiTbDyQdeAETbkw",
  "key3": "BJfzD3o2RWptUL7N7xygc2Evbr9dPaqchDv3a981efFsQo4hMpxo2k41Q6yoN8HQkjvFiakKDBwNeGydMdsw53f",
  "key4": "5gk4oDszyKx3Y1Hn4Be6TaVCCrMR2QYtjkghk3zbMpayMCVT8rE5BYsxb4W52BosSCj9aGiA8Uyv5qvARDq7GmUu",
  "key5": "4rwY7Ym2P53kD3seULNCumZYdZAvG5u4tght971st6roQPU7QRTvtPLe1b6yJcjkbVspQoffjUu6zaqgW8Fe7TfY",
  "key6": "2LwCHgeLZBf7ZX4JqZF8VwnWQCVged23RuCn3Q3xQdSGFdx8occdaBRhV62LaC3saQSEh9w6M2LtoxDMyWEbmNYW",
  "key7": "2TWK91VJDGRkLwxm8rhvsQS4jmjDDdwDDW7XQBaNyXURWPwujPqaSF1bhSo57gA5vZD8V4NZAKe1Yhi7VfsbHYrL",
  "key8": "3A5CcJXBW2ztUHZK881vfM5EEX6knBkBGvMtEnyEZWm4G3oFX2yU85vuhGxNYA8ZYuLeLBeuznzx8XKvadDhxSWP",
  "key9": "4t7ztnmq8EoinXFtWxunxCoYg7juJuxoYvnjpMYkEgPPh8hUyzPemypYisc1GcqxfXAL66s3dvRf1ZyLJEbsw7xK",
  "key10": "3NkjgvSyxpvB3ChmKAQHxQ1hzCevGdJWBUT1RSwffGsV3TDCkFmFUhzBRisJkT5nPTTaxvLtcX5eBbz9VEfQccXc",
  "key11": "4cTkxmDTuQcEt6uxX9Vni5dY6t1cvw6JUx5C3Wf8cRaXg34LFANVfUZN6iSVVsmoMj1gmUq3Nc9PnsRvHtZrCHnS",
  "key12": "21kpLtXewFQ7zCnkxXuUrhqsETzU7NTHAjtB4y4SVDys4Q4ugDum1QdwPAQawATqLM5goFZkYW8vCC1s6fWyuUtB",
  "key13": "bTydyQcnpoMMK899wUA5nLYbpB3oA1uVw48menMtGGVba2PU9U4owZQR2rZWuybuD1SH3MJMCUYrkQyTZNuNyff",
  "key14": "4ttwnwJ93Phm2S4oCwtXZVNZYm47eL9jbcctaRe8W117BtkS6dKiMtNs2kx3FSQmgBn2Nw5ANrXTNcrNAHzUFxk2",
  "key15": "xphcbHoeTb8YYF46DmWEXBdVJkvhN55YSj9pqZvyjdwF2sJUZFuXriDrx1pYn1J4VbF3ahwgboYGHe4gC8ufP8w",
  "key16": "3wDGjUVZSoFsLD2RkT4bPFnjMNt7YYTtEVmxCf1YuSLgWkGJxb3aw3VWcyJPf9G12j7jQXVupiRWAUMvWNEJrE5U",
  "key17": "rcooPtE1R4TDxi8yyEr3qh8Fj8u71ZuhaFFDPvTwqzSfeRauAABmhbcyospzAhtWDxa6PMx6pTiiYTVEM4rmguW",
  "key18": "5vNYsC5zDk6nHfZvcZzVhRF7Jmqjt2PkCymQUZ8oQMiBeknweBFwyQePxdD1DjgnN8itAfLoawQmJyXkxrrSgJNR",
  "key19": "xuCZNhMxaaJNqQJZajsbDf3YE2y87wP7weCzNbtDCSv9A4LEduFY7ZMwD7v1zPzr5e8moddGMDb2Lhhy63LXZGg",
  "key20": "xCMXBRdbBSVqHeSQaeSuXUf1MWehPRHzkt5i2ViHNZfqTwqAoxZDgGdVxnV1AFxRNyjk7mnoz7jZUrT4cVuEk3T",
  "key21": "4Q14TMa4qTtB5rBg1rBURmdu3LSXu63s9gqWZZJB4FfTKvqoaJrq6Vpcsd6cZ3JWuzMBrsgpZwyLEpJEVDZsKYJy",
  "key22": "2KfagmrVDKkURK8bk9C3hRSXgcYz2vihL1WRw95TD9g9Z3D3Dn1JbDzh9488FFw5a6i8UGN9wsSaRvKLmxN5hzFD",
  "key23": "2UWTNu9jRX4smM4DYQmMXLvP7LTpyNqG37FWgymL9sMQH7dPFByKENE14QfmDeJd4KYQFcVVbD3RaQFaWx1t7a2n",
  "key24": "2Hi948VCmiRqXd36SDM444cti2v4k62WCQM4jdw8soWNRiHkpPdPuQvxEXhBtfB3hWhTvu4UsNEM9pAmPCE31VZG",
  "key25": "bv8wExvMjfuCpYS1m9mqBXtsAQAXCNZY8XrJGfc876T37S9tMnzW6W6RUvxYoeqCdAxBhko6WaycvvwB1enM47W",
  "key26": "2dBid3ewDQrGEbLtVk4rpPdBuAukrXfGmHPWeh6ZsUXp13sWxkRYZEaxY18bz7FSdjt1jA9v61e1FJFQsJevGiJu",
  "key27": "477fc9YKfkW5aLLXqP4NGYEbZ8rrSSKH1ubbwUohtqHXVU2gDCJbepmsgPQU3hXJMPz6rYVhndSxLucYrAKdBkad",
  "key28": "3SGzAu6S9HN9Qi9BcsnpgPen7TeXDAwcdJSs7mgqHUXisAS9CHMd2Hz1ko6cao1NypcApjvx2bLLmyf7oyHa7dHv",
  "key29": "2hmjaBxEpgZtpkScFNg8a1xa3KtHvQdLbweFYLwx3YDvWN7eYjB26SbZe5PnK65JdFoFGwTyji43AHhacZaKE6tz",
  "key30": "3XYzXd8pDiEBd1BCz2nGXe3fG3M4MaZWjGfDqkzGx3SMjYNE2knkzxttuGpxbo3MLM4RG3ztq8cFFe8V5hwey1NP",
  "key31": "oSu94Feo5q7YkFQ4r8dx7iqCGatdhQBCAxVR3dcQhdLCGLjatGeJ25TmkzhrzsUcEauiwJ92br5c74JGAgnsy9U",
  "key32": "2s9yHDgKqw37BFr3w2qGjftRHSXaJ21BZzZ28KJKvRnmueBcfH2eGJoTjHqLKg1BY48kbiPMs8MqsbpTq5D5JaW7",
  "key33": "4tBqPsJdCJMADBTY6R3gPAwiMjPFNdaaiuXqtVSgYJ9uzafz3PEYH6MzSRPt7fAH2xYDUXAcrtHhdzDcSkwx7jzj",
  "key34": "MREXkuV8aEGJyeLuoDPCLnaZENqTfQrmeoZf2W2DzA4wyNZXkD2UFDTtJwkRjYvEMosej4sZHnsQz3hy6oJjFSD",
  "key35": "2cqSoo8KjPvjjz8R7Z59zgbZs9fkJf6DizkiJcKx2CxhsGML4xWUpij2SSxEGg4x59hP6Y2DYfWzi7V9ZRgLW8Ao",
  "key36": "3NyqYsHaPB11Eq27E4bmxuVFNoUmaF1YBZbjghsskmcpR28HmpdfhRc32MubpBVaZipCdQauqBk1igFas7mC4s5H",
  "key37": "4Z5X5yTxKjNkdixb6ce24ggGHtv3edp2qZH3uDMJWhx52247K7FAh12SBqoGvZMDXJRVcSh1EY7gdMQMbLwct3sL",
  "key38": "5uDCyMcmCADVVDju5ABaCTKRL3RafDRy1Xjzt6ug4ngJV1eCQjPzaPpnkDyGEWTxu1MiwjfrCtVpdTnJLECDTfsm",
  "key39": "2pGsdzAqXNY37F3Gw2y2NcY162zJbTXxDWYnnkRvFJzDno5pPKUbuKvJDS5zo9HBcdEDbcnPJbRc76qmATevjTrh",
  "key40": "42VeLfvrzQhi4UtRZyLuKagJBKYVzUFHbjpJGUVaD7n8dcMJKq6f2zLpuK86LREKdgEcX2Kg4kBaV6iXKQdaQz3g",
  "key41": "2f2VL5ynNJ8dmgLsjHypSgA1upCrhcVKddL8bzpwDQb58FPCsegbaT6kZ4uRcBvreHF6ktHZWCLXQ2ibPdPuiFmV",
  "key42": "3sCRSh26K8xnzsZg2qRnKDkMEHn9Ai9vH2RCnmzCQsbHW2Xkfd3bh5yNCxgx9mVMrHYDzfbA7aWHCwq8KVLorrEi",
  "key43": "4oZ1N3cj1TAwAeBP3UpYk1AkzkjPi8a3Bdr2W7dJhLsSfmxCTrxd3xNvRnM4TRGAb6E2Ui7jFNjzB7Cb1EfEj193",
  "key44": "46wdiVKs89VT6nQjgrWXt1QCy4HXo6HfGU3bwHNtSbFpZuSECKkvPZPrPmgrkiTHg7J7JjWso2aJBTPZaEExFtBL",
  "key45": "HKfKhdS16bvgUuC4NUcSNDyAa2SiE3LT6NRrKPvCo85KDuyej4HJEvMVJf4tSbgVG6ibc1r9Aujk52pWHfD9G2G",
  "key46": "2NuSPNTTGGW8ty7fsy5NACL5KLUvDB5tAa7bzh7VCE28WTYHcsGqevfmpxwWJcMagceV5NTDxGH996JbN41Cfuyo",
  "key47": "4Q1gs991SpcJRUe9WRxzZs61PNuEN7im2xtnn8gCdJ3dnvx8nrtbmey1RA5m5BKxoPvLJh7LcrCw4jQrDohsxQ7X"
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
