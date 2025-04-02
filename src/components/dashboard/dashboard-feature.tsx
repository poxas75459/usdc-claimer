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
    "27MtPXwAs7fzWstXdQzHk9mEBP8wHrsazQxzdmE4PNUqXWpwhS4Mm1dDNsyV2EMz8qkwCjjyRsMEgDL12aWgGxJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661sT2MpbsvtLkdvqa1X1htK1vMbmtjxcnJQjn1yqqav7M9z8a5rqpMhd12e2n8hguFZ6Nsj9UNm7M49AhFnnSAr",
  "key1": "4sk7y3THccyzxrVmJerhAMUjSMZT94pjuQkYkgW8h33HNc9PbCJg2KR4PoEybdtKZ1iw5TjnXNweS2JZzkKruR6c",
  "key2": "42j2K8UYay1TqTj74cmbUHdmfcwesKASc5v7QbpGD63bHkCojfymVwqvDYhTvp45MnytatjRJXkAmDNwrnoH6yJ3",
  "key3": "54TWMT3HCALruGxYFnv5EuCHwdZoTRtQFKyg2sp7SqwuCPQFjLV1rw86BnAs5wiFTsST5oUY1TGsBTUnemLLoQE",
  "key4": "R4qcZFSQ9WMHs5qYJEYLdQzgKXghXMt2KxxUUgVmobVwFqidbCqWR9RdriMWwTWpbUBGMkCH7qStMTbHLso6jx1",
  "key5": "5Vx4N5w5VpmU8He2x86WBeyPNqWr7uHSoDcvAifgKGy56GBkgnijgLHhrv6s5X58RjXNsMeJBG4ix135bsJziDoV",
  "key6": "4jJCc8spsERLLKpuBmdcJ55KzZ9bQnUcA6eaHJXUw2iryvnY3EUavaJoacnfEazQxmCdYW72jRWqZH9qogzXw8JM",
  "key7": "3TLP1ZB7F4MrVvoZM1ymJousQKXFN4BGniYoGAAraSFXaP9vxcpQQbN46ihJ9NyPTv9wfujCcVed8mDbcExGuKxe",
  "key8": "P7rh5pJ1JLHKuVv1DwTYqXzCPv3aFp834JTZAr7W9sbaiTL4JcacYdJvVAsuX68zxZzx722ojhPqkTjM6vBGAJi",
  "key9": "5ykAKb3A5AXgL2etVNo1ZoSTZ8T2eY9voErHUdcteMErRmSf21k4hUarYW5gqG4pFS3qWWfMV4fkJtmSpKWfRuZZ",
  "key10": "84SR1JdN6Lrcgs1mybkmStW5KhFFyKDBwg2Hdbeu8X2vbeAeNrQbnWErAiSm3yLKfd9oj58wu1BYLBykmjwEhVn",
  "key11": "4GJjhpF4kcKpbChQfzwNuQmGiDt5eFYvmJDsDEEWciBFueLuwtWnoEpeVCkUrxvNY9mgBRTi7MXdC8MJ3jdZMyio",
  "key12": "6APvuVmX25Qwu25rUj7XgEAw5cEGu6VGmyDSZqp7YmMoJqjZThqRFdqK5xwpcJwqeAAoWqWNsfdeMFLY7qCgNc8",
  "key13": "GtP9W4xC3jm61jQ53yzKTCPxiLnPmfwD7dc81xp19EuMc3hQuLb3bJ9QmnAd71KSYCMyD2Np8JcTXNWjbyTbRQP",
  "key14": "3gVAggpy3Nm75oonMHa6GGMhZHf2Hk1qJfcPMukhTJwqeBjZ78ZazU7jNqv3UtQosXMpYdKoEsXP7fn6NVfXcE9d",
  "key15": "4z8ArBDXk8YS97ayq3Q9xmKXwRdhQVuqCYFnesohLYjRxF7pqedjKz1uFguW7XyGk2o6D6oJXinpdyPZXHg6a4FA",
  "key16": "5KM9PskgNjcwXGyhLn6npFrgu3T8W87aaVZ6SirD2n15GHMFcbTimejmRwn9NnowE99bT2EoDzd7cWpJgZDaDGPG",
  "key17": "RGujpoWyELa6ZnY1P9aTFx2VWtd1A1vjcrabHbPDaEeWrbUMuHefhvxFcaecFCxJWeJ7paaKASd9kCcn3AkGDsX",
  "key18": "4uKUdfhfjK5D9F94KNjMHDscU2ar2JcQ8tQbNjP9WMebBgGYMgFpgFYnR8EujRPbMN9usRfdYfNkA4mwfQq5t5Ku",
  "key19": "4SscWExHcur1SKNnh4WZjbPVqYYhgvgzS5LdbKycnrhxrhgaADzh2ysCbfAcqJPxc6Aa7HVM3bosWiRGoZm2Gqs9",
  "key20": "rDsBUJZdvz1nEWpMPhWEowdbT4X2NUTaSqRByDJzCPPLJg9ArgSWzu6oPj8eLuwkEK93q9xTPdggtikbArEKqSN",
  "key21": "3VfDuqdqQX8KtTSqREbgG1HD6FVnA1XTbwYmUnyCzLSyrknyPvBrRz1mLoCtPjZgFJbaAHYBpho7TpizshG3DrzK",
  "key22": "5BVP4tQbMy4Au2f3Sxp5AMuXU926cfcgqKtx31gBZGJNwZ3ULEz5VRXENNMaAwCga3WvhK77RAqZcpqf1wL6zt3i",
  "key23": "2KKYHDk5G2DZKgcQV88YE8KHXSZJxDHuQJHDeidDSGcVzaXv55uUTPn1sLD3etR65MSV9n3gEcExox9YwJAJVkBN",
  "key24": "8afYUr47gc4QWHdT6C5EYvLpc5D4sjPbbzHMdCXKnU57rwJGvMwrmBtuuRfQeE7C4VwD6Hez9o9Stw7dm7HoGDG",
  "key25": "4BCXEaHKcDFhkLpRRnV9PEBt1MwnfoYKxKpqGN3uLRz65dk7e72hz8nEuK9cctFHoKJkNcRgFU6fBp9axn9tCVUz",
  "key26": "2NHjSmLNDAzCxWpZDW39WF48yC55AfzaWPtUReVKpGToUfDVtpPhxRQgUaepxDRxRHHpXwFwxi67sLcKZGmRRdwm",
  "key27": "3kgtMr7y1iuXXUE5YviBJq1QFZrtTDfeEFdYozmdmM96auB5Wdb6CRHYPwyUMwpXqW4sLPaYNuT3r4B62kWAbKNh",
  "key28": "5TN1oCXykv6mkk1roZNDaggFD8UzNM6VE3mkuCiebqduGxxpivMB1nTRTKnqYtE3cHpGaWERkk4aCfu1D9UDkEYX",
  "key29": "4j6QyfJjqWwhioUDNZEnLrbbjCxgi5WkysZunGDS1bJVQ2ro2nY83SC6DjURq5VZEwCTHUY1F5kJwQM9gCmJBSp8",
  "key30": "4rRvbRQJGKZWjK3vFvrM461dgkrm1FQa4Q7F9pHebPBjT1geBFT6Zb7GQbQXuBYPvPRvUyUqmF1x3H4NptBrfB65",
  "key31": "4zjGRxU9ZQCPHVkgbG5Ncwvoau6NXTzqBuqpxzQhkZNq5RK9DNYvrcdgYdQrjdPbxPbzpeELq1Y8RmUpatgiD6qi"
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
