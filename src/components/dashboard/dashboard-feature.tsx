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
    "3hEjmGadRHYqHELujfG72K3uTyvbtK1xQWei1H7B1JyYHMSJMtZf69bPHthV1VNMmWQ6zFfumcyVchPKBZFdhBBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MXGcGpEZ5PvhxXmiBjKQsfHrKUFfE6TQHJF44ZvYcckzEo6BAwYSGRst3HdbZ45BpGM5y1EhBv68wEeHXKjU7zn",
  "key1": "4RWmx6391Xbzys8m2k3u4JNx1hSCFvTkWBRX2hG2CErrKcTmxKLqKnKEVMCur5PLiqMZNmNCiqukxrvufTtKYYJS",
  "key2": "2NrZrvVTf1tS4zQg7BbAAcwZbMtGLpxgxjAN9UFhjQC7CkKswE3F1PLWJZfFveQ3q7eHR7UHCrPD9NB82z9cK5dY",
  "key3": "X69aKj3ZiUXS6sov3svEGzJSREzwjqtCUuEjdTm4J5mNoEX9xtLUaysrmBAakztJbXUDtP2qte2VWTGQaG8WquM",
  "key4": "3hjohyvm9Mm5jYd7VD5ppHoB2jf3fouL9y5f4SoMUMqwwuYFVhA8dsoi6xBVnx5Bzqo4RYkAGHHVvkQ4rebbXkzX",
  "key5": "5oQWTNtmsUQdFVSdtusGjw6LonRrZR99Zcp7TtQs6kk9ScRkhUxf9JbJ25U7HrymtW2Wfq9kZNXFFeNz9cxVVrtW",
  "key6": "NbCAiZbX5cYiqSZo229ZqnKnTRZxmG975vwsFttbpUnj397PZhLsFWXCf4YAgNK8SL4qS9uZHtkjG1iMDZY866X",
  "key7": "5imdf3fED8XQqDFbE71xYYtcZHZrsmxhjxC399QsMgXiAbzneB6ugs3rJPKD1NuQ5EEhEsDJtUySZz28BBVghq9C",
  "key8": "KuAmod6gHPRQcLD6jVZtXh3NQ9raSBiVUVtSiQjRefSmpr9pJz7FWcoqnhz4rbKs3ACqkqXuHSikyKmeF7nSEWU",
  "key9": "4eybbKfHDUCaQceV5Agwk51SVGYm5PLtaZY3tiYX6eqJXupCugMP4z2tbPVbPPyDy7oPJExs2CDAG5B6RgNk4sys",
  "key10": "3ZqDS8V366m8xWGoEBFkKw8MiuRKSS793Vzb8qDn1AFxjaU3DRWrBmTigvtbxUBgipeo7ZibSPwnUdSMce8ebMbL",
  "key11": "3syeNv3vz9mnJL1wtcfX8SNFffXkyJMvv5sjQWmbhgj3M6fgc27yJmo86j3zQMFvUCvJV1m1JYNLjDMBcQeLL57Z",
  "key12": "3dDz1dukFgHc3psVSEi1BJ1tbqwhG7tYg6ajkffiQQcGjbCy9UQ72wwnnsM3hvKM1tm2oBNmyZdcCnRD25aSRAso",
  "key13": "5WEZ4Hihb1Yah4TDhw9bzGpAfm7y66PmPUqwgDkyntEhArVNyvPCEAUZtFxZa7rTnGdYsXHRa1wsRMXmxCFtsz1P",
  "key14": "64FVXD432frXqTuqcqe7jvCAxRZfQroDSyhEvg6LFHSUZKTkCcN7xjNfGjGQUtbUqzVfvpwYNkwBBXV4JQoiktkw",
  "key15": "5636iKZD2ZVjW7xroSjQrzUhbfoGnDUEeERmR5XSfo2RntinRmAW9R5UipHJYJuVfj7QNdMswSWEFxgwsAe6Ju2Z",
  "key16": "4pGastDwLkH8wt7nfzfvGtFHRrGW1KcC687D23Ln4vxqtLXUQnyJpCxjto6eqBLdzVhoDYrjJyhu93w9ojn1Kado",
  "key17": "5XT7M2QjeVvJJngtonyGBaXLcep7U51CjGr8w43ANGZR9977nDANjBwC8fACf7xvKRGD5TKsWsn9REjpe3NoXTqd",
  "key18": "3mj6VdZcERV7NSykAiu1RV4i96Gi3Pq9BfD5AFkiGNuTRMZPQB1hLqQNSfkfwxEFqkPEpbQErRV3etHJNFpMd42V",
  "key19": "56J4bSGZXZ51fwxhJEaEWQvPazZmNxjmGLoAxLocYqYAQF7Fuk14V1X4P5Gyq1Gtb7g81iMCi2MPsfsP3hb1FoDJ",
  "key20": "AqdTBq9YoRE8UBEmqoAPsRdJeLkdPzJQDTwqQuS22J9hz5gLJavAmRzFKz6rEHDtQf16KMwbvZACsZaMispkiJS",
  "key21": "2kimDWTz5N2sBS99y19y65amwYALX84yiPgqNSTUCRGMT1itMddoagvgJ4jYxtDhTWBTw5ZTkd5svx6tV64FWjo8",
  "key22": "An4SpN3vTe12Q6frDQ2dyYeXtViZ8KCeyokKEd8bTcbWvAuc2wrSApv2zDhtaEnFNNSCJaqpgFuVkfB5wR93HPS",
  "key23": "5R765rfuPuSoLuAD1BJVcQyjGGjTgvEioE6t2xdjkBjD61jsH89zit3FbKBfGtrd5SFpqmQpVKFXSADGeYjWZXDs",
  "key24": "4JtVng1GMxmNhjQa3yY5PF7tbjptjJwoxs5PaFPMavavXzMdvxoRAAPc5Ya1p56BSRYGCKeL5C9R2e8AASLbimgp",
  "key25": "5WMJHBdJs9K4vGiqjXrKkWjNXwcjuua5h3PXw1aQU43jrYafKLcdrbi43QxFyknZdMwrFBwdwnByekgZupgbCLjy",
  "key26": "62qbPULx2gQHyRXqYhp129c2AnwhNpgspU9tz5bFvcPp5rutgsfrEttKzhTpweE9sjK2sKuuNC3FG5K5iGPWm4yH",
  "key27": "gMdCbdMuwTEGHVJvZdPWNedYxt2B63oR4JitUUCCUM7Fb3nHcUQqtGppTv8wa8hhMWgN3gWMbXj78cDgeUfKuP2",
  "key28": "2VJYDxbDqbHwYfQZznkxQsUsLB74vodWkpNCPcWnuAkjT5iWBa2CM7HbBANHejjWTNQVqn5UxcCcMEY25mAB1vtF",
  "key29": "2Pv1S3Q5wVNRMpGJsdn7LtEZPuVedyWzoKTWGzHV9NeDqyS5S2GZmnzwdRHUTGtM74K4y73ABEXaKcE64B6RxS64",
  "key30": "5r1cPwcurZrtRVuZJeVRvqiMSCUDu86BJBGV4d6nmoogqxGbY35hNi497W9CKZcqRxDh7vnpaQuvSmPg1EkdWv3n"
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
