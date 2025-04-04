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
    "4x9pKkCD1zdGt2iq4VLP5LC1yqGwRdW8gGaE13iNQfNU4h8QFNdzUuvWBErPeCfMUgRdjPsFdqETaE8E6boPSpgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jdH6zoSDPuK99ZMghqGNeQF47b9QYpjUX1tbLyZuXfEdZh5HaSiEekVNHxPTsoFsAybTudGrdggNuurAeVdMvyX",
  "key1": "3Pyv3GVeMAfPt6HAgyZvTg88MfCzeawigCimyBrsgGBmMLJUy9hFnH7vHAn5jaN4zwuZxX3KmtNKWXHc7ZC2bVp4",
  "key2": "5TzPwTBoyEDndhfz4vLdjQH3B4BFRZU6J7EZhXabFmRybdgX7W93Pk4uacZk2vmFMhPQP2RNYzmHxP8Znsajy8RR",
  "key3": "488o3J7KitGGZ6wikDLxBrB5T46j68yTXCpZes897apGu7dzteRhPHyn1haYTDhuDkx9gLRDBu3JnEi889mBN1Yr",
  "key4": "44fQaUxL85oJsXPuAxjPG9ofFhEAFk4Cf8ds4AtTnLPKnpWrjH8MPToW6a67t5oJMpHHgtjatQ8x3fo4g2gctkmm",
  "key5": "K29Y3SFR3PMnNgr5Q6iLNWjrkAaVukW7hmXLNDZ7MJZkv7xPxVRftNUaApuRyTN33VZX3qjnR6ArcWT2ZhkTS9H",
  "key6": "3qYqNCqroWWH6C9uVxNL4UP6c7EsPjNY3wDLRCcSyZdBivSPsZG8oGbtGyqePHngjQGEbvAVXkKcqm6b4x5PWJa3",
  "key7": "eSqkWHHVGRo1xvDB39ySGD2H6ndLmXgaoAcjfhzyTqJMRftvohnkcEsTxZoD5WrsESJnXFchK2LwiXXuit9eixx",
  "key8": "2LbVj3zks1aRhSthSqffMxhBJ5WU6MC5meQm4KZxP3N9hGppJzkFNrrx4YUuBfjfKGuxYmERV7YzzgnzSGHomJ8X",
  "key9": "61DhSb2VifpedVzGKKCxY2roDPkNfogTorLv5etyjTGkh7YnvpyyqdNsK1ymRRcwNTPgAMLEpHvN86j5DvZk7XsA",
  "key10": "3dEA9yBmBn8eoMMFFpiG8PUMLJbnxBr2xJrCEua3xFjraXVf7ibZX2k67apwzsiXKz2axzpWPDP9yuKrHS5AxKBo",
  "key11": "23mwegFocH8BfL91mMRFjgEYb2Matfq1GNBZfrxzSrPo15QSCb7YRgp3SRXpaP17cukcqmCnmj5oZVNQVpXhs65D",
  "key12": "5XX5fAchmoYyJfG9RE5NahMWGWemr1hSjgGPwPcbnMPi2aBzBvaA2S1yXAKY82UFojxpmzfzMFUgeieu8swqT2Gt",
  "key13": "jsExSEWsoxfxdoWBtiDKLhj2Ze8Uha3Q8S1LjP6s4QTWH4AZ7kUtWrC6VbkfBj5DPTxM5LDBxSwA9gtWo24MMDd",
  "key14": "58f7NczajPL6QsjtX9a2yGab43n9eFyyRnZwHTvPeDB5qjur6twS59RxxrVad4AggNbqiEmeTnMzkZAU7GRdjVhN",
  "key15": "G5tVTuzdD8pEkE7TAaGuXpprpYpxuMnAM4Mg1VZH1AQDWnQDW5mFXKT5P5G9HgvknWCMKbZsfN4dyPs13YMPQoH",
  "key16": "Pi6JRPPeHKDFmiji3DNwtviL3hQwNMwXi8ri9WL5UiCipsgBphL13vxs7FYMxTJjGHTvNTjpP5Meny5PQeCEdK9",
  "key17": "4NhJKVMR2VxAMgGWKvdJFsKqqFkRsv7vNHgk9aR7fxJUm921TEPsnPXenhJ4QKs9Ycdc2qnp1m9vyfPSfeAFZ8JK",
  "key18": "3VKtWrEn2NRekcLPaoQC1r9eiZ1tEi8ESLiytci9boatiruqGCwx26X6qQwDFZWi8kNVbZ3ZMJzSk3Tt6n72LD8t",
  "key19": "5jVyV3VzCrTBD6QNJzhZS34qrKTXgGBvti6siL6sdP1822ebPX2xo2LbvCtnRy6oMzSR5ENgKtfeWAUsmU4zj4Nf",
  "key20": "5tSfFxGYjU887nvAYCGgHrvgq3AT3RgCypYGTHdtKVuDJhtBidkafEabMnBcLsW6bdhmeXAmrceHKrJwo7EWNReG",
  "key21": "4tnjkrNg5q1bVCUkur2zHPBfiLqUJzC1FKKxkgnQK1huUj3KedvuU3vDL45Kxcb7PqE4gEeuWebdkUfy7kViUNFB",
  "key22": "mdbowMLaJzyY7sJrdjNwedGdoojjmDBqK9Mab7gRBaVfFwkYtGRGtEjbBbAVVhgkqTA26AGYRYBz7B4TUjgWFwb",
  "key23": "Yz4hFreSMU24Rh5j8jx4oukWQ9HMAM4mMipDrrARWSG71uQd7VnjeMLtitxBo1EPikeXoaLSc7zH9w5cMPiKJ8V",
  "key24": "aQFZ2ZyMpftmtZQ1dVSwLXtUepcRosZkhpUK2JrgKzKJrrF8QLbr5DyKdtvNPtBXPhdp5PEmuPb47BxJnXUy1oh",
  "key25": "2qDVr9A3hnz9ikLhyYVP67n3QkWZKPKSqWVTivWmoK3JNuR5Y53XF92jd1BohR1p4npjB3GbdwksGvLLTx5gkBb7",
  "key26": "4Be6RWm3xi3sxzjfpaD5C24V84aXmmqkeHgAoSVnLxPBKUaMfH4NXcJRxibzbZSSvzHNFRNhc2ftjRZsXZgwrGqe",
  "key27": "2ByaFu1YnwM3Ja48txsF5vm6V3UMusYRkKiUcXPYhfQQD4TyHYaBbVqNbDUBiNZrDekU5KbCQE4RhQUX1SNrc6m5",
  "key28": "NViHb3HwJwhmojDhxQju9iBgDctRmQGhJMGrXs8VjYostrSQxw621sirucfmf8icycC6PNhiXrU3RLdriuBfWKi",
  "key29": "4RQ4e4L7BqNtZmwGRhRQjadQJrtcW6Uytyctoyesf7Er3c9RyjDDDBcrr9XKTis1yGLyLJe9vk592sF4ScjJmiNj",
  "key30": "5DLrDXTGGYWwTTr7cRUanjdz3dMYk7eSMeN18WbsXyipiUBRdKsg3AADKRVUXdHM6WQPf57BSuq7N8F194GxEUUE",
  "key31": "5zriuRvruiZVo7vsc37mPw6i52LskGMUE17RDmmEsJKbCmegATpkyQZyteekfJkq8KTCs3jokQTq6dZqvKMSXcS8",
  "key32": "35wQ2PE742urQHZNpLvDMxby9rmXar4TqztUAF3qo2fpsFwubkmJtFSgM2BphJgttydUQpu1Skuwhde8n8KCaZks",
  "key33": "9EGkPsS8DXLzPNnkiqWbxaQNA7cj4tozZegwf1NawnAU4pADtvbprvWLhd1CTuTTozsTcWHFpdXPn5RMUDtwtR3",
  "key34": "41F6E5y6kyqbWpJ4VBotwAGzURZF8eU8VuFb9fdpeh7LtYchurPY91rYBQC2nfgrnaeqVLzEcYkKryCmtgkLypCx",
  "key35": "2p33SSDKBWvkU6dFCqDmzEg4m8cKbZMNZMttUW4Dj9DkbCrRAnJ4xZLGa4H73DXhzfngUNaax1EWWrBEg7XmVQm",
  "key36": "4CxJjXs78QLArbL1gi1HWwGDNiQPQ6WVYVWkQn1MKdQ8u2C67x5Bsxny14WdfjShTHi55HXH7GbE5hwP8mfuARUf",
  "key37": "4Ww4WauidYEJooSBqYEZ8BQfTsRPB3rpgZ1cZnfNqdDUWRnnnraUKkEGHf1mb8zBfgTKX9GQcE8c1KcD8HFQyw3z",
  "key38": "6SGMsyYR9nXu2sLnkgmyvuk98M9a2kiuAgYEpKeuGZQCGpe1mJHPGD8d2SHaJge97HKJuCy8j77aJnRWHz3CVyj"
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
