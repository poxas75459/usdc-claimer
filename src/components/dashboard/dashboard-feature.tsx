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
    "5qigqLiDGiKZigAKeBBXDC8dhKZE7CXgv1TQmyf4aCnpcCiiXXPadpqv5NbwC5zDrSFtypn2q4JaCpEkh7uNsFMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EHSnpiEfd1u4zSmPZ5w1Tg4kaejzbccqk2U5kgc3wvknL1RAnugCsnEEkJVmThzLuX5tkGRcQy6JsHK2aL1JYbL",
  "key1": "AQ7B3FVfmuEacqVg8wvVgUF2WHe3G7x1sbp3Zdxny2yCNRH6hSff54kG9soBwM36YRuE66rsJA7N91XdBZ2HQUH",
  "key2": "2E7aCucbkHAWfufTv8CxZucj2b9fhHdqBf4d35bCvYQZHwqjSdtTeVAGV1AwTRU2vhMqUdcGaPiDj2aW2fJ6Kx68",
  "key3": "5UVWQRtpwt6mw1xxwxUezV4BTMg78wrRFHpJ2oAgyjHWirwDqDPLxUKi2gVqYtPvViU59mrTA6P8kZ65x8d1VEAy",
  "key4": "42MzXa5whPQndqHzS2TDMzLWHertTtm6nAn1QidhLfCxW5oakRSeLrpvN8Jc3mKmDvPf3xmaEkr2QGMqgvqGU3Jm",
  "key5": "48mfbBAwJRAveKZE4UKYaTKkQ3AgDmvmbZ4PrfrBn3hdTJ6xXSyUx8GGV8diaCR4zhf9gbgRBA1DNQGzWmHiDpHb",
  "key6": "2M8vdK1HkKmuQH42qrpCK1DQskEHsc1WkBKVGoEcub1DcTiHp8ehHDKirV6PDkvja2GorEhLx6z37tPyv4daQYZP",
  "key7": "4usqdQUzD4kWR85wZ2GbGyPoTutkP6kY5X5YMfoVea3csXmvWtq3jZMzE2WTm9tNRzdG3bGDbMoRkySEGtSB49XW",
  "key8": "2FKfJwrBLrkXMV2ayksgYTXFEMFnTWUEQnUxjLpTYeoj58S6Hkjy4xSnbvWdES5jYVk2JFuq6gGDvh4WUWHNJgus",
  "key9": "3bt9tCqXFbfJdCRqwHigC1C4noQmFMayU394eHfCJ2Kik4cfjrr9bFK7TeKc2qAoaekL5DTtGy9PigFVAH1Cry4T",
  "key10": "3Fzes3cPFL4CaCNCh9rtwnymNg571voBnj7XHYUNQVwXZ5zqwL6XFHufvyatbvw84i5LckU4GQ3mav5Am5A2CqDZ",
  "key11": "3zrbEwvqEvKVqjUxBHtjAzqCN4wRwerUXDqsjQhsP3K1DGy153uMdd5WmdSbqAee4aBNTJxDp4K3okJgdfdMJooA",
  "key12": "4rHJhxSJsNmzYioHA8CfumCbArjUBihmmN59AKne5ys15UC1oP3H5kxhHuzoo9ZRJMNSVDv1A5GnFU7heYn7MPSG",
  "key13": "4EJHN8Rmhm5NHJL7j78WLNDpZQGry5fzUcrf56MQjr34bR4a8cMq6AJAjQk1KCkkL8EiXJSDREvcwFkqdhsB7ZQU",
  "key14": "3Lvitpwt2qQCkcUD2hepNBABoQ1aWfc2X9yeRM7jdMG9TDVkWN7Y9F4NDrUApTnXEA4pNwQYRTB2cQcTHBghQaS2",
  "key15": "3CXuaHJUJ2hq3L77FjNW46zmsbwVMLFAYECwC2aBks7TTbkBk5RprGnYunWWYicwoBUpnVybegUAEi3ZgbKbwJWa",
  "key16": "4uThAy3xn7yimKH42yDxUMQuuRMsezfteFuxWAsyFPwLSb5UFzXd4T8BAE9F5n6s9JhvytvBDQsC3k99NCZ18RW3",
  "key17": "38eVZwqS5KsdpV4ki5veeT2Mfq9Q3rCNiWCHriPqmxAKRzSSqYKXdBu6G5RgsQLoonW2w7Q5vRieGnb1ynupkgEp",
  "key18": "bV841iKuikQNxDczJsK7oXu2S4VGCxwS352wERQ9ufDt4PUf2xrsqKwdX44mdJq2rEFsKeUURTsKw16EDeFDfTr",
  "key19": "5szzMxZtp8UYWgZeKNhciU8o2T5KfKK4jLe4wfn9yV8Tq4TFPNkthxYV2DfUJ9Wz55AKrXootTC6icxhoLJp1HgJ",
  "key20": "3UphQc9icPaZtqNCeHh46c34RkePq8fGXs4hqztRNcRWDAFTNZm6Zmr19nUsYYDSC4Z4QrFowPvsJBHMx1ghtSha",
  "key21": "29P8nRxknhaGyXYJtxkH6yFVDxqYNQuanXHffsMsJkP5r3Ts2hXZfN6CjzzjoMGtqpAuVeeppn9PibLY1DUMZahm",
  "key22": "2JmUgvw7jpSJY9XJk5WwHqA9FmgcPm7dGhnkDWVU4cuNQJuWsa4UjKv131xD3S9hhFcGkacYzAqPZrNnBAchwvtn",
  "key23": "3rffXYnWmkifs4ZCL7zdrXVRdcgV6pdMCTBFUwxamdSAiQaxZqEMM6DmAkZShRL8YmZnt2PGeY4ePeCoLKcnTBYK",
  "key24": "5kxC4jFmK4RqFkohEJNsXwXZ6k9HG5XTT8joSovJaYfA1dBhFxaf5gswrqRbFs4CtQYKdzygcnUho9qX7nWeGQwB",
  "key25": "4pL6F4AexsixKb3kKZ1XFSyxZs9LB2Zr4msyrdi7s9wLB2yshZbSUmmDtXT2WTpmrEqPRMAb2vVmbAtRZLM4R6HD",
  "key26": "31sfGBoV6sxKRdaD4UGkWTw6t2xswtnvYdZiv57NEU6xZKrqww53Ao5gqJjZR4ePHCRLpMXATab6tMfinqYCbytF",
  "key27": "k8MXoXQGRUfcyQPx7adf4asrd37LPwgj83MPtJtqKerg2eKBwfyHtmzSsZJEYe4kDPUAvNTt3WV7Ei77HqAVmnV",
  "key28": "5RmGzyuNnc6jp4iqcYEvWHxuFn6apGNcbhkUpBa8KSovEG9eQRobYRm7eeycdBgvCvKVCzL3E4KVyYY8ESYxir9S",
  "key29": "2dbz34t9J5M6vNZk1FTu6Abf6TDHPb2xdjiCVKdnsVPcgDrMh2gPc6g4329jELBxDyQETW1xgLrEerVvv4AU2Q9r",
  "key30": "4vCcA7EatoQjuDK4pegibpP1Mkbw48n1yrQeqrz9Po7ALxGNvGJ8RLcJTzzCwrBLxZUiE26G6R5cSCxscoy9Y53x",
  "key31": "5vY2ecCoHs79WLABe8B8vzNF5wB37fSUNR31n9hk3edavPmPKZAGZhLAtGiRG2EELP9W3szCu29jTyb6Z8YZcFTr",
  "key32": "5WbGv4E6UpUqDJAMYAX6eZwhCEdkLrZv5mgVSbQTTK3GFiB6oj65H1DjnGJEZAoeqBi9KHwJoJ9rQxfZgvPotNz4",
  "key33": "4Uih1ze9TgDVVHyRoMhRpjwUNrzrDhNxKWbTeagMkpfB82uXXVwuCeEG3aMb4aTwZupQCXnBgU8s46MptTzsSrBb",
  "key34": "yhBboBwGYAsNhWWLt4r4JGHADSjLcX1RYfxWtCWoXfuLFduMV9bRXPzMGPxRDQEHMBfy4m5HJCg2MJQXCzXbP6b",
  "key35": "5T49RVAT1KJL7ULaWV1Fx1nVmKTjcTF4FLfh9N5sqjNY3JzDmqqNiYLJ8pCXBovHWfhpcE2KnVM8QkfqvNMU1tSC",
  "key36": "3rYNcx4piZzjCvV3L5vvza1uh9pmMkb4i9KRVr7vPZUfESirg1D1ExPwuXHHG3sLr7BFLFDmxfNPmBVKbX2Fx4bK",
  "key37": "ibTYXhQJ6DJQzdzZzZtVqZoxCzLm3EwcEFEmpzKFQoadjMX8ZEz79pFDtaLbjQ9t8oMYBswMrZpw9i6dQTgrzuo",
  "key38": "3uKYDVVr1rd3qADXtyBPJgkkW7sLqE9mJ6rZDUJFSGaPFU3AJAhERwfUEdG99ysLee8undz2o5xNa386tNfgV1UK",
  "key39": "cA4THZ7NqJ6EGgm2vrJXgaiJj7KQWzKTXTaNUBVLWEU4jJ1dpKUiEuSoK9KtybV3Ec4izpk7uS7avUGbneU87gx",
  "key40": "3ZYaao99E2B7GjC13MsFdpueMG1k3h3FaMCa2X5UzxJRQzZ4YPb7krnoNGQMFYQzoW9xELNWEQKMiH94EBn3VsQw",
  "key41": "DjYHSJ5SgyjKNTDgP9z7xkprXMvHcaEKt3sNf5teb666jKckkcaRyuZuXQDHw3GLFyZCkJGvGwWGHTwz2dCp4uP",
  "key42": "3riFdTPmVfqyZ9LUJJ1FSKap93Wq7dD3H3rLRqCddoPYwmuLVVUYiz6EBLzYVSmVYeKqLVK5NU6HANEWKM368RNN",
  "key43": "3UH3Tzm9GMcZiaKGxAaTsGdRuUtLQ53n7vb5CUJPp1EkouNZceipUbs4KGonyJ3e6FZ6rGj5xCtNfu5pVszLLkxH",
  "key44": "4FrBRh4SXdn8o9AgSBvGDbffC6FVDa6XAPRJzyyNfoBu8dJgdvjxYHVrM1mNjLC3t7XxpgGwVexqL4qXp9xxg2sR"
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
