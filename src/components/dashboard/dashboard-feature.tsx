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
    "4fXSh2AtzoztxoqRhDjNp91efacZSoMytDmp2TPDpKRqmxz8LcVEusrfcCRH5wRZyp2wRwYbrLUpywdQ4WbJQQGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r4rUGMaGUbXJcmEV1Rwp14um6oKvM37ppn5RF7eAXm7hJ8bUPeMjN8mjunr8X7KBvDz4S1ufEeNsKBPEaHBa5qr",
  "key1": "5S8WmwgDL9SZENW5Jeq8R5Lb8k4ANCi1JaemCxxsZoknTaNEGX5upwVBQWgFM2ahyLw2uc8ea9NSHAY1aU2TrvX5",
  "key2": "3uEEzQ2Zh3dhAGNdpHY2wAK8nLQvSrY11tXKXM9n1EJPtuUkzdd8Z92v61afykb5fSkVKBzVYHfzNRksLsp4kXWe",
  "key3": "2XxJxK2SzM7M6eGeo8A2WhdDRJrYTc9FqpLujt39tJoNg4D6y7VDzHMXicaqkACwmbLkww4DfXcHymWA8mBLRbjt",
  "key4": "4LTGbcp1ZsK3D4369aVT57zSC21hPcz9odU4NqZUjXaRnGJ1raDWNBZzLuVZZmFDa9ishqUxZZkRLCJGpY95APEu",
  "key5": "3ERLvpu1tiPuP5h9Hqoj1otCKha7ugm2duvweAzc1ZD8PjqmbAJzn2bQRmPozLHM63q6NdhF5dRNJPTtvWu3HnZa",
  "key6": "Gf57ZcPfAEs2rqPDWJY76DfHoZMS6eq7qba18HJ6RajC2gXF7eqMSfN1rCSVoY5KKBKk5extkWvbW7m9LJqxiMt",
  "key7": "2eHNyT7Hv5XE3mziTRK8JkFXnc5gz3VPq3YF7z6vJf571hfocE58iyJLVwzaXY4d7EZpdHWRxk7CtPX62bzZ4Vku",
  "key8": "2ggyX2r1HjxGqiwhS1ywNZEWWUajBEyyJWJqjdHojY27KDJHNBoZXkN9MhdrUN7aRe8jPCQNLoVqL1T6jZ3r6Fcy",
  "key9": "3PDGoMTcvd5weBPhpVPR4udc1BNu9F58XKWpcU4BEKrRR98En2DgNc7VeLRYoFZyB9nW4edZgJ2orpGxdJLTMj4s",
  "key10": "4vDHi3gxJF7CwbwxHk3D1E7wi84G5jmgEJ3SXZ6yDY47Bt9FNK4hpzxPoDmGzgWb5Svf15uguMtvrMCT29ZXJMG2",
  "key11": "63PZ3BdLjQSUrDyXJzaNZQ7P3etAk2h78eoQdB6XqfDNseqhM6wawQQSEoDrRVkX8R6ekJcsDCj95Pxazqd3JwjH",
  "key12": "3gP9U7o2spGbZoPsnjhHcJBG5koKkGGkBNcE2XhtoWGXBBAHMLgBWuoDPSoDDTrKNNuYNu5oLrjiPrd6Nr5LbfUf",
  "key13": "33BFpsQd1efaYem1nMwUgArXpPCeAZkbzvCayChZzF4grrWxTCRvoH4nntg1NoKtAErz6UYSMwpxfzcFMF6SdHat",
  "key14": "5BRZ3rm251ezzsHfcTH9njKtaVrVG1DV8ztbA3SQqfCU5jfT1Qk5QvrTkcgk9yBkajKs81JPSein23W2C7v9w3Nb",
  "key15": "3ioA6xX45sgLHeDirmv2v3a8QJMDvPYYLpK7wmphuJHKs77rTgSVLAmD9Q62hvPU8nt8xEv43RZzqud1JHact1LW",
  "key16": "5gcobnopygvvEZV2P3YUWhuRcds4LYdU86fLinLatULKabCh85Cbr3cVzYtdgpSPy1BqkkK5AtpahB2cF59yzbEL",
  "key17": "4Kd2NB7gsgUpcyWdpWzKa8GExrQEHHnxjgYjyDjFKsKVpAzzBHnPLF8vZt1mJoSShfPBywFxQGBsHPWTXV1tdqZW",
  "key18": "3GQTSwT1xhx7iMmEweJGkioGwh3k1Ro7aFxrp8imSBecDAmoi8jmNHuQmt5hyJ7VqaU8s3mVpVP4cd67TuFYYAUf",
  "key19": "4UhQ5ra22M6Ld5AauCo9AyAJjrP6ZBDVXAuo2mQwAu8t1UDqiRmgtacjScdEXodbwMTnKwo4ZgZzC525TtNVVoNC",
  "key20": "5E6zyEswxWU3B2oeiCbTzY25Ff5vi6oxwNNzfmdjLqmkcJiBuWJnxAFa1oF8PLG7n5T1vh3YbtbfyymLWMHs1akR",
  "key21": "2BwGBWVhFDdxCmZhjTSuuwE4MuFLgMhPCWaTPHeRHJ3ftxjfYKrVgvPybusiiCwGjZNuEMawBGnJhFH1C3Qe8KHJ",
  "key22": "2V1wrAjePkZawWmPEe1xMZdDRtPn6tksAxLAFtPka5AWJYh1AjXop8tdwToPuTz2cyaAZk9RUMUs35P2np5NrA3V",
  "key23": "EQngAKQTAajRnDQoDdv9EpzhH1nfyJenwxjUJSDnPMKVKFC3hhWJZnG2WKYyk5M2aWYBBtupPgeR5Me9rDHHXo8",
  "key24": "2QfMka2ijHLKTdvSDftyhxQSdZFEwiE8WiJth8Rifhbm9XRsxYfUx4zZ7LmE6XWXjT182VNkADJoaQDMA7j7fHND",
  "key25": "5pmQgSWKkNPKynyB8PDKEq8q6jbHGYzhydmUjZaxCJHq7XuRbHxNXLKr7XqLs33b6hnf6b2kjFJSHtsg95h2TGNr",
  "key26": "36DNtXirAXrYPFWHdRDDEzEixfzBDxhED8u32Z7ZHRN93NVzv9apZwF8x1XSYvGTyoqscYuHxZYErqSGWmTYAFGF",
  "key27": "2BvGaNQXDpEa8bEgjydnZNszpnTxnAVKPgXukzR1gcoaDPbpzhcNHNS7oGs4Shqxo8Rvoev4fCAYWwomDL3pevVW",
  "key28": "2BmqkScKm4zjeaVMst4kKBUaFJauMRsfNJRCs75zjsDfgqWsNR8YYBsrAr8PhgSkFTghfg7paiMdYMVQJ8KwWKvZ",
  "key29": "4CGG8Vpyehm9AFeJb59QpWpyBUf1ANYYa3QnPKCBpR7nCdLwr2DVx5Hiha2aCcwN1RJvB6GWSMDw2xoeGkHBSqLg",
  "key30": "4CaXST9sxAq9Caz36qSEswNqMLVtHwxwUpjrEBGdyLYW6U29N8dHcjQo2gVrKZaNgx9Rtqz1swRztb1PXrHQK72d",
  "key31": "4KcWvncN82GaNuyveWusrNkbhXiJ4G68c9GAHwf4JUS1baMrivZbnxQ8HKDp4zMpj9vDAJcKkrADeqffdsRBL4nD",
  "key32": "5b1nRNTXbdiCfRSe1psK8twkDETHQMGmACGgD6pe1NLwoJYcqeF6qrF1orb6bdBycdoJto9jrNFA6vvx9yxTTZr1",
  "key33": "2i3aownbGWXvFBniPnU34ruqtVErBSXqsS7i8oDQf1kD7p15sFxvhLNji8z2RaV3L8oWBYNuP6BrFPKbPTgLwA3j",
  "key34": "59NmXRuDtWXhrghQbbu43kBoY6GbK1ssDJ89LYSonq5Sghe4JekctKvb3KJwzDENACENhD21APe8rVaJ993ZdwnZ",
  "key35": "3iGrGycyA7v5kwz99Gssva7UURXq8mN5PUkUHMwDV73mefcucSiW2fFP9pzjF3xWLqxaCuAuwVJWUXwr9pFemSVy",
  "key36": "2YXAqNLWb3dYCcNMAWqhR2dmFNLYcfRi84fpUa6PU9ZxDCwA9ZYxenLUDY1KpPKt9zSCLF8riXkQNAsASjPTBq7Z",
  "key37": "2zUnS6eE5d3e3qz7tWP9nDa1fH2XmXRA1ZeWwtY2xnMpW5g9PzjAdQHt4bFuseJG5pDHvbS9xYGGWyf11vmj9Q8M",
  "key38": "4TdCxrR2mED5xc9P5AEzBcKzJU4K5BGksG2x7KzEUtRZCU3AqKxrzAPfMsPrkHS12xRdkh537LjACNvtrT8WdMWq",
  "key39": "CvRJbVszcNgNKd3wcQ8XKcQi1Sbgy4FvXimNGUf3aJT5yAkcr2B3X9Hq1gRcYBqyyzpB38yxASdn9WCh49nEgg4",
  "key40": "2Y3FKHQhgHnuwDDTw4uRbzHRH37e8ohiq2QAeZKPtoNVvDSVUKC2mmsrjJXZd5KCdv7JpgDC3oUDXsNWn5zieYyL",
  "key41": "uWbEeuFNZ263FTewmA7RAe2KKqik1gEoYsb1ANwEMVQqPniFC79Rs5veM5Sv59q2bVMMVXvSgM87oF1cPDFfotw",
  "key42": "5tZbNSusMM2e2WtEkqb7fwo4JZ52LbCydd4tjof3Q2K31MadE4DKgz8NHocvhK7cV7NXrnmTggtt1wac6S5hnCAF"
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
