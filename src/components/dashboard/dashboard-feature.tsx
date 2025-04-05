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
    "3XFkYbSD41SkBBfmmvXS4myxhzhyKT85YgjHDpoUjgYsu7FjRqUfsE4Z6MLGzaskd4fasxfEHjM2KsoUmTnCrUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bXGsXxYqDsg7vx2rcSkoF8oPVbz4aU7sVtdGN6NvDX6wuFYm3xxxLgwqPcivVUx9wSttreNznEe2s5515jQKbye",
  "key1": "6hQf1tU1EtgP1gkS6Ht866qNmEjaU7WabG4uPrgWeY1fC4QQbZpcrX4JmWprdQqnX8ze3gUyA9UgB9nwCZrBtqh",
  "key2": "3uznqEWz8NoELoy6WZ8Tx7KVz3rB5tBynJ3qrmKE2jgbaMSW1cFaaMTeZM9vaq3Gg7nvDKU7xjYkePHAyCZ2tzMP",
  "key3": "4hU96dSE7BqCh93Lfq8pbWpwXC97JCdEMHBJ9zo1jyLYGm3JSrK7FiHkZYW8KKcMxtkkacw41inMpwoJitt7nfUk",
  "key4": "4GDDrBo943irMsw183Uu9mi3DCTdzURL1tXskZxBom7GemmcWvhvbfgUMJ3vKPsUA2E8qnGFLYSnbfWtsLYycDw6",
  "key5": "5C8bTg35MSKUtz5P8VgfGwjR5KFrgsudBfptg7TXob3rDcLHuYnN3Wb8xCnZgNsiytdRutJYNpzUQqbyEb1aTUz4",
  "key6": "5yoicvZiLSZReocFyUtuDZey3z2hiGUntb7uJDZZEVpkwDtraCmKCsGx5vrrULWJ1B91fnLCqisX22RiH4T1Y1JS",
  "key7": "5UCEPGcR4wJeCQKfZbAMTs1g9EK6wQ1EPT58GoQAEyJoA3ACcfvwh7Baaf72iK1GEa7Qtb3oT5A5QfbFBcaGPqwK",
  "key8": "5w3qLJJzNehjk1hoh429JpUqB41imc1HKqnZUrYfqh6X8jdxy1MsyoR1PRyZV6cP3KN8wc114WEHEPsBrHMHthQL",
  "key9": "4CDNjRXr63TwvAGdG4FmVQJ7SyRqVdp4ttpMyyX5sKH63J4Kt4kEs4CXAtvTYrcgLDi85A3HaVjz8RV7kF4J9Et7",
  "key10": "4uxgoZkPVY7e7NEnT1vB6C8AGKWyUENPaH24vYXkMDYe6icMBBAEhc2adQGg6JcgzDtULjVdpzwUXqiieBJYuQYq",
  "key11": "4o5NR71Mu4Hj3pywer37hEytA62FMAPUx8QC2NKW1HBmbxANZ2o7ETNwEQcZgocjmmyLkt13vgPnHjtXWwGVoM9f",
  "key12": "4bcPwSrAbAtDBgXKS9gALjTup9gUDKzVet2F7Jia6SHrU4J2YE6FffLC6cN98Lr1Yjmnvrttxmh7HgB2Fgage5Kc",
  "key13": "3xDcHNUjnEEZ8THKt3vsSG8LCbtAsiuUohjXtWng75hUmQWfvK1STrYKynk2eZRBVJGoN27R57KM9U2WsY3AnVJE",
  "key14": "ibSGrcnpefrC8JcmGWvHb5y9ErAcbq5tT4WjjBFSJpVWdDcVyUbjGNBruVth4ySdsjhx7NudWy3RVwzFjmbDqwF",
  "key15": "MhT966Hb5wWjTmNgnpWSRFjeE2NNut3XpxHrBYyzZ2MepQSguEPb6JznhDzKFRsetmstk5sshiHC53KFwhRhydP",
  "key16": "4zrRHyuDD4wii7ZMVG976Y3epGbNTsK1HMDqFnBYibk6TVwR39azdyx8RmS3NSugC4vu1fgCZNLQeY5EbeCVpDYY",
  "key17": "3iZ1LA7oauzV4be3VVExXfhpK2gRyFoinKvsmfrC369WQ7b5h4qYHffo4dtsxcXwipLM5DvqTmhg3Qnzkd7P6SPd",
  "key18": "ymZcwKE1fbhop9F3nEWb6ria8VwTe4d37s1WyTKxraZxUhBCRv25fmuFqstvaawbEH8DAVCxG7ZEHadSG2zEBw8",
  "key19": "2GXPerfYnuSiAF4cnyLZB2P2HcUJs4aGwLWVQj2SkmbsWbWXyA9G87xBGTPiWZhW5UZ96AdqdkeZHAT9Rjg9Q36S",
  "key20": "5p2N6DeNGAt8PrAcDx7Lt6JWiDso5tHtcUx6UFtYtawsR2eKRjECd3hPSbCamrv8biYZUYpyhAdQkUs1gtB4dDd",
  "key21": "4arn93YTiZemtMnGPf9ujCh42dV5KGseCFuiowPtugwMtgrKRcRLQu6JycmDKUKQ2Sf3Aay7ryu34VeS5Pu6hg15",
  "key22": "5KfoPyzqz2jxBcavMNB6jZb6tqq9Rotx2Vrtq2VpuhDRvQQLc2ZEAPReVeJPtmPcAN8pLi6h9bKz2zWusZgtB1bk",
  "key23": "3mkGBWaZYMLVShVR2NbPUX2YfbBNiZCpFMFv982wNnKJg7UeJqaXAXyiWywerXbJDiaxeshwA9KtsGH2KiS2Xk1L",
  "key24": "zJKAxBc8g83RjyMc1NgUN95fGQSbVYWwmeB6dM7ioqdVE75SeHKJ75RUXenP2B1BqKqLEwjWjMjXLhGwdtpQ9R3",
  "key25": "5XqBfxWQQhHThm8ebNCAJhaSipvDKfBb6VG4fnpCiUdLGiaCq8MDxUjgkySqhJMgPKnwG9p3wq5vZQLz36ACkF2k",
  "key26": "4RAgx98KVBgXBLyxov5EuEa9rjSyHXhdAaioGS8jMWfkKmbon8CjsmT9m9JvnWBBGjkYw12XkcrWMPWjU3f2rcSc",
  "key27": "5f15ym1RPP4XGg78m624bgNefoTHZUcwqMdyW1oTv8LftkQj4sQBgZf2y9NMMbzeVywaP64wmzfKVcAkEinvHzen",
  "key28": "FQ7f6XRn8GSPAR1QeCUiuSDPvvxbfHUSjfu7eMa9U8uV4kF8XR2sJx82onJU1K8V8vvrtxwzk81RzqNndbzY6Rj",
  "key29": "MLTu9n7krraCUX3j1TgPvnRiTFQmSSp6Mtn2J5oZhPiQz83iagkKEsttL2viAM5im9duYbHEBPiHxqUKbardsL2",
  "key30": "4QM964hwGKRLvc7c7W5H1A8pJYQQyWsGxxbsAwfpsPfNazQ6QguEApzihBzaKP2ztncJp7THDxgWuBckMtH3Fefb",
  "key31": "2Kbg1ZekbaH8KqE2jYPFovXQFJDqKWE8K9bZAXrtBqhCfLHeWkwg6UcJ3EUWCEo6WEULTu2Gp2zwxGAgao88fnAH",
  "key32": "eNtgoPF26hc5ht2EZ5QChX7KwfuYnLVJu4d1E9btt6VJTZ2RfyN4A8u3dg3WVYes2vFBDbHzmHyS2VRaE8FNEwS",
  "key33": "AZxEdnNgyCLXaoKXBSY8zitzw3Xf1CSHukibh5sHe4tegCQoxSavFiNEYQLZkJaVdK84z2f2thUknpxya61znem",
  "key34": "67bRqtHrbZwKR9LKyiP25D1AUeGotkiMiTVWrnmUyaV5gDM2FQYqsLvJnurAo6ZmUbCBwNhUUEsRxWpWa4upQF6m",
  "key35": "3DZrjEn5DhRsuD2DfNy6T6FGwJBcnnue3toN5Xmd4HJMerhmwoSvvt5TN52tJ1oZM4697rKbDF6Wf1jTs4JJWzpY",
  "key36": "2fQ3BZZPDQTKFkcZuccvsVMWc5QBs2Noa6EDiQg5mUgq58p76djpkkvV5hoKqwnM2aM24RZRyWpSYFnUmajHbMpB",
  "key37": "3DCkoewNDsZwevxfvD3aL6cbpPoksKbtRTRy9xewdBJkWao6X6n7rpvu14ApmrVtfWPf5zgpzSXFzz2hDHnHqZLc",
  "key38": "5CNsUbZwphETkLUNXzpNzyVo8qtfoTTnuA9yFsmzuJ6jj7zx1ABQm6oahMw2TtXV9o3GAztLTpM1Jvp52WPefs9j",
  "key39": "3j1rhxJdkYKhy7L6Q6UfSsWYPo3eREsLT9hTWdVGXiRooRefCEHqGZXGiogss55kJGY9arsWV3vq8oBpbJ1Ht9L7",
  "key40": "4foErwCuhfMr47rJ1GqZiFidcnHbi77Rs7R6aifUBuTyZsvdW38m7G2NWPYSq6aM1iPVXaJcTwXgsqBUwqRMZcqq"
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
