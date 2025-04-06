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
    "3Ap2ZXnNf72LJt1HWgwzdySJc6GQE5Dq8m8FEEL8LP4MRcoHxzeTiEXRbNwJjKSgHx45fWfzEQMmkaiHeZU26TgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QXcq4JrxhY4pX9edJ9Z8KBTbQF5FUhBgfqh5ri39a92bEowsugBMmm4Gqjn6Dzzgvydu9d44c5rBhxFhcC7XRtE",
  "key1": "5tkFz9agN88SSbzz9DbW8eubgBERUiERYqzvQavbiTphSnpK3YrbCYunFoVntBHEGMHmykWM2c1W3UkkfqvZ73zY",
  "key2": "2KEsukZxCHgH1LjStnfcwkSCA56huq2bQs6c144vcqhTEF6t87hZxit3ZqYMKRUEE4xVHgrhz2q3LSAd74EGXjHA",
  "key3": "1QThruXCTEicLaMuxQUkf6fvceeL6b1WPsYv8bJgnaYeN4kis9cntzmiebmmNy9gSJgHk94YyNRQJrhh8Jq81pQ",
  "key4": "64dQsyJ6g771eCG8ccByqCFv2r1ueudYqiQcScxhqYxR1RnmkMeBr3s8KeSawGrKHo1exJmedjwoKYjJF8kSR394",
  "key5": "dgZ8BspkunnmgJ7J1s14dHFrCfkkXmeXJXLFvWGwZcghTWHJUCw4FmbZNqKRJmCiDuQbtA6hntkTVvDRdAoP1rn",
  "key6": "5Ej8wp17eC4aSYBsCrfbSC8kqy2PgrynZwQJSMbcScYw3JFpL1fSnzmBKSgtWUXYqunFCwQGATHD927zdun11Hca",
  "key7": "hkFvXYCF1wcexo3jDEvLv6uAzSF3SFTiQt33pi8nHphJuVFijZmX5wH5umePAfqM8THa23rcLrePNdxoXJ26PzF",
  "key8": "sHom3aver2DDMp2GYWnhGduukb7gNzCWWgXWJThUv7zXAff5NLV1GjMzZeaNL7CwiLXV5bgYDxCSDRhVWA5SMSS",
  "key9": "NTgXYpqjoEc6fLXUUjy6sJ7up8XxgYJJk1dbXWue8ESfXoWMLy2yRpaPoCNdbmf5TjXBFJFSLvgV43AiD7t5xf6",
  "key10": "27nHffNfvhgVDgNgGcDnECeNyGsrQBVws7scSz7LYMB7NtsB4Ztr7tJA6dBr94T2yrfBEe78eQcNvVMawzXB28x1",
  "key11": "41s5owWkScBxsEbrXGpRPhmdb3h5krcoz2QBqcJ42D5yJ4UYixHi75UaCMUgXVatmQWoJz6KjGmK8DnU53edWfeE",
  "key12": "2qZdfXgRxqxZ2gxbGiBdenteAMUtTL1me6mGes1oybBSHcEXrMkqPZdXKCavhBoJX7qNeRTiQGzbZmnwskUvhj1f",
  "key13": "5sR3HQw7FiQ1BwYwXCyMBcSNUasF6ocqcuAA7JwxLq4DqsShJoBkpmFVntpcijE3gQXpvgszo98eu5xCNzhiWxEy",
  "key14": "2qUti4j8JKj471u2LKkHaDUnE7bE94dkepzPXN41jUt6xvzcKAhB3xZ3PmZuBLKmsHo7CDWV9uGWhNm8M1pWVuzn",
  "key15": "3pJyZ4nwNwupZAJfYrT1JSvMQW1v4GqjAAJD53MGxBN8fJ536wpoiGkjjqTtsaEuaPRJBb4G4VG182BAwtL6xH8s",
  "key16": "3NjmHwCbzVD1SwdkQ3domBTYLacWG1dRE66kQoeKGxc2AnmG4BifGAHvCHKYdvBNf3HWJcPPjZM7nE2cRWRQ8t4r",
  "key17": "3pjkgy7S8Rupa4HNqdHHUuKhhSUEhM1rwT1E9LmrCxuvYWjGK6dTeKWScRaLieNKEaLyoHzUfHeA7S7Yc1ze7AeJ",
  "key18": "QeGu4UEoP2z929p7tce4PARzVCjxqAwd6z1qxhyWRAjqfECsdSErC4m6KSpEfPEFVpW7r3g3pnTw5VSsAsTvtyM",
  "key19": "4cQNYETfxcwg2ypW6Rwe9w5Mk9hSAWzZmnJFRc9rCSnPjhZmtmjKR7Zi1dYDSHuCeBCYsEQjt6W9nx8bmJ1PLVtc",
  "key20": "2PMpCXGZQmXrLYACgWJSXRKaCo7Hfx3iuPeahR372wa3XDMFDTRoVcEj2mHFLdhi2MwdiJXjETu5UQJzHU6BXeFw",
  "key21": "3mpeiTGSnzpY2FbyFphPZhpFzCWrcvuCkyY7TkpN6qNSt6qvVAMMyr6goXqrTjSXjWrQKacHB8sjZTcAj9fkJcus",
  "key22": "4Z9BFTLu1f6MpuB4Wsi16JDj4HMeo7FwMgZFme5VhdvEL2CXhPghXkyGDXnUHgDtzRFwfm4tZiotsrCfcYdZmYyD",
  "key23": "2Y4SxRo5TErYSKeKQnBcr24RRjpyFPYBMLoRNR6DUvV9fpiFhdj4u77wG6vGVMrjaPv38pnSQVzPYVppo25KLfyT",
  "key24": "2hJBbZw7tF8MNk1Ey2bKUxEGWVv7Kb5AG1QkBdBEtkbvNpbjg7MTz6sy4i1zZHM1rdJRAxirLJpJTe9cM7mXuiJF",
  "key25": "58gZnQR2VTGTrLu4F7HCKBsjmLAdPiirVoyUEt8aPF1DUUnovH1WLe7ySGdUtFNcic7UTdzGuF6xDowySSwTZ6ff",
  "key26": "AbgJLVBM2ForYDT8hqR4ugS9oo8DgPA1x413kfC3L1GbNc9XH1XE9zMERreubrt4pqQ3GzYdBwakGoJisubmVhQ",
  "key27": "5RpPbXUkYjjzCLyLZ8CwDvVeUAAhmMoyXEdn5cZjT176UXb6V9rvJh4yZvo8ydNux37YNgiTHMwX4LvxpsWrMF8B",
  "key28": "65Qr3P3HRZftCxFHaE1ru3fzZkJzpsKMcPmaPwbY6mf64Vye4AJtaFgb6PPEKfGGNJ4PccFXAEUpG7MVicruNcx",
  "key29": "1Bwyhi14goX5ujXtKkBbhNtCtF3zFvQUHGREfLdaFMn3WnfC6KkPGC6QPNP9bh4SRdNC4nnxzi7w1bqSS7zKhFp"
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
