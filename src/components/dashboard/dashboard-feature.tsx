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
    "zBHdDY1gDabkGqeP5X4teFteQJu7P7uMoF1kS6VnXCqeZcdxtDWGYMCtFKBHRYEZwv5cihbCaHwZpmBjMQgQpYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fTD5c8mLwiXvpDCPvoHDBEbFXxmRSxzGXtcFnQbmqQoocNRRfhv4RTJyMVv5VRR9f9ovDuTzhwqwpApyhNo4ueu",
  "key1": "3TTeMxeAcePXR9t8WeSKvsrFNEturSGQtZ1xneWLkXctV2wBi6XehUjHmvQUbF9q25MBvJSaVYPQq1poEvnU7CDo",
  "key2": "5KircDCXTTxZpxLc8xkY2Y2EKJ1nqf2j9trhV4B1oEDQ6YfEZ8fbrQJQMYNEGfGgcZy3UHRm8gbZBeUPu6YScLgv",
  "key3": "rQVrDRkmfFbVdPq33eXwRgvXTNa3adbrVfgXu7Me7o37kuGqk7dG24LyikJ8jqqJtjcuQrZq3MQ2VpHH4SZ4BDi",
  "key4": "2Kecjs2XM1g6Azh7pXrirnZDcXccmHdeHaBjruSjgK5Jv4NJ3Vx2ZbA4sqaoJcvPt2HfznFTFMhbptGXY5AQQnVr",
  "key5": "ZuYu2XN28GVKjE5Hk5j2tgLsTw5M7V8br9WVP3e8JYiNZeKDFKA8RLTNRDmjQ4KzN1VY37hfcJe7dY88VUmgHAm",
  "key6": "558d9ZCmLj4A1WW1mT87xFbsJzabauw8P2zA1vCAyBJ9yHhGiPSyHwu7RobL6XHWMESk2z6bjoWDaTME8E6UjqxH",
  "key7": "3ENxLk7bqKAHBgmzEt9CWc3H6XfhHeCoQg1nqNsefjWKAkGCCtvFBN6LZvWN1Ydbv4iz9zjz89nV8GbeRHN72LEm",
  "key8": "3gcgbHSZL6JfRQpd6Kg8og3tfpaSf1h7tK6ZaFvmAvQJgAN6966iuZrnyguSz2iZa6iA93fTNhsD5VhUS3Tz5Ksx",
  "key9": "42aCYVoXbS7LQ6uBQzURHRfnAKXoi8j1n8rLTg5kCRNPZvvMisLBWvAQ4hNVoDPZGL4FhNsBW6zeWLVfvavbqw6u",
  "key10": "5Y5oruFoyX2uVLnQMt4RyzWY31uRdWFWpTtz2VwXx5RHQ3K6WHScyj52qTbGVQB7YXVbepktEujkGsoCcYoF3sYa",
  "key11": "eTCVxNu84yZa2AKs9BAbGc1FHJGTAjJVJ1Vkq8Qwd9GEoovhpPUb4g7rSMwsKYkixarqDshdzfwcWv5h9BEsSCL",
  "key12": "2fxHuCoMsBwCYziVTB8KUBmwpcpnmYvitgCVgCsjGjqmNQj4zFTLL5NKQqPCwF4tugNc5DyvXyUyWt7SoJKmu92a",
  "key13": "7CqnuSbMXKMzEkP2sJrJrxD3hoajJscjC5aBFB3XsRXpQUpgkhKC6CF9ZBNwSetC9CjMFWZXVXtDjaagTSqVJex",
  "key14": "VfYv6wRapaatvqDXgbYrpjhisc76x1UbpdXzR67Zzu3NEikt5D2kbktEC4ThWX1QHvE15fcfdGoKEWdbq3r78wf",
  "key15": "5FkFzmp3riGnoAwpxy9qSdJ5bURG6yGwvPNKKhAQNoSgvpwZiDwHkYcy8qrsfB7L8mLThDuJHrySF7WtcfGozuig",
  "key16": "4DzdJwWPVsLScwnTSYSF45FXgebynvRRGurYxYxk64CiVRrX9ekuigAXRQe3TaUddhGr3mD18yAdxT1ihN1A1kCr",
  "key17": "iXxpreC2urCxPqEXugw9z52yEiDnxzP5pGRHcEoXLPT7qBZJi3s53vTEJf4x3rLpcVxiTuFZPPkWBpiciy7YGYx",
  "key18": "5T8fBmCV5bWBsd8D5yn68iXEP1aH6qTUUW5DhVmkGZiYTA85atMyPVoNaBaqDQKNWt8krcq1XJH8ov2sWHbBh6mr",
  "key19": "4tiAsuj2XEQ3tvf3F3HxzKv59PYKxrohTo3GzRcgbecvSHm79UWaECJLdCsoUbcJHWtvwhBJxLFHXqLteUWqEYm1",
  "key20": "TKRboj9KChbYijSXw5Y9hRMGq7UqP898qYmjbYmvmEBnYSjijhMDzZv8iudR5CuqJ2aSDhuS9n1P5MfaAzkU6r9",
  "key21": "5q4vb7vrE7iAwDuV9rXn1cbQH2Hxxcbwe3chfRyCxNhAWAA3MTVNQX1YTxZaX12EUuvjfyK5Cytteo6TTrrntJMn",
  "key22": "4KJo9DuuzvUMCDsAx22Mah6C1AAfMYGzPLD4cDXHr2fYKHmm4Ps1UQeagzXN4MezmTg9pUke3C5CdJG1RtsSwR7Q",
  "key23": "64fRpnfGuzeLtgsdaWViVGAihPLYFLxYNvZWrTf622k5PFUEqhMGotwpLZPYs4wDeNDAWLzyFXbJobk8Nab47fBJ",
  "key24": "5f62KzZMcy3P9W7bDnCQuB72sR6YTnBsWbauuU7e56aVZc1V6TmhgXedos9KVSiyPDhNRvqWwRSZYMYCWhs7zvAv",
  "key25": "FDwTYNBkThXCptffvFUbnzfSzWVEs2YW9yEDEf5RvTMDCtaqqjzoXd9aYrzWex4FNNrcVxiVZK5sUCWtEVSV9Ue",
  "key26": "55er4xF1BFbe4LpA75CeuUD2dLCcaXJN2BCYKrw6c6SuuTxBwcNhPvGJWU7wTfusGrCXkJTyYwMd7i6ZezqLhH7J",
  "key27": "51z7tm6qD2GXeAMJ4dPFtcvdmeQoSssBNPNiHqsQGsgrecwzVbGaHGr9MscKfiNuqFELUEBw9VwbKYvMeThAonFH",
  "key28": "5BnqxGNaETo9CH3cPj1h9NN4z8NaiNHYs8UqqFbbbveLCzn84h3bnVYwq4dTFiLWru2SkajdmTYj4pqY8arG5XDW",
  "key29": "2UY5UGAER2gGYMPwTuX5KQnHoXEgeABZiFcw2RQ5cZzhZSyo5wq5RwPm6iRNLV3QbPvg9B5cJc81LMkEMNDVF5jK",
  "key30": "5z2G7zeqEuXW9Bm6r5Q1hBxvy6uPGKnnuGNXTRxWPM2EHfyQy4iAsn6XCTgL6BvEGDiWT2U6hksiA8Y64iKSYkGK",
  "key31": "KvEq9zKukbJ8BKAksB5pGLnfCUNftTLajLbpbPQpaq3BGdAMmHrmTiGJfgjypRgPE4BejQVrrTT9K4sQeNCVrtS",
  "key32": "49Gg9xtY6XC4h6bTnvB4JVo1VKtGt742PmtaiyGFL535ZFheAuX9yoQkABZnUMY9ftMUdeDvFwyk1SgPZ1c9mxRx",
  "key33": "5vAzBzMkBejfz7X4sAHdNhUZy7gu85rRLiDnTBoNDjBLXurpiYnRT35XgNFycd4ZASQAvA4kUSkmbQcsPUb3XCD3",
  "key34": "2fQNDj2Wyp1eVdYW1VGwWBps7wRSMgCRTGcWY41fLmQjpGoW5m8pAXW6uNBMSgjVZAB8DVmoWbjbQtkKi5B4i2Vo",
  "key35": "2AUL3mhUHZMTo6KZar3wPv7wwMzLQhuaKAis3FJVBkUFdvo3sVjHRv5mooCYwLsJdCRKVgiuzmaE2pfxzdCWLk75",
  "key36": "pVy7YEMwZuj5mqHJXJehTTZaC8CmLtcX1DhQ2qV6GHEcNEgHyWoQQ6VHpCq8EVGYyFbgCJXo5n5LCS2jyidtiWK",
  "key37": "4EmmUq9FWnBcGknjx1kXxBPLMVK6qc4FzrpoMPPyrTE6yATmz4WUDiXtrWC8eUZbmksmQZhPucz6VRsAiFAu1iLa",
  "key38": "4D58UySjVcJNn3zQRpYJo79samD19AJbiPQ4GfHRuxP8gMBuHCoPq8aRaHi2tdJRq81WJASq8o8bXjiWVC98kTwV",
  "key39": "43mB2GYFh9YB2wkUrymmqZxVwPEZNTmWyybK8f9qeK2HT5KCGLXAP1G2oCYVR1hZQkpfGhA4VqJXSiFqh4r9EohY",
  "key40": "2vb3UUnqTGiXshppatWUvXjtWb42bvymuoRUMRZGHnEHWNZ6EyNu84wKnqjQZ1z7hnFirVwX2Fq4JXqwFspe4c9v",
  "key41": "45vdyUkoRyVsbnFhThhF42GCsmgXzGnJx47o1nbW8wTVyAmr6DbWTcg4WzXVfKPMbFHtS7Zs73KvVfpuB9PGsakG",
  "key42": "3rwHg4MrJRYkKTaRyTVxFumEHAdKNkVov5NudVMomb3G7R9YnHUqfGNFjqXNsbi7JwXgC945HeXjHfACYoxwbTta",
  "key43": "5o6asspKSMiBX5fqvQVEVdiZR7JgvXJxH8gjhVDXKwt1KYGYgNvW2EU4d3cGivqjZqsZyLFpiWj8bdL3GnWocCxH",
  "key44": "HoMJiBFk3GpBTtEUXLaQqWoRCeCWRSxphUiSDnWYKrJ7ZCmkv2Q2CMph7AE9qZKof5WSDXXMu7Zj1jzHyckEvyb",
  "key45": "3xPtwibhMJyVfs8bep8XEknVTvci5fqCv5fhwTjjWCCGSg8qQ6b3eHYnDtDggKnqjUHE3LYTYFReK4fx2RLwE4Ss",
  "key46": "4qjcUfbHH7WJi4ZS5y9Hd7nXmJS5xCUPMWWibC6dtquJAELsRLwwXyyXDiUL91XaopNnKYuXsYimAwF8ZpvwEGW3",
  "key47": "3axqtrQyFEuaQ3Ge3u8QQGkWvUc1w8XG8ZA25LKBdpq57pUmPFNkW8Q69Xxw6QWJKU3kq9zb3GJcFy8jfpv57uXX",
  "key48": "4xyyKVe1xfKMPBKwCSoGUHFtWYAQDxk3Z6oM3mTEF1u6aJdxppdtvFA4hyQZPmMfXfRtruMiGeJw9s9wKUmD3saC",
  "key49": "TFk4TKpzaPgMfjZsFXZ2rypA5Ef5sJ3xHrw2CSTFzTWwJxqkWVsRF9MAJiuHaGiwkeD2SAkK2iBuT2jmErwEmxb"
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
