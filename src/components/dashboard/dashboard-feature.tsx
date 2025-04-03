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
    "3D42w6kucpDeuDEsRKgvu9UJmGSaJQut7XHUS6eJ8q6G22s3NN3y34wKz4ywDfTbcbWkXBqraskzW4MTiANPwVng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mdixcnz9XNXQuP1jjwPDCs2urvJQECqaqbsG4f6uzHyr7CPrCe2ZQ1DT6KRw7myA6FmuVBzBUWxCEVBeC51puci",
  "key1": "4EboPVZyMnFBqZ6DxqhScaRinndL9byAPE7GmFQ7m166qoTed6BjV4XyzRgpiSsxzBUNuEcKVPZ8tJ8LxJAp324h",
  "key2": "xsSMdUPf7175fZMrTo2EJDQncyGqzAhJBh3rLrQRV7XMdvJMR8q3RjkXJwmR4WCZevz9LT9PHGuqnrCSeRR2oY1",
  "key3": "ZEpqXxEr9D9xcsaJrpzEfbsQMbJX9mpz7WcdLJzgUEjDsfpJLAe5ceRcxBfeCZQ4PrnEdQEjDZffmdw2fVgVzaS",
  "key4": "5fGoiUHS2x1nWw1ByNGq7Zobur5wKnDYBBDLqAAM8hw5niL3XVJMNFkHr4Y1RsqraZqna75AYBWsFjJccE1PqTrM",
  "key5": "5em88RmyRc9C1ja9yceVPLotezpNavuQuvuV43BN7Lm7JPdswsvmwnNWqYMgMrnqTGKWesF32PCvpYe4zorLyhiC",
  "key6": "49yo1fCTYUkbCQ3MYw3NMbu93Rpr48is38EZ3v5diwjk8FwWiGfkwi3fFfCUP7AvH4zu27s4Zfdjez24SNuKbs6z",
  "key7": "3trHXKNFLfBVWX5nSiv2mgBUVTDAY6fqsGcWBoKKbyJVuTjqXQ78rsiwvX8qVCGLAA1tMJFxrfiNJ8aMY79vJkJn",
  "key8": "4xbcdwZ5gohpcYjjLM5kPwNZLu5JBXp1K7jkTmiiTLS3Zokj9o296DWeiygjfzaYz8xqCv8229t1KyhLKddPouD7",
  "key9": "2S9noLRu7x4AG897wYXVjMzKijWg8abJBTshVkbgxKeKgojthu4JzzuPYS4Z9JGv8fzLrK5TDJBkFkWqFHb8yvsP",
  "key10": "4PFrfPJkJUieCLaekPLresSz69yPFG5j8QKTrfVc1vXeP1fpPQVzyfDjkaWYNp218A1dQJngVk4HJSJruWAheGcy",
  "key11": "5tVtzkkGUNhzeM2kbJVY7bYxujJ3Zdq1sCGPjLzEeuhDdVWMAiWAJGtt4CcGFW5GbAisbCmdHdegX7A9kLgEJW7e",
  "key12": "61cmRpNwGmQCBQSNXcEe3Sz1mbYu63mGUW4rrQFDHTErgDFYFYJCSVpSJQ6AUeNk4XAeRjY3iAyWrrDJVEKaJ9FG",
  "key13": "21tfzWeTpz6fuDieJYz9zVuu4hrGsDUvm4WETSMbB7ov2hgZ8U1MC6w73VUHtz3uyLMRHpbcPiCQzJFjNANhbn5k",
  "key14": "NayttATPuz97CKax6tyLz3419ujeWwVEHJyAnaJvi31zwrtHisdiqMEZfL7Kpvz3LsQ8T7XvJohDojMhwkdsLY5",
  "key15": "4hiZZj5FRj4arF45y9BSyLTKBsp9vUE5LPp3T1RUJnPnocEt97bUqUwCf7nJx7uDfkJmNqyf2DhGo8LRTdRWhcub",
  "key16": "TfVZZAmvq8sMGHsbcKFpqht4vD4EeXrYCuXbGPE7wKW73jPqM8oufEU15NYEqbj48DRpZYzcdaq5g94kEhK56gs",
  "key17": "ALdHNXaUk4LVLbdRwrMMAnPVWLCCfCVkdrY816HddKgBcL4b4cUNhkuxnhaTuydavZvq1JCMwvuGrudUTeBYupb",
  "key18": "3jhb9M9V2XdwDr6kxbcJ6EPJ1XuLrhgB24dfBuh75jYX419XaT7pKAXo2m3eEsqkqm6FRtRjsA9XmZ5jHm11fMDj",
  "key19": "2CECVTBJAjX7KNaNmoK92cemmVtvmRV5qg6RJSFxy6i2Gi5Sx9YMZb4TWj1htsg6NVZ9mucdSpfMbS1zH82GdwCJ",
  "key20": "4jxSqqAbmFZ3PtvwAFhGzpW2G3YcNSgLYvf7SmMyVf3ezJh8EPh3ABTDox94NwG76xG18ez6jEPnStf9FVLFGntf",
  "key21": "3H3WBS2V3ygybnYmtYwYJpYzQiza7Padw9xo3RYv7BbSDUrWMb7PkqSFHzh5bG2dfrPACMtzNKZD1mrpQLxGHZcm",
  "key22": "7iN1sewnrDrWxJCshhyVTqHhShvVrgrzEaozWgSX93gdVLJyVnAezRwud8P6JZjRBR7UWEy9SdoucwPNqiWFD73",
  "key23": "2z3rWGVmVjRHoy8mdYPx4yaSgdyTjuTFzBe3c6vWD2U8JyHdVfsEJ6YULZQTBjvpP4WjJ83SVKgPfmUHmiX92xRT",
  "key24": "3i88h1evBz6mchCHS9SqhqjZHJwgtQAvg3fdDrtiwgkWJyZJuiGtoEgMzCMmbiQXq23ayJhQdwrBMywDwg8jenye",
  "key25": "5Hajn3p13P6nbuVVVGjoz4snhnCNSViXt3ZCpnYTvVJ1RsksnkRnWgt32BmXUL5n2jg9Wo9ghXydzvqQbnqdutyR",
  "key26": "3RuktAuh4WegC9A6FjvvzmU5tyPtdmMjrkw3mmWVkshdLM33PPCgotZ5quvuu7rbDPUmfNUgsqgHjqT25H5J4L1v",
  "key27": "dW6RCsto1o5fauhFjqMYtemdqZqjJbJKugJJ285M4rXRgXbQQoLMaWSyvRGAFVBswKwX8ZVkTgEz2ZwwqkMSRzu"
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
