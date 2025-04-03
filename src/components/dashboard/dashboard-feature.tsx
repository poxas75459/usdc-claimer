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
    "HQieCypNzmsPN7jefe8nGRkKe39FJDQPuo3yaCySDjjRmv6R1ZptEaXMzgHS5wvkQK5mQJ4SNVm2An9kMuwQ998"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQJuYKFYB5XvMFLTxp5cHPR4qqEvBJucdBJqtfGJRRmkfjuUniW5KE18B7zTRqLWH2EfmT9W2y6isdbutofG7GZ",
  "key1": "4RPTsLNHWp81jU8SKidFtUQYSwFAdPZMLWXKEeZ3YqR7o4RPCKbeDvqme11GhNEcsMkCRbvxNc9QXqpK17jCnscr",
  "key2": "4bXvXiH6sYDBuHpXz9dkBdhhbmo1UL3z2kcw8RXfNmL48kGgq6PsZZZFg1CW6JBNugDVxQtUjd7SNi5JsrR5BcuS",
  "key3": "2ZcTNQN2HtdHyJNYmuCtcU4y8wR5Fa18dTHomtZiZ3CDfgf5C69JwuQC4pgiKgAd4SYmgh3tuJYcRpLRoE2LvMg9",
  "key4": "2ksCioPWBD54kFnSsvhw8QJqAr8MR7JUhQW4HDb1xcXiDTVS2NMhVuo5kB8FRPAAEiR9cWzcGT94XYVWmnaWS2AZ",
  "key5": "1Kvze2ykyevidaaVckkjiGoqta173xJVtGyng9PX6BbXG5aTZUqp8ZF4wBebjiw9kQyzfAXFU7Rnkp11Dp3PfBE",
  "key6": "5eWZKnq26nkXASPDnJofbve2LzMGNxe7XKj4xVwoo47xuoJReXABurbKrby7pCHrKNSaV8NBW56e6eWYsvfZZmaA",
  "key7": "3pHPpNRh4BhCpuzS6xwnfX5LF1CtohKEZLF354bMv61dJkexgALndvJG15xL5sTkakYqDGd9cwrK3Qu7Svjnr5e9",
  "key8": "3eX2GjPou78T9ESKcu4A9TQCXKmMFkKbFEixaXQkiRxLNu5y2ryC39XHqxLVF1UPuWHnPaTeH7ac2AH36czD1Ctt",
  "key9": "4Se7ySFeQKEciF6dWEvfmnkLXSdv8KqZCXQiruvr4A24idJHnNm4ajQmL27XWxowqhDozA7LBqT43A6bp3c8LQcH",
  "key10": "Xyna319afXrbErpgQ4vEGPimDfmfmiaNBWmm1SvX4EHhnM7mQXMjKiyazrw8FEs1i1LdSd46KxA6pxtfnHFx6As",
  "key11": "4DxsomtMQWyPGtbpJdXMnMjqSAXFHR3KpRKp8bUcVkaa49TnYzHBfZ6rg4hn3tXr2DDGToXcGNNjBSaeJHeubhRP",
  "key12": "3Ah6hQMeHNg997m4VrBEdoWBNsD1FT4eSe3yfK8qVgRfAckPAVedpNnGKpHwWTX4Zz9weAe2n2qSSf8JeBtUMubq",
  "key13": "5myVP8K7HRAwQqfbwMVmv6Qt841fdwz5HZH3ZAWxWnDPGYP4shXEZ2Pdj3aor8Ne9g2k1r74wRvPLPrevPnp54U3",
  "key14": "2w92yBvnTLSgAdtMbFLsqokXdVitK5hQ5F7Z1rRg9979Zp42TnE68dxpExDiQBBoj9FKyL1bn4N9K6WSx9nkec8Z",
  "key15": "4CS65svPEfeLDsdXFtY2T6jyzA9YT4AUgcMWiQJWJKjexnvHWsdfLjZHrTwAY4eSQfRh5M1riQ8RDw7pXXZpQ1eH",
  "key16": "svHjmfNhPJUvfd5crzgLdjWutcrDs4VJbsUwEHT74eJyGw9HC6eshGQ8zxvwmN5qdtUyqz249JaadafJhKPNnsG",
  "key17": "3YUpsZZiKFMmz6GoSDdYWitHPK6UPap5qk4n1FDBNw6euLkq46KQubZqDYdBYJjfnYcY44Z5mtVTR48vYEEi9QGe",
  "key18": "4nkp2m61Vx8D3BHPV2TFG1GgFYpdspt2B9FCkRjFoPgsZ1bJxAi2U27nda89DtaT8KWMhPiJWKZiTQvxJVgKEi5E",
  "key19": "5N5efQUETpp3TkkG2vUqwysCgjQ7CLcsScpb2Ktsi4JS454YquJDZPXzBuRwosBJRf3D4rvpzY8LQtDzht5iVp5N",
  "key20": "28QMBpJQAJa1e7J8NB9GukKgFBAoaEm6ojnGHUYYwa7GEMt9HvhCH4oZmBM93uJkYLaANrJ7n6S9pq5sm7YzZ2ig",
  "key21": "2qWKxZzMcsKDnfnj64HLAT5vHxHvyoBLYxs8LaPUee3RwrTQkSS357U2mtSbeEp3Nq7ba9zgaoxvTPVx4QaU3DVZ",
  "key22": "iqEUPqPoAPqvgQmp9RQ9N7RSDv8m3dw4To3chcDtWTkJuXwdQAudsK5xngaUtUx1ucca6NVknjREwnY5B9CUrVW",
  "key23": "4YNFAouAwXqiXSnChmC4K6WrTXMDgAKMX6NraPsnBzBvbBnf4bpbeQk6xJfPt3tnWPJjd1LE5Gakpv4Xx8G1hZzB",
  "key24": "4QsFtyqSzovQw2FQ8uwdJfdZ4nGxYrBsX7u7F7sJP3XqBNLaJRHTaPMUr4KcqCkAgxNWMhv9uFR5kC5XRwwSr7jb",
  "key25": "ao2oh5ynx1wigdXL5xHo85tFy5jiAikYVQ8ptWjNvEBRZuJnGDvNidMfpFDkEUkKoa8BdkrxgVJa9iNGzUnm3C3",
  "key26": "5VSVRkQytecjCSpBBQ9u5Ws8gTWYH5nf5fnqn8Eung9XNQzPRrHCPtGqBZXoX6d7UvUze1SFYxWDoZVtg9FuSxac",
  "key27": "C6G9KWLaB5CVKu7Q5h1Lq4FdWboeaYF6C2xwSweeBCpApTnaB94vGsAvGnAYvJnW6JQDx4eAZhaSJyAHYoQH2nq",
  "key28": "4EbxNSSqrYHeMzc6uQYZquRu5qRkkSVqLwU3bGE3uN1tzz59Nn6VEKzqgkVJEKpYZR22WHrRbCZQFAQAxZ3fya4y",
  "key29": "4mx7rAJaQRSZJR1TszA1wUMkxZVJ9sBFfkVb9GmzDaAZLK2Q7fZVD5waHYC7BpkVnjNEbH7SvJ8X1TiWKsEs7uQp",
  "key30": "2EHDM3X1mz7AA662wb1H4pZTRtCh8hAwXzBrR6PtdYmPkfnWDRmxyYfotB82p6wddD7b7R6VKnf7oSWd5Gcg1rWj",
  "key31": "5HQYLP2NJsf5H2KsVfV8bmCTsYHhKGRcbT9R8xgNJtTH1wujqLERVbMLi7LqSbzfAGTNeknUpbF4TwZE2cMDDpLf"
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
