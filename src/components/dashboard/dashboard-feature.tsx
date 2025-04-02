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
    "3V1tEQwiUV35KugfNEGbkRzaVcz8pgNoy4uz3sZQPAvBZHisFvFenvTWQjeymSQHAjAQRmtFSx9ncgWuuHUkZPBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cusa24Qd1KUwMnKLpu5DLd45A3DwuAiAATpiPfZwZjvRaKzSqnB55xFYTmPkJNCnp3rZCiCuu7BgFM1USCBGEAG",
  "key1": "5PbLGXunjS4BpF6e7UatfBLzfj8jQq19NYcg2EdPxH6T38aeKuWrS9nZfA4dVNNSqY38shu5ew57WykJwfX9Y66Q",
  "key2": "3mbWd9wrL6ELzdH1BWNEM8Gau8jHnL2rsQhioAQTt3m4KVcnJVJaaZNpWSHZkXiTV933vQiHMgrPngMEABskr2hy",
  "key3": "5YaFk1Aj7R5RgEz1c52k3cwpF1uJa1HdTxJ8vY1Ztsh7dRNoRwUoMMG7cKt5TGCCvNAYwf5NHBbry9F6DQ7wAeMe",
  "key4": "bUMBD7yTfpkipDv3vNTDA7sz2TnLitb1a88Z6TaxYN74oo7JX7U9ppsShXekNG41N8z3pyH36rK7wcMzzaU4bCh",
  "key5": "2SmsHoQp9vgsS9F5KSnyURjFGN2dqdtQfYyBq5pAj5Q2hv1KrxChQZuFkAwRtNxwF8oUtovP5R39wvtyeMFtVAjT",
  "key6": "3C1pHdK5qMaqBqYbYtUD52v4yVaes83ij912Wr59o3fKmB58r7msVeECVCdN73ihQT5EjHQbvB7rg2xMsC4ad83p",
  "key7": "57q8jTtmeMbihBieSo4SiatKTDaT5dBT2MTBAGP3HYXvebJ49CG7r2B7EmP3RCV2YakuyUJ69GbMXeYWeRmG13Gj",
  "key8": "5vqEnxBwRDDFgMoT8rwy9xAQMd441aVo7X6fiQYV2wdh1JQFdJuwNK62XnLraAPXYgLpBD4nC3FPvoJFrftwX2Dg",
  "key9": "3WtLpxz1EnLm8S5t3buFJmYLivbBRkHKWcZmcQnc3JBUEAxdCQjikZ4zSWu2X2BaSSfHnUsFDHoXNtUwmxH6g2gt",
  "key10": "5udE9pvKWwPX7KewjLHRuxn3n8D7B7R7M3FJccnKEWzpoDcHUbnnSLKJodSXYcedz6nhnfZzVNyoa8XER6xEoZDc",
  "key11": "YgrAhUyw8rnU1qS1bSEr3getaYKy97YAJSFeEaAYQDYC1MY4QS3KYJ3rFmqkVXaNNfK7qSS2EveGFmDkY39Ceaw",
  "key12": "hKBXcSwAvdLjoVbdTQTQdXSaBpVSr7cKwmAKnfFZ5na9Lyi7W3ENCr86wzxUgZNc3fCmD4nATNj1P4QnTtQNrkc",
  "key13": "2RNm12rT5YcRYQTrvYMqEs1iqDdXFHYQfe6R2S7dXhuZmBSTfwnSxhqzjFqVWFeVi7zgCU4DisdT7hfmtsZMYqCz",
  "key14": "Mgr3iXS682y9zN5mXCPRGSi5vu7hoC8e5VEXgmewPqaoYodQE4uVwNxGqJtudRVnVTQqAHbaa84y8BzW6r5bPGf",
  "key15": "3J9f1FMh3KxBLivHE6RoJPbdWA3VVQLyyVq4Z9kMkBXEQXgWod7zF5RCKZngPQNATtGS7BgYGn1A36jELdpgNn4G",
  "key16": "4XRaWTxcRHd21KJNFHQQYPtawxQS3FxMDwSHFECP7ApfdKdnSCKee4wnA9Y4jTv2CY1XD3LGNQc2EAsDxvginDyP",
  "key17": "3gMdCkuPGsJgSEBkvkrEtE6VRb3PYwPcx74pKffLeUp5x595KGjfuXvui3Eeb3yYQgP2HBYJeNPrGWM19RSsQMoB",
  "key18": "2N2RLtynZ7E8siHHTUEgRNyDJwif3hycPNp7RFQDNhF698GzyjPGfPLBZQoZidYNLoTvc4Z4XFKWKN9srPSdhegv",
  "key19": "5SzBFe74Ezap2StmHxJtGXRXfrR5e5RqNzGHfCZ9zrhUDGidCZ3CvnBQ2tpruZAXmST1b5GKd8TXKw79NeCFEKZ5",
  "key20": "2XwVa8akecfrcZ71V5goSjPfzVA1Qxf4Dv5TT1vsinE5YNJsXqgx9vgzoa9D3eSpmZDNdKhEmRkc7KBFHG8XhWdr",
  "key21": "639QyQQaWMek6FYnq25daqAw9Twq24Kq6zdymism2Ln1bY9vwfRB2BT3iqJKvX5V7ydM2i6hMth1dQGg2qNX8Hvu",
  "key22": "8gc7gHqEd56MZawoPttCQJKwXuRuYRbZCbXUvwyGq2nRDBPRHas4m9Fdm179XZ6JRV53f9KMMkGN1phcNnyukZA",
  "key23": "4PCYGE1o3u7duqTSHiGkN1eATHs6Qhrr1UcjWmrcyyTst1iKbgBBp38ufkziAGn7txS4i9MVYfgrsrvNUR45nySB",
  "key24": "4oTs4UJG6E1Rdp3HFFbiNNdBUXF9JV7yyo8wjUBfmHmXAFtNVZL3WAEq5ZJcxcxfpVPMEzFQpnDDsQEGCrpi5sj3",
  "key25": "5hSrvAwXBCv1PckSn1oQ57AAb64JrY8Y3XigJZSiy5P7BeA9SV2ZX6KpCSCX6dH4pEo61Hw7i87ehffMRZLUjHbx",
  "key26": "4TWi2BZqPSk5JRFQ9Dwbc7u4cYRjmBiXaWjY1bJbdBeukp5RjVkpXmwcJGajSDH4NaNTTJkaTQLFEG5HrujBsjP7",
  "key27": "X18iKD8jFFpa1beMhD2ALNxwJDpsQXtCCve5MnA5jqrh2RNsG8omjpTzmfcMijDgeXhsiSAKGwhT1LxcUSDdCK4",
  "key28": "3HZdJPSyxSdywwkipfmvAgtsUA7sUxfSznUfJwuSfLz6WkSWkkRr1Am9sJxM5eyhCUcjPT2QsYjh9TUhEDaSy3NV",
  "key29": "5skqE7KuWEoKUzjhsuqaQrbcwiPLx47LBZMxxV2EVgVCbWE49ijM8bYRbXWNkYnaWgnFbnBgLC1XoM4UHXzt8Nme",
  "key30": "spHBamR6Z3p1C8SYXPoTTdANxiRGDp65cCiBaF4vUE1NG4H2JddCnAGmQ5eZwaZ93UoP1BiUVWjssLMxvfqkBzt",
  "key31": "4hgW4fBCCb7xjfc571iDhBwRRbAnEawbEH8iMhnHmGh8cgV4eYyg8vriZZzJignnoJ6czU9s1zQFQW5kbDDx7SX",
  "key32": "2Anzupybs5ymwXCNxPF2Yc1FRNQPUG59Q1ZRaFDJFyMFzGr5qwtipuXC9HZeBDG43xEBXHPFZ6Li4L7BZUTaTsDf",
  "key33": "2SmztCzWAE14FfwJemDzzLQS8syN6Za5mWeAvxcjE8UNy38mzF6ZLJXNDV8Y5aX7Ua3WCEm57AdckVZMB4gdzyNX",
  "key34": "3cerZo3xpUti82Uh51jP5K3DkXpeYnw16d1u1c9XhYfx2h9gCWELidf93SssxJwDMpciTh6faN7e9tzDMpTXJuMh",
  "key35": "4GmZC2sZCpA2zEHPpJEhtRWTYbdgWTUzXqx4LQuSkdrPYF5DXb79QeAidvQjfTptqHUXU6KNaMHmaZcDUegHMuQa",
  "key36": "3kDAsFnDVRgJEkMA78XzpFhpUm3qBCmAnkJnzX8xmvoByRFiFcqvEAnhuvUTQ7Uuz6rTnQfUgbXJvSrvSV6zJLm4",
  "key37": "3kbTbxnxSJD3ouiuYFvRt49iWickWszoka7qWwkQSVnywvQqnrsdwWpPRLidX8nanXM1DPo9pLDf31ezA5vGC9iY",
  "key38": "5fX4fNRSNh9cLEFBxs9LkX3YPFSMAnjtyB2gGkTTNpwwEkYu2Cj3MrMxjkVCncKP18oDBReuuPCY7c4XgWpWa8w4",
  "key39": "5CkNXwjbpCWCWLPsneopP6YfPhR3bjo94vrZo8D2UFtWCnQuSAeXCVAXRF3kMue4jh1814qzM8qGAvJEJDqXsyX1",
  "key40": "2GNuGi9q6RoLnmsZXu6YWjYXMFTTsumvDWR8KjRUhpo28inhA9jj2GebAieesMuDqp9p9X6VNMBekBxDeiL42H3Q",
  "key41": "3fJ24NHoZa44qGeBVMjNEZrNVLVB6sFwcWPzuLp5QZxZGSMRX7shwtQAXsPuikoj8jbN1q55uKEsDXXnrQqj2xU2",
  "key42": "3CsQ7WJNpEgP9VNY3xJMkBWAXGggUS7VrEGZiRU5gsnW15ntoKTQ5c1EGh9kK7nCLgnqeWHLNry47fJ8SyTjAR9w",
  "key43": "SgYRcKid1cykZFBD6PZQtTMdoiaqp7iBAGvCFw3DRLeejcswaBm1H8DYLoz66DVJGjqkVPE6oXsrHUkxh3a3X4d",
  "key44": "66bWdDxNarvbVwDE5Z5VxfATHYWEFGdpNKoptaAern4dDKP9RN4M38n8CSenNPA4iyboEGxU1YEiDQcDyYbG1GkA",
  "key45": "5e29j55wBenRYjTDNn6oMcR4t7KxWNUYRtTtLQF4UsisRNXCuJ9knKrErdQeDQhDcxepfdCEiwmvznDWKWaTqRu2",
  "key46": "eN43fcQAaiSDRQwi7NcVoH6r9r2sLXBHFwf6BZeJmqvD1f3tgiWMtkMSDQ8rnfRygV5XJUPTGjkYv6Qmpn1USxv",
  "key47": "5cbt8EbZWPegs1A7NoQKQb3xqaCuEEhEmikYKiu8B6jhezBPTmWnQhwqr2jjBkaLKHJESwMqPt1N53HMi9Vfkm46",
  "key48": "fR6NZe2VabwonLQVArdAbrf9iUYKheRnBKu5XB9S7fCo84xqatWGc1oF2kmHj1wUDtaQ262QQ2nSsdzsNREeczW",
  "key49": "mPEnygQ5dTbZxuSpCu3358Ytp8bqNWv1UFP8eZqrHiwo9jYcz5ArAfyg3Hgwrv2MbHG2Pk2nDoL2k4Xu4VEBpMU"
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
