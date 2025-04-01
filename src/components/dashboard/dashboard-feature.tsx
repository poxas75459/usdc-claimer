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
    "217Etkw9dzkzxBKwgcZ9ZF8eug7zSne2WCpUvEJzsLxqDGyCrivHX4eNYU61N3gE6gRo5aqsk8evJzR6fh9WX4GC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCTSxCyw6C4dc2mjArFeEYLdDVHh6PN6mTn2EVpqughMshParDxeFmnGnXHXZE3j1YvdGTRjDy4ZgJu3uKk5cXA",
  "key1": "2bcUTDGXYRjDWqxkVxik5mNgBWfe5sptU5aep7toSZSHHum6kPmYvxdDzzgAJCDx8fjA5W9hDzhTDoNMHnoCqA79",
  "key2": "88tFfor3yqDZcm6i4g6pwi2HJZ4yxwBkrtusQiGuZmYHMQDWQPe5q4sNoMuYbBXVL3kuraoUL4JhgfAhcHSrRK9",
  "key3": "5VcKoB5yhhGX3sjJB9GgzMwQ8huEXTm22qmLH8XHcPMNeYYqnSpWiKjUw9KUH9pcyKhmqy2GDpPKYhPhmioQChAr",
  "key4": "2pQ7nueiTGWQBCLVidQZ2nGosiSMGUyCEjNG6wiXZX76VUS3ErpdkqdzsoWUzCPE7BGUqFvAB9qzNW3nojwcpdiF",
  "key5": "4ydcF4EwpQLrd6ytJfxDELD6jCuCVyT3VnxhjNgPXJTW448B5FwvpPPyU44LEWLVa2tMozMKhWZhtwa78YxKke6r",
  "key6": "61KjQrT9K6EwSiDwnhDfjviq4Jkp9GG6osgRG8MLtZWyeX6gEuTjAVxEe1JKUoz7nLk1shWqPsQ84LWjuwzcSjav",
  "key7": "4ADcjNkUSjkcyeoAVBr9o6ENiY3SmcjAzzCi2mnRop91yemjYdhyo4YUaXL7JfX1391c2gTZwsymUAq4eyngB86U",
  "key8": "y3Lcdv8Lj9w2kKSvzejy79G1yEfv6yscMQUE9RTZS9sA5Gu1TDi9hRjdjHrjveGUbUJWhzsCCiqwMd5vrv3L5rb",
  "key9": "kvphFG73iQkQcFW82jmF3Fevpe69u49NvoGCQQGiUuWtqhTRdUU5e2HRjqhGcYX4jdWyVukrtryZnHAiYeDUADE",
  "key10": "63CRGRKbCVfSpUG6U2Hr5SBcjT3yKT2cv5Q84Ngd5y8KxVQiSDkyp35w74gnzQUktMeqChMkK5FsJmpNPRHdo5w3",
  "key11": "2njQVsiuUpL1byH4NKEPNJeMTEtpA5jASNRRK5SVTaQwc4RCuSgLysJuHHTpEUEKfVAfAxwNrnfcbDH5bkuA4V4K",
  "key12": "2fufrcHFP67YUBdhSQH7smDnpvi5NVt2PS8vWUgii6qFt5rPgaLPLEES5SFeomDiZrtH6VzimArQNDDAf6chRTPb",
  "key13": "4nh97SKTsGBEqFdzftKsgXjpXDtGEmW1Pcz6hQ3UeBJUuxDP7EHSK6zkGy4b1tqKao4Sr9aPqVxrH4dn6F8ags7W",
  "key14": "3t2qceXF72UuBpBVPSnacPAgR5L7ue4odaPGUSk5xFwHpPShHxBrz4vynT7qnBSsi5vLAfKyFFcy6taBG4HfdNYV",
  "key15": "NcGp961dZdqzYr5JVUyjqpGQFCLYzB4drFwxqZBHDaPhGDqQst9YVwrMEN6GaU9Zyt6Mp2nEy3owCWRUswoHbJG",
  "key16": "8kQUGQQD5JDTxtrEkXAgaVTzXYohkCBcbU2jprSBsgGbQmHrjveHvbJ6q5zc5vkVdAVxrdhcoMr9Xprcpjg57e2",
  "key17": "5Yf6W6z41zWeBkfgna3E8jvMr25W9uTJB1wJ9LgCcxHvP4wnuMFbc8TEVbU9syaMFkBPRUBN8ejnwR6XtDJqmnmy",
  "key18": "5At3LCjfesWBA9oXzEPXiJFG7PHRsgZ3TY9SteQig4r1kwTCjpP94wW3h4yZyjqW6QsTGjvZXVEi3fNh7JJvSpfc",
  "key19": "2BPCrfRRRp7T6WxEJjU8hH3WwfXTJjZPMsu6BozAJ83nCiqtqwQkdwBhDnbLwCoQ4qE6q7EE76cunJhms3qe5xqZ",
  "key20": "2rLi9eUWBhCeUQeW1eERVZeBRumSpo93Xu7oEgTCSFuKuXHTqJxwz8fsoGv96MvXUxStiMk6a6pNaMgCPweTW7q9",
  "key21": "TqAHGgr2sMjV5cj9zBR4H3siKUYcS3j3q8NRyEiSAfn4HvPup7wHSry7CEw2TjFR9FShatt8XoTmBQ6Y38Fwm6N",
  "key22": "4wPvXM8cdPEfar7qumtrm7MPVjZddbWTR8yDKVvCTikV2HHPZaGBPhcPkmtbujVWiEFywdHZrUFDTsF7YF9Mzm63",
  "key23": "p1BdGaSk7yJUvgXJp4pBN8HmQkdaopKLxuBnH7UbZPDemppZGrduuRoYeKUX8yTNR6Jq8UUua3d26qH46gjz1H6",
  "key24": "5i6kLduJrbavPSPFSSNBTxsbhwPGVqwccDVynvt5ctt8KF7a4Sc6Q33XnZEG2mof2dd1tqBuWDsPdQ99fTzqYe87",
  "key25": "5nv1B7cYayTwWUAzVXVNfFQLfvbRerSiw9hvcvg4PBimou2nLpYTgFbgjX894G4DgUchZR6QCWjsKCz3ZQS9YXPw"
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
