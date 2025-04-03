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
    "vxDNx3ELwkw1HFpBq57LieUGiPM6M5gARu7WJqN5dYFVvPx2mpngVRAbfq1b5XS7HnVNJuXPDRnhe2uw17Lj5tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7XojZ4bq338z8gi9cRTg9TJYqPSkSnvxcit5iWSkeM9Lgewj7SSw7uCnZqkRy7YfYrLkEKfVRUx2DTfKxfT4Fc",
  "key1": "5trzXNySchJbfzRLm5h9P6iiCbtPSnUvCfdAvNbMtb7n7LP5zekSirBaFvjsNdJ1vKLwbvZm21Jo52i84oo1zLaV",
  "key2": "Z6W46UNq3njPZ1eWCMyyckcs1fQLq6YEUQ35uDzwddfQrrRWZGSYM9j8dUb4c24m3AGQSP72Xv73ZFi5hMSprUf",
  "key3": "5VuyKj9rgjGPsWWwm2PpGVCRScbqebxPp7bScLipqJxN7f6x8tm4soTAGMYXxTTAc9weREugqCjiDad7qZDTYF5M",
  "key4": "2Wyx7Yv4i9zAz4vYPh6Ztp3WPg3nsn3voP6u6euMHF82ZddhRPqwh87dcDd6J1LAjTWJ6KCF3j4Q2RCEYZkxrQzE",
  "key5": "5R9d18e1BxkTeE5Mnxw5ULcDG6Nym6zpK3mmyXZfBvHCUf1Rr2roCfVom139BtQpKzf1tZZZ7KZG4j323D5yRMXz",
  "key6": "3wLq97jx8YAgfN9Lz4FYMfGfxH4SnDuMj6X5xYjLFQwL7HJWhjEVrQcYdkdiWKhpUg2LG4eUrrLfTozhivy3bWvo",
  "key7": "5z5Dcyzm8mgJWNkRVsixbm3i4grtqp5RBozUMcvmsAGfMhKuwpPyMGiJmBcHiZRmVVgfjLLEvTrQFGq41V3Zmx9s",
  "key8": "sBbwod3BF9HHVaSnZbewFZYqz7M7i8BepAikURprBqcQHjf3TjBv5N5RnJMt62hxuuEpJq5Pm8sdgY2egSQM3u7",
  "key9": "49jbspZ9x3hUJTLd1NKWMy2kRbhsseNWXUdupeLCmzyyizwDye9bDQA4rZpw8TUhPZstpRMXWpu9FngFJSxbQVkY",
  "key10": "3BBCS3kjDXjePRWYNYQhDqPUhpXQa35KnBbUtrcBwbcnTGxATkqcwngWq6XG5AKYAv8RA5oYewbLFwiwmKBqHBx2",
  "key11": "2wMHcqtJPFdFzr5HXea4hWub77dRWtbrPcVd1Cik2P9xCJCLLNsTqLG3pLYNQD9PsPG6NPjEJxbpcd6TTuTKfYmn",
  "key12": "3hpioKkLwWDvmiwnPaFRKoQFRmhNNCsf59nKArQsWwVLwymQ4N5tyZzveyyTP1svpMd9VCb2wKCBA89WkDME6mN3",
  "key13": "5tRmakB3tjnVT6LQfoNP1HbchmgQrWyo8wyF2QtyHnnGec3HpfFcDiCmu9JKAqigbhMbxSZVHn5xb6EaCJ4Hw5vS",
  "key14": "3pZepA4FZ6PLknMpsTVK2mPgMKZJiafTKfTw4W36KxqoFcA1RU4DK3QVVYgZoDqVir8XdhemxxAwkVXXfhd8L3qi",
  "key15": "5Tp3AQWRsshxTiyuJnoQikvawKsCHus3C2SeSYwqmvUYmQePVzyTDhtuAvDm5pKMDc5iNLAWhL8gPeBY72Cbqcs8",
  "key16": "3hVKRsLbqUMSFm5dFEZVSonQ8Ne4jvJs2ckxjhsGuTUMGTuqCpH9ghDVxKgPPmRDKiSntFAfTz757gwQjr4qLgBu",
  "key17": "5yZiCJwdekVfJkakfonpgB9DZbDcs44WjSSAMPaJMno3XfgUx7QeD6j3xWDUbLbqPbBRLJiG9FzpK8iWyVQQTeLZ",
  "key18": "Bk8aqvwiPjtgfP8SrmkdeFCNKXxL2c3VWcbTNx3Wq59Vfss4Dv5vYYJpYFMDGAXnrceRQaGmj9rSSiuVPXN5VZF",
  "key19": "2PJ7E1DqxJb44DQrVXvtqzXJRiJ9KSuyaDj8kCMpVnXbubYC2BGtCuckci87x2VK8cwAwmimq1Jirzcu2zn5sEJg",
  "key20": "26Lav1X8fPuxAPGfhA8dgbx1Dzc7EXS5Q8hozc1YHPU3UhQf5VRtoashRBzk9hqDUNSMJ8RtGHNDaDovdUWdZ5NP",
  "key21": "2oAHTAJoqJx98ddbFtCbPz4HBUyYAX437i911ikNoXQid5eFVd1YpCk7T3LocYEaDXXyi7Ba6QXtWAvuLQUwBBRq",
  "key22": "2Sb7Qe841HhVt2RcdgWn6hBSeHVQF6GXEjnnQwBt7g6D8doXj8oKkoqicRAYzsLybhBC4PSssdbo2XU4Q1UjaiB6",
  "key23": "5wi1h5d49DU2YTPgQHBs8ZoQaK3UgS7nGHV37hGg8WrADKirEuPhqk2fDhzG5WDABBHHw6mcR4iqJphCunu3Nokm",
  "key24": "4eCwJD2nVfEdpKVmjan8c6Zvjgwh71rNY7NmxXAkhKcutD6ahNmJ3GdKz6iRENkWST3Qw1J6Zcrb3GHadSJfgWvs",
  "key25": "5DWXGBvPHBXdx26y1W6URv2AfcWgThkFKaLgFMeLBaoUXAyy29FQEYDmoZjzze3zx9VpCFbdjKDBA6xVYU8Ti14Y",
  "key26": "22nGoy5fYvQtvskF4ixYS2jjint74LXBdUpLfaYPfj8SdhVxEwtpEV9pgYjJxZyYLJcDd7gmPUJefGHp7nhpqDr8",
  "key27": "4nxGtgNRmyB36Bs3CAnBsbTpRXzZn7mAUJLNSy23ZLzgoMRuhsaGxdvju3LM6GpoU7NFkpknK1Eq7XY3ociwJQQ4",
  "key28": "nVeyFrtrebyqvR7QbkgWL8pXbvGwnHoVcWPa2kDwJthYWbZCCQdiU25YkU8vHLxgzybVo7Ky29GYRG8EPCrXKtA",
  "key29": "5bdVgG8AWJfZjzZMwAHEbbz7xe9eDWTSghMZN3nQnCKoUY7qKXRBeoCGKRvkrV5U8H8Kdg5SbXTbNsvHA8tPp248",
  "key30": "mtsJH95MFCGix86aAyDaKxYxhCzqdVyKWZHPhCz6QYqFJ8gB2rzo3wyFjKpLWVhGdQiQi3KaEv2hDaBSKmdbrK8",
  "key31": "4MS5KDiAwQdGf3c4EvPErKFji9UzE4VSG18NakUbR9migpiGga5D21NceEkxsLCnvEwaibue3EYm4qMkapsFHzAr",
  "key32": "5gyHCvYJRc1LLccJVywRCSnTTxns6UM8yzbNEDc8CNi4A3WZQ332oZ7K9zXaJpUfvqCoaEW1N3Jsd4NFcDFpw3d3",
  "key33": "3QJSFLcGVvCdMFMA4rrwrJpyQGUo1MPQxajBDi4968qFES7FMGaQVagWSZ5fmtyV8bnXp9DjWtx9NQAEFd5p9YZT",
  "key34": "3aR2jsHisX73zwEDEJSqgSBNgq6yL8Y5aZZD46Umx8trqn7rJKpreyX8xbpoJ75SmA9QMA7CVHPaimK8JXfjtqJR",
  "key35": "3bRGU63azqJd3ZscdGeEh4taW6URX1HvUtXMAozbLEfHERE8DKF3SDHPdFDEEk5KJ3sogQiL7DRWb47sDi2ZWnju",
  "key36": "3sPpzxYQYxeAAUrEjSSSkXGtcrnjrGH13YEFyGpgygsjisg5vrZ6BjCtWCcd9Z83HTwjM3zeu5PkD4JG5tfXDPt1",
  "key37": "3iaAzyaMYMjBSr6YB7eKxe5ScrYqm3tpUHzyBuLibh7MYisseJZqVRXvGcGNqnbtnnntnasQEHFf3kCNvyjkJWVQ",
  "key38": "3UohX6LRjUqd5jyaatQK2GscyjKsSuXokHxB7xKoZKJhSfWBkz5ngfDk5YbBbVsLGZqQTi2qkvCdkEQigMxU4Eix",
  "key39": "63hGFNm2Kn6nYobLcPNYpJf69J4BdJAxoDhqFyB9cQRjXGModkJWwnVG4Fn2S3ErdkXWYToVFPTXtFH1q55Lc1eM"
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
