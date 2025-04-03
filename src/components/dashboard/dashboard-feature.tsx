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
    "3Aj9QWzyZToEd4qfBTGV5mWECvHoWdSxeZQRHiNYjhEWfzZ2kpWzCZEVXa7DaRkX8aUPzmp4kyEgS1YHJVC2poSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29gSj7X5XPpTr1GaFpbZQdJNpyuyNE5nft9J7kz9CcmYb32C3vXVNVaTyH7ikMixq8ZmyiXepDYhrmAjQ3XqqQtV",
  "key1": "29vs4bTym29E8SMrE2A7HxRPGd9FrBsffSVHAMnRuFyaFY3fhFf9pj7nueoXAR5oTrxKDug2YNikXhx4mN6RoJP2",
  "key2": "2dwBhLWusH8J1mwiZaNyFV7Lk31BD5usub4nWWpAiH6QBq7zf8sKBAaPYRzMnkHHkeyTZDffujx6t5uujceut5JE",
  "key3": "5FwptKiPEawVHrT3yfP7PzWGH9k7cMekY9kv1bhPM5JdxtKAtshHdC5nN9zmB8rMqYbVS8t6tzYwJuMZRbUdaKCz",
  "key4": "2jMfyphv5zoX661cMJHDiPyhkJpC7M3erB1fAurts9nSe25aMh94BQmjMqD8zXsAQXpuaTySuRTUtyZpnRQqyYN1",
  "key5": "4wi4nkc2dM3SiEYWLqMEGEe8nMFJeaXzoBgjhCMEaxnK3MTi4N6zMhtEN8VxfPPmYKVfGQ5bK8isGyShGh4qFhCT",
  "key6": "36R8gHLFngXkswKsX79dTNrDZKiwSgAM7gwUR8t5E7cKfLZZqxnf3goX27aSqk7JktDLmsjYSQZu7CSYVVNZcRa9",
  "key7": "3FyPo8enUDa9qGcHiHF41uzWE4BGvbgaqPnNKwjp1K5ecr6yrtUWL7cmnkqTjFopax6mbLrf6TL2XgdyN2XewAU9",
  "key8": "5mVbVKThrrZmkdktRKuHWfM9rUWpeRCPTtUgQBohj6yPbBtaW6v8mxNTqNgVeRHh3kDnQF1aCC9QG8KUPb4qVBPX",
  "key9": "4dyCnhJhANiE4kKSuqSyxDrvyJq4uwbA3ATEYz9EcS91BCwLcE6dFLATsbSa9jJfB4P8UFF5cDHNZnP8RQWm3i7E",
  "key10": "5uqx9BytkvTDTz9SXEHcbaFzjD6SkTycuSpZNkjJ2aX5JoQZDdtmBUyYYEzLPucFWkLRBDp4v8zjW6RTRAUo1gv5",
  "key11": "4hcYYLeuvnfPUhvZwtzfaGEfF8AQw9tR7nnpUnemg4DkzP6DZTsaxJp9kSvfbBYEQTwMcSRsWKprknjcwETE6Zri",
  "key12": "5sMjLPZSxpSKhqM62NXJeqcujH6ZdEg9T8rZVSpe4NWG8iCbfQbH9mQ6aBCzvophk2VPniC6WqbviyYwwt3BLPVC",
  "key13": "5H8t4aJvSRw7FWcPhgFwyLjmBurKWVZrYTKmrKAWKX57yj1tiu5wmtMX1wBZFHc5f4K6UpAY3YdHC2L1QdrXi4HW",
  "key14": "3mZ3wpPm1ufKeSYi2r2kNJLGrU26bQ7YPSKvCHNoZDh1y5935aG6ccpWWCRxEj4neY2Rf1YAVCehGfMQKHoHKdjV",
  "key15": "48KfYMDycWXtogXtjj9oXGXhZrNjbkF5c1rtCNFoNikiukCLtCBixKhbN1oqL1Yaayk8eQohAwYkKawL6ChMEYbq",
  "key16": "3U1rzeJWCP8c2GCFFYFTDE8P3GkRbaJiAmu6tkW96Avi9e6cW8Zr2Qs9TmXDMY1MUM6WBzvo9tKuVG9XA6bU7xJw",
  "key17": "do5Po2JCrGa7SJApyhJhbe1MVzkPbsqFMZ5ft2ykRcxUNe9twdsEumXodAa3SCwhcyF1RQc4gUMFHF2fANVeLfE",
  "key18": "4DmbGsp6rFQa7zJKNz1DazmchwCbLit4TWUh6oc3gH2f5vjr4gzRfZFCtVuLs3Aty1EyQwD3rndXgfeKzE7dXhnv",
  "key19": "25utdt8pdpbn7ABqdArZMqxnrDuZNH9SvYngrjoSgsz9obBJQVxmTsQqfPitLizwfE1fFGKJ3zRmFnKjDBAZbVpa",
  "key20": "3KkbENmBUCVq35kodTftm8b6XrTJWiChW3cekuyXHjM2BpY1k5B5q9VyNRpw9D792Pokr4XYCDKJ9YktR4tuxR4a",
  "key21": "3UjxA7dsGTqDcehdxD1t1t5zFUgqrkmNLakCSb7JWUoP8xrrnBwjuYpmypWJNmdQvw3jyYDWb9Ys7q3s6JEMZrr9",
  "key22": "5CLF4pf2CZfdh6RJfiXJ8KweZVYoyKgDD8hR7ijVu7DbLAc6CaHLciQSn28cVzLcbnKcmQqskB2cRVHmiLNFHd5L",
  "key23": "4dj7zaxXk3p7WUM9bEeM8emDnYYNueX7BNu3Spgupn1CicfSWmNxHfMzoUyBH435rxVwfsdkGVvH7Armi2u71oim",
  "key24": "2p1aCav2R8Ap2kr15efzYjau7qFxHU1jxYxn7wTnhRo2AFXHEs3hS7r9p9u7Hyv6ESYV9VCqy5YFnm2vdDbsgpyF",
  "key25": "5QyEix7cxqRB5Xu9ysfvDyeSAsLqiLgn3DaCcT3PQ2nsKz4wFtj9vPZ4EYoBYg4yysHPi9VFX4R2SqH3cEJSp1n9",
  "key26": "5NgU9Fde8646ihCtZPRxgX4iw5bpCUAVZYR4oEgscMS7d5Us8FFdq6KtdaApSZJAiyUonxoYSspc6yhzbuRnNtLo",
  "key27": "5PgUhdXKYSnNjRBJcYX96v5L29J1gXxs7wwhggXtt9n16LU7ZHgHwF8y1EhvoYkQ8otCCYSMiabP118j7Z3WAYpY",
  "key28": "3Zj1au8222kwzZqG7qSP4of3CvD6GWkqBjaXbWqCJtjjivfjSJYHc1QQyRfquWVMjozTGjA3pPhBUcJpLwkpJf1f",
  "key29": "9m3RcwyuRtCd1e6mpt5H6tBxqH1LCgNNDyCtWMJV1jV7o9s5ZY1c8c6yZP9ggw2MsEZWhHYDcP4CCriikdwCccx",
  "key30": "3a38qSicFhCUvUwmVgYmkJJ8uv12umNVky9SoKEC4wvmkt87Kum1RnNxneVVnicLhDXQVMBdhgxkdqDhoNvwXNzu",
  "key31": "4RR3u9wjYgf6kvZZHa4kbJdCHGHSd9JcGZ6FEzm8wgo7D8CEHL4vQoxX48VegRcPiZRnE5f5CtLcgnAGAuaJ2Dpz",
  "key32": "2TqcWpZfUfW5GHLVqeVCq5HyyPDWmU28esapXpeGtfSktan2Mrj5Z6V3nL2jigEdvp8Leq8kkiEak6CXCqSewb2S",
  "key33": "5LxAV8snKUgHfsrFvLhYpUs5ouFoZ4DM3qbkH93x66EQZHwsoL5NKcRE93Kc1RgnNfpgq6w2cHciSjFtnhNJpLJe",
  "key34": "2DxPbVHdBEG57ggwCSdmSR6eL1WUtBa8pvPXrsXroQDYJjQRd2rGDFgbYi5wAoDz9Qg1EpXzSg5g26ZLFfKJnujm",
  "key35": "5aYK6pzrTZLoc137CaUDvr9fHoLviFpSviDcHq4nvHiyY9jAWxSgNyVnpUbU1zX9uNpyL6WvU1EMMnNETvun5tMg",
  "key36": "41FsRan72ZGeztmtBACnSFbcyfLy2C3Z3Nu8abVVfoHNGH3EAZ2TuuF2MQbyNP6nH25vn9RbS4t3X1FYqa7fJby9"
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
