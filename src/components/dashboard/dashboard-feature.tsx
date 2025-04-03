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
    "3Y2LRp4kf3MAVp1zVGpfCvHj5kXMSBkd8ryWoibepecJVtfY3V5krgFrcrdjwwpvy4YiYVTE2NgXrw66rSRoRmbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yyhLX3SnjMb9ncTL6Vr34HmGztAGZc6P2eGJ4fXTVpXkGcKUv1B77YM5tEDixJAYCknTnUh2CZDptixDfCrXH9n",
  "key1": "2wVkmXetkn8FdNZZtrMLLjvxbqrXs2X4mo7hEFTpR4wneqkfVQGMkED3mmVdpniTAxf4FqJEMubkrs3k5ShdpQVd",
  "key2": "3rDkWvh3zwPAJ4RGS5cgDK8DSNgibgK4L4meTSToUL6dvbGbNaHyF3vTNrynkLV8JSZUKEL8zaLC6qAtD6onzcLJ",
  "key3": "4ZwHqTrSvkRVAPr93RFdVTfMYBkfxG6tr8JkgH8cnonRnVaDGW17JRmGMsDLfDZPTsdMVJKCjRMF8ESusSkhvUUa",
  "key4": "2JAA6KR9NGMGmnhpDiGncihkGPf5jX3ArEhws6X5SV1QPbXHTyseRfQtFRnvLUSdLMCLCeb2yrwTmKKtYfsCrnNj",
  "key5": "3cBUXtaZATZq7yjRRPVKUrZe6PeivrN3tyoTLpeLmH7qHxzxyobwfHr5nLZyBggLKefU9j7wEW8BRT1wCfoPD4yu",
  "key6": "rGKU3jEY8yLwerTWGCBUFLz1czLVsqAd7FuHUPVoAc31gs3Y5D15cFrCniC8u9uJmb8BfxjJHDGqMtnoUNCZQnH",
  "key7": "B1kD9F1ynUeimxYGLedddK3Ei6PbeWG9ZKe5iU14ByCXng7mDNQZLQBLxkv1orRuiPBP4MbhdNkafaDQu2BHXRU",
  "key8": "9fyujr3uFJW9DMmB6BZ9ES8ouEtAfJUvdbNVEAkdWQoSnXVvN1VFwmcZLMq3TmSfsc4GfbUJovvXxC4geGGpJ46",
  "key9": "wGQn1G4PjXth4cvteZQYWThxbWESPjjcN53XeFnvgzRJH8vXGAW2s4p252ouoqVhcNCs15ao8ygkfK9Mn7NmpsN",
  "key10": "6Cn8dihgrsBMgT2x1few4DZ9PjhtgJJnLvPnuHEQ4JywJyDN6vv5wCQ4BkHePHLxE49vQHyMqJrDQKF2CbuyKWt",
  "key11": "5AqwkJV9jsJ6GjqqrDdTnY9bFfs4CEJEQpoxgjKGE5bEcPCVzh7SgVD2T79t5U6PvyZGEbZviBjj7HVxF7g6Ci4D",
  "key12": "2231a5UZHFhxPnFrRTygTrT7cPQdccSUXmCeADTN6mqspS71zLzRGzXtSup2dSoqhRHsYfHZm9V74X8AJcrrqGFT",
  "key13": "5tgV5bLko4yGUhuFawKCjSx8Pt59E6pPJitTFXQiXniqquQnY9qUgY5gENnMEfDep5WMypriiVTuGMyB89pAVu2W",
  "key14": "4hX6oqMB6RRQXMFfuDxj6PZtPrJ1N1YTjDM23FSSZdncLfohNZEJenuZ7NL99sLDq1JzevuMBkxuFwMrVRm5xQNF",
  "key15": "r6DBB8tUxv4LcNfikfaMR113ix4M4nYmYJtKGgsPc7KnRPBiCAeSLziFzF79frRaKNNHy3GVDxknnVYFmsZtx9k",
  "key16": "4S8oxAMNSQNsgyf1frWchocRZhLKoib6YA7pS3cEWN6wxqndUfrdndWhBbNuzxmQiYSE3hHkPzymDzZVcTb1LErG",
  "key17": "5A9uv7ifN3RAkGWD9SGeCjCgYufF6yKkyDtNim2bxFZu2MZ466rEyGW4ZdEgACZs3z2Q3rwv2oakN3VjKf5Eg4ce",
  "key18": "274BChJEYa6Zngd3QV5G8eCKTTk4i1USaRLUA1QpFmBHhiE8KtewxYr2tHUdXye6kJHB6TJgedDEcfrz6ehEkofU",
  "key19": "2WEVg29as23cd3iZiFTX6QKCGj4qhaEcNwQubDpaAqSaxYtFsvMPgrJah5kDcAWoqiQwwJvmERAAT7NRyqsU2zGs",
  "key20": "4C6Jq1MgVD8c2oRvXbu3dC4YQtSR8MzcTiSzh8gJPoiv4KsMPdJ9Vvr2npCdm29gs2Y1gGNXEemGusGCqtMfo1fT",
  "key21": "3o8u3gVjh58BBUD4WMjiDQS2MHMspuqsEEbWbKdCZX4rRa5e15D6L4j3hrSyc3SnDjinwkqRtDGaaS86smFVDMnv",
  "key22": "4sceVfq1WCDR4wTTmoPptn6qbJztR9r42ujrK1ZEz3z18rmXLEdf9T4fovGvjaxB3LeHc6ny9Yf2QFJr9mXFZkRs",
  "key23": "F8r52DtJPU3kEdzrM6r52aHFKSkj2s8DiCBkJxHVWFTgqtjAxMuvVn7xrqRXW9mmtD2jyA3etHVK7Gz6wZAe9Mz",
  "key24": "5ycdyRztwy25zFwPvCC8Tf2JrAisz6r71FSkgMJx3i58kg6bYd1YoMyEktZKaoYRnrEAfJsGcon8GR5vJSyu23x5",
  "key25": "5HyWqNw6ysb1EaCefPyUDDtBHXv1xavesDVSfN2Gruy4isTnPqcXa9Df32HcMAEnAYShgbXXuBJMbqobbaZxvfPP",
  "key26": "4ydpv5WPfJUqgSQBHkqgXht49WymzSceeK4BbNfWNsGtqwcK2abdmugHSmXAawKg4ZfwcCvULUu7TWadph7zZFzx",
  "key27": "pFqnHZEzNTw6vXuWx5XeJ5cHWoPDPGTdVQotbT5tyhVidZM9Q4HThCb2AV3QambmE7c2qgyuA7yTCBeZ23LL7xc",
  "key28": "4mbRMYWXBjLvn6PA8haPUo3BdUY7cMJpronkxhtaEZP2f7nvVWbWoYG1bpAZqknrXqTgdUVn4cxi3riE2GFyBtPQ",
  "key29": "5jKifg9WqfC1wkqu66VJqadNi2THYBrMCB9WMk5c9orEyBXouPyZJwXGsay2yx6Bg2vCxdB8iPCAp16xAmh8276R",
  "key30": "2tNgGBmxtNt41skRAm2NyzfMGMc5ht497Ru5N4RDsfPDvJYN2GPJTa3yUSVkH3kqZonmwrmLgGqPvQGvAj3bgAay"
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
