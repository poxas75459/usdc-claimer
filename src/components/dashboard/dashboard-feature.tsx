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
    "PHoG2DhKBB8YFegJ3gapDLeJG51LFnLe9ikPQme1kkp2ZodYYqsTxLcJ9HYgSvbYXE2DUWDjg8v4kFTzQzxvQw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48MajgBXqKJbcANF8sMPbCq2FmiLbdyAxwixZf1xgqjprpGQGzsSWbuuS16p3ZpVE72M8P5HhTae8PHk3nmpyfm2",
  "key1": "5uEymf3Gd5go3rfrL6e6LeVC8smWnMFtJKVjEFdtismP4iaJBY2sipos8yzNQtjoNZjxqpoByigmJBYXzCuapFst",
  "key2": "PqVor9FnmX56xeLiX8kvJ1rQacKUcxPKBVEf3i4tRVtVYe5KYxnvJe15esfosGaPpkC7LgGa2WtLwjYMEhMaWhL",
  "key3": "2hWfSxuA5gmXzD918FsvbyPe7HBPNsPqyUa3nXMBPG9uh9Kfq3yxEZnULY6vXKJC8KehGAKsMAnJqdXeWYguzpp6",
  "key4": "3mTPD8Tz9GCkfTh7PryPf3dTszuBwaut7NCgH2m1wDG91FiM3sz8M9Zf1426936pCEvpVXQs1wgnEqfNdVh8MvFC",
  "key5": "5uAcanWAT2PpR6Ya22MtYYGBv8zJ66dnDz74fqHSzUW6giZFcjYvKaAasKqCutrmvyY8vGbPmXPFKBxVweNntcbK",
  "key6": "5b5SNpjHduwGBXJrfpThw6i2ruAtLvD1Mw9mJfLY7xhmMXWgPn1vZwefw5RoGYx4omzib38ub51rnGcFoHiJ1mfy",
  "key7": "4UqrHBLmEPwySe55c8NWLjwppTUhYqzKJGQHm8TS1bBnNejQcaxHcXtABaU4McrAvbmhgFGMXEBE6gk4mwULthEi",
  "key8": "28oUSDoFRKVqZoPY8kqt3C4fxAorWwBX81w3rWP16qe5z5LCdTK5qqd3mjmJUw8R6D3xhDyLgrqe95XJUNtnGPuN",
  "key9": "4WXyMxVBwHgH1tGBAuQb7H4pmNPBjNYrSGidDUftHmYQw1iWdhyy4jcRzVsUn45DA1G5XtBC57qPcec2K13udAX6",
  "key10": "5m71625sHPYs1D2sXXM2S4N9YkCCXvXCGVwdvGVGcMy8bXb4F5GTtWgpSVrrkErP3RkYsc64yPB4J21UHT1JVYP2",
  "key11": "3kEXLedEzrBjnKKSfTusu41TxaYxZ1bnrvkMF7CJappGzmGv3LCimbWk4fMXY58PTbRoMjDa8VzapmubnnT7V6xs",
  "key12": "21oKRraAenyRdmtAmCTkuEqF6ajriLqtvEa98XJcP8FE5TGyGnh82xqwipV8aw1gHdJNer4bhr2avHTUgoFmSntk",
  "key13": "GLQPKA66KJPb2B1SfHTeyGsB449xcS3DjSPq39dsnqE4pGex4YzmXz372hzqfGkcP32FsDHBQt38kH4DNBKucEY",
  "key14": "4idLUUnMBoeEy5epoSj1Hfd1rb7oEMaUqoBHhjXxaB2C6HXrRRF3RDsuts8mAWu62v3xXCyQQqLjvsoYrAE24fhF",
  "key15": "4MDJGUgMoSm47NBZN9W2TBTvdbXZKt3rfz94RWQ9KD8L82yMZ1gWbtWevmYPXuWHXZmyzYPtM3HygTC5JVfr38F3",
  "key16": "2RVdtuitKJKbmZ68G3AtcpdQB1jmGtLjKrCNCCXfc4VBTuprVwC3C5nPJpKY4qmwngASQFY32VKURA9hpGAJA1b5",
  "key17": "3B7gG9b9qDMwyyu7fsnMEVtAq26R3pq7MRhAnGUMAxCp1yM58z8SLZjqPu9fYEy3Z4Hef1YgVtG2ri23PoPKxsY5",
  "key18": "TFszfN2DMjXbQjiHHkSNvpXbopWRSf3RiMb4i7yr85d8yZKshTqnP37cD3pJD9Bnf8RYjvEaCDeDWR4M4sF2xFF",
  "key19": "2Qm1EhpuCBfTPcuyT1wZsj2kNwLUtugfnsVGwssMykFgJhK1pTAxCVqhsSk9bhfMdeCfJTYqujyN8MzCNkwVLdSc",
  "key20": "2D9gMeVzuD5FWksPwKFQ2x1UoXF2jEk3p5m72B6hgt8A8TzHv6XmcRdFNiEoBFhM8baQe8n5YPa2VYT6tB3xRUFe",
  "key21": "2KQhM3Qh15XHFQPXhsteysmyJDDv48zyfErwoTnm9oykjCLhx625ABkuTkch8GSCbQd1YhMgHCqxwmDUumuFUueZ",
  "key22": "2eNPA4YDqcy1xdQh1GtguCpSSpLg9aicxNAbTn28MaPjEqsWWrvjagyQsVAnn7pGKqBUirmjp6XJRToJzPHj6TwZ",
  "key23": "39RxbNy1VkoG81Qmx2dPxUAkCrSskiv1wcD9SsQhhHLrjq2dzDJnLmqUzWNSQszUTGogP9cnqgx7r6Mo5JciZiht",
  "key24": "3eQADawuisJctmndEH27xjGCUCnqZBrmeTvbcRxmexzJqDyEqgyi1q8YGfKXCgx3SNbrZf5rMGCKfkSLpKgRmY14",
  "key25": "5PAc9N3WBwkZ1CyKRqPFjuXpPM763jsH3oBuVmM8dnxGXFCcSgKfvwWM6eorS27i8xjzYAfceR49TqoW3ADs3XWr",
  "key26": "34UttJriU3uZbZGXM7i9cSb8zo6Yjk4rJtcCrnaUEXqhq4vTmSFVAVYhRcJoELEj41AXAwUWFySmDC5CoJfZNs8i",
  "key27": "2j75J3jLFBUBMTGDpjimwXX9byEXffsKpvuWK8QEeXoiJZjfHJaQZqVWnX6gV1QdJofXjKweciifwgL6BRU4zh9L",
  "key28": "EiLPSEsdkRtcQRzRTQHfJSMZtst3VJfK5z9Y7DickoJam4xCsdirf1g76T673Vp56YF1oqLEn4z4omZYRptasSb",
  "key29": "4ZzeC3emMSBpsZEmXYVa6fgNzJGvqQoYHqzQE152xgXTwBwxsp3MUxdPchFbggG19cpGejb57fxBaCJPVjGmAJkY",
  "key30": "4kUDTuFdFhvBeisCE8HgNfFyUupgmdNeBsetqZq66rypGZ2LSsrGbc8R7bWRJgJ8LnZQG9M9a5o5cUbVV525DwX4"
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
