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
    "5gyBj8omcDs8Sic6RbLe1S3S8z3JMoZBZgxhYqMShPqsxeCDW3HCuztaqfYgj2t1oAf8G86FdCgDP88fPk3TTK2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXmk9zZe3vUQ9ecL1RcDw8mCp6un6qJdmXmChsutHGCw6tyKKbbvNfosdMny63sKnHnDbaQEggtSwLdvvR8Kohm",
  "key1": "3bBtc9E1C7dkRy8vU5epmFHEHa46omVEKe4QDC8hLq1yro27d34ioq5qN1sxbiCtYAoTWfLi5SpFo2CuEgaRbVjz",
  "key2": "3d9gUNYswKBk9ZWPyAUiB2cnZ1wmynnYRjxiWUV327HLP5DrLZaRq5hS87spGNukP4pBQvityDNSTWdKQKyFFkNn",
  "key3": "5Ee8jje3RFfY8DRiGZkTXARbs4RQCQ38ybNojKE7wbjyriKEe63iUgsPRb3zy2oD5iPQmzkPqw8nj66Pz89JVpXu",
  "key4": "51FVtFM5GPSE1bRccUikXGVuBhsj8NBrVvvhQsdJUihjz9kZsciEbNcgnjh2qTk7joegaUDyjJWLebMgYMK4iPpn",
  "key5": "31gzJszCsUVnDGSkeW3Bt4XfunUXhAvPBGsgTHsvTs1zWANbQdBsib3ujanz9Zz9gwFb8YHMQbSDdMtP4qW3Xi8k",
  "key6": "546RwF9VthLss33L89bTsa7pZGdmMi5aoo9CssiGhjR3z8zEjxZvfWQkJc8Yov1sfaHZXbAzw3ify2j6RLdhnxJ6",
  "key7": "hFB4Sg3gyBwVssXfC6oEtZ6gqkcyEkZUpQbk8bEeYGhaLCfzjH6K5JUjtQ1H1xkeKD2Uyg6xYZamNJquiqypswC",
  "key8": "5uBT6zyHZPjgj2XgpLPoyEJBEYo3cZzBKwxu4s3Rbycba9obP5VS9KKGnxEBooJVX8SALhrKJBo5UXcSu9oBtmZE",
  "key9": "SdqLvC2xcdqb5RZaygUjq6AcWJgx7dZeTEk66aMesesUtiP4EfxNEhZSrrrd53dyrvWvKmmooz9gp27pJuhUcmK",
  "key10": "PJr2h23mfmLT7Hyfc5zjHWZY6pBoHCTNYNdkaxA57cZtZuPAxWCQ92oVUBfgbcxRi5V4HhNG3QccjdR2Sh89E7F",
  "key11": "3NpirK9iHapb865D3DteAMcdQ8187f3GSZ3M3aZQsF3ejRqppLspTAk7zW2EJtWaTuFkXrobwiuG9jpP94CaZV4g",
  "key12": "4qMQsz28xV6ppt2eAuK92URjCoAe28QH7iin4R5uqDvVtbxLquYByq1tgSQ5F91kBtyNUiJ3v7nM3pwjGZEUar36",
  "key13": "3SFujztubgGYjsrJTjJybeSwLsLfFY1kHY3UQk6AS767oDS2ReyYBCHAoyZ6tHrrPxeMjokpKPCMDgs2oWe12Pop",
  "key14": "45uwRSJM6FjxNN1bucj1XZTrYKo8RJp9CyfegnfqontQ37HANRay8Dxf2WxGsCbNm2oc32GgaBcwxG5WiTEN4TFQ",
  "key15": "38oRi6ZShcBSpbSUzjLRAq8fGPghNCLmjCVagNNkBYhodAo33tsUHXb6A1fyCZ3GJuctwso7oMeDy1T6XroUZDdQ",
  "key16": "3SHiXqs1XDwyC2ib4ihfYDDrAyjBuTHR67SgzBVRQcWL9iUJewz5tFwV2XwxLR7U9BaKv97S7uYgStHYS9tyPNQ5",
  "key17": "4qbwHpurfx8wnSf8dKPBHmpgkSApmYbhUYrFS5DWJvq6eFkRTYHAQPo3TQsueiUfwE6FHS5AfgWxqy33nfYhoehe",
  "key18": "4oQXzQScmnhf1734kAhBGA7huLYjJxqjx16fUGjo1qAmyTpLyHmjXix3y4TiFnAj4U1QpZrkBYUb3B9cqPD51gCe",
  "key19": "3ttyqWBeq8Na8SqZqLHLtbNqyjvxeUn55Usyk9gab2PDSPA6ybUhNKTHd8YoDgdT9LiaB9yPGFnLSUBDf4MNmvvw",
  "key20": "2CDZFxpGM7XphftwMPRsBzx6Asv4nCNVf6jHdsMymXGzDbTEwbiCyRzSHJCMDZS3WDNBtFhBzG4x92DNspxwZG2t",
  "key21": "xMmyZoKXQSC2QBYUSXvMCbhRw54iSH3Xo8pjLaFJoBnUJTN716SLnf6CmoEgvXmn6PDCj8Jj4RhFGYPcPvLvcCb",
  "key22": "67Pk9iEoBYykPvuTCsGQoybnWiFJhtZbguwYLKwLFxrkEU1krA3RaGzbX8nf3MFGyBV6dMbWavT5RmLuGed4hdqH",
  "key23": "36UG9f7LPfiUJ2Ssv3AR9dgTFBmw2k2ny4KQMaqCm9S6AHcXspmGaUeg5p5jhvGErwN7WLfxEXc3rusEuaJhabB4",
  "key24": "3q2gN2vhsYg7K4rTP3jh19taHkQ1yb4Ytou97bFPoE3LKYU2Suk4HKinXDjNS3egtjSu61iEGHfMkQLt84fYGmQH",
  "key25": "4be99SoLvt9ZhuwCtAs48r3ssxdQCbohTMaxSxgPygzxjRiMbaDiB3Z3VxodfBzgTvZJwETkfP4adaggfwHxPzrT",
  "key26": "3aLg9bd1PxfbD9ZBAUTDeNyNDyHEuqMeQFMdigKGuuZnUCrCfCrcBNEDcs7txREUhkQ5ytVwyf36nEoYxerSdZYz",
  "key27": "tMVqKkKykdaMzAZLtqiiiT61CKC2F4VErC9qZMyoPp59boAywjmNhsAWi13ixNK97YpWLe51orGUq2GKNHBzDjt"
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
