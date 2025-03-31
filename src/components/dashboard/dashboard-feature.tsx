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
    "3c9ockAGEMgTAvSTcdes7fcTdNmwK2Eau7Fda4rp1nogTaDuS26uJriDywzTb67eWzFwmM2Js5fmipdRhqaJAXBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jH8G1TjuA1wozdimUVNToTpE4FbrQ9kvZCXshgR8SvGhMtpwiwVPcyV6g8aMQkcuYhgguWfiH8oBrdSPRnswbBi",
  "key1": "amDg5pAzuuM7WCLsuCpKuEXk1YcKfejb1XkSzrkQCHUSrYywgYJjUox5UDwFKrKbBjX6BZSubwihppYTiS6RGmJ",
  "key2": "4GSgPacoyix4k8nAig7er8kjpCWpCXxHzJeeqfAaeFhvoUVgPZNhkNVua1hbuMJ2b2BoL793DhJZaY34tScmHQDh",
  "key3": "2th7r6egSzb2eY4hD9WjJAdD9rWWXHz1APpkJh9ckDPBv9SBvtAJMEW1HafnHK7zHud5KdraFq2zA9ZGivzRvtUx",
  "key4": "5Jme2bpsepys9KQSfNBYCzjuJz1AGTXF1H3c58R2WUx8Po9NQg6arxh72fvuTUVdarS97kACogh6F6xR39urkSi",
  "key5": "RPT38CPBgrngBRyg96N5qcuHLSUdyK5wYttC9f29Yxgf8vxJ56rrT5bV49nk4BUMJbYioRFjtZy5FKs8wmS9V5e",
  "key6": "4zL8UNW77jRJm1fvU1evhGBjAX1fUc1S5Fk7USyJP8kjdiJpRGkJuzxrGRXwHgzXLY4wQnhbqFeR7us5qP1p69g7",
  "key7": "2r6urWQShoaZyrkFKXDCbQLAh3Vc5kQ7YX7cnN6f2QyYRvTZ3NL5YioaDYcRSfbVKDPtmdY4qRhxzJfYKjKsgfrt",
  "key8": "2cMsztKcxKzMiLRWLQ8PyVejmYqRC2f3kiz37ZNNHQHGt9iNY4G8pJz6V127TYxCZDHbhdnvsDw2cz4JBjipqdG6",
  "key9": "4a9afESKz9REZytoa9Zi3VXG8Y5TbTp8R9cJey3ta4nAxkrwKQBmN8e6hjHGTkCHTFGqp7dFsVaooFRfAfoSrRCm",
  "key10": "5hdpDCrasp6hmza1oN6umfVQWWtfpj628EvqsH21dhnmWcKfdjgE7xfsE6MUgTkTBwNWUJuYCnaNuvqRxddhKtDV",
  "key11": "SQqMQcvSnomjftveAGtLGoayFDaWm9rnuAEaX9TXRAXxsKF2Jh4mz9mQfRMAzmr6f71UorrCLt8kHGj6AiAqVjS",
  "key12": "29Xsx2BmuYAjWVgegRH5uy5DLwTVu1EY1AZjJGFWHcha6YsMPCMbjoiyfXf2zSxRMzrZvLeRthHygnFBxi6udL2b",
  "key13": "FSgVK9bMwBS2XMbEpD9B8duTkZWjaXdDdnSGuayhnYxH6ynHxCED7pibhKG6tMfyeSELXvVnotRH6yZqC2vMGsr",
  "key14": "3CD6hBLLJYLTFz8jQ81zQtQBgiRyaYXVC6fnPN2t7YXAmGZQbrDyTbupmTW7w9bnVC41kYZ9AN3WXi4nGj536bUM",
  "key15": "5QpYY8QhZirRDvFaCvvKgFp2hLfvugioFHxo43NB6LdM3bnBBjYFg2QchSpC72iDhxCTvCRbCmTwFB3A9BJaP1k7",
  "key16": "5n9VwFcq5s1vESwajN45N9BxCr9V8hpYqgzJxf7izPorfpuitaxRNT2J3BfkhiFY7QSMafC4fKkbVpVFnwZiD1uC",
  "key17": "5hWSoKXS6KydGFq7C3zFioVBAwi97PDNLeqT66bZF7VU6CsFSM53EPtVwEZ9Rabw2QzQueXbT8NHZcFLjPDmgSiX",
  "key18": "471vAmNsTRGGf1fAHG8R6HmoGrureXDeRbQFCSTSXMBFSt52a3q26MbZUT2WvtqvAJNqZ8nETCfDtnfJaJW5USHh",
  "key19": "2rxDU2JaZrQoyw2xQ29fTkenaHB8Nht5dQ1ZUHbxziJQFX1ZCL1EQF3sG777zNqaYsnM7y5xPX7jKXunJ3yszLPT",
  "key20": "5jUuWrk2R9G9HmNDXcHmizdTihCFTiD8rQttpn3xmZDiokvV8QF338LWEKuoJh2E17ERjHZZCtgZo2eT9nph4z6c",
  "key21": "3g2qTMyTs8puHidJJ7JQGib1NjGBLk8ciMoPNAADWJBxQYK1pYNxLNp2v7Sq8B854ifHoHTUooTB4fNM9CVi1XPG",
  "key22": "cU59hKwv7yZ6HZoiQECNpQcJgwXDWWbb8EP2Lxm9WD6opK65xPuVRVb23j3R2e8vSh2euuHxymmZa1BVwWKjixn",
  "key23": "2cFQzWLUuNj93f4fa72kZoTyx1zZi4cSkHAbHYzmZhtPhszbxgtvyRF8AaH47BcHgA6qQms7tpgDb6HV9oXNLf8K",
  "key24": "YGU4x1SujnY3J4XnJqi5d2Rs9QRA5SXS3uEx7AafvS6A9vS5EXuinys1knFYFc7cCvN2Khe2hRe7T2hWwXQzv27",
  "key25": "5AKv6EeMMppZE1QhPTyvb8F22gxgnZbjV5SKfPpDW1unGPaDXJgBTZ7Qgna6pgMQxuST4CYCpj4GcapHkprh6VUi",
  "key26": "tRgHyd39MqJyUwduWF6NrpUiivvBp3WowFNnCGBD8va3rXCYRTnh6Z9PCXaGcnFGFoiSSiDQZqckM8gJ4X6tGQU",
  "key27": "31PDMTWjPeN14zernYQwYkoBeNHYhpkuXJ34d5DxrREnJE17cFEGw6mwP4hejo4yr5EV8gJwN68nkgTVRHNG3tEN",
  "key28": "5QqHaVSwmQ2zGxEMaDK63VwjbCoyPa2fKsnQyH5KjqaYdNzpL8KAzwgVSxABrxfqzoSyAasu7gt3CPtf4MhPMeMs",
  "key29": "5TiFSuSAEVisyVs3amEuaTscuZezkDqi8jgRnAtEJaTdBTrdPUKCVaVWSEVijiHWF5LwA2LH4vMBruBYpawqbZxC",
  "key30": "4wfZvH6qiK6XcrzWW2deZH7YAMMehhDL5ye1HMc2eBpK2M2hSMkiazPp6dhtp9f5Mnjindj9Re9WerwcoKf249aj",
  "key31": "59xXCnFZ6JHVyVP5MneQzFGys2farUSvt1fHDph9tkUBELuXJoHz2mwcu94F1GtGRRDCmngm7bWudnFUCD5AtFLM",
  "key32": "5nuQJUiTqGXNAgXMFE4AV2A55yKWcUnEXMc2SS45PQhBjmfPw6HjaZKUy4J36pSP6yd5d2aQRp6WjwS8nPAPR6dv",
  "key33": "2q19srB8vmFviGm4L9mPdiU7qtEZHaBrpzHUYPVURZf9PhAUJAg9T5o8KBuHv1qd4uR14Dprz6i9FW49pQ2dowxJ",
  "key34": "3teXKQj1VGBPh1K3H8VbTX6wBXu1sNoxGA9CQTqo9pCVTKYJgeBdRHYAGXPd1at5cqjchSQaD3tp1uwSHCJJh4ZN",
  "key35": "4rVntjP8sqNAskLqPiLzBYn4oycbBqXsKa9Xf3eXTGLxgd21efAPQ5vk7nUAJdZgcqQCJuMBpzec9yjrP41mVGK6",
  "key36": "5d3AZ3izfhHuiCJHZz8Z3CqoanR7ouYZ2F8XgZEAtXtirVdQSEWPHGPa9e6JfFuxEyzWVdA65gQMnwSkM5Q4sdLF",
  "key37": "2ufTV36WzGTNL23e5kHefPirNxLSCt1LmfnFCQ4Hejq4V1aHRJKwRfL2AQPGtF33geqMgR9eybZAQebeVaFZa6Xf",
  "key38": "3UoxiWUH14pXKkSbYcCPTmr9bgTCsLuquBApGPeZ1znRHoZPriA5a23vfrSJ7CjuweadiZ8RhgyVk4mVrV6DiNRq"
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
