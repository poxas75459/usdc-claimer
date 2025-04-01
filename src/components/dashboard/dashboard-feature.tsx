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
    "3kXHkkxLhAw3oYAmdvNVSWbdJrrn7goguFUxru94ByeufLWQJdYmFc3e7ffyADj1S5h7myvvyiSL7WZrSLvB432y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrzUTvfXP4XRHk73SQMZUuqShA9oDRybcPRX8AwTA5NgpBB1yufy1q4UsDCNKb5ZuuKAv6YvEqj37vFjoCsDVvh",
  "key1": "k8opaCiCKBikKahHAg63XGAavSi6x9uMTRyQFNVd3xgAnHLRGYo6czaS4qDsvJKmHBKnqi4p96g2jUfJSkS2ayG",
  "key2": "4wtBK7h5g8RsJKxcCLhLomTnvLZbBCwoozfNrQGSyg9Av58JTWhDaPxXbZYgz3uwXN1bvYewWFkqLPt4GpxogNA7",
  "key3": "THuaYvrGXMmPEzi1cjiJPfRz4Ykew8gShf85RidkH6HiPgZ48Gk51NLFkC7FpJ2ZwjptF2373E1bRg6s5Ds6Kjy",
  "key4": "2tccJSb3bvfff79XfgpB8Mu2ryVCk4YYWGi5TNzCwZXpWSqdLMzy1UEjFEj3LbMSimxPC4zkeytEfBuWvnrJqMyo",
  "key5": "5MPV3pkdQqP6taSzVZB9zGG4bYAA5umXtB2DD2pKqLPQCxaG7PJQHZxzZyYQNzYHqD6euGGDGCvS2xF2vrYz1saz",
  "key6": "2UdYX76n4txBmERxaGqC6FJ8pcq1GJqXuXKb6jN3GvZmXQ46rsCBeH58FkGgc9wtxfj853iFGXXwzbCsku9U1X96",
  "key7": "4EQBJtfcKcT4tC9WPqAHnKsXJu6w5ZNwx8n67e6ANy8om7aDqLvqoD2JnnwvhNTDhY6zr9ezRqfiqVhbsMnMu75v",
  "key8": "5Qegti1uMTGMw2VdA9VhyuxUH24c57daQ4htdCRJ2v2WLZJA5qqH7RPfk7Z1ZqScV5mmFRBMQm9MY3NTqqgiiuF8",
  "key9": "41uFw5zes95QS6kvLsDKHJoKcQtBcWqxEM58wTbsAgLcCrJnWVkquf7BVd97rReSueF8z8fHZELXW5NUynqNtebN",
  "key10": "4uJWBujRkQTZDNzm7RkHhiKaJPrQKY8AM5Xh2nBqfuxhTvqUmpYVvPknHSGFGQWVjmYdybcQ7QV5yeSY71cNjn7p",
  "key11": "5jpxApDjPahyScDDg3pxwachARqwgzBY1QB5Esrcfc8jxfkGgB4YkcyDsREJWiPGD7gZ7iWWPAqmi2ugV1uYVXjH",
  "key12": "5RhEAJM9gRU1fav7mAhB9B1QekPHmYMpHCZGM5hqZtApbPQxx7yXzzzqcRanmahAQUZhGM8LL94MJnDsKacJztc5",
  "key13": "65tdCnfm7kg6uy6u1zo4uCTnLNGiiYCYke3eBpA4YZ6vUDHDuhz2GH9rzi3Kd1MEXxeYG26j9szhThDkJJ65F8vc",
  "key14": "4Y3HRSDBay4Kb4NF78Y9qxwqncyVmpgsCWwKeGQUAG8suRAJZbtuY7enWFPFdfPfHhczNkxzzWBb6EmevFbLycvX",
  "key15": "3YNXBeNXmhkduwPqV4SuJ1ug4bKBiPGwYxqHeZxkYGqENAbE62QyV4wHkD2cWNDcdngoNaeCvmhSuagrUUobg9Lu",
  "key16": "3KMUc6p8mLoTtCPYAhRWiLVFysn1SarAnyZaLQLq32ae4gzbo6EQT4ggnBRA2a5mcr9GEjMKGNuMFim67U6iKnJy",
  "key17": "21MsH6KcygwuwC5ayGcEnyeqJ2uCJQcdiTqbcLvbkGzZ5X8rt3A9HN3iiKz5y91evtSK228nkzLsb2h5mF56r9Xc",
  "key18": "3YqAd9KoKZxxTkSr2boUWceHwENUTfsgQTJBA3ho1UPLt16fZ2r129Fii7YDKuXsBwNuc1E5h5hm7XvXA8Rc4emj",
  "key19": "4LbWfeBmBRAU1DUDK5UHQ1TnQzLQaW2QNuEAgEMdoxMEwFnUopWByGSTSBNukFNWr4wvBxQfyckkbkHc6mwLgGb2",
  "key20": "w7vLxj1CBsCLKwZvf2oeJEFbmw29rYgGRnuXZFN5zPt8g6Ma38i7qMumGGZjXdvMq7fNCgvGJd5LnwzETwcqvVZ",
  "key21": "5zHvhXFmBmNhVZtbb7LqD4L82A5kQr3FoxC9t9GhrWPgipG3h8RMygg1WdEw83vsLurQnhxbKX8ePfP4cZYTytmm",
  "key22": "48Z5ThqW53Fvo5JaVaWoDAPoWacJtrVEfcfxPm4tGHdwUq6iPMQm6iVxumsZrbYKufyw8rDsuoKg9YTriBFpRpmJ",
  "key23": "5sX4xiDf9CmptmRMmcJfV5VaTi7Re4iL5Lc2qUh47yGW71RfPj9XhP6LAux8Y9auNMde5trBVX1U5qw5vcDdykCk",
  "key24": "4rmyHGEf569F6u7WYJuYgpPwKPapgJiMJezdyHu2fJyDKr3AsQopAvQ5zBvGfJjYFPv8fSgcA2LdPEqh7Q9ZLMG",
  "key25": "35ZqXTKGS2S3rX7xyec8KFf3fVw3fA8XPCe8MkwKuznBiM2zXfnAnivuBxPEj4ixk7tcQ5qAvWa3fNiyrVury4gk",
  "key26": "3BQr49cWgsCGdhbHv8eYBk2HXT6DCGbnjo1S2z1ek1pxBbM9nV9XriDz6gzwQtkYNfhop9xWuySPuf65UJnicVnG",
  "key27": "5Z8pBxb7brvtRe2SL8E944G9SzrBCYjs1Ls1bLVeqXwbWPvhnig41DERawvmDci3vc4JrqYjwBcbSXGt7N8DJxhu",
  "key28": "5XkVNauX6HC1XyXfxZtzz5jWGJ7W2eCVeNLVUnS56JiKGB4atT29Mp6aTrwiC66xsTvCirxLMztiHzmCirnGW263",
  "key29": "5jtVpWVpk5aZSYnQ3N75p7VvgFh3aLXPkrazFj7b4EGMzFXCJcCj6TuRkS3HqoD73cjeTPDaG46YP3aCXH6EkGnw",
  "key30": "54dAk8kmyRPKWC8wJfnSUvSFafU56xKFattmwUmgp4Kwxt6mHiyu4KmwKW3QdaPxsd5S35AU2AcpRTUu4X8BSV3W",
  "key31": "4VFBsDvERfGFuZQp88hsdxvpXH5DWCoLMMx3wfqQa8KpyAMs8ckRM327RHzjonpY4cXCkziqM7csQCGz9ghf4qyd",
  "key32": "2TokogLgYczedRcPdLinxAemRQwZ8zd28oLRcBdut6wAWj4oXWaaAkWXiedoCNcUiWNQ1W27YMANLr27p7NUg6rw",
  "key33": "2cHQzk7ziqFJZDLnDo2v8WcGBX2ruUV5vREEuQbeTuRWx1TgVwMCkWSsyuJ7QLxcigqtqhiV2ey75Sshu8fGXzbW",
  "key34": "3u4CgBoWRze1PrKvhvJ3vJffhAet73d4kbujmB9rZqEueJtXXpY3uihYaG2CYTsCwhLN9L9tKPA28N8VLhoaw9xM"
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
