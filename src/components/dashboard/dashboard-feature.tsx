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
    "3B1p59jWQi55mFKqDhtpwyUxBzWkEevk6qCrWertHb4oVd6PceQg4HoVR6Keq5Sr3MPpcKqrv1X9PmgZqnHNxXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ai4yjBZdCcLznehLyPLhyaWT411SjAtXWPTyNmihWNvUVb16E2LPxs6A1BVm3NCyWsUSZcDCp5tMHuwmXUvQhEo",
  "key1": "4rWR85DNvDZeDngBBDb6cxMt4Qbsq6KpjN4tq6fDkvLEC3yhndjwoeYLvj1obEjou3YZcQn2X1PY9V6eCXSK3vNa",
  "key2": "3bfCzAfVMjaFTZu8AGihupnpZGzyueQhmY8VXHAFDYma4N639C2QEXHsBoctMB97Auhuv228heKjpdr1zciErJz7",
  "key3": "3cT7eYz6izcxMxeW4YMkgLSYdPzh7gXyWZLfLRp9SUcmyeMpZsePtSDyec6UCYsqP2CefnzBaAsaBpwN4yb7FtwA",
  "key4": "44qRGrK6rUkbUV4LXjwRVsx8mMCyk87Qw3AXqCtBqF7C2k2XN1kwJ1FpVmgor1zmoRc1BJaqMXjhWhAbMwTPjTin",
  "key5": "38E3rbogevz9U2iGwVt5gJCYe6QvApPebCvVVtVTTkKakGxhKPziJkXSBeZLmqQiBx1t25giYCzSieN3wkLzi74C",
  "key6": "5m56CwK1qkDoydZfVvi2x6Dm8mrLoDx5qGcX1uWugi4X1ucWanRiCGxVK3Kx1TTQir9dhGvZ9TxDHNrn87LiWXMS",
  "key7": "2FB9x6WivgsFz3i4d66LRvT5gEUmGLF1PwEePrfGfhRUvrE4xDu7ujE951xN1YeWpKogrRtqvPB5kYHQKcBzAJ2r",
  "key8": "ZAHQqPmsAYqkV9QaiqNRQ3ryrNc8az5oEKFExGkFVBi87qMo1gvsmM8mr4eVuCpknn6pCCL4hBzaQjEhQtHVhPe",
  "key9": "2dGetcuRZkDAFd1kcJBSWSdT6w38grYPuTCAxoypqf3udxPPr88K3dHXkgZodxJjWLNmmkjtwsSA6DdebrVvgYuY",
  "key10": "nAb1eCHhvvgyC8MvQ2bsE5UCgeGh997UDJ4ES5oNvVf1mJJwE5ucgSKv4qhGPgmMPD8jUAhFMWdZjVvkb6cy6qh",
  "key11": "2m8e6LZVSxD5K9XEBQgJ6MG8mSwCoNCH8wfLsPzSU5fo2gMbcjQeeYxYDcPgGe4omNJVCKnAH68GUZnUSioiZHTe",
  "key12": "2wSHvfqrhcKDYA5EYDwRNX9N54KDSUtjNz3PipTsDE1zFACAtMrqV2fJu3GuP7LXVeYiFo8ve11m2n6hoDEhgWEW",
  "key13": "5y5yrNcgURXM2cdLsrYNxSr1gvZfqsKqCpgSWbJXk6kcjtQUSciW8V9uhDK3hx2YoNkAwJrZ6Jq31RRVB4PmYfpp",
  "key14": "dw2wdZtqk6VhdkhjhM8LbUBQSpCRe1oPgf3M4VRoXh1axMwcJ7PAPmW3Vdwt65Gjr5B9KLWEzKzVQwrqa5tk465",
  "key15": "1qhB1mm4uxYdSz9cZrKWjVoPMrGcfXPGFGYVw98ScmqT2XrfGodZUc9upWD39hR4MpwX4eWDFWZPqkPixF2jX7i",
  "key16": "iNQXvsyc3sEq1vv6mw8Gx2nyEVSUYr4VXFqLkMdzJDTvk3pHhc7qug1vvFwmXfZRzDbkwiUTAkG3YmJALnrg13h",
  "key17": "4syCbcgbEG7pwA5TYiCKsLDNVSUcmqs4EfAXHNBipjaro52HuDPkXUoBsNBsmmwM1fg5L2xhUykB1zqti9x87cCB",
  "key18": "3ZjnB6g7m2rSru9x9EQ4TVXz3oZts8JCsRVFcfQRLYUG4zbKWTBHLaHUZcsbTjWArXV1YUgApzTiNhaktwS8yW14",
  "key19": "3KrdfNTUEvawPckmzzYRK74f7Wn7RKoEKXMHhGFQ4LWBh2aDJUeadF2pVjKYTUvaV6GriYBYwdsGDYsUdBHqgxC6",
  "key20": "5t2E99khxy7ea9z9CWTbVQYddg8ib1zFjuwc6yaoz7pqdmwEvhas4oK4Y2cm1WgjFBmbitqKfGGEs8xTnJXxBfyE",
  "key21": "36neXMvyFmpiRvJb3MPKGJMEgRkS733wkuxNDKrRTHngKPccEmYTTrWPrMbFL1BPkhA7HAYD7NVGnvhPvpWFkazW",
  "key22": "3aY14R8c6NiUDzQe63NDAwqCnMdEcisYDDhBedNMmv7BEd9SNSZYpukTERJ7TGgZSm37GrUHkeC8Tke1v73MfCat",
  "key23": "2rSUPyXUKaq7hKEXSJUxcehrmsRQPfMyfGeoYKoFpVYZaFFKvKDVSkEqP5NwLCUGD4TpDAJqeqqPwhY2v1HWidrH",
  "key24": "5pYY1jNHByXngajEXbmf5Cu6KR7r1P19v3xPGjHBVfqb3oiFhBrHbes6ubXaTU587Qvc8bRrQYTYKdfBuy4fGXA1",
  "key25": "5YrW5qPeDrACdFWVPJqcoodfVCBetQZrApuxVFU17MpDfHY1iuCvz1DbMYhdv254LzykKQ59CfMrXqYpzAty8XVf",
  "key26": "5iAHLuRrJ6paiXTp8G79gAr8M9Z6hj1b1vmqQuAR9Hkf4gCXdni8H4W5ThqaUNEGhs1Lo9MGHkWsSTAyseXFQsaa",
  "key27": "2x7VNsT2siqa6GMSA647QoDvqygJX2qCNev1KKNibrEd9WeT3vLAHMn93ii6RJGwswrfQNWUx6pWP4sXeH4vmmYT",
  "key28": "5EhtLgZ7f8fxvTJrqqUHPbhJ5Aoe182R8kyMh47xEHt4KJhqausTSQaDwdW3ysd5yHa9djUT83DdD7Mqm7trK62K",
  "key29": "1zCXBqCnfSGA5FeruGika3yKknfiEBEMGcqFrgxTP6i15oBAnRCCdjR4D6Nrn2R81mGQ4RjYioSMgy5bG2DqwJP",
  "key30": "5dGbGMH1ymvdgTakTwxz1cjSEZp6NJoU9ybCJonpbMivnLMAb87w4wN289i4nxNQ6HRinhgkooiBgBF2krM8HgFu",
  "key31": "3HxaPAajk7EptkntoGHMkuTMHZYj7B4hF59wpxCda9kiaAUbd8mcxA9t6Sjqi7FUuwa77UupAuMJc7hhudNNNKqZ",
  "key32": "5bCqi1T9NXye6LySYHgLJEQwUUCy4fLEYbH6ea92P3ZXAp83hNVMiH9YAHfAUNSYqqcK4jgFkCzWttxYnNr79to6",
  "key33": "29fWtC89kCVGNZzLULSH1A5M4dxFan3ZeW5R5wQCGoQiT1MvhBrtehEmHx2iWWntVyevrfEmC1DhfgSifpDa6QiR",
  "key34": "3AxgN6VBDmvRh7Fuvd7Bi4MK1ftJh947TZKRdfehLogyCGLmJ3p1bQurHHmYH5ngLw1Ss33ARMUa1nzP8arVu1qt",
  "key35": "RDYaoArvvQ1pV5ecJnP5bAcf4vpwAQHHB5YXK9tHhaWB8Z5ZdJSTezG8dGvzMFnQpL3RnqxWZnoXfjnGJwKhYfE",
  "key36": "5nZgA6PaoH6cpWEFZ5VdUuqV7vyophidoMvebS9R4RcZRZge6UyAME3ye7Gfj4nxArCrQozaikZyHytYWfXeGC7e",
  "key37": "3PBW1NNeprwNQpezv3GXRXTxGgDNhMH8K7g7PSfNFHeRVvmdttugKLULgnQ6DBicZXeZC4m7r5Qv7QiqBzMN5H4X",
  "key38": "2bfvLvpkGriMRajX6cCb9ttwNpUuUWzivtqrThkfqx2nTpFi6qeDQX1WJh8GYuFcAKpWHkwySNNjPWfCJKfwnjBj"
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
