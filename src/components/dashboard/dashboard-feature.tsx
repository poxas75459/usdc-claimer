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
    "5tVFsq1mzzwuTddGXNaHRKR1gKnXs2svN9VMQsVG3kxG2d3nEiZZLUwf6Htua9Vkk6V3Tz4qXohsAQJcJ6SBBnqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QQ4W5zWBessJW86kf8fFkzwo6x3DBC4nkNHbheyTr39bgfZKV4bsvCMADVGfcfsi6fVNe1oE7qdLKVkPsNiN9uS",
  "key1": "5ZhhQYQXdV3Dd2Lt7ttUAhK2vTM5CENQk2opULmh3V1Q6ZAhfGJ1zQLxgTQzNUV39SdNN2ngjeTUTuzPVB1xGJjT",
  "key2": "cZXS5C9LoerKwhtAdH4r25pVHTx6MjSR6qJAq437ZzU2iU8kvsTLw4affJQJMAj1FisLL4BFZLZSHetKn4ScQtz",
  "key3": "5rewQzwtU3eWP2Uzw7kir833r2GEqKr69y2uLGfDWy3kZi17sAXDJ4Yqfhj6yopKCvg1X3ZQ3LttsPu44XRw94KD",
  "key4": "5JXSoc9vGG7jbgtrSEC92qWXmPr6Dk8fPkwgeEEiNiyPVr5gCyKZyLdbpVF9to9iYapMTF2yjzVjD19yaN6gVDUt",
  "key5": "3SQYsxTsmbviDahrXwxFLA5FipTrrLyr5fD6PPmTpcHx7FR4cnyoRxoggY6FATB4ABjKwVVEVefaPAUNGpAjVcmT",
  "key6": "44KeVUFHLHpDgVN5ofYBz9PjVFEyKb8QbR6cWAi9JB2dENV5SWbYBP8NArceEYtbH94pNWTc3bYPwMvv5NVLzSWJ",
  "key7": "2TLZRoo3w1soJGH7iPEPMyYWLgmBGwD7b8AdkFps7FTUHzs87tZMYXi2fy1xa9yGE5YRy5wfjngSLArPAUu3hgDU",
  "key8": "4xXwG9eMhQLgQP3wFLMZiUMByyHvFQkGXsQqCrsgdo231oaVk9Dr5YqXp3LsHvC6vVKVNCfvm9ta91h3cmZG9gd",
  "key9": "2eHZFnXU21JhLQkCdn5ivFU8yaFUJbaMGv429QrSm487iWSSYgZEpc4eiZwkoBPq5vVifxCq8zmZkNP3FiopJ5Gh",
  "key10": "2H7UCs9F4WKnzvK17hhFiHhZFtjTqWZGJaNBXrXJ8jMyBb1C7gvW4oyHPFzjEhwnzgWLB5ytBXea5Vw31EMTVRe8",
  "key11": "5CxmwTouPtCW84dnxyg6aRhszKmFXe6XJY2JsxEu7eMdWg3UfwaAzR82VbboMGoA2cS3rMfcJd1NZBAvsmxarjro",
  "key12": "62bFnPznyqyuKFSmgf5ofrwMY15Cryfx8XfdDdFjA8vhjgYnf2Biat4fX5CHtnVYWfoEufPpsSastWF64F2GLNW1",
  "key13": "3g6e85PT9AzqRVAkR4Bz4QkPnMieSc6Hv5yYmgLum89yKSYm1yo8NZZo1vDgANuTywh84KaXvdwYDAjG3XzhwanF",
  "key14": "3KpxibN4q1CmzKS2ifWirMFPZoj6jPJNHm3vzah7qE8oqMUvimf7RjZAtGArw5ivistZnqJ6ZjAukZWYm4UjYWfZ",
  "key15": "4TToY8tJ5TingTVCAeFEAFsghFnwCaDENhvNjmWQJoe65sKimLgN72rHq5tE8q8jjg5vHus6hDQvCaKz4UGytEju",
  "key16": "2ZukBcResjQcN9mpNPcEypFfjzSfVCF1V1w1maGc6nugza3uRJ12wWx8ALnfq25WwDUXBqfMPFNB8yzR8GX9m3U9",
  "key17": "5WQptqHnuFcSnDBV1siwPvHbr6HKzFPoo5UMVGxZH8PSVwTBEQRVvRmtdgU3a7i4vFuLHaprhFjPBdNQrbtc7MX9",
  "key18": "5tWLDx6NKpq7xwoXg2W3e4PFdfRPNDxE1jfU8Ujh16MJBqX4c4j35xpM8Na5FbomJESbqeAeppmkQz3QP9wDvvKt",
  "key19": "4f4UFzJQBwDGRxa428qN9RYu6uTVX72H8DGq4kQyjt7tgzLF6AdE4pyx7F9LeeAJ8BC8eEgXgqxE85XBEeyeiJYr",
  "key20": "5uMCauEV48pRaeTVqWC4XXzhwy6Ri1fxzFPzXxt4MeACTHZtHisdqzPwcxByU8LfT53kNp59o3ySCwkHHLm5JDLV",
  "key21": "4KWMgZyovJ81Y1saJ5WC3b7sMrKX8fM1ULQH1H4NAW4C7PzTbPQR4PoudoN6DunAKrWPHhXct4PNnK6jAX9QgE7V",
  "key22": "21uZehgtAjFyMzwAiUR19aWqv4yRtwLXbYGatpswthJczrz7qveAD7Fp8szKeVDMnsR1Ri3zbmfsdPbFWVqvKMEY",
  "key23": "5sTCGPPt3cYNWehKrJwSFnaiuGhXJX2tawHLBYgCBYLvsDW9QAWCzcXUWsXGAvs5Qu6ryNkhCsZw6BGksEaYJQDs",
  "key24": "4sPk9T4rqQwF8SvFh2oHP7QSEnPRzwe5xpdN41WTsYjHkXRmM65h2smSqp2JLLNXjziyngxtMh6F4JSwj49d1m6h",
  "key25": "2z77zUmQEL3oGm4orrKtRwhYbHdpeBP2oZHERBefncSz344QRAVZqFKCUPnZbNKCzEkNSVq1A69YvZgKTtjjVxZc",
  "key26": "2t81rpfbq5ZRnEGt2WHchaxhFiVTPJgdu839uCcRGWfwCSdojCcQfpM8Qrbh2gpSthoZ5J2Yu81ZrXatAv8sRWGz",
  "key27": "3dY7CcVvwFDJuYgiFg7QvkSzvLP2KxBM8fu58ns4HjtA1kYeeysugD52iTDCSdnJncARm8QAWpBjfxt3fWnvFrdV",
  "key28": "51brv6hTosYfm5kwAQ22fjpanCwTWtPrFadNnpW5Uh9XAUXYkbpcuXp9pbr4UmvoS5obet5uiv3iWRpPXdNQ3XNZ",
  "key29": "gqHcd8bBEtLY6TohzgcSTEr3AyaphRLL7eeyMWQpmTs9xGBgQtaTGs7byJkv7So2JHeRNvukKuTWLdr2q1gWCo1",
  "key30": "3z563zZ2eydEqDdMdKdJm1FSGjd7YjT7LrnaujH7aa3VFnW747NvMuTGUfNr5oZvcFqwLDhxPuhDJexQo1FjMWj6",
  "key31": "2Q1zDS6i7uiwQEUGLqxGJrJPpinWbxtp4Ee89LATNPiR5iLUTnMgCwakY5QCAkbsTnRDmCNgxUdqhPehNwbk5fJg"
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
