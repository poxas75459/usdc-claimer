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
    "512kEB881Nfk8Dtz4GMnYUJFQ22JMDsfoWx22R2ggHW2A7NKzNE7TR8EwKTZjCY6YWaqiRb61DEDGZ3zcTTsMbSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T8vxpAdaF4ezg6YmXiVgquRxqYxak7nYcBcZQKRKdKd2MbE6Fo6gBWvK7YjEi7z6TMp5sYsn5MTacUttQKttff6",
  "key1": "teFCnTTHghUL3RE8JQgMhC8qj9uD6H61nPqePVUpqwATX6ELknPFe8CFjj1GqUXhyZEPhC5iShyEKahoSFbXPgR",
  "key2": "25QmTGKhJf45SDCWpFwCScWgYobRcZbuP1KwgWGeNWJc1USw5Ln98wYKGYAJJJ9Sk4D5qntDSmEP6pjPHAMhigVx",
  "key3": "5BEYweFEcgsK7ANNNioyb8nMxcUUjEJPxNveDb7zTzcsfiaMk6uZEEFa6RahKGpAC6tgQHQQZC3GryTGxxpwq3H8",
  "key4": "3BwmzVH9GZ7WFJhUoavSeSKe43C3g1MUjcUoHuS92TRL1ZdfntNBpK4PJqbkNVgX9eEk2CTmNzcYFk9uJhdJt9xP",
  "key5": "5J2dt8Xr6yVqCdue4z8F7KctQRtz6gQiXExoA2BCPusNhmG2b3xFH7WPpLSwRcyPoBcYexSyyrM49giww3E4PakX",
  "key6": "4DWtWQHWLHKk9WD8J3sZdxiFbUUFbMKVrqXsi4CaAvTkU4kFUNiZKBEx94MBr5h3rWptrcWmQSDavGijL1Jcs3GX",
  "key7": "4DtgB9fEpgFUmAg3HfH6e4qbyqAUJTGG9TLYcNpLjngQC97po4VKc4sWidPWG9CsHZNGwMTaxoSWER7qAmYLS2Uj",
  "key8": "2Dm7XNrTgfkGvpBX2AgHPsivbZk1oy5iTrjkEQDMbfeeDS2SWdw6A9vhX87jQvaw17kC7XgtAqLVJRPw8ExmecP",
  "key9": "4JzwNVaYW5BCuYg35aeqrVPWWsKpdziV2c8Z7vTKjsj4wutanJbumkh7sqyfKSYLhqnoFodED6G8TZp4M5y7nt4M",
  "key10": "YoFDsKWMQudT2o6S2wdQJh6jbcbizeYyTsPAgQ6aExWc2mrF2rGjbQDPdZZPgjvxt6faxSebADizQv58SKs25ay",
  "key11": "i4ykgGHBKEsqY9WkdKQQLcgsvioKKfQcsYgUDEdo9R3fQz625dijN18TEFbFjM5LZFmRCKwZz2SL1UejSGi9CUn",
  "key12": "4YXzT4fawsqkhzv2YT8nw71qEi9jREnsmCzEswiprLzo4n1EpMdQzvXGamWNDo8zRUHqE6LtxiH7BHEFk8NgBNhn",
  "key13": "3sntNy5MKqRRpdiC4epgMCmrMvn4aQUDs6yWjAE9BsSobt8xsxvnKEqpRGNahGv29HuKpGT8t1B4pM8HRdndmrLg",
  "key14": "38pppM9YAM427YBfzY7xP5GFhvZePBmCZiQmF848R4vgfPQqnLw2KbrHFrCd2NKjt9cdhVNezRBLHBofat7CMgB3",
  "key15": "Mu5bRJy5bESnzkDjme4ZtkPvvy5EQGsbNmLBUkw54ctfVKQ1bA8M2kg7opFJeGuFUWRAGXUYEWUHMDRpgJQXNZi",
  "key16": "2VPxvPs2UomGFjd6cjRGqGHyek3JhZguzx3RjF5iLGqG6B8XtYKRBfKhcK6PppmfYBMxYjEXGDqsm1aXGvUdth3",
  "key17": "2yrRtQhxoStdrHkBLvAG7B6VCZfKZfb49UzRcw9y2XNPyn4qhz6B3sTJGeKUjMGxbvef7qERQwFJYr43HZzQane6",
  "key18": "i99zzUMmrhbu9nPje7NQNg5Fx8DMgAsn31b6GyNVLV4UhcP8Hyko5WLrVXAHBQEFKdU9qVWdFDzaABqMHEt6KY6",
  "key19": "ypT4QJqcMkDRCkrSv89g2wQbc25kepJ35mWagMohdtJAwiAuPaZLPiBzed3u7bozeYQizpCkeqvCDtjbCvBRfct",
  "key20": "3XAvusDAAB3nsXpa9X9xiuhsRmoanzH9yGFwpkvVG88Tfyf39aXzsJ1Ti9weoyDEDVeUhb7WVpgDteJAhtA1JeGf",
  "key21": "2itQWcuV9a5THmJcYEZP4os8Zvtwv12VrCpFMqBHvedQDWXXCuX7sft8MUwayi5wmL994DXr2D1M2vahQzhQ4XFR",
  "key22": "5FYdsjFVjALh4xF4smJVVTkmTD4P7r8Wnv5uEx7ymp3rDvxRGkSBJLtfNJTVNUyAL2n7oj328912DCXTGrKbW8rF",
  "key23": "5DGKhKA24YxZYiu6D7P3sqeX5HqxnGGM2pAc7oRnPDTCMBDdWoTPwYAFPJ3JRFAtaKoNzA3ZeRWqXyB7rx2HrAo9",
  "key24": "2ZpgBEijMny27J5DWySgvxJvqCEN2NxTcYJWoqSL5ZZdT2phQd4sEKtodYFDhmtgD1MRNKhEwAmzH4omNhgZbgjk",
  "key25": "287n7Zt4LzY6idwz8PuB9x2pRwu8qRh9UpAVyUeoDZ9ufQk6JppUgKMCayXXkzZ9icBcFxgzgckXzDZ6qF18QqNN",
  "key26": "39HTUhwrHB4rzNHLsBasPrUBToNrPj2JbKp8jizpGJMcXKME7kTsgKqkbosJcNeGy3DUsJmGU8jbWLLTM8Vuey7Q",
  "key27": "5d4hfiYCopHVcDrqJwk582NU3SgkDoZ6pUMu5PR2bMtU2djU9yH8RULSgLD2oaF8oZXyofxM3frfgkTuvmZYm3bS",
  "key28": "3FyjQzJFqFCr4Hzi2yZK9b1ETwnnyeYap2vWxrqUdsGY6woWxrnhDe6FMkvKqNSAcxWGTnJsYFD8NtFrVf5geCfb",
  "key29": "2WwejA4EjJsdBd7CiPPx9Vcm6sVnWmhokX5yA5kdbTaNsKaKbatQjTHHuBpfnfqjWyALAHKaZ8unF4ATNAZEBa19",
  "key30": "2F29E5H6vJZkVsaTAh4eXgsWw8J3j2DFNiwGKWZibv56Vo1DHQ1Sb1rdDdNmsN2SCtTyn2ue7dd2WH6gWypgHA9P",
  "key31": "65MQNYNBr44GCv2BFqGUeqEZi5C4rcykAzZmRwt74NFaJv2W4qnY6kuEZCTUC9fWxtkSj1RZ7dLU9j1W79GAazy9",
  "key32": "5KiVakR7jQiXBzi4zfnGj9eiUX8x3E688Tadsu4RdCCs34iAkGomcd7z2GfwNV92z8ip7RTcwc5XsYSDo1CM9d7q",
  "key33": "2jK6h7ZNUaDWd6aLct6CPZAgND5hgWdaYuTokc46QgHb6MpAaDBtjnw9qQTVyRE3jufFNjwFNX4FJpvcJE6QhBXi",
  "key34": "2Ezy6PGFmfj1QzYCCRxxy4hVJUhVEUprgCHfy2MLNSpBGkeh4Gffr3zDjfd8j6t9jmvGZyDA2PwLxs7p82dvuHEA",
  "key35": "4CEFTiQ441EhNo7UjRyxPKJj7dgVvzSeJE4xhMXeg7kHXNkhYDyjwrxmgUJTMVQHUBKY7UvSwmNxFkvER1aoSbkH",
  "key36": "22uUr8DdUQHUgwM3LQ3agD2tkpFkw9jNCA8bRmbiJJYE3CVW2AavRCK8ynLv4L4HexJgvaFMBiJAp8MLpMqmkV9A",
  "key37": "5w6tk2ZRUvgEiG8ZDG4RNEaBdMWLCro75kJQxpfdNKtAaY7Udesx9LFFRGvVStQDbPu1H6rdWARDx9zE8gmxKrPr",
  "key38": "236pQ99gk9UQm8bbkrvQaQVyF9mgLRmRSH9jHb8VapRrbXGhoFMA16WhVpak1pH9K7gdxuJrVHwRt6in2X5xYy5H",
  "key39": "5gpkTanWMB2jfm9SUysgxk65omHDuihdyYiXnogpVMcLzeLFCvzX2XfQej6G8yWaXYodWZ9KxSA6i9bqtohSmxoX",
  "key40": "8SC9nozhA6nuFbEkY3hdyCwKrg3V9GXtXMbBfyrPS1XsRJZTv5M6kT6Hh8dXT6ZCQe5jTU3pxmuMkSP8ZefLpAo",
  "key41": "36PjkJrXe6KT5eU1HkatDTXfAkp3A54f5FoNrvcbU8SNjqnUVK2NzBndXTq9iFJrPaartSgjjL3tWywBNfUzPsVp",
  "key42": "rCvZnKhhBDYX9CbHXaqm88XqimxwKmrjfQHPrvstfYRVB5C4Q2AKhGb2y5vQF8qdTaUasWAes768ufzseTBfEYV",
  "key43": "5Vjfjw4XBUUvC6a8y94uKMoajs9MK3g7sZjiUAWunDkGVH4CCH9WbwwkHRYfEzANXedFuHULggPaRTesL9iwYtWT",
  "key44": "fWRSuZaznSJoiWhWuhZJByMsp69u6sGQUfAot8b2hZXdyeRnXSvstL25gxNYG2TMANCNBowsqrtSx5hMy1Q91Zh",
  "key45": "rNh9xpgeA3AAN5SbBvbLr6ERZVFiF6uSZjjpUQveLodJLfMwdy4sJkGcEEbxGFDtRfkLvjxQhcTi11h7JQ7fcPj",
  "key46": "5HTNYc8Ly1ZVZHyVPoTNuyVjvjkvKEVVmujnjAHsJXcjNdFBQ1tKzVHBwtZq1TM1rtQDrgG6ubFqaAu4dtzFZZda",
  "key47": "5GbjrFiaX31NVktXy992wcrqN6yw6CyUMsc5dSGQLucJts9SdgmQxzmqWUvu9h9XqowFHJQhGNS2bqJUwU5E3wJs",
  "key48": "3CD1eYctXEyniDu2HxH4D9Z4b7S1bAJLAVVYq6HZYJYMAcBeSWvyjXagTfZMdS2LzBDFb91ouUyBCPMXdmUN4FjQ",
  "key49": "26N7e2ZUyDqbiP2uMz4RqjPzXE6xRZX1aG6mh64RAH6cUMFm5t6Q6ZvWMygbjbUs6Hhtyx1adauGZcHe1UDmsqUY"
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
