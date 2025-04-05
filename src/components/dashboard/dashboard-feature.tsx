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
    "sJiXKR71rjbpszrJ8EwDt6yKvUDdVT93cEcuyT1JJ6hycJXy1ZATw9N2k7b79Q9qtgCB4SemWomRri3D4tsYmfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PNGZuzEA2Dbaw5huXYEtYcnQzLAVLxk4ijDdenMXoBi6o3HdfngkKEoWfMDY3v4Qvsfyz2KGGvUDNcNnNq8QSnf",
  "key1": "4BnBrMoDva3xtTXLcuVxgW3K83JNijcgtv7nb7Vzuk7vw567QdcvQCGB3hgL6HoC4uvH8wegys2aqfe26ffjeStt",
  "key2": "4r3m7qxKzgpWVTTGrHn5LF3sJ8sT5oME6TDmodLArzvvV1TqkHkoDhnpceq6wf5TjATJxBSrHSU5sCQbhhfEhKtz",
  "key3": "3KPNhN464ahWWgQU73A7sTzSJ4seuXehFphQEZgiHf3e15SL4B7gXWQ4uL3WZFc1gxQUCV8RiBYkTymcACdGHeos",
  "key4": "3zeDqwfh1oTK3US61VmGLFABAnRSps2jmPEx3K4qwwTMNZtuGBrvEfPRXoU9RXtCbPTEgYfBm3v7iqQM8DuHqEk1",
  "key5": "2sFHBNwimoAPG4mN6knNopWDkuvU74C4xzXiSduYWoiYDudeTSs3JKBrKeS5TqiYK3yJp4TeHcx72zaC9KcewnZc",
  "key6": "2J9FzuANVsaUU4CY614M3bSBgoeU5yZK5Kw3exWrY8YvxZ47cj86u6YZk6mmEcu8jM5CcqLsfKPsorfrr5dkTTox",
  "key7": "56DYyECfNDs7AGofMe7qLGvq6iXrLzj52jJkbiFKMNNmLCsMiwVgw1hEqLiDVFijkUu315iBdtvGPZJpsDxLKxAt",
  "key8": "2PZWiGByYcbrhgrX6Btpc6QX1JDG72iWQh4zV57r3h4Ts3SLT9kA2r967QW9HSZstPKi6xmFUDJ1zZW93ww4mzrJ",
  "key9": "5BxX8f7tP44VQC9Ww1ETMsTPKYNYrCoSbUbCzCy3GF9dd19SeVyauQ9o9spgFv6ctV2iEhNFTWCnHbCAhvHE7Lit",
  "key10": "6iDsZayeYQhXPuBMg7rYtrzjyTWGXtb9BvY6ayN7FoXpykoUb4kAAZBgnUo9pG9o93JpnKDhYkTagJGgbKEqGMo",
  "key11": "4bmnFcH5toVGzvaKD5CST7pKD8eLwhQJw1e7a3a6BSwksB6MegKmVZaFcrJSe4wSBFhDmkBpEzpb5PYL8Kchd8ti",
  "key12": "5cPVnEHk8Sw64Lm1sa2DGyZWy8du86EwgowasYRNf3vtzMjpEQxXsUKaKSnumLDoAH2iLW9hPnCUDfJhMk9a6G37",
  "key13": "2jLFLeWkCjJksgpsWkkXQ4QRW4zG3qakxMx4RaNLHMkCgM3U9C1L91ZhZx1s3MqPSwrdXv9GqKJ4wQWthi6wzDth",
  "key14": "5vAsUoe3d34SFmipVBKdzQuGD3omzSNxSX8GbuT4dw7SuGgYGWDYtcPFcmz76noP8GG9y78MfJgtaUuj9mv33zHk",
  "key15": "4YYmyo8zD8EYiRX3qahxEt7UNxUpUL56FEji6gAbKnXspXPNvG1NdcYRtdCHyg8LRLy9QVEwpcjgGXC9o2VYr2cX",
  "key16": "21bDUdUaQ3uuYjQeqP5unfNyrkgiEfVHH85RQMvkxMdSgvifCF9vGPe4GcAf8W8qGVbeAgHQTWvW3kSK6pjXHdJk",
  "key17": "4YPkN6YnLY816vakY5cmoiwNtNv7trWKKRo3BAMW65nxWJtXxYJRhx4dLWj5eUsajzPpB5GNGAqpkHVAxL7MY1Ju",
  "key18": "4XVc7EZ3xJkHjhyWWyBE21ZQ5f1wvvQj7SRhW7bUgqnB8TL2MXvTFm5rDCV3V8XeE7LQEQnJ8Y3G9ng7K16uqmiJ",
  "key19": "2Rb5VqXk8iPM1V1EJnRadScTg76V61LAzAshGU2chQBGGHz37RMRSFihFjj2bCUXpBDaf9pHfXMM8SnLimVrVfYA",
  "key20": "2i74XACbcuLjRiLZs6A9CHzLQeYwsKV2xZZDjUyBJavKWQyV9FEGXBNgcgUxWnswuKn1yLkBThAtBaDmpGVd8eGF",
  "key21": "3L1zy2yDZZoRCkcaucbM7GQRhTPdYToYr4UmDnqizrT7EXFGMK1g44HFw3WuzxnNw8rYQGRJ8RGGd8FfqRFLGrC9",
  "key22": "2raYxzRdXQe4a2Mqq9bUgphcwcJbNcLdWHHRz18AgPxxPBiqVYgRGcrsyrbqrnafQie9js2odbfSdKdYBSqzKftM",
  "key23": "7TfMNFATAKdCD7X9dADwQ3zq27eg27yvcMfdUo12Bw7fMGqSRKMV9Tz1v1vqZTBBtLeecosjjpi8JT7zfSRucL7",
  "key24": "4Kr4DpGWeBPJHRmayZqgxCyWFMj8DJiEtraDTUegV4r4y1uycPqCyKsBmYdTmRTgt46QQ3CFoHXGxkLYppooXVYi",
  "key25": "5c2a6cTSoqBx7jfnbbu39FmAHFTrFq9ZZbhdwwuenNAPid6DMEbVjTqeT2DtrUhgcnpBUeFjmvKWWc8Jcye7f9n2",
  "key26": "2E7e2zT8SLVQYewc2MjVPDdE2hh8MqYau5KN6ftJz55A295tLWB8zGrAocRY2FPPGQtNmheXeuteZmLpHdiE2meZ"
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
