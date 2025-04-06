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
    "5xpP73yYfeQ5zxRRToAqM3CQj6L43PTDb69rZT7bmBQxhXCqpbxhwsjxbahajkR5uGpu6u9uu4XPVvq9BMqj8cU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45U1m9ygwgbCxTkCiWwG9a9E8Zotk8aro9LfEZPpiFpv5XmpngijhT3u1cv5gxZBPghkLBjYK22kid61Xi6naCKY",
  "key1": "2v9X2mDZfa3BXtyN8eUMGWq3pD2UbW2h6r1qjGgsSKbhENfcp4PfsCWa1gvP6uDJWirdtmhyVa6KrnsdapGWia5A",
  "key2": "3wjTQhx9qh1vR12UnothB49LmxSbXBLYb8yF2FEYy98W3XoajRmc4GFqmEyiwfWZFoofrQrNvP5vw8LoTJ2tWXvU",
  "key3": "23VhkzRvL4RCySZjWEH6mY3icoMjCj4zedyN2s71UB6AaoAiEfLsiJ214aBhvrunEGJsKcg47sqb6boD2m87HFLW",
  "key4": "3EDY3dhhw3KWVmFAX8PtixoifafBhKyrbBhhZKpno2kNBVDqGaMKFrUzZnmKL4ghLvqLsEYui55zZ6z97Dfi16cA",
  "key5": "5fRUe4TVFrTG4RxwKaCtgvsGQhXVwvWLauHwAAn3GaeQH8bcpMDEhU3ALxdQb5bx1RbMto7Ggt9qQwLZLFJnscdN",
  "key6": "5irVbkfg4b7akriA87HDHaztQdB1o1MeJt4dYifdoU7BEHx5ejwdtbhdft7KAhj4Su2A1y85fFvnfPJXdfwM5Du3",
  "key7": "4tyW4rmwubKWWEjHyqXRperpoyx3u8psz5nCUXMjU9DctRowc5CZcjFEgJPNBR6as9hQk4BSuevq4RG1nYse4s3B",
  "key8": "4Qdg2a4Rr4C8DayH1SC5jERMccN7NR7ptzrncqD4GqffGBbHbXPWg9eJyryuHwSxVX8sTKv4Szk8ZThtJK1ZTE8T",
  "key9": "4aRVJxPkBhPPGAex6fweo97nvzZU6NbNWTfUUsz8QhpHQ6acd1DNVdPBV8pe3t6wgCShXSjyKcxqXjGr4ryHRgvS",
  "key10": "FzurUxSqSPi63YFLYBGpiQMK4zYQ16p5nGFNWT42juihCHEZwmKKm3YVFrB6FmU3jcJYaYuLREefYSFF1Rb57BR",
  "key11": "4bd4NKKQGmYd9MLhFj6AUw1RrEpqgD4nehSG8ez68hT4r73ych5akGDpuyzJFFXz3HZQQwKMDWkhqXMndGxh5voi",
  "key12": "26zHs3VSxEZXABmaoQQzGVAgAoxWTxwLRu7PJcA72aqS2dXJFn1aVh7wTdvByewMUuDek3hpYbEnckd3QKYCL9Y9",
  "key13": "2VC84yQ93pvFiHUsrFwusifFCj4ESrw61ebwgQZ6eppqUfaCy9oggrrB3223E7HGmgU88P5vdQTtswY2Pko3QjXB",
  "key14": "3oU7b1G7DrVNY5447HorrzRmVGqDmdM6D5KtDxQsyksimh6mpwgZ9CoF9Q8dz3yh3K6m9JRYWrtYxFGvCLVGwfNe",
  "key15": "2BswPb7sdT5W2Bb9q11Ded4MbSkxGsMUsbPzwtfjT5bqihE8pxSi8o94EfL9nBhZhEYwQZLDkHjUGtc8f8c1auqJ",
  "key16": "5nrbpcWbE6p5iWnZ4zfgmnr86sZPL99cfCdJ9Qq63uZfbMuqZijtVZ1kSXgQS4uFEnv5AkgaAQMjE1bNDYnx1qcH",
  "key17": "2BLwX1EDzG1tLXTBmazCeCSC4YNxW4mPFeeVBuxqVUeKTAgXbjBiYRVVq4cWVF4XmE5fwHBionQ69jmFsMk2wRJy",
  "key18": "nWz7jENuq22ZwbD73KrawSGUBCmXSmaEo7JduspvZnqyoqjABBvftgkXb8vqR7KVKC7wYvDDXjz5ePnpTYyVuRX",
  "key19": "PsWyWgHmR36zHeadknchyE8TwdMH1az5NSPWDGc5JA78jzUe3No7R4G8npYBF66dDiVkZA9yJteGUY9gvDgDU8n",
  "key20": "4sPN6f1VEzwATzy5JSqdBk2QJsg8tA21q48jiKNaZwd2oFZySeNfK3BHNomm5HzaKJw2fztouT2L2N6RqXhSf97S",
  "key21": "426gNBptNQRn1iWTE167pSXBS8b7snmGHVPGDC9iWQngEzsKdSfhnBhJTE8sRXr6pji9TcEQVQbEMtoRZQ65Zaxb",
  "key22": "3qtqFu3XqQaVURhRrNhFeE66nvATy7oxBweCEAtj6wJ7RfDM6MTKZ9CcoRLKWJ7i6nnZ95yJbjXXNMecHvZhQN5K",
  "key23": "5HYDNQz2wseZbka2PZoVyeeneXXYmnBctuda5Qb8MgaeQLX2vJdoqCmgFE9reSSQebZWPf7aBC3WRBEhzsjAfLH6",
  "key24": "1saxS2nQbwT93x3LzhTU3kT4XWC9vsHbGZLnaGPTVTs44o3o8eUjcsnffm95oshyVE7J8Qd7i8ZRvGsegJ3RdKi",
  "key25": "5kHxZn7khzbqBSAi26gNc3UqkAqeHN9p8c9fqW49fKTrL1iTvtZYdv3tjRBtQ4vYNmfnLGUuCD4jYWCZkmrLq4pp",
  "key26": "3jtcB9RJgx7kLoBshRjtFEN8ym1dBQwrdBBWzLxNPqzLuNS3LV1qJvmf4mkS1pixh1JBhcoipvGpmKX3shmnLqVX",
  "key27": "5HPStNhdQ19nzddkLwpgLpEVp28RNzRLi71ewPCxE71w1HDEf5WsPmcNjSXyCxDhiFeMFjmc9GcNVjydvZvT3ZDH",
  "key28": "3LBdyQpevPPapLLwQVP4gquTmvNVT4tZuC9UEzX5ZzUXXFwnrhP6XsYNoHUjxyZULSMSCuG9tjAV73jqjeNqQ4ag",
  "key29": "3A18tWDknmTs8mERW4dZXVT9jX8RU4pcLBCGinJqVNkMj76gjLZcWtxgxRQPLzUYHiUvE9eciHTKvzznk1MxzCU6",
  "key30": "4fgQRx6Cxm8oB8edHWVMfnGgRVQDKM3L65VNameTyK9v99ibbAZAEmHgFVRod9U4MphKFZuenwzHQg2DjBjkRokK",
  "key31": "b25iEudsULBjJVfWGfwrhvjM3FxhJcZLQ9ptwwAxyEmNXB3Pgig6beMSQrSFjW4x7RBY38Rg4zvYfxSmvjuv6Qb",
  "key32": "53fLQtobMkdrpvnUY6f83VddpN3WAZfSjeEHWV4qVAtDP2RTauK4c6UZwpFWp6zHwM3bWcrbK2acAQvqF6bvNtf4",
  "key33": "5bLoEayPy3jGyHozimy5dRivKjg4fEuJgJoR1iZPAGJ329Wq2T55aYsdGwE5LqshS9bDipXwD7fTazvnqvE3ecmj",
  "key34": "5gw8751RPSMMxWonb2yYgwbKNnv6A8r8DFkKPhdwX43HbcmGMTuEGPnzB81TszydPwoWN2jDDEtRTMx9962cEciP",
  "key35": "4wASDpmb2Bfd6ZzvK62eSER55Z2hW2FyhRVCqJCnyV1JYw2atnFBdA5aa3NzMxbDWA4rFi77ZUXT3MgfPFdEhvW3",
  "key36": "5jiMoTHtv6n6ZE6rYmWChNRr3L5oqZcKNDS1JN7Cy6L42s3VkxPz5ENKpf7DMFhNMgBXQpMd2SfbZWnAPXw9d8de",
  "key37": "24BSQov6bNmQAL75zJtGucvC7254RY7avY1984XiLmZobRdvSLxC5QqFdCqhpZ2Tv1NZ5m6qBH23d9YXRJK2Gw51",
  "key38": "676w3iQCvMMoXXNB4qeaujmRmq4qD5VxFyvRQqxLyfVcbdSnKvMtN6v1Es2q2TTwVhF7J2VPPnvuGTZsNC4kKXB7",
  "key39": "5s9ny5NDiVjYW7mNuShmT6vXUcJZeyF4rmLqB8BbviZue93JRawgmMnezXh3eXvWp63Meqa3iEmbwybtWCj7zHYt",
  "key40": "3ha91EenVQFMpsiw5qZejczKcJ3N9St6qssJYHuhtE46hybXAUpTbvV2BeRaUhNzUz7QyqGBgESuqYdu2R7HJVXB",
  "key41": "uzxA8Yb3J6tMkvDqGW97DZmGRJp2F3iUGNGFs23pHhKJZA2v8NfWWXsUfEknR5UzAdRRkcjnLZtgmeqJC21dfqi",
  "key42": "2ipcNr37gadr4xiu3PaoXNwWFWUuopodXTh2jbgDPShFE4Y6b1Q7T4UCCgQwSA3obnah1Srbs7ZWscgKzVJEJ96E",
  "key43": "2wQrXEgLJBQCK1HqRxAtQttuJS7kTKQDaZzogzRqcaZPD49K4qfTPNHZXPxpt8RQVxL41T43mzbZdvwz8PUT6WK9",
  "key44": "tXkTKVphvqGPEVvbZeyoPKb33JuoM3sPWPbGnko8wbSYt5i8JGdcQHg94EWKZJmqf7TAAG5Ka8LuJXN5G7Fcm9W",
  "key45": "2brSKLjy6fk6dX1FTvSioPLrkc3Go72zEUijnJCX5GzVx4euzEuMpApLk48QRVDCocvEZCjgxT4WJxxLRcjFJn5b"
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
