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
    "5zTQSBeccdoxNxKqj9jaa9b4XKQSRpgDsd1PnRKPZmgw5uq79eBsbSxZJXLZUbVoFExBkrHY2yxxxhLen4aeZwpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NXWYbToKQEUyqARmrFhcguCvFjSUL984ZZQzU9G2nX4z18CYp8mtEFvgPPaReob5c77LW6XAub4fGDLLMHLXoZq",
  "key1": "2noyDDMUcVMLUcLjcVwa8NXnMXYT2PBGnjupXEusay5Ne4gzutBNKAVgXiMJUhURkcUAykWphJEHeqWWf74L3apK",
  "key2": "5qj3zhGrwbNgNeWnFXQ87zYeX5VgGNSkW7QBn4tyXFhNJGRqfmZwLBdYAsASeNP86KfxqZXLbJPcjKcqA32uqf9Q",
  "key3": "2MjD8Za44T53GqshQscZe3Ej1wPXYcGJX4aDsaTJdhVr7YSqnkWPResxvT4S6YitU18Da8J3GWmGxdENZrwLJ1Dh",
  "key4": "2wNYSaTmwLfC7U9u5ipjW8SppFnXtNhkmubLFJC6mihPqiU6G5cLxxjw44fK51W8eFsF3GiiP6rtgLD4sT8EX3q6",
  "key5": "eFDiZHnLBposHcwCoAWei3nt9vR75Z7iFs8fbeGFXEYuQz2SPnbYmURaAmM4x35RJnUSNiJmrSKJCrbnj2kAKuP",
  "key6": "2e1XbSxNxEL1g5WLRrokU9jebPDv7xpA7tndwu284SR7evxmNzrWpEmjsapzTerhSiKH3zpkhrsR9xGjzrPuaT3N",
  "key7": "2qF8kKfdBSwdd2Xwb5emPrTFbCFvMuSMKwLpBfoAQRZGjpD4avWmyApogadnU8KgKFG5zSXNw6mrCjBCv5tBgcGp",
  "key8": "2dEfcoSz9TCK9EKWoXAk3k5ivZqUFMmzFU4L1wmbjcuiSkAKw1sRjWiAkdNXjwiYQZhraEnXjupECBqvDsfMFNZR",
  "key9": "2eNnzwWhUKeD4MKmRjhmkaUEwtbnhuVd7tTVJtKzEXFN1LntbajNmfj2Ksk7GCYx147rFySKgHL4u5thHUw2tMas",
  "key10": "2zL58GehZ6W7fZqDk7nsYJ3nitW3htNSEuwjW5UM9Cw7yUfZuWsC7SNQgfiwNpNzr2nXqa5W8KmbhLd8ZD5eJ6is",
  "key11": "2nd3S1fNXwaoMVJA8N7Nhbtmt4iC3EWRxkcT8A1Mo16roiYLXBs46wqFrB1Mp1S9XhCuijFxDAyw5c1Vdi2e2Kde",
  "key12": "5f2YXd9Hy7LY7GLiBLypS7NHGfGRLyc87xQ6FKK2WLPrdjAjV3K92Nw3seKdQSkvwZpUXSvXii8NdP3EgmiVUzz2",
  "key13": "3LAVRwn7xwF8QDqTgvoFmFApMw9sYa9vvWVy6TmZimA5pC4XZe4NgFSD1qd9sBGSLLfqwzCyaenqVHnS1zDFQj7T",
  "key14": "4dNNTELWn1scHFXFT2qqEE5wH1Hiasi5gyy7hESCeBw2ZyuG7tAuosnzcF98r9NnZstnCxkwkLrvm6GxWjCggftg",
  "key15": "NisVHqWf1Ab46zrzgNuGjjqsrwfJycw7UEFwKGrNWnyQBaLc7BFUjssvhH6iZtDosA93GaJ89Ps4p7BwGVJoaGe",
  "key16": "4PTddwNsM4i9zKjNoRywfs4U84VwyEnTSGpLAyAaquqNgjfb8eF3NQpPpcdh2V6ZL7Wr4V28skGBkY4f6nVmYYjU",
  "key17": "4gUEhnvbFJcj4CGeiMAU63E3W6A4iGGiezkMjkkKgsXomVbhHHmm8VWEBgA4uV712qhstp2CYMWZSvksoHUZ3xQ1",
  "key18": "3xiDwYDxpmfVMApZN4or2rQrQaJ8uuHead6j9eiemytvER41CUiBsyc4U7fp52h1kHXzSfixSNxHzDgNqF9Q33tp",
  "key19": "3R1f1md6Ks7gy8GgAqk1BpJV5b55tU5DfFWNVgutRmRWSbUQhEDtJeXUuskMfaC7PgRkLMmTCNH6mebU4NYR44gT",
  "key20": "5GVZ4FWJWPbVFjy2iPMJvjiPKWw1JgDuaVN7XymrLPhSFpoXdVaCzgB4b9Sw6W65phw7hECmChisbat5FC8tpKsN",
  "key21": "fmX9p9o1vJXQ2bmjFCRocrzkAcvZUEf7PxPkddySGKF2xB9dc9wKia9qgvNyZ8nGVUSSJRWC7DTekhWzoCRo3Uv",
  "key22": "pK5GgVVWs2rWeHeZE4NuoTM49Fj5Ra4AcwpSSKeQGoWc1HjVU55rEKyjbvsD58HTqHPdjbtXUWmYSgDF5N3A819",
  "key23": "4gnrY4CAU3QNC7VWvf6946rJ5PafyxjanvmhuZEpwSgRxkjZ94kub9e6WCBLapMJARkEUmRx9h2zfKkFe7mzmYEj",
  "key24": "4SL6KvZmEaCr21z3PVhTYj6EVwWM2vjVXCHBk2TiSvmw4SoE8wZvVc5rSf495ZrvigQMrAAXfSPpYrF52ghptxe2",
  "key25": "2WWE2RxDzdV2PnvpjWxEMxb6tGS4FSeXqwakRxf9NSBF9VzQ38N4VfjvVUEMnYui8ffLxqxKuZq1HddNkc4CHZ8B",
  "key26": "4NN5dFcTL4gSvSLMiow2tJvyxXjFMJmTvZN7G84MxMqvi4dpn1AT7zJxcqcVLhKsDzWG6hsbihKhmY3xqs1ET7in",
  "key27": "zhTcWa4UD7RzHbGkyMLyrciqJG3Fg5aNpuV5nE1wizksohLudm6fMtJpp9eWUgq657zRgE9E8JGb3t1nLp6Lw4B",
  "key28": "5ZZSdoKCgBmHfQUFviN5M9jKNiXFaEUaeGnfmJSThtvwvaBov4M8zGrEmPFvnQ4Gi4DZw9aro7azvjwn4aPjrD4h",
  "key29": "5JFChLDneP3i1xmhKiYE71VuEgFuCnNtf45r9opyHgT8zU9bMVeKTEwhJ2QFbj42ayke355jVs4nFUa1hDTkoxPh",
  "key30": "3dKaYeh82L1z2YdsJgBXZ2LALV4irfFyx5oUd4wfGPm9id96eVBJLCmpdB6EtpC94ZjoP59ADsmMc9Zr5vftvKJj",
  "key31": "4U5LEC3vTRj8eZj14bWe2C2LtokPni3weQnaCsamgRCQmQLVbZXufCZjV2f7apAMG9LuYGtrN1Xh7FJLWNZHfsiX",
  "key32": "23Cu6U88m8p3ucYRHJUc9VnWamxS75BgQGuTw6MZbFJTzPxifuePjpCuhzcmqgPJYHm56AopnJGswiyCNLjDP8aR",
  "key33": "3dbMYjUWeiEAmfU9kBvZEDxBCL9xZgSTx3SYy1kjZQDQ46CRzsB1JykLpyTvSzMDdfu7TWqjuZek4wkE6UxL8kcd",
  "key34": "2skGppdYEFJzwQovPVwCW7uB4GWZb5mavgaJaVA2BVepLgzwjjDNk3CLeWh3KxVED3sD6e2AMJD2KCrKCu1z6fqf",
  "key35": "3YrqW2ksRifjovreMzsxdbBqSx5rniXdmp4s3QhzkVAr86kpq2tpVehyFA65KEBJPAesEp8VgFxswJrXbDeiis19",
  "key36": "4vG9w2UCbgM94fpZzSvsE2zevyZ5tz3k8HYbRN62GckZQXwaBsQXx2bi1UrN2KtruNSUn4aM826xQhTLYcxoMrtm",
  "key37": "4ezMVHzMZ6Tb4BF3dozQgyeCBjdFm31K5FKBKrT21zrvJzmud1a1gggUFafRHRkyKhCPbVPTfBKqtqdECooaDaHV",
  "key38": "4Dj9ZfPZ4yuT56sCLHhCDgqVAdDihuTAhmEXp7i9E7wmBrFVGPJEjbf2KnxixAr3AnDPQ2ZLVmp4BG5wLMWarRtf",
  "key39": "AgRoD9W6YJ369gTntu1EfVAt3tSn1LCNhqdxMiu2sVkJMNWe1rBFg5yUacCAK9nA9EuzuFXb8sRhu6qcs3NbwCA",
  "key40": "2vYZJnvSzPxhqFHDHE7Gu5FutaPpYtzERkfho5ZEpJvKoSfDLUBjeBtof2fBfQezQjFKASCiKue3HeegDEHtYhbT",
  "key41": "2vqne7NQ1Uhc87Xyr9CjmNzDoNJRkSfRvBSXj7sL4REEBekzrB2uvr5tNp3nXioyuGpEM1PVfgmMruyd2fnNT843"
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
