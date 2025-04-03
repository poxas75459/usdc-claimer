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
    "29X3d1VgnEsZuKYw7gqhWtC5aT2uKXN5TVZtuFnDY4uEz2drXamHRjYnC3VTvxpZfpr1y7zzHb3yo69JpngQUmpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rtF8mrbSrM7CiJFwzHPS8HJbFENv8QXkj23BJhhtHGsrPkNMTr2NgXyA7dNQQmHgcRMTge8d5woJXjqGBsSKQYN",
  "key1": "2ym6ZZ9Kd3jNvmX52uoQehq6WpX6XDRuL2Gbr4DeHPegXGYZsK1qU7vjivPm1dWiQyqn67VLsHNRaJXoRUs5BzRV",
  "key2": "364j3eQczaDbFpjMXGManT35Jvgv9sCwNBVLRjUtP5TCeocbcbxitCsrFeqR6mF6pRAnRGLaWhGxj8MiC5TRJJbE",
  "key3": "GJTTwFTxxRcD98sU48UuqRu8v73tb7BTjADM8dPaLeBdzm2E87hgErrUrfrcGf6ZYYoPhhKGzCwdBAkAy3CREiR",
  "key4": "QVXJJsk4z6tFXdFaW1KHYDumcXH5UBbLTD7oRncKs5ZkPiEiVrg98iadYwKsJom663bM9vy6DT39YSWbcfzsFLN",
  "key5": "5GmXZfAduJzHipTZweMo6bSTrVS46Lz6ZP7FLJ63zYNNh4TJpd42ccxXyEVDc6A1TC7bXRYZmsm5TowK1y81SXkX",
  "key6": "5eDU7vrXQjSLoPwzPrdhuRqQEtQUhjVgVHL9CXujjPiMZn9kKukQAT9ahfLSKftzacKrkBBpRepQip2L5k7iLN1H",
  "key7": "2D1g3nbSUfh4yNP2Y5bKBFHjjUHiJ9uLvb2rynHNEDY1YAewfnKiEhJqLwh6ssA3YBWEohSAD2f9hxEaqwhkvnaq",
  "key8": "3n6fni1wkotRZSV5nonMCEaS1mKe3BameArT1YanTmQZtMSHtGuWmZm1ZqSTs32bnYYwsf9RYC6k9GHQEXFXRja3",
  "key9": "wu2C5Y1qs71zTZNgNT2HEfDLtykG6yCVcS2AMkXnmxTf1bWdx9WKU3YbRFmPVfvYTDxfELsyF9NjrgApRTw3Nyk",
  "key10": "4F6oj24315L8YYLB3JxnRRDbGcQE6LNJiZmNKP9H2gUso3XPWyC61hMku8zS82i2ozza4jtd2vkW2Nbguz7dRZDL",
  "key11": "4UvGWMQguJrjsUM7Dva2ZtTJxLH5eZUJYbQ5AQNiS885ENjmRZmMSU8xwQxxMAPQsXi2hjU3DVg4WMerTwC4yVNz",
  "key12": "23v3TbUycWF6ARFRDEwrkVxnzE85TF3m9VEZxuw7EuTcDxy23W4uBXUCoSMUBnnFVzcnK4iR4NK93ZoFURZ62yMt",
  "key13": "4vhdVdG4pFMh3vT8AyJHuTLTfkYbgAZYLqTDHFDSLE1QccAaE9v3ANsFWae9f4QEr9y6m8CskJcBh9vYfHi6SxpY",
  "key14": "3jaWWqKs8GJn1TLAmzsw4DaHZdiHpTxZNuZXK1wFszZfz5RVPFit81nzFcJu9f4k94cso2seFZG27D5jz1u8Hs3X",
  "key15": "4rEnUV8MDjpfU8X6q6EWsB6qKeGZsmb2UAThkwR3ca6Z1Zeexaho4D6EtgoQv2q4DNvankH39hua9eM2su4rxYkL",
  "key16": "3K8UV2qKsqGf4TWsiW7WZ1Vn54evEDsoZRmNe4X33Lo6JkFUpbRWdZoLaW8KKVJu5f6jB5gf86isq5tUtf7YjYtj",
  "key17": "UHWuumuSxcSCfmpCKLTNLaW1G24Wy6JqrvtcsQowFGRWKGTgKQaZpQbM4ibB28d8ccyrihx49k5AFtnx2iFBbBM",
  "key18": "3Gh1zVeEnFX7PGmAjpzX2QiPQ5uznHoPwjsTPAo9xPSSerbePJqG512w6XnupBcvJ2pdbhHw5BSvQ569g1DdL5nS",
  "key19": "DEc1A3bpNuJ3cMHN5bd4xBiqzGJb7S4jT9NTrahG7y5RtFmDUVuE2dESBZd3rZjenX9MtyUbDwJLYoF5FTFuvJr",
  "key20": "5J8eSvCdojMyKKaunEJK5Lem5vYzHKMAFKoQYFcgKsDrvQV5Nee16XvBsoe3yUXXtjQ6CWke45i9mkjRSK5dKr8N",
  "key21": "2ojv8ZqQzAcoEKptXUHASn9hAkPiEurtuL2gRdW5LnMxGNKRD4Bzj4hntKGfWNuACqeJ1qGcgYqPEzVi33jdzWnz",
  "key22": "31HfmS5Q7M1qkLA3AXNmqjfD41entJLk3V1uH4uuXEPEGfu1GthZKHdk2d2H8ifVYPvYEfEbXbsrM1KoFRNh3FoB",
  "key23": "nbE7knQJ6N9KQb5WQDHsPq2Dnuk6bX9Buf53XJ6cTXd42bF14NcviG9Sr5CiN58Sn9hrAdBqyLo1ekmJwzktQWr",
  "key24": "53RiBafx6Dn4ieF118GHQXHWVk9q2NZ9aDyJxa922LvvYgk2kW85uL1NT3FpntyAAdvGY5evGVNUkoD6b1PKzvbE",
  "key25": "4cxqwJnTuPawJXmam2ULK8Szm2Apcj3E3eiiM88N6WeK5oUvmRzzCeRiV7FoyLtXSoadWcQdsPNtAz6haRjYP4p2",
  "key26": "36VHiZ5Vk4E9D1GQBvZRqXPrjzBiwCabvNXJa3MA6aaXdjrQdwpxRrTEdmnEAdmip2nMLn9XbA3WywvtDrPXkPEJ",
  "key27": "2xXYYM8aR7CKXUgV2EFEjwfrMTDSSwz9yWHnQM8gNK9nBkrmfbtGr6eQoFBV789WErzRicvTWSYGbzScf53wonR5",
  "key28": "tMMV2nMARbhQZ71HJcfgaXpLhBoJt4jt5XbRdrK9WyHoxuqs3tSTcwNUxJv1M7HsQdi11iZxys3wgiqEugYUJUe",
  "key29": "4jHhRRJUHS4cTb6gqxFypuj6xcce5cuCVZWYGJBULGVWaJQuUpdZybzLWD7wfvkezitp1yQbLfgb8xy81w5eLNse",
  "key30": "4oKDeoej6jFo4WZbMk3bRj4iiMnQttCYDDjNZYZLBmW2iVwfENdaE2We5nMvjHDqA4mCiLGxeK2dqDQt1DNzM1xi",
  "key31": "4Ctaybu4nDBaVk1RJkssFjg8JPuVRqDsHGazkABXRa6D6ibn3RspY825ye78e9mFxXk4FeJof5rydL4x8j7uWZtv",
  "key32": "E9LsG5fz3MKD789R1bFYBmXd1umyjjnjPfciF853imweoEyuhn9mKzmmoki2bpYMeNrJGBhRHKT4QX8KcjGBvPq",
  "key33": "tPZWShwwJnNJoUJNMCKyYPTmDVRFnXJzUkzvEJSUikUspuCqti75eGn3xnAiSA6USTjTuC7AqUk7694db6SWAsc",
  "key34": "381zAdi2mqkoNp2od2B4veEP7ZPso7iBGKCJwmDkitERPCEY4pYzL6BdQ2AD26xZdXZ5HLhtyPvBztAbpF2x5edD",
  "key35": "3LytHJP3sLzsUNPKTgqX8zfyLtyeRpNcAHHTskRq5RwNCb6eUt935H9FRQjkNhPJixkYq2Wcfgow1szjYMQrSey5",
  "key36": "4Vq6KKTPpE4LZN93vG6uiD8MCAf2uYxnKaCDADvoWiHD2c7mPej6xaxqMCcVN6iCp35Swo4g8M4VzucAiMFLoQYh",
  "key37": "tQKHDzYPUM2oAgACERJM3LZyihKnY9iedZH2hAP8p27skPfCHeuRAkLyGCqzSgzC9AXHSrfkQ5hWfUNp6Hpcynz",
  "key38": "4sk6KgZaewTUUwGZ8rUzpLqKcL7C6ohZj8UWffjiqayRrAhA2tkMUXtedBxQTHQg3a3yWCtmHB3FVdJVUzPzrVMh",
  "key39": "2oKGtaTJEbvCkKvCyUG4zPM2j6vsZFScTqxUoGvmDcnwrKKHxCyagS1NfGWjh53m8AenfMjLYtxbU4fxDhgDWSUa",
  "key40": "5bqoQio1fttor1fqEQDXCsM4Wc7SXVtmXGfTzqb13XRm4dHmxctTmQMMM11jU1dVFqUkoECaNeJ8WuMBugVoQzzT",
  "key41": "Go6JVZtp5ttGt9b48V9morQrAHcbmhuYDT5TKAJDGMFg3MzcintWMvw5L6dhGNpygCCPmXbjL2E15BS5weuABeF",
  "key42": "3VUbfSWN1DaKnJCmSsm6SzNS2ZzHoSCdJuRQpUWrNxtytVbgN7zYpjeGgoMuSkcdYeQSEMj8nFu2bWjMvR3Z1SMt",
  "key43": "v7PAQG6D47vfHDnp8tsCG77N1UMpwMyHZekwGa29yvbFFEmZ6ixQsK9rdThE7pFQhKEXq45sFU8TpthN8KACXm5",
  "key44": "2ej5hbEK1PFg6s5k8n8mhNWKYPSTBXZRQcXp4edQbdVP4aU9CDptmRJhYUrszoVJiwfxLQHZJSZZQbbnaqCbvFnc",
  "key45": "wDPAmjTiyJ2gZ6KpPmiyW2JhxKWbGMR17aPzCes3QvXgULQHMa94NQonfdPfp63gRGRB4RfSgXFh1r5UDheCqk3",
  "key46": "2v1qB5iTwtZurpDmrnTrfDu7N9j3ok7So5rSwTjuAx6FPFn8ULSDpN9RPTMnBJtKigJi9CossMPtKw8UE1CHznrh"
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
