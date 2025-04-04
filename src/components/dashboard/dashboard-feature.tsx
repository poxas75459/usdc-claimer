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
    "5D1L3szNFxYncJ2efoDioYLJknWUmJiaxLNYdnHh3pcmePMd1bYjNrTXTGVQwQwHqXt5RChDrXL5VoPzRLN3RhJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "341jiPZQPVxwpEH3awKWC4XzG2AUktiahdxErSWhxoEu4GuPtwqLVjW11MevHUxEUjsv7iEsWZk8vkP94CcTHLnK",
  "key1": "2izVmFp4bv95JfQzba8VepfWobxwsHsohGbAhAi7BH5DXxVgiUPj51BTVoZTbuLZqjWdjCebKsjF1GXF6849qGUG",
  "key2": "34R1URKw3K5Hasc1vRjm8ERspqZBAGEgUyd6yNGcBXh6ptjWHMAMmEJKh9KSTpztHNTcTUstwTWAd3fM56EwmFX4",
  "key3": "2mejoaomu7qrTJwEJ4sWNCGyNND28sejyxfXXav9xdQqsdTc943K96SMPFmQYb9P6GNa3bwE3p3hZzup8NHBCFLB",
  "key4": "3XfUULyXJuSvc2ZQjcxRyDoNtUFBSb8udoczwryr6SXE17nWL3jhLU7Q8oa28nTsQaUyFGu1i6LTSotXJ8UQxMf5",
  "key5": "4Dq7eoZFqK1bbZ2jmUDLhyerpGBGqdBV8ZayXdkBZSb5WP24tMdcQE6YfQVNsAu4gFFS11eioMFqFmcASwyKkfhS",
  "key6": "3QTMLY5PhmZ6sprYHh7rCN3xBWY6vm8KVt1pFJ5kzdXkiSDVxJG6aqruCk9hm5cwksJjBFZSiQPcKgTKugCM5ruy",
  "key7": "5fvDwKj3mqxns1eXJCsqQCNwZdTEAnZqgAsF4Fi6o2geruajYLDaAC38uwSKuX4qbdLeXhBanxrKCcCPcrMhebPf",
  "key8": "zPgSwmLDvtXA19MXinoKFCZzcFCnPo7f9z6hrXHTzYh6xZrysnCTEFnQUkbLFmqRMiwLrx7xrSsuz9ipxQCCmuA",
  "key9": "5pbibDPCojUEWdUz6tp8sGDUhRjMYdTJjqMxMBT84sjuCLg7tJ11Ljo7t8s14sR1rddXYFGbicq92XGiWV7hRF13",
  "key10": "By6ZLbBYZXiBveoJnaeij6gd8QiyfksKL3BCbVqR4UkPV3z5chFwSodVF1DukhydmmQzghqBij9weMZULkzd7s8",
  "key11": "4xCxWty4d1u46uWaZmCsRdtGMph8pRbKyYYr52vYXt7jeFYRqtoJRiJmvX7SjRwLPSfaRb5nhdViTwgVX6k4jHw1",
  "key12": "47EcbkrFVk5Mj5SA8a1s7KACjAd8gmYjBrCBrE1m21caaUoZLAH8JPMvSTk4c9qxxdFpCWD1ZZUCckf5su5jEDL3",
  "key13": "3ptLkindedWmSbizUp7xP8yPPeJm6s4Rsk77WvaDwqWUokWEtJrpe1aze5WQoUEBa3RKJhk7L9awTTWehzRAHWTz",
  "key14": "5uhm13VDwLRUeC1UEJeg1hD51Tdef2GVLfbkshGp9eLRoHv6fHs6YW6QcMQTfQjVZCZZbAbpva9c71h2XM1oDav3",
  "key15": "3T3d6uhdiLJk3dkbXZAnzDERtXRJt3QcGMohFshvqJwqDP9ydD3Czz2QKYqWuyRCAVpduuaoCGbQSc8Heo3f4pZb",
  "key16": "2DGNue2rSHo7YCVXu6hzvPLSQXzZ9Wi2coHukrQduMFuLL19Wsj5EqXgV9eNuNPdsm5EhpH2YHZt815RtypeZfMP",
  "key17": "3QsQVeDwFx8MfMLaMyFhcuatAe7vydZztfWZ5gdkzuYy73GHosxZ39JUQaCJYdAD1HsUri7A8R4LnApWzzaz2wss",
  "key18": "2QVnXXthCK4f4Hs7pCT8mkMAXafsnwDweLecntgBxu5PRaBeck42oFAQsXWtMkxvdMtLbGCeWhiTVkUZFCqFR85H",
  "key19": "2D9BtqJHDy9bWccfuDQJbnSUJ7hW7v4rPDbnquPftj8dBqNkUqE7YrykWGtoe15nDffkAZWm6LVy2uv4HQKvFUe6",
  "key20": "3YKq4iHMHRTy6zUZXrHjoYTTcj8cNXsD8Tc8rZbqt6YZZH6JwPGTmMPvybPuesUs5K3Go2xXY1qBpNcXwCdnquA4",
  "key21": "5AMsq8HtNgjdDmtYRh9M2EeWFFUUUjS57traiUYD6rC3WXj3sgCGR7dzEqMthNU8hFN9kDo1d9oWUw4GuKPUJzJc",
  "key22": "2mNJDBnnmaB56NrWhHggzTg9UBM3xPwjJ3eD4LZexm47oHy71gsi28uPENH7dggC5DJNbZ8AFEqsvNeNoRWiLYcK",
  "key23": "5BaJtP5t8BtLh4VQVro6ApX6sEqBYK9kwWjzkhPEdnz6iyhvLeh4jhwPM89URzj6wX818wUg6wkX1i7j5enDrLXV",
  "key24": "54Y5gcLCjsXdiiaD4Q5W5rBdSYnBPeoYCX5hRmhUbKCp5q5BZvcySUNCjQJVFQh4eDJgUq9yYz32paaH6ySkCwsi",
  "key25": "5tPyUH8qX6twmW3Kisna73kmuxqWK7EsqnJhzVArZK37Xr39XNq1s2qVLQYiegsEm5Q8xm9yFLWKSLRKnQCigcvk"
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
