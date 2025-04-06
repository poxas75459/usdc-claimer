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
    "3qWEQ42mSaZBeXEfoK2M4ymk9s5DfPvC9kay9WKVhuUqesrEZmg7VrEU6cRuXLH4zQ5e9qY8R2W2WRkRnF1qsYje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VQDeXbaTzkZBFPwsTkfzXAP5HXqxdgFumVLurVYH1GEzyN9CHDyFoYREi8AvsAv6Kv5jWEGG73vHWZ8hMbJVqjH",
  "key1": "5bdj2oKw9ZSk44w2gF6tgpPgpRECRyFLrevu9dz8jJhSNeGvhyQ2fsqyqCeeLZtwqQTsXbEJ3cscE2huLaWnGeGU",
  "key2": "4bG9UHaBP3tnJ2mpqJjy7UihJ3XfGz1LfqgfwsLRGmSSjvEWXtduedfP7F2qv2AtxZGh2n9yvt4e8JVXLurcoEQm",
  "key3": "4Dn5Ro287e56cJM53mHKLGytd3cpxWFSCHPYhafQmr8ZJEwxw8Qb4uRqVEATonkq1Rtf33NACdTacerzFhk9JdfR",
  "key4": "4jV1E5NqheMtJRmhS1abRzG9Y4Kd7Wt65zuCuzoU5oefQPXy8v2cqcifgH7a2yMoVFsYcja13FCo8gxihFYP5N9v",
  "key5": "3CKZZFaMrdYaqUMjsu5yQMDf3UToETY2SyFZd4nNfSiCMJie6YNPVhxMHNonzkpRvP9A3ApMhLmsxpi9zagSeo3a",
  "key6": "4HWArK9xzuekKHm2m3Ymm9ZnqJ4NFuWc1erobibxkShHHtU8wXaC4RZVuaZwQYReT7EmH1W3cRr2fB9Guj7uikqu",
  "key7": "5ZekjT3Gq8t7LKwPwa3ZxJGNrJmAZBKMwH2koPFApUUmAT2S2ZP8zF2qZvFV9BYzKSjoa7uPxx5crmZ1NrBLQDNM",
  "key8": "5NBxo3EpUqkc4i8fzK9xczS3khNhDkraL7CvXk7MaqPUmKSRdK9o4Ny3JFkkKvazwaqK6JS3cqiDLcc17TQ3DUJw",
  "key9": "2hveffxmWDRqqDLHhA1yG53VbMYHGsC4rngsQGXY2aUTC8YhEFB9APDPDEfM48ueMXBeDfZ6KDs6u1kkF6hD7KJt",
  "key10": "2itWdUgw1dbKEAPfKxCnHsjeF76EdetN2vQkQKifVETpiyiMHpQz2LZnLdbkKjCHjs5GyzXP34oii56GxGDzSZu3",
  "key11": "2QBZfL5C2RuCGnzkyrQjX4tLNtR1p3392U8B8B9u6voAx8pvtduebfB3CTqJ7bwMPgncg42dQqSzDLBdYVeRRx7F",
  "key12": "T9LCAZfHhyubrCPhBJ4XtNzR8ZkY8GkLcq1yciNt8UM49fpEnvTD5ZzgWPGFiwaKLu9DYq6scwLGUNPNxXRUmRo",
  "key13": "ArjGjX7M1qmMU9vX5gmXGzsJMhrWWNYm1Togs7jbx3WvVmvpS9BbGRTmG4QwJwRD5Zqkrht9u5Tqk8uCPpB1Pxf",
  "key14": "47xTAKTRV1Uq1Zk72bDo8xG5MgytnKYaVgq4wQ213tWf7cavYE9gpspBjVzjEoLDs7eAf5XiUhBu8EQqCpazbwZz",
  "key15": "bgM1jUesd9oRrcJdqRuKGRdHD1nTCHnLXxnoH4pLL4z94GxU3ZiYbMKfVR9uaHFJX7vCcUraxczrxomUT6a3xYe",
  "key16": "b4qgWTPzLuEWcaUsdSRrmLtEzGRVL8sNGkwL5NSZ2izJE3pZC2VRDZxVQYsi1HNZceBdRxmtWNmk6VXRRnMU1JU",
  "key17": "3X7MRn3rDRLhnquxGkpKk7ZYXkHmLGum4yxkPN9VnuLjVUp5dsMBj4YLmDEEJgYXEmyg1aN3cmw9jEAsusKDEztQ",
  "key18": "2UWGuwnoQX1Th5TZiCPXaW5Rf21tAxXZnKXGzzHCCVy8M4CiE384KqfgHr9GzCaFeCQuw7j5EXfx6HYt3BZoThfR",
  "key19": "3EgaET8JDMAUy6eWAHrjzJroQBfzt9ZT2UFBzeejapMAiubd1YVtGjxKD7EarU8z8Z71JqhzXq3sT3NDNqNXn5fZ",
  "key20": "58vqqS5LQ9D1wzXZwALsHVJZREXzjZMB5ZdZ4YbePWd67tT6x7v5gGtvghxjXdRZ79fr1p2fpYjcNZLdXAKgR7aY",
  "key21": "4UtvkR36vfoz5a8K6BnTEdEmX6WPemM36rJD9XVynkmUfsG3gqaWbcrEcDEDXNYqLHcNd35MPhwTyfjLKbZrnqVi",
  "key22": "2yYPJvRNMdK2fq1qPUYTagcLSmMUBck8EYHyPbZx3CNnapeZiiD9bmZpW1it3F8zCRWqz7pr8cAwyiDz57dq2ehA",
  "key23": "37GXdibyqfymXfF2qtxrf4HEvtpQZRjob1cXPbiNyNVXNxrUtDMjdwcDBEVXP7VU8r7c981hmTz5e925HhhN3vb6",
  "key24": "2f5TDX1mg4393V7fykoPFiadwt4moPuqWYWJydug6EZHP6ftYDz9k8F93Easd3mb3vb3kjiSnTpqdzY27dGtaQTM",
  "key25": "5YjQrmbuWMiWsKBXBUrD2q7Rxi18ivNS6QmYrady2o4VZ3h8EkiZjjpF8ZC3c6cxBkJnA2PwUWRbwxwaxzynfKDP",
  "key26": "5qidB7nNqZYh1BCv4ce7YMPLqqQWUugcTi3wFotEZAK296R8cLXo1Hgc5gj8Zu7oyraYYNi6KCQYt1AAcF7UNDbd",
  "key27": "2AG37cfYgQEENVfUFwa3d8bfGqXHdpuBdzGAwYemVDnfncE7EsRZaii75wKAtArBSFob4X5Qfm4WdkDrWsTWtYZ7"
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
