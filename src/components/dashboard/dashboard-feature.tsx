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
    "2bhj2S5Y3gyqj6ydY4K8wuUTD7AAavxnxRk2n7TmXtNptpzTXbSMYFLiA4ebhjavCxp6vb9TWjHrz8rew8igxZEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wiq2z3U2ZuPr5a6HB2x7jSxmoazyPKtkr2vBan8uCn6qHBEAp5xx355xbR9vMB2WEEUBUbcgV4mJJXZ7yL7NnSm",
  "key1": "2p7MmsGsUWERr1w7GA2yGGjkpMxSHLYbxrbXRKpwjn4wPnMxY8hdSi2TyB8FtswoiFpG83tQFBZme9Mx45unyaNe",
  "key2": "5jHkN9Ye86KGGUhVActTtp1VpxYNztZPTjyFj7givJnG6ytk2P92N3X94KCLPgVucaqx5c1G1GgYjURGQeS7tfMU",
  "key3": "4r2wXsM938nfu2LA3fmRbqLNDPPq4jXkrNSvMTsX68XtFgNBgMomemh54Hk12jWU7SCab6HTPNtbRCsfFLZHmB65",
  "key4": "3zfgCVMozuxTh6uGgf4CYhNDA5rr7Dc4s55jKAZyZWYKXSsE2bh2ecZ9njKJR9DDPe1ighrjTSHWkQwyHQry418U",
  "key5": "3DTmQE1i7fN1Dz7PYxsuceHK4c77aY6f1fnbs677WpoY1idARbyCj7KMhdHqMyKYyD6d3UywSHAMCciqQzoFdiCG",
  "key6": "SmstKuQMJT9tCYRWY1VgNfk1KSqeyew6Ew18eY6giBH7iQcAST4NVyMcfxvGvZfAvjwfU3yFaGCBvMNqPTxttr4",
  "key7": "4xxiY7srL24HqW8JaGNckcfAJowFrxyvAxLPzWPsEmKiKgstz4GSkLXbtKsopZ9ZhPCzkh8SGn1jUCb5RSD17gyS",
  "key8": "4jXTzL6rdqfhRNvdnBgGaVFJEvg9tsPzpQjire3hGTMQeqwRhot2XfLDYaB7SkGPzJ8hXoVZpumLHJ472FbAdaST",
  "key9": "2n4eAwFbmjebi9dRi4gvRvbjAeR87JxZbGZwndBMyzR6azhWisz19aj7fvsqUDB35YhCXayZm8NMVgg6rX1zMeLT",
  "key10": "XDaFTkwcUNbCJtUTxzKvu5nkA9VCTiC2eLS4bacrgiBSr2ZdgCeGRAzyHVkTDEeXTWFHoCS53SZUMBCxjbu7SmA",
  "key11": "XLY53FFfFBq5SXAWPE8k6hZ5DCsqJSAgXTnioqKcqDgdYqZpmY9t3DiLgxVaCgcJXjmzv54XusKvkQJD3cQSRC6",
  "key12": "ahKBBHWFDe4Sf5uzTXWWyK1vhPvSbXq1cEVZXEBgDjEjwHxsBFccYtA8mapHmZr1CPLvnYipDJA1ENZuJyPS87o",
  "key13": "3ZxGB64S5mkZNa4EBc8tRQV86hFMXGT5rqakZAMbdg17ZvWrrJkqMiK9C8nwcoQwzBep9SyMYzZr7iW8jXM7B2ZP",
  "key14": "3gA89YBE1c7FXevtZNsEByHiW3nvpj1tFtwjZE9QSto2ChpVtRBFVrssa1RRv49g8W5iREAotgLmLumtcyMkhT3D",
  "key15": "4PLpiVkJizbu3VM4DnjXcPkHJ4hVXkHYbNP2BEzhUaotVd2FfEmd9sBN7MQuzFXotBMKnAWbtbezRX9awG4MeHLq",
  "key16": "3wWejoLucS38ab8ycHscQaT5Pxk6BTmtc7FuoiKUg12HaTMFXrByoyPSinexpYjt6Af3e2aNFZfBQY6ChQFrFqyY",
  "key17": "f26tgftba8VtShTPSVi51c8PBZiyfY3JfnUW774ayNJdJhJzi8qu4hN3y2CNzec6kLij2XFhHkpttXwzKeUcjDG",
  "key18": "67creT99R7N9Ki8Rh3K1o7pTfddSZNbLKkv3EGJUJJTtbqKTEZPQR4Uq3ooTjQavgHF2NjzmCAbWPN3rnTVetVR2",
  "key19": "32BCh5w9RNdxqTkSWg6UQAs1FzkrmAQHt4rwbn7SU72mgFf4ANFgGam1zfduPMAvnVURQnpXpTcic6ewzajBcnVx",
  "key20": "3aVnHfNMsT2o4SmZ2f6imxw9ScJohooEFkvWXjPwidDVBMWEiwPiHrJLn7BRCpAMxhkiNScsibgsMurxpazCy6Tj",
  "key21": "5qpYL4yEQGj71oqhCfpZUiFiJHQiCvEpVckrKPjoifDaHxAK7p6nMH3mmqVZ3d4ouiMD5UuqvA66Y4gCmoBR3EFQ",
  "key22": "4nvjs4eDfou7a9kHYq4fPNKZb3M6rJ9TGTDHcFnftuT2GAHakZDTjjKyAnUGN19TY5wibuzohAcbLG8SLvpt31KB",
  "key23": "4E4g7teS2wqGAvn8TAgraNNWUebdv9MPy6wgo9AdPantvAZgZiC7zyc7azHsC75hUWSnsVdgmP9JbjMrMrwe7yKx",
  "key24": "2DJ22FMGatiknbhWyfX4SyQSvVDc2mALJ8V2EwiHyMvo3Abs5hFgK8LrCbnLieFn5Kk4bKMS9qHarzMgDhboQqiz",
  "key25": "2BCgwBdMBapgFM52poT1vWhfZ7f1M7wi1paJPJX2Wh4rEPbai8PBNxnku2gvLmib6s5dbKJW1FnFAkuVEcvaF74k",
  "key26": "5fjTVVzuK2674cV58Jfwu7AjYMEzBVe4RxhbwWYyqAz8aQwB7QZXtsiWdhuEpy3oK9zafcL44LDVKiLnJLA44xFj",
  "key27": "4GJySUqQAnpayYtE35AFEMfHXjLxqxiivV1vAJAnfBcuopR53ybk3VyZRsMAoTn2zHAm7Wu7VU6mNrG2ED8ZN83r",
  "key28": "2zk5vsfcBuN3Pb7gVyuci3hJfD9DxKoi26dgkcTXgC97Vzswek2aoFYXXfXdJ24MtNTNrkfjsqQmebaDt5z3mBbV",
  "key29": "4qsv1ivkdrsmQyN81zdwL8bvoDEq9wcfEC72ALYNsLkFACnCtZfBBaVp1FjH4tpVSBthmLBostfXD4e7RGaoPU76",
  "key30": "heegeMhuFCAfmEV6mLkQhihTWFjQvh4aK4DwELyvVcz3u1B2ZwA1L1dqxe2NfwqaPmodzH2N7KbZsRi1tGenAXj",
  "key31": "3TVnhB45Ur244dUgxeULSZt5cZSgsaRJzmYy8Zihqyk9tM2xEyv7GQZbrGB4AWiZZSUskYjriMGgzyNfyxp5FvFF",
  "key32": "4XU9xEg41kZ8YJ8awBHa9ffARi2vFQodXQisss1cMWYvopfi7wf3CpyQVmzxeeTAhtrMp66LqD62dg6gb9sTsRYg",
  "key33": "3WvCCZKtK1cjy9vZLmriFn1PjvvFBDfZ7HXK5BkD7jSjf2x6DjqDYZnRHD6CxywFTLtvu6Q7pmXbcaEmkuF8KRKc",
  "key34": "3VrMzdoQEdc5eSsvdwQrrppDnTDf1UxoU6BYEoQjmxEXGxG5xJ7CDNp7538eDePtGoRECDkZwHvHfwwMp7M6GeHv",
  "key35": "rsjV12ebZ7ayWKzo6ojU61vVX4G5WxkAXdGfcCtPEBv3APKXnunfhiCFeMzidXjMDrQBsg6mHWTeXN4Pcpbz6LM",
  "key36": "5iUm7DoYAEg9JTUKjeaHbkdEfV8EoyN7xYjB2KhrCdfDy3HyGjq4ecoMDEK6U2mhjrK7MNDKJ2o3kvperuwLmKeF",
  "key37": "3kgKggnZT6LtY8J5ufe8f5va5N43iTungBrUHifqRaEh5GuEZSe1diPAn2GcBZpFV4Upg3c5AfPuv5qh1AbPx9jA",
  "key38": "3aTyuvniVrxE7Tqn21fDURHyJESpjBV4h13coNTu9gNXEJdqt5X5BpvFxSc7M7yZXR6xScyNBmE7DXjCAb28H3nq",
  "key39": "3yEm4YyTQquvXmhELG9XcbPCjttkRR7TnGSy6DpxF3H1ACiryv3bbErVUW2QrqwKrYzzvgdf6NFno7V4CGhX8qfP",
  "key40": "e9EKnQgdSkvx4aCwhUXmPPbHmWJCLGH5cLURQFMfLxgVAEvWZHiVoyUEBPF4CrKyaPWfWKa5SEweVdJ856n7Huw",
  "key41": "4rd2hHHKmjgkPJwhxrxYe9DJXUL7f9JMwkP8krnKy3WoFuZ2yVkrsr8d6QPwqxmfGoGotQRnVyVRSasTYCL5n5cB"
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
