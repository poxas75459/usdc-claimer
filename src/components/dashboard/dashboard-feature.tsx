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
    "5hsgh716pvVvBf2q4ecLQfjGHQuuwysKDfcs4SHJBDQProgFgTFwdvikFwF4VLDewstUGMTDgfX5pZGVdWKaD5fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hhoXTkEVqZGjZoqHYtFS51JEgKPJYuVL1HNvUwUpJe98mL3Rqt2evoJNDHEBEuymo1zJcfW8L2DMht4stYmVdmB",
  "key1": "5JUvvZyyopZtrdz1dZrLNzvgpWsQEB3du9ho98V3cHgcu5oykpRqLnFaqorNFn6SVz8tK39aKvbaUph1G5uei42b",
  "key2": "347aDSb3KZm9Fr1mM3LLjUnp8D2Nnfx5PdzyvCZm2KJeC5UWs96rN3fE2CcsUFEyPeRuEoSeCzud8Ya4CZztZ9zv",
  "key3": "2zdeY51tCDzv5nK97kbHxeSRWnqZYR1vnvoUFCGtSY8ixoC3WdyozwWr9LTNtwhKexD9v1X8s42TQyqc3r8tfbin",
  "key4": "2rrsT27JH4cVifJS3QTNTGkKc4z6aA1bXTUmjUhH5FBYr6juBsy85Wk4wJn3KanJR2f8CVWtGSaLnG2Xr2rkqeBj",
  "key5": "4BNWTXnxMaeM7AGetX49BCnZFGnfDMpw1Xw41qGwRuUVoMFabXum3uQNequUuDprjyaUMtrwXCrFEB77Tb4Z3RDN",
  "key6": "7N1eUVdHWqVVLjT6HSQCPU6oc1gfb3r1PCFbQ6g96tN1yzqFrDfMekfSYBCt89D3Lzya4VqZ3u7zy4Q2cT9ehGe",
  "key7": "EQzMRrMzMvycFPNi69hxeQydRXdkbNvZKWvPoMecttaBp9GgxFuJjMAK4BNFb3mBY9djhYKE9ZzQfk81inStvgp",
  "key8": "2yL5zZQG1hi9bXDctctHKMmm4QR5KokJJMpmsrjP1zdDWMsefUfvSF9s3p1Z5QjGBf22RL4qhtRA3ShZ2mfSKLB3",
  "key9": "4V8rCudEdpPK1FkfU94Rbqd8NmMAfNh5HwiURykeysWFZTUJUrLc7TtDEAzXpJBjtZw9tJu78nQ8EMiKqorS8mo5",
  "key10": "2iZcDp1yCCow7WyVCebFsv3jcPVajawq9YPHDC8mnKoKXGwHMCS6HNExCir8MkAuEjh8vY35LJomMsTxgRXJn7C4",
  "key11": "2w7NpMgevqqXHaHN9Vdsa5MrmysJLvUGyj9aHmengUMLoQDEKuMXyu69tpBJQcP9i6Gw14pne9Z3Yaf6Qyz5Eab7",
  "key12": "5LTCEKxw1vZpMwcTXwu8t1aqCCzHvrXMskv9QshuMpDKAX7Prr9b8m7x4G5Hk1wPAxqG7KAiizMck9miKWoBuBui",
  "key13": "5mKG9BfCFwR5CHc8nwZr2va77Fa1wEeLEooWcBnNaNKefUTMgLm6Y5yi4M3gWyxksLNxgWTr3ufZHMRc8JbUaW2o",
  "key14": "5Di5oNnbq6pQWvLnj5fBfWvPvyY59kDrGtrk9PT9BmZy4Yqjhxu2HX8ENXPKGYTmMb7mSZPEhn6rrrZGCZg1qHjZ",
  "key15": "29AXMWpPKJRfLCok94rcXeWTbqAT2ZkGoAh78V7ffo5WH92HkprUJepGXSNEBicpWq6258oLXnMpXrQbUYnHzbtC",
  "key16": "LBKD4Q6Kt8UnXScvv1GSkDTokWshNQtR3EXRDY8LqvrV56pQBQn5AeekKnLbNnS9UfQipwfkiGQjmTtn1xSTR6K",
  "key17": "3mdeHzuwYGrEpqRMhCSeyqrxoMf5NanFq8LYrVYmu8EbAz7H8qQPT4cTQT9hj9QfSE6gcTuiLdNEtT9DrcNuCBhF",
  "key18": "4oHixtXHzFCJ4RNuFyj4azAgcMHmsLjonK54XtePh3atS7vpz3TgfKm9ShisUZZkwUG8Vk5Vyg5kTYhDYbX4DtN2",
  "key19": "4wRnhkG8EgfjdrkMXWSEDJuM96VoM2nD6vqzLbdBCuHvis1yqvuy1mAh13MvZZraYCg1NpXh7BDELA1gEap83jtG",
  "key20": "5A4Z1sjrJFENKU98ZgvrXh91C7CQR95haUo1HgR4Qabqr53bMB6baacBhkgAV6vP97MnAAkkKMQyzLVjGNR73Cj2",
  "key21": "39viHdE5xcm3n5jypo9soJShM9DA97cU3GUduG7vxn1G8QBN1bgLNcp5y6KtkR9epUFGiGj57eYQB7crD5yXQWKV",
  "key22": "3QM2id7iDwqoCuTRoo5KGRpZrpaSZ4z4f1Wi7v74VCHWg7LtPsMbNdYsqa5WW1JKs8EkwpsdUkNhJTZLqbe31YEZ",
  "key23": "3R1K8CuRvxmH6M7iTrBA9owYjPy35SLDSZFmMPJffxb8mpRFNixNS7z9qeBBjt7fzrCmTQ8JbgMCjnuADikm4UuQ",
  "key24": "BafUiB7aVBjsAubgU5X1YcVVDb3xa79nvqQ7wDvi9B9eJ99DBVriWRRE5c2c5vHNZYgoarYyWJYCgZSDiuoLfZp",
  "key25": "5k4tUpQy9XajcKtJjbVvPFFsSX5FaRnn5w3B87NpRktjWVJMvh2EGpgEeWuvSNrkpCFo31KummS4jXan7jQLWUDi",
  "key26": "3o9BzY39iMXiqFSBUWfS2E5XVmrsgTBk6CEKRyVfZWbzkZN5kCQixWgXjeckLi3YSxebSxA8vaUu6DnhRepX7no1",
  "key27": "5W76DjFzAEYZsXkPiKBuc6y52q2C4d7d6pHytt1d75Fae5DtkvK4mDZ7aEgaLaqDGsf6L67dZUd3G1eqdYJGvwjF",
  "key28": "XHg1ngpneLXpcGcqXYyBD1n4yZWu2VhiptTkTiGX6VS72WLymzgdyQUNPDvYdTLLgqKbgevYdwjsUJhTGanodxK",
  "key29": "CqfSYBQuCN8vb7636uub1KonNCvgb3baiz9VPMByN1S36qKsrcKh9YX7LnpMFm4WgkbCU3YfqbFMeNf2M6TaXe2",
  "key30": "GBFZX64yCNLfbunRcWagRQ5pvqcjutwAw9yowf4YTU85dGwzHctL41rop1u3VB264kF92XpMZcMDyANWhyNmZGP",
  "key31": "3FAsLk37iuEYFYjpNjPStWzdS2mnjHGmKPkXMonx9FHmaMibKjpptdjQt9b8aNvJgwbkPVFiY87F35k4g8n3TiDR",
  "key32": "2m6QVkKZoikCj7UWsmR4ycE3wKwJqxt2CaozFPysUqZz33iwpXGJtHrZuKPQjYvENjN6E7tbCDHVY2UrWYcGJ7Fq",
  "key33": "3BqLZw8czvhc8rkYNyzZsJ8A7imxshU3qGVzNDfMFFDkfnEiCu2hhSMpef64nHNLjvxrhs7ng7fxkjLbbZos2Wzw",
  "key34": "55XvY1D5VExWwNBRBYSZ7DxavBe1S34kYuLe68xoKNim5BbAsMYPJ7StYd1grp8Y4EJK2uXaERnorvnyYe6frCJy"
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
