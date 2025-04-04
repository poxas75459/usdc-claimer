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
    "5v5FP6AxpUDQFijYqrkXYrEnGKnyTxqPArmfiQiQPdQupFCX837ASTHf75gQrFHkagnDxTFQ9supNc6MEnSrEuDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QpENUsw2n5VHDh3zJUN7MyHW5onivVsyqzai4Jf6RBgozCEwShZS8XLnZhdDF3EbQFKPm4NTzx1zg9K9rYEBXE1",
  "key1": "3tiPYfKQyqPgGuTdTnLchCXetdof6Uuj1tEVWPS3EGLjoCsGx4NjSeEBwVZMg518EYjsvs2yMfpKPZG4evemnNau",
  "key2": "3oBaFLZEtJZbx895qFC6Mwb4bknRQga2ZB3MGizh2RfS6csYH2rVxv9dVGEBZe6WKz7i2qePHHQJ4EixA9cZ9bny",
  "key3": "473A5yVgVTUMYrky7bigKGavQSPhUU5dwap59htTiQsPGvekMPjP9mq4Yzbugc5RJg6XDUDmxAdo46rC6EqWrEY7",
  "key4": "3D7KczMLr2gRauofAEE6Y94oTp9VCHa2g7cvSs5cogjHqnotxESKm4FoeJm1cy6LDhULUyqwZHAKWjKadS4oupJh",
  "key5": "3xvk1V3gsN97hU6MMAEDQwd9mrUTa2ZTk1YHm3UBf4EGzXuzUsMSMHtkZmsuRiMTZrZYuCBiJX4bDexPRdW9aECv",
  "key6": "4oZDuTVoLq8uASoFn9957xfDwMGXgQhwRY5gRDkLo44gC71s6K2S2rvM4SdUE23a5mer8ALNjV5UcKA8QuXABz1V",
  "key7": "26CYCCgpp5HvLkybPzsTXNcqZqF9ETk766QrTY2suyC6QQkXUhrbJhCEothHcsTFqJror9NUkZ1MicAnV7A62PZi",
  "key8": "3R6y1eCM5e73UDVvR277oWBZ9xJCvA7TJ5P4hKpeHfcLYMDKtT5i8fi2EDXgc3CLt53zN7E1NXZ7FYM9mDdHYPqQ",
  "key9": "DXhQZqdy1yr3PQyHuF8PSMMfJKSs56B4JDNdLjnuWD9wHqP6CjVc9vKvrk7Ui4Z5sas7mXtacAMZHGyrjpsDKXW",
  "key10": "fuDote9nEEh1DRGVJNTUJbfWn3YHKvA4amqyEYveYzbttmeDRQ86gQaAsTZ1rWqjcvoN7fcWgZL48owcjbBWggn",
  "key11": "2uwf78neuhvZ9ZaTNorxavfJRcymD8rUqdV4Y2SnzXfdTQqP98GAtLPhNtQekA77dkti5qeLb2JS862wgnZgmMfd",
  "key12": "3Jf983dUauFoT5VLA9oi8FdcjnTxHFV8WA14umktcJNEeeUEW6yjRbWMeEvirMsN55EJ4tzuUyzPF9wZivNaBo3n",
  "key13": "3e4S3j3qgSwWAmrfWf3gAwaAbg3My9hfK7ngeje5a1x6MBHzP6ihMrTNeMEbFi2dhuAaFoJHJxaaVKGLrMkQHxfq",
  "key14": "4cNLKKUb3VKv7KsoMN33J2mHvBTB5FgRwbnJMmhZ2b9tTmVNTpQ23vtTXt2nsum4ocDvFkVUsQ1UbkS84CfvjueY",
  "key15": "4omcsVyT4ALGLhgLMwMSpye9RvEpFsNsN2uZvJ9tP4GCowwDc71ULQve6MA1BiffwcRyv71w7p5NQiia1YeUjNA3",
  "key16": "Hf6BqXzZbhuJnfmWZPjwbwuKtm7jT383ks7Qq4vHiAxC6a2PwbqnyoR4R27EMUz19k6qvFbpwJhwKxmdnv9fZmM",
  "key17": "3h5T2tNA3N9ShVDHKhYTmq1cRrDTaVUqJCpEdMPT7HCjHyNk5dUEF4NFCay2qzvyXh5qUD8fTtsxN251xkgygF8t",
  "key18": "4JxEhpnyWNSmu7cpDyZ7BCnW6QwoXYZNiQMo2AfXNNrajmLEyZu5XrxpdDJSaM2DpfpG4S8De9hejRWEFFjtDdY7",
  "key19": "2PTWWHC4qNxFqFQ2p6b9Mv636PZ3MSELF7saAUup2ZyngZeQbFV7w98n7Fzjdb8ggNrdQaYD6pcbk74sL6eDmRzE",
  "key20": "KXQLYzgTg6y76pFSqxSrW55tzWsNeoYoJzrDb6QzraBRw4593fJNoQrE3NZPHzin7MnsdpQyKSiDvU2kh4Sivs9",
  "key21": "otYdc7JrwbvSbJBaJARpt6gEVhps2zntFLj517CQZUixoDukzJUUg33twf2xg8ggZVgJWTSXvJxp9tv5mXuQCxs",
  "key22": "65LqVaEpAf9PzL88pEbBohQwq9s7jziAqMDYYxX94KmcYaS3W3FpRiKZviVxZLZQsyrJfiLF1VVPTVemUMAtcMC3",
  "key23": "384Eo2tnL3dZhb6QZT8kRWuz3PhD5JGfD4ueQybnWZzWeNTBbbx3t2nCoV8n9eVvQNYkUovLH6GBcSUBrEx6hxhb",
  "key24": "4mwZYUKqYbiNfWssrwxgMiam3iqBqc9mXhwJtpCzi2916dfCj6TqXRcsU17JwBrn1FCfGmyRmMqsiWWENWuav8zu",
  "key25": "5aGGeaWAEcVLjqKHfbLM5uHVG1Lf6bbBUVd888RL2siH8Q3RXAiGuCVZKVsB15CisVANP6CLQyRyxr1u9jKuN7Na",
  "key26": "3ZxXxJJynGfaN2oLn4xgYCJucyQQandNvhyXjSqZ7x2Uvi6howbsogvCQ1xUswQQ8C8fAoJ4A3N38Q5YsuWBiwgJ",
  "key27": "MJuSvzpSa98gaaAq8YR972bAt7B4q6YarPBc6p6jzuRf1Ktpb9QHLtLo8hxsNPDDRgZoNzhZrAKoRSyV58GMZjV",
  "key28": "626KWRx1ttU3rDvkmiUAkgrfSGLFREyyyk6ATJ7zUebeBwmCQ9CrspUhAbAVNtfbg1dCrPm3C9dCJ69fE76hrQqP",
  "key29": "437kHFD4BJ6awScRELJBnoEJK56eZg5uRp76YUe5RQrnXVSFHxvT92pLvXSBs7XntNDBRSrjAhhFa2ky1DBHSWdQ",
  "key30": "5J6WKMYX1EFEj5LLZSm4x13tZDeHfaT5mWknGLZh5dHdE71pc7ufkTTsa9VyfVUrBEyJgfB74NBeTF6mRbKk58rq",
  "key31": "chYoc5soSH3TkpyjzjR7hunQsfZiWoxp1w5ZBkVvXuVHCPLZPhHBVcwxfwYMbEDprrdvs1yH3KcsGjiK7PB5sz2",
  "key32": "23guVfjPjzSAibSDj9zExdQa9s1P7Cqyp2aBsGWnZUtiYQNiC5KM7J3LtNbBw9YepvjbZL4MtbCvfMYngbkhuSEy",
  "key33": "3kyzSVqCrDRvH7Qn97eq6bQ3tvFTVsF2csRkwypQWJbKwT5c2b9xwmUKEkrZfLbSxk1YYPU36RrpkKL1DgDTmSzG",
  "key34": "5yVwoJ34uMEH8oD3cYgqWk9EcPLJ67WZ17F7o8ATT5K7jcQfAeeQTKJatGPYuer4qNAztXUDc31Z4mdBkNUvMSon",
  "key35": "B85dHq8RJybNDHX8x7JmiqLBExuGTXi5WSvqsCpGVM8hZQwQY2W2sfyDq6B1ZhMaCPGgZL4czTDZVwx2xwgbH6s",
  "key36": "yKBwGV2jDqLQNmnXHZVEEpfWHS83QWWyL5J2UyPbLtRgFyBDRHuwh2SCNnkzu3ciYzP8jjxksy912TtpUoR18wG",
  "key37": "kjWqNrZWZQ9gxNYS6ziMarbxp5iAaK91nmAEu3dzQRHWWrw7fqb4eJy6kKQAmkYKrmtxzxameqEcyF6Z3DN8wYK",
  "key38": "4SfE1oggAWdSVUByRVMQnGGdbza9KsUxLXWfTZPyDerVC3bckgrZ8Gii9o57f3LjaYRCZX5KVhEwFgAbCzjBZ4sQ",
  "key39": "39jqso3NfAaDFxPJynR1t1WjVEt4idThgYm4mqzRuyFnEXgm1TgSb7gMoa9sKXJSUCvj8TjFE8Qt9eHn8QLpSd6k"
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
