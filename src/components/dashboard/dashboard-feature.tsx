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
    "44JCmPD2Zxe1REVJqaBYEYJjAATJZtNu25NUnKkULZDbmhq4RAavq7bnrGxLgxr2tZNmngJzNqt8L778qZDWnhQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KW3UhhPE3YEMq2NAba7z7hMQ24e8X4SRQbJAACnPuHh9S3k4KBVDbRzc9vuqm36t4rfPCTVpPYpPYuKQQv2bWfx",
  "key1": "2WTkEwnSbvZE8fVmQ9cJMucNMq4iRWHK9QpKgrYEHEWRSvPTFVJmj2JWhgYM2uymcEngx7uHuaqvcJJCbkvWcVbC",
  "key2": "hkU21ddGmqGsFJBZjtT9zMf7YT9bmktqTKkVGuefhMDd4WTQKpGf8tYmHqQU9uwUP9CAekhDhbzFvyBtNsPjzd4",
  "key3": "wE13QVpE9Pd9bVaEfSThYGf79tpftPCBwkMJmAwZhQ4n8i4ZJVk9CP5dEeSzRDAFuQRHeKK2RmSVGtRTDtMXtT4",
  "key4": "3qr2ahwQv6miBfbUe4K5uRap6w934BW3MfeqpRMnqxTGAz8WXPBdEf2NZvBP8p2cQvE7Jpgv2YYiM2o4u2yh21U1",
  "key5": "2mCKn367ZAnw8mau6s86EzHKDmPwS7gRL1Mb3uDT9jffBBXi3cC1dmpKnFxhhuYpP4t7TYT8NPxs8zqeSJi7PdsL",
  "key6": "kH9egSQWi57f6XU4VWhGBMEzBLARZcRoBWJM2T9VBfa3DDLYy4QQsYRibAS7MgokvCSYt2U5CoTg6ybGRaqtTc1",
  "key7": "4E7T2fXifL7HHKxM4JzVYj77KhqFUxBgEy4Jp7FLUSNQSprRWYhj1CWz5Chkbmh1bp79C1wLZUBroAohqygyFr5Q",
  "key8": "4qMW1HxSfyzAGHhcxJJKXvxLHjFE5aWP7UvM7NHbyBPnABoBou7mAGEbJ4iNvhX1zjzxFiiXw9CeDTpSCFtPxtcE",
  "key9": "2rxBX41cDoFNPhz6g1aNng8KPywF6w4PJ4BhTVHeGZcBs6sGb4mXzDCvA6XqPZCH4k4JcyL1C6uxMc6d8jS77esR",
  "key10": "2tyeyZMAnWxtDyF9ZV77Uqm12PDHeJDRLaueahn3Kp11Va8UzXdtRv1DbTp9eX59jXkzf44qe2RNshrUyEjgoLsi",
  "key11": "zkGvWq7aDMRHx99jMHV6C9eeCWKRdQ2AnirvMnG1gNZDHwUdU3qzb1BqDYp4pTDNBr6aMDxfVi4aDBqFyQgA9Bu",
  "key12": "21cdkNng3SbC1agsCkc3X2V7cTWdKrxPyRbHASABBne1h1T4SuSsbQF5xsv1TrQKDQLWq98hzVkXy7wWUvQNciC1",
  "key13": "an5K8tHHGy8Pbtcb3k2FhmfWhvwhcHw8gh3h2Myto42fqaNiBAmpgCz2zipaK97hcQfeWHsV73LfB95d21Ygfpj",
  "key14": "2YfevbPMt93bzhuRDmCmPEQWEfoAjePeaB1RLABXFaTn7TePXWuc8WATyvaHqJEMuWBeTj85SuWQgmgqupG8peYo",
  "key15": "5A1Swp77RKhPJvnC3eFo47usjbanjdr8TjwB8MENPzwotLgkYHt6JN7ZVUCLCphw9SBVW3adXPVBVXrsryXvYpQf",
  "key16": "nHgyUKDrDgztcbyAGpey215LPgy5UwbityZbYSKTDnxmtZsQkCRgDVF4UkXLzt59JYeXcN8vbRRajQhDBjnv6rx",
  "key17": "r8QATtHS88zv3Kp4tNZtwKiGktQsKXnMGZjSB4TWH2wfEwuSCXzTFnobghnJn2HxibNjEeb8HZpSmsYUnaWkNyT",
  "key18": "4SVpsTAm36nkgwcQNoyV4QyQagCJVWhZJ4qEac4m1U5VheKyd1kR2bny2GPHCrC1i6nSjVD1T7vGovJwmxq8LAjZ",
  "key19": "5mqw858cKzoQQ9MmKo95obereMG1zh87hcEwX7Bif3Fx5y6oyEbndwMtGPXVrxfD47JW2Dv2FaMZTsURGAjqSBWK",
  "key20": "2vf1mG1kfxzqYizCW5FJjq4RXsyLXijYMHBGxqvLJUr8pcQvWLx5yTerREVaM4aZfFwZGP6uFnYpTxZTe8y8jRX5",
  "key21": "gr7k68Jpkhw23Kek1n4GCBrRECrkMyf3hbtPMtSMfL8oY68faQCHwvsgT9KGGsmrE5enJamfrg1LZtVE4acNwKo",
  "key22": "3LtaH2xjr68ddZj8r1Qsi7ZT7d8Ws16SpKZafX5to3b5r6w9q8nRwJjhvhwpCTKMogZWhDJ8CrQ7bWc7tyPHNmFF",
  "key23": "4diZmKBNM3cq7P2DDTahskBttJ3gj1i83URQTYiHiQyPzo7LfMGAxxp1kWunTbkkAde8GdD7F4jyHzBDpXxJdaDP",
  "key24": "2bn3aY1zb3J2voUYtsQNB4pNV63xETDtNzg7L9sv35XyEPey7KmD7HbfzHtJAzc4u2snr918SMLCrC4fQKsXdzgU",
  "key25": "gfyZ9x3EGf94Wz3EisjQS5gZEWbZqUdEQbD1ZS6RApiiFyVjsLLiT5AQuNpmqJhztPcXkcCYeZ2MNUQ3b7BGefR",
  "key26": "5GtnXZsZodd6L3i7cHmqfg5UA7uc6ku65TyN79uhc8fg8nvPnzdSeDoSf6ZWmyoNbLnzEUUcqTafLjdJfAygGLi1",
  "key27": "3HfJrfnL3QdZg3ZkCGeVPYKP9MtH5aB6vS7cRKPn1LfsuuJB4kw6d1cDepYb5Aqq8DQmLnQN547c7jSKZWS1Z43M",
  "key28": "2VSUxNWAGgg9WTJPZp5mY1n12NuhA2WoT2BpH211yzLKum3XpUhyHvcRCnpJsYnCFokj1344DDxeuvZpHSHzw6dC",
  "key29": "5eiDD3Y7TG5uy8ud7ZYjLkPivNT5mFxqmeaK4tgYcw8MErTRt8ByaRL6QJuAhUhoEPnD8fukVV6nEJ8ooXvMMzzG",
  "key30": "4o52P8LVAadH7gf5CvZaa2MR7Sri76f25ySLKnboMFHFRVsayrwW2cCjtCuK86pXKoprG4BtwDRqJFmqsQDCmQwE",
  "key31": "5Kqg5R8HLn1avY8EoXPyFngnsLk84Y6i9UrvUWeoQwjea1scjrVSFWJvALqRTM4agMgdGkHCLY7FhwL1cyh5viEr",
  "key32": "5SZjJuxh5zNphNL6oVteAW9nW6hKUs38poEQ6sAjKm7Psn78Vy4Vtv3KNcUCDroQ1TJvFegtAByadu8aJFUNVYMp",
  "key33": "676riJ6LiPuD4tmMHEAnawVmhgEM3CzYtD1vZLAcQovM492RqiKiuHZ4YpiUh8A1wBSgrT5vTYC4tixfe4mkWja9",
  "key34": "5GqxMVQdjAr1tzeKc76kHGBaGuMBreLNWp5ZaTAR3z2udDCh2A5ysCMBMeS2WSJKrQcJrg94DiiMajudnzY37zBm",
  "key35": "4fKbQwZ78rjkYAeuPBnvHpA7dvtcCaFLtkfH12TcmHTTTQKrhZtWrPFdc4njQr1rD6uLgTKzNZPiRf1mSF1s2y1L",
  "key36": "4V1Yaug5GULs4proWApJpG4UiYchmTDEqJqXFDiYVHMbzNBYaXMgkU4AjgYL4Fmbd1o2dXUVXFkksDLVrFanEqzY"
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
