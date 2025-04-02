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
    "635ykoHYMS14tromGcFwF529Keq5wjmBipPKT7BEF5BUgBMueHrrDVScxM6NyfbZDtZFj9FqaVfSxnnmv6p6Y173"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tuKn88hXVzjnqM4Q3awhhkVHs3yhj4hC7Nt4Wy9knB7vWKJWgZgWjYbVW2cWo3cTsChLRe7wwg9XG3RaA6HqKQ2",
  "key1": "5tuWzWifeKoQxauRwF9uZpLFVH9Qbz32dNGrL7He1PvDy8LLKSPgMG9cGUUMcd2iPopLLB2RMnsKRxCkvwzDwJfW",
  "key2": "4BGh55skpkkWQaJh7kiXMDMEiHT3UGS7Y2x31CL9NBZv7JgJrV15kMYsivF3d6HGesHgnUfdvtoDKTejwhgfFW5U",
  "key3": "4AHfDGzop4SQarduBUmDqH9XJVMB5Q844qxDs4MPdBtmHzQJi4giYsYoukNf6ayg9UBzJRZEbAhP1rb5cD3VKiNK",
  "key4": "syvaAWiXiPEL5wyiC1Sh8HbYZcQAdFXHczHQcaJTdG25hCcUV2cX4bEaU5FrqCSzdK789UiT5cgV1HLyGA5mmwA",
  "key5": "5CBz3z1xsGy8bEXdi5D7gRMB12rMhxFUkhHmKQGygcdFoD6arbnPrt3ds5rP5yqjdteczZt44dDNBxgsdFDPEhJH",
  "key6": "4GxJ4MWQNgTckzkxvKnSiSjeCkyh1rFoeVb86GrBMxKRbUPQea2NnFsEm3PX3H8KPjLm1SiGE5mLPuKLo9D8YcgM",
  "key7": "u9UEmne7Njh1JXYeNJvbSfZbdx4b8E7252P9Tt8yvKnU9ZRrY2fLwZBDFYzwEbAhuQTh9av99aweAbTUium72ZG",
  "key8": "33kD8Dz4DFxHJ6DaT5gbXfQXu2nwsPN1EGua5sCKmjqeDUj6ymbCMjsa3TUsbAtT34G2oBrBRd1eza5Wb84UwTU6",
  "key9": "2fYWWhhoFuJyyApS63EYqWR7qp3VVTvvGizsyKrWzrzVB1hRKBbLZscREK3kTss36k15K2CXddV6kxZMopNrpmVF",
  "key10": "43M4zArQToAjw4UtMmT8j5whJ1cpe15AfFrKbfNrKUa9GE92f1jKtnKvCCwBi93ChR1zeKHonXYRWoRLjvPshoRn",
  "key11": "2jQrKFyvqM5SDkhLjKRRmGEyevTtZjNwAX9Ejb59r6zXWxs8A79tfTbvYtsXuGFXWqfqgw7TJ1gDwh29rKsRsHBV",
  "key12": "4PuKVZ9VEctsnkSJAbFs7D3C3qNgUhG3CKoMfbYpz67yRX9EaiwK1kxjNBabvGMqA4yn9RxCWg2K1HqPfcbEMpr5",
  "key13": "Xa3L7WDehXEMVC3vCfrUbXL4oJGitP2z4bxDmeLi3jtCaSZ9BrXP86bL9RMHNGaQ7woUtP4He8CTmVixAei5uAu",
  "key14": "5e8L7Xx1AszUQ6pirii2e85tFM99yTvJ6SGM9FHDU24RBfBVqLfiQVpdqw6G6jjNt7FTuxKWBTGkFkxAJ5x8hQvQ",
  "key15": "3DS5uU5Fn7e4GCrawLgRAkdJ39aPVMtUB34GaQF3V73HLxcXQyG25WutSvyF7iohb9esAsEnM6FuCW5zvZNvd3Bq",
  "key16": "4g5vrXgrnjcbxvnVd74CVigAcHHGm27tjNh8GjP8cdMMwy1RFUV8dgpHMJrtnk1KRyAS7MXjJZj3HNx5ZyGuLuDW",
  "key17": "2CnZy1GGuMccqXHk6V6e5yPi7mT8YNsZw1QavazcS9wbSFsTTvmo6X95evWNzgGrbnkrcjQG1DQaUAbUXaTjtXmE",
  "key18": "3JVG3JFtAaBDUhd3AQcrXMwm3uzkRegHhkHnATGs8Hhg9xtVpxasS2aEjZhqSFKC1pTySS5r7kpxB6mesAw6YA3i",
  "key19": "2Yf2Z4WuKTTdkwyB2bbqBn4aUgFDCBg2Y4e6fFZ1NuybvfG9gwrwqgBTPGCu5H4PuJmQQhZyMNMDsE4kFZEYzf3w",
  "key20": "38s5honXTt8UihbgWVRVeAXwrjJ8WZkDaHsnzt5bBWC2bptRPu3vFAr3AjuiRPV1fknKZRt5N2eYoSpZ2PYiXea9",
  "key21": "4yS99Y2meDhryTLMNKpfU15pdcQDHmsEc8scNQyTEAnEVwWe9m1FpZntg7k1GKkNG2L445uctPYiXN6NSU4GQzb6",
  "key22": "3c1ugjCvFkEntApPwH8Q21zXqbGQpQFN44MwshqFFie4cXFY7xd7vwKxRfCvVb9Ab3tAavDuiWMZMV32uQnyPwQN",
  "key23": "64RU3QNhnzbZ2GTq39YKu2Fx73PTRqSjee4dTQCtsFezorL4AWsUbVzzSJ7gorpsvyDmvpbEJQ3s9hpYMULnc997",
  "key24": "wobaotnCCaST9kLzyfmxrRNJWbNeoTdPUW1u2jNCgucUaeXkLtD9DwF21qdD3GoRDQqtcnUV1XGprzrEHgSUhUX",
  "key25": "3poHmSXGHdREYyNEmQTP9VKumMPK3FAveE1bi2NY4bJGxUriEdVMegeQxgjhZMP7NVZ7y4k2CGQd3Z2hpeNLKh87",
  "key26": "2RhmbMKALj1fTobAQmLRVnewwMqX5rcezSDQrAN3QK1W9yX3qNVixPNDVpi51Q2awv7ReFuTzH8ziraDyvSNkkkj",
  "key27": "3whPQ6LjhmUZvQJGUvtGs9KQ4fBYn372dMYCzzafNZUgADxHE8X7Kt58h17dVKwFp9vdqCu2ejpivSkdPoKb6Dno",
  "key28": "3MMiiYRaPLX8qR2BjVQUd9wrsXQWfok9DnRdTpshLGGU7jKwfQ4RNQT2ve9HhRVCywz2h4NzD59bAFxXvdx3FGxm",
  "key29": "5NJb2ooJ5wxzQbCxU7BQSv5BHWUQaoHFc7e18bQWJBzeNErGabav86G9oT6RZzRgjqAivnsHyQpvjx2XQHwvuzcX",
  "key30": "4F89Gt97JcHNjCtX8eniGJyDK44SzVXvqoDG1RsiAYknDVH7Gk9aVCqLCwMyeVS6zAKav39zhGUuvxUHNCTZPRXC",
  "key31": "4GG1EjkrNeG2Hc8MmNv9mvZi2qTYkcBfdsQThXVgbs7cngXBgEquHsvTaqWnuPn425M397XJ7G3ZsqHvkd9LAR2Z",
  "key32": "8PWggeVEtmJCD3dPFgsMGrKvmZdQD2TZBzJALqKegqqQBSZ35njxEg3ysQPjJooib43Y1EkSst2tykuVeD38RRf",
  "key33": "4UrP9hvWJJ2BL8Z8VkLNPEJRhv2KubAiYHpTSt9wN5SakrA7wSbwCcRBEJ7VzMsBx7mb2JcjknEFnQBhL8po1dU3",
  "key34": "5VHRL94nhRHkbtj4ZZE3cPTBpVo9WwqsZPeJ2hERTBqgf7nmbpmYJUBhE8tcvge4qenJM88NbXjfBFzP3vgKA6CM",
  "key35": "2JBC2Qrh77hvPfqrcj6essMhoXHCFnu7a4jNNFTQXs5pPqDAMHayjGXYbVApgFk7JqzsSYMPiRWx7LFNQ3axzciB",
  "key36": "3XVQjbEpynoXAguivkfb1tMkmxpVasZZv4Ss6dUuLvi5VArp7ebiie2fu17FHC94kfnXBfyLtN53h2kGg4p9Bjxt",
  "key37": "WBAyRbNQPDDZumDH816Tuh7nwjirdEBPWuGaVtTDJwiFRXsZx1xbaRpRjKgvKNneFrkCd7kAXbgwFaGZQi9iFWN",
  "key38": "56zqc7VTW9s3y6fFwMW8eFKBf4cErrs7v9UrLV4zKUjwyc1aEw66GwgNeWXFBybvzWrrVHZ2Dv3wJXE9wiYoLivg",
  "key39": "5SeNJ4YuBaNFF3yjHKSR4KVXB7kwqogUAm3oWtabpTEnFj8w1uqNLjF5YCSZyVrxuUywPWUibzPRdG7igyEuYcwh",
  "key40": "5oushhFY8rTo3gUvpoKB2LEhZTURpTZbjbar5gGQEqMk2LHAXQxvv4vU125fdiPczaXw3G2nsGLrW3Z9GrEcjoMx",
  "key41": "3UXEJ8PCGUAbTFH1H55muhBsQezVbLMWYXq2ooQ8MtaGBYEhLzGBhYdwrZmchfiakfBNmeWK9WiE52GZEZyzGif6",
  "key42": "V47x6VVg8nrrEygNirA4wLY7VkPwxbKboTEW9SR1TUzBPbZbM7MSnZbexdaNoTz4ShmaVt2A1aZVcvahWnFQTmN",
  "key43": "5GCGx3Wb6C4YECXPj3Pv4hV2aeG9P2miB1EVBoesxfMr7Y69nyRsFk6ue8pGNBdUCciDR14oXNtjwZoMT3NdhRsR",
  "key44": "4CHQ12A5xV8Y8jHbCnkfTc3Veey45GbKG5bmw7uN3pBRuK4CC7wgc9TAej3uD8YNEFL4MSbXbymQ4hCgwU1mWJiJ",
  "key45": "41V2x7w226wjM7KLRFgiA3EJVXanedxjFDEeeHg2ngXP5MnMFxVa8AvYZun2vXubCrdzjTiV61gA5kqExscFStp2",
  "key46": "5p9QGhmNnchcA6qf6uAXiUrFdgmzzBrVF9Duo2K8j5TLZZmgyPVqrFwYpJDCewn1H51bosErWWbC1RvK4dNNrTML",
  "key47": "2TR2gCmExkWcb1i1ctqeEExgpPvvuXYsN7UaSBbJgqwJfkCR1jLuwV3b4gsgYygg9wT8r2maQMMQVevbKCTrm7H"
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
