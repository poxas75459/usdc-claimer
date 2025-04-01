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
    "5wC7NiZBP9b6sXu55MqudBxv55aendChosoXCkvrCNoZHdGog6hW1ycfzoo38NrX37qgXjSaa3guXjcPefmaHWmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "275B4JVHHbpx7zFJJSJvwcQN7SkzM91C9uDqG39YvyA51m3CTP5n9EKCqk2k6VvY5XXkNz5fAKi6e7jLXb3TjHcB",
  "key1": "4UUjMdzFwS452A7De8LE7c9KdHUcNsFBLwy21z3uh7xpJKtiDnuTLf5g6C78kTVQaek3s7foifjten6nkGp95QAH",
  "key2": "2r1kwRQnNAcBHRtPmKoEer95Jibdgn6YR3bRXv9u6jwhhvTr67oSqZHwVhBK38zbPbDZ4xDSbTYmEncGTuCxFqKT",
  "key3": "2VRnqYHuLmUDn1TdDiScbaBPstCgiE6GzDEB6wLDMsk4eeiiC1qCgPD8ZgmxvEjGKJbzjmggaTRbY57bPV7vPJae",
  "key4": "4jXgtHmJ3D2hbacjnXGC9YovJRNwZGXD1VmHNurGK8VWtkGscNA6LeQiHEsrr6Gd62vS78abchG5E2hetZCDLajQ",
  "key5": "3UQgsxptTXr394KH2qNiHJWK5fKDPBnAYthZhpCT3GjzQyZMKei7gBQuXCjv8d434THxBdG9VUorKPD9ZmJsozX",
  "key6": "4Mjp8u5eAfbtiQUZx6n5WwXP2kwhjLZo14F9Uw4xysuLqi199NYJSFzhTLXej6geJhK3MP6ACqSuKdHBNavBiqsg",
  "key7": "69DxtPUDzkarMMeJAhHbyF6aDhYFhbUdqcXiZHZRStMAZs9EHujmcpVqMeSfQJuS52tWUxXRSHvPdG6xY2SwEEn",
  "key8": "4x78mPGeoUwAztWDA5BFBbPaZaJgxEH1mgYmeMxJVdtx9fBMP1dYd9JhZVGvFTMHEsJw3z8NC7UNqty9qNTcxi39",
  "key9": "4Kn2zjGkcz1FuEWB6dzVjKWeQ2QnH6nG5hNDgkkV4n9ohfz5cTLXqazUVSBFMe4FoUvvvx2cAp9oHoVaBu6PuAgf",
  "key10": "3eUEpwTbWwFoGU82UCj4qhqS8ArMvt3G3nKzzqeT595sui7n9S9wCUfAtmwHsDRvAPb5MMPeA7SdyPQgKBeUccVd",
  "key11": "4UovMuDvgK2eHZdhHZeXto1f482bcDYsKnvnrFtsLcB7e82BVrULRvp9AnSDLSgRFFf4kCJe1vVFWLnQCZgxEo9x",
  "key12": "4iATud65693mtqpxhJqEvDy34kGbsTUJutXvrbJSme6o6KM7fGdwjfc4JGtcsn5efy93sp8SzB8DQPfAiLwe7C8a",
  "key13": "32nGMLS86hv9kyCiWFTxbacqLamCEtn8KrakEMsXbWkFs72DBeSLBzYJ4n52KH8eEZd3F7A5mHBVR1eYZRteWE5N",
  "key14": "3jiGDCHcqxaej9LZxBBFQyqn1oMR9HL3FMS4P4GGdZmwYH5nFGHVFRzvZED7BuEakoZVssemeMHdEGsjuyfBof6c",
  "key15": "49eZ5r2qx6orALku2PNsGCCvNv6HZPCkyRYR5zN8rz3kR4FaaUicsTkHzFx63PZ8A8vvy6VBFjqXHBPWgJPgApLo",
  "key16": "3sHpVaPnCQrMgRTsxb4Wx1JLgXjSp23KyYibyqiZc8HDfapVZjAuQii9pZCfQhnysLCPLK9bEm3MHMCXHtiiEUvP",
  "key17": "2q2j83JgFnCzpFsks4hEBec9okEMz3bWv9fB4HKfjngowgh7ZsJqA6zVzgjunsV1NzuvEWtNnbtRD7guUuoU2tx2",
  "key18": "5iMnqqVzeCnCqsCCo3i9Naw3tKLoKhQDuMnKSxJf2a5nQwj8pWM5UZMWVid6FksCTxKb7zeUEsfUWnLMZS8Wnz8k",
  "key19": "qkXxQCo7ZYZ4xv9ecx29rhRE3fomiesfTfPXQZyyqpaKyu9871QcDzH7hdMuuXkTPecpTKtLtpH6kDfaheLUuit",
  "key20": "2j3zRVsgp9zkKVDR6eWMNEYt4vQLWp7AFCGiTo4ZAFYjjq8ivMaHdMqmNZDyiMk3CnJMs4aB7pH3wqEvo5i8bWb2",
  "key21": "2oZYmGoPvtDpJdgzkKnV4C73X7HQ8xKXdAkiKr1VWJ421rv9ZoNEd9RRDd9727dSiUB9qsNViWwFy3SdU2xZUCcz",
  "key22": "2nVEsqxes22DaC2cYC4hAJRbvt2i4rsDsS1fpgJrUS3ABsoDTK2zDoNDS5RGMszE5kYucf2yr8kona4JQvkJbB3L",
  "key23": "2BUWNuAQJ6QGryzqx8aRkSvnfZNDuYDYXE9QFQBJzKWZYwyNqYtDHqhx53Y2A4fTwkquKPspFgvdsBZB7bWJBQ2c",
  "key24": "4ToQvh4Mgv4AR9ny2fveNiSwsfakfQNGWYZceNBrMDoLGxza8GZLGuDLEgCusGU1RjbqEzaoS4xd8sZ5yUPbHAMk",
  "key25": "3XQB8y3UQtxLKmNzv7XXiidSYFvtNxbeqrD5AJpUrKKwxN5xgPxViAgzAVBCMot3MHoSSxyZEyF1NoQXSriGAwqy",
  "key26": "5F4rEswUxEXbAm9Lizh1fx5baW2KWLaSkTLaufm57j3hG2wBpAZmxxkeRY729HzjsC73vmB4CjzYhVVyL9Lf65Qk",
  "key27": "269NToh2kRycXv6s2afcPgknogZQaZBNz2syd91c6s6cMwVn9XWWnaFLqfhi4xghbZKvy3wXYG9cYgbXhATCeE9C",
  "key28": "3sd1xiyzNsnsG9r7ExEayT9veU2MVNba9hhWpqVqZ2S5HT5wdzyk7sdg6wK3EwE5eQv9uK3oTX7pADR5VwHEo9PU",
  "key29": "5wkbRLi7RRc3CBcyh8nwsSGTZPxxTEysdaMWLadE1rtYnnY3cys5DR79MJSRdVGBHGae92wQpjsG25mK1XAkWvd3",
  "key30": "4dfncqvxUVP1xQB1LUiLPPgSoryDMWsrZXUBDk2PeSz9Z6y8gP7sFjZFPGYfbyrQ5FRdKDNkLWKc4VcYbBfo8jSB",
  "key31": "5DKcNr7GzPESeMdzbkMJsCMaVXHiik7r5nyRDC1FAw1SV4gLK5s2EAv5EEU6pWfQAtKPkdeRNq3BQYVEe56fTyMD",
  "key32": "4eYnjMKw66oi8i8DtMDVBRMkvBVNpuj8wy9PAFZVy1q8BndL98PUKk8EDFKyajAgZ9rxHdTbUtN6mNHCBnWabYqt",
  "key33": "tpNYufk5QPWx4tULDeBecEiQa7wCHeqFggzCmqRZzM7sNfAaj714pgRKpe8ukEc9pB2C8myL2YtyxF5FUxkKqCG",
  "key34": "3BCp8Bwsy31jZ77su83wuVM45DDsRnHNjGF9nswCdVkXBe2Wacpfyet6hUpFuKD5dmNuYa6QLnAZpYbYH98vmnTS",
  "key35": "hiGN6BSSpodUshJsT2FthFfbdBbe3TzrFRwLE9Y9vq3mK7qhBZkY5YwRPiq9nxYsYbkxmrYMuv5uUVysx6aJ1Jy",
  "key36": "4HYPBFVM3xGA6XmjVbKuuGu9SXbNUk2fow3gSn8kAqEyVHJLQFmhTjPpVQ3D2ZXfJLK6Tejz3z1GueKi48FDayXt",
  "key37": "5sCnKQwMR13PA9NDbpxhyzgDPaKQ8frz2b2GUtZ3MHvN1t9CPwWDpj26P8MoURpGfSLYakjp2hkTauzEPNnQWL8B",
  "key38": "jDCzqUCWJc7Cm4sUCfmr2vy6YqDuSSJLWTNX79EriwMNqC9SxQnsgx3MR7Trb4VSPT5eufp3mJJCwjwzyGBiS2f",
  "key39": "3mubej3zbqYQdegh36euuHKYinMVoDCb59F6fGPviXaZ8tuaoncUZknw8KAayYEPpYQvEC1UWbxSt4jrfdABTHxQ",
  "key40": "2u5FP3ZH6c98MfppR1YrCZgDUMDtKh6thgD9ZspBe6nR5CFJCx7touLAGj4XBjVkEPAbdW3GScsGr7HjzqsqLAnQ",
  "key41": "4AkjGHRSoAVoeJ4BosRTFvjf1aJfBvRhR8ox68R197FEegECeLFByM9EXnKwXMW4R8feJRPfTz9Pe2beQQucfRUz",
  "key42": "4dSGxH6AwZHwNwngRUFeZFC5j7h4RzzgCfBzYtVu1WYYNhUnSkcNxbgoxZEHmSJPY7xg5bNmkupmcxdybtGYBehJ"
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
