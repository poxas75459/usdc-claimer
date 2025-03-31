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
    "2gfGvCtKMfXp4Rcn3CLdpPAKL4cyVCweZZLDsKfv66qWXWV3YibSQKj7pLCtySxCMznvVawbYrXd1jcm2EpZwavc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Re5Zrqcyj96eXDJSfMrLxFgLtg2nbMHg8Yg28KkswGrFMrji2ATY4fWu1Sn7z3BXx74b93JpAreWSaUckt4By3g",
  "key1": "4B11dRduoX5Eza2dgrq1yWSDg5k7onvdnvNh3EomBZNrJNZM2vfWPpLsMKmQK7AiCnvK3CfwTtL6Gxk6ewfEk8wJ",
  "key2": "3HEPFi8k14K56nVkn6z2RnmLx9QdarNdHPUWN9BNxL38jEYa55ntiPkxphysbH7NFAu56x4wK9LcjCbWsPU9tFsQ",
  "key3": "Q7R82qTeeigh6GyTd9ENutTu3RM2EwLNS5yYZfdhPhLSbkXGQpguHs4RJsqYUJ6NLiESJgZdUxWW9DPNo7oPGLs",
  "key4": "5bGS68pavsMagQEEE5eebrFkgx3W9ragjmFuLvdxgahuPZWhvRBJVij77LE1qbjmz7GHQNCJo4BQyy5zoyRL7dxQ",
  "key5": "ZmUZddaMd5jFcTTsd97gWEYjJmSAdyqUY7yRCx4daGFdBbFUxkxB929nwGuWDXhmYuqS1ZaXn4gyKGJF9wgrfNG",
  "key6": "2Zu52taGjiZnYasKDiNH4fAXkgtnr5Q6gXnijWMA6iLopSzQRTf5whZrBPYGPmjfXjgFKxgQCoVKcpFqdKByREXm",
  "key7": "5joJVa4eTxuL5oMkaqQifdKXGT58HsAqCJYdkrD1MJWrb49sXNHRGmGxJvm9khx53dGd3MS2i36aU8FQGw4aGo33",
  "key8": "sLRMPogp7U7nKs6ihQsiP8HYS9wHpg8heV7Q5zKb9XkNeR8qPnFN3M7s35ZpFgpDcosWBMKEm4QYwx8mGXge5rK",
  "key9": "3dBd8jNBsH4677Y4cLr51RQ1GXJg5cCuMC2TfRAhy2rkUdh5h7nGPnkvdCDaP2jaFM3hXTuHDce8d7TN8i65qR4",
  "key10": "519sheSbdqM1ihhVkWKBN2sL76hkg4QeyXyfNsDXZh3QWHxN8g6bXRB78DJcBUjYhwW7PaGz6e5g21cCJfSzKUBd",
  "key11": "3SyDbbPRs1c8wY8vDV9pCwyMC7Y8924r8FAqgh3N8RmJ5xx1LETj4ihAcvVjnUi39cyU9VRDQ8ZE4bJqBYvSJnMh",
  "key12": "3fBDodPi7fPoCjebj9i4NEfFy6B6TjpwpevQ4nc5LHkLzqZkFmZG5ytBKZGo8QaSqgCtip7WzgGkzwqauyReaaLr",
  "key13": "i33jobsTRQk9Q5zDaVpQ273Qb5tnDyxUbjJn5X2yfZ6gCMAprbojAhRv69MRv2L9213ekUnVH175Y7TvbLbmzhc",
  "key14": "2zVKKc2uDmcQLz8w7afmPcAwYyPembdnBte2Bbnu7PQidqyqHjCuCmxCAe21UaPauTmyC5XLRMmhveBGR6j8NH5R",
  "key15": "J1TFv1JcNBhkPx4DUUCMP1Mz1YGt7ZE54oUQdZ4G9Bhzakvz3cAcJy7wJLV6FaG6h6szGRLvHQdmQ8jsvqc1PUC",
  "key16": "5JhRo84B1vC27BDuKfabjZyKRWvsmXzaRx9VP3exz9ghr9JVazB1PtydFt6KEbXmCxinC9CsqwNzVZ2qinyaeiTF",
  "key17": "5UoPvWnSBwgUfaQjSwSVyNXKqnAqKTHeVj1WEaB1oREgL1uyw7ouwKjNF6ti1qFQJD3ZKxGrpJtvyLJsZsBEFd9x",
  "key18": "DHCXiPP9VvExBEVLnvKz6rVBum9yZ533gEojgKau6s8HjUMZJstEtgZJnDMBSNR2bRUxmBGjZZ1cUEiXnKYQuqB",
  "key19": "o88boCPdtTy65WbMLQ5LaAcBZiGKr7bPe1cVHGtj5VnVet5M7DwmRgR8z7bLnVEvvMsHJe4KUfnoBp7frNrq3H4",
  "key20": "h6cC88MDvqhrVYMaX1aVi4ba2kPu6zGzAxwqkCDx1jBHPn8riJCC3gK6WGQMXeLkg8tVnYpiS8hJVNgra6Vx2Ra",
  "key21": "51FBNDXCMDMJjiBt2PZoeecZQ61jzAmPDKj6VoHTC2424DzWwThA6LAM4cUTLWzBRGVaaAQzWLNkcBsCaCxyQLEv",
  "key22": "2kuumHDTzvYrSw878TU8mvw8ZwNvHnqCLyG3CVX6YchgFjWyM68PG4VPDBA9NxgqY1iCP5cr8nHhxb58tKyZnkYQ",
  "key23": "3vaGmhAeVexyQgPYfEBq9bdQvJJE3gbFB8yNG47KEUVcEcKZGwdbbFJPt1kpCppXukqsTRysTFDnzemW1pjBHpcd",
  "key24": "4sUf2jCEAi9uQHQi7UVBVMf84dPGritawZDbKf2ESkr7vRNKQ4MqKpK2cAgTWB3apFSqaiwzYeQv8E1LJwVxArk9",
  "key25": "3C84rN5LwRmdKBcEM8W3zGiLDcv5eCtPD7mcsPXVB9ACte1iQ38yu93rPCPNxDPFFcVBi2URy3eZPSeJiUSLjPvj",
  "key26": "4UPutzaKBQKko1AqYLTxMkWgF7gLB17JAYx9vsvbUGDi4FVWMEBsLiJp8uq4WgHZDpDzf4VrnyhdGifkE8eRo5Lv",
  "key27": "u4EejQRbMaToMn7RgBDDxn3iz8ZEVXCjryzmVTWX6y5PFtoELT2AnP6FVbZLZ1Q8TJ9kcNvaRCS3niRBKmvevL8",
  "key28": "57fok5r2fFXzrgkWWYFWMH9ywovuc8U6cJg2VoBGkEMfrTNqu6my97T2HB8qqdyLQFvn24862HXd3JQLwUyBgvWd",
  "key29": "4T6HGV1WNgetGyuugmTBVHoq3R4fvE96GaDP2xQvFasZqeYJAQn1dHZMd9MgNHWNN4rDvUKtcLghHga1PHTTP26u",
  "key30": "5CGraWJXXcuoWgS9xVimzFV34iDfH6kua95LQbMss4vdqcujKRPjkRPDNxKgcwmRdirDHwMWbtWEiSbGFq9k9YZ7"
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
