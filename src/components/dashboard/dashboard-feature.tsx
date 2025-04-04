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
    "51vYS4zfEFUQ1JiBoLNjidCNF36qPqXnNUVdQ38RnodZky24KQdHsH7L6a6K2WudWndjgDjGjP9j1bXDNqc9mWaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEnBMTR5t3SXbWdH6PPdMYjeNJxUScbzBafrVaQ8K9CDuZVfAZRxjoAXM8MiW2r2CJSJWWhuU1ENfnHYFE6zCBL",
  "key1": "5DgF5ZXUDvkEXacfX7EBgCw9WjFMiH97J2r7REYoPFpbvM1Y1XJ9ZnxasMc6is6rvVbX9qEKNq3CChrCFZ7sz9uG",
  "key2": "2HJnWxJwu9qrH9Fg4epY2LhboMiN7PeyHiKDCEdM5sHQbwwr7E5QcS6Kr1HqJbLAwXRgt71zmBkeRGPnn2F5KKRw",
  "key3": "5HRRrtSTAgjq7LkuvkY34za43ANF1CoApUvRc4okgrZEHKF2ndpbLRwvtDQjuTrcqzXXTzjPdShi9VLrcELBuyrT",
  "key4": "4XJCTWgMiRFPDu2yVGNFXUo5UXm6iMsgQbCwzSmSas6BdH8ksNtSBj8avExVg9FwUsEwDZYBevCNJWRXgGSPWXRx",
  "key5": "3nTagRXPZrZ7viNaaogqRPfryq1Mmzgit7pXzqtX5WuTVPTict1n4hU1fp4Uzh1qh8yoDYg36oituAcuSTEsaLRb",
  "key6": "2LHAAacGTKwocNrGiuRAwaUbYCrpfRZNwrKMeaCKc7QCrrbsuzucpp3AmmyJ73ntfhb8qkMwdDNLLVpikVyP2aeQ",
  "key7": "5EK8F7TxxtSVtgVSrJBqiZELhYR6jJoQjB3AJZTYa3d7Zk4vYnEEGH4Y8cWU9chwaoQHzxzd1uJe3sW5fv1V6fVu",
  "key8": "64ykWk4mvFfw1gnivYKWzRKofMVePFMCgMswcvWvN4YiJf5gnK6XHbv9xpm2oFczrcA7j5tZQhMp7XdoMKTZSW8d",
  "key9": "51zTocfmNCUQk6uMdBkxQNvaGDPTNRHMSGaLu5dHLTH667xa1JxGDY4M2cBQdP7uiZrF6QG4HNQc1jRL1ZsqtK9u",
  "key10": "56DaK5aE2RmANka2wnC5pJ55gK73yHeyVuaRyQPcJ4QBjun7dNdyQjYR2dDnzsRxCg9uCPm77AyymmWw3ftXfwQG",
  "key11": "4iMV7V2qgQAnbDUd1yk2CtWcZxPbjZ93jZ7S4ZzqqEKceT5oYtyxqm3Fye6tLdBgzG77tNX8jynkNDygvMayFRQY",
  "key12": "dKcqUhKpy3UUs7KiTemznScTZvf2tkBpvH8a239ciL9zLL82jjaq2c86UtgyPqGk5ntLPwnEHPYdNgpGDrdf8DE",
  "key13": "541wWNip7ePLnWmKC41DE6r4fwLDLfcybogaueAUMNBAQMvi6SJQ2jmTw5Ep8QA4ZCZeEfcmHqRabLpeVfFk79Do",
  "key14": "57fkGcnk81aaAXgVBuzyvrPtMLtxo5ysFw3mfrxHa3LyU3wYGFG8cE1u8AvSRauYr8c9ikEy5DX6qwy5ETY9vs4d",
  "key15": "4ZsKn6hc32sDSp3va3fFNqVNqHSa84yfM5pw3TagudMSDQ5p7zKGvzZk67Bumo4RcT7VMqw8mNoG7n5S5Ab3W6CN",
  "key16": "4BCJ7ZY64wrzo1MwVQSDKFyDEiYxn5QVu9Rq9WZ6nqRXs6UrimagGxecTKLqTEkB4nhquiYCFjEfxZdnJvCPSH8d",
  "key17": "2jXrkWhGZSQtJed9Zhq8FcSb4vFbBuAMBfdCLJzaqmxMH3XDVbdBkx8LPhgR1T2HkH5Jncj2ZeWJu1pc6SWKHpsq",
  "key18": "2yy8z2qMrg7uC6ZbYEZvQdW58tr5ov19kowJRntgGyjDiVXe4FuJ26ArFZeRBLHfGS7jRCn4wiPFNv9L8bZtzxu9",
  "key19": "26QY463uH1vyuoHVbWxkJ1vvPdNUxNSSjv7Lozkbn8Xz1ccPLNv8wJmZ2VLc9VPETaSZfHPzqmpMR1WRU3uQAK2j",
  "key20": "33vchER2wLKnq1SUTzyg54Z1qJDMAMUyLexr8bWW4zmP5dfu4TRTv7rousi1p2gqP5t9DmYixpgBzKadD9PLmBkx",
  "key21": "3kEdci6VZiFHJW9UJmuYrtU42bjg9V9AXCRUq6Y7RXFrGdu8udZZHYRS28wSHy1FavtGPFniA8j8xEJW8FjpJaj7",
  "key22": "5oXuuxKf9Ye3aDH2JJE4aeMEiqmmc42ksuhzUnfgbydMDYXyncYLR561vid33EX8v9x7ozrpSGxjCkgL6o1PHjfE",
  "key23": "e3cUjgYwvLhdp2kdAvfHKaJJTdnY9dTsLFGzYqDgSq4MMWJBUZbn75oGzM2KhiP6689NsBjcN62mrb3tDvYZWZG",
  "key24": "YmgUyrP6NH8rRdqg49A7aQHdtASPfpFHmfUkcwMJjrWR2ZKXbYwBUsvktM451DFJHqopikRtLX5PXaKV6AmiJ6Q",
  "key25": "2Wnxot3VDUYX9TGuV6p2DXvq4hwijavwwgHxNctdeSxwgBaKTxqgMoYDoRYpZBt5RZCBy7ayaUeug5oyKb2oUbky",
  "key26": "yXe2FLLiRaHSgiqwF2cPhseggX81MnyDa9u7rDo7rxJX8uW8ejvLqgrpaq4ZJiPdbXXythe1k2qerxV9M4FWrq1",
  "key27": "2FTjdbHvWmbYiuvHgNoZeG9Jjsd262UTGjqhopg6vhh8J2zk7m9bH4c5t9Xdpn3ug2FWAQCrBAj23YEcR9CqpYfL",
  "key28": "2Z2nnWgT97kZ4V4TEHbyTXVSvkPGAUFoQ69QQaabbu6MgC45YoVdLko4VohDLz319FguV1Eh1vQFK1EyQYw3fSHu",
  "key29": "fak7MUpBcMEGXGq6RPbVxApB7wnPkMp8fohmCou3PD8jdeeZ7S72baCU66gAdDYQ256SCVYmKR2oeryfeVRmmQF",
  "key30": "48odzYyzo5qkZKJTuazz5HhDLqccJpodq7EJRfTMtkjB1KfgKXbdQQ5xFiAxqFjJyR1o7brNdjGqoZCcwL7SzLnT",
  "key31": "27kLpDgqbAXAZLYknPHgqELXtaijhvfU7b6BYB9SzXhKyFevbfXTZJPueGxpYqNjdyQPiwGKdmvGPeEyRTDnYvSF",
  "key32": "2HAcSvZkzwVL69eUusz13FyzHaqkRNSPXi5NnXa1b9mPzhEdDFdB9K5ZibrPk8YEB4kgtf7cbG9Bb4jDFdDvdtb5",
  "key33": "5DAfigoxNWHoioSmXdg4Md2oFdf6h8DJ6wStEgBZPEsJpRnoCQbdaPPNt1mtfMmU4aFkXUUiF6rPjEw9kPXRhcUJ",
  "key34": "5NCbxpqXHqiCwmkByCMPYnpAZb4sKzEQ4HTxivid1xHY9kHShipyFj8zCc7xL9tZLdXoLwizF1nAPL2UxGTnGg8z",
  "key35": "467XaXePhc1c4PBeMTie84XefmfKrcNhS3TWn4RtTLhnDynrRQBJbPpUkqtMDAYQaafDGNvWbW1AJ4hoKN9GaBEJ",
  "key36": "67NsBG48cYLPJZ1oNRPzAknePRWhBwS3jsPpQoELTYbGm2VzAxvnCBZ3tkLFkr2uELFyKj1YfCQj92LS5xetnauP",
  "key37": "5nmaBDk3xpLz21uEPD1CAMh3rqcKHkY3FRUygfQGAkmSG3WRfNdGSH9ngFiT7zBgjCH8arYFfJVmbjbD19kBqhm4",
  "key38": "452qsgCCeKQCNvTm4DRZmzNQV7Fuc8aGecz2Q24wStjj6cCXSTV13eYaWErr44CLARa9iGAEwDkH4PUWAJScF9V5",
  "key39": "322PuR9aMu8cvoLaoL5jc6Gzm7GhbeM82UiayuBGhbvLAcS82jZkbqMhTSPzETUx91JbSbm9SXpBGgi1YGkfS5AR",
  "key40": "RHQeLWGTwkLqhGwzHYtpLkhwSEVryyhfjdD9hy6JfGhXdgjpwXuRJonPuekdAQwi5sngCdwo4YyL85DToevJ6DC"
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
