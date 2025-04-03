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
    "5CGz47AKFCfdk3wiKiESBtDdg8p3NgxVD5aLg9CsXTAVDPob5ZKeNuyPH5BNugXcdKHz51w3Hu9NEzsWLjbkkqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WkoU1bTyLb1hxK5shAaczemm2JXDyGGm3nL5nuxVgXSGn1MwYLRdFhThSgFEKWd6DpnejCUoVne4QmxceoLE1JK",
  "key1": "2raARkUazrXWB5CFubA3oCbhAmkrkG9qbhyYCr5W2onStAaix3YY7JmdtQV4FyScN8UyxWtEzEJ13Q3MF8h2sBho",
  "key2": "34oRjt8YWs3do7t9dsAHBDeWdBYJTuRs6knjvbDvD64BUg2Us7UcuLvYXbXQg21xQKUStnuvPnWz6p5YDzhSNKnG",
  "key3": "3abx7HnaD2UGfc35zXr1isQrwqz2xV1CtGdbj81gtuQh8GuyHeqxnpMXFxc4WZHTiewLHQcWJfnVensjxZBd5jtG",
  "key4": "F1UTT9tkfrB1nLrziANqD95DN6ShrdjFdXF39fpaLLaC7cnLBRRBkxGynsYe6yqqraUXPunDDkXmtahcQkGTcLo",
  "key5": "5RbFb9ccM3wXmojDmMx1cymZDfSPFfS56AUHeizsN9qoPwXEdY57d7C97Vy59SQFgfFCWCdcfBdVX8YgzBY1Hfy1",
  "key6": "2LQW7BJNfFbixHRqLVkh6GZ2qQtkxXnmJgjfmhYamLZUNxoVVCwZ5RqiQj1b5rtsZSBbXJ5AZRUfGEi3T3BLvLpR",
  "key7": "45w3DyGS3cVSsHLqBLicc9Lzw5aYDThEbFPdvLeHFNG7qEPpLZqSL3gv8xduF4nx4BhL4o5RJLBt1i5nwBqz5vAW",
  "key8": "61MgsQNjc2VQ3Sz8TXmLGsJVLpfZHSkUBH69LaRx7H5yNBTdQX3B6MeVGW7pNFpaRvpavzia3CcoHmx9jV3Zesgr",
  "key9": "2AhPJLHveEf9qCNQiKLZiDkqoz5oYxA7FKjme82BGuxdZSXCPuT7yAPmXvM7igXBvf9nrb7m1yaXeFHtnH9GwoXY",
  "key10": "4FEv9QvXPmUoP7LhSU45T2S3JiRAXps72skTrC7dkxPB3BgPk8S6wwFpqCfDjtHjCGTT9hnp89eKNaeHzev2haJF",
  "key11": "2DJvqNP9QvbyEABrpz1iCu1kyorppJLTAg6dn87vT7yKZYVpPU56jzqu676GuHpvKVRukZmR1UB4iura41mTQJ1P",
  "key12": "wJuShfrWp2ifQnVQyqhvSXNrVB51j2Nk1t5Qxnbucz4jXUeYniaU1eDp1D6epEjCYpuDNrBgQVbVGzgqtbQRxA2",
  "key13": "52FNoMbjQBzwfWEuMprKhg88f7GQHQ2vg523MhiTaepJqu65sajDz22vALGg4TEXEK9MEFMupB2psfqB2s688Zmg",
  "key14": "4zAvgzpjNfV2QbHCwcqoQU4wJocvteHDjyyXx8sEGniZpP5ZWcZ8a4a7fLGY2MdE8Cyka1b1agY3T2MdUMpdvcWS",
  "key15": "63XPJ4rdibg33LG1Mx1bMQaXMdWxPR2bSJo2ozgtCraYmzbSTtTVfEVeQop1kzucgicTuSho7fxWCFLDo3unG8g3",
  "key16": "4AJWt4amUZLbGKtaQhFu7LNsVJrZP6hQi76vEkdEZ8jipkXZ5zXTB6PB6tdPBMBqLayR1hpCvWE54sDsGqAXogLa",
  "key17": "4WpCZJUzRQmPLfnHmPrVvDKyDJaJ6XoSNLvz1nTd7o6HSXFfD7ScwQ9oWbVBsfVXZf4p3irPWdURka3jwHzaFeUY",
  "key18": "5X4TWXM6Qeuw1AJ8571TH9xX5vknRDcs47cTxHozBzacwSkVdWdwnguG84u7AGhUWCe9zhdZyPmg3ZRWrzZpT9Sa",
  "key19": "4S4ocv3h8enAYq2khzAzyxJpSULVC8zMtTz1MihueX6JFGMtnvCUwpV9Crg91MbkhjsHQzmML7gCMxGBRNTfRYk2",
  "key20": "5evgZUYmSggeBd78NgCdRm3bMp84FDjWp5vBQfxFrW635sVQgoVF3V1HaA75umBanjBu7Y9VCU3eY4qs1hV1x91b",
  "key21": "d3pD474i1X8aGazLY6boAHHkCBZr2adqbbbihLvVTN21CnS5hQfRybz2BA379iDkkLKP31WPSu1ZxgUKo8uynjg",
  "key22": "3i27Ek3Vi9397gCq9sZbHFyFfJ1i6xPcjeXF9ytpRmZpzJ6xRFcLdNMtzbwrzP2s1soL8tVF1Btqwpni9i6zemVB",
  "key23": "5ookMXasnxkfDdmiNrCTbJoi5ajyHSEpWFqf9CSWXHiUTZC1UFq4oL3MLSGQh8zGVEwdS3hqaBZUrz4xgiUBp3Hv",
  "key24": "641nuppSoXTxDdHvJqAPAeSxTQZmuEm4H3xQAEDBQx1dHhxukTGHqaP58jSTTzDhDNg7ps7bPhPSYKAorAdNWPLp",
  "key25": "o4PtQmFsqUN9scvtphpzciHgdiaJWHZEcCbfU7oQZp7ud8rs6sUVJdEtB1m7skExrazfB9P5Kk5ohcDhyUpByoY",
  "key26": "2Cvq6hcmhAPeQ3iS56f9mqyjPnk5TQcgZ7wEscAscH7NrE1Nnm2BJ1meAKAPvEmgsExN4gMHK6D7g7UVUMTUJrGA",
  "key27": "5VGYm2xZ3npVthaM8aejMYTXuSMzK1M6JpLfRw33iCS3joq3cwuD6HKpeCG4v2AWx4p8cA4sKHPu5oQ95xjTWTxT",
  "key28": "2y1okidyVGcZKEErTETxKCJdpdYB7p3QytgqkuVPdXznGXFA4y3oKuHLDUFNz2Mj6UKuuTcRdziEwa4h9uzjdAzU",
  "key29": "3aobREhZpVWzsaQrYL2o2HM4t33b6tbV8n6Es9V7L3oPxz8GPnz3rXNRwa1JwQrQ8D9uPotkAXc6NRAEbMTBjhV5",
  "key30": "5Rt1cZ6ENCVJw2Xc3SbdysZ44AfNw1819B4UmxPpkJYSskFDHa2vuhe8svaScHK1XHYaWBBtkvcCrF1p36v4jDt3",
  "key31": "5zd1bVmMzkXvb1hkX6DmxYJ1nHieNzcNKzH6cVVYgFfUxY3WWy7ozzvJ7ZwG3LQcVmFX3AbPxDJMWVeYgpsYZzRo",
  "key32": "2DGM3WRkJfXeBbB8kGwzDSsTTUZBt3N9yVNXnaZd9gdmmm5SFKnsXF5UVgpFh2tDupJnxA8AU4fLi2hPKr2zygNm",
  "key33": "3nBRQ1NhVf9kbzQwsw5NDv4j7dzvDzT3uxFTSZjukzEUFwQt8Sz3ptXWUKkohaS9Zuyr3zn5Xo4YEuQup8Wxp9w5",
  "key34": "5QK3wg6d5d56iDvx8eRbjKjDmhr1hqmDaG6yw29oqvMRuiNHRNkzyafgYL8YnBWeYqYS7RhPQmoQQFnPjXfaTbPp",
  "key35": "3v5yirkHBwzAEYXaXyaaqfQ8EECPHFAJiv7BiQQcmGvDPDL6PtK9hsS8kkLvp5FegxnMfcrZ3wQE3F4F6imy2PEg"
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
