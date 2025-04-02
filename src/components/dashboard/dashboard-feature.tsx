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
    "3FDwehthxtFFs6NqewbC6Hj4xm11Wu25aNkJCxHdAGGJ7Mp9QgHfbFnVZvbT6RTpZTE7BpRKDFd2zc1fkjNMr7uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67KhJFDk84qcKubnLuxHwCsZ5eRMPCnz4Nud9PEmJyzg1KtzvJj8UZHhke98f2GAy2Z8uHjwCUD6MKuYJMfPfsAZ",
  "key1": "2oGMtZUowZo3qLtaYjuhJuEqQWiHniWb8E1qjaRWuH5NT9Tsts6vsgNj2kddPkJJypChBxn9AWZ7rSYrCPiFyhhD",
  "key2": "vedD3hDJVCXKaCrPvXvVwGfu2pANLz3GETqi8baDw9nPvt9xfnh2UiMhkb6h5vyoVHqrrx7s8vcmXzAGhKh8P8w",
  "key3": "26vxmSUvBgbTQJpnXY6mZTtLdNYPYzF1yC6J2YbKCmB1RmGfMK3LkMRFpS1mm7uBf2FMSiELaJUaNUZHDXP3NXdA",
  "key4": "2yBSPebXyuzdhQX9MxUBgE7guBwodMy3YgD221GUjQnZmSBXhF2hktSXZHL7Hf1dgVVuswbBo5nLmpZf8XqWeETg",
  "key5": "6SQ69t8UuGwjbeA6Txqor7QGHwyatiS3aAiTy4h3nbByfsHHvNcxKZraLqGSQCMBL7mGV9pnHab7egdoD5kPCVM",
  "key6": "feo731rMPXf95i1gj6h7dUTg2tr7E2KHK46JZbsTHn8Hc269pvYxqfcSetm5HmrquPgNakh8tUQMWgXZ6AkFaLT",
  "key7": "5NDXWq5JRwBmEgQtdEESqu6AjAvYJwqfnKmT7aicJ1eB4Yr7MnL69XTEyR2dK9Kowb164DRtEx542AoQTDNprt83",
  "key8": "4NmvTcpY4uWKf31VHyQjvnunT7KzapeKCBtfduP2NgMtqSQ2tMixqdkjSMgrbWpZFocDVQzMagv9Z9iAaD5C7mQ",
  "key9": "rp7TmTw8NLdkyUq5r9NPGrHXmMu8GWruQMBKhkYzFUnyZfLjokUGQyJw4E5qSEFEdYrmzCkR8anQhosNgdbeYG2",
  "key10": "3aQi7mWyBD7V1nkY5f11pMzju6N5kmAvVhdLqEBk1oZ2RNHqiYBiCxLGZRkvqUnRPmbBfTq3xac8XDWveJpPjoqp",
  "key11": "4LmDmPbvvVW9uyKbm2ih7eoqsw6uVVWrnhVijvrJitoWqs5EnGgxiXpmu8Q9wMkmBJ6y8wUWshNpFVPJV7cGFwSK",
  "key12": "3Rf1sRoDMezg5REkE5SPu4kjTsgybKJdJd1FmcF6ow888V56sexc48tzPeP97MKDgRNnSy2Z5n2wqLB4vN6pHJdA",
  "key13": "o3fzoDM6KH7CmMUEPbFo7kGyTtJVR5mspuPq1E4g9Q8QP6EhdJLawHvj3ag9nTFqqG9PDttVwGBAoWpTRsRYK65",
  "key14": "9mUgY3Z1va5BraWyheJ2AxWAcmCFL3CiiNeitz2u48kCK6shDKCbyhLCpaLpPkeNLm9ffW9SRWTYZg4eLLMWxeP",
  "key15": "2UNGrQtbokAieoLherRd4pHhL46uBwZTJBUa5pCryiRoNCEevcCECQ8RooGZqNJhSn19gLwSrB4RM9z3r8jxShnz",
  "key16": "2PHP1r4Y5kjEAw8sicmeQd11GXnoK8VX1VEwHbzKfo6QTzW3bXviBLjjbSmgzNPvHk6CVXPsezBgRv7tdmASx6Md",
  "key17": "p72zPudx6cEhSV98MTq1sUDevSMinHeu6HbfDjMrqoMCe9xYERVWkxjsM1yM63p8W2n8JLMRh9g6LXrFe12LP1b",
  "key18": "1HVTR5AWBKn8oGUV7hP8fN5hEV13AxwZaPSKu2zJ7F8PrvWT7Fq4HUejf3eK57Q6XQcf1y8KvgyFHgtipDxUdpq",
  "key19": "3kA1SLX4oRB8FpAVveKDHg9cB69Ad2FunR7bZEh3gkCrMcmDdGqnqC6262fHvM9AQrgHBRHWDSfoaHcLxw1XfAcr",
  "key20": "5t4LiVycWAkSPAZyqHmip4jEyUctw9Zfu85yRQ5p5qgJhYpPCb2JhowLHFThAy5bS54i91pJ3VqcPr21TziFuU9g",
  "key21": "2RzddVafLUJbnJVWwT8rpGRHYGeaT2n65gSRysDSeWd6n2MFW8AE1DvkY4meLobJzxVvXh3reD2zfZf1LigEvTJy",
  "key22": "4MxKF1jYR2wY3HTBABkUY1feM98tcYJmvRv5goqYwzwM4jjkKgkU5wvH4nU7zKf7yaJd2DFVTczFPE3yMk7pE1WE",
  "key23": "SyTwNrpPWrCc9AZEG4uavbKFp2xXZR5XG8fpNhCSXLVoErAL58P84igHeZhgY6KEd7YVw2QvTHZqvP5Tej2LuCm",
  "key24": "65zyvDs7tRbWPVFjW1QXmKyPRdo1XgdMMUZy3iHaAqTv8BZcNLTyCfb8kZfXJNPowHTbeffDh7pLLBLaXAGBodUP",
  "key25": "23KUwSzQQGxJ9akXdbUcD5pR9DcbnMWptQWYXmUu1ksvSdF8rcFxiLXWKGNhVT6vvBHYTmvqgCaoh5P6tFjm2pMZ",
  "key26": "4CtPeXJfpLxuqoTxfpPjSe2bn6casnTGyjWbKibh5oUhNdCECWMhotJ27tbxhqzqgrds7jUVX4XRLz56WPde3gtJ",
  "key27": "2nUQaCjDmWhCbxE2gCETKL57tSCPWFwiYWhU49kS8gvGPB8qjhA4ttspGGVyYFkfyM3PuFGLv4shv24K1CNAsYo2",
  "key28": "2VajHJXq1c2roxsbGJNGFpFQsAz4RoLRBnVE2bfMcV9J6oiejgJktcGU9xVNXkhgVya5WsPpwcchC7nunvnyz9g4",
  "key29": "3VZahUgixTP6fsn8rwetW6BYKjXGRP1381YymwiEBSe9v15tULSUACnz5BCCLCJwLQUyVCemvpPXySC6hbDzj7MS",
  "key30": "23toZJ4G3fsgyZtgt54mJY9jFFRTRyo9F6YSKuoZzv5SxVNPuwfm8Dh6sEju5noBUgZ8S4vAAJ1yY8AFLTaiBRXy",
  "key31": "2qqYhxH1jcsotVjZ4Ps2t4RwEw5upcU6yFE979mhiCDxzmpWEApvUy3i4gm6fh1z927GynNZEYopweWTJNjzvKb4",
  "key32": "5qswHXLFFAXdNJPW3Qdb36ozX338q4PZom1Nzn1QgFp4EE9xfSksPdjKr4bAT1xB78oo5UcoZh64Tkd2PZqs56AM",
  "key33": "3evbUrdkkwbtdW4LhUiaYYMMDLfHHj5jsXLcur378H6AbwjK82s4ftswFicW8TdX4R6UKFN71rz1Z6VFnM2Y33A4",
  "key34": "49xGb7Uiep1C89h7VJyPeG7kGr4LXRZKU1Hd5w3a2m2QfHJRePbtEcm1aWeUqvsAQ2pEJ3Uquzft3pq87s5detW6",
  "key35": "3xXMnGYGifDaEmjaxgNgTv8ksyRkBnSdc2nntFWoamrkjtXAhp99V1HronxwcLiHzDooZDJjzPdxsLtZPsrkPGD1"
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
