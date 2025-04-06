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
    "2vfRatdP3BD8c1CRTgV3jNkitGw1YRkc4pneiL3LyJ8f7Z1AADPtnQHT2KCcGYG3EYDZT4fL9VGNCoDCJqsrkvzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fzQmWKq99kfYjxsCit9icWFfpiyNw2mDRSJXGQ9PJEEK8HKjBLAmcLaWip2yKnL7SkraMJD5bocKpg3a9iCjY1D",
  "key1": "613zKnk9Efm2rq37uXqfRQdWmpbMcJNXZKzNhhKagHTD4X8WC3QZBh5xe2obQQ7t5ZdWqv5bv9T4UQDJGQCLZLTm",
  "key2": "4ca9ZWKcsV66vH1sn9Xh44eQucrcMeRdVotoBojdFo3ZLLhgNFo8GwkTEf8r24QeEauzE8mhQJ3iXM8QVUCTXH5z",
  "key3": "2ny3Mwj5aCc1vnjqsDj7AYXMgqV3yPJLr2ftjxfnLcVzejicqihwnAQBj5FMvjMz3kpvtsHzPZeLkgxtKr777A6n",
  "key4": "535tpjQjHcozVjUBQSmFmYy9fzDUzbFMn3JU1TUAyCDda4BEMhmDEmfpvkwg6tZxKRS8A61Tovy2Kgu3Yt8Gouze",
  "key5": "3HfNo8xPbbSjNWgkfF7q3yorfiwVaokPywMzZu4LVFmRaVKdL6cf4RmhWd2bk9E4CByB2p3PDjeK7Gku5BSqjVRv",
  "key6": "4b3vBYkUGbzufgj3EkWvuGXftgxQ1rdwoDgxcNziboVBHBM8UD3QCkaA8CDGgnhv2S1ocHHyk5e8hhqtbXoQEskx",
  "key7": "61sZjuJtAgJPkvxoSXm8NtGnqP3P7FiiEFLRh1ntyGZbiwbFiZuyHCfxDJE2WV6HGg9taXDoKcZW88WpYjWmFjAz",
  "key8": "5dBgvpQVanFmLiBvGb99i2TSp3kj7UwxHF8yMhsELgXNKQVV1iAabsxwy8HJUiEgcgwstDEX2L1B9fivUizYEjp",
  "key9": "46ggcJt6sXivgi9z2p7h5ySAEpzmxr1Y4hdRwuvdC7TmHFenWx65vG1xu9Y7VAiwGmCFtRW5j66YCwHFAtaXmcBJ",
  "key10": "3g318HCcwdpiy4LhSNgUvtB17cV57QqqddQ1EQ12snCrDMiGqDhXCHVz9oLQVN8PrJ4NWMQyjuHZUs6TQw9kBKMV",
  "key11": "54kqUvJPWMiA2Vb2Pnw6FpUreZHcKVMiTGiFb2Cb3oeE7YLkY5s8dx7pCNqBZxjMb5np4vJLXijDM4ZR9vV8Fa5k",
  "key12": "4FeiCw2a8Zpm6TeBXs5eUJM9t13NBrnKJrck7FfHDoLy1N9VJTbW5P7EsHvFbFXc9STBNKTbP5F9joJ38PmqLpko",
  "key13": "5C1pKcRM3sVyQ4qK4Udbt9WdXpitKFYJCsbQnyQtFvF5344Ry2ivRP5LjD7oJ2wYY54g531tkD7x7v6HjtVNv4o",
  "key14": "2R5gQqCfVSXPREE5zEamMgPAG2AS6suiLXb5PeSmGhUj1ZwGfsSbtiDpjyUMcZp7KGMA9ay1FGzHT8iPjx4zzGQg",
  "key15": "YvCqHTJAEEKBNQnVa3Y1MxBHzm2CrbLqGqu3BcVZpehU4ThgfeGzX2L7JNrKe8scHF1eZc9XqiZvPDbdqW6VWZp",
  "key16": "2YKjLpLpkgpxotbuKcQQBFrP3iQw9tpEVmgXL82BWXLydiryLMC5kA7jiabwjhjS5gZv1qh9NPSS1vXkz7xniGdZ",
  "key17": "5bMWe2jqV6CPGoJYqpp5v8Cfkx5W7ExK7EBRwexCFr4vuiHNQFAvZ53GeoHsV7ALpfLBmYFGiLLEhq1k6diszTXx",
  "key18": "3JbB9jRax1LGa2E4yXQHjT6VeM3wJc6JtmczcyJFVFg5YUUF345MxKfzFU7ioMEGEuQzB8Urogzt7pxAWo75YbQi",
  "key19": "2sJgw4VkxxBCg9FF3mTg8xB6bcPDrghtLTGPddcBQqaX1zkYt2XnPdfRiDm5i5QLM4Xfz3qGNhUrQrBhEfu6jL73",
  "key20": "3JwVKXWkQYFGhKmGV28qfNFBLAyrPdmH2bTx1H1GwVpeoreCr6X9jxon4pALtWHPyJSLwaKLpvMbSYTdXSV7uKGT",
  "key21": "JLuNd8EQK92adWg341SWHf2V9aeMcunzJPdihDbdfrhowB6uPG2ji8XifxBkBcyfmgL1ZhPPGr7RKWQAED9zC82",
  "key22": "5ea1prGctJVyMxg2oTduAyw5sTadZAFUrKrNVy9jZhuQAsm9MbnTxJG1Pxjryj3xGXJ48FXsV8c4fv4KxbRqK3cC",
  "key23": "3GmXMJvmA266f4oUncB18gvbiaeg6uC44YNuMnhuMwFMdCQC2bep7aQb6bvsem5NBiqBwUZV3H5WQBBmigmW7DEU",
  "key24": "5gWkmVAiS5CYVS8fy9ungcsNMXnLpSWvfZ82yKDLPaRE5bnaTqoaoEgaEx3TqAnygKmCMSYuzGMRYANhbCYXbhu5",
  "key25": "7NjBaKehUWdiyyUYVL3RvTBFMMSF4QAYKwSAyDwUhenLPMHkK2Kp31gEagbmeYhUbaVwhEMoKbdfcKB2jZDDzEq",
  "key26": "GtWnF5P3MkkDr652YQh916bd5k3NoKFUQZVfNewkCKhi5UGCkww4ZAoXHi7MiyiVUW76j5Yo3GW1rGzN3hS1kss",
  "key27": "5ZykkZ4M4Jk5xCEruVoETctDze645XgxEk9s8vgbbm5wQJDBhNUit3nQVmRNdgmybhyNXNXGdT8JZBC2um4bouaR",
  "key28": "2ybHccWjkaxHLdH7KFDmGD3rAWJ4y59Axphy4vSvk8LmtQvtfV2LBCSNUj66aUqSJk947ewBxpKDcwgb1sSmyyrc",
  "key29": "5teq8tPAYsfD2pw3kbGQArxjqXYPJhH4hDdfALm2XiUgnPeox5Rjb9NCaQocNH1mjJ4ZW914JnuBK7jR6noeYZVi",
  "key30": "5DCu5WFyqiy26rXjehoZdRCa3fDoaZ49eX1LtHuwG5thQdtos9YxukzSYQiSCPQSRQGt8ra47jRBQTokY8GqZLNx",
  "key31": "238oxUtKf3CNobgnCo264omXzxuYbviU8mrugQWc3EMcJ9WkZkbkWKpmTs3CLJQ7B23iLp1dF2qLL7nryXM2Gd6r",
  "key32": "4x1rPdUnopnock5F4h5W2kXqCCNWqta5NFga9QqKPLB31YnVjJbrhv53prbER4V7Ytnt13qKkpYoAQ9dx8sHAjFn",
  "key33": "2UhWmpGn8ySA5sq6HeWRx9VcxFbXbw5LVBn4DVqHqtYQBur1QkgG9NM4VZBwA21ivtJJdxp6SQEhM1p9hEYEjfbG",
  "key34": "3NtwFHRCXdGb1RviDN6PjvdanWFwqTztip65tjd6PfEsAKQTAiSWuvmHYHNDXhty6SJoNBsstriVDE2zjgdoeNXf",
  "key35": "5bWKfjoAM8LgM8EPNwAnsRAVgNS5irzwWRt6sS21PR7t5rFGsdLobUYbvH8Y3xKeCn2bvpLkQ6sFKkac78KHBKvh",
  "key36": "4bQ44kJpERHafGts1cRbH3c9avGBn96UA7Vgzqy2DpVqDWXQchAU8qVVr3F3xm4LhyxwqCptxBAoMAbEPMYH4HRf",
  "key37": "4KX1Z46zecnFVFHCk6FTCyMckHHFtYCieddYc99rXHBtqtVUb9YJ4Z5uL2ZcVBkXaNQ9r8reGpgup8djx3qrxkym",
  "key38": "2vJ8EPpWR3ovmc8eZPCoKUJmLvUyHeLL7yP9AgsDobntA5druw2TQHNSWXjJf31ipCRHtCYVrJwcFmeofiTNYaGu",
  "key39": "53NMWL4jXt5PYw1k4XVwM6f9QeXUSccjdNVFsbzSUqh7tqCHJQ1ZMg1C5CWMmozAiHBeyz9hRr2eGytCjbZgj4Lh",
  "key40": "4btJa5MH4KbvfdueSCDg5rUz6hKsWXfx1mFsRtkg5xnfxCyEnSF4XUc8BGM9wYxndXVikJXJxCP6MPfpbpd8BpBZ",
  "key41": "2fVCD7Nf4SoM3pUzqkrqCd77cG6ig4vzuHxHMthsm98xev2BGySD2gGaHLXe51MTqphee7J4yUUWa1iiexbRQEQA",
  "key42": "otkkpFwtge4jqJzn1B9TdxPMuDZJSu861mYnN2nNeoQXatUemZHGHGt4EtCSrPoUMDXr2gCnjKLRes2hwxVRebV",
  "key43": "63szvoEP9939HBikuuP1mn1ugK77PiJwups69kwVGXYiuGmtYfu2PULuuunbihBFKfT52W12GVfW9uzTbAv9fD3X",
  "key44": "2fZJpe7g3Avcg47cBoNfoxBk7wHY9qeA9PpqinnA29VRgesTRVDNWyTcoS6wLbAfGq2h5U5whEfsfKKCCG1ANzkQ",
  "key45": "2Y4nwPdLE5FeKV8p6MJCJdLbJF8dgisf7zQQtyn4eiDeM2x5LGUbPsPy986DPbSHAVeRH9QCszLv8qCaDFwB7t2B",
  "key46": "3CPMHFf3QRkiaEaeVdCsQe9ZR4FsV14qL2ApXurwDuzTQBQifG4KaRhscuHmSncx5yan9JsSj97HWjWDpXTnTNqD",
  "key47": "5fd6729wgAfFzkApYgZmqyMe5WG15scKgRGNnD9tcZZe2UCcjEoBFzkVgr3B9s9HPB6T4WHYmCUKedrWEVcB9oEM"
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
