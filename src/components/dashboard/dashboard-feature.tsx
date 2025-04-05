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
    "4nPD8sSfyugG6U33eLaxFNDn2zuKnRdUHZpRf9HuFVXYde6387wJ2S1wWWCmguX3dV2oya5c3G4t4d8yqmDE4ynX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Ui4vEnugdmQcbCGYNHbwZ5uFap5nSj6zPmpVHVTKLyYcymUUfS6D5SMPiZy4zQSnSfJzCPPYybLtWobUUpnbMg",
  "key1": "3PQtk2avvHEM1ZkGhNTHLbivKBhcC9UpceqWTd6PJxhmseE24Ea9FKd4hyypbVDyYD6NdfbbJ7Fc4kwvJ3HNGBmy",
  "key2": "5W6JuyP2zHroqna6WjJ6HEkRFgDNDgUPdLFf99N3mvvn6NHoMcqfNVXEyQKQxqSESr3xzEoaqXLjYLYLQkbxYM3C",
  "key3": "5DYBbJdqtT5izSWrH99yU6mLQUnFJbke6BqmUXJDyCBMoB9V7SiWVe165sVJ66oLkX7pryfihKaB6QhEhRfHeRpX",
  "key4": "3eUYtRtnvfGmArBc2hk1Uv2L8qNHehQhbrPJeSPq5J8v7zAkSSvsqtXKD6FQt8Tj8KeSzS5PenqvtjMWVEVuhtry",
  "key5": "2upUpAy1JVYpLf9b7SpadoyPd9bvWWF7gVQs6j2nUC2xaPmiT9nR1TKuUTEnfRoqGC75RowmcKBze3Y7yu8tymVP",
  "key6": "5MZ2Taz6VitjwXdvW6FhtJVY7DnEv6ZkBVLmXKS4AXsRhYnpmHUHZqZYatc3bjWtZApXTGkSbr1w3w2NF7PYDBwJ",
  "key7": "2FHbz43g6PCqWWmotYhmvkbimCdSiXXou32xJXcTQmj4NhguEs5YLT41zFiJkPHwtdHwJ16bVdwQ1giAmhWsX7Sw",
  "key8": "3NvBXUmEtsFFkdugCGk5qLqDWYs4KHVD3CJKsVGPwVyHJMUMUDdqtKSPCBQE6B5PdNP3QP6rJJN16TDyvp7Um9cJ",
  "key9": "42gdwLzTWcuezL8zQSNPs8syFo8zogkW7Ka237dkCp1YenGpEBWG7TSZTToDyRHi3qnxrjzNKH2AUxa8gJLpG1Yk",
  "key10": "4wtGPfUrMSC7Gj3tkDx5NTbJQCAPUntCUAH3HJH7vewAK6vyyEKUJV3aYemPqUPt221guLhCWmRs9VxVNrrfDWpB",
  "key11": "5HFMxBYDNSEpNvCX2DZX7cgrKe3WyKynPCnTJFKpCUzgmdAoCBWESVoswpwh4Zga8evr7GhRKCy2n7hGTKnQ8PvX",
  "key12": "5BovED4DddDZQLbntV4Y96XWRq9eWsfVghfTtmHsmCE85T9oEhbSn4E6taNVSMrBLXu3V6YiboM8yE4FZgPTnmhq",
  "key13": "3eN7Mo2cU6YPZR6NpWkUXVbp9XjGwrMbTre13As3BcPgMK9VQnYv2PzoDvWxqzxY8nT4CfBG4NyfwLMciR1pA6Es",
  "key14": "5jgKwNjRWoWEyzPX9C9eT6ek67YZnzPyycPaqGSi4cT5WYpuCgbNgRtuw8P5v7Mce695ZyzhHtncwVpiMskSPYPS",
  "key15": "3hGggucMX7tv3qSvLdmsr6jwdRndLHuZpMxthQEWRTZqr1WPfxbKHA6qQwhKuYqdffzoBqTgi3y5heNB6Rgg8iR4",
  "key16": "57YXfqBGptzJ1VA5LREF7fkM4udVBgHZaiUGu4YGKgb2Nvqjzq4JhE81mcUBDEtYb22r3WNQZXLtMtq2TRGCZ1r4",
  "key17": "5LtqNLkZ1AdjKFjX3Cd5J1GxnFRyALTDfCUVJg9P8DPQVnUGrXzgqZH4KE4MfSxdnzeZuiRc3pbxVZ8ZNmUbweUG",
  "key18": "4mBw4UMmf3HxWMftifDQitDn1Qv3nFq3dWoHsvVdCAxNRsgEzc4bdwoAYgazvqvXiFzVUMYRTXyxWgDszgTFGr9C",
  "key19": "kxcs8y64vriRZpXwgWMZPjzady5oVpwPwPTWRnVDbwKCmkwcYFGpqYfzkJJ54U91nHFA61xZX4yNcyCoSLpYQb7",
  "key20": "cudYiH5cpBjQaJ5ouWfiYfg7f6zmMGFbBvnbXQUv22jjHtVLR12HEQka89959vLbZi1WWHWbkm7xGHRoSpq9c8n",
  "key21": "45cp4ngVaBHz7LF8QihvH5x4hSdTtgyPmg7Kus8oPfBtJg6PKoD6SBMnVTNLXfmDyhyJ8yonZjfhaZz39DyVf5Mx",
  "key22": "2DGkmaz7AwchUBkaAntavLJoMomF6Uz4x19ETKZq8vKj1Xo87sViLVwJH5DWu6AwWTVyzfoPZfgVXCY3fP3yFNMV",
  "key23": "5wSzjodNvrasFec4KYmYjLey6aGWVTqoQpnBUHA8qaDeEq6ue2TdEMK7YrqkfdHJjfy6GCdfKBmvMvkqP6yJmf4d",
  "key24": "4jJeaAJZ3YvKYAAESNM4Ghya6QxSgiCV8PQi1KaPHrCT25LSduCGMtrMSMirQ8krtSerfJ2YUkg7XHwSRcVWtjAD",
  "key25": "SD7TXHx1nSzgP9NfU7xyw1HHQ2momJCVaycua83LwmCu9fvPp83vC2KuANKG79dP7Fzm4p8BckNXJH4j2FiRk1x",
  "key26": "DuWHSM3NohrfmeLsbBcX8msBtb14yywdwxLd7P4PpvXeWnb5KyqnMUXihJmUZvrR6sxtbL5Hd9gKSnK4gLeGhM4",
  "key27": "4zuUf2TUVfA6rQdpV4o3cEyCrCL14iDRrqDAuHkhptVt9KNVcXerGqqbVu5tvd87HWjNXeaKXoGP6LgtfSuiSdDd",
  "key28": "5hzdN2VgFtA9RvhGnXb9NBAR9gwtougnwJhnoksczS9rnU6GzuUT8FRDHHbnRVTqnykWMGgJRXoG8aj3W5wckLVY",
  "key29": "3Sf1FQkPspGRbwbm54hhAnRYwVD1aEFtEzeTx5kohLY6EJZA1EX3gfJkBzFeyMb39yTrS6A85rsmBdiPSG8Ard44",
  "key30": "3XcDDi9Gb7aB6U9rqWoAAXMeZ7N82hv4gGWfnA9QDqFeC79HDvZWZSx1HzdacQS4yeEjwbFiW6r4u66j42ZeHEuT",
  "key31": "5rpiLLMWiAvg2WeS6k22so6eVroSexzh9fL9wLbvwzmTjHsuHKJM9Pg4aJVEbGZ3sp7khk5SonqFViKQgH2c2xDs",
  "key32": "42ByBBD2rVGu9wNPMytgxv43WuHN8Nej95CcrrpHddwBssGcssAY23RcxaZPUdNy7NFSjmvNU4yijk1UUnaWaZfQ",
  "key33": "5ne3WqQv4brBGbzH3mPLkPpr5i1tDkqEdUS2SvpefjvyA58uBJnL1Y2ikUe9F3mbDjGfpKQxtZsTib5QuZaN43dE",
  "key34": "4Y8RtavCPSXPJT8dZjqzEU8SoLBX19MrhA8otPHPDDh5JJu2K2yZ6hhmHQExQCfNqKZ8TpGdgJyGvw3Bx3qGEvDB",
  "key35": "2GD7kiPeyUsXaDG7NpXrYenh8YWkXEJjAuLbV2sCkZesUS64JNoPrWH8jpRrUvy83hSf8oMyb4YMkmHnMcJhWQYL",
  "key36": "4CjvyXdjCvNdLDjEbGykVmRn2hnH5MxVjPuE4fbrSQAbhZKq41WLom9pu8VrEJTzcU7E2C6a9V8VbwbdfbVFXd1H",
  "key37": "5n64rqKvtmtnnsqGNb5WafKxi1E44CxB4ReSC5ToHAb45rtZCZKyrD87grJCmfzLSAxTbtcr2DLtodT6yJ1HLb3Y",
  "key38": "36TA4ZtAptiNXj25crU5VZWZnuZDbn4Uo2S4MgnJ7anC3NUmKCeVCJkpMCdUQEAJJFhthm6VuU4o5dzpRNbF4LzY",
  "key39": "2eo7sivHE2rU3kEbxRu7oLQrkXBkSQprhCPiycitf7m1xWX14QCapNKu4FKQYJA9ysdYRx6M9u5XQke8LPYU7MKr",
  "key40": "4QaYxPmKKU2KUqQ4Kbjx9VE5ZXZyTDJFs3Kukfo82gMdhnJRHfUgHUMxFqYdZnTGs6nvhuqRSekDvbZQtFeR2xeV",
  "key41": "3h5hxaRtWPF1Y37j2v6ZRAnyvRwBBygtr5dA7P1gHZUq5Y3mJno9d3ZVVBExiGLin1DRf6cyz39MpbzCQBtqt2KR",
  "key42": "3EAtymQeN2N32yb5jdnpuAcT1MBMHjQwxoPsag5aYLCtxwUcqik43eXCkb5Becd85mZGWKwvmA7KskTdi8x7L9D6",
  "key43": "zMixMpCvMiwc3zrMYqPktB8ys2Lw66djEXo886qMnXjxWTog2Zo48eeRp5RSEq3EseDaxkYGTHs3xVghhTZ1Fwr",
  "key44": "bz3hF4RThKWmJtCpYGmXBGj59wn8mAQLvSwe2i4JvjpsGUMUKZQvLphjvg5hUKfY7VfNQna1fp9AKH2MxU6krfS"
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
