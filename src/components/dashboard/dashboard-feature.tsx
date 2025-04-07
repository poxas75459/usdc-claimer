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
    "baQieXfn669M6xJV3sbAn6UMYMaoMm1ZhJmQYgAvQFBo7gJhRLouvPLsU9C8arcvfhU186uXB3VZQWhidBrqGzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cTbyLvDMNSjQRUGWpt34TU9zK3jwq1rVg5Tb4dViec6VsfwdxsAHMduDCxuKeUa17v34peAdHGmK7FXeuRhqoaq",
  "key1": "3SdAnvHeWFPq84XD3i5YaX4V5ajS4HvyobrePJJbSJbxghAM4PkWgkeMYoUa5t5m7tKjKCk9sC4B41gbwicKMnMJ",
  "key2": "CvLz5RWrrvELajUbcSSbvEJtSuCLPBddEtqypwyVdr4ntdcgjgV67v6Yfd2rwSuaqxb3PqkiKJ6miDmX3MnNVcy",
  "key3": "n2KgB4pePFhFqRtRM6tWUwtsFMPjE5y3vZSatDaZJVcJruCuiT996JZU9ERGcdDo7TS262UZLXE8tFQQNfDuHS4",
  "key4": "3NDDXKJ2kBEsAtBtGysruTeffGQHed7qxJbUGC5kK2Yqc8LyoeH3mDFYGw3Li4J8gs9GfYS6HMghp4HH8k4fx5Kj",
  "key5": "5DRZkKf84ThcvmB2T5UH8PF5j9xSSWzbSxsddzqbjyV42DntS84wkCTWbPt4nvT4ir1Y8GRerDBcfq5TtWRyLzme",
  "key6": "5Z6m9GPRYGmAGqbz3AbcHs2SxY6ff9pvY1gYoC3er1PKsj2X33mYxbwefK1ouKHr7NhCtTSg9MzNHtiGaoQDyZZv",
  "key7": "377dJn1feyuxWtdy3mdXSnmdhQdW39youwsMz8g8uBgw5z7iH9tXjbvpLCzUwEqrhrr51KWPsQdAVt3wCkgh4vbu",
  "key8": "3BozgmXs85wvroBHQfU5iikvupnRs3ahvEeMgeFdKbSBUdfk7KXrbMtJdSC6KB5uBXkD186FhvdfhPhRhVT5mUGT",
  "key9": "5HiyiRbzZzieVPP3MMUxhDYyrvEqST22AdSqmp4v8Kyqd3JYy4CmJVyNpWTKkuB6Hp6af7QuLVPCPjw4xWD14dsR",
  "key10": "3PPz6LAGbaX8fWBzgEZs2TQyr6dpZEoUFEwJbuhuynmS13YJqZ5wtXzkJkBBxxPpRkUusFHpKLKrnicqW4SDKvZh",
  "key11": "3gFYyBg8yMLjVfCSjM4rkqyZWCbjcqiCk977RDRNpZhwjyc1Y21iuWirJesEFkUatbJSxkP1qRJrh42MPK47zqmx",
  "key12": "3RAMoHGBgADn1XEJB69xHE8E21je5Kqfvy545B9EDkd4nD4P5V6wKaTgRiBgu5ajHJxJZH8N5MvezpDzqZuYUaL5",
  "key13": "2eR3gPskmSJdJ1ZdZgd7KSRhNap75V9pRxpFCUWC28ci6CNAsJd7RtvNiQwJn7FJBSSin2Fh1H5aSQLTqmjz44qT",
  "key14": "2qzjL6o8BJrLhLTEhJFBaTHqLcQYoFs4eUT3WumeeYcsKWGvXZsBcmfyPbWY8RUCgyzekcKvCkuc8btJFTvG1TeE",
  "key15": "23QvDgTYGGgZKgxsUGCbQaEGa752HiV22EwnrMJPfu8ZsdzZburAWtzisj1QBg6fdvMinkmm8FpjMx3HPYK2PPzy",
  "key16": "34qKddTP2xwcknM2fVfXfAUHgNvpQUPVJFmoeEip2cyquvYxF93L26mVbKxUUzq14JbNkG6wBeAwsHPtoUNgKRHQ",
  "key17": "4L2KJQZuDF9Rf8eb7M1vxHUJDfTdsrLaWpRbNdg4PnVR389KzXz7f5Bg8PyuDNwJbeiqnwrdLmuQWiTRHRhZJezg",
  "key18": "23fk3JCo5zNoextDX7imQ44WbPhKNMuzxL78ADhmBaNuaHokwai5iiHd5q8LtyvB5XALKLkVYjGLeE1Vb1qzAXZ3",
  "key19": "2syAGM7fsBm8vnUT9zKfCJ6L7G5zGTsextSzNcM5gfJuJcTosdCQEgG67UjRBivnNUduy4uWXZqaFgXTGZckRMMo",
  "key20": "47VMyfSTz84ebkwGaqj9GpZdAJQJAh9FjQ38WaU99hKVUA7f8r5je5hDuTYvVchcHDX9hHsBeDCFLc4C2H1yVuji",
  "key21": "4JVXkKqe6Y46dn1swpseoG2DsnQMVqijW9MszZox4XShWDXbj7mM277oia9vYuBnBpmXkHf6pGdHGagZZJYyeyJ6",
  "key22": "3h4WHuVL8bLYHFbzQi7BzPWmB651ZtDv51mVSL2NpSjyP68KE8JRQukvqHzrrf1AoKGufmXK3LoieWRwvmzMQidJ",
  "key23": "659LZLZ27Udnm5BMwXNNvdL2uVAFTxtXwnFJTsgMqX8Mopscy9WDH2JrhYAqQeUaUbE4L3ER1PrScoDAGBSJs48t",
  "key24": "2TMAYsSNPLAJ5XcGsunwvaVQeKQPo6tgbXoGkt4mMW9jojp1CMK2r7ZL5PMrTAwfgkJkvpJsiH2yxj4tHuoqmWrC",
  "key25": "47LwTXZgi1acBXpJ5uLfSHYRuv3T9h9S5cyBeFJbw4XaHCNX1XmZVGu41b2sxCgjQnkYzRNtV7v15HGxSK6jJu1T",
  "key26": "3hu35X5LFVa76M3mTdy6AHNCwoimQgPYKGJKxCFeP3MCexnewNtvgRS8ZWZSVzgMmUnzidmHm3ETou9L2vNViN36",
  "key27": "3HGRMcYWepHg2UZYbFxLPvLS1Asm3n2FvpCGuSK3g4H2BHF7KLTFkxJrBdPZuiEVAZDQG9HQhjL5f1C7gdvQuRnb",
  "key28": "4GCjZ4RJTHdWiKch59NTM4kbBwxvncX6iEb3YcV8jCExj8nkf82Z6rFWpe6hKAjGuSPgANKfeBE4pi6LTVMZ6aPr"
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
