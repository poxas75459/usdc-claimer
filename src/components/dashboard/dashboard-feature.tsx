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
    "5nXiCATB4fgFDvz8xUX1ZqZgfJGmqVCWZiyZHrnG4eKPufePJ4iJr4JegU9qT6MTFw15z3ZttakHPBD6URg4jYcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WL3qDnqtbpUuSAysiEFNQwu4mTPEaxgXmsrnrd9tmfvXcccCsCuS6m5yuE1KNKzeb7hxjX8Bk7LoyY82hB4w4St",
  "key1": "5yheju3MzyLCZ694J8hKctryXv8wf9ELSHkpV8BxZboCpgCqTCcuhgyLTvYyK8SKAW8FbjYcwhdobWwAbWFGtCWb",
  "key2": "4Ywq8v8fuYT5J2UcpPpfqjXfu35h28iyXzBzKc4Ciqw7eWpa7iL3fMKZxE2mCNdncCCrnwdutzdH4vhZtSnQ7zRQ",
  "key3": "kkrBng7bTNTFxxoYo1WizPDKcTUKVGaubsJDb641MCY42u16ycQq7rnHYPWFnvG3SAQPfAnzBNktpdkS6pdA5WJ",
  "key4": "Fxu9cDS5h4nowtLPMvQUeZSPHBUN6AjxqgF1hJnTc9CkaCxUU4X6uEkRj8z2okdbF3VWfggpKjTrXmLjDQ4hgMa",
  "key5": "3JvePsr4WmY94h2EzudYh5ed5hEdhGFoefRC4wJi1QkRP2sq2vaXAzWrzz7z8Hgw7xAhptSvwoGeiL32MF53v8cd",
  "key6": "5TYmtkse56RQnWxjntoWVed6sk41ueUNLKrkiu84AZikYLF1Y6DZEcFRrDCU7oKEnbSqe2oABw6mBgprVrGSSdJk",
  "key7": "3vinMy21JE9TiPBr2YmueNiK2PjEhMHo8jbfTa4ZeRWdobkGyEY8eF5DrzxoN9WxbSZYNeRienMDDXpAJp6ctNy3",
  "key8": "5vtWCKm5Vs9YUme3mwKJd1j5NkevJgrTJZgShrGuwSJLGLkoXcvmWaMi9E37DJfFKviKsYwE3Gzf4tWCgD6wBDXc",
  "key9": "4qMdzuHeV8BtNTtBbnSdRzRznBQi5nXFQt5pdT2bWokpvYkBjd8bNsUWkjXLDcXnuKGkM48d9EABvPyys1sXxWVx",
  "key10": "23G7fppdxBS246ejcHEyjm2hbufiRgcGmCmvMtpra6vuBCK17cy1DSUxJ9tGVc7HAYvd1AF7S1ARM3AbDmdZDT19",
  "key11": "4uvv8YUs8dpM7UUUXBBoUCCWKynZBy6Adyi8dTurNhLe844DPRD32ujXmmfZkpfGiwHS3ZYHxaA9Cw9HWrTwLDyU",
  "key12": "5XgBcx1QQ2WP1Hjb9FuoDsZk8DGn243Ce3bvTf8NWWaSWgw8ieW8K8W2kCA2bjeRv3jkx77j6nQfyadQKw6iesCQ",
  "key13": "3vwT8grQ275kQBEHhKME6ESZjLgEVxPXQgmNsH9T61oZNjck7WNTXnrVxEuKewGtia7p5XfLLb3R55q9DD8AV1ih",
  "key14": "4iLa1Vj7jWdsgGex6TUxJhkhqDfL6XkKodwL516wE264L2kbTKko4mEmR64NpLL2WgrWyCozGrFdAbgiAn9AMHb2",
  "key15": "2e7CY5jdwT3mTjhHhbqMv4auDo1VU3SdKKiHuc1gAM4zuyPi153pijpdDV6fphhZrN7v8XZFa4LgLm7oyRtgsZYB",
  "key16": "2sqhRfFNhxHfqVWEvpZSBmK6bEFZU6mPCKjT8gf6UFoAYpidMHkUGE5AtYHS46jSf5LuUCTdAA147PZyTg7chqcV",
  "key17": "2Ae3BjnPisfs596kXYYodzcC3jTWXsXDPKbsALfP6HHHMVhkqae6LVVkz8jFBW1wirsQ18KgsVHoZsKSG6Wpy4mx",
  "key18": "MpXPY3o5JqtvdXtxy57vSY3odkZrNQvVdFW89kjGJsh1HpSXerbcYAHPBG8BzbNAtxj9KbHMbB4pEVoPQaaixNb",
  "key19": "4npHx2MQuEJWPqz9BgzbWQTci6wC7n6TToeASLaYUDgo98beNtraY4nUX19KyUEDhAQ3zEbRu6Np4TnRSZUvsZQQ",
  "key20": "2VxEH1XbrosHy6CmUrZcmJRgYKKJrKfBnqsqKVL9LqFbzMwPimayh3oM6QnbmYtTNby9LWe1TP2HmuScekPxAL9n",
  "key21": "4svQQEpe3TWs6tjjqh8tiXzJVsPxBd1J5Bnx5VKtah6NP7vpngjFDjCGBpKYuyH71fzZ9W7NKhWVyvSKvsqgSyxh",
  "key22": "3wzNPtS4tTgon6uwRVMWppeHYMwSgujdHuEmY3BQ89LCcYKSeoe2yWkbWcocBFWKH5uLdYCihK82sA88dB56NyRk",
  "key23": "45suSnobJuSJNEBpfck7yh3dz5SnfG2HMocmmwwr3qJ4xrdAY3FSRR7DVuS5SE2seLn8pyxbtEh26AaieFWWDjeg",
  "key24": "4mLfD3F1kD8GUUhWGuxMayRbcV8d1nHSTfhQJEyJniVJZAq9sQNv6RrP3VE18JVF64BRwgF1Nm5KjsXU5tcBVPJv",
  "key25": "h2Twbss9eAxqafBMPnVyian6cWaXYYdzZUFHyZe49H99oxcKhGob1sVAsgm8e8hW3y5AfFynpzNNA5ZqaCfCrVS",
  "key26": "395n4nHPWuyfvxmfhasciMu3zoyZRpmXnB2o3ZdBT65UDoDwSHwQHxhTmrwjSVRyz9sMbPYjqdRpyDwKpuh7ahzg",
  "key27": "4hGnNs2Vh4Cu6ZgmAejpQGAGCsRnnCX5E9n2K5DrCtvGLHGxDVCzUyUTtmTkSs8qzTqrRMirBpe7NBYnyDi39Dih",
  "key28": "589KLvgAZGTqpoMEx3TkGCEBU2hnEyENaqe2CiAMP3arFvJdFWycd17vYJFNmf5SdsvFUsWEPo6cT4eYkopgup3F",
  "key29": "4WnhRdLPfDTNaEX2jBbqCHMUff8WQtKWpzUyfNZqHLfPE49TxnZUXB6EuyhUgQTWiMcNjpcP3jcEhnm2Hdmw3ku7",
  "key30": "624mPnPx7hiSbFtRzK1TXo4ALcL3w9DRX155DcKZMUPJajfcJdnpQxqnRqwCCAKs1zvM6635g6rxSZCooGLgEG3B",
  "key31": "5gheu7TicVGvoZptfAVHYFNeBaaaMCThgLtrRJkEM2S3Bpq5zPVsHxsRjGn7x64ZShrJgcJHFWZUDdxPUTzPpkFa",
  "key32": "4wW4K5dXVCeGU8w57MLBiwhLUXtx3tNA7JjLPabicMwUnpuCENs14JMD81AZDmfDhzXNc9LdJX7ZFRLgrHa6TZzm",
  "key33": "31NMgGF7UDZR1cZmZy4zqjdvmq7trV2uUxGun872auK97ZDfRBwaSncecwtcfM2V69ZFi354rz45Yb9vNWM6BXEK",
  "key34": "5sZeuk9qXv7gQUTs7XPTvAnY2Sh7SrLAcb94EADaQqgFsJs6o8Wbtv693iCRw6pZFmpHjB5BAQnpUAJVprS9vf7B",
  "key35": "3PK3Up8szWFiU2TTKu3ZpR2S8GGfoUdQT73K5mLp2wNE5Upimy2XnT7DQGCQ4TRtr9BGEmbQVU5PJpjKtxBttvKq",
  "key36": "2CuHAW94cQDRPE7FoFeMpNVnQXzLhv2RXEAcTGE9QGufWcNThH8kJtZ6H4x3bSEehKvfQHK9HPCkS1NazQUb54wv",
  "key37": "5ZHqa3ttD5RXbgLZTCq9JG1AMwFKc7f1qRq4AULcGLUjAs77pAUY59K1fgxqZStg18cFQAf9nkRhfkk1vZshTraf",
  "key38": "43GLZDFXWRJWk4AmRBE2MLHxwdycBGt3UgTproHHjELX5jhEH3dWXvhNEnnpBb9PbBEJNtsfJiPeYTrdNJcrYWTd",
  "key39": "47KZCWs1qYEZ6PqSX4DHvtFqCAkrA3fLmpyNHjg2HyRs8CVVzDFfj1JZvm2Zki7UU4ZkbjQVsU7G8ShCvxPbJjWB",
  "key40": "3dZHG84bTyeBWpAdBaWJcTwxdxP53HF88ywVXjw78A7tcSAnFkt14V5kutaqrJ6Fm44BZdQwhyTrGVncT4tuhU48",
  "key41": "3vW9GuU3hxNpJfJxLWKwP5hXZanZnrXpXjTzAbwvwpHbdCKcT6BV3BKwnKWxYnNQw99g4TBpc86jb6Pbb3krWViW",
  "key42": "5vreB6VVDGPGnqQsSKxCBkq6uqNFnzQD2shQsUUNX1qEugQcRZGFpfAPcJFQxg8p97FtGNDptre45VKxEymbiMRV"
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
