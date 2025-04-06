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
    "5tQ2rc5CzrqRgefq66wegr9PrdRq5VKGxcJ75ght25UNFJ92dmoR7gahkNTeBzFVYm8HBbebAg7ftJzVdqMUa9DX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wjACWmwr3FRyhoHtcADzjMcy3Xq4kx6uHWiBncNW3KETB9tuQdSC8Gh4PDbechJwWWxGSzv79hkSc3k6CZcoKzj",
  "key1": "5u5JyHR14wfa1YAdTRYxvFRPhqfHfQpDVhbLY7FR8gXX5vCoRuq2XPYY4DMXvRgbHtoRQdbXbDrs9wrWJuTuXNma",
  "key2": "2gnuCaXoW9vbWyZuFNwMSggJsJkU2kA9s2zKaf2ZoXqAdFPNmJLzn1tzxXiHjBqfrbKYxQS81YaS2DDnEWvY5wpb",
  "key3": "5XyULvek1nhmWBtkXzppxA3feT4gLsjE1eBcapHN1dfKkkhKRaa44EM5b5f6LWm6fiWJVxxxH2BMG1EVUB9DqaKv",
  "key4": "2bQ7gwnSbwrCzcmh6iphsFfVpNNQazGbzT4B7ER3tbAaJTrCa1LNyuPJXXe3oiWe4j5DYrQQz2d6Rwrf2sE422dr",
  "key5": "5VUvDhyfcwra6MkBZEtwo2fnMc3r8VoSaFeHzrUuXtforJeYWRFNGqti5YapmvZzXbvefjyBrBaYoNPCYPHV87ii",
  "key6": "3rcL6gZs5BysKYY9GBsPMhyQ458v31F1zpBtp7J9zvxpMhxeHLzunfeNDvZiXrUs5DavWiwg9GJhgsPVENZM3XKJ",
  "key7": "5DNi6buS7qoVKDS25hnyHYVCXXtEnWA7ks6BVaYA3V8iAoxkS6kTWBVSyRnCJz4maYdQeqEETCiWs3ofxjEX2KUF",
  "key8": "3qYPY9sHXREHYSqqMpv7DFgf4QCoBvdyTETxJ8ebVy2TXFSVXwVhCTA9GqUJto6kPRTJyE8mQeXXvMT3iSLtkuDw",
  "key9": "5jVBGXD3GBWn4Ai4q883gx1xvmKY3YfdoxAiELykGUEnSYzqo1LbZQhoW97cXtqpBjAkAYuJZAXQqxKs3mkostDY",
  "key10": "39ZHYovoCzBaXJwYt3H9qcgMiamgsFRJeNsvcFJw6mwczM5PmAa9b5Ex1SNiLz7t9XaMbQsnx3bgnUNT2kndqF5v",
  "key11": "3G9Z9C4ShzQTTLCVM9F6Htp3YtarWx4PeARSJmZJsoestDhQ2RA8UMF1chbGyfxVH77RtAiEPfUGnAu4A3zyCzCs",
  "key12": "25yxvkaQY4Sw84DoUkLvbpRhj7DJLxDqi4DyeMnEL9MM6dYG3MEsphTCc9B7n7e7KDBVBD8Em4zP2Exf5krah1R1",
  "key13": "wLe5q9nCMpbwTZ7ommD2xm3JkeUvuNw8UwoXDX96wxy3fCoRztA27hqxGwrJgfeZ4HsZHTHnN514sQrGMfo9jcS",
  "key14": "3f8SZbgRi8zeR2wc1nHHtRvvWTKqZLjw4QhMBhmXcWJYVrYSRt25q96EFiienmnma8AdNC3XHbSNMDeztViUwdds",
  "key15": "KcmE5JEfKdgdVtoAgxkdJNX2QT1jazxjYAWXFg8oq73TDMTMUnDoKWPs3BwDVTDSwtbt9AMifu9rskTVTv6M9wn",
  "key16": "2AkuXL5eiaQz539miq3766JyEWVRQ9VfYzrNsMoRd8YxgYtaRxepeKdCxGmSzksLn7vJspNXUcfqrNvN8XnJeUsH",
  "key17": "3Fv86QfqBTW7R1xdgLEPrx3rj3swhzCUTFR18aiQfZQBJrmhhwZjnuWVtxGjD4TXit6V9NwcCDkYMwjaBP3SZH2M",
  "key18": "AT95zytBZ8BMbuVPYRqMsVZH5AKvZ1hh829L7gvjF13iVGD6hEeguWPFxG78qTEGajMs9cqnHy6V83bUr8ECQEi",
  "key19": "4u6yUehsALE7VXiVaSiGJMKhFapZF7RUn1wbkonMfkFY3Q4BrY4jvhoNzYDiMSwoLafFusFjRLXaZmcG5Ntg1TJx",
  "key20": "3rQTw1Q72A8gCAd58RqLhpNSTTv6EhEoU9GQv8dL3hyrdboPrXZfk6yNZs3SS28GXohFSZu2BisJvZEkurDe8Bxj",
  "key21": "21mZTLgXiVhTHuyg65qZY2RiCqPHqqBSMHJ6kECfAGQVWWSnkTHXRVDbixeDnvtp3swkH7A1oDd3GfEsgFP6b65Z",
  "key22": "5fLxPmUpxDVpv11epCzwUS6AABCqBHEG1hkVZeQcmsSYoMS1HobRenLJkLqH3cDwMLLtwnh2RDiwxbUG18wn76S6",
  "key23": "3iUyFwCMXjyNEHnSqttWf1Dkz46fmCMVwgwzsp9ojauza5EPbgNWDrZwRT3jiMxVarB6kKQp67KnrYn9TUrFpJHN",
  "key24": "4kKstFGin9tyEEBCQMNCTVNRNMqThm8inbMqAq7TtqwVs84fuf7pUDcYbQXcEMig8q8rsbj2SihsT6pxcvJKKFUC",
  "key25": "5UgnRbXmjVN442PcBrG5mxmfbYLhCMnNLkoi9qWooVZKm6PAKJntXyEC7vP6puTVog1pEeYiLRQCLsHQ4nAaQxyP",
  "key26": "2UHWP43rGt6DPKcJZ16K4wUERCpegX32gYUPELtxkx2iNBEepjWoFgfg58V4czDgQTC6UGBypaNUZZjC2aNV2AXg",
  "key27": "3n2NaFXm1P5aSPbeFbdFipsWfNdD9Xf7kjtH99pQyrV1Pzv6KhBtThnmF5iL9CA3H7nbfv9sAgH7Y5a49qYhGnvU",
  "key28": "54MaZepmj3TW6xm9VEWzn9uqgSYUHCioypGMNmiwqMEmCfSJpgoipbFhcB1b92Q2VQn3Kmj7jB4vqRNaWEMndxKH",
  "key29": "2rNACPVLvHyS9cAKhh884JnhQ3jbLwgBJza664rLXNiKQT4JqneiuE7CL8v1Q5TE4GK6HNbB1o39pnLjP24JGpRX",
  "key30": "3KZabzjZgRfd5EV7BXU7evQmqbt6mMcYfoCJ2GVD2kEcBTHeT3YedENZYHk66k6QPHRJzzHHfNQNsA8wqaqA9ou9",
  "key31": "2unJxY7T8DekDRs2cyPBTsWJkZ7VnzX9EEQQZSWjrL8MhxuCZ3uqkJHMRe995KGYgBEAzgjm26Wz74jY7yKdvpFQ",
  "key32": "3Y9tQAV1qkYxZef3THcLaScuyhDpzbD99PnzZbHqBzTDywJGDMRGG8AwujJjP5DDeCLJVxD5S6vs28vA3dLAsJQV",
  "key33": "2duyZxd2waQCms4GC3B4hjcrWh3canJyMnCnSyQhro636ZMzagJQPn6VPwM6978a8akx6ESsRFbktqxXrT8wAVRf",
  "key34": "4QtTcXCtawgUNVidr8Hh3qcPwpARC948RT32HajBhJbxXL89kKZjxZxuTcezD8G9eiN1mynk97BAget8dMPth21C",
  "key35": "YpwNsfeM9p655Gc6fvwSC7DPTDEpcte9ooM5CZHpx5GP7H5Vv68h9eoWBptqncumq11CuvykH7s56LekFnT1V5w",
  "key36": "uabmpn2po4BNucqumCwWYcLKRhLS2B7ZEazUU8apdM7FQ75caKi6rSo42T8kxnwMgWf648RjxnBqSrHW65RhLjZ",
  "key37": "5qhHpuMfjZCNfZAV5yHGrco92gmvMnMD1BLn9GQTxRFFPWFNNXQAnR8Kr9s6g6omyYgeNeotWMGJ3radNcVxCWgr",
  "key38": "4E5u51YXkfmeH4mrN6n4L56wACyr8ZaxZQSQBXLc5VMFtmXw5f6FhCySErbSkP5KUwJ5VSWrn3hGu1aMqyydZdq1",
  "key39": "4rAT1cMXkQrB1YW4KcKErPiWqPmyK4pLg2rdRX72aSrmSm6DbMmEVMc3Gp34o6Xxhm4veQXEytAyXS6ui7h8CYwf",
  "key40": "34oAWF3nypGLie2hGihQ1j24VcrxqPqSvR3gRC4KSqB4dDiToT9wifySfXtYLcnJAED8aNw6k9uQWHeqpZKek8Gn",
  "key41": "5gSMzUS7XoteFatmXY9M64uSfFnG28cKCa6TJEJb3QK2aTgC6FeLggq8yWL54hpcdWiH74Jx7DvvF5dNbXUSnDEq",
  "key42": "2JEgFxME9MVzAo24zZdANj88NnmmWnTxKEPD343zGQiRTSPvvTSYjEWFN4WbNn1ZVoybh4Y4QqbTLFVubmwuYUJe",
  "key43": "4p6uGTp51M5BURpqPy5vbfpEZNmkXqZjbFdbGVbdvViFhfxxHknaBK4nXcRZEVrLAH1UxDSJj41CU64eL9Rs6V1q",
  "key44": "2DwkoFB4BCqoFp4s4mPr3Zj1d3kirsXMKhfqpp2NDviu5edinPGFCTWTtZzVTKY2bHJ1Eg7x5e5k4bDfHKJCS9Qc",
  "key45": "5m8KcYegSANJ6JVKBHVb4PHHCTU949KpXTn3ck4fPdnFgu4RL5ij7v5sksXapjvXYe42177Ttyy3QLsR8h5STjEU",
  "key46": "2Pq3GKBN3Tg9nD6fmmyZJonqxWx6Xp9oG3ANPHT2vQWyGNSNTKCsmzrKa8UmUhDiqBhDYWUdrKePTkMLRkWM9v1m",
  "key47": "4Ns5P8v4VkcTHE32U8ba2rnkwaAqGZ5cCoepMFtUvtwft9xcdWxYnyFWXPTQJoMSnxecXuxt7sfcJ2hkJXmYQstx",
  "key48": "4vPVK24ijhWZdoy1pMTc5VZkUeVVmJDzRc3BCvhNgUZQASJHvMeLpoRxxvG8cYwF9EpDTKP43vfD71TWkG7KR2Uo"
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
