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
    "5j4uDHpD3dhHu9NH7UsDMohVEfyhhzdL3JLgKrwUhE6JeEPpCMii9GXCULnvB6rksLNgzBQ8yvxSaSPEbWnxCnmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62LC1dUWQRuAMhD7Xv5yo1iwDpaVveApKdHT8hWNxWo3jmiJwxzHKdEGeeRPZEAQMheszymS8hiTCzLmkvh2rkgq",
  "key1": "2NUoUtqXP3Ba6M4gDRJ7r4MzGMmucuu8rQyxbjdxdXA2fqquVqcF9TqAw6qeoCccJotMhVSLmvyYGcy69WWbokEQ",
  "key2": "3PwYquwAJNDpFPEUEKrTdeZKptuPNpkrsA9R8YqMuWMuJgrKhevgGCZXSTKT74PVyqHs5Feg9yRgSs4HbCd7hc6p",
  "key3": "4P3g1UwJvaAgM7CRYhdrh4buvwZhH9MVfiTMdMGoW2B2SjQ1HErWXTRX3vRU23s96RQzmoj2BSZRwNugoPZ5x2UY",
  "key4": "3tPYsEuTegmmCYiogyWGoytTfECqYSGs3Y2bNYZt3VbVZ68QGahNDeFXcWvHKNcgoCkDM5PMkkoQUGLj8xJbDDi1",
  "key5": "49nksoJrNMSUYMVuBwRd2xxg6b39we3fAq67Naph9zXXGktMq7xiwK95kUf4rmz4qAyBJGSpfLFyRhCtSjpa5qXZ",
  "key6": "TnPMAssPG15efNftFjDTQE8qg1wvhirxCZbLHZKGXXJzb4ytjCtC3BJhxLQCjGEUwCJLcUQy82tf5YiWjFKiWv5",
  "key7": "2iRQ4Yv1gq8PKQPMX1LPicaCeAZ8PdFmu6NR3GSXkYbogPjiY7qbHuSaDDQbL7Fah3zMbub4RcsVkcGeuo9qRgp",
  "key8": "5waiym8r9JobwRyZn81ZQx5qGbzz3ttrDvEhzdUxLXYHBA3Ah3RVsQ7Fay5yAPmRRhPQJsCgBTqeQdexgNrnsjG2",
  "key9": "2gKRCBxV2i7cJ6GAtTFk4HTagGPydWmDXf6qHExNkgPiuyBJnd9Vw3PLsdgYCXQMBdzZqPBDAGe9paFn7G62y6sE",
  "key10": "3D1XmtgJAMwbevu3AWYsnYDUsM958Drr1Uk8hN2EuNsBwhRgNCHuCniWrGPNUxf2XMYgUwvsBQpKCpXzkr8FESuW",
  "key11": "38bmqFovbynjJ19ErtF8hNyirVc4wb6tLJhzSwmebpxuyiFrnk2uFzASuXGvJ75JtjEUhPrDP9fmzWsYzkYwSEA3",
  "key12": "3FdGysKjbw21LLUFhFXQ2fV6vDuY7QgAf3ibi8rX87XiEKvh9vMXC9Y5x5wvsbrsFpS2K4WqMgZho15qgiPqPdXg",
  "key13": "5oJHyVvc7W82zyyfG2eTB8zenYVFzqiJfj1s2DyGmjpnqoJevspGKDjXAKrhNzGgKt3QuMWeWVyNWZWfqVUegpVP",
  "key14": "2m2wVhnPHijST8ang7tUZbqY8GbUzw2f4WavqMuGzPHWCwRvCJyp1u3yj91mDXvA7NcoCnPsGCdVGQBxu8z3nC77",
  "key15": "3HTWVxQDwzpJMnDKGATYVi2qyEQc6KJjNJ2eyDDRUPDguZkq1tyjLZCK2vm4RsRkFTiA5bDoDLvXTtJ9r3qJpkZF",
  "key16": "3kUeAi1quxxBMZcaws41Mfe2UmkxYx65tf9qivVkFqARLLL9ZcbsaFFVfGhefBthap6KH3wNyiPFwgAjpS4TKbNn",
  "key17": "2HN72hjUegtsToNu6UnB5Z2KgFYcNNdR3rDTQS4z7EGuWUbyiZAnfnXMjo27dg2VPrMGi8Qo8meEV4EoNUVg52Ea",
  "key18": "5av8y1BWXD8fhMKWhw6SURAzV8SyCcunRv3F2za5MQz9EeS8uTFqf1BWCt8ZbgvGmqTXN4mQhSXbh9PwVBURH3nF",
  "key19": "3LpN1fCk9EbZHtp2yuqgoyXgabhp5qnzWLBNxtLuRBvfL2sb3k5fK3D9vcpt4CQrgisvkvhpWZFgTq4yR4EtRqMP",
  "key20": "5V1AR5CfJSVeNe4dpSLg56KUpPDkeD5srFvwt6zYSLfEkSWno3gZ7R56SGWxGyU8K73DZWh6j6cnsyXzMCrJTEds",
  "key21": "b2NQBEmykP7HX7CCWNzRzVFAq3zP3kyKwjxbdNsGGUMFCJ3vZ1vg1gURWN2MCRtHZivPPDQW68UempvLkkXGGUZ",
  "key22": "2tq59BgYSsVjYcjWxaCoMTaPZETPL4o8DhGQgeqqJdUPDhRYi9a9QRiMhTD3pHCK3JvbRtjFWAsZyE3arGH5GD8m",
  "key23": "YqzxhoNHFrEovympEXv2UgWUW38ZoHBdEFuGZa91rPkKZ4kEEXRvnkvxT9K7zpu9zpnngxPL2Q639m1LYv46hhm",
  "key24": "4FGFvCaRLjJuc2agY6jd4YvmsFJg1G7zWJ6fyeFAPC6nsjKYcCpAYm5fG5dpZ7tvSZvc5beStSkx46AbYCGz7cKD",
  "key25": "59WiVfGBFRpEWM769G2t7kruSDU8GpoLjvTUY2zREigisQyBnPu6RaD6PmTY2JaxAPHYZJcz4XEd9NqEX9yuoELi",
  "key26": "4RSAFaVo9eQ75d9thf39BmCmQZgyMk7ZDBqZG1Vs8RuHgD8bGZYevN4gxWfHvd6yA7JYipNxXY6Qqs1W2nd7inWL",
  "key27": "5VcUnMGEkVwmz1Ck8ZYBWi4UmBP3vaLVaJFdhUAfudGVQN6D6VoEuwbHrwTJX3HJVsQZ2r5Mh1SgbFBv674Y2zpt",
  "key28": "7HPkybAZzhVV1SsLw5SDujwtHeygRd3nJkpKwb7KRmD6pjdTt7ypnvB3xrwD7RbWfpsrif74AmfD8KkKVaPMd8i",
  "key29": "2PGXQn1hHyrHYDgtTFuBqQnfFriLu3jLzRnLGqz7L4xZCCAL4sYZmp95fn8UbzgcozMZ6qabKwD5duzVkEhcTVNE",
  "key30": "4ucMZogYafz7Rmbj5HwK9fq2HRXigomT4nTqoUHWfHWTVfAK8XYNSC4L8232XiBZFJkwv5GT9LDdDPjgLuEpREqV",
  "key31": "4uauzKPCmQmnK4JoYfrufSsZcVsowuz7KpgAdGWYdia6AtjMuQWjR9er6oDYyVDKb4hUcnqBJPiYVkUrmJzPvWmD",
  "key32": "5cprC9GkbqsehBtmFM4uSH9mMDWhYefsxWsMaAy6B7ChbP1RgngT9hTh82Pdv1a7649XF2JZmxJLkSm8wYFL2LK9",
  "key33": "3skpVGzqbPaYQKUPi2rqZT7Dc7GcueHbyseNrD1jU4XfzWWVJv7jywPoKeqzPcCj4ccdDUqhRmWc94UvKNmjAsnP",
  "key34": "2NkRc626kzQNU8nib2MMrjZoewnUowfXi4gLoxh26Kg4SvfBJvQXib4vpEPnQe73mSWSTMuG7jBmxmGGQr9bvNs7",
  "key35": "2cCdUJ9Qw6bH1i5ChMaQkDdcUpapnPrKMXGVa3i5rrFikQiRPJsNudZDKyqHJrSBPYEAL9ej9tZiHfZHz6xeSzpP",
  "key36": "2DkWCAmf5kLRhGdEnBpNapxegg5TZ2WxqSS8Ereaf7TevJ18Zk84gK17zMLFjrBpZRmnL1yumvWtNN4AgPtDfsBx"
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
