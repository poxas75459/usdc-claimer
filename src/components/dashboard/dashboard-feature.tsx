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
    "hU1nGh1HWCq1hKoCTBAJN7fJZLCyPwRfZ1gZNAvAf9amkY5Xj27PWGoM6ZV9ig5m5qHToPBamzPRa2rtbbw2KH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4MciKs6UxWCi5LPKK2WAKg4Ke2BpchjmTvJZjnMeFFdwo5z5NJNPBR4vw783s3eUNGSL6hb21zvMDXg4stqjoq",
  "key1": "42yHwtWjaDhxeWu958hLJ52MXYBsgQLLGcptTd21cY4oV2AnjjrpDFHBsWMgKWeTZZ53jfmVYoXdRdxX9ha4K2X4",
  "key2": "3swUPZtsm5YhJAKj4sRCVUozraMuc2VrrwgHuWXXWqqMEDUonVunDtYoZjj7iYXaUQVQMyHrT45vVouug8r19PDG",
  "key3": "2Y7U8zZTb1zRVUMcXwnH1jDCSN1FAaAU5M9Xaw4eE87E2ebXVGutg1rBjMEoUoubkuzkfb9aTPsNL4Ydr88gQDhm",
  "key4": "34oFFbeeQTLWrCGL53DaremGYGu8zffAkcWpAfYayPG4AuHnnaVzQzux4NAjLABrcvNnNMh4AqNsHV9F1q5ix9bN",
  "key5": "3nwmdzC5uSmr25cELShpRee8Zm6pWi8NPh2Y9gXDSzHoA96WbuXVuDaVWys2zMawQtErTNDUnzK4AdkjBnawHpts",
  "key6": "58gnuhqwdPNRJQLa1aJqZmsLDxBiDZqVzSE4GAqGWyBEu9V8fVhbZTZ19E6zpw8d3KHtAspLgWS6FBZqhXFnggs6",
  "key7": "3u6Z1AtsG1x9p546eeEJct2kC8Qhnt7H71X15RqrcQGB4vbGp3nvHdeafr4wwJ7PiaKW9j8qpvk7QU6hVN9pFGeR",
  "key8": "4JCrGjwV3XRnZCwMEUdCg3ATCsQBdrpfQ3LEbwnd2SWRo9hXYAuUbY2nKzH8zTLmHApHVd8cnsc5WwwfXqjQf6rA",
  "key9": "2i5bbBHMXv8jqjpMo4YnV3RUREQqq1oWqJsyUKMUCUCnfhMbZpMj9Hkz87RCc27USFcFiKBGfBdb6qUYvt8vWhvx",
  "key10": "4TiWHAF4F1h818P24DDnPLx1JbHYY8TrspR8eaKM5JnkosEcxAS2mYAAYaiaabu7MkqgRVpqpPvJ5NGLR87XJLWP",
  "key11": "2w6yfz2CY81GcgkjfaAftGJBfX9YbEatgAfS52C56FKLxMC4RjRBzzn6LMG5LwyZxMwiabKBXLXQdJxft8qahfWv",
  "key12": "2gvovKRfzQCKHHSENLs91sHREwGwTYzYwHNNfzFcEno8LfHjRvkYVUupnbDFJitLzx3TJNV6P7sNTpuuaKVWggPq",
  "key13": "3PaV3xx7Rzdo45YK8aq3LxJe3RoCiSfBgJeYjcmCWsbR2qpCwnEP4ehoWAL4RmwER3GiHwVziCvmGiBCSaLcaYFd",
  "key14": "4jbvpTZFFDCRFupxKhAqwzgHgKhi4KZorrtv6ztsqBfVz51YZurXx4V84xfvq21cH8hG2FMz7NmcoAfsnugKwh3P",
  "key15": "vA4BGPbZLjK1BRRqHn3ejYxHd174c6SzBZUBRj5iUVJUzxM5VPWD3QyVanPGAmNQMHVHfBjMiWBBD55vvAnPPoT",
  "key16": "2g9TpSZMudSXnruvacgjPnDJDYt4vXBGkN2HH1ZBVVtmKsrSc3X2hRU46phMmZ9TiY14euMRyKyywLPEToMiMMn3",
  "key17": "5yGdXNT2d1YNVwmi8GQkJ3R7myvncWZD7AarM5U5QBnUoPnQnMd9dHzfBhby3nSiCz5kZ2yYV337LguFmhP2XoxQ",
  "key18": "5kmfKiAdcq54t4PNX21URzWtEBoigDzaSRv4oxq2eij86CVNKb4i2jB7FWZ5CWAZ6u7fsMJv5q4sXG923S2eMtoq",
  "key19": "4gvTsD3cdsYvQPAqPX7GVAbs7TuSSNSHMDko2gnwk4zXvE8jrUu5EXaq7dWDVYRKRBTC8TV6qJvQKsUPaFDL3SEZ",
  "key20": "4wXs8Mm9EQP3SA7LU8o4o5dPEqQeBzeYKiSyip67E6Q4ZFVyyjM8JamC1yC4ZoSvhokqjr5dkpbU68WtmX72KrzR",
  "key21": "4acqpgAiAKeDDHTvzEeFfVPcefokmz9jg4J5Tr7z7tEWwUfViwEzG7NcWHMXsoAm17pjWDPN3ZtcZjbkwX9iFqhB",
  "key22": "3KPQ6hpwuAvZWZqfakU1x8XT2DKtfQJ3b4Kk4PQSRpTntzwnXa3ZrL5ezEsHXTZuyp3HJRBQnztCzKFV5X9jGLJX",
  "key23": "41KywhYe49VMSZ7mtM9EbhyMtTyTEuWvdeEV63uXR3L1TApLdpcT3Xs4bBadBJ5BPPsDJ7wY3U8gfmYpK5y1214b",
  "key24": "3swtocoJvSq4K14epbXTrCq2J3atUYhMhJvrNT8bzFg25XF97XFhG6WgMg585snvhPJ1KG3Xv1MHrSucj3Lfbtay",
  "key25": "vudzjy9qtWc9AfGCNJ9HGg6jei8oZ4NG4E4khUndxE4rhC4gwrKC96GMBNK77V14oYP8p2v1RYkjMXmFvumHaxh",
  "key26": "7F47VQUtZhQmQa9XWopqS6JhWLvDEGPdEUmc3dwSmdD6sxEBNVFVvNkqFSeyj32yKDPKRHHSUqBHdKfcxLvPqqr",
  "key27": "3ZSC8XXXdCZq25pHX3QBBKdpAj4cbeng5xJazxpambMHs921eieKAmc7MPgcPiZDav12EnWyxhR8taGpGHHA3WnX",
  "key28": "YN4RH52km7UaP3kkNzxkxvPBpLHqZH2HGHmvAxJETJvQEszGs6Zbboq1qYkMnj1YVcVJwrSVg8C8ucp5LDWLgNY",
  "key29": "3qXfCWfvcmybGoCVtrpRLfQcnCKUxsARrTJkhyWheFs9mQ5kp4mMb5H96dF3xt72X9KSxBDp4Z3i9koHSfdp5t9B",
  "key30": "5gubeywzDkp9P3eLoGNkEB1wkjo4rLeJtEt8mT3aBMU2gL5tCEyZqmSGFhsnCYshx3TbUgw7jVoc4NGscxY97gaq",
  "key31": "5ChptooYsWuPZAtqeB5CEM47mYUuep9VMu4vTsoeXY5UaxGXofTmRS1kxWeeEGQmAXibHmVPsLiYLUh9osPjV4Ng",
  "key32": "5GrD8WAm1XPGwSPvqQk8e6B5ESQMqz5Bv8cbpJkwVdKd8ijmavzQ3p4YKNW5adjyMajETc5UsVdzZyMjC6dF7SCT",
  "key33": "3jQU47KxZXQPDn3NfcK7bVNr66jyVrEHGN99eezDfgS6WaQULMPqRqtqhCZYKtBvFKgX9an67ssfqL5cYuwWjGgn",
  "key34": "4mQFtREfUsZcoVqkSsVuwzfeTcErCoYcJUPNKXY4v2MuzikQGF7aQ36H6618ibrwLxS4xx1xpeETFpHmDBMYQqzD",
  "key35": "5zuQ4PhQLXdgk7hG6RPRndFWrsQfTLZH4KcZtRwsmK7EXCxHyoG3VCPFwbc5vWrfgYcCu3jZ3PUHcHokga1Wpccg",
  "key36": "4qJU3Xt2QYS1NmPYqmtg1fF4v1nrrvRdNYLHkVTk3jPqkc4iiG7YbDwnbZpwH7TCa6CfvUSpjBFRteaK5zN1hZBG",
  "key37": "ufRgoQAJ5ATFyLYzSFuMktSC6p9SbFGP6GY9tYSwy6nkr1CXA1PTRW3uHoajgfe4kcEvcW2EJSyoFzpjrx4U6TY",
  "key38": "5zyXqc1eAYwgkMKpcK7y6cWd1eCp1QGKWcfECKxKzZyAs8SUB6WrEqCxJtiB6CtU7eM7b2RvnxTK7NPP6HHoJX7a",
  "key39": "3xcyJMZocyCaUbbSfdWYAj2hftNXywN5trJhFU7sjwE9bYDuLnzqBuUXcw5SQRRve95L8wU3btt52Rkqb3FGoiUE",
  "key40": "5LUs9QF9EyjgDpY64B9BnEHN62RKjwrAsGo4XVqxDW6TuD6zgRfZ2Tj7bHihbnxJFejXvj3Gb8wJvAn36WVfpSr6",
  "key41": "5HkUnTTLTTz4voGmXGCekQkqY1VqKDNqBZ1hkFqTcoV28VktYnXpDZVc3hB7fb6cbABW25RGnKmhhidJwc3hprSZ",
  "key42": "vNRXikrGXdn8nUEK5JEKsykRB82MXL7bcxmch6kGXLdR2M9hiGh23DdsYVKT73ZrJZetgvgbpTZJp3sJQQiJnDK",
  "key43": "5UKFUksa3R46MCPwCWmzuXwZiXfBZUSHXUcPs6hkG8P1hvgNyYXttE2ebLAriYtZWm1HUg3wA7dZgrgWHTte7uoo",
  "key44": "24W7Bo3gPQyx9uCkvWLg3zjdLwUpmGVjEZqEXWpHSR9XyBu9X3aqiZJ49uQYJFr6E1irehZaxRTr2M1TrmQJeXfC"
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
