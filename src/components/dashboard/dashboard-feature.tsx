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
    "29w8NJ4BiS7sDcuVCAwLGezCPCj15ihA5UByhup1jNpRQCTCmBECV3StawsMqKiRAGonSMjH15AtqcBL34XV7Z9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MJT31GxDJtfkZEE3DDxkPmCRLgekfdMobgNPR5rbsv6wCVJG1vwdsp3bjeJbcHh33pSaL1gvxfop2ZHT9obPd3a",
  "key1": "aT5ndYSkDkuwWiYFG5mTyEDvkVMQFht6NT2q5BkNhde5k54BW3WnY1ckn399BEhHnm7oLQioW15eU3qjxZsCeKd",
  "key2": "2pVJGU4mjqjjvdC5aJ6gLGRJYLchJnjY8P51HZguudgxoiC4uTytmotxCmB3dSumsHipAVuvjTU7Mi5ErEkzZM2F",
  "key3": "5UhqsVsZRNPnFZis35caJqXHFYKht9H84HSVGjJRXXsYRUZr1KeGauCvPmCCctSsZ5K6mGoU4vrrAnAEXARnzRq1",
  "key4": "5kLyC1c8kxpKrDyWLh5McYZ8nJEKJsoPmDRCMzBT9KRThzwR5EuMuUBZF1kKBaHy7ap9kqaPxSwHshNRGn2y9Nmp",
  "key5": "4KdZRhB5GkJyVE6nhfUakUSw4RroB1f8V3ZPLQPzGrmxaVAYaj3wbVSccdeckpbhyth5MY5jW9BF28NDnc3Rb4kw",
  "key6": "55rPjQzVHe38rNz1zgCCDR7UvzAMEMGxKonTM9foomByjC8CcUfZGkh1PxmeYAgPJfwNm9h8tZWg1Z7PsApb4gUB",
  "key7": "3my63vFpDU7jngChaYMVMBrM1NxToCZT7P9B747udRFMQorAeN4Wc1ZypSrjRPjZ1suTyfzrWHZ9asUvfu3YxTA7",
  "key8": "52qcWposSXpFoMkrZghYYK7SSg9BJNf1FcghToHQn1mbrzgaDQHmCTLjFesx9L7PRALuR3Wmrw87NtREnJej5fi7",
  "key9": "4Pki6ijykK2zARpuxjjDogfPKASx2DCD5C67W66JK31wet5DWLZKoirfsLkyUR9bczqvqEVKCiuiEsAG2c5fAfis",
  "key10": "X8kTDszSrXpSbwY5G4t4FZKTLbXbrJqPd8eQbVxYhppPPffCQYwFfPaNKSuHFhJy91QeYRz4S741Ux5Y4y9V4Wc",
  "key11": "to49C4BmNgnDph4BURqRoju4axLsfr34FFSkw3nsTEgHCU83asi7TWijdFNjZUVrd5MwaZSfgt1M4UinF9dHBW4",
  "key12": "5MZ7DLpW5CvvBF2KwFf5eL2a1KcdNCweMfEamzZu4xRg5su2cyVr2q9TJ1DV345E8Vb5WDvKh3S9LDcN8Nhbo4Dp",
  "key13": "55vv6CpJMc8BWTNPgyFafKGwnYxATskP5CxwwbXQZyWWanrgWVdK7TYYbc6Wm1BaqXEGSKFZxDdPRh3qMDrgTLP1",
  "key14": "59AGCcHbCZyQbB92K4jJcuQJtMiAysroNZv8JvhKLgzdHvziB58toCfdyS6VfZoFBhTjmm6HoBK7UygNzjeCmm9a",
  "key15": "4BkMhd7oZcapkvVcx8DYrMkPdjhprkHsKxtsw2P5Q2BhWpU9zxkYoCF481B8AbMbA3WmeSR4naz3BffcrxjDaYqj",
  "key16": "3ioM7HF4ZDstdv1fLabg6tduN4fjAr11RvMkfyhhRR8nHAJDzZRdfRbcTynMjKwqbzhPAws5oZ6Vu58qvzx7zWzE",
  "key17": "w71FcWSBNeZ5GVtYzz7zAjGJoXQvPPYhC6p2NT6Fn6LkR8skJ2YvccQMDAoNameuFcbHNcu4M57o4qhxxwuMx4Q",
  "key18": "5wQDVxo4F2519KJdBLg3V41qhxUAcrPfYQpEopwYjcSY7Mh7nHyyEW477VnWvYErU54aEgkog6TCYievtGZ4xCd",
  "key19": "3ybbbPbhR8yuJktfVfRjiqNZa7bZ9VbiV5n46XZVvADWYUY6xpUJwT8K3aeR3sE4c4ZmgcMwKK26TrwKjmZAh4xQ",
  "key20": "2amtyrBVwXHNuzMSr5cq9ud2GySVyvF27MUSSDzroeu5wucApETXFUQ9cKsvnswZP7sHui4rfbjPcDFBBWNZFCQf",
  "key21": "4mn83wFLNBHER94K3ZrQbALC7eWJk5N6KAX5VSetEVFBqSLeMiy11cD9SbhLyrrj1rEX85KrNSN9GbCxgYk7ZSTz",
  "key22": "ixHvBdq4EPNczwzDQQikxgjKJ4ubdV4uP4zjdsu7jQzhJnrYs3QQEvcEobqJuw3XnJSvfYrL9wygrUvor2JzJ56",
  "key23": "4pPRsWparB76Cx9QRnhxhF1Pkb992pAcpi5XyWepXYqgLdKH3GAuss5StTqroCZbexyxw7AzoZPnCx41Xume2fF9",
  "key24": "4sP49F6C6FqT4xKiYQgFCzStzrCiWXtVbanQQtvDQxC1vNFT8MePWmR8dzk1CYcYSrK4S18Lq1BrUErFoBSNt5dD",
  "key25": "4ENXZVx2rbtgfkh2iqmNDLjqU6JCwncAsZ9TgETN6UKnXRGmiCxeihry5pnHZaVFQPkHmgJ77zAZMjqqfaTwMNek",
  "key26": "3Uh2v5tkvGdirJ296rGcPMChrUekbKnGNXCZ4fF1LejVpyKdF5EgQNUVk6XJxMWrHEZW4irtrJ4fwUQU9QRgVBaf",
  "key27": "4yL3tH367f4PMrwtvbJcQB8FpgDozkePebTDxWbMxtRRVEX316Whmy637VJTu9CRCL6UKQigHbyaaPsJAoyWXApZ",
  "key28": "HuQ4dWJ22UrtXyCKKSwmSnRtWLXZEgTHjq7kNKbwpryJrwsHyofDf5Hv25fRPnPjbUdubEyWMDSKMrjBNZbXjGn",
  "key29": "3gTFPSKTAYT3RwoQTEmDvpTjYtSD8ciTWvmP22W8byJTZGSfQo6tf8EKsgPbbQDpzNwFBKhYNhz2yxDrdKBCYSRp",
  "key30": "2CR92HN62NvRQLspWemgbeQh6X6bmcEyT85y9M2MMHx3W6dBouibZDWwaH8zdNd1zp3oacdoyxNrbZ2m6gNbFAF6",
  "key31": "3fjXEhoDK6RngwzuNrap7ykpufDwzcXUT7fQPccqjhrNjpBtWZPRX1cVWSot3yDBUR8ipSWQwNqr7Fh76ZdtRZzn",
  "key32": "48XaM1hq7SnoZuh1AwZvrrPo7kvjbNwsxNcWgKRTxHQ8p9JSnnchxGzXWqCm3Q58qqQjhsBZTCzN86juhBanxaZJ",
  "key33": "3syxnbA9mb4Q8QQaEoyYEquDdgMMs2vQJPrbrSnGQNzmYmUcmT3JFzvQS7usGEfk8oFXVmjQJBzLMDbxVQcoSpNf",
  "key34": "2ErYg7D25q3hyXMBLV6AxXrVRWcuFtzevUF14n2ykc156mB7LYd8kvLWKiGRA92eDJAKHMKUQP799TZFefeG94Wy",
  "key35": "5r1aYvSgys2XiMepudWop7P8sK6cndbAMT3eDntzYp2srGt5qq1SDetjEimZJFcL9PFywtbBC4sZd95qy9ZLWVks",
  "key36": "24SCLAjXe8nrFFuKTJMfErUitw3JjzEehkxA4WP23zUzMe5m5VrdZC8pW4nBE7mutqviqpo3pxgAbraV4r7t9Yit",
  "key37": "3seND8U8QHewACupUCCHqEY4EWdPPBJhDF9Wb5DvHPcBpPhJEdAfYLUeMTqdNmbaX5aJwx2K46YPux5y87NCxp6x"
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
