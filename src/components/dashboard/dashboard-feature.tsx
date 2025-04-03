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
    "395NqHiq4i7DPLqcD2QHDNsRpW1d2FXBeL5anTmBz7KQHJ3C6dwfhuhwHKtSG2NL5eGb4GGbFHLMqRJ5tXZNQdWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJR3Q7YxQMaWDwUnKDL37BkSYW3ivX8ssAemevsRdcY7NFUKinGddWrrw31XeSVrEHFrJJxQTQHuMsDF3cBfeRg",
  "key1": "5L4GiawBptcxK8N8ysFQbj6mLPppczdLnjXNTusfEy8r5xsyoJyrL29gZYbj39phpb8nmKEtZNXWmJcWZz3ZeUaM",
  "key2": "31K3RfUsqLJetahY5dDFeAwWsZud6JzQnhARRoAgbNjgEPoQE5nZiz8Px6pcYCUnTLuw7RKzHD5GGCYJVsdsHe1u",
  "key3": "4pjiLGV3bgBzuqNbhXywb5PgyyWrKGBnto1j8pNAeBFuJMY2pjAZaCQMV8fGkEr5GpKzcLP5Jpx7YJdmEt7dcCFB",
  "key4": "58aqNiHPTwRSxBzBTYWitvbXerG3owa1iTdMwRZMyhxTR3k9pt5eDNMEk8j1rrxzmhafZWfyeuRHp7Wmyds3eRhJ",
  "key5": "4brwobQ3tFoPo3eZs8dmMH6KbqwAwNdCvvYrwUbxM3P6Dz4fmgWtPhRSz2BqtqFRZTEqihCdDx55Y6Dof4gpmoUp",
  "key6": "32cyrQioGqFjpV6iX4EEdxiTxYv3LZRUUAfuKJiUJ8GkwsdjKMe8vropchCwuxTS6fUfnBcF38CW6BWhqbS5SP2L",
  "key7": "3NsDyMixjU4vND4gpdvqxcXdE5rw8Kxfbc1fBSXDuXPGmLu4gTg2J4PjXFcP8K2FaJpuGsgvFgqDnPu8xfmNGAWk",
  "key8": "4jpynqy5NYygdusqwxLcbhyJH7FMLz28ZmsoP6aLNqDMFXqsn82GhzzQDSDZzrQdGPcG3tx32QfuHNuBXwUWx3DF",
  "key9": "3C8Z3RRxX33HJ7kufJdiR3uG2RPWxJVNSXDLmSkvmK1xH4sACeJiGZvHcR8yHKAXUS8TJNAz66GpgaVPCx3RQ5ZH",
  "key10": "5MRJMwfk9e31b9u9vwodRqSj1coqz1fRrRKE5UbQHgCzHWkdnAmbgfEbRUcwAJJ38KPGba3PKvdsmvjCbRzpSCfX",
  "key11": "7cM1ndwKK7EQ8MZH6ZSw45sWNa3U7TQfs8BNKptyTQUnZajNEwdkSp6o94DMaT9dTJqAJ4yvt7zPUqhosGjyz6k",
  "key12": "4SpzoLTbYTH6VAYE4juLy1xzgM1rsQVtG4AtphDSdL3Fz2tydb2LUEC8EWN9asmKRuycdfAycgQ8eiUV1jsUsfmk",
  "key13": "2fp55cZJg9hyUDPKjbua9LPA29z7pMAmFSWoVj29BYeYTDmZgYpt1cJdR52Qu3LKLempjF1HeUVVyYt7cBgxTArA",
  "key14": "28J3CXqXDkSCYTaL5dTKcXY8Hpr4DwwXZXnCYtW4oGbTXMiKsXU9y9FdndSvb4cWYhiAVFfWGdv7H8aMnYhWDMPB",
  "key15": "5YcBpyfPQWf3UdcSsSWGFvdHi5ZsZUShcajBGWLc1iK9g4sStzkqyraW29LTE2rPzEDvEHeaizKyw4tHZdynD41f",
  "key16": "2QpQCUpA4fAfew16bwSymgbJmsQJtTQXhPDpZQN7Vt9saAuqEZzghvftjH3BebBfEMzWyge21MWDhz8qNaePXaon",
  "key17": "2bs3McrBf5NpVnkWjCs58R88qfG4pyb4umGDLR3MBtD9q2vFFBDBr4X9UxQenqb5hd6TG1DpAsF4wX2ZgbtSNT1H",
  "key18": "2upjPp2zUEBgniqe9GeUtX3QpmJ7EeSRfWTgFMxSMpgfY71UMgh9AueNF9UUfpVu47mRkskNt3yhBhgDnLA6z62j",
  "key19": "5a27NR1BcRZn8LAWXre2tthmFWghdSQyH5MmHGV7WN4G49gu7UEhKjXkD9Mb3U6TWfXS5knGgZvCgHaNHs858rvV",
  "key20": "4Ji454XBBFkEqtpyAzGroCRoyQj8xVEPdVRoBSgDVqhUSz9bABxU3sfMd7w47TeFWgznkRBwPnjJrHrrceTQPZTW",
  "key21": "dvjmWRLqb3e3yaC8H9ovbxXxJGqrhRXsKZYAVFdrkNGYKKHa6an9emwdqBqM8MRJBG2ZRqHXy9abeeomuPwnw4m",
  "key22": "FX2Nub2Wo3LdwKdENGyEwRAj41RPGYHdXZsTrp8rCZBgiKdjWBN4NZLMZL336PifhStaMqUR2CFMYYTbikmXnhi",
  "key23": "4H6EHPThwB2foTKwrysTAaJSaYRGgAGAArnjrk8RtQUKgiVKs6YwJB5nQXvCaowKNg9isG2jiEd8qbppdSyDmXWk",
  "key24": "4mqavsYtr2A9DstRnY3yPRq7V3ejKvyYtWiaxT6Ta5XTQ6qFD6q5P3ogp5m5WkQJmYM6eHTKx84hLiqwebTZs8xj",
  "key25": "36hKkX7JaoduzeFoVkm21i7MPQEsBrRzPnTYoYxNRXQJBYJ3ZrnLDeYLHzo544P5TMZqZRnYFTMpJwP362jdk38V",
  "key26": "4C97wMrqbXQyLitoJVp9dc9kzfK3j5ysFCytY9BY5TFKM4Qajcmwazen8gMpsUSiirqNkXVobCpPpWptj3wwZu14",
  "key27": "xwL7cKkd2cZ9Tajv4FvGmcedBMJoRvqqmvdg9d7h7ZEgicrY5HJT8hJQTqYMKt8hiuByQgieDvjdCLh8HET4po6",
  "key28": "4N2EH4Z1NyxzfboCC2UjpozskyMT8oULaQtskH991sgJjifvKVwd5sELbSwYhvf8q7so4BLEthpfWNnLDhMp776a",
  "key29": "5i8fKYpbTM9GRdUfCtEAjydDaTwcBXwcF63gtYTf18aSyRpduFmDKw8Rv3mgMszrTGQrbRxT5t1MkfovPxr9BpmG",
  "key30": "4rdxf83Fd5tUW4A1G4p7xSo91puQNsHXKvHZakZYckpGvWZzWyMYkNyp6dZohw33aF9vhdBZfMo7axqK4rY83vgc"
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
