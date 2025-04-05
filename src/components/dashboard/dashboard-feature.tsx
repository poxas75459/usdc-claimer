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
    "2dLTqRBgYEY4GTJPDEVTGBD7utoKDmiwCh7rUnB7ti7Wz62iBDxtsh6B9fuq7ao2K5qst5jtP41H6GtTbN4xwvsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61VsFyYEYzV8mxQVNiud5z1CF6Ene8FQ6euP5EHAgYZahwKScwF1S7KJJ7GdE1dqbhTzu4kBpMQMN8tDoTvgBht5",
  "key1": "RvUWXYWGznJx9kwSwhpE1ihuTT4myQRmo85xGZmMSUVhkN49aNESNqnv3KagwDRSC1qp18CZX3TrRwijdhZM66o",
  "key2": "5kPhgkDg1GzvRTtyeZP7bXULcv5aDm7bvzXrqViiuCXzRzLTDrsqxSwDrHw6Mb531vebFPdnfkWED7mfh1jNHxzp",
  "key3": "murKrbFyDxSudJ57UuuAJi3JXVJUyHvZYY9fEeRQZpfNXWddJ9dsjk9Gr5g7mJAdESniq7qB7CBsNb2pwuENoMS",
  "key4": "3o7n9Jz8SGeNgQEKiLyNa5fpkbKZKzv4og8n4UTRUoea521sUq6BCEjXRD5m4XfBNGiYqfabPkifmcE4yV4zoeUS",
  "key5": "5sT9A6VXqynhVoFBxhSJo7SUEEekfDRCTuZay41NTTcMpwhhf7ee7rSDgvtovetYy95X3XaFm4bc45K3EDvWzUmC",
  "key6": "56DJcTJRYvvD92KT1BmyAJtfha3ermtMCkAeM7wBHy9Uo7J5dUWJkWaWeiJg3xBqepko6Gtek5ibeyP6Q7pqfGZi",
  "key7": "26SCT85HCyDMozLxYBMFzzHmYx32Ra3w4Lebrb6UbBYydfdWGBtA7Y3M3bfzJ1cp1LLtzxCMrsqLhZ1g2F3wj2NW",
  "key8": "3UPESwC9tYMVVdDxECdgLgDU9YWH7UEXBPLERniiFHCM7FsezkDcw7tqyxSHnkyTd5pA1MHSfndGUPTvnrTCkq6x",
  "key9": "5icRYws76SKctXqwzTBnZCE5RDZhB9Ek683QrGfLrddxKmELiypxDE7MpeNDbXyMGSxhqbnSPHWNFAbExxqS4jjt",
  "key10": "5rjurPde8sBLqkqhN4JU4fKYRsJMHoTyobTV9GHaJTMK6pJiQLvPZ8SP7uLqXozE5am75tWiv5n5hKBCQRXFiRLa",
  "key11": "qAvskhu5BNw4ecvpa4GbUUcu211tzH23a71pCtDM3fyyUz7PddvKFmPB1ku5sxSWQD4Meed35tBA3MfYtz84To9",
  "key12": "3X4cyJpnt2Huxxp4PjYUS1XGz8yoW7RYChUEzxQsLVgv92wvPcxdpkgVBXcdPsRU4C1vQXCbrcoe7nnGKevGqZkf",
  "key13": "27F7LRXdC2YE7irPrp57MtMiSbntCQvmJZfcrmgEQ9xmEVQ5MmfhQLstUoX55h456DjcciyVUbtFTJ3N8dQwDELW",
  "key14": "664NWByipecdJYVdpiE21Uhz7G268GgfVgGHGdDswyP16tNE3NMMBCpdph8riPrehcxWHNcrBpRGZe715DVpf4kN",
  "key15": "2C3A2RzKWYvEokfgThLfj8H3Dbcr71G1g72b3gQ8C1u94STvUjXUi5XYgxX8T2F2EpwVXQb2YoY9B7WjE2zhzoDC",
  "key16": "5SppsGaRRHC8NQRNYJhdEA4Jy5YVMFzSaTjhnFobee6jg5uL5DNpaXDiLrpyCeNaLrPvuYT8zXjWxBK5ySUYsaw1",
  "key17": "2tzAw6uYidrBwdwJWmXkkJHQL9SNiD6j7UNQJrUV7mRQ8fSM9Wpg1WZPXrJygGRxayb2apFkWbDtsfuCEequhu9R",
  "key18": "3wEt2tbnYwvj47GH7HsZ2xAApCz6srLrFdFdqtK4HDSy71y5AMNjAAWCcGfYufHE5zuekYet6sqAnJRH4xvHaD3a",
  "key19": "4xb2ES4MR3bnZzXF8rPoGvHayUWJwRgrio4E32P32jfxshwKsxNAhU1kFiz3TAGuTGjPrWnMzMHYX8Z2NyNUARfJ",
  "key20": "2h4N7XKjgkFFcZS2EVZRF2vSXs4van8kBy6JynWp3JYGk6JXyipqyy13cnRPg9aQiUqE2S7pXof14GNv6rUToC6Y",
  "key21": "omaZXFoNCMnzdzThBvh8jyNrB9xkeEqwXiPvNe5Lbxrf3FwjXzQCx91aV8Fd7bzi1py45WV9SQ6NuTyUoeizpvv",
  "key22": "4NS5dXKyAMzyPDZLVtMXcoZuSCURUi8cM9PXagNKLgFCyM976kmYFN4pY3iPmVuXe1o8nnvNaYnGr8fQKc58F4FT",
  "key23": "3N7ATfM15HsEFMU5mUwxHwr9q2j5w55nCbuSSrMgsHhVyQ2v87kZcPeUnTDkswMop45d5jTYb1FdWJQM7tTg87uM",
  "key24": "4tcS4rtZEwM7kvs5Svt8MBUZRnwkJ7thxYrWXndfrdJHyPSZNXRBUFoMdmYVCi9Riw4spQCAUrTP7sBV2rvGYPK2",
  "key25": "5T2wTfcjR5xeANthz2maLiLqy86ZHgpAbWXBK3H5WZeuWe11VsRYV2bXwqE6Ye8SiTZLodyt2w18hxvDSeBBvYEF",
  "key26": "3Q1DqYoiyPhK4vmn9wBxk2FKvrovJr2unjmmWescKt1ZVNRxaMmjQpPi6SjocfGubcYtSRy1jBa1jqcfBCp3FmmQ",
  "key27": "4wjaGaC6gbhiXhY5HvCSikndqJPWpkJRn64UfRZGQYBtf6yvnWRtpAPTzM31Qq3gzFGgNN7trRJNdqHPss7GiDGM",
  "key28": "2K93z1ogau6FbaYwK2zLKPCRJPVnt6eWJN1HC2N1aB5wcLE7EnNaAtWkNggoMA91hwzYdWon67eDMe7S4oyp3rvi",
  "key29": "4nvxGQzrha5G6SQyxCB3KdwG7SGLAFiXLqtPTxDtfMiFVWBjq1JGKpHh6mpxpLnYf9Wj2QbbefWD3AhYFsbpMHbs",
  "key30": "3fkXu9Y1hQwDFCWqUPDWXo1UGjp14S3dgkmBxzu8r218LucS7FXa7Ta8kGYE8ovt2SXoEPWQrnGGkaRPbTYZyFoz",
  "key31": "2saABj1UkbGRF6hzxFpGeGHzsVdnTucfnyp4zSWXs9nCKm2AYFYxMx8UXBFTgeUQvJRK565K6Sp7vEzcnxz7ybUg",
  "key32": "36XMB97b5DFa4FopLVCRaVQ6wvgoBy8zKS56oMtAVst2J6wxMqX1A5U5FS2Lk51ZzBmUFtz3jJJbv5zdzBYs2Xn1",
  "key33": "2pFnHkj9UDHoMFa4fb9g3pXYc4DiWKfHoBNXcFjNpLDQoBvZVZEhF7EmT9E2znNXbaG3pxf95FwEaVGJTL36YMoB",
  "key34": "3wAbmPMdi6ys4T9CmGF73H7aGhzk4px8LMpfy8wQnRAuFfzAAUekhXoqcgUc8ofbBjmn3ZS6TNvDxGFxXrM12qkU",
  "key35": "asQoHwdr95dthyz6HafsRZZ9E33NGNKyXjzTbd7FGXtdnYzZCmp2PDv7XA5ZiMLkncSnFTrdecuc7ciM2ShsoUP",
  "key36": "4D7KEXbeHuXS13BXbKEHJH5TGP5DChXKWymRWaSNz9gMy4o6avHcXbUPkNqqtWoWEmX3iKfXaAGSq9zP5NXRzaJG",
  "key37": "JAHfTxYEujaYm6yobLaqgDDJSwaJLcyQiHvXBkAXhj6CLPPERfWMgYTEqNN4W4sAEDv9Y6KXdRceC8bYFkTMiLc",
  "key38": "66QLXgHdP5Kjbrb1BVmfvA8wyi88gTkDEv3ZTPA3oDvaEMSTNjKkmFj8f4RbSaHz1eCSoSELBZ9F3RGfruP9vFqf",
  "key39": "5za2RyN4js7bkkAfCCLRvUo8tEaCrKRt8vrPeCvq498v7st4dRiiDvx8SsYSAh3wLwMofx4VdyJh3vHJssa8sVFY",
  "key40": "23uWQYyxVmqZiVQ4CBQWD7Q9NxVMPsNVHt3PmzZyBudnRXXRHDCsKpeG4xNZJnT1jYE2NnPkXqsyBJdwzXc5WFFG"
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
