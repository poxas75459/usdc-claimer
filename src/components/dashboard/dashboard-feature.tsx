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
    "oD8sGadSypbDanJyRqSKaG6oQFSV66N38Bwz2GfBmxc4D2JoZmDJnPkmWuxm5X3Gw1dcE1jGeg1yCeN3gH4qB9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Tjqjb5GeFxaGMNqBwnmRKWi3SE7NSW2CVdBwuRfWC1ebWf6Vp4eTjwUqb5b8b5br9PboJMeBREbPZ47xC59CZE",
  "key1": "2yAbD2X98jDP4P2VCpmfy1yf4FexYKUArtSF5g8kAFBw2BXx3zKBUbAG7EiJZXu39qNzQmJ1PCdrzbEHXAyUP5nQ",
  "key2": "5mAHc6gEEB2yuuPcKbwnPK6eJAcLRb6AeLKrFncn4uuVTFfLrcbjbCAa1HSKC1HLCFxaQsxaqLxg8W9CH6WEYNdb",
  "key3": "5vULFYLSRFb5nRYzHQuq1ofULvLjXnXqtXEZbeKcesnDMtutxQqwsnAyCdSrd4zjSyMv5nbifyeCtyrCqPdeFHrw",
  "key4": "24BeF31UPbNCr9HSCuLFCKRMV5nHtB4JF1Ff2Db4ydZjwtDSZYQ1ZiPik3YoqNKvjojaiu84fbYHgMnS788vtcNZ",
  "key5": "5ugWTXwP2VBZbJtbB8ubz1G5Sk82jh88F3kiMDH1aUvaUuuzAjJQfYTeSHuKyEdaMAmVze2RDZERyk377sY39FPE",
  "key6": "5hcCg59jvWBmpabCnunVdSJz8dg1G7UzHLXXK1xtAxdceX2e677PoMQfTUXKNo21zzRMGxC9rMyTkaZxQeq9wxEk",
  "key7": "4SBSsXkE9zui3BvzX4SCK594DDLXRADDdJU6mF3sBf252rWrBqBpkEXPUY3bMwMdis6X1ereqb7ETVF1MeTj7j8d",
  "key8": "3a9zFpgkBQ3hzr7Sq8PqAeZrHUQMCmcDvatPucw8u8u6qo33hYaszouR3DvMGSpV5CpU2RizTg9cxEVthKvC4FMH",
  "key9": "3iVTUgktquEbU72RSX2kbCdLwGZxNGrvVPKDETgNwf6AujrjpXjiyeBDyzQn2EawVufzDarLfhm2xHk995b4cGcg",
  "key10": "4M1bfbP9JWBfES1hrQA2Csfra9jhxrjFnCNeE2jk3FyWQzXkhTDsL24Re8peinRx8bzHSEC1NrdfSJcXmkjESgXY",
  "key11": "x21gbERcDpP1DfYi13ynMLRhZ8t6Q7XeZs34pUx3dAUBt1m7mJeRgPxQCZiU98gTJ5K9AoGmd7qbfM52Y7bpBx5",
  "key12": "5PKrNWQDYUxwzLzDQ8ELmYZADPxdvHL2rmY8dAe3TNTSZY1gziAHy3W7UqVtuYiibFCG1GkCcqJz3ocu7oTjHe86",
  "key13": "43m7PyyATQJmw79QADVBeEjNADLs7pNw4k5tUzgY6GY2Xk6qZj2vPimtmb3E3777HyHs5khtcax9vNe344DXtXHM",
  "key14": "Tj6WenMbVmQ9zd5aLhNz2nc71gqqCgQaMumB3tiRpQcDtzd9PU9W6jdUxaww7NjncewJmNz5WZWkCcU5NwPoMEm",
  "key15": "GrafHLAURUh82teEbYW2vD92EucaKJRq7ga6oDP7p6j43ocV2VyKvKULZ8sPLPpVXYLfb5aPdotSnUXH1Uh4nKv",
  "key16": "4w2iRdQs1D67VZr5CE3duEz2tJd6BtX8iFSZ7gNmbV9aNTaFRYuxtowFrHFmKnZcKwpYV3FBSH4bV4Rrw7A7NeXx",
  "key17": "4Pxp5m3LDQFAPgnf2kwWivS63fdcefeM4Fyz8Hkcrf9SbhkAF4WQ8BmCgfqCSZ7JwfSt1gsFYo84dB2MnkvRpTVj",
  "key18": "LQu8MKFWcVQMmAmuXDp935pNtkdTv6dJwUxR2xLRS72GP6Bw4Y8hdw6gefwdqRrefHqLeSkAcDnFuFzG7h1fMJh",
  "key19": "5RS8TgiitQQJMY8zYbaEX36AagU6Q8L6oVEkMggvvgMiG66GEYnhCmq9Ux7wCe3boNgSzwg7vjqjuqtRa5K8fC7T",
  "key20": "2bp71bvBfLkZNg4ZgiD7TFDLjFB5VHps5dyx2TD7a8zcESJnFCRUKCiDBGsmgzM4SLvp1qrYRsGLZqkhi9okWNiW",
  "key21": "2kbXwiXTihtniVge5n22xaV2sZNJFHJLAM5tbKwckSRsgFW4ccgY7wTDqjRBVVZBSiAHprm5vQUdu4gB1fLXXKRR",
  "key22": "u4FoeaG9sJBFHnDi76a5g6JnLPUQxsPQef52YxkjLqZjTA3LZKajAzBQeshLncnVYu6jm2owUFwpQt5ai6eUzvA",
  "key23": "4z8Shz2dBa2gF1W7pMvtGMNijhNkw42nqLeZRG1KCpZ4xKkwT4vmWCWJgqQLuTFgeR2j9S1SAzC6rZG6zCyqCZUu",
  "key24": "61D15pks4DhEytTVYnpMx2mriALNMbD1rEpeYuYEhipro57AbA7NjuLNArKhFAEdJceiqB8uS7vLaZyC9XVHsv5m",
  "key25": "3VLT3KxatvrvBLuz3sKmJyryrNZm7jQrrWVbkmaxsUCyLUHjCMcjiXJNrSKCTQ2ibPUTCxZx34VmD5oP2JgVFm3H",
  "key26": "4RLSVgXYJVFcJd8kWN28afvRzUYzwNKYR7uHZ4ziZz1HXNyiL1SYCjut29CjjzYjyaZuLhrka5CEQ4EFgpsp3Wg9",
  "key27": "64wfz6Q1YRyFEhY8t7TZimyMBV7zu1RTvfPTFsSyNs8M23bZtLnyW3jx9gC7mUhG6peMF5wqD3S7EMXAEpAj3XEx",
  "key28": "3F6u1XKfvwGKEWeQGoPG8e6CzAjfSoN7P9fkMc1WCHjYuXkCP7XMbUi4wc2GK1Gr8gp7cS8t8juYKnSGd4HGGCf7",
  "key29": "5NxY8r57S7tiNrmfD8yxUpqbRfVyKq5zZ3BXXwkNFwaeSaWdsNf35jZtLFqzTj3dSRGBNKE2QSKxeQysw45LjUeE",
  "key30": "2MzADDctEzkQEFwWzjrjsYiVx4qtybTpubMR6uWMx6jyfdyTiE2VSJJ7urRPMX3BwKEzBH1BWUnvrkdBi7gfy1P9",
  "key31": "4MbUSqVHsbsNsWHMYL8RN5xa6cM2GBbCJ4CfW8ekeX6waDkv7qGyHWAZ5FAbUoNk2XZ6fauWtVqb1BohXSmENDsC",
  "key32": "YhcLGZyCcDk3LwhLdUpkiMqWMWS6gbDicYyPmAu5VC3NWeA2PLDe5WasM2XixR3jxovScyviuLD97ks527tLEAw",
  "key33": "33pTdkFA1bRWoiTCwC16n7SFhXLVWwvhTdnHStHpeJ4LHQqfdg4ScCuHDaCePUu2B87YHqazaNH6nFxDBHJ3EvtW",
  "key34": "227ABB17RQCxsVzLTQ7qoFSEgQ8kgmHf2qETBsaJ3hahZpD4g16eYRCEgC6v5nM3Pg1Ck5L3jiQUUp2BTjPJnJRE",
  "key35": "4cGqujAhukgJ59xPR1yZ4xRZik7S2PdsifuTFbhXAJbQWV9eiif4dsuDJoLFkzuH8NB2Q6vNz3BzTHnxMRVRZakH",
  "key36": "64diRbhSEojzppjYk3C1Qh1XtHSdQtmQMijH3GTTY3iiaYAg6qxH3qaHP9Y53EMfJXEmoWt5JVPDKU1aoEJ1i42h",
  "key37": "z31za8NUy7GgrVeRY7AHvDXK1ZXFZJEuiNp4Ey5MvduvZkxLmhzNSz1NpkxgFfHHq9MZzaJv7tnsFFH9zD2HsDn",
  "key38": "2VDcbcFGEavCEb6TB3Cdx1PH7saN5w8s5wQuE1CEBpiyJq544xDW5rXWxrEN1f2Z6GvbJhATNQDhgrQWZPbA8SVQ",
  "key39": "5Md95Xa45DC4kduHVR3PW7EhqJCL4nHyQcMmh3SPqfnW9xLPR8jaMKxNnBHz38aBjbnaRxUB4wHaCSehvTMjUFAh",
  "key40": "3crmKrMZGhGXZxDhkUjz86dENsdunLTwwGp1GRLyxBPKQrf9grmnnpMpEvykZPC95FmABwHfswsxnTJknAT2j9Yo"
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
