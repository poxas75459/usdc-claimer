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
    "27tR3eS5qgYm1ezxQ6iUUWuUmzk5vmkzWzr7o7xWW6RfX9edWwY4tUh27Wfn3BZpQ3HNesrGkbFvhf82U5fmuCNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62AUA4dCLeBSm5Gb7cY1NDACLsbfV7pen29YzvdYMgQ9mvAUmG2uhbW6jJsuFPVE262gmxsTjxeh86EbHzxEV1Kc",
  "key1": "n3qbKgSTv5KhBR56qKTLDeh8GMwJUummboYkMMjX3neQ2KAjkjKn36dctgbbRPLC1x7FjdtGacC6hLNGFoNKDAA",
  "key2": "3fUKcUZ9AvecTErop2N2WVHhsTHbXVCbhWsAcPsgAt6KveeGqgCL4Qi3NVrjFgf6GcDTA9VYNA8UG58QC64gKCCZ",
  "key3": "5FkqgEXiLiJDzmqbS5nSwDZRKP6BPWYLgrWoFnMLC3CpvHwUJcah9DzqcVvrTejaqEBEEvCApvtVCUb6EMH4d786",
  "key4": "3FDTnEqTgkUsfzqw22E6qTFVsbKeufN9jyiAbHngJ2TBfRk8nMUGqD2XFN3bvCqj1Ss1zNNZYzatVC2hXewkkuNY",
  "key5": "C56xCjy5FR12DQQewuskLXaZxgS9iXexs5634jiXDgohWhHb2DtFh8yaEaV29LKdVX47HzcR2rrodKUyprnoG12",
  "key6": "2zVT7Rckhc1y41sRn5b6zqz9KaCSDd93948rUxtPJmAp2GHhUKbnu6m8aCyDFeKnTJwDJKFRvKkRvLfDkr2VTBfT",
  "key7": "4G4yxv4eVNRfMjrqmggaH1EVEP7kgXZRH6gmBVLnuSybn2XZRLZbxZW36fNWDU2L7yvZGsd31X9ck82resxSXJ7V",
  "key8": "wtVmFmCDhsCUuYKUJnawZi3N6iFeox8BoPv6N2Bf8Xk7X7P7Uv7EwBVuBBKBViiZapZN8y2F4kA58e1LJddW5Bk",
  "key9": "VtTwFoB1wCdWyrCob9KcshWT6tsJfKZrYwHeKkxkhiDNJrLsspQxfgvryLaz81ZzFdxGKav8p6M4b7DktY19SVq",
  "key10": "67aKwHMX9BzvoNMPZCTAissLtdTjpJ1fVNwKoAJZGMq7sanPf98XPSidM7zzjmRHVqpXMdHWzeEuJDx3yXR3ji5x",
  "key11": "3CmkRKHh6XnPo3R9pqHMT6GaYxpVR4MsWBDHkHqNrvfwvxNyT4dgzLNErV1WZTNyMp5XB5mpD2Ei8RmUEEYLHVyT",
  "key12": "66abxV85zw8EfCkrHSpigwVvGDLYeakt2xZ7SYkjVjWvuqpTJFwzwCiNWjAgi9BH8usPMFaTYzfzMQHxCYK3i6Ki",
  "key13": "2a8wkssKRfPRcU7NWKq4XFnodyNAdTqfdbeSrunKoH3Qs8ku4xHfbLM1o28gyCqvUCpSNH5gU3GswYPMtzdAWBik",
  "key14": "cEt7sFuyURxo2XxUVBxJJrJ2pd3hDYQT1g8BSTQSnnkBXYAX9MmLtEcRrCrE2JUR84UT27GCicpzUx93exdeYqQ",
  "key15": "2BvnimDg63D871iJM29E5YBDKkd5QjqFpq7LuMD8kCnjNZXjiUweP6QE8pyvSFZEkaSHLTducHQp4tNArv4gXHUR",
  "key16": "3jZg4oWmio2KcoYnd9xTcU9hUbxtWHsNg218vq7Fr8V5RobEnUf8F2sPAiVPtNSprfZyhC1NZpzrY65PJsSV2K1a",
  "key17": "4XZZF8MNkboe7m33zEMxJcH5yH3FirDHkBKGevj2WK1BwgTCbsRRdn2wb7o2Nez52ZTtue8oaMoynSohk7rg4ERR",
  "key18": "S6Nh1vkkw4rQS2ezkiWKdr8rpFMYF2zfWDJXjPt4jRz85QL25iDNxbGmUrRA4gdv12nD9oVGRkmx25pzVz2HpDo",
  "key19": "DUxedS5BGNxKPrPvJBY8aiQHsqkmEGC411w8tLKfUZiDtPXSX5U2pRgVd6WmqKLkvQTnMZJ5SSFvy44dmTPBjDU",
  "key20": "37NPSjKpXmfSNgENWT6dZnUED55K58yUQWxoD4XWnaETd5gY9y2EMoAD3ZRueVsu1fHtY1a3rd7sQbMyGLZqDDbG",
  "key21": "5jtmbzYhgxwuFoLW3tkHcEzcgkTrB9r7CXknFTDVoMDDj3MzhJASAhc6Mb8kDcw7YaV1UgzJrstf6Z3LTHVSZJPQ",
  "key22": "5YUQxtfmzuWBbTEbWSeBZq1Sfymo42FC5rRiadUbHXqGMGKkBo8NTrsd91z8hmmu9PXdqKpCBtZzuSzNaAdgPHRZ",
  "key23": "4TGhQyFyBUUNsqFkwJJJ9tpqFnGjWavKK2kfAroMuYYTP9WxmrdikFcuQKBfXBzNwr4qWYCs1fcdVxY4TwDb6qE5",
  "key24": "4P5v79piiGiHdmWxNVTTmi9nyXSJQSXExokMrsxXzbRgGXNhoFX9Du6kfLGEY6Siddk7M7PTQTQvph75iURWg8QC",
  "key25": "46vckLPLs3LTnYYMSf5cNEsjkDfnBdYcqpwp4pcLGv68Q1e8zpVDVXeovKTmDqijru2VMm9wZG7JfA5VCyKQVExw",
  "key26": "2WsBkYqBBRVzQe65bmSq7WMcMtMEimGhmumqSuJCUB2Dd7QX2ov9GRrpZCPstFUUWaKjWDUQnAKjaZCWGEjmqtT3",
  "key27": "4MmgXAUiY4gStLZ9tSfUniJHTzgfbZmMbfDQHsKVBxk6qgfpEEixn89XKEhHT6pGgVZq4vKhHenW44WQ2oWhj8Vh",
  "key28": "4U2jRD5riiWcjWmNcoDJSh5Bg8Q1JMAJCmAshe1mYyeXeKgwc7MdfH76H4Nzq5PJzquyxg98EVvTi71yv27QEPs2",
  "key29": "2oSryoxv3WnW3ZfNfRP9QhTb2hy1RUeCEZbR2NAVPUKtB9fmpkdbRTxVUDVxXhNKwBLfxuV2adHo56vRnqgzYztm",
  "key30": "5HSYZymdinDk2xyMohCPkAtJztWjjZZBLYHJNrJUNDGQ2FKJzTGHyZaCUr1EuaCowNTAhbxhRYDQcriwa28Es6NL",
  "key31": "5T9eAh6kswBeCdDfvFupoP6HnxrnCx1h2eibjFkVXQ7wXjGcVCP9n5pZu33XqfYsaUBM4eAysAjA2hB36YnG8Y1o",
  "key32": "Z78YqVTuAJGfyDT4X5h9twDpJQfUMrsTCmczeQyJ2mPozcDjVoNbQaovuuG4zjNFZghCsj621tyik6B1wX7cdh1",
  "key33": "37X12WAahWXqs9p5gyojRCenxxmNfqFfy1MnXbmLWQ5k7RmxbrEfxC9uVaGHsjw5e9dHqThu1joTbzfkKS52Rhig",
  "key34": "2zgauEF2es6ciokz1u3ReXZ8q2xfKNS88Cgdt8Fbu4cnBtvqnVTqhYvT7Pn5mkNvdvcF5b4BAMjKGaKY369YXyon",
  "key35": "2JZjgjm5q8ynE34mSvhMmFqeBqd8P18mZihZhgA4cAwHkSca56Kog4ZJcHwetkMGWJQ3XZyNcnzsxi9x7pYuNhXY",
  "key36": "mSn6ZGwXaNKxppFGVCY1EF7LWCsDPFqPnpXVzUvfCzosKziJSYWcWGW6zbPtzrooHVASSdTNbGr4XxvB7sjtfYi",
  "key37": "4PMZi2q7DypEYfJKWoS7Vk6foZ9nUWse1gkPX7jZToU3eE5cdEcsXzZHdyfwQ83ggDGiHreauRR9nTQFu3uhteNt",
  "key38": "4unUrKDATxbyodyyqRJkXETDDbApBec9WwShc4EtKHVQrjVNp1vGH5GBxcte1EbDEtwZqymhS8SSWm3o6sWesm2Y",
  "key39": "2Td894VpGrvVsQcKZmLReqNirzhDuNsGLkfofez8EwUuQs7CDY9PN1VscGvXYixxfaacNNNHmR5GGeGWoTfCDLe7",
  "key40": "3aCX4UbPbuxT4FhT8FE2EGCv4Yqzj9QD7LACG9AgXvvXp79WeDxZxqSCeuW8HecgzsgdKLzcRWjD34LML4nesU9D",
  "key41": "4hUKdw4HRRy5bNDATeZkn7FV1dS6rvKaY8GzAzhZtwoYTrJ4649k7aJmta4q8tb6b7T4FoVJWWajzM8T7Fz5aayr",
  "key42": "4ojYEErfC6GaVCVDh6p5aueRqSB6sYmcwnF66PhhCjAUfx8ACpbfTyA3nVtRmoD42PprMbus2EkMhuYAF2qv26aH",
  "key43": "54b7QEfAJ1FgRoVTth8KyJhffbdMmQHcJiR65G9Cdg6nYR5UhkAJuNe5h9QUST8uecEuHw3BujGSeNcvhGuMnFFL",
  "key44": "5LPyqfKEsH2BFka9SAAFQEU1CLEjb9prLEyBVUq8u5Qyh1pxRJHKAKJ7YJcqCrjMxq38BTWaJKzHqisgPUQXBBnL",
  "key45": "5WkSiovzwAcm1qvrZsQLntzUP7DR6m9t37oBa11v4m1RRRMMnT2GAdAAHj98mPGXRodDp9pwdTz7S2kyNA4GZuxR",
  "key46": "56x4jicDgyepYCXeEYRBa4JTCVCn34sFfVWptou28PdWHYnVgxWqZekwrC5mZKMrH2CJzk6m36xFYLbDXuG2whg6"
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
