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
    "4Wss8bJpT44uMgEpVTn1HYA5jow2psBxVcrMiQSV3vAynve7iratqfh3EVj9EtXivVddWL1PdcHWCn4ddY1PDEeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C76RW3bTAq8uNEwumf7qzCyT3SnqFHmhEBbS6xiAb5ftWiWsy8Ski1e4QbdmrYERq6Eruc94M7VxM7KagWWfTYK",
  "key1": "5d6PqvMBtksyn7b3wdv58oApY3ZS94T9eGsPfF3uSU5ydoJM6kgA432bohmff4AECWzz5uRC3ZNeQiDRCfwc6VEL",
  "key2": "3TinEfntMXua1FeZShv5t5mb7wGkjKAWsBrfFZ7xv6xJaUDa2R7fk1WSih2pDXmvkcdKPo4ByX321uHjJRbBEwHs",
  "key3": "frnWzKLDMhc4BUh74o8N5bFhjAuh7kkACh2JSTdEqqfGQ4gVsFx6d4GAwLZmLAAH7MmQMvUJHUXrLWFZiv56yD8",
  "key4": "22ZGE6kfN9egM3fLuKWxkVoWGkfPKfu2PejJWDjm4j2FegzfN3JvawuesMvBYjt4VsYkUerJgcAnu5KWa7uGuJ2a",
  "key5": "SMzBb62JByMTW796Nruy4M92FdeXFVwV2TQV9qBjV2XcyxRS4raEEmTtDh8vZihzuYgSUUS8gWsrKFpchZGnQR5",
  "key6": "4vihxUQ1G7bcXRU2cdm7UDXmZQt18dFqBS2tHC8PXGdm4V5dZCWfyeUiaoQ7npwTd2Yeo7KCSKs3p84AQ9NY2KgM",
  "key7": "2vRx8MLQSUJVLeQARCeXGAKwu75tfM8iKU7MZaHsMzPYoebU3ZJqhuJ5aBF6uTKdHH6DDUZQ3eRXF4LfyUCd7VS6",
  "key8": "2wLoDFi9Jy4haQcahfN4MPMc2ks9if2m7wmFGcJexJZi2ReJJtBGdNUsqJhn19Bgtzw91RERTmau8qwnQBP15EEY",
  "key9": "8ySiBLvSXHUKZBLn3n33mYmdnWoZaojVEUer2uvtcp5sUydB3bCf2DYA5tYG15cAacGfNqR5XApAdpNfgDS28SC",
  "key10": "3jjsCMSVco66PXLLZC4hDJ3J4CToLNbeqHfHBAZgaDhqRiYbMfsYzdtPhGpKoquhzVSUinPjqWMz4mVorKqu2k5x",
  "key11": "j9rkNnYJ56Svvbp8Jogh76YRRJaUPzmjb5MRQjz7sfm8eDJ3vof6b5u1RA8MyMmnRzsZyptbmyDoAJX8oh2Lo1h",
  "key12": "2Jex6prvPjAYZ5SmpiyrGJJAysK8Fanva8nKepBjuPBW2Go193HeaRkvQtiXbXDogkfSjYMhomNbADiGLhSggtn9",
  "key13": "5mVqSD2U1BZoJR1sYL4g6XKTrm6p3YHWjZFcQhJ6evPb1YWG5deJHLSek7X56JWHyrciNALr64zNWwDstHCX2yQ5",
  "key14": "3qUPXE3fRKfuseAvf5oDXULmm28yg8e2aoWjvYhYihiqk2RSwqf1mPakdzztKhFfwNZzEmfrSikFQtd6HhcuESRJ",
  "key15": "2QyQvEydffrYwBi9xwJGeCtSSp2bP14xKHTm8xBCUD8mijhXQoUHm2aSz7zUev9QfeLoqhdzw5s12bpLTqhLDQE4",
  "key16": "2oPcxV4SPfDtfjFK4eeu3SKK72XXbwUcnL6D993w3y3RNx5mBPLA3ykFQteZyYirkK8YJPAqPQ3nJRT5to48g7BU",
  "key17": "2b5k9c28kDYqp8xfZvC4Q2UDZ5aWznff9HoyKkHVQ8Vnh7khpDKKw7R7ngm4nRPtyiz3EX4tWdEfnFkkLVGA8rgf",
  "key18": "61FNcFCRpfrjh5iRdY98XCXZCZkdpPyEvMF5HNv4hEGXS1RxDu6rm6zns85JvvbPeeDW6PL4Vstpq4C8S5HhEb2f",
  "key19": "2KrNoQTtqBZKMhxnTiLfeivEwL5VvxKhbnGH9Wqy5FRcixLMNKY5bdm6CS8HVBtPozi8NPfqwoapVH9574j3LmWp",
  "key20": "4p8D2YQz4ZFdQjnpM66bb9Kk9rh5DnHiWZPUtwCeZc1C7MajqujtHLaxKABHF3rTD2rMyzA4xCCVbQjnPH44BD2R",
  "key21": "4zBfDDU3HxeAuWwCdG9xJ1J62GpGiSVudAZEoCAbGc3rzULfuVw46yDsBTVG6YutfFTXAMpvJ6CqamtZyYsYqZY4",
  "key22": "5i8k2ZBZJ2AMpqqqKQtPYXF3mJZfdUxHqR4hnmn8ysgR7Z162oPBKBXTMjTyevUZnXjU7xpEufu5j5pskeRsEH17",
  "key23": "2mpp7SvbLc22HhDJzgKNkrsHE1UBQq65ezp1KXGw2PUtr9TjyWvyPGLBhDLE3X2ZeaBVAeiTwbh97fFPUfzKhnj7",
  "key24": "4r6MG8rZhnc8eFBdp4m8Vpk69YFqPQbgmnVXWMAMfaYm5wASGL6i3SxJKMwyvWsf7C8szdCKwYF5w3LUjNoy9fGR",
  "key25": "3U86z1xEt84RG7y1YdRJnYKMRRtqTJZYc7363PpyBZJzY3A8u7nkvCzaiY3bkWy3JfdwwSfCmQNu3Lg3qwjkASw1",
  "key26": "47srQvEPCi216xRtLpRgmutpM5eaGKZhbmAYEidUk4UqPkM5fUcKAJnnJiTjw18kzHi5qJ23bt9CZJCmajrqrxFh",
  "key27": "3dfUpGoXihVCtdGSKBkKrDpQwzykh1iM5bf8aTdvN8LZ9tbxiDf5sD6hEh3NXe4AdRu4NTogew8BRtSoMzu8AFGx",
  "key28": "4ghTYSDtUrdwmTvTj1G3P7BAvVsn51rd1U1EjLhKMMSUNNUytF32hq8siufWTDz4FgkQj65iymPuwLTFRa3zLtbN",
  "key29": "53ti2Syz8Q2JuQ4zwvux8N3huEeifPUDYXY9Zq37RfWFLMB4PYRfEFjJnZnGBW8kKbpKj5j1eMQ3tg8jHprHPGZH",
  "key30": "5orE95un74vC7nK8wBvVypWHuF8TwE1ofZEWkMejoJ13d3TC7KguNUqeaNYXaD8HFp34462TcHfeYWYJ9RMyihT6",
  "key31": "4iFYATYkqwxsuC8ewJ6XN3hng1i7mtk56rv3aTxLAW5sfZJUqdVAAPoVmZx5ES3QZvyLYxcN5P2A2kuHZsZTzo9T",
  "key32": "3t6uVHF3hUhVSqtxtmGYFaQKn1NbzJXBtiyik1fb9Z1zjfcVntxHvkhkLgeDtDJT21gPEmtsJiMsVXY6WYxgMcV8",
  "key33": "5RZ6eAzsAAFjF783VGAprr2WwQEjZUW4HVh13jxjtZjooC58SiYyTaReWRAkixVPs1rqm8gEmMVNFGTxYex9wND5",
  "key34": "4MX56D85bgeCe4xZ64EXxTznvFrP7mfLAMGMefdRjY4Y3KeJD6tmxBiHDp6pZX32DJtXMs4f5N1MtwrvDEk7REiz",
  "key35": "58GHWN1pLmbwHDmrUNsJX7daWjrMuGVJkRyRrexaupZ1f9LuME6fwMG5TXmPukxfw1nucPgsVBnXPmcxMEwRF6RK",
  "key36": "2GAY2dfRJzw9fNKQwF1BmkkCZUxRB9oe4pkHB2umL3T3HLHv78GmpsR9Jhepx5Fj1GVMFPBBS8WUeKaeyFmtjhYG",
  "key37": "3JK1xsQNCBjXnX4Vft2jsbYvSWb1tJ1tXgzHtrVRWTZAePrY46bMWnfkF1gGoyNnV7mRVmt6QaUczJ8zX4prY8f4",
  "key38": "3gxXKHmaeh7kkmLRnQMtho7G8Lz2cpLCnVt5ye8YVgNpQG7QMEU3jmK9eRZztVdpGqY4zA11PprsGewKNXsj44f",
  "key39": "F77irrrvHxjqzGXmvztur3oroDn4ouigpPJUyzQgZHiKkiXw4anzMW2qxqDQfLD5gw2QbZow2WjJ2AewWE8fwrG",
  "key40": "2EPhTJ7Q3m9gyNkdUr2gLnMxd3vwC5JDVTKKaUDqwUi2cnQBF5fiZWhQFhUn4Gw2FFncfLw4Yk5Xwg8F6Brcn8WQ",
  "key41": "5LSkzdVGhohxdUmcXSp6E52dwkrgnYSLwWn9L8VDNoSYk9rosvKqcdriobUJZKgfqAWEz9uUKYBpwPHA8Akhn7Dw",
  "key42": "5khvmD4sr7JfWmiqSK6EMf2Xb2HxCg9mAuziz9Cr5DyEMbsripQdk53MmKuQnCzXBVqeaenqNrKyo6KpS6iiN4XV",
  "key43": "3mnj9vAUFfPN4HEnH7KUU4UUQPyK9UaujBo87cgxjsdJA92XhETdkfFvBB6FbzcHNGs2LZTrQ4eHnKBFki9sgQK2"
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
