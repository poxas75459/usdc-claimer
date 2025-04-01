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
    "66mNGqtfAGxdfzEMhG4a6agcXPRxSCvBkUVQ7Fs5gtagSVG3J7GTgfpf1B6RtWbRbcwoUuvqXHNynAedWemWBnHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w4eSW6YsXRD4jYDd69CyhX5QB2APFFPSACxXHK1BqxoWt1T1wCHDWrLc6AdkDYfJU7WpN4MeJy5a7W4nH4wQBUo",
  "key1": "H5enVJr55JTViCost5hF7FjtMAxLqfZKg2U5cHjUpU92hDKLS7NMkAkkD2UiyofBuHDc1NYgDUqLonKHHZKnSZG",
  "key2": "in5F1o4j5wg5YMQbirv874arTMaXmLF4gvdNEkCfKgf5jE3NFD8LH5K2Kjcxww2FaJKVPQPrtMHADKkPwL74JCF",
  "key3": "3aHVhDvHW7LpveVeGuiahJ7TpXENCxYXpvw46zpPASAKcqAKMJFYDuyvUKN6NFAV9RxNbMwbPFAF9jP6U3LWAmjx",
  "key4": "4fXYpfULQ4wbG8bmuiYW13NdPqeWfnp4qwcrZhpgFtQakkp64cvCSZumbWt68dqXrHHbPaokduF9euk3tvAMBNs7",
  "key5": "4dsqh1eUNuiAweTD5FpB1M4hLtje73GrxRSFGWQfkiAdYNFCoCWu997FdYRUeHSAGLZ1Yq75HNYjPfBHAfUBSEEk",
  "key6": "3Sdok4MK5beAZ4Buud6G78Rk7Xo1x3iBaY5qh8cJiwccZ3ARfmNzdow3PApDQ1paAunZSi1xNjtjkBzCCmZPff68",
  "key7": "4gjvZTszj2zTUrgsCMSkvHuEYD1KEzswrVj2CsvkNu3hYSsYGRRi2sftGioATF8ruU2cevgNQhvLAb7zDEeAnnK7",
  "key8": "4Phss9F7LWk52h7Y7uisPUtjTRp6Parw9FA5gG5o34M5AqmxaCkPgx4S8oq4toTX5HhMbnnsar3BkysToKan6c6T",
  "key9": "1EdSrsd3w15ChN8aDzVqSdEHFCy8VANDrisTk9p7CtkgMDhWj66fqRYrRsi9gYVYcjdHzY9jrg11zsf98fhtZWv",
  "key10": "wjMmKz5SKbMkMXtQoorhYpmrxTVrwWhTDJuqN1U2iSTR3FQwS755xy5BncEmXuYeAtxyKGxnGRpLG5dfKa1SWtk",
  "key11": "3bk7Dodt482wee6Yj6g2mXNAmnUjXB2pZ8nRVVGFz1JG2kkibrQnGyGV366PqkWg6hYHK8CfCMowQ9Li81jBFnJz",
  "key12": "31FQkt76Sn5JoBhCkU9GiyM8a72q6v1jtTMvn8fQFGpgVWt6BP7mkTWyU92bS3SFFn1iMRCvFKPvfcpkUro9xCBX",
  "key13": "23eC9bGrh3f9CRpbz1dQEyyWCJbab6kgJvNWTAGWWhqq8U1zbXJSLuLpHc6RSyZX1FD6DtzQSoMhUcnVecjGsAiu",
  "key14": "3H1iR1qEeQWeFD3tc5fpAKaScw4bLU9YNDxhJrFmbcrX3intHHaGGT42xhDJKr4usgkX5Q1UDSL3pTjWwAZ5YUnN",
  "key15": "3KZ3JzZRDirM9gWdbHDNRhkh9k9RvpTkStUemrhkJ7osVgqNXdQdCWiYoJMUaG2kzf4aczfKBkKWHYcq19sr5k7J",
  "key16": "5VTpfrFggNt8rA4BLAQhgXYQvUpB25LRPsPCY1iP6s9SAykwLDo6Tk655LLzz4PWBNcdV4JmyjiNS8TLmgXLn17T",
  "key17": "rcERLKD4pEtfth5FDUzZU8XCeZue4w7W6DhM4vM3wWcTTrrwNqPnXUydFyXeHJAjcPAZqWuQCqSdoZis2TPD4E7",
  "key18": "zBt2vPTo9GM9SciFfVVXeDR9VVPhEGCGHsTbMLDLcitE8cE1SPzPyB6ji6SsQHD5PdXauQ3e9zTxFhhfMWH3ZhJ",
  "key19": "2biGoxuv55jYsxAU3sBs6e7vymPyt8puo5Govz9xe8PgvL1c3wQntsfaFx3MnoifvLb4XGjitSsgxifyUVyWjEDr",
  "key20": "2VGdT1pA2JsqN56bFH46Dm6QCMBjRpCwdWbTy6HhbCaJngwjgAsW5ETqVJhn1s5sr1kRnxdyHHezqm4tFos6upVL",
  "key21": "12mCN4VwYRp2rK9y96X2y31VaRs5vi1sHhHY4brFksYivVzN62CwtPYYAJQQ3xDVRrT8DWFhuKGGeazwpWkGKec",
  "key22": "2rJKBTBjowE9YYUkiqvusisJ2N1PtfkHWL3E2UTdzwNJj1WhVZ1GxohwdneDqSuYXAKusS1BhEhc7c8AAco8GQko",
  "key23": "zdvfb6MySgvXiPKawxUsB96DkyGZowFQjWFgfR4XS1qfZzepYn236fpzANHyHNMVnp1Wqe8d61uNHSfuhfkiSJ3",
  "key24": "2srYd9SDAzNA3KoiZ9ELYv6g2bKx8GoK5e2ZaUVVe2YdzUv26trNUibbKqRbYhpF5MdjnjNcvWrkAwzin6ij7iiz",
  "key25": "5qDKKmK5DfPnvmDpUn3qcheakHNP5EDsTYag1uej9iG9RWZ7Tdk7nfhQC9xSNe8tFYSXwRq4PXiDd8CtvJoBm5FB",
  "key26": "d79NecXhLzNXtFW6WJYDnXuRFXj93DUET2Q84arXTu8p82Yn5EUmD214wfTfNua2W3s3MMaa9YycucPwSdHsoiH",
  "key27": "58ZcSiPbGv96ekF8Ydbu8Xv3SK7i1XAAaTjXWhiUnRTUazGiSVrQVcnepyehecPPe67SHdZpSfcfuLoNSw5YdcsZ",
  "key28": "5qKK3eLJ9LoQrUCrmT57DWEC8rnGq5bb3fmgRTiFdYZxAmVec3XP875x6pQR1QegwCE1VHNUv3RHKu9f5Z9PTPym",
  "key29": "Xy2oNQZ9wShgGZocn9kb6mNtA9b3wB5swG3jZxZFTaQcBNmPQCs4cTHne6cJKLLSJyJu14rKWQ3BFYJwj4qLvte",
  "key30": "5tHVZHcBbUTwWcFzwqH8mz5bA1tFgex1nJeLBy5dvQf8SWj9br3RLJGMko6koVDtwhS6xuuLtXML3xEvo4t5j24z",
  "key31": "QQNFtoidWiFuyb9QTfNefAgmJR8CJQuR1Rooi974mQkfYXPYpAeYgAQDTQC13K2Dz2k2GhEzvRNEkxkkTXeu1uB",
  "key32": "2jwCHeJ3Cm5eZANJg1vfXJUXZmwbwRwv9FJbZKbKH2HHrb8K9HAZRD3VZs9tTwmE1Eq44fo2U6vBiQEyzUJYoByd",
  "key33": "q8gWFFSV1z6TXZ2LjWydMR6Z4NAqcDChADBWtj9DXzzMaoqm6rgQBZVkLBP5FupyhpTJw2nKYSnx1CJWA9d8zrw",
  "key34": "2CepdUZMLX42hepzhnUuy2A88hGsXoNxFnQe7jHwJdadt7HdVK9aiBdgsTaFAFyfzrZDGcdhkdpAwpZxkSnnGLT3",
  "key35": "44YHemC7Gh4Uxr8KKCEePtFnph3mrZ8BCENWuzUNQcr5CT6EkE5zSAm5YJgKrEgRCYBDySHbiRZLaCRKmyUQdNbA",
  "key36": "2so7LZcUQoCmSNYw1WhMaw8osqYxprdyosBEASC8hXxxSLAdL9zdRpfF3PAQ3u2yoUXHSFP5Gii9DXkCxWX4mTXT",
  "key37": "35UXzYbWvRGiDE4bLZX8b2Zt4YKxt9ajpxPzvmVpB3S3b5FzrRmXLLibaoGfUeYkBrr2XTvxehrbPxqA6xoPxqHv",
  "key38": "2Rvkm6aSHWMbtFz5pZx5hREeYsQMj8jn8JxhW3q8VvjRiTaF7URgBssVpqi7x4AA16S11jJPX7pguDv9CHkCgJtx",
  "key39": "5oaWHkWLX14rfp9j8p1jLf3FdPAJqZPDrMT9EWuUfFucNdiFxhj2zhUB3fZBWm7dGvU4EMNQUthzSmGeYA68dcZL",
  "key40": "NA4qPctjnpSkoqdPbACznLb8F5VkkEFpmBQJo8V9uqXvxVvwKp6Vej6g2ycPRj4whfCD4teyEZC16GgVqzM2npc",
  "key41": "482Pz2VqNLogz776g3taBwVSwVx4gq63wQiUnN8HiVDEKjsxFQEpErq5jiJDA3Degzk8HeUxdnTwPY4UhRsdK9aR",
  "key42": "4TYzXRYed1swfKmeRZkp4Lcvsdxuo9ySdKcaKXRPBcjAXfuGUwUiXZzXLPVuscc9PAPaHSFwYR8BZX5ZTTdXmxfe",
  "key43": "5EJtkGDGoYMHz4pYqfeYP8SThhJ9duAdDK94ad2jzkwYfwREhxuvj3NipmLjwNm7C25FvRcvhqGAsbk5R3Q6QprM",
  "key44": "3P1sQ8jYfYKRCZycCGFcKqd1Ew43WaKDBDV8czgh5aT4cp5hrttsXnj1ySHov7frdfZqYFjmyHViwMkmJckmXWzm"
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
