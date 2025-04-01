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
    "4adLQq1t5Eb338RtTzxKSY7hgtXsHXNfXkdtpiz2ZigeY1ncT9rsRcYJ3x7fWA2VVWvi88m5K4TNXo3RN7KSDsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35kNBNQr9LChrvmLtVHwFeBTtp2Gjy3c9NEmHdbWggV3fzKGDfYrTRpVcP9AH5yqTP3ytYscxr2zvSjC8MHrcAKy",
  "key1": "43xmZyf3cnWUyafEEVTGVfzKqxPQTtmWUNuCxMPhasntdkVPNLbCzDsSMhvhe4E7VZH7mFv9yUX9mSn3c5zeciwY",
  "key2": "3z6rJ6k736sYNx69HkUkrDY7HqA5iYNirnonw7GT96NHYi4fJDrmv3yuiGgAjHuiE46mZKXHAVucFbuwVTAU8bvD",
  "key3": "BRb98KnMrXyySUWeht5Lcx5Xmk67VR8qpcuZqykYobyA81LSw9v4qnm3dxUDu9BL24iX8xwECi8PCvHuYTK6M4T",
  "key4": "4AkcyfJ9RMbGUaQsmjfuiRQxszYitEvBvTxxpFhK35L9jkT2t4QK2qUTzRUku7dLST4dVmeEvdjQ2ZzW8dDfxEo5",
  "key5": "5bLxQRiSWDRfnnk9UYk98fXfhnrunjJ4WPqyAdpbD2AqfXQKjkDYczCQP7nvcPkPZ3M3YicE7imZ2fSCKGobWanY",
  "key6": "FbbQYCYV6F5tu6NZHJjo1Sz5L3nE8mGhsoSDTr9EgPqYEiTskhK2VTdKQsUoZStfWuZyHjwJNXydrh8nKRMimkK",
  "key7": "4WSUEQvzA81ESVatuJGLtq5Vb5hNLVYoxrXqtgFEPvA6JtvkcE9e9do7p9TY3yuzPnrfvykT79YDKVEnqKFQ71Ki",
  "key8": "2r9YtB6hyTENb7UrDADtAVxFVSb1ovL5oAgNi83DbthZp8dqpKhQvdPFsLW3Ji6siFnYhHHX6it3jByDNv3nK7jF",
  "key9": "KvdHKpWxY3GjcWtRVvAhcVxHMssVpcW1QrYvdEzEBPCX9BYeWLKxo7Q8F8SPBmQMjqbya2VwsX3r7Uw2S8XbTCE",
  "key10": "55HErVxVnpN2pg9SKr1gsX5nw6pmdqKv1vTQ2CWDdArY5dUvzWdVgSfQXAMRHJCBnuGp2nkJTEK7ejWgupX38tVw",
  "key11": "2wd8BYkqAJmzpU9fsFFqHHVaFhiwhpz7rWKhwsoNNTCN9e7S9Zjpjeek1JiRQL2kxXd367xXbXkaM2LyaxGyMKpY",
  "key12": "2q8mkrf59Bdj4CFXuTx1eEyTwp6uQvbCD2WYq8zxCytXAN4syytLdzT5VLaPFGoWMAkUpxjX2EGuCKwB6A7SUCKX",
  "key13": "4EuxehRGqsFaH5qaoCma5yBrRXwCavGhDWDGzRKpCgYD4cjh9VGNTjVTAHPEq4P438uKqZLdwU5J5sYxVmvNFggT",
  "key14": "3DKBzdQoDSiLriHyd7x9PJv9WKvNMsq24Spy5iRN7xjtMNpGRqsvf1jtWuC4tYKCWYE997R3o6tqfnwSwGstgUnQ",
  "key15": "4XsEMtQ1oYYRuCWrUKQ276ix457eazr133FmWhj9aLRnJM6hxeUvbuNkWUKmVpxnBd5f2Y9d2CRUpBVFAe9YJ1aB",
  "key16": "4xvFQy1Rs1XGJtJsaDwauTboutiLqfmTH8cxV3eGn8Y8XQXMZHhBnGHkDY7CAnspZqL4XX3zmjr44674fVwGuBq5",
  "key17": "5jDxMBY3j7TpjKQ6KePKZMezyBfEkbiqZawGMJRb2RXb5TxgTfWV6weTpXNSosTyjD93sLkM7zmY6MifVoKnu7f3",
  "key18": "4yb7SHGrDD4ZdzeSncxBe4sZCcSxAicyekiFV5yNcXGqGzQZihXb9sEEhnNaRxodXPRBQZwecx4e52GiVcjoe8fS",
  "key19": "3XKYpZNYABFMjNS3CruqbzmR1dmdRRrbrZJFCdbx14FeT2SgfuKrSZR7ENQcHdMcVsGsWobiHpoPC36oG6D4i2wf",
  "key20": "2ymotauyNEr8aYcqNvLC1LKobPPLWmrDZsrxQzPYBPyKEXLxKumNEvAu9ojG5jifygzSRKKLXNt6bd9oHNNoEv8g",
  "key21": "2KwRsbvbaR8PPZBVzhGCKYeBSn6xzEBXktUHzbJA1yDFgaipqxFN276nLNHa7J5dj7BTYMG1rkhTTcvvttP24hUu",
  "key22": "3Hezz6RxBvG9DshbLjYruYjFzEHvYdn5pgLpKYHqnp1Xv92P6SmCgdWBqrrpRhAr56S4w6GFMmg61vSXM7NyT7Mn",
  "key23": "5py13NBjF3j6SnYsYrgCcrZmW6ZZUpYLpNvQmZTRVDSH76NrAdP8PMhTBbB5EWV1Jv9NJW1pdTzeguPMf9QG7oMw",
  "key24": "3Jx9JRR6SekBvvK6Prsnt9Ev9s9wCw6MvWF2iqkyCqpuSj2TroBfKW5cajSviKsq3TAihC1B6NdFASmqi9TYW4Yq",
  "key25": "3FWfevgxcJdnKDe6XUYSU44VbcBZRKs2T3hd6BF9yYXwqZPcbHRySkdxX4jmFBDEDTMEwtJxzkEMiP3Np2bAr4Av",
  "key26": "4DFZiD7tYXvYuVK3NZNWacdhhrrydSCPcxS8MNfjPuNXKpDn7uNPKEWGYwvN9pFBTisvxksBmAAaqghsexZk69qB",
  "key27": "2TPHtXwkT5YTjsh3qw6XisPm6KArWqcwNwfHXVWaQW1F6HfgJfDqC2QwFxjVvDzo6ecUjFWN7RKGFMzupji7bKw3",
  "key28": "32M7rM8vxuxYjmYkJqHL4htqW7EhVigEur1MZVVNgARfS8zSQSNVzoSMWHcBHu1huUv3dRvMLd331Fq93aTjVXam",
  "key29": "2rFfKikj1mPJoKeoUR63gxJz56a8GPUtgXkyAcJ5twKj3ZXVDCzmRxtpgdzdnGbz88ZSzcZekfLKKpe8wS4K5Mdb",
  "key30": "4VUpyn89kK7xraUA1qgR7aG1bwgwoKbyp4iAhXHQVvHbhs9UMS4ZVxxFv3EqaZcLpt49mpDhAhDLRTEiu9KdgAn9",
  "key31": "3bXTtp2DB9Psx8HsFdCtjkoDsU1ZhYjkvWqRBTSEQeZUAAeosztK2Gacvoq6ejgXBPE9Zu9vSeoJJ19w6FFs1kiN",
  "key32": "4rsuSoqPsXuRCC8P7taq6g4UUAMkoWaNQ5Ubod9uT1cZWDUzH3Ya3a3fJQdup628LoVRYn1mUjKWHHcthX1B9AW4",
  "key33": "37XzZ8Uxf8MgZpERx9bgaK7bs9wSWSiUxTXbtCfW2hks6NJc7Axz9yBi898YkeFo1ePZmUMU3xjH3PWnCrsQ5CHJ",
  "key34": "4vq4i5CTD6sNrsnaKxYqfvaBiu1J8kvXNquNJteFzHwbHjHhp5LWR3aL31ezLYbc2me5gBiQbkVXNFa7EGUkQLHC",
  "key35": "3cLgW1DQisqCYjd6XcsaiLwd6Fc7jiterdDK32nC5wxChnjhzTMQmQxkDeD1K9hB7zPJojfac7h7p3zQrZK1kfrU",
  "key36": "bii7ABku4ZwAKtBiUU2Y2uTD7mx2kkNcZyLK6MiNWLaSWYNWnD6W5g2w4AkD5UbHh1qA2zcKwZrpZK6LsT4fvCf",
  "key37": "64z3Tv2m57WQqJb5Ty2J4HWGnd5vQjHt6jPDXgkBVmWWSwSCFi8dfhfe84hEQ5GXWAUyKNXLoYrqYeRKbnhJXdFD",
  "key38": "48rt4f2SpS9WmPLYztxneLvsfLprNPDScuCkPmrnQtfhv9aAGG453YMJaczJNT9ofFeFmswRJ3zhDd1np12N1q8L",
  "key39": "5TLZmDgx9bsoXkGea3rRqjVoEuN1TEhn51qUKA8Dm9B5XwZzz9j59CDEu28e4VpdifCe6gXvA4S9U66ykMDS2CTo",
  "key40": "24tPGyRLizCHUHmkVabCWCvd8pU4GoLHGXAccyvksVC8odrc3v8BUMkH8QuVaU9XQ38kLUZZ3FWW8gYMDNrgPHQC",
  "key41": "3K2T8bpuFK57R64DksKVNvuhVTGsUCF764LSsP8wryM43XYjTJ26arcepTDTVCpj6CbtBs6ZrGJkjRUdpVeUczth",
  "key42": "3ANDc2DzoyRwbLVLonQZPhcA4VC5gDHKxtnx18CaYiAJZdtLAQfzTVxiMzE43ykzzv9Gm3KRSXEqJjnfSqjNsMh3",
  "key43": "HUzQctRbcSLVXQxDYpmAWTGXncdtueaZeCM4zcjndtmvszXPnn9GzbkrCbpBLLY68yNoXHyCPQsYHyERZGZEvGF",
  "key44": "3K95mPbv1m6fduomprF3aPjdTUpjS1ru7oY3aJ6fyh8GvgAS1rsSrYxbmB2DLdtHnqHqw5JyXqPHZEFDCFF2B9ve",
  "key45": "87KvLwGfsgTMTt9TN2iEWZKA7HuJZeUcReEkRmbeq2xrMC4ogNz6yYVm9pL6cuSxjmzm45cppBS3q2gkf7T3zQs"
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
