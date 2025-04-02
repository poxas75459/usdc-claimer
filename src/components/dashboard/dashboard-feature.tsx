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
    "2Q7dU8X4wQ7N88PAm8PDnFpsYD1WZuFbGG45DPhoKXj3a6xqd5yu3ohtvyBst4mLcc5d3RR9ZMLddaVQPRTtaS2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kWAGGfytZv9hUxfnQfhhytp64opaKbkZAiLfn2xPx5FrCJiVUeMsUnXZ3A3CNHYhK9F8For13pkasmtDuH8szp1",
  "key1": "5dmo13qzKRHqBU54xM2G8biSZ2AxP6nm3NrH1d88XGXAwfHBjj9LUWavqdAmCJcyAMBXHh7LPDzmyRdXSHx1y176",
  "key2": "3X6uFAqgF2kWEMiSomV6Dwr1rXtxU59G7WXkQMtwbwZ2ypLdZqd6sPao47WBZAnbdUGcmGndhk19jXfZWHEQg6w8",
  "key3": "4wqEejruefZ36h1L52Cy2XUBbgs8KHoVVXjPVAQQTupr3gnoCgfjhAhfocf4vagnTf2sHBsFs7oeY5vVXfiyTjhR",
  "key4": "5dWajsLQDnctrbNADG169qTQWAEVWcV6DR93gD7bzBi5LfgZnVponkJoiML892QWw1c23kJvgyVZkkxLccc2zJtL",
  "key5": "5ankiQqz2JDKxfBFSNQggwZXRnVaLuWFdc5HHsLXxFaHBSCWyx1AV4pWz8StyNGHpXTPWoCf6B4vogSQ8sGh6dMj",
  "key6": "24op84pExEX6HmVVFe8pfu878yebagr22M95PqvBCDWUCXBUdnWJvh1JKh57AshKCaNnNWJxi7tiK2d6bfYMCx9r",
  "key7": "ufLSB5tZTadAaCoTvSWt86MVDHn2vM6PtAKM8kjxgTQFCJ6aScupPYgKgivRTMFExQC18Jup47xbz8tK8YRBrp6",
  "key8": "26axFaLhT28j8PbRNzB3Wgw7rfWd7JHFrQJ4PjodvTDnrALcdecJEFgezjSJ9PN1UCXuv8gwt8vm3T1f9UrDTAmd",
  "key9": "265g6HbUXuPGZ3EQTiVBhZepSbSr3NBQH3iamaTLZ9DmnthkfF8pn6SpNK2GZ3Vs9BFJ1s2yaQFbeP9ehTvjmTnt",
  "key10": "5LQ4PmW8MvqrdFoPkKvvqHqVdm4WNuyFJ9zpqpSuoVbjAv9bwY2UMYeeJF223mQfat13httLABaEGnSK1owWT3to",
  "key11": "4UkvVZvh1A4e8Uut5WzQVqfnGbJdWdab9L2dqrEP22qDnL4HFgjR9BJVzYM4EaeXaDSbYq6o9JNrTwKsNHWFgJMP",
  "key12": "4EzZygh4vYvMocx59xza6JPMjrPTHFTUDx1vLim2HsyHyx8HnmS2u4LLvTiaWFyKxdJ1S7yifJtvQEQcKZYCp5xX",
  "key13": "Lxv2DUE5nha1Yv3XS3a9wAdBUeZKpSX3HvkG54Ugx7f3dYEqoq6jutzf5GHKtEoSW3WwKenXVYG1SE9BCoEEe62",
  "key14": "4LWctRwwNLFqJgsyjWHsC7DxGyaPPaNqJmkSQZdHKCf7P1tSn4jvobtqaGz5pvH5MHxqsqUaURLQmJnoY53LDUSv",
  "key15": "5HVTg4HiLohrr9sArspLcYQmyGF46ks4WfFnmsMyTTxPt83hwWe85a5QuBtiA7XCkVVXn2TDses8c4gwGsSPvijh",
  "key16": "3JhYWxtmxZ918T4PQDBkTnKmwYoEVsj6V6ABdk1NoCJ5TJKHyqBav7gaE2pQ5UsGpUWnoNszrqQhvFt5QqT2T4P4",
  "key17": "4DNqYixd9mbKRMcvzr7KgW8ayAgDoQpnEN9wVMNXoz7WzJCMUxPfUPCE4UvyxqFEG6UzAP4PdF8we8tZHTd5a9rP",
  "key18": "ZekGw7ktz38x4SiA3uNfwhPjo6T7RJctaNvTPjTU9g29m5pJib575dKNvUJj776tjLU7pWpVaUa14eoFqnvUTom",
  "key19": "4eC8fKvSZEBmN3nZSRWaxRTfpxbn2SSXoRBWLvLJ1C6Jq2b3CQRDchSuNEFxGmRp8Dyb95nSCa3RkVf92Fk9CnXQ",
  "key20": "5yzhFqMG3ieft2WEPDkdfBCCd7d1RfAV4HqB8XFjpyAUkfc7zrf3ZJf4PfJmQDBziaMRNyriufvcS5PFEWwMUgBP",
  "key21": "3xBQY8wFjK692MrH9FoVPRbyAz1xWyWYX5gXaM23zZc1nRsTW7vfYTRvt93eH29iJKmyCWmrUVph4ssDKyZ6r6NG",
  "key22": "2NRPgyCEek46vrP2jTB955GYB3r3GUqyb9kKmZhxiHJ6RcQHKtDBVMsG8XNiPC6gnjkqPzMCvbcQbKZy8PvtUekp",
  "key23": "fcD2f56yyQ2vypPUJ5Yy4EkFG1mMsDC1AKpWFnVBL7ecPess3YRovWf2npsYDsRQ2EN3nNMetjDPAycP6vpVRW8",
  "key24": "4bZir9eZ3tpb8UZEkbk4tV88d1iZTXuKdFeaErXuvpYpY5tironrCVSkfvJFr7fZzL2P9cJpJJFVUCcHiYWpkEbk",
  "key25": "n7zJpwbp2PKYRan29AdpwS5yABSKQVw29Gf1jZvD2D13nMfb4vYBuR1bWEBew4UXsbURNec1SMSX22atGAk4J4G",
  "key26": "2xJ9JkHzNex6v5GcczCaLkk4rLXAVqU9a6Zin5vMZG1JHVZJHFcqeTNk3a6iqUg9ck6xUVZ6nvTSvgNqWgvyFKqS",
  "key27": "2tzRdJ8P25GnjRgH4iD7qkMhoUeUiQpnvgtPGMtSHG1nk4sZXfXmXy4vdA5exFH1hPtL6LcraivmM1bQKxDSx9J3",
  "key28": "4VUSC2KdHtG3NjXoeFaAGQvMpDEwxBp7p234E9Sf6jWtDapRMvxGpz8MaXcHdujVPs82WR7qewCbK1DLQwfWaGqP",
  "key29": "3fsZ8CHvWKZegKupd78MSAVkxSxk2wNhVxSVda9z6Q31vvTW8qsULZFaJy1xadsJDb4mpsVUeW2ZPjHtTVjfdoKy",
  "key30": "2a934m9KvkHHgDYKDyToz7kKXf4rVcLJHXb4jNbVjjYjoLCUt68paP5kCPcTZoK3UK7KyuWS82YZUsXAD66AKPXo",
  "key31": "33XGoshJTb1rvRATW8GmNyNZaZnHKiozdWXgd9d2H2ayZgCDJD4k8Zss8td2ntrvy7gWdP3BBLdpvjywCEp1ZFQj",
  "key32": "2BpsgjY5Gegu9RR9kVrs12ccYr1qfR2M9vdyyn8brUy36v3iifnb5Nbxw2kZzUAcBBXEP6eb482tbSWZnxDqBVQG",
  "key33": "4B5nevhj6PxJ3wNQT3HWbp1GTs5HkwUe9XMmWQuZkuMyXsJB66aaML2wbrxSbginJsEtpoC6cbJZ35EC9f1mQD6e",
  "key34": "2xjA9kmJRNAbvt75XmWDxLe7zsVtbubLKG9fQhGuigKmz1Z79c1AVWgeJfQeaUF7ez5E8G5Ev6pqnoJARkEjndRX",
  "key35": "4N7oyXTKkQCsvRemoX977ar51xjSwKtW7QVaHSQXMsgjwYAsnNgsyLHPLv1hnDesaK39kfKZ9aziqMuegB44ADDw",
  "key36": "29zNGtsmYkFYkcX3Qt6zReFwP3vKssXv6FEEBBxf7nViSqaeveM7wQcKgpcxgqeF84bNdUnQZbTXdSKBm8sAbR2P",
  "key37": "5sDptr67HD3YPK9bYNPoKFCjvjr2dJbJfJbkDQDf84tt5GGumSrtvmbWD86QZeS8ZjsMoMszdWE3kwAJAoteYnr8",
  "key38": "3eehpVfoL7Lc3MvMXP5B7Ecj1y3r1Cx37L7rGyZp61txtFgxjy2aoZpsUFsuwgVGLS99mHdQ641RhzdjvSSTZGvS"
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
