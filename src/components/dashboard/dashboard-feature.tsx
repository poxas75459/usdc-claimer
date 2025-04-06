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
    "5kk6ZgW36SBNQm9b3McpLMyBPsLtVzVujzKHiBjPCcn8sYtzoLrJUajWNYGkQ4PbNi9B7y1XwCuqX1FBLz2mVZhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SjfV2nQEJDE6LMPh3wDhgSXaFxkpnzkoRHW5nvEF989EgksDpJ4tU8Qhv6hj6oCjkGZpsNGsB5uQfi6yoQcSVTk",
  "key1": "4A4v71m3g8N8QZwUVj3juVguXr7N9wmhSzMWMVdKKL1tRWrVwnFGo5egpm3XnYzEXvonqpi9KnLuav89t8mmV9Xh",
  "key2": "5d6SCt8YmjfZnG5hmkzxssgXS3Edw6tpybK3jjPB8QC9MhBdubLhD6eQc8mmX9TxVDme8pKAr33TkDwaqQJ1s74v",
  "key3": "3HKaoYg3a2dpeRmkeZgWPxdvrfirrKk6jH8zJ1Qk9iod5KtQRQV14ccBVJAfwPmpMRxVcdoPCRARX33vLBRXYw3Z",
  "key4": "2Gwb6ZQp4CYy5nrn66y5ffiD3VMMySPwuJuhyCAH9px9S1AxbNYuzHPqyPT6abqW56A3qx63pfHDuXNpKrxmW8w6",
  "key5": "61SPQifb8mf5jHYiWRjAaUYeB7kurc9q8qZiBD7aLjYPBf9aVNU6aC37kVu1g59yxRed7G2bNvTXpiwEogAFD3GY",
  "key6": "43hRcDk4FjXmrKGsueSqko2Gtomm7RJxLMAfcGYstWSRg2cswxBSLYRLxGrqmk7EaQeZbzwTHdDyaW9Yj45TNpx7",
  "key7": "2taMzkVkFwF5fA6pXungpBjyCm1YhNGoW7i5zgSgjukWD8arb5NoewsB8Vs7CsS9LSAwBvfbJCV7F7A9MY1LnqCZ",
  "key8": "48X3Qj9mKyCpFLNgYqUs2MTCV6NZZUkPnJ6MxJ7sC6buUZw62va5oEyZgZiJa3ZTtidx9QEAvgR1Nu9amBcPWxpr",
  "key9": "2DZHTFQhQtrmzJQSqA5h2zNK9itXLek5qTnYtU1qqZbDFzoE85zK5pGCp6TNWE3p9LSiRri4GZrq1WifUZgopf3B",
  "key10": "51Fuaya14NsMdK2oobcSp8ux7jTTFX7BJNtRPM9CJPZpXQyL6Z2uNpWQ9kVbcVY3K62j4FrniBmBUid7GvcaN8KR",
  "key11": "555QGVUU7aowfhtDP2QW4EfhpzDbaCmzdS4QCsbjWCGQwkLS58RtykoAsqLdyMVydyb1i7wBnpx7USKPLwMKF9vB",
  "key12": "23G7fNMvRBtsHCWnUkwHWForxrVj58mrFbfsuLLBYhXGbBz484K66pXoiSiBGnNBBZYkTiZ9x63cpGeXccEoKBG4",
  "key13": "2YxPgsWwt442pTqN4Q141i2bZMRa8jZQ9BPdnoZLhsL7u1uzX3WrVtjjmniSHhsCvJooTw83nnsqM9yFuSksFqku",
  "key14": "siHnRhhLQg16dpvskxoDrHQrhUvPQeuMGJEv8XwQLg691LkjJNb4BZHwza6mzH9GXZPPWYRZKxX1bqFpFFBovaK",
  "key15": "2Ww8JJg7kuBUUhJcZG2KcRJLQM1Q1Ep9swv45QvAAR9AWwTFiSuAVK3hq7cqjSNoEqFZeW2GtsLwYEJGVfrpiz2x",
  "key16": "2X4ccM3wyCYc7C8bdT8bswp85thk4it9wurrP39sKPj7mHjwwGw2o1wLDutFYzf9znYio9JhiDAWkwQDsaSoRYP4",
  "key17": "5QsD638P8Hnp2PZsUMAyMnzjS4SuBQJhPufgmx4wDBujvyBpgtsKs6EFwAsU7LttBNxzciTkPTddhMqpkC2PHDm4",
  "key18": "2tzCiVqQjEKD6uTe6suc7X7LjWPzcSYsiVB4irwiMXRnzWidJ8mBBCxWBBY5TaNgGH9HwqMTKYXFnBfrMYedEHA3",
  "key19": "39YFDatzrcJvqq22obiEoT5AvR8CMqYkYbkUN5Gt8atzqkCZw16kax2Bnyg31vZ3xs7G2yDaJq637pW5vCmdtk3u",
  "key20": "SaZS6rE3hMTTGdW98NcJkDH1S9MRtwgTDEE54ay3PrmLgj6RQwydKAnKL7HxfY8pQGGm2v3mz7H8u9zNzCZpzpq",
  "key21": "43eWEGyMsDNqnHDVUjUA5B9wADqAEk95bg1EBPkBiACvXHaBi7Arh8DeBFZjRNbED152re2Xew3NGWgjVo5Zcyg6",
  "key22": "5KxSbQJqm63xqsJ6U6VwCa5X4DaewPnp4Bqv5Vrpvtc8CSdnpC29wNkg1tfn7e86xoj6zsEiCYbPfmx7RwJRQufr",
  "key23": "XRd4SvhL8RJnVsukHShPoXmwMVLdz7bEtpga81VJpqK97QuBNKTvSs1xgcqBR5nBzaKtMhuT77m74i2wFogFEk9",
  "key24": "393uWB4bphUKd8BEbW4eLdFRiPXVxFaUZXshRfAJK5UcGGxpxFAjpxjeF3SCpmRuaQmFdAf7HmGrpHpcnCKMoYxP",
  "key25": "5Ki99H13nshfbmb3CzgDi47MRo1LcRKWxYKTWj8h642qeb7dzZHeYrgunfUS76rCRKpsAy6wG2tn1yfGwKdohcW5",
  "key26": "5NiLJCEzSvwLGSZbGgpbyBa4urY6vjZeWP3cXtFRMTQ58sg3jrnUQFFbMnSeBmDzgtdnmQHvoBwJZLULTHmr6eBn",
  "key27": "49V5Mb4aSdnURwzqiupeeDQrgXnAZmWvc9F42jqguivwyo8C26yN6zieZDVXWeZcmXUELn9Z15qiUkEDqrkDMj4J",
  "key28": "DnYoztEYJ8Dqsq67sbcDcLxg3q9bMuWrc6SdNDEFcbuGNUspH6TvwPNs9SoDHbVJGxmSQxJg9eKkqwHf9kokL6b",
  "key29": "29P6oNHepHZmDCEgPsgJDusc1yMEFCBk1bbV4PhcKUy81Ukr6fkXE1xne3iSWx6sgUdRw18y69HWcaZPrDJgE8Ex",
  "key30": "2v2CLRQ4WFFT1oNrvtZNuHucoQC4pQmppzerC7tvL3u3p5ohYUtKRCXswoGcqYGWhFCDABpgxMpuiq1cNfoUx7zB",
  "key31": "3Qoubiu2z6DGJBgaj3GxyBgcvguxCVKVbuKa8TA7Wd2D8pZAAKf16eVkVUVV4k8ywnAwGBtt292wa5XtkWiAcQMW"
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
