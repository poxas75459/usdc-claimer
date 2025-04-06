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
    "4NZGJYrUbrhp75rqyK9mH3wqfnSYjGq2SE1T9UQjXsrBJrx8o7b7d1fp5vxEcn8oAqufuQniS9n5SMx2TV5ap3Rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n1RQagRunfv7R5tDac5LZGiCp78J2Ew1NNKZrp6BAMTmjxiLk8NTuwwJfPkuKFQAhS9nKvebFD1pwA8qBtoSL4Z",
  "key1": "5uF1yyRc11fjmSvFE47pLpLocUY4KLC58wMx2Y1TQbBv4m54xAJecaorTHjja7NKSxWUU2vfYB5yYd3GLHhPcdXx",
  "key2": "5kQcn8foVRtQQuv3sXmrDLYCGsvMzPZrWajRQFZd1LnsX3LEzgbKxA46pNcJnUqfRRVd2Eo5wTjjnwpDUdjTXzz4",
  "key3": "34Lt4zwceN78p19KZfCDY2USWqaQWro4pNd5CConPfMrYWZ9oAL16GEvaoQLjvdBRDHqKDQT2PgodymDdwLTLinR",
  "key4": "2ius6gxz5fgYnbKEUqXSKgQe5wHYMdZkjGHm18X9fDGNXLWewhpbPj3f4hwGfgZcLfTpuKX8Dx8q2hXzqZjeRUHM",
  "key5": "4LRjRrYam8b1Vc32SbJeke8m5F6G7Qv5AGz893XhFZQf3ivnxDKxKQtjqFc7JXjoWQsLY3YtgyTj8b1mqVpfTSyZ",
  "key6": "42HsJHUCv7wgsEnsGfncLQUC6Kew6pPZYmMCLuPymSszWizkKjmCX1HsPpChXLFpk1ThW6nm6ByeSdox89hFr1WU",
  "key7": "5GobWTcKawtgwWhgTQGTzAdd8VPgaXDBPnhYFGsEfqTHz2sCQyoaNogdb24BNtZ2ZVbKHRZvmxjrMY9MsuHnnDFV",
  "key8": "2VMQA8JvoCgL7eXjoXhmJsPGZCxcyrwKEizvzDaAbxhqJjZAmonjBYT5CSAoXx4LezE1aKMMaqZkNzyJCdtrkbHK",
  "key9": "sVsSg657fomZhiiJC8sUazPKnXv3nw4jJyDwEFG767xR2v3XbYH9DgV9JpAkEFWhsN2HZxF1GFjA2tYwUAmtHkF",
  "key10": "5s88xSsPgxexZvEcTZibGFsRo9vTqkURxhhH2vUXx6J5vtkiYd3STJmY74GC9kbHoEvzGhAYK8CrxtZ4Ykf7wXAo",
  "key11": "4zHBd4rhNoEFHZHJbdCX2vULmmkf9ZSza73uFBKtDV6ayhDxXcm2e228ya58LUuQ6FnM3PWYGbS5QnV7c81LrWNa",
  "key12": "NmvoUYMrQNHAGTNsNfVr4UMLqCairCa8GRaj6Es9pAq8qmJAQkuxDDTrW9ktQZ65CRbvyjH7FZvY1ooKX8o8Pzj",
  "key13": "5PeF6pZ9d7roc7dHhdZgyrTLmUjpPBHQJPpFPWV5NpddHy8kp5HdRt4cJ9Puj9KbZ8V4yXxQyTHoeK9kTVMKXVyt",
  "key14": "4kKh7JqQBXE3yk2TmmMEuqwVza327e4Y8kaF1gaRdianrHJMpnoNBHmmKwHda3Z6FJm7xiM8DcLfZgn7uR47YjiS",
  "key15": "2o7PwEeoF6DriQdNqzGNRwMy3ojYjHLxZ1nQbpyfR5sS9wNVQuSJTXeZXapwqBiLyp8vFAs8mCbdXBDj83SrWWQs",
  "key16": "RBcAdurdSM4eBprYX7Z4hn7bCFLVgwmoUCt4z7g3gbpsnmp5g2AQUaWjYyXatrhc2Pg35BVjAA5HwRvMpSQkLaQ",
  "key17": "515WmpGLqFmdq96e4yXCKX3WVjkytqQbpx4qTSM5f7rnoQZQax88ZrsgWa2njCEzsiqkJQEkxvDHVzb51pDnd11j",
  "key18": "A7NjTwMtiR1Qczw6PnfGMbjrWsF9bYfdC9QfJbhkF55UdRLXck51z791o2id9XHYhqij3yjobD4jkWrNmpvtigK",
  "key19": "4BJdzpSk2uFv3NRxtJux1ty3BHYDBYpTd2EB41U22dnJCUbeEsT79DknBi7vMioUvHvFTRWKiqW7pwM2cB7ksimX",
  "key20": "2YZfq6m7VLuRhM7B6xDoEfvHY8yfATPN9VuWYuZrT9eoL6anLvuoC4c6sk7BmuNUWGCXLAzPsvB7MgnT5Aky5gvS",
  "key21": "5N1kCSYtNTfERvLcZ8AP3Nnmo3mNvh6WL6Ya58gduEZaKv3Mh91ov8x58Lzg7YaSNcx9VfCZuB7uGWNJ1yjo8sqC",
  "key22": "5GxmFV6jsk3BgWRtuX6Kt9FaZ2rLZvcQ2xoFcdnuXFgE81omQU7WomtFvA47dg17hdf3zCPuuV5ASgoWRJVFakcz",
  "key23": "387twhZLRuUBtctFYY4RxSqxFUhWMMej4bkgBmPavgxXWD1mi9jhHP5b5D4abG4rVc38RgJ5A1xyuy7LEqveNuFE",
  "key24": "4gUUzRAywVWtNMGKRB9kreTCvZ4CJwArFU6cELe9rLqBkivyw2bhEgKZ3re6odk2AeaxuP9DUVcf4gqarAxCapg6",
  "key25": "HJBggGK6M9yrd7X6VLHdGdDq9GmKBECj26XUTUMe2kRfGgHbiVqEhQYMwbGANw9LyyS2pNDDq1bL9KHdxqwhYwL",
  "key26": "2PHdLwiNw8AmTysKpa98yUbALZXCQayYj8U1u9EDx37xBP4gjH9vAtcSdAVBopAnPT6X7TsNkSSbba4eK8X59cjs",
  "key27": "CggH9oxD3wLCUjRRKpQgDkfZNp2LmGqKkcxsdyaVJETS1DcuTJnKkGapZY26q8FhygbVXmAFifVB1Zs4gv37juu",
  "key28": "5ThZtUo9Nxsa6b26crRW4CMDJBW9FpPb3kGiqZ1hEeiTfLsfovJcwadnvERAydzkGXYERV6Uj6wSmsdkdBs7FVvQ",
  "key29": "jaQb6jueAE7a94LTfPaj4ykdMHYXTh29jCF1Y2xxjvNGuZKWu4JCqGY7sMMT8f6WvGxibRXBEeLKHTqWxDrVyrb",
  "key30": "3fnKkUK6mijuVHFYvXCRSwdTm38Ni2tUzNA6Z2Hx8LPYXWGuYdgE8rantMAC5BxwAkCHYJVpVYZtLGgaFcHhF2B2"
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
