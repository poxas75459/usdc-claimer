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
    "2JqahB7fgyQmNy7euuGVaqFqmvWVyNoGDaFVJ1k6uyrv9dLWDpCUJL1XiC4er2MTCcgjEkyoZ7RAgYDvhwMojN2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBZ6c2JUPXmiUpEPtNcZAoGa5VS8iUEDzXFnsyCdUhdv9zuQ5S2dr2mnQA1LPeJTQUidPpfUhDkTRNgF3JU5SF3",
  "key1": "5G55ycRZ4h1adKPvQxPz1fhqxNgRtYfrRYJJXUVRNa1EsQ6iMWgeTJgS5mUEYgiiEHqBy8K1S5WZRdahuuytbNjY",
  "key2": "4tmUbfbVBhNeBv5ayjbNqdr2P2yZVPcaHVQ7QLvkUREJukH6NMzeYNR5oowLJjsJQRqAWZzTPodFr7r5hcqZrzcL",
  "key3": "3u2RHR1vpYQLbXBppwjXFmRJ6yq3FfAmnkZsNRHaPcaszSS4mD2BNuiYjNPFhnpAfMR1Wxu8qsFiUjGMqCo2EyVe",
  "key4": "4DFiGTJFPPk4EhtnGJSz6Qc7rDCGkVbMNrTzdNbNxT4EszDYJcFcLkL61uv9VbB8TupLYs9GEKTHfM2ZAuotKxJq",
  "key5": "4h4tFXWJfPL8PHiV4Z11MZQM6r4zhyns3qABom2nvnWTkNAczEHmGXrzggL8dkJrKNUvUU5iLssi1skt2pgUdieF",
  "key6": "2euhhkwSTQbNS8ComxL8qbjLwPD5QPwb4ToMD59U91yK3L68Jr4vZufCHp1Rui4kWzf2paqHHKS6zvWyH98iTM7Q",
  "key7": "3rAMKB63HrfaJQmsbDqb2SXFrRMAErynwYFRbZitfCnokMwmpCRNowBNKxQnyYYpVErBBPvWcVxumqYQ5wEEJip",
  "key8": "59SS13T8eAQQmJxCMRXBw5PPxP1suhzNhxZ94HNaehvEB2ZjxqSwWA9vZFZdRAEP4n3Pr6xddNc7v59KyFih3M4g",
  "key9": "32AeZFQuTcb5xNf2MbtNwMPnB2WvKNXZ591PsqGSc9f1bruboog5gMQTQhPRvjsg1jzaMon2nRo5zRGGWjipqZpo",
  "key10": "QowL5yXZmLRoAjQLtNeCThFyBQz5sWpv1FVPwmEVqTg1Zy71cxWiWsUREFF99MmKp4ZvvvUbDt1UJaD4uZPUmAu",
  "key11": "4PpCnGTocKfPZkVUyTZz8rQGAvcchc7gChv8v6QXpnKECiJ3BUwH8ffXXjUhWAaGskWvFYstPjiG7t3vUzjHAqoP",
  "key12": "uFygt6UhSzB7oxhJi8ARPbjPWMno1JuUg8LRMgEbjuzqSwRVRjtRK2h1TCYsY36eAzukuRr5Zqdxt2Yq3eVnQ4v",
  "key13": "26bPiYt8Q4FVRzCJ3Vn57C97vGh7BaSE1FKWiDqzSZWj8yyott6qQqjXoABCaEMYE3mT2dZyZQtFJNAjfJp7SFmp",
  "key14": "5C987FoKkzwrTWWgHccJHVW7YPjbv7oBocCLbhf2mMkieUCuAg2fXN5hRVvapu7DcP6WpVtwBRS7HsxMJgAwd9Wg",
  "key15": "2mn6oJ2VKMWLsfg69oHJHh5NAeHdeTg44m3S5ScjgwGckjEqinL9xASBbGSAaDyEoE8BVhSLNzjPpG9ET8sXPjQ4",
  "key16": "2chtfKBZiAKmghZLGih12UWqoWj4DwXwfnPSzk6qE5fyba24BRqzBEhbJEPwdbX86iXZ5cdPRx6RggUZtySsfuhi",
  "key17": "4NDZs9PWnhkvzp9SQhh2YqYw1G9kcyQ8NMPYGEr1jzZXRjSWxpumrL5qqhtVkDD9WzZuxWQ5qXMyMqmeDfJCjex8",
  "key18": "36rrimBmCc5PmoygWir66VoF32pbhzPznV7U62oyLPmNK8PAeXnWvZw1eoWPF9QLGWYHgMP3YyCmhnm9JR9KyFej",
  "key19": "2Un16a1WesTJUFGKuCKAopnHzP7pk15hdUUGTSCozWMRYZkbBsziYqVsufzTE89SJv5J8Noz5sEtnqb2tMNvNJPU",
  "key20": "2dKJ7k338qZVMJVmRdPPppqTGS3iWCQKWB4563jDdCBnYYQtKue4QFzycRBw5iw87CPxn4hyumN9LnrzX97vS6m7",
  "key21": "5r16CRBoKuXf9jJpAcuuktiF3Yb9HZ5vvxrkYruCpJYztrjXq2euymgvTh4rMvJhCKhdJDCNeoM4ippFJ1vKePFC",
  "key22": "4MHoHs4PFuKJVkWiNZxWmiY7c96nTEKahiaYtANhMLePPgyd8n74KgaTZZASbXjndPfopUBatKkNz9zT61i9MVm4",
  "key23": "2czzwqrJ9y2boL4CHziPsUPT9ZiUSR8k3wpiPdo2Ln4AcjpgjJJFs5QGoSd1cFUWjQzbjPsESbpCXhu3Rm6HZ6Bz",
  "key24": "42e6HigDgt3NeY4KKNkNTsD6dcf3qnizWa5d7vnG6zKHtyCrre41TsrXoMbL1254rjZPXCyHnR5WkLaTDzcfQhY9",
  "key25": "4tzCpZGdghMaP5tkzkRAFnChwsZHx3JHfUAVManGKtAYoRUJ7t3fj2CzsEjsypuyjbkzhqo6EMnVHwiouJGK5X9H",
  "key26": "rU2jp8fmAJL2bc37ePLpoQZoSYhqYtYnc1D8fDYjTt3nRueX8nctLCfrq45pxbs13D9RhyNnuvGKtXVVAY6dEf4",
  "key27": "2Cguv4pnagJwe7q9K7CEm8Mfr8iYkMSgNxMLVnb6ULB64kJLNLpCvD7mNy7bKeAGZvMBJWYmi8DhTgvbkj4RY2FE",
  "key28": "3aujiLBPP3t5GkQzGAbx3Tb2ozfZLaUZgyAdDrsNvHbuMkfPDR39Vt38ibKzbharRJaG7dooQFD2xGRaBkg5tdjF",
  "key29": "5pbthmkFhExmLBidzqDQpoQGqs5eWMT3QBs4UMRqqR53hxgunPFgygq1jYBHFfLBTEmqzz9RFQS1ZPsL8NT4G2LE",
  "key30": "6mWWVa6Bw8GKvvxHMf1CqQVa9h1ompcNTjH8u5SDHLcdbevjyG74VxC5tvfVnzbHWdRBkmWtDPqR3cPJwMjdVcf",
  "key31": "5WZy7hdjSufNaSuqv9CUrUgRc9uaFBhWSf7koQ5uzns2gGJ8YfJuNUD7yoj5r5pirYj8KdmnQeY6GaYP58RRQ8p1",
  "key32": "odsAuqE79QTu2MropHg3pLge5yMWyirszwNfmvzcpotDav9nVH7dU8GChDoYhCYGgGc42YQSgy7WZSHBgYELqAJ",
  "key33": "5G3sFRJ1BQZYNgjsceSb11XXiYF1MkfhNtUT4JP3c7M8ikUN2N5yYJEiJJ7Zgbqi2Dsp7p6DgVPy7UrgLzYuDUEY",
  "key34": "4MFmg6nSKVr1SGTTwTn3261VF3K4X9FYwY63KH6Pw8W7YenhMUKGsvgnzbx4vnJpMbZgaBoDTeY21JBEyfhTAc3B",
  "key35": "24EEMBRVREUyVefYrM2XoJTqWR418BT4Y8Jo7rApCM7EfZwiwXnp2ggbWKxD9spLwZKm3WR6jsatPMQL9LfsNJra",
  "key36": "4PTBFi6VqcmyWAT7tFfNbfdRmqrGDG6HHobFzqZmQKZ3t8EUTLJSTbA98gm3Jz48Ka9saYvLggLq7gN9V22uGehy",
  "key37": "5e4iuicgieYbDx5R6a6hs6rhdzwhEF6p1R9SjjWfSaqAfZDQwed1wC5QvebBPAf28yb6WjWQrfwKnUAXQ1Kvum96",
  "key38": "4jymEkCs1F5r2oC2eZ8xqFwKHKugXu2ywNqtBtHVxo4jTzyeMvwjDnH6dz3TTdA9k2CwE8qsrLZ6r8Tb7yHBAgh6",
  "key39": "2vzu6kdfgbn6p3Eepm6W8dttGE2Gyg7bPkVf8jCKu8qz4HtSkY9RSLi6hqHomKtChX2kep3PqSjQbdGQkznLQckF",
  "key40": "54pL1RpNWFxhh8aSQx1MsQRqBTfYHfEaZiKErQdrp5aBEHdG7ucyN12az8HcUbYR1r7WHh1QbyTqA5eQ9PYwaz2J",
  "key41": "43UPrnDu8zZA4PaRxnFj8qWv6Wd4rpeGn8bYe7wMX7KvXsPtnMJh8CANFM55SnCsiVqAnxGzaVF4hx35bnPhPecX",
  "key42": "YrxqyGnDNzkpg4HKKVg7WqxVRQj97i6XWa598mkwQRm1aUJKbmCjk9PHRDmhYdHbbwSVUKsgQDHpUMJNikpVibc",
  "key43": "3DGdU6guz1w4kzwvQk3ZcedBZPPnrvVS5xa3M2cv41Em9DS63Pbr1Ja1x8BrycY2GPxdRea94bexK2qGk5kg9PGN",
  "key44": "5UmysSdiyr8XGgzDGs2wVaeBHCgBppFUog9EMMKxAj9VPh79mfjBtCcQpm7uNhJPaQNpCvCTeCx4ZxdmHSdWmMNz",
  "key45": "3apzaWZmSk8JN19P7E85fy9arczuXEze7FZtpr6Dp5eS2sAd5JZYfqWbyioBCwCwtNDVb2yrHbtFqCk1aNfH42Z1",
  "key46": "4Pz1Z4XzMNMBgnTN47PbM9SbYUVZ1aEGShWL9ur62ceWekSaJDDnwkoYbx3XYPM5sRLDsc6wjquMqk59oLPy8k8r",
  "key47": "5rhf1Z4SmwVcqqdR5yQF9WoTYotrkX9SdN2TRLGvx5on8iGVyV6iQnSAvas2XJ3m1Nzt7cfr8N87rwzP9VAEd6Hb"
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
