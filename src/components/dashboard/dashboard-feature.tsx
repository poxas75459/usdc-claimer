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
    "64CjXChBwagPQ1QrHEhi5QMj3vYoLcmDbdbuoEkz9jwfJ6vqyF6ujFD8jQjJ6Vh5HRVgFAvk1pRXkHsUuQbUqPTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3veyjBxwCQaB6Ar8vnGYiNaDu7jXkyJK7ANZkuA3NACnyR2bjmpBCiaj35ERzmGoPZF5D7167eqsZVts1XFQrhV2",
  "key1": "42wYbfYTXUo3Zhbom1pDQJe1M5JkNStm8Hzit3hhHKWPT1HWVKjpQ4PXU4TCXPhDgJq4xd99TJ8aiGNZv6UPmdnW",
  "key2": "4djEejA7xqkzxuqjQMjSHp7EJN2E8cSQADn8mQq5ZHMBcAAckbBq4KKHt2oGVN64cHBTXDZKbBFhAcUJFBWR7Kwb",
  "key3": "6511p7ujN2K9g5NhxqyVy4nDCJ3nozY9SF7tyay1KJ8CfAL5EGRFAR82iezrV5iZ7tdgf71cbJ11E4Q9ShVVht1N",
  "key4": "586aEpUpaBi4knjcaoWfD6sTzbQMjDtrJSnnx4gTa6fucesgseocwhvJ2HjCc1oqPFpwMDKXrSA7Ki5Rsh4ob464",
  "key5": "35toTcq394UvMAyeboX4Z5M6ULxjrjRCVdYgtqMqiDXHXYVBVVbgMwQpsKDCzi76t8DGCxg4k5XM36vSYZeNtefQ",
  "key6": "y53S8epDi949MwbuZy8yqbEYdGD4KEUBqbcJ36hWcVrR4Qt6TNutwjpzEk4MhneYw94D4nouKLn1emJGRktMH49",
  "key7": "2tWMgcSvWSfU6XmT5VABX2mf6TMpPzShKhX1XBrc2npwHwpdRU6dsFcWtCnYwaHcyxFzVcqp2yyFG1Efhe1nesyG",
  "key8": "VDRyNruT4heVKGc5Xm6eBKy7szXVxrpGLE1QieiqbaEodSCpCjCNWsEr7UhZKGxY4rxXwSopAWLRR5NV1JhaKKb",
  "key9": "2U8EXLPJJNimSHutfJKSncTF1UoZzRD9vwj1VcJMX3aR3qrzLzhdn2hPCLMM6V7K8W3F3i2JfV12sKjm7TFCf1yA",
  "key10": "EBkpf4fV87EzGHcjcCTKkpVCsGPMs13UW3pkThQu4Qj2WFZ6PWokqbwhMdS5yzE8h2PA2LDv7yaxjY1hBAKwzYp",
  "key11": "2JMhDQsTfZ8XvLtWBBBoMUZqMtMoJKm7NX8czJGURt8pyJAJo17nC3iMS2koRngM9xHrYhFU2v1VZ9GqdJ9nZrdb",
  "key12": "32Gx9NBZ43iJBw8HjFFA1Zw7Y2yZF4zsDBh2KUEwZsa9A4CB4ARDk938icF4Rn5iWr5Kxif7mCiWknazdqKzvryh",
  "key13": "4mHCgdEAqEP1RDrnTPP6Yy5ocZoFt4av8t8sz4eBoJKDnToJefZVJd4kyrciZGP7vzRfi2qS7DSUDFVS2Xsfngve",
  "key14": "62WHLujybZDMrWqkrpdzP2q7cSNygrkWg8PuUfyPXt6BAmrdv1Squxye5u2r6JfkUwjTrfbKWAw2JQgARjSdvKzp",
  "key15": "55vnmsiPoRkSnM7PdyYXKX3KpE8CcdgsnyUXMzfhoVkThH5K15TVfyjSrztWpj4YqZBxsgbXKAXeNhRdvrJ8TpdE",
  "key16": "2ygVoYxozxpszpipCa5jn1hxykpz4x8KjT8v6zEuDFkfFpBNjoNHDhrVwXAtcjm4gwdBRJ6nXaasfwUtuuGS9ezd",
  "key17": "64sE2STE6vqYvfToVnUD1bN4jsmuF6fNVntY5roQpdjkEtHZJpHBAGwgGENgaYbrjmLxyHh7xe1iccUWp7eArENL",
  "key18": "5Fx5fqVo3eoiioL24ZjdSp9TgQKEPCrVoCsXVvT2PfzYfmkxVrq5FFjhMRMc9pfgdT8H6u9W7aePbC9JQXEAGgqC",
  "key19": "2J3qEB6K3dvmbkcTmbUPhBN8B7NQo6Fq4CSJXqaqWrTwMB8R8wvsfZJLJvmPVAjMVBWBKUhEiD4iuAohiMBkcG2B",
  "key20": "4tibbEpisvZh91jxCnmhwdwVPbTYCQinRezD5HrG6bLJULq83XVi13iWsExWxpEt3ZkJjUEfxrKRSRpXDbunjaJ5",
  "key21": "4puY42c56vu1ZWPzpwq13GtN6ZsJ8EU34AHsnAQdMWDxyBrk9QxC2RQAodRuNwH69yFPTDiDWVkoogDBsuJNCKdM",
  "key22": "5x3vXVapoPfrLGjEhiC3vCmVzGMQmibPzQCioThRf7YWHgAxS2bXCHKzVTe5Z2PWozv6144NRSvStmABcvNmPHvL",
  "key23": "ixjaFES272VV3xAxuRoXqn9s4iXQZnidLkLbsJHxLddChsFNVP4u6LiHF2L4raHHjgynkmrMzWtwbknnpp4jWEm",
  "key24": "3GriGcN5ABjZxoU3ewiPz75yFCa5L7j8Lwb5aBmKyR7c8LoEHH8z4Km1b8RJixRszYhdW8CKEY8G3GkQTjafMhhf",
  "key25": "3Cmk4LFSfHixReJDjnWSsXaKoPGcATf4PzNNu564ELXVZtK62FSQDbmmR3ZyuXTX6bYNfdGG3drPUqv7axJNWn4z",
  "key26": "3qdExuRhiUeNhaDQm79cZWgK2BakjuhL8YBHkCXX4qn95n9xS41iFjAmrfA7DXhXb9rhwmtjK2uuzDCJffDGRCyp",
  "key27": "3owieDiuY97fVBTqx7i4BaN72C8euZbU17ZDt6ziZrBRaVyeroyfeVZWd8DNM55bJ59dAHeW9szT3Fc8kGV2yP3o",
  "key28": "2nAE3cVvdkAHJjGj5NNnqJuS3NuUkadvKHLLbS7BFz2DEAe1Cp4bvMNQrg9vyrR31yw7d1ZtrN6u4Lr6CWCg9QNm",
  "key29": "2aVsriMAFHqbBKvGs59EaAiPKB5nmbzyhGA8FgioyqWzM2kUKkdCdvHDZ5Bnr6jPBdztwDS7JhsTmdnhT9UtXCLV",
  "key30": "2WDS1FhYazi3YGqTmrDHgPRFXR5WQ3JZcyhhMFyL3eLT7t2aHCmRbRM1wSi8TPTKnYj5WSNUHrsKuz9LetsGvvJm",
  "key31": "4WvzavkA4PGcwUu6ZxYdrgzrZdrsxy3q7hPKraT8FRBNB2aVzwRHhvgJrQVjienrqirdsLgxuVhxcmdLj6rUUzju",
  "key32": "2p5F63PDdtainBobyKtSoVLC1RyphSebx57Tqoz1uFvHjg1MgP4Bo8CoYGLbmfvFGqNkrRwxZAn5T7gnNxy61g2",
  "key33": "4jthuJVweAzr3ujefC4UzkM36rRuNkJvEeVvEBGZjYykmeekNgmaD42W1vYjUrWv83Mzp6hbKPRxQPnLNPJ81icC",
  "key34": "5odFH5MffC8u2EhoGVycHyP2tZ6C4ALixLZdutFruuMnbQcLPgeG9rrNBrLPQhiKtY8JmxY4zpAVax84NxjNnhQD",
  "key35": "F41jjikqCYae3YHnk4npTP8kiUdsNYbLFsrobWexG6adZ7uJamnUWFrJaC8xnWndZvFz7FPWZ3ocvNKC2yBXSXC",
  "key36": "aAPBPukeySC4J6HbPmPrAKyKFnMdHGvrshNAFpcXtJMngQPuTxKxvZykbsScuaGZ6ihY3bcVHTcbTCCoTB1edeV",
  "key37": "2fzEwZZSkE5ShvgkpSycHhwboarWUw2gbegJcJP6Jw7JcmiYtVBvqqz8NEvFKuXoosD5meQkn5fmnofVKrujuLc3",
  "key38": "3UDx7yiewcAYBMswTSfiReW5ipBSD5Um9Jjiwc6KzLCjw3WXkXwhgoporNm8rHbaTg9Nya5fhHkJk57CxMgX3PZa",
  "key39": "26a61FD9qBKezM8qPtpoB1Qw2gEy9D5yPPw55tfbtaYxBKLshsi3mM8QgcWn5rceki3CgYiRD6x3iLUyrvkndhvY"
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
