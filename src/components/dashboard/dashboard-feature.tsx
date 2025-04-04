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
    "LtSg9kvMTwmBxqgSvAbiGt1ELWyXpHoji8ihAZ493EP8XC9ySY5qSHWXHStfU1u3w2x7JKXrqKDioq8G37b6y4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EErvfYF86udDKKTXKiUdm5SFDxeCsLtvV5A2AH2xp1WxGkLUgjMt6Ua6sqEqWDHMTdDFT37Agt9ix6rFzq6oeAb",
  "key1": "5U1cA3es9kNeoyHZ3D2evKxKC1x5BzGKpAi917R8GrCPZsf9zgzCtFdD6HzW3ux3aZYENAPwXdjQMPx6FKBv46ku",
  "key2": "W9jBiqBuEJfQrbLrSjQ4kRQ5LGZmmQuTdRNZf4tEFkrvN65YAGdiNiiEz2YuEMZY4YfoB1ke2jsxUZcojEPBprA",
  "key3": "24tQJH6JvDxSg7F7VHPf3MFGMpHcypDMM1rumuRRTJhSBt6ZUb5JddAeJP1XpfCgYUjV8GeSkCBChPEJVg6N3qq2",
  "key4": "42ZK9H8JjgsbtwJEcMLUXeD5etPSnEBU12Xf2NGgRW9qRvXqS1FgdWkXbwGo8byu7XXWcw3f1fo3j5AjSEc4kMrE",
  "key5": "5BZk5HK5uAij7JifXSSzz9an4L5MUPgwRF94Q1asYBFgZps7zcReDJXN1P6ERqueNDgTURuV3fY1tJxxGH4qzq5a",
  "key6": "4Mw1pi2KDkuZMsoP4z9Rxkc3U3qrR68L4v9uU4d9uSD1N2Ha6j7xR9wwkL64Lg58wGemjTy1cMypWex5R7oTFznk",
  "key7": "S1DNYUJEgqWGqNpkzavNE4zuLVe2vvefzXHr2SYoQuFJAp9EBhcovFo9Vk1VtHXVvL17Gm2v6gpFChQWayzG9Wm",
  "key8": "2Vn8gGRdziKCqz97R6vSSQf8oTeigpTHBjAsC8HR66PqG6EUgyRQK5TnQRnVut9hZxf4zrSXFMMXtwgNj5VTLJPZ",
  "key9": "5qoDrtbdKENUFNMnWSQtkQLW5ioKQmoXxtdAy4Yv7KsbcFdnE42DtbFYJdUspk8FcxbZHBpTFgTqFtcdivBtiNkt",
  "key10": "5ombqULHStodFsqbYZzkgAoGA2fNDyf39sdUiH5UBw5XXHAsHnQHSEwvQC3z526yM5jit5vcVj1izXzro7fpvU6P",
  "key11": "5PPgPtw7zU9kJnMzEApcdNpwEa4nDyMPSzqYhsrPz8UkFsV7tdSH7ksaWvwcedHb4eBDh2EnkjZtgC3qaPTg1dJT",
  "key12": "4r5t8ivC3WvvDjjyrgTL8fdhF9N9CMyCBkVjibTSdwFQfH3mz7id7s884xidYDDL7sqhTqRiU7yZiGDHPJVbuK4W",
  "key13": "26YzJiVCmHiZLrUdfRcs5g6VT35iguoc2j6yfWe9H7KXKHanQzrminL5XSGXzBY1hrdchc2Lt1qieyq9oVofR5ri",
  "key14": "5K4SQ7tCvqvVkA9nBGUmVNyHwERWGcUgDXBXEkuKWqq4PseiJB8tz4aeoC4gJev8ue2PHT4zBD2HmRUStE3mjAe1",
  "key15": "5zhcsos6EYL46vsb786w1wcDB3utY81KM9YfjMoNtF7YMX9fPNRgDhuogVyR2eTuSf5N3bcpfMrZUVTSKkgyo5c5",
  "key16": "3pwqg1ZSfzhfgsGooQXN8NyGhEy9JjncndruZZN4oK4qhDjzdiwPKLb32KZKLyhDVoXxNxYEGURS5QYpWN1oyL7P",
  "key17": "5e6FXbSQhdzKUwPiDV8Z1P4SMJqzkUtU6K56DFwhPCFo9oDyd1A27RfJ8Jtu1VjwscYZkBF8VLpQ5iwtL6boiVJF",
  "key18": "iYuveh6XA4LgAKThkC9iwe2PGzpwYuoyZiNjMvUbc8qHstTVPbfyyu1SajxNB81xTZk7Ct881HXTggKjdYRA8Qn",
  "key19": "2bqzeQZR4WekwEWzPTxXyQWBqMcGQ9Ny184QBQVcZiHQTYbBftJituQNpmtTKTY58g9o473St1cJsox3RJrgFFUK",
  "key20": "4tjWKvUhFaZRByc9yWFPKbfUVPRoeNhQemeHymxzMfGCH5RF4XCVHiLD9PN5PPEEoVodFCZxrNYqFcWVHD7nuLgh",
  "key21": "3LvYrcKXisVRxXPE2GdbkQ3PFw3AQKgvD89a5QXNVzvBfxbQXoSn4VLEhMAdHQd6CzpKh4jFihbnhFFohXAA6WSK",
  "key22": "2YpwGr2qLFqAZaF1rvBuoYEsVdkMCkhjhDymp3a9D6JLkGXvAWbK1RPuneXTKaPif28pV63f6MhhKAFcBHAYwfTr",
  "key23": "431vKJyga6cig66WHW7s8P219UN28pvfxMaRCMHg5VPsP2kwhduKwhcdqcsNBJwvF8EYvMh3MczNEPAZ3c7XvXqB",
  "key24": "4mcY9d9bGN3ZZL9YLtWL4hZcAm6sNBiAxMLr1qCt6j3vf7TR9GzpwWTrwqaa6Nvtb6ztjMcNHR76BmAecDdvu9Sh",
  "key25": "43Cw2c1Wjjf2wjrsW8vv2e92Sc6BFGzMN9MkJv9oZWJtJAXUpbh3cfh3Fo7w9dgYJ2MyRX9KqvhbYjgxjT9BYPha",
  "key26": "2frShLP9ZgjEfx7fBcweQUJANjpVzZbrjKYgPQvpzgcec4x4LqGLR9f4eqAnFznj2YSmcEKEJN9cwyfZJqqqEyw8",
  "key27": "3gLnuUbrXCNCJgkG6xrZ6CmE7XQFYt1X9zovFgzydQ2fYnHkG3HFfcndMNa5jYTfhQ7zuBSNud3j1x6kpGwm1U8x",
  "key28": "4LAKpFnJf31r6fJDnB1b9iXxWQ6LK23st7G1EDDGS244kT7brpZpmMbwnxUCFuzNwjPeABEXKdxUczErBQmEJQbN",
  "key29": "5tV9mmgMD4D47uhsdqdj2sNVaFScEbzDcbSEE2uSyM9z1YDce4WKwmTpEq5uXhvmfrnFZVg8FFfgrEcy7U5Sgrrr",
  "key30": "4L1LaNaHmKwWtJcCrp7kbcsnFahTFad3kCGC626tPb98rF1hWumpWj4ShEQHuTRdzd4PFFtDxhNxsev7WANuFurS",
  "key31": "3Kf49ZdSxsSSN1NWUfrHwXXPsSz6tjhjQTT2TMHJxfReyJpH2Nv5yPFWrAYd5TsN6o8WmWNDHYMrJNQx2SLno7np",
  "key32": "2nQ3HvHkGqYN4cqcUSgX7sXhsuq2m98Q5Uh1kE9q7pkQJPv6oNyuUxRktWCb3AUsc1RQxGiVPGLJi7EVynfgpaAr",
  "key33": "5RMReLGgKm9VGd8dbDuFPh2hFsvQgb3ebJuMDTay6N5oQCvv7mNbsQSz24EKZjFWgiRC4yNkiMHKxGmMuGSrUcXG",
  "key34": "4UUS1EbEip6K8rQzV7mXLMtfHy2Hk4usLjyQxKCuX2g6Ck7qf5WLMmpCq1Roa8vKLSSqcQ5usWA9CqsQMsgqSUDB",
  "key35": "5wzbSLeZLV4vaQzchQAZWBoL4YmS5fPHZ2YxRiSDYb5r1swE4j4BZFJAXL2ZfVkaWSQRnDWKV74ZmtLfqhU8xdkA",
  "key36": "236ohkrThhTQfDZWYVGmRrWz2PQxfsRf9hWxQgMURre6QDYobHT71YFck6AL1sySfY7gQNLAcJC2b9vHVsXDSpKh",
  "key37": "2TGiphe2BNp3PJssBywNjZfTMDgKsEBLipknX8oVLbXyqDT6C5DeLcDfZ2dukEWzrgoo4xAS36VfPL9n6jWbmzuf",
  "key38": "3ULLzkDskBGcTpSwaLCHeSXjYNy7w4XYBZQG3irWZ8GR3T7FERh2XrYzjJDnBCjmUNt4eDi2cqpQQayn2ojv8RL3",
  "key39": "2YX3tn7UfYmgwUVWZhJ8VjqfhPmgt8fko9zFefEtZ4PjHnPAzi1xqeWTQqSwrZMAr6zAygiy4sqE1PhZstKHs1vh",
  "key40": "BCtNVo83nEkGeRTLSUnKAwqBtHVBiyv6NzURMwGa7NZub65h1eEgMQpvhUFwUj9Y7xk1NYoNFfhjtgccXN2Gs5S",
  "key41": "299DTAxmZtBd2A5C2x6kXQ336DjignoMKD2WK8ZMvR7fh3xv96KNtED3Y6LpsYB94KZXBwfgyVaDMHhoUoA6RXDR",
  "key42": "3nbtUpj7EfKGWEgtDFdkgq4ZgfHJ5f7cmhpSwqQwLDV4PT2XgKgSxgHNsvfnFZXanfywSBbmS9nogx1j3GJUcjjS",
  "key43": "3Lc8LcE8U13XHf1CT1uZbrMikCsuWcBQvDuziv1ZQd1QLd72meaeD9P9yyG6FwfVfgPRTcj7ePhg546vzAcne6B1"
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
