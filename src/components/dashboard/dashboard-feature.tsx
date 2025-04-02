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
    "gaZErt8Cbm66x74GPfCgxjRWAEhmXhZz64cXzcN4FCAcWqNGS1ZqSm1nQ9dXvLHQcbZ7iYSxy4fZh5tMKAJSABi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42xVpkouRJmdBkZWyxN1wzXsd1ANgq53BXtWM1oaaUH6mvsJK1tdt7on5DyuD6MKZgoeohn2DAuJbRQ6aYVBECgf",
  "key1": "4EqjxyExWDcf9hTJAiiiuknYbxuMc5VnDK8UhjwGDsLq485k5LRFowASo6YUVCxSEU9YUaMoh28H51U65C7aw5kz",
  "key2": "5SUhnp7brK62E7FyGBvyc7xihjuVnKaWuHtFo2cjNakNH2FzjYQ1i53r2jnK2jZvzW9pz8oEwHnPkbnrVETE3Sv",
  "key3": "648vNeu43J9iYBv4usihSe4Cb4EyD4NJmReh21aRiS7ipqbVvjDkf3WQTbnpH6FHseK4kje5hU8WBkxiAHSV7iQV",
  "key4": "4FXSjtu4KayUrdvbEcCLED6xEjvGpF3FXFEpPuR7LLN4aqQrMtSfJiYMW2x8H2vKNKScxX1Wie8baBWJK4eVNKfz",
  "key5": "2y83TinLvXY5AYEZ7QNCSTjQfZkn31B73C1eKWSZsX1P5aQKejVo2NKtpR7Uyp1jAvvzBKAvjGpguMGcT5wuf1cX",
  "key6": "3EoKPt6N7FFRVJzF3hnauMqHZcsp7BbGtA3yoNxdPLKMAaSHfq69G3rLeCTWiXPrPaEmYPYvqJrbFWitxoqtx3q1",
  "key7": "3MVpfRdr44MLi68U6hzsX5xTNrtFfKJtPLMYBKMW27iV2TRNWtzKPUwF1d1TNddQcpLcGkNhKpeYX1u4RzYXgfSg",
  "key8": "3K2rv7N4Ww9qp2UjL5mcP6sJLt7rzccXgaZAhxpbzjD7XnTbDibSxc3JpoQRjJohfkZeH5iGPfQxarH8jRJMynqE",
  "key9": "4ws5tj55yHjd1CraGaU22sp6USbEbpwzzJR1tPHYZMewX2aWNScxs99L1y3GjBV6vgEbTRL1Gt5uSZgwW16ikKTM",
  "key10": "2wC9SxENUQrhAgjmsYBWMJ7893v3hegTo1RzhcLmrdEuM6pAj65Hr8fFUeumNcaTWxgCSRnvLFK5E1CEN4dhhciN",
  "key11": "WPfZCFoKSdkfVokBVR1noTRTFdoFNdLoCrt7hCiv6gcfcGJbzo6ZJpQcK1VDArp3qZNYopLqhndk93GQU24ktBs",
  "key12": "crjExWf1AY6CWv8surJqY1N4VL72CjCJR95YeVJBBHUB7dkzYzqw5qACJY8yurBFC3dqLHpAa74fxxNpzeRYu9t",
  "key13": "4kawfyu8JgqLQGnttYDqnjaNb1AoathJTPGvcAXH8ChkGZjGAr7yaLLBdYodzMxP7NiHwqavz7f3kjgYUL2RQitu",
  "key14": "3wKjdbCLhRRZQogNpY3eZj8SpcEqxwFitie9C42WJYaRYnUnQvu2bRwLJrRRPzeXfqc4UQLX6SXmGN3eC2xGtE1B",
  "key15": "5tgs34sTpZc1AnyFUtm8JbvXY1KAnbVFPG93jjafBMBK48geapLsALndxDAtsRF4XyCeomdsMjpbpbjrRHiPMpcJ",
  "key16": "4SznqgQJZg7D9AGZWWyqXtkyCwv83KNrK9TZWBTwX7VvXoh6G8d4G7LN5zdLNY5SFFWn1UfujiAB4zSPwxgTEGGn",
  "key17": "2TZm2riz3cFZ9cX8YnZirANioucXKz8WYVdR7pMyxcq9XU2TZCgfsmrsDzVRWschAP7VBrgvTSoB96xXF3LXQiVJ",
  "key18": "675wwUSLP4czXpXNGAFMxj5Z9eNB4hQhdc8ncZggAKJGkr8813Q5K1MopAYBuCdy83vU3hogXQn57ECp4x66p36k",
  "key19": "4htzUufGS6f85GM54fjvkskWWck9SFSYdnZrXm5X5nzZxLUmhwyNxfCyhmj999Ng9hGYRTWuQH32MnA6oWeF1Tsz",
  "key20": "4YoeJma3CuPob2naME3jXhZGVCWarhZoALrD5h1xypc29NrgBLfsCUpsioWgxE1kBwbZnirKhBMgdLJeB3Rpa7wQ",
  "key21": "4w6v751ZrFbz5cRP2WZh1tErwrXRiqyGXPwfNvtQj2e5dXZQijCJ1TLWe9zVmX8kXoa3njmi4fL4mEB55o8Hqamx",
  "key22": "4jHmEodo1YmGASMrwEMDA9V9HbVAhTStCTCopJco6Ke6GTtmbEpLJ8ZZdmcCZP9tyMDR5X2MV3p8AkreGFiHBKsM",
  "key23": "575vFjhu3eCk9ZFBeSc1EimjZzt1snq42zJ9PEUCr6pY4e6KVixKT5d6tTufQg1DxLjB2SGzpahcfVU4NgWEhqmA",
  "key24": "mrYeysABt7GoGtAD5XMAk2NKQufiV1V4k3WqbSpa5cgQT9S6idSvhiTak4ZpZMUzhTC2WqGkZ6uQ34CbG1U48kD",
  "key25": "2LM4MaoqbXscF3wnt2nnWw14WKCnbxWbowHk5tAkTyM4XQGkTHqu7twhnm6rJ7J59qMeLWignkihe1KXBxNM9bSB",
  "key26": "3edfvnWKiQzVRLfZn62ie7UJigzJ4J2KUuudEJU75BQk2My2qgXQy2N5tVWk1gXymymfi5zVnSyD38Lbx4kNd2Y9",
  "key27": "3ySuRruM9W4coq24ZoGbSdfdceqkZY7EkTotxyTfSzz4mhu2s5bueVURoADdf5pWFZ3ktPHRxwSBYYaq6Lynj9tk",
  "key28": "3gPxf7BMwFEy1uED9irdDyTBxka1CwsZpyKac4WbH6EZSN3ZURoTaBByb1sacA5iq4FTwJGvjNs265TcZthmQtwd",
  "key29": "3LFDhB8UyDe3tmmmBQeAPYKBTnfeBL1WQtqRFvdNT5HUKU2pe95oKU8wU32riGYVYoUDP1edtwSenMcRtcwyfCR",
  "key30": "3pPhYV2Vzsv9nd16uQm7uJTYRLTzH1bjHS7rRPUKHq8urQoahuYvKHPSiJSRwNs7qDxmm89t3zGmjDmdxB5GHB9s",
  "key31": "2wxGDjHpv7q7hPG5KRN8hNrN3mjdrxXf3cnCmJbr4bvbgg2guRHQKG2gcBdKJwvizY3iTEHVzqcaDg4igtckw2Nv",
  "key32": "5mnpwFZAqimbxbXdKKVteNqyhg9QNKSBvYW1VGzi4N7fzsNRdAPTUyn7B1E9Ekx6cC29yeToh5jEroQf4qEjo3ZQ",
  "key33": "2tv84ML2achuidxFGJBFcceP8qqaMmMSR5SqFVcBf1ncgY6oPNmeGeM3nvczvXWDrzt5Yx2HQHPMVqPHa7hMDmQk",
  "key34": "5hf4WcvD1iPASvYrBzFjEwyNLG5YPTHNQV5NxpumBYUejdp1o1gYa2U5BcJ1fGjAqDFHALKQKNoTg62EL1t6xXiM"
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
