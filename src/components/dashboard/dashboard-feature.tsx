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
    "Ay4mxVR8LnNfpgSH1Sj5zL63bTXntJcQPhNzTg2NzhNYtvXqXAuGrU44VeyxMZx3ucr9tNaruAxNSMNdezuqG6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H1eTQjbfKFoUJEoLhgw35aQRC57w6LuiQJg1SjNuj2g2qRMbWXNP3VFbAviDWcDBoyaNLMDCpGDCFvUsMr6NEGQ",
  "key1": "MM8kATHj7gxUKAiTwKNU7im2f8XUzAkY9NXs3Hx4Kt4KCnTXnZP7qhpd5NnC11XFCBpjqdXnaxijFa2dPUHJ5Xu",
  "key2": "4D9xQi6i6JKkot6Ax3aMQcoEvntf9t8JcFg7yUhSUEM7qwoUvVEtzNpu9nmgAmS6X6RBv23vN9EBX1m9yJxQmsqp",
  "key3": "3Et1NdijQ3s72LLbst38YwsLfbJxFs4XoikobgRgiZ4KdYpWyrKX32nci9ESSRuggoB4aNwXNXbDAShRxKX34a7t",
  "key4": "4p8ovxkZN86ZNd2wQPKwRizXDyBfbvraLEX19hUaaJPcrxHSrhrUGuaBEg89xS7xaXGwSEZNoSvhAC1Z6tu6BCvH",
  "key5": "5sJNdqGRzKQCmX1GL5NetLLSyWR6SZod1nooUWRLjXWFu9X8WgKYi6a1EgF7vvgUfY5fq19FtNY9BPn6XK4dCdGr",
  "key6": "mbPz4bXDJuzWKpsTZvjcGMy2pxtpvjH96x8u4tYYEKu4zDhsF6GEDYeyePqj9eQr9xDUPEfgPDFsTMDtWF87q62",
  "key7": "55kfu2sM3s5w9vXw7YicKi9eqDgEwLeoECz5b3YNkifgRWrh6aDnytCpewkPXe19j1cpXiJNk4H1cNurvuCShdxC",
  "key8": "3g98WqR1fYDUfG5xFoeTrxegVBfb8px6GicbjWeebhAMrK91fKVHhPCgGGn6yog73d6npWWwWSNYo6MbKFAHmqge",
  "key9": "unnkefnyb9pqM8BPxjCRHMZxoKH97vFsk2XBQZcN9bDmwV24UXgspfDdAAzAKbgQKMpj7rVo4JNXwvLfhr6KiWG",
  "key10": "64ofdQh9bSrUNHFSzbcL7QQxnEutf17MTPgrMGNWP2CViYBQ5vwsx7ySWxm8GzVrSMhwyCEo4mq6yHQJdxWAy7Ua",
  "key11": "aBXEG3RCvjx7SyDeHcyUeZbXgxPWZeqJwVGTyP77BDe6xtAosai2fTkxYUB5pT9TVYuVpXa3Bq3Kd9fuGtihcJn",
  "key12": "3Wz7Mw9C2WRKVDnrM18TvuvDRVEZ9sMoYLWF2SDBsMMh577wtpxZfcaDiVDd29Umava1RqUWP5gXWxHexg8JEUBV",
  "key13": "59JwR4rPoQCqxh21BXrCNngkknMWhFUz3g8aHWuwXvG3NvbEoiibFqN9vzooB5DeRRx4REfWFJUzNHi1NVKBjwZB",
  "key14": "2zi7kCLo93oRNeSpEa7GVmzVB5BZnFh8Hqwf5L2JXUTkJTaYaJEg8KwhHGm23peowxBiYJGtnfSChKG7Qs4j8oTp",
  "key15": "5zoNsey3dsNtGn8dJxJpWGhaKXVLp1NobHUKVZhVjWriJSQrWScAtFCbno8SMr63jX8yQJtuZ3UxMoPNJFqqU7XT",
  "key16": "4DbQi4ajfoSjD5ZzYKjeV15LPVH1TMTXxJhh1nPKRHptps9BtEAjPd4PRVQ5YRrumJF4sUUzEs2NnE8ABwyZcbcm",
  "key17": "5py5FUEP9kxUa8LHvoNeNW3u6nfjZze9V18Ey8nH4Ge4oaR2o4pfSXkezQ5Vvxenhx9ioeJNAMY11S6NercicLT",
  "key18": "hrMXdhWYwLaHp2FJ3GHwz14mTxhzWjwhGM4s7SoXpWTLg96KJFKp1Z7KskUXBEwbMZHrprRHef3ukGW9AFwiQxL",
  "key19": "2c6UmmcBZ6Qv2bS1AHbjbNzLzCbcvLeAGXTTpYxCpoEb32fuvASfN7URCxHjC2kJEmk83zVasvQojyYtzs1nAEVo",
  "key20": "2XHZM2MD4pxckYbNcJCABST9Qqi2ki3nhaUgv4T8URep8K5hb48vJdMxXo5bFdnUA4De7rE78H7qtrqs7sv6tqvA",
  "key21": "7p1WfmwfpuuJxyz1pDSkewcV1k3exobyprzUbvCxcY9s3oTAC1aMtPnfKy5JHH6BBjsXMLZfbAQKdqQoNrLHbGn",
  "key22": "4GgAWHXcni7nQjma9QAPZUTKEVr2zQpwym7ZPPVc1tUjrwn5XfDR7y2fBhidxA77NgqNeGUSWkfkGRTikam7UPV9",
  "key23": "2vcaVkBNbuTdM88umMfrNSXGq2UFdonDPs9BKyAHVQiokzYbWhCy1Vbwgbx1NMUtsjYcxZVc76aiD4RAWJMWT9BZ",
  "key24": "4YATa1TJceKYRR3uWRcoMz3rn7ycuuBHhFkM8UQUZ613n9PnVaKfCUuC9YYuxf4hsRXfaUtmBXxiTfRvcxwSWD43",
  "key25": "2MgMzPwY15ZTgBvRG9xjHoGdw1tdiQMbeo7iSNZMBtACdwYUDxkWDHuWjp4baURKcEHeZGYrLHWpQx5oC35Esj7X",
  "key26": "59d99b5YhLoCRKpiPZgUdbfBWi6YDN71swWEhNU9ciCVKWeS9AfRPb9CfTPivR28q4uzsQYbA9Tv7jbVa43sLd1C",
  "key27": "SNf4PzkU5jPnoBJ3BTN5DNsvow1KrQxkZnZUe8eDPVYM7BPjr3hnuY2PYUTu5Uw2qQebvsBN1mz2SVY2CdD1TzH",
  "key28": "63ptyYTPN5t4ZHAzYSzDUZrYKZs14Ffk2zbYhfuTjPdUd1eqi2kkkKQURUdb1PTQuyeShVmLzhSLvc3vWotrmjDU",
  "key29": "3AqUD4RsQKy5Ni8bd6V5JMRN3f7YeTPgRE26RKf7kc7EH2Ru3ufpGabC8sZt5HX85vso445vF1NvvMpHaJxt72C5",
  "key30": "4Zb4XbjbW7ACLbFoFhekKL8VQMV9LFKuVgoWKxEjoqB5wybcVssLYgbWKJoWu8zd1uvk5uPjNYptQ2UPgeHzr2FV",
  "key31": "29d4v9sRzZoeeGGnYzPJp6brR6HsyxcoxWWBdhpqumgg43LkKSi4P8PwGGx81uUR4QJcFN4mPpDj37MB3iPcEf2m",
  "key32": "wxC729RjAxGpm4vz8a9P7aUSZPrs6kyw6dEJV8Mnf61M1WmQaj15rtesPi2DmJ3cLHKgvDJeDQuiBU1f7Lwxyf5",
  "key33": "4HuKLB83BDHvmCC9Atku9i94dPYgfd9opKSqN9cBaEdcZvooJrNz8iNV9yhWnqLRGkZiHj8AG6eBj1qks1MRL6Xm",
  "key34": "4NE3RUBytPFTPxfo2h31fmECmKZbqdvnAy1tY67R6N41oXue6kyahWqq15GqABC4vcF5gfwcWQNnTWaZj5xyCF8r",
  "key35": "3NyNEpiUMEYEHFnTzamjsiuzaRTRy6UBv5F1vzoThNGH3GbuSUmcxbkMqPmFoW4guJV3m8DzNkuyrCRRqvymS7zY",
  "key36": "5BAMXNirrBwAvF35MtF2Zi1eRrviVEhAQaK7ex2R7LH5Xjknco8x9hFsDeq7fjY7H9jwkGzvPynbPkYqwtGHAV94",
  "key37": "4B6geFie4cBE2atuY5yfqyJHBLS4V9TCSxZsa74aQPUYwpb4REjnuzb2qmbnThxizuUDG6XnKqeM5YgyXh5CqJS4",
  "key38": "2uyp7szskpntgVedBYhFu5Hahfo17SJQ1XxFf2asHmGjJpeg5d9YXbHQbffV192XbzMVJgQ6xnxyULdCuSZpDhQk"
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
