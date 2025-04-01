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
    "2TjBof3X3nMak9s8H9A7cdWGvcHPeSmazByt6GDA3sWyjYePcxaamYxpWjjRiYUtmS8hxpMyHGDAhgSvJAq5sfNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GShWbweL7BLWLrCBDqhgH11ssU7cU47ebDnyzhaj9yACPyvVQ1MEb9CL53c9wu4xZA3AzL8CmwCtM1LRhMGwttQ",
  "key1": "5uZz12djFaUd15ikm5sETDm1C88qsupfgnz5HUf5x6MgmKg3XghGY484NaTBfEZbohLJ3TsU36XtthyqUQa5Z232",
  "key2": "3J8YoRJroYNq6hdeJiJwtiiFF15zuoyQHoJq9WKC2CMGjTKTdkbLVYscvsLsqaC9tK9VKZoB1BJ1kAjALsHF44sD",
  "key3": "2q48RD7uwbs6mKFMPQuibQbvLLsBmGwULPEQYdWi4hyR3T9hGww4sxHiHk9qxaDQes8KxCWNpjxDZYRq8rmBN5Ep",
  "key4": "DzjJ3mwq2nb7qDoxsHBD9izrefjxWwwL6eehLaX5nXqd4SNf9ptDYs2PrvJd8pGwCtDA7HsS9wbmm8Kt5Jd3aiT",
  "key5": "3MLwabmMBJ2JT2pWWj3pkSrCtwzKfRkdXhcC7wBUa9wG2Us9SeJCgNDMt8XFn8gNHtLZoRPvM5hFQVhWzLTb5K5P",
  "key6": "3VoYtyGWVLgYYzF65TYpPMWkf5e5akkRMXRiSXCvmH8gi5sV7ri4JTWqLcrbD8tQQbNqS61ote7EUkSWh2cVcvR6",
  "key7": "3YjaWYu3yhQJMMFNgKwqrRSQEGjv3ktKLbiknVnY9T7YdPrv6WQmJkyEVVEJoDDWzt7iHsTM1W2Wp7BTUBDpNZ6E",
  "key8": "4oWGXQT2J4MKxeo37hHHMyPChv9Sxtq7GoqPiSUNrGrs2WfgzryYoWtCbou8xNL9Rk1sMzKtQU54HdEws93mExMF",
  "key9": "3cQ5wB3aBhKrRz9tFHq1iw68WfUGX6Vb6f2jgN77aaXmW7XsBAVUfJqKSMZHbGYz3tCcUf7fYyRugAPhEW4nhf31",
  "key10": "5QpG5jApJZfi74DZ73Pdf3rY6A8ZAc3BGsLbF1CosPfC5azNjWvnpD3PNTNJXZkpGFzpbaBrKNiYC38LPUeTyu1b",
  "key11": "63Y5gkLSCK8t72c3kGze8czu6devkT1TLyiXJJLsycoqr9J5RWEwg6hsSNsdMNKmngMqSj5ZGMPRpVrVJSaHYz9q",
  "key12": "38rhfwEqez13M7rrgMBzjzxUdtWBH5Uw1EUTGkAcKCBgz667fRgFLXHoCBKaf7TAvPd5F5hvKthDdL8X5h1EPBsF",
  "key13": "2SxbcDaAWhrVRhF4LgcU514u3dCQ3Ku2VHQGyyMLfe9EPK91Ec3HFrYPaNm2388xPuh1jwUpxzXgg5wr3sKbkBe7",
  "key14": "2y45Po7dtnvbTQz34JuAwcx6h2u9fvdvGwRcmk644kWVmzvHS8hteddFozveK3FLu5zokiM6Z1ozQ7bYemwYv4FG",
  "key15": "5Yp6GVTSRRwz6nnfgYj2BNgrCNqmrsuccBqe1wZ3k57yNJkrMgGdtFUuDzQMfo6VStL5SwqknKsdyywnB9BqLgxt",
  "key16": "5YXtoFqrXsKCqkm9c9gtiNRdi3NfvhhJ3RJ61RWSJtrwKLUZVA6HTYiwXZ2KZaxRYS27u2FJwjqMo6atjfS87J9y",
  "key17": "sivrog7g9VjAL8FoUGLHdBAXJDJPbjAQPZCpDCzjcLqvqy5TiF4xszg9dJ8vhG7Nkm888shTKHVVf6G7MdmzY4A",
  "key18": "2njT7UZvCFT7Dw7j69uXqbfAB7fqvdabzRc2kUSXbmfgU9hnxRYJYGSG6zuRKzWpkhorswdWY3duAJCiPAfBVuYN",
  "key19": "2qLKGp3dnR1XHQBmkUAqXL1LFDdnDwSjmVZniggezoJDNMZfojBqgpJWeNrahM1dfpPWCBRmUYo69G7k1fD5q6En",
  "key20": "5LNvtMVCNh5gbvexogE8Fngvv6eH5JcHFweJUTmCZMDWKK8bNcUfQrQX6u1DDAgYT6Z4HSb8qFx8Ts4uP815Q4UW",
  "key21": "2MgMHUCJix1HForGcRpz8yhdAyJaBgBWf5MKSPw5WAVWSHZjbU5kH84tTYADfRSsu5Kx2fr4acAiD3WTVoWSMif8",
  "key22": "3GovnN8EkiwARtVfCcJ8qvWybaEKEnPvx2MtpBLJANAJuW6wKSR624rp9JkDvrUbcZzdaERHoK3V3qpzndh9CvWs",
  "key23": "3DBa3p3jdNkS8LEWMDMx3JBnZMwmcTqkoLXU9wC9HcZjMXLveYtFLuGqfzYkArr9oBhy6Cck82XPBg7vR9oqucKs",
  "key24": "TsD89gmmuM15MH6cVRo6My66EhHZ5Y9PwfuTMWg5btxLtaC9gfmu3KUtnVgRL7DJo3tRs961doScxUyJ6aMoyQT",
  "key25": "y4MjhMi41ka2we1MvA9bUebNpCHdFxfKxaoVyjSHCtEhQx16Pp79i2SfAqqKnS6Xv3m5Mgsec9ZBDSsR2PDXhi1"
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
