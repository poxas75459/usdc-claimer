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
    "JQQCy9eLefsymLc2WgYho3pLsUVUyrQUu7Ssax5jYmgeBEVLbCNr4GXCqXMufUyhmtk8Fp1MEYRRCyu13iq5gDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GGgxGzD78DsxV8yZHwu99V8xqaJ3D7Jwnw3wGB9tjmFqdtMkgaRHj2xxszKuRiPP3r7ZSidxQGDLzwKbDqWvjMV",
  "key1": "didFwPe3Ndg3icdpR8UbpjCGL6EUCuYKb1L5X2C66cqevLawRxaZdSgZgEoHrxDtzLiCGN3cRbahi8CZS1PLvZz",
  "key2": "3JyekR4QuncNWLqHbZxpEskFFk6zdUXnWN7zqp9QdM2ieKQSKgcpzdct8P1npDrB8ZBCpekLuHwqwfnZYzdsmF7Y",
  "key3": "5Ng7iqnCjfoAs2fAQViDAVxhixnKqH4nHDYis3hG2jKuuRyrdisvgaFYY52pj73qv6xjE6dwLaJ9hXvVXo4HV2PY",
  "key4": "5XMBPY1E1b71DPEyV9d6boAwAjV3xCwuXTQ1e6yRKAsB42WK93CMvjJVR6fZsXof5TRH1tivPiYA3XQ47dtHoqwZ",
  "key5": "2nZPjDo7dheEL8XU1CbWrdZzGDVsVQSgnVsRniF5kWmKS4dGfobAj5hYHEJY9wJJcM6ZCZNpD57A7bi5tq1iM7sS",
  "key6": "xkXzaCXYiz8rK6rqm6ZqZzxrNr29e8itFRTbrJt7fP7isCBjewxMDC7RxUST1oKvvmBZCNNJNLpp1k1ME4DFiZJ",
  "key7": "2t2AcpqnD6TxQwJAAtMa4BrdmSSvLqV9zRiWc5FNsY8ZFTUJCzegWCiNgdseyg7oQEhaWNdvWjiLjdWi82u7abax",
  "key8": "wt7jN8FtHvsjpZky8NByQiZkzRhGr19hWxK7zm8PUQgbg4XLPUnNKewhcbrWtpuAogxYuMzuuYPNFXZWDfYiLNe",
  "key9": "7hd7rWSgQWpbde3odNfgpR2G6uLQ2czKeyRzMNkDY76A6PdQvmNi9diYgaSmxmmivR99va1Qeep2qroUyqdApUW",
  "key10": "2nWWNTuTGyyP4jG9WQE2q7ZpX4WsjCmT4Hdjj5bqYWuDmoGDh3hXTRnvgVzFfxHDiuQnxMixKEpCSdSz396icfbR",
  "key11": "22HdtbQvtkjdUVT7pvfe1xCKrUtZ24CWKxikdbDGSkZ3tAshKStJkvMDs6tzo2uNKEJeHZhyLWPh7MuUhhXGUW9U",
  "key12": "5sBq8q6vnPqrqLLvSMii24HftMcpdzs6yTW8NqmmUssXcWKmF6chzASjqcat8esnAHZ16tbt3x79XQfJxuo8aLt1",
  "key13": "4tVhTW9HqM1VhL473LHW7PLL5cvVDqQZG6Y1fJMdziJG7JjeFN9JTn35LWk8p9S131gh6NZ8nCXuiAjv1eYHeK8L",
  "key14": "3PBDeUJzZiSk3RLqc9t7pxFswXS7dpzgreFTmWrQhQ4NV27K21ehMNyfUSAuf6qFVxxRaRqfY1Dr53okpEo97EuU",
  "key15": "2wDHLwkzQNDvJS2quxvYHjeUGyKzCU5yagcxHzQKe6G5cBd4CaAi87z2dHUJBLjXYtfumLesTfNzg2AXuc892QWX",
  "key16": "2hcDDgv8LxrDDELZDTYw1fY2nX6QXPmeQsJQ9YWThZKZ5wPcoGFsQPtVxVNZRC6zazt9JSR8GKj4bugcKEnawtrU",
  "key17": "MzRJJyuvAKE2YhNys9B7DbdN42FPXSTqMD2v82DfHz7YVX5X59zd8zDmocftdPDQWz85tWqsCaWLffFzeaCBibz",
  "key18": "5FZR1UFe3xzC9SiUPXBNRpq1DBSXDQHXkJ78gyDJAFnLMkxCRX74Cj2he5MbWiWnMqmoJfTETsueKtD3cju5jtPo",
  "key19": "3VqJUk7W2EzHqEP5rDm972dyYnQE4LB2mCUUsPE85hgThP3VrasYQeG4aDYWiMAi9wUrJBEDv4YaxS5T4AKTs8nL",
  "key20": "67rkJWowTeUhdxPe8mFcEKrHcmFeEaZeXt5RSHkxRN5kZZWXAjCDR1R7zdy4MURbNHJHXcYdYNFjCutFXn2XM6u1",
  "key21": "62KkS78LqAph893TYWSnvZj7K7YGTeoh5NKkZLspfFkh8S3RYMQtpQ1t7mzaYVn7PaawDvEBghfD11nSU2FBEyA3",
  "key22": "34MGPtZtdguDQMdnv4QN9hRHeJDDK6653M9cNN3ipt2mJWzxCK76PQz7vsPcwKB2pH4vySehErx4aP72ak3HyUqA",
  "key23": "4Wb5zh9WZ7hhLKfvnNxR3L77UW79pway6mCKm1MpGHJHCyi6umT5Ke7soEHEA1YbGsfRF8gzqAuAbV3GtJcxX8ki",
  "key24": "4e1GAk4YfNyTQsGwz2uN9QcMyBdSqDshxieqZb5MzinabYi9ViWKaFFP6QxoHgxrNv9UPVEVKFc3hLUcaYrMqTeH",
  "key25": "vudPKyEVf5M6jsnByJR35DzRnHB434f9ukRsiJtXnwMu3DMo7bKRJh6DpP45dLSSsZAchqEfoJiSeeFNPx7b3Ft",
  "key26": "3Cmdv8RNRWT8pCRRnh3b474qapgFHjv8Ckk492DXdGjuk8NHJ9wariFDRN1hjEFfGs41YJ9UdnXAStbWF6zitazU",
  "key27": "2UdVGhq4bUGEmkFaHmhnuUYS6MhmgZwhTHvJEHQ6Sxxa8yP2fv9hLP5q2Dz5T2ch9huJ6JSG3bJxF7TXpRdGj7Am",
  "key28": "4booH8VVPiTxibc1nAmcXqayr5ohsRS48hNS8PTB2SHqnJBGtzjg6aHKcMWmUkfGYhTQKVTsnmesp6vrw6HfRRwj",
  "key29": "2yPX5WHJRX1mu8GtBEux4Lg7JSuF4zLEfgP5w9wSzRU6TKUeu7SoTo9v8HmE5QPQoKMGkg3rKE7zM9oRFtkfJyCu",
  "key30": "4Yq7SgSgTWhEu8HZ6vB1SqkTjd8r1tmyjwNnXPTYNQJLhvjtcxC2tJnZXZ11iHPECfVunWQxbMPMAAV2HCmRLuq5"
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
