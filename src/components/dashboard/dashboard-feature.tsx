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
    "4ipY2TmKU5beTYiZraDwMCJovmS9NQb7wvuikk4mQ31mP4gz5pgnUnsjiEvmMDmYANGNXfrWVR4g5vqtFh7Qg1pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33VkQUdVkgpwEcWkfjc2DT5H1SSqm3UQdnMgXvABwj9jQH3gu3fZHC1tzHRxXt8oLaM7h6PxAkVZp7DcKN8w1CM2",
  "key1": "5ciHgaP9KzdaU9YseRnihu7do4DiWE9yDNJMsreDyem7T54UWs5h9HQuowFseDKtSVFvkfNe5WvWk9TPZiXY1XUV",
  "key2": "3sXpAv4LF3tzXQwwQ4Smp468XZpUfoh8VEfJ42LzASosKszCjXGeCfib9PWxLXEcM69ZfAVYwzazuQKRtDVXckP",
  "key3": "51jwJRcojxoPuV1WRzKueaK714vA21KNmuPzpDr6yh5Ca13HwF9vEXbKasf4nq38ZKFS92Am4qHgaKtHQeWGaNaZ",
  "key4": "yHUcHtdNvaHJM5CyCU7GhjXisnTD1Trj5Eo3wHRdVjAegKZL5paucNavHoQGbU4akYruU9VoJsgRQZcP9UjW9fo",
  "key5": "3qdA4AAdYsRG5FaMAQm7MTUNNTZgX5DVngX4Reg3nGqAPEmL9kHXyHZ4fcQfViSnQjn2HVdoFdyp1xPZdjSqd7E8",
  "key6": "3sChGGNyXBWHn5gi2dnuwSYnc7ipHVEDDF742iKZnFWLRnt5E1xphgXU3yD9cRm9nGRvXpS2Urua2ybBDzyQ2X3z",
  "key7": "3EYbr3pNsGbnvw7hXV5AR2d7yCse6MtpGeHzEcFhRarc9AnUFCn16bEW9456uWfjVw3wiSxtYD6aUw59VRPaZPCg",
  "key8": "2Lx8Hgc1PxuPtBz91PgnMjgraXpDTsmeoPBuzd7qSJYwenoLKTHYigPbkjEfcYrUDuYaxKNKsWsttuV2ZMXwd573",
  "key9": "2jb3anAzPCYLafyQujSAokurvhojHpkw7LZY9RmVeTsZ5kMfQAj7F25vW9pJaPjUfiQnz68fU6zQva6u8TTmAFH5",
  "key10": "3dwU71azdcdm4XiTQp6erACEXw2vMghTRLk7YZTm818GV4DUXbXuQ2dj7ud6FzPjSzz966yfQcJEvHsA9z1cEj2w",
  "key11": "2a4Nhhgmeu7XJpCJHUNu56ymY1AaJUWocmJtGhAZEHHf1Sp7Nx8JBy2uhzwdWcX8h51gj3zfQNq7TWtgtgG2mZqK",
  "key12": "48eP3y5GyZCnNBfqsBtBR3kjbMaQTBEaV5e29TxA8pL97QXzakMkDNhq8yC8ArZSdFMVzCiHBgHDyJn9DWZpXA7X",
  "key13": "EqHwjD6PLpUhBfveETy2fm2frkeGdjgjX3P4xVcw7BJbuNsn5GWvN8CWureuCJovqN5qCM48z8gJYan8VuNUdjy",
  "key14": "64EBsUvfhKXcXt5DYbY2yELuqyGBYaZBECuVocNoBFaLhe9UGP5t5HhMReo7Zyq5o7hozS4fhdLvVjhawuP6nB6a",
  "key15": "5Caxs6QkT6rTch1kXR9ytXu9g72TDJ2NA5RSdcevTcEG5r9FL47vN8F7HsZfqCUSoxxes3tBznPsTefeigGBAPGB",
  "key16": "3RN9fMJRsL1SJoYYW4xdUfPxufZGo2k9UwurRpVCqEqjqdHJghSfvURmyDXWqNoxP91YWPELmxofgPQPUBnfdfQ6",
  "key17": "4Nzd6K1yZpbSdgqe9n5UAdPZPURhb4LEMbGKYWRqYwcNENofTDfiz2NS3TyQFFiV7Vb1jk4onhFmBXt5mNicLTSE",
  "key18": "2zVoHu5r4Zs5GVu4GuqRsn8cUFEcXTMctW8cvb5qZKhcvTLVTwAjQiZGekhYFTybLU2ZCym4mdJm9oJf8jRLDuoa",
  "key19": "5LNML5oaF1BaEmhBTY7UKKnFvzpWTkTppCYuym3uUykeTuGi6usHsJTUeRRK3nVcSap7BBypcPr4QecvCjDvnoB3",
  "key20": "2uKMR4iaB8mWZi1Mgm8n2ndgrGZ9qnfXGqXGhSe84aYduTPo5CezuZxTzfXkSEVKdyxdH4roHCKZYbjnZXPn2pQw",
  "key21": "2JyururDmHJrhkj6K4mU6Hz8pmRUrdBC7rs2NuH6gTwGLtagB5nzvRx8kgsqHkU9vB8w4yGBvin2xzZCaY6Xuqio",
  "key22": "5eQQK3h6aGfSRkrpabrypCofES5Zqm4gNVKGmXA8a7GKisFgVkQWR1NxQQdMmqh5SzAxDep95KZoDZFUbDSYymPe",
  "key23": "3SJPbijbgH6Rjxe8gHLJN8zZCs5MwHXahkNvsqHnsrMbz7mj9j2ACr61qwRUPCkvkD1Vg2jwvEudhmrFkSowEBmc",
  "key24": "2hfEWU9vadkxZgpqNn2EgfQ5q93Pjoyd7R2dZHfEymnj46CKPf4WmwLu84CnrjCVY5m5ibV9ZSH7FgMyzw7sZvUY",
  "key25": "5fnR9jYFVFrkgHr2vdFRE63zwLLqpyv2d31tY9S6d3vzfikgszarP2TKmwim43J6bidLMwGaUfkJWZ5Z7ftkdGn3",
  "key26": "28J5PV88fqmNj9uAV9gq7B1jizsqQCZn2ULz6qSpU5DatP66WGAuq6oWqWtHrZzuviqcRBdHv74jzBCAeVr7VmUp",
  "key27": "5Xvaq7CTmZje3LTcZ4kfDAfc2CcFFrQ46vxKZMWaCK67kKuRUFkGMbXyvcEqPCGBd5N1qbEvKY5xgfDsKdPjPA1d",
  "key28": "fdYBDm7ZutzysKJpbJtGmAVpP8CjdVVMJ7BJ91NaYXHNP7j8BNfQfRn37ukm4SPQhqkK329z7XDTeKfo4RUUBnH",
  "key29": "4mYKoUc7E4ewMSTkBuqbkwL8Nppa6xUwTRcZodW19qTvr5op4FsdH8h1hCWU7wGAUvrCEHpnuVbcy1baGh33mmZp",
  "key30": "4Gk6wBUKeC4CS5zMuf3avfUYEzKzsTpct9RD7CzJ3vetB7bPz5pw3qrsxmqcwPDtXU5HhX5iUPsAkh5wdnrRmbFb",
  "key31": "3wwPmqBDvuVP5RydVrqapPJVEAPXmiqzn76y34Pv2xHBNWR65A3d8AwwvMqioaZWxD4GtpWPVSQoY5PvGRnoxprh",
  "key32": "uBKphAQzFCXCTFzt5ydyfiRJ1bsG66iej7RyhE2XoH7BsmxhidX5vxbPwLqEzXtJEs3ckyp8DJcQjDFj2NV38pn",
  "key33": "5dn5FmUqN4HpwcSh4XieVTkRTsXkfUXPDUjTYsXFz8yPX6a2CQT3HBGyYEbQVPx3SYhA3wVHvEbDHDjBc4dx1CMJ",
  "key34": "4L9VmghTV71zF4YereBLo8cFzh9HN21DWK8TsfbQhpJbQJkggAeuwvMdB81DU1PaR2aRdwAa4sXy9dw941Dusj4d",
  "key35": "2gQjjcrFMVWL5q3zasEPjBFKGHLywKoqznudqy84gy5gUrYsZv72Rw9kA2NhNMvCra3vNudch5xyN8HgCMk19NEA",
  "key36": "eRZjrkRGPTttsf5j6L9DE7C7dtaZyFLBqGjRAS2qTY4TLzdAh47UkmZy2wsWF15ji6K8MdthWZe5stA9s2wLkNy",
  "key37": "34e774P8qq1XkEjgrMV4WGawQe4dEQqfY1nVmu12vriumk6Q9vJBGmjAXHMT36W8ZVjUH2BMTUeJNTUiq85YBYKD",
  "key38": "2JDdRwC2LbZwghLkatPfmzcVespfa7bqyuDL7R3JLQit575kJJkvHshEVjGPErU2LtYNT9CE2WjwkghMX2cHUx8h",
  "key39": "43LrDxZ2kdn9RekeXLTshpv1Mu6djPitVzhs1XKBSnLt4NB1N5hQriAqbZYxtuQf38Xxhp6mggqbBHzWcjNHJEvB",
  "key40": "2xQS2dXPmsRfKUXkXfGHYjSJJYA7t7hbYLa9XkJuX6kgwgN6aB1d8pttKySTpu5EoH7qMQnWfiye5kmK8mYpsjiA"
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
