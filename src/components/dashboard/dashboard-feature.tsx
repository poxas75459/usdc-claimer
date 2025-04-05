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
    "3yszmokNdGSUgtcd8BWdnUtZ3GFh1dKstyiCGtXTLsqWmfaVQfQdzqepW3REQJJP3tFwsMqvuW2Yt67VMkf447zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b6f2eS1fVeso8oTtSvMRZjKhrpwjPjLEK8dhmvyog4vYnd5t6reACmESkBtr8tht2wX94k1BxYk28aWSHe6tjsi",
  "key1": "5ghWsveS7pBGvbQrzPvWa9oqWRZ9uL3VuiJ49Q3TK3X9vRgnCLHYrJTqv84WjiJv1NxNJnD78WzKM1nS5zXKZLNf",
  "key2": "5z52pV51r6LtkFkxLkWNMm59JrxwPgbnQ2ojQ8VtmD4meGvZYdSyopsbD7DsZMFMs2wW4JfR5sS7TtxYzEF7cG2Z",
  "key3": "38jA7GFFC3JHwUUYWPFTD8TQ32L5kGRbQY9aUUrwCM9kMpW1JmdX75Uc9iSBVLAmKUqe1jmUY1ydoob3DByLXRGm",
  "key4": "3FxjALDnb2NLBRYuvYTFnJQXAL4cVcTBgv6z5QLjAGQhMJbVPoVk5kqLsk5SWSYReQHqSTU72zJFVQ3DyVnA4H8N",
  "key5": "5oaovECzdswoBRRCtNcUW7BgHszsYi3NehL4G4zFjC4ZC6ETTPUtBWgbYo6WtQwxRJjfmUmu2cTyrvW3S98hsSX7",
  "key6": "4tV92xdLvikPdDRm5cTsKgLofqVbmqQRqeyrkWZZcPkopvM5C7KP85nQvsvrfW3chRw6RwnC8v7mbmzPVGp6kP5Q",
  "key7": "4cmCGAq8s4tSWDJ1DiQvh2LhrocBhNAH9Ekci7ySVxPJnX4eoouG2J4zAoWpFbwEuXkQQTs1nYQi2UnUpnGahQf3",
  "key8": "DcRc7Dcttwd2etG7vnL1CFrMV11YkZsjJVtknrQzvv9yq9tbBQH2AD4s1BJNjUtmRhHYa7mcmuFiAUfQaeEfpJT",
  "key9": "3iQShR1UkMnR4VDyiiKVDDp8JVZrCxk34fgZkUP5zJuQyN16DcJG8VzR9KzvP7Y5RUn8sjPpwG422QinYbRZQ2NN",
  "key10": "6ERbqHb75zTunGYzaqcps3cjThpcuPyxtWHm8ZJWgpzn7sybtQFEF9pePB5nyHy4GquNoJq17fF39t6THtJsPVL",
  "key11": "4wMpTKrdws9iqtY2LDbB91uh2i4kxLXybKSQVBV4ckctSAKj9pGgASaKwAbmvxd2JbwFn4hY4fRrxSobhVhQ1LEZ",
  "key12": "5timDQogTRteivKGYbc4jXUX6NmqQnnWtTuVZWXvVAFz3496RHod68LA2wkDgW22Yu834xtLXyGxb1CxkhrvUwRt",
  "key13": "4TYMXg2rk7k7WzMXhicgn7fBQDgEdq9JF2YSYJMhLhKXpPBQwMzBgGyeQADUizRwe5pbaVYBBQdbqEngkmfYx3ao",
  "key14": "44CFu89pfFs2afPZAN5mZonmrqmXczkuxMBG8RDMPjhqxWaoowVdW4vErTe8P8PacCKn6BDM95ED2eFucPvqfaf5",
  "key15": "5PgW1tAGZSzB7nWSTWjWP2fbFK763tokidBui46rYGRyGGnty7wmAdqQFkMVtmdrsNjAfQCxwanHYy2qDTyXvGFK",
  "key16": "3Yyf4jgBdTiEz8rSPzm7keVX1rHjKjtYYoqx6ACfib3BpfJGHLKgrvDUH57bPQ5oB2GJqXu3StkxBLxavFxgfwAU",
  "key17": "4p9xqmEjcwcBArzGK6GaCgHYSVPX8DtLXowGb8mF9B5HtBSjBEM5SNSuhdwCuvdosFw7bSPemz3o67peq8xEUBKh",
  "key18": "2nHNzVQdNPkZzu1Kb9ty4v418UEQk9CY2a89Fe9YT4EKsLLiy7VmgCL6cY1TBNfhiCzcyuyvxqiCssLwDWzh6AbS",
  "key19": "63Q6jSue3Fjm5hJVrChprr6ezAJKA9RVcnJotNvS2tLZ865SdxSFPZSyfrk8vkJjzHtCq1gWgPWa1dapAu81uYvB",
  "key20": "j6VsnU3a7CNcfcM52HWdTarV4Sxhhu3RCzrBQkUdN4FpdKcSdtoaWvdFxTkQ3VQW5Fa5a4XvQD1s9jmkGw32ZNf",
  "key21": "F1AB2Tvkpsj6sG2vaDypZPuJxMHwo5RY58Uzfg4SdTfJBhiYCLRaP9puErzjFNbSf9VtjuY5G9HmitwcLoBAfE6",
  "key22": "1XiM9aJEQ6bv4NRrLeMgpNs1u284xhpCkapDqd4UZ2zPkX1T7AcN4vUHA3bbwEtaGAwEBvRBxymGQCYKmKKKHyx",
  "key23": "4DETKtZbbFac56Sz9Ld5qAUZhX9zVUvRsx7n4iJ5HBHd6ZVuv6crsQftDDppyoEsFudEXMyV7xRVpyfGhoEESME5",
  "key24": "5n3qVFnpsoczYmtNiW8YjQ7BYcLL7RfsPNWkgEwcZtdY4f5kPAB5uepcnUvWf9TioUrhUvofVgSiPThKKv5TDK62",
  "key25": "3B5ycSemwy6hVqsZCvetBAGp5kLqPguknaEUYL8pDsgH52WmbBxo21QA186XA23MYrteSNkNEHaB64Ah3CuYhahK",
  "key26": "dWxXuovapvEjdZhk2shATwYweCVbWKrn7ruwW84h4Rjg19waor8rqLoVsdDVPPy3KpbZAUJhzD4SQPaK4TYzVzz",
  "key27": "JLXSbr5JDhMVS3pGT8j6AynDyRWL9hQgSJJrnHKCyUyiDs5AmhmuznRoaCYjzj5gNjfebCdwZmrH7EzHUtGrF2e",
  "key28": "21dq9A7FUbZKWujbbWPneH4fxGN7pi55sLkHyUWUdoCD1zGhxN3MTALuJLuASSgs79Gb1Ad7wFGJoX98DMAjW3nP",
  "key29": "5YEoHY4S6Fx1W7p7up2GD5LJc7HDejR9rP2wwZ2q8iutGCdP69tTF9VHuFgeAaqbtbQLhNSTB2bWF9J589wBvEJ2",
  "key30": "3TBSiQbpDbPo1VDWBQqzSVMirBGMyEg1kVgZBj2y8u6v9D2p6XhpxyMsL4wkoKN8oFKSwCGr8Pu7RoJr5gh7cmnS",
  "key31": "3jpAvCNmAseTcWYnZeY4TEXqjSbQWp67k7gbyk8WThZwDUC8qC58Z4cpQL1xtxyTsp41hJQixJVNejXFNVLV7R2o",
  "key32": "3wWthU4ieYrMLf4oksEQMfEreVzifsTUpzFC6uiyamiSqGGzbdUFqyGM4o3w74TyHVSYXg4Mi8uhxbT5apvpGnQe",
  "key33": "5F64mc7Y5VufN1S2zi7f22fwa2mhUfmdQqktRXXH2W5NT8NARmXj3rWCuvxyqo3Ns8TM18a7LBG9XosTbnuUFJXp",
  "key34": "4Wgg17vbBXLpKm5u7Xd1DoTUhuGHT5bpLxRScxjWnNDcQ7r5YFxyUfFTRQtoYj2AJ93Kq1mQjGFBUWeNegBLKAxH",
  "key35": "2W3TjTLX2VYtuUp7UNr3LR88fSo5L4oSbsWNPXmqwHst8qfaEGzJLVMNEFvCxx8MJaDj21g5PeARYEaHoTAqiLtt",
  "key36": "41gJAjCkjCysznUcPqpFM49agk2kNXAC4wc47HbgPiJr3r65vowaEPPeSdjEabdNFQqvPrfygrEHbupC8oj1wJnu",
  "key37": "67mWch8CUXJqZnnf3hGLmPVhw78JxTPneKy2Wi5AYUUE3aAknxF4nAFjZJrfNpsaSdK1roYGwFPqzHq4Zcc6zGrR",
  "key38": "2rS8JUr4xvSP8Kf8SNC5B3RnWUe7GhWHsUmXeKYPWMWh5Lh5g4WERsVUoJNhSV7id7zajqU9UZnf1GqELndhSUzu",
  "key39": "2jBmD1ZPrFMgTu7rV6KCRpRUnytqEqa2HgAXvsVMmJyaEHgBqVQo5yU9na4sDeFyDjv5JJUKsaUwgPdgjdDFHijE",
  "key40": "GKKQCoav52YDG7wfyYwxLAfZqCTixbJj1oaMaaPva9XViCBf6nPnRSjvg7HqWmCCzkrDekznPshrCcNuWRb8oLZ",
  "key41": "67FCgbHmtGDQbVx5gBDHDkyYy6hpqZ1zdrbEVHLmVSrymSbuxFgpuMhPygpXU96ebZ6riq4GQ63z3nmBrQbVa8qA",
  "key42": "2Bf7SuUG4yHYsEcgQ3kmdg2vQCf9MTAvMfpmHnQKWxvNXV2e1sk1iAvEfGFTVbC9LAnLWbFCnnbMVRynVTgH6WX9",
  "key43": "5Aog1zbVtZj4fjxwr4AMdoPP7nLvMEe8egiX8DEVvbAUbSdqdGsY4n199ZDkFwA4B3SHWhSr8tzVs7er7UaH6GJ1",
  "key44": "4n2tToWieHzorGhmsUYbhjZU53MJLx51gcGCeVaFUMkA6VAr4w7dW8xapRABD5GhSb5Ck2doTdDvFg2gsDi6qgKf",
  "key45": "2K7FL7oc7PAn6AjqaZUpzkAKA2zuWr8zBJ28kepHhzSXLFmS9Em9QEs4Jrh3fPnPWEfbjxa2dNydw6751fJkABZk",
  "key46": "3qJ8wyNkekKN6eRwi9hoCfaioNvxurMu4Ha5BKNzGBDPM5mwE2ehLaRTdns4P9X61gXUpDo4QoxWEys3BQdipDmP",
  "key47": "4ToyGJ4SwyyUvrXoaJ9YxAsA6iJ1AzVGEhJxGGqXumGpGYQkbaoYNRpcRvS97hktnQ7nuTJS9oFAQ34SbBMK4Q9L"
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
