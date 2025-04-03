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
    "9HyubgvAjhYoRNAHAVqKhpSPC97kNVegcJ3BtfPCQKBWG2tHkpHvu3BXQ7KNdDpyYocTPxNqjxY2ezrGcseywtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FnWjeXZ5EpPqfKCup2JV5MNMMRGCbe4vYPA7gHc4Utt5SE6itD15XQ81jtf3wSQpz3JVfoyyqoHWT3rNrhm87RF",
  "key1": "53BA9jo2rAh93DdHphe7RAihgfL6SBHSgiT1KqucQ6G2bDRKXu2i2drKAhue8eh7qLLCBPJCvUHqT4N3oNpr5v3i",
  "key2": "55wJPNU7T9zUAHvqLTKqRXhKwnb3uucQbTDS83mVg3xaFK94Y4T35FgWwwBZ66mHYayYBXxauWST2vYuMgmjwbG1",
  "key3": "33ny8kzVSLNnF2tPBWVup2mL9Ro3ukoXCzeyehEgYNi6AdyE8kE8wWWtoR3SDpTgtxzeK4HtLWmTjTwjHh3QD5Lb",
  "key4": "2PLuLfuBHm7p9vwHSdD3vWdYyqCMGfPHeeAit8dVyJoDejsT1Zmxt31q5KfwVykhpMUCkj2PsSzeRJ3yLEw6vWyK",
  "key5": "3Y9ZToxdMuPY9EWPcxA83Uak6sqbVFiHVY74UbTJDtqQWc4ymjYgcVinPNQTGwzP6FmLGWeHEYdEDxcNfPcGZCrD",
  "key6": "4qx6v5JsRiMG9pRWkP8YP7bd41etJUJaHXfrL8AhbufJ5WFEMKQgZxDxQjphfsEUJvaZXCLiqExkVNCaV2Ju4Bz4",
  "key7": "2zMno16uWiHZw7DZmsrB3DeXWR6CF9GPChijkkBARXP2mZyJZYVvccAkBErWzbW7HidM4pa4eB42cyrsmBHyLXsw",
  "key8": "4SCGMgyXpjtdQf4zkkuPooSEHt7fMPj6Eq7oHcmzZg8UbADThehPzH5xYz5nEvRcN7N6eVuNtxCFvr98cooR7ted",
  "key9": "5onhsKpnwr3N3SQNBECYpizvACttoMgierFMdhe8mshbhcCrgVCeojaMEXiiFLnVF7xJrnyiA2dV9NB9aHgUREPH",
  "key10": "41yivnb3xY8RGhmsVPT7hh6fKJWZgUrpgfHuhhByA8Sdzrz4cZcYEQrGB8QjmwtWcDgrR5dp6tetWbASqJCRzfrr",
  "key11": "4udPy1SJqsisfvKsRpqcuhsmu4hdMmKLgCw7qhNjQMyHEjHXMnepfshEnKPJJp4GJgqJvS4isFS4D6a2LFP2A2S7",
  "key12": "3JfLwb6DUt8HpLPV4W96LZyDKn76pVB2wuDd8C82PhQDPc3Xs2fBjNUKp5Pz3GN9v3bVEdgoGFK2JFBK9ZuhSxKE",
  "key13": "4Fu1sPPkanYbzQjei3J3pkZwbVTjcSnVGVQ6SRJyErxLDpTDiS5NYjcLxKxbUtNDs1kWuZtjrDS9za7gmDgLumch",
  "key14": "5aoeeLpnhoSkkE7663WoosVaq91M3XW5sJ9Rx5M4XqnCMYhec6cRj6WdWdLdCeHfAgtaRNJxu3mp16LGFZVuo1cU",
  "key15": "5CtwEHXpNqCFyHbbiS5LP7cjY61dKTYc2GHbX2jNPttgRBR8Qskc9MxYAxx6K3fFe72WmEyF9jWx9FNDtrURow1p",
  "key16": "5CSWFqYR4vEZmaiEuo5gksvpJp4XGeCAQY7nYYYyMcKnmJtWAA29Y6APquxceEYGUtYYafoPBH3wMBm5vsiG8yu8",
  "key17": "2zVzAiztd89tPu1Yebstj1P3ARc2bbXmw3sQWJy7BQ56rLZQTeueVTWjGLGReZFs6opR8hGJkorXh3xmLNELFsok",
  "key18": "3aiGLzPFTsH9KiCvtPc7SZeQvwVvKvFU53aWSRoGQB8LaD5Q47GsaGsGNmfXsP6jGSFKpY2x17rFtkMqw3qVLeWh",
  "key19": "7KrGpeGih9UymJsWkc9aHgB1GL9TKFZYNBbEDGXCgyzSwASdzCvx8Wr3Ank3bsfPeBWaTg976MSkEazBuaFLkHn",
  "key20": "4fUEUr3sEbvQHawUPXFRu7MyeHEZkmYoTFrS9VCQLNVaKBgg73Mzy5iFb8M5Xr3Yxg3jzdgiAspFqdYtQofmkhyn",
  "key21": "5bLifALtdeUrBGhp3UeQqyLBp4h2mV6TgwGZR52dUc7YXtpkgGTVrUFGAsRebgjms8shKxnnxVXCRtW5UTUysvD7",
  "key22": "2FGXHuLRtKdgBktu7tmx5budn2mXX7GNjXheddhMXcBprzooJBC5iCKWrRR6maD6iDicohBSM2YxE7J1Mu7Z5Uf",
  "key23": "5F4H3JNL9qf7pnd6ckqRZrtrMmpT4dKbxzTQGcT6KCNSVBcvy8ejxZrW32qWKnD3WfBuNMXaN4Kg2gXmFwdnS1A4",
  "key24": "gwQwzcuzMroj8Pi2iNRkM6fa4z9oo5HoMZiqwg5fsNDLebCoMkansuTq9dVTWPPZQRpgn4qPKtsuTeDRtBBFWhy",
  "key25": "4R1FxucnCKHgHTLPSRZwb4dC9Zek8gwnJRM3BwzxdjksCqTKLeJk3juFPsRiZ7bs2DUxgPkp7yy3Ak2nZTc4azLB",
  "key26": "NdD9tE6xLcwhoM3du6kHWx1w9BU27mH3zk3wnjVc5UGz1iNomkkENVeAGc5eJtj3JxDQdFAkHGcjgcE3XC41ekg",
  "key27": "GUbJknzFa8bCyEHHtVoWRpp2awQKcsRtu3wdDkFiMcE955zCZeAufi5xrw4AoPrhgrAszcwCWFbfqb6wHPnZaJY",
  "key28": "5UmCMAVELwdqKsEEXKewbZRcEQqdWJ6YbrbGJLmsKhg9VsDbWbUTuxugxSw5JAWzCWsKn2JqPAnPdLrdUEvBhTSV",
  "key29": "5YtFNTVaocTcULPiPdjB8ZZAjLF5ZgisE9QdA5TnBERsrLyyR85bCn2eu7be3DXRanAkiC2MYAs7oSwzaaLVksAB",
  "key30": "mSn62QcmaPrjDYPXeMDAkx8EjRfd76EniMsLDp1UHb8CqTW8rRSrdpQHNi6iLa5L9rd2NaDdUoN4arZqhBNGt5U",
  "key31": "2gBjdKGG1B1f7HvZdKkJKzMUXJKoLxZZibEYVhAbGqAifrv5VUdwoWfnb2jveBcMV6YXnAG7idr47hL42mEUuk45",
  "key32": "2pk55GJFPFz4rwrxdhJFZobV63RsLSyt2F7axZGFakgucwpGJTjq3XoqGS16UGApdEFqArrJgSL7cDGNrZUxxz4U",
  "key33": "421pwZwuZ3ybXYo6HwUcRirEZxtQvDuYSFZfMwyQa1s96LubtJKePZQUAGtLDV4cxwM7pS8efWGk6V3LLszDKX1r",
  "key34": "4G5f23sfd5AaHccy3vK4ahreh1YAyZJx69ZFKJKNTAe7CLyGqe5wHUURXGw66HDmppGqnkxNG1HMNofbdAvJV9Yt",
  "key35": "Ejw2GLv5GhAw3C3uVuUShJefmBa2BSRiyY4ikBCTsXBowDQUspHaBP7cbEioGqj9mFUc6zo61FM9tYSBAbhU4FN",
  "key36": "q8nWrBKxe5yAxTaiJVKXsXYySNf8fw3M9WP1ttQpSJvUwhRnFrn7TuCjiFuhcFLHJesESHSqv6g4uhddUv4kVUP",
  "key37": "5ZkmLkT4UiX9KLunC1A1txRef9Rwoo3fkqv5XqHX6Tf8DnVJWLM9zZgLKNPrNUtuTVCJ3C8Wxts5PHkpvaun7pML",
  "key38": "5cXcsF7hSYtH7cK5JXkdxxNXwQYk6powLuXdDmXJCmNQnprRcbzhDKLmBGSfbKzhohXGs5j39FQfKqcvoLQdWLJu",
  "key39": "5DqjMx9gdbMveKWL5C1BthqxpfDMgsV75hVfNQrJFvpik1SN57qefiySe6WpnLkRxyEZNVymjEmGZSc788DzGk4S"
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
