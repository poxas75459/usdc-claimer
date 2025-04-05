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
    "2xbXqSpH5FmPDy6zsWKqRLfyjJe7yjbTLShsT8MGEWsTDX7BeyBhbb1RR8Nr6jnCdhmH8EHU9AeAc7QWKnCEkbqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34nQK5vGFrmDGtCtxr8prFMg3KGLBm7XdLC7E5mQN1LpFKvPxu8n97ZUFDEqnTjEyGcL3Q2z619kngrDDsqYuJbW",
  "key1": "24c4unjemAJD3VhHNV1XZg3ZXACsVEfn7UASoPUtssBBQVhoY2yW1S5YvZrxAqiFsqMjgMUjzG3eoJe8LzrkT6Vv",
  "key2": "5gQm8JSDzBGS4uYrZgNaegMvweJ24FDUmJSXAdTNntDYSpaSGoR2MiEVL6ME625m4Dp2FeiwxFm8qgTu9skRLm6Y",
  "key3": "3tbz3drS1N876egXKQ5RD2CCitKjpQa32aBuJdwxYQmwQDJa8mqk4X8cxyi5wmuzJGdkmj3qqP7cJeeuCt9VU7fK",
  "key4": "5972ooS5ffymHZoC88BPNm3HUVDT71fZpH5F31FAADE72FS2TEzpUrKt5Gt26cm98eVqxup9cbDCAp7JYwk5b7Ee",
  "key5": "2Vu2fSS2UW8TjFfVYbVLJ5e7T6QD3B1WKD6oKRGeJHHRAMeumbCnaLvMuoXjLt6vTRwptetk2GKnh8aNfiExE2Et",
  "key6": "5krVhWuLbpz1c1UrzpSuRZUyYHBMYHxMuZ17bC7Auvj5WCj7mvX96GCZ8FuzWZuCDmfCBsX1Rjiz5ZVpRLq9tF1r",
  "key7": "2j9DaYVEax54hbVEDMMjtcY2yT2LsC9C1yNeqetcZMzBrmu9Zi3HWxVkrg49BMz4E2dxqRkr8BDN5Yu5euFeXYKq",
  "key8": "319mCTaX4gm3JX9hFAZE5TFBqaLJoBiXfivyWUJZRP7TpdiQzoLkKimNKNhBCkVUet6tYvunfhCdVQGzN5kXE3CF",
  "key9": "65naFVkp2SHYoativAES9pPrM7ULrvPKRK436iB6FkrCxtQr3qLXpVWipWVXRLpiQQgQp34e859SpZDEeZ84ewns",
  "key10": "Y2tQpu1EgjbmxLsc3Ehk2bJtHxX8rTpL6WbuCwaPK9dbCUkQRXUGR64sP1bwKgVwwcaQYzvnuhFcg4689wP3HdX",
  "key11": "2tsPcepkfB6eSDK799Dd3RwYQ2QANBpJJ1Ukcb99g4xK6dZrLc6j524vNFzquwQcwXdcAWw2NU5tKfaHowvt4ftP",
  "key12": "3PYq935p6fPPyTn2LmfGoVDkjH8853EXJJXkExobcen5RSQP1H2r5JY18PqSscpumkvQiuQ15mXCBZ3k6zAVJ4Rv",
  "key13": "3HDrGhToHegnUP4smhe9ENieWEVSL1ekNggFMtRa6AvcobzuhNYW2WLp4uomA1fxbxRyfqfuAyC79sEVhtLNE1Jv",
  "key14": "wQ89zui8wrWDp9EdJ6ZDTiQHbiLhAnv56A1TGcJ2n78r2LoCdf9hN8Aau3tswmDjzUzzfzM8Q5rRKvCZnhgEBQB",
  "key15": "549RjTKTX4o85td9CNjnvLR1XkydmDyqxDVdn9URj41tJVuEyyPutp3fHzYhTD5PzQrfTByeG9d25BSDby64LQRX",
  "key16": "67fNmMfqS19ycefFKTRo8vrEEXz7dLVVFVMEQW8nQXqwhNvz8spnu81S4wTqxtfGaAbGSTTxu1PNL2ntvDg4fHGc",
  "key17": "zMowrZzWZtkbQRNKs5PZuKUfGoKaNhMF6567yVZS3ZB264WupaU8GjjBzJYnQAUVhMQkFaknyP1VQG6ZpvNB2qb",
  "key18": "5enk5BnCZR4K2DLxn9yi5xXUwJ6HpfPu5J3sESH8BUFkwrkBaMtir3c6GGZ8mr8qUuCrKFLi476yUmqxA1AuwF4r",
  "key19": "5NaoonQmQub1u6utVVMyRNW8ttuF8XxPiWTntqWgjWf4bJxV3kuJgbRupZECXnXDCcHDV4XRgrb8PZ7e7PRLzqNS",
  "key20": "4JVaADq7AwmhnNRRVAZy7hSL9xP45ZDPFMyxLuXCU9SqwAKd63SJriyvShuKoNVpZrb79iQsExEZqZ2HgR9mtwmy",
  "key21": "3V4mMC1Q29dvG98UtyGYN1BpvXw34nGFZKnmDmAj4PZfZesKn7t4JWtbbrVJeVp5y1vS1M4TYZaLEuVBtVVSXczF",
  "key22": "3K8uzKdZ23KyAdBLkGs9RW5ZFiJZFEpp4rmVxEM4bF9DjTQjRGW7RYDBsfumPERgWCjZhBxZn9uisK5sT8fohVHh",
  "key23": "2826VfPBTFMRHYVL9s1Qk13UuxbEDGUC8Rm7BwYCVHfTS2sJXzEwcCDziTuX2shmUMmGX7iLSCQk4t6dHoZJwNwK",
  "key24": "E83LgrA98yGbiAfMGrc58sMm8nLrZrRGjQDAM2TK2aWnGW5qYYyYFCMy1CZ8tjQz9fHWtnh6Qtut3q474eUSeDj",
  "key25": "EaamwLJDjiMGaCKSfGkKytBS3nsyjZiEbCoH3g9EvXKsQXKb5RkMUTQAUiUqfuVKfLJwYVH2C4iHc9AkcyzuySx",
  "key26": "4RgabBCZhNAcQK3jnAcBECNcbQUpmFA9bYrNBoC8oh8nzUTpZ6u5nTg3XtUsEC5xhsX1aUo3WbtbVVEdk4Gke7FC",
  "key27": "5cjwbBfbTJRoM1fxDPRpHgfnS6gGtyPXwwRewKK8EW5BefmQTdfjMGwyUjynZAvnKtC9mDq5ZL9iLpe5V7YD8MKX",
  "key28": "2ALoeXDLugwqKmF4trn5dMWbYeXmbKgR6LX8hwb73bqp3MWStKBBkV1YBGJWUqUPx9XQ1i8o1WVUp2BDZ4ajvcPX",
  "key29": "4krnELgR3nhgsnRbgtLArG3mt5vRzCBcHzLsfppC2HHoGxSacKBm5uSu8RocUVp7QeGqreE4XavP1W6ByHCSiSK"
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
