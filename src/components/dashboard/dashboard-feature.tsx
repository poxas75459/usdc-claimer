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
    "3tM4dLNL9bGZKRHyQdFDSeJRmTSmRFoHhQEAnsrqwWrvS9XMWNxNXWX34WAt2cbX3uxTYREQyFuzSHtz2cZz5AfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PVXjCpmw5E7EJSxPLiWbce36D82sh7xBy6n28K8raTZhLfeSDiFUKvG9NSFdNLSbKhYB8gCeupRLeYp9rXQAB6h",
  "key1": "5NqcvoTQu7pK1SkJsXd9B6TgPxTYLE6PaGwxnj8jpjkc7SVR6fD3x2z8dbb8bAfWH4EVKxo5t5cur3HxPqGpQXUg",
  "key2": "3Rsva7BrxNAP1NYUA6U1gePDCtvvxQfHyJaHZTDpKUc1Gxv9iwfrnQyaQhN9NFwJoPC2ArDuNwanbvu76q7N7zBn",
  "key3": "T2d4jKa2vrntrC1nfVYsmn3jAgyZpv5eCBgrREFgE2qwd7JJXweHq5eNjYUeq2AYbsFbr997AoFDSHJy8pxZBjV",
  "key4": "51jfstruu7HtMdaLSoVaZKph8GxNQCCNeL1gcSCgLfm5BprJSCKEb2cpWB5AJLeR42zSYXKMd26TLzk2NLPmV1AE",
  "key5": "4KjARa8r6Ki8vQjpcwsDdyPQypgLrupWEB7qfpcRcw9QEYopnGicq5qHt2f56SVF41fDAmnS58DTkSwJ4wdqY9Q8",
  "key6": "3uH35c81MHF9ezmQq3pv7o9JviQizagWkwFkhp7KMesERJXrALJehPwSLc3WEXhJMdwXZhTsz7YKfhPuGX1ZsrtA",
  "key7": "26s21hNL1BbUzbv8hGgiw41w7LUUPeMWPhrtgAPqAKbQetCaKujv9Dti842WLUqousEXL3EUZkfm8tVnMq4eihuz",
  "key8": "2hJyoG73XxmP4zPervN8ZhMSEWrD2SBwyZNQ9vh2vmFRVxmuioCHUVLzRufwp1QMifnhCaApciH8B1HLEreSpLYV",
  "key9": "4ShdDL6myXdDeNDK65K9keqD4gL34n1DvArHhR4FCb1BGf9jtnbnSz6ZzxCQgKeHGCXcj2VmvQKQXaDugqfbb4zE",
  "key10": "5eBQSewmRppXAkmJYWFYqbYEfRSPCtiDkFwkaNjuqpXQEeRXp5wSYGJFyz4gbf1H1vBitrmUbs1cZ9MLf79WNDWp",
  "key11": "4LNd6mjTB4GcEx7qX5oGvMyg2V8h3mC2RxUo2xxoVafrXtH9LtLXFESgoiShAAsRAhgagcS2AFjBRCvsMUVKeKHT",
  "key12": "5Y3rgZADjbXALraxBDVcp6DpKAFSDkf24mvrhuoDxjpbadkoPyxrkNhR5pJydSigFyz2Jip6zWBpD6FBfuoTvUy6",
  "key13": "5gEZN1f1f2cKAwY8xH6MpWuz6CEgXkikK8AGMp3S6quEP9sMNrUvNV18XT2Ht5M65u9QSFC7zNajaMFEaueDpesJ",
  "key14": "3WH8D8Gb4DFBEiaDPixtAgV74b4Wa2bcEm6WJR6erem5UevZLJhFYYtCUjEdqvsxAQx27UPK2V5TbvWyQHySx6gQ",
  "key15": "4NLW2BaghxSoLhxBgNhmeFPJWgbd2LX2hMp3KYsQS2w1n53YhUw5dQ7DiXcGtQYjgExkiT91gBxFpY32meN6HSV6",
  "key16": "3aRdUnAjsN3aVvDQhGFZDXSkeV73nz6PRKgxxLhWXa5hZWUMWAvKEiKUar6CAjJsHayN1gw1Bvam6cJftktc7BrJ",
  "key17": "497Ak6Ed57mqR6bmqcCWJX4FCHTdda3LF6mUuXERzJisHN2ydQ8EeWojoxEj5Am9ftxz2Twqr2CDaQC3P1iAdk9j",
  "key18": "56FTRZe3UoNKwd6hxZVUBDLxPLqMhg89cxUi9Bj3HzGoooh3CRAmKxXJszutEAm9uzEa97d1QFTeFNQFQhRHVEBW",
  "key19": "2eN65X8wawpq4BviQaDL4coev4yxUpbY54dw4vtKsKT5ALicya2pWYofsxWS1Ymo2Tefie4Pc9JjjycKWKuRLsoD",
  "key20": "3JPpWY67DX6Nc7jhM46EWuLt5ydnNpRGiwXgXqEk6KDrY6b3b9nCsSwtNbWK69MnR2gphrpZf57sybkxrUMUsEH7",
  "key21": "5gZX1YfdzpoKJmoDVjZhGyxsLgCUG7MoWQUW8KEBtPmbMt32HiGmkm2Eoj5pW5ad8bTzPfHnrG4QHgcQKtXXgHgv",
  "key22": "2SAYL2Z4pojk7mKtZCfDWMzyjPpKCKWGHnNmQXepUL1GkyF9LabMKzGyjvMbQwL2x5SdoJs8beiH6eEjQZE28iTC",
  "key23": "jT969xMXn1v9bfovrkKN24xx9oMpqVtz8sBK8ChTLJeUHRG293xaATP2MhbvoPcM9hbJ6kXS8Ao8xttDhmjiu3p",
  "key24": "23ojKxAs8BkC2vDV5SKmztAt1fi4LkWpqsGK85SnFC27GtasK2Ut8SP4iVxyzSd5K81ZcByR3eMaiyDaVkHtXmKh",
  "key25": "2QYTWh1cBGi5tYbFmLmnkrFGVxfFTfVrDpUxSmaoxvcz91qXjcyqsHMzMrdaVHo6E4ohLjwuRpfbcGtX7vRtsJ5X",
  "key26": "24zMq7Fz7R1b2v9wSq4j1A2ZfE8Mxe3DVBq8z8aJ1kbpouyZNriUccFmPdpqMxbhtADX4zSaNskBKQMvETnEUR8A",
  "key27": "2B7SkYd9qh4Yj7BTc9FwjxBwTL6SQW5tuRnpdsxQiYkdRmf6UMctp9FMwKA8dqgyifLd3r2uxLJeyNw5ofzkKa4Z",
  "key28": "5gMr5WLbKmiBwtEERBhFPLidiKVofjJ8KB8zcLMwmPY23SyUpurENDyBr7tE6QEU2ew4BQsQjEGkWiQ8JqUkLqat",
  "key29": "4fDgagcwxPCRN5hHkxjKD726gEi7yt2zv91gJ4ghDh22L4EWoL9q55N5gdstgex8WfDr1xv4YMDTa9uLA1iyKg94",
  "key30": "3KiF6RNLwHbZPtQ5Tx3rSanZWnFM37Jm2uLHG67Q4zBimgNBkHwxGcCY6mWVKJrLjey5s7kSVPPmEy18JkLpPJ9k",
  "key31": "2onhLbmWwsCvi9Tapj3JrPbhoxuMYNbju9tXPnDdpYSWsB4WBcHghxHMHWDfwf4HPexzFVX2ocvPdL6Tg6pyqpo9"
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
