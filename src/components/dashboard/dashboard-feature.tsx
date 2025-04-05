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
    "HKzJk7atecGQWiLonH7QNADnWiEsTa5w3MLVVfALC1H6vsrE5mRQjrG2ZDeDBi1ytLpWy3Wh4sAd4TNCQKHE8KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tR5cioVGrhPQecWsCvypRNnWZfQh5wosZFYxWhZLii3ZWqgQsjdCJwe9cAZJxVedVYnL8SkADFaoGRDvdWEpox4",
  "key1": "4uZLENGik29cmv4PLQAL5TMpUrCPrujNYN6TREV17jVD7xrwZJugQ9EipwJq8HRQAuKwCymNJqLZsfpGdv9JQFNG",
  "key2": "364cQPW3hp4gxG4x2dZMgkgLvZ38kbq6pmKTqHuJW31Wr6KNiLc8pUygifBqKGt8qr8eM8NqkDXthDeTc4vZCkZ7",
  "key3": "HPvxtUbUss44Vm9FYKctsjdKPPKEeGRkjTijab1WrYt3ueAYnXx4C84BknEw28EJCumBsea6P9QK1o7zykgsR72",
  "key4": "4sMXZ7riYECBPpxBP5xDxMDCLFRfCwwJ9xMYhS67DoABgv6V3jAfuZoJQrNCTRKeaCmihYQrm4xVFPwBmurjkoi4",
  "key5": "5bjhg3RehYeDjMAJ21Y2EVqArcTADkwLRWe4ZHH1xh7ECt8Y1y2yvFAi3K6H5EqnNmqVJ3FMuadSaR6d9cChs6CH",
  "key6": "3yEGjfPJSmw1zfo4nEf9BPp2QTRrLREG5C96CDrn1TiqdViH3bC9DBgePwf2Y7ADm6CZDfh1CEPt4xH9AzPGfHpo",
  "key7": "FCpwi8yUxk4dotp5PSY2RZYP4nMnVgA8kxaDFvZ6hrMwq5DgpvHGpaGntJQqNU6XAY1nJC2nYNqG3aPmDUyjbP1",
  "key8": "3QjXUCoWwaacd8gzgg3xVE39h17ErDQnrELdbHeUALbVHnWiVJUkqffTLeQAC2Ywy4fAFxHvRXE6pCcSLYHHPef8",
  "key9": "Wk4XCeci3vFuX39SLx9Vybisz3pWNL8ypvkbSHaoqU5u4bukXgTMNJvct69UiStuWuFtftVxmfbXMGTqMZKUBqc",
  "key10": "2PjUkWkcjYPFceJUdfTUykn6SGSoVXbnShRMod9rfcLNZjpKXeiU8NQK9eE2XJb7G1LFg4seSKjKZrLKcWvyLs8d",
  "key11": "3Ymk7TKfzHHxj9E4d5NDffC3S3W2xFfvc3WkkEEzKpMMKRJw8s8FdsefLjvNidCVTr7D5P8k3cz8e2hzLTwVAH84",
  "key12": "2r5n19HredDUgr9pMJAhpoQ3Dk6Kv2CTz9QDbtJdHo72jUQ8WL38x5NGfM7PLbFgDNGaEA9buJBm9NH3XxYzMxod",
  "key13": "3PZQ1EYJhKDkKznpr2tSuc9S3q9hqvPEZ2o5Mch3UvL5yg9LTsiUBvprNwrKAcDxcGroAbArBuBBvYhmrQo9iq1Z",
  "key14": "2Z3okxwKwciwPSD9kKu7exQr3ZcgVwAnE3riHWgdYvXfZYJvk42W2JwMByYTdd6R2sMWxu6wFjEgG1nAVcnBbf8",
  "key15": "5Bp7pRCGmjoitAAY4QK9jS7Q37XhQ7F89fidX3QMnc2M4JXZsM5KHPwkNNGmmXFaqHEkLRfo9yaYRspt8B9HERLS",
  "key16": "3RuCB5XNYJdVc7JFtegYq5KtvQzhWY18zHd5Y15dancjfKzTGgDFedSqL8WaZCopNvgY1mmGYhYWN1Mz3nmpgaJb",
  "key17": "3jHhTcYor7xg2YhCDfBihHGX9dYqPbiDvuJwrGqSjYJUgNYSmZZwzBrMK5947iwr4QzvKg98TYk9t2dMiU5wgwrC",
  "key18": "57Egcvkcd6pmBkcpRE6xCL27FxncRrEi3u6fB1Lq2uGt9vi7YYsi2EBovrqKpcLuZaSXAWvmLWL8a8ftYpFTwiCu",
  "key19": "44hAPs2ZSxVPzfvirYGE4wUGPK19yRjHRh6CrAxJCr6vdJbpifLfjvV6oJRuHPmkR7Q9DrnzfKYikcAwJmchg64M",
  "key20": "3X4xmLuaFsjAWVzQiJq3uZse6h7EHj7a1BbTWr8VbER4jRrFFfuUFWCVg6LourBT2by7FoGEHsTXN65WZBUkdytH",
  "key21": "4zLekH2dJPsN6unJ4kBYgQbs3w34MWWeTXbfeo2BAjgJYWW5i1DYmp4yqZC1Z1vz7cdJUL9GmgfdFQfyoXWKitd5",
  "key22": "3W9qPT6JZEKRnaErrsfbmjvmPmz9hojMMbnGfPMGud8e83pxBTfg3uvuGVFYeMmnh2MdKyT8gABpRZFzc1GV2pke",
  "key23": "2KyTmmKCzcfnjNEnwZb2U5a2MYCgMyEDsuo8Gvqo39vVkCLB58LoGHBM6LsKgjGBaBsGDPh2rcQfafg3BQFtVF6j",
  "key24": "vLi6Hof1hiEg9tnSykDbdP3raTGb7bUZguyeuEuiRNfC9p3Y55JJE8SrUsM1qrhusX4yn82xaT4cwyHTeFL5CkN",
  "key25": "2vbAGR5Sw1RbCQuPGQhDRBZQ6sNTjmnmJKsj18HndCpAq6xxAFLKUuA54r3YsYcHzcck2XpYW8Vbj4Hs7L6mHLSn",
  "key26": "PSZhGrrWvLbavmswAec1dgsAHQ5QJDuEvLUymmNHigxBBt7LHwCfzghHyitoe66QqCW4syLfXWxMTFybLE5Qtdk",
  "key27": "52BAJEczThxGLoLV8JRKrsW36DuJeHp4wkS8Bb4ZgkxdXBHbM7enBbfj4WUZwUMw2Pf9F9WBKEtPzn71GyvnP7NL",
  "key28": "3YSqmfhd3dwDQWndPbsJaFimG4V5R2LwcqfiQrENizmxPmU6wjyfCEsTAmGm1dUULTzbsbUH3op6SNi1393LWEkq",
  "key29": "gpFjtqQ88Xs8zhYaqhaYUnbKBMBnoykqT4e38H3bmXngyEuGRRyaeDTMMXPhD3thaYSv72Mp9GwSk6T9veE4LFm",
  "key30": "ER9eKKGojvC4tx46N4iL6dvXXVnzFYTX1MQqqpDbM7k7ZWKdAGCxTj6sT3ucFeyQq2aURztkiSbP2MUnwJFaCEA",
  "key31": "sSzj9B6Tdj68PKtNWyD8ZiRNKEmFsWN245YXv6ZPXCVH61w2bR9NCRkvxQrb3ZjsJmR7L7FAs1b5ofiX6YXiyNK",
  "key32": "5L8jrNHMX5EGshYzaBT3W3tWRkFqBdufmiYENvdEtZeb4rz1uLMphqGrtouTQSYejFmfE9VYoQGsb1mZwYSxBe54",
  "key33": "SAyy1WqAWU6sVTJ3vQ9H6oDtGxwKtBXmNrGsqxAGgGG6L5nKh4kQsbNkFax4uiZ8DHRCZy4TdXHDeAZwAjAs3wV",
  "key34": "3GMt5Ut77LkcLE5U6dPn6u7jwaMoGvsK88SXkkG4FZxgsMMtZdBKSgoHYM7wNjTGgJkygVznNeM7Q8ubNX6wwVDg",
  "key35": "JWQiifUyAKgDs9T9548uHvsaZpEbVMNvcFgvVZmbk68yRrGn9UbbWYA3HMoo6vPpD5xuuhwZJs3WC3y1KJxfiLz",
  "key36": "bmnJygRVgAgQ1DU9QoL7jwCrYwNdwnGAkkzJ8MJc7tQjHVRw7XgaBY4fP44NR9iF36zqLW5cvcCtaatNHp5p6Qf",
  "key37": "4dvJLpSy221HWmmmiLPm8bcEjbcehpmnQyBXx6WXpDCiSvej2g1Xv2z79YGQJzXbG4mMd3eeFX1Mxd5bBK1rGhRL",
  "key38": "4m5H1KzdpJe7wf1gyZ82CpnuKFntNUxvzGDTJYjNh9XN6qK2ffTV8D467FEi6qWt4nG3TDiEibLyaiVCJn5koZxj",
  "key39": "4m873RBM5QiFmhi75EjxC5oGfgBQMZBYHJ9fR4JTGnhmNjGHzC3LiabpBAKbvry1tdFypVuhYWPHwTTsnmUL2658"
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
