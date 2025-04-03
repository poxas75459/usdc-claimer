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
    "4oZRXHwhHbYDSTZQRa1ttBdig13yNiSiXFggSnHe528jH1sKaJyn9Pf5J8roCEewnba33nPE5CWUJ3yJ7fDgbVeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iVPtTFPfyWfAUPeL8ZQj4ZkLaocmirW7mA76ZWApmaU5sJcq7xMJ6qrxacd2pmRwAGxBhWwgwnfzEY5yL5oSAD",
  "key1": "3XbtaMQGfhvQFW2rEeF95vQ8uc3LLHh1qrbNykJgNm2jjo7pCEZbeDzw1y2LQFHnYedeQ89UTJxGyVHheSnML7E3",
  "key2": "2JVSc2nDgFo4UKeEHHVbT8oKq2vJAJ99YCsnJA2JfBEPkzXJyLEhdGauk3svfRFxjdo79j4kqLutecZa4DkUacZ3",
  "key3": "3Vg3ni8WpsuotrkErCWwk5ucGKurR8f5cvMWJnaPQMa8Vo5iFbwgkXXijd3hAcQXXUgzvxXUc8kibjiVfJWigmMv",
  "key4": "4yTyiSJYmcCjNeUtiekdHeUrypZ3CDS3KapXKRbDmqPiwUwzTbeJaozhemAbtHiecaME9f1GLEjkdQ8Au3TQUKZr",
  "key5": "L2kobS4R4NCUh7kSKdmTZ2Uu2rpwjfW3n518FUgM19nXdeRtMpnR7py1QJUATtp1VRazpgX2arW9NbwhUWzA32j",
  "key6": "2VhHaL6uciPDUzAgBYyuoMYCS28g2zK3L8wtQPN6dhoGVuXQ3ory7V1U1JYZR6U7zKfEBvsKN3233JBRuRfF9AGA",
  "key7": "2n8aEzkbhSYicMxdrp3NL8QzP34BZNqTT9rajXF1BpkWbrruXBDUAuHhrg4JVGEbNrC7rkci6JcqH6Ah1WQQsNBh",
  "key8": "3HwbNVkED2fbBDrQNndBk1Dx4H79hjWquwBCZYdcvcYeQMcaxdeF5rG45RDF25BPevPGLDQqQTfygyeEA4C85kyB",
  "key9": "KLaQkcje71yXyF5vyA7rtEGsydYEsxWrT4rGZBwxGLHEjECzczxi86kqjdeiavp4rLMsHtejDRbw23L2mjEqZTB",
  "key10": "2xozGuG1f9tMm2eyZnjgfL3K5QGGvpLfrt5MzcYGYnRPKkrPjYjxeYBMVwiFL3DYX7fqvunzeoKXwcG3C2v6iKPo",
  "key11": "4g5KGwjpLWSNPXojMCCerwf855Po8M3H7NWSFxxNpaekqQ1MGwJbhfxcE9u322Ry6E9fwVGS8r9W644jDXqghfKF",
  "key12": "2MALvircUxKwqbV5G6DyRYe51UwMjYdwrWWvou8cyBJo6bMPqq1Qre2uRc2LMUpYgmJbdHqoW74812SGe4gcMJjg",
  "key13": "4tk2ZjMb1GAhQrGyNkWe4Ge1dZh4mpNoz4FEhge8HyWFxJZWVPeMFzzgLkHh9DcTYQgYCYeAJFDTYpQQzaPSKdcg",
  "key14": "3tuddbPKHPsdHv5rdaJZfzrqEzhANb6jvqEsWHjaVVNu9kcZ3gReLycuThv8vuKdXr27VCLcJUrWuPbwd5zJd37r",
  "key15": "2Vei1keuEiqMJjRkhqRLDYtfn8w3BMjbfctTpH8nV5Wfbj3UHBV1hRTko1vxAodSyxaFjubq8LP6H4uZsredydbA",
  "key16": "49KfaES8kgKKEFkH5eV1sN4atoKp1Wx1dYttcu88aSkxWdcZokZj9fTVXbCCEoKHfXkvGgTZCVguWDPWH3hoV1Yz",
  "key17": "3wnyVFia6SjeYqujLFC7x4g8XzuAhz6TAC39AUgkeoEYtYJkaT95FfzshBA4aAaMXknKTDSgCXo9ij5XqyBWBa1J",
  "key18": "aVatxx2gbHo6Zbkga3TnYad8hL6WCLj8BGFW4mua6dhViMbMKUVZWeFFcz3HW7oxgvf2Dh1ZYAjj9okXgengkTy",
  "key19": "wrLu2x9B8PadECErgj6fjTqkPHdHjBA12NP8dHBigtcAQcoM4KnRXGsUuJLoKXNHCy1fD1VSdyHxqjKm7vfJYQA",
  "key20": "5xaWoR1QMCHwwBHQR6ApAvfGWeuL6tY5NYKCjvDRgHHJt6k21MQsgEbzK737MhBhWK3FRcUdH3RLyQfAf5spxbhG",
  "key21": "5PNKsV1m5GnwLYNzGLSMont1aFTRxrAgcMQQon7tPNyXrp7t8iaBdoLDBEEUNmH99o6TDmyZNdrDAdj65QbosUMm",
  "key22": "n5aEM1uUqCKLwoDEL3xZ2Rtdq9175oDYoVdtiDHbgKyoaqgmkdr87czhTrbiCikEdugePecj16XP3RD9cfhqNHJ",
  "key23": "4C2MRZTguQ9vFydZU1UapSa2ULnG4VjMPc343vH4sndXqFEm4rFo5BimzLJjgfavuS1u4ZhbaYdnXjV6YUHyinx4",
  "key24": "52QEZAfkGbC19VSWy5CnZXk2wNrzAqfi18KzL9zdqZEhBjV1HKBYz8YuNsFfo6nmWNAwcbyQBHS2HBAL3m6AzrYB",
  "key25": "3WihMRz4H6DW4cfeFPqNkiaHgSqmCjHowoheBbHdGxoaSoPtennJLvRPQBzcXC1r9MsMxo6vQuJo7d8GNGnCFg92",
  "key26": "3HYQkLo4Y5oKxsK154g9njMc8MtiQwP2Em3Up3UxTe7Q3rVRyZabJfHy7YCr74TeixnZ4mTpX8cPKhUK7ACVdHc7",
  "key27": "3gMgjgDokdv18Y7s7CTD3DDCGNRVozEtsYbCRer7HJhBeXtckasn79CUGgozfvhmRXmhpaRSgiKXPCKd89KBCFUp",
  "key28": "62oaDZzyr8hMuoxP8L5u82zDrotDRRfXKhwkrzYhwakYmcpPb7582kZeGU2iWApzARCnRercf8qDdftcG5CMLmpK",
  "key29": "4dWwHnqb9NjsdveRfUktCyvwHVCBCkwG8tMq8TaFvMKZoeMB62k41yMBt5GZXXAC7RFSsARYTShjPJmLAYT9T73Q",
  "key30": "41nCfz4X6xAAyHgwnz8iNXztNfXydmCKVyuSSi8S7kAXUHG4SgD5S3ayAP7nnGq4LPZeKni5xzWir8EHD2LPV4oc",
  "key31": "3fK6YHiRtTmEKTzjowfCKgFEP7gHH7GyUjtn9aiWp3gXDJhy7YkCLad58atVqSyUhbftdUpzHKrmVk3Y31Dsv3en",
  "key32": "21X7EhtbqW9UeE1bEjU8q2TT72QrcgBWrUscWsviqTzAh5bTwkeLKekBRS9iZMMArje6Hr914bb49F4qmHZYH4Aq",
  "key33": "JKstptDhnH7GSoqdvvTAce9P4FogP34vDh4RfKes2bxyjx3HsLhifzgH5FmnrhnU1UCXSqwwAPmeGNGnRwG5wa4",
  "key34": "3UXjCfUH77Vk4pweUEXQ9i6emq8GWpfqRXRFJeRepe4axPoNdWYHsUsCgdcYSJ5hfPaHLFSLTe9qNiCefZ49KUH4",
  "key35": "38fdZ7x7JCgXEGZDkMwxH3yCW9biV8ZRHnJDccvV2HwGNa3cXheSNFcdSSXvtNQsgk7EmQ8Bny7CVQqRxRNVDgF3",
  "key36": "2VLKey2XCr5S9qoRBoyYWKp4NCA16JHz668gHFkGZwGMmb2XUoxpTxjgdGhfSL3q3oVHHkhnJZp8qjov5dqjzc1T",
  "key37": "3FqRhoUaUuxT3VMBJSnME48vYHWuNAChjHJtQLyB4ZT6c4Gc542cwWUgghGkHUip3getuwzqszN37VuFudVfzEVp",
  "key38": "P7r4d1akHCMEafor16GUbmaDwKcL4d6XLeey4aYKfFQuEpyhFtjps1EMgBANoMkmwgTEAZDbrDX9kWnayfcPPqn",
  "key39": "49oiG8et4SVKp2G6euCBGvxoBkJHw7H2obpQh11GCUvb2utkiwXHq879F95xtJvZyUwpatPD1cq56mp4VufDmvNR",
  "key40": "5aVm58TjU8X9LiumwQ1u17echNTwzqHc5PUGQpasyA6z1nTJced9cYtH2ouHSTkj6gumZGSxPxFodidkF6gQzRZ5",
  "key41": "171D12F33Qwadc5QiPQqtQ4tasVgjdxEKaw22YaFQM7iTUvu2Muh1smZHKUxv1bnhfuKErr3jVnWAYPQGYQaPFK"
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
