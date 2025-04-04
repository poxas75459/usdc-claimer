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
    "5wPqK4DWKySc1RCNz4DNyJCGfG1aRN3QtiSkkwrPi7vsEJZXp6sJ75HyQTr5YVb1rMrLNmyETZLKGgCB96ajTbKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uX5Ytnof1i6yxRGd4xKY5C2JMw3XDEDePCVHpxDc6GQpwQ2oeq1bJitxhh3rUkLfeJ9j1vAhU7D5XmCpmT28Rv1",
  "key1": "25Y9V6VsxTVKbt5Q9soqV8mZPHEVRFkktPaRD4CArNz6SvMvLhwvMuavBTWd38t22C33TWe4rUsYeJxv2iHJATXi",
  "key2": "XNDrkMQzghY1fSboWMHQyTJeCgRycj5P5YVwULnrbLnE1KhegUdSpbRnWhgXymp3yb7PAkgNaX7K3UzGXeJd2bz",
  "key3": "dUCWiXpUYCWhfiLNMq9YKC4bMimeQqsNq1r2gZpA6rdBbo3JoeRuZTZtwS2it6cmBJY9EDLoR3G2nx9RTXTdmpV",
  "key4": "3VJjMfX2uaxbK784LBPpJ6qvY7bxVyBk1Nzg9nW9AZWvJXvmUnbqf2QtBp5sPF5Bh6UQPS8KHAnzxH2AXgbARGjJ",
  "key5": "4DMJXeEYvrqwTvfA2bc97HZCSTWk4qHTJAYVyDbPS3kDZ5pYKm7RJFQiLncinEjJTU8CywdTqhQoxMq4AupxVEQM",
  "key6": "4rkaqppV8ziuXiR9zdY7GUrEDVWdRzqYKURZ24hyFt8i9EbUApPEzJ2pqZNarXLZryPQMjvykpS6yAGsFFSPrBYR",
  "key7": "35v3r5F7d6D1faEvRmzLmrZQUFeHFLtYoKHajBXg8BAnkR9pzXJvwaG5ce4e5BPCAVWNvULZLgrJHCNWX5LFoYb8",
  "key8": "4vCG13hcMdVwVBuEco1pxNd56YFEfkrEh7ErWNMa3wsf4pMsyGfAPTp9gvGn3FvavCvtezGZTHgNGM9JsTt11oDV",
  "key9": "63xNxig9fGPrqqU65ctj3QK8sCfqvRvtrXqQWSwtjVbK9v7ZGsCA9gYXzfa33saYQ6MfmDdApHr9Uv9iBH9CSV9y",
  "key10": "KY3av5otGz5qgTL9Yt6o6eZjKJB2GUWxYNRy2J4Ft9gu4kZzCahCVQ7vzHu4Wnt6PJ5nRshc7wBLy2wMWBMXCGD",
  "key11": "5M18AVqUEgEf2rHcWypeeTzjtdKw89Pj1wcJPdnyuYuxwNGj4JVKEHm7fPu45VNZ9Ki9AqWC5XEgMctXmw8PVSGV",
  "key12": "59DTYbiHGB14hJb6YG4dF7Nc97uEAGo7DJDBy7zaoGJAoY1vvzXZLTXckWUVtzrkCJN2MRKGAosVuMrbuYLFdc2t",
  "key13": "4Bt2kktEXbgbgUcc4g1Vwwj7Y2GYxqcGXpgzRejzcB9YP5SdcehFfG215X3Ln7nksTyjfnLymHnTgjx3bh493kzS",
  "key14": "2NrwjBksXr5jE49Y5GyMeRv3SNadVS6nVRn3SWCj5iELjzH7khyrumMQh8w3oQxAi5gffeV8Fm8vC2qsf8RRX23m",
  "key15": "2dTNYLP7S3w5UCU3GRCg7H8S34tMXmeiNnAN1KMXD4sDyA8SqRaQ5cQ45rh5Zr7drb6yQzgREM1ckhvvDDcUWZGy",
  "key16": "2HhfJvKm5oiiDkTjWf1UfqtWD3DQBqoAfykhzSoM7Te8fsNxWd47Gc9e9p2jvtDiVbzc6HFp5WeSW573wo87c2Hd",
  "key17": "5Zsy228GzTpxzVX7HyX7Ees6geoL9swavhJ1s2cFVzqwgPZVx7Xcwb7arHWwx131sLA88V84KkxcFbyrfeyYejyo",
  "key18": "4ofFah4ZgLSa7CAJgzHN3JQWQkQy847hCtkynQu2o6jGHBMjPLREq5uApy1tBnWbLnEXWaoTvWqvyR1uGErrMtRT",
  "key19": "rDT63AQDYt9y6PPHFdU5nsuaaYoSKgZqNsRKpwZT7S4iYB7jwgMyXQudQ4uBguRUrYmDB77b4gMJ1xfChwytgAk",
  "key20": "3tgGnsZNvfbetPnKHgct85VNhrEJH91Rw1Xo1tMh62N1iqgvxaC3XdfRGU6Z9DMhbTQFBwd9u1bNmnRVjV9gJ3Fr",
  "key21": "2wf6U1BjWBgECrkjj75cSHugnJqHU8GWcebxr5zpN2Q3D3gcvCWkvzi1uXpneKp9AdJru31W3xPGwKfz1ZCg9dB",
  "key22": "4G8fRnVbR1PHtyckTqVmzpFysbsCjj32SXuQQMzoL2jwmRhHAjy7oJxdbDNLbDZwrSHL6vFJNZT8Cpj55qGCFioG",
  "key23": "5w3wppYYLdYfoNUT87xxjK3CUW3ybkaXMhtAevyWByudKPUJz1YZaRbA7zKdnX2HzACqCg6v63oQkPSXJ9XFfRch",
  "key24": "4rWvm9FUSmKaSKAj9Me7yP4cTStkCkUnoqZuXymrZTTJ9uspgSQhAMwSS1m3p6kVNzCthU4doWXgGoN4JCE1k8sB",
  "key25": "3JcWyDutowDuipCRXCfHRU6y3Ttywr7o594EXpc4wsS6y9DAfsEEotfctyo1DkhANXyshbecHbZBJodu9cmwLEHW",
  "key26": "5Y8Q774DMWmt9YNETJ3UGRE1np5A73hMgTqWhhV7GK38EQnYPqs3cDGJpjexdppjWjkWZNoVedo3WjXCqUHghpSb",
  "key27": "5Sizzo5qAkkWdDFJHVbtNxDznW87h4Q4G7HrsVd1547Hhc1w7WiJ3gkq5gWsKqfpQWM7v8gw2tm4LkC4Kxw2caiy",
  "key28": "4miUScBGGcooAnnoHWS9PN4E9ukLmxjEExXEZroKwaNhcZUDK2psXxNJPQJudmSGcNudWgjpgzCbNJD1Tndpi59k"
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
