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
    "4eitjUYYs3QALycUz6YK9Vcbb6ZGnisBJdhQsEz3Z6HmdbTDNcX4B5UJJoFDzNgubvh2VGoCUDsuWEXhvkYWiPeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oMM76C8djLCiwhPU42xoFUstzCUuwboxYjfAVsJ2Kv1BCzqp8o2eg5HHjcQ3wRKiEbam9415uK6TdaoWfLiJHz7",
  "key1": "5yrEAS3JeZ26inA1NYvMba6vgZqsbHtm8ppoMELewuZna9Zyko6tqG5yDfWePm7fPfEKTCFZvuadk1R22Pv4Hs4r",
  "key2": "3gV2sb4ZLgWDJQoXXN2DhQ3GrjUX1xyDdNGaH3GK5DxEd8H8SXNqSon83NRTquoEFZCJYvTHEd7cDArXWY1PP1jg",
  "key3": "245pFbYTzFkZ4o1gGxt1ZC2TAf8TmuxmKfXeCCqhSqExLDEqHSZUY1ob7jbdeDEnvSqhBQtKRvFaJ56wuccdNtST",
  "key4": "4sBPfXCXDVspb6Cph8pg8vvPuKEHcZyLaLqtbM2yks8Hweyx589psX4pkL8KPEucYjhrYKiYJhGSmT9VnoCiUb22",
  "key5": "3VG4qwKdZnpt2dVbudkDxrYMxCMgZMTP4UboKJbzo3rYsN4nZEqJLh4h6Ptx8rVf2vxW6m836uS5oyp4z8g6jqpz",
  "key6": "3WbgGkDGYYcRZMwWYsirhyoWejCEJMc2h72WgskF6QeGsE9EWZrszxYZAsH89bh8bHMDuYZjEKG7TmYRpTdw577e",
  "key7": "64JRS9ZpJNhDSn3PM54akZ4UJwSQiGbkmKX7Fwa9FZ5Rd6SBqVeWdMhH5FADrhfDxrQxuXtMEUfxnyMA1VFuxhXd",
  "key8": "3oE1z9jfwof11cBqC3kQqzsEThbCZDrj3obx7dUbaMQ4PwF6kZWt52cQWC7HqXHffVwdzq2LeCtTZYq735G3Hp64",
  "key9": "CRYxQz7Wkfr2R7h9Q75D1vDiMVFkWDF91bDzMnmqFidituhBebzCEDAdtnRKFTT8ZY39fEnpjPpwpHNiPH5B6Nz",
  "key10": "bsgT4xzcBkb1v1QcU4BrajqayEvEZ7hFqRDdzMqBDnuYc5M2DZdahidTnPMdaJhDiQfGyBGtYAiNjYYEA6FYeHu",
  "key11": "4YLXPLw4LTfUf2YCoHZ4Zpmui9q3e7E68Mp8PPb3yP5gMgHaVYVRJzkGJMcTA3ToAeZUwpxSGELgBuZ9RaU16fvS",
  "key12": "4ZFHzZC3HBzTisYgV9zxpVJHYUWt3Zbe9GMT2LZRVVynXs2yFYQJwzhfbSwfY6K39Cvp7chZDw8aWe6tJKb1YgNu",
  "key13": "2omZi2nzK1vN2GBS92CSkGtMd2mLcy2NQqEbMsJbZjR5HgR9HVhwHu5yh2PN5wdrNiQoc2NUaUvzoHD7DpkNY6iy",
  "key14": "2EcZbhLT3qDqHFyuBckRtCtWvayp4yQ3RHRpt5Wc1eHG8iopwSNZjGG7nXtPCBmFyCnCXEK2yf3swdXrsr1VJgSW",
  "key15": "3zRpf6Q9k5mtSbeJEPQqjo5dbZxYv4x2HDkenq8wG1QfHDiVthcCyJW6n7DgeYEaPnKbM7UdQQg9dMGZsTdje4VV",
  "key16": "52fMzJtzkHLPvGd66sPUB8DvqXzAyVJ3zSq2pdTiBc5VAwQmwvcvDXZhPZLCBTUXkb5CNhs1nNvCTP4fhGSoQESQ",
  "key17": "57CHBAH4buqnT6NZ2jpFKspZWTeZ8oESy8Zxt4ncx246gxaqNvKFqCUFLbuBLJYxHgXbt8TnYSvCrdHinicX1rmc",
  "key18": "5KDido2L5EEAdpjHuGSN7hTxzg3KDxHzRgqaDewfgfgmdftTd1fCWmvdNQav31TBxqqEL392pg4QVLeDQfTUFEPn",
  "key19": "3X1Dpc5cr4XVM3qAAP2oyY5UvVcgUD8bV7qPA7nv4ekx6ko9nwtatSsL2uAH7MKcRfUVB2McgAHxWEeNx5zjHrXt",
  "key20": "2dTQ8Z1WVXQy8a2kkQqXASHyrttkcRjSccBEXsHFVLYgjzrhhXBrvjdEWnvXKJHe4Zb37BGNwnAirURnMHJZeEBW",
  "key21": "3FA1Y4yZjn66YC5RjPBRWRUZSnVG876FrQiEAFwkSdaNCQHcvzG42QKtSVh6z52MCbHnMgVbw1NUc45MuqhhBXg",
  "key22": "52DXfh4E6vJywuCqyuAGWP75Goi8uDut6xYE1kREsV3hW365xxPXhTBaBwJN31BZNS4SrjhPaoqkpPjJPQzZKUBQ",
  "key23": "48YbQJNuF18YztdyKEPUV5LMbZgq1V6GAJg8AMZNCD87xWL6MEK18VP3NHLQGWzSuhjucUfdY7BZTgjc6GJKVNVq",
  "key24": "3bMuptm5RiENwRpEB2yLTPxCfmdqMft1NSm5JMQ1KqfjUQoXhCGWhUuCWVJ9KF5TdHb3VgxhtjF1KAXLuZiw2j7a",
  "key25": "5ZityUNVGmXAysNVjZvAAyFV49AQ9pXpyPegjQfJbqSvdQUNebpDp74zWhDm9BV6jixLRB6yZgPoZPXuZUf2V8fy",
  "key26": "2hSJtam8HAQG4k8qkZRvDxe7ZE86YnpEbWMG42uhBFGFUABFA1tYQNjoBoWoV1LzUsVAoFhSxPNpTARcVGbQnSkS"
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
