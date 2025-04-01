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
    "3zHM2k38BxCDBZUanPay3WmZu82BtQRZh7hDDXc2hHbevC3i21PPK6wBJEy3v3KRgW3KqNwoZAzSek72mPBjEzKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XrmQi6aZB1kk7xhynH4S2pK2fX1TWuyrVEifMgc42GktJjT1pXqmZQRAQtyS1UxHCh3zYugwzhXy1FTJyPx5pnK",
  "key1": "2QSSP9WS9nhKBmePBBYsAiUzoxZFn8Kvx5mM6ExSovd7Junq3dmSL7K6Z4hzhrZKopQsyMj7B2svPceVca2bwcAR",
  "key2": "54cTMvfN8wbFuhFinP8V2DXMY7RQCScCM2r3UTP2ZX9jEAtw3oMvnjdzeguzGaGRAzMr5ECJAy9BM8cjMw38yqvv",
  "key3": "kaPbziUWschhwQHTszZzUQoqGeb3fPbEq9uDiQ4iABByHC9wH2mm4W3QFkU1uscVE9Et5QYechpRevhUvJa4Zks",
  "key4": "286YhrpKCzmySHk9vMxQYBqEY5rVQZeRC6Xg8V3a4iEvEHwFHvs9ELAigoiA5Zi8cPJGo5X2mUgUeCLZ6zMAEK5H",
  "key5": "bVHF2A7C7VrSoSddCtUo28ottKFdRSpez9Rid4TKwj2x6Tx9SGtGJ7PL2MVJCRS3GFyhqbmWg5h4e9mg63PdhTd",
  "key6": "4bKpJdkegizCeZYgEA8nzPRA6ystYkrDWN9YyvZfdivsaemguDxkkqLx9kMNMvV6jjNSSETytNzkcduLDb4R7g8u",
  "key7": "2obdkJr57a59Fow5283Ub9ngKVzn9SjKuomji4NhE7eDX31YTEstufcLGJH9pt6o7vxwDZaYLfQY3aa9dNKRNtiK",
  "key8": "4C2RVVh5RZo3BotgqAnHSQAH1kn6FrVDDPWjK8LFF6gcZNg1m32Ki9BJuYvB41jC1B93uAkJortUz4cA3UkrFBn3",
  "key9": "2PBaSarmhqjKKNX5gkNJAvUBsEL7FxyLLMv29buKV2d2S7R6NE3kiU9paNWCQFkhbaqpxjjXgQviK7Bm8ZwGKvCQ",
  "key10": "7D1RcLWMvWaFUBpk27eRXNnHLPpeSZwoPrX2yoo8hMYG8bA8K5HcgDDdQDYiHiKMcktYmjL6fNCspLudkdaZTEt",
  "key11": "461hvTaFEd1VxHvvpvfsf5WQBUzwJP63JsCNfDCKmqFd2PXBf7U6QCVjzCsFLyBAXXaaWyAYHyiDUx6V7Lby1nQG",
  "key12": "5eBQGU1aELLUmMyWxGGTzfFQNw9qyjfAv1jGvf4a7CuC3yqYrsEzw1A66hNTVeAvreLadof5jLwLTyoyvVJLBVJL",
  "key13": "2wqpkaJ7Gyt3RyqR88bXhEzNFfHp7Abev3HretTpLDZpnzeybB2F6aQpDbr7a4EzA5ukXPhPAGKybezv93gm9f1s",
  "key14": "5UHgXkqKutg4rXnHLbneE2CB9uSAX8htxEtnXnEhhVxiFkfqxXPDdE74Y8NBcFNXGJSrzqDSNGf66SzVWUxr732Y",
  "key15": "2D5AMes3KMPxP2sRiWwNxoCg9X4cfLdpUA55M63cpHDhoJnaRoALWk456wS5B4Tt3RsiTb4XE5bRGtjCjh2Vi3EX",
  "key16": "3HWmbqpmF7rFRwanfAKjBVEZRNCTF3jbseZh6pE84pk6xN4jKK5heBm4n7bww2q83SrTB4sTQUSud2CHZy3W5ApG",
  "key17": "2LUAS2MfezLGnauc5QFf45mrJZs6YJE7dPC6gdWMmCRsZ8q3A2iEtcsCdeCPQR3r2RtdbCjSTsnsj3qNodEjYbzo",
  "key18": "3gZWgJoYQvnHibiunZ5hF7n2yRsEfcZm2dUZZ3eVsxRzfHudkAfa9mocH5ERHS4E9oSAB9Y5tJFEvrCnk1F5MKrf",
  "key19": "4QxN9anaD6deN7aBgEWn7e2ciRTiJqeLVG1vNAnVTANe4kgviQpU8oee2yjHqBpC5cxguiaSR3xyTwuYFnwA1vFN",
  "key20": "4cfwFmRXtmdPoLT3rht9xG4JyYG4MShPREExbngcmvzthC29KRdXkRkPmSAHK8isvxcLYJgbzp8ukDZNH4ndvRTg",
  "key21": "4yaBkKWgRxaM4LwrPwPWyxW95QcVQ8sxDmpxNT5kp1mQXCwLRnXjKK2LwDvCrHAz3jfPhHNNngAeSUnwFHzx4CaV",
  "key22": "UVBpiHQToEJVMS2HLdkNxRoq7JrymG4H2fqsqVj7BsP3quMxng85bSc1RSAHSaSxNxNWP673cFj7w6YZc2vmZp8",
  "key23": "5uCqPazVWFG7hwcK7VrJ7auUAG9vrwR2zaApb8VUnKjEWnTNT1DXx6yuBxSFQitBjrSi3b97tUbmPznRNezwkVpT",
  "key24": "2BLTdPJnGKgjLSp7syk26USyPQHDDssZbaJxZS2ScxbjrfAyXyBXevmqqtdmPBHuhDF3gU826p8EzUvNaAy5dMHq",
  "key25": "4EWeo3eEsoVhrfyPjmM751fJroEhwKfgFYJiz4bMAn4N4zRJJskGzZrhpDqMCNasCDxWZjmBwRz7tTPKWmVDndQ4",
  "key26": "3hmg7nMF2yUqwPetQMxEu2x6Jra3PJ6Gu7rmaPqmfHdb5cBmDxJjGHrETuA4HtUkyUsqTCXtYFvUA8w94hvicoWR",
  "key27": "23uAWETUsEhc8vVffSvf7yEJiXgQfwBV9oVYZbkKcWQXq9BukhF7wVLDnThw79jSavG7yWZQEtZDnUUW2Dw4yjfy",
  "key28": "2jVANuhZJAFuStE8PAju5kSTGC7LF5n6EeN61vtYVNdps6yMUjpLsUU7bHTRVgAGgVtrVKP1jPMze8RKAYfjrNRG"
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
