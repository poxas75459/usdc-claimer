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
    "5MGkgjLbmoer36HoL2AhwjUk4uyhm39xhXi1cJzWzCLb1sxuQLoPvq2gmvmDeEwfPWHX9dCb5Xw9qQY6ya11i2DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i7bo33kCV8tBtYt8KsT9yXq5LpFSyS6zTDzuXFxCeS3dCmiGaWMJQFYbfrWM4zMATUCbS8dU9A94EiV2kMucnWb",
  "key1": "2MN3BBBSoXGurHMAjBCEF6WWqiiFuPTEvxTKevoJWGRQYfp6Ho6rukkrGgc5NhGJ6atPcBCKP39nE8ds6w4FvRxA",
  "key2": "5tWHPzMss88SYDFypwVTSwSaNZjYwaaYRbiyGP7RhgUHkes2s69vTB3hz4WuHnhPYQyYVkuuizyRSurnZC3xhDSA",
  "key3": "41nM8gEyNULLsF8gPEKjNJASDWdVqdfUn4ZCRxGLcpyVZr5RvqEBSEGSqQP8326e6L3RFaapPwLvG6xLH46AtGHt",
  "key4": "4rpRRoDCRTJKcdx4VZTLAMnLovnja2SZwMgZ9529s7nM6zwxJka57b4XEEdv5jcLudNw46yYTRWSnLhQJ1LsBSfw",
  "key5": "5RUWBH4qQNRXRmpbJALUEvZHJPgF2YjEddNZQeZMDo5H1ocDNBdvLDPcSwnRTiuq26VVcu64Btq8aZLjtizDkVTT",
  "key6": "gf5QxJsjeN8QNbNT4bhPWDC9psFTL1VXJAPJzURBvpX7u7Xgo1Xsa3v5JxQ6yaN6FiWHmiYZ1EfqMzWmLiPmrNp",
  "key7": "3NddDnspTkXfqTmD4nTW6nhTGrL3HixSP6p4wNZArusGz4kieYdKW2qMTkcK6YQFmUA3gbb9yrof7hzbnVe1qAhP",
  "key8": "22H7FeAxpvAFkaaWbboDnASKvBRYRVUjGD7h2KbHGse1FvwEFrPhDpYqLAieLYbMcdVro2FKo2iUHppyp2a2B6Af",
  "key9": "5539PJoQXFoYd86XBScxYonYhmBrUBbUvqmZ5rQCKdsMffvg2Rr88n9riyW9gnWrPa98V4dFC6WYcmbHbTyHrkDc",
  "key10": "3nambut6YJCadwhgvhkMHKYPzTuz2Z44JnFw7WBixonUo2U6dd3GHw4eU7mtim5iWWu1oCjz3hezjcZeY93hfVFo",
  "key11": "2TRJ6bQJ8f3oiFnFxFn25iTJbSF8qH9tDGj3KsWy6q7ZnAovPVbH1DTqiAKo2o1HDmt6txwuTEJpeb7Sw4GD57ag",
  "key12": "4wQ4R7Y1WqQ5EWSk3iH76jiEQUVb2MoqSdRWtWXzW4gQParuMEcDnM247qbywE74AQWuhstHSXYKzgeJui7Fx7Hc",
  "key13": "5zLFbV7GnLtW57nu8PGXEW2Z8CvC4159s9tFBVpNdotpXkks17eU4Z45P7k3YBwN7P9EA8UfjbwP7sJisMi14uAX",
  "key14": "64Httm1FD65eme75A3NWn965tnJqRGWuvbvFbwQdGUSTn2MESGSafeQfFkeaUyHomk4FhvBnWHgvoDZu4uBukkc5",
  "key15": "aA7HujLdre9spw7Np2pFcsVudxfmqZNU3eXbYrNcQPFsm7GVSzWjJ9VAJUpcNBunhHJyCpPt7JbU8j3ghQMggHc",
  "key16": "2Z8ehXFgJkMezuP8Xi1R9Pqnqopdg9vMSuCBP4pTiaeJe3BznZgG7mfKH3fp8wLFnVwXGcK42bMHQCS6xDPS9oRx",
  "key17": "jhUZ7DQjAHxWHQXW7P5SapmVdVRb5fNRyn4Er3mCMWkpSeqN1GXKAaRyrBZBqMwAeKY8Z7aUR7bGmV31SmYFjMG",
  "key18": "5oFzr6z8DsLeGuFVE1FeSXD5ubHvPe6QD8Pj3rZogYZ5S7scxuHzGrEzc7BMhbiZdCTeJubt318jJRrdeRjC4ikt",
  "key19": "4NLUQFnAyUN5dHPWrpyWory6aRVGbPmRD1qFXLXR5jBRdvEArfCrip9AskgW5AdWtppGiqkCCQ7vW4AfRvikgFef",
  "key20": "5rjuHRKBSWfEdZL2EX1Rbc8h7UKxMdaT5TEbBmzL4K7HcxXdS1dsZNChFWPUcuSLJiLWdFkCtRm9VCjiPEZwPzSb",
  "key21": "2LWaVhX1QmKXKMqwdMSbYFitFpbXNuUxeEi7hyyMCCftxyq5e6gPMXyALvCo7pWM9zMkdFYb2WX24Wz9K321cSF8",
  "key22": "59fTwC1ajjNVt8NrWpSL5YnnUCJb71deRqD2uAke4o1JkCnXx8Y5bU4h1m7C89Y1dPVimWbSb69tVtXApkvYBJ9g",
  "key23": "5VHjHhpq9rYcDRxZLvZZc4gXeAbvcyTT1SRAc5Eo518a8zQYcv4tduhTNQfawFQuGaMsT1VkRji2p8Lh4gc87Nw",
  "key24": "b2bzpP8Zpc4QQkg9i3VdpkuBYKn4MfNfvNFnVxYi77GKCPMDnEH1rNFAir6opfUYKs21AEBM46eXQQkuJ6WVYR8",
  "key25": "vS9CY2CbSXgzCvrbUFT1UFVFtwQxA1f7GsUm925KtBjgVhHrvbqpppFAjvFxKrX4HRQfysHaTxqQzrELRnQmnBJ",
  "key26": "5Sjjxp1Txjzasz6dB8RCwfXYGz6DkAj7wUdJpZTHJbNt2WtkKpE3WcNT7AdHCDteyViHbnK7ZTP4M7gTCijxDg4g",
  "key27": "31iQWLg9jv1qWySE3iEiefjZ5vbfyhmXDFyUvsEjNDZeke1P6ePg9EmHeAMXv6QEa7H3UhuESTRFWgr4LNra1wjE",
  "key28": "51hK1jHCQurcSQrE3akqrx92VUMoyi9XUSTz8gwsdd4N5ryhhaMXcduH1YAbMqDxpf1S8sn5HFg4MHj9YLa3czED",
  "key29": "4okUhiuwz9ZPP18ErhATUtccYizS83MDMdnt5FKP3WzpNsymjgtZvMUWLk5yZxmV58EEdqmFuGPhCjyLgkjREqew",
  "key30": "y8ZwJ96izZN1PeUnFcwiydQnc1V7kLkncxDFgSm5o3hwXLBiUzLeD1uAyNuhRJ2pNobqVsP8MuNh2u534FPPCvk",
  "key31": "66VM8bnuZ9hNAYKfvr1u3bQ9mgHXCA7xDGh8Pw5832zsZpX9MDmkWzUNRz9HyNvn5dTJBomWeXY1wiSHPebVVKkx",
  "key32": "Ktic9NA4PAjyCsYXiVv91ZYbYNQJu8yLm4zGcHgCRg5QdnowDsmJqf7w7TUPEWsJPDH9u9kvdyC8GqxLwGc61K8",
  "key33": "5PBSg4eSvfUbPQZaTypF2qb3fkKKv4jRJ8TspTHp1Xmb9PXp21BQTxg7PiAdWueYsuq5XYY5BViQMK38er5BqFS8",
  "key34": "EjUAzNam1vVq3pG78xsNsrW8kZtztU9YWdBUgvjizrikrYDDZm3rnQTaES5H14YjeqaiqrgFUK4YJgoQ2Y5mFZF",
  "key35": "2fu1SwNjoVV5Eexi5CHeFZkcSP8DUSh7kmbMFm3DmiyZnucznxBjbmfTeyRxNfZAFD1xWcyfF2yG9RDZtFyp3N2T",
  "key36": "4dcjbnBpoE2Jja2e6qS3yUQR2VwTYCMmnFB4reiux3scWE3k2cAK85AvcsonZreGCKGjcWL7i3gXCwydHV3pGGj6",
  "key37": "5MGpax4MhdWu7oLvqDxQduAG5UpzasPFJ82QbCYMHrtZmmh4enLcARkwV5GGekXgBtkU1UsTe4vLoPSK2KGpxD6E",
  "key38": "41ekdZy9NKZvtMV7PF59gdXEFB3K7xrm2Dx6cMyjqVKK9ERUHtE1DGtiLUjsVqvq9XmuUW91cn5jDSvWdbnyqX4h",
  "key39": "2oxcH57dmNdNTBV38dbWpgVLG7z5Am9Z9RnaxDsbVfvPAbhfseYHxK41ykRdyivw1tYdztA6ApvzyQdDYGcsMJzf",
  "key40": "2hoZD6RZogXfEqCzBWrpRAasp8crFKH8VRfJGKWrbsTF5BsVTt4hNYm2ayT42nEN5oFXW46QGw1AVBBmqFucxMJy",
  "key41": "2gm6wFUwHvi13UvGTYZGNv2DUsSdcbEPakqh3qY8btcmAeTPwCWatkeRKKJ621PaCvsbusrU6kVTDhWD3wX7YjzL"
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
