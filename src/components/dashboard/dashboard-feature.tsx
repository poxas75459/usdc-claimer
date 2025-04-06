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
    "5LRxpQJb8QhAxLVKj2KETUnZszgTTneWomRLdVhPoSfa9Q1CDbq2CxJfzUpEd4yZGz4xeMnhN8pC6Ri34KD8qpmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wAdxpTKoChRss8EmwMx6NqL1Uu5oMsoG3sEk8grqfXQkGH1rvzjzGpdRh8s2JQoKqeofyCaqX67eKgjiH4Azhp9",
  "key1": "36dpUnpfRiMCfdUq2eYNCtTiyF9EZUYVmG8iYusRzGaeKdDHybhRA8qZkY12RT2RbBE8xFmrWJezmANU61dK8CXQ",
  "key2": "43V74FxbxBEbnVcKzy8fjqCekskManRCuzwAKTWaztB3kSVZYKje7GARRobEqP9URVEJTu67NuupgRqZrVicLNSB",
  "key3": "5DzJFL5PAcSYuUSxWpK829xErWUyKLHxkXLRQLrwtcKmbhSBwFEmFKh5LkRPTJCwA8NTTXcKxZCnAEJfGXsHscvD",
  "key4": "5niUkK9EzePS91x9pttAK3RcUpVzVxk2ATLm3vfTnY5zGe1X6WWDP29uwa2Ysuc4vcDZ9KAYGk6pQP7iKn1TUNDA",
  "key5": "3t7eHDvtwMEMb94jbJQA2yN7sdno3SvrkrFGWDkNck4d1QuhmHYs3jfJQq4vW6Bj3vmgca9pddxCcEADVK4GJLc2",
  "key6": "TMh8KT4JWwgUpGQSWvTWiMm1nX1UUKvWYpbomGudSdGq8HQ7S2WcpJJoPHEjTbFMuZHFP2uUtsT9Z7YF76St8Zp",
  "key7": "2fm2FLLDjM86U9iRS265ChYneGSC4HsAL7uLTNQTdHTLUfUmzwiH9sC62vNDJi3a5ny2mQJhTSh4GaFRSjuLykRK",
  "key8": "3UgtztEzLvq3Wmo4XMZf8WpVTDV1YwP1KLfME9zqKfxfxAQP9LC9ohXKXcto5SAbUVjYiGXAG6hWytwq14cvKXwC",
  "key9": "4mWWcvqzphcPeqDbBKq3h8zmve6foRL28oaK9pXGxRxyKfA3vfayxHaKXY1E399DsXzTn8PxmiVbr6CdV98dxm75",
  "key10": "2qn5gXs4AC1u4kDawqNcUUjCQKX2bZPgncRTCssoEw85LwDFGPcXwtZWWcQEYH3X9sxktKmsp9mHFfWJMZrBbZX7",
  "key11": "4WimLgo8Z4Q4Gq2kNj5AMfUFohbvYLR2GmjodT1VxqUqkmee7AMFWnb761NS55cqqUZ1sr46rqnWFQuH74KnE6Un",
  "key12": "5ZvXHJshkzj2342XZuunAbvBZhbKggc27r6FcUEwV8VKqRSZvtKzTeP1P2TrQkc1mAwoUx34b4SmixdWgVTZP6H7",
  "key13": "4n1b7egeF6W2tBmFxJnbFy2LmegrBEx7FMkWEKoyQymtmoxsV9TtwmUH8zJ2UvYGQ8aAHfze1kyfBWGypG4x89My",
  "key14": "2BETe4BBWJWrygNsf172mJquwqCwgAu6QPKGViy41H6U7m8FPkhRci9xWwAMc4VNmxmPVZW3xvcKzNW31m8xK7ko",
  "key15": "2YTwqLsCo1npR81pyWNG7hmnXqyMoGRLjiP2fEPTrebCiSFSKYCQkgj1uXi2rZfsmPFqKkDH7w6PD8qXkJfERZ8E",
  "key16": "3KRHqod46ZXH5dCTPDUJju4QN9Ut3Knc52Xjyr7JLynMR98rSaUBLg9nko5UB3MxvVLMk8kVnGZpELUBtvwkq7ZG",
  "key17": "2CBRCTFhfjGVyGFv53Rwz99UnsYhhEqV7uWPyREEzvPuvhtGg6Zrwo16txjZqfFNc7dnhJtXaxnAsKob43pHT2dc",
  "key18": "529RdmDq4hKBX3C3X6Sb4GY36buR2cDLWtDsgLaCsh5AQ72GNPwW7dYYEHvztYMFeApUgCMLeCRiZ8m2DVtR4sAK",
  "key19": "2cYZfi4MY1ooHiumqpKht31KnYApKUFDXUWs1DukVjmXBG2akHGmfpwu4hyniDSDsowt8W8cqQDHVNpACmXRoujN",
  "key20": "54C8KvDQKtTpGqmG9yc2AVYTKM1iGwyMAQjto24FxwZN7vaMuJtCuAaem4bXCCv4x1nQSjub2RPrXGzpei5HaWr3",
  "key21": "59LSAWEMHmxYFQ8dSUodeP5K3QAvh6hKZNuhwtfb3ZDJm1fNbC8XnKKaqHZoz5SX24LESuk8R8cczUgEFm1uADt5",
  "key22": "5WjuMWJ5YJiYjDdKRgR8NPWWnPLVh1ipe6o9Gr25DnazquHMXMSREXEgoZ8a1ZbmSNEBHLasm8g5anok7acHfoXs",
  "key23": "2kEUqVKa6JRGJv5Qu534hQgUQmD8KG6wc87dSbCMSzzueHhdW99H954w8RSCe1XARnZxfvGQFv5TmN8NBxsLKxse",
  "key24": "2WJDopiYsYHcT4aA3nHEda6rfsc8YCCiYBgG7RxP5p4j5QkoduvoscFEmbPv1YmEBxpKoDrJ4oHmJZtGneVA8rHS",
  "key25": "2VwUPoiy5nM1Cc9kx8UDz4AYUvs4MwPf1pREzLik6qRtpEcQETY2dhgvB8NiVXwcRsYjB5dzJRmVUsgvSZaRebfb",
  "key26": "3ZQKgJVh1CXqHYQLTjzeFUmEGGkyAXyXUYFq9sQPi8gYNx5Adkmog9StKjrjg3KPvEDYu9hXt4LPvsPFtLb8UZ6j",
  "key27": "3qkT5cQgowt8x1VeUzCW1DQ2GtvWK9AHHqtuf2KhH21kiumrBJLjfpoADVnAjwGt4wveAw68pVBLz4CF2CMwTQ8k",
  "key28": "4ukniAVQSHXgmVNtVbPBJXQuSTTN42qXG4WmXwbEfWzr9Hn6UqNd4UMgg7yUouzWoNeSpriKv3UL5RyYextUhsYf",
  "key29": "5HeW6LFauVBYiMSEmegcMNgFP8oAXvTsfew9EkZdLNqofozVLVamF2SxUTAVLdLXhGc7WDheVY12AXxwFAtQSPQY",
  "key30": "2pxjmiACwqqivtxg2Q9cHqJnEGTSberfoDpx4U8fAqxRN4rhEMDKQSV5DYqUAy6tX4aZ3ayeyh1ZTHxp9RkfX5GN",
  "key31": "45fJVKxnZP6pAcxb4VJNDWuxEuhaMgVpMKsdsUFF3rZREUX512CY3iQ6cQ4VJvZCTL5VmtGm3vea2TWCvteDeQvK",
  "key32": "3mhgrWivRZwNL7gi5naP7yn8G1GKpfJkZfVVjwPef4uiC6DkYTk2BmhSSmMBcNyMJjc4y1cgY33pRTNBEgY1Mtkn"
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
