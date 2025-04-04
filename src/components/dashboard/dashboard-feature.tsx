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
    "2eYLT1pFkND8zaJm6QnMnSANYZqUGUUoPu2Ytj7HTgVRpjoj3vdBQayr2EaXzLN4Hg4yvB329ewSGNtYuWAPoEnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yari4EAAVvr8t8XHX1Lxk1jMEZWk7dyxMdez9FDTDLfq5yKxJzUJ5HKGdd9owPVKq1J5caPyNhhKCa54UG2D2QX",
  "key1": "62FDyv97pUNDaFLbkoJAYpyAiLrVQqbAuXFu9Y5rQN7d6bMnMLZHdUaSnmBoh8gN6huWRJ5pQdsf5t8Rj18MqyHA",
  "key2": "4wvNUqp7N3vhfC9ihLgn3SjDZNKQL4mMn3eDBY2KJzGbt8KyfLhewN2pCJfa8cmr1jKhgGHXe4Twb4X6uGx2tTmr",
  "key3": "4Dh8LfLkeJbUTEyPgYYGmMtAG8v6dzpPpTsRHgbF754y8bT9kkm9D8EGTUXRwCPfSJ95FLKeQqmCCvFKUE47yBX1",
  "key4": "4Us3zwJdFZWHshhGJTUtzQsF7H9J9pf7VDLhX6TP2iyFvdZn7qm8bsS3ckGJ3bY5wr7NkyXEhZZyBaK2oqtpbbLk",
  "key5": "4KgtKgfzDdDqAvVRu5DrqjYoN2aEPeo16159BP2E47kBB8aDP1bznTVQ83zW7AGUwp644tKYbRRHgZUWwtcu4hQ",
  "key6": "cgBYG3QRCfois3DiP6g2szccDeo9Wf454GWYBTSW2dbAKehk2N5nHEPvUE4xadwCuXQNUeKJZuMgfaMgzvWn3zD",
  "key7": "4vajpzzQtNi1ELVutTVvwoHCg7ZKFNmp5Xx5PGsyF9R9U6ATbbUewsRtEWVGCegxvJHpSXkiC4wB34jgtENaUzRA",
  "key8": "3JX92sEHVKNphc5qHyXpth2QM3EhBiNxcpbgbVfgHJsyreLPoKHxZgpJQtBKC8yhDKuhTRL9UkFzRMiPYzFNRhm5",
  "key9": "44PRe6uw562JHasT9qTeyqsd6xYqk6zvUSMpzbXWBM7BMvDpbQUFQvoSsUH8Bn2Y8Mbd2GJaqDuiJy1Sm3qHPYUR",
  "key10": "281dA3kb6aAvvZ8sBh5dRCHdrSuMQU1spqyUXX6pWFHYHixSmcqKiYBuDuizoU6rAsCrNeR41NhC2ChyHbz6rN3j",
  "key11": "2qPsfdNbn64vwEDQDYqmwnryxppJLUn2ULdjVeMpEojLaXmrrTmz5qUyAoXEXJj8FwCDLVqiGWHYAQQ7wM5bt9R1",
  "key12": "22xnKmohwQpuBD7jFhzQKxbWSJWCdAZt1DzBGrjNrnaDamVMvJcZwKd8KWkuc6RiXgvw5sryXUk1qcrsHR9apE6k",
  "key13": "2rXQmz8HCXE69pXXndYXP4iExP14aKb8XBDQsu63PNa84AWLLGczkDF8gySudGqYBkdxaG7RFYXevTNhj9HbUf5w",
  "key14": "3m3peZRhsg5YUbh6nee2VDHePoW6mWb3bP3NUzUjXyg3nbFxHJykQ7FCexm2Yk1naVR92T1hJ6byj9t7Athwvs2G",
  "key15": "3JEUrNYL4ez5JJWzFutHd1Te5MpGEK8weXKjmfiFQN4DQGQTxjeKDjhuQqY3ajeNuEbU9rfzkAoZUxYugEwZm7ob",
  "key16": "3Ff9YsUEw9aaEFK6EWEFZHd5xBxNhTZyonUJpMoq5XTLd3TDzcd1CoVaDHgKnYLHCgVVpZrK9ECt4yRCmW6bvBtu",
  "key17": "3NTCrHJz3EU85a8ZuNKwQ9iyHsWQWGGnK5ebhK7L8fXQrnzoNTHtu2GmgpATsngVFC2NLLksb3tLgr8SUFKmE8SF",
  "key18": "4LX6HRs4WFKm5x16qcntsirFxjZ29vNYK75cSzxdQN2Qi3WYNhGAy12UR41tfBA9hUDoH6fdGspt3ekw2pUzK4jM",
  "key19": "5D7KkoXyuKZjygS7BKF1x2eUdEkzrdvzCwnWusBRemm1WRR1XU8nLAnQEoHwgvvcpxBfs8k6oiXjq6VBM31VfTH6",
  "key20": "76nGRiJfFh6kLxqjkZ4gYwfURKdpr9edZxWtL3EbwQQ15i6qH15XRFGiNBH3uXhFuFDkqeb9Vo6YG7D8i93fPV4",
  "key21": "7a6Wkr7PTz4Sfi2kUHFFvdw5UgspcDYEnKfoWS9EzTVBzhLeZoCZu6sj2e1Tf4dv33Rdk3hGxcxqiMz3HrsVH7D",
  "key22": "2aUqMhNoUfdTdRfb3qWSVbmMx38vu5Pny7yF9vEYeKEgTkhFamhqgrc7m6jxPhASgUHPjJ1DrybgdZ9WjWccJz42",
  "key23": "5fWDAgQFs3hWQREtZ6dhjkHYMyaA7VTshtvsgZGJ3eWuKAAmmnt2aXpp6mRLwYkGW3QUjxctfht35NtKYvn9V8Wn",
  "key24": "T3kibCXd1oY8qLJ4rKMmNiTYw2aQkbexNQFkfqoFUVFohxC8m6qHYMzhWJwLrSeKzQYdqaXwiguZth3F7p3bpu9",
  "key25": "oYsyQEi2oMaYWSphkBhjGF6Z869TpL7n2h5Ms3EWgJMMznSCCQYPL4L37vkcR2WtdcFLNhiNjuVz5CvXbwBxaD3",
  "key26": "3kynTW7JHQKZqv9hJtWmbpPwG3jioNwX2VKFymKSWngZE2Po7zq7iNyCzzLRRTfUTMxJj9Zjc9X5CwkjhJzUtVD",
  "key27": "447PnoMvizhAn6Rxta5Z4kKMg8NJJ4P9hLrovhjY6rhrrFSkaqd8oWHyVuDuXsVAasRVTUPCKCGYfyM7CTJhrqJF",
  "key28": "4Pso56HPkdC1Ujk3g17PsF4BFSNViQj7w4V4jbHaQZkUcTa5tnkLwTyrQtQw6hvn5bfRSwV22LFeb6bUG423G4mU",
  "key29": "5oK2gfNhgAnQzjqz4Uop5qmkspg1jRKv3MqESqBsZBUWMEj85v5XaiQDdjw89BmtQHjuKfmUuBy2ZBbBDX3A68Fi",
  "key30": "mQosAKL9N99Sv5ppFFmJEUsHTZLUirZLqtKEkvNsqNLAP2mBHGZKokqzeSoDm1UVuELKMjozSpakmprUKG84sdt",
  "key31": "5pNjfSHX5LqzXx4hLTLVa2Wc3wY78Ze55CBfuMkM9sHic9J91u7UyHC1qjyyF4fqij524iSKnWtump8EBe1WY8TU",
  "key32": "3HJ5J28wwhzKAqmPFvJkYxbnhBZLqAH218bKrnM1xeM5dUL4RWtfWZT3y8UdnjENKfUt2LtcmKyUtFkcjrHwTM52",
  "key33": "4QvGkKtAhRDozDP97G7JS9YDaF7XQ8H7xfqeeNtVBgYmZbiJpaimizRFp2Xqiq7CmmCwVzPWZqN17iYjHSAsZmWs",
  "key34": "2GveSE64ghu96UyCT3oBh5uiKQH1bjcGKhPQxnctZQ9fjpq4oYjaczyVrp4c1MbyFA4BRRARWrtNMzKgpaauD7vK",
  "key35": "3yQUePoaese1vv49gMEgeJoyDySGhQydY7VsVpVAfQi4a5ePYJeeu76w5SKcczwyyi3miJVooaNX96jYo4ccmJQp",
  "key36": "3Z4XjZYyy4F8xVDUyDhEL4uDvkhQAz3WXxQ6Ey9PGSQFfsLuhL58vWazcJn33qYhQaMo4264fpw1ARiG3eTtvtY",
  "key37": "4arb475yrPNtefcGr3d8FmVayArnHTMEpqTx35GdPbD8b1MN9V5Xav8rHJeGiHvs94iG1ffu5SXrk11ufNQ8bjxX",
  "key38": "5fcBhHFNwkj5EFSon6KbWcpduQz68zYetfXPnK5WunJzmgpu9ARSDLqMruHzGC7a7ERqcKQYrVC2dsv3Zobs8eqa",
  "key39": "2JqTwvjZdVSnXRUdD8BwphMYC2sjL7FHvYHHps4mSFtbPSDNgVxXYrwgwW6tEYorB5YPuFsESkUU58v3xYcvma2R",
  "key40": "3AzyoJDKQpj45BHs5wZa7ZfTVbUzT494Xc6LRt8nQnM1ndnCDSaN4LEDypgDvLBEa5rThQ88Q5D5ZSmuMQzc3BVT",
  "key41": "4E8BSTuZJuFRyLtK66fn3jBeCz5hLGercpvNcocKYDTyKNRF6NRJfprEGS9CgGcymXP8XpkXvvKBTqWj6a44i1MB"
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
