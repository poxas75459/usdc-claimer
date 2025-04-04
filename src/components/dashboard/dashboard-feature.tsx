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
    "3Sfe3gcCgFB8Ds3YzayfMkypR3DSj2CHUb9yufYgKA8KqeaLgtr9HGfZM8PVbo1KrAHwLfUe954Cb1Munax7bpfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PjhEKNR48p8iGvapXsBrJJg2AUZbshdS4HWKN9fMy6urC6YK7Uyzy1ANaTqkSWWrP3rCXckpsLBg26HkmX3EtQj",
  "key1": "5gjE5qVuyrnuuWbpsum18sFdzE3pBeT78bsfTgBqN9mdcBmAYxcjiv3gEisjuWw3APswJ4J6fB57tgrGrAo5vwsL",
  "key2": "5JQFRAevZqGQ2sNSZmSrokqzfanwQka2TWV6mF6s2HBk6Jj5it7FCBYAS1obQvvDfYQmzdJ5asiWP8MRbmdXNFj4",
  "key3": "4BiGUwMJoz6MY8QYmAzbScuauG6jqGWmiQn9aCy63EMZuHF8CkPiKgDdbLmQ2YHr9jY9rTGexMrZxQJRiWS5UJBZ",
  "key4": "4gitQyHXqap1gWUcRdq8eSYUUGrHvhn6jzuRiLwz3EEkcSgZPbzm3k1CCmkKL4A1VHHXUEE6e4aQ78ULZegtRNg1",
  "key5": "1mcgXcYG7o2hg13gJpwQWcYA71VotfQqjaQX9TR2VnmcKAiCkkTgfkBcsenHTVACUVPQSsyC2FR6fzzUF9mnTRW",
  "key6": "5ryySgLBZxMfv7iYTaptBq8x6kd3FEcPb3hgfEF1LuHytn8P6tA2j9mKeXRb5gwqdM4qk3JtV43k8zasMhU6ePSB",
  "key7": "357jPQde1Lofz5SuG2U4qq3L45vMwyszSf2L995mCNPp2YVgh1pRXjpDnuCwMr1vPYqk9GUWzUPVM4Yo58M1QEAp",
  "key8": "5974k8BhXNDyayQdZx7Kw6oHNxTNFKR7mppYvMRVVeBNmvRgZ317y2p2rqgR46MF8yV4qfpoSgVC2tEzLb37viXH",
  "key9": "7bALi9HjQ3ACsDhmZPxSDpe9k18c86M34CAJcEBdFXrkEXy9qPJW9Ak55SCr4VBoVkJ5oE12d8EnMiZJvv9boBN",
  "key10": "YtMW8cHNuVAQGFcufYq3c8Nxq673ythqPkZJ6Mp3JnD6B2VreKUoQjGo8UJTVmJWmAhBD58Zt8b4Kh98oydKXPr",
  "key11": "4K3upbJonzkV93EtfX1ut2C5Qzw5d8Vv9EQkt4xps2VoCeMHmPsCdn9vML4Pd5bEKouWJnh3LG6U55oNqV5dT99c",
  "key12": "2JdG3j4vcsXxJ9gfCJwYpqQiFb2d1bhNRYV3KhaPZwAhGqZHNmCSRJ8DQH9fbxSyFw3ica5AeojakwLAhZu7oa5r",
  "key13": "GGjVYAgQFtK2WxtYavTwYhK2bA19NnJieZu4sTA49QzxbNUtvdiDGqm8zJGd1LgezwM6kJ65fy6qFbcQxEZsjSP",
  "key14": "44zJWVvspoVr2rCKybiF96WhxQZERBkH5G4YxbGiYSUws996SLGyQEAsBBQtFmB5jsL5kZ5DhYDQrLvv41aAiLtU",
  "key15": "21C2wzdcgfWM46nhqLs33j2bgVxdQtYud5JKHTztY6w2ioWHXB5PVuxqnZWPMLK6cAax8GsWpkmVx2iGRi6xnoxj",
  "key16": "5AkvQAp3XbVjPcQWxyVq5MdvvwFa5fW2ZtwUXrmupMFZD9FKDAXrPDqvksUxPQCRU58tkmKdiXq32rpEgyP3VG2n",
  "key17": "BACQ9GJrCFReF51ZT2UD6hMWpNnuNFTM2fvdhT2Buh7JJ2qiTLobu3eXG28ua6CNHvhq3qEcVqBEVNnrg4QrKpY",
  "key18": "4ZaTA1r6VwY8TXpALhdUC118HX3mU7siiscnYbJCsBXykQWk6Aj3rmePqjcaJyFmMxVSZkgmT5JmtqFd3b2kuvuA",
  "key19": "5wv9iu1pYdrbtVh86GAgxmwVZYuEgt2mAfL53T61GAWpZJ3BRsdqiWfEtAKLVgPmh8oosWNNAj7fQQhMjqqn62na",
  "key20": "62ZAJkGv7DAG5vTyTHzAuHTMK6Gb6iKB9NYTgXZ44NRyxESJ1aHbCaUnBtSoiYFhtqxdxTGf3EtYPwvh67TN7V1a",
  "key21": "5dBNDT6Y2Bxew1UykNPx4n2rLKCSnZkdoPZSK2nuXuXDcHAVJBcStwXgrcoupEeMAoNBvCjsB4r2cpZFCJdesy9k",
  "key22": "5WC2dCZFSTPFKznFr5xuALYHqbhSoeBopEsZRdFzqKAbWzL5Kwc2y7UwWkN5kA3UZWSUZMCm9AX4hwn1CSo7mKY2",
  "key23": "4jJgTfDytVMUGJgT1ZBudgZe2SDztMqx1sFXJNrVMeSgAP1M9TdA1K7ycEjpK4YSV5T2KyoV9gekbkeyiXuifzRc",
  "key24": "3gCVcAVechd8Ft9d4ukY5UV4tooQjbxSEWRWwYSGcueoZqktA224ag1oMGdphNzJyLygpiBNP3wPJAiAPJaf59vo",
  "key25": "3jVwW4fWaJiaG9TLoEVbfYLp9ts5FtiCC9znZp97DZuvuPr6GNECyt1th4psaLHUs5UkGpwkvJ8n7t9D5sJuRvtr",
  "key26": "4vTqLGpekZETttXT4rsPMD7oy8aJoa7ym2g99r28QxaCEwrM5jkVxv5eKCvB4zkjPMvQDWTtKZDHY493xiroREM5",
  "key27": "5PhoVrSTtczXFfWCHPYMS4xNEJmyxjwp4R8okNFzXHsTKN7v3meKcVeyPFRbngp3YYwfxWEXqv2cCSaAqHeWJ9j",
  "key28": "rhxhCzpEFV7NDPqxPxmJTPB5ETYDZZEjiYhTvxEeNBENWtf67NQSV7HrwrugXuHHyr4xVKp9i5SFwBtjTj6SW4Z",
  "key29": "22t5fNE2WDbnPR4C8myCrMxdSmuT5Tikrq96JJnspWn2LRTjV9oHqDsXWNiPx22udLML4tAzmEK7qVKKqVRBJPZm",
  "key30": "3QdsPQpcJPTpBSoySLjp3xJM9kzAamWwxfz5yVKAhKswe2SRUBkoVyXEGUg2WvSjcHnA1RkykVuFNaGZEuHfXWpF",
  "key31": "2u2gWxsrxspbg2HRhiG2aWYaFstLW2rGk5hV6T2gzXqdv8NRgLcbdbMfViEkC1cr3zDQgFFeja2jLHtF19MsahAG",
  "key32": "5G6tY3izieK228aA2L4HiXUgQPRLNbbPo6qSgzF8kKimjSDfZNrW8JeoXoyk4sjwCpqgM1hiovP17fX1kuRX7ZST",
  "key33": "3dfYBh9u6UPfCdLJuRx2G85ed5m1cVvF6kXBVUh2P8pp8QjpJy9MFEmrxrEKEbc8joKPY2Jm9VaFmaabmSqWR2JC",
  "key34": "5VvfUJRwU9gJWGqaQDc5xJqDKAhZ1KjyQzNu39bN9jnerTNPgZ5rqG8HRxb5RG28XK2LCJJr9oyV1yjiQBRcq4ds",
  "key35": "CHp8tpU37JsJy1JsPcXrbyRbPM7LVdEqmsGkHmfe4UTyQcdo3EcLURfLM6XuJLJbfscw4zXNsi8yE3m3szVpdbs",
  "key36": "5yexiM93eZ9ShHfjjj6Hip4b6qxEogh93wP95bLY6y3dj5DZ6Cy8nyaiAJdzpKtsT7iNGSe2YWN6Dk69SmVoHzBN",
  "key37": "F8RbNShg3bb4QZ8e9uZnWMcCw8v73Aa3kLPY2MB37csYFw9ZopynxpnjbiGK7SJtHgsqLyFzRurnTVZaNvBtaNk",
  "key38": "MwuLMHv4B4bbvUtJV2J1587Xc2YpNtkEc6fSaQohEveHFVGn22u2fMt1cfgMDqSWjVzvvpsqvrydWeC63nHZQ6M",
  "key39": "dmKJqdf8offHP5srG8myaDjnWd3uXZhb5ehstbMyLdfaqxU2rjEZiJyL26vQH4WK8vk8rXnsQSxCvqF1QoaFgAa",
  "key40": "5g4FyhLTX6zVz9FeDPhTCVEbmqNd69423bP5SK45dF7dMLwd7rht9oAFjPSJUAvWr7c3QaK7MR1JwzGQgVxM1Pow",
  "key41": "4uR7Uw5xzzUMqZz2KsArKgjBrt3GMyQZYcPgkMudpJscd6zYy1ZvVPsVTV4zdwHnATX5vdAf55HjVEigqQfuquou",
  "key42": "59wkNLdBhre6C2DuUeCPJ3894jjRZaxEHTXkJ8prBsXfoSymZUEMad61q71dmjn1o6f972oHv5mNJMNjWqXYEin6",
  "key43": "4HfHsS2ooybYomPtH7wADhV2KY84JuQBDA28txx21qkdycfUbjffs9bvCrpcxtagkCSbAZqoLCcKycAMZLAMtet6",
  "key44": "22BvaTdrEYXFLHNRrmJEDiGqLkrLeD6hJD1zeHWbJzLHAksF61zKQMBSPjkMpsi9iqhyNvvpbKoaWMBCfwhJRYQe",
  "key45": "foiAgyjgMuv3nS7F2WwPtXuXWvyqmVSSFaSPWH8eoSin3ESq4EawTrV963Z9QysaeCoqyabqvekUpS2DctihYfz",
  "key46": "4anxQqPmFLcqP9iJmRhEtbJHqDtuQNvaBciFdb5XHGhDxJoWXYKNFXqtNSsqhkbkX6WUcJvUwghTBumTWWA5LLQw",
  "key47": "24oE39QzMKc4VyxaZEt553Fejvii8TYMuWMeTTQeKdDvMawSxJKKSmwfMnApKgJP8J1MQ5sgMZ3sVUTKGWUE1FuP",
  "key48": "4i9byfgSch3XSGzYcje88U5MKDxtK8LZkDEZ7Z3Hx5i3skqFpYquyq9jmj2Jo95ewpkyPP7dNL2V7e6zFzQLTwGy"
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
