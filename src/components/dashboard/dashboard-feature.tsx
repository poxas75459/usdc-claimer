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
    "2EPReFistajDZBoNp3LtVk6kVrqXvjwnanmit3Aw2Cf22PDFYPLnovjbBfyLdZVifuUfC5gs3MVZ7GSQLrcvy1Sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Le4C8sZvzdBMJoU9M7n7ZgzuYosEcd9QXRUi2YpTz9jxuHW2zfaHG7fFFbofF6KiewZKFxZTd2dQMiNiqsUwhGM",
  "key1": "2hc1rPHMFjbQY5h9AgG5cVwkdCj7eTDPt1oWhMPAXcv1vX28iCHUhcEqotLZH5W3T9tZ8jvfYb1cg3nfr1mrAGPA",
  "key2": "BtC7QtXcvdmKKC5yMbEe1cCEPu8ofDHGrd6Wg35pBCtCFvcLXhpuxNHiopYjGUCPRvoz1FMxmxQSXN1QF2Q2h8B",
  "key3": "BZ7uhZuNqsEb5NtmvjBpny3CW4xuMCB4z4HgNQU8tdoUhLTyYSLU8UqbqDaxCAbi2kCchSGUsDXyRvmefwp3gjJ",
  "key4": "46najgoNeMGeSpLTQ5Ebf8gZPLA5bBMogTKBVGH5Seamk6uG1eQTud4taZsuFNr6QnXCkfJ6f7s7QzkBt26rXDtN",
  "key5": "2cxZNpiXCFmTFBJhmrQhFT1nAaGGNXxqeUAWBNNSYL8QfhuLxVBJYqNmc8Eupr6PStwD1gHBhneGPYCZH9RwiyvY",
  "key6": "5b4KofN5nBX4u2n6YYQ5bvJuYhxvxKHy1s27vMXuCH1HGtWYKWZhkriNXZf4rpdMkoxJ1H4riiU2HcU3XHnTX3cG",
  "key7": "3Mdxvuk17DSYhifLaJM98fm9zJYF3yp6Ed2quowyD8BT6V4rypFYRMgiXASef3t6PnuvGYxR1ooVPd7CE7KUgddk",
  "key8": "2b33tyZvTZ4prHQnX7oARfc4qVi8doprCDJr6RE3hRzgfkQ2ZFBgj4BuawB7q1gzuqGA8VLB59e6GoSR55g46jvC",
  "key9": "5crs76h3EqV3nZncoTJnxS9c5ZkjdbNnwEC9f6ysygF2ghy7xjqY83fMkAskPfhae9XmDBHR2TU57eHjPNwz5CC8",
  "key10": "2XZ6BK8RQXswfiCCHfHoLQkRtHjNKjSARoMXihqC37NhHD37DuqXDjFPF18Y9AdawTajs23eeeQYhuKUHFH8PJBG",
  "key11": "3mpDw1XHAbWRamjhQzKZ9Pes7EiCg4TjmKkNNCTgT2xQMZ6ZQenw9qoEkpBR3RpYBJy8uTZxnDmvXUAYXmUSzZMF",
  "key12": "57k7u5ZFRLeG1hXrNSSKALAHTcgNuxZD9zfEtzn4ahLxEfysiwVDmqRn7jurVUGtU2VWwUtni5HTQtMFykdVUzvM",
  "key13": "TYJE84XukizSf48vahDfo5Fg3wUg3HPEYv25yyrY51PVVTkuqtJVgnfj7w3Gjsy1sd9SFSvsWUusm8kjnHNAtjY",
  "key14": "2hDtoeusewtxsj8EgF7FXHfQJWdKxUSsALhjMWr6migBLjT6PiXKV6oQ89J79o9gyb3fcmDvtEYHbV4778zF2Gky",
  "key15": "4dYeDW4yZDdQHgTNrFBbjDjYpcgf9KzGjAWM4jtE3mP7aPVs3DpAdzDJGaZRazYvEKMgqokABNS1cLh3qKCozJ6N",
  "key16": "DnG4AMsoAi2Q26LqkgUkVv9o4ywr53DLUoFJiu9TEb3VWzsPceA4Z8umwSiswsqdasiRYQ4DUTS5SPE2qvPb37w",
  "key17": "N7dyYaywMyQmSVwSEx7xRM7kMB7vYUcERXkBZAfwbe2qVoEUWG1EyrtAyQwV1SCpz5gjdhNv1PvRLfHwBoGzx9F",
  "key18": "2gqoSCWX6TJ8mQ13DCXWvqFhy24kZ6QXaF6wkLD5rmzHGg37PE7bAJnAH2Cvo2u3rS5LG1vVbb7RM6sMW7vv2mLj",
  "key19": "2SrMrkTB8zhtTkDzR4E3xaD3hZVVJxwabz7saAEocqDEuF39mNqxAGvjSMGncYhNN2YGdt1rQ9nipVHJkFnFbVgC",
  "key20": "5DbfogwH2UkQT3f3nEGHaesux9tV3yd8Esa5ohJqp9YoGNfFQ2vuaJTQDGViwYXqw4PvqWZmrxFTLuCcjhwwvkyk",
  "key21": "3V4MgJktDhvmWpVt1Lh1PLfwkc7JnF8DVizaC29JEQPZdBmssoFuUH3LvM6B6xw1epBrAJLVvh6zfvKTvXMPoE4Q",
  "key22": "5su3PiaUQjUxLTmmrtntnM1tKAwvCe2KgyQwURUJNKZh49ufzXcFmtypHVV6DwQ7uRi3n1aZyeyV1WpvPXZaPTVt",
  "key23": "4UkQFjKL6roYwCTsYsgYG2PMeuCjVAaTBqWGgJtV45oPb5rN7ri4j9m984TVFGdUoTEkpqobefzmcAt7f6C3kLkW",
  "key24": "JhfHqfuRmwzsPFkwjixzphwAy9GvKrPZPv6Wi3ckdrdRrdYffnuggvBukuCLYeXDrssuPuvgN6rSdCm2Gma86kQ",
  "key25": "hETmNE1iyBRxRJqardvwTbEKJtC6zmGFqzom5MWbgTt4Uf4TCELtyv6VyySXyXFGAV7EuvJjBj2qqp7oMjchULP",
  "key26": "38LScbggRsucD5ML3QSnb25jLSUqnECJL6efT59G7DuuBqUMobxn55gQVRczzMnpV9PEGX2Di3Jn2ES6LjS9zqwG",
  "key27": "khogLnygrya4BXDHMvEWYECVVXncqvNCrMN2zpzuUMJVPJYoEuPz46HdGCqGGy2d84vJudQykz2TNsCX7KNjeWY",
  "key28": "5Ecv7Au9xGWAf2auBLYCMwVEKVHBpDwfLc9eWazoK2WXSAvtimKRiXPUmAJZMpDnFxQLyUk3kvvrAcLMHS9neUZ4",
  "key29": "eAxuXTdbKhGmBq9v5YtxKQNPAFjKLgMbVKC4i3uLJf3mPP3K3RG6Z86NJB9AbvGbQFoGTjzpf46pwY7jP6d4JGa",
  "key30": "JXMYeizr4xcpQx61GuPmUM7jgB6igkKmvhGWdBCjssx4MWjQympBgaTh4BEoTDop7HFkWW5tXfbfk1YQGU4ju4k",
  "key31": "3xqKNjBNVvkHJhM5NEuaVtdjbW5t6vQVg1fXBycZfzmBRSyg7H5gf5WEsANuzSGw12sC22cnBmXcaRnEfCcpo2rZ",
  "key32": "2uCZZywyDsnQn3pT7VKY6PgSoz6Mh8ADcVc9zRryxHuiAFx46nahxhRqFc7WrTqoo84G92AnYZ5L1RaUoVfA81oQ",
  "key33": "5J4J92XzB4wdHbuS1zqNRPa9ciEoU8w5zP1NHf7RmEjWhwMgxdT8dogQM7YQmipZzJKUFqTkVrvzdAs38yKPFEyg",
  "key34": "3kqqxyLHRB7oYapiTWXxR84sry7Yax1bp6DeGA3QA1AUUhUVVZA2xAijcxjuEGPhesC6Z5TgAeQJebT3zvGdJN3N",
  "key35": "2pJyzMZNKvdQDdpKwVjGjDwGmKH5UZqC6vgX2U1NwGVbzj22ytmazVQFAVVC4aQckeG19vEGuqVpvZncpLNK6gFp",
  "key36": "2fG4X8ek3DdK4uz8ayqde8Da8ZRnaH5rKkerktCNvAUs9kTN7Y6GkXnstsurwbJZxb2CLA5B8fF6tE9MxDGKVrsy",
  "key37": "2HVbgm9jRqVTe1GzNwD29m1biSkFTj7pJXfwqRkSieHNhCcF7FGwzPV8nurCS2oirVCQy4B9JQ7wFFGcN4x7JysS",
  "key38": "3y24vmGaj7zkrzrzPzyyHkoy7ieUyAaWUCdDu24fgG9Ypfoqu7pr2WgjvehFC6Xj4CCLn1AWVnwizLL4BW7CQ14N",
  "key39": "33siB1pmZAGYc1GYD1oyHeFvYjHhJYBUQJ4ubd5LG8cHdjqteqLXMq278J5b9LFjtNL8zxShm7CQwZ1oDTu7E58T",
  "key40": "3dfdqr9FZkpZMkHtNvstDVxhksa8P7GUVuBc2uJTa6GBBTrABBJ8iyKUA9ocUwsnQTdb2uACqUWABCKPtBtgy34F",
  "key41": "4cWHBHnEk1pq938ncfbv5qad9Jq7dFEzQqG8txnzvYKnmTFavNfHezCu46SstmGWgRdmU5unHmhUHLAb3kjtziSn",
  "key42": "GJmULSNMBMGi2cxEqfTMbJTst2sS4gqfaAUXKi3gwW4DZjjH1AeKzupNkJx7fFiCYCog6b9FNxTbsX3CzCvsedv"
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
