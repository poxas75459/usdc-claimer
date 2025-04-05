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
    "55vNKRaaVR5dhnzjr9v1B4Z1yCJjPzzVx5SXoqAdpH6aumXSoB7Tvt5ccDtPs7dAMi89pcpb8U1fkhUP4XmiP6Ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4My3tRFnChdcoS6NEWrZoG6ejGwHipe5MKd6rj6qq8yZq3mTtyvgoyXD5AN39Y3sJCyECNWiuJCsJkJBRZFzv4i6",
  "key1": "grwSqVZZ6hChhjsDnhiUaneEyJQ2QT8ggEJnrbeKpmKrnhEzQHQL1sNCQgwHHaZVvRzLkKC4n8ceiZwwUqjLd1D",
  "key2": "2xwewJ3BjxZQLmQb2hM2imw1Qnsooe9TaqezNrCDa19kvb1BPDoLYuBSkNQDsyJMm5i8AAnCA5soAPK98zxdrusZ",
  "key3": "4ZqGftRTwUEw482rSmixhzfEC1XPgw1Q9aLR3WjcHT3DaxBWJN279SAszmyfok8iTcnzFCoZciMekXhkF33TPz2F",
  "key4": "wTjVFDbYcwb7eVzzMrnDGoef3UUPWT4Ho14roDvVFq516CeDonHUFQCu33t725VSo9qHSXGRWvXjLB1Jvcp2mqb",
  "key5": "3SybkhSVzHjAaMtnKdQVrT2sc5JZNgg1kEFqDFTrMm11LB5hEV2wTyF8WtdPXYhWyiLU15Rv4tAL7GDpNZ6Pj6k2",
  "key6": "3kkjx7SJJVM3wBZHMGpkHnSzHqmAjDo7LBsiy2iyWYZjCByCiHqVt9Xiay1Sj3GvjFRZkuRpDFVqUH1Td7Fuu8ws",
  "key7": "1CZhdqeoiDmzk7hut3WrXoA8SPLhDfXaHNEWzGvF433dHMvC9d5tMpPWTUk8SuDwCw9TbigGeWKePt6XtQc91G7",
  "key8": "4xjK7NW8kgqMBzYtz7oA8SQ9JDUBwhGaLPmVCfRzYNMbDVCRJDj3WVX5NEhU6ALN7pXC4KQEo3r9cHg3Qg4VY42S",
  "key9": "4RauAsPd4Z67D9sVwAReKwYG8qa8mpQDfexQeLzjW2ctJTBQ42cFcEx3pkLT3JTnxnZaRyhaBW4bZyKnTkS4mWgw",
  "key10": "3RfAduf8vJtC8DNFaNNq6zVLzVK5YhGkK6n94mGxiHABao47kdzDNxPWPwFF9LhA3MGot1zpYPK2rinTRZM7WAzJ",
  "key11": "42zZXJ5FJni4RQxX6RJatKDmbFckpWfGW6yhMz6c6PZHCNaD39PrwzBecrntmVPLa7JDzLpeY7Mw8fbSHK4upqvX",
  "key12": "2Gy6G26tWuFdoBmjo5u5fNnDAz723tcy8n7zKmXSzZbX3pn7RDpEx6AhqSZ9hGNcSkc7ZfKNSpvzqjAnwg6jYZAS",
  "key13": "egQXkpXr4U1dCAWB79pbdrWxYkazu2pqSsNPKH17BdaXfeL388qT8FWBYqaHhAYFemzUh1UzuZb5WGxdrkUYG6M",
  "key14": "4HBpk2yc1kPDyQMehTcZEqZr8TM4ChA6bt4biZ6mXTz2wrXwdaHESmjeb8K8huVA2Gk8vTYEJYetNxrgLJA7XGgp",
  "key15": "3tAdiyN3o3vDBs6hDR6Y8RpiZxrisXwD8ujt2pLYpEdWZQWMB9L7zGH54gHy5vDGZYaE9vt2vjCbCrEGdg9td9td",
  "key16": "5gur4wRfCMRFN2mJxjt5a9ad4LwhHTahcz4v5GRg2Nk4PKCFcKkivfji6cKPDXQeXkBheTHwTDGNh19QTpFfnugj",
  "key17": "3ztPQywXfm6KyvtjEMrHAZtcfnCtAC8X6iWT83KhBwcEj6tafdbb1gPKJHJqdwV7jdEuuncaxX5ZTysxK4XVP3jW",
  "key18": "526ToRndPoSFCsNBYezDVYDdbBFCE6NYWzrp1cvSPdRwxT3Nk3oRcFByqhkY5ghygDutnSdgTGQDCrceEm34Fqw9",
  "key19": "5AcFAV5vLLPpLtAcro75HRckY2YxUCCZ7poQw8YufxGfFpYFQUFwFJuYNorBkScrzynyai9yxoSbHGdLo8Z2H26i",
  "key20": "3CtZz4CnCFYsU7M1A8uDm75sJJqWxmsHzoi426qzTp2meRqrW8mCmxiR3ATfHbbPmn2JtFah6A7RgDyVL3iDMN3X",
  "key21": "2777kaKX2Q3r37gn3HDgkgQuKUczSjS9V7DZUnJnUWgV8iWnBPnwLXJAH6zz3S7nyMJVRfnxbRcAk6xJRmPUxBN7",
  "key22": "3foji5BsSgrzVFtuZ47ZjjFQ5UQzxeYU1MZ1Joegh45uMwpSGCRPvUZ1au21KwerGgs3amqooXitBy2eTQdAdgRz",
  "key23": "3mnoFh2NdPKNtTSj5miJVJuxDrifuAQffxX6Aq2QLv1kBbbxrQArEgVZ8hR4E9cpDzX3bmEsM2iizcm77HrvqJ63",
  "key24": "b6A3LP6btc9Ci9SMum9juUuQvps4Lq9fquxS3cJinfwrcEePF9ASvQSh5WmQRYwC6ECereuFh5figHDcCmcYm9V",
  "key25": "5SzqMdRUKok2VcJScTJS2yqA9LxKXhEitpsTwPKb3indRwtgo5cn5kDarkZxg6TEZiVusT7gaSYDjVFMY6sSHJhK"
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
