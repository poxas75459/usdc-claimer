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
    "4dcn6ra6tZPj2oW6q4MsBP21xrs5QsHVcSt6W1LruaXUhsLtJpZoZTnEMBazFv5F5TLdKDE7M83nPXPUDXRip6Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wFMsWT7ADjLWkdaJU9oBdJMAqBvnM9H6zyuKhpbQkyEDwPk7qg1xuonsrCUMB4AUQNWP1EUBf3eUzbX23ymRj7q",
  "key1": "2ngXWNWpNdqMTcit3nvREJCw2VVdkoBBQhKE1QpLr3YbxLbbp8LJKAHsSNN7d5EVYsXxetdphVpjut6v7y88s8jd",
  "key2": "qtxbicHWaVTjUXTnStL7gSbph7MA1z4mzpmPCNaNNTQghtR83LjJtkYkmkuEeur7bCzHuHmfW72WcToePehP9sQ",
  "key3": "gLEfLtAKyzWYM6vPL8QKdie8S297DpoUPyMPtj5D6wCkQhScxxtoRypH44W9CLTA19fYkkvqwk9MT96WMT81V5E",
  "key4": "D9UsT922p1iePf54FfPVk75hFBBgByAxQ3ih5aoadzrSHNgrrneZ8JyNKUwD2SCw8oXe3hfJUDFMnuBs2rxPRFN",
  "key5": "2BfpHdBo8dD9RczpDP3CEwbDLNWMNNj5YEqufWEcEA19bBXiGDSMwi7AcobAFVk1uVZ9rQ9mp3k2ypqvyUNfCRnx",
  "key6": "4Pz6a86AK9sYatv9iAxcKGw6aj6d6bGe2aNmRQW3toUrharFezURmosQ73JSWAjScxJgsrdGhEDAFPCVGt48MfJe",
  "key7": "62HhpP7Rrb8YyKG27Ewjz1FuU1MuoewzcpumPyNBX358zyJ5M2t6CD3bZjzisCrWbb7bcfCT1n61p4W9gkJxrnXh",
  "key8": "3BJUzRtJSCCYSCTNTdXvbfkLLfj4TGTJcv3Bob9Nt9bMp8huuppCnrbfpXzkNwWemu6S4tXhQ4g5TBH9yVRFoyFE",
  "key9": "wSM1wMnmqE6Aeft51GT8uJ2VzGSWDeS54jDJexdysSLcSyg9TAkomHBZYJrkiV3pudVKq4suhHu3RyyfotCE9So",
  "key10": "gWz33LH2qCWtV86euNBr8iFsK3RPxjKHW15hQUkgvjwu64WHTU8twxkq6zoz86oMnZ2x6bCC23AuxE4uFrgFHxU",
  "key11": "2ZsUu7u7GQXHKbrpoQzTvPti1zZ9yvXLBdYHspsk2q7sia72zVMFQoNEedDfheQBYUwLW8pVxxPM5DtHefD3XKge",
  "key12": "2xV6bFS6B3MssP1Yi8UEmGLpiuZS3PQWVWKscRvXWUD8Ai8wnnoWT27UvQ7bQFFoQaqBDmfqGcomQiKJURymtvUU",
  "key13": "3V633vMLNDTztMivjtCwssQTvZpapa3FGsvaR1LL1EkiLnYcWDtQHQkNTG4B3F4iVcjWuyTSsyBjFQn3YMqJZqfC",
  "key14": "4HWgj3TMg9C7yCzdyhUwgDsHaa1jZWGZnxGfDP7Znr2r6D4A1XicNrT4bDnrBdcu9KZz2aQyYTGB8saBnAQsTkKY",
  "key15": "7DHeNJiveiChzwFusiNPXLFD2YJGHEZD2QP5348coZMfREtVwQreNwHkHzicDzYn53F1MwvM3LE7qVUpk73RhEB",
  "key16": "44xhXsV8faX8Rd6zdk1m13RtNVqzoSEJPbYAGUZotbShWCbqDJdeJzwqpti5gx9VkoXv4Qqb2RSrWBy74V3eVMJ8",
  "key17": "5ZygP4vyRJubWRt7q9vk366JK2eRCe5KBCKeNn6xLFwxk4JeQZcFSG27PATYs6upSFqND77fDYTXsf7vwz2x4xya",
  "key18": "2k2dSiVpsFpAZRG8J5Wzs3cb2MisgaYwGKAYPvKkpDDEXkGUrKqSmxC9EDop93eKD1FbzSo3DnWg6PWa63NSwBfT",
  "key19": "522UZqrR33BGyU1pfkHxKSbA7jgxY3fYFAuSmrD5MSFwg8ZBuwiw96gENU6jWv5KjTeY7XLp85NzorCG9EZVmJQM",
  "key20": "3WfVfEyAVyubUyAndBme1bn2itBPgf5cDK2spkhd8CYTy49rDqtdyRj4ahLLsT1Yxq7xi15d6T4xtFYhH9Pr93HF",
  "key21": "2fEX4bwXfWJrwE4QH4ks3T3VaZ7yxWyysE8UQX5dQLVSgaZ2dNb6ajAJ7hrEbLSUErTzbeVjTHDjFiHQRjc2QXfS",
  "key22": "3dzgYovPkoF6KEjbdyeLxYKMqxgYNoJaG4u83D6fWUAx88xgWyR1AWbSFh8XDyWJjFT2mWuGPoLdZbtgxYfu3ot5",
  "key23": "7y1PbDyUMAPpLysXYQBKxvPfjfmKdgo5XQxWkQ2veEcznamkRZT7EDNrUwYxC1f5atoYr9WbNnR7E6EMcwYXoYi",
  "key24": "5nGcXaJ5JCry1vCwL5R8TiyFKUUJkj6BCQu7TLiXFmEBx5QTfZyW9bKTgck3BaZHTuxzSXRMeH17GfcaeB9mf1Hq",
  "key25": "3jGASEJT79oD7FX3fpb45ECQeL8yCr8BezvXxhktg7VvaC2DivqgWGjHy37PUzyV7z3pDm1AP3Xy31TF7haixkGZ",
  "key26": "5nkDg6AzVm24fUAjeyiTiLUkspRaKUJNAv2JGDw9teTicw866DBEnATm1UwR49HwtJxkctSRxVRSF8M491FKNk27",
  "key27": "3C6aqGhkEhcwuyhs9nxh52o8zQMWGS3NSRjBGhxH9Zk7Tc6mcQxsa3VFWk6ZXJVR3UMim1eQDPdbzyCU63LXGj5q",
  "key28": "4r545zWSk9fn4M4Wj6U42ZbRA3fWvwgx1LN1zDSMsy7rWKaVTsqWvj6Gd4PTRqiC965MrHsPTrromyACrxioxPDN",
  "key29": "zdZcfsaquxL9xxzaX9Faf6DXGGuYtLR8PN1tep8CiqVL8Fj36n7gvS79nUehAU1ihfe12nLFKJXrJHgWDY9doPg",
  "key30": "WikwskDK87gtgWp1mkbpgNfWC5h9z7m2Erv8rWhjfTYhXriud86b1iUP8KRi31HMjFkBxX1gAEkTaFBGrFJyo9F",
  "key31": "4pJ2dSvzdAvVJQsmCm6XX8qCr1ZnMmBaWXcPryrevbsH2HheC19GyvwcvdKwXxKeHzPu6UWybv4rNfp3C7Cv4heJ",
  "key32": "4aT5rT9UspUkM2kssRH2mBPHSVndMoq4ta98we8gWkN7cUgRzN7gZdZChSTTvAbqT3KsBDoCBj1n6ciHDDTPp6s2",
  "key33": "LBYaTgPos7GwVTBhhg5sfGNnr859mdNRi7LQDQPwqa9eU9pv2c9fQQUhtoCb5Bs6SALpc1n87t8AxWHjSJ3Fsyg",
  "key34": "d1oRkJJQcqsJXdAoBam9KaritjLFpbCUdSrCoYbzxBu6HCNRN8P3xrgPyP91jmh9iZejvPBxnSYrMUbSPfsQg4s",
  "key35": "4ev624oUyNouwFjHotm1NaZ7feAfsNWsdNrmma92ugo21MZ7dQ3wgMZQU73aSfVfK7EgPwuxz9iJ3zcktr8XWPRZ",
  "key36": "2EpDiNBuV4RKnwzhDzgMFQbLjBUtQUcf3TN3FPeueuEFYvTBKHu5pAypVEsgXqKu1Tw2ckkTJfNyYjrsSmrqo6XN",
  "key37": "2NXkgNjbYqMo4W5WdefLf4Fk987rEiqm2x98WWeZuHTRpqZpRFu2kKC1uaxTAq1zfT6eAKuZrVfFwG54fNGCccmi",
  "key38": "3sFrXSwAhYfT2SVDFLQ8Ee4y3dwt7k3m4WMVArNHu3YJxprsfZWn6uaZdn1XkAsHm7P6HkLzWoyagiHH6obXkaxG",
  "key39": "338e3jSpnvceULWpfX7Phcb4hA6j8d6qqvCyTCHyFhmGBQUb2xiC3uGy5bMt2hQsubeGwWxCrVpfJwgeQb93s4Eu"
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
