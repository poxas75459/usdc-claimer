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
    "5FeaStJCcMVBiPQE6Hh26FB9Ys3gPTzqUsUs6msQ3Ppv7rgwXDj3U4NjDiPeWigfnsAH1XUVacCCSVYcmhfosucz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JaUjoboFSzyFsRGiYF9G1ivHgBsme1z2kGGbECR7ifMtppG1b9sJwTAh83quCbVt1ox8RmBbUJayFsieky6mV5a",
  "key1": "3rij8RP86RprYHYF2nR5SAjwZf2g7tc1ahqLVD7krpzypRcjfe6jNdatE8HToN466sew4ujqZ33SYmMFvs8Jsnte",
  "key2": "Qj1ZeZBtmXRimyxWvPj4urYZnHT2C9VQpcwExxCssCqgeygeCk3YFAAbKNRhMS1ktW8ZdgtPzZjSfzmzLvXSxYu",
  "key3": "23LB7rEKrKkEBimUkoFDYqJQoL28mxZ5UF7rZxnT3uMyx4SuXnXAkkD2YK2VEUhY6NyEKC7CxTyLusyf8Cogi6B7",
  "key4": "2iw8S98fUstFxUyfMNEqZEnZr73HCBJS8wHdMx1EKcqRiBohwYh63NBvrxqGyKikRFbz2uHrPNN7iLqaWv3hCLA",
  "key5": "pqxdz88eaPFq7SzDhDQw7m23R17Q8trJmq6Ax3oTG8vwRnQpQXpaeE6PYPERfQxE8mfgs4mabYU5NZELyh5L5fC",
  "key6": "Zd8se8Uin9YLsCmCJo4uM1MaC899vAMMwULuQiqFBNHRSCeft9KGdTbd4RxUudehExsXUyhxQVa1HQ7o8GToU65",
  "key7": "iAw8Ass9sifk8KeSZ7ZC91d3JkJoDGP8GYXnXQA3chEFNYyvoFHqJYiqsu5fyYsjckkVn99MMSNB8wJz85nwMw2",
  "key8": "5UdaaTjEhFMRZ1GDsprvWLFLjRSsbpGHbpC2yuD6o52D5rrt1o98RUbg9ox1xYpbMWRvE7nJc1wdQtuBjuJRnBS3",
  "key9": "QVBxKEcaYwWJCNnpBujosP6y7HoT3mESDGwVf2qMx7kq8hEq5VuQcNHJWEVnVESqpPD3kQHBFGGnezFDZefczDd",
  "key10": "3Nx3kTF8MKYtbHAFTpdr1jHuVGVrZdVzMdQwXxLUYMuVboFED5VTVqBL2X5jQC9LH6XZJUrhiHtbstVFtTg4Zh2W",
  "key11": "hivUa5jhmsNPcUEwUnvpeWSpE9pFn3UVNa7NrLDWgJwv5Wgaa1Y74g3tHYJBtexhQuHP5bzpTMyjW892Sn9bfNh",
  "key12": "2VJb6ozNviSoDtCQjGG17wowPyoqyRVzRZFXMgSQj93TwsyECmjUppoSbMwfdaBGFVrVzSLBG6Wt3uYwc1h58ZRa",
  "key13": "33ugFjuKrpzwNdniZrCa6hS2NpzrvsjVunsHzChyHE24F13Fj2qWvYjXW14Qa9mHVpqdsbMj4csEVVMqNUeWbj3J",
  "key14": "bG42NjjUoTKeE5S6YntRzSCdbRD946d4t4N3p5CiRyHJLBZZP7c8MbuLg6KKvaQGbXiic23tNkGaifkmRN4zQYu",
  "key15": "5TXDCXkiB6TeaWHMGJZdHpGXPrT2zFSBnLJN6ZGDtjPuBCLphyYXCTyGsKs2hRu8NcARaho5URVVrDkcuSgojeBe",
  "key16": "bHxpxhJyMEXyFu11NqaKif29WesM4KFt8wktzCsBCdh5kcCo2yuPZC44xJ9xnMd8UgTgYrYokjCKHyNzfB7PJAx",
  "key17": "3Ek38hvNrZfK3ii3WneQbiD2R9fMY8P6SmbzVNVzC8g2LC77qfCzV9dCdF1VKKEcygD4yFd626D3CFECV3G6i5YD",
  "key18": "4kitCqHBwbrjBiCkhNWjddbvvgb1n8yC8AxBJWwXKCPRqZ2z5tbUGFdT7d2kW8mWfpr7kTn1y22CWnL8Ryotw9gu",
  "key19": "4gARhgoFZrBbvxazTfqkuDajuU1MysSn1oCT39pKbmtJW3pL9L4VTQse8pXYGNVhReDwJy2a2PY7MnbNF8hfJayh",
  "key20": "mJTZt3M6Y7wCW1AqWXPxuHufGT7aZL2384zhKs66dCkRBf79wnLTcuWZ4TgqFg6krHU3PXDmGkJzRg4zR1riqcT",
  "key21": "2Jzn4e6U1Pjd5U7AJdMoGVoBfgcSStJpBY3rWPF8B55ZF52pEkwfJvBjjDTTLv26AVrEHJG775s2z3YPUFs3Xed5",
  "key22": "2gVACDKFa4mskamHDcV2D9bDqp6oG2gsH3JU1haDUnkTLZX16VowwvEBc7iUEhZtNzE4keDX16m9VoJcZMahnWBq",
  "key23": "3NcLkPdggFQeCvZoX5YBuwfyVBziencb3FgAGwj4EuCbXqhVR2F29d8xaVVriZm1k7hPuGxCRR5xYnPvd57VKWQd",
  "key24": "5or16VnREmFrytC4nZgQpSv46xGBm7CkFUeap22ZUZQyGHLgxKoWG5xwggewNaFgEZ7wFDMMzeFnWGJ4XYcbhtN",
  "key25": "5Y9sRdW2bW7yhh7TJmYQMJRhrnmjaEx2A8iLU9x38SrWDv7sCKnWtMBuWvdEA4CTeB3aBxP5tg7m2cWdbcRNPhLg",
  "key26": "xrGewaq5YEAS283z4xrxoEy344w8EmmM1y21TTHCeLU9PsHY8gqWkPVUEmXZKDEC2ZvNMQd96wX2XYPWdP7yvE8",
  "key27": "4a5dLVnhSNN3EExAYjZ1MghCMKHxS4vHPHcY1okHAwrsqzEhdzG83ujYofH61MhRcdKfiV97RwCMY9q4scw9Zq5D",
  "key28": "kk8e3pYWQeMQeftttNwaYCiGvytvrTKhLJcfrdi4DnBGk51KwAuSkxfztqiEMhEoTANrTzc3P7myeev4MQjkpVx",
  "key29": "3xqfHWcWMNvRpLZyo9xm3rAz1PRx1TeiYqqAeLuWRkhqHnfdDBR9KgyFPQdKf9a9bptGdPveJBThCPKuGkraKBxj",
  "key30": "2yuT2CiYAYyNCNDEavtLZDftfPwj7S3zWeRVN2S1kqsKURt2mhqb27jt9T9VbW94yX31DHHEKaq3bsNe4UGCGFj",
  "key31": "DZE3xeFX9G24EcQm8ZPsg4KJYWnb5U26fcfp1rJnaVDKK6jihFoZUpeKpqh8GDfhtLZbuy3Ui3osqCTufE4s1vM",
  "key32": "5yRF7Q8MrdgEeep8wydaficuV7hhW3EHGFB4Gea9XiTXBbVmBvJGFg7qHw3FhyDio3qTVnVCU2E6To2sWXgrDo9R",
  "key33": "5T5UA7SJor71c7nWr6HJDhZAVvboP8j44kv7vREZAdpPUow36w9CqLRrs4A1Qum9EY8fQuU3U8yZEm8P269yxAgB",
  "key34": "2E7awoyUmyvoEqCqBtUoGgsLDRrqczdHqwVXvryeMrwA1gVxysPqo1u7WwcXuAADQLSyzV7bAMBp6AtmPCkjj8HQ",
  "key35": "5yPS5xoTvXLtfuinf9WAFqdXdyND4ukQvAbUzHjvXjCBdGuvVJ4hKGEF83eSnfJuXpPFC4TfQvM9AbEyFgoYpN1a",
  "key36": "534UCZKDMTMbnsHqDih9Fpo6EgJisHXKUGzarCnwT9TVAadqrYnSZW9mrYS6jtBeS6f76bAWvcaEewV5oznN65V5",
  "key37": "4CtJU1gKhMZqhWsKkEHxsSncrwij2mK1XscoPhNp1cMg4mT2W7VZukS9T8MXDtgtKbrG3xepn8Gm3kY8Vd52FXKL",
  "key38": "5mHT2kEbxw2DLAJ2FsnUsHnPNbu6U7rfybbkkxJ1BueRQf994fHsRrjG7EzH5UKSrmBvnC1yXp1iMd39HJdELmL6",
  "key39": "65gjgpaYW2TCgQXV74CYVf6KqEKAikb95uYA54rpRDQ86gCH8bLk36uegUuuWXjWsTUhp6UD7ThaGnvqhjyL9jxR",
  "key40": "26iPSqBzxktvHEQF8jFxuGpXF2LidAH4edZbw5unLWh6Sjzgrv2arcS8d3aebjrTZEjD9WjZAwTetvZc1CWigTdY",
  "key41": "58EGjuXSxkUzbFs515kCJLNhYDhebLbgSPezNnRkbDMQK962dttq31wWkVBG5nETdkE7PAsjUngGQ41yGjrBwLYB"
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
