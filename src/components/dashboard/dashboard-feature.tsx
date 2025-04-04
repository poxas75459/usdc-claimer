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
    "3KiMR8m12hA97dXbbBf6ScWGDsfSHWJTPjYzCXPBCVHag7FgGmm2pWAjJgPmgHPPq2qJsypgxv1fhCAsdHagTMXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nuz5jozWEeYZcqkUqeXH3UstdFAvcJsseySS2CqsrZRA2y4fuWwLfNFQWSKv7M8KcExKWMAoay4dLuKW9EK8ffa",
  "key1": "62Qv7xKRPsajNY39nWjBga1pGP2upX4wyjELQ3RPmJw4bDhYhgW9dwmLbezr5DrRg7jS1YFad4Ltzzk6YYGzjuR7",
  "key2": "4mc44bsbFWxV4yyRd1s4DWJ2WFVHHpNQQ66ft95Bc5cmAFDYizHKDmBYiKqKEHT93Kekuhq1w4jGPAWVvzSxPYF7",
  "key3": "4KuYumF1waroo82MsC9rFkT3cR7NTLUGrVeSpwuTxfg6FDZBPhNKDN5QuxxXW9PSEwLTqHorsHytSfCCAMG2AvBp",
  "key4": "3rDwgywVdBoUjBbTqezHnyXtxBU3sRwdGNXpbJDDMmCo2hmXY1qnCT8BJXcQeoqm7RZwhs1xDfoW9uUDXGo4M9vF",
  "key5": "4WoUEELrdisJ4nuYuqiRqbPAjcDHXnHRY38oJ96k1ay3YUwwvVKD7sTvMhnPn93R92FnE4dkJJW5ukKcEBMCH6na",
  "key6": "287cscAbjhcnoueqr1mQ7UzkbHK5psqMWNgi7RnA8Afyoht7naw3FjkGhUK3qew7s4PUGx4VfHzAbhnJvYmUGG6m",
  "key7": "3rze1Wff1ME8VDZyjjaLXejHPtJwMR2xpL5Ee1R69q8RRuwF4D4VAEpTZswrZP65QACzKMAeTgBKJXXPDmHwjD5W",
  "key8": "2nxRNU9wsntLhQ1cuCRf66bk1f3DKAtk8kve4bmreUVf34ncPWBPk6a5WMdCNyYKgAx1S5eN5SKQEo5tJE2DU9xh",
  "key9": "4QLP53zy2y8wcc5BJbU6nGy4FdcubHUHiPFMWwMeqoqNd5czRJQr1inZi6QVV6No3Gmixoj3V73bef7PfSHSvWCm",
  "key10": "4gD2EWh7mCkb57azLkzKd3aw7xRJ1cbkJbM58B6fQPCrfci6k8FCxbU4eUcDkDbE3iUpuTBtEMzhEv2iTyYmHbfx",
  "key11": "vx9rFrayziD8HPVd7bv4Z9XnV1MoHKAKXdupEofZVWonMmrMkW4jV1zepY5DyS4MNW8GL35Dnr4dS9gCTzxK2cZ",
  "key12": "oExpKfLb457eXGd4rioVaSX5Ah9A276SzhuUkvEgDC7HnjqhMzSpqNjzQNSbp8z3LMvGn7wVi7FnioEkNbzL2MG",
  "key13": "43fmTc8TGN6XznYE2XuVNuCS6EQQYQVgL4nw6YBmJsVwzvvBmfF1t1Jd3Diwm5v74EsEqFs7dzJgrfu7tW1BXkS2",
  "key14": "3hTdZ7ioaS6ouiH6ftMP7vkoxwRTB4rLDEuQNvUMQpEmH7GXccDSvED7Bs2pGQEgkGWpUg4yR3GPrvo7g3UQiX36",
  "key15": "4rPLJycJvJYF3H6qZaY1tdhd7UgGFkdKXrVPN56wnfEvEefxkkUsrf4qZpcRSjMe4UxFJL3diwfrRuPamTLPaYED",
  "key16": "4J2nLfonT6qWyXq1WMr3Z1iZRzAw1cd7cy4r8EQnLvHPJZddCJtRqgV8r3qF9B3g6GtYfZJyJb1XTjA2Vt9ZCgps",
  "key17": "2pTPKFWjxDkod5LKkngPQpZmjNKdKpNqdGfDmZT5ufsM5NkpSw29GaVAjFjLZKwofZrfXBR8hNsvmhKDmGopDHks",
  "key18": "3G7ScKHyhRy7zXgGZFuHT7nFc4jUH2DSa3sRLZKPApwPbRoAtWxvRHrqhzX5AQeYen9HaquhkHFJuJZSuDxmD8N3",
  "key19": "3Q2Nkfuc7jqaUybQWoCmLUgczcRWvNpbwbdsZt9b7aJHesPFSeQJzKsEKjyUSADgF7sWrkQbKnPDTTEpGoexRATG",
  "key20": "3vzj7DDrmq9XQWiB8L6RNS2rHs28sB7yTDe1xQ3VUPSU7X9yF7Vg7AQUpv2ERUyEgvsWo5V1emPwDJzqNYgtzPvm",
  "key21": "q3cFMcvxhAAQ8J1HJxZ4Z4GMoZdhfBgprwgPmHUCJs1qEA6ttHXghK87RpAsrzRzzHBsZ6ziMaCGRGpEj2pF9VW",
  "key22": "2GduL2JmnArCiNR7bFNgzqMWu5upL7ZccLajk8HsWpPRzP7WLgMHi1TkFLQxdKDP1V1HMQkLtXr4aVDeHMJsg1Aw",
  "key23": "qTJjPdN5hwCBtsJKcCjK3yRLexn9tGAKRD8R3eM68KyQyLcV7Bb84k3EE7AcEsBP2VaRHH1KC96v1Ru54EXqnYe",
  "key24": "htR446KFPLGdZ1KZ9VxRMCMiV4ew6gMnmbDsry9gBTi94P6EMg7CQu1NoD3hrcLSKaXH4zzWXKscNCybptddGhS",
  "key25": "HRyMSKoDysd7uTUQpVHyPNXZaP2s7bgaoQzN8HULv7LFoQ89nLw6u26UPmfjMvDKhWcKJvo6v6QYzxt5rxmFZ3W",
  "key26": "5nLSzocBL3mTNCwxCFU2P86VHZunpjXjZmmfGP4fU3Sc4j4pJeudoe6Ypn89J3WWYH4qnkeQPWsc7FYzcrR76XwJ",
  "key27": "5xLRW31i3LjVesJtM1HiSemYm6sP9j2WCLsnGJ7QZs2759YT3jRxeSoMadFG3f9Uj2oULGtMXtQ4yNh36wXnCTaH",
  "key28": "37oikTvB9MaK6qUkuyeAhJmaaweswSkRwc8G3Kr6AyVUwGCJCcN83a1JMLX2zQBbJ73XeRyBRRF1Z3Uor7CYBNc5",
  "key29": "5uJxmaYR6t5fQiE4u7ejNgG33xEiyZ8UY5oNtjh2mA7mc3rcKhMzVr7caTAxc1Kh9nX6DTrgS5H4Y1gXHe11vHTP",
  "key30": "3xZHT6KuEHxa3rH8tN1QgAyp5bs6uhorLPvL6ZNcVLrgZP1cTWw2QxDHoBSquNUA2sgZhVACvcd5gMHhWM7BDUkz"
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
