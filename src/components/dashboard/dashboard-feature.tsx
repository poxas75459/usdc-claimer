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
    "2gmVLF1E7fh7ZW2NYN3L6mxKxZXc8qBtDsVU4zTotbUDMZdgThSFvvLthnMgCiu6d7CXaG1NXqX9jRQD6fES6r5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Advb6akgTheQTCdfoH6MwtjNV5hPsByXuBZz2CohYeS1K9QwxS2vf4eqXiyiRwaPhy8BLQ7YeaCU8izUfBzT5hk",
  "key1": "2WWazPCM5TsBTY9429wPRVSXr1F9nrgu3zGTJzkoFTwjccCFs3QGjWYir4AP3q6RtRsQMa1se854HfyeG7J9YD5t",
  "key2": "57CHk1LLPM1v7d3UiQ7gqXngUbqTFPSHqP3K361eb6Z4GGJNCkag9jKBt5q82q2EhUgt4WrSiAPXV4VERFM6UqeA",
  "key3": "5n7LDtnrZZUefExRC5zfhaH1JjofqjcSYnseaWj2tAAn6uQcLbZJYmLFbHMXUgTgxRHq127NixPvSKWdeaDt1ioK",
  "key4": "3CNmq8TfdZKgvmA91eJqZ4ASiLsYMwtwt2obCHdKXhvTiu5gxEhL6iqLsXmm7qggrvy89QRPXRsFdqzqEPcwfVcM",
  "key5": "2xDUz1hTRj6z24qd7ehmRSfQUNh9w5MV49H311CyYRVyB6TERpssqV8jg4YLtBhd1nif6tGtSU7xvwWDyEwUziU3",
  "key6": "2DJZGWvNw5UjCwBj8niNvwfPzwBKyB746bPUS2uiYcWnq9ouaBHDKpfyufTpt5aBbsgeRTs8UjQhfnW7jGGiE9YR",
  "key7": "53BEx4cCWrK55n3NoooVfVxbu2mdCynzCayo9arHiXQqKgjED3qxQjMHJ8gvmdYGJyPMrT9oc233FfYcUokgbvED",
  "key8": "RZdQ99T7vMSL7HKx5QkBdsD8bKgWH5zUpchwQfkXPa1dCD5JBa2ZGLPBjrRWjrEXyJeKYH9SeNiZwjfWvCWhbRR",
  "key9": "4BvXYNVLcrCRXJgNX4Spx311bgt49EWuHh9EZs8kJiTGNTgTEQmazaZPszDegkEDVZ7D5owp3EQcjiyyADAJGXWM",
  "key10": "2UT5Un1sXeJSwjPsdTs3eU5hzupnqa6RtYW6hLN3fgzdzRg2H68Rj7jWGRC4w43FR272a77L2EuhUzT2PsM5V7Pt",
  "key11": "4yx2UVMAGGbL8qcpLSeuDp9hQL6c327h3Ldy1yW5f4ykD2gXo6695g6agehSxspmqLYibVnHZMq9RmNsDgEbzGN1",
  "key12": "2Y4kfhVpryVtGQVzRd4p9sB4tMJ7F2fojndAw9Rxp2WXVHFL9CbtAqTfX5DqK896Ukzn1Hohxk9Biqm32WjdwGiJ",
  "key13": "5YShNBXMPkkX7oQWLNYMRxy1zy63dhLZbS4bdLZanZWF7k2Jpnkxn7fBEoLiCzV8L9FFX7Hk2ajEpQwa8xCkaJxW",
  "key14": "3YhCM3UhnaXE9tW1qhmSyuKmSdYVkqV3ymSxH7LV6M6nvgudYCSFQ9yCbN7W1TbBDZhUsK2sEQE5vq4TKDd5iGKs",
  "key15": "m6eoQQUaLpHpmRwancQq3EFZonUcVrXDKhQwFoW8KtvsoT8Ek7YBqH5abnXKa54nAQX6a49ruWanYH4mGYu3saC",
  "key16": "5vB1WUysuxvVXGvQoTkNdM2WcWzgMRhrv7Qxd8S73qZuow5srAawVSTaGyQj8fppmr2CiE9DEWcu188N6aNCc5FW",
  "key17": "66KmyB5B52cbrg9hCyW1YTqSdtjWspvkGRhqQ62mpWioWbuUHQTQsK8zNBBptAo9cwUVAQbkfc38ZdNTYNUcsBJ7",
  "key18": "4CAxPpr3aPavQR2Fk1W4Z6Msc4htQ6WMSxG5fAfztEGf7Trdo9rTDoDunWnGswchRc3WhCtC2VuMRbPzdPf7Dtfe",
  "key19": "5fyNrmunJckaE27oTFHxpzEPyso88go71NfzXHbCa2zhNV3yH4mKAskhBR4ywJqnWWrmk3VmA4KW4NYYFmV4MMVh",
  "key20": "5NZVowi9xM4h3WNDbFZctpHKC6KYK5zs3wYaGYiL6GCJqPhhkvg21b8U5t2iwxVbxUoN6m393s4nEmUxiYjfad8m",
  "key21": "5Q3tKQtJv6auVgYV26LX9F2Eu9bEgZKi45CHx28yGKdHHAYwzDjpJA39xP1KxgdNirAtzt2tyQhn6z4uyq666gsW",
  "key22": "3xfTGN9Kvb6VJUzNoABiYKgR8ZTyNKyTHZpqPeWDqa7LFCsh6Btfr9diD1Vhw3KDh5UgvcabzNYUo7Lkwn2ssjiE",
  "key23": "22wV4BcLuhsdYzVyWg8TqBjAYmZGRkd2hN6eNpTersKKQEet4CvNfKGVxYyEc1iHPKeBwbjDMCnsS7V7pf6ahWyh",
  "key24": "3jR9icR48uaF6Db2nM3WBVotzxA8YauNfWsEcVugqDxZRmd6DwLAy4aXTVETmaZkcF1mJZTEmsBh4Vzjinfs1E4J",
  "key25": "2yQP9cMhUZCQCoAtEruD6QTiBE3ogQwQYWBeCMCXFfBzpDNe2hFJhxc9a7TozZQ9k3k71cHdf46nR7v3cr8MZZg5",
  "key26": "2o7nMvHrhg48hc94PXaepGEBWVuEKcFCDD6Bw5eFR13CW2sJVBYiw1rKJytSi3ZS2Pct3xaR1KBCrCPjAR2Fbbk1",
  "key27": "3KNemfZsZZ39WT9E78Wn5EFZBb63ybxsXrkh9Y23MGfRU4etkGB4pbwNf3azgFrBB5ddnmegZ5hQbL4qEhFN9Wu",
  "key28": "2YUFdndPwTScNbyx6VMTksRGDuoAMCfbHYPmwE6UK3DDdAZcpLBMdA5aBFRFpAxENfyEUdp5Kqk1D8a4yVXMSERz",
  "key29": "4YUCQb54YXdEkVSHAQLDWHpjTny4vuFLU1oKn5PwymHo5m2BcSpCWGEpG9N7oVYZDr7PbM8nb91DtcLUmmX2HLr6",
  "key30": "5z3nCXYLGFTzYu7fZLvg9YShomRC8kPnGpGAJgTrEEzJ4P6RZXQdMbpQxmmAv67j5W6stdLMyLxZhMhg8Qgcixik",
  "key31": "3kijexRn2sihCGCLeEcUYDbCExHHJqZUTfVBErtP18txic3ivtRrKpNWN8C9X5bkPHyMKtgmjXug3iPv5H3psAQ6",
  "key32": "3VgmXr2t8Q5RumDbpUCAK8YY2VWhW58ifdjTXy3K48nZLfkzyrMSjPwVwGJiBjUhHVgDVPQvp2SmKAsmg1ZJ6mpZ",
  "key33": "4Ct3YGxosCfGHUecPKH6sBDMS5wwrHUWczubBWpF9dwSstGh3yTnqnybBKhbnQmEZxbeQBgaWvuT9Qb67NtSv2w2",
  "key34": "3WhzdZBLtufbLyaiue88t9732KZ2qqadGxvPak5ine5THoYMohbz38G1ZV3MVDeGBgprFZ5u4tVDQ1s12arehUg4",
  "key35": "2S415YANRCeAUZoAoYi2L8prrnwyGeGjEo8r46Pq8j31ANAvih6huxmvEhZCmbWxQHxyqCwhyED3URxN9prQ5wJp",
  "key36": "962XUEnLX2oGytMcNVP2S45R6mCfeb2W469d78PyZ4sC2W36R59UN45PW3SUysowiFr2B6zdUhEkG7nChbACe29",
  "key37": "5tDdD2ah8px7NsipzDLf4d3MxCBgWW8ntz1y4rmHiPgdgnTXuYygKBdzKn9ki8sthyXfUnFfo35ARrJUDRhMviy4",
  "key38": "5H2nWfJNCXRZQrhLEnFkKZsmFTGmmYxT6od3W7Yk4i6diG5Lsw823Rza2sRqaEBFBbYvgbzG92zFSo177hqbYqtK",
  "key39": "2BMnBTNEkhmKPVkawTAx9PXvwyzFgt9ieQqs3VmD3YZvE913JCNxzgjbe3Jm2AV4zWekGaveDAk9J9w7iN1TwV7V",
  "key40": "vKdqbTocj4rBFDWk9APCNkCzovfNkKTMb1DTi239fqQDreWGTjRAjTDPMkNAoyjKtkDFQT2xckcFcMPArS1qYoZ",
  "key41": "tCKN4fpnaq4fU8qnhwN9QtemwENvpt4nrdvF5uBBZJNsAAChtvprRAvtzGrt8m1snb9QcVVF377sdT6bfD21eHj",
  "key42": "3Jp1c4q3LnXExDQ5p6BU4uwYmBbfpTWpWCG1ui8r2x9yD6ZjYRXHbhQcerhdg6dj9VEHsJC4SmAKT2oY27ESDYas",
  "key43": "3M7XyM3WXHzUf8UgM9aB1GdaJyxYMHjgggJBAE9RWKE8brcLhd4qxd8Hp33cwKVG9rRFkvY9T3bojCnfv4EZPjgq",
  "key44": "5JKbWub1x3LeifaF3VBxDX3cNaFNhjpQS7Q8o89RBsacRphD7KaeogD4XnzGzJcETZHSFXJtviVc56yygrzz11x1",
  "key45": "2FDN1qczFG587XPrFcpoEZzkPRNBJgr67bd7eg657ehFrUbpuoUPmhFQTqSEcNkiRL9TD3gzHDy38yRLQ1yLwfkC"
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
