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
    "47Ty2YsZmaQnTr6ArYVevX5uUG2crmFW31rFX7an1QdGbnLgyPQqeKzjkDLTHTs8Z13rkzY9LJ5QVfCKY6H1L6G5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XPQDDvTzzkkKv7KZ3jdHgK63mmsC6rkztiGmFFor8iHDz9sRSgcLiQuSVyvC5WLktCVC9omJ7irYUMKwyWoWjJV",
  "key1": "ov6esyjPq8nx6iE4Hsw4DQb7xJDmEQqjAUdDTrrzNQi6sckTWaNKDHebovSauwra1qPw9FwQFhpC9DKiacV1o8n",
  "key2": "cyeehhUcFxKbwBdsAhBZ7pbeLJq7TpKtoGfL7hGNTy4hhNWbBr4GRUG9FzjFqMLova3vxDoHKSdVfPQYEnfEfLh",
  "key3": "2pvzDfMSByeii7jVuA3qRqxCZaTaQkvZdNAdZghUsmgPY3PMrcAkp4ZL7vxjKwn3CfWs2e64w13WPV71k1b83Q3T",
  "key4": "44cFhc16SCvKC4qMr3xqpo5m7a87zaqzT27K21bk58XFPfWEjjaSJCJUBbVDqba1G99TVHsR4o44AZwJ5rbGTzwc",
  "key5": "RadxwgawTLfEc3f66WUYXDg6VCQE5fQm47fVeHjJprgRtwG52mUnGQivkwC16WHPhCAgR1JYnyHqxwtWxuoErs8",
  "key6": "5jvfXFuoaMMnyEu6mrGCQab2Z4yHQEhpyjz7C738mP8sfkYGrYEzrVE3brjp8JLGtz2YSSYaEsZ2pRdBavPy9KXZ",
  "key7": "2n4krQoZMhnqijVPBtJ5d8nTarz9Wo5oSvA7oLJeLpyNVNDBGfWBmpYfuxSq9sZJQDQViWJewHs5kbe4USWS1LgH",
  "key8": "wWhYaXokUX28sMqCnd5ZCjPmfYXb4xuPS5bCc2P8K64KrXyRjbcZhBQJzrMDei6crs5zYXDXW2sZahDJNut2ibR",
  "key9": "2eN5sZWq7iw6jhMahzktzhDwqkP6aLAmLictX3V5WBogT9b83vQgUsJFc7VBV41u3k3sME78QizPevS92NLGzTi4",
  "key10": "4GXY3S16neth8MfkvYcMBWKCrqvqrpdyqd4BzM1TZ7PuinQf1LthGK5dDp49cXfb95qhEMPBMbazmXfEs7THUv8g",
  "key11": "5enKv2ZEX8X5zSmaxPt2QPipk69xcRzq9umpJjVoYM5PjtEQbjz1MfJWFucW2MhwouQXCQ6p7dvfSZV83XMkqKZB",
  "key12": "ZdvM7rexC6L6ZjLXG3a51aPGHJbHRfGGec9arV991ZJSNTFwd3Fj7oCnTx9SCksFfxUwQmF3VC5wcUdLPE172v3",
  "key13": "587YhV9N399eDTCNvKYfbVR3bXHDzChVf6uBj3fgYcAntBHLNWHNaBRnA9kPhuyLfQp8DM7fdR59fsDdLwJtW7rr",
  "key14": "5yAmXMw1E7ve79Un3Gsrd3D3nqhaXJKjJM8zv5FrJadtFBjuYNTpkCpsxW9dSGTZPKvNHSKgnyzUYCMFCp2z1ajj",
  "key15": "5AC5UGCTseEFeC4F9FzMVCjSaigc7Ch6eVinfitgoY55pXFyp16QJWdnBLcva48eiRBXqPByv8JY2vdzLvPMtqSw",
  "key16": "3u6Wi47PsdF7TMF2YyzstkE2fecuCghQoCJjfAxzEZpaC79a6UjxMFWF5enMzFc1JVBX8Bijs5Ls83pY45pZfXBx",
  "key17": "62eNZMhE3CsDccsX2nLwP6QnxSJqTAHXaaCbC7XsKL4eKDx3VBK5Pr5T98RaJwDeL48DqYt8Ghf77AJvTF1C6NrG",
  "key18": "3upo8feTaaV4yWgPpoTcGVysxUR6kdxKdupxhDavJKiZ6Fe9vWB55szpafzWKmCs3vr4BVB3EEXMFcu6KN3ZY3os",
  "key19": "2iMy4gx3BoKkd4MMJdAn7EySmcqmeWcgrpWc71tcfNBrYg7e4Z7kD3hbGWQtPpGWiFVxJshXSJYeD3sY4hEV9j8D",
  "key20": "584724V6KVdtvJnUxxo2g4xHfthGbZtBJkHRw4JX5MF2s2weePDiqFocriaEo8WPkn5qeDZqKYsxAkbd54vMr3Dc",
  "key21": "7BxuSkWgQ8n7LxkrqX8vFAseWGcH2iyDP17URETypMpBbNuZ7PZzmS6hxAxTrYiumqHYs1L34MKQGSwQTRVCZ3q",
  "key22": "2E8nLx9Wd6y6iVsM7A3C9fEGsoGJWGQw8bWox1mKHU7DNQAWBxm65yjGbD28FENyiVm7GJPuQnShUidMqW5osUts",
  "key23": "4uut5mgFxXQ3UGgbqAnzEeaUHgWPUrFrebTD2vfp1inqusqhkS5XNZvcejPY27ioawiLovgH2JUzwDeXpbr4yipD",
  "key24": "3ckuEx7f6SvGbrTABh1ekQSj8YpqM9vnDr7a2As9VXPUaz4ah5mtiF5Uo5b35XwoVdNFg7vDZxhEURFRKg9XVNNc",
  "key25": "3U4yXit4qoT8VQVQUGvoQsY5Dr5n3jQgueghMcPawUcz3Tiwt6EokUrjaGD3i9ccW4rAMbeQr8kKMg4ArTpov3kd",
  "key26": "4wm63d9AyBoh3YV8HXAD5gBTphKcKudsBKB4J8aPjq2bK8eef9zFoRxGzEuAPVARy9ETyVqBtkMqpZqrjcdJMXKU",
  "key27": "2qq3Xwd8qsu9fjyCtDNtaMK6yhMnym5gkidj45d9irKH7bLjDQNmQhqobpMdTr3PpvTPadFmH7rN65MvdxVsjsvR",
  "key28": "3m5qxFkhHXDHACrxqSqic1MRNPAfFKqWXWPLXgD2xSJXgqs7HTLHPRUb7cG55qNpfiieSFyHiZBkAQ6SJtHTSRbW",
  "key29": "4haEUiVYtoabk4H3DgLzD9aBshTM61Hv7vrigDR4ypL9vSLzLRuYRCux5dgHCxBmGEeQQMteWGtYpstu6YuHDock",
  "key30": "5B5mc8DNMXGFikH99RPWiQT8MoD3uQTxNaGbhEsENQSKUaJ351G5TypS2mGAVLV2kEz1jPFYpXrMqg2u18SiDzfL",
  "key31": "5A2oo7MZheUe2sN2B35Mz8ECMa94frddmrTqpLfPq8CLJSU6wAieZNMvaQkrT5sXgJsASasQ3spJxmi6UP9YNsnp",
  "key32": "4eNw8Fmsq4hrGRkTCB6ShZPRtzKXxcCi5DpTGneo41z1vxQYTgK7x39znYPUoY1UavsGqzsQKnxWNoqxtR9U9F8w",
  "key33": "4YN98mx4FSa8v1m5Ap6vfZbeNKrXqjjxfMiSYcrQKnSFNp52YuwqvVJtkaVGRnVatfjTosP9CPEWmHR7Y6EK8LBQ",
  "key34": "2yMAXbF1YRbcmk2jH4XWoernBn2zywvnx1s8gygXiq1XVfDUdRDTLt8QFz4shnFQpH88xQ95kdnnTpw6eFAPnAdL",
  "key35": "c863B5WjEbTgxVfckz9NLUVA6Rk88SoE138tFwb8gQq4q4WYDMGAb5JJdMFNof1HN2nJeZ9GtTioeFFwGBFgMkT"
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
