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
    "iqGrxngkdCAJzvPzQaedM7ccvnn6P6daMjGT26caf9Y21WKvyQcfW42TPdACG7zX2is4UGCoJd9xMb751vh7FWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48TqgSnvj3yRWdPksuEmhVfpZLA6cnxkGkLyJhsqTUNcs9KbcqRp5YNpGisM13hSU3iLwvyALumXaE8UiARxNnmD",
  "key1": "5k1paiEjB4hoaCyWrfKGFnK8CB8zbEuf5EVqBDUcgJz3d1oJgmskXKbSjsRNqqnQFbsHioKy3Z47XMCWHdvsMBxx",
  "key2": "4Zh2MGFqpN21wubDwX7hwhVAe7SziHQwZcnSXtQ6G3kHZFWKwxD13pQpQ5SKKpiUhrwVbDbo6Ys3Mstja8ZtStnt",
  "key3": "5tF9WW2kpjc1YA9whyoVrTydnrrMUTC9AFo672vJMwFUfcQ9ZNF52u1P1SELLgxA7tYQGxeAPVqMe8SetYG81foW",
  "key4": "5iuniDMFF4LHfibfFNnbG2vRV2H5NDv9MMgFB1ymZK9UoBwJCQtWHRGzzQkk8UXtQ71qme1ULWWZR5i81wUskQY9",
  "key5": "5nXiAXaZqySBkBH6VuSBxFcBz4kbCijtfK1Xawm5rHfWgX8g6v1gLJJTmwGzAGWLYQyDJ6WafCi8XnCwKvfvZBZ8",
  "key6": "65QvRKB3GBYcwmJWZptCtogzszSCisSsDPiEji7jYB9ydRuSSwuFYEnd8WinYLmiUfVM4BM44zPUfWL6r7R9YgWK",
  "key7": "kTMQovA1zsUit5VDJTwdbtNJpJDXEFt6tnRwpWx3A8S2bsfibvgwbCwkf1xyx6KZwhoKXsJGXQHVTGgVErR1ZFi",
  "key8": "2jq9GTiZGiGYKh4QFAduo6HDhamgFPev11vtAuMWEkHtCLMQMD7TkeBBiVj4YNHyVcJF9MdFNVLNM6ubtVDV5PiY",
  "key9": "4imPXqtcGeEH5gxm3SFBaJK9v61hNrCYYHrcUuFb274j4G364bZfK2HvSQUHV7ciPojDLXBqSpwnq3AbQ7PKscmR",
  "key10": "FmfFDs8EtdV4kXaH99q1RbkDVhs83sABYZMneUmYGPxN33LYdZKHLxtwJkKCZHUox7kvzQM6NGZpKqA92zzLgTB",
  "key11": "DTSx8BDVgHJiKsjfmc2MGbMLCRJwoihxccymUDSrbPjYyxdJvagKyomxsmG61rCVuyTi8STyMGZwh1Q4K9ioFJN",
  "key12": "4CbwzerUatXsVVNpAVJqAHZassbVTwZSkPBUbijoPZQkpyzREquwjDTujHbvcfnQjbPL7RQ3YYSbJCWzuoDtmaG7",
  "key13": "3Ym8qcLZh8Dg37p76mv6gJeMGCNbK1KZHC9H6Rw7CY6DeEDbLAAxRcR1tcso4NhAGbPRPU38PSQHSyYnvKEJdAYf",
  "key14": "2pVNbQWYPUxauGQP5mJ23MwiWzru9UKNWbcTzPsNd8wmHtiDNxv9Nhsc1pcfuXi2RST3SPLCKeQS7vqZDCHsh7pW",
  "key15": "UMJbMakrqPNNdtqRV8o8XyC9w1mYyW9Zkrk3xqWEKBtUnSkKVMKqSAeMUnUaca4ZxB3TmKZQKUb2GcUnpNbJoef",
  "key16": "5uPvk92CtPaJuomwxqcvXiD9nbCH2EAD5UzE9tVnqk1hrb7JjMmP2yWjUYu6iysXRVjXRrVgQmdZxjpwwyCunHg6",
  "key17": "5pWY4WyutVa9tKQmJRT5AxjnMc2o9dB1PBLvJgyngDkcW7o16Pi9icfDTaTokYfEH2ikFKWVyvJHyaFpQ73UacS2",
  "key18": "5iVzmRUx8xBYe6BPxNpYkdCbyNfwE7Hnsv7TNWBBnznnyAAGYaJovCKwLy2JQKQwBxNz6ZYQMoxUy3XuTv6wBrit",
  "key19": "3TrAbzVafnbXcSo1LwyA1bfGJdxkF3hzML4p5mppKLqSzHduzAYfWtL6ESm2tRaN8DuXg5giTWHYpeRSfCZSkubZ",
  "key20": "9is4dFYnaSTrpkaVf6VHbdhJtH58soN3Tun6c6iLR6DgoSe7k1w2D4dXSQHuttmeAkLm1Z3KVt4rRYMixw5WwCH",
  "key21": "5Z7XPU9dMo6yqsy2KAFLxHdd5pBUBb7osJgz89r5SandzExgYLcd3qGhk5w98PjnoSHGPsKAMpJb69yNK4QzjsVz",
  "key22": "36YNv8v3XPsmipNrN1u3qCTaaRnNAhGw7ox91wtiaZ3ugujD7yJFEshXy1TUaPh5HKhXKf9e49G6KyN4q3xT6B5f",
  "key23": "pWRT1YLgNc4PRfUZupHRvUTS19UqUzsnvkN3cVM5zeRJudLmg1iyzNXFWoGhy7uX5vhFLd4r4RWMNTGrgyMppL1",
  "key24": "3gSwzt1UAnMK5WpNYWJqCVZERMWg7gQzCPet8jybhW7t3nmYtyEp3gswsnqLYDvrLmQcb8tKTWoYuBg2hDeJGfiw",
  "key25": "4ShXoHGNSdKJB5SRkNqv1qczstJXbP6voJtcZNupeMdCFmWVgKf9D8rby8ZDmzAwpcaqf9sEN4EpGpxwcKr41Rzy",
  "key26": "4GoNjs4z1ag4aSo6bmQXimxxUP5KNZ4xxutsLbYzUsdPMqbdWJmeLCMDAeGz4THeuw372Hgu4JBQZgTYBryNcCYe",
  "key27": "3gp5ndY8S5nX9EHCZTmSD6n7atPqaGzvNsudLPACCttsve1jAnta8DbGRkf8mAhRqY5smq2ioeGpgBX8cMFSaEpA",
  "key28": "5fkvP144rJFkV8xoRxWg7VgbHYZKC9BhytTLzMH34eAmwKYbZZURVHCnk5c6GexDBQzCxSs7bxs6wqqgeN8iir3e",
  "key29": "3938wkRNm7VieXBi9L2puFVVM5Hqe1WxL8PAtjphsVoeqDL8AmUcbvQEPKc9H47WfMNNUwz4XjFftjjSVHjtbrRZ",
  "key30": "5z3SLM5X9ScLQfxeuK4RXe9kFEvm557hCqBNfb6YscEU4RzCxNUvC6FeyAJm67Jcx1nV4phbbs2ujtFWVFAvyBSw",
  "key31": "4QhZtmr6BDybqYtdE2v9RN3HB2JNHL5QW5UJvQ9QfRsQEYHJiTWovYvCShGaLfAzJryBTirtGsak5FUrhVY43UTW",
  "key32": "5YWBJ4iKkVKDFR6vVuVxs9dmKUeoxhSajqKFE6r9zVSQoiFt5SAhYmUirNWqLU7dDq9z1wkKqXkH15LrEgVaJQDU",
  "key33": "3KJkfaR2JgUPvQtDq4rrBdtyZ4shfic4A8MUgneqgorvDp9rtJJpVvVby2Yo9yWGQYSvC2x3PLSjdbJEhCyb7iJG",
  "key34": "29Ds6DXBh95jxaoD5gSrtRdaB12SvL1AGqv5R3ePZbvgbzxVJhgFwFqeF4gKbp61CVuXgzcYgc3VKQQYsFvnaT3o",
  "key35": "4fcwpj8M6BqH1u2Ki6JeLxQ8TtagB9vTkSKNDgGGUSnJE2ZozzBY7CsUVTELRJiQnYggstggZ84X5DByGAK2U7Y6",
  "key36": "2HwLxLtWBAsDADpNJsxND81qe3RoyzHSbqGwALxVfp6bheT6mAvFzeH1SYLzzaNTPp2kCdqxdMHvz4wtBYvgKzTm",
  "key37": "47KaJqVn3konJPp4tifo2Ruhi94wVZqFj94Ya6UYehTyjS3Zr6ZL4gHMfTCmHGsdtmmWtSD4Dv2jWowWA6PH6Ni8",
  "key38": "3ekYGUJDFs1W32LJxjdJ9nn6UkLG6oUbFRCmEURQmWw2tULHeCi2FJhThA2XoaAYFk61wGT4LG71D138Kht6haoD",
  "key39": "5tLSGxBtfydgNy2B62ujCMMPsRL4LW5kW8iiBrYEWMX1jX2v9E8BX56pHjrMJ5EiuoUUvYfKjSVCfTMVfJbWugRZ",
  "key40": "2yCj89HB24ouCeVLcn8wxSdtNsUUgR4D6Z7nYfxw1C8RhDGsYb72cAEFdJ9prNfyj6QFdR89pu5R7KFBAayCsmRP",
  "key41": "4pLQCaRrn46DVhHg79vya4Ra61T2if7Ag2FPqsfRrepQjH5LxTrKM6PcthQRFBpgFy4uEsThpgwucoKpv6rfHHcN",
  "key42": "2k3ad1FqpEvgbaTF189J82SgRc7X5wJNt1trkpt9C4AzpUBRkLAM9PoKSw5TWQzCFyVo7k7qg2xcri3pmtEFAkis",
  "key43": "2KHL1QZyXSCH2zDt8EJyvcg4cp2yWNrmwvQPugYt8qYgSoHG1gAz4dsExboFRKmuEfzadJsjTUEykaq2N8jrGqbZ",
  "key44": "2fXdSQ6C9c44JcGdvsR3XcpQAQqFybjkCommbH2jL4D8E6azXjCoRM2WZNtwMiKq2aneskr7de13kpPYAM4r1HTG",
  "key45": "2quz2USSCHaXF5VZDG5hhLkvjCZZWPz8GrFJDsVrVqQMkdxvomb8iAqhP9u5rcQavmeG5VzzhdLfSQoTmpCKfcy3",
  "key46": "529we2r9iaPMjyU62DtYJS9outsxhxqmGLuQD3eRrA7Hvu6Vz9VQttbocEMvHFHHWtJ3j1NL8neLMA9ycc2Sw7jK",
  "key47": "n94XdFVuzWE13mwahtsKvAc6hmRWGvDUG7J5LBQran42jijB1S89Pcys8V1C9kYKAW1ZHWGLinXcC6uH7MAdSwR",
  "key48": "5Hpv4jbcNuTFPVuVGb2PRxVq4cb1gwPKeRF7F4twUo14PSEKW2mr51nm5YJw3HP5CkEfvxxCTssbJZpXGjC3TQsE",
  "key49": "2iYj9x47NgHtAcTuDnfTMWiBe2rQuMQV1phMn5rMmhSPss7aszAQtg5n2tQmoELed1wCWTm8NLr8zgcB6gA3nAER"
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
