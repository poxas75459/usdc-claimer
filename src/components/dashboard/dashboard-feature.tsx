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
    "5gC367LKSuV7MCiPD67UPzc8cfye9tsEctjwoSmxgi4GN9rtZfDb9oGMuwGLPcdTcqg4X9wmaJHQxgv6XdkqpRLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NJrkhCPfPvhr1q2Da4TVsxDBTHWaaht2dhL92it8Q2fU9QoPTZPEe1unBcRXF7QdzeNQFLTQgCv2UZbYuDMZRkC",
  "key1": "2ssLq4Yjt6rLjn3UoXwWt4T9dGU99jSrmph8d25K84HJRHeyR362zsKi7w5P34PGV9gQrxQnMQrUnAisHqTUMSaX",
  "key2": "36j5xwXNPCShUhfSyxFNYNE7GGG6WFx3gVtg29PNfhZJBvdmAK75hYPGLngxxDshsDv5wjVH2SXuZwKMmGmoM2XL",
  "key3": "4MQG9YU9YSvAK4Wj8zzQjkxX9dTGFWQj7CjQaXtagQcDD2kW6ritbfemFxEPg3RmqiBnPmBeE86DvqgTyZX7ACCp",
  "key4": "4xAeVawoFfrLx77offZ5FV8uM2JHG218wJwnZvSYATz5Zm7dVW6zqpv2QAj8p2S3zV7bRw5VJe4ojcsGFo4u4YCY",
  "key5": "4XbVFZ2PABS3VVjf8pVxTi7BZQGh2zYZXuyg1AnQ7n71F54xScaPvhuCxmQRpgxBUZyDfWo322uVGS3pyejfWz9a",
  "key6": "1UcPCFwtMsjkUtfLcPMcDAMxRZFLwdgLimxKAJoLuMQMzPb6eLekqQeXhjszGoHPX8LSmhKKRSffrhrySVRF31d",
  "key7": "32Mi7okuQ8uSfZQyCtncqLVzhKSj8o566rjniFGLFQevowPHvtRMzn9RoXjj8qtjqfH3yToMJG3munWwzTVFDkCP",
  "key8": "4j7CR1T9N9Hne9DYbFvkxhf2ukYcKHEqeafiVCG1cPoz16C2FrLSBenXiBqSistJvV75e9wq1HgFDsxqV6269rz",
  "key9": "obWSQpxvSZWSVG7iMvTkh2ySm8H2JfYXRFtKhvPHUwvU4aDf4U7x7ukQvD2k6eBnvcqCMwSoC7SxmJjqNCJbGrX",
  "key10": "4WxgYHdMT7ZqaFt3GdeZrotdao8BBANUwMsyUsjgoQBQ1DmkdBvbN6vDZVvUzsT5u4sxDh2ssQsMxZ3nZrGQjBHc",
  "key11": "59QZgN5EUjCRxY8j15JbB1dbwSKtcj2dizCZSzKbUaw9meaCpcESkyQnPMfDWsey1KvMJHBWsR7u697gtbEmJyPM",
  "key12": "5WJjCWR8mk9DBFhGHiMRXAwWQT8GWbyVyqHWEhPb1cEN1jRizBE7EWkLaNTKAozQNy9NELeydRUwz5kqUHRL6ZUQ",
  "key13": "2pH3BLUnMrH4R5MUg7M7fHFvoEazBoYfqZorcMeHEY7nizpUU291UZ8QiKdiK6LP1yTSSDtwoNqM5R33epKUjSDu",
  "key14": "45KEiXbeEJMJMkTn8w4rkqyUx6eFfJy2n1yfW1EfEhRya5BKAyRhTNqvrSfHbwCbfFDxavPf7HvFRAEpZiajzZnL",
  "key15": "4anHxp1erPt3HzbAgiTvtQQFE6qgYvXuHmheJbsqq9w5Q8hbBFfDgswcSdyu7BSf4HMb5inRn56evaRLuVGvqzgA",
  "key16": "2qN5bfbTPNWRG3Np1QdqXekBJRbZDVfMfY4yv2ssFe1Y8Pe6frCFoG41suFXz3CNQh7kpLYF84Tq8sYyLRyLoTuk",
  "key17": "29CuKkufSD1DB87URkev68h7dxn4V2VMmB6MwbNn1tSxcmhHwEgRmsUSHnYaisknhDro8GxKJa5zYp222CYbXQGe",
  "key18": "5WHCJpgbtWXNGTadSz9ZeDZ4WYYg8LZZTkkiCozND84hqtRzs26Wgiv1y3LffMyWNLdotp8m3TfwjhnRfXQrCYTA",
  "key19": "fXLWVWL3uarnGPgz9Ly4TAJRjuxwYnQ5scfoQxYZjvFkkNNXFVDLtZLaK8VDLMj6TRX1wdUqGY5vLfFfWdcQKVB",
  "key20": "3qa73yT3TeX4nai3CNFPTzaaYTtWhfRj1sJd6wPZqweGcpHS91tzPsLvXa3E1gR5F9x6QqDaE7QNdSs3tQCtXDni",
  "key21": "5iKE46pPDkKFoKhRgqjMrarpnaW94QyUtPJfMPdZ7yyvhGccPHS7CNjZE9phjquSDumafN8P4UbKs1EwNh6Uf78n",
  "key22": "4EQADXkhByWHTsvP8RSdVKmpf7xcGoR3rro3upTs1A2sD5Gtmi1jnHwh4AK6mfz2B3Eek3TwEq7ZkS5pLQ9EPzfJ",
  "key23": "2CNteUTpb397m66sK97WaAEsNuSqaTUeJYD9uN5ePqQ1xdzFCRXkwHXiQfoiV4EfoSfsYGXwCVjFjS5c4Ge4dY19",
  "key24": "2jZ6sP1QqiHhfSEkRCQaD1eDWv7MkVsWmtvRXfPaR8GG2PvnHEL9N7nDo5xKmzQr52yiU1qMBGh82bv7G13wXpxm",
  "key25": "5873qbX719t3g6TFJmRvCtfLF3eaNhwy1Khkd44EVwbCLdZ3EhRZhpreQGZqpdzeWDEzzJqKTS55BiEwrgc5udBp",
  "key26": "4GcocD5qf3fE9RZ4Ddikvq1dNBCr7Pq5YhxcxAqggDzbxhVgxq32AgwqKJSmW7xbYuLfGjseT4xp292ygj2ddnHK",
  "key27": "k4xeJyCWcYHfK7m5XRiCssyJ7dVqQnx64hvh945MKjBsZK1SinwumUzX72k5v4hsCZ8YjKFJSYAVygyu9mkcTXs",
  "key28": "5AT4Cdp6S47PDpCuyzGEd1AYfQsihf7u11rSr12LAMiAH491pP2Bw49e3w3HX8EVM8JRHBKTyDduNQrb2WahHGAp",
  "key29": "2dxtEDFpUYR4nvYQSG2jtMHikkDHJCP5nyQmFPaD9T3jYzzwpeVCG84N3Q2ECU7CaLnbVJDCTXQduMoxDTVZGrg3",
  "key30": "5crE5vTpVK2EAzUy4uS9nmNi2a7Kh1F4FMgwdAcHj4c9JUAgr2YvNejmAsqUswhBXeQc2tje15JdttkCkQYgHDJ1",
  "key31": "2XBeYQ9boaBfuApNsm5Ei5yZVmQ2rV2sK815iAzs7UcAdrzXpHryMtHVvwsjHCBQQSZqXN2Xk3i22AsAXrpKmMLu",
  "key32": "3r1asBXovCnkCDnPqyVLNS6ryFCxX1qbKozB3jPNMQN3HAqo2N9jKPwj5sS2nu8tsiRdwzPga8Rkwb55X5u1wpAx",
  "key33": "4Qonep9VtRWc23Vhic3xj5DeERSsYEwHQGUFiY3iUnaVbV6YowrCv5oMkumgeMgsoPBvZvCHvrTyE32Qxb9SSAQg",
  "key34": "3xvPWK2Mns3JKpJ5PM1Q7N8wbxyEDZy2ieCq6oGKX2UhaALVGe7rq8Xum6RynPtnyhV1GK7rXMKGSr8PK8qGx1ED",
  "key35": "u51mEVyDb4rNT9WQcqNnr89Dq41Py9oC4JfDkVSEo2EG62iPUyMhwet6CweNjeXSnrLFa1Q1KMmjezPrt2KzvUv"
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
