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
    "4ZodhbQrVkVvt3tiSRtDGPpiMiPCyTTJ58cWfAyWr2ecd1c3TRJuG7PmL2s3j4ViZteYeg1d6RrDkGKTXRSvmzFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U2Ly4RjBtFgHGTu37f8JABLp4a3FT134goNbFTroKH7MXmRsci71ggbBgdoLuFxd2AxMNoBUp4CAAyyxgjny1y7",
  "key1": "5cczK23pTzjc8aX9YtJRxYBax29tYKUWTZfpd3v6pMEGwJYWmSqBkiy5WzPkuciLhWE5S4DLwUgj8RX6jSPXzno1",
  "key2": "2u8shZ4w5HzNFAhWEod5FLKJAin6bRLEGfabSepxGW59CxyirhLWjapLVQBV6S3vNGMuFDAZR3fatfhCGTkCSsMd",
  "key3": "3DXomBMeBMLiYtzSeRBbheh6U5cmsGqyHmam8NGKGLPK1D22RAGjhAzij7AsNBfqTpZHpj1BVG3EMrhEwekKXbo",
  "key4": "4ehnScNHbwHuZ8y16Wqwrbuimi3gDCZr4S88GaxwQJVM9uCokRdDjp1PafbDvT76cmz1w1pSHHa58ZHmYNbdb9jj",
  "key5": "5DPCec1Krja9QupXxTPcyBsgEhXW7Kju4yZ1zxMV7bXMcniuWTivufRadVtW9ZTjkXfZWc4mQYNTABhMUJF28dYz",
  "key6": "FY7unHxBedFXvVbnyJ5ZWWeYvoWYjb7rQHgGdUnRWSB2SDFKk6mQ3WyBM9ztPEfeiBxDHGoNmESaWtbaP88K5uV",
  "key7": "3uw2huUEAJBHp4b6ZvJfTXbiGPAjnUyUox8yQT2SHgSiLUTiQ47LPLiaYQ8iEmgwgLEUpgBEMZh3FYkVE8HtNqv1",
  "key8": "4pCXyvDjqSU85aT72ECpYJ6caVnbqqeKBo9JVi9hyHUmgLjrLuSGbkBMS5bFDTZyR7KL1kZbq3TrqNZfVqapspmh",
  "key9": "3inyqVVzJGgeMCsrhbhaNw44bPz5b3ajMQJLHXtmo1NLWYMbNY3foZaRJEkddXhJJ4xZV822j9GX5ycafa7JDus7",
  "key10": "2xnZGh5t4FzWLCk8vNJJw26Ci6b1dNTybr3vyZWzn2kfNHd4PvagPGrjLf1pRRGwAjQsFtTmPEDQz1kqjV27PN5t",
  "key11": "3DGWxwF2TkJsX2r32u5EcpYXR8h2jBwASPSxLqo1ke1twwUrPVs1QdMYLdXZZKVf9n46BgN1mE3bbzByaYosTDwc",
  "key12": "3QEyj2XUycoLAUzZesMYeMMK7yzpHLmVsQJ1BoPXNSyZbUCmYhtWgNdfGm2UZ1H5oS3XKnyVvH93apmyUSMomYVN",
  "key13": "66mtrounYKgEHsm6hKUJtMR79MjnURM7CZi7YzxzwxY5XFxALEvczTG3QnW5hoxSXmj65oxYQSDg64GFDVAzSDUB",
  "key14": "4CQk4L9QBqK3Ru9kZzCz2da5cormTre5RYyuf54vE8VM7i35MTunub1EawQ9rU9NVkY9E47wkjWiDzYUQZQJ7uMf",
  "key15": "DV36xRf11v61ZPGXP3z59Vfh5aszfunnsoA7oeecdmt5s6gRzxHNTqVDKs8Q6qBGcVxGMuqxgZUzxS6YqDfm2wY",
  "key16": "4ZKSY7uhCbN7TADLeYYV1QrUPiagjZv6rWA7QJWmTmfg2fQ1jbyicHVLZRHBSqqSSZQ6boJAKCzExC7DiMJfSvcc",
  "key17": "xphd9VLESk5vpqPqyabuCw66Kp5dWt6aBDytsyYCbnQ8teUtZcAogW2nnrAtJgZb7YCvMuwerbVyzJELQBZ1wQh",
  "key18": "t6J7b5GafjRTPhdb6MW9V1CTSxqXuvyJXgn8mzt6cxAKk6LjXouL9qBuwNMG1V85k482nwjeDBP6rnVjCuBmYEY",
  "key19": "bSkT6EEFe8EjgMjfnY9cxtj8ez7cjucCqHXea1imohyv6qHXBcjSZeGJYBVhRnrhFpzx2EcgSiN7NyAuSRFvVMt",
  "key20": "5oxaxNkYMyBXNq8EWzRrS1KbSvYzxorRcwFj1ryAfjBKBoyXyWqksKNhRouQpv3KPWBcqpvaz9cD1cUcs8vpZbcn",
  "key21": "2imcY1s2ZFKdUaQJQpmswJAnQX1qr1ZAhfPGMffM2dqsW1zdoRDteE42d8C68u9bjcC7cDgQukTWaSHkpf1Kg1f5",
  "key22": "4d2AvQ51hjRZxB6AAi78qbcmYebQgWypmJx9D3yksUvTFZ5HovkoGbcLRCKjDw77UQXvCwmCtPrbMtTVdtivAThV",
  "key23": "5kpYZoiCZac8WFV3rvuNRRhKoT4tGSNsRYm2DdryK1y4nfMjPEx3k5fyzfBaoDHjsP8KcHPQEHSbCRvZRpu33aik",
  "key24": "mdCMkoGuAfRfNWa6UfdHMyH78TXAZYZ1Ycjxdxwasovf2kqEMCxTQSU2T3wzaK7fxj6NtTE9nnDTdgraCkQKBun",
  "key25": "2qFDZusJ2Q8FMdvHBQiRDCTuxRmCjzkwL1RsEfW9LufcJsbrxnhoY5xyoxotFz5P2S5bNXvQQ6qGbEbxZNFspTyN",
  "key26": "4KKnVU8TdqA5DBcvLMQYCYJaMqCQqme6jCYDicTJazqYQa8op3Y4Gon1HiTafZ28EPQpacfyQWToddhbMGbC397V",
  "key27": "5EqQbDTc4RpNKfhjqfPn2QSbgiXsaXSZpdXPBmmeuMpwtTzGS3A9gUhhnFtcSHz6HKtoATuFzAynqunDKWCTfPvv",
  "key28": "51TbhWacdZjCP4b5QwAVCb5vsCSQpejW9xDn9eEALzQRXTERbEKeiweJNBZzMLpszW3FCFkbs8BQVAzSYEPo7hK2",
  "key29": "5f8SYJnuFjQgpJzcLfxJESWHgzUtMrQy8z1uL8gMQ4iRxEPHKF7TXkFFpnoccWPbatjoknsGUFiGjYY2EDnUBzos",
  "key30": "3oTd3CRKBqSuET6UkEVFGNeBbywzGaZYFy9ohDCpnch5QdVkX8xWhkYZwwzozTDdceLJdoCpb7hHocHU9984SPHV",
  "key31": "43Lk6wTEQ6cRkGKs1vYaAxoe1TUFNFXebziNLtKvTzNqWR41AF2bgWe7FW7UHCMxxYk3dM7HsXm8iyWsZstfWprB"
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
