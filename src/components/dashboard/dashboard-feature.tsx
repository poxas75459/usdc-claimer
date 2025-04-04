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
    "5HcQttxBmFCpiC7fwjdYVo6jcM16bbCPb5kCxg6mESSdLhgN9awgNnX7pGMHvuFSAR497S5Ms5fiFj2emDdYmxif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43gmsNpdUevUsA8TUTJUmKid2ZRrpt3yoNfXZHusPsunDoBMykBeygHfmooSBq9foC82osBVC5Ey8nsCRvXdCyhG",
  "key1": "da4Z6jWseBhkMGQPyP8yottbFZG7y39AEigLe2uwHxEwBdEiPYbor7GFhF2TJ6YWos2i4ASKcpqbpZyid9xk9ar",
  "key2": "3rxEiKnco9BoFZRMVfkRGfg3rfQdZLKSvJtDd9VjFCGQLNh1sfaoD5jDvciqX7rQYwcmhPp85FyprfjM3BsekKBh",
  "key3": "3C8dr1p2kgivSAMBxh2oydCwRSsN6js9HKSzQyhUeXN3hrmLYMgu4Nr3ZWNbzBME8Sk9ASJSdBQnbams5BU2fpey",
  "key4": "549dDmLpVKrcHqHDfw3GPK5yjbZoATpY69TPieqbXzM2ABkVFxx1kCj89992PaGKCa4XeRU96agE62cziRB2F3qC",
  "key5": "5xs3AptMHBcRW1RYG2vZ1u9L5rSEFcjPhgBUYTEMzyj7wze5Ybi8mQ2Sk3iMnF8jXUhvZDHudTEkR4sURwcejgou",
  "key6": "5ATbnafZ9cVnEfbuMT48FKLWZJnAUPgSNzuL6JQjTbqxvB6RbMrxN3Ey9PnjrtgXYLgGqQehirfxohhp5pftzYbx",
  "key7": "5KHh2k44aN2dx9VG2gumtqczsieCUCrnj1XgqcagcaCKAjd5ykyNPSUxr4KrsKEEQ61yhEzLgPzHF2CTH3DuNrBq",
  "key8": "3nF82z8yma1iwzqC5ay5E5dFeV8EUJVPdz1XUioHrvqWnWzkswcVjopJM8hsMFbUwZpr6YX3a9Y65re9nRCzsf9T",
  "key9": "2X1hudJaatMJ8o1CMmuvFeDfU1DVsvJGqGYHpcDj2uaGR6jNuKgGqpNTJ1HJoCJbKWTMygoiX3sTzL9p4VTRj7RA",
  "key10": "rJE4qdmfZParUC1EUYuKJWuZASuwce25zpoGx2K4kN6kAmhPRrFWqMEvQKFyCTj6QPqJGQaMJk5bg9YFhJhEVKT",
  "key11": "634khdp5CD171zSTFFbKg2QaKpgS9WaGuJU56mJfxiMBSRFMxbrdpggND8LVsKBMyWTe5Wb7dkswk5ZWKXFnX64P",
  "key12": "gNXfnEtcfg9taGw8CPqgtU6VF5qKWUuoQELFWgrcjjKdXbdk9uzLbukGBHV72ND2K3Mjx8hqqpVFdU6AujT6LKi",
  "key13": "24NWMe3EC7kAjav2A21vMFbdKtbprBXFswHsig6U8PbG4nj5wgV5z32EELA5R1AgXH9uQ8o9W4X2mVgSrtcwLegD",
  "key14": "4GFQDFULDPhxqo2dRy2QvQbBwEf6jGGYPU94W5ATFKFJv9PDpPRRcEQAg1v6tx2sWHZbYQTAAspsVVt7R97ifea8",
  "key15": "5aZZCdNBuBJ961XV3zPuPwVeTG9MJpu22RnAWEopwUomuQkeQsVxoc6uhMhDm59KEDS3QEAczAjxbdHBMskJFAg3",
  "key16": "5N3LMnwaF56hMVL7us3aqcYyqJwbbAByZcoKqrrqhDs3TEvzr63gAaNon6VyWBVNgu5f2zXA2n6LvpoZesUZcPAA",
  "key17": "2kmVDG5UfzsMdzennARdxb7BP7rJ2BV12rUqYFayXTCM9NVdRC15QyrXJuBt95nWmabyya64fZfUPJeVeyfZrjip",
  "key18": "4HvJMrMyFZ9aNmdFrj45K7K43H2hdrDtjwp9XWXfVDzzME7mSyJqMpCsC8j7itSqwBv4N55wUeUzEQzDCnfqBj2z",
  "key19": "2DaBHFWhmPmiJ1p6nJLmJLHw1136MPd8LSs9mBqERur1AEWFwZz5KK58tNuQvsna4CJJKYRC44FCTT7XaaC5oQ4C",
  "key20": "3FfEGZwyn1GtSQiSX8hYgqBpGzRBKYE1ft1aqc1XJjJF5H6PDGDLEjUBvCqu8XSBxsRzqDJLnV1BxCnSESrnotPq",
  "key21": "ALyErD6ShkWBriJ6BRfMD17M3qKmYnG8B9p9MJgNB8CX4dzvakpsSGeZcGbX5wpZj9w6gjiBK3yVU6F5SXHogaM",
  "key22": "nok5PMAHm1xXRYeFqZybqYobHxEruTsNidMzxdbP4TVFtuFsZcVu4xR5rixJxwmxFgmT2vUjg8cR6SFzhP5JrWM",
  "key23": "5poc1qfXSC4vfqGwKUqrfhFjWWpKCDnL6hxPdAh8gPjSpzLQ95uY238xdeuCYZfKkQAbsWVvr2iiMf1JgQhZeDUH",
  "key24": "45aod6jBCmtMn8XJnkKRGghsS6ayGNxBbiLY7iVEaEVe5JMu9jh2zUgEMCg2tsWKLey6ET5NUhWRab4VDRFNnW46",
  "key25": "429dnSS1AMoEBRu9D281FH8yuvnTt9jnz1g5JDRYP7GwCF5V2xcGhj2Natap8WRJxcdvYaWTeh5u1QoZgAKiXe2p",
  "key26": "5Z84NypMoBh6bYN9d3mNUkx5zqHnTp8KHuawZ3yqaSDti6PzjTcgMdb2GARs72qtosDQzrAmKeqM1hHnp1PL3A2x",
  "key27": "5gS5zBz4FKoT5SzeENmzhTvWeda6pFC33dQwahsq4tzYCskT7aGcxMQecw2QuG16pbE6UPMQDti6YtHgRU32LBqa",
  "key28": "5ydCBXEvxwyeUX85AG1S7ayShQ4wEY6j8zMw6KgF5d4QyBQDeGFTNvU2XLF6YTSupN6wRhdpUec6Ag4cFdjyEkJP",
  "key29": "5kLiFEUqFWEDVP46itPvsFGs3UBWAachRAQqZWmYws7UyCDMrtG2KimGYCn5vZGaaETrMzmZdGiRrKaXasr4JD38",
  "key30": "3iZRBn1HajdTjK1nysRpBypAH8vzJc1EZZ9EkwAqP3TtGWQ2Rpu6idf6TAHvCv4wARAMpKCLJDvnMK18C8DteDQd",
  "key31": "49DU4U4g9sDWeGEykMJkhpdE6QX96sHNXpn25VWFvbXJxfrCYzb9PiB8EvTUWVvqsW6j6LNcN1ejcdGJxM5TmkLA",
  "key32": "4EKW8a6gm1w619NLfzkRyeC4ziHEqn45HSj9XPXuG75FhMMUFbFrU7ggHDM7367pJb2huULjb2kUbHKD44QVZPoG",
  "key33": "2zSDKmksc7fjPByTCkuRzmPwvR6MoKpMga8pqe8eGMpfip6PwfDJAGSdtwyJy5wQC78ZQ1Avqpe5TNMdj3YD2bog",
  "key34": "63otCEwstD3gdkUakAvUAoFPvs28dEKUNgEqbosDPfJvqkaLc5pcGtXYWYAgkxwa5NMofBoS7pVuQ46yiNQJ1myw",
  "key35": "54HaGQ77fx95vTXGtZexT6X9UMpyi3KWbFvSXqHYxKTvsmhtLmNzrSVKabjdFfnczjMMGc9CREsHanNBjcp85Kgm",
  "key36": "678ZkEcjjb6d2HQ4qZgQnrLhSUR8Np5jd3DS4FoYZFK4sDKnEYLG98EQbzjCLtDLrP4bDjUQgjSKKs2crEhBXP5T",
  "key37": "3eKJmKppcoyiQxPTWwgkoT5FF7XvTruJALeWXKFK6AXnSBRHFuWSigKpe3kySJnSxcf1s4BNLEasiC47rsUR9Sbh",
  "key38": "3N8tdGZwFFZsRn3j3ty4PMbpfaWNaPnmEw2dKtddBWyNmvhzmeE8zexW1YyRas4wTvomcyWgqEz2X4YzKQAzNCno",
  "key39": "3WqP31zThr8zqqmtPGGFZ9oi8ZLGANwB65dCU44RHE1FaX4pVmN2VaBFuq9xdNaJfdpxnHWTER5mqsjrA487REwh",
  "key40": "MpdDmiZ2axetu5NwM3CQhZH3jeMPvGpdsTBX94Qaw9ydnACEcj7Ue7f8zKQUh6FbXw631yag1RRTDL7kZPKP2UV",
  "key41": "34vXBj7VUagTuX3jTyiywiQfW39r6w3saSn7W7JtotS6EkXEt4bdi62LrRg3qWjf8GvgFi1Ahgf5q7Vy94Qa7yAp",
  "key42": "VfqkCniWJZjgU5Jgp69pdN2MrVmJv9aayjoYZkWJnNwXPx9jkfaxYAANuXxFj2nHZuJJRy9kN8DDpcDeGN7633M",
  "key43": "aXgpFiqRoK32gyMezDnYKVVh3Ykv6ynZpuASEteoUQaSTY8E8QBA7Wf6xqBWEWs3d8PRJ1FweiAQtw3SeBNwcdd",
  "key44": "4N2dGwPPak9vW6XrHiR56MWnDeeBpagfHa1w97EFCacfM8jvc6ATZCDcTKEY2g4bLPCfUDamVBT7F2H8uMY2Es9",
  "key45": "22YPQofsKDgZHhCipqRK1jjLhUu3FDMCVW68rdhhw2erqia8LnXJkN8tsXUip4uvqccHFzUxjJiqAcv4ZVvc1H5u"
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
