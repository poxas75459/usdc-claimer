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
    "4cE3PMTQpAUoz1Rj6M88oh6YZ34W6nSBYH33r8JJPP1xPFGjxrwpCc1PfbypV5iM3dqMEFCrBps1jr2oD11XVqUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocPiYavZHT7UgpS5scKrDogwMrERU4LgZ89548o8ecZRErWrF1fcgvQQSLqgVhKiqhJwXuUzxFVTBgFsZ43WuN",
  "key1": "rf7Vey2jSEafear7YSWBLG8JwPdqSi2nhAKhF1AyfWWGhypCTBAxsvGQHxXm2Uacho5P7Jq86KML3JXR8BDFSw5",
  "key2": "2be8qdHVhnXYkeacLTGna7B5ndabNKAasb5k2yVSUgvUYR77dzKCYRTjEVkVSimrhsisJAXmqVK57ZseT1doYyh7",
  "key3": "2bTiZvgRNyXmbfFToG9Bt2TBwCXVBjEjmgtpE16sKitR4PbvzLkeeUirjRKACgncTM2dDWqchXZPoKexaWZTrrUa",
  "key4": "2fv1g5374H71htd3BoPekcFC62fUnMzKsKgxjjFxchDSVV5Hz8FgmRhBF9CPfBbnGUTy9sBxrqx8r8woHmdPK333",
  "key5": "XJMsvhL5MaeionAimoxXs3ZdfjJBeMULT4jUsJCg6TRQPmPfY5Bc3zrugRt7wq9eMketMLCbUeRwqjJKx8263vf",
  "key6": "24hgELdPqerZmuduubrmHHKKdBY8LdGnoi7LStJfw2Wrq39H1HWSJ7h7XeRy6Z3QHrkjvRAPLMaNe1s8KWYkiRMf",
  "key7": "5u64MpQpoJcKzzAWfqGpnMfPwVJinirwYULRsq98cKZGCzrWPF9ZbssUTpc2gY9aBZHwQAs1CNTb4jRvSqU8viaE",
  "key8": "dWRppjQhvLBkYAhdpasuof5tbf6oWYFVsqg6Q9p3ENHaz7NAgyk2gafV5h5fosowvra9wvSNiCgD989ssmnf6Bu",
  "key9": "4XGnenTTAbkYcgywdfndvhJM67cozrAe6AetvbTh3x9r7mR5pdqg95fr6p96ZidCY3WjWG2DQ8pRtc6sCdNyJdhr",
  "key10": "2xrBhcn1KkdvHouein7BuNZFXDMc9QqDsyn37jBG6L3cH1nHuicL92CzgEGJRTZojS1aox7D1Bqi3QCzfhBojZBN",
  "key11": "5VWjTqjuKnp1eER3NvSdbpLo19MQrimZVEtP5T6NpEhKpJGyVJs5C6t7m96NuKh3AnRM73KjrgyRv5wyMWbdvqJT",
  "key12": "2kzbxijC98kWCMbdXmkEeo5CZ4ULLtbRgXfgpGE1h45HzS7w6mMZwioadJhns2h3reFAhBN8dHooYpBY9puFkqS2",
  "key13": "JVa3aQQfZiptYm3SsSC2t4MYGxB4tfPmUGk5PCwh7KiPrZke2HCFX4Rz1yUcp1Gu4YYWG5XZ4nEc72XLHJkm3QH",
  "key14": "MUVZ2WTqf3Kyy8ZT6cUoyxjRpnEBrX6Tn9WQAP8VAKWosQXY11jp17ucc5asSH8T1pGdqtbt82NScpkw3sPgpw6",
  "key15": "5Kwju6fSwTaZyoCkHk4FhgAHqNCVZQbB6BgCtekVan8meSxHJNe5ibmfMjsd5CXopZhAmngikMZK7rTJPQgmSh7E",
  "key16": "4cZySDyTuzATEwcHtXW8Wrv6HzT1TegavuLeVgUqC7HGtEuUy97qbFC1yxtRB7sbxF2sdJMqacPhNhvdUknqNMxi",
  "key17": "42tHQHfNRKNrmHs2nK495vSLgA6i59iNV4D3Pn9V2aMtn1gY5fQLYDy2xnGHMfD7Fy5YvgJWWR14U78qapsDjNyi",
  "key18": "4STtxkdN2MYwY31dK84TmvuCpM37iWJ6DQCe3hqBaqzEboq751LRUcaqCCVWor6wKxVoA1ge3rpbtwjQMxfTpFPw",
  "key19": "3HyMGaUMytaBJ2h2ArjuJMkCbvwNBqckRAj29F8cPtabt3niKD2N4v9N6FHXCDtDyAPKHv5z8oiTgWCGB8Pc6Zac",
  "key20": "5DX4BnwccuAkDkZcxhRwneRXTvKcMJfA3H8EiKA8wn1WeVEDcz2bJBDmVAN5ESjeHSH97MpksUr7QR18jTrKkWsc",
  "key21": "5fmPL7uaWmgRicnRA4b2YoLto5rLQfFiMDcZKRT5GREWWMTWvnhUmHvNTQq6nHgX5JccjTfmm6J2ypyBNSE1yAK2",
  "key22": "42NktMmFVAzkZM6irh9fLJTx1iJKkWdrabxsFAem1AmwBGiyHh9RxfXjj2Rd7QSFvFczHHuB9tVsNKHdfH5HJodU",
  "key23": "2mGaYWBj3mGkKepePXSHm2SpLRz8bRsqz89qfJQYGDRjSuZs3y5JeKcd1AmsBwi9bzBoSuNhXRpj4jZNJKrWHpnm",
  "key24": "C1R8VVUQNufgDcuTguu7dGNKCj31Qx4Q9stuygJHe24iF3MvaHTvbDr1nX16EwBg5J15bNntCPdVCvpsyLek9VE",
  "key25": "27gLczkcPmHUcc4pZrCy99jxcdzm9qdybkJKFpsJvYJckS9cUU9ATmVVEgjqsNSjrs6tRQndyVwUFFjFRfihgEfU",
  "key26": "3tL8KYJ4B5bU4tPzVmqwEG5sUsZdBVkDYJrjRmtFjoEM6TFcN7As8jNzZZtf7LybEC161BqGmrv7viov1cxvXJKg",
  "key27": "5ebDaX4wHwBQWtFXnAgxwjGrvkSzFVtY5B3QnDUH4eRk49TWyTq8gszPzmiG2WvFuMy44XE6T2yhoe67WB8ggwr9",
  "key28": "ET5yAvkwaoZLvp9rGg6EtdRmn29N3AWz11NRyj8fyLF1zCFoEsNRXA7s8cp6dzzhgmdkxHFVvHGamf5e9T9zNTF",
  "key29": "5idy5YA4Jtu52NVBhduTzfVJnvrzF12enpdVNyg5kGSH5MA4WW8sGALREdtDAAFSzJcxNLndjGT7VtikzsJsHpUa",
  "key30": "61kyuvJCKVvQnvRmm4JaF2cDcPtp2Fb95VRfkdVK9Xe174wPgc6rBagiuw2jXZTA5aNE93gjF5KuLePgf2URWLbr",
  "key31": "m5nS9tEYDtPiD6Y6UD6u3XZQ6iMz4jA5exQaRe8H7oTSXXJPuDY7Xu2jLj34qaj7WuT1qSEyD4JJRyREoYD7SgC",
  "key32": "5AVRPzqh4ZpVb4ccDk45DBkYq4ia4g1G6i9S9s9ULz1GFnAHLPe7DcG2MFRoCuXp8WccF41su1iph4BnGT9Txmku",
  "key33": "3vvCe9JCRp9M3Xp2EKsq4pxVGdpNv6zy2PKeHeG8TFPEDATcAtz1VuhqC5A6DNykrEDU8iHmDKr34pYr1Eqq6iAZ",
  "key34": "2vNXQQ1xEH3rY51w9JQKH4CH7XGaK4jbKTCpofmN1owLJ1KX7hZc9TYf3fiAEKGoNAis581Cprf5ZeRDiRbArF8C",
  "key35": "2VVzLzw4XrnUYRWp6Vuzxyw8tMPRqcPES75MvLP1B2QxuWZckGWDmXpXR5hE3vvWmxPJs8NnPs1UxG6rv2VZnw6s",
  "key36": "5GHxbUGfT96maabZEyETgufYyPumwHLqrJdJhqZ13zGjpFQ3W81R99aupabThouo9Sk5Km6AomCM94PT4rDDCava",
  "key37": "7RRYVLfLNrbimyAGbXtu2QZd1yj97yYy45iGkNewhCzn264imRnQKcf9Xe72eNJMqHgySjD9Xi7sY76zEi3SRJK",
  "key38": "2qLP8sRyFwiMurYPZLjLSbpu1huNsBZjXNeGSmSDDze5H5CdCUQMEMpoPB27TPdK6S9vb1ina1uXkwxH33HRDQxr",
  "key39": "3fwssasxu9CXNTnTBfCSBV1bZ7tkxyNaqG9Qe8dTtUHMyyoM4eYhNEKhm1B9ywFCZhXtti2V7fRaMgg41SmHHzRR",
  "key40": "2QWBkhyuPqDf92HGthSeBFeFivmBXuap7x1skxksb6TRLMDYXk4158THLFjWq9dsJrxjw5vptpDns6J2rzYtr2rz",
  "key41": "3ooSnDctQDjr7dAcjD2Uix6JmUZomqPdQQS2N5UqJAfJ4MmMbpSFkPXsFuKxRemqhoS3oL8YvTAVfWWkneYsTPmo",
  "key42": "3wg9jgPUT8YU1rAEB7hW3q29y8E3tryGgEoFKY54k1BfgNtYu2y7jA6xr97MqryeB4rhy5T6zCLFkH8vZaztjjWm"
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
