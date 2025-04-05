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
    "3d2RuH5RTANtm65ueyBRdPNcyAKBXbqgbRq8izwUhXKrAgFG7MvGDm4kgU1CpV6EF6VHn12qXaEqr5gCkrGqnxvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LJ73tZ77HyQVm5oXPRL4E33nkSXVX6x69Nc5k7jdEsvYqDnzmUHushZtHvMp11ejSUrebBPxWKRfspzCT8oq2ES",
  "key1": "3bRZwzj2fTpVb52EUpvWpJYfnnReSHfqzMni2GdvVeiK7tS1o3Qxd6wd841Hc6jnAm1QUCEbQWTHjKmL77DehMkW",
  "key2": "3Tms5zEe5UaJtqExyjuuJtGv1ZXNT1oBwTvJ7urRjbt5LvvfoQogKhAX9v8hBNfmamrv1kiB5E3rxYwxkveQVXJa",
  "key3": "4ALsZRHnaTZ9aFa9xPJ317TGdfwLZBcVV4XQsC9E3WyetdEQZSmafBWAXRrk6ANqinW68wimuxJyjkJTGtSLLvyU",
  "key4": "5V7NyR2QvGjGPw4jx1qhUMwDfBxo7k9ZvRogXrd2UhX6w9odwJr4bfxQ56o5wntg5VZ47kAeZcbkGHH21KC2jvrg",
  "key5": "UCSVZtbLVPZ64k6EYzpShffMECPgFAbAHtTEC47cTiNza8vXpHqWggzkdLwhJ5CHjSGqQWhjAuX74BdKoEv4FQa",
  "key6": "5TAYYdZ8sQgAD2SR2tsvfSG1TJeRhXpTzxzvciExJ2TNZozvJ9XWJ6GCcKTv1XvCQB3q8Rqy1wBLDMJE9G6bhEtN",
  "key7": "63tNRJiwRvWGSJZHmaRxbCwjt4fPoncLiM8fnnMiB1dcFwSymqohKUfbrnAASmTsCTFnSo9xQr96ErfHzSffb81D",
  "key8": "3vwmnHmiixKLNFnqhxNzb4fbtGt8m4RroiJ9ZKFvE5AMDJGgHxMuK6MPJBDPYuUgfrTzQtbFpgaXeT3Uv8dXHKum",
  "key9": "29L4598VkTJwpTSuUTgzMsJMWo5UFWDVD6dYBcAAbXAtMDN8jmMKhinHmgLWPC1HSSdZWQygxXUy1WpNNXW9SVR2",
  "key10": "4EaRA4skNBMFVfgvF64WWRj562iBeRkEVgqstAGwvg4HtRgH2xJYegFfYHXV35W26KAbVNUEBeUp7naRmtEwdBX6",
  "key11": "jvDruF2jtg7fzvA2z9N9suA4xXYGyweMp8FzTyHhRtx8X8RJGb5nDwbYnk2m5jwwxWqzkFWP5ytsyq9MSUrYjos",
  "key12": "4K2csmvMvadKYsAQAL65NE39jJh2zFNsB7i2WqKNwthLxLJYAzsNTJZvAZbTMf1BKLFDHmjA75Sd4Qx7Wa6yuV21",
  "key13": "2FxnXBFKVHif7vCpMZZ3skJNWPdfTmHGT6RmLhMWE3GH3rq4B1QMSWLE6HWbbse2pyLss1nUgf4Vg4QjPiFRFFhS",
  "key14": "rST7zrf9jz4MxXW7y7LBCEL36B2eAJo67R46ggH8oQsNbPDfo5o3GhCX8FE7doqT7exVjsMwcGZcXhRHcSYWFo3",
  "key15": "5DysS7hpV1WmXJiPDKLmUaJ9w2iQ1zjavNYyHghqqxSyPXt83tUZ38o95bkpG2badybuYY5fAUTdDxm8n6gYey5s",
  "key16": "66Lh5At291iG5oxmo8Frgvd3GAgnYhUdxTjGzNPyVNty9uVKSp6tN6np4KMEJpcefr2KXdmVZsNEHdJUCdhvVHfU",
  "key17": "2QoeSfYY3MPHQUBdpBarenYNJCDvAKfYLJbdUT8ifzJ37XYbf4jSYtuReqwy5C21t4feYXNV82m1h3THrbX8bj7m",
  "key18": "5Wug8jtWzfwwJL6jMxjbmjoXByb5SVcEFExrz3EvBawa6wMid59SALjKBv2ywKJ22k3eFQPeLZivVi9y94CXFzTc",
  "key19": "xuA48uWWwBRqqXyHQePhy7SGBbdC9CH8kyYdeW4MdSX2ZrszGr7X1g92jWWMMTzCvaBDMPkTGW3FYor7JUrsNw8",
  "key20": "5NGjzQrKNG9h9TRid1fF7W19rET9NNjPaASnkfSZCDP4wZcBZznj8XQeoio3v1t8Rr5S9VXY2YZxFtkZoEMZmv6o",
  "key21": "2FaeL4JNk6jvQrw4pbft9D5cc3dSXpKUoF4GzjA5wHFGTA5i4AyGujLdNfVnDComgLD5ibpN2uy66eqa27btnbcX",
  "key22": "2ybb5iEe9azjsXATm3riLxK4dHhJxZBppVNAayG5WHkDgnEKLAwkaMrjcRyGck4eCd4KD78tXAa8AFVvP233x9CX",
  "key23": "5pckMyvND8CC2n5g6UyJvuUK2EfiSXtXZfrgZL2a2sacmYGe5yLarF7x4szWjCE5fvDdMV9MvXAg5WoV6DsRg2iZ",
  "key24": "4Fh64y9Z6jjjEVYB4ycuFHXrCthghB4HGDXG3x4zkGmfq91yhY97TKSqJU5U65M4B7vbLfFLDTQfFNhGd3ZhRoGX"
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
