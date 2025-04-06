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
    "49snRHwQaDWXPEjre1hs8aw1kCLGoJhZ1UHWMWb63M8RikrMLYZRdrCTpZL5LWp9yCM5hKZhwSMPZJDfCfBLeyq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58A5d4Te7heNqQ3P1TmN1grScqZ1WLbN4ScDKSapAM3h2rKboMxbBqcTcW18ExXzdywgCDHCGf88p1beJ5NJk4zn",
  "key1": "4DwQAcQqPG6GdL9JHBowpFybojtraFVbpuEN1UadZ1NJXQbyBPEBJ2YRcgqM7SqLgiBYNrr1sbd6NQgdkZLqi81A",
  "key2": "2iDS67gRVJMjvebPPqbJfTZWjNjkdHhpS2urfe7MDxxNjceJEKCG4jz54WALZ4WbhBEVzZAhB2JPE3xqyU7oSi12",
  "key3": "48LE8svGJccS3ptqBuow5UEjNhpeBvTcS3xBDWWqbKR6NXp6YoX6qhtbDiZJoWSeDA2YawwK71KRcXm9zzupN3KL",
  "key4": "3bxBx3HyQbsaiCp3urCdM3oMbfzjirXUYr5CtoMmJPob4hp7z3viQFVRAVfEyrLNzPCJozk7RKEBHerGZjPQFSoH",
  "key5": "9TmZhRBLVpSo6qAEsBZfUzWd9gFURAvhqKfnYyGZJWvjPTgwS2hgw9gCnuBEJ3PnYbntCHUchzdKGoiwWPncdAs",
  "key6": "3wsAQUCwvtfj4HSnrCQ77y5U372xMPEcF6MMubfHkygrHsabGFsvffrjp6c7qPazmGeGjaQPcBGLEyfVRM4KtnEG",
  "key7": "3ZdrsLNuX1wjg87QUMJMbgnutJY21NkGRLRvCmG5qY161kr13wRqHfYTGVeUZUeVtx1UJKWu9i1UE7fVf2oGpsw9",
  "key8": "2zDTxX99RCPXBDiiKa353xupCKar2R8cSBzJmGn4fBirYWDNzUENwWQ6NnWM4NyZBJ3uhqHScp9A1xHt78x9ZN98",
  "key9": "5PHz8k38jG7y3erPk485gxwUrSXbNuhWGbXAZUxnRccBoHXqfPKPrCM7gABpBk2CXaRQ5xAWmWh2QKNPVdHZFdDk",
  "key10": "5RbenF6u1Fd439JztfkR3oER3sXqGnR3NguDtcMCyJfupBQP6MZD8mu8qQAmYYtBTfPsi6mSgNNwqjkQg2okPLHz",
  "key11": "5CuHSPXBwSMCp9XreRS8QYNSmTTPg4gCeeUdyp7gmgkKW4cqs3wzjnZvZQLZmbG7PHNuB3wDTL8Yu5SstjHNE62s",
  "key12": "57N2gVe4xAT9pd9UoxX8fSUzVvt59iFfjmsejSQa2gjd7FAhtcuvZVJ7KS5DsPJoKNvVBmokuNVv9Eb53nr1zuhG",
  "key13": "2oixyC6J2j91QHMMMYTToRjTvk9oZiT2sjDJv1MFBTCZZMeLBeQqbibLcK5CjNDvBSBupqCYmjccfvCgDmckS1jq",
  "key14": "9wL8f7Zpws2gobgcxZF9e79WDRJ1yL9wrzk6LjMjzKH7bWq7Wx7urR54AJTHzdnuZF65xU3VBcFGmkvYBmuvbNK",
  "key15": "4N12gwHUgzkdqbhjg2qbSqHDbCBYRbzwwBSYJdL9Q9SsTLQC6bCqVzBq58SZUWPELPjcNRbcRtBHWp7xkLFXCSVr",
  "key16": "GJ82t2LCSbTZQMhxAyPyZySxyRC1MJ11ZFjRStdpv94KzUXGbYStvawjQ1339MvFFQJF1YZAhW9smGoino8kzJK",
  "key17": "4zDhWdE4ZpGTKyUXzwd6YfLMGHeemLZrNv9WJZ12qZzi2FC2cWLPVnPZuzRaZJmMrKUSaCivxSGAL7ta1Ra3Gitk",
  "key18": "2hmRBwu7Wk76nVp1hyuWmtb4ndGbZUBYHeMyrEzUqzgiFHZTNTBQB7VBk7Hy3n7JZp7YYnW8kexL9etVJB2F1eDB",
  "key19": "4De3XzfUJjvnQWUcDaUXeSft1UzXiQz6wjPiSBg3upb7v1pn86JD3mvN3sWcbQ5yJFYT52p9SPbtvmnp4gHCt5sJ",
  "key20": "2NYn8Zc1ypKDGj2dPFhGL2AXJWVkGWcfEvZWjhQo4sz7UBmBL3kvLegchLAna9u1UUbhtygAmTiymbPYQ3SJSuGL",
  "key21": "3LSpHtGFu9NDzfkunUQWh6q4Z9bMscDk86zVoVfRUbVYtgsfdLEN8ohmUWaLowhvpdCbkJMYi97JzuFnSJC2fVNr",
  "key22": "2yvFEnb4WxjCGiBPoj7PUTCusMQYepJV5xowE96qdmziXH6bwzTE8iSgDUTc4EsktKt2tfWdpsaTEzoox3182iSH",
  "key23": "5ei9KcqUjwVFz8naMMrb96FAU1P9zy5bVKTA8qN28hEkjWJNcyrBvEUpZpUHH3Bh4V6oRHHaZg75XAhhh4V1oFLr",
  "key24": "3TjzBPxDTxkgYZcYr9uic1QNTwVBHFFZkvRJCfrMdaTdHFTBMq999LRuMN6HTM8qeaYeJNh7PCUDMd6UpczpMKwV",
  "key25": "5jcaCbR8dAWAnhvZFHR6Bkr3Nciatr6yV9ERhBtQKwPA8Q5FSDXJPcRxZNqMYyEQyiDwYwzdsKiA22tqzM2GteQ9",
  "key26": "2wShNSQzPiRNorasZoPTM48ZZiNczpe9CMWj8r6hfeogLv8YXqst3E6jFSkGi1R3n8d7N8b4Az7UqhbrbbN96sfj",
  "key27": "KUUvcZ3SCbiSx1AjEg1LSD1XjrzvbHc8nYcczT5aXHCJSRUvHuB8eEQ2vsrAk8GnNYF9CAu9UzjBUfgFUvzmiQe",
  "key28": "XcZVfNZtgr4BG8T2VakoAsbfBUzGZ6s87g5QV8R9zXRxfRBB4QPsDxP4dkuSUhcN4aGbtHv1ERsULVmNoPSqWxJ",
  "key29": "3j4HNm6EdJ2YHrGJRvD3zVrgMyU7oT8MVCrtRGkLbRECmDxhiBWS4McjZTNvaEbAU64z9kf6Bn8omukHVMKHRfzo",
  "key30": "2j8T5E7rVKey2QRmbi1pSmofsfohwumQywGsuN5u5PvbyJRg7ToVmzm3PahCPrmzmrBqvWMRzmejvnCkLLhq8nHm",
  "key31": "2NpAzHmTTSu5eGdwhJxS2D7gicjPjJ7soZTyzBSqDYEy5rLS6z7DmShTp2Dmj1E69FoYnhanCTcdc9yoJjNQLEtc",
  "key32": "MZPQNzaYg5XVqxMMdG4z1eaXmp2AsBxXZnvwYkMsCK6tE8E4nRKkbzYqxPdNqsnGvChfWUs6vRUVu2D5XJ7BUMZ",
  "key33": "3eMxyEQ7UXH13Z8FyRXqv8zB3ZJDnA48TYc287winGj2q31d4KHUKWZFHvGpSbCjLbGzTkmCTkwdDZLSycQjL5Ep",
  "key34": "3iVCh9TpFmFc4W3MVgPJvruvGuyKWG5onVZYYQhyNoYi1HSnc8JA1DbKeD7UGRJTask2DeDR2EUDp2kKgwfwJHyb",
  "key35": "2zPQ8VCdRdkSxGTgXy1uNWErjUJvxiNGXDjiMGqJjTxmjao1DqbEAmXRYWGYXwFJVmgfb8RA249VUD1VaNNUda5S",
  "key36": "56NNmKLxKTmp4FEnSNpBQn3V8dRRhQNXecou6m62zWUfYYkPHmRsGbGZ1hPBCXqZpyyuVN9piLwbxwKcQCNStVWW",
  "key37": "4GoePXspe55keUur9o4Lk5nNU7rH4jU4YSmYPGRTCAtQqEVT1Sh3MxwgBuDDAtBpTu2R6krC6hpPtrf4K3g5jV6D",
  "key38": "3RUK8Cidic2Fw7CBrAQoipHwkrxWWZSbtuQoHZNSNXXJ4x43w3M58asXJZebDNGefqhXeREbMEw1TTjnRCUkD8Uw",
  "key39": "2HFcprMKxnfD5DPkY44i6XgUdQAxb1nDCNz9SAnaR1w7xWq94CWBrByjWm5jjLivyUdQtnqA9CCJ1MPKJu5d2TJE",
  "key40": "2UsgarSrv4DTj58od1RaPR7Aa77vXNdNfqupzPQEHQ1Zw4sPNwf6VCnjY5imzA5zbmEEn6GE8QMtKWro4E85CJdx",
  "key41": "3toQCadVaCh2CFNueFELNutGhPNJTag8U15vQb9ZE85miVCjab9QbvRMRKMGCJfwR4uC9aD2FrsNtZTk7Hf9PDwc",
  "key42": "PRHCSsMij6dQRiFh7DDJpZz9DVURwMXwcy9oPTVWFJMX7v2vEjQ8DcXet87owEo5N7Fxvu1ceK9hVWpBbGitFTr",
  "key43": "3xXHPoRWTWTXqZygB8PkmfaqevU7ZESs9wP9WyR3DVWVBRxipHhwaun2J13KEgasKZM8J3HQwML2zmPG47rB2n9",
  "key44": "2HRRnKhZnxeEvkjxRHTUwVCsNDKHSJ2sneTmgzhineVyeeCc5iqn7TJUhKDUWQhcADGoeFAmWjnQG7Txwm3VfBH5",
  "key45": "p7csMW41wzh7f4cLwB2ZLBEvLai6ya4UiK3dctS7jP3JRSZGWg1ptzZ1pWo5DZqc5URJ57Q6LGEyoaEcWyUaKXz",
  "key46": "46dBR8oLAygyT8H5LdMFsSAPhsmmuRACQm8R4scAMG2B6z3vhT6gwR3WiA9vyTq7gApxRzygMykaK26JRi2hYuY1"
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
