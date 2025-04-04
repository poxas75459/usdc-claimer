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
    "27DFpEJmnEwKrbioRVLrx5dozjCW8edjzqBTPJKfkMABb9g6DmBRhwWBeSCCMCA17BkJscV1dkngrPr6XVotHkrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ud28zcJLb9S6QAuQ61xvvpk2UFAiuoJVLE3yL6Ta6w4GmDQGbdYBuebwkL4q5M6uQQejx5zJ8DEcaTd1vcDALwz",
  "key1": "2uuriuvnpS9Jbs9tDkYqZndQmBprgJJtMPw7pjr469c4ZtrCTQscRuYrorFZEkZhk7bEk3TtK5AWec3aMpc5BwXi",
  "key2": "2Dvk5YobAKUZRbqp8S8sBMZ5t79kHYMPqEHmHiYQF2EyyotcmTHvwUfUaRNgrX6fBJrwD4wUk8C6M3rKdyVJ1jTT",
  "key3": "3qnA1xLM6BsD825YacgHVjmeDuqsUFaHdvuhvDWxsAcJ2RrKvLCMmFEUsV8MDVfWXRiN7hmKa3aaTVBqjry8D3p7",
  "key4": "2RDvVRQzboanfzSfh6ZALr58PTk3DT9MZ7eKEaNkG4MPaBaor37Wh2GFyxEb4jqaJGhWMyBeKYxJqtAoEB193V8p",
  "key5": "3WVveJpcDCsQd9YnbL3EeFrP86VU6Yh4Qd2qskyfspLxC4Z1eFz9ZNe6fBfE6Vt2x2ncTwXm2dSVAW5F8fBLUPBx",
  "key6": "2j4gPdzs6LiFUw7VKraQQiy4p7YaeH3LEodnE8mBjXaGW8e9wK5u29Ha6J6BABxRGxDKmWMaUzoetFS3p2AnQoYf",
  "key7": "5cyTAFg1KVSYzGiXwKnrZXBe3bdTkog3nTJqTsto51Vo4y6Cf1CiSLxtHfFAgRXVrcxaVkdQMbZ93W5fooSy7SuL",
  "key8": "3JwhUWNqaHoMxDSqmYjsN3kvctHnaZxsjT84j78mbUPCyn6NKfhUqWmAetnNJL81dPz44gcy6EPyMhwZBZL7KKAX",
  "key9": "4YdjQd5iCzWwkCYUTkcNfhAB9kaNgqii4KhKSPUzcaNH1m9x47vZY3E7MBQKY2AfK3zqEBiqUiVgx6YA8MeAHKsD",
  "key10": "5ZpDsqWuPQ4bcQMFABSTsQWEmwHfzk4cRkq2DpqQiFrf5K3pFhRDjVLZncWtgEWTy84F3hE2thye95J2UcgVa7jY",
  "key11": "4btXA9zJZGsvjDVdm11ojdzboLc6Ygfyg84xQ3BpcBCNYyw5brUuXyhMeYHRYNma6uMUb4Sbhh56BWC7ZXWa2z8w",
  "key12": "5sDkpYqa3SrdskNFmuSH5ueUMNqVREaWU6SnUBd1PZNVNj7pDWNypAt91oBCbMQgZqg7JRVnbu4dJFWgr8iuhV7D",
  "key13": "2zn1xN8UwK3ixmSn5rKxMJ3eJgcx8jQEgWcEKuSsZAw1KSp8jcjyTK96qj8kbGFy1ejib77dz6cDjphTj6wxW4Wg",
  "key14": "4MNYYoRd8xh1PsxH9tcvQWVdzSHXLHYn8GXg5ZaWnrSxfgDuH1eseqZ22zQCjEXKzKUhEX1Fu36VDzLcvXzHwsFL",
  "key15": "29N7kmuGZSZDQzkKWEfnQpPpBvuGhwmT2kFcioyxzaGSpC2vB7BEu6pL78ByStPmF6PYWaKvXa8VCs7taXzfPyZo",
  "key16": "4S7Ng8KDsK8H9pfevNRBE7Dt9wuW59sstHGppMi8KbhiaSuGrcwXJdMN7GTQbP72FAmrYJRtwRJzgDmtbZsTS633",
  "key17": "5pwpNYXAAMZMFqHeUdpkbgjHDxdhoF6fn7cSsvnQuQ6xhrnd8oTGqrVhQyBufjYtnJPbcZCtFAhn8M2s6AvygejW",
  "key18": "5LG8mxVEiHWiWrehMhms7aU1AcPe5t7MGRA6PaP7KGtB2K9smQLfMvcATxRS2Ye2qTycgSUyYbWC8LqjMURFazF7",
  "key19": "G1BgCpHYrUQuJStLroWVHxY8MNhG1p1WrJbbPqP7HkVRfWroJUn5RjZqWBGGDvMhdqrZrPNQHooYnjgJG8fbRDg",
  "key20": "48isESW9EbC1Pm8EG5XcTgxNhXrKaUQXJckiKKShuaW6YStii5oqzZN3NSE48E3zjMfcM7PtJpUYUSLx3ULjSFMm",
  "key21": "22SBiJ3HTj1RnGHwxiPDXttDQBDmAeNomZVckcC9xHLec2carEJu7gH5yC3AMc1g3emGkESPkuh5R4E48JaAEFwz",
  "key22": "3fEWRK5FtsUx1HMVwGKqVJfjXH2bsEj3wfKCryydAS5F9UkWUmLgMJ3VmCw2w6Am3XVFPURtpGQW4rg1JiUtLsXz",
  "key23": "4TwRHMk4iSuLKopewhgP8q9AGrT26N7aLmmPgPtnVJFDs1RcE47C8tSKo5nXRKL9SpNsAcRbqBVYQX1LvrNjJDbC",
  "key24": "3WCKwSBTDn2xsTtSeZEL3rD58sPHCAu8S84fbyhDY584mB1tW3wkigdDXmGHvHXphRFLX9vJo7suxuFEtfydPW87",
  "key25": "V9o5Wy3tT5EtxE929PmXoCFRFmyLeuudTY3TZwrhy2JAYbW9Qa9EDuxLzByrCiHK42ZRbvzzdWvEq8My1vDhMdb",
  "key26": "4jeBJjTLPyJhmTMRCGZs7CMRaNHuq5pkuLFun8FCNLhCt9ZK2HTPLvswpcm5sTPCv1jPCqcGQMTuD1xpDNdqd3q2",
  "key27": "3HZJwNchRuf2cXZ5PEqvZBT4RCnqSuKFDWDAbXyfsWZDHYXN5cRJZ6SyvkqLddiXUL9ACWiKVLRxUwHXmFJY73rA",
  "key28": "3eEBSccSg4o7ZZ6bMATSvW7VgeZfuDinexC2m1zDMeVmH2kiDte1f5KEwRUiYtSwQci7dgDf7T3nZUNhE8hTVeF4",
  "key29": "SaZfRoLQjyGxThvBHmjzxV2kf1xg3j6c8C7nKu1ZtHDrDgVoWzX655RGJpxFjgvGzUVA6ijDDhxTK4kgJSM3ZSN",
  "key30": "CWKMwPqEN3A8dGPpPsdsrJFeEUnQbvBzey1qw41dLxxfFGiPdWmrwSaKqEMQuXm3cG7kSc3YRzCK9xCG4vd9DCg",
  "key31": "2T8VtYQzSHgZavhNexMWBdw9S87P3pCbcwRBnadoee4XZaRCedDz4d2EAK2GL4AxorUryadBMKTcGc9UdfWWf8yW",
  "key32": "25VAL7hT1aatvLYwMqxnpoemwwVcz7hcym14QqwpRu1fXs8ZtGaAgVEjgcz13yS6cmG7rqU8M8uTPmuHmz3V4zLA",
  "key33": "5PirFYPYXb99cxrYmq48zac5ammBZMGmoApMVp8i59Hf64yEUsnQGQg1V1wQ4vDGjtSuNqeNcsC8dkHbGK6Yz69y",
  "key34": "4Y2kyM8fYxuP6viKmtfWW3VpWKr48oM1A72eQzEwBKBpmvp1JkCNWVL9oimNonAyKEe97VnYDeiMNnPpEZTFVeuM",
  "key35": "4neLmmEJbcMv9ZTYEXke6FKLVgtHc2MuEF4Cw2C4EdHyDved2txGcTf1iAqs6a3Xr3fLX8stywhGz32uUES2NFJF"
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
