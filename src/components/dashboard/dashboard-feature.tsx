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
    "5HagWzwCkfzvrppSHFCrtf5kzMw433a9hLDfSVgBEY4YQBxij5FSEcgVTv93PVVUUxhPPKTz2tff8TGgpAHWi48o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CykwQsxGZCkwQTrnffz3gLKsKYBn71CQFSdf1Tk2R9iyehkFBngwS8dNnWVPzqJZVCDgqkLy7Nd8m8wCpVwR2xn",
  "key1": "2UAzQxqKRtBrMH6emeapQsZ5sJfgGUx1X8fN8tNXkhyzNNbz4skHnUvjwSZ27QF6GTArupBWR6iicCb6HG3LxN8h",
  "key2": "5u8V4rWhhuAzoPqfpZXfnoecwr8mt3SNnaTiBVikd2xz4cBNBq1HnjqdkcKWpwkTaQozu6Novqn37pHm7A2wPNzg",
  "key3": "34iN8AbzUB2HwZ3YRgjKfiqNuM4noG8ppFqqs5QuR37Ac75XM17JfhseAEkFHS84J1szZgVhs8McDkU92ohZVaDa",
  "key4": "46NMMTnsJAZmJ8zAMJoLVCHqWVp99zeQwonGkPjoz3819EPKNREMDpMXVdkcHRwr8HBhazk3m4WX59xZMoE969pK",
  "key5": "3kKvYaTFF5xYuA1crCB95aBNEaehZ9BCfnhrNitBzvreEMmMTJxGDsp5bch6nt6vVBPz3v3VjNoj7XGB443DjLcE",
  "key6": "UigF4pb6oPBjeYR828cTxAvY3ZZwa6vJXBhVeikBvZS7K41Yj5A3JJmZHbcLzmWzP8vi6qsqDTCR3kTaG82grWP",
  "key7": "wtB69MXpp8JhjKbqg4ttcHAgUr3ziiU38wjXejb3EAW95RFhKFrGzQn6ezTToguvtmTWQLw7zsG4fqB57sKn9NU",
  "key8": "24hmbEK1B5vNu6mL2EPZ3q6tppFkyHeoFMCga9DJBc28H7RkeiQT86vaTrbSGvztCiGW1sdQedhWfvUxtUZwrnTL",
  "key9": "2DzLkbuVojFHBpZny7RJc7fqeCrMoFvjhkjcnoetiRgVFEzFm3y18DGWF3Gj1pPLqEsYycDQADkBDgksp5ymEtqL",
  "key10": "2QYbXRyq4fue3mPWNVqBu1WH41mx9Awhe3jeHb11qAEiz3DG6bLtUxxH1WQ6hmSAvCL2jDsihDZs81pdJQutmqNg",
  "key11": "3gRhDWMhtvuEj9iC8FovJCUxBG7MRc6wxBeqALyzJLC4SmbyVsaAcsLUvqFwaxM8CHNbFXGyAsZCLP2r77uC5ixD",
  "key12": "3eg8fXAGD8LninijPxymfKf3qL8fgJPeHhH1mYEtYzkT7CE6p4vKzD4Cd5mdNGnvuCRdnDpJM7mVVHgjsFENBN1P",
  "key13": "GtZM9wcdwqJoEuUBedUrHkL1kZKs9S9w34R1pkMRm3B23CtaF2hrPxLRTUVQ24deSeWqSaUonUDyVVkYEeBMHAM",
  "key14": "4ZRZEDitVmDvW1hJs8pZ2oLePv9VAKqfEj9yKB1kZRCsMpWZraf9vMJmrT1MeTTWpvZn2trypdMPh7EUknkWaq8B",
  "key15": "MyE87wLwyUubMCVAMcb1ExVa67NtJLZjy34gJKB7YK5UCng38Pe3t1rkdehiPNHLZiyjYXyZMLEHqkPxSbuifnP",
  "key16": "2vVJp7gveA9gu25rCocLiLzy51CTjt2xcyQHhGCafgNZkrg17ZXuaV878CtEXDo7HteUs8RVsZhUcKKbvQLwPruX",
  "key17": "4MB57PTuWuuRp7sZpp7EjRLVbXkTcKQbd9mb49UGprYX1WVcBadfohmJj2QPafDFtqgKy1YRJoK4QDahWV4vH9ci",
  "key18": "31xhiVcGeZrHhmEM7MvMg49SeKsuJFbowLWyJyTToGjQcfvEsxWkwvESXqoq84KuXxYU9KM97qVv9tZgULMEhaA8",
  "key19": "4jitGqU1jdCi4QYYWL7dPWf5Pw8ZaGxXRhcNqiMwKMgdgaqvuGJsiUoVvCyyRVXnNd8DLh3WX2CoGxSf9Hu186AX",
  "key20": "3SPpmSkMKQfPQPfpztpSDd9qwjadr73dqp7b1KrNRUiNHyNdM4HomBu9WDHxxFpg2Ap2yHjxdNaWQipz55tpw3X5",
  "key21": "4btidshwVprwWhMupVVaEgDFecxGyNkoSmXBXofKJSKQKrsmFSNS4NQsSyVVoe6gEbzvScfbK65MF4znf2CkiUR5",
  "key22": "25iQkni5NKk6JsbZqBTWSvkKXdAB4HMvfeitNhGqcQC7MSD5uAxsixkAYZu99Yz6jYh71JSGeHAibv2GithZ5n6E",
  "key23": "bRKbuTVuHaN4H8kCato5byyHkr7MnvN7HbMDV3tXFeqUmWToK7Dbak6QEnFf5DGp8rbxPib5xhfKNUA42YiZqeC",
  "key24": "3refgq2vkGLDCoWXAmH9Ffx7jk5wqG1juvXbgryxigCuK5heVBveisb5Sq9KyJyGCPxB6W5EgLVzBnLTvVAGZ9kg",
  "key25": "6M5wSzfm6a2bA56wLsWU8Q7i1JyHmchZ2Z7Cb8AwT1jXwrkXrVwfDe8rbPTdybjNHB1zvtjFECamjkSKLukVPFi",
  "key26": "66raDAfe4ZwoPV1uF6qXYpDc2aR5rDj1QvucXUL834KaA53cHF8p4Jn5hjB9a1A4u9QWF3nK7jUPdMpZCguKpV5h",
  "key27": "5T1Jg2dSSXWYHxWGpX5hFhsGCAihUVeCUG95KQMsPSUyqCWjoVWeLtAwmvpabcuzzwhcffQypksWM2vPpuBp5WN3",
  "key28": "25uJWg8Vf6PDrMphR2u1EFwbudV1ZvD7Ub4wTSFLhTRZ5T9N6itcGd1scNTWF3REFQe8V8oSbb2joX2N3u1r6evB",
  "key29": "3JRUdbp5sF95SYJ7YEAT16UeAY16hYKqZcdQDkdUVbEaG98q7mVrvAMzYGEzciDuibBue2B8Y3TcPXzaMQNyF8JY",
  "key30": "5AHM254ZjdFwbtbPh9T9bZBkVgcbN2jWqw6fNGCQMRksV99enqsxVvECUCv9zzteetuF4GiLWrYsSPnTx6EVZjxn",
  "key31": "2j1L9z3ixntzNC9A3YwrYbXY4xHQ7zFaTaytPcpDYPywaTH6oDzzpHkgDhBjWCXvdMbLh66DmWEgVm99SJakm5k3",
  "key32": "2zQgQcTPfQTUjyfnrLuKJ5fCcwVan6MWjWvT9kRC1PH1gGjW2fWSsvwHathHJjcqjESkcoxowKFWwY9HrHg7cQZ3",
  "key33": "wsjM1oFMJEuRn844zmGuGtyUx1Xz8eJwXuA2byeqkEkQ4uv26cfn4qnDSxmiwN5afRjSSRz8d8vjkhT7uwf3oMy"
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
