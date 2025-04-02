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
    "3i66zt3hozzB8cATVXc1VUxkHbxgetRbsATBppYU95WZQSqKA4bS7dsKP5zjPML4spW4nYzTcCQkLs37iZ7JxNZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wmn3RDBp91EvEwYyNSd3AtyqF57wPn4nkctQnWWgczsZ8d95JH3Rz1R8nEBKqcWHSiF92YxLxVZHN6z5Kn4UPsf",
  "key1": "48M6KAngbKwhJiSApJ4VUCkA25GRMJSDjSe7MMD8C1DNSajXQfKZWCd4ukVK2ghBXvNdKKEhr2RRBvyNomuLogFs",
  "key2": "2QSVhnMhKHsHMpuZis14ayB2SY1wLJGsHaPGYojmAQrKjLiwsoWE9GKDPCWpgaVExGa2KfcpGHoaqSJchdv8se43",
  "key3": "5A51LScjcH58XG855KbZu1bzeACP8GSoCRZ4m1abk6Y3uheWoXVwVw8GzPS158UoAY9Gz9Cwo653HVNk7x4GtCGz",
  "key4": "5n1T9v9tQHBknj5WGDCXQiCcyG9NzG8bjfqn7cHq7RUdo8UK34fLom31U3WqarCqpTJmD6v9rm7yCtZHCaBQgKpp",
  "key5": "4gFsEj1hJXcCtjH9nLwqRj25AnY7EUAbN8WGhB8bL5v6LRqamTCFxFH9DPRjZ6Q9x7GpCkojf6QfdSi4Dmfv1hnK",
  "key6": "4CVrBrzcULNETXpM6AsDSHHAEZN9vtTxw1YN7brWdTQQSzPY8uzZJes2YthZ2Jw6K2mEDMeW7x6bVnW942Sq3zq4",
  "key7": "37HVFbJinwykWfMvdsygrSFd3v9RcoFwhhQUwiPAb65EZNrgzfkHqMks22Y1ALNhokEPZnDcL8hyzrck8hpPiYnq",
  "key8": "2Qowpof8SyYdNfuMyVkeFeErhZ7Scyh6uXyfUrj3AjnAmgBhP4NQvr3ceoQcRupA8wsa9Dv33ZvwvdhszWznbwnF",
  "key9": "vtSFUupyAn98a2oipGXRcbXd8AYwFoAQaxkG8dk7xDe1jniAqbNZU75PhnbjFgMURmxnaqeMUPiihsGLZ8QF2Be",
  "key10": "TTqmt4TAptkpdcMJRRDcoHvJZviF3hrnzvgM81DhrYcWGnenGSBaM7AXmE4JT1vi6HZSXUa1SjjcfEG2yiwL46H",
  "key11": "EEN8KdkJa8bXYymyJRfyxGzfQ4PPxEoSpTSmWZSr6FMZFUeKji19VMF7eabsxYVPMt7Ed7VoWzYiuD4wR6gSqMK",
  "key12": "2iBGYGnQKhLvfSbSZXHUxjuVJa7qhvdNyNa2ac1hXfFZL6wERb8rBF7UGnsgf31D17nNFqzoFUNoJKJdqVCxNdn7",
  "key13": "4LZr6bv3TY4gjEhC1m3pNDovH4qftUV848tM79wpMoujFvS1YaErjSBXrGueVWPZ1kZ6Hn7cMBWLdHgpjs4kYBkW",
  "key14": "4uXLEGbdXJqCGJpu1Vb7qeAmGiNpGy5jE4VrBp1CLUxUniafA2prHeuvaY3qbZThznuRo1GGoGmpSVwogz7gfmKP",
  "key15": "3GWswsSbJ7ywFpiDCyd7hoNNvsp2KGEWtTd9Web4nzB5fsDd9Rtz6kuePwYdn5v2iNRtu34Se6medGdM7kHafWyb",
  "key16": "4oo3FrFQ9NQ5TcGq1TX5ggtTdCGdNMpK9TGhQQMXgLNbwpyiq6ptqz8XJJYjqom17FFeHgJLfhd7ozMtmW9ngbe",
  "key17": "3NrYMy2XHUkyXjgqzq3yY1QRmqNsUTBJQHKmmJH9ddCfSf9os4yAMAxhYT9qvNhucHd2muzDoZMTwtKoxf3oAz4p",
  "key18": "2qcBdwh7Am6J7cLkAKZpgaLoL69efWF2qbudQAPUm3mAwqMeb9RY5wfm1egJ2mWBvxXxh1FcJnzprmjUbPLXNTqr",
  "key19": "26RAxdLr1BpfEeKCBBvhBN8AG8htbUriYWrMY9RSNFSognfyHqfLA3dhRQaFPF6MMxrtos6Wapa9bckodpKCeeTD",
  "key20": "3notqX82XTrhKekSrNqW6hCkJsAsMVdy6VBjtBX5TxmmLyNQ4vZu6mbjjb5xge8EVq3tUt6ZUpojf8yeNXr4y2yq",
  "key21": "5eVDC4sjzrgyStg1NKyfYSFcpzyMMQkUf8bdeTBVuzDihKnDErY48TRrdtz2tA6vNU1iPxJekMAHSzcfYQa7fvCR",
  "key22": "4PRikSL1d1AiuGw72bdpK2zQjTGJ8FJPRJKhfA3xuz4qGLL5DhWkPUTnrT8822pN7EJJ8sDc7EBW8P3tejRkMyMQ",
  "key23": "4DudndHwCACyhCkWWXGqBr7UUyQjwvXNjYhSiPH2vS9zttqbukGQh5CpaSYdLmwbWQ4wvAdRPcBsGMSditjpkENx",
  "key24": "66uGQPGh1PMB5wugndDJd8eNCkkqpv6GNzE2YutLE8mZaQf69LLirjGs8Tu2s1khFWwFfBo9qTQyvzrXQh2BtmwH",
  "key25": "2U7ZPLjcsMYjrjWd8oJfPQuuGtZdP2vny9twSpJNmTZe1gDGmBVVaeUk8kyzfRVNvB3FztJTo9Sbqv81wSiW9QxP",
  "key26": "66TgMeCBYoQS5nShyJmo38iK4QiJunrYJ217oPDDyenLY7d83joCg9nf2TAeNSjfzVjoz6kyiC9ZpTYY9uubGi3v",
  "key27": "3hRqMaqK5h7ZV5eFRTzFvCizeqkHQ1Lszei3ujFgw42iVWY3RK3N3agF15jeXaJQoy8LJAM7MYS2ckiq59KKVsrD",
  "key28": "277vZgSfmrmqoRzcBzCpsuQ8XgZThouQ2hSfA6ZKi4EKDdSbRqn9w3XmWyKUP38qKDkk2oVsNU4ioabKxbs72y7V",
  "key29": "47PezG9F7o3s2BaEGRxuzez85oRVvz94es17dQVNo8gPu56kaKSi2zU8ZEo76G8DFNeQen3MkcLyWojptqU3LT6q",
  "key30": "2wGu7fnxt2GLT8QnTjRtnH8SAsJeDZ7HAGs83L6UzmbNB2ZuUK2YgH5yStnURj4Zkx23ytx2E3ZZXWfZj76haKoG",
  "key31": "249wD45AxEwGkTFdCqGgm9qj741gqC8iYYNML6Rf2L4R9mtuLLhb4FtAxWxshStbqAk6NZQf1ccEwFsrKuZ3zBaG",
  "key32": "54F9eVaeEXssuECb7TqXaBTpNWPzn6PxTcoPaR2wng4SVjLJNAyQJBPAADMsJccemwPVe3PhPxVR6CxXC2AWyq3a",
  "key33": "5f8U5VkMc9SJgVhyRJWJwsjWTBVkcdG4p3qyLJmSMXPBUjHzf5Lui8Cb2pH8SwZVaWycuEMARixcvNw4Bpp5WPWB",
  "key34": "43uSTTryAbmXhHuaL3qkEfKMpU8LuCWsgUR45Q9agcJBn61dfauJh6YDMmiT45mfM46huczQK7x9LiVeXyKkzYUc",
  "key35": "3cDuDK5egCNwb16voULfbjpyDwpFhnWfoB9nmgicX33DmiU6zycPQkeGYkkz9wrvnyghQDmqL1NKCzYpyohjGAVR",
  "key36": "4RFLYWaY5kiJ8ZTwKcSBMXp5fvvhrHj1GrcC6GbPFXcGcag8i7jY4LisRyUvGFSpQrgkTApsCV7kzfmAbp3DoKdx",
  "key37": "2m8DRN7Q8g13iJyjrs3FnpzZjv87KMdoZPnN6mAn4T3HznZK3Lq2bvM7ka3wWABUgZu8v4Advy8vtmN5z1Vs9rso"
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
