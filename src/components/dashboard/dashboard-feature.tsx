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
    "2moTzkRqtLARCJNg5hd4wfGWNVZnuJYk1jtdFkf5AxcgXCuqrn3zJhXK4aRkmRKgWMrfNbdqisVvWf584rw767MZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Dve9ZgfJCkNChToz9WTU6kwgANEGvKnPRYFCxhqYZ6rFm6ojzPdc2PK73wuJQbXwNJL8JTuPhzjVCJaVrU5D4T",
  "key1": "2eeiQZef8JqqHBeR1SsSFcB4WbHDMe3vZPYCgYM7wLYkykQNtgfmQUe3ttjXRDttpvV9CVw5UmkCKbkCmnN8uZ7b",
  "key2": "2pNdHmui286D4QnTi8kxpDBnHafEcF7RY6RXZ3a1pS34VNTExcXdpREfUGLmjVHVzsBaFeod7wzFVDSyDbgcn4bh",
  "key3": "c75AJY7fRdbNczvV7LnqbXc6tUVVHmVawdSrwYbq6d6yMKbcJ3eDRyVtMuwQQQmKZkm9wdxPtTYq7pv6zHGhJT2",
  "key4": "3P4LqWK1ufMW3m9ue9eX3tyDgLhyL6ypLKCLquajbk1m8BijSuqpK6K2rXExmaAFj4QjzmhyNUnppDY8hR5JeVDa",
  "key5": "61ZkFx5rKJnDb17z2uXbmArz3XJHe6htXMTUcf3Zdjvd52eZHhMRhvuCG6pNXAMNuGjQ6VkBscztCiKm8zWskV6a",
  "key6": "ePBc71Fu5MMrHJh1DqSCa5yzA1EuwbiPihWWBTkZJJBZ8LCi5Ti2jUPSaS9KLPhUXGSYPLf4LoJcovuVLtJX8sj",
  "key7": "mRZzb5uWpb79x7Mr3PFouymzKhhEeu1r8PtSsP9TDCc9nMovZ9N8B59pTosYaF2UKv8yLcEb817HawL6BVSL3kY",
  "key8": "29T8yHHm6uNC5M8rdM3EcjS4Xhk5RFDqct2dv8z6EfLhDpUBSyrMMzJag98BJyHAyJ8mMMj7WaZp9LRFFBjmpGLs",
  "key9": "3fHuZNSesY5h3zVafhjB1bemHS7B8QxuwJR8AJQe4FvS6pAuTcp64BchR3bxBzKZ2pN4c1jMmXsPMn7UHWWj1f9T",
  "key10": "4DEsQYsr44bFqiCV3xqA43f9CRhzY9eSGzvoVz97Za1kDikPov14wwktDesibMPU73v9jhpjBrucLTg6uTtoPzEU",
  "key11": "5eGHsNNyuZg7pAT2sM77DoSCNZwqka6x8ohTPr56ZcCDnLXc5Qq8D4xeYnrtEiiyRfva22XgSh1Vxejn7GAoFkGR",
  "key12": "57uphcJY4Rc53t3qRwEp7rQPNeiQvZrZT5Tj1Y6WbZ3TRAUVaFi1do3kSpu4Mf2xh9FsdXPmn6LCqJQSfmKBGzHY",
  "key13": "2hXJqVoHrrhXymCpBRViwDvMaedRjvnQ5s37T9mL31XMH2VwB6XGoZXXvis1UmB18zaayn9iuSSwfqduHztQrRKv",
  "key14": "3TdKJzKiM3cimiPRQUextisVkWahni3naEPEAWyAZBtX3boBu1US79PnAcURVq5KsuiZG7SDXgd5kpwW3JCa6m2L",
  "key15": "Bni122Z3p15qQLvrXrB88z3bBdKyU6ZLKSWBUSTMk4bgiUfwQMEeLdJDydoK3bBkvnf7MA2bvmt7TGs8qi9pnza",
  "key16": "4euxcWbvVEFBJofNjSLPLDWmz9c3uX9ePHnTSPjvBcer5dJDt72aXSv1oniSuUyh17SarPz2zEBhifczgD7Vgnic",
  "key17": "3uuYtaiP6SajbTgBomhGxT1TX8D1LgcxntHWBDBEfLsBwEQKYL27Wn4UsBvKwEQgmizbk3U5pdwwHtnqcSNzQRkw",
  "key18": "5YJHLdu9qwZReuLFnUfigPm7KTAiBdVyYe6VweqYNBy8GMeQWCfyQ9L1btu57HWBmuVB9ErZeE3kAsYZtdkhK9JH",
  "key19": "62wHGq6pSobAa4gP3uCcCdcNwgu8ToXhJFCpKTsgGzsn5uwyU6VG9CDNLWF144xsi7TuoMzig1XcYN8Hshyj5NMm",
  "key20": "5rxBZyxGqYfCstk861pMaLXxXr5ufVJXhKC76C7Y9YxW2ckpw1dhvCPazMtDULroMxKAsYVY5KiPjLybFLDWqtr",
  "key21": "3uxNYDipGaCo9qDTw1VmNakY6T625PyZoa6v4DhWhUQwG9jCb7d4Am13SUbDSP94zAYnD24qxXzfwdFB3a8uSD7C",
  "key22": "54aNQYntogXF5J3EUShqjXkp918DZQVr1vXqMtJT8C5WESdagzraHbjXMGrz2C3fp8jS4g1V95c8UhoovNYmAeid",
  "key23": "43d6UPVxvb2YjfyJqUBAAjU4ms2TNbrsJdm2g5ZircjkMWzS6UVRGfnimwd18dmwSANSbVTwfe9zNuWsRQHmZnSY",
  "key24": "2ewJWrEcPG3xNwkpoJeK8VmumAuWrq5nYy6j2inWy5NBBdtnLSfgXEqfXsfYnCMiKD91ESuNXXVso5TtEqpyYb4E",
  "key25": "3RvrAZwRgWx9msM9Xaruxw2otEALqRfBucF2yf5QyjDz7wx89kZEgAYm86x3b3M1jr3wHF4pC3jHTRq2gRo9fd7T",
  "key26": "hG6bbMH2vbZB5mU5wkzMww9AVxR8XFXCXZN5zkjBd6Hnim9QVstNALFmdM53ddTUF7Qb6nWtMbiuTAPqiYCNmyH",
  "key27": "3Q44VRCjCKoCvs3t1AZVYebCNnGoPnea18ZqKoozJ6meCifxK2hopXnRF44zbhC1ZJhavwijnuWp2AiM3NYHZrNM",
  "key28": "366oCAeggU8oAGeoLSEFQkNdm4hKQbRCeJTSvJV9SwUVWKuRiDweKKYpCXi8QjiG7SGm7m9wGB3Xu51LDAbXqEhw",
  "key29": "4EH6AkKKZCZhXjZBaga1eN3xT7SbhjSJzNehrHynCkTPd9qXx5PiVGjBu9zzwsz6TEiiEUApbWJk8kVP5rsVX974",
  "key30": "4F689vfeq2r9tBwxRayC3Thi55GDtasW2p7PuJA3rtZXuHjM9Bx1WrFovWGhYTd3VhuDqqkasMMbHMHHe5k3aQQb",
  "key31": "3Px6sZZVy1jJKyVfdVn49JJjVRFagpsPpQEi32ikT6rWVmX7Cuu5W7xa4qyZih14PhFyfriuZWtHtXeHDDRnoJHN",
  "key32": "2m2tZsshXAmi1bzUuuBdxKJiVNC1uvTbV8KV3D4ki39UPfpyAwmXujwLwXY9vTv667pvXKPL3CcapQi8qVC8TvYg",
  "key33": "5U5wuwauqLjPUFStKayhtWuuPLEnTa2A27MUTZwHUfdFQGcoxMppj3KtYgpsjxGX9Q5NL61jUMqy7V43NKePcC7X",
  "key34": "mi3KfSe7vxN1uzLwxw2VweYE7mWzCndxt6otBCnBrYVCiN5kNp8cJTF9Nciqq8SkpPR9AvbLMo85JxajWTeJ4GH",
  "key35": "iYrswqb7mFdzRqdb13D77MjHdrFKSQt6UUcdAhL196aEs6DvAWXn5mGJN85TjxGDUak12wkPLsy7V8LZqMW2UeM",
  "key36": "5vcH3ES3RSauf656hwtw2yt9xQu2FcASTM8gBVypAGwwm3CTum4ETMqZi6xFMHa1ARxfHbrFeF4voSDtcQDjYgep"
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
