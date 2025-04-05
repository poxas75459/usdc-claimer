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
    "Vi5HTxmnkbgXzfG8UeNuGkdxeEqYVj186mu3nmqpfytmweK5qVr1YaTWQUQWAA6xNsYxVDk9nV6phWY8dAWPj7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gq9nkiDsLKW6NyeSTCguBsXpn36njB99EgHvuDmNyJNCPLHyU7EGua8PK46JGUAGAVnKRQKi21LMMzRYgKHkojj",
  "key1": "2ktCVntLLWqw9WrmYrXYFfMoStRTvGbsWNnrUhFi7urhDKtmUMTBNd1YSfePm8CNwFx4w4xeFRNg3oAqgK3pEnvZ",
  "key2": "2jsbqHKN1sDPPbjry4oCnZT7zcwoSEhmCSyXHZekcddYf9368iXGMSqqXNwqwdCQbohfsVJLpvapKDREVqr2JP82",
  "key3": "4ViYKxgi1SCdqoVKHFPayAchLJ7FgRst2jPKmYv9HHji2mCQBu8dk6zGvNA6Mbtk4yvnRYK8cqs2TpL2hQfYsNCs",
  "key4": "554vvXjRjiuuViEiHvdcVe96L5bEzzREd6CYFsWnaUbuKBY7vkNvLtYYLC7vhpkkt86BHjo9ShDue6GyiAkx5y8K",
  "key5": "2ckByFfHzt4Hsdiu5AVkBA7AbaT512LFEmpdNj5QsHz1Cug2GkJzAbWEwChr6ouKhBFV1a1FoxUrAHZ6eksmcxRd",
  "key6": "ydbpvkFYobonwiSvcQAi8D97bhHSwrzSkueFk7BCESiJ5NLCkBmX5y7m7iagH3PyHE6VBFoQxdyNW3ZzRcHQ2ui",
  "key7": "2VcvFUbrqqV3CRey24amBrAbaxA3sRkgCJgSv2qGGr4yXLf1tAVkjMqxLycqcgVsacw2iEJhBWt5uiSbVrDLMHUc",
  "key8": "RFF8sb4CnzYNQrT72Dx4xhZUBvVUhhB1a6GDrFfEydGm4vQw7f13ijUvNuBfxCcCEopLVWCQhrTjeVpyHmaUAZL",
  "key9": "5jySKw5fdrVuEvNcyhZYShQMG1HTe3GvsNRy4Kh5mKt66s49D6ZuMjTQEqWx1hCsJ8YAiuaLpy3TfV3w7rhwyYDL",
  "key10": "5oNhE9JZtsLpX3atCEMFmwfQUx5PLaMVuqSDzx2jQryMwj5d8UMfMSV4ds7mJcNdKpYTUMrAvEKbi56ZZU3T1Z58",
  "key11": "4ZoRQRHLAV4wL7j4zAazZW8zytT6gTF2Q7gbkVxkbPqTPTF35eu3pnetNxHbHS2bVz9w5pYGciXYbTbQvg4be5cp",
  "key12": "2LQ5x4hG5vQoUB8ixJr6sr2WX1VwP6mpp6BhHPqXYtZiwhdVqytnqBsYdMKPLZ7zirqhnca8MoyaUR9ZZQcDLjnR",
  "key13": "55uPhqjkFcQRNxHb34EvKXm61hZLoqxp9WUKLofXJbCKy8de9vfNYL38FvYVS26Njd3ACpgZaTzFapLmLscPW3mN",
  "key14": "5pE5Bk3iTrPVaCW81q9jCQbnmnKkQpQx4Pjn9ECHG8v9hFYBv8x3SDCmZZc3GQaweWdiuqmPLaLhnTEf19MsqGN7",
  "key15": "WGgFrmNsbzz9cWb3FWNWSPT5dqTfjSv8yUtSfHmmnSMmYAgPDWARbDnybBp8Wx3HX2S9cRato9a2HcRNsKbTeim",
  "key16": "3FXvigrB9smKq3ZuqPB9iPc5wokNYipkLhxaEsBHNQZYTRrtm1pCFKBKMCDhdAqVLtN23NQjLG9mT8ien4MQFwZS",
  "key17": "AuFN8v3ue8izu6eq6UStSQD9EyKQaYPMiCN6mZHTMPFB2ZpJp5Z7AG5ZgvnSYsq9ZkeQHjciCWt4MMLsBbiHif4",
  "key18": "49hpcGHevN3Mdk23LoMwsLb8zsQ7yX3XUcnCmNGzQYgscUrm75qJU4g5fNiRcLF7pqQb7Ksaoi9ypmhoyPeMj8nj",
  "key19": "315pazREcuJF7c92cv1WK3nFNNyz9wGi1gcuNNvrfCA6Pr31Ty58CPBXLdMzNhJQz1HDgUGkKSy1SjTbPqMeGuL4",
  "key20": "67jsiYiuZiDLvTFQvBQAzDHwWxNU4VhHJron7Q4VAx2vEyLk2MM7QmAvSVeHM9B61aQSVkDuPXDCHEe6ditbjfzG",
  "key21": "5zrcbAQqCNQWvrDsBpk3zUmqu7FQpFqS8cXLeGyRxbQFp2ZD95LkCXA3x11TrSANUMRcqJ9CZd9NvoVqXDj9YanD",
  "key22": "4tjgvh3vhn6mysoKpFWeznqSCxVg4qN17RJSASk8Lcjs9PtaAHN4QWXkZDa5pV3VAWvebmTATGoDMo6Fer8o1zFk",
  "key23": "41dMzSdkankhNRa9f1U6qDZh1C8ZxgH2Qzx91r3So26VWFPuBbq8AhaRe6mrwb6dPtqw9x9v8KhcouwucsunN4J2",
  "key24": "4LoTVBtp8TP7UgYLsomLcqdsvUe15iFjxrYWKH1FatAZYsxdDypn1hQ6EQDSRDDFmLyapmiLNbmmJ6YwEv2ihDrp",
  "key25": "4CdEg1wWsBujzEHSFVA4y4Cg3vzXrQwtCU5WchDGmHfEsBfNYEWtzn1yEsXUScsmHiZGy59G1QBhpxsU1ozDFMLG",
  "key26": "4oWeULavcdZZCtoe4EFvCjKQhgrbBYC741ub9yDjaNZf6ipmaEo2JGXbBUa9MiNjASMKS5epckkDVPpfL8XuZit2",
  "key27": "45TfCAasxaRpiXothzY3hsiiYCEeJbHxK4VPRxQZhDeQ7UkaNmt21acporudMJddVBvygi7as3cR5Jb7eieDVuCp",
  "key28": "2ytk2QVWd86jXmUZH8oX2tr1Bzn51eYyjrxknkC3aWXqM3osMNFF1bYy7uQJ2NZDMv7bGG5EeoDDu8D9dD7b45Pc",
  "key29": "66n3CdeL2Tm2DZDHMoZJcTbq5fffRf9691T6Q9oUeDayKdbJBbrMkm69A5LG8R9uYAVbU1sUMXUDAaWM5RZa743G",
  "key30": "37eTyVAQkYDJtiaCbqG9HXAjBhAzMnZrK1g6V7DV43hGELDb3BAxoSvcr2M5h8aHLnvHDTxKgkh4GPEX3DDEbAma",
  "key31": "5iCbVhcjjd74MXn1Fb3EMSqYPY6JqWintJqe3fh7SbpE1Srw4mXukyL3rbwNpTbupgeNPDpLbxUrJqVXiBBP8RFL",
  "key32": "4xF9UP8ZMDUbcvv2nvcZohBueGdjfekSCHkFLxVHzQfHWXD2Jcxs1ShDaaTeVwvzHH3BcSERihk6u5r3foJuTKoS",
  "key33": "TmSZnoghd2Q36nGquye6wDW4FFjv5c9JEVxxFjf5Xds15Ny3L74DRRUSGw6Q9qcCP47qxojiEBxr95KJFypNUcM",
  "key34": "37E4EYNZNctNufxZCtV8J29VjmaXP9eG3E14oXPEjhqyKtTG8JcQqweT4hdHUCskqn6hg3poW7GX6qzThzYezqFH",
  "key35": "UqiKeQSe2hRNc1qhp4fhNF9B2vPxp31kreDWmw3kZDpff9x9W9cwgsq2Ncn9xPdTWhavJNRNg76CZSdG6fze3Ah",
  "key36": "5Ls1yr4CkXrUC9t2A6b2F7FBWzPAmpX9cD4M2RY8Hj682a5zXS5Q4ZRh9c6P7ZgaizXgZfzDYDDueTtLQXLHfNem",
  "key37": "4vzUivQmS1rUCQPy188gxVQtbwH9BD9YBSuT3EWV3xd1xnyRTDuKmsZL3bg9hnFEZ1LPnoB1cWUZFdBHSAqLnKgf",
  "key38": "3cDV2RXv3dRRUBL66w2McP6Wu6W4vRe2CJLXH7VbvSMDGEHQ3edXCseNrf8AjRYEyagpKvHzkipEmDinXofZKYhx",
  "key39": "L7eL4WFWXcLQYeap1GtsF4KJ5yvktDJCJoHaTo5kTaYVGpGXeLBDs5F7KhVx7arhCZVF1uVs6KmW916PtWZ299j",
  "key40": "3bZvU2Bu3oEdisjBWb3STQPXafaGZJthTac7PVcq5LdUN6prcg5nxkxTtPqfWkvbfuH59rhsTrjMSp1NwCN8ViHP",
  "key41": "4LrR461A1t31RkSQKvbtSiMDumzwDi7HRRzgxJnWw6nybt8BkaMDxLc5eFAGxcRp2RjM1pLDDDhPL3pXh9z9Ay6h",
  "key42": "2z2bhRPhXzr2gDG4xsr3kdQkTCBL6sbntCN5fUvB1XAxip1VhdrNg9TnNzqLZAvnVXXKZJU68T2rbuTymGrcjdhf",
  "key43": "kVynPD5JqjjkgZ3VR6XVYkGETxfNFgBgKCNK4tdVXyq8f3TNw3XQqPjiCqMAx5fwbkGCqxP4yMk1AVKbqHS2UUU",
  "key44": "4GzoiAYBZnfYjufA9kHXJs5XShrAVm8xX23pgj3ztpXH4i8MibKDTjU8jHrKzKzJvxB1XHScdyZGSeuNUw1n2eru"
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
