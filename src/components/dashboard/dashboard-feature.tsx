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
    "4ZpgFVqtMzguiHpYfhqXLQ91vLyMQ4Jpj7tTqTgzoRVbQB4sMzaUt6hzKDNhtcXWyUwnCRDYCBxDnUEJJ7CG3hpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QXmxsgdALyYm8epFtRJuAv8gVSB9dFvgbRDoupsKJG1488hc5X6YX2iSfRPrEhdiatfkwjB6M9zrKkKK5E54Cq8",
  "key1": "2xabT8S51azEwvs4jCbYS92TezZMH31x5eqfceMH9LESTQ36E9gURpMSjDCLDcbwqG7RjsGxao4f5SjYLwpteUkQ",
  "key2": "229XTDxZsokKiYxUJsGd1KZXKYbCq1RaJ6LbBAckfwCrySTDPtvHZhuqH5HArNHQDdnitNzkL5ZsjdZMZu6AWr6D",
  "key3": "gRMBdMKyHYGbJmogyrYgpr1NkJnnKr7ohEsU6jtU1qNjUEiVmDFMYhN6A2eH8KYqAcZj1vHhwuwNzwNn79NTkpM",
  "key4": "4rFizVt9ChHHzWaMiefdVurH3fKJxs6ev5NocJAUma4zmV9LWavZcd29TQpjgp6joGoMF3Wr3KXkTeskRFJBt2Q",
  "key5": "2v12mA4wCs6Dfg3aZ8haqGiYpdXH2WKBgRh4yKWEJE6b2x1MmTXXqgHXHuWa6mKrzzU1KpxyxEB35P5HQyRUxQ52",
  "key6": "5pCrp7u1foKDfu2d3fEyuXMouguYAJuyFDxiGQULq6E7uc53ZG3jbhurRHYXaMWk2nZ1iyF7FLgpq63prkdu7RN7",
  "key7": "ZYBLXR93MUsZXr8XXT8VhmsLAy7CAsGPuVJk4Wvs8zERFk9asT76BAYjiZ99VGzaHKgTQ8UUSkFzaHyeUuHEPan",
  "key8": "4e9d2r1HFahR6bAaBr3VSuRPn7iVEXbT4hSQx37LFxVRJoFcAG8PpfixSA5xvX5HRkUq5GHdQVbfEnSFVUQbhgWw",
  "key9": "66bukhBW64K8t7uTdwwrj4CgQBzNTYTn4nrBCw7cuRivzdhoPEm32APHp9dLWkxDoSGnP55f3Vb7Ud8Uf7RDVSf6",
  "key10": "24BcChMWU7uj2eyWgmfSTcvHcD9MjUzG6td5DKfx9Yvu6ZAJrziSGcye8UdyHMwdTcipnq9eRxpQy46xaghSiBnL",
  "key11": "5S9vqjsLUWTq3BrBpUTyRGjvFQNBsMKWUiRzsX1TxzYJzJ84SPe2bDqAzN25hG7JHzHESiBmTCMmRA6JbGhtBrEH",
  "key12": "4tc9x3Svvm5o1exh9KR8aN9DZBebxUr5B9CpdCwqzierQFWyswf65XAu7MqwTkNZRiM7HqhJMyqEZivREA71eq5g",
  "key13": "5dNqjdZmNn1rYToLhbQzn5HLDX4k8N2K42etTXXCtgJn7uMmf6Byhv9mwRLoQzub7zFXqBSqVWsrcm2j1MTn1rBA",
  "key14": "5JfmUcWLJoP9tszpWuTPWzRaSaGyWhQUurfpgVyjWkvVtmedx7QeVgh52wPV9mepPNPTKdUQvQZy5nqvVTo29gx4",
  "key15": "4rARaYA2a24H8VVphizAETxr8oWVCtLbDuxVyRMkKUy2e9kqGvTHASQaoqVPmoDf56GGbknz5fCyEwE6kSyYdaow",
  "key16": "2e5Gnj21H6nw7Y1RLHwQgZhoHuAJZZMiQTc8mS7msRFWveASJ9zVwP4d2En89MUhWFW8SRAuNThbCiQZRKpqqrpn",
  "key17": "5StUXevJ8P2MhuZvkrFWr8fK9jPTWwH4T6CeiYMC536wYvreySTnEkzMLfTCYi8rR6WUWxM23Y9pTqMZ5MvQMgaR",
  "key18": "5AhaNCV9Nmq46vu7Naa7g3iYzjYQmYpRgEibCdD7dmkUTbhnfcm6zBJVfoBAQzQiMBcXjYyNmzMfsSqjUK6DPQTn",
  "key19": "2ZjJdgnobiro5ePT15KBfgH1YB22izKpxA1YwVG1sWubCvQrCxgMymYgjpD1Cqy4xkL1wcaEQoDW1W3KFqrjMTrt",
  "key20": "4Jge2jctw2sDDVJRTeG1BeLQLKVhpnCfEgybwHukLtsneRgJdrpMFyQMbSRQtRZN4sm3FQVgPCDbhQGhzzrmhM39",
  "key21": "4VKKXHbZ9pJrNw2UTFJsy3JAHoCznN7g6seH5XM6hdPdmEX8DXPzaP38B745ore5B5DUEAXhNeMJ5iQzpEN6HFUo",
  "key22": "UMMLydwP4p7SmLgRY8QGeBBeKfFEbCe6g4AYYtL9H2ekbbmEafgdjY27ThV7hhjVVSota85k9tAmhNf13kP2dLr",
  "key23": "tRVA3sHSNCurP8miyjobPjqZDGij31KFsTtEMrFgNde7zR7hZTDxTu81oqD6rsz27naGAfbTE82EFbAQ9f4XDQ8",
  "key24": "53PTwRvHC6tqLWmwE7fwyt7pMRKC2KUqdLMoQWpYaTDLevwi9ShYHZ2Dgr2KUwNgeBeek56a7gfv4YJjfVgQFbG1",
  "key25": "29iCD1Hj66eLpsq4eZt7ajLbcJdwEgCdbruL4Yd53Y3TmqSQpGf6TrqRXqmroEx83GrrmdoZbJbSYzpw1kAGWBDT",
  "key26": "4zLUrqM9LtV9c3JMxepTzUaNyy7PWewTTAacWPYUKYHYraJ71NvJoukAtNq4xu9coZAQxq79iXYcspnwtNxiM7Zp",
  "key27": "6eMafVJf3RGZs45CMBhAK6nV9m9b8GLDSWm7dKJXaC8VqWSpVtavhTdgbL3rJDSLLPvrkAs4fZtvXYgd8U3iHqZ",
  "key28": "33uP291ESVULmvV9HnYss1vQNKeWAZzd8j7yZhb9D548QdBjZ7Q7apJoTeDwRRCDjWdDYBr5SUfST6QmE6QKrgTq",
  "key29": "3nkqNxEX2c14dG4t9sFvUueGN6WX5Eh6XjQedt9CBdo1df79caYYjkJnR8Bk4C1y21M58VaEVH7ntUZBT3mS2n45",
  "key30": "58ZUXYwcPdqyYeNvjMDte8o4HsKQ96EgAFQZELGJZfhZieMpF7pNsZM3dvdj5gZf4xHg8wZYrxg3jkcf7Nn77nAY",
  "key31": "4tqjYiAtjPKt6kntPodZz3BWK37na8kRWSmHCqdjEomcS4AAd2vJFPF9x8py8WDuz816zJqXPHeayd68KZ1WA2fY",
  "key32": "59fWb2nJfWCpbUDkNidW7KBrncrqAaDucgCy6jCtND2z7RCjxCiHcK7Wt3oSw8Px3MTJKxSyJtVG7Ygau3aCBQ9w",
  "key33": "gzqUgHUHZrhkB6bR6A42gA9oahF3tRJmqWDPmJm8trLebPtU5kk1LUWwNdHcBChPHtqorC4y9ZXKoQNqjmx3NtC",
  "key34": "3va9thV1UxfM7vLE9yuupQwzgmNJunsgADubpLgcfgyVRAXNna5EXNJhoUfRSPJKe4vNWjTknaJTUq2XQG3s7yVi",
  "key35": "CTVPSpN4Q4CKmsn8ue9xvz22ACYPM5KztKvkEHTt3M2eNJDNj6NvmKWSuAdYHU1AdqiX458QnJ2dj6EFXoZgsum",
  "key36": "656tdZ7Rshg36dsmezamHAbhrFUwPFtAvzuzdEdqVh1DU2kQvbULCXCvzRUUUGReCDCqWaWwhNq8fJKGr9RySLSr",
  "key37": "3T5uy9JrLBL9cdo7R3TjCMurMHo65a5zo9SEPz9c4qCjJ1mp2cH5mtniL6u8U2RjuHv44Jp5Wcps512peACa9BKB",
  "key38": "9JfjTis74ezPcmgjfM6o181qsVsbBZj6NmT2yQqXGPjxt8aGcTsvU4eyhMDBmqtNEM8xLmScbWaZUBsC9Uif7s5",
  "key39": "21sDTxf7RpWBRLQ61SbGVBdVD3xGkZLwNqFkkzq3992UUU3fsrwn3sGBWRKj31jpVfa2JWLapYky988ZnbDzZHV9",
  "key40": "43BzRWZV7CbVPm8GEudU8Te2QN9xaJxhyjPtZpqSYGct88LQo3mUSUpHb89owCHQHcHEzvndm7qEGMexmXu53uyD",
  "key41": "5SMsw68kv2AospECrQLyPQFZkHE7zBYATX1vFkWCp5LHzPpWpfzDL3BQntKYzpVTwAA2MSiJgzMGHXsmVKBZhCbV",
  "key42": "2ReCNFLa4aH2iY83vkbCYDLKLDNNFc58jdw5zWj5xuSpLePBiBNRLcEiQsgsJ2ZBuoTdAJQzLNFfn7giWkh9KFyR",
  "key43": "5ideQckHwhwmSMMj7EeVdNKzXpu4gJb92M7LWBXn7DYaZJftGy5a4MdxJXerAXDeg3xEGLGeeig8qg5H9LuwNHmj",
  "key44": "5754ioaLLkRpBhRTVQELyWkTVXuzWCUzS7352cUzeVcuAygERXFev1rbUxdwP3ChX2XiqjqqLoy95F24PUu5RUZi",
  "key45": "3zAx7aNxRzB6tGng9A44gPradsqqwcDyiwwD17JXwDfhVigVVdx8VJceBho4EbWtEagdWq4x227mjztpDYyzK3GU",
  "key46": "5LtHF2TnB5pmJAp9fX2bKWTyAzj8ZZgneyhiLm3XG6VKdtuG6zmbK5Zxhw4Y5UUoogMNkRiMhdSLCmgj8t2AjVG8",
  "key47": "3GjzgQakaR4Hk8LqnQYgJkH7jU3XgyArkARYdJw1JEBSjNqA6SyjywWM6Pbfv1izRjsG37f8XpXfoAGyNAaKEbPn"
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
