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
    "4phoUkA49xPohjFZNTvE3FqmeAza2Z8TyRRViH2M4YE11iMV1yKoTJvsb11wMgSBxV6MBrFN8rmEdZkHDTC9Jxpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eQJ24yzjvaG63B93m2D21yjoZdhzBi8NXv3cN4Ld64MkyRQZmZqA5x6eF9yWTJgUCzQVoeLSkC5EsQwfEj7VQWF",
  "key1": "5LK1FkC2KBWMp3bTEgejJ3fQ54wc6S1os6SsdwMGUuz9SiDwAq5Enwp4f1Gbj4tYDdgVnQPon15JapovYgrfuigK",
  "key2": "3mN2avKGCBJu263hyWFAxxz4Zc3acYTTDsaJkDWFgZRft27GEMxwbugzg4q9x4TkcfSt646gdU8P5M8chzAv3QxX",
  "key3": "5Vbn67Eqrbs1xmG8zaiJfEbC1wnxbz74FXa1xHkz8mRdAo3dN5WXbkhTjoZehKWCdQ2fwJNQa2KGc9FqhLrSLrq6",
  "key4": "JkaEQhHnZEpJwtg2aSYny5D9gKwQVtQvCwNfN88PmHbGkuU24koo9of3aaFwS64NtDK4BPvbU6jeaQftx33EKho",
  "key5": "4hAYzFa6aWBi4jUMtsBhXSvrGptVKCYYYQ8gQN3ZSsjwpy5W5hwCE1a7pWU9GJzWWGFijhF8z2ujQgRAakL6ucb4",
  "key6": "3gEiWnmqUSJN6NFN4PGU3fYqprqQFVZMrB2p35emssWSW4GB64dQkEc6yakSRKMBsJshXPCWWVDQgg4aDm5BBigs",
  "key7": "5qtwuRVwmeQWsNKTTCkRzP9dkdbHx67bmHWfiLC2i555xqsWQBtojVtLeACZnjyyKrpYkgfg6ZUQPkffZ6QS42nX",
  "key8": "2mQ5p5wy6BtdVeaiJcFaFjVJBeSAm9q331vz53iLs62jjLqzV7uZLxH68dkLnbTFXTqUXpvwrisDacXEJUBCp96Y",
  "key9": "R97Ti7PQ4ri8XgjN9qjGK5WXKCqixiqABLh9gapWZtwHmVHVe6ykQhmfm2c3kEx1hxUNM9vUdFbvctoVNmHWTNe",
  "key10": "LGwdabvyWQmTxcaiKDmQsV6ir3Xzj4KMgf6fkLFXBpBk41URjhNUxeUzWENHKY9JAPSp58KEGJzbn7tQRSnroAf",
  "key11": "3KMcSxw9W9ihdDm6KPAdTvYy8wCZeUXKtHRF8Ed8zHtje2cik2iB6KBXHP4UBpfKAgxhQPjXnLGzU5L7onZXiDku",
  "key12": "5Tv5CXRrhAajhcQ8TkLq1b1HLER4EY95Mh58TRze9ssxo9G66aHhz15pCYuWXhNrDk8TRrvBEwnbYwBCCa5AMdNv",
  "key13": "2kPyfhcVVNmfZdEvbF4HMzHxugbwh9rvwP5UtUYZudBzTMpVNB5Vs1x9ng5ywUUvcUg2pncQwZu55nLPeksNP6y7",
  "key14": "2BE9K2eVaoQw9R6paf4HryNvpjhN4Hnym7K7Sbow3sMJborzd4hj2Bx8rKch1ckRC1L3Ma651fKp2s1ehiBdSgsj",
  "key15": "3LdjT3E26qiocMAR3AJeYPGr3S3yxp3maHE3xkBAtGKE4dJu2n3C42qFHugdaCGH5ybHD7HXwXAvzRkHWEtWcfmV",
  "key16": "26QPGXPiiyBJ54gGZHnhMAY9k6dsCdLJdqEN4mi3XvEWQ1wfajtgMJQdDHkCXBGdMJdHnTkofskL5oLwKCK6dzko",
  "key17": "3wRjZqFwSVe7cc7npkKuuEuvVDbz7tnh4mg345BdgFnSatzBY61GyucTs4M3DanbBbSeuj9maWu84e7gaTbWLQrm",
  "key18": "5oePc95S8zfANBqmD4QxpfLhmzN24S7HC2YGw4ov9P5K3h4Jdn7rBP5xVaGp7x3uApvDf5DL5nNTnnhY2qM2wUNg",
  "key19": "4HhoDVzoWhoRWWpNGiy5GgQvsEm7xaYCVzpg1mAQKdx4gKAxwQojptxuZA3TCSD7g79wYcFABiwRFTBr8E27wBo4",
  "key20": "ErAb2tpNxwPFMnG49c25yRP7GRW447QJZcK1yqqC5Rg5JFto4ukVA2pDgN59hpNnHNgYoxFdcZaDuEsPR8izYv8",
  "key21": "3VarYNJuKcWpnYsRbBWhy4MtwFEbXUryjwwMiN1uNx6YNicu2aRGjhLjYTFPvHQQaDVv9WsVtV2xwXAqregQbWRQ",
  "key22": "3As4M5aZvcE8YVbpaP76kPek5FBRAiaXq4jv4877JpiEsCES1jgEAExvz1tF4S9YPuYx5vpKW4gNDPPrGvHkxMPJ",
  "key23": "3xZJ575x1g7a9Kt9vyDdpBD4NY7KH2ZdeeLDVwW45MNecKp2M9HoqC2sxcEdTXrWcx9b4hMWZXEBkQcbfNrw9owr",
  "key24": "5LzRoxuiUaCrmr7thEtzeo7YHpRHfhvQKVc6XdwnJ2UiWZ83gYCwdJamauWH8AmfMTLjjcnMRWH6Vhg1qkJmesFj",
  "key25": "3tuepZf2iTGTUCCj67zYSTXM3j1oLeWWujPgBnNwr5xcSLqtVGu8BLEJkq6jQzv4JQFcmvwDzCr34zQqLgVBVJYf",
  "key26": "4EyEGJC3DDZK343nptr8FrvhBn4t7WEVkhyxs4T2G2hZQCKshWGcTtxKUaW5YZtjwEzkvM8xVbfzca61ubT93ems",
  "key27": "5PUFc9VJdgDHYGLpm7HgBkmqvEzAjPYd9fnNQPp58Jx9NSEM3QA8oJgJc3XH1thDQmAucNi442AZ32duEkW8ceg3",
  "key28": "31HLiX7wEMzKVG6E7BHFnFWiSTwCN67HGxAAj5gtmt4qGkEm7NbQXPt3z6knUyrrZ8LRNufB7toWaxbeFT16NzS7",
  "key29": "3iMoWSnB8gEzmzZbVutDBKiS2KuGzXGp3TXCFv5Z2SV7JDXfE6oxzZQzfp6BrooG4MKCnyBuR443paCduTXg197w",
  "key30": "3sJGLqQZSztzV8icRGyzNyuFhb8vKpjd7LE1d8swGQ8cXusroMnR1qcFsC2SiCpwGgeBkXGwYWzDWaBvQozzaXWp",
  "key31": "2pMDwARpUZx7eFrYHqu5z7SH4dzB7u8AN9jS4a7rJ4sGyraF162svfQftt2RD92HGMeGYdqiBMuzrQxKH4ya7Lzi",
  "key32": "5amAU5toN1i77LFQbbMCJoTLJzHDdzmkCkv3yqx3SReBzwephcQw6X6kJrU3iJR4EU49VRBiArwpTWKtHDNgeh2X",
  "key33": "3n7yoz5iUq6mpC9UF3Xy6a53vBR3bBX5dys6BKDn8C7NYe4qrnHgbDREbSizkJaTj5ecVgQGXpDBwFDyajhF8X36",
  "key34": "442eScTverbiirWizh6hkMBSjiUMywifqyX4WNBtSWHG3wF4Qk1CG5T4pdYuTA2anMLXwYS2pQAgiQZcq73mZQw6",
  "key35": "3vfUK3WvzyhpqF38p1KN8RSuPPEPHpppFxnDQDowFctgDidP6rRXHn6fyrUMYCJuJ1Dq1F2eWmv2MBj8qT2CzGXS",
  "key36": "2ouEmd7tFJ5AdwGqeEYa8NsXBKnJpBCyWEQAKUY9MU42j1K7cu3G1cJxn1h9QsbY4EmVmdAqGggPckAgirLZ5zWN",
  "key37": "5L4f7ztC34x3H4abiWhEWaoefjKU4Fc8V4mRt77mSzBfYz8fWobh8Kc1dgK91fKq5V8WPNALecyDkDiZVeYJ8PjL",
  "key38": "gBTSfdfiPojvZGfgQ4fPG6eZs6uzV5aba1tgKsTJ4sF8zmVBqSYzJ7oYrc7wciLYT91y2TwfZwpQo9DEzVQRNYr",
  "key39": "2HnuKsi19W3ZzsiQ7dPPcTjsTnfXLPww7DPgEWG26gmbu9Gcu2W3Ue4AwihVAocaCqHLfvG9YuXicnavPasfmDGJ",
  "key40": "5DzH8HLkC5LF7USAw8reNwr2LYgxQSKUi2uEx8u8Ci1LjkVeEUND8jRXMdKb2GaPUoghZt3fNGYsptZJf4gh7qk2",
  "key41": "5WixpmWnWfUrwetPMfqNBbpMdEEGEEPD5jun6QontEjzMRTs8YSHvhCSUGHYXNPp3akaTT3RMPJR1FYGJx9H1qJa",
  "key42": "4izUN6TnDiMjL2XfbW6P3nPjUpxJfLRZ3eVze1hmSqfchvkVybQmbEC6mk5qRUGXXn7hckwkW3wm1Z7LXEdMkcJj"
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
