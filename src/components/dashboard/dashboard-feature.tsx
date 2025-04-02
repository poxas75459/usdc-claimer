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
    "ueogjButX8ju9krkwAaCdx9ruoz2fYnATa47bdjzKbpi9HXaVyxtgvp7K2miTXLtpZSx1yoeoMKdJc5GwKgMSuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DSNg3DKUxrLRaPJps9DabAwa8E9JQKZNcmj7V4R9BvzKQrSPHYZkudfnhupfRQevmeic5eDdrTGxoMm6K2HEtmA",
  "key1": "5gWZhorkJge4x33asoVpcSheiyPN6K4CXXHXL1jG9w4RH2o68Kwy1VQwEwNPKmjqwtKC5bAhjHhWDDq4bS5htUkZ",
  "key2": "CCDDk8qjCXdYDKNTg7cnf2AHNSmc4cJVE4ZgHYaMRRneXkd3CjbMo47Qb8Rtk2gPrpSkHBDEckPzkefzN82uGLX",
  "key3": "RRHiSzMJzFJvpXDzfWzhLZTnjUwqxkF2fWajmWfDJwP86uRT9JqRMuiSeb4taJ84BYTWS5uCsRhTLMiRw1jWEAY",
  "key4": "4gRFae39u1FUFAWLRuMBqtuexS8R8mvA1MnJrCVGsimJMjzRtrTHi7YwkH1C1r8wV2uNuihmkPwNBwiKg4fZ145C",
  "key5": "4a6mxeu6kS4o6BAoKk2sD3GfAUPYFg9mSibvexrK3HEgVVo98n2iCxhnF23ogWDFCb5bRH7JRfARPhZjjfLYsZFn",
  "key6": "2zGho75wVUQyLmqimmsvoNmSsBoC6rLuHrsih3GVp5MLaFiHbMY9UrgLmMLebqe2dNXcq9DDrZFxyF4afE5KfdsM",
  "key7": "4FpTuAQYgHxYGMnNj4usYrPp8vrZvUDgBykcRfNz5rAwzrmcKnWJXLACZ1Yh1zV3qGKB2aczEgmeCmVd7eo6fSSy",
  "key8": "22FgRAtPMHg2ajiJfYJNM9TzWXRcf6ePbSm189abXSvujKPx2FsoEs5151cV3ksH2ew1QxVArRyc2sHsv4eTQsg3",
  "key9": "U29VXqoKB23j28ooaJSGst3FCspAV7XWVtxekwRogqKrjEokaeAVWpR3pTWKLfpZzuC1omDx8zHEmTwNMxp11G9",
  "key10": "61CpDpwUmhr1QYHoKw73onD5SKUukUgiCf1o96uSdXa3eZJzpEsR3Sc3dyg8FqFLw5EKvTYvhSJQ9CDJ9qyTtRYu",
  "key11": "2ZdcmqeorC5uuTBqpUUE6tgP77FshSFKQhKyMC3vtENzC4adijskRbWGyEgQC1M8kGiNaAZZifWUH8U4EVfjmF3h",
  "key12": "5S3zXsGSe59xb2yc7KzcqPg7daUqMZAMA5cz4G7T9VBtASwE3CTp9yjbY5UmGZPDojqbPdMtZ2hLJeCawXtuwJp3",
  "key13": "4ZBT48q4pqfwhtT1uvK3NChQju4H7usf8NiLNB4quZJRyZFjVeRVNASwqcYqzbmRvz1Z358Sx3P7oEz9EjXQVA2z",
  "key14": "2DxaQMZLk13E1tCMd8yQi6BQtdYR4cbtqxRgWzVgi7saVqFpQPTQurqzjdy3n4kGqZWX5nAPVfTWxL82hFpfej22",
  "key15": "323P159hhuBktMhW3TzexD94evfvWmVCZb3vNeFvhFUCsUtBw3xCVWpqWkVApDiwkZfFK3KWbQzwSqjLSu6qdqzG",
  "key16": "4G7swbmTqxKFqzoSaL9RH9916op9anBBA7bc2PHt7VUqmRvzgjNbAXLKbqGVec6vpBNeNJ7W9NeQrkdcSrWqe1cU",
  "key17": "3XmQSycHEaJJ4jWhTp1WtqqQwQvBzXKX38qi593qKw3UJoVjbnMJLGV7a5ixkcJ62aNfEebCaJeAHJX8E3ZxZoWo",
  "key18": "636kp9wtU18cWjmh2hPi7PpifD7KhYQ8qBP9iUnu44nDftQSpDSFswtAhC4wfTN3HbqihmmcUo48gDW7fpjCSduB",
  "key19": "5bXEN2CQWZN8scG7tPeYZmRSJiC71FWPkqYxtuMGh6XgRc9Bs1yd75ZJD5SJRjogFfK29UcqaXVDtoM5YzqxG9wz",
  "key20": "38W3AcCREHShFQ7SRMUQA53467jfgZTQD6cDpc9LyrqTnRN5tszM6qG9v6WTmsCWf3WivmQiBSZaSmzsuZ3zkGSV",
  "key21": "5847X81gCGQDkn8iGLEGoGNEgzav1TtoYN2Jmx6vnCySiScVgopbuuLK71sgAopUgavzRd4VfJXVHTWTGeoGYYSR",
  "key22": "65nRzMhTS2NXXhHXbvjsxD2QoSZrQMMVFFapsCuAzDKnm29gcqjKBbr22JYBfhovo12QKhAYmRaAvLo7KnnA8UMN",
  "key23": "CmFh4c98gMx1fc2JgBK9Vhed4BH7kwzMGKZcVzPkgLmx7PXYXUZYAVbdeHAFyLUz1NiqcV61dD7QRYt6wuAfq4t",
  "key24": "22PM9HdkXdXMj35jnYKfLJFMgK1RagvzUJnLoDPiUd7Jzw9nN85MWSGTHJZJoZMKGkBSADu3wVxp4JepoChe9e7j",
  "key25": "4M9faGgZq7oEGsJhhQADPuMLjDJA4DzEGCneVbdR9dcsTw8g7zggy2jeX7gfn5E2WbY16ucWmqRPVBX7JwWa5pD8",
  "key26": "3RShFFbvRQJPvBL511ytY1FtNQWsKWRJYQ1qAHRgG4ZW2hmahEvND8fZ6jChSsUr4dzqJHzm7wsvWudLxoAV48hi",
  "key27": "2GYAK2431YxTDGnDL1L5ovZhrVbgnoEPumXcAG4u1SU9EhszvrSCTXaMpfMjS2rb4ARPgHFzRnDram6rDnj2HtPZ",
  "key28": "2Vw5c1FB1XTtx87ZoQD81kMrpbZ6Xn4gm8JFAwqYzMGJCMBnukWWgFMZjrir2m8xfEGdT1miP9vrDjoqb4it4Srx",
  "key29": "5N21FwTZBAGgSAX7dV89r4kHArsumc8GSMjRp3mwAbPqAxk9v7ncDnLexMQ7cDQTaquJ2M3jRcQchJQ9uBLHnEBs",
  "key30": "5QN7xxA2FwfCwcPtJhQa7uuML9JiBx1tucRcjWJFTLjmfyxJZZDTiZBQEKdvyqmX23QXZAYZUWTHrMQUpMvzt9Td",
  "key31": "4Y94Y5ojWzAXPhTPsdqVFUaEvQQvmvU71nf8WvwcR2HhWh2exazrJ4ZN6EM5FzyyBPBQZHnuUWAoNzxKjssUJVYA",
  "key32": "3Ct7jmQPCbKq3seuquDUersGnRM7Jjt1bzXAaFw58C9LdgEbaoARCn8vyUd6wSxvSxrXv6mMrXTBxCed8E7UqoPS",
  "key33": "JbAB58otZ4yPgVeRes3nppA54e1c2Qd4cR27YQ1X1uhVSiWVucG5FYXxmK7mG18Y9dww9GvYQaWMo4yKAPvgFas",
  "key34": "5mJusafbmc5bPb8xWr3eEFNeYExiVa8jUXhgRRQcZBWDCLKWKoojvEhDGZcpFp2viWDtiyAff19ya16Yzid1vKaK",
  "key35": "frZnDurYvwAt5QPd9UdGscZT9fmM7aKDNqWUXxCtABG8bGeD4Hdgosj8rqMB8uBBWbHpEwfdHTNfZdx6R3o96Qj",
  "key36": "32u2qx8iNjT1ErAXy9gqtTkkMEmcGjdxTJkpVkKp2UUPcPBBdSK14Yyb82eUvvRcCHnn6s4VKpyiijmxXaDuWsto",
  "key37": "3bD67kJeisv5V3aCFTEx3icLbqYdb5UZYoZMJvZp26CYKZ5QwoJF7cpDypNCE64SBtvyzZNdMAVU5rcCijWotTBC",
  "key38": "5F84wyuP2qioQRYxyR8EXQyCCbUjG5v9Wgbnco6izynhToMCSwAPrJNLmcGmqaiWeVvsyu9o4yRnhtZ4WXw1jnzD",
  "key39": "4JugqwQ3UhzTmupwjeYfoZij4DNkBbT7SAeCW4Bh4m2Fh9w88y8JTVTMCVGWB78oS7BNmzYsahbrg149nQncLMdK",
  "key40": "4CEeWMc4W7H7hsvXPyNNWMKcVEmvsY4BZjdwkRA6WUiS7gdRvBQoZizVuwqo8qUWeCA8uDZ5dMXeapbJy9QLmvkJ"
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
