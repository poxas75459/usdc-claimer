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
    "3B7Q9vta9oVAjzhSHfXqXtenYW3471ec1uSKFSdU3yzJGhziaVAapAKWqDAMLhM7ZAtPUsTnemXdJj2RPxSf3DLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "smkryJNnepA7SviSnhnXHmkdG13H5kunYUunHS2PAcwUT9FjHbxsQiBGwPnGoJWfWWAioim75PpiFkxSiat4jNa",
  "key1": "5MLB27xU7FefeKcQRkLDZx3C3su91vGGiRK13QSVd9G9xrCou3H55LYXLETNtB2McCdPNATXMKfKLEigYHM8xxHZ",
  "key2": "2ev3AgvfBGyQawDecygmoifASeEUuEqs5LfzCZz5nK5EsR61jr7rk1ng1zdTBgApiDLwDZKTsXEt7nZDYV8X9KSU",
  "key3": "58a8YsTSmivepAJ4xEhM7NwzUuJpgo93WL8yfHYxpRQMAyqiCN8x3zuPAJDqBjHQx3GoZ6FsvsAJ8TR6QaJiARDP",
  "key4": "5Z4h3UcJ69R2UgEvZiQniPFEarNKPub37dfcv5yJ84NW1kEtxk3eqZpaHm7vP3VbY5WY2BJBhP6ExcG1f3eYPShv",
  "key5": "3DkWwQ9j1etiwat9ubP8ZB6yCmVc8xtYuqDrqLqXLGx1YWVxbwQPqUPdssMbg5mPuRo2vvt5uYjHHi8AdG3uFR4g",
  "key6": "5w1raGC5EuCorEekYwXTKXoEpyaCD3AnRhfqrg7mQRRCSLKowWMHmHUxhXiYxBEZzdvg3FWBqWw2Rp54s85EXjr",
  "key7": "4FnrCcMsEjpcsxDrDHgjXY1HCHSjfqC1rCpZYFp9mU7ufpsfkp5fucqnTae18BSK7ynyiekq7qgqNq5CM7EuWZ3k",
  "key8": "3BVKnfh75LjW3KQVCMeT2SMCiRqQGgrg5raoese9BTxPS6f1N4yrnbGkEWAKSFfG4TwhkTSwZNiZg9TYGHWALJ9M",
  "key9": "4CkNnVZAT1kPQizyhNkU3gtDc9JBhHMMBpJn2Dusf6S9gqkFdoUR9QsPrarMCTisNV7q75BBinoYKy7EmKXZDABe",
  "key10": "5fzGyEmMtvvHzE1T95RjXskipX8Q3rgbECpp6Cj9ZGxiCifjUcSvVfZn2JKhsWa3joQHrYDhvmmoiPjzfSnyuw4i",
  "key11": "rXsgRwnKPBn2Xtqm7CoXdXyrk6T4GQzA2ykK8zDYfek2JJkaZyQ5BaEaKouv2ULJ5EyJnRgvaFatM9625uwJsx1",
  "key12": "2DSqKd88jqZEuCUXDPnzWyS8TaWf1viPp9mCBex1QKKoPZg88jNPxnbjWiDMGNFUJerJNa8tMHeGM66r32JJmq2e",
  "key13": "4Btenx57hfkCdvnUaoSNyNgR9buUEpSaqTuT8ai29iaCBn2ej2coFV6agMWrWTgo5TEZ8sppwhPDdRg48PdxvaXw",
  "key14": "5NpWDUZAJL5cpeq3sEVKF1aKe9ucLxDPG5WtPmdVLK1sRjgcqv2RsujrRUQuxainqbU7AViZAovRPZJp31bNGi1m",
  "key15": "2sq85crpJxj8cBHsS6N4mRHX57NY6kmxuZTp8S9wFwPiT1E1hJ9JAjYh6cUGVA2k9M9ycPR8WmaC62BHbo8q1XDu",
  "key16": "5UbxofVGpTbtw7zgPwmbQHMspLyGybHZjwAf17J455vvtiHqthun3ZLNhaTh2wfm5qQAtFdK7FswQ4vjmMqkzRtn",
  "key17": "3Zue5uqtaEpw6eD48FchJCauv3dACmxT4HhFBHCP9xyCCgXGMqeYqPdViG8JNSR2mjdUj3rrspaTtihuoRbKQ1XZ",
  "key18": "3mHFDSjPUwjT8SVzU2kGUeuFdVJiGB3jufyEg9Qt5bBuwEiLKvKYdHjzYQYt79R5ZKnNyAKjjxpjDXhnvf6p53Hb",
  "key19": "MPX5r7NL6PqLGgm7JPVYV8apy3kGEQJcpx4JEaYYQQLP1bW5e1nfgZDuLpFrdWewcWTDtRi3hiPJSs1kzDrePmE",
  "key20": "4oBn7bc57sKCRbxrmq9gvv7TVg5HxB21kSGB1V2peEWa64oTnU8RWDG7qK9mXefYfMSVWHmsqCYVa15r2d5yLLzF",
  "key21": "4DNekDfggEnvPtA4qa4R4J3fauY2LnBr7c9vtVm1ymeJsquL9SAJLVtHfj6MniPRPGixqLzKBBFHaVieUrzyotMB",
  "key22": "g2LmqUNkYMzZb9b6CH6JAGqYCCDAbNK6894UiK5oJ5kQ4bKpZQfpuAESemXehJf4C5tHS1Lc2YEsjxbgrWuMkFC",
  "key23": "3XhUvWNK41mm8JJvgsaNrVDEgrswZeerdckwCcy1gWgPCCmCyxxCHqYRi8YeMic11q88WrmZHrEj1mvQRgtAtoNB",
  "key24": "9pu2GkCTDyxKX1VKt3NoQVWiMtnu5U1p9B1ZiEs1VRYAydUfukxZM3PWR8L5heR264aSUmjVVr4tnU3Na9zTCjS",
  "key25": "492JXUKtZRCPrCFXgMMvsG4JVphd6Njuj99Ha3YocrNf3LaTU2KTfgKgmKM2BGtC6VdRwXeoFQhjvzwrJcgUjJMV",
  "key26": "42DLF1A9GZUBjnAb4KcvqSJW1dnAcDZpA7kMkByBAwhkYcvrS9VH3r1UyrpeDdg3YYo1owF63BuSmM7hdrzDW1xL",
  "key27": "24W4iSr1qveczwebcigK2aPrYYK9sGCagEvZPNDwAsTfkx1va2uzfNuTeTkAMF5hUyzmSMX7wYicBCZj5NqJx1Jg",
  "key28": "5APhksEUqDaYQhFFwqbx7rjNCQUnmema8vak9Hn3KTyiQxwT5XQv9thYXEZUXiggfgfLZ14sXhQJZ9oKoDkiu9YE",
  "key29": "acfciLp1q82S33oB7cqk9cTyEW4e7tacqtyjebssqmgXzHdfcJ2WL4QmhpaNzqAZwVVscAUmuWvvVhRkk4kXt3p",
  "key30": "y8qFei2XFEGyUEoqhAzVXqPAZgLZx8zQk6LgknpftUhKCqPTgCeoLSaLCy4R2MHXRwAzwBm7cjcEXvByuYDow3e",
  "key31": "Ps644ozXPA6uNT65NgvSDdd7ioextnogAZBgkc9c234WmezVLDdLhXMmKJpRokXba238BWeQPzC9ahUnM8rAFtv",
  "key32": "55vmVhjPvUNRTwPqRHMLJUmqEN9F2eQ3YW9we3ozcChbHECs68LqTXWK8AW3iJhasgpXGHFJxrLFpSbazYt8cbXr",
  "key33": "4RCW7BEpfqmfYu5sHohk5NYfR6mNsSWGHazXVHKokXEfHATtHbLeZRhbDGUpYPc3Q387EFwn22VCfVfFVJ3iUREp",
  "key34": "2frndiwHxHPU5uciZsSuWWuEAfnR1qKbTpnGw55otfbZBSszx4MwMEiaC21YMg9wLinnj1MQ1mVsXDm44HdXw1Jp",
  "key35": "2sPdBbem2df1n9BHdzegmkVPtShnRVvuF1hPNbHLtLcgVQs9MjyZVnaRucAE9qokGw3CGiXk6sQV9R6wkFtfUktz",
  "key36": "55Jjd95sy2vrX2DTjc8Xe8sjoGYFfLcsX9t6nnzSjXQAYKBeiFPDCqF2Lo8FoeNcmov6CaF9ftRmnHBzGTqwuEX8",
  "key37": "ckHRwwrPDXYqHf31mLiueQ4qcpCz2oy1yR1nmxy6eaGnSmwCo59YVXgu27Ge9Fb4owh2Akw8jgie2RA4d3RzeCB",
  "key38": "5AnL1kb4BRufZMox7v2NQpBcjQk1zsqPu3GUnbG1nJ9CHpSZe99SVnve4N9H3dKsYTzJNSSXjQs72FjhBraEKoWZ",
  "key39": "VC3MHQkjVwZVDo4QRnp47qTpxrbgxvrg2j6dCzKV7uydyKcJA2juAToSfJne4So69MfhJD5zsSDcNTZAd1cnp2h",
  "key40": "5pNDVZFtsbuPVL76Qnb8Kq6muLagWZKMBcVxikNtw7jLweKZ4t6ZNbZWwcRoe4oSDDZ82Ddot35hBvP3dcwt4Xmp",
  "key41": "5u5FySVqfNHKmzC5NAAgbSQAbZQeSvJosCSyBd1uFFXN77VTyaUUyM4YzyiAMjGBUJFhUhHD5tSYQJV5ntfopm57",
  "key42": "3N1TwUh4KhUjBqEB1eVRoh11EJ7WhkzccnNZ5idd2zkQCtTCviU95LLJYuTZevs5bS8bUqNS7baNC8jDtuAKdcZq",
  "key43": "GeQUr1fKwj91c8QxcgEbZE8LzJj8KidbiQKJhhiQJM673ucLcGvF1JorEKcd8RuhwDB1NeT6DQkTjrK24Dp4aqh",
  "key44": "61p2syeaTBU1vdGAFu3Zt7yDqMhqRZTtjK4jY1exKVYarjzaJoDYmwdu39PrhPXbUhduPzqKhSRosmibeo93WtuB"
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
