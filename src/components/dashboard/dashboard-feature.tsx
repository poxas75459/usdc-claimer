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
    "2nDUTVWKfnxJYAh8dfA6QtSp4knwWVVA6hyxSLMfVwiJhG6PUPEpDbqawXm8jrq8cDeubdJrHqW8xqnsmNdERrs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZknNwzEt5NXLQuVhEym8Fk92qcTTrtGz9Nr6GfPbbp9oVSrz4DVFkH5jTuPt6Gh5THXj6zyTJUowPXtVHGz6nLr",
  "key1": "PJ6xMmTNEN3QF4nTVZjEpgp4EZmdseXvHckNW4AA4MrFAhzjRg17x1FUjc6ynRUxj478MD7RD9dt1P59Umo1d6R",
  "key2": "3KQgKcFQ5N1o5VUgKN1iP9RJ5TE8DpXC4xnvnZFYoPNgX58HRp6U8gNmZMbLiAE6Bg1Jk3bkLVDpcS7344kXVEEN",
  "key3": "34sNZMcF5qjgwwxgbZ6yfwDBLGQDirQF7wkYdni8bjhCGQXMmCCYLbCG5VcEtoMAGL4AqoB1JceEXSzKbKsRwq11",
  "key4": "63khdAwHEbEWWHJhhkmQzZ5tAxkU7e7YymJWN2HkWm9UK6tLzuVSTkAz9pnLZ7sgTEEMTcEDwbXwYA2CuButuviZ",
  "key5": "59zGFQCk46AnYYaGjqcANbLLsxMfBLSaT1m4QhsHsJqtHEotwjmtzfeb5obzV9kGTiboD57ggj5gZpz3qUnDdCeh",
  "key6": "3qgcs3MJFZYwTLfe4h95vAx4UxyDSgt8VyGotX8n7nmma7KrY9MZufs4S5z3NdxaGVNkTp6PWLt4pdYM1pe3T3kK",
  "key7": "4vCMKp4TYAg4nKALhX8RizsbY6B5WZkYfVAXcaKgmTpKaAwV2kFBF3ZHTz2ogSsWvUbdezDa9nmN2P3vGjAC1Bp7",
  "key8": "2z9hWv3SMDBHV1tiLdwQyKByQ9t9mZdPR8YN8WYHAHH7W5C2utWCQqN66GGcpRz7b9yuaPkn4FK2iArwGwbD4Rmg",
  "key9": "4PkoHoZV5dY8u6xxWLnXBLkiKBv3Eb2LYjaKcTDPhHgXnJZD4oCkaebNkqY8KRAX2ajdhDMhXNg59yzvWpVKpCNt",
  "key10": "2DFRyGchyDGW11QyyHWPmqDZYkxzA3AWa5Jr6yxgjMvtTy6fWpayzeRAb1hmsEmo88Fqgm7tzXKnJs8ZbSvGxJq6",
  "key11": "4eWFn622vEYCD9crKReczkURFep81RyAh1SpKzPR6tedK2cAUD4Ffoj2uVhpVpbxxJs5bCxrMvPwxPrfHUAsBJNJ",
  "key12": "Fq7r9Zk7rErbdscbhTg3Su3hCRyt6uji3HmAXRVFLXsaHxmusGAVTbAKQQWYBGNckWSj7HsCux3iftyx1yFazAF",
  "key13": "UzYWnBC6e5uEo8bRGuFoPm9NRpEXuDoigQFRWzwDmwWaeHW8qG94wkSGUXjoGiVPxLqwF8MssFYehco2PRmgmE4",
  "key14": "XfTr9HhPqNApKRDQPoSgYTR7rBN68pwendE6S5sWcK53DEHSeMAqNEpuCfe6kH4JV2N3u95mBddHY5N8yzq3kmB",
  "key15": "35bQzqVmqwDN8g5WHGe6W37wnJzqhmoSoKW5ZwfpuNpbyu1anfQQrmPqK2YizgwiUDshkoov26MeNid5CmZwHZ9n",
  "key16": "3Hf8T457DcejAeTKf9og8ZBKYRDJDRAJ2BGfTsQCbhrFpF9kCqohuLpZUPjoPqG3fHc95unaZoTVjPPPrwjWZZgt",
  "key17": "2gSMhQarnSxyYnj9k9UgakD2SsdciBW5xm1pGK7V39nob6j38bNzFYaAD9CBWwyRCabtgr8xyd76ts9bJLfa1VfB",
  "key18": "324GMpRPA5yCfwmhkiWAru2nBe1ounwe24kFr62gUNaT9As2ZNFiGRfgHSq8RHrX4em5QNQMYMt8q5n3FyMHWYZk",
  "key19": "j9bwsrDZkYdtt1FEC8payy61WnTvmDpLD9638e65FhcjTqMtMmJUsqbiXEyXjbvU3C6JaZUwX3MRhUcko5bofEW",
  "key20": "5pvde7YtXWhJ7LccbZaATjnrsJ4jckr8gjphJ3vTFmVuzGXLhEsXKSSgFxyuQfG9v8hJrto71rme5CsfBoENJr11",
  "key21": "5UFQuwPsKyYHf4RpWRe2r6jGvAcyYr26UeRKD3JfTifMrJQEbYh6kyUMGW9SW4NSmJMMesyYqSm6EZLXuqGf9GVi",
  "key22": "3oZnMM5YwVw9Ce73TN9EGwZAnDG95PzvnuDn2iLgBhLRFZ6kZr2QpR4TiKTYysDF5RG9RJP6ZaSjo2mR385vn9xk",
  "key23": "4g3vreod3MfmX7FyTSJWc4qMrSSZ6Geb7casksVdPZTrjVUXui8Y2qRgxgNcUsiNpiHQseM88FBKsZbVUFaVRWiv",
  "key24": "GydCCusyKbr6X4SjRfeTYZ6kCfm5Z8qeZE7MSXhwe2EcV372wcbw7PrYxM5jSyfLP8YLUeKgvcLwtLTk6tJUdHy",
  "key25": "4CkiHPegrqu7EsPtKncpEQrXUEu95zqaszCcmR8Q9RvUA3y7TM23wF513h3P8pgo8Ae2Xknujgix7ivVXndjecHU",
  "key26": "61xiW8co9wF8mcznnC1PcpNPeHH6THkCuRda2KGPoYmPmGqurxdpgLSEX2jStJnQCn9EpNBk5czWFkXd1MBssEas",
  "key27": "QCEDu21bmKiY9dT1PawnDEkRe4ce4TRaxN6GFo1gDFvKnzPRgrKFBodsTftPpKvJo1PDEHZFDpJZ5C6c79vdkCA",
  "key28": "2pyZ5RQ21tS6ENV7HBNfCbUTEd8qAHeQshYrLYfDspND6Hk3WiqvGNDpyAsVzf8Wpn12f32xykZbcnSTewo8kDT8",
  "key29": "yuzeGsG74KaTBTX6m7XWQMzE7RNoYBjdQnXKDBDRcLsMgnNUaD7n7Kv3RB64NJ8gATb4wb9MfUvYgosj9ZwkLUg",
  "key30": "J4rUhUy77yzq74kjVex3UQS1z72u1Frh7XYWjf12sLZdcqXZMUBh2rrWMs994Zq8BBwuUpvC4hKgMLjgzFzG9Qx",
  "key31": "27SohntL91mqNFzz8Q8ZpAGmENxsKaiCfozkemQD98i3oKqe9udXpCqEapbHrgucDfKvP6K4CMJCbYJecmu9oS9a",
  "key32": "4zgBeSXE3DcMA2kSUnqrGd7ekrPvcSN3naKsJndvbxcRGMSevXaFS285cxxKJQo6g8TyzMotnuoPd6dyvwgKwAyk",
  "key33": "3kY8tf8ueGEsh5Q8ScQr4sok2KYvspqwNituBipeub6hboYWazxzHEJMGHMYhbc2KzgkUd5wSntXckTyZKN8eNaB",
  "key34": "5eG2HaUhJ92HbBY8zDz8cJuXCyxBRP6UsP2sM8DuBLPf2HrQ67Zy7K88Ugxyp8hKiNCJRz8n3bUy9GQAbqbzs3rG",
  "key35": "2zppFg97MpfjNXxZJd6r5Hsj7To61MbtqvRgnfP5j5VaDw3bzMLBfW7qz7kSqiDfFbDGV1VKMLDxwGGCwWB3umnq",
  "key36": "4yiujdwqHef1kjqSoWydWfXaWxmov8KWpXHDn9ifgzKkMnttvDT7ghEBbcHtrKoJYQdpPNfS7TWZmTueu1rtoibo",
  "key37": "5QkHbcRAbQPiNJZvsfmB6v3hMVF43cM1L6rRh8R7GjBji3UrVF4fMsFmg1DuKs9EbcMJZjv7GBJ4PZL4HKVUeW1V",
  "key38": "3bF4CWyH41QTDnNAQVeZ4vgWT1BXBozBRwCtsrBZbabPNmYm4cTocbZJeMATF4g8z8yZTGUCeVy1TpbRGkQyoJJ",
  "key39": "3PxC8zVHX1jU8T2kUe2VtbqvKZs7fqgvkBiPksx2BSBgpfA4h7Didt47NUddAPs1qN96AoPHyrLXgeDzWb9hFkTf",
  "key40": "aoA9jscBQwDTHbjBZdhFvWtkHcztxWMxtTqj1TyeWcLYxShBb9LPjzocT8xF7h1zH5ibqhDHN2JBqJgWTF5bEUU",
  "key41": "462L8PydgbZvxDJ39x7rvZrRMLri3qBk46bCs8bxvuyWBGrvZY6kK7Hx8qS4Zkrvifqz6KtRZqUe4tuzrSDeLWwb",
  "key42": "3J8EbxFnBcGtBE1TmRPfw7x7cFeC3kRFM29Kp11JDBZbr4pVHyEMeVhbUPp6jncc15y2CasCJDW81yB5Wnpm86Mv",
  "key43": "4sMHK4HZWyLNg9d5jACTwNsskvZm5xBCocq34q9NMuLpjNGKctq7yE13BBs8dy49qwckbnBaXn7eH2MEBCTfPa5w",
  "key44": "3pR9vgXAtiamNRoNgmFi1RHPQ3RU2sw8GzoTHbJZsP9oPKtVGjAs2cV7WjBpD3DoJXB32HdSQ7ZYpsJ3Hf1HYErs",
  "key45": "3743t8xLqxw5ZYdsZJcsg7HoagrFMbiqfKQ7zcZL5W2zAYYEf1H6stZJ13no3QmxWf3zykjNs2PjLvPAz5AHk4o7",
  "key46": "cJmLJBJUngQsZhrjYtrrsEYEpvaNPRezanCnJy56YpxtMJetcpEXUYukuurSS6PBkubpccHvftYtPmBSGDsVR2q",
  "key47": "4DFkj73rq6PuALt5CqKcNAdnZCNvwr2vtuNgqykx9QUMToqVt2JRsktnzTW8P9gr3EXSGHD3UY26i86v1qmfZaPh",
  "key48": "62eVzJoystfn2qBCwtLzsGJ2LWr5yj96BZKPp8JrypnhefozBVpXUwkt5Yg91xQH9iQU2zjgUzq89icfA6AopxZy"
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
