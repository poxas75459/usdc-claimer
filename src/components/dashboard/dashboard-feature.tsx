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
    "oxiugHjPqP6dDyPz5aJd2hXdoxNzEkCTeX2uzbJHjk9urbfp1fR9BvNw5j8QwSnSK98CpdYaECxWnXnzxbH7gin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mSH1Mw7eZ3iL466Pb4V5ifj1Fwc2KKB3pcdiYzaP8rnAjPG5eBjUXRLRkbYEZqeuRTha5FYWVgxaA1nPgncrYz8",
  "key1": "5DettKHxJKhYhZoqHfUQ1ej1Tv2WBJwXHqAviaJK6PF7mcCkUnyKHAg1xqDrDJLzL124aaqqoL2UV2YhimajRi6v",
  "key2": "ubJJpPu9cgvDVjfMYJqdiVAGabiCvsFHD3bFZN9VMGKiPyYNE1Q8v9SoaaWHi3PSYQux7dN5yvpXSJiChWLbAtQ",
  "key3": "3XJspXbEEuiigWUK5CRP4ftXf3peCSyV3JRRXiSmnpfmyVG2hxLzHMyVc1Fw7cTTvY27WY92z5EgccBYQE9uZa7T",
  "key4": "4zE3wB9e2DMqHgMVFwksQxc7SDtw1GhkvpDJu8q5UFk9o7nvKfaN7z9iu77wmJBa71R7LmothC3S7GAToEq3C8gh",
  "key5": "3aNcAzP1Q1xjw67azJvvrnKBLG9q8spGD4GFvnecDFgjUGPc7b27ZfuZUjik4CZphVuGcuhtkTQBtGTmMVfM3Sqj",
  "key6": "5seNau4mRWLcvSV9zbwBxuDbmmADnj4oYqDppg45hmYcR7SfCqnP4d9b7mvppzEv4rQ8kHF3pNzJTW61rfMjVRSa",
  "key7": "4bbaCZB1aMVW7VnutDP3E2EZqPbT3T87YPvpVqXvsPZrd8n1GfvaA4JPjegkz6PgXaaU35S31jViRVt52ck6NgCr",
  "key8": "5WvamFqocyps2FfCn8n2vriFpGEuaNtV7CU16LLnf9r4GCud9GN1LGKdmqdCEKQ2srMkEGLESTZkccNwD6bdv3vN",
  "key9": "28tquXszH7sgctovj7bXJGDVVpT5XuW1gA9JLjKDmttmrWtiPw7ttHco7zz9k26qtjx3ZUNw1ar3QVoVnURFVkD8",
  "key10": "5PbrEJBHqP8fSDCMVJ5nsAgbRX3cqAcfHDwjRgo4WEnuLn1DMasDYEpxTY2nfZMADqwyvULzYH9ZS3NmuXriUUib",
  "key11": "5Rmq6g1YX5YF7Hv2KFiY4oQBrgmxBKxEQpouF5BRVydwiNMnEbJC6RF5MqdUf6TUcdUqgCtnLRMsReXhYG65PCMA",
  "key12": "3s2FcFLDBYfB2oNu5vthqDxfUUQRppuTgc6EKVrKN1bo5SWz8WzfxouRsouw2FNvvPZT7AkiWvsVB1GpmrmERYkH",
  "key13": "2PJZzef41CuHc41BpC9GgJqC9RwHkTbdyZ8KKWGxTbjzZwDmvcMErQsqDSHFdrRVTFN55Yayu5GzQsoUDGsTCzM9",
  "key14": "5buStuE4KYup88AQYKkbgdx2V45aNWAMGNJ9c23vN96kH23ybeDtsVpghZDbF6WCrqErusyZKM36XMbJBM4Fn77w",
  "key15": "4qysaRq1jRsJ65SRUDGhvq61Xcv1D6oNuz9f4VR9LoK4WQmUcAhxj32Dn6c66c6gNWt8hwzGmdzp6E9b9Mp4NmeZ",
  "key16": "2ZM2VcpPaTLqhRNB4Wn3Cy94ax2UTohrJyGMeMqRHX2zyC3qzfS7faUq28ZyDnDhqVKDMnTJuhZMp4fAgvAdZGuh",
  "key17": "3H19VAPvaMEdLs7iBagFWC9jdaandDrUSFsShYnmGC1K2Dbtfyhzvbj17SWoDVca1CF5xVASVAhRtRBvVewnCYRF",
  "key18": "b4j9QHqyksvwfFPmFGyqycbziqPY3TXfZ4rX1ARpsyWyU41VZKzLt3tBJSmQeCqoomHbQLNRUeVQEDTcPcrvArG",
  "key19": "WD9ht6EGpfzZBgxP4mvcy75sHQVXuRhtrvC2DsRWTCJqLkyF3imXing6yMjkNEA6jrep3ewyRp1hCWxxrbYKbTt",
  "key20": "5AYT6Gv7SLzpJyD4SQgSyEKZEmnwpaReQDLXx3G4PCGYMdoXAq88Hso1VP5N42asdLDVvDe7k29ZMphEZ5NKDMVw",
  "key21": "P4PErY8S3LnBUU9dE44jjvjMdqzvAxKSzELVpsc5GzMqwCkJjQCPqrdrznki2gwEZbP1ExmycYMYR5VE2hKRAdm",
  "key22": "5gYrTLcyPgVY4dTs5sGWkZk1vkerxtGT4y4GJgYV5wXbnx5EL6Gz6vir4fDaHH97ESJ8aup9ASKRjoYR3MmkbFVw",
  "key23": "4XYrgu4FTfBc4q2rUPP5V38XEn7ZE7deHpxGAC9HLfEgXfoDZn1cUQa4vEd21UUuyuC4eYqUCXN39cRJPLHzUpdy",
  "key24": "ty32uYYMZoQTyThP3AwBscbgn3uUTW24GojYmAwJVVUHqsFcvK7PkEiZZTTjRSokFW8oPgCAH9fZAbwtPRui3rT",
  "key25": "Su3YvKdhyYan68NVdRRfFwzd2dFnmTxNTmbuJucVa8QeDv9Ww8HFSFUZMQtEt9K1AHJSw9XLgj1pZKoqeB8qGLm",
  "key26": "AAdBHBpES2NRktAGEJjcEnXvboztrC9VkbFjSfVK39qsGSah5Xti1maWpvCJA6tvVvRKSXLYUH6Htf8SAAN4vmd",
  "key27": "64xZMh7WtRWDjNJqroksmDxapkEQdT7BGbe6Q1LGWQ23PGoGcu6GP7iQ4puczHskdRW46gEHLgG2ww6UaxzZsMqN",
  "key28": "5MYdosuQr1ZVER5sGtCMm8h6JJ9tN4wdf96bU2L9AjUW6SrhDD2san8TBLbaB7kZ4mLo8YAwC6q9BVUmNMRcBuLo",
  "key29": "3KDMyZ73iZV5Q63zrkwrufofT2LFNFnjZJfrEuWQo78R82F34wriR5qQUmC7Re4BNszGrrXQi73d4tUehN6Qyckb",
  "key30": "NFzaREWe9HFENN2JuM4aTVJee4B1dB1fuqXponnVb1GJNmK648AQ2kt1xTWb5yZVQ5qNjB4FiSCVZCbpDb7Q9wG",
  "key31": "3ocfCL7R1GNbumyyAhwP9iAR2dSSFUJpZ73deLFnTJPM4ec8QdEaUCXAKjkDx1gLNUjdkThJbeB4LNbrhKvcH3rp",
  "key32": "42UASMMbLVzucU3V51vE7Egp4vZm15yv3SH8XwBVNCGuYeDDeBRSmUzvvdHY2nc3uWQJDbkhXDL1RNj4UD5o4hsG",
  "key33": "5RsPh2oa6YUSExNBvvymeFHGaWzSe7ftkLnmdJTX3GQ5YfARr2qoEaZ16f9hN2zA7CdM7bWNRyrAZvVMxH6veTgB",
  "key34": "C28qFadJnHDjQRvK7rMt3o8vhvthB3j7JopYjdpLgbSBFNtcybDBmUEeXQHHx9qMiUDuiq7AbtV5Nh6p8Z38hy1",
  "key35": "2k2VkGxWqh18HrFZDJkigitzGrDLyYijKCTmKP232TFDiuBiTHE9gFGDpDAESENpJgJsZxa1kMUnkUmX6EPfSxVb",
  "key36": "4XKCd3CZHVBrh8jBrzVxY4Yw81GxZMUFoLBx7ebjaWnFnAfyYtkWhnhBD8NX52vQQNnK3bHwaZ3hELvKv1MjQdHk",
  "key37": "3Fvtv1hnA7yzr4QhZkZGpBH83pVr9r6fznpjpKPyBT9qxmdDbE3oEyh8MrSS5SpEusHiMHJxyhoW6etk3wtESN4G"
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
