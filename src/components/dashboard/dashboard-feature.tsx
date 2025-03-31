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
    "5wySmmbYJAAMT5qwMsD4ePxqdpmCbYfqgE63GxXtbRTinZPKpecG9vWfUwJwWPGXzqkRS1iP2Aqi8QU8Utxm3kcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ztj1eQ9kAUiEt8VPSt8tpXwkmvX2A4iqEoW2a7x6j9n5aAQni2W1VEJDgteGyvoUTUVgH8a8a3ny7dpag7ntmrb",
  "key1": "5zju4p9nhdFG3y4mZdgvCbFeWnDCEhQoJ7pAZ5VPqMTa7F4PoUn96hQPD3pVx6xPRvVc2FmgX53o5KgnDQNSk4FR",
  "key2": "MAtZ5FBoeyeffEP3TH2Q86tbm334wmkHaKYDthdKHeok4BXGxafQ6DLWGsiDeV2UfC4FchDpYKmXPCeGBHMvN3J",
  "key3": "48WFWuAAkWhjscKecB2NRM73bdVG7Vk9q4pf8mrX5VxCY19qAPYqTgCRL6UWs7wMNuxSS1A6PgvU2TmG2F4QipGW",
  "key4": "4q8xAt6783PS91JzepkEKfheqYBRerpjgTwik4T3DWooJAcJoxqoGykoGYpQXvBZqV7YN7sW4d8abrVzNqKQEt9E",
  "key5": "yHRad8Wwiq4ZuPKumfk4heTGWi4FcjyExMVqH3s6QmU1sRs1TPbVrf5gZMzBRBx2qJQSumNmBB9GhmNVyT5U8EK",
  "key6": "uY5eHxZvECFgQK4R8rVVGdxU4YKbVhvLqbh2sTqsx3BJr6NbGJMnv1f4VAVVC1tf5ZhMzFuJ1MwjwDkgGxNX1Ee",
  "key7": "hbseDTTVkrWR5XBjZaSMt2QhusjqihAt5pkcg5o8JhLCJRNjkaoe8zJ64JYs43emwtgQUUqCYVyU8AYkHwoY7do",
  "key8": "3T7vJYKuBj6ok2tmUGbgSvwJ4CdCiRJFUFuq4qTcvBXZSd91fMiNz1PGW5WVKgCBnmGRQ92kq9c6tXKanTfbHwZt",
  "key9": "5k4Vfp7sTqsh7M4KDghBc9HUFRafBBJjScei7dYB1bdbp4enpU2AudJRdsSrPftFbBirF138vfJAjgLSagWcr1fv",
  "key10": "4G5uwxZAu6VKsxaTGDvaSPaDSz1BBU9j4ziveqyoEUaTMSLR2LGiW1Z7ut5i9G82hFFFyzJLDjeKtu6HzwXds1ST",
  "key11": "67oob57NGpR97fEfoPJd8tCiXoaDstRjD7n9jyZCAuQQ97tx1RecDastfQpu4EWUw6dUcyXNUpGDg6tYwDRrh3NX",
  "key12": "5i2f2up1JUAETTZbvgoqH8Jt3MsfJGukoi1RDX1GswFyMLS8UTi1DGBHBrag54i3CuPSGdGNqkXarw3FFhatBF97",
  "key13": "5sSad7TKB32oRYnd3WkckTfvsWmNhudzKWpAMF75qc2UzBSLgqECPkqkJejPnmcD5Ziw1nnKxBHZ5gupaw3RSp6e",
  "key14": "yzgRwzXkG7xPNNzydudcHhovSxXYaikoxzyEu42zQUw5ckbVfrcTvcSBkswSmdNnPTf58YQ8EpKTezBiTb37bQw",
  "key15": "5Y6gE2JktJyzaJ4pJahKhpZc4FQ7uDtVLqh1borzKgWPdtKsrTwt9H6iUD3BMbyhEdHgxapeDCB4iR6ZcHJ3Snu1",
  "key16": "4w5chn1QQFCQDV7bv1yhmPAhN89c3LoXEvn6fqcfR3bybdhTTM1M1VvxRdkkP9e8dBnbrD2RTpHzf5Fc25mzvQ6D",
  "key17": "3B1vPkGsASXLQCPZ3xGP3udVnELf82s9PpuD39VEJ4QTX5cqpgVigrMaEQ47qHSdCkkqTdMZCJDLyBEvU5s2kq7V",
  "key18": "4StZoSytFsRQ8s11u9yHc2Ad39KfXsSURnarmCQA39KqNECrpbJr12wyaDaCN2VSFWLy21XWPSUAqgF15WxiC8SP",
  "key19": "3M4NFgFBdsW4axTUktWDHRazRHGjZ7GgGGrgmQoScF7ANnHX5BFPxhVgo3A9kz6RKKwGUns5TzjRDVynAHFbm9PQ",
  "key20": "4sAiMD8qMMvggQVwj5JT5Rj5iXQfUSx6iydXZ3TdCiRMhBUMvRNfRdQro1uWPj4dT5Y195XHsdZtdrRiXfBcFKiC",
  "key21": "49uXMTYZ1D8yoA5ma92Rxo2eEPU7mGVauXFTwZzZ21SDSrWxiW972B8KhrsmsozE9Lvw4zkswZtwHbf4qxWcpNqv",
  "key22": "4UfLSkuZJM8NE9BX4hjEkYJcHXBbMeZbM6V8WATdXL14eELCxZBkDyART7L5jvZAL2h6j4LxwqmiJJYKmhfcgLTw",
  "key23": "4LfFyDYqrtrAGeUjWKXRbSpebmvmJrasyQXyzd1rBpiX2CA4QG9SeJKFdYHkU93DjWxBRH2nasaLY3y86exwwECt",
  "key24": "3aYZ99cKth5f8aanXcXZjjT6Cn8WTLukQivec7FbqiYyQ8BFWC2gesH2Mh4NNZcngWVuNEJVv7svAouo4BEcvAhd",
  "key25": "3z3qjnfnxsVpZcF4nHTFGeYWa5jkgnNCBmgDipmpXDJfUWAqqRHghRagnD78kkerrB9enKYt1ZLN29f9ZUvNtDdL",
  "key26": "4P1ZoTUCAFK76rqhBfKfGdAwaiuDDmd6m5u3jbR9DpexcbJt1bRSr4nJ73Wt4PcFcpbbcYMoXQsDZ6pbtUvMSq7V",
  "key27": "5TQgzDGEXqRwLCJ81fhbWzXvsnJ6UjaGLVWcL4cczDGiXyZd1nENJZZ7TCCa6SqopPRWnhr1MCuCH5jXkN9DVVBX",
  "key28": "5NqEheV94yrjxzHdtnFwxT9Je4i3SY4FoHF7h7ih4UjEDR75T1Jrfw6JKqqXKD24V7tHYw2gqMLasWchToeSdHBS",
  "key29": "4awTaZGicGs5GizzFP5uyWFvB7vzez5PK8fJFWmaBcbFJptNBPeNm2nRYwcsoNHHJTKumv1j43KEA3rNthMUULFu",
  "key30": "spn1UGCRcCm39QH1NNkVFRa6TckRMSbpihB2aFcxAW9upnJQnhWJxSwue2bw1ke7VEPTL7jhgYhbVSRnWjod3Dg",
  "key31": "3dgz3JLL8eSqjmNkGX7o3fR7DUuS7xMoWqrKxTWGjoSD9Ptwd5NHs7gExnNCky84LExfBYr3LNBFr7ZTT5Cmomgk",
  "key32": "MjC8APkRjgJTNvKP9TzMUQVF3BwLeMcSTSn9aJ4BWMvhAZbc6kXpacqqRyrxEJTjx1SmoCoJkmT3dHUWJBcw9pf",
  "key33": "Q9EWs1pZeRdMuQVUtzkJbcTEaCm4aJJK6aGn9zrpK4JGHQ3Fu6b3KaAvWcqRQiMTqTrvsjU9KGhQHDwr7cSscFY",
  "key34": "iU6qKA5VWMdAp2HxFd8Nce1UZgE3kfNk4qZnkKaqRz7nvoY7ADowektPFQVs2Cnr3GEA2XWgZ4JiVsEGySMaMEr",
  "key35": "4evyA1ci4DhgELTvCDKjNhgparmLVd5bBgJrJhSkupncwjL19sQkr84ssCKtLgDVNBeiJ1emHWycNXUShe6zPA5h",
  "key36": "2xpiZS2dCoVqwSYsCwqXHo3yntkfRxu7BUHJ4LjSML5ysFMGKFPHMegYVCbmZ7SjK9yXYUn8PxPwQFdsVuMSRaLk",
  "key37": "3zhUhdwsEUbkH7tcfAXQedbpBA7VmoiAcrUoVwJeY8Cag1pY27ByiCYUVD7GFXSncbePRd164CfgA2xxNs81K5f9"
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
