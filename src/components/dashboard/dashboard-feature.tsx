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
    "412DGPW2f3EeWgc2k9qQjHAzx9LKTCqR6JDtwGknEk6NMziG67mYjZmb9BFYZgX5hYs4Tq6qGwdUDTZZq92yBLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n7hJwD6wpJkVf5hjRRk95SDCBZnfvLrdVzRjpWmg49garpRd8BLKUvBZmF8S2M17SWPHJWCi57SyiPrV7a9ynrG",
  "key1": "2ZfQuHgUySgUpNwCuf9rci75B4sZ7L625pjWPTAvHRM7mNccZN7FXnneaqk9TnMpre6532Ddoj7kTWqvSF3bWX5D",
  "key2": "4Pq46LuaBke517uaVjAV6mFcBJWdB77UGnCyPG6HMJi3B6AHP2TAfxYgvDofrwqQFrFJbcVTkuBjr7tJmQzMUvfX",
  "key3": "52EesiHppsn5iRE37AT6P7jeNDwTAtYMwYAHhq7khfX5JB7TCUrNsTsjgbbDAboG9m1tqXV2tDfzYong9Wv9QFS5",
  "key4": "4CRL228pBr6wcy7ekJnf2fW2vQ6HuVY9kbLyARKj1qA5gihwLFkCyyNpAVaMXxvMgPLQvVZ9osb8wT5Nhmcty2so",
  "key5": "2nFi8Jjkk9K3rk7jgDXE17o4gFwZLna3mHh5hqQujRpPMDzd75Gw8wsZgo5BLHfG5jpuJuq2CBjHKkkkK9cSS2Bc",
  "key6": "3icGtRojEmqRcpnLNRBJrxWisPW56r2JSoND9JAFn2HEoc8tYP78aWbzocHBnTeqiwVdoTaG2FxygvnZcymNA6xR",
  "key7": "5YWwZy58JMqw9qG4D5wN6ASqfxaqHodn732JnPGG1x2VZEQzpHEsxRkDKRQA3iCMozoZFiQ1zVvjzBdA4HVnJJkw",
  "key8": "3Hb8YTvyzQMgyoqmMCwY4CD2j8Z9pLnwJe3CKM6hdLH32RE78n6Z9nyUeksU4C7bKEXyqmWjcyH5BSgoh3AbZ8Ad",
  "key9": "3bN3T2x1pYY9v76BKVL7zseuX9VScdF6UV3eZVGvijUvC7xRXiFzUh8KkUmRZX7nVv5DdcmoRJg3x36k9ksbFPoj",
  "key10": "P1NPRZjBhfk8KW5BU9Y1LEvndsTcodwrzTmchCYGrnXRiLiiq4uve5PvV3jAjYck9RaMjY13aQjYyY49hHLouNz",
  "key11": "2SNLF71fzi16zWhWdTQE4Dz4XzzXwF1qHoQCHk9XnbUVZFgpZ9tZMRVLPwpgswBb7KobWjuzbZj6Ae82P2LUPRYn",
  "key12": "vQTiEAwUrNVKpi2eJmV384sP9yNo2vsuFXkemrbEdxE3e3XU95kNmQam5m41mbwsS73A4NNZtKJKbzS1Qduxqy8",
  "key13": "5qczuCWDg1ar8GzuVdABUcuzWW2UGvgiNqR7pBWcAhGvRjnH1ghM8sb9Bn5SqDJSGSYiTUBYBaSyVwsJwfYrWjoY",
  "key14": "5R8fZb1FpVsVZgg8PnkjTbpXFGwhut7qgTRpLEYcdEDv2T24h1uhPxubYaGJ15WHQapHjUvfKpUFyEYGTUELeecW",
  "key15": "CowJKXqp8uFkTBiNu5wtam6dPXHYo5PWsjSmgJrbeHPxhcafJ5UMG3MgsVudjKdij11LPzHrWvmNy8p1EyPq7sX",
  "key16": "46TpEBzPZkscyCU4ytKotUeoHqjAFFLgSuzKsx8w9v8muXCUrZP1TheZPoSg6ev6yVRDMgXsSknqutppsjgQRVQU",
  "key17": "3XFszRAXDCkaaEmPoShUahcJZC9nNRrCBAbRFcP5Zmfw5v6jN75voDZzs1Jrgnnc7A7z8DSZHDGGbfDCNjY4Z1rX",
  "key18": "1vxWUEEHEcbHBhT9tTAnwKDWoHqaytDJ75zDgG122tEnjzKKDQXCgtjsogXqKR1wVKpNR8ETQtiBMNFzAomhQ2K",
  "key19": "2wQtAn8YCEYLjNV5rcLApW9fuQdA2ZD32JVXS9JtAFAW1bNCqmCE66TdAwhph4eCeMMurmqFLLd4771v37DyyDY3",
  "key20": "q5BZmd9Sgtd9hNnQuqu4AHFoTrpb3fuNsfzvg6j72vdxwXWdp9Lg2pYkS7edxABcGKR3an6AHvoj3ojZDzkqtx3",
  "key21": "4FtEDZt6DpC3FxFwHPSKjGPNk4U8RtQ24dpYZvsPvQ5h3fRAqPTm2r5Giyj95o771PrX8B7B8upiHSp4pgCLT4ta",
  "key22": "4y3YS3DAC59ksDHHWw9y142UgCPEK1tSNP9oAquBzZPy7TBMRXAKkd5xSiJhLbh2SoiaPbegDuodPXkJmQ7cNcAm",
  "key23": "63dzWPzYbMosUQukcwqj2fzv2gjPsnusmii5HPVBJFyw3Wi1czVJmZPXctTTuE1nwGQAPRnkSVvRbMmr8kQJKJEu",
  "key24": "2wLQiNqYYyecH8izceRT5AEQoZtauZCHxQDfC87vw7HLPP89pgPGuhc4no2HQnTbNrzus4Dr8MNvkUGVA7k66TCU",
  "key25": "1BXetWwTGogBdm9MVocRjGs2tgLVZSwC3t2TxFGWKkb81XZg52m9vSbWQq948g7c51GF5V3xga2G9Rp1iXfpuqH",
  "key26": "5tirmQqVCKknrF6RED9m5wk65zy81vmALVpAFcsBpUKF2VFBhDUb4LDe8kDm68ukBUrxZS1xoXjiGXs9tA5TXj8E",
  "key27": "34fCQPBBQ1aVzc9dg9sFYJmE7k5JVN3JUixGL77y9VKFUuyq5CS3GKEvMgmNqq9dNuMGC23BwsnUQA4pztaW9yaz",
  "key28": "25rHoPXyRJTSW11FbnMLe6esfHXs3Z7KT2jH443JadEEyJq2N5npES4w2mpn8otJCvg9687xupKbwyoFcSE2Zv1n",
  "key29": "3EFvrDy2hcWnwNtkHujtnmeG7Turykkbo2zvHzjHjHaRAzUebktnY9zPn5ygK4vAqvDRaJrbVU4dB37ExizhVB8J",
  "key30": "24GqHLRBvEdWeHSX9kKfSy3zKMBxTjbaLgKaasHvz9kRDrVuLnutanTCGSTVrawBVHcj3WZMTXb8h1PzwdMYtAo7",
  "key31": "21H6VYoidu7JF5wYTdFUYtDKgnVxKJyMDCa8z7jU4hzYrmU366ib7gy1xrFtCR5T1BXBHFhA7Dh7h4G1RtcDmDnS",
  "key32": "23isafkTUv2NrtH7sZ6FfvXv7qznb6LRJUWzAVPBnDhL4NKYLZNkdGUUpSSj2Gh49S7vt4GUKxoHPZ8ZK1JYQhWE",
  "key33": "5EspSZAAuWVAwZTuxPUy7BWXn1N1KM3WyPSpqcbi8g4FgfiZyLyvaU3UBkALNAMhfsrrweW2VDdiCDWrLQQ8SrV9"
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
