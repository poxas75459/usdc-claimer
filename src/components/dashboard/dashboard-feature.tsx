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
    "5DK6MXRDFJMxKNcq8edQVAPi3wDddJZ4Y6q4yEpLBfjMokMy1ox9kkyJenNRKjMbJtNDLTw3HjMaysckBuT3fvjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618bAquvz23by8KNHkaSvQB4GptXz2NABJW8GkvWt5BJ2q6yfKQh3uKZ8UsqCYUtey41DjsBNm6Wwjf9UXMSqvYe",
  "key1": "5u3c3JbwZz9gmCrrs1iorBVNRKap2eqHG67XCDU9eFZcH7S1qkH95QoCHeJE3NynZsCT6BEtj7cbGjeEfXCXZ2HK",
  "key2": "V2nYQNiZ8XcFTytfRry5Erh2ktL3Bh7PQXg2cRQGScwDv5e5Gh9cHF2A95aB5q9M7qa4BaXP4Tbw77o9pjL5tGm",
  "key3": "2754wd36oYFbcZs5zd7fjTpWVYTsYxfXKKL2usvm8WXP2FN9eJcezDUkZjcNdaVUmWqJRsfJNAH3SLHtpxSoUS9q",
  "key4": "2ByHWFR9pu4ANRQbgM66TkL7uyXNdH2bNVaSgWMrG8EDgFQhcLmWMfzfHAm2u3tMGxpX2tGXAQwo7QZ7ZisRBVPv",
  "key5": "3Bbo4WWhjb67V2FqptT3TXPC6AvsyJZMe1vyfhuhwzMgH9HycUkJXZsbKTrN2SeAQRqRUERrfkMaHtd64JFqD6xu",
  "key6": "2nUTc1k9MMsSrDwJxPmk9mNg2qPrR9E3JL5eiJu8gYeoQiMWGTNW9RnQ5Pnq6dbTKbYePuooQMt45Bpy5UBjjmK3",
  "key7": "XsVWCkG7o7w38TwLELcNzzwjvzgDiAt8bFtGnUFhgQn6uuexNAFynRMDJbN5RJpjB46Nk5ixEfkNN2DJZDZ3G7G",
  "key8": "3mu8Xfdhoysy84WbALXGg5aMsYd2yp2LW1VmpY6ZU7HxkdAuYLLEVsf6hEvAouAfG5EGSJyqQ9TUmMjNW7EjQGMt",
  "key9": "3q4x6EPGYBuaLx7KPQxYQ7uTd59H1KY8q7rHuydKHx6QTTHenSckhLophdY5eQEGuq14RDTzNDk7onco72JUyJPi",
  "key10": "2Mju6KQnGEMXFNFzznyoSvVMMrHXw9m2FWmsT2EqDDiwrgXypciTr6NL5e1h7eoyUtGqNSEaycxT2djueYSjJAt4",
  "key11": "2n2zwRGY2YiRmY9EEH9xgqZLBNE7py65XRFswvJw5npVKcko2aUAkncVHXiSQd5Ly9skjc1P6b4kAaDbJPKA5uAM",
  "key12": "27s8AFMPyfYyx2ufkbXA2FLk46SUw5fTb1tt6SKS1ok8TLCgd2fehgsFnexBKBnvcQ1Wkyv4HaGgecZ7cpc2HjfF",
  "key13": "3ggf4obuuh8Rd5vcx8nB1d6ZmdcETo1t3uj9KrpXHtARkQmdY6Uw2DkUwGBhnS7yAtoGzisSjgMasR1NA61NfwZ7",
  "key14": "2xV6isKLvKRPk6W4dGwHrtd3pDaCceQhooGiZScejmJypM94cjhnA1ASRA2AdCHFXZ6QVmroQ1TG2kjqLWh3Qk2U",
  "key15": "5Gb3KkgpAbNUYoM6YUoC1xDhq1Vc7pkRFwgdBFoe13aZmtVf45kfVoS5tnTz7dG57pVGRwjrqrktqfVVxGwASYFa",
  "key16": "feARRPtry5EVFFpdfhUtSkXoXAhYdqeWgbHqHH7m8vzBaVpHG29PrKHmJbwdw5jhqpUZjQmnUHgkLoURUPXFTAn",
  "key17": "39ke6Jy5uNkgpRfQYWL2eWpxnXk7SGHCFaDAN7KtkLXeCJU3rDd3eL6SGeCJy713BLBSvqtdpLhGSg5TKwDTfFnN",
  "key18": "hs66tsKVZr7Tt7smPkriJw1PXotVHmuxmnQRLMYDP7ifs44amwHJXAPJrGsrGb8eZeteBfNMXprCnzudzApff41",
  "key19": "3eEvVtaTpLTJqW72P1Xb4RbhdadpQakCLLDh7jXBHa8D2NChpSXSLuyXF9TLWQLbEjYGhjdx8JB7kcSe7vPAqCNa",
  "key20": "41aUjAtjjVw8PaiVnuSxcYtweZ5ctCoMmYaKmbtmcGu24tVgAfqjjPVuJz5rEMn1UQn13xPotJeGV8AipvPtZ4Af",
  "key21": "pnZq6FrFKU64vvRoxmBWraydsULwwM8B281yHsXweZ3zPchZ8kFZcYFB4abDJvivHMojx7Ysu6Z518MRVjMvX6f",
  "key22": "3eK3dG57DtUn2TJLgmnwNawKXQQxHiMNnKANuQNPUMwju87dG52VWAjcTxEJRWP9Z8DnPjPXsEfT7DvzzqERPccN",
  "key23": "3iQhV6noLoTiE1QfyRi2v9dTurKozFLBEHo2FaCJuPufmjvxUjyPUpjQQzXXkFALqXUqi8mP21gEMecATt7FYBgm",
  "key24": "CQPt4bmnshAZAxV8akUjyEDVYMxfCQaA57W2T1m3xnHdzPh57EuonAuuEC6pjC7JbKKtpkKHktUSaFKuCTNSd1R",
  "key25": "3FkmwxkzAHpNE6Zi2ex8HJX2BVE8urFnxpZgkPjk6PZfVZFt7VfaNkWuhP3HDAAhVSnc2sarBoi1gJS8Z7iWUbJ9",
  "key26": "4gMb88r7qbLR4u2of3zbzSxtUNVTXZwJW2uUM5wPcXeD26cGa8PKVPCwBNeUbfrsjW17XR4Bu7QQsfkxcoyvoA67",
  "key27": "5CERtYHcqv75s3JUJtLzt7GHTicRBihrvsaJLAPDR5sSsCii7uweXJooAMUHAaBGkK1MJgse8ibDi58cudsGA1Mf",
  "key28": "369qNuT5gecG7L19V5T5t1w4dHJ6SXPhJTXKw2h99f967efC9inad3o8jvskxBFYnWXycxJD7xnkup6Cbo4YHnDK",
  "key29": "2Pn43XwFqgFE3614ssp9QT8XvPjtZDw6crkhJW5XbN11Mku7zVc3k4K5Smj9ncF5yLo5MhHxYMfbaKNwSdRvyqV9",
  "key30": "39xTceripvcHPJnwoWeQfTD2qBDszzaUDX4DUeqcebcp9gqidE45S2zAKbtevhabbcRWn3apjF7829gWULgCxcZF",
  "key31": "NuzbE1AsAQpnr61Cn97xsv2gQ8Z9eoAwtkFQVJoVPvPpvW14ng2sz3BFw4sZCUxnf58UbKowMPk91a5Xy3Qvhg5",
  "key32": "5JNM6PRFEqyNMg1qPKZaim6ucesUqfYJJkC4EHjNNxRdaDhvnWZdf2uBUjhtRiim2MqzmcxyQD1azJnaHmHBUZbU",
  "key33": "3PqHA3Lh3AzrNBHKfiE4TFum5oGtsxvVTDqY7PvDBAqhAMqcqWpfi7mFKfYLaTyJuSLUTP73bGdcSfizDRk4CF74",
  "key34": "2PDZRigUS6kfBPafe8WndnBwpoK6pUcuyuUM213xheW4x91ApyZ2HfE6XqFVvq6AP2RTtcXvL3pQEtT89xSroDED",
  "key35": "5YapdPwcV4j9eMpSpYARSt3aF5TiY7k5xsbipx1RKzwShwxVSrRx9u1A9tgGDKZEjMs5tkgmq7YZE2pELoaWmw5v",
  "key36": "V4P9zC84uHbNVLgWpNCn7Qy5eNvpe3EST4xaMx7LvfES6PFfCjFJP1j74EC7eqm9BSSGoW8h6qq6To9U1dpr64Q",
  "key37": "3n7GNiShENWCD4WLybtHHqwZPRWaWkucRQj4ChQ2VujCzGbfPwoSfArz8shAUcuBR82SWHP8f1Fo4rUKnFfMZMD3",
  "key38": "4bXjjtarHzRR5z1MgHREc9YaMwMLrQLr8FhBh74RGMPtkiuHEKSTVSvLAvpcKiA1VmCSq9W1uP9zc23W2YfDcDa5"
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
