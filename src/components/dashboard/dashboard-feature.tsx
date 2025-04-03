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
    "4mPNqHYbWEX1ECEPMETpD6SzugmGSUw4KPcTj2h6vij5zQhgUb1Hyw4XPkMpqw36wqkfqnBHVJiEZbnJBCzHHi2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNTwdDWWJs3i8MHgUqLFzepQjf67EnDtpX2mTbviZmRtM5XKXnDJtmrStiQZfZHysSX7hqxgZDi2eoopQTPoyB5",
  "key1": "4rUb9edUVpF7s2QAWtBUeMpbQZCqsQBVbqMjsYH6MvX3jqZDtei5L4Tch6q4kycdpFwMscyth4uJogoq3EyBt52U",
  "key2": "34kSRmmidsyYMrTMThw16bk1fXDwNUWgbDjZtJSqFXg6HGoso3HqM6dEHnp5jPmi8W9g5RWPrciDXWwjSvmej5UN",
  "key3": "66h5i1hnv7Te3P7dVL41u75SaReGuy1LTrjVYfTRMXGC2AECSXGitvCmqHnE4uDBYgKnoDouEYQyATDNHGDgTfdn",
  "key4": "2mAH2SYmH7Qwr2Ut3nFHxQtixgd8fKf7dY5hdsGoHX3GH2Gp6jee77RK162BrSUJubjejwq3xDeoMcpgLWLvzzPz",
  "key5": "4sUbzPQCRLYEULh6bbgRbDpdT88yBuhQLgDwSz1gLWoUtLvBvGXsrdduvZWtgXa2FMXv47nKejUNqvHYKG83wiZS",
  "key6": "4QGTr4b2r7sU9wiv2xiVFViruVArws1zUgeYgtfDWbthEoX8SKxYoKYaEoywBRaVRruNiiL3JmUnTre8Ruye7Kh4",
  "key7": "2zPp3TAd8xwYMjD9UZnq9aWTiSzAhKiEXwNKHD8TdxdHZNWTdDmZHFPKHSuZhokWr8DsV9GhdnkFp5vZ5ZMGpVUm",
  "key8": "Sup6FbY8NTgSLyhPcc8qDk3GwL3HZ7ffLeRB3cKCqjCBoq1YYCrwHcBLnyRVs3MoxfNGugeZuk7d2HkJah85V4k",
  "key9": "4iSwNU4cPDD635mDMqMQu3vbgBKEwgGxXybBykTdWWDgU1RZo9hUno3gjByBjiPdDPHQmdHwMA9oabUTAcWFWZG8",
  "key10": "4EWjaCfeLjiiJCxzseobpg6o9Gui3vfD7djKDDHFixjGsBHZ32uHU3NSh5nU2fRRMW8o1WoChsUcBmmeuo8MoNWv",
  "key11": "3M1WhUEAGGizzWaSiAoS9ERtDt9SvxCyyxY61CULKJH8RpTV4i6xujHE1SUqoGSLYS4o1HCX4VrGR6nR4LvWctiy",
  "key12": "3CobjTUhq2MCKeNCbzTxst9in2vwTGJ3mFaxUUBU2ToBRNMc3HfMjNNHRsSbAyj4yL2CbUYAhromzd98JszrTh6u",
  "key13": "4Z9T2DYiPVz3aoVu4ASc79jTmdMg1hrx2G5joX6Y1ugjYmgGSCGfy9E2t2Tb3GLCFXGytZ8vQ61zQdmuvD7ythAF",
  "key14": "2Qj27mMCzscUfjT7svid6jB8Ppr19tBwm7kGiFnwXzoZV3Rh9hbGzAiQK2MXyHVnaaR9dE9RTCnqPyb51rXJgp1H",
  "key15": "65yUSxukdw2VadmzoJmW7JoxWSM7M5zXJys3a3VANKkcf1AGGyfY3ysnGL4ZSY6bufQkdqeMT74z7vvNARhTTD8E",
  "key16": "3mb51QmjahvXVs2uzDoeezQf6wah96nABUkLgib1L4whrdWBMDC6AbyHC3YEwPjm5u94sgK38GcXHSRSdFe3yRMh",
  "key17": "5T5QHSSXjFDvLdSiYgQ2ELCeDTukdEMTCPJtDbmKKGUmU3hGDGPLUvAajNtEsywdRWH6faocrcL9PtRYjkMTnvsF",
  "key18": "34efqutzzTMd1kT2oarREsNS4BMhezf1KmfD2VbSDxprUjqvJiNzXBcXDgDHmntQvi5vetGg1Tw3eL57q1UqLq22",
  "key19": "5AD9eua43TDdq3zSPadcZCBrkuPZNpiYWr1HB8btLwx9QPC453smdHbAybaV2D4ytjJYowiXncouydwxk49jRLRG",
  "key20": "5Kv5Gq9qMEnFGC994GzUV2MWyPozAKR5zi5z2xhM1rSikVvcQve8Uds1WQf5YoRmxxsVzHZMT8kP1MCss2Ryqftx",
  "key21": "3bSoHQdqKp6gDEAUQUpUq7zyKmAQgD97Er1GZCKAFyn2uZcEUe5LdBw29WnpGrbRdMA2eQ9JaQkkkpTgTKmeNbac",
  "key22": "4Ekw5stUFwqm49VxXJ5rP3PZSCcQc6GMjKTTNBHU6gjc9ZLSa7GKu2kGbZGKJ3NNd8GwqpNJjL9XL9rxrb82fDJY",
  "key23": "48bi327sxSAfcasHqpWjrSKozzgcjAEjLX32HtS2BLxnUVianMoq6VATX1AGXQ3LqqZH1VxDkAKqntoL2s2vWvxM",
  "key24": "281A3SKwRVRMCNThrR6fcd4bsQpYofTnZi7XaX5ch8zd4JeBfep63MDdrhwycQiK7i22Cojb1EU8JJz1FxSzKMWR",
  "key25": "24RPtbtg1noDKrEvHq9b6oPNGspB9crAuM12tCG28C9euzM8kmDTyUfZacmJYs4jff9dBr6L18XfRRnjuv8qQpvN",
  "key26": "4R8ipkEB4356Ti1jHraqynyEeeQ1PN7WGri14QXiybUJ6fa3Y31aXwdRaN4PoausibGAnfCXmQSYbmXgHyrps8rE",
  "key27": "2Qakr1AevuLi1vUsy4HZcRKuDNLChegXxFvpDHzW55p7hgTxFu7FFt9eYBhBjqBk2ZvW6aKRCS8bTwSj1Gc2fo59",
  "key28": "2JTAkWYKR8CDwHJQW4vD6bPR8dVrcQhxZ1gw1YWgZT8vV3U53jrRb226MryuVaLgt5ouTrqxSojUtPZsMjnQCDT6",
  "key29": "2TDWqGxqbsiNWKeeKJYbBhDEAE7ideEuFCCmBCjXK8niwBT1AVFbZNKkNvhThT2rN1r8hmXPNfdUdmGtN3y5R5NE"
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
