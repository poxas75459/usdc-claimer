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
    "4sbTSqK5caQ7FUKDqSQcsRDA4TJjJDLooV8veXfynnUXAJ4LUX2jxz2KH2iTJPdgmhRdNKjJDpqAM7Co9BNQHGub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4it66EgT6wYVNUCdXGaAEVXi4rKZJePDaqDB3wdUzpgYPDPayniUnRopj4cRJdJaaPeeM79Pq4X98aMHXMXGh1kK",
  "key1": "2vizk1J3G4zjzbsdqkHjti4jEFyT9yozcg3zMfXGiyuPE12vGh3qug9Jz8nuuxNMp9DDRoiseEHVqBt8XCUjiBWs",
  "key2": "3rwWvV3XiKKiJN8wbbkQFjzczpfGXg8sLVuq2bpr2ovcpAfr9Cm6c3MbZ2fcemGDFjL8hvaVMnamP1QDhF6LfKyq",
  "key3": "4gKxSVfDbc4uEB4d5EC6VxMQ1nXADh2kWCUHtxFP6hCUncmEfQwsZxee8v1c1HkdKiXjWuRst15MrPvP4wXNS1Ru",
  "key4": "3rj8ghvQE7oWz7vL8ecL4cqk8XgZrfmwvKBVCvWrGqsRQjwxBcVSXExYMuxfdfk4hFuMNVYaSccWnYPxCrBcQLQd",
  "key5": "3BdENapcnagEWnucbe8zNruHrR9CFY6EgFrmLew9L3TRMKska1NYUrSV9jzHEGUYc1SZFu7RG945Mjtusiq3pDpE",
  "key6": "4UyknYTX5RT3nBFhuRXrDcfk5x27LUdTuhQCztw8hxr4M9FXVbYpBbzpy1PYNooFKXyvp49eTVYicxwPGERxxhHb",
  "key7": "3p1YKESmajTpnbBvW6wswsR1WqFrptukwVetCK2ZXbxQhPVfW3asFRt5zfkrJm5VjVaAkgN1pH4iVmvWj8XjuDZg",
  "key8": "5Y9mMX7mgsWMiWP79ZVKnv9WMzbxPSMrSa2qwZk9tf8BJS92D5f2JqjN7pKTAHJxJCmUUcFf3cMzBULSvigviJim",
  "key9": "E72eYaSbXQWbdbZX1NV8iEGa8kRikR3uQceMUG3Wos97YsXGH7k1CpSLkrMYKDWgDpZHCQ5K8G2QiXsqkd1MT45",
  "key10": "5GgSZCSFyNukZSmm4KQsfiF42ZapoDdqvSjpJwKe4cF2J8aJqor5GmA3RwA6jgRcaJPbag8RAXMa19ZsfgYFJ52r",
  "key11": "5BDNR4cNXJCLUpv1oftSHzZJfZseeZAet151aAwxdXTK21a1TUgrs7e9FQWMq4PHxK9rGdyyLbQDBvqkMEyyki37",
  "key12": "5XUgsxaZGHRxxTkNKYcU8kNeLLRKjMZKDtxNWybwPFGuiHY7efr8dL9u4iX39bNiYS68gD5FzVSgTuYQtaRugnHY",
  "key13": "4uG3CqsZdEK35EsePfDmv87to1wLPTjuLC7RASU8E3XjUmtspGY3hrdAWwXNf8nTGtKByGfttM1jEvbcZwPofGDp",
  "key14": "4gdwRMtjfgrqbC7Ghz29jr3VfPAcEY28m9LiMN1ozVnYmYhW56CHbpgG5u5eFwMosAUnc8uCWBqxwp2MYdtVrDqy",
  "key15": "2jUX5i7FtWEGyaqzWeDaycybM9zbdpYHE8vWFYkY6Hodk876BX4zFSmY4MZswP2u5GZrb1NGPEjFD2yxWYVPLE7Q",
  "key16": "5VVpqrFAEa3mHdoXvC4ZHqtmKV6AhasL2tdWS9ysY2D2hMJQUkaRmA86qnUXXeXYXrqDxv4xkZMYArX6bU1syJBS",
  "key17": "4DgPLFnTqmc4RCy6gdtngk9xmyhPZ5Fccj2Ua42NPKbRycYGSgWuN3okRpsaD5yJeQU5SmiUTzWnRoXuCVZrB5ob",
  "key18": "5gHYPEfyTTMTAtAZ7Aj2s6hHmQK3pXT6Du2v5m494tnaj3hzXHzhEPrrit6a1EdeuiwsFX9b3fhhhJatEdyZZ2BH",
  "key19": "oxRev2YQCvkDbe6cW14iBNkuun9bufB7A3muC4RDxzF7BuQgSmjGmTLmSmJBZW6FcxMDHmsEHsxPfr11MPLyMRh",
  "key20": "rFVg9i5R5Da3k9ocq8Zc1zMSFMJqqx2U2oUMtM5NCwX8m5GYSA3XmsqdBP5NYrju5uPVNZazu2heEauohHmnkcN",
  "key21": "56m6pTQHQSMWRzQzzr592PgKiCg4X8k2fejCRwep4wjCEqtHDeTordYL4pbkKZka6KgfcCad1hTmmJHTB15Zxewm",
  "key22": "5RJvmzs5AdLvkz3QNXJWAThn4jRcMDQNXiCUqkzadUoRyuDxg35AptE4HYGkwRVz1eWeP2VN8KTLR2VZ3dsk9EEq",
  "key23": "4pmbeKZKy7YCGbQtg6Gj7Zorfj7WscnqYUhdKZPDvCXJ7YwvuBqDyRztNmnBbAiFGKtES3vRjJAPFwXo3C6hzz4B",
  "key24": "36QaoFBuxKRUAV39vu75R5Lu9cWw26b9JdWFHsxZPb9EjDvDW8kxU7AfAb27iQHxeC5brTsUX2ad7oUdVoyV8BCE",
  "key25": "4HvYSrhHvV2mUF9yTiCsQSKZ5jsACjmkbbHESUMTiRv9ut2Q4bYELQor9KdeFML73v2kPKqFGLHcY1Raex1HQi2c",
  "key26": "37Jt7qitbgnWoq4Cufdju1FvzdAb3wXiY7c7fVLxnnnAQeA5vvqPqutLiXhPpLXpUTSwrK6tM4sfWcNvxQMyh8Nr",
  "key27": "5ssHvCmqG6jaPd6q6HVGaVBPsbm1cnd28nZqmCBLv56QmVyWZVUeK6ftXrw1hzkymwrJQLj7FtgizRKcfTkFqKk4",
  "key28": "HANHgniL1EsrwG3JPnqiccWrVjt9wvDgVWDUVKzMnp38ZWqffjV5gkjbLi4pD2TtkxHZJnfbqFrveLvK7JN8V8p",
  "key29": "C5vAZb1sU6AxBEL6pobrSNjXxQ9R5N7unMLsrm9kgkBaraaYLDrwzyUTMxeVvT1codEA8TZ8mTdZ1XqZKmYvFpx",
  "key30": "3nvt7dRzRMQFZaf1Pc4Pf8Rb4hhgan6EF3FyWCiWaGvbAP8Zh1vU2nKB7nsy41AYrm9LQcmAxshc3fvSbEWaxd1G",
  "key31": "3qtXLSCnBaJqb7LWjMMg3TUPiLAjYDazTqbhrAeZdbBcLg9t6g6eit7hxe4sP2fYoeFkRn87MDKimD9mRPYDv6wN",
  "key32": "3GAPjLfyYxKuv2tLrWKb28M3AJHxvisqNdhwn1FsuzLZbepDSyBY6DP2qzNysDdUTgzkQzABbrHRwwejGy4aCUrn",
  "key33": "582tL92jnT4xLYGuGRkLcd6G1nHqZ2ADwKmWVxowSLRppqHo65wx5pTaVHsFPh99hFDifCTE4MNjdDVzh3vFLzkn",
  "key34": "5MJK6emZzn7JZLXYcpmidiyTLGhHTNRc8bidHuHZk82vFGK3WJ6B4XrzwAMKFf6mEZHbWuV2vSunXw281R4f6ciG",
  "key35": "4SXfTby4tUHZ6ipa9cKjFQccubFqvJ7xLQwQ7KKZyUksJM6wnrbmjFrWc3ESp4bjciVzb9YEE3M3pDf3smajT4GF",
  "key36": "5mZQPhkQ4ZQvt2JLQsXA9s8wLzpxQHaEQSMM5hAXd2kDSLJWPKTJd9XVepSPpFrSFPu8p7uLiGDjSHc3fmcko2Ji",
  "key37": "ZvNyqFHY5s3jwwVroADbSuNCyXGoEEK7NywPeaHFrUq4CGC78DG5WDMmhsgLe9T7sKKq55rBsBBRMnQSv9rkMRV",
  "key38": "2KNmstHx6KN73nQUgq2kWdEGmNQ9UayJEF6csbZaXMQ3E2zGjEyk52a7mGc37P9iSRAjznvLk8VWTKzDDC5tWDo1",
  "key39": "4QJwxBs5dnmuUBzS7ERLRcGfwiqpETcoGEfUn3F2naLvPNmc6hyLu2Fk94L7bzi3nX9kPf3DXBB7k32BnAin5Zmt",
  "key40": "4j7DBJsar9dXZL98JygbaWcWoQpoSwW59uM5hh3R578P7MxW9FyUvitTqCb1T6qe5gC4UoUqa6753bFh4GSeJWqV",
  "key41": "5pebtjZwJgX3hpAQJGdv3CQep6EWmWvjzJVqqpZ9sN7eGV4iT6vcVDhnG7Afx5YsewmuLB56a8x4xfHMvf78y58H",
  "key42": "pUxcPm9cUTnCFhpUWCX7mECZC5o95WYyhJPETW2YUP5kN4hm5oEKNRTXZrN6YfU3kUXLshDreEKQBmi3jwxYqmy",
  "key43": "5z1UQehCcMYVBn2YQ1nYJdnGk45CgmBmSk8yN7Pb3qheoHqfzCqEMtg8yDZ8KVZtjPnVvRWa5cSuedU5n9dMM2Fj",
  "key44": "qs8ME4pCXVxgJvzGBLDRN8wCrQaEwUCyUYoxPCbhazS84S714w96pQopVNpJbGJMXVC7L8ZLBWBEbAsijCo4wUJ",
  "key45": "4GsARnWdvRJTbXHfkvzajSzctMRog82U1Eb2kQiDmBzzXYfBeqLyfR4fbMuTHUBFuCYkWCULfU9ePNmj3jSjyCCc",
  "key46": "gZsr7iy6rDGxHcbmf6P6g67oYzPEuLdrXGV8f4ZCHmxyKwjJos44NcAm1s9LFZrSwJcCKXimt9CS5WsE1L6nA2F",
  "key47": "2GP4zZ21gYGd211WkJbexeFeqn1mVTdZDt5pzZqsEiZD5EE8hSBZEGKGy8K4tgSEqxtzUvZcgQaTx2ftgNejv8rU",
  "key48": "5tun1aUo1AjokK36L3g8ppY8fDsPp2B9a6Q22RDDfUZuoy3xYY5rh6kRwSky11qRtxUYjdyKg4hSUotuVWNYeFai"
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
