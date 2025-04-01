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
    "2qpqguo1zTMQPhQo9zFvZExzTSsuUj334AwWk1cDZnttKocXVLTX4ZauqJno1gY4B2aWRGhdnK3FzdppoZBGFUeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P6pH8GJz2kk4MJtWzch4ie7RCyqigGeMYydXutts6Mpk42iC9B4qgfyK1zUkRppRJhyNMrJg85ze51a5sEUG2ML",
  "key1": "DeTYpJbys9SYvsbnwT5ZjfHymiPsXuFiQobBc7FiGUfZjvepHJkqxnqujsLS7HpSFkRKL641r6U1AvgTAmamTvf",
  "key2": "54KUoRxrwWVgQ1cQy9oPZeLxjvMuAH9LgNJeAuJrB7vDFdXeufmjwz1QcVnirU1icFKoYEarmqCGTBLqwnibnqaA",
  "key3": "5t1DtvujEBcajcGbaQ6JXiJjSdpTUuY4yBdrszecTjZJpVcnMiB1WuwCQk9rrHXENXh7tzQCYEcv88pEGXLiYCnL",
  "key4": "4bNFrHxRUVApwxTqNMoH1Em3gyMxvndjsHFhc2qr9D39k3V4na3VRmz6Wnc8sfaEqXsSpWaX8QXJGARt8EVSvwVA",
  "key5": "5p6u7qUWuPvsLkUD6Dpip9YPRkzfDXcCrPtVoqpkCE56Q9LqcLNJuAkxwam27ZKVLYAgSwKnyhXhKheMsdCTmW7C",
  "key6": "5f3z1XKFjuuC3jzcciZ3N3LoyGGMg3YbTQXP4zi4uwnTUGHBPXzSo1eWPAXUHUSdRbmYbVpHxWuPmohsXei9v6YQ",
  "key7": "4BytpHAbq2jSfrpdUJBdZcLFQosqn55yzwCZza2bwsr4h6Lbw98dKeBuoGfMsvWrAgx2yYj28wkCpE764B4Z27g6",
  "key8": "3npm41TM9wnyWf5s2xMd6LkZ4jmN42fqwbiL8ve96iLtR5dPNVz6JFGvvJbzhMFqugQVhGVodLm93B58nZMi8kGB",
  "key9": "575PRK4fB53XBj9rKESZnpzDekUDuBk5ucLy62eGPgMWBynceqi8dMGXbKf9p7QPPA6YJeu7TvNZXjFpfT3YAR2d",
  "key10": "4JyhfHw655kZH7zSaNwCKp9mjGz3YRjmfsuEyqzRvKwsTL1qj94u1yUumMvUXnLBLPMLnzkRqsyTBrR1V4ZDfLLu",
  "key11": "L95Anh6mETthUbSUiM2iPUApNGqBPgCXnbgoqNyMLqK3UqLvTQPfEYTkKAkNYeKoZ25U8tkTvP8njpSmJEc1csv",
  "key12": "58UvDFdKJAv22Rh4SC8HBNKTosyT8bXWcsGdFxdjqqKSVgZfUYgLD7uLweJ6vorr6mv3Z6ZBby37Kz2j1VE5EpGU",
  "key13": "2dMCL6VTnTXKzC31uphPoEUUFE2qPa2RdgKDMCxREL1MzSiyFeATZhhrU9ntW4jWKm6X3Gm3mZBz81Fp37rNJu5K",
  "key14": "4WtUyzxvfnAZiZabcVkBxfzdzCaYouQTYX7p3mLcC9spizmEfBrHi3tvvzU4QQLu9615mbroYZo2GuarSVouQMG4",
  "key15": "BAzqWtxphHjccmAPDgVQLJidqzktBtotYo5yV4NmV5WX7gMPP59wJxmKgjrC9UECaRcHSm1ErKtH95xawRJW3HJ",
  "key16": "3N7T2eGJcsrZtWgpSN5oAKPxJoktGBooC7ycM3wKuqssj6ZdU6TtG5j4Hh3fVd77fyNjNjQHM7twLL6MxECARmHe",
  "key17": "3TanTcAAyCWcw616rVryndBsjbSgwf4s9KVHM8tH83VV9MSVFotzGycMQvcHoVRy18hhzuoVi3NdWQCZuv19scHf",
  "key18": "4xSkkx9GrZdhaZHvyBqZuatXSCS41uw2x4EqXYnaYSMVuDKGNVX4cDp9TBB5E1KbeCiWdxb89d1g6ts5ap9UAQJb",
  "key19": "4dAYBnyqv3JafXKvK1V5E9UiM285Uc9s4A4D4GFo5JUaU8wMXXhoKkWETdyNJsrTbzjCbVRsDmzSNFcdCSxPTMee",
  "key20": "8d379FAs8gL5tpVK8pqtXbjbFE9FfwggVGdvS84w7iLcMXP4iTYhQkk8HaxsYn1hJ4vmVxnehxhoscofMkFsUrs",
  "key21": "4cz5NeCvhmWp5FJUVWj4J65KDgARH8V19gnsyS6Lup6RfR9SHjySSP11NkiCUwez21XLJNDSUBjkAMnKApxpsqok",
  "key22": "EjcCuL87DXDbDHa9UyY9pN97FzH7A6iRZFG9QqUK2jydh8byc3TKnS8yCpm267tZm7rpmgbzUUwzBJjLgjoqByq",
  "key23": "NY2Kny5i9d2mqLfStEinURtpaP5QVa5QCrBhhjYxo67DUfaVjXJhgqfCzTg5pByjtV57P5WYfXxrAjE9qHric2g",
  "key24": "5v82qu9ejos1HJMEC4E1DohF7dpkdPzsaqRedLBf44bU86x3Mw1EpWXzE3aimNwYDNXeFCjheU3NFniJ8Z7Pf7CM",
  "key25": "3U5nFNBkYLt8j3J8hYyRZECDJZmWAGirT51zSQKsBvibdMLGSQuRDRizKd1pJY41rscVRVbX8pN585fuBJiuC5Ju",
  "key26": "5kuXwQmnkjnZ8BRyQkTsKHe2Z3CTozKqPV7AN8CHWbnNTU7fBvxy4kRVQEda4oKzAd4BsFiPJQzz8FeqppJYr4ip",
  "key27": "4zyx9ZsdKbgZb3spXGhwvPT9iUe75eLX4Adet1Ld39bCFZhCMBPExwb9iQ4cuR42bTrsVRP1YAz8PdYeQZyiHPCb",
  "key28": "5P48jMbHPER1qpyMEB64ED6gVyhM7WYVcDiwfLQaFoshrcQDFrvaiz7E5DoEQm2N8cXT9xxqcVsnqTrY1WAAed44",
  "key29": "4yymDZ8TAMUgPcQhRK42pbFWX7hhuDRsB3WYoBY3BHm5mFXdqZcdqesbuzWD26mpqk2XQQZf1ub36Pmo8dBK1VLh",
  "key30": "37K6FNyguQpbUNfLZTZE5PYwPfrJjQFJ1co6pGjKJUHCCLzyj666ga3tyQf6aCeegiCUbqDqZEFYiavtZUm7xcEt",
  "key31": "3tvYoQVW1fmPyiCmN6HkBArCScxmpJ4LLsvK8GVi3HmQk4n7kGWvjK1gW7L2yJUcfjKgzbyFHUpku7ZKCesdY2X1",
  "key32": "5Zm4Eqgx2Wjhvw19hgLfMfb1yH5bxUfGKtogsSCkbDdCdRvbrXgV2sQ8AVLQZMHFHmsdnykN1iwaTdsfaRUA2SFm",
  "key33": "58buz3m5WBPVCryyFWkwcM3Lk7urQpdvfySfk6s1ALscMEeRDpeEhvK9r5eZogPN5EvnWdktva9nQrw1sabAXumo",
  "key34": "2UEPjfNepThfnH4Hzm2mzT5Ct9o2ur3xtwLX44iywJ5KLuKU1wjjEQK7nFz1TzKyL2kBz9Hdni7qcbhZhqhxumvB",
  "key35": "jLiAhmMKua7xYEvQUc4jYM6ijYnySWxdXwVQSDRZGRNx13s8gSsZhhbRkBwHTa3PXTEpxD5yyKmBeuE3CNZcm8G",
  "key36": "5XpZ69sM3mpcLfLpQtoygn1ziBvVdCRpPvx3qVF6tXJb3LWZJNCbdXLEo57P85AzBKUWTgTRb3NvMVRxCevHqEta",
  "key37": "3o5w8xLvjnC1uVVRxHJBaeKmDvmmo2BWr7iikhStT864ENZZxjGMCa4oKHresTchyeGP4jLbMsJWZyA6pxAVTZyj",
  "key38": "7nTmJQS1FrbVat1q9YVhKwZ4ndQ7VPoGdKDK95g8H3UEAeh5B7QvqWh9JsrcYNbDFkzxUR5GhnTHMBFVw8eKfoy",
  "key39": "4Lq3d4iaDbz75MjwozkhPY9mhA5fLgPCFhocAub1F6FEPbNx1mkiwRP82NxyqyAyogsPVkVKcQ6foZCsYzBsSqNp",
  "key40": "nuz8VsopTRxK29iqxixU5xfeDQVtwYkVMft7wreyXDyEcSuZLf7LBi6oxjVWg5ZPqaSnymAkmBkgpaKAjwSszNn",
  "key41": "CULELvFMpTXsbAnGAVCTVrozWsjRBAhKMEyyUuvQTbkEN1iwbr9Gm6hAocGzNQeqyFx92CfMCCYJ7CrwyUGnbJT",
  "key42": "3oU9JCeJ2hKwKH5fwpBTxx3rfF1tWYRGbkc9qYUHqzNeKkrGmmXf5gdHavPyvnRgvtwERRxw7cPLNY8quwQQtwmw",
  "key43": "3oWiWjWf9MbsGgJsjW2Z9SfAC5NbuTH6YdTpwCM61EAMz1CrmEMUxdRjAt8f78E6rmsfpy3TS5MosHxWka3kgLUQ"
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
