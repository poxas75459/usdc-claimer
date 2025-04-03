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
    "5vPehoG7zZUg16rpXP59TDrvKdHSFAeZgYTQRD1JmUErtdk3hi6RGSid6LWz9pDSDSfhvMo4admCYgpnHZFSqkpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rvhE1tudM7NxyLGYhS5s3D5woer3HfQU4caFmYJkPqp7qMxkL4W9bg8UHxAdSoRDLXEfcZuWw4NxSDvxbVpo9BH",
  "key1": "eSh1gK3dxhVUNdRfn3mncFv63FwMKJTAceGZY8ucLSJkGMPrFjvDFJ3XvDUqHKLkSUg8r6ccn7wVnKUsVp3ae8m",
  "key2": "2dPbZ5wepZpTAX3gEBxdJXQTuKHqq9c6CQmJswZi1wX4F4NRivQzd8ALvrJSbCumTJuNrVRLskgaMfKEuVpo83QV",
  "key3": "2ir9ZqJAupWFhWRnX4XZ7VHS7uQcaZt5VfC3fXqajrZ8UpxUMZwp2KArL3XanhHxMJNe8D6D2XSxKY5RAAoauY77",
  "key4": "CHEo1BTVyNVtfee8KT2f4XuaaRx26Zcsad8KbCaLRnByi6ma92qZpYv3p9e9bfRvsKQeZQ2gbRkNVZsv19Y9297",
  "key5": "438ee8hVfPbxmwVrJ2nSDt5doMRsrSt1KkWnbM6XdJbmBe23quVTN7ExF2MsprhaRjSW14KKjoNZ1SGDRXBxKCum",
  "key6": "2RDvcPhvDcByC19NmtioMFkHHu3fWrX6JBC3eoD6EHdjD5moXQzKcyxoLuQwAP2eBJtA169CHnBifF1KgEYykrGi",
  "key7": "652bNUuJgvmQvf2FuGpx8PhSfMt94DNqVPuHQtgbAoXj3riVGEG2iLu4pVABNAVszWtE9w238PvGiLRyxCXfQyJg",
  "key8": "SrhHV9h48xyQqJkzh9D67wGmKspiJrZK9JoYvUADiSkYXvMeqb9gZnwDqmp1XBW5y1yznYAZR7uX6KNkzkrHGpa",
  "key9": "XwgVBqVtj1g9nXovQYw3Bfds6e36JBQ697MC5Pde5ttfmcnVaHhcrmZRCXTHf7Qiw2aVoacrKtqrh7BQZNtw6Xd",
  "key10": "3DB6MQgaLWQZ6yYe2TTSW9Ay3vxLxZbPq4BVhZSh6bwuJcfsrGcxfVbKMmoG9rgXmNd12x1eRxixFnGNGmSvEaQM",
  "key11": "655E735tEAoike4CbY5uDKje7yEAYUiuVNHiZSRaER7VkbaVcFdTkY9zmqRkrcmTGQsGiqfKGtxSfZEyov6qRxHR",
  "key12": "5WEDvjMdgyJ6f6oSnmmhqgppGfaSc4AXbq2XNSPt1fQVkbS2vMqcZ3QE6euzmLhwQSThgGB3pdPn5SWu1UfBEmZP",
  "key13": "5AfCmiCr4mdASw9Q6sun1AxEvL2rz8ivVvfJiYZGAF7bC4GJ7JCgrY3pWVVgk9FJZiEP9CW2NJLhDcGPJAv5gzVx",
  "key14": "cHZsAU6aZ77rF2nuMvdhcDT86Eo3ea8grEyFvNL5thMzuER6wpWv3V6d298FNKuXNu9GoVaX5ozNpwqmuSZNv4q",
  "key15": "3BWCLTLQDooyZdnDogYV6rWTRfWrGDNpVMfeVvpyKpvMdAGSSYWEeG7BwUs7ZJPrEADqJMfTECzxzZSApCPdVTVY",
  "key16": "3kW6xrSBw4dfHFEhBgTfKvz7Qqv5yossiUAQXKZRchjBsvFwUi634SnsKASEU1wM8eWW8o4n2v4c3iyaSKXgShJC",
  "key17": "QzHe19vRDVvmkceyP69x2ffbFqaohV8xeQuqM7ydXRpeoPeVN5Hx9UWz3Vi8pFjqiEj3xdifAAWHcEH8d4PWmNR",
  "key18": "3ikeq9dWgGc9gPZt8UH27vuUsMTxehdWK3uk2jBx5Wy9VkTo1eNfgchZ6b7MLFGNm3Qx3wDHybYeu1N1WvaXZ9SX",
  "key19": "43Zt5fH6BZXkfNMomsrKTnjLz6YLBBZRaP2LhwpxyYqwAWK8dTHn6YdTCg2JGSh6tiG42Zc4LMgif5vUAegMyXb5",
  "key20": "5d1wB1Xec8ihmQ795ffgLMv4G4NBjTBLrnYXYUWnkMkLeYDAJicq2hSUukQAx8aDgRbMXq7pVXxtU7jWzi86uYzz",
  "key21": "3NqFsVDr7q8PVkRY7C2xYLq4TKZT8gUSFw9J5S1cgcFwNMcCbvDqfp9iv7bxvGSLDreKCthTxfKU2AdKwUDBiz62",
  "key22": "47C5Wn3vczxPbjLrHAgUByR4LEWaxGaX8EDSr3mqNtqN3p8X7fLv35ChSDi8kWmY28RX8ErAsKd81XKQ6K1mUw35",
  "key23": "24ztXynqH9EjWUNou8H4KKpPd56hQh5qinoUH7NLEwRnkUV8aGuDZgvmRGeq2hhT5D5rM5XGmb3Rr3TY33Tax9hN",
  "key24": "9yp9eRm2YANPZ4qbrUM6JqC8LHLDdNN3PXhE6AFqGetMy4NkjRKgBTEEWD7RA3DFviuVDwJp4VBQNQo33aSHwVg",
  "key25": "3HPDQo1L64KLcbBScTR1R72LvcYmNyx1wwGt1og6qevtaUZE1nVsmXzpj1zjQiXAbaP6NEYnRaSDKaUKbjH4XYfp",
  "key26": "iwdod6obNTX4p9a1dfsdmX4x6JGqKz5bhAi3Ue4biCZA5D8veooQ7H9EvEixVh77yD86P16N4EjM1JNPmwcw5LM",
  "key27": "3yuxwBQGLboj9asscrWhUVQ5PPrxLy2sdEqRQKFxsi5mGmyJbWrqAa8rHMqtfFRy7HPXE1zfi8D337taChPrXrXP",
  "key28": "5gMYcwDQawWw3gvwK2iotvniG7wcbPgct11XhaKKnxSigjmbS1cFe5N9GsK7VvRFe8p4YMFKeuEWH5qac383ueMv",
  "key29": "4pnR8P49XftLP5cNB8mzGD3yDzziv3z2ad6gjx2tgBfTfSVPftjqtugfZ6cTuAPkZFeoq8bX7b7ZpnB5fVWjUF2V",
  "key30": "ALPsKYamuNaYRF2oWT6jCJjNw4sFooefuxjNGSxofDpviG3q6aErci8GMqqKkjcwkv3E35LKNJjMc5W5eNpZxLJ",
  "key31": "5oJRncZmzq1ZiXsiPrnJfoUFej3fY5u71Foio1DhJPWt8omvpgGNBaCWK36xUmFA8xc6cJ185wuzJ5UNy767kYsT",
  "key32": "3PQNCAtgZn1LwoRa5kz4XYyNXkLo8ZAfjbaJ1853q8aPL9YTQLqMRHYGE96urBpQAZbu84Z1d6fjxgrau7KLy3fU",
  "key33": "36jo8YB3TxEBsuU9kfwzzVJQRoZDZrFZdmLH2d7nGWXZoTGGhYW9nJjMoaQ6XBFWptS3qW2DaEBGkG6BRVJN6Vwx",
  "key34": "3UoWt7yqRVHwobxcHTUnH2f1eXFaY8GjepsBgsYNUHaTGVYe4UDCqKwFqhBc8pvn8wZi1jabWVEeytJ8mNcemb91",
  "key35": "5CqxsFxQYqdbE68vvv8Paqi8CgufFh3d7mqjNhdbpyKtegg3Bs5URi7ixCwjJCmuXy44nq1Nit5juG6DGu6aoBNa",
  "key36": "3fXcnkL9VhSy6CigMXdGNkyXM7vZ64jzpRTzFFQhSsvaHhU3zM27CSWbbfGDbVLwb3r8Am4wPXbH7GWDH7bEmhnR",
  "key37": "4Wfyq8SYF1ZQo56WVNPyTzpj992WxHP9nmda5TMGmk7EGzwy2Zou4tjR7zuT1CUc3aTgcaqSKViCnaKkbQqxUdKU",
  "key38": "2MdkJzEXDce8tKYe3S2AesJNwSnqiqBK4bQiz6UdnpVp4aSSEVo4QK4Ymb3H1eAHjH1eJX9AURs57S23Dqv7vnD3",
  "key39": "4F8xMz37ZjXcpfksMMmZH3DvLwfZHyn1wRru6t3TRBGCdjawhLi3jmbLJ321Cd81L9FbaUwTdrAp2mGjmtoQnYM2"
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
