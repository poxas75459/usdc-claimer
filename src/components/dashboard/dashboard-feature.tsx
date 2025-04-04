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
    "24BHYYzmLnRX1y46yFC4TBnfmCrSav4AxgpHgRBsKpvtx8NvVKPsGMNc8TdSPW5DuNjYbac89m17NKBsDQZQaByQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7tqRgaViCKtujLo8r7DR48Grn4o3wnCgnf3Wk1NkjEzT9e8JfY2W3mP7LRN8Qs1RQRZ88afrGANayKodR5Hv4",
  "key1": "2g6fT2PpKyZR6D9q4ZQfJTDsvZmRpR4NgPwFEj8kvkGtrk95nK1bNen91opjsbvFSXCEUf2EKfKcAHYfsymG5PV9",
  "key2": "4aAecdaVYLt9pE6Vt4AGp8XTwgoRuK6H1CkTwza2z1d4GRoVmDcnt2tcLSpgEmjQQfaFGnF3xEr1QvDEFSbWxygT",
  "key3": "5q183jnSkkcEmeS6JWTmwiduZnoQSbufjC2W25xjRR7ZH32HxoucWow7e1sqZh7wgBbDQu6onjj5VY19VHb9LH16",
  "key4": "5sdrUsoNKyMoKUUqmSfaQVvCzgb9Psy3n4y4esTKnMYB7hABxhMQGSft2GBAmaVEdkqDyh1w2tWGoS9oEKSF4KsP",
  "key5": "5MuFinLPiceo68MHSwAsYzF1gUzik2oP5tn3dbvDqfvq22XLgNrqG4FPbr5fbPFsv9DLQxtVWgMThWa5zyiqMax",
  "key6": "2RqnKK17d1yGzhX5Se3CPSrJueyD5BYtMePgbQWee7V86SHP6foPU76FX2WqiK7qQq44zdZeSFX1Y9xcAkvrRv1",
  "key7": "SyxqhE2dX2BWQ91q8qxiR757nHEY1gFH2WsAnJSbXEBdsPcb3pABBBTqN3FRQfXuCdJsjEteKSCKvtZ9otdXvN9",
  "key8": "3YhxcJEfqiQiKwVfZGn339mMWSoFvFVmXyKePfRJF3T3TAQdTn8nHK6o1udCXXXhbzNMRwEPnEANFL6jx2NReo61",
  "key9": "mzwT36JuCC94AHKk9y5y3DpZy5ELzmV7wauwiDAKW9YakXCtBnAoYKmUDtJDJPTYkYJNnW4XowwtnqCXiWynnUB",
  "key10": "4eFd9itVnJZxqTnju7ne37sbU59BpkpaNZyJU672Johi924rwUhyCWfRMmvX9LaqwheuX8FuYkXkbR19K9KwvurE",
  "key11": "5dPoT9qKjHqjMqCBN65Bdjey5JwrbBCfceghLabwkXFuamfdGD6HeT3zDXdh58x1XtUJRn3LdfW7Zgh4UWzG3Aim",
  "key12": "3AaY15VTuhwL3aFZcbYdodpTgrv6oHGrjm7NY2QnSfQMxswWYV5rQUgVTaWfcmifqsxSoeVusmjorTxA4SmpTQUn",
  "key13": "5iaRMDS3ftPzyXCuZZW57AtfbLqXKT8hseStwvaDh9Y8NnD8QNspmyqHZCPq7SHhcoJ6jX65FppHezrQaCVX8JZn",
  "key14": "67dzsdQA8FPiR8Lm43ZrVTu846LiVtYPqoSxoWpsP7mS2kHKGRLsFGvGtk2qNMy8jxhaNzxac89zo69oLVv9o4F2",
  "key15": "2CssMDHdNjTGntfjnKLSxWgdjEYDZ1m9owRhcvx6TkyRKeSrRdQ9zZEdBWKEiJ4DxJuBL55csim1kvivdfw8ZZr3",
  "key16": "3daGCNdZECdaHerbKWWreyCJK8gAZ9aswVL1mBusyuPnh8e6Zd4ADa3he6KhsCkMSGU3zqr33j65sg6FNqRMLgEs",
  "key17": "sdhG4i2ZLwi3FxdAGGWgutwsCKJvRzFLNQuwwWvgMLVKXohuVxJR825QxoL4MygFStaoQDU4PDCCYpFY6x8BNNi",
  "key18": "2PLGtQ5shhg6YoC4S4pc7RRuP5EK5KuimazuCWDieaG8x4Vd9m4B7dNADJUejKpkvezSJQZ6mPqxjf5ezeQpT6Uk",
  "key19": "57JXnK6fLtPchiEz6vye36EgNi6T7oonpDv2oHbzFMX4nkVBcNfcbgKrJQHN2wD4svvK8H2XAXyhyQxcoVoeGFng",
  "key20": "2AFsWa58wHK4c13ywWCrYttZRG5USjJ71Fe4bbvnRWo52fgvvPBrFUdnptynVEQ92fao8dQgSCJE6PT22xCWAoUc",
  "key21": "5U4864xReGj4UtX9jZWyyoSCcoR3CgsLvTPyF2hQZieSNXxSCuSrAZzm5SzMJPS7LdxgMM5UKSeFqsrSJCDY3ERM",
  "key22": "5hqckgduYsWvm1dV4MEDhf82ZdWUEzJGiYtuyUYcRPZkmLBjtE9RyEp83MSF4ndqZy137JHmBu1vT6B56gEzoEet",
  "key23": "5jndcaxpUk1QSbCRFL7jSRQ7WcszZeHzxomZqXtwvCGfsunmgBNLARJeV5KyUz73HvwitfQZPjis1BXphC69SmqH",
  "key24": "5CZNg6kVYXJag4GaBj4vAw3TzuCKaeMjjdnDzqe8toRCmA9sUknc2fkugV1YxRu8UrqScMqk9AVTP3sHFSCNJoNF",
  "key25": "4Y9LxEiHhc1BZgPr7s5j2ZudCGb29brvT4KJMZSPfgKezW36fJM4s4ii16uup3miX3pY7LbTR2pFdzZns352DS9U",
  "key26": "3PSxbtx2Y3ceAPPcWZasdHmvAiaqA2inQBeqgHo6deziNwuqAmnHDhh24XF3trqpz7pxT6TbzEvWR9Kdv7gHGReR",
  "key27": "3Gcc9GY2XF8Nt8npNwnT4dh8GPNBgLKNmhdMP9YDpJWNojrAuX8zNfoWV8VuRgGx165ESbxP5r8toZAmFEPDocdP",
  "key28": "2nrSFFxrPqwhZaYhLeqxdBP8mAhXzRYnsj8z1uAFtpDKGaF2Tg1rDZnc9S6twEJ2SfX6K1nf2tGoSCzXA1Tb5hwP",
  "key29": "5NReEnSxmRZyFsuxi8zVzR3g16E7cL5bPodhSXHxN3NwCSC1QwRxFDxmeLgEGrH95fedGAkFPTxJBMHK8hGMf3zG",
  "key30": "2AYZGQ8bqZFZhbNYmhRqj2zX44zNJPCPYzq6CcTxHpDZVH27Q75WCqjQ2E587nxXA6eDq4TEjuDbXrjKz8PYp75F",
  "key31": "4nHgCFoM28e5Tj7KxDnSgkFteiSZF9y1sKoFZwdo852sYPiFmueApPYujAJm4eZpHUyXZ24wn7sRbadfpY5ekgtt",
  "key32": "HEZfwnpdDvSNAXYhayfiZJ3sSDdxK9Cnh3cj1TobSxg2wmg33hxva7WZFr36XjuJfA6Kh2aTzPp4XZ7PuhwLnqL",
  "key33": "53M15g11qL5xSucacd6tQptgZiVQ34NpfXbi3iXUeXxm4J8kFrHEzspKyH69mnQSRKKRN4tqsjxRAY5Vkt6pUZDa",
  "key34": "4CyiJd5SUMbDhhWPk9aAcwEZUX3r9drmRYHWcax1dkXjus1j1QeyPUy86ijxYWmNXHXgv2T35mTAHveYniU2D51K",
  "key35": "21L9acKT24tM2C2Qrhj78esKLiyMvAUKFkHGAwh1UFjEYfK3yMH8Q42N6BVNtKnpThk1TJqUoM7uqXasFtpocmb5",
  "key36": "cz7cNDTBFHEVqZqhxojQfdDozV1hWjGmRQ4vfNCTNsaRXcoi6KMJf6YoArycKAnFTNvELNHhVCVfV9mHsWNCud8",
  "key37": "22wyELvVMGBWJA4H4RZQovutnmnnmZJt9wGj1W8AryqVmJpjPdcEULcsrwuq3KhU7sddm1Q1Ru49jov57jXx6WVC",
  "key38": "5Zt4XRUypCXcMFu1F86kh1AqdsGw56BGMBCUm6h3QryG4HUMEayWRxqHJMDi5oYHnjWLiWYgQANf1QU1C7TRmP7u",
  "key39": "TwifKoJnjWF1tYTWebyG65DFncpwauFq1835KpccHB9fFrSSquLbjmYX6cxeDXupT8Tv32qLvnhuGJeqUpZTf3A",
  "key40": "3NFnKXo6hxq7fEn24sy4obqc7ZUwquVfZxnxbaafs9Yufs2zjeLG8oips8xxyMunXHvcHRXr1NdhWLTb3DYCxbH8",
  "key41": "mSh6VFvCPcYDbj824YXLsVmSPULi86APsanXupy78YDyG2g553GFs4G7rfaWcxHF6P67qm2eHkygZg9NpYK1d4n",
  "key42": "2PqZe4qLYp2pfz6WXvsFiXtsHkdHuQ3EPtUzpzDmVHWwssmPeBrPsz1YDo38Cu2CQ19mrsyhf6fxEFi4nDdT9k8k",
  "key43": "51UaT84ryGPFJppLtNFLSwj8jP1GstgMsjkFaEWh9Bz2Kueg2WTBqbpSXz11re2TR56T2FKEKk4A7gmsNULPzVQq",
  "key44": "2hwWsvnXQW5wsgMn6kxLouiaQtazVKRaGpheQNQFHApqYkqHV3rZ9CcRFHu1VKH2t8gPbCWh5QgfFJxjhficHHrH",
  "key45": "3n3CGRvLEW2n3wJrjLbUUZhJuH1L6a4SBJs4Wz3qR8CfYJZ2jfcx85ZyGBwBuZH5ZcsS8baF4Cg63SKbphkWgeNW",
  "key46": "2nWvsi52e6NV9NQgfdCrR2yMEXoZiSLBjwqhqwLuwq3FaSu1sBqFw3oBfXdAjiB5N6pTJHoYuqd5qWnJnMNCauad",
  "key47": "2NrH9HQ2GEjmQH7FoWugPtqeWHMEKpymgfRN4csdns2ogBr2CZjXBDX3YALLGytm4xepNbzwmZM2dxuTUCnPYhbw"
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
