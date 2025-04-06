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
    "3o5ZxGFi4AyTppM148Pj5tt98vMBvmLcvxPJ2WGPy1do957ALpfzutxkB1xvV5KYAtbz7ZuM3H8HJx8o2JgQ2aUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UMhvQodpAYgHtwhutXAPxuKCfhQYto2jR3HzyPqaAWrTBgTcrqtvdXmZtz4gubSejBJVmEFZzZXDyK87yj3i38m",
  "key1": "6JbURc9BtKibHjkP3U9UE16ssF2iRoF44dQLvkXrvWyWGGyRiEE5gWkdSESRPK1Br6ZT5ayLXHXUXhQGWhu6Bqq",
  "key2": "ttUGDWA4uzfvyZsfbeboRA15chAD6Xmd14m94g4mMwdKSUH7myragiDnNRuWR27HtPA3BMewZn24Pi5ocusSWyd",
  "key3": "5SYtpT8gQbmbNYAiJq3TGpfY89Me7w7VV22pPkKD1Via2ruHDxsNp5xhHkD56VV5S3iVLvXqogoencYCP4iL6h85",
  "key4": "3sTCUTVfWvDMbj377TkPzMdQRrA2GeVRvyd1JFiXJCRGt8kDi6PaXNn6SxH27y3ymXCpTn846ACGPz18yDmXSCbJ",
  "key5": "565UFyBVNoBLqFEASTHzYBfiNa6rrp8XqQqubrLBnZ2v623rrsbZxXj6HRsVbbNHwXKW524pAghTUqwsHV6aFm9M",
  "key6": "339MT4fb3pLT3mADqAxftd8vuQWvCf9keVcHR9zmfB7PybMQhHXPiYDQDiFFigH4uyXkxrkR8vnzzTX4Uegy8o47",
  "key7": "5kjE22xvmDuooQ99Ey97jPuzXv3n5kgW5fZewn7mr9nTfRjk9m6bGCzou2uJM7RzqXHGGwBYGJBqaR2RUVmKLDHr",
  "key8": "3Ndyx4JiSppnhYA4uccYowG4cPyk4Z5CwisKX5oduoVK62Gq82F5jRjYc2rCbL5TYHyYWg4YUSZyNEZLQx8oMcez",
  "key9": "5s9tyeG4GQFC636Te48Q8U8HSNtiT88mSCZMqgHARry876EaFMr8WUittHeFuqaiUt8Seb48prPk5xTSo1Fs7Hdc",
  "key10": "4Hj6bknrYY8ux44bLeBMZ9cMZtZNMG7Bj8GRjRKoLy8arxTwmYUc3UgqfpFU29ux9aPMHHU5Uykh4wscgrWepFJY",
  "key11": "Z6UByNjN6Vb2ysyaVwMufPerPT2NRcsQ86jRJbG9ETzVb8cuDjvuKpyHg2H7t12aivqduzp5MUUbRhz6gYJJoWF",
  "key12": "2esz4pw25szzcjtMYtQiTu54WCHJ3MhEV4XzeeNwT1sfwdLbMDMq9u7j7235e7b2JZCzDvJfoxHwYrxDT6xwATei",
  "key13": "2Y2pmSDTG9qTRqPhtmrxi1QoKx92gGjgBXnTAQbF8Xq5NfeVfWHkUh33bMJqzNW27aR9ogaLQorznsNywk17njkV",
  "key14": "4xVNrXxSRzSHbAYu12QnX442B4wMP8D7Vks5rjDtgQE1kfZUN628HW5uCc3UoYRv7y15sbCPpW5e5gR2fAS5wxok",
  "key15": "5asuPUFCrvHPBkfF6hyjADSR7EGwDkq65WUxCUsRYocqv2kQaEWBWx1GXsfT7CBtVPACEJ2MHYv88sxd7M33FkVd",
  "key16": "5yLEYoBj7Cvykm9r2YNkkpPZXvNQx1tXavKGbDv3NE7EhaBZGnJJtGDtRD57m7F96HmUbBjEXzwWXePeU2SWFnxW",
  "key17": "3rdM4mMjmS834zM3rq6KmwmrQuzssfkUSBL6JdTuRBRE3rT3xS9CtNkKoNd1728qaytS6wZRFGrvdX2SiVkgmBFV",
  "key18": "kStUTnFpLue678a793MMYfeWrqobc4yCXdtvjX5puZ5p3dRzeAZ5H2ijU3Brr16Sh1iDte8VGmNJeszBK3gAYCB",
  "key19": "49rRUZUnHCcD8HnzpmCzcPkLTxCLZ35tggEwXwyMvNWpY81ba7PJvKxeMknELC8Hi8uKuLrsbWydpTsGo61QsEak",
  "key20": "4P77xyY6Xk77ZzF4nMAJKA25UPrUx97KYh5S2Pzmmj4M2wnPD6KgbHL3PGTVG5P6ddzBrHUAKLWsXYZRBS41U2zG",
  "key21": "3gNRimm8FLzmdmoCdSuiHaNX2AkphozzND7edeKQ6dLscpfLWtVM8DAm2dnPALpR6h7ZZhXVCmGF75i5ox1vsf5X",
  "key22": "4cP64kadLEJF9fXbScgbGzxMqX8GvbquzA82MgfKokyhpN2GuQXHxuULAwih7bMPc8jTmE8tjQNaqZNZiyz6kZTy",
  "key23": "4SURxrJcbBi6ikHRg6zdN9LqVSUf95BQ3M1qANFsbNpx3hoSzTZ1jPRKwWYWLyEJKqEnDChQNV2JHgU2Vdnin2UW",
  "key24": "4p7rhkuLfuRZ4Yrp1shMRE7QxtBAGmDVS2UmEqXSXeJTv72CMSSKwiuJsd9HwchmvGnNedYM5EhbDkRkcNrGB9Sy",
  "key25": "2w6PMskgSyfcQkzWe7uFd6478HkWQ9YRZ9KE8nubTw6kGYLriC3bSkdoTFUdyA39Xcqx67Waqpm5kSQg4xmp7pyN",
  "key26": "4oSUxR66LDJpZRK4ivLtewrrvZe6goFxGatzgngP5BAatijLTmryTc8ta3k8JzHnxsJGGZR13EGnss2h3ZxMpHg4",
  "key27": "4GBMKBBvYH5z2WAxPMGe4pAiTAnYQp1P5D9dorkWCPizZ8qmYfwFMVWuB7BDxtssn45p3aBbfXwJMdQLNm64o5Hc"
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
