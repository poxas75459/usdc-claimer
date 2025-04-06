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
    "6kvE9CuMPH8Sz2uVEe9h459qbv92AbJmubtXPmvY3fdWWsAVvsMkFsN6ZtwSPrPT3fuzSGCMigqsGaKZcEEbVKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJtMnND4YoJaEFrhyuyd5huVCkW8HQFMHKPRr6C3F5gLj9iPFwhfZWUkvqvAYAR73dXpK5QV6PXV18ZhArDmsDG",
  "key1": "5p6beu39e9Ry9feU5zCSPs5GAfejgajueDjExpEPx8jMgSDEMNbXRqZCHafTzDvMgrQUvdUhhNYHyZQFhqWy2rpo",
  "key2": "3NAidi6jMCGoVYjB2dw9NpkmJPrpUda7B6Njp9NQnNE1MWUXVBMYDtcgRaa4gZRKyH1bSvJUpeg9yftFZRMFnxJ9",
  "key3": "4bQUar1oNm856LTYipeSAh2cPU3iKxSrL4Tz5hj9cpq69iF7Bu363QHXJirMn8LrZaH5BZuS5fhEiSpY99aRNoTs",
  "key4": "kJntiX1Ti1b7ReFaNwEUmHwEg7KMuAA5ZJsHDGAi8NJcMG416ea6o4LdqNVjkaVpgQyfCR24JSkYArM7KfJraEM",
  "key5": "XWsYj2y6EGDDDLErJiUGtZ8ggashBC3toT7pqFE6pJCZZToV3ZdGWLtkKuLqNYMQYFqmameunC42XX3EkLfQart",
  "key6": "3tyrFaZ9hsdKHemqU751cHPtPTyQRFH8kjos2fkckcYC7bs4QVAUqiHK6Q4u5b4uqNyC398s2rZxbKddKntvZobY",
  "key7": "3EFLFgX3YB66WJBDav3bfkBxQWaUNRExTWiW1XudiiEmCAmqe9rp56PNpq6qsWoFMjC9jrtTok7zGUdxEe99E5TW",
  "key8": "5wR74wXYg4aUighgLf4Xg8vvMFf3PxsnUkxjNxGbjQ3xMppPeA5SRJ9fK5jZNcE7aQB6aitg3FiSLgLBHm7HxFHL",
  "key9": "5PhpwtwnSou3U9WsbK7YfasPs5ujTgcpHD5umRwZBMLfz6GL3K6VujwmV23X2t59xY1VzyYGUQyvrab9PdeM2QJY",
  "key10": "54ivE3NQqdf9K7jryiMimLeGVQhEXQd81yF4mvEwWJQ6SNxVtP3VWzqxEutLqVNK49Hx1dobC6f6Rk2FAbW91ahQ",
  "key11": "46rujhArJMtB4ua1ijbUX7JEdX8AQ5uhw64PNsEpjHYrEzaEfREaHaimeEyVnwaHCKoqX481pfBxrrv2UEAKRGAH",
  "key12": "3p2poNu6R9SYvwipxm2GxiR7tBWk5kaLFK9ApnxxYMzNMJ5LR7bxKPq8tSCpeRZZWGMUBMeBpbpoWxv8HT7gxkEv",
  "key13": "TVFdtKGAJiiT4rPnhK7y8zztnWYac5PAAedc3sLAi83iQhYLL2KWBVmRQnDEpndZVNNB5Vq8u6aZip3FVZYUV3W",
  "key14": "5sm2invXPajzmY4ycewdHFzA38bMQ4UVYFnucqngdkUY27KFWXWWieCeZUtErb8oikkZPdfcRi6agsjpPgy5uf2i",
  "key15": "3cTtSKxABkGsiUp92dA8iSzZUQ6ytw8Vkwi4yUZjdKQac7z62Twaxz8sjXxPgupKYYGJagAgstkF8CvTrUfCTJPG",
  "key16": "5Ma8BRn1B7hphXunab1rybASdwZ3ypoTyr2RoPZFmbgMp6HoSd9XagfXkjivwyBXccy1vzusCmcR7eQHD7m3r1Vx",
  "key17": "4jjwYcKM6RVCP8HpoyjKw9K43tbd1PjTRorGqvbXMrRYAx2mgT7q991dKYysB5YEdnrSRjhnNCxpjhDr9Y6Jp9uv",
  "key18": "3o8ZU9TnFemfcq3F5rDVyscgReKB2whNk7M53XV5gw3CV1hdxBCjLU7Snzi25n5tV4bcrNidAmxiMH5snCRctobZ",
  "key19": "3MzWo8vDaqxCBrUo2DXeMSzHTwmkV2rDiiDjUV1zvdhkTfwfVLu8i3tyHXr3mxawjKXrwTEbwwAZLQUnna6C4bN7",
  "key20": "5USnSEFkPaWY4K2US4ipk4xThcctmhHESGgdCCt9bZptc4MHfUMMZAWL8fSFoZC2rhCzz6ZC8LvLghXYuhiLofMu",
  "key21": "4NmMapYrwtTUJ3GBzSCJCVqjktaDDWQjiKB3y28HxKuFmVbBtKkzdHemrWMA4sA2KyzAafQ9PBxmuqs8jmcRM9TF",
  "key22": "59vMksvrWUFDs3wb78P7QUUmvnr7vvS9sZ6gvoxZftTrGVrQm5XPjLf8fT1CVDaZCtmN5BV6xZGKP7PLoYQrtn9k",
  "key23": "3pi1Je91Ym5sCETv47kZmE9soXwEYEyFMDXwf11Cv4pQ4BsT4uMQpcRJEH1ZW4A1NsuscWZLiFqBHMYYV8wcUpxp",
  "key24": "5PAECP32mHfnMUfFe8eiLyL37imGkRomVZAAYJNXU97bwCc1HwVnJew7FAtnLcjzWU2Z6JN7QV2jJxx6jUeHehwH",
  "key25": "2cA2NL5FUgUGBowEgLdbcBvR3NeoFd7JDn5jPcrM4YBdUWdehMmWZYgdQcUG4qYmBPZLTqDxHMxAdy3zKQXx6a4Y",
  "key26": "tWemoMwb8FMjNsogCDSRuReUNVTH7Ro4e7Qk55zhwRJGuHvyw9iD3pAjWTP7dYtyyGpe9csKBqi5ZCzU9SkqW7w",
  "key27": "3KGJFrUt2BrESsL917KCijg44vv57zycbnietv9bMc4ggsbSmgofV4Ammjwve7UgyTds8mboDeqD8MUYwhfqoPsN",
  "key28": "4nRp8AxE9TFgEjLY4PW7fupNefQmeDMJ5nWLadZ21cbVPbvLP2NYnt4dkmF6L7uoTSn2B19a9AXkKEXwWxcTTjeG",
  "key29": "5Q43y6Dv9A2ef2YGN5nJtpZf9Ggig2fCjyELeugV6PBpzBuMMgpWNMwUfWVS3G5x3AmakD8y5dgxBRH8JSJaz5mR",
  "key30": "2AJrrcyUm77zf4m7KGmVfK3Dc2zPEMhMPRubSYTVU5jHnc6Tud1bvLhz8AUvHKVWvhi2zLaUGZFCnj6x2chzFSC4",
  "key31": "4WVS8yUfPenzVxrX6yDvTXfKU4XPR7CrrreT9gVta6DuDx9FFDfHFVu1HGZ7buYfFBMJ6gffE8Wk4XZtPSwDTVTd",
  "key32": "2uwmisA8eJCxPUaNidCceceGz6A3drHi2tX1uXmoUmiiUcaJdQHoeXC8FEa4kzFz4k1zH79nKwp7AeBEPMAAwDTh",
  "key33": "41cjrGmmCbP97ZQKDQzbwADmDsADhy3rhJY1ipqKaDdBzoe87X7d5HT4C8ioc5dYGpkB3Yybp3J3m7fFQV4RCiig",
  "key34": "2c4N5seHjDp3tL671P2VspAotiX5u48xG3uw52K5P6cgF1JCKDaqrqYkH4geTNk9fTMALyhETTDtdgtLSRgbjevX"
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
