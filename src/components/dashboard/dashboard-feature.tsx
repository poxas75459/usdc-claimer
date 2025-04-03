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
    "ubu34SzZ78YfXxbSKC9wsDpDKSCVTxaqq8ee35hhcuWMFcvTm8mjQFic4AuQB1BT5T9gEd8FoYSZnWv6L3qqMou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKSSg5Q1RtoyNuUURd69AoY8s6a5byHorCFiLcU4SNKFsfMHVyvPMsoaUgYvf72TFz3BdHe7xQKKuemnkxWeMe8",
  "key1": "4wvb8fHmgK8PFxByBDLW1WtfevypRfZFYyNiTAxnzsnti6KtUtQBhq4pg1mgj6CMeT2v4FHyHH9bjVK5Qx7nPyoY",
  "key2": "2sDHpj2fDK4PDZxZb3hhQjGHd65QDrf7pAEhVSKiihLeF3MjWpNvf2kjUHFnc6RwjAjMsXKx25oVFxZH5P9CUUqv",
  "key3": "Eyaw3v7rgTX87iMCz8TXhzPGQYnhoUWakYQjLvKMzDEyKEbhUboxN5v6qGZoU5mHNNDT4B5q476rCBK21CybDuc",
  "key4": "4EZM537CXGzxLyfV4SXQ13yCZ4UAJ5VwAAWzT3sWbChENEkn3MDd2ZRHvwos6e8nby8bsgnCmdQLAHCw4fHF1zzL",
  "key5": "RyAYMu4Fm1zWch9F5YbY5U39bqkfus5BZtaqBRWpq2d3ziEFugnh9FjFDKEJnBdGeTwhZKfVYBrK3LxLqe4E8ac",
  "key6": "21XtCai74z3Vv4JkNfkEm81bxhTxhcHMNnUptvzB2d4BwTv7s41GwjAjd2VRvAnhBNH1yBq35kvkfhNn9i3WiADf",
  "key7": "5Y5XhhLW2qcxcZeiM46CfRRPc7pzeHbrVRVA5FFthZ76Gb8HqVVxLfa1fbtzaFzBHofUWfwDw3DioobXswSsmMbe",
  "key8": "7KhMkCEwncrbYtoxGyveSWnMjsaA96rzEtJD1FK8fpwu3WfkdKLT5doUwuSPRag82caKZoSSbzEHxBBLZ4bJQcZ",
  "key9": "62fVuqsvn9twqzGCDohgNPLmJW4vEnLK9p4LkFEu5X4crBLafUdiWam4QiuxT5Fz6ykGQYDNa3YJNMSrkg6kcAJ1",
  "key10": "2qSM9Zobk9srzMnu3xyyfGVrnS7TheSLm5rBQBR6oTrXqehpikVaLBKtsXih7iT6nZzTa5bCzyYEa2WoPjRq6U69",
  "key11": "3qRxbxdDqWecKmqSUqNhmescjksWK4ACj1Htd5sxJFhb7oPsPnv2ehoHZYfriZ3Sf4Uk4vWJa1Rmo258W8xee6JC",
  "key12": "3gbPoBgv2LxVKs3QNYrjECQAzYQHSrmiHbkF3Finq9Y9veFr6WG1pgY53m3vSosi5TpZvjvUdwjWY2bu9Fa9LA5F",
  "key13": "4iyKkPVU74AdvtsYf91vG4aoBX93PFR8j8XH7kaJSJGgfmGL4aEEfha7YRavTk94txyoNguHgftL8CgjJzt9dFre",
  "key14": "2CDZ1dQDkwgUywwxng3XRb2VAnkjuzvVZL9iqmcRNdk1x3n4tRLVMmWjjZuWvtXBX4DvkncMdQWQHt9hMcWJeEJW",
  "key15": "3KvMoPk7eVH7YiJ82YGNkf718gy88ZLvLk1RdHrAmp3WHZ1TMaLGYs5fiSYzECkkjgjAzcvijAnLnEzC5AtU7YFW",
  "key16": "66YK3vzx2RCCqBgoSRW1pMfyUNBSFgCtSd3AD36w2kmdbWYbLzKwYPTnU2GgTCQGmmJ21Y9CNj587Ga3iYUiXDfU",
  "key17": "2cgp7ZspriGNfQUUX2MiQp8Nu5C3WFD4tqe4EH49wuLnuXzRpQeY5wifqe5GR3B4y7T1q9SiCGtJawndp2aFRdzY",
  "key18": "KreWe1p5qFKiJnaVAdyt8BGzPB9EG5rKJNGC8TAVnbBnaKfvfLgrqe553RUKdDpR3pqwHNbhy54ST1K4vpoZULs",
  "key19": "3nzDF77DAhofaAiV9pdfaodpRYBTss8o2C3YmJYUCUMmbo6gFednUMa8M2tU6QwskdpkZqtPMAmm6BacFSKi6R1y",
  "key20": "4CPQiPAv8zGeMJezdNJ9hUCDnXTfhzmzxZ7zBGH6CAN8LYJH8zf78vSvMu6Hree8sRtsXz9FaR4jRGFGeKfBfNkR",
  "key21": "5cfAcfKviC5FgPAvZntycdFDHVfAbzy9Pk65CkDDNufkK18NMvunmetZVVUVLi3e2W42W4H5ReUkD6P9W3wokaXt",
  "key22": "2fErqmzASaVRofsrTqKeEeEeeZpUR7RyK1do5QPPXpgzQg9WjVPFMSiuextUbt7vSDniAgvcozjy8942etFZHbm4",
  "key23": "V1WTPmswPKVg2pRqKrdPzsD68L1dy4zoYmXdcmAMJFvFx9Joas1b9uq8YMhJrymSnya6gpXZ5pd5ZpYDqiRPzN8",
  "key24": "63gk6b7dvQYWNvwDKwxUbTiYZwiimk8DKiJ22giX75yNguMGCqnXJrQgmY3Y6iZeHFB3o2t8K2SPrhfdUQxtjRhJ",
  "key25": "5z3xRLRkD4gy3eXP9KK5ykVmPGqP6oezoi2hYfijWp8sqxztQhhztMBvJ2HMRteyUrTJSctEaqXbPekTiQQSNvg",
  "key26": "fbTiHFtDrxmWsmFXnLtjBhHucsW8uHRM4xF8jtfDvCjEb8kAHf6upRygLn7nREPPTVr5Vov37zBjWsG2n5wxzMj",
  "key27": "5HW9ad52mcewCAad8RUqiUiJajPe4FAdkg5muL49RcFUDLM679Vt4LTwvCaqE8RXg5NSjnDu7n61Njy7Svev9aCh",
  "key28": "2KgJw7UFMn2wzjg4tAuAkK6i5qhNnHrf8VktwyjUy7kzAJcGvKJZggJtNkz3cXtrKpanwVQ13cG9YkkHtPTbQYWU",
  "key29": "znEUqLAVGUCdjHMdoUxzL1mHDFcnZoaJPzkRxnKFPNg3VXdjg1MoAnshRnobHunXG1FtaYndpeS6PxPfhbrHJjh",
  "key30": "2De6UU4uaGHzXYmQudCwbsG4xk28VsP5FjwUzz5ZhPZqU9cSHumJQkuZe3xcdi2C9btwhsURb7odWgtuoU3ZAa2i"
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
