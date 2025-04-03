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
    "2DhqjgdJGfwMV588HG8RgjtkJarJicRxfpEwjHEwdHqjjjNNJGrqonmfCRH3ya5ZRZt9XDHE66DbpcphyiAcJNf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33takf5smUMMjTXNVXJG1twQxZ38Nwk555yMViudTCtHXuf2NtqhUZtEziVfjJ6z4mnhDgKiF2kP9NLcuGPkbFdD",
  "key1": "3ttHfzVQconKWGMqecqV5qXoGUVcJCyuYBxEYnaz2DgeWTxr9WX4S4ZWayhw7G3R8F93uEBnNuMV2ppM1ZTFL1CB",
  "key2": "3etUa1QUwu11v1q84yVGXYszPM5EhYtqnTVWMY6NiSNE7uda5dsq8BLg567RWDTi3hz3pUeGaDP6v41xdYfv3Ttt",
  "key3": "urxZKqRjd9jPkbyfdpZTGqVs1RMqdvHeHhGkZWWJ8WkwgqWSRedWw9TdFgv7mwygECKBrmHGTTLyGdvAPUpg68u",
  "key4": "24TstSKz5hH4bwq3VqDa3X8xhfnzFsjTB7YLaZvG1VRkJPCgDc3kujqY6bi2BZ1ZDbmxWEBi6GgvLXCwoYD9XGQ8",
  "key5": "61GQZ7R1mJkdETSMdZmRfw8esfVdQSWwG2JgZtRYQAzK3kZW5SQb4pzjuixgK4NYGGK27UJoFRAk7AzpcD8j3iFp",
  "key6": "2KKDvu1f6r945ZaLVKz8n3M3prCvMvTRJr482eu4ivWu2HzA7z1ruZcFjxkxzwNZZYR7svTgxMNyMnBmTZ6SrXNh",
  "key7": "feHiqA5xYEfYfzojctpPvwSrtHTp236CnKC9TmdfqLtjYf7Bqkug6xGRaLa7rR9CAaJwzXkM6yxcjV17kqPzSGp",
  "key8": "4QXndZq4s36Q5SVBR7fAaAxPZmQZLSbb8FCLMXgbEYxgFwzJXPEDtgmd2XNJSgrB1yd18ZzA8iGQZuF5ubuABU1A",
  "key9": "2Xs3wPJ9PNfGCUHD6KtUmx7T6ND89p4JKVnzkN2W9JFUFpShCRjVNpsxeJwgV255gYdsyrdY6FTn2onVf3s5MRK1",
  "key10": "5pEDjP9iADvGkShYyohKtb2q7CxeNLobs7NzJaxe5dQhz1984cbWJQY7WGKYaBwdjoa2V4dhorj7jSMh3bTvhGG1",
  "key11": "4KsrFTVnXdPsswJTVJfKg6nHThKQygjoZZBU2THcsimqmQtwTaSMLetyzhifUpQtQnBiY4zNVxYtkmVZjTKEyTUh",
  "key12": "25i9cfnHRGxh7GqmGtGgCBd5rrwNaEe8xY5DHS1tj5icDwbMXbLCd1s5nDzV9E6CXg2anHAMzp4YuikXbcgw4JLV",
  "key13": "j5FxTVkuDJBWkqFDfQ8Qb6FBpmk6LgsLzerprYEm7Jhr9hiJoapcQnQ4ZxdVd35PysgCWp32orXbEHpcMaAksei",
  "key14": "4CxUEAiKLjk1esGGDCRo1KunzokmLBR4ysMzQdPqssNcmnZU2NatprCuk4XbcunX9twtwAo9UbJdZJFLpVbomGux",
  "key15": "5UBEiUtDwvobYUrU9isEFLFQ8wUVV4PcguhDM7LBKUe8c6PRH1SskEYFtkHX4ADoLsuRpu57b8teup6AYSRkf5oF",
  "key16": "NG6N5qenRy5FXBfg1sYXo6owbt84zMHEqZPGAytDZLdDUhDCC7TKQNXBEw59V9n5uHLNryiiwkjBxiZGTuz1cx7",
  "key17": "22ZDy5zXogz5iCmTUq5QdAuDqsJqNtUsAuTZ4Gy2QbLMAahRRcAsiaq4NSyaoBziUz9SLVNRM63JDTVv6e7yg8rL",
  "key18": "5V5bb485M5B3hXcsXQC5d9cSoUu25MmEHUZMi68AUcEsPBRKBDS1o2vsnBW82qaUUmgnAebCXVc6PW6BM64dMj8N",
  "key19": "RBywtuCmXk3RenTTwLspKagteT81HLdH8USKuk6iTKrWoadzfnRnAbEkrm3CfN57f6ifDHYt5gvGS3Dpf5bZQZr",
  "key20": "5Ukk894FEBvXwfXN7LD979cHd2YbeXVGeFuX4itqCoxZ1SSN8f9PAvCPAEFR59Jwo3T1spJPzyNKnHutiNq2JmHf",
  "key21": "3PMuyJznooLwHy95oW1zwYkcAwGNkhC6RDuxxpYP9LqF7u7i1gDThiBhkw9KRt4iMg6XEmqEwZVmaa47LSQFgKbx",
  "key22": "5Gkbz6ELvZRzesZ2KvYbcDrBtWoFJar2u6fiJn1fwxUtKPPTXxYuMrs4ZrCGSJe5tTLFzkL31DKRVbbaU8PTcRmR",
  "key23": "64tTbtNknBsE59zsegbraW2BKygPYwnM3d8MA17KEn6CfkzxvBPfVPotrquNbuoRsDdwDbfnw7tp6FfYk2wFgdfQ",
  "key24": "3YUE4wKEGvCeiBCKzSriQCDgmhwkzZe8ZqC2fL4k9PVyBjxhDZzMB7gS1Tgi52EaqrKSiYEQzmt9biBbTByPF6Lf",
  "key25": "4qniMgpvekop184Hq3cPfaYUNTDCvDsMGB3KShGNk3fNJryPULY1FbP5dhZmzL6APdoq8DLDYrsnbrV7AiR8Fn1F",
  "key26": "4tXUDLhXrvWmTSemgnsYLJYzy2rLE6TiBm2nN6deQxQyfHMsuxVBK3nAgwZfJpZUfzqs7QjJmvsYQcAPoAnGPe7Q",
  "key27": "2GLi8dMM3kqS8DWUx19GdAHW2HiFbPxcX3gB6uZQFompCkDHGGxDbu1kAkVi3k9vSJ4herw6ZTTbFVwPaTc2EJM6",
  "key28": "2LspLEK8gbpUJECpyocARYrX97TXmm3AECW1n3E8zmHW73PBiZ6eesncpVa7rNJ4s37BfVz2ughmW8HR9L9K7ooL",
  "key29": "36Ss51BHW9TSEFwJcRcH8bS7Ro6C5wLKQA9iHRgETmGKeUXwwiVRHoM6mjPQXopqbBqRsKfU8CprHuR9xkSGp1JN",
  "key30": "2jdepmuogfrgvpefH2KgdisZPGgoN1LFtYFnGSuNf76LXzPRryDFadW3wouBMsEraHd2d7qZ1daHWTnc9CfJaiks",
  "key31": "EoBvkyBCgcf4Sq8HZr52C1JuL2EHNgUwQvtgrLDNqCuS8wKXAXrVvdnq1ASLUWrVG1ARbfcyc2U5SzcukC1wSHh",
  "key32": "531EqsJY2BaG79mXXfHEjnJQoaHRbqTKifaRyfFgpKTkmTXBzLNtecYMyK5kqS5ZYGrQKc3GK6aPNjer6Ynm8h5q",
  "key33": "5NUpKK8V2cYbppsXq8LShmenwpiN6tJssBy26URq56hLtkwdvpg8n8QbqNSGVZem3KYnpfZ5UBHjbXjqdkg2xABc",
  "key34": "DXWEhgxBgVb5dv1uxu3UriMw4m8KpzcfCztNTyh49JbpLo4iTPV9oRpmifjHzHQZPtnMTJGUzViP1Sbrag2X93A",
  "key35": "4uuoSHUTS5KNgaEP4wj72S49ZGoZ95v8jQ6qe1vWsrdif6p5vxoZ4sGEzzHNRTwMA8dL6k43jxe9AvLchPmAkngc",
  "key36": "5kir5YELaNaK2tPtutkaezwRsHKxmG7GkXtLVb6J4qRsVNoMUTGGWR3ifMeu1xtiP4DVLty1ceVcZuKtwjVriEGs",
  "key37": "4xfZScPzuNQuQLNGPJebraMfGgmJNZp5gxqjSpie9rHDbqLZbvjjbubN6PnZZNMcwjQQiF62Qx2MABpz6sP7TRAi",
  "key38": "3zF3gjyEi4N84bV3t8vxcSia3kHvWK91nGMZWV2LASQhsaVmvXVBAeKbKkX3Kf18saddL1KzbnJ2apvQ8nVHSQSu",
  "key39": "48kgnxpty2S4QETx8EKqwGXfR4VRRnq1Wdu7mHZvSnwuDkpdjBWGW9SfYogjwWTie1Ujdppjr6D4WGaaB3mN86Sn",
  "key40": "5k7YSzLkSc2bmZpjatf3Q1qRJ1hGfVuGbH6mzwiRfxd61dZLLYYukd77Z9UqV652SPLS7jPrY6wjNxDtLcHAheui",
  "key41": "4FbYpqjYTFsDp4K4moMd5f1uZgY68Y1jbW4bhTGGairDrAqwDXw1UxjUwFY1MPtC4dWmaXVsyK2bv5GUy5N52hxt",
  "key42": "5Gs8FukswRrBbUKeBnQANKe6cW7tcjVBCEFehgQp7sAYJFrj6j5ZJ8hwWnMxBHcMbmB4XGjVJiVupdgVvWENY7tQ",
  "key43": "5nxvnZdJfWLsxncEkzzpoWE963pkToXMHPo5CKepruAYXvyj6UFMiQkjbEdsmF8u2vSku8pwSJf7EEjLbLB8fGSK",
  "key44": "5BL9RnGCxTBqR7hcuL8XdmcmCq361Kodc7M7iJJNbZiyEYi16m8kGTcArWhcX8gwzY6zfF8FcFvqoCg63ZsdsUpF",
  "key45": "2nqcjhS6vFAfMR9va88kHR4PhTokVKWjRa51bt9s3iJeLEvGDPrcMhX4sLzt2hP5EaVjyzTdkBmpNyjd82LGy7Qm",
  "key46": "pjH7Nro6cJbyyaJy2pD565fdhwrtGPArLm89Bw12KUoffvuzV1xwYgQkUtS6rLd3bjj1VfmDBNrc67iuw5i8rDb",
  "key47": "J98Bo3smYmHjsthHbQVepPVs6HU3F95CEGjHW2mBdvEywJ6MjVpUMVgt3zhz6YgiW29XHimauBBbGbTmftUhNQx",
  "key48": "4Lz5v7XQ1tH8v2LxjqS9YcJCBAN5DjU4YxWZAKt1rSm6KUPL19H9NRzbfE52DWDpPy3mdX2onTXbwFeVVDo7A6qa"
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
