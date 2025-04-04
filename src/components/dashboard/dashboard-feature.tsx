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
    "3AMehVCykGKmX3S2arB9FtkEoqhkzwsB9WQbtTtQFJccg8TLFVAurnwvXMSAL5xntyugwi1Gan2RVdQodkZg9tby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fgadM5VAPfAWTxwkLLFKUXeL2jdKfRvaKQEKCNxQJZBuaXcKr2SQ6T6YyXvh1v2R8V1qk2xrNWL2DXrXCsKjkds",
  "key1": "2rfF7yeaBnGEd6EWm3S2KtrtRmMjBXeLFhc6SFBtLGa8n4TeVcKJ2DMMYSFkFqhc5gGv2Ak6rmBgappu6THzLB8d",
  "key2": "27SS9Mo3wWc9vb9fyFXovoW7vMpT178MRAebYCubn6mEsqJCcGsFk9KDwpUmrKMWobVyywFUZB92eb8V96J9pCYe",
  "key3": "4e6mCHQ3sfm8EtvJVdwsJQ3axmCsN8DqvMdVK5t6pZmuPiKHBYiNJ67kczmsFoSXadFratVkKtxJYgatNvAXJqjt",
  "key4": "2FscxVdifFYBu4q5EGRg2wV9531P2pXWNfDK1DzqvuXWgN3A67FEPdLbsZFZhXKpgLuFBQjrQRboF7NRxeCzXhrU",
  "key5": "yBnkTscDLYLdeUkdx6rKfSvkhndfamYMQ8xVjpfZmu3tvmp2swQe3ny75Y4V3StKRoVk1Mzu9QNDereFdHpUdCk",
  "key6": "5JxhbXTVH9LSBzq7NQhHMAyvw7DYmg9M5TC1ur2o9FM5K6vNP9kKff8KVT9Fvu4GDqhzLhZQfyWGiySyqZ52qd6Y",
  "key7": "2RvfuiKgzfJJr26XSnyC2Fzg3nW6bnNNCVUQT6k358TtJUFZp26pgYXSMzz8N2rqyKzEhaLL5bsz4Umkke7iFvVA",
  "key8": "62ApvHdDtq6vrwofPa3b1YM2WAHTkiF6uhMjtBiMJoejYkryHZF2fGj98ePvCbgo7H4cK6S3BEHveaDEiRsRzSZU",
  "key9": "2ceh966LaxgTix2YbUQAdcsP2KKLhYYyVTVVCJcg4toqeAzKcbDPhnawDJfuschtw4aFD8neNmTKVjq6SPLPRVCy",
  "key10": "5v7CPyqbmmmDWGL5HnRJcZkcJJz7AhqtTt5RjUzRL4nDg8JtgVFKzNAW53CV1yHxmFY5q3PwogUfhikADSkft6BK",
  "key11": "3ZxgkwrPVYLXXNSMQEbanG1WcwiLtbEYAtubya9YJAxzmwjFhjveTXVHBnTu57VyoLZHmGFHfVeN75UUDAgGv9Mn",
  "key12": "317ggvGNLdD24tA7ytYfb9hyBwXjV5Az1sbtRhy5tiPreeDtkwVCJnYhDtfkQxwEZCWPThKhasen5jRXLVyh2h5M",
  "key13": "3ZTxiWa3Yn63n2FCbEPAWbdbagHrgtxWU9gDCh9rZ17XqAvAwGTQQhToBmrPKSvcYHEQcBYjid2n8wgE3suss2KA",
  "key14": "4hH1kdT55XHtR5FAALC9Vg8HbsihtDTsSdVfLRDuG5u5LZGfN4pEt2oQWy6UTbG4JKkihtYBLw7iWfUPRqb9jYYU",
  "key15": "2nG37mrif9u7bfL9ZCg8ypX4NHFyWjdqcmjfZWfXkwJkrZFmCBCF8LxXTJ8ZKiwKuVBdWhzippxUAjezzvNCHaMX",
  "key16": "4EYmYdCW2yZDrUCrbcUj6UhFjMpvHbwP5ao7MG6QDtyz3j1jHQ45TEBxeHs4QoQvoX7xbtrLMPAo76Sh5bdKtYre",
  "key17": "4LmsgswsexDXvVYqsKmSH5Qnwh9z7f8F6zgJAYzQwu4UiAPYZAstP8Q7o7pJNAbBrhxVQF3Y7oaXFWDQne9rFw7C",
  "key18": "ozPiAhZhGMV9cQNk1qFh3RdHqt55gAVW2maSKLJ1wfxVFX97HGBaSbETGQ6FUhDfiWe7CRQg41TPUfi9ryC9btg",
  "key19": "4XGgkMyePC9p9zMXtwm88W2qZh5x3geA2kDKzWnAWCHG28CQ9HjPJujh7airCzNmF4kyr9jRTa3fro4NFBH2UMyz",
  "key20": "2pdKomv25DEXF2oREB2LtCs9bZif4bsK4impeSAVX5max6cz1y8ALkq4uUw1bLXPpGNZ86M4JHrB13oS2pQYELRL",
  "key21": "4mgwbX8RRcxzGqW7tAZXnJjEHJ4dDdzM2iztoupMgnZP7TKcVswDprVKz9StXFQg5Z1U9ff3tKpF8KEhFqbPF4uB",
  "key22": "4c8MfNQWyN5uZWtQPGBhza4ZEwcwwx1ksXBF84rqyP6xf6VxiNeT71iyCFYxSZXpVyQcwmkoCAXo1S6KfVGaPes3",
  "key23": "GBupfbmqSohZf8daCykCkdmesC8ipNMprxP6Va22F1KmkvJdZ7xWWo4nnW385F49X92CJsotcJxn67DRawqzpTQ",
  "key24": "5NETqHMCtnvT7TqHFMnCZir7VffbQTXcJLuRi4hcrBQtYEXAJgnfC8FvHA6uhShzKBazHCvsSoYAdZrNg6mq557U",
  "key25": "63kNq97iWVFmv75AXXqbMHHeDvFudaiiBETiR5HyU4KgADa8XDsC8mhNVrqtuUgHzLMb82mB9eQRXP7SjnWnRcE7",
  "key26": "F6KKrrit13pY7K35KPa6XeVYY4xUftWc3HbY1uaJBXs3sxTxRftqcdKDiszHAwY9bpXiWMzaoKH4w45EXQ3Upe6",
  "key27": "5TrNYoMd9zG2Qo7QK9pZJFyLDerjV1bjjdxDYQaTJ9XdG5XW9uJpUfMoqTvShwAg7pzw9FG62kc3U9eia3wni7w",
  "key28": "4ue3JwurJGCSrsdAJwxzgAoTtxgEKLWBE5dkuguxxDfTqq7HFD5mxysLX7GNxadiJMuQT8XVbp6PkiKPQmxBUr8L",
  "key29": "28YNRnraG1kKa8S6gJC3t2d99TtXVWYeeHPinzy8jvxW6SDK3wKJpZWZ4pbEGZmc9fhiNL3kiqGuFY5Ag9dg6Fmt",
  "key30": "67nDzhPdNBsXPJvfbreE88tQtXntd6KPjT38Lj1D8XABNjvaKvzR1NivV6gvoguqPF4cuupkmwj3ayNPULErbjxy",
  "key31": "4bxcXAcoNN3mcwbteE2Ycs2RANVV5PGjSn4PyG35Ed52zjh6R8hqWmRe4MnySHbN4HhNvd8ZS8qbtghfoJSF5h6q",
  "key32": "5BuoohuAJVuAEo89d9K6LsMzMtTNnkTJLZo4kdx8C6ZXSjznHKya4w6MxRJ4e1qXVi1dCucgQLr8ey22JEmFHuDS",
  "key33": "yLPWTqKsDpgPoxAYr1NBxS9hAdWko29d52Y9LRk1yn7piiBM4nE5dKw5cmDBvaLEL8h1VLcBQTnSrz3osUnnHCz",
  "key34": "6ak4a6vmSAhspx7mQHLzkGrStRPVNXKuDQ2jn45qhgxj6xxGCG4ZnnAMv4V9SaEXjfmbpBvvKYVKy9xXJfuvXoa",
  "key35": "23cLDjVmCyv44QYFNhapbggGAW92CHjsktspxZxfSbyhAakLoVcF1LnQotcLqSxKiemnRufgJTV5EDn2N1fCo6gn",
  "key36": "5U9A6347beeqauWoK8EuoBHVn1ppWM2e1jDEg4zKUqFx8JSkM1cAjz7uk2k3kVzR32WkAA8Xhgoh9JYjJCh9GAR4",
  "key37": "4ZWy42CGApgREm9goC92Xudgux7sbzpdf7aAeoU3EC1wznQcv1LDMyZqnogE1q3zdZSnrvyBKsSqZ6KXdu79Sagb",
  "key38": "4exgkD86HhQjQbGSBPTVjADzxAm2uU1AZFEZQ2ZjimpY8QimJ52eFdqXaH4fDchecPmaF3xQLG33tEN7RvfqwEVv",
  "key39": "4bSvbkFrWb5SACG2nzF54vdzPMmKvxenT6oxygJEG6cwtrEtmdnxaLbd9iMah7D67DymecMntDFQqWNNRAEWcqDB",
  "key40": "29JELEFaVRdfN8z3F3aWzGTdxwJAxFVKtvZgwRqvjtPBRyZqENd4NifVWgg8NEebMnFMLpSK3nw73k4TyPSszApp",
  "key41": "3FWqvFPKbAUq9ZHzUDWxLxspWLskP46nmBfVey2Asg9x4whd6cgi29fvdXP3vVDLGFqVQons5gvzXVE1VrohgbJB",
  "key42": "2AJv9vne9pA27uxnm1SB4bq3sxJRPu4TMHEGoimZheZUXx9r5DTYgVh1dGT2kuxFz4kx4NvB5v1yPdp5e56xxRrw",
  "key43": "3hRNidRA4nExtXTYFwvLdWM5gv4hk5ibkzYpGcmjHWvDh19hJMsrvhoxVbvcTRDv9CGE4JWrnET7ZZZfTQVSmCsk"
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
