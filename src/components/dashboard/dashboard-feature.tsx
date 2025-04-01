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
    "4yfXd5CP7RsGhNQFmwAT3szKXgkreF2QLW3tK4RzRSCcS2TNM3PSuy3fG3eGw5843au8KtqAX3toZ59Qhh2xeDRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33J4HT6L2zSUqbuPzohpsWVfG8DgYbgMmKtDP6QFswu72zSggpqLH7NnNaxHTX5sLZPUDPx67bbG8q5NR4dX7LyA",
  "key1": "5vS3ccZMs51vx2JwQ28Mrck62x818Lub5p1r2ksDPRYhqpai3dKDJArJ3jXbRKs3EndEdhTVsgXvrY3QmgqiGTAm",
  "key2": "1nUPBMtttduDU3M1T17Cxn5PYWUwbZBJ2f4vxG9jr5RCGzPbZNjkNZzvvDfcXZdXcLDGxhU2J2Dj27THCKNR2uR",
  "key3": "3HNrSD1tb3ZPSEb7CTEuEBgkiUvtmEK31ezuftn5bLRwRtrnqDMT8UAiUM6FMHL5MKuymqyh8M3AVn3QZ8CJCDWG",
  "key4": "2pcprr18HTu5SnmUqHipChhyzsWUDfKGuUTZYtSYV1GGH5YoG8c3xZ8Qov8HW1GVoNXcuTCLj9eR3WQ7CJLdHLeY",
  "key5": "5HGL3xgj7VbY5VGa7LXKL1Eecaz9QVBhju1EYpCZeTvUHisFVoikA47142vd7EeUd5Uyx6Rfb978yN2zay3WqCk9",
  "key6": "4dzYQVTZmDH12xbdPeT7TueuubPJvxk2csFBNa5J4CzyP9pHzw8bWkEm3gqYCMWmX6jMW8Y5N2sABWmZjzNVwsMN",
  "key7": "46x39VWoYxFq5Hdw73dfRVGD35HC6ArDMStenS471mg8Bu2qTuzpcW3QyGj1UiEbGrPKadBCbHQMPreQ7J2ZRG2N",
  "key8": "5SafF3mm2SHKEig1r3iodT3ec9wNgi6m4mWAXwhyzWaWjocNGoYcZJSKY6pKJ5PGw1aVKUz7bnd97vEYXUMuJ7mV",
  "key9": "g7f1RoKpyWnYX88kbVQQ2kGejm3bUSkniUKmaCEHforQovm7WdQ9DEmcmYFVfdeqLU8btVVA54qnHhycQBSAygG",
  "key10": "2cMDMvE2SJP7LzvagvfUTJn9DNHRGc2Dzy475MXbwuQsnUFYDGqFHCVk4tMaJC7tf71r6nkQLo4vzHkWA3BKVtxX",
  "key11": "73MsWXVrHL8eVRDEmK5EyvWvQ7ayeJyquq7KB4MxFEP2Gcy2ihneai6v7WCEcqFC23yzVeDSYFbVkVtTUrWVhkL",
  "key12": "3EpvQqscbjNgGrJLjj3uyXn7gXTcyV8g8N3nnExJZYEum6kWre3SrdHd1N2PNYPdqb929uvcNuctHDpBc4qidbgi",
  "key13": "DXrQKqReXQaXAg8aGrz5FWZtWU8X1RAKp3gDPY7AYSd6rrurirXwF8afg2AGmTh2VyjQuxyWCnuMoM11oYYVZnE",
  "key14": "3UWo4kZeErtPTmd8WQ6JkXPmjkLX6x9fzAMRzrp151SercMMNKsHB66SEroemzdtBzYKpoTeRHPnhFbVcqBMvjxB",
  "key15": "5hrGvbLFsrbTNdfr3nVZ71hcU5ibG3FzTpgrDcEEj5jhyvo2SPK2ZCbhpGEGk2YNDUVomZw8bcxqrBgddnuUPDhT",
  "key16": "3w84S8S4iVS54pAaYpj9BjjUkAdJMvFZdgEyk4vXRNBABsUraqJVR1e23Z3ursqT5FAybHTFQHXtGWywdJBbbRwa",
  "key17": "2T8BZ21RVQC3pSLQ6u8eyUnh9ZHGnZnhsQsQTN8kEdEXmECwLZL1L16Y4mnHPouPqSCQkZT6Lhavys9VPmhR9doF",
  "key18": "3v5vddyCQ1cpwf3bQvUsuiEMAyHCJvAXnerRZmvt8WrMLW5AdgJJK9VNRiDLjGV5JsP1LoABKRUzaafrCKqPSckw",
  "key19": "4ofZKc4Mw7kz9rx1CErFepi8cAcMXnSMxDaw2QhUUMQqtdwqeKNdNJMNLTQwb2DHTDQCmjkQmT9e2o8B5WmRNnnF",
  "key20": "3aqH18SwLma9sar9sQNm4iEP1pPgkFQJRP8jZLogyw5SUYbDqCDRJttkyBbioTy4gBVtneLm1MTSFhhkvk5S6FHD",
  "key21": "4QR5Kyr61btH7Q8ZcT9iSBmNCU23P8gB2PLHYsHB2m9uYvg2FCJWzAKzYS2S6whdFk2EhSuqqFiGzqDrdDxQkh6L",
  "key22": "4QzzZCi4rPjBUEFkcZoWBAn3rZfroKcsuugGq1hFhiMtmgm6kJaVj9YyY2kpuut82j9SZ1qPm5EheAAv6ZAobXTp",
  "key23": "3AYpQTaL2fvn6DtBRRE4tqYpiD3tVXxD3d7YShRv2Hbff9syvdsnyBURxgcykQfNWZqGv5D3vcXSHX9A9Z6wg9fr",
  "key24": "2gikWEv7mjhhnoy7Zuv7jheap63kJFh163D7cSbwYQLjCavARRN25zGhGJ4UiuRcdFGdsSMzScToaxsJZsBAprqW",
  "key25": "2p9DzfNDp4RFFzwve1Ki3wTDWn6TBtuioQQ3C2ESFR3AoyXL25yidguGpftVqiYf4MtUCezDdBV8Dx4KMj5uNx8j",
  "key26": "4GPTdKSgLKdocNdh2uNoM9xnCA7qhDv46BHnVs2rysDyLAgABfhV2QqnRkxhVy7R5iLHwURMhD9vW1Aw4yacpqKt",
  "key27": "duTVa9zrxv3g9EBfdXELCuNDi2iKynrsBuLkyks5uSkyDrvoifHEGbukptBuppAWMWMNyhbojWyVemzQ9QX63MT",
  "key28": "66m1qYNVNvqpYyavxPEUXDvJPLPHivcAc9cvEs8DHKQDMW4t2nNb5sR94xADbHkHHs4KggnEWe4ZVHMLhcpGWP4z",
  "key29": "3sGNTiC1Xsxhads6iurgYQseMjN6urwC5fHZCKVKLpSiH1N11of7gzZ3MPSYT5eiJkJkNpo6GRFR8Vaee3oaMYAg",
  "key30": "2KrRmN1bfcaX9bbFcrwrGRgetxBL9nyb6oe5RxGFDknyWcUpwnBem8sq4NvHNscMHPHmXjdqHWSUFk4WYggwNRsc",
  "key31": "5hYSn6fV7X26KE96Eg7BqgeVWL5NqxJ7Jmg7w28MDWd7m65atZgNNEZFvvmjeCx7sSb1u9WhQcrDb6fzZBrqwjnr",
  "key32": "21vmdoLMChehCgSg4t6g2F3ZcDqtyxvKKKZCGhNtE7gipw4NAHMQwH4TobmT4ZHqwsDVhZ3sSmjXh4WfabZpFZkH",
  "key33": "2hzg34GkaZMRFaUwX6xnP6r1jcZs5JqVGBrF8cj4SzntBpddpyaQhxxuf4qqddR5MBuH7gq5XVhG6G3PwUQkk4bJ",
  "key34": "3eMD5bHRYSyCL2rhikyvCkLhmkP5USqHY3dmRRZZZXy5PfGo8LrpKLEi3QFTw5wxsECgCTaT24gWyxW7KxtcRJw2",
  "key35": "3ES7Ff1aYQfXkAgxfMr7spuyyCGGXYGaaEYG3C3wnpkZEU7aufzXdMM1Z3fa1N7ncB7aXAFkjW6UTGmVoMiEKALU",
  "key36": "5KsgAvKnNBwEf9bMUjmxhsjLdtEQ3z6Qv39NMfrFGNW4PfQCYrh6t2H8gsnqokbHfxMGnozr2ivQ3numv5e1kSeA",
  "key37": "pEKw9r23NjHxz4n5VUJyDocyjRMe4Mrni5wsTJjDgfLE4qPmmAYaxd5u3oy4x55mAjBfDvH4RnEe9fYnA3XKgH1",
  "key38": "TAZ1PkhV2G37JwmXpPWbMnckGZwuae8j1AMZBBY2rNJaz7rnnpksNSR1Yd3ELtciFWeECcBTQNsBm98go8G6z31",
  "key39": "5zrRon1ZQyt5SAysXpxex8w3DtVpTuoFkmCczQfmNQ1CWVNfCyHZyzP3vcQ5AgkqzfKMAi8UT2WF4voYJueEvwGZ",
  "key40": "49v8DmuKDZLwFrz4aC1JZmxwkJYjZ5y88ZkKnufHPC3iMjKAt8fyySf9LRNFkNjByXGXyjwHmXsx2iEv6AiE33dE",
  "key41": "5WzecuscUPLkvczqCmG7aYU4bt71aX9QX1PSHJpE4kWByAGaLGPoRV9wyq7SZQohx8h5znG5z1KHhwTag9L6Wwri",
  "key42": "4YYBwyNbrerhGZJxrSsW6b7T8MQhxG8Do75vLnuoHm1Q3bwBCzYCbW3F5oy9smSrXFTxJTKhQH22L4P5xQ7re4WV",
  "key43": "5LWyqGq9cQ72g9bg71p3Sm2X9xHKCmQyfiRNE4d78Vw74fDgKhsaVXvFZpC3ujPRAwk3YVH1vfo4zTwf27gS23NS"
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
