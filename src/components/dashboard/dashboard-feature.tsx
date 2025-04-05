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
    "3o13r84zvACfEjssn69qpqyFR1qYvqybT1NZrEPndsAn21JvX67XBcmDWbAZ2oWgrwuewPzssMWw4GFXNFM8VyoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rkHPHuXmk6r4JWrhQNoyYuD61ok9SLjrqZEsd2xxZLAGbcciSanbNeKX43j4y7pabiVVYezYStUYW8HSj9WZdRt",
  "key1": "zC2NJjNV83FZtxDDHxvpJ9E7NLwAVeYGjh9sT7NKDwqCPpdr9cXbtbd1Zj1UVGE4YWZQKdxuN1n3F53qn8sA2Pu",
  "key2": "49kPkpT7M3CQykrmeMNJCdAEtmGu5E6r5KN9pbjmNcDKeEKkBPUXzt7MhoSsgGYXZYi7pSTVPnTwsRJYo6g1FSp4",
  "key3": "48XATqpRm1pmEh3AtXjHybbi1HRW8KiGr72JzrvCbdnfC3bvZqZxUmtTR76kamrgtFPTse5SpUaxDJUmKVGEeUx2",
  "key4": "5kZiFTPyYzisAbdZqtcTojmE3yJrfmoCTok9wyFa7HCR7rH2eHpxgTMAjzQk36CuRGTVhWRVnNL6TWYHaZXs6dgP",
  "key5": "5jCYnYR3bbYXBHwYYKHuqtu2vuQRNbnfvA52uuSqZbhczSmEhmuUyctSdQSxY5sK2wR7GueP1T9DrKRgTF7gr2TR",
  "key6": "5AvmE16xLq6Y4NDTzW6BNgab5ouwbcWeZHQcvtp362P8fntuStm5F3SSkMMW8LpmQERaKKoYWmSeQfJkCDV2SwAY",
  "key7": "tgFqsWnZh8qm3roWJb8H8WuEBPoyhJ7vf1erAD2xhUd9CFrFze8FqrZvHYqZr2mFNsTsWW9NAPiUandyFnKwNmr",
  "key8": "3hNqSjt4Ng6fmBDXUs7C5hEDD3K46r54xU8TgwmUGB7JngKBhTgqQkUSPwpfSUyUthKwrBV8VzFHmVtxjRpbKPjE",
  "key9": "PyyrFxS4KDxsaRNEGzqsHkJztMyzUHJSymBxJJnzX1kaKpmkLi6Zpch9c3aZz9nKQn2pCvG3VYjzhmCEp2svehT",
  "key10": "4L6FdXwxfT42asMfScTBjUty9yWJ3yryQdn26s8mWZBDHmQ5syNF8jqWJLauEikbk2mvdhxJRZ2khE6CWXQZk6DP",
  "key11": "5JcYdfzv1Dmma6pjJSi8uFuPXefp7YMo8wCydp9qfGRqTLV87Ev1hV229VWZFVjmKh4ojeqj14M6YLLB2tS2xvEH",
  "key12": "3DcCKZ2GCFAFYPMogKd8WN8J9FavJE89bXK7LVqEa6Hp714EGupzUtXEzbZNffqx3jYRUfrL2NchnzhuSu9rFtHz",
  "key13": "3iJiuz11tsLKfGWJCfBHgrqhBuowoBVXRRbyc9GHAxNSz5wLwRyrAjBNhZC4mx463os4VK68pmkJ8NvFodPuCKG",
  "key14": "5Rrt8JQaZJUEEKCcK6NNhM17juGWy65cUB5RYDDJch1rmtytHMY243TuAGZBgQMDqRD6iHpoo3WosfPWsuuTpFgY",
  "key15": "61rEAzXpJMygEiJ3noZq6wtYmJdWcDxprGzhAzogmB47xUEE93FXLTUpUfD3SwZpWRQcMUHmwaFv63CTFr9yZXM5",
  "key16": "2Z9XboRSGyNNS41Dz2fHEzsAxkeAxjUg4GL7BtKsJCKoEDL3oCkFa3RzAESujnYy95xdcj78J53CLWWoqc9Adj2L",
  "key17": "4fcKvjZDBu9nPivvQ9XrNB4Y7qhs6TRJQT4Nwd7pJZg3ZeMBDVZVNUrSBxMcBGFayGUkahbGwJFRXJYPXAio7F21",
  "key18": "LJmwHyVaBWqmNRUsbuYL8cu5JYBN58c2mtzeBUYtCWsXDevZCkwZJZDjJbxZX4SqiBRxg8DV8t3VnWvMoZD2TZN",
  "key19": "4aGT9oPcBPXqfhuGrqMWsETTK9DcTYNjMUDnmgg6dRt6LUXQg9sAVzxkia8MNGmQnyUQymPBXsciL8Q2F8BTHXeG",
  "key20": "2PVhzdidRUT3XDfmDn8dGhCcma5XFyxMzqtTKN33z6GTdfN97d9zWRD2A8KbNVNCQh8jnEi6tL8AbHHNcFm6rjpy",
  "key21": "ij6t2CGMajGtEyee3zXVVSNA9DsbFf2WZwtFZhMfytZK1mKdJLHSd7aJE9gYMvyZVmp9DSFHBqu8RsEKYtyTXEg",
  "key22": "4eAxx1ZWUeJaHKvkcSwYj7ZAJgHgevFBqYUbeSHFA5Gu2fSNvgKSfhZjgk6BvTk9VdA7xTsDS3skaCLBNY1eqzao",
  "key23": "jDLKPHLCL5KtAAUDy2Jg7ah9cbMeygVmi2DN5aX7mmv2FUCWuWeAoMUQNCARUpAmw37cFu11cmAFrieDMF3tPTN",
  "key24": "4m21MUVKpUgm1uLvYWXYsJY9QRbSafKae15JYn2mSwWGSRxT9cebgpF5TnWkphKNCxpKCzDc8TzZtgabidoa6Khe",
  "key25": "3NE2rwLvnmaGcck1KkAmKYiG8eiwTQtazaL6q4MgnkG587QFGp9G5hiF3UCNtTMYa4Hyc3SE4Ws7hkeP4n6qexyV",
  "key26": "25RFaRrmfEbGWEnaJEj9f9zoK5LzhT3U97S5ksDAYB7McygV48gbkjM8sjgf11bMWmAaLTMibEDNYVRhQZzC7kaT",
  "key27": "4iyA3re7R5UQzc8yf7qAHYUsNCv4JSPKUK5dY9kDbH7X5JK2LMXCKRVAvQ4qN7Rq7uFVaPorBcvHTK7exJvGgLxq",
  "key28": "5SDS3Hd9HbiXzYt32e9jQKZEKEp9JHrTGonaPjjV2bx8c2sWMTyrwauk3Ptv45GwPcWNbS5v6FsAdzND5ReVAhjx",
  "key29": "3J5PYkJKNk1xDNARAdQhkNjhZUQQTarH4pU27Q4bF2dJiGBb9x2SJvb5qQA9k8seDmsEc99Q7xdbJ4idNjEpcB4g",
  "key30": "5zpNvQ8SHnQzA6z1PwyynpgAZPG5jnacdiAHZHh4XQtEdUaxM8EQsuLyKThV9zMWcLNshonUzTwYbzmNW5m3tVQq",
  "key31": "53muxp3wUoz3u3Bk4EsfqvPtiFKFpjbGvUutAow6G3RxiFDjRa7eA6sFNBqsAbhrQyiR8yFi2jPAQK8TSBui1T2g",
  "key32": "4od4HJtcJbsobiq7h2rRHSGzprmcNtP1UN7WMCaL8QSA4fW9nZmJJwGF6Q5p11j3CKaF6XF69whQsZveguDvW5Yj",
  "key33": "4Xt7NtrjcFAJtWxJPR6URM98ZnKS1WqghWZ5Put4W2mQMp8C7g4uhaWdzCwavP9AR3EPyx19sxJzh4GsLsc4LKR6",
  "key34": "2ZunsH1V3kApbvRof21Wj41MjxQaNrKYu9joApp3cD1ASp2hyDoRh1mM7HbQra5Bf42mLPthbVyQkEhsvheuW8GN",
  "key35": "42v37LGzx7ahgwos8dbYMmoYKPxvcA7JjRDB7JanGdGne1Z1vwSrP6WoetrXuTFnTDx6j2u99YC838oS8MTeT99o",
  "key36": "5En2y1GyKaMbJDUBUhT1Jd7FCgCfZrdM1bS43mPfnkwb65kxXJUDP9YNX2kb3AtjeusrYS8roPy8cQZdhkrHGT2k",
  "key37": "5PH2fyXAbQVXTLYVjvkjVTwrTtnDMefaZDkkzM6izXnii5UxMdr8CQ8f4RZe1DqLWuvHytvcB2hwfrJngZDF7PaB",
  "key38": "2qd2VhNQxb6E2jMNv6x6z4uPptT2W8MC34ziJUV7kys9mCDm3fcKdqb1mTt4UWWqxfmqgeHwaYGvziT1cPoU97hX",
  "key39": "SAECFyPDEGdCjtNnhyTcZQdvXicdGshQZdLprLA1DbvvkJzuFHrb9xBgE2RxqpMXJ9bjijfMH1cj6PiakyDBQMW",
  "key40": "Q3VqC9Uy258kA4ESFSURHVoxpTtMksZMgNVAnSqtdAHSy7wgyMH9Q1EBc7H2Xu8JorR6Rsc32rGnjasQi4QEM3e",
  "key41": "4dQ43RcUakSAhzJTCaiUyfbbZrw2taafNAbzT53mGxKEAUc6fmuuiKJKpMq6yJMch9Huk5vpJ6S5nEFSkAyusHAM",
  "key42": "2zemhvDA94X5iKedhJnmaFqveKAP1eiR1VQnBXGZd4kXwoJX5bLjHiDFeRTcqRcX9GDUihKa57oxtpmanvykkC6M"
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
