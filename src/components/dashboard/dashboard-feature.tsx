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
    "2fXVuPi7hctWrcPj3kXYDLNXt4SJMX7hVayGQzApgkmgNJegQrDknMGTE6tjrUZvRTuQXeDZvSLTEscq2NfRau1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DWvzoYihzuqowqxo1qSfSAhkRyon9435Y78QPp8ESGMQRmdrZPyiQU6zkvvYPD3kkD2Bkq6CFzVzFPXSGrGw9wB",
  "key1": "WsZsfsMvTQcuiUSCGjFNqFw9PP6FcCxvvQ5nW7eupaG3VqRDnS5GWVLBihWPPBA8gnzryQWxe9yck8HtxKH5DMQ",
  "key2": "3KKno3hVjJAsN2WUnvWuv45aEpQ6pCSj2tsiEa6TmUh7q3W9gjn8tcfDBdYBnXAgmbPBAhmD9YtvezRE3FSt1Z7N",
  "key3": "4gcxsfsWLYZsE1nHpZ7eNNmEQQ273i2w1Yv5Expkb4iZtxEAY3YcVdtPt1YV3YxJbxQEXLn5Hdf9h3kt5c4pLXat",
  "key4": "5QhagAd271yGSoVXbjyw5M7JWQUugRiXZarkAGYwboMksLCSzSit4ZEYRw3NTSpHZRw2oJbpWZ3rG5gmzf9VVojJ",
  "key5": "61mmTcCJRPCfN5qrjBzBf3TZJYynBt1FSSvHcLc6ofjRSnjsp3foqfwbxphtQf6fU7QbAE8RVeuY7beXH4VayvDN",
  "key6": "4Q8UaR3dV8fvniA659dd8K7hER9oQQbwakNfd2a8cKGC5xxpUbZhWfFi3dtzux9Zc56jknZy7teLvBMCmJ8ZDoZj",
  "key7": "345hFYXJSfEZhtbeyooa45eFBmjqqbFgR48HKEBFA8MX8LGr6H1c2bBopo6MVPuSvBWem7RBeJwe7TZDJmdyPx9Z",
  "key8": "4YcfWLMoQRassH2qgYpjsRYEf3UM1unuCHQuKJQYVD2bZ81B7ey7P5b44p4LS3oapBGt4JLxPfPK5kAgMDWzatYb",
  "key9": "27Cmhu39bgEvyfYggaXoyQquxs6pVuN6JyaJfCZe7xPu6oLFPjECoMxA6PYZxm9xJUdCmvyEoZSMgaZkf54gDFZN",
  "key10": "2Nh1J8gJMDuzmDCunnCAEV9MdUPVCacdCCx76X6DbPqSXxLRfGbePLcbYRBaAF5omgQFSbZnr3tF5UH9zausbF3f",
  "key11": "97deH6w3kE4nBSmQMRqSciAzQqnn2dWXkDDtJBcUBL2icU7xHWbLXNUbLZjhoZRVjDvCNP2NQD59JJJg8GtPXrK",
  "key12": "5z1nfEgfiLEv9pDrwozKGjEUZ4e44fe9siWCg3t8fhz3EcxAriUfe4LHEywg8fsbW2gFBe8XycQ6zpGab8g58qBp",
  "key13": "5kTxDvqUpXvqjdz3XbQTTX1DeneES38QMpw17Du5arb9MdhFDdXVaxg9C1yYUiBfskdZWwj8wdYo84T2V5mZxXq",
  "key14": "N5etp569ywicm817oRDyNormV8KnWEytRSRfyfPXrxvfpNibsA39xdjnYGktBAyxR1h2KwJKwHAWsfmCK2Yrquo",
  "key15": "4FKGgRrzUnHKf8VgRotw6tvsyBrLwcqYMBwQKzxceQ5QLXVrR9QCcJ2Pd3YKF4sLaAwyHAtt8hb96vUgp4ZUP4qG",
  "key16": "4jHc6DoY2LS8Dr2PgpUckGhgcSfWt2btTFq1xaJ2Z1sgcqsSpG6EH228S4UKhRtVdsUG3MWCWBKUZ3z3TzUAiQX8",
  "key17": "EPdptUMYKPFW17tCwxykJF9SgbUpvt764RBCcXySuUii54Ph3428LBin3RunHgdMUYb8WMXSwye9KKu41tvq44w",
  "key18": "4H85E3VDa6UGTXJ4yyQ8YXam7cWqc7r7pPPedEb4Yb1yKhBsWDwpA6STFqR9CjK4YxYTGUNuc18kdYCFXR5m1P62",
  "key19": "67J1rqjGxXpZwF1awEWcLKtyv1zSfrkH7QW1Qqrz7eBgt2fpDrJa6jqR2x3AP5ZX2i6mQGKGTRTo8fyDwCFLAY6v",
  "key20": "5Fgn8c7KSFhSVHj3gfYYZptcFHCANssrFNS2y6F46BB7opVUrX2SwqDdYKN2UU2NGhMVSP6LXdn8hiYAhE6jEdB1",
  "key21": "5keQLqjGbNe4DUEMCvpKv2G9JouCjiEk2fLgbNM3PMqyPYBWEAot28wqp7V6S2R3ukbX36Kx8o7zgMcLFM58Qvac",
  "key22": "5Lw1Fb71L8wWw3N3ohKLYxn6RpZpUh9Kd88q7aRkwmXYLxwesLj8isvmt22XC3wsBN2qDkGMWgqnQFmcRqGbkSzv",
  "key23": "4Zh1eM1wKz6uKgtHMfuAyh1eH2genp567moD8uwZ9WhNnAZxHMEGufErF2sacxJWdQ37kUcbiBSHXjJQEMDTBDfF",
  "key24": "5fc5EMYVdzQmErm1UnCD3xNVCy8oHdHsZ74vbeMjq7oAz1WM5Vu6KiDatmVr65XFNqVjijhLMtByiXXhjB7uUFT3",
  "key25": "XiSvfcDuvyoV8XjEeWP7QkPqCwqoyd6ms98bEYGAUSa3Pt8jAoybBfuvXDPiidMgNqntW6bcWt61HYfccTiACix",
  "key26": "2bg6XBRvTJtPR4vbWviXiAygwAQU4ipfBv43a5TSuNS4KTEHa7SyRTtVZKhJ1uqFmsqbDhV9qwd8w7M958z5E5e7",
  "key27": "2bwhF6u6PhA4BTBmycKDFYPxaJRFWCdCEvFjYF16fbWDR4YKcmqHMM2XnEPEpAvQxECVT6kjWUoy943jBH1dz74C",
  "key28": "4dKFG8mjFymzewaytzS6nSwEqPmbtM5Xb6vdYbeNE2MJBqzDNfmwfrLuBV2zfTd5qtjnibgZ57CV8nZSB2nNVAXi",
  "key29": "2bwSweeyeAhvFaq7gRwBepJYKVTzWYxGgLATt5KpS8xAPrYv9rP9KPvg95Jkrk946bVK4jQE3YbPMMoFeY6yjmJu",
  "key30": "ijdiU3oRDqFeHSQE1r4JxjzYYag1rtrEzVGUGGuDk6CiyZPcxc9giTLsjyGTNKvxmsNTdTXwb1VYdCWFWmZjqcd",
  "key31": "5Cq2MFhfEuDez7gsp3eBo7GcQVX5Wt5bEqhSwjrCBRUj1fYmbJMk3a2qLvT16J4Ty28cYAjF7KKEjsp3UUzJghpx",
  "key32": "2hHGVStKWtPPHo6pEof7bnyjHcRubNYeA6N2iH1xMdWuWD7nCgooAaDhnbU6MXZ3euQob7ZBQ7CLEjww1q8e9t4m",
  "key33": "U2R4pbyEBQrFPZ3YwMJcPmTmytjBn7DgxSJs3ejJCHv3zi7TDyBZj2i4PaXPU86LBh97vE5kmhLHmrLCchrFh18",
  "key34": "ePWYtsrXWXmHRPpR7Vkd46eBqch5qVv5ji3ncTwA3YEwFkNfUqs8j1hKZTLHiJTNfnzmwXhY3DxUqpXdXDHh2dt",
  "key35": "5Su2KcyqKuSHeQV9jzZFnSd4SbLyDDt2vNFL8Nveyg6U9LAn1scn51BJQfrmvdzTbu945nMgM6d1egnvm1QXG83Z",
  "key36": "2KQc9mtpMCW5pDnuqSTW7mwcyCKjhs9pvYKJGiffsRfejfigqARGh4gfqkjL9wN3QHMBVvffXckzpcGKEceZw2nt",
  "key37": "146DQZnUr6BxhMxDiLaNVehYwQGb7H6YwrJknsYSMDvc7crfjtNV8GSiqhnxbEY85R2LSasev3Vfa6BxfGDcYPY",
  "key38": "5b1g8osVj3cD6m1cJdD17QpeXqAxWmdsfou4m4ixNsjd1xe9wSxuhCXinXzZb422jTGiTNiU3iN87ZgsULkV6d9s",
  "key39": "7UukXU1FmAXn4iWpSsvxmxLZXwLawk3VKk2iRF6Ab22DhaP1acKWdmZrJhp8YUcqmKN5VgofLg1qEGsZeHcLXDm",
  "key40": "2Fj1LfyhYQGLBJDz5XGQyTZo9Rv7eC6nnxhrkhqCmkSDfGNftgY2MWgXpMZeATJgcVuzkz8QAFyuxnXn1U2t6h1g",
  "key41": "4ghrgcnNWthTnW9PCHhPxa68dwD57U7f5o7NYFbpMHhsAXVQzAGBBMv6akr2dzBs2dnSqGZfhd3Aa5kK3KW2FNuB",
  "key42": "4hhy9ToTuCqNRZPSurP7ePXjCykj4Bm6WwWn3Yr4dqAnhZD9EcSp1oC9pwcBo9Q2UqSnKwVhC1n9vzP1uDzMkNp6",
  "key43": "2W2o2GoyYSLa88byTpFLfNr6aD1dyz1hwZjSDvod9T6GUxJC6EmkGvSLCV5xjd16Pw1rr1WqHB9L9Ar4C7i6rhCc",
  "key44": "3YC9RNfs1HEFsTD4WJ5Lgbb6KP3QJgoTeMYZsx6nYYy3fN8HEwJ5p8yTcTp4vt2ccN5K8HgtZZSuP7CBEZtZcWzc"
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
