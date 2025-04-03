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
    "AcSduVR2jzZiyu1uVb1Nytaf9jFBmLr4awYtpiahWZcd7andspKpP7crFJPhXMV6a1xZFrjkBcfBbLq3zzm6fAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53t793zN3RSMnUpDfX43Xb5TTsDFcJyrNp1qWbCpi8F9JH5dn5pNQPKeHwFfDnEccy2Y442GhW4ccM2KjCzELLQe",
  "key1": "3JZ13m7tPDuGk2rXBpHUZPfX7v6BEe2CrXn4Nrjgc5NhaUNZ9qBPnWPjZHYwWWoExFxPDyF4npeGcpBioiuNDRc",
  "key2": "4T1x7C6N6PVX4pTvHTSZcgg9s6Ze51xABwUQ7xvdBgzNej5s7EN1aMCyg8BxSFSVtrZrUJU8UAWhH1bGdKxJtk6t",
  "key3": "4FNv3AhsKkR2xnbDhcEBG5xuTmFK1sSXPxFqCzR1XnFucxM1zec36te3cHD2KyzaR2ReYtUHPYMYdTQtcUjG7Joy",
  "key4": "467FGicizwtR4xUjDgU3zEzpic43xHEmFhLQNzJFmckmKsmwH6vDE4xMeKEPQK6aCo9FRstrLF71sydbZWuSmRcW",
  "key5": "2qkmGb4uJBvSdnsT6PmcyZGCWqQTjMGdVuWBXtKVskUe1Ni7AU2XkJaX6TAB9ZQK7oGtsDq5Kwp2j4NPJzc5eQbJ",
  "key6": "5Zxg2NKYFdsAPsWVy6T9kEbLFNTALVKxiQ25WSuVJgFHe21MHuadzNam6ezCCTh5LrBdgNCjKZ1FQJrhdNzDW6V3",
  "key7": "4bKsfhw89QMvt3h3uiK3P3FUZhZdjUfbgvnyFz9gGkmfRim9e7xAJDNUyWHK2JCCZimAi59Y6QUxy3jHmxqPyJWw",
  "key8": "55NEzDsMogqjaoSd6KTwnFUeSSdxqckLbgHMEgVKYrqFFy8WzDY9Jm9f9uETG8pXcrBnasqHvbp7KnMSUX2uKYTQ",
  "key9": "2HStSMUWsZAUbgKpmjwChJBN6Luafh8kNytj4vLUCHwKKnfdzZqmhVLC7pLxoEwHmmHbdh1234biiVK72DEAjYHS",
  "key10": "2z9K514P1Tg6DJjWvKnPQ1CvcQcLSPvEg65GnuizioFHn7XSBhMcNSAGNTukNHtJA8j4qfX8GE5zaLL25MsCcxzF",
  "key11": "5YSFSxu83XwUgFXbqkR2UEVfA6dLQiD89PdRfV8rfgKK9Gz6CLjm695Z16kHtUCsensgQEDbauMyq4p788ufDCKs",
  "key12": "7gsNi2yTYzicFjNxrM6PuEiFaRZdtMtLzmKoJfgF6Wvt5PJdooEZBed1iP3R6WobivQABX6F1rL9LXoSy6iUDYK",
  "key13": "65vEkP4zcGRseqXFZghXv9zTS9zD7qt8DnNQFDMnbAWmxZShgS5GgSkLvHmioi5qmPd5kBfN547gRhUjj48Z39Ni",
  "key14": "HhZZgJtwvNkEGsFqTN7JyEaLezyV4KRHh5jX8jmXPUzaNYwk76xqo6tCGHwMono7gA9aiPXjiQridoz4b8tymS1",
  "key15": "5kRj3E8FvJZVv5R1yPeJLfAwbBSP48jCzLnz3WRSZtTSP5RZ5VHsDxZpEKKjX6mSQ7C85ppzLEC3yVnLKedUxrz9",
  "key16": "5zoBRWMFDeSLuFPYVE71J6Vgq4syQFLek8K4jtL8p9Ua8kvsoYoHquit9HhF2P9WhdCBgXjmvEoaZUdVvm9fyL7E",
  "key17": "2fajojCovKEHFRf3RwWxUAuKKtUx8b1eTYhRBXgzmgwgYGgxWK4HoEH2c1RLXTezjjpxCGAWzVHmjjfQ7tDioiB8",
  "key18": "34JYohxMMHk2PjfTf1c2Gw9z24FwRQ7ZGZaAcHPagvQHqUNp6CbjjCqmDh79o6G4dufw59WDy9pHcKk26uLQz3Y7",
  "key19": "4Psz25msG2Y2qyoHbTmoGPusFe3UrsD9hrxvaNrdw47wQaeFuSTaYt6s19iJNgSrsTDPspz8NhGP1niYPjBZMu3A",
  "key20": "23oQBv4QFyk4TSBDiC9yaM7WjymKtWeeihP11V6SsCPyWFLD69fuix8ccPVTPhVxesUR5bPWsUWt7CErb7KDrpVz",
  "key21": "4GP8LRHVJ4BsW7LYcdckiKL1cqwaiE38D7GRraFqoQ2QZKTGGRSCG8xrkxbxDc4V9kRuQAKkmgyT9zk9Hak6mPq3",
  "key22": "554JbW59hxbELfBF9qbGo1ht8YhTwPLHe1fqfnfmiWJXtnjNRZu1QCc5e5pYT4K31WDc1tyvhSBDCsVrfsUkvdRX",
  "key23": "5BjKwHXDpVKJitgyTkeHK9spqPXGKu6c8GbM7rLMKtFVBi9zS6SfTtvaJH4xUvEuL5dZPrt7XFRBaEUvBveuTr7q",
  "key24": "5sQcnWVbTLtJVPkWYsDAV3uNmuWVERaqxy8SacPZW4KY8GKZpRGskEjnRYTo35qc7tD5ngC5UL6abhM4RHYKy9Q5",
  "key25": "4HPMzP6erdDrVVRyJzgHYRnAZQqiYSCpv9WDWWKxqZm6nSWMnvgpw44hdnGZg7Y5xjYXAAbHcLRU9ncbMvft5WdD",
  "key26": "4iHaEKk64rJ6G5iKAooTmPoNXwQg1tYmzNSvUAm5FKkJQ378hVYgLVdH8jzWichBSHCXojB44jvLab5CYwv54Ekj",
  "key27": "3BNapDVecyCn7gZiW28rqG3F51Vf1CpG3UqaLXbfrvfB5YGQMwBLQoM5PTBw8W85AmvpP3L7zoYpYED3PofufNbv",
  "key28": "2bZVAjnQ9u7kdinh7nAm7UpDDXbpwVexYT792cXc1xcnoYYMawHsdGiCm71GK3WiBG9hWtKrN8SxTuVP4JFCuyWk",
  "key29": "26rZhzw7fEK8Z8LSdCXbWsqGZs4kuM5AXMDgxp6ErFsUibmapaMDPAs4LpLLy956eKmicayJWBjM5ihEsJEfuyzH",
  "key30": "5YUJSvwmqZifT6waukexmgJP4Y7ak35PQR5jHG7xfBrBcZEWXghzQtbuegPusHu38NrBB7ZP9zB5HWukXZ9y76yF",
  "key31": "6iLJch7PFzJCEj4thyFrykhpskgU9fj9y7h6uAQKyj2Er6qr3NVvW17nAcVd8wzwiGE2p9aGW8WJpX2xM4bNUmj",
  "key32": "24bkgk83sKiR47EHQvBChQDqeUELmUYFvepPSNKUpe4nko3mX56HkgZpMDtz9sSVVThcnwHbMNqFZUETCc7a4yFZ",
  "key33": "2BnkQW6TyiezqVnWLRhMwKWkp1TxKmh699mrjSoF6haY4a7yZMjPimwkxChH8RjGK84G8yhSLY5m2ZKyXGeFAxY4"
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
