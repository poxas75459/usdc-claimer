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
    "5YA6VAqYviSjqEmvn2x7sDeyLX1xttryes57EnqBwVpkb6C8pxLrsjgfxNni7PcPWQZu3n34mrbQAr4w1i4eU3Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mXEQcodi4zyyQEFSZ6QMbFbyPUfUkypEpJcPaSohxgmvQBtoqUPqHsWBbPbu1tcxwFKxkC2h2QbZqmK2wyiAYfs",
  "key1": "2zbLz6TtWhv3nn4XKdCneBVkZpRQQ37TRpctoQt3rDu34W9rkuYHteVm8VZqHrbbPkrTaDk1hM6tuxbN2fexdWtv",
  "key2": "62eioXxAAsABbaTUts1mQTYrwLQ4ppPhiFSWa9Ms416rS2CeDWBfxfpJx6kxumbKGhEyBpNim6C9r6yaGqDYNvxR",
  "key3": "5gX6Ybg3pQxKCFJQQBy3pFADXpLb5B447zztQigpyZE8zUeCQYwFaXEKPx5DiyjzcdnMm436wBCmKDU8nub6a54x",
  "key4": "5P4hu38UdfVdAbzGBGN4msLsqT7yBXoKhPApq3rqsMKG2qDLZ7SnxcsjmMP4JUy2yVYRCZNXPyb4m4pU2afkpxRp",
  "key5": "WH2qw9GkbT1Dkt3UyewvgXHnMaaovafXBsqqTBS5iUUQTqRXmkcSV17tfdGthibn185JimZg9aZyHVGKfmr3VzK",
  "key6": "3FBxWTSp8DLTNN14jjPELheYVUh1Qdu8YoEANVZYJQSv3t2MBdUmPy379AkqA8uTw6YtiEE8mgb8Cas94RnMoNmz",
  "key7": "z2U4Lmf1pzP8TmqCw4WzdLGH9bJnssSJt8UdRLea51Q9bHMR76Nvg4Pnw9fsbh5Bfr2Riw3ZAw426C8WN5TpwnA",
  "key8": "4Kg9N22TTtR8jiSntMGWMnCibX17GNrhtpVUoPa8QycFAuZZFHLs12SDK9qCDLB8maM6Q3GrjtJzyVFycnVB9pyq",
  "key9": "5D1oesSab3bUE5zscqy8WWDss9RAAmEpzkQVkidqB1Lg1BmKTqhQg4FqRbAzQ7dkQ5jCQHS9dbfVWVMZi5akAa26",
  "key10": "5oNvVqaEChKXaLDRsAqu3q7Xur85j2hPd3hHqkA5hBPLHofQcKkCwKjmYZsWZKDETrZuK17bMuLUhqiuFi2LTTxp",
  "key11": "Ft8vKpkmfn26Qtw93tCBR9wKHyNd9nVw7MR2eQkQfxPisAu5FvCWBphS3oejgamsVALxMTSvEhrx7gffSuo2sEC",
  "key12": "2aquYTLgf6hi8t2bEZsDJf19qYgFumn8pFFsPnaSToG6Vcgg1u18AtyWnizxJFCjLJxbwSCE8NZShUADb1ayjt6N",
  "key13": "66sEs4W3pPoF22ULWZS6NaGsfs8Kn64y2WvESkGDXm3HrEJFNSiUBxUuDE32zSQMnKXbVALn3Z1hQ7LQW4Tpih1",
  "key14": "5KvjF9qTLuC6hEcwH9p6SBELtbpQjUVWgezmPFgPfDpyPpUxmFbSvVY2BhVvJPG5pMuNjbpALcFABfoB6UsSKbhV",
  "key15": "DNk56NR5guwFBQbdKyrG2bqAkEkjX5cdiwxPXDugrrBf1KMg5RTbB5vLf51CDCwr3fbmg1sY3KfTYjs7wBwSCTX",
  "key16": "5auu3LWeXPMBa4xrapvegVm4XYJNv93rw6nSYEUN4km6z6ri3L36EK1aie73PYZGV7cDMQYRfrGBKBx1BkCobXPG",
  "key17": "3ysnMcgyG6yJC8Cs99sacRoY4KgbReSCM9oB2SPQxRkZVW4LUCii1kaiemh649Umt2hVPbicHuuzvSANLsFEhyMf",
  "key18": "4mhdxjqE4xQ7JT9krvPrasqUUYLNw9CunwKRyomCJBh9R9mDUpVgLnNzMse7CfsmJPtnhZ3oZ4EzGNdfA4TGbBc9",
  "key19": "5tsh7gtYKGgxQJahMAEUCSEus8JGze8gkkorCXDUjcPAe27zyYsbLaqBUY17bxYBsj1iwP31U5bEtGAkRHykVfEV",
  "key20": "3sjB2U1Ztri247qBmJq37S8Ycc2265FCDjb9Jm6GvmeAzSRxBzY3qQAu6WumcMpeUqKygNQiBFvX8QhnZo42zWTm",
  "key21": "3v7ySZ6ZkkgkC1orxY2JBs9WTmaneT74mNQDRwTYNmaRsjpDQGjW4NiVBVPdHy5Mzvnw61D72xXghQGnwn1sdiRV",
  "key22": "Xj6LNQaPZXZX2yAZc8Y2DHV1MmgmkikoD4JkRe6VJPQC2E8trh6FirD745EMQnLinpeFZ4MxAtgbvMgDFTuppeU",
  "key23": "5dDNv6aVs4fDxhK2qdBHhuGGnbNvhtwmVgg7CEB2ADNVzopm2ugZU4mr4eerRJnzUzcAkJHhAdM1UkakuasNgAgq",
  "key24": "5HKC21hzKY1Vu9TvAxRBmuuK1YhCTi4nPEmyGUD39ZN3rcqJcBQYFQuY7JiCQhov5rwHQAGUttTwzAkrrEAyP2nh",
  "key25": "5DjaofprG328QK1e37tvkPAsv48F4RKk6tFrbbwFAFyLoRHwbqrUE8bDUwYmtC3j5u7Pqrc9CLx9ohL3ng93JvDL",
  "key26": "37r3HEnoDeA3homPxbCoQZho39hTxSMovHBq1JZ19eg13vrvdcGcVn5dSogh9p5EqpoDAD3jXjqcTJmHDp2GobwW",
  "key27": "2oQG7fPv6EPbebhGrUfZjCqZgfaVrBUHFK4PNqhaTuggAfNY5GhbTbPb4wcSHTS6RPv7ujnWzJDhUZaJa6CiJ1ea",
  "key28": "5aF7AYmnjcrqjqp3nPLELqEL7CCPnKPKeisi4ecfhNm2AuWtp8Zcwag8kQVQUQhxSEvhUo2maNxvmUtqkicA41tR",
  "key29": "ToE2XWkEXQqA3PBsYRSFQpFDBHpa653fhSmVT1KN7sYqpN3PBdPEAnbyUeNUjpMVxcoHvEJPJDkviiPtrbNnhmv",
  "key30": "5pC2iSp9fNgfC1hWZp9MZyV919wGRgp5CDEGZLroMzMrNbmS3xumVc6NZNSPZ4NzHGww9vbEMZxJSo7RYFp91pNE",
  "key31": "3p9TjiLVznZQCVyYMYPizjfPXKhDnKFSFAa59PpfjzM8ZjqFLEbVwA5hT9F4ykr5Nd7D9PqckSLhTPrwkGEmLXFG",
  "key32": "r6Fv6c43REE4B8o47hM9cXrrbyy6sLAUWWyRU5mxnu14tfiBSVS6oioZNUqXjUqvTT3QcdKGpwzTXToExx5nVGn",
  "key33": "66XQ79DexPyQA593N8MR6EskxDPRmHW9ih9wpQYXf39ervZ9dB9RMAoYZwxt7X2Q8B6eSMyVgeqC6HUKyEuCMkxa",
  "key34": "4oPv6WDSoaTxn4vTY5TT3N7yuGSMXzcxqDtykxNEzMvpgZcoZCoJNbAi6uUxtc7uWzLHVBdPrKxa1G3TsubUtHhh",
  "key35": "2xq4g8T9oF3CNiZQFPwXtZuYSpyBmCa9RBFnSqMmjLXY5aVx2AZLoDaKEhv92P9KBLjsvw4We5xZJjjMy9gtbySm",
  "key36": "5wHqGWjG24xdEdKgP1TYZtYLJgyFMLw7fhPEdgnQ9gYKmN93q1GvJ2jDD6afVGFvrkfcToPj5HZkxESk2DoJDb1c",
  "key37": "55v1r7f93D9UT6PwMgW8Q8SgtHY8GhSw54nv8UaPjcAkE6oAM6tSY5CrdXAQSDYVLHfBvnUgMjVZBVsLvSm7XPzi",
  "key38": "3N8eHx29T48rK1V1JpBcP1KM1yVyGmRvV4SSDFGJDYoAgrheGEFyDKTYNSLAErxp6jeZXEs3eDQECEpVj54DZAii",
  "key39": "3DrPdpuDGsvDirEfMurW6qNSZ2r6gXdf9BdoLkWGKKL5Y9J1f1HFTK2PAsP9rFYTx9j8zjVFfzUNBBxP2yUKChNb",
  "key40": "2pa3Rd5xtxh4bUqE6kkh3whkcR4J52ZdTFkT1JEzp6UrSHp2hmqKtnudWtjiSCPmGYr9hqN4oTKMGyHJ2z2ZgHcC"
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
