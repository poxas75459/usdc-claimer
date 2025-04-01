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
    "3maLb7pry4HBqUsNV47g3z89y16w2F6ZbgZ73QFQY7ixaeVyuzxM2cnxCf9dyu5ifLFiSgZFX1SDCKuHQpNKAXUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49nGvEcuEwsfLBQcnnCjinnEuGJXd5CaEMKg6bCS4PYqT36vfinMCawyhYMWYszmb3cxA6QH2mjaecbEjtbthN2q",
  "key1": "65YofFiDFgSaf6eAEEYGcdi8tV8xreD6dXqYAcfGC3AJULpnCKjqM9KHAWSpBRQmZKB8icYP4rrCcbjmdcHyhjf4",
  "key2": "5REdbqN36jTfgs4br9jrwVHwo5ty3h5BWuXYrBRksrqxgFTvhgZ95a4bZp7rwjGMenN1GB7wqs6s8fJm4srmo2Ff",
  "key3": "Z2eoFuz89tENwAdF3JUhS7Yw7Cd5YSNqzStVAhstqQRDmTzatUTn9Tb8qoHnvr7MJULYiys4TyvRwk85wMmbVhJ",
  "key4": "1ZWEBpWbfTikHkqLa1iKSnam2XoHGhGoBwnR1W32tH2iPjmzn9QXTKjQuxGxfYD41qdyGp8HNpwMthWWh3Kfvdo",
  "key5": "4bhTBCJ4bWb32UMty7dSAmuW2UZUA8Whox4GjXmpauKzzRBnnKiJdtV6n5JwHoWfQY1e8HcwGf2eGXyzXnGTEkpJ",
  "key6": "4iYxTXStrizqk4NmmndCEGcJka5vnsKAo2hq16dk4jubmU8NwoJcyo5eFXwF19wLKQdjawtL8kzSP7HYqNSz8SHj",
  "key7": "4itWDWoK6hHkVxFEv5vi4M3P7x2iYCQfVveGMmhhMEoGvhAciagmy7UkMTAbcx6Z3KpbiMAMki9uETfd5Dx1XTaf",
  "key8": "5sjLwxWT1M867SDarCPrKc1D1MYsw1J8kSW1pRkxeMTpwYeip8U3XZxWohR6nYYuvHirbTDkzcGzrWME7VPaMPtJ",
  "key9": "ryWFVL5iTQa98MbEXY2XaRHD1DRfjTcqSvTh1qn7b4hr5fmPxaG4p7i1borRSXUk21UcDx5qp1XvQCwEsn91Srj",
  "key10": "4PkXK346GsUfQKGtYv45NksvB3Uyzt6bBz3QJeT6K31RAhxHEti37YeRgFNStHVfaad1dwbq7m4ZBNgkQvVDUFsg",
  "key11": "5yxkDCrGkZxdMtDfBFi2MFPXEaz6ZNqigqc6398Yse8iES5L96ZMzQBdgFGpDMhz7FvSyzYJVRJwF46RMzrzPgPA",
  "key12": "5EhGJ4R7MPgwihLv6zgYKpWdWDhGRzWQ8FhMJGGz5Smo32L1GMyWEaUdHTLZS6LB6TFvUYWDip7uT5DoXaRiWUg3",
  "key13": "5cPEdAVE3LVjnK4ZKQ4xYM7kkSzpGuVzmdd3skFWSZqp1efWeQCxKLLvhL2jahp5DxMXupQ18Y7fVGAbYFFrYART",
  "key14": "52DxjGs6zZDCBqon9oRw7prFa41sbX1KRaUXwfASPBCaMZMgiTSsKqm6eL14cPcJhbxHqR7mRphDE8cNco1gg4re",
  "key15": "31smdoHn6Q2H1xAXoNXHHyydQdLW9vMWgYNfsv4kTtMv7RvD4EkyiKJD48KkGyTibyyhCh7CJT1dbYJxB5WZT953",
  "key16": "2ETufhvssRu8rmxduvPa4c3BeiPCz1ThGc8MYHAJoR8CiRY3wApP87fYajG9jG2uyQMH6zuVwnwRqcWzZQqZ22W3",
  "key17": "5LZBNCddxrKfPB1k7G18sAA4rVUwQCCKGiwnUTxiMxj3EXtw8E9obyTGafgJGkpyU1RSTg71zGFuhuubtJR1RYT7",
  "key18": "33vH7ubPfDh19k6v6hh9q2eWSZqsqDWKf4a1gCMSBHXatUuyYyFDRnLa1cYMNEdeHgpaXRnhCY5sAbBgexzEspg",
  "key19": "51o8GkksVsubaEaZBrZW9acqdHkmxs1aRFkqZv7mnzBhukZ7GJcXcwvk4i8FeLi2Yna5KAjNXP9UsF34ZfBaBgmr",
  "key20": "sYGfx9V64c9EKcW2ica5hnYoM3K2fHpkf9DdpqPaS9nEA2mA5Vqqv2BRTvTMoEWkgD1JiTxT9a82ZKrvz8ZD5ER",
  "key21": "42ANeZT75aJCZhPJnWnZMuacg9AR6ry9C2xk43kTLQyV5R7JM1C6VNim9S5P99MTcZdtLWaxz3EZZfWdEKG8fFRz",
  "key22": "33VCaneYKyLHrLfRKo6ULoKfF8Laj4u2pcsCLeUF5Jstkkso4hXfcj2yFBWcGgwiY4AEmevLev6nCYXTqFUSpJow",
  "key23": "5GYwrUXUb5VRRxdBFGLWdYev3w1vxHD82Fq8yaig86cgmjVmGJB5F6SujswgYDsNBWNU6L3iZjJ2gY3Rn5Jg3sD7",
  "key24": "4zokNFmozHQeWqnKUMvtgvUKQtjkjfxj7Uyneb2XNuG2YJ6dmvCC8BxUByWGVgWQYz4urTrsWRhERggyCHmvU5QX",
  "key25": "1nWHkQpChSk31yqtdYNEy71b94pbLKETTWTRCG6eaQkmYUoXsbmNGNWgpMjk3wCWmk9WZoitCcMJHKdpPp7oG3s",
  "key26": "4txFnQP3MRJbkiYFnSDrxzAPLcFGsvDJQo6zQCPFTms87DhWM3chrL8HTDUQA2txa5vng4tKKWiiS1tySXGA9tNg",
  "key27": "5f1UoDHgoPTV2iX6EKe8znjYK56Q12CKdxwx6CNk3C7fYfzBpcEyVNMA1vr3cxbdHzEAs1N25wJwwXhnhcHvyuVy",
  "key28": "3Du8H8GUUgScUGEcxCUmhuTfanPgkwkkxreWKEkFANPwXAJbDbcTLhog267KGYTowp8CD1PLtR5g7BwbGpHnvoug",
  "key29": "4qLLohCYYDK8HabEDh9uuCo2ZwMMi1a2ZCbZu1QTRH2c2UHi3it26LaFUHxvbs28CJdofWcz5Dxk5AkyYRiXfAmH",
  "key30": "43aS76pRwHf8czKL6Ke6yPWZ7A68xs5Vs5osstQQFyvfHrmSNjgykdbGJPscK64ssH5iQZxgn3N4kK9QJpJU4346",
  "key31": "4kPcZyYzxBKgQ2fuNwkcUBohVJDkkbh7e8VyVezMHxW2LB9ibM6Zg3PXtR7968CumnAj7DY25BtLjVt3yk7ikixd",
  "key32": "42GDdpA8uEHhHZ639HTavcJ11sLmiTGSR11K579tHUbuphB1x73fzH7XGWnqDMYux9HoPhh7Rg53FpYQHQy225ct"
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
