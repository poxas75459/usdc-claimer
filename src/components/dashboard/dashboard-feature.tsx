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
    "4v2FH5tSAU9fkWictveESECpqSNL165JuJLwhqV3HzWJ2pLVNoDxRpN46qsuz8iMH394LLVV6YTFaEUWjB1ohNWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4oFVeE6gQjBEU839PKTBFtsLgL5vk6pJtn66NVMZH557UW51JgS4CFWJ3DvxqEkZftbJhX9kzNMjXtLXnaMzev",
  "key1": "UZYeRybHaQJ5Ch7F3WDcj3wgHmKayLMRUoFkC3jioB6HV9b27DHLTLCtQNy6dHkcXb17Hy9yBV9kCpYY1BxfvgN",
  "key2": "4dLetCE6biNG8kVnU5niPE9PyW8oWgfZJBvKfQ6cbuGa4SNKR2diaHiJ1HvsSJpMBqMp76JuR7KRaJJm4by7eKTM",
  "key3": "4qbJ7YHr36zHRCD7kKMBCsCRziThVnyzvxbrEVzsKsJsRWdw9i4pTyXcFsMxSTGWHQR59FZKRYxQNvV5gRTcahcq",
  "key4": "VwphPuszgcbP35EuDXtYxYcJ8VJZ7cMUkfC9gbwiiLJaxYpcs5gPBTxBqHLqgaxhGMpkMqQngRG9tW1xWo1Lo8w",
  "key5": "4uYYnpv4UDwYMgNSdyYsAxYzTDqb9YtGBDoxgzcQBPmmuF4bdwBTjfUxFjekmhToPh2QMaSZGNAekUXVYGXr7MDK",
  "key6": "4YgfXV4W6gBokJjXXk5arTG62Cmz6BSvv9UDZwBczvhsZPbheJSEbbEn9QyEyHB8DNw1k9jc8NYawUhugC17GErm",
  "key7": "SQ8w3rG6Bt1TUADBySHu3i1VLPZzt28sjAwsbFyYqzEVECjoTu7poZaCPmGbPUo7dmHeqXJJje6KU2z5fcGLbKM",
  "key8": "4Wrimwb8fGZZKofNnqvag6MTfzA7CyDqqttPaWzkzHdibvwBd882t6pLkb489zmBU1R5b7p6hLwMZubtzz1S4z59",
  "key9": "3hQMFdbZ3btqxPsQ9Zqsf9wGBCL7yahkQeEmuWbcsGEsYZjf8VPn9Y62cc3inie5zidKtGAFFkjNEYbYDzNTv5pR",
  "key10": "q5MotbF4Co3xCaF3GehfSQs8CaKu8BxdksiqMFsUqfpfk24DbPACXWegPDVbmw5yHVopGYR7cmPw881wwDWGTYu",
  "key11": "2y34Ht7Cbva4MC9KsMN992jzGL7icQAg64B6UbXgUiR2339nwV2KpudW3rCpFFdvHuu9XncDFcUmSDAVXmmr8pgg",
  "key12": "5rrmR3AkPkNew1PPQ3qDai1ZRT1KAsbETVaXSJBzgxLtcfWGLc6wwU16NKtC5XP87PWyK8QQGs4NkniF41vUgagN",
  "key13": "4kpnYTfni174Hwq738VgbtMxdkCmZyEEBEdyywUYfPUnBkcgKXCePL1TcV6vfiKxXQG18dBZbpk4rYYptwsJ66NY",
  "key14": "34bqLumF3RdhJQLHiXWxgjsBZbsjesUJS61QGryPUy43VDynhDc3c8SeyQexsMX3EVUmGKfb3hqYyR8MBTBTczwn",
  "key15": "2JEMAHxh8RAppKXSHdrHMrprgT7HQvR4ckaZ3c85WmhJrPwdx9dUYpaCmKFsSvygkzAWx6hVEdiNKka9T7ywHEpL",
  "key16": "4sUnRzFHD5HHt4frp7gmAQKdA12QGSjNsm6zNLq3gxJCP6mRjC3tkkXSfJnF99LRokJhmt3vZkF8xd8qXbbqY2kz",
  "key17": "442Mu9wnL5R2qim4iM6KnozWQXcPGVYXE9KrejYoTYY3ik6YEiiiwwNbqUMPvYnApt2WMDu6Q53o9AJdadK6oXFi",
  "key18": "3ufoB3Ju5JqhWfMkKGTyXAE36uHff2PeAGXLLiiiGeAu6NfWdcSkKSvrvkQjqpkeYJMVAjBEXZeU9BknnS8eaysU",
  "key19": "4EBkRv9cN9jrnXzC3W4n2ZPPvGrvspPYSq7BZ2LnuV3ScgVJj4WfASC2VukHEFdskdmQUbiPjcnbc4GwVsMW6yWi",
  "key20": "2iQJEuk5YcM9MqDrKu2XGF4yh6iqPGCP2U6iiQtrrog9mDJ5DGDEaqnsqEZDbwSQNceyE2UsnUBR5GPiVND418sn",
  "key21": "487d4HmFEQtxLm4xHXCwwKy6KpVwq6QfJZTe6g1EkCXamHsKoTg9V3HE7KJ1GdTtef7W9woeRuZAB3nubjEdzSPa",
  "key22": "4rtGWqDcybgeS7ofq1pWcwWsktedj8P9ExChaGV66jka9WvykSCZFq6BwHmY8JTkvpm6HJi2yWG5uo5emC1aYCZn",
  "key23": "4Vn5HQJZobPLZY8ys2iBGmKpVf5vYUxo9uXA8mEKLhSnKLzg1T5QfLnPRSVhxH6iyAYNTZuoZqwWLXGxcxwg9fmu",
  "key24": "3NrLc7CuWqwpwzSFqStrvomY7sXZR5N7MFUKo2ocYJK8pWXtfn2zmfDYb2TrRgP36GZo3MVHbTp1ofUL9qERTZHj",
  "key25": "3AJzqEtnZrim32FDTVGdtan9RNX9ZfE4N8iB65Y4FememRdDywpf9KVaBMP6ahQFcsjH4zqJ2Q17DCPyrju1kqCa",
  "key26": "2US746idwoYsJZMBWfcAUKGtvWTwt4CvB3bSS23PZ9R37uc4cvrNwQo3AwXj1c2aj2nHiW4zNfGe65GzH7WFNGUe",
  "key27": "7eWhoeajV6RJwBT45CwoUDcNiMv2crznkJD9tpw1csdsi6iBo1WvDeNgYKM1rJEcSi4qpPS8BisUh6pRNnppL9f",
  "key28": "425BwfzzLA5HiYRYe3nefyK8c4vGDyPndV7Gp6j18PbG4UL3pJ34ABt3ZeHyuEckpiTuYZ9JxD71P76Z341SxEBW",
  "key29": "2MPDR52KjhLdh675e2fbxrhHQeYrGYVxagwPN7zxqXoFzuaesdorgV8GeUett7oGL9J8o5aZAqhtVEZJ7Xt1GrZE",
  "key30": "3aqqBmWgvykBGCTmjx9yoEWHmhTvTdyD4fW6Gzht3u1V7pe8FXUfp9yvEWucCewmbjNcfQh6tXjXYtjyDd2S9x1i",
  "key31": "2rDnkndiJEB3Luq2D51JUmKSE7n5SYz1eyBEJ4st4gBSEPWVfPzbeyj7Avbn8tfKKmYrwkWJRnFrDrtWEpqNqUqp",
  "key32": "52yhA3huYdvTM25BaELuq5NLmcMYcXN8B5ESsfondEPxe8oAq38BRpLq75W83gogUC2UuStUjH5PFeQzzHXu3w4p",
  "key33": "5qKLsHvtksNLJgoQr5CtxfrM1jWfMtkbgdQYnT3V9Wda74qbjrbXtxuMcv8aXuh22r4GNko5ZqbMSim1cQr282Es",
  "key34": "2w4cZEAatZFTXE2WkYcsxoJoFUZEhnURi7KajUncsaDuRgFJbQWgxcCgkfKdteywqXygJ4Lm6fHkVPyp5tPKcYwS",
  "key35": "2V1hJvraKhaR8aFxWp6kxPxpR1C4Vq7zp2XtcBGqN7CoffeR9raKcGBqszk2uHuviw65fjg6fFtNuZShyMZmKaSN",
  "key36": "61vxWnXzk4MpXKenXpdqA7eDPisE7siSzBG3jGFy4V6gJhqPiG5VnQVZAyxhs6SzNTgVKsQt15D876My4FiCK9ZY",
  "key37": "4t8woJSXWMDwvTuGK7MA69LWXCwJgtgcac8C2XKqugGQ2Yf1aoxvuB4ZpW2PQGFNi9SfbeV6yEhbei6vCaNbmxGs"
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
