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
    "2VvJVbkrenyAJtdwDyn9ZAibWqKqWxMSyhqPPBwurKrwBrBTv3D3WqVqcY5THbpSqnCUyRcEKM3QZewjWag4oxyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vuhAmXYtYn26QpYDMfDYXYN8ns8yfxKrtCV5k8XdyjH1SHZqjctZhonHPR9w3SEutdLUqDs3JW7xmYBK6c5cT17",
  "key1": "3xLUMpELvwETdToSAKQaBYj8HPxzuWhamfCq7b5cqm9vB567x6HpdqXo8MJP8irMfVT5Um1k5f9cLh8zTeL1vaGC",
  "key2": "3LcqJFph3X6qjs5aQGWbw8Drh6Usgif1MitL6f79E6w49WeQ6MZaTdezyprNJs5k4oE995XywwGTf4paAa4aHc2t",
  "key3": "3tGmb4vfq9w9twdRBjYzPUxYxNFhcrgTqK7eyrpbKjyai44H5E1wX2G1nsrvi67jT9NPu7mQBBAMvbwJch98ZioN",
  "key4": "4QymvbAroTvomq1LAWreDNX5aQA4CKBuak5DtF63JeSumQ3yBFKgQNCD1BdbNapSh5Kqv22BMdFJw8oXUzhe5kau",
  "key5": "5YzLKLonC54LzPTteSvsordwvzcFWCojpTsj47rfjz4VAdHhZTmEQcHGRSJzcAz7ojfAPtXJLjMdWv36s6ei5JNx",
  "key6": "41KRyv6T89iL4oHtaeeZSsWyc5MamWQoFuwN4HyKRvTEmAiqf5HCgcDvguHo4TjJsdCKNCcJe8Ci2H2xCQB41anG",
  "key7": "3aFjRWmFs1qJUkYt6FhamcWwNqp4rdkFxnAzAAACxszaxqAJAc7jCtVo9LhYaYaGJ2zb47Sv5n3XWTCr6QHJwxjA",
  "key8": "2GxPy9Hr8gqNXKo1G8CiKeWVidT6mFr9uwv89hdrSt3NzQhpQ6Q7ev7Ps5CrKndRqKwbixid7jeANHWXAtABZmNf",
  "key9": "3j1MvHmekfugnCMAmNQDTXBYrJctx2H4JwUz1bGWyjB1K2aqHJL96t6JuSLrhXbbjwyLoA42j2wAXxthZjXX93DA",
  "key10": "2tzXL5qoj7ZskHMNh1cNeGzGGtny22MPnNDF65BAPya7CAYRNvy9hapFzqVXD6MNp9Xs3MEc5hGfPeR3Tsngof7C",
  "key11": "3R9JRkqBMV3R8HHuY5sJPBu2ZFjYWzbiEyzzQjMvwUzPY6MxSowtKr4CZgPZhffdNHjofdpmWs2XkBcoh3xoUDMi",
  "key12": "2ySSKnH7p13gn3eszjK8nuip1m3iDYFjGa2uJCapCqf55EKhzhEVVCT1aB8APhNhRKKrYcbDCGpH1JzWiYjy6ZvF",
  "key13": "4EDEUfqtjiEV81fscqAsxKfHAbgMPVuDbWvz3ZGbbvpESYGCBJ8f9EB9Rw9ZQjzoEvcAaiFKRYYJwurwjoUSsgFr",
  "key14": "3gnpcDyNcJDouZkpBrGoZWfRsjecs1gLD5YhASU7ZTuTUa1CLuH5s7ZtwVqMWxFPW2UojWzwKgQDtoJzqzWYjnav",
  "key15": "Q3hwaYA7d7rKadm8kqSJDJKrB1eBsWnF8pS7zJhXmm4BbwU2TgbzDL9bzR8EC6Cj7sdrGpvsVEG83jsmuvoLFUx",
  "key16": "4YD8E7tPkvWzhow35gwpS41jbqsuu8nhGQGgWyJ7rfCnLkJtSF1dAKrLrmqrsFwmfsyb8DnNNpLvPKsvF2vFrGsQ",
  "key17": "2Dax19GuBtsih3Jv7yRjp5BWCDoCD4T1NVB6MCdgzf2mo6HHima21NCsUFMLLR2C2fBZrixJCxXdcTRaWxSnZ6Bt",
  "key18": "4qPTw9xiuw8vcfCmtugEHSDHiRSWi4q1yFCVtsMGp2LEBvLKVXVZjzEN1eVAZHDsSVqijpQJfGawtmB5YTDNkAHu",
  "key19": "5zKSxyLLv8a5yTztvNPWyZjcbhqmigf6Kcf5fVEt6cQwuxBCWasxX9wsBGpPHuYANyteQM8D6VUwYbapizDSSFbr",
  "key20": "4PzpRiVF7WHeaqjogPQoe4siaqBujhmZ32nzo68QS8jAtmAFgE7kkuwjT7Ho23xGU51Xe1avEMBwWu4BuKUQNpSY",
  "key21": "HAGsqAwmhRfeExXkbP4pJWUq1R6k2wGwjVutzD7s4pGDcRGQybvj4tLhthC4ga2pDisAMaGo58pSi46XdzzQd6P",
  "key22": "5Lf2nuDFdHAAy6KCnfPAmrbmWvjb6AJbNLcCc5QzL16hYBmCW5rr9obk9RZcoadQTfQpdgKWhj8WCvN8reEe9xtW",
  "key23": "iNkiUSYBZL2CyNQctei1RfWsipQJB7k9eV8oJmBW4QTyK2A58tjEesKwiy8btMfkvv2vehYDHyfKGh1ap2aN78Z",
  "key24": "5uQhVtFmFnqnJ13DjQVPRkZV83FTW2Sy8gh3SuyG5CNwkLommZcTgxP7tGyuvmvfqWLNZdBejSZdftefSRx6E9eU",
  "key25": "3YLnhYZG1Uc23u7eVpzH49WBKFu2ztXqVmMKmwinnmARjXXesDfLUFXH28ymQwT2pyVKKZP5ny8S5hMxGAq62kqc",
  "key26": "tbA85sQ1aNSDFzFnjAXhKCdG5UXULUMtvBsP58dYu4b97ZTLV9nmeo4m7HTfjkLwrWekVYHtBfecV5LRcCutFKK",
  "key27": "zNCHTDMgFu4RbzVKzEHuJ9xgbVRq46Dw8Wh8KcjmzSLvsrwThvP2w54Cx36KajP1W3VosCibcKReDw24UeaTPyj",
  "key28": "4ygc1e23VaQzgGzCYw8jgLbcKBoxXje53tEKu7WHabzTKGzPNRKcRk66c1XpMehqXX4hyaqyxjaTzE1cUigTTZHJ",
  "key29": "4SCaAVtE6Wd79r7KdmgWQnXTRUK9KmogQ3Po4BVq2ZBJRYQDrvsDqAF5PwYeLe67ZjXNr4Kkk9rekf5AxKuf7XvM",
  "key30": "5U4K9Tf4ZShbJHodeLjTjkPbtzNhLA9h3ogWmKXMf8Tj8mx5r9Pzjpr9N1t8PydDMLkyu583LoentCMNNnsqJhdo",
  "key31": "5qbCXhpuu7ki1vrQo6BLYvjtxzWCwr9ZMtWzHVcbkboTNAoDWJ3xAApo1xzsi4BkvTVRutRFjNaiPUFgX3mAzXrY",
  "key32": "3HHyTiaPeGz3xRCXDbTPYay2SJhG6HvMRr8n532tCUP4DDYPaNw3GNAoQeNQ5833Sn5yB56YZx5zHa8bpwhdio9u",
  "key33": "62ZqgraAsyNPXU7egPQUhwHgFdpKDCRdE6pxHnSrH3mt7SZguG3pXTZ5gZMgYNSFHqsHtD5V2jjf1BCwPi7zznHx",
  "key34": "3sVui1NgnwxkUkxXTpce6yHtm6uZtUXVNUC8kkKbvunizFghqiFgZtCQ4ZomCK6Rd18L1k1Gnb6XNtwihuKrciaS",
  "key35": "5Q1ga2cGVbZMswPVSjNEM91UFoyKSuKvS4A4Q4doG86uKW629UyiPXQXjZ9dGWNgYeAgtVafUymDC5UBWqAoyegk",
  "key36": "5uHYSmnedWBumzoRnm7h6WTR3hRWX4otxw9rbiRhEDuFymcH8oTx86VqGFx5dvuctTCYTcuZ4KpGEo1C4ABheJRs",
  "key37": "5pTzga6o1qpG9CVvTPevSnCsAK1h8nS2nr74jJ2mni9J4Ah99gtZfXX2ZGzTuzQzYUEkU3nkywyoH2ffTTuBLgbd",
  "key38": "34yuYAuRwEZPosbbrhAB4Z7DWwVd2cRtHzyaDmXE8ht2ZchuP637kVjuAuSp6K87iyACEigQTPjXmn1THGEcDL5Y",
  "key39": "4nkZtuTmpVBeAVutPR5dpu4aaMc4NBG8WWyswE8z9XD7x6btWkmCsPzqyXLcpgSSc73AzyLN4Mc6m19vk2K3nByf",
  "key40": "5Tijt2kQad2pGZkBL44pq2PhG3wuSM2wx6yhuQiry31pqed3NcwNXjpxGCjHfpCtHW5wdhoxpnunhsoqLPrYSjZf",
  "key41": "74ZFvRByRRYezbrp8sxNMTxJwDBaqrNMLUjz58gkUwR8UjArQL6FRa8RoshqKKxudevUBbm1Bdi75d1fe3aL3Jc"
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
