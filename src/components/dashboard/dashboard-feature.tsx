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
    "2HjkWaBUTYWagveBvCPwWWg1AY8tvugD9mEjM9YgEsbXUhbFXyuK9oL2Z2vUNt5KM1viy1ZerAVXUTbBV5NgQeSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zaF43xfgi9ykAbX2jzMHEt82zmA4iDJ2t1Vq2MKjXaxhDZFm4Jhb735gtz9t7RyPsv5pWAYbntYcakPEqGps6Jy",
  "key1": "pqsk2YMDzczJGRA1UQTCshHN58ootHW2drrh4vqjQMQQwUEBZhpRTEvHDpWL1DeztuX2dy3dkZySWfkMedGaSpV",
  "key2": "3yyGU6LDYLY5DJDHJqpydcawNwWdAHzTbBcwUcvnrCfweWaNzyEVBBPtsA5EhjAm6oWP8ET1qtkqvk56Dz7Bqpai",
  "key3": "yo9SnLYYCuU7JhDyJf55kL1RPAfShQVCQPEHM8UGwBPcDeKdBHRuHPropoyHJ9oS7pZyBLyiKizedqPsp9YEz9Q",
  "key4": "4ihmQfpDBKLhXs4ywpDgkuP34hP4MpPE3kNVHPHWjEU2UgsJngK7pd5SaZypqxrgU5Fm7nM9mcs1rVuZanJ6vP1a",
  "key5": "3wXnb1zYkwAVC2iwAhd3srLxkqJ4Gp5xudxhL6TZ5DvEJRDPMt22Lgm8jm4ziwbCYycMpEUNw8HzB9px2L4vyfw8",
  "key6": "5u8YuJzxnA6QajUuc3zxXvYjHPLrGsKoHUppekNfGiEF8yNxR4kLJi5KBVgcn5gzkYqmqLarVYUvjWXbMcuHKC4r",
  "key7": "gabWYr3b9oMmzVLv8Rx5Ht5o8osEXbxeD8MqJYn8uNrL9JiW9AWhyRFP26cchXcgqca1ihxUSGoZRcK4Uj1gAR4",
  "key8": "3BKCiKymUxi2C1tRiyCF7nXhSq1qiXJNJwv5cB9jfjzRZuvHakebnpH5xZTmC8nZcuHeQqg6EAFRggEMTLLpm8oF",
  "key9": "398dEXiYczH3TgiDz2FvZYosHjBKhQiDvbgxKhjuD62gv84Ha5DnRkSEy97q7EkG7S1FoRQEcMPcTkLWqTskyTf9",
  "key10": "2s2Hn8UJ9u67oQuDCAGznu6PEaMnQASVoNRSgMDPd3mBGT1psiSnrr9Se8wQjZnpD1g4J3Tq5ZXU7PfdRkNz2BAg",
  "key11": "5ZQJ4a1i5Tn2we6cjj8BHAqBzjKXyyt7tpskqPFwnmouiQHoBek44UXEhViZv4bLWT5UREcwSVNhbQWMpCVtWzZC",
  "key12": "5fb3A7P9YUhGr8iQFXGExseGBMk65WkAKUPMsF4razXkYxz7tho3gMVY2k9HUuvqSDLVzGap9c2hDPWH4EPxvCy9",
  "key13": "3AJjtH6yswWjgVqMrr9nLxNhjxX1eitac7kAheAviw5Asw3tUv5YxTh3oJ6k4cbwiJRQzvQW3H5evvnnowNoAwc",
  "key14": "tzHw7NST59y6njAD2oQRfDxKdF7zB8okVWwDyfEd8BRsH4Aeadw937KJGDj8ankiMsCgcWGgZE62hNEngUhZkGX",
  "key15": "xrGGwiJhwuhSitdz9bARaYG3NaKCxSLGGKkZeinFwXftsnxLKvqipwPYNgcEGeZXmFhb7ECv2jCmT3TqRhkK76e",
  "key16": "2kBbudKTw9mptNoU1r94hWcqTtUUVDXVFfJMpe7ZmPrJVCNRH6DyUzaLjKRipxbZvSn7n95tCzaLBvWC2tk32jWU",
  "key17": "NrsBoMoqcDWdHGprhDNydeTHLxmQhj6b67eK2Xvip3gaYszg6DEPALrpgXToJCYgaKt8DyZvtwW8oqyNTetp68T",
  "key18": "3AiKzDYYS8Bcv7Be7wHCpKJMBkHWnJnjCpBzz73sGLqzG27ERcfqRrenzARFd8RNBksUwhXWtasnvVu2dJ3ZxjrV",
  "key19": "2Hj4auvCbZzPoQt5yWpAh6Uy89Qka9rhMoZBxYxmFEQzbeBuqPCvJA93Ayw3nV5uzY84U1E9n5oVTBozG2EFdYYf",
  "key20": "489GSoRgRQHQUWa81JwrrgcZCD3xCmJYNHEcpBEXZ42LYRHe5ADQUSd7CmMkhu22J9fQrnZAUxBuuyt3yiUqWGmf",
  "key21": "2SV9hnQcvhHbKxXtj9zUPzxHb4qQWmRysoAUekAUBEYzDcahdrwZTH3Fi1c1sW2YVrQacJcwvpE4FpD36pqpA7MB",
  "key22": "4bfAycyqFD9KFVN3azwSkgQkLrPTAae6qarMYh6een9dKHdqNbP2KV2mju48Bn2XX8seEvtZiiQUD8P3D84oGncB",
  "key23": "61uGa1YZj56g6PjHSEppf8ixUcvU4KmJR1ga6yZMDzd4rvMZeyLgZZzCwpadCEEV6TLvPPw3gZbaFQ3xeUhhEuij",
  "key24": "5n7AfbCCfTwsL7WPSVmvTpK8xRzXSh2bWRHTjrPmj6VDvcNvdPvGWZ3Q2nXexpjq9aRnkGDx5NC6LLWSx86FyZp9",
  "key25": "249kB1mhUvRSpyBpJhEfSctEfxrrxhRrSsTcszb5sEpRhvroGwocoYtgBam3GaMWBb5akq24SVhqqjBQj1r6pCkh",
  "key26": "43DQWTcAAV7dwh1GBn3NP4nkWfnU8GuhFCjb4934pK3ix3niweAqHrbVXUPwpcJis9VnBGkjHNB9tMVJVSzXhqNK",
  "key27": "2oDYMJeRMLSFJkeHKqwVVJNd1xEHub4H6KAuN7wSNaowJRCuFYrBfxTNmA42mTiqvLXQe98sbFvroEYatoPe7o5n",
  "key28": "3R5UqP1BqkXMFCUG56PTmJN1na6mAXqe7QWrBgx4QPBvGYFJBoEWMF8dbduuxirbUQCK2aEacm1YCBBN5mWMwSYu",
  "key29": "2Gv7NFnwNkLV4MBXxk5p3aTuujm7p93JQk1BkwUxHbK3P93ZXzxBVS3MvH4A2sVvd8PFVzKSqNsrSrwerWTtX5wd",
  "key30": "4AnBRkJVu9rzRaJ46Ndt3QPveurz8sZtgqqPbg3ew41MXVppWpajapz8V9DiJxqojUcQwFFU6ffXDQcRWDRiVjf9",
  "key31": "5vZj4UbALKPjWn6oEnZDpEnGbA1EyrKCPDRhRMuPCB3SXUG9vvgMcFHCqkkj2rBCrTvpoMavcYBfyAdvZTCEh4PQ",
  "key32": "3gWfKAsmzHgBsLdwqUs4Ubr8Yt64Cfxg2MkeUGrCrBD5gk8c48quKLGRGtXfoDqDVvjQi5v5s6Vub9LQNZRfmDwt",
  "key33": "4deY3rYhJ342F24eQbPq2BdRJ5c5vEdoPDrDcyHj3u85p5Exr8zAw7VjwBC1g3Vp7mXzWpC1hZ9Ckjm6eTpUsbeY",
  "key34": "3TG4u4nmyDJSPtcm4oYi6kmr2DnffUW6UfZufhpBaMnigBg45z3w7Lv1VkjPu3KQGz4ntK2GuCA73JzaTjuuE3CR",
  "key35": "4TM97AtA32TVGRchGx7wt6emz7h38178RH97Vb8Kyj74k6mshRQN8AWWJysqmnaVSM2PzXG4kEH6C3mRJB1UKFMb",
  "key36": "Pft3AmYGUumXZQWerfXMg8i8oAhwjcSAw9khJXVLhqSku3RLrKJspV2A6KeSDAx1HDxfe6Mzj8JRKTjMz5tWqsW",
  "key37": "suaqgj2TaT97SGdrXsqseN9zjH4ZcsihFSDZ7KNcaEJrRkeEpJ2HMNyZSG1DtHJfJAXcYpckmYcHKhkDeH9jSZi",
  "key38": "43iPJzsqGKE8m7QshHTcUbxeDjwNLwk1FewujpKRi9HWkkuB6gD25sYe1b9rP6ee98ZdSTEPYqxd35bFECCF5FZV",
  "key39": "2fC8GATo5ce7bju1JXTDv6GeN2mzBtSqNbh1GVatjWLye1XY8CdCXMmQVxtDAKqCgH1u2yYT5YjvBQHKZcTbMVr7",
  "key40": "2MmXMYfAbxAL2BHYFZJNBngFXQ57txTKpp8QZkyKUk1tHWdhAwysTdLakeEDHjSScQ7D8KgfMFMKze57a34qRGQV",
  "key41": "hMg87anPzjSR7GitVeTu9oXDjqoHumyPpNVztAd3x4FGrzWJTfYYDRp1cF8wsk5G4ZUVWXU6Bez7BZ4E97mo8Zi",
  "key42": "WL2CM6NzNFDyCbAcydyj1S1pPRttdvZt6aCt31u3QDLRHJpnVPsfCTCNmmMPTFy3CYeyoNG9NwgFZxXt7ExezAg",
  "key43": "y5YGyaoM2adJXkmceQGNxdw4cuQjTw3LRbdttwzxdKRACcSwNEVU7GPPtajhi82viNxaUuFmVB1A5SJGtQTxnfJ",
  "key44": "5gNcuBQEhih9jk1jbZsRx4U9fMi6HJNzhQSuuDRmbxsEnetPD6vbA6fnuZf82x8awTDEZC4vMig34RyzYcY4u2xW",
  "key45": "3woS995oT4X3wuA7EwapKnoainsX3MdCX4dj2dUrfiRYAixefeVSxenGxS1SeXuYhkQ98uHzzJJg7dVg9RgFRUKu",
  "key46": "3C8xarR7qKDyq1fxB18czhydTxJnQmG4MNYsoKSnJjcA7to56DB2eTKrRtpX7x9zfDDQ5UivjPRgYLSizBnZ7FGf",
  "key47": "3D6rtDUVjjEeL2MZ35255kKpTre4cC7kqEsrwjbu4Duho2u83W34UoBafspKQpMboynD71oAZU5ppvV1PNjcTzBc",
  "key48": "5kiSb9TXT2zMnTa4ALeTDYUk77Efpfmcjy6HVMHXXxwKPk9Q6KSaspnTGT6VoLSESqakjEat1RN8TY35Z4BiAFSV",
  "key49": "YmNqtzpm37icF1UyBc81ocXs4edrB21uyyS9byhmY4yE6BPHCj42mB8QSiXihQ3cG9XQyJZQRJJceZCPc9dNBKJ"
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
