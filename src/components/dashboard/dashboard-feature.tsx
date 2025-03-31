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
    "46sZffjT5MDcfX1E1AhunRp6dx6SHFdc7kuEUL4UzMuqpgQpB4Ao2EoSEVnSKc63ogzGZTeEPUZobabRVyFWAJW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8YNofsMrTyZKDMua3L2rpbxzRv4AXQDc9dP4e28qutg1eV7viPmUCAz5PH75N71cFBqgR4kbUR8Jy9x6Hdwovn",
  "key1": "2daXPCtyK6yWjFF9jSkQbV5MpWY4ok12jEUopEwfaAjw57WDna6HTXksQ4WUKGhdcGeSDqjF6KgyxLFgcB6RqrKo",
  "key2": "3kNgemcp74srccwk4zrZJ7YhRuojdo5QBEQFcdrbdpZUc1sqwXnZTdTC2PZcy1bt5tUP3ZQ9LitG9jtyPJUPPM3G",
  "key3": "5ghcQJE8fEdMkQzAtrB1avRfvvCnB3Ew5MhS4Rawyv1PDssgggZBbRXwJHKZuAMXXDP7GWjY5zW2zVBHUDsHnXsG",
  "key4": "w5MmzabnkhDo1gPTEZzaBDoFTE4ENNaTFfA9HtX8actb8KDda8bjgV2wWmCHQXbEKv22R2HoZcTbu13q8xQaMb9",
  "key5": "3fiTYGUCCno7MXR9g1qu87qTadbeWP3i56dWSeC7fUDVMkMArbGVQRshReQnrN57amcR866XhHVEgGgtSvNfietj",
  "key6": "36rySsLUEEak2CRtNJRR9AwWVdyWNquCugLKkbVd3UAYXipk9gHFNxp5Wjjs8rQ4pABR4uXBVk4McNVNwdKC95Ph",
  "key7": "58Mn9aiEjbyvBzEJ3MZnPFeqbBRtBjL1Faa8k4jrH83B29Nm48xvPm8LsTRE8EGnkMYawUPU6sLCdMPJV3ty9zQ3",
  "key8": "4Qhz9ADNHPiCXHcHSxxqhYYW117rQyVoLpPAwYdh7RXtBgZHzmHNPf64F3Ko62pxTyV63RTBSvhN4eTus2i8awfJ",
  "key9": "Lu3GJmDMhZ6jck4JE73kRr9RXtg7YcY4QmpD4n9sBVKC9iSx7UP1fTj77XYoP18GM8xrcjRuBDKRbYYZkJLWqfQ",
  "key10": "5bKjmY8nA2tRt3BQUkz4gBgn12Mg9fgX1LEEx7WoneZUqCZkR7WBvuya2xaNaCLfXWnvvewTBNfLQmhbvkbgsstH",
  "key11": "31hte9smmhTxGBywa7R4PNXihBZQauC2K7Gj7kyatXfm119qLMC2o33RRtyaH1mqSqpLH2WUgXSBEL6FW5eWjDFL",
  "key12": "a8jCuC7VoT2Fpbd7PTWTMaXZvX3pEGAdLv4LdqMNh7bG1egGbKVMi9UkvDKnzezqkJaLAycQnf5EHkXcafPx9UG",
  "key13": "25f91EZi6UWGLLo5q5SmNTzqXvU7kRQjaoyEXVwJvR9cp5xWGA3XcnKKnsQDKW4Ucik8hnpnkTEcv1tkaGjPPWWy",
  "key14": "54xRMG6mMMFjN2AyiAhppvVvJsx5K9WNNpwA6UqogpRCHfKnuT59fNAHYcuFV3tguvUHHfPKxY57h7xXuJALLYvT",
  "key15": "2ZsemL1whtVWyp6DiQxzEN7izX2SQjeEjF6WYvv8zCMRdMLxVKgWHyokJheaiPehuRFyLJSzRnK5xPkvqirHhKVX",
  "key16": "5ku6Ba37DefnqhpHjHZcy2SmB4XeG16Toc4Zm3mAahmUo36vt3ssF6aBcp1Rwhem9EwjMcWdGCTA9y9yLPbVn6DU",
  "key17": "4avv5T3QtAygvLFtmvKuGgkx3kC42oNd7nrNFyFAGV2BJUSdkMVQAtnjweEFrRxY53nx4Q9yoKDvCjDdfPm69fkY",
  "key18": "5LRkVdJmW5iSeCT9PNcFFS8p4ZQZxvZi1KivBxCXTrxyCpN6mJLvqJMmDprhUabZc1LZJWboH9JPcaQWzo8GvR1d",
  "key19": "5NaxTTqz8tZrf2UUze9Hh7UatY4LUcu7j7y7v22zv7NRbehGX9uTbXHL4eWZKcy1cegQ4QgTR37u6JcWQCVrTdTG",
  "key20": "Yso9dnnt36Roq8WpCgVNnANKV9S6TD1LDvvLtudJ9gNq1Q5esS2Xh66BccM6VffQs1nNwuDwVY1a2xk1ZUnht1S",
  "key21": "3F5w492vKWXrgw2nQPNmCFrMNQg6PKSELvtz9mLBfdB1ui938nCJi6dHjJbGzJda59bnQT4YTvQ8D3GgEYtcmMjy",
  "key22": "4uuBTeKn2UyS7wwmhdyqg9KGtHvihwCLkPcHmmhGrPRfYt7E3TuQWxBdNUBxzV43JM4qSEzbZLLtGrMgsvVe9Hto",
  "key23": "2hvpHrB6mg2euDTCRDgraxFRLFRjxPtRRoMQ1BbNcV927kAgUBqGPDzUKiTJgBZK7U25jboqdNUoxTto8sj2yeML",
  "key24": "2HU18xUEePwsvgxf47Lg4kc1onkDFmbcw7aoTXuAeVtBA9tTPXWvLE7JeG1cNxGvCkugE6388kehAfckBg7w8xcr",
  "key25": "5EkPeHxSXW9cihKSvXc3cykAka3Kq6YMfaochqRBrpCtosSfnX88JCeBYo6VRA2EggQTPtLANivrDn9MsKo54SwZ",
  "key26": "49zcde5B3pbBFj6q8i92zCGQhuM758fJQv83Wb5Uhcdp1BvMPzbAPiCfNqJF5jVURbnC9U7HGG9GKW5HHSjLteYv",
  "key27": "4ceu3hTT4XpadDAf8ZoaSgdVaAAmZCB4uFHLLa2iN6seYVd2Vvas584SMbATPuZ3mm1fqZGv9MCLJS4g9mopL2Fn",
  "key28": "2XuxcSNMFopNh97BGwcbuPe8QjuNZwpP5maNYsMzozuXrbKkN7zHb5SepkDcZ7qaQXzJxRRYZXtur39nJS8h4gLy",
  "key29": "2TJQeQ5dBERag5LsEP228jwiaojksq4vDo4uWSYECNDoAMEbManYdJGCjZXEbL3tfUAvxeRxxYwGYsA4jUGRZTrW",
  "key30": "2Tmr1ySt93Lzc5oPUdgWBuSdcDZZQeK3hiQUvf3FjbDb46SicTAG8HCVqbheAc4JpxBuLdoWxnYZMgSyYuUVUkLN",
  "key31": "3bdNP49P42g8SHDz8hqMu6F3PXDpZegKtGRuKXTPnBz5BjRjCsg2KAbkgB8D2sNNmAAGD3CfddHLR3QDnXyyjGUS",
  "key32": "cdycoEHMrSrv1QYvr2ryY1HjhqgtYuTyK6P415VeDr7UqJU258dZJGQzuUS7W6DaNRymgiwHMXtoWyAEfZrqcAe",
  "key33": "2qkC4ivqjsUcjWBQ31adLhcBaQSAHFQCkseHHUmWkK1w2WSSNkEGrBDdodus9ntuv7YAj8LW4Q9erTh2cmCSLFew",
  "key34": "61do1TKtDVhR6gVb2DGCdWkphZNoS3UFF8Cpp6voFuA5Az4TEvbA41j6LhnWh6tkHdr6j1igp4H88d9YWxLaeBcG",
  "key35": "4dEWThvkzNct8EYnoSxoLufmQbBN9R8zNTYmuWVVpgRFLQ9XEqXWLUDu65dUFebHhJmbJSTMKNQb9Jf35cUy3U55",
  "key36": "57iPq9QZK2LuPq15Z3q7r8QyqPWYoJJxsGmfoZ2v9yv3bSpvBAqghnfm4r6Bc7URRHWR1DYpmbD7CwUhwaKGYyPx",
  "key37": "2dRucxQZiVBUYYBH4BaPxV2SWuNHcmejRHAF8kJr2Ud3EEVtkEsa3Dnk2kJDPQtEVq9E7aGMdGhV9ciwFRAWhku3",
  "key38": "5m3tkcHpJsHM5iLLp1XNdEmZJznMXr7NHpmHZHoxXMt75ovRvM5ioFevZzzuLdPioqr6NZqFQke5bZDkpPJGmkRB"
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
