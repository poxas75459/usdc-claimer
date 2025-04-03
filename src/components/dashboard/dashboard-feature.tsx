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
    "GEuoRaCWkdzDPyejciSQ8nGJX8x35jA1VQQGrEiqXcAGp4upm8YJxcXMYfBLaRhdoHpCXtz6RofaXZu2DzRu7Tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hnQDR6xDvqZVUMJRgHaycqSVfoofnmXT5vYNTQkAyrv79aVJFB5mAe98VMMPBcCdvKn5wfbY55SkCY7STJ3wnM4",
  "key1": "4b9b55bijruq48ZCnX3KDt5n7k34aYz4bXtgGL379R8NsBn2ARcwHTkXo9e4a919dhJnkkfCBtjxUrJte1smRgpr",
  "key2": "2bndnMS2w2zZvbxZkFw6zzxQuUpCJpK5ph6ZbFyPZ6XiZMZpn9oow9ZUnDoPWrk9ykhuZx67BHwX5DsrfN2rXmzM",
  "key3": "3MicUpQvZeJuhrgTFonm69nGXuUZTGkP5XH9mW6kkg5odoaiDYUL4hSKZcBuPopVAXM5XTdG3xe9Yx71bKZL6a1r",
  "key4": "2khuJ8phtbwavVtxMN2AYsfgss5jxyAsWbZiLfdEJghHSv6PxxRMxBoCWwndmXAGd3vtZWfo3qoftLgyxHGHgztL",
  "key5": "dW77QfxpefopbfdrrjTDiAKUqa9ZLV5MxHQxrGJ9ZH5bDUjUYnACyQiPJrzrsS6CfbwoktUeEYUjwH69WHHsncx",
  "key6": "3Wz1mKXtYtWuQWQFRf4mNRwZFhtEa6oEGuvBpkBfMQaBvv5ujHsCW14FSBMHEC8hwjyL5QFwgLH1gbPFyoSVQGJ4",
  "key7": "463DBgorPpYG4SrnhrbjpNofUPz1AswKjPJVQ9AXwvUFc2iFoU8cpsRtqErdg3NwQ4R6n6cNirUSgqrTR36DefjP",
  "key8": "T9CwKF6VZEZaePX5x3eDY4nGibkpnxPZPgzfhvirE9ZMn671n1ZuVVFvo4RhoBmWNm8nzzzTJmysSS9excoqh3v",
  "key9": "5mMinYoWWNZfgR3DFQRsVPaTJgVKoGS9kmQH92WzZ7rvfh9nMTG4jSGRSJWQbxeoKZC6qvTdcoWoFrPPsHzWRfeW",
  "key10": "3kp3i4UZ3cuvHEi3jMxSaW5EWKRbNkkpo6dbZT7ojd9kqsupGzqXiBbYW8kxKW4DqYSxLVkgMwBKbQh4cMFTkQkD",
  "key11": "43LdNRg7V22ZN2uiLA2B5L7ik682Adrt7kbAwW1BJPytU4WqXS6Dmyv2yQKLWJGQxdJ896U9Z3j4w5dEtacyUoPr",
  "key12": "3rK4rNgCXoExtvpzRrvKGk2fzUovfVnAbe2T6RWRhhor1BkbyzmS2ioiJ9QjtuebqM21p1piUdyzE524JBHmzFoT",
  "key13": "3f1bGUmcCVd5bSQLQKzFEcATPWgPRkoeAzSfNe55agEkpnWYmPsWpTH9XmZkMRJubqE8Fe8upqCfWR5GgCX9rmdy",
  "key14": "3MgY9TUoxJcskbUFvKLRHtfZddykejw9b4QqEFbZTQGXB6oSzxhyH8FC8ZsK4fA1cBa42a2m1yka6P1CU9ZS8q6G",
  "key15": "2de35DyvFd5sNShkM1xjHiCSp5M6nRkKAoGjtAzKmmGFPAFuTRvym7v1w73miax7u3GBAyebcBvEBsmg7URpASPd",
  "key16": "5vjehtaVB5yJ1HVb1FyTMF8fzGjwtMuFAHb1nS7uSHoVebNk7Z1mPXR6kWvt63QTaBqhPh7ZASdCDdqtF67fpHaw",
  "key17": "4oAt2fdJwZxy23wT2W8qS3P4vMTMJziM5Fsqv2B6cVpm5YuDyVevforoyGAjFmWdYy5gK5aCsZRetaFv1KhQtawB",
  "key18": "wmqHUbh734odXvCsuqgcEut8rXXRfsmGD68sGq96xhWZMonSE71HoSiocPXij7p2cZLg1i1SqmgYdjMPSUE1ZHe",
  "key19": "4LXUYCuk6QCAVVUGdiAzWnWqMuLc7LWPG28ym3FA1zWj7qqGyNzF2QmpuTaMe88daVrKR1gLTTSbg7sJ5VX6ScQh",
  "key20": "31DVQkMYzXv8F6R4wCevojW85wxctkeJSN5FEyGNdDDQhL1qXTghmTaj2zZnszUeAVzk3D9cuVUue9zo26p9PGmM",
  "key21": "5XhjuvMD8yiGF2ghGShF6uEzEDGGKn1ZUUEDKBDxmK3UPxsSreXLdGBDaK7iSED7Wxj2tvmSMTq9VEvemZ9XXeUm",
  "key22": "2k4Rcov4caiab7Qrmcmmnium723ugMrqxkaV8aNhezKKTi6bhv1BujeBQ8ZLfRYDcywtCCbRTp94GUyxHLJWmqV7",
  "key23": "5dVsCzfNoibBLVkHRBqemr5t2qFXSsmM7Xe2Q3pXTSN5hfXSEeUHQr35Hoe2poBPTXZaFu9gHPpQ75gHD3sHVsfV",
  "key24": "3nuTGRmoTYfB7hL4RJ34KWcNjNqYrEygiXPa2ikR17dXgejBva4sUDQ6oZ9uuhkWt5s9r69GK9LzX5KY8LvQ2Heo",
  "key25": "2eyX5Rg5S7hKagnjPuw4gpXZGfgxAeL5b7KSuX8cLpY4crWnKxnn2MA8ZNCgvfM31v3J61MDxmDtXcbU4XddJKco",
  "key26": "2rANevApcPLXLLvumRDdfdYP7akm8scgaJ5mFH1nfqzBsaneKdsoCyLepuRFNt2T4CjGDSWGrfaGKUmhLPwnZNqT"
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
