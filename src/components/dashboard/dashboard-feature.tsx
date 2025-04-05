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
    "278i6bxc82iigqnpYCfNbJp48ki7mvuGxzXeiNbCVPsCds4srLPFFBf5CAQtYF332vcL1dzEXZR3ahBYBxqiQ6aF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k9zsqPbS3eaKHgFP36Fvob3hgGnU5hMthiApjP7xF5jt14Tv6AvJV9oVzjjjsYPZRyvdumueigbNTfcncpk6Yis",
  "key1": "2qaTKGJQncvXKutSKaJRtkBRXY842yYWBB2Mmt24U9KtQETXdZzjWCpgh3ERF7qiVnqhsscjXESFLHdChYFzwusX",
  "key2": "Wwfcmu8UFeZG3Vr2rUk7o4TaWedg2RWWCEUMzPf5bzXhwfsmFKVVe6QqTcBcKnZ76s9zGhCUqtJFHn9nzz4kW7g",
  "key3": "2jhpXYAfLAYXjVjUAfB68PXFD9ETjUeXfgSwtBYoggJJi6YqxtDkH196168GpXGupmAr5fetQQGiz4iQsHvFnm2S",
  "key4": "zC11m4cAyNeiP2rHJuGcdkyWKxMmrkTs85TECcuaGG8w8oi3YGmAorx4nCqyLJMunz2dtDeK4B29HdLBzfQaE52",
  "key5": "4JWknFUTfnVjp4uSyWGGkHgMZ2qQtRpzjJMJnjiVMRSicqsWYXQu3aKQVBv6PiYrnispU4SJFYWBASqPpPX26PqX",
  "key6": "k34pw2YUTeSTr5gSGrpgsqcxRgfKeaE5VgrwzZvRRrdiA3dJtjB36N2JgaCPWMGkCxpijvmDCvEbCu4eZJrAjvB",
  "key7": "5YRpCp81k7mt2DQYgbTsi5FAquLzKPdoSMncADCEqPeDNicLtyiQUDfFkMYLHh2aLoJxVNw83izRwC6M5HuKZPG8",
  "key8": "38mz51JBiu5f359yoRiFFcb45Yqoe8AEPqCB65W1MQJa712RRzD4sHM9WT74xzrGXntyv5P6MYSfgxcdwq4Lk3ir",
  "key9": "Brd44sw5ib16z3Ai99DxAshLkwoZyWdZ4MoRSmx8ZYqPpMCk5ao7XPSvz3vfNmfpL8So5nHaBPB28HovKKGTgrg",
  "key10": "3JcsjQMNfaJgPqmCBRzY9jGoW6upNnZWsLZxB3qyHPCUzyFjJ9G2488P624YqWE1MDpNRMZyK2uJ26ZdbrzCdBzo",
  "key11": "3Xe83PWya1oyyLrwvbmdpxQ6UwqzNh3wgQr8naaz8ogTCTsBEj6QQervjzUzQLx8pnSrhY8Fhmf7d6HZo7rbRb9j",
  "key12": "3zFSdJUiyG69owkkD7tcsmcdEFk2GGpqCNTLWcT9qrykLTj3mtMhyPJCmCzUa9Kqau3i4EU2rEDQ7eNgrdcm5d6L",
  "key13": "4s2Kogp8iEtTNyCXXAXCZimcdWpHq2pJVrqUx7WSeRVpFjf5TtiyCSUf9xzmyBp5YgL1XUgSZF6ccmtLXPFud9jp",
  "key14": "5GjmCQf1GESNjEFoSfVZxFriE8ufc7BUfzXLdgECxb1LvU8GbiLH6GgQmRjQyP75XLsu2pjVfAA8weTpKvAPg2vw",
  "key15": "3vnb5J8iiEXwyAMaLMzdn8hSV3mTd1n7VDRKhyUBs2Gh9N68aRuiAEeo7dFyEno1K4EGwNH8oVeWuPnnWNDS4ZAT",
  "key16": "5dykH23hAKe4jPwzfXyXwN7SL9KYdPXHYukd1JAUyNSNaYTyVAhWVwKW2y7NmCGny7ePqmjvDUuTn7Ui7P9r9w9Q",
  "key17": "4kWUkpJV6MhuBRSkVyi17me8P7k95pZuUKWqUgJmub2HcRdSeekdRUhuzxAGt6NFzkcADS3JH1m5qot7Nvg7iGju",
  "key18": "4pYSqtPS6NY3GfjLtYk4Rep4hWJxWdZVh3Bg8ru1VzpseGy3xWtqrwSyHeu7pwXLxdzV5M2DssdCHQKiz3kxYQAp",
  "key19": "2zihjUFSndCWniashyhiwsYp4BKwFQMJriVyUoxpMc4LYL9ECHPLqDJHTsSfLDULtJyp8zQDXeVN7CSg4Can27AE",
  "key20": "2ZcQPBGTrHoVpwvD7PvJGa5G54RJZTVmSZeSynDk9nXpLG1fzqXHyW9JKj3A19FcHJgyc59zDtjW8yaxCDQtJv5X",
  "key21": "4ZuMRj2XtZRDZ3Ns6s5j3wP8nYRhbRj4CRy5AqwbxjATQQRayUQUE3fKptNBxGvbGpSUfANw8wHnu2HFYGbV7VJq",
  "key22": "5usjQsyzQSVg7QZqyJZpHb4Y9UBhUoFj9SV3hRsgymamFT4T8u4YcFV5jvhhfwJAH2CQ57k7JqdUedEwaLsS8SRt",
  "key23": "5dyD7w4sGEFLsajYc5ZJP3WwqJbHCtfbqW6uQ2iGfi9CMUCTnasqDmo5BQxejhcstHaC95pZbDVF5jw7c4CRD6iT",
  "key24": "s8fd1TKEnf3An5GwUxwtCCPVZ5j9ioUkLEMiyQmM7nw2377uE1W1ePQzYMsN6mSe8kq7zjBAYnwuxpSmR8iEMwA",
  "key25": "28eqqZESk6squaAEbJS5SsTW85dPxyEuXLVPNSvmJjjycbAwz5ccmPc2HWToyKmGdgw971b26v2eiNermNX9eNH8",
  "key26": "5ffN4jh6ALa5vPsC43rpqCcG2ZN8eMCyopCAUaTTbJPguRgtcZyPN3yVBCarAr71kKgY6PkbDTTRJAERe9xsyEgK",
  "key27": "5ReTBdkEbXGTWVdb2wUdYBKe2ob6X11NApKoconf2XQmMJ9XY3cvK428aq5SfYJkDNFNJz45ABLJxm4AM4fZvW78",
  "key28": "qKum3UhxdAhWp2ohLR82L69dpBZ3EsfQCqXpm6d9c5pJtTSvSiqzsRFr3tVo8tjYzZiuHUcTwqfjQp81rdfPMwx",
  "key29": "5LVeYz7PJEPyZzc4RTosVDLyAFtM429pifU9YBmRPGc7VqaaKC4V2gxZBRsnLWDVMH4G2knBS642C5ZKxu1e7oeW",
  "key30": "4MpfLV8BUM35H56hSGazcDPZJCW8XTjpgiPb1WG2NKLwQ5qnrWHFE3rAjfo5Pu5AAM5cYzpdhwxH8McQrXFtDpc5",
  "key31": "2Vmr2o4K4tWpz5M6QFaPZzMhY6g8BqQfUPNcz8tZyXUHEAZ15NQpvqYe8iij49js1C3ArezCtQkL21ByQDrHyw1g",
  "key32": "3XEqtMDrquEndbH2W4548h221oEaPWc2EeaiAk66VLR7LFeRrP3bupkfpKY6dSShm6UcHsEmEFaZVvSmJ2Pf4yo4",
  "key33": "676Ya8C48bUPKTFD6WdfuBHnZVdaasoWmG6V2LvApjN2c1L9fkNvSnavqoGXoT2mdzJDv3FifcfoBpdRrcCK6q39",
  "key34": "3o7D7WLZPE8HL4iSS43AquP2vjxyRBPYCGDo6EQXqMUKrFsRKkdS5fntfWVBoCz7UnNA8iQDAVt2yxAP7bXAZtn9",
  "key35": "4jiLQ94rpi79feiHrwiA9qHTCDY4VF26SesGC7bnKHixTLuRVdyjdV8wpthoeXNADasV9KvVjEn1coGxKyUjmqdM",
  "key36": "4F5LvCNGFj5U5m8w9Dq2N2jkAfdMX6BeCEmyGLGNvn9sBkNiFqNxXseP5pPVKTvqwaR1ih7Yi2iMknkkq2jLTLg7",
  "key37": "4zvuNWSJHeuBYACUWK1TErtLXt7jZRBLYxzpXMENYRjA9qX9TZJ5KyTLcquj9PH131BMfJodmFGD5wyxTL6aZ2RK",
  "key38": "271VjpJdpH16ioQFpmXbVnBSeDzu2HZzRCdfF8FhUDH6u3Q4QcdYKEHHvXaugS5NWDg7PfHPPJue5nvY4HzTGacz",
  "key39": "Lw8stXTPFCvTJtXz5Qhidt2cV9Xz7UWf9FfAp2HpLCYQsmBqmBweGR5Q7faW2TyqX9vh4DKSq5myrFHYDZBB3We",
  "key40": "3hKLbtv4WwpdGeLu7taBVezdJTaVxpMfqV32GAxt7TyvBycX5uh9dzadrdNphEGumaQU3ottB9g6nSyGNN5vfJx5",
  "key41": "374ybC1U6YHcfnidz4zVUoFKT2r3rVCdJpr9m1EBSKHXMjFzmXtF6VrHrSpj4RU1qNmqDXEKXL3q2eEbPwaPMuZZ",
  "key42": "HoLyT2oirdePQCLcTGLREQZ27VuRZENqg5LrLafQgpho3ajiVqmYnuKA3K8egmSsw5GeCGec38Z2L8HSrU2BAXr",
  "key43": "2fhiCMENccLWYJ6VHY3L1rWpq8EYSDKi6dMCKC9RFWF54GbKmeqvHd6yj6YyVLwAnAnU9MsQ6KoSpUrdrTBhYVWw",
  "key44": "4gXrAf8zf9pV9rt37tPNu719QxrFYVWv2bgvanPDUsBKJPy26ABzCJiG6VSGkimfV5JJFdzyeTuRCqjQi8qLm2X5"
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
