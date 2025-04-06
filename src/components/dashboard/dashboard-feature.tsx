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
    "2gar4ZcT92hUnnPna3S7DnRirdma41NDFgB7JuD8RkBag17iQ6QFTzB7wp3nbGRt4CjXP67TSAV4nQhkCEQ6zFCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mnTasxyYWpEPiAdiKCTBhU9HPDN43N7uLrU3rLGYdQpdwFHyQPV4N8UXweq6N2fQa5ocdm3HxN2NiQWzbf5LeDg",
  "key1": "4zvGkPtfoW2Kp4mnqVkiPoLXtpPHKrpZm9DZvvToLWV9J8CRpjj9sq5EkU1WAmq5k63FGENKkeUyeGunq2cuQGUK",
  "key2": "2WjDfJ8viRTDb6PJujFuodKCTJxiWVXAEGn42b2fhbWFcTxyGXYuuFe9d9vPtt9bMfBroknoGntr4HionsyDnpri",
  "key3": "2AHuB1XndJ6BCVt1N4TgohfbKK2MVCuoebQ5tGRaTDAL4yq5QZahnMPRMHbZUGWwitbWt6Uuwc8DVpqF7GVwismh",
  "key4": "4REFFYtacL4NXX3K8RWNHVKK5za2SxMPWAEAogvHbDUwaVzgxWJW4b8NHW5Mg6QyzCJWwRF3GcMZVoJqMCXwZtfy",
  "key5": "3fSaFrT3oNK5KrTDsi8wejbnfS79JpkPEBhrUB1wx7sB3VpAA4HdVwAquKsQZ6J9C6P7dttmtnKLMosC447zBTu6",
  "key6": "5otqb3fmUw7vwDiwsQowMgkXVUpjEud2erxLx6vW19ezQWGSqE4cUFsi7i3hSxwgWpBeSCkbRXfQJjsSr9rgfagF",
  "key7": "4ciwrtw11SZfSsXPNnmzWvpY5h7xyZvf7zcgWukcaW16ghjHyBHRjttvdZAHGrCcgNtEPYbrPhSo8uFkogo5zeUg",
  "key8": "7M4JtSNCDAEvABEB9TGg2yv84RRZuJucQBbBFKwKJM3CpiNJ8ZHcR3HzbLQLsjkbsNQrvhPm5HvLWGNTN7JSBTv",
  "key9": "3dVzoC21zUrYLDA5xuvDLuErdSeKDzhibKozfPZYLiCte1jxNDwSaWBWHBk5kWeztH5b9UH3BH9QcDgNiud1B3qS",
  "key10": "4a198E6pHh6fsUaiuVUPBZ3qb5EzSu2n7urpAfzW9ytexPac15xHfjRvUTnw8owNuoir9aveTTeNQbiAdi48VEFz",
  "key11": "Twpx8KEdPQQhztUFtaL7KjhcSGJQHFmh2tUB8VHx4eD1dkPvw3W6qbYP3bvfRTnvNje4fynDxdKNCJ51juaiMeZ",
  "key12": "m3PYQzXKzSVoe4kQ6ramny6aDN7vjcy8E6jRL2wTyUpYH9wBH6ahq8Zu5yYZuv7NWEsrPiWiJdotz1dmF3K36Fe",
  "key13": "xp1LhvJLMUKmUxhSZ4YbMNgtfk8up4ULhZEZtStgFNjUfjFGvJrknC6jx5cvE9Q2qayUsGy2pNekqpL94Df7yMZ",
  "key14": "3D4eFbJWfgz7GuwpaAhs61maLT1uiR5t1U14yTmKNVmzKrGTsuckgkNGFbnMX1pXPH6SzJa6Q8wHvVv227MBGLp",
  "key15": "Fe8Z5CFiUuSbJvfqb8S8y1heMUUErv8qvdgYVrn5H74HwHXUvzRtAhKguxDPGow9gTEwmaZJhhMEMEpkXJQ1SdR",
  "key16": "4HTL2TUYh3iGMZ6fqtFemJLxn5HcjWp9sVXms1cFV7GJubr8o9BwRfp4wbLbygR5xRNqBF7PjBjfjdYf3cJmHYKr",
  "key17": "464msUGP1Q3oXNBL6MGd2wxgUndAetrCw4J65ggmTp6Ceat1wr9hJXQ9sKSSicinmqGFJerzYsywHGYRpQcDyhNp",
  "key18": "2Kgz6Csbj4xh1RYyyqSUkeEoDcNmWiWNRAzaNAjhtGwXw8Yh93p6sAmKPagMzWAv7GpM4hdzAo1suhTq1dWdYbov",
  "key19": "4P6PPAWeSwVN8shA3XPX65qYDadEBTR2Qhsmqbjg64YaAAaPe7QYr5wa4r9ka7fg4kccDwcBzZzU8ZzSCA4RDa8x",
  "key20": "bH48GkoMsAbxmtRXNM2X6g1FzTBLyVtJracPWWkHpNVd28QauoH4xRhYVL1emPdttST6PMVkxKr4fd7RBtB1P95",
  "key21": "4d9gN9DXRYSehoTBMZ3X7sdGhzRCYX8knyFb2BAbw3pARtZsyZBPji7tq7Bhmf9MwdHyMLRxFBdKyAVgHUFEsL2L",
  "key22": "2SE1AGr7H5bu36ckCShxvm96ARNCyriJ7ZJXHLtP1Zm23xTnnBxGKcYtucDKLpYaQR8MK8uQ3ERwZdqquz3j9DXL",
  "key23": "6oE2oKpa7mmw6QfV1XN42zZx5CPiiWSaihK3CkrFGesJoQedKfPoUwER73yXXovJSLfSBv6aD8GhNugiLKQtszz",
  "key24": "f1kVR1CbiZeS129YvC6VSJTBzGiGayHnkbwGRxawTEhywXCtVkzNHRZV63PGZYQruPU7ea75sqpRF1nXTgu8vBg",
  "key25": "mnjRo7THtEzsg3Czbw9xAXs1P5NJBzPVebUKH1AfYecciS6i3wPiRcXM4VnLxg2pfN1L6wk9iM6TSMq8fnMRFV6",
  "key26": "3g4iZEAa2b4U81ZxL7Y4RU8N6D2ifUVaSz3hczXGEsYmRm1JDeEfEyJNohq6MVzoB9zhnvGXzKwUVuQDFoCroj4b",
  "key27": "5VxVu5tBpAFYvYF5M7oJNb5tE5tesUBbSqawm8BrXMrJJW2QbMiPjrqnCMsrf2eD2gms66TMg4zces3mhdinbxa7",
  "key28": "2hbMvkomrVvMJSwbABHZR3WN1sQjfwyY3jd5G7bqi5tfbrAaR1LTidCd2JNG7sVcifFhtFcUSNHGeKNGoAzPiZYA",
  "key29": "4RpVERB3YMVs61xm4196psUwd1D943N5r1zngU3i6HbXYiyKkxNd9XuVABCcvMMDdF5hwxmCXx85Ri2MedK7aAMS",
  "key30": "2m3cyBAsS1uCbr9Prjk67N1sWEv5DaYEE9o4fm7QPxhYYHf8boiKbwGBMKikc5VvYQ9TV79CU33TsHaFSa5Tx1nE"
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
