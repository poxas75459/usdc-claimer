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
    "3YF8FRL8snyuG1TpTgS4ATHQ1JhMJ4jtLXXiLExTWHn1EaceXLv3BA4pddrkkwQsTS6ejRqkJFJQr4uQZsQPfC4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aUZQxFo7LR7gUEyHkefug4CmEbWYb6YEBNof7vSR9RB6H1H9giBu6zf4Dz1L9LX5Ft4ebQzprgRyiMT8PGoXgHZ",
  "key1": "4ceGQ2zXbpC9aDdgyRRb7y1XZWPuhG6eHwjQDRU65VNKNvLrXZW1hgdMeaf8XdWjkq8ZM9PYRUyzD7uSd9bcJd3E",
  "key2": "415iv1VmQrGVr6KBh7Bcowztwa1EueMQUHUPzqLjcf3S4R5nhP7Vob5c1ZgF4G2BLUvqgZ78F44FchZx8CLVc6HP",
  "key3": "4NZ5iH7kdkWPYvc8viszYQFif86E3w5DzhizJ41yr3A6akcM43kxk9zgP4mfqcqHgtDNd24PxKQVJJTUEPh6TYB5",
  "key4": "4AMZDaUASG6nULYhYnW8fNFGmmuYUfdk1J2MZyL3i1nYzsGRQJRmkx7DC8WLEdvAmS58XCFYbLPgEvkzHvd6KWRh",
  "key5": "5aRzZkyGLD9N3Ff8mivNrTTWvThb7i47wo61Yz8dwGjUBE6gpfNQYgVAXxEF554kba6qYyo7yEDjcBwZpcLX6GiY",
  "key6": "FvGn3pDvMZ2Zw3UCNyqv4AG9j8JFPnxQn8FXbYDL7jAhGLMCKK29jdAhxpXXUdKYv1KgbM3dAtBowLjAzuM5Fno",
  "key7": "3WiewoN3FEUsHE6TGrrmVMramKTxwTU8srS1q3rSkeb2ZjwVA2Sa4NoU3VpvxjK4GizKe6FoFJ6LxCMo3or8dzV3",
  "key8": "3mADVuoiQ5AfDE9kCWma1WHqecsVu7RTs2dAYUwNTKvHB1PtSjey5VJx1fs7bjce51kGEmk6bxqCEwk6dLLFHjaC",
  "key9": "5FUVXdyauNcNxfUXqyQRotaWYkS1gCVSXauZ8LPXshZSubN4w3i5wHKy48ymhLXesCf1RMi5HAnZubKKTJaG5wiA",
  "key10": "3PzpEx4u2PNwGhtCexAhMZKv88eFDLP4CW8MxyPH5axuLCe2pxmNXdfDAtjMVqWbDjjxT5YAzD1hwGbAdyp5LToZ",
  "key11": "3XzA29grTVGcemgbbQPqkP5SGXp17C2Rpmg8fcJB5gJNvkupZc9AFGemPGmW8ePMmoxXg8o2ubb84rFa6M6PVRkj",
  "key12": "2LoYaQvENGY82x9xbmyiCYRV2MRF8z6Ko56kdeuHbLRP4cbreY2Vz5xznibYPKCoVWTL6u5dLMhCw6EXCXtcpK9L",
  "key13": "2Cxb5NcqygA19D5tEa4PXpyTEDamKra5weg7PMv8yjnWdqHzuNcpz3XfQYseAPzMfRdFPkfPgz2Ri9kPWbo6D6N9",
  "key14": "3pxViw3aZhfWkGD7iqQTMZTbjm18JPe6nv6SienfKp17X7aHNvBJSCnijgkQaRBvmU485y9McouAT6XR8bLgDxDa",
  "key15": "51Tx89Kvqicf7Y5iYwBuXR6mAXqM64wQU6pASGZY42Vu8Deb3LtudXRCKoKcfJ9K2wZdGmuvGSNYBXd3ThXoqJGe",
  "key16": "2TRd8tMLzw6St9ULTqxPKiuoFKLeTepxNkwnNf3ejUj36ga6XaHbT3BqZwUVuYvqdk7tTofvCT6oXhrF9FutCzqg",
  "key17": "5Q8XkCrACG2fU7WS6BNueEwwrwdotnXU2Wc29ZYtvQ6N6zM6V9ykt9sEyhcL5XXE9qYZqbwfjytYipX2J2yeNdhh",
  "key18": "2u4w5LJ8gFAeT8cibS5iwM1c4D8tq5UXtZgqvvgNSE95zwAk9DA56mYZBRddUh3FXTyae79to5hdfh6vd6dXGLt9",
  "key19": "3SjnSS7NAaXYciwvHMFJMkQg1JjMJjYQpx496VgccUxpFZWjhbESVhNzgdsiJ9EJCDsPS4M7SmEy2EzVxp66tRVK",
  "key20": "2oVKLt9YjsLSQeqyB7yvXHLNE7fPQLgoNWcPahFwDhtNav1bGWo8zFgf1AmMp8tw8QEHamByhmDmPyzRGLU1o62Q",
  "key21": "2WxFZRgJ96XQ54Zjoxyv4htcNsNqep947m1fapWRhkjehM3s8ap8gkg2p3GBqQA7zi6iTiKzTSEVurjsnShjxXA6",
  "key22": "2SAKkABr7RfftJqqygwPwYhTcs7hYjB1wNmzRVLxczArYv6kCSMMtqFpePt4rsCjUiczxwsE8yEVWyJL7KnRvu3p",
  "key23": "2J6mPunKFuQLwPzpJLpngyEoyxB7XaMBWHe8PqSuQp5W3fv7QUBgxjGWUjAtiphCn4SihE9o2JUbSz9DXUVHPp31",
  "key24": "2SQ1yhzYXkpsXyorB6jnHmZsGvmb3AkiAWse5UcEgDH25gRtHddSkT3hL7jmWZEqiLVeao39xvukq989NdsZyUtg",
  "key25": "YkSQWGfkyFQURRgQajsf86Z5T4K24vaTKBtQXkUDWLHc5J6eTvf5GGdFgHoBpTBGrkATsUus6cHT7drvR4v1ocD",
  "key26": "2VBExTE7YW35c3n6yW85bYigraUjM1mVU1VRxrMuiYhZz2qTBaN6sxbwd1ZhBjgNT283TmcHSK6RNjdWraH5dUuc",
  "key27": "4WQhEAYUavtJrBenoBfinxppnRjuqpQ9L8tqf1mWJwXrkWzuoSDmkDZdKZYN4pHfj29Tg3cUA4sVhFcbVoHYhi7V",
  "key28": "3a9gDGT6gQtBsRW1nVv3zxzzFJnCbwX4xPeyvJmARGLD6i3nEg8EtrqK8kg3h6Zz4df6wKcFg4PJ3YAXt1hQA3Qq"
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
