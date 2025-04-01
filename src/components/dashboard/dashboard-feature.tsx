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
    "2vcY5vFovX9iyFq4UjuhDtZBHvbqgQnZgu8YNkNec2GMujvKzZqkzx6LbDFwuc4vfbkN6muce4NvAeAxMqT5FYpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jKcLN3MZ6YDJFGBhW46iNXVYARLFKfSQ48zb7AC7MMdFpb42uQvJtuSTq4z831uYejwfjwtLCQY5KakPLnRtqdG",
  "key1": "2wZJSLkypSaizx4Ho2SpQGbvNjtRG1Zet2VUDU6tDygVqvPznXQNYwAfrS9sBw8iZHRFqfcKPCgaRuciynk8VzcC",
  "key2": "WFGTywsHCvXc4ZCjAq8QbnyPMQNQAbczg6C8vKtwiv6GgKUa6fLAMH8KnqDyc8a2PrQzb52gbGQ1ooEXtg1pZaQ",
  "key3": "2wwHeSRh86DKuLqcL6CXdoWY4UffUkjLShe51ykf7K17EysGCbhrKg9XqZjSdzJMDNewcVTBRPVYUMWjbYhMzi8F",
  "key4": "rKa85zMhhodRjQpVYFz7h9D7zGCAjorEtX9m88QQ7jz6xSwF99nrCpud2Q96o626L9N2UWWzae9Q7waaNGUmLSB",
  "key5": "5HtxYzBTFtu9HNucqMiBW7tnM9jUNEhUVAixsKRw7t89F7FEHr6nupN9efsdZePYFBx7JShbMDGyKRKw2ohKyauE",
  "key6": "3qaQ7teAid1a78sPCBXytooqTwUMtiiVG7zb4xNA6Dstn3zC8szU84DrJ9QxfacHCQWCVaAD77r9cYWU8VyFysZR",
  "key7": "3ofPm1NmiSUcH2QE5q9iGkzXfxn4W3hr9sZGTKsvSZcsnV9it2LDpqkKAaV4b1Sa4BpgUig4XSJJiTvjjMMHfGnt",
  "key8": "3YqBYqPnrsDED7oFJuZ9rha3UrU33yTWUjhuDHgLbxn5hcMygUMcm49tUiFVhrYGoKDvgdeWbTjkYFHDqXW2tjLC",
  "key9": "Q684tymFWnj2NyogkapY1FNyKuG3VjFpRZtNjbL3wSSsewe8WaWZmx5RTJsWPNNhWxzoVnmkBXnMxiYwCk7wupQ",
  "key10": "21iaru8EQ8N295mf4ZkwDNZa5eYJkPBA2Kxpm55A1h1V5PR6vXFi3ijdv2BxxoB6iwosM9iy5uxjrw7C9Eh4f28s",
  "key11": "28TBJRXE8hKkAk2zMmnqDHiettLw3y2VwKkbibqb4B7qN4oYVqhX7FknJqPfGSD4XX5XtM5nAY5pAZCAhhYobxUH",
  "key12": "3bbJrrQbT8qqLzQgm6Fj5PnRop8VDTUeDDMs7E33btAWaZToEGryotxKv7YfxZoZgwTCnqyD9pKsx6BGmUUhM8Nm",
  "key13": "1fUHm9Swpun1acg8Aw33vSnT7yL5ZvPbAxonWfe2NxdFXEgruwnbRQihhWZBGfHfMUFujx1nd54DfHf8mXtsmMk",
  "key14": "3vuYQgBhhBhDN2FbfTnr351cmbvUTigWDsU1tvErzrfaNtbnEL7VcC2E7imvdWp6G6WsTYAdVJJmQ58C9nmz4wcy",
  "key15": "35H6LkTT2VwFFTU5UZrSLC1rm5wZHnJfsLerQ2ras8BUt1SMNmjhw7Ja1bqntb7vuQWtjcFmMQ4uW4mmtaEbxHnw",
  "key16": "4EkJYESorkccAGZePiNu7Mfx5nB3r1qyfjai2d4pbraBvFVEu2ZutFpyXYbzEBewsKs9N3ABr7ucnWfj7jj6A5ct",
  "key17": "5T7MqGQdBgnn2Aum7MXAbBXnvWTqNvgvbcNMXTSSMpKpZ61URtKvPwSfJCCjThfhAfenFtxdxUtxFRYKNc6GnEJX",
  "key18": "53tWr48eU4XaNXeV9BKhX4rabKfz6X4nsBTgo21ohkVgx6gkFCeiheMzhymM3ncnvDDKRuoFYruHUue25XpKZnLJ",
  "key19": "2abkQGUpF3oFWYo9XpKEcu844tdgF3zij6GyiLfg2jeZKtpAKGxyqhPc9E6BZEsQiTWhe5WPjXHPTzXjRxRyAh9s",
  "key20": "4G2cNrMkFNxZY4Any1hYeygvWp4w3qUNazBaYdTrHwXhUfMuVCmAVVB1JXm4hMRNjZ2wg2DkXbMVhcBd7TdYuLeM",
  "key21": "3dhgqWE1XJYen23tycumNVd6WG3gtXmCpuUeQLgedtFw6UrprtydS6zW9oSqg3WxTFBSNkNxb1TbJVZpCvp2x9K6",
  "key22": "3nsDJiXWmnUWT9xLKzebJFTnY5YHYrs9MsyPVPb9sTJwPH2Q85xWrq6uv3BmkvoLT5S6rt4rHeY4N37WrypRop2o",
  "key23": "5tFKx3BkpRpZfcyNdD85DXNp2cE8a5AeLCLnRxb9ctDubMtXHyim3DMWe5W6peg2DRx8h8si6qray1rqiBNxJFRD",
  "key24": "3iYvx9dssfg3hLVBfE2HPQTsyPVwF8vrRCxQGMrqEud82j2o7wivJWjzBWCVUQd3uQARGHLCUDx6AKBLBVgYjyh1",
  "key25": "2CdNxWccc2GysvBgwZZcJpDAjVKU7GABsXGZKjPtoe9wsqRNHMBa99ApsPcyy995AYSAxTTY6urmC44dmFJmf95e",
  "key26": "2VzpRGdgyR8jwyAcK54RUgfHTrxqkkWzF7YFmfymaZjGxvKX5kDn8rby1vZL2BdzSU4MpCjGdtdF8yUasRP2sLHr",
  "key27": "4HrKBnxnc8bKRDJX4kteBrSK8JyWsWJ4mWFKxaa2TYoGdYUhb93sjmYZ71uRnwrNfszkfU6oMcwxDGWiBWVAFDny",
  "key28": "5UZNanUBLQgTawgHfn3DXu54d5jzchmeXUUVKjDdbGBeTeHV2VNMmWbqa39jJsVgo4pmzcGgFaFAyuk6qFJDbRGE",
  "key29": "5vLUH9xkRF8u9cBSmJDqxZbUDRUx1sphbzJNwiwbT5yQfn6VBY41xfUrYFBnMroX1iiq25mMhpgPuP2zH78u6wRA",
  "key30": "EVgEovihc3iTwW3reMzUqUmJF1nYnzhTCEZDxg5BsTCwnsDJtmCnqVUdPiVVVHisYWeSkyJPEWVDLBpBf3G1sRc",
  "key31": "D28qeueYQpDBpe5jkeEGSDeNoMg4mugnKc3zT4TSn54px686577caFwrwAbVGcVTrEDyec3t24E42CHGHhQxqfV",
  "key32": "3q3oCQfJUTkg7TC3XYdigjNHbKMwvgjh2JppRWwQRgAJvRsZKRp9XkKzwmtpssh3M6Vdk4tFoy4X8zpbymLyEN7g",
  "key33": "4bx3WcfLJ5tUTmB3ZN7e4syCtLX5XPi8f7cc5n5icab4JkHHG6WEy9yVkyj3bM2jZa5EkjH6cQSVkLTddZ3KMKjb",
  "key34": "67rWKBm7ooC8njThCDp2BLRD8mpSn6q6pswYzF7C4Uc22XRmVsjQd3scHEUzpqRjWgMus3V1vA3fQZyd7nMZbuNM",
  "key35": "4aiYGZXaouFZ3i1ZWtaV54mNjgGGwddYCFAjnfdBZKwXWFoXws5VWczBexb9DQzRZwY3bq5pJijSbJZpqiZJDekF",
  "key36": "2mGjF3ZEJkywGnKUcpsLpGyRJD74Z1nNmrpmRqgvXxodEkG9XUN5bGF26xPyuRPupPVwLaLX5hpT2qq5xJpoy3wm",
  "key37": "5Dw2BpPa9dczcLZ9jLcidMLLp59C7B9CPjoKCDmPNKFDT13usSegsDiHGBTaovbNNd7ZtewJmqhyHXNgL2cNRkFt",
  "key38": "3sX2EME4sXwDvW9eiHjtBuVsSAia4AhUNHLeakqvSDDEA5HgwS6ggZ5iqhLvRvaRCpSyNDmofWBDxzWdB9AdWjEE"
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
