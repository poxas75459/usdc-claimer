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
    "4pHqU8gwPKqXZW8M1r63mSKc3HgBYXm5Gzr9ZYDY8ub27bctF3m5ByZj3p4rn4AQai8NVMHJ7JYJA39wD5WTszDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hJJ9VMqgZopZTFXcbgcpZB6xheyeB1WEaFY2nBEmUCMxMrfLATnqQxPtR2ELMK2mJxYNisRr7fGwUNGUYq14JHV",
  "key1": "2h61MQaC7Ay9NNFGihBhvBbe5oxpy9o8Gvf52PTJ4YFSFs2NBvJipSmRYRm5VASLnHjRAZPgZ7AFBz9NU3yw3wUi",
  "key2": "3bKkk9WadA5eQnSbeiCDYAVeW9oV2PvV528wcodELtToqqKppWMcabSpakPDxAsk4es2nM61VfdriDaBA5kM22M2",
  "key3": "5dCUpnvVgSbLJC5X1DySoaqZgkMVskXRrXrrbw7MA2v8b74DYs4nP9YHxMQZPeDFdzyJGTfBGnFkJegfkVy6DYN9",
  "key4": "ktH7Zn9oJGwZBFG2oUGyUCDtkiA5iiZ3SGCL8P1GwyL3dKuVzM63AGAMqgrX7fQUWog4vFtYEEM1JJzC3jvzHUA",
  "key5": "5naGoTKdSLekVSgWt9Yj8QgwowCkPM2yAXxkEq9GgF2jw6ZdnXEJpFdXgr6cKUf9KsWVLPRpp6cPTYhoiLWKs7Z5",
  "key6": "4NNZ6ZmnCvbajifDYzWZAmNtWeuXc8uy2kyeAwrz3nEksxr25jvjCZ4eMRoLybmNcngN93mzdqRtCYGKRxCgmqqr",
  "key7": "4koVrA6TPDHnXtBvFKYVMASbvaMELkGNDbmUosjtZCXmS4Nd9GYfSMe4RprZXt1BJikXa9B9MxJ7PvxRZFNrtRbN",
  "key8": "54izSBuwX1mc1iYmPJz7XVJxfUQ4hDo1QBWs35h5meFam2SBpCMBkKHkMhXEopSGbL1RoSpBfbKRs8DH3wikS8DZ",
  "key9": "wmhsxWzNAvU2XDUzWtQGzUKApWbfUyDUB389cvrHnxrJxGQWpVTKmbPeP5S1LNqda9Dph2ZZXn6DVwTh6cfXnAH",
  "key10": "5jY25LaYwx9Me8BhzHHuaKu4MKHLdhdL1CQRsB1z1psufAUxH9pQUo6AHgyaNPNuTCQUkJfJBignB7YkmaKCVqkx",
  "key11": "5qvfWqaH4cr4QNTWUuqtA2npQuhz5VsToPiNqWMQBGrDu2Tnnt4r3uG9Mn5zWyjvfeCsQ1nNUu2nac47jGFQou98",
  "key12": "5pwpEuiy1kYdXquwmcvjwzb2NfomfjJzERinGWaCRbXobeGmZBtFbssJPaD9xmGHDWFQ1nNRYS9oLCqWSV8sFACm",
  "key13": "53yqnJdmMt1xnwv6M46sS6xVWWYLVbhFzVDz2tVrh1VaxA26S8SgEcNkgDKWCnDWGExetG9nowpMqMyryT4itP2g",
  "key14": "5E4xv1icPdZdriXii6h1YJbosktHT8fHjJG4abH1AuaeNwVVXFzGqVDXJna425bpFxRy4cL3cycU2vHp1MdkRjs6",
  "key15": "5m82ib9Mdt7HguSQ2eAgYfGJCWsjqshUyeqyEvwP1RHwDJhBKueHVUm1enmkR5kb581p77rix1gM31ymRHwc1gab",
  "key16": "61BoDMFmq1vV4RKc2WjPNRtecVwsdAdpFYQXF5daZamFE2ZMqV1qQTvkzK15FFLJ7zEzN6eM4Gngy8dKbhKcQ1Kc",
  "key17": "2e48XG7iJqgk7Ec79LJd812rfrsmmyqxnzYjJU4bhBXvz2nhMMJ5SbgWCUKEaBEdPnpMejngwCqwsB56ZtAj1U38",
  "key18": "bVeshg5KrB61ZN9vMQZhfbLq1p8P1g1zfeaK2g5jRgZbZvXdmTZzLcYiLoM9rbgAVWHrDmxs3m3UFkZU4zsCtk8",
  "key19": "5KzNrip9EFUqsWHp5wS4LbpoMjtbYCMPPwMFjH12NF213ReFyq2bdDJkcKVmYorZUjGNppqLgxNX1y1PcKqNMGSp",
  "key20": "4sg8sr5sXxE9zenP2fgBpX9gkdnMut6ApE4MLsVrL4mkuUXK3giMmbxUyt3NzPLQBsDyh4SQgYFSX7RKf3Ej6JCY",
  "key21": "6J2ZNs3Tg8SFTTTvyGWZvHUrZ6Bmjxaddfk8pVd76Sqk8UJhqevLtBb3jeb55qutaDLytf7jUuEoSR91WDNm9gf",
  "key22": "iwXk5Yjy4sU8mLjEajo93FyFRNwBmC4if7bzNRfetSaGnUCEJXGL8J9BJixUpiAMpunxqjhadBJsT5Bbd4TFkm2",
  "key23": "5BYTRXMrg9z83SwaWWfYDUctagm3YzpRmU3ZRjYzgTczhwCLYZt8u9idApN6bqZF8TZQMVhS1Ek7uKspJtKeXphc",
  "key24": "3w8i49gd9b8v6PphyEKHGTvrKKECXSaZ9sA81YT5JqFtiHRVbp7nd3MGwrJmXzkueaLYsaCR3CwRcif8urbEmmtq",
  "key25": "49r78xLMcceetGnotc9UCqAzep9GtDAjCGZxPLs6cxUdQh12hNqKcj3oo4WMToCee5N6jktkXVZauAmPuuSGJXVi",
  "key26": "3yyZfzqhkJzamrvTPyFdtcu6vtrp37WRPRujCNUMymZgk1QfuafkYZDoXxbVXzikJmRxC18EfxyfhSxFzTjfRVCq",
  "key27": "S1Tg13JBfW2rv2jETVYgUCF6CGQKhSJrGJdkNJpsvVyodRpkab9zdwwBNtzxLuLSQfQ6Xz6hJ9jyzPe8mziFYjv",
  "key28": "4ku819H4nnbKazBfxGdwWuD2cAbUT9ajwAGziZayuRKf23dvgoojaViQ9cGzjLtZpDkCi9mR2XUpNTH7fThYyCSe",
  "key29": "4kg9yq5qDXyvy3sZjULwsAggaUD36AGAAffkduCdnuh8uZaMA5rYx6G4qBszgokry5GJ9A9MafdZEkJA1t7mbppA",
  "key30": "J2fshKgVgCoLXGbCV7ttbeGVzVAHsQtCry7nXhWhq2EsL9mjDnWdQ2AEky6dvxyLCkrxUqXSbpVbNUTiB8N7Q6z",
  "key31": "TXpryyv2648kVbsS8piEPpA6qvqJMM7Ak76YT8ntDFUV2QhMgyAhjwFJvsX7XcKrENmx5kZoJK3jUHZQAGT6QTC",
  "key32": "3gB4d3FtZwagQAEUd6qm2RRC2KdC3PfeEmg7FuXF9jJktHCqwUiTBcw4YPAg3fq5rhZbzhJ1YLSnhFvsTV91oNNt",
  "key33": "SngRdffvuCWDx35HKqtkSqC15S7ir4See9UqhXYyi4gHiPYAMspy8Z4fy6suEWRJc13CxAwWbvHArzRxDdCSzEB",
  "key34": "75rTbfAg7Ea9C6nZiMiRfQ4yQnQEZ2z3vPhnU4hKAS9Hpn3QAv6QbZXsHvDXy7jyuRfqZWt9AhsdAHjzjdgumTP",
  "key35": "4wgQmwTcmUMSrv85qqG5YqohqFhkUpkDCNJMyamo8bL58qoBkSgKdwxDqBFBRJznVVTaP2dyqrGuXw5aGVy1BWmz",
  "key36": "3GZoXns9wsqbVf6bsaYZQVpVcJR2ZQp8ZGeSEnQDFUkNe7E4mKBWy6uuWfjTScRTXc1Njo4aNmzRJnzmBcByWaKp",
  "key37": "57HKR4MJAwkVWpnu2SUweRnV5zBUyCy5wXnFkPSeLJca46quwENyvf4ESSi9Mong6AZkAZyz42xNo94ykBpZjmME",
  "key38": "2nX3HrwwPXMjWf1YYKPcryxncsz6kQaTadhbWNPaN2QXegbPs34NpGXCPGpZ3L72cTWySyua1faLQkJzDrmN7x1V",
  "key39": "2su35o1Rt5yhHutF3p2EGo66e3b6xbuPQ26TBCChw9nnu964zM9odzqYyA5aKm2zpC2e2JrNcMks9BVLQymGS5rN",
  "key40": "3dxJPxY3NQ8AeEHtTL2JWyJq9TvwNc5ZFPup1G9AemKXLtcBionPXcNvs1HtSb73TMiYjY834Gz6jHHDwurejdG7",
  "key41": "2JbXtE5mYK6xqDmDZ558RC126PpqomUyJkwBG1YadPRD7KvWnFUjcuGNJNH6gH1bW9ufNdSvt6niqVV8hAW2u4zg",
  "key42": "9oXYjCvpyzyTMDkK9qePbEVdpuxCztrmZdrGqSFK1Z5D9WgajojXMdZVR8iQANH7iSvVg6gqNZiALqAJL7MX7ko",
  "key43": "4FatSnQDZanMEMxaNV84aG7hYTU6npKj4CdCZmLNPFuiew8g7rDW5JrKs4EJGxyYNvEYBKoGAEAjewvibH4ZuCFZ",
  "key44": "57C9mY1sW2JHGo1mMhvUhWF4rcNbiexzpLCtVkwbd9HsDAdZ9A39DMQvgU3K6BbkFvzZwHx841Br6rTDU4u2ThAz",
  "key45": "4b4qwsS3KyegW8TrjAJfYi7YBfJ3Sdd1QDKkgysSVgNBYvJhyybgXQPXMvmG96KHLuB7Pm3NGyQq9ZyS6oDo1SxH",
  "key46": "63rkHZ4MaAUzo1QZS6rZtxpLgJ8FQ7jMewhNqKH9cLhcZ2vEupLJA7RMJgmzCsLh87QuxuShGvkSt54cgeP5W2Mc",
  "key47": "3hYCV9e3XWnZAYTzgk1pEZyWVRNSYT5x2NPfb2E1gPAMQtsWFXc8RyX4fEFHXZWNCruhJ7QzL21SfWP8r7Xhvxgw"
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
