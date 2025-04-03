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
    "s8YquUPFK9wuqVRrn2Lf7FAywNemgG79jmPMdnhzW18HCPSe8btgGS78GNmknBsUTpjnxbx8nsrhHiE75uXRmhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fVST7P3D33VyuBCdzu2G66JRdudMyGCtvEBu4ZBkc3TacUXz8RWbgzqTWZEeCnEB4j3tvEjqJGZh7Uv9D5TaPux",
  "key1": "5e4kcdjaQGVR12oWdjNDvu5a1Yn9bFz3prMKZPMoEry23m8FUHtNvvdGirp9xDoFcMFgbjLwyaCaPaXJJ2o161fX",
  "key2": "5sgYxdbTxxgiJkFHM6VQkScvAZ63gN2CKRoaB62vZbmdiqG2sB5mfPy8LYCdDAFxPhcdQZSCjH8UfgZYWkzBe6q3",
  "key3": "3KYApJr6fnj8cDYbUWaXa6t2VKSSXXnY8AMXznJusDmPRw8njfFW99LoH9upn9XC4vSizSBXXQh97EjbCBmjXCGq",
  "key4": "3urMQSABNuGizG3VxLQBd7i34KTek3YiqkvP44syMKcxCab92DYSpX4U84ATBqFweuheWpHNMMWTvAXCFatv7dbB",
  "key5": "dD4r3GCmSFkYoVkjxGnfgFnhhr1oKvRWKFLD6WX15JPCKUdcCbg2hgpJmUfa2xYokVPhPpW3zfnpTn6hh5UkoaP",
  "key6": "4B9dW6dj6vZ5jTxg82dTYA59PPhFeiXe89dGwzCeaV9TCgSqzRw1XGKGWBboDzcEk9RcQygjknUNBULKTpRFEPcx",
  "key7": "kFnt7y7pZmMFaH5j9FGVoc5Ze4tceN74NNR1Zrxdhe6cFDDFcSy23BeiNwZzqo7RAVHPedekjLefMQMVoB7ZeCw",
  "key8": "GwxNJiFXBXAtwGtR8nwqTgGgftBbRQR2cNbKJwjwS8R96HjJW6uaKHaEkpScPSQaT4ntWQaiDpyYwqDtRwad1yw",
  "key9": "2GqiwkBCey5VgZq5fsjQuWtQhLyMZXgt74EXYpDSXzLBCevHyj1zqbN7W6unJazUuriqrdFD4cbPWaT1sDzsaY9x",
  "key10": "61h9WipVNtpa44YzqgbszuL5NUBu6xzfDDZZDbC6WTbcWqHykxppkyZgGRi8SZMpQKQPV2KFHxV2tYW8Ni17SJvV",
  "key11": "5pbcJZ8mrRq2jkaRwiu4p5jbbtsThabEK5ezGZUYETLLa1UXfsXTeFvya1692qdBNdhfEpdvLD33qtS5kaFUDnKe",
  "key12": "5ww3A2qc6BEk8EkZjnYrPoS2yfU1v2BYM419qTwAYJc5HUxZdjxv9Q183KJEWf5qUAdTUTUQQujmFa3Pvi8royS5",
  "key13": "dbUG8wBEDNLq2qHwr7rYn8i8yZKPTJb11pSX7admCfQ6U3vaXbQG9mJZYStNL8PAgbtac94rDciebBWjoLfsg7h",
  "key14": "gXebuaUky3JHtmF1Yk14uJzRG3N8nt8Sd6S13efBPsAJYxfqjwafqzLjezsykDpZMaaoZP42U67sV6rQMXHn9dn",
  "key15": "457amidQ9pBAtPTz9ejcpyvAY8gpGbDwwA7k7wXyRoSzqXpmZLWJ6se2fkzWmmWkJQJ2HjPS6fTRDxwvhUXs8uwK",
  "key16": "kxrrk8baD1XXhTg9d47wb6Ngjjd7M2gPXhzVG9VnDhuNqyj3cG7MA8tCyrPSi3PXzJEnfMri1WodHLUeAJYpMfm",
  "key17": "3NtVRGQdEKn1RpP7FrZi1e7BiNetDeLcrMdURFdnqESKV82PgdEYVN86TQfSpUVFSb8qy1e56FLZNY9Qeq4SPhDM",
  "key18": "3LfNEDxPv6EBUcMWAtAzGLC6ZTVdUGVxD4qcH11DvibhMTGXWgGNpQ5xuEwfk2vGQRFYGwfCNGpmWzQDAdb6uDfX",
  "key19": "5rkgH9GXdWfGZT2SMtJ4td53QEbr4UpMQ2nN6XtKezs1e2NRWnQ8yDQEz9BdGeuN23TYRRVF5E8fm5wcQFa1roAV",
  "key20": "5wwnhesBcR6LsoQeQ8vNZd5EK4AGukq9EbTEeVvLCvZqbHYUrLe4NKRt5NgSUgJUQwx4FvhzVhvKMPe2AuFzvi3A",
  "key21": "XchLv2Li2Z8Fhe14BjFj1DBmRv6X7jM4U1QturKS3arvmtL3znJYRVH1JhkW9kdmofDUp6nZGnV53hb5Wht5XS5",
  "key22": "2CCkqVPSBsqBoD5MuAvX2xAxV9mFY5NWNTwBCiDTidYGJbkZY4F6qe4HTQSVmdStsNzqq9T6UrMd3VWstru1WPRj",
  "key23": "3ErPETyrofUvdmZqBzYiVdcMesQgc5jf8y5vkR7aMiq55JhkzraTN7LgUoTj5n9J6wH5t18AD1DHmu8eCLoB9YW6",
  "key24": "5Z64APjj5csbQqxRXpKacw7Qnq6mkn1rBKxRwoeVhZPcjuCByk4vQkmDfGjPDaTG86umbd1Dmyijk3ya2cDb7ZW6",
  "key25": "3HrC4VgW7TqgBGnp55whqGPWSHb28AmCXwsELsZPsdW7RczQHYzYpRjCEJmKYcfwTccDrhnmpSetgVvNBc9XBt9o",
  "key26": "5xUdh2gpXRxsJD3pTf7dTqB8TxhQxD3tDxRxuzWLtg43qLbDUf4NbAsC5VyzPkckKxStUXELfAVyD9ysviFWbyEh",
  "key27": "296ymdjZFjc3LPNbuq7upg71ZC4qdGDRk9VKgBjFjoUGe9Yvbp4L1VKFb4fDD15cskySyt9CwrEYNMnn5M8xLgct",
  "key28": "5LWCue2JGYMHTzv4rZWD2uUY7LT3WXVr9LVGcZ8zaRGPhy5sgBbYyQNAY3mfRaQcBWpaZkrimQ97MtR3aUuRs36F",
  "key29": "5EPTymgguXhNMLdcQXoPG51sZGFxvfyPPRopz3Q5TQBWtSjDCcCEep7WBTDjFt6vucYVfvLSTLnnENG8NjcXGZ2M",
  "key30": "454Q2fvLU5FH8rgsEBpuD7Y8a6nJsoMYSfETMCVrDJe5HconeMQkgjAAg4rNNMteY4bwuoAdo1Muw7Sup6HRQvPJ",
  "key31": "4j1KeGoYtcEiJ5voitgRMBHMMHttrLi6bXT4CBrNSkgcTxhSvy4gznzKNbVnGhYcPwyJnJszaZc1VHnrnDszeKFW",
  "key32": "3gqVYk9QDviPcyw2BSBEAHKnuC3ypXFiVao7Sr8DGbWnVwNHZYz6wGS343s8rGcge8ZrGBZpCHothfRnva49o2u5",
  "key33": "eafkbu6TNmyJvn5Ved3aWTMzZTNsvP7VMGc17Kk9hM5QP6z9x3YPiqow86xSb817eojUni2WUresabZks3EzCZq",
  "key34": "2w3iVMRYVnipZak2ueq1bpXhcmUMRnrHjuxTvZd79u6vWKrXmiQ6ZD6QpSHNV8rgMsazaqKD33TrjbNjQYAx35Xf",
  "key35": "4f1Wz9TJsh5wx3GxcksC7AQmGfoKr2SUZLYJYE2iyF42sfgyDvzN6buLBzVX61FzJxx9NaYigwNKd2nFXhw31Zmd",
  "key36": "2w1WzkvcefR6b9j43ysadSeKd5U2W5c9ULgU9LZuatS73RCpwrT9SuLeUDyqCN9gX4eE3DVtwyTSMtdWeeFtdyNZ",
  "key37": "3UgzH32mBcSKakMo3utsL7kKE2iZDABajQexbaPUS4JML2Lqb4UAuerQa9SEckj4ymTTJBv4yiHunRuzn9R648KN",
  "key38": "3r2WNazr9jnSsxtDoqzF9FCFeTvJ6mSzv4GUuFsHqik9SFpyGD9sY95nJdNtt3CDXGphxV6eNJEDZqrHCU8RJXh6",
  "key39": "E4fNvM3BojpbSY3dAU9zYJ7ikyrR1raZSNtP8GMBVwsq2HYkM8uZVpZi8y54SVTzLDSK1NDfjZ6RAJRUzZapHgG",
  "key40": "4NEKpjaeWMsATvDxMpqepHgMdTqgKLVHWnM48m8jufqPLWtxU5nR79bY2zK5pjpXvVZkiztfZjr9tossy7aBY4e6",
  "key41": "2yEzUKbZY4Bwn3q3tiv6quP3tYXGE7enQ5HJpxhh7ykM9w6bz3RNFgz7RVtmKZji1aiVKswAMiWgHJLkN89cB8yE",
  "key42": "4AD4P8uREKUPpgm15k8kgDG9BGiSfmRi8oPM5u5fPfKPGGEhsACNrXaUFvmjYTg67HzoSEJ8M6jpD6YJUFNNsnCi",
  "key43": "662bPhZeat6uKsPnTfGUFpzo9cEhTCvWEKwKBtvaUFpPvWCUybr2BfAiowUwZyhZrhBE4fvU8XYMPfytKxtGig9Z",
  "key44": "H3mgETcCp6nBB3GEXbRYgiLjCLP4k8dV19NDoWTYhSK7kBWjnGZFxrwcfAE7wmfae7FyyVxrNhwpvwrzNrCdKyk",
  "key45": "y1ZS9SMduRWJua8ji4YHnfRgwnMesZ7ccvFgEcXQtAXnyL2dLNbJQnAy6gJKnLjvj3GVWCvZDSVXT7YkrnejgPq",
  "key46": "3Nxf7X23QM2UyF4uTwjpCtCTyu2ujJA6VmxCMDFVhMqFQjWcbfwaVyAvKT1LMwMUBX4xvhMzWM4ytU4N65Uhpdf4",
  "key47": "36T7jp7jbeqKJyTpF7WYbaBU2SRmoZhDp2YxgT4UeuY1EumJ77dqCmHvekwRJCSxbZD3UUytdgg5DETCBBcE3TR8",
  "key48": "k6tuEox1MWfkLJXxEwC6CnnTFs8zPRgvzXgcGZTWiwkbBcpwTUTCNNXkAVEshRSnxBBsBUDujE3TtcLdbdMBe7Z"
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
