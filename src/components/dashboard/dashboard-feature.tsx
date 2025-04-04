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
    "2JZmYLwe4Zf3kwdRpyQVSGWT2WacyvavhUe2x1SgAWH4P8A2nyAWfwVUxCVAcze9EfYC7ijsV6GG22TsNd5ankDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bccpTCfBcV2DwZheiz5oJDss6YR5y8gLVjGarij2Z3L9jsrF8Hkk9unxGLwPykS7erP79vh9pNQgewo1r7RcQy4",
  "key1": "4YCPyfRG3bbKsNR9MscmvAF9GVooqPSjsnDJnZmTVMkdpFQ3PmMDodFad3kewyKMBy7ehTELJGcyxPzii9HSoPYH",
  "key2": "3o7NpmEmj4yxRwaETDmCFFDjsa7AnwfvP5pZJxw5SCWvNnwsgPUKT9ASkw3REmyoRMWHvpnPtDp5MFrQneq9VTSP",
  "key3": "3titjYzuEYR4TMyAs3jsRp7iryLY3ytUA1JDGgYE2e4sipUDooQFtUHDhUmqVNbXCftFR8bm4L2VKavgBsoAeji",
  "key4": "5QPbUFzH33j6SfCmfsfK3zhLHDmvFz4HvG4FHZUSRBLc4KMPVtzznQGS7otZTFETBgGUYqd3gMXBdH3qA2fEjqD7",
  "key5": "5jj32pwcyGVmP69MSPLUjA894zbV6ShJpvrFYfHTZ9SXY9dHSj2Xy4mFteZWunH9NUjNkVsyzoiCiRFgLmRNnXvS",
  "key6": "3zt8KgLXEnkF6QJk88EXWoboGy16n18Aw3KtPfM3eb21zSYx6nhYDogjtrYkuxcm7ZyGcgapm3bfstQeRuGiKwhY",
  "key7": "3o2EnPDtZJYUuqQSzRhEqN2KhorR9PBWrAZXUQV2qqyiN5CvtziEKo2TfCjrrq2DM9iLCZk9ZCcNrsQCC4z3fGbY",
  "key8": "3pNKmPtPQ6Ukm6hAvjuaAKdfuJS3uUuR38JLdwf9oGbda1MYVySADoQXH77g2ktmX65aGNCSN7uoJDmyjH3BkE6Q",
  "key9": "2iYB463k1zY5Qo6sZ4DXHS1b8cPZepc9xaEPNyB7sH2yitYeqgY15utwcQ2548FtDZ2iWBk4ZPfiU28LJoDFBFyU",
  "key10": "3KrBiVKU4w7ZKUU9KktWyKvg7Fe6LF66oTaHiqQn9JET2ybbYVW1eakJqe3AtmBduL7unKZC7hHF3TzS2g9Zgp5G",
  "key11": "2L9bvtYuc5py3wudm8z7rViQ13cCUp2Rt8P3Qc5uMQVQcoDaiyvEXFNj98hwC2kFVv18jNgu6nQRA1mdyiaUKYKA",
  "key12": "fmEnth9HunGzbogypGbiTZuiueV7ueew5kNh2UpwsQtg5iQWd9h5jKNoAJobEgGMsaF5eeoXGNycMdmriC5SHdQ",
  "key13": "41KD7PMJtGL2gsLNTbgcpGZ8qmBBvJJAYiKZiqkTjnQY4DFVB4KaoCHGRVEgUyb7swyQZgBJsNpzjq7wYhmbpBWd",
  "key14": "4VmpWMpjfP5DofAurVsQVmCz1LjY38ykV5KM3bVgigmeH3N1Jw3KiUfExW8y44unRwiLjgreGcpYsYgpyF3boSz3",
  "key15": "4qnGNn3BPrFWswEuDKCi92yiEAK6KERde9y1qn21JKuQPQkghLNgsQzWEGmp5QXQRkeuDWTz6BuGXsZF4fiAiJMF",
  "key16": "5uNt2Hgz8hYApND8aypbPrFEDkaRd5JVP7WUzW1yRPQskD3NqgDJb14Eo64AvWWbz27wmRYJHqXpwSyAd6P9ab8L",
  "key17": "2fSiEoKLzoad1CYbAUMBgcCdQeoPuxBL5u4vEAsjHfihQbdc3mVNzfmyJi3VSNPTerjdYPqCpVqJcqPNTt5wuUbE",
  "key18": "3x8oxHS5jBjXoo2S24hCm9nx4gGYRJTCgoPxXQNQT3MFXibMFy7nBEDq9AknZJuDymsBrCPeASj2Ya7uTUaexUwm",
  "key19": "323uPk9tM7o3Kwho2HgKHUCnj5hLQHhRryRA1fDdrvpm1ZfCfJwdo2nJpYd4G9AHo61tyb87CYdzV7oFLRYP43JB",
  "key20": "t8nEQfJo2TiB3vn6WeVBMqK2gUe8pfzabb8aUKH6U5jVP9uC1LP42UZAzN8zUj4eoJMFTYwaCdp7C9T2WdK9gZA",
  "key21": "42YqZFhwE9c4xVWwV3wHDf6PBYdXiRdUGvPz5qEn3t2JhFTFduyBtPsBFwLmgcF5XAu4a9NzdXwmBaKDzZyp2L2m",
  "key22": "3G3LudbzV9z8DKEESZQ3R2f6ipfv7rnP5ThukM18mwmh8hSVzux6ygrqu8Dv6oqiygE6acRJ46DZjTPcKGyATkSc",
  "key23": "28iavDra9weaxXNVCdGWnqqevpLq1vpJTZhvjwY2d4HNYo6fevdJ8Wox5mmrXBsgEdERXp2ajEXgjK4TRcgzruRz",
  "key24": "DbPpajeEZYHmRuysospgdKvRp7M5SmALw5qxaHYRMjmCCdhmu8Vs7BDyxtBRJvHg3ZuzXK25D2GXHH5oxXn3G5N",
  "key25": "66sMVfYk7pPx4vm1LsMiaac5fZTrpUycGoZxTq1eWV7yLzS3UZxYXpdJZ754DSdgkTxJ56ZvYo8iZ29w9cm4wJ2P",
  "key26": "3awmwZtDXwL6KGKnv3G1av8StrQarCEs2R4s8nc4yvbAdaEZQB5MY2jLimX2TBM24pdBM3mVjBjVNvWr2zDoWCTA",
  "key27": "5Wk7a7SBk5fpP3pRhRqY86gt1FRCHqswCiJozTH7eXVCNRxKmBMpgCZi87fGte19nkWTszTENHRAumUbHd2qXncX",
  "key28": "4gBLapkuv9ur6dpPBB9trme9vUPtS5XGeL3UB4z3oPj6nmAQhhix21NhgVG59j1Vopg3Ziywa1rQw8j61X7U1rh",
  "key29": "3hQg2HZ35dpB6ns4HDqLvu9u61X9JzZUZGnEyNNcukT9Frje5LtzchfkUS8ZWNqrRuqM5auB7UG9NCCeGgdGzyDZ",
  "key30": "pLgU1SpcowUiA7VffvbCQSda9FCF5SpVZQ85xvBJ6yNVZ5NMfPrwhqWiVr6ZTMC4ns1QDJrmWPSM25FSvKuWPi3",
  "key31": "4odc8MawwuyJThbJnggGgS6ZfH7ga1RYf5gBzFJi83xRAmzexF45ZxrAsEYieiy83NTUpNfRdsmnoJsb6MYARyhh",
  "key32": "5GBgccwxkGLgGESHZQsmoLYFctRd8dy1N2ZSRWqWWxGKXd9S15C56PTTpzavNuHr6tjwy71nmL6BbLnmyhsxKDJF",
  "key33": "4FGx2k8xnSgCKUKo4DaefMSCHN7oWY9KBv6dR5qPzvT4Bs9o2d93wARYtc5fegS8ccyZSscEVSoa7WH9EVYBT1v7"
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
