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
    "3dSdcjbwRDN7YKyr9DTwXqwWTmPEhay7pULd33YtLqWXt9z15tibLSWGHnCvKfzmFzCnZRuXcwGcKZjyKvkKuKCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uom4aTbQ4yJQTCyqgWNRuupw23BK92r1z1o5dbV1PNgEabLRLmSiykQUunN5SP4dd3bqsxHmZKrAKSwcPCKTXPS",
  "key1": "4FQ3oBXiJmjMs4PmoCc1pd6r9gNEzmTzrc6g3Lmyas9ie5gCPeqfwa9ugtDG5aLkmtSB15sbzXa4rQEJ3wn3eiXb",
  "key2": "34hyig4mK7U7yMFkoA4PqHyjkyiGheqg9Qxj557CoqQdug9KwGWRKcMpQ9ua9K7BS2FGyLeNeqbiZQtXWCmz3ZEC",
  "key3": "4dUWgngP8KcqcbCSkeswwXu2GZc8jH3cof8pLM21QmKjXhN8Mx1kgwTnC9wQoGKsS5EcuaVw5z3upiWLwLybKzUc",
  "key4": "2qoE7qr8HDaxLWA8HNLu2P2Q2QLu4UPotLdmFnkREvpdhA3m94ATVEssoyvwmp8dxSFr11h18syBU7JwJbwe8K9i",
  "key5": "i5xiofPm1bA6i3bQeKNjNrgXCvoFMifQchSHcSmhwwwiwTdXAu7Ksbei786uLhKRXHDgA7rESY81fxyKKtauJ53",
  "key6": "45gkHQf9D6fFzYVEDwyAZjYjTsVin83ck2t22vJLtTaSPfc7ZPhpTt4cGb1kjwMRz6Mzf3jpByZECXfTAUJ5dyen",
  "key7": "3SsinCpsMx3zVtYSoyvhaCMSubtvdEiFZp4eEQuSSaZbnTGfywTZVJKNASsuY87CxVD92Xv274KGPEbGt5DgfGiH",
  "key8": "24MNhRZZWTrXntzTwr9svq4eipqDnKedpRjX7vRi23mKHSchKWNBtbYnYqtdyExqkCw8mNmdBKQgTgaVbeDayaCH",
  "key9": "3tyjhS93aPW9rxR5LDXRHV9kyK6b5UKH8s8nHGHrDqw6Z7cTc47zY4phi9gumAn21h3a5dXQah43w1E4N1qwZJgH",
  "key10": "5VSZvufWiof7Hv65s1atFXr3NzBfXKrpQF2m5k7KvkUUzZnBi9ecTu8voCUoV3Rt8xoxd8NVw1AjFpJsPQ17Fpe9",
  "key11": "28NrBPnu55Z4eBNSYsMceuQfXU8y24LnDKQoHcQ3nw7duWsfPRE2SU9vkksbZ2PXpwCVn6UV9g7vTsgNiv4xPj5S",
  "key12": "3aotuXJk9FbkGxzksqiT8QfMGiuwM6vmAtqGC87tYdQNdxoetrDhBpLbUow56ooBA5L92YZc2BN3pWx4dv6xvZye",
  "key13": "5zbnEyunDojJ6nqbdaVyoJdAA9Q6gtHfQqTWyYm8vBGWbm369hEhQJ39fZ5pZ89FjTZjVcCZRTWCGYvujK9nyiTt",
  "key14": "62pLLHV4hKcdvUCcQ7fxK35UnuTK7GWWhnHtSgbR7wFWyPk7qqHLvcj2eq2rpMPWE7pp978P7d3KLtz9k8HUPJZ1",
  "key15": "328rmQaUeowVhhUdZ262suAM9SUMFpV76hcxc1vThUjyKxcV8bikCRPwqv16dWqMGJcqJ6ksqqxKk4mPBKJqA4LA",
  "key16": "4muSyqdfiKs2H17GkAj89GbbxyJQhLrAvryYdtB1Ah2VjRLzjm5hwqJHeECCzEjDo9y2osmPLsn79cHBYXzJAKpq",
  "key17": "3WNS8CqzpPMYfi5CECDbr4AWLZoq6AZxHFm5h4t7S4FZgDB5CVVtoMpBqLH4fPiKSs4YjuQaP1iWAvhhQT1ChURp",
  "key18": "3Fmq3mDNSWna1trYx3utAoCFAEnRsK8x8vh7MvtqjznoC4oXBcL8jNMvmvAxuVvoz8oczKWu1uZrKnZx649ZJaAW",
  "key19": "4YowUoBHdSVuGx5z5m4Do3P5WLTcapog5wEXSjJaDAxm7kqLY2gJBgm75NLaY8hcxUYkEZrRjkGd56F7FFKBczSN",
  "key20": "2VQSYLEx3y2AhSGk6V8AMxLZpZuFXjZmLumZXSWrWdqho2wH7dTSqzNDQfmbFn8SAV81vdnNuF7j9SQshxKBCTyX",
  "key21": "4RZzcRit3QzcA5QjHZk1PUZ59oWjvE5z9RgSm91Fn4pefAq4QvpqmHCmY2iBtRtASCK5UoKyYcFYnwv3Nmb8WzQq",
  "key22": "3Dqn3baAortZPZuf3B4tFTc3AvDzPiRmKhi5SjyB83kRX2AVfYNKjbYWjzsoDdGCGibctVnmKFQi6RPES6f6EEyk",
  "key23": "Mf24BgvqC8cq6YFuiGKkJSw5CxTKxCwJYzJMfPceujFMF8FZW6aXSrmSLB9rUGXwfzELDr6s9EyzRwEQXZ6z5Jh",
  "key24": "4dCee94F8scrYZYejmSNAWMY3o6WMsPrudtQzL71bysqKH7dvnj1oHq61bTuxLLUUVLyUGWyKUCChrqJCR7s8HFZ",
  "key25": "649mmBMMwd1RD7iaqrs1PHGWe9FaKVZFciunf7RTjEXfHvqzdGtfAankwDUEdMwf7TX3h1ugzX45WuLSDPJXdHnC",
  "key26": "5Kig2z4x77S5RchjnU6XCTRayHDF1q87ugRsqa8eCjvu99pdrt6eULHoau4kLKdhMoWYS5wj4K49SipWJVLeNNhm",
  "key27": "4GahxDHdyozWDP4kGaM2crzAMNzBAdAMEe2Ljh8k3Htb8DM61wyoCuudJccM4JfVXJqrYuVJMZuNAqoPmsf1Arwz",
  "key28": "4gFPF8vH5hqjBJ8DxwohcZqoQ1dPW9FvPgwezk69hchJscv9if1bomSPUzKCxdnWsZcGhYjZKCKv9hdG9XZgbMXm",
  "key29": "T1x6rzrcjn8BH5cyaS4KN9rWQULuydAaESbvw3QWDi3VtF9pWDD7o8Gps79G4i8xCvJL4GZh7rZdETu9F9DK5LY",
  "key30": "5bH1W2zn9D8Qn379ENFFxvkTTtueLMcda34Dj2UYjmfHJ9ZLQ6fWtvPnqzR3kxBjBJvJR99EVTt19tkCX1Hr8iVk",
  "key31": "5k5gJs7cnSuqetHwaQUmBNyDPCcaCZdhtx7AAYLWWiHqGww6dU9nAqiMBz2kebMZNUHiE6WEeNXqwiB6ffVHHRkQ",
  "key32": "5XGc66xPAAhfRNUFaKHsbeCBBStyXbJrWWJ56vpU4HjWdCkQdRt77NSh6KJYAMRAgmoiRLRbsRQ7K3zvrG52HT9R",
  "key33": "u75ZkM2iM7tX1A8VVBbFWJGQGsMewpbX61jije4gGLg9FBmnnDffAZefnSDvy9jFB6wx3DcJevP2Rb3h2LWwZNG",
  "key34": "2oTh8r9U2nAAhNQXvNMHFu6sNkdUJBYogBjGup95qECKrRpCwNTUy1mpa7fG3hpYDykJ913NuVLp33nU7CB4oFU5",
  "key35": "P7KEfmVNZQzemdpfndBiFM8fcd1RxYTGDyXuRSJt5bDmNTbBfX1gNoTfvGi37SgkCADV464ndFSkLGKxVACojmz",
  "key36": "p4WVfym8dzQJn5QBZxofyTS3P4t94Y5tLu3aFVtx8fYjw8ZuEBkVKHi9xKpW6WaFDKevV2ZuzHGErFzJ6VHu3Ci",
  "key37": "52GVSApCFCVpUjo6bFSjU1D9psb3NiVLoZtLAYN2d6BtwCmJkCCz7BSvhHVVeeVn8tUTJyLr49xwzhqJ2maUBNS1",
  "key38": "5HvJWFRKZhaktedRXpRJM1Q21gdVKRdDCh5tn5qPXk5YPy4vV47VzeHz4Ugdc6RpanU7vaNm879uAESk6Ng2obZh",
  "key39": "5P64Lpum3GjknfHtf9wJ7pJgY3cB42gLe8U8YP5DPqXYuUqfd7pkTEim12Y3Fg7sow1HPvmihtegWdrshXt8nQTj",
  "key40": "3tQoP754jEWMwiFrFLcWTedCiFRUvgFKKxPKedtadTdj5s7vRLcznScgFGJgRC3LGHf3zzCbBVDPQGnnr9B4rt21",
  "key41": "bDM4dzZ36rksKcmCFRSHyM9HcU8JtrMNy7ckiBpg7xzKRAsETzdD1QDE87ur7PWKdcVGTuiRmamuM89n58Lo8zs",
  "key42": "59YuUi9DbQaWQh2kRqcV82vTUtgT39EgYXNz5SbrQrV1X2LBDnmSnmatSwLfQhipGRUAdVKiMCac2bDDduCd1bpQ",
  "key43": "4YmKhdGCPaxogTFjFUcWULFucXSLD1scU8BYeqkHgWDtHNBVP2wcEDYDF2ciMU1jcEyNvp2oKrGc1YKWsjaaFGpi",
  "key44": "37tpAycuuAVjjUhPrLa8jm79fDfHavAkykHnzg4QYLETpCJDQdUFPQiJzGL2KfcywT9e7vTw7dk6VeS87JwDD8g1",
  "key45": "D5F9UAUobaWVB5fR5qeFmWeNyk2fv5Mz5DgKZCDg7MXR4UMWZVJPSJjhzusfMxZuZeLixBydu2GsrjALmwjEZAF",
  "key46": "58PmGSdFNtESAZS1VL6eektpL96HXEzB5BiPszD8pVy4MUe4E8ADkg8Sw4Dz9PkFtf8XypKkBZwL78BhTc5qBoLW",
  "key47": "65h6jFNsMiFPkiKKbUW2uxe4HfGffLSRjQQEG8WkooGwsSJ2ncHVhXowzeBTQPctMtoTCwLDZU5ttPGRg78rB9YJ",
  "key48": "2skc8HN7ayNhBRUrafDFCASzEPYyWDum5cvHHePbetcprKZVmdxWkoNFfkzimJHUHe6Z9tmK7pn8d5xtstai2zF9",
  "key49": "37Th1xJUu5afxFKFY9v1xNbEmP9rCyewyuZ8qZrv859fDCRaVeH5guYF6MokRWZZNqnX9ztEMii1R27SXpMd5ona"
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
