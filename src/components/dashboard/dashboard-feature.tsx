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
    "4cctEnV3XxRSfUZT3Zo1AKJzCSZsfJMHa5sh8abhrgf25FS9a2qbQEu47KXz4NwLG2mvEMYNnkDV96BjWqDNoTAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WymnwzFyFKD3ZZQfqEY75MNwfvEvJgz7MCPvCYqMBnbrrR9kmEhwy214heJ4PYWccpcNrsQcWgoRHGGBsQSSzUR",
  "key1": "3DDCyt486XSn5SR9nj53Dmaq4iJRRy53o1sVWAXpqrgnN9jvLDgVGanvRhqjDVvWuRkHzW3txL7S2WnRcNj8PVGN",
  "key2": "4NdtRWmYFczLGd1CqM9qKA1sB72Nhp3nLv6oNoKEqhgySoJpnaemWxDoGWUjLJfZDDAbMfkMBkQGRznnHTMmgbdu",
  "key3": "2HQrgBjSgEDZKpjb8VREXpKAkQYxX7WvPjeiXQXeVZRGtMmbXTH6Z3vEqdcyGfpuUhdw4QWz9Sg15HR36FzozNun",
  "key4": "3KfM1kWt6mqspEyeUJs37xRmeHs1oZKsyWYBZpqPawWWMKbrPiyuc4LAuPSUzNnZuCz4t8yCvdd3yanGVUuevvGj",
  "key5": "5Q5fXaxUdoWEPbRn5TcKo67Fo6isbbgRSukkdiDtXGqax6ZPDGzeHiJpBZWBR6rsBqX5cGrfVM62yo56o7L4Y1Mh",
  "key6": "4XwaHYAJJEXXBLixYepVNqSJAUgZa71UgWZQLkFheMbeWoDAoUx2ac7LoKApVttven7tSbq83PNwCPmTspDUSJfp",
  "key7": "59xcGuaSDoZhPxxADCeRR7sEszg7qtyBq2swMnTBupK6ie3ZFhX7LP2EDAork6oDrFQp2GRfN1zLxSvez7s5pP1F",
  "key8": "35N2YcMYYaYkmpAUSG3CqjYNqHTiWVHCPJsjhfXqvd38WH8jMmCD1uvde7vrJB9hhaahGwSKRxXwuZq8pBynpjXX",
  "key9": "5AvgFuc4LiByf9zfdugxzBxeiskapYmT7W81ADHeSefdLfqFvDWvG18fukohUUTU9jdQaAJr1uQEbagk3XQ5tJak",
  "key10": "1QoYC9HHsBXDtre8aAhjip5mHmzTjfsy1oZGmdXMmgH883z5nmBDgJUxixxNtD1t4XAeZEnRPwEKpouui5FbfA4",
  "key11": "3QXpujB9UtvDFp5AphV1bvjmBRy1qvciZBKEASFz5YaqeUPSCDkfDtnzHJ192wG4iWp4Y3s1Hx3fDgnzLLXCY56Q",
  "key12": "3AV8UbAhq2sD852nthfir8Jz4Q3Lj5HqEGQ7ejgyWZaWZQbEWG6yE92vKM4en7wzFdJ3SfnAj1DeZVCoaEtJk25d",
  "key13": "61tjBws8ZXxedRHTpQMZd5hWpW1yQpjcS4ZegwSWwoZ76U5FFLRmmMu2Mek1PchUXGVxTWABPjJu8TyeGumnJGWW",
  "key14": "5ErMsmqVQGG1QzJya8DJxo91ztb63LTevk648mxgRX1kZLdBbKXhfpWzCu6GzXixwNAeBzWbhCufQQFTPmQrDQ4y",
  "key15": "4Qjpm7rMC8v7SiyQk8jD7Y8qBBhLURV1Z8gtSCTB5H7EbQj4KNjS2XqC4Yeh3ACJMVXtfAa97ZsJcDhD6A3RqNS7",
  "key16": "3GnYsbUgiixL64Liue8xVv3LSrWhNiSJuoytwG8i3eXHmSatBvcqU2PyaHPgkmstfrtESrsW9ke3pVshjBcVtK8g",
  "key17": "2qzM6rtCifWEs59rg3NXMMFeEkDRpmFARDjAMypZrpBFN83TY954MWPW7Zqsiommf2Q5LfSc2VvQS8wwsLC4EQMX",
  "key18": "2hYkQrBSRzrAoC18vMuhaYMnbwguHnBj9b9d7hraEFEkzd49oFAbCmvhbd1TmL8uSYbbHQLWpbcZzjWysKRSU5QN",
  "key19": "5ksyVRAR1zg1B7GpzJ4Vey8sgNZQ2Le8pejpYEGPfyTzgbxU9MvdUMnCwtrT4rxNd1JRAQfieZem3XWazWVrY2g2",
  "key20": "Rzzgjrdrpdx2EiXu3SCxDctVPj2XVeWkz1NK7mWyYaWt5WoXgCJThxTgqxSQSKKU7oEg8Kuer21aw1MRLSnz229",
  "key21": "5zo9QYr83eTw99yhW3bCzENJKRWCVjvdBfnxphuzcGVkHfgKaQF5PstFBzoUZsXM8SK5XkEti8WFpzBkh2vxAEtR",
  "key22": "XYshrK1vaWbVrfMS6qUMBAMX2e66awhARWeqEXWNSMsKh175Kt1VSosYGV6dm1C9WoiQShuRhXdDDW8rC93iN1k",
  "key23": "9JyBSuEDw8jhqsTH7ysfnB6MXfhwTDrmvF9BtJzfqp5vZaDbp9nuR1S8cxTo9bJN6pwgfX6GdrB9Bra9WgRviTC",
  "key24": "eN6fcaxDFyJeJUCVPWGDWoRfBHu4o8iSiYtVSHD2XCBQ7YTWRfxJLrcnbeFPo4MbWC8Y3fbCCUAaJjN6XC2ZSMX",
  "key25": "pnmbGVAyh6MmzX2aBdeik9yu85KtJzG7hrvmXyJ6ofEB7EVvND8adFbayqBpa5uqY7uV6Qd7PPN7BTqfjvFB3E4",
  "key26": "3q4qsFMPQHCfVB7TEGRc5RSSHP51b373mB9itZdBzw1VBqr47jdKMJRyUQNZ5jaW8v5y5w4jP5mCkPv421ASpcAF",
  "key27": "3VUy19R3ZaQVCS3MKZMXyddUSvk9QtNxtQdrYM1eYxpM7vkt3c2ufjmiPtUWgnZkF2b3FkAe5tqqw7ZdEmkRkRj4",
  "key28": "UxB3eG6Dtz6dwGCS7GxccjFePL3N8k7DNV5j5wsuULoqEU9eKdrRRnwhtASZs66K894zCTkgYS4QwUyRzoccHRN",
  "key29": "32JJiJCfAUrcNZhRs7ZjMkM3Cyf7RxXoE1SgThTnKk6VJRrUwVEYmkwuJ6hyusTbQpfcapq4ConUgxoHnHKfDa5Z",
  "key30": "uNW6NLrCW73DYjJEESGvk9jd56ZCvcWdiKSUKbQcNP7VmPzq2QveaZFzSxsFQfuwxnngftK45EnseSC6n3W3hwW",
  "key31": "2SGJNSFYCZhrLaUR8kuFJpxwqLJCNvUiu1kXZcqujmmbGXuLscfjZHsPPcpnZ6chQmVc1oKmH1UNUWqDhoXKb8AD",
  "key32": "gPAbLeai3rZioHnYe2eDHbbFLAWt89R6QGp2UZfS4BwKtvdxUyN47iK6LpDNATDxKN4XALtxpekxZZt7FLU3YWo",
  "key33": "2Dw9TLi5RmtkiujawajWjLVWQAd5Hdn1NhsNLf1U4uVHRaByhk3MGEznWpJzqDk5mcDDigWC4AppMjqPVt5DK773",
  "key34": "21RszFsvLzVqBteGerHviaUUYTAj8B7LLpAjB4dqebdga4BV47np81hnDv2JuDPatoBmEZU5Zn8Uak7AyAmHowSL",
  "key35": "2HZkXVfqbHheixFuDXJkEGyH6qawHVdiXnCChXUGQXfG9EZyihZgHxBNRiWogDoyv9D3jmrL8U23kmkzijfaBzK8",
  "key36": "5V4C2bCxkpipoerb148p7Xi8ZyBksRGdCgrTLsdNTTx6B6LDxfbmNb5fTSxBcBnjdS6L9Y7axyBVM9ztnjeKgsyj"
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
