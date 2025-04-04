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
    "41bRMN2tJ4ppdqjMuxPRDL2oWMpXoj6T5D1pgRgRreb69XW7n8sEKW5uNvgPAiY6TuKt2QWBqoeokEFWTqfqstvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AEZNzbLPF3aaozv1YMYtpqoEbDE4y6rxuGNLBZzxnQgbwEL2qWRaMAHFGuoAE9tf46aSRDGZWAQbmL3pvFyKFUv",
  "key1": "2x34JZbfPVQSC4HjJAVsZ3RHvh8YkV12AwUMrDNb2jP7TkDTuYNwuvzYs7GdLHfzGyRMaPWBy2i9YRYk5LVxhXc2",
  "key2": "gTdoUVxtJcD4PMo2taqY7m4zsHMpi2eMtHvzAKHtrU1VY4KrkFDTxRLXympxPf4pyf6ACEKVW2v9vbYPPBKQZCh",
  "key3": "4JCuyh53G6uC3cZWM5qEby3SyHUinHiesBXykkzQ1VMsArQQa9iS5TJBAeTDGiYWMvinf4QCTqSpCcvSjyyiALnv",
  "key4": "3m2eTsg6vCUtCA3qvFeHLR23F5g9iByDxFPNhB3nyrJrj6kka4XsBSqp22HmumkDNu6iibnjNfTQdR9KWAvMg7SV",
  "key5": "63NqAc9WJ2wWXAQY8r8pQvdJMi5PAy46ufLsntUsNnmwUMCv2QBr9uhaNSJkDtfhLew86vXtVqDJ2pu3q3rpK1VZ",
  "key6": "5qTrMxz2Y3NexEm4o9VyyLDehDTF5uzrRkZ5uEc3NYACEjbqoMNpDABrHt4gwxjGr5LUHBSy3SPYcAgFoGYJFxMh",
  "key7": "3hpWAfzfqpdALwkRZt6wUCRYCa2jLeDmv8bVDwFibB6gXy6YuxzuXzZfWq2LRwL5rTqddVcWhNHKWmPCuveQAqYH",
  "key8": "5Au8orWgZ6wtpMNPDTUiuFff85pUkqNBUha6G7bx2ahyz6iHsYAzDUA5BWAjv2HPWhpDuujXmCzZpLS3HQoRmKDK",
  "key9": "31cVefJqsERr13APfj9k6AVwVZovnpmjg55vu2uN9zkFEajYEaM6GAPLSPhe3ATTbGDMyB69AhYBZ7UeTgoftGGA",
  "key10": "4s1CQWSGavbhycCj2VmBmog3cSxqyGfADVF9qto7beR7Y4S6xiA8tL3UUAKV7XRiMygqu5TanGWaRiCRfMUwsft2",
  "key11": "2F1Y4weQsqX4TrU5qidWgnPmFegVRggE7JNNKGFugyLvH7ZVvksMxJt7nkJKufSfQauQKhyxxYPBFqdqoVqcPwQw",
  "key12": "5HTEieX3dHSvbid49yBtyDViRqTJHxr8uXF4JnczuUPJfuyXrSp66voEes79sx1LAhBPBzMT5HLTZmY62qQYVbPP",
  "key13": "55JWa29vjAXZ13eQTd4k83yBUVrhfV1mSL8cQypuvrRW768cjudgEiqXES2BtYHCqMG4EEKkdJJdGyzHwykZE2iy",
  "key14": "4CHVTYz3qxr3aYQ2d4gnWHDpr4HoWy7hhii1Uvz19KtHfHMcTXD4HwF1yEyHDjoU6QTkVThmBz1rLWF6rSr4JPW8",
  "key15": "GQywtYtnLuqfopbNSeEdM4nynEGQD8uWEDF9mQ5L8dpkkyPq7i37ZFhqaTPVCSkzpWywHWbju79DgW5w6mr4Xqr",
  "key16": "511pjtWXZMrUoJydRYQqBSjAct7HyaQUW3ByUWDBaQ6bzxLRurHBupx83gRk4RCW9soYeeUJeHBG7Xqan115AQN2",
  "key17": "5jd674tADoqpV8FRnpvUPnSDqFBM7yMQwvzGvpvbcnmeHJyuRdfuyVp2bsrM4T2B6fQTrRbddANxPjuJxS9HUSJa",
  "key18": "5zHD6MncD9oWVSVxrgoBwPFi1R8yhuQ7P57XBDTEtk4MSez7XDpkEUBw1bSkApLrtctjhnfkkgG2jZvDqknaMDYH",
  "key19": "32sJvTK6xsC97yRLvH2ZeE27bee8aRBUyKU4XiUu9bSqnNhB32QfKBNLhbMJfJZSzF7jq6nyGLgPo5aU1LeCmSyF",
  "key20": "3BGPNcoKGK9L3QmbJd2axRLWAdUAKm4y3jtqE8MmpAMXQF3P5xevEnsKTwBBcWdjhvAUfhG1WqdJjsoTTAKRD5d3",
  "key21": "5MMNF8a57EE5ajVNHMtFaz47yzwkkQ28Ya4AacTUQqgCmkk3GPCteh3wPKfaSjQmi8N4KqGUUCGmHKvN9Q32CN9A",
  "key22": "2Ar59hJa9moM8a7DHC3Do1rVUUCEwW6gKc7gmjKNpAzft89ewJTAbCmkG1Mf4doyqXRuK1N6XNCLHvcbHjd3UTUu",
  "key23": "3kkrBcz2ekGZrso7FYvLcgPsyqZFNxPouZsek3pDH1meZSSGJnSwBEpZ1MUtb9Wb8g3ygcJie3mUuyR1w9oBa4vW",
  "key24": "4i63PYwLJPhw1uiAQ3CHahnRRYxAUuhjyZs7hEPGmdS1au4AcJUmix1NBqiBBuhikNKCoGZLjAoPkvdj45fa65hH",
  "key25": "2o4B9aHM9kqGZCiQ8YhnLjpp9yH9nz7zUhBb8sTxvS4XadYzYVs1G6opGwhbP9pzmYjN7y6y46NVizzNtdYfXVHN",
  "key26": "5iimkuZxzprJx48Pvk5zchgw75eknQVW37XWhhG5KLhFv7HVWWf3RykcgJL9YowDP6Tv1y2BXRQnDTxAW7Z8mG1u",
  "key27": "2bxgL2uECQc7xHpkvCQc8myapu4UdrwVhQiFAAp3aCF3DojYZhctJohCBy69yFe6yVeozdVvTXxKXTL4QkvPbM6o",
  "key28": "3JNLax47SDK2GUARvgRyerKRUTKkwKPG5N2s4b18aDd7zX8vM2HkfLD9vtvKmeZbUtyDVS2og7g3VmGtGGhreCAK"
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
