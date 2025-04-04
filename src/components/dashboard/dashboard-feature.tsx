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
    "5hAWr1xNwf9fSxENfYiZS8BedPm3csgntj4YGAaShGgB34pg9qBEdGF6N6JDHg8pscb8jJsP2tqXzPRp6xeTKKrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s3TGqb5rZwgs85WiyrkgMvWAP9SEC8BcXaBhUTgrBFm4yajszq5y2AFKNY3BeVRLV2d7SpAwJoez8LEnpBt1hKy",
  "key1": "4yy1mB7uBExF1DWMuH3vN9Xgi4meCAQUxosvg2kesimWtRhj8xx3cGtLvqvSAkwtA6N7ZAAvWs8GE7iK3b4JGXv6",
  "key2": "M5BWscHPgwTZ75mnd7RBKdpQmY57rfUHYVRDatAhxreR3Zw53FNHgTDVL8SqVzoPsqLvQ2Ng68XcexPg1EKf5VX",
  "key3": "3ZoZyLe5m96DtjQqmHB3cN4Q8LJKwzSpHaEYf5PsR4SgQfktNUugwqJC8JzjWfwJruKLsarNaVbrimJbix9F54YP",
  "key4": "5AtiLSyEPFwNRHwEYj9xgjxm48eoiUi22iRjb6jVpMf68fXfmZQWeiZkuepoztHBtCfTVLVoYtfJGwmDRTQEyYzp",
  "key5": "2Ta3YziDHEbkMA5kxAKPenCRmUk1d5QkLNfmR1tT4qEihucYriS14d1pdH7yNKqiZQ7bTE8pg2M1JDGxGFLmKK8r",
  "key6": "4VfihurCiHrXrkxkKBZ6F2HKd6E6LH48up1n4KLCcSqAASRfHE6VBVWvLfEwqbKHfWHgnBggLJYe4tgcfSFrXVZV",
  "key7": "2tqJnmmhyPyQWc5JovhnWpY7MseTNCN1SU3jXbmaXuH5Z7wm4dLrdWc3TsVmpwEoMX8WvqUUyTurfJs3xsieKc3",
  "key8": "EyccVjXcXP7xs9w6WiBF8Fd53LGQb7P7w4KhJoh7vmmxwaDFPSBYbyqLtC7dGJhSrNpsmQprqCDEeF4geUuLmUv",
  "key9": "61yEsgxiWPdSrujzRgLsA2BLEjEYBpzbmaxwgoCR8MuFETMKgNpW37rTCiGMcAic3dCtX1RUMBW2BxvTZnrvVPQY",
  "key10": "55BXJUUwkvACZrWuVi7BM5NTGKTRi7uAmgKtfd9yobjx3s3GA3VWUVssGor6ao9GaGAja6RnpgepRFZSqUCBDcSy",
  "key11": "4bVAP5hDTj2FCjC5AHfjAHx1geYF5ZwMLaMbb8xLuqJg8C5GdhZTtGgs3yQfAd323sZ8T73LVCrNom9a64sqfgnD",
  "key12": "2WvXuK9A4zQ1pk2Guro5ieSpqo9xxvkFTUT7E6PjAfrr2zyJofwc914zJT3ZYDJhS1bMhd33gn62LwdUsWAmCXq5",
  "key13": "42kBRPZC9hw8GuRshdoq9TCRf9YybyHsM5mbx72YuXCzXNyS1BuB2uheDCv1Eg33cmHK4GpGJEit6oXvBccnTNyV",
  "key14": "37aWCNzKNDjUEDVcE32WD8hSgr5jroDoZATTUDt5FMgXTfYdTQQ9sCNzerSQ22XFz2Bqc66q6zVB2wxL4xi74qL5",
  "key15": "4JeWUUwdTikGs3h1uMfuMsPs96RTScEKKj7Jj91v3WZiLCqGD2uQkzVMo8jQjoD484Qx8jkdHnfoBW6KmnSaFZNU",
  "key16": "2zVNnmPhGwnPNgy9CNh2Fkns5nmV41Rp3Ah6ihtScbXGFoqauJUHP7GBbRvSeZpxeCuunRYdvp5cuBL4PMiABayi",
  "key17": "5f777VTP9mX6QajfCteQGSGWqfXXz7f4HpZivNLVjFhisdTut7SKS4qz5RvS9EH28CUczPPRmAZ4vL9SUcGdbtGo",
  "key18": "viBy3WEq7PuRd9HsbVzPZQveTP4uvhxuWSTppA3EjPaT276f38k7tMvfJ3wWBzQ6ygBDs1Ty5q3Dy8H8VBtuTTo",
  "key19": "4F8Q5n2zppLPY4UngHB3feqQFLyRbwMneZY8E1tZCTaeAqJxfrtqW1Af91oRqZGbfzSW58nAQQDrHvP2pU1M4TTU",
  "key20": "3EV1jvUN7ebdkV9SYt6yq3X3tdK8fRyXBW6WQosQ1gm37RgetWMSHtzzyiz45ArjznTfsTEm4cF3TfjEBpq1PJyt",
  "key21": "3Pi5Lh77fnoJ5pMZrPATph9jKKk3JVwvpTL918d6TC39AL1eXDKnsKKzQr5MN3aFpXDr5NKQCaFpCKS5rE9SpvKY",
  "key22": "awyQiW7HAMVVuWv8uTiC4Lh43jaYuhPcVqYPXWvwrY92FZr8AzhB1GKrdGfXHFhrN8SnGnnobqzfFwX5pbQCeug",
  "key23": "T6kKYiriSBiq256hkhm3CePDShzwJj19qJYUPTQcpz6rkV1PGsK5XyL3eKnqDTkmSKuXEzzArVAFRgiZFFnKycB",
  "key24": "4KPP2iQxeD9j7KoTKyyn2Q4mXj1stzNsKrAhtTWjRZqTeyeQH9hh43TahUZVxZrZyXidPMkuR31eWeBpVKcx6cE1",
  "key25": "3CtwDUVyEUNRiS7Z4Hxsi6CQb7gfNDVZgop9SLpMur7wisoS6KfjZzaER56frFJdKLzBnuMHHbSte73PgSVB2SkZ",
  "key26": "3PeBmLDH278Sro8FkoMFwC3aEvuG3ttA2dQMnGkbz9PVa14zqDnrt6xpdRQQo1A2jBcMJq5Z4svgXLuf2kzHGbmm",
  "key27": "5XWuJ7VMYKQMuaozxpjx3D7mS1axmXwdTBcCFMCJwYgv9S1sUajN3aAVeGVyd86HfoePJkCpFPQYjyeipmyyti6V",
  "key28": "2D4zCZuAtktFxzDD5z13bBiyqBjtDuK4tiGnstDuVV9d8Eqqq14H3pkVpkZXemS8CJdJhmHEdZ3s3zG1wnkJnaRi",
  "key29": "DQWCz7Z4sg9bU8sBxaEu8MuUCBd36V8DqMpSz98ouaESAhzgFbvjGzydDWaRvigGW9pRHN6gYrbJeom7pncY7a4",
  "key30": "5vGkMMM4nq3msUU4L6AFAQc7JFakdaebFwEjH3bzoK1oavAmUzuDM6ALUnZ8TBRsywKb3KuHPunR25XGKvkqRDQa",
  "key31": "2D6im1pPYXG7BZMJtRZh6Nu8HXqBVqPiHkQ6uERK3x2SRBy2F6w1UfzqGUHJQ51SUwGRwT48p4VnMLo6rcsjQW7Y",
  "key32": "m8QxL3qSvq3RSVtwDPFGPXqrkvC6AtiZv1qGaGyxbNr7oYDXtfmvNmqv5yY22c52tNiiL46Lu34GKUdN6uGc6Ua",
  "key33": "5KHY15kvnpSyHgv7fTuYyuywVYKFcdYw4Vj33WTdykAEhSE6n8q39VJPATa8cXXfYQuQ4GbSafHUNFt5DMSxBbhK",
  "key34": "3vo4i2VMTA1SCdJPmRK1yWY4q12bbg7XGNgaACTqmr6CoJWZtmEvPJ6sFpLJf4ZkkJpebYkofroD92vf1GiURVfT",
  "key35": "bURkQL6gRtivqTapfc3qMHUfPfXWdCmugg2UFahpW5wfbsdmRcAddyyn65qd2SfXyDLdQc4QbSZoZkmCHXwR2ed",
  "key36": "2mNiKLGfRMfSzRPiure5Q8VqmfPCSXwjeCSx1gcvA5SX2DwCanswurS52BZT7DiMtPbqpayzfYRxiLASJHAf6t4S",
  "key37": "3kyXutQCHipHdbmFKbiNgyLLacmrcegLfUic26HsqCNGQxZTbwdcxJj1U3jbqmiAX7vea8Np1S1gjmJPENFLgxiL",
  "key38": "2TbNyfH6wFDagLeeCvvUS932TPcqGHBLTUg7zD7Hszeh5QbDgtztMB1EjiANfN5Ads17XYPVeopSu9vXUjBSmmu",
  "key39": "3DFFBn6kSBgi4wP61R3fEudbi4TxctAgRdedURc5WSDNBiNNzMFt6qo9SJ6CJzGiiVBjhWnX866ZjCDs1KFnQkPx"
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
