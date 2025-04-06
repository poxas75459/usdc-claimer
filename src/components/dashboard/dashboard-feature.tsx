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
    "4y9sBxA2VmXmhkDxrV2fmPPMkGw8Ca5o2GvQoQHPLUEL9mtXw54syVYVecykXX9rpZ7qJxQeoNMyTj9zX6ehJCLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25kMhYGJZmHqQF3Mj6E9vGi3TZk2phaJtMVcZYDcR9QUHnJSo2V2nG8gN3jDaaTQ5sz6Y92R1EhGrBCm4qaq3J1Y",
  "key1": "VSJYeEr95K1fWdf2a9u5TVrqZAh4Yq3jnFCYAaWPMJ3JSkNmb4nTPzQERnrxgRkPScMbtjdHrnkyBCHWzYmB24Q",
  "key2": "4ZMDwbo4yCFH2LePVbGE7VWtoyGkF6rJqXDfCGoY9gkJ1teom9VLwduswjJMhPF4kY1c4tCdeajxEqbP87yBBCSB",
  "key3": "51KsV13K6ixFygzMeeBxBFKDvZrUPqUh49iP8Mys2HZatBRteyB8c96U6FcgqZC7NtSz8c2JJ4cUvEPi7Ki6cA7E",
  "key4": "sc43S7Bwy14ijQQZmxofXyDve3xtBg5eSUPTk9riRKXLauKD7CLJgRq7LYGQmrUxi9K6t2jJ2t8CvknF7iPYPUJ",
  "key5": "5cukm9c7bUGV7RZTi2LxmZXv8xA39WBhBi3yLpqSZ8hF1K11VYeZinNqPDguN31JHp7AAP6MPb5wocyxX166pwpB",
  "key6": "GFnFQ1LVSwwcS4A6KxmzWykKWwpfbMaQ6Fpm9nBAN1F3nkYaLnjv4GkdWXREB8Fpt86FQkZ7LZMZy3zsfmLzg5c",
  "key7": "4zqBu4BYSXiB7zzU7sTfyujnxmVdGSipaZtnFdvJid11PtXmKD3DrtB4J31iEQg6Q5QMJ5quPqaBvjnbCUnA4S8B",
  "key8": "2rWspR4DQHo4zRJCpATZEQ7oA4vG9cQrv4hJBKFTuyPgcBqa6Mb3CX72uAgHqkgdY47jzRQidqgxiHEqgKKKTEAX",
  "key9": "2xuZCnNM5hUUWgRCmzy1k6FdckNdFB1wgoGWDwD3hW68WkBkXXRGbUNFb23uCukdViQmC5CsC5u8fv7Gy29Eu812",
  "key10": "22rDTXTBHX6HdbRWKaac7nBVnnT8EAEouE3sApeuMtwmkP5z2bkVoS1zXLzPSf4o2FUaiimmrapo6PpscpebcgXF",
  "key11": "31qTtbJeJecGR5iLLZtc4iouzdH77gSWaVjvoHgMSdjw57vraAwU6TEDP5eaawiPR8qx3qKEruSS2UoM4Xk1UonU",
  "key12": "3ZCVTNsUHYjvyyvEeCnFeCU3D6PodReBjUKFXP1ptLMmFRndcTMiFPKDEvku3NZFxitCHW6H6E8uPh6sZbXPV93e",
  "key13": "2jVzJgoVU1E6MXbyvRgpt59qBZoyUXNCX5Dx2qWt8W1jmCCyGSMmibCi1rn9WMtcxWmbPAJuUFbaW5VBGZEpkTK9",
  "key14": "3272cJpr34KoSDqaCGwv1Qw4xs4aaAqaxfU1WWdZ74TBdvtgCThuwekUPAXHYdGkftRBHtQNK3Q1cuD4KHFWN8d6",
  "key15": "3XrZU2avcEtQR7Z15dBhGaMgQ6ovtvFkKoUm9ypxKXPDgoXXYPYL65FmGigaayhsqfQfmA3QCZQyeX28tfi6h7jd",
  "key16": "4YuRrSj9UzhYxEe3deTyg9yNjK1rHNDto3n75TmwdNPsUaEeYtQNjDRjAxJuxvbXaAPpiQ1YNwpbYMLCcvHrQzVk",
  "key17": "3waF5Rc87q9rESEUWzc38kyUNv6RzfXjfkXECZtnMDWWbFwZikToxeJJdcixD57DAxHAANi8AyACXFaowLqFSKev",
  "key18": "H8738yQR4T6Brx2TJJ7Jc5YPGwKTyYhgrA92ssCpoUeSXyTLVLEAN4WdxTB29Jz6gpVuwLacBmo8E83cwaXXoyy",
  "key19": "QbW3JUMT1k8nuUa2E7K4Ms4X5GqMQ3zYaGZrikgVaEmWufWsXyjpWVXoWeAxS7113JUEJ7SCWexyeW2oR2eAo61",
  "key20": "5Pmsc3HtexjVwRN1kGeqr6txR5LLunBr7CGssxXU2FrRiTbg177zNwYjqfSDSPn65FEVuyJ1pa8coNQvmZQGvz2i",
  "key21": "4uysAQ4nh75EVgBtSMeuvsDAutnkW7eN89M29LDJcQ1c9YuZGtznVxS2yc2uCCRSWkBiWJCf1mEXh2moRH6SSoQs",
  "key22": "WudSPcHi5eX6s6hhJZeoH1v2kbLBLPRYg8Mn4Qq2aP7dinpFBwxoeygfsRGD7p2n8xuo32WXGCf4GyQV4odvLKE",
  "key23": "46iF33P2LrKRFxjnuHJGjM1Kh1tvzxdXbxhSCdWquxdaFVNC4xtd954fupPbTaWUetDJXg4pnpenX9NFe8nKhtdH",
  "key24": "5LDcQ7pJfxe8NbwMVJWdgUZJgN1fWAfXXMHT3yYbNiqcyt4LGb5ALinjmzZXeh65mdRSRbVVxPiTijnzCkEiTPpB",
  "key25": "5EnYoQgFyJ7kRhThjDfc3vyBUREqBfnrN4jDaog8ardGaYmFQrm3kYQQnbTPfvPjXcTjCayKY4ht9DJeLKs4Rb1a",
  "key26": "4z6ZmNHypMCQUn2sYfCrWSMDsrJ3rZL8pcpKdaQGe3G6U9nxE8s7WQdRbrj8AD18PpF4rDHbYLt4SbgfJ3ztSngt",
  "key27": "5QGjb2XjH1j85UWoW5Y3uR2eqqejSjEuUwNnFiLkimXrhxV9wGcPUzEHTuHX3addb6ZAEgTEuJZEccZVTaV2B8HY",
  "key28": "RBtg1ZjksrAqgYAdMecrz4a4QLaWqmdr88PpE8pyYyGrG4gDFTmL5QWkLQTze1cGhGiSuNhThduVCcZZNBmcahx",
  "key29": "55EkGqhryGRuKKAG1igyrBUJpJbwwy7HmwvySaNwPg3rde1g58i3Mkf1zNCnoa69jGyHtWaKmugGmuEdSfnqo73E",
  "key30": "3YMzqUVo9cEAD29QfUBUtZGTrHWfMvpq78ZWvdHw8VS7Quyu9xFaYgVs626sraLU9rs4R2nf2zeVkPaL67psKPGY",
  "key31": "5AVZRTY8SxVRp1MuDJvT7FAdDjSCYqVyWsHqSiPLKyHpDxYzCTiNmafQ3bvsC6SwCcZDuoD1oQZ6P3cyRtFCe54t",
  "key32": "51kamxbPxNTvwb2ariz2wjmDAU2JHjZuHFEBrCc1wnQrrQRrjwTCwhUDcWBJ8YYZjwdxSjWLYUcquBMpzmdZtVJR",
  "key33": "36sViKZvaM69iyVzRomnTNYBPG7f82sfTDqCrMbKUMLvASedmi9j4KT25nR43qja5Mv7ZJAsc4myVzAXfCwP5yJp",
  "key34": "26fU8yMUYdG9tVXGNaMWiFGfuvyecC42YN8TzARLYErzQf98mRuWNvasPcitizLtqznRFM19LSnMEdx45ZjSGJMd",
  "key35": "5NfKzcMA7mBQvGaFe1HKcb4tUemBcbqveXbgJfnVXUyYS6PAGwGwSo8hDLPZoBEEcbXpfj7RhL3sCQmrGw3PGjLr",
  "key36": "5see12JmZHeRgh3EG5oJBAWcRHukC1GjLwi1CMEyn74ye4EoLWh8JHGWaEpcHZGxe8JHL9LxbhCreRizAuyKiCKw"
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
