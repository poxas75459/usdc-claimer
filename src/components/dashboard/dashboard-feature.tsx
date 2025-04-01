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
    "spycvikP8C4LmPk8UEqeUmPszpi6AxwdSVEeeuPnPcC5x8HcB1jM4U2ACLv2YuYJiHWErpvkqHti5PA2iiKZw9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dygjdeN9vkyrevFx2TAcqLgqxTxtTLDNg8PBibDbzjgZ6FdBp6qyeo8o6vnHJYWS4euFfEkmH4TLskbBA78ybeR",
  "key1": "5HSnBqFtxzvPYAHc2u2MuCfDP7KGJbvEM1cwnJW6rb9f829xEY4dAH5q3TpUjYeNbERBbDBydc4QqGKBL3VQRn3Y",
  "key2": "3AX14SpEs4kpHDM7vq7Vcs39Ra1j5A6bUV36PVFT3chk2URF4JVyCZUprTrSZvZKjKcY5w91M9aqAwyYE6jn791D",
  "key3": "4f1vjqSkjAA9RmtQW9fSKhUa4sKUjnUX1xN574gk85ZQtddB4J9aPAckCbt4E98zmtrnPbdiTyYVwDnCFYCMcP5f",
  "key4": "3LbWJUdK3oZ6kig7aaFfrcvpMhbGrDWmKFYBdHQtK11JBV1nYVvwdSFDgPQyybpDTjPNVq6uEw7y8zerJUWPjmqM",
  "key5": "2JgTFwBSB5ksSj1QwtKYZzXy4bk6PeFGuCXHZjs4K9i2CiGP1x7GCA8Gidtg4soGnmsh5hjTjYsnXVYPUbB234vd",
  "key6": "4QhmGscqiZg5dXqTT3SxZ4MhWwg5cfZdV4dwB68LfM2CKAzyHhocd1mbKizsTxC5HLcScRDCsFi2BDnx3G6MADAV",
  "key7": "X6QQCW8mxP1UmGSCuGuA4Jm4kUXF2YdnHPXY5XbCZcTgo4G6s4ArtcBZGeipn3Bi6d1SXkLJh9CqLVusfv2DfmC",
  "key8": "5xfPdcSY1o89KS6xyoGtzWKe19S5iCeK8sRkQKUBJqHewyPiCqLmmF2Qn2SdMZaWTGH19yavBhJBqxqR4CcACrVg",
  "key9": "5MakgJeZhjTC1nc1caucZo1V8RtiFRoxFiQf3SB7rvKWhwKYk9KtHUtdhctahgwWguzRpg3sr4zUGTBFChcSkJw2",
  "key10": "2w1vxgzsLgdpBreuZKkd3gSHN23YdNfqSi85VG4htGPwKmUgk81Rrd7WCdNFkpUAjHF8znEAJbT4TY8dNNfWkuhh",
  "key11": "582wrAoVJjv3f9NpGdk3yaB5aS3J7KfrUR8qojmuyJ2DNfUEqpcxzhx3UNfTiaa3LYs9gFBLF5pCjSjhfRmD5zyo",
  "key12": "5YTeh97E6gY86p3bLHtPuk6HWEqhFbkAGnKVcwvdQ1M7eZSFpCWygoMYXUKFnnQkhC3ExpnKGJK1tHjW7KPKrPQB",
  "key13": "5TJmZHTskGUjjPmH8eVs8HBvsmykQJ3YgTujTjw8PnBaz93hZSLbD1Ka9z4W7oQujhKGUx9HEACGZJrw3CZwAgQy",
  "key14": "jSWctkrFwB9AvQQXTD3xAzJJyG9nxmVU8TYqmVioEAZkodLHjcvEsfu3rbJoJr9nkS1Z8jyBWuPSfuJyCg8JA32",
  "key15": "xaxKtPei7TE7vDHBJPdGFWr7ZBi38E2N8Z332UCRPU9dcvKys2iR1AzH7V82GeV8W7gyGkNXEwbckg7cj3XVpGo",
  "key16": "2BZ6ehqiWLouQmc6LsDSSbc2ETPULgqjSxGZAVNKScTzobGh3YmNRDmVVkRXEJQYnQiZYerHLCYGCQ5DXhGFfdyN",
  "key17": "3xVUxYzWJpHAmmc1yX5fSr3DsvYU3VJTkcjpAFCvkPzg7FFdqUir5vYmrd95fY3mMvu1gEi2pZC2Gw8iuXVghe3W",
  "key18": "5ahzCw3GiSehsUCEkGeXf8CuAro4AYpBpb9rwmEKNNpNoLdqXbLkWhHniSgb9UhhMZTsu5jubWTC7WtcNATDzVY7",
  "key19": "3D7GAWX6HdBHdczpbC83Jcc7mpHyZF4zPpM3M4VNsS66Wsfs2d2rmGLdPq6YukrzJYzFfzCJeew8TCrfL8L1ztkz",
  "key20": "2zvP6NgqwFafy51sySuQgXfhnjokoNbBeADgCv7ksJrw6HB7jWQ4Lz43rKpb36VcnQg3viw5AVxvtMBimB3CNjpW",
  "key21": "5UwwijqGtX6s4hqKwYXRss5RKgRGEVAbyL3B3G2DdyqdLyxEmKF4MohgqnudxksZo5ypJ8NUUYAn4XjAu47bNdBV",
  "key22": "3dpjBn53ELcCtPwDo7woNG2YFWQNoA3g9HbLeaMSEA87UZ7o8wEhR3PKYTvE95yncSMLnLe3x5ngGCWCbKhRNFWJ",
  "key23": "yzFo23bsEfAHKpdEQpxSUdxKNWLAnxFgJG2NhmrYBgkGgmWNf58mnmZycAeKpa8hhMwigz5wkpYRaBSL97UbkRW",
  "key24": "2AK9rpsRaXtM5SXV94qnSjenTPmcUi9GKgMdqde9vR381pTkRWbgXQkPMboNeFL1yCxuLdjkuNzP1iNkM14nvhJa",
  "key25": "2ZPH1gSB4mhLa1JbxcCSKhfcCspCZzTdtQKjJ9nsnqrSYPNkj5muA1jKpxz4GUJNuaekL1SAwRcfidd6tPKvABAE",
  "key26": "tzvbyZ2GGCXbAh5RCTS5envYTEU2c8DFNHPqd5CLBUJCVqL8sxjkUXVKDj4kDH5whNmcq1nHN1kzQ7QdrroJdN5",
  "key27": "2NkZevGbjkUhCfvp7wxedoKUwiQEr9932xEbq2XeZKVsCyiipp54DuR5gvdUyv3vaUctLsJBc6bmCUaefJJ4PiTY",
  "key28": "5vGBreYzgeoQkvxG2w8yxNq1AakG8aSEBkR7tzadT2me7E24qFEfdN4eb3zKMx6La8whV3X3yDRZwSMZLfqgGF8o",
  "key29": "6451MBFivVJMVLp7smq7hji6WQhQTPHZuWgxrBrufDdF3Ern4LZtm93uUj9gA5StXtRzpe7RHziyZ3KSZStTbMiA",
  "key30": "MYqUmGAd2eD8fDKRcQCW1WF3aWKJRbwknf55N7dM9FsHXNHD5JAmeL9eRe5oCXBiSxsqL3yhLaVua3tEPQt53jy",
  "key31": "35cUs9jyS7DDxuAkSzKUK85o4h8ZjVGEkEdCMtKLkfDaPepMcRgLFtkAuWbJEWnSA58oewq7dRoed3iUVRTwX4K7",
  "key32": "2gpPSnHRba3bx7Eyg48j6iTTKE4YyAFvAGa4Bo2qnqa64uYwKj9cnHrCkJcZLHPSeoivgNgWR3FX1FCCMYnnoFKQ",
  "key33": "2qUdHDbad5R4asxDXjDwsfNMFTnsFiKrqX5ZbgYUezBtoMjn8wNExhDmBX6GqkgAAUoU4MFvmqEuW8BvQzRpBYpJ",
  "key34": "2e9npt8vJ6AK2avYUK8Js51a7VF9i6Ayw19381HLwnbR3qHTmEiqgoWhg1T3CGLbnbTW8JCUgy6Qcdwj8oeXsMX9",
  "key35": "3ouGkfYFyyT4Cg9krFwxLteEH1oRbFFu1hB4vp2o6x6CfAu1arqDSzzit5wqAtBNuz7ZWLR1HSnMKWy1oKLe9Qdx",
  "key36": "4rGuATYBkpXoAqnFf6tgoAShqJCKPfrdW9m5FLq7q4iPSRFAp78qEhrWm5trCdVovFPx58QC6kxuk9zHLLhZT9ah",
  "key37": "2TbU5t5eYSSGpK7j921YvkZkmpUSc8qwKDGn7RTTogEucrYygyukf4GajuShCGdB66uwFdKHQ3biuuW8hsmtZUD7",
  "key38": "3rREHsjtNfBofxEQLiBJ3B5CHaCgp7JLto9FWkLo91oTeXhHZu14z36hFgKJs9q35ydW6nRiKFhFwszSSsAdDBXH",
  "key39": "2t75Pf3audHLxLimLrPhjyiwpk5gAXyC8DgrMhhsa27CJcopgvvmjZbDJ7hSjSUg6NCQwDR6haBhUDitnRtuDURx",
  "key40": "4B6p1TnGzskkvLtQECGLzGfXnAApPptUFW2FtWkaBBLPghYc1e2svs8eywgEwpo68naCc64RueU37DLmQ9bsK88t",
  "key41": "3AWSxz89NRz9nGGYjPe5d6Jke2hKcYNbuTuQtYEUX5abD9RdXekVM5FGMAPkXSNVxMTUyRSxGV37NtVjaqhVkQ1R",
  "key42": "4BswvGesCvw13gF9ARkyipScKPFrXut1NzQ7qQCCNYh21r5mJadxVbXfioS857fKfHFp94D4w6z3Kw9eFDcGKZmf",
  "key43": "5pw83gvA5m8EXLDxfufFjB1MLt788BFCQD5WQuVPSHWvnKZb9MHSdoeUQPd2cNZf3A4Z8dvSHVvxdVuKsbmBiPcw",
  "key44": "3Lk3smxbHiNbfTZhgvtAQKiBv7q7htr4MSGxbjcan15Bx2ibyArFBLTVQAZjFAr1mCwWSZss6TK5gK7J7aH6XE6L",
  "key45": "qVH4mKhWGFdAySrYqp1EASEx2u2fcpCHn9cwrvcHRL6bwYWhj9hYL42rv2qTpGvZFnidDyFoPpeJjCy7xwj85bM"
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
