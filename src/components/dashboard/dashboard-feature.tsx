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
    "2fL1CexYJ5PFCYc5xsjEuSpcc87Hd8LZnEprhuW5oVcwZT4oi95jmWhY5aLTkxcwYBPjkaZU4vT7ziy9VzKwPkVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAuZem5UNRFm2aouwH4vGhT8gvPPv7HRLRGFwoBsYh281fDNrbkKfDTB9cfQTPMzpbiFx47WCPS3eeVMUTLuoFT",
  "key1": "5frszfpheXCvojsMABjxZs38wKjCQXKPPmxJtuQdRxKWdJpkGn1uyrGoqZfj2DFCVFmcyYbUDc4DkGdvpu8rNDKy",
  "key2": "GiCMz3743edFYSwH77TmWuTEZya8P7pRJ5NPmbCEFCu39xQrKedKbyZTWHZ7TeGkdpoHKuK5Gy1BgdzomgL2nAc",
  "key3": "Jq8xPYP5EbyVVkwxbXpSkYpdLqwHHX3ZfjDRUgBZMSU2eCZkJmvqSBpoVFqMnNSpAqRdDCdct12vJwPmLCFnxBP",
  "key4": "4si38fYVRZbYYBWbaz72vNERtn3gxQF8dDtHZkSeAsrMboFMLZ3JA4Js7DMNDyookZJ2HMAUyRm2ZriPMfYY55T2",
  "key5": "25kgtk6G8Y2LsXQQb2mvoDFp6y6pMQQyqbPB9eR1QqyLJvSFjZ3x8ZybXeb9djebQ9roQJFn4Q98bG7zUop4BEDn",
  "key6": "27rxPRnvBydHZMJ2XfGBvxhedfkRg7bzgswWV42p5k7fcDy1yd6thXdhTsqHSva64q8W6YFKNwsYVkr7s6mR1fVg",
  "key7": "5SYJoQMkoLWKUvVPvs9E2EnEfynumPBULsSySpmd4Vba1tXbNjmBPSW5eV7Q8kZMpvMPF5gysbnEWirRccKakqsV",
  "key8": "676HSMc4ex4gHNnMPBLiqaV3P39yaqkYLZt8DsRXPVpQFKEKDJqst78zLgxLToXq1nTQBQ8VFguTSGSJqctF8R2V",
  "key9": "3eXFU5kc4VymJQefc6MM87nGivnnMsj8ppab4wyLtMUZVZHHY1yPF8aPexaj8pabNJ2AuQ1YJV3WFtEckkJnGJ24",
  "key10": "4mKqDrc9NU9CC3zhiNR8eXhnEvHh1i89K3cKgcBa1jQAnbhF5DdpSnTteLH7Zv6JQ8ck1an3TsFAnvB6ke7YwhKL",
  "key11": "9b4eCeBcwQd9Xq55zBS8Tc68xQKiVHFyDxuuDyUvP2Kw2haoN9tdkE6wo4bBKQYbsHX318m1WZaAEm9qmznhpEm",
  "key12": "46U3GRVmmp4U5K5denhkDWEbfntDaKw4CiSGCDPM9n42tW5GYnmJkxNwCc5mTj4TnvFRaaWpff77NjXdaeLAuHHg",
  "key13": "5pd7ReffaGTTybvDeavKDqs9yU7Ujk6idoBPv4Ve1nx1z8D4hbqJc4fLiDrHdxBPKTQH2r7S6uPpaiAjnvvBED18",
  "key14": "9ZYjdUh8CpERYy5ko74cNK66oKWZaD5XpTDX95uT6zD1r14oULzRPp1tB61dkArSUwE3Sx8nP6qB779bWzFRUY9",
  "key15": "4U2c3HXkrrbbUAP2MJsx7um82JnM1RU5ZnG5ABpqGhoiS8sG9MvXvTuqjExuj2Pcgna3qzonSHKSVK8Daprmm3uS",
  "key16": "3UdRoya8TFjxe9mtZ1TBvzRtAugvpNTiwPfA1Kyd7LaoKKba1V7KxCfQirSNopLp9ZCWhDNkyTH2LLSFSAUyB5qz",
  "key17": "4oV6UYNhnTri4LABJaDyXNNaV6iYjUSJyW2cmiaCtXZSYoHGg3tgU4KbnM6T7kvms3pW1mzvqAqsAgpCBfUJWApY",
  "key18": "2HNmfTRBc5oH1z6A154DxG3Jt6x51oyh23yUNACjhosHTR7K1cWEopF3FomdTqxbHiPhVXYrF8eq1Wm6jkThzRF5",
  "key19": "2hCHbRbhMswDrVxFQYVRpjSrb3jbUJiv2rMtj6wteYKf8fQiBeeVtX5r63oTiLBo1vYNRCPiDBjAYmSX8mGbxYWa",
  "key20": "2zvcVbjpjdPkLL7Gv87n8RitBFYyzKFMgEwztYNL3UW4yb6e8iSficAvSK7hEfma1tekyinxwrGbGQvjYqHTt5no",
  "key21": "672iU5tHPo7MxvEonkfqci8s5qwQaVmoBHGbeJ2z2v8k6ncFh5AAB5LgAjFUUtDC2pRkhUFdY2UZUxgXQxKNTtAV",
  "key22": "3ZRkw5iDWzaJmhw8c2ZkWShYqhhdrY9LkTrz5b6K7ZE37kskpSAuAAfDTdQJYGVozunpkEWy2AzWRGgHWtigfwes",
  "key23": "3yuvsNadLf7BtsadtffjjGD9UCtCDMfwENiJzZyx4pGZgJWW13bbKUCa3iYKixX95rxoh2ZdfvXvo4BSefGqL5ph",
  "key24": "KBaFPB8khZUe4oAcShjP5BdqtowGtgNDeyz1K8Daer7kQ12Ku3gePDaChR1m8deUG6yNAfp3tnsSztztuzrvQCW",
  "key25": "4vrCPPDfZn78uUxVHJa3rDJgLxXMH5CP7r3srPXyiG1TQjsyb15cbHW5ReQThDQmgUPA4n1PmpQcnXgZwBK2W5BX",
  "key26": "2uisusdgNmT13McpQ1i75pytcuyiyqFFqfmK7yoWfJBVPsCFD7Xk1BKHZT1Fho6ECsx9JuBTrZGrabHGQ1ey4yuy",
  "key27": "4jcdYrmoQZ3rMFN631BN4ZRxEPAKcgnF2W6n6jkixdSBxUAsk3KPMwcC9The1wZvidf1w3QyFHhxrnYBoNppBAum",
  "key28": "43kwo1G9dWp6U3QfhrQevFWDwagz879MAfENVwK4UCxsfZHoskLP7oS6rXRbU5skwemCoTmUUPmtPYt25Vk42JQh",
  "key29": "3x7VAKmUeEEn5MFgsQdfpzPdA2KFQzRJ9z6NF8jzub24tv7e178jtDC4Gg7vMyA4UxLm35XEwfFUFVtpWKxRQu93",
  "key30": "2Prnf7HQoYvpLqCtpAohyTTzd2bcC8wPdqMDmc4M4pM4fm8UZZn61ZWxN8zuGN862LS6S4Xu3tA787WAy6uRVkgP",
  "key31": "3nvmRxWLCmpQt6WgnhcFiijf4QiWGXj71DffUPQpBPAzK6LYuQYACuTvS9HHxwAWhQh7Q5FqW2hYaUCKZQUVdfHW",
  "key32": "5i2xFfSYoBydbLb8G3xDvDba3KVsQXPfWKjkYqLZHtP3EcP79kFfUnHhKbaAJEFmjhe6hoUnbmMTWBZ1WfWx1d5Z",
  "key33": "2AcrNkhZJSvoyQ2nxBhyCYStRT8zkLRSrKGVbMWiNWBinefYbA18fAFimxme6c1ibPvS1ku89dq5baNojZ5HwA5P",
  "key34": "3ZjmKabdevKAeTVcTDnfjTpeWqcCBfoagVBKZnDeTSMwrFyXGyGPPprmWktFEAHws9XXkB7a25GYq1iU2L5nYkYS"
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
