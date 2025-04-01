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
    "3SbusAX7rX7YRakUsJ4C9xcBEWDuR3hwUdCNUqc1JZSs6KZkHc71fFwttDKXaJoj4MF7nMpHgTN85no5Hd7t3kSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qb9fe9gtMQucqhhPinBmECw7QwkpvnDUngyLSBDs9Ar4r1JoDnL8cV38NFJUtJUNG9Ungd1FNT5quMYjDcFnjjC",
  "key1": "25FvyfUSnc8uakQj28e6tGarcqanuiUUcspnJgTxBqWqfAHE6WWcccivrhwqoFG5UUCtSZuRaSexdiZzeJCU3Nm5",
  "key2": "4NEDqL7fpqTfCaved9NnL24Qi18kvkEJPRXdudnaYEwjK6NUhbdLH1xCDMrRdfaCd14imTaU8VyEYGHjqnFbG7UA",
  "key3": "5NwaYeNKBPXZbUg6GX6aopeboaEZydNvPjJ9LaYdHZtxdnJm1At1d6MhjpmRyNUUwx7QbcH8gKcYA6EethKJx7f6",
  "key4": "3nVC1vR1cNeAFXwKw125gFrvo8ypbk5sPSTUqDqoNvc8X98Fq4vjYMPYyedKNgtnwS5KjQRDsXigNkySxNEEdU2y",
  "key5": "5SFpsQ7dDSt94jC9EXceoQzrFpBm3X4GT2E2N2K76C1i18kNg4dTduuRG2FeEAKgjnaMHp9hGXG9DsYYGhWatECU",
  "key6": "5qov4pcvtGshPpMQghgZMzKocG1Vv9UVFpZ2dKwcD7c241pHE7giPY8KXbsTyANo8wQNzcJ6v4gtdSaybmkbUvVN",
  "key7": "2Gp39uyNtpzmrmohJzY85mAHPVQhMsszEVr4y4AYc5tpaGghVy8PZZhY4T6em2S4YY2U2xoGCPfGa1w3eQnCQJtH",
  "key8": "24gte8tZfHRJhbWK7mhzYyJo71nbVcYCP7TNa5rdy7C4sQ2UXSqPQ16xHtLhJ2hAoHXsF8JKq4jpDQ6q7nGwV5pz",
  "key9": "5kg9ceE84VFKRR1KU4sLsiRu9rwiDnCiGJrZqfYgAcGkUxdTUPFZGPevcJzbmMzodtNacHfVdeaEiAaKs1q1AtsD",
  "key10": "XCZwhUAEwRHTVDhUtzrd6RmPmykEvvTBrbfFHqnVSC7VdzcqeM7aoNfhWxFbfoTkMLb1YqqbwkyH1biBGBdKaBn",
  "key11": "LGrBrRBhUwLK1i1NnNJncBY22NEUyKpQGuhZcifUbYTrqdpUA4T7WkB9cDsabvdpSRwVD7FFR6y75WeNqTkDBet",
  "key12": "2Pzbheyebe3Y4u5CXXJY8YAMuSvLBfZ7upQscLndTmB8KThMj8xgvoebp3JC1n5uQyL9h2cmt8cuV3LbJrgYFGuL",
  "key13": "2rovovpyNnLi8EbXEJZvswJmH8e2kBmxnW3kdJxdpgJsLZ61Diosiha2wV69tk8MuTmiuR5JhKvjrMZpVPvRTWbn",
  "key14": "2ydT1f4Xx64UCiJFW3voGQYdu3ZxWRtP4TqhBmoj5ddWcoTU4qtgqwqLUW4Ln1JXaJWAY4PzrVJGJzw82ygX4cDz",
  "key15": "5cJjsp39pswkptTnU1PYkRxPtasFdjDgQk65vAWtDEDEV632ZJzaDXGEXx9x5czhBt1F8Fm1bSUdA2uRQn6TxcGa",
  "key16": "EDc6yYJUKmVYYzHDZCZhyqcmxP21YKuiatPr2B6DAdRrpsEe8Bc1eW74DXFrma5MxJDBpnN29YWuAE3eQMQg8aC",
  "key17": "5xkTDpAX3yUnCNBunyYZy5ZDBpb49PC4QQA3GciT9nRBA9QhFH7mu7VRns3StzwV1ddHzfdyeXYaQryWVJm4ZSDf",
  "key18": "R9cpMjjPRhB6oQ8rPkJbFjZH4Zo1EqY1jo3EYiGpXaswv9qeRQjPSvByCDnLZEojADTNjvzXHVGSKzez83KHhmr",
  "key19": "3KC1BhJksJB9rrwLM5iafYggYdoMquRD1sfZLbbvExfDhRmXfw5TzgJ7vi3jmXxqTNRD3zJSCstAbx2fcRZnXqd9",
  "key20": "2StJCMWtvTj1vcPA5X6tAJV5qytDvfNPbg5bpooW7apZmxhTZVwM8GjDhPoXFJ6NToauAXfpn6rMs8UfDCdYnpjf",
  "key21": "5R2YhufhG1bnqhZQLogpZ46HCrwjPw93nRB5rvgJwZUW1ihjXQfwVj5jsAUSMKiFdnKbBrQ1A1QHevdoPT7njKYh",
  "key22": "2uC5r8RhYerzBd4U98a1CnJHniNH2RQiFhkdeoZMcXMWxEW94QuDw3C9uc9c5SYpqy4CQebB2qgkdRdw6khgrmhe",
  "key23": "2EGPkBY1jGs5z6xCCSW1m6t9L5UNATdx715d4JhpBLFrt4pQvhiF8ui4fohnLLvdoXSMCp7QQVfbn3pSsYDekMqW",
  "key24": "4RU3ZYuduAo8ediAc4aNR3dXRgpE3b3uAj7NciDCXjPxH7cLKVmvpSeHvE72Ah1K5CSodZiJ352w7Su6rAV9Hay",
  "key25": "2oAqeV6Eo89xgqfCScL5hd94zdUg96813DhCUnTe79Sf7YN3BbM45mSKzTtCNPUkpwe1tap7poBRX5q56L9vhPmH",
  "key26": "2NaXoaTKixKB1zdMw8ZWguPfAK9TtttW36zXNrsFa55EntFXrASq5MrDiF1thgP8o6HX3KpiCyW6jPNfBN4DMGwC",
  "key27": "5bJPqC5LSzbSkWR5FDnSxXFdbZaY5Dm6rULaaSa1zS6pDFp9UVSVLXcFb8quzwUzRKeHAsdK84qv4tRH6BveUEYu",
  "key28": "2TRij4wxFZASgqekwzUWfQiQbztynGkcGdksNPXriTCVZgDm6UXZGSaT61dD1kTpVoDeEBc2XoicdRu7nucgWGZo"
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
