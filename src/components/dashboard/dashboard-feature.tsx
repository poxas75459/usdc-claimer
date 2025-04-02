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
    "5VbkoZG9VJni9dFYcbYggxPdQeofr7jRDhMTzK4nRzQwkRWPeuHZabBVpwP6Dk99ubxc5s2Xy4RuqsHmz6ukWoPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gcrUNAeDXMvDZoHK4wSANScJcHgR5VyMg87Vh22rUExAME8tnq94oVYUAvwQDBCF7YAoJd8MjUJBLQD1or9PHxM",
  "key1": "4WP2vpTNChc9YQz5tv8KZBYo4rLqMSZEKTtMtmJLqgSuPbCd5iKPhAZzwwXSc7RknBkLpoQiAPRWp2RJK8Ys3tcm",
  "key2": "4BjsEPSBT7oEPfiB8N1jHyXaDfkZhffudAjS6hnhFsvtrW7zeRf4PTMF6k6E8Y6MjP6CHRxjxWfkQMVMNFPUEeLP",
  "key3": "5UienAUWc4MQWv36ZnGDNhG3A7pT9418tRS7ZGd5pozT2mrDYBCSis6rmQAwqvGJvGrHhxXbCmrKcVT8UY1YmJw2",
  "key4": "KFGB3AxR4RaJGapNTEKqYdv47iUZE9XhWLBV3NpdJS14p4boxqiE6sDHFZC45KRkjxzSApp9JyhQgdejSjPjx5E",
  "key5": "A6rdz7KS7pEQUNZbAmmSvdtGVvVicmHq6Pj2urhTfSvURfWfTUbKGEeuFnWSy1qxDHTHeKTa3p7QnbMNS2XDtPX",
  "key6": "5pxX394CJrhBRJpXL8t17pMvCcpSPgS7BzpmXxsWyCoEigJf8MApwqFz3epci9HsGCeVanVCMWxEYNLmkCTExaXY",
  "key7": "3eay6WiULpK5cLuB3HCfN7PFtCjN2BrFRBfzp7TwnBmWSCHKq9HGzqCwV6pRjbekF9pvPvR5nXgwXcqj5WxSfA83",
  "key8": "2bPyxHA87Acpvnok6geD3HdLK9f1vMSr2HrM3r1beTffLjPdopj3ogoKaVYnNj53TjoumnemCFqYruCabRShoMid",
  "key9": "5RKxETjy4uDVi8VUj1TDfNeLE68wQe5UgA9tuBDKo3HN3vYkJkaRjKWcAtvpkocoUVK37gajAPivskzrKG76psuL",
  "key10": "5AGeKC5Zdi8RNVctnEukj9jmrvEG4QAujfUh4w2ioVBG3jw5pFKc7EtZNwt8MAh9ynYWicCXFzyidT9SuGovqY7y",
  "key11": "3MY2pyGyThUVxhFX1CpF8TsP9kbg28rySLNz3EjELSUqWGttkyjJHQ41YKmaUdPh2dPGzynmTHCD7AWhmTzmtk7U",
  "key12": "1CZrvwukTSoZR3JmVgzokLBfWd5T4vixu3vSwXgRcqRTRrUHLuATSA5t4qJGmK9cQweJz6A7A8YgzftYb1DV6xi",
  "key13": "49xyPjb1swypcVCsJ1YVU4EEdqyuhSwXh7nrwQ3EkzvtX5rqKnA3mByyjAnc7ULEJ7A8iGcY5XjjyTtPwKpQhyUv",
  "key14": "4agBVFxTGBHMWTignk6QRxddiJouTpnoT2cwWXTmVsxCBNM6CbgcYyweLZFRQ7wzVai977mSdo3msoFCw5wrYWXV",
  "key15": "UeyQkvK3mUdxGRmTkB4qsG3WtVCM523e1qcsQoHqKGuX58qiDQ13JgzQt4hpm8NXoaSKm7newJ8WKJry2vJfsoL",
  "key16": "3Qk3N3Q9teCCdPhFWcdqU9U5XaoH7jvbSPGUei95qMMohn4nzniDwNpciaiKUzzsSPfzZfDuLKZPiAXp757F5JL6",
  "key17": "5pgKzTvbmzwd7LkbMne9sEXWqD3T2prLNEgqxwxS1MjwpKHtZwZSpoujnxig2XgsoRWR7zm9vrY2QDsEe7r21h2M",
  "key18": "3SrHZcaYafwC9sgAeyTeZnZBuUtyPvVCM88d7hCu1QuMdzQNXNDxH4bsFLLVsrwUMGbS2rNEEh8CEJYwLYa5dViP",
  "key19": "21F2gByUTW7QfBrxs2weDqkU47tjTBHDwVZkPCYgZeuhBbAN4C1pUE2bgmLKnUoDw7FzDZYmub6ovFi3Z19HA27C",
  "key20": "2ws6eDye8dpMXHrkQxGQKrtWu2hSTzK1KJDy1uTARLttx2eGZs3wZNju2gzKmWMBk6Dok1f5xwm3ge5wbVnvkof6",
  "key21": "53c7jCNmsdQ6ZqcDSkJwUvPJnMFKUUpiNqLsqY8UvxBdK9N7Q3xJm42bz866pkoU6vbASUQhHwtCuAVHTnZsRvaL",
  "key22": "DVhymwGsN3gocztKGZEBKHc9ke6qpdNSUoYomttXK2cYeKYp8CoA55HivHgGTEwfV8MkcibEoq8jT4KzWVePtA1",
  "key23": "4gjpPH6egAuR3G1gYjw3k2FDRwYFzN2hcYX9qN9rSMELXuhY9GzyM8wSKr3JBWnhZ1p3NkBeJeqvgPCTqcYyjyLy",
  "key24": "41dmgMtgx6AqMFdQjBNcmbHfX2NHezWomCareYEV8wzC5DagckPhqV3vTuzzeEQ3qj5hgQjp6bmq6kesrqFX4E8s",
  "key25": "2QDkMRyqAjzMhB6SCrShficsjdANUKNZN3tUGVs548Bqsk6U2kjw5i4xDjY15CiwG9PebXo37TqZgsxcMWHBjho",
  "key26": "4C5DBZ5BmbB7TqZH1f4unnKi7dq7VWMw3ohJ3byQrzBrjdXpaiqDbKJ5NrY5oa5Sq3TknTxD6bJakaDBg9DLnbnk",
  "key27": "435FunonwAFnKSf689w9zc9N98jBcrDcTpKTdfDkBn9gY2FT9TBynSSpUxqcdZterbNbxjQC7SjZ7So1uEXpMgKu",
  "key28": "5jo6wR9Cx8jCx7VRWFXSh8NbYatnLcchXrUpg1y7SVpMASxNg5McvHteNaWYneYPbrFufKDjK73CvsCgCZtt1rJV",
  "key29": "4tFBjkkVJAswxLbseZKozZjiMCqrpA9CGPQuVBoheVN45GM2s4kD1xh4KBQrvEdiTG5BuWbpjea9JAy1SFn7NCC3",
  "key30": "5kHdgJjxouyU9T8cFkk31nBFtThUv8gRY8YcSfi5JAi9ekX15mANvNYBvATSYboT3bGrZM43HxB3YKXcd5suvwRN",
  "key31": "4WC8UKS6PdtdXmPNEheyf7op1a38ZfQE1Lsja6A65y7NskPnsGUwpJDjkiwxnGiqpkib8zY5rZ6KsAsArXEuA2NF"
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
