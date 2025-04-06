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
    "2xY7JaFYxzngeRbKkeZBY4vwwgq1SzcuTXeeGg6Lxv4gmVhZCigvUFUJcrLyhMn7nUc7tTkpTFsxg4VehM7ozVzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45JQAB6fVzmezHBaRK64vSZ6EAx7C16Kmjox7Bk5E5AS1zfaxugb5j92uEYQpnrCVzgP1qysFEPZjT56Sfkoeo7L",
  "key1": "48hD787TD96uHsCodBR3Tbg25MU9Xbp4jNt2rzdcAfQ8yNMqGQFTWkHkm5WJ8kDucbPnQYXk9fGBC8QY6jdBXnBQ",
  "key2": "3b4XQACsdWqbw4cxnVuFS9QLhePCRYZz7F3RDGrruXGAy49RkjBgBvNYUjseNJyqgfRbx5KCy2ZhrwoE5v3RzRVo",
  "key3": "5Bt1MA17GbYZ4Q6RZFojtMXRpV6ZsoDg7W9TviFTHADJqQ6RGHrZ2GULwCXy1K7DvvVgLYLyRyFb61HRFHCK4aXL",
  "key4": "2AHaoc74xqFxjvpRnirfp3deqWMvxUXwQVdgDWPYhq3S3QrvLNSPJG9cRAccnD88LoUmQAK4bACjPd28P95pf5hL",
  "key5": "4wfRfjm9Xc3ni7ABpgLAQFf2HL8DjyakCZMZVVqYqwQfwvTNoVsEFoPTMg74pSwQPdEQKQcQ9c3UbWZ29hKSkuo1",
  "key6": "5Z7htV3xhZogFKtmoxvrhyYMkbJb6jhu86y66fd7Uu8YFtDwiJVR2PhqjQVmsL162qgJhP9kMVd39Jb1ephpjrma",
  "key7": "45BZwCzcQnqDnxTuwkGYqqCJHQeww8tcn1QMZiYhMPYhy2rNNxMMCPvRVKbaYk4BXhvaeKjSghNH7nXS9zoxv7Fo",
  "key8": "3JRMc3RKDmoSx3Hv2g8eBaXDauc83s7sDQHqFvgtijDXtxMmumiEKD72waw5wYisvmsH5zpgpLeLi1ty78jocoe1",
  "key9": "4U4ceRXnpMSRvSw2Fog7ZrKnx1aSot8JHjrwnWsae4n6NbzPZE4biGBpabffmcUm2YJqAXK1URi9zvqJoGiDVidL",
  "key10": "ag9W1kKswFHH3efQABjFF9XsuwhxPsfXVbPS2GWq4dtM8eniXw8LXpdPrARGgN4DkzKUxMPqEtXtp8Aii4GFQSJ",
  "key11": "AssweKww7A7BXaeLv7DKcoTnAbsKyXUVWns2zAKPpL84c4kw9nJeHqGJHu2eVochYZFuH4G4qBJdpxta6wJVtiU",
  "key12": "2bBci2xtMiF9Ca4F9eLkovrHskZYN6YWUavwPFFXt9xmqXHACaXwsHAbiaiRYaSkDRUbJKTZpnQNdFXXhiT2TRzQ",
  "key13": "3USfjLdvEeJEWC9XLKjonycMqiSKRwidxLETHQ8jAmuKbyTM9tLCyizQpTYHWyLi6nphFrr443SkfWPZjL1yzg9k",
  "key14": "4GVw463NpyNttQZ3RGBF57vrEgkYSjhSVaWtUUvPx59SV4Pnnketg21Q6UFapY21A9HdRgpuhHS3WefY2zgHPLVv",
  "key15": "3GbpBfTSbcAJ9ECtJXHS5acvoveDcgA3i2ninQjdo5Uwa8W4o9SWZoA8b1EsjHGDR2hASBKWi9M2Ja4G7ZoSnzeY",
  "key16": "5otT7L5HhxNLtkuLooCYwF6Ed5RjZ4F4NNuSgg8Wacoicrse9HKEuhPv3eDFCBFXtY9dugKhY6WrkJLgqmt6KWxZ",
  "key17": "5ZAYXsgNf2JHLLdUiTMTaYjxFYj9xhyBFnFwKbGGwJPqrtep1qa9AmBdP9GqPau6xCq2MobaXmChngo4WKNKAtkt",
  "key18": "4C6JqZjd9n1nZuye67usQQgnydmQrH85Mye4qXHUVzVzdUZ2ihk5UoxnzdurYxYkvvpJurMocs3SSkY3u9DmNusQ",
  "key19": "HpabF7GGcBWSfU9fSQVwW48xnzjR54qsLUk2ER7yki3ZHtjYui3hFMBzjtomnfLfopnNrVSKT8ecKUkcsMikmHc",
  "key20": "2eNWcX4q5ywB8FvH1tpaMz9hMu7DHJrohQMFFGyPZqVTc8Z1Ce4KAE6JJ7peCPjphPYNVGcm32PYJFAMudbofPF2",
  "key21": "3AnCj6L2k4RdEncNnNL6erwNAKqbhiELEBRwch4Hq4dSyVY1bZiv1kkTZ4BHDWRidVq34sv2Ki58EAkLoDg2Ensf",
  "key22": "43PrfCu9phobkeurzmA14Jae9xQv9oqPV3fh4KR6eGgB1Zi38mP5Uwr6TLtVCpBRow8r4AaCzRRUH1GCGq9oEAH8",
  "key23": "3N4FCCqgcR6pzFck2hvxNRWVnZAwG64QDrXrcsXRuHVT61EfyBX99BZi4K3T8bWaeTSGEJG1YBSVAfn5FCgkfvdh",
  "key24": "3dK645YfTdMGfXyoc63bu971ivnWQxU5JFxDy76od231WMU9LWuv31VSmZUH7BS1P8iQXZNAqNjPqdKTxGc84vSu",
  "key25": "63Zeh4pjFDycoTuZStpLNp66bzPaTaYaAQofayvrvYZuHUz3HeAUdG3CMPHawMJwLfz4qcAnMy3MWYTkgwrCr2u8",
  "key26": "X5Pbdyg4Ub3J6UgY1tF2Cd75rPjWaKB1KaVi1JHtjzxYpvuoWj52xeQENSuRsJvYxREc7foJ7wJKUv3TY26UtNd",
  "key27": "3y8TG4YdFRux2Kg8Gac53F5CjmPRUqMcAr4kABcC3aDDd8ZTWEjedC3T1YFBuj6CdPdgEr9JP5PccWbyhLQZpJCu",
  "key28": "21BYVLb9RxNSyDRmbMEwp1pQ3XV7PxcwVWpvSmFubaTrf7wpsW8AZw1gAPrju9bGQkTA2ygYFGWykp8fW6CSQubT",
  "key29": "BMoT1aNjrdf6yDvxaD6BmNKWKLtvCS4mVJeZdpgqZXTkrFf4EUorsHypNVdeioKazPrKx1it8bmjVrUsxbL5V8j",
  "key30": "jTnGzxJ1Eo5vYQjiMtczB74Kkfjhfv6MPbs7PWCkDSFZ1UKo2V2upv7nUGxGfeVs7HFcSn9vg98qU3JprD2LqVW",
  "key31": "4Q9rC9ErmSxYdZ7UXVDvn35aBazK6d1mnB4f5pYPnXZd7dJQcTUwUzcCKdfTJtEWmpUhNLZ4Xa17J1nKg8HntFmE",
  "key32": "2gQ1jUb31mRa47ortQStChzM93JC4hQpgsMVRr3P7AJP2bwtcvnjxHcPJXD7Z8k9HmXseUT12UtS6riMvuGt9YRm",
  "key33": "2oxvBeY3GbjFYcQBmsYkKatqFcCwEZ8JXBXpviiBRFpo2iKYrNBvtXZqjgzU1UT9LxD8QcwEQcBw6FWPYyH6Pzfg",
  "key34": "2U5QGuQMrdDQCPPbMziHrDqXAuCBxk3F7Uu1u3tE1bpSdDjT2248g2cMVinzjfYvX46vaNswbDikNQ3B5UmAXeMP",
  "key35": "3MDEBxEA3LRHMCPXWKWVApyqC3LAZSzozdrPZGof8Zc1UkttwKPFsncHiQzWrcdABRJvEGDbVScPieqVBXcj2XVF",
  "key36": "2ZrXbVCPrn9KVkjyJgqG3XGQYBFRushPbiJ1NruBaJUZ5trPkUMwpRp1JaSWAHJ2tAPpU29USWLp4k9bLFS2A6sW",
  "key37": "mcPPnbFKyiSqgbwKgW82AJDaA94mCxBSgnw15ewm5KDaunbei2uUrrj2YFrgnd4er4767hZd7gouzjxTJ2Xid42",
  "key38": "3EeyXW2qEhGMpM3D2wzbnkzoBt59UvPDeRaGmMLcAkmd3gkzcZyeA65C33CNpJkJevzwhsmqZuS2rPepStTmipn5",
  "key39": "nRAy6nXESUZwsVFMnyzYtuUCMXvDtQp9ud6x2kbTg3z2Xo8hspjZbSFird1NL5sjaMrzuQBCni49ncn6gEaUTkr",
  "key40": "2Sd9nNhBzzg342PqBexF3z2cw2BnSRgMyhfpE81noYobRwMwuz9HYGiCFqziUFebvBiDT9FNrESZsXisEv9h3iTd",
  "key41": "3FwBkPjXEuZKnCvRXcd9DMPjcnNU1bzp5M692pB6MkPQv4FP8jy3Ac8b43bpAdqmSmPm4jdhuUek3X1uWZNSQYyx",
  "key42": "4G3gxHhDF8HARDjGBpNL7XvHiwh3cZSByJXabtw6phs8QLqVTRxYiMyUJ8EjDpaUp4LFZN8L1spHvrXuMGuoaweg"
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
