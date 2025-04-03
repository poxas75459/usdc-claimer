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
    "3eeydww2nRjCKeLT4Tdzfsc6aZ5LxH69b9XurVHESWq6iozua64xw9oNUqdYbwGi8jKWfrSGGCbfBnPrqkC8tJYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L2S22FYCikzu8mk2r9zYFUGp5rjN3HX6fJuXafx8nx8NKEEE9gHyoSjpQBsjSLqq4GfZnrQs8Jk1TECsiPGdcRN",
  "key1": "Aq1BV5TTHzEPpsyWd9qFD99rQwS1uLzfdDEEGWo2yYCwDS57RuFEKZWWBKa1VQ67ahHXRMedkS8DfyLCNLqbWGu",
  "key2": "5cuDztMZ4wUM1xhY2A9uZCF1aQKBKLy8LBsyaJesRehBAQU46KBgUjQ6FHwsS2NBE6sXBD6PKoN3nwZotPDUWtZh",
  "key3": "6366SxsaayuwhTH3V3LfDuGrKEjowPTocjRJSHgj2BBrPadL1eAwQBXSvUXsctAV47NfRSNdEuRa5WQUrSe5MELe",
  "key4": "5Cr9ymxzidvvpuW3N3HS7PqxbP2C9LxbyPf4epMj95d6S4u2JYc9uVHdzVpHjxuuwKu2ziLBuxrHSHeMfohi6uXW",
  "key5": "5Ln7dYDMNS7bVS1gKQBptswfLf8SxLB6rAq2SBWiYWVqGYwmHwkcDwgLWYmaKps8Q5Nc8i9F3qd97kMTyEcqtD5u",
  "key6": "2xmDwEHZ9B4G5C9w49h1K3bxCKWGaerEpqNe1bVHqH2x2TeAh3uzVs6jRJuttad57yCwV89ATBgg6HxP71JaavyR",
  "key7": "7qS592vD1sCbnBQwEdGHvawm4AQrYvQtaFcc1Aod9kwmYnprA4Hciq2Kvn6j8yhWTd9mJWNmt52i15rmzdZqEyX",
  "key8": "5VFETAWso6DQDzErxhBnQPMbHhVLAEAWqURtuv98TZpTyRufWZF4TYTWbUMYXzD89vwurr14mL3wCCGiXcNvHZzj",
  "key9": "49KKUf6gkSQfn4xP4kQnzvDMpkhFynj2tXAfLdzQd3PMxhi8HAbqZWghZsTyfyaZ7gUE88XVb3AYp6V13qFoQu9E",
  "key10": "4ufGx22bN6miq835eQL6whCtEZQMydSBtgnCXTax1SHWab82j8n2dsDP7ZcA938kp4SDTES1YkhhXbPiREpundFH",
  "key11": "Juk3aTqBp7sPmuK6Enx8QC9FyD1kWzMFKkTp1uZmdqHLAHg43ZXgTB9nJwvmYTJ5knS8RV1sWmZgYKV3ZSz19F1",
  "key12": "4zUVy6JK9BF4RVyfGSz3GXMqo6gKTHG19UhJ35ryTYRzcJJBaYS2hHe19Gv7gweY9vs3UrKefitJ7vRKAps7r64f",
  "key13": "4TxXPhsKr8rxiWxKg4KSEdnSmhXhWbATYSgYSCj6ye7XgMGpX9FSVQpt9Es9aoEtDTWB65EpRDXdkTqRqiPV8HXz",
  "key14": "2PTYS2rK36XUz4saRfwH955josB61m2fUofw9QjdErv5bWoWW5zvwemEpafiPZ69cqAUXhsNGeunfYceNi4i3LGN",
  "key15": "L2RYPTwU35VsPeTJcHkqLCU5FrQ6QyWP5zPUgsK7UPjfYzNGRUFGerxDSm6mqPSAV9Cc3X44aCZFockiB7QQws6",
  "key16": "5iKY3LF5ZcPu7Co55MJSucE8jxofmBP88ti7dgzDthYaF2rBrsHrwwewrrdVgXyaMS92u82SLE5qR2ZbeS1QvxW9",
  "key17": "4SJ8bDrBNF6GVdzZ8TBD4aSqGGw2pnwMYPyBWtA8osEU4BXsW2CPPEQLiagvoRfpDK8ybYvLrsMQPF8hyphvezCh",
  "key18": "3wbPm2WnpMAyEeMTJHsqTbiZwF3iNpwGeVi3G2xrJ8QmLUN4CwUEa3UTsvQL6Re8fDaaVsjHFyTThEMYKY6HxbHA",
  "key19": "3Pu64DUDsiAivhiHkoqabsTVSjNEr2PFZWpdaQLo6QL3xu8J1tZuj2P1k5EVqaGBGQDyac5EzVHTKvbAJyjjGXm1",
  "key20": "5mYFB7DYn3QVedxSJ975oUfqwKEzvJCy9D8cioV1VsTRKfh8HPhCMX648P1dpKGiUBbu8oCjbykKq7pH7ABjrTHe",
  "key21": "43sFARcar5N1yzDMGfPAKzWabeuxMzLF3d4qhvV77iUrC99HiLSmj3RspE14RUBNxvXAouCgUfvDLcju8N8Qe9Hb",
  "key22": "2GHhFQstRYCMMi7tXw7ATUECAZ9KiraM5RBuW3p7esJWEhxfN5xhYTeNKooozE1Ash89aPvYiGbEyvfXrYhN73Ho",
  "key23": "25vWFkacsjLkD9e71ZeigTmsxP5sGkhpKqf2wfdQVuQavBCUSpWgvGGn5JMhqgXCPzgxdZLfKgj2ACorRT4QMJWm",
  "key24": "5XmSGeJqgDyiVmVk5xZmbL6VkTyswhmKLFTWgFSQxDr1Qt3pPEsFPpUPD5RBJQQ1eiZBisK8ZweM7kduvPw3dmtj",
  "key25": "5xjC29GAJr6tgEW4zYitdgvmCBfKvBQn5HHrsx3XWybPWtHCZ3MpTSqXu2QX3KWHuPjm9V3JqZcnsNgFtMhUDHNA",
  "key26": "5yc9W6AroF3dSWPp8XGqPLtLrKnTx3BUTKufCmQ9sDE9YQQHwkGHMptkKxCpYytE5P5h6aFDYKBFpfEgVMP3aBfD",
  "key27": "4tDSFPmkywTZneR8sVTJY8k5pybJ4294cdF5JvyRq7d9SHycRrjjuKXbPieviAKVTEtM39VdUzcyX3by75BFh2zv",
  "key28": "aPQT4L6bZzaRcsi8CbarbKfCJtx8SyYJUWiAghVV7EabJ1F41fod8r4GgREpCycxpYvtZWQHdtHc2Ju1DEiuwjh",
  "key29": "3c6z6KWibp5wedm5B1aRm2CdTyt3HTrrzuXRWfxjgqojjYBKaAXzYqFMvowt6KsCAwM1JkA2d4rNpxKaTf37EDtC",
  "key30": "2iskPr9yZ2RNp7sk8TRQNm8MfezyRrePXgbs6XUYAXZQbYLtCVEQ7FgeRvfYMBJNvNtFLF2JEeNeH6RAArjqkmbS",
  "key31": "3kd8zescZrjuh8WBCJyTVcwJExy2s4CD4ZuH5PZfndd7uN7KCRtu7fijKXkgqNTFzKqCmtAGQbGe5NBJaxxyn6a",
  "key32": "2JqSB8hnKfRTr85GJnZEuCC5aUTUGGpZGB8kx7a8pnFAn7fGx9djtNHUVvoGq4V3ZijD7VFi2N6BcbWG6FFPYmMN",
  "key33": "5XH5Azskonj9wH8iotPncJqaZbzVjjZ2C26FE2jbkbwkmyDV4xqjf72ZgKXekTuvzL4X4ig5jWkkeQo1o58BZhFq",
  "key34": "5AWy5NXpF7KMfUh3W1W2aEA1NDhM7DT4uJ6p4B63yP1yxhtV16bUTU21iPRrnXpPx4HVEbgNYGuGQnVeFnArnL5o",
  "key35": "2QPVJrSnWBbkvjagJxQDMwopZNwGWC9W7s8HhqdU5GGiw2Q9ynvpoMZwnia7We9KNSKj3THvYuFUaWd961N1Jhuh",
  "key36": "xafcEgLwyomH41o6DXUfpPd8p2wAVQSzvYDqWKDid3vk96VLJDkpM8uhEWR3BSVR6iFJvJj1VKrVkkjmvZv1WD8",
  "key37": "4jQ2AuPiJJZ6bjKVTMUcCUJBMxa3gPbCtgSCHRbPaoZKW6HGb7MtFJPCienbNJ42Ea5ReNLq1txwsEbuSq5EY7Ka"
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
