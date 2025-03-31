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
    "37qjsqAfVekQsJuw4PLbKSigdbpXR4PQNUhhpSLdQV8x5EGTrNBk6nFkpTRVozEUhc8gkerMPdZ2ewHPMWvBtC7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFhc2wLS6z1PomzF478oHdrR6pGLXQ3nXaheSQkpYnnQsJf2QRdNWP6oYF9sYCMd2L9mCwKSHrfGGxagA3Pe5nd",
  "key1": "5cC2zR8TVHzqyZFjjn43bKxb5Y7TCTvirv1JF7txM5r8dXnYR7YfaEFJrLPWf5XTR1gzQv8Zz9A2ehq7HB5xwMPF",
  "key2": "365wiZbsE4ErPh8xjbTaYeQKctELqQoBujYAiFzY2RYscWHfZDH613ipMfgVD3kUbiepUQ1MK1JCCqPSpUYNNE6L",
  "key3": "2uXEKo6Uuh82nHUFcXyvAw62dYEg8V5iDA2Nrmo81qqu84DfuK2THX3hAXRgURBz4F2UrkGxjcmcHpWcW23yPsAj",
  "key4": "2Mj4QqFSMCiTkDN7HWp3NRSPdumuWJR7GuktBSquV7ptdGatqiZHjcyXo8FS4pZtrVtXQ9G8LHVgV9HNWhY9a9HT",
  "key5": "rsnzhr4AA5dvqfiT3W8gJYAqgw8BnZtk6Chi58m6YQ2kgbh63ZLynBtChd4HHSXFrp6kCK6VUjhitdptz42wcpR",
  "key6": "sNepGhupr9Hy9RQAg8YWB4K8VDiymDLuafSAerVPyBzdaq1fzddG3ULYQ2WHynzVQa68Kq5rToZARUJT1peX33Q",
  "key7": "5sBYNh7vUs3sZhfGUmd67R8WhPuQKYjQtU8d9RgPMaFMCs4Q6WPwiVUaeQDuaS5DdhFsU9DSMQNy5PLRMtVPjqYx",
  "key8": "z6S5UDnnVyetNQPmgfDmWEeRR344fAJVv8Ez3UpwdDtNBN1bGZkDbEirxik14ia5VhCZJuvbndRpf7mAdYT6SX6",
  "key9": "4WakFz9A3TfrJe1CNXe4v4kvG9ZjyFuUc6q6HFMvh7BaL9czvcJR6SCrXR3u5usUW2Kg6RswGY6W1HriHepALwaq",
  "key10": "5MtzekuzGB3HrKw5q12vVmLvzzgD6TY6xYEnytxpE8tkCNxqAHoVmzjDYrjAR2KD5AeJo1au8tHBehSQz62CDsU4",
  "key11": "hCYdLyCWYWMy68p24t2JGkryPCTfGENbM4hJrbjcaVT9DBaV6BmHvK2oWK9WZn9RHqS4nzXhMD6edwP6soKuUY7",
  "key12": "3ZFyw4S5MPfNKoJ16ZjSWW9suL6nHHvT2i1WrpgNLRy7f9fz7oyxozkMaZpRYCqGE62xqPbzJi7z9qVpbZJigZD7",
  "key13": "2guiTbdwwNF3wdd6EHHxE825tAb6eMeBhT4ucKKXKWkGnuAxbgMwjU9jeTZKDiEaSuf2ZaiwPhDYLQuBkFjRgRzY",
  "key14": "532s1PzeZa8E2fwKkW5vzcN315Hw7KHfc6L71ReQedMj9eW5WdXP5Sw24Z1KYY47t3KBxNgubJBQDbxVqBCatW9g",
  "key15": "2TkjoCZnSQX8bSCjAccnoS7pjmi19EsajEaCcJPBupULBQQrs3zJfCo5VQuLVK58F7QhdppHDv89PuP5ayrLmmDp",
  "key16": "2cMJcbNUAtc8tj5i4rdXu44TvRqW7RgeqWYSw3EDG2UNZMDLLDRmdSsiJH44cGmNGhoaN7BumDrNM55drdVBfXGp",
  "key17": "3NWzsqomzC5LKDLntZPNa9XY9DXzLbV8TgWy8pR9awGCywjsJg8ym3XFbZruwe2cMNrCG9tw81bdqqZSKpHB4pe9",
  "key18": "33ESm3kLfCmYsBefxiT5mQLi2EvYmyvfUg572zY7b1rEvKFihZgmjoqeDiAhYRLMJPoAbDDjnr2u5we7h1NcL4E5",
  "key19": "32FxRzMeeouc6g7LAbnJQrxfX4r6xjTgBWxpQeqbwsoJ8FKA2CaT2KjDCfqYcbt8r5dc24JsmdAKhrnuR9fMxyu8",
  "key20": "3GvyU5ej7MRiX55dSQJo2grbAFkhgriyguFYeRP5Q5VrLErcR9cR1ov3oFA6XKTftsrkJDCMFk6VkSvNzXj8vTH5",
  "key21": "268rUmJYdqC6D8UK8M3gfoUaNyXCyQpgv2DTQk3dCF618JehPq8YFrvV2NrCckH3HBMn9GfmKwzKXd1pULF96HHf",
  "key22": "3aY5v5sMQqNSb2Sd2e34k79Sm6LiPXh383MHuv9VdtCucz6d3SSSLe7Whdoa4rnd6qkfj9veZMLwPV5kyG8F8oix",
  "key23": "2k8tu5ujXPmpHpry6kLGEn9RyKMYJnDKxgAVKvwHZzWdf2sVwgnR6Tyz86RDKmhdU1ztfAyXBT5YruEvafj1HEs7",
  "key24": "2thcnZ4QBbsnQM5sN5xH5RYhUbd9ob1qyW8icqLnKrSxLJsJXSYUrGWfWChCk4JzrrTHFpnSufGuZquMLRfoUkX4",
  "key25": "kVqFCgBHeYSgtFPZhQvacctTK2mHcDtoXE9TabkpNwUrwijmrQiCdKKChkcP19xm2N4nUCxfWkqD7QEDnV2B3ab",
  "key26": "WLYfhdkX4JCNnYAiQdDWQk65WeJpyFjJYDWwboTn2f8sjWrEJf8zg9ghgdapx3Atc9kYagRmFRTPA8dVtcL8jnw",
  "key27": "5DRZ4uFy9RCrGu2YV8YmayX6L7A7Fjaxek2NjWmWuaBN6swTmiLzS7Te3PianspqXMj19zdxqdSJbbDvWTCP82Hs",
  "key28": "39Grpg4Cbz64Hmk7Dmug3SitCfVXo5Gn8h5iYr66gTXDCgxtFwWoc3BitR1xSTLTk6Gj35KTWtgnTfG9wRjwvPFM",
  "key29": "7srW1W1BySQsv2x9MUcYG3KZxbaacpWTMa4MyQbe4hdTmucrFBJG8SMXvQpAzrCEmgZSRy433Jfd3M9BYENvmEh",
  "key30": "4sNa96qQ8LuNVhmW4EAW3GaGVAkCNayyoCtjffxmgncc5LBxFuuFx4k5U1ukRo3ADx1RJbjGQyepHZD3W81ir527",
  "key31": "5uJNQLVkvsam1nReMGPZgX9JujA5vbHz1rbZi4ub8TPaKMphAbMRCHgpMmHRxaBmiuJ8W8L1pRNRkK7T5oowVUBF",
  "key32": "No3g1DA7SCjSnYsNJMmAGLCjTW3iXPKsXf1efwBA19qHSQr2qvT9sdETWwZMFDfxJw2nZgXnCejCt4gdGHiqxym",
  "key33": "2BVhF4qYfAWUtUNoy95ewqmAfa2jA7vS8v8TJqiSbbr6yVZcbDr3ZpJ1fervx3fUcaugWtSVtuAXdM6WmtZQbuA4",
  "key34": "2MS46ANAC8QY8Nk31LgRTEFXbwXtrnrPNawHuTYgyopiUxNurpA7tvtGLWeobhQgKB8d1UsibPMGezFePRwX5pYw",
  "key35": "3KHdtUu4LFj6wHPSgg3MQ2Zf9DgQdFa54sV2TqiRxPReeHLJdHR3ewSUspvAPzocPLjYVmbdxQJyPQ3HgUixwSfK",
  "key36": "2LmgbwjocWgyiadEod76pNXX53rTaMwcQD3q9jvEPChmX8PxNuSkvoqmP4ih5jjGGcMSfqUJdDs7XhxfWDba7b5W",
  "key37": "4SEntQUjgZhQLctnswmWuRpiHhpiBDNECru5YyjmqRJHNxHpKHFbAVrpmH7bkBMfGTaxkPGN5ENKR9iiMoPwQhhb",
  "key38": "3FXsfHWMBJ2cAx8XJw7MvkVEf43s3TokWAof6xqaMqJd1GBWmgjXxCxW9x3w7TmhVynmPk16jzDCqp8seh6smFVV",
  "key39": "4W7oMLJB2TELM3tQE76mLy5i9QJbijcHuVBVVr8iHUPHUpyn3enUYBtZSfisqJ7nb4ivrNY8JNAZgz9JqrnHNsLf",
  "key40": "2mDehcT6XUNYMPjmHVBh41HagUQCqN42hCjZML2PP6qhCqJuwW7tvRDmQSf9zosVpPKDFwuMkpGT2F9du9yJ4Bd2",
  "key41": "VhYhuwQYUdSfgGgzSLWBWmJNd4vUCtDcVCGXs3p51C89MD3epcjxjMQ4DohuAq4RTCcg3yKuQw8y4Qcc2qSuTQk",
  "key42": "3KQax4vf9TFxempvsZvYMBwu5oQmQ4tvduUmrA5hNSSRrHxqVEHuWSYPQxSBbYYVeyb3idaeHa9BQNJVKZebr2mH",
  "key43": "CwWyQDyRnZ6MYSxWM4n6Crs8BCgGiMHihAQs4ux6GNfjPzp4LzFhWhpsB7dmRhQeW6PF6podQEs96tH9Q2yoewf",
  "key44": "f7xAkGUSMKQD9z8X3L76jQZ385ee9nWfKtgACQs8KqVsMyvPdxhAVkv7tgpf1kKUUNZPhikDqSVU7bgwmEmquoE"
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
