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
    "4Bh88kb2cnwZC7LrBfT2UnonydfPgUyhz8jHsjoCnXHb5gQXSC5SF1efqsxWhaQiyZfbKmE1YYoAnVmK1Bx1Hj82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QiVe7M8kSU9m88dAYe5jvEfK7PdokUK4egDMpscbBCsayP15zH7bAZcbCvqbNER9jMYuFMw1Abz7DRMJsCUdTeV",
  "key1": "51DsbppWmQJxrhfpum1wQDGWzv9yc7LiZxAGeqgokQcQyrnzWBofmpGuUVz5Qk1Ci7vF5dY67viX9aygpRyVZ5Wv",
  "key2": "2YvM2g5YQJXBPVaoxAHWfv9civYQQpXryDL87uxwNASWH8vyGPTYWDA3m4qQ56y5xyPQ977Ns8tFwoQyEqppr9UU",
  "key3": "34CQu3WJhuvB48hUsNqi3tnynTxRfLWfVXuCLhzJsa63bQawtNqptr1bWDCLVNyMXQ4DHM2XsAoaf2DeBLXUwBN1",
  "key4": "2n8FyGP8qcLRySj8dU4mxbciGZWi3AAsyciaU2AVcZ8KvLAXrZVix27vekxjazoAoinM5NswyLkykkDUmdh7MsRK",
  "key5": "4ZfeFkZ6bnimG5yqz7WW7iiWtruSCqeA3mjhe5DDTkK6r1xFqkxVDGYe4gJLcgXHbeJZJew7WSCvKJkeJ6CPoPkg",
  "key6": "5nXk5LF5TF26r45j1CVz1qR8m1uhBcnqtRVZfZiikQMXjany6hhsk1se6hr1LcVMitwXqFna3G8qLyX25ntFs5tX",
  "key7": "3ngceRJhNaGevjrLrsq8t4uZXBj6bAMr5y4d4ivLz6f8ZNxQX5uYYDu2NhFgTdzXYgPruWL5igWkGk47CAYzX1NQ",
  "key8": "4qroXDAtky9y6kTbTeYysZe4kWBviJ87W77wQXFn19joyyRamMA1MJhrXFz97UrdED1mpDmx64138tNVzYVEDQ17",
  "key9": "2F48yGdKCfTgVkqATz1sgtdkWELyiAnaAqiSgCUo5i69Hdvi4auWvvwqG7FHDrP2CURSDUeUgdEmedJnCu33jWyr",
  "key10": "5eHs8ktDZ64iY32Zfi9ftCrYjGNP74CyFWqGEQPe4ysecZdMZ5NKY91PrZFEGFEfo8VYvRDUa9t96q8GPMge2uM7",
  "key11": "26hgQjzttKzfnacWedraZi6WXaw6czLLhDAGQbibJkCK2XEhuXBNrqNdNhk6mGMkBgs7HnyvKUgszXDrKZLyXUma",
  "key12": "8hpctTkfgXduANeP482j6DNR4CnxyKbBt6uTnjF8BkiTqp9tLnNZfZ3i4ZfsayB9yWAxevkS3aFsDTVi5aHmpSg",
  "key13": "41sVZegkBtYkLMmxVj1AQQxRL65WPwdoc5EGTarvqw1cCXgzmV6YXqCLWyZu1vuq3T9PQ5s7xSKM9pvyqaew5X63",
  "key14": "R2rXN84Uqf2Tuu5T8aHbCkV6bYdWUfdg9PQjsipEd1CG8mdih4sNXu5KVgQyeKwrkajibPCM3Vws7MyfqQMZ1AT",
  "key15": "3HKAtFNRf7byAjYpPFNq4dzcgYwHshf2aorz93jkdrogFMeZpd3MdmZ1m8X7jsuSzHdWb2AHht7AGVoQdEWnDkBH",
  "key16": "3gda6id3SGJTQm5pmo973WTzzCNhLAZpmXVRM9Ai1uftWWQ6utp9ZUv9SZXT8TnpgrajTndExK6rfA1uTQKSawWn",
  "key17": "CBYqTra94h2woJXT5oLzQM9VLsMvqGPdcZ6nGrirVZkuYVHTjim8Bv9MaSjoNhySB5FqW5QuFcosAt5YpQbMFQ5",
  "key18": "vYcwZF3mYqchFcASeKyyx1srS2wpQ3uX37xANkBXr95WuBWWTXDASqjFDBi2sAhD8hJ68XfA7XnNmrfMqNnawss",
  "key19": "4Trhz4mfNgXxsJX4X8yoWFSEnLi5HEHaN1YnhUvfnty4MtVjCMFaviBxLeCYeBdLFdaQUEw6kwLZiKCUsDNWzgH1",
  "key20": "MHaBKDAiff1hP624CAG4wawakggb6vgG9RswKL7NxRfjiMTHya4qvDfcA8nBkjJX6QqwcaYnmY7xxRoqbRBcMqq",
  "key21": "452475Z7gnp9stga3uM9yqU24WM7vqsYZitaNXkhjAHb7XXeB8dfyz8phvrydpFf5xTsfuy2nw3uZdgqHThDvLJV",
  "key22": "4nyZtjkcJtTpVv3kYxdwDKH1BAdUrc6M4SQoBWKM4AW1m36QZadczPdwii8w7M6SqKiDeESRxF24m5qKe6AmoRdk",
  "key23": "2RLpie7YZdBs9FkCRE9cgppTiZGNVMSGjw2cHG4MLdxoQXRrsDovWhkZJPkMF2g8s3qh3Q9SNFwaNpTxjt5N6xaY",
  "key24": "28k4GdNytFq9XsdM9ysM4HZ8iQthbo6UQud5KSBpUnXDrsExq4JmDbWfmJE1HB6QQa4WPRNHdb76AptRCh2XXZgz",
  "key25": "2Pm7HwS6dRqNeEYcfB5mmoZ2N2VE6e8hwcWsGn52h9VcBYkUgiGDWrkiSFwEz599CGvUhJGLAZKmg8QQht9mdafv",
  "key26": "49qcWXn8BvM6Kf5TxTLGiotVX64GTvc2R9ZinmpmkZJhuisffDJQ14zuj31443msm2MpvUNxZ6KetxTEq8oMxHDr",
  "key27": "122vk7yGyyadv258YkFw9vHp2NvTKQjbXcmyLU9MWhrCQ4aDkT9w1qSKNyZUAazmspAGGr2o24XNtBHmixdYjy6i",
  "key28": "2bTeoVtSQft8RHWAjT7MGnf5SZYjRVRgjc6YhikE1EdeATVkfn1ZsK7eMtqEqPoCfsXBT7i6cpyeatiZ3m6anEyW",
  "key29": "4hiMZ2NgKQKc734YgTsjqFjCua5pRsAcmaKWSKCzQTj4Vm79hzY5o8dBpDPLEnHPLjPTUrmJdBX8XfrZgnwASqPi",
  "key30": "4bph3KYjxSaDwZPMmaLUGdgyi9vZUzwbJegKame3xeerom3pQEf8oBymku3o5p4R7YmkrcQVktau77iH6M8y2dcv",
  "key31": "5CNnYJtFZ2gneGAPT4QGkkveHanBXxZmcgxaaxCSxtU33qTnvahkw5NoR9PZ4dC1DPR37vskqYQCSUs4gu6DDyj3",
  "key32": "4PnmwKSeggVkZF8t8P9Ydxfm22gxk3yJsU5XzU2W1JAqm1qTSvLqnd5eDQeBGWGc9m2wpcbZVR45ByRxfXgmGPtZ",
  "key33": "2eXgCL6iu5jACfD9CLgAJ36drpYKTZ6R4SSZNY7Eb3fGMCxLU2JbDjpBjh3qMpWr2xchzxqMjY4DuUiYFcDSxsNg",
  "key34": "4E4DhoEEhzN397eGvMbXzgKhMZZF7D84MAMtqLUyRxT8vqipM2WYztJczxMGABfHJzh2MzhQSm91VRvKeZPoTt4Y"
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
