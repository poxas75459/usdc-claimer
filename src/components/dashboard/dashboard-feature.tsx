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
    "7k6euLbwjwxiMGceDUGomwkP2TYtLfZyQCwSdC6J4RQFLjXWMUhsZuU79tAq2YJw4LVJ7yqbfSLyRgGqsTRMbhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MyGtQkR8Xym6fviqTYSn7XqW3fbhgxZrdELCUa8Mkbj7VFZa8FtbbCPxhDpRpDUgXScgsq35F7NVXBYxhZvnjUm",
  "key1": "2GnUfroEDnTDfkmmqBQ2zwRdqY69gVaVLNZYuEMVP5yEKgETa4Sntybu1ccd6ukuyrvAM2qoGFREg3J6qJvCXBv8",
  "key2": "5SeCP6tqj2KYFNCbXNGQJcEM9TaVqx6QGBQZ5gdVUC6xGUBmpFvLS4eGeHPbtR7axcgMgemU6bwK7NKi1sMMLwuD",
  "key3": "2bhDRFjYeULVXzzAx39aLcUDF98HMwGTyhkTqG94wePua5QHUoRWC7dGN4iPWvbSynjSNikegoykJu4zkZNiK6XP",
  "key4": "5Xr1yyNutyneuXCG9xWppaFu4kqzJiNi1QjAhmef5kaHbLiKLzvt9S5dmZKVRrgjGqdGsnuyphyT8E8t7A3TMFGL",
  "key5": "2i2pJy5VLWW1WfvG3y1Kz9Y4RFPkKcBodwgiKKRu5KZNyanBHD9DS39vLFiZib9pdSbdgmKhsNkyLyPaE8BjxTui",
  "key6": "238Z83vVj55ar5Cbct4chA5MkVApHSjv1nkeW6HFE5TznHnW8WqZqrVrwxPSHwZnsqoUtryXsMAuo9cEi32iqzHL",
  "key7": "41LUbgSCbKXFf4t6X9ozb2CbmxoPbqPxa3rcKKmVhEEMw97H9PMYaMWQ8qu3UDrXfMY6dc2VHdPgiYECqrgXYBnF",
  "key8": "3U2uCMpkbM9nQfRjuSC79pAYxs61F9CuKBvquFEma4aJyYU4Qnx9nkvKjqwde3hKgxn8vznJMMk8RsYd1teowSxh",
  "key9": "2dsGBX7yGB46nfKywKBuexiBNjLxcziKt4uA6WdHc6Ra2KDYG15t4E93eWExn2hfXdkW4tRZadtj19sieWtfSxYJ",
  "key10": "5pQ2Pb9d55B5t1g9N7Ua5B7s7kVrJP8buZMf1ai2Cp68JjVxcjv1pG15TSvsYrdTQwoRBrzX3y83VKkyUpe5hLJv",
  "key11": "4vdbDWRBc8MQQapTdpBRwDdtGzeUo7XaveesRdMeTZEp37rzcXf2qSJTHzvDSdaWpjc9poSn8LSyx9NHkrN4ZTUz",
  "key12": "271n3P76gpT3izYpZ5z362pg9zXMGgdajvaarLifxc3meooFPXELjfkM7UYym6eJBjxu2dTV5rEDjfnz8nXp39UD",
  "key13": "3fFfNJexoDQeoBQL7mcq5U5RzXqHM35bKB2VXmj4BhSJpbiR5uiSPHGBHcbCaq5dK5nD9sCanVHAAREY6533imSB",
  "key14": "3QEG6twaijbZFpkozne8S4QDvFmH44frtUEjzUTSStYhWaa4YoV7YfVbP1UNPLojSqvdK9FzF53di6R5DRYhtAU3",
  "key15": "64CC9edgnwP3mDp9LARDPSbHJXV9nXsLQpvPxUP5Zyb5k8pU9VfXSjuZkkKmwpxWEHow62WM7opVmsriEBCYbR5m",
  "key16": "3Skgt4rKVM89XenrTT69Z6uJeeRkM13ZrseMminNAXeasZxwzRy4W9fVU9N4jMKWh6wmG5FrvbMhKAon34rSD7Jw",
  "key17": "46U3t847C1j1vP7CH9gXMYCFsXEiSGew5MTmL8LfMiruVcDEXx3oT8Ng5bUoV1atQKYLahk9Njnf1eBMj479CboW",
  "key18": "DZNKHm2AzrYSHgGYzDEGHj5wxpTgpeteXUUpkhCUU4mhb6qryUWxXmvoq3UgNoPoi6ZV97iEudMtczbNrdLVXRy",
  "key19": "5W2vnykwES1NCzrpkuqFaYZh3Kah49sygavkPk93cC2zfjfMqTVntoFgjxSVb4jkDb8h3vT1FndeCX99S6UVoFX8",
  "key20": "4TounffypRmet7rnfANDmGuN23T2nzkDdRXYKmk98eYb8xe4dqaAADxkrw6tyswQ9Qa2GPVhzs4BysHpzHCDPQtz",
  "key21": "5eHw6ibE6TJVx7rEEnw31GxB2vXVapjHzp6iKsZUT61bayykouYoic1MTeA77Fgka27xtK9CatZsAANXfBL1e5ay",
  "key22": "5g5j4XkVRoaPuPzNVA7BLutQqAhuBHPWJ7nUbrQGy8PLtN5KY4ioVQsLbaFWfGP4r4g8aqEwkFdGtYpWs9RNX9AB",
  "key23": "3Jd5qa5aQxs6dLe6sdACy691LD9RHgooVsSQzcU4jJ3WFvU2kASeeFWTFiV3Mzkb9eEpTZREWi7P4PSiucJ26Bko",
  "key24": "3quxLAdBdDzAn2ZCnmBB6ZBD2abXrESvQAyZoUPzyi1RYxygetRrbQu8iF548DV8WAMrLxNwh3e2VaTk7t9HKukw",
  "key25": "4A2EtuDosdvJ7sYoq2sKWEVNx9PW1XWmtEUwgRpm1PrEddBS6ivYvhnBtoo2S6Xy7g5Rg8HgU8AAXYFQNjxWqCG7",
  "key26": "4SonEmeP8KqdnjNuMkyht6ECpPcfWrA3HBgkDrA63GWgumm2XAk18aQNv7CGGF1e9i4qpcWRRd31hokuih4Qo3MY",
  "key27": "2jgmzxh1zrPvDmn1Y5K8x8s72qw9vqFVsTyyyiLS4wFD8nzKuPSL2MPd8db1wSq5Q3qjurc7Zga2bSyvdMGMd7wN",
  "key28": "4gRtrDGwvWvvD1JVqBcePbHCXr8fXkYwQHEpGKJsPyt85BqmayEHeCkqHcbGpaumfa2VbWWtK8A5qJ2hrVEp9NGS",
  "key29": "5YDXGAcur93Q5EFZD4eYnG6GgTW8gVCWrVfRXm7jHiYM6ksVzLbj15kWHkv4Ygk5GjFSVzHnLb6GTxce4J8HjE4B",
  "key30": "dShNqzmABVq8aPckzWCMEhxqHapdELXyYT1XA4YMhJuAyammttonWbLiaJJzyhVKQnikw9wFy37wsQZYUxEn5h9",
  "key31": "5XXZiH6Jyu16q5JSzmz4exNESyrDGXdo7i2w9bG8bTHJ3JkigJDsZbLYXrNeptedYhkp3HTB2K2wubPWv3oYqPDa",
  "key32": "272QwFTCwXZJ36nt7GCmY2npNwSH2mjcwsphPJDAXRsu7Km3s7DsZ1G1p9gWYH2d64N6CjaptJPNaoReJh82Bsb7",
  "key33": "2WtJ2T7oo5Z87UVScBcRGtBJd3i6qBuYTnftUa3ndpi1Enaoc1NicTYhCKwjibDbvQUEGwUq8BDyndu3XTiXYkiD",
  "key34": "2eUAZenUVvoB3csKTrp2XENPCfXrFnZTeZiwLgqt5wPvLmoEjphWq9N13f6pTKkXpPXa3SsMGieUQ7Y5QFqtF2kQ"
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
