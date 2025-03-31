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
    "66vzz2nTJg7z42S6WdPid6eSFsqAPtsDvz1HfECxfeNH96BZxqeYhq8TvXCRTX4eijpjbSLBKGyRNMqRjik2WgWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AdTWkTn6mqoUHzk2P3V41d9yAXjDWxV5UnrhsWSFnUHrnA9TCLTmzQ3yXBfxUHD85AruwVVEDSQ5ShNnbC8ibbN",
  "key1": "5DBqmLZp2rmRPotuY6zoCApdWjbmt3t6Nu4mswLST7u9QFuxHBih3Gz9sjDE83UegsQGaUs63DRNTAfQh3oAK82F",
  "key2": "3icqcy1KTzZ1xsvE8yg3bhWaNZsebuSCgMzuVqqjHnBw6sP9ANVjXTSsNWmjNNTWvTwUqh5x5qPnmCxCBrD8JyVf",
  "key3": "56JUWqnQKfK8bbaeynhggF7oAJ93AM7EHrrLTUuyWVbL4xg6iAL1P8VTfMndqWD3eFdPhX26wCA3s5oXLWrH8puB",
  "key4": "7h9W94k5ocHWGUB5QVwewMohaME47LjvoMP5Ayt7JmFuxvAr3yz144eJQj2vrWHo8Qd3J53wzcQZ1aeNipaqsQu",
  "key5": "Ng2pnfuVV51pSnka615jLKN6k31ZgBTW3vEChxP5hpPk6nbUafBVctgB5AkN2jj4xnS76dZYE5v9wh7NSzViaWN",
  "key6": "5P5VGxV71nFvja8R9DWVQJRDHeCYqu4evEsrKcsF9Lmma7oikp1xx8EGeoB8tJLBy62mzowne9Q9U9tsdVWFaoXJ",
  "key7": "2fU9WHJ8VoQvCSetxX19mkrxb5Jt4JWVy3PxN31jpjj4RrRHHoHLaQhSSBYTqQF6d6swYFqcVEomU31EThChtfJK",
  "key8": "osgy9z6dZzDcor8D56ixEf5NDd1TiSsw85ybuXkN92MJAyaWjdF9XqXRQHAyebgtfpyMSfnbQAvF77cQNCBHAxK",
  "key9": "2VFhWYLDze2gV1kcrYVLkVLa7B2i5nikkgoeGVbVdVDi5LZDffTwRKkJ1utfKyn7W9p3FiBgJ3nny53FypQeTCsZ",
  "key10": "46QzWFFP47ke4dhwmLQYkDgkAAAEE1N14sF5sB8jnNnaW8HtCREypuKmYJafJDwh6NsREJVTS6bcrQAG9dFv3UnR",
  "key11": "22GdQUU6twyVZh3ATkJaHoXfCvLmVZa1B7v7CMQye1mhjD93ReVv5L7dbAVz2LCyrAVfnYk4HA6gUUH6goke8DAH",
  "key12": "5YPEDZbbYMoJU57pKWLmdAPnbxQWHaP11rqAwdtxhDF7Th6uuPtVvmi2gQwQHUfoJCeu4rYEVtNRftQiYBBodFYZ",
  "key13": "2BVBtzw2iVpU43Xpdnr2XDUxQeEs8F6HMb5SNS6ZmorcjdMHsiBtNNBs98ZbxcfL6hyU5wwb7vYCMqYq9ejcDWPT",
  "key14": "cFeMb1CAvgFmKFURzsvAPviDUK2YJcGRF9TyLNq5sG5rg3F8Z1v4iHN59eMPvdnfV1hand3z4LuNCzEZLt9EhTT",
  "key15": "5oSoa7zhwwprv82VmN38vUJr5g8n1kvjpBXWs3Rz5mhFHDzJUkyVCNvd6P8tvnEkZXjhJ3taZEbKbEvkjLtRQAb5",
  "key16": "5Ke2MDr2RU6va7mpnejrTwjCepbNHomXLX9u6dGFdpBdg1YGqhWLdL7mgDtYh3FWWHHTPvks8rw4L5kY2GUFrSGY",
  "key17": "4jwW6aiZtGEzV5U2Bvm3qchyf7dJYA7NB2bdjAqCy5Xbm1yXNW4yNXYHyFMXMbD811LRJ6LTjff7UukiVfjuy6e",
  "key18": "4xLAdyuTo6bfefZyVPrnRs1SkYwpLH1sfiTyYpsbCSQ3vDXryNB2CwNHXnaHGex1CYrPRQx4J36NiQtDv6DzH5bG",
  "key19": "3YwtrNhVqZvLPLknfbPMJjeKC6MG6BGXq4qJJLbG6QCaS479vt6g3sks4goiWxBEKjHAjpRrMZKPobFU1iUdXHE8",
  "key20": "CZP5NNKDdjPto2gPLs82psCdYsYvFrhbRSpWH3m7Mdog9s8ctsz8NYRkFHyumwNQmTZ5aLP6Eco6xcTqMABLek9",
  "key21": "6VJ22H5eqTh67H3XQeokkSXmNG6NkaijjY6D4BAXRNWAwZSnbJeG5ZUuUhge82a3CxSPVVDPhwbNiG8Lsu24zD6",
  "key22": "4rndYYV5KZyoqPQm2CkDFz8tvoKBbTBw7jdQ53frVFvD5xzj1vYMFPSAyivcY8jx7QF5AkjA7KTMf3NUPPfhKX7z",
  "key23": "34CeoXpj7Gvzr6WNnLzZ1cy9Fg24cMvntHspNGQxQKZPRS8c1A58S7dv2NVDWTiuDjGytyavAS1hdSYgA3Db2jNm",
  "key24": "3B1dmdduJjDbxMHVW15brxNT3tZ6g2HB5mt1rngumv7nboPW55myvZpCTmemLYkDjHWweUmkVdnr278qEnY8ZvS9",
  "key25": "36oXvKvxb28u6ZErfyAwvPuocY4UZk28RU6xiU5Mc4HTGgwD4YbRR6CpexL6AzopSQijzP8GwsjNkdEMtiDLt22j",
  "key26": "357fo9RYc8qwSTjqipYCMjkp9qA3rRSmEGtCJLZH4uoEvaRLDqgRs5nJga9TyK2v8x35Pzb6s449Jw8sEKA8D4fA",
  "key27": "m7E2HyTYpeP9MfPUoez55qMUTKQeymaaBTMvbSbgsALkupNUvvJagmHissyZ1tMyMqx51kABNkaVMqG6oBAzykz",
  "key28": "3kR1JXiSiUCpFgbuMXpckSryyr51gdJTUB21pfY6VLPa5Dwgo84r9jNqeMUJgr1ditUbb9r1uCdNNZGUuGodoMyk"
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
