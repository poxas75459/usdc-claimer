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
    "4kdeUMftkVBe1nRN1niw6F7xvpTCr2CmoMT4iLvFPpPXHtc8o17GNaTTzZXqxR1hMA2aJcnxHj35oBa3ryPwRfST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xccw67zuKNQuiXFF68jXnBERppnQ68gE5A3bJesUJbRmWs6Mgx8itMhYggay6ZaEojtiohfZXV8iWdxm4tqsCLX",
  "key1": "4fxnh83zyTDRRkrFgTRc42q5vxoZmJg6c2cELMRbAvtqXcm6sNJVB7jdW9FH44Zc6p3B7q3qbnC3pYLvrzVCBBPW",
  "key2": "2qsCea3SpJkzLRfa6sXCFUDesCagGjJ7GGcAShEKxCH3He3kt5aa6LSRRWxe6ZvLJKKV25rEPttSN3DZAymGn3Rn",
  "key3": "34imVRqTh5AkQrbav3Q72kLVdiP2F5bTpLV64UzGsbyLYsecDMrDtX2KA7w8NGwkGhN4MH3sF2oWMnJnMQ5t363o",
  "key4": "4Jnm5rAks4nZhnxwjyyb38bU92HmRDvSES4goNcGh7h33rFKcL5VXCi7XuGtaSkVKv9yXpwmNXUWnudGp2NzV66v",
  "key5": "4MMmMU81BcjuSeXoudyvYXs4jofv6RR6cEQQ3mBZX9zLENMjmpmpzatTg4nAVxpq1gFiqmdZjNi8qZF3U1DWE3Mn",
  "key6": "5CV7p3WJNNmvs5TN6ADduiVSVKVDYd52fEFKdqQ34m31x5naPEjXp6dYEcFLgt1fPeHY9575FJwpB9gCtCuddF25",
  "key7": "5jbnF79XfmYtiD1Rd63foeKQ6DVfMq4hCHz9rkfqALdi9uschb7UVtA7kB3PLxsSnCyeV7iwqf8WpDkvDqcS38EC",
  "key8": "e1FTn7eHdFDk9haVcpsputiKXtxVGYQqpFt2qfiM1MFf7xDTvuqsj3P8nQ6SErVyFju1roKe3k7ezRTKbzcGAQr",
  "key9": "4yfykmyoyGTSXq5GX5317nciwMsUzjwCJsxeeWq2xW41oJ6uEwNB1MxCzoVk7LEzgMzPbK5dbFcRo2Cmw1qcAu6S",
  "key10": "4LQvtw4QrR1RNrghfs5rydoLkvwsWPBKudQEYhesMiWVfSpuhEmzV5NEYsVp6Zak5d1QTxt5NjHYh2f81yti68wS",
  "key11": "3VTVBbAQL8CzGW2fGpWy5huoBZH2Bj3Y8VcViQyZ8j3uR8bzaGsXGpxZygrPgbj6k44pmJCC7pJS1GK2NecggEum",
  "key12": "52bpCjS1cT2MbrpeM9erTXXCJPDFvCNMmRxnYiaWzR7pmv2Lgs6fAyRMT6LqKVmhmjLrr3YEemL2PhXYJstVekPf",
  "key13": "2QuEbxzATwDzS3nq4CXJ8oDszdkHAta4ek5kqF526HatWia7o5HpMHmbsffzb6Q6TU6MyktN3XSc3RrNAAbZF2bA",
  "key14": "3ojANnUvH1zniHNmhsRJPDEgdzzznovJaZqkupbZ5Gh4ZRjmdJySk5d6TZUHeKXuzoE1eAtXt29eHDXnGozCqH9M",
  "key15": "5znYkx7kQiQ99iKWvNtKQELSdmvoWkMZU9tB9pqoSqzaeEcX5D1GUKdNm62R6P9YDGH77AxQ5Tq2xjrfZEyYA1eB",
  "key16": "5zrcDURTKVfWV1tj1MyCmES1fhz1HRvwebJTzfhjz7WPZuMjWM6aAWv4Gj4Y5b7qNhb455apCiWJa2uPLERLr6vk",
  "key17": "4W5xPgnj4X7XJLGUYptRZn5xT8Ys4fTQH6mjZhisYMvSfvW5V97fa1zHEtRjD544Qm5Jrd6NKCg2zQJy66KFUUED",
  "key18": "5wR2gE58T4pzFxuHCZ6jw3YCdE2t8E7t57aXh6tTHRcU2ZTs1SvcC4E3vxZARyqfcnHWzxRiU2H346hVB7pRSFxN",
  "key19": "2WPChgZSVCJTBRqVUX1GNkAR7gpffV8LZfNnLB1MZNrX3QgbX39qE6EPiPaDCSWS2VsMfHcZPAQa2Gm8VZ8g3rU",
  "key20": "3FdwrFCBMCXACp7anT5vZ4LP7gP9sFG159GdSD59ZW8jG3Y1WwFUPoyi2LzrNS78WbPQEaPvfyHz7V5nVfm3VbTx",
  "key21": "2pbCBbyYwvaSya82opJXB7WEi8Nx74AKjRduiZAArBPzQTPQqPCvQR3bacFE7pxfNA5Niu8G96r6Xw3via5stjBu",
  "key22": "3eZMUc7aDDmkm7RdqiccqdnZ7KaKW3bxpPTQ8n3MgcMWtRDoHr6UxWVKZFMTE98mkYJrp9Q88kfeBxaPyZFVLQq1",
  "key23": "67KKvCRy16Hn1h4bFmpgWJZgx5DfXg6yRGxaygZfxAJFkJd35riBmLJWQnuKwvwtwX7buK9yvbAMVt8HBSZu7fo",
  "key24": "5ZtzDm8nFFRWSsA2bXaHPidsRRea7nWDnyUbmTCGUhCJFAhXijs5Wp5NAUZRq8QAtLvAFhq7vpp13jLdDVuJFxNB",
  "key25": "62GSf9t7wk29L7ufF1ha89yrTyc4tTiG9GvVxcwB4hHqW8QH5fhL8EC23D7GCPrkQwKKiggGskfWH9MzyWTLwPsU",
  "key26": "5ZNhivocbtnJkCCFiDaBViYcvxWLpdf8ySWx98BeNqiEjEochFNz6YawB77qYxJ3Eyx68x8natWx1DJSrFwJhwM",
  "key27": "DWoSpVdrtV9b5A7oJYdESpfiM4XFanGY9oam6GXozwRZdgsmcpDeT2emm5mgbJBiWkt6AxYzDvFzZRrdNAb8H7S",
  "key28": "2dvR5DX1YdEcyPNqmJruFxVbQ3VcE8hpnTHYGoRSFREL1J9Bcr8LNZQNP6woBTYvzJqeVEV2nmNsy71iGrw4dk12",
  "key29": "63WYbXVXNePjhD8hpvUMsFk46ercGcSQSstt3zUi3g737f9eXLEMap1ghgFydLyH4zPiUFkwLL2uatQTFmFBGAfE",
  "key30": "oxGrHqwqgN9RK3GXwGZM1mZs2ZRvVFQHRBFjQvxHHRLNHsEHUsxpz2YmLVafvVhpsVaRQ8Cx7pEZSymRu3XXq8J",
  "key31": "3Vi4jxRyrP4f9YBFRdWe7xnCMYcgUPThNVnwby742qQDs73BjfxArr1vp2eFXukTN8MdyAX6BXgAehsB5hkHXacf",
  "key32": "4h4CGCbXbbXyUhanGru7qxFH2uDk5DYjYBLeZK5YvQpny3DEs3hUabZfuHiWyWmCp1XXDRtedhvBNiyr2bUm4EX5",
  "key33": "3Kjf5LQpK7UCEEa2sDQY7V9qRaQkDSh2fccNpbqTVRepZggj5sRMFMyeB7W4SuxABQohwTmhRJY3DCPyxTHBYP7c"
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
