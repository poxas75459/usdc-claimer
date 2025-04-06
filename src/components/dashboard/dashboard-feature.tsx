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
    "2kfzb78e4jwPUdm66cspb11aizXszvzaEktKvuVMrcxt71YMh5Yo5eJUiEfa57aZRGBTd4HUZB7zen36MhP7aHpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yU1ofZtX9aSDvZcjYovQjJo32GkHWVVMnAJVifpkmiHPcZ6w6GszqDAfGgB7zBoBbAwUXHA4YaP6qCrt51vVn6c",
  "key1": "3PSMeALVKQzW3QHZVxUs144ANhR2i5isFpANZmErELUQNo2eJdx5YiVUeYQEcq5uZpBgGJhSBbnnocz31qwXoeoa",
  "key2": "2z7JULudELhtfnnj5BN7ST1hFsbDZr94iQ4DtfFxgC3HVCV4a6C1jx9fL4PeqoZ6byVMH1S4DdWHcK9dFnCTiioP",
  "key3": "45rDfF48AsMeVFG9bzFyCV7kUQHyXrnRr7Kxss3vMnZxmVDksBwetiyquJhjiuiVKoR7vnY1DacAo5Be4HK7QpgW",
  "key4": "4ZNzmQcSM7szPSMXHrfLppQgJtFxsjwQySKkeQKzJwX8w9Ks6F6QE3NwwUAbPsJ7UR4gHRgFoX3aVPLxdZRKuq28",
  "key5": "4xNdmzY4nojweMAu8bgvJ3dp3aSGHeTb2dyqqs7FAnhUEWUs9fKq1Lvk5uzLE8h79GXiod5Kd6WQEgmiDaqryLTG",
  "key6": "2p77P37so9YLbt6kZPhN6oGc3wY3znKB6XkFTpgLDrQFtQR3k8jaDSgxnuWKSS9QMSWuaVwfvQEhzmNCWkL56DoD",
  "key7": "5WNpsT9iJmb7AfTYdAwSwmNxMB8zHXfwLSEKTw7rMzWnqkKmPmBpAqyPxWjqyMyPVscRv9LrENQdciZ6NGef4Xjp",
  "key8": "4SPirQjpYjsGikeRCHUznMHVejgxSSYSze9Pbt9Fg8cNf18YJhfLrpviecvnbKrSs25zuaQw1cUcPNwAK9BYMXpq",
  "key9": "52wEdoHEdXbnMZxdP8NV3gyLG1eb3bMpQhCimr9QDB22mAiMjcdDsQBWHpJciyPnGdAWxVrZXeCApikhZQf2mUUf",
  "key10": "2GghqJpnpJ3UcQdGDTpLtBstuuVnEv4Y1rCeKribZX8T4uDwN7xrHK9mSmLE73wy9oUpt1HHCxQNvngqhwR3LVx5",
  "key11": "2rLC7suRjbdrik1cFhqjEb9j3jUcVutotYnQedFdyStQr37osmQvvKQXvLQCFp4kxrLwKSaVXX1bTD98eHigXVz7",
  "key12": "5JeNzcYh4BqdmswqG5cZF9Nhz9RpL5WhrQc9dNKwxYkhKDmwzjh9iLds5oN9NTBrKtWQdWAzoGmt4U37vPzkwzb5",
  "key13": "3DcacyDt7pyR4snQGB2cH7KXmjYisur6mDbsCaaGVWX2ESazLk8ZMF6nJGVjpEenFwzeKTvjrHkWmuH7VZHWzYB2",
  "key14": "3ocNjCPjc38HRAvyPGGts8TtfCtokeVMmgqPgtVXLy8PwSc82yJ36V2YDQRYzYLiZZdwUw9Vu2aU2Sw4mFUd4UD7",
  "key15": "42p4ky4jaKrnVEBUetJCKTsFL5Px6HtywpSKERFZNqX2PAvMVLvjgV44ARrHGdNzC74yqbazdcVKUCR1AJSeCbBS",
  "key16": "2xNYMDVVYcqa7qzNWLo3L697yoKjnbuf5qkJo5JgpQn9AdXj2rbihRnVTSzQcW2X5y8qUsJsxDeuGpwNU1CpvUri",
  "key17": "2oJergUMgdWPJkzGBsWqPxufq333km1DnkLQrKSziVjpyuFZfBWJWrzbTXnZY4kze26u2bkdbDKFdgoeL9uk6dhV",
  "key18": "29UffJDon92t3k21B2nq4Mr5pSbEv7tY1uTy71tMbMB2ExQFCmWio1qGv73xW3XEsU3m7xCvwCUYmVsg72sJufNj",
  "key19": "4bwAGuGiHiJb8WLbsrr1J6WcPGgEgfaybrJL2yp7ceGc5EiyY2xEfn6qcKiaCM6tw3dhCQE7DBcmfzKG6dcn1vhS",
  "key20": "47UbvXgKaR8XQCi8cWBusV5UY2KrYj8qD11zGWXXndRLyQekDwfTdEmjo77E8Xb4d5gMjSnaagfLoQiv5W3Crast",
  "key21": "3i3GapGf7awEWHxPbNqJajHUVB9zXk8GEnk827zeZL52z9sbv4eo53reqPHcWYtsioF29TbUMj23jmwJrdUuqjt6",
  "key22": "W31j7pCo9uWbqPF9TWi1rnvkK7xyQrdTpSaDDXJFHYGSpXZecBD9Z9chZX4m5MmHW7Ktm4UjEBPVnQ2cgtuYaRg",
  "key23": "5b82zJf3Y9JvXY7pys7BhVx6Yg2uJatGDcuoHhgiddZiKh1NN2H72bu1ig293yJENugGpQn95bukVyQAejZnYQCB",
  "key24": "3hDCJm4hgDvarCjatbiShK2WH7MXcxvMAG1vdfGAidyfkrUkjyLqSWqHxogqfJLWhZgiAvaDUheWFE6oxnFJqayr",
  "key25": "5shfSKJNwQQozif3stz8myfFbzaB9jUKhVXkVPzJy4Zfd3ambGnX8Az4R3cnpMx95cvaaBRh3DWbsYttZT9Tikxr",
  "key26": "3NF5BtYU95VnMuefUqiXocpD26Y17VS3bkh3n8fLGeUd6rx2Z4CwXbQWGbYe2HaLSsb1mKjQzP93rkT7ymvwMfvi",
  "key27": "2exWJDmD945iVbMf9YGPvWs4gJCWGsbQ7n1pwew593F7yRne33N16SKt2MoQwyqmxutevY9kT4Y7xPv1cKoaUR3F",
  "key28": "4p7zZnQoaVxziGFgm8CEaGuoxKyeaLJHUT4uyouwNMQShB6ApkGCD7iQuhrrSikZW3sXYmyMrzPjcn9hU8wE1gyi",
  "key29": "235KXnxQ1XdXLRGBsUq6AaGZMTHz161zQ8zC4h71hj32AMZQNsKykKAkGEUtVQUAgtSJa3Zcyoxj8zQuQENLKCCw",
  "key30": "2chLLhjzW7jXxC4GN9CJ4cWEU4TjsRHwsoKACZcehs3zrRJK7mYJ369qzgZZet1Lm47dx5vAhqFNj2EumFvpcsBG",
  "key31": "4L8SM7iUr6nbJk14nQymwojmbjhijmuXzyC8vVpJqegVyLqXUX8Sm5WtsyTf9XknJR9hdwGsTqWBrsrDrVe4mEDF",
  "key32": "5ZGECpKkEdGY7Ac6Wvmr1dnZvT53UKL8or3z6yoEFe7Fmo1hhpBfX8HVRxd3N26NocnhKGiGpYcx1HQNHSGvfK29",
  "key33": "V5sVLikBGC7HPVLGNnoN2whUpeTyTzz2oRyT2HG8DzQepwDhjWkFcAYwdD6P6vzc4FfacgdH3jXrRrPBX5e2bnj",
  "key34": "4fAEvonMCeDL85uWckh7uTWSwdzavtAT3iaibL7jwpY7msTPx2dR5mtRiq7EKGqQa91sGXqthzfW7sxdhHDv66xj",
  "key35": "4veNfU4wNuLTrkuG7FjPUcWc8Xjx3CwTXk5HB9fSYWNHQbHQSwUYSCSzcJPnx1DHSwcNrkUw7bPohh3p6H6giptb",
  "key36": "33jVqccV65Wf82Pwf27Kv3NFzVpTG6sKZ2uhfMgM3t5XDdWDLHd2LCpmmgrifuoDBj3M9qVzDmdzCastwduuL5dH",
  "key37": "4FvATgbmfmRxajLawa7S3k9oF2xbz1SSRN6sAK2jkeBz4Hw8jY1NorDzvXoHSaKwo1Nv81Za71AUzNGTk2TK9mzw"
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
