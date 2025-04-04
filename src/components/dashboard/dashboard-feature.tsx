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
    "4UCJreYAWBuJ8CSU9m1cfhdW2XDRsYfDvHtfgyrGAV7xZ2mMzdBLhy2jPgCtWEHLXkYFUxARZvjwvCaKG8i1mvdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z7TLzDX42LKJgqxpZXVfiHZEBZbUpv9iyQMacwB9dj7MVwY12XTq1mPq2fM2ztP92t3LQkdVTbwrpMJWJDvoTmS",
  "key1": "26yENYqcSNkzt4hmjnWGYevT7LxfbVaCjmoAEUNB8pdxakaZmnNECHAFgCW1FdAZ6NxqFnX26gU8EZ6Sh3PyPq8Y",
  "key2": "64vXD4NWhpNLQ9FwCrYNku7uuXvviATkKQkgYiUhCaXMAjaVtSuohzdLPWasRby2uJaUmaBv2EA9CkJaPkGmY73d",
  "key3": "3gPXYK4MMrKqyh5qPDdvPJwbfvvwHRzz32pHcXGi7BC2VrSEdpxz9rQSfuvqEhPksTknyhcjqVRHEqj4Nb73zaNn",
  "key4": "3Ebu9xKQxF4wcdPVT8e7MEwVXktm9ptnZiihLJdnokQoC3xvwP2WSyvXNZbxiK5dRjdKYPgHTpFrMsXYcjYn6DfC",
  "key5": "3DQCjy1mUUvSY8cbyhxsRW9QEeJz8272H7dDazKnzGDHEwLjbQHxjH9jwz4jFWD9JgfMYcg9FDWrCX4TjsRQ8z58",
  "key6": "123ttBdKZczPx7Q8DV2GmY3SnD9nEQBnrnrfAGRHRPiGTFibc7t95mBFSjoKk1aSaxLNFoQQTq55JsQRV1EeEYEx",
  "key7": "3hy4R4zYbK3C2e4AS2uvxqEu1UYfh78ZRbwA6JWJPPyzDGnsLFJLEFupqKDxNufW9tivpDunT3wWwLtLY2f2dvV5",
  "key8": "4LVwnDn9exSyjFdBVWPThNfJR5Csepj8fWKq3XVLmGHzFgrSeHNxecrQsLXxRgrPRraKRz4jw8oqbFwBYyRfQtTv",
  "key9": "2sLyEnow7ryKFX4UkMxEWfLwGafxbXRvV4xMnWoc3LiSWjthHnJ7x4pZbrK1WRZKrfu9kwn9VDFdKe5pbuL9DYkV",
  "key10": "67WyKGopoUCHtGrJS3KEJ6RiZKzoJu6A2SoNbkkZ1gZebCqX5Y7gNybSrwyqXWgQQUy8aGUHa3q3wYwHwacavYju",
  "key11": "5SSyJMNyUtA8RpwnJvTbYFcuBiTbicxB7K8mvoSPVFzkQJKybHpe9RfTxFF5834fx1vjqArgJhHK4mu3S6zJuJdS",
  "key12": "EErKSjWhwv6nPkiG4tvGXHgo6Tw3KcggknN2uo4s4jm5whzuN7uUkDUh5nYZgo5phKFjEkC9ZkXtYteo3Fy2Udx",
  "key13": "3RybybaboUfucWsfz1iBXmatB1A4Tz1uXuiaui63rJAAuaN8zzS3pVDkGu5aHfnMLLXrB79PeUVo9y2mycawiJsi",
  "key14": "2poemAx5iVPRDpkA9Lo7vcZyGX3MyrZoiKYUiBMdJD4AhwZbR9WZcBZ22VxMcEKRqYYZPCfS9NTKGJzsk7aniZJs",
  "key15": "3aTjjbfKDzCyJXHL97Lhc5wDpyRaAM3zVtEDxSTNgSzznraczSwAXAi1STsFqLWqoj3Jm9h4zUwEnRVQtqQ2EpaD",
  "key16": "2o5Aerm6Xsu9C4gtVFJ9ZuueXbBgT2H3W3A31nM9YonD51sKNBnpBk6TBCFzaWnPBmvQsufjvxicaZEm2x7xttpb",
  "key17": "67DvrMqA8N6w83JCQKShyFwxBYrxYeaUp3yTpaTMH9hcCZpLf1hxr62Q9N9NEth6aaXbjv16eRoiUVcyoTCGgcVh",
  "key18": "46kUymmqoRgxeXJ7wQqGZxCmCKtjGAo5PnaSYERRz6iomFFQNAs9kimU6FLeD5ov6wtMxz6JTUH7KWgFaBv5zq2f",
  "key19": "3U2VBgARF6LRhLBmaYxyvpDnJEk7cUvJwiagytjn2CPTBas88bZvrKBsqhN21Pf7aK4diSfDK33zuUUXAaBGNpXY",
  "key20": "5eTzRazJeoLd8EjYiDpNkWgB31KgvVrGbjnVyrrC1STXQXPqRQg2rVPX2B1vtEa8GnqrfkWYcBwiGy7XctWg8yt",
  "key21": "26DPS5J3ejDKQYwRgPUsAx6Cfj6J9ab9w6sYLu4CW8gYCQJsAygmmtr6J7FSUcg4u4adyMqWTQETXAwxRXVEbmy1",
  "key22": "5te4QsHh1Fwn2RWCKxynVxKvmrobbEp6xCr5r2YrfH1NJijAMdQtiTanCd2aPMwvjSitGakWgAuAdV5LQFJvQwgb",
  "key23": "5dcCNFaNsmNoXdAiPtdrwkbCHfL1BaujZhjkxjXrRNotoJRZvrbsWrgDmspq9Xtk9cETRazhx25Yx7v9Keqd5nib",
  "key24": "27x16ZF89DHz1XSzTdK3AS8SWPvdag9KDBuoxWbbMdZ8yq2rrKSjWoZPgTqZD3XKUUnuPGudcCXjd4vi9JbTJpYm",
  "key25": "4dhsrUuquhq82jUcv8PCv2c7hDmC9wwHfkHGW5J1dJ535PN3UZBf9DWeh2Trdr7UZ5DhHGBXgcHtqBLp6Hhuv481",
  "key26": "3aZjZmtbs2qm14BGnfFtW9YSnSYbPeoLcamUYMtjC1v8D89N86sYF1o8Q6k6E6eVBPdnZzMiMjzCWrRnCi1bcBEk",
  "key27": "45m82PtaiqtidYbmcTNVenjVyo5MDpKAyxruqc6yuyQJYEFLEn6qPViRzWLKaBZ4455jxTyiBsPYms2GcUzJFXSM",
  "key28": "4U3cesw9T2CYbwGFdMfJ3m9B7opEryjg9SAFCPVauYqnqvmAFepB24Af6vtJxU2PjhYFwbrbnM7p3ZX4NLDVXcN3",
  "key29": "34WEjqEcMKVGrFkHPb24KVB3rbs6bQ7HMemZgPJXF94RiqvgDvU4UFJDS2iVim9xNMUb6iACzD5QPdjAhgBrzpHb",
  "key30": "4kBCDzmyqmPJPm5LzmdzRAS2c8YeZYxdNqqcnUowCfUWPaeLVyFeoVcmQXQGabZjFZMC2jtrrNuejaaoT2txgRPU",
  "key31": "2RKViMTzsu3sAjd1Q6vZKze6yV7pnLBpiN1RjMkSY3NVUuNUBFswQkgYxUKTTtigoXD9NmjfpYMT786dj4X3xNB1",
  "key32": "dvZaBnZ9CSeCgnHVJdHEVFccqr2SZhymx3WDS2vwhNobLQaZZ4PLbCgy3KMsj1Px5hQxSuLihEJJFhJcKDKkUyc"
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
