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
    "WLrmR7LZvvnMhv5Bawyah6keyq5q7AfQfVxmeUjXHdnCyyY24CGmjCFvdkkaJqaVsueUn9Bfdgzbsfm2mEv4bma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NKRQGb6kVB8imqGLZnr7zbCfTNQcdZsmCN6UZVRTCUPpVrNdEhKedNyvzZNDRw1PeHMoee87j3yXMVhPjMiEvQq",
  "key1": "2zjE8EsPtqKVXkAh9UtdwtmedwuMey6fthzRuVQtihPbXpSLe7emM8Gp4iBgBT9vWr6BhRacS3ezBZHydJmxJauA",
  "key2": "5TieNk4utMGUCLaUtbucyBbyaqag4WENob4eBhd8LtqRH4pqqPGLGrH5rMPCvPUnx1NGaSxCqFRA7hrow9qF3x4U",
  "key3": "59DEApSE21mz9QT8TKUGR2HdzumgNB6tTiKsg25FWTesEknNaBr5q5qQeV23C5ni2aQAkH1akL33XPj1YdgRALW4",
  "key4": "3gbFRzJrKztZw8B6eh728tLCLvVd4JLfWhHBpoSrUt9baPYAqjyX4y5xWB9MXVy4mKbTSckcB6FrpMpUc6ZVeMi2",
  "key5": "bDk6Mz12hUQ5F3XPJ3UxZwYjMYabGe7cG9Vd82Daq14MLzyHLjHZyUsarCX2XQ1Np9q8XhW55haYFdjxSJrP4kU",
  "key6": "jLBMmJ3r7q7mbFEGZv3DpfE6cCYFEEgLbHEx1ZSNYk8L9K8VCdCyWZ9pw1YEixJk9soYBrbciysUdjeFsnTVUrn",
  "key7": "2tuyXE5JM7CMzPsGXvduQgUEBgQJfbo9WuWSFPoTXf7R7RQiqyL25rK4S1XCJjj4QtU1o7d2qCWKitg3zQJG5ohn",
  "key8": "4UtiwwfPc5vkW2qZ6Di4cayzHaLCG3BqWEdfPmNFshGR6kAhfR5H59c7fFgozwf9pq3GvXjZuvfEKjJq1CgNgakx",
  "key9": "2eKbSJLQKCSrtE4sz31fcr4T1cHLSTJayGxQp8CB1ZTEXr1Kvx1uFtaRxMaFNBtAQ48MpWMtTvBEyV2kP16wBrnS",
  "key10": "2RURLNy7rkwjv9XZVBiqr9rnHgRymknA7df8MuMsD8pVHij93kN5vGh95XE2iesYCJTgDuzwM1Us75rGyjrtk89j",
  "key11": "22VZnn3XC4MKRdXgBA3mFSWzUa8jMAskyF5Y7Ud5jievUQFWNtgssVicejBocpZwwqRHFZ6bnoHyWVizyJhGJQdH",
  "key12": "2UDtbuQ6aWfTs6HJfgsC73PVMp29aoyJTqnajDfyer5a3Bq9SXkD8kqb7fZEMJyictwJn3gyDXHqTd198hW4ukq7",
  "key13": "4xRbHKeQBXdUZHdvsM34FZURQFGkQ38ik7LSxwNmasTgDyCUBDeTtCPENYo2aPqXgnctEkK4gUeuch84FpAjkFVt",
  "key14": "55PcCNYBtxtvqgPLEaFpHs3Qp3v1hDeY4aHMRsSSz5zV3Uh1bAsJLXzbXXLe6vHkYq4GHN3MLhZk6TgX5Fw3cwY8",
  "key15": "2ifGBhRKJDTmF6GUVx3cXWy4yhNDEPAxua9H7YPqLWscjiQfmPDLnVwdFAX3VGucDetszaciP9FUfkJ9hqVcBJDe",
  "key16": "4BgeeH9hnNpjHAmKxfraw9ze9FXR3dEjRMKsDVWoVvZ4F3X7Jzw2KEfM4Jo3xswhwz3Bjvx46jSQhFNWUB7SEC75",
  "key17": "4TeXz34VXbtkR9Tpo4DQu3xHtWwk11Fn7GtY269CzsgiLPCshbG8sYtRBpzZSajVMP5RayJ1XL3xAEzd64RtTXLi",
  "key18": "29B68qzTkdcujQjLwwvpe2dWewn7PeQKGY71hjVw7eNknNRkStBf4vhL3xHfN4aNFtvvzhBx4MRQCjAhWLXPSwHs",
  "key19": "2VBPeMZKDvesoi7JUQvsHk1iaPa41Fd4SpbE9o9xYQ5kbrpgHpgqqXQUknPFUKcd2mAZTaQFN1wkczBzgPhMftBz",
  "key20": "tPK7RpBEas9WDtUBA3fseXWMDcSTSByDfVzdrMJwmb3u1tqipuAJ5pNKDjXcjaZdNfbK6odFWa3VzHn66AsNTje",
  "key21": "5TK6ToK694fvQchUYF1DpWkDJgg9bgCWTpb5vYYyjvc9gPWvmnUQvq2DyWzMYXvsQXv5fyospWmNspwnWjZzaXE3",
  "key22": "36oG5NCbEFsoAHbKNtkrVenEWWxyZ4wQUqf1qzMTsP9a4brCtFbyQhm77wTg5ZpkPeHZtT6JkomXnv8KVDYVFuQt",
  "key23": "cGUKY1r1sWKnH92kU3kdKE9c7kGt16q18xtwNSDUKnrng8NrDAYegFmJdJzdPmWpkggwL2oGmj99rKca3cw8RJN",
  "key24": "4hr8gAjAP3oKxLvQix2oFv6mHsCwR3kWogepec687omzsab5FKaHr4up9qrgKZ9bhBP8G8b3EhkQxuvqhhftn85h",
  "key25": "5638oK6MfibZMDgRqfNRUfC9Mtc3HHYDGTE4LxrEaXHmZgLK6NJPSpvmsGJ3wztgnuMeHuEjdcS6nSNmrsgjA4G2",
  "key26": "3YjZG3mTT9GE7XSRvE9BYFd8rWL3obCPBUHqhKVxSVvXUZzeS3kQCfGBT2SnnbuQKwiEeCUcdzqXwYMBVsThLpbA",
  "key27": "65abQyvUjB3f1eTKrcSRPW8h5sVtVcZ2dXipnpVBfhQbHgmcBZ6j8JBQwWwX7ichGuJu67UsumiSBrQr51gAhkav",
  "key28": "5FahGF7h5LDTWnVikfEvx4ftaRnZJQTEu2vFzuVuHRFNPDRzQ8gexyN5oiHqZ3K5TwoFw9YDUaCv6FfaWwHiGmQc",
  "key29": "4gbmYiQvovbSoShYQwxFzV5V3jYKKbhSpexUXMoaWazfPo3JBv5bxAFHjwJwxgJPy5GB1ca2H1qZW1i51jNAqt5M",
  "key30": "rfkCstkVwL3AQwZhgVDCtW89Jvd9fjDDEZG4nL8BhEfedhSWz3oYZZXUrECA3tBVxQW8qUH6t4hp4Liy9pEq5xp",
  "key31": "4j5jWZQq2pz4B9h6VTcYGDAvdsGuKKn9jXcXJurFndcXcMWiN4fDUR18hn1p3KBcJM2g2TfvjgRcHkbrPCgrud29",
  "key32": "43y4tJnwRyPuWykkxeKoKP8zrsPeA7eiDB9DAMMcTKnzBMYLX2owmxdLzuY83iiCbE9KKbLUNqNqQv21vv2MZdN4",
  "key33": "39jPfq7sAJEdThCM4sn2rWBKYx4UUJqs1rh6HT35PiN768FrP821ddB95phhhALGZbWbFDBpUA76U8ajAy7rcNbE",
  "key34": "61cP4nm4Ln5jKMxiPVqQL7Trc34xAkktjz9acdVyZNeKaaYXs6CCuLpzqKosqZqGBrA8urw44Wdp42F98ASS4CuT",
  "key35": "55q2CGLrJgAgFjqxSZkbbWPoqjFSLaH2YabW5oU2Q3r3azRtQVStn3XTksiXkYsy5PPXxQRj1RrMfisvuA3XRe84",
  "key36": "5iyRkPxUEdG34QHygYnHUum5zFvTNWoLHkfGxafXH8KLu6GrCnGTvZB63c67gVhnMmGr4EABCE4iFQGaQJ6gaxVi",
  "key37": "2QgbDFr3AuqsidDuENwvyUCsMf8Z416eQaGTaKXpQyT3J7kPriqy9yx9HWkgX7UdnGahru3xTP5jzuJsJhJ5R6xG",
  "key38": "1gRLQ52PPBGe7ECxqg2d1kzryWWUXvJUnAe3djJGqybVyrtETH5upuCi2gGj5UsnqT62eHG9XasE8DgC84tzeWr"
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
