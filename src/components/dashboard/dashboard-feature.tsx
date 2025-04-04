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
    "5X3QoDZtzh46eG43ciTvrvw1iZPRkfwHEcZxkN5BzBbwhBroxSJGGbFtbu2T3K6zXxN7ZYAVPTWRBZuGt5aizMxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P6LGRfkKW3VeDf7BUJoUcTfSmjx7WjWq4uUswVUWsmiFTRcq9YFhNwFcagEq8NrBFuhVXz3teDKqeEBwXwvADt1",
  "key1": "6wUgK1eGszzgwC3CDnF8A9NKmbqXHjZABD4pbH14TeanouV24pDVoZt6s7t18eCWfj53V43y4zbQy5YwNFDcvq9",
  "key2": "3rKynNwvaxEFnPLd9KZ3RQk3eW24JDuoE7QfNGJagFh7xU5i58K5crsX7PsSMmBtfxGGQVoKP9jMAeRg6MPCsDzB",
  "key3": "2pAk4B72FdJz8nZPPWp9DuCo8bPQxZ2i1GkSKhzSHqcKJ11dHa2PZSjKZQRQ2Tzu27pryQ4z5ZLmWmi1AFXGMeSz",
  "key4": "61iiQgWr3bZoieenfkFkmb8W5Eo9kmtKTbd1j15G2jVANoFTqD6oWc8T4qSFRw6Wyzh7pvD78eYKrvydst5QGRTq",
  "key5": "3R6byJPng9mY5Mj1p2ah4nhmSM8QKWtXU41mJg5GTZzag2dTyaiS4ibiXdC3CyUw3Dc4qFfjFpxKFNAzk8b7JvhD",
  "key6": "45U2rM2fBJkLpceTNkwwm2pxVcx2HizsqcyMp8BZshGuSquc7Hx8EKoYimfFBtGa8GiXnBBqhLeWpTdZCPUnLzmL",
  "key7": "2tMbHoRvB4rFyvPjVtFNJ1z5SNoh33U4mqaguqjNvWcetcPQRaafJMbWzb7eDiudXXCpySiiLBqutaQRSBo3Ax49",
  "key8": "3WMsQy5B6s2QdTizV6HhpUdtJ6nsgXTijaCuvLRRZMyVv8Tkye8Vo5pHeNQ79y3dUFc1Yi7Tvk7SAFpEzRbXiugp",
  "key9": "5E9GXo4Qajfwcw9br9xbjauRksaX5D51jA9RfaHrhZjm45nR2YvQdUmAyaVXHBX71LvqpauErWkkK9m735WKNNuW",
  "key10": "vQtyJN69rjCgwW1Z8kaLtXyRmG3p4eRnmxiA8GEsT36mZ7gWfJaNaCrFCwrpZHJQwvzoDyN2CLJLhiS1CACWGKL",
  "key11": "yBKL5bGMH6XUkuRPqqKMJ2XN1N42Ki5YieWPrqoy36q1vTuxFDhEwxedd9mWuvCRtw2LNviAmzNeHiYAfyYwxdh",
  "key12": "2V1SCiSrCV5xGYQPhqiknJuGQTSC3A4nkWx7P1stsCFckQJv7xQhpYaXCsFmKkt7LZykC8PenTWBEcZQvDzeTeSL",
  "key13": "4iefvrawnqjMmCEAGQMsWDNE1YBuv3vKkXng1dGnai8zxb5JrYMjLumFTqr5jDfXxZhrSAvJ8wLedFMuTM6urga",
  "key14": "2iwAR7kuC5wMHSrSvTjjVEk9AKWEf86rLqoVFRM9NGXhhDDJ9EpxWvJ29hZ2mix8xc31nJeKTDFyjHThk1BKzotx",
  "key15": "3WAsyxkzY5ip1GvYZ5Ui5QnMU3AZDarpwPeuiNQ7f4oQhE93bHmLxHw3hGNhdr9rpPdCzgRCfyLKUGhyPWJNd4AA",
  "key16": "4MW5SbJLwgs1s7NMtUWgkwb7pzFJ2jXtv1teQ9pYRK5X6LbdSkvGFWUZCcbDoifnJdhVUpVsv6oskUWaAYpEmZBZ",
  "key17": "3B4H82anr1bSSY8pbQeZE5uC4NnCB1EVAkEPeeniCt5XEGXV9fbkbeiCZHPuazUpyeCfgUK6WQW5V53oZ27pBiw",
  "key18": "2t7SJPM1byLTYvetq6ayhL7Q9nZXUcYWqrPeTC3bNSA2nmrNaytd92NFw8zCfR2epndJRK1txpo82yECw24zTNLe",
  "key19": "EY5VAjqGeUnJhZ9S9uB3YkNiScsizzj1NirUFGUH4iqEhqaPnykmAqM82NVSwVsaoi9JJo9vd5Yp46uvdtyQDhq",
  "key20": "UpMwcjZcNCPXkMLohumPSYRUGr1QW8YmNAMkKqQSWfgzsMEC16xXXaj4nkQrjKAe6qduh9jt63wJCaukko7eE4R",
  "key21": "2BWAycrXrckSPzDXWv7EoQGrcxtq155EXYY5YKR7Af4BY57wL9c1tv35QCeQJ19z5W53kEFoRsTKyDgBgsL5owqT",
  "key22": "S9azGzdJ6R3mQsaK2Sx7SHYTZHccDaHb1VLBoqJTmdqqaj5TghbMTmEEFWL2AnfwsWmveE73bD3P2zojW9qzaZR",
  "key23": "5rVLK6BvhadfYhqun7BUHK19hXdyJxwMvFbV6U2j1xcRyrwg9iKQfTJZkMNPsqJDjyTGHnqB9KXXSKJKADuE79uk",
  "key24": "3fYKKFXHfDtnkuDUFi9r6DmWCR4fwivZUyciXyfLuab9ZBYdrXGbiUnzbCrGWdztQQYxAPuJqCz7yrk7Sh8ZTRg9",
  "key25": "3P6x3fZFy8Ttjxa5sDkMiY9kcPHPwE7s1CM1YpzTYLEny4xVLAKvSHDLM5gJFnfAbxBYZTiqwNRbtQYrQ8t9vfzV",
  "key26": "3whE5Brszkatsrpczdu9yBiKjZXufQZ4PyoFLTiUJmEmvLKijS1vsWFmFfYXMz3VSZUNJF73aQeiQiZeiJx2AaG2",
  "key27": "4xxYa5zi5LpDT8iuM9wj7ndPE4deqtm81i2tMiwDn12bwWxYNcw32FprgvXciqfrPMmezmWLMBT8tworfFREk4Gk",
  "key28": "tNatzcSqzBF8AJcxJRqvLQLBssjyHBbEEcV1sB2MfxtFvQdrKHfHagYMBTCqxUzF96yt1bnVEknB91JdCEuyac2",
  "key29": "3mHc8Pt1tctAMX5C3J6b2XhJB18WwLvspWTjccNoCA8E4Q2qKG8r4YfVrEFELT99QXNKMPkAQhfimfTz9dd2byGv",
  "key30": "4gUdFL6YrkF5euomx6cdrncYDBV5GbTV86E55iCSokNcbEwG7pXucDnxyiX9MzWCJDeDhTsKg1X3y7FRRgp7Qvuq",
  "key31": "65v9BrzLHBFRWQHjmLDXYkUvhnYAunYqEiH6qkjwhTx6eK8F9wqirC3D3ipR3TrLdZLM7jrLYBmD5AonpDLRpaj6",
  "key32": "5jbHp4t4XdAMRsi6XeuMey9gBf42WNaxBmxA7NbxXUcpnjeY7jveA4R9PMB4UqgnGBiL8qCNJjfsnPph7tB3rfcL",
  "key33": "2efTcvxD1jJtZQR3Nqbd91J9mZyML3QLC4ePKv6Db7mVEk8EpeypvHDWyGX4eBgLsbcU7T4CXSqccYTBKs8fY7nz",
  "key34": "5LX21bKm9CJnYMeEpUwKa24H9tt1j5hFEv4EhHogaRVDPvKn9TQacPdxqEeBGDHLn9SGCSJ1gvnbGPgvBtzZvnEn",
  "key35": "2y7WdV2FBaknLGxxXaHZVGnEgdVgdKFhAzRco1jvRDXDXRBkT5b127W2xndt55fzEN6G22Jy71iCW3ACmF3eHAkT",
  "key36": "4Azg1CpB7fuLPi3bdkHrkpZFqtJVLijnAaAhxmrQQu6gVKUu38ee6yc1nELsiEto3rQUB9TNWh6WS4faHMEN1VWi",
  "key37": "4ubMz1xv7FhefHoHknBAHF5wTHh6voi7VFV1yMsC3ggzen9YRG9ynWQQCPU6wh6GtxjuKiwR6zfWYyhVoML9wBS7",
  "key38": "2fRS4jBiV7w9Y54kLtkF7pr8Hh6TgSC4FPdT8YH8CQJssePs4ozgSDmv6mpFAW6nCAEJWDHbtYZYvbj3qbrhBejQ",
  "key39": "48zxNQ8WstSms9iT8p9oYFcuzw59Kco39MP3hpTAwXKqgY5vzZvV3omUfJ45CGpzf45FU1hkn5puomx2K74ecMHN",
  "key40": "42ko9TRXdB4RTD2hJ6SqaYFgi7cmTupjGNss1Ja41GgKxbSmXtVrXf1bbTtSAR5YoZ3VoY3VVxpgBE8LDE9umw5J",
  "key41": "5prwdUBBJ1SraVtoNViUKDhXm2fWHXAxumJZrnVT4zAxBQYGexDNxsmNhhE6BbpfvCbewcpHPEJUbmk5ie7AEyeb",
  "key42": "4YKfeuKUh8pH9tAKKUaX3eqd8j9MVnjbcytbkzrzzB7Xv5qRp5bzwXK5M82JBTZXtybkgMyj5wb76uk9Z1aTNBbS"
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
