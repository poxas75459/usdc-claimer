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
    "4BUL2kuhAMKQmJiRmmH6p5DknWgyWx1SrduNfP6mFAyHaeeZJwswxQam9t2Vyb9QMJkzrpwZLbFjFi8hbSxH9ztm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tg5HvTDKb778NZJQZoK9MiAsm189oRAkQotkwTR45BjW8fM3t5TpHYcGcaRntjkjCsRzCDLmot7nJtcReinxi4B",
  "key1": "5CyXhCmh5H8241iuQySJwGiLZayUfoPezaqSs2esWJDgQ29FQFMh77UvcqcUH5sb21a2t1bszRPhKBYXMf5imJ9z",
  "key2": "4jEoFTMrpf36JCakAZpoPNn2Y6GZbLk7SEqtAq9AgV9f4Bt8YUndv5uRx7k8SMqS41sEXfMxM6kMMJDQ4aZZ25XK",
  "key3": "2C3KYL2xmUHxz9AdQDsDrgqPxPASW2HaWTTKVxTJDuVhAumAd9DKpM2ZKpcySYtx5NQsN1EAzeoqNnR1FJN2DohX",
  "key4": "dCv8WEpMYEoRQm8V1NiNKTaMTSDJCZG1FD2couSkyYp4E65tE1Nav6CmUthzkh2BAuJUMH3qv3ZjBuefcg8Rrr5",
  "key5": "3cA7VuXzFvgwC85Q4Q4GqeGYZWGLCkVgvw53a1YgAs72gS5VL9giScoCbLriHPEX73N74vSCJyiTA52cAzQzUY4D",
  "key6": "2231GKcoLetQEciK6LjQGQroqjcVfWTYYc1DUAYDYkMZtiNo3AcMT892ecMNwnQGTqxGv8ghZAS1pfkroFXw1DNN",
  "key7": "3fydMRP7d5pq9hQARcZD24Sht6Sce5Q6dctthKgKytrTANigjZ9bSQ1kTfvSqji65f2NnEEXGFQwSFBiDiC7bNXk",
  "key8": "2T1gji7XGdqqZL7i4NhFatm7HrZQTY6R9kckdBYxQbrHC54aZR1JG6pZx8hz8qZ7UzvtCgbPRBicZBKdqfwnq4hM",
  "key9": "5woy69MgLTmKA9SFnYxgxDac2rgx5C7yXGfG6WzgP1xh3KjE93WmKanKnoxNQhDfNv5CVpyifBYyFDBvJFaVtZHJ",
  "key10": "2nAWb8KMhPXyq1aY4eLtDwhB15mGEG18rjk1RAjazTHuyyv3RaQi7uYiQ22KUCZWVkf1B1k1UMYbJk9P8Py1Tzg9",
  "key11": "4F9Ro6iNGSquzVcCkALSaoRe8nk3cCtGH9aB1BP1witBjYFzb8zy9bDY84Jw1DwHXuLg91baC1N3sC75jB5Tvwz7",
  "key12": "2H7Mu5EhVzwZVgCuLdihxPW3RabpeX34upRazvTftFZkzLfZKTtB6HmrtuX9NPrSFtF7uUKL6kvKmtjT9WZdMhyi",
  "key13": "4BG2RDtYz71Ky8vLCYi5Aor72CXkxdY2VXiz62YvGcHKsJWRhxjWKXi6WHHHWcSx5dPPX4VX3aVkQxuZdj1p1886",
  "key14": "2f1UMbdr5XsQMjxGKTei3wAJfwZXVJt15QGFPvz3c1gGHa3JAK5Y7eiYcZTJnz89SBmaHUNzPz2pgSuiwVydaCNK",
  "key15": "2dXZ2FCL163JA1nC6NN5XW2rQos7nScA78RKsKqeygeCcUVnd2m86BQajmt5sH2ygsgmRwuJRGH46S1NesNf1Z1C",
  "key16": "2z79PAH9U5bXkKpPyhhuKUWXqJEu9ba9s12PNCLfjXobxJ4EjWpXKVuFWFuGv45H1Vn7LKgnezngfDYcaUoxX21M",
  "key17": "2Tfwy8PWXRa332HMHSYhs2ST2xFMLvu214gUAYqzrzvqUKLchmSYprWSqTYRcQzh856T9cRwyXBFoGNHb1dswLhq",
  "key18": "5aDtkG8YZKyDuYN1PQRw1WeioetiEFU2aJwRyks7a8wfQYpserFETjQ7YeywavYkjy2idDLYmg3madWhGtp64TFv",
  "key19": "BRpCVxrF8BBo7xsmPvCYCjCqenD7A7A38af4RpWNYaX5LLXFwoprk4h2qLuCPm9hWGzCpMw1fnhYb6Av9M42dky",
  "key20": "2zWigWADduAuYy2y1hMpsunZuGuPLk5nbDewPH3bobjyPsW5mScH7vMBLr9EmHfhHcarTLvuTMfc55Fq21XdanqS",
  "key21": "2z6X7C8zVJrZfDbBSkJ2Dm29qnmGUpdoHFctRZ3JE7TF8tt4hqHF3TA6w5zQQcr41aWESnwWXZzuaU8pzX4i35pk",
  "key22": "2ZeRZfhP7gjJm11PVdiVKNJfL5WwdW2J9gy2UE5NYcShDBaKwELbpBhFhSxaP8rmQih7GsfS7Vn9fuHErsDCLW36",
  "key23": "4q3pnb1pbKZdanwQMnY1ehVznEPQ9cdzxSsmu7p6AK8yHkvhUaV9aPZN8cKm8xNkT9FivKqaZEEj5xA8fmjQTsyn",
  "key24": "25Q4ai4vtX1EpRoJ3w2pid1jJprL1asuceKAjTuZ4heEKFfFPo1MNXxQLbtEDwG8GskRowkGh2u1SBAF7NVS8gin",
  "key25": "3dWKm8fgRkqTueTrRusH4eqWrbopVuacUUcUUvBCo8knFEC63peqwQP1nxS4uabUJZ1y1M8AyUi5vk6vjrb6iYxX",
  "key26": "ss5CLEyVS4PKEz4eS32PYsn8RqoJvhQveuiaKKWT2qbmixC2o8jQarEFheF8sZQARqFXJz743FXJiDK2mpnoFRK",
  "key27": "4XGimaPHLrahQD9Ar3qnjpprAPfwgnVSwXi5XxnuC72yPbdkzdu5RCdgHHQLJ2yr91hK4GfenzTBzcYAYMyPeWn8",
  "key28": "2t1zpDVzRWQpdcyqL8EP2686ZnbyCHNJYtZXFmYSVnzGUBSSakqcCEpdziwGynDEpviZzqkEAqYA56VWdKq3Tk8R",
  "key29": "3xHPu6BqLtfNKdUCsAefgigKFcaCCB7YvSGbiTaDfdGGBE6JcoYhZAo3xcdaEZdwC2N51tWrpVdxDp7eUSaBVrUG",
  "key30": "AjN2uQzrEH217CpLHzAKiDLEgunRercEw8gLLq2UTyevkjHawcKGnPaAfydy813WHG437DvtfZkHoGEccC1kccM",
  "key31": "5CEe9viZKmoTDEGvPW23UqDyQYYe6HuD8BmT8K28enq6dM7qTEwVXJEz3v61bCGywrKhocgp1H2sz8NPoK65hRxJ",
  "key32": "4vRYJyR63eYuhTMGoZHMn41voHjYUMTZFNze1D4gorYuGZrTma1qaPteGvCtDAXcpGWT3Pfybw3FU46UN6NjJY7Q",
  "key33": "4rpcwqW9QWYg4VSxxZ1EfRLda2Zdac6MjdHBDRRrK57yHE9rEC3ZeYNv61FsH8Dv6kgDRhrBC7mQPYx1hBEPTNvW",
  "key34": "2n1qHqQ5zU91saxzgH78EZZgo76HuE3EyjByzEEbfawWBJL6vbGxE43bBqnKXu4ybUcsfDLHZz1oduxL3UNWxDJq",
  "key35": "3nW5BTwDHgNKvdjJxBqRXZKmdhm8tfABJXES65ymNSugmTsEDQgnckwHD7bX4RUzcEoPMV2SuiDvHhTfV3TbxDKy",
  "key36": "2f7YZi7QuRfM3bLvcobaqm2ioM6WVdbuZggPVwMk7Quwmxhkf62XPA2gji9SoVPVmqxYA6muRsTnDw9GcHKVuS2r",
  "key37": "X3ZbHYPeKjKPC9pW6Kho5YEWr32GLkSWPTPmym1KHNYSeqWD5r2EjAsh7N1xzP6QAPSuocM4jz6J44TPLtGiuSq",
  "key38": "45hFkiYW7FZTNp2c4bAatXfgqCuPXBxGLBA9jmcGHPXmUZHLKCLCeZKhv35f5KBtyoYGCN9hqpw1NnWXNL4arZaE"
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
