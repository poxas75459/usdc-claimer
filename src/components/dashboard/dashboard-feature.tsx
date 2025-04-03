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
    "2a7xjbinq45DKfGwwypsfdWV4NyP3fBwrUExhg6ZzS7u9Y7Aeq9S5inJ7Jh4uwLqQXJdCy3bXYBCwzda6q1wTYfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iErDg5X4Bmt6FNd3Hg3PutKRU3LhG3WVHyYUsMPEJRy4scp7QkNDVs4bU7z7nfuvgA2JKzskpCWSYehbD3Lep4",
  "key1": "3fgBegMg5LMJfBPBECkQHu5dcyeTEJFSr2NxqFi62KmSizLWD6eAw77ABrSPRDDDBhm8w37BetJ2vdXfPGQYbfq2",
  "key2": "3ZiZsvpPWPEwLCacd31HkuwJq4NKi3mBoh4ChAyxdDBDNREz32NoFBmEGQatLwWeZ7eGs8Nk4uWLgkd5QqSLXJgc",
  "key3": "64ktuPXpdD17iUaC5VegMA3Dtp622CPwyDcGb99u1NBr7rbFzxCTegvavkThpqsE9KeWzsqQ7vaCcAUUPLUbmCtj",
  "key4": "3o5xviG9r9MaEvP6jXc284rK6UPK2ZkrsFzEG9AAbyjjdgAqXTLj11WVrY5VDc2PU58e1cSmWo6Uar1c3FsMwTWs",
  "key5": "66aLAFRnYAVAJP8RxeXrJZVVeyTzi38GSy2GpxPg4iGTh45cL6FKmURbp8mFpdSrS4xMdTd4subyUiiEQTJTvMU9",
  "key6": "5hDPU2V3VoeYH4npZqbb48tJikMxGmrM2erKMcBy3P3kmfwLiwQiVt5sM3Pin5napvvcU8fDGoptkJaR62smjmuC",
  "key7": "4uH7LqvhchBrSCa47Ufde1fHeXaciwiRkR35Ee8pUcQMxQefNLbkPjEqhw8dHQ6XG4jnNmdqsUBDAtnrbid6cAwK",
  "key8": "EqctfRRbtbxtbYc81MyZGPzYxMkrbNz3j32oSKFZzUWMwd76c86eoHqQsnwNDnGjiXHAQhQUBZScXcqWP5svtzt",
  "key9": "5keWB5NhDqvWR4H58afGpH3Gq5XZrPDcnaP4SPtVcQhnvMCNMAKMWJnH3NRERa2M8X1CV9htTrwDJBdSxDUSFSRQ",
  "key10": "627jPNfs8aGvUvXuz4QPYC15ei4NQLUqZVEXsquVfnqjRF8KV3Xex17q7cMbUq6sfK4USKfagVNmwuQDpwuuKGPJ",
  "key11": "4YVTee2SrXDNAx3ddokgGQmmxNvA9eJyAgy7V8fnG5AoHaCu28SWHHgmuf7KuRFGvqyMiWmXKySgo47ZN7xrjrty",
  "key12": "36aMeVkVfwaHCkpnk4HESsajcJYRUN9LDY2xr43gqAzMFUXd5F37VqkL7ARD83v6vpb4YPBZUqog72sbCoWLnyzz",
  "key13": "5wBQajQPiP3kn4qpvi7ayJttf6LxDit9FiKB4GREAT79mDAjLS2JF5Q5jWRHXYbkAXfpsJn2GUnkTy1sJYDYPakJ",
  "key14": "4TnNUaonHL64woqF9XbDgi4UGqQokHxy2SUZLBC1nvjtuDqJLiXysE3UbXHRiaCH3AAFCcx5RFejKQouHvBjyBnV",
  "key15": "3VjygYWsFkBVXst79vhJyRFYVjR3o26nx9Kc9szwYWRGHyLq5UrP3zZA9z6is91XgCcphUFH9AEJ1Jd9DF3mucCo",
  "key16": "39gtYhtbCBwn9cmBma2fhRrgAY5xvneTvQy7Vf5vTqrCdjtB9ZFSiVidU8Qh6xMBoV7z9tJbytDKSaoA8u5sAH19",
  "key17": "61hPiiUqrHok5KAvBK5Tgrz2aMVi5YeKLByVTWvM91eg5k6xSwsUPUUzS8mPiAZNnD4nn9ZL6DDtBWjfcBaP4vzg",
  "key18": "3doweLaXFgSSKRRWQYJUfvpjXR21Fp9U9qmtfiEMm19cN2ye9F1XTgJiUmVmC6tCu2zVwuH7QG7zs4DymdA6JRoU",
  "key19": "2NDoV8AteVVNyoB2ZxCfKPJwEWnoNuoc4r9azDQetQYrGU2x8wCLS85jzgGMptGMAijHZTy1nywCBSpf3Qh39u3J",
  "key20": "29muGSG5f6jwFecA9TUiDni4zgjkpUgXnHMPjhH3vtr5XN9rPpuLazTBLc6dNhXL1nwmERqNaJCNWK5dAdhA2owx",
  "key21": "4azrMw3cZeHfc4fnnaKqdPCL5hCPQoSiuxcafX19n3zxnQZYwa7EkU6g1ddaX6ZT6tn1MbrbWLZopzP2tDaxERb2",
  "key22": "3JBUz4bfBySzh4Z8N3JxsbmnYPLcGsm8nmREhKy7Lx2J2yPhmVzWfMmu7GjbD2u88e93JLbqcmtTtQzdnJURHL7K",
  "key23": "5gGYuLWnY1G5eMsYJuptA3AzcFnCHkj97EuSujh5VAdckH522SiGACwDFEEzgMmExbvdH4yqLu5acnJDSpp3nEDS",
  "key24": "KKPpkYBdMWHtpmwUFhQvBE5qWiquq9yTNGs49oB3MG1bGnziETms6ViNMTxJSmViyX65t1SbmugoJchgo69w5NS",
  "key25": "5bsnBELQ7ysGGq8FR5fkT1v4S9ND4mNCjWEKj5QnrWzsVy9NmB53cQRS8EfvaUhb4zThM5FSkuL6wGo6nnAkaV7Q",
  "key26": "2CRxLm4QGV1fdiBxUBywecmyaeCCjp7aEG2K1PLeafKpH8JBNiD2CnUi8K4KicqhepLhXVeASbxaJkaiPqyxZZ7z",
  "key27": "gHNvkRFiZtTxWGca1b4gBfpGthx4RPEx9auGrV8Zi61y6RVpTmAYUKx45deVzFmMPdFFY1hWoR5pFWasdXo4Lnh",
  "key28": "3W8VHZ1ce48amFaKNjbXfGLFycpS5gNnKHSUBTrUpf63hhCiPAiHZpArq1QRCUmoeyh3m4yAZimqMrmDu456JNdu",
  "key29": "4fULvz9xGpPvvWVc4xxBzVgYjau9Ut5DcpHh7SqropX9i7dP3iH3gGg372jULgoaHiHpXAFoaEVq5p1UzDVG7qR2",
  "key30": "4b5uyFvVe9rhQGH8F9WdbMjhnKjxBtDKC7eKLrovpFbUgqRQFuVPZKH5hvXGPm67hh1Kfr7SexiRxJVauSJfY5et"
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
