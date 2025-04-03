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
    "5QpuAkCaYum2QHwGNsDMcRMQwJVcBA6ncRBWsxqrSUb16SqdUndEWMvGBEVRVfUKDc52WiCPfdAGMNuPNC91u3Dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m8YHbQYzbwFWepnHK2zPL8viHVgKX3RJpWTkPoqBobSNARsh419YFLtiKthBbbk2Bkm46RPrFwgKYt59xxfTxJc",
  "key1": "3AE9E6XJEAWQrXwLQPcRBRZamxmsUSdz9pJSWuTtZrmq1WzUswVokFqVr2M3zqpC37H126Zx45uc97tqSgPiteJd",
  "key2": "4hBUCd5wqJiG1yLJbP8XnxBL7hDACUdP61hKLpQz6mLogrsCnaEVAAR6Y1BshF8FUqmnBJEeyx5cW9U1wgA3aztD",
  "key3": "7eYaRqENRLrmmaTa6uEiFuiu8gbM9cuEzQyrpSeZN4zjvbpifMSzisWovWkv9wzARoC9zKMeAvQMXFDd9qxcAVx",
  "key4": "55oShvCeCWYGfMHtcZVayrCM9SSCEEgN61EEXZg8guZEa8F9J8tZ49bb8fidKQNPXueSRwcr74BZCMSMyTKLdecj",
  "key5": "5a5Fc6JWPib2JHwFGvk7SkxbPj3EBsCiLRVtLzUcN9nLSbs3Jb89E7MVUQy82yotpNF13A2EqFocv1yKKoFyq8dd",
  "key6": "61dTi7psrEc4LiX5aTaGzwGQRcC4mxZeBUCUaDBwgd7pwrrEVJDdCp7gRTUQhYCGGtJ1ATaS6yybRKGKPFYwY6HE",
  "key7": "3VRAcuZpkKFKgbrY6JYmDjLQsSBynQnHg1eQfcihsFp6WHjkhiPLqfQ2BGXEjS77NErjhrhYVtD7SApcXcLiEAZ9",
  "key8": "SV3RbvN82c4DFcyuEd6xEJEQAYdmYXyASWBdQoMycHx6CgugonDsBXpW7JUAGRcBjL2Ea2ew7MEgXoNhMn9FTFK",
  "key9": "hp5CV3ze3Djr6qALxN7yN2VSy2ugbyuZt9gWyyQFtsFavJ8HKR4xE7YpwVfhpT7TzrM8gTH55UPDZM1uuiRtnDq",
  "key10": "3V93pcT2596Zjqmt7ZY6j7agoj9cYgkAHegoKHvTDM9dF5a9xZyHpbxpwrh7tnQV7Mv9XwvNNaw4PUfbGRaDprUh",
  "key11": "37SQ8hYBwdGjAKUvT4n8W3p3DmqQ1dRT5NVL3mGTK6r7BMTsaBFL3VXFeLs68KWw2J2UhaFa9xakU4o34ME51sAJ",
  "key12": "2eZPcR8sRfmW7JkwR6dfR3NyQ6dgSauo7mzrZhBu2Afi9dhRjc2Nyvq6upf9MFmEeNxnLWk3C8LjpbrihQHmxfVT",
  "key13": "5RNzTVfFYJDjffEW5iHWx7Z7ikzt1VkFbaC2ztdc6My4uC9UYmPJhYDVc9PsVewDViBoA2Ej2tpAyLBuPFXyAF5M",
  "key14": "31xZzdsewJMStoXV9e2SMENSq2vooWN3qtBP28zoSdWyxHP7pjUS3LPfKfn3rJ9dnaMp9MF3bCxSqvDPvgun3x6H",
  "key15": "2rGEqCYg8koUnYkSrE3f2y9UVbZpuJxynJH6BSiyred3F5T7FpXVcTXUuHRHSf5CkzUW7J6sFLmLae8oHzMF75pN",
  "key16": "4kgTiw33EXk5dQ8EWiWRBxpM3RXyJE3pphfT6GbmKPvw5rtA9BixAQT7stDhmYvm6b5g32Sc8C7LeoNwv7uvtbb4",
  "key17": "58xHozhBHsHhADacQhnPgvvqDH9YHtgFVJcAGZ5GdU529WmDAemSHVNBxswUFW32aDysZZnu9yfixZwA9atz4MJu",
  "key18": "4gb8My8ndRCXtoobTpD9VdZbt3aPbkRHgWuAGa3fhm5QcbC7ra1ivxtcJ9F8ftfXMwFKitz3F9sCPTDjVpdVTXQT",
  "key19": "129ySTJitpnDy4Pnwu1QMKCAiphhrzWzTVsUhdcf2Jqd9KM613F7cDdNmRKSumXR5NWJwWT9Frs7g4j8oAZZVV4R",
  "key20": "2vy7P8qCyHYhHtGCv2dBJsEPMUJGhJUN8sjWFqoG7zp55vMu4sFbRoVp5eYnk6FaLR2tQ9D8J6LFiRT1uHsVNM2w",
  "key21": "5JUbb2fhX8bSDNPGqCxGNK6JnUM4QGb4AJ24p5Vj2yxxFfhL5iPgneBpgwc94DW7Bo51TeQcy984xdiDQ7PsbYAC",
  "key22": "52M46tdZAyLGEbGNdsruDap1DhHtE7RDdpDF966rjhbDkZYFTGDsoUukeUxJ3QrJfsbvTnSwTDaa7SaLmCbdBBJu",
  "key23": "kWQXqogKJDUxHGBYgTsd6N3eVmwkDBpfjpukcFovUmhU2wSP4LGiv522rBjC9HyWcFNku6nU3nwT7caDB8XHt9X",
  "key24": "53Bk11nQZwipaNHvrf9pBpau9dZ4vnfLxnfTXMwViKnVYVamtJLkiEkzKxmNGDE9W3Qap7Fcmud6WVWWL2BNFPiR",
  "key25": "5jdeTXUedgGANtnbRZL5GUZ1eqVDhud7YCbA1mYx4h3D9uan9Ct9Yyhw4TF3HUPtKc3mVCMF7HnSNMEPcVzmriVM",
  "key26": "2aSZ9ycpsmQmuwwNe4Px1mtBZUXWzrhBfeNSVa7aZmRitw9VNUrFSLVbsHBgfsaXM3NecJSCfPhMvC1UDu8H7bNx",
  "key27": "kNfyVTjRM3CF2NRRY1os2gCWU6X2hanVmtEQv2jEMBoCJ3dUfMgTBXJPUP5JuYusHNqdMYM7dgLGCFwbPgmuzoc",
  "key28": "HGAhyzBTYP7Rdjr8QFd1VaAwkjy9uLZLBYgmfByEena3a9HszRHyJy2vkQzgF9kWZ4g63fJ2hjPtuftMbH26Csy",
  "key29": "2Tst6aneiSFpHiA9LThtuoMXJYg2hd8xHdLAStuvaPPCcYW1RgmCUMLtsGDhDqRKUcqsrm93oq1UQoKLK7wYBHTP",
  "key30": "4w8V9bbXY6EiJ3NpxGEZLDnXX4ooTUfkRVdUCawSVs6TfD8Pn8Gtgx61ubxvFJ99HaLWLy9oz5RANwN3moLAEpiN",
  "key31": "3yKaMJ7fga4bCT54pvzeQnzC9NEbKxKv9cADykXEC4uaUdEuzs7oM3bTEM2ZtFKsBCbQfavtQxVJzWecGnbKwN1o",
  "key32": "A4gTkNipmcxNxLj3cFhXoq3h45anSR3m1Dd3mgwGwnnQNUafQrzWzijfrwhX2A1M9nhAxz3G4rkQP2UAws3ZLo1",
  "key33": "5ovChY8KEM9txPtd6VX3XYLnMphJxxURFW7iTvyi6DQTXmLnRW49VZkVdoLcJ1PAkMMkabYcWmnP7ejTf9mBt5kE",
  "key34": "3zM8CKRR2H9vHPUH5hXJzKuZpek9v7Uj5EVHXmNuGFnJW6yezMDVsi3bx3FcQftNnPMDSA8FUgocdyYNjB4FRSin",
  "key35": "5HyDd8kMpb3ALBcpGhraqHBYA6czs8y3AphkmCrsot6StgQrcY3aqzsrbticWd7Fzdx2mfJ5Gn9xs5P6GwprAWuo",
  "key36": "3ULbZdwb5hTSc1SyviHxD9Y9pAynuHN6kiRWrEQtsGVv6FoAq3dhMixk1kh7ccg3b1j1xcfsZbctaxwzyJD7EeTW",
  "key37": "3Kgv8voJsgqC7V5h7CkCuszyArvVmFb4FuDTykftLYcFkeAQkZLate47w6kr7sxbBm6cSBMiDyxBdqtsVbLumFbA",
  "key38": "2BpjCDszCRFNZa6Wx8fwFEqprtANsibZZ9NZesvn4pq59Cw2Myvq82tnyqeoSgKqY5Voq9YTdFSMcdbNtjLeXVaJ",
  "key39": "2Sgqt1HkUinLHUFSnevAxWxHxpSyf1nTDobB2BKF1afw7DXhB1ZWMJABYBWgW4iqm5ewAQNYPwwtX5y3WoF6RgY1",
  "key40": "4BDKTbGiH2cp39jLE7rZx3sGvaJjKDNco6wyr869QxDfqeoQDvD4M1ApXhGut4FggCpUZpejzdf3zD9KJLZrwBd2",
  "key41": "2GFdG46RqRA51j9gcquMGEKqqr5VtotmLR1ua8N2MsBRPXcpxvqAabrtgWapVZ7JNARyWEyKfY9y3QWRJM7u8v9d",
  "key42": "4oTYf5MqYrQDCJXDMiXS8Mh1dLVQcUUVfwxe9SkKxw77sb7kFLXZQb1KpqrLmBZYsbP5KC67eqM5hS2P6ADdZwnB",
  "key43": "2PCMzKJYaKtTAsQpmQQ4UB46KLJVxMUQsexhNdxUAGzhA1G4yFWdGZafRUMf41sFirJ2N9gdhp1mwQBUkEUeYEPj",
  "key44": "5wHNwCG5aL1jEoaMczfeKNaGiQASFg95T5C3fxDx1PWwTay3Wee1t8oNQjdEVotVcQ5JtmJDNJw7pa2MYL4pN265",
  "key45": "5XhiwJAosChZRn9RhozPMJdZ3UDKRejQBSQHzcjEKB74zfMDTZyP19x78o1yiN8jkd2bwDdMDv2Wmgk4pbHrExS6",
  "key46": "21wMQ8cyqBvNYaCXP4tX7WcVPsvyTHoSFo8CSDbSQKAtzuaUjJWjwuYxTnDYnopm8xNj5L97fD42FsgX4r8aazgZ",
  "key47": "39H6etNBqwpS83T96yBSKZVZYbhWifW7gxWQYNjfw9gGsBkfeHgb27tgBCue5gAZ15tYUE9zkZ1XsAw7owERbCft"
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
