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
    "3cWPKaJgscj45gf55i9d8y7Vc7NUW3dqarseWYE9nw5dEhzxofTwoA2fARQ8PuuDN421ABZ2XNW1xEsdRNq8N3d7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u3fmKrnvwmEXuzsnCTksNph1Mbpbh3L75CSNSrjNwFja35o6JBtYMg8cRF6ZKNfP6YdP5yiSenPu947zRKhTWq8",
  "key1": "3RyPPwBZNcfeTTFpH9yJPrJhoWghQMKEQuGGT2ywweq8umgBvz2XVy4UEnZ4mBV4HNhcVCmhgrMyxfpLrjCGoC2g",
  "key2": "5dWrv47bVWVrxLvfHMnx64UsgdeuwnLTrz7LSKyvyRWGJsCPyDXTQLGVm7JGcasvNUvpRcJgQucufEcHULDFUQuj",
  "key3": "mGQFw8Wwfz7RzTAHFN7DopCE6QRkZziZQmqsfPeJcJvjKXHgLdF7L22pz72THEELRqrfwkwCEsD4MPAdJttZp3t",
  "key4": "q6etiSE2VbVGwiF9zEo5hDGAhftiH4GA1gxnVe4wZne548BfzpZd4ZNdmJppQA2naEGGgGWCBihWvLK8KcGM3zT",
  "key5": "5zPYHqHhoiZZHSEbXXcW3VrqgHfftGUxNayfUJLN7G6zYh9FcV6mUHB42BGxvRMJ2PzQ9UgQNKoEqm5bxjMxjjh6",
  "key6": "4z1dc5pAwxDcsqTqQpo6bV9xRbCnNeRyaiXiqadBA2p6x83LbHHb5bWv7unQdM81Bhdy4U2GMzPvQcsw9LjfNQPH",
  "key7": "3Sz9fvqeLd9XBsrzjCYuZL35eUN2WttqX5WQN2xrGypfJpXcPTVbS3F8wyQ5Wwt2paV4gUVMkreQsae7LgZH4XVs",
  "key8": "7tmVqG1ktAszpwwFX3MQxXfHVKXgzQjoEyFJCtaZ6JDF725VkewGVkX1HahCbTr9z6w6kFRDXFidF6KJrwzwDjr",
  "key9": "3nnrKAN3Rvp1c38kwjxfjXjS4XCT6ZzqYuzpWs7bEMQP8tWfXnB9wPuQizhCtKwM5rgf38QxDrn8MXqpTEHNk8zj",
  "key10": "3duwNpVLyGDDD7uppwAQJkTpDsG7rChwprmeggFD3RykWFLLjzocVUtzfR6HPgHs7GuzsysSgs7y6NKfJckH7WTC",
  "key11": "3szqTrDEqt3sogzk4DTy9y4YXRFpkqF98PZ7y11L4sGbkubJZyTrw5pg1wy86xbhKsRHdMnyUEsb2rFAYdtJRQoP",
  "key12": "3FKA39MpqjvUHmuxdr2zqmcf572CeQNDUP5SVNgYPnffRBskoALY34j4HWSKhuX6z9hKEA7xDkLwZ9MdwvemeRUs",
  "key13": "39dHK8sPRgAdZWP2x9rpcdiYygkJ3cDVa4qKRRMtgLhxGNASmDBTydRc9asDi8LVydoPgju1JzJZnCncHDKG4tDD",
  "key14": "37qN1oZqSyxrRkdKe9UT5XP1mHtBqQHQjaShuhBCvn5Yi1D3dGkeMx1dT2THn3PVsBG1vajuYCSFvWD5eyW6JUXD",
  "key15": "3FuB38iiwKKZsHNz842B3nsX62UKQBq81brtFmMvF4F7KqFyvUhvR7UEwiTERzxzeZbvZ5896FCZ56mxLNMMhv9r",
  "key16": "D7YsZ6frJsSWWq6iKuqNXRqWgufpoE91QGCVPRoF6w3Hiin5yJfCBRaqCT1gTTGsmhDZGX9KwyF2G7jsbrTtbn5",
  "key17": "xp9PXTFpLV2nm4RcX9L7Bxnw3dueBADtho6wkhbAKXq31tBbLzf4jWQ8ZCaESQgB6B1reKvF6LUGdyJ8nBAYoEZ",
  "key18": "2bw2Nc7UZez2QqBYDg68AGKqzD5i6LyF3mTUayY7jWFGCVLkSaPKPPPVdY1ChjsoM7bKXNPKc71bErBtAyUjz9S3",
  "key19": "24ybmjgf7Y7eiEqnPke1iAgExUURy2MBD2jaJ5buXQKthjUeN6frS8ZKaNXW7kn1Qsjij7tJp9UGmwchD9qGxjhs",
  "key20": "y5VygcoWkDsZHgVqDtTX4xyNch1hhgKTyfjHArmbyBDf25DiyjSCSDkJptVEBZuGdx13CJkkQatrpqJXQxmetwk",
  "key21": "WHR4cBDnKGEwy1FigDxmwTM9dpkwy5mLeNdiCJk8cXkgkeeNERRn7JynuMubarM4Hrce9gNWr9mQWjJzzs9Qsbp",
  "key22": "5fmbjQBzdDSoQUrQ1fjNaKy6Z5TFzPMoatDQAJCsib9ret8seZc3Ckwdm6CqMuesGq6CcjEAMAQWX7RxMHFg7Y4s",
  "key23": "4A1Vaa4Czm4inmPEfGPAZamcyzokAgwtbEQeNyvHXSEimq33hweKkePYHLi6YttLDGjw3HfPShjWRxDsYhY1P4o6",
  "key24": "3BidBvRChHQzjQamfwQzw2dLdk6KSuzLyBc1ZeuBFfdWUXwQdnSpLwfnGuFmGN4cwVGLJZGzkf8RSAdDLSDN3rA2",
  "key25": "3oiMRLNafSVyMK29wW1xLVgnLePd7P1xFWT1WHSxHHowfLjr8NgLXQmLwEsuARTw8ULEM3JWtHQcW9UVF6krTfPr",
  "key26": "3QJEFaRqcFvqAh4kJMB624hjpxJTkyA8vXanL7W5BEnZrdazawrMnkoBtUXad7a7Q4Qu5WKpY37NDYMf9rdn9QRS",
  "key27": "2WHr5hsYTgeb9axwCinr7WoPaboqhMEFndtixHmMYva8UkPsSHtapPAuPpQfNYTFZWMtQAnLfdLdEDmHmXi19QAM",
  "key28": "4tJpLphcnMd6p3UYRfnqToMFQjy56GD3yp95oiB1nHhST2VSPqWYAxHjz23SH74gud2S7VuF257tb4QVZ1Tjh3dB",
  "key29": "bJu6xfXbBMXCekGx9n3o3rcyFk9P4CQHkLQeJYi6tP3gykQip89DuedpEnPZ3aednPCSHv23y4B9nCyQqo71zFJ",
  "key30": "3UzA4udNMB89CdytGxcokXM4TRTrVV5HBdCQLpDS1uPzvnwm8CreCD8Eiycez6467XD3ozQeWsBWXSVMMyKZZtRF",
  "key31": "4T9LW2UGDhPBiH4gvXWVZyeNZjEpN1RkdMpSwZhv2RB1fogXyaMAvsUS9qbXpR9NbwMLb9dUaxYZNh2ecjVQPFWh",
  "key32": "3WJykvSDA95XLotuxLXaMuUAT3VoPKdq72FBLNcLx3d4cQsX6UovguEhjRSn1ncitHDRXhVguzrXJ3J9qa1M8XH7",
  "key33": "5DvtCj6pcgrZTdU7ftgBiix2efxhFi4kEZckA2XCecyuZ9hR73BBGc763b6s5MoE4AJNSrsHLjWmstffvEbqdkP8",
  "key34": "5AoPTQxYyX8GyMdU8BdtWH5mmhpFEbkrG2nUDU1a9iDCAvWjv4n9m6zLjkBuqJZHGSV8W1Q1d5mJ3DfiosvYaRgX",
  "key35": "4qUF7g3q4uTLxv4VdyGS5sCuxXY8cMH63p5SzjJTMznFEayuUQYx6M4wq5PuvcUmNeswqoXXnZ5fHJy4yUuSHP1A",
  "key36": "3drShwdFTNQpwBJYYQvfSHsfzMAze3xhoyxHowugL2K1aoxj2bJi3ZPooJqUJW1cWLLRhfd3NpoDRn6S59M8yAzm",
  "key37": "2Lqhw3eTaijW1ysLcCzEayr913NrtjKbxsBuD1X5b8gNzimbf5DRd6jWs3DMkwbtC8Z1d7H8yetCSPUdqM6JSk1h",
  "key38": "pMQu7aud8Y4j1GBHW7kYExmdgHZ6F3L72jXyFXcU2BaS68931pSNN218v3LPGUaPDWr29azYhJCMNfYLch6M62g",
  "key39": "5JgVrU9BuN2o4QmWNPDWLJrPDYwRDoLaakczcNNxezJ3MqfcwX5BuvDPqtPYXfx6SXUF9TFSsaGf2QxnvBi5cyYg",
  "key40": "4Jeq5yr32awPHfBeaKE8VntqA4Krz9P8F9qnmNG8RyhUrtESC21zn5YiKVYueMM9ULNLUp9QS3EsTirouLBdJ1AK",
  "key41": "5peXgqgx4syYd3UFjQyYM23rVu3K1WcBFupYKEmBjNsMEVdtHFDYMU6goDhVKdTmFwG2hKYSBzXchXmCHD4H9iqR",
  "key42": "snmwnuQVYXrRUXVsXWvnQxNQ98HFnUajLf81KtTvYYNxopacMA6w6DiYaMrgax2Mdxee5ediNAfH2D3xfnUw3RY",
  "key43": "4BTQ9JvJ9neyzEPe8TkhonzvzLPLXoqhHsGvsstXewE1tmjXY4c6ihUuHiArrCZm6NxRhXfEMamNGgmxbfmzj6ZN",
  "key44": "PC3Hi27YqXLTLWNSoCvnotkKGfpEVe6Y9VBrJgsfsMfVquxo6S4RwE1gX9tYu4NFQhJVZU2qSkymTA7AxucdmgA"
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
