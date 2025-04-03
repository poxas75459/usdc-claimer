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
    "P2yu8QK6oq5mt8HAm78hT5spX2XqxVrf4zPD72M1WhsJ414uUTFCHPp6dgG4wNN3zXPiHbq4sNEiozdNRx6psqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RndGx4EsgBGd5ow6RFUXyNxjezoME8oxZ3nUeKBkmRs35TjRcJVtPiZL4ayubBWowFnfnGTpYV8QUN86fdUGhZc",
  "key1": "4UYoH2JogeUH79PFvFGtaneNQL22onwPJ5G7xAhGz1ffvFMo7wiXv6iADqgoxf6Yr2hxYhGq22RMCdvjG2e8ZAJA",
  "key2": "37j1L1w7cNy3SCDWTCZnv9EnEY4UWnRo9ubWXoo5FsZ8ps8JR5Lwnx2ppZVohr2btN748d8tZzLUa6hjahtTVVo5",
  "key3": "2wjJ4EqbTgUpqT4wHdRuMCv9AF4m2854YpiZfK25SxWZYWQ48PSuBDuuBPen4KNWncKNBWDiAzpPkm5PdPSjRL15",
  "key4": "2LFbkpN4fBdGTTrG7cCkiEzWxHta43fycHm4u5nGmxCgP3GAqjpj3vZMPr5kXqDGVYxTaWtccMZCA1VJuE4VWx4Y",
  "key5": "2rAHHVPHDZVaHZR36YEafhke6vHioihrz5DNcnjQbNS4tgyoMuFC7CvSMsN6X9Hd6YAHzYRW7xLL9puTADrKwAiN",
  "key6": "u55dWULDPjpHqDEpyQDXdFRPCnyEPf3H9k6Fzb3N5W5poxKJ8EvKTF3tHNBmJzDF2smzthM3aJWyuMJPas1Lxjg",
  "key7": "44WEPnkJxPUW135qwZVaknY7MPFf8k2KpzgKW7EWTsSSbi924Rj5GknUUdWKvXT1rBPnYew5gxgErdifSJsGQGju",
  "key8": "279QC3YTm7VjpAsHyLog4o8eGr47YnHEsUAFJSQSVWFzVJaCjqwHpYyqH3DCcxjTme2aAJpd1cpubgs4xpc9rm7o",
  "key9": "CjMCPJBZNNgPeXzH1JqdzG8bjmJxJTjUBttG7P42m14pnT12K9qnut5NZamcYPWrNjG7tpcApaqKhoiSSaDD5Gc",
  "key10": "55jMwMbj56ECrkrCJWrL8cADhBeznwJ4bk89Kn2JKQPV3EKSrwZRzvJBcAtYo1z94L8wC53ZrCXLzuqfqNYrGNYP",
  "key11": "2dSVWZVJdVLGiK692R6UeJFcLMbLtSjc7xfqKRtRjKf14VB3yF2NiNQQqUa2ZHP7a7P3PBnans4GYMPyRfMfLRyD",
  "key12": "3SAAnd22toNWVMnmtYR1KaCS4Bf2ZWjVnu2tkWxFhsiq29FrCJmMyKsu7MY5JFSmDd96a9qY4vT71rvETu2qVrpP",
  "key13": "5jYFVZCvVEp53ULqQqrBwaDV55wBucvh5LzjDYPTC3HDeH15uku5J7ceu5yCyrGf25CjoL95nKp2BoKndCEGL4Yg",
  "key14": "5fxr4EohjJBHRPcYs8kTmaReaWjmy26481bKNrEfauRPVCpV2n8e1FDKQ8fYLEqJTDCKWejSwJ9UkRq46spgAZig",
  "key15": "52mFeLWwm8DnBWkunw4fY9etxKty8HUaZPpjwX68FLrp3Hhqhbr17qxqX63F4Wod4cz3zhM3W21Ne3nsPcPixfcF",
  "key16": "5JdVmMiWDPxJRGJqxFZyT53TQVhdKbGoAKZt9638njAfVxpffViJoj6Z7UWSAZJXaJSM7WUymtbFmtZVYRNyJ463",
  "key17": "2DJcjWZoNBfXkZdjqbW5w1gcDXaDKbKPdGF9ujNrnNt7WtDYKt84rf4TMq1vVu1fAaWov8GYBattcbJNB6WHwPuM",
  "key18": "3doqEJTJiTXBAv91WmHXu35dAdr4XcWqVVh7hUK7dkUL8Z5ooPoesV8EPX9YsYGF6JXHComuPTWivNnw3VmKgWyC",
  "key19": "41BP358hvTDVNKBf9bofh9Cs3qADztTiuDuj2c2uH6ith7Jn7xJt81YaJvXj2zzCChKxwBu7eQqGCEaxvVNQbUA7",
  "key20": "3yd7KCXZkizAEv3Aw4CQXfZFGAixKsJcbsYuGGJCugLrjZmuZDSpC4B1fAJkqXiNABWypSaeYAzfGkcXPqUPG65Z",
  "key21": "3Vr9i3HdyrYHt3rqbZgnbtPZRwCRWRvruyMdZGLJGW7XjLsCPBQZpMdwxmvAFqbT8UoNtwW7dERRi1xCTSY6ztX7",
  "key22": "NWshvVMwR25wpfTyAot9xLrH92fjp2PCj5XCSvtCaZNEYS7FMViqLNwsfNpBqa2cdkn5nGKVja77pWuG44AjJs7",
  "key23": "EES8yprdA9B79nD74FVz4EJfGbVTw2KR2VUfxXyuFrJ7EoysXJRqctTuRV21bNA68MeYDcUUBmk6KgrtvUmfHS4",
  "key24": "4e24deQksmuJZSKwE9c92fhDhTkrydHKsSc4EBqTXB64Kbbgxkm7n3Z2KYc3hdawF1XNrxWga9ve53ZhiUMWXvNk",
  "key25": "26r27uk6AD3Qer3WFdxEN8B2PVCtEnu1wqZwT4Ccf1D292arTjtPzNrU6dEZFpcHSNuUwtNyKUpGxPnk4rMAEpU9",
  "key26": "pYq8xi1iPKFUsvTvkcZdk7YFZezP65JbqeietfZzNp94GNG7XmgURU53xpxDNssEV2ArJH1jXVkffE3fcm17jFV",
  "key27": "249vTZDAuvRPi5Zh8qD2bcNxjwWf3PHtyhbvHTvM8VK1bSJmHviFysmKPWsZzuScMgz1HycTU4ZEu99eAw34XsTG",
  "key28": "278r1nQnXujbgBBqja7gHXJfpKMD9Nn6rH2cvUAf2dcM9PbMvTAjyAqoDmgbJd1iZihemEVD9LG9PgPoVmTTgGDQ",
  "key29": "kRfQ4f5XQXRATJbC1fWCct5b4iJu8ypBwGPkVe1hXHRcpdE2aT3fWHBFzY4VF9xPUDnRhccaiXeEdCAMRhGSp3j",
  "key30": "h97Ze61H3TYuyTXreMSkZrXv3x8nyUEmt9AJMZ4daE6T4qf41namVk1eKBiX7ZFn5dPMoH9A6icG43RTMZn5mXE",
  "key31": "4TTYgJdFV3wjGGhVHGV37vWaUSv8ySWWj57bzxjAGo9CwVdFEqmppdTkHuoMkicyJTiUQbLmLCbvAid3LLMsCGvg",
  "key32": "2hFKu87w7z9DhKDHKuSKNUBwiPBSKPNxBqHeJMz2M7bSK2db28MFEcU8oFWjwsNYBoQwya8XCXgzXEfDKdYsoDog",
  "key33": "3X4V46dhJ6w1WG6ymrWz6R2eXPMxa1cetueoHMT35FHnNWJUAfD8dQUXykwrEPcGdiNiBaa69hK9C1CakJpxHXiy",
  "key34": "2fivdh7QHd519r7VTC8BtKmmDWDmzFrKMR6PRJzYBQcrnqbbZnt1ByVEJA8tzt6o7CPgzRQWQemZWkUESyviu34M",
  "key35": "24VuA66Mbx1nNB129RSts8nPai1gPPMg2R31fLx5h9VjtagcC4TPqPbZPCAWWSzAASCBqRU4ubrw7tQUkkBkP4Fc",
  "key36": "2rhCkkxG7Hrm8nSji8gABiR37wW9NjPLuEs4gek91KkWJMrvpnuk2VDKXWjH2UHJRi1k1jQrYoPMKy9H9aR8ZHRF",
  "key37": "5Q4oYyTkLvwgPSNt1arXbHaDSrJ8QazqKjHZUwbEmKicdNUPEkL1S8ZuZJRtdYjf8MMCGkNZ4GkGX7fpsdpJncPw",
  "key38": "ZEqwRFaE867QW7pFFuGw2gwPj21S8WzFnKvN3SPoLnPY5saGmDt5DgY27sqcM3eUjAf92fcBQfNyv1ywxHNAK8D",
  "key39": "2gsXr3NTbvsmpgBjUYKrhvYd5XzuDxmyHsPhQHGCqxN8EQ9NW6Xs1gcxvkABLxcC59bhDsAq48Yb5hrycRmmjQ15",
  "key40": "e9wUu14GvSj23oEjLodnMp9x2vPf4NhYjj6MA9zqXiN1XgqAZsTGKpTV1sPWXQZqSPyejYpWWxXyEjBpgyTqmtD"
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
