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
    "5miZUvWZCtEML79P5JYZ1946fVh6UjSqqrgZcFJHqxHbAzKty7hf9H88gNifBZxj5nuNA4a1e2nXxS8ZMCaYcRHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VnCke5LNzFG5YVTzjrxv5Xn1WC7J9pcGVNJChAVApMQpkQUMqBnqBQnHVEWKR6ibWPc9xc6nYM7ELS6t63Mzc78",
  "key1": "3tcs4A518uNVZZNoWvXoiUJuR9aBXuMN9r6mJi8pWSXsy9HYJWdKhesvF5nwHn6PpRn1xAe45ByXmDNkF5R84pvh",
  "key2": "8v17b7qLhUwErsymtoGRQMVSp1WN7UUc4j4K4Ssu7prkMkLkACuhFjhoB61Vtvks71jX9WMV7UggDrFKuiBTSc5",
  "key3": "272jBY2F62aQsJHH4ShGc26qBkfor97zgTRWBUGtaSMTSfSBZyKyjup6waPSissusFoJczAA7g6SUUvcuffj6ufW",
  "key4": "4KCS86Q3ZeJfCFsP2kx9fNcXierWdfuZ9VrnRvJGEmcP9q2yeBR7JsLAzf2wVJKNbNK7x5b7uPYxiiJxe1VFMC91",
  "key5": "4ghmoYgWHHwjSS8M2W9uHvZk3TBSzreFujV62h7SyFPM1ASidStQXv3j1PtiVsyxTxr6H2F4Y8Ga7qATtRpXgoou",
  "key6": "Ns1aasg7cwao3mwxA2KpNUeHhz2Hn3ARuCxtcvuoQNcs4yMuh9WQo2ja8JP9DrvRgJXn193i3eTMXmDciUeLNEA",
  "key7": "3vshmVRT544DsoCd6vz5vJfG1nDnoLcsS1KC1azUkatfnVxnha2g9JsQkd8AQcL4mTFGM9p88QYw5tRKYUU5FFJA",
  "key8": "3e1LzYGGPjEqmfQpvz5yEd3exmtQaCpXZ9WkN53oJm5jpaWhTfDgXwSUG2cpjb15hHFrpPLb1hozxwVVdNCn4uXa",
  "key9": "4FERTTMGHXFzp1VjsgmRXNTC8PJaUfgybhoCxnsgU4ocFW1mTb9eXSDjzbDsf5kjsNsxtsWMiNsX7J2LtCGzYvKX",
  "key10": "2DdUtTqdTuRb4UWavvCVa96Ss7TUWi4aCxk8CzSMd2Z7x9i4tLJd9m9kRj6j3gCJWxQ2T6bJ2iecDnHBnQdK6b4V",
  "key11": "3tfQgMiw5PgRXnjtsTGsaVjbr97Kkb7yHgyouhSFmkA7iZr11ncCGFCwzobVNW31ZNRAWBj9y6QLDViuycBpjj8s",
  "key12": "GhYA9WrVH9DxYxgz1EkSqkJ9RmK1e1dhZK49fm2MkhkoS19ZQqfT8EjJUQWZ44pHG1S3Crg26tBgfgRdiTmddh2",
  "key13": "5tf1MM2wLYZzYnFSpw1bRYro5133d55aRuesFbjxyodi42gaEGUgGUNthEkgvu2moGs3jKfSTGSsaNeKUKzMHvxx",
  "key14": "4X1yC3sFMCMYeEMRzPkW5VnHXEShth5KJkZaQq3Drut4QaombTFJW1h8Rh7Xh8ZwCZUp6GAvFJw65EQwpHFe1WZE",
  "key15": "3HS4yMk5J2wZ1wAMvpN815GhUM7zoLfYWQBDXSpS4i1DGhGJXgWVB3ufbifJdFPSNQoLthXNGgPXpUWFQsooYvcA",
  "key16": "23wKVqXfoCSDqskoNAENF6YMZAakVd73mRDNrfKBs4p43qQNJb98npRxBo7ynuu2yTuMKf9jvDbMQH3RDJ3zC4ip",
  "key17": "2yqSbDdDEo2uxnEPVQxDeCbETSLaiFvD4WTMKkbLb4X8ZxTAHDqqwjxfDK5wbuucnVaL78xuP55oKRK9Efkb9ccN",
  "key18": "4SrpcQvDBUqu1xXaD1sXBpXGSD2UgSb4Bv6YMShWaeVxKbQMX4F3mfmbBpd4mjxxTpHEAXmqH4d6XQKQEGCtPsc3",
  "key19": "3ie9Jxmkqi8We8pWG3JDvWzsokYEwBqhydP3WwXSEjvGK5UemKcxddTLKsUWWQXjrnybFgXpdiZD3d7TK653DNda",
  "key20": "3auxzD25atpuuXMcE7FgBdm9m5Pkj2WirdZwdc6WTg25aVLAUqst2Wk1dfuwTxzmWN873LuEtvjD2quTsvgPdCg8",
  "key21": "4hvYoQkJfaXYb65VQL8RVUwaRvnSEnhPKaiSAoYUrKDBWZtw5X5W5MaB4qzbnwJwwKnHDHoes7R3xhBkT5Q3EPMi",
  "key22": "5Sz64GyAfv2Bbb3P9JNuSwM5HeqqpRAV5eMRgukXtytfVEywepnKVqZgcnhEK5dY8sFqwT5qguQWGAAshxX4W6UN",
  "key23": "3KHrrJoeB6EwEUu2LsTG1Z7rEBM8CUCDTuNhAyUe5A8NpvFcv4snRq81tjGE2q8HZEcT8xn9JhhXXpY7zUeurwJ5",
  "key24": "3fnPwujD7PA8dtiqj1KqK44JJ82uoTHzgnzR325Ej6ECMyuS6zsX5BWiRrnYjyk1HJxfAzi8dbfhnnqxdNzUm8Yd",
  "key25": "t3Xis5s4GRFv3ewxeSkXTYRifLysw7CUMFaRMSaHwUAiG3ERPc4LsLgFPBzKgee9TUzSFdfSBErnxPwHGhzGATP",
  "key26": "ks5LVrtLDRTAUHntRLryrzsmH7Djj21TuNVHRuzF475rWfFwC1wTuXwkaU3Cm3GE1pKJBWiC9JEZ59pPZ9h1wjg",
  "key27": "52k9BgNZWsr3fd8X3C4JEFQam352iExr3xFksZn15cSi3sedBcxz44nvKNUrZvhX6twTUZgzVxPtFRoT3RY1JGHf",
  "key28": "4nM4uQxEVhsfArcjYwmwCN8iZGpR7RBX4tSKa9GKe5Qy1UV2pobqTxCB5tYtYYGDjLD1ygXXGZEj2vyjyLiLhtxh",
  "key29": "2vGSATTzfmpQWB5BzSkehU9aCycmBik6q6P1ihkuapKcJ4tohEPf6jEhrVDziGJDicbaQ1ALyyjeVRtCzfzbZ4YS",
  "key30": "3fpL5xJThueHdKEoi9AiUUmz1NGdXBkArsgPBkSjuZ3T9DjnvPojbxSBv6fvbaMWbSSqyTJhHtbrPT1NXBRSK4CA",
  "key31": "CoTQ9fzPdoNWfm9nodttjVFMXhWzLdif4H2MJiWNRUaStYBZjKmmxUoDqb51MD91njLVfA9zTkAhwYMpNrLfzV1",
  "key32": "kLTVBFz65qMmBGqVaLBJmjp92z55mgcCgQ56BLD6cHoFoFjnkz8NVUoKXSaFVcYDhEwTj59vR5NLX4b584jngdy",
  "key33": "3qP9nZpJKDRRrTEH166D1soVbgqZrzor2AMsvHWsttFeJipxg5M4bfKqaZeJhGDbvSuicQVGXFVbbQboxaA8gkL3",
  "key34": "4chehzQqrqtMRC17ryLLXeKn9sxw9y6ixwjmbVmbogvrjWoqfFWtZsLkd7UUaD5giXjE5RGFDWPXDf5jaaSFyy3U"
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
