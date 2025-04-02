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
    "65hnKTN39NLQFXMytyZuBYcciycH3WyfnUJ1HdRfAh5cs9GrAxk8xKEFdQPzWve5tg4wdDdXQP4CyK6Mb2jUBbPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FjHzrjkVnFHwdqcciy7bcpm2N2naYiPT1TrNCvq8d7aDioj7M6NaqDErieuUhUhAcJPhW7xT3fqM2gd9dJHqU3V",
  "key1": "3Gh3Jd82hAPzCke5aBP36pMS94ujjeh2urUvBDLgJHx71RW7YJwS7x1uTHpg4b6n6xVPZ76UbzyZ9x96WzCrTDrM",
  "key2": "23tNc8NAvBMdH618QrXdmLKFc7SbqNMEvSFWb98AgcDFbXew8ASPg99dku7gzdujyXua3J2V3gsunNnHUQytZQ31",
  "key3": "5ATiwQZa88fs7FfDkaGd2FLtHpX2irKBGvPqzwnq7qj5eKEPHWJWgKjThBaZmYhmsczCW45aFFYQLi5x6RxvHnKy",
  "key4": "uooKuJuphsBdSxmrdBjK4EfwoskjDaMxDTLpfLNGqE42V1KShS3simvZt4iwK83SpdtgjxSpSJRx7mMDFJ47vUe",
  "key5": "4amHztdxxA6v4zzhXMpf9iRS6bhrSN89XrSe4cBpDe1B7e9U7Q6jogUraSZbYpshLMiE36WLZn2VfNRsTcAbNQd2",
  "key6": "2yFaVHMomjUa32ZQNHQsj7C7d9yNGT1gSUe1324sy5ALk2XxhebEzed8rW37fkF8tJdQH6HMAocYzw5VHSV4hW3x",
  "key7": "2jqV3J66FEAa6ZqGWpVgN3b5oxd5XiQYvbhRdPcPrWn52cYxtFyM8jLyptahpy8CUekX9MaEiRsgZfu3Qix9nfj3",
  "key8": "2NTx8RqQT2w4AA8gxFmuTKCytmwAUQPYkHNZa3AzrsZssSj5FGnqfFnWKYGdhGufr8LcAH9Rq1K26RBYHKTqvExS",
  "key9": "QPY92Z6hYF6uWRDoYpe5LRrKEPtKaqNRbfYy8j9fqogAT75gTyvkFFs412zbhnNYNwPyUT5o3rMv5KnWoUvN6f9",
  "key10": "nSmNNV7DGvo6YiUxuijqnUYZzhEi4bWkVwEDC4FeDiNR8HMMA7J7mxDwVyvedV8J4WsYCTUqkg8jx1G2wUtiqMy",
  "key11": "5mNyQPWGrFNeqTvsNWcKw3n5EqeWDbg3JCsBrtNF1gBRqozzfkG1JKwy8pH8phqEnupG917ePEJMDCQkgVmvaBW5",
  "key12": "28EZS734imTSimdTknBVqAWwWZks6ScX9XiecqgTKwBi69sMn7sU7bY8Q8U1Y7Y6JxiPnQk7kiYFLtEgF1YTwQ9f",
  "key13": "3owanqtgvAwqijWr3Z9svm43uR9UCB7KLSmAynaRdfjRuqq22bT3VXyLnp5WUJ1vuVZUdMzqB5EZgxqyXTVnYFp2",
  "key14": "4EfGGUvygxFkg6ABmSkQweefYfHfR9pcJmW1obe3ioUQfSkYarEJAZue7WuJpi1tmYhB46Fx3SJiPBCiwh2sSpA9",
  "key15": "4PjxyA3Us2jjca9X2nqhW29US5ZiJd7zzFAbZDb7SJNHYjSWFSXtXAt8HHq5BRMryrTyb7XYkFWJZ3CGfZYeC5rH",
  "key16": "4dDrjvMSRrwiKuPxBLhBLMUnoRTmnoDHBSwZ6cZYcerZ2Dm6qsQGA3C8m5trLbrRPiBRhQnSokVTovkxs5Fn2Tk5",
  "key17": "3HxSoiMhcM8tXL4EwxeZeC9nmQxnkt8qAPsi7Sh9kStpp5SH6wxU6Tm8chy26HpSZBunHuHrDgveWPypxhJ6kBqB",
  "key18": "3xQ3CpDvuE3i7ueKGttU8K38enBDef7L7qTCMAzipdohn8n5udFBxWTrPo2eknvSK3j2dCjyVskYiSozvziHk2dQ",
  "key19": "594aLAVcbxTaWuXkyQv4erFWbLbCMjNa1t75ATzbxUauaCaji8RGi2zqVVLQ2Y3ApGRXZPx7EeEGxbL5pLPxrqKa",
  "key20": "TBs7CadFiKh2i8TqNRBEs5sEmZ3yQiLtbXp1rmbaw89sFWxu7nbhSCCKzSK1KLX2Q1qxcwuBmNRVbbZFD7JJY9c",
  "key21": "4TUfWcp1teHqanzd1hDDgHznsSSgccE3pntELnYjUvdVzdBrTYxTp1ASSd61nqvrUhBUgfp3qgzD1GXcrVUVHnrn",
  "key22": "3txoCFvNWPrBJNrhKuUvC6VnhZcf7txD8icETJ2dLKj6cYGdAo93jRbjwtTtst1Ko9RKSgN8pBGL4AfP83bMPqSf",
  "key23": "2FwbCZSVjYLdLkc8yPbDASJxoSgdbicDM6kbmNZFRVS9cCfryGKzrT2exLgQZL3iRR42qwnzHQNaavwCibRGZzbF",
  "key24": "2w486fBucpD7dap4RWC6nYL1KrzcHb4TKaJqe1FM5VpvGxwXc2vSg2mK8q65tNFBufyxQ5hb1GiyMNSh3K9vCfkx"
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
