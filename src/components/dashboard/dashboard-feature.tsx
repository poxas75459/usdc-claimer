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
    "5Piki95LypWyYbrGFN4hfCb1n2AMAR8KVJAtApxTza1yZdiiDYdQYj2ha32XvTW2o5KsxvhFBqPBwQbphyyGYhKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NEfjSzaU8HvgSBEH2rnSAoVsH8S64Y5cYnZusi83AQzPuu1YB2a6SgXmQwMEJvQRsvdZGBGguNVCvquTmNycGJt",
  "key1": "4zzZ2XDn5fNjT3SQiBzrisMpizvnA8djWoWXsRpXwyXumRPjsP8ALg76bS9h85B2dm2ykaYLXdBBoA3FZBKwzL53",
  "key2": "22RC4UYkg93jT23it9r1dfKEUtWzJ7xgHssU9NzZTgwmZjErn5XPL9x6rRFfE9svX1anHaN9c3NF7PqUeaiRK6Am",
  "key3": "Q33vnr3TVYK64PKtf7oreAeg2JGpWwEhCrqDFz8SapxDPMMtU5146GR1fp8m5yCw8PaNCfoMxvv15nNagMiXkTH",
  "key4": "24itWYQLc99WWqwGWoxxK7sHPBZSCQBGbacYJ7vKL698ANps1j8DXqPAqeKPDaQ9w4qpU5DhbdDYKGq5cu4DkEwe",
  "key5": "3fUFvLbp8jVr1KvaNsSE1rkAk9Tz6V1DV1zGbXobUZegQdeBiJv8zadtxrbiuMMv6SeUJY5xdRQwU8jfdZ43xTMQ",
  "key6": "3NqGt4KvaHE2HpKXHAxt4sLQUMUEfSftCSiiav8TdZ47jY4Qky2AwYcf142Z6UWybJ6bg8MpqCwAZHW4pkExMzCa",
  "key7": "27wsJEbyh5Qqjb3ixS1umSbe2SVDMNArfiMBAdP9ZnobW6e5z1mDQp9TArAs8Ey6QHCsbZget2jqv7127jTcpKeA",
  "key8": "2VruMPtBvkFQY5xu7SnSMRtz85L99Ub2ZViP9bkzrPMx1SHVTFHwGqTMNRUECZpipWUcP4HoA9uonQfu3o7fgXP3",
  "key9": "5LCEhSHKNWQeStKE9rVcF6C93sZ8heRxTq9xz6mgLnbiNCZGEzYx3hgZdbYueo8SMQtHrj8ZUjY1yTnjdasPwKnJ",
  "key10": "5aW3yDjwjtFhvqNdG4MJJLcZ3diHYiwBgkWKMRVoX2zQppkqFqELHDZ6YmifBSZR9GmzGo44GVVwB1uKHSAKvjzh",
  "key11": "4ALFQovDs5osktZ9D4RKqQjtxdGxFj2y4wtfYJQH27mcFfqGLTZQiaQpWiH82zE8xdzpAwVa2jvjTzTmqVvUjraD",
  "key12": "2Pu2SWE96CUx9H6mesNbFfBDuPRR5se2vyrWp5gvqDQhgSPie7oetFHAtzr2yzhZm98PUosu5hNoQXM2DfkuSZyh",
  "key13": "mo6tfAQ9MGvZA9LHSpfTXm2ppHiG34GeSkLmW1378sP7phTD8eSCwtYZqQ1vMzCAJFD5pyijDiaSXRvwjc4ZcQC",
  "key14": "3qs4D8eRrH2mZCkXAiUVrqGSBydasEWEhVX9HxN48haQCXQM6VPUoKA1T3tn6FhDkvWavhEycEx46m2RyGDvPQQh",
  "key15": "2UVBeLEyD7HrANK5JRFW9s74PQpQzc1EMAkapAkyMYNord4rxDsZPSpDvXhvxhi3Go4WEP27HcoSL2yMdMrtF3RZ",
  "key16": "3Go8cT7WjVyYKo4BWUa9pdcdjwE6d1Tqi6SH7tLynJpH9jSwutNppgcMe8sfidz1vrD1DtcQi3BNBd5U3UYD9KeS",
  "key17": "85eQXosCRyEi2N1xkvoWoQaC7Dq8ugzqjw6BDHq636nzS2iVYPW3BqU4dZ28ePcGry2ewepJnVRBE9hffATH9Kd",
  "key18": "31eWCiLrrUBeNShYuWK5s74oEqQLMXw7YHUZ1vL2ee3rNFSkdJ3Ms8qXB6DKPAKnwogSL5vMV8NqsN1erQCg1z4x",
  "key19": "pQofFDFvXPbmniDRQnJu2CpVDQPdB5xoTJBEfoHAV9dbW7kkGpaTwtww67eDcJ569EZCpjKZHTMAm81tPNKJCxs",
  "key20": "5juw9h2tZguGgDuc8QnE1Anr3eeZwd6VoL5i9ca4AjVCqfgMoYg9B4pPktcbwwJtSXZBcg8gFuKc4HSDGwf8VH64",
  "key21": "2Vq16ZAA6cReAnk1YWwoRFUBq3W7RLHtE6nZQYeJmKxipPMDxuLej1hMYmk8CCzf1HYnCPpHhG7itwjXx7EnF9rv",
  "key22": "54CFrcNMZywNHx2TSq71oCcCx2hUrZsRM3TUNw2FSMn4Wwj3FAvAsoH393JW1iKQXABvjrdq5pyf9o4GgKZTecw2",
  "key23": "3E2HDDB9TK8ZiV9DwVTP5bjjUp4PMQBtvj9csnUeNb8m1cHbqqWTm9y9ygqWkiXTkeZ1vtETKePjBKTt1jMnQ4Kw",
  "key24": "5dZLvtGe99BZBN92nwDRS5cTntDqCTX7KUuYPb16JwaKBGF6641T52QzKAhU21vfwskWD1qJ2kvnUFYYtmKzePec",
  "key25": "zkvUET7mbyJapSp7RHtBCnE4be3bq1zphTS8oRGHmKARHqN8WoT9cwZEHK61AAmCSE1vDsjoKoKvE6kVpxosP1K",
  "key26": "5bt4NZNUJ5dcVecxh9hH3PZ9uGUaoR24ekf1J26s1eNSP3uCNtAtQnUN4F16T4YPkzxE5wz8J4gkKf5yEDPAtGUr",
  "key27": "5DAcqiobTJKhN1W8GpDnR6rGbXot3YQ7b2qDFVyVcg7KiDzEeyc1WbDkwP93akgkpwhxeter7yN1JVTZ3SCoBFKU",
  "key28": "4btiwfjCWi6trvWeWsZFqvXKobou5pCtXCrqzXB7ywqRSbu3qRtZEXC8JbiukGv8nA5g8RUxrNk95LfD9w1ndgd8",
  "key29": "24jFtrSKu2iZfrtTxjjWsNM35qEmYkAtVKa9tZy5kuZMYnpUQAYkcqcQUC3V5ZV6tbhHrLEJZgTcfGN3TbSbniC4",
  "key30": "2Q9KTcMAC9UctoBTAvhoLpRmZopnBGcjx1RtL71nvyYkodNz6ongcT4tVWGjiSy4uVk3SDXTv8szC6Qr4DCjk6ce",
  "key31": "5N4YMLkx4vhjBDRZJLTajJfpxehPWeWjvYWFANybKmNpfzz98bPSeKajzTugWXzaPsG5vpYbkstUycBHU9z3QWRx",
  "key32": "2ivowxQZcU8zHYFbL6fb6y2WLnQxZz2R4HfUNmQPmpQrqQW3ap3Q46RwDKe5v4oCwa9duPjjSiEqWHjhh3csWq6P",
  "key33": "2zxfg123mBSknfQQPUb4czrrJDMVyS4RDfi3JKj4pJF54DfcJ4k81MKtNU56Ex3tS4hdjuTFLLJxvTMwzEUyifJw",
  "key34": "3GbzGyVYpgi7hs75QeKpU93XaGuue4penxU5kAitT2qKAgE2JJdpqrGUV69GpDeFtv9EspBvjMYijf85jGzTNK4v",
  "key35": "3mCw62Hzjg8a3sWsnXRoMfiwumhg8yuuFxSVEh3fmazFYN59hWc97LJW3GoczGFpJvS1LgCTZSX3GDSVSCd5FkMa",
  "key36": "4xFLxa6TZmKt2o8LKBd7ER9FmCrVi94kkPMJuW3vfVWGfpUtY4uyGkSezYTNSR6RcEFrD4yocq5cC3mL9zYG6psq"
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
