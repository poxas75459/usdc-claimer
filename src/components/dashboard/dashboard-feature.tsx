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
    "5Z8Xit9rDM6Y1NuZAWFjFkdi1AwujPMLGENpFefmXdUApYNH1YkCZzV4UyuamwizB2hKiDnDR4qRuoPm9FCyZTEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ymGv9MfKCXGvtSVThhon8YTWMbk5vwkvVHD13a9wCUvyMqfeK6mUw2xSQkaHPqy2nLGfc7kYwamVqPAi25QhJZG",
  "key1": "CSPrYeSS2fZioVxkt9eLKAjtENZMKjdNZxubtcp4XMHA9q7HwJkuAscAVR3JPSqKAZDSj259Xf1Ewa9qYCx5LwH",
  "key2": "665Vx4wJfNLK8S2ksfER1swpRrr2EV9RsMRC2Y9CzGbgX7FGRgU7oxPLYVYr6RvLKexk2WTM5NCkuiXKpeaWhxaj",
  "key3": "2QnQv8BNvBqTFpfD2NWeNpcxDCspSJeYkmDefw2xiXhDF5iuSrWZz9amZbsMpYEibPU97pf3WHBx7Df6Lo11mMdU",
  "key4": "dXDVdDy1HeNkCkg9qiHGAHNksmc2SRTAJmLX8GxZSaLikqDDBydQzuu9TsjJptBL7fqyVotGvi3hrPdj5ANv4mn",
  "key5": "5NEMMak1gkRb6q15oXXG45Wvv4dxk39yyfZJms7uypQFJDcM3zkHqiTWU56tnGzSoJYmeDw48TEPX7F8miS1N2q3",
  "key6": "3xq8vyZswyctzrUvKC89mNuZPS8zvBXfqemzr6WFtD7oPidiuiXsgXhMKE36AgksAvxH9sEdHU8wwjw63qjpA6xK",
  "key7": "2weYDnJfrdMwntkR2mrkmWrxpAZn4ob21y2p9cX8sZcRd4UBy7759XAgN4NKQ3qCoccnFWrdb96xHkQfLc4Ft2om",
  "key8": "y65beTx6FVTjkkoJueH2N7BxK79o4mRibgkRXVBNoFTUybrmhKkznEbbwJMcej5RqXQHffUp9Any3k4FEvNt1Kr",
  "key9": "5HwRR9wQustpCX1NHffKUmU6bdqUBdY8oqXbgpWjBJ1nHQi1rwrmS1LEnhr7ZscLHKw5omXiPE5S2DpFqmjRP1WJ",
  "key10": "2ixe9tiiepmoSJFuYDM7vzkkGPWqgnsp7XeteYVQWS382JKPmygnronsb8gsfqa52fWPexeWbBZESbKgQArsR22f",
  "key11": "52hdnsLwyY3qpbYxi64pRkHFT74cw4sTYMTyNznHf7xJRFx8wPydoCGdfLYw4MULpHDYYmLoXYK6SbTvQWM1o95W",
  "key12": "41zfMr62pv2D71N6DerkuXRc4toSWv7EvoZj2LvzwGotusc3Gcyyiw4g5Qnk3vTSaRF8dfQPfHPbMF7HsNrzstkF",
  "key13": "3hEHvR11fh8W7XdyCiCaW6toZqkEhqKKEMyRVwdMUyWQ3Rh879ofW6Ssttn89TrBiZSG4AibvCUVuLjK47eFxURn",
  "key14": "65433dMK3aXYbyfihew43CqLYHcQzFzr5FaKg32VeW1cFMBRBZBnhyY1Aq2kwfKtmi3pBBrHcPKWBW7WFKQTRvHh",
  "key15": "5dekVaJYpRFQMg9PxWy7GUT5AEN2k2ngHidqZxxh2g7w1cEL4YSVUiZYLq7xRNVrH45NZYzP65vw7UK51MGaFb2",
  "key16": "2tQC6Tc8os8xGKP1WBDZAMQy2vvMV6vzFsBYq2Bn4zDRsm7GkpRQSWR8QP1ru9V7SxySN2sR2x1niqcMTDS94LQ2",
  "key17": "2VRv2LCPDjGpJoBVmsoMXMPMm1bj5yj5Zz6D7n5fAE3zK9qdk3ba3sPZSy78Pf5quBd7P2DxbYhezRSuUxJoQ6Yo",
  "key18": "2jmeTvx716n61T7xGXG24NFfJ1xEwaRBWxNK5PZZotdGVwMdSkkk1bZpMzpNdgpePkgkDfC7aZpMzPcRikfqQEvf",
  "key19": "hNbZMJBofYqZS7nqPxR3RmX4BithQcwd5KHmVFeAqUwnC35BX8Pt2DWxUjgEuV6uiptH8TrfcvoJWNrejm3sGZr",
  "key20": "3zBBytKf1yQFNbfWRxJnwAvmZU4eoMr1oTL6pBFN3BnLRK8somBEiyX8c9Q5itQu1E7cV1xeyk8GdzaRoB6TLDGA",
  "key21": "2RN2ma8522XegMMom5TgyFHknzmmH1QCK94zGpSJk7FZKUNsPo3amNNSoR4rCqT6vy866NwLuCYKu93ZAKYFkrib",
  "key22": "29G4g2NMe4wzKTZisZbqDxuwngW3aaPhia2KWdexvcuBfNbjS7zgZ2qkFL2cfrf3QPWpFi7qmR1Kcn7D4VfD7qct",
  "key23": "1CS3RM1Mf6d92UXKGgVZGGho5wG1zR2i6SGAVdBMppmKgSnnob7HYSiUTgwu9NdWPL4uDnYBBvNmJdeUJVKR1Xw",
  "key24": "eoUAXtijB5scXTMgkiYYkksKtGqJpie7atNnY9ptipHXEmYtBZiCFpkvZk2iVGtm8nYu1syiwPrTeasv31wCoeE",
  "key25": "uJoCzouZNhe3v77HitCgZErL57fTzrNEXLMVtVk2mavxeeeJxhL6AR6z7DspUjRiVxs4xQwL3yKKhCF57JshCKg",
  "key26": "4aCWNdmrzTAn1zHBWr67mBNrEXachydRfWDohUFmpUbUxpmJT6DDNVDijJUBeYvWJgyWG9PpstD4xWr4XFKRdhaX",
  "key27": "37U5pkHhVAjxbkhqFWEzGzvP4aejGjaC9RvSTavNu5YEZrWvZTvVUJVwz6ch85Z92xCLQccovqWQ7DoRovFCT3CD",
  "key28": "sW4YCjWDarS6SFNLrTPzjLagpYdahqXQU9Lhzjm9U2YGy8b2FvP2QMWFicn8d8UAcM16H6EEfSU6B2av1ezsUu3",
  "key29": "4zETYKv8SHJSQ3nvHS1L69Q7U6uKHumvmHzqtivdPBSVJxWLVSn8QHJk2Nzfe7RyBd7TsLUhLGpfH8iehFpo2ENg",
  "key30": "upyZBVu2Y8g8fUbiLw4x396sSqa87n4KMAasp97i6x38RSdJH8RnyXZpqn3yKLs4BYCcHNLyjUKvUcnngtz1eEp",
  "key31": "5GNJ7rhXXQUXz1EogaSxeeupDRXG6CWRhUn9BwUQuVfBXApdbhBsnCpERWkSFxHZ1U75Reshzyyysd6bDvQxb6Y9",
  "key32": "ixyhqZM7NjB5PNwCoHBVmXqdFcHtUd63BjwpzVXTAPC2fVuQrQUXe2KjHQMBZGqpEa6juRMy5HTkPxb5LizU6ZL",
  "key33": "4YbgFH3Y4tsKnLzC478wxQm9zSSnx3AcQj1yLmZv6aGhUz8CicgCBAgjhEjYtyjjW3CoNuKwZ4XYh3nBgUXvpLzt",
  "key34": "3tMfMfqAcCagNs15iw2Ph6sxfqCEanrJih8onHuzX6RN5r6kRWcUgHBwW9ohginTsnzoe18aV9MP1hUQjv9e3nZa",
  "key35": "55XfcboKt6oLesWNXxAcMAD3hh5EwvTNcLteppCZkh62PspoiZ4PwJxUmpszcbGerd3mzhSmnpAJPawwbAF2kwCL"
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
