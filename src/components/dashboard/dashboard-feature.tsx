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
    "4NUeh5dQtxF4YQXszxr3ceLj8dpZsJiAipegLwG7N33HzPq7eHZndnUUqg3TCCyqQBhWAVGNgiAr23dSbrHKtgSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22X75Kf4uTzUM4zkxawiQbetKQnhb7KtHVHg45tZPgZAVUUPQyVLYRECzMQoj2tXGUF2coZNaYmf1xPQcYp1j8qr",
  "key1": "ouFrWSH44KkQobjpwERHxpFRkrocnnt9uWY7N5LuMjQCCUt9vVYrYW3hS14tqGrUpg6bZdnPMouHXhk6J1MMAVg",
  "key2": "3aHEQC8JqjfamPUBCskq43hdv39Fyigzsh9Fdo8WJnVDb9TSTWvxhsHWzjrmrY6GH1sAgghdrytdCUDyt8ACMNjM",
  "key3": "3kB2K6jATz8bepkqV8HqEc9SizfHZUMhzppWtfGvLXWgHYNgN5DfgUNQ1y2Kh5cvdL3SZHgttE8jVdpHrUx7prHX",
  "key4": "5zCKwZHRBZWAA86WGyZCgwQhTwCTqKjetg3f4kZVhUtZU9jGjeMZiidk3gqzAZDqZAFUw91oNLV7bggyqZP3kjiZ",
  "key5": "4LzoQzD3wmu7B9tuLjP5aPcB3K5BWGwR3vdFypwg6V4NFEcWPgS6r4w8Dxcw1jFkByfsYSYPp48XipU3414rWCAR",
  "key6": "5ArXgHdyrbLZ41bGPWK326XAJ9EMfQUU7Hd1QE8FHSWSkLaHhqjmWcwAK1xFXTAoEtbPP4jtPSdKN2qc4RABUFV4",
  "key7": "4frejQ4DhLJf2i5n6NAw72nd6VBKWrjtkwTEzwSqf2Yr6or5KbWRVdMgyu7cEn2tmmJWjznzKNe2DqAhT4MJBA8R",
  "key8": "3GzHHcKqgVazdg6WcMr75mDqRcx2XjfrKFPtkWemaS9swTMDGWh9YuSaox2hs2ePWek7xXb5PqpAHtRZRCms3CVE",
  "key9": "4Y96gHtZ1nqZCt2iniNCq2z2m8eHFhzqLfG1ZNB8iXuqwn5BVpseN3jdZnPpJsKAHPjLKW722LuPmVrTD3aVzsr3",
  "key10": "5rje8hFSwScyJ6XcWRHnkEzZyniaf5s9haTaUGxRGnsMEvm8rTnaW6u9hbDWqi1okBMRDmkwp32Fv3auBYD7NhsA",
  "key11": "4pEXYmdaEMY2rdJYEJkdEQrmxHmPENQreVkw4awhGHphQ86QLG8bn27s71ytowB3F4nYVLHF5fGW3WrsBceJ3iMw",
  "key12": "4rhqDxaSZXAuKtKZPwHE5hYChxeaNBj4JJKedD65ikWrLpuMkBZ81SGyYECTJYC5SyJgyWirn7AgDZeQkoDEmmhY",
  "key13": "ZrmUXZxcFVyYbtRWVBrLFuj6SM8gHprn9jQ1E5GWkHfFm5nUu8A3QaXa9SjnBRxopthYFoURBjLokEgtAP4PW8m",
  "key14": "3hyVAHsYbezUfWHHpZyC8jqLEZh2FnqZvuXyeMeSonVRGsDuwxvvhJ1keP1atUfx7XijsTeUH8gsFTcFYRxdCmVM",
  "key15": "3Zk5H2Uj61BaFRKq9zmX9m291GFmmAJPWjtsGoRuuUEUDNJti7mbYnSP6Lh6ArBzrkiioE5ERtYJmGveeGCbczFL",
  "key16": "3GzSrX8Uu1EBVxJUJ9brY5VspTG3kqjDvU5vEM65aPddupYbFFbJqdzL96WsdfJp2xkhj4yRzNa1NBrgnEjFA7N7",
  "key17": "HiidTbnQEH4GaAmshp7qk2NsiR6JhbyrF1WngR4JfaePUPKEGTZubu4jdRVbW37qrktjHSZseAafpQMYAHUXsKQ",
  "key18": "5HAKZCEbEis168kyu94LgrogGKjpGAm9A5s57T8KYjtjwoFHy4rWJxS3fisBwLMFM1PppX5e5M9FLPnusRtDoCre",
  "key19": "3YYuhoszUZUsKeY9nMmCJ7SLSp72iBLgehayHg9iJDzfSqFujUG9hupsBRSe9M9scHTBNPvj5FXqVYv5w96zg3gm",
  "key20": "42TJY8Y8SqDRry4ihjfQHUcMYdtaENqtULgJK8u26Yw2rvGESEAPWpT2MSzPYje8p6twetMwc7edHJroz1CjAYxz",
  "key21": "dCux71Q9sVjhyzUcBSKErXfpDNT4RjFhpN9ot2GBfTc2hjdS9hfqaxfcq782M3FAMJTbmsTKCCL7fftR58ETjje",
  "key22": "4YKvzPcc3wgZ7QpSAs19CNPvoAe1ZnBzA6HGCGQmGCvA3aLLsqbSSqCx77iX43NnCWDJZCNyRruaVH2FSmyRTE4h",
  "key23": "HEVWdFZukNAQWd7EougnRtxdJ7mvxbUvpq5AzqUczjX5JohtXU7f8o7nEjLqP2KpjpjFofVsjtBSyaT3BbST1cz",
  "key24": "4jb7pqcduemVuRLe3bSnqCcrGe8L4eQ7VMnRPNUnZ32uFdQnkiicVojQZu4A6gaBdWuMRM8ZN3E1Y1Tc5FCX4VXd",
  "key25": "2TvD7Cij1L88449i5QPsw1nNbSV3K8LeWyxvdFrUW4iSatBHCJBU1CXi2pZXktJLQrp8ktSWUQj94e3fbPoU2M1J",
  "key26": "42LGnbFst7GofEYPoVM8yV7D5wNoDnu4uiawxnEwndVZRqGsoY9pzngFRf7J49DNyWcP2CNVCaQGNwrptUtGxFeN",
  "key27": "mXuERwwMgA1HTDfmgAiHEFh377wUaSu4cS3vVdWNdkfPk9gsVpZrshgA6hYQB8ZmBEM3QFSMdLZztTU2eYBA4hF",
  "key28": "5jkMSQWRU7e8ViH8q8kFDmKP9MZ7b1QsbDcirwJAQ7Dp8quBtdPQAMax438bb4pGd3BuUX89QcbWjXthZjoJXhYu",
  "key29": "3Tcaip5p8mDppkMr5qEASq52gps1NQjx1CjrDRPvZcmgpou2JC93q5mJ58igbisUqFYX3w8RXZpGCCHCrcWNQeg9"
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
