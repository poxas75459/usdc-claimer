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
    "2hjvcG7EyR2EVMFCVAvLKCbuZWa8nmfmAadrxboZGijLBXdMAa4BigqyqTSEHEothWupay11T8iHtExN11nmx2Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zsbGKoP7vXvgF5kGpbBqFbQbQPcrpLLEZAp6Kv9MptMVduLLF3fmvvUnsC5qFN28Q2YtSJfQENejSbXyYKbDBkn",
  "key1": "3NiZXzRLm7ANQPaZaQAYNkXE4T1jt3WDoiRYp1nNhfnuZPv3Wy7x9Dh88BY79yJBfHFjVUeBGpBSwoKsBwvkvC6b",
  "key2": "3wMqWS1NDVduTBLmDNx3YfmeLrHzFTqa6ucmcB1DoYUv8xLGwGFZ7VUJKSew8WNfooLCK24XYKP8nV56biPZYmac",
  "key3": "63ufzqBtSCAEQU8DaAy2XMrfPtV5zvCrYLnC1MfZCb99eoy7DnV75uZyaYw4DZz5UKfnhgvX7ieXtV2XMm9eB7rd",
  "key4": "4wUQWGevNpYjspAuNB6mpgZbdGiF9A7j58jPRDPnyPGV6V2EGYFzQTijtNPekSCHwGdsZiVU7JTEN5Ew4e3CstNh",
  "key5": "3bwuxhMnAjLWRfoxP9yXMTPbYpEWKdXScZUSGMVL9VD56FZnTiQZEpo2nSSgcwTvPLDQQyP7D3vnbx95AgGiUFkg",
  "key6": "owwNNGPJ6yea9KEhhiaJZsEZUomSDzy2ucf56Q92VUgfuGxsadejUuCKbUNy7Ffhb3FjQkXDCSNh3NG2ABZT3WA",
  "key7": "4ZRgDkwJ7VtKbCoNqMXAwppdBZx5Ch1dye8WWD8VaJc9go2ZJQbDk9Sb7EJ8kea2L4gLBUF9VUUah3G4oxtKYQ4R",
  "key8": "5gj7swDaASZMQVyLKyKU4ou7FyuWXWPp6w26t6ByLUSFRCn4E9C7Tp2t5Dxh9gqi9Ne4VjSeJGbSBEf1iz1McPoo",
  "key9": "2oKz9P138Vn2BR7mB3Bu6L87RhAPf9zbD2bwneo2e5nUimgh9WGrkJFJ3anEvF9tMLMnS3Hd1G7DyjyYibvzZmex",
  "key10": "RmQizyC1McVKSZZGdD2YDATaWJNE8EcK9vxJGYXNQSrR6jhfZCEG5NLrb1APfGMnBUt2wcx9z56UGrPMFNBPJZz",
  "key11": "yEHNxjGybZQe4SX4mb3eeQqwaZ9BCmz1vjAwhKfNHBKvYZXPj633ygL5yAS62PeLrzPzDkDh2BhY7rLuGUkKooJ",
  "key12": "36sWnbLgu9WKQUJsFfTdy6xvWDbbGrVj4hckcmkTD8tyZQeqsqBGmTMo2ixK8Gn5eFzPND9fKkM5eT57yndfVCE7",
  "key13": "376UY4yMqTreEJYy8vdJxLrX8pErszGwLcASdyTeyazyqniHuci7Q9yc9KsSBY26yPTLwho6ZfxkhmrHP3omCgou",
  "key14": "45YbUYF3yRiWVuCTsiGAkXG6bqPc9zScyahPiFpTWeS2AinyqdVrwm7z1n1NCCN8PPyTkLs4AYi9Ba7FZKC4rqKW",
  "key15": "3SsNTQEE8CtxGZnJ7M4Axg9FzYdL2iAN33KUM4n7NnKm4puCyPGbkYE8Ur1JnChpPBQRVVVVirMmQcCeodJpKn5X",
  "key16": "EDzkmNFYcp38G8B62y9CGUzgtHXaXVV7AThoDWtt5ggxh36CNbyJXmj9VoLrTJBFrPHhmNutwC67ahAKa7qXp71",
  "key17": "28tG1maD68agQw8MRWuqxRpXRFDJhaQDR3kJ3DNToye4wdd8LhvQx7NpV5wmSSRZWp4Yda62ENowXt8WkJFQMuKx",
  "key18": "4sZo3rG8H7DMCHbfP99pj8fChecWeeBFn1vZwSn1j5Ejd66mfKPP6chEsBFpSppBJQnFwSP6SkL1Fg7a3G5ULwRq",
  "key19": "e7NeWkxmDTnyyRhPW5dXgR1igUncg7RmGAa3dhTV8ficWVtD7YGuvEAm9RKggSKMK3GpxzvcvnUKMhRVeMy7jd8",
  "key20": "pc4kGpXxcTGWwDV2KAgSVFStZ8ZFCCFhLQgZNmTYDsYGGwinCMvru1f8WSWQwPZnyRNG855aRPvwyZ1mDu8tiLP",
  "key21": "9nFdiSEPWRkUjtZTZkqyuJPrw1KXcXUoJg2yRvs7Lpqv6qVHVhS7NVCkcJAoqHNbvKZj3VwnwJkauEkSb7JL6D7",
  "key22": "3qxeEzGJ2aQtPJjNk4hfuqfK4cvnzauWYitMr1EBpLh5ny1QAKCgTnVfLAHEnjE6qQnbiyqXtd1mRsC1UXwbetj9",
  "key23": "3iBETuays2H4znDcc9YJXq3nkbxUcXToSm6bo8fEKuWGqdoA2ryWSCW7SrV4FJWaqzhoteneECGdbkBq7T3YwncF",
  "key24": "2L9raRY8wYGDpiGQLQMK5WMVT6b6ij8H5VHec88oLdMFzaSLGCqUUousBCvxXuxRcGjTrrXQkhqjPVfVCEK5uDvY",
  "key25": "4V3izMCWCdTvqpbN9pkmsP2LuyS7fm6XBM1KBy3Xsfiwa6RpdwyggPsm9ckSj8hUW8wxJHLeRZRxrKPQ3YfDBnk8",
  "key26": "269fyHDMgDuHAMZogTd3ApnUKmvcjjCNpT1z1XtkaEFo6FM3T2GBsxWGBQtUX6ZhY3fVf8PVudMdLx2CYdPpKjga",
  "key27": "5UfctfG29ixbEmS7beQivUY2MTprMwLvW9a9Z4hL12KcYPAW9eAqQnXugknodAwazdPo188F9MQpPWuhJppsDoX4",
  "key28": "qWUb47omQ3XfAT994jWRQs22npryAMUPCr3Xjvu4tXH5JCzvCD1HRuq9mDBe4C1CTsnTWi9rSfzeJ2ZzbQeP13o",
  "key29": "3A3fhBC2FQeS3aWUAfx4Y992U73jpV4kNHXJvg1pSpMJnvuwDrrkdrhAjq5JNMsr4A4JRHpGi2ASFuk1nQscDz1h"
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
