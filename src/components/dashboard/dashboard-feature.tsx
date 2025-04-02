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
    "4g5ebG952t5etRtEsK4hzfFbL5urWb3KPe48LPyiCspkqRTdg1trRBZJrhQ8cQ2TY8tr6151ozKWZ53JsMTdd7JS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38hF9AWJFMXAUGGp2KtSqsHyQyNqGhMRtzBBNXrKTPNCWMRi8nhyh5rPL12tSQhZ1vZmQcVJqYSMz7W9n9a3sM3q",
  "key1": "5qDd5Fsje7TgX2FETGaPHSiRwfWxKhZcq3Tiktxr6jQLEdVpb9t13vpQ4MX1KuDLZemcSiPE5HonHZTsBdPy5ZWq",
  "key2": "5z8GnWgXFr7vZTHkc5MPRNpXCuF4hnyCXThgmeVp72s7Uhu6LEKYkFfoEwKyS1hAMVK4uDHjgDqkD5uGPEjTEtfY",
  "key3": "3yLDBZknuAbsH7QD8Hk8pVuy7hFzQHHGpVmXzwhTn2XxQbg4rQfELxLuy7wjwNSSkzSWQyn52d9ncd3k2axDDWFK",
  "key4": "2Ddk9EDUmYxtBLb7C7nS2tDeqv3frrCZTbBKaw4Zy3ku83d3A7vdoh2b3wFtCTyNSbty8cewjCA2nN8ePESmfAwM",
  "key5": "5f4x4m8XS4fXg9wrvm1uQvZEipNxkDuz7JDUEwMcJLhiHaTN1rG8z4VphJ4Rprxa4Sm7LxUZYpFyEwXpq2zfWcia",
  "key6": "39mXXF4JV3HxkSUB6G3fsVBWoed8K2JrLAGkQ2xQiq7MTuYLZercNs88CJf57DNwuSUt9fcoE8UeUqAi3LiK8jyS",
  "key7": "5CLhHN3Ja81S3wJ47ZpEahEAqrdRrcifZcwc1eXTcohqxLXrdvykAs1LyBUwbcv4eGkGKLWk1tBwszZ17P5qkJqz",
  "key8": "5fYMyZaeCyhDcSEmZTWci9tHqBX1emA1qezDoKkkVCr55sMv2v9LoZsTQTx8fe157xAcEr9bB8rU6G4XZswz8QYb",
  "key9": "5jWdT4GskYszpsrQGYryaet8YJ7kdawZDMMsheqXctdWVxda1ktcmq6rJw56m8vNw4DRkAqHGoLHXr4xP7gdd9iN",
  "key10": "SxhBeG83tHrxmzSRnNZNbHn2Ha92MifhAwm5ZaTGiV7Z6G47Kb3JE6jgQCdtW65Z4FZKbZmNrJ6sLx1JzhgQEwj",
  "key11": "2VYmwjzg2tpNj24HPVzLzaXmHjKdHCEargevS7jCwZPV3HUAgZvJYKVVEo7xW8BJvyMHo3tvoimDWfg2ytBHxena",
  "key12": "2Tzt136XvofVUoLXwFHrUQ53yxh1sKN4o1yuHk23xwSb9jGvnK9c9J4SNwQoNfLUYQpdKV5kACtwxoFit9owFgtT",
  "key13": "5VExRzYw4u8n9xUNzpwDzuihHRZXFkqXDqty1enicAsWeQfmJZH8o9AivuE42hAnV3fUvaq1R7HSvmWAH8jaARRi",
  "key14": "2HKTXW6CGSqerr2JPN2jxsxXsh8LoBXZHMYtRRyX6wc8Ge1qdh7M9suPhb4qiZdCmmBAZeQZ4GMpJFZW7p7Ni4Yi",
  "key15": "4ccPX6NrYsxWH5vdX7dxn5dRCbGrsGGUhB6RKK7pYZaM4yo9j6WhLqAVrNrGB8QHYrtUqWeZ3x3juVMjirQ6TTsz",
  "key16": "28dV4HBeFumurwqFqtvePJtv24SAf6im3keFu6XKJ7dwz2w76WrpjipjRXcUDuZq3JuoEZrffD6mpzhCP7suRS74",
  "key17": "3jDZx58N9LY1HzbA2M6Gsg3JdAsLVfs9gHEk7Uv9RuJn7onZTAsKpWiV3GG5TNX7qRq3EZGZ7hWGKcMjGSB3Shk2",
  "key18": "2tzZQZK8PVVQwQdJdqLEZj1fKLqc5LzfdESyrS7ryJSt8uCApZL5YAyeHCVD7A4NqhTsrw5Zdawwp3k1HFqTg1pW",
  "key19": "4jFRSuatXhW5tX81SBB3ephcXR3shtnWahhqREiCMZuNNSVpqKxvp4xcWzzXFeuoryke8qdvjHMnTzhL6QM5vvTK",
  "key20": "4U2ww3sMxG79j4SpozXqDYBfDaUUfiqibHExCpW4qdffjBQbyPEbzLr2HD56dKTW4VsnuQ7ueb5HJ66cTpdYDwHJ",
  "key21": "5wLooPBTGbsuXaaFgmUjhXRVe1tqkGxiHfAoGaojABiAJf7tiAPzHtVwSwQgS6HH8tYScfU6CghkuPnwc2pqS1DJ",
  "key22": "2j9nZaHfHcZzd4YKjQ9HBoGMz8gMAzj1eKwVuQzMaK3vAaaWWtF5sJ63CWYWRuzXA5vVtF5W8r3wN22eSCCw5pbZ",
  "key23": "2axBSJcMBEmUENJNgWWMfxBB5bRSoJHV1TRUkA3ptEzgHbwnEwLrx7qCJNtFPTtqSZenmhPAMHzxWhFjVCXWzySJ",
  "key24": "3FeKkqpsrX1USFuYiiQpJaEHhMSrqiPTXhhBmogBwduLfr6DqaJDAYwUtPfu92P3f5pWFAwA2fU4R2fpUzwAAyxa",
  "key25": "2dSsELmJJR8uMR9YXvnqVtxPUKEi2Vn5RNLSfQEkobayjmriD4sGEEpuhiytzhmPrK66o9Dpf5S6DqccyUq6SAp8",
  "key26": "56LWuAVj7oQ3M6TBYmyPWVUjLBehUkhwvPCDaP3GesFwaPPCK478wVBqGGFnRiHjB5WeLoowCPbE44MidzTDs9t3",
  "key27": "2B7nYmTxCCaSYaDPe8NGpE5ye7gpuNqKwcvvXp274uXW48zEMecLtMeremAaQsAXxuRT47uKU2uNK4qv5UJrsLCK",
  "key28": "5CJM5JJCDYvLdTh26DGWSo651eC2SUwdta966A91vQfjFrHuHPAYNcobioUxwSEjVXhnQSHBMKw7xwLAt4cnqarP",
  "key29": "5A9oijKpewFRdJtAVtzPoZtCu3YszdKcsLHTMh6FAQdbWeCrgE9mP9r8iSvma14rNrKbqk8y5SWwaYqAcCATKVRD",
  "key30": "3PN3hbYCNCZSA3xdSNEgArYwMw1tJw7kqDGDPnojcHaeBicV9DCGr5kCXPxPoXxz1bKaJwaZrt58N1EHvFFzQ8Zf",
  "key31": "y8CY2VGdEMX2kbUgFKCESZFPqg8Aiosu7KxStVuyVv3MXGH8zekmva2YkKxyfRLt8TZzyaPP1iH2FmpTA19xPCc",
  "key32": "523Ej6Ly6bCRVLYUGvUhcTgoeUq8ynYuHAjFNr7duFCp8H1jYHEMjpLsi66fGuuzyxYHbqHj8CLegJ9EpDRSTiwX",
  "key33": "2Fs5R82kbeG3GdoDox9HQ8c76K9PfoqcFGmW2hczLSuvMxW9bsGPbsoBLR2m9cHPZteXLRjtoPgZdo2ZfrHhzg1i",
  "key34": "6NStUysioJw1CZz5cBbBCNQ2e2kvnGMsmZfWQ2SuHBc4s1H3L2839ewejWtHdBbjYajDu45SefVrcx4jdC1ton4",
  "key35": "5CeRsQNxA8heUmUTLgp4UNSjnXUg2aZZ4Es5T7rQYWs9QSdkBVwhzo6pNMNrE1HbTU2GgkWJejHaYQG7XJjE9efW"
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
