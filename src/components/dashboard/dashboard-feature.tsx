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
    "qmcNtsHizwnrTnCcK6GaXA9e9grAKEoVhmPXR1XCXeWwNG8tacjKBv9fBR6NwRWD17tFFsDfbPKeTAjzdD97vL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66j171PJ2FE1wwpfYj2qDzXHCU9ued4CidNBEhV1hxc47ijxAnGeDhP81yRbjC734g6q2v8HADDBUFnSR4nXSGv3",
  "key1": "34mHsh344zmNqjrno6xUbZSirKtVCNv6KKHjdCEtdXmQkfLo6vzqWEJ7V1Fe1PcnnuFDFJ7vNjEfBRyTcu9FVQj",
  "key2": "4DNxwF2UkrYydLJSWgvW14Kd8QqH7AXE8KQe35sy5uwyEESEUykUMyNMLvE78eUNyQ1F4dhsyCJR9Yhrj6pss7Lw",
  "key3": "31jXQ1HqPDya6teU9MwXHdS1ujdarRarLTpYsRpZnC1DA6zd8VbKNebMpDr6oqYCgiuHf34bWCXaFvJzavhCbj1X",
  "key4": "4kmZqA9SwgPSCRKh4CoRbM5LpncGCs4BPgJq5eGhKH3cyy4MVgMP4dgpmQQUS9nqh6QmsLYhRDtgqXAQKcddFFzL",
  "key5": "3cgxjgrgPtq3YY8oNvANsvxMD18TqzNexmLBneuR4JZuJ7T6wtvEp3jaq63bTnepQYif2QTMY9KzFSZUUce7Egfr",
  "key6": "5tefvmmj97VpDbkGerSM1yzd3kRugh3swpFuBJFm4M65yiLrohe8kEHK4WVTZWaUvUQomE15f9Jq6qkjtP7CiKcj",
  "key7": "5TQNhyHWQKTEULa2QC5ndmeVVp4eK7USEnnmKzERa1jpUeNxSHAaGUHc9GDMzrJZCtBCAJUZsySNzwTdEDSQM6fs",
  "key8": "3QmhPLrNnHYjSHwjb3BLs2Z8TK422Q31SkQWBkHkSPVfo6ucovsT4aFQogwde93Toa3A813vUqGX5kQcknWcoVFg",
  "key9": "NmzTwVTppCHWiYoap6XR44qYLxus51aN2HcEG8jftLFf8Pu4VjaNeRGHy5p3M1MRpqqW9ghzoFhanvy1PVk1pNR",
  "key10": "4etoLjLXidnyd9aQvE1qf71YfEjZqpkQJuCBnci7mXFDFW5UPEq78CvggQjfniTUHLT1UENjBfrDHU1dRZm6ZYfN",
  "key11": "2radc4g13fCiv5hmjZJea18JH445ko9SgouUAQexb6CmChSEYFnjou97iuDg3VkA7648AdSSCnFcUx38an4VrAeq",
  "key12": "HaYzi28uxidzngNG5Ed31C8UubMWz8du4JdmwQsg6RUNc4kwmV1nXgLiVVR1E8FFoAyUPk1M9X8tsoc2rREfEFA",
  "key13": "5YdM6vbzYsVwvqCwPQCc18vDgLdGc8qhovKmMAZJMQEUd1bY9be8TFcKwvJ6XN28go7eQghufP6g8X4M5i6mUeFt",
  "key14": "2pwnps9wzJnhHn6H5FYg3resLhzARmH3iZkMzNXEXVBu31rgZC6nrvKs4n1UYQkDd61NA5SrdKq7g5fbcAUeD9e9",
  "key15": "pKRVojMoLVYheufMB4QmJjdF2xpPqnSpTntvqGzWgPKbg2nvDnvgA7sLztsBBrK8ycEreEciz8oz1RoX1sLZJhr",
  "key16": "5bxFAnDic1niGvDcqzRbuMQDRH1Gc48D7g2ngdTc9VFnfsfw3tFhV1UFwio1pM7JRsii3Gd3nJoSjzq3CYVjbGfH",
  "key17": "a3GveExpgeoJzY7x8q6dagL68Psi3J8LU8c6t2WLSffdB5bKQuPaCoT2E4HcR4ZvLwXCY1MMcKYaLamHAvTbmaK",
  "key18": "51bQB73tiojBmFSyD6nv12tV678T7NJa32hmoaBLPcbMT8pMXjr83unFBYaSbyrgophWANDR5yTebfni4awu2rve",
  "key19": "3khHZEQ5WBXr11WiPNmNp5wR4V1MTZivDDciVGHZh4u1czBhoPj5btakBgDpPV22qY6S8ye9dG6VA3vnsrPM3L9x",
  "key20": "4RcC1f1rtpGjuuQJePYa3qZzixwM9xdYM3kELkLEyHtwmQiqbwBnAxpNcZdz5rmqXz3JFvJ39TCAnetmz1yLUaSB",
  "key21": "3QaLrLVtZo1bPiWU7yymbfh8jS3EPgwkMdLf77sf8zPJ1uY4mDi24h292Hz9xF82D7k9E3xUMq1wxNeJ59SBX8zS",
  "key22": "3RiEAtBmdRPzYcnYgzLNNcDjDjh5SkkeoNYhhhbLPAWJ8d2sGCnKX4aFTekAjt2PxeHsrSWuvWcne1vvznMVeTwU",
  "key23": "2yh2eG2AFyqARW6tGXZm7AdcxYBh3pLcxrKqRU8WrK54E4rbLdR91iRFK1SoMNp9dNHPiqw3hjS5Uu62Fd89iHbz",
  "key24": "5cc4LBk7Dn2LcGqEWdmvnM3VVCMbRSyqvssqHp5VJfnRzhFDeqbJsoi3p3g8syhW1SiEMRdf2pT2365TVbwQPNwx",
  "key25": "4YNALBJFKvhQR6pih9AF2Q9RVTaQ4G6xgWkPjpd33idhJbDwXiBRSTJSnCJTQsMvvCnUrb8gm96otk8xGEb1Wyov",
  "key26": "2xYgrbCLa7mV58T2W8KrYDYQ56y64qW8cQqb5yTNz4xrf4upAe1SKByCq4rDGmufCHTx6Hup3dU87NWLnXJD48Db",
  "key27": "3eJz6oGPd1WsEhixMmWfY3yVKSdZYpnskYyvz7rTBucAouFwZgvbpajEXZVaZbLWe2jYzym4PvwB3VEniVd3oAKa",
  "key28": "55trhiVpBd8BUwggHvWAnCrGJdF96boAfL8Nuch4JDVcoLMyL74Th5zndtM7wMRtaN31BbL1Qce3E49DsRQGoN2z",
  "key29": "4zgyGHuhs5e2kP7SxYT765yccpRfvPgkcJKgsiHzonjxUMdKj3d5jdn7S4XoqdxrtEkaea87c6jRa1yNiUcZjZgb"
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
