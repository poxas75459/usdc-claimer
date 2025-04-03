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
    "WnNSPVNi7Ws5JDeCjBzd5ZD3rDmo6cdGoe6Zio3NQMzp1tExToEPFANbEioMw73nC6Q2ZFYAfCQ8VNeGZBQvDVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pAe7wHEoNRvGfvU7WqGDDEg1y4r5BHPdx4EDvj48vgTuqDLALLMqPkWZ2iDPLjCdmaC3d6MqBnKoWJ2CiGhBaVn",
  "key1": "odRCrmYF6AyPGe4rCNfq4J4MfuLkbMwajtNv4Y9Kh4j8JfWfUoy9iCzmUoihSdm4Vtb4qWrGLz7yxnA5xaoG6ay",
  "key2": "2LfHaPcE2pUkMYXKnRJFsxeN47MokYxacPXuAB7LPyrEH69TTJiDvBovJVgyDjEXKjMu9tSoo7T8EcEhtMcwLR8w",
  "key3": "3Eysz1CeqbEz4xxw7LbzLbbkeZaKdhnFNBEksrKVTjCunRuCq7KDHCZhqx2u5tTHDKztnJrg7K2N9ZpsWSB2VWHD",
  "key4": "4cCYrtN8s3rHCQxyrAKwEDjy4AoftSj1H6HH7UisjDRwb2iuD9jX1ZsYma4XBwXy7jH2gjGB2zSL339HnSyqLPrx",
  "key5": "HtcsBS8f5oi5GeYv6VNeqY65bvJug4y1Pq73Utyw4whqNTWStWbCKh7x6d1X7s4U9wdKBkcP57HZKCXsQZsdPfw",
  "key6": "5aEW73zaapRbdDJQsLahyrQKBr2bn2ekAH2qncxZXJr32h5qZSZTCiPjciMpUKERjjkaVvniV5YnQEJVoLHogXDj",
  "key7": "3KJ9KcyH6eEfrwgm94G55gSFGJwrZcEURfzSJwTQkYvpNHoMjCXDHYnKFp6WiVQ1xz2KWNJutEB4eKv5vNiRv4Xa",
  "key8": "Q6K92NJNWbBSPKhiMbFsfSpBBavSjYpMLyj7ku4EMWbjd1hNfKmxTDkV1sok1XZr3VzfvLwcK3pDvxFcAbtdMRa",
  "key9": "4BpmKJQ76hmbK1auDZxXgti4dnPtX7jxtb46iMAuVo3o35wHtzN5jp3YR6ktxDybJfgGtaxaWQuykRpFb5MkixsZ",
  "key10": "3sS6tA1iLWXMnzqh5KJ8b52bJcG5GQyM1HpH386PvnFn4KCbi8mTSF97h2S2kUUMaBFo57VwiX2bwmRwQNLtqHWH",
  "key11": "3SbET7Fxg8GbFX39maRyUCHv9DPzFBhp1gWHgt3GNK5boxhuZvyJAmVW3NQdyqjfudeeiQBnK3xx6BRFtViyMKon",
  "key12": "pWsvKW4519YW3SBG9Y8XYp12TwbNA62eDrHDCH5XMYYrVr5LVhCnjfJYJ8NcJ1LgarUCDFjLE68ShTATMsHpRaU",
  "key13": "5Rrkx1prrM3JiMBuL4wSV1FDrJfgYVh2C72Q4BCwcQ8CtuSVmyCV7Npa2VbrfyqnHXXuDk5vzjd4bhpM83k4dPvi",
  "key14": "2wYwFcvjbgkMQAXas9R2umpFtf8wpr5s9398zyF1uD7J5EbT1KfjFB4SNaXtBcLK3Ydetf34bqvNFUqC6kczX3qv",
  "key15": "5jGH5ekZDroN51QFqQwgKS8A1tG3sk2dD3mDwKdiNdD736BogFZpPGE9vZcagGtJC1pcGw9E8jZ1FeUxGbFWcXJ6",
  "key16": "3wXYffuJL5sJjsnvFJN9jDhDMJfkjxv3MV869kayXMsv9PdeDJE5gQPJp2RDs8B1F8YY5qYYf5gf2wX6xwJRawK8",
  "key17": "5gLt5TehvTuavrDj3p6v6Q5gkKgibWWKwmfUexBxxgNpo433FtkwpvtbKXC1YtanvjbHi5N9fNazJ4vrRB7Hff9B",
  "key18": "4P3LwUmzVBDAk7c3AiP37Ad8mJppqt9LJQf7E92b3y3JcGL1MiFHhPtCvMb87sFaye4TFhSbSDpcndPpUe1yc6CA",
  "key19": "4wiuwxM7oMvRgX7NXMsqhyQ7nQtnm42PRvihXfp1Kyx3m7FwqESWdnnM4p9P3LLXukAKjntQhNkjQoXyWUwFSTeL",
  "key20": "5t5NJnibvowHGJ11rRmrEmabuiMZfxb1xGH3WtHgEPXhdbX5FNPpFnzRrA16dekBWgeoMFJu1fWcpefKDAqKm9cj",
  "key21": "DwbC4zBsNkEhDF1wzTNgva2pSKqvPjrmQmR9es6BcbEubZWDsMvaU7cWBfLr5PYy75bDq7SXTzACQGAHL32M1Cw",
  "key22": "3i6DMBsmNy7qfHCVqrcS4e1b1m6fxaygfLvKigwgx8vVtaCPc5iQPZM2Gcf1z6XazqHLZRjnPyN8UhWTtqinaPmH",
  "key23": "4KLmdThh4MoFBtoxKNmxhW9S4nqCwza5TnyifnR8eiDFPovPEdPQfVHAHyJnGZm6Y6HspkPkwvdxzd91WBEK38it",
  "key24": "39dXk8R1ZbAsQQPRqKaBzAoc1ng8mfWxj8AtCcPfCLsx6vERHgirgHbfB5kBr1ogL13H5QWAcxnG9mVmtrvvfqhY",
  "key25": "2eGraimZFp3iVphudqnPqQMWnCqe6AzYxTBwDPpYGgi4CX9dACquxUz9wepSkhWW1NT9bD7z6BjZyMy6bdwg37mP",
  "key26": "3eSLxE9VVNvEAJ5kPb9pm93TTnRfbZEnZwPfZvRszWPpdiVf71keTHDRomk6gfCSDw8fZPmD7dHo75PiyX7cd2tu",
  "key27": "LnqnHxDnDXyTeduGz5ebDN83XwxTfpcHogT5Ck5mvNrTd7PprbzrrJmrKT8zqG637Bkp5jYfKiAe1JrDoSR4f8x",
  "key28": "dur26mEbuEmyfs3hdbo6oS2yRNSN78GEyeNBk8yMSXBEaZbTE4KQgz6skA6ePHvxRYaePEMGfBkUgjgpZsnfMM7",
  "key29": "4EFk2b4rJ5zTVbj2NxXTZvFBGEJW4cqxRxqiy67SPbkrH8uR7z8vyrQvMdUsbzFBNLqngct435BpicSa4tdbCzCA",
  "key30": "48vmtR7u9TFCLYwXMY8snmTxsPxHaS1soNSG7PRfefeNoYVNKon2qsrtTZLnQ1HiRah8Sqg344Hy14xzipVjQe1y",
  "key31": "naJEbJcsDp2FyK131kDt5onvBLCNCHuHpLdUt5jY3584wqDoZvnwNZ6qAKtcPQScbMj5Fqn6YVyygXqmyeJVdhM",
  "key32": "2sYbjZ7LJRdHA8mKusSZbQLg9UiGNrxCQx1eV6pwSJXxMMkKP4nk7G3dRnsYuEc9NynKDZeijgNLRj8ZV7FtLMWC"
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
