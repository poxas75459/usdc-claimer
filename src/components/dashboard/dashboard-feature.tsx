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
    "5rWWV8jyZLP2wehfSpNT9EHaxQUwirygJ2FZrZsRk6j9iSTQj8BdnBRwGnh16b8xaWr14SEbzrEzN1Dmd48dV6Mh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjU42yhrDQEsvC9PZdEy7KVzJygNy8Jo1NN2wZquQrXYRL3HZoaz9yvXsnisJ9u2JBZhFEq31wP2pqNb1JotKqD",
  "key1": "QbaJBDXkCnNXb1dDBD7XoEv5reFcvaHrnkGmg4NJSyZvipiQbpBPmPyoMsz9XEuPsb18g3Ckv8YjFpTu1Swj66w",
  "key2": "2YpS3ed3gTi39YuWP5pA2qEectBUzrxckwP3L2roFwKyzGT2wLYviTcdMSNJKZayzWpEfvUTpLctVN5wkf3sFnKq",
  "key3": "VanFegp3c7iksFRQLwR476zk1N8VPqKv6qNDRpq58zEKgESZMaFWypgqDNhDW1h7NTdtnpA77M7WDkR8Nb1ZoyF",
  "key4": "5nD7LbWn2SQdXo3sbTpZyLsRNAZpUfYqPd2K77HkQ9bgxEwKeGU44xRjgqUqxL7cqGLSmPTenFek376SbzutQJCv",
  "key5": "EJbfVQGSQa4pUNftrjPC6Bwk52hu4UsGZo3WZHT3yyjBSbUbJYdn1BhQryaJGUPF9bNf6EgbJnc13bpkVAGJMHq",
  "key6": "2Qv9RwGzqFFSncmiyFeYGtZU4Xm5AmwGKvDx3W58Gyih5qGgQLWZy1iPnRHwuz73dDXrLw3PjMH8G5UUbnh1H3W8",
  "key7": "2XZ3oxnhT1W4ELbgxVgL3KGirhNb2k5j4jddv9TnYy8NFZ2N2VGqo15rD5ZbhSLSaWD1XDtkr3yAx9DUdKkURWVE",
  "key8": "2xeV1K9cA4mNCr6h9kyJfUe8W7a6kdoMaHVUvcL1wDwUW4gsuJgbokBi8236bE2LjXdq48UFov6NgRaPdMjCgZgV",
  "key9": "33S98qqbmgHN1FQxAdbJ3PPSq6rwSLVQ3E7XTfRDCjPdh5Q12U9zFS7AnQ7go78hieVJMzy7y4oStFaFas7CXSbF",
  "key10": "y3HtmAyi8AQ384erhrJMdQtrFH8HVTqCAEU7kGjirbzWgHkERrxjoeQiNbZAj87EbyqdUpCRdr1XKePCURaiEP5",
  "key11": "121XDac7orQUkN9GTjdvKixzaYzEDN8QdUZYKB5GjJjFgC2FUPdFdyNgBV5yxhKQCHFopgebCzqdicrVfzmXRtTf",
  "key12": "3XQGgdj19Qw8rBb7QxX6kne247xj62bizJ9wXxuf7jRRN3rw4DcS6XS3hQVx3uE9Ds1EBa4D7bWFRc3PagE7fDNa",
  "key13": "4vQV86hZxZ5AD8wwEZ88gppJX3tDEfZdktX1Uv5SUzWeSdskNRH6JBGxrD7pf5JiFrJDq5yK8r9fKr3fyNUYSUCS",
  "key14": "3KD1ugGXVaqcurJNVZWRY23P8f1VprK38AeLJhaLAK5y9eXUQ1DpVMqxTRFGyHrpNttVgMhb6xKr1D9BFXdLK4qt",
  "key15": "5Bor5R7CSmrB4XSgbNH9jnzpUZy29E6hf6xPSytnUEAPbCuJQAoK2CMcK7HxtphjfYZiX69CA8hzLkTQg9u1nVfq",
  "key16": "u5L2syctEwtdSfzi3BQH2YGtgxtHAVErKpvkSTxW72eWXzzf3ohXVsaM2Xxttyi7safsmLHDsBJzfCrssw1F6Hp",
  "key17": "3E94LoWDrPL6tZnYRtXTKPjSLJNdJzUaTaGrEGi3Pe66ACN5hCNLPPX2zbVA5bmRXzgpE8KYLenPeiBMFjxMw3Jj",
  "key18": "2bUiX4Fj5oRGpkTbM1iKQdji5yqAgnRa6M1q9TqWQTmEpB5dHy3zBaRVpLhiGCBEmovW6fkC24U9MjYRXM59Amkf",
  "key19": "5wqdkK9mrX6sGNSGufoz1D1dKw3rWhFmWxVBtyXQgCLPqVA2dgg9Kw1s5ND65VV3dR2tTLsHmnJsUeMcWH3MpYkS",
  "key20": "3ZfoSrcqXFAhTwkVAhUmtfjVWXsJPb3V7SfB8PQ7Qggiue6LYRzzxYWdN7KYKt1kJxR48eB57RvdHFHGT2pG4WDg",
  "key21": "5mRYFeLgpi6k6rzyqVVx91LyuSQNdMGrq4gpyyL6v5nE4bVM3SgNRzKXFEHzEKwxvnAeRLDcz55B3rdgYHm6XRGp",
  "key22": "4jdzoppomSNjhSbf8rxx4DieRVk34qE87JXH8D7Zv1PLdQAj2CcfdVkNpMEJepZqBnqLPv83AsQ5b8gCVLUbNz49",
  "key23": "5o5cuVrhv1U1siu7HS2TKwvYgU5r3xzaKxQsXLSDkEkybBhLA7Cy8M6AiXgFMBZNDmmX1SV8pvYmn6TZogXUM5Ew",
  "key24": "3q1XCb7Dn8K132y7gqWtrCLj4xt4hnZnhrXx3fzcvqD5FVSAG1dfTdG4PAcBPh2yVG94JQXWnR7SduwbqaCx7TQX",
  "key25": "5TrKS3n218SgvfC6yu2sp4bBm8kP2HpucxeLbP22vzQGUnL9C9fnvPkKY25uPNrX3N6uAsck1uB2gzgX8kUfuMfo",
  "key26": "2uej9uG3YA8iaisvsR3uCUdfsLC8ZKVsafmqmkxwBzzbPEDcJ8LYmW7Zwjnjnw1FYPs7k2hjiEwAfQEQTCVBsTRp",
  "key27": "4RYkdQb5JdWLW9r5hAqb6V1gdpBVcm7rAzboYkUWuHBebp8UDxrZ3nrjnRmqVoaG74P4K8ks4tSf8bqdw8tCXkyu",
  "key28": "2XRu8KepFsac5iHreYJ82wzHxNVaSVcKoFNGaoowhrPs72QHeucSgo5dtSgjAxmVBPreYuYrto7g9YmaXxMS4YNG",
  "key29": "zg5wsC24nzDqr394iZcWKoDp2an6a2Sv5iwVjqReLPPHGRMK7YikWWR5xX8qnYoRVTH8bscizXwyjsBmYPnKtik",
  "key30": "3n4wvimv4hgJFmjTLbXyt17sWdKXbqc6LvnsKWCKtXSzfw2SsKEFhooj6txHoc6bm5Q1museKmj67VqijzgwuYwY",
  "key31": "BpyqkGW4DjqYduGPYmfvvw5pfHUQ8fPu2d6hhvqVW4FyysZbwVAhBLFhCtRcaSsmjVqwmw3dJRqwya1MvyJtM3k",
  "key32": "53Xq7BEBtfR9MUq81dmQ6maGXiYMWko5UpFo8N1DQVhAm252nLxue5ChRaDvd1nDoBPXS8se8rPcchQKxFRFcrC2",
  "key33": "2XsKYeyeKpoqHoLG52BEdgFtJckuehqcphVb3t5LsvRMTYV8xkrNGxERu3YNDEnbussvqVSgKdCcv2cKcMEVhfXH",
  "key34": "21Jo87AwmxLLErrhfZeYHvm7j3nCf66EjodFmzHx9Y5DJGdYWojJH7Ck5PFdHYvkDbsuwFwjiaggNP9NQHXXtd86",
  "key35": "521LCt6RFWwETwDTdjwEz3U2FCjsSTZNEucCa36XQPLEVK1DtfczWkKpnmaHbHvUzMaMcnzW48SGJJwvDBmCQn9K",
  "key36": "GcA4mnKgiwNVAKfNf478hGSZBhEivM8PUZ5PYoWfzKz8Qeoq2o2kRoH2GTgamaUte8dwEXCdAteeuogRGjyGkAb",
  "key37": "2KFEq7V4EJUZjDc6ZNfW8GpEf7krrVNo4279hgL5V7i29rueP16zMdsDBQfR66GnRAfydxrVBiiB5PnYoEkN7XUm",
  "key38": "5MLExGb7khvogea78PyjDFyrZRKXFEr2wqUE9H4JrVATavZW7F8dEQ7oeiKm1No7vQsKYQYXHB8sakdMnxevTJCt",
  "key39": "4CFfL76kqWzaYZKJxTy1LhKccPZNLi1KrdLe9zfLAz2MtyRqVyoBbMwvVmToUaBny1nyr9knM9HG7ron2JkWKxyR",
  "key40": "mnGiPJe62xe32heRBVY9p3H97Z8jdYtitCdJZGPkohD8BuJTAZN89dPrcBqcFUvtapnmKaV1t9FnAvajDkq2oie",
  "key41": "39fGPbNyhw8uCcCHh1Y9V6s9Ed4s9PkzAw13jAeGATEbNQA5UE76Uw3nnvuuU5WN792Y64DKPehmbpofjqAkDmQ1",
  "key42": "CAjHSz7q9Jz5Y5okYc2SBfvBpcZvVjfHXuBPc4HqFrgZiZB5DTdRMtcyYyKDRyy2qTGgc4ymbNXLvbJShDqhnJs",
  "key43": "r2orKaixSaGD4k5etZHwr6mYxY5VK5zba8JbzKYrw6hg4g2fRSC5VP2m1FgrS716TBs4Mgr7DMdFqwzQQPmaYqA",
  "key44": "25wsBfDUkbQ8Fhn5BuHp1F4Mbke2i1DedTWVeoRxUeuR8v3Y3K5bdDbASTBquEAsEPaGtXtuDrw8jdMLv2QnCKoW",
  "key45": "2Cv4xGfgTXgvmf5hjaM78vxnTFeaWgPpHJwA5yTMHfbmgch68qf8oCiDTxKgrdm3sJFsMUBM7B7BMFrzuRRDg61m"
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
