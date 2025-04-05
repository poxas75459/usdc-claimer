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
    "4H6UiemZfFHnwFMmmxdNadw5M27ySgEvsTUeUKhQdDmEGAHdE8bjjQbacZAoSApMpaKNfw1jjkG2gZe9nvdSuquP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MZvJRFzpQ5pM3VYvadstkYgUvcXJH1Vm2QNFp436qy1NHBRGRRHCxerr8uPDMnzRhfbL8Qe7wJ8Nb1v8LLAN9Bz",
  "key1": "4wzVPW4kJuUmhVkWag1vP5QgB8QEXM54mXiNy7WZ6U181QeRvtd3QWw3KvutiNDCfqmdzsDvHmepBDJwV4PkoYBU",
  "key2": "4TpBuCuqqaKA9RdVJuoZEn4BMzYeW4qZV65BnSMAt8ne2YXoxzsAhLjKWTLu11MKG1cnyFF4tWfKojvrE3tstR8L",
  "key3": "4bT2SFWNbjnFMHM9PDJS8fb9NPHaghNR9Vv77ybzYiD1PqxHRgcQi4Az6K7K5gyCmC4cpEL26S2HFmynsf7GHUai",
  "key4": "43ehnKqcsPpg9rjDyynS1Wi7F34ZVyE1iZ2D8qUrMhmvZcFEE4DfZ8aD4wV3sNgBp7xyn7Rw9TBDfFtV1fnSNfRX",
  "key5": "5BUrW9BP7XDD5Gjrh7MzXUdqVjcy5FtgiGUVC7AKNNzLciHz7XojVeFLr3sqcRmvxtfqhy3AMQW2gUdwxymMMYgu",
  "key6": "4rGJVinNohBetnj9bE25xoqVveaZPDh7ryz4ZUU3B7D2EvUZekcDGgFeKV3pYTqfqNvHnmP33WNrhnKstXLhxPfK",
  "key7": "2n5akDJZfNgULoRrSf3iFSBvE68GNELnVLTs5rwSqtmRUHMadXsXPLh1pbKxysUpNboAVPBQxTgcqVRSGDSf4qRk",
  "key8": "ogufxYzqNYWWZwVtkEKYtaye5WzNrqqWsehA1PxzwjZpTkvjNrzzt74VGottQVG2mTLXTzEwPePVjfUcFCWaSCX",
  "key9": "62nBDdPa2hdXu38qFosBuPDgVvB4mRtGahivuZKczr248oYTiBwSpwWW6Ux6tCaHi5gUEdKcY3D43ZJcggeLEm7b",
  "key10": "2rGNwaBuRy7NcuMGyH2rkcyj4JkNhSRJs1iePujg2q1xzQJdGadyBSYAyWsyzGxGud1TuyL32poGGjFSd7FuKX3N",
  "key11": "3fLrTFpD3RHtuNEQ8TnUA1b47G9fHkY2sZMPTfQ3PkHppRdE9G6tuexEZ5CFh9pntH3zBMKoPt5omfLXXfnqcFk2",
  "key12": "51C8PkqvG4sRW3B6DNY687tiaZ9ic2Pkq4sigRTCX64wbfGGSy5AbtcyK3MoYrBChQfw1qeBG4krUZYs9Qv2Jvxx",
  "key13": "5e3htjijqp5S8HQmxJkYwwALkbFzMrkr7qTU4ZE1F5h1yHPCQqba7feAA8CY5aNsuriP633sMYUnGJFvtqHNGnZw",
  "key14": "5HPgqbGDSaJnV6fDDBDg8uvL1iRnL1RGJjg2Tx23zJPVR4LAyYfPwmtjmiqFykqwDR9SvTy55vMsEA5JUbtaApn8",
  "key15": "26UHYzQLieQpb31mJXVFEWEcEVNhv3RW7bWT9vibY3U3jCjWTJkPsW4uaZCLgidmKDaQpz9bhZNqzeWQND6E3LPR",
  "key16": "4L78anrrV5xmGksh83Eyz5Wv3dwvFFhSrd7CSFikgbGJMQtsEyYqKZS6XFhFN9iE2xBTGajjkGhuSuX1atckV7fq",
  "key17": "dp6m25o2RUr6ef2U7YewkTYfMAGetnJF9y9QXhLzh5wCuVA7b7BSCNcaFP1922fYVL5k2UjWncQgWC3qh9ye4vB",
  "key18": "4x8G7xR93eyyS2MkPmC14fuHH74rjF3DCAVpfRiMGgxgpWPjDGixh3APd1iz4ou3BH37E1qDLp79BJPLMGif5uYg",
  "key19": "5VHVSy61DdjsMdzYYP8HTHD2LmhBzHmNBP2PUiFkfuNt3xtsoKAy6TbF973kMQTeMFKSf4ebGryasGoE9pFMbjAL",
  "key20": "2wDgmJc1aqcdoQAgfvzE6A5nwtbsaEU495wXzrFXDdjn4wie4ukZkiKQfSR6PPcXVVLjYmTov7FSxfGkhwk2KP2N",
  "key21": "4dRMuQFYTs5vJstFrtGXi2qdZmxWWVcPWAuSRFxusNRz7WbBL5BEVQw6bNXBzrx26TTangsVm9qysoWYpUg8FmHt",
  "key22": "7efNzvbQE39uRi9X2F4JtpAvTM4Kxr1UGSRFthquUYoF71FQQ2KoWmYcE7GgGqwNMmizAuQQtTzyTbz6yiqCU4E",
  "key23": "5HmZ1412D59ZUeQgbWz5AKrW8TjYSZXb9ycJf86jyQyZnuVcLASZhgQcrxZVHYgPAXrYvLUVt6DYCULHiEbJdEQg",
  "key24": "2a7NiYyXjVvnrUzUhvPsi453RsWSWNpasVCF1zdGakTRvF2aFbwASdhJXHPQiaiRg9zsDTJP7fatmS4nQrQek9fS",
  "key25": "5Hgc9Dc8nBbTrNheG6k5e6mp4omsK1wCJwLeboFbfT3iJQt31VkryJ1TGXfHJRabfV9WWkSTdM1hNxfGFEKCtiDF",
  "key26": "4A83xeMBzUTn5BaFS2Mj6yWKe5VxxGdx9ygiTXErLjwYzcYCVoeTFHU8zx65xhwjAnWRvUm4f3KAbC54nqjsWHXi",
  "key27": "3p2wgaGF2rueShzBF3EZVEbwjzARscn2PESqTC5dQMMfq8rzWLYQEJvpmMm3cyeLdejCcM78Zo6dwN7wGMvcGtJV",
  "key28": "2FVwCN3kMDLpUcBG3BDJAL78cGcRMeGxRZpG3b9XmvRT7aGurmj1XhCfEmcfB76Bbr8YH4Np9564HnEkimen4xyN",
  "key29": "456W4DKAV5bEu3pRVYSsse21XongTniMRDNpyS9Zt2STnsKLsborsdis3gbZy5yPvRReqNAkxkDAdmT9hjMBwztm",
  "key30": "2NSeYUYCtp2uj9XcPoqBg2Y35TRN9LMgMU6jPVxSmA8HhGYrnEGj16S6pPGGbuEsKdY5jbbFbDp1vXomTj6r87TU",
  "key31": "474dkSLRxuyy2LVxYp1ohiyfwwqDwxjhVcyA9Siv8AL3P7r4wcDHYMfxjU96v1ecsVxDo6GghtvPk9n7sZMuquYh",
  "key32": "3zPW8pNjnpx7KHSQrsEJu19Zeg2nbUZAMYyn9zKnvoBG131dja9v1YCZtqjUA85VKBRPi2BYqRQwSHQgxySyj4kS",
  "key33": "5CVeL2TcsPZj9ExePLqG2oX64uF37PNP97DSkH7rzsm66TvmsWC5MtGd2ETxzFhBxuZoPFoDuQGjemhkWk8tqC2Q",
  "key34": "3GAeRmgPDJUHMJWPD94Q2D7yvZ7E8Yzun3LdBK8mk95Ex2eU1cUyWLaCH3nSijUChtR8GpqbMQ7cqbyh4xpqjPuv",
  "key35": "5biXnLe14bMU1pnkE5nwuqZZEUap2nU13gQ6QZo9y8gY1VRgsdCwDFyK6bHNQFgNAcT8UezW5sG2XDF8wDLgffef",
  "key36": "5KR7vZgpYjHhVjKHLRPoY6AuchDiHeidFggVYqLghknAVzJfheWK43moor9a33zqH2r9xUNjnhhhDD14BnihfYCL",
  "key37": "5YsxncGrJxYnrrxyeTVJC5HKU3Gn5VcxCgAybTX3SGoPcfuCVXGfT7BLeinR2wroMt6uobvy6iPTn4aCH1ZdNiUe",
  "key38": "56i3ByaYT8L3of5bZ4ytwmNmqMu8aVnbhGqfUgytbMZNdrS6TQVwLi4JemWVmKPVB2sVYtpVR6jzrNrDfqRGrS6Y",
  "key39": "2fMmnudY7iDwSEfEKx7o6w77DidhWAPhE1CHW8WEpxNuLUg1jRyBSFwrkWA31e5TQuf7vyqfLmQPEdzoRhp5pRRf",
  "key40": "34mxb7HnZbefbsmRL2j3hVMUtMEQzwdYd8286DWzprMoLwQBa8WzXqWmNs9Sz2ETMYX5aEeXbt9bpyWxHZWR6cm3",
  "key41": "4sWXKDe6mYytBWTyAgAbU5Ldz2CpwGFNxKFU8hn5ewU1cguqu3GB4Cskm4RoM11ciFrsfhtU1mbshWzi72WS7ha9",
  "key42": "43Zx7vYRbGQiVcYvn1i9BnpioGT4YQx9YmArX5f1Bvsx1iwZ9hyr81pehD76gYvvJ1Epb94ywEfiDBceAyhoQC1D",
  "key43": "3N9TMgzKsZG1LJ8TFrZn8xj6kBPtrBSejytTSqYcJn8g4ugZcLxVZGKqrtcaSMgMN9jD4vAse6Ks1ghMj7HCRDTT",
  "key44": "3HT1EmxX86ic1MQTq5judy5ntJpt5SDd3hT8hBu1TdV4d2TjFuz1AhLQmRfbNiSAtqgPLd2GdyYYytoRSW64yQ2j",
  "key45": "4YwzTdzcrgRPGY2a75Ujqi54UDJmWKBRVNanUBZh7z5DBNZyBguQe7SAivWM2rdPrtJdqVAAdxukDYzLBGg5xsLM",
  "key46": "5msHAVpBpxhABq16hdcdFjnKhdn6s6J6BeRdx2mYgRieUWPUFjXiHL7FefTcYYzX6vQxgRDF31N4NYs5cfdmm8HW",
  "key47": "3CmERdLUuTBD4nhW54G5L8BEwRHwHr5yviXNqJiSsQWE9nJ2fNpdNvYqRL6xJELsybiwycRqezfaHR7phxooAz2J",
  "key48": "4oHS5AJxqNYMmvCmbW4oFUDB2hMJMwBhyWK18mFU437zpf6SpABSWkabY5hUZsr9aivq5CkfQajbQi7bjyUz3wax",
  "key49": "2heTE5v27ko8VTBP2JqegWgPbEARQynki1VVVWr2a35cmHcBxKT2R3eBoH9JxZjvMiqNG6wnqwhtje1boMGJz3iA"
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
