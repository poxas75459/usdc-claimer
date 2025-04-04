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
    "ZTzyFZLEnh1mgHL5ky1Z9BVpT9cQLwEm1nrKq731fXA3iX1s6fWYJVVFgumNe6t4oseQsABrCwnu7SZ1cQX9i8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51cqLn3NHkN34gy4ZspkAPa7FhoEyyr5JZeW3dqibyRGaBTTxBkhCQRpJCrHWsRLEANoR3NtB7PwewVu2PZcS1T2",
  "key1": "Q8UE1AdczLs55m3HhVWiHpzm833o4Shrq7upgbgzeep82KCKRduKQSRf3yXmobDDXSDo2SNtP7AYTYWfRtczfbJ",
  "key2": "2Xw3DTw48QdcBC3iJE5vV8YuQ4zAf8TLiXNeZkZ49uaSGc3sh1rDEgZeFss7rwQFMPD4S9swjxNETKbkAR6yeLX1",
  "key3": "28M2mE1JPWaFAHp27j4GgBZnb3n8gkCSvEFApf4rzA8E9VYsoRi9Uvvm5bXfAJxJLAFvexNCMMiSibJTZmGXc7mX",
  "key4": "51HbqDpjZPUTa5E95GXvXQfzi3nhyYGAyNeBcKh1vxKWrBBCZ9AKef479pdzE8EJgLCWkJPnsXbdFB1cTKJKLdWJ",
  "key5": "Y8JxUeVYjmXSsdqswD8HxSX7t4rTSufgbmYXMywTfwDy5GfYbfWmwhVZyXWw5B6JKJeFyizEL2KFWiLHYEBm2St",
  "key6": "3No1WfPS8HqLhnFWzWejWgq3EYu9acQ3mLDpknwMf8EdtVXkwvrFcqA1KRpCvBW8fEjUrj6t1sMQyGNzj6yLZmSN",
  "key7": "B9UVfJDwqnScxS5czzr2eN6VvKSAgpLAbEQiW5VNNY6oYU4xBwbeipqvaydpuh3jCmCiZAAqhz1SiCCHAd1hXa7",
  "key8": "4Ma9dDq9PoXtRynpwj2xw2MdWc2NhyN8cK8BHRi27AefuXHUjqrWUKpR6PH5UrYKpK3LwqF22QMtmUzoxLhbFzs8",
  "key9": "2pB3FqLjPSSxC98dgFkNrCRx4sDsNirvqW3RA5TNKkw9VNGdr4TdR5W3euLfJWVQzknjLftmXeK49nb1uPzSg1LK",
  "key10": "3dUjqpsM6axmyf2zi5X9HD8G7uCXw6JefLg847F83m2rWZdA88YZ1JAA8TbsiDuU1UsRwnQpUzbdtHyXnQBuQip3",
  "key11": "3AhEiZ2CdFL4iL2CzpJia3mGxWkQx1kgUofzQ8F27g4EMud41mBUmskvyrzugBYEj3zHEqp3Qtyd6QnH3fHgcB3c",
  "key12": "59mNEnksNB9JXC2P5L4291JoixYAaEziqwj5KYuh2R6Cosm3HHr9mXfdf5JCgCvM2H2KqTMofFX4BnNPZtjHhdEf",
  "key13": "5czjp9QAuiyLq16N2Hh6Vid8SSTVz89E4x9oFrMLuXDFZfP6rTE2eXLRXRTaorzuRv7mmpjXiMtWcjCKrxtxFMUc",
  "key14": "59f6azKnQxm57svvw4oV2LjVYoAeVzcsey76witJpKCY78GRmm6rJV8YSyEWMe1zTiQRpdgp5qoqc6rQN2MeazEx",
  "key15": "2C2Ck9YzHYFPvHrSc8irWhQcLpTyDsrs9MfWZqk4pmuNcYUtULvJtkiENawg8MbAyaBK11puuazfotbg7fPMf4W8",
  "key16": "66RZ3HiZfE71AEZMacr4U7JKVkHvNbg1G4atkxAAc9hKaev1FBYfBu9tgFBU2C9eKTBfHFqREsoEXwsQqJpWQoDU",
  "key17": "4bi9jSJC9qBb3qfgmqSQgYgPXMjgGJF6d1U83bDZaSeNqYz8XDASuzoG5rQK2RJP2bHCYYn3PUp6Xa4GAPCwViV3",
  "key18": "3ihk54kmd6kZqDBMsJCF1pkA2chaTd6hMtafsuBYUTWCaVfmMZVtvjoBJPuXUUM9hzSLxVk1LALg6Wct25hV16wx",
  "key19": "bgKBeXieXP9jj5b6v76c2D5JMVrmeKZhh83w4pjAS7D4SVb8M27HdS6mxZCrTk7wi7vEhnrWr4J6QaVyFbHyjVT",
  "key20": "2jwPX4UbSyhX2eAQZvxRrtoxRSj7Cx8Lgx3uz48tQXc4T51r4LLdcpVZrqKkHBx5drkqMrfnDokwxPu9QakwZ3Xm",
  "key21": "pPHMB22MY96H2JVtFmY5jtsyWYJ5QwuphWPaiRdVXs3MKtytXUBAk2DJfqLQaQXkmS5mw2uE7GwUPTaqkHufnt2",
  "key22": "28RTpbvLxhrL3qvQ79yvzx1PuWiNeRMdncZFb9jYsaxboTFeGesyZPAWyrLdCz9X5T9HHCzzMY1QfKgruw2kRVkL",
  "key23": "3Cpp33DTjn4LcGVP5778mULR6FQXhT9WXYdsg4TTjcq6JAkv994VYmbTokis4BiaZC8MNTWHheykZfSi71brvFgp",
  "key24": "2PLJty9YzmtXG5Fm4JnmYbJx7nUNLTGLReR7mSQEkNqR4dW7sAykuaH5AYL8qdkD8BoM3b6f2oCqTSAgR1SA7dkL",
  "key25": "53ieFtxa6q8WdvDgKWiAhPVnG7UV5umJUX37evB78hSxWqFuwjdAJnKSGNFXnqb25ih9jdDEDwm3k8TvYddU1Nxs",
  "key26": "3wzsq2QGbhV9FShkZCAn2FZQdGvW11vXidUnx1KufMwd3LVwVDBpCMfbfnGjMoDxnoEdXHkPw73LUNgV715PKQ7a",
  "key27": "5P7cCK3g9PAaVLVtGD5jkUCVNpAJRqCGLzER8yh5YV8KFVrqNHhpTCcf5VfpEg8q17Frk39eoU9r7QfVa96zvYuA",
  "key28": "2z1s6XCshueup29L6Qzxb1SXTvm4CGHT8r9k81CiKrRQxkicBExt9eXNt5SbXvjMX3offukDq4WDL4k2UFq5Loc7",
  "key29": "2Q3Fx18HFzLR3dC2PTq7Z8cRmPHGuv1SPcJvctKBjYEpbb8yp2NEaPVQExygt78dc1YxEbQrgQ5ByGE1N3PWfhPp",
  "key30": "2nPUKJ5BetnebXv1ZkxqxnbjF9yDwFP7omqcZm2NuUbaUAbsz8L7uWhjtThvFQbW6aXFkXJTsRDzx6ADTxTZm2H3",
  "key31": "3YxXxDr9C6kvvuAZWwrfNUq6JJb4bdY3AV44tYJFG42DweFNZbqwMkVrD2zThsB5db41ASy3CEUkBHd2FWjsbsFM",
  "key32": "4kLY3vvRJRJfKHVpKWDL1PPN9sighY6ULmTbucxQ3rh16b6vxgR1AEPSec5G8ytYRtw6WMN23aCwMxNE2oLTuRgb",
  "key33": "3kyYk6WQN17xhp1xUnVobXA7v1kigWNgwFS4ct4Y3VBKCXR28HJzRLterPXffPUAYxdtcqhAfML8o47hhWX6q4U9",
  "key34": "5uWeyRyh1TuDEgdVcRFrFyBHfv8taqpmjhjyRLBgWLPqmZHesNg9bSYciiXc5cJNZoB7G4K7qukpWe4XQ8f1YqZ9",
  "key35": "46rXMTEgYXGmWftiNkJHA8D4tJuHGK9aiQbvw8zPo8mdUm3zxSmgZr8TLJvMVMEYmZeCVB4rxCQHmB2zog5qJWXg",
  "key36": "4jfi75jyFjbsUs16rN4a3CuD4Ko9HXq1oGEQJ8M47Z3926ecoFcSWE8UrmRPLbfUabe1nrap2vwiqpBbn7UM6G9M",
  "key37": "2GRUfHaBd1TFVREwKXDgxUz7X1RrAGEuFDvmMKu62Vr2yPg9NzdVsEN1CMhmGyA9ToHsJpX5BLUkQFcwNWjMknkg",
  "key38": "A2dnKvxxKokXGkuA5XSPMkkaLz1jU4Vt7ogrQKHhzMv7cFq3DHotk1MJcV5itxMX5VgHtoezZUMnpSrFavNBAPi"
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
