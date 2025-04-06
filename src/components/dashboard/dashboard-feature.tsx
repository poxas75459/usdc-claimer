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
    "xfGo9x2aG4g7NBifp8MiAgGyypd7NXeSNsPpbGP4okX7AunLzKCPAs1h7BMAX58jVLS67SSnTLXrfXtqXSG9HgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkUABKyu2UgX4ZdmL76GWDF4Mu1UJr4eMNottLBSqfyADzxciScqptQ5CTwPqRJxfeM36itRCgb3WM6aPPd9ocN",
  "key1": "45NmhSmzVnmfLfCVMMqnrhNbxPXgxYEf4kFCrUFxrqia8eXBSw1LWX5ep4kRkQWWwQzjSBzG9M559L38U7PtsnEU",
  "key2": "124w9H8eMzyjzKmAQdFdHtMLK5NeguoBKzzz2mfwWkzB9pMntc6KsT7d7NGuGphbZhX74Y7rsMQAa8coLavGfmiD",
  "key3": "5EbmSySijebYWTxbRS46b1qR2WbG1XBzJu1UHDC4aqmz5oJ2AYSMFX7G63ehhy9oYf1xaRBdLhtcf1TBjL8S8PkJ",
  "key4": "5aDpbUR4zC23BoRJPZNy2ETUuEVSpeuEEm1YtmhUxrT3JA7UA3UubwUBfAoB2hCRmReBCZe2eDxWLC8rohuKuPK3",
  "key5": "2yNTyMXaExFecij5a4WnwcCBJnzTy7tEjwsoy5wW3ZpYiPRnNqKzUMRdvpkY6ik64m8NvzFcrKrVAX7QFE2P8swH",
  "key6": "27MUGtopGE8ZMhcsz1K3vGG5sk7RfqyZ9h6PNNpsQgGHGouVBTGtcBpT2zNH6CR4UV26iUdpEGaSCnhThNyMCnKQ",
  "key7": "4fk75RXoDSmEndb3mGopC5SUFRVQ5e2w3rG77MsCgUWoRxBRLypVqcFPVvLGCFYDsxMpZzRWQRMiusVpAPbhLcyf",
  "key8": "5iDdR3ZBg57nzawBidJFxC6d7yD9Umw1LovvQ6yiGYTEfqkeJqCSYtdVDvaUFppHLy9XVRv8c2wRR326V6VbSWd1",
  "key9": "3JKnoV3wjE9W4bQBEjiqe5C9SPDSctnh9Q9EyswxebRuH2aqVczrixt9pcJhSYBWB3a4HCmxy9cMfx7ZsWiZ82zf",
  "key10": "2dq2iujDJaaZPvP4hfG8YjZXog6Bvf1vTYGEgVYkWkaF9Bp87QL3t3NnmjMC6tDKiXAaBJyuFVk3ZVDG7QXR3rgn",
  "key11": "AWLdwSARpYcj5wqxddJkwC76RZvZuw7rNazmXDUCwWgFjaXAceECprWmsJChpFRUvfLAQgc4pVCY5cGzzdgayXE",
  "key12": "DqBoG6nnZLwT9VUF4BmLnWa9x8KuXv9BHBwgBjFPNu2KzSAZyRFZsxkdkEtMTR8piTpzYDwM8LGMiGBNLfEQJgs",
  "key13": "2nGjFySrVVdbeb2PbTokPziVxKmaALhhnVFDLsx9onwR4P6sHLGUxVPRaQGFUTx4MuRPV6oDJ3qzyCudSUeaF2mU",
  "key14": "5vHTKBrMiBNALeN2HuxKjLwnvaKFnwkcjHvrfvyPvcBJzQApfNnPCP3pS9EBoaYzCMpVVzW4YsFh1zEtYCYD2aJy",
  "key15": "36S2BWcpoeQwZh2UjrVnXLqzVutBsCiH53WQM2uuRjQCG7Ps9aNExbVRkYiyeZNNBZVvu6ft5EFNEo9LWHUTPXvi",
  "key16": "5FTE46n59GuGy2ffkMTTJtHPoNya4LakTbLUiroWjCxQcEcaYm8YAj7QW7oEaSaxA4yj97f6avRUmKbpD1hUfusy",
  "key17": "LyH7uDq9K4uwvLUc5yg7VrYGe97NUCu8FkP5gKxajJk5FgAwaWwgYRBKrvLR6bZgaLw8JxEHMdpf2iQvUXhQdnr",
  "key18": "55fx9EYj9U2c6k4DvQ8sD92TNtjnQq5nZtrqG8KGeuZGFZjC4Fj864hcMBs6dBu9svoKakff3sqz5z9Rbb73r1tf",
  "key19": "4RPbvfaeS4qG27gxrTbgXEeprzfcruTAEnhy5XpDVFs13Y6QxXSvJFszAEptoRtBmN1zdEFKsVQoezZQgZiSv83B",
  "key20": "4wyBesJymVrCkzRxK6GPdJo3V7DoExe9pHMt8xmcBaC5ubgxYzmFPZPCtoYv1CNSTXV7mcwRGPNEwz8jhPdX9Fmf",
  "key21": "n3PhEDcybWR4iCEEnFLGNksUemdT8gK8qGudkFLozMabyqScjXFW3E86vsMdYWXosuLHPK78he5LcRKrCcjUoyZ",
  "key22": "2HhpCWur2GXXPnSsAfrnUFu3KqetqU6bRqiCjsMHC4WwcamyGoSDjVVoW5MVXGNT9V2SoP74FychUzh3QenXiBZZ",
  "key23": "4npj3hJhBXM9DywkNpTy5Z1iRNkTuQXYjrAdvBE8BjbWuFNuFKgWiwfBr5Pi87wYTNLHXKrquWjXWeb6UHu6HgWV",
  "key24": "211v1QrvWnLUKPff85uMzhLRSD5fAhofKM1HwHYq99gkYFd5smBRxU3WZDTUfnHUJFm8BxrTuSnWg52JAdmBgMH3",
  "key25": "2Z4Ci7cQZyzJSEi3AmzUXttDmy67Phq85RVQvPC7PYsuCJKLRuAVhpwKq8bjqdGgJ7YJySRKVbosLzUNPrnKYro9",
  "key26": "3QZJUEuhafaatJ1pwuaqJ1hnMS1EP1rWVTtdf4Z3rvoxMZTpyEwBzEzf8rPzyW31Wh2i3kNzk38o2FzSzQjEwrLW",
  "key27": "53P1Y3SnL7a2w9adopDKK5E98NDw6MAqsuitsctz1mr9UBAcL7q29AAUp4T66LLqyQ7cxLffdcM3UU38WA2rLPsM",
  "key28": "WCEuAYbaJFBnkmZ5m7mo1t5Vb1vcWPftXkvius6TJow1Fm9UQ5mhho7cYsfmzQFJP2XRRgjeJWVpYTCgwSYc2JQ",
  "key29": "4Fbovi9r756YJ1ytRJybVMaG62ezexkmdXDzEWUk3fRAHBqqJR1rCmJRs6j9S9tjSpC8BJ6pXf3Sw4sHoYbiZptL",
  "key30": "38Yc9qYkbCkf3kvEvPN2yBYxTssQHtkWSetbM6m4zigwwb9ceEdDNFb5DQueTXqmx2ebPEVv8rKcWESV5w49rH6b",
  "key31": "2LA7aegBKbSbQtwgadfxkGJ3xGQGFo7VPcK8S9vNzmZfAqwqJHXbtpxDE7hNr522B6aqoxTfiHDJ4fe7DQr4LLW",
  "key32": "yB13URyZY6R1Rntns21vZ43t7eEBsse1JVuN3dZdCZnnzuNeuUBoxR3aChcovzwrTRvyHN32Gd9mA2u6xwbkbtg",
  "key33": "4rw6A99EsfUkHo9WTB4CJJyuBfoDW559WbN4A2JJeB7cYTi1kNrwvFfCQbV6y1di6Qfsz5oYQBqj9SC3Q8RH4wwi",
  "key34": "2tyqZRBX3YvLPFVu7xeedCakkZwkZg2uv8BcyKeszUWfo9pP7xePVfi4zWnNrUZ6MoFF5XkFpn3dyEyHozDKEkQE",
  "key35": "3x2VNZr4pe4xrncimcR87vwtfdeJcVkdRqekYQnYFR7j9DKtZC9WwLoaGsLLt5reu5C7aM7r3N2fm6FRaTuLjA89",
  "key36": "2jk9Us9pxWKDot4q4wXBtL8rPduBDazHpgpFJLXvYk2xBqqzNPa2CysjbNbZ8DWB89z8Acjiv13AWs6Dt2QcMgYX",
  "key37": "JPAVqSLNT5iLHHkoiAKsyYegZE15LDmeJDmcjJRDTSEFthw1pGwc8pJKFMbPRb9vjCoXocbHrBn7tbsd6h1GXjx",
  "key38": "4XCMcwWcugbx88HzwBRnnqca7BcKQZ5wdg1Bz7CwXMUdTQTt4pViDuTeDs8qUPmNGgSKBdBycsgMJPZZHmYQi6id",
  "key39": "5PvEHBvVR6phYusrQfyQ58Lp7XCs9bVjoAaLksffQwErd6V3gdCKp9mMjeknAPeHU74tHzjcyihhUoyGmu5qRsbb",
  "key40": "5FYxhqaCWp6Uf3jAWRBXoH5uh5zbB4RcyNYGUADU9ENegCt6rEGbDPJCxpPkYV8CqUQhZDPCXkNUjS7C6BrQepx3",
  "key41": "43ZaBS99BEqHWcqrSJGyvtyQko4YTQLJRJ1PJQuy2dMhNPcZ5ewhVPKxd6pRzMJHBowiKkb6zcYbL3TSS8fYVsiE",
  "key42": "3spqjg9Ut7Cw2QEFXMuyfYRQABcYVLMDA3LmMwsrchMBUrZacT5tVEHrmx2ApGh8RMnSDxtpH9NrAcKS1PgH8178",
  "key43": "2eCwV1LHXdugJrfkLngpFRLvV24n4e3ZmXZfUTzqYXCN1Aefxq4KKtgLqTkYJgZyLuYSja3ecGhA42uSM9UFD7Fd",
  "key44": "4rK8iVYKrywodMRoAXugPFAF6DUf2HsYAEU8Caj57yiZDZ31AbkyfpXr7XnL6DmmPSAwi8EBSymSk6rjpiDRRptH",
  "key45": "32WEQ7UCTACnffDgjifGQAAxuzW83oa49APTFrgzS872r2aN3JuHkpNKCjLYfCwGHaNqkCim1vNYK69TNcrJi2j9",
  "key46": "2NmH24AhEW9GR6TyDLNBeoVyEroGF2uRKwZKLwYWL482Zreu18x7W1ErxwBsNVVuZz56hzGtUq7AHRsdDAHQpm2s",
  "key47": "5FFaoghwdRjFSA6TMXb9htWcVuhTsyFgSHueDnjVrnfZqLMFb4bKYJMykNUrjmvMbDePEArDJeeC1NdGmjxsW6zJ",
  "key48": "5C9dutnXXA5ANCRYHzxLWbSWmBKSGMsKMWgqGdS3cRiBUiuoQigMjbhZQJSAnxZmomYkm3AdyFiCY1xKsBSmwJgH",
  "key49": "5pUJ5RkqMxkSvghwg5tmjTzYMgp8RVg2XXP2M5NePko1bZdHNZdtGj2i3Wa145JNoT3jCQNcKCzK9GhBJj5DNLXo"
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
