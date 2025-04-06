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
    "4wbvBiW5XSeDqBEmnWvHGkWurZm2ifimigAFP4eZpoTfSeHrHbSVw76SWNMDV9KoCtKVTSWw45qan6EtFrziDSQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31goRhwZgua3AX6hVxwgSjc144TnYGejMQKDDzFQmbPPwCjQ4NS3zx3hJbdV774wjrncPDPg6xV5Pn6bZHtGUBhA",
  "key1": "31uRPNwAybzzHFPQRvAMPsuraMixxzcDXL8zy6UHjzu9FfZZWVAEoDC5FGNcxxAjqv7aoYjMYdWev9X3Qr3R5dLx",
  "key2": "2bVP3bKAaySC1pQRSRTz83bMDjjTsXp9zqGrxJBxhvcaKw35moSohN5ZX5RrhUa2BTL2Bw1QbHN2sf7VKvUuagXn",
  "key3": "3X7HbMPjEWmcrFLUNfUzFtN4cNqNTefjrKvy16mtEz6mBbFRPHYJvwXPYs14uiZN1NmJwFNAoeLR1dUeg6CSof59",
  "key4": "66FnpdXoxyjAXhKygoHPKt7oh1ABq97RbyNhpBEWKdwyL7EJq5A2RzqUfjcamovBFt6cNrp3u8FJ24bR3AfKi4QG",
  "key5": "3qWLZDYMSH5TEjmsm9ukmKhce5UvaBBCyw5Ws2Tv4rvVqnGm1tMimYMymiHZuG4wMknSTFdXGj9izPyTX1ybK6e4",
  "key6": "PYtUZzTqQgt63RiznSoE2dDVpziJu6qfxWbuT2a86cL3A7HdataSkQfZGifXaR4F49tp7N5kZEK5vGKQ6b2mHbv",
  "key7": "29CPw3HKWkujZCo4LdCceX5nRK7TRrxzZM1nBSZ222yV9bFDJJJiyaQVcUHdHTAjPKpkv694D2ZEAEeye4WpDnhB",
  "key8": "5io4FfsHKsLKEKKonSinqMA6QM7EG86QGqfJrrVyRQj5ghMvCH7BWjwqNHb97p6Ec1kLpMt3cKvxWD42j8rCT4Vj",
  "key9": "5DPnYS3Kc5wPrw2SvBTrwvxqtHdSQBnJtdUfcDLH4cs8sbReSgR9w4oj4Avt8kAUF5bmEdJst8aqFvJrsgNXnued",
  "key10": "3R3AW32AYtpNeAQC7GoZuF1bmBW84GEMcNFEaqZtKR3ikDkzdUnh9jT5nqk7wrDi4iurh3brvkFYXCK5RQGGX4go",
  "key11": "3Pdy6DwQvuFV6cfUsYwsBucg6VZp28jUP7poJdRZSF1S99HzYhhEfAj38EwGEW6C9RoxJ3ePAVFJ5hg64PEfgmXT",
  "key12": "tnfnnzmtYxmMdiWzNQy1BRiRbPtY7HJSNACJtTjr87nax4UTH6bKydwtJUcW96gb4djbKVHDjnfoeW6UcXDGHAD",
  "key13": "5ub4Q4dWwBjPXnuEghvtts7drEuwe8uh6EYp6NkRrv1GEnxWuqou7n7xVtWYE1Q6cKcXutm6BeWNcVRKnfMVSTeb",
  "key14": "2f9ckcz7oA91HkRXDmZqTvNsrKTSW2wg1AYNyX8XaARuDjZzpjtvQFxnqXcgJKf7N4jDCSSPvKcHSyukFhU61qHo",
  "key15": "3Pq9JVS5XvcQFq6WEAjemYKWqWwRXKusH4kiFm9wLiF8QWPr39TVXEWqDMk47dS8Dj7mJAzSqNd7tudygq5D6ABk",
  "key16": "3vsGsddwtHntrW7f8EZvFGs5ML3Rw3M9sBuL67yP7jD5piyxt5xywRCn3ZKqaYxA75cgWrdiV8VTViCWppr4vfNb",
  "key17": "4dmKRQvVRjuEfBkPLXFqbF5pK8vFhQtkZXY7M6TM8DjnmAsm4QJs3pMegHZxKnPRd8ZTVDewgHduxjSE5BBuyXDf",
  "key18": "67QVwkTzukXPnzqRBA4Hteny4PXbCvXidq5jJFV6r3kdeAvjh2KzjHE837cHcWEzfbybWrrHFKAyNmyH7c4U19wc",
  "key19": "3gWqywin1LAHgTScmZ8CdKzi7riFYgxhBREnnMu9HivmRpHr7RgWefCb4z6fA6MVKvjeAd69F3N5FmV2TnzKuej1",
  "key20": "4sroWH5NPqDc7YTkJ99iFyoFRU1pyh7XGd3PFAHxe2US9wsriA6eALeEmzBXzWsrfGantj3mLr952nf5jPpiKJhT",
  "key21": "5AnNRHwkBe5zprnBFQaFdX9JdgXsNJAKfJQGDazNqhgyiETQ2eiYGjGUAWrBiTbN9STDeDd8mcAtaLLrEC1JUmvE",
  "key22": "3XscKV2bXV4tRNKBi94fQ5KhnJ9rfDFh8mbmNXqzR5fWWEcLA7iWeRqoMpPLai8QztEM5HGUoopTwdvURnmLRoga",
  "key23": "52KFfo7hsKmCFYDQaue9AUBJdvMV5z5rDkE2gVv6d3m2kHyetThKvcozMbHZqYYySxshWuvmkitz5dj1mrQJMbjJ",
  "key24": "2We7HDJCUhSGQJ7E6CvZwHHv4SC1KahosYNkpYL7nMvNGUTrMTP3x792WfJPo8bzNTHcePJMTC5SixSU8kE7uXHs",
  "key25": "278BJ1HTd2WHUJuSQqdNXWraetevNLM83a61P9HdCpgzQ7R45wyF6AnuC4V8dNQqb9yxExS5p3PtxAaWWckpwGPy",
  "key26": "5DL6W8Xkt2xhiAovmxA6Gg1rtKVodTvAcz6hTfeokr7NkNMeRrMoMchwRyvVojgTrALSg2gJU7E43nFdnPfDmCez",
  "key27": "qvzTaKoJRJvgvssjYuDE3yCV2gpSi89PqbUKgumn2Ef73a4jXGf7aHD2E6eixuVkrNTSHMGu9ZsvXmCdK8BTLBo",
  "key28": "2dZCyEUS1cDJaA7amMc614Cs2DWeCAWZdF58v8BuPB6fff1nZCD5URPFRpBh4UeRDTjaVL4ALLSo6MTZQP9uLmp6"
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
