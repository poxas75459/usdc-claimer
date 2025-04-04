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
    "4ch5unUn74d2ZBVn7foUD2yK4kN7a57s9t5sdspTpkq2Bj2df2geVUjA6hUxqFLt1EFutyEEoVnL6R5CLxKN5tQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pN56ZpKUTygaF9jM6GkNmqcwtSUBAv36qqKGMLTbNUiMeUoaKFxnc63wiSJYbKNPWdq6rEegteiat2aqPnq9HyC",
  "key1": "5XHRahjtiRyTSMxtRnVsCisKV5oC2ZScnTzQ8nv5eiRVNm38f63tjynoWbwFz8DA9CMS3TES6VNb9r8mHWNnyyu2",
  "key2": "bV7g69vRdaAZfffUFs18UJG42NzmNwKAfMVLLdfsKTySrVTSbeXW6Eiiv24DmZbye6eWK1mF2kfvaJKZASaeEZ8",
  "key3": "2QoGpJhtcNFWAjpT7Nb6wqRoihpi6sMhu6AV7gjJUz25R2H8sfEvDYdzPiPHgsUkm3diu4eBcwQmTiK5gqSLH9fM",
  "key4": "41ZojHWpUgEXVVF7QopGJwxK4MDKwrjzTpZosKaya9mUwv1f1pUdGzDWUt4ULiDq2sFrwxBFWwHeuoq1VaZid4Bu",
  "key5": "47kWxGptySmFV2DfA4dNTAr3tMZDGdTiRHtAZsc526mEiuGQScGLkVxXY3E9mJYgcHYKjq5wKNLypvRx8dAZ2bjc",
  "key6": "4ob2hsU3YJagiHWYfP2mbgvCMd16C4w8eMh3HJMB6nosCWD1VPoRDXNJayNU1phZDFBb3XCgPmL5y98NugoRarhw",
  "key7": "51YLtiJjSp1FvQFpUSmEjqFBmjbCyjtzkE6onSpM3sBZT7Bgc8iDv9AmfmMmTfcNBPnU9CpJh9BfVhC8o5ChiLaj",
  "key8": "5kF22CNdz6mveKZhCk7g6P9QyJhGxLrneMGDTBSs2YvoJpibmM1hkKdfSJkDmxq2s4K2FejztN7tHRQvykoHcKfN",
  "key9": "5t8XLHTUaiVZnbr1UNJJvHhkn3a99FtGv2rLtxNVFihgb8x5J3E9h6WJx3pRTczpgZqkuxikzznq92CiynDEh862",
  "key10": "3wANcu2ncbG7er3EdzPzupAAcP4A81oMbkzN9KEA2E8vBATmYVc7tmpaXGxaGXvVySQ4gC41iyA9SKcQYwMpcBGV",
  "key11": "3uu7KjD1aBURMUKXdLPPubKEHneE2CoBXhNiEcUrvexZxqeaAva9Vdbn36UxAqWUUKnaMyb2KWNSGfGFueBVYsgu",
  "key12": "2Rv9zeHRkVRtx8tk9T59XJQWNSGcMjsWUu5tt8qstKrSiFLbbPo9m2pVgfq3jsTpm7LqZzYjdiNASLDDQqBxtatB",
  "key13": "2gLwKpxXQdFGa5Y93unD1UdL8Sh3CV6SGoMFzq7d3be8TMZBmGRX8tiGfhmi8qyU7HqMW7nTy8yLkMVBG3nf2J2C",
  "key14": "2Y9MEzWSDbrLU6Hj5uvwsywoTTAoZHpDUu7gSzkvzCmK1inCKWVHdjEoJJMGa952juZuamHhnZfVCyHnmY1UP1LF",
  "key15": "2ftzm5qmwHLb2gnURARJKGAC14rokcYUs6aoppD3vLFuTQCSv6tRi12EiMfyWZn96qPrVDbgpgjWk3eYvRyNdbpz",
  "key16": "4ufDUky3r8pN9j3pQKB5QFdwM5iC2UFE7eYJ7336tSXndtP8VWhVhQ8YLmY8LwBrCUZDZ8W2QAiXWeD5Budua71M",
  "key17": "4VySbKfKVaqfKCy179utaepREhMEoq3a72Auby1oY4KxfUGAgkvDp2BcXsQbLrDWAQ4dMm8jpHuzXnww41DW1eoL",
  "key18": "4KTHzjAEg5wzVxcKtJqUB88oSZmvEXQ1fgcDYqmAQqvK5apUt2VQPyFRKvgthSu6kFhaYRjWTZjW7pkwK9JqDyBw",
  "key19": "2grC4roxPpmuet9vEnGu4YE767iAZ3r7SdLCjUz6Nrif5uHMyTB4qEkRrJGTptbdoygvFH67BLjGWBwSeVqpDUEF",
  "key20": "5dLwtDKioYDcb5YHCARN91gb4h3Y3pgx8uuHZ7HZdDMr8CqdBf3vS4gNNKWhZw946REufGFFx3RkT8ZqDHpXinYQ",
  "key21": "7EzL5Gzn2V7sjV7ujpbPxpYV9T4r8ETZpvzzb8dHZfQBbq4pWW2XTWg2aBrAVALPZQv32muRoBJ9SFBNNJbAdDr",
  "key22": "4WyHEw7h4ZquhDeqrzRa41kZMnQq83s8TMhGU7UrymPAQT6acfEHjkzMwbncsfXK8ZSPdPSp1hoygGJA9Ye3A5u",
  "key23": "Gug3wYULS2pkYweqtn2het8MgfiSdtr5AZ4xRHjGe852Js4xuWG3H5ow3wL3NHDidaBTbk3WBf7YZEfzjiivoUp",
  "key24": "3sGVyFk8bbtCCRzh9ZFgZeati7i6xPKdEmbbHZt5Q7j3sU2DvQ8Zgx8npfUbp1Jr1QAy7h2emNbhUqqufU5wrTQG",
  "key25": "5CPWuDmDgwscn2gDkPN3VVvoH1XLokBk3kLQg4296pKamrYC9Fd9CKx2Lj4VC25LdjgAToGzUh6EzrnnPD9bqMuZ",
  "key26": "4ycDvQFCjNAKSuRaczBqTEjQyL6WxCqEhXpermAaJV2PfyTwCJJGaM9d86y8nbjvguSJTWkmtSHbMfDWSELsDXiQ",
  "key27": "owcBVSmQ11tQiGuG7efQVT6bjhWWKNqL8tJSKaj4TtqRoGBuVNDnkYARwCxoNiFVWXj3v5PFySWSYnpTFuj1XJ7"
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
