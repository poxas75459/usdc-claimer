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
    "3MKuAfBojoD8rh9NttPqydW5jdJUXnq7VTygd3uVK3fdoPyK2NSHfaPeE5FVgQTx1MkHU91VbXBUAEm21ApJYKhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hz9HHz59SqeAm44zwshKnC1CvafYqKwH9uQ8jyZQiCVtxYBYrXAAjaczHJZZyS3xNyZyWkXFxLFVGaArYoML76w",
  "key1": "5k8KaT7CZpZ4uVciLDKHxRwtVNJhvAtXVxzJ3Zce6v6eYDcEMfcMrCXcamTBM65kFFzZhSxUVH12bXmvREzNAfYv",
  "key2": "2b9zKrazeKsHvPyxVEXRcnRmgsN8guwJVoQ2bfeWzJaM9CkEhwjp38n1r3jBcUxt2CjJRTidQmiuLzZPM1dDBXPE",
  "key3": "5BrmJoD2rTB7QwamPEpEDusph7K42Qp4gA5YUqADcMbyodQSqX2UJxiiU4tFySr1eVdxzxRL82y6jMZ7HGXStKQG",
  "key4": "2N6dgmHo86vnARRjG9K7Uypyyerz7SPZehUWe6JZGd7cxE84aDGjN13cBBmcutiYy1aRVwuscBzcPdWHA7RuRoXS",
  "key5": "5hCShJbjY7djDtAE9BrJ3mr3SvraQTetiBxzfbA3wMbxVsPAbJMMESyHmLiVuJHAMS27dJFPzCcs958R61o43beY",
  "key6": "2pzRFSHAPtvndQF3HBnZsTtg7CRZFM4wTPPxsYvfEjNahnhjajvywPMnWjYmoRppjd6xKpm1dJjXKoDWCnuu2s7f",
  "key7": "3PCNk5pZctgYo876DTerraL534dSH8AWHQdx9XEhRHVHhc3jhaxeUFoX7oin67kyPS8nbGTjJGwoffSSKSNSZcmv",
  "key8": "4ti18T33i5y5rnJH9Bv6An449CJzfoDYLqvgtdE4UQpUXQ3JqSuZfzFriLbuPwLdtSi4RZ7LAzxsZn7TPefqZ8mq",
  "key9": "21vgWekq6VudBJh4mvBXNzr6EH7dzVSt4LcszmHHgwxSgw5RNsTZj3LXyBwDSBd8vGApJusVMFDb21uxGwzsprN6",
  "key10": "wXCEJirUsSdL7Hiz2GNmjLBWLWpNBzvNrBLoAAZ34GH6FW5JDAi4cS9ZPezqb8FsGh9smav5xLSXhmnv9e5JtDR",
  "key11": "5R2MgpxveXfmFgdwPckFPsJAtmbLig6LsiqpdUVgabKxPk7UrVY3hmf3CHmc5MwrTpyN7vPjmRas6KDGzpLJuz77",
  "key12": "67FQA1qmx1yYebvkULTxLHeDqvwT5WEGcFExh8UhdDCEtZE9CwLxV3XXApro6b1xPUrkkd4emERnERf4fSSBW1hm",
  "key13": "3tTpvGcZkceMmETSCCfKFbYUMjG6wRrVgnuAd1HvirD9QirHkwKY1R8Pot2S5PnaJufAZGn2GLH1LMrC2HvrxmSd",
  "key14": "mvkqojW4Q6syXDbs9ZVRkBmwsEBpsY1KKotoCoXNbeyRfTvvTfkaa1WketGE1p85b8jUYGf7N8hTFHL4HztnbBj",
  "key15": "35ca1Ncdg3V6g8HRopmhfNYY3wRJW55hCr6V37rbWLraAZCjpfFLctJAWSDd376aKhGE31i7RkneQicuoqEWnY8f",
  "key16": "638RDLWJPBQ1Xs2wipThEStKjrzE9o8pZ12VuqJr3mtWW8dkiw8ikgaKhKeQsNMDAytXFXkaXsrzpWP7Grtc2kCK",
  "key17": "4tBVKq5fGL96rYi7XegGmQFBidooL9FEHrU72zbL5zk5XpkeDHtsQEDEjGP6tviEuPy3fTuLhXR2vzgtzG7YHofe",
  "key18": "ER4ZwMqpWw5qvUwYZK8sXVpqh2Uirg5hMufcbCJ7oCGZJYJNhHPaX6cN7gfc6FNs6pf6KChrYbGC8rjdUKXGjU6",
  "key19": "ZHDXXrXCkueZQovYkVPpGBEMV8uFxxC9M3arSsjncENzMk3jC5DbKVFR9QHF3vqGQfMCoXjkkLzBssnBdThmshq",
  "key20": "3Bznfosn6TkXL7WQbYUq1krCn5His66y6CEsb2SjDJJ757RiavXYAzjxR9hyfvU2nLyN23xSJmaGzKTGP45Mk63z",
  "key21": "SpRmFZoXBw1njM8JgQAxmPF9aSwwZexvYr9VivjkE9cC6BE1spac4Rs2g4a3auExUcmj4Nh4npCS2cKFGxJ9spU",
  "key22": "2QuywQw1F1JBp1fCoyAB49uap4DFKUSdF5iywhtTngk9UfQGfM4wEnnYpXRYodiH1oBZj2DSiuJtfDA5tfmJHK15",
  "key23": "2mnqUtpXxZv2qELAKWQXiCPg2YnTPBLshUPt4vsCUxhaQKxE9MBDs1VRhx3vzC41nWuGNwUr2JGsA4Jd1uB8j8Gs",
  "key24": "2QrpaTYtVYfLRtgwspvDBnMoLrryrFJKosJbCNQCzMCNVLaJ9o78aebuNuHn4jtc3xyezXnqQbbL2kyG5yvZMP4z",
  "key25": "57QKEFQnpyCeNeDVxfchHicwmaz2uNzGDCY2tTQhzwzgwG8iAMHGdiH48sHnxLLNfgBqXQbBjGchQ2MjjfV8u2tE",
  "key26": "4tFdoSQ2QJNWK4eUxMgUzpebU8J3eRkk2nzqLSrGAax9F7LpUdc5HP5MtKpXQiPY2SZB7qbFzKkmNzhtxJEpWggp",
  "key27": "5j5oG5VNQfUKp1dtW9KJLdJug7kTFeNwPFpxNLjRbnDN1XtZnGuojm1JgWvi88AmACL4PRn8oE91PMa5dzAgB8XC",
  "key28": "5fVjBaUzPEHcasYuYWue7CSPoD8VocRNqTxHVActatL4ZByu5pRNaWtc4YLjo6ke8rkJnVn3HtosEbRXZFCUVbr1",
  "key29": "48HYmWAXHtr31F1pnQySQQMVhVHVayrLPgynYSoXAW5inUPgQoGQ99SKdKemncY74kyq3qV7y5gvxuxKqFyp7HWN",
  "key30": "5896mTpWzd6mAxRVAFotgTw4NKpiqdKDA52y1W1R8jzPWQJTWytH2GadR4bLGg3pDzW6PPDcToVV57JFY8pDjxnE",
  "key31": "52kZAeYMgVwDkPHz8yDY1SkS84wiTHfdvHjhEEQpwmG4WKCwZ3z9u33vJvyJY1bRk8XLPKpRb4WXTHUAL1dJZcsi",
  "key32": "2ZHKAs1kvMtLGguRtATbwDEXarQUqZkNVD3TpqCWoP5UDznt79HmWAqzFNPVuQ8zEnDGtTgZDuyZvFAKSFsuK6F8",
  "key33": "HAAG9QRTKqaiGVWtWKikk9iSoMrUijhH1QbJSy8ZQ2Rv4sfHdj33XKsRqX3XwtguGA7jzyGeG56vEoLmfRUyU81",
  "key34": "2pxTzKfoH8mmEUx1BmrXoJzihGzDpQmSUJ4RCn5AjswqHuP7mt5dEUViBun3TpNqieA11ZHijuzLE12dXqfjKkNq",
  "key35": "2K9Nt3L1PfPiEhiuy6DhUc5WB86bgvLpPo8GQDLCpQonAiXSjATHVha6Hkfh7XD8jm2k3RFKwZNd9WDP1vKndR5A",
  "key36": "2bDkzkGUX7unjfZdNPhDRdG4KFiceevSCnc5BNZakoqyRRLxNWhwXdAyBn8XGUfb716RKzBSJWRr9ascgj5dSjbJ",
  "key37": "46YbbmJytgR7ya4jcMvAvfUT2r9XD3CLDTBbY4akcv2mwFx1kwyZ8f2G8crY1NUyURd3aH5fQE5WYrrzVZuGGbYs",
  "key38": "4274veGWvRDf8CLLmnoWMYEqcmJVTCQhcaJNTkjBgEwJ5P2z7YYdSM2HUKVVsAEzH7KgqVQdEMGL55y5Wu3BmrtL",
  "key39": "66wkVkKfArzkHUYXGS2GhNDmwr1NGMguUWkMBNKD3ekaF2htsyVaMKwfR5fXCTxL6ZjcAEEmPqJLeHHqeedRfAb5",
  "key40": "27He5bR6dVpVuYvz6UMiy7Rn3UNYPXbe8mMkzVvTSJQN7DmFa3MKeWFE6VGnrkj9GbJ6GxmrxNMKywBPXjXd7tmZ"
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
