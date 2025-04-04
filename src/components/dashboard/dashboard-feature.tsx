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
    "623enau9NnomqUydH2G1SMDbGfEabUwVVZeXNrZM3qzRgbBLbpcAeNk4c5e8fjWz18t3zJZ9imbrguaBvNbcn65d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MyXmCDYuTaAiz5ZGWBJfzSSsXUcc5hmeXiNMmahNWg36tYFLwi4DYuEXK5QDUjiUBLTzzhrmv7vgpQgV9B86EdG",
  "key1": "3zWBNG9EHCfqFiUKSyZb27N95XaLLkb8hj53T593JpuuYrmy8fm8A6zUUFH8NLxpRYNRYbWBh2DyCYgqai6X8VB9",
  "key2": "3NLiVWScSaiER3Bk7TJFg3Tu1iT7jUyJraTm5yeiqcH4TGk48YTTSdPNL5gJu3vFVyudBEzct5DUCdd1QuMKeQME",
  "key3": "121QGDZiryPzgg4JK217F1JcpaMqAtrJZbrTNLo1LiRk1w2BqPEEjLti7cGRkjabnECkCnw6Fe9q2sk2ZZrSQfx4",
  "key4": "4FE2zxeVmKJiMwZarya6NazkRAY2TS14syThL9jqhXHw6k2oA66GdrDwE9zHc9JdpFqK563F6D3fVLtVEeeivc72",
  "key5": "27v9TMrbHMKD4Nh2LBs4r92UeXAsueMFt5X11LvnX277hhkLRbfGnBhPywQ4P9pR5ENKHu9AM3nKPgwkrvz2BJrx",
  "key6": "LkoCQSKvqaxJBHonWe2Ey8EZFdkMFRJTduBh9qGiiPmPXL1KLFDthExhscy9zN7McMkC4U94nxeFw8SNAa1uyBR",
  "key7": "3TBSFjSrFSmbVHjQf9YrJUe3Jga3ZCcS11LmBCHYyq51f1nSfEnx54AJu9u3ZvDYRuoGLGTozGWvN2EeLcYMuKyT",
  "key8": "FNyWCLzBaJDnynbUQQnpVTMTUYMJWaXRp9WPrqMZ7NUEUqvEghFE71RXD8SePTyhk6i2H2vrQpMxJEmDkDJTJi6",
  "key9": "4GhvbgBn4ppKofVfTSUpGiFZ4CgbbyqAf4Hpzj3orPWHPBDHKH7ntfEc1MDATcGp8EfZkpTEi6hoHTdtHigijGzJ",
  "key10": "5un445Y5U2ZrNrtEZBynRyL1p6tNeHGvL1F8mpe3Ma2Ge1R7X6m4eqkFQFwVfdCwVXVowdsfSVkELWMjzww4YYUY",
  "key11": "2Q6DfuczuLdpT38chxrogKnpMgzS5Q9bQA1oc79MNeQhb84sKAdFYLtayJiv78xvJnM1oP7NkhWdkzJfW8S5WsLP",
  "key12": "4T6BmAX2L9GpsWZnjLjq4jihDte8SN6c7ch9Cmu6UcSgi8k8E8AuXEGikiMuLg5wkzMhiKKup2cGNscgWhy1L3Ms",
  "key13": "VxWx4bLXnPHcRS1QbiqVu5ZQ8mEas7PQwNoTzRKduHsfCEzCheuVeQaXwqpSTSSMbhf3aDUdrxjH7412G7C9pbX",
  "key14": "iR2VTfwkXdfqwsecLEU9CLJ4PkmgRiHBHPbrxJZiPMEAsV8G7uDFo1mWpZh1MMLk37oDcVNS5bKmGbjtbiYHCyg",
  "key15": "5jPwmtJktT9PGGboJER5pWkmHq2oRmfRdRaMsVddLDdjVEvsBeK6CKe5FaWF24gTv8ye2CMFiP5te9McXhyKamcF",
  "key16": "5Xx1MR6QbjHavLYVH85DSdDY582H3whZYNc17L6KcjQusU3KxCyZzEcmMA7rgwqP5mKg9Fsw9bXamBQonWbEoVi",
  "key17": "5j5nqhpTj3gt4PA338F7eY79VFZDkUC2Uun17uTxvBFkAT69G5FyT6GuEUHAPHxrwqThsJWvfZWEdB6YhzzYJuE6",
  "key18": "5W2haaZ3eBYBz33T7DuB5gq7o6ukbn4cC3sWc2Ea8yaYPCJ4SAaqEDK6Vjbf7gw7sXpgTk5o6PxK7yBx562163cA",
  "key19": "ZF9wUemoLvmSARTYBoAC8FTz5nAf6eN6HvCy5DMW6E6NU1Pfz5NHejQNJioWCuKdw3DsUAcQ1KLLg98c3X3u1dZ",
  "key20": "4VxrRULwA5gTdqNViwgvqJri2KsJ8XysA6AitNUR1HobY6RDnuB25sURM8Ze27bKuXgFrwnUNPQxT8Py6RnVLXWu",
  "key21": "39qgwV83jGj93B6ENV2gzT2u2icFrV7sMtTesAsnbrWhcsRLYhFFBRnTqCM41CANeFVSKtBFzQyqbjzdVAdgGwUC",
  "key22": "62oRRxJ2eRPgCT4huWRJrBTXV1538nbEcu6ZfYGhMfowTHKa63pXxJqhtEYck3ZHBgWaRD1uKTmvkL8KZxj1znud",
  "key23": "2wXGZ34QeFSpMbKJ2ERSArM2BL1nVmwEyorbfK7d9DovZ8s5nnp2PJeU4xDZepvMQU6mGf3H7SpSsN3Bf6sNV2VH",
  "key24": "328fEx6NTZwacPj3N85ELtHCv1ucNB987o3ewYyFnsvxFbuJyijWBDFiG3bEMwHFpow6gavk4tG6eavfzhkQypyw",
  "key25": "L7HEYrNUhSRQg2NPuFLv4RDiB2JVh412JQqRbcgEVZDNu3bBjg1Vz9n7C7UetKEPascDu1WDpRwAvR1TujsAHjg",
  "key26": "5aKKG3FHfPHShsr8bBzwu5Wz1FaJLfqSqakTAWxybW5PEsqqeYsmr9gRsqkNqEXHh6Fxo8J7TJTkvDMVXB8A1BTw",
  "key27": "RcWHUgfHZQg73zdW1ophaBrk3wER92pKMt9Qxs8tUX8yGzVFPHV66YnQX1cKfvimmnQAmZaPYFPPbVenAqd3Xhc",
  "key28": "27d3EW2QveniYnLbjGcyhorPAPhQiD5LP5FsTya4tVttkyzusiE9VQgtcoB9BijtmbJ7jN1iA674rM9y8Ynzgc39"
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
