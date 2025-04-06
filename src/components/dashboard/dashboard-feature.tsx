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
    "4i7dbfMfHxbgn8QoaGgTTrYnfEKtE1rkh93GW1Wh9ScS3Mwy3nmaWdb4CFQyfgpg4KidEH6WCzQcHBcbombEtoyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ztNRLQiGwCVQBtU276xPobpYLsbqq79i4YG5f95KsXP4VmrDWHJuiARVs4pN2UpnWkczGUrUhv8bbe4SvishvpR",
  "key1": "4uqysvpMqqFyoKoY55oWaxKkxUs7PG32EYeLxGWSpKhZCfVKSaUHUNrBrhnMKoKwCzR6vUgagJHZAnNymJMUMWdK",
  "key2": "5qeT5rtxhpxnFCYTwoJhNzrr1qVhDE9Y2TtuZUYQp1yFL6VtZEskF2UdmyJuXD7An7unr94Bo9wPzdgxvFLGWu7v",
  "key3": "4RUSZ4t8nW9Z8WBzDuFZtoeaVsMNBwkzzWqFeQQrW2E4km44dVeiFKfGXvvS2iyf5gDpjN5qJmpHjBteXTKaT33M",
  "key4": "3uBTNZRME1aVQw3SwK7Eo1UcmgpZN4myUWZVvMABLKFAssRzbHvMshgvFvbCSMLJH3fpoCr67mKxWPSCC5oMSrGC",
  "key5": "4F1py8E6RZkhKwJbNQUDYdvvGdbU5WMiRFcpAVYUHnjC1NukH6yjzBc4TGpWNjgEojVeRUYBQhoigqULrUjACLFN",
  "key6": "28WuVcqUMcwfhNdQpr4itoeFFgAg2sCJEDuiygkKrB5ichUpARdfU7yt6qxLNBuFtjzEgVDUSWNJvZZEiT4V6B62",
  "key7": "2xt2dPUHQi11sDghG1BBCzV8QVVDbmyAGectnPDHXVxVTUUEmCJ9wq7wfB6RRZ1aH9ohJczWkjAHptMQE6jXwW1b",
  "key8": "2Ze92cKtWRCDUjkjvps4Piw5uSLPsKqAeRA5Xprd147Hz4mF6TohyLXubp5nWmKYpYa1xSexWDbXYTZTB1t27iHk",
  "key9": "2KVkb4qSCdy2SXAWjGGYAGMib5U52x2mMLo8izccvYSUnpGemYGGQFe47bpXc1U9WtDpQz1F7UdpfYwaBmtKDzo1",
  "key10": "3eLABCRQc3jcXNbCFBtRbeAeUbKmNhd2r2vCbX3CFYbdzbaWH6oGbqcExC4v29a5m2eZ9Myo4twTfS6oVb8nR3my",
  "key11": "8CSWuRTw76K29nZFiWaUig7xGjB4mayjjhDPfrqmJLZZCFVR4Mt3CX9jy2bgFqGVt1aTpc1nfHUC26wnVsDpC3e",
  "key12": "ZJBJCVqHkC19Jrw4jKQmvNQjvvjC6W93xcG7PoWjf2cEK6k8mXQJr6GbCLyNQt52Tnqf6N2bFhiexUKALjFYYpT",
  "key13": "471i3PHVxrge7JsccMaBFSpxjdWqG4QiXXP6xDKGHrhhxr8Z1FWBUoh1sH1wkQ5vDmuyPjKtkuXLxQgo1UuzGX3M",
  "key14": "4TiqpmRkFWyE7bzhxo5DGNjCng7N63D7uTS2VzYQUAAJHjTnqmcorBHxwywVs51pXYZ4BxvWR378vtKWPMuY2cRp",
  "key15": "3GRGKBhk7Q13CPgYv5tMNUteMYYLwzZP5vPrrHLwhJUFYHDFk23qhdaHP2GgXKJFrkgaV5iDgcaEKntUXSqDZre7",
  "key16": "3sJT8dbWJUEkhnQZx4rGTXtSTSmE5jYFYoXxJpXfErzwhcrgqCYsxh1gCA2Wsaj7FyzgD2HQHeXQE6sYZvqDp8d",
  "key17": "4fvFcRb77Pmimg7hqyLZgKp2nw1Pe338B2EyJMjNbP9Q4k8aeAA5CsWYmYLrLpRt7LjHuECFHBzG6Py88QjQnpcE",
  "key18": "41zMLEVFhhkFwZMkt7FJyrEQfbWfEuKe7aWgnHnwujaDKXTVSU75KtyuBXKHtHiSErgKoUqSv3cqUdr76hG142MD",
  "key19": "2b1GK9xvGqkuv3g7Ukk2fBhGPh8hTEg5mnD9UKSj1Qo2Zrz2ZBqGismAAeU91cFbJmdVXJCtaYtbN1aUmWYsNPv9",
  "key20": "3baQHq2aqyokWXKtqAEsQmvtbyCW6cGUpuaZqCU9GySZxYdi1RnFBfAHwiAkPza2UnufXJgKgLthwphpieVJkLh9",
  "key21": "3qYXunHeFEKBbokKnNwc5FMFNE8BprvBCFkis2tJZ7FReKxKSi9kZyrfv9FgCSAWT4D6M75Rm5SDemaB1KFkLM7j",
  "key22": "G7X7f52WENrpaqLwWugLtUr38q8NphGVG73DmXKrWenpoxdz5vYds2zMFGBsSDFCbFvpqwbAP47NnJ5uvLjBXCg",
  "key23": "3zEi8TF96pK5zb7nncZqPVz4XTbnPdgvLiJxWxNFETtdbhDqAyx4xmbCTDBoCwEHy7dbrFhehazfb6cBS1bFBEgo",
  "key24": "3uBAehefuHT5EiQXMD5Pi6kQmPg8eKq1tgdSTcTRkhEhDEYxsojVXNuFCBUp46c5TT5qv7ReSRopVRo7NeE1Fgmj",
  "key25": "2A4bnpnaS7DYcQnzbjNgeY8jwfGKiL4GAW95584whkSZPjMYpttPwC3FggoZ7svQTLrABCBtqzXovi1TDJyVjMhn",
  "key26": "YAfnL523zZoi16kU8t9KVsym3yWywxbgDXZ57JybBQnxvJZW22hvT3NsZekLAPX7U3qUznxmiV5BcN5GzkmwGaJ",
  "key27": "38SkjStAXWnXQufevMHuNLgrSYw4hbFCaBNHWYkY1bpket7wXd7MdVSg3kRHRgJJhATynfG8M2qedwPN6e2zetKs",
  "key28": "aYs4UgU5tR4W2AYBFdnz5TgK594f5BVmipx61nto2ABKRWiozWpy7rttxAPcuMaKsAr1pQD7zQxGJeEiUuQpa5P",
  "key29": "2TNxsGfBfMnE614A4dryQChXNWMCFTjZsAw3gcBMbQvMfBzsk13djn4z51uxnFhYWpxRuRWPQmxA6VLaAXuPH8uJ",
  "key30": "469WagdVwPeGLiGnWXMJZ28uuY2PYZBzgF1WpmVRcRZP5KMwbHpz8j5TLXtJMychxbeTUo36CzbcgjV9iRZZu3e6",
  "key31": "3auCT6ANcNuawSmETsvHgrcsmKGSTE47fb19sryXjz3wQvAAfAekwwZc8Ddh7bC17Ygg4mUR5UQiD2wRzrEobBA5",
  "key32": "5GDakeETjd8NraAe3cr2qsGUoZrHazGhXDDTmPmgXZpWoiQPapaypz89eCZmmh5jcfZjzvpTEemB44hpj3LTMmw8",
  "key33": "5ya14JrSdtteo5ACxVEWmXigq2A2T3CBcYAzKUqHr6Afd7yqQGJWfzsEn6zQxqmjSC44uPYFFuimyhkgTTUxDkbb",
  "key34": "4oLsGg8NZzHCX19BSS9jPzjNnjs2pwTKmbqRb9fN8fWkfahEuT9X7u1aTC6HFgqRZxgHsv1W7Yd6kGQPHAkYnSBf",
  "key35": "426Ft5P1qnHJaNnFTkhgX5Ak5wcdbbVLp3aVNVceyW6E3oaNWmcQUcaKKjWqGgJPg1fayDtQBNuMVJ4cr9TSmMNv",
  "key36": "5P5FAovrP8xnZ5JKNHQUEtNycTWwrnwQHLoBqipGo98tsgV4PsQotYKpsdqSapU2iuWxFdGCTLyBRqe3CaMEA4Sk",
  "key37": "5NxB2wfHQ5cgnYneQ5ty9CzLw1HjMGJnu1Edg39hcCxwoPKoCXZywBuLysnGbTUv7FMu71f6VMH28T2FZkACsY9T",
  "key38": "25sMQxMWZqbDSiRNRoMS7ts67JEsRYtJKEDdda8hazGjFCvWRLD2otmhEJnjswVJEXex2mDRX3BxfBhMiWi2hxzD",
  "key39": "5BGMMdEtWgUHdn3FCEbb9dPhDmJjBu76VngbeRKBT2TSTUvScXAcRKDiL29nZj37PBQtzwYoY6N7sdyzWmrsaDME",
  "key40": "UuBLW7uYUDgLdYKE8TbiURXMPSbTw5dXTJGFHZ5Qa5m4JnJY6oYKevh6iAgJfs4tnVw2JtKPniGLfuq3czLpa4L",
  "key41": "5jt7GuTohX8dq66qKhwjogPN91Z6x2VNVn74yfcLsA2nq1V76AxPfaLqEgWtz6Yqk6t6iUYVEP3RQYetAq7M2HKe",
  "key42": "38QxhcyvhsxafuLcbVFwLGaLws6xwFnKP1UFbSFn3H9RgJd3gwRF5n6LUEubhboGkNDBAqDirMfm3iMNjXDca5Jr"
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
