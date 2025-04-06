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
    "5vrkhfBTgjGrWuWhSgtZPzuHBpKQUX4xAXsxtsh4671ewmofHee3UATkuEWooXQEGDwxA6B2zbM472JzfvGLgEjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21cHoUdAerjwRoM9PTPkkNUyBzbaYY9wLsGau8kC9voWoooEk9To8Lyfw7xdfSwY6qw7hUseN1Ywd3H1aK6WxNw1",
  "key1": "665cTFGAigZCsi3od3GHEkwuBJgDpH6dtByB6NpnkrNYR3Qn5vnTNeCAzFNhWk9JGe9ivveYxLEmoBu6hrKKeJy4",
  "key2": "2JUD1VyoaWjXBncC1UkJF9p8QaHUTTY3fjfwL6g7qVcWtWsyAgyk8FDPtsS9ALEuRb8rPavoMsAFvWpBBYt528bW",
  "key3": "622waxceLhgzDfuXG7A62mCwzLQ9NG9iKnsEL3LFLCEkZLxxEom1xgmoic8fsxW79nVqgWBauqWGMQUyTfV9kwzH",
  "key4": "JBoC5WXsJCYKMHzWumBQDYV4RG6dKCsN92pm7LxzbUdNRJTbQqwKa8xdFXWn946v6Z9SzmMH39m9zGs6aJXehty",
  "key5": "2x1jPEvmW2CemeDewLLgMByPxLFh3Fs5WxfbDkcPbkJV9L9PzjVcvA4pVWnEjugcP5RJy5Fsx37JNWHnJH7tu4wb",
  "key6": "4xMgMaCHheHjPg94QdgNzo3y5f2WTYuFELL3NTbZUyrF8WWVjjXBcko6rHV1YNFGcp9CTTjqiZqvQKQZdUBgL7VD",
  "key7": "4n2RKeHgZ4pqwsPgmT7tXS27Zwk118jzVSmjGeDQXPHDBmJgVkcMSzoyXXrNjsUBF7RRJaaGrgSwZ6VDkQ7yGmZm",
  "key8": "5TQEX9q2Xi2nKfULvVurvcwWsP2A3cVbA99HyTFMLWXEEeL7gZ1c3DGn24F49aAimVSfEmvrFMU1khv8xBLp7Qwv",
  "key9": "3amJ2qmqRswHedFUJwftyFadeCSEcDkUoKbBnrNihZZeYrWDAuA9vWUjMBUyUCD2d3rVkTCVQNh5zToiwjMqJA3P",
  "key10": "z2BRp3yfQpSdw2Fhc9Cv3BuduDTkyBBAeq2sq1wh4bhRdFStoVrh54g9MKH15GiM7koC46coDx7faTaiA5pcWxY",
  "key11": "2ErV7Dicm4mKSLQEDhnJqjjJ1vwDxkz17q77PkPJUWXtdTW9SpFPMXoF9nmRKRYJhH5KRF8JodU13RwmY2QNtajY",
  "key12": "zjPxbDCAH5i5aeVS2jXbgPUtMQCQBEt23gmnfDFDFzdTJe6nADy9Bgr4RbuC8oCLtP79Vhb8iZ14P9Mzn9P7XQH",
  "key13": "4G79Dye83F95DT3YVSgsxSnf1etcGRmPMkjZ9aYXLwT3rY4vmnNE34gY5Gzf5S1418uCt5CUrQRu8kRYhPEcWw96",
  "key14": "4nHXjurDEXbiAukyFCsj4rsvt6RuSGi8y8R1oQr2HrjqCD8rSSzcdhq3yFDjQRyhN2LspyBPrCnhuksGje5yDDNn",
  "key15": "wcUXrTqWjZhMjGyRXeK9pC7cXc5WnEKhwYpHDiu35ZPmyxRopjpsLXC4FJbC3rBDKm3UETsuy9KYAv8BVHAyy8G",
  "key16": "5Y9iZyteMqUJgMnmo2by4jVpef6UDBVjh3Xw65MV3ZtNvxySDmq1APPNsuBVbknp3SKJXJFfQWpTohLXyvUoMThU",
  "key17": "21eKjw7S8tzcVDvib2pwLRje32LpLixopTgJKMiJpgiMsyzdAiJpdopTs5o2VyrPRuqn1hgD259a3mr2WxrL9j6y",
  "key18": "3DVmVxMhfAtfebGmiJ4GuPzzAo1tVNFaCeVEXtPGaeTwCWWniTcbYxVQzZyYGahq7LNaTBiRuh7hdQhA6JyRQoJN",
  "key19": "4vAg8kEBaXGgURph2s4Qc9nX2BBsrh4BVJQo49GvkP8zsNFQMHCvYHaW4QsTfwPt8uFP5fakcu5e2ZwUQTkYWdmY",
  "key20": "uMMToexfrAMsAXvrg2VXP7JRUvEbDobJnMsyAQon15ojjZ9yMfn9e12hkC2EwD4VKSKaCzkKkZuSjVSZFev197j",
  "key21": "3ZDLxPp3kqoJfUJuLFu8W6jq5dqNR5cxMBbuVKLpkbrJcYWqNvbbJ16fa3iYFhBtmDipM1ByKh5Uhx3G3irca4EX",
  "key22": "4wZvCPMPGxZKu7kejn4BsSAZGJQ2hyLm1ka2gYVQG9LJMgJTH4Kd7JphuPQwfvoYe9SHdUDat8ZEXHJym9bRbyvo",
  "key23": "2jG8HjFAgHkamHp7tjmuw7hFhXMkNovWNRa2bLdcnmEDwr17AjKfGUAw2QxTjmWrWo9zUVhFzeryoF76wQw5XpoY",
  "key24": "2kjHBjHeV6eUcHMb1fJ8ieuVttBCWWz76Hrdx4HU2dkZVRZJVzUnEQj9zBeyU44bULaCGMv3bD4vpqiLCdLfRHQd",
  "key25": "63bfjVZNLe6dDvRzc8wtFR9ZuNGjnHkfhkrLadZJMLqX2k1maAzo9QXjDWXZC5SSjxN6nrEhiqkBvHCsUVbpqfJL",
  "key26": "2P4ZS1t6hMoui96dnKCZhQD1oSUngLDTqHykq2Prf1XxBZpLgfS82qJGxpeueeKMV7SxhWJKw9uJFpDbac3Q4f8s",
  "key27": "2PZtCEHyzPBioJndStydm2FriX85hodpwhzPCz2QuimEUfS72aAk3Bjto7LY5oX8N4xQ4sb6HdBHXVFZZouV3BUp",
  "key28": "PZbEyTJdoZcggigYtJ2wiUdN9pxbQTYqFApcZEeUSPZ8aBHGe4SYsswdNMVaioEPnPnGrYDi6BfbnyeGp6ezCLr",
  "key29": "64b8XutHqpAxDhNA81UnxvC7ViUg7XKVjnCxxdbqQi4giSBpfYegMnfMve6Z5h6xWmyhPrF2PgrZGKerSeQJJfPN",
  "key30": "6wD4REpr141e1HaGQsiEtcB4AciXbGwAvVBT7f3KprRwwfX85oCMWKbGvrPz8jKSVdZbBbTYEWwXU62mSN6cjj3",
  "key31": "2HXXiettkVdDM3Vt9r8sUXNdFAxQcQUmNyfXns5HXAaVKee9jePSWZ6meU2w6XUobncrtGXx8V1MJ3tuRuYJ9rGs",
  "key32": "rUrhLT5aej3BvJ8kesa8PAh5dgDt978Q71Wte8kcr1BYBhJnu1bcatH9teeCB9rhFV4uCstZ5AVffbeAs4qAVwM",
  "key33": "3bPb9TnDHpdFJHrH9VWBgFr36nqxoL12aHZDfoo744wQ81d721maGNFiqFqvGfdyXDGokh9WkJiPoonxZsksZJsU",
  "key34": "5Euh4G21mwAGvvLxYogekEycVFS9oH9xFzJXcQSiXQPH6qiv4eNPWiSReJLbBjoktCKPCKtbdiqYuN53YoJPP7oS",
  "key35": "2W2RTK3XAUDbe2NCQNwe72BBgfNfXxw9Trsi6MKMMP5xycbNdiUE288F7eEmm2dmCYhRY7KPYDH3CdQWtdnZEprW",
  "key36": "2Ss9bu72ogp3PUa6y8mDBuTFAUuyisqnJMmAMAkakCvd49QbUgckMS8VkegjNL1hsU4MsUzvLoosNSBewtChTJmH",
  "key37": "xLDtqD3ksSr4MkANGxK6fsjsAXDGVzVZSR5i3LP8LY7mRJEBMX8cc7GZoJpZY1FGMF4rcrXhjnWQTTENNkhZDLJ",
  "key38": "6ZVBmak1xbKkgv69gciS1jNPPuFZ1kgYDmYT9wdA4JzpfuSDqHvX4Bd6ggBkTFsukEC3TRm3sQvGgqjQ5pTEwot",
  "key39": "oHKjvd9vnNDPePJTJarouJchoQS61NSsBdbQ7Bno1E6Yq3Fi9WfuW3r5afmcW9Wm9JJq1Qsqu4TFa38rPo9hpLV",
  "key40": "4GBbGpQ95hFDs9KnvdHdVysUYUWJFHMqBQUu7QkdrjTXazmKhPD7CG73ByciRxinvPJuarygkoJwY3CY6hDfzno4",
  "key41": "4udHnbBGyGjTrimbwrYejX2rqkmHnmC61txQsdYnnXrJrGP2EtWpGJrzJNKd4TYcwyKpquNRWwivxxJug7XFtQUW",
  "key42": "2nrvV5Vt2ABYjfy4d1RJYcp26kTaAuY8WW5B7zgP6B8GLHFqtcCLmyRzXTpMxwqdYNA5ZryktNT1wAF7hFg59jPd",
  "key43": "2gNAdL46UgkB4aUjwEfgyQ8xEWZETdNjk1boK1b3x8xGrSPjbo8VksZFzvZVX2mjwh6un1gx7rGs1Pt4Fyqx8SEV",
  "key44": "36CX9Q24aE151AVXveouQ1XGszH164K1JCZc1CCJv4GsGxENJ96FGzWiSeENSReNhXhFJ9YXdRhei1Q8gLcQNUnG",
  "key45": "5PsFy44zQW6Rt7SdAEJ5YnDkY3cPGog55Ck1PNDRZg7KQ1Svob6RX7B7acUAioSi7xeeW6QWy2weLc3Cr7XM8eVe",
  "key46": "5yR9QzkfGde8Pc5ZPYZtfL7ZSjQQYzHD7yiKCA5WYmWFMiZKujgSYRPXhoaN9hSPHqLdjp8ZCcfozWJbxKuyCFwg",
  "key47": "2mGbQzGoqLBDovs6Pc8P9G21Tdwd37Db3sH8cKqKqKEWuvuE2WcigGdvdckLJg1LarWxxzjRoL7K4rr7oQw8qPPq",
  "key48": "24VUSYJVckdgoGy7WL8H1kK8HQetDcM6pVrsr4BnrFZ7UTzRjWJTJcptC3JTpxkQKLfyV6cruNVepaRaSrJkg3Cm"
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
