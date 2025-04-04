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
    "3P9axZnzXwpAwNoGNtUFYgyXPP7rhWATX9K2uMCrXhVx2ddzCRQWa8HJw7DpAwmcNMAuqoBcGxC9RjLB1nC6d89g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kKUfd8YQPriRXBD7d9kNPG2pUdK19b3SRnpbf9e1kihe4GgWWpKBHsdSsXSF1FSQzNeZndvZyJ49CpDVZbsfKbg",
  "key1": "5nvUqfSoht6WcQCm9JY7umZvNWpdvFArNkmSsVr59pUdWGwkcXS6k2FKMbcyQeEH6fR4k2G6oRcFNh7c2LUFNusQ",
  "key2": "4ktWXF8jXckNp6pAuZ9r1cqorPak9GHW7AGbSDXyopvQ47w3k2Jv9xj2fpqaP5MsaN4W2NEMM3SqGk78RZ4AN6u7",
  "key3": "4VgcsStQig8SWEAeUsqKfrV69Ys6zwJLbHifnafo783heRj4hpkasU8MMJMJSuUyUoJqKshfo9zoSQH7vZLnrJm1",
  "key4": "5Cqx9UJyKcu3uXzwJNHV8wYPC7JWuTAQSVApEGoi8wNxTM3R8oDUrju3Dw1H4qcTqoRz4nZWGB5GLXbuBpsP2Ew4",
  "key5": "VCSkDBRc8Hr6CfWXxqx8QuqwMLbWbXGHAqypgSqjchGm9aA87cVMad6pxKXDxKsGt7jjQGHg2hW7KaTmgaNvZcA",
  "key6": "KJJLbjm4gCQ2DaRNmppNu6qiZ4951mQZw7LcEMigYxPMRpjpvbCLuaQdJaaENzZQbXf63fPBk9FgNQ9GQVNkqiJ",
  "key7": "5ZzD9oPQfWzTaSWNt1VAJ2nyzCzFT2r77KMdr5SEdUKgb1f84PrSh3cHB8LKrV56ZSGJch3P4MGQG55cjiCGJ48z",
  "key8": "4XYqNYkimXJYWoyXvdpt9uk37EJvzjLsHJEVe57ysQQTzde9ydu13LMbwA45a6E1ivCVPXFQqH39WqkKUNLta5FB",
  "key9": "5weUriEsn26WfyPa6WACqiLP8i3PYXNdTa8TfumA17jWQocJmdqcZzzXwZt8UmbnFds8CFKpbtKL5cCRYvL6N3Me",
  "key10": "374DV36nwjVNkEQ9z3d7s1JPvarzZXdj8Q6j51pVRxKi2WJL1X7GLLAhK9vPxpRCYcPJzGByynBxJgSbXSr7CkNY",
  "key11": "3sU2L1tzazAfAudumAYdLTrxDNngaXRExNPYiQLPMQ6sNTxzi6R45t9QzAcHGtWgrbKk32E35TMiJ9qCisFnHaF3",
  "key12": "5EPmDdUMK6aiTUDZAjZ83ZnTc8pPa7CT5ZL1LGhjqCiFjq2AP57z4SzoUxT7cbg53dQ5KzfMM4FgssZ219uQ5t86",
  "key13": "3EFMpNMfmRLhq4wgp1ZbN9PZiJtgsWQQN2EHMsiQBreR9eB6UKyv7gHncQbPGbvRqi2pFRRYwa3mZkd22WL5LAm7",
  "key14": "5pWqwS1iBSfvg3ezeG4rMgXyhoQW13roCfX1riCoWSpQDyCRJtyKEx2wa7jPnVskEbDpPRG7q278XgU5kgsuN3u5",
  "key15": "iRYDTLqkUyK5ncXSBy7JKxCPywBraQYUhfbCdV7Q1Dsftr6NdbUhJAkAyPaaxRwi23gRtHNkF8fGhg78zBniVHN",
  "key16": "qotygzpx2pgrVTJkYkSwnu6gGkVeVBfDnvp54Hdd7Ae9vLZRGs8JdMfVJB7yDtKkQg7kdqVkZr4ivPQKhuCMGdu",
  "key17": "5srvhFPzB7VxMHAbUv1suwaGSoff6LY4Xu6PqdR6SBXafx7U1mhefByZUtLV8U9h3xB1aQupHYnBGvMVvB3c9x6r",
  "key18": "PXWcftDLCEeby1vXuAsEFzbUfrCotRkBJqcVfyVgf7MDmAKrsMro4BD5UPuAwsuUcBqyhd2FWRwzkMLA83P3Wny",
  "key19": "25Rm9F3TuY9t5fMf3mU61KRRH1HxbJavRdKR5QJrapgaBYXH5oqTjmSeMPpigE4mnqpmSBx1BTb2ny3qLpZZ8jZA",
  "key20": "2BuNCXmbrEXAkpKHgcEms9gpJczEBbyxrxrEv7tbk1jRD8VU3k8j6GxbtUFPZAHKJHnFZe8DPrP2Usov9LspSw7",
  "key21": "vKNw7rmbh5t8JXuGjuXySXt6FNT82ks9mscNYkze7n6CK9UgnXVEZBm9RFEwrojbN7cmAwfGFyZEnb8jT2fJG8Q",
  "key22": "67p4mzHKWKLHurWGFohXuuCSxvTJbxn2vJgA4SkxGrQ1BKdwmzDmwKHmbpGSQudHbtwfs6h5oMDPg4fTseZBcDXN",
  "key23": "4fD3qWd5uhoNfFyEdqA1bJX5gWeJhqu9SKePp8fJJnqd4eZ8PTweA8gPTV9KZtGZZ4uRWS5yUEd48i7eYhtN8UHc",
  "key24": "4zuhPTSNoNxhY7ujs3brHVJKFkwVAgp4JKoaey6fZJh7hEMUFeDNwSECQDbipkGEtp95uC25QuQGNqX6LvL5di6N",
  "key25": "5Ld4CmfhwV61t9Do7aWKHsJT1HAF1Vfau5ZjZ2MR6vLvA5HvpZdxRrrtScKgSt7M2PifbVMwYeCyK7fgbFysnmiS",
  "key26": "3midj6HYRNTaPu7eUnv9CeRqULM9rHyTRsjeui7C5K5PBeo5S7r8JBiLMc5nGSbUbUsAV6zVwLa2b14inphTdwMv",
  "key27": "2zFaZyP1tEuWfDMku4uraEGDqb2Zd8U1zSSbfzXkYAUcSQAorbCipfpn1M9KViezrF5oSLztvk5jnXTEAGp5X3qC",
  "key28": "3Gcp1bCk5ib6kaDyNumikXxR1sEgrsi2tJjx9mZqthQVQqjKx5ZT1qbn2VxkW4f9YtzvAtdBcEfByKiVudzS9iSX",
  "key29": "4M5Mgv1pgAVHa1KXuBM37d8v5F3fw5oz1qcrfYzotdty3tmkmNqVpBC984ciocToFhwf1RT28JVoCDPTDHtjUF9U",
  "key30": "21Rt3keSQEnLuC54sKywB13ttSuuSSR7u2WYXVUcsPcrNu8xQTyg2pyBjYFhYJoNWDzZGu5pGmNuLbiC5MbZNgyK",
  "key31": "5rkBGZb6NNpHPgPiZumFiCKJiPsiuqgsMSeyabPxUzCVy7HQ83GdxBdzdFt35VApZQjeSkWsMSsKqDd4QziU8UnF",
  "key32": "22TTBnzZvSCJBb6FHcfrnxfT2Uv8zG8m7tvCxo3VAj1xQQBYiaqUxYwvEFAdpVHh2QMWZRVuBJXYGn7WTCsnYxNt",
  "key33": "5zMg5cg4We84MLJLEQbudjqDyD5Jmr2EEgrYEtrY3oHDazMoFW55ToqvWWZ5dXzpia1n96mdDQV6Gwevco1SQb4i",
  "key34": "3bYczwrJMwjyNKLbQUeW76W7iWVzNW8A47tV6K1sf2HaAfzr6miDYygK26DtWUoepbeCEyPRiVM9mtyQZG19cw7v",
  "key35": "4jKXTQJJpiLoKzPAYZ5uVhyjCBZv7JdJL43PBbWzCjJv4gDJpssrDp6Ma7Dv7RnZaCkoHQURNpWY9z4jfTsY7CTy",
  "key36": "2GGXrNPN3RgvrChRMC3yUk3egrEQjzirX1iibZduE6xDkZNgqwU3MNueAr1tF8dTTP1Po6dzRDwek3EPWtJ7m7sD"
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
