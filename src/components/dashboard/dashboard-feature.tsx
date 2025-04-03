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
    "1FjHUcnwv9QGpMBMA41LD9up98ET74M96JsQ6Ac1t8FdKRnkrfmpzPDv62nV5oS8uWLaHD9vKFpzT9UBQYVJLQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "229MuqnepxM4nEXJjbkzBBsc8F4jHnNgSXF7ZwvYh7dGBt7q6W6QnV4dAVsPpwuXrarD6a35tmcjSELTzZoL5efE",
  "key1": "51KSkr9ud25XkLVGpQpucJwYscBe7NXib9vCEFDkdYSoNMbDD9BwGCvqkHBuboHw3t6pBW5EL2h3bp64JbGukhBU",
  "key2": "3zhNwdv6hZJFA2dQUsAeb81ogco5UEbLBPuSGo88knsSCJnQrxJtPwqER7wymnXV5zFTRgcfiCGmMMMauN779v3S",
  "key3": "2rUsv2L9SnyJPFbY8bcprPMwGbYU9rEgmnJwejEvjbZ93Jeawjs7tFdrLvm8XiWa5RkxrXMh2AYH9rgye3k5Wpi2",
  "key4": "4bcPvVa1jsn8UWiyEE95vTXZaewgob9Ko7CMbW96dLADghEJ7VHWiiaQZJ8DzEZesN2CxHMNnbXSrSo76HSSZaRQ",
  "key5": "5ZD1GSYzvdS5CQYZdab4qeJ3Q2Ykfbr3uZH6ZUh77GyzU9m63iV4HBARz8HdeYU9d1bR5Aq3qfXrqYyLrr6TDuzL",
  "key6": "2XReJuSFcdfxQsDdnRogk7fKMLURK64cadqRXMqDm5tefaq6eS6ArUptrEUoiuhRUGraDHiE1bUh9TgHPoKJULT4",
  "key7": "5hCK3Y1yQKWk7ny7qi9CF1HKaFHbhKmCRJNG1pc7SHiXYLepKZXgfnizayPok9HhSYNH65HxtiVZ6ocaqu8fCUiS",
  "key8": "4xXmFkECELm1PMHhhfAAPPCw5oK7wNhFjWaLL2CxYryz1NVFvgonhZGb2anhNw6oUMp7ET2zZDTUPmjno8dpDSub",
  "key9": "4YAagS63dtzr2xLsjQSwzJrS1BtVWmWmiRoMSR2C5YEfmzRGhNc7pohDNCiexpbVfijL45dWidvTkBxBqExXhUwD",
  "key10": "2VE2CJU1CMjSXbs9uYkUf8hwEChqLPvmNECpYKbZoV3disgx73Y1sBtocAhzyfZjTi8ZacN9gr3gjdvEssXDy9xG",
  "key11": "3w13yskCg4wrBx2V1X3XqD433xabJyDyyiKrUKiLzkNjVcG5qd9UEc7NQqZ16KxScFkVhnBzJXqzVRY5i4Q41TQS",
  "key12": "553PhTyhEzk1YLAcpoukNtvrWynESQFn22f6Px8ziyznryoV6TTmbQz6Qn6AeatQcsLqC6PX34r3RPbqLCA7P8QU",
  "key13": "3ia7CqNfungYG2RpqkdtFQV22BzCvUW8xfK2ioXA4j2fSoSFfJ3ErmVD2QZG4SUVp7Joa8GAQtZfZNWfBYpFtvBg",
  "key14": "5Vm1u3kHxhgMEssNS6z6PWJJVRbKzs86TuPegitbWXucB9mJALom6Nz9HKZFrLtGgZJ72kzXVcoh7DPw4CoLynRt",
  "key15": "Bh8LyW2ohxdfaHofpnzE2JLDaHhzFaaPB8LvXMYyDmzvKsirHZnDnxmLqXFy9zraYdWjUZoukGDSrDFuJdLBMGV",
  "key16": "TSvZ3jptdGDyJ2p2EDwZKBmBde8DZD6PUESuj6DnUQtg393636knyJu1SLNKVKLDR8sZt5y8dugnEyRFU1Bsj48",
  "key17": "2UkstkPuBjG1uDiH9G5fyzhW976z6XUyTNTmEcumxNZxEmafGjJkoiDg6Nt9tmpZuaJH8nFXF81FJFwk5nYeMR1d",
  "key18": "3mPKvcH3sVWgYb6tYkGtem3guJXDn84Lh5kViitPPC6JLbV8aEeagU5dR4GNc9q6GyjDeEh8huUhyJFcbWEdBZ7e",
  "key19": "3j7LACdFVWJu5vbD2AtVMU2V3Wf4RH7VcceQbNBWQ3Zdi5gCyaz6azobnGeWr7cf1UTCsz3NbNcfrMMraWxySyA8",
  "key20": "4j3uHJoCpgQPCDFpHbF7o9ATzQH9mWrjJFxnikevR6EJNdwo9LZAdcb8cyqcdWvZf79oUb7Ah2MVeGWvt1q29N5n",
  "key21": "3oYBnGvmmveLUqz1HeykGFrDBsAVQDxN6rGS28ukkWzAvBic2QuSwU2mWKT1rbEK53RdaRwXCZK7GLr5MXV2CWMg",
  "key22": "sWrpzJrfQ4Ew374XT6L8EANWJ91vaPgiejL42Uik9L77fjdtmrX99tg9Ro4V5M42mL9T5UQuf2piwPVjrC5yUmX",
  "key23": "2GCAsvrP8fRcn8rQJLRaBnRxR4uVbfZo7oXCzeb5DR8cweJR4e1BZoRLRh4HeRaQ9ByegvXt34ct86Zueuu2QxDB",
  "key24": "4Zg8YAtJN5piJvpJC7mzFWMmiCrHgEXRxN8pH1PsGagaNRSTZEZS3hW2VJwQqCtkNa9bPtFtog2Qw3vnmaBfh8w7",
  "key25": "2W12yoTzmnNnuf7QRzfRQayd2nwrt3zpLGuJVPnx8MMJ8q9ZCkBy5NWmd4Bwzuoko5HhH23kJYnzEKMJUhzf1fLk",
  "key26": "4zbrPcjQKs8SqrU2Mry5Tn9TyNP8yN7dhp5uAXY2aHxA7EjC6EbqGDu3QtuCkNtBkAA5ZxK9XKkiADXshjVBtwgz",
  "key27": "2FvWzhThj3Xc6TKQjfw7pSkGJAjDEKJdf7DDJTwsJjjHELq4WYFjJUK8YBikodXiYe93v13kxE3wyUuLT91Q5eDG",
  "key28": "57sSyXHtSeTS4UQgPoQcBYPPhYvAMdyCqDXg1LEWGGnHWtETXZ9MhnGCwsEfE5uuxLqjJmGSEBDGzfaHD3EqtF4P",
  "key29": "5kfSJUffFn9XX5tzuXEhNX5NRCW3w5VmBywfKq1Eimi28WF9SWHKd6cZeGVwCTW7xBF95PwJKwrpi4btGGMxFh3c",
  "key30": "NHrLkpHaX6pt7brKNs1fFWqEZbrSiXSjFtCWfAaFf5N6pRvmGvnZFf7KstXfkdQdEDX93Ch5YeAFft3sY32mrUZ"
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
