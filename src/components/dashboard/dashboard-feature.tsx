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
    "4ZbfktsSNUiEVvNECihEjzkzy7iSKrPcFYdyEWLNPe8TRAMRqkefMuLotHfuWFRcPMRxWh8x7ZFMK7428bJuw1je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U8BgwdHUkh1d5UT8rBTctWtXujx9iTX3DVrsixRS8g8YYw5VbfDAKfq7gWnKFkrf9gznjFuWKQDF5vWJd5F4oBn",
  "key1": "2Y6JcdRBBFYbKwmqpfQKKn94jfL8xCsPda1FEzt7vZKYPujNteXZD4Qaz5PnjtpxyqVwddbS7yvKnCdXGZLr3ahJ",
  "key2": "2SDCoxx4LT6jeCaQAAmHaV8PoVkVwC6b8dk3o6rtm14jhNBG5WLgqrEan5rrKK3wqep7CDyoNekPhY4zQ3pBadRj",
  "key3": "44kVYXee5ni6U3tx1GWAPC3kQC1imVuJobhqgR54W9isxMcDoZUqyjHxRXgLCgdA7V83F2RZTf2muHA6S2gw6Avb",
  "key4": "4ninLbJDFJKKMFLWYKsQDgRaVupahmnqNt68FiRCBL94cbUUi36e66S3MZz6ENiTRH5NYbFLUDjfm2fCZf9F4XW4",
  "key5": "4HzyKbRJsgCRuJFYHGyH9WNuBirvRa5FpitEnWTEuuPk11SinADeMGk4FFiyX61GxznkppLdEYifqBm8NaCMHqKs",
  "key6": "6Qkw75F12s7gBmkbQJnrXUmeLqK8xSuz8JG9rizU1tCV1q4JnXND6u3TDFdicHy91Txufd7AZdMrT33gAXjhsfq",
  "key7": "5NjY7MFnjaHGk6ZAX6Q7tPcP6ecjuKHCnxm8aB5ZwLmy972ZyPdG9YBcJaEs13pwqqWbPUJrQ8EM7sLH6e2s59EE",
  "key8": "5fU51s3aJAkGLKpbQ5EkCsTCi1FaoEydJSJi4neSJUpkAwd5orfBAeMzUksrCpn8ebuBspCNNqq8SCYyq5YV6qWT",
  "key9": "2mMMkmLXqjmQmuNxQAeYN38AagZGWjKBQK8VG8QYohoouJVMvGW7ukUiXFq7z9KH8vPSTuEj4kAyq3cGXt1bPQjw",
  "key10": "2i2yx2g9RsFXfyZwALjyGUe2Zpy4KCExQWNpvkpWR9ZXSBrL6ZNDmdiumMc9MTdaPDmUnUmQ7icrLbR9CNVbuPEH",
  "key11": "3yAvKWn8EUaorAYKB15qmT98KuR7fC4tmSbYxr1BCghqp9y1BUNZSvNSTRUdLzTbP2UR3MZ71hkZHC4BQrN63bFY",
  "key12": "TC4AzZTuyhVGanFaUmeaq6QBSJ47No7jZh3Trzjv4T3eid5ZHrbzLsdz4MsdgrtRmAhcfFUreSiGQGbJkXDBz54",
  "key13": "cfsNtMBCDgeGNX1vLEhnrsS9FgKiTihbf3Vaa468SJvUptGFYgpwZCF87NHMkFY28LPDLzLRxegUnZ98bYokBKN",
  "key14": "3J14VA1xdFsJqUve4ZFQXuyHvEftasQQntrruXSFzKntn4YURwpsHWApxaus4pBJYXVr7SVqxy6NsQA2aK3NuT7i",
  "key15": "iPFtSYNxLzCLDgmXMCv9dfWqWSCoMguKveXCM2x19CzCJg7jp3te2tCWKgSUPm7YpuRYBse2gpYuXggxf3n5FaG",
  "key16": "4wPDGpwrwuFUr5gP6Qatap4Uss1VBoX6ZESjsZVWkJnCrvRZH6yrhScrS86f4N2irPKVbzhSzgaocsdBRZMUNEqG",
  "key17": "5zEToBSNTSQtSuBz5AWVj139shA2K1wAvyRy4uBrqdS7cd7g6PMYrxnm5LwSfuDRzsFo58eSiRYG9iR9ivGmBY7N",
  "key18": "SwYnwBRJJFN8a9ogVM6wjYQShdrSe6hSUgnrgUcekNqSVae7QfxhAnAYcuazqpWwb6im19XegQg1u9dqGTb5Kx3",
  "key19": "4W16DHAj4nrwbPtVDPVg9EhRwZdGFDvAjep1NLjgRaqA7gBhQMps64mUkQ1vHArKHne4UXPB8vUpBWLNV9emoruh",
  "key20": "PeSvjZ6UCxPQPhaWrG4NswJZy7D1Y4jtEBrzGgNfnUwM7puGQHoWDMxBXroj9daeGYjxQoEi8XjwYSHtYfUsbje",
  "key21": "5BM7ByfeWRepFxpna5491b2FL7ZiN6rK14LbtmqjhYbKaDukVgQt77vNDdLxxWk7XckFRBUTHZpGE5fp9zwH6n6J",
  "key22": "dQV5HWmKdkXq1YwQaKYRnyQqjB1wMh7qzZBebLHucqqPGWqXZ8i7DmZ2rYSDTdVRCDT8NaafgZ6bYtYQ1kq1fgy",
  "key23": "jgQwFCCp1Vi7ymkfPToUy3uzT4dGDnbErdxP8g3aQ3nhebZr42gjW6RZEaeyTdj7jGodTWBDNgXZogBXqcBfehp",
  "key24": "vjTXUEAxYnuXgGydDyH5pw3fy6ME4GgVZz1mgPjGjPq3GuvdqGmQtxW2iZM789F3P83dmvy5k9978KvnicrQCWQ",
  "key25": "3giaEj3jN3xoem852rB9cbZRPnqh5xBAKN4jhuZPxwD7qfn6UUEvfUPd7uPAGVKpbDcnYUPB3MRqyfJ2ugF2jxJJ",
  "key26": "4TxXixxjDxB3taX98bD85r87HUQz9UrKCzJZbCbe5sCuB397iomxMX9uLXFNtbdq8Sfnyz3kwgH5iqrgDiffpUZD",
  "key27": "5coanvfNNZyj7Zgj25d7WHjX87jZ7g1NUXgHLzYWdsLFjqoxpU8XZ5w4itfuy2ZcW5rPkgtDS7tBotH5R2ig3819",
  "key28": "G2ZGA9Q1DZ4XKj9nNxF2drazNmmsvaiu6cD7iyVoCU8ghuuDSnPCW1YLwC3cXbMeJw9LXMyPd1uz8bxsWx5jwXE",
  "key29": "YJmBz9dmnTWN4N7ZtAQWoWESh3hfngYFQDDREbUJdaAkyJvgWpKzkMoUZdorERyz7f4hqu8SGRUxHi4UjGPn9Rc",
  "key30": "2Hph2ReWytG9rAY9dxEgwshHKFRzZLD31h9F5qEkZ6GUsmqsEtYg9umKFBbWperaoz9LPDy1XyYtghUNwwQ6s2ea",
  "key31": "3QH6cvDvStGLNGpmmsH8AGan3THMLZjcDU4uAhy8dKpFxNb5zjM1bBZiRrXdaH2Xy7ZLB6QBnEY4tUEg8q6dS5gf",
  "key32": "2Dof9XR9NKqXaQa2ox28WUSCGiAVHk7VLr7q1zeJVqEMrNWJSKSZyVnndN9QDss3XQTmP7R4ouBxtWBxS9sUzQij",
  "key33": "4GwHNxGRBWb9gWXgZ9tYDouMbgryfQxcvXGWLhibMknZNAJ4wRfgmhMEsMken9y4SixZqze99c2G57oTn3NUsw2s",
  "key34": "4N4ewzjPBMpqurNi3Z6pvBKnubt6LxfwBcpH94vJTGvYxLf9Vw1ZxnHSVk9Wn3MtVggzX6MB2Ze1NBk9pNg37Jm4",
  "key35": "eRgEYdWerCxoTMuMaDmECNLWogUcVW3dkzh9HpGoyiQRu1d3dbGcVu3jmAUSbZrcBJLdL4pwstTybNiiD56KwEg",
  "key36": "2yxEjvBEkDU96cVgdvhJa7Auy735fRrLJqinegh134aSx4fJXK8TzcRMiPBSGpMbLnRiLHacMhr8mFCBfH6dhWYd",
  "key37": "5D9b1xRbBvaPHDyo2uF1B78pZfgYWA9r6DHbi2xKYmYanZmJB95ArUgZ7QBTMVLJKW9k6PZ1MozqZXUmpguksDQY",
  "key38": "3wZUHvUSuBLNyVSZtT7aABMi31YaVprftsCFtbZpz1oMEce5WQ4idU5p31jXzqSnq26u33RrDvYMnXMB9BPVhMAV",
  "key39": "rDCEt83JpWMYzcAqdwxbAVU87QAjvyWjoBTw7wdJzvA8QKu8CcW7NBcthmz1EF8FzPsv6VDJQnnmMAR2TMWke4B",
  "key40": "52uF1jiBH89ifp5F2QgQK1npHD1t8wEUB5dyVNcRA7HPa43XxhvgyzHZvS75VvAgrYRPdb2evijCZDcQorAmcS6u",
  "key41": "2QcaNDrWikxsJcHMTUgUtQQyNMxA2Q1SZ1JobvaJ91ddSARZfhRr2qCxbrn1f8AeaqQtKaPX1RpEeNEqSKKBGaVC",
  "key42": "2EpCUyejqLEDBJ16avEweTbEZoDKG6VAnftG8W2wWL2U3u7Q8deA9MQFByU8vBuNLkN7DtENbT5pKst6z5qM7fMa",
  "key43": "5RYmWLyruZFeCr9o1YTHZRJRRnheMip3yh2XwKTpt6xNLi1DEwnrsobQFzTxM4uzMjCaxsXcpNCCxNQ9X1C9PnCR",
  "key44": "49jptn48bFXiD3DJE2y8PYHtrw53VC83SAxvxAzgq6XLTnkKwxRqQHa58WuLL4ua26stvJu2po1crvsuznKkqqWx",
  "key45": "5eYdCGVZRNNaXyYRVDw8vYrgGf8Hq5rP3U8in79EkErJE8BpqbFM1djCyP4pCS8pq5GAms6JcKLKHWKr61Q3xaDi",
  "key46": "4VpqBBuFA1XJLCKHDGZt3EY6b4g7awnuYPSu4LeQyJoX5D8dH8q7Vq3CZqsaf2ttu4aYtYLWGB7YReVGZNDgPDDE",
  "key47": "4adSR1sogHVEGLdhumGhHdcsBDMkgrv4hnRGT83p6dcELF2e15wiaAL6XPtDJebWMeeQuZokq2MXaETdNfnK5TkU",
  "key48": "446zRNBmyMn32wDu8rGQEeCpF2U1WMZi5YA1n6BXs7dDKT9SSE1Uajr7EksyZF4XRHUa6kayVmHoBjDkEgzTuBcQ"
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
