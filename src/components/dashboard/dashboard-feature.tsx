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
    "3xckVEwsbaA17U2GRZdUJZCWXpkwq4L1U4WrNajeUK78Nr5uGwbojcXEP8p24t9EPpGeBkZesfqV8ykD2jgD9i4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "99yw7gPieDYTcnQ7uE5pz1PNYbGY7KbMHR42fs2N4xJc35VkbTZoqWGPf6kap8ab53Ju3tDYk1fZDrTrS7i9BMf",
  "key1": "JFs5s46HL8DgcyuX6WAXfaaQNNrn2Q1g68wfGQm3ikG9unbgX9TJoNHVCArzBba1rCZ2Z8GqwjesNyeNeJwAZij",
  "key2": "418UT8cFMfcjFYegXLtoqPN5TXD1psXcTVfrn4pBanSaHN4iCiEt1S1kYSW1PVxX8cF4MLKXbkeDTqV8tX1SBCcA",
  "key3": "4ZNoiV1CkgMPEThvLDMCMiUWvXdFBw2ban1q9bkS5djcbahKYbMQ7RREbf6kewCjHqJxB2yqXNXmZVtgPx8z8R8J",
  "key4": "5w3wiGhaK6zkxDGma3m9T37MzqacajPbg6zTJKDBUiDuRr46V9uoCKXdPFasKFTxSZpR1iDY6F3bN94LVNduJJam",
  "key5": "4YroZNwZieVjpc5QA7GFPo56Yfds1dKcCrjVEvjFcjGcN83ip3nvyp9U4UwuRr8CGvQkn69my3WMK3VuXps1mBKg",
  "key6": "2FAQqecGdssUVkFsCzFKKvpnSm2xdCWUeRgvNr5YgxrKDccKdRcS8CmmuBiMd1Bb3f2h5YgckYvzdjPrpCvMgBcr",
  "key7": "4Admj2VT2sSt1ATur6Tsi6cYkA1PQCpbud8WfRcUUcKqpLVuFM4VayZ7iwV7rpvNwHcF9PcfERUCjN1kcJrfUF7V",
  "key8": "2ohqqMsJPujDzSWgFYuaj1st8KyeJmHT9mn4PPbsxqWChLEKGbmWP6ZzUPWCK21NYVfGfYm4s8q9UcUvmAEveQe3",
  "key9": "WmSLDrYnWzZ1JynaDmNq8BCTHoVm1wjz7s2s6mX9gicxLYjMLiiEiY4sWu9K6uobAT3gVYMPMxYnKjupJyHvQ4r",
  "key10": "tGNHqPeHVkDig2fqbiyC2CESwdMayHWgz7wwdGvJo5ytjmDaVubNXUUHXkhqTSH3RuSKGWeiSfqpx6jGJF3CNTE",
  "key11": "4YAtU4CGy3sSyenLvtX7i28sGYsUC6mV9LPv9mkV4VPsJnsyDsJdAUUEDuKftNrrCB5dG59PHcFUyvd7faUTx1jV",
  "key12": "2pFW9bvHM9pxDvqCCyx4bDD5E3j4UmK4Rz5ghxJSDqrdcbn958A4gs2ajsxjKQbkT5QfJTvF4xWxvhVBiuZFf2zc",
  "key13": "3LgaKa5DXsmVbH9EnfMSn9BERBJZi21hQEmF1a7xVbxZRMa1qbNaRhr4Q9kqtSPjxZQK39H1iDRA3UXxHr1sZPfa",
  "key14": "4NdASRK1NWJK2bNf4edZ6ecWfm6tdLKPafHiDWZfBmTzeGfSHT3ZV9mJWZCj2JeaccTBXwm7k8ZfKnQTqoLprqtE",
  "key15": "5qf51RfRQ81X6K36TKuDwKCnnMjSFY32DryNkHkcaXPrW8cwJKBTfgYnPbfbfFFSrSgGGrehvEg1YsqTH25JFxdu",
  "key16": "2HoeaGWDnVCN4Tbtnuh2AiRuQ8uyuXXVABV34QLQAnMEkKq5eXxSPBgNghzEehv4hYcsW1wMabouzxUqMZp4mFA5",
  "key17": "2MRB4kurx6SSjpdPi1HwA7p7yh6KwQBsnCkVB1vpSv6cBkphzGFkAUcZK6ukUsd3HwuyAVZtQnXFQrf13WTE5cRf",
  "key18": "52CYUXbXpE3g8g3cSbyJwBXnubr11zWDyDdDwSKv8hH4RArek8pFhmYBpWZAPrGAZtem9HFKXfkmQ2D3jgy9nLt3",
  "key19": "3Yck17HVuBr4v9jrnLrVrUoUDTMRPCXvZSTs4KUB8RwqcS3spoWhXARiR4Cd5rpQD739g5FJFEiGTy7fTanfmreX",
  "key20": "51VQkK43xhU11Mj7rdWw7crSzfaS8TUaEisddcLJQGT9TDymgZGPfsgYruWtQyENrot3Km5CSuRNLKmXiBFFML4N",
  "key21": "q71tRjTSRdPwWhVcS1nNtS8c9AtGs24KVS7pXNg1tjSi79H5GMmQFXbyBP5BMrwFFtNpinw6igRjTW3XKTKqeaJ",
  "key22": "8Ab3vujXmW399RjTc8vjVv8Ac8WxbJPR8F8iJspFkzdyUvg8WbJUDXLn2yjDgwDNnxysFFb5dmCGPAf7PvXzUyf",
  "key23": "2CPB3qxQ4yPh7Lv1jijBQcKrdXRAjGj52dLn5K4AUuCeJEByf6t6jPqBhEsfpYaUM2sQA2y4KwTsYNenTqV3jHkn",
  "key24": "4mdA5S9Epzr8HTMnUko6mhfeP16ASEv7Yk8MQ8g6saSatZGcHd6X9mgVLQqnmiSigjXyvBLk8LiaKrF5fetBYsrV",
  "key25": "4tjxaQ5XfKWApw3HCtCyvSaTNQGJt9YwLifFiYbQwj1PaEE1W8KW1qZCfffP6VRTcx33KaxyUcJc789raCcLhRG2",
  "key26": "5J8a3Zz7kTFQ6h7YYBo8r5Hut5cgJ9aU67TaFPoP5VN5P2z68trmpAFdvJAv4SQRh12drAgwJuNW7LJ7s9xv5U3Q",
  "key27": "EfK4mxhqxKfvzFiC4Lowr8WKpn2C5iUSmzrTgofMQgrY95tTcd9LzRHYCu9qtXzx44pdXbrUMaEQksST3WNmJsh",
  "key28": "4auxoBdi6GUFtMmktzwpUZiETF6AoJkAkZ2z45NkNj9SPPRPxLnbYu6pWuGPY4AAAjhbu2fzEbSs4L8HeXNWPS96",
  "key29": "4577LfcMJ3jH3FV5r7WJo28yP9W8QsbTbVJbWZG5bkarkxPKpfPZ5USBqzPdmUJxSFWRnUj6gbMeiY5ZsGtJB6p9",
  "key30": "3fCAZ5njsDJP7ktp71qrmSu9V4x2EHzsh2k4ZGAAQrNy4h9b5DFsMW15PqBwqSWd6avbDXXfFJ5HWZnJqEoFAMEF",
  "key31": "3FwE182fTXzvVcMY3SQaHVa5Tx63P97KzWg7GRd6AyUQx7WzDsvmhoZyRPrzcMjUzy6uhqzHVMNGNCSe8dGhf4Yy",
  "key32": "54GAsVgLCffE8PmdAfhaKfW9Qv87PpdMjnMK7oJkB145GgqSo7CqrAeJU7GzSjFbaKnp1hKvL8Do4Ye9yY4iPVZE",
  "key33": "54tErfeUYeWZQgc9EMaeJ45MzK8iwaogw1LJ4ZYRQN6vwKiWP2RLn7M28EmjbT4pkWzqfv9t91cVWynsbQqYEsRV",
  "key34": "4RjgBGS5WvSdTKXqQ4CNWhmVFezwnnTTg4RY9n86e4Cxw6vdtQQSecP3ofNcuRtd5RibjE3fynb5uMJrjmKiwVNK",
  "key35": "4iyFy2FhWtRcnah5kWEAL15vHUZwRQVWsJp6xMoCZpBjQwKA2xfqMJWb3vtSHZXtBXRv4hL43xe9geg8Jh9UgJqW",
  "key36": "HCzfqZEAWzMwYn2R2CBWakEzmz66Dev2j4Mo2e4Qw2bz8k1ynjWvgWq3NnwhnkU3iBTo2KZMHFSGHUqz3eZa9qY",
  "key37": "22uoNVt5rv1UrCixMR6LUhApe3A5f7x2de85UJxxYaeZyDt4getqjfnynisDwaG9sAYfHJB2omHdvKbTEjMw42Wd",
  "key38": "4yhLCviNPJREceXejBy1Zd1mZCEmSRcFLj1swVTQkjC8P6ahAiY1eo2REEzEzoPQEtY33AmFT9vGeXBWrh6WHsWN",
  "key39": "4ATccZm1WFkhmwGFq7ZkyxbhMSjug7dt83WTNiwLE1RQ43BJ48bJmoDFZRgasDBciVUAFcjq4K97WM4QSPF6SWGt",
  "key40": "5BVvPhFXb4xnChq2TL4AWAcicvYtLCYhyoEJZkdeUq5eVtAHkS2GHC4VhAfoQqHVWC8iNRPcrHAgJdAMYPotRzm9",
  "key41": "2KZAq7VzsZLyHy8ZeCkNVx3hmvFgBDFtvABsPEqBBqPMVNVAXnzJUqmFwj3i44u2Y4kBPy4AR4gvdtrXHV629ru2",
  "key42": "3HijZczHNW5dUhfpDwexiyjCyWcKBoDmUTUuHZPUfVRrhP3XJbyuurEaPv5mBJ2ztCBzZL12ep3yeuthwM16QzGj"
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
