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
    "28eCtHpajA2W9Wo7Qns9MyiiMMk4JaLyeKgSJ94Y8G1rGwh6iLWt8bVRUT5P5xFTiEsCrPodUY6mkFQ64dcuDB9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jEPng72WVUz8Wao4vHVUnSmq4CyRUBNhAw6ERqAV6mLxiyb9ekBA8mL4KgCMLgcmzuFLB91jm21y7KnMcdNb226",
  "key1": "5aTmBKmyntKEqJAzH3pmB9Su3dr2jUyWNiZE2NNtfix9S99zbdBBNPbp4B1sNWZvZKjLEiyyr9U92RJF3bx87qX5",
  "key2": "WUFMVk8r5wAy1CxALA8j7uZtDw99ESzbu615R2PZc6dnq834Hpg7kpcLHfz4aizLGPbYWKH2vFEPXZU2NpqJEHn",
  "key3": "3peoEQSaVdM7iSdSbBstdqt8zMHBLDiuCW7QxiAwnYL4nhUjWyWS1FytJHvVELs4oTiVA7bJbTdZ6MMbfh3uuZqU",
  "key4": "5fMupvuPfgUG5NrFtVCBBHxZeGiR6PCHr1huTkUhxYo7eiMYK9L3G1KquYdWJoaRJqzhiH4wb7VuDhcJiXjFfsJv",
  "key5": "sTTs5WMHejrwmWKsThv1iJu93ZAYjVA8NWqLSjQeV36S2SsFdLZvBbGtmyRPwXPt3wii1EmDJmSDdzkEuA7tkaz",
  "key6": "2XcLssN45YRfHgQ8cZajZHiikTug5yJsZXHp7oQitg8nhp1Ssuk5UdtFyA5hMGq8S9419pUrdc3gApvmuFETrMg5",
  "key7": "45DUSipsLj3Y2o9CjDFL8Gu49kg7Ko1Qp3fd8GXY8pJaovJduxNfrfaYJSjbbBT6riyF9j9wWzt83rySjyCtj9sY",
  "key8": "44BVeodpKJ6zCa3jEx8bngXDpiezfRjFDorhqRDsUaWZAEtueY17Euz8Ltj7CpfEAs18nFn4c3Rr3T7vE2nuJU2L",
  "key9": "26kyR8tuJt5XrW2Thkpg2nT4Ko58tRrFhtwyuA1aAQZ9YTTr4N3p6b5n61KKFGMsMgHEWnVfcEPHjAuc2WWSXy6h",
  "key10": "3XKHE2DJ38Hv47tyGptz5iT6Fv5J8fMdnjXtkJwZoqzbA5m8Ph7UQK9pfiXsnyH3GkeJ9mG2NsmPxnfJkr5KB9ud",
  "key11": "32JXAnWwzn45RSYZbfEJxQJgiU5sDqPn7ws46SUvojHD2tGkJ4uX276SDrNhVm4XfBi9ts5SBk95HYTqtjFxNsvM",
  "key12": "5Hdjv3Gvro7ntLMD3kRP7VkHwxhArnYC4sdJt1gC3bHfFHHhh7Ms6iTXtcv8dZH7qknztebSEqegTtG8ZcSEUF57",
  "key13": "b4DwKmW6CwzWpPrZs6L3roLfFQwqGu8mnumsMTpS8qH6daZPSZuUG4xqFyN8yPxQHY9CQyGPb6MAgZBqWRRBDB3",
  "key14": "3chwNVs6SYcukEt3FPDJ2BaSatPmdWtVB7EaSDA4ddLEY48abpeA6zEYF7MNwK9o1shwgzxi5Xd9C7s3sN2WrTg8",
  "key15": "4GDcGTPT47t7LuLh5VJVPjXW2D6YcuJXm9CbDSTVT51BVu5cTqSq3EBuxPbe778uYQTPpFNLcTsVH3XZEkannKZj",
  "key16": "29ipHQFmA9hardpWXwgtPcFAJW8PrPLGQLzaG9AqJD61KQdVjTvHQGmEMJBP7vFrfA8aU5MASM4P5NHM7mWbuuXM",
  "key17": "5JjJHABddZq1aCTBGvLgJFCHKNEoefxTSMBT8Rw1fFYxRZnovthTyP1dycpW2JkHmEChh8XsujLFnfxNh5SZvJqi",
  "key18": "yLwKpwYgKoFo65WaAtvBrVXUcHdKuLWfJG4T8a2Yw47CMG66Ci7W8n7PFcjWXjiFGFk8KeJ38ao4mF97aqHodCg",
  "key19": "2YVgxCfjVQCZBVg4UcBkxJu55bW4i3NiHK3eCPFoPCur5DXr56HxF2mVCs7Cempd1iUmshRmYRbk2PDPSuXnUqrY",
  "key20": "AJtCfsMWCZ3b6zvvhaZGQfkrZWAGDPa9yXDMUSSfShqDtE8gTY7MHCYsQanoTwwh9EMBUfksHBXWYsygRtnADMu",
  "key21": "suwFeSCeKbX7iUkBNpa6VAWVVEkQ9Du273Y4hKrWT72fieNx1R4QkSyUotWpcJtJJUkoxhNEHQAp54ZKWAkRcV4",
  "key22": "4ao2fURLXXLaGWQek8NESxBJ1wcumtRyBUDBMuZ7aotb19Pbgc96N94BbHNk6zLHSe2Qz8ZngY9nAFt4Sn4uoqTH",
  "key23": "4kYU2TJfeia3AjYppSHqc5W88BU2UiViC8jaaVUcNYKjmdvTm4cY3N71JKjybCJGRVFSL9MzLiMQ6W7jz5WbENAb",
  "key24": "3iSxZPpLYSJQq47eKde32vNf69EunusjtadWJdXXojrTzMBMdG572wRBP4iTkLzERoz3TdGURYiSdRrdxDDvZdPQ",
  "key25": "2UWjaMG196ZYcwRcUaQc12WH3pwi8ns2oevoCU7xou4okcts7Pp2rSahsSvMF6tRqNYcZWCoaDWe9fY9Jg64Hu4Z",
  "key26": "5uQKSdrXojHtMLCb6oRoxyQ1DHER84SJsmmHSY9btDSc9oq9joQVB7rYM7dQ7AzKLLFwPPSdyyMxqkb6S5vBxXFo",
  "key27": "3Xd8PUpofQsJuEV6bXHLgvuXFgAzV82UGA7cYQkAZjdBZc2kmtMnk9BAS9wL3TfAbD6kRjAHeRUZ27HEbq2hWwxA",
  "key28": "3ZCL7PDq9d6uDRwc8MwsrJHDvX2tmKeRDRhPw1WAtQmQ5G1u5T3u5MUp4D7zZXRbHzXJecgtEFxywDWqDRdGWPB6",
  "key29": "3DNsdk16yURuaHN4XJF5UkaWam1FY2YniZcrYySC7xonmTB5vDnuGCQPu9CTXHyDWjZP2ogKW3uSmvQrSy6EaTon",
  "key30": "2Hh3hvHa55dmfTo7d5o9snMoRsKPKbWjx8RHXAGXpasbS1Vj8pDvd22o895dDSZ8Qh3kVwazBapg9Qkv3EqXmWxK",
  "key31": "4TpUryxvxcWU7jNidQwe9ASamDGgfPgoDpvzzpvmyUo1iWQQoePQCo6AvubaeK1tLZQ3Z5a8CSofpRbJL3ZUWLex",
  "key32": "5XgDxK5DsqU7zXxdJjCjEFmNdUwixtcB1dxcWTvjcARFbbZmfJ6RZudzTXJwrNPRnbiqzxwVQurDTaiL3kJb76W3",
  "key33": "4Uc6rqRP1XgcbEYfAC5j9Szp27V5Xy2wWsowDHaHJXht7HasjyiqY8xL7TE5jFawTLU8xEm83RTsVmGqVLZZxwXt"
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
