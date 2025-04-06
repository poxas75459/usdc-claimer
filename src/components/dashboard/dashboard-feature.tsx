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
    "8Nk7aE36d9rE7g9MKGiHku56D2ZN4uviNQ6GCAXRhNkEPtrbf7LZUBNc1zF9Gad1jkujVy7zmHzjht9hLgfpuzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65RWS7UL56jCdU2ABsmQupFYhBt9Zn9EYK35NFt1ArPQzuep7LGwpcYvTrMm5A9AvuqtmLWWvNHkm6fewK8Emiy5",
  "key1": "454w4HxSThgSQ8fzE7LkKeyAfS1JRMkGhrDmGiqvh5VebKMfSd5xmJt4RUHTkKXS8AAiUouJzDxUN3ikJF6CpvgZ",
  "key2": "2ctsfudavogihjv3advNwpPBH7y2vpavrerhacwx8sCcpCM8z44cXiEBSh9jiJNJivEEEUf332ejGJHMFSuKMjRo",
  "key3": "4GrWsKb9tojJ4eDrzFm3sfKwf1jUCSMzPxWW1JYKrtpwxse8zKSVEEr1h9ff6nf191UAHjSbjmoeGTyN8inNt5ke",
  "key4": "3sBwHyNfVqGdH4qm7ZVdU1CKaR4cqZCj7LctJcVdb51rA8Zzn5y5kwf6Z5gBHPudjTGXdKfqRydVgWBjynTVcStd",
  "key5": "3R3Bo6VjTHy55TinjLwPo1J2rvdsUhdGbkHH9ckvQgHjsspxmSEkB8KTe4Vz6cTditpdk6hbjarLnr8pc16qmJRk",
  "key6": "32pMWbfUEcqmaD7gGD5J5achCDb5JEEAQnLTpXMUQUdLUC96N4AtWNg6gbj8cBZvjLXi6Grp2SquCQWcTAfEumxd",
  "key7": "3Wev7VykjFoYNrYKvb1AJqpp9dFEDzUgyYKHWYJH7c8soLAu75eEsANqapKekD4L3Ckr8x9BjqedeQLUywHA8SNF",
  "key8": "cZ5WkZg57andBdpPPptizCJMkwpW2yRFRjHJLLPwkrQyMYTv6Bmvud2epHJUCG7JkaUCMGrgS6bXarZP25FqgpD",
  "key9": "5zoTJ6ouL4R3S3A6ng47BV9x13BoWR854AtWvnJfAo7mWtqGxeaZpoykG7gzZuSqJ5QUEqDLUXWW9eU6ugaJXU37",
  "key10": "5J1w9KsrtpGp3TXhdtaEZjg4y5zw2D1k5zu83HxpYTfwHGy7HtYqamBzv83FHF14VfQKc1BwTUouuzJp7ANTUa83",
  "key11": "FB1L7r8pQdGGvn8r3Ej96hJT6qfnSe8SANyoZQmMw3f5KJS5M1kj4c5FhgDEU3zKKjxArmxdiRXdpRAPAeADeRP",
  "key12": "Ku7SvxqVaDt9pgPSSgG2VhxUznb7o3buAEtrvMbZXfucbgbTpu3d19cbSkLU1vCxt9Z3ALFkaUR9XuirVDscNqS",
  "key13": "wrpKeEhg56yGk7WCmWKuHJqsvRe326QGfWQtMKhEHRdDo97NqujL18wyQK5EpUFdZzpBArfHPR5vn4D6WKcg1kk",
  "key14": "2LGD78Myg3fsaAswk9nWuBEFsU1VDEPQXFX2RDy3tWMMxpRoYjB84qMRkyL3c8EDsWsknHiqKwQ428x1AjsLyB3r",
  "key15": "jbsa291TV5kSrf4T41a4fHuv3QLvkrNC4apkACz7BgfkKBDoWT964ggatoaXjZp8w1hc41Wuxuupai5WyY4uHv2",
  "key16": "57zL8dd31PRkuNoMgoPeSFQxEdT1oV8NVS6Qjm3jequi2a1GSg6Zs1jcWGCKyF4MFXp9feYi5APKMAwoxgBqJQQw",
  "key17": "5bmY6KZjrZK6PMjn3zxufYzCVdECpzZNVybbRhnQ2ZiUexEHgakAJtgn3opU4YRAiFbbBuR8PdsVJ9L7RhL4fkfR",
  "key18": "f5hRq8ZY1LGYjAdCbbAiRfoeFsvD47UfSiB6jvoDY5GDUc7xhmCpGyLXsJ2UZD2eVKwJXXukfbhQtWXpxKcVi8z",
  "key19": "65gBDNXxQTkeWhA5wpj7Yr5pZypqbb6sqBgNZqxZpXqSC77tXC5gqQUv9t46f1cQE2aAgQdEtMD9MNLwrf961g1Z",
  "key20": "3wSVB5igQJ12ob5S8sYs3A46Ntf3s7GKRHy3Dqj4zU9EzXaTfEss8nhFRBsrZ8S56d2LA3oZWeX5GTiqSNR7Bxv2",
  "key21": "3NWMNNprjUJji3v874BHzxpMj7WpAQeG6JzHGsxasNdkX1FsRMFBiUhD38NsLRtb9f1z5jiRP1DA12uQ6DqSUuRL",
  "key22": "3Lec6idwDttC91UVQ8kXtbJT17bR2dpjQDRfpWEXAURfvRbrcHtqRceQBiUWLAqvU3tCsa6bbNuKx2DBQ4uVr3Y5",
  "key23": "3igvbRbtMJ9JamwjLoUH65buMWSpoEsTBp5uirFbA8gG735m7bf6hiuEjUnkQJ3TDjjTQfADgS6WryVfXzZzcGzd",
  "key24": "4szaNxwaMWoLfzoP1q7QLqYD629n7EsemjmnEux1R7Bxzj7YFjLHY5a2DK2QYqkxWKzy36MvVQZqH1gm2anGktid",
  "key25": "Pjt4HkA1SbszJZT11JQQafgpFkjRHjzcUTXUANyDgMNnDP96KqD3BEbrb8wJPfKjPXxwZUgYMYV12rzPpYxXG6Q",
  "key26": "4Hj4q8ruFBtjKRTX5MP8eBxiS8mtrVZdGdk72QV9FcUDpsZpSyXbWRNQP8MpKjwp6J6wE1L955Lac2dmwyQrtks5",
  "key27": "4UMkT6fPmKNhEzpDqqwHZK2wSsUS6SzW9uAF86zJ6T5o7Mvq3HPDvVxdcVTQyeq7E7YuGawxgycMErTzQehrLy1x",
  "key28": "2zKDpzxMQKgebqXaXcKQLjw2pr3khNMFz35SFkBBwmR2PQw9TCFgPLEuNWW5tHTktJXGSLwzWqMUnQxE6BDrD8os",
  "key29": "5KnY732h4NgyahyJMPhQVcgHqhtvXHFKvcdjmMiZUrxkxbyEzGSCdDaZuFuzF3tmfBCJrrMJbgJWdnWXKRqSVpSj",
  "key30": "4yoUQgmdDUC2d9hXvNMFnFkQAiX6RLbKuKH5WoB3qine3x8u4sze1AHvJ25e22FbJ5NSL5Z2ezbgwm9MhKrYCVdg",
  "key31": "5CX8NtwQjbRzviqqUpDHqFvc8VUBLHEH18maS4HJGXrNNjnnwCz3T3BV2hM88XbJZpujMhxWSEVU2R6WR8KYxonP",
  "key32": "2fpSPZYiJYDuxjKvs9WU9bmQLALHYkoxtmLDwG1HUhNJXGYE2yRBgLiLg63ydmf4LaHkHvvcHhh587pzPNVRNR8q",
  "key33": "2uUHiHk9hSFgdA8xJiDNfN5Nq4MEENmyobZ4rfft1Ft91uWdj1nEGoeko8ru4uQQJkEDUXqKdGVBUvHBAnkrfcNi"
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
