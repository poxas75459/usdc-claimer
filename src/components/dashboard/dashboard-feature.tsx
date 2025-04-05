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
    "5xnxq8qEauv4bAHiFgtNTmxzJkJR6x351XPn3dssnnGE7PA6NHe2GRVJS7k2ZSfkYVVMpwhYK6W5rcwrhhwdjm8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38423qGzrRKg3Edsk3EgLGxwvjkbt2YuBZoG3yri7ejsKP2Cof2C3XJGCJ4ydR3McxUWdnZW8Z2FxZY96TSToies",
  "key1": "owCycc7MstZHWfVeVB1zi2UKJp22cA7bEFoCxsSvPPfTojuhig9M7wLz19HxaZYWH14n5teqxogHUXhyGMLWD2h",
  "key2": "c2V3ETWVt2QKmragnL8fMURJiAaGQ2XXFwa81XHqutnMibZuZiTc2bsjMTzmPuqhf28kDkrpNhs7VpdNsqUgJDJ",
  "key3": "5zyUM465jpDwD2pqqZhhDa2at2uRaUeZVvbHWDFZ3aWbiChz6ixrDKeMJDj4Hofx2dCza9JTNwSRDUvNrQ2tNRm7",
  "key4": "sNi8TgF4JxRDcyya4Z9pJRNMhfYrKzD6icY2F3iBtEXbKzhsSBue8RGs5PRWQv7rauRv4H8FfrL5o3uvZXUdnuw",
  "key5": "2CyAdVEkZUP1VuerPeHABRUTsaU6L9yxqdYCSegAGEkav3qa2mVmWGCuUW1DQHvDt48VQixneG9PvhmBdq56xvPh",
  "key6": "2KzjeR8V9qisHf5ukzRH5gqDK7tkE7wsExY1v2rG6tzvE7GmwT2EVWFMrzPt6zWPhBx44qQi65CwWBNFeUWxuVVq",
  "key7": "4LNbpCT3TkZ7QD8j9a2STV5yUVEWnCyvTYzzU3aWmBKtG6gFYBquPctb6j2nKgVmFXDBqAwcZH6ykdWmsgqLuT81",
  "key8": "4rotSqNuTMYcscnGVdhaTexpntiWcQiayceqG7vLDMwDgaJfBHMjHouLjhfb3v7oKbmLhUwFK1qrjKgEJQyuY7DU",
  "key9": "2RdiPn6XorXh4HY7Q2j3Q1e8AzdzQvxe3wQACQ4JvGKsjBJvvEdGcf7C3LBGdS7UjwXAWMGSmK5B4fiJbthR7NSQ",
  "key10": "59enAWjaqP9SvuDhG84NTxJfKi6DJq2nnMSwgzcZNQvhM4gndE7HzR6zLUpbzkigBpqHpC9Wwwrcb1oSMGZNP2Un",
  "key11": "3xitkBiiMptbUCJQVUX1A9yhuG2Y3kTiE1a4abmhR4JQSYuyiQUEKgcmMZtDhjRuQhyjc9mFDwtGxgkY87QsW2kL",
  "key12": "2sEdyc6LSgcZC5QoN2jZ4oefryC1v4HGhaRDnrGbWQWNwZ93NDLt8747tV14jq6UH1KMtDYQsTEEVSsTkxGYndug",
  "key13": "3LcW8Rw1RUUi2L3X6VuBL5FBCGm75yyYtvdprHaXs4HrghoqHDKc14aP4NdUiQzZ54QhKVmkJ6TAaaiU7rAu6Smw",
  "key14": "3YYh1e7287rxPW9yZMTh4uv1h6RW6E8TkMsP34EnPiN9hCKrvXnH44Ep4sfrzNwva2oZ4437YbxprjEcurGVBupE",
  "key15": "2LbuPGWNbJSbdfB1oScfA1ko5uJ66s7eHULVSitDPAfjwGWVUFHWDnSafMsq1GgYiczQFvnUuLZPeR9tumXRiDV7",
  "key16": "2pUHnZ2mpRBMx34tdZU1X2Ef9TH3UoUDMnBh82qSYomohSDQEDNGck4gSpiV2THZGdKyEXHYVh9jRtd4vAt9w6xJ",
  "key17": "3eH7Pg9FKmL6L6dyFZcUNbTeLoFxgqJ79EhbQTm8uxYFw2KRQDNGKu9qSW9RFYjj8X3NC4d3sN1991DSMnne4bx8",
  "key18": "2nXRW6ZtKgjwtK1JvJZtFzPHA4RAG8PLnZM1DPhx5oFQneuzEVygATh3PYLxjSUSxaL5h4RXu1cxyDuWX8fv5Nr8",
  "key19": "2uwzhLHyZJYTMHRkpwoP3KGZbVRBTcQgXc1Fb1kThjYW6QmHjLvFCPmaFCaAVyg1C9ouSVRsdCgXRVphMRxRRq4e",
  "key20": "9spaej5K8nL19V2tYFNiZJT9UcypN484KhFpmgiNdAqX9aZdGSzFBs8Vp7yCpaFjRgG5VaHsKGmQ3jBNx2DZgYw",
  "key21": "3BG6VVwHh8TENMwst2WSr2XqbNZJnMEHbq5k3FrtbtYJZMayXyHAFmd2qojTHZ7bEysD76Tav3H86fohRoF6BEu2",
  "key22": "5foxZiTgQrF21q1F7htYiTdrpH2rGJbAWaEQEHfNGuzvNM1pTr3fZERZ3mDBSkPSj87N3PKKVizNpLxxzBUkGdiU",
  "key23": "3nbzBPHKbE6GcahMcXLbCA1Z8m4xRGGPo5uA2hsBW1ideU3tHXrE1fXpmq5RozyNeHJrFPZh8sfqGRTqbP9gV7PS",
  "key24": "FCyNRp3GGvCkMJae1ZrY8Aia5afypgk872yskCP1KcGmWZXvfgJjscDR6TWLQD6TY6j6mxgXb35PpMKkaT8we7b",
  "key25": "575fi7vPhPX1XuCfJ4Lz1bAXnGQdxCbtG45JziiXriH3sRKUjWoKeqqRbHjkR42RkrSab8UZtFDK8ANZQmiSMuki",
  "key26": "akvh7fEU7p37qSGFU2eZ6rV4jZSjr2DZnQLas2TJfLfduEemS9UBJpT3pHXgS2X84itGBaWQEdGUb5bbNKm9FBd",
  "key27": "2gcpmWwJv87qVgrGJtLbQU4UHLQraidT2ub2ioqkPtXqg9RioHpLGfxEUp3SXxUe1DUTWSgZ8vxf6mpXnsPYnRCK",
  "key28": "31NhLVM9zPvscVmCDGKorjyBiFnchYQZ3ZZwCEx5FTKryEp1bP4tfnZ7FVMRu3REPeEgaDyJRu3EFUu4L87UXM7d",
  "key29": "4XAriej7uHmkgXZcatmDXbZ6HZsofKPUsKsQodvRjJU1VwRxm8JLBkjiueHzk1rEuj3DU2TxGMf1AQeYw4Eqi1oh",
  "key30": "a5M9hU5cfPnS7QNaYkW5S3nB58BJGKnnn6bHQb3L6K7VWk68pFV5rtq6fTvBtYZLQ5GFT8CuF7Hzhkf36GRd3Lg",
  "key31": "24wfDZyPSW6HFBnfsR5VVWGmaJxMDKnvqrvrFMWC8qGLuk2UFK1kqPTyLPpD9iAx4kQ8YLPdMEbirhmjdJvxKoDq",
  "key32": "59EAuqMuSAFivS5xbHNmar5trLENfm9VrhioBzG69UxQ8Ys3BrTHc7ahRjrmbqT8nQXmTKxvG8x7Zq6ZbFMdCufM",
  "key33": "5MPXbJNthsY76YzrJpYpBS439FqjK6QsrvJwFhKxe6Cpx1FopesoiwtFLzST27FMxYGzTHn4R3mm3kavd24a7rcP",
  "key34": "2DUSvQDcyJaHj5boiAu13WJ42JcBzbngFzcsc7PtTwpNyQUzDBVpyPCjAKvQbksAXvbCv8vmgmQ5JCn3X7yi8bVs",
  "key35": "MgMVqnNP7wZs5oRe9qqC8TYQT5pfKaxH6RyDQuBpc5pcQUzu5An8icRPBQ3qk1cWsbnrSSsQWRhdD5cXsjadgmv",
  "key36": "3ZTiGmbcYipny8fky7ZhJhJzTtFURaHSWN6yzaeppwoePzh4dbPwg9s6Prfp5gUmvAFaJWkCpK3bVk26SncF337m",
  "key37": "3By9FJbuiWX25SHJJ4xzpBy9sEZX1jXqLQGHjXBPuDhHhaEfmoVHEEbXB8bek3nEM1Z2R7z5xwdcBXXagBwQNM5T",
  "key38": "2hwG2biUh7hPtbu9nNJuFWYfPhXWvVUjS17KHwTUeF3fhsCy7p91tA8T6jmHyjwLurqoN9WwBDZ2uUbZhQhbLWG1",
  "key39": "4ys3xunbU2A9u5N7C2AUpehNjGEiGqUctJmHmWqM9uyatpWjscaSTrZGzotCM1H3FD9ioTj6vLatneJDvWucVyhe",
  "key40": "46dRAEti1SzGue3qdM7zPSJ7FW2tZAA5d3nhSuL5oRGTroUT8BB3REpCkLJj9dapysmD8ASTc8GviR5QjBijd4o6",
  "key41": "4jwpKc1ZxmraHcn4aFPCe5sAG5N3f73SK9Cht1qL6KeJVJhkmuxKPtcARZsCoC3NfC5Zk1WN2FUkceyFeYDTTUk",
  "key42": "4ek2UK7Y58fEPS7xCfy7jzuCJhrHyB46sJCPQZbMTcfopk5mdJ9A9LVrUTyau1x7p9XZJ4BgRhrXgPe1DHnrUcMZ",
  "key43": "4cX8ZYjdcb7b9LW8ovjQBLaaSEZWUNqLT5LtQmJe9AxboHrhCXhdwh38UeebGZBnbc2YjB2q2wzDTohDEmWJ5uUM",
  "key44": "53AWGCJS4o336TXCTP7ahNEMuabRRAAfjPNTAkcNpaGebpGCAmcPaMh7CwRqJAf9RAQ6DsMmLSEZKJayDzD1RDNa",
  "key45": "5enEBBC6TLKS5pCDfv761QnpDUH3mfo7FvjyELuHx5wgNjXrSEp7cF6DeBfWaENaFdw2v72NA2dKAYAfyzJpmT1z",
  "key46": "HtHdLZYp3j1tqdJhw3fJB2atjk7QfsULyNsuufJtp1nUqvqnrZr2b8GZfrmTV5YDy1QCcEbsjmZn6FgSG629pEr"
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
