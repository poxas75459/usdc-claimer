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
    "612smdCwp5xzqaXnmMkk5TnREEHe3udPncDvybH6BiY1kZqiQesP88LC643qWV8LzZxVopVxWSzc75LkzWrekK7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hont8nBRhPkt2N8WohoFe5CXis5jEahwuoRBxZw7ikoX5SDMsyJmsuB5m8TyyQVmaqKzVt8S5W2m2TugzjE8iVX",
  "key1": "52YbXakCHF3g667EDmGm2AGAwa357iNED4JYzVNmLao7dQF9cK7wvd5Y8gcGRKnX4DkiGFGUGnwjxhJS81BSjkzG",
  "key2": "2MA95AprX3FHxBPQL6b8Yi16TAR275NYrvejhG7iEfxrd1kYpKNqRj16Hyru9992izQkNLg48qkLhSqjubU3QzCv",
  "key3": "3fqjYfRayURnQzPpSBeSfMyYtNPv5y2bNsTq4X7nU1eCu7VEbmwoa3LFe6tcTBRN9r6b9mizUQoXENfgY6eiNrnR",
  "key4": "4T9ArJStetwNXWTzCiriLUMZc31UVKFGEZDaN7oUUj9kmKCfv94AKyBMwnH2vZTc2gBetoA4AKSAKKcQBftFrKvz",
  "key5": "3EHzY1LfpiU44dpbx7DDhRRM9ZhyB8ux8j8mJP51qbidNyikR3kxMp654rNeeBsYXofddKn2gFfYDw71nhDifrwN",
  "key6": "pG8AZhRGoASJEamSJ3xZM23SN7jc6Us3LfVvSuk6z6512xadpDvPHGamhqAmcYCSz1wMrMjuE6JZdxy5n6asosJ",
  "key7": "3ZaYXVwXi2Ww3v3QaoB5BkkF6u234wKzd4YzyVUd3Z7ZMnZA222WuSNYrZMZ47p9hAjKxvwzW9NGe9nn1gBgddw8",
  "key8": "3F3G7sz3SGkro8Pxn4rkeDRzVpdSHw7qGMWoairbrTTKM8Xed2f4qNySRMmBcEP3pwwAJaYzEveUb4yhHF5jn9zd",
  "key9": "5zi7je2AjVwxPLyvd7zhTfCrhESvDPUFGz6sbM4GmLaGThnBsXgF3CeTiNAULuaHEqX1ky9Tu3Xj4CfwaGqA3jfy",
  "key10": "xgEgCC9RzCUygfxAEKxDVfAhJHbjBTZcLRLj8dyjFskeXgAqo5EVAz3LdRzYpKy4k8T92CEgNNzUrD137BdATgQ",
  "key11": "2wW8WtUQNmaAjk48evtPNfkiuGhZccTxJ9GGtnzinBPaX9WxtREY5kZMpHFP5e6sxHf73stMVZZiaubzoCpxHaqS",
  "key12": "K9AhVPvhLMsNRjm7KckqNhoDhyHeVd8A2LpXpgoZm8kYMm5vGyhaxyeghQpThr5fLuDYu3gr6wF72q4uuVjvkQu",
  "key13": "2yXYSKAm2DtiKkdaNNJymESQnH1aX2fEWDcaRn9YpaMrrbX7o8dbZZinZ9tihj3nkAmfSKMpMBQJjwqnsYchFhTS",
  "key14": "3FnsdAEfqYbeEopiYChooejJdnH6nvUmNgpmH3LpReaeSGxvdgtDNUHYmmzMAzpcYySCBBS5nzX6EcM1LTQB8imJ",
  "key15": "8a53xxi6PUzS2SwXVcMgbKuDTNW1ropsLKJHb4SevWTFVRLMjYRiWKarLqxqazvxGcfWCEPzuJHVXxxTkewk25w",
  "key16": "5Hce4dyBTvTN8nXgoT9fBRiS1c6dygUQjtkDFsQEDs3VoPmauRtW1g2JQvWoGJajoPrftRBgJnsXuJuTmQfAhZan",
  "key17": "66dRYfxeB4pKrjPz588WZqg45KCoRpHeJc9gmaXN2TZh7qRWqkVQPRXHgiCdKUUdTk7AAgqdthrYusrRa6Ei6qHA",
  "key18": "2qQYwSds28HXr6VDGo9HJergizTHqDzp2BhZeGSV4xGwQdhBZ7GAe57vcRETJwRQtAs3jWRQpX2zAckZmiSWNDw1",
  "key19": "4TwHKXi1RcDdcG8h3WQJg3Ddq4ju3dBtm1KzqNiTzE53rQhGXBnVFGo6svCWmhdCJL8kfngKefitsMfqHX6pFjBp",
  "key20": "acrA96WfrdwfiQJBdauX1d9gESFNgKwGwzu7XnLXHPtAm2U9uUB7QMDCzYUU8J4sBky9TKrnbrSqthJj9UY651B",
  "key21": "5yzFzvB18LP4Cdi3uaZXVjoc14evXRPuopVzs43iPndfpkNLvoZMUsNMvpEw24WvycigCUsXX36hA83ggyVL5gdk",
  "key22": "5rkysNEpi7e3LVAo6cfbaqa2xc1hpKko1cdGLVN2AHjLDzmNYXoGmjrGPjFFsoZWMTsNVetyGsmN3oVkYoi1Xsqz",
  "key23": "4zRG4Wzw5ERWjUc58iVhUMyPGobtJx6cCTxkpTnsysqZ4FrotGfmUu1MB9tq9GSAqzmvUU7n1sDqxawqugn1gihR",
  "key24": "3R1JthxAa54eNuM1BH9KxWwYaaZDkV9iKZzBaUo7UN7HgGji7od8VjsBCXcMqeZ4bsCpVwoqbFUCRtWjzpne3afW",
  "key25": "2L6HNt49egaZz9ajPasim8zTkf13qmxCPZJz1JFzcr64JkVXv5juTJjGihi4vNYHXHtECfQf5Bz9nwyRQdiDUkaq",
  "key26": "59Q6QpdF4hiZSSArpAfmCFKggShti5dgysg5PkF15QafspaJqWuyHyZ42iy82YbhXorrvf1wuCDPA3ENB33iXNgy",
  "key27": "54QWNs7dFXybfrjJYyyBYuynezfN2wUy8oDfQN3YKKoAbSKTo715Xzi8D1tvV5miQ7hgzTx6dPggrrnn1uX24hVY",
  "key28": "4qodNXeCfvUv6va3Ltj2saoN2jLVqwf3bLDsJjCvVsAhkp57cGTgGAYKdLPP6euNnTD4pg9LZ5RCQdMpQAhXJb1K",
  "key29": "p5UwyEL2PYLXnoXTigLRdBMiKruaRHTR4LLDXRZASRVUoytiPxoEbSfRZWskHsPGP2UX9VzwADfe9Uhxb6xU59W",
  "key30": "39PtnUzYdCf45iv3fC157nEKyznozUBmwJqeCkZNkbzZndQPBikS1KgJUvLCi8M1NEyGVUuMQ3hrZKcYoabFdd9g",
  "key31": "35hUPYNAPN2oewRRwtKsiz6MANVrokNzWvyAvVws1G7sj2KmoLx5UAkJAHbsb97hSRN4ca9Gsky148U9sWcspTmH",
  "key32": "WkQqR2QcDoSMbkeFSBGzHteCNkVeyvo92UX8MkmNmXvX22L8P9s1tpkTRGVt6cakcoib7jojo7wBpA76CffQMSy"
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
