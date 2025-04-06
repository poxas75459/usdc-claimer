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
    "38W8D9Nv5D7XsPny2Kh41soMXk79dmSHrmY3dDeXQNFandtsk4NeN9YRby9nGursjGYnAeP2Xny8q5vmLfeutwEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZBfCeDxqqvmL29wmrU2SH9wZqddeM6aHBmPTyLrx6N8S2WgGjETSFLac22Pfvq3XPMdZPUwGWUJQ3uQHQ3aN7c",
  "key1": "yP2bW198A3bneCha885c6CWMCbYx4vYzT1ekmrDA1VaQCS3gj8TLVvSN4PUWZDS54FiiRZu8bdY3iFBYG79QM3P",
  "key2": "SEn8wKWEmDpZJM3miEhpzDNmthbrRDRwjXPdkz5xjmBdNEM7WgkrnWJTtc7tawRCbiFz9u5nJ9xDQ4XM4Hsk6N9",
  "key3": "4yiEi6RokbGE7UBSWNt6ew2HbBMWGDvYtFw5Q84uBUnJqsCQjgpiGV5VPvYexHkrAofpxiFi8R5fA1H8zCrNLPD1",
  "key4": "3Krk1CXzrKhpwQRkgCx22ihxxhMJKVVStox1omv41j3HkPznN3P8wTrmb7bUqCFB1YXvYHz6jUKVbYAe6DfsesxX",
  "key5": "3RLrDJqXmbnGcgE4nobAokhMQPZ1H5r5h3B4wpehuXkpwZSyvtp8UkBrVWvW6NK5XLy9T1o6n2ZpekDULWiQe9bB",
  "key6": "Sy85iDPHuAgTrPdLDGHRAss4i7hw9TH2MoGeFhkvZXc1eNJj3TDkvVXL48YJquamyyRAUPxKByaZfLSSj7CMVvV",
  "key7": "3LbDZpLzawv46U7jTGNq3WEMS8MZJhmF4QicWDdLfBgshskgMfYbsK7A9p9yLnh86w5GP6bFpFAbsWADhHegfQM",
  "key8": "5Z7MuCDuyBCA3dtvPZzNqCfExQiZB6Ah7zwjCLdCvDWZZ2yy61Xo9k4aiFYkfywTgixSJHLqguwyrTXnmQgYJQSt",
  "key9": "2n5iXv7XiNztbFQ2rpSoFzAtwMUt9KjRTHngmzkLNpFhadfwcSs58mY8CH4SLC8tvk1qq2ZYewtPZK8Z5YT5psUZ",
  "key10": "42Jp28hjQbTEiBxqEaBEBCbZFdkKqdAHTncyNQEwjLRYfX9gJaDUAunR7opH8NRzyXQ6LXb6GrcvRknabgrh3LeQ",
  "key11": "Zq4CxiZuC858QeogRkJwwovTrCUFiaCm6QJKjgvQQUjoU6Qxgm2xRW3eULYNVDpnX1Bo2KFWz46T16hg5hKK6tP",
  "key12": "4nrJfT44FDn9VVXjadB33PjPWzmsuSA73YDqJY2noFzGTm274jJ3jZTCiZb2uDaTd7A74gWJwadx4GDZKRwdT5Kv",
  "key13": "CwEBcS8A6ePyy3R7wkianTpRWrX1pwdYSxz2NGEPTKtrRyMhKnAoEXXs42T8p84hYpBz6pZPVnX67hE1wEE8DLG",
  "key14": "5jHya37sTcDvNp1zsoEvBnTeHM5bQ2kpqye5DnTfC4hW6TeiqzvxxnUZLnECSp2CSrs9N3cftBo8pV6oM4WMnaKg",
  "key15": "2kiBC6f3ZVJPcDJgKem5CXdsdujRfszwed44y3X3nv5UXg21y9SjEry6Z9LDX4FJUGf9jW2NK9BTVXrijaExbvL6",
  "key16": "jopp7vvoX8NBAgt82VGGE6G88t5uEKYueS99NXWJRX4WDNyuKH55jhELBpia8iZ6jGGxkyDRuTrB3KgTW4Lgeto",
  "key17": "3ia6YJLdSH3ugKsJpE2UwQ9G2h1Z6MygeGpEGPt1XsvntYZjZ21ATkBbmXXSW4rCpjrChWrjvS9xZwZm6jP36os1",
  "key18": "5sPFT9CSV69UMSKCS8Bi7Hx5aWeE1PUV81P3Drkc8vg1A14kQt23Ku2uf2vfHWHE59RUKq6wGeRyC4sHRa6zQvSQ",
  "key19": "1JdoXCSVjsqWvH2FTTif3oq8yamvFjeDPDeiA2vLffR9ZM1SUnmKnQRy8AArKGzHQxXD6REkJxFzUegiHXgqvbo",
  "key20": "rYKxBZygAi2AwLLETntgPcmwCT7u6KQgbnshRdmYf2ZkqWip5pgsJdo1EuMwfo9uVpo2wfAnpVJnP7A6G76qNVv",
  "key21": "212K19zaVY1a4CoiSmaSyGHiS73igomBvocFVfvknErvDN4PxDS8zW4MY3GHoYsznTddMQs2Jeh5HMbXbLP673fp",
  "key22": "2eYyP43ih5gzi6L2DzUzbH2j3pk4JmKnSTrFLsjYHMAhBfFUaHg8Cxcrt77XqNPXwVrjmNTGFs8b2rFGjtU78LSS",
  "key23": "2uJPJpDWi5zPDw93c2YfMe4HLQPZkAVjqmKEF9QbxB4rPJYeRcLoAjSzUtvGvtHWJM5bhGA9oNoNhJzdyzhf7nAz",
  "key24": "y6KZwzoNGH57DpYTydLNLaGpFcGtyQ5UoqnoBQgZPckTsS9BsJsUk21hnobc1SRRHsAt22stZkAXnEewqefHMWb",
  "key25": "3658pHFcrws5Cw5W1KG6x58RJ4fq6i3idB5ULXSC88yREXqMmLxW52iVZrdUq3ZQShbYpu1ZsFQVQVUgARSd42Ki",
  "key26": "48ePFUkmqyVZyovuQ63RWiDBtr9JQPbxAEwaBkHiJqD9YGq9BLmtcmZ1697V9SQndVm5xbN9SaTS1nwVS1MJX1jt",
  "key27": "2UkCNvsJRMyjuYcmGWdrzGWiyU5XrXM2ruY9XxFTFBoPFmNYNVz1f99U8UHTerQ6rJo4EnE2NCYfF9zt4PTrjcF",
  "key28": "39Fja1XunNaFkSvQr3E6WPEr1CPU66qjSSkN5nqoEetVQZ9kz5NMXgBMRCvjJAeVswdKZ9hxyU9NGcCxW8bLwYJW",
  "key29": "4Uq13gCoBqEJEZHTuHXvdXpBqZjs47oWLCaTCXs7NtpxY5Cq2JfF2XNHfPo1DCwBVCYSCbk2a9orsA2GKE8dEAKW",
  "key30": "5WkDCD1BkEwuRUSmTEYKJ1hffUXpHowxA3fzmPQt6xY8MA2wmwBofk9WYjyLSDMxQ9XXJJg2uYjLrMd7zzQX4q3P",
  "key31": "uAtzZyNbUbifK9Nw3BjFdotdBQjXiEpA8sZtKzML3W5ixTEbGZBk6RmqKqVAxjAPRncHc1JGUpnzWNDBKTfsVE2",
  "key32": "4F5aRLLjVSCbuoMNnijUURkhxVCzaZQnsbxcsxpnaJZoAsQkRu5u6jfSdEzthi5WLuWEak8C8nV2xpyLtkBe2Cup",
  "key33": "3NLVn3FzVGJFLgVWTutPfou3hwUfmwtXwFxn91WFz1UXXbDNSd63RsimXGmcUXP57uKnE8dmKhvKU9s1PKKuyNdg",
  "key34": "5ntpqUo4aYm7JmR7j1CVi1FMpb2btBNA74snnvbzFkAkGAMyjiiEKk8xnWaphtzFteUenoniuc7n4bbAqMGMLJf3",
  "key35": "2Ld9mZvZXRrKHBMJACwqzTHSbG4VEfWyXCFYuPTS4XxwL9vRH61Ney8nBm3CgcjybGgRJzxxVw5pmyJoxuE6o8HA",
  "key36": "5MSMG71sXrFf1GpP1je4CBk5RrybN35rxzecK1obK5aue4QXxnVFDgArThy9qkjJLZ3rMaGpEHyHsbovVBHUP7VR",
  "key37": "5WiZen1BB4cXvjUUAJxZFzGimmNzuAJCeT9DrgrnkvsVn4MXKA2RW9CU95NmXoyMFmLZC2AsEBnb1uQEUCPh2RZF",
  "key38": "2J7fpfHtCLqYG9vRKqh99ApW5EvWdtkpx5DKFYvvwKKNL4G5RwiaMQ5p7bRkiJnPAM2mWSPKg293MJgxRJiAKGPZ",
  "key39": "2S1Yh15oAFNzu6XQo6tNiGTu1Ac3U1v8GyBh5ERqD3TfQjvmjWik7WFdvMNGn9JDpW6gFTqdJVetWECxjTK98bsD",
  "key40": "5VEYdac5H71krzwFoLk8uywGwVMRMZ3rVgViZzwEofyQ65kGyYJpxwidQZk1NVxcDkrkPEQc1hEujXAdwnJdXSNL",
  "key41": "4ge33GTjQT4BW19RRqSxCTPMtwvNmHV5pbA8XZJ4YLiYUTxE3JZkrt7xjx2XHKdonKNZxNuPFi4hxSiGHqzVHDvp",
  "key42": "2jYPPKbBdtvvGs8WsDzqwZRmY6H7is9PbdFnJakEoTf6a1am5XV3AowYScnsMxsmRaRb3GdwiXpwtJ3ECku8KCwm",
  "key43": "2rySfHNPi4gZVWnSME4f1puMQBKW6geL1BZc3EggCD1MGbH61FDSThESdJaWfEp6Bu7ExAjFerZHb4SP23zY1E6g"
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
