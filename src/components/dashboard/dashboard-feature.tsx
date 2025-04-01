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
    "3PhZfQ6qGzwPjP9Snd9HZjEf5Y8bhDLjLZoPJ9tRmJTUfiXrqM1ekXXbXZYNgvCiimzDfN3fQW3CVDyBKMDSY4w6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47RJsYRWrv18mHGKaqrPBK6Yrx6jth8po5HCdCF2H3APhBwwW74xNZoaXWyjnebFLeYdqEydEEGwEZfnDGfwJ2AB",
  "key1": "41QHuijRD5yC73E3jYVwAXVBgbNfL3XkXq2mp8mhBBKzakvUYcK6K8TPtVhycsqq5aMvyFRVLPHPWTLcEN9AeAWL",
  "key2": "27ah4g9cSRA4aE1RU7nx3XFF5uwkkDnvUf5FQPRyxDoFujafjrJcgWSwFASRX1QkQMGjdgmh5Em2e9RwjkZAzrBz",
  "key3": "4RXW4QNQNQ46zcb1qwFFaWvd6vzydzbLtzRyNA3sPX2gkAupapnYRkntRMYFTNHQLr71GKhYgxZe2YMNi5qm78wf",
  "key4": "gQjM6Vx47H5U6VVEXEmCSe5ynbRzo17HNStQQCkrRV8AjQYjNFM28qFFWX3Npk3LLRRXSFwwWdvhamRT4kw7bUh",
  "key5": "5eedojsXyKH29FUSXcWVD1zDTSKZQHzgLv2YSQsevGuLXkzhWzE96BPCi3GV2r5o3yybEPtKpmJSg4MfMqwtWuQx",
  "key6": "5X53dvdPCNangCBbBQVSCNprqD6dYzcPEBfvdDjTa7eh9SDXnioAQoPFqDLC9us4KVGMA3LUwMk1nV3MP32ohtKK",
  "key7": "5yKQpoUaEg6KETsky6cESuEB3YsJQrhCZotHHtaxXtd6DjP2CeAwuJnxa4Yn57UWD53oMNvZHDPAFe6ZdWhP9F64",
  "key8": "2GnFY5rumxur2w8dwXzur2AR9aYYtcBdsoJoMLeJyMZMDmKCDW36jChh6DEBxSJ36XcXrfeDWAnxLU45eSDpoyAB",
  "key9": "2NUASz4kdGM2qLV8WCumRa7UKwbM2PC3i5HmKAotGwQhVC2yQdsD9mhi5dvQCoJpLARA6Aq3LY79m6T8poten1dP",
  "key10": "5Cr1BapYcgQBRhshySCSskqJxbCVCcqEuyPYwDWTZ1fdp8PrgYMpFVDT355F6HY72nhjic5Rq1z6gFTCGZN85mot",
  "key11": "K3fZbf4sAEoS5xnv3wQyUkvmKS8Xue6APHPTomGpMf4NuoAS3MW63ymLPfsNJ9ZZSzCswiHUgKQ3opxnrjDxyt5",
  "key12": "5r2TdrV9oApAsBGtbELenSmSEKT6FVwWLktfXSr2mxBiJ66X26udZidUtkJ5GEEu2em5coykjp8vWdTqhTK6Y7ye",
  "key13": "4P4MKo6QhjLeDV5mJm6ZNrtDNMFYxCeDAwU1qmH8sWmEvmnaNP2pz7YLDR4bxXWgxWvRwDBKSterB4YxxJkBeLm3",
  "key14": "3S6vLk7hWWrAvv3Q1MY9GMPNXAohojCPgVjZtdWb3mG6v8XzYcjbEs8ryPho2tGGqD24tGByNtf1WznSeFoXoNUk",
  "key15": "2bJFEXU8rn7bzVVFo2bSqysczHGhmR26TNA89xFfntd9gpWP5ZcuBgLqUv2ieKZDmxER2fK5BTcG5PjTn3KQPpS4",
  "key16": "4W91zeztUsWvhTC3kvao1nScEPQV9uCCqTPQESTmrT6Hd4c6GwGWnVp348aN5sQh6CqrGd6SMF7eh76sJP3zbvFH",
  "key17": "2CohH1Vic7F8nwxg2pb2uNVPN9HNntbbsAGgjKuTJ9y4GNWMJURHMcnwwmi86Q1jMZLmyLvxDGyzvsB6WsW8V78B",
  "key18": "48rtbjLFLG2WEWoHmdN3mDzXfDcNMD3gEnEQwqCa3UneECWCKj6qar5VNtMoGrGy3xWbxefbkqL8kQfvd3StRSLr",
  "key19": "3iztZKQQ52gu392q2kFne3zkpxGB8zruFYSNRNtbz4RoYnEzTJyTgonFEwsAdcLrYhFzJ35isa6zPER3DukG6Fab",
  "key20": "4sQ3pCaG6XFThp9P6hYnyvAebwL2hzWTdmt96dogbMJ2vi5LjDekr6pe7poMk4pfvT6oNiLCGJqZ9Fq6UGrM8eJ6",
  "key21": "2YBsSM6gUXQq1zJPNY7ik6gubhm5wySSczw615mWB7WUFdikBAoisvur4xMRq3hgXdnujbgSs6eZ5oxStDc5wmnC",
  "key22": "3fK2aHbXYc588FCRjzWV4e7ub2LWeM6bDvBXXZWkxDY7KJzRr5g38iag5iYYr7mUqBEAYqkuUhLZCcptrsTYvAKn",
  "key23": "3dxmWVVkMShXtVxTjfth8TdhiqaMzdGVW7RcVfBE4dzHK2aoFBMrTTaV7EwZQv1jURfZx2QK4qEKxLCWoEUtPPjb",
  "key24": "5EkA1Wy5CrfnvZUoPcXFpEy6V8TCodRMvs7Dm23EB4tnno8JAtKzFP9dygn4awdmGnwkbyAWrxz2whoYruaURgT1",
  "key25": "3kjNdrhrWiPA9u1fhPYEdN4Z3WgUUeZ5tK9CTVJgf83hNapcN7GCmhR7bd1j5TRpZErQmxsWum41n79bMoEc6MUY",
  "key26": "4opAmZHXQZQLHkQBWVzz6iJPWaa16J8dsv9ecwqyRV9xxhp59ZicYUZ4xET9ZcSA5UwE7ws5is3xNgCg67B6ijuK",
  "key27": "534HRMyyjNmuizdohYkVmJGJTxhrASejxJsrMimbifGjWgGM5rAdT3s8UQScnoTMtdQe2DkfDRhJvf7dWgznNAVk",
  "key28": "4ELKghApVpsN37ZxvWx2wvFHij4dpJsLSbSUTBFxz1ECDGtHEEPZgqwk8oyFfwEP32ssG3pNYCdLetmqAYUPw1t5",
  "key29": "EWyWVJqgoWA2cCVhezNsLeWRJ5qTo4MHj6c3J9U59e8HmCU1aUAiGv6PeNX94qzT9skHq1LgJ4Bf2njVkB2BaKv",
  "key30": "2oopyHjrNuRFSoFEi8fDNDd7b3e1oaDRAZakJ9bBRKnUnWG5ZocwbsBLSVwX5BFPAsmtgwFJBTydJq6dBdL7JFmN",
  "key31": "4Zcr6ft9RW3R4Wc8ifUdvFE9gEn6ev6c1xpjzFgo2WLcTK9XZ4RyJncjNJ8LYns8vDBAvBAAf17fkM9xwAeQVzWx",
  "key32": "599iTr9kueeL2FZvt3pr8MaJdfzqA9y4PJf71f7LoQnSp5Kp97g9XfpXoohZ2DCMZUf9twYEygHEZws38qSdPCYu",
  "key33": "qw7id8KKL1ksXchwUjGQYQnJUEZVwH2vz6qUsJxjSuENMzarAPFwYFJ4YZtJ4MDwhN9CA6yvrSsM8qDYAynDSrd",
  "key34": "5eDRCfTq8Ff8RHuHbvmFsQfJwN93NtRPRjfoJvu4tSxap3zz153TGdSzP2EKXAmL1XrF8Mdobo337yhN6scTtYxS",
  "key35": "3PrZVvzHySAU1oKjgDpwcHzR2Le1PYGZqxAud71i93HrQwWjghf9AUYAqYMh33MDjGWYKBiu21ohGagcBUsrYxJm",
  "key36": "4arA6vmXB3B4wnQL9uxiq397asWQt7vuHBeToFbsPyBAb41PPhE7TjFCbURhjbapSFjQTDHnQz31B8mWSPXFdSWR",
  "key37": "3giHbkxxspkADBZvLVWp7JoYzBR7qWk1mmG5EVvRqzg7B5frfBdrKZ3khVSBDVS9zXziMJbgsmMUy75uNnFueyM6",
  "key38": "pds8XgLV2YdwLhq5wQEnLuaM6F2AY2utW2mdLTpM1yTXankTa2xF9kCwzLWqMwijkFDy3H6maHdGArnCU93FpGo",
  "key39": "272csmzU88CLw2uM5jeZxP6rP1QPAZ2i9p6WDAhFvugxZ36HBbZByWS9YBivj6iZTd5YtYWvpATrgWtFEDUeYFw9",
  "key40": "3CoGgbqB9LCWiSTKfWo14To5fxHgDqaXxS4caEMp2Vw613xYAM6PBLBpZuoAhH9R4rAmks47wfiogobm5CnjNctC",
  "key41": "4vxkPNBoRgSh3Zmfxj5WkKBnHu5c2yLDec5Hw5xy51po9MKwccoBTgwYLujRKXcGZYSBTkvWjKoBhqVuHBBuuu4Z",
  "key42": "DvhkURevJ7QrpxZHJve7XJuuz3reH12VHvWW9LcMJbRh7umKRm5WYpoPsXNyaLMiUeAv5FoK2xwWUUHL8V8S2wD",
  "key43": "25NYybuvtGMNRzm5c9VtQ3Bh5H6aNWzVM8a19vJTY3Q2GLJxcLhdTTNSxr3xV9FUZ2ukjxnS7AS4ZGXhzGwrAhNT",
  "key44": "5pUZypsFKXLbh5aS3Bo7rFKQEvM2LQ2oqE4y76HEafqnt17m9ZfM1DLJzcKRcZdKpqtxnDuMVFfHsZ3cgW6nseuY",
  "key45": "3pjThU9x1GCAPFTFJcsJyYtb4cG2MKVUnGD3xQPgg9sK6od5A1wS9hHgCQfxX3ok6HM7Cba8Hujvgvnfr15Dv6Cc",
  "key46": "QrN6rAKSKpLjTeu8hN2VfK2q8kUJkMQRtBay9wjuDaXhLgQq7NrTJzymEL1uqY8YqzZMsz9Ps7vFQQf4rLZUo9o",
  "key47": "QiPVskXEv5bDjT4tpkL6rV5XEHA32EpLmcvqSS4utKYtAi7HNQGdhLkYRTHTbeyZuKxjyQo1CuDonbZfNMbXo8W",
  "key48": "343VbURSrC63Uqg3wDydoZgYDH4xfck3XpiBvBpEhK6aAZekg4cwWhEZoKZvGVP4LBc62Jtj2VY5S2jwLyLKPBYF"
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
