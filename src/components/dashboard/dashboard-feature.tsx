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
    "4BMhFtMfpntSCawG8RVYWjW94oxyic8u8uJtWgQMryf3Ajx98gAnye4shfB5T4iDZkoWE2AiKMqmSzaLVAhm2Kuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LNNUbnqbA6ARF4Z1S8kS79F6tNzZR3De67AG3bu52WQyzs7RTg6AbtGEz5Yi3Sr33PXgrmgsebMQwzPGU44jT8U",
  "key1": "3NzhKNx7xn6SPNHEyi4EQ26Bfuw9J9b693u2vRe4N4hDfR5aJq8mcVtSCuh7uMjGEKskdYrKJmGAydreBebaDSj2",
  "key2": "5CEbWhwFLB6XHnw4hXaLg1fNX7jxhnboKCkvPC3BT9juPbyRC8kzLgTxqgJXGTTE83G3s5Pf3dFbj5QWwjo1ojPj",
  "key3": "5yGXZt3Xsbj9Aw25PVJYk1p4hLhiUKketmdpfTNV4VRXcJSdVEes8Aj2gniDnEmtf9Ls8CvaxMTP2j1AM9PDN8a",
  "key4": "566XrA6sFA5z84R4y9h63csZKuaqRtuKcwhdLhMnLscZeWo6suqwjDEfvU92D7eTegH7HXLBV7UV42e15w5NKQiJ",
  "key5": "4sGNgaJpcpfRJ21SYSywbhLYmytFy1VZrT9QGWnyCreahrAPp6HnHnHp8doP1npSFVo4UhAGDUC8zLC95k91dXrV",
  "key6": "3gmYnrh11trkyZEFCrj762EVsPnthEmNzuYj3jE54fZfuXe4jghrvQMxgCwaf8SpHiTsxcpBbMK9vgYHfvujfg2u",
  "key7": "5BJc6jcaUmrjj5qbXu5KmM3Ws6ZNJNznx8jY6YSEhKjt3QcXYLHrCNTEB9pk7eeVenN5aYbkUUAkWAm259Mh84kd",
  "key8": "4dAfSN66yz6K26N4WrFTXU29nZfq1eyhb7urXcEpfrERDpxAHuTHddYJtm5XajwwcX3oUbAXmwTFfMFyHCCkHTjQ",
  "key9": "5AsFpRGJ6QMv1FJtm5d5Pv8USPMGus6zz2Xy3JU7mF2P8p2zKAdJntrnrpxwRgh8J3YxaDmEqHAiQ2Ck4SfUfeji",
  "key10": "5ZaAEMgSxuzx1muC7ucR5U9wCQKHqvSGbqcARSM1WpuDp6GqDG5V5HsDb1Ci5SV6peyrNjP86c5nnUMa3aSxLRfu",
  "key11": "2vRkpYa82na8xij3fHWAVX2ArFGdyefQEToa2ZTtpwb8eQtHk1cyJemFA3x8iUzKXCChPyguL6oagGqj6NFA9jUk",
  "key12": "5nXY4ckw6viXCF3aKJWTft4irT238MmPNHPc3H86LZnBkjyfTzgU9qowT2KcmS25iUPWtumZ17T8gaCU4kthfmfW",
  "key13": "iQczjKiKC45jxVGzrTuDtmwGv54kvNSc78A6fKmwcinAhJZgqtA4Lie1foourfPTmoa5jsxEAPi91ztWjskyK4K",
  "key14": "JHZh1DR2dAs6sZd7BqohsKyBvkdEWy7FE6fpJRZqj3tkWMxX8b1i11cXUuLqiuPof7CmZeXVSP629XSwZ22kUeL",
  "key15": "37UrMepdQZ4A9PRYuWWo7w3Z5PtUP3ESssU2herzcnU5z6xeTNYegGD3cdRnQnphRcaEnHtqKtETiB67LsNByYug",
  "key16": "prGgCzmH4tKK1jp6Bg87eXBsHgybH2nXXTMsrjwmftDuLQHi6vqVHBv8FmydxHfPEJTqTbHnN5coAhWhGV1vqas",
  "key17": "3phHnBZ5xv1mLZtKwJhoQMVTsGy6kuq4m2tXQXtE1if7X3uCz2YehEcUW9Fv7YAZds2ihJEbSHhwYHXAn15icnFy",
  "key18": "35rcBKES9zScq9tmjwmVYsSYFYgRJCTtEoqz1AvVR4xCavDHzXFYQEA5L9PxjuL2QZF1gHBkPbh8kS2TZFLW2LQH",
  "key19": "3YRc27bkybydc4MpUE9TqE1QaKqySG56PUGRvhTR5u2sRgAcXwzFfZ3Y4QA5o7wZLHu9BkXmvzcjHa4Ro58NwHah",
  "key20": "A7Bp7QXu4kSRU8kZ4eR5NFzeUhhp9Jbi5gKvMKmis1vegkt423T7E7B6nqcoPr9SH8c9FJw7j4zn1YqtWxxxx9x",
  "key21": "4a7Ga6u6UxtNfqsZkCmMn3fTjn262WdVyFj8NDPu9puYN6ukfixbKB13tkefyJKQqfHaoxD8Ngip47RaQY1gyQm9",
  "key22": "2uzSt7Q1vmQkKc1ZUapMrtuofohThoUpW2pWZv4vc4SkRMMoYampMwxnf2UTkKEfdmzSeaVuDakqCPSYc6xUfXGe",
  "key23": "4pHfek3evD7ThFBoQmY1HoxUQLZoS6sT2vC85sLkg19KJ7Fmdha9AJMNkLdh3vPuCFXXK2F1dRWsAbBwGqJAs83x",
  "key24": "5QeYpHshz7vpeUnsqjNpaVQQ3JLfiG6BAnikEp8C7ZdhA8yBtFRat3reYKjDpdmGUX7TsePGT6jMLXcXB48eL2FR",
  "key25": "4F52iqCx4ro66xoHBb6g4sP4KpZsyWRRRR7Lk56V8RSkSBoxnKiL1VuPWj3AjmXWhHfQ1YkZ9r3hQwbtFtdSe7rk",
  "key26": "V222RX2x2fFVRtTyzLKwS5WfM72PN31HzU25tiJ2LWAXkgaw2XoKcwQgrK9QHocm4Qq7yGHftjNgZtvG2Epv37q",
  "key27": "gbPWnWwsAPh8MfFY2NDmNu6rXeBxn6bXRBow1s5cVoDbeeqiFTjmGNDaZjAEC5SCEAe4HHQ2u3WF1XYxSatozWo",
  "key28": "5e2aYpNjSgyzqvebFXu8yREMtatNrY53LetecojcQaVvoJRSvX7rMRbDNbTFnVppsW7HBccdxHEBRxV6iEq9NP1W"
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
