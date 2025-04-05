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
    "5ffz3EpRNJJfSiijBEdkTPKvTPr9VxMDYh8PYoNRn9UePXbCPf5heYPr2CgpVhEJJWbpus2yu7aJBQJngFRnoGUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hiwASwVyGkzoPaXnrXsHNEaCazEiahWNJBc8jSSjYh24vfRVur2MR4FzZSbT6AUVzN7PKpAWo7CftC8RRmgTHDc",
  "key1": "3ja1EAbrKDosxLtEzjKNuSN7Xep3p1tvgJVPuTe1VJTPtTN9fxjXp9m1iKrkWTyjXTy9gJTQv48ia89143q5kpuJ",
  "key2": "3NBK4qkj6epTTfhmjKF7UtCf6t9XfZ213GUR2P6WiUDy6Kv8HmsfuEEYZXZ98Xa8obgiRT32kBAmDyYs6k2mrinS",
  "key3": "5jU6SGuuiDwZWQyaaA7tVg3s5Ap88zPf5vnUWZLxsfESXb8BEt5cZtz3E8jYN4wcR2XEmWGPX9JkAqvGgR7WZ1mF",
  "key4": "AdpiRC4EXJRsB3Y1apA83Mt3a8cXMgrn6aXTo5oB9HXak8PYHdcxENJXFDzfn1s8hJ7mPoFHdEFJaEaD7TWLcxg",
  "key5": "K2Z3MayG6Uo2V9a58cXzdeQN5UiFKTzysm4YGmPHp4ZEssUz7rZi3yCwwDf3q6BBNSiZJAcdgubViJFsBtiKQ2Z",
  "key6": "5A6pzhPWXQaTMqdgQiQXhrMjUtEQ4RoJjQhyJ6Pyix1CYv4s6M4hDfyFaCraDA69fUvTaw314C2H54XJ8KJeM9G6",
  "key7": "3hwyZyjKzN3jAFSZ53z7ztUYeo15nnKHCGRbKvesYZjUnYyzpk5aFdqLSvPf52Uzo66QkxUN9sYAiWJ7YjBtgiRR",
  "key8": "5MgoXuWfvjrsF9dA3sG3XHQT6BMYk6BnGqRFreAp5NoSTUUF9w2xgG4By75sTkauj8CAqZJAXDqYhd5GmGzZpFkK",
  "key9": "4AKEV7KJu1ujbbh2dbT3njW7w4hDXtqC8WAZFqSgdR2Qf3Dg8Vv9ZKnYo16Tmrgf7pwf95nksAuExcoG6qre8x5H",
  "key10": "3grFLXGgB4GbkYbRZKtRbwyj14GNkXHUayMijshhKofug3svSsbNNV9keiaPJVAVY3XoPsVBqsUXbLtUHkZkJp4V",
  "key11": "2e1mUBz3sqTvk48VQ7hXFMkUwG6cyuM985iBgMiAzQW2tsiWQFMeGKSeLdH4PioiqrZc57m8QLca5E2waRiYXi7w",
  "key12": "3Stf6vG4ogh9xrV3fUQQkZjCVwZAGbk3UYDuyutYexXzqV4AXFARVaBoCiRJFiyZymQHgMfhbxowTTgnqL5NcxHX",
  "key13": "3818aspQX31cEsuUExY2F2idxp9Qn1hY74chJMqVM8NZuArA4Pz7nE2BVEeYLmX8YFRzuZrssA5WWdbZQNLk1ws4",
  "key14": "3M1oPdxXQrWEb9pKqtk1r2AujCipUzLrKDqFzszVt5B1xMgreB3WHy8Er2tiaSTUcT6dZFE8e9rhuZYcSYWd4psu",
  "key15": "34ANgu6chYPTwU3AhANPziXosnwZcWPWfA3rjVgY6R6WYCxkXN3xGDvBkix9MBMCCFMFriGcZVo9eAr9eYQrU8mp",
  "key16": "3XXsFYeBZdCu94sLYTrcWghsDgyea58ZFnNaC64rcvQua4QWsgPEcav9jmDuGXWgyBnWcRdPy1HsaX213U8YKsdz",
  "key17": "3DSkKb1DNxJcnCzSEzQTMjdM51gx7SUs2HMUJEagsS4rLJMCbazKZgNZPoBFwTSaReh1ZNhjC5amNy7o1XoxodvS",
  "key18": "WiGE2VxBTJUcTJbDtuucqfY8QSho6xYvKnJVEyKuJBZfKEyu4dfRhUkr9ZDHxDxNqaWGXHicrsbvunrvHjRhrE3",
  "key19": "59qZZy2dpa1j3pminFG5znaVF1eWsHyvCYgZFBTmmDU91oAAXwA54JuxTbiUFX1H435nzCo8zCTrpy7nWn9oYvxz",
  "key20": "4dTdC22NGuBashtd5wTxb7UjRXPf9mMRmesJgUaoiGa9aN7aasuBCoPZq1o8KjW1PzEheZPZk19Wf65oL5CEXR1v",
  "key21": "5wtcFmrUpvcSC4MncGUqnqJesC4ft6h47rfkcaE9uzQScm1CdUMLSsvwZEF1ZNkARRTxUjujthVoZK3P2QhzAWqf",
  "key22": "2tiPEVvhFcwnqR4uBoWmoX2usmLMmJUV6wXMAAjqka2ijKcwJyBC4YzXpUFezxxKgRki1eEACodF7jDQGJhVC7N1",
  "key23": "4AikphTaXrkADHMxi4P6GcoQNT3DALR8VpLshTcySb85K4EeDaVA8wNWC1nrNNR7A1kFNBWcgxmoZaiamqxY37x6",
  "key24": "W8A7sgFvXqcWxMHwENX1FEZNc9bjj6YVuPfJjCdBsfo5Fp2BS8SkmtAvRNM9XpmQGBuyPA319X3WTECgjXTDHoS",
  "key25": "5DVLvcLfiUKSzcyEQqHQgZ3Aa8sQKCm3ENZLMjqPFDjJAeLHUnRvvqrVQoRPzDgBksJx4Dmpw7FuffSK32DqqyaQ",
  "key26": "3XMsGFREtF2atcZUZpzoyUQ1bmzvbvFjsr9A3VwgMatA6XHbfVJjt84vaWfNdhfHKTvNNP2iYQURJhjBTKBNuBQh",
  "key27": "4M6wktWb1fyRiy2fMK6CfC6LvGJTTbwgBYRLrGrh85mqieJotECEbzuimQEM2qV8Y2cuAVam28FBvbwzFePniGtE",
  "key28": "3feZeYe2xWsMeDZQ7jEF89ZkVAiyJ85nvFMbTUvrRC3v61HwtmrAmLv5uiAyrrtnJz2bQDkZQFtCUnS1idahJRYz",
  "key29": "2YM4CoTo3PgDjMQ7RJnopbhXAL81m6bHn8wbWAFaxNd2AaRLYSUXUkxQPQV5SBxnKYMUj4VHMakcjfvqa7vMcuAx",
  "key30": "oUXMuCQg17CZYuNbU6D4Deq98efcXtsxooRYvyxMjMD8gwwqUHei3GLEdjWPa9ThVkWn4EvEY8Gi8kiVHSKy9mW",
  "key31": "hnuMmMiv1pyJTiw5yry9nyimQzeLEDKxxQw3WzJCwWUem3wQ1daxTy92AdRbUEiUxMxCfF1vQEkzR2yzkAgA6EU",
  "key32": "3muV5jt2VDBuwKdCg3uEfUhsaWnS95NRybXqFSYZBGesCgQ2PrvTsLbMahc1NyaqKytbVWuSbFdPeYT2bTvdKzda",
  "key33": "5vc9TpLxBrhHKjGkXo4j7x1xZ6wEHm1h9m1LUgDFMrAhKUnojBKVAakYVg9UZX9Jd5zH7FjPm67WFSDg55fwGRMm",
  "key34": "3nVaWPLLd6nJ2NE6vw7VnkmkKjNXowtbxC34QjDDTz5jdBYtKfaqqA6CmfHkuheLFXMEysZ3uBwXAGpmosp6Kq1x",
  "key35": "sXBiwKqLGr26QdMqMUACZJ1qb2nCKVyMSSRSJioyZ93fHd8T1LqDv6wo8g3RarcTTBunrfknJMNVeEtCt8MFbTT"
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
