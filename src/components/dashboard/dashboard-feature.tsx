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
    "5SpMc3tgmunNY2rbxbhrYWPRDVygHSeUxpRorhUtrcg86KkeZdSKMtsVskHxoHoT54J3qFE4ahj8ZPfb6hYCRqfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k1LnbXvAV6J2bREmNkvqdBVB4yQyvpVMxn3zbNXGNrZR7KNSrsTUiUXvDE49zLEVdxKN5N2szjocw5agrLkyt1J",
  "key1": "5W8H7UiYXtJe5kQDhgjsYPjujwkCAVTdGL1csNENExHmrcUpAsEcUepSR2rGzTxxjbDy454fxbX839KE8Fb1GyX9",
  "key2": "tvZcD2we9zE7t1JyVFoBv3zzFLrZ41GwVYhqMVf7Mr5Jh3Sg3gibdywcqqf9fHcAkeaGMZWhhzCHXu6noLTkmCw",
  "key3": "5XBB26hebXhdGiUujNSUs3KcTwfDJB974rFdj3FJvF8rtKuJhVmrszoxKocwPCTjoaKoBAe71EXLKmtd45ZqAbxW",
  "key4": "2zWeDdPf8rneJ7fH9wTWkmhwqatwu6e9F4DrMYFKiC3CPM51232MUaDWNhEdJm6rqVXGwKiqbUWLAHzQaxseFFbN",
  "key5": "2i7aixxAn9TANfFAmvZUnZUdUFeFnyzQUAnRG4JM1JNxwFWswHWBwt51LsETKoa14fxPAvQpaMEaFbg1Uxw8VzVZ",
  "key6": "5meTNzwt39yNSoQfQfNjoxuEunEo1PKwBjUpAfpDD5CnoP61gWert1ohki3EsvXWEd2diQChaMhrbxeuNrRVBnQj",
  "key7": "22QCG7GuUVq1VhAHnyY7q93mYSFz7zMqWD4JgHBGw5WzAQU2qcLJnoFBQeMpCViTvj78wV89KkhC2p8uCtxcf15e",
  "key8": "ecqYrfo4GsTyYJRDW62mjEv5aQoeoVgkTwjCNxbsnFyKsPzqDNGjsd1rijFXdargmYf8gFrww19gbQQuRDRoezW",
  "key9": "5r7fj5Bo2zqxPDsaS53gffdCQrXNHwFDsyDytaEwyXxzGNEtmYfiBbVbERjHgZ8Jr5jmcu7SaLn5pbrqaFjrmsWz",
  "key10": "3MXvm5fjKRkozwe3tuna5abfxAq7qZzKJ11HdjsxVnHYBzH2VrC1Cxskymt7LGBfVADLjpWJEEmFrYS1QZ7d8a2K",
  "key11": "S9BNWeq5UwKFoAP6VaVmmuTUzyevBXiVmjT5z3ThhreUzd9WsgV115msMLVtCEGcRuchrf1qb6W9QchhcpwKjZX",
  "key12": "5jnZ16nvYTBzjeLnQ5ghpa42gNhzbEQCb31NkFM35Sou9FDoNcEdLG3rGwgN7cNysh2RRQVGvm26aRFhXT7ck5gK",
  "key13": "yV2YDmdNp6NpZz93am9GK8payQD54v4RupzA1fUJXgKV8kUaJNUmtakvgGpCNHV5us8V4JwjM4KAGB7YNwU1XuL",
  "key14": "wNDcJdA6Gm5k26fGLtyASUFnpcnge7jnhgPyEHExdpZYn2cMzZS19za7LJxEqzSQXUp1H274zrHVYXdiCKgdKBX",
  "key15": "ZfWUqygZkrbur7XQJt52PQEefkUFCw1vgM9YndVKbcAaVAT3DG89F8m5N6gum5qx9bXynyi5qaEq1dVdqY6oX1r",
  "key16": "6565i955sVef679pDMxbAd4v75AvJyk8CAfLtkbb6GGToVkUCG7MGDN4rkMCM9qT3ASoyzPku1RpxKmw3pxoue1u",
  "key17": "EihtgBbjHzVgk9yEV7TzZvKpqieQCMeovbtXvTNC9H9mDH5EZRDTrGnSx1ex9KxtEcg6p95jqYHTzVjZTvdLrmw",
  "key18": "5yQQ3ZbMfhNWkWiqP14ejTtrh8z8p91smB1yFxogfiC4VhvqL2TRsMVo1ZjaEsh4oU8sQ6758VZE1U3ivATCav8T",
  "key19": "FdH4LveW9pM3jXWyyfx7BL7ZCiiKAVtf1v1sVCFCP87SjKV2aSu3U6qdGXKJGApUKAi6eF3vuCEyRvQETG4t5r5",
  "key20": "4H6JK4YfAyDTBogLA7UkJiDQT5d12b5Ur5dqQYULCxgR9aJdGTor5toNrYJsoVpLLFtBZdapQKdLRkE4BLAHuukN",
  "key21": "4SDKAzfor8fJAVrRB6MVzuMW7reEpWb7ePzdwYaDvT8XKt1QFYvdNSwMUAtDuoeN6qfZC9LwxR7bKeki9Ug7dPNu",
  "key22": "5hfmUDFznCvSbfRUKN9Zj1jwnL9Z2FKEWoqqDEd1c2cmhSdPstnwGGNHGKezic1SgwxSPjv1RTRrjfb9g4Yy2Bo3",
  "key23": "5j4gpHumhTU8jeeS2HEqWvbQLgetzRDBso5no1LccLugpehFwbJYRy3kdrmB1DeciYPJgyk1aoNWGFw5YDzKQJrg",
  "key24": "5YK7GbcHt91Un8j6Wv8VMSuwV4NhYZ74oMjm128gxTMnvvKPPgzPPuNGgy2RYygJtw2znixRoRvLrqDsGxDhZejt",
  "key25": "3hVgsCXTBzCw3MhDpJd44iKNyNFMBzTr4RMtTBaxBEZ84wgQAH6juUcPyYTMSbJUfK1XKJXmUTi1XbgnS3jN9Jns",
  "key26": "4C3P4q96GeaKecsRXaeUnSDapxsr7ZXg9kk7wTRZ9HDxyRGzk52ybvoZRsgpd1DJcAK5LRM3D8HZdEY4Uw6zide",
  "key27": "4HotArnknb9C1KKYTGd7PeaG79JCP4b1trD3FmVXR9Brmx2qUgVEQzfe41gdkoHw48eZtgMmSHoapA34rgFoKBRD",
  "key28": "46HV2mF53wf4DR9EQqCT96tfdqgh9vb5qhx3QyXj6KucuDSkDCPnSLGWUN19x47d7aCAurrvqZyS7azt3J2DhSbv",
  "key29": "3ewouQ8Q6LUtuQYw11Gr9j5FUcqVZgRRX2V7pPdhBudeDwzKPLLQEPQpejhErDc4y6BCrypBCUsnBVkbz4p6SoJE",
  "key30": "4iWqZVSLyQZwoFaQgKEQ7ppUfqdRPKovdp9Kqv4CNACLEmvqmPahTZ7sG5RAybjT4HAkwQYUpqbKBKvqUR2oBqX6",
  "key31": "41GaowdYEfQtPVtR6DYr6G5bnE4kQdAhvX36sB8dzVb6n3AqRUZT18YtZ7Kug56NLFARnK9GHFPpFnZfLtUGxFQG",
  "key32": "4SQXCBtLNGcc3MaEWUvKqgDTSmeC4pqgvaKi7GprRKmPkcxj7EFLvmkTRXbG2N76cPYQKyJ8WBoHXFRveFr7aHjF",
  "key33": "2FJTyjZdd7p4b1PzZN8aFPfSRGiaNnZvfHCtivEvmS71cHk81NVTmLNGcapbqhUZRdjy9uMxV8d8NK7GeJe52yG3",
  "key34": "3fdc19Ge3m38wM2XjAJa1kfbH5duJWAtfXLJjoqyZAC8mj7b9JKh2P77tZngmbmoVEYq5H8dDe7ChYUicWjbESuQ",
  "key35": "4JueAKoPV7wpyxbT5txg3JBK7Xs4fYEMffM9nG9QWk4FiMt51BjvfAcVLdHzZsmA7dywCP3SSVFNVmmsRZag74Yz",
  "key36": "2mG5EhrYJPXKC6378vuTqsKucfXV3xFUjoQY8utqax9JSmLf7iThaEQp7KTVTrELQBxjPDHCLiYP4TFzxY2MN4qE",
  "key37": "2BhujGZgDqZCfJSap5oY1ciajsC2ZuQCBE1U612aZfk7h38QPFigNYTHRLQoR2hdV7HdDxMTcpNVtbSe5qfWB5pi",
  "key38": "tLnwwcUNV1RKrLacnQwZmGha2SmvQrvWRmg1BZ1rzQU2BDNBpyjfF83TCWc6X8UG8mKCgQgRHcdSmLccgVxRkHv",
  "key39": "2Q7oAL8VU67VFKXnBatjLbEkFTzCMsFEVs7GNGzW7apKZk81JV2G5boBMBPVnndX2iwT3s9qEavWdEq8fAH9w6AQ"
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
