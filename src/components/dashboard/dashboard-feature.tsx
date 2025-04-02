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
    "2UZaJgCZVQdKyxGF2yUZeco3KymBZwb4FCjfDgbpdwRaztFhNyZjPUDGY7cXkTFanUt3ZkryACzxnH7v612wCtfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wiS9XbTvngveLJqC22EU7uABQj4LN53wkUoGm2vLJW4h1a35yQVkNWuchkLK2rMmX5FFxeUce4Ra4QpdXg5FB8e",
  "key1": "2eKCG3bYuomXzCkEYFSqJvRxbdbAaAKfdmN4ti3M47P2euqtRe4L9M15a51nPi27cvYbhiMEUCk5FyRc9E95kzmM",
  "key2": "1iWHYbXc9Sc3jhotp1WaarjQKgJrRkwGWdJA9xatB6dfE3vKCD3aeikTPRCTovUtL57hsRYiq6M2u5QsJZhV2rL",
  "key3": "9yxBKtDCf5LfCBdR4h1nFqyZ9vR5PpjoGPm92rbXSvzANbcwdTsrWTpCM4CgdpBBbKbiPNSVC2TDLPYvkKwE3AA",
  "key4": "3TgtNN1yTBHSQFrG1xPiENq9cQb8rfeAiM8anCeYkUicqUKQFcWARPn7z3gLdqnqQtjmKQUiMEQSyACzehBv6if3",
  "key5": "4qChYE7kYeuKNkzPCiAMvqUKPC5ozQ9LTaoVg38hCqAtBsYaup4ZYShkhfTU94yV4RUU2CPog3r3zuX6FScY6hnT",
  "key6": "nckZfxBzng4MoSVrSU5UxQy7gM6NvTtDPVjV6XWkTri79MQ92XR3McD1sHyRyVxmdn3PhGjiKZpFEJwNNjTRcPe",
  "key7": "3mu94DyxdKBKx27ADDJji8RkoywKghNqbpV2UN5VBDST59P15NonBYKpVf51tcH7cJAsawnkwKyt3XWZrY6SvVVz",
  "key8": "2kj2QEhqyFksygxMH1ARVqYNetB3fgfewCJu5X1Jv6G53aedirLmt9J72Y3bvmZRwKPqWSjhCaAGcoXUEVw6HzrE",
  "key9": "y6mHjdhA4tFoqgYiUGahfzNr8eJGq91jXGyRCZ6KSPeXcu3A8gGtyBrp3nNpAvTD1njNJpfsNSvY1pKeZUSCd71",
  "key10": "5opRTpYkEZ827xDxTv1qwSrdLAqoi72fzVfEgVtztq7aKjAcsK3azJNuEHzZwRdHqmLSzqHmbnavHCzX9ZjRKrJL",
  "key11": "5cjwq39SqB7QUeb5vCiwb6finh5uYZmrDsYazYaJRqEiH3P2AyffNrkgwV8Z5DyBn4qmeXixd1xwzpqiSHNXGfEv",
  "key12": "AvtmUaEY4r7UY6KpAuajvMoGKhR9C3EQmamNcFnQmqa2nLZ6SbatqWXNxbRAqmWEnF5FAMdyLzt9iK85KJRh96L",
  "key13": "iPw7DXgzcjLnhdUBsK2dUPcC6598wXHWB9xY84QPcgaaEaxnadJh6RfBqTACyCwVtWQLQEQ1vMkWEC4yY4t58KE",
  "key14": "2Ktgm6fj7zrYdA7MFuDsnqLwpjNqxpoDVF73Gg4W2pyXZDjbwcienSJXjHjKbdADLp4godbTzAiHhq4fy7QMKse7",
  "key15": "4wr4iAu4MF4eQuhfjVfmuPaZ9P1dpjx2T31VzkRFP5MuruwvLDVWsvpFTEiLVkv6n24hUrRvtpjYxGJAiMrbAPhK",
  "key16": "3EwrPWLBtavv6rFZGFEnmMXpJcffPZM3LZjNV6TVMZk1c9pGcKapzrbbzU7f5jLLJwTZm4srxwzv2UdKunGw5V41",
  "key17": "2HSeBQw3SaY25UkCFAhsb67WyUyUhsZVe1C8vBU92UQL6DNmeuTTHi49jowCYdaFDt8PuHeNw715X3MXr7twpDEF",
  "key18": "4nK4mVq4RxuP5WPds9Aq8FiEB1GxmDAJvyjhTceAvSQ42UqGpQaBfmeQuLquVhvBMqM86Rfgmhey3hQ2qpyCgsLF",
  "key19": "5sEMkwvRpyyAYdrSRCC1t5BpkpTfFWEc5bW4XXJnefThb4zaHQkxtSAVGV6ASeJekqJfiiAM1LgzNTDGwuu43BC",
  "key20": "51ABGG2GaE8DjuiT81ub6nHynhkeKMeJaT26UrtxvsFL29cmD42Vgu5JaVVtq2JvbasrMn8mEkoq1UWyALxLczSA",
  "key21": "55j57A7MAjvSmT5nSYoHcUHDBoXQk2wdYBm1hXwg47rAFvfwvLrrEDo6kbd5HU1mFAcreTWunCgGU5wD2zauT9GX",
  "key22": "2TJwkPMaJebFWk1vse9vWTuNKJpEvpZtaP691bFyzt5JQuDxQe6z1ZQR9J64Un81h1brucM5urWLE3ZGoM7ruxtB",
  "key23": "66MVHvykBL8ETfzZXE4q8Ar6npQZYUAhq1b55vtjAr62R2mwP2u1XwiwcXxy6xn4iZHqdK63R1qmPKAWvCcSb7EZ",
  "key24": "2MzRfKvb1o6oyy8gc1tjAmro8RehnxgkEqinm1Zeteh5Ri9GK9KrkQXQRGxBdTawsQafMrYriNwX6rG4x4VYH9R8",
  "key25": "53tps2P4BzAe5AeXZfNtEstM9XkyaQLZ4vAmCeZmsfW4iZ58dwHm9agoyh4SQkAha6bzQnB2Ez2c2UXknARP6JPy",
  "key26": "2kM6z5WxWGPpPME6ixmoDBApQrKmrAX75J4rkwfV15PfGFfLCRGqEBQyPPfdutmdAb5QzLYr1CiBnb72Q6zwT6Zq",
  "key27": "2RKbUjwNQmSZ4YcaRVWPichMYdfxZnJGE3iZJfyAHM1u9KSzYDN9SoJMgQJHujmxQg7WAv6XE1RD6rZnE3AmDuPK",
  "key28": "2H9fcWUj9KQjbFVJ8iAY54DsEMYoibFmktTPZYu98zST1TmR5Q9nPEtBdn92ZAS9pDCFAgf2yfrFx6MaXHdtTrym",
  "key29": "2HhKP62h69TdHkbkPLzcbHeL7qt8T5B7fSC18g1JkMUnQZEupsoRV2jxC2ULtBKFG2dbvWDWxDvEGKka3RuBPFfj",
  "key30": "2PZCaLw2nhJ2ioJtaH7zecVZcVjyvVAT9zBa55h7YkdEHLibzvGxDWsZs7rWCW2SZZ1F5m1fTW1pc96uEopB5YTq",
  "key31": "5Zux39PSBBE7sfxVJGcnUZSudfsPeMby77JGPGVZGe2mNtedZygmK1Vk6eokC6UJTWCkN1uesbnyBbr3zxNUCUd1",
  "key32": "GxtAKV85pctgQWupfEgDLTpqsnhLjGecPzYoBH4eDna8XqpS4ZKWwJfpaUe8Dm7YLcV2makuaP2ZxoMoEcUu42e",
  "key33": "2UgH26VXKJBZLSHeXKd5f6UGd8XqCoodnY1mN4WPBw5mBANbr5VxwrM51gX9ALMqP28WjcoTD9qgpnestV9Jp9J7",
  "key34": "4sY3qCfRKv3PaxhqcqEmC5uVknnekjrk5uhakoEUiu17jfZx93z4Dq7VQXZYCxNcRYqPhGSTqfNy2WbuLcSGwANq",
  "key35": "5JrK9Tsg56j3J8ZWvZAnArBZ5fPznQnPYFypX2zRqz2um8qDmuHHnAXXmvDquXtpNWAwNf4Jj5xPQvbWPKfU5k8s",
  "key36": "2pZK3fsBQWhCZxacax5ApewnD1Va65vwT9xgkXiokBdJicV7xKUmhqcXvx5EY4ES3hGtcXpqQH7vNssFjof73VqH"
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
