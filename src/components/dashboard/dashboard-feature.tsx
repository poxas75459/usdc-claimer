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
    "3gn5b9CK9p9H4MF1zaashAM9XaZnnMkEhGqCKkzRxxnyXkF9621vdodk9JKeDsi8zFAgjgR1G4HtLxPk7Dvyk7sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48jk4owh5x9ND2nei4JXC7DxA8HtUeSrhg1AcD2JJ5oCacXzHCGAkRS9SeFXHcYLs1NeJceuFnXKDg8Ezr6MpKmA",
  "key1": "5rfd1TB3m1tWsryNDyNxjaWzc3D7rkTrDQoMVAm7yXQ7hVMRn9kJebVWhHLTSvhAygNPF8vQc333RPhjoLtRDJcJ",
  "key2": "2eJ4CqHqSNQwdvxu7nWZYfZ52Vqw2MNNHYfWv9MvnNGbxZ3YPFTxkA9DBK5K6XSnbeh5vew8kHi8mmA3dayUwtr",
  "key3": "4aDGftzsuS1p5MziAFqg85mn3DCm2dijGBTNL1SPpzTJiH7brhnyhBa2rrztvdhs5qjPu4xgzBEMTSBHoFcJBKof",
  "key4": "2Ae39TrSPukvexK5T1XSi8hZahPapw3wun65aZhcS9i9AewJJYL9STs4FMuZCdJbz9jJh82DYcTZCJUyxzaQb6Ac",
  "key5": "5b2iKVWFSSfijKV2tk6rk7GCQWNt1PXbYJqPsjotPjs2yb9SrAN17Ts4KXpDHsULsjagFHDKAKpeLo8ga1B252TG",
  "key6": "5FR7TFCGLvTkP5n4BbUeVjen8tMqQYQGNyvpTuU5pbK5MF5nmkATX2bA6pCpn3tnyBMAoW8YMMP3M1wN5Dvrnr5q",
  "key7": "4ygJf7d6ASfSP3eT6FfAsnDXxFfgWjWSW4pkuxFraYvbdj8RbDpXy8CvYsHfmk6y4L3DCJeUrw3BnGzMA9w1CdLC",
  "key8": "2ZrBCtyZXkZ2s4JLKPHXW356nkpFGdQHWSin9UqtutousnVaWYDezMfRTc7mHLYPoSfDZVSqJBi3KVe2aHrY4DEF",
  "key9": "63buz8m4KCN8U4Fnm7GURxH3krHSsyjzNN18MxDhvs6162dcgMJXFv4xUWGKPESrcNrGEhwg3fdEnRiBAhUzz2gK",
  "key10": "2DLfvWEaL1XEh2fpfdADchhyD7oYXJstc21QW97xptuDDmWpGRJm9XAxxiavb4n8meWSUHoy88wum1nUtefDFC3D",
  "key11": "3PeFNFPLaCWBGbcSWyg3vMM18ZrvudMHRL2qeZxpcLRZWc4NJkhZko1zMH8Wk6toPZpvqRvTJ3BKa5EK5DsSvYqP",
  "key12": "MeryLgisDg4fRBATRhU1LWfjapd9VDwwgmQXXmTyq9NXvMSVcrGCM8ikfqMKZzJxrdnhoQC5yjPaNgTntn2Fwmq",
  "key13": "5c43Gu1sUEWCiHjz4nxj3hVBGSAkGNyFp6JT61z69D39s2Zs3GApvC2dj3VyQfj3ecdS4oZhtuWwtrLJNXp33Rk4",
  "key14": "3wghu6V3giMcUYTwRqAwSzMzaKDZ6Xis7pWKguZfSvhbbqqo5RE1z3mF1EdMGWzZyC6Ayk8BrEZANVSHJ2TmUJM7",
  "key15": "289NKBWZbmsfe6rZHdwHgYcGtpP87zxWS6RJcqJTqSwikmfmkRPBqztcoKZQkA8kzfGdpQtbGi2ue6LBCt78Tjoh",
  "key16": "L14GQxsBVmh92XqPtP2JkBFfbywtJJAyrSkH39qGv9CwxJ1VGxGM6fMSmXLU7DAvBhUqKEEALrF9HZQ4zZKNxPm",
  "key17": "5ui9duNscvV8rHvA5VMaJHkh64eD24Eycc9FmpWFdoF85nM2WzD43WNt95Be8QabXmJ7TUF8tsXZ4h6R7hcB5H5A",
  "key18": "58V8SSFbufZbxUPMGCz6wZHQwqd3A9naRvxV5XDieQSxRiB8jvBxF7jBrppUbkjTQ8wChdGyJfgxXd5cc4jHQZmA",
  "key19": "2M1prGWXXNdfH2z4xxrSegRhfv77Pcr5xXcgN4B7avejSPTgrJCiBACfr2ENdv6dZokigdyCRXcEo7rhCBvGLwQX",
  "key20": "2TpTgvtmuuJ4hebQ8P78g9Tj16SQFeeDy1nj2uGqtP5RENj8coa5R1ascyuYTYoCD8WEwJv26SRbXdd6sT7sQuk1",
  "key21": "5Cy3gXVVEfB3HQs9Dh6TD8fHuKxk7yFQ7uHmCfhzoVVj92o9YB5iFe6EGLkk9Wy5YiZpmVddgvJ5WQuz92b7n5Lb",
  "key22": "2QyugbY44r7ihnpi4GFQ6TfzMvurrqQ1qF7PqA4xxgLwRMbddWgyEKixJsuegHJDFri45Kc9yyaYwB7AbfEpUL3N",
  "key23": "5uBpa8BoszqiGZShVDkZg9mTjMQUNxgYPPBoS4B75xtcep5eTKWHNmQVTZpBUWpqMdJBvK48cmHNvk9jjrGSDDAi",
  "key24": "bYuzAK4miwmnEwtgWtajeNUy3aY2cCBZ7nK7WaLrW8QHDCyBKDoaEoCcq8r1nGTzUReHdjegQvKqiPTHWmzTj1t",
  "key25": "2SCdxDWEgLD3UeaKkHqng13d4d1PWWhVG58e5tEseP2AeQSSY7cNdVW5p12j5u6Ysv68h7n8HHqS5pgsiM2gsGDc",
  "key26": "2NQsrcDnuWrnsq1rj7AbTpTV8wsBxM9SANw5WUtctUaSTBmcPdUARFPHVr9UJ1kggNX2dL8wbR73rXZWXc7bk3Lt",
  "key27": "2GSF5nHttDUSkJ26nN7atWMR1HJBbGaDww51qBxMuYvVSGmScBmWm228YgjY98RsjkMNnGQDbyXuM3tXsRY1wsN6",
  "key28": "44DggsnP272bhde9Py5poEAR7ENY8okNgxPrVhKQ8VWR7mFzMZyfC97yftXkcnbdQ7i77DwC83sxWj9ZpSRchFr5",
  "key29": "5X4T2aWMjXpveT1sknPrBeVm6rX2xuf8RmjjHroUn4AKgiECPdTPro7uWSMv4TdpouMoxgsRrc3ASgrgbP19ixBz",
  "key30": "4NGJ85yZicSmD21cWw9QpP22PgaJCDXZUq7VbXsnQUgpMJKJdt8NWE7MxzZFCR9cnyuGwTnrstyWzg6patw1ZmQY",
  "key31": "5c1cvGjmbWSh2P8Fo1rmmWAh39qqMqdPYjfEgcnHKksFrGSKEQr4t7Bph2VKwqkypcnFFxtG4Vf6JQa6v4xF8211",
  "key32": "2oMnr7AoKeLZwTfNCzbt9cHx8XoCzGW9sukv8JiUz3vWL2HvnZo9iAeeWcvE9JTSx4NrxgGtBwktkkvFkj7aEr2w",
  "key33": "v8MurY6wAjuGwwXstikomC7kyLTBqx8M1XQEBAXqJXM3SzckieZCsfk9tCjDD6vF9tXtZedoSy7PAcQiZLdNrt6",
  "key34": "3sPcn2oCYVUq47SnG2eb6HPzv6AUFAe1uWUizwywzkJ19DBQMWLNhiHekSg2uG59uQaB7o2RxEkX3eMS4MggscHR",
  "key35": "xXgaqJPhifCn22vExys1DhHeyvHhocmxWbwS4abmbkz32Dsx86uPMUvjq3EkCrykbBsdV4xvZacY1BKSa6eKC5h",
  "key36": "2Msx4AhWFKFvXJFVsKRWzftjMzeDF3sRX8YTarfXewuJVHEmMak4AmApKeQDk2j41xDYJQLjBduChYPpeMEDiw1q",
  "key37": "5uQduJpPokqRa5MDyGd9bFFoJxNHsBrF36CyZjEbGzkzvn24QEqSaG2ZzXuXY5PWTHsYJ9WUUKDeWrv3SZPNfWWv",
  "key38": "55cKAsK36QZtPBtDLkc7St4F2tew2NgfPviX7KmBEFwFXH4gEFkTG7STUdhju5gH2PPiqHYaDpKZDF9hE5Bz1BoT",
  "key39": "58ujRvLZvxtRUz4gA4tZTD5PF5LzkWfF8tCU5E6hkhZ6Ua95wuonaVN9aFPYTrJpFDxaxNvKQD5n3jzXeLMWHnTA",
  "key40": "2dst93PxhwRdgu9DBgNHV1ngyMWRmEPo7XGTQikBViNExnbzJL96C7Y8EoruWyUyByKaAWupnrsStot9pq1PrTPS",
  "key41": "P4ahTtZGCZwXKbA6Pg4HRyDDhGkaewBdaZTwMMgL3dGmCpH2YkcTrPb7UWfaMEhZGHi2sm57mJtDM2ezNJ8GKw5",
  "key42": "51gLFGPyiWngRiDSgZdDeYhRBKa3jXXYDGCbUD3FRyYAzNWfip7dd69qekznzbX3xMShN4DKACGQdsjbHYp4Ng7w",
  "key43": "3PfL8rAGZvfjrEN1xaA2CtQZUMgJ2CS7T1T6rLYVYVYQUv8XoFndSRm6e9aKiztWYx5gR8D6Ak7C7kEUat2vRwFE",
  "key44": "3wsiHzAxWwcAYgVmLgKaHn8zZGsYQK7Qr8XNnKdfeow1k1ebXqWjG3bHQoML7UK24sm4xQDkoSamq3uqUcXo1PJD",
  "key45": "3uVGNhAs6n9f13dRJxgUZcS5XY3fe4PuCnjY6xB8WPV3Wq1pQz1u62BCDkXaYF7QtFot1jKDTuvu5W2q11DJNJ4q",
  "key46": "3NHkYvXzjcQkTV6gSZdKGDBkDmpmSoDSZ4odbWYnAawJGEgmjWGGLBbQ6V8x4vrpU17Kg6654xX587qKkDf5KVVv",
  "key47": "4TeM1EJGmM4ugcivEJzF7d2oVwPo28GVCrAKjLUDrBNUEvwESP9dsgsbS1n4ZXRzfkjR3364EpbZNT8EeLg4349w",
  "key48": "387qHBu3sVMC8YZzVuEKz2ozmD5Am647uknrTkMKfUjLgFRQ6wpGNRZiUREg2NRBPf4uV3nUVUSUPZDiyMjfyFGA",
  "key49": "66aEFbeuFSRtbN97uCkE7aFJQHfYF6NZRqeLeVqkHHuj3VY5wG8Gojhm5dZGh6EBh5hczJbDsnyQLmdEujTykS2g"
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
