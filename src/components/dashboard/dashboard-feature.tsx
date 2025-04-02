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
    "4zBdKCESfb5ZW7Df5eCKNBB4awMtP3oDGHQAwNgoP7B5Txr36DbJeN7CwBouhcFYTquuipp1YTMauDxpWsqFn7iJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f21thwqYh7XVdz2MhxiafV1LUugoEgtfbX7CnT96APj9ZuiotxYBpmJMPjhVe7LFexJS94iTdApHHYdQk5mrtu4",
  "key1": "2k27fgMdPzmy4yxYCAvBe5jusedpqvpgTL2iCM3FsZAzrznrAk3s55jpjuRLCPksgWbc5uokebgTFd6dJ18fxBwS",
  "key2": "2hkKJcQYTJ3pVGhGEXQ7Tfj1sbYFDZeQrB18B8fwS5oQwZvDHfSSJRBa3JkR5z8nVRsRQDwHZLrHkFMN96VJjRNj",
  "key3": "4WrCmMZjisQX6sy2RS1fML3Pa5K9AjXbfwJosovRqvibzwigkveGZBXR29dssWHNwaWSaCL6WjyWuX63QYrrFoPg",
  "key4": "5dkdeCSVD3Eg6ta64x2iqTTWGDs8DD891HYXU4jK3fwDZ43pwwnMvofXUqbcWpqKGJ4UpdUfNkbFuSojhecGVXLF",
  "key5": "cimHbt4dC47Z7RbRfRGmHQkc8pR1S2bBdhdBgf5Mxe68MAZg9j1Pj9KHYDAhZu7vVxvDrattrxGQXmdPRsFXh8A",
  "key6": "36TEUrip71gj7cCuf3CZqwX64wMUizVoYGPKRD1zJbih1hny8YXupGBNUJnde95bB97bDTfrUQQ4FA6AaookukWH",
  "key7": "yY76ezK1ywxWydp9jj1dQVtQsfioJzhYQFkJD5LhbcHZgs5e7XEbfVW9MTPUz36osCHUQg5WraU5pm9bDfuxgbh",
  "key8": "67dTmT5eKdeQ9nTo5Tn2wg6snXvdSTn22ne2KUhJy4b2KoCrxKXSoNAH9z8A5xpqb95HaZtxTfkcFKtZD35AbY5T",
  "key9": "MHAJFBoD1pYvd7nNr3nH4yRzc2RuYXSznnrA1fdjKKEUvxReeiuR1VMxKZD3J8rf3kggWbff8Up4XFmH55L5Gph",
  "key10": "22XE4DziNh7NkC86AKrL8iWBW4j5xr25J3vgByfqZRp4dzFQnL4b2RXNTd8AtackewrkgZ3KbcCkbQiwQgv2EGPn",
  "key11": "vx9uRLeqchU8hm11CWickepUWpXRia7mPKXWWJXyV8Tp4BtxEMLBQyGa3Wqr1KGpkd3cMim3aZRQoPDD1zW5qT7",
  "key12": "3woJdpPtmfgMCEBbMHVdv4jii8ZdiZhscEzxkRcPe4YFcbpZhj2EjWqYQHkBqhkppCTCA3MjVim9QGhKXh99TrFi",
  "key13": "3VRYDjrNwVWdF8QptuQd9BpaR6Mbs1exqY49L9SaGAMwdBBfUzNU2eEbGDBKaKGHyM1o3RLTjPuFha3MR9Jpvgcg",
  "key14": "h819NR9nHXiTwx92e2QMibwpoYJahxkJH562VtucUzn3TN3wGvVJVKLkEYNVworju9hnDxN6ZETVLVtYNoCDiw6",
  "key15": "2XDMsPYn2KhxLy2aJ1RJJS8UzJgMe99CwKSX7z8rRBSGfeiwAvKB35HnhQAAsPf2YnonXM56LbbkfqmrFsUWa4xF",
  "key16": "2LE4fM9Z5SJJfUzRDvXCg7zmKLwdPoX3t5wSgvbW6mLTuDrtWu87N7e2Z1r4GfbXFXmGUG4dfd67RJeJ79uGZGjs",
  "key17": "2tu1urW4AsvsUH8CNeFo61XNME72xVQJr1kC1jPZmyvKGVdU9XybCVaY9iLFJHnFH9hMGR2b266yUXTyNkwFLi34",
  "key18": "2QNm5xR6zyiDqrhpXVsHfgDhgtDNarnSFGGL3PJzm2JZxRFoRhKBLpZbjtfW1bbkS7UfLLv2PX4bwaXFE2DavSXu",
  "key19": "4ZuePziMZ3WPPR6yqDDM8UsQsTj67SoDZARAJzRHmWV8yJSK4CPffaRoNEsfz4JRXeXnXbaKhaVRpR7QUvrT8yox",
  "key20": "1xjkisEDLjJMkH2UW29adzhdVF8XqwdkXbJHoZZ3m1bWDEMcoFiGSzvuBJgNq5epizRvCkSJdegcqYn3rduZRem",
  "key21": "3bKyAejVF7JFadTfeYnqbWy6XC9KaMRfdDZBGnN3Bhc1cNh7epq3oVQazwAfS8ch5s6AFVBoYmuN4Spei7eHBQ1a",
  "key22": "5TG4nPyg4w5bnVd2qNr9jMdcttvLNCodJjErfBQdcaYZ75kMSTUd9YsqcitzYEfE9pP59Bogpc527zRUstndLiBP",
  "key23": "k4XQCWazCY5fcrKWJqu6uysXep7HRNRLysW8Se1sb3HnuKqxXgJn7ZN6HGnGQYqBfQT1gTTFQ843n4PSvacpLBC",
  "key24": "2RHqxWojQ26WpquT6XQjTQcfK3LiAWpfkV7NsqQx4wzhJJFb94AosN9v3aPm7FjYGq2m7C2GVB47Dt7rhscWrD11",
  "key25": "4VWEU1U9d1Z8dcvofz2Ps3Wr5tc1daNxSgS39ASd2VynVw9kYbXxHSHyHJG9DbPWoPTFqHReBEAbbvpwTHLMLVdB",
  "key26": "2J3cgDnWwFmMxY1VQsUoshYEUWDotBrnsUa5oBjmsYW1NtZMWaqcR2x1S5r8Zy6Vk7XsWJb7mezE87pPxhftiQa4",
  "key27": "4gmNs13ewe9mBTjDrY4cHft5LeC5KN7zhfhenCzCKme33uM3TvSFX4DDGEbmyK4fUZmoFoD8wHsDbETw527g3ijm",
  "key28": "28ZCczwhFTttmKMGexPvWpjpcB3FyDEhbPWndsGgaT5ZchYsH83XjSnMe6USZQMZCvbxqm7x8NELSvxHMER4Uwar",
  "key29": "BgkWRvznMRK5GtDKCFHHdkpBEFV8tT9D1SJX8XCmg3Hf9CvXp5CYVmWUeYPYBU3SYQgknWRLPzeMMfPSrd79p14",
  "key30": "rpF5Erjot3smf44aDDVDySyNKxnJp7GisnGoFUB7wP9veSKeM2G72nhvdENTSBvyVPHp11ArHvpP9gqVgMavBMM",
  "key31": "XroeKAm6mfuRqnNMzUm6bZbDJg2V3usLf8XmCMycCvtsQXKRfDwwFUcMDLNu6oSxZZuovHyYH75h4U4mhkJ5Rfi",
  "key32": "QSXsUrDKdv2aby1ryc3bTZeWMrzpcu74opk3NhbKBWmyFhZV3cZ4Vq4xC3qnUufA5tsrevNohJL8FYjYLaoq861",
  "key33": "2BKUK4z2Hz4gx9gREttB9rX9DXHigp9KTU1xMAeybW4JorYHJpLWDuBy67M6Xw8NwBLdoAtJdwjT5QZazsiecYvd",
  "key34": "ZgjLpzz9LvnC6j5kprpqW5kFuz6FEazasQEkivJNUNUyQ4ewv7ieqmP2ZrdNZxi1wUAG59en88QwFJ1y5NFwJo1",
  "key35": "57Rn59uzZzyFfr8JJ4htjawXHaNJMzq9tRSd5cMxDTffjprRw7bVxScB1BBvYrKmUC7XGNr52FNiExwoNDkaxq6i",
  "key36": "4AfBkHk5xRUANVtyq52KLmnZrzLnUzkrNXBnM9wbucynA1sKR6QGJEffCsmXavz8EE5Psc9HpPYbJ1WtH1iaeY8X",
  "key37": "DgMYdjDsY7UHNkUbvfre9y1bUHyDApuDkZhudXpkdVpYfNAVo5EAkqQL2WZJaRkYkEdy3mDFZVuedduvRtahTLw",
  "key38": "2FfjzETZBeGjt5CYF6fUR6rmdq8GgAG9SVytxqJkC1NReBfJtWjHxKFtvWfD9wVXwUdyWkK3iqieztfDCNFvofz7",
  "key39": "5hZttUW4Nv2KEiFqkJ5QGxqrRvzNF5GeyoX1iDredDXmDuzu4D3KkQVrsKs9gqdGgMT1Vwf9P7cGhhsim8zrSUP5",
  "key40": "64FaZ3CFyZJQNSJer9dYJToo8nhTmF73ujJnrPPoddQymLFPUozabqkbRtHWJWDxsc3GMgtpUoisAAKdiCqy8HB3",
  "key41": "hhqW8z6aYwCJqG9xfbtnRhYQcz7h8rWvwXAYAPYsRgpGywdwaeRZ2LbSGE42vfNDu2zdpkyF8s9GMMrUTUvNPWM",
  "key42": "31fU8sP64oY4Tr2PjuE7ocQQece8JZnxCHetKg5614jX1VftFXgrADnRcPXPXPBBPbM14p9mFC8SDBFgev8omSxe",
  "key43": "5236FhiKqfgor74XqAsmxEBeLVZHnFvaxdHDv8DFJSHPXoLkBT5uWv7kUe6C3LVdhybPUk6NL8uDHXWzR5tcfAzt",
  "key44": "5bDKX1v4dFMhPxJJhweoZ28s4a3Q1Dsv8VTMG3WwANjfE4E5wkogVzNzNG4ahNBmts5Mr9uufEkK9HBGZQQDrReZ",
  "key45": "41FfgHNDvgPeRUC2JNqNk4NgRwGTMMc7haky599oxnZznhBjKnBjvPozwcNtKqC444zMZYh9gD7XkiwVHTnXp1gg",
  "key46": "4udxZRjN3u7APF8n5pfCsyBJShugv4k7YPK2rs6kw6SV7JgcYzbLDrYgnDynMvWVMmYspzN5hUotc15YYfbCzSpN"
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
