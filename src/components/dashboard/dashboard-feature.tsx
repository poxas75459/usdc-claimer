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
    "5Hy3t985nT8EXTTHbg5YQMFvKu9hYgeLvziS6v4HQewttwrTsggDqcqvx2EJF2UkYgxi1rostV92oCVEwPhXPvRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eEdfM4CyaC5nAE58iFrFdcWx6uhufRaqVYha6r9iztN5e1hGRccqEU7SEqy5XEG65aQ4kKLqxyHdPxQW2AC8YjT",
  "key1": "4BCrc34XTJU11RuHXSzsckYk73UNETqYwsDfZ4UFCkEeQP2ZyBb43TSdMozdzSAhnzwxdA71zZPWK24w2ZHPA7Tm",
  "key2": "4mrajRPWB1VAChdE6SCeHUbyChh3TUSyXBvECHMSK2GCkhDPCEjUv7XLsa5Hb5CcVXGZbwZ1NH6kRBSbcNn8ibLZ",
  "key3": "63gfDfwJmhANR9PKjHqtDxq6g27yyLC8FqoKne25ejE7TcRZcgqKwGznVCBr1BuMbWH38oHgnwLLJJ2c2tejrLjF",
  "key4": "57m9ssFviSp9anTqpcAoDGsu2KzMS8HRohtomSK3iiq4tPDLKsgqQqrRtfB9fjYkcMmd3s7PM3kJHMog4Bg6f4rj",
  "key5": "YhbgK9sZAHLGJGp4crSg7hPFa34Fiayc22HQBgp5NvvZgGQsHUjt8mSAvm9cWBQZTkf1vA2cSnD5yB2rN9BDuGu",
  "key6": "3e5bWyUciriYUz3f2MJau8ZwYuDNqtHWfT9vXDaJTrYxunoYgzDL42UNMs3RRgM7QnwmvAtAFrxYXRAkN8CTKvwH",
  "key7": "3iVKXcuuSzKYKcvABunGKGbyhSifWdXmp31sLhYDgTwB15RYVsnGJvzZw9qt1LQnDyz4RxH9QJ7y8dc6ApRg5e8W",
  "key8": "5NCJbfWgX3H3UcDpph2mKn2iNWc96FJW9Y7wSLnXxNnHXAfniqCumEN2p2q2D1eDqcfrzeHsNbhN12y3EWVsD2dy",
  "key9": "5c3MwmWwaQdG1VsaRStAXvHEBD57kWEp7dkfby25QaNnnsRWUEB91GffxrAGutDmGdsAHCZsDXxETVWe9b1a8Gj2",
  "key10": "3er78hJM3SJGBWAzCwZrp9KrF7BoVSQhofLz6Lf9rnWE2QDMbvBAiNSyfmVtV44xM1uTg6VDDn2QdAoiafGrALCy",
  "key11": "4khdjfrvaWT5xB8Egvc8Bni4Yy54hyLJtMoAFvnUhmtJZaFKK49KqvVcEPEJZUKYRwrFM1u5Eqt27UKmffX6wyTQ",
  "key12": "5hX7YMjqkqfcJNRxXRtqE1su2f5UxADgQivAzj5FjqsfiB91mggx9ebJU2DjCJfuMNicp2jcH629gBYdgHQgbibj",
  "key13": "5iFjNv4cyk9f3zGmgRCEjsjQE4YWvzQBijtJqtufivm4QqTFa9jsPWGfuXgoYmNyKgqS8WY7TzFa8NLxT9E2idHc",
  "key14": "2yuoVt7nFyGFawVQZweiiYKjA7DVWCXHLJXLrYsZ7JfjTM5V5HZ9t1PT7PHXhHZggfdZ9DGmRkt2MftA9PXvwiQ9",
  "key15": "5wavFkAmMkb6pFRHTVtFLBREd22DHa9GWboKcRT4sNE5BFvNJ4toRHhUcxbQmXjCSsYqcYiiWZBpzEAML95S4dEu",
  "key16": "6D15jmNcEfBeSi6j8QJuJ7x5uULPGUn87bJV3av5LfmexNYttaHZtsPtLPPgv6JaKrNNySVW1YsHm619vj5gPNb",
  "key17": "2DN6msYM84iymTiz5YG9KqSRDMEw9MK8SEoQ2i9hqsqkQJ2NWqvbnyfUkt5u9TXSuAq1UDyrKAahxNfK8tbLeKef",
  "key18": "4moyqgSGvxwfA4syDit3mzQbxvHpHi87Aiw4U9xM1kcT7YghzMSWxGfgseaWePFjoM5VhFd5BmGLAezrdDvdfyVy",
  "key19": "5YmxnQxms2L242VuDJYtKsAtpnZ2TaamT8r44D7bhJGC9nAXbP34kTqYMr1LQzQXtpxsFLiqcoFJ9xULRDRJYkS3",
  "key20": "54SvHjFten43xheRSPAKeufgBRte6xh6tiew5oJLBWNnphKo3kixecAbkyPzkLM7c2GZ6jsNx9TN4grtbz4G8Sde",
  "key21": "CvWXUJxXM9LQb6DfRxyr3S3YQncahC5rvUCpNAkPdYRTfo7DpovvJDVAbrkxY9gRAML5SEoaLA16EE7qWHC3YuW",
  "key22": "2HqJSanPiHVJCoGZHVhn8z8scy2jxfJcpY85RG4zZBKftQtE1pcCZktgD14BPhUfAPE6Ba3tXKqfnQ2uKZ2kC3hf",
  "key23": "KLEaMx7svm591Mm7Gutp7sPymm2aWVQsr6mbbh6JEFp9cubahZGTDEocuszRfgVgubpQPzrPJSnw8N52Rh6VBMD",
  "key24": "4q3a3BoUzCmMouVF8Tc9q2dHQe6KqKHrYyj2NdRcSAxnnGbdZae1dHXnoA4tYdY42pKJhHzPkB6wLtArkyG9uFUA",
  "key25": "3F6h38iNXobZVj8pmby9nGqX8A8AZDxVQD6RuXbeem76TxmnZJiaDbR19QvHxfJr1EpWAb61SF5jGhSyhwLTF1HX",
  "key26": "5QwnR6iKWq2MfGhaUSJGxxtowPos4pAQAfvJWrWWkTfA6Lm496wfsft3EYcBCRZzYasSDPRd85qrpXdn2yztigfn"
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
