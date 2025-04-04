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
    "5oFRTTniGgj2shqBzuomnWQ7ec4uGu1vz6tWmYcxJ4fKUsx8LFJD155CQdTPoabRg7EDbCWmkWP2mHiCKcymHMJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HL3kow84XfrVG6uRYZv9N4CHkYUQGqmKE8CQgW1hmPX4cykmk3r7v8MH6jPnJsfgyTqXswXxPYUrg1krA5KHt9F",
  "key1": "4WysgsB2VHwKpQm8Ka4TwkfngkakkUKQbr9sGEMTdGC8zqaawP2LAU5MMgLc1uHrHSS6bN8AbnBy9NSap3GhpYuM",
  "key2": "3Yz9bd6UdeTzZi3FmTTqSUijxn9551N854M7DX7oNFZoKevRxoy2kB3vBmJVSEV9b4bLaFCcqRTT2yc26g8xTZdN",
  "key3": "ijQPGuRVr363nMAS6NgaFkVg3jVH6bRkTHieEYdMCkKTtwwnCK9kgydzEqLMjjkR4o55iig68gJwhGvbiyY1dix",
  "key4": "4KPnRdJaccr4wYh4uw5QijLpBmDDpyPRrwQ5NPZPKPgmWvf6BHXTTDKobrNgVw11a6BkKnYH4CFGxG1sySn6KBzU",
  "key5": "XHPV65Kaf6ktxtt9XrdK8jND3QTbXKFKZoEaEnKgCuHpfWj4DDrFp7NYW5QUtKvFfUd424hXR89xw6mcgA2pLF5",
  "key6": "3auuXQB9pgYhSma8XjoiJZtMCvRKvJPfG1ht3KtbW4FiXp6Xoj3m4dSjDA2DVukRbheNb5iaBpAHnikTUp7cAA1g",
  "key7": "26PdRnwQsnRw8Ay4ofmQLbtGhfws7bKXjuME5AWN9NRBetiYrkXWYjuKauMX3kdXWXp5bD6zK1gjPrnYyVkfbvM2",
  "key8": "2ZiSSrJQeRhiuiQ59V599RCSbeLwfGsAbWH18Lgz841YHoufcY3qvCatEGHJCY4YFoL1v5qMzUuKXW2LEz7ttExj",
  "key9": "3gX3wbAz3pfZy3rwU9NyuRVhjfBt1Yox195SRZkQ4axDLSpupYm4gubms3mtoPsz5R8ttLa9xDBvsCawiumeLJH",
  "key10": "23EZghSJpsKF18C3ES2CZKysZkYvi6fsXJ6xkPBRnskbFFmsmWo78GmbM6Ljzop8uwZDXt7ySYNAfs1K5vT5wJz3",
  "key11": "32Gd2DVrrHBh4gWnNSL3SHEeYZYgnqMNa7EvvRbbHxqnFr1aD7v4QkPN9pG6QoEKqTFJiZAYZg5tZXSQVAw6BQhR",
  "key12": "pHXThZfQrcTErbVA2a8KQTFN7C7BfZXQPrEAjQ6yftMWKimatAReM5xaPgRTVvYx6eCsRKvqzfgMUa1MBCNGCf2",
  "key13": "M96zAowoGW8KxwRG7jS2btjscw2Fs5cwgiUvnTivhNHsAbVTivfQ3Ei1Xbq2kv3V1ssSW1cmqELrQUVLHJVKz2d",
  "key14": "2QQU5MWAgEykHMMoJ6HN1SpHFtHsnXKQnPPgc17Y5m7mj9JiE5ChxPyFZ23ztxPBauzzWFDGs1mWBPSgQvGpMNxR",
  "key15": "5XoDutbwrpJDHTSYtzWzpPBQYtvqvZFZAkXc3F7vVBp4rgZSAVChMgGjSUhT9M7gxW9XBagKg27AwByE6KRsswpF",
  "key16": "35zEbGUWbo9g6qrU3A2CYnaUPdMew2AJvGLCJncPC9Hx41oLm8YCjJk6DhZc7LfQPjKXLZmexbm7qbc2srmNUSaT",
  "key17": "3KtpiUAi8BJjSej3oE2ySQFfJanx48nPo8ifVLUpUA3KGa5jDd35tPw83mEXL6SVngAXtpPhwDj8fHuoHck1s3pk",
  "key18": "3doh7HxG6M4tfzY7oLHyFmRHAc2UEJN7uPDFPxMdf1QYH7FHrSYVj8aVQGxFra3VhDHL87eeXDbtV1gm9vwuTcpE",
  "key19": "2GKyRf7rQ3zrTpFz6zaxTfUR9sNi4dkEtBkWjXGa9RFjEsYrmTFYaMkEvd9mHzwqg6Gqdpc9reSxf4KPf8QpcnBr",
  "key20": "2kh9H6YWv5Zx8sXgCKsXSgg2G7TVreNnJnh7991AC5WK4KMHWn9rUbT4QucbSetXyKnQP7uRJTS9zcwFnamr3Lyq",
  "key21": "3LgWHJnvFqr5jiUgND6cUvUTxHn92rpjMGiZCLCv8MjAYE83mK5iuN3EvFgKBa3EirAv5qhZgTEBqQ7icQ8DVokn",
  "key22": "2kgJBjo7BnGtd2bYKcUEnHSmHLB6j7vRwoZC5pQMhagw84dbLX8JySPBWe2WxucB7uRiRnbnenp98ow8NDXSk8rB",
  "key23": "BFmEBjJ2D8yPU2TgwFFLczCEeiaHCD2CkSVGwyTasXGPoe51utifxADgk4uzFPpUPN1TYrypXAjDRVRJ13XKz9r",
  "key24": "24HfELpZrW89fe5rsYLwW5xVdeLSFu8PWp1x7Xce5QrxqvjNKKE7iLZKcG1u6ijuWVyuJ7WD6VpCZ66wkWH9UnZi",
  "key25": "46ACQjyps739k99n8xmqUqbSuSPxcKUBRf3CXWgCSNCDUUdSpwwEdEFWE4bRwXxdttcAhLjsToV8TyYNHAtNuBUz",
  "key26": "43UD4M7BbmttMYttk5ynrV7ksZhejKCVd6HSgft7QgY8iXsqpc5wgG2vfUCtGNJPTWCV7E1cJT9NR6UvrLVoqyAo",
  "key27": "PZPJYgVofN2mMFzC31kNQY5YeBpt2ngRCshthEcox4JasQvkrEswSc8m7wZW86vXgA8Netq5pKE3mn2DMhW3VGx",
  "key28": "J8G2GhbqXm9fi5TMj5wLZrHMZwts878aAADfJpcxVDBDpmoLPRrHft8t2wLzSVk1dW3QCmRhbVsWEm9EDJLeDHF",
  "key29": "c96X6hjGLxP7qsn7iXyGH2R4rGHypAhKYns1MyFwfwfzLPJJpWwg8ZchzYnqqEi45v9sQoquuQaUxxSYmDKP2Fj",
  "key30": "g7i2EJcKgXJRhHjXKfubL4b7Bb7NuGwKTN7SgjmmwpPZnMDiEsRZCStFEH11ErLuVNJ1Ms1FXQg1kUnPecgJair",
  "key31": "d2JqdvosLvZ82BQqHcWo8NrABu4wvPDuA8nZpUJrjsKUcYZYtS7ZkeGQvNx7cGMfwUHZPGykpwKm3ADN5Y9pNen",
  "key32": "GpjPGm4nHSdueoZo9MCfwyGM2MztGjbcak67gCUFVbVxd25KKhMa6QaphULYKRZPhBqzPNVEUMFXngwMPQCCRRT",
  "key33": "qRASgPkGpKDrKeMF7vyaZNaoGof2G7RSE7tGJ4a89eb4n29PaYWDR5JR5QAZrd81FFeJSTkN2XfHqwSVhFeYna9",
  "key34": "3Z5wvApdQc1Csc6tbVxbrudZUNVMSWDRES1RUJBcY2zDCvZeMWQtnex466HH2bLgLHT4K2DyPw5ngPeKfetXHUbe",
  "key35": "3S3pTNUbYDXSSpCq3qfzfzjrHPsQVHsaNRv5LFk5V89bYoLHwsuug6q4jMGtSU9gz2Uh755FiVnyswxSQvxzKRUe",
  "key36": "2BoVQdw2EJ8Naw6PSFRFVBdvDPae3MQtprGHWDoCLcuWP1HPLgerqszFKwif4r5p5Gepoqzkc66y61SCTA4PPLWk",
  "key37": "5bCc6C4ttXtVdLhY3SKJoTdswrs1RtSv55vc4hdAvt6MjMJmmSBbPgCPD79Qm3x2GVcaycTwJW5ZQUQEFhZ7tFSB",
  "key38": "4Mm62gi4oC37TAkAqhMVrdVp1T95UHJFtyJeFE6rNQJVQRpya6Abg66bL5dgR4gcFxr6p7WNJ2V3MTwegiWmjywG",
  "key39": "j9umqqcn718fNUJQ9gv8vQtckKou4XDoABK5o53ixTQ7AFf1NmNtZAms77aAFcHXgzrMvnYSSUy3BcRX1xE5cc1"
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
