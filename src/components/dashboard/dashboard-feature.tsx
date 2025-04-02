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
    "5XkEH8vAqFGc9eUpysLCJZQtdoM1axxXAve6kosayqaZ5kUWhaJTsEmHbYaS1iFXAFXh1qy1eghrQeFHj1ArhcW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zRVD37fqEuhWtk4qBSQnWymkiHVUdp6K5cDH1fBJdfhb3aTNeUDd9EGUfxk5G8Wf7NajYyoQrwVZ3BTWhgSZrDz",
  "key1": "5qknPrEmtDpJDeBxicRggD38uLG6EoWku3cRLUx5PGrTESsAuKhdhjyf3dRWQCbzz7jFCtgfkSKqrDgCChd1uFAQ",
  "key2": "3J4x6x2hLRrHejFN31MonAKGYYsCAjX4MzchRqsU3R9PV8pWDGphbmQk2WhMkcE4fWBWD6hPBSGditLau2qFrAog",
  "key3": "SWptyv95ZRtAsa1VjZuxJY3wcYDVXvKNNLvFeSMRrThFcsNYiZ3LsLeuyHyL5n1fpYFim7QPn2dVA6peyBzjvCK",
  "key4": "4zLwoECRxSqGmNbh5otrk5UmFpYmcURxeeXg3jTSg681QWFPxcWh9EpDEqTTRpX7GH3jNKfxeqSaDjwQB484MPaf",
  "key5": "5kDLiqSfkXyJcuWmPshK9v3cR3xYCNbRN2SibLJPP59GBZsHYEb2xYFu9JHdH5zyreiYra3EAiKPdbmQpCiGsnVu",
  "key6": "5VZGTFbcda95pRXPbF4b7VpHMJYUnBswWktvMssUamUfktSCU8XqU6B4z6fh3AooUFJxChZTsQ4ar5QNaagaFosy",
  "key7": "5ejY41APX84V1wL8EmmdbRcbEW4bW11B2Bei4PZr9nnqY5KhM25focu68vFBwns7AqbMarFPNMcXtce1ZEzhHftA",
  "key8": "2Fwdoj66ZqzCUYoSaR7ComDqwnD7TQrJDACY17Z5CXKgZwKTER7z8aeQBZ8KupinWxRmK4XRcZAHEAoiFefB2YnK",
  "key9": "3QGwhqzawqyaroa2dwc57zMTYpES8SxbVjo5bmsbmQRcU3b6nWV6wcwRm851cPY6bxq8XDp1CiFgopYALKXTuxFN",
  "key10": "4ssirVkaTTuXPt5f4BtXQDApg72FiEomsKJHTUiH6LicwcxZRwefDv1Woay53G9wsKkTYLBpHJ4LeioFp4fMVGGX",
  "key11": "4dUPGMyWDoAsW2SMQJ5kr2MLKbNaL8xBu9n6MXth34ceGvr5DE22dWe2Bsd81uUYTMutpekUidXNgBmpUx7itWNY",
  "key12": "3khpBsD5prsBWyiTaknsgiWN8NAZyLo5B96DTJdo2gvEja9tNdgzF9A5EPP5Eok1btynWmjm7J818w4t1HNnNdXe",
  "key13": "X3SqUPHsW2RHsPxXNifRUN71u9wHnwWTY1FTjj4T3bg9WarBmsw1E2Z8oK7pf3QfT5d7vRpY8Axw9KHcvJCv6je",
  "key14": "5yYgwppAv1p8MUNPucMuDEcRLKnaQdjgsRZDdmqkAdedY9uW9rCoAndivyr6r4Pr9cWA82ojAvcLxU8hc4koogFt",
  "key15": "5vvjRE3QNqCAP1i7e2nKjuZrsBbu3o9TvkUDNGuSPLJkT4fPKp7rpFX8LZVgb1YFCKpvKctQKGr8kerddbS5yd4B",
  "key16": "3YSw8UEDz8QzdHu4hBVByx1ZCKT3oUWTfS6QwteJ25Q9NN3WSeLoT6YaHZNxRd8gsyBcEJFoWfCgVrmGCuJ6ZeGV",
  "key17": "rPUWrstTuhVs7eydiytVVwDFi2Kh7kAZTCFaUFh8WFmA9CuTu4DmnUhnd7hXqC1R8rG7ghketK5LWoFXgYDxeRN",
  "key18": "5tyoJQpH4UgDYtRdgvbbv2FguWjgUNBX4FJVX4ionTWboZXHttFxbX1iaqq8v898DWi2natAhMzyvRLXSfnfDQ1p",
  "key19": "456f6z16odUvacd51DR9Rv5BX9Tq7R7Z2J2UE87U8mGYEcE6hWDq2Pt51X2jNYqTTPdjsLtLhkaqabUfR2B9WtFK",
  "key20": "3Xo1smonYb4fNYrNjG7prZkMJEiTyUMXmLwZ1mEfHaNh1uZKZkmGxJXJ8JXUNqYsNzisfbnZU86RkiP8cJ3AetR5",
  "key21": "2jzYAYufnhVxEQviFs1zYpqdPpTbgHVSGptgB9zAPxXWSARLuUy1qQLjwVBVyM499F19DWmE5DLn4aaz5N9z54yS",
  "key22": "2mR1Ah2NfNEydLJKBB6K3J7qvqDNvymDSjmGMbWJJX4sMzq2uCF7AjBBgCgrPPoRuM2Hf6KfDYrniLzfXkSBxua6",
  "key23": "3okLs4ueVoL5wM8ZMRYLnmT8uEaYWUnZHfvMeGVWTxagLfZqA3pXhB4QUZdXeeTw3GFfTgKXn3WnjQuWqnzQkKsQ",
  "key24": "58Z9Piz3gBD7oF29BSao9Nad6g5TirJTCh7LkLw6VvKmEL4rfAJA2VyR7efnq3jhehRKRgN73NStVgBSxeULVnEF",
  "key25": "5ns12FndboFunUrayVgwF7YaejMhcasbzkE7jcybJ9PxSvXJFGWDjTGdKacnhajtThzuc6Yj4miFbJUTWYBDTas",
  "key26": "dbontyfpyi5NdSfFAAgon1TNckhYpRqxwQo668W9aCeHERE6hGfT342pyVP9G9f5aa5vZbvUm9QxWhxkNptiS3B",
  "key27": "61cAeduZ1ozz6bsuZUYNwMK3bkfo4wXKd7VYVT4ih54V2wFZRBVHLf9thgWYjCSLxd51yKS2FW88nWoVdj4E6PZK",
  "key28": "2atPTFnca6TGHKf7dbuw7fy8SAkqASjobDjgeMS38b4iMQ5KV2w2ewj1qEoEVhMgoaWrzmhasc8qR6S22s5k1tXs",
  "key29": "2TxY6HCZvzagPSnxUvwrCC8FpjvXsbS8T5XEd9xYeJmVkCiWaNy8Ct2Tz7Dk4WXqq4JeXT6zYxTVGsPUfwhrTzuk",
  "key30": "54dn2WtJjC82oBGcjdQrx6wG1A6QsSLGHzxQGi1YByJkDnP8MEsonA2eqhhg6B5K6W9p4aamBr6uCFV7TvR2Hwnp",
  "key31": "RVwJvJtdKiSX4i7exSBzfehXMXNuZ9qNudBcGoLda1pHmYQPpCgwfb9nfECTmR4TLBjwq7nxvGsjaM7mnJia9gf",
  "key32": "2UMguRnDYnirA7AAJBv4j8Su7J5nroaTjTDzdNkWURtU7SNmgL2AzZiaaybiawHzNitviqm6Kea9eJ6qTLnZXyU6",
  "key33": "2hgwnFsM1p4YtZD5G9krbekHVDybxDFUbKyNs1BNQtqgBcqQ7WQt7WhZxUTow9k8FWo2bZJJyEs6LJ5p6REFzANb",
  "key34": "4LLh4XZHELxfAS1fqjJLvCzowZVzt4NdFLbC1HBGeUQSq41sNUZZfjvSnYdV8GEp7aDudtbjjtnoPxpwJzTqsUhh",
  "key35": "4irYBbfG1KcfksFKeMwwhxGSaXHXAF1ECve5E6JJCEweSRLi1BP8UohMdoBX6Ce2DGxnPTrDVJgiubee9EgDehP6",
  "key36": "5RvvAcVJNtvX7A7RkeqMDbh3K3AeEAnVXB9WNZYjLSfv6BPFb8enBSFYCMQKsz3u9qKFU9nxKruFKGAjpjD7bnmy",
  "key37": "5seekBdgDREPXMwgC2QsB8cytifL1UvxDZQmueUs6QCeJbH2xRm9rfjy3dPLvscP5JFiQnwXRZGNJKGXreH19PNp",
  "key38": "3ui677DTqKPndBz1K6Dmvs3PD8i9k5Z8kHiKgwhotvDDsXnqRK2Uk5R3wEcRYvwrtnPb6TjY6xnPBEqdz8pF9UdF",
  "key39": "5HmEyMpacZmtRKVeRsJvhJV2jujxUqfzkBJjXqrPBX7y2K7DsrX17KVE4SyfpNJqPJ1U6BBwvKC3tJsGShQtpzk8",
  "key40": "4z3ExUPGLDYhXNYurCMNaRnc2U4PCyRQYECPyMQGgiSh8pf5JYGv1m8PQTixBoKLFa6bXRB3ZYjUwirQYBjan6ug",
  "key41": "fmbxURLynp3S8sRFuFq3kkKGdgPHUMx9vTvTAcMfeFcU3suwzsnjPSqcdBF1uBvbAjGK5koPj8vJkz4CrAPBPgk",
  "key42": "qyA1c7Aymwr2wfKMGfPadjLnTNZpEH4g6AZLKy1Z2FoUbPY46fY51qiAYDaUDJ6JUbxqQk1TSbNwuswenReXiEy",
  "key43": "43xyhCRyntqd25ev4y5aMpqCG8rE6gHNinZq6uFwu947xq3CPgoAf92WbQAJazFhDH3oxCe3N4qt39CWnzk6kfo3",
  "key44": "JymxH13s8tqaRYU5kwS3Cyxg32Fg2259h8637airMw96mHir3CSn1QF95Jog555huThxgd1MeGB5LK5cucy3oAk",
  "key45": "5tWyvA1vhBWPrUNvjjpcKZQjs39Snvj3hFxVkhast8KfixBgUY7Dc9EzXuTmyUro9UycSwcUchuW5zh2ou9c3EcG",
  "key46": "4ZUvk5AC3DSVs43ACWHRerP2wMEpe8cbSk5Ktrbdmu7wcVxwHK6kamwLbrK16oBjAVEZ58VQmkWpGzBDPm1PFGV9",
  "key47": "EDytW1ZG9CrK91Bc4EB6Ln6efiGnubKWrUBNmssj748JAoX3631AnM118oQ5fUZBmjDXshA4Wq87T2aU2KPu5qS",
  "key48": "5tdUAzm9Vu8jNvGb1i4kttjVzGe1LNzajp1i5yfeVSYQq8FPgBPdrhUPzdwJN3Uh6ZUKisJndXdHQCat6UBJho4C",
  "key49": "4nfwhT9aoHQx2SthETnd8MPUGHxNQADsv3E8ubHceuVbMR7T2kj8WGLM1i6WL1BrSyk9M3ZpFVvcTQz9FWHpLJLP"
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
