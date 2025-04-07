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
    "2oWN5GGokbRNJWcdQdBgYPqZUnnNpixE6xLif5t1HmrNB9pL5Z1HLxH8gvfCWfweH1Mpbfq5SAEGrMy5pVDVBVtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FhCFJyEyDtJm5pPhjWVL6UkT6bsHo3cvxhXir4MmSM2RdFjEgg6E7178rSoobwxFjFxbT8WCkrFuzMb5q7eeT7Y",
  "key1": "42c2NLhudBVuaJeZ88pSqPnakd8XtcAZswGqLoSrcAJSbosBEowtjimJGrVYyg8oZqwhkAVqA8u3JyzaFyM3hXcw",
  "key2": "5EWw5oC2vFQvwEKB9615UHwnH9YB1D15WBTvfrgY36Df7HoB9FGUNbJoQpJg68foh3ioeNDegbySANzgAq4sqdZW",
  "key3": "2Zg5s71xM63uJjx23WMy8GkdfriGwHDZerMaKsDnHSojn69zqUqcSi3yc5ntW7Qkea5biHoF9zzeyifYaeAMwb9y",
  "key4": "3GmByH34inwHRtcEUnVo4v1PUKmdF6m5KkhzEYpPfw5keUb7ufH1RjBuDKXFk7qsqZWYX1WjbpBdhfdzUtyFLDLF",
  "key5": "5NXS48zWMB5qbmjM57q6PVNpe7D9MzHLPqSb1PpCx3YZsKR78xpvzFg39FScdfiyin1c2HF5pzHmqMUwjs3Mi2Ag",
  "key6": "4nBDJFpbjx1RXpeBAMGzHwpRKtC9goEMNMHR92dUstCoVVxw8TJi7Gb39L9LndDhd3fUu7d4TBFsWT3rbrzrS2VQ",
  "key7": "3aFQygALoHpCtJoYLhc2E3woF6wNQcc2jwhTpbV15qRzg1NZKZLcutarMJ4ZurJhVk2M9UQmLX1fA7EJngxXGo9t",
  "key8": "4KcNWUiqb7wePr5Nj1pzHdwVaEPaPGw4fKG3w8SSCgNvHoeTxAxT8eujtdneCPVCJyz1ByM99mzNpuCnqb4pKKCW",
  "key9": "4BmYBuPuXjC8Wcm6yYGqfHhjK4G7AGdHeRrF3xWtn5ZQy9GUVNn6enEM15CgwrwNrU6PAzAfjqWUj1rYU4wMKuZ",
  "key10": "2S5oZn2Yau44YjKXDZZXwbcuGFkve68DqugrSDyAknB5Ugog8Pnf6iqQagdovMD3NaAYADwtJNAbJLtGsmg9gnKE",
  "key11": "5VfJMUZH3b3usF8TkyzoRUNeUTJjU46pb34LKGF6oQoLGJe7Gtom4K655cUtB42ngWeL3xyV91N9NP5NYWDHXL4v",
  "key12": "2XHZDaYVbVP8JTPkrRvD6fVSxMNzjquNuMjvBvpB63B46VJnhrS7ULwTxaVBPC6ahgUd92SFppuxn5siMoT31y2N",
  "key13": "2RgQQeApUDGaFyUUcMcdwRNXWAeTcBtdGkAe8h1Zr9imuaWbszdWchCLPQqySVSNbRVwHhs821fMwuViV3hC78hc",
  "key14": "TWNNBQbpQDnn9USWL7id418yyxZDTf153NV2BjMPyovraHv6Rr2fvWnRAs7oDzRXDWtdJvmkMccXd2mRyyGbcwu",
  "key15": "2JhKYjzgCHNDpYikxpSSrM7AAYFLC8BQojR6dRBVp6JxzW1pkTZzFiCNuu6xBicrxy2CjZ9qSdXW1KQh7rqv7Yep",
  "key16": "51HJG1RJHqLLMUSibc4avFym77fKbNqS7pDQrjD18f6YvSwgBWyQEtjc898nS97eZ5DnLnUoVPA16NAWvFgNJ2uz",
  "key17": "vHucimaTBzwfYi5nKHjct3zzEK3kRh8ziGEyw6CFHnfcy2PJKgzjCgzz3j9tDytsnwPh9miFW4wKydG5kdbPAV3",
  "key18": "3QcGt9PsTx25NAcGqqCqboCbgCtg84zLp8STS2eqQTPLt8wT6KTK5Xy5UCrtmScMJnzrR8ZgvbYkjjYvzjVSE5k7",
  "key19": "4QXL8cModCdKe4m1cfEYcKTsqQKC7qZ7oLYpSAjraR75PkfWQUNSZG24ruVxuvtXxsmGqHdsWyV3DjR1WEzFoGuo",
  "key20": "2J3vSNTFPaDV7ypMdNcufM2oJgmtWTzPdAJeYVNqzB3ZKYFzUX3RJhnfHCYw7gPGZ6YqnihfxEbD77xoHKKht35A",
  "key21": "3QBF1BXo3eq1ZK6XGtyBaNA414u46ySfZFUaRHoT4yE1RbHkVM6BaebCKMMHQKck9rbfo4qAeJLrkuJx8RUXFuHA",
  "key22": "T25z4hEz3HQnveP5jouWwCQUk3PsrT6nSXH8BFe8MF9LqJ2VPr5bbhVqQ2dVSSnHUzcM7r82L4USLKbipy1qFir",
  "key23": "4ELnSrkHG2RtSKxtHYrVvSoVsxq3WC7zonhTp4e7gWxkyiaZSH4bVtB4BXRswGDoryQCLsdABp9cYQLiR3eys1Qn",
  "key24": "3woWTaVKpYQHD9cJ924hJJUorB2e8B6q3PbYaPxLRF9M5vNN791eb593pQXtsZj5RRJSSNPFDX3oupvzsX6Re1UZ",
  "key25": "P2zBhY6NaYtKHqB5EruxjBxMz1pTjr61YL62Efrw8X5ZB3Z6j8xTon9tApoMgVpbZ8kZr2b7ze6XkgJr8ELdywF",
  "key26": "2u1tuBuBCjVUqjjV2Wy3EtdMSxn59V59KrtG4hgNGnWwuVY2NaRTwpLcqoPogd5gVgnzgzhDXbbFkhLHSfxag45K",
  "key27": "2c3Y1u9A7xmzecnQrXHrwMrxbcqHBSPWsY3aQK3SR95atqNiz1MLEFCtLZGRWpXcwNCHAUfUeA6muYTarwuaGFKp",
  "key28": "2nf9BygwY7VjEGncwoTBu8Q24M91UjLsvcEKSqj3hgscfcbMUVw1uFkuFbtWu4EqGdiSh1bqFHqog7LG6YCMmgYh",
  "key29": "ygHMQNjKh79gvY6ga3pJMe9pY7XkXure9cwupmwatW8mNuHqL5rx6NnEaytbdVpPaupmukpWQCZch5xfFAdYVMo",
  "key30": "2Lt6bfVAehaShedchhWbeFekqmNS5c2pWMHd2z1xh2g6thXbJFUJicihhs3WiZaTgbFf7suKqfdFy7AodXW9XjX1",
  "key31": "2mvmtw9asSpbyxmHaThH6DUDxJBBD9p5CKjoYuNMXSGMK4PErM2rXfHKYWiYy6TGM4cwvxZEy7JyVdMPepSBQGNW",
  "key32": "4WnDLKfbbR37g8cLcfH4sppsiCPttgRwMQYeZNwr3L1aAxYwHEpaYjc8QFsdaDooGrF24qoU1yQjJVdTNatGHLuX",
  "key33": "2oUuj3h45xhSypyNv4mp1rVTifuY85aVrmuvt1piTLoSGeDpAGgJAyFjRtXZbzNWdvWx9Lku5GhsNhHgSV7V6JPP",
  "key34": "53MS1KnsaRBp86JMN2CYXoDVdnRj17vYNXZjdkTNqxJ1wqrCcQspevrizJjgK88j66QqcdTWMbZitiN1KioisuR",
  "key35": "5iW5pDducAKsWXXjaPdBptzTKz7zmC5rbScws9JWFe6WErMMRZPyB8pjTeDTnfHeMvfZfzuDmeGYsTdMc1RSUrw",
  "key36": "5BFv1jAf119vw5MPxHa7bRge3sr9BRsapftAoi2pA1qnXrWf8G44pSeo2a72R1MT9cfWCN3L4emREuzjYuShe4Km",
  "key37": "5GEkwmckrdNS4yg6RnREp99WE8dJagebGGen2oP2VGSVernANHSqBZ5JYSoxnaLdUUWeTiASyXdvZr7a7gfJaXye",
  "key38": "4FjSzY5xHLGWc7kxCFqRo9V9GrTUXJEFZZHGs6mpFShMmkEXcWgsWFd8o9drvVGzJ4teUsPfrYc5c9s7PJbUKpEp",
  "key39": "4hrpazyYGGxDuAq9S34ExRFCXU2APHaQaVXsRk5E38SyX381BBF4PGUaGRBETfLBq3x4FX7dR7wtgFCRWmSDb7aB",
  "key40": "5mLaTqAcCUin9BsqVSvNE7it4jWanJnF7cUgZbhF4mtMDrUAYLkGtHfdDes6EWHLcbELbgViB2wi7WewyeYWpitC",
  "key41": "U15ygNaqYJftaK8sgY5EsmmAncen7LjNg8WgCXj9BT17YNAXimNHVyXuSavYkNPwsbmrBSfirnBVuqqiDTwSqaj"
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
