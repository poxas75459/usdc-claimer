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
    "aTCaWiEKkfAsHA6yCCMg9NHdcfezqDNwJ55kkrr3KDQjMzKJDkYNYDiYw1244ikPgtJmAryj39ALR8p7KDsVcsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bXywgr5yrtXgRRGyGRBqZz6o8M8ov4gNm11MyrbJMGZD3rTwDW2nWFWmQ8gZFkZuZHdUNPgwQcWvrAtSWowaE9A",
  "key1": "5dFzCeKPQeLkWEkdo7iaxTaa5ajX8X7WF92xFTHu16r3vmPaManfh9D33Jd7zWMcqn5w5ktmiJ1bSVbTKzoRQwjn",
  "key2": "4JEz9dsdSHeEEPKTv6qBFgKTvZSHMRfMiTvumza82yDAy9CsGhk79uoWEPtDkwRYGdmbx3a4CwAb3ThYeSPuxnGR",
  "key3": "3mAVRAxxLTTU7NYCx12qSu1w9qvRFk641BrtqpreaCbnV5HRU1KsYXDeZaPU5BJ2oK4dfPHPCYwNqLmPG4CXga1X",
  "key4": "5xx54YxU3MxA28VNAQYVU9xfPWCN17frCiZGdBkvoEiLBJUUNcAWBfVow18DNdxdUzCy9W8rHkRuAiB5naxBVBrg",
  "key5": "2eDVg6Gh6ZorWrNDTr7xgxWidhQ7vVewDCD3KxtwKECpjWM3Pa67saVKoNpKjfs6wYxFQiPYtbmU76E4mt5DUieA",
  "key6": "2YZzGCkftEPxqWybFzC9jJva8cEguJsYyM8B28LLCoqKbfJCNstgm8jpcmkf3LVkjVadkDvm6Mg5TRkwMCWkZJQs",
  "key7": "4rth38p1B7pMHoY3TGP9Xscqvebw4WByhN6JhHiPqkGL6JhBrDHCCfJx7LcYVjyFTk4sWgrLmh85i6n8SJycSDeZ",
  "key8": "qotUY7eahDPtK6QPpvCQejnjuyMhUyLpF7QSSSXbH2WRQMbEwLjfCqL5DUkoCGD1P9ieUG9oivPj4wuZhMmWrub",
  "key9": "3BB8KYr3y75aBjfjNbuPVtgNUcYE38FJP8XtLUFGLCksiGLM9wi8Si98wd72qGo25xrqMUvJNkqCf3WAPYFrYT3Y",
  "key10": "2snnpGhwYE9cKWgUpDvu4tkLmPYhwkQXdPh8guTXbnErfdHcjDRzWek978JPbEGnuDS6NP7tZxC9hZjZwWBxHkKr",
  "key11": "R2HL7KkZzHc3YQ6jiyNRSKm2zBKEYrx8dbAQvSt8xJqd6Hq6cT2MnRqsnFNdF8BjRsunTA4MLHce7aFmz8wcHiX",
  "key12": "3atS6YtwNJ3f44A5VdUcKuP1uDxSDRLn6HM2xACTsRUviFH1HdUNP7JLHh2tZBy2YePnBy9o29mD1WskCW57uuGL",
  "key13": "2MYr4zJAKkqLu7XipQtaBdaEzGL6St45GEwnU9xEAKFbygAyU3t1GQ4XGYYzYPz39PnRf7sWBUcT4RrZM4dpgwGo",
  "key14": "5QMEW8zjyNGuP23MrEabcP6AVqbu69GL4iLPDRxs6YixDieTKBxA4SwSLqxiztSXWbU2MbfWRvWdeujxCZXkZm6k",
  "key15": "3Fgbvt9i22fyp1K7fsBAGXN5jTWorA8iERDEyLZiLN8KCui3nz1Yysrz4fsa1NcdQxCvCqDEH4KBuTyJnBufk7gV",
  "key16": "yQJ7FLVAvt1r5u1Ai32x2y4AjZELbepBTCbH7iE8F6GoqsNxtWQkGb7GHw5CDAivH425Lh8nKNt7D5ufSghUbYV",
  "key17": "4vBPWPHmTaM51EWL2QwfuBi8NCGDBsRfhwqTGa45vMK2wrE5crcjE6ojEhiLZ5SmYeqKmK8Vv6kDbjxkEZGWzbtr",
  "key18": "2tjo1HqcWYbitcTFfY6QFazd7VStztQCT55ih2oQEaQBCFebkE4xsRLPYkijRNhoAmpsyP3ExQZaCCGWCduFwHW2",
  "key19": "3g8EiFGmtcs4XZ2Vwsrvc2MSnCiDsx9cyiMbVm5UfueMcWQstd6XXZaqjep14N6hcbh1btTVh3L2RK2kqoXNfZJr",
  "key20": "54Ag8wFL9biD1LaMANEaBeZ7MmdwHPyynVwcQZdTmeJHyo33zEmohA62DwqjQuEi1DaZqUXRFQpZE45v6jALmcmW",
  "key21": "34x57gio2Exf7AESNCY8SSUAhPyGEpERVH8w6keVyzN68nXyxjs5qhqRWocLWw7bUx6kisooqg9XkBU5kzvty3R2",
  "key22": "4eK3EqwgSwfiEkUBKerDm5tCY44q3mjQcDeuiW6ieC6eTf9zxtjiqqdtKQmnLiHTiAdgLuvqJD4QTzepum2mpiqo",
  "key23": "4S6aWP2EnzLQuhVbRNYNLKvqHuQoALBFFbfBcu3sBpvEFQ9EVfD7eX8nX5C55eGDdkMQqXkAF3bEgyJPkXAQRxem",
  "key24": "2JFQuiA5k13i533a3W5PV4s8YUhrmaSrJ9iqhAS841CLBKt8yZHdcucZsR9SMckYwnJBnhuPqy2HdFiwBaoeACQC",
  "key25": "5t4vPDLND9WG8jvuaFVed4zHBNkgpNySR5AyNTtWhVKeSc3qD5KyGywAJDmgvCFCC8hZUgaXiqsiviBMqRjXc6Zw",
  "key26": "4NMtXmgyvRkzbe1vHDEvJfTVj8du8DqtRFsWNWEJQVdoHXUrG4aJL5zGXbSxZjNAxwfuVLRLtZuDom1uDj37vezy",
  "key27": "5Z3pDtrCCFuJyK13J59vYTZsyVvvhbYGrWjSwmKwNoup9Ze5BktXHr9gQwTsjVmPuggjESh79ad4WouLcXH4FfL6",
  "key28": "3TZV1ZpTxA8RGKxwXzqCc326VzsMjsReYJxGdL2MQGM7cQRr4ukJAHTy2RzU9x5edGf2DHTo5Lq1vtWL2toQQqe4",
  "key29": "5iQjWNTpgWUktUHPuj1dFr9wzyhsomxWV5FhS4RBhWddNZsDS9U2e4YBAs1RqxFGy2e6FeBDmZmi8Mk9Qj61X3oU",
  "key30": "CQ7mRnWm4QakvGWYDj3pdjTG9Zi697V9RWpQCRajk1fDdXTKfMJThqB8XfzFRUHhB2T8nSwyLXTMAN8woEtobKu",
  "key31": "5tSc848B1BfEXGHaSyc6xBsrS6GmrN492FiGCcjaW2ygGiRADyHtYRiSrEH2jG7fZvPo68wSpsBAwBokZkx8bKb6",
  "key32": "Bmv2yXunDCRmLWjDmgPhLAJfyVT919VravwaCJop6TAWd5Pn88AoiGfFxEC26Y4pNjvcLH1AVsRx6oaTaQb17Q2",
  "key33": "33mDfEcKxCCQspCyY6waYACATQXoTQ9Kaw8sbRXJkcYSnjtcm9SVMxtS4t3iQL6mGJ3bw6vkywneYNtBxhZb21Rr",
  "key34": "3B9oQqEpSuRMqdSiUZwJy5ZsX4VvLRbQLRwsv6zZecHmp2jkDeezbBZJS3ByH85JXnA2o1WZYjPMeJVLyDN8yPGm",
  "key35": "X6NFdWV9sqU1t8xquc61cak7o6GND8A6DrRduHRhpnq8RGTRUSGAooaz41EQjBMqPWrfMoUDNRhHUmSstK8zKEz",
  "key36": "24rdofLkSprnWgzfRZpM5t8NUNLiugZStS31ZQf5BuTeFmj4vEt2Z8Si4s4d1d6kNJFQdEAWAnzZChtkmiE8F1gL",
  "key37": "4yW5idHSCjfUANJEL3qWH4vC9qDMRGHXd37ZNTtJ8qoJUP7MzjZZg2ZA5Ns11PkC2WgRYePaDzcLZTHM8XZSe3Jk",
  "key38": "4KcZjD3kgA4WUXMMckNXKpdZzH7GQe2W3dzBkkkd6KTjQHd4H278zFaw1R4prNgWY7MNw8UcydSfF7gR5EJBjsDH",
  "key39": "X2ehaRzVSX5v113QHxqB5azdUtRobmyVETYsShSA2mdJt4s4vwA9Fs55iG6Kp1B8XRKuaWF2yQBhaKjeQ8Y6eS8",
  "key40": "61xGjFp81qRwEv15bwnMta5GofsuUVWcHqqPhukfHTB1HcKTobaFPc3dF8b18BC6WjPCpiSFuYEk84hGaw7m9uxU",
  "key41": "3yxkyKkR4fhC5dzSgm1G3SsvHdvvcBEYHjPAmNbAdGohnCVRrrHdst4mQVeuMRXhm2UawYSd8EAwAqarzfs2B9u",
  "key42": "3d7AQpzcdMsZ7cnAvqnWZn95nrBFHDB8Y3GVU3oi4rrMiruHvcbntcL78UdA79nKQGvqvxTG2oYDcqsDgzsuNhTr",
  "key43": "89AUL8gGc2KJVNXJrnsmEFCBzb4Qtb6mhj4tJYfvDfL8WH2odns3xS3sfK9FHxDpq24L4DXaFyQqKA4Dw9kXANv",
  "key44": "8QrSaC1ug69Y1SEHcBhh7QYdVGGbsHcfdDLyaP2Uw8S1NaXpC3T9s9ybZbRZoqXq4RMqMHu4v9CpiZQarUAQoVb",
  "key45": "2r8sTxb5RzWHJ8YXeokBLECkS3Zqxpu41LHBc6chtqHfXX5qkjkY528tjf9zfrzFkEJsZuf8QSkZTWJo6yTGiYr5"
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
