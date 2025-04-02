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
    "3D8JxPi9e5xcLqX1CX59j8DA3ZkBaUf5N4mMY5FUtGRtxGnnMaDN4znSGAKW3wjyDXmce2BZWFrE47rFrt54o56b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B4YpF1jgDTP3vCsDbbnJvowBWfgYFFKWmG8uFUNyy5tUz34uMphhyPyNK2FUmxp33qTfCvt7JGnNYQ9JZM7ZxzV",
  "key1": "HcQpgp8kVuNkpkCcZTPNohGjFo9pdJUMFDuCc5u4yLWTbRvyQz4xZX2ZQ6S6ZVzWtmbvdVFeZA7QvUrQdZBo5E1",
  "key2": "4s2Zo2Wv9xcbDvTrJq2vPFTtNpEeSQPHyULNQAjXV6nF2Uw1zL9k4b8aBdgYenqjT6AkPV7AXPRhLnVr4Wj1K6xk",
  "key3": "EB8gL457zVvDMxbmK3yqEHVXhkJETEmxd75AMgSmvdDzqc6gyvsmBjwPUz9Ydi8wcjEmcwae1nsn7p5uCZCnZgS",
  "key4": "2de5W2NCnCrAhnQq5DfzGP7hPtSJT9ee8613HUo65izRZV2Pv1NxWXee4hKGaSayy8XJhoqWiLHQUw7kuE7tNLH2",
  "key5": "4qVYBLnTcQM2e1TTssyvWurbACU8Lbvx4bk3ykBBfK9dm7ZUhvVsGJ7VHN6YXCGqxeT7maAikhcM3HKQe71MuFpe",
  "key6": "46yB9JwEBhRXAFBayCkAHYvFx8eFuhiUPKdpwEG8dAVyNnBQN7je2ftnge8yfZ2xBFBUvmYxjN6AxX8Jiz7tjNFM",
  "key7": "4xNhrAYJHoTwyRt5Qqqf8iXnBXmJ6WAg6wt4TXFdc9EXebKqyT2gKTDqGXEBvpe3gXx4jCJcs1zpDP7PKqgZVbtY",
  "key8": "4T8gZN4NFKb9XBSFyazWuYucvQBJM8k7X32BVsThsVwGr91exzbWS9JjNqcwdBePwurmtGpuvyXyEBbBNk7GR5pJ",
  "key9": "cWoDQi67g5CzKH7AmZgU6sHVuzkr4CmwBmkAWnGxSEhpzvgTCAi1SNbY5eRp1uP5yeZ5o7xGEmzEBvw6ewaz67z",
  "key10": "x5ZtapPYdRYEH3fVig5L7psuHzRtriBDuVAoP3tSASXnmWtSv9aGoEgFcmWRh18J2FPmS6rJECJ9vrrvBU6vJXq",
  "key11": "25b4yJPaS87opykJ1ZDz9YdM69UfxSAtzN3vnaBJq5krvDEWuEMtVxLKfUxSMtCXnspsmWqic3Z1tYUXTsNyUi21",
  "key12": "24HtZcqfLCLRvm9mN8wWRBAbxt3kY57Banx8Uf7d78TZkWyMAZTCGpvzNZu77Q2DmgLBuvAdpugxJhrzg2FfSjYt",
  "key13": "VTUkm8YqsaqHqYTPEhRHfe2x1ruopZwPqwmQQBDiEnnWkFnm6mARssAUFxk7HHceBkipHvUfvqUXV1effmVjkZq",
  "key14": "5ZBok6fPAdDpmxXE4WQexAQRFnNwUDapZnXQHga3Gb8mmKLW9x38X7uoe833CC69AuY9pGWVGx6SRLQiG1GbmfcY",
  "key15": "53VAteRw4ZKDJQRxZw2FA17y5nkkjRK5kKqBRzgYXQeMWzY9vZ72T9GmVj5CJnEEftCgZfQpVGHqN1hgTHiksfPy",
  "key16": "49NEiUieCoQ1muYjLi7a14ZTNvJHZkL7UAPNiiAyY9CMXg13BRNjvG7nBWaGKBny7wSwHR7J8JHgWMQdeJThqiM4",
  "key17": "u5ZuhuCxUE2gpXyTuk6gaBZqQjaZGXQTyQwgXjsq6JLXjkduYgseYTd6NTLMW2k5u3NX3K5jr2Gch27NkXCXhDG",
  "key18": "5YWQAP6N3KGWb1HDu5Lv6A8DatscdBt6TeU724Kdv6wydZhX2DEq3CXvMNjKCWVCrB2Znz6bDzU9DUQYMoqcEKVW",
  "key19": "JzN9vCYs7rpM4GjeqXcDtahF3m4wiZXf8JNZakES9iKvzMMUahGph8tZ8Fc5gNefoj1nzHKykXhfsTjx1iBAtvY",
  "key20": "3QaKoThKGWZEsQmoGANuAeC9YEeGpGwHwo4R4FWrPRE4BiDkcjJQiCHYzBkg3GwUBu4an3wHagKN6Jnrvd6tHhnf",
  "key21": "22a1MUiKu2o17E1y8QdTgzpHP5qnS7S2SZH6NHAgnfiEZBxVnRVeGWXYRVBLtUMF9411sUiYDTRRecCHyFfiaWqo",
  "key22": "31rZrNaqeyHsfd7jphvCaB3mS5V6E2kAJRKAynDtcVS8Xoayq4Y4t3sHE4HZYaCZA2Uj6mzSvEt8C72RMtDMby8i",
  "key23": "49hMfErwLrGWWWLeHJK9rKDapHqeqHtomRovETMRhUs8A6R5PX8WLjevYBdS4ncUNwhe2VFyXZcemqrRCNTLVhv9",
  "key24": "tmAX1YsFSGmtk9ftmCCWvefZ1VS8UgV6yTJwb7qFbgnPbE77bVmbthif4ELAuXLm7kn9ahRUycbvAQ7PF6uHFAD",
  "key25": "5bLy7o4A6w31acya1uq3pxariM5rbku8jis2V6fc8gxPq9Qzs5Tps5xX3HgVr1dPgzaaC5QEkCC56512f82nQXmS",
  "key26": "33fgwxWKfXmfpcZYxpMeMeU9BuLshkJUX4J4hYxQvT3ToH3APLbk1sDBmc18PzkLKWWK2PxuAExPVxJ2TV77Ztmo",
  "key27": "67f4F3TiSxHsG5UqF1ZRPHJu2qMxHfV2C9itWknXg4jtJc9wxGhV9StyqL3jBugCPzQjj6gN6QDx7ihyE1XpckaC",
  "key28": "W8TWLojfpzt2PrnfDNboAf8WHQTWMmWmtcYcbPeqE7GoQhsBnuudC6PVemX5iiwxzEMrWg8uGaMLXkoZVyWfLKw",
  "key29": "2PZHSRYcahd8GiYjs3QoDtueLi2awA1BUWYgSThYfzoo7S9bwFRv5djbE43ExJKV4qg7R8NkZgCirg87FZx3yS6z",
  "key30": "5C2bMGAunwHNcma1tVVriirEJnnFchrasieto5MYfnM6Jgh1eMa3psxoeG8EaA7dUtLTPVXJmEnQyZWuVnxtVtbg",
  "key31": "3aUiYmPpguQbbo82cjvKemKUrBZWmBbsfdoGyue9XJSfziQrXAWEaW1ADdqZoCnW9i7h9jF3gZwYPV8B6wUeY29u",
  "key32": "4RZ3GKCVyWQFK2688ba8uK2xNyyYBhZ4rsCwXfxLy92kUwca9XNx2F5J5hRpuGtme2g1uQmuUZ9B6H83px4E4FgA",
  "key33": "2x5B6RMQvghggHe5GvHWwXCBmY5igfJjFnt1nV3NswdYPnjUTSAnYEVUbGE7Y9jWSAU29Hvn1B99LqtWww3dcJYm",
  "key34": "5QscsoQ59k8oDcz5euuB386oYvp7r5XmBDFDY2LVZTJB7ZVUyVfjhefyUBJD2HHKoEXiNhAs4vzTx3cQg6P89PWK",
  "key35": "4V7jwdZATJTjgU6Rapak3Y1WnLmSyvDgz5jDBWEAuykHahNVCAzfp1Bq9nRitgcgR15ge2wshDGbi5eiX9e46gPi",
  "key36": "5HJD4gmJy26KYsyHJALaNsnJ8shpuucnFoD5cbyr6JWPEJjEtEGL9yNF3V2p4tUXotPFU17j7phjaUGnUtuzZ9ji",
  "key37": "3bdQUb4H7jZ4kKgdeEKWJcdyCqNTaZ8vrss81Sr97Cy57WeWvMHUfXicBy21xPeb9odPSmBcx8xJ1EACks3aXXqw",
  "key38": "5tRk2tHk72tmBxShLWfd8Xufz6m792yyiqs5WkNv6k9N8gj3pMsjhqEoZvDj12tUYK3yjUGknQzCznUTSysKF7iR",
  "key39": "64rjcw3o6vgzLK8ByQTr1a7PnvZPoTkwJemfVRZhKRFVjVCcddaakCSekZmLX3fMScyurXxfsXtRVpofTjoNDZ4E",
  "key40": "4BLqvY8gK2PoD72tMK4kSndhThYP2ZcL3kDxJXHmaNvqkChmrEFvcs7zgRedWK5MkRqTBtQkKa3nwHDT39osreyZ",
  "key41": "mt7NxrHXJj65TczPErTu8KN7aTGteHYZi1gM1Sh5qad9ujnagbSoS54vWDF4UZQEjWCy5ZJE7R97qBrFHXjoEMy",
  "key42": "JHACSTyNf9nieBdn51tFL1MsMSxXU2KWWB6eXj6PK9T3FdHpHNLvakx66tvUusPjWxriThE5EKvykAYesxUijez",
  "key43": "4xN28jngX7A5NnLvxTVycCXEVERti72pDRMqagQiX5byZWyRQsmPpUxe7hMpK8s3geGBHuMes4c7Dh5P6edSHVFd"
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
