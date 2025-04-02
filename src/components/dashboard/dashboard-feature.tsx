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
    "2mHDVKVmXKodLt4eoDGD8GKad89KTUKTp5EPHNne3PSyHFxc8n4VWeQGaNuxxhbG4Cbu4LZ3nxbUGrN8S7jChnKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVSiFwL11ViAQut3nmVso5MKwcaNvWDBnxVfMKdHRPfhppuQLW2socFJ6ivaBb2t5aS7sQm1xwr5qChhV7fpKBo",
  "key1": "2uFUXMHZnX8JhBUkK7tb4mxZ8G8xLimhQieTiBV5RG83bZcZWmffKsLNW5Tahe4DjH2Bif1Nw84hCj22jsaHnQJY",
  "key2": "jgWU3yNNq43ehnB66Q7NBrx8z8TBJCssmoLdEpJ4j65HujnKmpHZyLHg4LzUiHGpzZbcrZZ8hqB4RF5Q5tAuVpu",
  "key3": "55khz6uxEKJ4b3tT4EsJkk6Li5LZtbDcRjUM5dNwqY9T72dReJgNkPC4cPmdqFF1LitjnPNoZqVSWgV2Q9eAFZ3i",
  "key4": "66VY2h8nhauwF16tQrjVF89ERzGc4Yfn3SmuAovEnXQn9QJ6mA7BCDSTCAbtRtvVia4LwdSNKWGE6TufweHkRgsy",
  "key5": "5HciCrCxDTDvFib6BmmEEWVHwkyGJ9C2ZxnzDuzoVejd8ZhCPMjkEnh9stbKsTzFVRtfQ3qJUqsazVz5TzJqofKb",
  "key6": "AYzrqJb33BKeCXZDiee2D6NyVE7zEfgiTvcBS8LyJK3t2BmRCk6y1zS4NEKHxX8dadFvGENSwitMAKD6n3uSviH",
  "key7": "62WniSULWHYSLYRTM1mFr8r3gFPf8ZBuEbAEmSXxKoQBRjYLtPV2cmfeLsUAUsJVQSm9iScAmQRAvwTnn5iQYkMk",
  "key8": "4JctwSPcotzVWeLr4e51mWToyDj9skDMMg2NrKCTmkUARkFLeVANabS55iXYicMmcdY7C5HXbTMFjid8cuum4TKQ",
  "key9": "4qyDB5F1qfWZVsQAZ4zib8W8CoXgskmhaHn8kTQy6xQ2fHTjuedbaqe6YibMXo9gX9poqUCPsJFzRchhqSXbhC8S",
  "key10": "7UchaSvkYMfi8xwnUGiNaKC3RhBRySxEDihVrkxgdrfxYGymz7tgXygPBpCP7YHr3yFRK35yK6CgfsPvF1DGT89",
  "key11": "3dmE6skqachViu8hhknH42Uw5xkESb5WkKXvMUHzKUxEcovVHT6ghaeM9hNKsFRHuFZYxxCT1m9B9ppmyGvysZdW",
  "key12": "5WC9XWQLbYduRYY9x5e7yQvdMagsRCSF4GHseJcU93FUbzfxWRswwYRMTBZNfM1VPEKYhZjpJXShVtXwmKQaXfaL",
  "key13": "46UCm8dDkBBQmzyPYwqAw1ySS3df2zVmGQcsUUTkPweF9g5cjxg3Xkc7PTS9nV7p8XDbNTmq5VskeqWomXvKqeKw",
  "key14": "2D2Apgfdie9awwCKwcY7TuuoeFxk4uYvrvZkp4i3wsyYJQxHNU6dQpG5WDGfepm23PecZqJpRpL2RiLwwZZqKR4K",
  "key15": "3VNodC1RsFuJxV8WQYGcoqRAb4FtBqEjnF9ZujgmxnMm7KfSefHw2ScXEvuQ9ahyfFAP2bRaqX96TZ6M68gpRbGq",
  "key16": "51HQunzwDdjt4yr3pEaBGnaT6YTsyNhUnhEPrFkRjpBWFpVFuLjWhjnu6Kxe7UM8NGTMJsak9trDK87QMDvt9ZK1",
  "key17": "2pNf3ZPpFxTypNfPVJndvtgNPsfDGUQw2khRqVCsR7MJfwT9SXCuoMSGFUtMEtKk4hoBufwp36QuorKFHntgaYdC",
  "key18": "4jSYoW5Y1c4mxdeyZR168KMdj1JsKqDBGqifqVdJUJUVNRui7d8Hj8ujapNYhBPaLPyRr5Jp7TbDpu18BNe4p5Km",
  "key19": "5P9MDdAd2iYsSWkh9rhVAAggqfmW6xkeCYZHxz7xKYjUsLJMZKDcixtq3Bza7PrNTv9e46c6ZwbwNxHiciwRsKXs",
  "key20": "3Ss7ApT516RoAF2mAsWJw3UhcxQqknjTH4WfKs7B39jXRUY8x3RpP9KRj2qTYXJaoPZJXh1WoAFA8rFXYwg9PwtZ",
  "key21": "3vHthWJXXCtUqQTzpi7V8MnoGoWoqA7pdWcnRrMsFZZ2CJ3jXskuH3pWZAywyN9Y1yDZco6fQnm61J6pGotKrMKf",
  "key22": "5PtsJ9gvPjS5eNDHMj3jA9NLakrVsdrnFPLLpz3GU34qCBnD5roYiwNHNeM4jtBRxADFNQ9V9XXULMyySCAdE152",
  "key23": "3UMSE6hDyNviygFTJCvXxawQy39LdYTV4t3PLouCKeXrpZfQKqnNjBMwAYRqDbJJAK3Eirduuf1mR3bdH3meNS5v",
  "key24": "YAhhydHRoGuP91z6UKZPAhRKjJtojdxTeLJ6tGSDgVuUwDV3TstH4cDMYQeGJZnHoik4P5nKEiZ9xw6YYU9Pthz"
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
