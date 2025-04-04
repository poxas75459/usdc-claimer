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
    "4jpbztcXR62jZTggMo2xnqRqkfZafU741uxa9kTDoTB8VkSAfFyodxKQdTQWpAA7z6xUNEkCYAsjRc4eoMUBZ4fV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TN3a1st1exAMHyZWKusjv6SRpFjZpXPecQuSFKzX6PtcNsTqNxiSnAdJP2eevdFgZKPXq1uZvJYpbTvpW3hWu3j",
  "key1": "4GFJa9Td6Wa6uuXVd71wnrAjvwnAFioWhiPXihBhDaHgr3bZb8NMSKprCnHh5woR8QgtM1pjY87Q9a8wdQE3eyPR",
  "key2": "5sArZ63jtoFgWTEADCyJnfE5RvroT3u1z72uKXkY9ckCfJUktEXAhJ8pNM68h5eMTSnTzGbyVKJna4wamszbNi17",
  "key3": "3knSWM8Yokq7Rot9AiUnkaJe9RjpKbvfCXZfNT9djSK6mYvRACBqzytDygKVGytkjE9UCUdmwahf7vj9HfvZDT3U",
  "key4": "3PVUDgq1aDZFkhSygrFCWnwxbk4G4QLwsrc7TMmGJGeuqHPWJENMRrEXLgcmarPowMB4Rashu85D391pDcFhFZVp",
  "key5": "4LY2sfMzt63ch5KiTPwLr6y3PPVM4fHeP598ffAYyQdEGczaMBHXbi6Wh6jDfAZMs9ajz8KQwc395nj8joKNkRZz",
  "key6": "tkqca1jE3gJfjzwV7QveXDSzrKF74RRx3Uu6k1EMUCZaJbcNPJUzwVZa1rFYQ6QzGThiQq9sjyggvQWU9FRbMRL",
  "key7": "3oZLpWJnC7uZdoggxwuuvYJk5YTJKSbfwnfqobCBunnqPBDY654EVhXFdWyyGcF1z1xFzRBhrs2iJYi511vKqS5G",
  "key8": "61rL6FgUosYGVFy3omSyMMDYp4M4UrhpW4eYq8nYi5H3pgx8CxwwVpEP3WKYRrcWxMH5DoRVqBTBtAeEgqqgSg1J",
  "key9": "3NhQdxSv6cVXWMsfwgaZJVJzTMX29dkwjtW7AQteympr89JX9k4haCW9UBTsqNTWgJETK1fZzP1EBJKYzX8s9rSg",
  "key10": "2vnSxJp1NMnWyT6T3gjdKcQN7ui1SvJewdYJA1TSxDEgPtR8d3iFH8Fo4KdwNBiBfubWciZq7RUJSDQB4yzhLsaN",
  "key11": "EbgVKZa9aFViohbE24oeV1zNntBFMfJpnWT6zqDKbXhRkm3V7r2LpUCFEDVkPVPFKmmvpPmg5Mvd5mCxAmdmrif",
  "key12": "2qw8RwoGheCJWKJ8ZnZFAQ33puCJHHNxvfsQNq4R2p7FkKPVKF3r8ibo7i59z1ye9PH7oxtt1JYQXxVNEvm153Zq",
  "key13": "2EqQH9MWbvQKQhdtJaYmVk1a8wfv7VH2BCZWqjDQ5jreM7ScWU9cec1emMvvTRjJ46jM5rnz3broLmk9yPRuJqUw",
  "key14": "5N9LkWPfWUX4xhi3ncXsp8MoWmSoKWid5DNFqgdhfMxtieQ74FTGoHd8kwzARmrTfJRfzy6ZaVc3rr6NgBnyyVj1",
  "key15": "D5pZK69bbDgmwU8iB6Hp21D77o7NzyWyqFgBpE6yjxZ2mzbfPCKAs6Xv9xCUjdvuCbYDfCohm8bQFw6vuKSQLcr",
  "key16": "2CnJxjjdX4bdDNgGTLNJGUjdsEY9LFMXQ84PvFzJMEP6hxmxgG7nTBFkwCrWRiSnuutvHF2kmZuuk1xoYMzKaUWh",
  "key17": "2LbAmhHqGmL58Zj9bEvAXmp2ZEurVFUzM28RDP1CJbbuDBSNU5E4wj2RgbAzytJDUAxvqBkeBvW1a1H9pj1SVQ9W",
  "key18": "FLe8oQgvNS5YmyaEv5eZ4UBa1y7aNFWGaavNCUx4nP7buPzpdA2aqvyPnkNAn4HrKtyPqfN9mWPEkQzCAkSVTwg",
  "key19": "5DHdNDG4EVCLnR1podbZpckL46QiqDynHgSSGmEf7SEg5R9aDpHpn2xxrpCeyenc3JodCUXsKH1WSggeqZmvAA87",
  "key20": "5tbG1FpF3RijAzLit2SEavbbbncPehd5AS82VX3Eakou2jfcdxpSEbQFarmtFnGW82K1LSvJLYquwo2MGznsno8i",
  "key21": "3nTY8YhSYHVrwUabdEy7X3Ya7m5fohT9pDngKKse32CsWZ6kjG2tA8rcTCJTnAyMLWAW7r6zwLeAvNG1wCBFr42c",
  "key22": "2jQLhJA44AuxZ7wLUv5VuiqVMmC63ozfkAuKsUABepi6PsdE9xpQ9ME4rLx2KyUXn5SxQaMtUdDcmkUihjJxMVso",
  "key23": "5LKp59hMvfRHCTuS7tVtLDL2TMskN2b5bTFfAvNUVe6JeLHSVSjES2HWDSiUN7YCLcpFsHjDWFFvtXEm8BSQGU6e",
  "key24": "4CrWhPbr3a4YfMTJcNWRm9Gpf96pcQLKdzAajSPE55u2oQQtgXuLKYPvMyAZF3TcUeKv5HD98R1hE7Dno53UScEk",
  "key25": "2pBLkxjLpg5Duv1okGBZXh5jptooY9hCM7gVw7oaHXxtUfhf6ECcvF9oGonAb6WZR1PxUNaxYZAucyyFfcXGdPC8",
  "key26": "FUhLwzafJLwSF9Kbh6fUkFBDM4gv3DKLTZN7LqFB8sznFncXMAFCHPxJbiHzp4THKUAM57vb28oqMap6zbLiB2m",
  "key27": "34KUDGHovu9WM6GnC6xLRJeVvRGFR5FNj3rixpYSsDT9Z6fFPhKBNnnHL6tuRGD6crrxuDuX9xH3G2p3qaxGL3Qn",
  "key28": "4XD2XraND1QTiBueafMUVpz68EWcMsUU8kWGH71oTAwPrTswCxyhNv68pn2VAq9nHKy45NWppKqNdrqWUEMrdZHK",
  "key29": "4jW9mrynYgDSbLtdRUYHi76aAa6ePUuEnfS2wTs3ogLtMk9o46zop64noJrKWvurLhuN4F4q6WkkEVrvHy9B6rTq",
  "key30": "4aVdAgdEmVEsr5QuJHisKbdNmC23ZaU5aTcjb4YuZFcgN3v834E9q2nMdsmsysa46CGZuo5z7G8YRZtwVg1Qkmx4",
  "key31": "njUoQWhBDQ67axGu1prLBKvPQYtDpqVDnGxPfVBVBBfLXL6Bedpae9wUKggSgAjzDH6jWACQ8JWscJxecG4TcAW",
  "key32": "3mJB7xZbHba9iYjLYWtNzCyHtFGoJxdBjFhkUNqivkzNEtHvMzXB75Hu8UPxHN2JDj2vUKHvNouvnAGGzEQgg9fN",
  "key33": "5CMjpj8shoE8WTeZTZtpNPw3CqEwqzwmRrfsQ4CiQtbweevbBWffUxJJxW5wnhsRwKXfAvB5omV5FfEJHjEUttn1",
  "key34": "5pQ2A7ExYggLSDEXXbti9Xu5HxpSoEx84ZJUunFMV1G17Q3UbVAQJ77NwxyL3X82CdaxwSdhmYwpQFTFZ8SL8a3M",
  "key35": "4MufrzBjfbt4wjzKVGgQqawrYnuKJtCoR3NqpFU7o8Lt9LzdH11jKBDDzpWyZYBzbCkbjkaYybHcuVG6WwYMjTdY",
  "key36": "5SChsC6Ry5hpPBA8NFda8aG8ZMbmDE76fmGzJgUqj6N6wsDkxc5yYZ97QB66UUDTYMvmCku5gbmQF52Hk6VpRtE7",
  "key37": "4SjQWbEUCsRJA2JCUoeB8Bk4Wyck9VEW5jqrX2focZryikVnBYvvpPdjLhoCWSEZrnwXFt2WJ6JJUivUGsbJxawG",
  "key38": "5XUMPwWNEDiSCJkMwvG86JoAkXNo2qigcXL4TLkExgeew2Niz1qdAUK6GwUZuEMViDqnXCdigP7orNdbx61dDwJV",
  "key39": "5W9m17mQDiEj8b9PbWw7YZjt5qRwqJVDtd3m2YqWpDz8ZboXunSexuNEes859zAhd6tX5AVSn19HamYkE5NRp9i7",
  "key40": "4pk4JVXaF5NwiNBf5NN6fQ5KwjCciuSbH6dbLcbVbGT6EWM2tVfUAYkpVkbQs9snYexavN28EJPG7h4AxkJ4HprA",
  "key41": "5NtxwBLjbwdvKA4T8m7CQ1TyLhNss6WJsFK5DaJ74rNhgPVrCaH5CUqChFx4B17fkVG1Ds7bUEjAFs1iVzNZ7GaR",
  "key42": "3e7hEEFeScgccokEBvh2v5tpN656dWgHdFuhx17SecDCM9GwezJma4EsxjuPZkdpJmWQKD8zrC9E5PeYSkfxr298"
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
