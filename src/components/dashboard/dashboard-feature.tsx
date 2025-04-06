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
    "2Au4zeD5z4LQuJ4xRyLAiMiaMLrhWZNTB3Q8CgVJgjMB58rm3ec6W64bAExoMDopSYGCfi1FUmDav5vzrjuj1qcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jg2NyQiw2yjwLCGan1QYCeYsRj5C3kvnLj5T46Shss9bufAf2iS3cNqczjmXjAQsqdqweqm61B7GrBoKn6xfCe7",
  "key1": "4PaWkPNeZKa19PK1yAyS93H8gqGsNNUUT86HrGJfDsygqaVAXHXYFfHgpq5kYHxoDWZkKC1NkAeigZwckXorgM8R",
  "key2": "5jSqWVXtLQuP6m1g1qQsdzcBQcnmZyjfGaJc1N1yPvEuh8F1aBxDWqgy3q6RjgfUVFXmhP8qeJ3BJybr7wXkGpGo",
  "key3": "62pp2bKS5ReQrTAcQh1RbwLp8nLAVU7zT4zTiwRsxn6P2SbuYh6mH4Jy8kGXP3LcpUtrwcoME37PYtfP73CJf2mw",
  "key4": "4rzdHFnutEXk9TSQnRkGhtDfduJo32E1HmMJT5xKWfhiH2yySmfQXPbuqBfAjvn6rfcf2u9r8abxCDJCUF47hGSs",
  "key5": "5bYJ5QnoKL5z7LQT6KoyHx1NJe7i8T8g6ek7p2JkkUosiAsGjKdDGU4Gf32G7xdVG7sw6pZT1cDt8kPwVjuDnTte",
  "key6": "4u5z4h16QQsRg6V2SK8LX9o6bNTJFFJbTjCoLc6jo5qRzAZQ1ziGPvPTA9SJakuQNKFk2FCX1D95acm3WVAiK4dL",
  "key7": "3Dt7jH8SVxZWfKQLPYuQjxYM99rBL6wU6nRhe9SWKKdqAGHpcA5nF2Annf3EWhGkPM3qX3wnmx6X91baCH5Ww8vj",
  "key8": "98b7VwoP7ji2i5yMiPT91nAe89FVRApcQm8C2Hqp2z5kLLqqr3MyPZsyi8q679FCAXGTYSgtcrtwCCSZMwwt8Db",
  "key9": "3h62sHi1vDH4RWEddEegshUt6aktbGmkirLUsyWyXoHvpXqKqvaZdEAWaxBsS5BBJVZ8DvZSqkM3fYJthtjWjJUv",
  "key10": "PS4Mba26FJBqGPpW2a6fQWWtY2S4M1VvYxjcRggEmLRgyGDX2Z6TWXvfGc4gxKoqGpfeNmdUdJN1zCfDbS4UeyU",
  "key11": "4gkd8PWUd1t1kYzoCZG2BkWtLNxHWDAGkMoqxLH73TfZQCtzd29vj3fGyHQFnVqVVFuxxEw2Fpu9RP2SZCgL2AhR",
  "key12": "5JVrLnn6pykkY9x7Bz1nBGiSaWAXqemG31qBzcP7r5T6ZRrQyqPdGQ4UYnV2giL8d53Mhszgt6jk9Wa47xMy2vUE",
  "key13": "9PEhPGGsknzEeSF9pTayNJXSRNfnGopLHpHCJP4T3ZtnaU7Kymhyu3YrTGpLfm55BLhfYbC1A4iQ296pAf7fydd",
  "key14": "4cueyuh1H895QdW9S9h2ePpNRwjfySiPqCAv5nb5sQWx8bGsFZfuZtwSKE7ovcpecECGiBE4NumzPNpSpMvJAdiY",
  "key15": "2iSThg89Vh1JeM7VokmzhEviM9VmNhZq39KRdsDPYSQtM92Zox3pRwy6MWy2Hdr3sbedYLWQ5b88fag3QwkiVyjt",
  "key16": "5u9xmzbBbRSPc4WFML1ngqnq9vMZAVtqKhuRLH7Qopj7sMUtfFCDfroj5oDGpsTwSZdMdTj7e2ogAkzvza8HxUxr",
  "key17": "2Pv2ZsusCTwRGWViSfdYRp7nn7rzv4DvAqrJJa27Bb85W3V8w6kVofrFwuEFSBANNpvrRQXuHTSQjFaSz1b66TWm",
  "key18": "35aowk3nPN7nZvsv5divpizDu69FgMLaoKdYcnYq9RSm3E8G6m2f2KkkJ2Zj5RzHCbf4y4YhpDwW5okAP8jGiPg",
  "key19": "3f1FEoJh88qLAABKCDfMQRfTRzfdDPYdt33JnswYoeBt9xbkkzX9jAn9mE8Y1KauXWfHyfGkAbjVjABHxB5vMJVd",
  "key20": "3HEpZewpSMtw7EDmqRgS4QQv3rkxkLUfWoEmX64JN5Gmhyd8Wt945sBF6gn73pGxwMFaZxDgRn3iUZDgRw1Gh999",
  "key21": "4rYoHqcdYzSBGbap3Qn1janPQvbHofkJYCf3dyJ1Czh1dQMVYvekj4WciVjajCZe7UCXMS1DXBR5M7cYHHeeCJHv",
  "key22": "2eC4ovgmwQFamsjumR8Jxe6QmLHkJpxed6rvbyq9pzgVaFVp7atPtvfw6RsRMcdoTM4MDfTFF9kokyAWtmGyByzf",
  "key23": "qXu1zsGiSKwsyfBbZZSf3YLJzYQoS7XjThqcA8UxjTKv7LSJwLT2PE2PRCdCc2uKKR2BUzntQWTrhRMU5kB7aCQ",
  "key24": "2vjEegQdbHWJM47HvNch7yBZWCHYiou3w4cAq9uQ85DK83dSYuEUJKgeW5BrkBEf4qVaNuv3wkP5Y2jxx8UiLbht",
  "key25": "2HmZQJMHMwSL5MGvBVbVxx6zKbb2AQRk7rhRY8z1RPT8zP7T9Kg21f79ievEAN28vHADoXcEBRGn7XHvkAJnWXGL",
  "key26": "3eUqXWsqNs6woqAbWZP7nNkJKEukZLVeAeZEWeLQGTuxkFP1jEKT9sNCpBsLLNUNH4yGyBgwqKbe5MdJtiWd42QT",
  "key27": "hJcbUojWMcD23bY9CaxnuAbpLQXGabz9BR5Dc6CgebxVkpCKSMyXUV8CPhxjuz6GNjcDUAhF36XkATUeY6EFtfg",
  "key28": "2ofLATwMsy57YP5hLKF5ABEubxc6Rg3Hste2nhgVT1wvWnBtJjcBtovWLzxbRCHip2BQgb2uk8Vnkreg9WdDNvy3",
  "key29": "5aB9mFw5GQ68i5JhfGHMPmj6HrbH1FtrbCY2vcbEUVJmj16uGSrUdp7zWtdrBYord1FYdt2iwwKQ4Pn2YDVbdeJc",
  "key30": "5fEXtzs1hmBWNLJEn9SKAnjKXLCZH1Cbzxwe4r2Pm8vJ5onJmj88HMYmvvhEqhYf9dWfyb26jTFTH2BhGiWsRn3j",
  "key31": "5GShufQm5EKUvThrbnRmz8hCy1Aa3NbFfcLMRMwvcKQmRcFqaeDCxcCLo4fdwvwbJ9mTLLYntUFHfyNQA5SwqseE",
  "key32": "CUkAg4wmbxHsaVyC9guoQxMSJGo45FoR6UuYKYqi8fbrZoH4q3XtPNxBidfM9QtUGhPo39drsVLftLvQs86CPYT",
  "key33": "4ceYbq3BnBRhjMBA5pmH6mZJDmwRDiCbv4X7cw94GMEgUn71qzfdD97mC5uhDsa9y7pLC5KYb4dC1C37FivukRkZ",
  "key34": "2k7uWkKnTnqPdhwzMNZem2qHhvrnnnkYswfZy3t1ttGXUrWTuoSBJWpUCuZiikH4WZgsENxAvr8HRvSSAee6VX7c",
  "key35": "47JCPbR19NeaP1WE1sM1g5eFgpjmCjTyf7aALvAdGPsn8Tvr8bbF1ZCSbQXz2KUSp2rSrRq2YDB3Mkyxeesfkd64",
  "key36": "5BxDyiMfFEwumZgpY9PyJG1EFE4Wg9rHnuoEVppw4Zbqj7XjorfzNZa7B4gcusT7qjBUEKCxrP8VcrSapF3zpBnG"
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
