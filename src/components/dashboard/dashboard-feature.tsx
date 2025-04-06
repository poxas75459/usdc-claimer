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
    "3cqEKHkfNwQE3CjnS4qcGaANe67LeqzJx6NbWs2L6sa9UzfoLDb45FpJTUnqBmkUkG9cSUDzADaoLdG8HacBx9eA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vzidEyMvGbMV4ZmvW7eDa7nkBVU867PUoXDB39R9PhHG3XpdT9bmJUqFUVhds3LWfiw9wmSvrSVvdEpKty8bkAV",
  "key1": "45NBZ6sCeniXjX6fWstELRmDEvJS9yEDZCyDgFDAEBLCC1q6qrG7XGcwh5hbR9NqY6PfzMGyDERM2vFrNoZmttPW",
  "key2": "3DNsHXvByCqXq9Y7fnUNjceGL2phswkrQ4Y1XQbcJzzbHVP3eUYcpWv9JvScWr4NL1vUTzctHDsFnrPtJn6FYnGg",
  "key3": "r2tf5ZXnmoJyXWwHVDWZJ8cXywAR5pDS98fUrsStYuMLAC4VsX7HAsZngDKP4Advo1KNHR72AZFJLrFokRxEyPE",
  "key4": "guYgU3TWmnVuy8Y5mqqLy8YNBHz5s3Dx2brJZTk5GBvZpnUExyLkZemfp9KEwSSVUotaC4Q2gaUwQEdpAz3iX4t",
  "key5": "4Qzemv7TkA1xvQHeRG4MJMSneeEKSRGKU8StU2HUJ9tdCcBhNzACPHsugSnRxVzKY4UYPgiufinSLsNbRNCn4daJ",
  "key6": "5w5YmUjBBk36Rbc7nedo4CTf8onuFcjge7xMrjNn6s4WwuZSK6j1fzmpzKXo9HE8dHcCjpcm6DqXi1mupsLvo6fk",
  "key7": "4fRnjFCtMUY4zNFUj5oNxhnWA67Xx4fXADaK1utKeQXbkEs3rB3QRQEwSdt3hJr3Ryc2jnSqyMHGi9yPRgHsoXMh",
  "key8": "2BiUM3iJMzoTyygdN8DipcQXN4eTvU3W3pmjST1NgySgapBVkPo3d9vLmBaBQv7UHc5apBsaQYxMUBJPrqrcxxpp",
  "key9": "3FEDHgfjLtgKfbRTbvM9VapZSPM8W1Qo6BFeVfh8JkfkSC1RMRL9Tz5Hu7hfiumCp9HrfbCSHvFuNj1ywp66oAkd",
  "key10": "2AWwiLm5xktPiGm9NTm9yLeBUgNKfPtGuF8JX4zaPNUFdZTc5rDm711mQVwgoVGBV7SjbW3AFQ9G4FAs26gLGeDK",
  "key11": "hXoTEYqJ8RHLdnBkZ3QmKZdsTxwCzriauGTVPQfqHBUidAZsQjWDcS4AgzHsWm2vfjic76NL49vsBpce7qoAmcj",
  "key12": "5dhM6WaEhSnmGqnrFXXN8B5B3JMRoHQBsTzTnPXRmoNtPvTv9WSHT6hquVxYknfThFjyk7nDjaxHDMQLRZfGEDV2",
  "key13": "5x1bUhfLM6M5mxjc73rRYGMTjVAzEgkaWuFvgRtb92naWZJqyYiGDSynxvYNpE198ecqRzuk5QEHXsyzPsVq3451",
  "key14": "4N9TvTFmJJLviBvDexJCwbanEWCsBAcddCUajKJgR6G1q9ZdwFh4UMPq5eurLeqW14f4LbMx7wckbrFjiUaHgCbG",
  "key15": "jZLXKdVqZDAEp4eYRghJdHggyMEdFkxjZsBzrLPrZVFj6F24PG1AQ1XZpMWXQTRFDdiPsz8wQujeCmkmAyBRUNx",
  "key16": "5c7XK6TA4URQBU5dxCs5HxNsufyQehnWkhVWt9gCAiQ3rvWKgcJc7KvK2N5t3PGf2hY1jqjD3oyx73wVFZ6xX77K",
  "key17": "UF5fHKdUMFisRKkCoMgPNgoRkKA5tYcR1uVMa8SQSkp7oussRLwXqd7YNjoP4Hg5FEDkBhDRen1ucwDao6is5sM",
  "key18": "56FdFJAMTJKEZkV1BRwdDWQHmpmYUUrurT45u7HWKLXJvbVzyPjf6gewZDCT2pDDs5wQ4ajQzPDS9SnFrdJBaY6S",
  "key19": "3aSo1AaKW7BRzSidWn9KbpKQ8CDSHBuiVS9y6a6BYicyR9sGZptEXuxLYnxHevMbbzeN235EmfMnjxNJZguQnq9k",
  "key20": "2qYQeXFrC7zptyABjBYzMCmoPASe7Tm4dGTJKEk922RNWxxWnLhHGmLKfV3VrsobX1pfnDFrFeFGS1pg3sVA2jPs",
  "key21": "mUHX2W7nY7aBd1EbVnaL4WKY58sE5F24JrK9PTNvG6dSxaTKm3nEeZa3v1MvretxJz85iJas53GstMHgbLiJEfD",
  "key22": "cJqu1ZevpcZmpGmG9xH18q8r7kjioBtiMjkvGR16dwGW8GzpYwq5qyJshXUmuYeFDwoSF8CUDwDQvVUNFdKedyA",
  "key23": "5e4Pe4Ts5H99dcFtm2rrpFgk2QXiyEzykhzzBVqfgkAqcNG8eTzd3dUHhC1Ruy5pnUkZr32D9rnj9RpevKJ26kni",
  "key24": "2HPQNFSfpGYe8NctEA8sHLVj3egB4iuTjRQMKzNbW3KS8wvfU6eazs4svfGp4TJfwcymFyYbZpdFtfgPvhoLcF8a",
  "key25": "4gc6MDcHJJ7WYzXo8DbCVHfTjx5nmsRQLcUnS9Cw9599RSRqTPep4tiNEqovjByGwLRQWyoogppecbsP2SMu2T94",
  "key26": "9o6UhUgLtfBAPU3P8XJpjVhsknvHMqL1F2siAR5744BX9uAT8L2qdFrVKoZaYF8wvat3nmfth9kjVXZqpQwv6DL",
  "key27": "51D1qDtadSdisKSHCLABSp7rKJQKxFB4qEHDqPBrvXw6oinAyEfTkstLBHUP4gtaBh5DFSXWrcPDgcHs3s6sHfSY",
  "key28": "55oRgui98ZKZxn2X2W9Mb33aagwvpsJJifFFUYqJVGxtxPnF5RgfJu6nWoFhvLnycXjGDB6FkP2KgkaPuyZAcL1r",
  "key29": "22tQyKtYZktnFzDryKJ6Anu1pYsRBixCsv7voPCN3xJ7P2QAbCuMFqyx1krsohNSyY9cYveP9zc45PupZ6i7Dvf9",
  "key30": "5ZAEasZfvXXfpg79qAQe949rQV9ZW81x21jCHP9nwApg7xGGXaQAGSo5s4Mqehd8JcdzvLTd2MVSKecFzinUenU8",
  "key31": "5RKHut14WDdizTyyygDToXVtDJjKYwnTVAnR2XVDKdq3esGis51qvJwnkcVNgN6B8VwRXovHBN7dpaSc8PGkpaRe",
  "key32": "GVQ26v6weXoeCmpwsY6QPMmHmVDMBBzVZXHL8UnaNja3xHYvi8ziQNJhPirEnPd3z2oH8RfeebuEAUVz4trxG9w",
  "key33": "3xRHsJtiugvboVzqFzmtdSG2zTm8vHRQ8ex3MQReBnKuHN82j1dAAcRyF4CHTEYbdVZLh7vFqfNjCEZRLnZa8cnj",
  "key34": "2xpiisEPaRJ2jrZr3XtbBnPn3zUBj6MKeqMzWwdH9hvjGcfp513jpjed9SWzxRnpiZe1gHYKqSPjLzNhvr2j2Mnd",
  "key35": "49cYWAAUHvRQA56aCht75pLhT5Jz9NqXxAATJh76LtrZSULzB5JvEoEYvgzagZnnvPF8VbLBKeNjpv3FM2nvXNmx",
  "key36": "22Z1YBvT2BQEasVuR8JTtqKAVbQEsET2etkJfcEGbu1EuRUMNDiBAe9q3TnDT5f6tTi4Lz4FDyCoWmPzfF3yPo97",
  "key37": "Ni2cNTnQFDXQSo9jyDiyJmKJe1GqezPMWbR4Gwffz5mWXfF4CpXWjYWypstLrxdMFLj78AQDwftM3r6rYpkDUY6",
  "key38": "cmBQBRA57vbsiqHd9WqxDhn28Xn3aMBwcbTVAFFYjcxxwzVVNd1ygzmbtGVcZbV2J9CvzmLXu8F6G5Avpmn6cpY",
  "key39": "5ekXkVRZCcdWCh23g3N1Twh94uHNF2zZY4k4j9AZvufxNEVys4wQXFsVBzeKjSTX291zmhwGiDvEVcqkiJMgvcDY",
  "key40": "2PNdSiDKhxbd9CVgCJU5XLjyQZcn4aPpD9cBma23JTaKgcUYDgkRnJgxC6JB2y5t1VN9NvNff75jknPZEwxBCmvq",
  "key41": "9tc9SedLnUv4vZruzDpvFhAJVDSaqFBVcMt8WrFAZhyE9ktC6vKJfqiGsq132Ts7QDq4H1m4KDJKvGqy7GXmzCd",
  "key42": "xycg4LrMUJZ7e9qwewE2yqhpAWz8PXcNeJ2eNSBvnS4DPCjPCcCMUXMvQ5x5E3svJyJ6fsfsSLSnXdaZu52ZdKX",
  "key43": "52Q6e5Ro68mSJE8TYrSVyTEaj5EQsDTY5YrKmf5yKaWrbTsqBhpqCAaXorny52NpNWARgJamE5ydwoNFPCr19Q7v"
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
