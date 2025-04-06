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
    "2ejK5zymyGGszSTh5LRXndacPeUbHtZ3MTq2hUn4fwrZSS4DgJpS7jg5vqf5R4KVVnbTEVnApEUdob9GuSujZLrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "amafdhp2hC9kkTwDC8hVpThq6fQQs6CW2vHd9xmFyUo67v9RHhh6zawdxoXphAyoVMsZNgiX55Qruhv2JMcttiK",
  "key1": "214mg5iGAMzodDiRbv3tcRfKudQ2dYypQsy3c3LpZU9wtTDGRchVBfjpmRAZF8ZL8hJopwXLrcdE4KyVJsFcN5mS",
  "key2": "5kfpYKKreMPV3PLMYJRV2ad94qYhHJCHRDkq1EN7TKJAdQqDqgNnVJuErb3TsGTUimV3ZD2THPvFucZ1Ge8hSU8S",
  "key3": "2aENeg3cjzE5vNaAP6GWwjnULxRdfyKy4oFW1a1yjmqsL12jDYQXHoP5v96KTJotPNEKH2jBsBvRLzWjSqNodHJ1",
  "key4": "3UUPRk2xZ2dcRapJH32KYH9LvwjcUJyCA9adFiKW6yUg7tq9gkQGEt9NvRmEUoJRwRu3Y1w4ZpDmAZvjKP6USz4o",
  "key5": "3yEKC2wMNLpzbzBjkzpbV8mv2cubuXCRzN7N3BKnNeuj8rG9ikHUYsLSUKAXXPpN7PTvPyi1tg3bVqwsmo9xnXXB",
  "key6": "526KcMiAVp9WhFCpZ9VkXKYN7QE4BYm764khaPSdGwWfWd8bYCWzAvtm9EEU6DQVjTj39hycr3DDBC7qhFecZvGK",
  "key7": "5bX2DV2seZWWxo3pgsF44ZZz8GWvFsEDj9KFZDbLUawrLBnF62ymu68CTFS8rMm5NhoAvGtsLCr9fwJd2d3ZHs9a",
  "key8": "2KLtSjwitef7YtVGudceVAKHtTqin9ez79VA2Pq45kLsABUuG3GYSzurLgt2h9QTGU6KPgcCJ6ors24Mwhc7NGip",
  "key9": "5yAmY5VM5D8uTkqA6HtmFDe6Arjkd21Pk5nj3k4foPmTpV9V2rK9w89nrEcoFvKX1e6VaEPxRuPYBWUqmnzuN39k",
  "key10": "257GLeu73ZEudR5TZweEkEwqsZX4sD8igesco6XGLmKRmnCdsX8ZFt4JswcgVNqKdXQT1moGDP8JkVe15ZdqX2TF",
  "key11": "41YMczWBhnqu2s2bKd2Jt65BUURXzPS741DnWdKsVSQMDhBEyWYw69MMaGgN1jXjjhVFuu1QxNdBQjLkJ5ejTTdB",
  "key12": "3FAetNdT3C3DWTAcbVeGrRkYvhaTZ9NK6jdyAWpiJizUBqypBwDJeoJ1mYN2LYFJGkSZupomQufAXM2oiAhTx5Dg",
  "key13": "3QU6L15kSec1JcLfmz926dGCZR5M2M46dVFJSBr1vY3MResuevuB9kwNu5S2CoZ31szJV8ikb12qVdMLYQbviLBF",
  "key14": "2BmHp8odxgGRZZ9RHR5rSzS4wED4oeHwXf9ij2zzByv8cSWtDG73oj6cZ7eaZYdW94wBGm1diBGSaju3kQ22tYuT",
  "key15": "tWJui3c2eK9Scui3EfQdkiLfBAYEZ27iUQqmDJViAJ7wYbgCmh1S8nAokDSndd7amzQNVPLWVf7ZrwAyN2rESpM",
  "key16": "4ncQf3RxXrY9R3kFZ6H7tsbfCaSXEWirCW1EzCXXuZbdepYfQDyTjQnQr5gp3K1bwBLnoFZ8d3emcaV6qFtCp9FA",
  "key17": "hjETDGhmNjXkpFcpHeXPrw7Wz3mobvDL49wKSY8AYGqZcRCpni827UuVvHNG3BrqrJNTZAALxZ5THTo363HAs5q",
  "key18": "UHj92pX3oVDkMCGL3HhUNRjSRCwvDJ9x1LW4iJivdyyVodmXQGoCwg6iiJCWDQ1g5wQRpzRtZmrZnwGX2i4oJKV",
  "key19": "3NpR6KpX6EHEwj4dWynXQJEarsnmYaERhawcbVhvec3ZrHgMYhVBA8N2RpB9Mrg3yNyYfM3TmgY5SDXsn26FqaVH",
  "key20": "3unR9LdmrhXULbgrxhTtYZVg7tLR5zLdnzL4gACPW9xZP8GewQHVMS6UxGrn4X9KMiYx9yF8iuv8XSNtQmJxyCzY",
  "key21": "2YpbCd8AMNq9qp5ZPQzHnjAYrSU1UjTUTQLdR4GGKxnNtPY9KNUdMjC91o79KWE52ppYbFcV2VBMmGWyHeEtX5dv",
  "key22": "4JBeUqacggw5rXGUmMw4K7odi1pZTpiq3e6coYnPTMKFUqLQHgJ8w9QYAtQykDYmsye8nXBJUJjU8RV9YxZ8jmRS",
  "key23": "55fihMkiYrxwhUtDnCpNYdDeqKwXRAYCUVJA4Mik4C9tGFdvKrngPUppUeP5z6hZEE6i199kCrXogfQH9os2t5rR",
  "key24": "BX1yezZXVHpLLMbHRfn9a3nRfVrvKJNH8GMc4tSgPvmNkFZsN6kCu3Cc3WXkNVkxDe4HBmnTeEFenPaQsi2fY1z",
  "key25": "5ExgPwnERwCu8eTT35CNrKrWypuYwAq1MSdqEJz7srvd7HLKVerzNTHL58dTaM8ub1HLmMMbLABeMqhXvoB7JDg7",
  "key26": "5TrejZoqMxkZmGTxewWfTxMLpjZLpk7a22VML7KQGFZRJNMKXETdmZuTe454vkeGNoSo3tsia3PTrt9RtrdVAnAC",
  "key27": "2Qrc8nkkwq6pAMc7uPQ8dy9aEX4zhjLUVjpBt2e1QuZhU8BW5EGZny91BbCCBGRiH8kUcfHfVjNBrpAkFfoYCkXd",
  "key28": "5KfjepE6SVgZZ6SudevVH348y29ZZ44h6mCWvw8HzTahNzs51rtbDT32QmFHmtmamDYwwbWAGGnRnveCa9WbuSPL",
  "key29": "24oueDHYTbKvuJHfjX1xpPvx4FxAotSizgq4KJTtNaLjsLwMMyQSzRZUvGZ9E5y4s5UpaQfBEV2yXNLS6C6wxwZr",
  "key30": "4zeFV54erQm6nPCkzFN5ahf4qBcvret1iZZSCVgmftppzenfY3mRNa93h4R1EDydncc2cyAchT1uYG26VAhDBnPc",
  "key31": "6283fsqUBzLep2wzMcHii7boXLCciG7kbVVnGM9JBrPwPop4GCm5DZPjeTHAYEKE18j8KMwXxdXQY7hvgehYJfTd",
  "key32": "5HrsjFKVUdLQKA9zJmrA9oF2GvqhWhp8NHE649dbcfnpgQS4qwMegCd8srh7vSKrf1h3eTzdLdBxguwN7Q6nyM4k",
  "key33": "2iSeamwqrUSSHcCPCwq1VdJSBb7eS47MPPGdyw8SYvznHpeGJu75nPTbPrFzPvcQoEP4hHTvjt5D13CABe1Y4jCV",
  "key34": "4MbicbJ7sdyyXAVsibQN81QD8gPhNfsZoik5irNNEirtNy97dDfhSWSbzYUg5J49ZdR6WRHn8UhTaanVPhsU8ume",
  "key35": "3P7zq2iH9zYK9r9u17wfTusbb2shuQezy2YPEMCTtNtYWHK8ngLps2dkGfvLSt9cusbgbMTAVLh91occb46DhFrD",
  "key36": "4J3dweo7ACbcgsfmkLoLUCUSQTKHJ43tPJ1xH9FbYJzuHB9oEjpKbM4SydRGAsReMsYuKKEK3MS1cuCcFreT2CGE",
  "key37": "mAGnsdtBueMLuCpaLzGrsv5YQbo9PP3Cm3jZcem1AE8ywKfCYtTDwmoBggTDk63RA3kRo8y9Crt2urMfY9s75UK",
  "key38": "5kHShTV7PNHGf8jr78FzZfqwiDkxJfaZTMojfmzfd4J2VvjeGhWTuXzGt98rHdm1NMKzzRqvMUrhh8ygMhcXFNJi",
  "key39": "3GpMn69di7ybJ975JPb586PSbRHCprYbAMkC6zVBkeSgUNgWm8r6vVPdzYdTz2E2yxRz3sPvsucYrme2dZZVbY8y",
  "key40": "3gDdeW7tMoafLvZL1jCABdzi5qZ8HiY7PE96uVYo5yi2FWcLbiouBgyspXnUL4mFMYiynGTKvu4qry6zpzfqDwJm",
  "key41": "KpiWfYMypBsDuSBmGHvvAbN3jeNFUN2PW6HJYqKph5p8RM3Ui7KPWHFpn4wGgBFNdCMNZZSPxJPv1481FPxzfoT"
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
