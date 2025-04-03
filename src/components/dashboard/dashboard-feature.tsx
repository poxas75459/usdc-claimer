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
    "2MsA5AVJ9eLfLD4SKKGQyCySXLgzN4UPTLmBX2H24iXv4UmCLo7a7QZQ6cE2XapgVwT9FTsrnLEBorCwqHiPTTfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSYSeMWy7oRx3qJeP7oZf2ryJyn24du5jTny6V636XNVpbsyt3MBzBNFyngrQGhDSSgxfoGs6QGFYjZj8zbbmC2",
  "key1": "YDBA37rhuj4McpAidpM5q6h3t51j4zb51F2zPjoRzVABmmdaXSYNfmKtiDvK9RWeWZCTKuKK7yPpv7JLgBmf5EE",
  "key2": "2wkEjh2J2N4dWUoq5gsn1YXSM4fwFS6UzqvVrVLxiSXDd7fWkCkzm9YPWANhozLXsjCgodevcozJfKCWLnsp6BWg",
  "key3": "wNBQpmXEfNBcYD57nYme5SH4mX5D6CLob43VL5h3G9Rw6jregRo1g2AyAWqqp8eeAgGNoJAGZVPfH1jzDHrhTXt",
  "key4": "4iFhp13P42es5peE6oj1Fdt8t82RSunLJPMMZ6gZqyMxd2R7UFhwJKT1EZi5rq3Gjft3EKgJ9yapdoCcqHS3A9jW",
  "key5": "4qkDfX2iK6UNdyiT6HouM1PSGK3KuCNcu3a97e8uY9zZG3eXg33WSphAtkP17QhR7BJ7tzgV81MrtKNvyXF23UoV",
  "key6": "26Ft4d98Eyr3zH3z77hqFuk7PbfvdSxgDSiiv9tMMetg1grygkYBwTT49A2pkzrxXavjrg8oGeGdNT4zWFqaNYxA",
  "key7": "5g3nMFdZrwXDdzffuXUwcavt6MvxAaUHc7AWgscv4T1iVEYxhHRDDS7dvU9EtEgCvhTJ9mUCqpw8wW38uFHs7kXf",
  "key8": "5uiaxe6TAgxiXLtX1UgbXe3q7Bs7fipcdp4VpFaELQettyssH4yknGcUHqvYNzZRYvK3rGXa3yed61NrrvkapmJH",
  "key9": "5NiE2max7Jxyy6Ew2er3nAM4gkHNUKNbmkcqrWKCaueQoxWs2ju64xujwbtSiXfFDPUo7AW7P7WfXJtgR3VUBzJm",
  "key10": "2BtEdGdqzeQMUixMHo8nPv5feT5MEFrG31Q7kZPjZGauMdNrREJv8WojKesBGexPH4gDAMBB8317zyFk29HXzXX3",
  "key11": "3AeboVp4VfTYv4RuhjSQt9FXDHXJSS59Sdh197q3tyRPSgUMGm8GriXvjAGizhEyXLgamsBHTgiSRLC234meVseW",
  "key12": "5wGhhHBwWzuNjY95Y5RriQd1f9WEYcPvZp7ChcCotpptC8UcVUgUpWf7am9awbMjF1m3dCQadZEc6fhBS3gfBLiz",
  "key13": "5R9ddZPDnD2cgJ3AoZvdfEe9FEMavxFmc53dvJms4zPmwvTKjDCyU2tVyCYWkMgkQLew531CksUgswgFKVQMfSuK",
  "key14": "5KQBSKFapuM9PBVrtCUxrkUYLP1Qytro39ihZhAFmYWzjH2faXpxGDZaTzNJZ23YM3AXeCRDNgvgprAc4AQ3rSBf",
  "key15": "5nKbqG6L1V3rtfvA886xUDfXT67KsNDSNyDVsuAC7yTSktUsMQAUwPwHAndfPSHWoVwrpQRu2yStcxUfztx7R7oN",
  "key16": "2jQu8TZAT8aPdB9dDx2kAmXo5gwDEDFWWeYJYN5146q33ToRbSLPkwUDhhstHmTBjaMg9JgaYw9wU8gzbFGqR4Zn",
  "key17": "5dhRpjFV2nJqwKCG2GHzYQzVCzjrWecq5VGy2MMBChbp9vBys3NUAQDhmAEDA7bomfph9sNTsqJjzMfvHB3Env3r",
  "key18": "56RSKVwxJFtSADY46UT6K7ZQP3synMAcBkDFgQXwViYeR6qPbGRaRRPuAT8DD82Y6g6y1ym9VX3oCxMmDCrss3Du",
  "key19": "4GLFK82FZCq1Gb29nT6rxU2zEo4N3Cvxx6S7Wmvn2PDp39mXYStSRgMG12CeWBJEM3jYV6qnpvEUWsYxSwf7QHwp",
  "key20": "5FpWXwiHmu8o7JGpv6UFdNJSgAqUih7DAM2EX1j6F7LCpVvPwo5QCqkK1sVGs38xZDMbjmfqH9niqkSiS7NgtYUS",
  "key21": "2dCQ2HWcwyeVd5jYB8sE8r81FWgAbfCzENAyBouEEMnRSVbhcS6e92FPoNwKJPHpYvrjs4LGjYCRQR41ohTuEDs5",
  "key22": "3PWM5HfeHnLzXNQGQXi5dakVwvxx5HhqEozAKQ6MWVNjsMK6K4P1XyKzD4YdfLYdmkTmYxcdxx6vrco3G6yobacY",
  "key23": "3yLuPUW7egabk7bUCDroKDhQLPSyjt6cjXFzGFNFLGYZLuM75hSnVdtsxcWLRohipbznH3VdoxDh6at9eY3UGSpM",
  "key24": "3eDasLfN44sfkKM6T6crYkboJK9eA6EnRwm3PimWLt31g4mKuoh3FvbLBP9XMt8x9GfrvJYSmQrRV3TZ24ecKWuA",
  "key25": "igpyFH9HCrH9qxT4tB2nB4UYna1rPcj5CTwjXCB6netVsDZa1nDb8e7qb8Mq4rkmkf3KGVtss8sbR9VrNtQMKHc",
  "key26": "tseU21B4Q6VE5tHnFEohNmRjuXUf4FmySkP8VLCCPRX1AiPjFLDpLtYXjT89VexDq6HpgQQLfhTePSuWV2YNt7E",
  "key27": "5iTfHb4E7TuzCXyVtyH1S3CSkzGqPnhKnhNx5RaobEZz16X5oxZ6S7hwpCRjhPMnRtb7yq5yKgCUveJ9AeCxgPun",
  "key28": "2SaE3F12ErMoL8D65YffSbwu4Y6g7N5dezFWvXgLtbQyficnXEjzqoaRM44SbBQ8sxRVXvBg1epMoeug9AJ4Khxc"
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
