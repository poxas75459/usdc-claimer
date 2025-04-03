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
    "64e1UyXY6dUoBXXGuFThBzKR648oFQ3LDAKpuynQTNjQyvsHkv7RtufYqJJ6J1vxnKEE53m9PWr67qWh8Ucg1gcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tzRL42x9QUkXTiqAxyNufhsvDDMYsk7tqRMW5bQ6F9nkTaBx3NM8GxNFSqtd8Y85SBFpx9zLLfLM3pY6qx3QwJX",
  "key1": "2a8r9so48Wey3JTwbDGUY4apMXR6bx3DwkJyhhqLgnhzeSkmqwmLr6giY4k6dRmqHBYsf7YbhLpB49HCgMtFjUgh",
  "key2": "5PJFgEqFyWEij7kD8r44bqZa7jmtMAWexBCnNrRdZ7iNBDKDWGuqqc2TBKFfKJMG2ME9VmB34sD13SP3nZgbWbSz",
  "key3": "DpoqjuewVKAMuQhUUEbpuSsYpotrksWDfqk5Td1TW8E2YwEvUqgoK1XxTgaKhprVyWk8M9N2yM6KeNv5yqLDjZw",
  "key4": "5hK3RvqgfZGrtZrxftdSeA4mcUVMuQNKgtNcy5phaPSv24YTRe13kpbQHj8AMRaPHY972HNGndLBsNSzP6xriiLc",
  "key5": "5en4cX9uUgBuexA6d7Ms5E37AiNmr2GKkvU2g59EpAPfLG6yznHvjw8Njj3iyPHb6nxk62W2XYbWYJgPYs2fWDuZ",
  "key6": "5RM46UwnWZL2hkuvBcJiv8RANoJ3xYoQaN6EKpwKrt5KeWy1egnnXs75THcKHt9L5gVLcGYJAvNx4YK8buF9sYcR",
  "key7": "3yeLjxNTyRUxhQYGN1Qtzp6o8oaEcZRUxWnaE8dWWsg4wP88DTb3g1ZSAZFYfUqce6nKBBYyPaYiM65sNPjqQLuy",
  "key8": "4TnNDLBKs7k5xxgkrLpH5vpCJF2JkEp642KJfbcbrFdAR1E9ogQcFW2vrAoeJ9X7gUrv7zjJyeTtnjNQDPwUSues",
  "key9": "3GA65x2AQ6gDao779Anr4K8URP9SDF7E1AJFPCVXMYCXvpbyLe6GNV4KhFairkT5Sd89QVgUVceUjeZYJkr99cJv",
  "key10": "zXKwqcCgM5huZQoCLyNcjGpgHm4JCxuaSXXg3qEf7RyuzKvk7444EKdLExnBTFCZ5VkUzXRH1fanJzPnDdRJC1B",
  "key11": "2w7BkDpmVGjQUkhJwUhSqDZqK5qKxUnNEY7WBEbzexFB1M9Lir3N3sQoqfQv7KjauFw2dy1abgR9KHZwrRMxwa7A",
  "key12": "632dFydBMVHTiELnpycVVsEuRo8gq4ViYzqdcav2wJ4C5ydSffnqtPBxtej7vLtzogRijpsAJkKUYEbrHsRMooSz",
  "key13": "3ojzKojYhSWMGn3o4muca4TFeQWDu4fPnsGXCA4Sd1RvB4hZfrPg2jfzyFw5vdsREBMga8jEsEq9fZKNwE37E4PQ",
  "key14": "4ut5NefjWeeWzuS6FDkos7kUXVFhFvQJpPxKJ1FaTEbk7ZRprAWwKgJYyS7ZrN5H9L356ShieWSPXbM1rgeirc7E",
  "key15": "3avv8LVdejJc8dRtQC4UTRcv93HbH5FhBrhu5f9eMGVrvnZ494LGm6qeXy2BAWV85683L5DfyE6EbwWt5DPMdFYk",
  "key16": "2FCTqmjsW1g5fAxhhxxSS5M3X9Enyo7qWXywcbKVC2MXyqLRzU3uwsHtB2dpQn7AeoHXnxNz85j1oTystg4W6YYi",
  "key17": "5t1SDNDQ12yLS2VjL7QW6SuUbFSc3TmAetkSghUcnFJpbnjCwg6NADL9wGgWqSMkPMcLLi2crV1XBW236ppXdWXH",
  "key18": "3iUWo7ffRUwr4bVy6NKkY3VEtdoDUAUc9NwXu6gyNhnezch7VaQSrDSy3HSyqXw5UExXuYoAVxcpTpDswQ9sfabT",
  "key19": "2sTXd7LxBd2KX2YbrufSiTid5kiy8feQzZG1eqahZsdMcAxw8nTwZ6ifEQJ1QVgrHgrrYf8VUFbcXNEQAZEDDFRh",
  "key20": "2fAFL2sS4NuNdogb2h77etR4C2ESrGikuFJe8NF4fBxthH5s6hadY8mV19rw9GZcZ3JPKR6zvz3QsjNFNpR444ot",
  "key21": "61r9JC8yB8VV8hCsHiS8nfwiqReWhpyEBaaLKEBJcqQKBd6Un7VuMfrSAzegn6DjbfroVBQcGXL5r9ePWnHRr3hj",
  "key22": "U5LFmGvL8BS8AQRd6G1f4knUKBzkoweSTC46XXgFKQn55M6KNo2Ao1PjhxPURGbTKVBu9g2FEodi8Q8YcCVT4xr",
  "key23": "4S9SPXnNP8HdxeC9KCTPo8Hk82SVs7Tg8pZQS4J85nkznEj5kPkMacYctjesfWxzipADQF2aGw6YzBN2uu2YWp2u",
  "key24": "5Bgpj1cBJACeDZZDegoMZQrgk3r5PD52qn157TeNLUroJ4Ci2LSY2Pbt6tfm751kQ7yjiSgw2LQxVkV4LhguCCFn",
  "key25": "2wGtn22inuZ4xcwefshMgfBabpnC5n42fQkW63Jyg3w9ubpbhVNqncGG8CDPic1Rf1fBoR5ujxbhKNViAdvEwG87",
  "key26": "32ugn6ifDmGyw1vkHKxp268WB8oLTRPitPsgRizGdmXyPm5YAUhUjhSdATHvuBKhZXrFyRwKu7rSQYkmHEUezYMx",
  "key27": "31TVojZam91pp6uVi5uRLjWGJfnXtA3nsUsPQ82zA2TZmFa8hW8txUZFGzM1CKoXJGc5wh1bzsmDGvc7GcdmLxBX",
  "key28": "4PUYkLQv1wvNVDb5fQLVuAbAS4b82MFndsJPNR9NSMS1tMNiARqDHiDj3a9EFxQu3JiF3SxLkcNWUyuXd6pyZcBZ",
  "key29": "2fv764bs6yEfSczDBngn8eEzSU9pqUL3rWS3GugjwHzLWHwD64WQS3h56XTm9JtNruJYkhxGfS6r8vBBRbZbsbqb",
  "key30": "4fbqqyjJ8hdxDqvJXgPYByprZbB5oAKEnzajHRYnozZYcVECfQG6b69LTMW8yP5oJRhY7VoEQwuFRWVyyjsB3KdU",
  "key31": "5HQmRRshVtYJCmGjZwCn9hCXMidk7664Rn3yno1oN25dScbgewEon7ivRdzzmBpqKqGqYJp2m4dweCt1QwVvEjXX",
  "key32": "2uthw7kqaMYLtMQPC6UsF36tryHoXHSfixxXCpFJ51Xw4nEfSceJbuRNmjkbyKe48vkYgmS6P4LPYHdRWyumc2Hd",
  "key33": "5xy1ytS5mz81PQQipP4ypXXqU4vruymcx9e8apsBMrKb62ciig5zWYjqrwNfwxpqg6LjewB5X8tMazjmnEPNuvtU",
  "key34": "4ekQDvJNYF2wjLoxCDiytSuCLTuzceFF5CmPtimopJJu7iFmPkofHT41hdAut8NaTEYei3PZxrhHJrhoLaQ256JX",
  "key35": "2MbUtTDN6DTknV6jwAsSpp3z3Bq4SJx4vWeW8dtTbLAJTYCJeE4DcPgiL8Aj3vvEcL3U5PC9oxF43EYEKac2hURt",
  "key36": "5jYVwstSVzjA4zrTP8a6GbtAGmAXy3dvEjeXpsHZ7RTQsfvvNuTRC9uTgDYco9C4iYwZDbo1Q8eGT1m5BNxr163L",
  "key37": "2yp4YxxCRAZjyryH3iT9HDdv5Ei3BbYLuAggyaBQLcxGeutvXoEmzY5oBTw3c1LmhNYdXgZWBCCc5qN66NBc9Lby",
  "key38": "3RWe6VET5t3Yynoq4bfL3P6H4zLgV32t9esrJq4qdKWFbkZr8qjMG3rfJdBdSg9AFuAw5SZAUTv7sd14ydyzJrwp",
  "key39": "2c6QkFrj2cShTWzV5czAUJ5RPkMVMjy8ErzWqTeRhKzorVLkmXiTvA5EQyZibm9VEGGshSZErrSbU3kcJ4nS5ePT",
  "key40": "42WXSCQ1agfcYpYd4evvjBip2ZL43vEePEKJGfWqqwnW8JvMviDeBVf788q1XXREcimVrbXiJ1nSi7YbbNKTbx1u",
  "key41": "svdD1zhGusnVtb7dQ2xvxLaxJz4qUFKEtSrWYhP2niiaVjhtUE31vrAYX7VLF85ChfJRns442TRivDdn1XpXbXp",
  "key42": "624uniLa3PhWc7L1apYymdxA3t7HRUebyxaXwfXC2QszxoivK9FLDHGTX22jmngBoWZ1VnBPW4oeE5rTumZ2y81N",
  "key43": "av5c73serw2izsfnQKygHvbsE82Z236hYjJaa4m5RWaKqA5uuX1TX9YWm1z6snhkufPH2Mhxp3MZqiEaW8xyE7m",
  "key44": "3Ki1n1bgvdUCXWDNS25a4prhKeDNih45hw1je93wmHUosvUWBKtZ7e2cs759R6Q5NiRfQQgTpxS9dEW6hzG3YsDR",
  "key45": "2KPLWFgL5cfGtZjr8Ubp4EMTBM4KQwLXJDjmoohhEBJjWLxH7mv5tMr4KpSrTh8qchjHmbzmAh5MiZWcGGEucWq3",
  "key46": "4vwvAGqgr3wmCmy42BrDWLnXMJAKELQvtnxFLsiKNn6VKYm7E1cfv2qZKeEhKzovhYMhJPJ833J4d1DQhCeSTSMR",
  "key47": "5ayN4KmdBuoaCo1UB8drPi7z4UgftsuchfFcLkbX6Xm4g7eJfudYqfCQqMAepuUkiCK59hvKh6d8rWq5m4UZZVGP",
  "key48": "5yifkrQnAQyLJcdpbnSCaDZDvNKAX2TmF1enRVBoxnAg13WkqaodVDcjgnRp422YykppQByJjnVroYJcsL4V9mbJ"
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
