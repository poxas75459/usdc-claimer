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
    "4o5ocGge6JdvbvE4w8e4CyTKShjWZhL45Vy2gt7hcQqYJ4MJ2rqXhHwgyLXAsLtXtp2KT7RC4sbf41zyNPDhaKFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZ4c7qN8gyBELRS1aQ3KNjtdGZq8qn1awCL3Swa87uZNRhyY8mnoAETNA4rt6fSR1i5i1VdAg1cumBwiZZHEZgL",
  "key1": "3Hj4gW1uNsxWBvrxFuyHtZ3ZQUMFSVC2tC2HxpoWULGvDk1gNLKKVhdJKcwntTotV3HDrbrFQ8pecNKCGYM8QRCS",
  "key2": "TPw2HSZpMYTepwLSzzqgtNMkySqU2b4QCEfwrnM1AUgMNUh6V9NXauDUSFEQkiYToSesvdV8RVBmXkknaF9yYJQ",
  "key3": "4tEWE3AD9D72CrvQmChYrFBTQAMf2EMmKxMgxRpWdMrAfR28pCQiLADRutTwPyXHZ69GMdNGStPTKyRnph7bR2im",
  "key4": "dTuyVkf7UoarrAW5J9tvNMwmg1caahPsZaaeVwmaBiaFBmYiqpU97LGUGkmKhSTkYTHmsmye3vfrJHcXSAaoE37",
  "key5": "5Hqq4na4JTjt81ZqWS9kJJkSNKQqVsjyroJLAdDi5Kvv9qD2WnY6w78dD3FEwLTio3e7T5wUqvg3DoRNLGaYm4av",
  "key6": "2Q2sVRMmNejLiwoniWUtQFmTHxdAHs8pjDYF2fZW2USHximXD8B5LJi2RRVjvGok8AQR7wTtPoKKvkwsucCnRr3X",
  "key7": "5deLMP4hrfKFgVobUJ9acyiNAqw6oaScaGueJkQuRUjUV4HSY2USvojkukvU41h8uqV3c2i4WLQvh5JJk6uRfV7c",
  "key8": "LbsB16apZEcafLy6Wm6aZ4W2ZnKDTqrNSoDARvP1DWhFhJwCx1JYTa2iyUVSWoGLezQ5voXSXdXHWEKrNkBypYr",
  "key9": "2R9ByRGYUUuv232iFvwYmZ7Nu7XfoLADiaLQqtccfugBGk6fJKyoSUnerveRZoQKarA2CSpgo2ZN3M2tuDTy52mF",
  "key10": "4TNBskXXsMUDYxRj1vELkiX3RVy6Q3i8JmTswsQAzBZEUxsVt94Rrs9uCgHeVGni2oPAC1mnyL7HkJYNiCuXy4NS",
  "key11": "4ZRnvupXkRJ4nrRjmq6bzqvXdwSPRi5DEKVYHvQjuQAAuSMoSLmXUvktVYATuMcfNCc5DRoz2rmUhsCq38BRdRux",
  "key12": "5i3AiLxTPg1kF1ESm7ZSSUG9kfFQfX1cDq7ozzq4QV4WiJ2nWEDDrLTCQuZYuymrmbUTRvoRPPxbbkxxaSM24pMw",
  "key13": "2ryJKzt4QY84hwvxnipt6wqNcPHbKteEQjXoAvgabgzT8WYymBBtUWeDt9PpWHFd4S3Dfa8ht5bZH9JJtCLoeq1C",
  "key14": "2EvsSsEMi4R8fkeKtAcBNg8fQ5PvoGUBzzrxqsmCNuYdNkTCxR3tWcyz56mjrvkRKUVupXGr11Tnn4wcd6XWDB7t",
  "key15": "35VcMZm8mhFEW5WAh3bGscZkRj6ZzwYSnGXg9gFVnmH5FWFvWXFF1iye3xxXpHR73bgUoei7GvzJbLGmwVGfeXsJ",
  "key16": "3hrcLrAjX1Cg7ZuwxDFcb15sh3jkRQ5YxmpDvbVpeHD75GesKDV9GUS11pJp9rjLK6Dzwp9z4SPBynrYMsGzP5QL",
  "key17": "2gidnE3HD2grcb3QiGn8PUi5byERFWVHDVcRMFeyzfinR483QvjvWGtEemHNy2iZebbFn7gcjPiRMuQdQZCN8umm",
  "key18": "25SGyeaW9HBbtVrMKqggQ9PqiMdt41iNJmMMPMmbMV3rA7ftkbUtSYr8ETY765anrkyeSnUACF45t1wwBNuYH2z5",
  "key19": "5ZpEair7P6hZt2Jpi1MSdHKmQyEbrN9aRkTBVaR1QoaTtYQCfjCNA9V7U1x7kRBgfbCxkY8fQfzXK7KZUUAECcsE",
  "key20": "35BUsWUHazuHndh4pa1toQoZCkPTiGDRyMDvy22xh4knvWHjuF5RR69kDbQpJbLR8gtcq16MdzqW16KDdwmSyuQt",
  "key21": "3ZY9W3reKMz3uY6o97EUSedjuGTYCxw49XtrjzHWkDJrK1bVC2NZ48D9Rokzz58eGbjYbaRD7rePtQdmzwCwTSpE",
  "key22": "3ECpg19Dai7uqGCUe65Pxvma6KDjNPh3nH2wxsbughRVQkYPrfGKcYsXVRaeqZ9wV5n5ECwp4anY2ggcsA1EfMHF",
  "key23": "A6G4WffGsz9xzco82NTcW7TKPjWR3bmqnCzAmZ4zh4zNxZpoEsygry6WHhgL1pBeAbv9QE8q6JZTHE8BhyWvwoE",
  "key24": "35PRYCLPPzUgp1Cvj3cnhZ1Jr7EU6Di8BxUZ3SX5QS2tchBB7JzvDs4n5rtaioZmDDmHJpsLYYsQtACPy5mYWCsV",
  "key25": "43wZ2xMXRMbMW9MLyiHLd6XDyrQ4hm9EKjnM7J2XzmVtqfyGNa8qTu5zTvn7D3i2BmdPtd9qoDpwcvRjUF4shgFx",
  "key26": "4SfN2pasF3mAWiLPCLWzVkm3zrzrrv64C4c5S87Ge5vcKK2KH8J5n1ti1eQtwzovzedWKRFnsZx3TQXpVnowMfgY",
  "key27": "4QCDcEaeU3wSAq6yHmK99VTDVuEgusSnqTfwbMtAPiPKZK1JxmkMAJ8TvqnbYHcUenppUEWNJMNqK7CXLmfWZf21",
  "key28": "3HpoaCKmrYNCAFdfYhTqcDoPww6rqkN63Qac8t4bA951QEmQKD6ubuRiKa2jbwXNBNvBHfUiAg8XtSTLruRPtvYq",
  "key29": "QxyNPWkjh5mXcSEyQBEiGfMwjNRg7SWuPJ8JhxEsPW81MameA4FP2q1WSaYHWgbSqHiQ7zuKHDR4qXukC6pynCD",
  "key30": "33xPVFU3jgrKXnEF6TUcA7i2RS6Ly7BG7ZyRCubsT7QYJwWaQKeyWSwnL84F3zn9Zec6bsrRZB44AhSYPK3yhcQm"
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
