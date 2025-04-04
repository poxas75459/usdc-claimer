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
    "38GwZLQRTvaMKduPihvV2rr8N26x31UkUxAaLofQcjzQKjvaT3ztpifSNpH4Z5whNXXd5m4x4RKmwJyT8N8BEkrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cpvg8xrB68JkATmJ3DdwQytkuHj8LaAXaRV7RijUBRd9PVYWenpvczD4JYMGDoiH5f9LNMSn4P1mo7Sqt5X2s3s",
  "key1": "m33dvEbunWVa9LayasBihjLRYEW1nkyAJ1GXB21qfbWBLUGtxbG28vqPHLKceh8ZQdoV4k7j7CiuFFdTgMwyYD8",
  "key2": "2BZ68j5gFzHtJMa2vQ8F1qF9bGiGhKt7WULZ2j7gzBQiyjeQHwwbYgY2u5kmqjgFcnfkv429Aa6wv5xSPtgVBAuW",
  "key3": "3BJaeLGvjuEtpzJhwcKxZcLeSq3wEjk95PeaHamBSZNLVERb6v74tfD1nNebnBMvwGW6mbQZumJnUx22baMhjcs6",
  "key4": "3g5JPFJc39t3wVt4fgQqxB42jwG9Q6PTQ347U2GhiFrSWhFEpfoMxWw24HWVbHYjbmwgFhpawWAvdFjE1SKXCjHr",
  "key5": "AgL6tMGkikLZXevMeSTaqnxMtPpNTn3CEaG3XKAwvWP64AmmDHsLovocpXfGCxrbYBJpBDrvATJnH2zGuhi6QdS",
  "key6": "5Q2ZDrRZyAwe3J8rDtB1RsjD3wjzGJx7jMC3xTu3UdNLafSbCNZtfg83JfuUGKLaipo5CkXkot5T7e4Z65gA7a8s",
  "key7": "5xWjeXUGkcmVU752VfTvFzBhytiJ6xMLBRQ4J7iFZfWtfkAmWCgddiC2whuUdP2VQRig5q7VUDNAhcSPiDMWmujM",
  "key8": "HqRKHZexVzMV5Hw2sfzGfCSJb4c48uDPQVw9Y9PMPQXKyx3U3DbpRRfyoizrNwyHtTWsu3qPuFjHXA3k7ViUQNj",
  "key9": "2ZiSQxnak884mGniEDeaDL7BThn2s5RDBH55B3SmXUthMArrRJkyTSKGRUi9VnfLfB3bQ5N44UrinFVHx4ibBuAs",
  "key10": "xnots6q7mgLwEuBpSJTZV2Q3LddkM8MAFqZaZ2EP5z3tANpMdaSNSM7EkQzGcAQiSZJB17bVA5FfZ6pbjj8kxwx",
  "key11": "VRVbBMk3JPkNvdEVa4a72Kz1BvNN4GA2k9ussabvJjPYv98w72aSMoj7NaCGfQJxprtvWm5qmWPycSMZti6QiQC",
  "key12": "2Z48ayaS2QBMMjRHV7LWXndniDWuDp4EEL7Zb4KU2u4cKkLubUfTyCavVZUuju6naWFPthWtVacvsvFztc8cd5dW",
  "key13": "3HvfZHkTHpTMFSe2jtGpHNys7uukzNmeA2di4jtuyThPF9iiYdsqDdQSnjbMzCHwCyW1HHY1eGEEprgSa7zYJFkh",
  "key14": "6S645UENYTfoTTuDYQ7L5LQwKXMen91S99RJKqfbvPRT2b7LvBfeGfiuf1ANCbaqeoohFmLQ6ZKktXKM4ChEdrd",
  "key15": "3eZ8Eav9AFABNLmHz6zNbFS3UU14BLfBJwVGpc23wk54fpN8XFtspeLk9gCAfUzrxCkJ4t8U2Dpn1Ech7KVRgUTG",
  "key16": "5NFkfS8yj6sKS6TYAz6J2xncbmHBHbr56JaC76MGJ7J9DWhpauesp6kERsz3cgALYxPmXCSQ9ZrGWkeu6uabQKt6",
  "key17": "87S9hGK9gCxWsnEAjxm1vmxJycMnJoGLfzBFUjHRNxVVdJxASPEdtkCA9jVw4Pctsq49wKc6DJ4gNL2qVfvx1YC",
  "key18": "4UeUKJZ77YCyU5o9V3aSaNaR3LwJexmKFyDWNo9LTq6c4Ff2JM5i8RoryhvW2Ed3cWcNiB9kcwv5NjdMYumXjP3p",
  "key19": "3FrpK92vZS2dWpoBm28kxb1sFREgHDqUTKERUmsKeMqRmReGR6EosJnqDXn5RRCxReYY78fwHoV8tvfiVCo9DZZU",
  "key20": "2xcVYH1PrYa76UWMs1apY4UnASc8AdZEnSMcaonhMgqazCQdbqihbwzpUeWXmgfFK2AF6YEtNvuqMj4sUYHRBSSg",
  "key21": "3rHGnWmRbPQoi3999bz5SiHRWcAAcjUZ14J6b6ak6kNYw7sMR9LXVd772xQsu3GvASypnE1QdgNsyLKw4MdbTw5f",
  "key22": "2t2ttdTWZMjPb94tLyzbMVYADgpHiJgzKNtu4VL8dFz1M82g6vWQx2wixnYsUTmVykQaHLtwcQax3wYmzmBaWqnY",
  "key23": "LVkfvTMnGzDmtFWbAMAiZZR5gYQmS5Sbtk2vTGEx1K8tretHxWrSGdVU3CbgpFQG5kt2Lp9ZpL8FgLEiSZEnhNh",
  "key24": "2pEZXreTnxsXvKwqZ9MFa3WP77CpcGanfrH3CwiCCicPezbuxrHvvnwdYGEfEMCED145k1i7kUS7r3bFYFig34kM",
  "key25": "5ySJ6ddoGSoWs1Gg3JeJCvrPp8vbAcJouEVKApncB45DHUweQwHDYhZ6Fumj1B6CtnX5GjNqBjHsDCX4MXVT5j6d",
  "key26": "57dFhdfWbMugn1taKAbTnskggqrJ6zGnwTobVkRsakgMrpsnk7SJ3jZ6YYHQ8SFAcQspdEpYTij5zN7ewiAHBz4p",
  "key27": "5WfbbGm25sdfxYXaAouwpDnstSJCnQ1M5uE3fZHD5fBbYsMAc6FyzF25ARV5PmC8cfnU6mQQiXSP8f4wHnhyhu7G",
  "key28": "3A86jwsgMJacGhJd4mqiC3NnYPm6rdW8AiNW96uxF7PBL4FgHcXHHE8RpToUuVM4R4Zj7yQmxmggKvRXudSSoAi6",
  "key29": "33eoeN8L6fVX4sqFXMsXhCDWs5kgEnKCcptRVdyyx5QeTjk4HiEaN1LCwNrs2xtTu6qR6hra1YtrE8pP8psLTkdb",
  "key30": "2cXinVoqFKbNeVgJp4RFDFzs5HNS1MNpAjCwCCDtZsgPA7BrPf78Dkn6ynjtQ4C54j8BmtwAifh7uwm6G5a8zJAr",
  "key31": "U8kz5ieCXDJ5WTtNdjAQBufQc7AFHBT1ARZ8LG19uKaZV372kJNieQmnyNbS2Vbr3gEShMEwroXSp3qMUgDQyiB",
  "key32": "4xZcS4cMKgX7yJkQ83DHARvgv1WF6mkh3NFGxpci95viVRW5PqWgQsgjEaM5yqY6G4qv3G1eAD4iwiFLf6xwRrjP",
  "key33": "4BcaCnguNa8ukPVHqQQQcBLGiPqg9ztnPG8jHaBPphZEQ7ySZcYc2tnmb7tKLNkFsoksCiuut3mecjffySW9ccov",
  "key34": "5jS91bhsUNzcNxMVQQYZQhvTg7qbpuDBQrTaUi1F1EWaLL8yXafM1T23MCPsyYyunKfWkVvBwYxyQ3htzbxrs1Fi",
  "key35": "4Q4fy5MKFvUvXRJQ2aaGuKcEzfHdh9FqkTGVg7fw7rLh3VaP4STkie8uXMoPJdFDsZ9oKBT3aMmsAPAeTxptHspK",
  "key36": "BdLVzf2buj7EER8Eju3z6r5XGmwvTVqY7kqNd1DCVLNXsW3q6jbMPJVPrssxzLnGtfufbhCVpMy3pW5L5cd47C1",
  "key37": "61UJ6apWz5biLxyyNUQowMWMDbt43KP6uTgRC8AdyvD5trNNVUh6PVjiTu1TKD5rx6qxcdeMNtyxWF77zjUKPSpf",
  "key38": "3DSR66uvgQiYkRKR1KqSxXkwhWraPUXF8dGs9JZbugaQhin5RM3Pj33sobbmfXW52fd1yUFfyzG9Wi5Ke63253m6",
  "key39": "ESHABUdY2rzx8NRuQC5XTAedDUSJ1Zc3cQHNeuDFctWZozg2dQyFUqT8AH4NbJM8Rt1Re4HkqcjURrELtjPbrGs",
  "key40": "58JxgmLCPfjJBtG7XtPgi3qjDG82GgcTsV4oTL9qzHR5abJRSQPFWx1UVZ8AyxEEeuC2EgJTu3GsgaM59pJuNkyo"
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
