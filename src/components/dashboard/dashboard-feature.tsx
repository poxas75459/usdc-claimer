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
    "3At6VM48XpyBcYRSY9pVg9VCiVp6uw3aTL1Q1txswJDghjKgRxKLXtnacycmStMWt3pZbDjA6xyW9Jay16ZiVGRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tTEd3pKenNiu2hTfJzTj1HqdzBbUuPbCUX5bBxKiFCPa4nkyU7NfGhAmD4WjwdeL4imPEdJnjPQP6MK4uVfBW2m",
  "key1": "2h4MGmBdcEaxU6S59Ma2MC1UnPTzgXy6NvkZGDessDmBgJvBK5gvwFL2rkTtGdqFFqUxGFwD6qyrELvSYHAhx49e",
  "key2": "2MW8526xyy3BA4awzJHwKLjmibWCs9EMc74UQU7rdDdptdw8DrUs8p9yo3pRw3unAZLphZk8kU4gvCr8D5EnojMR",
  "key3": "4PxoHkcMn7VtwjA9ZdQKVdwcU3BnQgx1TrAJu6nDVjKZNejwAnYFn6t5dSgULMk17azU8KNetpDJyc1Mc8FxssqP",
  "key4": "2yshoo9ZsMPc6uekWdG1B9N54Vvx7CJoHYrCR4hGPXRJYD2nxiaC9YQgNYVs2qTAEu3UawnHGghvKEnAaQMp5FTu",
  "key5": "3hws9gcHbTfqY56P6YpU7DTxW1CTi4CYApRk2Vn2czcbwud6MiBq44Mxydzh3eFKfNsHZjiJkgtGse7VHLA6Kjk5",
  "key6": "1XzZWoi73qcuHxY6h1k5LGmrECmdbgjtv2rZpytobq5v5eQ3bTuZxu4KoSktpWeVjF57RDbqh7HY9NCMfDJPeyq",
  "key7": "BiMUu8mZf6HQ4KRAX9dGcgahdcRNzJEUPALHxKUZKpKMWf1HzmnMGunHed6XM164TruG6s9oMaketbuEkUsv5Wj",
  "key8": "4dPvsZsTB75VKxC5NDTpuVJ7369gLjUQPBa5r2B13s3c2Cn59zaP7iJMYZ6VF9zWNusbDpXD2gqJbMuEVGtGZLg7",
  "key9": "5f7cX6u4djbKjBHkzdE3cWJW9gZhfts77CkjPQBdVfURX28mCtKhcQQQxHdZ6w3e9e5FcxZ3EMPeJKcjtDanU6uQ",
  "key10": "3MvPpHHmCPGotpsVu4yjhbYg17pg5zHzXyE7FfUoMfh13vp3WHKYU35CmjMGJDDAcRkx65aBwdzvjHzWGRdV5T27",
  "key11": "4Xiuub8dK8PX3CzD8haoGKNiKRnbpQBe63xMXug2tQ9zeYGK2yDJSdVjSLKLpLkLUpAz7hKB1w9zka8aXRf9oA24",
  "key12": "bn5isLQzaeJ3iZNSeFcxec67sz3siu6KQCmu59k9V2ctmGiHpLQ5dBrPrkHpyuraPbHiM7XoTJKzLVd5YdW1Er9",
  "key13": "33mJyz6PhgqM93JzYWUyQLBC3aMTxA61eDepLnY6RYscimzLdtgSiKqTz6YrEFcJhyKdnNWQWjRR1k4HWsCHKrJN",
  "key14": "366nE8tJ4LzgZzsinBAF4a7qrvehkzYrRSDvyHAvqozwGHdPYUjkcziWzekLx6jRAiPubhX9jYUrqNWicBSZhTTe",
  "key15": "5vq5gZb9Qv3XRUxdbJEgY64wMwmofFrT9J2aA1cRpKtP9NBCmRKPXnvsV3Cv33XsDEnD1jQNxZGC9Ep7GYKqE55P",
  "key16": "4GBXt7mRyvfGYj4i8PQxEUMcodKHChr8xMBuTGT1CvdRe9tQM4yNomSNxwEQ6eGoyQ43nQXgTHFaXo2FQzKvFB4M",
  "key17": "3JqNErVa4obnUi2CxXa2ttgpSzXUnAKoBpE4coC1gami43MH7DS6u7B1q14Ds9S66wNC5zdSVS8pNCzh5wzGNNWC",
  "key18": "4XiqpCZ3dRWFyaT93F2z8VhXtSR7gzwpNuGPnCeVoVQf7Mv7C5FfXqDQqRjsu4qMZnFjhmstxcZMAusTZD5ALu8B",
  "key19": "2bsiwvnuLtqpXBne3aXafkss8U6rQabhym2MfwXKRDydXJ5y3En21Er1NGi58uAAN7w5UMYMRgNYSo6uBU1ribMG",
  "key20": "3FauuW2NfDvSCRrbj5hRiu6pgovbtVSLpwMSAQqJrg5SgjmBUbJh1dQ3zmDorXs4wiEeoU1mqPpFqwkXpALNVHuY",
  "key21": "4NBuXmRWroMpo4ymWXBAEwHCcmWzxzKyh74DaYAgi1XfLx5KVRP4inkqNRQk8TeTikDphkqjKZrtvB2MYon7Vb2M",
  "key22": "5QgFoEkkiGjuKJ51V2PUymmbbZUfDiHc282Ugv8dLBWBuQGUxVAnrRMFPWZxTaXQN2ru4cQ2YFUThJhvrUAESdfD",
  "key23": "2pFR1oETqBaKXPGsFVTLkFRgG9gZfLQSe9VSivZcdUMmrRjnpwcPbZFLd3Toa8oNNmKfx4HyQfFFwprZfQie86eU",
  "key24": "61QMUZwWuwfBTP7uEsqxUoqrLtbnxF1E7KTxpHfcRF6UoGVdtWVvByVZvWwDGh4CzJNrmf3xT3eSMVjCpp3AZBsr",
  "key25": "3tS5msLdbcMZsZbUbinuYpaYg9tMy7XD1DzJ51aLZdnaHU96krn2iGuzcEZpJHtGQjSySZ43iEpApP65pa6EPbY7",
  "key26": "5EfiyWHL4shAJLfzojpBeGEkGa5e8bRq4uchP4YwufpyLRNfeR5JAWZ7BN4NZe1tQUTdLbBZNEhz9qyMb1ddqbrr",
  "key27": "4xxQm6bbfT4f8XXCfmqUTRAYAiNtxYoM1cFLhE1LQSvJY7RTHGLhmL6hGPGf1bbcebdrpDxgDuydeuk4jYfKBMD2",
  "key28": "fuc3GMHxqJnQbDeuYyhTg7LvXYvFztzX1qHbwKffmWJVUfHp5eP63pnAWRsTmXgGxxGimp5tk1qFm6h5tksJFRR",
  "key29": "YBtvYUjdwvF5w6zqxA5Y5jUEhfwRJLXuRgjvuAe8RVHadG3c6VsDbuzNYTkC5CiopTJXRRpYefNZYNivMuKUBge",
  "key30": "tHWKfWS7yxcnzEgQEa1bgdH89xjqgNvtUMndFvghdFa2CcMxCqbmDS1gEkCfyn4shDGQjpMgsrzM47sBXriBEdF"
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
