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
    "4qeoT6KbGxWuBfynY91hcHrk4CJ6YBCjE1gndkbLs4RBXqtWSVkNkJg4jWgBAW87rWqhQtNd1Cu5uGaqrzLuaAN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nR2ou65kWhXD1sMUX9Fdqsu1WZsXwFSWbjS4srPQew7SY8e1QsNiPZvwqUCkMsuK46PzUW5V5wzLkV2SmrStib2",
  "key1": "127681aY7ZZiFbFNMM98nYNaH9n1gR4mYza1dxcPjo9hLDAzGCj4LDVdMnh1oVi9XvUMFzrwL3DnhfvQyN3xqP3J",
  "key2": "2oRx6MP2wQ7t7hB7oGJaGayzkWVrwHVLbrtbz9cwV3pg5B1hiYhbgDkqXpmRGhrrra5hJGGQ4FvKfELMPaBTAbMN",
  "key3": "33CPMcTSatodWXC8zuKqdMqE1e4NLZ5HMwz4bHdg7ftGRVGaoWPEZxPeiVhTFqq8rzPzmNv4WR3Hy9SiVcQvpi9u",
  "key4": "4TP46GNp6T9sgYE8GNAXMwr2PCHG17TakrKWKGZtCZb4XXL7EgsA1db6xCpb1jogtyDtonE8xV8zkN6N4CZ4tbpZ",
  "key5": "5KmfHN2w7ejwyhxpvTMmYRnmhXfyJQdRAhUd9uJLaCxBucAQBbkVJ8UuDW2otoh2f6V9duqvJxi8s6meQqMayuTs",
  "key6": "242yZYNcMeVXgiwvs3SyMsBpjFmuNKU8SUTx2tXUoxj4fF5BdcnNXjATfGqA7jVWPJxgizPjfXY5JHd3UVoVV9rL",
  "key7": "5twnZUzqPKwyLAZeGkztp58jER216zWHA6LjpBzQTH3vV51C5AjaF9toNPFRVNcS1WU5vigkbboTjZhYJQMU4XkG",
  "key8": "2BT2cGnQH3fYdJE3rjse83jf8Pa7mtQFLHqed2VfzYMZnmjVH75Qjbkv9HuVX8FuChsvwQJLDbv4QzEqsg2eeT5i",
  "key9": "65NPPGjcuSEsDyZvZjT2nQPZ8m36md7PSvxjkSn1abnmdqGoMN5rHvQGXxbLP5PvPoA1z59UmWvQFeW6bjYroDqj",
  "key10": "5TPpbR6xJ4pHsi2LSegTkHG3KWUDxTe1QFZAAVGjkz3BVkp73v9TUEQmLhgM6nb2Q8yXaTwuxkqiCtVJzZqhRQUL",
  "key11": "hkV6fGV5U5hCscNbSVD3SkPuTr2im8aCJKMpCTiZXSrAQ3gwP7pjAtuF9YSttgB3aJAXJ9j5cFaV2cYEaZvUF4N",
  "key12": "3jZgFzGL4J3D724oBMDF5riZrXnvSzBXUSTgnu5E44RBCBFHNMWmfmvn4foBY4k6GMa3vbBENYgaPqMsBYjraPGo",
  "key13": "28vm2pviTQb45VK9Uvd8ZXrqpTY1XN8FvUmvEbDfjM22gFyC6cMAadwx2pvXNibBQc6rDDeFNmmh6V38nFkt7JC2",
  "key14": "4cEPi1GUZsDkkgg68xK1K7nZPneR4zbG8xnCE1r4oBKCpdQneJgp3GyeAVNrvE6VjLTYkwArq7YXpUKiA6zw2swP",
  "key15": "4TfreMrEohRd9VhQvqNjR4HubjAiJLs4D7qM4WCUff6RA1ahanMtnZsyoTczuycELLK9FxkKeyszb95aerzaxiSB",
  "key16": "2Veev46iS9FTP8YNpVkdDsY5DNU22iBn3vJ1T4jGtJue2bjyppgcxkGQubwtQnP9P97WQ914Xqw6K9d4xhd7BPcb",
  "key17": "46zuaZ7vfQK2wsU5D8k4aHGTmH5wH6xSPadfUfhNznkHq7jjLNpJvauzJKsasmxPDQhLWtKRtrsoXWQn9Pz6fxSg",
  "key18": "2Vvf5MK4PYGM4YTmmWKBMVnPVszsqkmh3gk4yHcTexsv6vBJADhzHA5CiqkiDmmNnfEh6GL87kYd66B2UkzYqBzC",
  "key19": "4yU2ABA1kBrzVsngaKe9iFBuEgW1STcywZrdmkNzjHhJajgnr1rB9U7Nzoayeia2KWpLVZAt2B7Yu5CHsUt9mcLu",
  "key20": "Yu6eVXRhRNrBNeYNcqXyGcSvXSBF6M8g4e1CPUEM5NRfReJC19rqcHFGX9ECnLv4eupRSbhWpRHTriDJr6LDbv9",
  "key21": "38nFndQz4J2rXZiEmL7tfkWirXQnR6fX68arsPtnTZNf2CgXnu18zeUv6n4egSiMew76QaZxpuDdm2ZPxUWZ87ez",
  "key22": "2ARBFFYa5y1U63Q7TWWK3Xk2fE6ZFpF46zgQyyEddPRaqz277u22XWeonVTJAYd1bTPxu6JGGFdsbE1N5vAsfp8R",
  "key23": "3Np2YdLiDxE8FQumKoSBGCcK2fay83PmdJTtnkUNK1Kd1ssqC78GFGgnNnczPVb1AEA79LHfRSj5ZbAXsCRZ9KTd",
  "key24": "5W7X4eHudEFKijYA3E3QmchoaNM8NnZAM7Xoe8U56icvYyYBqDv2qrN9kv9ojurkxC9vKUdBrscG8x6jA875W8rC",
  "key25": "46qFxUHMwvc4gwCHr7BSbE3eEE7iDvH6vSeeSKucBFG8Hc1ZutJjAYvw4xb6zqi9GAjq9dvp74zWQkWMJyzxmavz",
  "key26": "jDK7jyx3YA6JFyQRMhtUemwoFrP2aq1aRvEv8gqpbx5CNRwjs9Frgi6wfDvieTvywcbhUprkf1QeBH6mDhZXaig",
  "key27": "2FteQN1dsY3xRY8Y9kES8mhknvrKuGgSC7XWmWaQCBAW59sdVNRSuFcGU5TVFwwZFGuYKRvFh5fvg74UJUDzWaBW",
  "key28": "5kzWya6tKKVXeLWjvZQN7co7GMfwQpbYFduzwMN9xE1byEjh5Xz4pUogXDkHQcv5GNSNZw6sH6xFz7jU1cvYp4Kd",
  "key29": "TC1CU2wa8Ay1AXW3fXVHr5sbXZLUZqWbpjz7RbViXQPTNqHVHeFQ4RzfDHV2XWje791Ry6zqtT8gJod6Q8LFiDV",
  "key30": "X8irzrEaUnNjz5pxeRcA8meevMLJh7LBVgzXtSUpgbbCvDMG44bWLyeSW6mHQFjTJ7iG1pkupYPFYRRoHd4Bfy8",
  "key31": "5nzbuHfZFWa11fAjNLxV34ekJo1qCnZTeFggvLeAjs4pf5wYCtiQq495bQ34hoNCan4WFPaYkBqiVwM1KWofUXL2",
  "key32": "3sgF3aYD2adTuRWGTXHy48PHBgB2S81FenUZ5mmtCXnXr5x4rFX7iho8L8b5APRD11xaWNJy4rsDP5Kyx5QBezUR",
  "key33": "2wiaaoPKUyfsxmVaPhieLZrZGw1wiDhCEwjXq19MSou3nVvZbgMcBtHo7vRWWH9j3349JUskBqy1RUnfCXUe3oak",
  "key34": "3ERrnEadrz35BSp2dXzTGi2kQPJx2JwzwzVXoCoxpu7CKxR3BUgo652x9x5CZ8Q4WM23bWnygiaNRq32vKnwkusB",
  "key35": "3dbj4WoXYivhceXPw1EX3s636aoNnoP6gPzw3BaA6d1i2PDkJPdXAgmB9YFym4q3nEDmRrLwvj33xCEush9k5Y45",
  "key36": "3Fj1TuFx3uUoaFQpsa54raqAGH7uFesL4YZ8dfCMrySScwgooy5He2wDzeVv8YmZ6WWXp4msXkihuHHeyihmSpmA",
  "key37": "4x66Z7Zk5hYJinXSx2U7SBmo6NZJ7Kg8sBjVjSwFTPoMGanu9fYSN3Rz8fCDLJvjmvBDEhWZNUGN9VLr1RmzKCMD",
  "key38": "Pn66ZwPbFY9zJ6MBLdzKBq2MZTT7nuwXhmdxFvx5M7CCQiogcfJJTYnifMrebuuFbYFnTjXNSyNxxju5GbqRzv9",
  "key39": "2CiVh54L5FDBWYubxvfoKeAPhJYcLxaY92MgssSvsVvfjLC4QWhQQKvHTXtFgZUfL3RjPFQJ7Mo29s5eoneh38ed",
  "key40": "Nsw7xRS6H2DLacNEmMTNoAWYPJ9T8pBvrk7mMhEhDvpApC1uAm9iTYCF5JKqFRkApdtm4eQLzjXp49hDX4GVnVW",
  "key41": "4SqCDv3bk7Dzg52HKzVSLzfsegYqSLygzpSguTmrdyAcepA8YCCJMXuoFyH9gwGAHcs54vSnBKanqYpoXGeqpBLW",
  "key42": "2D1SEPx67R6ApVGxHBjRrwbQwAqPMotoVQ5jZZr66gfdpFGfE1nRgQGj3E1THz5bmzi8v34XWBsf6WMpaLTSXAZY",
  "key43": "314GQYwSn2yWBgwriNXNZ7oefmTeS3iSnAJUAeZ47MdUgCRo5Dk1pEUj28G9E2eKdpBQ8Npa4uqCHUTfVRHDHTLB",
  "key44": "5PZkB9BbbNQJLLgV7xbFvKFaPzFXLEsnxpKCsyhqpdN5uTLja2Lkk5JTVm8LxmdqtkqDoHNujCsTD2CKtuqkDPaq",
  "key45": "3HyopNuqKGkoSzgC5V8Yfb7UzNtpAshZSRYXUxukWt8A8NwRfPfYUPrqH4HZK8cDEALYhmXP36ZKgAQCu4Z5RrS1"
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
