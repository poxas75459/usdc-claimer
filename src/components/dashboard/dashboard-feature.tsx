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
    "3hJ2viMDBpkaLKLrckVgidPzYq4rsD7X2yDhBZptFmt5W1pizSpvBgf1CvD3Ni7KtYwr4M7V5iGMGNWcVzp82WMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhd9FQy752ZTyJrrkdd3x8qc4xaNsM7tnbcr5NYGtgqieBq3rTBQgeoEVXCfyNK3rdksbKzFRzrZME83qKvzFZ1",
  "key1": "3nBFTiURZYgHyem9i9Xtw7Si2o5Sv3Rp9gDALnsKecRLxSdChzxU7ELZm6ffDxiQpkivS45fZUqdiaAkjpkhqjLb",
  "key2": "3XAV1sugfDvuJUjXBx9ZjXk15PsVZwtfWXe5EvBsYYSUsf4dmKMSqr7N6nWh2X1pHtxYSYjsCyzWnSseWeg6raD8",
  "key3": "2YtUqgX7FbihGeVXF1TvKUzu8PBu8LcwtJRMhhB5yJptq1UvTdZiR49jH1htiPGKt9vQrFdmtwBwPy8SM9bAZNS8",
  "key4": "26S3BZVN7S3JJ4WSdVuqruztzdJp9Nx4SiZyjQZtj3595jvKbFCoLWa4vzHbQpgCotWc86PbemTpJfkzyESMf821",
  "key5": "5LZDLCaTroNBARjpzZ9uZCmcKi3Qq4JogKAfVUkNJhUDQEcFxcXu3uHBHxQhEm4NFS3xCBGC9ZPkgEhGfmNq2avz",
  "key6": "5hdAtd8KTQ91CzbPBdDzjVefu23u4N61FxA4YTQzJc2e5ZdZ9KQHyiuHUyfaJLWomxEMEv2rFFhuBqctJqEc3P3i",
  "key7": "46SH6R2orCJ5tNWHSwBfoAidtEMEpTimT1yobyurVszq6sZUNRggZP5GgMSq29qaRbLoNj7UmabwPqhxnQ1zPRBc",
  "key8": "NkGqazQrk68VQZk3hZBPWZYKrKLhmLBqN686M6i8RMi9UjU1ehEEMTMTQW8zbx28RTEDqxAeknBJfyRyztovLaL",
  "key9": "KXwKiagPZqDrJGKAGg2pVsXShcKf2yJvSmYeJWHVNh2m7VHKheKb3j7kC4GEeFhcGmPprwFkLkB8799pbNM3EYS",
  "key10": "Yshxhfrh3u5bmw2phawSsNCeMUaKdPFKBy5c6zm922xCBxtK7pUHViD6FY6cFZGPoigxsPAVvE991EVm2SF7dTC",
  "key11": "46CcWsF1hX1TUeyWMA46pzCeR5VmwpBz3dZrHVYKvgnVxQ3igqc6JH6XdCc8817C3TSnviw2tBYPLWboCHoxsDse",
  "key12": "4zM3cCGHmCMuZiQQWhkTbRqoWoDp8w7hK2sUb5cZj7rpzikKro1LxSSH52WXLR8G7XEBXgUYdGw5pGWFWLAMQ2VP",
  "key13": "3WrQnZnFWHnrcawUEJ4DynYD3cXfyDkVehDiqyAoX2LqczTADJUi6wrwpmpXs3p17keNgbtJJojhHMBGYzJwjxr5",
  "key14": "2DXSq6ZsJQ73zZJo2WnkGh952eU6YXFbm6fjay2sNdXLFBiP9pWAiwaGFqK7mTBiR961Qq9qek2Evx7GARAgwChq",
  "key15": "5dt4gZegGLq339oxYDM9Nmh4ZfqqhGTjRgpbYQ1hzoPDNaA2MDxa8PHRuymhsM4RChKxkNZWnfoEE1qFA11iU6fR",
  "key16": "4QbVfTLNGUYJtw9E2CkC97Cg9cpbUUQjfiZorg6PNmHbaVLN3eH95nDxwawtUGMTDoTvTEj2VU4e9nqTvRLtxKsB",
  "key17": "3GaZpCMdRrUk7PLmMGgXaCYakdoyDda1L3tgvUcDZ53EiRvT444czVg12TQXuCuHuKtTYjQgr5VAVq2w8h1Pjp6e",
  "key18": "4JuHRu22uQjY2dZCxjcHp1JTfkYoUDpJzWD7wMskzd6nsjtq8gP7rwqqGaRxRmCDtYJsjfCrunj1QGKJRs82L7ka",
  "key19": "5DgFtwF4wr7FxrvN7jJjibtu1YEMCgUatHyFN4741osrd6TEjhtMZtEyEvK5XyoBVY4kjhThLPDAZgJrLmHhCP9q",
  "key20": "126cf3qjK3f3K4cumi4KM4GchZJ9HniVmAWs2ZAN1mr1n2xXEvTRJ5hknexG1966eTParK6aBwuZjGyLD1rGxz9S",
  "key21": "5KbRbZVddf3WHAtgYxBbZRmPZ8iESG49n9eWGaZqcWiXPcbGpXfoC23SorAFY1H9XaNzTswDtJ4wFfJz2Pp274Kd",
  "key22": "3gFGX5k7Sdmpio3SCEziWuNPLpYfhpZCGK2GTTrs9pCRjVAutUXvUjm3gj8CYhyvGyt19cnYVa92uUUHHKshpxL6",
  "key23": "3eE2RnvZM98kewv945HbdqjcJT9eU91h6iQnD8gWWn2LqRfmqWcAKNptiz8wkdcuTvm7FvNh2tV8j4sBrPHoBee2",
  "key24": "4ekG2eQeN6GfsaiFAYhF7ogv7t2Wzx57LSkyLmP2tThAQyyNXXc8GhtcCjtmdgV6DetKkf4wcd8ViaQ322zmhuGX",
  "key25": "3Cg1rxWCBZopwjqwsmAVN5Xbwmjkj96uPGZNgBAYHdHeison8FmJGbD67SA23CggfsV7xTr45nz4P3VaxAE7B1uE",
  "key26": "5FynJSNG54FQQ6emx5NNmFGkuuoNL6x8R7qdsmT1URo4MpoR19ZiVLbdiZziuGvjFrVejB4Qy3uBJQbL12Zp3tc6",
  "key27": "4fh4zER6vtEouUSaPCZHtKTRAUQqv4bv7j9vVsQRjU1641CHTQqMCH3iRJ9r7NVGbA9mvCjcPPVTBV1yYePXm8Vn",
  "key28": "1nBrzqHvVud8YsUhNsDfp73AHStQ9oXEbBGWfN4XrrKGruWf6SLFWFAZCT1LpCZodxX1f1vc4W1LXiHSLQHxU3E",
  "key29": "2LF8kfypqiTDtNC4T9rnC7qJNeEVa6WA8jfoaYHzaaxFyrANjQYJZVcnQUEdcJmGKRzEXrd9jTvrJGRQ4EndGPNX",
  "key30": "5gaU8RcAgwCdnmzETztqZEiMSAZBHT3DPmi2TwUmS1u7zQnbnAdYzQXGGonbpcbgpu4g4HfMnjgZ2ZZUfJTBC8Gs"
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
