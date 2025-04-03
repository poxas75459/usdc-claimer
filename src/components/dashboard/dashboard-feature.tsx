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
    "5v7vKc3GM3fd2shaFrebrgwEdVnhQ1X3dD22KJrRtEKNUmPRkKbEjWDVTZ9qMSw98MAYBUbwg8cPSm6WMTxFNqT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z5YByzp5DYQP2yJPz22LUhPL69tpbkkvguUR2HW5qRz3FXxT9d5gsF2YL3ztUxA3jVqMAvyP5TziWyU5xWKp6Rs",
  "key1": "2qWr7fAgjBpbE65LZ9oS3wk6u63oTpeSazcPkGjN97a7p97DfQvJsBrg8wNndzRS7uJiJRzMBAWUfF5bStXtzT4N",
  "key2": "3Aq3g38MadRt4nQhuX8HvCzDP4MTkYJRrfA6T11zf11t2B4HrBtt3tQxJBHvyi6mZj7iUws3oo5PDcTe2nSBuVmK",
  "key3": "38aKeGuVcGrJp7DuewRQaTeDCNvfG73W5JW29sxqYsSesPR8Viwqiv8qLk5a4Ck9YEAv9e9vXJgjRusiAnSpiYtW",
  "key4": "2nbGD1UCwphqAgGRm1xAQbgN8QUQiK7R6p7e6h8MRhVJc4ngKP5tAwbcPJm6fd7Po8qhFNxAA6uGJHbgwqDc8oze",
  "key5": "hP5UmZJSQAwyLrNPK1JQKfzGiUzxePmtuX1XLErcfzt1w6zzu8YK84koKFr3v43Bwq3pQY5FnqxDjR2dW4dPyUb",
  "key6": "2DVxrEw7rUJoXH7DaNtVCBmo3z95aS1KkyEZCCWjZG1s63mweHbZcNxeWGLi3Sf92VDxKYyhHkfdWksGwf1PwwxX",
  "key7": "53hFtGsviTuBYYwuXhAdo73igAA6858NSy1UbL6h3TAtGAcQsfVsUqd13iYBGZchU6mwxZzWWXFhaw4qYZ4QPa2v",
  "key8": "33h6EFnFLjBWK8ApsYjWn5DZa4QJPYRqpxviWExX2JX8fMcuvLk39NVmdqdtTfbpuKVbAGxfRUFRvSVaoFqis7Qw",
  "key9": "5KUDJwZ9H14t1Vv7J2zZ1QAhjF3k3JEGZFXLLmLEHQLzpEU2exhNjomrVwh9wRuaaKwM7nBtBvAFfAYM51tM61FU",
  "key10": "nLCmxZ3PAoWQqVJEMKSVAgzgdf8biAHN45evcmAtc8XtWuraMBKCAe5jDBeN5GNi4AxS3twwFYrzsDGYtuzkDVu",
  "key11": "4286sMgURixnEMoCzgCNmmJVMzxn8S9YZUQyxXKjjrHhbRQ4XBgAPnynzAu7HBg67jU573mV8AHVnirY9cBNnUVa",
  "key12": "2rRgQ9ayrP2pGBxnMcmagimNqXCk4FYQnqv44LMa9iaexqZjd4xkUtd6Dc6CY5DNdeMj9PR8snUiVc8kF6D7HPHH",
  "key13": "AMoeMZ6NiRZg9NjDtNmZEAjrAnrqHifwuozqSBpPsCQ6kbbQaNuK2qxbFgY2fjWuuyp8uPMHGhHKGuyibXVF8ML",
  "key14": "2qBehtSnmyfNxzyBUeyvZ5KDLFEVsB1YPiY2Lt4PurugdW7zSzXK8LNek8916KrYfr9FGG4ZgfkwpKs8mgCzqEdc",
  "key15": "oo1oLB9TRQ97c2ZHuG5ipURkptG24CtmYyWCu9Xb4vE7GJ1XeLE5JrvR8jUaw4pnZnCGL7832giMVToAzWstpip",
  "key16": "5x6grAFufQW3raHvqNcyq7QgEBEq1WJuLvVnxiwhu792DX943tG7q5xhwjdAgjuqi7ajWWH8c3LhRYGATJkneMP2",
  "key17": "4nc2tSNbXosG7uay6G2938bFw5SwWh1mKwwQJCjPoRVo7Vu766QYJ7srM9ATu2mvTqpvxPCXXdsYfGDQzDusssNA",
  "key18": "5LxCkZTj5oqubEh2bChYU5abwyXxRFoiw9nZLAnwDwNxvR2FDD35UapxoY6yLd9j7jaoM73Yp9mVwvwXqjHJUfi4",
  "key19": "3nqrFhpcVNQaoBFZDuZ7hg8KXm4DboNH9cDcyMnESNz7chrb8eDYtHCfMbA5fzH98WAGUHJy6JbWyNZZBUzJvvUo",
  "key20": "2R3gmyvfbSWJEP4BPcqSXFz5CJQ3ra7a6TWy81GXMUJhx1KLLWxira1vZT9PWGdv7ZrfHdNzkiSYLa8NXTKsr1Mv",
  "key21": "25ifF93iJ4fQKUphNUUKNs5GkJbEJqnKigActgMofsGVHDAS1bzAjBE52ixUG5wGS7K9DwHxcdY78aNsWvNSX3xT",
  "key22": "4CJNqa1KcpWWtY4kCP64faQhWXf7rsDN37EoquinTwWV6KuT6Xg8ChBhXyoGXZXHNvkeHtfpPHN7rU1H2Ts4R4jC",
  "key23": "nUph9PsTmrFgHeyh2zze85wugdejwhENy1T4YJmwr38cii5qjGec2Go5gSp31zf7UWTxMkvhziqaLmCvJb2qd1d",
  "key24": "64zTiFZhoimpYqnpQMsiWbrGZiqyf71kpQ2EXXsY4bwntrJyGXrHKLEAxSiRM5ekB3SeHWLaPJnJbGwsngSrtHpN",
  "key25": "5x3E3eWssz5xGGavyFkQqVomUyZggJEYT5GAj78xTvMR9Sh2EbW4Un3Kb2EQ1tFM3mbKq82S35ZVBhgAq2vTcLb4",
  "key26": "4hs16VGiHGVFMZP4VTALFiNcmA9MMGh574T26HWavRYRkGaGgfedMEX8QE3Rs3z82HrC82a99Dvp833HEzZXqBze",
  "key27": "4ibrK7SDMtQEXbDuiqVEmBacoFZi7NxG1YLMTHvSAymwbvd32fmQDjgxAFYYATrhkJPZ4pgFaE3SZL1LPubaGucb",
  "key28": "5KR2dqwFUA6TDVaFVJ1Rm54RzXe3nvSErpqWnqKuQn8GCsYFtXYQRhsDEyarbff8n4UQjVXrhXX6PKfnXYnFYDC5",
  "key29": "5LPGwAUVYFWKg3xbaE87KMPio5RoNBkvxnmoyAwtGfwTYjZKPb2PG8oHkKSkQ2RLQXELjaNzs1Mpa1uvukaxtJ8e",
  "key30": "5XoxnArbA2nCFfbEM46CWJkGLexTuFgy7GVUG2FSdA7MDSKZon2eRw6WXwNGG7XV6xUen2SRJMgUYeUWyBgrYvKX",
  "key31": "3oVWfG9bHev6KYzbvzJbnroeZiJKSGhSXsRE2b8wkPcwxTaxRJSLWYgxnuS3vnXMnzNccXMo6nFPkMD1gvNC5Dz5",
  "key32": "2qPrTWQxZZY3Vun5bV3iSj43SiVCYoLJ5zCtbotu5DazPxnqDmRviM6h8o78AvoikPB5FTsnhpqhuArq7hNWFrP4",
  "key33": "3kejVjWV4e42DURrgp4p4j5Gi78ykWaxq54AEohX2cKfPK4wj4xPv338gvYS47EtGekW35TQySWniPbumwB4h6Wy",
  "key34": "23ms697PVWrReMh7t47amfAzECXfz12mE2o4pQ6ZfQdQAwEpyusFH7iLd9QqiPYBLa7x1ptnRN7xo1bzUBvLAkBU"
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
