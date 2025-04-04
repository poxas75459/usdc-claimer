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
    "45Jkrbw6FJJ3YnFoZVkejCRTT4PSSmJKhVeEsxczgSrcVzJAe8oxN7i2oHv1m3SDzXSbfMcL1jTjP5K4WZvNTKHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WyVpqMV6MG9nDjqu3A19QX2YzF1oEpPacXzAjtAGc8BTj6ET1ycWoZEZpYfU7MNb9M1k3nJx11sLMqqfw1j6Sud",
  "key1": "48Vc7amzkAxFet5bSngst4MwQxAA1apTre2Ujcv7GcvCJRqs13qiodLeBHircybr36va29dz8nJynZiwHBz1QBdi",
  "key2": "63VyxcwtvKF5JGYMU9bjS4asbY3eYSTdbtof7foYgNJ8fMP3rJGwLRD25QKJ4tAhsfoqmUVg24hEPJ8JWumWN3rX",
  "key3": "5qyw3ZaQb6XsmsaW1mzrxb7DQhFQeNpqt7Jgd9UtvTjsTLsELrccsYwFV7ZdPjqvfXA9zDH3DhC6zQjzc5K2Zifh",
  "key4": "24SgCzHRTpcXnx2ajbrkLpdBefVrfcvZz4GHdjdTYa1SHRF4MfuNbDJKCEZJsY3c6GqZAnFM63PG3jzcZhvmeL91",
  "key5": "2G2BhJxV2uMv9TJLspFvAwMtt58qGsWHGySumkv1aZjfbDEQTGghEu2P9yaAkHR9aZGvByTptVTYNmmZqYS9uMTV",
  "key6": "2oQCi5upiBy4z8XfVH3wQQEjWNQRDi3i8su7wvsXJH1A4738vffyTUtdoYwzWWMjRyNhakCHFxCgTeYS1Vm7o9Xi",
  "key7": "4ToA3ygw2XpUDFFnE1Jac9QxeXK9CHDgucYBTzGX4qF8K4sTFGBgNo74YEFbQbYcjKhXxBvJeAUe5VfhJyKT9TPq",
  "key8": "3GTYs2Wbf6jRGgVfC1XfYLAQr2xsm2xdNL1ZGtt3WMZBB76HKHJJWhnGzTeMafNrhMdZu91wFEmgdqSVsy76KB9N",
  "key9": "5PdcJq5hvb6ZnrbrEhLi9K3iPXiSKr7jdSJTg4y76CSWmdor6kAXwugu2mUSCNUm2usTrzR2vCCriJFHW1LVRCu4",
  "key10": "2dVjEG3n3J5kMPE6QHgjLsnSMRYXeckwcgS7qDM4hCfC5SkNSHm43bEBALmZJL66SEXVri3qBrNGWMDb3AAVVmdZ",
  "key11": "5HLjRL9yp76j5eGoGCmFntiQHytPzAchQsgC5YgD1E7y3tAYJFAfL7Af4TNbNyRbaZcTLuDK6rZwgq18go8NP1uC",
  "key12": "3uMpK3pExkvTEVSCu4PZMMN9QkVw4Mn1yok3yUyh6UZBvzPK6ogwERkMyQ1UkzA12uFoHxaCqKRuGcZf7errMrDs",
  "key13": "u2LoY28iw43kDtNHUhMcJdfgisqaT7KeUSvMVfQ6uRQdCdV9Bd9VevmWGo9Z8anLyCXbKq62DVVQzAsNY7Ye2qj",
  "key14": "5fCZ3u5kJEvdSaCf8HkXnsqH7vvnPqbVDswJTbKZ3XaL8C5db36RjCv2by7djXBznhBfYkx7rYyPy7jWWnwLgNRZ",
  "key15": "4CpButvxJXLwmB34QYHpuSrU7HidQFsHzeMYQFUovDMiSiKPGJCVZrZgm4pmV5BnV6piyg1HRUfZnRUbY4JDS2xm",
  "key16": "4JefjbyQ1dVSV2QUJMGwfktw9SyGZA4jGDBkDQtiGf8xvJXZBaDTFWJe5h4c7DahziqTK4jsBMDSbbCMEU8CmcRh",
  "key17": "2KJM2UYxPA9AoB5fCsKtRuFgm2pejpau2AEZq6vWEyKNmT5PFck9JtGLTgWVTZX2cM4vL2FE2TQSbm7EqjaiUeku",
  "key18": "2TDEt4hWuGidfhztVbsEqJYPzRnfUV3t3JotSph7cnTPvsiYJXcF55WkbN3Q8NPx1uC8mTPr5kUwVud3JVeaXqMF",
  "key19": "31pecQxyUnTrAXBpNcGPgXDsuVASp58VLjL2Tgw2UpZS979NV5Kc8zzMMhiUdBZsSyiiumb1fwPCsA9K32xwHVSg",
  "key20": "rFEsWbtgSMUA9CXMorjz663Rfx2wN9xXE7japFWnzNMJXw6NqyH3mQtT8cvnBv3CxKFJdSBxPwzsKYNAX69KPhN",
  "key21": "4xNr3MATj3X5y6j6oeWfLhWJg8jmyJLfZjkayXkxWBASh8Sc8UdUeY649QJc54WNa5iG5fFk6n8SpKe7xCU7Et7R",
  "key22": "2kStAHT7GgUhkHxzGF4wrHQ9SYaiZAJLrKtNx5QbcY9MfN4CjQcDHJQMwBWD3skkD5msMRv9MYwa5RDNiroKFN8W",
  "key23": "3hbEy91bFELvW2eo7dnJMWSTQ1chy2Bh5ga2bq4ysMKfSuGHLaoajp8a5oBuSgpRUFWheEag8PDuBjWKp4mLd39A",
  "key24": "2xCJbq8T8gi3xTQ7JKqquc54ujLa1Qd8mrbnp2Us9gVE6jPGsnz9hmuNYzape2dixHTQngFqRiZYTyuWzXY1QW8N",
  "key25": "UTyb4YFbxe9rDwtsa3SkKAFf1Xig13oq7zbCowCA1Yk27PLNQ3xipHtpdEKH7SDj97dCf8v7nrMJv34a6HoDHnD",
  "key26": "43fmVDqpPjBYgf4ZAsV9HE3iLtEkG57QMHAPYeGUx2P6yayWx1nRq5NSQeXbKbJ34GYq5iUMh6sGWiRiTV6LkdHf",
  "key27": "4jfuuyKmEzKdcT4L4hsmSSBjd5jHfugVQejawGvCitTbF2BQmepEtY2NaSRA2z2xEC9TRiZKSF2JmZypJGgZ9fDL",
  "key28": "bxJFcS3WsEbKH6zjANyUad5NvirVBXMDsoz56JKajHFsnMvdxqbfthfvMameViMjfUyx9XgNdLpsZ5X6UDekmJK",
  "key29": "yLibcDGHwWTPB22e15pPaF2ETDc4qyUhsY3kQRanbkTWS8XnT8SEWeMeuXFi21k2hANt9YeiHGV7UQt86g9cAfz",
  "key30": "5PB7sJjx1dbaVs6anDyCeq4mEERN7922X69yCCPFAbWvjZdRxiLGDYjpfH1Hiiqk54vn1Cr5WdpQHWumLTS5Rw8b",
  "key31": "2Ycz48wizK6ECc4EENRwAgw9GijT4kNGFpqxkqegC51FcR5cWpdHc1Yy7hUphAVvVMa4td4tfGdyeyU8pnxacHdW",
  "key32": "3Vv23dR5K2xpdemUYwEohfQyhNkaTDHe5m71ZreNG2BQFLhhguNk7MhTyCXq4s6WTrLqPJAaXNapnB8hn61h73g9",
  "key33": "52Zsyw2BkHNgey5odQNpURxtAhKEq8BjU9DSo9i98Q1xHtpjVHZVNbSDds8a1y4g4ahN1e3sbWNHsh82FAcsBfmW",
  "key34": "3xiuztHtJxfTRGNLwwovP57HvCEBxAkUztSRfGm237AieUcDxmd4oJEF8RJNPfwKSPQJc9aQEwEFVB7EFPMfLoem",
  "key35": "4rjq4a65vq4ntN2hpmKZ3L2ejHq1ertXuRbHmf1vZPd5fAyZJFa6ojoAWB2LcUzxd4meN3antx3pdkYoZeCTivsV",
  "key36": "5UFNa4ZtjnAUoAJFew2Xh3Gb6anbUAF4prnXodQgVvAX1GYMgfzt6A6zD3Gog2TB5orpxD43oPP4XQtfJwG6uBss",
  "key37": "2bGoJvB5HYkxxV5PdgoHdtNAr8JPaygD8t2WpSeBPkeMr7uHXbFKzVSMe2YeAF88GGnY8i49pm11oA2Mi1ev5Buy"
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
