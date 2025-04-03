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
    "ZxVXkk2SmPPqYfXRFr5t1PQ21r7kv3iACQbsF3tqeRzLdGjwPD6tzUH9BNKSJxoMkTH8ZL4zMwpJtWLs1YxDKp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FMB5dvyExyVH5VewjWMnzvmzR1dWED6Ev55z4nCzXruYzJEvworWudP1dqk2jN9yS6JDy4eFCTK1wFYUmckCz7T",
  "key1": "RjEbW6k7YHqYdy7coJ4z2JCwaoXiHhFz9KxGTzoBEL6oXsVLmofR2xiuskomTCzaBByEESvVRPLfVx6kMmhHruT",
  "key2": "4pBGYn7gi4vE22zpnqJK8EZdsuv4Q77iAHQV11X3vCJdD9WAq33FWSKNTstAAz9tU6xvHGGu4wr7TsUKdMSA6xPD",
  "key3": "ZQo6at53ATvzkcKYtRRWxsZW92yjnYEvm8j6gRX2pFpQkkwb6iBhJ7pw9YuGivwEzi9ZHTAEp9x59tnMRERB3Vm",
  "key4": "5ArV52xwD49Mpm4uneCJsFDgyXC4TGHKHRaDvsL41Wi9aiuteTmMqNbwLy4MPgDjWWXRPATp2jXq1QXaiR9jPJCG",
  "key5": "3ScNtqVPD31gAQGQ4ityBTdVKGsKXR8bHzPNHFXx9ei4Xj5DrWkVuiCgMehUYAm3y97v93qXAXpx4Th7sycyaX3V",
  "key6": "qdopFqceD9HMVaT5K97gJwSCDijvdNwvkrGEW2pKwC6P5vQVyiwKM8WNxWvKxQSdzpJ1QhuhxrwXnLoD8KG3xci",
  "key7": "2BQqfhdYt8ToX5yndTquUVSwrhhZyJS4zexf81bsc23HeU7oXNHSH2wLLSAxw4uMoXVg4HnrP8gQAMP4iAtpUGNR",
  "key8": "2YpkLiZ56gRWfATy7rAKGajZvcFVTi7oqNaKDL3ND6RiivTQabcS9H5NKSNKa5Fc4kg5qjDdRo4woHunykehgQ6m",
  "key9": "2T868YNyXYsA5MjtA9tgkz5DjdSBaQbgixR72JGZZJwZRfbTxdqtQb4RQ2iXgeiWQpt3UZNUsATaMwnuFN2eA4gi",
  "key10": "34RWpay5P58yFr8derJiV1AuMYALLGsbncwx3UnPpdhgZ6xV9NnbTQ8ALBHhvtJbVzyQ9ezJdm9qdyTaw8VphuBX",
  "key11": "4xiV8dukjnRFgSQM363odYjpS7HiHoj2H3uMyyV1ytR5VTqmmRS98sZe99YBsVgEqWtjuJLHqpqjVUgms2NyGjBG",
  "key12": "2YpR9kxSASGNwK6MW9o14EbUxwGsurcqZeBWrngzu9jZvzDYzsU84o1to5R64KCWKUVagQaxJjimV5wkrMF1LaJb",
  "key13": "sFAqbK9a1cxJMBYiE2Ps8djvbFRY4fAgUDgn3QN5o1yfSjBTYse2HJjy6LiYfk8c7h7jCTXdoHQzSkfxLoR5Epa",
  "key14": "YRX7KA8g6YaXBAH8GbwrtDBw5xJsm3yTW8eyffnXGzfZgnEo5HyCcHrw7XZZA6mE4PAhVdZ2wpp9tU2UKpH33c5",
  "key15": "3nu9ELHU1GfM8Eb2Z8x46gwKWdsNgRQ5oFMCLJU2VfuYa8S9UYPY8xLcLAD9go5c8cLxLGXxx3C829HmiLn7NDq2",
  "key16": "2iMxYEzrAxkPnDDCggj1S939nmZSWx1fz4Swebnn8ZbEYqwzSGffR2QsCBrfW4AgQNPoVZDVAHsy2MoF2emCuiug",
  "key17": "37vVKq6rCdDrdwmig5x1BNziUARAXnJad2pZUoDwVC839JJhjZv44BsfjQmuwKS4K2uFgVNVZVMkSoBfHKpKmyQg",
  "key18": "5yMb9sACL7pPAwpUnXxsVousLrq3TXeKurHi17chPWjf69eW1Vcwv22oy7ZJ5az1Ht4cy2fAMpes4Z2iANr35jKa",
  "key19": "5JYH2aPJ4p4fa3acaoVmfUcKx5pJxDsARKz5BozZrRqrxbEcFUoQvDqgbCyQm4tcjkhwaekW44ART6eXf5NgQcYj",
  "key20": "2L94JE7sPqiqUVjGmL32H9H4pAWjzmQUPi2cnvcUbigL1tsJiRpckv9xQ3fdVg683h8iyFjsKE5KQzDMNqbrwzCy",
  "key21": "5uLfC4Hipn8GEqErmwyNMnAfvxhfZYv7P1n2UfodbMxKuBeXAEz5xYYMFHzZxP9mGqJYbC51zx54HGmATRaq6zFa",
  "key22": "4msJKvXU81rtaqvcfrCL7yTibAbPNZXmwEukzANki17PHySuuZexa2KNVkxU3KA3WHdKfwgCGDD5TXP39HyLJwDU",
  "key23": "2CrJSQ3nBot3fUY8K4Qs74PdNoMgwj9p2xb1Yz8wnfvk3dcAeeWWarXMu2mnJwg7oxzuh5cQqgFYy7G1mqDaYADj",
  "key24": "5CJB8aiSWGmoxFzVv9VyGY1H5wdn2j2ekJKL6eJYTafL58faeqyVCxn8Pz4NHWmhKsUZA41Z7o7Eip3HbzpDMT72",
  "key25": "5QQnG4wUh2dr4aigV2hwEV7LagLKfcdQDLav1aQiitx3EVK4C8piHHagU9cwEzyaX3kuxThBo96RPeZNSwMRiEcD",
  "key26": "JPsYbu9GVcSUxMwQRKaLNYyvixWaHiEx88Msoi6RGuzCXLeNurpwS3EtZstCBFTRcfXDDP7h33XeNhnHYoipE2c",
  "key27": "3vjEQuV7FkpwLQiuaS5dqam9UJqmg3zD9nwqxDXqVUcgyputB314yZHuTmxEvVzkKr9eMeXyBbocfPbLVW5JoHak",
  "key28": "62qJYLqhqnxgVA8vCr6rorF1Qq9f4NNUCaVst5aXzePYaHYr6CfdFjyfn83D4PyKKPjAeF7NZmTvF4jtVLfpK3kJ",
  "key29": "DYdgs9pB2sefNJw7GFhfKfGkpcAe9uYZ9ionMqTdVKG3P7WyYtRJ4BKUb9sSi6PwHYeAXTjmyZK4xSFxD6gDMLA",
  "key30": "3RbEDoftgPW8EzKY9SHA2xNC7zsCw6yxDNbQQNhR31uF3H2yLi76tVqG735rcTB8aJA2Re7eFJETjFg5hSXCTeXZ",
  "key31": "4xwxg35yLsahzVKKpW4T3qKi7DwZ2P9CFXjEmi9SVyRQSsE8ZtqFYXQxNmBGNMx4RNMi26seQjVE8BiNgHN35m93",
  "key32": "59a9qnyqLTbefprELwNwaf9ZzXiZw6rs7jDpx8GvJYe7ZyEpe8M56wAsxf6RhM4PD4Uq8Ndsp693jVmsPV6MQvC4",
  "key33": "3mLpkeXz1of7MixuXtSJXVnv8LWmK7eoyoNk79PXMfsA68MrmRrF5ZC9zMn9nfzioE5YRsj2RpcuQwgrQF7EQF7R",
  "key34": "VubbAJT8s8Yi8aJUSJoWgf5t8Z5hsfgntTPE9YRDNcwbmXy5HkT3P2U9cMuiT1yge5J4kBP3v7LVKDogA6SJvB6",
  "key35": "48Jg6jZmESxhbnuFGsgtPctDqAnvz76tGqPGGcMRdGSShpmjL9WFfKKXtk5K2smMR9CBX1A8kP63D3BVfz4Vh46k",
  "key36": "65xGgdZ3rKCimqn9McNomGsuahPYKpAnpHGsrmty1PVWjkEKpRnefB8JDybHfwUkygPMiznKntZorf35EeXDtAfT",
  "key37": "2mNmvkg8Ku5Kw47Jzw2jWtdZb24aWfVvV8L9peimxN5Cn9PgudD7ocd9AXyLptVxVy85p99KGGecb5mBvTf88jrU",
  "key38": "2WpX61cANHQq2VsUSb8ydst6biihAzbjyFH9WhQDTYWe5m52oaqnpQkXopMMfcFR2Pe7r4VViV6b7U3otNc9kUzF",
  "key39": "4RU6m5rqSKLEhiou2mLBxkzJcXA1mg1zyRtnUkLyQxFqRWQj2a5z5z5XBVTKBaSDvfELTq2kk6J7axpUSVG2qMyo",
  "key40": "4BkC1PYJFZaZPde4UrkptEkTMmHqtZxUAzNcuH6u9qYEfFM7PyHGQusK5iwYtuBG9SVVubrSzwum2uWZEYPXFUhN",
  "key41": "3eB4o213rZ6ujKM6qvVpmxVzRMUjGkRHFcqZvxgsmS2BSSBHDtf8gARtYbyju5pLhjkS82ADmTjLqN9eSvTYxxhD",
  "key42": "2ARpQrYSVckh5Bes53pW8S1w1oWGXNM3qovwPRq2eA7WJfoWVSSLeQjQbp1HxYwfmogiHLaALfvvZ3bp5XnZTbdE",
  "key43": "nn2hvexYXu4An4J8XknhdYSLc2b9qpCTPeMREPemq6awae19vqyCtQFNfW4YBXfoV8ikcUndzvxuzjPUPd8yj5t",
  "key44": "5GqpQeGT8ehiFM6GaMqeJeRXrqiqzttZsWQ3XwTRTJz2DH2ZAT7cbSeTAvWPfB7ubDCUyaZ5iM2XixsPj77UEHob",
  "key45": "51MSiy9YsTfa9bkM5x6A9CXi3cGkZ8J88DHEQXAjN5c9gwfTQNZfFiww9CtPeC8KPKEtcEcQoc3QjVBdCnuianiK",
  "key46": "4YrAMS3UnyyzSDqK4EPPG1uaZ9dGqxBd8462LgdhNwWEX3JppagXh36nk5YGtVW95TZgcDpV252SDLdRGpReuajk",
  "key47": "2hw1s4iPrsR8pMu5PeLfKTxfsipsqtUVNKVocnBZaWSmLdnGf7jM84Ax2pZvsZKjkMaGB8bLqWFDvKjpSW7F48BC",
  "key48": "2tF7rhzqcAQoXr8TV4TkbFotRLPzVNGcUdnq1kboYYC7B2giUifBBaYs6QLzMUhM5ebbzE8fM6Biqg15i21EaiFf",
  "key49": "2pqjsczN7jqtAne9RRkH2FKsdLi6oddLEEwcMJD7HsPUohHZAgMpUBQLRB3kg1JLzyu6dgmg1d2pkXE7xGSeCG7R"
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
