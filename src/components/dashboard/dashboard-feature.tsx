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
    "y7McRq65Rrqk5ixng1NAYRbn9LRcGNdNYJdxyvqqbKxSQMNVphP5eGdk5fgcQBJ4AEDX3TX6yJqgWnQRSnWRFxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d9JRfkLFVY6GcwWnsq7z2cGJZLKJV48YS6LS8ducrCZzPMsoidvAzvmLKnCZfkkcngztWB4YxD7CmRECtKnYTsX",
  "key1": "4Pgu2haFHSwwwYTnscU3TcXxoQWgBzmHgtwV1JnC8Emb6K7HGoiYB6Lq7Kar4Yt7QwqZ7LUJaQ3Ja33EhDTvJuvA",
  "key2": "4R8vBUM4JkHvzkobC2wdCqkcEE7WzZL3J5dHGxcoDGZ4JBFfs3xspkeWABshMePSU6e59iUBS7vYt3YPQaboFfch",
  "key3": "5h5AwhM5J4cK1FZGn8N9HMBSZ8Y3XyMQb5PT3B9piLqB3vMteyXHCZ3S4Do1rtPhhASt6GXpJDm9osNtnoR9xCWN",
  "key4": "5uP7a9njMnCNvjigCRhAUJXyGBrSFg5grPJJZFz8LaPyabM8aj6eE4UBKs8cKDmXUBENNUkJrC5fYQDXt6haDrXi",
  "key5": "3UyxpWoFsLEUBqz2g2RCCyD1h3ECxcAkMxdLNhSxFk5y5Fok7W2tqGUbCCdqm7qqofg1cUYkhFHZVs5o8PyZsMAB",
  "key6": "2F3KDuG1u83ZmaypEWrLRJH8RcuPxSAbDa8EV7yZeDoPAcJbRH4THd9nLMbf9sRzNk9p2eM89Lphab9ho1czkHDi",
  "key7": "4Sar2NMZNZL9mho67FD7hoJtJvNBg32mLzLhuPTq4F2FVzJ37WNzxXLefsvLHz4GCQMAEUfXE6Q2scnYiaFfvDhA",
  "key8": "4JMeNS17KDcm8S8u351bAxUgAe81AAXEbJ7pGresmgLEEkP7AErzNxGwiYimFV4YzJ2dHai5VmCpsrbAshXXAWFm",
  "key9": "5oNWojXrURJdgRG9TNpPF1d5zaMJkhNi7AvkXzQvRbVNUBEB17GNRgngNjD2susxNDGyLSr9hz1Hkfceir1cpcTq",
  "key10": "4pKdWJby1WVgF8BTFUzzZm2b1RAPS8qrqZ8iMeSxbke1BoWrbaa7MSNWgAmCuQ6n6ENAfFcGqiC8XXJrpxQn9JGj",
  "key11": "63Jmrmn5xRZGgR2AkZYgybjucVbVQtoVZiqpZUsjnj69jqnauTF8NRE8gMWXLmGCEsBqKWTPacdmNwprVDEtg8hR",
  "key12": "2k28kE3MXfZfcMi5j92jL55r1s49x3ALxKJXrfTmJmkTqMQaHoNbiKGQnSjAqPR8GSuSXAHjErYHmzXyoSvk6EdD",
  "key13": "3m3U67VsYmPpJ2rR3zF1Nx6kBsXJhi9wbhBmQBnAowVgBXG4JjT35vmXjPLyoJmKNHPYGgGos65vxkykqUMQNucq",
  "key14": "2UjvjNz5dwhH1kb3QNiCkuLXneWaRgvGSMxm23rjrCACMjs93gDgtKnZRtfnMSyDMrw9rbYAezLGw1vfQUzpkDBk",
  "key15": "4gP8Pez2EZrZqLKiaMgsxVhWj3bTPiLNN8pLVcxdRBe9p2ei4GfBFPqfrAGFc4Q2gtjC5VXL69JvVovfNpweankp",
  "key16": "WDvxyJ7SmMgPeHFMwSAqvWQgUBsSepr4chW37mcA3hEmXPYb8PndAEKdKxCPg9RxSAqCMPRFitCVz1XewjFnSQr",
  "key17": "2mJRvHMFDsMy1BYS1T2Vo3WUhr93hbXmAqh8rXmg27eCfe34NQXxk8G9wJjZpctV4LSaDQQYGHFfccpcB5VHpdFa",
  "key18": "3ufi38p1JpyArLnRJbYKdUdHFKghAcbSJn31msefSxhh5Aw8KfkqX3KZa5VBt5agvBL5yYJQz4y9g7rtUN5oy2Yz",
  "key19": "4iuk3ePhhwNRiPkbZf1hmXf5FqgYbCmL6tDVhX5yqBu6dY6GMcT6xGmcMKogDDCgCTUrHf5Wg8KUogNTBpJkVKd5",
  "key20": "3d4WGrpPE39qi3xD3JqeqJ5q9vvibbFMqZjxFYW94iMj19G5WAnSDmXNsKthjUA6SHvVopSq7CBg6eopEMFHmuvS",
  "key21": "4w1YQ2UxiTErv7dfabyhoUJYFdr1gasvhqz26Ezgzd88o48toyxFzfZ6SriyBpXMvhZiikKnYkgChojD6KcsQLrM",
  "key22": "533aKPt8bTgMLjhREu6e8uR161fHoEQpyLgWAUJUQLoF2YfP3e5FTqtdRn9rsqYoC6ntHadAcYnYB2uuqd6V2t44",
  "key23": "3oLXEFrzG2sLg7vVPUgJjsuXyhByAqQwJyrXM2Hy2VK1yu521CE6hcqWuh4sxARvBU4DNKosKU4L4FCNHt2EsnW1",
  "key24": "4zh8bLu8FWerVNtTpfd9GWov3H6ueWp9w7zdQVb62LL6nwLxynCRTNZPHi2XcHd1oTWrYs3aJvxCMJPoyUGfePis",
  "key25": "31zg6jkpBKKtCWeiwZweavMrpbbr4tJLj3J9ZbSjHveBGbAkhATm1fFP8mNq2N3k3iiqS5aYtLFqx6tcBBTEAZtV",
  "key26": "5kx6sF1oSasNabH7j1Tvj4kN9J3kGn6nhyZ1CEwanh8vBmhhiAeGN6vhEoe8FudLMT3gp2EHWDnuayPM7mQDMacm",
  "key27": "sQRF9mYfeaGptmVu5V1oUhRiYWsPh7shB8zS41h9BWpLKUWTydoxNUcbu7tyYcpUgrvpUcoVHwAmL6FcE3566s5",
  "key28": "4ZSD8S9pV5bNU9hfCo4LuomNiRAppKPn8oeiUrHsjsfmdYxnu57BomjQzbb4eXcFzWcxoybPyua6HidSuFBwxKBP",
  "key29": "CXPYk8dButp9aiEDkQZBGpnRUu2L4TDaXW6bCb2NJsvMrGadj4nG7T7CgtsdZ1VGuTnLVXdM8BrVGkTjoCgFJEE",
  "key30": "nZuyBH5USHgw4VRaAQ9zG2rx8pp3FeJ8B2HwuSw9yUTvxXZP8wRVpPpXu1s6EUVb9KMxFXGsFmYfKhCzz4sFRtx",
  "key31": "3b6yTMHMs2oFEmVemEyPZNjwdBkpDWvT6J7DfZrAJBtTAsPJFVLp7KrVWxC28R68sLxnxSDCYAxsSRNjZomvpgV7",
  "key32": "4mvDteZ5YtE88UbGCyrnP8CsqjnnKEbCkmU8WUACkpJ9FC3r4J72kDq6hbp2nGwnZg7ngLbDUTxvSRRQmPdbVJQW",
  "key33": "2JwFegYwe3YGpdtyrPWGZHimkCZaszSoYRzmXK4AkjqRarqru9evkoWS1hy9cLDRS6hmqW88vzgoNMLVbh9rBfWn",
  "key34": "4N6k86Uw4TK4kwc9i8QRYL3HWViwyhQvEf9ssBgF7JKf2hZDBrDgFPUcs27nXu4vsZCTYPqdCCLFLEiNK6jpGkFK",
  "key35": "5YZ8c724bEm4vcL1JqJpJ6BBxs68hqsM4v4MJB8JRJr73VQBzNCuZ45rRDTWZcX3WLmTJaqoxjWczR3oDWmyLjUC"
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
