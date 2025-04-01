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
    "5AoWMA3kRqvsbE3Np3hsS97CTZJqL5hZcTP6dHfn36LpMzeYrCN8B6sXcRXAog1em7NWkhAxxFeEkHGXUPjDeSUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Gwqp78wPtGRqccd8Kd4wFFqSaxE8u5ftrXYLhtnG7Jr5mBjNWJjkZtuBTsZNRnRj362zSQhcUpY92A1KwCpcnD",
  "key1": "3EFYD6cEGBniSms2UBW4LvHonby4vQuAaPH8aWxV4pPZFnxTvhwp8wWaq6NuqfaLS4WsPYcxxeWdyfrPAHCueJ3G",
  "key2": "5QzEXwjLjPa6R7XRRU769ginaXuRb1ceij7oLtR3vwzV1ArpdFg7EeRoHRECactE6yLTWod6fHrKnBdGYStuuDvn",
  "key3": "48UwMQWcB1fAoJe36oS5zKwQ7EpFjhDFggtu7CXxSoUc88M2RoXzQnrrJkeZyK13wgUBpX4tnaCkakW5YPz4Rmky",
  "key4": "3KQWmU7rB53tfy6f4fasAk5QGA5qp9vCb5zv3HFmU12THMGd6QpgXYUj65NvT1v8aqutLPPfvgXema3fzuzaR64x",
  "key5": "CDaE75zAF26Hkhn6rbvR5Upu65Q8k4fWyU2rjror2d3ziKNdsnivNukK73PprmDpqPH87rqfNXHgQUxuZLHDfcU",
  "key6": "56QeJfHqtt6NkC89K2iYzRH93nk86MFoq11h6FmatRPcxzUUzfJijtVEeTcbN8MygEDyUT2gNj7oBemt5utkQca1",
  "key7": "8egH8g7ztfKfYH3eqytCNpoTa5ikcKg6n7P257oudSf4zhifs6PLR282iSNwUFw8jkffUv6gAzvBh9ns9Sijsxx",
  "key8": "5DV1TWAQeEzbdjhzimpT1cUMufq3adnN3YFaF7CBLbSugvzzbJcwceYkemKf1kFCEir6rd4WN6YV9CLtMUnsHkAt",
  "key9": "5uHsbmykqUHN55cvNJCQqBTZwKDJCRQKwQjf5Ff8WjUibbyCk7vUUdkWhCZYHBmqTM4EHrhJYHGdB7c2wPo8sjts",
  "key10": "K8GQRX6EiiRJFGLJkQ3oDWG8KibNWtWPMBFqBgMdd1VzkpY82BKojLpEcoHtcFVxTANc22WMaocjPhiiCWW4iLz",
  "key11": "67LTDHfTosMY21zNnVU6BS6fm2QukHr5NMPzgxeWP21X86FQ549CEfnJyCgET2YGv8D2Udw8WwQ1yQZsLssqrc9S",
  "key12": "4Ay2kvNeB2Eqnxs8RWhfdKYXt24sVQv1ooCSMj8y4CXFydpS9NyWaWW1Zeb8GR1XGWrezdiSm8E4kSh25pUbVR2x",
  "key13": "4aXK9DoFvKzgSzkKnczjzUz3fyY8a147RBEnUCA7C61E4cYkUj6q9jeckhtLyjft5EzjMy2Y9NNSGFS1GZTYBbry",
  "key14": "4G7Ns8HmbbVyoejNfHCrwaf9QRpHphdMNgTfhzyGJE3F16fc6heWxXHFG6eTxyPxqoHLqr53GE52ipSfJ5gg8Zqo",
  "key15": "kgk2ATS6wgASrf2wPkuBnGxehFK3nFPcKPioJkYVKLzRXvz38g3TbVLsozcs7h7QDJR6T14SZ59gqMPrMDktViw",
  "key16": "4ohhv8dLVuRWG6TXysaekbStczSGmrZfn1mb2fdDL4CunVGsWxWHNYL7F8pm7ma1oLKFvYqKMoV6j8LfbWFomtg",
  "key17": "5jNF8s8KE8w4kPb2LrnZCAp9zySzEGg6YvM5feduMH8w3u52BhvbTgQvdpzMRRG27YeJUQjKDp67U1FCPi3bQYFm",
  "key18": "5hFGdzxP5DFQKuWUcnxXNEz87qLpPdTUk1dAmr7RJgGgP65owRnhuH6wXEPSQsupf5BuBhLqhnotm9Fs7nHomhVU",
  "key19": "2Nt3UZM1BvYgr1DkiMV6w1RzdMbA1XWhNswtTjVf9CGTVGmDJmZcUMe9haGU7Z8trA47424XtLzbDQcbR1gY2PmM",
  "key20": "yqHfxx6S3YmiMacgQAVjfFj3GRbLaw4foxHLpwGafYSATqmC3hUpv2FbMZ2kpeNJyJ3T5BKTzgxHxhrp5eM72qx",
  "key21": "2fxBQ58KqtgUT3N8yMs3WSCLVdfyXQa159FpadyKBHWjaEyJKZhaJzmN1zBi6vYktjpKSxSigJSAYU7mUBaqQvPi",
  "key22": "3v7CVd9yEKULPZQt2GXZh1seT4j7PniKNHFGV6VdsSQp5NiH7nDnrNTPU66u54CAddzxtRYi4cFLUQbcD4rfqWnE",
  "key23": "24nSBkWdGx2esUCBt9HdNUuFsE5ehTd23PKDLQqAjVKy8tcGRWcZpjk7oj3sS9Ccrqk6hJdLfo22RsUmWZvzs97h",
  "key24": "2WWQkEJkZBrMMxJ3dp77FH2MRjCbXWtKYKAsv7dftqZqTDudnV6rUf6LW5E41K2DaYkj8aJAz3jZ5hKHG1RUkE5x",
  "key25": "3q1PA21Z3oKw9rfiqewZM6M8frAk3V9LYWMZXExbA5Ng3SDdPsKfXgSpxszaFdSXFcX7fRz9LN4fgk4kNW7VZW4C",
  "key26": "A1wAaToEu8CU1ML2zX5yvNSwkDwrkokxFWLTo3GRS8SnsjsEV7moeWnMRHuJiFitxpJP4ZGgUWGkpkrAftkPZ2i",
  "key27": "39YrRbV7zdmA5zfBhgFq3gFdmLqpqroXcxU9Z4wx9anFTNr8WkXSRr7Uam8y1WUiaMnT2gRhBoVYtTF7vfxYmJhu",
  "key28": "2dfskxYFEyAVahRMP7R3R937tgLeM9EDCaUEYmMLEavPNprMEK13GYAb8MX2m8r7n5zbsLUUWhHDoxhKfDeryQVK",
  "key29": "4WwEMPpJ3i568B1g6Vmtvz3rnKgLy8i6BBXe6i1v17d7KQyMAxJu1BYz966dMuJH3W2XLrWrT7rJY8K6SaKwDMSi",
  "key30": "55YRstdYjHPHKaaDmxtsSiFrir3Rx7PWAmhmyQHMnz72aWcvDnZbgTwKKxAa9rSP2mznqjyvi7pkRMEsH6uVnHEi",
  "key31": "5NgyFxST4HVew1hTNcBX7P6PTUqQwc586qKXE3e9ETx7KchETpvKDcuUBCwxK4FZ1FL1MU9BFqRh8CyMFKet4MJW",
  "key32": "SSPvVDwzJYFYnW17yPuqYChs1U9iPUoLK38zHg3SYZG44Q67V12HvYtwz91npHV3mTu9KdekuHbBxWaytJVv8gk",
  "key33": "5ghsqB4qk9YWCyeKd9fxEEiSvZf5UFaYCdRs7j7MRNR6rQL3ZecMqrL5ayBhaegK2h2VMua1QtJ3KznqCGaehKmQ"
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
