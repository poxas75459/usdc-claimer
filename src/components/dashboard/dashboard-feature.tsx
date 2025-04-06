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
    "3q5f3CZraGLjgd84BKSW9N6A9tVasXYtVGVsjWiXZZTjTjZ6CUEwtTR9PcUpvhVvPUhFPsfGVYxvBpWnu1fXJocL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EuQZJb8g7btuTadMfq6U4ftZ9NP7o8gJWRvR4V7gk5V9Zfkyd9A9nq3Zg6YEi6m1zHp6UaULb4XJxBchwNxuPM8",
  "key1": "zdFMJT5cL329UEpBkfbQ3mpBr48Dbfca8chsR13szz5kgRPwJzuNtdC2DE9gjDMQN6gj4XMaz8pmMni2ukRebwy",
  "key2": "hFBRyNQMeZK3ESy4F4KTNE5Kwse75mELkBG3cNFqHeav53NzpzEiZjdwqGQJmtTP7h1m4bBDq7GceXtfKE2Mp37",
  "key3": "2NY3rqubWQeZs895vYb6benT2FyuqUodiNdxea19Dc6qS33rcA8dyyGpNcmPLKQrQAoaAuXG8vgC59bpPbsYPjJH",
  "key4": "53sxCV5rNqoGJsybc7ZztdLRC6U9xJN5RViW9XQDcRD8y7De2DHxxL6qURE7Yv6kFdRcMnJat6eLPq6hKG5zcqo7",
  "key5": "5UinJF53xbV5ycgfVt2m7zp5WpxLHBcMkdAwAaYa6JAvZQ1HrVnxbrxwRnkk1d649SZmhvowYdW7HUekPLsGzNLk",
  "key6": "3zvaDLr6sXkkuTHadmYfgakpP8BYbJvgTzK8RVn2E73vxJe82bT2n6fS6hzNLtBSAFXHppDC3GrfUmhmd5oQwQH6",
  "key7": "5rLUf9SRex1V26VgaB84donfKtmRtm6RWPxK5a3HhhZU5WFojR8aw1pTYWgq7puwztGwWrYiXbsMYvKsX8uW2m7n",
  "key8": "4HUaizfvJ8t7RR8bok5cbDtpChodUNcT28QajjwXnkKXGhJSX1hYZu16hYzuG4UcF2T488KDXReVDHvw5MRUa6SL",
  "key9": "2ZnAV6vCy2Qp8BsdENEQgK3zZepbGNxWgFmzEyxps4UQwsEzrj1y5HrbLFw55MboU7sQuU1bzrPJxCNdZzdW5cxU",
  "key10": "2h7f4pB6CuXfQVLoxvE2F53vgKy6L6x21qwfWf4Jh49cYpe9ikZVWecWH7qRcG1hX9SjkucxiyNQnEeq3sm3bY97",
  "key11": "2N7bzHk4TKWt94nnRMuKf2r6y67F7EJbYgnhttf8dz2n26LXbFYadkT2DxR1aBYtUUVwn99vyHEkeQ8u4KZJ5HcR",
  "key12": "DfYq1NuFBRk2ovjG2kiS3ioGkU4anwTTCLnigiRaYQXxbqfSLoWBoqqakRjdTgmLWtxR7MHPYfNDjtusXT6CaJQ",
  "key13": "3DBS8du5xojU3CbK15K83xvq3iAHD6WnUuQ7pqEaQvxJLfj4mdvx7eQGYsNejJ9C1K6pukrQN5CoxaWG5NwfRoF1",
  "key14": "rg6PEdxiBzt2hmBk7iEVfNx3HjhqGuiF9asga3hQEXjTcYGp33DPohaeWqSxjqYNiE6puwqLdMyas8KFyJ9kT2M",
  "key15": "3nuUqWfhZ3aPPvBpEjUx9Sr82gBzfqGdi4F1kF4MNgzfVsep5dNwM9TN3N4zCVxtUWRpKp8kYEovWUx3MDbJEgFa",
  "key16": "bbvqwwz87GvhZJtJevhDV98b6GrfsDGS42eNKfkmGVF2pJoo5FaZq8g2eST7qRaugSHdEj9c51sKNXZJmWDEt8B",
  "key17": "2PgvR1J2qoSDFXekjbQhozkWE2PwJk178aCtr4U5ixJ3syiLsXJWyKvPep3PZzkimDH6NNJSNxmJQWgNQGEXr8iT",
  "key18": "3yoHbk2Mp3HAnaXvhoDXLoKnJTGMXkYVbUxpxpS2bUEqZ7RdXvKF99iMSEqWNJ7Az1BZzS55p32Mun4ktnLKKEHm",
  "key19": "57XVfqVov2AyaAP1CjSjTNYK13NDwgC5reSxYVfwzbAkdHsDp9JLyDEmoaZHQD5TwNn1fc1J7fJVxKqhvVa5Fy41",
  "key20": "5Ur3JCfkAQdJ2CnQAS947JmuygeVpPHXuc1iZi5bXVWNLsnxtKXiP6GqFFCe37brMNoJsD1V4c7ueSc7chjmXqHB",
  "key21": "V7Hf1wBAZvjQxKsYBe87brwsZrPM5nEetnLqEXbeTgLaViHtdrDWRCFUW8DxTqVrrtE8YdNAbzR6EmDKPSFF1SR",
  "key22": "3AJVMauewrJTppZYXD2wN1af9UFPLqFqBaB6HGcDyq6zmkTgkMX1Bhex36EJ7n3RH9rtrv59zwAcFL12DdcrELvJ",
  "key23": "2zK2sDLCAsgh5vaYdDn4wxvWoJBKc6EY5QNcRLvqP4njKeU2sdyniGUBQ3WoHa7ok8UPouFZ2SxCUc6kBkGMPL4j",
  "key24": "2DA7wE82Cb3hHy9A7F1DRfwMvZVQy5pusaiG2ExW7uf5t9nEXzXg8xPn9CEqbUnGapuViUBx7SKfApPwuKkoNMB5",
  "key25": "3dnKfUkJq71ad2zYP7R8R7Ne2LbrxBR9aVtcxHhKmvyjs7fqJ9kJ2XDFpL1dNih93uhmK49QjUB13bFCGZDbHzp8",
  "key26": "3Z1E3yLRENHmK1XMMx5XTRToe9bpEbcAzfFBBd8snjc9htf6oDYvCi34LkEbtJY293qUrx5uTZL4XxyVYd6hgnc4",
  "key27": "4wYrUVtGUMMLQhXhJzw6F2C5PByW8gkW29vwH4jwsaEXfucQNrUFNbPJeT5MAg6PsE6Zicrn9tzBemRtaHyFxQrW",
  "key28": "5Q8F1pQRwmKvhfwWdSENBkpxwgwYabtjJw3MqyouMVuZV5kPPq2xKFvy97KiAfqafRPcfwGFLeArhcPM4enf5mxh",
  "key29": "3yXQrHqcWbGDmZU4oQUKBnbJXqbP8Cy12yqxmr2UawHZHc2H3cYtQAKQrA5QfrQ1JJke6zsgshKKLm5rovcs3uuN",
  "key30": "33obm3oWYXs26a76MbFJ4t5tK6XHdv42DoLeNmNS1T2PMvzR2UUtvCsq9NcZorfuF9v17bSWkK7M9kW2m8aNFeSi",
  "key31": "3thWwefnAAJGeUfEXT9heSRNhztfF6gHzBJVA4biLukV9px8DhMspybrgxbTaicYGHXhi5EaCYCjJNxhzdMhGYh5",
  "key32": "4mXaoajCSGEPqQRvaiFUtQyUa2YufccNZBeikj4xy8t1aRGWXS5TX9pvgfDZ1NKHUSw2CCaJtFMoJSNYpDu911Bn",
  "key33": "5UgaDbK9bZ6kQR8QiUPxDez5KD3H8CgxCXU6oLFoaqjwF2cp95RqmHn84MTQn9BdF3YgJ4hCkDCR3arSSVQXY2HC",
  "key34": "3PkrRACZcrk4kww4ktvqWfyQmU2jEVX6oEM8P4F29XBiGxAsjw6SVDc873mp2gHd1mwBQedpe1HgBxRFS4ttLkFL",
  "key35": "uPup8qgTFgEhbYgsQJAvDpivBb3ZZAPsVgduGuKB82G5xwCQ85xQ7ZVkKoXXAYgqvvC6hUZxemfmqDWE3zfqKkk",
  "key36": "4oJExotXp73X8xvgQuFkpYk9vpxBhFoh4EgWALWyxBjXKkyTm6DkVknw1dnyMNQYdiwLTQKmrp4HpE6BDC2XGRtU",
  "key37": "5FcjqPqZGhKiepV2xPSXLWnng7pD4Tevkx9NDKbqAfPghF31Ccip9nTE5bt7vGa63ARDNi4UFoKXkw4Z5EGShUCb",
  "key38": "3Ukz9NMa4rVdM2efvCNPQXGPZurfWBZ4XkgYkgCUjwNoVX7tYvc6t2xuVVdNdeV8Qc5deagg3rU3E7aB2NSQgph9",
  "key39": "3YVZgokukQ8a6e17hgFjVDNhuN9LBxjMRDf72952ddGW62dRXRxUjPzW3dY49bSQNpkDrGcmA6k8mQ2XTN71f5wy",
  "key40": "2ZZ6v1HFwujwiMj8HMmjk3adRqDtXkzNb2RTX4AZAVix9yf8VsGtq1Zi3mdz4XZixuBnWPNHzB8Yv5QfpMHATu6e",
  "key41": "NYBdYinxezQNHhuS39PwnU5fwUprXQw2K1z1G96wUDS6e1MfLezRYmSUeBUpaq4U2gZmJQznhAss3sEe1LpY4Pc",
  "key42": "4ZUP5ABUCq35axWuxZNuoF5LKrNcAehJ5mfxVtLUFApD5h5WwNMb23FApR68jkC9dkeshUaMgKY8p79dHmb6Jhm2",
  "key43": "67KQGuEc74SPP8ZpPUwtBdCGvEZ4AqQgQYKy6YMccD3Se74jkooHrttggAxw5uaX2HmQmayvafuLus6jyCK54Xn8",
  "key44": "4w13z7aiKknK8y8uiXCT7TmEQNn4CNhs3LAJTXBEHUXhGdxR62Pqf6drtjAazAUwiSH6y9nLPgqdF7TzLeqCrYSS",
  "key45": "2KBfi2miUyerpoNWTny5jENxoLPwXyUagMKLsTUanuGBYgnzxxmGUBhgn4SLqXhGivPA3BPb8y9NpwAF7bzo2agQ",
  "key46": "3Ubu3ongHeB9VLSpjiZioBA6a7Bq4Pjeu2SdcowSQHYFJe1hfeL77FpeFSGVjTkzwpHyK7yN2kbJSA78TLBDT62T",
  "key47": "28Mb1QwbZQbCCxXwW76GTEyD6Yz9iBXN1En77HHpuC7sFXfQJe6ge1STKeQjNm5TzKQkzqjifTxLsnrG6LE42SFQ",
  "key48": "55r2kCUEqQc36zwydTrUBnUGiEDL32CjQFsxdqKHGsEkRvcBrzm8sbp3zw1UewoVGPQBiTfXzvtUbvTWga42Ndz8",
  "key49": "5WaMd9keA4no31iRN1pFDqkd1uopxC51Z1pPcHbrfYfAb9DfCuyNyAyibKUqk9Zc6JtUtZ3Yi4E856rBM22mUBKy"
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
