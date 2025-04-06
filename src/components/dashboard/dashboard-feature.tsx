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
    "3ebnfN6ej8mpPWmVbuPQyLuhfFv4n2LpoAQfYP1b7tTzEFJYrsNkAY3KSxN6G5gGE5rREb7GjnrxMygUp2LrCSLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P2r8WCtn7qauLTcGiXBLtJycdYQpVFV4Z9WGjGb6Qd5qMTyj7bt9HykcuPfnCpjRfDY72G5CAGn5qQbAd39azJK",
  "key1": "7nE8SLEpDG6Qv1gegHdrPaJkQwfRawEmu3Ke1Lo8NxdEm2TdFm82Hg4JHE8ocGorUsNQiXWejsDHiQJ2zGPRAHy",
  "key2": "4bABJE57PDTMwno2UH5k5VC4e8YLj2iuGBXrboi1PuNPXhPo7uo61z1BFHHBAArh6W2f5eefocL7ADLoB5EZcqe9",
  "key3": "5gr3RqHpciGgMxn3Mrpx9Xnk3GcJ3G6uduMq7E4u5yR5XaHVXrJByq9XWXWAKvDtEbDeAEghEv44d4HF6VYvyjZe",
  "key4": "3J5LUcZDNdfqbkTXDdHvqSw9ksbLYWkwfh9LfznaRmF46YCoym6vLs1GTAbD285nKmPmTdQitqdh4nbD8fuq8Yrk",
  "key5": "23kWS516HcqGC6h5WdtSDydr5cpmtgs87EvjEEcUBQt6WX7uqWdUnPk6TYQ1wsgcpH47gHQW8LfdjhCf3XriuY55",
  "key6": "4MGUXAeB1pBy9H87zSLiznNCEtbaN23yT6msBwUu3uhTeQXCjPmRRQs2yTymjrMeBAZDmPXzpTuEkRa79nTaT6Jn",
  "key7": "4b8LDJFiCpdgcPPaseZyejDTfwEsiurJ3NdrMgWrn1WtdYeyh5qrzaQXWccf6CvYNRVoWNXjbrPmuPAik5QkLCJi",
  "key8": "2zp8zpdEiaaRXaPQXHqmsrcQt5qo8vGzji4r3seHNJvP45vpqGSZbsUDeERkaywXEyjdWDf7gTvhcC828Cnuyh8V",
  "key9": "3Ajv8FRgGfdd4sUbPEZtbirULWizvtf8MUEGX6tfWtPRWs27HkJD6tXhQCwjS8irz5gmYwAcyVxyykj49kQEoNHq",
  "key10": "4icSF5MwN5Frwqd9fHdTHjgri4ifajETkxKDmVha4CPy1nte1KnRTRbs2Y3KULe212ZpX89ruq5xoU6vtf1ykcfK",
  "key11": "2mzZezUDqekLqdBpYFBRcXWuu8J1CB5fvKzZ2XgY38jcKRQUE21yreAmMgGyrPdTtcUr4LowBSK6Q5L2nWjUHaAB",
  "key12": "pnXWsz9MgWQmhXzG5AAfNBLeicfrMV8Kvbr4n5umYqEfRaab1bfGgPWzGydPQnf4fG7MUNaNRWjo58km7RbXj9D",
  "key13": "533nVFvagJiBwbp7qkCLC15yVQskL7n7QxwCRHs2vWAZy3hkn8hbwkpf5jsntxdygm6dsEaAPJxB3pNEEmKSyjnY",
  "key14": "2Yv1rkwR7Mh7qWrrVQQKhvWrdYaJhZ1njfdxBBnxiBWgjftewfDdHDEcScvLxG8ZeNunR2mhibRi5ES7dhsmxHtt",
  "key15": "3eJAAmuCU2GKhDRpvE1aXTmu97kJzHZcL47m3QCzEwNyeFqN5tDQ7X5RPU5LM8HJpJGC1oYAAgpn9fA2aBXbVLoB",
  "key16": "5iYNeyoNFJ5jyAVgGke1rqpW6MkdndYDvRox5DUAwxgakMRSfyJhqpriByiy4YyRvF2s46jqRaKPx61T32RX9Fbt",
  "key17": "4poPbLVc9HrwWsynDMCPm99Ku8bnqDk3NbYJawSg52F1WAaptLNJ1vBApP4y3uhLEJ72cw3569eyYhSqzTgVCRMp",
  "key18": "2VFL6Jpx4yPHAo9bLWXvhEPYGBPBSpDs7qRPxBmE9M6Y9frBtWRnxBcrLbwz3HudADy9T4A4cs7SpDhA4fFRD6Fu",
  "key19": "5Ejr4Fu2caEVsGZeUmMsZqBafqHd4MJDepoJoFUVbyAXCKMGCGt1G5AmrqxGnfkdonhrHAk6uTgtqfeEtURVkrjL",
  "key20": "4GjdCDexSXCEaMQ4BgGzdRxsSqKBtZ28v2jfTyDbPFpBGy4KLfWBaHBnWchVSzZceMmeLb7fdkxaNcfWNy9nRC8B",
  "key21": "5UJngvWjDX2Qkaz7vbQYxnFnRm8FnHZE7Ef4bE3jjKxdVmRBNMLXpp6WKFbaHu1TYQXjBh4LT8VKfDGM3uvzWhYx",
  "key22": "39GHK8gUFyrz1EAhFSVc6hmudzPLghESSXhKpFFkJrMmyNuYtVjVvfeyinHR2YEhN4zwUdo7o8ZwE9PftoMEgbWv",
  "key23": "46zstfT3QWa7YskxTckTVuxcZ1nUaozNg1MxCLEos5GCsovN5wt1jAAYAwVN64LAxqFwJWJvAUwnzgfFwuX9gtW5",
  "key24": "3TbKSLXV22cprGLtoE9VRXEM8kBd42L25xixigo8GuTjz9XuyqeSP9feXiXATxXbtj3BiTLUY8NdyRP391sUJ9oX",
  "key25": "2uo23cRW5BX9BxuUQqxgxfeHpdTqE34fdsgRXtMg8KSBzquRpTXYKrAA82TGQ3v2DN5nLDQZbASMYcy1gDtFTykY",
  "key26": "2AgRdG8AhaV8Cy5qLuZReG9H1sYjCMgfVZGmy4zNoxYjyn1kWrbbYEQ8VVUBgAk39NcbJn61mKGYoShmfvG2DHn5",
  "key27": "285bdJKiW975uDtyn9NL8wBWTD3YaidQiwWqNUASTD7oNjKFddRvkdeQ6VkgTWeVqHRLXWKaAofTAKmGbpFysa9B",
  "key28": "Q72CEQBAFsJaXTKwq5tVbYJYYU1APYGPgPRQubfrFfRHf3i9TEuWCS16MLktDq7QJWEE15Xk3ZRi9xcd7sJi16a",
  "key29": "4my4EqFXubT8LxWAEFmgT19117Bs918vzAbZdCEnzW8AsbPwvzFAu1CcmWDQLjLJEwW4APyu1gwp66eiN73Evu8J",
  "key30": "4HEtW36ZmAHhVHkSmRGRBv3n8DCYUwy7in4beCvnKCFS4jGVDCN1cjeumZSKjvheN1HnuTPYp2FJobA59CDFYg1J",
  "key31": "3du7noWqn5gnaTnt9qZA4WWZPsmnxwzvXcqjQBVvksxqoDAjCETstxqyawk48Kjtyd5gvwLt1fUmDjyEg3mQovye",
  "key32": "2cvMhzyN6bjrtFayxQcNGxG1fBQ43pyaimCqfDxVYn7pcdzBRGA7uCBxscUiTMmou3kG2pAMd5q6FRv7VQbrmXLp",
  "key33": "2uzwmrxk6m3JiBHism6wuJtWhV9GFm31my99n5eWz9Ssf8G8G4x8HXg4D4vC2bo8hgep2cAaQnxxboTkJ3FETEh",
  "key34": "3PQNRN2EVfGHBSzqyAAQWEtLmjrVHzkvEwXsW3yiXbeHpyN8ZJh1n3dvhkVWPDEWU7Vvb3pocaAJnT7z7SM2qieD",
  "key35": "5qnaNu6aEy8gQCHdTJgEt5btzH9vmapW3FXN3i26AN14rMjoLTpNPZRU2CtBH9n5csBvW6vA1rrcYxhrGuv9eJeZ",
  "key36": "weao3AoGVgqyQcynDFKYwAzoNXgjhkfkYJpWUd5t84BCzjkLj65WLWvApxgv7gq4aqVDQcAsVhsuLJLTr18hFgc",
  "key37": "QZhsRCVBSEu5Atxxaro9gVLqfMhHu3RZvkwgUF87Jyri2nBXNE4QQHNcjNTY3UF5rN9nDUHayRuz13D5WpcPNHC",
  "key38": "4x5mU4NyQe2NkTewm5F4SbvfXymLWP92cStBYnTuUgJkBHp9LYheyK3ZTmyzX1ecdiQGNiEiG9FTBFdTr9NoqRoB",
  "key39": "3QW3pt2d1AKgeT7cuc1YP1uDQPXPeyTHkM3YAHiroxx3vdPgohR4J2C965oDdKPzAxGs5jnZFB9WH5y4YHD9N3hy",
  "key40": "327BPmfAJZb8HGEUCCxc1XJVFerzWg2FXZB5TsSZhHxYYwGsZsEbFLPz8yuGAwFS8djFPkCAEJUYyND4ryBU2r9W",
  "key41": "4to4A8XuYU1aGeXGxwn82RARVzTWHuZQCkfNVNqYXWeDkWfaANwtHcdS9sRi9VSfYbxGuRJ8WxUJqxAoypQRxQCZ"
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
