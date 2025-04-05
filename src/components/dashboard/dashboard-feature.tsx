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
    "ENBmhRT8FKXTsESCZ8th6DFAu5JPp3mFDAMieGv93LX5FKVKhNAMJnJL5Ka6PN7pYB6cpsDWCwquzosiqsaBKGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMi7sfmDEV7x6bmh3irhawhWGc8uKZizfn5F5WFqcvWkmHr3D19ybNqcdUKL1KwS5f9bHii3yvmgtv693Xc3cZ1",
  "key1": "4ht1CYU1LvRt1HJEfzARA71BXN5Ry3JXrL4PFuZLwMCpMggVzgpdtvrtLYRhJqBUUisvV5ymGFNV8ZrPGZCEdYxi",
  "key2": "5LSFt6xi6Keksg586oxV1LJpGLjG2f5LKgCoYMf76JfZs2BHu8CTgS8koDbZFd2zpChUjkRHreqmugipz4FExQqW",
  "key3": "9YdctPwUsqofBpx31ivKGVsXnH1ZvAKvnkiktj4ndAg3b3WKQQZCqqfg5YAkgmzwJguYkheLM8hQb6CaTxWJp4S",
  "key4": "5bdbi42jbzB1mrkqCA2FhhPNpaYK66PETmeW8KDrYqd1dmEeYRX3J964yrp4FfEMvEiMd7vLeyhgQGiVSNsZrKx5",
  "key5": "nSS5MmJwKUMtUtCy4xsqaZSDYvjiUWPtjm7PC2VPrHkUWvVojYbDhSghZ3GJ8WUE9qYKS3B8L1t3PP1cRyvaUjL",
  "key6": "ffGQyxLNrGxZoyPZTUQtuL1FYZXe35hXb8TbNqNtZ7cBPmTyJDmfnf4mjqujTWpQEmbaHSJrpYWes2j55CqYXfk",
  "key7": "2en2gdaqXqxcb7PZkVGYdcUf9zaFYa6xmWDwBdjdw9n4wewG3T2manujoKuD1dycdETAAmggj6M5JW1eAdHYJKKK",
  "key8": "2Fsfcdyuq2FYxwR4xzqHjvASN7cxV4ZNy3hqzzEXXQcd6Mc2mMjzSJy5MGB152bnpsPnSYJLpG5Tz9dFeSDrTjnq",
  "key9": "67bVmfsb99gv1e6GoYmSAUNSTW6x2p9k7QYAjHLJ1ks7PmJjBQovsakaFgRAf3mLeXTkH2YDSoqnnR5twu3jo5Pi",
  "key10": "4Wp38FRoJoZxHDuSrD2n9xDyM5DMKpBPQ3YcW2jW1kQVsdKdoeg2whss5ETFLtbC1nPtro7tmhuwkaH7hfunBZKs",
  "key11": "31oPuEjaLDzGP3hvxmnShBdRwwhjcSL4VsDE5Bz2PvJvaVHaEireyd6byt12gqWwTdDiqsPa8v15QTUVSVFr8Ggo",
  "key12": "5KBMJ99h44VgHYfpm8oxauLGwRH8pWex3K88b8jzuSY9pDY8KPMkjVq5w2vdTRUknUPW9QVqXXveqirowNt5y6x1",
  "key13": "3N27P4D2NBHH3tCTu6nYzYbkbxWjq4dMbCJh357rn6RBoJjj89aN6yDqg5VT6zEfWN8f9WQZuVeJeNLq7vhZ4ZZr",
  "key14": "65PtAee73bAkRCn4K7vBXcKiMJZZ7XcN989bMU5PhbVDkBoPSi1notaMKf83u2FW3b6zpjbwpWBMJjEejTd3upny",
  "key15": "HE4oK4Mg8Gbq1Pk4xVvK3ro3GvF1g3EeFWacd61zsnXztCoZ7DZHei46qAv9KBhEH4WuY9Nuz1shtRcYapJHwdQ",
  "key16": "4Tmk9LAe7vyvTMCWB7PCAqgZq1oXs7M3UqPj1iJPwsx6JMpRDZ6ZRZSaukxA9jWqdmUydgieLG681RN8xDh8SXZN",
  "key17": "4EdSi6QC6Ybc4BuauAzzc3GZkg7YgndwLh8FRidTe5nny1qKAXaQbWSE7LkhGZDVFjc6JCi3bAUCzCR7kJzYPAsf",
  "key18": "vjb1x3JoTHvSHE99L9CaRFHPPC16z3vWr1Z9pQMGSkVVsKL6ju7EJtRTf36Xwa5k7NLAX5t1zns4RMnFtHvojgA",
  "key19": "53C8YVArNyxDtXbRqMxt1ZdhJFAVWircmGQZJVUKmvbCnarKqHP4x1K6bp2paLcTu9sJLdoKqB5VEi63xJaoekHR",
  "key20": "3pzfCRXaQiskU9oKfPkvD9CaaZgww3pBS3iFbXnGbmdYYfzpfbGZFSQ7Hwf8sHmMdFY42Mh3mSq2q2JDpW4BU7MT",
  "key21": "2vYK1coBtisWTQAomoVF6Az99cyc64bkG3RH53cudaTmZgRq2e7LQV13XHXsosjt3E3B9Zwj3yBBsUTpb25k9xqz",
  "key22": "LXMF8nViDmfQDMczZAZVBBTxssjiwJdy7c7GQyoUwjTuvR4EvT3siPXrdeB7dXBQtVe7cYtj1TXwP2B4SJbyEyu",
  "key23": "4FPqCnCF5jVEDgWLAWmiNAVgvXEjCuNm3mpRfy5odFsRJAC2xjdZ7p8hRWf3e7AmApe3LLE7AY16g8Gc4g8T7oL7",
  "key24": "4i8KbMPkzszJgkof29JjsdSNQw9bKCqKEnuZQRuu5QYKDu1Sboz2UEWKZTyHumEdtFXbQFJetYvQ9TwPArEwcrdj",
  "key25": "3zb9ufr9P7pEMNKuXHK2uwfNYNeNfbSvyGbwEF9MDciD2uui3HHv5cbwfGiHpZJc3S4vAY64cFvb6hL1J7J3dv5Q",
  "key26": "n44dwFouMDxMr5R4NTeRyNQt7hCQbptCc2JbRckmNSsJU8GgN7GzMXkXFpXeDvSvTRb1Ks5PgAjH2967GxgxLvC",
  "key27": "2Q6Zt6KJLkBX8DqJmxC3rUbfVSbsJEwQhCJTGgp7FtLLuKDQRYYapYieRNidvKPJ27vjUqXYuzMNuXTVPip4CBD4",
  "key28": "3LZZnfarki5fdV8pgkNGm1qV4DXAFC7ewbyogTALKT7ZyZGxe5ZQdjjAfLnRSGoJzjZk74cpd4QUBvGSxn6Vx4U1",
  "key29": "37vxZ7v7aZyYiEuGiyexVSdtZYFP1fUMHZmtaxMYRsPoGjEzfkfFFm21s85FkH5q2yfLViCxeQjfgPiZFufrvq9H",
  "key30": "24rG7Nh7ANgfSxkyY8tZYuV39MhnA5nZm7V6nvqvyTcLbz61rPehqHHPsNbDDtJWDbRziBBNqBPHMrVZXrPxVPkn",
  "key31": "3Reco9YjuVn4CDjiaYBkATbVMLsA1WGb1ZvE54YRjZKzrRQxRMqdABsyRW6ixtAiFcPzAja1MibqKNSkkrH6ZwmW",
  "key32": "jxKbM2fGhisozZ6PwRBk6H3ytUwok6gJLJ5RpcciMS1PwSRz38JhfecgbZ9QMLEZrF6i841fqUuXAAQstdji8Fp",
  "key33": "3qGYGSiNBPQyRCc8mem8s7HrrxTuZMTYw4SXrgvtzr2pJqdXUqaikN3JswZ3HeW6bzLTd7UgWjK8G1hLEjAkKLhG",
  "key34": "5Gt25qWvEhYAtCJCegMbn6cEEbSmNjLvEVNeepeHqPmZV7kJwowAFdZNs3DcS8ZmH6GjP5nQNPr1HVqbyvmTsWX",
  "key35": "DL234qE7iMAD7DigZi13zkw6kn2XMym915czH7a48JviDNsQARP1awKLaVuwsQUsWgnJRW6ZqN1eUCSPWJUGdQX",
  "key36": "65dLAQHCbx1ANyLpSGApCmhPBH5WkT87YbSqUgwvhiKjLVS6pJYRVrk7u5CJ6sT9C2rpAtYT8AmidbmUoRn1m1yg",
  "key37": "2Ruu8zJZkK1S15wjw3wtJM5MgGzLQkqCDihHQppsx2HdhXLQiYEVzu3ZVYjME7woQBMVeAxDu6n18Bmr88qqVaMW"
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
