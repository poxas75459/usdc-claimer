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
    "5943rFBSq5npTxyin5gFD1B3Pt12qBZ8yiDrKkJYaScesy4azAUKD2u6hfkJDPu2oqZB5LfYENABezJe43a4ARWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2615gGh8F86cN9J7BLKwpD11ATKtG7qaKFbYRFB6ZZZHa2SqoDNbazWtDGc1MC9gpNMAmUnAKCAw8Z6194RhMuTu",
  "key1": "MUQzE4sX8AzdZQitnhpc8egUWxzECAKuZ4owYKeVYEdkqVGqsQLyMpT3c9PgpeTXr6UVjZa6mQ6xWSJr5YJEJpt",
  "key2": "2BCJKucaqe61WHSYKVueqbYmUU4ydEHV3TL7dBGkFYNyBYPUGU9KXZhphCB8D9WPBG7r6fz619Xsykut3biorwP2",
  "key3": "51fwDnAWE7KFsxGn8gQ55YRVkUqAVz8hcE3jLVNUjNErhLuXqPftYHQceuELHFv7Gy8yD96Rvz6PhicieXpp1a7f",
  "key4": "5YUZmKmDgRRQ5MqDW24PugmvAc4u3mYu4kd95nzqdfKiiynpbcb5kqi7fAykqdiZpLs6r16vww6LAWxPTg6eziSf",
  "key5": "5bQerRPkH2NN4e3WeEYhrzb8xgEoH1xtoxbHcSq7ujFQfr2YAo5948fxgLAJMDdwqContmazr2t1ajSM2iiEnmCu",
  "key6": "22QgnvnZWCW64DY8kbhPLByarMGnqaTgda4yTsq21VidpNzBmQgDrvgvmyXcBCJLRouTztQtB4ZD1CG5rgHdZWhy",
  "key7": "4i6mAgeoi6XN6ZcdHLcLwqHz9Fot6KWNf4mznJzk9gvBwMEGyTgaBzYvN7cARPpBKKf3npjjph27gv623qJCubkM",
  "key8": "2CWP9cL2J8p2W1QWfC6AQpiQAGwoaF1e77WWy2rEQ9MWhqCB33QbTYX2iQB7gN2ctaPHbQ2TytQLGU8mSWWUD7wv",
  "key9": "5uJbwcbASj97aWx8w4c9hgjSdT5vYEeq8WHupzMiGMeESe9yubxJRQdh7m838AAAqifcE5taoMJXVCfj5N1919QK",
  "key10": "YSG8GDAL7J5e47Tu2skkV4giJR3jMZTcyWcLfWF3y8o5u3dMdWH6XgPeTqYGa7gMZrMV5XEVqM6Vpci1DZJYXGk",
  "key11": "3MnLb53YccZcPdbvYFzQgMVFmFKzdSbis5NCAUC71MtYheXzN3aG7i5NfpKJTQr5TqKcFyCZ1HV6sGURrTG2eQ5h",
  "key12": "5sJW9xPAJUiHi6KqZSrTBUP1FngYJhBq9X3GVGsaq4GJUMMEMjog7K5KExc3yAzKpVRp9yFzBjQdyunqWvrUZC69",
  "key13": "4eguBKiqjKLo8SHfXhiuf7CWmYkNJhPea1gkGDBFXPf2ei7BJqRf9ucQRQfc1UnUwtJY8bwKp7Pzn7yMWWN7uEDp",
  "key14": "2cu3NXdPEQsvhkE8Q89TJoGQ1kwbRcV9kZ38PFy3A5ama2kcgWxbXVWpQQF7jXCeHWBwH27AZSAACxDW7vAamntX",
  "key15": "5PeQeB3n6MTKYFfCVXcrPv39BhiYQhnXN6pbcv72tHawpqx1jZVYSNnzwHoHZxsN1eXzeouTH5TNHCXP81D1cLyy",
  "key16": "5ND4EexAtKZqidqSC4pG7jzKnXt2RG5n9sjHWudMZkiSqC8NLLK6wHoa3aqiVwP6qNjvB4hmn549UNMXnAwTBnhm",
  "key17": "67f4GeNF9CQ8J98cjEJEqrvtdzQkkr6dw8FMUbrSq867w45E37p7khySwKHmUTpkdUcZXeaA4KHKSkV1Jh6jh6PY",
  "key18": "4J82kDCYTPhrZCuciNLP2vcUhQXjMCxjY82Zdo8idviD4r8ndQW9LfZXzqDucZ9RNkomFfH29KtJp4rEcVndbGyS",
  "key19": "2Y5Z9F6Ev9tC6qG49dam6EW1WbagHK7KJTjTT2nXAVv1baJeuCyAoZUQegVL6E6c8BnfvuWz5FKqmP1emaM3gv4o",
  "key20": "igqtrMrsELJuCQJXG1dy8DG3zSyNFjgLfeJe4mciQkrChZgbuAHXbsLrvhhzBdjScgzULqkFQnzPBKQQiiCGyyJ",
  "key21": "34MJH15wnE7vT9EBh94tCTp8m6BCX5yANRQ2jQGGuQiEUY2hEdnFM9d4gLps4pvAyfxsqm62rabEn5BN4WecDB6R",
  "key22": "L8eYkpVttqwthCcJcJ2W7WziKjoZH3NCgFaZrMSVChU5tZhFxbmPrcZhELTJYYgVvvSNtRaQBHjemBarXo7oVTU",
  "key23": "5Wwyn6NALNYeZJoTgx5Y8eTqn8nNKAJErrMVmsxe4ju8uLhdJURSNaD5q2dayZBCAaHX49hJyXkFueykBZzgxMzR",
  "key24": "2poPN3d4Ej4sjbnqN9DufuajYRUgiB9JgGm8C8S5tJe7Du72P9J1WAjnaj856BHjoJgaFxT2x4Cm8tcYsf6svqCz",
  "key25": "2W1ijhKWPcFBDQA2m6opwhNsE9amG4cxGcookNPT4rr2iH2Lf2pQQbtBKw3LNPGcpXzEKe2yWai19N9yCjmB3XzK",
  "key26": "NCxLLsbvFPbMZEnNhfZpVFdcvoKzrRi8B4VceMU8tdxp3vgty9dDp3i9bMfD4ahjcyFVEF243ss66NjVx3Qy7Ta",
  "key27": "TcWwJ7PnDk5pz85DgtiBM6oicWny8RPVGtJkjq456iXKULmf7wiZYHo25HK8ZoCFgjDkCuNh2cJnZLM9ug35D6y",
  "key28": "3BFWYenCcjDYXMxCqm2US1rwJc5Ac3muG2zk9GaPewjNiucfBh5tnAi3i7LyYdniLW4y82CXDCFxViH8wQjZiy7n",
  "key29": "uXSA91L8fzybcywppLY3FQou4C8VXfuyro6g98zu8S7Y1qALihTHncR8x6CV966LSSxCLqv3rwLLajGpocjeD6n",
  "key30": "EPXWUi4FRwPjRavGZjZfLxtmUogfJqG5ffzjKGRrZn81zB9d3E1TDUT9g1LRSn2NHjFcDrqW7268tPShukCwzH1",
  "key31": "4iiYaxDttkuNC8Wr7PvKmf5w4aPotbjucZ7arKEXUjEPPKWP449ivg7vUg4vmCTwDdLX3PxE8FQSJHzh4R68zP2v",
  "key32": "2hostQ8Wx5Pgr4hqByN5VFv9vEvpUS9qwQXjWKTfzW95YWNwPhQF5AsKCsuFBrCN2AUcoqczRUfJFvDiKcRUy3pQ",
  "key33": "4eMQpVEuJRgU8LCNKuDtmtjsQtnHrKLgVhkMtN3egxsXR5zL8d2pftdtW63ASABoy9KH2DRfDTtc5JJqZkJUYvGx",
  "key34": "3cBXChYsbaAb1VxYLq8y2xF89C5wiKj1g2K5SHBuChb2Rnf4bdL6upGUMmuTiL9xyW7h465N1krxveAxZzs8RfBT",
  "key35": "3jUMcP2Tna6uLXd76DpfJgzbv3P2pdMy4MovyVPgJ1wavy75owSoJ5WzqcH7FesCtndzYxGWZGvzeS12QgFgTyXC",
  "key36": "3toY824eQbaXfPzVZpMwTEJcgxsN5VKVmfyGxY61qvSm9JTG5Y8fkHhcipvfi7oHwxMzbDzWLMiaLZn3YAYc8sii",
  "key37": "2TNm7XvUzRNjpeiUox7QCuy6Vgk3ZGdYGGo17w4x2NdPsaNccrRArwmpXynocuC8gwjcN6Jtjp8URm9oRrftQnwy",
  "key38": "46c49SxTYS28B1TnzJFpTD2LE53wRvz4QPBCQNmsCKBcK6KTNfKZo2TaLBqdLz3kj11tB4r42CiMQqgZh4BQDBiX",
  "key39": "3mPaGEj4HeaADHxXWMEXntUWhtnTMw5kQZnWSDFeZwVNQabT89yYheMEzcXVPKLujY7zWEEvfjaAecEWFpDaZUfD",
  "key40": "VdUvpz78Qk2aH5gw3oPMtAzXhznNqp62w1etL4BZSbQBez11SsZj8mqGuHEzDDom6LFpo7zWFfYCcrNxiJuvBFg",
  "key41": "5VV3CWDS6xUGvTuWS5ByTnFaCTzpEV22gwzbf9t9pk2AHPbWw2H2i1E7EKHBFZp8XGMTqjkbt3A8fdB7xK6yg4Ac",
  "key42": "n3wZ8wdxqZGGCDbUW2cJSQ69eTbM8oXwASe4Mu4oaehMp8yjkmtPSWvGSChwPBEjuXo5EUepTeS4VB75nFBmdx5",
  "key43": "2tANPehEmagJZPPK5tqyeNfUkAYHmtib4zYHokA9YnHvKzUiESJUXo2PMnc1jRNX7zP4xqm14zdCPSndtCTVpAqU",
  "key44": "5HfAE8LKBzixo5CL9oWtk9mHF4eWJ3YZM2d5EbXGYnbzrCGzXTNjFxbMGkDddvqdSy2WeBqtShNaiAmaeFa8pAxf"
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
