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
    "Kepaaxt6Ewfby15hk3dykcnuoZGYRz9PoiWiQ6JZnzaEfBM9Rvsnecr1jhwonNESw7miUL6AQJBEVWPovjYJvpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gQAzsQWmmSmrTrUtz3iH3Rs5wkTf3mVUz97Sp9jE1SjqJbPRGVyAWW3LZCM7jZ6dCBgE1z4eM2xtF7pWz9KqAVc",
  "key1": "4E6FBLAYzoaMrY8armsbycgX2cyZ4HNdQngDqadrJumBorUvsHLYAUHdqTje8qE8gDUBDG2C11udpWFGhSMwCvEh",
  "key2": "5oqZqeHWwLk5233bqGkjv5P9q32oeTdTTZtt52f7BDJFm2DdLUUarQ9d3LUC5vU5zTpsN8PiqY3wFY4fUUEDFdug",
  "key3": "58DX8U1ZYFcXcbtejDCjNTyCXLMvtzHdpu4Yef4L6VtL1Nc2FJRBhr9E2SBJxW28VTixGoRot255tQzK7Ty91Kqb",
  "key4": "PrtC4QuqgikWL7Wkbe5GbGhvehEBiPG9MV48YoHxzrMtMDCSoCyLoct78CeimMNsbyv5LhC44Q2KenYyVAoiGz3",
  "key5": "3YH28sHyRBQBWpEqbdk1bRn2YYnh7xg8YQZ6SRMsXP4LpcX4C3VTj89qhJLzTX4w4kZMX4y19BZgTPwRFsvQEuhN",
  "key6": "4sxfcmUr8D6ffw4CPftnZJvL8mfXybY9UB3wqFEJh9g8cPKpaWvBBLQuXipzMnkgHxyQvqSGKVBeaTm7mZGYzRgt",
  "key7": "3Lo2jne76bD2pMXQ5ZR6waYZZPPw745gWZSYKiwiYi4XWDQo65QBhZm91sdbftQH8VCfXSGqR3g9uMqGYm4UB4Go",
  "key8": "2QWNA415TYDrexCbcvCpFjhpJbMhuCpbS6BJMgd7hQyBjbY9yNKbUp8BK4pForADiQBgwCo29P9YvbSn85BEHd8z",
  "key9": "64h6QtKEM5oBWyqZXii9hBx3q2xufiwmXuoENpDSpymQE1ZBEiAXJDBA2UPMyFJHAWM2xQHaK16VpTFMrB6R3QS8",
  "key10": "3h3ZRnvmjYGfaMegyem8QNmwP7XJbB62vai8Pui4AVjyvCnE5TGcTmn8Hah3BXF5QnNZwGSHBR6cwfiqAjCbdcet",
  "key11": "5qKkwmgnxC7F2kwppnSBPU55ga5gd1DLrZ1zq9qUMpVsRUDiPkRyex5FaLDbsbmnmK6x5xiYVbVuYJeRVEJPz6f1",
  "key12": "5sNdaprWLXkLJ9HxG4dL5n4HAort7aUHbtnkeBE4ZQ9WWip3rq58xUZRszP5mXHhjeaP18uTHPLDeZoWDHuy5bPd",
  "key13": "66NmmHCzJworru4npMvZBX1jQ1psKJEZea69KwUp7vVj9gFnnVUSQRDALPGG5NPpAQCEYksBdoqyze5AS7wwy9uG",
  "key14": "2SSDDrJJh8i1mRtAWjWM1fLUjXqrqA6D76nfG9pUQKF1resZCNhC2GgrPnSTp9CnseQGZ51zoxZSYuyZzJC1qLGA",
  "key15": "2HjJ9JSxZPctjY4xmVePYZFTGXHWncaSs2T6KxPZCpKvZYjgL5CmJSQtygBRbE2LqJ4kDRK6JsyELGQ5CeHYRD3Z",
  "key16": "4VhhRMUutesLvcuRDeAr7bVqwW2xu6E4e1KjaNroZXQmxXVgCoJXHWyc5UkY9PQP57apCxBFCAmDmgHWoVxybQAa",
  "key17": "2nuRdben8gBaMWxaLLcT8exdzFQTPiFhTuciPNUydTB7T9KStoexG21TGEHE8K7zEdUjjJjgqnm5U7SnYHFzKP9Z",
  "key18": "4e1cPcLPpGeA38bM2edCzh9EkqcE4wnBdC2UC6LJsBjPbQi4foyQXBektRGPcAJaURDrAidkSFAwaE6j8SSfagjp",
  "key19": "4qNi4eMiryG1PJ3nSKo5dNxb39ca92ECmfv8aZgbqAkaT5K89QoicGXs1VKUKefqBMxDH1Lu6BomxQ1wkuA1JWF7",
  "key20": "5gj6azqGYahPBDbwRfEA6Abwnzacz7FPDUiPjqbqgdg3v9gVXMskDuc1S9ARs6V2jhDhhSMc6LxEWroBmMc45aoW",
  "key21": "4vTRBqeCR2ynoyA2auyr9nx9JEZjjeBBetMoAnpHLztyQUa5ggTVUN1ug85UuCjtJJ3HcKF9WEwJQnsiccYjUzQX",
  "key22": "Vo6KxwiQu6jRd1A7op85axVtaGYYZSLoXRFQNZEMuQJPSTvoJcKqZ4d2qeccQ5J7hFSPqSdWP7keB6r52Cx2bT7",
  "key23": "5TbkRJjHbWyVrGwd1Bkf7eLeT1dDn5w978vseDvtErdY8URitRGVdbJzKZDNCu1LKvYujq7aqDDuRBG7heTzvrkc",
  "key24": "3RnNaC3tN8LRa2wZwrJ4JyxNVeVUdVwWBLzACWa8RQ4LQtdhp8fuFnJnBqgUK3diy2xwQep4HsKex9CmUBaPqnFk",
  "key25": "FY71DPT23zrrbw4Jwj3X9CpK56WQ8MAwvc1KG4cow5R1bfj8p9eFymsH4ehMJrMh9oT5TPxwiDBcxSEfiNtsQhG",
  "key26": "5XErpE2ApsgNSt13Ddxa7GeekLKc7skhFMe2kkRrTJFqo8pokGYeZoPEa6RUdC7j31Xb38GEyaBNPi9KS4ikCwi7",
  "key27": "39CcLq8jhJnYeRzfvBLuJn3sVF3283EXK1XZ8UKW4kcrzf1yCkwvQQbqEz4T2pifijCeoiuudGiCUSeBiJYQQX7Q",
  "key28": "5kEHUr3LjkLBMdX6WUthjHzCpQVAG5tnznNcYBiuK2Q9VGFhz4ZzJn24A6uBLqe9yQtAVGcwyyCQ6bA1ucvTCmNN",
  "key29": "315ievmkGNGGz5Z9GQGdqJAG6QRK69iQR66z6NHMiKuCEzE5bxQvxAFuuezVZ9Y2HEzYJbF8T2vKiZnGkmAsgfTS",
  "key30": "3QPRQ5U2pbwEfqyk4q8rd8nkKr5FrFiyRkvmS5fWnHffTEMWTCsvQHTJ27bgPkQECHLNcdG3w4GxJWjhwvpkhcf6"
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
