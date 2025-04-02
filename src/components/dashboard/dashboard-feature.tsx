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
    "2RuB43G7AHqqdTFz5RPG9qPr93PJYZXzGYGnxriU7ZeJ94aeghEAhGjKGPxf4hmjrrBRQ9gaCFJZVvefXaKfwFhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UoRjBt7wuAsKV99oWwSKMCoFArB6wwKUpCYZYGBvp9hTfVD8gQo55Ariceh5JQEKxJ9Kw9Xqvd2VatPrDXMquJj",
  "key1": "g2mhMGUEqnnWZ4AtQrUGxWJY3wJj4kTARvb3fNfeaKiWBUbkJfv2YWJcuxZsFtwHFAZA3dwGxctdefmZvMGY9NX",
  "key2": "5Acr8i3YZadpDsXGhgzYxnhHE8Fm2K67tL8bJJzTnvnHy7zh4u29JwWdjVCNQtHGEfw4aPXsTkoP234qmYWUVmpQ",
  "key3": "4JNhCRth1yx8ijsDxFCYYvz4p8zjJcvFSoVt19mhPsiFkgPZGxbUkcy41bVgR2RKSQ8Yx94iDXAdmm3Z8XQDCXHZ",
  "key4": "8DuWw7X4AwMbpukmXZMty9YVshJfEvC4xqTmc2faeQjV1Qj5P14K5v1UdRYWUjmkaCKpw3L87RMdC1xBjnPEGg9",
  "key5": "4fXYQ5zZnyS9MMKzxiYbjpnHn9FsQmExjqJkEaAKWiYqaRXa4X5ND3yTTQmCM8T7cmKdmG67rPD5G8FjQeC6yYgz",
  "key6": "5HjR3oqwsoqQc4j2Jb651djxythMzZPa7XPqmfdM8Jjx4127UXcSwovni8ehdA9hBxnjF666qV4av8PMRbQ8yxx3",
  "key7": "5F1ZZdQPRnCUtqGFXh9rMRHnehKs5dB8cTpzG535Z9pyLFeRFWZdmWRQqpmKHERE7cPbnhm8wtLfxxzDfSeMb3ut",
  "key8": "2BUKnQv2RDE1jzbuYKkV9UpDSgyeESVGWrtWu9SzmN5rsnPeWVJY6ywNRzsH8qr6HiwieRMPBkzudJ9cuwMR4432",
  "key9": "4k8i5jeEGiGQmwqvjtR1LRNMU43e8XvYzhKeFdYJAvDG7Y91iLUvAPHbHT2PBTfWFXRfsDTsJAB9GVg2oChvkSZN",
  "key10": "2g3DVhiRxB6v3CkoNeDJNXb8DdSoyahUJuhbZhTWobSz4hmwB6Ye4YSfY6Q9PmLabkmbPhrt3CfaUP9hUxcRKvJz",
  "key11": "Sd3kEDnqtu9BT5N8am4Z2u5yi3J9P4FytBjz4LwJNKQqmgfYBN3pcc44mWCpaT2bH6e2pmiBy3xguipqBe4wPHQ",
  "key12": "51DTzNDtsg7a6AULLg4afFNjCHg7HwWPRFUpaYJ7g5WvJRgw85XXqbyTehbBvYdMhxqHsCr7Mn1YcPWQn6BgYEjX",
  "key13": "5dBrgJUhPuXGQbFQJeQJSDkwpCtL7ctqertRMM4tqdkQEswhzEMFoFnzxM3QmwGe2Ky5fVxrA3HfE5Pe3umvSsZs",
  "key14": "25BUqkvhZLsE63mE8mpNcWGKeWPEnbdwzV24KfdkFJBJBje4VEvGhNawLLskAyC2DeBomJ9pmFtmCqoMsaKiCV8B",
  "key15": "4XW5rGg3363V8QS3jthLKwg4U6ezuSokGEYBkMwBfUc7xKJ8RC6invm5HZFbgqKwuiMKwMJZ2WkiPZJbdXsNvuxw",
  "key16": "3K3Zmgc9PAujrjxE57Lni4Ki7wYCiAsYThPaCqED9dC5WQqef4La63aaN8yfm2CPSo1orqR136iDraRJDUK8amrE",
  "key17": "3i79sGydSRAu31WjxpcxRoPd9RzKcinrcGatUJ7NpivruvL2fNm7NS91RPMbL3WQBDsWTGDaNYcsAMtcGUjdK1py",
  "key18": "4WuL9ktcYnVYrMS8b2cx3aUQQdWTm5pgv8JB8PeGRProq5bjWSMY6SyWgrMYyoUNT8VEVBqdiuw1Qb8aPeQpvSrn",
  "key19": "gjBp3cUak5q7Tw4LV85rGwDgz7EGs4tfT8VdDRjS4gVeH8ZdMpbUypetn89wi7DAHnxwQACMaqioZahnf35VKnk",
  "key20": "5HRAGLRzMwNpNczxt1oaGzkRkUzcEvNyRJAAoBetWZS1MjHX7unQyzikXRjgp4S6kduYJoPydYvMqTcwWht6cpZH",
  "key21": "DAVC5zBLwDRK6p8Z1cejuBoe4KhcdmV8dFr6EQrjTrZrwZ6CJFb2Bh2oHjMWZXkgeasNimUxUcbhGN7fbHwbAxD",
  "key22": "4quideoidpu7LWV1Wq3dWmHmv1FbemS79t4mvpFoUtnm1fbdXQWzzpYmUyeyALb59n4fDVPWKMyYth3Jac6trXts",
  "key23": "5CzbiTeQH6qhR9LXdFWf6JpwrDDSEjMcSJYKwe8RUgotUso9kZGY2y9kQNXKfLeA7SJizDEpDR3zX5P1GBLSfUrD",
  "key24": "A4HC2mMyMvLVzVsLXEKoJW1NFCHazj7ihMXXUZpdTNWwfUdEnGSTo7DE3gcG4pkHHg8okKCg6rHNkn5svKUwg1p",
  "key25": "3Wk8vEt9zRb6o5dWdo1PQ7VBdAb5Zrgq4wPsgCiiLwKsYBwcHbDuRhMMmQ5tgUypp6ZAmbFx3cNXsY8L9CX66DH7",
  "key26": "3HgyLPu7uwntEqHQDoKbgF7dkfFxgchcuWbQzsQd3pwtE5FibVKrDxm9jorhSrVeSTgnCn2pNV68r58Ws6gWWvbP",
  "key27": "KfvQjLJZLLDT1FGXyoWcmAmCkdn76qRKXjZRjV4sWz5piqSL9iGe8vDgtbpE23GaEdpLfE6BzWdxNzcu6ZJpaHQ",
  "key28": "5bP6jz2JMnX9UQAe2KWn9qcULE8DfnJyV5g6qUfZDu8p2LTZuexCwkPvLtyBeZQozVoBez1Heha9x83PgyLCKTXM",
  "key29": "4hepR1nd6VA6CwWvRwwiNC1dVa7XncSFDdXZhgasd6MGxteJfR1ZbiXcY5PYoNDEwhJ9q5xLjXYhZ7kAx8F8mVVS",
  "key30": "259ZDAiK3XvYgjaybj2FZFWABbgVgHJ7EH6LFMjDCaxJaeAhCfxsHwoVmQATr2mkMN9sW3Dm9fnkCFtVDth2zeTH",
  "key31": "Gz3ZQANRjEbL5Xjeqz35exQYwqqSG3huA3wAXA3zWmbdLBrYLfBm4QQmTBVtdTMfcfXoa238dc7NppcdSv3sh55",
  "key32": "5bDKjzFVSMJ6qSs8L6YwXjgqsHZNDTMMKN9VWcighja9NMFGvfwVqgsA5odcndPPwEj6N9jyQnLrFyGVksCUFWjP",
  "key33": "21mytgVpt3b16Xn7Y67N8KyCpncvxAYN48vdgCRy6gLkB1Pf1j3jcUV6688dGkdEUsb7rmuai9xFu516F9fg6xUy",
  "key34": "5aXxW7QBt7Wi943GC4rDa8RPjNjXb4s3DWR2nJutaZESo7qDmzGfEtmQWA6xwJw7wtL9coCDu7qDv7JNw7YoQTUv",
  "key35": "56M7TfTuA3FSYVFy6TR8mc3uPJkHcWa3JCspwNSMsQrgFNQWamyHU1fe7YwkJhfo35Ng7MHXknf4xukBUMNpsrxX",
  "key36": "411QWbEhASvXyxSFEnSyE6kiRwisrkxxvDyiQaVeQEptPKokdHfrtN9pBShaXRqvYFPf7moPr9KJrHo1PdKGswaE",
  "key37": "5bZKMfBgP8kK76DFTHaMJnpvxfcxPUcAnTJJQNoZuL4ResYjVnapRLtxnZoEKCtbwAG2vBWZ7EMn9E5z9wT1aWmG"
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
