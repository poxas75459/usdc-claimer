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
    "5fWicxM59f8NXbpMxcL2CoaT2NUjChAvNkBnHmXTkFRrRA6A3qd3mwWRqJprA2nL8z2CgMxBppsegoNW741VSTSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j7DaWVj8pBAqVV7bSQGX6QucS1QYXDLKSy9bT8XCVhXXpJWcMwj6hmRBy8Akh4N7s9of2MeuhWBwMq3RdVCVud7",
  "key1": "3SvRVZQPt1hSxKeSpCM8mGFXvmJioULz1kzbLwAmXsZY4PqSVNqXphQWq7HEKA2oqwUcYAqBTFYbdUpn5odd7tDN",
  "key2": "4artwyKDj3KMNbkgDtV44pKv3yCJLMRuVpkLfykbcPeogWtu2cABKk7Spkkxpr76DoPE3Fyaux5vsAWSMDLSwiBm",
  "key3": "5qZ5JvdyP8GaFFJdAq5rsNw8uqSuoXmnhyjSGV6u5mq8Eb6bEgKvtY8GBSxPDBsuGJ9QoiZV5ysXsKbZXbERvCdy",
  "key4": "52n1iPGxc5xcwxAoSDWiJTHGCwmmJLuNeHBdKjFkKhkvMWfRho7nqFfDkqxLAHY25otwL6ZRyEGLygEPywzzb8R6",
  "key5": "4T3yf6AtKMrp4vUdCD77o6TDqsfneaN6FRkRot4rEzujjQu2rA1KaJQ7NQcrtPLaw2rJE3PWMfNUQEsrVaUVDi6h",
  "key6": "4BtXVci3oxnBvuL8TKm99pQSssEkV2qyj5mU5yVaDDEZNoiLHGgWhipokPQumVcS88tc5oxqW1Acms8jLmiZ8C6Y",
  "key7": "3UrRPbYEeANNTboaKRYuSz4ut3fTzTnj8v24VjYp1LjesRXrkYU1sZXtXANNCD313UxpjwGRpCwrnsnHiGUfVEtk",
  "key8": "2zzwGmPYR67h8D9AarxwkCpM9KCrCcSSjr4CPty9MJq4edG3GbCbKPfsXUy7irAMdZi99H5pTpVKXYCicxFSTvTY",
  "key9": "C1Gdj88oJLkkGV9W4bhBXQavAoDNMAWWL5Ypj7AR4bdGgp4oydrmkfrn7ePYfpK3Wy8uYd299mdNr8DMYt1kgiz",
  "key10": "2gq6mnttwQy7BW4xZ32HiPqejwLaQr7Ts9zKiJTHpgBze8BJXrfurjeRmkejqpuiS7syAD2uGbZMWVfPkGBadEo9",
  "key11": "3voRftKWy7T3Xaxk1QDRGoyTMd6DASrQdEungtmNdmKbZQXnWQnj3Lb3ghWrFXaZgifhkx4uixFgKTG1bvEV5qLQ",
  "key12": "3BvUm3JhyrBbcjmvuhksSHG5LH6kcirvzcmVTigP1zCPWbf3ByrtpyyyeD2eCTu6Hn9s2zRsQyFwDvZfxp7KQaCT",
  "key13": "2UGJN49gmGBG7jmcM8Vu5kVdcSJ6arMc2rdnb5PTp13nadbJALssXbjFG9oWh3hgH4GcFQGEmzu1mDY4FipoELFq",
  "key14": "iahgwgJLVcenDM1hHpivfnVw386SLowhQsZcFcKi8u8cVxc4zuhdq1uzpLfbXssnfss28R8RrqK4gXTKfXo8Jvf",
  "key15": "5DNyvH1bqgMQRFift7evKyrLybsx6gqj41VCkcDybdLJWnts9kdk9pxPxG8j9vXne6VVV8kciN5mFAtTd1ASessH",
  "key16": "5skWjXJtD2jJ93su5a819mT6g3Y9VuXj3WsiSEjaspwbDnDg5RgwxugR1UKzRfUtMj9tQE3h5qMv6YAN2PoUs4q",
  "key17": "4j4TBmQkxb3t3GVV5mRqWDiGNmPBxNYQSDffvNoAmPmX1KYLwe7G2HcU73BzZXxLRmWkjKK3YV5oJm7Huyu9iDH9",
  "key18": "2fMXyHqqhAg8JZY23GeaNs8pbQdiH5CJ495wor2NG3DMgd8bJs1UdnEMz8kzXSzre1sNQdGRYE9yAnup8G2JPnRU",
  "key19": "5CMzkom6LHUfSbXakxZaiJska7BZTCar5WxqrkSydcnS8uwyoDjoJJoH6AUHtmAvd2sN8a79yy45gPs7bcVRhXQu",
  "key20": "4kB4f2HHQSGHQXWWexrW7NtQoY1hztyqn1MQJKvTNHjcoBpBiFSfrAvdEBxdjmb6eK6mYCfFjoLbcY7rEFxUXWKW",
  "key21": "2KBkE7PDU5wGKvooEu2VXGF8urWvjS8q8fumdAgDbGCBbTr2YZqEsSxbouKX4hYyzmSzEKGcL23mRYbYzKQSFQkS",
  "key22": "4cg8fAEq6QCs9V3RQdkK6ZvsL7NMqivGV3bsXY2UhS8WesX26xhGt9fRyKFttenCnPCddtMiba7m45rMJ4AtBs2M",
  "key23": "637dp8BNSBMnUST9u9sNu6C8PLzKXfkBJDvX4ZPcMaCmb8K1sm9bEpeoybFeXq1q2dthLhyWcuCpTodU5i4t8KC",
  "key24": "5ZHAJgEYaVVL4DopyGiziqa2aSizZUsJRV5NnUzaJUeijpshyMnSEBaCyMmMsvowLe6o1apn5b2a64NUvtxbFytj",
  "key25": "5VjziuewbsyarwLc4i4Um3mrk9PJ2idkTPFLKPbinMyFMekXMD3RXZjn9VHNWs2Ek8XJnGS6RdfokmWDgWgR1V6m",
  "key26": "3798bivNoUnp22JYJ1aKYVQf3xco82KCGCDZFuMarJpm2SaZMN4tnoVZ1stmhTTes4baEx26qdTvynjVWVTKYXr6"
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
