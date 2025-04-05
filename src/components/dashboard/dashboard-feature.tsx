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
    "4o3LTaecELEebe1DSJP4pUaT23uKV6mrXVwFHSbLZYRABaW82hJuCNESP1FeTn9RdAuyA81VGj9Vnv8WVMubjRf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u6ai5y77n5QdJMxLHWeWxdrXpLqnWi6pEqfccs7MFSY7ux1psKzZWwz2RhPRJh42LS441dFnX7jCzm9CRJ5MNH2",
  "key1": "5svggseVrjSa3TeiXCou2cgGi2ZA8X9bJKcYDiM1mxaXyJRbVyeENZ7BrUUXNBnCFWJz98oJJdZhKMJ3P2K5SaVB",
  "key2": "2FgEpDFMtMjuyq82h5VQ3viUCeEkdyggSri2Wa2TVgqpWrjHJoLg5QfCXdsBfB71xrQuA2hUDYoTGPrwXtuiocVc",
  "key3": "3rXeAX1MTUmypt6ucvjFCdKgTMJYo45fxyPKHWqjxNvoX3oHqes3Jibm5u6wmMVf3YbpZ5idbhZgkRcqZV8xA8Cp",
  "key4": "3YP2x2GzzGFndxf7f1S1RkPA2kFCp6Zy4o694thgpKswpvfPF8bTtYzJY25pGJ9Wzhc1ETn9h8FnXRWtVVbKf95V",
  "key5": "5eKpNirPNmqMonJSqJCq7jkioe5asirrf2KpKejapnJ8Y4sVTz2xePcz98pghGfLGyz9CEvTqnMrPFFWsKfQUMCL",
  "key6": "5J5DqRvPU1nSEnzHnxw8KgrbbP5hseyUcrQ1DrNyYsHxStvqoxYATnDa8JzUtPfVR6MHrSBqPwqQwWWZKSRA6kSi",
  "key7": "29tKev3ytHWtfaqFjkvNTUPvtx8BKGvumpBB1y7jvBhancDeiAfNnBjs7bWoboYMdoLjuRkrA9wZGtzJtQ5wKnxj",
  "key8": "3rQj2fmbsxfRL6u9NHsejK11trN2UKCqSFNVMLc6F5yTvXgLr8yRPeUg8wGDoQz4GcTxLrizgSRXoEjFANTjjowK",
  "key9": "2D6wrUAfzchDaHPstcZnD6JJRGU7H8eZmaYbsM7dPzsjVFg2HhkT8dCLQS2xrAU3jXXa6xBmu11f8wXVafSPi3Eh",
  "key10": "3mtFnipvy6X1tRyQWZnksKPHV6tZ7pfpgokyWP5XcaS7vLFTL1B8mHAS6KtKpgqeJJDUyq9PRJVvVJSgBNyrEqdW",
  "key11": "S1fM2XvSVSDJqR9VFTZb9PBCarrymtp3icEWXYsrWvPhxFPLFepGQBKWNjWiuHXDQgQfJLxtZuXNyH7yMn66pzF",
  "key12": "AnVAkhwgVKTeR2ZQSiKEenb6LMtUPA7jsvUwaSoWEbkU4hEKpUes5tFxpYaST8bfw86MteV8R1eQPFooeXURv7G",
  "key13": "YYmLsEvULifjBhReTxiKdM6xwuJn46Avh6hgcSj1C25ptGZ7cFffKbbKCsN5uswg7qJrb2VYmLmjjkUApV85ksQ",
  "key14": "C1j6F8MvVxkytQ1GqUwwAHE5PML3aDMhGWjAaryRqyywDEfGCFDyAU2SmBbaTUsDe7WUQjMi1EGcZyci2oZjrth",
  "key15": "4o4nRZThs38ETsN47HiHdcemjB3N4tBeRKwSEVoxqujGwDcpbjRQPLpLoyH4v2MVJ599SugVRmevTdNv9qd2mTj5",
  "key16": "5EjigXiSRmvJUpfftnjDmqKbLcU8RcAN7moyFNVeYwKRZ9roZjA2ZdquoA2SHjxKXDyu4ee35SDKCaCtU92yKpB5",
  "key17": "2BqVronT3Qvhh6q9pFgqXqhhrPJ6jjdBbApJcfhgriQSg3YttTjt1TxpkbJpUjbemyKY5A3XYiZLpEHBs7L5Fo2c",
  "key18": "4v4EbECnXaYucHnPjhEXs34kFwVUUSrTRyMhFUyKzPDR8pq7XjzZ5LBCGmfgJuj7GT9hnK4n3qonzDWhwVHZXT1Y",
  "key19": "coBHcjj9kbgfw7K2xbxBXc38ySZB55gRYvJr6GKF7Gj34vq4RSR2AANrkZVeaX46GXFoFNypoXNVJt6MFbXEemA",
  "key20": "3tcfUTzySvVBGbTqp5euhET6kD761z1yxsEaUkLCXNJghMPSsazaKBwFYXf5uS96ugeuwn4zk62eZbHFtMjj29dv",
  "key21": "4sZPTzUr8aRUQK4MihkTBQn2MqDxqdgoQWEGpakaM966yCA9SbebcKTm5ei5rGYabmadrBHU46QaFadLxAJjgEeG",
  "key22": "5sb7Mjc7FQVNZoAmX82pAAWA1BsiQoGeku2YNzjbedhAbBjtxPqC47AzRwv7Yf28JaBuc1jUNwDbbkwhqc2qzF7a",
  "key23": "3TEE46wtxtvFKq4d5g3onqR1uA2wGW6PtpyUPXyCGdPLFkbRkAzTVCPC46HLdP5vXhBmCgEh6pzumoLsfifkdK8F",
  "key24": "2zzxhYa8EXHmMuo6Qze8Au8ZZcGx98M9L3P1GyXQ7x6PoJ3bHWcPT86WeWkXgDKoKBkvnPzaRHCHBkHskPC7i899",
  "key25": "2YkZqmrWGpFpQUCwUMZhs2maeac51S5pBkUydoEukxmCdbQKe4LHNtb5tZ5uAB8WvJwwz1tGC36cgPQev33g8JUq",
  "key26": "5kXgR25oFCJjK1zFAQcCfuYr9zH1HNnnux9ExpjQHrmmWLQf4ut88tJKmw6SsSpAUmwWa2gA32o2kKYEcE4rkavh",
  "key27": "2Mouv5ieGmxcD9XPr4yqQVqFvqXhGSGp3XCGbVjf6sJoxUFGYathi5Hv7Gh19N77ciJ4kjWVkzs689HxrrKF8RyA",
  "key28": "3RQ6eD8SSKCGt6maJZvsiQiktwZXeJiWEmJWcz6P6rEV5cGrFyGWwKvNFdpKEQySc7wo8HyzSuBhu3g9QywAC6hF",
  "key29": "FGvWFctbrqi39FvKXSYJ8hvPzPe34ESCPtq289hPUpH3odcrb7W5vpnBKt7GNG3AkJGULGzo2bk71B8HnMucwad",
  "key30": "MkXXegdUjv9RnJedSb9BVGcSYngkJgvQPPyPph4M1ukrepoVk861qrMDK1UPQN57QE9huXiYRaxAUbXN5L64gkd",
  "key31": "66nVmEHpugLdKyCAftL9SNz7L2bL4FH3GDcFN5KT98pJeU6SayeRYoLa4DrFjumZkWyXo2jjzQnHgckyihTEtDKG",
  "key32": "21QUJSzwhGiGkqfngqWej2YUqnhWZZR9viP5it4VV2UuU4dNgFMyW2EMAtSfFsLVKVP5TRN8wt1qKThJPWuDxspZ"
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
