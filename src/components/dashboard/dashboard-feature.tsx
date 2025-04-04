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
    "ogSDW3LqS1MVNVqm864NbLA6woWWzScYVRjYqcXPFT2wG1TDRmUKvUz6QMtnCLtPJ6mCN9Tud2jCfTUpbmifraQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J37Es8GdZxsFQN3QyTWGy4JNdpjYqMBWHkhftfLTk6G6XvNby3ACg4BA3FSUsKAUC5MgE7fzASLfGe2gbM8y2R7",
  "key1": "4hhAismkbqKxjCSVgmAQ4LqucfyWkcDQ7UXjJx5ntUtU14d4mkcLPiKc8qiS4DfqamBrSVNkFj31B1nCZF7DZb2E",
  "key2": "5j3KJzgEtqgxNpfv7Vw441wounfBapzgvvbiKiVyxfJNVKxaqYJhS2fdvn9mkoDH93BYwAs2uqW8cBRw8W2bCQ1c",
  "key3": "8YJFcJYNyoDQGj9GPW8DTvtuh8HFUzfg89sTY1qmKMmVc2qRPAMzP5NQxEnBuVv3sE1QxVnLCFe8VrywWJSw5jH",
  "key4": "59kazLpmwo6FaXXfacJFMLr68PdgS4cXUSAqZVkPNZitzZ8JFAK1BrbTjqDHHWR4hTq6nqAshRKt7kHDTeKGNbok",
  "key5": "7VRppaUt3QSPgTQkmfHPPmfBcpHZWkSGmKEKRcfGCDyavtFimThRCYFRJ3sTHw1z4B8LyEbFLe6EjhRHkGuUHeX",
  "key6": "49teEAstARBxsWazj4EHjH5e4Xv9KL9qYxDNUJUVnNYUbCVsdp31XnvJvMeTyLKvigMquas4Z8XEAbQJ7LEQe4CZ",
  "key7": "2eSM7Fy56UuMsyaLYWj74Twsak5jxqDLzJrEJGEBjXwhEFVa629kqRWt7YpDsMUd9xbMubwnF5VHfD5QPbz1wPk8",
  "key8": "8nWFxLoBt85QUi8tZpojeHM6yq9ZBCKoRxaTRfF78umJR1SaEtKYuicT5DkCCwAq1DeRq4MQtaDjQSCUDxHxF7p",
  "key9": "5B3CHZBCksNNWq92DQfUzMeJ2fCQGbHp3hKzuznSVwBm4UatxxsTXaBzrKQ3GUf5SHaLhCWVfXyTakwkdKvQAMP7",
  "key10": "51jeAoF7od183d9gsmnwVwLpAjc6qGCTmhNwDHGqsozDkcncCq3jLR1tdNKMxemYtJ6GRK5r3uifdnoSDKveepWC",
  "key11": "2ZEsD9SJCENhom41n4B6oMQaok4sERXeRzD8T1AVzJwe1azx4MPf6FQokhJxgNyhvpan84VuWfyBQ4NFqUpa16kM",
  "key12": "4VmudcLR1fF8TyT7daHDarUsoYmeEmukrhtXTbF9MJaMdh64WiAFReq7xw2qbqaW69rrcvhboJj2px8mcU51TbpL",
  "key13": "2xz5v8BqE75CFFGL6YPuG8x9FQo5d3WYs51PibopdwTPnno24mz1tTkgVfHPm6jJsPSmYmCYN7HJUhEmFtE8PjKH",
  "key14": "aBG32QhHXn6apSBGkHi5CMGo7uXpmPcdUhrWC71C8n7U7Gmr8WQSaft9RFo74N5WrT1Q1jj4iKkwPvHgb8i2EGD",
  "key15": "3QkynvtWShsgtYuRBT4wx2SH8VN4iV7HSVo9Y9w844FtPrrzguCHVdAmxK7z5eZLn7hmDsu3VEfb86sT4o6gDGg1",
  "key16": "2L5QJyywYb478SY479agkZYEMdPnUQyz526eUjZsDgNQtGyxK5cDWUmEk6pBhgdYtghhiMzM5WNx19dhfEb1tTj",
  "key17": "62VwL48NaMSsZLTHbABC6Z2gXwcnJ1mv2aGExYhf56ff1C49waexs7HeGXtbRmz9bFxnUhd2CD1Co4NLQpg3wvY7",
  "key18": "4spUnkT8txRxM2poT4hJXZPvvwNBKX4x5ujYJYmcARsbC6yTtjzzTASBbsfbgdbiUJx2LZhnEEHP8XnzzMyxhbWZ",
  "key19": "4USXB5zx34ghcrrKyC1ssEY8NynnJHc9XpAAjrfHay7aqhCNkLat7Bm6uJ5tZxZZZd2Rx4HUtPyNYJXiFEkEg1kA",
  "key20": "3nSJqQFdFYBQnkjdcDUxdgsSdUbKJbhoXgoPFB1mbM5RochJgWu5PPhvwuMKqTcTZK66stoxPRe71UGkRpxn1D1F",
  "key21": "4VvAd74aTT8MC6szxCz28MMoffbnLzse1PmqFc7wWGWNfJQkExG889UZ6UmjcPGTTeXdanVLyx3NUHTe2aBgiTN8",
  "key22": "5LftEogi3KN8cF97TuowgwetXWkjhTqhbwHrfRmAWxxbExWtpPRdddsmEnjXJ33DQj5QNDbqQQxZZLq1wpaRgJZX",
  "key23": "4Tj54haHN6TEMTwccdJy4BynDgqQXVjUnnioRT4GqWqZnGghzTnEHQcTu5EMftNQKxYeLaLshGeUREtKwFag4UWr",
  "key24": "2TLcKtdjZSzm3togF29RpXngeiMsD6P8nRijGAkBJRafK7fEG4fxQ816ZvYiJRrzvmSjTsHzb3CPSWGzpZbJr38",
  "key25": "2FJcap1m9Wobh3DZwJxRKgu5MUmMHaWra4HLCJugXnqUs7C7iyhFxo3khtvJoLgZMoyVwQ6wQ3bnNLhAte9Zfw4U",
  "key26": "2JDATB7u7kWXcyXnj1b9vavi2oke6dRKou8trQLvgLkGixTPUfX1Ev7NmwqBHY7qRGccScsDvxgouq24mSRUTfEw",
  "key27": "qVQexuAYVF8XKJqk4ucbcHpEbyxebDJjubKU64vyLHkVCg3wjwitPaypMUVA6ZzdtutgLqitfDTY5ddJCPyLsFy",
  "key28": "3SRLSeuzHniezSmSTSM3qPYzYjJ6HS81w5sVVE8MwU3nZuDP9UgEREKm3pn4trZ2jBvpiifBnfUypYHM4GPe8ANi",
  "key29": "vsc9Suh4NHR5gVQMBucfQgusDowGMpZH6n6gsjFrQnw3YvRDz3JZdKXZbQSLz6Dw2Xr1o8mrTS66pCUJdPf3kce",
  "key30": "3zGDVbrS7ThywQ94CziCVM4MM16Q1obuynyCLo6H2HuQV71dXJrWvbN9SCvTfgNPAQuSUUc5UJ23kq3WU9x3heDV",
  "key31": "2ZGQS1UDXsHPYf1p3x4fHysvHm4TSqxrUYFhZyu86hhvkWF4o2W6ErBDTcaDDNQ9kxoTrAQ8gGQHg3LCpkpauktU",
  "key32": "2zPLCvCmTQA8zYK2EaK3p7KbpUaWn1ridvdPzEhSKXfXobFLwTW7Z2CZbgm6YQfQXYWQXxba3WBhNCE3rHzsXeH6",
  "key33": "556wjR7QB9385GK2BwYSH7rohAW2wqaYNqRgpHBP7Xfx9VYkaB5sbAruKJqL8EdtTmwfdmXxY1ysDBNF59RVoSWt",
  "key34": "3fSks38woSkegZ8D2wLcy3pqU3WjjPW794GrUR5zBZJKUGv5E8z1hHSRDn7SbMKEGGzXWFVz2AjPpQok784Noju2",
  "key35": "5HDGz2LUScH9viw39xfcDWTo4cpC8HSgLC8zDv9MLFa1KsvkEwdKFFmAKxkLxGYT8VoseQ3iXGU5ZPphvCGNTTiJ",
  "key36": "4CzjLb6d5H4hbHo3Zoiud2NvMDqRmbW4dcYxCeZ3SVXVz9YVahCXCir7BiEC23YyyELDGiPSti2rgWarFVnVeF3p",
  "key37": "3EraNHwuZHaGKVuySxe4ofWbrsTvqKdK9nrWxZs4vSiMtSFB9zZdTxVeNkZd5BrNFC2ZEni4cmVunGmvMpDsG2bw",
  "key38": "2gNHsw6B6mpjv15LHjtwRRwhXbgYzR3g41KyjEpkpqeWBAeffcpU7pj4KvDW3bK115dNYyhUgDtquKzKuLD1n9qu",
  "key39": "F7x2MwWex9mTmqrJCy7fU77od6ATFd4jgcrdV9BTgBzz5Jqvk5cCrRLLjqQysM1zCYuMkaRTuru4cPrDzcDjDE2",
  "key40": "5rNxLHeS1jkH4xRKtUFLAJ1zfKjbfs3L8w8rqgrc9B6cmTqXH4KZv9q2g8qBK8Zh98qAig51tkmnkjUXuJkuvMn8",
  "key41": "4FdGARgYWRF5ijq5As1KuVUcS7BNnFrwJkfmYTCX8BfvqrTCMTqy3u2yR49NggUXHosK4PoFkFYNyZU1NNyuYdEj",
  "key42": "2Ri7gPDgSnaa7tpXaDoKNCmU8futpN5pXYhLMKY7sZMQdZEi7LqmScYK17WFidgYCdBUh2h5MuTM7JkPhEdAdQNq",
  "key43": "3Z5DpyqhgeAKyzvWPeyv94iSeCGGZbtCFeNDYJLT84XPPnXuhaQ5ZPB7nKkbQ3axuiD3hhCS3BrvaKPE2srk9PbU",
  "key44": "55mG9nB74YPxJsA1AYUodhFrSAX7bXTJ3LaAXcGMN1sD3w9gtBxfeb7wcV3UNMqiFNf4rtBrQLzGP7NhUdA2sgXL"
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
