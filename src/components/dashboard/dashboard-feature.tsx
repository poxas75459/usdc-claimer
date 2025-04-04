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
    "5Jp9u2L4uQQiKGiCWFYBkmjSzurbguxkHDx9RQuArZUHsZVuKhHmbxzju8aPttsizZAfjrdquJVNp3nHMiSueM4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VsG6AjJxVvbMwaAGeMWQTGRBLEo7DYGH7fzz5yXrM4YdPQCPEqnXWjjYuaekVCbanuV3XPbgbsL5Vw3MHBZ9T2a",
  "key1": "65umCgu2Cw4BztPnym4TrDhUnCGuHnwL71AWpfN2PxEfGJWT5sgf3HrrwjevYR7zeeKJPy6omA9Cdvt9ZmyFPYje",
  "key2": "2R1kD9phDx18Mbu2uttvdhx1NsHcK91fBY82SDCv3KFAHp1nYgJUQ2Hk1MiNHx1XTuA7jKDvsFrdovmGPif32s14",
  "key3": "aHdWrcK3vqzmPjV6tzD3rvyT1Z2c6Y7JKZM7ZZPwXf4gmYtfjNqTgTwLDoBpMnQekUbr4RXTj4KL5jgEJiApZRG",
  "key4": "4nM87A7s7Enk2Eg4hcfR9veaNSLUPTpSWkaWQR8VETa2EvQsuwJ8kG38wHms48XAoC8YZZpVRfitpz5gMsacAEQV",
  "key5": "5CBB4UXR29x1URE177Gk9HeUx7GNc2GjUrxC2Zqg1a8PPE2fqY1C6bUDLEf3ZGCDdNyj5YuVpxpXPK817nr8S5hZ",
  "key6": "5AJVCUfMymKJX3NXaJdbLo4PpHCGBNGQ8mDF8ofRVT3BofUXnk1RDK6bGSokQmoQFA7gNHh7BoxphMzDwG9pV8A7",
  "key7": "epENeshhUac8rhEordtBpnqTua5DLfUNi5ZJBihh1YD3XGXc3DnWGXXKfgQvKWmp1PzBHzsUdyEQ2jqUeLavEoy",
  "key8": "2PEwspKRdTG3nFPjN9AQzzmFFtQUAts98UE8hJyRNSuZKRt4srFzcqTrzZpuGbthUZUrsZRkj7nsawUkaKGwkqrC",
  "key9": "3UXRQFZ9yDbD6ZFFr78hSnCFwZUcb6NSjj3Vzsj7XoespPTxBGumhuGt3gJCFexRf5FYdJz4rVc2Gd4gd4khArVA",
  "key10": "5WUzDxnDPvPcocv5ohBp4P7yATNQmKAEmqcfRCqA74RTqHoFN4BeD7CQeWVXChbAuheKFJoH8dfeeVoDRkaYY4Ha",
  "key11": "3MGDMvkpgN1Hamj4ogcoVvpxkVfM6L7EtRGgPuB24igKfim69ohPRZntAEKqhAAPmkt85sdZL8dFkCSYLPULnH3L",
  "key12": "2f4zLyFsPfjkV6cMDHqfBkGyT5YiEsYGNxoVG5joYySEHCp21kme7cqRhTWvjg4AcpsiqeBJhKqcLpscHbEdYEmW",
  "key13": "XXG6VtG5CsrwuikvZjbREKi69psHSQyDxMR2XEwPQq1cncdbooFA781RmH6XwdU81hxbvjaLFPDyGk77jjJz9cz",
  "key14": "UkT91eDp7ErE6AvLBvXSbHMBa5az8Grk5WZPFjePTX3GAqt2vE91FRSmoWVUXfSxdakLVXbHkN4S6QcMhPmxoMa",
  "key15": "3mdM8VGzW48cMM88pHVZnyXHJ4Zne2sBkJjjE76i3cQXPUvthikcgopPPSPrC6RYwNiNdHxfgY8T74ebkXkmZqWe",
  "key16": "5yfM1aoRCkY8SjNRaELtEvAihVBNNAY3tByBz24JpMib8Bnaebc5JZkykwDYuhETcZrurjonCpBiX7yR39aWhkw9",
  "key17": "2fd57iBM1f4XvG9s7d3VStEMeUyrmUdaP6J6vMFRRWCRPsmd7bbWY6DCudJH8HPQCoH5XjPqd7bnnTuGzcQMhpMY",
  "key18": "fbPq1eRH75gYeBRVZZ9BjCb4wptZSCCKwUnTbaznbKZ8eSrSFQguJNJNEKDqjU3bPk7gdXGB6AQKpvEPdfywSuK",
  "key19": "16SkLsQQDy2n1Gy8vKeAyxXr32CjfiEFxZ7EEnHM9LkU8TwKPjbY6DkHLyEgzXhjXCTbXXBeCyrCtBtqcDcPU4c",
  "key20": "5Vh2HPXH9eAzfJ2HR4sicrEkKn5M7oYeSE87GGqky9FaGUC2m8Bs2dKiF3Whsd8EmyCZmASygikuj6qAUp8uGKVb",
  "key21": "3SFr8cdTfJdiadG2qWmrutedtBjRKnwCDhp73aF64npjXA4bXE8nSDikjJVjETjR5tFDyzZUfQRkmzgEcvPk5YJ",
  "key22": "LBaeQVyU9q6i3Uy4Qx83RBfFhnQUWpRaZWB1psZ8gKg7TffA5pEyaZdbcxojePern7TFtFqAq4XZYg3WZKBZMxM",
  "key23": "3R2MHxTe7JVMZhWjQUPS92u3ZM28qhLAMHZu5vaMzFZZ3CYtyjPbyt29WGprnJiF9utDwrkEbpjj4XEXGVK5sh4c",
  "key24": "3ACXp1FcE5gTtj2sJXSTSmjAdnCGdyZAM1gDbpQvfGjvMKMgUNzA6EAszmrQ1Cj1mrzG49bUYzZTVoQH2cnyaw77",
  "key25": "3ehPCoiMRbZDjQDyXRmTMAkg978xnZsyLKNC6dmmxppvCogUUEbr1AjYRSo9Dm2VzExBoqSdGvaW9yJ6wLgtng86",
  "key26": "5p3fwEwXNvvfLkKjGP7Bkd6vZx48sBBDmNu1E5KtamMJLzwrxESzM4EX8Yn2UDU5fxQpgkaSkcYGj76FcL6GJeYx",
  "key27": "56Amvw4HeyEeX68vk8jaQxcNJ3e6wwSbCM8azyREupVbPrCvRqfcy98SRj9m2KTRSXaBQnb2b1P53zqGqFXdeZZF",
  "key28": "5mqD5zDjTnSoU3E8M59eM3hVG7YHaWQ6Lmq933mJtqqYQs7vh6YwGHfkxoakJutuwCxxnotfmWDCvfMsBf9H9tHa",
  "key29": "2Ns4xenJaeJqS2jqJok4VuuiuEgD9LNRzGsfR1hPR8pedJS1fkTxyxcsmvkFUNN1yGJCnuwDeBxxEQrbDKHH8h4U",
  "key30": "WsTmkUcC1GH62Co4Ns6RG1oATNHtY5oZ2a19e3ctuz62Tife6S4v788xBiTgjxR6BCycwoCN3ACMpPPicY1sBZd",
  "key31": "3WMbM7AYQ8rKNgRmP7jK4VPZPFio5UUasPMQgjvR9NmwhfM4Jc6mpZEYvY3b8kePXbiFqFubDqh5HmhPyEBnLHNa",
  "key32": "3NtSSTxFKjVZVUkZFnWimgRsANC9JyibiTRqKSMsjYUxkN5MgdGJpoaRY6ZqMBaTFZ1LVbpPXux86Ex3gFUziuw9",
  "key33": "vmfNUkPD3xeygMPMgFBQ45JSoHdvmPX92n746EEzjx61fjE91kqNX9a6DhiXTzshAjNsbajEHbXuUU24bvvwg6E",
  "key34": "hkmPnxA315ijJiHjoU8uH6W5mY5hL4QjG2e2LoMj7KKhkjaUqoCiypb9X92Z56aSkQ1sQv5oeURoNBoCP3QGk9o",
  "key35": "4e1CDqbthHGWFfPwMsoMKfciAqqnByUUoMmQyozfmxfWozfoJkH6TKT4hLS1tEojLEMjzR9GPfXb67xy9B1618rn",
  "key36": "2u3DBSd5y7rsvwwySgCnhwYg9649NLSLVZnGj48dvwE1XonptKgVZrEUeaYoHp1mPKi61FuVpNtgijKpjjDUfPU",
  "key37": "2oRRqY9xxUV5f343zKmhZbamYJ9p1vXaAysh1tJKK6BcGHy9jnR6B9KEYEbzn5SJCkhB1Lx3UvWZaoQssYjRW5uB",
  "key38": "3CZGTAj3YmQ8VUZco2DDF84K7QQhE823xdGJHu88ZMQS3pKBSaEjg1wXxJK3kGCpZNsfc4e1WAEpupB1jspwiTUQ",
  "key39": "3ZNiJxGrWmQ9TqzJ5z6LiSyENxWDkE6yPiDryvbaWe6ykrooKUNwfoXRBmA2dH5qoNeYxe55AWCpRyQKw9voeDuZ",
  "key40": "BDrCjYzuWL7Qca4G5zL1J7toaUTQpdEUvA4jzEzvxVvW4wHigvp1AhYHEvYBkTjASAQNsyTD4QwbiT38uHJjbxt",
  "key41": "KSK5fr6CS1nE1DfVa2RGifJCCXPZfdZcqhc3yq7zGzrXJdpyKXWwaJdUqQJ6NgGJUhsvJEHrJEf5KZxWn9ZSUbS"
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
