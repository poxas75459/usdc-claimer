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
    "4Qa9beffVDXFZ2hQHqdGGBcdAew84aMuNS9ScUxkQm3vUvKLQK6bk7GvxWuCPonxyoYkrdyh3EUGPyyAQW93brtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35aphLTFHfGkRu9sySVDN8RGpMQt9LCG7C8rPafSX9s16MPoNatzBssxnfLtEhtjASuPxgyBM62PYw3wSxPPQmXf",
  "key1": "335Hyfo2Aku1q38ajC5TX4oagFLAug7gaFZKwiLwipxB9H2AXfNZcKduFmXXFXEgtTSG5ncDo5Mz2KUDbktMPvFZ",
  "key2": "3WpuNYEPWK9QDSJBLqtP261UD1sFjSHBBckvW4ExrmU2Xjbdb8Vu5P7joz8syoZvjh2fFUnMaYKGpMKRifA75gWv",
  "key3": "4dtnbBAbqRaN4NVeVuQnDwWjCeJyd4ENCNfCyKdxGNTeo6N2ZcUxLASpvoZg6a7dDuC4hSwZcg5r8KnbVPSj7y7n",
  "key4": "NabC3s3i6XuJtQPgbYfYTm1QJRwzpshNztxJ9Cn8D9pkBs6NTcgAvDoBtZHMUChoJEMbunndtxbHHNyYTbmxpKF",
  "key5": "RyZj2gYQNL5WPVhLPhEKj2Jo1Qpr4MqcxHrv5LGw9QMpBsXDtjKquyuiuwQ7uFKTFcKipZquCBTtWcC5bKZEKSw",
  "key6": "2PqTwAkzdbiNbJLZYFrByFQNF8fwNKfT6BEekvGCRaFoFtap6U9AHBchj6Sqa2Zidf2HyKYHGZEhsGoSs8GzGzEc",
  "key7": "3zT9rVCEeRqoiPTGZrtjgL2svum2fxKYjrYQgz4PBFSn82QyRhwvAdvZnLnGtxWUJtq9FmSqC3sgytjJDUFdrtDF",
  "key8": "5fYNfuN9ePLU9A9c6KGCm5T3uwgn1EjfhKoiBkeh3cTt1VoZCRtseW96f5NQnoQRMGY6sHwt67Pg4tM1d7Lfngeo",
  "key9": "5H6ibGwoVy53QukLonHSnfCfRNVpmLtmaecVF1yEdMFQbRuygJVqC3dE2izMXpqqi1Pnd3ttTMaaNKf1GqPDqVdS",
  "key10": "2TVJUFK2yQz9n6GTrDojzMTyp5Y6FA2BznXNyjggyVYzkMZVRVB5j6rq8b3uD44rFvk9uMfvymo88GftpJmkpHva",
  "key11": "2cspdgXwWxgttEnQREKc1D8dGYkxqUmLuMXMqQVdcAkRPRajYTzuuFSbSG1WvjLp4o2RDyUbzKgA6Aty9ocjjtkQ",
  "key12": "zdDcGqKKNg3ABZXquCbeKmzbbqZLonxhksY4HQetBEnCjCGwcHLQdkmbyRp5xk3TZdf5oppodgeg4zNzBqpgoq7",
  "key13": "35dNxqi6Gk1S4FXrWsPsC35vcwHVLqdnJyvb94o8Mu49416Br31fAL7F1C3BtsBtA1i5QYUdWN3R4yjVdK1Zdf3v",
  "key14": "2GXymZf9fPbLfygzgFtU1X3uA9XFYjYvtimNN4iX4exx14Z1QSvJmSyHKY7ezHj8HGdzpfNYdf4yMUogu46B52bq",
  "key15": "5H6R56Rbcr7PdcTmaScN7pivUfdtx1DZ1bfi3aL1ABT8d5AUuzF8CnxABvJvBFHjNbR3njUv1dXaBygZZKNVLUZR",
  "key16": "hY8j5Ho38XmxaxwFoJco9rywnpQBWQyx2jP9cWW1aeKafpJm3dcN5gNVVEGPbyyMNeE2bwMR1KRoXQFYu9rM5qq",
  "key17": "3EdRu8cxnzyo3dGFxEtkmym6LAk52zrLWUx911E8GW88xSPG6eX9SRMZqMVbKm6VR4kR8pbso2TiWG85Ei8fLaSP",
  "key18": "4UvMJEESYcqub1rjFDkK9AKq1JkVqfh7uzaUJdoha9R3ieZobp4ajjU2Jn8qzCYHweYTpkhydKQTNBabtX5Cax1Y",
  "key19": "9d7vVG9R97ypf64qa4a26r6L8kxhkB9dmzV9mWKhLMg9cvDk35i4BpMThwYNmHseiw5UxZ9pX1bivYDFBDDKhSx",
  "key20": "2QrEXB7bpPK4RQvMSt39wLqXHKFBmoWRDM3pDUQTij1x3Po544rxSCY5SnXCGW2cFfu4e6EvZnHhMDSJGzZ8Jzw6",
  "key21": "3PqoqSKA5vMCfBmt9wcvv8y5JiXiHSQEZKm5kkHyyidk16MBwR7yugH2qo1ybVovUTXYPF3zG3s7Nh53W7zGDiK9",
  "key22": "5VzZy8YDC4Gcc9PFf5Zb24w4Ghhgx1X7x5QujBsZoQakeqL41FpHWJ2ikFVeK2FawQ5HszEF7YvpeQc75yrJE9KT",
  "key23": "3F3gf9AHghMPztrLzrWK3EKazww8nWsiq7ATmHEjh4BWC77QYi2ZcvJoD52rzAL1S1NHFF3EAkbxx6gLZrvDC6TC",
  "key24": "5aehPkfL8SQDe42U4s11KoAuB6YQrxNAm9u1k442BTAnSkzjYFnamHQYaCMRqujDXgTLsWHWPyRkJS25zPipujFg",
  "key25": "5pHG1CqShSsCHGiHGLj4tXHu2488VonJgojw1BuNTZgjeBw1S3XFMD4Q1hoVRTNZC8R9fKuDPGp3rkXbH5t7ujn6"
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
