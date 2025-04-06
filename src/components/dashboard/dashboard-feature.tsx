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
    "gWKvsnExakti6Ze6ZXEasgtV1pu9Hgb4Kp9gdWqNtD9PSC7UdntbF2Zq31gUKQTD5MuXb7K1DM6HHCBwV8XpiNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21UHC7Z3cPn9KLF7rYrZCXmVCwM69hH73X8BcsNBdUfkDcV1MotdgS8SU7uRUKhciLxodhsTqhKXAvPStCi3s7YW",
  "key1": "385NuhcExYruxkq5sArjoqqjAbszTe7EQNLPw7dqyJMnXZrcnfHeuD7jpzzgtFVmwmuZJD7VCzsF2fCtXKAJSjcG",
  "key2": "3CTKC1i6mL5qchwPFTPChATtcYqf3yXuyARGSv2ZEgXHZUgaUpgp6VssuGK2Hw4YRXgXTuyZgU8oM15U11bfBK3p",
  "key3": "fCmu3VbS1LFUm2mVgzsVqzwQb2ESzcdBgJU9KYcRgscjqCU12aN3GZjDhp8LQk8P8FGG7DLnKHNkSQG8LSkBDmU",
  "key4": "3GQkJ7zn8GguQLMzVUJfXWqJnzC3ZJ4CfmNPMDtdRY4G5N2y4P8BRckBBXQGGSuZtMH3ZfpN3TMGJuAqT4jAUEeg",
  "key5": "2iVpvQwACKY54nwvCABwk8JnTPQZ5HQGXy8kwLZuZbC9RVcPTUDzxomsacAu6ffu1XYppm7cbwHpxQEqcmfqdQHe",
  "key6": "59ggty74YATAfXSdhXUQUUy7LagSCnHX8UjgQxQf38bFCta1ZJF1DeQnRXfgNLwsBciWMStPmNs3N2hin3efNV1G",
  "key7": "2SJy14vTFBHQwK76feuJJHkEj1Ffu6m5UpQrRRHrRAyiNCzwKBWJVcZ7wqKsj7MtDidU1zNb5Nv13f9wiR9vqSy2",
  "key8": "5nrYBLEHbVkFm4T2BcCFnGUp14KrTASkpjgToZbkS5kTYqgT3AEWQH1WQf2s2gbdWvck6ggyoDHsFR5yjbhg4ERV",
  "key9": "3USEnxUMWwH1AZ6RikoGk3U85nQwsoXytnjrg4JQEAkt93RTb6G7AQNwGaK8kv1nwKK6NUY3syfZRFHjTnarUa4L",
  "key10": "4Dpdh5CYB48SpjUjUH1ySQhm6BUySwMNmoM5Qbep552grnQpMKZ6w4c5rC5axW8c4KyhQz17BAL58pbPQuKnqnSc",
  "key11": "4PNt9Y5j4JzmN9DFz78Y86TPMB5WLNz16cPrurPJ1U6hXVbQBuKoug5DMkv5P9AgbgPzQKdFXs6AZSmyCqszfwhe",
  "key12": "2UVx9VMMPURT6EGTTUxna8u1ZzEFAyMuak7RNQ7GWF6FwsqYUfPHaaakR8vKexZqHtn5dQbkMxzoa4pSaD6HCbqP",
  "key13": "4bDMotdGtmvHHksk15oBuhr2qRb1gFvmaQDchpU95WDoxv19kiynXKrCVf7zT2GJLsAknkaFWCxVF2CLdNEA4iFh",
  "key14": "2jAbLa2cjyGKh6AD33XCY9RWs7wA7u5jsXEGRX8FFRCbVGpoVkVkkFDUjXX6PBWvxJnRM9zDwVWmxvKz2RG8imJs",
  "key15": "PT83T4piL2efanLLYTBJg8JW3oTKLsWD1s8gv9u7fmfaKdcx9XcwzkmxJwxukZEegbscxTFSCfr7YUAbmdWAuCr",
  "key16": "5kMbb849KyDXUNYGW2xb94FV61SLeXq55D3BR6fwP6ndT9MHfdnAG33WUKnna4pZLpYdafencr5Jp7txB2TH4YrX",
  "key17": "55Na4rRZkJSKDHM3xx3tGbvWLNe9NAbociNxXafqL8BvU2wfZxXZNNaJZc3wxVVYFmeRXoPEmq4kmMzWWXdw8CSS",
  "key18": "4o287Mdru9BbGGGHdb1fGnaPoPs3HzqpVyzQXqxMpPs2HAGbbZDrCmVEgxkWznxbBXnNFDK5djDGErzacNbFxPri",
  "key19": "4HgswU8qxY5NHQ1AALD43h9CZR1C3L7cPxkoUNvaW9oZFNZ4WVDTt335nMcCCeD35ckvcGrmXFAQmkkbZEkbuCuu",
  "key20": "2o7NA9MgoU87XLnZGJEuG4EvneE4okNwywhpCVEXkLs6zc3tuyXkDNUehqX5K44ag9waaAygAHxQ8YnkpzvVNpvq",
  "key21": "QeH462enP3A98rZhHWxhW81xNrm6qLwPfddnfai2nJKXvWF7AyLxa9LSNfEAxU5PMQh7bSfbmHFFNpzrHJojT1U",
  "key22": "2cgwxgynF8pCxiVjG75vyX5xuBzPWHnnSJWZSQM2nguJ8q9HQfAiQxS3LfUWoLYsCbe9F9vzsevym2HBzUjqD4UE",
  "key23": "pBJXearjLbJEkRJkxps7en5jeLt7nyj2dbY2QYE1gm9KndkBDDswCKTizUsowmwhBmqbM58HuSmMskwepNfWGmL",
  "key24": "2hjTUZNMJyHbBvJmDASkNGN9xM7tB7s4qUUfaCuC1eiK6mj4Dw39Wi4dWuDRxdiLRWpmSKVDRcrn6DyHCcGgiedn",
  "key25": "5FvVUiZVFj2tr7QLH4CfCe6nfeNzyQtfGXMQCowiKxQu2JujJvuGzHbd8R9unaJrrh3VCauPFPLKBBeLQmKf313L",
  "key26": "2qEpqQoTxXTcAAyiZSGJ6fmwSrf3KTBLzT2vfd5794MBcVExhwzshyEXVsbPwPaoTKsEMYLCbAJ5DGbETanmJnX6",
  "key27": "36aLqeyiuhc5rJW9a1HiRrG2P4t7A9KJSpR15s4x3qjReoqPajp2WhUjiT7MyPBxzbUHQnMa18kXv5bEQhYgfdm9",
  "key28": "4ZHJTKuWE5RxumJDZupq6o6Zs7Sc5dAnHn4DvQTH8uqnJ7MXbuYbWwHWnoH9HCoMBKha9SkqTWVFx65rKbFJnrNh",
  "key29": "64UL5Gh9dt3Vw7MMTevw5iE8KppQrLBMopcfRWgLWnMCMSysqU6ZTLFezXsCkzkMGg153gFAcKHHWyrdSL7xe8fW",
  "key30": "24VXp3fE3GvNCzUpAiRMpNYc3qFfAKiRGkG8qNMtPQcwZqrhQ2DY6sNAdys61vW2SoyrqCCi9LQqPMutp2ZFC7jQ"
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
