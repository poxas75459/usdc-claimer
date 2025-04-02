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
    "4G3PF9oe7as3rKFcGSWY1RMuBipYfNdhCeNv9UJJSB3JaxRjHzdh2CVp8FfDHD5KXppsi5jQXPZkWHGZLQNLHJWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sFwXJwKxNN4PC7NQ1RHHjkk8C4azWaNwG4QSYmCxTM4GFChR6NubdwniYRKZP3XERZwmZRZdrGCjQYZ179CbHBt",
  "key1": "LuF5QE7LmnZEHsnQWYnZ9CZ3gseY92sVjpEMVqdLnNxJaVEVrywPh2hdSZkxLAyfKfPCK3zPLZE68LvB2sN1pTJ",
  "key2": "5xh3uYMw9ufzo6dskwB55ufaC15CY3yRD8i8xfvGCKEToQbYE5TzuQ47SgoN8bbk4NLenZ2nj8Qd2wnYxwvbwQ4q",
  "key3": "3Z5yHpQaKduWqXgMSFT1rKC4ZNTRR8NZcSPWtTCGZ6gnHBS2GsD3ScMfWtmvUrcP2hB93KoSfUxEhF9b4pK6tAak",
  "key4": "3ugXcVwJmGK2JWV2YjHTZ222WdfHwG1FCdkpDXcLxPVtRdSf3Mms5ZDkqtHLXny1QPLuuQi1ceqXKm2oUaoDGeLo",
  "key5": "2mG7dFBKL5mHtUV8Tbicp5MoUtsp1u4rMr3XkF16AF22HURVX2eKsLXvprtwCNvLBR3H7PoU9CqvquPBJs5FZ33i",
  "key6": "2RuRbhgfNsk8fBD1PLTeWTAFsf7vYggMyF3F9oaoNdixAa4G6LZKQ8SNnLjUb33pN4Hmw75HzfytZfZGXZovYvUj",
  "key7": "45R1NPPed86AU4RRzwzDoJYscjuXQi2ZaVFZWNmmDXxh1aUdL1wmGFz4RR8YBfZ3yHb3dw5KPjTWTdZG9EP4FGmF",
  "key8": "2r9CbCbGLJNmWgDre4L56uZsHuxLmiEjXZHCeexTSyDyYessbDynwVmqgSoF5bFfeFAEGJ4pot5myCUNT32pRGD",
  "key9": "3PM1eNU7b2EKyFCjJfha6WvFXJFhQ4axyjGwngduxGnUUALcduARK7dUgPTtNVnYgC8fKvhA7hYLPBcGEHnuZKsk",
  "key10": "5815sT5DwquZDHrL7hpEcV4dQQE8S3SWiqfvuSU2Yd7oofwTMgVE8hXS28J1wWYPcagq1RApJqddq7WKVdEfhSHu",
  "key11": "ihbynxe38HonJQzyBU2DLXLPFqyiUPAKxNeVeyc2rYxWybe92KQ9B6nsboJNYbCEsrjLQ3zQbVUJGuYXPK2khcg",
  "key12": "2ohKu9Spb8uYhex5ND5r2QJRAEy19Voii33Bx7S7Vc9dwxBRPoNLhu8yXnMqbFCwJ2SkZVvx2pnFo8DcpsUR8iXS",
  "key13": "41LSEP8y9HSppH7SvmuD1QWiYv6WhjzKssPmuNzv7o869P9yjgMqYYTRa9wrYEx9Pnijo4p2dAAhFe2ttKvtJ75W",
  "key14": "32GquJGofvd81wizWucxaB4VwgxYS8RJbdaGTtkyoXi5bu5iAtE6t8Uq7DP5vQKqWD8kyXEjEDgNGvQH6VyZLKQx",
  "key15": "2nFJQ6bYP37CNakVygMfBFgZAQQAMsAs3VKBnhQFkd5uD69xVPRY6KABYuC3h1zExDAfdHGHNCZ7VgYu3G5CK9KM",
  "key16": "2ySm6wJLbvjg3DVSHGSTpK7DzUYFwbKsAbo965oxsViG4HEj9SUesLzJuLZQQ8eZsbJw1cX1yQcQ67h2RoHv9j9X",
  "key17": "2W5ZWWn6mW2iGv5AnNq6yroZ7ZYHfNRVufYCRQrWqfbU8Lfet2kcpRxqKz5sT4b65DrY24o6M4C1Fw4iHg17CZ5Q",
  "key18": "5CzA27ajtNwBspcpoJhKZhWeDQmi332MdDCV9iS8eZYUiax9qri7D4czyJrJZ2sAJ6o44NDUpNVVBkjDaZbN1nTd",
  "key19": "5XHmdxr1pyPZePsx5dfZBfhX83eL2DfppboZdZtxcvzWduzyPfVn64o8CEd7GjWsrnYquGfaWAL6BHNCqd17akkH",
  "key20": "48GrrRo3zSxsKr3mZFA82Xpr6B32em8yEc7uATnx6a1EE1edUv5vBTxrWXUA96eZSefP47JLbRcyQgN5pCoAyzCm",
  "key21": "59XGwsu1dHsGu38xZaAkAcpTc4jtskZgBjpKdDQtqoQLL2aYHVANdgGLgb7MWrPXhwXwe1M619D6bMww5VCXr1Cw",
  "key22": "4ev7LUEhQJceJqpovfFmXhUgombipVWdB4YWsyGi5HbTwBjtjFah6eg9D4F2LPhiN7L7Ct7zDggsWAtGsWUVQXcA",
  "key23": "49FKu4P1T6TKreVPccJRe376T9xCCk1GQFV9Fo9PEAtknDkMx9GXt9DwTZkZ4Ao7RLQpxFCJZk4FyymsxxkwUdo6",
  "key24": "2vddFwyA7xtwT5ezx8jkqm28ixgima4y21jN7eZ1Ge8ftz65XXYv3HnwiZehBU96eSfucMvH3omKnANSAPmFABUn",
  "key25": "46fuS5hR6AkEn2iHvZ6Hc5EiYYmzFnCQw6TzjQkQogthsbUXx2YMiB47Zu3nhvuRbwVtYU6U3mkhTi9H9m2VvvNf",
  "key26": "2xTSsRqgYdigFBWuzJVv2295xENiJ2vmgcp9v29mFoYE8y4jtcSLjXdHqFMwbG64sn1a9NZ7e9NvpSjSXegE5XaS",
  "key27": "3ufU1Gd4mArvxUCfVdrsgwPh7Yza4DjNVmuCDY2Pt1QuXfDoEbFB6uhvEJMUf9LsEZihnXHK5WZuww4Eqiza3Huv",
  "key28": "4Ch2ypQ9YmJ9jWNvLhVokYDLZCEgj45eNvsQTAFFBCw6p9ZJkhbAkUG47ceoj3o7YkoVT2JX3XBRDPGXpBQxBWA2",
  "key29": "cU1aNA1Q81XdZKjtPPxRFU9Xc14jwVyq5iVdYmnX31QRVvb65HyATjxpyDu1MLweoVV8a6SSD41T3qV3hBUDBED",
  "key30": "3QmnKyPqXMrTak7r5vZjk2KsjeWSJw4yG2PiHuZiAGpFNAiz2oNZFJ6tcDq483RmtCdUKGL3jNCg882MUPgU7BiS",
  "key31": "2CwDth4cVHqmcxTWQx7DnqLXeUdtp7ZXEqxeBm3YfLp6CQgeaC4CPDCPGbrd7vzyaqeijSMugYDUn5V4MBEjDX2z",
  "key32": "4ko1bpeSjEhqA6GRvNaFKXtT7J1YEwNk8xm16wXaiRkewF32D9e8HUNrY8y7AoBMoMgAQaXiF2dugVc4pPGvhFhs",
  "key33": "4qsTerGcGjiwV5YqMyf8BkqZunugEe9oF9p22ADLjEfVo9X6pzzf9FMwL7Kmcd3NLErQcU5nvNrX7pN2nWuoHbcr",
  "key34": "2gghaXWK1EeW8CEqUv41YTqpXbVXLKvT3owawVaZnpm7ac1t9Wi1Dsd6B8HHE6hmhJuwsF367iF8CHJrpzcArGtx",
  "key35": "51FwAwRCsr7GTkpmNVLSojEjPzW35Gg2PbVb6z2DwQbFq2Fc1R3NZ4scDfARcw61RjiPwFkr8G7MNyG3Dfu9dTHq",
  "key36": "4gc2pd7GbwkeZA1n14fKxMBHmZkZdkcvRLmCwKz14oUSFbFcMm7aV4UqwC9X7ato13nVsU5u78BHeQ45smYXubj5",
  "key37": "wRupe9ELKVakJUBHkgXvdyn5W296iWNxXocKnT2nZEvDWrh7H98e7mBuUrhUamUBCHEsAxCTK6RrLfhtizpjtRT",
  "key38": "5F7cA9uKjscthW6LpfiXkkPJPmtCShrA2ibHRjoi2F2sLNkzhxC5nf6UWnhBstLNnTkmL71KVBEYWHdRnajrq6w5",
  "key39": "3AXZukrHmbiYBXBFa5KRGvQH8ebFnqRXQmWqmtJ957Cp8VMpTitUukhxhutnefRTsoomtmFDtoyie6Cj9kY9NXMX",
  "key40": "2KR16togBD93ozD1AeZyQ1zTHVqJ2eyn9hxYD8jkbwgCrmNGo5u5WAdBcWZjFCHxmcDhsLEkzyqtpdHZiGVeVhAy",
  "key41": "42Bwv63ndcJT7iDaKzmCZU8ZLJJ1hqs8jwYvK2JSSFzupPotGurgQbg4pXmRr6pePxJ4ewXpPSNGe66HDUK7fauZ"
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
