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
    "3xryi2VGz1ZuuuUXNsR7EXxXRMQyBHDj5SiZndirZKbfzQzuHVgcZfrS7K3KcU3s1hDinuc2e1P9Z3FtrNrSdpte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjdmGvuApZWHvo1jahwvTwkN1cAxNqUt51rDRLzmA1LDg57oCtvYuuebLs7D7QNdusCPVzCiwDUCwrCJJmcsvsF",
  "key1": "3EnCeoAWeWPF27MmYzZoejzb2dL7UYKCQfcZLAgBCrsaFkEGGQC9BujRQGwWqEu9Ys8fHo68V1qBwrTEE8Rt61Dx",
  "key2": "2vrtbvvQnMgJxSF664ezomMRyKwZdcR1WvJgS1M4sb9LjgcBMfVjjbqGNLWTrBApZBNq2fFgmy6LCXp5ic6L8GRL",
  "key3": "5TPwahB1jRdhrZgyXRDuMDc9wa53ib5XkFRMM9svgoNkft8bnvJtkWdJxPnFpw2RhxsanK3nrhPUkLhkxxQRS36N",
  "key4": "oiWaJWeGXK3v1QpvuPh2guR2pZeznzAS6vt9xHDNY7XjWLC7GXFoaUAT91TmgmxnRSu6auXZqenCvRMvt3exy6H",
  "key5": "3YCsw8MyXXTdJCgKXbzsRxMfnPBvPxXqTzm8on4sddvvM6QNDRV8jemkYdSXZxiVoaDsceesfKumNL1QaBHzwJkj",
  "key6": "4PAombuGSajTHM7VzKeTadEEp7DZgkjY3Rg7HwtPt36mnBj2UgmaTzrAN8DuNm9Yfy9mT4V8uapAhunJVMeDLptz",
  "key7": "4Z7TjBnUyAKmgyiB6nLhGQKnwv4Hn8TrSUQpNVqcMyo1wTuK91ijPqyExSRwzFiAurjs2cNFqx39wxVBcaTHoQme",
  "key8": "4yEmxztBnqNRSrUeiLTSSC7RUVTzho2Y3pr3BkuWrLNR6oMbfJiAxqbXX2RiKDFQ2dVUHSz4myAjFcF9gjkGdoqe",
  "key9": "3J8BnozrphUzngKPHfwVa6dydPF8Q3v6vwiJ4fewnAfQgz4urZ7G7Mu3Q2d6vKpzf4Aq1yEPmj8kCXKCYGW5vMua",
  "key10": "9j6u2X1UCpTYuWVRcfJukrMzRCMBiXxGK1jMTXDfGQFPMammH2s3R21j5uksJ9JdULJVS4GsHwqYaBDhtpLkJTL",
  "key11": "5YPmtz5mLb4dHxgvu3UeL1wpAsXbFB6YMYJRqHPjdHZcjEvuSAvZ41BxFWvdbgnbBcw2tdcB36TRufkxfYvBvaAZ",
  "key12": "5DEYjzNsj6W9vXGaDaJUvbvCnh2gG29rUZxmw9KhM5RKRT3hdCEnJJfFdzcJfdFHnFzHwujqHjSXigPYDPH94yFV",
  "key13": "6cmgZkak7usai4W2ECamJkWPuavM5jFGDT4rJerZNvaVFK3DTxaksnqQNWKXqUDTfMpRiKrSkcRYrU8VKP7jaCb",
  "key14": "4tuGwxyPsvXfuyJKRMr3d1wfkTSA4gyPUgK3GGcSqGrKQQWXPohUhFiC3pHQt14TxrQS7aegf1tV7Z1UUKHvbuLT",
  "key15": "5L83Ddj31ajm2Zhuye9mgWpBiirer53CdAoWCN75LF4oBvhxYLS1nbvho54gkS1Z7mrXCsXcGzCz3Eg6Fg1X37qG",
  "key16": "4p7qTTnRXHeCURnapArxnfdDUdZhAdyGdoDSkgjdiaYGgUMLfgngA5nPwRQAM3ce46JiCEiVW42ZDdQCtgQv3ZDG",
  "key17": "xd3WkAjoieh1ovTkt91hRXQAM83iMSTjeazVoZBDLVA4m1Zoyy14R2qWCeQnJeunL3XDFuyMC3ja3uYASH9W4uQ",
  "key18": "3bW3JwjiYJWGfTnNDxvqF16cMZSYBZwCwSMZj14drGrkb9bNKASW4mFWrzcwbjq2YAu9ncnQYNHSxEc6JbpyrZGG",
  "key19": "5b3tQm7LYHisUXP2Cb3VABHQWhuy7zqqpmkUm1x66zmKJgSiN1n7eXJEBKKhAQ6bWpf691CHjNNbR7Ne5XmsjFUZ",
  "key20": "56KcdeCMQHnwnqDNdVhnaZM8VJggG12tsjtEt64Q519ibTiR9EEcgyonwPuGAAw9VgWEaKHMrXLPFs5trhxZFJ4z",
  "key21": "5mpxRmfwPoSo7CtoDYWsDd7swX54JSA7ENVYrjVfqcq7oEBgaoABY7zGyhLzLPW7vgR3dZoqtrye19kN5bxzhWFG",
  "key22": "2Fm4o2xP2eSK89Jdf2AM5Eqiawx8LpjaCA1E4sFvrMa4vfRY6vGbNftLp3ctRqZSvpYhBrY9m6gFL6sauiNPuRRf",
  "key23": "5SHLJxAKihUAa8XH5ZQTt7u6cGEEZxckKk6S6ifUn3zZwgMruN6BGk3JkDk7iooy4ghwypfU59yE3vopdgq36CE8",
  "key24": "64gERTQzqhDZj9eHq2hM8tnBp4Q2C6PYcY6GmsCoLttmLxZ712joBNYoZYXxecLn54JEbKR59AWfeKpospVBFLjg",
  "key25": "5dziBTNse8XmZdbELQv9o84jSmgaNSKcwzECDviFmtBMwqbb5JrW7ep1hAgHWCWcdBq8LQQtxgYep3Nk9p4ptGEV",
  "key26": "3YyES1PAUSrf7FevUB4XmG9tp8ZwdYVgAfG9v8iqo3dZFwZaqx3a9ZawU3TQZsJ7NRrW6Sg7RnkJN43zpuTZDHkq",
  "key27": "5U2ELfepQsjNV5CfDjXKivYGzzaWGymGQDmUW1Kv4WLQqCQQ7AWf5eVYchwkp2RR54qZFuSDTxSKwufaAeQHDd5x",
  "key28": "3KXGKdeBhSQYLmKxqqYupvHuTYUKmfbUZhk8Vyb99nPTdrzZ6Hnyjz8bsyESJvs6jJg85uYGDdckXvwcmx45mecx",
  "key29": "2oGwe7fTMuK8ncYfBpdyxAg7guPr6BZ4qHgW3iF4mVn8RQsf9z55XUmWbqgvTYS1Y7HELYP9Zga52yKsGZ1UCdVP",
  "key30": "enXfxWJMDuvmPf9ySvE743s6SY4VAJPLpaxWczLno2kEDi2v34ijXMPuPUdrgHVawC2pSvyiauhfagBDZS9K27A",
  "key31": "37HLwU8MXy4of1CBJtJMhNmF41MvyHH2e2PJxHuCHWmwtFL5K5ekvfpLgSTYrDtVdPgfS4ZzxnDpEwyjLSHGKfTs",
  "key32": "2WwSSsGDHJomWVBfsfQGkg77vbEhe5C1aFnyTG7DypYXRzm8zQxTiZqdeHhPn5r2csMaLvLGM9bL6tco6HbaVg2J",
  "key33": "4fmBYz4FDbo85L536m33Q2GFPg6kx65W9w44xJ3VAkocP5UUHjysPa3Fhtirw1jrnGJKEo4VBxEaawdZFot4hWcD",
  "key34": "5aHTaegn9rkv3G42xjgXMZzkruQDEfzpAKDwLtKMrLCiHGFKsJSHsXC9wrPkxUWvcvjY9o1rFKiqENby7QdanSsY",
  "key35": "5DPCvgJ3abCcqawuBvWWE2tpSHmW6Xq2osUjcAo6m6NMnRpgjP8BPTBeCRVzWjcfBLBNwZzbawf5aMpqkj9XvR3Z",
  "key36": "5agNgPfiqSV5RP7FgWMJTk9hK1zQT92AyWtrnyAVNEVmHuKjga9STXU8xkoA91oBGoaqSfNfXoHcrigqTWwJZRq6",
  "key37": "3noVqVbEMMgGc6w1B9Yt2zQfaVyjarhLYncrRzDgQ8NiayPvxRRw4WVFed2zi15zLmrVJgNV7rs83ebqdiD4F71K",
  "key38": "4KTHfz6EMMCBVFGq83RCEbdS7My2QWV9guYDmzE1rgM8DuosuvWpB1yhHFZZCo4An3biNuX3y7bnTb7enWYFSQ74",
  "key39": "fNMEQbrWuCktfLvdY272oRpRwzoiJuyaHs2DhxnBirJTByHHiDuU7j2bkhkvgCCaUFaDp6nwGFtWHUV1Pqtqjuj",
  "key40": "3KQYcJ6TRh1LxUpUiK6RGEMJknttvoQWHKpbsgyce3saDoAa2mTQ28rfh3bzZq6Sk5j1bFi6srD2EiYhUhuDQFhS",
  "key41": "5vUDiBQWLbMALd2sQ1mJukFQoSZb72khkQWbPz3C9eTCiBWxHkX4ZDA3AEtUGimk999YccxuvuknWVhumDX4uD1F",
  "key42": "4FbtU4PacfYTBAPWAbNmXSn4B6ozWnnnMQ9rxTEsHKsTXM4nv9JzgMjPoLWJQm752VygqJzDqrowWvrf8BRaLbhN",
  "key43": "4FRQNRkAUpFWhfmAEXe8VuMaTasrJgjN1FEAPudnBnq5zpVhaLeb3gFSfhgftkLePbortRuxW5jQtfQRbewu98yb",
  "key44": "31mwPPkYEQo8W2mUsBrYEK9b4JZAuw1E6xY2igtkQ6w57Tvupmbw4QKJbeSPV9xTfEJyBjGZrfYVo3bBe56VdHEY",
  "key45": "2QF5hWKHFCLowAwrpbU6U3eF5BQHQYfP5xX9Qgji5ihdJ6UFXAC3uuvsfViyunpmPEFkbrmKRYnvYfvNK9rYsZxu",
  "key46": "3oWu2NLjgpE3vYQk1Qyvsxc8QD4bM3qwspHvqFSqm79oaEtf5ANpDX1tkUsLj7xzLJRREN183ZTNcApjZehGYj56",
  "key47": "2WFcB1ummJ8NGh9poTvUNrHaS65q6sJciqxgWgvsfYxrozjT2RHhkQW34e5D2zFLTx8qamBahSc8YFGrGm7Lt4ug"
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
