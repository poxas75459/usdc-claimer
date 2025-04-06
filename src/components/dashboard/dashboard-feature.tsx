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
    "3NnWpZeDBbpc7jKUXWKaN5srr62sJMDhekxpzk8SeWskrejscchb1jaM58zPqXVSD5UMdxiKYzzdikRrhUyDe8jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n5PkF914Sd6aaHqu5dKmrYbAPziYvgm4qXNae7bi2X18kH8wP3N39RCtHax3u9sE9guiHRkiSesoFyj575qE9Y2",
  "key1": "wJ7mdR4YujHLuUb6ahAgS7iqDGiVSP6WnLqwKfbFavacCBj6nKyVG6Gb5HADbWvBKm1uSTCK5sd4ykK4eBE2AR7",
  "key2": "5KpNX5jBjCkC2M7peQZDqAczizcYUAqqNXE5LdWpPFBEeYRZwNvf6twv2zBL9X7rDazyGpYYgsqT3FLciP6EfAZ9",
  "key3": "5DYEQByasqU5LKip2bkpG6bkbkAungSkETUi5hXURz4TcALgiFaTGeNtW2Nch7Qry6T5JVTzBWSnn6NtsRSphdBD",
  "key4": "3sJ4P1AdUVc1WuMV8vyhWxocSrvbqPbZgmBTYyCeQjjF2f1mQjNZjyhFZgyBaQgtH9CgW8CRHBPxpFaUxqJF2PTK",
  "key5": "3XkdXYjExh1wXMhDn48fbUthVUqXKamtMvjDetxd6grPsQG6PmLmjUjkEFWxwbFQPmUsrCCJh8e5oZbm8obkXudi",
  "key6": "48164NtpzTHNP54AudCVTeXFtTv6SQdJnjyHjrMRNMG998Mexh5ibRYSpkSFMC39TW9jBYc85GPx3dHy63tnuMui",
  "key7": "3DwnzAyTbbn9QVt9Y9iVFr6KL4irwEd91gC6ouBn1NPvLjwMK2HjrkPc46ooehDz8vQqQ3rECDoLKEHmMjE3PYHR",
  "key8": "4pYX9b6kJ5MMXkX6iuuqdwsKqCEaYtktCcpZ51pBnQf2ebWekfVGLZHiZBapvmTqk4tbpK1ZJ251N2vH2pdrfyDx",
  "key9": "xYDPhGf3Hi9G3hg8YCuHPKQDiiVqgQZWkCK2nszaGk1i5WhA9fBFEWUCWZsS24aPDMH8kignDAQRpsuZev248eD",
  "key10": "4Lzmi8LCALB1sQ4fdfqLSkK32q5b753BUcTp3bnmYyPGYsXMH5noajCFXTVhedJq3nkpw3YJSnkzWnUkLndbBMJP",
  "key11": "B8wackjvWKCTHLo3v11uuM2EHR955o3S7KR3zcBuQJb2fjfJE9VBXemyXSzbsEzihBWCupyEQstZGe73HgVpRTX",
  "key12": "3fAz4tJPAEVsf34PQCm7biDSDRMxXghvquuQzKJ8P8Tbf5d6pakrqz1tBcp9f4UhHjPiru8SypSzgkw2cHP3pa1j",
  "key13": "4WK7Q1WQxJ3TUqdZargyvnfmqKWEAPxxAEFEeP9LH1viqKkV98vyrmwP3tpy9BNtV8hjVcGGZYh3efFocciP6Rxs",
  "key14": "5SYVj4Pr1Wfh8pqbz7zcis8RtH4fj2DEaQkXLbzvUapqYsQdrwh9hJ3idHP4rEMSe22fY6GF7BCW7LcpgkoRKFa5",
  "key15": "5bjGKERXELpdetbfPqZX3cRrDZvqUwLudxxLxB2HNkiamCjJUk8szyK3bQq8GMcyBqEWYjbnCaZpNnuiz3wKTCcn",
  "key16": "5ewmbEaVtrgvaqSvBoR9c1JoJgbtby4rJn7fd38BZHPNYpSC5aMc2Uep2u7vkjirTCuwXhu168Si37wA6F6xaeX",
  "key17": "2YqHjDi9T63owyAsMnX9btPe6sLTAeFE59P9VGF4tQGmgetFCujD7J69K7EwN3aBstjvcouZS1EaqrddzDXsgBY7",
  "key18": "sSxew8XXjLpuFW9MKZH4EiFCTFtP5JpETCQkmUzB5PEUtaprFm5bAuyS4dBupxENq7AP876oGp529WD2hF7pkW6",
  "key19": "65PCgNyg97pdUKb14UxdcUcBAHMKgHsv2WRjVuYMLxJg8bB66FWxDwmbVFW6MCaYi8A9D5KsMmdeQzrJrMs4KJ2B",
  "key20": "2QzaGvQxvxFQwFAXcUAgjnUTduSun1pddTQkPo4dpZxnc89PdLkbaxv3vAgu7hLXDNrLp2d6awpggCd64mAvHe56",
  "key21": "5hDgo7QpqGPpx5pmucXBGHguEDSaKLnBLePNfeoyWyE2Uno3ruBkgnmKt9YxyVKdxaewrCaSMLriSKySvT5ksEuQ",
  "key22": "693cmLQVhZAqfV54KPaeCsCaHEh2P1svTSEDy1ddpGy4LL6ztzQJmTfYtNV9RVefRE9bwX92Kun5oF8qk9XNJ1S",
  "key23": "2Bqvsif39yqkybG7ZcNFRwXxoZ4DJAhrih2jtZRAHRPzyNMqQ6baWRNG9pPNyyFrhZGcRwEgWeB4Pb4XukF2Zv1Z",
  "key24": "34s4QFHyBtLJbdus2sGJw8rkYhS8HxYrEppcGpSXP2RUgmLz3NxTZUQ93AFBKLEQDCEeEGb8pZQiJ7eQDmUofTxs",
  "key25": "EpGr1dHSXecioaSLtpxofM1Hyd11MAJFWobrdyPKtn6CPvr4EnvK13R5ME3zeDY7xCLzgtGfhaFcVpJi9bEbw9N",
  "key26": "2bYfwzbZ5FfZzHLRa9yXHGRVSmjiFjWYxS7Eknx4yCHUVoZrHxW3RcoxryqeTpx3Hi4CNhKCTW6QmKiGbDPP1UKg",
  "key27": "sbziNMchtM4eRyufXtTdg3VHkf5foK1tNuPHL8Cwdrt7nbiNznqUeisx1ZojckEa7Ci5qgT5f3xDa8phKwKEEfi",
  "key28": "3ht3CdKCxqq5YrcdXxT9pbFVniryNRo8L8ZhkwLRgiHERNMTy3iQ9GPsaZt62n1rrqVXcyP5ZcGwBaQMJG81aZVo",
  "key29": "2SKm1f5oTMj53b7wNvd2j8AULWNhZ5YkunHMrHLK4kq7emBh5hy3Lnn1g6LJK4S2W9xZFmcwJgrM2uHZ9wRZJUUX",
  "key30": "r3wakehZpagSsNAwMAcTne9mLNxKdPBRcoVHrcHLoyHAJXo2C3V6sGaLvxwJzcP18JPtQbiAveMcEm5Byj6tQHG",
  "key31": "5FobaZA7V9xpAgJSzBNuydJtwK4TXNYvsSpr7NLMdnboNkCLRyDBdQec7avKxBYF6GSZfrTRDpVjzC3rFmSu35Ca",
  "key32": "5yuicMCPq9yY9bMCTsq9ne4nSDbxwYwXgEmxYrDEtcdSTetZ5P84uExnzDQPcSXgSa9GSaMt3FmRjKifvRdmDzow",
  "key33": "4V3VdpP9ir9E3Bb3BnCQriPUpgBSjEtrixYH2WpqLB5MCWkQmPAWyvu1yNUynS8DChk98i5pDaNSF8iyq6xBw3f",
  "key34": "5ABWKcAcyHDExgPPZKPvspFar6tkgHabNDHJ2MnvXmxrusFzQ2XkcA2efPkGumF5bSdTb6ZWfRUpECgWjtfayz7c",
  "key35": "5Tw3QpxSnvyjXFryMarddkjc2r2VkE276rKiVJVjBPCeTe8mB259wy2Sds3KTxiW3MYqB9N6A5wBGCYnGMkEhLYn",
  "key36": "5Z5oukcbMtauPRtGUBEP7T4zqscd48PeMB5KJxLTuFgqqEFgS6hePDhKqxF2PAhPSuNYk6fh7WSJry7NKK9JrGXy",
  "key37": "72nvHgpGb7nyW9FVmw5QJ8wXps53a59ULyWvpKm3ySm1CFscJ1cdM6cN7okoWBk2tCweiGj8kqDahD8ksufEfu9",
  "key38": "5qLTDEQnjrauKkpcVrjidKqscnihZ6AAC1S9Z3BKkjzZ73vEPcRNLir7ALDaaeTT5X1UxJXRufUUDrDwyN87mW7Q",
  "key39": "4w7SJu7NqfhxmHMJUCEzdGRH3Tv5CpPTWEg87cYFCqn8JE2w5b1f6aTNRzKJ1QLeTzZKFovgLJKmY9rLkMqrrgpY",
  "key40": "NPMcUCuPYRiTKc4SWPKedB9WXAzTqv7QA7ZtgAMkgAvEpAUZiSpiyj7tcTRYBmXoXzDiyKxhWrnHtVkVih9Pyc8",
  "key41": "317NyEzHsgREBT7FqWrtmmtdQKbja7JbupqLvfQVMUWfzjeoevEkcqjiAT8bb1PDwZjXyaKpfCg8J9UokPQBjLjf",
  "key42": "2ngoGnNQtywAk136K1TpaANiLmrmUGC8zQXAmpHGQ6F2dNkvTxTw7U3fU5qFNz48SvECjWHwVv12VPcuQrMTc79d"
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
