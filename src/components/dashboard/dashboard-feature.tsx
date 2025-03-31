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
    "2oH1Wo5bDPeUHZNvKdG53H6ivAoeKRvqk8DEvcDVciS5oV7SC8PGLMUn8xaEpzLA7A68N4tJRHWDk3kmA9vi6BNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFjDEk2avhwHjLk8zNnDhbSrWyzmTSuomxvLuM44qWB6yw7aFDyVjFiojVRAkevC2WDci8Upv4f8MfzNiGUWjfW",
  "key1": "2FtQe9TAqM8D4sLqfLfYxup2rt83gYoPdV9aAAtQPAsQdemrtMV4MjDZBdwHxeZy9qGXghnKf6jsvQmALnnNn7qK",
  "key2": "4MDgWGP9avnY9Ta7MLfAZs1jTnr9hxCoiMQnvnzNMKJXGF6b9BGFs4AFZbenRd8oBJP847dHEUmRrf6xnqifiD7v",
  "key3": "3WKGvHoqA7SdaCHe38hBv71jsrSnnLhmGRGYSPJrFtc6RtZifCdLduDLEwFH1Yg6GeTcXZKCjJ8gb1SQPbosLo6C",
  "key4": "35EGhXQRxJ9y4P6noYFMjNhcuDt7Yktn1i1DaKF9ku2Kz7GABohApVpuYXj69xkXMhRYADRFk79LAJnrPTwspHgU",
  "key5": "3ifHn9cdZtWdtX9T1BinGYbjH2P5Xqm5ShWUHXcUEvZzF3T7SwbJLE9zk1QvQhcuvhjhkSd24HsLkUc4wCnmcxc3",
  "key6": "3nuHfd274woUV5DjoZEqYVvpfGQtARANYCcFrEqQpiWhtH5ELKEqrxNbb8etkGCnoPsgiWnb6Ssxuo9E2LVAb5qw",
  "key7": "2gnorK9QN26YjChAxj9QkALGeWn1WkSLmdsEuFdB1T8hy8RQAFHXcU7FA4DS5gVn6jA8TsmRDQVmHiAY4h8HDiLA",
  "key8": "2PjXJT9XYdij8QHco2xKv1Aju8SVN2ss9v3Cc4yrqn7RJggS1nhc32mPNXg5bCAFg7nDUioiZKMhx9taDM8eY29M",
  "key9": "747UkfAXhheuoa1d2QvAvEYTpTEoTzbNguvwgxu2nK9HJENo9p22xvKq82BZ32L9gy6kZ8z4dJiujN49ZwX7jtF",
  "key10": "4P6KiWFWZydR1LG7WnRXqPraHGE9uQ4HDTt2LvqcFEnSUT6iCbAmPRWcAsRhBiMNzZ9m2xVSD3qp5wvr1S3q4f8e",
  "key11": "3LCAkfyzyN3KBtgpGykQ9Eg2MtHkBq4kPncZticMTXfSnNKKmk5qtXPgQcZigfND8XBdJp1RSzZinfd5YB6cNVT8",
  "key12": "28pGXMWHrgYBvToUe8s7LJQRzXzwFksSPhGtihKTH1wm86BAgm3s7gvR1K2LW2XrBSc7tZh4UmdZKkWZTRtYAhkV",
  "key13": "MqPJMWx3AAKYVcWDhAV78Qtbcng2NF61CSrC1yfNJw2yWzWJncNkCippedbNr7zacDgZupX6jXBQnR6Qfy8ATD8",
  "key14": "Yz9RFcJpGjXLBC456Xeze7zQrgS8KzJZNane4K93zvpx78CqpWHz17TGPw3fupJ3WAhWFWYvcZg9b45nSruDWW1",
  "key15": "2fAkWsMVkuB1PK66ySnQukPSY1mwJgEoLRDLvppUJVtqB5gzTgeFsTzHrZz2j5iP7hPdfvfApq6936UZTNUkHpup",
  "key16": "5ViZUiqEtTdisv4EieJwXYfKr7wS2dsixudpGMSmJiRbFtqKLgZ3GLaRZwnGsJYxpeBeRL8ZGBf1TFSGyQYLagYL",
  "key17": "4TYuUMPvKCU2H1Fmnwm8cck78U56D8ZEwnCz469dNkHXfnj3VkdUE8J7Fv8RzLaGVZKtGwrUEBqN7Zy8g9buRvCY",
  "key18": "2wCUsXo8Nx3T8yp6tG8KEk9rud767bgtzVxBBKY4tqFP77DGztsFS2Zd8cPCDgiDZntwXz3zCQUZgt6MdgVf6oaB",
  "key19": "2ACBrmiFEqX2wJrMeCm1tQ8ck6mgo8f8XhuvpMNojNYpcKZkHhyXSFq3B1nXwF4VZb7b3gmeAow6svaXsrxwf54j",
  "key20": "2RrDCocDEAGqDFascEdd9FJW8syhay7Lde8zKkPXdvgKDXyHSoWM89fMBsh7ne4pmAVkc2gzXUKyGAjAxGS5532c",
  "key21": "4xT2qf4DgHs577JGYkMzNV1o45f8472ukv2duWtJaqVL4XToNWDbC13n4g61n6hrAZ48cAw4RE8yX9C5pLR2wsVK",
  "key22": "32FJpSuFE7sqSqAj5sqamcmYyv17THfFHvJRa9NyKkcdxXCkQmisifRR3wm2v2ayCif7bkjt8bFHsYaM6QTZZPsU",
  "key23": "5No988HYQAx7ecTfUV2Zg44njEhQzwUqzAeHXVEyQbtxmJJpeaxgtgB1hZhBz6hAzASkMhcSofNs68UhR7UaTqK9",
  "key24": "3Gtd3ocdTgQdoJZAR1pBE6vcFqNhQzGqS3cTran3GhfK4ADKGvAiB3TvqAPw4MX9Y9bGSFW6qpRkoWtVvBfruWcs",
  "key25": "isp4LJBdDJGhH8eEAyi6bj8S3UX1JxyJWfF1Eg1QxkJN3vdVsc44yQPLJnhTLwNAB78NwuAQKEJdN7HdUjAg4wJ",
  "key26": "5PCR6LuZRPqS5isHhToxzdEhiXp1BDGzb9aTBJ4z86MUqjUd8kgZiv2ZrurRUFArR2xVfEPSDzbQZBscNBDgvN4b",
  "key27": "5ykbp4vnHHxBe28gqtrnpeBPLG1JmfsgFqWQypYwZS6Du5U96bUn5eLj8RK6HbJTCjZDkH226naeGsk5caVMekhP",
  "key28": "3f2JwZzfTfkRhsmx9BufEMfW5TtMWahFR96xzyAm7S2xpVABYvZMuVon5cohqLoZ6DmaFqxNkRsXXL28J8Fad3Ur",
  "key29": "54JtVNcwpVQT5jRpDZoErbwnMCsx85vZhCyAi1ZU7NgbfCnJn9QKo7GmCX3RwK2VbHWvrky43BS2pcGhUg7VmTv6",
  "key30": "48edyjVKnh48bSjwsfz9kbZ7D5UahgMpWeKCmUEytiMpenxtPk2D6zeDbvAEDGgLd7mE8exREAaPpXM1if2hPpiS",
  "key31": "4TLr96t13km1Qbx9WGvGrbBzGcBkLpaLUu3myxZjgP6R9vYLEJHqgDJZojt8pGBB2HczCZh2XC7KbWXpHrQv7GSx",
  "key32": "29N46HKMtUopw4YsfMtSCm6xwY3owBxTeTAHijxgimm4yqDrMYWcfKZQ6x3XYWVu3SKhxdQECMrMDWVRqwakg93y",
  "key33": "5QnnZydqR3x7uUSeASw9JeMgWAXgCZyzXvrcwhScfNBtdJzGLxADdXnJRW1A4fGFEsh2cGjUxHFSfv8VdBUt2AUe",
  "key34": "5WgNjvGxupjXZLk2E9wV3HkqVLNNqeqPC23KejhYCQhfMEVVTTZ2XnZWsoyhhKQ4iGtGtR1dHpC8Szn8y3wGVkjq",
  "key35": "3obVM6A13LhzraHM8Fk4rjgRFxXzyVfetzCZyLEM3HtzeidccAgiTVnoe2TDt2WKawHtxsm19TQpvrboaG2AbZnj",
  "key36": "2k1GCWrS9Sx5td5oQcSGasuQTSn2qvH3YVnG8gyeoUgm7oAH5DywSvgF1pG9q4Sj1zNMJ5NXisinustKAv9i7VNh",
  "key37": "5EDMTUpgWC1BYVAxmYfVcWTduVmYP9xeuSaxfSFw9icdhoVVVVHGo4x79wrd6nqecQ1wUHW8aDzYjehgUe6HDkdJ",
  "key38": "5boEf3HpZ61cvFvsxoHB1EDgVeHSJUnAXRBeERHGhRz5eJStfiwtWxwwa7MaoespPy8S7nyRE9SG4Zhis5DbvPrS",
  "key39": "47s7YBJSRrcRNqBj9Kq6rNNx4AJnCWtJmemkX5PrQhnv1FRjD4mzmkcdSPgGyUrrXEBTCBx6YuddiEKS6u8Tjh2F",
  "key40": "2UpfFGeJNsjFa99MeHf7NzcKSsb37G1DZkYyberaMntKqokWnp386FofaE2pFC6xRdKXDVL2nDzkRgZ1HR5rLj8S",
  "key41": "3Zux4PRYddQXW5XmUeRVPjL2eSXMy941pEirZpDA9aH1NKcL9wL6M3GgNKs4wNgc15vza7QmvqzYzpu1VUb6EYTb",
  "key42": "4qxWfaFuaDyP1SXbDGqPHzkP29goBXtNoMPz7xbemGZRw9G37bA6876XwcUEMz2Hfjhs5iUhZAKfbpCTuKUpGLuC"
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
