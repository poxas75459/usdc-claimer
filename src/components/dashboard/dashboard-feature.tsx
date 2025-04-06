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
    "4A3VxpAU81j9XaK42cDAgGtGgPY61if1Rj1B2v8MBTLwy88D8mf45kdWNxLmaWrMQtEGxnpd4t8pnmBFxP4uYoda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XK5jVuJ3BUVt92wpivtm81c2HiroecLZCUByLVaeAgSpxCLotbP8xxFAgnjh489kquuL2kzqwwJt6HZxNkm5EoY",
  "key1": "4ujbMmpT2UUda2xNxU1JUNuh1UikS2RnNa1zDucyEAouupt9358pFM9qCKHk8TNEy8gzK9tWEkc5ioLjYHrwve7R",
  "key2": "3F8YNBQXmKBaKmnapjtiAsAeA84296dMsXM5T28RXQZXoSZnd9HdQwwLQDwMTbo6tpqcbHENpmqMYEJbHvPT28JH",
  "key3": "2sMnroJHi7MymcgvhQZwDNADWA28TEaQz2s6RCpYjCAo9rWv3YpKndKHa8QH2ihBMEL11FRE5KnsejnPXLm6q8r4",
  "key4": "4vJsU7uWNywSRXNVaos662uhRtTF5MZRMyXzGyvRj9moWxMuGesceVV71t41Cg7dvP7FoJc8o3X5M9jXoerotB99",
  "key5": "5Azfus37f9sX7HBtUuQneyHk2qWCyk1MP8R37KDdG4Jzhj4KAjbfCWQWjYuoBWvU6HB2ouVCnWz1TBdYyNyk947Z",
  "key6": "3DWf62cqmqrmssydBLp9br6MpqMgHGTAbXgtNwBCK33oBstUVcucMV2unj7m2eoYydrRmWgrPRjpVr5898CKZDQ6",
  "key7": "2yKnQrYbqPcS3KSvKz8uKz5uAxRUkXqiwunpgUukMqnZ7Mm3aDyd6RwVYDMWUKwSqKYMqJTSPrxSwzaHGf1g8GRC",
  "key8": "2rtRj64u2vcxvh5vrSgvK5EdqmTz6TVaBw1pJU9fBCeQy4R8LAiTdPuNfTNAQTN3ihp8VYwvNjkNuSj8mA2P1g17",
  "key9": "5YbXUAC4h4RegMuth7xBb1b9rq4b9zLkb1RicgfsxVgw28D4bhZNtvSNCSRFhJV3rm4PTdRkwnL6yr4W3HMMNCHH",
  "key10": "ooUni9HDyoUT2YJ4vUyDuM3JZ67Pwx7wRkaNxLgMd9ib2M4ZhbN397S7qx5ia3aVAH79g9coEaTR5R4Qv5gwWp5",
  "key11": "MKECqnNmXMMeDpYeHbTanzDdzespVU5Z3DxNrPkRQ4B5DWVvkQsjVqBJkBhqSUkZP4oA4QbR2wAD5EjhwkZw3F9",
  "key12": "51FK8wSQ9g6BBTPfJa9QrYDcWRgk6jNMPkiknaL7RsPsfwJAunqCVkAp9QMZXxcdfqNpszTFNiccVxnspCM2fdqx",
  "key13": "2Gxteyb9NiZ9fmj7Hx4v478mnL1pNksThj3DWdMBGPirCSgoAxVyzKggXefQBxDpSF3CoN8t5HbsW7M2tsoyrcn1",
  "key14": "5ofeuahX7NuCk2nXgkgRzXu16H36orNQC6ftSi6vJcpA9JQH3mdcwVRssLeeYCNpCtCzV5unpQJYZp5HrBziQsdd",
  "key15": "fFRpPousUXV6p3Ldb4gKpmYPwaR6pK3m595NJV9yvgx3c7yreN45BK1zQzNpQuWJtbq1hPv8XdX3F2UkRznpahh",
  "key16": "25jsYW83VLVa3Qhi6h8dmmZztohoo5iJxvokEYoGWXQLw7cyWHdXQbnGQoN5B38PaXyukByVrM2y1fPTcxwR4Cf4",
  "key17": "5REfHbibNsVvUwNwg1RxUW2KQea8wT41Xty2V8SfCWEAESBUwUCj19HN8EYEKXxcsfbB6CnhJeeKV5TNVHFej1dc",
  "key18": "4gziZeS3KMYxtjnMHrpyzyUE1Y9r3fLXEAgTbL3okN7ATuNKGRbuqcEUsrxcYq9KHcL8wgtC5ZfFS3EWQDhKVKEY",
  "key19": "5pnbEdLXrt3sR7EvgZ35dGroKASygdgeKJUTCaprTaxo7gDf2RX6nP9txJSCWGgx6BvLySAFqGDe6Zfog9FfRNBo",
  "key20": "4TdbNYPZPxcima4n4HD1TNKmE5GPBLQyKuQy9jMyzsRUkS1vN1mCJLkH1v7kdmb2tumByZNHseqTVN5REcQDukXX",
  "key21": "5CKuVyDnomKfsVtfBqWbStyQC5ZKD3N7c5ojyWwoXU61ETucEHa4sFqLuDo88Y1aVgnkkxsiU84E2VABVbJSVDUZ",
  "key22": "269yjYpFWyGtUCALd3NMJwKrhGaAr1a6JBgnXyVRh78GPQVtZyeeFbVr2hib6q7eShDEjY5oNdevnkhUYh8n9ymt",
  "key23": "5JRQWCYZzBBPEoHz9euJ2GG8yaLBS7e6XDR2Wj3Twy3gK2USqJ4hwS1y5gxYNVjMVbB54rspAKfZRfUQbZUpHpPW",
  "key24": "3JqiNzPj6P2TFvPNDBBBNwACZtXmL2B9pZZkxnx6W35xBEcSvPuYZYrZqNQpWMa8bxMqez5Shq9DKH3wwfEGmgsY",
  "key25": "3BksSLxJUGYQSwtLymF7ZcTCssdWv4Jb7Zk983jjwQ6XZHdRE9Ai5xwSY5CoeoiMH5WdBnsKMpAy6vmCzX1hH6Mw",
  "key26": "5mXx2j3HwTqGrnjKCg1emq4wKJ2LyqfCXM8FzZdxW5tQKj9TYdBALZPpmC41EUsWvxoPAuoFGT6VaGN17pce4Ajk",
  "key27": "3nAmcQHQMAZKPKBXfXX914HnphRSyHTYSffMe4LKEySnDj9UCgRfQR4zDjmaSrT1H7yeG8WhavqqqAXpaYUuUFCz"
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
