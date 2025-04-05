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
    "4e3JYoHCf9oNmpMPrumAxNqfw4q7oZHDQWwfKFbNfWYr7Yk74MZZ6GP2UkyBndvwEaFvrq1XNGZq3YFSduKRxkpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QXmQsSjR4dYDbRQMkyd93xZMjpfsPZZDAHRwrW6nR8Pfwuu6EYv7xMdi3s4MvRJmnu6ZftCqb393Y36r25mXnZn",
  "key1": "4ffjgpf9UvtzPLG88GdiPqLbWiL3tSA6i29aaV8QwLUxfJEKYP2jC3s5zLsxB9gbh76Ja8sQuLD23RGDVjQgZbBq",
  "key2": "5pri8CY4kFsycvtzJ3szq5oUkGDZ95oViTeVnKHn4PT51yuHvesdEhSzXubDkyVr5D4cvT8xAYwsGiGKmz4e2wz6",
  "key3": "29F6QPQWrr4K4cSnerCg9xsjccBSASiJBfvqWU6PS2DZ28m8EH6e4p5GnQoJ3Th4bTBtneSy6srDt6xAkb8eBRxs",
  "key4": "hSyUpTB7GcuEmh4gLBpJCKxDLNxhCa3n1uZCjYE1oMykBTCm1tnn1FvEyM6pfbuyQFhUvjY8GWW5FEjSqT3tsuY",
  "key5": "4Wt8H8gMatdMjuKh6E7t84SxEPJen5WHf5MWRyp8AbLzBhjicFeaA4cVeLxE9pALnXwnM7sb41ussYcKPbCxTCLD",
  "key6": "5GzSPhUx6z6Rif9dyr3D4Z2CYnvLYYkkqq3TA65KnZDGEmxLohJJnWkHRSwXmbaca2tY4CJRNFVytKSMN3rxxwf8",
  "key7": "5oiUomeX9KjQtHW6rTF9ewsppGbCVSGH6Enji1Kwpdix38VGzc6iEwdTYFcZaPMLrjTS99UtVJDuY6Sn6VZgRbvN",
  "key8": "49pj5sf2S7m8Jd19H6PN4ZfnjfF9sLtyoLsyCfFchCXo97FxbM5uCPUskQ7v7p8Rik3uwDtbNSgP25jriaepzXUP",
  "key9": "2V9Y8NFaJ1iGNoYG9GEZrpxLBoBkkb8yiXEf6xGqbARPYy2rjEMZYPpGFYqzkkNXUZJ5srv3Jazi1Fr41AAKHnnU",
  "key10": "4V9wdLNmZQEFMrsNDwJrLdyPFCF5fN6P8WBF5G8g3dHoSCH24M2De3eP7ZaotAtwPRrd7MhkF9diK6qD6SJFZk1A",
  "key11": "2aeB3MUb5e8WHfvufjfQ1p9qyqmXvdc7yrkyvpwqGsRf87qaaNymyGEdHmYPFmiwfjvao6WAS1pSbrAUAWTi1vrA",
  "key12": "4oCrJZgHznQKVgg2tEMSc6yfiN2bpKiv19qVcRgBbBfsvjLPFgArDmp7qCbCAGsjqwMZKWTVdUitYLhK9ZLZCG49",
  "key13": "5UVkiXpjKcDSY9rp5oWkQAiuQdYwE82z4XJQxyBXT1mpsgXiG4o4LmNodaq8t1rQkv7yZkRgtKPaFfp6GgpX5tLf",
  "key14": "5wS8naZ7TQGqCEwHcdHigvTN1nsDFRjGyUFiy9u8q7AsCPiXuAug11J5NWjjFdVVyeAXbKBYYPGYsuHsMBmJeeSh",
  "key15": "3mjnG47sMaBFvs4rpjGuyckHBi7ZVh1AL8tRGD9nZ7MurX6rR58RdqzmwSEyv8iKqAGG7uoCQLK6tG9HJP29S6sm",
  "key16": "2ND9tqB2WvHNttjkkpGU9tftSuY6ttH2jEkpaBmHmgMfv1mS8VfdM9uMYKjnG7djKs1j61mCGqQdmaohfCMUD45d",
  "key17": "4yUeUPbTVkesxcu1vFLREeHE9Tmx9tREJxv1JthndEojpCNp6DE7T1arD51BLLNU1ZuCJSYHzUo1SeaNYvESNpJH",
  "key18": "5oiX4tssF8XzAgXyqjviJfu5Yhj1M6B4cgnBv6V9j1dYk4nug8Q9Lmc5bQj45Ej1qWvbwrFFiXTSTBK1DMR7cWd5",
  "key19": "3ZzpC9AX687uRP5UsKbARnybYEKudKatvwzrXkCgjByRkc4AoAyjVQmXJHTbyWzU2AQsaYa1HVCs4t2zrdCTmZf6",
  "key20": "28FoGtcWBRSGKqT8KgeL3dRmWXaoPH8MB6FPSpJwnGHqPmkxqntAgKF6FtwVXBHsjTCa2ecuFU72HdroogRGYAny",
  "key21": "3Mqh9bB5q1PsY812VxvNhWM1uFbvmqRdzJ4Bq96UHaeF2LvBmxjSH9sC7xVN78MtXj75x9iMfyPeyc1SaD56H3ZR",
  "key22": "mJAT7YUQxkbjnBZKtTHvudgjdngfJzP5SzL5TjYBLD7WKJiNraajGy7EmmMWTu3hysMyqn9S9kfKkqUYcYvkwfg",
  "key23": "2cHHjT6h6jQMT8vVfPDNoRhjcxdKUSv5omdR8xSrcTGndnvc98BggmvrPUQYRDzNRBQV4oAGiwwygpLNKdHgHzbX",
  "key24": "5zbyFoJLyp4LeFHtiAHVBR8JdRYcU2T5qTb3Ckiztjp36NpgXchtPtSohHDCNa9dAhMRmB1rkw6Jve9cNGr9ctnZ",
  "key25": "3ncFAYo3bXpPQU9TorLpCyxQT7eynfmycmKWFF6VNamKRCu851me3om6i7rGnXYqv6V9bLUNd3WKdDkiNYFvJTns",
  "key26": "4BfMgZTFrrcGDXRBaLjBBnxFELQqbKAtPvc5wV7rXN84b6eooZW7VFHvBsgXRtTEacnV2M9BycZUbwLdMzDfJuaC",
  "key27": "2yXVg4PzhuREtgvBwU33ACU3iWj2H3BLiezRWvtPiTX5pMdWd7muHjZ7eDGZifNnfRvTVS99PQDDh2N8eeK5Kkh",
  "key28": "4CBzXe4EMKunczszxcYXyzuV9qmKSe3hdCvbEpcQ16HeB7dfasij23K2qKH6U5zDkHA63vqNh7bZKxCZQh1eb86U",
  "key29": "USHPVDdHD8ahW7gvVwN3udRYUVrPWakTvcAH3YEthWVaA1ofKAB3tx3NP9kepGAEBVSitDR9tNEWMfVTpsQ6khp",
  "key30": "3hSTYEqj6nKsNynLZwtTgjwiGJCnktXZvpjBcRv3aKph6T25EsWZA9PoYshcfb7Ux6kjZQx2bYzSR3ArPHAyzGYB",
  "key31": "3DxmfywGVJmJStQEg2tHtsrrRGxNyD3kodavrD74rBiFydYpwaAn1Gn6GUwQ6G84Q7Gz1xAYuT3F6oUSAQyMEsd5",
  "key32": "Fivsjx7jCvaxEWjb6GampEoDTUGyfinP41UcAeZ2iKVec93Jz2P57NNvKvE69CnQCXjX6sJseqizpEBcf6yU885",
  "key33": "87u25ifWFfZcJzWoQepLW8MaZcwcdW87FBp33SRnAqGV18MpXD8BGXSp56LmQty4K9GbDCoR6qA5jKigTTvCpAR",
  "key34": "5Q23vDSQWiDvgV56rHXv4PgqhjqKnJBtPyrRHjwqdmknXxHXuDib1E9U5qw2EVvx4nu9W57iPZodRmfEzouJaGVa",
  "key35": "5QYiQ4oe4X7v9Aa9QuyCoirHV5xQHK9uKRMsAWvL4g6UpDBcBn11tST8tZqrvZpvpbU5p1Ux74Nvs5QfBPeDkQV9",
  "key36": "59nMtWPTuhDs12BMFs1UcmAPTtKT2Tmg53ZUQKK4wd9N8ehRz55coShYc93S3VoWwvz931dGL7ugjtuzcUnEzkBs"
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
