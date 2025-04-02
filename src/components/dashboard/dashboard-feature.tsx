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
    "2zqGAw51ecnEEDy4dsrz2ti5Urbr2y61BUxEKxZVdvmN1bAUvGAA7KgfBsvtrhPy754oo9QzaBub4xrAEMo9Sjqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b4x9tmWgqsqbQVJdT9YpvQDCcYsQoCVAuNrCgGfDNvYF5b9hFyc5oEKq2p7hk27YnFup8J98egwsZzMeCwM8G91",
  "key1": "3U4MSFv8HUeUKAMuYEnz8MDth49az2Ebcq6N7sdHXXwYb1D3tuG6JcJsxftcxxNF3fwsQBgtj2b7B3WKtf5FbYtP",
  "key2": "58SZji8x2qaYU2gupkWkjvNXMmb7Vz3EZSrT5k1YzvhDvsRT3p4eR2UBV4PSiqtfZbi7iv3P5godNrGyRyGjwpsc",
  "key3": "UVaoFK3L4cqHTiGf2nSyXKbzHxLkR1gS4vywNzdBjTkkcbpieF1w1kMigqEagKgAVmq6romJnPAXjEJDf4UCB9W",
  "key4": "26eN1wsw64Fv6H12ynyQorkSzTGvT4T6cqcjfTo1QStjd7KRxu2rG1ZZWCWfkgjqR3sHYdHhQA6Jv6EaFNbFp4V4",
  "key5": "LDigqzAZ5AKmC3GEXtxFbvNcETjpXsjMwYbGDk7Gd62SHU6VvsrinV2VkreedoBMYtHrg5vFmqSATWyaCM5ykZs",
  "key6": "2zfFNSErmQGfSngzkZPLAgWZDyQKSgdeQux1Yt9p7a5RDnCYBVddnfyfUyxukfjW2HUMjL84kQBobeMd9LZu6fqz",
  "key7": "yHdJ2CbwZBCM8huUFNEzo6N7GwaNmsvg9PnPyrngpXTZATEYyBeffn6uy1oY1DaBaN2nCMRKhpqrZUTwjg8t3WT",
  "key8": "3WxK4kXhuKdLfMDwYMhgZz3M7VHP3kuSgjesWuiZb7bDoFJshx5Kb1YvVJSmFsJuuxhWHTVrrPxU1Rwepv8zooSP",
  "key9": "392Ly553dPtDoJP5wPKye7AHggeSe2XL6TYKbKoE1KEFXNzzLN5cxYEmxB1AQncrPfpEdC9dFAj65tsEUrR2fPwa",
  "key10": "4fJadn4yA5j7QA2Qy7KDpNVr7auBYCgzccDKuSuWSNJ8vSr25yiVjxPdo8DvGdQgh4G2cXF5SUpCxiJnQeeNuDFS",
  "key11": "4RqFYyFnmNqJXsKzxzQaz3RdGdJveQz47wYJbkR3BWuhX3bQDeeSvb5VYNBxBnmxm3YkGhsr8U6yRGrRZhKgwtsA",
  "key12": "4PSjSbyv1fivb4oH3SfeXVKiXGA3BJkH1CQ8mtphVkD1hPeuqj79rmLv2Xm1eSE6REt5hKX8HKGxfAqizbyL3Q9j",
  "key13": "2vvqirEhygaEQ8APDhf7hb2DEFd6jdgfz3PTBtVG32RZpsg8LfYnyThjGW2ncSYn79V2DSTg9XvRLRMmWKLB6jdB",
  "key14": "5n7fAHZ8YDp8f4Nsm5fn2Qzp7bJ2haCYcbNShQHr9EHj8NYt79tb1Fm7DLY2DYKa4wXWWYnM1pjYdE6of6wo9svm",
  "key15": "yT9ePQBgruNhgg1yzADMVwSqCMo9XrfV5uFaX2MSdLrQkChCKpAvHoHbuPyfWXzXA27YKgdiKBqRhZEr5949GWr",
  "key16": "3qzmYXccmiBBfTmEp3rHiMJFrptyCb2sLmFyrTUPuWVN8H7Qz9qQQeMibXfyWjyFQBCxGAmqTGD1XvgvmiBBLtaa",
  "key17": "29qK3ACsW1gZfZs3T2aYLHhcbk5HeJmCW4HTUrDdAi7oiKeKDwEUb2rjrfAppf1Gc41dDSJzc3MTktwnN7oHHJWf",
  "key18": "4U54LpXBvK2gXXtSLKYSEzYygSnCUELUAXewGTAekdseDcngm86tsHPw2fDLApaYrjpWMsMpm1RtxNUt1s9hCfjm",
  "key19": "5HM7zWcUdfcByRNRWFRhoujLaHeZkBjdnd4dDGmbE5vLjpEjBQQ5Cva4V4rtKCQrQHngrA648MAUEkc5bA8zUeMD",
  "key20": "vhyENoJZAFxvS2zz31mqabcbRDP3UmGp14Kzz5DF9MUMf5kt97sKrp8ceFkfYzsLA33pLSjaDUFTmKQa37Y7ByT",
  "key21": "2AUPAifmt2gW698gdY8tXATwvxxwMyqkYFjWhuVHJ4gTqmfZuLXCvpmqTBMj4kcopmytdQQBk4eRtPQpFxGqAFyA",
  "key22": "4FtiwhpCKToH7eCvjgnDHuVkNYWe6cGXJwqn9QhWFTnEsRAoJMCsMMBrJmAfCovxFbykzbfd2sUDEyYvUMfmZiu",
  "key23": "31jTbNPaNCoqZ4icUBpA3n2FSv3KFpu3Dm8wR9Y34WjKRb4sB77hD9P9Xd5195Jcb9dKgm3hMQpHHf1eHa4ZQBSZ",
  "key24": "3SHrdKyf7JKDDYcR6WnQMbGCohypimjccTGnCngKLFUUMubEKQc1m4ZdAT5ZpsZmhHrgMY1uAn9mZjC7gRkLDi7j",
  "key25": "2WnMtQ7tBtkW42fibUxH15QZzzfJeLyf6MU7BdyDtKvkDuLCu4aSuiD8LyS2EppThbZLAGyEFTpUxVrd3znjVpyB",
  "key26": "4q5oJUqTdBye3kWHFdd7yuuZHS4mfspZosmQaT26w55TNea4QFH3N4Ppx1c7tBD9zZ8myvuCSUmcc11G8aq3pV8E",
  "key27": "5S73DHwLAtCFRKgGoCjEZof5VLG5m9WwuNwiRgGjpJL2WeNdg9mQeM7f2XEqCtR5PiSNSN8pFi92WrkdLejSiYeo",
  "key28": "4hCypRoP9YSjaUhAtbtnXoGWpNhBHUpjeniRMfn5QmtjbzhpPSN1EcZBBxajBtckVP1DpgA179zzkwNVwDfbwhc1",
  "key29": "2w1bkLU2nSFVkd3etn6gNpKSWY52pJGHL9KLpcE3PtAvDxaSrnmtWEY7hR2q7z1ZAGUNYvfbSKZ5usT52D4kVwJ3",
  "key30": "hKw9oycYWGcTTKJqBvZgi6Vp6AHojhVWemBnGcMCj2tLYyC6nwWzDbwHBmEJmxorDYxveJTCZQYC4BqHbzmmtsq",
  "key31": "fjZYxjd9tvdKYFr4hUzbTKpBWZHsUB4fjKiuiVhuA3GJupijw2XwaoQ3kBE2ny5aMZhS5aFFGsxKdFEoJ3B5amz",
  "key32": "2vEWTxkZKindgXWgofcUJEFRDcHdTAsMd7hB9YeekF7MLWAGubVByHHLsweVQny8h7Z39rwGQmmqGAP9vwZ3DC3G",
  "key33": "jptnmiYxHHGiSrcEfp8wDiDzH9onDs61igafV84s13UGJcpYGzqi1XXYUqfarHfHqYkiqa9VgPxZiftYJ5xEotY",
  "key34": "3KQVUYKDbuNXta4GeAPh6j7PnQoHwGtQrv99ZxzLKCRVMey6DVu8ZFtmdvswNvUesve7JSSKmK3NpyJVUZAVEovR",
  "key35": "5j5SAYtw7iPKUZPKg6BX2ERqyDsbSeLokMxEzYYwNDMjDQvRhLpt1Wmr7Lxg8y7YHsMmFkMDv8m9z9gpavzoPht5",
  "key36": "2ApmjbGkYdRDEmZqK9KXrakSPbR1kzyMQtCPiydZb3p1uHTRMCCrNTH7XXKvcuGUuSLzd6DWWwNANbiwi8SFtkLJ",
  "key37": "3t59zYmBrQTjnsQAT7qtuwoZzqPkdQ2kZgHTQMqqW7d1mU7s9ZjGeGrh7Ts6JVL9n28rjTqRJRieoimRnyWoJkxL",
  "key38": "5Sc6r1CAwuRLtd9xbTszzhRv56d2Nm5WSdRirBnxqGfoNJWcDPTgTAZ9cuUU9UzUJntJ2uhBUpKKes1x71x76wTQ",
  "key39": "2eFwe5rhU51baXnGmovWGRjLUqW2EzSKK4MSbuJdZDvPqSzrZqLttUeCK962NxwHQWeKseCCGf1t1yAXzvek6FC8",
  "key40": "rSStp8DS1QkqzVxzpmQdCoyULBiq8LYGrTHTF4oeo5U28ZKtwUN5uysCB7V5a7JBm9QfZ2ZVjZYg8Gz8Aza2Wpe",
  "key41": "5BU31m5kwFzfrxFpsQwdncJ96JFtnCgWXka5zAT4s5GAS5LcS6ZVhVhF9sARj7h7xD3XsdnFCi9wjBPv5b6X794D",
  "key42": "4FusWUHqWjFM3KojfDPFr4EgpMtaGzur8NEHqxfDLZhKdb5iaHdbzmsuDw2BLrez4s9mrTYEYF3MufxNwC8mcXVk",
  "key43": "HksenDxWqpX74WZ5wm2hZSvBCSUwL2KzkAd1oSJtp6JkTcdqx5yM7BtSTuof7A7EXNqhf8J8W8YnTX9AP7KaX86",
  "key44": "33gZJjWvYkWRDY26kf63aHGuiydNbqfZkddeSAT3AMfmt1MedtXxhs1QeP7RaH1424SruCxC5F1XVpnqB5KZvMSG",
  "key45": "3f5tTGpCxJBuwNh4rk5zuMJAWQuFf1pK7XZQrdzzThpHWPiob3yBwfimLvFwkaH4ph59LfUYbRobhPyt8SntUthu",
  "key46": "xEU9AFZYf2DqmDbCQs3KgnMNVFaQe42N3YFqB7sSNP25T1NoThHsorsKUx7rvWKcGJryqGcYbpSy4RZHv4vvC85"
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
