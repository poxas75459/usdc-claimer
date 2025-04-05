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
    "3cLg4YFy48ECLouv7RzKmYXYKeWgYm1cJMhg1PmfcbJwzYiGCprgoJU5FmxoPJ8a8XZKCvALa1qBJhmu57PJkPhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rUVhQRmFGS4pKVUexBjRHja33AayE4rW2fRziTgwp6f9Lp6hMX6LGSpzwbdTkBtepffwaUKzrMf9Zqy9KrdguwA",
  "key1": "5Dbgvg4q7K3PLvwKhuNC1kXiFRgtTwSpZd28ooj5A9Nif3KPmzA6GfT94fMdAC5DBSYn4T9nfwah5arXL2izFkEH",
  "key2": "5isr3Yk1DHrnjMZ8jqw6QSWtSMYdyEDrnMDpCTpaNWRVmbsa9amWYuUxtkxAsKVdiPEkGexz81snchvmf2i8amcH",
  "key3": "3ihbCj55DjcgCzau49oqbjy4DLiwRPthA6XptXVX62gAaC9Rb4QSUkXPHQUCgLYYS4rv4QK6WHH5hHCTYqGwwx1e",
  "key4": "vLXEWTFWz8o6NgVhZMNyBLj6tY5KkfuRCkmNXQ3AEAkTSS2Pco1jyAc3DbyyAkvXLz6HmEQq1dpzqUHPZCBp7zj",
  "key5": "2ugMgZaYYZLKB1JZaKbpXtM1ByjcQSJH4NLaYzdXWBb2gTjyZRuRLNKMMU1AxRawtMjCJaTD12RCKy1nHrpBKtC8",
  "key6": "Q9By6FzPgbgfZc6pL1M2wWgAcs56kRCoR8uzSjSRdGL61GjPLs9DcfyLZe9XtVZ1oDnm3feb7p4Jbrg1EYz7mUt",
  "key7": "4ZyRnjcGxiCjjwjGpyyfTqXtRWxyaLPCdj4ECkHeb65QRAv7wBN64VrqfrcrBp4XaFuNR9944KxFWTGZDBz1VJj8",
  "key8": "TiiZHPaeYR7wjPdSHBNDpZXw1vzTV75s46jZbq6hmBz4QRF6tWEKmW6fRQmUaFJoDUyEByPNcYc2o55yugVak4d",
  "key9": "2d81gE3VH1CTxCHQohD6SPZoFrMMjkP7eN1qviR2VMuG4fkzKAD3RJMiaEWwxsZm3n7A6Fc5YgnBXrj1L1pimsNc",
  "key10": "4aJCmvV6E4jExkCL24AZg8sNiSgWGtmPtuLxXch1v3X7iQrJiUCpoBV3GGN4QhkreAT8JSDb8pSeJzzY85v9qWCK",
  "key11": "4yv9D2bxAFcZc3qH2i1FvdUnc9yU6ttesgWvXzxHTFC9jVHUrrxwNCe7KtYvDz68JoKVNEb7hV1D5qWNhUJiTKEJ",
  "key12": "6RUL59Lw8gCXGRBXTgGjNs1aSDirFSSdbDitdv653tcmKeGsRun8JW5mWgSEvS9dJSojPWQPSu3XMhMjTqr6RSK",
  "key13": "3zrcVZPQyafBjMgHSj9S6j1W61g7Ntie5zjzJptnXWgChi6QFpyC4BDWnrR6ZmafVYCTfM2Th5q7KVCzrvZREp3Y",
  "key14": "2F5TYwoAQprFyix2XhboskAcM2f16CaVvtJ2qoJF1awAyt14z4VXaKTUESwzB6RWweaYDTR99MZUR5yJ2QmbziSs",
  "key15": "3k1RRvKctJYQZo2q32uZu62Gyw37jF9DvvXgpmWHCPWHkv4Y9aXoFvLSgbhwGN7oxU998C7GvxuLEBraTzDa89TR",
  "key16": "4VXtFj5rsvsz1BjXjwuZJ7krLVUVsnRLbq1vWhQ2AiBnR2nWerfJ2h2HkutZCvfhC7hoW3q5D81qRjjJBQHT7KS8",
  "key17": "5WvwPk8ptD3LPxtrnSzZdKRWxPW6K9HYHsFT1uhz9mXsmdKMUwziFm1iDWYjRW5G44JVoJQoAGyWhJgbEp1Na8HF",
  "key18": "36M9t5gVRT6zC16REGx3GTaLU2QYamjfzdt8FvSFC9aS7QHYjCeBbTNT2GmuCxTnzKXVhajm9zfJWcGj55zSsJAq",
  "key19": "nGa1Dkvie5rFn4SeanosvGJ654YFfrbCzwsVZ4LMfFBD7sM4iagwRbk2eoeDTfbpVkfy7pHSeHNFQJiDcs9QFKa",
  "key20": "2NMPXyVTrGU1FJ1zn3uUfVBCJ3sVEVN33HmFzVLq85tuPj8a3EACLHw6W68VevMQaA1q5vRF34guKcfWHp2icmKU",
  "key21": "53bLgSnDCYmPtuZtNs1HXQAVeUhebFvN7qM7tEtfodDv7SjJVnkBKZ8KdcMs4rDMrFr9SebkFfjbYWfotK4j49Cz",
  "key22": "3xQbhaqxrSDHeG1EZaxXkLAXwbN5ix2WUj92tWG7aNDYRg6HniH4zGEs8i1dxbAyRrH62AYZUkTo6BwrPwELhAyN",
  "key23": "3Xg3o5GwK6W1H8h2dwqw7FYYMzcDcQxp8MhQYp3RNY21Mz7dfJCLP8hR8iXS9hXdjqQX6oWNSGireCArvnN5rRvG",
  "key24": "2KSXe8FBbQgedwUifHRTvFZbwisCK9GCzxpnenViVxNQnFaW5tAZgp2d8XwK7C6rGdqwS49ds17CdaLayE8S1cvo"
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
