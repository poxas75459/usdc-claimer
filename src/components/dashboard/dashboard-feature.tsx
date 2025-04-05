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
    "t8yLBW8jDXKShrLWCNFYB91FnkpnsDPihCpawYtt8i6dtCfPDNkZXxsMn83wrmaGfDwzqGuA8TP3hZeNHkvdiEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uqtnmJmorAJ8XiS5AnqUVuDiyH4Gva7HTTNKdxa7oHqnWuLF1VBTCKkVrZmxJ5NLPRRvoikQWbumNa49GCNgXVQ",
  "key1": "2hwrG24atqnJ5BFg1iU4ieY7dMRibu5p7LQaUngqCVS8AmU57fTPaxZShpMgEioPbvpettzHEWeJKqnSP2UMcnrY",
  "key2": "4vpcYQBkciHYBmRTv3BJhpv8fCpYBwemK82rLppjHKKTVVjF8xPFU4aPXNevPBvAeSEWSsiqQbt1mnDeAfEYq3jh",
  "key3": "2vGKr5v9pFMYwhdCucDKAwuXtDe5xKAnSKmjZBnX3ZeVC9rXebfgwpYiZU2ZVwXgng8zGAHUrubr5EXPrXqeVVrB",
  "key4": "XMQBNx2rBUbR7yEJvZKMV4Z5BN2VNuuVTM6hox3mE6FVpN2hHqK1WspjeJ4vsqePcp29pCcPs35TvrMH1gL8J6C",
  "key5": "4f6a6R6qzgLZquqNkNt9DJXMC7hfpRFHuYvKh98NZHuvToao94ifEKXA3Bp2tkRjWk8JyRWLC1TKQYTb1Qc2YEz4",
  "key6": "3RqtrR8aDshqR6Fuufyi1KdBSCGqNWzf3JU7umpU1Y7MHWZLeiS6akdVtL2novDvgEi1krbMXWQo6ctEJuaqnHDx",
  "key7": "3syBJ2Xa8jWj3Wua69Y1KSSCEVXhd3tt5V5FvUhtznDNQd63yseAG8VEv5bVkRaUp7oVbCLFmBQJeqZq2ifE6fcA",
  "key8": "cnRmpTT6d8u3zDUnXkrQzbh59wuX4BN1nQUEj4SAWMaBrsDnHbC5tXfeFYStyHMursmn5yGCc3LP1wzwsCqUTqd",
  "key9": "3rXM8ocGF8eGe6598sJyCYYiJyRAcFfATYEZidQZNhArU9WaRKciAG96bKfNd9nBUQ9HAuCbuzaCCmose541E73D",
  "key10": "2Fdv53tYhqpLv6Bdgrfgj8GDZ7XqUuKXkjoq3FDdUdTc1dbULcxPYW9hoNEctvJtgEgsjDeirCy4swjJG9bN3g9P",
  "key11": "2gwyCwEpR7zmR6RGs4LgQKVi6hPZ61BFqn4q4NAeEM8rKXEM1P7y3TNhgH8FG8Zx4tnZNVphiEKQCrfocrB4pEgw",
  "key12": "3f2wKvgBgGmhqu9JDJzkozfK6wi1wzkebP7xvut86Jrvbj7AWXXWMAqqZ65KLpJkcgKdWNHddibbpGk7MKm4YkQg",
  "key13": "4KLkVi7cwSnQ2VfZckhBJLsE3L8htMgkyN8K5JRoMU6qbPffrJWR8EMk5ZfFw4GwfKXyAXdF5xDYpdR5vS2wufke",
  "key14": "4M2pRMbFndQVLnUxv4NYwqGkHF1tM243cL69CPsnd7cNVM5ZaKvq9PdQXXBe6YzvMTSv46qW75eu9z82gDJw9fbh",
  "key15": "BFp5bzcwGg4ffUxTZAT2dGxFdVFcjs7WuGq7dVfysts9RF3A4EGcAZLJ3nt2xXb22Jsh91VJUdsBzQRumNnn8dC",
  "key16": "2Gr7SJwFiz9j7JuAJSmLtceAgcxSq2R2sum1mniErmTPd6Qj7mf5wNBnC9pUarUof7ykHQXwTABbaftjm9rbGaYX",
  "key17": "3c3iZbEyN84cyFQFS6aEVWMtaUH9GYDT6FKtd6TmBG6NNyMozkMceun9iivySGiske5rZhLC6dza93tv4Lj2ypSr",
  "key18": "3mnsEiXnfC4NXpMnmLb622uBQNrrWk7Zjd4QrP7FcxR17GUtKszALeu55gS2HvR8HDmhcef9qjK8x9KHszpnw3xC",
  "key19": "3Vc4pKC9rpmy8DWnZqzBXZJtSgeSnBYtfMF8Azj4DuHVcJ4FBrrEqNL2n7yH48aHQEnF3ynEzXjCzeYynyumDL7i",
  "key20": "URrSpBwRAfLefmUJw3cXXvGZDzdKdXxA67uCZv84vsYfX8VgJamTVYtERpswMV8tMqSEQqyyLuqEKRrAb3pDchW",
  "key21": "QghqFnz9srDMKhyLta9N9qPgQSbVQM9Scx8JT225B9nq85GoatAcVuh9nSnTKrD5phLbHh4byC9oUAAMJQCmP7s",
  "key22": "4TN9A5t5ZNU6qdhp6UEHVAF5gncoAgw6EiXgWtKaYXQpvKvJDk6stD2mRWns4A1c8YvTf8NLpsFcgBDcuuX1qrNZ",
  "key23": "MuMBFkfc9sBZNym27qTNSWyuwtZRcpZanDDm2C9d6g5pkbgcVJcPD5j3ohvsLt74T3tYmwef8vCJoxST9kQ2nFJ",
  "key24": "5xwH8AQH2D7CLcERYCE3W4yfJKS2PU5HG3YASuwsEaomKut3rZxHjN1MLTrvvQnpdmHGaZLbS3xftfsdxqURayQT",
  "key25": "3d23amTj6FuPfbWPXkDwmfHqk2KqHpp8SGezg5ByDXLEbdLb3cts7U6K7hXeeWsTbiba4LsPJkRCvrbAvsw5Ub2N",
  "key26": "3H1XHEkrQN8TB4PHDsSteep9FKiz8mxr5a8BJyG1NuAsLBzbVPLQgFN89JPQexXhKVF3487CPSK2po2NpqFLy7kr",
  "key27": "3bLLeXxmjFMiRk9owrkXZr6sLstwtu6USMEhrD5bQhE7JyGXbU11Wjjtc9kgsqa2SfpB3cwLVMwdipDGkHBDCx1W"
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
