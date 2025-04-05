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
    "5EcsqhmPbjG8DMYesgEV3rUhfm6dZ1RcJoSwtLnDkUds3FFTxMCRVoJqzoVK3Hd4DAYrmWZR9om5F2fBWQFrPFMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2antJC8Zn2ycQ4QJkAUuoh23hbR96RE8vBGfHu8aWqq96QyLVuASHGZpKwA5owGtVSGY7cDGXKbVhfy9qYRphZ8x",
  "key1": "dNosZBnFkarufR6ABT62C6L1iUcdq93ByK9KB5EhqARcxxZKet3TV1RNyrPEpGtmQj19DsXzbAbLLHYUVBRQ3FS",
  "key2": "3q9mvfEjPDSQ1tuXAVgS7S9nwJNy74YC1MZFtbf47A9d2R49UULxA23LEz1M1GShFhPPQP8ixzZQvgjEVohmCtA4",
  "key3": "4AKQtrxSheaLFzgUmoDtckSBv7PyoSuaCvrz7ChxDHD8VsL8AMvZPeVVZ7zLrbAFUab24AUFUMKgAHSNzwrWqu83",
  "key4": "3YYZtjj1YK1SEFdsVAjRA8k1UozPyqBRsrQJikBoVMa74n2iT15PTqVGEsubNejEGbntmqnz5KLbfPvWE7eYkxBN",
  "key5": "5tybWNbLDXUCPzKnQE1SoqyfQEBXiaSCicoVRoAQJxtCv4G1RyzTHNhKW9wk4pngvevtige6e4uUMUp9Z4XjaJax",
  "key6": "5fymhpiGxUWLZ97d97PmmJ98dJihjJJDaJ1cFUVaTUcrYwZmKVzrwQeEtZ215HxP4Ed4AJPYo2QcmJ5N1oApuSaq",
  "key7": "3Ygj6MW5wvAPFhjQr9Lbao3fp99UXP4sUvRBc5V4BNMpqCmDy9mAxbDqAe6PSQnRESAwDdfoKebFW5g35uuNP8ex",
  "key8": "58ggWgwstiWSDRMwZ6QKBNbHPzpJyW8vbhdek57LH5tiaBYACwYVad9nwUwpAxaTyoucrUHHNEMuHydN4r9ao6v5",
  "key9": "BQgePzthyE7NbJBAXFmDVkh5aefAAjwmRDG7gif4J5J7xk7XeHgrtQPoA8Z2eEAAJ9Aju21PPgY2BeKAkQxtyei",
  "key10": "aA7gDvqBTYSdLyRFpR1X6eQ7TT2duPb3G5i7oSrLa6BNJuYNJcTvXQGPppHCyTho1aJHAvxVZKPT1ePeGvmrqKe",
  "key11": "3N9VfyGUvVsfLXZqWi6rqXtTgNqKyNvXjBNRzgMfFVCG54oktXrPE6wcZymPztn3wBbLerE3SKZLcjWzQSgPsoCk",
  "key12": "5UvoNbqQefD35p9YYtuu39v1MG1EbmAk6n4CyCvpQTs1pQGVdZtJFZ8ysXPecEWMZAiRCA1fBmTN1xr8ioMdepVt",
  "key13": "2nhTob2yeKgMxVATswHHEayuy2h2tKYmZncDV3Uiqy2brG7b3JSogmC4ddx3UUtHeEpXpJ1FSCWeSBps86CYeR3N",
  "key14": "5m449eiqUS1nBaHkiXLCG9W3GKfm5wnJM4qbSLSjwskq3uxTQK7qDPR3upx3NGkbQ7F6funVRmz2K88dDh4RU1zP",
  "key15": "5vCR4zjwTcB9iZ2YKxknabLRjFatjV3n9QEjYkU1mtP1ytLukfdi427T3CVuvhhwLPWxkbEjyn4y7fQbvLHifCvv",
  "key16": "3RNzNR8SaVe1hKdoHdJmMYTBvZycf1J98dEp8qHJV1fsntJdvVAQsvXypz1kSnKymgwY6eJ2Xz95pWicnWLcFwF6",
  "key17": "62MLqTgJ3GiDLBRQ9bM3CxhiGmH5FnCEEMUyNiCiWn9PYuqdoTu8X9QrBuAuVcTxXwehxigdnrPN2G21z1UZrhsP",
  "key18": "2V5uXCLNLdNxw43r6YeGMPBzXQ4HviDabuwbDvAGHjkVTjUPDy8fvfrNQpu4qBtacZcJGXaxyb7kSKfZxM1S85Rc",
  "key19": "61rgh3fxCrWjZSJ2jFHzBPv63JKgLCpycNQVVjgcWEDMxasDKLJr7t9oJsn6S53GjAe7UNjT8KcUipQYEAXurMQj",
  "key20": "2axrFWoymdp6KBaF7xGzdt5gZENku8aG5xgC7vTHAUfFycoWRWUuxzgXj2CGgZUqH25Y96K1gn2B5hHgSsfAWeKi",
  "key21": "31qwtm27cupm2fcrsusYurXEzwuzDLymUfPQXoPxHsd32D1NLwqSXx7SSX2PoLDGpoKReLSuhkAYfrjBS6YpBYgQ",
  "key22": "4kNMc81qdmn3dmME3Vrap3hf4WghEqQCeLxLLKrJdcV5dstQGzXHzNCZZot4SupR7jiR1DTa2Y6CHCFArhffUYfc",
  "key23": "5vPV8Sid5vThYUQA8P5WX9eufCfQVLNpcbHDNEoyPpUSzeckJQAaoPpDg6fLQrpv25QkWgNJYTwLANNNf6jMULMN",
  "key24": "46C3hrcDdnKeQUsNSy4rZhEHtG38z2bYawSbUjxqJXeQXcBrXV49V5pGxMNWLYCd617XMzpv7hFDoi626fWi9MLL",
  "key25": "3KxvS6JCbrPoci8XUfdeT7DCpztRF7TKNR95f6t6aGqNeAZRYi3yytVDLWcmKHoutc8zGQ3oWRJUsABpKomKuZcR",
  "key26": "2A13yzGhCNuPnorKeLps7xEjNYPUVqKVHkLRgmPWadN9KEfKNp9mb9pkRYF6Nu9mRDRWQyVZoBZbjtPejpVMzENT",
  "key27": "3grsMFQdJGY76WBogTEJtV75agPjpsEdnZnwodQtgrampeZtkEpyvVzaiSqBgBqSy45rHFL9T6SZJCCufa8xcxXX",
  "key28": "4WtcuNKagJyJ5vjHsthHi1B1aV5hFLa6CR3zFGrbCq7Z6sq8eFbTU3gmLYr7nk9M1Bb5DGetjyUWtBuNZrfnPq5N",
  "key29": "VzbuQ5Njrodupt2ECAWxPrm64vUm2NKVT2hKuXFHeHi4JgxKuENxYJnMgepZ4T9869GDhxt64qHReeVmzQrJJDZ",
  "key30": "42axwNmhSc55uqKUQ5PpDf3CEy21GHKtFhskgrJCnQdjHB47XnMb3K8DCeBoFWt2TafguS9Dcaar9wwJrKYuGKvQ",
  "key31": "3qEGdJqjE5QyiCBDHdkFnBdbs4TJvSU5oFaL1DYZxJS97Nkhw1ZC7ScRKLYZ6UqChG9TC8Z7n6w1hdPUWWYzAyL",
  "key32": "3i7ax586XRqixxkd5nZZSC6i8wWySpRgN2qXZfPnZczgZuo38UWBcnhvXucCP5tMSZb6NJCTmxrPpWiF7FCdqmhV",
  "key33": "5V49AQcA6hYjN42mrZNe8fG6x2HtYLG6pLc3y7yP1cRkLvRi7HUk41tzWCofaixemRAZC3LQP9fCdgq5J2Y8KRWy",
  "key34": "5B7iCzYEhYeEURbjjTsZwRugy4EyoxVayRqWmBh3RTP5xn6BfpnFf53kiZ4sAsNo8qrvmyvsWrGJf2QR6xTwuhJs",
  "key35": "FGtvwQJJsWVXyjFwbo5g21nBSCD9Yz19rPyBQAe96LQjPom3cSRQ4LxjvbuMqZg9dv5b1Us57N2LRFjryKwMQDg",
  "key36": "4GuEnP15yH4QthUvisNNmV8hmQ6vEQdmvpciQFxC1c57yXGwC6QyTqSzRk7ptdAJoM6rvzzcK6mYHRhPpyLZAnU9"
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
