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
    "3bS2sE7LL9WAbYLBCgoj4DCBRcEZ7DX1iEf1nxgw1mdR61ELPxhtRqZtWEpjipgUQ36nKjjptf8G68Q2MmUc3Anq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51yovjQ7GjbjVzXGXTAL8gCcyjLGP8Zb9sJPXNBASjAHrskeRer2gAF1Hpjo8PRiusv1KL1fC3z1n564EKYoiojy",
  "key1": "2QHYL4D6oRFMn2QqPgYfa9mcVanxb4iKLRzHt3x8sRfg5y5Dc9fWGN5HTjPZB77vQVqfsm3ydZLMm1uqHV7p8YVQ",
  "key2": "YmH4QwXbWjqFMmsHrvWVkLAAWx9CjB1UnaAtetrAuSH86ZWvhBt9rbpheyviMXmdPhUVXiBkn942zKJWwPL1RuX",
  "key3": "2iEb8tJuvVdYg99ejfn4sZCvcVLYA1uAGSaLXMea1uaxks3eB6syNSrBcfJA64qsLVxNmmBS7iqv6UKJSRPwkLCy",
  "key4": "3FnbX5NSgY2iLhR4w1UKxVsNuso3hXRQAwgjwc86mtWmjJdjYv1HLtx4gM7HpS1Ht5ze992Z1rgZERjbbzvyzYtL",
  "key5": "48Ywjr9hVrPiqU2Y2VDqLLU8KPhDjrVuEuAhqL4J4ufbUEVdJLU7u888h3WqeUMod4rzrnnFWgwWBa9Mpy7AkXB6",
  "key6": "N9xgUDHmBweesh5Rb1zDWqtjvJmatn1FzKQidotjWN5qDhu7qMds286qniELvQ4ek3ikDRPykjcUuHcrNcWLMZu",
  "key7": "2bBQnQd6mdsbrVwwV8TLJ4Yx8EiM89nNNvqmbzedHZwLPuvMaPYXZFCCA6Tw4SJJPLTeZ4cesqQ91PSAvRsj2rnE",
  "key8": "4kkNJVWZmC4tGojAhF7FJXbN6yugAv532oPRLW6fFrbdt8NQXmNyymeCuwF6mZPH2wBRBnEQFyMKzerYXrujZYD6",
  "key9": "3oGbxnpf274GoXtsryDNoZom4mtCS7ydRTyqFn8UtTtBBHHRa8oigNf1zxYQ8YP5zsg1h6vFw5cVHUmbgL8QqyJz",
  "key10": "3NvhvT5iFqCTDz9vv2YnwkpvcW7RhzxNGLW7DtdxAp3NV6RoG1iYuGNdQpYjvJ7u5KrEbfjUqZL4PreZJKA3m6AU",
  "key11": "3bgDQvariuuGPGbJ62hc2bBRzwjmhJL4NEZyWriGqnZa6eoskWyLfuKmuqm95TLbTxJvdz3uAv4p6STSW5f9cmZu",
  "key12": "2CMfYFEfRr9B5xxsPTSMwGacNzTGDnRadeEWU5Fh95yEb8yMNzeGa3Ju9kuD7xGxW4vURVKk86SisHsB8MEc5cFD",
  "key13": "4hybVu8F6FwHJJiMnENsCaXijLALRJsUjdgbmjjdiZdWGqAq5FMhfBuVdRtfrK7d8ii3fprXv68WnnD6Xf5o8DGS",
  "key14": "53rSWuL5rXcqc3PZH7LSxNVuxbLa6NTNP7PdYS4dAXfGeLy6UQS5agL8HnWCVWXauHATahEaSqdTpLKou1HFAPiZ",
  "key15": "562rmSiczZiPJtsTjAvphHRFo1hYSh67FQX3F3evkyjYkdqhbvJZ389gNonKjoFZpLSjDVJGuUHL9xndUZdGNKEy",
  "key16": "2TmnLAx5mRnxxFRY12Hf8CSsamjAiwTJXLiTVnscFemmvJpQFybSwRS5nLT3XZqZPCSXE82XdhCBteeRzuvMPmcM",
  "key17": "2KW91dYpoc4MJ9MGNmGFeKhvCC1dbAmALeEC3H98D8rXCMegNr5W4D3RuhWzy4KrLPLCfEXN9EzzewTPzTjymNjv",
  "key18": "5qab3GNmPpcCjfNsC1rxJorKLfk4EhttaW2Ee5cHZ2yZsM9h8eUCtJZNuaf9e8QMSeHw4QhZXk4djfk5DQhNjo1s",
  "key19": "2chJpkUzdNtckqaNB2iWe5eNoLsNiwHUvZou9jtWetRt3iR8qjd1AAfHSFK4wHM5Q419uU3CE8g2gNZDmzUP4Vd3",
  "key20": "BunFiU8jsBfuHfctABB5eEzWnXLYcgVb9d3JLAEk8Unfc4afEj5YAMju1aLcbzoHWBdJM5SQ49SXyMUHC4niXik",
  "key21": "2k4g5kqSmE3i61Dt3sgsaNSoB2pf9W6SZBe1rL3hfewjUCyYxrNRKX5vyKrMyHujAayPH7tSbGUNo6Yt1cMApiaA",
  "key22": "2UFTrWC5fdcY5t1Hhni2KQ6iqKAk5CPSwdyKejv3ZXCVGgjTvqatYLCtNSxyumMDePtbeMNSwucrpzihRYRsvUci",
  "key23": "2Y7y3UeFtuGpg9vix3d1xTg8Ab8otzkJQXjAyxgTpJKjCrLtUiKE3T4KndoSSGjQy2ZenBAgcKVS7u82a3sWNZAf",
  "key24": "599SQfPeEEtDgJQMGnLdCcipzp671iNNKyT77JgzNxUt5cQ24L4Qjpr2hMm3ai1hdo3sLXNWRiccAKDtQBRGLPde",
  "key25": "4JWKVd68GLNTNKaXM7eA9f5QrDhy16hQnsKRrfefzTE7xcYbLXwBwLC5GPWJLMsb6zt2Xhv7U3USkvuoDwQcowCz",
  "key26": "4nZN1PqjjQYx8r68pd4Q7yJEKt52sCBUns3qUcSdiya1t6cUkmcmwYUT2qN5SLddPnDoW3a2RGHQqUybuEsnaqLS",
  "key27": "2dGBDhjTxAy1WamXP8FoDpBX2YxKwUHkCV7zB4AVFsESFDhpCms1vwX1acirB1gfMYG7NUj5FoMx9Eas2vWdCtKx",
  "key28": "5cftJGRRkkQd9ef8pNDfNNq487aD51FksCjLLUaE6quZyDHszJPonRJBsye8wSmpKHcPN3XUhPNMzkyCfMDTUqAN",
  "key29": "2vGr5fDu3es91tQGdpPjmERWFnAgHpyyFtKsdqHBFEoEzEP55d5xzemfJUuxRmdyRxPpB2Bp5no42CK1Cjhzvg3w",
  "key30": "Haxf3mNUuok21GJAkiFZBC1bwxbtUB8fEvSWnQe8YUj6VBz6Yi1cXwYJ5f5gVMwDwf168Y3qecp7w4sxsiyoTNz",
  "key31": "3KwmSTpwtQDsnWRQ4YLtGFDpUXwtQgvJ2WSVLButGu9QMV88feSDpLuX5atGKqgzGJWBKjFJReSkUQUZfjHo9wND",
  "key32": "2EL1bwDBTbVRzJqRSf6bu6Xr4ycF863cLmifYK8yqsrvApZ3uTLsgoy66GTQL7chaak6TqAg62EpUjSKEt5qErJ9",
  "key33": "3Nze9j3M6KgcAfLyeAN4WJr2mEQ4YPwR6iVKx1RekWPXFRHPZYd9idRZjA5j8jAKCEGcBQetCN38u84TX25DGPxz",
  "key34": "2cif8VE8A94gJ7M1YYYxKR2R3DNgsTh25Ptb7gxRmjMsTCH42N14fwCBkUE1Ez4aHEMf19r387zBdTGpGFzF8xyr",
  "key35": "7fKkgMf1ASgUZvt5Rjj2HdJWGpyDevTSxJGhQRnD2t8gyg3sD8tqGADwuBrt78HEgBS7sUrgvzeWwJci9ZtcRZa",
  "key36": "3sedUdGzB3n7MRDLTwXxEt6MeDtvwYnAz8caVobjj8g9ApFtHnuQwUCUsoe4qvJgqjxR3MiVMKPJLpDJdKuWqXJF",
  "key37": "zM7BBY1PxkiKhfkGZP5fVCrgsR74DmQgv4cuLphda8DwPHB4CsH6aUHceAsWJZbgUrVCeGgFsJ8huY9kJTyGQ83",
  "key38": "NcdWggtbCbXqv1h8yF6NjEdAA1fkQmmDWtrrkyvLWzm3MDpcWoDr5578m3qXssSX7spoq86bSukL6yy7PL5xVu6",
  "key39": "3syTGEa5QspYAWUdJbX6au3qwKUmqCSZKyd1ZdvHnqUnZRJkYxu58CKEdC9r9Mct2oVLZ5R3HRAvBGGK5K3B7BkN",
  "key40": "3q4ACiZh5foJBstwM9LrcEH5ojsUjcQhA5CxNBB1Zwd6idGJ222cenNbc3jhi6mVTwhwAY6ELu2QRxcvKMuShhdu",
  "key41": "3msMY3vu2p9mqqffW2eeDd3Bt8U7o3AVeaPQWYiKEg3oS4L7zA69y4PtawDAYFsyHgqEaSU7mawuehnLNFQBxLZb",
  "key42": "499rHk3nVnZj18rB7Qay2sLWpjsXVGKbiaSb8iMbKgsWQ19g6Kv6AiZGpwa9cUDBN7s1qpmY3sUpTNEDL2FULsaz",
  "key43": "3xfeAVSZtPK5mHgh6WiYjoGAdS9CWQx2gtLz62AucUiS77wGmk1nFpdmDwkWQusafNrwZVGHhxGVaSgCwBtXGE5C",
  "key44": "3A2gQWmWMP3g7B5Vx9Gi6LWDnHiQZU9Mj5KNUNDak6pgJ826YsQneP4DgyXQEUdf1Z847skggMTJN5CKATNLZPFG",
  "key45": "271axcpSfcfprbFqgYrPhA5wpkLxctRvQt5N5oxcLYjT9ny8Ckw55EUvN9iqLTJaRAkXxmRja86ZAzWehk19Zt99",
  "key46": "2i8EqzvQ5zEoWxPGXn3LjhCs3SAUx3KAd7pQPEJbgcsF75qpZz2u6jzGtvm2468P9kEB6XQ4czNNjtyNAbNXxZ2g",
  "key47": "5VWLHfMNEmnCgTwQmJwXGZwBR1LJ7Kfi9GvjuXBWS82XWeepBnRvwRuQpjDXeWVnCz7cedGZQT78kR4rCkBFf9ZZ",
  "key48": "3XEh648z5W2yqf2ZfDW1ntRi59aoX94EdLGY1PUp48wNjNxtaHZsDhw53YEjWzYvjw86B4ByyCVGqryXp15auap8",
  "key49": "xTgqCTZbTVzrd8df68EHYE39DkgiFWxtov3MymyUSwqjfDJ8YfPzirFLCxkBFdhTiAQ1wWwZ3qaqqiyjqpmQvCx"
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
