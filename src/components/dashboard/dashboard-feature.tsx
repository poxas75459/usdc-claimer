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
    "4yH1KzRtt6GcwviPe8mRnM7JNu6f9p8XmQVMmzLUQGL4rDzHDsWok811tuVYPBkMAuAwR7xkkfvQb1Qj2Ndy58wn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kor6FkqTRDKHppn1j14aPTDykwAha9mr9tFWAjp5MzjwXzoQMW8nWmoxDeaFyeQwL4AVVgRC8jehkSqeS99v8Ki",
  "key1": "STrJq8UtbHittxi25Apcup2DXkAkptgzvACs1QAp4kyFJ7eZUuJPSWLN57oNvxfShdDHsZovjJbkGa8xcoVWeYP",
  "key2": "eAhBR5NPrSADLVvRW3psL24RkV3wA7mXcG48VTykfkvRfb7yVMw5BreuHPF3UJjSkgFJBoXMTSXAaR1PE6FkUNk",
  "key3": "3BwNZQUiLgrJn7snEgcp8CQtruSU2e3vXP84m2gS7HTwnpPQmifhKSY4okaEpHJ8JidrWNi53KKDuqfJrR6RVRZ5",
  "key4": "35tUF2dTJdbnEQAEPbDdHi7b5RCthHieNfky2k9MrvGTZpA9SKYT3w8Lo4RdDx91i14HqJpydyLfnZkaiTJwqB2B",
  "key5": "XtzrDmtVWWyjfsU15C21pJVa7XMZTZULTRkezWWDvYYipDSWmXW9tEPfZ1xmwxPg1Si8t1T5JRahZPvW457E99L",
  "key6": "55XNgQbpt1b29DEVUw3Hkf6CKDLzN18Q28peGaPkBqTJwcYKgseHdM97TwgXp6BodNeqgArGUq8ir1bVnTS85reE",
  "key7": "5M98S2s7r13uFWpqhnWbo4dMdPDZoBgQJQxhNpQ72N5pADo1CvWhbp28yh1VK7AMEEvRDvTzGMdEerazeJgfDJYh",
  "key8": "46kR5CgWg7eroydQX3B2XJWD1FpZLAkNpPiQaS2DxHvYVY8wAevDEL9uCxhU9hnfdPnS86vjAfXJ4DZf9Ruj2RAB",
  "key9": "NYd3poqo5EyF8TSv47Jnf8SFp981DSZbYdZeQkD2uPmB49Cq9eyWXdcWVC8gSNM8Px4TEi3PmAoj2Q45hXDyAcq",
  "key10": "5YgHX2jCqxbEUeZxfqMEgqmhpJywS2czCF5TpzeE8owD5ZrH4PEhitgF9RcNV2AUtsFgnPh7ssq1s68XNepzTkmy",
  "key11": "5gKy7A6g5N7MTkgP9E4wcV21bmAD73LXbbEfGq3p1CtkBjGFeye8w1Bn6GQDtjUxb3kJvSvk5PDWmgvAVMjgq41E",
  "key12": "wSNGA9BBDSNvjYUuXtjonhUKSpcakXPNr5X2cbMmV6v2uBrwN1Xt8QY3CTnz1wbuXVHxL33ag6zGph3iPQsXPzR",
  "key13": "3JFv7iGt8FRGA8txKCVBPyq4FMo9QUAuzmvdaUZtqf9g4LwcuWZjUDxy7ncSw4YjMZKpKRVUfwpGQsVtBmgcKorg",
  "key14": "2ZXsDdffNhVMR78KQBgdGPBs7Yfyqyokxs1japHeYTjTA7c4A441fH7KwTVwYTbgo7xTpUDYoQkhXoXXpQBDFFqo",
  "key15": "2XgSgeTeZK6iyvUiCjtA7mdUubUGU1dnLHc6h3MDDYnp8SumPhykgRg4g1M45R9PNjWuAZjiwhHoKvdRHLcuxSoN",
  "key16": "3A6cTJkpeoEjwvnxT9eToyWwVvhYwVzaYYaruXwtNDhfnnJ9LULCoLPcS9axFXQKpD34Y1adhdP7V7yvvmUDUao2",
  "key17": "5wzbzdbk8vdfA81evMuwaRuqGLR1zjEhw4Dg1Rnb9Cwp15NyyvWMz7Zj9MEdRKUmEe7n3MS4uaaRG3cWa9Pzyvqg",
  "key18": "5pMkj3BG3eJydMGEkbWFz3sCWNn2xbzHNU9dP2ePvcqRKFiWTpyEVDSM7mzGxhikaR1hM7arDJtBeiroowi1tJ7k",
  "key19": "3RnMi7iLkf91ftyYPUMantVbtPH9pE4aB4uzVG8DgsTkJPKTZiNb8qSWRSUmr4hEUcD35uJEsbVGfuy1d9cSeXT2",
  "key20": "56QQcXqzRPTL1gcws5yysAxGLqirKZ1TkDe9ic3UKRVqNg1MxdZGsA7tiKjVmiHgD7UDen4oFHiEDk5YQyaZTND7",
  "key21": "4Mo8Lb1K7uge8eJYK5Swi4GmAm1qQddiGsQrMtRoc96SzWqXb4uLcaqDy6qXpsmwEuSGEv8hjvghLVkFZkZNUiSK",
  "key22": "4XPtGYGKEHuDKvnRFGa2p3bhoMmT5Z1UagZpMiByvtbcfacVksTpRbq9r5rzWX2bPRTxV9dB6cjZ9s9nSgjZ1gwq",
  "key23": "nCSgT3QdMpVLtxKtsb4uUde9JMverk7Rf5SBGhVQ2t8skUKckWT1xuXFixTR4pFHcfhPocz5rAZLHrgsFAwBpdW",
  "key24": "2unvsR9h14d9yYwtL4Kq65LwvYeqnN26czAcFRhosqzNGrNadKdwE8K6r6feFmVogTypEt84j8v2SSXWDDAY4kfa",
  "key25": "2ceRqC9HcU596kjgjT8LihkXJ9LgJrGCVgPbpWctAewY5ACpAtsxWZr6vBL7TRs3fdCBXP31Fomvhke2gm1PX18k",
  "key26": "LwaEwzsBjUGAQoVV3BRaBVkdWN2uf85mjv12oWeAwsbwBm4UJcB6BdFRkCBCF1h2k7912z43wsbhLhEkG3xTYtt",
  "key27": "b52eQQ3g9ngrSLFbB3h54vaR5tUdFYfeb1Szcxs7fD3ruxNXMcfmnfvcytFh7QAvzkbpUmFaqBGPwirH7YoSUur",
  "key28": "3Lj4wCMkgxkWERSuRJ5mquohf7W6H5oWeatfnJP49wRwXFye1GNY1s8x5dW42R68GMKHAQLbc3VKvECXDmCcEq5A",
  "key29": "4NWoKkGXZEg3TRAopn9MdqgpVdb7smmUBJ3LAAaEyWAHMEKF5K2w5UUbWaseVRtpunfQ64rAVVw5mN6Uyqe9UrwL",
  "key30": "2dufgeY8ZfMWPEYSyTzuBQRmqrBFLv6qDDrwQpH72Z1QGL2nMfDMoVFMBV6PUhbHU42cwq8rX5utYoTP76M3q3fV",
  "key31": "3qWc6gg8oLMv4dkpSZyV3xrcHqUv5ieAeozaEK5pZ7uJqZiZTcXUF8bkxBEvRVk8fsJ5VY5gYTpJYPyGdXhv169M",
  "key32": "5HnbDH7iKRipMggQW9mXYbuoJVWg39vs6yuVW9MK1nhSERfjtDmkQMMwyJCMuCBZVy6XmukcRhnUVeje3xuFcSzV",
  "key33": "2avawWn3T55XpyAGTmzab6BzMjjxURNoBRPqd49ozpdXVVPG7djz3KXrQ88Bc3Kack5s1PfWSj92kYptf8MrjBr",
  "key34": "vRngqC7ine6mkZLVVXDJZHr7eaLLjEWGMi1gUmHfwniRBZniAF8NStsYfUSe2zUunqTtMezA6ZeEfqaitEprUer",
  "key35": "av4WnSidM81uuDiB7rgEiE2ZRYCmdJmUufBhHJqn4An8k22gVMTDNCU7orQxu2jagcbqu4k6Z4Q8irNWmkYKYps",
  "key36": "5Y5UeQFYucg8L12wnFJV3u2iqQ5nDWgReFCDzz2Bvs3kX2X4R22jNC1LSK8A1twzQDTT7J9gwLxRHV14sLwpohY5",
  "key37": "3G5se9wnDM1vjqUGSe3ivoHmKdrgGBCYbryaXACjGUm6j8zwUWaReJtWo5XRWC6KtNoN3pyu1JoG2dkWR8hMFjMw",
  "key38": "3NZWiYvaAEAbhS9DENgv9V8SXXzixaAu6o7CTUT73iKmUCZ1Bf8TXR8jZPJis6mhyK4xu6T2wZhBqeeJonDtp8M9"
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
