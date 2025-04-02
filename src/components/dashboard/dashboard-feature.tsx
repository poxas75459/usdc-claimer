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
    "YVGFfK2q97CyZudoUyZHxYhKwUhFdmhsTCQSBCP7ty8sNdupUU3DRYqi7QBgeRsgvZVCxP5PRXgR9RhbfVRCYgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vzXFCgkvegcACie9bsNHUHr6QMwzbLV7yrJi3h4CutnEZ5SXr4LzjDLpCYPnxEUWkmh9tFGpkbJK4AcXcgydZ33",
  "key1": "2dUKTrxhUmsMtakxjbf4f9hVRD4EjNsnbNwkz4Jgjb7LUcd3tPSDzrUdAwC7MviCG9rwaviNXVZusXSLRzS2QCo5",
  "key2": "2zezGejBpaFktJGDsk7cQTm7iH8qw4RUP9HKPjZoMAQayEBzGWENvJRxKX5k4rDLoNrUZaoM1E2wv8GjbEM4fRdw",
  "key3": "55MpM4mp3MMiEXNDS93dAvaW54HZJ5LmPjdW9YGxqtFuezqV3oKpfVkwuN4TSLZiFho4yKe4dMiK5xGRu5SPatcJ",
  "key4": "5Uxf9baGy7QYhkLPBwvyj4UzHV6C7LBZk5Y6w9tV641dGATTVjY8oTTK61SDdaEK97CxzMVRtnJdgyTC6gsZgYPb",
  "key5": "38RjS5F64KBcoLFnpD5YwN51ncU8Tgd5DbiBL3FC3o1tMF5jxKRYmPJ4vHgWLbxxVsHDfUfsgRKxswU3iQQD3ehQ",
  "key6": "3mLKagD1AqTGZfiA7RHXDEL4JAmoFVAeukRFrP4VANRWoGNVuuqpaZjUDz1LzMx5afaHj99NGK6tpPSftidYUTJL",
  "key7": "2ws6ajDQDTi4XQQSD1FxKH8MWCY7FQcZPyFfHpCRAUUrskA492quoRvG5WRUuxRn9pqBAKSsaTPMf7SKRS9x9Yuf",
  "key8": "3768Dg5eRodozpfGK8RTTW7xnMgHgf8ftnHHE6Rk8KfTGXW5JQyn5o2S8QH5wtAPZ83AvTs98S8Y8BwR968YSFfU",
  "key9": "47hCXbpXHXW1pCGqrySz7PgU9EJd5Zv9KrNYsnrkM3QhC5iquh9AgyLVmxQiEJoa1k36SbJpWFD9kjgKgSBVZwH",
  "key10": "4H74Q3UDcMm1LHszVizxve2FUBZz1uH43HVNcTsgEXjfhJAZWzt5eueMxAUAA2RJ1xvkh7bZ3GbF17YRV5RaQRic",
  "key11": "4AW92GntiaufzV86BrdSPMzBm21NM1ypdhcD7EGykAFz8iKGDKTaAJKfTxooJ2Cy5RnG2qTLKjuGPpTDh6cBVeTS",
  "key12": "4pVJR8J2T3VuSe2quWPuruUpyVKJnFKrXJkCtcfAbv7mmJhZh42GtfjEpEZjVeHLBtLjdnTZk1g33Dxtua6jhgwL",
  "key13": "3WEAyn1YQgC1mboAz1s9FBMM5x68BENsdjGyndGuGuxEZzcmUR96takeLoHqbSgohRvaTu3HeQp4NcQeebJsSrWJ",
  "key14": "3MfK5MAjE6UdSg7hKVoZyDbrrFjHnGcMHLsKF3AtCJDmtwntaExbge99J2AfERdAT3oEFn6wLNCM9TN7VcqWaY7Z",
  "key15": "5p4KYtqvsa9ygT7EFXnXb2MxpqFSQRyJocxwLjdZTCRb1nEmBofkoJuAdQZjJhJGnktCeD9LbPawFAJdREPtDcCV",
  "key16": "44RzuvAZSWDvbNbc3VnnfNc5MbGR2DSwD3Lfn6tiPLM5qRXeVniH2LhevvwB837vBG19VzH7cwS9BqUG8iSZa3oy",
  "key17": "57vVWMy4PzFDuKtknrvNB13Z2dQrMurrU2RtzGpcF4JjyYSuAtQao8kcDCu9gH8h88z7wsGUeg9UijuYmurWmBCo",
  "key18": "2rFiFrHrZViUyRtNWmy1LryWuxgBMdzPsX5jxgW3569RcGM6LyURbqgNdqpUXTL6fAYrvW5bqHgSbhrTKNo1YPUs",
  "key19": "3vBeVdGzhenBf8B911pnRFhYFkUxXacB5Z8pHCWvcJoKRRbmZfUiJXHP5FZGnNGTveC58PrHWmQ1sy8yZLxVeXro",
  "key20": "5J96z8HLyV2WU4eAtjBXn2YuyxzmJhPQdMYnk1Sg9pmDZAc8RVbCLgCw5DwzHAdKffTjmJiFAP8cEZfkFCqBDkf8",
  "key21": "HenRXZp1g7ZaCKNXbs8qjT6Cf3dznSQeW1kVjLX69Sam2pcvjskjjx8iRHqfEtySVjQbMFJyVjbFxUvBTUgyR7C",
  "key22": "4JAHJoxGE3rwVBN9FP8mYpKPUWxiEmBW9uFBJsd6MhxXufCjUxD425TqMAvqTaHnLkFp3CEuCudHQWY6yXde89Yf",
  "key23": "3fjhjo4LVhr7NHdneu7ioxVC2Xsf6Axj2hDw6buAqxoTRFMy5iVV8BvQ8dJrn3mn8j8oAC7GuXTgZDsuJqvoyiqy",
  "key24": "2EhZWcHR3fZKKxx11C6UMJgDb3QsbdwnvpZBwAF29jjcG5Psd3MQ592J5QbjDGKBHNWFrqM9NQ4Mh1aJRCscqttK",
  "key25": "EeC9Sk2o13cnbo24NPFdR678PsTAdRrsRcGQaK6F21yBxWm6G1qvyjsJKzRMzByqZWPAN3wxfn7LnAWyW6RyxdP",
  "key26": "5js3kfBdyE4GAj44NY1id1GYx5JRr7xntRu11Xh137mtjSHARG1B8J7KUZed7FjytJxdVK7vQFhNdgR9n1sbwen1",
  "key27": "2QtgRa6oE4qibYPGrdZns7kwYzDZwBnE3MCcxLxKusHHdtbxBgWAr2uuF5aF8mkr9JiXHWDJaXBiumUXoYTg3CmS",
  "key28": "5uHiRA22n4dsD7Fybwu63MRZwpjxjaRJBFsitgtZdLzBRC5Sy5vMK6Qa67nfxUYu8BWKj4UzrrWdmRoiZYnUMmcB",
  "key29": "569kdGUAShYDhA8mZbrhqSBErjhZ4RBkvSadKzZKMVHEzZhckz97NY3Jbx2CYR4DUEvKBuqF1NFeWdLfgjc82imh",
  "key30": "247hB81vPrnUGmEtx9GcqGfDWQfQ4PsYozdggftnHzj9wdTPHj8FUMv4VpAhaxnSYdiu1mCeuBmkfjRQpppwGxeZ",
  "key31": "4S4LFz9BNzpgUWhruBujUE4dPmvwFfDAWU79VT5xx5FF5GbvPG3m9LhSLjuAWbQz8XzgM2wNRdV8g24jjYL9j9Lw",
  "key32": "3kKKKUH1XAZB2ggS1zRgkbbk5iH7oSju39sMr1YSeqnTtCVhNCjC9y49ipWQosijZ7obnCnJNAkm2oVaCmXfAgjh"
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
