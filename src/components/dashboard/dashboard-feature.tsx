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
    "putX2v6PxLkbjxpCJRrrQ6BaFLndbYs5ovFAH1Ljphm8qzjUezwuE8EFiPerZgo3t4QqCGHH8UNFsPguuFKGDYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9UQGsZUPCxgg5iqzRcUYq6TtBdNbFBawszRz7j5SczPder2w9WfZkLJTHETkVf8nB8PTxxZYUoL4zxZEgxC8jQ",
  "key1": "48PPS36prtohQoa7ynEjgHwXqcLYoa1eTSHPcR3oYVR7Ttvpcf8EGABSjYp9LdzvRJCKgCw75h1Q6cArNf5rHpCN",
  "key2": "5MpdqFLJNDXtgd6q9ZU4QxXgyCuXEe5VUvbr4nzk5uQLUfQF6gky3ZcdyG1Vzo91Ek4KC7qmgGNqG1TRskcbDj2y",
  "key3": "5Ddya5y3dS6mx3wgZ9hjEbRfnqtCcGDC3mCp8L7rSX1bXMaRtqcepbTP5Vi5BoUsepBM2iXes6BmTsfrhFYYotzK",
  "key4": "2E9QVKpBsN1sQzNrwUFQcxiwqQbPjHE2WkQbDnwknJPiKWdj3yUozXqvV2czL8f2SurqbDNaUSYbRJYEhnABpm5s",
  "key5": "4cmXd9YDbTMdz7q9V9LoWcWb4SEMDCwSV6G7aR8Z2H8dVYhjqZSj7w1dc83hLGELH6pxZy7zxMddo5v4dpExNXp7",
  "key6": "4m9jxjaWbnZp82s7fRx1KDpwfSk6fLf4rN5dqZEz86xEtgNEDo9q1fpDnZyWgE5RHWPPBVQmMJnZKdB2mFBJ8rJ3",
  "key7": "2AGizwiZUsXaxbQym9E2Wi8RG5zpFpDHPvrG29fpKFZ4dzY43H7YmXDnuZQUySgVLndnm6z5VRoqMfaXYwmoFzX7",
  "key8": "4eUxvxTkiJwPbHNnrPJ3uHDYQAQLsWctotwCCjH1YGX7EN5fUsYVHxPCG9L5NakYc6jhFerpQvwGm9idxoBZc9GN",
  "key9": "3gdD2VKkeSda1sAJNHUf8Bf8zCNsfq4VhtNxyP3RjgZAFCAAhzbATN7Zzg2FKVmPVFcmgJcWPmdCuLtFy5UDkxS1",
  "key10": "2hy26ZGnzMT6HQuAeUgg8UZqH7E7CKxjECySwLJif3oDDzjoBsemXGeeEL6L3ZywQsCTbNzKGJ9p12HiBwTUB6b3",
  "key11": "2QcfFBfmCeKoyFLMgXjTtDivzdx8kVHS4hzCNqxaeGD17JHjZcC1gVEmuwdEfsTCS8zSnxMSys7JRou2DQ7Y36Up",
  "key12": "3pM4uFmRuNhnFhS2tZW1oEBC6Ps7VACjoMj8oJpz3Y6vUNrp6fBHJ4rNK5fh2yPaW2B9YZzq9g6nVxSHJBSZzTv6",
  "key13": "2hLJHwS6VdAL2gvGSXQuW8Qp897W7vyR4FKEutp5rFcwCHgeicUSKqPiW6ZZM6mivQLifvd56Ktk3DiRXBxxvyEh",
  "key14": "5SEFaiznrgaEBAery8LDvUgB3QY9WJJWtSwfs6Ud7BC9mdFXzjQGdydzYGCtbPkk78HUkg5PoNePu63SnGASw7Fr",
  "key15": "4dhirF5MvGjkygRBdnPBz5qbKV65d66EA1sj1nSvtakSPJVu9nt9eXGp7HCgjnP5LgYsZX6WDbEdjcSctWQ5L5kr",
  "key16": "4w3GwH1VZVgsfDTJ9v5oJnP3MCpq5CW1N9pp9Unr2Xh1PALjDFyGn6CCbyFgeBAYVyWnMJsCQd9S9NAHfEzJpZ5Z",
  "key17": "4n6ttSaKLhgcV7oafjeCjs3oDnKiAGSJjzeLUU9XHgTsi2E3mjBJrVhdGJajeeS4511jZv24erBGUvqdKo1BswJR",
  "key18": "xpZcKY8pVv19ZTKsNivj2QutwoCEiSFb5travNXYXaWMViYxZ4jBxMB5gtofVtcCADpHtaaQPuzdT1MP4hFc4nE",
  "key19": "nRRxeMn2yENmjm9yGu77aB3aj2byxQgXxupH74cTPBZRUYXVtvMZTcAkUarSGpSSm2vKBmRVtFx1Npkw3q9c2tE",
  "key20": "67kBfFtMVDsEoJC42qbQw4Sxc4Zo4edbEKFs3WvfCLYePv1hmktF75NcZMazsDpLrUsEzmVzHLduCarneAQDhBp8",
  "key21": "4wE6QkU9wJuFUtUqcd43KxCgDpevb78ghYtNaj4ArcZTEaLQpXorcizV1ar1x33kcGiPJptNrVBL13b7tX1BGLrE",
  "key22": "5egMmzZZpJiDPn7TKtQkDtgFa7XwekVf1G4NXX8mHbizJBR5e2Yhh748wGsazXATRkjSLA9oqAj5hWGAD9gH5bVt",
  "key23": "4jJDMyWyypt4zfiqGtqeuU9mbhTXQ4zYiXhaLGcuBhAiQMBvGtmgRvaXpt7wftQfJypfRnfzmBL42H44Qjw3TjRQ",
  "key24": "2LBGLM2BNJLdQjBS6b5nHUTuAKKWQbTTWmwM4KHsQaeLUUpq7Vy7WXLzi9mWMB6Jy3wnrLme7CrFFC8oQySPC6e4",
  "key25": "4hy9hPeA2kR79U1T2SUtV2G3nxnY9vwUqSuasrySKNjdMPwMcaKyLRYG7qXcaEjVxc9s1C2onMcwYGLDAKtqE8N8",
  "key26": "34KWZD5PBxA4BJFJg6R6o6TCNEvqDTnZX8KNjdocDvaAjJkKJnwqJ2C3DCmLrXhy6ceQmRF3RDCPATpenbyBVKR3",
  "key27": "3ejGbaGzr1c8HJZ797K7M9vgeTnfcBUDgsfPNnuaJtBnhSUqdjprCrrMtx9pTtn5CYhbVEpwK2X3evDcHX4QfSsx",
  "key28": "7cHrU9LF4EHPwzyNuzbj4K4dWKvsBiJVX8Gmjob4oNBNnkmTX6FA2zi2fWXgQaCKc1Jfq2wmDrShX9ByMXqm3hJ",
  "key29": "26hqvWk8ZNUt9JSxvt5jUnzK1t9e1SmmcjdQk8x4DKSUpjmwm8D7qsVyHQ31BL58FouMN6YByKB3cJPvo3QNABvP",
  "key30": "G9JywST9tMdwd9jcwjVVjeKaLvGaCLswFQ3kRLKdGzDqoYmBky7zWKjuuWLw36bzvXQ3c8tfDmEpXGM8ng2qBVQ",
  "key31": "38zu1XAgnmWvMAjtEKPm78sC3XKwowuA8Yp1Qii2wbdg3CG8gTMTLhhmMtm4w5ytyfjWWQ8HSpLpf144FWxknBes",
  "key32": "3mde91Tu4Hap3hxMSNv26DY5JCLeE2ZpB29ea6FuTcgFJ4QN8smPzPDJTRgtucZHPXry9zH8VSwrLfKHVK8NAoES",
  "key33": "5m4JLhvvLjVMtFSQfU1ZscQZwEQY5seh8odjd8mojdTE5GjLVYuHRqw3uyhBBQ6iBCHrZRtD7SAGLQv4Y9zEJuMV",
  "key34": "2TJzfbXQL5NXuPpwvFEwDJBXX9HkK9VrQSx2W3vJXZHXX26Rb1oCYLpdC16F3WuWX4KR1pyvTZ8WYWs7FxiJHU9k",
  "key35": "v3cT8feYqE3ZjohhPMabqUbCzbx6LS4EMWhuoauWXkXeZMG2wPAE3AUt646ufATn7A6xEVUZY5jcTCHm5y4kRw4",
  "key36": "5q3mPUTp2TpZoCUpEABduxDmXYb3dfnSjib6SWRbQEDwBoQFcRUwBw9KG6T2va5F5EA9Yvs57PQCtBDBxyyu7qUW",
  "key37": "S3XaJxjyrUg5BTmeXijoT9susq16JEECzYHRAcBRn1BnApYdFmQrDEu8jCpzqqwBaLSY5dyoYpWsNXBRFSZvfPc",
  "key38": "5nPGP2vK5XSxY9cF7VCwaAatwaVKLWtA4TU8q3fMBVSN2qEVkoWnrEvsKHKrJK1EgqswnS849tYWT6mWFymq9bLj",
  "key39": "5bagAd5d7DCSzP9iH79nfhv9qZq447MuNJJqm1w9ys8b8kKsxTjoUpWgC9bLM7vpoY9fRhWod7HBAFHwuRN4tpjV",
  "key40": "63wY3QZsNgxJLwSAdw2fAF2PTWWw7RUEpdxoixAM3kGUgYTuqrpMozag2QVehKtGd5pucUXW81mFHSWQ9qbdQDd5"
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
