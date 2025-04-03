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
    "2AdaKPbpikYZW4jaXQs8jv9ZbDAgdgVSJEa2KGsBPFS8QQd21vWEPq6p2JJ2yJAvAnoWApyDBBXB9VFSD6qB9fuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWyuxtyxGdW6axAMSZQ5mwXDHxhoaHhx57UeC315ENqmhsP85zKrp6diNF5KCPLmZDhTubxJFsWk3ozhmu1KN45",
  "key1": "5ZFhEL4U9Jv6Wp9eQBGeWPDjqZ31MAWdqcNZ5gsoqaopJZe9MGjQJy8wgB44QUHYeMZvyjxu4z9PPQvESJzBDdkN",
  "key2": "2Kw1kHvaC7NbZj3gHoaS1BXEKdwLRTEtTp2znE7FKmUeb5cPxhdutkjFBHH3z9iaGxfv5ngcCKSGSAjNhwjvnZJN",
  "key3": "5msPXQBGtXstsQsCfak9ENxUXRgzRkWvMAv2LDniCoAdUWCarH36Kq4M46UVksd8iXtFiqncwPPsv5yyVSYycnKf",
  "key4": "2xs3Hiy1nssn7azngAsg9ctv13VZGkHrxsLycNazi2M2AJgxTnUtmP2ZBynUdBrgkbjdtQrNBsnXDo8SukbAqVPg",
  "key5": "3XFjBw9fLmmrE3dPSPgoJW1hXgfKdCnXCa1QaG68eW1KkDkTt2YacEYLyRTJmAXQUJm2VQemKTXQ2mLSJhCtMjMK",
  "key6": "4MFUdE8iep7XnHdDrLjeZRnodHewHA5bDoX7DLV5HSyE9xLHnuL4f1Ks3VpVCMkqudRUdAEFjf4WaV2z4g7D9whC",
  "key7": "4iU738VjScE5j4uB3EYkB8QbAR89PxFt3KgY6vtyDPdB5nx1jfAnjfppMvsZnMnQ415bS5Li5CSxNnMrd8NKTeNQ",
  "key8": "5Tm5CXc3bDdZqQU7DKgJdJaoQ1yHqDdtGaAps7RXDpGJdfbQnUzkyP9b9C9v2P3QqLBejrNrTVujksQgJJVaLZiP",
  "key9": "26926qQXk7rybwYd8kFcrNvCAHs1xeARzE1Ew2FieUPeRUXddxyXFm7LUog5S1cZuabY8kzvYeDrdXV15avKAyTh",
  "key10": "3GTBo61zPAaDFnFs7R96dNexNkAUCjexV1QLrELQwWop8bHVSBL12N1axtt7T9TJ6PWZVv8APL7WoRyQ2Q3QCzoj",
  "key11": "23xYSyoXL2HacEr1DNGtwyWHcNGy91XTN6U2tUCK97tU2hvWs5EzxWxAhYYTqr1kVMhLs2ozQHqxCXmVoeyenTid",
  "key12": "NpSod68xsXA2tAhJUhn8QqB29HUQzrbQf8DirSAKUFLdZdqz8DA9DEnxiQyYPKCukHNK1zos39LZYvyqxyjXz55",
  "key13": "5vw8ANnYgTJ4xC42vCCjPm1tzEJ84T3r5T9T1n2mqN9dqrLupLm3aMU4ahxqeLWLXvHsLGUWiLyFmwjzMwowG6ga",
  "key14": "2TEWsGBJ9o4MAcqxBLEdKJtM5vCiPWvnvpJjHxQ9Edp1QgkpzxgtrJpu7h24hrdpsuNi1FadBET41k6awW6fWAme",
  "key15": "VPmwFsTtqEm1tbRrnzWWu6ssdcSwBZTwx5DvDuuuNnCAAJQ15ohCoj2bzW6izD8btFTFYDeJkQDjUqSoZSbj7vH",
  "key16": "2q1X4NLPddu6Ptb1ev495E6udvvV1gkbSMB34dbDBQrgJNacgsjfApHyTsYXDzZNuZuteAuw7jr6nALFjf1Esx3B",
  "key17": "3T8B8CUqekXDUZM6ToQZLJ5LNqTxMRHF7SkZzQpiyXc4VBTuyoNvYVuvwtxPvbCw9yS9Q1ubgJqWPetKKMAeHGbj",
  "key18": "3uUnNv8CyXn3GyXxMTHiAD2b7K9NR8WhZuGV1DAdTNSqz5ry1wKruxPHhXzWLK9mQLo6n7nc5mf95o1ynKjaZNRg",
  "key19": "EBTMrjnNxvss84HBboQXrCVBUqhFRbBdPyX2CoPS4cMJ2takPA8foruysSfSGBxu248PJNceeegyARCGYE3PCMK",
  "key20": "2PQKzckmNgzcYybsmkKaBvcrKWt5k2P9Lq2FP5o38cXZYBd7KtMDEjCR6r7sy4NR5BzH3GYMh4vtk939Wy2tTNHi",
  "key21": "CBtDTioWPGkycHWvBqwQmbjd2ztV362TbV1pchHKcxwL22dq4vBsbKNyJpiXSdCe6MjnA7z97qiRkH4qtvasYoY",
  "key22": "5VBanZT1Zhh6V8pMqbgapwnGPCvRCTMaW2dSbKAXkLnqx96CcKaAx7CSj2ynBYhFnxL9M23Uu9JxZ4eNMezHs6DN",
  "key23": "5w29WYdt9yreSVdZbYLbJVVzqyh1EVRKafuVngyr4Dk6brNkjCwsGxa4LGW1SWp8eqJ1Ngf2Kgi4Jqh5SQzWbSeT",
  "key24": "5uTJqngR2RwvGgNBuibUihSKpqPVgjfdqTvLDNj5JMZsvima2xrGUcWjQNiKCu56Lvyw1f81YjWni3CnxZ7ArgNd",
  "key25": "XQAQBYKKNJCudv4yukMYbWNsTPfiXWzAm9sHTnHd2oQrjafRexZF2i8S1h3D5tcRdyq4Yv4fVAyuG77Tvhs347F",
  "key26": "Ekve6HuE2gj88rbtbLcvAd6WFs66WKBFpMydhJKfnV2eKm3HJuRjgWarBToBQLJ1riLJZd1aXqrW42qdyMjoQqa",
  "key27": "588WR6RAJcsHgvZpQNV824htG6LKrLBqWzqBQCDup36WrJFr4xQQ189XJrz99M1ycJ9FcZUyA5qfZGcbcEZ8wefR",
  "key28": "v7V56n7ATvYqqJWLhQeytunX6TsbWR9nYbbrKg4NCaKea8uptK2iZ1C8w8wZJLcZKMpa8wDQGa5dhS4tKivAkfY",
  "key29": "2BNfJ9oM4U5AQ6n5VGYtuG5CHuBxqnLmyKFHnY9rbmAdJm7iNq4jbUhAasNsu4Mpz9bjCQV9bZWuDTmoQG25aWaM"
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
