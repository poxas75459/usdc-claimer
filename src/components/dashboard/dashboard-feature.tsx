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
    "5neYQMYZW4581RpvpKpkhLWWxfbs2b8yezotwCgSxpocstTtZ1WLzrwCyrUqghEwPoSgjsXJuDXMi155X776NNkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "guTLTrJRGBwmh6q8L4v3oq128GQ5ibcUymjGGKxDnRH89VA1EnmtHAwYmnETpsU9tbry9d5ZPhMtksv4esEKWWa",
  "key1": "fdUEGorLQf4jcVVej6ZvoR8wcqCaoqV8dMoHFx8Zr9uQhQzEou1kyHuNCQpSbfENnxnhZhVJmA4DRwNwSYp4ak9",
  "key2": "4sxboQy8HZxodQRLRhcu6aSbvhJBChpndz1YXphfNH4SjHGTyuWS7nyQHxapczc4P1TQxxcnxCRMLofN9Vo7PTnZ",
  "key3": "kKmiN3kJMz2Z14ZyAw9nKDyAW9VeU7jrGA85NmjGSH1C6UmRfoUJsoPwqLwSyYzVzpNBPZ8zM29NMNdFywQ5wSG",
  "key4": "3UY3Zw5jEPiZMvVq4w4hi8cZgtqwwPDKKCcEDKqvQtA7ofnDMEKLH2AfsdhakYguNH33dqK197kJT2FZADp21NvX",
  "key5": "5LBiR4LG2iNfkQ9KrxpVc1KJgEKQJfaQg4Zn1Jky7Z5JhpW9CC8Eqbx2j7VVmYK7YUnk845XZacL8mEbRWXcuwWS",
  "key6": "4qA4AmxHJ1FBJnnfZ6JGeGW2UCwvQfsG592SVbToAu9dcxBiqJhfS9j1ryZx7S44P98hdFhTyJt8PqWqv16PXaAn",
  "key7": "3KH7taNjyDsUC3kPPZXwaTgNVWBKPYPEiYvkcpyPBRuADurLpg5GajeC1MdGxctkyFjFZNa7wrRm9nbjsHKn6NoX",
  "key8": "5yRwZLC3TGowz2kQ3voZq6WThMdFFxXjFWcerrhKKi71aeDyBYsS3AQMBGCxuQM9oU7jsoaABTBGLwDht9zPsd41",
  "key9": "37Una4W3nC3jBVWhkgM9UuTZHvbcpaEQs26SfKD2XLZubLmw7vJPgPoqot7HxL927NxTbvbLHvzNDfyxrhrgt9aJ",
  "key10": "3LkfwAKYWaoXHfyutgxQ3qCo6aqAuSttCTt26eGsBNsMYEkfkVDJG3XKrs5iTqQDyqSxm9sfFaSPMNfr5KRG1AJB",
  "key11": "2iUfeSRxTkZ7KCuQkrNd3MXvkvUcAtqffWk3jbHHztF4AqQAA6zk1sVtP3BPdNVoU832hcKDjkPVjHScZ66PKrqw",
  "key12": "4bbWHykd137QTEzqpG7J5Rvy7k9t8z6wAkP7AXBDWZ59By9ZD1bEaMQzhhCkcoh7y5bkRrom4niowpBQfW1BJLfs",
  "key13": "19NHkU9ePUawyoH6MQpvW4v8tHKk2KXN4KZ11un1QyiiuhqtVTdQLdPfu45smoNwKt7qn58JsvsFThc5XQmk7KE",
  "key14": "5uwjcfmm8YkW5qJtWBrHmmpsrAb1zv1akJWNTLwwXJiD11q4By1vfKAqVko5LqoyJLqd7jainy8xhsFLAeyXwkm9",
  "key15": "uJgmaQR7cBz5EP21p12H2cXupGaed2gvY3jR1WLiygg5XKRstG4gW39MiwgXnf3dJmNC3vhJiYuHrb9DGN19JDt",
  "key16": "5FZhwqDSpNw67QhWeygqBvpTQUdS1T4DhfmiGzUTKcuwxyeMyrvWvUgQvLBK5Lg1NHxBreXpm3FPegMDx4CYb2k8",
  "key17": "Ux5VCk7cJ7YdKJSV7UWHYy2cTSnddVU9uJsaGCDdfwy9h4wxQsLhXFeEhoqkqzf19qLtLEPAz2qesmgqETJhYLs",
  "key18": "4C99mFFquWsJw95ArQyJYLmy6UzfDKKXtwJkxJykFgwGMNQ9EcnxvZazza6F1uFveQk51nZvjLjFXCnRbrdWrZLw",
  "key19": "5gTBx96umjvmss5XrUAwru6coZnRRe1c9AowXM3e3mHiUG95cgW2E3K9kjV8sd2sRnvcijpPmLVUwhxSH7C5Wkmt",
  "key20": "3Q7hA6tXYEcF1Ub5VzMXT4D2jNn26gitgHmvekmL1B6j7VxkzS57hS8GMfN56DpeFicCBcQL58dkBxtb7ZPsxyCC",
  "key21": "2aYbYTuXzaMerGhh7etjWZkYKye55t4ogDMuH2ho6G5s3NRhzoSeMcnXvkWMiT1WkyzACtaj8TtApyU1AsC16TbL",
  "key22": "4LHwnbPHMzZC87votb4Smmg24Y1wjaqkaFm5dt2mga9F5fb7pkLgWdRy12ugoiADRtWUfeTPSinCs6ebgv3eKrA9",
  "key23": "5Ui4W36UKLL3cdaaHeC8XrGPP3nVHQHHd94yCYvCVnjFBcm8Mie9QknjFeEGGkgM62WsV8qBsXqbJjR1JdY4X6B9",
  "key24": "4q8wDoLz9zhHLL1fHw8S86aDmqWjyW9CV4uTVJProAU687mDb2ZXTUu1YnSyYSG2hxyG2ETEktQVtUF9rg2eHpFb",
  "key25": "5VBqajBdk8nSV5umwUJE9Y63rmyqo3wjxfa4Dmes86CHJLkkVy8LfFWSzdmriVr9sGqqJjchd6cLtzkFMwKUvZGB",
  "key26": "RvhQWSKD8VTPJET4KKBrGmDVZsAhUtiDCyxfq36sdzWxE9ookPLqcCGH5yES2AAVLWNr7JgVVqVncT9K1EVTqZa",
  "key27": "2r8DkNqaFg2zGhkpTLLjgs7nqTEpHK2VZHphrwM4hT7ZToLX62PTSCfzKPbSDVHSXUrGyNHmjKykMitWzYtabvSV",
  "key28": "3cTobiJC1qUrEw8s9zSX9VKmJynfGjYYJBVSvFQWCJUVqyCAYqRE9bFi2ceXjSfwCP1MJ1ovRVLXnUVMTwiNU6hD",
  "key29": "5AmdgQEdC6VUa3dHNXTcEMyDaJYYsWLzuJWMphED2FZnbP1MrE2gzpFBYNhixhWdNA5gpA7tquLkkLqdP81gW1hs",
  "key30": "bCib5Tsw9ekQoH3fEvs8TRmQzVwEjhCV7ouuu2VCg3WZvBGB2uarixaJfVh93YYJVduSUFbfjskNvKp8tP61MYT",
  "key31": "PAjd9LhTBj2iLQSb4psJW7a6SL7pGAtjFXXgchqapczEDoCMEXTejkKZhxDE6u3uzmZUPnnBfASaMuk6rYkKxDn",
  "key32": "QKJH1cgk5ZpSvVzSzBUNRjLYz1tnNvTRyf2dzBUMMKRtFDZoTto7aihsJYkV5iFQsekyP3rSEd6Pygf2yPtQYs7",
  "key33": "eq9ix3pZhrMJvXtSy9fBLUnpzB3h12NbLzQCSUAPCAANMiNZ4kW7r2xct7Jkmuw3Yj6eJck7oVkawVTCqS1Shzj",
  "key34": "2aqyjaNyqRjpS1hnnqsC6PPpdqGBJa7zdh671SzKQvrqtPT2xrpsYDAdDn6YyaPXSpvCzPWNKi12eYgW193Csg5Z",
  "key35": "cP1a3uNn6sUApZpjkcevHJP1yFz4n432pH2wqSY4ECyahLhqgTNVr9LnjgJ3eaLp6anHnQusBgenvxs8WiQPUZC",
  "key36": "P7LQMNRH32gNfNA8qMDGdTNRtdJiFyV5vPUGfXpLZVUZHZwCwaM2dLaVa6t4pdCgA7kzp4iiSdUynQobtADo3oA",
  "key37": "N5LQ36jCiFGG6vCbQQxFPsNHqeZVKwPRAUPooCcuMnZJKpemEeAjRWh4YUp73o87JdqCyWoTbPmUeEtNsYU9PUm",
  "key38": "2QJYgA6UDr6vevH5en6dRTwhN14Vm4AvwqvkWMxoM6cs78gYNaLJaLm6eXZT9THduZoXBjY2HGKFJJbNfiu4uVCL",
  "key39": "4ibyAQXCznK72c8YCTgwJbyYEyVF9boj9We2qfj7ufTBLpPxMqnuR8z4kf6KjWoZKBixcjZQwTEmr1qnLDC6xqaR",
  "key40": "2idf4EraovNPsJrXg548mywkovcY7zFBvDiYi5ZBdChdMnsBohh4uq8GvdqwXLuUgnqumzzodX3H7CQJWamHwNfp",
  "key41": "346KjbycpfGQbdHg6wmtucf4VeroRYAjGCWtwUAYKJyyBMWC5nASt8ZyN3YP4koLSeDSVG1zhcMjtfRCTETq3J7h"
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
