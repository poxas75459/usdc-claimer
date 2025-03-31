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
    "29ykHoWZ21bWgUcJoncrfwHuyvoXKqTMU8T38cBZYkTUbLiP5yWPrYY5JF2vyCVSrB9cH5Czv5Jnz7d5RYc1r7EB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fAgLG1euhsrUi4VE5thXBGBfx9FYz8yZEM4gupooHvfdXxjkiUTRs7hexQdURuFvPzLaHbKZwYaR3r9fLQEtFfi",
  "key1": "2tHfN71ET61oquURCMjHYwuDGzVGteacC9XSghoSYN62UfmPVLsG8qMfQe5wuQxNuGsKTfpMgf8EuuxV86TvpCyg",
  "key2": "38UwSiaPpMQ63Z5bAsLsPk1pA11iicMgK6jmBd6ANiAjzh2C4i8Ymr7rXPc8BS1bEVVqnUyyi6RPRax3WrNwcseT",
  "key3": "4tB1oHn4zF1N6rv6tg7sbZnBE9dwZPaQAdqvWHdKwujZ5jEqeUxcJ9etekXpB3Mm1JjB3BF9z6VwTup5QBCSvpCL",
  "key4": "3excvBob83VcDAVrK6P4WLe7ijxZA6ZMyes8ciDHSStRX2LjwT7wpZy62HxcE8C6imkjdFUf46dGV6x9b2dUQEcd",
  "key5": "4Dy4mTPTd3axAQ13WG2ViqWnV4ZUaBS3UHsRW3wUuhynXQdgCQ9FC96RCtgz8YHEnsynK1e9tXafRKyWw5NCjbmk",
  "key6": "5ij5UjsQ6MPjLeGiifpnnk3cAe7Zu2EiYPRfTrPX4T9KpMjhjxSKYEcfifYWzd2SzELF6roaxdV38fn23QHdfkN",
  "key7": "5Z8BpmeQrsDT3d25ejZ5TAjMNdhmbcekrT6VXUYt6ti7GuDrMBQAqF1AY3AH8FcjUsjjyF1M2Dr9i2T2ui8xfYcM",
  "key8": "45PGNJ8vMoKVSSAWMxi5ddEnax9T5rczL78oYYbuQs3QKuev74o3mJWnb2p4fAb8q9Nr9nn3yzJiEhdn7eds55qH",
  "key9": "TrT16bj8Qne4v2qZgrqpmxqUufx1gSAmzsLQTeVZXzq85XKywnJnn4xYbs2Hm5fM373uWzuHcVpMRYN2Dybjmtz",
  "key10": "34tkE4Qap72FXauVDLXrg9xTZT83e9s44ixykH2hT7yPThKqscsnasUcF7cveLVttCmh5pYtjyyNJtmXiSMUqZqG",
  "key11": "5rrQfWnHotn4Lkxi9J18T9BfpinwWfbh8uQFcQJHEdHmsj4bdYs4nJbdgWoxYUor4mgHxXdB7Y11DtL9WiRE1NDm",
  "key12": "2D7nmWFS5YBGBFPALzMHQNNFVBQX4FZNMU2TpSjTUyzmvxzFcsXeXCWw7YC2Qu6A6UZGhaUYeSLBioU39fDtLZhi",
  "key13": "4ZDYfPfzvz8ArbqV6iKBTLuJViTxrS7MyzxVNqxa4sDXXktxT21GYNPWUz1UHxd4nWL4oenC39ZmEuW9o9XBDBme",
  "key14": "4RjMcNYXMaQEMVtSvQLeXLxaxhnzJyx32coyRAe9oZgGu2gtTz6s8p7GFm7iZnTgQqScKv3WJTnwrUoskqYu5Kne",
  "key15": "5gyBguLhjfmJBjDgWSHQPJ8RmfLDXpfE3cHAKXMtk6MKAzMvaRAKAKK3VoVYHsJ1zHeh4ukrW93yErEojCuQecsB",
  "key16": "HARU1VoWTaVwvtYncMQbJiuNeJXyUKZ7s1LH5urErkVE8Nw18Ji8voeJ2jrTz67HTqbdB6Nb5WhxvWBGTnezVsA",
  "key17": "2v9tSsnqfrj9BK9oYDM9Pj72kLDDjgUcpb1zZMGTsHZYrfPELMqb3X6CmTQFZMKUveF74YmKQ4G4kgqwPMQhM18E",
  "key18": "282ihGgQHfcvjqXLdrfVMh4gDVkRiji6ENhXwdpVk1N53sTZqKeb1RsBGNEvzfA29Xkybw99Ua9qRjGBjF8xnTJS",
  "key19": "232wdrEYw8L3izUjyWpQ1ZrWs63KebPLcQouXQPGo4kyX8YptqhbeJvqRD7ZjEghB22kMXWSpsaPURRXqrmKgGJs",
  "key20": "3nJ8JVoQKk5kiVZVi1CjtLqXoVMQcosBCCtzGivyo61cXkT3SFSUoQ8GXe3AEKzBGLvEyLKW2A2cbukcEWbrPWH1",
  "key21": "6725PzU2DUUp45LkFDZHCU27maoukbjnDzRY81EXpQvXCLr93o8skAQirASmHsy4vmGJPqtvXusnhm6n5QNxDQJr",
  "key22": "363LyP2v8fH3B3f4nqH2vWgK6CzxJ5aWweiKZrQUv8HPFGFJ3FyfABrMJT4Ad1L4UcWUt6BBZR3Lv4yo67mBrfJG",
  "key23": "2oFqiSuRviyLW5DYFu44xfvFmTqCvxKj7GtV2AeioZsoVasyH9FEVvarR9bGML16juLs2NV7DWZQNdVnKhHajq8R",
  "key24": "46rnSUtRVHQoe8ac9b8qb3XbQ14DkCyC6vcT6PLQdq1byLcWjPjtoxvnQa6mRij1M1yJ1JtVbt49mUb1FUoUAEzm",
  "key25": "ffkDVf3TXKjGid6P3ogyVyGk6RzQz8UjQ73Q7EUjc8cavLcj5BoJkyCuRScfeoEiPjCsuiUtvhmq861b4ptidqE",
  "key26": "5geSQFs7HReyVvPs8vZyVJodyGMJExVm38M5bKZx3DVjcXm9ShfHxVW3Gmx4QF4MsJ22FTBCGNi3s9gSjH8WZTgt",
  "key27": "3oenVbxcMsmWy2DDasPv32pFN5XmNvCR9kV2iFvokLrv68s49vkE4FcvnyN6kbQgz28HCPdytKXWm1eawRhYt38m",
  "key28": "58nGLnK3SDt9RVgE8si9cZ8cNV94EqkLSCPJ2FbsHatJHhVpGTrDFqnw3R26XiBYAUUkJyzYwDsaUL1RfrjSMH6N",
  "key29": "3ayXmNXqxgmJSeU5okHotmvySrAzor7NWnn8iP3oBFRtCf9EMyELK6eppivgGSnk8vC9vVVVGEWEi1YF76CoHnvd",
  "key30": "4bZXHEXF1JEUXsweQT2rLiGkSL836R2mP8JyeCyTNSRhPGohBLkayJ2GNVjivts1DMhbNQe8Toznguk7LE5JESVs",
  "key31": "4rzWPZdhSqpn4zs7gYZrFjaPVSP5tkWj6zMpaQ6K7axUGwcqAGtFxAsoyXJdpseLnEwkhvZPhKJugBanqZbnZxdU",
  "key32": "4kUC9r1MxEp7VomyVc8Hb9HWVRm2AjRmRzu1nzf4CcgAL4VqK1Q6PftVZjRn8uQcCUBQgkwAMkxgQPXTk2r64ycm",
  "key33": "3joTZ7xHAAgWhKBFgpwCSEjAXKqbxXLKMHEvuJitcCGEKjRqmGXoE9wWyBECe4zVTDtG9S3rH179bvoHi3tfhT5F",
  "key34": "3yzzsFVbZ7xdPoEv4tAH1TNxiJte3nbcPX8eythvTSNyYAozw13rm9DEBmJ7yHEByv6GiX2qPF1aBYLxgAEWezfe",
  "key35": "34duo2WbxQfva5y5ubSTf73gvPyLXX7978dyHjpojzMMRDSmzVXn21Re7UtFUJ598EowTHLkYBCS983Dd3fqH3Dh",
  "key36": "4iZY2v4HuthKuQyPpWM2EzoH9gDFWVcDYp4AuXcrbmXCGFzag8BSaanGBKaCoHUT6mVHawDEDdH6LRCDaP3g2QaZ",
  "key37": "wcmzErVfksCCcrV7YVQzVcwHxr2mWvGk4EkXam4aFA826JCJJZiuWP7MXfdDC839LFJh5xejo67PxBktEvF73uN",
  "key38": "4N9v65T3yJV2rZrmc9K9fpfxxQQyBxV9QejWtTyqP37AEUFNe6qfHXrGudYXP4WayiA5emJABWnuCowct3eX85N9",
  "key39": "3KzQVHWNgHSpcSZ1LYAbGWVtfBcri9qNTsZ6KcJXiRSbehHJv6uztWk9PjKcJnpnhxRiEnopyVAae1PGYDSS9KXp",
  "key40": "44kmQ2AQyRnzmUVGYWfU2fisidaPbjPzhNuJ2Pk7QiRGq5JeRLr6WgXgP2AY3c7zneZ4kEfuwvz8L7Ruy4BRxQGh",
  "key41": "Bz67WsbzFGmBT9ttYxdqcTegxV9rZWj8mRx3pqbsbL3bmpupXDSpQg9D3c3fkdUz9bn83GkyMsKgty59hzqy3gQ",
  "key42": "535RfYzzynmzWDkVS8gQF7CFi6PUww12aLqEHusvTiQi3QdsVmDdCasBfbth7KLFbSBpBirV5D1mR3xpnE1USDkm",
  "key43": "5kKq1dkN8s4fKgAKKX9cqQtkojfwgdKQfSNbQ8qBvh5N9XxnWEQzVgd23QnsXPc9BXJDm2YnjL7UkwrhvfGAHarh"
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
