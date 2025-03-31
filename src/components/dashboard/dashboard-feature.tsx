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
    "4LjJ54Zy3W17M3UnPPotg7cS5xPNuayWAG1jn3zdt2F3u1eSVpKWzCpHCXiCvxYFhtCsgdkn23JNAEW8n3Fiy4iR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jH8M7DCc3WeVcxE7sEfTQsxcGWGzjrvdvtuchcGAErsJYk15LZ8EFL8Hn1RedENXHq6ztr3HyeDhuxpjmVRum6w",
  "key1": "52Sfv3GznGLwkAxAA5za8VobspRDw7DfPVnwL1RiFWXufJaPqJmQFsku8tbEKqaiswY3Ut17fFAoi1wqbL1q25G4",
  "key2": "4Eb1BCFMQWqGJXuJEeRNnZFVenRBgzyYhvdPx1VQBXqG3JJYz6zdjhP9r3chvEewzmmaAKaCJ9uEzj4y1zxT1tq4",
  "key3": "KgmCgs87XHi472ffUwWJSXNGpDQFVb6k6UJFqkGuFidCksNCA84Tx1sacB4mGdXwBHXByzfwqSu6bLHBRhZfV4f",
  "key4": "3ersUL9nB9xye743Pc5mUDzoVML89uQFRTJ71nCx562DL2VgE3yoTFYkKXecZJvyS6LWnyXDPJGF68u7xAyXCfou",
  "key5": "3jFCXoQhzzqUZkiaCqre1M49vyqJDo16zzYsugsSCWJkDAzb3Wwsy6g5B7f3hNE6wsK8R77k4toFiwftHDUnjoeP",
  "key6": "3hUkFY2Z9UyZMZyQnXrb7ZMANLWr5GqAMtcYDakj471dxNeM2UMmLjGPzAWxC8TPqv2NwhSdPW6v3iD7ATFhoF9L",
  "key7": "44KXiwxbRmiyJcwhxDdq9PJdgufBHncXZrj3Dr3BbY5cnZ2Fy42m3m2zuRnXACVDMEdXWAZSARpGDo8v6vHhErzC",
  "key8": "35ma3NE3H4TbrmqLg6B59HYmkoJhABmbnGMcoPZdbAL6qhLUEbdBbeHN2Qc6wM2Z2xLBzBKUs4NQrJmg1uvAjpMp",
  "key9": "5wzj1hkhTLsqtVvfKduNC4sAZPVAKvtBn4HeALTCnQSvBkWFGvCd74YHTt3JA6B5Ct9SPPg7SWg2RDMFE3TiEKnH",
  "key10": "2WLLC2FM6NfqGsgwtoYoXp9utntHppXyS6ok67MuxfPL6DNS6JW9UeNomF6mY23Le7xyyy3dh1jzaBtirnimYQeR",
  "key11": "3QPKyC2zzdxFKWmmrAQ855cwxQJt2ckERTh6c7xEaXYDkvd9DtGhEWVb7JcFqFjUYpCu5RdPUm68WTLfbxwWmQus",
  "key12": "5HdPd5V9Zkpkip2HtPeM7LzCMVuBJKE2VR6d9ue3BomFZZB6sBVoAYU3wWF9vorMPLUfttpfSsYtTrzcxnQshZ6k",
  "key13": "287BoRJGgydqAUSTXwtmtbsqD3DKXfZMvCeKPQBvQ3Br4PcV6J1SHyn7Sbq5EiB3UgY5jNiqkiXmXc8RrSPpzTos",
  "key14": "2zB8WkHYaqM6ej37bqqbfVfhgqtw9KYAKs9G6ZrbFHw1DT9HHVcBRm9SfpvLUsRVkbhE5H6Ce6AqC5xvZXY3fkyb",
  "key15": "2JRD2Ekr98EnEVoeD6oacYncrbXpDrnfECB6WvXRaCSBvL47p9fKQTJsjQnqeHTX1uG76y6nhhUM2RczbEMwMNdM",
  "key16": "4xfCvwZiTxyHm3i3sXcQQDiEDa9W9BedBQ2sLSpq51Uff9XeyssmL2DzUkaebSbjozSsakTVKSh6uoksCcn9fE9H",
  "key17": "3hUVKhJkCA39LYYMkVPUEgrJj6jSzHs4EC1VLgqEVEsdsCTnMuMphMTnKn4oJpbcVmLHneKXet7zBZSXhF41XeRc",
  "key18": "6XVB8Nn1oCWYnAJUBkL6rsYA5WrK8qqP9mqfFKVRxFMTLmBBw1ZhfeLK4iaQr2v8CdgpGD9dVyvgzWEmV6jjZEH",
  "key19": "4j2U9saX1PDjuU2vNSmSKthX6daciMuEZS2jfNuhMnHC5ewcQU5H39eUNbo9EvBsp9A96tdhYDfiVR3tQqiC8478",
  "key20": "SVZFb93WhrxsrCVy7681fwfKn6gCSSrMaAYYSEfbjfqeDHXKVppjbTE9J9oMqq9wbRSEBMewabjqBajBVRpTSaR",
  "key21": "4AuKbhQ39415cbJbSK1yLmr4vkbGU8B2gcnzxPvQuVYrsjQi95H2jEhbMG5qYvqmvUqLCQFGKbVEm4Rgh8WGaoXF",
  "key22": "48PwLNDU2n3maLR41vNUwZaGXd8DHT7UvhcxGU9AC9tKhWbkPkkhbDPwm4VsHKky7xCtFFGHEpwTzX2PCSBdSf4e",
  "key23": "4vTJFFv2cXy4seSNzhYWJL9LaEEuyxaiHFTtw6GhES3GzH8XGN56vndW4H1NCcXvjeAzUJWg3aZ2hnZNkKm83qwF",
  "key24": "9oJLHbM2avcgM4xW5aegb84xS8bArw4etGkKW8JGPcopexbFLG4gvnkLGYrZKEbYVWQGbYgNJFXPNauhUXnNKXK",
  "key25": "5upmkyc5wYR5JwK2hedVonQUpdHJ9CgTptUgndHm1bUnvdVPLauxXWF34h8jVa1rRsRDxit55dwYyyUsM7pbpwDS",
  "key26": "27Y1D3CSUTMovqLyZcAt8C1JBHAT3Rtg5xnM3BR4W9hHFWtz8q6Ad44fwoGW2jgkA6L1TwpxPQJYPd8Du3C2ocgB",
  "key27": "3iE8hVpfZgYCdTe45kaAGijop51vLsiEjJ1iTtiPdaEpGnpxVvbdkdhBUBAYmPXjKEeZmty3HjT5bcW7xHj8Fwqx",
  "key28": "3q8fGwLz7QdFKvXcn11c5BosYvsCLWqMf9LiFaczSHU4Lnu7GWhRv9Fyoy2np4mUFW5yi8tcv7npo1sNQXER8jAw",
  "key29": "3f3oGH6AucpPEeg9jyWcGEJHDYufm3wGdwmLafr72eXshdhrDtC21x93prsMnFQUjFAnmtVFpvd3hpP1dhUooSDA",
  "key30": "mkbm3BqAM9HNYxdktzidH3APunmU1pekkXpENBhDpCcYobvKcKAQqCtv1pTiBxKcJe9iZsCxWpacvCNGh4Y8z7y",
  "key31": "5kBX2Gb84iaNQwZH3j1ZNx2jr9mKuSdywk1GiGfyRzbCvo5PW8D2oKjckCNGYEB6ABezBdHqj56ttXp3szpvQ7Uv",
  "key32": "8YnGWddLpgY1zEbRoGx1sLM9mTFGu7yZJjQrVdwQPw9o252daVVSXXFDpdBFm8Mdqj3Qs2x22ukYiwtgc7Kf7vQ",
  "key33": "ELr5P5eUri5Byf46AHq6CqQBkwcrCLrnbgYTKAwf2qLwb2VwfeA8aXTtnKWTe47Vja1y81Zuj5hLbjizaVrsxm6"
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
