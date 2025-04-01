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
    "4j6Csr8WGftbMEvCiUqpr4S9wgBM1wCZWuTaYWVZCysTdVeX82NPH39H6RkS4ADdS2TrBMnhbUaLVnZSxdJBLWLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ySupmygYWutxMRqY8u1EcWZYe9Bgcjv9Wa1CyH9X8zitjV1SrmBTUUoVXMgyke6XbrE1o9SaSX6BudEXQJetLeR",
  "key1": "45gLJJ5nnARNff4vq5PpNDE2c3NCjf69ZZC55p4QJRPhXj6Ak7irtHJ1LmY3CLhM8LrszJqb3BkfizQ5JKAuNutD",
  "key2": "4NMreXEMgWiniFvzSwcdkKChAou2uyoPuEjLCHe5bkdAdXNgJBbg45NyqyeoM3ioE9nMeF8ZCrafN6mXDGuU37po",
  "key3": "4f3msfyF16ab2ChHhLPG5umWD9p8T6Ddx7VCPKbupsW6RCJMbzMd4avP8GPtd4e1hSf27T5Bo6HHu46LQ1kUB7um",
  "key4": "58vKzMrZhu5oBiueXrfttdU5U8MJUwdi7zTJKj7NLKAxom64xPLspCLj8JRrSQMmJdGxENUiFhCMdu4N2dX3mk2R",
  "key5": "mDDMR7RZwq4aUEqJxtAsbDobjZKBo6S45Posr2pwbwbGVkgUVZ2NgHdrS28oHVNeqwT5jMZbi8apiiYuwyoHuvf",
  "key6": "3agSBehpuecRUB84fZdtXistuzSs6bBAzu7EBnUAXQa6Rjtx7FMasDNep129PVh16mhJvuEeh9kz8oXAWdndagE",
  "key7": "5Xo2Hh53d5zPoZH3z2eXnEyuwLVdckJJyFZvY4iTjNqxUcHaXYHYvfPpVorpjKQJQyeEhNLfvZTz7Xcuqrf7d3Es",
  "key8": "2ftbpfo1pKtWnfek5L3GZhnq277tucfu1tDBaHe6tteQnd9vJM9QGtvGkGSngod49Zaz86U6E9QUf9T5CWb8iz4o",
  "key9": "4W37QBtSkghVHsU8rwZLAdhaTsYHLQx1Q379XUioq9dML32yiP2w8qmFoJuSs5Ax4RATRLL6bdUpT1cbqLcWfiN3",
  "key10": "5RLC2Z5xYXGZ4keYo84TzAp2EPsSeqQpyjSNBLvDAk7eLuk55uVZmVo8KJ7XVSxzDtrMQ7pv729TUYrNPUSrczbt",
  "key11": "2NGeMp9ZTv5ChSVkTAQeUM3FGxxzQocWzPSCgJcfmVab81fK2xSKVDm469UWUxZ9vaNSDPCwCW5rCzHZoqq8b526",
  "key12": "2Jbpx1KyMGxvUgSZpqyumm837xubRpJtbyY4evXPDfv6vNwQAyCRsj7Q2AK6tK44qWarMrznxFM3fwgQTLxupsqD",
  "key13": "25nkpbbjjgUJvmx7x5ZddKdGvXr1NUdHgZ7KZMQ84eF853icUAHWkXP8Lvhh2JnzvMP9mssqyHif1rCaPJWNE7kr",
  "key14": "5A3YP3xR4E4VF6jxkjrdf6RrQHu4kDeAbAJUQJqqD58UtTKG6wWiBxCM2hT7vi4YkBNPsAzNqRWDyAUmYRGfC6mR",
  "key15": "5nTbvhG9RdTjDv9iRnkUU4Cfy6whJ2zQu6Em57G4dZvv415Kn5jHtrVQLpdg8yE5M69Nh3TBXZcKy1TNpBcP2ygE",
  "key16": "35WT1vJxhfdJm6fsQLB5dDhKQtAbT2RKbD5xk4rJJtvqUXprdDdabN2FcTVNoLWRFgBBRzYqzoAsBe2YBeFsNZvh",
  "key17": "3a9UWFfQMimuMXWJ5RrzwBhc4Uw74xssqScULTdtc1QNF75t759gnmbHHuwAgevRdfmNKEqH9JAnSPf3tTG3WPp3",
  "key18": "26vQzJ5nDUqwoSSYSi1cdqsjB2dFUMQKnM5G9RGPzTAUPr3NYsDhkuUuRAiGVQh5QPdC5m2jZUF3RmspCkkcdfvy",
  "key19": "3qrz8Ge9yExnBiuoUphzw96Vh4CcnB4tPixb75vLCSPZMQxw5gVcgL2fPFAGBgQGh2SoByLoR5Y89u2nw7quahAW",
  "key20": "5iRXTCPRyaYew7S1nzFAoCrW67txEqahQKFRzKhexDAqoSoMyhJNmd5xq47xAHLUB6W9TctDVkYQV1ABv7qTowyd",
  "key21": "mieU8SMRMAQbU3hnQc2VaJypCLU3xZ2K1Sd9NGtu3zyiKGCR52phbLfV1vJygtc2h5zyVnRhQGdCzBYq1AdnUBW",
  "key22": "2oWp3Bu9ZwDLG6uMVCBWXXgLb7XVkHs3xQBLFDyH1TAdCZk7nphYqVs3RWry1vbA2CRpKcJQwmfB4iKGMYyQgNpD",
  "key23": "34DphSxtKhf3iMBEnRXtMonksfVAHm3jy9odYrYvagv89uC2aLm9D1358o4YMHSwEU3eCVj1UeyawdoUhXoUxu2w",
  "key24": "3r4BmqLyzxwvKJ5EpsucuJy3nox9rdASi1XGbez5hgkwpUiHcNBRc5gY6avReGfBsnbh7DgGniDV7zj4HN7mqkmF",
  "key25": "syc4cv7eW8LrHQD5bmt8Eqnwv8fMSez9XT5GUw1dGBDnRjfxkNj8o9L21DBSZdmpUrPt2YWAhrbtG86bQyK93DK",
  "key26": "52dsQvkH1UcyShpmadHcHfZWoRMXXAFic9RpczMVLU3Q9LH7xyz9c6ogLd3SrerSVCcHDhCijtmCwJnGJcCv6fvc",
  "key27": "XMDUswbxHJiWQDwdXm9t9ebeqBsosvMuTCvNnwJANqXqdAwTXWHTohmv6zpW6rkjMrcLtCyRrLbv9CUsukhmP3L",
  "key28": "dQvaVV3JNzra6ep6Wp5LcM7DFoG5Q6c8CmoE5cRgt1pes5QNrPVnnsDk81TT3b6wZ6yGzjm84x76siNxozxmUcf",
  "key29": "3v8gMuaTdG31Qf3tjQqzEaZP1QPS39kKLjGVqMu9CcAsQKvX78AVC46owi4wDHz1C5aANfYm2zBt85dwc6bJRH69",
  "key30": "kmnvrWtbj2N6dT4i8HKAo9RaAcxwurHY22DCqFtdNzec6qBZ1MFmsy1W7eQ5p2rvzexQjqpJZ5QJkvJkXsgNNss",
  "key31": "3162kbnY2hg3xY7fECVumm7qupoyHg8GDmc34LeJDnN1xbZojZSYDWs5efZe6VbeqWoAYawnJhdgMUJc2d1xCKG2",
  "key32": "2JepBytK9x7Gd62nv22gLH4fioFTTFxZrQnB9adthBX1LYxhjZgVbSPBS9hpKPU4ytsJieA5gfaVv5CyxHmmPh4Y",
  "key33": "4XyoGDe4Qe9xQooPY3dPgzWMENsUKayjNUDV4hYXfjqqtTMfgJkqyJCvsx72MxFNqjg7RzirYa3Lbkfr7rWiL6d7",
  "key34": "2ASh3eHYVxE3w27nTD9Nv6QUPikKnZxABxo4bTo4roDdH17PnTUoUrBP1ubSfFafEVXgU7RcDaTi6fiaLhNcEj6t"
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
