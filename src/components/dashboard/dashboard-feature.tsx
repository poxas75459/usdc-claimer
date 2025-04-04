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
    "5xRPrMFpRJuq7KLtGNEzSY6Soono1SKGshQUX4AxVdhBj4Sdsui98UbFUuHyHdezRcihYXNkE2Cd2DueNjkUM2Vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGJpzktriXFYy7AjN4E2hJZj8WyBPV6X23sPf3jQM8tszgt7pMJ8u7LPi64JKMh2GbEKEAZ7GjAxuWTUQ5XYgrG",
  "key1": "3iT3wazG6cfJueReb1npoRLYAHx4qeyp7Tvp627XEvQj48X7et1vmKazrGCvTgNdthUt8sWis4uQk4aEfF7NvGXM",
  "key2": "Ca3ua2PbmFfdM2jCEZX6kfQXPUrwcD6apTdqXi3g3bP6rxd5Y1zF9yKkUQUjF1AMebYWQXawTK1pkU4bUn77LJ6",
  "key3": "4JGPQhbz9bkSutXAoQGqjVt2iG6o4S2bwtnzpRYtjH1cbuQEsgPMXvyi9DWi8m34Eajhcyv2wfydrZLUNPVREQLj",
  "key4": "3k9qKjw89BnQHDKTVccrAJvB5CBgbVeZSmaSA8cWbF1ddapbjc2A1joe1mW9ZiQmsCSUXdXVJ68QEMczjMGWSSVM",
  "key5": "9MU3eRxyXW4G8CpTxPwtNY2owVdh28CSAwJ1MavGLHctjYoxuuengMCQwR8R1X8SKwRgEvgbW2VpkKGXxHZiNZn",
  "key6": "5rrpLei5bv8SCAhpmUFWxun6NkdCQ416XSM3Q1tP5dRw339iQQLgw87ysYUAkzeuF59hF7odjKLGyPpNqj7ZGA8k",
  "key7": "NV2nbRBPxgUi6LALX4fvN3JYyi9JkdYusLY1aZAmjRcMERzgkLNvcXHSi6Aa68RtBYD98rr1DSAp5CZsC93ky8X",
  "key8": "5sXsJVENWvFm9r9hcCLpWgrFZVnGrcDij4Ryxt1uFNDGQUYMhZAx25SfLsRCCmDkKmxEEXJn5ctXbSeaEXjkGZUJ",
  "key9": "2s2ex4VLtsUbxrFAsdoTCQGWQLeFFainBQKARwwgdggyFAc3pD8cGTewFYXYK52yGPR54jTTPJmYMKhVLtntwmof",
  "key10": "63DeKftDHALqJ8MCWTb8hJTsLAkcqYt8imBc9weNpL9gZqxSx8oK2gagi6zmsVK3PUMQpDT91ggcNRY4c9ofV17x",
  "key11": "Tqeopfaiabw6HyajvGSaVGhm3rTcHfsQfvdbVn346n8G8CJ7EnPVMQzZWAJCJnm9rDz5bHho7UN2EB23JdS373x",
  "key12": "3ZccYxqi6E8FdKDUmeCimX2PimwdakciSPBr7RcDH2xTHhu895J4bWdtTPUYH4HxUAg9GsTKhTn8B6K4HVQq1VW7",
  "key13": "BqhAgNZpLNa9HgcckbSG4JEPGA9VKmb9BhTCJcX7A8PZ7QsX7WMMTCNJUkFGTNENsopfuwxCohBgBNDzSpFjyMQ",
  "key14": "4XYLJG5qmPd582FPGaf89oyNNfvQVJirZf18bKS2HGNaeEXnFtnyD98snenYSsT2nhUZEVaPPq8VWFpgtZ8Vkyp3",
  "key15": "7wPGfDtUR3mbAYos9vUydp8KS18UjtgFDWaBi3EXHsnHZcEUmuGcRgd5NnJURjkwVf6u4aT15QjwfJ8JWja2HJy",
  "key16": "3u2HtJYsnZCKJEEALcYqtJoVDbg7ZGq3MUoRFHZwEauwu6pWXAKmGvN65Mzh9c8ri1bsFyb9WcDSJy7Xs1o2BeHR",
  "key17": "3DEAaoqfM5VjQYPEphL2WbbHxMQMXgyzJ99eiayZMBi7Cb72GkSfS4iSih4FFWnRYQ3z6qEBkjLZPdhL7fKNfAir",
  "key18": "4qfoXrDz8B6ZVU3keoxfPpD1stfcREjhLzAN2bfuFXtbFniwi3xTJt3ZDEVPFSjMFj5RR5wL7zqNgLT5bjvXb3iT",
  "key19": "5kBAVzuVqVs8iiZLTxFCzb4ufYyBzwKi1kZtgBAU8BQUaSSoXBQjL6twQZoN6bwbpUEfGx2P4rWN2GQ2n2xVzHto",
  "key20": "5qVRdxyGzPLc2uJjZTx6YLtyQvDnV6skmq6PEVoEQNX96Sv2HQqf9bG3tUdyvbiSTMEVXvQWPnU3B3FKTivKUxvD",
  "key21": "4M3wi4EjKQdJ9e1A4QdSNfKgRGKJt8MPfAKPRokQWrXVwTUvK3QRV97uaxYZikpqrSs6cEo4XUyQdLxcMmWg5VSr",
  "key22": "6vZoTLxTdf4Lao7RdyoLGdnm1Y2R8rBPrqUDEdEC2ryautCSBtJyq8Drb5gXS4fFBM7vX7rVsW7nrKiBfEnfFdY",
  "key23": "4aH4bUz8pVWhC6WPT9zTZ8ySNTBdmuTiL2LdCTDBhCpgtdGxtQMhRmtCWZMj8AfTm2ZMAJpNsNooSnVHtgk8qmmw",
  "key24": "4fAVEENqGdLtwjCqmf8uJ1Huhm5kzvDvKK2tEVJRyMcVWeRnpHSqWX2onWWWaeMU3iYfXXBZxsc1fvcnx2KiCXzm",
  "key25": "3Pf2Ji1C6eiCkocTDCN5cfgkwe7CoNe8pUWcTS7EVB7En6DB7mVaf3PyAKtxWasEb3JDrBFm12srBRrarNiGn1E1",
  "key26": "nkKvrxuktnZWvK34ZoMqgs5ZJA3qEFgDN5G4ewBkWVFnAm3rQmc7whdPv7b8j4JXXp9PWd8X18TXwWYZWWBVTaW",
  "key27": "2Y3ZtZKnCb3WT84aRx7X4beB9na1ZHU25yXJj9sKH9wZbabWi6FHpD8VmQ4o2GfXvFsWcyYMkXHDtWiaJSrFdx14",
  "key28": "2zdsWk7tMqmX9iuLqT6rvYrSwkgdaK2GUohdLmZmHejB7VZJvq5ifPxx9CCQ4BJ4oaHLfsfZTiSzJan15t68Ezjp",
  "key29": "5GMrSw9Xarp1BGhC6aHj5MXUqZbPwVg97wmW4Fxmxn9ds7VFgQeyjHwUecjyL7tszGTiw6uGUCerx1Gir9C72Ddj",
  "key30": "4TDntLcv4as4xMYhPz8x6hBUYhgvNzWci2ufawW2P4s1Th2WFc1rsLiQAYFSY2bKBMbeMUqbj4PRxMTsHtBx6N7X",
  "key31": "5UbYgsm5SZRArv4ynBaSzrg9U88vqjeC8UH2moCqMnKbCmSPfEbXN7QohmiPXCkpf3bz2m6d4EmXhU5JWw9cmR8Q",
  "key32": "5DDEyXCLN8wpw1smNXbyntg8u2K2av8QPLjCxqYRybV8k3XeKWAGVVe71fnJ2U8cqQvjiH6LY2YHKViawg6X4F5i",
  "key33": "2uGCSmSxT7hm8G4mJWDBbdydWQ4vfyRKgPdfmxj84W6MZX9LbZNUivzqkyBD4D5NhqXPPPddSULxEPnHuqWDTxco",
  "key34": "ZNdq8AmUsAsnMpfVzRaAa6VKKzGj3Eszm5F8m7qjJikYchFFWjnNKxnpwAmsdWfMexFB8nqvpSHaJDLu2fjK8o1",
  "key35": "4Wfj3VxkbR5VBCyty9VvobkSbDaHKLDHNMdvYUq3shTkBotyR9T2x9HjPqgxutAnR2adjCS75iZUN3aDiCPh3w68",
  "key36": "3AXM8w4torm2WFyqLpkbG5FtgM9fsv6gBCN34FbLfYdAUYFW8WrNnrSYsAnD8R3sHEowzKLNq4Xq6VfHkmQkfYcA",
  "key37": "42QGRTbxVgNPJaP9KmGWGZoKGYs6NySDd2dAyRZWoY5PbTuqUsL3YfJJJCgUr4BWE6Pjkayqju4kRv1KfE8DwRk2",
  "key38": "3NSqYzqVriMUN6z5JwHxRSNn8twfsXg8kC8gaWkXYzJ6Us9PAPQuYmyHvsFeK6bxA4A6NnvfqMDPGxSowsD64SnV",
  "key39": "zNzQashHuDc3EXAeBCwLknKmczXCYzwxFgxSVn1fn4hnBdd6KrXYvv6jfHxf56sYBhrph3y69EMuk7hwkqTjf5E",
  "key40": "vp1QxgLpiqSxuRnaKEhJK4zKWvjzH7eiqFmJAZpgohUFCBPQhbxL9bKB1wWo87tTDTdAhCVbQUHgcRjVgpn3Qvt"
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
