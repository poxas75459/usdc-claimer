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
    "2nLWi7arN8WTNNpADxx1AT2iSdeuawJEAfsGgFUgJtSUiDnrrBb3xx5q3zoErcdbmNQ4RJgus7FQstYn6STT8ZoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55f8r7BnzHxP2WZHXjewVX76x5MYoS2fE6RGxgK7Ygk5P2zK1AryZNyWkwB3zhG4YoxFHfWQptj6xK4mVdmrBosL",
  "key1": "gMnEhFFzibeQTSp8wn9ZPU5ynntCsPWfxyVNZ72tjS1XsoK7LfmV6gTeEnpAuGxR4j2DL7K9bT6EHhLLtksd5kR",
  "key2": "MXDsF62q8mqc6fvDGDc6959dkCDtUpSVksSHjwiVoYiVpFuMoabRRnd1qZtZmKychs9zpVVfNoU3m5f8vSWJWme",
  "key3": "5szBZVDw1FvDLW87Psv2TqtBSZuHHfGTABeLyRPrNghmQv6cRbPJQELVeF9VRpLxN9wYNiZWafp7RzYdphQW83wt",
  "key4": "2BHMD99irTTmbPmSkEjbcFQmG5JW9WddjtLAa6zDftFA8aKMEbiFYf1re1u97ePiMAjJyHPFzCSqADqKvUkU3K8S",
  "key5": "5XbNaRUpxD9RwUnJdBhBHE8ZHUmCLwibTWypbMxsfzQb8MKedcnm6KCEkfqZvUZX8J5MyXh1mZHgCNEadW6pWzy7",
  "key6": "2og7JuNexhEeTfwXJ4YttnHLMs6XL311rPbxwM7qGcS1UkV5XEtHpVWcvyrgjwukY5fybHmie8f26xegZFP3E3KV",
  "key7": "2VLZ3CS7xZsqf1rz5JUTZDFN5JeXhjHfH6EQxiXbhLXV2mBjqqr3G3cquY4Y5h9wREBwc2WkkiPbui4e8nSWjYTB",
  "key8": "o7dYwiToBT6DvUDM61uMkJrwsAxPc5jbzn5QtXQjJJM3SYTTM3A4orrX37Dtf8HvvccU6jbyhfFHBcbqBupt22L",
  "key9": "61mohZ4jv7R6PHpHLtAsEcC2cvWHvkkU9d8y9yS3qSxLpaxPzqNhWbhkRoPof7rvWDCFXvJr9XfzkHW32ECrdZYL",
  "key10": "t8ije7JevWaBnAed3kstqA2cuFMhP53bxEttXkQgzugQ253g37WsXapZPkQCDiFHtMpZVZTA1axZvHS1fZMgfAF",
  "key11": "aaH8fcmhtQZ1stpFdPEciyvcKnjpvbRFox4qow7cn7RoL6wQ5KzMuWQA4vx4mu9wHcZN46MX7BZjJPY7FPjKTXR",
  "key12": "2VyhM29k4cdtMcu1fF6xbt9N8GX6PJBVEEZeH3E7Zx1my5z8tp91MJx4snbbxr6M82fCR6RY8iHcdEsTeibA6DBG",
  "key13": "3rkF9yqhnXqG3JnQWf4yGm7v6n2wNXmT5DT55Z5YC789VGnjwbZtPb3sVmgJDex2ErnywtQA6T1AqvuJcQ2Ay25e",
  "key14": "5DrZ9nJaW3oX1cmMTLKUaFPC3VKPAMuCHGShArgi3okLG3fMshurp6dhJeY4NjDpTeHEn1XjWdx4jNQveubAebBM",
  "key15": "4x5Td1ZL7D1nKvwQa59t8eHcozgjyzGYc8WSkLDRbwzTGgN8GHfbD8rP11EjbgRgoKb9to11dYrUkeASzMcTcRdd",
  "key16": "3TFJcT32EdCGBT24kxR5aCRjp8pLeU3seQa4i5x1iYYm1svR6tsVTKkEesQcuZuaBeRgsViKALRDAV7cbvHq3ksY",
  "key17": "5SYssKACTLbb3SPgcdDqk75DYR5MBS4ZVGJWqnCZAu3kB6eXQCRTUGq1Qf4Vqr72JjRYYDp3f7uUfm6foQdCLU7s",
  "key18": "5XAWX3d16Er4qduSPKgoJyYnGmWPm7PLYChy4dZfYgttZtEWP3ieqJAR4ZoAHJbn5YLUGwpKNPUMy4PRWybF6R33",
  "key19": "42to5eNrpQg7oDuLWm25Li6ntj6VbW1wZmW1Nzpaymt6Jf3RYh6G35AHRohkLfMEdhmVZETLfRFRjZUgQLk5PzNy",
  "key20": "5hKWrtwQeZ7o3SerUf6p8PQGgstr3LRqSbXuL4o3TN4vBWNnsh27a4FGpmy94GmkNK7rUbrTmUuQvZ5BojQiAeRV",
  "key21": "3Xq4s3pzu5KXifMyRWDQGMKEaLWTAoBC8ySgVZJzbV8Q4MDYiv1RLyTH6jcxAuP9jPkZvqLKtapUsnawt4vj4sPj",
  "key22": "5w27vE2KZDv4sxny1pT5KXNkVuGWbSmZPiGRMG5Eb34rC99iuet91MubWahriBETfCzQUEjJ9Cgr6AtzvNfuq3LC",
  "key23": "2R6CiXmXJ2oazefbBdkXK8u8rr9qa7Qehwd1dFF1gae2YRQjxJbYsFkRkYDw7KaLhJCPSEK2rosa5mLHLCCYktTC",
  "key24": "4RPvJAk2FxAefRtDRktTS67W7D4GwkLo5L29erxpdJK7Y4MZdZc1La79cjmnb5ieKgjrdiynPRGqJBmoeSM14hVB",
  "key25": "3e1wfLMFdKqjJtGAsaD6fuZiiFTfF8yKU7eHg2qM8QjetcrbRt3VNPygfCKAwN2XMbZQ3Ecyk3DkfkYYWJN1QK1X",
  "key26": "UcQTKLQd8vA7uH42ad6VpB3aZRX98PvXQfcD7V6gdiCRFU1GbUhmpitryp2CE9qxFLSpQsoJFmh5Tyz2T84J7mV",
  "key27": "5DHzfmvKkxtmbg9FfRafQRccPc7eZbxWCWMvCZf9pz1jy3HfdgQ2HvDwsp24hQdCttioy6EXpLLUBWJ8zT53VmxB",
  "key28": "WoKBBiXTbnUR1t5BV6uXgjhkWtumSeLuxbz41VfKEbyLErMfZmzhCrnChksjSfTDtGqgEgCDM1opo3rWeed6GqK",
  "key29": "kKgMwe7EbQKC35C2kwnWC9BjUVsLZx6i89JgNpcyqg9PUm61AJzk3J14dMk8Jfckd9zSzu9w8gPAYwYc5FBbLLi",
  "key30": "BaydZHQdbATxTdBf6gwskyUoLLWodEUV3ekPM78GzXLxdABmtaqKpNxYrJNnGWYmVXN1gXeJsmJfnN7AaKJwSXF",
  "key31": "5eVT1oea7droDBX792tTE893c24Nsd3vhAtUu5A2Lm3NrynhqL9FGmgLGWzGEMQERzAsVfbb5CEtMfQWK6kAyxDV",
  "key32": "3KKbA96mEsr7ssNYxjiPBsEfHpySgX1WJkAn62XSc2FmWHYmZHhWK6K49sWAJzxjPhKJ2hAjUc1buoRUdoGW8pHa",
  "key33": "51TJb6YtqScqczgSAhnE4NvwzD8wFtXDqQfTvVPKHGcZrUZg1FPsnaPshpJEjaKZXGV1DXV7gBvQ4egBGGcTkQiB",
  "key34": "3Y2wUtTmM8AJtpfXt7aYQv3PeudzgDzZ8AZUX1araPKkY2RiXSZp8sbjgznLe3LJP2ayny6YUwtHsGW7ozRt2Xjz",
  "key35": "2yMBVDFvbp7bte51xZ6258HJbBPZY5U7r3iurmFtZxURpUkG5r2wYLSL1LdnYo2xrN78QsEMJnJSrzFN73TT9ZY8",
  "key36": "46o8dyt3o3Sij67MuuiT9Xps75chuAuyHdAuAs8Vq8tdXb2rDLqanKWVTg65Hj3Xf73wPof7AnNuNA4mvodET8GW",
  "key37": "4WvjzN6AabT916KxPDnB8d8Q9FHmEhhWSW5H65HJtxuxS8tn8WGtzqsDSzTZkw58w9S6pHyuMJDWiY4yVyofM6PH",
  "key38": "5tsYrNd5iqd1GZpp261B6ZRMYhF2ivdWYu9qHU6Q41iGEwEMSmyVPXgoVaywSouD2QGBQcNFqUJGAKCFdBqdFvBU",
  "key39": "5kRL9RjXmf2dEp4PAUYu3Vc4MYmwLUY8RRSdg98a5kKqmchXEVCmnAyFuc1RdJunpozQCYvvgZias2gNp6njuNE",
  "key40": "4VAtyT3PkeLdrhMSpXjrHoM8nWW51stdWKXVfewhJBbmzQzHGRTNvbZXxjL97gBQQ5GXvww9Ho6j23yRqTdL9WK4",
  "key41": "4FuN4ZaaNJ1BR3shkquk53rcP3JVFK4x9423L7w6A15q1Xc8nBdjgeahUyBatEL8u8j33R8eU83ENMiFcYvvXGSk",
  "key42": "5enW4h69sjKtS3uP31bKJ54Rja6dT86kfVAELw8CkhgYp1MTJtN56knbDMCwVz4GLC4hHQXMc1xS19np7N5jJSUn",
  "key43": "vZ8qhDhGsARQBwfwRnMUeYs14Tx74CfhUBRwv1CKyVZgPHvqBV5RykGDYnj3S67GpFgneMmjRE57ggw3eKrWEa8"
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
