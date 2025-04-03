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
    "3sATPZgDRv2Kfi1Cq3eKGDErQJHrReyFwufcsWiZd4dw2LK69GDB4prP2iMXtmcovtrYneRb74wV5QeReSxsWutk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CPnQs1Sv1jjHJMGunmLxBPUbkPpsVtpYQTYkTnZarPpcjNpC1ca31Aygsf99Ficz6aWnqkzjgYU5h1QjZEfSuXu",
  "key1": "kcJnoyacVhvSLnCyHZeRRAbrx988xujLbSZZoPtcrPBGSuHSdKWJWB2CTf8whtvsR3HwRBuLeS6N5qEQLwbqujw",
  "key2": "3EhT21t9TyoWQ2RQk6bghqLUdfxjvJHa77opt1mNf6Wgv377Aqj6EqCUVHPAgbtXaYpwLLcfwa2spMD78YdDApvP",
  "key3": "3jGfXsCqRPcVbB5xHT7ft8uEfR3vUA4UqseMcCPPwyj7Cq1roTg2XSrcbpjEuKCjBr9GpZxRjMgehWNCdQGJaNHx",
  "key4": "2tbgNkKNF1YkPUCrq5qXYVRinXknNqt4JJpbS9R6sQz96hLQZW5py3mJvDHoeYKnsovJfNr2bhdiqsMaf34Ey6rW",
  "key5": "rekL8gLUQ5eiKKt2hYZyQohFk7s2b4RWm5BvaAJgyiytTPrYg2RECmT97W6LLvyFSJDhjJCjNoaUTVDKcAF68Xr",
  "key6": "fPvyY5D12ZWTjwFrDSccvv8wow4zU2hhTX8Sa2j6jGUi36mN2ooNzUYhYZ2Uoz8qVe187bzB7q2UPPaF7ve7ban",
  "key7": "4BA2QbYUEJgzjJ5yz9WhT8xC3Pdrez8yL9DRLPTUeFWqJVHvKh3F11HqpiSfahthH33ppPT2FnAi4UB3uZ9wCtso",
  "key8": "5kbRGt7PLsrCKaBr2Z2RBjVfjJBQXk4bUvDJhjsyG8JbQtTsHK4NB49gcrXpbKzESW49SQVXLfkZqUYX8v5kiCeq",
  "key9": "47rub2eA87sRGEhy2R8wBBRbjEDEFZZUDmfthkDxD9grdnuJZmUggpxprYdEn26PwBQe6XtabSuFj7HMi165GRS1",
  "key10": "oNasdJqpn8tHCi4ehn69vqdU1Fp3ecVBNYrPT5k4Gd6f7NY3HRDBsssePWusbcqihBhnjcye9Da5pzXRoVW8arx",
  "key11": "5kLrcFSEaPWQHyjHp4GUWHtYMSbC7pXnftcdfDSwRAK7Qxo7sKsxcKgtJTy9u1Zwu6zXRsrM5RWqRzQULZgj4SR1",
  "key12": "5eojZXespWCt84j9SVhp5LQCYRyaFcreLu8HyMHRnVwR8LyykdV3WYK7vhSy4yPDXNyqeBBTSJ1PxRyWnqcXmZs",
  "key13": "FZCmHtskYkdMNsUnjY5FibGunBKgpAune31uMpaGYn7nzu9XWWUTbKcZy2jwtj4mJBdPisdoqAcZ9ptbwHqdPep",
  "key14": "3VjXe36KVmjf2P28AYeAQZkGUtUjMBNjy8mqDDYdEhzpjnMFyLYRXuCQFLL6doyjYYGB5Dvxmsy7dnjmXgxV9639",
  "key15": "5uuegtSehQj198ZEcTaXsUVYQGhJ2Z1NJeKeTXtgehMp3ex2g6YqhHqC8yVk9aU8cDWEkV66bzeTx2xXjvSR8NyM",
  "key16": "2zbWHkksHKW9CDVPqHzPvARXHnBZpBQy9ZChuK5urCc228HvqcNY7fG1dy9TnV6dBjR12ZZ5sB8m5GuyAst9SEKa",
  "key17": "3fe1TBYRwesVeNZSkmiznoRqg7KqbsAfHpjo3AbwQwr66gKykivWHbcWrfP41tvT1UjbseqFXQhGPiRLZj434JhG",
  "key18": "3GrT9QFkP21VqC6rgSHhARXs5Vu79KtrphrhZt1dTVDzmkRhrMxidnbLYMsH3o9HMvFjXaqXjb68zYTz2DPGoj4G",
  "key19": "52vsJo25aeWySE4vNJF9fAJwJ8NdqDi19SWriFT7oB47YYWuxzyi5dzi6P41ZUG13hrfDtEDfb56Wz39BYPVqBMz",
  "key20": "5VMHEYg13VqfAypX3cwC9KhtAGvjdBQPAnj3mDhkvXEyg12UJLso4TCnrpgsvd3A1MedfYBv8drk1tdYphkdDAYW",
  "key21": "coi9cXmcMujvHsexD16dGYeXBGVkD8ypS5zgXZqGjyB2VzG6w8hYWvpGVgrC6nneP6TfBKzSQ72cF4jaCpvCAig",
  "key22": "7wf5i1TZGJZXzWttEJY8DDkBtZ53ZKzcnmPkdZoEDf7AbXMuetjHDwRVirUMk7MsRYk8DDsL4SqmHVk91KrmzGH",
  "key23": "4CcxrwRT6r55nbzitwAxiJ9KP9SoYNcGYLLWFSYMTL5AjNtARFFazF2igRpvD4pBf7a1pKiQEV3KD6ViKPeyMvAW",
  "key24": "49VF24jEAhL7UNzREhJAegLbgTecqtrD9Hga4UxC2AxF2SoXyBAyB3AxBT2a9oDzYxZPC4rcTUdXDJ73MbW4uF6U",
  "key25": "37Vu83XWdGQETKusU66E2rv9JNKthrzpkEaYrnD5GNCbnEwh4UFH87GJiY7e61j8NNcL8vDcCWv4HMioJ8vEFFWu",
  "key26": "4zoLBwaYmFvtxzBUYWxC2gh5e5rkHBxT8VvXB9ow1F3qRFCccUVsVauakhAikftQbdv7d2mgQSp6NQ35fDTxCCjz",
  "key27": "k7b1ZSe5hqyzXMSvJivzcbsgbmHsZ3uuEBpxBPZzUa31UMaHYXrr79wjf8i2nDhUepb9H7F3fjeWsMX8tymCe9j",
  "key28": "xm511j5QdjuS5kmkuufPspPiTxF8Nx18uoY3cDbyvSyJFWubZFSxECPdRnv6vy9XmvU7eFpmUuk3Cir8eX65ku3",
  "key29": "319KZZ7nHVx9qU8x5Xx2wrn1nEreXiYvbza8ni6n84AsFHjyeNsJHJdTVN9Nkuwf9MAo8JJYPKATD56uW5dAFJH8",
  "key30": "3iWmE78qGZGAgenUD7KtAnQJCCZVG4rM14GRaa7L948K7QsKmXPA7aFSnmf3X3XLN7bG1K4hANPJBWBMcM9b2LP5",
  "key31": "X11SJ2NnDven3uQTGrSjwWJwHGSStEdR8UDepuvTXWZuUNTM27zZhWWifmJ2v259GuinaAfqdM6yCcBgf8D97zb",
  "key32": "2G8WAbSA6LbE2NcBgfmWc5NbNT4d2HXeCveBtDxLY2zp9iu32jMq2x4gJbR9XqZUj2GAdt8nYwGBmKqnrQrHaJLd",
  "key33": "PxcPykgTeeK4mgbUczSxvBZK88V7tmjGfXvkayxNS2phRCFdUqDPhLLKVdUCtdjqq8Dkq6Sbyb16S3KCLYw49Dy",
  "key34": "EQi6PzAHEBLVh4JfxYNYzZGXSivMaKV1aJVGEWDRZR4W8Yyzz6Luy4rcpjBS4bLZ4ThLRpoB66WmHkovgn38fXz",
  "key35": "R69d6hXk9ojftVypnLyp8PZo92ZwcShUPAc5nocFx5H3RqQbbrDa6YtWXmCjHjxdd5SAPaEJwgcnkmGxsp921mQ",
  "key36": "8MeGWednUZFrChNJai7UtXesVHsFM5BSFGmnkbNhSveGo81wPPjrFUe6nHa9x8sTptyCL1ENr9nch64AtuJjVrm",
  "key37": "58TCBoDjhPmC79ugGDoiYLVUNrzohR5QeSNSEtqaU8jwGBHkXrLJMAZWQuyar1Vw8LD4DcSuhtzBN8dYj77hxCHQ",
  "key38": "2FTwQyHgnpg2LBpvNii6Bme2zVuzR442V7aMFhRqThydabtoiXfwcavYvUooUAavGw3JtWrbxFySr285EoSBuNFT"
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
