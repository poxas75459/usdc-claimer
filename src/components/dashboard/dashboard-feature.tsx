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
    "5oe777Gcfu9jK8VyLkUXcSyfikT5m8rmz1f4MeoP7X6Eeexd3AsE72eGEqgxsFaMqVeG8FSSpQn74gMA5rmyPEF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UU6CeKa4k2qWq6NaVQFa5qVQeM4MTj2gXJ3cZ1PSUfYGHWm9AcpJyeSKEUsHVm2ZSCGou1D5jHMo3TkkR1oNrWL",
  "key1": "55fRxSWQhNW6nd8S8jrHMPBgeMSXuatW6Y9P53KFxrwkygEceK4jjm7rLeWckenxg7RZtkWrt5Wk8eHUaajXujkb",
  "key2": "4FzXBspEpccjgMRdEoe73LgQdSFqnGEVGkJunJ9QxF7XQaXmhf2mSsT3dmEgns1aNjsAEfqxC2gKf4dyEAFLFVXR",
  "key3": "4Xp3zTYxhSEiWpYUL7k8q9xkRDBjqMgPMEc3TRtCnGNh14gqJJs1Hb7P5W7V9DzM87bvXVmZhYqzTFRXPEMQ84ig",
  "key4": "4hpQPv1E1FHesDeRxaMrCyxR491kkSyofWk7MGzzQ8mLFZKGckue2ANFxk4D2zydBFuQAQNuahQfKuQwbWZqFHU1",
  "key5": "RbupXPsen4GHBfs6TWPoZN7v3DqYv8ekQSmmiKYrsrg9F56FYzcZRzF3G4heih8qhjqhj3HbsNeXWhkKMw3CUy5",
  "key6": "zQ8MFD8Dy5BcVwcgVeHNrmZh5FZjGjZ3sgCouhMrbzd6QT2K3R6Faa7WSyJ52tBGS36vSUM7a9u3xw9fRWPp25y",
  "key7": "637SBRRjvzjY8bq8CWt7Fkf4uHgcPitLXeVnAa6QRYCGvCt4DEQCAsraZBkxCLCNFRdtQ2sBPxUaB5QrNmNKUQin",
  "key8": "2E3VGcx7CQZYDZyutFV8WY2nW2AKVW5FwfqPkYbfq1DzZd7iiktaFwSGavtDeZGY9ukdVdszTffBZxHuGCy5C8Xz",
  "key9": "2eRocn4aC6xwsiMLUHfWeGP9eAKv2KX3r3A7DwEb8qAdnwKBFeqxq8yfj6bAwTq3UeABRnwb5ZPf7Y9wHYmYvDr7",
  "key10": "559ahTih4Nz47FtXinq5vXejmSKFxrFf7JoZBm15PF47AnUa56Su3KRQLxp6HN8gaoTBSdrDkdhw3J8BPVBs5M9V",
  "key11": "YyF1c3tRVu4yXtczcpf4qosKhf83LFL1ZUvio1U7aLpyTgWJH6mGHZpRbtaHSqztUh3GnKQ8ZMQBrZYkfKRQhWS",
  "key12": "foECdh11BkzStD1RoDB3gvT91cDS3cHDnDaAvXyJhXYM8f2SkqJSo3cmXvvPoALQxUn1FiNkhXUDLi1L1THRs1M",
  "key13": "2GeAtJZLwv2FyNxVHzLfmCTVbTD4xUyTgAqkGn1jF5bWLegr43Gva6xLN36SKXygCxd1Sem7XZcTruGG279ied3s",
  "key14": "4XX8GX6FZtEyRMEcb7q5kyY1GPnd8rC4SzU8kdjvXuRKAgUfEgNb5RpoPB4T81Kv3xTq1UVg34iXcXovWFpNhBxQ",
  "key15": "FrBLsFjmXQo1h2BvPa6pzDMt4jhgFSCPEnkin5hCoATxZxKTnt3eY63ySHLaHm7S3LPYHiYZwkTxT8mv4P7bayU",
  "key16": "2hPWhCw2iUkQDigvvFtAWAMZirPE3ktV4YUosAfGPE1m2SwgZCXCqDSpE43AsHN9otwWKQT2eh91vK3kkEfXK6sx",
  "key17": "QmMa8aswAruQcoyZbV2CdMR2N1ibF8KQE2zosEybawR9ybpV4LRhnUUwVDF7B94QaXz7B56JDwYeEkbdUBqt5yU",
  "key18": "58JEn32ZQqp7jLUzpqr9A4GE2ZMPMxGbbRNbWQpK8CJgaxL2neirs67xBsQTC286e9w5ZpgmDhQZ5hxTe4yv2RD8",
  "key19": "46smKNo4MNxikCRg5bHSeYxQfDfgwTFEBv5PzPagGxbztx38qoEvGDWPJU8UYh8DLxdL1FugdpG7i6NduZaXNtoY",
  "key20": "3F72NWs6ypHKTw5oLnkmt4mysuJW5myifia15rLP5MGf6rUvaPcEc189mUiQW7k5HQqsUyXTxyoWCCUpxuvzHWnj",
  "key21": "5Cuq87h36Fr25PxKzCRU9mpaNvJMfhddWT1nK5EaHcWvocG74EU1oRoK9qAJkgmo8a7vK6J8En3kTQeU5142QjJn",
  "key22": "3HEKAouqJjtYPQFsWABDCmkG4KYaZwnFkjXTqHRCeuBZW4dqmwEva6CcpXFcfXv2PMkPdyW9E1YheTvSQDTv2UFJ",
  "key23": "95D623S28oY18oQwak4uP7431GWT9NAoANCmpS4p38kfb4uSCoRxD4FsyUcqGDnJG6aYT4FiWUnjpG2kSx9RH7C",
  "key24": "b1sXeDFmzeuVGkZyceVyX9faHaCbtzMqZaxid6wTsHGy6JVGBY1W9PDgBrhZWjefMa7M5DDuZr6VXVmi9uqKAGW",
  "key25": "5AZHSifMFvmsY9BvLLMSb9AzuC5DudQAqjpJ6ZKLa15xcz8ouJLvNXZBt2Py39UorH3ycDw4VzwphhXfKu5K7cRn",
  "key26": "z1GcwzRujeNUGYGxWXkLwf6LC28Tuysd4FTVA6b9tWqobq9QVBGAorigWEGEMonxaF7y2svJCuzZqDRjimE3Fry",
  "key27": "2XyQa9GFfLmJaBXnqAxoSSNdcxXc36gny3A7LPcJ4b1gn4C78YSAGwtqq6BV93uvnAqnddNyg6gHgnhgqDhLu9EK",
  "key28": "47wJGqBBE1uQsRhCqyDs8XypoEdFvyeZdjtwMesBJX8NHVDwX65LTv7EndrFGrBNUDnEoyVjXBXomXDwNVmdqG7i",
  "key29": "3hKN6tfeC2ZcaGA8GJPvD52G9Ax4xAxZYpGNsxnxGLQgjbbkoh5TQnkVSiDUviQqQ2fam3VZmAT3XaQdTh5SoGdk",
  "key30": "5hRLqsw84hJnKWFwXvnLFAofm4qUfnFXobpiY8aWGG5tfJDkvnAohavUC9LUUUwAryTF44USTkBm1uqDSoxTVqfe",
  "key31": "2ZtQSYax9vpd2hNKvVHZc3qFhYpQ1yhmyyZgFrsCRcqpMhUs1ftWnkHjTmhZKjJbSYkVhhXPvrbMuD2oiBcQJgMh",
  "key32": "7A7QFLRU6fNK2cncBt9UTs7F3CSw6WPVgHSeCFyPYG8bnUzhVXiC3oiDsyg8uirKfEMrbUUiw4MxigZAhy2tTdw",
  "key33": "3KZNMnqfp9HkVTa9dhz9SmcTJrj3cp82JjhLveoVipc1c7jRmbqbL1GUpJDXg5WYjdMPdzEQ9zwkwtHj99n1hd2D",
  "key34": "5G9bAf69cw9wn6kvRnLHyXMG4w4WA1pZ8kuuA5kGwWJMN69qEm2ofLHTQ32Kfu7WuczahuvWAknnqMyqUGVM7DjZ",
  "key35": "5LUyr7q3Q8YQoYniAjCRuRqqWYTDGBYRkavkD5UYuE1VSQyakoinJGcpPvL7XbUGDfXMbDoPQmT8v2z4k5b8JTmM",
  "key36": "4oqFT4EC8s6UzqK3dhZBggfuzYkcxvBQPU4ntXMqra35t8zehQdKVAPBYMEUsPPhcQmmJC6QBnZYREtRutF1NGbf"
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
