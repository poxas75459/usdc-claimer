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
    "31gFgG8hCxSotsrJLc61nMgmVm4XBZBB3Zsxj6U2m2HgisnsxTGdE3NCwnNqpe1tw5knxGKZCu1jvHeXGTUDYMbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vxmVjKL8NAK4xarJeSS4kRKtfGYZW4rWTWyCMghCVoavEHSNWo7qpBksdBjPmfWuRkUipey4HR3kTVR9bm4JcxM",
  "key1": "3YR4boXPA8bQbaWjhqiCr9BMKNh6fY9QFpSdoXag7Zr4kofmAMt4MPB1Y7Lq8ZVGhgecuWgj62PUEzmzS5mipBoF",
  "key2": "4yTJPoZPvcFMH1GnCe4UtVyqycbgiARhXFv7sn8EjWZ5gkznEkdVKJJ6spBQ2v5FJUaHC3UrJt6WNZyYqh2SKAVr",
  "key3": "3kH25xPXL23HbXmPHBccnPC9JQb9byNvxXVirwxVzaVeXmRBpYMPx466bKypxnzuhTh1uwNXLArrEndcVc7MCY7G",
  "key4": "2FotXoN9uKpH3F9xfzsYqhuq7QFGjMrbrVSCUh2ZBqgheQM9cH2ACkbBWi7BDRaMmqDJQqpoPNAWG5jCjzVhPK8n",
  "key5": "EsrWkj6GKZwCWhTBbYJoyvUDwjYXtL6WYddqFc55WYqKE2vNCcQhyP8UYtN76BwDzk2x8b19pk3W4CXs25eDfHm",
  "key6": "2wtgxasNXXdZgLRoVg52JpoqiTrLNMDkaA7ZTt4mYYU4iqUnXb9RkfnpzmkKffE1bQ4psqV9b4VJQu3b1Mw2yqjC",
  "key7": "41YfzPRBge2cqcDYDP83RXcVyFEztGPVJzSvGhTzbdkgBEb4WZHHjvqsT3hJbcygYU8dJg8LXRq9Eti2XjLL97Vj",
  "key8": "2bEustGcPn3tbKFuacEz2vuyvVweGZZ8wb31TJj31qycBgTDKvgDP8eiPB67PBtgcyhJW7ikRXBrBf4pk1DQDXgC",
  "key9": "3jLYJ3SsnKkDcxTGFfED1YmRzmGLWuEH2SbPtM2fKeo4wzkQLHfPQpwGaPmuyYyzNYGt97yePBinC5WC1zCNAbVA",
  "key10": "3qfyhkLYbRX82buwwNujo6xLrojBh5pRotgZTq2U4jYER5J6v3eDizXg56CBHSpUzZhtzfKXQKAgjwihnxXeX7iN",
  "key11": "4EZaVCBoRcqY9AJj9DmVy9EVYmsusT7iurkJtLhrvn3ptCWe3s43w5rqY65bJNNQZMSPjxnELNp2GgBqcxE6Mq8N",
  "key12": "4nvAkhb9FBmSb71WkcVP6NP3LySk5xjgBykg8QYoA5rkhLLn1N9Mvr2oEXPGFb5HhmnAikVtef3hzbRwXTFsqy1K",
  "key13": "4DcsvLD7SsA9Ax29PmdKZLpXist4V8KEcK8aZ9t7T4PG8ujynN2MQcRAA2z8w7F9CeCwz5Ruv4BAUwG43exxLTLx",
  "key14": "3opivPoWkHCowHfrkQkcU2uTqjEsomL6NtwooTtUN3Gg9BziDK1mgo2tmfeMwbngYbAsyQcZze9F7njEEqWQLnG5",
  "key15": "2rHPJwromH1DyBeomGnSn8KBBXMvDBUmFBYXxpDmgSvMxJHhB3MnjfW4k7eVBnjmabon2r5gv8gyAni2hr4NW93R",
  "key16": "59r8pEWBSQW7j4fvk25vNVLQv1K1VsekvnunaW2c7gn3P87qx4UpFuydmJevdCvEiLXiDwBvRZtsSD7w9joKNqeu",
  "key17": "5QboHMxirsYmsAS5QwRAEUhHuhABLiYbqvnChwuaBp4Y7JRz7JS9WLvGsL9kp3wcQ14oPc29VctrfLjCZykRquyA",
  "key18": "3S8aFN8pdA9pPBeRnSYyaN9DCDyhawy88h8T3BF1WW4ewYV76c59jLGd5yLdbZ3ydQf7TyjjviPKa1XuuaaHeriW",
  "key19": "trkPKh3ozNQoKuE6LRS766n3Xj74GpZbe6RCtvWjsRJSU4ZzpjF5uXMUvERvGPUJjwmoX2mkcVJSbu4pPVD32Vt",
  "key20": "31C6eHDSqkEqX8zinu6cisaqyii8NQGcz4dv9L5NURonqRayQrQiV46Q8qNpz1Z9n9ziR27GPeQLWWhQ8oLSSBXg",
  "key21": "2jKrxkdKa4p2KUnvrYxGX2jUWhV2upUfJauj6gsiJiKPWw3Cs8Y7NHyc6vEMypPBEWnWUAbyW6TfZ4ZsjBvPsqhz",
  "key22": "3AdhoFANmYcjvdF7HNHwu2FfZnayvWnoZpx9t7rHUfdnR1vBBKZpQiWMhk3ysRiWLGeNPRwKPuwbKoZEvmFy1taE",
  "key23": "619nuDeVxhgFkYEBK7BEkKyBApJYywfeb9xkCPXS3JLhz3ZDfZnN4ynLmL2VZWk3QQkEp9XKAmypCouarubxbGtX",
  "key24": "47scexPAtzXmQH4ynVbaz4mhHDqpqiWwoPTSLSZtNXe4NwiTLsqb6VSXkrDhk1bVxLEgfhjNGcjdbdcJwFu45xgE",
  "key25": "5i9KjCBngcRoFQr6YEKo54y1HUDqgHTXX6sgktp7NGd3mgTp9HwFKWetVjaK1jeZifge1ZmfcHvFyeJEKaY9HY1r",
  "key26": "4YaupQZHXcJvMca1JvkcDdYroQAyQpZHLSHTHhiCxutitdrem7caMdvkx2ifB5Xpkx88WkoQstLGQyxs5YBYQugG",
  "key27": "5r3dskxZfERKH2pXkreeoxeDzdE8SPhoEoPa7jfrMnNZwvSjuQ6PKZjmGBnNJh2jUdbnE2Ct96bDw5xw37r3SoTP",
  "key28": "54uQNPLWetkq6LwSHeRqqxpP6LFaPnMDQR9tDBpLGwDSMdX4iC9gurhGHL42muDzo76Jh72EHqFJ6kwSNZohpsm4",
  "key29": "oC6qbCEuyqUKRnvZerZkiRTtvmSogjSBvYWdDrsqCKNevfwnhg4ZitaizseiSNw4KUJERH3rSR3GPRn1ZTPUiPy",
  "key30": "4X173jYemJEmkqgEh8tktCLzrsrEPkm94RSx8qHf6252Ph5m1cTSrWWhUpHjBDywwGpqqvne4WNmz51QH9DdiLVF",
  "key31": "3tD9J3ovX8n43TNY7pXg9Em4eNrdRdPctQZF4zb1NiQHTa4epuiAdb2gtt9CvwKhgsbupmwpKDvjKQ5Xk37YYibq",
  "key32": "3EumWpSPo8wNVthVad43wp7YZR9zTFKGpWt8pFaZBQJxVzrxqEJ5thmT9LY3cQSChHcKA8wjNoTErsjBL8u6SWwX",
  "key33": "2FMi9ta86noqxTTbeKa36P3C3heMhxVSwYEkMAB3F5ctuVjMym86jqpfiiXTwuhGKpDfjp9cc77LmrB5egQbKECH",
  "key34": "6KK5CN7zYvXVRV6f2MatN2NXW9ZByF7zXN5AjfaSqtmmP6eA6KfCDxSYBesDCtxP69Yu1VaxVyqvd9kUDhWVGae",
  "key35": "5qUAsji1uMeKE6dWXxR8UgXrPwXWjs8RjZ2Tvz4JfZdCRjXPkYovizosWTYycF3BAJf9qyEq1161NH6HeLzu454T"
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
