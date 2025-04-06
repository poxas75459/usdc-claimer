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
    "1asv1pMmDqchAjGxRmuPGnp3zriKVESgJ96wP3kcdyvGNDrpEudMuJYMPHKeMxS71HhU4wSzXtoZY81AbNck1kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TwhAFZ5Fgdy7N8UnbGcNMk3Z4EH6t5auTvw34DpVU43bEcJ94UBmjdZFuTQTd7NqWSeUe29n5pKWZKrimJJ9sDT",
  "key1": "pDGq3tDqjeXA3zXtFUQgXMSpnQGsiEBpagQykrbzHc3MhwKvSdTBTUTBx9hi86ydjK7TVsAGZbc9iKgKDkmu3sL",
  "key2": "3qpwzaWimHwvA4WnRPaU8XJGWEj5STPcz2FqVMvR3ePFpgRbRYDTTLwfVYDFipkak8c4FKdmRKBBqgUUhcr6ctQH",
  "key3": "5vvspPLHtEFWqbz4k3oixUaVq55hjRTjVcaz93V8b2XYQkaGo85NciVzrdWFSEur71ioj1JzZWHAsim1Yx54xwpt",
  "key4": "4HMNHZrxH2R6RzLkcnD8ewzsWxBSvbgv1HWi6jRM2Qe9nhXxvxwaFDoLsNjfQVvknxsWk9tBQWGdwzPK2U4cSjDm",
  "key5": "5XoXrUfYF5VqHCdRkhBbgRGhAVnnrr87FQ86j27keefgBAF2NqHacZ871T3ve8eWz9ERPGVmNu4dMjpRxoDFimvS",
  "key6": "2zgACQXhkqSuJLmUscH8zRnTwngyam7zEJU1ki8u93NMx2tRWezfQbFortZckeBbRFWB4yhtssuxUYpsmfrxKkq9",
  "key7": "4jKWo2v6kGCi8wDc5De6ZodcNaWhNivoVetHMR6HNqyx7snfeBsgKc4CUWRE9X5bgQeQGhBePSEnyADuSCdjbJN8",
  "key8": "45spLbYquZJCcfnkSNvMjCt7Fe8Z6L5nR48Qhyv6cPBw1MoHd8Vji3h52X8pz1ChwQFPqLrKSFqF16jKRMJ9gCRV",
  "key9": "4Hef9uZbk1Y5SAgxrrt7mHNgbFjBpXrsjFnnef4MdsYWMeh9HWFwKywarwYsP6cVCmMU3eGN5dXeZECrjYcG6RwR",
  "key10": "2cB9dW8w1KXw6vVRBBaDyGnURn5moD8NdgDM7Y8u74RFR6pMFqVB6G7cpzBcQtXyBorZinMjDynQ9rkegK8EqZP2",
  "key11": "3qSMtWUk5StRRPfwENUfFjcXPEA2T4ZUqCZf9nSLNrdrG6rkYxt24GfaQqVyZtVoivNbEL7ZTXPLQyt9GFHUKxXC",
  "key12": "seJ8bSZRhaYUuR4ZYtHhaqeS7BoEoBmNfyhE6VqNi9VPxinwmsJENi58DQisLDJJu1WPaPYQ1DLZP95PBLFV2M1",
  "key13": "4kdmnHpW3T8vvyh8L66YB5EUVoyZP9sboGtyNSZF39PPw79ER6QKnz7MxAGv9CUwSVmnKWp7V9ArtsCmrw6j8eBR",
  "key14": "4gNx9xEdKdijPW4hz5XHoAwpSPnjKVRGwVV8yWG9HJsyNzoUi5BPMxwPjZN2zY5ndTaDRum3NXvW7eBciAYV8TfC",
  "key15": "4offQBkTZo16JN2L5Kz2F5BMwGdoaGtC5SSAG3ihCwYWkEGNc3Yx8FFE6bj5ZiBXD64gd5XNomWmacgMG3YfUKUo",
  "key16": "5AhzYtGHpMkHitnCdSVNBgMsfMShF6Ew1jnjwkYC6NoXTbdwoNyHadKJbhjPNr94ErbYbS66PHV9FwyLbagttvFj",
  "key17": "47X6Hj76t19pdKynUnNUtn5878CsezE7VcCRPArKAuY8nmtoeHjtcjY7qm9HiiyicuTqeggaMKFWmAMJ8mMsSe4r",
  "key18": "3yHyxxhgi8pgL4kkrgYJUciFvPFfGVVS8Ktq82ebifFbWDE9RnQ3SUACru2AQQvA1EzfRULvuc4ssSgAkypRJPSU",
  "key19": "5GYmwLj2H4iTkDhYfuLwuNf9kA8QFtZxaobBzubXtpy9E1YYoVnPo2hyAwuCJhKxwkc4cNvU57jfXoqX6mZ2xoUD",
  "key20": "46ZHWuwZHZbRG57r1arGG5KqPocm2uudGpXPei9q6Qp4zibEMQUpe6u7zNnAreBbHN1qArQwwJ3XPYYMh8snq6F3",
  "key21": "tPT22zhcPn2cA4WHAcLCrCqGcJzD72sj62DbF49mP7Rgz7FGvVDwZuY66c5G4LRGvRRqkLXYgfeURDbdnQ44z4y",
  "key22": "31WNjtZgGtozXFZCgNrp8cLur9E1bJ4X7NCATFELifL5HEHq19jJubDhYyATcgQmgK7fBP7A8xB5m9ZLoMNazyaq",
  "key23": "5c7UF3uuChvZ7mJRnMNkKwxdDkXpSgCDDQ9gH2d7QeTud5UPEijPSANtJgbekMPuPB137CMVEKhNF7TQXVjdxgbv",
  "key24": "3Gfo4yJP1LdAj4wnyzdZ9q5S23WGUmm8wvpog6ZGDmzYTYySdHdksNFEjwzE7ANA5UndXx3JquxRX1egbtA5CzsW",
  "key25": "7iRcC3C8GfF4wUEryUmMy9wb9vN5voCBqZzm7N4jj45ujcYBDTW9QwWW1cDEM7joVg56EQgxcbCnaGnUz6ENQ9B",
  "key26": "4uQmvo2r3sc1SNkFYr8GvtHkxW1FCQX9cVqmqiY5p1n3sad91vsCxy4Q2A1cwzjSDU4AS4NZExSfbBeQ1JkaFYA1",
  "key27": "4cfzVUxbU4JypjSzoyqxHc5bSReXnAALKey76Xrj1M2E1hiLe9AYDqf2kkTUxtLBcfgahfbMffcmLvgx8rMrKadS",
  "key28": "5dtfcLFjNYah15nDh49hqa9k5Crk2tKgm3n18h4z6E2PPBLLPnRftsZMLSwyXSVXaQiast4oD3M2N7c7EpUw51Kb",
  "key29": "isqoycLY3fUePuvGfL66DpZqMNmhaD6XhBHnK5VrLs4cLf8BwifNUreejzwHJJj86N33wXXXEPMwUnR66CpSuq5",
  "key30": "3VJaey6XEzpe4ZfAduxy4wg78Kg82UoUCgRxerSEyWN22ecbZRLmA2MAU9Qq3dNcfs3sBecM9NCRbUruccazt9S2",
  "key31": "3BEDqe2Rx1oM9y63vYE2KsVDFdAx6vnvRNEypGJ6dM6zpFSFoomTCs5EpediLVnndUZhGY97ncTyiYmuoLeu7oWN",
  "key32": "34xZuVCuo1bsoH9qDU1u7ykpqS4118oyD8JHeMbmozCPyELQdtLkqfBNRS8Pex5w2GqnFZAk8AeLXdodnSmAm9kX",
  "key33": "MSwT93LigPq83b2AUEmspa2QVbb9HCCd1GW4pRjgy2fbrbXt7WNz8R4GzZ8h8V2vrwLdQsjYECgGfmwVZfyYL2b",
  "key34": "26rKLEdabNYTYUT6nWwYUAGu8STWPpgkNP6aKMCZb3oqiuCSqkUSNGEbebjVcgqgF36zXdpEvyTJp5tesmhSEtXd",
  "key35": "5BFeHP3wLbY8R3zdefiATRCozZY3tHJedAcMgdAwbBkh3EqTp6X3kQM9keLjFHpA2R5sgsJrdTGZfvs8csaUnLjG",
  "key36": "MDhuP8JpoPmEL6z3i3ajwYogoY8A3gXeee3fcBEFehGA9UyEn95TVsBFsmfb6nyet8YLS3o8UzBLqoHtVrcBqdd",
  "key37": "64whcyYgpteurdftfjzQuNmXiUjo4veJDmUbZRVnAFZqgmdYimjxiuCjQ2jGH3RuMu3TGyAsxQEoDg3QuvDjh1V1",
  "key38": "4aBmDyipqbNXDh8XwLFAxTJo3isn17PobyNRq76u2wyDACZpwWcjYWopHBTV3qskRt3rwDTVjzzk7cFViyQaRw45",
  "key39": "RfkEmBmuar3hUqae2xLZoBAfahYNA8eRMmmjrmTSz4xqYeu8Fb7yYZQrePBTRFojqrduqg6CskdejTcJK2zrSUC",
  "key40": "u9ZFKB2cUG475toVxEhXUkNs2fNdWuKPEXUph8JJAtsiXMdj3TEU3pzkB15yqWG5RB3BJzkRohtacwk141Ac1bQ",
  "key41": "5QAnrqu17hMrUKB7YiELri9nUpbjWcZ4zp5BqwkvvsefT5aWMqhCn44n4qBJGJ66PJLvPQZovuu7rLMyDXHN9aQG",
  "key42": "5rK9iLXgRHsUpHBdEDSeqnD9XzfQvTKxSFZwHe6zMix8nCDS5ij8CMVazuD9y9kYacqQT7hZB73bmRA8juXAVxk4"
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
