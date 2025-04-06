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
    "2HwgZWmsviggCy4QwGxxaNKMJ2JSPSgZDmQz6YDd7856qYPg4hSfmQNQ99WrcPw7ADLRX3JRoXgDfWcGQaomgvqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kiB8rVNgExwmUGiHqDvi3xeVCgqdmrRbPQUin3vKXaX39qyxbrEETy9t2fjLeUXe2a1cCRUp9zLgTbUmWk4s5aW",
  "key1": "4BLK7ekGwyvVcqvJ5z5oGPz892KzLTvsUoQA4UR6vQeQ9o4zapa88eVaPfohNux7W2YLgFSK7VWWjKWNrJT25BiW",
  "key2": "M6VzyWNEYgk9wJ9nmPoxEvzqEYcsQ48hTxLR8TcXsTQ1ZqRLEpYBsX4zgdHbEM7iBUT3CDNZJ2oztshykrFm2hD",
  "key3": "oCuNEG35TempCwomWhX2amkrfdGAps7hCbAeF56WxzZQ9B3drTDhqWLGTTknVV4cekmAggzNsLHCHjZ1hYYxmmp",
  "key4": "45yg5FrNzLzGn53hLzwJnuFwdM5gxvnXtSqzPQ6NghyG8vJ7Ufsryd7PESS4gbdzCJbH9zwo8U2K5RhCchnZpvtd",
  "key5": "3Nsgwi4FrKtEngMzWgdt1tJHk5dyU8yxd3CDtQp6hVLbWcdbvmxBVp7nnpobELifk8MmRN9rn5nvztGN5N1fcY17",
  "key6": "5mjgH9jK9dq3bzxY8pZuKZXiwbvQnN7fwr6Y3zqmfvrWfjSsoTPbMFHypMpr8TgcuFFYEvpkjHUr2k6kpYApKtat",
  "key7": "4JFLMK2KchwGHQiLgLjvX1uzGAUvhN3K3nrrNcg8TMcLuh6vsRtqoxR1YfEMbgx4A8kZdLLC1qV2nDXZaFzJTmT2",
  "key8": "4Q5iwyBeTgLbR1VHqkt6bW2VKeogYbWb9bt7Ud1REr5LAsHZfe82YBVnAVZHX6amc7EoaL6XkkVubfGgXzAusUL8",
  "key9": "2eCmk5UMTmWtWGN9ZTTEpMw6dGYqcnjFNJUhsQ6cwH5FNhX7C2sShf2iW3orRdsrM3QnSXqSGoL9HNWwdh4xwqKw",
  "key10": "5CDAqjYWiWhSZH265M66iknWbSjHJ8y1GL4WzXtQewuCCRKuphZpNp6JYyHodVeVnnETaTjhYtyjKpBHdiRuxiAy",
  "key11": "4UstL7wa87KHEANSS5SihH7CaLKu9rhWdgf3rmroXttiHuoNM9PKH2BgiPFLqMENHP4bpJrSSoMRUpueDvgg3bsb",
  "key12": "3JSo6XnceCJVNHtZW69rdqn2HmsneJK9EW88GbgazwNBn1qythWqpexvJ4XRDJULS5X76Jjg2ZSoU2wdSCVVk5os",
  "key13": "2iob2GsPjnBg5qWnK91hmxYKQULDN3dzFYK2JQN2FwniokPpKTUuUYWPx3TMeoeQ1Z5QBZdWyRGk2FKrvkh6u6E8",
  "key14": "126ES9GVfL4XCrgNfuvCibSYTdyWJNyh5AMQm5knNmtmmyqafNjSga14HrqmZJyVgu2LYayCQnyDGNF7JJwDNtvG",
  "key15": "5qCmT8pNCNu65V1zZCTYTxHgXHXAe8Mp4FJAL413whp32ABpUXJcjC9Yif9PkdNofDKfn9FfrDYKoXiEyHMdDPT",
  "key16": "cXwi5TaAngGugnP2ec3yjNhLqMuimEwZqfA1NhAtXYuhyN3VLFW1NcTyJNzxKPq9ofG1sKYqG1L5So8uyfpCLMR",
  "key17": "41Xstg6DawiY5tgbR7JJFpvXfPvSw7v9iynAJo8urm9ezJAVLrD3DYttnWvRRzaMrvLjvbCudvFKfVpCp2DbnCjn",
  "key18": "2zJMpfw1shrdMH7ZVQzSutmsT6Mhqvbhyad5FkrQvmjCrwENKQyJq9xs2LPFXHBSSLxWk2FJZz5YzBNadUhYYwZZ",
  "key19": "2NNF8WB6MVqiDjz7NocX4MK6UyvBHdUYUBKk4kDyCFoZcPD4q7nKdcAgCbsRyeSVk1Le56a71LjJtSanUU2y8M1y",
  "key20": "5grTgpXXynJeGJTQwE5PNLvSQjziaDLVATEr3fJCpBeyv94kvUaA2CHfvnSDfBRzouHoMDk92kkJPBs7TZPSy4mx",
  "key21": "4W2BS8qPQD7ZzaZYvu8QquWxd8Hh3aTVHy1zwswzu6g2jQof3V72Zsm1gjPnbAwetb5uXSG1uaw7y26SndaoPKyM",
  "key22": "2AoracMdtWsDcuW7wqTMr1dbp5U4XZyyZuBBRXYmpwbMX9mAp6t8J7KNqkFE4obMkEArp5krYDqWMw6jP2YfVL3X",
  "key23": "2Bc8MipjKwMx2getX8YvLEAvj11yj5gW8d8f4iQ9reFjee592Ehp6dHroxGMUDS81dtno9rtxyNh1q2HkXTZvuxV",
  "key24": "Gmh64Wuy4C79nVcd27QU6TVw98WMbzzoDjQAFNgPsvRzpe73HoPTKKrQQ3uGepeUuX5v9CUyesPh3Jf2V2CJZJg",
  "key25": "4mJqpShhCuuEgx9JkgpcoZNiUncoaXjTDJRbJiFD9GKtaEPtpsRpK5kGpJEqCBfhdThus3evCZg1Pv8NRzHXkHhq",
  "key26": "5LvWd3ZWWY6xrgha2BRqiW5enx6n6yDSdTmnQcMDKWmxr8KoiZ61C6YfsC4eHHVPkvoK7bGuA2KcjSusn1Xh3CT3",
  "key27": "4Z7MknPPgY53QZXmEmkprBvH6hDChFVAemEd3d8dcn8JCEKR9b1ffw9e1SJXXt1DG5JLgEHAuX4ejtLVTkFdh1Pd",
  "key28": "3GCnwzXDdRV5mL9TSCz45HLzCDd6Wnk97Vm3sepMrqjwnSpsySuQTRzJFnCbd54LFLx4Sm6rPMDo36u7hZvK1Gda",
  "key29": "54CrobXm2yTi29kAsHg3TCfENuV6WNcXr32Lbp1SchdaKboVjPjx5fCmJvCGpgeuuyvEX6bDnuBYx5xu6z48ydER",
  "key30": "4wfGzUHfvwbJK46mvbYukpp6gxAkjBTqJcMmimcw9L9LcqjrBEFZcTRzXiYGXC3Sy8uFPGKRPH3Nrm41oKDLjTP9",
  "key31": "56ojLyJ45Pg8K8C4ZW3n5R1pB1R9kHjUP6wtYeP5HpyTVkj9YyF5VZt7RJbPdWbuUVzdG869gyDqMvwc2AxLvYbf",
  "key32": "4Q9ococ5jxGJMJqWD58DBWk9xZkVjjd8jPTx9mkWdPrZF7ab93eps5qXFXiYszTwSXbb1T74kQ8prdcArVkmQ2wT",
  "key33": "3cn3xRZUA5byPb5C1rvMmF5BnfbN2rnAEAaHqNVusCEcW7jbTDh3jDSXvjvn3WKDwS6Pzns8NSiTrR6BQb1fxBbY",
  "key34": "5QvU8nqYAeMt5Wu6efzNxSyT2H12RWhSs4v31Qb3qhZwnv8BF61k6H2br9f4uT57hKpoEeEtsA7vTLZzVyTCzaWE",
  "key35": "54AJ8fqEoe7o6wHXmhdnSX41eug3iqSPJBYb55YZkh5evgGNM74xg6JEJNCqJmrA6zJgUUWPdei4XgZ4w3w6fb6m",
  "key36": "5bQQXLDyFKp6GxYobTc9V66ETrawP7ygr1ysimBpfm11ANJyUycaw1JtCqJsXv246iuzj3UmueZCm5DyujVA7ehh",
  "key37": "2mzUu6xCLpqhBcmPaPE1ruHAnp4CPSAhg3BzrW1v7vrfic9onGztqequwWVohBYtaGzwzZH9eRFZ261onfzysRKv",
  "key38": "38H7BrRaFxRwFazSjaK7abKkZuw8Z9xaY3gpCdL7q7VBLkT9UGpVmSB29kDrfp2RUL3Uk66y49aUPFxmz3CXghy",
  "key39": "2kMocxUrBvZ5Yrgu6e3qMbQsfr3CBKEYh837mCV65mFfREvqKtcRLJeLU9NLUz5MvFVZu5EHPSgsxMaQJZzMBjqr",
  "key40": "QHjP3MBoosyLRhDSYcRUsMAa6r8eWJnbkXfm6qUjm1smkFRjTUTBuT4iEg2PRUkQSNyy2xDDiBMx7MtfxzsuDSC",
  "key41": "3pq7BN5Ap3c3txYfuJdx4LhEToAkoTczqmrCRYkuVp4HZKBjDTH1ZvHQC742YETE1GGenbmMdXPJcjTabnZmQFjJ",
  "key42": "2YAxkjD1CfkQj9DKMVFzy84VFRkFvMWw13WDcdAot895hMoqNNWFsfoKtBWNGVYuFZEuocEZH48ybxtLRP5PEGYF"
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
