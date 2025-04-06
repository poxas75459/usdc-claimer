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
    "n9U8BJ7tto8SQ6E52ArW92jBqCqVTx3MbLqYaTgTPRXSD7dzBQwhH3gkS7HrsZ7YmTH6Ghi2v4jcLagkSF9PWqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fn8keFGoVhfcdemNe4kBmXdnPLaN1iBe4n5mL4fVnWxfQR9owkLSyA2aCzGXrswA58XFicRsfTkUTvbRVCXwxbW",
  "key1": "2kG55LX6XZgX81ETXEaQXAWTdjjxPRifgWczR2UHyQyVpri178dMpmv8BBgMNnS1ajTom5PjgagsgparjCGF27Hg",
  "key2": "2tLwwT77ERxftYPpPfU1jAYhQu1MZu9XztoTx3k9GYWvS8LhCSvDxFQ4v9ddszFYQH9rGxdG7WvHoPhw1iY5svBS",
  "key3": "2BcDBNHuzE2QUJsiUSd3C6FDg5ggwYBnWRS2FkhmmZvQcJxCNidZP2gWQXGtEkdSyB3LY11SMxcAJcukDiZy5gmd",
  "key4": "5buim2U9UkssPw4sNguQUUvEQsqUxf63Za6KZCLfmuCgnGUvEvyR2xu2VRmUkQAvXDTnMSHFmzgbeNUjyzGwwSXn",
  "key5": "5NGroxSd426xQWG7grZZYDGoG63iCvrzzf6YrZ8N6cHDipR1wYVTyqZP5bvrVJea7gTQuWZpF2bALwwhuV8qHiWd",
  "key6": "5EHMKwG2WYrgvSHVfwMNoZpSEwMUeqnu4HxT2K86ZsDX4Gaw3XK1GxaMbjVKYbhEtuF1paBY9tuCzar6jPN13HLf",
  "key7": "4d2HNd1fB717nv3gWBJpzYqSCLps16pPxVy6u4PL7e67vx8QfaoKiYC6CL841pVuFcE18b5pRnG21eDk2r644wUD",
  "key8": "2grvy9zYCvhxC5nr7whsXJTRF4cTpiTaB7ZUwbKt9k8ehNwcwTAaMkHAqeMpcfFHg8cTrxHACFcxMFLBwAvXNFEd",
  "key9": "3sdGo8dYWxwoeYiUaYB2TaqQP1aB5bjkHRnRJMYRYTriSBSqcsNnDhTZrUPZc33wV2Sr8brbxpxXUuJLXyrfpZAF",
  "key10": "3JBsF3iM53HkMQnpjxN7jMUtEtRmFeVxUwboBDXSW42vWcxEyews6kr7wCquQ1UC4XoG3TpNEqLqaJ8xDfVBsQRy",
  "key11": "2kMW5Jm7ZvHnhN3Vm2vuLYbttzZATgpPmShuzbVQv7ahpydxUshVQuCvr25NMeZuVucMfWMYvwmC2FNMVgRJZ14y",
  "key12": "3cNZajpWXPomkBWZQS1F6VkcFkgPiYngNhb4pTcaKTjJdDiAcwoU8aK5hR6baWP4KPfhgYQASXsHe3ebk8Ak83U8",
  "key13": "QXVo8aZMWsrHDcb7UXkrZi2fAfyxf4PeMXUknd94VkkfgRehtUtCY3hSJiHA13n29BGwPuEJU82ngaPAHJ12QNE",
  "key14": "3A19bpbks7zDXgx5YTtVa389nZFddRmNnBWDHGfKAHEdqZ2wFxxecfNYN4d4bbPuNYtzuVTmGVNNTy2akUzY1mda",
  "key15": "5k2aMe2f76FvoYKwu4cQKUkjwCdEEphQWMpZcjRCiLNW9gakgccFuUPgUUz3ZDphAV7TZVwyjVKA6PAuAw3s7xuS",
  "key16": "SZRea6PLFQ1n9CT9mh7DbX5w2kKTFELRjYe2db8vNJcWwykfDDykSVS77XCcryxEbB4RjmiT8dysnRWyP4AcTiA",
  "key17": "4YCo9ATpVXBkjynesm2Lt3j4r5vNeGkyj43d4j8j5Hded4N1x6ikqQViHEBvBTAhLuCHxJqBMvVA2aARhsnkcUaa",
  "key18": "2e3wyEPqJEo3pAE539ZnNYo7EMWBe7nJTcoJxQBkzxgrpbwsKk28GiYqVDsqqHUGnnpd7jRNXXPKdBe5ckgj2GEH",
  "key19": "3aj5FhKpdbyEMGXzEVg73gVHEb375V2yxLvxgfnmPENmTNQLj6PtgbnnAyziz2fvxfXje1aR6qqffrRPkekvnHLY",
  "key20": "2zA3P86eFcH5xQEkV3Z1zdyKb3rHhVLX8X3YfFA9KVpUq49eLt7RkHwoDftMLJJ9jiQJYp5w3uoSn9hPesXVQB8Y",
  "key21": "4tYVuQAe2vAAkEYajkx5XX2S6u768XkdZodbnKAVVUHXj86qhN5UsPWQ6yFyWoHTpLPdZaFLscTwLpT288ZQinCe",
  "key22": "384giVbdGTGHrk3X3qh2YFmUw5EdRAqU2pj8ei3FV7oAFTR9B4BbKcJRcr2oYJEhdCeQKhBcjRMYERVxaryHEJKn",
  "key23": "4otAon72DHhPCybw2oBX3djU8DHEjV1dK2Fpqwx8DsVKxR1FbNa1Xjd1QoCRgNC5pz4N7Eh7peMXASjBGGtRpsRj",
  "key24": "3LzbfZ25EM1uvJw1C2afuhULTyBiPp3nLxudJ7oBcpF1ordyWeN9kyPRjMH9j3LjHn2BcFrgqGPmQ3cKgJNuxBS8"
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
