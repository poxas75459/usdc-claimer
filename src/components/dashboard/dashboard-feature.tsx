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
    "3BxfRj8nTszTqJrQjdyD7pRChbwgawW5CBpU9H9sF3qByoopXNdpBj7sWzy7WeNGBHXwzYUZJsDVGCv87P9KPGR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yTd4iP2SbyBNgH7XqMjRsKUVQgmzTWXRjDi16qXtqXS1NyCsNPLb4PCLwskz3V9uzWrfGpKdmitbax9VeP8daR",
  "key1": "5ySoKn8XQfuCEKTPFXLP42wdDqH3cqesx8JSG8QkWYCXivd4YXPjWHNgQzLMWoL8SGNLo2usGnUudZqWun1QPCW3",
  "key2": "5XKWewDTnxGPLPLkUiWH7yqZeAmiTHMrB2m93sy8rAgGjJZAahPaq8MWr1QMaSHJDaJLnLk7gsWJqD79ZgtmKQyP",
  "key3": "GZCiR8L8pN6GuDizPWM3qynAf3ArvGB2j8mSMEUQL9EL9MNmkGWp6AJmTu9wfVJocTdcAEUiQPpquUpWLA8er3X",
  "key4": "48BgZy5G6CeSYjSocF2k7ogbv1QGcvajcVGr7EbAyBt7EYKS9Xj5qcxLLqgP2n2tW6Q1H68iMMBMfv5oiHmYEdnK",
  "key5": "5uuERScNa9N7CfGq7B24uWHTKZb3eemZpkqU8UPAe57WxxVtuqDrqtnxUq7dZnaCfpe5xi8QS5oATaAAcizmWFeJ",
  "key6": "5fwG6GszqHib5ywTy4d8AzesJEAc6d3vDHhc1G7k33RhPhGKVDwEAw9PNGsykEBeh1XjYztC8rmGnb4UAitLgtke",
  "key7": "2rmw44bsGFyAYq621RSiZG1FaGK73R4XKP2LL69gT1E6i88p1kvEMjCpg2byp7sFqthrUTgbt4wZ4nviH4MpWLp7",
  "key8": "4UshqcYgvw1zVkkzK7uJmX4EeCpUawuaQT1dUksqWKVttsH8FUFUKNvKCPyHoVJmuUHNAeFzfponBiQThCvJyrWx",
  "key9": "DwLrHTHgvpWAfFfJfWEXXu581UJjdjT5FksyrT3MtqLFi5K5XFdkmMcEB5fpLfwaAHU5kVK27ApmVw2xUbP677v",
  "key10": "9XRmDZeM9qXBn9amN6u7i51MPDKZdaYqdvMdKHcMK1iCtGaCwLVtXCjFYggjDVz8ERAMdEA7Tizt5DDA7aEKLUV",
  "key11": "2dKQiUqjDhSfNpHncvj8DttnMvLC9ETwstyZC5RAJn3pzrvNt6iPc89jzvcjp4hQw93gqEbut2F7BsKHW4DkQET4",
  "key12": "5KT8eYfzetrUVBmPpQBLzc1fdnEs9MjZn6Zq9AaWRusoLrDABpHYTfrE7jThSHLNLXyx2jcbMQwEeHpiTuiYCVnM",
  "key13": "25v84WPCThVTnszWcTMCPNLfMxf6d9G9V5sWr8vA7tCmMBunS3PSWS9tvWHPGRxDzvZyQPaLbftUc6wTtpL2ZX8x",
  "key14": "TZ3HxJshQAyg2xE389rripHjCyQHZBGmatGMWRJ32bwgyhBq7PofRBSQhsZhkoWnsJgpywH64kZ3tiCUWcqW7vM",
  "key15": "28TeEMAav1Cjc9T6oXwKFzdTRkB8pnd3whG229f7MugJL1Ljmny9TsW9z6sA2z7oDJgcAH24Kd6Q9jzeUMBGJqbp",
  "key16": "4QyjTR73JfwCjWzhyfrVyaVFnnMJy2o1iZi27dazknpVd1PCvLmdm5KvvsNCbNeUMz5fejtpXRYBTyBaEQ9KMkP9",
  "key17": "4nG6f3yAst2YUEHpJRiteJDKGyY2AqyUTL9caoiFNVmgsu4uLT327Bpmten5k2mWhSVZfv9mR76zRtr3NRkxTzqT",
  "key18": "28V2S8hA5df6eonD1sCTC618fjMBH76MimbKuc3x3rKjfuSxh69zr5hbwXqi15qKJJd6DRQs1EKhWtUnRrrP2Kgp",
  "key19": "2Am7ebT7i5t5xW1dxa6eiXJ1vyE1PCrwfJj5ziRgaGh9zHaBKWrepRmUxmhKq81jqUv82E7KpWa1WJCUfU2vVWnP",
  "key20": "5EdGfSeaV7RF88Tk9Z6ti9qhMkERuxateSWefY4EyNLEvkicDfXrqx2Lsfd3EEgZk2xBasLSwptFz6fZiNVPq4T5",
  "key21": "4X7dmM7dKMDTPpERPX86jRMTA4zhBYZ5yxa2z5n5yJMWoAbEPFMXA6ziz8ro6a4eQqdec3JEwPwwgrCboxReVLJC",
  "key22": "2Gah3rMswjfFp4qsdQyrNThnQYHNyjbCeGf6MGkaRjkaDSybkk2efQq9TAy6LZoNYteQ1zQVxUEi1eaUJbKX8t7h",
  "key23": "u7ZnLpYQffkz4nvtannfkgTkzzZLpVfYzc85XsKx7CDSAqS5chhtXUuVJzppgEdNDvyffv8sD57t9X813GkWP37",
  "key24": "CziprDwfFFqCjUFBHnD84KZAGsozf5SExwgUa2oMQ813LUK5ZFA5hc5dDw42fq8UP74WaJdPeJgomAmpvS95i6Y",
  "key25": "Shmmk19scXFPni3Nu6Bsu8LwXFaVAo7rfHeApQcQ4Q1AHM2j2NeHDLbBVShE8Bsoto577DD732qgtteqiFrjf83"
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
