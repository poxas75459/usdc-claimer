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
    "4MHCpVuj8rnzJp56KKSSPzynj3tFaDSLQ8K85soDYQWoXsG1f9jJDcPcpSwtc5N21kfTHGxKhrtNztjnDr3s5JTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39JMkoE5z76DtMsnre4GzJ2ctTwaYHR4xhLsP9KmCwxZTc2idbKYruBdQQ48NcB6eqZXy7y6ezKgQkVnaq9iZM7Y",
  "key1": "3NJRPseHKuUDwB4kCZqKsvkX9bzt2oTdCUEKkDCxbtXbkRLuipEtSDNyAtVV4zxqs95Kdm7CkyobYhJv7xu5EBUu",
  "key2": "5HhGfJjFDrj651wEBCczXz11HXPYxsnUBMDLCNmYnPHvtL3mEbUun6fQL5uGT4vqnTn2kDppqtjoKvuEoh4bot9o",
  "key3": "26bNYK3whBzfdHsW7NMA2Pnx4L7G7WLXAqWnVTGPxFeujPibp54g3TZq7shgWQf178Rz44Riy4zzvNW9VPuSWtH3",
  "key4": "4ib63Q8Ra1T664PJ4iFrM81CZdmcA1MgCLRnV4LTPyhs2imVzYWhvkPsU6YFJcnSSHE7ga8rtLEtzviAr73y6ymy",
  "key5": "2rawiF2TVz3hTta6X5G3RpW8VbcbvystmruzLjA4pjkWyJRSKcEFvkxFXix72Fqi49vP2fL4zqWb3MmdQdFuEEZ",
  "key6": "4Nf2GW8DKHRN8iMBYZw3UcPRncAqso7nKfd1H6U22FA8YMz9J7BGu5nTxY3jaYZEZgqnBcNQ91JAnScKfpHNS6rZ",
  "key7": "245TEW8ZX22gWGgAvaGJEtTs4jRFsz3BjxdCJobJ8BoPtBt2ohecJxRgjsZJnFbdshBhnm5FUJM1ypSax34bm2D9",
  "key8": "4s2Dwbw7dUnCTexfmwqa9og4TD3MK4XBRypqf12coGxHcoomDZ4RCp2fmSTBYGgGphj44MSqehEtaPLCikP46bUg",
  "key9": "udiAL2Q8CEg22zDqme91qcAvYZRQVun3fQa8U9CUh7iLXEbp2PbbS7JwQRMTjYTSwrVtUKmxDdfipgd45rgZcs9",
  "key10": "3NAH2HXXDaiihSYfkL8gMLg6gjzxMd4RKFHkwdL3A2ZN5meF2Hix5hNUMdnGrtkSWfF49b2QwmAwV6VHQUR4MYAx",
  "key11": "39GuJNXpifejYmEPtzcMWymFmh6M8Rhxb17gaYcxKbR7bAfmN8tnaVUmV5YARgV2rqXsb6Ai3Gyik9jUsEUAmZ7G",
  "key12": "upRdSHm9B3mKbekfvRnzCcBULGCJjCFpUoxx5ENhFegUdKtdRx8KCooCtgSVaCoAtoLAx618ykxzZx1P2WR5DE6",
  "key13": "AgnsiGkAGXikqm7dV48q8ZLHGhdhx7B1YtScRYHFWjtDWmUhEx8BvxTpZ5UJnneCS8cbknVNDsoWMxdTaiS6BXV",
  "key14": "3iGjingrbJrzK8ytiXww2roCHXYQhqowU6v3RUdMnFkU12eShEngDgKvQqhNeRhd2uFsYKugsLvWTQgfyYz4EDoM",
  "key15": "5YE7Rx2jUe2zN4SVqdxEYEQW6dtpGTHTCpR5NLr35nAp7Ltmi3QNDdQ2LRPNvJ1f1gDo7xKS9759UBHJv5ZZ3ZSq",
  "key16": "2EjeCeq34yzAugDSK4DESeHLEVB1eNdtr6vfXM8Xk6yvtAFdSXN9XtEPWHgESnbnUwJafi79t8S1zjg9U5tU3QNw",
  "key17": "5hwuqsCsUbgjyBR9fWweFuwf6R662ae6nKUmYBue7C9qbYjyoULZqcDf1SXxZEXejKjDtLjsFeSVCHH3xNmGgxvN",
  "key18": "z9VGiVX5do1yLy7ER5AU4rtGnHDZtzhyEVmrG1zEhoLHBVyvnxb4AfZ5EAy6zP46uxq6DwpXBFutMxc5ErSXG3F",
  "key19": "4BZDbe4y5aD97fc64TgoDXXAGhLxjTCiaSWoC9dq8vizvZMCBS6xovhwS2BFaETXREmRvnADXEELMQDQfPpqzF9n",
  "key20": "5yp1KuELFp757WQaVP6tz6cc6j6JXjFqF62gjTbWQqSrWd81MLd7df9YQNKD8yuRnk24hBAiNM7PyT1Qq2rSbqVw",
  "key21": "2ix8xWNSvisSGqhSpsSPw8id6YP1xuVab95osAHaKL2CjZjYsF3LJZxRRUgrPzoWoxZSmoKizXKvZKfkiSoxGp1Y",
  "key22": "3aUFLSdfYoyiFYjUgzjWp4VmsjD5Crk6tPExYgWM66XCXtYBANaFepgQhSWu1rDpWcbpsrykrYp3RskbXYRT54bd",
  "key23": "2ZwiVfcu7KSRtimPkUXU1DAdEL3oFEVemcj9rswjabygNZdaunE7RDnKu8HLnPaiW9f8dvuvaesxN7xgEqEYUgBL",
  "key24": "25JQHhv8kyNXZBw751hyTXB8Yxn3PbniRbmNwQf2rxfNMW2wu9o74KYq6j6jv5qUt3uiJg29bp2pqo4pU4egWuEr",
  "key25": "2GsNK74q9QJ6eDg3ZK8Um7pmas4KVgc175N8frrFvSXVLzRbmtqsc3ZCaxDdKc64EASxqzBHAS5Q131GUS3jaUNg",
  "key26": "HeHGU8CgqyR1x5HQVfzitkuERcq2tFbBdXQLhBbkEsYKLAShdLuBh95VhNquQ6VjXMdLDLrsVQHkEmQfsJMUVNX",
  "key27": "4oem9A377Vs6cC3nzVZbGeXSYtZjKP9tv134wv83DJ23VQJao3zLsNdCZfdXUqnm4jvvw8jFTioB6ve3ghUiac19",
  "key28": "5xDPDxnJPgYa1PwvCbd3cXsrcRrCp3gojQ3vguaxpSzFF57Xko64uuqfdtcWZhUDTB1AhH71E1yyFnb1DRrpkqLS",
  "key29": "3WHgSSGUNrMjEfFtbX7kJSnJ3PRjYhJW7aLA9Bkkh3YK21y6LhEK7a9vXA69UQujBFE5HXPRshXSUVDrDqEgRsMm",
  "key30": "55PiAGjWbQtwYVZB1kAmjcDoPBckDet8QY4YvWycHYdY4Fq6hgybnZ22LB3pznvrqZEQz46KZTXeK7Cb8Q58x4FZ",
  "key31": "2eLzYi8fMi4VQryzAuh1caMVXchCrx6yPHuAsXVWfNsV3c2YoipNUbsBMZ9ybCGH5bgSq8qQtxiKZk5WF38mfuPD",
  "key32": "4KbrawB4tBaDsEzYNf3ZNGM6Mdo3V9gPkqTFxQweCKLFLfCrvTMTUZGVcSLXDqTqU3TtiVgdao6wBJnfALVrauCZ",
  "key33": "3ocDFTL7jMLgZrf2PSNwoWqv3QEZ1d5v9SQUvLvmp7vcg3FxS1CiVxqtDJHivLZ8kvVe1SjEne9t2jwG6tBK1uS5"
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
