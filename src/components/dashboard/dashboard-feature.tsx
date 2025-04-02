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
    "4WWWJcaMPQBzbtUKXTm9mx2pDRSqi72JYbFNMYGPHKBmawCG4kkZcaJwRAhdFdf5kycGz18Me5TF7B2Q7AzsU2yY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EZPF6EZpPahrxZhPzTFP2YJqg7Syk786Pr5wtV1hT19iufDtpGvuPDxVKUQ4kBQy6sW5iQA9J9L2AQWjYGCyHm",
  "key1": "5ZXRLkvq4JsX1LaBqt4HaqyyMZHRsgciFRG4MhYTJ7sVWZcZoo2jJGXevoM8Ad31i95c8j6ENPz92Z5JiDZdzTMV",
  "key2": "3NtJNKdK9WsvfNSiHH6XSvrMkQjQsUPs9Uq1RykbyP541XceGb2yxBPHFcFENQk4muhNy1eMUpUukre3RxAWKkoP",
  "key3": "5zisbq9C2TycpfaZosLvsRPM2BorUuqwvKG6zdj7aQ98tG4MNx1KdxiDGoxttioUtxBnJTE462S53iALkPW8MHuE",
  "key4": "5txChsNwMft7a3zfh1BxTaSZQJZGnz7M7NEcgw6zPqUGcruXym9PhY6Y23Z6vJx96N4vCsJpCboGE4YJqT7uwiKV",
  "key5": "26o9NuH2YuUAXMQ9rjM9agS1Ttnjk2wyJRZgA5FeNaRSvShmincd2Woz7P2oLDu8BPby8rpDVaZ6pXZb68GbZusT",
  "key6": "64QZZsrGfK4iCyWUFL7d85Ps6sp2Kri2WX2w7Tc3gbZ3y3qurB4bLXqz7vBvM4mAXGCSGeKCnBNgp4neY6XcLQ25",
  "key7": "2LXbAK9df7mvQjLiW5zh6Fm38S2UZYBM4U63Wc2SYb1xu3RPtBSAcmmvmzJJ5oHNSMee1AauDspofqjxWFgqCJ1",
  "key8": "57LZ2K2TPpc4C4aJu9PrD4iGGkW4a6h4SVDFxBkx1hwXnCpUYsZgMd8NKWZ7KqKfTxqpyqHXnFH2qNuF6qCFkSr7",
  "key9": "37wAyrCeMJsuhoQ9AUnWPkHwcfBsVUBH55NNft3i8QXDtWuc4bkykKNPkmV4nMMwqVW5612ZydW32sFE8odY6KRv",
  "key10": "5bEyQzDHDGrt3eqsTfpVJHL9sgsYeij3vEW7CTw5E4vfA7vGim8xVWWebSAWfN2FvjWJfEzHPqg3if6D7e3ayW3L",
  "key11": "5Mxe5ZDDV2JvvmME2jzGGynEqmKvA9kGT6DRUeRFPLsE6GfwaknqQhNty1v6nT5QNxj6jkQgcbroDYZQK99QGm2",
  "key12": "2cfRf7PkBw2x5VUavbUBtmCYTE9mrB7nbGuKuue8L1zL4xnj79nFhMNV7QwzHjV15FKEcr3q9qaC8dzYL961dWfw",
  "key13": "5t68dTmobQ8nBSxvCyyN4sbyXeVtjAyYmyfCLeuwaQhAYe7jojeqUYKL9WVnMh7hawHYupm5osXj8nK7Z3mbnxrg",
  "key14": "kGkVtbL7zKWvVvXHdSg8G847N1Ci6JSbkCaaqSwLVHsWW49NUmRs8yxdkCTmavWzdZAnm5zsDMJzq8CRybdEtDf",
  "key15": "LboVxx7d1QF7SKtAJSVjdZ9f5RrUdKqeHRbSwawf3y5YAYrYZJrN4obkmtEKxpfL1fe9etQkSmgRbhFoC3KHoQR",
  "key16": "R3nDRFXJKVAHhwbyy8CJtuL9RKjFBdE9G8MqsRrdTtrRyCAvn44FaW74WS8R4DnKPJMf64vn365Rb9PJJMWoYBy",
  "key17": "H7yKyg5dzQh72D3z9Ty7hF6SqVzyy3p4aNhQb6eyPRAvHGagLVCBETiyKWMmxhdP4Gk8TEmNxHTBCZsFKYdkhZB",
  "key18": "3vFSwVhfpmukWXTA5jf461tuQRAuSvHoP2hoe8nMDkzqjfUNEcutBaGPCwHxnFxxqjL9n1zueF6uXxrVXPDAfHH",
  "key19": "5CTcpgVUkeCy7etWzFsVJZRd7aWjrbwqBJYUh5V7n8AAk8tpEaDpX9iV6P7qMzipsQkbikqtboSaU2nr7NBHCNwP",
  "key20": "5Vi4nuqwBjogZKiJdm6BeGotLZaxwzStbvXnzNra1AqkwmfeQBWKWartcrnwGThVyNgDSCDHgFEtfjAY33t1e32z",
  "key21": "3BQqfRxGwYaFNZjUth4V9ZdmZ7j3TNWja9boop8YfT8wuTLNGH2CjozoJmtk1wdnRWdpXazs8f9VyTGaS674RzDL",
  "key22": "4zhMj3YuQ2PxXQ8tveYM6RfqiZj9FDzMksKx7ETd4Vsynr1WbFpXsjA1bktkkM4saQCE7QN6RX5KjYxdAhVBehNz",
  "key23": "4JL9zMTv1fXExJXPNqr3SoWZhea2VFRfwg94zcFVDSBXirbknS5g1i555KBznYXSXDRkaFt3eSs32MhncEzXgzj3",
  "key24": "4oDe9YB1oB4b44zRyZDHawCaRdzovFNdtDLyypkfAr6QdGVLUD8tEEYVgGxFMcboQr96oSpN2pGA7R8wiVfda3Yf",
  "key25": "LD7D5Ka9wHKKetiSeEwGo25kfvqygFecrHtJazuqGkaReftckQ4iTScf24t8HPEAAUa8GGbKxFErge3CZENgS7J",
  "key26": "4s6JkgC3d2EZhrJ5WtokV7JXh3kcBRQzkpkVCRRfDaUxXv5UdAw3dpLFs1o4YaPFbjM4vNFGMSJWZChzVsAGi1ow",
  "key27": "zb4XWjzU6KeMxWi2mE4QzAiEWV6YycEXTan8zLWh8n3FQaR16kQtzD7aZ5FCwTaUR72gzDTZhBYZMiACtJA3V4v",
  "key28": "4xstMr4GGFQtgzaSuobLLSnJkoDoxFc6MAmFtPBiUVjVv5NFypmp2HLnLQ91TZMuGoCnU2oYhq3cKjjdcxyG84ho",
  "key29": "5SUdH3sRxXnqkneL7AJLsqm5FRwosW8dKsfymG4uPpfG1AvFY8b6HmEByZfPF2EHGYVrMcPdc5J5s2u7hTLX1xUB"
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
