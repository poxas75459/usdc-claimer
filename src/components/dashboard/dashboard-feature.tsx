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
    "VnpgdeJQNGX9Sfgtme4ow2WN34pnyN6UPgSDXAzMSarrQRRqie7JwiJzGhtzGWKsyysYofBcqnBDRDzihRXRDeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xaEqpRJ9t2UyBAKkcje9hhWuBFoBArTtHfb7nwYZFDwPp1tg2cpXjkxwHKZ81eSjE5oH958DUmz3GQF9DqShsJ1",
  "key1": "4BsqbkEaqyhHcDH96X384RkBxnRHCbdEVQo4ZwGvM9fR57RDHnz2STxXASo1VKf5tbRJAcFE9fGUN5n1kaUfNf2Y",
  "key2": "47C4YSPA11eTnYG9fQPATyGCV4JN5HoQv7kWbh6FKYEPsNqrJ1hwdFbVVwgCVw86hyAP6Ro2k8eKFF7MLGji3sW6",
  "key3": "3H98bfrDMY2gueRfyXpPn5N4Bw9FPaVAz9Dgomb5Z6E28JoWbf7VSpbrebKfbNseMM94X5BbzyZJzzgubZYjLKhG",
  "key4": "5LMFpiDnT6WhBrGykbFunGbRmAa5PCksF6AUNkga9YEjmaHGPwZeWC5svGA6ASTXmLDstsUTvFg2cVT2hbMqEroG",
  "key5": "2MAJT79ahrvfoc9Gm3WwKyfu1grYfCMu4FH5VzxwwTuSDgCfXdyYJqGoANr72N23RBt29dbcbDou1XejYoGsr7pb",
  "key6": "2Zn16q1qUiJbwCTtjFbcNiv4UQbrzCZVxCA4HmxRS5oFGs3wgSdHxnqmKUaiu2TBy21nkFEArCipQdST2Ls49arM",
  "key7": "62xugbf1qZRoPir8xpfvhVdCyeBMnxHHr6mP1J7qRN4Mx8rQ35UM9i9Zyqumadz7VvSgRMg7SV76uxpUXZUPqzuy",
  "key8": "2zjzBWZAerJpgbBe7T1ffbKntWq4BuozfoVBv38qZKWa5NN1R2mfJ81JAr8tRbijQGimrUfMfHiDVy44mrM46CPj",
  "key9": "362RyvJApW2psTFYzT8VCzidSXPuCqGDPXosZQ9iev8oAXmieRqM2erjaw476baQMSv4acewv1xxf7mLrXxfDVja",
  "key10": "4uhfhRhMcZR5kJRvPwiS2fiX1KPfqMxFULrFySXo5FP3e6J1fr663PbZr89hsj9pbF96v9FENCvRC2dpHYsdtcPP",
  "key11": "4C9DUCbbRWvKuSJ6bE2GUkGmKcFeFahuGT1ykMSsscJSegwEyHxytSt9e9Wa2nasYuY1UZ7od1AkYcsC1c4fHeTQ",
  "key12": "5yLPvdcb6o76M2cJvTo5zQ1ga47ELbjXdzRDvu5cdEBWKve8H9SFNkJT7bxAupXew1r7EYoKJ4tBMK3dKfYz7tX1",
  "key13": "SeosSWJDqkeVcZ5GJiHkD4YKkn9266HVeZsJsbmkrHCjWUzfZn9dkN3QjBezFUvZX8dP7NGq6L7s5bEWBexwPUL",
  "key14": "3QxWvCbgFjfx7HW8s54nortMgoHESEWb3ffNARJ6TtcNQm76QA1CpUVm4z1hC3d9v63fVVttJxSEAgDBgo5MPLex",
  "key15": "yFs8NQce9veKDi4XtyjyDzzZxWsNXyqWSkmde1E1SJwaXgjF6pNSnKYSSVFjgkxzbQPs4iUvK25cLezFDgX8LUz",
  "key16": "5gS6C3fkiVnwbj7UjgbQjucBYgZaqpJQVCAmnqEEBZpw9FaPAQxhu9ZUUUTVKDRswMNZNAg21dmSpVwe5WNp4PTu",
  "key17": "55vCLGfuwFEzeyM3KV1iQydfVxbfCKpDzAU1ixjj16Tedt8KSw8XWnPxhEGLhiwYvvnDmXnorwa6AFA9VftgubJU",
  "key18": "FewDY5HH5A5xXeBF7aYHv3d1Y6beEqbwhyjQZMK8tXVLRxra1BgpbN1MrAqNafzxxWYb7B9xYkHRhAU3dFndQbz",
  "key19": "2ZxJMvhbzyiooucDb3UenebKTqtscq691zbjDBknK2X7wenHLyTfQ7nWfKJuos5ebfdncp5PT6CDi5sGM1KWFhvB",
  "key20": "5a9Lb83V9fGoyVWNazX9SZPiVyKmbgNGd8myvRVux4y7mejGYoxXjepwKzGc62xCXutxRYFVG9s1P2jvHiofwyde",
  "key21": "oTXbyBH5pfDo432AS2x6sTiwDnSHgc8ZNWzkbpwWHtm8J2rvwRTWWBxiJc9LswSNPDq5xmeWikdyir4K5VoQU5s",
  "key22": "4QNtRL61tfzBnvu25HAhs4R3yypmxdZqRF4VnAyEG5tbCtqpPZ1HMX1BLNCZMJ8uhkNEC3SVCy3RYfnBFvHfzfbi",
  "key23": "5tqd8NxpArnt2jkvwKDwknuJ1nhXmnzWF6fueZH8vCarGRvCPf41bFkwTzQw5L7ritguwWtGBCvqsyo15zK5RGBV",
  "key24": "4mpTeX7Kmx15iEsHHN2s7AHTuf74mQ4ekKUJaqh4n7UipKkiXf6cT8QhF4RNphS4BrUd5bucq5N3uTRo1S7ijgjZ",
  "key25": "4tmfbQtMM54CswyPt7hnqk6yz1wQgAdjT6aUyLRMDF7Kt1RcLDgXCjrzaFJm1beq8jR2MuqZwxeTAzPmduw3aaUS",
  "key26": "346nrNuQxwJw4v1G6yJo3Jy7DuZ4sLVxxQHz2v2HStiPey4GhyZoPa8rdjKtkGN5AkdNZhfoLGdVSJiEAhpJNy2M",
  "key27": "497xLKte9y5KrWDKKD3eAzquSeJXqMpAeWfYWozaH5t8bNaaTw9voL4gzjz3vjyi5P6SaAeX9CGnDFYZjc4QrEpp",
  "key28": "3fnucPxnE76mEE2GigRewirc37BngvVvb2xSQsRC5Tg9a914tFQ1zsVmk6F6eJDP8VaesebCCRE8iKiYvHrrbjB2",
  "key29": "418qgBr911nzB8XBsfJfED4PAc1c7L1XnvhecZNuTTEwd1iPyPZX5YsNRMZSLY888LookJBBsgG7y7amM1DQVsXE",
  "key30": "3DBEwcqk6E2fpjmJLENwADqGRuxywGupFj9LxpJugV8s58fs6XZTzY3xc6iqE7wMJpBx4nG7BfooscPLJt76BjLh",
  "key31": "3Fx2YwvzuF6TJSqSMZ3j3fPuMLBEktD9aEfEuoy7kuSrUaWjBZaSMejg59qB7NF8GVayGnXJtaApuU9TBTgqNgij",
  "key32": "zh6K5n327vvXgwiBcdUgQR6d5p947qWwQMsFdAnHvax7YbGxmcSS4bwfxKt4tHaQ3v2Yu3BCUUZ18XiCFJfYMoH",
  "key33": "95akPzbHYJtrarYg9zULiC2fZ4zVSww31hojiRqRtwKVJoG5nskResvHWvMmGtfhHkVKZq2aSCp5ZeRKD6215uw",
  "key34": "T3jBRVqBWHHymvC9Jw9ppyqhWFRa7GvG3Gy9e3SGwrULhDe6MHBnkHwpRr3h9oFEEnr212BFtxgvUGGNsENSpNy",
  "key35": "3LkfUDvqn8pL9NyNMThe1QxiE8N27fkXMkTafrsuaLnminrw32YizQJfkNdigArnX7s76jyW5xkwYNcR7rZv5bu3",
  "key36": "634MpSnniCTFUU54vi4sy887cWNdgHYFZjWUfpngM48TzgmPMBLypYPU321sZidokxWU8P5wNGVqvZeo32J93ZS",
  "key37": "3MMh5k8ntrXqs9igoQ7MaTD6hxauYizvUhie6dwHSFtQeXxopq5dUe83rApM7aYTbNVFGjCkvqS4XanT8PSHskQr",
  "key38": "4FQqcWyWt4EtFVW6JEM34EU2pXWkxks2Q7YLBrFpSvxfYcEXjGNG9z85sy2TRuySHyECafo63GLKcY8pxsUQuaug",
  "key39": "4UACmHZb3wsGMaJprQ4Gih9ASD8Dc9x7v6vapKFjcQ6ft6JwnvxYxKy9RKux6AgK6YeWcvuGJJTKjx3keDvZ65ig",
  "key40": "3VefncMvi5AdabyJmAHTi8agtyJYPU2QWAyYdFHQVz2rKx49MV89kVUJSBrLh5rqN7x9FskRdy2Ju3DEDgQW6rmw",
  "key41": "4gyeJJ9yzasrUDyeMR4vd6jLNHRscy47wi8MKJmAWWeyvh8fBvU6xfw2rQ7vjwXJGVGqTuTEx2fkcDqywUNechqg",
  "key42": "48eLChfrkhWfCsq8ytDTHJqVDd8tAQFcvZHWEUzCkAFxX3KYxMGYbdkfZgCyK5cW6Zj34NP43cC8JkzT6Jj58GCe",
  "key43": "2KpaacQEHGpAatHkxd1rZ2V5t2JCxovRQeXmNTRcv9Pqvcd1x3Zaywqk4S52A8ALmaiL6UErsx8FRX6E4ACK96g8",
  "key44": "4YoADpmaRpsMnee2554sNqvdkXDy9twahiBjAjz5BakhSmMREDBYYwKCN4aWVoasqB7a67hTNZ3seE8KdC21rGc2"
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
