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
    "3UWeodtxUzrG8XGdNA493D3Y6uMEcbyV7ypFZeqbUsb6nNvs9Cc3dFp8H1sWkfmB8jRsJnWyD67v6JEugWDaQabk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XVNmtdPJUFBKQYR5rkGneamu4R3R8Q64UpgGfa8fhUEVMrsm11jvr9mw891aLUM23ns5Q8LXdPSy7tebsuuD9d9",
  "key1": "5SnW4uezBCp34DmiJRZ5k3vBsR8BiJmJouMgRJxQ1nPbRvKfWahXpSv7C7SRXkedAbTk73T7hMpCq3WuR1KA9akr",
  "key2": "4bZeTf4pTeszKmm2wvrKQDo4SP1r6B7fLMWmYDLeksBMBEFjUhKJDNx1gj4PTKrPTHfkmM9UcZuCnBu5euRjEwib",
  "key3": "4cYh2PQotrguubwYaSs8uNGF8ECCWCLS9KFeGhdvvffbc7mtA6rpZjeZH26FwhkG8kss88QuCBhTX4KMvck36m3f",
  "key4": "5M1rZfA7iRWihUx5yZWP6B7cc4xCvoVTAGcGHub3WhS9XBbi3trSpCyEchNuaYkxg2f5hpJNZi2NZPYBj6KNyCxP",
  "key5": "2htQJ9UxDKmeie1TKRx2pszghMHnwhDLz3gMTi6kdnikcfTKPL9UjRrgwPsbixYZxNENNgqRAGchJx6z557uLm4m",
  "key6": "3kQJVMxV15oeCJS1E9UYuAUFmfphWELb7x2ufjKgxfd8xBdBvwpn39njpcZLa5LCUzCyDuXt6i1DTZr7KEkqPJwL",
  "key7": "56EeSzEnv8mP4LRaHNtNUYW7R2JrA5KSf5rhHckXo5eFrthSjCTEkDvjD3RAwvx7Ts51EcZskrBq8vdfTgoYDbuk",
  "key8": "iKp9UQULMBJmKa9yqKFUQiiS2ofm4DNCk7EE1ZA53dUoVvTL8aHWJHFuAe7cYybvAGdCV47b4zLrAqsY9FUuBim",
  "key9": "5f4QHFNAsyn6kWJzkeSM3sH9nhwgxTrtxbCZcNsxtTLGfMUgABSd9pKEu6KgGtEoFhsLEhMjquqNkUgKsureZ1zq",
  "key10": "zF2xhHZCFmg3WnLB4BfpTKfE83EbCV4nTe5qroft6ENTbAbk3h2c1ZXShqSg1GqMq8YqWRKG4H5CH1RdFYVbaF8",
  "key11": "4evYWS4UPPXUJgqVcxzhA6v7ZSmZzTXXduGP161bykgQUtcE9T5YTLTFUG3gj9jNwuHCW7Eqv9JeSsm2fH9ihCAB",
  "key12": "3Zw5kRcDepfcoDLpvpXq2GAanqemPeC11TadtszkgKcZD7R8tBTaaRJseXHg7dofLzZhczpFzXKmNNVKbFLn5N9g",
  "key13": "3cHLWvUbmKV5vMTsnNfZ9mHge3nPAbskvRyqtN46HQfSPALreXqjHW6HKcfPgsV49spV3TNZSg3JPhxUzJRrjCKL",
  "key14": "3HMwrrSgyrDDRgYCGvFsX23z5a1SPT1sQu1JG8jX7jzpRFZmgJC4HfHG3zdT2QsVxCCnQWjL1gVY8ZZMvyRdY2J9",
  "key15": "4ZFx69QwfzCYBnxHx7fFdsNTceUwQyBtMQ73uExhAHv3Zo1i9vus3f2ZBTM7hiQcTFt3Ecnhfze2Lhd5jsPhfuWh",
  "key16": "2jsprvkiFesLAZLYGuA6xxDMumxfevRcgnqCEArbCvyPFCgPaVrE9CRJm6cBFdHj2Svryckyqor9Yd5qDLgWaHAc",
  "key17": "41zJ4nd932NposmxDBNpRqJzGHCMsBmfqwnz73mByxU8dhx8Dx38qZvR74dS69UM9bApi9XtBphtnyPNNxEiqrs3",
  "key18": "3bJDR9KQ4JiLQjhNausisameMjdwLcWquVyywcazYyvtFtAQ1wpRTSYymdV9cxDVSout4LQfq18Exho8CTQUrxEM",
  "key19": "2arEDuvoGRSs9ywPd8aPMCWNqkmaABayVMj6JcCvGTSziDGgm2UfkEQzv3g1d3JW7TpUBAQxSM3Cs99D1kJsAp1P",
  "key20": "4bHgsWvm5GV38nDa4ikLMUYpSB7wviJxjfiV1c5if4RqEnq7uGonffFNtARNt25XnhdyTjZuoiVvbibP9WdSaWEQ",
  "key21": "8MH62k86VBVHRDxMRCg1pesrk4pQVQRihZczNBE617sLwzfrGMEiiaJPNhUyNBzzacRT8obGQHf1TDXrzybtB1a",
  "key22": "3Aibct9hGK2spLEx7kJtVwkYFQZyisVrQzHuYWfHrR1NxCvTT6UjZEDfP3MVhZwHqwTXNXQbw9abeKrFAuhD4JwH",
  "key23": "3JdNEwGhxnZtiLNBFVPpUiy4ehysfjMHLHawLXzMxfDwvyKGUPfYigS2FwXfoQkdBctyM68HGW6qbcDG5T3z8ZUk",
  "key24": "4WyzXrzfwgqzbc3bh7QngpNfPEyABbA6Gt8QyZarp93wgoTvKB629so6DP7roeYRJX17nYVzmTyYHNyCPpiNiE8b",
  "key25": "4PEzU6wNcw15NjtZnRT2xi8FQ9EBS9qBV9EipzQV2NPWHChpycCyuns7sfF54A5bbsuCdM7TkPEHw39eYiyUQXYZ",
  "key26": "67gADbS3dvv5uTmC6F1fKL3iE3ZtsgKkmBCHZzYCZtk6cacRyJgC5f7kSCJuyP3N83pV9c3Kt9qGuJbp6LtcjRHU",
  "key27": "4DLipDFpJtsT63geBV5UxncQV9XDxwQ6q8YYK4QqJsURRmEqrgKBmd5xVaRACkWCdjBnWeMtTdb4hFgaq8zfdBok",
  "key28": "mZNKThHPgeaQTB5zBtG68hmy2biTAYwSgcZtttnwqjYcettZnJudcvK4E75pAqQjY5AuaQ6d6nUkVHLahHFBS6s",
  "key29": "2xiFHdQ9eZXWHsG2rAE5qeMYRzkrfLVeTW8DzpU5mZfc4p6vJUSLjVkjLGpJS4uCgxjYduVToiBFPKWsNeg8buG",
  "key30": "2aLUXYEHLi2iDMySB2bF9tsnCRYBv27s8F1jdxfxgvzhEEeR56HGFR3ZCTNRwGoxrdLe746KNMKRPsqSRGWXcXRP",
  "key31": "4pRSF18ium5AmLBRVe8wnj5zCLDzs7kAZxNmjSfg9QWjubJwcbMgXQ1uwz8H1Sb2TK3TFoYgpN8YgLQxfsEVuCde",
  "key32": "5LF6QBCh5vvqS3Mem1rBmLncT9DL7pWMtrEr3YSXCSMRNxxriNZKQp8MbtBWhw6t6bV3JDoxy7v2P6AgiFvG9p4R",
  "key33": "3yXf39j2xbzqf4D7A13GZZhkYvXrn4d2RYHAzygekHoNS14NvixPfErnPPeqKyZGDvdkHL4MQLxDHky3NpxgstcP",
  "key34": "2QyWixWCMBPsMXAnopiQ7W4Y3Z1fWxFhhckQD1f5kh7EFozhafc6LM9kxyHn5yXFuxhcrKjJ6PS65ZbdYLokSAhB",
  "key35": "261PugmAQWXQnYfVUhRsBz5LVuw3snsAozqoAbBySvoXn8JC8tQ6FHJdRfkehXYKygzvVePMMx5LPJJr6ZU78XvZ"
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
