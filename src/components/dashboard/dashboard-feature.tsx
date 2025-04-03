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
    "5Zpsn8ttFSmjFM2D2YK5FavdY4zjx4sNDWcLTCZ7zt4XGkCVpCF8mTQpUsPSodfCgLGMPNoQnRzJU3z7Adh7hXZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxtDXFzqSAMxYf68uF68Pbbu7AVLZ6YAYN4sVMxN2Eu227spartegY4yfoQaMHWFi5cQd3S7LfHT9Kri86TCckS",
  "key1": "22hjoHQccG1oXTZouu5Ht3ApSmwnGQzV6ctYTaSxaEPJciGmSAHGDSzoy5xv1UYVM1LngA51f1iaJ1SXLwfVVvXz",
  "key2": "3Qoz8CBnEtPnLLyAB4iD637dexASNXZczao6gZUe8RHAMQvkQT58X6wDk8ZfPxpZu1LNfkYV6LBAesSxwPrboaGj",
  "key3": "2J3ksRuhx8ksqZ4EbAPHbFoz9LYZrmtWHiaDHHBNScWMARm1q2mVyWEgLqeKwKk33xcVueJxvEZPDnLnp7hKxTDD",
  "key4": "4r1tFysQLJ9QYuAjhs4SxDPPjwGKrXNi4vwhSQxWZwXKFkUXSa5Mkk4x65CoQRMJayqxRR1Nuzr8Jawy6GaebX5a",
  "key5": "4j48ZHHA4Bo3a42jLkeR94rwxrHhvECVtZ2UFEF7gkwR9ARBLxdagvyQH2DPNneVUkDeB6gMWNCuqhvMrR8w6BuE",
  "key6": "6BzXvQJVgV7DQiRR43FBuspAEiNQJEswtssEMLapVjzyvwT8vHQm36AGoVPHwRtNqthuwKEAnHN9z8L7Z5JCN74",
  "key7": "4PY73ZsymZCozQU79LWFei6KGyD98JpYs5wqQe3GAobs1jrRf88zX7KffviPddFb1wzzKkvWTGsxEUD2tvbUCZPY",
  "key8": "3ywAk2V6kCx7eG3Hd7JzKAQYwhqirH2whgzAvnaMR8KfVzT51hS9tQNA3zv6cTJBtXZj9fYSmpWY1ei46NYNNjpY",
  "key9": "2zfWtvHioYQmeKG5PpgcZ5h9AkNMnH1eeoqE8n4LKDZhYYURXnFALmCYKhGgheeWTCfXTSJhs6ZLen22UfHdj3b3",
  "key10": "2wA7DMTWTjT1aARSyKE4FnrgcKvpwXn4LbnuSP4SJM13BpVqNh62jikMrAciW7GYqXPKVoETrzJ3hQvnBLZCi7fa",
  "key11": "3NAFkmkNaFaca5S5hDrR5ey66E1hwg3pfUhbvLdt6Wt8pxTYB5JdxXM298gVKa8yPj9aCp64HETeMiamWdyPpZWa",
  "key12": "4aRZcySaXmgteWP8y598V6U8d7jWwRxy2jsV6tmhUFHE8i4sWKjdnEHJT9pGfPVDxBmgs1w621iMSDnxb75ua855",
  "key13": "5PoLqcaxRzK3NwbxMXQytizNrXvSJdu8v1EchwoBq5ZFK5HThhnyBTaWsCQirXvkzmMbQm3sKE5raV8CBpoLGGaP",
  "key14": "3LzotrSX6wSrR9bAdrEL6cdxpZAQMeDUsBeDZ2Ck9XG7G5u2eCfSEHBGT2StbQh1jMHBZKK7rf9dJ7MAXHipYafm",
  "key15": "5gX247pJrzxm46YEEPPkyZey4RNb6X6jrrk8G8LRuVDZs6voz6Pvkc2dfYU2qewHQzBUeyU2jwrJozBS3Xx488tK",
  "key16": "DCLJiDBuJSPqAhqMCtCu6ADJ7PjqQKSHuqqBuS8JkpDzKUxN4pHEB2KWKW1CbPdsP2uhkSeN4KQ38aYXTvNtY8J",
  "key17": "637hBpxYtBuT3CJnC2LE7XSfNxAxyfcWz7YMprKhdPecSy4MRDEHPvkTpnk2pS1khGvzkxNk6mRuuSUkPeHLVsTY",
  "key18": "4Ezav3sHHNo3qvCK96fFkU3tAxRkafo7jihgu9WgrTvYS4GKTJzuUNTZGNEXbTdnLhVWpVoy6gu932HjCiM3cBhE",
  "key19": "5Wq2DUCRedgaFKXz9gknLF9UYoT8xpeBbNCE71mkDwYgccoEEZsNZnrKkXbsqLPy9mZwrYRjJXso4Z76dMZTBnum",
  "key20": "2SDeuLgAEB41HFyHpqBumvYvR6b5AAGa9VYnKQoDhsF5JK4RstM2WonzWuDdn9Tm7ew3J2nQabLSKRmXEuxejpwa",
  "key21": "66uPCL8hy88bbVvnJ8B2eKoL6E1nksXzAcuxcw7ZKzuFK5r6YKzc5R9HFwPhQD56ia5GDPBjtCxndu498oKoUTg3",
  "key22": "2JAzjcrkMaXHX8nYjgdJGNX22jb8pQe5uHG3Kk6UNoufLPAP1YjNXFkAeM1yD9qHQJnydfnSy58FHDdjWe8B7o4K",
  "key23": "2a232pnZekqBrW8KbnXXHYu3Co5b4TigbGAv9PkicNjT5Perc2oberw8wQnUpTe8bCnEeqzXEJenVDihehvy7y5",
  "key24": "25AmGNnErhLW57YfCdwkgy7tEtQ8hLKk2svcdhspWGN1ToeQ6dGh5LWPjhvjaVS8zroYSfsT7vpLFCQRN96Q41K5",
  "key25": "2x3h9wVRQMPnfQYLEqjFUcjVvCAp4g1QV7R5m7kZBojc82REBtwZPszeTg9JiBKKFme4NMzF6ox8qZoeCCbbs4bA",
  "key26": "61kVCBf2R3fW3UAkYjTWsbParMMczLGnuVpjEb4hunEJMfRYezS4YZRuRF1ha77JhSY4YJR9iYropgsaGVjpNpsq",
  "key27": "4irjSXm8j7Ro4z4BxWgVkiQsSLEV4iZaHGuV3G9UwGyRayra9xzsTKCSPNRgjuFfiEM54sPvHHkVwLnTQiu4aCeu"
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
