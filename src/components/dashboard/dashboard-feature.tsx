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
    "59ETiWpE8u8B8ytgF77sbcswuTy8pA4TXv7wMihxyWYAscKLLUfvAqdYRLw4zwG5wof4GEnLMabbkUt7zaVY76zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgnENDJUMJ2edrv8ixgHKj9ypCycoqsiQ99bqABoonGibtNr3Rmm4xm5PiU3nnkwGCvUxc2Q5RFLg95jZfZnk2i",
  "key1": "5d7rJnxNTzSTp31q8JMtdx2emjUX5EVe41HUp6n6GUrjmDwmRAXHFvYw4xG1Dzz2u1d34gjBmDcWqa3RHpz3u94g",
  "key2": "22KShebr9vk9FA2uT2wQBeYrjwPTBnDLH4fjRMaMcuVYQCViaw9dYg29Hfpnvn9TDbmLG4YAE14BwBgR2kYbFvZa",
  "key3": "3pBMnWucn8b7tgmupkPgiMWuo5qszzoxQTz4BKmwPt2VLnGsEbKFyeKae1jHctF4iMorULM4YJFjVSaZEqVCysTU",
  "key4": "3NMVNKf3fCtmjwySXzbrgmjaMwKftNSFmejbsS3yknqXPdCScDiqVSvtdo8APCYvFKrxuEa3dtfQVnLr6vahmJ8z",
  "key5": "58CLqHXMqetrF5tB484eGrMBbyKgp29xL8Pi7nRaorop3erPsXJtKrY6ifUzbzv3e3T59vvWz18xx95m2NpT389k",
  "key6": "58nhdkHYU9gxjddA5ccDzcn8aME6n2JwXzEPTtfdevgHLYkFdrqcGSzeCzsorC7Y5Y4p8cSFx4BYg6rvBAS6pd3V",
  "key7": "3UmLVNM3wArq8yjRufyUw6hwmTxvNiE7RDivdmBiwqT48yHpEJnqR4iewG9CnXYRhi8gvSFc2mSnKxEvczxUzJk4",
  "key8": "5VFuXCQiaDNHos1igpkVdVibHCB9hN75PaHHNy79FVG9Rrkks7wS6xLhQ6c1rrYv1N4Z3xfa6BBEZXgPrx6ELddr",
  "key9": "3h3gtHut9n3xg9qqXRjY7ve6sDkTit5wyivp9jEM6hsUVVHQWdob5So9cCLDZVbTbsUtbbaJhVHvXAU2xAjo2G6w",
  "key10": "52oKzTbNK7VeG4QXArjjgNn94p3kSa4DKtm9ZiwYyxuTuYbEND1hVYjRnVFtPTnP1WbVRNypfutc9VdvzKKszZok",
  "key11": "53PQoxnhHed3EYQQqvhuzPEtDcvn6NcTqqs8d3QfFyhzdjYsmECNvhMKSsYWRFfcZ2a3WW58VBjSAJcwNg46GCaA",
  "key12": "5WmvrbQwMaDKnXqibEMNbwBsdGQzF5Gy97WyyMeKYJrHiTQvy4Vvhp1co4wEYn8tze1QMfVoGDcyp4JLgDrJK5T4",
  "key13": "4VAXgtnEP73Ck1Q6LcbBdVfuuVmizXRjmve6jJVSHuX7FNHnt2kkKVuq5KG21fWf3FgVofYR9SLXbM5xpPznJs1B",
  "key14": "732zKzqfrYBKVGWCtqsr6zXvpirsnSX9a7K9M6NN9fjctbcEFugDe9PG4YD3DhnnRSd8b1F9gntgH4JcwUyy8h2",
  "key15": "4kChCdSGaYFJkxTTPvqChy9AmLZo36VisVFx6Am1iTjB4S8XinQcAQ3pKNGe22hC7mVjXtzvWKPqTMbKKHU7nbTY",
  "key16": "4EvoH4Bjgj718X2rAwBVqCVL4ynvdG5J6NYmZxQGnMKVNNcg91ABxXgWfoyzXJhmMiTcTKmUBDyfD748XDWH1nDS",
  "key17": "2UWoxn5ChKgmfRLcMRRRdgfEKcWvVJuw9stzh8N7n9muNdhqJVe2mtvSwRNdznhg9ZbWqNDFUmmtbkAnarv1DuE2",
  "key18": "2ykGuXXZKMQtehYFFKgvMnw5VcFyMBmWRte35yJxzyRbtWJmfZe7Hv56ou3So7RXkiqNJceNs9hhDG8dWcogrwZp",
  "key19": "4zSvBn8KzrsZmiuFooTVLXdTjEHSRtWJnQ5zSgrS4SqZpT3KosFSCkovijL1AyiU372HSEqhL8xnJQ9zqPSXpcjH",
  "key20": "4Q3dyWke7gtdmMVFN9epybkz6mdahJQuccHD7Fu74KFxVDhvJANvs6axGqENd77wodedGNrB9AZaBvWtSFW4AyG7",
  "key21": "5wWkqgn5SyMEYGpV99oNcKUg6H3qW3QF3SEjrtAivaMxpENzXbaeJXHoAH79MsSgZRrj5Dkf38guBCjeRtDg2DHc",
  "key22": "4EHo5S8AsRieZC5gPiwx473zkkNtyYfX929ifwEMaXu7VJK2HGAFr7CviMPYxPELecoqegeZqidZCPtnAvbSqRfr",
  "key23": "3xvXmCXXao5a1j8zVgJnnGX2MX5EgZjrRDHFnGUZ4e7XPs9vKg5QV791KRtkmR2RXs2zpusD2xSDWZVAMHRsPLq2",
  "key24": "5wzoqeSo5zYKNphv3LYtHz24orMURjQRHxgTFFE3GZ7WYeKdsnMxpxraSZCC8juG2JmreoEw2TUv94zP9DLVtmBx",
  "key25": "2NKaLWTCip4jDRteYYjMS61gzynmYCBtoVLw9jBYAj9NLCGZ2nAdKwbd3A5frDLVBcz7iYnNvea6k8qUMrEB2rig",
  "key26": "27bwsLbBbFDmbqNALJRwrkwZf93R7N2Mgt6wvvUAnk9FmQvQX4YfWrYPZU1vqExKLJ1zkWUyyrwSbRkxYErJpB5z",
  "key27": "32JMQ2tTvpL8yruhNkmaQEBqgXY2KYqW1nEQz5NxJaKG2pws9M1yCPQ6yApbwAnestroFFd895cAN7D9euMcbNn4",
  "key28": "47q8hrawRKp39VqeDSk8383mJHNzFQ9TpWVEJFaQTHGfNyX9yD3ALN9AVSX6orco9hnTrDczSaUkTEKuB8CS74CL",
  "key29": "3DczD7dsXWNHd8sbfVz99mRHFDkRAGrdHhHKU1V9TPAD7KJKHaNcoSz56z6uiJamSRBhcVYSZ7cX25NSpTqSgmwu",
  "key30": "61TNc6CkspdExyCBD8KXVcu8sB6rfhSEaCGSw8ByzgEDkXLV7rJCAUqMaeJWCbs2oXAuFodVAAmhfLsLyS6z9Mbx",
  "key31": "X7yqrLoURoeeEaGtykC3J8Da22Wh2fgPX8BSYeKXaS1iYue2Cx9cM5Hn2UDMjYjjXEejPh45YgZYW1ZPGwZzr7J"
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
