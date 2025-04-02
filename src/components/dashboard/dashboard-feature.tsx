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
    "2PCNyedtv8khESC6DYCA2YLcGqBwYxypRYpNJUax5uRWLzLaBFEuLothfhGeZUUyRomDAM2nSCja8KtLGoW6fkYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tLe9qPRdYUDXHahyyaQ6NrEPLiCrYmyq8zoGLnTPuYGmHMS3w9SwWg3WCycDq8eGpUzh3xDE2rVEXn1CR6jG2Ka",
  "key1": "3EdSWSV3BqE2UhLZ51gqRiPy9HbAx7o7DC8L5caPpiNNAFffqbxmAewyvJEws7FQo4x2MAmtqht2CaSs8bo8ratt",
  "key2": "GU4iZFQQet276QcFkXxmC7FVUaV3xg214bNHrBa7un3kCabNCoq4v45WwHr4AoanJcZJnts6x1EETLJCkVbiDqf",
  "key3": "2uV2g8WCJDbGjCQmYgymDVgfLoAmXq1jy6PWHArFbDaHEMe4Y3p3vqSg79QJRKKbSGxoBzW7kit4Wnb7WwAjK1S",
  "key4": "3ig2yN8sJQaZwpCTGo6NPAHr4ddYoBfzhDKLbimodcA2gQkaynLgeikfut5QpM2sNkVA6jB36gA4sEyLNT6E9kg4",
  "key5": "Qx2UPqcaBPTigRa8cWTRxhANJ369ovFBRAVf61i8uKGBsxVGKgdCSmz1VVoya2TbiX2BDMswLeRY46hAVVZgmHo",
  "key6": "5rDf1Zw3Bs6p8uwcPrCauZ21gJNFvND6fcEvcekWdKDvbGoVb6UXZp9qVHCWn95ppfbbfKDjAdtZyJwaRCkAkux9",
  "key7": "nc34rvbBdr2WTTqi7GWFfRBQ5et8UisFamVHcnhdGV2JjHH5fgM8k5XUzK1jBdpZ4dGSCatC1TPtX52ta7JYTv2",
  "key8": "4RZBE3rsn8AttKxPwuWoAhwNLgwVwDMoFcSZe1MeqDEfbhcyFRsxzhaarZrboRjkgiNMrFr2VncC35QyFHReaRkA",
  "key9": "36irDcpdV5MXwbwyE2ywfUvcWh8R36B9vV4PXWjvCXWqWYwEKcAYuzV8VPePSYUxptLk7a3ceHbsbVsKqgfyrfnU",
  "key10": "wGfi7KZgVSQ89JpF3VXeeBHxSZjmoBQo7KooZuoPFus46a2rZcF2iw5hbL4vCVmAHYKuu9ZDU5NB1zC2C6PHb92",
  "key11": "24smbfZY3DGU3xD6wo36oyFxy287JzbTTAgngeaXMLhfY3CLg6cv1qgVgV66fxbJwzxXKYGk874JyU11vG2W4wfk",
  "key12": "4TnBYmbNY28ocTEUxeb5jiiC2wDarA2kExyAD5eXeiVwAKVCd18AbN2SR9kjEUrx7YAfw5iyNuYGNU4thqdCjCzF",
  "key13": "5tYs2iga8L6mU3XjLt4W5eWHBg1GMd93pqmM9vcrfXcejfB74ofQLoc9HfhWUd7LAaqk9U9bayktatpbPNKfkmWK",
  "key14": "4ZosLD7AfyfMfttrJtG2xZfVTsu6PMqm8aw4RNYHwn16WrvrYBo3LnBK4jgDb6FWboT5nXqcUXCbkYnpG6CnDSiD",
  "key15": "5cbkdjTPbm1sTcgxaGE6XTaVvYarKGTPYhp2K3vrJpdm4rkFt3zG8HygYPQ7Mb7Y1MswExHKvJsPuVBm7iDzypbT",
  "key16": "38EGwXoE4Ym8neXrudZRZQxVbnBmChMHhwKAmB8rPK6yaRErNRxocevDdCZLbdiAX21Tc56DaeQ7FcGPgkYy5vLk",
  "key17": "228kfnhGAJqp6u2kuoX52v88CCsh3KCo2xT6ka7mE9cKjosELSTLv2isiNtTTeBZ7hKGaz3BiBG3Eyr3oeVg5Eed",
  "key18": "5yTGYgAVtRuQGv2P6ijZzXAzn6xteWr6ybJYJoHdC6bXuQAsFDaA7a7ZDQF4Aa6XBw63qix5v53VZP2MdtpcYqzv",
  "key19": "5BTNhTph7S81gTDb6Xomw9xJH3an3endW3WNbx9RhNeVBBcwC7k3kCYVHvEANEH8EAZd1Y3BYJvTGSkspg8PajeC",
  "key20": "1xHvVgvbNByFukgJigBGE5bCEJq8qDndcNbcSNttXUayV2qPATLK5AZTRozKQ9AptkR8LUx7SoQG7nf9yfqhfWV",
  "key21": "3vF2VbwwdcVq6p9cKtmtBgkXUqjqMqGaJXugpvxBnMbSAxc9YLxczihG8fwV5Lc2jMvVAC7YCVs34Sb9Mvf2urvR",
  "key22": "i1i4untrfR4zogNdLa8Z2r2xdcqdjVCJW7nHTV9UTqnKZim4KEARPNyQ81VDFnRex4JiTXTd4jo3vtDjTCXsyQv",
  "key23": "2NkfB2UDquqnqmunBkAr7PwPzBqtMeH7KV9t6aDojhjVhASmKzpsKpVKkVuK6U4pxoUqKnMx1P6m9U4xLgcXnBF1",
  "key24": "56Aa1fmuVUsffZRVFrum3LgL62iVouBBFS3v3RbmgErtMhGD1kGhp3jKTDSfXcVkUVeZTeDRbBMFNK7hXwtYykwq",
  "key25": "3XMLAjCEqn4fJPuafFvVjRxdqLNoWs4DLGz5RYRqVym9iybzwcNyLPMAzUAfoQ3kQsdce5M5JbecbyaMX3hwLLMu",
  "key26": "BRjPwayfBcfL3nvuJewAPdXuLMWFVsJzQFSY9kDms2UxYADP4odXJDNN7EQqF8ST6oXLWiWvdnhq7feKbH16rYH",
  "key27": "5MDqHz5N4suuouUSht7ckvrUGB9AKg2w4eJLPYc7D76YbZ6j9xj9AFgF6GoDZ2ifs5vYHu3g1PkBxNC9uJuaeB91",
  "key28": "363Ar7BD1rmv3TjWN6TSAKE2d93Yw6YmBPgMMjXuNAwXkLD1wBtxEauzs6KhKSebGHkatV4xtcLQDioRzaZJphZw",
  "key29": "3oabRp3cvZzNqSbshRF5cQCtD3BLunpswLqk4GsY9tiDzGtUXpVX8LCsc3PZWj3UoMdu8Rz5Pi2Vm9mR3DrV2Hpr",
  "key30": "3PsShhkzpLvhiibbTgHia3T8fyRhX9kkzrXM9hAc3CxvU1k5UaLuddQDDf91mQHz72rZZ9XZgych6Ug62xKHoskA",
  "key31": "58dgFeFCjW8Q8VszA9GYWxRouCSabzDE9BG1xXxhNY9b1ECyLhhWQ5RV6Ju6CW5e5BiN9iyi828bRxeon2avP7sn",
  "key32": "4A1qJomKZLrt5RjuuHHi3vydRQ3cQLKgR9zJgaEqRhDRqH7JqyCMMhQAR8Uo7Whf2Xq4YJdUzZEMVtdNWfGu4iQz",
  "key33": "Tx6krdkjxe1DMhEDM9jfY3EeFfB4xFnWBosRSXBWZciDtbm9EZwu5a92sRvcgM6K8feS5AaPg5KmFZ1KZd9HWPr"
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
