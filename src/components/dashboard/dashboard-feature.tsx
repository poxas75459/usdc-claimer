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
    "2eKrJFccyMZDwKZm8MBzB5buqJEGkckKJM95YABp13gL3kZi2r4NgYRacYoJnbGNXsUAH4YfFyRcn1LGBffjZs3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3itH7M3uC5MFfMszFgmdhJozr1n1oy1baEhmsgbEA3bQMXZQS5Y4s2T4wJaGrd3bpJM6qcf7Mg9LPgMAanP735gz",
  "key1": "4oHoXdUp1dhE1jF8MDVpM5Tf9AG8EaYnGLjZhKVsuvFCcUt3aFxWRd7teLgFTvjfcc4P8dE7gyCnkPQF5nPsoKdZ",
  "key2": "25WfHmegTCEZLZEtCG3HWjgjf8MbYsW3kitsnv7fKm1xbvJrKZtYaSptBifZjv4jKNCaDLFtE9ERpfbgP72KPiHH",
  "key3": "TBHWqauGHhfh521PTQm1pqfXQBt1HFNE7qG1UTEkfHNp3a3rnnEjWb9s784a1GcX525qvo6EUACGSpJs5XU6Sq4",
  "key4": "2vpWvfAU5mLua45pGyZ8SQ56VQn25ZrWww1y3se5hkNkKVtfoU37kaeWS87XV3HQfsHW2LVhwpw8TBKYs9WAEw1x",
  "key5": "3KjLPeah9akMWVxpTqk7P2dPYzAkc96CEUiVdmpvWZtngopwM5EDDP6LbVuFBFnGKNHaiPLT26smEBB8hkUQC1CK",
  "key6": "4QADxNt7SdxPUqfSEUA6LhZ4sUqCEgMRvJtwXkvJujbQgkmjhwe5ctLZjJPQZPc4iEidBdF8NmdKUVscskd1rwvG",
  "key7": "3V6yaJ9VQx2WnAtretJA2Chgevzpp5vn3ttuKsX4CeYeegArNM1PMjVprMQS5VVKRT4P3qv5A919Gi7H1a3KFsc6",
  "key8": "3k7fa2THfi8n55ryaPiPFHmCzvdArxnUxgo9WFwALXL6rLnGWj9mhp15BwwGr9QqKB5VsML4eSDuBjji4Pu279gv",
  "key9": "3EE77eH1BSY1i8f7tRqVp68Nywqxhz23QEY8yRgTm5iZUb4rhHiz8Fiwymb45JP4XPBu8nm5ATzaFeomfUVi4rUg",
  "key10": "2qxrtLt57TaWmcTovywAq5Sgd6q6gR6gzrFoN32MBBn5jD5KNJcPAsLcTwo2ofUerhsXMSpeXFyNWhWroNatD6ry",
  "key11": "4sMuksCzryJe2FFH6Y8BP8gvsaE3QRFiLyuZgXK2kiU3fGjEFm3ozVUu2wcaUpqXQKW9S6s7kKBDQ1S2e5PzeJi3",
  "key12": "5crhvWEN2i3YjPuGTpdpHTW5HVsT5b1iDKLTPYAnbKbjhWoXDBiTdkwGNEJ9NBKHcwbSnH7XoTrKL15VBEHSi9f9",
  "key13": "3sGyHCVKrF7qSh7JdxC5neZp9kHTisNng4J52CwoKNsz1Y13bkaH17EPTn7GvKifn3pz9DXpTxr1xgzsGHD1u5TX",
  "key14": "2sCgQB8wxTYgVEK62se7AM92pe4U7tYGW9K32xEsdFJzoyR2TbUJsyZp3RtTHjmJQAXpy1po1Seh3CnUT7Sqtmpf",
  "key15": "3KPbCpApk9du1E2PpWKN7qYCkkBht5qJfYkVBDo6AFMthMte2yVEbn49idDegK9G14YH9h26kbhvwzkMv8hYhKRz",
  "key16": "5ufrweFrXGvBaBuLwLeHgarxLMCiy4HshK8Ta677gaeDNVCuxLjPqYibRgzRsQVBRkH43gwnh22teG1EZ34CSdU2",
  "key17": "24hfuD6UPF7FanXuG1PmfzY4SQz8RpuQUGQmJzxvK6X9grQ97bivrZD92TbKeKQRFLkqAUcskENtYLvRZKgtgdzd",
  "key18": "3RX3MU9enrTuB4E3kQjpunWYniHA2GDGjZ3w1997nCrgsNQDccB6tPE1A1UUKcBLHS9498mXKvpTEtNzQaQMMJNz",
  "key19": "3TEfXBo2RXBXPQmxNg83jxEfjfWGwDMUvdcmmwraWv9vf96N8i2xkVDvKaqh52fYr85wrYQAt5RFAXdyNC8MBJH7",
  "key20": "5PPqqiJCEzrvVkQSyXtBPMk1Kk2jiXYK3v3khXcmaM5M1YibYErrqFtNWBU3kB6pKgea3BSRgcZUxKtcGyBTWqCP",
  "key21": "4A58YeXnknEAFPLVKmqmebGLNnuzMgq61JpYRysSJbQhoia1JuzESXXNYHNeJyCxRwtf9FdqjFTb7kmL3kgZnDfc",
  "key22": "3w5553sGjSDvGRZ9Yy4Fo3yXoivNMKQ32dv9LezVDwGuoZm8B2uZ9hdm8tyfFQkhP6eNPHP8fY6hh7rQskVNbkSi",
  "key23": "52sTqSSERh2tTerFfowGR4wYrCH4W8GpAtK5B1Rc1xeWC8HCqkrCRAv4NBY5ZrhG5s4YuvCAZdbHizLTGba8uAhs",
  "key24": "4W2WmWUGYyah8RiPWQdEEZsPwiawB7cgWasYYDrJPHVKAp5NPxh1erv15cYUYWL9kpVGxV1363RGoAxj5HZHyykJ",
  "key25": "3EjwiY99b3sT7GBtUXumrYoaQd5qhYMB1hvPPGzoeVYC89wQkWuyrVeUFadHQMBWzuAsHvr1gQnX4NypaWPCgvXt",
  "key26": "5dn9vNxc37bXmhSbswpfhEAqrKmSZqg2vyoG5YPcQ5TzpQMVAC1RWxUCxf2kx2t6f4H9iYJUv2g16cFR9Z6S9bXB",
  "key27": "4Wp2UbKQAvrdgTMYkFHBiC2e2yBieiyfHEwaToD2cGBonqSCRwDPMukuLFip1ezo5pd46mRVfBWZJ95virYp13qT",
  "key28": "4jWK3iPeCKCjdTDKqnMRUzGa86gqC3nYviggBgNfaCYD1q8Dy2bxPcQ7YApJM5PHFLZKseNo3Vc5T5sygnL3qdWv",
  "key29": "49Mw5vB4iP31WD94utUjgTUhEiNYk1Xe5YUE2uQsZR1VsSCTDrWjuVAwB2meWnJ9t9n6dAG7v3BXQbqnfM6m6aFA",
  "key30": "55mfqPxEqqGLZZZJpuLr8w5qjKdfbi2y52mHES5voz4S3j6NN9muiWNKG7Ai9x6aCZX5kfpkRkE1FoV47NWRo1YH"
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
