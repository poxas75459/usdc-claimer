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
    "3fBWfbxHQFeLRk2YAEpY1X2z7gepbdbwb6QbgHXqfzjFtKxssVM5T9X1XUDgnGQTqSpponThPMiHX3TYxbgGwujm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r7BZW7EeXc1bG6j6w7Bfm2ZiAhTJnjwoVBEka9BU1WQCygMycSCmNzcoY7wNkH1jZx4L3WU6PjufNjZjHsdzp3L",
  "key1": "keBEfSuYUzMnmgSC3xF3CcLtH1Ajba1cCzBkBjAoMv6Wd1vYsbfX3AEeBxxEBYVnYiNy3TAaTruPmpbbE9edeHu",
  "key2": "5LWsJB1Kz2rTs8c68SnUEtAqAGmKPAoe8h7QJHN1xHEqu7KTxG9quhgoV4SUfx8w6iwoB8qsDGxd4rqxoHTv4v3y",
  "key3": "5HDdaGtryn9faKTmAmSeskUxoFdBi86mck8w49CD4cbM9ZEuSfwyFec3DD53YEe4iQnZW4FyKzskZBf47hqCN3y8",
  "key4": "5xAXghL1ZP7fCEThULxhoFVhZGugTCmvSLui23uLyAxfiJXcBrXGmzcYeiw4ibBQJHLTmZJzh6Eygdgx3n4eHrVS",
  "key5": "3hJExZDEUwSdcvAA8b3KNDUKBFEe4K3UPEwdbF8tWXdcwMHJxWddzQyLWhKZypsUNiWXXNo7YctzK5Me8cSCRVmX",
  "key6": "4jVoT8eRkqLurBnrgMs8qbpesPSM5b59HEhAr5tKskodwuVKvPBvCkNeJ1Sr6sgWMmgbJHJEgM8b5bPXQYmVxQbv",
  "key7": "57iq8ALrBGDKvtRzih1m1Nxp3YRYLXNAsyB8xP7v8XTAF1k3sZrw5BQ8j2RbQWWmmEprXcaN5KF6KrPByMLedSFt",
  "key8": "5E9Z71nBA31YcJiSthmY8idQYyJzG58npt2fB2QwFy9q7FvbrohQVm4UL5LoPR6DWnVdpAZXfKMAte6hQ7rVyDNS",
  "key9": "XohZSHpvxwTR3jrmF2wCXnJT8TNweQEsJje1jSpDHZ4NjVQPnBvY2MTGiDyF9iS34mtqxqyAwtC5c2JSaqgJ8fp",
  "key10": "2reVmYjpmefcdfQbDeTtaYErv4kggJzgfosKoxukCT1JkzMK1YMn3d2sTzwaRkKprV8et6EviCRT37g8APXQUNDq",
  "key11": "5WWSz6JT2LtdThXV9NhNZrrrdcEwrMjg3pp8T96yGh9vPRFtMQGB1LqAWTQYVfvZPDtCRhz1UTJ7k8tMMpqgNqYa",
  "key12": "Npna6RViP21LqqMPy9uAqUyqNzJbFQQZiVsDetmKpfb5ETVrgNAcU6h8aJr5bM9za2ZpuTqbgPu6oMQDTTAurXA",
  "key13": "3BTGzCSMACf33HjpF5BHyqUQRkoqY9QVYTwxdtXjKqkLzS2BQBBabP8wUJ9on8mUkVWMXJMWPt9FF7prtM7rkcPY",
  "key14": "58YtQFSUeFp6wTNtRN482Y65jryoTyY2mwDc8dhUSMrDbRdwQCN1bEuSqcxGB8FERtNrWmXBpNLhHP3JK91KNmo3",
  "key15": "qLaXk7Adqmf1GpZta76A3YwYrL8RXt6UXVhycUfTb7H7auQxC6UvHgWrnKVFfX7cwrZS4MyptTZH2CjZzcnbAxJ",
  "key16": "57QVmj9KyBqFrLgf9xQzVmdgoMbP3KKt7zZqNheoMdywpMTm6heJVwouJGMXNjnB9j7AgmarWj6VAYgW46D6MzWz",
  "key17": "3vBnQFmpehjdDDYbnKKuxL2YWY3GCHMrvWhERDVc1G4xHQTJYcwgfxtHcwKqkWrpyst92naEkPWSzYYU9eizmzg7",
  "key18": "3dgUA7t83htqgbQmjB7FsW51SBsvS9StagU4tfmPEeiBkLFg612Z4XvVo6okZtt6tiidxvbN8khKjfUVh2inpP5K",
  "key19": "5nwMwZSg8AH8Ab4cg4pMC4xG9f7yDC8wjJtWD4QSYU7q4rZnuh9eqCbzD1q9UzZncUohMgtjoBLkDHqK9pvBuYmw",
  "key20": "5oqNv5iQFw8h6PiQnDdjJiraVBT2Uhmo9BejGLV5A52zGaYLqx2kdwBKuWJnDNrKcsmeGYdHkoQmE8tW3cg1bZfv",
  "key21": "3nDWDcAwqjHdcvdxiiLr1t12Da6dcXp9gFUNuB9W9VozbXgZX6cTDYRvrKgTGMvvpFacYeAstVvXykhBwVR2abCr",
  "key22": "38aPyvpaS7o56SpiXpw6VxN4FZML72B5abHMuf4Z5DTuXEWBfML2ZaUsKocAQsQBQsbETSYMMbtuYYbPNvA5Krj3",
  "key23": "5bgELShGEZcenQEBpF6HGzvYWPGfrrjUhrqHytvDY72hGJCAh9FUrkPbmeRiTFhPMdFC3DQvmCCwNxLHEGneqjyZ",
  "key24": "3ikazuKmU6UJunvaPqyFic685TsTcj9i9QfxNWf1UQ69nvn6dm6r6jeHVaXn8Cc9rsHmo8YUcRvWTobiuF6dtHFq",
  "key25": "4ZZ5CHZisLYwMGwNTtJibg1XJiGjB8s6xurpqBnvpARniDtLUvgqJG7fzJ1YZ7GQJUEPaBzVAo66BWBZTH7byydH",
  "key26": "5wzfQXae875ykdSiG8SoKfuku8Vc1yeF3ugcb5QEN78i8hhSDSLdFFv4KK8K9bDx2Apa1fhp3BKuA2YsuGvS5JLr",
  "key27": "2FSPHPjiBi8kcafZTp2Ze3g57u2Mkqr5EDnhYZrvwbYk2aGTcbnKtae6oP79ZbzLLD42wfb4n7fm2GfqENK864kN",
  "key28": "4aM7H6w8hhwHCgdbbmX54wnZixhaVNytMfnHaZSgfSVsFvne4SDvcTG9qQ1YBWejjtH9ktq6svTd3d4DykCnwj8m",
  "key29": "2WEyAWLeWErYRS1BF7MxJrZjC5X2DYQz8Vc5YEPWwoLc2k5xv5wwFAnN9FJ53Vni15WgW22Ss8mvq3n45sFSvDew",
  "key30": "9jD8FPsjC5AxTiPLrTS7FqdPCHnrNTqnFd15KbNVEsGjfEYidjofkAfsWEPQavXPrmNiykp14pcVZ9bfpvvkTiu",
  "key31": "K4CpJXWW4EqbES2xwHofcv4Tf75EEbAfs2aiWwdcgKsAj2Y1hB569YAWzkrpVPpXBX5drHPfpXXLUDVDnCA1ap3",
  "key32": "4Z439VLcvMFZdc7279RVF9tXZouHGHEAYMS83SMrWCo84TFFsBjqAVPthhhiUuFM5Cv2tovVcukCXoqtswc1uKXr",
  "key33": "51unjDDtYTEuYEGiwQQNFH3vmK2y5eXEsmBoTp3hHp5bqgKz2ER4CVZjKW9ZAUB8fd4noj2zcgpo18qBjfWaEtYE",
  "key34": "sHMycu55EttuAa2KynYqvdEDg8twSnfLRDsxsApZvRswiNPgC2CgfWmBNApRFJ3pre8Uoc8FhNBCfX8FkxG99KP",
  "key35": "4gknFRASC7JHjJ1iqBdg3rBA5aJFTsS7E46gTU2dCQHMpYgFUexyho5LvDSaNpGE1MPbz8BgC1R7eVa3XU5yKHjW",
  "key36": "4Vra69Nk6bt5owYvmBuyCJkUdin6EW9FjMruvrq8stEDaXQR7ifUnAB7KuhjdtaFLqmRN6U5ryMEqXb8ixX9Ceq7"
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
