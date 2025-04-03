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
    "4immSHf2sqtJwU4zu18os6FLKcsThZabDCrdbcCqcwk9RnxRNi2w3rUhT47m2ZRZBdjGniJQjsprtySfuttMZxrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j5xe3igD9jfpyat6gnkDN2yt3eD3hknWhaWjG4KPNkXj2bjKVjsEWUH1T9VYKgtcm7jYhgL2LYcCjLq72eJcGQo",
  "key1": "Xgmt7jgJJq7rkUdDoHepz9pocM4K3VusooTRZpfNN2fqHtw2i8B9NJiMy6FoJR61LUQdiN2iTU4Q7yhMeQZoXj8",
  "key2": "41vmaN9g8zJ7y2dz8myFvDkLh7WSwhBKvYogZR4iEWc37i6ggqgaxxaJHrgeLCYMXBfuPf9sg2EGHVm22vhT864N",
  "key3": "2gFyv8K3EgfwwPVto1a2WtviNh21K6ZjB5BT2ocr4v4QBbTkDfq5mpbjdUuZr2x46fd8y2sW7abCKuKjHwhEGPU9",
  "key4": "4ZwDZ5fYLarDc4SNN4Z94j4y7VyXeBTq4tjVKjAW58ccLLG9YDxQKANytp7gpueTpNwVSdetdcccgkZgjpmLkYeE",
  "key5": "jDjQ25inz7qjqBSSbUZYLewpTzGQ7VTEKbnukWuvghXudPgDpmRtvitD4V1UZ9sCbYXvj3aMKmKHcJ7VQtLvcES",
  "key6": "4tMkKCwSAQseuGAmucc5WmhuhcjZW4hLnqoKUwrwzqAEF1gtYh6EdaeLxUrhoGMxmeweTbdfftjAgHWivCkCiNtJ",
  "key7": "655xCWRrE2zbbzNtBR5ffED3eJWs8ZkrZTR6CvikYq4ieXdbgmuaZAQ9JuUujUcPvsBv9WCAr4TBzKDNFybLdPC6",
  "key8": "432WQVaoMasjRHKHrDay1joQzttrihvbyVpkQDZV6CkFJL7euJszW15Zqi3kj6AEP2pNPmQmMcggmSqaV4cFjN3p",
  "key9": "2DPp5naryb5Mebi5EdQYJyCdwTzCFpb43PSbukeZhkiXGfLET3Xiko9KgZ8S7NpZswrxFi3ZPtxKtq7yR4bKx1KM",
  "key10": "5ABDkRE2ZKxzoEYVHRXi78ZvfWzLr2yxNmKZHKtL5v94tqCvvKPY6rHYCn9LLPpKgtvjH1sQhzXxcv4RaFD21dRx",
  "key11": "EHQRrDPf13cv3SETiBU2KvxRA4z2CDed4DLPm2AVkcECvWjM658e1xTzpN5AeRc7tJfVy7zfuDBZqFHvvZbQSx5",
  "key12": "2pLZoo9WtQH7pnom7rbFhmpD28x8jWyzYDaoqcQ9ogm2vGoCDNYTJWBfCwq6aPyWi5kBvXycoQqBRqMbdVTz7e54",
  "key13": "2g16yWQbBVZNFMBXZ1KuRvq46LJtTnwHTwSYB1HYbPRUN99jRvqiv2Mw8CF1tGzkD2EPvgDxiAGteEwmD6pXgHZG",
  "key14": "4dZGmpSzzghQ7peEuCq1rSFdVjAsNoHEtxqpnBSXJ2PuT92zCbASCTGLTjCyeDGppxX6cMLbuEq2DuvxHRE1bkZ2",
  "key15": "4ZKA2E3qLhKANUxq9wNi8pmpZ2V8ea6oBLirfM2jzHCimTLHpvFP3iTjnbb6Xm6WVjn7nGqGLHpWM56BETz45LcW",
  "key16": "3vXEaWASTgwqrE6wtrxQRdPZz9AF73J85ekZiRPToTFLFFC6BPV6ejtswp6AsLrM1GH9AyWctnwdQTNw7vPn3k2X",
  "key17": "2oz1kimZG6yaTReF4a2Wur68QqeiADm4wSg8d2Y7bx1bmdqHwiutiDZi8sVUeN1r5HTJKK13LeCTvGqWZYqKYCTe",
  "key18": "2z9YjrYoQ3eg3L6TEmYtDQXunUqUuovjrv4brU6mWFKAYqyAzJnAqybM869jn7z182HG5FUvRNJVaC8qeponvXms",
  "key19": "Adbx8ahbKgNVXxabkBTb9xj6gbVnZkLmgz28rx6WHWYZ2zug8xJY9325y2PjaZgrfLHxQkxya64GB1HgcArdAP3",
  "key20": "4MhaWVg4J7Fpb7ww7osb3wSBGtELmoxwmvbuSpwZSQRgLXsNqAgLqozJWwXCo9Umsi7S7oZsELuMuP7hGeA5dr9U",
  "key21": "4hviHyPotmKJKHST9fJdAFUaQH1tCyZp4k2eUxRYVxU4wyNp99r3nGg1rPXC4HuhTQERodS9712nGBuHb34uomWi",
  "key22": "2wwuMCzxUiXNX4AhmpHE96QbYtbx2miKNscwpiFveyCi4wjms4VR4YTDXAbGPNuanKUf9su8FMhb9FruaBpufRPX",
  "key23": "5imqAVC9niA5xaLyAYaLRyBGKiAqERjntS7rdqEdchQxAr5yguTBfUEY8VdyWZsM5YQq1Pv55SZtAoTWzCTQgK9P",
  "key24": "33ka5eY61R6boKZME1WeT33o3XWTebD5KRekj9FrrkWD3Czp9N699RJGKaWZh9Nh8XGFiCp511vRYESB3SnXF4Xv",
  "key25": "2BUomVUctB9aFS42amnnjeRqzMPz8j8Rqkk7exk6RoafWaw28MqSzZGnMCcuaT69B6oiWegA4syZE23KU2n7qjRt",
  "key26": "254gnLCtLgxBoGx5axm6rThA9zZMm9xs5mQRRQK3Meg3AENSLz5eqPmndFtVPHxoA2fHH3g89973PY4j9QkSGLwB",
  "key27": "Rne6UoCa7soYB1CRD8sE4UhT1fVZkbX75Yx5WJFR3mudw92aERnUCfVtAw1urSuiTyVRo9WTvBu8RM3ZSL2HHQs",
  "key28": "YUP72yXmHLUqqvJ3gmRADPwwhF4DCbyi28QDSpeyPxnSyNjDtzopUJcCKmwtmLvkY7QmymHgLsLu4jgBkherXeM",
  "key29": "2YjaS6imWFtt8GHm7wv4T49g5DiZFi3TuuKMMPvQmubi7c4F33483jkscDmz9AKLH4ELD6vrrAfkS4nPTWMX4X2m",
  "key30": "5U7kaSEtvgnEpCTj18QMzM6jCzztGvhNT99MJHgTt614RCm3HwrpcsJYNH8UNUWvAme5PK9dXMLVRC3kwrCqTFgP",
  "key31": "43UC7P4TsiRaccRxLy7aUYQVWMo7jDPaZwt8gzM3iysAPGeocAboryCvARK3CpMddXJ9ipxAidzqomo9N1L5Pa4n",
  "key32": "61sTch2HxGHE9sPpXVLQnkw7G8kroJQdzmJknY4na1RBF4TFyhgj5rZsenTX1SQznN5caCiLrPwWpyv1dEu3bBx8"
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
