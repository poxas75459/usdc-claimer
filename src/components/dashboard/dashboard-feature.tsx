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
    "xDgQHUGod7Vwg6qUwFEVmM8gUHsxnS8XRHrYGYX3RH45nvcNdVwajQfimFAFQ2Ge1YqwEqVZxiwvQkPAxxtwrxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vsQacybC8E9Trd7nppknAwxNH9Qq1sUHvv94s8iQiTkDMTDXMLQi9rq4mWZzgqK5tNN6UJFJSMfDiwXVe2sF6va",
  "key1": "eS6aLEfyNAiUq1KEjWHhRrf84y3mJMeVDk7KYuzU2RaV8ExxjrHUW7u4dBMRoSiQRGKZSrHW2qtsrGxFncUKT4B",
  "key2": "38EQNX3aSPMrLfwWCYRbLvW2eXfW36QS2FSfQnWa3WYTp4XXVhzXaKizR1x6n84izJWLyweLGQanBn8UNpJCF8xB",
  "key3": "2nCGxLkRJFHVyzzT2S55X3EYmnTuNtfWQ5Z4Watw1yWhf5VobBdEpFZWjiVc2Uv2ssnDy264X1ZPNdoqtj3WLht",
  "key4": "e3eUuYJDbvHh1iHYD2pAKHX7xQRYqshB9LJE6agGMujge4cwpWH5hvkSYohYLTAzb3vwXHYuQwXLhEo8Nc8zcPQ",
  "key5": "63e3uR1FsPoUsCALUAEZLCwyETfhrACpJi9bMqhEMYtqF4dspTHvGqvncFTw4eQZTEuJ27gvKSc2vFHLPAumD8Cf",
  "key6": "32JRY4qgq2zscyscB1H1vjnSDKjH4BWaNpB6xGHm7yjCRSR8ghDMRStsBuKFv9axrVaFGSC58cyugLPFTrkrnKz7",
  "key7": "3oo4S7yeorXimh4RBPNL4HnT5zKVDV4zcGFSJypavCibNHuq1JTgFGNRpw1EBC12KyuawH71dTjyph43VniHCDds",
  "key8": "2xTV2tQrHw8gB7zKYcU6GVbLofpT3HkQPjcoyoSKvqoGDp8EDMEidfQHNonm5JPhu6dXd95wR2JJh5f1qZqNMm6z",
  "key9": "2mQDreeKiZRxZEfMPaxHnE83kMQCZznnuky7fTMXtnMGhZ41JEAG4S2JUG4qLiVk28FqYKjSa1V9TDotGohs1KWq",
  "key10": "5jYVBLFekgekynkJaAJp9UyG9Xy62qFGx5qBn5R4dk4eGXUadYD25RmsSB4dNUPU2DQRpiTN76wraes3Pj5q2gFH",
  "key11": "49fyS8GN9rSaguhBiLFxUWShc1zfpVmMqxfXkQobZoCVFDC9mGiJT3TLFnRthUVN6y46WJFSLg4Ju3Ld4d3j7zX",
  "key12": "2eciZAKTv6wZaCGJLmwqmpvY9iCjP96DyFRYMcQixrrUEjEnfmgPaDWpzHJ7eqaCiGK6v3JYtqjEMzyRZPcaShhe",
  "key13": "56W6trj4RMrVv18xoBUcycPwZeXzVSPseszsV1KGiTBKebDiFS8FwLgYhkjpqzxGtt7pckeAg79XpELjvx6zX2j5",
  "key14": "4hEekj57gDBNsPevBCp2SJN9iHcb5FquneKbVsM76RwpEMeniSPcdGpCd4fD7rRF4o89FqU2YgeXNqFUv9bJrXVd",
  "key15": "597azWZRyTQPGNKVPMff434ETMgQRbwzE9CNADfSizw7w9vSR4wT4VVGK3Hvi2harvZtHY11ZqrjUuuujQt5YrDE",
  "key16": "4G1JrLjwVmKHR9Y21NzzDGxZ7hUxJroR3oMTvTzrT7h7RpWVpqyXnVQimcd24R9twCbLQEox7WYSC3JQ8uR8fiKU",
  "key17": "dsEUeNVzyyttUC7kf8pRQjN79PUUCjChvwYiLRWgNz4UT9Ehi9sCdVmTGnyGiSSvUnPfGLarEpahBPhVoWTo94E",
  "key18": "3Y4UH8DDwYbK6HgpWoSLVUqAot8X3rJG1HVvyPvvqieUWdLbbfQ5Dfh31peiVyNRJCECibNkoujMAFFVQvnfbee2",
  "key19": "22dutpC2HCmTQf931ZKq6uTqNDQuXgAJr8uQTfKrNVgMq4spXK3ai93FAX4qiueTLUaridU1FMbwYZooYUGHuz3f",
  "key20": "4SQnQN6ApDiww6E6MrsEPG3LMur1vjKT4CyAGY61rMPXPZJuUN9nfQSrEBb7k27jdGTFYffY1EiR9u5iBEoPEQau",
  "key21": "3GQ2DsaYBymwPMsFCwWR5nGuinQLgnEiC56ny7SxiueoqbXBUhSZ6TTawymcwLJ8porumXParLHqQtJ474W7dSCp",
  "key22": "34WEDxhF7tFw2c7WtbqweGBYg8xFv1M5xX9xinyDzmaaCwcNVbnaSmGXSrArDzpfhd5Lir6bYesQEu3VFmjaHm7",
  "key23": "23VgbfizkZ4sXnEbKJ8FVMG1feFPHrAXkBr3wVsJwTaFFu1FvVW7fczUXRhzHYPnBspRh7u5rtn4zVCKoYpdzKm5",
  "key24": "4BeVasZiSaxGbsDYa8ZC7wzbMqxdpbscy5S3FnoySgTDpNeTbAyqSRzRg9JcQcJdegwbXyavY8pRLVTkafwunUJL",
  "key25": "2rQSy7vkMiHxujGHyN1iJFko5vedqYWV3zm42QF7a17eDa1CPQ9hpCYPAeV2Fpt8JLu9zmNsNiK73DP2jtprbSSb",
  "key26": "vvgbtj7pDSD4FtT46kXfw6JduSHYSBAstXBhrbTfvmt4Fp9wZG2ZME3aDr2ynG7VEfqkybSCakpq6E6wkfWXc4s",
  "key27": "3owgzm3nMuTYGo4zxCEcXFHTLj4K2kMZQbc41sQnT34rYoji9TU2vMm2Y8CFyHiLFBXXdibeZnxw585US9aCGwTN",
  "key28": "3Mwh7n2n8LFqfzmkqtqm8716aKqqvYWUm68KEZgDu6kCLLWBUV9bR1PHahVe5Jr9AXmS4NaN1ztKF3HaEQgydNiu",
  "key29": "iibPmx1Q2QeUuzYcUNbzfHzWxtpsCTLrY2gohjvg91PnYar8W2LceVyx8cgPjwFg1tVra1gC5nhe1fgTGAH6LPh",
  "key30": "4zT81xduNYrx6UREz3EMexW1PQHdddY67d9jxsUxZ2NcR2wYU4HwQk2dxTH33BTLAJwD3NJg2wFWTGeDJw5nNkno",
  "key31": "2eZBuhxrQYafzvyVeqKiZ2sDkScu7PshbDroojGY7ba7umtymKwMyEY4Y2Nn83VvbDS29XvNq9X2X9fGyobwJEhD",
  "key32": "9REHonN95bid6AA19aTyvhtHkknhERXVofJQPHKUqp9gUNvERu7VvS3gxHWy9c1vKP7Yntg47Th9nvs9qYMWy6n"
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
