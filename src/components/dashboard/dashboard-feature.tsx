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
    "2f6Wxxuqeab3DcU68N2XS7M5FwsFxamhY9wNE8GLWxJ6gXDARQDwteM6SqkSs2KPbgTqxHRkjbHDC9UvwmexdF4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4opQUo2W7rNh59x1ZiSJDa2RYUa5cHuWwZiLeAVEf1WjW6cFuYXanUxqezG3cqQrJpyBXGRP1HzYpUoVbNewpDti",
  "key1": "4gqbrKGuzEx6k52eC1GByBigP3H8jDrkwwbCH2oA3sT5XC1qtaY9mwwfsmy1kab4h5gX5sP18Yf5J3yGwTpaXTJN",
  "key2": "2z6ddyxTPvgx4GSR5JmW7sU7wHr1Cpg5fGAYmziZ77VPMWW4jCVM8AUCmCmQP2hiXRvqMAk83YHmkqwu781Zqb7R",
  "key3": "4y4qXnyzHb3aW2jHW1Z2rxi7Spx2ecK5ubNUHPthdrN5qbYSFvHxPHCGnKHC1LWkPhDi5VkkTTbDgmmXVzjQ5v3M",
  "key4": "4fyHLPkpCUWwjr3iyMPf8dL3Se1uCvF7GorySA4X2abJvGRu7yKdMXPtLPxTsRkDX5KK4yyhGHirkP7xjpaApKYV",
  "key5": "65UTj4AMKtcU85SRkXQry4Fry4PD8H8WSqh1AwxH3tutNUnQ9nrUywrCHV8rt32X5kcWYVrtJgGRLFDqstdVztXu",
  "key6": "2VTcNpqbYnS19WprWaGUzmp4jy4HBq69sX7JMoNXQwNDWMEL9o7u5QYENpNMvX3zefKSTrxKYEcBgKyVBwRrBXGX",
  "key7": "4YLUG9zkDpYwnX7LvCqAKiTXpDCv6VYtubv9LL797MTxSuQ6U2b9j6i4U53LfTVsZDiJ3t16w7qand9n8KmZicnU",
  "key8": "4WnyTRErsShfzmFUe5w452HU4xNeYJhkd4PQAT1j577aeeM1yXY3MN3A7g6RFQzHoPe9mbL6D13dNVwboDiPASiD",
  "key9": "3HiMt3nmgsTxYqjyivtpd8uPoJobVBP1MTcNDb1dYSddcrK7ReEv4REDx2KRk3DcQQuLqjSV5tjkZ9JAHVrLKcfA",
  "key10": "3qUrjuMVoY28XsmPA4bFZUPknW8NoxTmqac7tVmzo5qB2qhKVmZ2595H29bwsZgTZeeSD2Z5yNMcaPmtbcvx4tCv",
  "key11": "2LW8Nkhd4PCUYTPLnU3HeKZzWjS7rFuz4u4Ffwy4EqdLeQxGo3LikbQahsAfMirkw6KUH2NorP17tn4qSjXmEzCF",
  "key12": "534Fo4pSZf7Egkhg7q7bC6RMNHfmRTfewA8Xo82MqcVbnuE7aYrMQuAwkFXPXuEbWNnVYCtBXcSXJQejpuVWPEbZ",
  "key13": "3w5qv5WR4FZjVHs8mTEZpMiK7rjg6rX7Q1759PXfJcK2n2PmZhvPafaRTm6CZyEcZaCKmE8YmDgAnzdkzHzHjpc2",
  "key14": "3efjmLM8YE7Rszb2jXoE7posWVfiyLoZMFdV9F7LZFWxUC8quniUgGnFoE2zaqhCUqCQB1MNcFENdBdntkywRmGF",
  "key15": "3DDpPbu8acTjHbiRfCJT1aypduTUXvjfwFX13zvGPYq7UU6VBtE9TBAczdzqKfSEd7m3f6f2G5DKakoBGUuQ1uBQ",
  "key16": "5ifGpjdXNtubCn7UyD4vqMJamY4UkGQh1PyuKuVn32YpzLoYVLn2o4McZSStCds3khzDiHFa6cZ6dH2TpHivKqJR",
  "key17": "4ywaZ1GPhdTbde3gydWjZKCKhAzcUpMUHCpTw18i4JFjPbHwH4cyndBL2p1fGpdqFQV7PA9jgMYrCqynRvTzTYtS",
  "key18": "544tFwANqXmurPZjccbniyU4hXwdeM8BAWLTRckHCfvAQyqWvKMM9Ax8FHaijRdiTgS6XjMCxzPP1zMVuxA2skh2",
  "key19": "5g3pv7xGreYY6ajcT6NpqkYpYM6fmRxZdWaCr6htgqwqt3wbxkbSV5A5DPsjyPHsRTqRe3VSG7X4D2YuT1k5ZHvd",
  "key20": "25kfh7yGS52VnebDy2gg8N1poQeWTk2pUnWmARtcFnXmgqmtYPa4QQsU1GMDQnJR7qfnaQneFpayjpXVRzVz4jyz",
  "key21": "63Z9jvgLRBHoob8xWjF8iauGb6dxs9wtHpVx2RggWaRsgAgD9vdv352JuHtPZLAxGYqjzLwLUELP7En6ojX2koXv",
  "key22": "wB67i2btwnY3CGHiyk4nZkLtJBTVWD7Qy1uPNLr9ebKokvfRWaUznAf9sTbkxP4UxFVVS5i8khUawKuRaAEKfeg",
  "key23": "5FCG6qy9wNtUiHpeis7pAHyQWp7dBpVQxEsZcytpT4jcX3rFXrHYyiimdjjaCtGkmHaFQDtcU9MWkPxB6pYXofit",
  "key24": "36mfa9jZz3k459nq4C72Hr4YZXhMTnQdsQBQCfUaX79tkHhRkk5RV5qKKNZvuV9FwiD2hb2JKKVMha7jwvctWZad",
  "key25": "2KE6iNYcuqRxfWx2SJvWJURSkQUYhkoDo4rZu6iRerHNaE2Hkg7pRhqbd5qmtaWWYysfKo136fcY2ge2ZMUSbfoN",
  "key26": "26bzuCvEEvs8Vn1s2PJbrEKXhpgmucRK6heGK6hhNenHtrVpuBAGUojDXXxWQpynRhqe7WCiFo2nU7CxtNqQG3Sh",
  "key27": "2EBRUL46PBTH4NfoutgmwQWRLruvumQLqQ6PK3XNXxnb1fk4hvWMRaNb2fVRsumYJXTWakbKmmQtnTUSkbw4rjL6",
  "key28": "5e1f9pPzC1UGV5Qj4XZBhadCd5NzmVKuME6fWU3aWPcficZwBCyTP7HPkf1Dgga6rAQxMXVVLMFU5P5tgL1xoK2W",
  "key29": "4qPW1jpBNGdpbJiLZxzzkxvfbMT7kpqgoCJarM4S8G3MqRKgneD9xipubimQDCiipCQxMaKjT7VgYMM22LmydVYG",
  "key30": "aYpByLY8jFSgt6oKgL1mKhUUNV1g9bLJD9aJZ7z9GpmLhugcLzn1CjqbDW71aqn3EXCGmLeMuGbqxezfvfBFTJK",
  "key31": "3NdDcX7DSc7QcbneUqUi8HXaayzhG3XntyZUqKEPaTY1FRbvzzSbdnRczRBfUAsXdZM1TKmowS46h3cugPr5eBUq",
  "key32": "4BpG3g3Gw1nNZg68KVrLhyXLQkhv5z4jzEhcZzTScXaz9VmWXXQUqpPdA3jSi8EmKTeYXHXeeY7eSjsrxhLhfrVS",
  "key33": "57QA8nQpaqDUwybRFe79VJSM2ePtFJaDdwwPwa4D8KUcGBbJ8gYd6DCngq6ztEBUxJJwe15qqA6vX4dBEUnrepb1",
  "key34": "LpTEaTT4jsTNvzgrA1DwvUuwrNp6T2f9kun9fAbX8dsCESSMwVyGPX7UG6YfmhYEgJWNhua5oJuJvKHy7EuXPWs",
  "key35": "5ZKNSuLoM6uRs3HBYS8PRbhtcbUTspWzScXP25UkA44pgVoAMruJUunhbKR5k1LE6JpuHwnY4DUkt3BDiL6rzUW6",
  "key36": "2QhggermL4Ag3cbeaQTXtSwMwedPYVoC9Jo9cqJKN44kxcq2gqTQXszSxxBgAUYTTdCDcPiG4rkSREwosUMyWJ6X",
  "key37": "61Th8o9TrZAgrqGpcB5WWDD3fsEMHgoR4a2NkcSf1qQ4V2h5W9qCZeGuVvDhazQ6eGjkYgAYHqsLPAh6YGPPcMp4",
  "key38": "23WxhVNxosYqukk7W11Rb9xDYvfycDpc1HwKz79ZP6hXSnDm85zBhypVoUw23zX5zkUX4nZV4CBHYeox2J9Y5psF",
  "key39": "5hHUBHDhZ2xJ4ZpbP2yWQqnWHZJMQvHVBNTd5ouj3qRvCMuZDCbEKxEZpKu6mYD3412xsm2vKh6MD7x6jDsnjY4V",
  "key40": "27XvwxpPfpzSezwaW6sfpxqGyRiMCLhz4Ra8vhmqjR4EMiUBL27BNVX5iH1WkWREBxPXv5rYgpMDD9XRHGnef5pP",
  "key41": "38m9RjR5cc1v8eo5KcaE4y9xFZ33wb4HPJaQSMhgrdJC78cpE3zybY6wFfYJv73NuAxMFdfD7mmbMGcGzZezZV9w",
  "key42": "5sQY2w52e2DawAy6onJrjKeuC7W8S1n2fy7S3WPjHxnPtho41ybuz9RwAdF63XQ9MprADTrTSUkVHASBPbhzX2dy",
  "key43": "64spPBjbNnCjie1L5mP4Ck3E5LEweGf2gQMqWPaPaJwuQMKrgXCGUHMSkhuDiuu94wxibGuQT1gMiJPfdW6jDgN8",
  "key44": "3RxtkQba2GKU3aawDg4uVtAfk7zFJc8B2J6YHgqr1c6St2aVBWjT2B1damPLcdYCjJiDRB6v9HXQB3J5oMqkfytK",
  "key45": "RVnuzpsYerqHcZoVC6uF9kkYjoDENmCt3G1kJ3PLoXg3oYbcafqXcq6XKmp3LKsfpt2dLvq8YYWQazFmBVi6kUV",
  "key46": "4D5V7n1pLba4VedJSapUWyCQsPknZs6m3GUNhRPhnH4jgCF2Ni7Y2QFwSWufyji657akzszjjhmpqovHyqVgY8uB",
  "key47": "2RKHwuLmq6RPgFWdk93PEu7VHf7EoDT6B1sMAevUoABYPGZSbbdqziG9e31C5F2pxv18bYqt2rDg18kSLTgesrTh"
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
