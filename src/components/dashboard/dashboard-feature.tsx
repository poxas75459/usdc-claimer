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
    "26Wvx48EkNVxpM8fx3xnEJou2tbg3mX9QXM4dCSHvdhnaztomYp15cijLi8uYKZmeeiu8M2NjH3EetEvmzKCRsna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVpM2YC3FREyCgmK4QXiQubRBPFUB4Bhev4u4k7RrWyLxzw9u1fdi1qcKZKYEZHxkyEuKUiq5CDLogZDkzykWjG",
  "key1": "4y7n2B6AQFRLxuwyx8ztvDxQSRgYHF1SVrLF7qxb8JFsQhCe3dZZtSi2BsYruWZmkNiCbamE1etX8udAmobPd1uB",
  "key2": "4K7TUwTkUqYbr5eKf2jeydDY4M5uUD2o1Yr7XRdZEU5qymHrSTMiMoemJtrZZYTjDdf4SrfJD8FjHGzq1peyHada",
  "key3": "955vkeLQ7UYoYYiqLYDeaw7jKdHTxwCCdmWqJ3U5spSQNecjHRg4Pbk5aezfFb8EG2zSjc23Ssft95BYTyL5GfN",
  "key4": "orPUPZ1kEMyBfAKipGGUFHf2JnXcDvPUZzXRxwUw9UfBZQBGvzG9dtDauVACVAWNy25Cqzt8MToGn5XzcsCyrR9",
  "key5": "2P8bWCrTgeShiSWihG8Bk6Kq8Vk39D8PPXSj2v6XyxTCnRMCWfrBcyipVKmiSKf5NP9bc7RrKocD6gzsHSdy2Wjo",
  "key6": "58oKoNVePaJwfZG1EN9MSCv9ugeQC5aDJtoFkcJXRbv3VAGWk7EbGfuWsPQituTLREssvC6tMQmASKiupTvjrmDo",
  "key7": "2w5ejtfbRWTNCfqv5dEFCLcR1f5ntj6tY7Mk2fiH826hnNN9J7WsFuPPmHYUCA1rW3hvkPdcMwYdmNQPafcgM7fq",
  "key8": "3tBHfaY6N5sHA2VuhPinzmLbushWUPpKLNagvkSoMKyLMYZaAP1g9tC8z29wbid2QgKn4ySQwwB3GjVzxHeEwREo",
  "key9": "3fRD9AX9MyWQcdSaFKEH7j6g9Ezr9u3YAKQybqm2p71MJ6wEcKKKHUGAjgqVJWt84Bv5scthGwd9Cg5FBoW2TuKS",
  "key10": "4AEP2hNQ72x7BKuC6xZqtHgRRbuCmDD8LzNQg44Y6YFMNrWjYRqYU53rhTx7Zhqm1i6nvZKLwfHsN9eJEW4XnSXv",
  "key11": "2HMjjkycD1K92YREYyAzKYN7kWkjDmedir1BUyQPCUvtjMfJPZodVbnowoW8qspbu6XuFwLHCH9Ln15NA5WCwMb3",
  "key12": "29PsSBE3QmWt4Kqdvcdon2Py6pBwGQUgS2iracnMGV6EDRumfpDHVdK3cMhLz23h8edjfenzTtPXUVjCrwh5Xh6T",
  "key13": "49C4pqVnLZTvr6eYbC6seFqetDSZowTrNdBX69xhHQGXbwjihNLXEEDLNWguQtUkAx9QuKU1NsQB5ZmSzoeDtCEu",
  "key14": "4aRcwfaMtemPAaHiw385wsxmGabycpvE1VGCngjFQTAXPRnvqGruRbvPAFFxcNwXPqtjaG9s3UtS4kjceZdc2Z6X",
  "key15": "47yEtn3xMYqaE7fZSzLidwm3Myj2VGmPa1QavpWQVrJ4xjtaSyGrtgGrpTdBKf69VXiSCKURVkEXDfiwFqziZcgp",
  "key16": "4dnBuvLjfH9TDDf5tJpCPAVPWYA6dpZjZJ3opxefpuivvG7ERbEkPrrALS4xucYvWS3s1WMpzPBM8HEgzZT9Ppsx",
  "key17": "5zp7rqoeyWdgBiuCKkhFF8jqNJJsyMaEBWDMMVMdcYoVqWbs2LuUZTNwfWhTw9VECCJdnU2CAD4YmZEeaWL6WsaL",
  "key18": "3QX3qdpVwwgoNieNN54PW8JLbYWSNFrX83PE5YjckqZmquPjwvCXvwXFh1NdvePvc8RkiQhkKd6S46YiQjGknmP8",
  "key19": "31C8i3y35iko1Nt5QGdzkq97CQkRgutj8gab5HvejwHK6R3PGhGGLgk8qZHNn8oSazWUR5Sr5fDF4hAEW2FxikoU",
  "key20": "SafjjDJipi6NgN2gCEJrXNiE31YuM81YUwsMnrXyxGsNqcE1idSWPgxFUP76htQ7FvMPYqcVaza3YZt9XeSNWaY",
  "key21": "k3g9paz31B2zXjUvgsMCsvoNxrFrMbKvQ8gYdXztbLSf7BAYkgGgBaL2hydv2viQegQ2v1jR6LdE5DnrqY5HffE",
  "key22": "4RP1ikQdTS656JqdoGtHag9Y5CnjPJBboEoxT3FvRZ6qR6iFjjigtsNfq4RxccgY3U6vwfzUkKah3awBWyCUCVVT",
  "key23": "4RhDc7guK2hSogqBTydHHaTxx4qoMrWDWyAruQN9qQzYucRFkjMVJVjzSyBwnr4S4YTp1CpkAhb24Sy4iq84TTKH",
  "key24": "5EeVywdAkYKuQk28RedwXZWDW7u1Qkg7uRXM4wnWj8twpYuj2CDdfpWDfNsUtvyykFwzQTkY98gn1eqwbQYEqGrr",
  "key25": "58rXuLBEpRfw5TzSkter5opK5dQZNoPQytZDfRNHVSwcdZTHgiuQs2eoq7SVxLESbLBUhUurHJhM5ah6fNd8pueP",
  "key26": "2D4GbGi7Vfo95XvFNsVCBFpk4PKYFHpetXTrtsCAwP6TFwosVDpWxJw1tS33N1uSpJZX6aPGsBJaZJfxN1Q6piRL",
  "key27": "R1bkkbjNUyqVLxR7MxjCKXjKavkBWC9qrsh3ygvhx4KifPuJHueFwdYVtYJe6PgpdH7PfKjZ4aWDhWMxYowRaSw",
  "key28": "5xwuMA3SKdFd8ckJbDdzoUgCbJqXjJBtHUPSJ6ozuKEjyLDHpmi1azB66EYHxZvZRm6KG6kLZZmpK7EZQu3Ah1DX",
  "key29": "4fFJaX9WoBPrxdC3YKoAa6pHTwK8oXxBCjr3pU7FPSTmANYXuHCbrAVskRF71HYKgALMiBuy5Z1aWj3XBBuDmoJJ",
  "key30": "THNfmN7eftNoS49PG5KTFh3zZGhxL86GLiWxTZbo43LZfng4YEEGihLWaupQBhXpLGwHULsxE66sLdBwaQ4dzpR",
  "key31": "5hLFEf5cDCUv4TdqgwGF7be61q3wJAhhjRrsDvhiRaSFG4FMb1WoQ8DBvER7tCSfDFtx6HSf3rig366Po4QvwK56",
  "key32": "5cxT9jEuBSGZX1fEQS6mFhcv9SdamMJSxj4nJbFZ3xVY6LEwneeae7jywSpu3Zbo2ieyexQyJ5K8zRcpY8ZtCLax",
  "key33": "4LqghGwRAAAVgHiE8i7rxNy3P6nqZCCTfnRpqv6c2VPtAbXTfcQJT4RJ4mYX6abeGxjwddkDQdrEmXzXrnWKaVBD",
  "key34": "2y9CR5oWnCd2zHpsFBzHrqf2qyThpKA69JSeU3Ef8mfkedo9wgcYhwLTqU36PFtStFwAcxKAH9ts6P2QBFnqThi9",
  "key35": "jNWspTv8CLCpzwzUKBcMpgF3fGv6W9nwuYkmDmAAvoKpPyTuzzC4oUxQfux8BvaVQ79LkvpAQzPFrJRFnUDBHwD",
  "key36": "4TwRZW9KBLsxYPtPZTaxjk2aJYxLzD6uDHAf1Pd9oybKhv4H13h6pjTDAEgdRUE7FftNk9VvyykR2GALg4Q54Tog",
  "key37": "5Y2MKLZyeXwyYaiFkfC8Cz9GsA4gvX9NYxLRAG6jF3K9RDCqVnBjEUbhXwWkWgWiMDjRFbZ5G19h72jXjz7eVnBr"
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
