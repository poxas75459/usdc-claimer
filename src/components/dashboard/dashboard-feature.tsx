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
    "3j5NcdPrSUYMZ23DEAQe11hHNBtmegTor6U4gsrPFtSq583UFGrMWmuAVsZsDkatyM8VqtqKWwk1NexCtrciyPsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tNTrVkPet3y8GUVbrwuYGTtjJWbjXUyJuAx7z6WBSP9dbAgHMhQ5DKL5cyo3J5petEnjPFcrGYmL8BvBq5YUL81",
  "key1": "3xhqbkXy8M72JoMUfuxEusvmLzBNyZfAjXXvjpbUmZF7G9VjSdbMjidfGv3dVqQQpork16v2c57t2qG9MWj3nKt7",
  "key2": "3jFRV3j8k72JSnGA2ZCeCvfDSLjCDNai44JqFxjaR8BHk2rLWwcpk8MAouf8CB71kvPmHrHkhhdp2LFzXpfdMSZ5",
  "key3": "54FHh7StdQivCjAGpFQZYoSof8j9p79ZxYgC7QSUWb9e3sjvvkbb3ocd6xuZCFidegUagNRo3D7Rhpcerp4Deawe",
  "key4": "2KzVr3BsFsAX2qRb56D9pj7Cf3Z75oaLsnrKM8CJUjRGiB9nXgyPwrXXN5FJJEUD7kS769tLxrF33Ef1kinBtJmL",
  "key5": "63xKFMaVDTvub6rdnq7E1EkCDjBtSf8aKntYX7tt8f3K4K3QGHuiT9Q9scXQXVrzevtpfHvDEJWhbKrftGRpEmrq",
  "key6": "Mso5h8a5GmfGBLrRnhtSJHhB9XWxWSR5qGNz34UazL4SMGnZXDWYv1cXjMs9R1WANF2SQC7MobfHqcwE1Ho9FjL",
  "key7": "3TDvgB8PfT4ssKDoWyA4khjqnCJN71JCyjFhEj9925DVSaFAAn68dtW6tYgXsxWooybMyVFNNaLenHkgwHekM6sp",
  "key8": "9CLzLLkadoqbF4F9gDb85Yb4SPG2FSCLzzLUeMn5Rs8p18EFnNw1VuS6ZBhrKq2kRw4dSskvxZwQcrbk1gejQcJ",
  "key9": "3GbWsQgVNVFmX48YAUuGPekk2P14tsYkJ3JQ9QQoraYhR1FuYjhWfuxuEMiewqEMPNy69uCbPb6v2XgT1KbHpvpc",
  "key10": "5DJN6CR2yLqaV2ChuQboAzniyaFf8xAdxt5UVYn6RqGkYsci4LYLFbgaYCe7RmZUSWvK2BonchSQsVXFMz7HYw8H",
  "key11": "pmkZWobcB8THHFLQbFbYs9wzssGpYFhzLfwHCoJeVjKG68HhKWZ2UJjP9B77UZAknKTBC7v8gJA22n2vNVGwSut",
  "key12": "4gGjoitqQS7b1wj9CHgCBLArXfF1fN5MEmRRV9zVb1mBmmLX9hQM8TmGjs8tBkTTaoXYgYnYK8DesP3DxusdkQsy",
  "key13": "2U5RT54wyckumkhg2MD1krVKBhmPXKy5MG2WrzoHDZDh31KSNr2rshCqJ8W5HHWQZaKMxW5KT1vJ9tRLGoa9SFRX",
  "key14": "2uVVgr8mKoE9G6uzRy8AvThhcyDjWjrj9d1x5foVVGsdy9ZQjd1V55N7W3hUDrVTupCYYKu34yq4Co2oqHFPmUcQ",
  "key15": "2wbVo4PSQWdFwhMsbcJ8mTDNadkXLRC4j6aKHYe8ipCMrkbLv4xLKWicNWpTaK3m2dWuTr5GthYvZzMMLufxpCby",
  "key16": "2p6SQH8Kt6gJeod7CGA6XFtjRQFAnz3BdrgprFhqusmPDN4vJFW63bBxjf38vSUhBiKzH8zR953dQKp9WGoGJCX3",
  "key17": "3XruoX2QTGWxCKYaArV7P3LNUXyenhnEgf2vBWdrnC8JVNir3vzjJwugYadDchN9buqvfKkjvjLPyDfyZQtj9yKA",
  "key18": "EijvGtrg7rBh5v33nYn2ZSvu1cfxDjjEMv9RHLtoP4mBw15Y3qym9ctkdGyDX2JECMpvxPbKtdiE3LaNoX1nLAH",
  "key19": "aiEhGPcY1r6G2LXRdbHuAAAkSZvmyiQPZcZogLQC8P9KHaD6FbL4hTrniVfrXUL4pNCeQbYmLnRUx1XQGPvDwjd",
  "key20": "65tqCyPzV4L9wbEs6ny9UdtdtVAFCxFmc4c7k9MLrtJq2dMQ4PYyACrzSK1tVPXL64qroA1JWeh7MZg4c78JXsJg",
  "key21": "3Rw622ZQjghxAnPkgZZeUXDuXwHfxpsvVngJHMzsKSMi7iRMrZUgwenahyy81QuVJMDob7WHxkkTtDSwtXo7NcTG",
  "key22": "2wmobnPHEAe6JVQhZwM8P3U6bYjvvu7TtkcwBv9zTGyM8EyR7AfUJ42m5mtmSA7jv4UrLWBUj2VgugNMrzvjz8V6",
  "key23": "dGpzc5bEoFBdsQC4UwS814fq6sumMSBdJju7Tai5vuXX9Rx8KKqnRE3QeR1kWwCaEKfHpWSKyi27GrPcz2oWyfV",
  "key24": "2V1DyyExMXqenYzANd2oE9VDJukRmwg6YVmWhMH6TW17RjgxyP8QtWoPD1jHvwdkbeuNLc6VQQUWtyxzvTMy3bWt",
  "key25": "4xXFXD6kATppCUKarK2m2fhF6hTKv4EMbg81ghg4VyZ7V43aU1AZnC4jPpZuK6dvz2RybtHpMT3pU722pkJkxggD",
  "key26": "3ttaBoErhFNTCFqhQfmkCy5mJEmjSt9pnEkgd7ovPJcFSpsXrR31eMCJi1f9F6QwFnM9eybnXsr8guZxAYcob3tK",
  "key27": "3E3oYREbgvy75ku4fsa3GDLUe3Ba2aJLRf42YBcrH5iz9fWmsA9ENDVjaYV24ArZ5SYSfpSbpmyB3uNVRHno2LZm",
  "key28": "3ZfvGLFKvmrEgdLXRFCffGjpGwh5iuiFDztdyDsULY6y1yf4B5AQLeidEgJpqbSFFdsGk9zjKLVmn9SzhRbgrwum",
  "key29": "5hd7brbUzy72C51tQ3fM3g1LWTiyWvsRGtANRBV5GBHoCzKy7o5rjYyQJxiUy9Xko9uDdkNSSdEMstPqEcnmn7sk",
  "key30": "4ivdRuN1nsVNYqgL5PqbKhi4Z4Ly1b5riytG8jdkhc7uFudDs8vhBQo7TMFuRYG1gWMPLUsr2ht2ZG4WuJd8518r",
  "key31": "4EURHJ8SZHYBFPn6zNbJjm419NJ2DBkqFw6vedEyKmS1nkAbSeiEHU23FiwLSizYKtymFhSpi6TaK9rf6VW7DVhc"
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
