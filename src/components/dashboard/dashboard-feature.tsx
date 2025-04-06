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
    "Pwu1dqvm5mCNkmFtGXxqhV9ScRdnAwsNx8TNAwnc91LT3sSiv6Y2vdr4eGpeQ6KsjNqZBoAEHaUVvhuNGTBjCoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u9YbCCZD5xtgXhq7KVjX99NV7EbHKRcykSeg4auAJBFymMMZmxNM53dx42f71SWpwTg2f31MBgYK3ZW84Nnnnw7",
  "key1": "4wAr1GXZHdSqFM5meJu3igod7pi2zZyxbKepcm23K4BEV5aQV8C6Z7MRkWtJNHBebEHj2ddA87rPEMFKJqrRhefj",
  "key2": "2xFUooQNXMmUyEbU611dZEzTmNmqtcYPauS14Ln9DaV13aHkrJFMSf6BHHc4KYcqAJTUhxw95TXTbiE2fCFXYm5K",
  "key3": "3TYdMfrwbG1nUq9vxruE2d5dzbwErC6ws5BQY2UQT1c2DwgWmtiPcEMEPUKRZ3aDYyVnXSfgdETD2iAaTeTCJiiL",
  "key4": "57LkBwP6gsfE32uQGGdKSk5fZHXfhn6kCnXk34QM4WGbFVaoxM5M2zyBRLmqNtUZfTEJjVnuZybh2j8B2kz48khA",
  "key5": "2XWSMxYgZPwf6sS1EdXAbS2526qSLuxSrp7ifhnSYNHQog2djsBYharJkZQjQGCe3qyoDcJ72EUV8t4ub8hp5pz",
  "key6": "D7griNtRJUzX7a6m2kg4966h8emgCMjYxkAekmBTNk6uWAvptywCVT5vJ6UJuwmRYbANenYayGEdSYN6p6j51aW",
  "key7": "6299Kas7XSSxBbZnGKpKyLDCkqiKS46TBZgoB74B2H82QLgqxBSNhvpmGgj7yG5ozTXAvjdRAE4PU7hGkT7yu5qh",
  "key8": "28gtvMaofWqFdVwvKqmQKtgNd4h7tqQRKWqYBbg4DgKtDnvgxERTiCjJptxNvbuM2ESkMb6AmsB9noe9csynbjuK",
  "key9": "5fjMsgvwkhVmJ6t4bRTynsdvYa1eKrJpZoxXckxsD11P9mE4JBNmPAR9zAc1uGWyjk9m7EFQsbuuHbvRs25iNbYX",
  "key10": "Dtsh3dPQWB2axipea7svDDqgiaTn9J9ZzFxhNST6T2mUGzs3fYESc4QyXAx4evDwxcu4jbVrB9L5WZwzumTXVPL",
  "key11": "3KKdhdKCez1fe7dnuk7UACxxts1KQhKWHnhJ9Pdocmpkr4dAohd6N4YEbbtH9b9Vc25GkqSDvxurs8awqcu25bXA",
  "key12": "2J71RkbwtHADwmG6DcmaoyQ2wmwqgPqFzqbCkyafWzuTQ8iCbbBFNSUDij6KeQBe65yT4TAKQ6wskfp1qxCerF9D",
  "key13": "SdP4wgV8zueYdaDzoWiefdFVvkV6Pzf2kEYAQArR6hoN2UyeQXbRxA7hcxpkvDPMnPgrTvfvjyjbuWaED4Vm5Fy",
  "key14": "2EX62ZTqPRBcbTNfmPx3pkCdMdRMDsL7CRBL53FTdrZcFXUcrqQvWVQowSVHTCn996xQxjPkiose38tftaHfwJ8E",
  "key15": "3vGhnaEbGZxQXtjE24HzuKn1ZH6gVBsYwCPXscAv7SnAF3299J5tbbtfXqx2zt9gtmNWbdinTCjH2tKApRcJ2o2F",
  "key16": "tktc23ikHrd1Ae9CdCMrgppXhi4TKHMAcw7zVz7S175WC8bi2zZzfJBoEoALnrgPfVUzeNQFUxf9CiCK65YQNsq",
  "key17": "4tWANrpkzXt5eyvd4uaXdG74obxkjEN8Z5StKiYPuHQXgEDArk8SEsNHo25b7YkxczxdeSMzUAaHSXhAweoj2Fpx",
  "key18": "3WedSAehBV2YPjusbDzZdMKup5jG1izyWhSr8kqK3H9ajFr6sbCFu67qjm98PBJkqssj3fYxUS8Zr36Z2tbnjGBy",
  "key19": "2jMsG2iDntZZWTTutD6dahyh8Jonu9eiEUfFnrF9NhJRgxTiSnqVbWaLd35r3rYF8ApbGvux9uiyD3VrCLtsz5Pi",
  "key20": "5fgaeGTrRCkEpHaNd81J2UotXtuCXL6m6myb6NoBWu8SBW9W6vebtzAboFcrjeCDzS3srdUQHYjEBo5Fu4aZXUfh",
  "key21": "5YUTjtn5FGHE4EbDCZwZAUmCUmvCwFesjs1BPSiTtzREZFASKuxuKymZPRZKv3QjDvUZqmov7wnRTPyejYvQerUb",
  "key22": "4mFnxdzMxNp3WyjEmTkjmakBVLTt7hfEKB2gm2q9NdSBf9fmNroZiR6JGxC8un65D9yrhNCkzcHvZKAiHgCN94Yx",
  "key23": "3ryr5nzp3ybi8a79amMLaKJ2qC89Qi1EeFYfgk2562NpS4yFTtogG8kRAVjemDpZ8WyVpVGPUZDoJVFP3RtEi7J2",
  "key24": "3XknL6m7nV6MMcpcuh1ARx6zLBNjtFvhe1gMN3N8xR6QKCxtByn4U2AhGW6UcNFG5WWagM7zbbxNsFYxBmSa8edW",
  "key25": "2arjcvBmJnyZojrXJXWPeG6E4H7a9S3GmgNpWuzafrBZrjQPxLmnQLSCTNWg7UxmasX2nKA2cYf9P9StyyTs5eVc",
  "key26": "2KpSUL9vc29Gu7WK6RPGa7gkZmsyQefDjmUYAxtmVDPhJKqeL8gGPUkmnE2WuDAHtoX2HYwTjz2GVj5REfRjxPXv",
  "key27": "2nDBniL81nfk6zFWF5kxonyKB3HR1fvGUpyszWVABXgDMCioLFttoQ7U5Bury1T6MM2WDrpAZ1mtE17H9jaodbfD",
  "key28": "2sVA2zXPXBAtmtLMnRzGSGKfmTtN2QpH19NECqaxVzBR1QwmvZSmGcfZ9dc2GTUr7QXCPELvWg445cATtU8Ysu9v",
  "key29": "jqCqfyCjTREKsKQi7L39X9Buoud8Q2EcdJPavpHgaHrPSHw6ymv1BNBQYbqRorwV6QxsMzqhXmdXd6HYMtZ3Bxt",
  "key30": "cNPfdVHTSdAViUP6y9Q7dMFhavYGDjv69mJ75f4kdYLEWt8aQJHjc5VWPFQ1BtzUx2sE5ZGtVgEdKrQchPP2zeJ",
  "key31": "3RsKs85dmuEoNBfaXd34NJwByRNARhkJrDRiEzE1ksWFWBq4YWjBGm6wkcF3Eo6NwptLCaBsEZGkmtcAKQNFyNEX",
  "key32": "44QEfMtKkw7bNszDcwUHruyML2h6C255LRcis41v9y5v6Fq12wYa9f7ATiYKbrWr8RSQ9yFVJsgbrsKU6LfAt7cF",
  "key33": "58ZrirxqXnCYEHZGQhs1yTP5jTP1gfhXV8mw2VcZ19zHWmYD3KTcYUqMKXGY6ffQXxRStzPJezh7rwkvpRxvEn8r",
  "key34": "4CMjTqJ4wydkV5mKoM8K9JpuWKp2L8vYNBssdZRsFLZJe6ZRK55Bu2KzXz4nkDwo3wTXoaGoqMXUFdPZaLqrcrEZ",
  "key35": "mrsm1MuxfePj86TAAPG5vyqsAKnVZDteLCYQBuHnyviTFRHekVkBYcxq1t74KVjH32cJwAYSQyuzxFpM4BodGZg",
  "key36": "4npwSRMFooK2AfanVAx4ZCGCxiyY9nQYTHxSeKhXaaKr9Zzo6WBbFm8DA8rYPENQRHYBDtKg6vcRLnrLLh2iHAHx",
  "key37": "5SmMfco6TfY9ky6ffw2n2ntdh4Y2BcMYGbyo82dEh1RgbhtPnzDQb7Kg7HnSLeAjzj9fgAia6a59eLcDMSbRrdmZ",
  "key38": "ATd22e1CayVD2bAFnquBePQBJCZ6aswXwE85BSPJf4dpCEVdE9NKdBmSLfbWGdFoTTAjnR5ovw8UbvoUDRPqGrC",
  "key39": "4MLq1kyBMMch2u4e4vqg1HFefKDFQPZL8GqpFN1yL3wBh3L1YMm9UGpcF6agXVTJiJYWa4acPyqtpd8tnAvK2LPJ",
  "key40": "o6JwnFAjmr8THTMK5xeUJzDihM2CP3UrvYLexRHrMdQKuyUPy1A6cppCuaprXUrEvtycqp7NGBZsM6daUo2z5ju",
  "key41": "2RxMRoqJx1SccsDD3s3nrKjSFtRNAmhQ6mYECVhqDGmvmAob87TJRwdbefzE5Njb5YuWcUVoEE4JT86jzMEpf8zL"
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
