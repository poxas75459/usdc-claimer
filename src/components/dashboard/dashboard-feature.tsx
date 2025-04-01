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
    "2uoN8LMkwjiijUF2X8Kuu9h2yPWAKDtkwi5sjPNLubZvEK21HXKFnmKYgAHERra3sLmzvqqSSwxgYxTpCUY6EQxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KTDfZ3teTcHNf6iggUSpRxaiMVdPDA2WJ8d7iopRedxDWuuBT6Gh4SBv51UGrKjhqVesimHPKDMe2fe5xtzVc7h",
  "key1": "4M7j75TfeCsWeg7MJKkbK4KpAu9UrFAAEpQofQfB487sH8TX9sK3wUKBBCUB8cxANaPYY2J7dSUW6KvAmtKzsoSB",
  "key2": "7SseiZQ9Nv6755RyP9nkxi9T49kA1NRJie7UCRdFKxytFReG71CkakMopxwojwSuWKCrnDo8WffDpCCr1QLZEzq",
  "key3": "276w61xPMHK96VVPJgdQ3fMMVyUSwZe5hcFwSz1RodF91gQkVYbTxGXaX6h5xYbXRb3FiWkULMXh5LbsK9jcFGbb",
  "key4": "51eLdn8gXpYvxzHahYV6VXVzG3daG13vUJD81TNY78qKEmWqYX67buwbEinti48FZ3keijoCr2jNF8RvbfJi2GAj",
  "key5": "2PfWNNppFVrQeqE87yQLmuRyFAazF6KZmVLFuvYsKF3CxLcSob3zTB4mx5fL51Hc82aRJG684gH4SJKwo66h7jXb",
  "key6": "3HmhwwYUSufbxfywWpdHXQt1PJ7eDQFgKgGokZr9HQYf6yWxK59qA4sP4HtxfuVX8VibJM3Hz5jvBPGz3SoSVTSo",
  "key7": "Ltqivp5p3FxrYG8sTfPxVHEVRayLZmscdssHxKb8ECvvXD5ejDsa7NfQMuxz8sagzwzUC1NsgG4WD3oY2YCunm4",
  "key8": "24VJ4JM8h6M9rTwnvF3PapYrbTfbDwEUJJmmvxATM45xBafHSqHAiJXJ5G8ePK55bPBTZAcHfqNNvzk1ChUf4T4X",
  "key9": "4QyvSg8Ze8SXgb2YWz1AAq4YytrvoSJNKg5GsPkz1MwMYCb3rmnUsue92o6Wf6PhQJbKJ23gTiv4b14kL4evS3dC",
  "key10": "54io4jnxScreUuMtdwKtrPPbLetEkez3NbCHxwFvD8x9n6Cy4hqzvUXstSM3Xc4ZX7geBuZ7DgJK1J2rMx35bp73",
  "key11": "43yGUagNWVKhD2Lkz3esLTurT3aBoKem6shuZxDHuCkPzPfudKeeHfctS4pgVPbiKUjxPGkKtPPnnYs64SBHPoFm",
  "key12": "3oEVwhmBUNZGhXmPkcBS1RjTaQc5K6NYER9mu1rLEGzmggkbgLD1m4KC4e3YdHdv68cWFCgRtQm6pBcvBasL9P96",
  "key13": "2N98Gw8PaQac2CmDhcGQWLDJ48FnwXzf416KtDVVDAmQ4qeFm9XZJj4r6j7Q5YjeusRF9fzquxy8hWp95cT7KGR5",
  "key14": "zLLkvmYmcX3r5JvYidPGHNb9rnduUqyf7f7KSFvnx36aPEAnCWFaecvXxpBcNRLPjYn4UPoD53639hceDkELpL4",
  "key15": "WyuAKHXU88SZe2vcDVuQwEeRkrAAzFbEpsTzq7SKXNEecDng2Fzi9uuNXEDfHRvUdFfwCh8NMkF1xR6uKe4EeBU",
  "key16": "61f5e1pGNaqZFoRgteLf4UK6AQLzyTfJQXMjcVuhBBBMM5mxZHbgzpvtPP7sfxZeBjKCJUAYrtpuewuMrycAjgnn",
  "key17": "QffTeH66QeJghJD6cBuW1Cckf88ZiRfSnM1UKbLrvibnqka7RqMEcDxJKcHDvu9s4tyfi4xCungutKRsKHXvpUf",
  "key18": "61mDNKZBNNnowqgju2z3sjRxUHASC2fGt5pNqD6U7YEEFU2LEZ5wgGsk35HCGoMZ7BHTw5c5NXovfZKc382b9JGV",
  "key19": "nzj4Vfu8dbgyMdBBJM23bmVhS9Ebi5uJPnc3JpkwYiZTVLvsucuMijX1QWDLtuhEXYHt4Sovz2EELFq4YWGMu1c",
  "key20": "4Q16dEMo6cA86Q7UpoXf81WD99rRoNPRf9vC9Lad1yfx35S9i9jBi81jZ481UE2x9Zo9NQr5ojpuPGp6LBehXbuL",
  "key21": "vzJodabV8dQFfcqKzSiWF8xRMiRJhgtKrfe5DFduv2JbmHhY3FtyWkp5j7pXZWMyHr3bNPctXQUiAQShssbLZsW",
  "key22": "2Cm96mbvQtPsYuPZBswso8jREnMKiszAqRexxFMHrGkHgKUK417eesheSxb7Qrh9R1dYyh2JZVhnbnwtdnG6nXNh",
  "key23": "5SLk63RuPSgvuqTDCeuc99ipYxo8Z6LxFeGtW4uuqJbszbVHyrK287Wp3Ujg5rEoJYQJVWrpGv4CyqwqeLFA5sKx",
  "key24": "4J9NPhS8qVERJ3yLxNgbkgjZxaUHjgquVnyRsAhak2xDZzuQ2iGzJVQNWcr3QYYvTsMozFpUyJgHEF4wTrpYimBA",
  "key25": "5sr91RfmDJJYo4uQe7fcwdcEMmdHWwu27BCpm1nMaeAKwMANq35891cMkTjxos1XP8vtmmgtJJh3i3i9SzmxhyyK",
  "key26": "2r7Z55PKdqvPEHz1CAWKf1BnaYjoFDB4UWLj1DiUP9r67Vg2AQQUqMVhf6f47yVatyYfFuQgQGYjqELpN3MmLSwW",
  "key27": "3GRChDgyRJA18ByojvKfbosNF8CwSBz6DEeUcwmLtxSBKjjmtxei1u7GzuAXkcjBo1j2AxXv1J8Y4LxaRKRGjaP8",
  "key28": "43XoqHJYveVi5cMCebpdb2hdSLHUzXLBqbqXUEnpDaczz3Z3CpQbseMj9Xm9oeghePvTgD9Lov1acmvuEJsrVT71",
  "key29": "4ZVgEH1htk8JpztLu1aQafE7pcRnKL6qdMy8mEZD2wyhfq92ZWyXVAbjEbRJokRPKjBsoSC4VGYQtmdZWqUXnZwY",
  "key30": "2oGtZ3g9SqFvLp2XWWGed9YEenDAzY8wPDJLPYe9bvLadBEkhY7oPCSMpqtK7EHFNjDS3AwgM7tX8QAoNtRSobGn",
  "key31": "9gzrHpDLjc9EGvT2cZpHBAAmqqiN6uQRsXDis5KJ6n79z7HNSt6pV8yLVuZsVpvgKr2sDHsqZju3hgoTYJpFCk9",
  "key32": "3kERcBCQzrRdMt7xuJ6ptdeoS5fonsDw8gPy8ySwy2HXhFgqokfbTti74skdJTm6N8BnQw8FKMCKdF6JMhc4qxTr",
  "key33": "3My7WwAVpD7dhuMNGkx4BkQybUNUABJt9sqsAgicKPGF6NEEgs7v2PdqVmWFM9PpajUcYbkrVhQBBEitufUroCQn",
  "key34": "s756Hrhi8A81PuqvLC4hathE84pjNV6dHi8RLDQUmHXxuzWCwtjNeFokiGTgan6trqXuZCqAmFsaFedE6wjcJJz",
  "key35": "5nDPEXVoumS2CdfyUn21QPz55vsugFnL8gxd27Mkg4FGPrFfksGxfPrHzAmA9Jh1g1PMmKVZ41VkkgMqmSyGaRVE",
  "key36": "3JibcxzwVtVLCvRQxt3QJ43xdbL9BzhAJ6zF2rjT7R7bZ9ZwJHaVSXq579Vzq1Y2CdoXQKzaiqKGGZTqySZ4QnDB",
  "key37": "5sEPgezCkUWZ9kuajq4etggKzYjKQHRzBRKxJ968SMFUqnmRhQipVjcpg9YGwJWfx3BBgDpsd5nkvTX4u5jn3yNR"
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
