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
    "9QGeWm2kMtEGW8WtBiHJwB4qaYFmWY65kDpogbBxNJXScJegTZgE3wyNGCEK39pFuMqj2guV2ALXEE5aWf7hdaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qUdwFCj7dXEdNc8tK8iwFu2LpPmF1Cb1QstP7znoAU3DKnnnRPxzveTsrX4BBkcPyi7hAxZRxc6BsXre8b5MU5M",
  "key1": "3ihTDBCNajnRHvJfg8Cj6ejizsgRYW5JAHsKmtMR3UiSQ8zm8DXzHzLeHKGgNRVec5Tp9KeHE4V6wQ3brAoD2AhG",
  "key2": "JmnjgnTEwX5KSg2sXWTJzHKny94PGwyLvPTRRtzexrjowXsKsiNr7x6tGdzsqtJctshfLQTobT7ZoejvDSXjRBs",
  "key3": "2BW57PZ8Nr7XfX1EfjWGv1s7R9jZRS3WuhuoJoz6y4ju6wAkv3Rv3jzmkEBZAvbFXQTNgPUSPRMzbgsBq2tm9gvc",
  "key4": "UJfzbwDBHiu3eB6iBzg7wPUK1UykD1pcUZYZWXLVhiZmm6ctc5MhYcS1DvTKzYSWuP88nKM28VsZD5eVNxjDjjs",
  "key5": "47mn9H7LSA4hbmNhbv7pTNyLxA95usmnStnJG9UAw12zjtCTzeNKzaE8vkb18G46GG5jbd1SU1Njz2V8NrtPVNfm",
  "key6": "p4BmMgmgoZQ3TCGbqfvF1eX8QHo4iWHh2cLEKiPTj7Ez3AeGDPqPhgYcaTURGgeLSV48YApN1KAUXJtE66nPANu",
  "key7": "4MABqKJp5NmAr7s24ca1zZDS4eKWLbNZFjXthyUUa15nqbYn7y3CKUuiYaEW6ZeWAk9rEGAz6cxfkptgc7wsxv3X",
  "key8": "5Ctpwcr14excGwaLdbTu5dhbqwKTXn9rhh1W6xVdf2cvYCpDrsS1QmSKFvFPbQLF8arB1AZqZYLP6tLyG3CCZ439",
  "key9": "3iY37XWNaeMFqXv8se8hWJcAKfWqYx5dCkqvmC7VRYS4d7ZAjAZpxiTQPuNF7fKFiQCsfQ2cxMMmdMTYPzYBrsMK",
  "key10": "WMwBueSa8prkwFiNTcNssNkozyiue3bSDr7t4PacPri2zFPjf2vTwdXjM8VRNPYQXPkR1RFfftRDJREiePFpvrC",
  "key11": "2zkZuR9GYYn7mLHmKQSjvWwGh2jbKAA8gv1KAfEEtDVLnDZCJgkZ36WkH7e41J1HN1vPYSkE8G4nTDKFUeZb7RgY",
  "key12": "5ZaPyLnaMg94d63MfVGpEESWhyabJumBpvmSS2LbmWnB5iJCgqPFhjnbq5bAuoCyKhji2LVYkSaUU81TcaGjYuuT",
  "key13": "5UggXZQpntgxmrf1ao96Y1qGUC3HmP4BWM81bVtfUcPWAGHomouf1zPyiMWeL5YUUdraDMSz5JMbfN1yHGsya2C1",
  "key14": "5ss5HhetBNVsZicDDqL5VNiZDLgLJ1dtiS5yFuUw7dr2Pq3vrFDjgKm1dzyTL1v4U2MZgHsppJp4mH9UtZDtHEkC",
  "key15": "44iFoRNPeVcvBkPdTysuesH4sFMh7ntDfN3F3y2dSnzApqKXMAm8UHcnN3ii1YbRSPZoATXyqteRamy2XLxvepq2",
  "key16": "3kpRvA6wyBvuRrL42tm8eMpRg2uJWJAVLXZsZJWQ1BttSB7yK1WWEkUrQxPe6aQLoHvJPXwrLrTTQ8wq2vCUMAMH",
  "key17": "4mkTzy6ihJJuYikvReBeUnB5uqxwHZvMVcdjNXuhj26yLkzdph36wF9Z83fdcZLKoFrtHwtcwW6tnAD4MU8Qm2dh",
  "key18": "XiJB1QPJhMXHLHQ6LWx7u1Zs22afkUA496QTnE92LiCNJYo7Gzs5bxAPQHynqcXSMKWEZhYiZ73fw5mFWGFWGrW",
  "key19": "6bzJxqSivxvAAMEy3D5v1aWJE1RUq6SadDEFzV2PDy3CW52LaGH5eyMb5S2ENDTCNkm9sacgQgnvWi9nXNM6FEk",
  "key20": "s4adKdfEHPuNDqxDHcTTKZJ6PkyYRW9ikrSy7zmS12hAaAS3fgNSZDVd6TjsMZTNKSNiuAEEAsz1wsJ4LKvmEQt",
  "key21": "e7kqqUYuczSThcQy7d2zoChjeb9tGcBdaSUxoNg4ETZHMjbNqpm3UPjjRoXvibFapcRzoBRrmQ1oqSw5TdbvKqN",
  "key22": "2mdWNRBsCqVnKDQ4RPQSEWZcDjPDD2RT2r7taDn2Qe35MMYek1RfLGExS3mjFpHWRSpWNdwmtuKuCwN1PNbdUcxk",
  "key23": "LJeddWXkczufNFex1G2QZxxNqpgU45EUJb6FvCXa2EiBUE4oSdEFJzTu39EemMYwekqJ9XwwnwvtJSzxQ6pxogu",
  "key24": "5Q1Epd1eJWRNr7K3b5R4PMaVH3Lq7CBAFQRh7rS7gBSwVawdK2xCGQQVbiYsAZQSWzU51RmFPz2GNTSCjBDPY9aR",
  "key25": "2fc49ouWG15p7PoG8qW2AwXraEvf1mMQ1H3b7b8HKuUw4PB2zcEoJd2ETHzFA86i8QxRGAFKoqviMm9TZyEzqLiU",
  "key26": "5Zkf3dQhMV9B1MyszU54dpj5iMGaeQee8MDdwv8KeSXybT6ZaM97zMmAzYGeJTnJ5YCMnnzKTWGQNoqya8ZvpZGv",
  "key27": "1QdGH3Wg5qhddKZ6bMhguUjRaTjZ3J8xXx91qAu8Dfg1NezLR3GDRzWJRkXdvKus7f9Adon8WFCHhUzeLM9wkCX",
  "key28": "5LvyyYNsyEfHQgu87d32jMU9ce4dim6ufek9tAtnshJ4spR66L9tncwwVNX2JnUJDNNzih1qqsPDebXbT9U8WmgG",
  "key29": "3tWdRYZF7usf1XnuebCuoEMxBhKKGBY3j9T4oXr2uwdGSByLRuYNftNzC3z4uZjf2X6mPXxKB4t2dsAJEXRkVBWx",
  "key30": "TqyodnJ55Cr6Y9j3B7uTossJkSRcSwRni6DQkiveibyaTPcBTy5UBixwi6VEnjPmKGDYfFQB7edtYmnKSm9hqeW",
  "key31": "5eRT4cDu11ysi9HVssaoTh7fJ9cWKztQqjEb8UBGFC1jaDhWqpUFrTrXUHK6hea8BezX1TgGDMXUQmh6PS2e5sZu",
  "key32": "QnWT2c6HLsSQBXmxaod1f1x5h9dwF7oYTTzmZ5f3fGaKUQ7ZHCjGfXbYRyczZ9Gm4qFXh6Vbvq1ah8PVkY4enpk",
  "key33": "QvSv4UwuCPdr513mHAtbvQDAfEQhsgpDu62kAS2ZNpE9pJwBDDWmPexgDmiCj4A45i4ene541xcTGLbjneRwEij",
  "key34": "5GtUuyTFFg4aLNZ9KuX4agv6vTAVkkkPS1sD55y4SbnnFqyEWivb5zvHufDL87QS7MjYdSHM4WNjDnjSUQGMYARL"
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
