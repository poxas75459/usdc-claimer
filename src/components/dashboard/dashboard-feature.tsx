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
    "3RdddekUH7CHXyetcgintJSGAeaZCNfFXB8cUCAQCBJybJH87YgCCJ2YfDQafMJ5xcc5TmkLRBZc4K9xCrnH6NVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nnAtY6c6fBP9fPinQz2G6qoQQMiSBth4Ecti5gappbp2s1uPfnW6Q7UvbUsJyNBcQkpfMZ5CXKEZkkfUtYShYND",
  "key1": "4EjtwT6Pb1s79jJtm8awx9L5MbYHwfwQAtkai6gHgAQPTRHRynrxfn3XdQjHZs5UhBHLVnB5HNWWrQpTQvfsoytP",
  "key2": "3VogLofAMPeGziAaAYMLf76r3nbwNccBXyR2J2sTVeEyjC1WknYn5UwXUEbs7w1qSxFvR2ispJqnDpBKvxatmpFS",
  "key3": "2mJW1yQ9gTLvdvZGVCNwQDfuHEiH4MdNmHJ4rCnvBtMUBBHrc5XRpW3E8vC9oELhbx96o9y6g4WxWhvc1EhNttfX",
  "key4": "t3SiH3NmHqB4awbsxbnLkVxjS9CY65y88xKLuzTupwqB2gx4e43uAfShkJeGUFiSFvZCxj9CXPegqfsej8fr27c",
  "key5": "2ZWFWvMuxzsX8EiSN1fgAcqc35uVt9PhEr1DLncJZoZdXLhgXZFrQFhMmwuAtLscGMNso5ggS925KotnGVipne3n",
  "key6": "oWDBdr1kNHRAnkAbEGKnBYE8aEaMKWx1pTU9c54byqS4xAFkXTRDv7pE5GMK8hhqPTmcU8K3Yxegjzk3WpBPGNj",
  "key7": "v2eAHUmyRqw5gniFfADvtmv4pr9MemwgwPFC2dKoc5FHywtyf6fPLM5nty2UJM9329LRfpmmSzhnoJmrKGHnJZz",
  "key8": "5qfVFcwRzTBVDqSo8txGNxZ51PoJmLuGvELhoW4z3E2QPC6aSTFXorJmquYeW2yLmbigXxuDKEcCa8JpBHw9SSe3",
  "key9": "4o96oUojMPbhHtXbvNQyjak3miyU7vohLAJ7qc1tihAgTXWq3LDUXn7CJ2ttXueJA2W4ex6at3sDjjE2zLV6i6g",
  "key10": "2vHVo1rDLpNFHFbZ8gu9UzcN7byCzePAZmQzCygHgrk7rYdMLvkbTbWJfzAUWZgXJpkkQGZ65S73PcBqgbpLAdAi",
  "key11": "3FiNxQZXA7QRWeB9mNjp1y62ad8zbX1G6HCMFmta1zMN4LSF2JvsxstULGgkdYA8mR8539Jf1gBhaCKM3znTP48Y",
  "key12": "gzCt2Ab7C7FkCyxdru6F7VzwKmqMQVtrtCJn7aChrc9qy3drDnjQKjJUZ9xm2B3xki28SJrqP8rtX44pnya24Ev",
  "key13": "5BmFrEdrGTXXd4cf71mPHDa15sHyERTQvB7Uujj8XLtJe2vDEybpejH3Zbi5gR2K1MnuAzefJQggSNV8KmkonSXD",
  "key14": "hhw63iwZS2PYacXxJkp2mvd3ctYytWUtXvi8KY5gWqSeAaoVFtCAvgQSSRQCsRVLhV8gBLmPDNDpMk2SGxxrUzF",
  "key15": "3SsGvqQwm8vNtvjijjpwZcLGe23EJUTc6MfRwD97tx4vWHNcmPTAhURhJjAPSoACwicwc7e97xme2F8SBnxmtSko",
  "key16": "2z8iH7xd7htSDaGzsFfqpFbdPRfbcyKiaCtUHcWxaWnEWLqdYGnuXYZSRxKJR99aXKE6F57zz798mo7BUBJ5Md1M",
  "key17": "3KfdfDmXQuhue251yc8SbEvva5zFY7FLoPhjZWr1FFmVMuLUeD2ufmg1i3rE6EL1pKpEp9Bsdogsz5YtafJGLHZn",
  "key18": "5FzqFFaFS415tLTcwwD8ERvEiPS8EUprUEN2H44Pjez23zRn65PCB1t3tsTrpDsL1GmqZZHmvLr6rqNcxaATrTJu",
  "key19": "4rU5Y9GLeWywfMqhpitPJRi4n5bko1xRaJ1iPHgoivzPUdoHpuQg4XsSbap3eg5KCvcTPhqK2gAm97gMejhuJwXw",
  "key20": "3y4WCo3aVuB7qiYTmwepr4ZyUHMLSKj9yfguvJ4kgBYwKibS1GZCTPZgvAr9JjwdSf2xc297AYzmqEFMWCEmp9kw",
  "key21": "4FKYL6nxB2beNoKk29tuy3Fq5ecWsBfz9FjTaEachGBZnJvuGK4DUy9U8tsDNutx7ahySAGEaxf5k8h5WAqHVzNQ",
  "key22": "6KJbM6vc1pq7qydQCfuVemFfFpBw23M4Yko25wXXuo34yQge6XWXp2d4vrGrprxfRuJjHRmHLFpgJ74pjJz3GYb",
  "key23": "4qRm6TDNDYGzf7ssBTuP4uyCP8JhrnL3rnXgX3xPBFHatUTFSFDaT8wLKP4aDBy6juaUoRPQhqJLyx6rreSWeTrc",
  "key24": "5KAr2bfndFQoWMZBJHidT8GxpiYSRy2BExJzFBh7mM6T2hVXvxvBdBGi9PhXfh7jPZ2SspntPc33HvXZAYEJUvZL",
  "key25": "5wWcaKYnSbjP9YHex4o1ksjR1Dje3V3SD8NXN8ddG9kAEnFwNUpPLRJTcPTJcBnBp7g5nB1zmq2hf7twCzPkwuqd",
  "key26": "9Fyk14xGVLsn5tQC3j25kDnQN7ciJP7t5utLB9b7BWYBj4gNYLzHBHRnHAdzAKXDfELUFeerhAKzXJbDJ2P8JNW",
  "key27": "2H3pvqf3Li7yMg1EqG9i3HntGtFW1YJrGpdMvfsQ2CWXZwoU3sx1rp6MB2qd3hqMbbEwgbnpKDmHyfKRL7ABZvAW",
  "key28": "3Tuz1HaE6LNsop2vNzJ8wtyALnaNqNxKSvjtoNYHWvC8hRvBM8yf5DF4HAsBYSZAia5yJWL8TXvaQpsJrjFRzrWY",
  "key29": "62iPwoDqktU1K3iKsoTfwTeBXq1H3rZwDLaMewoRjZY3837zTKdbsCaosLjfTe1G1UG9uz8g6nnJfBGfTL6QShGA",
  "key30": "2JT5C8hCiswocnp1hVgMBwXaniZdJdMZG78yuU33zNzuGVJvARtwDppAVo5RVmiULGbmEUgBuqX413MN9eEeVXK9",
  "key31": "2zhsjxDTnqEuq9bTEnA11DY3rsvqJ8rtXAc6bTGbWG6MHwRPHKNS7jvXp4CHEao2La6RD5Q8gCA17SZH35JDee4z",
  "key32": "64BhFp2rRJ2EQCKMfqaqw3RKx7sPxQ9yx2vrCwrGdASgLdzVsvs1BMMXqYWhPWKEk3GQJk6MhPghCa4RDCNcZjhV",
  "key33": "2Keuge9wrgNsAvsDwdSgrUTxqcfwJEHiRyhNzw4xogaryj5hg6ZqBVcKhiR441pRRGdPhHm7Fjped7DFi8dkDToa",
  "key34": "4PRCvj5eyckLkWQSqMvfVq9SQsUeHFxHrDNzWSiQWr5XdBuqrDdU6JTHSMWhnMH94Bz9kWDW4EuwtboF8Go5U8i1",
  "key35": "5MoqMwnrAd8XYgF5ocWL68G8MfZhnQZa5q8Ha34EShKNstFzjRjbcKNSSX1sEhE2UDZNTmFrauRug89MwvZ6w5f2",
  "key36": "5SnvnqMfVm17DKEnBTGCrM9CHg7rUWZeNANRViwi8ktRrgjEs8JP4U6eodHXwZShvu7M39rtT1EE9bzpDg2n2LgV",
  "key37": "2617UZqiW3e6hQFLZkcoEhvtKsYom7WHcn2DNU5XRJAgXTe7wn9EPZs292PwLmpcsT6H7XWih3tcwiq63a7QmuUq",
  "key38": "56uMr8p8v7frtFxi1H1PvSFBUREPwQ8HJoZTP1dZvaZ1C45nkS1bPHGMadsXN8P2oUkZRjVYdJ5EGSVEzfKCFtCm",
  "key39": "3Xo1igi5QEtZEsfmkF2AVzKY2vipvjFSiFHch3jduCrxQpjLv78QcLhRwYQq47jpiLkj3URgTKKKfSiowsmPAKzU",
  "key40": "NgYP3RnD24MBZ4XaZdacHDiXPVy6zHXXWiHdwwwczNCQ6VZKfELKaZSUuqxJDioTtgNR9EZLT96oqofKgZXvvFT",
  "key41": "whvvM6YEcVo9kGx815N6Rm2UW5KZ7eAFFU7phM7XecJ8N4CrPPrRrMyEBWw4jGPSxRypnvn6rj459QNvLjff2H1",
  "key42": "3DtgrX9qjuoHDH2E8yHsi4KQDyVQ5XBfKRcFgJzryATWAvve5GVSQNx9Hm7bcKJPx7umrQ7JCC3XLMi78dhh7uWz"
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
