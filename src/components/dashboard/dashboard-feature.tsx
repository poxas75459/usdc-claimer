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
    "5TBNWUfkcoHw4YqaV484aDw8FqCcxHc7ozCEExoJCtzMZU2hNneRxqKBM3zoPg9iGm2cdF5XH4tDQjKUZohzhKEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMMNUScMMHnNKVf5ADD9KejMFC1ai5REVcxAPGCwayVtmA4gd1BipPpnMQhu8KvjJpQ7hGXhwAWYasqsSMC7TUJ",
  "key1": "3vicqbCw4tubc4N6WR2Kd7yd3ypBZueJuGkB9gJYm3Ycf8cog3aK7AMuBCSehF6RFV87RdRP5dhco12Gm1t33xN",
  "key2": "dP37HWbhx1QHzXqbMp35myR24ShP9brynKT5UQhjVqPSiyUmxgRhMoqnSCMrdK2KoENvGsHN9tYdMkjGMKUCi1g",
  "key3": "5GNSkvSKaJtYH7oZp9CH24f6xcNN76Ljov5YYnzQCYG8TYaKEu6pvNqJbJa24nmKApbRHJ5VrPMwGJjyxwAvitbG",
  "key4": "GUPRTy8Nu23vbC6uBTSu95EWdc4H3e4qXWQUZ7DNScYyW4zYqTKGr4tuzAnLh5YTLrbC3mdyxvrRbTWkNYoBu2y",
  "key5": "47w95fojkjx39HXqb9HsYuEBnwzZnywQdudGgcm921xsNZGoWcNeqTN5bTivgWDTLaZV1Qrt16dkEtyTaPBZ5mMH",
  "key6": "65KHP7vyKiHJr4YaAchBb8ysLP1HWRxY8hCC1DTRffKSYvnVqUUhVEyhn83XLP28YBzSMmE2M71txh6Aqezy1XDs",
  "key7": "4H417vgGuJSvkHuYx7dFMin54pxxRDyuGtMAqkv4Ei49wGJBnU3ktW5J7DLZJtmjaKbTDhSZvDfTNazbc4bJidCd",
  "key8": "cxdrzbYcmSvnCCFFTiMr1sa8QYuLhZC1qDF3NFRB83tCKExwYuBsGr2fJWbWpDu3MbfD3mAWc6GYtfpMLdM1zhf",
  "key9": "eJT57oe3aCZSSJYfTAeEmbeRBYS58HKXj9Cj2qLhQ1BaAVRNLGZR2SjS9kzCGZHHswGKncytC5m63CWmBFmoCJw",
  "key10": "3L3vFoWRAv16eD6iFQAefLAGsxdjnpWCXHfXSjbZ7JpLy9pgLAwGK3DESnJKCVeFKBiuF4jwkkFnjGnwrsn4vB8K",
  "key11": "2tjow5i7KNkyA8CNs2KQpsPbLJkfoCyPD44jjrsuGzDiJ3y6Ep14u9agsdwuZDMXJQCwFQ3bwSgWe93Sam1NKijo",
  "key12": "2AHtyprADzUHTef29TG71vyPQBH7GcqHHiKnhCKpTnprU9cLJoqF9nQpoD8rAvbWoyZUuuJQuCsy5zX9os3EDw2S",
  "key13": "4Mq1nwgNshv8L3vYwq6WMTywSUdzfhhPPix7ihZVpvVHRTYWKxWrVPVRLzTbEzKdthUBjzgsfwi8iFwvNy6BGQiT",
  "key14": "3fpjKW4C6viZEwM9eN5W1JQVfaF5QRwK1xhcjfrguYML2EoMMmss7mH5LrZgwASeMuXy23TS64Cj7LynQYT8Zqno",
  "key15": "2P9GSF6HuYb1wYhCjRARWZk8Tx5nAW7pYbwgBhYF3Nhi5fww3EuC2LdaKHTcARgNmUgCB12dWirJhLtqUUFnTG2",
  "key16": "3pDT4pXgMHjMzQKXTC1QsDNFQcP5f1jqTHDgNP1aQhJoHVsixAs2RBhKhCg8Bv8AD3p3MUEhbuC3FTMExGa6mvAb",
  "key17": "47ST8sm9VVqkGvYQQwgSXVbNNCCjg4GUPGBfEvrKe7Fzsss1rZ7ppcJ1w1GK9yrvk1daEk4GkSymJnxmUorGwNBz",
  "key18": "5TH7Es3q7xYX6DqcoeqFVSJyhji4dCXxVvEEkW3hvaMR2woTo4w1ATLip6kJXpDYebBMbp62ZJEyBAfcof79bJ5z",
  "key19": "5qKYAeECWyu3zi7vEJfcvFvvPMopP7nagHWgCzXJkXkEEjAcbwVa9oxarPhbScUUKjGJb3WG92qNWY9JZzy1wgoj",
  "key20": "2HzKRYRRi1qVfYzzAS6TFZwSBbDeEPdYP9EvDQJi6zdF7xJi6W9PzyzmDzzN9YLoVefP5vhYL3TG9fojw9Y5ZuvK",
  "key21": "4f8cbLBwA8R9ekSV4yjkJC4YBnZAUk4CVpgzKnfrpgqZKgH94gZDfKTcWvHWn9SUb8HtNPkAJ627f6TU5eYxC19i",
  "key22": "32UeUN5Foo3pCtmkkhbtZjtT6uZEQmguUW4L35ETyPSQSX25UHxuPHGqkuWWdzsoeqAy4CWdQXSLnsZcasUVQ5CM",
  "key23": "2FRuSr49EsRCRaJKWchytY8bGhcurJQbHAsaQvAzDExJDH9sWXtDNPu71CX7S9Jbwae9vuuJ635hZktT9UtmAme",
  "key24": "3W7bHGJBqmxZ8f6wFMTNhBZ7BWZeh472Zb4mVaSsXi2BZwcoDDsJ5NzwzD6167kgCpwZR5o8JJkeQKJECyC3MqiG",
  "key25": "5wE492cQSwRunMeBThY5EaSEMxQQiK5MxL5yHSZrigZi8CyfRZcZ94dCr7vPjqJHAvsig9aJJG2gN8tsVD52Ta8G",
  "key26": "4tiB6wnWb478PE7vW1yWgWt9H258Z2J8RoeF38rhW1CtiTQfu9T59cFhe5gqHqzbjQ7D3iQ8PEA4xCybGaSW7Y8Z",
  "key27": "ctPxQ8D3u9gy2a5X9THTa3PyBin1uEGmq2uyN192HN9g9mY3QhpKu8Ae516Z99d3xdeahZtswarC1HzXnaPprPg",
  "key28": "4sw214quUisknq6WxZg1sUFT7oEzNJ3ASQbRWycHd5XCnczYMpmTBr3jSUK5uQcfmeaRxekeLVbMz25DVQTNLXgc",
  "key29": "5FR7C5zxFWmd2jZ8c9HC8ZuxHQbeDmQCsR2JDp9sXCEHoTAoAGUQGv4GWZJqvj82ji8GTifadLfATmuRSi1mxq6j",
  "key30": "t1bxj2KTi2yFFA3hCJZW2dq9jBBbQ1CptUxZw5RHbwtEGa885mdjU3ENbbNR7Jm1CfViiuztV6WvEvpBZdNJto7",
  "key31": "4poky49vd3kYnSTRvuru1a7hHTJQF75K6xUWJByxMgyz8iEwCn4YrhV2jv2MwoWR3jAgr8EhzcrWXSrzLhLy7JNb",
  "key32": "36iUZNMQisq4B4ZB3ugwqLqe6q9kcNhS85KP5jMz486ucD9VWc5vfQg69aQMdgCQMPADPDg3EHxgt2RAwxUhn3pg",
  "key33": "2Ctkoit8ywPWNzWq6cBCdr8rBGKcRvaPpUnrdiS2uHtnSrA6WLBErvji9EbDAkoh3VDEHPWeAZiS3US4X5TDXbkN",
  "key34": "2rqSkNzXAmq5B7iAvq3d8oNmsnwrbZ8MELYh2TtenfqYGBWDhBmD2iNnq8LBKoPFFyWNNEpPmqMWRwoRrgQDSgvt",
  "key35": "61qo1nTpT6VrubQE84jxAHTW6KpLE5iDh4XkLCUFxNfYaN29BJp6wtggMCtd57HWY7KEGMEhGSLJbwCG6J8GCyJ5",
  "key36": "2S9HSyk5cGKeMfjK4rm1LmVG3KprMAEHVgCF5dsair4ANVhmAN33z9eQRGU1jwnKffyGGF3xC7nsirtmPawujB5b",
  "key37": "3CuhAP3sBpzNgMZ1NpJUYrMvu5TiZyquFQNYSkNdgCT2ig7zVxB2j7LM8279n6jcoKzC6ZHDTAZNS4ZoFANwKwN8",
  "key38": "29YNujgpNrUbn95Lf6uE3YyLUfnp444LqT9AkPwvNCyhqbzHqtSj5G4DbVrt33FqXFfWx2tNS91Fti2Hc9fNuPpv",
  "key39": "3P9T3bWUqHsnyrmTeNX5SnqqpPgzQDjZUHHzF7VBtM5JUxcy11QC4M13XQdfGozUkKDmfYH57Jwd1BTToLZZxMDc",
  "key40": "ckSLtkwiiNZwFJ9jZKVxqpYnqgnPdDV4xpMj8tQWbH1PpmB1BbrEVfvQcWheFeoGhJSrhhq78nAMtVn1X74hG1G",
  "key41": "5dSSJCXk8gt8c5vf2UruoimygzRC9KmJhtqw22vLZHggy2f5qen4G9HBFtCuC99Z6YmYxfPRhTmNPzUtDfQKdRAt",
  "key42": "4uznYM7m63px38k3Sv27n7XhT4qLQHVXeaegguiAKfgbwzMnHDDsPWzWi644p9NZpADwt33TRxNnFhRafR7BdPCA",
  "key43": "44UfF2sf5w2oukhjEw9fnKFSRuBfnMqkwad2QJzNgvBN8dVc2SbfNo4pf8mcSAj9VtXEv1ysH9p5rbpbtbfovo1T",
  "key44": "2ucC7FidQEoRgxuBXGeryqRsfXuvD3RiJL8rKpwNe44hNijQUctuV7GE3wkQcYoGAR4rB8wfAYLTKwRPX9Fqk8Fe",
  "key45": "3Yk1HdRBkVRcCpQfuivUyw5Cq6dcyGVetV5GQ1UFuVVcgL1fdMEoyVDRxw9VtLLge6baQyXLBDiorjHEjQDieVR5",
  "key46": "41GipPeCp6P1iC1CgbL5rgRiusiLpwDS72qnrzQYaW63VwKXSoHqgffQtJZm9in9qyRFeKjHhP5MkQs7fSK5ecjC",
  "key47": "4qjWXzZQsU8jXmEwnLBwyZvvP8gDYpXht7Qt1McbwxjK1UB511CkTjjVqq2ST7rRJHcJHhcs2iwriMmkLj2UwWe2",
  "key48": "3rMq9UyiXfV9WbHUqZ44C91jczFLY4YnryNTG894nW85nkcwzc5pPP5SXgY6qFxQhagBXj6S8vWkfK11fWgA6MCA",
  "key49": "4zciJxBAfdJje6TnLnKPF5UC5G5tSVeEUK6E4K49VWcwy6MFWEuWYQVMP1xJ2gWhkWTGaif1tNeEE5ontxogkJS1"
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
