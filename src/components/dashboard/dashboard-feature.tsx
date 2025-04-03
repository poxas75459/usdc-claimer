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
    "63XmcG3c9mAQSz9nYb8n7nfcvGVjRDtXQTLzREBsjutTfB6y6E191BE6icG7UVZXAVpfVzujSQ26NEvjRNerjyG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23KwYhjrpd9UpRE8T7gUhdkbcxfio7ZLnEVihWC7aKj3FBJHw75sezd2cq3NHBRMJ4ZnUPTWdyGCwm7K6p9vreC3",
  "key1": "2RdjdJ2BDc73k8pwkp1LjWwPkDNZVjeeFUmHMXskCxmXvniFtAEyefRrvmmYc2HgzGBHQFCBcZrKgweeLsECyP3J",
  "key2": "xXbGjQYdfduygNi42FvwnrW4ukyyQUSmzbquvzuRHTFksbTRkdiVo4tUQmzUvMzZZrd3bJxVYkpjf9mVXqEfe1K",
  "key3": "5dF1mAcbZTQwYL1xcNWZ2QfngrDZAY5QRv88HNx13NND7NYtSiUvPw5cWCXXVt59jXAimXmUvjRkcsu9VwFieME8",
  "key4": "4yy8hGYnn1grH1qvHmZVNNX5dC3K3wEpfwy24ws7daSXZ8wxmv5W33FoaEPdgGcP9Y3tL6Gis1MJ6MtueiBEu9ey",
  "key5": "29xtWuF1ZDvZ8zMHRoFvvWEeXh4c5SyjB8E26byXx416CJFWhWGfbuBngbL5Gbz3dzAgqsLft9cnzu6eQnj6RqQi",
  "key6": "3Exew96qLpzsvrtnvi3uHkBpwtDhCVJs9HgHJtCn2dze4FxrLaADstznPJ2cB2aY5PJMpthr5TwQnAgKmBnPrHBS",
  "key7": "3it8dk136jP7vqZVnWzHPi8fQZVUTVTwhwTZNMxw54cnd6u1BtcPWixB984cvRPbLJUwryYW4T2zqK1bbxBfNymY",
  "key8": "2aQoLqMfuHXyHWJcqqrP1urDhGuUcvXqPCcYqoKtokqhGUpZUEANJtrM1XHwRMJQz4CxCaQKjwQ6nN2GxNMMrFdp",
  "key9": "2DrLt8kn7YE3jAcbgaECrLhAytbqDDi44SFdGq12frmoBaqaa4KokrmJZUbaSwiC212xGtz1Hv2rfx91yN6eMMCL",
  "key10": "4mPV5JT2ULh6RAPRQCbSbRjZbqFNy7ytixrfghYNrZtB1zfB3zqyy96J1uyDJkx21AdHY8zAT3yMgK3fzJ8JnG9J",
  "key11": "2pE9R1d1xZkECFVNLtN2qsZXbxhzXnzXcsEfMwUpuqKtNa7NHdD1t9iTK5sAFj11SD7NWTKGhgSg2Wbpp4N2fwpA",
  "key12": "39ZyJEP75KD62X2cmAKubFYKk4SyRcpzQhNDcXVJnUMUosTfjZCkoYSsNML5cZkQL1u4aPegVhS2AcPKo8jERhrV",
  "key13": "35J3oGTsLL63vbTkVBbjFV3P9Dz948MEaCkcJemzX2vYFJAYS7KPsRvD4hvuMQSRwdFWiQmqK7EiQTcnf29vDEGc",
  "key14": "3TByWBstsRwtLPszzyyyB7mXRAPTPd1Z8LjvpSar1gyfScTzi9seZJPB4fsNLnRqZ5S18EwD3pVxUsUgQ1THMB8w",
  "key15": "2udV2y9KZe26BenPpmp1Ju5SeZUTmPavMCxpv1mUuADUN3HGCRDZuD3eGLxmH5HoSFdfhM3Agdrz4QcW2LYatqRz",
  "key16": "5WdZTQGAjDXUKbhacizh7Urw2HQkQEZUbvoE2djuyR6xZ3oNtNoBB9jdjVfx5JWvCmZdpfoAyEgxWcS451Rew3sN",
  "key17": "gjtctm4tooR9PSZvGLPGqdBS7gn1NGd38V3fFt6NDyMQ2ddiJ1Lz2PSFNHqABCWiBbWUrc8ZKZb9XmkaSeK6smk",
  "key18": "2dowSDDnf58SRCqq3uzabEtQ2cPwDfZKZU6LyHFgU1M2yvc8wXF12aad3ovLLfP9WCske6oxoZ1N75E7jE2ET66T",
  "key19": "41qo1SGVbC4WskfyWBZdRsesuAQcfE7BXgc563E9viEKNiBf1g4rUFos59zAjZkW3vFd2213wdv6JWWaPoMjQyim",
  "key20": "4CSm1VbVGuWJ67oWQunYS8Y1NBbPdDuPPzB8ifid2eL1mDdrYhzZKZXYUos7WkWJfrjMMExd9sGX9bfUSGrXKsm3",
  "key21": "61EV9328KRCU9iNh8a7JE9yKY8gCydZ6u4v9diKC6HWHa9jo5DPsxt2RyqA7ZukKyHiH4NqevUwta3KEkaH4tevN",
  "key22": "536saRPGCt1kQ1ABGNSdm4p14biKYQcwJGoqWMWxsvzBnhLi1yzV5FnbYzmutvkFFDXstHNJtL59NYzbWNjF8Ccn",
  "key23": "42koUgmoyUPYyfYcmpqaySCbA1HoBX9x3f1xeF8wNVHGrav71621YLFnyU81RQhQ8CoZSUDnC6bgEbKAAC3Jh8mG",
  "key24": "3QXP4PrK5yH47Q494kufY949uVghgiBCGCVdJZLurkMobatxds6aCogzRKCFK6PhSV7e4gXvyhVu1xBQPD7CZbCJ",
  "key25": "5cvh4rDjeKrZef5wK17HpynYvVK4B7pNNAJ7s4jzU7xTeF6CRz3sSFym3sd6yXGnxvqV1ch54QdqzoqnW55aATci",
  "key26": "YYW2kkgJvmGQUpsxpMRvHe6M9LrSXPu5ZQieTJLy5QqHPMRDL7JEijePiooS9bftL6bBtDohdErsC7TFL8Zn6sc",
  "key27": "4Ni35R94NGnxLdBkzqAPn2BHBouoMArP9mbyJ7LJbXDW3KVnUZqrMfX9ak6PxYKZC71AGUL9KdZPjnFnkMRYXM2a",
  "key28": "YBQXZniMLkhx3FfXFNyfVVjBVmdUhyrL7fyAYzeHk1C3MDpAijznHS9n4jzr3k53ejnahaqNwpfuVNjMqcz8Fwh",
  "key29": "4sFsQhsg5CMDYU1vJTQCkqv8TNzK3GnRE6DgNvjbcEoG9vTmYqJZufrWJ1xYvCffKir6q9esMkmGqQUtm41DoWhq",
  "key30": "5R9Gqi8VnGuG1zL5vHpY4SAcngzKkicRPFWSPpzXt6n1VY9v7itSnFEaFeydameWSqYup2PyvgDfWNdywrbfFEug",
  "key31": "5oc3sF7HTVHRUHYStvN416Qn2GdpPBNt372SEg1U6uwKEvyAW5EaghyoZac7WrJYobPRtBWa8NC6HugZMy7EF1ES",
  "key32": "oHonJsaQGJUydryY3PVhUod4DgEXtsnsLZ95MyVR5qiorD4NP8APBFeZabibsd34NKG9EwZGYpYwtmZAuqyW8S2",
  "key33": "LtsvftaenEg5pABXjmVYAMns5cJ1nY5E5mQFzWR6aDU81zAkTebSZB19mDBGphGVpuJM4y1J4gyiniN3Lvkwiv2",
  "key34": "EjxkpS6gLgdzzEVtd2AAGNR2XGCG6mXkmciuvPBdQR6zNNmT9WqgLkcmgBGXuRyf6qtQQK2DFozTD7g53qeuDtX",
  "key35": "2nDKWNepuxEtpvQfGZzJtpRms2HZWekdFap993Sw4ToghDj1eT4wjEz2KYcqAy8ZKGfay9AmjRfsCTRfi59DfdK7"
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
