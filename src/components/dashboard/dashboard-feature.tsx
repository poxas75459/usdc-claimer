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
    "5e9T3dspoUeyngxGTiLGDb9mPysY5Lu5vCmRFBSSkbPfZityja5mNUeBTujwoMZUULaZ8L34UV29r2JFxJFcMTeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "URocGey4rHMF6AEhTN4ZntZYQGsidSuQeZGSmFXBNJxZcB6XdNWidv79v8TAuPnLPxhqM7oDfbzDPJp5aNHChBS",
  "key1": "4fnQEaW2iKJyJpBMM7BuYaDRSFhRqgHTJKv9N2Pkfs3ejLe57nR7Nx4JupEb7XQEZ5VJr6x64SgDHBUWRbR7n937",
  "key2": "2ehR8sv1728mt362iYU2WN9SA23bKGpsz7xvtoidtignRHyWCzj9L5toLTyak4kzpeVwvXtXh4aDaRpfdZrbCQkV",
  "key3": "5dNq3Yyoapmgsc6Z2e6q64mzeHaNMKYro1ERWFMbxT5z6ChY8spik9ZdWRYQkJPq85LU9snNfHCfqgxGHoroZdvL",
  "key4": "25NFn9GgZeftapw7B6SJC3GnvSjGQccPaPPLbBFTGh76XX7bbaDNizwJmLu1c2VFZn1VHo68R2CSTAagXitgGbqb",
  "key5": "55XhNtwtn5waSaJC9wiESnWMTN4oSzCw6vVLuc1hAnroNq4n3TvE3vicUfBk278zjUNG77aiqtAMxA2tbgDVRHKj",
  "key6": "3hzKnQ8h6MiNkXqJDgFLYEUoyAKpxKn4UkcznbtNTTnmTKpiXKPmnoCsaRHsMJejU9jDM7cAbF827FzVUFAwyFS9",
  "key7": "FbzFnyzx68psN8HbMVbjvtU9yXvVzzB44D1biU3SfMW6ENifirF5R7rCjtAQxf7poA8PX1S3fzaSva9W7XibEiD",
  "key8": "3Wcs1CEgjkV66hc2tzBQxSsxpZAtgjn71Pbq2kCooZvuvPNpacLsZfAsw2hMnTnwxbkvfPuTL6c6WhBBVVtPWUcP",
  "key9": "23W5zFTyfhZfu9kDkr7ywk2Ci1DfR4gpCphvfQVqmjw5uxG5fmnSFaEyxxCpfuNiQBLbdGuhogz85cEbHe21vACo",
  "key10": "2wNqfPySq2rBfHLbNYtFAeJsgAcfEzBwAzAPqdwop646sgzGoND6gdfbKHrZPntfSGEW5y8XVq2sdWWrVXv6bzZS",
  "key11": "4JCEdapWcVja2DWDibG1cpzxauh4gcVjztUSM2XrWDyx75woV3gZzDHN8DjrgZNQyvjJ5ixEW14Dsjm6EyiaSiPz",
  "key12": "5ycj3qTfg4DG4RN2vteqtP1bKDZ5SwNCf9QbbyCxfpFHZ8qtU7GaPDy2iMpcU9cN1b3MyQBQQHG6ZMGiQwWPBR4J",
  "key13": "48XNygd246QsYzZ2NhkEHpDuN1J8W5D1A17WvpqTwxafWshAU9pAsazmVWG9WmwWa7dtD5QUdi1xshNHtvq2eyEU",
  "key14": "PyUcf32yuv1pXuHG2mJnCVaAx34Rbr9uirxLwshjHGdFFnEd18fzoXvLQ293ZQ62MVUv5Q7u3qa6ogztxByj2a1",
  "key15": "48x9eiyXSDYxTYe7gJZGTKvoKgWGFyE7Zw3EtjLg8MNTo4gydK1gUZok4xUDox6ekesf8riDMSJJzyDbASyFAziF",
  "key16": "2uwzW75oyVFZRcSUujBWzAKcddSGEPeogmuWVsUQNsLHqUwZ6snBy28SMftY5jqoosXN1BtQ6wEJGeSVTC95ppZ2",
  "key17": "2tsHV97QTPYJ5Y6MUHTQKTjskJTPrWW1hvGmP9VY45ssS9QF8NxTGFwZsDuc9zKjt9tRgykKwoDYT3iK2LJmG6Z1",
  "key18": "3gZj4murzXnfhZzh5WpEbzrJA4pxAv67dtLoooEG6XtAQfaN5jai6Ap7T9Jo57dUfsQGJi3cvT9f5ibVkRZyjgBb",
  "key19": "3Twunx6xUzhinHNtEoQgof4cNfAxu3SDqPhQMeyF8RoMwkQe6HbftREezjNBStcMpwgNbg6oaXDVLbyw4hyiksaH",
  "key20": "e1UwavfdANhbQzFXawxDQsRsuu2hDLueWm6oJHgVbbdoXdLU6aTrCZgLpLGZ6ctaq3CLLFyoHamGwvy7Lop8Ycp",
  "key21": "4Zzia56nsaVURPUzppCzxfbwnzjEv8p3MPa5LJGjLWmcVMfqdczLZw6wp1SFhJAVPbaQA7uY3w4iycUcREznD5n9",
  "key22": "5tEPZmydrRZHauYNsBU5MRYWghUZVEBWZT35s2uHQBQwPvAJSXYwKa6JQrfgYb2CyjXvhCp6seyKHkg5y6RnGPLP",
  "key23": "3WNWu4eg2XPZpZXHRK1uyTmZxhnVKe7paYrphbKR1BuRufiW3dMoQLk6Wk5ox46JRw7Gk7Pgk69LDoXE7KFaWFjC",
  "key24": "2dAB41d9aWj2YNqMfJyp5GRAhAY7U1Dg6r8o31fXNV3doT1aXMYoaUfAw6ZrTxSx1WwQ3j6BTWa8q1pAv6iyLttY",
  "key25": "5eEEeneqC5MmLHmC6pyoRhoUCqaHUHNRdT8VJ9FGasSy17d1GHY43nNVXHndoK4XwdBuhBKo2RRQDXojUKvwk3u4",
  "key26": "3aZNifTWMtmT8vnqkZ4cdFzA3b3ccUdDnRovFyTaHeckJPqwREUrBhErvu19G9B51Rv9JsyKGiMEnqbvnS515f8V",
  "key27": "xtKT9os3eG1jeLNjT5soLuLN4Jftu21PGraREgNNKrQLoijPTUwjG82iKjeVAUjWsm2LLmonTdiRV3VWihNSqBj",
  "key28": "4GqPg2W87NqwFFBPHaFkYtWLyDfW5T17qmCQPhjmASUaAp7F2avpciW2nwisKfcPA7SCCHT7JtCyqBKstg2tbMxS",
  "key29": "3RMkiKEyyjtoj3tERgkMEsM4TTGS6gQoWNxJ1tF6p7nf16LKPaZM5hjX3EVYoBUBZHk5bRDv69bLvu1Qv139WEyr",
  "key30": "4q22hYgm7eSLRyzX8bdiqmQrmJKUoeyrfwKqYRRK697qyQ6jCJbe1VoRaeBeeYvSkdn1wpDotwgyWtSRuNr2oL6j",
  "key31": "4GckEC69TkZEa4e2nwrxnHHJf2fHmLgV5n2qgyNXM15U6WaPPB7H6tckQEbpi4F62VbxciUFspJatZr4tCHVUbsr",
  "key32": "2dQecmMFWJqbFAa8hoxGaqYJT2PThBbWtmWFchdCDgSFtLXBBYrXfNQFowyBMHkXnXZNfaNN17X9NvkhTQUwMT9T",
  "key33": "5QbYF1RP5g75FDQKFs5eJzRmQZ2NsuhNCTRy1SKRYsWSEivXG7USN5r8WS9UiAJX7Vo1xhW37ueAUVy36G6pMQZQ",
  "key34": "4DBFBZz8jQkwpASzoCYUezVpLeBmLh4XMMCqVyq3BUbxXHp2J5ogq2PpqzdKcAmS6yVPpBMEjiRkJo8TU2SxxqjC",
  "key35": "FfGcEzRhk9MM4cVSeqYnHFaTD2z2HCqfLfofb2vR8owDaUGUWFXoPh5U6M1AJED3n5JhJHhkyWfPDo7hgTTY62p",
  "key36": "5UgnbeLGKwuqf6nwxyi1tAYd7ut5pNbmQz7DbP1cKEGygjtFqnf6GgLhKam1ZkVQBAxtmm2ExeN6eQrY1vEy7WZp",
  "key37": "5phGGbQNjJjs5uLathiCbi5zq5t16hfEHhoU1wGgyX3DRadf7hv98gsXv3SwxkgiTpR7NJ9Bz5vJ86QrvzKWbt1C",
  "key38": "4bi7e6DkeD1LJtKSG9rLcysCFjoVPGJS25HiNANJKLyQFrajuNZoSDgijGMRNeLh4h6HCuAFyFvxEs4yqKKTkbPp",
  "key39": "47hHXNoMjDjaQpVA7jNmwzdmTgb2P69UQJ8FyjUHSaW1QeiyJVxos13fViM4aRw2w5tdnyTUvT73AGnHX3fJJySM",
  "key40": "3aSgywHudRzvspKV4opXjqpt2neN9E8Lj7oJiHCdV23iccQan2gKbzAjr5QbWnivKNpjiB23yzf2Rho8Pp5nAvAS",
  "key41": "2xiT44X1uAr3AwLTbWY2EcmM3SMzkZzySyCKN5pyRzUvp71j6K2dj747szJd8qahKxdtZjqMspf7RMLALaSdcYC1",
  "key42": "5FodQHKdQBhH5MQeCv8WrL2uipvrmDTL7FMv2e3qBSuYQMBR4JhGJtbuETLzGvbbGjTJy4ppTo94PFdPQChbtWDb",
  "key43": "4J31hZ7Dx6nZcyVoowLFTszcCXnFRmMXDeAh3KdWQhu8Qs6C4Fo5DFxJDoP8wxSkjLKpFB7t7N2sXLCZKz1UGnLZ"
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
