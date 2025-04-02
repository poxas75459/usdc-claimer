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
    "2He5An1gzoDzCwGDvjAbJLpahfzaskygowx8TqRkTgxkHiXo8YYtXfyyfm9TqT7Kp7ZW7tvWWgAKqpFpmxzDBLtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47DYjFX1BJRtoEXefvT8XR9z7McxxusQF5reu6S3ai4bdbrDUu8VB1hpBvEoCyB74xqABMqQNx6m2ckYF4sUEJ3x",
  "key1": "5L6VnxjT7M8SbpmAfsW8Ey9SMqaLss9G3GDuL9nTaboA5T9F7TmSoiNzrpDcVHJCYTqrZiTvr64eDZB7VoDerDk2",
  "key2": "56aCWTxUtrVKyJ7rr66RLpXUWhfEDhjGWhELzvonMsfoGi3BcZrsWav9mKMXVCQTrh94kgQ1t9qaEEGM9TERzorA",
  "key3": "66Mfqwsr8549CYLZ9Bc21JvkSSMhxHTaxMwgbf2PDnW8pdjiGKELdbaNvtTVMbXm5Wpps8Q1CvN9uVwAjeCEXY72",
  "key4": "644yzBeFCrrhFjtL1RG47iBuM4WSoahTAjJPkeE1wkXWLgwyQSzF7cddBfqkjoci5mgU7C5NxztdLx6L8aHieRZc",
  "key5": "aar6bsJyYw3UGmzyvGP1kx8R1M8s2YzQejWWBB3St5DBwj1hbnscGg6XafyFwwMmSdVAJz5JQUt8mQNTcyGoBB2",
  "key6": "4qkDuyqQ7WAAvvoH2sfSPExJaPUERUNF3GecRKxU8pPp2Tsr9K7xCprpEaSbCWH87vqbVD9j7AWukaPq9H8xJPSe",
  "key7": "32eL1B8wUy6pdHkYHSUcqWjixnmb5JoPG6perZhCDiZSvtaE2AjNjZYkEvBBbq1bmdSPgUxzGDGGJpxVeJKPp3Ac",
  "key8": "5W49rgzdVNLkBRy3s4KGPJD9WRLDbBwasy1NDNuXbR2AbYTVBFypTAZAzMcL3HqUeaaLipbvkPwLUkDffGgANVFg",
  "key9": "2Fa48oHuEtdwr1C4rcrFXGeA7yRZwBVDPuvGkaVD2ekWTxGaDhSZXsoWMfS5Z1MTdLqzXLYY8tzmGzLBMbReRrMD",
  "key10": "4QfqADgyGAegpkotgohH7rUHgvzKodsN6XUejHw461yVcwHqpz4hMcSfP5C34ZG9noCEUoi9rqe9pdbqT3ktUiTQ",
  "key11": "64a53kMN2Lh7aZED4ZgPXfGRo1HYm11uMHJrRjWJaeshGDxdsCfiLoMFhEQyY5amyAw2zEMhL9pjnGnuxVNNKZcJ",
  "key12": "2AxgQQh8LE1yUNQ4c7Y74PJeSVDbyVs9LLFrGRnUCgqT276w6WS83pK5h5SXZBp7tFmgtsnq3Se3beBctcAL6D8m",
  "key13": "1A45owTsxSnwL1Tdy9t53B44cREuSsnHGw6Cs7h31j9fat5YMamc26HLA7EP16Qgyys8io2314Y8GmVhv1KNTPo",
  "key14": "28DeRgT3PjzrDKkqmary5idGjUJPXYfztBvfb44m27hjzJfCyHjbn8KtgLMCJtT8bQMvwVXGihbTBpMZoztT6N7Q",
  "key15": "2bJg7G5XTqbiU5FWciEzhKZPi2myXgc2hzLWaC1xm8ssaNE7VzWNu9qX3FRGcDxLnZuhG4ZRX7cjFFUvNDnZeWAy",
  "key16": "28MnwiPVcN97kTPdeeFjr5PJrr4NcMeG59marUPq26otwoctjEQkZb9XTTDatUx7GLVT93ef2SvUiRHrHovrexYR",
  "key17": "5q8h6PDCAdieV26wDosoMQDSDRYHJjav2VnjEemZD1t9vascaCves6ZSuVXwyG2fEpFRAjaJXDVMKkDqqe8d2La3",
  "key18": "59GXB9AVsCb6LLh3RgCYmBav8rDvkwiqU2b1rHQYQpQuckwwxu3Rimu6ZZktRhgonAtgBqZQFE7XAsqy8rB15Uzj",
  "key19": "2dSqZUMVknmwZQupa7xtE79HdkojqsrcQ4udm3Qq1wiA4FcYcFsuSQ663LTUVZToiEZCUxtLju6DJqZxEUA9iHAJ",
  "key20": "2PNge3i7pnmf2wzsXH1TmV7MgELGSVig7PkkPVNLAxo9TWm2L5PyZN3hx9zJkT16RUBD6KBj5eVarC1vzFfwZru9",
  "key21": "3x9yuooCc2PwWbTBsbiiGihbgHmkf3KKndAQ2KCgYXXRLpQ93sqtMzs9Rydo7PYbDfKik6QbuJBn86xLCxbcdH7M",
  "key22": "3kyKc7LftVQBL6k5EbhuHpoMbBuXbDqBjDnSPqKKy4Lp4i6q4ECCmtSckT387VzyEJu1uvZUZNbkKh7HTmURQJno",
  "key23": "2doVjRipGcQtL1gv8edP1cqmkEdhErdLQZvknA1henLEDspatproAt3PuS8kE6aQ4HHHi8x9Fo98z2mWH6DyzCU6",
  "key24": "4vJq1NRCoLk5tXqtuExPVNqpoQRnzx7Y7uRt8UiYqxGD3BDZaGLYuZchcLV94nxHJdvSWynsaxX2ekQjpnutduce",
  "key25": "3RMfRT2Yzid9n7yfPxu1baXJ2Eeo1dGoyCJtwV8nuR89jeXnPTP24U2CjwBoRHjNyio7QLqKTBDbUNKRWxG3aN9",
  "key26": "4yzPHu6CSmduZLfrHGoCLL4gddJGb1sxuJxmiXSSNgomdQHJN2juYtcWthp1AKNZpSW8vZWGjmeicAU16ip31dfZ",
  "key27": "4ZLAYZgu3Gmv3ajgWS4XzpmRYxi9U8JinLjJL4m1HjRyi2iCsntv6JUFk8T9B4xsnYApoR8A1QTp7L28BFu7rJk",
  "key28": "3CAeDC4TCqhg4HJWeypP96qGmForreQRX9LhCGsLhwcXbbXuUzWYHfWdLXaL4cQTnojvoszTqywfLEJgVpLq9YtM",
  "key29": "J9wouEEoaeyu4QQJTjRio8YFLfiiuu1Am7apyxGbfMMZP7STxpG2frhzKpDc3ti5stiFiSizSRKzjpfYyxhBs7D",
  "key30": "611Q8S9c2RVLEZUqAzPFGiQwC5WyUPqzqEMio3DTQwrXsVknqnLZrZpieFeZ4jB6vc8LeUhWT4W69ciN2HppzF5D",
  "key31": "5RVQ5pZ6pL8USVxYWa6hae9AwhZFpSFpqVrj2qdveKbmYzPT7HqpgtimBUcy88LTZEmPrFsibh1qxXn4k4RzRs3F",
  "key32": "XMN4PWASrT3kvNNYn4hPHNouPvr7vzcmzBcjnZQzH5joaJYzzDvFK7bgNpHoWSzWa8moCzhEFvKMWPpmtdLpeAz",
  "key33": "51iVQBeeNeLHtE47Wcu9DLmFTC3iTwbBPxX4S9JMrsSja78H89hFJLEqTZbFSBawtvjQffyBicmVsczkw5sJAUQe",
  "key34": "4tAmtkwD9rwuSLyijhHZ4hwjXFt3wy25PRVzTYxozpPRqw5shTVZFBV3yqEko557yupRLB82RkJZdYB7N57gRcyw",
  "key35": "1rdmSmZp7FTyK6DggGFJ9WtAEYAg6EHWk7B25JNVEXvH4pgXuY6n1btd4ek82yPGwJsBioDb6EectykAqg5Lo4w",
  "key36": "3SHUYbkf2xqNofuhP1xdSpGfyk9xs1EMdYiiGeKZ6wobxwTZqvKi2jUWQDA7oGh3othz3V1mHBxAAnr2bTaREG97",
  "key37": "goR1MVRz1TcWiGHP3dra8NhtDgVKh3P5RArP78eV3wxZc1Ld95bSyHdZ1RKqydYFDsTdgy6nhzSJ6LBW5EitYv4",
  "key38": "GAswVK76esd44vn9a4YmbUhSkfybtSw8Sw9ophCaNBKH4y3jAVYvZEbL1ytLRBv2RypDiNjQ5P7j5tfGgeLSpcj",
  "key39": "22hWgv4PVvLSAJwREiRTnQq3ZEZH364iQ1UP42hNN4MdU1VFiUK2kqoe7XVDejBe8QHuHKtbQtpPMWAz9KdR246X",
  "key40": "2qQCH5BE7BCu7NJcaRzBPLmVDYyafzKSJKrsNw18E8mnqFVmGzPABrULnZMhBdTJbQja8MXkMGtwRnkzafVyftJT",
  "key41": "2R7ujmvcrNttnVQq5DA8BTo1mQDNZm6ZP5iPLjmxsr4e5PEGiRov8B8QR1qcCamecYdVmAYHHg5LmVKmRFwvFA7x",
  "key42": "2bmZAV58NJa1rDeAakVeKLWqj5GcTDCZsqxTMJ6RJ7M11Bxr5RQbDe1zWpz79yVf8ADvyKCQZXyb9bnCyv33hXDy",
  "key43": "rXwCmKfzEK2owSaFbbwefAbLGooLpnQAV89rCKUi1MovV5gQJ8LqBQCZY31QoaEnHMWbDmLxoFWhuLnxeLq2KeP",
  "key44": "5btrZ5bijjRkkkVvw3vg4zLEkwgwTt7kSefWmBPnjBP8KW9zxWMiwXZm3q3FjxVfNDUHLViVfBxHBHcCUrzuNJhJ",
  "key45": "5cPioVqcGmjCe5xb1VdhJXVt4T2BtexEhFk438xH99PGH8vtcgbmZEUqYARt6HsjsjrhRCGc22TSuA2ZVL4B3ZNu",
  "key46": "3s7Q4vWJ325W5cR2JQ4Kd548p3XHzZGi9rhbZk3ZfEQNE1QjwmgqwCgQCQzkpp5k5Ns9xETQe9UVW9AVSFswkCdd",
  "key47": "34bp2kkuaDjTpQTQfQayi9PFQyFz3LoJo8UDQELxKEHTumBC6cnbYDDvhMrM3qLWqXfrbaYnH2YpcGWrcSCzoqNj",
  "key48": "2rYqEHLBtib3ZtivXR8uppnNm4UkpKSbDHCx7SJ3rj7XwYpXBRYivBu9KNqpeXbn6pUdUvKhHsQQFoUNGxAjrhqV",
  "key49": "5K4tfanqWkSri3HM1mTNNP7kXVK4AyPfcBcEbvnDpvx54MYiCqnQ1cRZ7PEGHUtugskAXqGbtFiLttbZAcJvuW3w"
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
