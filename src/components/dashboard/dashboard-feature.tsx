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
    "3ZWSXFd3Ut2Q9EeugbNpPsKmjMkpN8LadUoeqYmnEzjFbRuFbUseRYJiUvgnaAUS2M61CpWamxqeXHKDikBjHsE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tqN3ByJk9oFcRG2UqEuejX48UusfmtZorBqwJULqnr3GDvsbX1ANvuRsb2SQyahQxRUuzVGohTsyiURHNjzXCj8",
  "key1": "2HJXXuSAUbPsCoJmQh2sxLa6kyVrhLUymaeZfcU7Ey5o5E96pBADaXwRiJxTWGN6DucTzdiyiFCeno5FhUT6eooR",
  "key2": "bPqBR94CApGe7qnrRJSeKJWB4Gx1xuDouzbieGMKDyx46VxtGZKmJLmPySkfn9MPninDBTnFScM1KQQaS52mttj",
  "key3": "3gKWJTA31bZ9XN8g1t7pL4PhiifRP9iCmMav3YADkcdKT6doj8gCsFNxy2Ax4bjQuR6Ufbnd8CAdGSFhiJaajfh8",
  "key4": "5fptQ9GLDxcBD7gsBkWHCNL5EJMQw37tWHPnAefLeZhetka9j6fhqWWAf5nY696C9b6geNhair5P8syX4eqAZuFr",
  "key5": "64Z4Reh47ghF8EQkLdNekDzvkEfXt9shdhDh4VRXcY5J44vepmqZ1dG2PTKFMdGHXYwmkwVKkvBauic7qQazUhZT",
  "key6": "49XtbTq5uGHt53SAhjB2qYKQNgSrGC46pF7E7tEJBjTiKzsFYEoWaUPYsVzXenGMBZuphfFE6LKpmB8xjQ2hKrKt",
  "key7": "4fDrjXrXBM8xwkDKpkvkiK7prTX96v2Wosye4rvpLUSBto1jeMSfYLnJaZrDHq9tyKE4XVdgLnCSutY5WdjwYRpH",
  "key8": "4qKCVkS6mGvXuUCXzL33e7xS1cJxYkd6gtTj341LgDwxznqRVUeegndH7dUXwvYo1gPLaBNFCqdvftDANpFLDJSJ",
  "key9": "dmv2tAG1CvnXW7qhTBu45rPLkzoH3aEpo8kUXbtSoZM9ZzVMFZfawMgykUaAo7xdwjyQ3yDfyJqeBcEdVGyotb8",
  "key10": "4H7n9LSQaNmRVVMGT7N5aAhbCgkz5ndKpmegxwqfGb6BDGekfQdKa2N8uzhgYEUDQpeAxtJTYmSYoJBDAVRUUs5R",
  "key11": "5GhnJcDxbuQVQ3UfrqvvgKjGcQWvuHB7sk9hHdG6vricM7uscnKhZFZ5KLLQ7cy3pMDWGh5xybdmjdmBqU7NcNyd",
  "key12": "3tejz8tZ74kSAf9GrQWwUsARSdCSFD26oMLMp1dz8a9CYANL6k97DpSUiRoJv6Ncq8BQr1rPsfxV939ZpznJGjYM",
  "key13": "65yr1pRcgToe9ebjrbBhHyoBAGDgpyHR8F9SDtMGS2niYaoMhzBntXi54gTUMgJ1haCTryRkhYWBdJUjHv6KhWDx",
  "key14": "5hP5gjuDKN2Gc87mCwz916BqhQckegYgmHg51fAwQGdDBxGhkcYWEFZEzeaQGyo6Zuhy7Hk4P9WmNhU8GpAyTpMJ",
  "key15": "3inxV4oXxaHagGa3z7zaao5fWLbJ1G5wEV7LzjcQBRh21VkSLnfe9oEXgYGaaZSeFd2J5hAj9p7DabtcB6BbbdsJ",
  "key16": "2k9wdRZnEMHsYhnEBS8sMuqjoDN2SGu4HggKQCwVNiQgKxFBVu2Q7ppe6ySFWPKMEgq9Q3uwecdxLkdq6RGg8zVg",
  "key17": "63vr6pA4oobXW7YSiTfVYGV9iBFncRJ7qrZueDc4fu82f3SNc7CdVfxvFNUNfMzds4J3K4g3uYSjSy3Ma889uDkT",
  "key18": "57qD7HKq57DyF2D4fXWngmC9TV7xUvoZ8jtcfWBJ2BFP9ePb9wYcuN1xj6S4xmrWz4Ue7vQTy8LmnLLUgLQvWQSn",
  "key19": "4bUDfW4xruNanx857dwrobVZxb7bd5MsembmcjjoyXyuHSuzvW2raXdVg9TyUQGWaFHAkmu5Fb671nviyJe1YiH6",
  "key20": "3wMDv47rV6JmmvHtp6U6qpwnvFfue3pB8SiQMakKMcSyUFAZN2wMbWpKhjYDQXuQMB4Qa7xezno4Ht5qUnsh3W7X",
  "key21": "3ahTL9NzPWYc3XH328YQNKP13a7cmZ8phsXVqjuYScFywt3VWoEDycdf3aUGQmohWK5XvJxB1XweqypJuPDdrixE",
  "key22": "4t7rP5TxQmZNtjEkFzazj1RNBd4uznrNt4yS3Q8TzAPRHzRBWQF7XEut4EB4PGk3QetQdf2ojdy46NRVHZ4vzJB3",
  "key23": "2Df4GWEhJzzLQsAHNpFVymLAmDQcncePAB5CengRUx85STaDKtNBmpev2PVW9KBfyQ8BRuiyH5kWX7semsSXLdJg",
  "key24": "3k4C9krhNoBkdYNpHPx8yar7tjjT2y4CqJsNbDbLKejdxjPwpS2KSvecUxTW512CgB3nSuC4McnXcDQoRYB1bb1F",
  "key25": "8KNsRgK1LzcmnipkyjdAbaj9xksBydmfJDpdvo9GpNYUtJoy5CgjLtXtE6YNswBPa8AFiFc5n3WgeXPYjY36Xpj",
  "key26": "28UByRu2tRLM9qZnC6CRiKWYvFLUtn9GTRWvg5DVaoxFA1bGN4BTvRoRj3X8Gcw9CoWj23EHwxAy8EWEz6a6etXU",
  "key27": "qGR2iCyWAcB8BZCnxbSC1qw7DuGdYMQwtPgDcoSFcUfe1tQm6rmSjWRDLvX85gQ6BjCwxFwdJiUKJ49enA4Huxf",
  "key28": "2D8M5eZijEM7GMqk93befg42RJnnQNGtSMik3RipB9QYBRNjqGAe7drQgzpGFUk5vLBnmG9L36MNssKCmviXxtYt",
  "key29": "5SnU1wkKgJx1jQKZMLRQK5kH8edPTJuK4CWrU1o5X5gVw3xHq72bux1xYRX9SGCHPjbwBAXdn11Q72Wpeqef2dgZ",
  "key30": "2xhcBQMd2y3Y57bqSesLnB3kVWtkXB9SFfpdcAT5dm3wfuqYg6Z6PaEnpQvuGnHq7SuCn2D7YHFqVxLHzZjbx1YR",
  "key31": "5RYXx3vXHyc7pBZ7CJ2XaqwXFkftD4fXqF6SnRYdjwXStfA1BmbaMPd645RxeGGPVLUUDGPwqbqMwRs1GzHvDxbD",
  "key32": "37yqFb2y52diqovZZ8nJAmM2zEYsWJqS1PnN236mn8hC9ZWpeCNWkCAhWtt6U5nvMZFed4vuG7vLi7Q3n9im43DZ",
  "key33": "2V6PoJpapdQ5ZJoKbJT9csKvLLavEMM59j4Gwf5Es7JK9ak4rGXoXVETtu3Q748MN9RVpk2fC8zasL7ksAVufGvQ"
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
