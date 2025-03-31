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
    "5L5Tppbz2RKeUcg3Pd7BD8cvcyCY2poXyE5wQbwxjaBujA1ign3FZvbYsxDWQPdunv4So8vMUcdjQ79Ub6C6neQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TwReJm7E7NiYCDQEngTAwpcN9iAjBQaef3fnrjMrfbqtFG5GX6FWXf2SBzhNcP7miZyDacgrmKr4HDs4uyp4Ys5",
  "key1": "3GgADR6d1PwvqPKerVCFCyrsNXQtkqM4VMnkmdtunEKPDdpkZsFEiufKKwuJeSmnu8pPytsDvJevnRxJWkek5Ko2",
  "key2": "35NsGye51UqvoiudtsSRhih2h4rHV39RVuux8hP9KsbW4Tjqd8E8LM9Qdoaw2zKyor4vS32YyFXQoEvHTHcGYJQx",
  "key3": "5MroGc5U8JAWNaQ8oXcGuLs1zLpfG5q5FQiVVFF9fCmt4unvK4WuHwirCGVyunCwhx8LZeAdJhV9pqg1EhN5RSJD",
  "key4": "2mAxAz62mFTTNMRPNr2QZn9Kd3KEPpgmEFhKPktxPxYpC61xhHGwhdWQu8XCzhBHYhgujYHmxTWHdXH3WtpUThZ3",
  "key5": "CuLWaopwW4ZWETCEiZhdXZQEhdhx4cZUyihS9KdAHbQySEJat4HzbMhuh2CXoDGbCb7GmRXS5SHwBLo2Fx1RMFo",
  "key6": "2H5TkW3exzpY4LZpkA7r12EyT5xoY4CFuY7pwjB1T41RKWTR46vmjxJF5wURQtgKcCB2KCCH6obwwSRvdkVxu6GR",
  "key7": "2jUYJXGY6qhJhyEBo2q74AY85BA1YHdzHZJowAsPC4MasGjFbC37AavmJkVj9b8dEK4py3qt318k3Zu9B4DzcfDG",
  "key8": "5cMcPCqcayNBxmMucZWoPUbfaVPqxZewuLjZEY86VkA81uy8d2DYv1EYMAYrgJWXu7yh9CUv3tdY6mu8SypqMAPh",
  "key9": "3aZYHcSAwxgUQVhMm5HbmMACmcLSE2CXHYfSZY99c81izPTaBhKXfSBBBmpgJhuSbkfZwyQhMyH3ZxivyxZi1mFJ",
  "key10": "4L7uXGvMAyUWwV6WdpzVto2kHjLsjAbyeegSyhJK9bJEyfApYmFHywjFxN3XWwreCi3VpRjHouX9QdtsT42VNSFg",
  "key11": "59y2KMV8apKCcVnv57XVPhvVo2wJxXhaeTdfEKTb4DN6u16cVfe23tkU9jJ1qjoQiwk4RbebwPfTL1RpKXEv9aFJ",
  "key12": "2pWMza38UThYCRFJVSr1YJuHSMC67XavEo3VNdGyZz3TwLkD56sYbpSrRsotzPaeG1tkwTtc3dboPzNpt9w5pV6i",
  "key13": "5FL3w6xMnfCyDDFfP17PpygNCfqV5sDkifCfv1pD5cfpPARC3FGd6dxaDfGLwqjyFxrSk7xWt5sLQEb7PSk8sGMX",
  "key14": "3nfhKLCGgJ48vgX9Z3tfZ6nvDVfx5oQnwKwN2hh7rrNwBpZtw3ejtgY2YNHkHzFmWPzvjXoSzn3HJTmD14FNgpup",
  "key15": "2aWt2o4XUGjXFZ2KFotnakKcVfwkzRUNmYKUwSvF3bakNseYuVoGYbtD5i4eUHJV1WVSuJ2vpfmtV2U6oE84SsQ8",
  "key16": "57s2e5fxd2e1pdKBJvwpd92yVHod9XWx61vmCmXtdThm9cC7L2a1qWXPVkP5XXRYCCdQ37PgJkXnW6UEzC81fjWR",
  "key17": "2nqs39FeNyWCvYGmofjZhBGqzguf2HB6yAtpSLF6suMZbrBsEHupi6yZr7x9BKPUTLhinuJzi83ontLhfeJKKajH",
  "key18": "CTk68bo7HaJRm8G21CGYJr7bEmVt2vizz6MvGmwG43EMBynykG9FcCEoXP5HAgVos7YnsmCp2x581GkKftfLcqd",
  "key19": "4shqgApD5vUXgdCajd2KF4xU1FmwgidN88Sx4jEaTkfgxqcW8f2cfiTc3S8u7DCrWBexG8xaBLLXvNUFgGGxtsR6",
  "key20": "4eDVfVsJPwpkxjscQRiYKtXYNBxxfE7S7XjaGsiBwQJAgoKzwCYyGy25paUwrGrtGmd9hCh8WHNNCbrB4oGPBZcd",
  "key21": "4eJoSXBJQydCLJSLcVrFhugswE4nbtbeDUzDuFJSazyQpxDL345yLr7QrrXUhQvM48WKhJDx9rTmEsWJQPKfRu9X",
  "key22": "64YBR642Z8mvNmJVDcu7K4gjPA3TCVv8wJBiEPo4UxWBzWYGETzJttr7bHAiFtMoQ9ysckitn9gGSEV3sPQgdDLM",
  "key23": "3PtPJPvmnYMYqu2H6G9Jaz3tsRSgNQTMdpiab3h2Y9kvt768Epdvm6qLTUNiyWSWBSKCsw7i7w4Pod6tucsksjaj",
  "key24": "4rbKujeWKBYcirZWj3B9XNfA7zwMUrXckjAUcV5M28XYRoTmcxvZHBT6zfK4huqwATuSEJVpMVxvZgUqtQCCF2gP",
  "key25": "4mjzicK6wJ4bfrGNLwvLUCZV2DHpety1zx9YoCWsyZyYQ6erZ2RU67EEz9bPbV9jPn1D4wMqCKyDiE9DYDATVQcW",
  "key26": "666CBgGYMYAuy67o6syP9RP9hEPUFVqLvm36EcNcVuxdk9a3hTEtzEFdTmrexsd77wEwzxbPZUirpym43JLqYSVB",
  "key27": "9JHuHTwq1NpbmL3JSbfpjHpFexfFNi5BgRcDGfmLcLrTdaBA9aDk5Y1Md1BX5YEcE6WUjS7AfiFtKSNVtqtipSX",
  "key28": "4yJ7aBVto228jSRRMk6tCmwY1pqNoRmhgxZBRjtykhLiD9n7whvZm4y4iCPY9XRgNLhc4TWnpKb2dE3VTnrpk8Fq",
  "key29": "m8j6p5JNk8aYYAFMEgPtTJcZA5cjN2DDMwXZD9QHLrKhedk1MmeNvNPGQSnBWuxL6UekxNB9sGdYDoKN2Ti7tah",
  "key30": "rnyQwpZzMHZXh6pXFkt34BL342FNnhHdzsz7U8ZHMuFfzZVN9DM5fxXaJqjpS2cvaLbvG1E3q8MbaSqD8QbkYdB",
  "key31": "33nxppmZRT4F5W289SsUSs4ZwxQQdcAY4FL2p7cujAgWabRBJwN1xpER3taNCJwgVBtSPc6VGxneGK6RyBxsYC2t",
  "key32": "4okaJfghStcLGa7CWN4nUTwWU7Kh24SY9tTnT9xb4a4WWRKcWcibDohTySPkUgHvUJjRFEajFWUPuLo1bgZkox8X",
  "key33": "54Xgu1BxUgpEEEKFqU75q5K6JfmkyTDrqRiW4vKyXPNoMpygLCsEyRBUgU85Hz1vPuFhNfHfDXcMExqyGrtVHw8P"
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
