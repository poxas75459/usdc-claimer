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
    "5FxqjMuC9TjMUA3pLZPo5EbH7U7obwsGYDjS2pnmpnJm1h5yuUPc2yE2V1RcjfJBVruJxQKH9eCEQpyXwip98Lba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38LYuYznQXg716p2BjiY98Zvd2sVQgAfj1aiic6tVagx8AXEEZJygzFbQJtdekAfeK6oFteLg8HvjNVVGWLUrRou",
  "key1": "49VvrgvFW3SDM6yGnWbkXrcbsYbYra26vf8HPxn1xNNWkU9iNn1QJWPm3P9xgpN39EDE5cEPmEgQhznPWtFzhpHR",
  "key2": "4cojL1bHrgBneBuN7x1Fhkz1nRC5tQanVcYG8TdQ9PxEt5smg8KuxwUDKS74aCxgyTVdZJePvTjvs2DxFBM6uEdA",
  "key3": "3VouWeRUrwKpNyFySSFy7AwX8SMWwTxXYJybkJFJPc1LtZoiPJxRMZUtKy6SpNTmVwdvfrfPg3hYdUA9FyXv75BR",
  "key4": "3HVhXA7UxbpstnhY9tgVVNCP7cyEohdXCMEmtaaBrqPY4zsaUcxEZpx8HJxyEkdnZVs5oGu25tKs7owALsBebd8S",
  "key5": "64wwb3NVdBvsr223xXGKVUiWaYwDSHnU8dThNfUZG1injw7dKupkdXEbx6vpCsRykAfaeUCtcUvgNRVPyCvyJEry",
  "key6": "2m6da19gjUEKAwZiccPm84gMBzz5erYQcHLaoNEvxBZw2RUeFFCtQdcHJi9DLsb2wY8fZTi5EEnT4cpZaBpbKr8k",
  "key7": "5txowjcBbY7RgHdPV1UnwczevAFQESXPpSDfMGxnNNrsxNwwo33KiSbsASW9hZYvSVwEX4uDvAtv3EdcLmXenhpc",
  "key8": "2hfeRLXvnixqppSDMdRcFxCm3HbSQY76ehySmjZVoMqWLBdejb4MoWyH94vcY8AHMsw7LQAkhHUXAZn78kGqarmH",
  "key9": "4Q78q7GSFDC2iA53jpjuu3bDc325eauGZGY5zTKckDTNZA4heEkoAfhEYVHfE5dRUKKJnMTN3wJG81tRYo3dnL1o",
  "key10": "3iew8d6iHV1TSHYyeXESMxE9S15GdnBZYThNenNoeHioLkAtJXzXxodhSq8EXF39SvwKkGGYSjsuv9yTVdxrVXod",
  "key11": "4JZ2vncpjSkiDJdMznAaYjDNwoUE4q9h594npJc3jox9V6xQmTFKYE6dbPEzADz5VRtWFMFcF1k5o42dSf3mdzMd",
  "key12": "tcCLiwrovcT4aoz4Dgr6v2eCMFDT7ZJZLmrBNUtkpSNVX7aApNjheKJcGQ5UPbto2BdJUCiGqDy8e8ngewxWoXw",
  "key13": "5MXQBNUi33DiJagbAXooTrjDqWEWcpwSWEdsRFFvNfHzhSaaXqE9urwsT3FB4jZKESAFHPzR3jmToqGYWkEk9Q5d",
  "key14": "65DGZb6bbT1u58gnyySph3he1zb9ZLSdhd8Ja2pgyKwuNApKKQzDkUJhJ3u6VVm9URNEdPrhdjwRB37R4dXjj8Hx",
  "key15": "4ivEfsZK9feVKdQvFj2kRSqbgjJuBrVPJkbS2htit69ZjwiNqhRLNJoUeTAeBVMBAnpzPaAS1qCSyPdptyFCF25S",
  "key16": "625GpxyMUbrzALxK2VtrKzzLAt9Pr3qwhreFcniqdTFZSFjx46MqPpvkCdYaEzuUkiVUw71KP5GHF9aEEsycr5mn",
  "key17": "4u7LdchRqKST6gpLhTdbPfbAqDshZxfnAdD7H6owL896BLnEc5K6hExKHLuthtHh6QmP95NDc8oDNt9Nwdg8dpzn",
  "key18": "44MEmiAhzEXFGtmvwsmyrsUPS7YquREjksCg85YjkHrwuQ9iqU2ohMyYt7CCb2gzCmEPYsLrdZdFwMZLgHBPPaUd",
  "key19": "SfmsG4n1WNTTwREP5HBgqGtcAUV4iMDhZRT6MMg25GCTFhphPtxEVC4wqanAixCLjUqoz2KiijW8wBQgkaBggbc",
  "key20": "4x6Pmmj3Aryo4BpkPgXUTt6PzrfS2CWYidrkeH8GpGi9uCvFahcRK8sSV6MTGjizMspz6qdgMDBAt6jePZG9or1v",
  "key21": "51JsYeTsy1z6b41yNZ48m6gfz2czmJ3hFChamNVthZVMT2HWxtEXS2UqNiwao5o5RCDPYnkYhTsXQpiYn3Aj9or",
  "key22": "5eyqvFdoncUFY3heocB3dVfksCowbHefF89ZMK3kcg1J1f1LGBzyDbgHmBFSYJqs9aCzRtdwG1M4fizmKDdha3T1",
  "key23": "274q5cJGoPLAXYKGx3P27H6jsa2PJMdueL5Jw1KVT8hn3LFoxZ9sKCrjiZYs6Ub1gn7CiTX5FxzZjWmQig15QXcj",
  "key24": "4hxoVC8YUrcXwRL89kwtRsvxtqUBXjWHDp1wRdmca1AfT4nsM35XP81oRqRyJ9Ufyci4EPWjQJGMiZ1xuS5J8u88",
  "key25": "2Y5Cm2xNCQxQiCpaZcZkvQF8sKxEwW6xLAyntssWe5HwdsLuCp1k6jWMKLAxVecT1rTpeVfoUyZBow9qooP5THEH",
  "key26": "4aBXyttS9orJgrKDw2JqyzvEBbuKwLsZvTwg8nj9rswsBcnfrh82cKVdZNJwZJQq3mHCY5dbju23eHx5iB18Uw7C",
  "key27": "3o1oysd2ZDnfWZ1TvAX7oEMkv9RhzmY97uiPyceCAvUjVw6S2ocgpx6EQue7M9zUtnxZT8Eam6PtC2pEoQDfg84c",
  "key28": "4wW4dkKniJyPbubfmi9Bmf76A7VoDnAvzt2KJ8Cj3Krd3wG1ArojJzs5F2vTXArjwJyTuZaYAvF2osULDzMcNZVi",
  "key29": "2V9yXr9SDctnTRuApPZAhNjKs35476GGExy3pMdthLX9vkPCLtCVFv35gkD97wncZbhq1FBKB4LMe2whv4s9GwBg",
  "key30": "21zqzFwYyjqb2fGBYHrcfgru6Qw1W6SBWjT9Peh6Gtus9dwytm6789uzaxxhntiohiaLdxcia4c2hUpgiZvm7rUW",
  "key31": "KLpSSAgS7CHE7uirWGMupoAoSAU6YRv7UBQ2gTHKCF2VGWNURdfUsDMTg4yAwbnUZemCn2pSZRoFbHKuuNnXnYN",
  "key32": "5dnNEjRi3GZuMusTa2yZd6efzDLHrvdnvjpXQdt94mXJudGkM6C9fi4n6iPyoBBFv7hvigmsnY2yWGoYiqFVskmv",
  "key33": "3PTRAMYrncAH3aZPJGzdh9RdTHqbpPCUGppiySe1GjFa4c2JMj3hezPEs8dUC9uESve9EyPDLnk8XAQKDCDitu8j",
  "key34": "3QiJAdknKQA7vnsPNaprdPzLocCX5fddfx4b3cC5k2S7YixBATecLQBw9pD4iiR5MEaa2b3RmizZnUGCsCTPKakt",
  "key35": "5zkWHL4TjS1ApjS2NNvA8hi72YAoGLPo3eZjGCP4AyL9eXwsdDP5Xs6Xb8r5witj6hoBzHtGUybLKEWLW9XELi9J",
  "key36": "3XgK7pAfV2AueCCB8a71HKGuCRGHMXyB6EWiTwvgg7HxtptmuKGUdwyeQMdhbjksAtdrcya6jo82Vu9M1T4X5cRb",
  "key37": "2DfBQk2etk6AzQGGkD51Cez2EkAPYpsJCv6Zi2U9N3xnc1cadmzp9gizzibi3ce6ucZ2t78wB9ekzFehp8wkqxvB",
  "key38": "4QszqrMHHrYxXZrMeqYanhXnGbUH5AeimDtdaoEEukZZyR9W7hbCfDsyPo6CiXZrBRY28XgbLLEMN1KXYHUZJd5N",
  "key39": "2oXA6PX9QuNsBGqEemsDWFFdy2ZG6fDfW5NbUoJW8VotNgHAinrSfxiMz9qg5uASZWYBsQk2HrUAs6YuCLUcKWBX",
  "key40": "4cwhuFZfhxXbwk51sU2D1zBBDakihkdzdWzEbQV5wr3oAbre3aTd1eJYbpYQCecaUWV3Nsd2oAsnEJ8JCEConFmF",
  "key41": "8NcnkvmAxCv2vyapRsej11RGPDXZdn6K3TdsagYwf2Rt81GVYnV9vfc89BAQARzj2uUvoHgr9FjuEUacgSaqSUW",
  "key42": "4gtApLUHPHr3QqVvzD7kUnh4exKUcF4xUA6in2gFFqDDd1z7n2HHiMUmoTP575HQ5dhaAnhSbYDzLMomMZFLdzkg",
  "key43": "2RAF7mXHyABKpBU8abXG6YBbeAbFZoWU9GHPQPnERgBrrySC4nHDJfwxNYHCPEifxCZfEJ8WBLAQTHEvCW3voxLo",
  "key44": "2XNksqdUgMQh5kowAhpDSbQLMY7R4QGGw85cdcjvTzz4SyL6LFaSPWFFenWr2CrKJwv7hMno5WrJfebbbFfVHYd7",
  "key45": "3sgixFE2ESMTmcPsnWbmNyUkeEBvXDjWvPbr2US6iGET3WCoGkbZsen2js6dGS8sRYPdzGhbB5iWAonEjFbg2gN6",
  "key46": "5QRiHe1oxjhHA6ZLaMtv3MThQdd7UcRJ5ue2p4YpeB9EFTFeBHh6WESNpca96eh4L8obA36i9QxffWsgzUAmap1V",
  "key47": "42pXbXwFnYdCtKvNpbGWTy2XM3sTaWkzsDUxgn9qUREWJ3dASbbFkc7pSF9DmXyqD8uVtE5NeCCLBj7eYmjjS9Tt"
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
