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
    "4rf2jikyarenYmoAoaYnquY4R7UXnDuoX1EDRwMYGmDnbjZ6CQdUwBMvhJDqxEWk3kwm8qUpjdynkFnrVS8TBbDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zCPjc52mzx2pr2W4LYtQAgZems7zxWdtXbdqinHJw9r419qYQgaxVAfE9oVbuGF4vcWjxLsG3GNdmvc8rbBCA3v",
  "key1": "4qtDjcmRfxxNz4X7GHzikper5NwkppQEMHaBrpuwG6dMZPr1ZCqEbBYYgen5yz76taoCuGbyes6wH75p6CRMw8eY",
  "key2": "5qtjkKvhX1aAf42Je7nER6nvUg5hjATjS2BMxBQXu9EDhU3iqLcN8ZFA9QGNAuYhKav5ruUAFY9gjBHBSVjCPfgV",
  "key3": "4T6GTCXPQxouZEPUna8SfXGXpHKfK9fr7bXnq7Gj787zMPevReZtU9oXdP55pNspGfcWEpQCG693zrbX6v1oVkX4",
  "key4": "2H6kkXwN6VqkzHuAf3ADnoJD5mww2E3BjMUVqZfAptBKnwns71X2dCNk4dwT3hACuV4ixVrHGmEh5MpEb1zjAUCd",
  "key5": "4DA3MQWMvVVVcugM9WdnQHNhHwNsdXJJjHENtXjsVnVwpQ9P8mHEDSY6Exq1xXoyNy8LBuNoSLajVHL5KJ3zRki5",
  "key6": "4hH14o8a5PxVhCK5gfyfBmU5nUubhnuViGQypMy8ioBd7vhX92mAP3MTZCo3Msfwk6isHf6nFMJsnhgXk972G7mR",
  "key7": "Ayqixrvh8AhhhhZes1EhQaLi2WaKEPNRHYBMyY96YqdfbpFmfJSS6aePTG3eqavJbT4mMMysXh4MPdtGnj3qYo4",
  "key8": "Vqabg8jgWUKjtNDUBJquwgNtPDXv6WTuVoFTAeGdTa4FbaNG3xs21GvzZKRqUbrSEyrhKRoDFrnr5Ys4UJ22zoC",
  "key9": "46rv5Gat9UyANQr5CUAN9mRyVaYJsguhvGhSty8ERB3kaAjK5QQM1t63rwjkzMkw6CJd6BqRGHizdsyziYerod6C",
  "key10": "9WuuNzGZLgfmkdvnndHYXvYgKTJSJxrN2Qs5aoEVtRd1M5LxGpxyCx7eRNQWsHYR5qQ7ymp6UtUDW8sRrt9Z3cs",
  "key11": "63XkDeC45ajCTt2hCTV74EutDVc9jWsZ6U3HjtzMbsNiv46zHQT4mgAU4SjVp8RCo9zH6TTzcVVkoKMarQLeoWbK",
  "key12": "4GoGHGkKqdgFqLdKXGe7i4BWiPxFMZDM19zmpVWFg6dWeFNgam1TXNBRpuFpUWTjx6oU46P4X9sLFqmYKxzcaYKW",
  "key13": "3SSQRtrv8o2iPTWDVpWGn5NaabpZHLRTDCCkZahPE45p6hdy81YfhHXp4ayV371ky8NsYCEd1WJXqgi1vay6RZQM",
  "key14": "52wDrpz4kwj3rP6TFLteFUvHRfaDGju4k4BHfN1UwFvdHuzC53GFjLt6EA43hJeQMr194kgR7wVTKMU4A79y4KiM",
  "key15": "DisoYnrXJwd18e4FP7u322muergeFzoVuirfM1LfeR3tyfUyQmjHpuReNAzXxWch3PjZ9mVTXSywV8eAgJ9NdBk",
  "key16": "5h1YZZvRwWZHRwtG6oyUF75Uo7yGuMC94eXRLD1sDo5r3wGCTpAMtog8koET4VSvNfXHe4z93L5r9Q396YnbLncN",
  "key17": "5KyKCyJRNgWq4RRvja9HX7UngkvP5jzXdjt5HFisr53M7XMs8c9piYA5kRck7fwRk8urMJm8uDaDWS6AFXj65NH6",
  "key18": "TFhPRST1o9fGS3c462Y54frnSevMGFWAteH3Wjww44aWYboUAoCciLojik2YWcc2KA8TiUMLWyTeaDp5zuKnm5F",
  "key19": "3txsLYngQ6pLhphm1k9EefYzBLQR8SDHZ24MoKdoVXp7kQsgoBENPC9XGB1vRMJjBtmqKokXUq33kAbyejzDxJxP",
  "key20": "5VvQRABLyxPZjCYZsNHUo7NtjWy8T3iPmGy4UAZqvfT3s67hcbbuTBcQ7qG3r8YS1Pt27zMTKRjGWPS92aUifJVf",
  "key21": "2R8i6xLq8wHpSK9y7koEScWFHyhoLmYdo52u4VJZHeWz51PX7JL6NVf1JQaZkHBCYcKvDn2pbDkXLmMhxp91J36B",
  "key22": "49AXoBTScBGriaC7cwrS5MxfGTkQDHWFJQJUGokMmD6XinrPPDy8W6CvN26AZdU1hyoGPrU9Pbcnuq4Nyf1tHeuN",
  "key23": "49ZoMMXFctyFTGPsLMbmwwaenHC3QFdHLf8kbd1cmn5eJfEkNEDgCasr7fwCxwykS8mXjzPojnPZfXwC91qysQPg",
  "key24": "AA1Q9R8maX68N1ymAAjGeyLsxzTfX2R1mzJdm1vS84r8Dg6aTHxYkaMH8xP9LNmeYPWs7D5cmzcH1QtRLXnCdS4",
  "key25": "L17sLeywFajFKbnobyNER5FgCmivin38fvqx76bbFsxhZV93JHnss1sWMr83VG7d2ppfkSGY96HqcCvDqYccQ8v",
  "key26": "21WjUddS7R9pfx5dVGq6dkqMNK1eptCxpvw2XUgKWNHnGK1NEEwthBQnXukUWKyS77Fx6KN22RnfUZdbmkaEMivv",
  "key27": "2ozP87dwQWbGq5RPGYCTbwqjPzPBwFPqG1ne4AAc5iiFsqKREUMLywrySNZ8sZUMZWZjTofCboLVVAHJoKejZxCA",
  "key28": "5pyJ7ScB2N7fN8BqUvxamVSTAN29qS9h5rH6h7meE5J3Bgjx2HLnSdwCLzsx2XLmmQgc3DMFZDQffPzdRjcKQ7gB",
  "key29": "3coCxpZmiB6PVmeD9xPGhjHrXYAmvPTjVNSD65wy65BfrTxRCEBFVKKxyiknUr5AimZtcvpRdcXNQzuSaCUN2Jd4",
  "key30": "5MKGCBBMQtyy3q79tRjVaXeYz5is1G5sFrei4buLuvxg7is4ibeJtuSdxT1L3ifvzqLRKEysStzK7keEEvrPzhM5",
  "key31": "5c3cwvVWugRPFdrY8uoeZ8AQFg73gzf59E2sjn1RM6GkpSW2vDYHRTBtFdkwDN2d7fBL5Bb2vXmKLK83rYHwszzn",
  "key32": "9fntW5zLoPVLd4YNU23rGNKTd8PuX1f1S7M75BCSvcZKAZmUoCwRnx3vshUamcSSZ2S9zNUNBgjDbMXbMFoyQvo",
  "key33": "2GyXNsNYVHn1Utk7dBFmaikm1hqSr8mVPbUW2TN2paLFo42bKzBkUMxZgAjRofcBMZXTmMtV9pSWMr6jG6e4YoJB",
  "key34": "2u5qDB83UEsnV8gQktxcTnVBUrDytrudCnFSmPzqDVRtYnDbUuYxiGkcjb2MQ2JyDis6YGtmgCETiSYGPofN8FQd"
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
