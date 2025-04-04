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
    "5GgeKBK2cUGE2UaUCebU3XNsYHCdMj9NgGtZDH2rNTj1Whwaa1mnKTxiQVahSgeh6V7HnXfeUUnNouaWAe2dRDVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qCt5fymPWPR31GMBFA1hiitXytogoyPwCCEq1uTwQuVeKScC1bHSxCdah3y5FbXBcYq8zXgyhrPfVtamXxDwgkH",
  "key1": "3kn3KYZcbGcFrZvYf3bZJPnMF5WxPnk5CMDmtuj6U7sQJSXxMA2fbedogggLtiU7bKSb9uu8dMUw3CDzqTgu38Pn",
  "key2": "2Z4rnmstRqpbADwU1kK1aLRUgRGt2YWfEW4Wz5RemWBWRkYYXXChHHSNjsPDCn2NAyfkTkqSSSfeSLJYRDT1pft8",
  "key3": "44gWGnkPLym5UXKraH8JBpJ26pWcnUTvDudTNdHdSuJ9VbUnWMMFypWN6RYPcvQzWWN46mcvwnhSiGwKkQqP3j4a",
  "key4": "3g2Q1PkSLFC96aMo8HQAYpuUjJzigqeatStLvcnu7Krm32uGf55tiQqykoSbdXxhbj8aqB1VQcMgfSZKKBoCXWpF",
  "key5": "4C5RVry1Mq45H65a4Z2JmGzigp2cEpLi3ksTuhSHJbEWAwLE54W1XEHomNXM17VuwXTpRPwFm7cy8z7YrwvJHV1c",
  "key6": "33dmWix5DxKayW3PNAZMKfAE5cpt9sFGeKWQSjzAw6S85JV2GsDfYiL3TdDxKZBp2vq8R2zehDN7uJu3jZTzwBKz",
  "key7": "3zwbc8CoaqJ3zcCjrQuZKSAhhwA1imadSYS45FWuxpQsSq6xQC3hcGvjzVbrHaMo8ZKHShu9v9KtQt3cDeb6qKCi",
  "key8": "3bfzXuF8dytXTMnaSBBnFD4qN7aDLgpxqSizYHeEspKdzNZJ43BXPbsnzDKF7dPk7XKwE97Pka1A95t2gY4FErN8",
  "key9": "5PMKJbEpsNdsNpz9DBUX7KGPx8ZUzBrBUxgjKDXak5pRFKFLsRxNeT2kS6bSH7DukdN5PcjzQvctwSVVGAuuxu2y",
  "key10": "2YSBmNryJ5EaVHbeH2r8FTbqAuZSLRtwFtrpineyxkES4LVNrwPdQHeRNYWQAa9rwgQkRemDXDSTFG6Njm4kocnF",
  "key11": "4jaYJBmaxW8APMUMDPHNzAFLb8GMNbAt6VU2Y82wDpRs7fUaaDEetGsMiSZcZkjo9BDdxgHuT4YgYDUgJZWgM87a",
  "key12": "3NsdscmZBp8dQB8SLB5MntufCdPao49eVtkCYcqS78h83U6fDqjWZs2YAy5Ct4iyHSEbjrWqPzfi9VPnB2CmXFUs",
  "key13": "46KsAQijtSpKFE51xBc2ueGdKQ4hBqqNZ6DfJQqyf9hc6jo9FUZJemEfRKAXGv6XrTadkEKoxkamvi8UPAgLdxnP",
  "key14": "q4YTHyjGwJfDxzWwpQZZfh3hFf6tGqe3cAGyjoT4zHZR8Tn71bzR14aSN4poRASzLS91P7JPaiVZubPwVMLmvaJ",
  "key15": "32dHJpBUFyEr3DujjLyeNd2TAQfKE65X6TUBtg8p7spVRd2zZp3B6q7nHKdoRDCsvLzLnUc7CAPxPMbWVjdwMGRw",
  "key16": "QuHL153SK8j3UEFq75AsuWkZCF2MNeWVe3RuDsXwrV4NKp6xKDfzAevXorNrAMi2iXqU2dkJzMmM3uknRzykDsU",
  "key17": "5jkFeD7atB8UAvhPAVibjT9998Z4Sc6yT3YR7ciWf9Z96HXK6teDTYJe9QMcRPXExTeRihPmTkpX6oJgwqmvVE4e",
  "key18": "428eyQiZD2Cvi68G6WdihWDQq5qrDx4nYkGc5WDtMgjkoHqgL8n57kuKBaaDYBVm48iBAMUyyYUiAFCWjuG7L8qC",
  "key19": "5UGAEd8YCAmuvY4DYkx8YxFbNgWiE9LALqhRbnQ9KMaUADKq4YmzeGckkyVdNdwcW4UiiUtbdm5ZDCkxVfRj6MA7",
  "key20": "uuQVW67nmCHauFBjjQFGq9wPfuQSbUPicQdxcTqGdYeE6NrFz8rQCAxyB3YtkGqnaLruLuGsWkpJgDUyxD4CCa5",
  "key21": "53LeNeb18RB8kXxwKmL73wyEKWiYd7Z7JsZH872S1cwwttENqkJqGs2ZKBmqfAnpcG7MudRFGLmQk7p1BL1zs1VH",
  "key22": "63vWPxgkagZMjkjWP4VdN8QL37K3kCqkLttNaQ9JGweTDZ8pHJFJFKAT4oJjB8CKiqMWDKD6cUMMAuVLBjHBTRDJ",
  "key23": "45JGTXpWrfnprTtNeXLGyEQagRPGKvCCQydnu5tfKhL68k19FE8L6TrZUGKtEDofEz62h5JUKX1YTwnUKPgXWZ6m",
  "key24": "VGcyfr7E2bPLoMxW3Wujn51A5M7qQF1Q6H2qytTpATMaoBEwZjSzcA31KoFzPDkwBwKJGLCmWRvzmvMqBWzGP6N",
  "key25": "3cTtP5q2BQ7TDSxUvU6uGm5ueL9ncdrhVgT4fa4fQ7n5sMyk4eMYU3TEcSvcN55gmS79nXH2CBJZNxNUADui6hez",
  "key26": "2WLh9RHiZ14qnmy3WUBtQ5L31nZXSPoKs5vtF49xc66vAW5WX8XQeNPLUiwYrRwE9NmWcTGwwsy5aKRqJqdt3xF9",
  "key27": "3JizJR16k51ruJLbBioi8YFi9aedbnDnNDRFuwcN4xzhRQVE3hzfFLq873wpT8zsyEZjohMceLREhdbYpkVb8XMV",
  "key28": "JVGejR241cu9xk3XLnY5tj7SSzpHKmqKnTBxLNddrKABHr1jH7kzCe5qkSkhsBJJwBPZCkKp2JXsjYBXxjRhFnE",
  "key29": "2DAh1RjHj6WdCT1GWcfbzNV9F1zWJeQnbWTsghKkKBfgZfk7XbspfKTqu5rmotBdP1cRKtUq7WMKdc7pv8UFSfBH",
  "key30": "XxeHB1stNXvZBCsTKaN5tS18soqHKM4ZDGqLa9hSHRe8NeVH5JZ99MchgvU5MMYsmZLG15XEZQ29XH2f76aEtSq",
  "key31": "2VuGTAnhco8TGauxJPjwRbTD4YW4MMKQGUyiPVN7wyjNpfjosxrQfuxCf5KM5WeYU1j2ebrWxRChPN6SoKTUA7pU",
  "key32": "23D5kEMheRRArKR1MhBLeT1TukJRwB9ksczsfYr5eVPbnqEx43k34JnnMzd9cHBGSwe1gTBccbbdBCrStDi1ocZk",
  "key33": "s8PCqdcKCLgKtb4Rnzhzhoa6D5CRjMKocC2ybRVUWLF6xytBXk8Ff8MCnV22jaTe7iQScwVPQsGAD3GnPNQnczX",
  "key34": "53Uzbwd6wmmT4f3mQWkLgufP48sQnjBxog7BT3yZxE4a9QuP23r8R31soiWJsTwRyf76162a5RJZiw64bVyyoavo",
  "key35": "4QVGbEw1RQzTNAucFFtQESEXNSRCHMdwDufFQWY37oEFJaxuatwqKLdi5gY9j8eRxoJ5KnSVvKaeSzvVPBycvpf7",
  "key36": "5JsTq4zphgbAnBYrtNe3U4f7bG2jDTPEBUr3Yk6x4rveEucprpTmEntMzs9dYUkYkQcriQocyS6PUDvWH9MKFusF",
  "key37": "5PdBQVShKnqNvoRzdXm1W4tnQpQjCTksLxpqTZiMFcGddDrzNAaKeefaj5AZmcuB5f4WXqFXP9xMYmk33qfsP3Ew",
  "key38": "2UnA7EkJvi9wHAYBaBfJBmG3hxXgae9uKuQWKBJTqyBeUgaQrbcEHnKfid5wHxGjjRis7cCCCuuK8V3PQq49CtdS",
  "key39": "2tYS6NhtW9iDryw9ghFWoFco5uSRAKvrgeA4eMqPBPR33BkuvSkK8n7fi4H2ScbN56W5Q5Rp9AJw54JmJctfyKqN",
  "key40": "3fadcL9aE33FJu65G9E8jQkfrtXJG4HGVjBubhZ1NeaBVM5wDDu7673pAisqmEe12at7ZhL4j4U6mmFD56ph98jU",
  "key41": "5sU6DDJ6P1LeduL8h3M3z4YHc6JHqoFAuVbGynQHAywDxnfqjxncy3fRD3QxTvwsFJsbkRRPFgTvc9aVjAzdU7eY",
  "key42": "4yNufyEhhDZwQxqCVwdAjqgoPfu5u4YHCDoYamGiEaGTPpEzgCPChJyC3Z5uudPapNe25gLo6ZrUT5n2hk4Rr1Kp",
  "key43": "nUz7zPzfmBL8HT42GV63UVeKSgEGZiQfokyrqH146eq9qpvK6uvG59HCRamp4Xof5SyU42T8kGJ8PM5rh7YVgzP",
  "key44": "4WapDg3iFgiNfpKTQszJqD16BbCKxEywmqoyQyJcQyi42jNMRnG4mfAos4WfoJ36sBsmpfFCyEBaTvZtNCE5sxpi",
  "key45": "2hFoCnzkpeMTWtmSyJiXUCw9Bq6tbCXZd4a4KUn1cY9eeAWVoTn1XYtGwFuiPov3tVmQPYBmFCJtCpHJzPaozSqd",
  "key46": "33EvtxamJbPSAfdrVbbJeptPNPHhRSP9eRZrJ5HBL52pX3CqJxr1o3MNmR44QVk29nHf162nas3EdrfASqAWED2b",
  "key47": "4GReN3Dv8P9XtFubiSQgk9JgV9XxcTrAtB5otxUZShN6Kbr9zFcx97L2reJgU1WSmvnTMFFG3fZfZpz9GGpKEttH",
  "key48": "5igs6JTcsQzJoU5W8zcrMB3iT1LMGZ6PhjeA5XqoQ9zLvDbXSY4N3g6vnJrXazgbAzGF48nYS3K2FxMWZiDEEaoE"
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
