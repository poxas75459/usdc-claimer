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
    "qe7w2Gvj4bZduW6JijqLYTHiN8gZpuh4yAACdUeu3BuJguorXzibgo6tkdpcmZ5dddeonoxV7wg8B1twu9TZp6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fxLgkraYrELSbWfRHPXEgbmYD7JZoaHpF1p1ob7ofg5LdMpuEWHGfJ6gK9XHXuWdUXHMQBwxJctm2SV2Ntw1fmf",
  "key1": "3xMwFr6KfQK8kk32G85niWr41amHERyk4ZmUE8Z9ZZ7F7fmx2Ji4o4d9UujMCvDLXrTfywMcggH6jnzzV6fg4LcA",
  "key2": "hwqV5gq4Nh3ao6z8ZLJLPc2bVq48y7PnTGgM768K3x9f641A6HJBWDdBQnDQxqxxv27NwBDmK4AGoxqWqa5BUZp",
  "key3": "2cXh64WASWCq5P5bwyt1PnahAZis39ieXKxuQLvvqrPnAQYF8EGDmr3qK5ce1YorDVB1aCz1U4a6dppFmsSvWio5",
  "key4": "4mevMeS7EmCG3TUGLgmFjV9Jptnyz6tfW4bHS1uiQmqWGdQd13UDCH5ManDjgdTYYaCP3bGUAyD2VfLNB5cWZUYW",
  "key5": "4WYpd1rp4JHR3TNtmL9ZecAdnR4tAg1g1FkKLPEsL5ReijixQ2KZeY1ugXQq823abFB1AT6rLcrj2WzMQh6dgk4V",
  "key6": "ooh8pU7MwRK4qeVo2xEsK7Mw8pU1ekDXrzQGeJQbueJQC8XvCM9MbREG1QwotJJJ4ZcJ9vHeicYafRNitZNzUmW",
  "key7": "4m37WxnrRU96nAqiQbuTkN39kenwQPLxQYMhUPKGt9p4jy4KLqVUvgcWvdj1vHMxhRqhHjoCLah36XNhdFgy7NYg",
  "key8": "2HTmmMdzmNoxzyT5Gx7ThDb6Ht2Gdfuyu8Wmvrf87x1X8DkWPyxJjUMqzBsaqDZJ1Q2ezAnwrVoA5PJbRDGbyNR1",
  "key9": "61NMzvpa9Ur8szTZNsRDTiXC6f2RnmfYpjwDuZUTRuxeFWSoh8Gwa5PhvPLuQKJiajm5qDs7xMRQgjCV7ApxDWym",
  "key10": "2ADDx4or3QzbrGhgbTXuFx97VCVYKgRXcPfYkZppfLDwd4bs23MECEiasXYZVSDmhsvz51pznwXJVPvVGD3NfvCN",
  "key11": "KKZ8XHbAnWVFHnpcfKTaDMN5V5mJ4c9KjfH1qq693DFz5aTDzvWwmLZ6idn3YGgi69A8UokxxbY6W4w8qEYcxFP",
  "key12": "2SKsbME2JTThn4NnFyBXN911114E9ZavCmN5gcn8VPk3MJPEfCMUkXHEMh89dyC6KCbRpNHE19Qi3Mmaumgefpep",
  "key13": "HWPt29cMU3Rm3TA4rsDrGpxK3JgzGiJvm4GAoTfq749XpqSARDa9s1AE7qZz26MHGRz5uSi65SKESrBfWSwEHjQ",
  "key14": "5h9KtcBvFENKq1Ej8PPSrt3fQjSfRbZChXtp8i2yXqMFPCDyU9xJVJ6Bdhg3GawiH3NGYHRCuxvt9gt8Aqs8hf2Z",
  "key15": "4XxUbixqXgtXtojbbVQcnbzwMSNG15BzRxqEauGGr2PAHq32RbMecGnCtKtEQVd21Yh2HL39MLjqcA5QDdhYSrZo",
  "key16": "41B4VwggiXUfEaPukyCFLYuF9WeK37kaEsBjuLGLdX3vqiiVWjArfQSMHNa3PqdJWrzYorAavNRjBGTCx4vxNGZL",
  "key17": "4WUtx1HbsoBiKFeHFqUh5eQswvuwhzM4a6wJ8j1NHeoX4oSk84A4ATwVtFNKeviLcAdXNrsNsYF8e2odqHx3xcVL",
  "key18": "4coiXD3xmKYwCTK1r5yMUpZrFggPoSh1qrpJwKTnf1RUaz1tTfbPJoBJjgN2MtoajoQYPFejXVGsmKgvZKBPWQ9N",
  "key19": "4Ezs5wt3Ec2shU7UN7KDzxm36tYJzuJYtTEtLTWm4fPmqrBrnxt1Y1yXz2P2xXhb52VfoZ1xKqmQqDwc64RBWwW7",
  "key20": "45Rfd2VAViLccm6B1zqmqJBizwrV3QvAwjAzAKdNgdpgayKj1DYxg85ahjL8jgEcMiZebPUgVM4HefhXWLaeiZa",
  "key21": "3UHK2zbQcUAHzWHDCHahQXPxYpnfYeBRW4xR85hUSJ9KgJaPgMCjxE5Uek88GJbdF4GW7HGP1xMw15sHEwApT8RG",
  "key22": "2g6MePY9ycAzCKSehaXy82WdZdQUchLvW7aoAqcbK6xByvsLo2u3tEGKgjRyLFFcJf2k5vExsLXdH2joSmbLMf7q",
  "key23": "5G6u1GLguUjHuqWcNXzc8Fz4RkYJuNpWCxLv86bi3z3qEMcjaKg9JZQPFtjD6vsQYhkNrxFPqh54dnvEUK1XwZDc",
  "key24": "ccKMEhcKEQSctm2547NgQCLdiFuABiDqnvojGnzQLbsUYjbJEKVyFT1fzdJNPfXGQcp2c9tRPgySdbhqFyeJ35A",
  "key25": "3P6pyuKc21sftMpKau3Syo4kywQ76vkLaLCRCPr5kiHoL5CxHHt5TADqmvEZL3pSzBymZNishnxkPddrM5cXZwAK",
  "key26": "3KTFmWZqyjntYGLoCD26RncSGpQWTtNNJsh93Uoondp9737WgCTgNhhG53wPEs43tKNQdoV15KXHac5X7KwYJaKk",
  "key27": "51RAbXRJr3Sg9sADu6k9vD73SbnBUyZqpoibUHVUkdj6QvEj22M9DSuLZ9TusB613cWVkAq6vBQE7wLj71iHU7yz",
  "key28": "4598inNkvAGNKzRLY9ZSyCZZdjvh5PQhZvCbvEJjBj1t87NHmkFEUXPgvQiVgzXieHf6bmTRG8ABgabrGFzFRdBj",
  "key29": "32jE4UfW4ENjgM4rN2bPcmV8KbqaDtCSJeDgVaBL8FpEyAVDyViHAAiMGtsgbF1xKH5Mgxy3YhBsUpGd5a92T9ht",
  "key30": "3vTnpqkDDhULbqN8D6wQTQCYWeq522GsN8h6uqU73gqpEqb92j3X4qi57C8WBqaeCCieUZFjoxBFtAFKzYPT4UTw",
  "key31": "2GmhBZ1XorhBsLV8sepJt4vkcPyG24TpkT5RzAaePzcA2rq94ncE6Tsf2QvAq8tXaQTo8Cdt8oyPh7oFPMpKV31c",
  "key32": "2DYuhvyNMJ49b8nhKinUJ7qfhHKRyM234G1ZxeXoX2k5vcN9EnAX8EinvUv99cyAUBNLYaY6awx7cTpBGKnXpK59",
  "key33": "48CxEpWFqHdThyP8twQQ1QLurwJjrzBwiUE523cAafLdShYdEuXqpYxXxUeM3JQvzBjJHDZfy9WqxFKYaRnZqCRV",
  "key34": "3mWuEg9npBgF9gmLF3XeJYSMUmzAwcH7pjgXLP6KskRn6c9LY4mvKzRb5DbuL8uGP1ggq355AtkhQ9CZuVWEDmUz",
  "key35": "3sf7kTmcBRrLK7PPzXi6KDgKj1orkgiBxzi5ZTeRXSqQv6R6gdJsV9USaejoU1cmPiKiJsu5kfnL22WG86x7HT1k",
  "key36": "3FKEXuZCKcWFimqfq4NCr67DhuLhsniJKuZyg6EcXCUxYrJAFfy777PHt116zFgjvzrYMnQki1h5ML7TEBSfSLQ2",
  "key37": "3ad6iFE6NiRxTBjSoV4Qh1eDCjHJZH9KUpPXnFNtK2dWnm45AernLBTq1Mt8erxeDGUJFAeqA44DDSNi5qhiiESq",
  "key38": "4kYAdGLe92RG5u9MJpEa1nwYeeQ25ZoFCMbDAjbNU4H6c71SP73SLQm1TokEAo5Tt6Q5tifBtQgNhiVxDAZofzhu",
  "key39": "4u2a45PfvBUr7mHNvdpwFfX5HD2go27i2UZwAtndCkdf4fRCtrEEgHphCtv435QBF7Zqmp46NdHWsYA3J6sJBcb5",
  "key40": "1tqmQ7SeFdUofZiZmYJkTuxMSLGKbxphatRciGsjzhcM5WkHEUCaQXzLurDF8PMSUD9aBkwcjVwv5e9etETuR4y",
  "key41": "21tCQdQhtdEHrYVBdq4vAv6a6ZVhr8f6sHx94mrAkEEhD4WNSqbEbmgn51w7gNg6SxGf9khtxvh1aeYY4xadA9Lr",
  "key42": "4bZSWRBy8L8xm71L7a7VQ5fBznueWMXQTpksJ3wo294NKktmMoR5SQ3rjnoPSRqKvxkM3z8HjvjWFvoL7G24zwo2",
  "key43": "3MyJWioXynGEz1oHGFcFuQVSzxN5fqh5Z7cHYzFsvEkf34swuDHXXHXG2fu1GKh8fUwA9JLiiExCZnYcjwByPAU4",
  "key44": "22ipAyz8ydhm6WmttNe183pihwMs3XHvZFLfNTuLbj9dkuC32NrCoCsQmr2L92mFCq9sKLEHTR5Mn1Zz8reFoH3P",
  "key45": "4Hv24158VVHwjn3pmWnjXgN3Lhd68qtZhLzvegitnnTMh9UJdQTwAhEcjn1jdP6JXpFxZngCdG93NzGUoLLYhWKc",
  "key46": "4Uk8WNqnfS8VQSCs4Zc95VMYd6qc5b8DyM8cEZawYMi2RmgFsQ3E9spGNDHj66NYaVR8MmfLQGFZzuWbibX5ajv3",
  "key47": "4vMD1NbGhj7BzXns6CKrxQAC4wVssiCzDYSB5sJ8pKy92be5YyphAUxnzbRW3WCQpQB34u5cAfqpHu3Z8URLmWe6",
  "key48": "24KAYNHDvpTzeFQn6pQhXfZ4qB9NkZ4XPWc3NosqTkCRCmbaUu3iPW7YNbvnXDWF3oVWGDaoR7Q8K9PAmbmM1wue",
  "key49": "3oTnmf8ZvbhTQ8NrJmubSax5SqrV9G5CRD9qwSoYVBzzFGRt5YFRxspE8LpaWLaLn1xUXXgkqY9dQ456hVegnjhM"
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
