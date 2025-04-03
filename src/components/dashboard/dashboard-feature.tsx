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
    "fninsem4kJAybFXnJniYHibSPNM6ZQ1EMLA9btjYvwAF1DUw3bysd1aJW95Bdn55BCPj6y7jY7XYuWUCprVieoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZD72kodTQmh9KZvtVYPi86o9jkXWGAdmsJL71zRmYFFHTyzN5Kf2wrRFyvPpXLhH8dEY2Ht5Qtub763rkaJXtu",
  "key1": "2wiXNnArnm18utVCFcjYr8i6kR7VQXbLEu6fm6bKtRkxs8RTPcxvuukeuKbK9D7zE5caKGMhkouRdK8BHB1Bdq52",
  "key2": "3TSv2mjb43KJg1hCFdGXZrvVEQDJVVQQgwazodyfuxmpNNDbjGajRp1H3xE7fwuUwvacQr2xu5JDpqUa1SYDf1PH",
  "key3": "33YVYhePznorFojr4PetsukDg237d2voSRRZuszDYUr9825Nuy6xLxfKUZ6GRyWZ4HafnYQmH4cFaKgpunsRfyLP",
  "key4": "2htWAVnbbZJb7YAFULYjfR4hRDMvWJbKhNvVKXR5fvZDMQmM4kBkppLwFCUAuLn1iRbDpQfvETfAUtsPN7MuARCZ",
  "key5": "5pdhfGK49rZwRkVXArGhqy9hGEDCkKq899auBdA1gzFFwwTe3NoiGsiioGaBWMEsNzujLsrKsDST3W4FS6HzDayx",
  "key6": "WRrSBxCzmRdG4EERrRfe6hSX8mqrh1Wfq8DZoE9m5uR3dqZkz1F6k6Q7j9n6Mj1UcXQwBkGAWbd6R7h9rvbcTeK",
  "key7": "2EuXCoZiXjLKMgfQg3nBctqWn4VoSqRJ7r6iNqynCdhDLrLcr48kS6rNBnqSG6NoeoncFz7azP9WzjRCajsWRvcb",
  "key8": "2RfD1yYPF48jgFtmCcMjNbdwbfKjNUjFfxQt8H8TGMyLmATAADaE4ki76kagVn5EBTgizXbTNtJcMoJKCEkRcTsi",
  "key9": "5Rdd2Bs8fVsasU6GPw5CwnHgjiLDhgLsqaX1WpYQCPh5KbyyUxegdLj3EWyUvuHbBF3U4eA6TpJ7ctHEycWsUrhU",
  "key10": "45UDEyMqsnU7hwekPY1VWZjw7K1cc2rgUpACr5LzHbQEfNR1b18YxKR93J4zrLtLohGuSKrj5YXhryN3KZ2Q6xQp",
  "key11": "29M5whMGDEAMqgTCEz68fqRmXw3xnWHvrooZj4ZreiCjDX19qhkjHW6AaYP3MWgx9w9eX1j6XA8FPkuPWZEiVm7X",
  "key12": "5feWuWyaGJx44RmowiET1LBX1KxbKp29THbfuXFWckeY9de6RzcZG6D65ahCZYDGUeudxCQyH2GcBa8tHhjch9dJ",
  "key13": "4pk97r7LbszJXURbjue4qPGsaBJ2yoRTd2xXoTcsLvvZxtNSMEP2FDefFeY1TcMZ3iVN1ztJCyiUkMJyiSq7eXBV",
  "key14": "315VQMPm3sS9wmMXqkHD5jVtKTvmxBJ29Ja5p9NLhgwEvRv8ZUu6FMcca9LWGHuUSPssjw98pSLaj3RHz4RrJYHd",
  "key15": "4JMKSTTwg3skaRCFHtVmLPM3gsVzfpAjMRNeHATHk1mQ3zoFmo6EiKLdfb9JW7wKAySv9Z8cxVwqFDmChgaMwzjD",
  "key16": "5CNU78KihjKCT8BeyS8bZ97thsi5YmnvqmycxAEuyo58YEEZ3mFpxcniKdWpW1rDgRDWhj7CsJQ5uHqQqcYt9fB4",
  "key17": "64bjkt4gdSfsfZjYYehfbRbz4N6vBQ8g93fSkhoX66mA5GGfLKxPeNr3Wyfbqs2HAnE82LzufjYK93JLVZiPsXTV",
  "key18": "51v27yrEgEgSF6oZgJip476cmyJmz9dJmHeoF9N9f4HpJaF8ctmUEL8bcYparjdVwHEeZykLBE4yZWKyL27iUbeQ",
  "key19": "4Fi9gTcV9BkCBrkfEo1B6nviDkRYnBXD9rfL8MKyEgvbNqSA6JisyXh2LmRmE8cAc6Yw6WUmS5W5sBUYf1guSu2c",
  "key20": "ykyM2XVQ3tKhyYn6sZH9ZmphSbpU8vHsVwgmiDwnZcrMPoNnWDWM1fdn7LVe8vaUEjuw3d8CBCJFdNdswChUBTe",
  "key21": "3GcDvfQnNK7Sx7r49d5DuY4mvvsrWVfoCsfgi6sQHxAnhkczgj1xXzrY7w1UoRXMpM1zF6z98YxErt3TebTWv27H",
  "key22": "3RxL72UnraZdmWY2sR4gXxXWBZxS2aQz7JbzCAhXfuRZpCYukG2cmTvFb4v8mcJ3ZhBANhWffpCWYL4Pgi3tNWM7",
  "key23": "2TtPGT6cAwgqVekk7xGLSUyLahWu6hjjR2ZCRyi6rUe4iPtWmU88YuDsmF2zZywRbbxzcKjyFzJDtMziXSFYyMGU",
  "key24": "5LRdyD5Dfm88DJkyckdHHG9UhGETifZYu7WSVtSe2u3QZCKnj2WdvWimPHwJaSDsrAmoeH8CUhg9ufsVfyxD1hQT",
  "key25": "4Vy3gCm9tx5CvdyLyZuGGjbzB3P16YvpQEjuNDvH5AFHTTqHyoCYQzw13W8aSftytcAUx5dJ9Qgugq5aweTR2cCZ",
  "key26": "28kpDDmHyuiErVQYugns9L7f1qBaVgbXtFwnfRq11FBh6ij3sNVfnh9bog8GQzfSLPuYj5YdFwRKvDWrNcU7gmXN",
  "key27": "2W6JtrMyrnZYFLfHitQdG1f3W7h7PCiqUnA7vwUwfEH5dxKifQknFu76K5rPPd2hjs5F4bv1Yd9mm4kdqxRqV5vu",
  "key28": "RM7Q6keHpWpUiTye48EJhGYug2BcpUwH1AsKJW4LsCkwkX4c9ZWqzPKRwV8XbSnNZw5Fq22EFeUnMSDvyVVCGJV",
  "key29": "2VEVgaFYGPzxE3izKtqf9fsMuFv6QupSbyv86VK6KB8hXRWs1XWPPnZEMStFBaZEA1QMh7KAhQD1JgaL163tMfdE",
  "key30": "2oLt2h78pWTyV93w1auouNTqrrB84KUGYxLQVWp1GjKMR6UjkAGiqRsuNQTHVwWQQKzSuRHjyUK9mdawvh24ufgo",
  "key31": "5CSzPFngMrKpqeZLMkkJQrZgGEF8BVHCsaNc8BzRNnxd1NdoDR7pz6i5WeLdhSLiK7vxFLKbjiEZzJAn7q5mCUBU",
  "key32": "3YuidM4UVhemJDBqQnLncgzFuuzhT5mGF2Q9NBK6LNV42TkLBKYjagHUowbCarasAPfPDFyLb5X5Tm4ej2fphzMw",
  "key33": "2rbZhZ9EHj2G2nN7LK5GnXwnfmN99EqqVmbGsiyphy5Yr6AVY2AHMWTenkyCNFKWtsZpoqSVDwMnAunbHgmMwUQM",
  "key34": "2tRUCUjdFGd6QdWC8vh5AS86ZzpGwLSrV4MPZnXsz6EAZik2MFyYcpVShLDA4cVkL6qpPabowuAptLrbnPxQBQ7k",
  "key35": "3YCf1nucrwM3YPjkzyohmNTGJdqripoKmAA5eeRHj3CgWNu3oNJttCGXM6D4W2X38xwgAJ88UdaWesTsmZ65oM8C"
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
