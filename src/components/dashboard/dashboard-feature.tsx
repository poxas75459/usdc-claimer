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
    "4PA5PZaA9FGqmFrZE9aJuE8EaMLunVs66QfQG9R3ZmjqV7sT6Nems1M9LfrBSFbr7PgTku2UVKRKR5B3mABZQVPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZcBPb8Zeg9xdcMDLEHZaJLDEC8dC7o7Lq9sCXeaicWkvfH4VnUHUCupNgLXfZPbEZRUv5TW6ngndgdnbFtdwNPi",
  "key1": "2DMQ2fK2RJyQJFvGqKthUe1E24ifq3d1mqN7E55dh6Tg3LU4yoDdMUfAqp4aPuhVYBroqC4CsyekAtTDGWKMvJdw",
  "key2": "VatiYKVYJuL2oU24LtFJ75Z1LRbjbzYt1fFg3oKm4UVKQVb5346k8DxCMr2ZWg1MN7rtCJ9o3tcwA1cjTAJYcUA",
  "key3": "3v3VFE6h1bQy5jdhBcNMEFPPmQXZ679Jvv5BSPuGaULuvusKK7qkLRybHNfDc9S7cVGysZvw65uZ1i1ebUudXYE8",
  "key4": "4y3TuskGAdy1VC2FY8v8okXQXNQFUtE6wxcersyTV4mccEYJvMx697XnzMm4chjLHETgjyGUgYHTDjs7bKRMhNBX",
  "key5": "5j7hNjLMrz9Rftea7QaiDnK3opp315TmJNZs5tv8QUV9tGv9TRKq9jobaor2n9naecYcHH2FmXaTCrJYAo1za9JV",
  "key6": "za5XiUVPN8eBvti8Warb5M2Hz8T6QtJrL8phviBGNw8nudEtM2rx2gjdR7SSwyRA3h2N3gWyarJ919qKyyGpHVJ",
  "key7": "5GJ5PdQsxSyVXePDA6VqNNL566gsdcq4FuyRMnJSDdXpSvGz4YHuBXNikDz1vk2tje5HAwwNpic8BsZByJMFVkKB",
  "key8": "2QpzZGnE9WFNUQVnnxnTgBSuU4qNjFSeraXpXc1rjyB4ZxDwPxcbym8EXBv9tVrh5hkG56yjKhWiatsUmf3jJaqG",
  "key9": "5cJDtfew4DdfuMjVB3AHJAUKXR5m3bZyXNCTzqNWt7fPeiLHjAEBfCrcp6ELN7TaeihDB9g6ShMxxuiDAUioNqt1",
  "key10": "5XRCuvUrquvkujz4fVVNFcMSzcCfRm62wx2byPYZBtXPcJ62K2jkXNhNJj87Hi4a8S8MPq5GagzMaec4jpzhnTLD",
  "key11": "6499hnJq2nfQoLKAviBoZaeRBgh3jW4KNs1LgXqKMcWjEFA23wuyzLCHCnEiDVvkTyqFBkF9HuvmM94HCJCZQBU",
  "key12": "4p2BXNG6m68N2UeyWheeNGYqgvszKvbFvpxbMkhE9yGXc7HKTebkHvjXPtLv7Ld5KeyvqVZtNsEHFnrqnCpaY6m",
  "key13": "sKTBSAp7peui2EyRQU3Twb2T24fsSL6T1hiEfv3StMYuF8r2g2tDioftAR3uUaZPW83Ea6SY4Vh9vauDowJ2VCn",
  "key14": "nHuzZNJJB2nRiDbw7cmUmpBwrE63JZd9q5pTSGL6fgnbRh4a6vuMS5R6BNUHFaUZgx8ku2ZdTL5QDWPTZmyPic7",
  "key15": "4YmpTbYNhQNJFTESSwnqP1saDqV46U3ZFeF6GRw5PLCC5uE4jyLwzZUuNt939iAKHmnW2py25QcDSbadBunQoqkb",
  "key16": "6u4BStPJN9epnjxanXGrF8A71sA7PJLoFzbDpx9W2SSaNd2kVs28uwkHDgRKSVuipmz348La45kpatNLyRhFjsP",
  "key17": "3wkA4VLAbH92Tv2by6tAN5qCiGYFoiBvWtehn9AG9qvChMm9SLceLG3aBFHUffxRKM1ZD8agt1KHyUeGZDgZNavu",
  "key18": "4fX2ZUpEbNTQvvMNvF94MwWrKbTDjZkqqf5bRBjsEACCsnV26EXJXNTfFHZfM4ybEQEAXdmJFffCkap1YW5y253B",
  "key19": "5ubSM5oTFaE84PZ1CEweS8SafhQ8RCim32NfUJWJaXvkq42vDL3u1EHDDpG9QXkyAhQoVdQ3PouJ3XpHkLpniao8",
  "key20": "4PTUQrovV3NH1VqdtpkR5bF753MKWJDoi7kTV9hnTipG7BdgZSqft59jkYqJPJGZBYTWy8TmdVJYjKTzxRUJYq7i",
  "key21": "3y3vLBPfVJJLdLyYfihYdbGHkZLUJeLJs8NKohHKFXtZMPoCFKi6ESgNYgg2xiTi7Qs8L5LxqhVsaP7kqX3gEJZM",
  "key22": "47Unhoju85tZ9qKtfkHcMJkHmqnubbL2XQs5zQDcumhTEz1yyGc5JtC6xyd6Pmf4SEqNkxwsgZXvyFoTeFnozocg",
  "key23": "5Gx5qRVNWxgKHrTPbvxWJbgQjCmZwkoUZrTkeAwWNBWU85stQrx5L2R7LP3FbKd4PQ19MVmQ7iavX9yTFFubi4bs",
  "key24": "2uWWutjNatsULbzbStEKffY5zKqgLkTu2Sr7pcJ8xTt2WosSTcQfT6JhnFSqLFA9GzzaWtVp63k8QY7UuqTroon1",
  "key25": "3SWZf9khcPH7dKaKJQvK4CfrbBCTxWNYpDzBHcM1bh3bTnPZ9B7oMWVacFWAg3nF5Fp1Ubid26fHFPwRK1nPsyyA",
  "key26": "2so4PHAwuNHJCzkbTj7JBWZtEEocBBvnvMFZqgZmBNSGTD4miG6KposEoS6yEGJUjNAZbbADAyLVgJmvZY9T6edw",
  "key27": "5vTPHQiNTdLpt31q6GCoVVCZUUBemTBaqtLf5Ba86kMwnrq2FR9RV49zuX5QBePsobwdAwnwmL2LTiPmpEE3SsUD",
  "key28": "4GUzgzVqMU4P3V49Ck2brraJ5FRDZ8TpDTT3xWuFjzJLd2LRxHixrrcHci59UJm2UvZyYRVou5aZq291HAmxnVwG",
  "key29": "5bWBenr5VnyqszNiJ5KbuU5S681Us4uzY7DPvD5sso5YDy6wUy8rx9mAbwKPiNECSnKNDJmr3QuvHCMpUmiWP3NK",
  "key30": "2JEddMqSwMzxKUW3FM4xan3QDYZ3RjbgnEEx7iLxg4wMLKkPYAZwY53bkjmwj2mBqg2fJQDvQVqhdqXT7htkR1qU",
  "key31": "5UP6Rdnuzva9n5jhZXBuRQwV95s5wMmrrsZCeXLFQuUheTAmtqMbSZo2ig7pYLZjJq83GvMNr5xjnfr6LXUCksUE",
  "key32": "2si2h8eVJNNCXnEjyQ1yMDodiGto3wYwUtmmJ3KnZuDieweixn39d6LKfFvXA9DxCr6Qa63ysw3EX5dY8KNKNXTh",
  "key33": "2CdhsBHBAq2GPgc3Mu5fwj9yAyS9eG3Pm5NmbzWNjdLtiXXv13fmgwJQafKWLCPnSDFPgeGUQEMYHfEEq3BrHfKk",
  "key34": "2dE7izeFnwK8rct5vLYgFi22WB1RnE36iRNgjC7JntrNpjxUTtb9vo1qcqU3xXDyUEu87UHHjposkjgsVoy9Wjrf",
  "key35": "2WiCjHmAgx6VSQZyf5bNjA1YMstFxKktWCJHdzEprBpJcKf1EpCJo4xcHieVvWPziAWmn6Nke4Y321Phczyd1ww3"
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
