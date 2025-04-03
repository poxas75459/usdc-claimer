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
    "4BzfKWLfM41wHH9bKHhVBQjNnBS6ySqhZnyzMnjipo8mBR7N22pJkhLU556yjJLWgsmX1fqcjgxcdRAf3DRDwwvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "utcitMMr1Y1HnGNcs2cqaZCUBfi9RKMdGtsmYdKEjQKRWxCPQSLjGTzyPfHuxrGmNjP81k2nXXyw4W6JZ4jmfSW",
  "key1": "4pKQUgRVBLWSFKbjyw9LvzMwsepbEsSpR5PhtTHRnwyeXkaZNLYqGrHBxj9zpZeHXpjSBdSbeZMXcbwUpycPHvEx",
  "key2": "4AdeqU8cggDMgba44xjW2YkxM8WjQ9AyjMMy58C75rH36zemouQr3nJ8gP8ZmzXVkoT3cZYCptXbzKES45ycZZFa",
  "key3": "3YJsn2M3PBSAvYLUdkQsEptG4a3GXdnFVvk5eLwS7hFbttJa9Rueruygn9MmLqChRLT4oAHZT8RtH9qJNzVjHJMU",
  "key4": "2qYmPMur6wAeaxikdKERLb5x2zUzf6rCCxQCXmcgnbM6o6D3pnmNMLyimvZ49PBWGSSBWH69iempe4iA8LKPjHHe",
  "key5": "5UJtuCWCegbTggxuipLSozpXNnVWPkBa9umJjDDo77YNL19SFRPesE7qpRbh3nzGymkxPE93592FF1ioHcuwENrL",
  "key6": "4nLhdfcHfeHeCQfQKV8Y3CzKknX4xwLD5c3rurzwYrfCvdZtdSAjzA4h5vBaWVfZhjQgLtPKWiHac9mGtbwKXYkK",
  "key7": "Q3qkfE7fXxdeUWuJ3USZY6Q7dm34rXtALtvH9yqALAYTnBQ2um9TowPySuFcD8JG8UR3VEZapBtYCLhD5w8bcaU",
  "key8": "38157Rg91Zt6vvU7FFERLeRP7LF6XqvrNV1Fz2iUf7j9qrRpEsnL8xaUbUxKuy7zFprzAhAEU8czhZbUGXQG9ndJ",
  "key9": "67MWXdpFdHmWDeoforhwr3xAkgNd8cXWzWhTBShC9WyKFmXFqzGwWavF1joV8dwqwFeFKvrGuxLzKiQZR3b2BTkQ",
  "key10": "5c358sYfLbfmPdQVjXdkHx98B24AP1utqVA4BTMa6nbj6oMqsdVe4tqUvqVaQ9i9bB9ZJ8omKEC5SCf9aAAUg94b",
  "key11": "VN62mTjzX1LnBQwJiSxaPNGBQpqA23DGjr1EpawmP4qmdDsTrcMhBh3gr9PaUAxwVQ8AsVh7cMcscrAM9mt1zdH",
  "key12": "5c2nmxtYrUEYAoBzBXBdBZQhPwfzdocabLw4RgT5kZarNajVpRrRD4MkZP6EJWw7uaw3fb5XYxCb7nwy8BqBWign",
  "key13": "3t7JvtG2rGxyBYv4p4zS2TrkhApw2eUAe5KRkFVwJWFDSAADJm8uQVWeBRMqES8jTPeVGcwSijbiijYUr1GxcNsP",
  "key14": "3DppXMeUfD9oVqwDtbPD7Gni5JUZYgSqBW6wYvM9WHSi1waNMVK5XgHJKiDVH5Yg2FogoYsvWhXpToQStPDKa3R7",
  "key15": "3r33pcADkzYzdUKA1ZRfJ54BNA9puuiygUmtgJTTUHDfZxg7n2gBgMvFKdrutupah465qmACy78LWSnVhNWbzQxs",
  "key16": "2qN2PhQvsRUZ1dFtpne9sURQ3BCXpyhnCCBfRTP6qduxJjEG8DBNi4xuKnEkEVWSKarz6B2Udvwzc2X9JM5hj2nf",
  "key17": "otPB5kundq8yNeB5G4ASYkbJjDE1J7Ehdkf77GhdeSQha2uEBR7V9ocB1uib8MgxAcqezhN7UhjSSP3Ann4VVAm",
  "key18": "5TGLMZR8xmjinwYxykCGuZ9ojcKqY7pTHo9yqru4Kg2f2JCXcQQhAutToNn5RSEx4TB3V5t472Taw9rtc5S9xZpg",
  "key19": "NV1RYx6QUGkSSq3XTk27c5QDB17MgSfo2VymSjjVVhoMHVnbuKMWrmwqUor4RdHCFAhhTntM9ea4wM63Zyd9F87",
  "key20": "3S5RhUcN7Z3T7imhjjzYDvPf8XMrCCqXmSKNNbPoaxxq1Vx6hCEh488zqk85ujXxTHL3hcNmN1fZF7XMubo5tUpb",
  "key21": "z3pRK2amx8Bj63f5GAnAb2WQjZa9R7ZyaXtPGbd6ChaJwtmxDaaNL5BsqT1v5YFoRNFs2i49b2frkrVLwiT7aqc",
  "key22": "2FEH4gQ8JmaGJu4CadPuBC1JuKaLHByU6AVXukZsbTRFJKZRdqjDN7CwqpR5tFLoAcShmA1bfKyixooT6gGTULoZ",
  "key23": "39nn2rqE4ksp9fkTy5Cznj1Dzsr3r98c2CsFzMPQPiBGjun5CYbvhM5Nk9T3ECVUgVs25efy61kPMigYPhLa744T",
  "key24": "3asYgVy1KA8zrQnkhSU7S4drALT4sEiJVzMVrrURTQu2bBvR6VfTE3imXdB5wHipKEn9D6FbrBPsfju35DdCESw6",
  "key25": "2ZXUrwrNa6Y5tVFUi8Uy63Vtfjb1xT2kPxfHFR6qkKiutct5gfoLSS71ywn43Lnp6fuR2g9aZ2GffFkQQuXWKYns",
  "key26": "4FUd6zbHy4JFECGcCyomDUTSDoSvtiRvANyUbw6ctWXxRtu2tqdi9u6P8zEZ45s9f3RUw79cFRQj1HfXPosgEmaf",
  "key27": "5HTyHNj2q7F24wi89RYr9VmRqUnVHzsXFNkySZGuTEMavYikCh7o7upo4eaCPCi31aA5c9SuzKgFJFHVwM8UNG3m",
  "key28": "4G9dFWCfihPt2WGTv5a1KExsmK517S7iUkgVzqNVZgGPLgaTHRbpp13CxGtEiKiBoHYoWiPpcvJn3nVNkD4CvYhj",
  "key29": "vYw43XN3YxszcUgN4XpWChLMNcPkH8xG9fNpnuHnFfYpwZdAPeTx2ynGLUCYXExK4MftSorUzUJCuJuC2eNcyQ2",
  "key30": "4FyN1k1PQtDUXxeKoCbbLbsABzEGHDa7wSKbNtduCRFDzfcswnLHJDa3WT48kmAgHYJzfCThXnLNc4yKC8qDLW1e",
  "key31": "3EMotvSCDpag8TbWRtBmNjm4i6d2TrgQqecrDowW7EChfQgNPoDNQaA2mCfQ7rgqErteACApexoXxkammbRmfRnx",
  "key32": "5tyDo8GCwSFusQXYPjFehWUYirqNmdWdMbSp6M133qiu7jH5N8KqDUzEJfWrX3dyYJGn5BGWcPZwiHe5QL61nNF3",
  "key33": "5oAEbX3CR95RD95KD43MggGaxQqoN3aUPUJnENUMGRi8GRUSrdpVbz7k8id6GxkPvowCupshKvXtW2ZWYxp8m4HR",
  "key34": "KDzbzUwJ7LJn733xeTPHssg841dUJH5z9VRLRSwc4kYtXnGRX76Yx1tU1SoH7pydRNBTeZFFP9CfNV9kWQLo32n",
  "key35": "aahZ1865tadSUgub4JMGhcpUgExfHJk1JXYLK8kkzFJpfu8VymjCCPzPyk3bkWLiVPmubtWxq1MMDCEaZgeuUDn",
  "key36": "5dFfJuYbSKLTBGVXq6CV4xpFHPjr99RuKBXkmCyfRSXQqXHFfbJkCzaJcBWFcR9jNXLnTqPzzjSPqNdrMqy3npZ6",
  "key37": "43gv5EMXuNSdZ7UgGoRDqoSqKEvVEyxrnJmuPKDSdQYx8KHTeS5Uc8SzedCfmZ2aoF9jppD2Pqia1mCT5VLRkBZ9",
  "key38": "4NGTjUM3kUpEpBiKmkzcqCCYnTtd6TfTvzY4gqgX6pPCnrEPudjrZompWzphvkXvRerLWbS3jk951yCoLnHwDeQW",
  "key39": "56fBSQo8UW2kZmPbR55d7K1ApC9oXh5HaPfhiDYiSfY6ex7aZnfNWaHY323HXEahfzZAL7dhs95XmYCTrM7fvRrm",
  "key40": "5iqfpMZGYw6PGmxFtXYfpi1w6qZeJtbmgScraMKHSPAGFNeRaPqAtYsrRR1TfehT79awoDVzdQ2DWxqz277Rub4L",
  "key41": "3t8WzMnbfkEkwYSHrN3ojJJSkfQ9ABRS3fXTUnbGPx8sJ1mhX2gZ7WwSV8yxhVq2uFg2QrL89qCmrptFKsrE5c3S",
  "key42": "NuExrFNiv8gKqhpQBxUZroVJ7iGXJiFRJgW95Uacqwyu2mnYTpczaSqgR5QsdgWqM659vRRrTGVcy6raegcW3Ye",
  "key43": "2hf3joMbU3j5abNZpZpFGjUGZpddRWhqN2yUb5awRSuoA1KTVKxFyd3xxaJGntXDEYbFRrmBPTUiZ5uxWERgtLgq"
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
