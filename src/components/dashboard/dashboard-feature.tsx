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
    "2GnZFZaZMhRpMTjkbAncU4AkdC3K8Xq7Sxk78cKPyW3KLpR7QN3G86uruJ8Vy8P2XwJRU1gptmMAasA6v1chQXvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D3mSf1vGYXecYgVqiZmG5Uj1obnYwDXNpVWfJ1iK6UVSeudFBKs1QxYGjoeWRuWm2ExnqP4sEGC15FWFHVGnmFR",
  "key1": "SsiNH9Bus9KWuX25WZh12xdDUejhXNwx4ufVBAtPKhd3B7CNk3Y5HDtstrJ3on9HftLnctTQdgYofNJcZgm9wk5",
  "key2": "3eGs3UikSgVMn62qWz1W8merWKhBNeuz3TG55YB5VDp6yAGm3g1E7Ybu1xyATapYuxZyvo1YHvr3VZVWfaas2Gtk",
  "key3": "66mDkcXH42hfKKqRiMSW53V1dfX5nzQMKQrRiuBb9R3GTr2VALDtZc1aWhWXKtVqhTHfL4aG9N52HZwBscuZpBUe",
  "key4": "2ZuY3idabWVwQm3sGT8VLWAJSY6s3Q8H89cjAoChZ54K2Dd6nezvVgyuQ8xytKUd8WRFmX1CRRN943pZMfVc8J8p",
  "key5": "AVjzFuc46mEvWPCDFaWbir8WfTNDaKG2ZouX91vLc97Lut6hWnXpR7vx4HJSXbXEifzRWE1KPgXFrbS6zykbvQb",
  "key6": "3b7VLPxfYUtCiMRGXH9c2uh7mve2Qc4dYo8XxPgSVBpDa7L7YhNi2G7UpSdeWu9iZ9b1st45KfjjwZYxohLKkKv5",
  "key7": "de7rY7hMz9T9ktSyZDqnyAmnyTwe1XxSjPo9M2YPjayZDomcVbXJDQc5y7kgfUuWCm2NiUrajDSUchuU1LzPe9D",
  "key8": "3pTq4go1Q9PAxFj9Pj5CxnkYB6YgpCBzRVeBrUxGFwJuYabtJhMPJyJpvBCK6CHCeepagkUBWdubKbiaPcmkrC5y",
  "key9": "4sSs5baA442UukffF9DGXNPxaJ4awEmENd3Ujkm8as54H1nE35GFyqYQCjkqThCnXcPFChhFJVF9j2skb6LdwH1j",
  "key10": "J7tURh6JD1A4iSjGFfCAB3X7QZGMmD7ai5XBywtataTKPEnG6yWNyvJ6kYPS83LozqsNJK2WhEhc4FbT6drtVxC",
  "key11": "4U3JXmmXcZp97sbbvUx25a9EDMj8PqGUSrGjeU8UenYuXQwVD8ApHm15c9h26zpsupY8dv1GBTaCQVRq4RHi92Sj",
  "key12": "3pjpsghpWZkXXQwqiP3euseMAFi5j576sFgDfhg6GyePCvMJJyKf6hni1vCktGeRq2HsftgD9pkKwrrk1d12kGxx",
  "key13": "2NoizPdMWzRgSL2s3iyBUs9zdbAcmhukdhptdfzQYTVw41NKj7n15QSAY3WovgoTJnKG7HcGmzDnkaUdHYoF5Foi",
  "key14": "2mKk5uHQ73HJuVy7uEuwVG4B58NGwFaio4TptSNMNw1utjVDWB8sg8MQxWJqx1S5uSCfV1o5PTBV6K5RKUDqrYkj",
  "key15": "F625PmdjvChgCMXJ98Gja95npenj3SypiKHGjFUNp2w8JV9EtKfsx6ZpAtNECLyJdmA7Ubx6NxAaopwuPqyfYr2",
  "key16": "5QXQuwK4xxVfMfGx88Vz693Zco6wjPs51E8EDLyzgqFLEq2GyY8vgpxAsDib9RxhU5SSVKtvg1bxDkkpYQGksfcH",
  "key17": "3QkZceheUjWd3zLK3gK8bYdLX3144VP5sZj8yPwphKneE9U68os3n1eceG3w734MBxsp6GHbi5WYjYXHrbwtpyvK",
  "key18": "66jmw1jBwhjQiK6BnnsrbwNDFQS2tf9g6ECLo16ppP1GBMRsJPQfhntPE5wgxVViSqh8RgsBmnLcRvrz9bp53Egb",
  "key19": "4mEj6toZahXCb1BVYjVPse7sn6JKZbdKx3LKZX6Mt9sBUthJ1g9Rw7ci5rDszySyXD9pEgMyjKxSpKf57XZgsBP3",
  "key20": "3nJRVfb6RhCj2xhBH8jrkPM79d19UwxSHiyDGaXyseHaw6ZZCE4dzKZmTx3YDbkDpm9tSEWorwhY5FK4y8Uhmd7c",
  "key21": "5y3Jy8nneMXY21R61fLP7uzUxQ8Pn66uYMvAxhowhY5hDHCfqMn4U13U53Qr7eCTxofnexfq9ZSmpaUDMfwH23f4",
  "key22": "qe9UL8TMzGmF3mCUoQP4qbR1abaCsKV2Fc89r7Jjo9wYdjB3Cg1wsZRs3cCtFTyedjAAUiLUjc1MZhNDrU74tbk",
  "key23": "4ZK9CWuXv41nmaY5fuuT3HxumVxnzkbApxK25oVxXYpYhwmcdT6j1a5FR6bVY8TxC4KcKEYquJWb8iFWivQ5tmzD",
  "key24": "NtXTXJ1F21BeurPmrSd63o5daVkBPGf2RuMffKJrvXdCecT6uaGfqWKA6LFrQWBFnwYFY7cv9BLqsUDjQKiPhJV"
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
