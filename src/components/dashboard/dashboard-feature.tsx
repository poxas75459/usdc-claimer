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
    "5QMQmbVTGDX3J7QyGrJehXGw78oydUGfaYhF5VfC9ykH9JznoJUiZ1hHnyRrPeBxGYghAfDyKPBEqwSu9hGDKaCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xZ8nfEWUf1QEwpTMVVSK5nuj99iuECd882JFKLcmEoswtFkvfCWMAbcboRnYCZg2Nshmmm9idjtE3LV7k482Adw",
  "key1": "3QHAFZbAJ5tfbYSGVjuvVQ3xXh745AeGvSiv84bm3jaNQsJ1BRL4kvxfvExb2onb8kSrPTG4y1zVvPAeG2BTxAPk",
  "key2": "3ZKTr1DqeCLBEjzYn51ehYMC2ywD7dsgSmbPKJBUeKuyTNYqiaWDXNjJd9nm4xDwu9YNE2HggGLn6eCB3W7m8ZS8",
  "key3": "3jb5PEDnPGwqEBWcu4sWmEEF4Wor9eYHjKimabBMRWga76VKQydf79ywdtBhgaDSpM8P5DBHe9YXzubKpraNzGS6",
  "key4": "2ozVHf6PfgF17Bnhp5JBeAktnRA4Msk71zKRoc8VXiGnXNJi2o9amHrUx3vMUKBqiTjFymd4sQwRFWpWSPsAKf2j",
  "key5": "5MzJLX8qNCnnWM5fa6f3pZQzriWEMzRgqXb6hcZtZUw6BaknUG4FT1eaBV5TFfSR1VYbvrZbUvfxAiuAqGQXSKr4",
  "key6": "5UBYY5aB6mWCW7YG5K9XM5NHcUiegc8vpRTjs2J5yxMzwk7iLzgFBNWEvK7Gd6aj54wETL76Qxd56AaMREmmpzLU",
  "key7": "3R3kMLxePBgeqTqZ8hgyFcFK4zK8sZe4Tbcz2Y6NqqipmyPt7i1f6VJC71vQALRUszHzooc3RjCwdYFj6B4hZCbR",
  "key8": "27RPaxZvRa2kjqzzJ9GwTZweZG35wzZiWqaWKdkn66EZfDH9CY13JYxXtPj9UWYzLN4sDQ9LbkaMTFRLC2ycvED9",
  "key9": "5gys7Wcn6Cw7Jqo6GbXARWUXBXAqCFtgR1mP1jVgKteqqGczJvifsN1MY43gDBu15QScYku9ZYyNP4aDYnPyjrQQ",
  "key10": "2ZueLNqgE6rd4ceQQ8xoZNFdxbfnMmhuHj77pU7s4W5XLNMRAKRyR8Husn1aHb28fswT66KeKKZKLkVFozkv2tEw",
  "key11": "5AvzdqzWkGNaArqUHo6M9v9MyYdcuHrcF7iz6WCsmBAgmXSHXevHqkgZxdFYQ4d1hD5xiw5gctAB2CPhX8ZFtsT8",
  "key12": "UKhbuNMeXLYuAr44616KC2MJGm164BnRqYGBGHTRLfubaXMKAVYGigtsRyRau3o68YPiJcDXEGRLWmR6z2owJXN",
  "key13": "5t64K5cd4vvpX5CPs9vMMmqoX4RHF9JrJgveEbK1FB8oZspS6nt3d2BGjG3HcZpmfjh3cdzfJJnXmPudrZsRVsRN",
  "key14": "4BGLJm9D5m1FRkRycUahyR6fSn4JowPpF5WUnS9vVP3ZNUMrGE3hP4bAq6vpfHeUGWs3gDMbMnrGiHBj5Sd9g8y2",
  "key15": "cU6B6qqnY45NUZkKYRkxbmK24M3WAZSn1GJpHg8kADKbuQkWQDCDcsFWQG3gcZuj9sdxp5SggZUVa44ieArthj8",
  "key16": "3Y5gyCt8t6dPVH9xj6YjrRGBCCtzZ5qehS6X1KA1VFsCSoBuvhRn3sTwojPu9JLUYMsx1bMUTT6jqeJF3epdt5ZY",
  "key17": "2qARLjwDXsAmybchA7sdd2JfqpyDdyUX9BAZTP67FzMUg17fHteCUcdyo7y1rFBgsPkgu1fYduYPNhRm32MvAaA7",
  "key18": "26myTexJ8ZLKNncLeCwCCJPv41xEaN14GCiJKncfgH9xY4wjbG2eFdLLvRUThsZw8Xyh6GFPHoXJDRtxac1jx1eL",
  "key19": "2QxVko46Quncq89fmWwvKEKyiBReeUgS8aGkuJeN3iuLXcgHHxAGTs4AgjMuJuQbMNd1ez7YoYtX3VaLNWFwUkby",
  "key20": "gYbbnFtu3HVkR4Ufo9ikpKAtUtaoTsSp6v953dCK3775aWZE9bWUPgVwgBikKoxdtfbwXossKWJn25qYYB6o9eP",
  "key21": "4gButxySxLe9LRFbCuDdRFA3w3fUbyF4zCyRQDbBtJWK3QAVoM3zy1XLsSSQTLjd8VWX29Zdu8ajaATrihzFiiSv",
  "key22": "3fYnw59JAMjRiPth9aMc3mNdYJeKN5w9mWn8AsuzV8dVr6CoLTQsZQotP1Asv8cVjYyMX5hbQg6EkZmgzrbVh85Y",
  "key23": "4Ah5roz31vps2khLi1RNzX6qwkDTC5VxyYrELuzQzbAeCGZiLFSxTbcUuM8VvhL4L6LqxBrJ24kRo4w6zc6gmwnX",
  "key24": "4jNkcTDv8tmYY5Hmp9z2ti93DrvBYMC5h1uKxu7hzhU6nSQbTkRKc6hqMyFih9nZwnMhmwu6fNJYGR4P8nrtaBHF",
  "key25": "5saCxx7j2W3NfHmZhzPt3LA6UTAadKMmgb2tD53HStARxJxx8xsGLX5QuFKyCBsjkiwRERx6H6dQPNPf4mXUhaJd",
  "key26": "4QYVs5MsYHKJqMB5gLg2zr9ktBzg97wJhJY7EZb5WNqJ3mScM96Lxuiu6vdckPifrb54q5Ps2bw4feGNWwtg8Ci",
  "key27": "3y5fkStzeHKq8HdgTkfyBsNFaYG6iMh73Ky8DU3xgG9k2a56R3E48d5TTpHYR22GGPHva5WN5Av6S9Kb4KMk1Whu",
  "key28": "4hotE8ZmhHwh3QRY3ZRCt7iaZcHTAMR6PDPvEbU3HZGTdTrPyKDWPTzYXyZmehE7S25dRqRZSfraSdaCnGsTgXbT",
  "key29": "4PRtdrNt8E8Qda1EaKbmQpYFPfjWYD9VUehV8TEiLZ593nXmdGv2T18i7tbsXmFYRNZDhpCyaCjb8c47T4a7i77Q",
  "key30": "3gbv1JUDGUDhhtttFoeYzzdu97oN1J254QtEVD6y3VwpExwJc4CyW5rqQ4555Kemvay8tezmVQDF4vVaTN9vbBLD",
  "key31": "2LiEkLWqYkyxY4xx6YtFbU9CDcT7Rn3FY4Fz52HGnPhx1SJi1faEN5mY2Cjber5RY1b7JrEy3aQ8TQN6ZjPa9WYu",
  "key32": "tPPMbNKMvs47Rt5om5A6d6TkNY6TY2nmF9XA6CKNksxxVKmmPZXqQ4TKjXLiUBJj5MSWuMPQKbky2hbxsrgte64",
  "key33": "5PrJWiaRnX1NYwqxyMeZP8VRRCLv7vPrKAc3wxr2x4yxEAyFYTzM34v9u7VJVWxMPWdevu5KR6nJwYsVGzun2qFM"
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
