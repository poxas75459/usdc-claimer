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
    "2FZB1TqWYKkTUPv4n6Uy1gEM17ii4yVduvdiKGFUMyYiU7Ahu5tg3vq7WbtV4PzY45LMgqyiyCERFDS9d6jDoRS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mkiTU9KyzsHTrr9fnbVeERGxcJV1h7SPHhZ9NerLJGBEA9oa9Zpdq8WUsuRhxsbrhWuvd5r6RA4S3BM6aJDVqnH",
  "key1": "CX7C6VYiBNHvtrxtBuAqJVHrjUBYpgj4bJo8t1ApqvqRmzRWmehUQcS5TetpwBp1LYqo6w68NVMCYvyGNb2eEkG",
  "key2": "49jr8ZPZqQJYLbwA3hXW6YVzkR2cqb9d8hpjBpBWTo3XaTxce2GUDHKtcCZEVJ6DKMfSLZzwr1jWMzQnaW4mpH2a",
  "key3": "2g2wFNEubs2QyXYbRZJrPXb7yCwXz5zyoyuERnfykDp9YMrLtqGGV2qZPSRrXHfasCKhAsKpQSUCi8hg4y31uGr8",
  "key4": "5M6MtWm2aqhGHY4SmCcD7VXs4aQu6SzxyDFnyERxaZsUFGwr64cJ4CLChHZ5tUBa2z3Y8Re8b9RBh5EiL6chiCT",
  "key5": "5vadtLJgREEU6tbckUCgnQbQ2NhVRVDaRvxQz5WENZoqwqUB2rgg1ZiZZdXcj9D8Qfnarcf1WH3rrjZe6WYVyMt9",
  "key6": "3SkWBKaiZZKZgpEP7TBxuossUCqFgqDpVeVyqUnGgb8F9Q7WKd2jxXyfKRq8oiP6PDVgcwbvmH9Ezfnxo3pzgMY7",
  "key7": "4BtkVwNyVvqA85qoPYZPUZ17iXa4Ck4JSHevpenRCnELskaKJVhEGB465KC7i5tiXaekip2KkY41rTD18RyXaXQa",
  "key8": "PAGhheL8z8R9ZP4krdZphvHbsqchLjFxKcU8D3qdszYszKdQQjadiLdSPuEGCVaFQJc6DFbcEz8C1zwFuHc74UQ",
  "key9": "5L4JxnQMx3oSNThrv8KCTKpLcv4NbBCgc5j2UpXXHMcaXy4cdqnjm6PfFNMfeF2aLELGTyGYcwfdUjwQD6jvq7ot",
  "key10": "5rbA4xgYGwTWm6etvhtugq7mbTkmu588sxjuKJSPFJeNFpYPsF4gZUyJLm4cdMkcGcAVASgP2i1sxmf8yYwA4edH",
  "key11": "488YnMp99Rx8EVRAPt9fDZo1B5cBZ3ZTJJZ6Spf3qvmp8DkveVqVkp4VW8DNKnWBSdF9LpyAuwVxdt3LVrfUnAMM",
  "key12": "2nV6b4q5WPg2w7rSLQP7Z4t2RpNVNHaqHBWowBuExeWs2QbamrGQChQ7UzaJNkfGHBf8MHS5fRUtNceZTuTSmf2Q",
  "key13": "2othPAHEJ3v9A1RLmFsuWNmHAZ5G8NiWnTFnSonREm5u3EGj41bhn5NTm1ETVy6ary7fg9zo3NFvw7PqFMngbGAV",
  "key14": "3Jp4woiD2AAiewG5Ld2uQ8krbZe39LeogxFNXBtvp2ApfB7rTkhDnJGrw4VaULdQPq9ZsFJNGf6AEitS8EzZkn4v",
  "key15": "2f37vGVT99FsRAWiHXN4pmK5Vey1YwoyxrJ8tHMCVhvLd1ZDqKzhhdWbu4unj21LGhmRePTMuGsrw6dKgj2kFUNH",
  "key16": "3HUHERmS96WCkGBUZCeADX82HL4Ryx8zx5yoXksrye1gsjxxsMm3LVKxfWTgxoYTpKWtZBvYgJsWwkMXhSo8Dp8m",
  "key17": "5rBM2uzishfW7UPJmS15LvgXsbSXK42ANm5R9qkMbngVPpBD3Hp5tCaehs4YD7LfpazZpet4kEEtHwvEXTw3zzc1",
  "key18": "3j12WbqbzSayx6mphgGgfC42vxE7aTNg34pBPoQXyErAdkiX4ZGnjuCGeGBkYFTmjK3q2MrVwuQgBkF5pKyN4bcu",
  "key19": "4AnfVDd1cJNCGPUWPpotu9D4rV1xm5TpFMbYeHC6YLJpxDNdufL7mPXqGyqGvEsUfbaEzfHbQ9hQibkd3MJ1ojN",
  "key20": "TKfuWM8pCkuWEbJkCLrQ76EVf2Y7axnjy36VysqX5TfWvoTPV3UJ6qCQmifb7zm5Au6HcrjSL6Q6MyU6Qn4bu6a",
  "key21": "3z2UEubVeC7RjF68zngYwg3TcGcppZthRGvRcCxPEnsiNy8kz6E57L5jCP1XYZy1Ct8scRxpkSrWgdui7qsUsCir",
  "key22": "2JReg85zqrKZesu1Tqqw22hkdN2BWyLaMzyRNPQe9phw95ieFdpKypiBcUW7Wec5zHEsdZHLCq6jbGzBBQCtTcLg",
  "key23": "2B4TMqcwtUdzU8kz9HAicXEFGJHs3TCiR4ZyLfXLobauH9Xpd1jq6N5iPgN2FEQfuWMnamj2Sz5xTukaYCKbhqSL",
  "key24": "2VfwK9d8AjnUuf4y2pGEkSzvW9vS4TppggPYfGqjwQ4X6haBCC7xPdRATwZKLAmbK1MfZhw2eCNhYnJtAYYA5AKd",
  "key25": "4e7TQFyszVQCj7rGCfVxU7t5vka1bHyobHEZUkuP6giCUWkzC3KMztNZE7WK6831dMP9bUfAWtRjMfGudbFLpzfv",
  "key26": "2szQLUpWkohoKTXZ1segPVkNsUSH521QVCLAxV2pjQQUb4EXFfxKWZ7e5kEMKvY3A6omACNH5Hisz6tbZL5Q9Na4",
  "key27": "3i7EW4tNm3arwwaJf3uVbRcGFfUpUgRVhKXQYwHTQRPqP4nEdKfgP9juHy7gNtapZY8AnbDP9ipapirDmKQGYk2X",
  "key28": "3ZnLBPR5R5hkw85n1Bs9bMfQJmfGmgmx1vUg4Ko2VoLH6nmypsqGRxwfp5SwQMsjQrYaoGPVemDsb5hV3TAGtQdC",
  "key29": "3ugJdwufjnpBKNN62gGsdtCgjvzcNVC25tj4c2fiEfcis2GoDE13tNRgreMu6QGjz37d5p1pGDQQDBqr1YvnwvwY",
  "key30": "2kvdUWgfmWAiRQ5kHCN9sX7s8Dkkj6kN8XfirGJtL3bSc7AuBedh43gZ3QFuwSeYFPPMSNNztQaRbrvTj6BemoGF",
  "key31": "2GzYMpPkRoi2WFwPAymU5M4d1dUiSsuDikA77ePgonREYYNeLcCj2HFdRVJ3xJJcbiZoEWaPeAspGHHHJ7vhHNq2",
  "key32": "TqAeurk7FbZMQDmtZsYWu3gReDGqTMSGvXNh81rT9V6ZqLqbVS7EdNxSvwYvXCq3njLs4KDnvTmjpxuBpQPfT68",
  "key33": "2wxzYvRL5c1TJezhK9sFfpPEKctgvj8Hk4EpjAfZGKx29aiUKPEfJ9i1QMkvzmZxB3T7xzEjsJDgdqwmb8uLxpju",
  "key34": "5k6EUP1iEaFvb8RTXLJitiPctBTM81uD7ahSQjRshr67YP3JfzNSQ9pfRZZ3vcwFEBm4YaCB2pbQKvPUdtgq119L",
  "key35": "23HUd5XLwYrMrGtxoypjfd8EcitAAZrQGVJXvzDMkt7aazLeUfaf7qDT7CevYnfY8AuA87FqKL5u9UjuV8cWUfrV",
  "key36": "nJgBXEhGDXjn4t4QH5gDDzMtbkuojSki1jpo7A7ecmccFvvjaxw1EmxuGNuFcew4BZvJ1RGMduBjBwjUrtpg84C",
  "key37": "3cfzD1eVpf6z2hQhGshfzEsJThFZVqNTBWEf697g9jQRxiy3XPLevADkTNtqH9ProMSToVDdu95LV9Z43oDyzz4u",
  "key38": "2B5Q9YqZFwftEVqmfa76kCbNnKQNmA1MyUV1hJAtukkY19VX32s81jyq5UydEvxMY7uBYSTxSY557DJ5UfsAVN6V",
  "key39": "wC4Yu8r23CHUFdASDmXHHedPNtCwkDCp6SCGe5aUetrVY1TKGb1o1Vi3YxgoTGno4SWWVctzg78k9fuLKUWjvC3",
  "key40": "4dedADVW5dTpCEwYZFvooDVvjiPovGWV9Ry6w7L5jgzdrXDaythKK7BtQR2G7zsZEE2nxeaZacr7XTPQAmVEkzPa",
  "key41": "aouTE4bZVXsegnSdWwQWnzseujn1pJAaSG3E7sPfDXDP5nfAo4G3FjRr84YF3mvj9qWokvxMHfb4umahgFnou6h",
  "key42": "5Qc3qCi8j6Yf9emnAicix2VsMsjr1hdjLdLKYXwYkiEoJbrzyTfypViDeZc9wSvv1kmqBtWxGVAUs79xNsgdYLWd"
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
