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
    "5kDBED2iE3vwsWTvfhcEeZ85VWMZZTFn4wCxeNw48c8FZK91curqZxNYb7CuQN69pUgBEcqU9CX75fQoCdu8kF8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YhBJX47PV6kM7dBH8MwnoSJmzGVaV6hDJeXD5vwamrUechu5ZHj7WGzpY9AmrHW6CYLrLKH843Le2hQKThrwb6K",
  "key1": "wVa9GAVEZr7N4JRb5zmsDjFGGeXp4dXykLWkKhESTaT6vYo8WJEHWmzYchRbpKeuBoKSxHWJVeGMhsj1Sw3cMp7",
  "key2": "4Er5nzsvqyt2jfkxwrCS9d3swLGGyX7XtXuyXA78PH3yPFoc8dB4mvUaaKPb6NzpETPNdjn6JHVjCWXjFBr5naA",
  "key3": "5T11KwaFEcHdJL5KXuQT44fAMnfH3HGHxsJyPPjwnuHBdMuzXStFDqsisCLMZzWF4unJ2oohGFjRoP7zZKKkb5an",
  "key4": "2ZToMxTjnF1nnyH9uKrUfmWdceARkNHPGUPvxzRJFGPZBuKQC2cFwFmXc9G3hJKrcwotJYwt9YLZG7KeQZguRcWW",
  "key5": "2bjHfp2X3QNFYSk9o94UW3UVCLwPb9fuRdoJGZUhAswEkcv2tev7naptD8mnGcjjN3vt8WWS8KzBAGFr4DKUsyxt",
  "key6": "yhPr8g2f1Rfhwv8RfmDduEzQ4eA62R1kJGNAHMJBdFHZf95o9LLxEpyLxsTtCsGgdS6AHvzNuZaeA5iUtmRjNNW",
  "key7": "4CpDpoRBSS2xxK32w1Jg9DMC8KvXsy5DPm1u76oB8vdr63NaqqV2S14DpbWNSSjZc5wgLc2Uw7uDGRdGTmuvkA8Q",
  "key8": "QmSFicXHVBraLZMvedY7Mb8DjHmnHoHb7wQVnMksR72Gicy48X9ihdJVYTfbHprVFP1y63q8gmRJ3xJxpiaQR9f",
  "key9": "oqvxnpfPJrfg2dy7TsXp5Jj127vxSLjczF5DqTuNaRLoQFeYiFH81A7g8jnZ4NTYmfCk35TDCZSgVcbKT4kuDec",
  "key10": "3psqvQLZmY468c3qDYJrkVQWMoxvPYZdc2iVkGPgtVu8JvTzuL3e3PTtiU2WuqNbRqYYuapmP5xfwhxBQazfzvxV",
  "key11": "3huqJsXZYmKyQDfdQeWFbNN95RQrzazMELbTk4SQVWZP1ijLBNrxWx13suP5Y11LXkCG4HR7gPNDvKPXHJavacyE",
  "key12": "4ve44cb7ePwue8rXRC2Kvxs1gpaLB642MKf6SvwZob1HgA8ySdsoom5eQ651W9G8z7ZsWpL4T8Hxzry3Vzttp7NV",
  "key13": "2NSyMGaCujTWbYJbjoN4knxjDjhvDS2ycnW9HzA1jEhAhscer2BdNVjLFuZnZrPB18QHTnE6hfr74RDR8ECsMStA",
  "key14": "2fZoqRWQ8EpBe3HrNTpGpLCHZBuNSwdft8RFT1S5LiQscKySqUcrAdLKjUrFNfHyJAJDQ9wkH8H5F5ztiq2jZZyU",
  "key15": "3wGoiP5PjG2VwPXk3ZD3Jk8qxuGXyTfqcf5wQyBjgiW5ECoJCXKu8GmxRvqBxrjzVugWgyU4JtXqPv9A2qK4rmtt",
  "key16": "3jCRqHMs7iTvcLZMjru7xE6AzFnbRKpTTmU8cVtkKeFn7X5C2A2r5EVXAtydPD3jMmyS4EyNiVGJzcCqaUgp8AeH",
  "key17": "5cVsZNfV3i9awdAFfZV35GMpyxBX16WyqCoYotzicyQuFawcyS4AyNNKmTMGppQCkjZKS4a5sNNsVkPuA9AsP4VG",
  "key18": "2mESub3EwA9VHAQq49m9RzQrsC9cW8K2rrUB6RiFdThu993etwYXNTpu1jn7TP1LXrSvthVzmkbKQbjJmFiNwiFw",
  "key19": "3jsatQQVJ6gW7dTwGCBAisa5k4usJfxD7wdkYaN3B8W314KUbbs1Xdb83Tq9q9ZDuZ8jRY1Uh1rdAxcxem6HZfiU",
  "key20": "3QYs3zoC1pt6uCCaSQvtHvJ2yBctjNSNnec1qLpFbw5gwxozy7ziXhva9J7BdUSPvvvJYowh33UhFYWyuwMj4WB5",
  "key21": "5KKWaXKdbuYxiy3oCtvyjxvDKYYUyW9j4Mk4ALcvC1RhUcc3BCUkDfFstgcw1cf4pAuK6PMP4pWZDs6wnzbGSjBf",
  "key22": "2MwVymC8AbpNLLafBDdA5FgKULN8pqAWYXjiGykZ7FJj5oTAN5d5Qp64hBf2KmsemfY8bmztauVKYTDyKsWeBzXe",
  "key23": "3iecK6BtvqSAs4nEBqMaDZ7zj4k6SK8HRfYG8ACMchYg7KqLHyWDn9iZdqLuaW5w6t6Fo8JDXND5drjfcyRuhhev",
  "key24": "3ahxJH7vWBu86ncK9UfJ3sRXJJUFwdeWskzEfj3mXN1h5x1yCWmZUDpsT6Q27yqDVALMX2yP3EoBbgJU4EaGLKSW",
  "key25": "2fNkhtiGRyFhQouX5gA7foxtr1r9kYYNAr98reK3Qcs3a5VvhHKvjK1UXurx5fbgGYth8Cx9CJ3Pcx9oRoyv1RLU",
  "key26": "25ry7tjtLtRm3vqZ3S4g3Kfm1xMHzd2LBW3muL4oa9khMTvQ738G8jjdRw41wbDWKJy74UF74upULsGEDHivkGea",
  "key27": "RvnHKBv1tJEAtZnQjF9Hii8SD4auLumXHPHKu2BTXgsvpiicqzJaZUH9xQbthxM1qsyio4FKUoutAxdTuFiq3JE",
  "key28": "3S2aB3RhCooP8gbiAbk7Wd7JDD66onmQ8nQvn9J2KMD4DtKJZAaVwqfhGneoSwtKjTorMcbBZofcHHMRhiWGzKEh",
  "key29": "3pp5q9cMAMnBGc22yy4dutLVz5HcpFQPnY7VFrUT93cKDmEUfjJvNynwCCg1JgVsgMmAzbR87kK1QLir3X9z5nDR",
  "key30": "3hXJwfGgq5oiRxps6atJXkJNGGdiRUHJdDAbsqXoWLENedM5GjdQQ9HGnX7T8hHTUs2AdazZaZCddQQMpPoXCkrq",
  "key31": "4E4f1u3tE9d6wdAae2nehSg3TsKAzXr8kgLWKtzdaEYWmiKAg2AJJbngzaTxozJaRYxeJDMSmXeMsGyrGzKLVXDz"
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
