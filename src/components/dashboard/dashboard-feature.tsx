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
    "4wNaNN9V62MFeYgLANGpqWGm9WJ7PJVaPNuXFaJ3zLUwwaXSZCrugAampgzxqbGe7HUWU1LbZXVnb9Y9nmFSLxsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vCGneoyMY67XcSczMSvDcqPnMwXu4fbyFFVAjwY6G7vWFZzZn84XdU4oNqqawzz1TbcF8LTNQBh7F65HYWjvRsK",
  "key1": "4CyG2KmVSpQpnt89TfEe8Byf3mseyAERmwYACdSC5CmYt5n185ct1w2QGv5Kczve7dUdes48vtmxq8grEg5MRJhd",
  "key2": "343hxZvGPb3CXgjmPRZ1szUbNiG3p3WU8o1PPTAugoRvquXaWkSm98ahd6hNW4b7F24M9VDB9NJzfKUpdvVVdoKy",
  "key3": "5NPkx88SNpHYdBVzgByknV8hXQtFRoKXgUpzkRneU8buU1mqw7f5TgejpoXLAM7UTzLnJFcD1Xr7y4xkqeb5yjYx",
  "key4": "2bNEHfmmGxgdE4c2rat6KUg1zFkNPY9CWXcxbmvCJ811tz7ifLHm53iL4H7mLrfK1Ab2K5x1eSbuPRPxt6ANLLYd",
  "key5": "T88aGSwDB5qaHwA7qkpFMd1sxmQtTzhiVSnV2pdR1dFusrtfMAsCiWCbSnWn392QJ2fCg7zPdRk5QdacHKMXKdE",
  "key6": "4nTq5XLBF8kzzM3KNCxDeu9GPknmDJDcsbf1CYLBQBPYNttC7J4KbcW4LxqaJhgrb8ftXuQSwY15tnC2jiGEPL9H",
  "key7": "2dB9K17aTZKRrJJ3uFBJuc7p7cvMVW7GKxq8ALHtgJw2Fe2pLqksJTRmTCeXUZKYgnCXHJbf9dgi9M6DVz1XgUS6",
  "key8": "3scqdHacrTBQqXbeDC83dghQfKCyQeqZUbg8tUPCxQYcfwhiBpHtubHuEvxseApYL7emjGXwhAkBmsHcxVYawxSF",
  "key9": "2NNm7yUaiPz8KYbLXfSqkaxYThLeUax7Uv5mGKHfDRQ6t7rGAWVDjudH9b5vi4fYnGar1HEKTXxnGRqmdwMaCnos",
  "key10": "4dxaCkbvNvUqJrHs19VPppLnTKsa4C9fxVWAkTg5YmaqTMNmJugNH9mtb9QCgiXKU5sjtBpPqMcixq1iYtnQaHRQ",
  "key11": "5CqQ86gVpkvhcd3B4WBYy5jK8fCq7o4bZM1XX4Ax5uBo24nde4C9vte44Xkvd8NQZDKzkz5LkUnn5MoB8o86VaXM",
  "key12": "2Bbzoo3NuvuCeZc19RsL6wjoHCG5kobgc39buTZHYJVPcszEut1FrXH3YaiUJCrBo6koRxv5HR5kn9ad1myN5qMH",
  "key13": "3j2CA6PaZTMbruc6WUTtUAkBib3LNJ4vxz9rcPmTQEMGc8NXRDTtFTmFRjmryKDcxwvDyod1HzFkdG3WhszztBCw",
  "key14": "3CDz48dm47kY4iEeTgUrpsMNfxV1dwEfdN9HYbz8mYzLZFXwyqTNRVaMGLkodS8uk1dybNyJYU1ZVGFVnNVzeayj",
  "key15": "4xgMv7n9ZFe4VefHfzw1VpDr4QSPkMR99rwJ5cy4DtB1QPgRHpeKB4toXBqAn6uY9qyrXbJV8kzPRBPXPnzLkgvz",
  "key16": "2rWeZ2nzMDbL9RcBnZHgQjipwwhxGtdJtLHrHb3RcRjRmcAhMFRdUjHtHe7Mn2Ps7uv85JiLJ9hGjYxMNtx9kFjU",
  "key17": "eU97QDHht2xfezgFserSDvQRLBdQZdYJFsJRh3qoytGVUYkDndjMAGSeH46LjvuWJLHbzvJEvrwxJ676T6iQLEd",
  "key18": "2agjC5ScYKCvaRCLPG639kJCnsvkb5LXFZhkrTQuJbowZkcZDiP93Xrfj45v41FHHqvu2Jozr9d6oRJdq7gAsBfT",
  "key19": "5DBXCUE3A2xVD9r6N88yfTUzR39EixxqoNLhYWKfNVKWjVGBGmkcYon5YR7tEdhx7EAf3Jb7uuMqXJ1JTh91jsCM",
  "key20": "GgDfWQYHCGcdNaaSpp3MNR4KrXvuzhZJ78fwx8ALR6SWwL9xwMzCLECf74Ke1ANGkmDtDm2xXQwwt7LUzWMhSKv",
  "key21": "3YBu6AuW54d4gXJg62C95JaR1BsLWqH9V4fRyAkUzJ3amhny64bbTPCqAAbDNEhAinFkZ9WzetUHY7uzJ1UcsCsS",
  "key22": "5VfX2wDzVVCYc1VjajX2Kii9r23prGY5HA8pTKabtch19gc6Gbfu4h2g8FudxaHCn1DcA6FRvMGCgqoMiLF4fLPY",
  "key23": "54d1y2EdWY8iv5xzXhCbzQYnr6cguE8ZSFWUxxMYSYWifZSUYmX2tgW1bbGcNVKrBqFLbnmqoJCf9TEoKicqccEH",
  "key24": "2iG8NjoH7obAeeQCV76V4Vrxp9DXdHWZaZSWyRk4ZM6dgXFscyZEeNpfp5TdEAYos56XKSSSEq2bCwap2wnKMkXu",
  "key25": "3TdqkkP3bgJjct6PLcXVpLQnk2A61JNs9cXboEpokBh9vPiuUXWyKXRxY5Aj2NnSKLxJ2MReFcUCDCwBLgNiAgGm",
  "key26": "Nx27Jzea9qv2jJqFqP8bv5qvmcpLqryEe4PF85X8CAFYTcDyWT7Lgr1chWpWbFp7D6LSBkPA8DBxvh8jg4WEbsG",
  "key27": "5JPrB55cE3fLJfhrkKdYGHB4EqgeBFe6zciaD3gMrS4WfnpXqYYUsaVxdbTDc9vWHC7CumsuQn2Q5K6jxvjeMpYM",
  "key28": "3o9HodFb7fD95Drt6ytb6y1699CcMH69Yes7xpcobwxBjPyCRx7kgq4qW4Q93ywz8nsZzQp1ypGQmKtTE9N9TqnP",
  "key29": "4NAddJ4W3Le68ZG9t97WJfVp6PX3npcaqjFayRqgygDXdB9hhm1Ke4SWDozgj7PPru3ttowcEUjguv1f6ftnsUxN",
  "key30": "SaNVbhC4ZE2FP6KjAEhtKm8WoS3kqjpK4tcyQvBwVbbkkLvaLepRNYivQFPrqnCaDGcLUriB9XQdvr9a9zibxdx",
  "key31": "5PJKnntPWQJ9rp4TbjsLytXEfy5ZMjjtPeEqDDKuR8M2YochxVTHuH6rskb44yn4dZpicqyHmn2Gq8cNuz9baPJn",
  "key32": "5QDpY7MedfpBeQ9gnW9aqtgHXWiNmfUT8m34iFzriwLgMKaCUCV9cxZ9CNCXUy1f87FLRvdJtXCiJY6BSwHzWJxa",
  "key33": "E6LNAi7xXauYjU7MtRxmjyDr2iMUXnMp2GEkkpGhGmmGwMP7r53VivE7HiqhHU8bnDbRZZc62uXC6hQdTncQHSD",
  "key34": "5Yb4N9ZnkRkzQ6zKoox7bRVjgsqNpG3sJthvsDqtmErBvf6UCaNFSXJMBP6oCGaVkE17A8De6LoeirFuuWMuZ3UV",
  "key35": "sqeBYpjbLS9Py2kEzMLKGTvyTsMzMQcCUf4xx67Sw9DcknAzhsrEdhfZx5a7oYn7cC21T58eYDuZnsXHwiqHSNu",
  "key36": "2BimFuJruLa1vMNpzWjiUCkodVUdiapf4o2QyguAw47jEsyGEWTGgMKcHaGK9Y8kiBDACwDetfFHYqfqjtBWnd6C",
  "key37": "3cstxmTGMxQ5uke2t7cd6edQeWZNHqMfMpBF6Z45ajLBQt567XjmGs88DGWQbN3aBgWMPiBtaxkr69mM4Kk5oBRh",
  "key38": "JPKxfPKPvbQz8XGzBcmas5yUiYiQzrpjY65Y6bXDYEPDp9rapXPRBFK8pPMdTSKbwsFfbnYWjK6XSkppc1RQrac",
  "key39": "RNb59ztTHJUS33kB1ojcK1ASj79TFrT2xdQBYadsWtfKrzK6UFs3xmtCnszo1jtmHqyXyw3hbfyHZm6VB79j3ds"
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
