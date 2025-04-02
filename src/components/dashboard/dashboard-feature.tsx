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
    "67eUaKauaPq7otSQUGZas2tSmGsfjYFJYEtaPd9p633PpoK1ipc5e8Pw6PzqM9rjHuhzypJyzCZVdwwrxa17KBRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bBsPYw2os2Rqx3qJ1gDbvpPVK3TMxMezQ1pFjULzhHSt7NWE8khgY1WTMSBUaZ4Z92Lsqx8ehJ42FtqWs5YQz27",
  "key1": "3sZfSQN3sBRd2aocFwuzqzT3b7y5FQoWw6YhY8ate9bkUwpDEc3khwS6QhqhqtkvtCDxKSkTLERXj5k2eUdHmMpr",
  "key2": "3716mA5Dqvj2SahmDh9pamWYqUBLEn9GpVq8dNrxfLyyeuqDSE58mCBU5oDeqDgE16HdNvYfrewMnECfJZSkjsmR",
  "key3": "2fjbudyXgLfwUE7MLJZDoTsebrpMdFzNuvFoukTzeZ7Qc54QxHPLpoK5C73bLyPkgW6Cm3WYD9LpVGnxaGTzPTnE",
  "key4": "495quccXUzMaQwVLc31QSkmiiz44TizneBuwSDsUu34m4zX9GY4LSyyeUFBSS8pswzWkMPyj2YWEnic7ARJPRsf1",
  "key5": "HHc3sFgaX5XRnURzrhJGcQ3Rx4UwwRP7ZPkAaDGWGrkUKfD9N1w8FdtBSKiNiGtjPsSy5fwdJVntdehdXducrMc",
  "key6": "3jp5CWEvH2nPMAcwRh1diPfGzFUQWXaDzJf7RXfg845tFFUpEX6XEUHuwWjGBGJXyVHeg5urz8Dyj8e3MxFGSjH7",
  "key7": "4kgoXgAymcgzXcacwjJ1oH4tTXnvuuHrSHFPedkQV5DDcuojheKn49SxYLS3P9cpBCiNjpuXzw5TNRCitZSsYNvm",
  "key8": "56uJgFqyGQZdUSKmCmqYwKHou5MHTc3ZWuxdn8HQHosAyERvmtdsfm7CYXNkeDgZxK2FVef1UGJY2xs3qsX8Y5cQ",
  "key9": "9KAJHWd1GwPj5TnTynR4iJQJfNzon7DEqDsxh8PT2nmkvPmJyCbmDdcT95weinFpKXCPmFcyWSHuHhXT9rWfLqq",
  "key10": "2bCFVBi2bogNJkVSasE1e7qpr7t9FQp9b1MSPfwkQNsy5jLfWJEF8mbq9uzNbnYasAZZ1pwUdy8FN6Ln1gp7TYs",
  "key11": "WPz8b88STKEKxWzTeubVDmt1VxRT8J3y5jNfEtQWegQ55Gv8tZvzu11qAR5rHYBf2PWkQLdbiF1e9Y9qz7mTYvY",
  "key12": "2E8A3f48DDJBUCBnb429qHQqDQwE2Beg5eARyggNFUnCVDn2ZBZzPBroUeAaHtk7oew1wY7f3gbMXf7Dbupch5bT",
  "key13": "22whDVZapbAq7kaeieV7vYEZSXgPfBokpGyHhiiFP6BWbaCyhepBt9dgNGD84bjPpb6eSvt3qhGh1WjjGJAnxH2R",
  "key14": "4x3Evvph2uEwYePZ6A9cR1s3tSTnF58nJHxVUAm3ABVzS5pKidFvr4PW1UVfDBk1iHaSSct17ttZQXFu43S6WLrN",
  "key15": "4pFd6kja7jbJGX4cRC7nwWyAahfbWMZ3TApwHAGFmvsPoQ2H5e9t4NWHPXMVm571sM2g9FArknZVQh3doGt92vSL",
  "key16": "3PevjHtqMsR994r6wHpRkUHoJuEX9u6jASSqBimEX9zb1p1u15fjTYAjRMY7PaD1cxUNkFsJPFDzTsEPJgaWLhSB",
  "key17": "4uoPDeHbFMn6VttBbvdNQTk6mqiBD5fUS4VddgBMfTzr6W4nEf7jEKKU1i4jJcAPwKBRg78SiWzK5Bik9ZcEdkD1",
  "key18": "k4fBBSebGDgTWaFYBjSkmYRWL1iYtxbuW8n8C9nvY1Bg8r16TdoQeooPgRS7y6dCm39dtkcNvMUH8RE4Je96ZYL",
  "key19": "3J55oDmX9ABjzvcoTjA9pvP1rGRn2NwMJy2M5gd8Z2vv4Xx5QEvd2MTCY3YUFoERrEpSYbhJPTTik9cfjMVmmXsu",
  "key20": "5LiqJ8aQCjwVQsT83EGm6ZmNiybmuRgRfJBeco5owaWWiYg4jABZ1b51zoWGhDck52eKFqmBrFmxtzNfixekr3FH",
  "key21": "5nJA2B5vTEPLxkfeQP3dtcsUBQKXa4kKschBMp5DWio2eoALSNxFX2iP3mgozSuFPWhByJ848MPKTpBgteW4DPzz",
  "key22": "2XgPLWJpktbZFp5zPz7j6CCan1mTuTNm4dDsa9aVbuzemLFxPNS21c3bzL98WxNvRBhRF2FXf2sVRAbZLtp4Y9r",
  "key23": "4mD2j5dCXXbijdAMLjJmnRouwtkhkTmYfgz7DcHDxoQwHuoHPwcvnFsdiFEw2YKizqctU3gnxNHwvVVcnFy8SwYD",
  "key24": "3SbFe9GmZzkJtaKPr8q9YdjPfit9jKd1a5vPgk2fGu5CgEjQ7yPP93hbiageXMWUAJ1ga4GpVHJD4F4C3J2E1ze3",
  "key25": "326kLZtxPYcZTF6VCdN1X8UfH7N99wgqT7pnVxrEmGv1UP2Ab1dsYLZ5qXkzwPP6P33VttAhXjjZ3hubEMjfg4Bh",
  "key26": "4cxHri2sr6dPTq8svguUVgrxf6WtaFQ9zsfgBfAiw9vb1TmN9NCv31SvqxriBY8nrZdTyEt4qC82Eeevtkwqzjiq",
  "key27": "62QncmJxj3LCLLF2Jgm55V5GoLxECmeXLL5UR4NFVe7G7zRAB9psePKY6U11goQgxKrMUGvmEPFQLvbCWAxdGNzL",
  "key28": "53Mpd4WtS9VWjb2bBJ5QCfkmvoipSi6bqYF8hJ3JXQ4TSRmamYx4vqx8s633mwEySzACu3DkBbePZeCi89tocbzK"
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
