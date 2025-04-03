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
    "5KRkXsKW8LswfYbZJdMMH3H7apw13yKtE1VT9iLcQAjfzF7Ar23UkU9pdqLy4jftWTUxTGDFD3js2AtpSrarpTAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2suGCkvbXpNxVtQJ6n7RwDtFHaZkbNpGNSGh2qMuTfXQu1EsuVUXRoJZSS3vReCitj2h9HoiZpBdannjKiNZKkiq",
  "key1": "2uR5fyTWpQbKXPqbWhzpSUd3JjBy1UMFvou4f1UxyNLRvjcsqf9G2JzACRsQiTaNUzg5bVB5oWtj4yQgVFfWCor1",
  "key2": "2LMWNaNpeaSAp8aytinppQLHBTLc328rjZ5615C8nmrdhd48hDTjmBJwvt5Yfs7Gypc1mKpYb6yUp91DqYMWeKi9",
  "key3": "4aw62uN7WsbQjvyzytM3tvyLMPbMbi3EF1Q26v9teuz2NRGMrY4PDeixn3GPNby1mV15eFjWNppkEvK1Kjjkpfu6",
  "key4": "3T6JXGioYH1EbK461nhKQ2y2nJ4D9X7PFyoUZL6pZgLh8Tg6cX4BaXZu6VVMTEbNKiEwqAzk6QPRy5jzxVRBh6p3",
  "key5": "R5YrBta8kuypGRwqE9XRiivYK8xHKPMtMVoCZWAnmkLcnA4EpoRKDRp2kcHQ5mZdMoTGqN3kseah8xFoUifbkqJ",
  "key6": "5siURBBKXGoL1HYzCUYYzCL6ym9TrH6u8Rs7KZRVLJGHdNQiFwwJ6miWEhhZ78GsYEKf6RLHViUfuEXEbAShx9a6",
  "key7": "38sHYGGbjhHKF7xr9JPeXxLyVGekwsKvf2iHAZgPc9u9tnhHX1yQJeVNZQ7vejwejyfe5iMEwJQ3tnUeGFzExHcq",
  "key8": "5xqXqvcPSWgF9RAKXQjTKe6tSbfTxB4s7rUrcgyWdqagwCbEAjyXWigi753oNd9JpNf2Uh1iZL9Y8ATY9k4Df5he",
  "key9": "3cc8qv31vD9L43zhmgEQabbRB9XfXaqxirojWLbGZf29hnnH7hcPRYxXTJEX2DZbvtsu5m3NEWw84tJUVvpTRrCV",
  "key10": "HrYgQzpgPnSYhiTjBjXL1zgicPvSqTdbobq6WW6dgkEvUvSdoYsEJzaprZApVfsUMLMwSwFNJyFPKQfQ236Jxho",
  "key11": "4j2zCjF9vrLBhy8esvGPvYfGB8rc9FxvwPz8JfB2VGB4RAJsjeXmBX5CdPpzpPErCrTCaDHS13GbsxhGKEu8saF1",
  "key12": "sPVkaMh1BZC49EdQ3WeQkSsvzuFbaxyjQgBBiJapkt2rd47wSSTF1PvjYLKUDkGXyKiY2ztymsU6AwmGRGzQEa2",
  "key13": "5m2gCrRasUvXnssUYFgaQuFio4p3qK7DiNTWRgSqSz74B9e2Tb8m4maubbf38HZX84zRJPo6dPfEDD6k299C4ygT",
  "key14": "2i8Wb6gAAeVbfWaFhpJwBCUSM5FRSrubgkoSPoZ9AC773YQ2Wrj8QDSvH2vBCb2WbRPoD9BKpHGHJXzX2hSxgW6g",
  "key15": "3sw4Q92D4vsVmapjNC44KkmEhzhy9hSNfXpG9xrLPjjdf8os3WwnGFPzUBidYjzCpDoGibK7dMtfArLH1aD14yEy",
  "key16": "33QVWC3Uk34j5fTGaLjzdM36CKLqCqXNhyTC2v6BLvUtX5EPDLXKeHVx6p6Ru6NUVSvawd5DdokgqSrstCkn3NY4",
  "key17": "2CrFDUF6hMPj1AY1kuA16SKcpMibVWfEsPxSymTjddm2w9uQgidqe2BRQPhsMXdCyTVEyhZJtPb1jzEAKkeRfodX",
  "key18": "2shJd7HVYhB5T89urC4JaaspD2WzqvJKrjGhP2wtDLknn6UT2x5e8DM1UfAkZrHzGHCNXMd7MhC7QE3WNpD4JMmR",
  "key19": "5pZvGYpcYgjNcuFyFvMW92qkmSW7sJ8pSqo4ZYtqKGtNm9wSCHGjpjkMbXok9s2axX9Necez5e9C4NdgutJkW6LM",
  "key20": "4kE9s9Enh5yKMeA5tg1sYwcRRTuQu5CyVHdL2Qhdgh3jRskYea47kGDxG6rkUigjfMPVrpLz6LM1447EYxvKH7yp",
  "key21": "2ubF9Yt6u8iZ1BYDCZvg5HAZMHkM7n1uJwGLg7GQoZ6wqDzQVSqqx5QCoVXBdFr31gHCypGQHQogsxUUU7VSyv7B",
  "key22": "3mSqubDtXUjZowESxBNSv7oFbipMzdcVoUyoBRF2P7kHnQR5YhrF5bBTfBNhEgL3q8rPWyFDhRua6QPtnLFstzcE",
  "key23": "5oKpk3TpgwnPyuNHtHmGR8Lbg1G2cAq85FHdp3jVSPywF6Tz78YtMe9QBTCqPugeW2FYC8gZeEAhWNye7Xabonij",
  "key24": "28umMLeF534JU1Au74CX18LiXTwCqLUuhVhR1owVNd2oj3UCTRa6niL85vCQM5PjqvMsRpqnGSTjV5mVkqcdrMoz",
  "key25": "4TKPzWQ2rndsD8oMjETiRT1tEBFCZXy6LNaHvpnf52WxuAGHC2wqA2Ng9ZnD3jPbZpDA5pYw6KRhbQaBTRCYibPf",
  "key26": "2P8B9frVqSr34ma3bkdwdRJRmPsBLbwta3A1LpFRRPzQKKTTCixAmDNcMZCJmZGMr9kExHrKUyWmzPUXYtJ5bBs7",
  "key27": "3vmxM8p7x8HJApmqngxvgiDJVH5UerQDy95zQs29zfM7Ht7jyWcfDgJp2eMc4MckfAuJD1FQs5q5hanz8DWPj55S",
  "key28": "5qRwiSJsSVB4EmsB7wXT8ARxfPStACfmQhaF7HfS3QRQYjCS56qXmpJjK1ymvxwzggRRbCijDDeXbQud9NjPWb2Z",
  "key29": "5gcKAkJ6s5ykeLkn42W2kKQo49XUZ3ewmjXgebNgQ6r6MXrGRq9jzJLS74dQKTG1DjDxZq99X8JcGemekwh6xv8B",
  "key30": "3mNeqYzfDwFbjYdvbzrS9FJLuCw1uKABfxXf8h2NVY6SSsXJQgkkbjqggvzrxjwJrZ6aHoxufUV9iGxW3frym2xW",
  "key31": "stQe2jfVWZS1cYGYEdSigKu6jNqgBkcWx1WYo9ieKKMiJpYf4NyyufSBJ1eJgdJi3F1krU6PC22Kotp6cPzbN3w",
  "key32": "AtUAaeZNNEXVRBNBTmN65pxM5gCAd8jjNcQwZe1852Cyo2E2vDRuJjJHb3S68w5YSVHazaEZzFhfYFdPwLwQvyn"
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
