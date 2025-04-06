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
    "jgrRiMe1bCbH4PhSupLgjumwXCQSZTDDdz3SwMBRPeiZ3yE8xuUMb82gMeCo61C8714RpD1yBnNwPTQs4xaeVhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TyrBGUiRtyASSMksGm4c73dUux9qAhqrK1C7zYv9zdPq3PfW5JpW8m58ND4quk8tAxYHigsE8MAuyRf7bAFJfwu",
  "key1": "HdhXSYL9X5rr5qCgkaxCpCx3SQ4j3qhVkKEYv3BNzfGhnQoHf2AJZQiS9JA44EJ6ffk2z6iBHmJZqqAoPPtjFj8",
  "key2": "QArY3yVsytMQvM6TdPfqfAA9LnjmHT5QwwjvgysjNwGTes4sYHeeWwPT2azmzxh28m3LbvnrixhCoKiXvVVyoQk",
  "key3": "2ExhySUxrJKdm4JZxvPnrMT6fsxwiDvSBRENTs9AfczdUCGLXgE9qHdvEPhcnbYELrxL9qSGEfDTKyd8bcjYYmyn",
  "key4": "2ay6fSy4hm4aX6brq8kzgNqsqtbvEkN8AQneZfj7jQRfaFB5i8FrF7GmPfosnP6ZNETQ3vL5y3HRMDhk9iMfv1qY",
  "key5": "5excT4L27mgH7hLgL9cp6xRdqx5AZCDfpTHhE524HMMNosBik7s4V4yAkFSjgzxLMoodhL99xGg8aFLNVKzFLo24",
  "key6": "47opHKREYapE5xPUcvwvapWzpNYa5ZUQ4PskFop1VWdjYNHdXEPKrvn8TqGyrxhvSyvZvjEn9ntkvSVs6jGByK7N",
  "key7": "3UhHiR9dmcA6xEpJtVxh6492Kw8TTLxQUT8NyikmBANRpUFwsh8Q4QGgpB9B5PVX9kjbJkzdsX6oC85gBC2RPooa",
  "key8": "53w3R29mrdZMWTJ86ynN6uFw2HkRHNPKcCpywJhs8c6P1Dh9xUza8c7VUVttyrsesvnWHNt5UcEoKz4RPWaRctbk",
  "key9": "DdtTptr6LUuWqdsxjUWAQaAKPoqyZTwJt3TPUj9PoNJtKNviYXErvsyx69zwVtuPQpVArFtGDwi4aHZEoJRCYga",
  "key10": "4sKHimb9jCrdbiCM393WS8nmZkZ1yApMUvhfcYeou5F6LuzfC4vLAYdX4yF7cUoVhVshCm3SZPEihA2uLz8GT2Q6",
  "key11": "ezqps9kGoCCpwvXNDhPGtnApf2pGna2GpHqRiAJcybdYCtzP7gshvSxKRWsucBcuzkRbKhuHAtYaW7eDQwXYMem",
  "key12": "5mQdUHSCvLzT8fDZuommHPdnxVKJmwX3kEnvjkquqkYhgxyorLY9cGuKJvapMyk2sVR1BJLs4s4p3UZ5wNGab9NV",
  "key13": "2hinAtSCngFsKUT5jHdNsvWF6KkSeQnaLK5H2bFrpYt4qdQEVTWD2GGSTg56TcSpAMLapzzyKbnNcBxJvzt1bh8P",
  "key14": "5YnBoccmk9cYvEP1HzQ9hLwpmiZ2bN1EvJC5KosGHTr5Qyyf25UduRyLgUJnGdcLk1vr2yX16CQ52sD6qDM4J6hs",
  "key15": "2VxkUNAUtcK9bFcJQ91PArdDpc8AJC1M9gETDCsbwz1XGXRsWQja4rfhURs4uHpK2R777kzFy89NJEpjoUFix27W",
  "key16": "sf7FueVmcKYvW286LZbdkzc1RHNrxPPNr3yGRGnMovTZU21UMdn4mb22Ufv2GppSfqs8eLxEKe6yq12x99Kjii9",
  "key17": "62WsguKVS4sFiTEFXcZjwTPM6WP6QQcdXKGWETe626B9XSeUkNcPNiFiMBrHozqmgHvrMkmnpRNxHQU3uhFT6pGZ",
  "key18": "3b73sdqca1h16NUuzYMpVqapgTLcyAf9unGEikQwRqM5YBBHCDWnFB2jMnEfjPrQk6j4R3LBJ6UVmj8S3kS89VHo",
  "key19": "5DftuzrMjY7MftLrrKSC1Fz1z9u7RmWR1aQtzKwZZ7jKQrzZYfM8BzUBfFmpnBn3Agzc45wEXKDeX9GdawWLQ1MA",
  "key20": "4CzHNuGPb7t1wU48Fy1CdDeb8x4hyC4E5YBZFZcATNpfLgu32ae9QsHJVGQdJ6D9sfNjTFip6ectH9KaJSMZsPoa",
  "key21": "5Sv9Yj2tEjub5TquERs4X4PswB5WgwvXfUVvEoJQ32y9yvvGeMPa5Vg1cUottcFNpUX9RQEsJkkfx6WLvNRECvsg",
  "key22": "2C8pmYjNfJqsw1iGUTx8mZ1cxsLYZmq9wxpeDtXST4xacaK3xDpd9Jd4V8GhpawF1dPKYarFLXNt4fD8EkxrM5kF",
  "key23": "ux9CsMToM3BK6AXQx2iVmZgqEVUj3gQAW3ZHjq8QCP6aBbLE98gzLr5jLRAcrXYpkjUVfGWar1fTfaazWLte7JU",
  "key24": "82XJajQaTrDrawUMckmdRK13Tvw4fchg3Lb1XDjq26dLsLz4CJDVTsefzMHwfGhhDdzMLKM5kgUbHYVJAAAFgTd",
  "key25": "3WnDmccA3SVJYVqy6LanTn6kKSNz8eC9NViKJMJ615U76iEwJoF2eoLbWS7a8N8A7pHkoNHd86hpJzevYtZDkjVB",
  "key26": "5uu6d3STBjetVkGKibsJiZUhFiRuzLZCCUkNPxZc7K363BdnNRAx9LkvbnfokEXq2A7qVULqAdKFfQbWXbrBjzR1",
  "key27": "ok8iVRo82nBZbHEx2dkv6buokPKCWqoWpjoT9Fe96tfthZUdJ8rWmwzkpy1irJ4AkcSfy8FtGeS9CQY8Nt4ajMB",
  "key28": "uNcPBFxXNKFN63UnLuxYtV5DtNAtn7jAiiGF1Cvds7ReLRS39fdFKPbRvSjC2YxQMJRZHgAhML4vEUs4NEHLGZc",
  "key29": "2nrG5NPx3Kp3jwt2hXW1zpMwt4KqsFLCEJwo4MfgGvjHDyviawPM6zt63sqUXb6uRcMqJy9bnETzULESu1oLB941",
  "key30": "47RK4jgQF9rFNgHStdndQXwKex5oCq44RkcAjQLpewn6DCmUzEjGjNNaUzShxhVNjZqNVWag7onAbbzsR2nBZaKA",
  "key31": "5rB5mVzkStxDcnNf8M6yufvCpdrqRUkFcTzm8kaU9uH2oNNiKB8BeEEjt2Ws9TVTpr6t2tmMfRPHjqfe5Jvp7CJK",
  "key32": "661X86B5F4yaihCYpoiWkWKWapn4xFitiDKGKUwpx2yqFYYDCdchceEBX53HNXhfMhQvJAuTa1r11d5L4d7muhfq",
  "key33": "4QsjumRLw2isVTVewRA3kLAoafeC4BjL9ZainLMtmnWTzMFaEp365Yk4VYfT3wWzZ7UGgyjPhRgQZheCxv4WMpyr",
  "key34": "5WBw1Tauz4mwLG4wBd8QLAneXo7tEMtmuQWfqwc7zrv1PygP34KNvqXw1j1esKydSU9FrbZgtqPtf8AoSRFd3yqP",
  "key35": "5pZosqPDFXciCMVVJchbhNsk2AsMjDr98UMXrJwb9egjbuKH3mK9EmikmR13i8BBQomCr4vcaJDA5ft4CkGDieTF",
  "key36": "56CbM5t37Zs4y695rDP322Nm4BxEoNFY6fxNm3HD3Nv3ztXm3F4oSfemz7AeFGpif7LkPf3kuTuPNxDF7RjMtRoc",
  "key37": "4JQrcxerH7qPf2xq2WcA1mtKT2q1PMnmGinbZdtZfKcms5AJ7NdRcF9YJhAka6oMvJTSKahu7VqzMB2yWPW4Lz2t",
  "key38": "67U4a29qiKBdpgRj1b23QXXgQef57cP3EkMXY8HY1YXfykZBSuZgjYnZt8oBRZxy4XRojBrB1cXmGk3QxgDhLAq4",
  "key39": "5MeRdVc7EgceJPVN1p19RfgMf2nRjqo3FQGUe7LbfPsESMjQKVrXafAgibs9SrsTNz7bb48QKoyuj5UzLXiYWbZ2"
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
