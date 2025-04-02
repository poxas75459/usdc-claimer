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
    "4zjVwUcVi6kZm76VrQN9z6TfeheqezCECvubVEBMhV8fLRfevCqdjEotATssrpCcyNY4kGkWFB4MAATcWvtWYGri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52RwKRN9azaSndFa7BVkSV7joneqfpA3gSypd8bUUM6Jkj2W9soo1RWRhumrA4oa7bcTdgQTga7EWuGypxWLQiaA",
  "key1": "4A43DFJaQd49dhHVGhMTv6UaweuuPUSDAZi3NKvoPPWWRF9YhzraFe1DgBwuFb5KNrZVE7Eb1xwx8TaKwrGmuVay",
  "key2": "35vCtRSfjUdTp1ezS4BSUCjx7C8M5AWHUy47wmWvWdkXKZkHrpy59dwwQt8cQo2sLK8THwUcTpcPG7ivkua9iYjV",
  "key3": "2fHYMXHRZPViYHReEYjaed1VTtmPRMPbyjRK73fZv6Et5XBpdiZcFYAJvCEXFWg8NCimhC3SziH1PkXxa7DdHkuK",
  "key4": "4JrdsrkYwiq1sprvbkTNGxsohVg7uFHFEvs57bp1KEAtg5H4fkhNA7KkeYL7drhBkcGWfJKta62AxDULrLL9RBCf",
  "key5": "3CEEhNm54pyx3y1D33LN8QPkzz8GhxEmP64dKwgArj7rHKqytxufDz5yD9r7XRFKwTLU7Eaa1riS9ciKqr2ZRnnH",
  "key6": "52nn1NDNSiPwU8JZkVuXMZnCZ9RG9j7zrJBYSiu9UZxVdqZX7k7P8Z1XU5DAeg133HQ5nDdFUJaiRiSrxZkVS7au",
  "key7": "6TM1GJLtLE39L8ehy738bJNC9nv6jsA93Ly21koW2EhtCEashF8ytYGiWdc1QgUEfoWG433c9Eqyq16Ebwq2rAg",
  "key8": "4xn6U53ApvNnGfrsPJZME16SXmF5FT8eGyL2iFvaucPtQCghDddXpVmFJ2H5U5qEJMUcXRbFj4ojDEVvC4SfPf2P",
  "key9": "2m9VuRdiMKe7G7Gks4mLyoz2qdc964esCMEmNJqNudgeUhBuUAdUhiDQt9PhUhbNk5YpSo7scWyNk8fEsbawB6YY",
  "key10": "2LNrfzK1RfykK5s48aW2zLnsziKk3k6WTkMahhRckaFmddcSsNZWCyUtEYrLirDwDsRSpDJh8oZko5yKegQbrSX2",
  "key11": "39CM8MU89HzGw18bKvcmt2XhmgK5XvimVNDQdhCBLwde9xdunz4WTLvZajRkijC5vVNbL3VnHwTUkXtk8XQ3hxnp",
  "key12": "kPwSUASFTBovMPEHNxzzeN4wzFW3SE1PraR28hTdmrnvxxoTdnxLoDRQbgrrAy2qSmnCaYfagtEF5ofNs6oEbaa",
  "key13": "2yt8kkay9mgk864mW1hjRkTM7eUepMQCKtxL1ioQVHeHGzAkMm9csAudoxDdxq9Qy17sTxQJJSuXrFngEpHpVeqT",
  "key14": "3mxEWHuQFKmvHZYHb7KW4xp6JPNGrnUkXVrgWnXV7gbsH5evzjLzKCgf2r3LurYrAS6w99ufSHhHoyRdhpgZGFNT",
  "key15": "4CnqXhwkwzFZ9weBBtW2jU626znYp9eTvSRb5K1e8mJB7nKXAqBi5LFQ8qt7jTqGEQw4fAe8WvWzRznVtoQrrst",
  "key16": "2mnbcGHzHG4us19zipimnAE9Exbyd4ifRRnrJQwLiyRL5zYj71SbNsqrAcr8j1CiUU4Hqs551f8EsgmfXT99vyCQ",
  "key17": "4cZyCN3mM24Cihs7ojo2jn1XFsyyKFNp46Ls4wthXDUy7w5zVfpQZhUbRRw3CfoDZdz8rgvyCufgmRFH3bYcYkpZ",
  "key18": "3vDFHq3sw1EL4X27Xj8Nvvz2g3tMXRqZCCHooYHg8q1Ww3UA61svPkirMk3dfNBkDnxYaDYdP2kLPC3icPh4DzND",
  "key19": "6CpvEte2ozBFJWkj2Ak7aNEHQpXpCWBsFcL3NB7MKi1xn915ayoRppfzxHTaTmLdvyMSM5SpMiBoq79x7eLt1K2",
  "key20": "3LBstBkjq9L5yKbdKquszYCFxoB6idLGZo1pXqFTrqNLCtH9gpTkrmNNRYAFhktoJUkb23t6PHTQ3DzmaHoCKrv1",
  "key21": "G4LmzSQAgVin2WgubxMn9MDeeuJP1r8bLcCCxJzwpt5hcMCRK5caJT8eJbWZ8b2xTDikiPhUkVGkMxSMsr7nkPp",
  "key22": "2qnADqiUbjo6DiFoetQQ28hLDhTkFS1SuU3XGPp22EyZcwu3VhMy8Mm6dcFbYrMEGD25adLDwrgEuCHh9DPqVdaz",
  "key23": "TwNXh2P17DvmJopgc6BjNq8gNN5T3PEwDZ9q4MWdHCnHdW9UHjbXgKCuQW5JyU1fRs5Hyoxfmu4XpZ8dRWhhHUx",
  "key24": "mnENFLGvQCFic23qo2LJL3jh4aCf2Lmq8gfxKKw36WkWXuRseopmco9AvHXiUpVeSkFzSDc8Tc3pgVp5KLUpjpG",
  "key25": "5YTCMXr84UhP8QEjZTtBG6PJkJqB2rw3UM4B6cuR8xxzqZjE9Z4GotL4HFjYQ1pNHkGpDLmsK2kXFu2gQqwLrUaS",
  "key26": "3feXa7PSoEQgB2s4qqzdKqdNF5UZvfspMccqLujWPW6j8qnnMGREF9axJv6kyPHBcsRrYyy5EzdC2tMdhZFmYuAy",
  "key27": "21Ed3NUgASHuVekCcqc338oH8oZKdWR7ST4XbSRBeUdCHUakBP2EfJZp1V32qash2RKgYYT1iknrpF8WuLFbkpE1",
  "key28": "jY8UpJ55JH58YE3kcxZURJNWjqebTNPWCsLyQ6YbLxswVaGqpd3fUhC5QyyRFw1MMdkivsX5Kty7UZ4LgVWnYfU",
  "key29": "3dQ34exZNo4uK3FN4dsRP5zxFau9iQVyixtHkuYxyzKuSB9CstKgUiDdSUUiYszuXAnL2nBSrcvRZuSwjQ491Egr",
  "key30": "3uT85UGa7JSwjPdG1uuSMQLNjJK3G7r9Vz6PG61Qc46vnGrjD8nGNK9h13HE8wAz31qvv31iPkvLFMxdA3Pi4EFZ",
  "key31": "56ZvuUMTxfAtjJSgd2WM7aTTzLiPeGLjqnhZNDkktVzySX9otF1wPRKvfMJyWC4BTcjY5eRBp8PTLcyYMfAEo1Tf",
  "key32": "3zQDMNjkvd2XDbFqJ1dq8VR8WZxiDzeAxaP19wnLCTs2FpQa1E4XXj9EUvhXsYPiADwydhYGaZxgLZ8kehMYNvrn",
  "key33": "3XxvB2X56xybFnDB2FNCwcfiVBKu47oGt8n2TevkHMCghqAhowpgSQSb9TZahdxShvwCJAeiLdLprj63AgMWrxBR",
  "key34": "HDcxMu1t4zmVocikAkvgyfgUJvihsMYqaW2E5s6bpC8j5gwTvL8i59XsFQhnSBbRnNyGbkMH8ZWiPqRzHaxBERq",
  "key35": "21HgJiDAYRfs7ww6zvFnWAApjL9GJpS9CRGqjpemwVrT3QtGiiEsAP2JC8APvTkWdSxGkKUfRnKJBLdeE8vhDwNx",
  "key36": "3oaex1cPosDJ6RUKQRExsaibfQ5hrY9CAZtyEjtjHRhjuDFWgHaGteNot9k38dpoTsS8HTa5ATVLNpY8HSJpzAo9",
  "key37": "5WY4Evo8bVgxvAHdX4fnR44UDGwE66SAaz88w8g16nndppAwTTPgTrXnZwYRmSsRrpfVhuEAM3DgNDkCrnTTmHTX",
  "key38": "4fYho68aKsdEEviFiCd6ajKpvXeim9MxdJ66eu34ECDzEmMAUsvhcUqXUYUEo2kccpvY2W6Wx94JTDzC1NzSaCoq"
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
