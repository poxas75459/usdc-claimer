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
    "2QZnp9WcABHDJ6UFa6uSwc8AHfjkMyJDBg5KqqDwJcY7XNj7MgUJvwjZp33Ah6KACeW3Ke1nkKC3XdcEeUBdCA3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zi818uN4Gip3Hy5FqrMt9WQat1q4quXMKrP43dqFB1jzrB4CpvDt5EHFgCzDPXwSUncSc7wMgbs5RS6sYnx1nXw",
  "key1": "3dvfuvQN8aqTGBrnD9UiqnKQURZr2yvuye1S7F57ufdVEdBdMmASUmH7ZJz7Yzhd8R8C4HmruHbXcs3t3Fpksjtr",
  "key2": "2tbpnUVPdGHR7CURuSmzmDHkhs8bpqAU8a8bnQm541XGmn5iyMZ7cbDsPjtqWt3HWGzUVMWsRmXvDEfAELHd4jXj",
  "key3": "4fYHyjYQ1PVDC4hPTBXzymB93HaeBe3XvDt2skUZu735Ks346DBGagZsc3236AkBpPiBNDeMkr8faepkccwUoxcH",
  "key4": "2oK9KcCyecqpbpG4heFQayJdSCVyxbAtmtxYoRftKmhfQ2AHkLTVyAa8Rd3wsr2f1CXrHhQiW2yX296XPMLuwmQJ",
  "key5": "59LfbGNCtrz53PaiC8XwmtrGrCZhzjwxztZUUcty3ysCLUeGPRzCN4dfRRHS7eHAz7pRVL4Bsh3YnjQfDFK4zrM1",
  "key6": "4cwZvz1xmbNiSE3mMmBaL8NMEbzz8KAtL9dSGhCbTUoGZHDhJAAxgmiG98KRAUpLGqFmf9u2MkERjKGoZeS9ZDx2",
  "key7": "5JnHUP9wgSSYeP9ygreKLPZmqCV6Wz1gUNbgLiZeK7HEL9Ukxt41QNuJBdfe2ujwLSjVN23VzQGtp6aYRymJHb9U",
  "key8": "4DaGjBbwiUhUHm2K9kRhNZLjWzGvN1NunRpEa8cd8gQUk76suo3kmSEsNm53PCYTRa9xbkasXnxduwjA8sBJyjJo",
  "key9": "3AbhFaCdQSCN2GzUbLFHiwLXyx6ZnahpEgzzqtyd4N6DHBMF1F8XwebGVZ5aMfBSZAkhwrb3vSq9YT3DzUdCqGg4",
  "key10": "FmJQNCufkwvWTsJbMaFqUJWLB4CJ1BsVCB5yCurnVjFmpqDf6V1ygKMg83NE1FLQ6SYJMLvqZBvhB2qe3FTt3ct",
  "key11": "SGKYbCMTwdwUDxHA7rga9aj2dFUQXZCuG4bTtKsKqetcJy2kqBwzXWbeLQnBHDzyeSyTnh6GitASUGNg8CHczAf",
  "key12": "5vVZmjeVFisQEZiWUjdkn4CW1hNcSm8n3bnqH7h6cdvT66nYhstc7ayQN32yDfwdigjQ6bNVupDutRwXFjQcdJJr",
  "key13": "2ZSbKGPmHzYPAyLiHWisMsEGCXRN3iCQMAE5qnAQpGcNPonvcBGkfEMV7568eUQ6Cjt1i3vR9XHrnTJ6y7baUhZ8",
  "key14": "3eZG5yMJCtTozQBNWMM5wv1KLHv9bQY4GvoNZLziZbmPsCJ1cZ59W2MDsipVn8ZhV6rroAy3NLCrw4PLN95MWBgi",
  "key15": "3hwhcxuHZYayEWeVxmpeDKennV9wSUmjHt3G1Bhh9GyPCUPNXN8Ew9FghqARFRbwjSVxStdWnerCZtsifev7rpkd",
  "key16": "5Rozp8zcJ72ySod2tYvYSmamDVHnnpwQ11asGt9sMycpwCPpHGvgvZncqbkwpiHgwYj8jgYsC7vFxTSXBpABhnBR",
  "key17": "2tKWY86HwCGZov2fT1oB6Wxa1UNdkKh5b2YHbXsRrs6gUDJ7nH2TJjP4GbbePVASNHX24Z1i2Lf9apnf94hPE19U",
  "key18": "2fTnRxeSQvx3EWs2bYAtXdVttSqaJZgEJ9ipfL6MWTVH64iVpNeXyB85VbUnxwwcHZWdRonK7P2cqPt9kqi4WHKt",
  "key19": "5T4gzBEv6JjhEkj7nHzvMJ5m1xYGew6nyXz7taKLYaLojnx8aDvuqtHvLbQEEhWLp2JKDRJeDD4XTh2JDka1LrUv",
  "key20": "4kYyEQ9pHWch2ZTV2qTphsoZxUcyKQxuvyGenJ4gBytEPiERw4zPNg3yDqtVURoQS5ediSwV6PMiSnRe9eht86ec",
  "key21": "KwHyfTh4KJwauV4SQ77LdEzJs7jYpjZmaLq4YWQifrGsVpeoqmwMZGUDxR7a6n8FYgbQ8oVoBeWjYs6rGR162zQ",
  "key22": "21of5bo2Saa3bPwNeGk4nsKVQjXcwU6cTwbRtNqULnHSxcr9g631Way5SXVXdtCryTUyeASoVgTuGV7BXeo8tMAa",
  "key23": "65KoagNPahZTcTL9kj5JbbyovzziWn26mi1WF3gvwj8YkiTmkP5CnbWvjx8E2mgyGPxGXUmSzUbAkKsVWVoXtVfE",
  "key24": "WLSntsQKsMcBsUCSYScDyJfyiXUofVuvnq5tNgYVztNc9u3y6j1331Ngw6rr2oshycVk1uvV2S1zfLMQhhHEz9N",
  "key25": "2Atvtfof2nHKdNPcHmZr4ahTZNsSbEiYYcn5hWxoSoH45uksaRAn9TEV85DEF2GR3WDFNpjxKccVhkSY28Tb7bpp",
  "key26": "Q3ZTNUK2BsxT8dir8CUXLfjyMpxS2hUtVFMqzGLGQCtdZLBzh9rMWQW4ucoRyyFEPPD9o8mUnLjaXFwS6kZC5EU",
  "key27": "2SSRxxofwgVu4LJvhQJ7LvkvwgRRahEKM7AiUoZqBfdgKTWDm1xY9HX9MiUc4XXhGyKgiuv9vS6w9AEeVFHYArZr",
  "key28": "2KxyGzdqwZ4nag6gibxYLrJFHM8fm5ZNBmFUEjt5EqYnDgi6meVJe4CtDtBGaZpNfagn7tHXnUdtTSQLuVu3gfoz",
  "key29": "4uWYBMaJ7nMe5CYAHfvdgpMN9MKnzghQ7doe4tjd8d58YghvMbGYhPz2jcsxhu8KkAa9ooQh117VxUakPiaaQRgq",
  "key30": "5NixvSqHukeuZ4NxzzypNTZWTV9cXijZPRd4u3Zrd7mACpAzfziYLVZiQpmBecoJiiSBx1JytP8tzktcJXDHzX5p",
  "key31": "a6GQGHV6316QSKfBpgNNjSJ1oM8jnybvuDXXtKWTFQ9NKyS1QRPkG23nTDCiELGDQriDQPBMjBmobj3ynpgCLN3",
  "key32": "3ajnSvCBEgzTvCjif551z8ixRgYrALEN4bEft97s632NjpdjCx1KZipQTaVN2PEUrAjwSQnc8QWMGFu9PFarE1cw",
  "key33": "4zLQUbuzTgbPCjTUE7DYvi5w1brfAquYk26XqxYyNXCfABmCjvf1AitR1dCmqWwZpCXZfs7BgDdNABKSkb8NH1fR",
  "key34": "4Aaz5sVkNPTmrQ7pZpfjtd7zyGXuTxq5zj3Za9LQW56oL4PLxh5w6MyxTDK1eBepX9jPbj8wSZubSRE2RBjzcC8q"
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
