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
    "XcBivtHwPgS8d8wdgiXkeWN3xZuf9rEgg9UoNE158dkrR5k4q7Xp78CiTHUETKVwP3VGzs9ZqfY6uSjscQjtTev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QcVXeSuq24aUE6Vy1JQHNM2sB3pYL4VPVfERFRmNHGuen4H4PAqhsAAQ48GboztTK7u2VBBTMb5RRT2pd9YnzBu",
  "key1": "2LGrb14D9PMHmLhudcNfrR4vsrDSJJvGbDyH4S5Bf84ry66MZr6FpyVovCJsaYXhpL6BZ1Pazi7mDBzin7Jr9LNR",
  "key2": "5QHCyHg9hxUt6iqAQbF1YwGCr81bbJnFywKPBVvSBTNGwHcMFzQfoXeeUyMqLj2HTRRKdzY5oZSapH4B8RpzZtGB",
  "key3": "4ckbCzD1tXCRxMuSj3AmTVZDWxEzCy21SCRAyVr9nALhqh61YXEQKX4DF4vvjSwhPKmfuqhwJegmrDCxJXizap76",
  "key4": "bhp21zSbMshkCKuJKiEUjaG29rjLnWEH33irQr74fJmHPF2qBKBaUhxrWQ3hbFeA1Z4S4tR4QgBLXtfrcv8sRVB",
  "key5": "5rSUhjKq4Ff2eKwpfD3NF9Tp1X4kMNUGbaMzBy9sEbsaqVkoN1nb5vixHgN8tB2T3prmNrAgaZRQ1TEmMcug5Q63",
  "key6": "5XWh2T1LX71RbUb4YFtGWU9eezWG16jc6EAXBrq8bceL5Ppj1Rk2bydYF2jNq6YVnkiJ11YQfpWikDKmJZqxP92L",
  "key7": "3jihekUsGr7XFVU59pPc6GsBwDr1vrmeQ5u3pobvSV6qT2s76s5cjZ8VWir88XG6F36bZWZ211NQyqgrUmv4vTXN",
  "key8": "46mmqs8cmupKxzqN9kDfMTNWmCmJFEJd26jrwojLTfck39Np9S7LCypYU15zc51MJVJQmJuERCRAB476UrrMSoog",
  "key9": "4RpDu6UKjTpPTv3QdkbCn5YybXNPLGqawXcveBJxu4B6WUDq7UgWdJfem5PiqJ5xxADwJC3RjpbwA2t3BkgaDWgJ",
  "key10": "4kXJ7eSiQN7jx3H2tE6BDCvyzDZ3ZN3AoYzC5Q2pgq9QkpS5tJN6KoQCH51RhuLAcPhQHyudF9AFVVNEVy8vNnR5",
  "key11": "QBLaji3RVHRXG7ijj4ymWHNcXur7MVKvgqDwenzNpDj3qSBWj4gLNXwpVgQCdnXLXGz4CujeLjH1GytY8PqKHPn",
  "key12": "3oKuJCuE9n8CfqjcbNDBktRASf4cqRTAwyFtRumz5bpCD6UggfegLgoTaN6S539N7zYyucKbZ7yaRMecHqAvkQXJ",
  "key13": "5BgrgoJq3dreu1JY8BYAMR41cMr6ae9qJTiUt1y9Cmy5vXGTCV95WrhH5SFrwDpwDWDWeLKh8ZiWmYWHxFp2Apnj",
  "key14": "jbyaoMhNDJAzunfRRzP8YnHiBv4icAVSja6kXxkMFp9vpe29majsmqAkxfZ457mvVygqKsZqRgBcERk88EXjbKo",
  "key15": "8Z9TCKf71RLXDTBj4YPVFAE9sA4FAYQNzX29D3K4JnzTdgMsXyP5vv8G2H3oB9r5tCbgjE36VYBY7ATUCSFrTgz",
  "key16": "TjtjRWX93HsKH9FK3QuuATYJRnh2Zoznr1SdHisJvZiQBLGYfS27a4BLjiCQ1Hvjk4kJ43qHALcqGMatQMQaYxQ",
  "key17": "2FwYJ9Mn3gKxhgxXFk2YBUHZj233Vjv79Pu3xwUXAXUAFnU2sGV7X8ZJ1B7iM6vK6BgvTojGAY5DCYVG6n1CcRkZ",
  "key18": "2aus57WQWei2Dt5vqtDR7rBzPZHU32Kjz1amfhRKif6bVuHLrHWUnCto2SCecrx7U7hT5eRazDwKgCSziaDjAUzK",
  "key19": "3QqjDFznpaLbuW25ut3dqy4baXB1xVc85BWRjSTEXcVwDr86WMrDwKEzntxq3FQJXKyW2q8S9D4BMUMUp5tFWh2n",
  "key20": "2qENjoKCaxCw66VBnTQgjL3t8d3KkbesqhcxXNmZA24B75dfJEs4NoK5DmJ6baCFQheEDMo94xEtxR2ZayPzFXTi",
  "key21": "TKUxnGSojVR6zYWqJxghzHuWoGzxuPM9pnkdm36V2c2QA4nXguYbQAkj4ugLvkga1FVEWMNvkbJEDMVmxtXRszE",
  "key22": "4zqncJQ47UVuASRc1uemnX8UPUL3RbvBFHeJzmbGR3qrLFpEDzZLtcJghb55KRbPgU2nPAf5NjJetyu55Yp7aBhy",
  "key23": "51Bi9ifY9wJnQpGzQ7LafBjtsongtZ1ZZ346KHcbXofRKEYTyc87KAhcjDHSq56oTU9tAKCpPU18caSiBiLfyeMY",
  "key24": "4Pdyr5Q1Qe2qKsVqqMVGM84uZsabfJ2pnzsjzoL4FNcHY3oABnULquRGSGZLJqKUCBVwwFQnrZHGZzMJYrxENSQR",
  "key25": "4jFSu3oqbngSFLgEfJKXP6DDgb1MrSVT4j8mfSGT4C3tbnBxYn6bLADSRzfgkLo5nqZSJxL6JAAZvymxY8KhEaxK",
  "key26": "4Ti4nHRhuYv2UTuoPf2sQkaYcwsGEDzesdGTg7hR4c7g6BArk33CxCawchhVuufcUdPuAvvcuBu5nY2VAFRgWCQ6",
  "key27": "5td2DV5NiwkgXuvwBJd4pTDkXURnSCJ9S4qX5TNaL1p6BUxStNbYFcLKpwWUU57z5bQqnfLSrrpqL2goXHFWqRJA",
  "key28": "5N4dqwu8KRBqHWvQ21em5ynHFa1wgB6Jt7dNW9nCHzwr5bs21kyyX2Tq89KLK9EyzaYRJxDxUEoUUrX4zoQrx3bk",
  "key29": "fhWZfp9tdGtU4RuvigybULCF9xKD4u5o2abs8dZ524JVwessSYfSyvQNwDEs3ACX6xUtY3T6aMrQshX2hnMqcon",
  "key30": "5aCFP3uRQL2akDPbjX9fKB5CvfEoTSMUiFm3puCBanhArEmNxQLdoRfXJw8JDMc3DG5t14PtPZfmAVPd32TkRC2h",
  "key31": "XYwXx5XNGV81XkvuDLLXrHoJBVgAJj27rm9zGMZG3Dy7EL8vwtUW8QdoyZfmPDk2aZ7yoCaxrbWoZUfRoaj2FuQ",
  "key32": "2AqL6KxoxKy6uGBoMzyviAKL5Abqr7V3CzF32USoXm8SqgRdN6ktoPwu8N9XA6yN7kWgYnzoWVvjjd9gUYwTDfSx"
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
