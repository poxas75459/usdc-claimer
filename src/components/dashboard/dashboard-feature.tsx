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
    "44RccP3UdbsK4a8UK2U4BXTzMCAWqPSxENrXWrJ7JEEP65d2meXpkKwfKHAGXoSxKgEZks1EuYYQSurCpKbTnAEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rq8Jr8jUnaofV8gmeSgiicqNn585Qi5Yzxja4HasN7LdqjpjA2U2mfPfmNLh5iCS1kcFWgkJu9cPhWivsvsDwXv",
  "key1": "giu9FnwQkUm5xPgvkB7LkLhchXe9W7YT5FAwfQsj48ZBoYBhCzE1QnMmm3VV8N6iiRe2j51fJRZwc3etxHz8kck",
  "key2": "VkhahCqToGjC829YJ7KMLAkSZSvsjZizxh2z9LtDDzGf3GwSRfytzhGxAEAkTdgKNUmH81NgMQoq6x97Piks3qC",
  "key3": "53aV76zaYiKTzQbuLKExTYJEM694sQqP1rM1RWEmkFX2esKg4Y7PMox4oaH2rN7wCjT8RaBQBmLAVgRUpufRycqp",
  "key4": "4PVi2EYMW85HVfm2EXm5ZB8KRGjuA95KX7MDAQGRYRUWHg1XphDpz3M4Ma3c8FdcuA5gkCuyQNt5BcEuKeVPwA7q",
  "key5": "3o5JjrSMsd93itgMhUKRyGyRkpe6XyqmBU7wUrN9b9BS7kL3CCjobBJeZEVY4wosfqTfJuyZwJRiUkDRy9ZvTpyH",
  "key6": "34j5CyamtEp5MFadaY5KfP8UakvJZ83FdBypwDwyJPmmRoqQtiXCCvf9qCdj1CCgcFnCxzsnJcV1dhSGz8WhCwKG",
  "key7": "3tN8buYqyvkmaXAoUNLnKgJaM21sLynqD8cPB3Bb3ZCb2oXbNpeEad7LEm2U6Y2GTaYJ8d6DwbgXMRoQ59V8TYNQ",
  "key8": "2SgaBt2JL2Jn8J2ZLr5JtaDWPfbfTnGGKbtJkQFEZqWtfA9gddPBPz2x3Xa2pVBUiPWQTRZbxanwrzbNfMuvabUW",
  "key9": "3mAeFMNkvf9rxPh5iT2ypHhPBVq2McbUYJTHkizEzRruxKqbNPDzww7uiibU92JqKG2GeFY6WTEwVkoBEsaMSJZA",
  "key10": "5ckPmsT7dbQyWQrpnV2ZztPk7PvovgPjV1TqbRT7hBDTb6qtJHL5bUnZFbRkD3YYUexQaPQmAEQtH8jaohVhdZmq",
  "key11": "413ybsgGWDnApVsrLemWew2VoFEr4s1QMVKN89NA4uHtLb4EXJocYzn4Grh3wv3u35LHxfQUi326ecsW5otuN64Q",
  "key12": "5GzVfKwqFeN4GbURp3cy4565K46JjLPTRKgVbuqv6wDNq4F81gow9JExvufQcheUkx5mEFBPhDLD8QmGqrFaQ3AP",
  "key13": "2D49iM1EysnRBGrRbdZHbTkftmBKWiui6NFy7tz9NG9Uu8N97AeE5mdDRYq4k9AbGXtzXGJA695nJbzPrKfzAEm",
  "key14": "4iwrDH2FMoEaRHyFWLfw9CK3qVAsHPp29TfdaJ9aWSpQHG83fqZrLBMqVPoUYKh3oNh8kaBa1JXWnMgvNr6Z3LuY",
  "key15": "44cXvdeQmkyHTu6FMbBNc8phZVUZ1NJvvZshcCwSymoMCr1WtGX3n6DxcKHiL93WoEa2Ru9LFo2LTWVJiL48wCFb",
  "key16": "3Fd3GpYGnRhJc911mcGTtcXJ3GzabeaSHSECjiFSftVetwyCA67bUDhJpN6L9NCUNSTBz8bXDS1RYtZcut9tnvk9",
  "key17": "4Ti3pXUeyH9RRf8PHDZArivN9NR9CzEUkBXMTFSPEWoqXsbGv7kNRrPgbJdpW22rdVnnbvnXKjsx4EkhFDG3CzuH",
  "key18": "2kRrfcpSchEeNSVipjjrakZqMEo9ceh5NUjcHAoYaQMrgHcNkdSxQ4yN1MC7SqaqBt2XyK5Kfsu11mrSMFJPAKvj",
  "key19": "5LVSyWfnZMiAhzsN8q4aqSvuLn5p9Q5izJjmcJPE5in6M8qyVVLjLzge8AsUnVvEYeA6cjLrJCsgbCgkWkiQEHw8",
  "key20": "5LKR74c7HH4hgcTmq1Ejr5TNTVy9Xy7g3oQ9hZQ4jqBxwZK6EDLbYFbDYmrDCDEVPu7V4VomM2Yy83fYd2wSEnje",
  "key21": "4hRd4cpgN8tesVthSKtUafGb7LFCHDLcJqoEb1y9oBmUDhNTgEY4Xg9cX3x7ybPW3mB7dHKkYCAHr5CRx4rJcB5o",
  "key22": "2P28kAVU4eUd2jG1LTu9EiR3v5dbPURD33zpnxPPG6K7zfsmYJhs18mx1wLXrmLZ7qbodQLd1YuHr3DQotsh755f",
  "key23": "3kZc5ZU2QkgAuSGRKJaEJMqSZ5sShbb1kbKCLASSSf6xojWkVsZZGN5uPh9C5VktcyLVHAgXBK3veV45MgTusqwR",
  "key24": "uFyTFrYL16cv2uoAcHcMQgomxCsEBafbRBPXUVY2JEqrDYybbFVbVT3tU1CwF8QLdk19BUDRqqukPrpFHgHYXnD",
  "key25": "3HTCT528Nj5Dugn8TwEJdXrCpwgyxJGcUBcx3rjJKAv3smKwbZMrykTpcTkj3tQz4cdkMEu4FvFgnWX5EJh462aH",
  "key26": "RkzrLFLcUJCNhTfFRM7mEGEBj9GTE3LpQty9mvsSzWNMy1u2bQ64cLFuuxBecdBYMNQCtuhV7yf1xzC2uJhabD6",
  "key27": "ggAwuJNFDJ2FuUAJuC9KoSKEG8D7BgtqobsDuYzFnd1Fmj3NFQKg7F25R4DmrPNspXfX1DveFfMkuNo8M8T6hU1",
  "key28": "4qW4GZBrnLeMqqbwQiLK9YJDquR5L5nwXrZpNJpfTEtemtcSrVk8XFC9SELxRLXxdsmQmQjbGHz556Sencm1LcFf",
  "key29": "4ti58Mj1SSeef7yKBACawjTEwGs3M9r5QgqbwdNktSK1hhgEXYRgVGx5cpNSyR774SxC3cgCeVz6wW1VdhyZEa97",
  "key30": "4Fe56jqjcRGFJtpL6MCmF7d9MvE6zcbbhk8oN5xtJ9LoqVyoEQ5NMX4NewMHFNM9yh6pboTVT8JuFX8tDXpxG4Fn",
  "key31": "2vzaN9eBEW4i1aMUf9cJaYiPJuJ5jKhs5K3LfTVtFCEFb3rhQ7ADf8fUaAkGGZCuj1cMcXRw6C5Rf6TDtM4ZEC3G",
  "key32": "Aj4kcPLmVxY6ecm8r9AgpdNcYUeZ3X2LqgsiPWQvbyYzqnNj36cVhHYKQ17HaTwZd71m31as3egY77mENdQgMcf",
  "key33": "h5TpkSJfZLD4KapEDe3PJHWcsjz27Mn9pb1DoUVf1uvZzM19gbGsVSZPhVCZH9aEqoUof8CQ6yGmHXDhu62R6wS",
  "key34": "4qnJvUmHq5qtqhoVLD1YhQrAFqQm5cT6aSePmBZVGnQDVudbFk6DEaBq7hue9zzzB6jC3GyCji3WSsnsy35MuR2k",
  "key35": "3WVnSe8bEuEsx91owLKgYFXDudx9ZmUT4qFnZhbqqY7XceAtrE1HQRxDTsyxKAXLFq5C3Qif1ct4o2UeHZdc2zM6",
  "key36": "4yR4pzt7azFJ8iqyBD53Y7G2tLdyJhcubbm4Fs7yEpDDuZnDZdNy1NZ7gi5ih2a8sok9CEzAdn5Y72UqK6cvmS7N",
  "key37": "44jZaqUHyFLUcxxWZEbgrnvfWfj7SnbgHgMwM2C1d9Lx1TBXq6L81mFuNmyF5WurvrN6ubdjbJxh6tztg1TKczYw",
  "key38": "4S2UjiYG6usBQCXbGxRBH4PLJ3PynjQ8Y11UmBg8GUgsDT1crabswKMg822R2ZQefVPNnCdGBXV75xLyyfjmPchZ",
  "key39": "54JbG8FvVnp2dsYBzmUbKEoQ1q8Gn895QCzBYUXmyCmmBLb87k4mBekT69TtPu5t6ersY2adTvYSeYv2rpGFdsRC",
  "key40": "31S8NiJ9dYm3Fxf7AoQa3pCmomEh12gwBym1Wcq5BotQcDjU1PHiBjDXKxG4xz375fif4vUmbKrhfHbch5freoTn",
  "key41": "3KyowUcZcyRSw8McKBX1UQwGfzJW2Y3qGwHfnFSRJai5Pa5vTMLwNfPSVH5dAd6zdYXP4oUieKgbM6DgR2RswgRe"
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
