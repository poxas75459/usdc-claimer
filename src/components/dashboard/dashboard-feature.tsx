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
    "2q6oSNqnM83vfNxWfhwoHXPBSUioAzkQLvRSKn9SGdVJFJb1sBxQnDbPfLXmGLrXRRwoSufyhmN8RT882GyuQFMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3HRjkKzbEbTVA5KCSRGQPtVtTHTTuiKnJLdSdGSfvfproCmwuP2kGaNUZ69WyDQwt9seyRWr5RqA5YHoiZU9Gv",
  "key1": "4MbzrzFR2UX4odGBLbRcGJi8L1AWLLkX99HR3evoJw5iYZtvwiBzvjdidWa6AQiyQMh46okz9rMKbQtU95HvYPWx",
  "key2": "3WNfgVgF2AYCn2uQqjRoQ85TV2GGhP3zd3nXZE6Ay5vppiP6y6Q93yUqqARkU7RjQ6NwxzPFuCJPPLdGvCfnnBmj",
  "key3": "4aK4Avyrdh8MWrSRCP6Kkxv9Mt8uJWKqwJq6t5CHa3ZrF9uA6yhYrKXqtGfhDbYzKUVYdSoMhR4J5irHwtN4YuGA",
  "key4": "4Y59sebJ7Vbhu5i3mVWbCrHxkR6uXoCD9Fjp1GL4v2TCbHh8qof5rZ7hmp5YRMDonASqPjyo6BYjSeoLLkgxpoDN",
  "key5": "4HvTpwCGDMYQhZpsXEshRqg5KnEcdsLrjAW1iUxXDp6y9GnjAPZDvCGxvbqRSdjPH7fbGnffaE1fSz7ho9tdtSfx",
  "key6": "5YgcZu2DUyYWv3PmRnXrNDAQKMeAMjCmqcZomfuD48g53QGs3ijL7hPWu13Lx2iKfg4uEWnsr6bvXKGXqFyJ3qsL",
  "key7": "4ZWgpoxJ6SkWqeLGRN5ru845kNgNkQWmF4LSmrhiLbJz83f1YH24fmsSRscK3UMjaq3U3Xwf3cLDwbAFKn1jgMW5",
  "key8": "3k5gzVLxM92qYY7SRLKhMaDnUiJAepuzbbrUH71YHrqLE3vaoyVe6UJAzq26V3WFmxftYVZtbXegjogn8ohNYtsc",
  "key9": "2JQbtvxJqdrACDGKEWQKseviqJQA8s8BFnp7YZRLEvddsaxK7WUtcTovrZKnJgiPkxTApN9MK5tVcRSvQ74kZJdu",
  "key10": "4zUpHgTHTaTQAb1sydn1Ym47JT7dUWroNyfAohU1EMEKFx8swGzcNKApm7XKEg7K4ReCEx5U3riAMaLFcbQq12H5",
  "key11": "3HJ14UgNe9TnjWd6Y3FkXdZQrZUjmk9KLpDcijePNbKkMvEEEa2EGFVNDpo6gJaPbW4owvGwiMYxZdNvoQcSmjMV",
  "key12": "NdapUaHbU7VsB2Vks5f2NVqT6zctEckso5PJF3S5vdnygEdw4xb85HqU34Q3RsNq4R6Ugqr56pLPUCndDVGHyqj",
  "key13": "5Yz4A1Gym3cJEiWB5R22Y5tDiK633Sk6FVe72j57jXttraqzZw5Y3XHMjVk9XKq15ScDdEqBWoYMz1M86qx5fmdR",
  "key14": "29h9oKdvPQsU2Lb6bvWAQCewLDRyj69kodYrDjiZEznM53upL3B1BrLyoHGkcLj8VopLtagSHVDJw5Rv8KLcsiQw",
  "key15": "2BJjnB1EABzhXuWsBDWng1kBj8KzioR5mPsgWaTgVPW52kDH512QUHY444GV82tQkQJiBwPsiXxfxc6zsio8xZC5",
  "key16": "5YuBv3jEVZysiSmYyMDejKg4kCsnEjVWNYdAhphzb16VUEnExKQH2qajNZm5XMvo5fYQN1VscaF8nSuTqhx6g9gg",
  "key17": "4gurdqFX6uiRAGr8e3g8sMqCdz4P7uoExauTPSZSTAf39Fo3WQhwqXBhfLTHwi1n2sJh9ATnSzBSafY7xYSDseBJ",
  "key18": "4SKbWEP9aujC7EQxPXbXnMxsMuUup7X38HHsA9uHvLonfEhj8GQkmZ5KCv1R3qitagMUAXS3KTMQhVkX1iVwxrGK",
  "key19": "3NTZ7H6n9n5kexFQ6Jz5iADGjcgf28Zx1dauLbeGEs6AFqQwc6ZBg2unb42wsfqz3o92d3mjLAq1Vg7nNSTjFUjg",
  "key20": "4fWUp2VM6FefRy8WrxeULspsNdZuWrLhZ4eZzVBPcKZrGWKBNGP7upip5yNQHvzMKfiRnfNoh16k2BY4fw5WSagv",
  "key21": "4hY2dhHZLRYsVALjhMDvgvHNmQE9JfnfZCaiRn3s3vcRWeE7Qvdjw7FuZnctrgAPRU3aghyx7az1j3q7DnRD7VEU",
  "key22": "2q9fAHsS7pzNixq9Q51hctM4jNdTtD1Xy2aJwNgGg2wRr3WGNNPagmox5ZskEVudE72PqbNK83kqw3TCSKh8dT7A",
  "key23": "5kAKmQ8giuxkwqgVb1i6o7ZmpyjEB2vTRnYh1Hpu9fKM7qrsoHgyQYBvv99w1diLBA2PNBksHvWUjCH5oBqT5zyi",
  "key24": "4LXyKYgiCUpfdg4ShGeqpREofiKh4HLUH2wtLW5XPvYQhfizTSxFriVmCMDZ77EAZLFfRWiMicWyNGgQJJPFibZy",
  "key25": "2sLgwiNwQdYHjCPAoRypmA3388oizNqqA8rNFLBV3SUJ4GqnEwS5QeHnNEbE4MvYQrAuJa3zseMUakKYzK94b2oL",
  "key26": "48MvzdWp9rdkJa7q8NqQyJDCa9JwtYnDEU4TmgYnCuuQPqLFtbAbE9KR2ftAyj6yVz4LM8dvpzJgeD6WcqEtrdPc",
  "key27": "5MPDpDUXX9tJwATCSUX6kH892WqiCMuUXo7fRe34WzTweVVG1DK3Lp3UcToGv5seJFWykRgpkHCQeBkYiWwtjUXo",
  "key28": "4KzBuURgRdMMVCYiDXtbwE8gqawfEn4mKNCtckohdAegCqV4AG5JsTk3Pp2RUmYxEBNQaEBJP8aiFCHKD6MRr9UC",
  "key29": "2UGwg12edZ99VTkjMW5se54mBz4NP459quWgTbExPfeW8fs6HQuSo1Kqsdecytuqp25yU8XUZFzHkvt3eX2HYRiV",
  "key30": "3MAZ7qFS3k1aKsQJ51A1E1nzDZub9uSajRBxgadabVAcrUXdKuzt9HFprv3iokbyLfGDzr51aC7LU3EnJ93G6x26"
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
