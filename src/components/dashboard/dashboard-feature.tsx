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
    "5ZibyHjrwNXZhxTuwNx2xvrLhXqpqqBbbUDiXRsWwYU9pLxY7hTLcdHhzUN2Jro89deazsVyNhxw9Sh7rVfZooQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xer8ZyGEeZmKYqBg7saGxd1tYohMBfv9uQutZmiLkp5aSY1b2bG5E4zevGSP4JccsnsAQUZXBEGqBJ6dZQMVpnw",
  "key1": "24EhCuaTkSuQno8LQVVFbkkGDipVraAD3p5bZQo9VHo8KhXwMMs7X7XGr4BqP1ZwrFMaUjbgNrs4ND4WhYJgSDcW",
  "key2": "47kCke5jeKE7NVPQQiraCtucEeFy7dU837ztZnceCjbtW1P7pqfRvvZ1SX1iyBPBqSAGa9WFp1AAfoV7W8jB1WV7",
  "key3": "4gv3HskSZifGcg4WsV4WCkCXqee7J2uYnKkdLypnV64r5XNneKopsWT28MHASYxekkqQNm4XD4GwTaCe7e3gXCXX",
  "key4": "2pSZoVGtvbj5RDJPpfJXrdSkU5AqiY1ZqVRhPp5ps7V3vYqKhwoTekeQKL8ioCmAHMwTfVsHW9vRq33f1HuF4xTp",
  "key5": "aFARoTseY2CCmAmL6EhefsVASzKtUfd79vo4ZTX2CCF6sYS3kFomXvba7YgTH98sHRqH5yrDxuJhYi4SEQVw79C",
  "key6": "43xRf3oaTVzXnxFDLH1wkDE2s3VPGaGwT4WMSY5gZ3b7m2ZQ5WjTucGa9rKqETq9N3JoVV7FwwYSojs9W3D9s86r",
  "key7": "3DSHhqSDcbbNydmFVVqF9wCxLm6JRCatfE4CQbQvr7Gcfxd6UcKgU7RNNBUysXHCtRj8YKv3smGzEX1CetXN9Kw6",
  "key8": "PUwMnfn8YG7zJ4raSxb59pGe2how9n4Tt1mp11HkfrBFxoRQt5JTqwQEy1HMwPPcrouHhdkm6VjB9gVxKpFvzDo",
  "key9": "4PGqEyh1KGvMAnavy2bkEcseL9sofxG9nUfgo5X52vqTePrB369TvETy8a1h3sERj2G8Xgy5jBdX7vjJTdbJdPRG",
  "key10": "5e9DcvqLpXNQip4axifVbrWwGgderbB5Z8zsRQ345wPazFg5aVZB63CayavdE4CV3KsP5BrzU3AVYErj4QpFbb2T",
  "key11": "5AtjTxZQR9t4tuhUW2Bzj2WgyaRqU4av55bYRL4mVrqpd26JRFXoJxq5Yao5b9AhwhF39UN9Zxer1cdzUKkNsQKz",
  "key12": "5waz5jqVVzBwacqnWxWrzK6sdYGWBySMysH4cfVxRjSiHMCGT6qQ12cf7rH8EnhFWYuFoExT3hadb5JUJX6SfFBR",
  "key13": "63nTEGaLi2aMugiBjZsv22yzyrxB4318QZDTqQEqNswZBWkqTn9Ja4uVTbw7mytQTbgthy8hTfnR24QbPS8q8kKA",
  "key14": "2nyT6qfqXG9ixzXBicjZU78UwxVPv5cLnD35aoeutRd1bbm3tbJ9kHHBW4ERR3sFkrd3K5BphKHRwzZcqoYPnmMV",
  "key15": "HufFs2MXwfZR4nwFuYjASiWDromkXaGfvEdpZLJf6yxgU2fWJmRhYxJBMYKL2L83cV9VZPdyVfrZ646uAphKZ41",
  "key16": "Rc2tSFjWtbWaf5DyLniKtsKAhEtBT9Sxf5rYrLyQy1c3JPvqL3i2nCAP7axLyxEX9ASg5NSZTE2DuQkKgvFS8sy",
  "key17": "3kknNNTb3BUje2svhDFZqouigpqF2zixgxUzHTNcDzzbwAESCt3TaepFMffRajMUHKgAMcARM3VycwCTBCi9sj55",
  "key18": "3PomQ25j4JKvBPcjmVU5JY9e73CotkVcSZPoKgg351gDg7VrjgGDkuBdXVPzryFyaerSGwhgizCGLQNybWe6pKBv",
  "key19": "5tcpYRbBmL848Xe6j6kxpGDWrKbdokDJsX2qxXnjidk3cKqySQ4UDToyzdbVnjqfk4MCsZN1T9bijhZfWj6Ey1gi",
  "key20": "7CWPS11tHFX8w25Ktemezg3y6ejbrQSRiEbZ9aNYN8rCrNMAHotMWb3YSK7FDTu3nMTuvSoUrZbqkNFxi6s2oGc",
  "key21": "5gS25FrGcFYiWdAq2JZeh7yxifoquVyxpioigpzr2aUvUy6zCWgFh4298F51WPpmNNEn2V4SUEguSVzjkXGW7q1n",
  "key22": "2rWSLMaYiP3VHmhV4ve1RZKV5GEX6UuDjZgAXhEQNsKg3vxYfbjRgfwycNPS76NptexNq4zaVbhvhKAHjJD8TRtE",
  "key23": "515cagPEFCbYUbk9ypj3W1tzsGbQnAgRfvqbmkqkqjYA4uxajtzDKYBDrQ4LztKQCWTDRvFAoRgyrHUVUub9vwhN",
  "key24": "5f6eM7DjAgQTQSo8YN2uFCZFC8xGDJGc4KnoAopnPcHd8VJtgArPe49xE3emfHhgdoxDppbPnTdWKFvfzkKpQYSm",
  "key25": "Bm44LUyakZkMgmnuLUKKZDhXPufAW5Psntb2NsZtfBJbsu5niNXAk4PFSQh3sDs8LAjCfo1PErTaK8sBvm7a55j",
  "key26": "3fEBFiSWzjQq6eEzLFeszgAFLatBDwEFAn1d3e28XNMorjrWNDtNSPkDLaU1MjKoRh2AXTY9m676qTSdwKGzjfte",
  "key27": "3TkASV8qsTcQsnCQpva9z6PZp6XbuZcwoDFfuF927gUvWyqYad5oZEWgYGcwZvF2xatQBq7EBv7Y8Fit4c8SWbRe",
  "key28": "4ybgURaK7Z89FVuFS6xymqz3LVti9q13ncYu5QgSmUyoxk6mVsSB6Q9QZjDsFk4vGShPUBDUDtsNVQPD1fH7ZirD",
  "key29": "3rELy1gvHYDZRBeuGPdWrJYdZXkpH8YgZv3vxSVZE6Vahw74PPKzw9SHgUT6T1qzBNU1THoQZ9t7YXCdRpAhFA5L",
  "key30": "Wei1tZXCMinh8hpokDrvPsp8zSe6GGUd6JrfjFYbzL1JiR7ZCRKgpKUA1HZxY9bR16wu24JjBqGDi3jVPvYTKMY",
  "key31": "2CVwfcVYtZKBBKLURz2382ZqkBboNxah15Nf3RffvCwciSN9c6BgTRUFrsERkKzbzoT71qaRMSTXycsKCY922GYB",
  "key32": "3nRJzHpzPWhsxuywKdcaFzqasS4u46r117ct11BrZ1jg55HgowVxi7fLt9JhxaTYuCaVGtnJQ2LFQj6gNugUASqK",
  "key33": "5mEtZeEb3pNhenTv2ShyrHVen6uH1T9YfrwPKuAtL9BrtoXE6TyQKk2oT6XXamZLYYLXJBdV5XJG1q81D9R38EUR",
  "key34": "4vk1x9ZtVK3oya619EBCw4QzDczRQqAnZJQGeXv5j9YymzZBUdKQ62d7RnpaBiZeatd2J1xeyP9kaXFMqN7VjDq1",
  "key35": "4KLSbKmCweW394s5GrpTNMcApRdVmAGjgwmPjbE9tKyHTWgvhXXmCEBoBJ6Hj1UZGt2Trq1mMzJVwvegpdUtZFNy",
  "key36": "32ikKpEcKTVdVTpEoiK4JJM9iQ2W5iqctSeCbvoECv8NxQhquojSS5iLMHzXL5dWyvvPGuDBDxUc6FFt7ecJ5vNh",
  "key37": "GhtfpeFNb7n4DHG8edpH8baYQvJsuuWQjMBtqCSfu8QSe43YTW4ezRccKWZ9YXFhKFHnFsEbQcRii9D6gEW5RaK",
  "key38": "3fcpYnjiRpaqp188XoDcpaKMaVAQp5mYk6D2p4vFX47BZ7wK5zSifeesJtwfyrzd4YeGFxGpYUEpPd7sXkUxXq2n",
  "key39": "kPinwBZsPZUCjtCAT7oz3pM1UzaGwec13M9GWn8BF2Fh2rD2t1zuZNLh7o1txFH7oGovViZfJ8J8LpEjVjxA1R9",
  "key40": "67p8DdMxqw1q828TCpyMXBjW49NUcqKXnzrR3dvY7PCg2oBE2FFwtzAxjibQnD5QQtGjHARxFrjXV5mwwhzt9P48",
  "key41": "5mncUJNADMkdjFHd27NHGeXu4o1hdmg16rowcEcgVWb4G65Jeap2YLYmizVzAJuGQbZpYESZyHxM9dVnYwrUPLVZ",
  "key42": "2gMt1LJfnmT5Djg2Jpd3aVVLqzntTd8VzX5bFZfpPyUmF4Lo95GbnUTPuJY4pEXUQQNZSeRcPbaMEM6pFptWYGy2"
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
