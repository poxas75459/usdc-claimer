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
    "2ApSdytRrxwhYLA8fZGrhH9KwwDcFSU5Dq4JztCeecHPWv5WAfvLyWC7Y9A8Qek2jBS5VFk5AiZ7WqMbpp9pJVma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrVZZJcq1518BBEFXBzqC8YVdHmWffvLdKAMepAf1hsJ6KeQgnDxsDi3k3tMNvbwjQ1ATFwYjHBowAzf1zc1sKe",
  "key1": "35v2WbtdP2mYrW8ebZg1K3nmcFS2QJTrRXeKBYYMAnH2oFvchPiyXNnnKgTE5RCeRiK32YJEXvHPzxP3qF83ctvq",
  "key2": "49uGfk4f2DtyGoeM8djE3VSNwsCLD6JCKy9Z6jruVzJRb2Dm2tAeuqYXpZoamZkmA4ygmpabcAGKC7oEyHRLbxVF",
  "key3": "44uJrW5mrB1oQWg98KyxnDTkZeGYcogH3xM8RdWMnc4W9mKtYZpeCE7jr2prCEkkn1cXBPiJCpmNdnmq6xCurxya",
  "key4": "2YUtgeNeV72EFGEzQSZ9TKdNA1eJ1iN9Ls6TBUco16FkQSo9YkFVqzjQwshzfVAkgiSAFUHaJRFbSPxYyV3cdGrd",
  "key5": "4WPi8pUyG142Sgf5rxjCNAHWEwXxdCU2TLjCFV7KQiP9GJ5oso6FskgnZzkDmVLPWpGCWR9WyEuCTGhVg23CAzyB",
  "key6": "5Gz4dn1MMNoEEkxrwVhGjDgZJmmhWghAxnLqt37UmQb58uSiYmUwQPosrGVwo3rPyAWczagSadXAzXZGzSKRxaSD",
  "key7": "bZEb6STqwd12dLzTxvurgK2cgFaaEW4nKnR53cvMMs7GgQBUzdVp96FdEjUhXkA23VMaN9Xfvx45LVtrZ4nVpqN",
  "key8": "e51yrNDECTUHoBaAxVt6GbkCnsNaSWMJMQuog34MgXgTmogKbMva8KMQy6yxZVWMYVWeP9SXwF57YapP1HnvxK1",
  "key9": "5vZ2akRcAcFYMAyahSTdCjy8GQiGNHV4pcSU4iMsiLSwohgbMVqmW4kDgmCL3ZT9BY2G1Ctitzpor56mMXU6vte5",
  "key10": "edoD3K2YKWmq53JBcT5wXfQh1gyPu3pHh7UEX9xDVNGiBLnZ22D15AtKUJgvzAWg6D5aBZQ8Aoygrq8gCYirXLq",
  "key11": "291uxrbfTpoCJfLfKZrdWP8aprqs9EeosPWZygQAw4otnfoxqd6D2awrLYbaNQ1mhcsnJC5SjhbQhATgEBFg1vL7",
  "key12": "5ZmWBoCCryrywPtZFCWnTwvv3w7hcqm7c2Yp997vt9wmWE6Zmx5w2BQxvN8sPJ9rpYrjypEanuYidov3SrQZtJ5M",
  "key13": "3fAABqqzBr583iGW4ZjdxegPzT8toc8x7R7ejP7bPmd396Yh5RZiUA5KQaajcGsYfom8b2pZjajT6vvWJQzQmG4p",
  "key14": "3aQ1Eod2fGiF4AWa7TAH5ea1YubXuUqTxSY3Rob3WAqo9BDmTmktdMFVeSaghJJJPs6ZeaV53h79SYaA7PGUW2i3",
  "key15": "4ZcHBk9qFFppuk6gWyWdZb99iy8tehpYhAxAHTEEQHw96zu7DaQnaX3fbgH4imudBTa4jhZ2YK9yQRgSi9EoU6WU",
  "key16": "2ZkHjahRd3Gucb7L68KrxUiEHpQY2XpZe6xsLkX9fdw6pX6HajBu8diGEY5iGCnKMXcLCXFLoxxBjMW6mLgvEwQz",
  "key17": "4y9JT2Doc7EFfRdrVFDYBfB3XAg3NWxjNMfAAuavhYfgcQrALruzAfy1zQcCgBkheNcoS93RY1v9vjJnsF7hs9YK",
  "key18": "2cq35SrQ9RxBsi5TfV5WXT6LAzhnYcvWtAtH9hoKdz5VNj2FLvg2Fo46UinUuS4mRsSTpnYRTj3xxZRoMBydGp5V",
  "key19": "4fgWE1Edm2MpWovCA95VeSZS8Kn4oFRDpmMzatoKrLDsJZpGZ1DT8XDdjngxUQR69LAmFU5QcPgwG18gAumJnCm5",
  "key20": "4zqPker6wDHbpQ5mi9R69ign6F84sABacypDctHgtsVe19EYg835BpHesxLVerE4icJoWxhsZwTjcEgEqqNCHtRa",
  "key21": "qbpk18Gf8nkaXYUyK5cxqdXczhbNvzYPz1Vu8rjfgryQ8vfBsaDdExNeoZVw1UFAm1F5R1AZLwmPSHSomTtrzAg",
  "key22": "3bzfRH45WZcsbHia3iGAuHSpyz4PNyNdE9mXLovKVSB26STdbkEakqhnPprKLbP5d7wwv9K94zWLsT1JZpcVX4iZ",
  "key23": "2FQtXPWzqLrrg8VJPtN11Q5ujLbzoF7eN55JNUyGZ8dXfXanNWR79hXzH9QADW1khSVPyATFXfRdwdpr1Y4hCc8f",
  "key24": "3tmXdRfDUz3GWkHGLzSYx3VZWtcHqv3ejfJb7bR2Y17Psxjatk2aF49856WiUuDk9M5YtHQ5LBM7Ti314CMt78Gv",
  "key25": "75UmuoSdyufuNghsu4koH8PyrfBBMXqqiMxhcfQjBF8qQysaazcZd6viFCAPiMZodzeE7Sa9ShCzN8wTL5FD8Zt",
  "key26": "JRPRthi7bJgSDj4ivTibkzQQhFMyNcFzP7tZFbypbSJ294xtajAEjhYXVoPyubbUgXhbJzrteAzwHjSK7K42c8H",
  "key27": "3AyRFUuhmhFnLvmzaG5sZ2naE8wD1kootek93rC1You3W8nKyUqGgwQt2zqLmVDgQpVLKwTMBniY6fno9e3Jhh2Z",
  "key28": "2NfbLzkss6oTT68LEx8K7vWbLVczXmDhsmvXPC8mnwgXmZaiKuxZR7cY63Dat6xfmzHTTiuGyiGPQJLAUBBhp5XK",
  "key29": "45uQBdaS7pusDoJ1Sb5X59Eiiw1Mg5ni6JC49F5ecgiusiz9p2m1aeLtT4zPPfkc2VLT5zm8KY1Vp5o77bftA776",
  "key30": "4FdNzvda6Xeg3gZHmYNVmiyZtMHdMfz69BjWbU5wBBmtBrTddjx2aNcbWEfUxjFWXvsFwPbP7yS2bddaCz6JCSHn",
  "key31": "MrxbMD3V2Z23Uvtr1jmxqcJKEaAizavuBoAg3iSveq1USiFip5SFQjiFW7RtrxbyaiMsKPy4H9s5D87oueinanu",
  "key32": "66iMVGYYWSNFArn1BsTYsopBQMU9dR4EKNw3hbG9YXGYZ5TCj2MZxWF45YeeyYs4Bfvf3ZL2XwSTx297ewkyJrqp",
  "key33": "3CQXzCZQNPNVfVAzBo3FDPzXoMgoinYj7ErcyZNX2e4ncGNLXAM61zhbver8qC2qUFiAyBoHBLZP8Zc6f9gu9h6h",
  "key34": "4JJzWvgaUCGNPJc98bnDXS8C1Uip7xJV46SyFE2PUWeNNVEcPNXBvt3eLDxgkrPk3B2ZocDev392dXfWKR57rMm4",
  "key35": "4he8gQXmuy4H1UuvgMyvRpbnA1EjesetTjq4kZWDVzBnmk2pYhRUCrn4h46KAJddEsMY3QbfEHRyrdeFGALRmK8j",
  "key36": "3yZKcgZkNjSMrF2b1pg8Gb38xHoNoHEYZtHo6uiXoZye61LHDDzNVeYTGoRknLrvwZocP2QgJnBmBmjw4GFLfiqq",
  "key37": "3CYu33gWdm5wKzghq9oN5PSDytSwn6EnQjjGhQzYeKz6KCXFKGspa7chn92dnixgVhzBehn9qtsu3SxTZRk7k2Kj",
  "key38": "4f1q48LhUA3dEEbvBXM8yGWypKYjtqpips1Hju62JL2CjfYiERYDrFz5fi8Zgk8pxiaLibEdEsh6ZUU34vL3nH8i"
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
