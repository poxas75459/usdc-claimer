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
    "2KvBKcVWW1XvKanapAihzDYpFaXtJva6wYu8jKdBdfPLz8bG8QtSJ6tuzB3bWqsPzsZJo3yY6YPbwdjSgFyv1Sx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yp6C5FrL2wjWaKtHgTupCAmfwvTtUc9moD4nVw7fUUf3LByRrihLHYvoBgBMmUtby8KMBEuBmEX9qkRRnM8z6or",
  "key1": "3CfHUJrLLzBZTqT5ZDac5RkMKMYaQvtrsFmPjy6rBPgBUD1Xi2nQWfdD5sLCZZicXwBs256xZhvWajUXegFeph2b",
  "key2": "2NEamZCJGTvdtbvMrynMYRQ5mDf8t62BGd2dUpa2pRBUJnUrBfDvqQ2LiQZBXm8ofs6688TY3THxQzA8cA1KLjER",
  "key3": "35eB1toiiMxu77ooruGnGXgSgJiLJ6Sh5baMFnZgQaqzHpJL84YLh1FL5RSAoHCP7VUEnRLuBmHASgHU4mVT9r5p",
  "key4": "24iarewmdaBYBikDe1jWLQiYRhveBfNSddbAwXfbfjK5rbXMVL1gdMrVLq3ZaGRzMRSvFiqTuQxCnFLkLotWe3aF",
  "key5": "zv7EDCWc3aLxebPqXFRrRsYNU3AxuveVAgtpbsiX5PRXLHmSnUduNaFAuMrB5wU48gme8cnvrHCPz5etM55JGbC",
  "key6": "3eJRLTxM2H5NXV1XW7bzJGJVDRvcFNEw3Moj8cL32QuSFfHu73knVMqPWM3Pqp276RBNtsZq5D3nemt16UJ8Lvia",
  "key7": "2kHpEcPqyfduS5uskiuCeRir3Lou9dWpeNBKk7zG7aCZTCawz7D7fbvpjvGPTWkVQkcEL3N8KqsPNqawt7iBV218",
  "key8": "5YtK55vdQ4AdEtrKRhqjmJVsVfp3dVmCZDZYQieZYSGetpUre7a27Sf7HKiVEKDpGy4SUksvEdrcUgmZTumzF3E2",
  "key9": "3vj2fcDjWtL38td3YmjXLQmg45aUwFuUTyZkWFSyyvjfrfhAJi3MipFQyd5xFZhCVu7XLajaca6RKykzGfid2iBX",
  "key10": "vDQSrMuU1yJeKpoqKWy1mLcUPeXpDeSC3jHRLqsvYPY5BijcTADYRB9kXHKKxomW5xWPtaE5X3ufFem5NbSceHT",
  "key11": "3xhLUhFehqgwBDtMAWZf4AUPg6ckWSzSHh2Z95ZviPS8u9uNwNgVqoNEbcJZsJKx5NUudVQH6XjSEvxfWhR6BsND",
  "key12": "27gZ7YPfdJf5VLSsq3AFwqVTqNFnsozEiLFm6vJmB93zaNVzzNp32DNRs7Fn8xKeExq7WPY6ruLwWe1JRsA3jW8F",
  "key13": "45xQHFhYXg88dYjgqeMjoxgZ73B8uvZcEKYcGFVeM62RcA2v789udabQkPc7UwpBcHgKuwHLae6wX9NXMfNJdgCY",
  "key14": "EC3WdMb1FUTNQURq8FinVQrUtscXDBgubzGcULENYbMKjumngfY7kxUSnGHWQuCfKhRPznfLUb2iDKk8GdqPPbB",
  "key15": "5fNyhoxbjRV2Rwapx9S4t16e7PkJtqoFXr4bc9w7C4L4vM2TjULS5Hp9qCzxtnEBRvjLu4rEPeerBnUoGGNmu9nJ",
  "key16": "3YbHZKcv2KJWk8qx8Jmaw7HNPYJXifsCPHsNbdhmZHmR9yrn7VzCNCcyuCZk3qL8VyEKgQn9qpx5RvGywNY1yaeL",
  "key17": "4J7n4ZGujmwiifWbAHk7EKmgn7wLmv9vbmM1cpg5tTbCtx8nLJzsXXmkmtG8mVz5qQ1Bqm2nM79PLrvRnXPWSVz1",
  "key18": "jmagqVV6hP6cxmdjenC9htDfi9L82fS5BajnypBhLE14aTdziiQUPsWB86iSYWFzwpb7nMJE6GXsRwL4pgStct6",
  "key19": "2YjfNHqCJJnjMzj7rjQn4L8ZTu1qUYVzrgihWzvnmHuNjwfLcWse5cBGuitNr5D9JUdZoqueD1zA2hEtehHYjGQh",
  "key20": "2pMdQP5MEYo5djnMHbQic762NsM5RiQVgdDuBHxpUPzNGZZn79r1RGnjXEjHoQRw6hxRKm9863guh6UNyzw4Uw4T",
  "key21": "2LXRfQF37E5FofkMZ6mS8WYRUUVTKPedsRZHZXXkXPSKNFNeoYfkNisuBEDrNhzSh9CGDwTbL6g8Gjcs2xMGL4rF",
  "key22": "3zspKnme2Qwhpz42zJQBU8Gx7Zw5Z1qfpdD2hd3F7EWBFYNVYYkCrpWvczMiUfQYQGzu8dJTzxEsunjqm4oC5ymx",
  "key23": "3SjW4VaKV2goFoVMjKBWkH9dNaFraz5S9SCqa7TkaHRou9JhzaTFWxJ4hvEJQmkmNbikbtGwxoSVxKnYdPcia5Sw",
  "key24": "2GFxMM8GiGpdPNCLi6otLQTR7adepbi3XQDXNURRycrcoqvFHLvYcNiZ9RMUyiQpCP2o2KmJsCetqQHReBpF5WAg",
  "key25": "3FirEmUszZ3uotsMssw8ayrqrhbcQtw9R8Hkx73dRnbcrAvzZyovPAXS88DjJktuKAyMCK1Z8oP6uHe7avyPJepM",
  "key26": "494jyAXkV6vSfBZX17AqsYT2idKm93CfAG2baNnKRdfhUVb2jfS2w46dQNuf8R9jH8mWhmAoMg73RjJt9ESEkDRT",
  "key27": "2fDeRSspqQ8nBCTFkrowp3DjBbKagBqnFPvBUAUpu6Bpr3dNdndqX5CoccZdN8Bgyv6qnLMJXmUcZDt7dsJWwxin",
  "key28": "xbMYuYX9jDE5gbtzmLkgWBssrXuoggSagf79wzqpXzoHweNzycCqZuMJcwSQDfRqzjZgHzoTy6hwkTeGWRCJA2F",
  "key29": "41T4iTsiNTue1Z6Ci7K1y7M2drMjpKmySmC8PmueyfSveCK2Mno2JYtSKte9MKETay6bBPciKskCXRRzydrBqegt",
  "key30": "2ZziV5fXmL4srRaBmCSZ3n97owKbJVsJVzNHsecB4QGr69EcTfnRX6f8yvnS8r2MPuKWN15DNEag6vtjPq1bKoGX",
  "key31": "x7x9AbQFSJUt7MkwssKxfTJ2KmvvEa1yFNG9zc5yMhP9yxNDnjyY7iCBCV7YyBXHSSMPjabkiFhPXrXPQzazNnZ",
  "key32": "XNrqkwoFRQbm6ah9JanMERPPhrjhpW4FmxwhRWKMB7dYryQ22vzA18UmdR1Kvo7By4aV6Fe1zTUcBLu2FpA4upY",
  "key33": "4JACBsusgKtBgpPave78VWrWgR7DcwDqCMpK4xqjEWFzsKZKjfmnmHsX7f5G87FHPdnw6n3PaQ2wpHDsL9JPybC6",
  "key34": "3NjRS4FH6CS691e9Pgvx68HoAfGxRaGoJ7aG627iMvXzV78HUfx6nfaXoNLrdH4n1rFVhKXfAFW4cxxJHRmsRpoH",
  "key35": "3YvK8KYXoEtDXb5dviQEbgMkAfcZFkCPzuGtSS12cVvrT1LWf5YQ4972d2uZHikkr5oqbuqxVxxCHXp3FRnpu4nA",
  "key36": "4vB6sD6JdyvLU9MW8UsnJyrm8PG6NbRc6NySC2VnxqMt14MG4UfJvFu3BMguYvXK5nwZerobiNAtixJEYZaMHq6a",
  "key37": "21e71A4enymK8z8RuZ9qt8TDCJKvA8QAd3KvEKDyZed9t4vqZkLcYKRejAcudZjDQ89EviCRdPxS7QgA9fMFp6X4",
  "key38": "4ZiTuyZU15nWG8eovgtsoqiWxHkDxiEYWDa8xX1nAT5ErpY93wRB8ybYEFGzYULgfP7UUE8mU6cwMhtuTCKbvWaY",
  "key39": "2umoAF4zixhGT6ZH1qdmQLtUE6XvKNAjjwpYu4oYebNZ3q5S5N1AxnfKvz6eoj3NopZTkhGVVgT5kNV7V9Jnesd9",
  "key40": "5K28g4VVADQZJHdmb8yrfEAMZQFaLwUC31EbajgGDn8dqbcUQ3LyWBmfxzCbVQBX8JpNyUK5uHtfuLqrbQzkj59i",
  "key41": "261pcW3tA4gMR8yQhtWDrCzaCFcHHtvSN6NVFGqYorNqsaQL3ppeFFGTXSZ45ExPRiFKZna8AUDT8MshR8QQx3Vi",
  "key42": "QjZVA3B5f9RHbLZDdrASWPjuUA7sJvKcXFPfyj13GtW5inGohzBQZJHyzPattbaDvfVTGTrkmXRvnRM3S2z6cv1",
  "key43": "5AnxHxRNJ9UCEkZpgnrjz5ThSYKHySKyM2FYvZT7bC1SYcC2sza7eKDnvQEYPdBBbmo7LrRAB2DX3ZeViSrE1TkS",
  "key44": "5QAdNaNjf9qD2Duq9RnKT2EuhKtNir8peBwW427mxB3kULvABRzmNQrQVrxeVk2y3yZjZNt8CFS1Ymbz6bo4z8Va",
  "key45": "4tRvTA4Kguku7wXcNfgw28Rz955G6LUefmf9PWUgBtmCCmscDawYLXsMdjB23H21v3tW5L9HS46iAVP7a4oxtKHs"
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
