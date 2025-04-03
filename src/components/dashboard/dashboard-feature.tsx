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
    "2ue3ZkKpUrPW9cwavPQDqzZmJApo4FZoxuyhrBS327vfhqYBdBdinLWqAPFjkCWdhxVhNxhzjTD1Dg4LZ7CkgJXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LHARb8NyMqEFmC85wZt6SsfFQdscNiyzYkBNUUBo3meg7iyk2M2d3nrKzWcKVq2niLpn94y2hhwxxiuhCdBzJjz",
  "key1": "2VFr16fvTQzB5BTNp5dr6Etrfai76AURHGQux6SpXydC9SRSqUuo349VqmDxMFF7AqcJYnvpV2LXR1eVLU81o4oW",
  "key2": "5XPyrPDkMrK4DwN7j4DLMDR5tpyzNoNczsEhom2bAVbN8uE5cT8LqMMj1jTZKMqUM7ZkbhB4fPHineAQHPS5FCcC",
  "key3": "4re1WM8LLvf6xGDTq3sfEMrJqM3UtBbZKFiZwySV5GXPAp7qdiatVZGbcKktgw2tESRdQi18i7yiZdoS75XnC4Wh",
  "key4": "5KU21g3zyKr9UzTcK2E5U7Je9uFCgB36dDWRrbN6XYDJhErNtvMDjY17m1rQ6iGvf9rNJnNBYvv59d7SeYZRPdgB",
  "key5": "48UxRfneUwsZiUe4k9m8ArYNTfEAJ1wk1VuaJMrhYN8HnYC8YQjfe7UaAgWq7biskBNbjbvaWAUjjJY2EcRKtp26",
  "key6": "5CcqQ3T6HTyGffP2HhtBCVLW2gcJ8eeQ37WELFdraRj2zG5KT4g5YhtSF4V7Jjx3Hv5ufxzS4LNTAHxuCah8ZW7e",
  "key7": "48KdQNmnqXQxDidztg2pvKaj3CQ4bcRdihpUA6Q8CRkpBJxYFzJf4rMobs97HPSCR7s28jiPhe5QaGWLYgFA8ke3",
  "key8": "573icgkHcqiP8a53L7VSoBYP49pCsDZEZzSHdU8LKsnxVGWkzAbYbQ85gFHmEoa2SggrW7NpKtjJb7umkyDfi4DX",
  "key9": "5XGw2cMonnBrQGYGG5ypw1PzzN7hTBQonn21Q25L5TNcQ3ufd6c8ZRF33nrC8yKN38U3mqrdhk6aRN81krHsMz97",
  "key10": "24M6APzfFNxajuAbAq1XXjj959CF7RSHXb633vwF6xm8whHdSmcxKPQMi73rma4Hffkda2mBGN5ucfcktNzrEv1E",
  "key11": "5dJKNr84vuF1HkeFtvfaapMzwdgyQTTxdkvxCGA1TahwAq3qxTqPhtLFex7XZ8U81mx9fHYqGEWAVan5H1cc119C",
  "key12": "2PfwcmaMRv21K9kH7fckj4vYsUhp3g1vswCQCFb6tJeUdaoqQadRQm4Yfav84Tn17qqQKZfLRFxyHrnAwJfvyn9Z",
  "key13": "3jjBreMWGiG84SnA65v3qiPmMsp6G6rjSdFeft9avKGqYpGGc69d5Gk6vzqR2SKgTCKybj1zGuhSaXQD5nrRqXYN",
  "key14": "3uLMnFHYBoggd72cjSNFJ1Wm78kf3EfPQbCA41ozAbEEqj65FcMjbY23VwXzA3gyqRDZdqUSC7smoFYGk79yJSsA",
  "key15": "56btxkydK8G9MfZkmhmUnPkCaHimLt8QqEk6rjD9o9KzJ3WG6FQbV3rAJdEnhLP2g3w7eRoLDPPMUqKGUMPMosyL",
  "key16": "Equ7VFmVRLBSh8fju1Ja2HFEyKeYGR2vg4NB874YzcDWjW33T9cZWhRLNPxp4PXpmnGNGQkRp5YYCZw4uLwBsLz",
  "key17": "28MhLt3DkrYdYd24uGbTjNz2F6BJBigYTXtKU13wGMmVod1JoeYftETi6HLhtUvH6oPZkYagpz5FUAW8AuwZ6xT6",
  "key18": "47N71MEdTxkmQbcvACUswqcP4T8GUZYwhityZ1XV3bAgVWULhMWhE4G1Ugpb9M2PM24y9nWY8R2qyyW139bhYBWb",
  "key19": "3AW7JHydEYWbyLfY2jAtQWwTAu7x2GrdKKZGm2b9KPLq2P8jDFcMhcEKYRX9D7XDk9ALm6Mu8vJQCZGXh4GMQUQS",
  "key20": "2TKf6Rvb2yCeZ7zbqWM7nixs2YaKo3h3xYu9WiuFSeWBKNLwuGu8rNeV78xxA98wDKEJ3Q9jaxQBsU6K6V1Yh1CJ",
  "key21": "4cToWNNzP9XmyaA1CUTBWV9FarCwMnBkoHWWyGs8BDSB8QTHu8Ph4GVeMFsNP6fSnmzFXhW6YiudnBwKu7KNSv7x",
  "key22": "Tz34ComKYHuoQahsHuwuewNT2TCcBCvyrsKruMjY4epwbSqDwbDLXPKvqeEXu6tEFoXV5yH2bgGRzGhLWDVv57p",
  "key23": "63EV1sHku7ATYgwYqGaGpNivrSdLXkCSfBTu76q58EeEAGJJoTUa4Lfxd245vhFknhfBivrF97a9EbTS9535uLpH",
  "key24": "3cBis8HHoxUwEWSSLYTpC2d4HEEpaoYKARRSVQZLLZjHeipaGE1jx2JSFXTRLYVYD1C9di3cC2Knpafipv44JKkf",
  "key25": "3yQJ8oE7S7sEYso6JWu4o4JmVDUU4bfDS9xVUqB73AkVh4Yqva9ffb2FFHMsZo9y2hGbWNoBDQHHtwtTb3v8NovM",
  "key26": "32r4vh5d4iEQnHTbnqH2x3AFmjJNcGLwezPjaEMvYiaPKtAw79LvarV4Hg3eMuE61iaTjKWzhjE8xx3Y4Cu5jAb1",
  "key27": "2ZMifdLVhinYke3h5uENHGQcmsUvnZKPaU59KYao2XRbS6ENgBQqPBFM8h5t9hCn94YntBPViQxJyscjhyRq5SMc",
  "key28": "5PYpJPxpniRX75YQfiLB99BHT3wTp5FP3QvuVS1wARuNYqsfy1NHY6WtwhkHJSxHfDhm7KjxHQVtkKTRj8vehaAY",
  "key29": "5mPkTU2FT15tZDTvrSvBjJ69j9uYEWuNdEPwzbvzmZq2cMC79dVWmn1Kfj8fq7G2DgjmFqvw878GXW18sCy7Nd56",
  "key30": "4k8cvZwRh5fJZ22mSve2i8foKu8X1pbRqLvkwhCWTq9AuSnUioWrfwKSWVvJFo85vmrUkD83n7e3MKhCNKHv3PsA",
  "key31": "3wQTdFWB5gkP6cmnwdHuFta3KRttS2yVprNvkosvMHTKqDMfGLZTQT1dQsgP2VPaLw1UrG8NQVrNzGREv6vBe7Et",
  "key32": "2UC7RrhB3ZUyZ6PnHMTsQrT3zg7Lz5HkBSN9wQEbpEeMWJNT7VDgwCtZi642B9SGmdn3hp4Dj3KkvYd3cnRbCjCc",
  "key33": "28xCLES18KDTU3iPPeFzYRtMvwnqWif3nao6269GyPwgZFjR11ZHDTrQCYN5jAgbvMGckRK4gXZe2wJYRnH34Rud",
  "key34": "26bjsm56o7zR7nYxLBi9k78wciwjyFyuV8qEFTB3UP4siZuj2PATubNUuorzdkTNCUHsLwzXynjtz9wDFUjNrc2v",
  "key35": "2oFo7Jdy2FBgSaHLJEUzZ13z96nbdwDy9dPvzZWLYKL9DPENLNtg6YCmzSD22eqLLzB3GgednUcfpLXNZQbq1vK8",
  "key36": "2FrnfMH4DZ24uUxCQXzbRaZJbZjjUfNQWxYbRic77BegcwjaAs1MJ6z68RqxLAKNJ3Kj1p1DehJPgJkRgSwg8M8u",
  "key37": "2gS2Umaqu1BXAh2Gdz7gnoKgjVyfGnKWSeNrhmV2i25qxjeCTED6YSzCCw17fB2WuZbtEzsnxtscbZk9bJmMS3ED",
  "key38": "46PXhG1iab4DFUQF617enLxu5GhbdZQoj7yyrt9nEdfQAwZuA3iJxbB7ij4bzo1JY6NP4fEC2tjLZcmL3pLJLUp",
  "key39": "iM1SNdDi8aHp824FGHyB8QHde1mogwMZ9XK9SQ18pXV7JjytVz58T772bXntouSqYN3RnnGwB1CMjSohUgVKhBa",
  "key40": "zqReAcDrcQvFf8qjThuwM1kcFEvsBinRW7XTM1KsrmQYbpaA8gGowRys5425YLyQFs5qY9SXqFuVDHUPB6nYsYg",
  "key41": "5xkVPMNnwCw48QQFDmmUZEK16mte2n6cFNK8YAtDd7ZKAowX3LwLHne3SmkHp8zdEiKSTMBdqwdxZmxbdP1tEBqk",
  "key42": "4ks2wDemqoSQ5D6HVkXWWynrcAdhPNj9ha23Fwjwi9HY4Tq6CR3AvdCvdE15svkSx9G1Ae3vYsM6h5FVHwqYYeRt",
  "key43": "4SzWAAn9PtKnB2cjP2AiEgoZRKzBpzaQRjws8fxxjW8SFPcGky9VMfBaAMfyjjEu5be8goY4SEtemwVQEVkGFWmG",
  "key44": "2WrSPiLN3WC3BfHgyR4hmEpUeC3xprPDa4qxFeR1kPupEr3Z7VgjMXbjK9y8TVD6Lhd9crGkkVYLQjYhWDBTTkwL"
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
