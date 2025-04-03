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
    "5Uuc6qW7vsjnecary3i5co6ea7Wv9KTvNG7DhN1fsE59Pf7sBaJvKMSK1wBtRM5LS3YcbcQaMD1LASmjWAS3bdTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EdXLuFFJjkC7j6HY2tLeX3qUCXJ8NgAmPX43TkMoCrMojWZPpJTVVeBZjCD2ovBxHMToUxK2b19jJ2opRessD7",
  "key1": "4KEM6nszhEceRfhGs8UV4dvYHvfJhCR3X9y5n7cfXc93KYiA9PdwCStVegz2A76iyKcRixQSbT5UrNR6JDQeg3zR",
  "key2": "5CjKUa9t7Sb9u2UFaCDwWoTodUcrWqudtXv3iNqaeo9K1HiXTeTN9pkSy5PwWVsU1petcxNKRg2opnyKxFEhpqFp",
  "key3": "32r7frEAYKXTGo9xgzSEQZFL3pwQM2375ecvDC4UhcsMVoMwGbU8qrBXkLTzRCbMsAga6VSYMZ8qPnQ93DMfbohy",
  "key4": "3ayJLro2d732JXFWQTvY6qci9YcDXN3fV19gjf5M8kWbDw8Uo5wmDjCTZnnnFhTA9G4SmhdiPTJRAjxMhY1iS42g",
  "key5": "4fGBowWSqjMNBxUBujvy6z48KwQqrz4Dyf8J6sz48tcBia62bCTmkRCEpD5RHkSNakJhVDHrAZw4zWPkQDskvFRR",
  "key6": "5PnfzJEj64BsFQa64e1Q48wZjxBzsC9Rz12TpENvgHwMU8Vn13Vp3FA3xTHuHsakoENCwZefVznSA17w9hsGSA8W",
  "key7": "2b8UpPCvfjK6YkJg1rBp3ub34nFDWA7hFMquPPqbs54iLp7ngye9F8WqutvjGec1yqSM5KrXasPkPk1KuMamXHyL",
  "key8": "4hNKXnEipNeXTB3AeVh3Aq7yrCukB1R5wxkLBwhukaPBG2TgcGxXPZeUTR3e2HufrMgEaJUv8LMcBfsT6NwxFg9J",
  "key9": "422bdhvQjXCo1x1uVrUNJpHBDda8m2hrA4bh3Ryq6ssNdXVwPMETVXnyrCHPQsEimsrZpaqxmxZLzsX5XraTsA8H",
  "key10": "5BjmNeogoq3zMFStgVQGgAzbpPJQW8c4xYENiHRJCbbungS2TqT7TtjHveyiUWdpa4ZfBsYnQuwFzGGdN26wTLu6",
  "key11": "2KA7wkyXe5MmTKQjLe8m5NZuAmvpzUhy2JcXwnhTeFpzJnVVS22NEwHxdc49eAUUc8zBeAbb5tyqZpeKYpDUAudq",
  "key12": "24Nj6u9QmyrS989GrCX52hA8g68x3ei3W4ij4eE5HcrwXex1Jsc54JySh2Tor7yxCkWXgtcH32UFCUEy9dJJoB1g",
  "key13": "RaGCjD5tKsrfMrZn5YCFHvf8hZYbe3KAJYqTta1BpPChvTWXNvaQQgdKNtvgLf3zDAH6ou4W7h333HyyoWivCsc",
  "key14": "NYHJAseBGgCVar4CSy1xwtvWGmok7w4q3VdZUCPf9XwbYQFxr9pL572xHqWmcf97TWv2wx2dkgKTSVbSo1UoXfy",
  "key15": "4vrJXreKn6nuTd9ARoKL4eHwYLs6j5tWbBmmUCsqPNSUvHPHBYKnLiEeruvXP2UTozrwucbyiwt35MUSHiKwV8gX",
  "key16": "3VCPt7iKWF3ddzgnmpRFmrb5n8xvprdzvwJWsht7PhL18N2ybrvwrX9mAGJzSDP4twwpM2ZXJuKvtmYgD7RoXapM",
  "key17": "624Un5c5otNovJ3i6dfaaFG7scWmfNH8jgXgdoR1Tj1g1gDgmvMpnLgzRpTSBDd9HVAcEph6cCCjYBA2qhKQnJFm",
  "key18": "3hjDdCbdWwYtHRnnhCB1TwcpLKh7ix1HDJuUVEoqCYtkArE4s3Gwouxd7F6adKFWkroUqJBJbiRmL5sC65caq2cK",
  "key19": "4kV6ymjfpsYCthZ6DGrXoiJFmNnhJMJ2rRmQ1WJu1zccLwk2Gmbe1ASYJQwg8GE3W8i8Xz7ExuqnxTrb6vRxMQEH",
  "key20": "3W5mQJU9U3zUr8izycLFzPNYWXax2GrZhxv2gQWnUFUxyNa6vpDQR3wxi2pMn5ouAKwefKrrRvRJUwMpZZ6hVqP4",
  "key21": "2Ng7b8PkxRhMFvwZJi5s8EdhbZGaWAG9nZjWbP6oZMgcBe9vuHNQkaAv4pM8BvNaCVLuFpi2QuW8AH98f43onRGC",
  "key22": "2sWfSP9ebrUMGeWwBRtvb8GhuCRoCgoRSKoBGhq9upPArn7e4KnXidZb7tW8RnhtUbU1CUZefJwpUp1GHP2wwpE9",
  "key23": "3ebjgNeB4V9gYcftMY6rNQkc1ED27RSmd82s4634Ht5EeDi4h7A5uE2ZRtJwuHtSiJcNXTsbAY2jB52SbPeEeZEw",
  "key24": "3RxT7gwRUX362zjcxu427HjvWvdohUnRTARhSi1PtV6zuzT2e5q2dUxUSDRCSoAkta3BMAhreoqBeiPWqrHMDVEd",
  "key25": "3Fp6JSqMRC7SKGLZgQb4By8HJV756CotfeC6Dyxv8BCqM4q7LKeRteDtM1WsMupfoCimbDfD4aB9a5cxFyBWoQZP",
  "key26": "4yBDi2pWansSBjHKd4bFzJQ1brpCnEhsrgzvBT4bgY83ou9eSJRMbe4B77UKCUcqjmkQMeT8cZNHCey4LrycZeqy",
  "key27": "5NHRJikGZJJHo8EQLQnp1EpEpszcEy6CvGUM9irwquLfVkQpsfD7ChPZCb9v4g1o6c7euvAJm8XCxLq4TWN232kH",
  "key28": "2ZT3mY3Hv8q9a5nE6sVXgGbCibRkjSQpHaqygK19PJMaZCqqfL1h3xcg49AyMtm9p19ZURAtjS5ezyxmzNnr94dY",
  "key29": "2K5itg5HPRU1wmrfMpre2p3C7ThgSnjJhc7agzqptwawRWuR5pNSd7o74V34XRUzZWAqCjgQv6AupmPhp2LbCXRg",
  "key30": "61PbaBWUcm1TcTsdeNJQNmAYP3noZAfTmZXCV3NM6axW7vutXK8VwAqKQztWb5DgVvKHC4RoeJ4jhjquVF8kXCih",
  "key31": "5o7ASGX1hZnWRk6hReWX99qsejg5gquhnvzFHvqANangKUuiTuaM6skZFcfJy563f8ypAEar1NDXqxjWmkzw1wj9",
  "key32": "CLorYpjc37zbQky9yXrNzA2FysSRuoPsjWveb6YtYVKH3mhsynesAmZpTgiacAdd8wzxqtAmv3h1vusYV6PCuqz",
  "key33": "5Vfv1m31iqVroMjvkEWHbhqjRjBJFdDsHVXZgrvCv8ZdN7wMCQsGGd1kptgcgn1LaRoYhqpdyvpsXJqSJi25kvdu",
  "key34": "4VXuVVsTMz1bNq6bzXfv5iCp6gKKsoxc24iPMi8Z5kKY3jGFkgLUexQA8XiM9oEKCybZWJVPSAYgPLRMLCG7MmBY",
  "key35": "26vSGwx9BCuyv7rhTFTbisBtbShbgLdSXgqcQ6J7URKpZwFRANeBziL1Jt9LVWVLv7kbk7fGPMdw5XBztmSwJ7Yd",
  "key36": "4yqE1RiNMDGogLjdHkZZ7d1wWkwEx6MDPvACmjNSgdGbRi1xAfxMjpq5Q8kCVVQLt1QUTx9i9wtBkCFwmuB5L9my",
  "key37": "5heHcjvRxNsuTTvkSwZJNLNS16TDs3PoehMRDCoYHKQmaA7uiizfD6PdXfLNSVfNdV9rgA2d5zcLwZRkCkJC9oXN",
  "key38": "32u4tBzhmMvxC3GGQFFNrPbY8z1DkWR9annnYKwGr5zLK3JkHgDgmnfuftPCFL7PzBouc5NvKevoxdkLF6LuWJTZ",
  "key39": "VKFUA5GmB1fD1vM8qnxujUY7pZneabnxkSF4bSU4zE3W8Gs7FFTdTGjWf9BiECoka63L5mi6da6jUgjfyiiosvW",
  "key40": "4RCHmS4QkEgvJ7ZgmtZ3LJP4SeTV5WkJbAsYTp9uTxtgJTwhMNT6hioQnaQwc7dbJmDpqX5TM45D9EXaCPFh2bPn",
  "key41": "fZgHFNHzGRLnCwHRBGHNHDsdtQuNYyGq4i7uQurFpFpMjwuPgBHECnyZPVC2dyg8McBzUXP9Ezp7wNH2NPWnxqw"
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
