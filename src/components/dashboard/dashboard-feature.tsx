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
    "3QLB2WEjFQh5JWs3sefvgdPR3BYuNErgaJc89jSf94FFEjzFacbA7oA2ceWG4oDNwyb5xiHZevBXkLDjtBatNX1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JhcwcpVNWkLHus6sknXXndkNiDcnokLz3BYwpMVXeBbQ2iqCdaYvbqQFC2EUbGKUYaRP4e5MFNsE5cK5BAehJii",
  "key1": "54rxHCzFZyC6GqHmpW5EsyQCJDheGh8EPR2FQ2xoNtJJb6C6PxcAdo4PucrZkbgva597saQ8AYXc4jdRs3B43vSc",
  "key2": "yq4a2Va9UGYH1AqMcG7YNxttkRXHD66tSN8o7Fh7A1Fm8tqGVcX3gxxFA1ZH4iMJ97nurKa4VZhgm4omTZ3tYwP",
  "key3": "nuUgF8JMJNBDG2BxjvaVmRLUmqhk6HNyKtBqv3Y4wVy2KQJVw4g1n35v6MKU5sDawYEiRa6SZxGZAqQzBZ6Pzea",
  "key4": "56wF21mKrJ6oR8j8TvPuQL2zf1B2acT8GZYpWzcgEiLazM5o62yB8iKHh9yysdyjSup8qUE12QxuowoM37Qh9SvM",
  "key5": "2zkuaJTQwytwz7YsXS5gukqGU6m7d63EJq4D4kDdEz3BFK2sDsoYjEfEgAKGG18vV93GPpo2THLtnA5JjUkpATGU",
  "key6": "2pqZdXJDYRnkc7ghvBskrj1ZfbofXyiBfQtC44yFTZ5EczkXs2VgC5jH2M2DADGVSGSZxYZJgFDECHRtRb5hs9C1",
  "key7": "3w7ZMkpFpXsJj4GzjAEEWAsdhjv1oJHnjVX7Gm3ipt3MgeHBe56VX89c794sCq75nPBiZM6KmoBip3GEtCiQq9Zy",
  "key8": "2NA9tBAePoKgzecBVVUBnqoLPeSp8mfjiA6Kb25QypdAWz5o7aKhnDfpRitiphfqgiPhKL84BGQ4VfDH5yZAdNGH",
  "key9": "GFiWG24fyEPzsKczUn6itZ9eMqeA577pWCH31z75Fc62TVkkdvQi4hRRsAHzUVPenRHnypFBQVBt4qEBKwsNsTF",
  "key10": "5Ybo4F6QDSh6RJhdsUBvMS7kmtFkK88XkW4hGvFqg7zVSq8y1iDxMQvof8ANvvkrEqdHvspDAiU4S8FV8tqMd6ai",
  "key11": "3o2yCfxmGHVt3hN6gBAsG1KEH6GM1SGjdixgbAftQJHzL5fcNDaFHipNwTe9YABG9KW31E9UyXMLhdFaYPx9RUi1",
  "key12": "4EZJazB45eGEGZTJEsyk8bxhCRSHqApDBFBLcr4XHzfZKVZx2HGhDFLoT67Lh2eL1XsTtd22XNz9qeAzbJ8XDWDP",
  "key13": "2SjZ24aat3LbR3gCgqfTs5akgFSPxa27c19NTboKRqSH3e1FbB5tShUCB24fuzZ4z4jiQNErPKjJND2wALRQWGj1",
  "key14": "3oak6AejYk4CZfvgEG6gJBXGGFYkaJMmwf3LTthLHTSxaRrLaxs1DGvQknEo1yjbV7NFDTaA7465WWwQgG4xTvWR",
  "key15": "3iYzX7xVMMxxMkkrS58XnzAiQGnPvhw8Gk3MXxNdrS4ZPtYAMHyCsJdFeBciXAxiUNNoNsDvgYHEbVwf5qah6S5S",
  "key16": "63Ws8g3j1skWv3HEsgxqtVVteovBHdn6yc5amYGb4HNwepDZ22EZryTaNY57MStK9bEQPHby6ZSxeqnSXbHRvPiR",
  "key17": "3wvnAA1kEdNpA3CNuLxTxcp4mjPM9ZRgswZPWsMu2fAhiBwtBSo1hmqDt4g9PF3Z53vmVZpPQ3ohbmkbF7STveV6",
  "key18": "4JPDQoviQHxjNP1asXfoGGdLXCbZdsFjagTqCXCdN4nGZ2BvoQHTf3GHKhFDFqpBfaTbSAyXTrQvzr9ybpitYCmF",
  "key19": "5CKGrWFREaG7NE4UDZhyBpPHbs4mKryvHzbUXxRYhi66Rwcs8Gnni91uTjEEcZtVDgKfAu6dQZTAw9sHHzD9w6uK",
  "key20": "y563ZeFoy889By64pVKtoFxh3VUPjfCDwYqpkguQ39AqkhzLsXdSwPEhSX2FD2ytZPT4KdKeZmu44f65KugHkez",
  "key21": "4DHVCJWMM51E4K9F8Vb2XzF5TgMu6bmkUsXqcH4c3Yhx2HvLP9tAXXHx3jbhqvwYhJbMpP5jwkZVj7SKwFmxAAuq",
  "key22": "3u2Cxg9GYSW8H6yj21MmUkhgkNPBLjcoP18jCbFLcyA5c91T3G1c3v444b3CKhAPZMuUKQGhfoiRjPoYQWpT2KFD",
  "key23": "3PaSxc7nR2Ewz43FeNG7WwvZ4A2cUv5gjZWSybH2edjevDFD9SyuyizU34PTMBHz4wSVvEKuxH7rYZUgpHWLjgCb",
  "key24": "C1jkdyaqzmgVcS1QQELHGnHeg5MrzTovKPtr8hAW1tyYUN6mnErMuGaWzUu4dPAt9R394zv7idaem8XAmRoJeDL",
  "key25": "GHCxvABiA1LAEuhzf1iLR7WRovbRTecepwwSwDJwPZ3M3pWFpkoHNxJPWBJWybzBqV63LjmjaGFwaK8vVG6CEwy",
  "key26": "YoGRAmdeogBcUtmYAwsQo4X4ptQXCjTzisbcEJ12cC8AZ3pqgNVXuvUDPLBmEPBzbyQgbrdn3eM5WNnyYmfc8jH",
  "key27": "2vBA6AVF9TquoBN6jQ8GcGkpY2jF5eYhjvMmu4JacP7wTjMiVEJxDWFZBMZ2Ev3W3eVKon5mpLA6RKvLUiEg5M5S",
  "key28": "3gXVK8WWY8wAtdKyKmBmYVwGKy1LKGXSXSHjHy2RZ2seEGKkkLq27j8Vwnq3hBD4M1fZ41mdZPgtDWphAMWjJAjA",
  "key29": "3sPg7WV6zqWsvoVqi2BijyYfS4Wux8LkaLRWReXMUh6nYh2SQboG5fp1yfubS8jwBnjkQ6jAU5AWnWtF4eRMGXEq",
  "key30": "Gkk2z7ZKVcP11UdN49Q286xH1qycNuryT1mZF95aZtbA9kz7R94NVPxGQGBwQEeiG8wh9WivFvuwjorFgdHujsA",
  "key31": "2dQf1SPJnaYevAwCMuRBakuG8pkht3P6LgzZRcsVBDfRorZqFjNLFc3PPRzZerc8hP7YwybM7AJ8iKDm5B5KvcjD",
  "key32": "56Yqbqeun24JCN9ZKm4wmS8Tyj9eeh6JRquJHWQbbTYyQ3Qd4v9W4iKmeq6FsmtfXXUgpsf5T9XjuZEzPCprSW86",
  "key33": "4n1H8EAz5KUFgKiPeJFoRbYKeV1w2ph4Nc6qCEkREjBQAQSnGpQrgN42zXf81PYVc7ocwJaYKh9ocZEJc1foZU8Q",
  "key34": "2ftHW2ERbC5Kudbofy1P9EVWTCNSSi8GMo4sKqe9azbAMqhSSrTvvsf6DHRZySXh3YArHjwdWu9LqJ4vPf1MU8tU",
  "key35": "5ZvYa6TWyEMwB896Twj8q3WZ2PjSC3NCHdkTtRqJaQZLwJLtBYgxKm878faubYDuLKxAjikxW3JWAgfaKzBAqosV",
  "key36": "4vgiW2H6X6eV6EcfrkLVsReUa5UcUPK5M7ATaAXMdyKU8BRA3LEcznXufk6k1qcCyYGXQVs679He33BUd71WXTdr",
  "key37": "2qJMcNZL66uPqtEQ9ZFrqiJyrPrGSwAagzDMKamN9cYp4x6yq3foe4vST13x9Uwb5Zjp1miqeFL5zzsyYvEdvzNu",
  "key38": "jajdNwVsaX2hrhSPg9QDiYPFvjtiudqA71RecdSQwfwfSB25G29kQCvVaxEUx8ekDmvCa7CBZKcTbwdEm6zoJJe",
  "key39": "Np1oQo6PCMG2JJWaZ28N74P1t7uEqhhc9hAnHmphLGEGmYmas525V9SJyhSuLG81EkoujKU72ZoJGD9oCweDwji",
  "key40": "35bzJ2qj2SkwzZi1kNAudLkZCopmdjNTvMvVWszL6fixFzFrpPJycnne5NEe4SSBscCunKYqNTu3amUMGnTFawAe",
  "key41": "iKVj5kwL8FuUYWz1BcSahWZFR77LyZo2xUq7yzcN3LxoH3VsdSrobz3av2xykVCagp76BEDhfgZhjtm4rf4Wj5L",
  "key42": "4XucFeL11Ty28RTYCRXDm5aUx8DCCsGBAKK4Pwj5Pycw9K8ZPbJQh4BcEcL33Nnm1sMxiiv5p88nJuzBP8qG4RUd",
  "key43": "3E7ezpB2gmwyG2PghAvF8hLxXX4azuVaJAMuS7vRFiou5AyDMLoLainNiNcLgn1VJjU3LN2S76iVTyQAJABkB4zZ",
  "key44": "5ZesNoyJf6CicuCkxbDvdGaZDgaoiizSPmHqiqWBph4vqqWJD69bABjgCKumn8y7Woa62f1bEKaZ2co6jdfAZuR9",
  "key45": "5Hg3MrokLKCWgjrGsTEbxXgPUDHGUEZsXLUVqzbYcJjdyACHMFZtejREuVLUqnVhgwLZaK4oZuBBMUGyAgsokFVK",
  "key46": "2NepZ6joZhEDjx5tCutF35taHj2SSbafV7pznD17fTkua952NU9pYCjQN2txB5sdtJ61GDs1hBEtNL7gSCwXU3fr"
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
